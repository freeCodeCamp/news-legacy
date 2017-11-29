---
author: Cristian Medina
authorTwitter: https://twitter.com/tryexceptpass
authorFacebook: none
title: "How to hack together a graphical Python debugger"
subTitle: "Zero-to-Debugging in 15 mins"
coverSrc: https://cdn-images-1.medium.com/max/2000/1*aOUY9bnxHsfHrZgyDz8_XA.jpeg
url: https://medium.freecodecamp.org/hacking-together-a-simple-graphical-python-debugger-efe7e6b1f9a8
id: hacking-together-a-simple-graphical-python-debugger-efe7e6b1f9a8
date: 2016-09-01T01:46:38.929Z
tags: [
  "Programming",
  "Python",
  "Tutorial",
  "Technology",
  "Software Development"
]
---
# How to hack together a graphical Python debugger

## Zero-to-Debugging in 15 mins

You don’t realize the value of a debugger until you’re stuck working on a hard-to-visualize problem. But once you fire up a development environment with decent debugging capabilities, you’ll never look back.

Want to know where you’re at in code execution? What’s taking so long? Just pause it and check.

Wonder what value is assigned to that variable? Mouse over it.

Want to skip a bunch of code and continue running from a different section? Go for it.

Sometimes `print(variable_name)` is just not enough to give you an idea of what’s going on with your project. This is when a good debugger can help you figuring things out.

Python already gives you a built-in debugger in the form of _pdb_ (a command line tool). But thanks to Python’s awesome community, there are a more options that feature graphical interfaces. And there are a ton of Integrated Developer Environments (IDEs) that work with Python, such as [JetBrain’s PyCharm](https://www.jetbrains.com/pycharm/), [Wingare’s WingIDE](https://wingware.com/), and even [Microsoft’s Visual Studio Community](https://beta.visualstudio.com/vs/community/).

But you’re not here to hear how one debugger is better than another, or which one is prettier, or more elegant. You’re here to learn how simple it is to write a python debugger that steps through your code. That gives you a glimpse into Python’s internals.

I’m going to show you how you can build one, and in doing so scratch an itch I’ve had for a long time.

Now let’s get to it.

### A quick primer on how Python code is organized and processed

Contrary to popular belief, Python is actually a compiled language. When you execute code, your module is run through a compiler that spits out _bytecode_ which is cached as _.pyc_ or ___pycache___ files. The bytecode itself is what later is executed line by line.

In fact, the actual CPython code that runs a program is nothing more than a gigantic switch case statement running in a loop. It’s an if-else statement that looks at an instruction’s bytecode, then dispositions it based on what that operation is intended to do.

The executable bytecode instructions are internally referenced as_code objects_, and the _dis_ and _inspect_ modules are used to produce or interpret them. These are immutable structures, that although referenced by other objects — like functions — do not contain any references themselves.

You can easily look at the bytecode that represents any given source through `dis.dis()`. Just give it a try with a random function or class. It’s a neat little exercise that’ll help you visualize what’s going on. The output will look something like this:

<pre name="c6f9" id="c6f9" class="graf graf--pre graf-after--p">>>> def sample(a, b):  
...     x = a + b  
...     y = x * 2  
...     print('Sample: ' + str(y))  
...  
>>> import dis  
>>> dis.dis(sample)  
2       0 LOAD_FAST                0 (a)  
        3 LOAD_FAST                1 (b)  
        6 BINARY_ADD  
        7 STORE_FAST               2 (x)</pre>

<pre name="9a1e" id="9a1e" class="graf graf--pre graf-after--pre">3      10 LOAD_FAST                2 (x)  
       13 LOAD_CONST               1 (2)  
       16 BINARY_MULTIPLY  
       17 STORE_FAST               3 (y)</pre>

<pre name="f063" id="f063" class="graf graf--pre graf-after--pre">4      20 LOAD_GLOBAL              0 (print)  
       23 LOAD_CONST               2 ('Sample: ')  
       26 LOAD_GLOBAL              1 (str)  
       29 LOAD_FAST                3 (y)  
       32 CALL_FUNCTION            1 (1 positional, 0 keyword pair)  
       35 BINARY_ADD  
       36 CALL_FUNCTION            1 (1 positional, 0 keyword pair)  
       39 POP_TOP  
       40 LOAD_CONST               0 (None)  
       43 RETURN_VALUE</pre>

Notice that each line in bytecode references its respective position in source code on the left column, and that it’s not a one-to-one relationship. There could be multiple smaller — one could even say atomic — operations that makeup a higher level instruction.

A _frame object_ in python is what represents an execution frame. It contains a reference to the code object that’s currently executing, the local variables that it’s running with, the global names (variables) that are available and references to any related frames (like the parent that spawned it).

There are lot more details about these objects to discuss here, but hopefully this is enough to wet your appetite. You won’t need much more for the purposes of our debugger, though you should check out the Diving Deeper section for links on where to look next.

### Enter the sys module

Python provides a number of utilities in its standard library through the _sys_ module. Not only are there things like _sys.path_ to get the python path or _sys.platform_ to help find details about the OS in which you are running, but there’s also `sys.settrace()` and `sys.setprofile()` to help write language tools.

Yes, you read that right. Python already has built-in hooks to help analyze code and interact with program execution. The `sys.settrace()` function will allow you to run a callback whenever execution advances to a new frame object and gives us a reference to it, which in turn provides the code object you’re working with.

For a quick example of how this looks, let’s reuse the function from earlier:

<pre name="6ed7" id="6ed7" class="graf graf--pre graf-after--p">def sample(a, b):  
    x = a + b  
    y = x * 2  
    print('Sample: ' + str(y))</pre>

Assuming that every time a new frame is executed, you want a callback that prints the code object and line number its executing, you can define it as:

<pre name="df1b" id="df1b" class="graf graf--pre graf-after--p">def trace_calls(frame, event, arg):  
    if frame.f_code.co_name == "sample":  
        print(frame.f_code)</pre>

Now it’s simply a matter of setting it as our trace callback:

<pre name="4c08" id="4c08" class="graf graf--pre graf-after--p">sys.settrace(trace_calls)</pre>

And executing _sample(3,2)_ should produce

<pre name="1dbf" id="1dbf" class="graf graf--pre graf-after--p">$ python debugger.py  
  
Sample: 10</pre>

You need the if-statement to filter out function calls. Otherwise you’ll see a whole bunch of things that you don’t care about, especially when printing to the screen. Try it.

The code and frame objects have quite a few fields to describe what they represent. These include things like the file being executed, the function, variable names, arguments, line numbers, and the list goes on. They are fundamental to the execution of any python code and you can go through the language documentation for more details.

### What if you want to debug every line?

The trace mechanism will set subsequent callbacks depending on the return value of the first callback. Returning _None_ means that you’re finished, while returning another function effectively sets it as the trace function inside that frame.

Here’s what this looks like:

<pre name="5d21" id="5d21" class="graf graf--pre graf-after--p">5    def sample(a, b):  
6        x = a + b  
7        y = x * 2  
8        print('Sample: ' + str(y))  
9  
10   def trace_calls(frame, event, arg):  
11       if frame.f_code.co_name == "sample":  
12           print(frame.f_code)  
13           return trace_lines  
14       return  
15  
16   def trace_lines(frame, event, arg):  
17       print(frame.f_lineno)</pre>

Now, if you execute the same code as before, you can see it print the line numbers as you progress through it:

<pre name="37bd" id="37bd" class="graf graf--pre graf-after--p">$ python .\test.py  
  
6  
7  
8  
Sample: 10  
8</pre>

### Putting a user interface in front of it

Using the [_sofi_](https://github.com/tryexceptpass/sofi)python module, you can easily produce a web application that directly interacts with our python code.

Here’s what you would do:

1.  Show the file, function name and line number being executed.
2.  Show the code for the current frame with a pointer identifying the line.
3.  Show the value of the local variables.
4.  Provide step-by-step execution, meaning you have to block before executing a line until the user clicks a button.
5.  Add step-over functionality.
6.  Add a step-out mechanism.
7.  Provide a method of stopping execution.

From the UI perspective, #1, #2 and #3 can all be handled through a Bootstrap _Panel_ where #1 is the title, and #2 and #3 are part of the body wrapped in _samp_ tags to show proper spacing.

Since the interface will essentially block waiting for user input, and the debugger waits for stop / go commands, it’s a good idea to separate those event loops using our old friend _multiprocessing_. You can then implement one _queue_ to send debug commands to one process, and a different application queue for UI updates in the other.

Through multiprocessing queues, it’s easy to block the debugger waiting for user commands at the _trace_lines_ function using the_ .get()_ method.

If the command is given to move to the next line of code (#4), everything stays the same, while stepping out (#6) will change the return value back to the _trace_calls_ function — effectively removing further calls into _trace_lines —_ and stop (#7) will raise a custom exception that will abort execution.

<pre name="c827" id="c827" class="graf graf--pre graf-after--p"># Block until you receive a debug command  
cmd = trace_lines.debugq.get()</pre>

<pre name="436e" id="436e" class="graf graf--pre graf-after--pre">if cmd == 'step':  
    # continue stepping through lines, return this callback  
    return trace_lines</pre>

<pre name="4aa8" id="4aa8" class="graf graf--pre graf-after--pre">elif cmd == 'stop':  
    # Stop execution  
    raise StopExecution()</pre>

<pre name="8aef" id="8aef" class="graf graf--pre graf-after--pre">elif cmd == 'over':  
    # step out or over code, so point to trace_calls  
    return trace_calls</pre>

<pre name="3ded" id="3ded" class="graf graf--pre graf-after--pre">class StopExecution(Exception):  
    """Custom exception used to abort code execution"""</pre>

<pre name="4468" id="4468" class="graf graf--pre graf-after--pre">    pass</pre>

Step-over functionality (#5) is implemented at the _trace_calls_ level by never returning the trace_lines callback.

<pre name="a142" id="a142" class="graf graf--pre graf-after--p">cmd = trace_lines.debugq.get()</pre>

<pre name="3a72" id="3a72" class="graf graf--pre graf-after--pre">if cmd == 'step':  
    return trace_lines</pre>

<pre name="fd27" id="fd27" class="graf graf--pre graf-after--pre">elif cmd == 'over':  
    return</pre>

Yes, I attached the queue objects as properties of the trace functions to simplify passing things around. Functions being objects is a great idea, though you shouldn’t abuse it either.

Now it’s just a matter of setting up the widgets for displaying data and the buttons for controlling flow.

You can pull out the source code from the code object of the executing frame using the inspect module.

<pre name="f41e" id="f41e" class="graf graf--pre graf-after--p">source = inspect.getsourcelines(frame.f_code)[0]</pre>

Now it’s a matter of formatting it line by line into _div_ and _samp_ tags, adding an indicator of a different color to the current line (available through `f_lineno`and `co_firstline`) and sticking that into a _panel_ widget’s body, along with the string representation of the frame’s locals (which is a simple dictionary anyway):

<pre name="9280" id="9280" class="graf graf--pre graf-after--p">def formatsource(source, firstline, currentline):  
    for index, item  in enumerate(source):  
        # Create a div for each line to better control format  
        div = Div()</pre>

<pre name="376f" id="376f" class="graf graf--pre graf-after--pre">        # Extremly simplified tab index check to add blank space  
        if item[0:1] == '\t' or item[0:1] == ' ':  
            div.style ='margin-left:15px;'</pre>

<pre name="877f" id="877f" class="graf graf--pre graf-after--pre">        # If this currently executing this line, add a red mark  
        if index == lineno - firstlineno:  
            div.addelement(Bold('> ', style="color:red"))</pre>

<pre name="7377" id="7377" class="graf graf--pre graf-after--pre">        # Add the formatted code to the div  
        div.addelement(Sample(item.replace("\n", "")))</pre>

<pre name="d852" id="d852" class="graf graf--pre graf-after--pre">        # Output the html that represents that div  
        source[index] = str(div)</pre>

<pre name="93e7" id="93e7" class="graf graf--pre graf-after--pre">    return "".join(source)</pre>

Only thing left to do is register a few event callbacks for button clicks that control execution flow by adding their respective commands to the debug queue. You do this inside a _load_ event handler which triggers after the initial content finishes loading

<pre name="f18b" id="f18b" class="graf graf--pre graf-after--p">@asyncio.coroutine  
def load(event):  
    """Called when the initial html finishes loading"""</pre>

<pre name="ab7c" id="ab7c" class="graf graf--pre graf-after--pre">    # Start the debug process  
    debugprocess.start()</pre>

<pre name="9f3d" id="9f3d" class="graf graf--pre graf-after--pre">    # Register click functions  
    app.register('click', step, selector="#code-next-button")  
    app.register('click', stop, selector="#code-stop-button")  
    app.register('click', over, selector="#code-over-button")</pre>

<pre name="7023" id="7023" class="graf graf--pre graf-after--pre">    # Make sure the display updates  
    yield from display()</pre>

<pre name="4fe1" id="4fe1" class="graf graf--pre graf-after--pre">@asyncio.coroutine  
def step(event):  
    debugq.put("step")</pre>

<pre name="82b6" id="82b6" class="graf graf--pre graf-after--pre">    # Make sure the display updates  
    yield from display()</pre>

<pre name="1d5d" id="1d5d" class="graf graf--pre graf-after--pre">@asyncio.coroutine  
def stop(event):  
    debugq.put("stop")</pre>

<pre name="faa6" id="faa6" class="graf graf--pre graf-after--pre">@asyncio.coroutine  
def over(event):  
    debugq.put("over")</pre>

How would this look?



![](https://cdn-images-1.medium.com/max/1600/1*oV3Gp3r2-5XjhrnV2nvKcw.png)



For a view of all of the code put together, check out the sofi-debugger project on GitHub:

[**tryexceptpass/sofi-debugger**  
_Contribute to sofi-debugger development by creating an account on GitHub._github.com](https://github.com/tryexceptpass/sofi-debugger "https://github.com/tryexceptpass/sofi-debugger")[](https://github.com/tryexceptpass/sofi-debugger)

#### Some notes on what you just did

The functions from the _sys_ module mentioned here are implemented in CPython and may not be available in other flavors or interpreters. Make sure to keep this in mind when experimenting.

They are also specifically meant for use with debuggers, profilers or similar trace tools. This means that you should not be messing with them as part of a normal program or you may come across some unintended consequences, especially when interacting with other modules that may specifically target these same interfaces (like actual debuggers).

### Diving Deeper

For a deeper dive into the Python language constructs, frames, code objects and the dis module, I emphatically recommend that you set aside some time and go through Phillip Guo’s (@pgbovine) CPython Internals lectures.





<iframe data-width="640" data-height="480" width="640" height="480" src="https://medium.freecodecamp.org/media/74773760e58d0ee7641e7b8d1c372b4d?postId=efe7e6b1f9a8" data-media-id="74773760e58d0ee7641e7b8d1c372b4d" allowfullscreen="" frameborder="0"></iframe>















* * *







If you liked this article and what to keep up with what I’m working on, please click the heart below to recommend it, and [follow me on Twitter](https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw&region=follow_link&screen_name=tryexceptpass&tw_p=followbutton).



[![](https://cdn-images-1.medium.com/max/1600/1*_04PhhMqHB3qXQnOQNP5ag.png)](https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw&region=follow_link&screen_name=tryexceptpass&tw_p=followbutton)










