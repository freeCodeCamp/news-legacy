---
author: William Countiss
authorTwitter: https://twitter.com/WCountiss
authorFacebook: none
title: "Closing the Book on Closures"
subTitle: "JavaScript closures are an important, but notoriously confusing concept. There’s no escaping it — if you want to grow as a developer, you..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*l0PQ97Jq6F1NbCvTmuMqWQ.jpeg
url: https://medium.freecodecamp.org/closing-the-book-on-closures-50b095289bfa
id: closing-the-book-on-closures-50b095289bfa
date: 2015-10-30T12:56:58.335Z
tags: [
  "JavaScript",
  "Programming",
  "Web Development",
  "Learning",
  "Learning To Code"
]
---
# Closing the Book on Closures







![](https://cdn-images-1.medium.com/max/2000/1*l0PQ97Jq6F1NbCvTmuMqWQ.jpeg)







JavaScript closures are an important, but notoriously confusing concept. There’s no escaping it — if you want to grow as a developer, you need to understand what closures are and how to use them.

Don’t let the fancy name scare you — once you play around with closures a bit, you’ll realize there really isn’t all that much to them.

Let’s start with something simple:

<pre name="461f" id="461f" class="graf graf--pre graf-after--p">  1 function sayGreeting(greeting) {  
  2  
  3     return function(name) {  
  4  
  5         console.log(greeting + " " + name);  
  6     }  
  7  
  8 }</pre>

You’ll notice right away that our function, **sayGreeting,** returns another function. I can do this in JavaScript because functions are considered **_first-class,_** which means that they can be passed around just like a number, string, boolean, or other data structure. This can make for some interesting syntax:

<pre name="47cb" id="47cb" class="graf graf--pre graf-after--p">  1 function sayGreeting (greeting) {  
  2  
  3     return function (name) {  
  4  
  5         console.log (greeting + " " + name);  
  6     }  
  7  
  8 }  
  9 sayGreeting("Hello")("William");</pre>

So what would you expect to see in the console when you ran this code? Think about it for a moment and then take a look at the image below.



![](https://cdn-images-1.medium.com/max/1600/1*MhLMnx7HjUuYunG3ohethw.png)



If you guessed “Hello William”, you’re right. Go ahead and give yourself a pat on the back. Then let’s take a closer look into _why._

<pre name="aa22" id="aa22" class="graf graf--pre graf-after--p">sayGreeting("Hello")("William");</pre>

Remember that sayGreeting **returns** a function. As we mentioned earlier, functions in JavaScript are first-class, and may be passed around like other data structure. So when **sayGreeting(“Hello”) is invoked** for the first time, it executes and returns an anonymous function. A returned function may also be invoked, and that is why you are seeing the second set of parentheses: sayGreeting(“Hello”)**(“William”)**

To make this a bit easier to follow let’s change the code a little by setting the first invocation to a variable:

<pre name="2003" id="2003" class="graf graf--pre graf-after--p">  1 function sayGreeting (greeting) {  
  2  
  3     return function(name) {  
  4  
  5         console.log(greeting + " " + name);  
  6     }  
  7  
  8 }  
  9  
 10 **var sayHello = sayGreeting("Hello");**  
 11 sayHello("William");</pre>

If you run this in your console you’ll get the same result as before. But how does sayHello(“William”) still know the value of **greeting**? To understand this, we’ll have to go a little deeper.

Whenever a function is invoked, memory is set aside for that function and its contents, which will stick around even after the function has finished executing. We can visualize this by using putting the sayHello variable into a **console.dir()**

<pre name="9115" id="9115" class="graf graf--pre graf-after--p">  1 function sayGreeting(greeting) {  
  2  
  3     return function(name) {  
  4  
  5         console.log(greeting + " " + name);  
  6     }  
  7  
  8 }  
  9  
 10 var sayHello = sayGreeting("Hello");  
 11  
 12 **console.dir(sayHello);**  
 13 sayHello("William");</pre>



![](https://cdn-images-1.medium.com/max/1600/1*xx14GLxJtxjbE0KpHwjrDw.png)



You’ll see in the console that the variable **sayHello** is an anonymous function, and within its scope there is a **closure** with a name:value pair,

**greeting: “Hello”**

This should look familiar since “greeting” is the name of the parameter of the sayGreeting(greeting) { … } function on line 1, and “Hello” was the string that we passed into it when we first invoked the function on line 10\. Memory has been set aside for these values, and is available as an outer reference when we invoke the function on line 13.

To help visualize this let’s write out the body of the **sayHello** function as it executed on line 13.

<pre name="f201" id="f201" class="graf graf--pre graf-after--p">  
  1 function (**name**) {  
  2  
  3     console.log (greeting + " " + **name**);  
  4 }</pre>

The string “William” is passed in for the name parameter, then on line 3 console.log(**greeting** + “ “+ **name**) is executed.

It then looks for the values of **greeting** and **name**.

Our function finds a value for **name**: “William”. But it doesn’t have a value for **greeting**. So now it’s time to go fish, and it looks to its outer reference (where it sits in terms of lexical scope) in an attempt to find a value for greeting.

In other words, it remembers where it was explicitly written in the code, which is **inside** of the sayGreeting function.

<pre name="9d2e" id="9d2e" class="graf graf--pre graf-after--p">  
  1 function sayGreeting(greeting) {  
  2  
  3     return **function(name) {** 45 **console.log(greeting + ' ' + name);** 6 **}**  
  7  
  8 }</pre>

When it finds the value of **greeting** in its outer reference, we refer to this as **closing in on** an outer variable, and when this happens you have **closure**.

That wasn’t so bad, was it?

This is a very basic example, but even in complex applications, the rules remain the same. Whenever a function can’t find the value of something within itself, it will follow the scope chain all the way down (or up depending upon how you envision it) and search for that value to create the closure.








