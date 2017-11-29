---
author: Kevin Kononenko
authorTwitter: https://twitter.com/devmanual
authorFacebook: https://facebook.com/10203738544564981
title: "JavaScript Callbacks Explained Using Minions"
subTitle: "Callbacks. Asynchronous. Non-blocking...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*BWBpJFpxubK7zjG_ucusFg.jpeg
url: https://medium.freecodecamp.org/javascript-callbacks-explained-using-minions-da272f4d9bcd
id: javascript-callbacks-explained-using-minions-da272f4d9bcd
date: 2016-04-11T14:59:39.745Z
tags: [
  "JavaScript",
  "Web Development",
  "Front End Development",
  "Technology",
  "Tech"
]
---
# JavaScript Callbacks Explained Using Minions







![](https://cdn-images-1.medium.com/max/2000/1*BWBpJFpxubK7zjG_ucusFg.jpeg)







Callbacks. Asynchronous. Non-blocking.

These JavaScript concepts are making you tear your hair out.

I was there too at one point. I needed an analogy to make these abstract concepts become easy enough that I could teach them to someone else (and prove that I truly understood them myself).

Sure, there were a few good tutorials out there (like [this one](https://github.com/maxogden/art-of-node) and [this one](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)). But every tutorial instantly started with complex terms.

I needed something I could connect to.

I needed Minions.



![](https://cdn-images-1.medium.com/max/1600/1*lYgVvfqI8_gVkIiwJAd31w.png)



So, I am going to use these lovable minions to explain callbacks. In this little analogy, you are their master. You can order your army of minions to do whatever you want in your code. But:

1.  There is only one master.
2.  The minions must take orders from you. They cannot make their own decisions.



![](https://cdn-images-1.medium.com/max/1600/1*MGmQ9AlWiGcQ8mNs7dkBTw.jpeg)



> **_Minion._** _Noun. Someone who is not powerful or important and who obeys the orders of a powerful leader or boss._

#### The Main Concept

Any time you see “function()” in your jQuery or JavaScript **inside another function or method**, imagine it instead says “minion()”. You can’t actually type this because the JavaScript language does not recognize “minion()” (unless you create an actual function called “minion”). But that is now what you are doing when you create a callback function- **giving orders to minions**.

_An example with a minion ready for orders_

<pre name="dbe1" id="dbe1" class="graf graf--pre graf-after--p">function myFunction(input, function(err, data){</pre>

<pre name="1341" id="1341" class="graf graf--pre graf-after--pre">});</pre>

This is basically saying…

<pre name="e7e8" id="e7e8" class="graf graf--pre graf-after--p">function myFunction(input, **minion**(err, data){</pre>

<pre name="cf06" id="cf06" class="graf graf--pre graf-after--pre">});</pre>

An example with just a plain old function, no minion available:

<pre name="7865" id="7865" class="graf graf--pre graf-after--p">function addOne(data){:</pre>

<pre name="3a4a" id="3a4a" class="graf graf--pre graf-after--pre">  return data++;</pre>

<pre name="31fe" id="31fe" class="graf graf--pre graf-after--pre">};</pre>

### jQuery Examples

#### Super Basic





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/5632ac1b40311ed599bd40e9169001e3?postId=da272f4d9bcd" data-media-id="5632ac1b40311ed599bd40e9169001e3" allowfullscreen="" frameborder="0"></iframe>



Example 1



So remember, this is kind of like saying:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/5728a706d3e08eb4f4b15bc21578fb63?postId=da272f4d9bcd" data-media-id="5728a706d3e08eb4f4b15bc21578fb63" allowfullscreen="" frameborder="0"></iframe>



Example 2



What is a callback doing here?

You, the master/boss, have to watch for events across the entire file, and potentially multiple files. You ain’t got time for some little jQuery click handler! So, you delegate it to a minion, as shown in example 2.

Now, this is a simple function, and you could probably do it yourself, but what if it was 20 lines long? You can’t be distracted with a 20 line long function when you need to be taking other instructions from the user as well!

So, you tell a minion to do it on line 1 after the user clicks ‘.myButton’. This frees you up to give other orders to more minions- much more efficient than doing it yourself and making other important functions wait.



![](https://cdn-images-1.medium.com/max/1600/1*qetQ9kESbuqpF3Q31aFDng.jpeg)



#### Animation Example

Let’s look at a show/hide sequence to really highlight the importance of these minions.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/50cf32ba322c5099fc7da573d11fcc89?postId=da272f4d9bcd" data-media-id="50cf32ba322c5099fc7da573d11fcc89" allowfullscreen="" frameborder="0"></iframe>





In this example, if you read the code in order and didn’t have minions at your side, the console would log “One”, “Two”, “Three”. BUT, you have minions, and the console will **actually** log “One”, “Three”, “Two” in this case. Here is why:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/f02d6f8382bc6a0d7dc0d20be69017b3?postId=da272f4d9bcd" data-media-id="f02d6f8382bc6a0d7dc0d20be69017b3" allowfullscreen="" frameborder="0"></iframe>





Line 1: You ordered your first minion, and went on to watch for other events triggered by the user.

Line 2: Your first minion read the console statement, then went on to line 3.

Line 3: Minion 1 **brought another minion in to help**: Minion 2\. Specifically, Minion 2 must sit there and wait for the show() method to finish before continuing on its instructions. So now you have two minions working for you, simultaneously trying to finish their work within the function as quickly as possible!

Minion 1 now jumps all the way down to line 7, since Minion 2 needs to accomplish lines 4–5\. It reads the console.log statement, and is done- no more callbacks, no more work to do. Minion 2, fractions of a millisecond behind, reads console.log(“Two”) and then makes sure the child div is shown in line 5\. Now that minion is done too.

Here is an incredibly important lesson:Your callback functions **define the order that different actions occur**. Think of how powerful this is: you can ensure that one action happens after another, as opposed to being forced to create one long, consecutive string of commands. This allows for much more flexibility. If you couldn’t force minions to carry out your orders, you would have to do it all yourself.

The jQuery logic above **only works with callbacks, in fact.** In line 5, showing the child div **must** happen after showing the parent div. [You cannot show a child div](http://stackoverflow.com/questions/5521387/show-child-div-within-hidden-parent-div) if the parent div is hidden. The only way to guarantee that the child div will get shown _after_ the parent div is a callback.

If there were no callbacks in the above example, line 5 could cause an error because the show() method in line 3 had not completed yet. Minion 1, who started at line 1, passes the task along of completing lines 4–5 to Minion 2 so **Minion 2 can wait on the completion of the show() method in line 3** before starting work on 4–5\. This guarantees Minion 2 will start and finish the second show() statement after the first show() statement is complete. Minion 1 then moves on to the rest of the outer function, without needing to wait.



![](https://cdn-images-1.medium.com/max/1600/1*cSSzRJb_1A4Sm8PMhU954g.jpeg)



### Plain JavaScript and Node.js Examples

#### Using Parameters and Callbacks





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/05e7899cb09c7183b76dae7d067b1bc0?postId=da272f4d9bcd" data-media-id="05e7899cb09c7183b76dae7d067b1bc0" allowfullscreen="" frameborder="0"></iframe>





All right, a little more complicated example! Lines 2 and 14 are just declaring functions, so let’s skip down to line 20 where the action actually starts. I called the speakOrders function with two parameters. The first is an object with the statements I eventually want my minion to report. The second is a callback- a function named reportOrders in this case.

Your minion cannot reportOrders until you have spoken the orders! So that is how these functions get executed. On line 20, I called speakOrders with instructions. So I jump up to line 14 to see what the speakOrders function should do. Apparently, it just feeds these instructions into the callback function.

On line 20, I declared the callback function to be reportOrders, but it could be anything! memorizeOrders, tellMySpouse, any other function you name. It is standard to use “callback” in your function declaration on line 14 to ensure other people looking at your code know that a callback will need to happen. Could be any other word though! Here is the example restated, minion-ified.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/60006914c2a9f4f9a4b35e19db968ad8?postId=da272f4d9bcd" data-media-id="60006914c2a9f4f9a4b35e19db968ad8" allowfullscreen="" frameborder="0"></iframe>





There is only one minion in this entire snippet- on lines 14–15, replacing “callback”.

**Line 20:** I call speakOrders. I pass along the orders- the object with name and specialty. The second parameter could be anything- a string, a function, or something else.

**Line 14–15:** I define that the second parameter actually **must** be a callback function since on line 15, the minion is followed by (). So, any time we call the speakOrders function, we now know that the second parameter will be a function. That is reportOrders, in this case.

**Line 15:** I know from line 20 that my minion will need to carry out the reportOrders function. It receives the orders parameter, an object. It needs these instructions to successfully report.

**Line 2:** The orders variable from line 15 is now referenced as minionOrders within the function. The reportOrder function finishes, and the name and specialty are reported back.

Callbacks are important here to **clearly trace a path** that the object must follow. Without callbacks, this would be a bunch of code in one order with little flexibility to reuse functions and change around order.



![](https://cdn-images-1.medium.com/max/1600/1*2slDIzfK12CcxrIiMZEEpg.jpeg)



#### Node.js

Take a look at the following example which uses [Express](http://expressjs.com/) and the [request module](https://github.com/request/request). This is the toughest one yet!





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/8e14e6e36db131890810f1553f3b0761?postId=da272f4d9bcd" data-media-id="8e14e6e36db131890810f1553f3b0761" allowfullscreen="" frameborder="0"></iframe>



Node Example 1



Let’s imagine the user just performed a GET request along the /storeData route. So we begin at line 9\. This example includes callback use cases from all 3 the previous examples.

1.  There is a callback within a method at line 9, similar to the jQuery click handler example.
2.  There is asynchronous execution at line 14, centered around a fake API request, similar to the jQuery animation example.
3.  There is a callback parameter declared in line 13, similar to the vanilla JS example.

To make this as clear as possible, here is the minion-ified code, with minion numbers indicating the order they will get executed in.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b8ac6627298468a15cb2955917c4c508?postId=da272f4d9bcd" data-media-id="b8ac6627298468a15cb2955917c4c508" allowfullscreen="" frameborder="0"></iframe>



Node Example 2



**Line 9:** User hits the route. You, the boss, order Minion 1 to get to work on your orders. It jumps down to line 10 and sees the readResult function. You can now wait for more cues from the user while your minions are at work.

**Line 14:** Minion 1 sees the request call, performs it on the fake API, and orders Minion 2 to wait on the result. Minion 1 can move on to other work. Since there is no more, Minion 1 is relieved of duty.

**Line 14:** Minion 2 kicks into action when the request call is finished. It is now carrying three pieces of potentially important information from the route- err, response and body.

**Line 15–16**: The global variable “results” is set to the body value. This global variable can now be used in other functions as well. Minion 2 tells Minion 3 that it is time to get to work on its instructions. Minion 3 originally received instructions from **line 10**, and had been waiting to complete them until it was called. Now is the time to complete logRes()!

**Line 5**: And the instructions are… a console.log. That was disappointing. Anyway, Minion 3 is done now.

So how the heck did Minion 3 get called after Minion 2?

Some sort of Minion-ception?



![](https://cdn-images-1.medium.com/max/1600/1*xW5AVfJ9zj8OqIzTzVO3hQ.jpeg)



If you go back to the Node Example 1 code, you will see that line 13 initializes a callback. That means every time the readResult() function is called, there must be a callback parameter. This sets the callback up for use later at line 16\. At line 16, the callback has the ability to use the products of the API request on line 14 because the **request call has a callback itself**!

Imagine if callback/minion3 was a line lower than line 17, outside the scope of the request call. First of all, that would make it Minion 2, since it would get executed before the request call finished. And, the results of the request call would not yet be available, which would make this entire function pretty pointless. The entire point is to do the request call then pass the results on.

Again, the use of 2 separate callbacks in the readResult() function ensures that Minion 3 goes to work after the request is complete. Callbacks provide a level of control so you can determine this custom order.





<iframe data-width="800" data-height="400" width="700" height="350" src="https://medium.freecodecamp.org/media/49d3eea55442a7cdcaff56ecc0af5a9e?postId=da272f4d9bcd" data-media-id="49d3eea55442a7cdcaff56ecc0af5a9e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fupscri.be%2Fmedia%2Fform.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





#### Conclusion

You are the minion master, with hordes of squealing little servants ready to do your bidding. If you can give them the right instructions, they can make your life so much easier. They do all the hard work, and let you listen to the user’s instructions.











* * *







Did this help you? Let me know in the comments.








