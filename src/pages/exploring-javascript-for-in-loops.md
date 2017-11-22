---
author: Festus K. Yangani
authorTwitter: https://twitter.com/yangani
authorFacebook: https://facebook.com/1185205711507466
title: "Exploring JavaScript Iteration"
subTitle: "Loops allow programs to perform repetitive tasks, such as iterating through an array, while adhering to the DRY principle (Don’t Repeat Y..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*XJvkwoG4BLFnx6tpfzPZQQ.jpeg
url: https://medium.freecodecamp.org/exploring-javascript-for-in-loops-bdfc226d8515
id: exploring-javascript-for-in-loops-bdfc226d8515
date: 2015-11-23T02:50:20.032Z
tags: [
  "JavaScript",
  "Web Development",
  "Programming",
  "Learning",
  "Technology"
]
---
# Exploring JavaScript Iteration



![](https://cdn-images-1.medium.com/max/1600/1*XJvkwoG4BLFnx6tpfzPZQQ.jpeg)



Loops allow programs to perform repetitive tasks, such as iterating through an array, while adhering to the [DRY principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) (Don’t Repeat Yourself)**.** Theycome in handy when you want to execute a function a number of times, using different sets of inputs each time.

Just like other programming languages, JavaScript supports different kinds of loops. This article will explore **for**, **for/in**, **while** and **do/while** loops.

#### The For Loop

The **for** loop is the most common style of JavaScript loop. Here’s its basic syntax:

<pre name="0d80" id="0d80" class="graf graf--pre graf-after--p">for (<initialization>; <condition>; <incremental expression>) {  
   code block **// This is executed if condition evaluates to true**  
}</pre>

*   **initialization** - used to declare new variables with the **var** keyword, typically used to initialize a counter variable (var i = 0).
*   **condition** - An boolean expression to be evaluated before each loop iteration. If this expression evaluates to true, the inner commands will be executed.
*   **incremental expression** -an expression evaluated at the end of each loop iteration. This is usually used to increment, decrement, or otherwise update the counter variable.

Examples:

<pre name="cd58" id="cd58" class="graf graf--pre graf-after--p">**//Counting 1 to 5**  
for (var i = 1; i <= 5; i++) {  
  console.log(i);  
}  
//_=> 1_ //_=> 2_ //_=> 3_ //_=> 4_ //_=> 5_</pre>

<pre name="1ff6" id="1ff6" class="graf graf--pre graf-after--pre">**//Iterating through an array** var arr = [17, 22, 35, 54, 96];</pre>

<pre name="aea8" id="aea8" class="graf graf--pre graf-after--pre">for (var i = arr.length; i >=0; i--) {  
  console.log(arr[i]);  
}  
//_=> 96_ //_=> 54_ //_=> 35_ //_=> 22_ //_=> 17_</pre>

#### The For/in Loop

The **for/in** loop is used to iterate through properties of an object. A **for/in** statement looks as follows:

<pre name="c6fe" id="c6fe" class="graf graf--pre graf-after--p">for (**variable** in **object**) {  
  statements  
}</pre>

*   **variable** -a different property name is assigned to this on each iteration.
*   **object** -the object whose enumerable properties are iterated through.

Example:

<pre name="9f72" id="9f72" class="graf graf--pre graf-after--p">var myObj = {city: "Austin", state: "Texas", country: "USA"}</pre>

<pre name="25cb" id="25cb" class="graf graf--pre graf-after--pre">for (var key in myObj) {  
  console.log(myObj[key]);  
}  
_//=>_ Austin  
//=> Texas  
//=> USA</pre>

#### The While Loop

**While** loops are conditional loops where a condition is checked at the start of the iteration, and — if the condition is true — the statements are executed. Here’s the basic syntax of a **while** loop:

<pre name="7497" id="7497" class="graf graf--pre graf-after--p">while (condition) {  
  statement **//code block to be executed as long condition is true.**  
}</pre>

*   **condition** - the expression evaluated before each iteration through the loop. If this condition evaluates to true, the inner commands are executed. If the condition evaluates to false, then the inner statement won’t execute and the program carries on.
*   **statement** -thecode block to be executed as long as the condition evaluates to true.

Example:

<pre name="ad48" id="ad48" class="graf graf--pre graf-after--p">var i = 0;  
while (i < 3) {  
  console.log(i);  
  i++;  
}</pre>

<pre name="0d0b" id="0d0b" class="graf graf--pre graf-after--pre">_//=>0  
//=>1  
//=>2_</pre>

#### The do/while

The **do/while** loop is a variant of the while loop. Unlike in the while loop, **do/while** loop will execute the code block once, before it even checks to see whether the condition is true. Then it will repeat the loop as long as the condition is true.

Syntax:

<pre name="9691" id="9691" class="graf graf--pre graf-after--p">do {  
      statement **//code block to be executed**  
}  
while (condition);</pre>

*   **statement** -executed at least once, and is re-executed each time the condition evaluates to true.
*   **condition** -theexpression evaluated after each iteration through the loop. If the condition evaluates to true, the statement is re-executed. If the condition evaluates to false, then execution of statement is stopped.

Example:

<pre name="766f" id="766f" class="graf graf--pre graf-after--p">var cars = ["Tesla", "Prius", "GMC", "Ford"];</pre>

<pre name="1d06" id="1d06" class="graf graf--pre graf-after--pre">var i = 0;  
do {  
      console.log(cars[i]);          
      i++;  
}  
while (i < cars.length)</pre>

<pre name="796c" id="796c" class="graf graf--pre graf-after--pre">_//=>_ Tesla  
_//=>_ Prius  
_//=>_ GMC  
_//=>_ Ford</pre>

I hope this brief tour of loops has helped you better understand how iteration works in JavaScript. If you have any questions about loops, or just want to chat, you can also reach out to me on [twitter](https://twitter.com/yangani)_._








