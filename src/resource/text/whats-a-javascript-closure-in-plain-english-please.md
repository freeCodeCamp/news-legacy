---
author: Samer Buna
authorTwitter: https://twitter.com/samerbuna
authorFacebook: https://facebook.com/568190226682058
title: "What’s a JavaScript closure? In plain English, please."
subTitle: "Every function in JavaScript has a closure. And this is one of the coolest features of the JavaScript language. Because without closures,..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*O9r2gYaYeQb7EI5KBrkf3Q.jpeg
url: https://medium.freecodecamp.org/whats-a-javascript-closure-in-plain-english-please-6a1fc1d2ff1c
id: whats-a-javascript-closure-in-plain-english-please-6a1fc1d2ff1c
date: 2017-02-16T06:27:03.471Z
tags: [
  "JavaScript",
  "Programming",
  "Web Development",
  "Learning",
  "Learning To Code"
]
---
# What’s a JavaScript closure? In plain English, please.







![](https://cdn-images-1.medium.com/max/2000/1*O9r2gYaYeQb7EI5KBrkf3Q.jpeg)

JavaScript closures are like a car functions — they come with various components that can be in various positions specific to that car.







Every function in JavaScript has a closure. And this is one of the coolest features of the JavaScript language. Because without closures, it would be hard to implement common structures like callbacks or event handlers.

You create a closure whenever you define a function. Then when you execute functions, their closures enable them to access data in their scopes.

It’s kind of like when a car is manufactured (defined) it comes with a few functions like `start`, `accelerate`, `decelerate`. These car functions get executed by the driver every time they operate the car. Closures for these functions come defined with the car itself and they _close over_ variables they need to operate.

Let’s narrow this analogy to the `accelerate` function. The function definition happens when the car is manufactured:

<pre name="a1f1" id="a1f1" class="graf graf--pre graf-after--p">function accelerate(force) {  
  // Is the car started?  
  // Do we have fuel?  
  // Are we in traction control mode?  
  // Many other checks...</pre>

<pre name="24bb" id="24bb" class="graf graf--pre graf-after--pre">  // If all good, burn more fuel depending on   
  // the force variable (how hard we’re pressing the gas pedal)  
}</pre>

Every time the driver presses the gas pedal, this functions gets executed. Note how this function needs access to a lot of variable to operate, including its own `force` variable. But more importantly, it needs variables outside of its scope that are controlled by other car functions. This is where the closure of the `accelerate` function (which we get with the car itself) comes in handy.

Here’s what the `accelerate` function’s closure promised to the `accelerate` function itself:

> Ok `_accelerate_`, when you get executed, you can access your `_force_` variable, you can access the `_isCarStarted_` variable, you can also access the `_fuelLevel_` variable, and the `_isTractionControlOn_` variable. You can also control the `_currentFuelSupply_` variable that we’re sending to the engine.

Note that the closure did not give the `accelerate` function _fixed_ values for these variables, but rather _permission_ to access those values at the time the accelerate function is executed.

Closures are closely related to [function scopes](https://edgecoders.com/function-scopes-and-block-scopes-in-javascript-25bbd7f293d7#.juf2mvr1i), so understanding how these scopes work will help you understanding closures. In short, the most important thing to understand about scopes is that when you _execute_ a function, a private function scope is created and used for the process of executing that function.

Then these function scopes get nested when you execute functions from within functions (which you’ll do all the time).

A closure is created when you _define_ a function — not when you execute it. Then, every time you execute that function, its already-defined closure gives it access to all the function scopes available around it.

In a way, you can think of scopes as temporary (the global scope is the only exception to this), while you can think of closures themselves as permanent.



![](https://cdn-images-1.medium.com/max/1600/1*3h_q-q7PNZzfuy4Zx5V1qw.png)

A closure as reported in Chrome devtools



To truly understand closures and the role they play in JavaScript, you first need to understand a few other simple concepts about JavaScript functions and their scopes.

Before we get started, note that I’ve also created an interactive lab for this, which you can work through [here](https://jscomplete.com/what-are-closures-in-javascript).

### 1 — Functions are assigned by value reference

When you put a function in a variable like this:

<pre name="7c8b" id="7c8b" class="graf graf--pre graf-after--p">function sayHello() {  
  console.log("hello");  
};</pre>

<pre name="347d" id="347d" class="graf graf--pre graf-after--pre">var func = sayHello;</pre>

You are assigning the variable `func` a reference to the function `sayHello`_, not_ a copy. Here, `func` is simply an alias to `sayHello`. Anything you do on the alias you will actually be doing on the original function. For example:

<pre name="4b93" id="4b93" class="graf graf--pre graf-after--p">func.answer = 42;</pre>

<pre name="a70e" id="a70e" class="graf graf--pre graf-after--pre">console.log(sayHello.answer); // prints 42</pre>

The property `answer` was set directly on `func`and read using `sayHello`, which works.

You can also execute `sayHello` by executing the `func` alias:

<pre name="cb25" id="cb25" class="graf graf--pre graf-after--p">func() // prints "hello"</pre>

### 2 — Scopes have a lifetime

When you call a function, you create a scope during the execution of that function. Then that scope goes away.

When you call the function a second time, you create a new different scope during the second execution. Then this second scope goes away as well.

<pre name="2ce7" id="2ce7" class="graf graf--pre graf-after--p">function printA() {  
  console.log(answer);  
  var answer = 1;  
};</pre>

<pre name="3510" id="3510" class="graf graf--pre graf-after--pre">printA(); // this creates a scope which gets discarded right after</pre>

<pre name="06b8" id="06b8" class="graf graf--pre graf-after--pre">printA(); // this creates a new different scope which also gets discarded right after;</pre>

These two scopes that were created in the example above are different. The variable `answer` here is not shared between them at all.

Every function scope has a lifetime. They get created and they get discarded right away. The only exception to this fact is the global scope, which does not go away as long as the application is running.

### 3 — Closures span multiple scopes

#### When you define a function, a closure gets created

Unlike scopes, closures are created when you _define_ a function, not when you execute it. Closures also don’t go away after you execute that function.

You can access the data in a closure long after a function is defined and after it gets executed as well.

A closures encompasses everything the defined function can access. This means the defined function’s scope, and all the nested scopes between the global scope and the defined function scope plus the global scope itself.

<pre name="ae09" id="ae09" class="graf graf--pre graf-after--p">var G = 'G';</pre>

<pre name="ec99" id="ec99" class="graf graf--pre graf-after--pre">// Define a function and create a closure  
function functionA() {  
  var A = 'A'  

  // Define a function and create a closure  
  function functionB() {  
    var B = 'B'  
    console.log(A, B, G);  
  }  

  functionB();  // prints A, B, G</pre>

<pre name="31b6" id="31b6" class="graf graf--pre graf-after--pre">  // functionB closure does not get discarded  
  A = 42;  
  functionB();  // prints 42, B, G  
}</pre>

<pre name="9796" id="9796" class="graf graf--pre graf-after--pre">functionA();</pre>

When we define `functionB` here, its created closure will allow us to access the scope of `functionB` plus the scope of `functionA` plus the global scope.

Every time we execute `functionB`, we can access variables `B`, `A`, and `G`through its previously created closure. However, that closure does not give us a copy of these variables but rather a reference to them. So if, for example, the value of the variable `A` gets changed at some point after the closure of `functionB` is created, when we execute `functionB` after that, we’ll see the new value, not the old one. The second call to `functionB` prints `42, B, G`because the value of variable `A` was changed to 42 and the closure gave us a reference to `A`, not a copy.

#### Don’t confuse closures with scopes

It’s common for closures to be confused with scopes, so let’s make sure not to do that.

<pre name="c2a1" id="c2a1" class="graf graf--pre graf-after--p">// scope: global  
var a = 1;  
void function one() {  
  // scope: one  
  // closure: [one, global]  
  var b = 2;  

  void function two() {  
    // scope: two  
    // closure: [two, one, global]  
    var c = 3;  

    void function three() {  
      // scope: three  
      // closure: [three, two, one, global]  
      var d = 4;  
      console.log(a + b + c + d); // prints 10  
    }();  
  }();    
}();</pre>

In the simple example above, we have three functions and they all get defined and immediately invoked, so they all create scopes and closures.

The scope of function `one()` is its body. Its closure gives us access to both its scope and the global scope.

The scope of function `two()` is its body. Its closure gives us access to its scope plus the scope of function `one()`plus the global scope

And similarly, the closure of function `three()` gives us access to all scopes in the example. This is why we were able to access all variables in function `three()`.

But the relation between scopes and closures is not always simple like this. Things become different when the defining and invoking of functions happen in different scopes. Let me explain that with an example:

<pre name="2dbe" id="2dbe" class="graf graf--pre graf-after--p">var v = 1;</pre>

<pre name="5d48" id="5d48" class="graf graf--pre graf-after--pre">var f1 = function () {  
  console.log(v);  
}</pre>

<pre name="503f" id="503f" class="graf graf--pre graf-after--pre">var f2 = function() {  
  var v = 2;  
  f1(); // Will this print 1 or 2?  
};</pre>

<pre name="467b" id="467b" class="graf graf--pre graf-after--pre">f2();</pre>

What do you think the above example will print? The code is simple, `f1()` prints the value of `v`, which is 1 on the global scope, but we execute `f1()` inside of `f2()`, which has a different `v` that’s equal to 2\. Then we execute `f2()`.

_Will this code print 1 or 2?_

If you’re tempted to say 2, you’ll be surprised. This code will actually print 1\. The reason is, scopes and closures are different. The `console.log` line will use the closure of `f1()`, which is created when we define `f1()`, which means the closure of `f1()` gives us access to only the scope of `f1()` plus the global scope. The scope where we execute `f1()` does not affect that closure. In fact, the closure of `f1()` will not give us access to the scope of `f2()` at all. If you remove the global `v` variable and execute this code, you’ll get a reference error:

<pre name="0feb" id="0feb" class="graf graf--pre graf-after--p">var f1 = function () {  
  console.log(v);  
}</pre>

<pre name="5b6c" id="5b6c" class="graf graf--pre graf-after--pre">var f2 = function() {  
  var v = 2;  
  f1(); // ReferenceError: v is not defined  
};</pre>

<pre name="9443" id="9443" class="graf graf--pre graf-after--pre">f2();</pre>

This is very important to understand and remember.

### 4 — Closures have read and write access

Since closures give us references to variables in scopes, the access that they give us means both read and write, not just read.

Take a look at this example:

<pre name="6115" id="6115" class="graf graf--pre graf-after--p">function outer() {  
  let a = 42;</pre>

<pre name="5918" id="5918" class="graf graf--pre graf-after--pre">function inner() {  
    a = 43;  
  }</pre>

<pre name="c64e" id="c64e" class="graf graf--pre graf-after--pre">inner();  
  console.log(a);  
}</pre>

<pre name="f062" id="f062" class="graf graf--pre graf-after--pre">outer();</pre>

The `inner()` function here, when defined, creates a closure that gives us access to the variable `a`. We can read and modify that variable, and if we do modify it, we will be modifying the actual `a` variable in the `outer()` scope.

This code will print _43_ because we used the `inner()` function closure to modify the `outer()` function variable.

This is actually why we can change global variables everywhere. All closures give us both read and write access to all global variables.

### 5 — Closures can share scopes

Since closures give us access to nested scopes at the time we define functions, when we define multiple functions in the same scope, that scope is shared among all created closures, and of course, because of this, the global scope is always shared among all closures.

<pre name="0ff8" id="0ff8" class="graf graf--pre graf-after--p">function parent() {  
  let a = 10;  

  function double() {  
    a = a+a;  
   console.log(a);  
  };  

  function square() {  
    a = a*a;  
   console.log(a);  
  }  

  return { double, square }  
}</pre>

<pre name="7a6a" id="7a6a" class="graf graf--pre graf-after--pre">let { double, square } = parent();</pre>

<pre name="cb18" id="cb18" class="graf graf--pre graf-after--pre">double(); // prints 20  
square(); // prints 400  
double(); // prints 800</pre>

In the example above, we have a `parent()` function with variable `a` set to 10\. We define two functions in this `parent()` function’s scope, `double()` and `square()`. The closures created for `double()` and `square()` both share the scope of the `parent()` _function_. Since both `double()` and `square()` change the value of `a`, when we execute the last 3 lines, we double `a` (making `a` = 20), then square that doubled value (making `a` = 400), then double that squared value (making `a` = 800).

### One final test

Let’s now check your understanding of closures so far. Before you execute the following code, try to guess what it will print:

<pre name="2e1f" id="2e1f" class="graf graf--pre graf-after--p">let a = 1;</pre>

<pre name="e64f" id="e64f" class="graf graf--pre graf-after--pre">const function1 = function() {  
  console.log(a);  
  a = 2  
}</pre>

<pre name="c833" id="c833" class="graf graf--pre graf-after--pre">a = 3;</pre>

<pre name="1758" id="1758" class="graf graf--pre graf-after--pre">const function2 = function() {  
  console.log(a);  
}</pre>

<pre name="97b1" id="97b1" class="graf graf--pre graf-after--pre">function1();  
function2();</pre>

I hope you got that right and I hope these simple concepts will help you to truly understand the significant role function closures play in JavaScript.

_If you found this article helpful, click the 💚 below so that other people find it here on Medium. Follow me for more coding articles and tutorials._











* * *







I create online courses for [Pluralsight](https://www.pluralsight.com/search?q=samer+buna&categories=course), [Lynda](https://www.lynda.com/Samer-Buna/7060467-1.html), and [jsComplete](http://jscomplete.com/). If you take any of my courses, I’d love to hear your feedback! Tell me what can I do to make the next course better for you. Email me: samer at jscomplete dot com.

If you have any questions about this article or any other article I wrote, find me on [this slack account](https://slack.jscomplete.com/) (you can invite yourself) and ask in the _#questions_ room.








