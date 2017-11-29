---
author: Ayo Isaiah
authorTwitter: https://twitter.com/AyIsaiah
authorFacebook: none
title: "How to manipulate classes without jQuery by using HTML5's classList API"
subTitle: "As a front end developer, you often need to change CSS rules based on how a user interacts with elements on a page...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*Lk7YWiSeDYGd-ITVUXbBbA.png
url: https://medium.freecodecamp.org/how-to-manipulate-classes-using-the-classlist-api-f876e2f58236
id: how-to-manipulate-classes-using-the-classlist-api-f876e2f58236
date: 2016-10-03T01:58:46.799Z
tags: [
  "Web Development",
  "JavaScript",
  "Learning To Code",
  "Html5",
  "Programming"
]
---
# How to manipulate classes without jQuery by using HTML5's classList API



![](https://cdn-images-1.medium.com/max/1600/1*Lk7YWiSeDYGd-ITVUXbBbA.png)



As a front end developer, you often need to change CSS rules based on how a user interacts with elements on a page.

In the past, I relied on jQuery to handle these kinds of DOM manipulations for me. But in some cases, it doesn’t make sense to import the whole jQuery library, just so you can perform some basic DOM manipulation.

Luckily, HTML5 offers a way to do this natively, without the need for jQuery.

### How I discovered HTML5’s classList method

A few days ago, I was reading some code. I noticed that one project included jQuery as a dependency, just so they could add and remove classes when the user clicked a button on the page. The entire interaction code was only 11 lines of code.

I thought it was weird they were doing it this way. It was the equivalent of using a bazooka (jQuery) to kill a mosquito (adding and removing classes upon a click).



![](https://cdn-images-1.medium.com/max/1600/1*3zwRTLD4EUq7RrBx_DCoiQ.png)

The code in question



It occurred to me that I’d probably done similar things in my previous coding projects. So I decided to try to replicate the same functionality using plain JavaScript and see what I can learn from that.

A quick search turned up several options for doing this in plain JavaScript. I went with the _classList_ method because it’s easy to understand and cross-browser support is quite good.







![](https://cdn-images-1.medium.com/max/2000/1*KeozcS_mNvriBBUYcex-5g.png)

According to [Can I Use](http://caniuse.com/#search=classList), classList works everywhere except Opera Mini and Internet Explorer 8.







Note that if you need to support Internet Explorer versions older than IE 11, you may need to find an alternative method or use a [polyfill](https://github.com/eligrey/classList.js).

If you’re wholly reliant on using jQuery for DOM handling, this is a great place to start gaining some independence from jQuery.

### What is the classList API?

The HTML5 classList API provides a way to grab all the classes associated with an element so that you can use JavaScript to modify them.

Using the classList DOM property on an element will return a [_DOMTokenList_](https://developer.mozilla.org/en/docs/Web/API/DOMTokenList)_._ This contains all the classes applied to an element, and the _length_ property, which signifies the total number of classes on that element.

Take a look at this example:

<pre name="728a" id="728a" class="graf graf--pre graf-after--p"><!-- html -->  
</pre>

<pre name="6ba5" id="6ba5" class="graf graf--pre graf-after--pre">//JavaScript  
var about = document.getElementById("about"); console.log(about.classList);   
//logs { 0: "content-wrapper" 1: "about" 2: "animated" length: 3 value: "content-wrapper about animated" }</pre>

You can try the above in your browser to see it in action.



![](https://cdn-images-1.medium.com/max/1600/1*Nk6IoIbQ7I1WVtEXs1qV8A.png)



Getting the classes of an element is all well and good, but it isn’t all that useful on its own. We need a way to manage and update those classes. The classList property provides a few methods that do just that:

*   **add()**: Adds specified classes
*   **remove()**: Removes specified classes
*   **contains()**: Checks whether the specified class exists on the element
*   **toggle()**: toggles specified class
*   **index()**: returns the class at a specified position in the list
*   **length**: returns the number of classes

Let’s take a look at each one in turn.

### Adding classes

Adding a class to an element is straightforward. Just apply the class name as an argument to the _add()_ method. Note that if the class name already exists on the element, it won’t be added again.

<pre name="f9c4" id="f9c4" class="graf graf--pre graf-after--p"><!-- html -->  
</pre>

<pre name="dbf9" id="dbf9" class="graf graf--pre graf-after--pre">//JavaScript  
document.getElementById("headline").classList.add("title"); //gives class="heading title"</pre>

To add multiple classes, separate each class with a comma:

<pre name="5bf4" id="5bf4" class="graf graf--pre graf-after--p"><!-- html -->  
</pre>

<pre name="0069" id="0069" class="graf graf--pre graf-after--pre">//JavaScript  
document.getElementById("headline").classList.add("title", "headline"); //gives class="heading title headline"</pre>

### Removing classes

To remove a class, all you need to do is pass the class name as an argument to the _remove()_ method. If the class name doesn’t already exist in the _classList_, an error is thrown.

<pre name="4e5c" id="4e5c" class="graf graf--pre graf-after--p"><!-- html -->  
<header class="masthead clearfix" id="header"></header></pre>

<pre name="a8f1" id="a8f1" class="graf graf--pre graf-after--pre">//JavaScript  
document.getElementById("header").classList.remove("masthead"); //gives class="clearfix"</pre>

To remove multiple classes, separate each class with a comma:

<pre name="771d" id="771d" class="graf graf--pre graf-after--p"><!-- html -->  
<header class="masthead clearfix headline" id="header"></header></pre>

<pre name="7858" id="7858" class="graf graf--pre graf-after--pre">//JavaScript  
document.getElementById("header").classList.remove("masthead", "headline"); //gives class="clearfix"</pre>

### Check whether a class exists

Using the _contains()_ method, we can check whether a specified class is present in an element’s _classList_ and perform operations based on the return value.

For example:

<pre name="11c1" id="11c1" class="graf graf--pre graf-after--p"><!-- html -->  
<button class="hidden" id="btn">Click Me</button></pre>

<pre name="6060" id="6060" class="graf graf--pre graf-after--pre">//JavaScript  
var button = document.getElementById("btn");   
if (button.classList.contains("hidden")) {   
  //do something   
} else {   
  //do something else  
}</pre>

### Toggling Classes

Adding or removing a class based on user action is a common thing to do. This was exactly what I wanted to achieve with classList.

You can toggle between adding and removing using the _toggle()_ method.

Here’s what I eventually did:

<pre name="4739" id="4739" class="graf graf--pre graf-after--p"><!-- html -->  
</pre>

<pre name="ba17" id="ba17" class="graf graf--pre graf-after--pre">//JavaScript  
var page = document.getElementById("page");   
var menu = document.getElementById("menu");   
var nav = document.getElementById("navigation"); </pre>

<pre name="b5cb" id="b5cb" class="graf graf--pre graf-after--pre">function hasClass() {   
  page.classList.toggle("open");   
  menu.classList.toggle("active");  
  nav.classList.toggle("hidden");   
}</pre>

### Check the number of classes

To find out how many classes are applied to an element, use the _length_ property:

<pre name="90ec" id="90ec" class="graf graf--pre graf-after--p"><!-- html -->  
<nav class="nav hidden" id="navbar"></nav></pre>

<pre name="bd0e" id="bd0e" class="graf graf--pre graf-after--pre">//JavaScript  
document.getElementById("navbar").classList.length; // 2</pre>

### Wrapping up

As you can see, the classList API is easy to use. I encourage you to begin exploring its capabilities in your own applications.

Also, leave a comment if you have any questions, or reach out to me on [Twitter](https://twitter.com/ayisaiah). For more articles like this one, check out [my blog](https://ayoisaiah.com/blog/). Thanks for reading!








