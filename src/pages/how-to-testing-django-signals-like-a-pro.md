---
author: Haki Benita
authorTwitter: https://twitter.com/be_haki
authorFacebook: none
title: "How to test Django Signals like a pro"
subTitle: "Django Signals are extremely useful for decoupling modules. They allow a low-level Django app to send events for other apps to handle wit..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*UTaOKkC0_Ha3DgqrzrcPzw.jpeg
url: https://medium.freecodecamp.org/how-to-testing-django-signals-like-a-pro-c7ed74279311
id: how-to-testing-django-signals-like-a-pro-c7ed74279311
date: 2017-02-18T05:43:32.031Z
tags: [
  "Python",
  "Programming",
  "Django",
  "Testing",
  "Software Development"
]
---
# How to test Django Signals like a pro







![](https://cdn-images-1.medium.com/max/2000/1*UTaOKkC0_Ha3DgqrzrcPzw.jpeg)

A signal receiver I’m glad I don’t have to test







[Django Signals](https://docs.djangoproject.com/en/1.10/topics/signals/) are extremely useful for decoupling modules. They allow a low-level Django app to send events for other apps to handle without creating a direct dependency.

Signals are easy to set up, but harder to test. So In this article, I’m going to walk you through implementing a context manager for testing Django signals, step by step.

### The Use Case

Let’s say you have a payment module with a charge function. (I [write a lot about payments](https://medium.com/@hakibenita/working-with-apis-the-pythonic-way-484784ed1ce0#.ji6p00af1), so I know this use case well.) Once a charge is made, you want to increment a total charges counter.

What would that look like using signals?

First, define the signal:

<pre name="291d" id="291d" class="graf graf--pre graf-after--p"># signals.py</pre>

<pre name="fced" id="fced" class="graf graf--pre graf-after--pre">from django.dispatch import Signal</pre>

<pre name="a5a2" id="a5a2" class="graf graf--pre graf-after--pre">**charge_completed = Signal(providing_args=['total'])**</pre>

Then send the signal when a charge completes successfully:

<pre name="d826" id="d826" class="graf graf--pre graf-after--p"># payment.py</pre>

<pre name="f460" id="f460" class="graf graf--pre graf-after--pre">from .signals import charge_completed</pre>

<pre name="a56b" id="a56b" class="graf graf--pre graf-after--pre">@classmethod  
def process_charge(cls, total):</pre>

<pre name="0502" id="0502" class="graf graf--pre graf-after--pre">    # Process charge…</pre>

<pre name="f27b" id="f27b" class="graf graf--pre graf-after--pre"> **if success:**   **     charge_completed.send_robust(  
            sender=cls,  
            total=total,  
        )**</pre>

A different app, such as a summary app, can connect a handler that increments a total charges counter:

<pre name="56e8" id="56e8" class="graf graf--pre graf-after--p"># summary.py</pre>

<pre name="6df1" id="6df1" class="graf graf--pre graf-after--pre">from django.dispatch import receiver</pre>

<pre name="1550" id="1550" class="graf graf--pre graf-after--pre">from .signals import charge_completed</pre>

<pre name="dc93" id="dc93" class="graf graf--pre graf-after--pre">  
**@receiver(charge_completed)**  
def increment_total_charges(sender, total, **kwargs):  
    total_charges += total</pre>

The payment module does not have to know the summary module or any other module handling completed charges. **You can add many receivers without modifying the payment module**.

For example, the following are good candidates for receivers:

*   Update the transaction status.
*   Send an email notification to the user.
*   Update the last used date of the credit card.

### Testing Signals

Now that you got the basics covered, let’s write a test for `process_charge`. You want to make sure the signal is sent with the right arguments when a charge completes successfully.

The best way to test if a signal was sent is to connect to it:

<pre name="a231" id="a231" class="graf graf--pre graf-after--p"># test.py</pre>

<pre name="78a7" id="78a7" class="graf graf--pre graf-after--pre">from django.test import TestCase</pre>

<pre name="c6b4" id="c6b4" class="graf graf--pre graf-after--pre">from .payment import charge  
from .signals import charge_completed</pre>

<pre name="e6d6" id="e6d6" class="graf graf--pre graf-after--pre">class TestCharge(TestCase):</pre>

<pre name="2d69" id="2d69" class="graf graf--pre graf-after--pre">    def test_should_send_signal_when_charge_succeeds(self):  
        self.signal_was_called = False  
        self.total = None</pre>

<pre name="ceaf" id="ceaf" class="graf graf--pre graf-after--pre"> **def handler(sender, total, **kwargs):**          **  self.signal_was_called = True  
            self.total = total**</pre>

<pre name="0cc0" id="0cc0" class="graf graf--pre graf-after--pre"> **charge_completed.connect(handler)**</pre>

<pre name="dad3" id="dad3" class="graf graf--pre graf-after--pre">        charge(100)</pre>

<pre name="3ea7" id="3ea7" class="graf graf--pre graf-after--pre">        self.assertTrue(self.signal_was_called)  
        self.assertEqual(self.total, 100)</pre>

<pre name="6534" id="6534" class="graf graf--pre graf-after--pre"> **charge_completed.disconnect(handler)**</pre>

We create a handler, connect to the signal, execute the function and check the args.

We use `self` inside the handler to create a closure. If we hadn’t used `self` the handler function would update the variables in its local scope and we won’t have access to them. We will revisit this later.

Let’s add a test to **make sure the signal is not called if the charge failed**:

<pre name="4e9d" id="4e9d" class="graf graf--pre graf-after--p">def test_should_not_send_signal_when_charge_failed(self):  
    self.signal_was_called = False</pre>

<pre name="2049" id="2049" class="graf graf--pre graf-after--pre">    def handler(sender, total, **kwargs):  
        self.signal_was_called = True</pre>

<pre name="ca56" id="ca56" class="graf graf--pre graf-after--pre">    charge_completed.connect(handler)</pre>

<pre name="0294" id="0294" class="graf graf--pre graf-after--pre">    charge(-1)</pre>

<pre name="c4c1" id="c4c1" class="graf graf--pre graf-after--pre"> **self.assertFalse(self.signal_was_called)**</pre>

<pre name="266d" id="266d" class="graf graf--pre graf-after--pre">    charge_completed.disconnect(handler)</pre>

This is working but it’s **a lot of boilerplate!** There must be a better way.

### Enter Context Manager

Let’s break down what we did so far:

1.  Connect a signal to some handler.
2.  Run the test code and save the arguments passed to the handler.
3.  Disconnect the handler from the signal.

This pattern sounds familiar…

Let’s look at what a (file) [open context manager](https://docs.python.org/3/library/functions.html#open) does:

1.  Open a file.
2.  Process the file.
3.  Close the file.

And a [database transaction context manager](https://docs.djangoproject.com/en/1.10/topics/db/transactions/#controlling-transactions-explicitly):

1.  Open transaction.
2.  Execute some operations.
3.  Close transaction (commit / rollback).

It looks like **a context manager can work for signals as well**.

Before you start, think how you want to use a context manager to test signals:

<pre name="786f" id="786f" class="graf graf--pre graf-after--p">**with CatchSignal(charge_completed) as signal_args**:  
    charge(100)</pre>

<pre name="2f97" id="2f97" class="graf graf--pre graf-after--pre">self.assertEqual(signal_args.total, 100)</pre>

Nice, let’s give it a try:

<pre name="f655" id="f655" class="graf graf--pre graf-after--p">class CatchSignal:  
    def __init__(self, **signal**):  
        self.signal = signal  
        self.signal_kwargs = {}</pre>

<pre name="312b" id="312b" class="graf graf--pre graf-after--pre"> **def handler(sender, **kwargs):**            self.signal_kwrags.update(kwargs)</pre>

<pre name="dbc0" id="dbc0" class="graf graf--pre graf-after--pre">        self.handler = handler</pre>

<pre name="7d7a" id="7d7a" class="graf graf--pre graf-after--pre">    def __enter__(self):  
 **self.signal.connect(self.handler)** return self.signal_kwrags</pre>

<pre name="c5be" id="c5be" class="graf graf--pre graf-after--pre">    def __exit__(self, exc_type, exc_value, tb):  
 **self.signal.disconnect(self.handler)**</pre>

What we have here:

*   You initialized the context with the signal you want to “catch”.
*   The context creates a handler function to save the arguments sent by the signal.
*   You create closure by updating an existing object (`signal_kwargs`) on `self`.
*   You connect the handler to the signal.
*   Some processing is done (by the test) between `__enter__` and `__exit__`.
*   You disconnect the handler from the signal.

Let’s use the context manager to test the charge function:

<pre name="afed" id="afed" class="graf graf--pre graf-after--p">def test_should_send_signal_when_charge_succeeds(self):  
    **with CatchSignal(charge_completed) as signal_args:**  
        charge(100)  
    self.assertEqual(signal_args[‘total’], 100)</pre>

This is better, but **how would the negative test look like?**

<pre name="1b20" id="1b20" class="graf graf--pre graf-after--p">def test_should_not_send_signal_when_charge_failed(self):  
    with CatchSignal(signal) as signal_args:  
        charge(100)  
    self.assertEqual(**signal_args, {}**)</pre>

Yak, that’s bad.

Let’s take another look at the handler:

*   We want to make sure the handler function was invoked.
*   We want to test the args sent to the handler function.

Wait… **I already know this function!**

### Enter Mock

Let’s replace our handler with a Mock:

<pre name="2bf7" id="2bf7" class="graf graf--pre graf-after--p">**from unittest import mock**</pre>

<pre name="43cc" id="43cc" class="graf graf--pre graf-after--pre">class CatchSignal:  
    def __init__(self, signal):  
        self.signal = signal  
        **self.handler = mock.Mock()**</pre>

<pre name="7801" id="7801" class="graf graf--pre graf-after--pre">    def __enter__(self):  
        self.signal.connect(self.handler)  
        return self.handler</pre>

<pre name="6315" id="6315" class="graf graf--pre graf-after--pre">    def __exit__(self, exc_type, exc_value, tb):  
        self.signal.disconnect(self.handler)</pre>

And the tests:

<pre name="fc0f" id="fc0f" class="graf graf--pre graf-after--p">def test_should_send_signal_when_charge_succeeds(self):  
    with CatchSignal(charge_completed) as handler:  
        charge(100)  
    **handler.assert_called_once_with(  
        total=100,  
        sender=mock.ANY,  
        signal=charge_completed,  
    )**</pre>

<pre name="d4cd" id="d4cd" class="graf graf--pre graf-after--pre">def test_should_not_send_signal_when_charge_failed(self):  
    with CatchSignal(charge_completed) as handler:  
        charge(-1) **handler.assert_not_called()**</pre>

**Much better!**

You used the mock for exactly what it should be used for, and you don’t need to worry about scope and closure.

Now that you have this working, **can you make it even better?**

### Enter contextlib

Python has a utility module for handling context managers called [contextlib](https://docs.python.org/3.6/library/contextlib.html).

Let’s rewrite our context using `contextlib`:

<pre name="6c64" id="6c64" class="graf graf--pre graf-after--p">from unittest import mock  
**from contextlib import contextmanager**</pre>

<pre name="efa4" id="efa4" class="graf graf--pre graf-after--pre">**@contextmanager**  
def catch_signal(signal):  
    """Catch django signal and return the mocked call."""  
    handler = mock.Mock()  
    signal.connect(handler)  
yield handler    signal.disconnect(handler)</pre>

I like this approach better because it’s easier to follow:

*   The yield makes it clear where the test code is executed.
*   No need to save objects on `self` because the setup code (enter and exit) are in the same scope.

And that’s it — 4 lines of code to rule them all! Profit!








