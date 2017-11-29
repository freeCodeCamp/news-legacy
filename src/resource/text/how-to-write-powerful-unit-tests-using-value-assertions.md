---
author: Edd Yerburgh
authorTwitter: https://twitter.com/EddYerburgh
authorFacebook: none
title: "How to write more powerful unit tests by using value assertions"
subTitle: "Unit tests are awesome. Writing unit tests reduces bugs by 40–80%...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*kmxDhQcCfG3cuel6qBz2Iw.jpeg
url: https://medium.freecodecamp.org/how-to-write-powerful-unit-tests-using-value-assertions-3de5146c0088
id: how-to-write-powerful-unit-tests-using-value-assertions-3de5146c0088
date: 2017-10-05T11:26:29.007Z
tags: [
  "JavaScript",
  "Tech",
  "Programming",
  "Web Development",
  "Startup"
]
---
# How to write more powerful unit tests by using value assertions







![](https://cdn-images-1.medium.com/max/2000/1*kmxDhQcCfG3cuel6qBz2Iw.jpeg)







Unit tests are awesome. Writing unit tests [reduces bugs by 40–80%](https://www.computer.org/csdl/mags/so/2007/03/s3024.pdf).

But you need to do them right. Poorly written unit tests can suffocate a codebase, and cause more problems than they solve.

One way to improve your unit tests is to use **value assertions**.

In this article we’ll look at what value assertions are, and how to use them to improve your tests.

### Understanding assertions

Assertions are functions that check to make sure the code behaved as we expected.

Different languages have different conventions. In JavaScript, it’s common to follow the `expect` pattern. This is where you `expect` a condition to match a value.

We combine the `expect` function with another function called a **matcher**.

In the example below, we `expect` the result of `sum(1,1)` to equal `2`. The `toBe` matcher checks that the expect value equals `2`.

<pre name="e83e" id="e83e" class="graf graf--pre graf-after--p">expect(sum(1,1)).toBe(2)</pre>

If the result of `sum(1,1)` equals `2`, the function won’t do anything and the test will pass. If `sum(1,1)` doesn’t equal `2`, the function throws an **assertion error** and the test fails.

### Debugging assertion errors

In test frameworks, assertion errors are formatted to make the message easier to read. Assertion errors let you figure out quickly what went wrong in the test.

You can see a failing [Jest](https://facebook.github.io/jest/) assertion error below:



![](https://cdn-images-1.medium.com/max/1600/1*SHgCe-J5BnxbYHqYp-ziTQ.png)

A Jest assertion error



For some reason, `sum(1,1)` returned `3`.

If we check the code, we’ll find someone accidentally added `b` twice:

<pre name="48fe" id="48fe" class="graf graf--pre graf-after--p">function sum(a,b) {  
  return a + b + b  
}</pre>

We can fix the error quickly and get the `sum` function working again. The assertion error helped us figure out what went wrong and where.

### What’s a value assertion?

A value assertion is **an assertion that compares two values**.

We just wrote a value assertion:

<pre name="da07" id="da07" class="graf graf--pre graf-after--p">expect(sum(1,1)).toBe(2)</pre>

And it generated the assertion error:

<pre name="74d2" id="74d2" class="graf graf--pre graf-after--p">Expected value to be (using ===): 2 Received: 3</pre>

### What other assertions are there?

Another common assertion is a **boolean assertion**.

A boolean assertion is **an assertion that compares two booleans.**

<pre name="7f5c" id="7f5c" class="graf graf--pre graf-after--p">expect(add(1,1) === 2).toBe(true)</pre>

This generates a boolean assertion error:

<pre name="6b75" id="6b75" class="graf graf--pre graf-after--p">Expected value to be (using ===): true Received: false</pre>

### Debugging a value assertion

Value assertions throw descriptive assertion errors.

When a test fails with a value assertion, you can see why the test is failing. This gives us a clue to what is happening in the code:

<pre name="9376" id="9376" class="graf graf--pre graf-after--p">warning: expected 'somevalue' to equal 'some value'</pre>

You know what to look for in the code when you see an error like this. Oh, it looks like someone deleted a space by accident.

Value assertions improve the debuggability (yes that’s a word) of unit tests. From reading the assertion error, you can see what went wrong in the test.

Let’s look at an assertion error from a boolean assertion:



![](https://cdn-images-1.medium.com/max/1600/1*OuCMjAKGk1XmRD92fplo0Q.png)

A Jest boolean assertion error



What’s gone wrong?





<iframe data-width="435" data-height="244" width="435" height="244" src="https://medium.freecodecamp.org/media/7b14192947565707fccb782be84059ee?postId=3de5146c0088" data-media-id="7b14192947565707fccb782be84059ee" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FPBg4KWciMK6zu%2Fgiphy.gif&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





It takes longer to debug a test with a boolean assertion, because you don’t know what value was returned by the tested code.

This makes boolean assertion errors pretty useless in unit tests.

### Writing value assertions

So we want to write value assertions.

Most JavaScript testing libraries provide functions to write value assertions.

Jest contains tons of [useful matchers](https://facebook.github.io/jest/docs/en/expect.html) to create value assertions:

    .toBeGreaterThan(number).toContain(item).toHaveBeenCalled().toHaveProperty(keyPath, value)

### Call to action

Now you understand the power of value assertions, your tests will improve.

Get out there and write some debuggable unit tests!

If you enjoyed this article, please give me some claps so more people see it. Thanks!








