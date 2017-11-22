---
author: Swagat Kumar Swain
authorTwitter: https://twitter.com/SwagatSwain_
authorFacebook: https://facebook.com/1019908458049851
title: "Things you probably didn’t know you could do with Chrome’s Developer Console"
subTitle: "Chrome comes with built-in developer tools. This comes with a wide variety of features, such as Elements, Network, and Security. Today, w..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*WWyilxdduXEkWudAJaqKsA.jpeg
url: https://medium.freecodecamp.org/10-tips-to-maximize-your-javascript-debugging-experience-b69a75859329
id: 10-tips-to-maximize-your-javascript-debugging-experience-b69a75859329
date: 2016-09-22T05:45:01.706Z
tags: [
  "JavaScript",
  "Programming",
  "Web Development",
  "Chrome",
  "Tech"
]
---
# Things you probably didn’t know you could do with Chrome’s Developer Console







![](https://cdn-images-1.medium.com/max/2000/1*WWyilxdduXEkWudAJaqKsA.jpeg)







Chrome comes with built-in developer tools. This comes with a wide variety of features, such as Elements, Network, and Security. Today, we’ll focus 100% on its JavaScript console.

When I started coding, I only used the JavaScript console for logging values like responses from the server, or the value of variables. But over time, and with the help of tutorials, I discovered that the console can do way more than I ever imagined.

Here are useful things you can do with it. If you’re reading this in Chrome (Or any other Browser) on a desktop, you can even open up its Developer Tools and try these out immediately.

### 1\. Select DOM Elements

If you’re familiar with jQuery, you know how important the $(‘.class’) and $(‘#id’) selectors are. They select the DOM elements depending upon the class or ID associated with them.

But when you don’t have access to jQuery in the DOM, you can still do the same in the developer console.

$(‘tagName’) $(‘.class’) $(‘#id’) and $(‘.class #id’) are equivalent to the document.querySelector(‘ ‘). This returns the first element in the DOM that matches the selector.

You can use $(‘tagName’) or $(‘.class’) — note the double dollar signs — to select all the elements of the DOM depending on a particular selector. This also puts them into an array. You can again go ahead and select a particular element among them by specifying the position of that element in the array.

For example, $(‘.className’) will give you all the elements that have the class className, and $(‘.className’)[0]and $(‘.className’)[1] will give you the first and the second element respectively.







![](https://cdn-images-1.medium.com/max/2000/1*x-ygabMZbtYHH0mhGVaWbQ.png)







### 2\. Convert Your Browser Into An Editor

How many times have you wondered whether you could edit some text in the browser itself? The answer is yes, you can convert your browser into a text editor. You can add text to and remove text from anywhere in the DOM.

You don’t have to inspect the element and edit the HTML anymore. Instead, go into the developer console and type the following:

<pre name="0990" id="0990" class="graf graf--pre graf-after--p">document.body.contentEditable=true </pre>

This will make the content editable. You can now edit almost anything and everything in the DOM.

### 3\. Find Events Associated with an Element in the DOM

While debugging, you must be interested in finding the event listeners bound to an element in the DOM. The developer console makes it easier to find these.

getEventListeners($(‘selector’)) returns an array of objectsthat contains all the events bound to that element. You can expand the objectto view the events:







![](https://cdn-images-1.medium.com/max/2000/1*ZYcW2PoXTIjz3oAUmdu58w.png)







To find the Listener for a particular event, you can do something like this:

<pre name="de2c" id="de2c" class="graf graf--pre graf-after--p">getEventListeners($(‘selector’)).eventName[0].listener </pre>

This will display the listenerassociated with a particular event. Here eventName[0] is an array that lists all the events of a particular event. For example:

<pre name="62e8" id="62e8" class="graf graf--pre graf-after--p">getEventListeners($(‘firstName’)).click[0].listener </pre>

…will display the listener associated with the click event of element with ID ‘firstName’.

### 4\. Monitor Events

If you want to monitor the events bound to a particular element in the DOM while they are executed, you can this in the console as well. There are different commands you can use to monitor some or all of these events:

*   monitorEvents($(‘selector’)) will monitor all the events associated with the element with your selector, then log them in the console as soon as they’re fired. For example, monitorEvents($(‘#firstName’)) will log all the events bound to the element with the ID of ‘firstName’ .
*   monitorEvents($(‘selector’),’eventName’) will log a particular event bound with an element. You can pass the event name as an argument to the function. This will log only a particular event bound to a particular element. For example, monitorEvents($(‘#firstName’),’click’) will log all the click events bound to the element with the ID ‘firstName’.
*   monitorEvents($(‘selector’),[‘eventName1’,’eventName3',….]) will log multiple events depending upon your own requirements. Instead of passing a single event name as an argument, pass an array of strings that contains all the events. For example monitorEvents($(‘#firstName’),[‘click’,’focus’]) will log the click event and focus events bound to the element with the ID ‘firstName’ .
*   unmonitorEvents($(‘selector’)) : This will stop monitoring and logging the events in the console.

### 5\. Find the Time Of Execution of a Code Block

The JavaScript console has an essential function called console.time(‘labelName’) which takes a label name as an argument, then starts the timer. There’s another essential function called console.timeEnd(‘labelName’) which also takes a label name and ends the timer associated with that particular label.

For example:

<pre name="c6f2" id="c6f2" class="graf graf--pre graf-after--p">console.time('myTime'); //Starts the timer with label - myTime  
console.timeEnd('myTime'); //Ends the timer with Label - myTime  

//Output: myTime:123.00 ms</pre>

The above two lines of code give us the time taken from starting the timer to ending the timer.

We can enhance this to calculate the time taken for executing a block of code.

For example, let’s say I want to find the time taken for the execution of a loop. I can do like this:

<pre name="478c" id="478c" class="graf graf--pre graf-after--p">console.time('myTime'); //Starts the timer with label - myTime  

for(var i=0; i < 100000; i++){  
  2+4+5;  
}  

console.timeEnd('mytime'); //Ends the timer with Label - myTime  

//Output - myTime:12345.00 ms</pre>

### 6\. Arrange the Values of a Variable into a Table

Let’s say we have an array of objects that looks like the following:

<pre name="4e7b" id="4e7b" class="graf graf--pre graf-after--p">var myArray=[{a:1,b:2,c:3},{a:1,b:2,c:3,d:4},{k:11,f:22},{a:1,b:2,c:3}]</pre>

When we type the variable name into the console, it gives us the values in the form of an array of objects. This is very helpful. You can expand the objects and see the values.

But this gets difficult to understand when the properties increase. Therefore, to get a clear representation of the variable, we can display them in a table.

console.table(variableName) represents the variable and all its properties in a tabular structure. Here’s what this looks like:







![](https://cdn-images-1.medium.com/max/2000/1*ODDvO9nnwEWyl1OqaZwifw.png)







### 7\. Inspect an Element in the DOM

You can directly inspect an element from the console:

*   inspect($(‘selector’)) will inspect the element that matches the selector and take you to the Elements tab in the Chrome Developer Tools. For example inspect($(‘#firstName’)) will inspect the element with the ID ‘firstName’ and inspect($(‘a’)[3]) will inspect the 4th anchor element you have in your DOM.
*   $0, $1, $2, etc. can help you grab the recently inspected elements. For example $0 gives you the last-inspected DOM element, whereas $1 gives you the second last inspected DOM Element.

### 8\. List the Properties of an Element

If you want to list all the properties of an element, you can do that directly from the Console.

dir($(‘selector’)) returns an object with all of the properties associated with its DOM element. You can expand these to view them in more detail.

### 9\. Retrieve the Value of your Last Result

You can use the console as a calculator. And when you do this, you may need to follow up one calculation with a second one. Here’s how to retrieve the result of a previous calculation from memory:

<pre name="942f" id="942f" class="graf graf--pre graf-after--p">$_ </pre>

Here’s what this looks like:

<pre name="2c78" id="2c78" class="graf graf--pre graf-after--p">2+3+4  
9 //- The Answer of the SUM is 9  

$_  
9 // Gives the last Result  

$_ * $_  
81  // As the last Result was 9  

Math.sqrt($_)  
9 // As the last Result was 81  

$_  
9 // As the Last Result is 9</pre>

### 10\. Clear the Console and the Memory

If you want to clear the console and its memory, just type:

<pre name="acd1" id="acd1" class="graf graf--pre graf-after--p">clear()  

</pre>

Then press enter. That’s all there is to it.











* * *







These are just a few examples of what you can do with Chrome’s JavaScript console. I hope these tips make your life a little easier.

Thanks for reading. If you liked this post, please feel free to recommend it to other people here on Medium by hitting the heart button below. You can find more [about me](http://swagatswain.in), or follow me on [Facebook](https://www.facebook.com/swagat.swain1), [Twitter](https://twitter.com/SwagatSwain_), and here on [Medium](https://medium.com/@swagatswain).








