---
author: lazlojuly
authorTwitter: none
authorFacebook: none
title: "Node.js module.exports vs. exports"
subTitle: "What are they, how to use them and how not to use them"
coverSrc: placeholder
url: https://medium.freecodecamp.org/node-js-module-exports-vs-exports-ec7e254d63ac
id: node-js-module-exports-vs-exports-ec7e254d63ac
date: 2016-09-07T14:15:39.284Z
tags: [
  "JavaScript",
  "Nodejs",
  "Web Development",
  "Programming",
  "Software Development"
]
---
# Node.js module.exports vs. exports

## What are they, how to use them and how not to use them

(Note that this article was written after the Node.js 6.1.0 release)

#### **TL;DR**

*   Think of module.exports as the variable that gets returned from require(). It is an empty object by default, and it is fine to change to anything.
*   Exports? Well, “exports” itself is never returned!It is just a reference to module.exports; a convenience variable to help module authors write less code. Working with its properties is safe and recommended.

<pre name="23ce" id="23ce" class="graf graf--pre graf-after--li">exports.method = function() {…} </pre>

<pre name="7dbb" id="7dbb" class="graf graf--pre graf-after--pre">vs.</pre>

<pre name="f02b" id="f02b" class="graf graf--pre graf-after--pre">module.exports.method = function() {…}</pre>

### A simple module example

First, we need an example codebase. Let’s start with a simple calculator:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/77bc88b1573c553fb5887f91b6b372b5?postId=ec7e254d63ac" data-media-id="77bc88b1573c553fb5887f91b6b372b5" allowfullscreen="" frameborder="0"></iframe>



calculator.js



Usage:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/db11ad63880aef8cc0cdd7d7336e12e2?postId=ec7e254d63ac" data-media-id="db11ad63880aef8cc0cdd7d7336e12e2" allowfullscreen="" frameborder="0"></iframe>



app-use-calculator.js



### The module wrapper

Node.js **internally wraps** all require()-ed modules in a function wrapper:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/191cf8acb9284af7c7806cc9ff00ae25?postId=ec7e254d63ac" data-media-id="191cf8acb9284af7c7806cc9ff00ae25" allowfullscreen="" frameborder="0"></iframe>



calculator-wrapped.js



### The module object

Variable “**module**” is an object representing the current module. It **is** **local to each module** and it is also private (only accessible from module code):





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c530c1ba33693232f5d5ec29b43a09c9?postId=ec7e254d63ac" data-media-id="c530c1ba33693232f5d5ec29b43a09c9" allowfullscreen="" frameborder="0"></iframe>



calculator-printed.js



### Module.exports

*   **It is the object reference that gets returned from the require() calls.**
*   It is automatically created by Node.js.
*   It is just a reference to a plain JavaScript object.
*   It is also empty by default (our code attaches an “add()” method to it)

There are two ways we can use module.exports:

1.  **Attaching public methods** to it (like we did in the calculator example).
2.  **Replacing** **it** with our custom object or function.

Why replace it? When replacing, we can return any arbitrary instance of some other class. Here is an example written in ES2015:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/36e9d6b514a9489160cbdd9523ac9200?postId=ec7e254d63ac" data-media-id="36e9d6b514a9489160cbdd9523ac9200" allowfullscreen="" frameborder="0"></iframe>



calculator-base.js



Above, “calculator-base” exports a class.  
Let’s extend “Calculator” class and export an instance this time:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/86cbb9755f96bc374574cccd87ca105c?postId=ec7e254d63ac" data-media-id="86cbb9755f96bc374574cccd87ca105c" allowfullscreen="" frameborder="0"></iframe>



calculator-advanced.js



Usage:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/3fc3b5edca1e852848ec129d928a30ef?postId=ec7e254d63ac" data-media-id="3fc3b5edca1e852848ec129d928a30ef" allowfullscreen="" frameborder="0"></iframe>



app-use-advanced-calculator.js



### Exports alias

*   **“exports” is just a convenience variable so module authors can write less code**
*   Working with its properties is safe and recommended.   
    (eg.: exports.add = function…)
*   **Exports** is NOT returned by require() (module.exports is!)

Here are some good and some bad examples:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/6bc43289e911e7da5394f28da64a3f73?postId=ec7e254d63ac" data-media-id="6bc43289e911e7da5394f28da64a3f73" allowfullscreen="" frameborder="0"></iframe>





**Note:** It is common practice to replace module.exports with custom functions or objects. If we do that but still would like to keep using the “exports” shorthand; then “exports” must be re-pointed to our new custom object (also done in code above at line 12):

<pre name="a9dd" id="a9dd" class="graf graf--pre graf-after--p">exports = module.exports = {}</pre>

<pre name="3078" id="3078" class="graf graf--pre graf-after--pre">exports.method = function() {...}</pre>

### Conclusion

A variable named **exports** that is not being entirely exported is confusing, especially for newcomers to Node.js. Even the official documentation has a slightly strange take on it too:

> As a guideline, if the relationship between exports and module.exports seems like magic to you, ignore exports and only use module.exports.

My take is that code is not magic. Developers should always seek deeper understanding of the platforms and languages they use. By doing so; programmers gain valuable confidence and knowledge which in turn positively impacts code quality, system architecture and productivity.

Thank you for reading my post. Feedback and thoughts are always welcome in the comments section.

[lazlojuly](https://twitter.com/lazlojuly)

#### Related Articles:

*   [Are Node.js modules singletons?](https://medium.com/@lazlojuly/are-node-js-modules-singletons-764ae97519af)

#### Sources:

*   [Node.js Documentation on Modules](https://nodejs.org/api/modules.html)








