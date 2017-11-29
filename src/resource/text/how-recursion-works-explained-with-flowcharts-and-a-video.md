---
author: Beau Carnes
authorTwitter: https://twitter.com/CarnesBeau
authorFacebook: none
title: "How Recursion Works — explained with flowcharts and a video"
subTitle: "Recursion can be tough to understand — especially for new programmers. In it’s simplest form, a recursive function is one that calls itse..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*FVSUmSQEEsagXaKa_ajtvA.png
url: https://medium.freecodecamp.org/how-recursion-works-explained-with-flowcharts-and-a-video-de61f40cb7f9
id: how-recursion-works-explained-with-flowcharts-and-a-video-de61f40cb7f9
date: 2017-08-22T20:07:58.905Z
tags: [
  "JavaScript",
  "Web Development",
  "Programming",
  "Technology",
  "Startup"
]
---
# How R**ecursion Works — explained with flowcharts and a video**







![](https://cdn-images-1.medium.com/max/2000/1*FVSUmSQEEsagXaKa_ajtvA.png)

Illustration (and all in this article) by Adit Bhargava







> “In order to understand recursion, one must first understand recursion.”

Recursion can be tough to understand — especially for new programmers. In it’s simplest form, a recursive function is one that calls itself. Let me try to explain with an example.

Imagine you go to open your bedroom door and it’s locked. Your three-year-old son pops in from around the corner and let’s you know he hid the only key in a box. (“Just like him,” you think.) You're late for work and your really need to get in the room to get your shirt.

You open the box only to find… more boxes. Boxes inside of boxes. And you don’t know which one has the key! 😮 You need to get that shirt soon, so you have to think of a good algorithm to find that key.

There are two main approaches to create an algorithm for this problem: iterative and recursive. Here are both approaches as flow charts:







![](https://cdn-images-1.medium.com/max/2000/1*QrQ5uFKIhK3jQSFYeRBIRg.png)







Which approach seems easier to you?

The first approach uses a while loop. While the pile isn’t empty, grab a box and look through it. Here’s some JavaScript-inspired pseudocode that shows what is happening. (Pseudocode is written like code, but meant to be more like human speech.)

<pre name="d528" id="d528" class="graf graf--pre graf-after--p">**function** look_for_key(main_box) {  
  **let** pile = main_box.make_a_pile_to_look_through();  
  **while** (pile **is not** empty) {  
    box = pile.grab_a_box();  
    **for** (item **in** box) {  
      **if** (item.is_a_box()) {  
        pile.append(item)  
      } **else if** (item.is_a_key()) {  
        console.log("found the key!")  
      }  
    }  
  }  
}</pre>

The second way uses recursion. Remember, recursion is where a function calls itself. Here’s the second way in pseudocode.

<pre name="5e42" id="5e42" class="graf graf--pre graf-after--p">**function** look_for_key(box) {  
  **for** (item **in** box) {  
    **if** (item.is_a_box()) {  
      look_for_key(item);  
    } **else if** (item.is_a_key()) {  
      console.log("found the key!")  
    }  
  }  
}</pre>

Both approaches accomplish the same thing. The main purpose for using the recursive approach is that once you understand it, it can be clearer to read. There is actually no performance benefit to using recursion. The iterative approach with loops can sometimes be faster. But many the simplicity of recursion is sometimes preferred.

Also, since a lot of algorithms use recursion, it’s important to understand how it works. If recursion still doesn’t seem simple to you, don’t worry: I’m going to go over a few more examples.

### Base case and recursive case

Something you have to look out for when writing a recursive function is an infinite loop. This is when the function keeps calling itself… and never stops calling itself!

For instance, you may want to write a count down function. You could write it recursively in JavaScript like this:

<pre name="61c9" id="61c9" class="graf graf--pre graf-after--p">// WARNING: This function contains an infinite loop!</pre>

<pre name="ed6e" id="ed6e" class="graf graf--pre graf-after--pre">**function** countdown(i) {  
  console.log(i)  
  countdown(i - 1)  
}</pre>

<pre name="0515" id="0515" class="graf graf--pre graf-after--pre">countdown(5);    // This is the initial call to the function.</pre>



![](https://cdn-images-1.medium.com/max/1600/1*LGjfggsIiQHbfJothG1hYw.png)



This function will keep counting down forever. If you do accidentally run code with an infinite loop you can press “Ctrl-C” to kill your script. (Or, if you sometimes use CodePen like me, you have to add “?turn_off_js=true” to the end of the url.)

A recursive function always has to say when to stop repeating itself. There should always be two parts to a recursive function: the recursive case and the base case. The recursive case is when the function calls itself. The base case is when the function stops calling itself. This prevents infinite loops.

Here is the countdown function again, with a base case:

<pre name="c312" id="c312" class="graf graf--pre graf-after--p">**function** countdown(i) {  
  console.log(i)  
  **if** (i <= 1) {  // base case  
    **return**;    
  } **else** {       // recursive case  
    countdown(i - 1)  
  }  
}</pre>

<pre name="f1a7" id="f1a7" class="graf graf--pre graf-after--pre">countdown(5);    // This is the initial call to the function.</pre>



![](https://cdn-images-1.medium.com/max/1600/1*rQ9Z3DmtGk1Bb6_Mx5W6rQ.png)



It may not be obvious exactly what is happening in this function. I’ll walk through what happens when you call the countdown function passing in “5”.

We start by printing out the number 5 using `console.log`. Since five is _not_ less than or equal to zero, we go to the else statement. There we call the countdown function again with the number four (5–1=4 😁).

We log the number 4\. Again, `i` is _not_ less that or equal to zero so we go to the else statement and call countdown with 3\. This continues until `i`equals zero. When that happens, we log the number zero and then `i` _is_ less than or equal to zero. We finally get to the return statement and pop out of the function.

### The Call Stack

Recursive functions use something called “the call stack.” When a program calls a function, that function goes on top of the call stack. This similar to a stack of books. You add things one at a time. Then, when you are ready to take something off, you always take off the top item.

I will show you the call stack in action with the `factorial` function. `factorial(5)` is written as 5! and it is defined like this: 5! = 5 * 4 * 3 * 2 * 1\. Here is a recursive function to calculate the factorial of a number:

<pre name="8f67" id="8f67" class="graf graf--pre graf-after--p">**function** fact(x) {  
  **if** (x == 1) {    
    **return** 1;    
  } **else** {        
    **return** x * fact(x-1);  
  }  
}</pre>

Now let’s see what happens if you call `fact(3)` The illustration bellow shows how the stack changes, line by line. The topmost box in the stack tells you what call to `fact` you’re currently on.







![](https://cdn-images-1.medium.com/max/2000/1*YRkMsMPRFAt8Y9BiC0QVDg.png)





![](https://cdn-images-1.medium.com/max/2000/1*AWu17xnQ-lxVwpgVhEo_lA.png)

Image credit: Adit Bhargava







Notice how each call to `fact` has its own copy of `x`. This is very important to making recursion work. You can’t access a different function’s copy of `x`.

### _Did you find the key yet?_

Let’s briefly go back to the original example about looking in nested boxes for a key. Remember, the first method was iterative using loops. With that method, you make a pile of boxes to search through, so you always know what boxes you still need to search.



![](https://cdn-images-1.medium.com/max/1600/1*qFezr1s9YpK6-GsMJqwhOA.png)



But there is no pile in the recursive approach. How does your algorithm know which boxes you still have to look though? The “pile of boxes” is saved on the stack. This is a stack of half-completed function calls, each with its own half-complete list of boxes to look through. The stack keeps track of the pile of boxes for you!

And thanks to recursion, you can finally find the key and get your shirt! 👕



![](https://cdn-images-1.medium.com/max/1600/1*8Y0_goJ5oKvt1tzSX4d8Tw.png)



You can also watch this 5-minute video I made about recursion. It should reinforce these recursion concepts.









<iframe data-width="854" data-height="480" width="980" height="551" src="https://medium.freecodecamp.org/media/77bb51a862ca6869bff642edb26b4ecc?postId=de61f40cb7f9" data-media-id="77bb51a862ca6869bff642edb26b4ecc" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FvPEJSJMg4jY%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



A video from the course this article is based on.







### **Conclusion**

I hope this article brought you more clarity about recursion in programming. This article is based on a lesson in my new video course from Manning Publications called [Algorithms in Motion](https://www.manning.com/livevideo/algorithms-in-motion?a_aid=algmotion&a_bid=9022d293). The course (and also this article) is based on the _amazing_ book [Grokking Algorithms](https://www.amazon.com/gp/product/1617292230/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=bcar08-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1617292230&linkId=83471c93327ff24766dd812f9799f95a) by Adit Bhargava. He’s the one who drew all the fun illustrations in this article.

If you learn best through books, [get the book](https://www.amazon.com/gp/product/1617292230/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=bcar08-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1617292230&linkId=83471c93327ff24766dd812f9799f95a)! If you learn best through videos, consider [buying my course](https://www.manning.com/livevideo/algorithms-in-motion?a_aid=algmotion&a_bid=9022d293).

> Get 39% off my course by using code ‘**39carnes**’!



![](https://cdn-images-1.medium.com/max/1600/1*a5UFtQIHwXy7SCQpI9GdVQ.png)



And finally, to truly understand recursion, you must read this article again. 😉








