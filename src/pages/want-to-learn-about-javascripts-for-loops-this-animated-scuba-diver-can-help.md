---
author: Kevin Kononenko
authorTwitter: https://twitter.com/devmanual
authorFacebook: https://facebook.com/10203738544564981
title: "Want to learn about JavaScript’s for loops? This animated SCUBA diver can help!"
subTitle: "For loops can be tough to follow if you are learning to code for the first time. This animated explanation should make it slightly easier..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*8Q1ePeYeNEi-H1-bVnX2FA.jpeg
url: https://medium.freecodecamp.org/want-to-learn-about-javascripts-for-loops-this-animated-scuba-diver-can-help-76a038a09cc8
id: want-to-learn-about-javascripts-for-loops-this-animated-scuba-diver-can-help-76a038a09cc8
date: 2017-11-07T12:41:26.590Z
tags: [
  "JavaScript",
  "Learning To Code",
  "Tech",
  "Programming",
  "Web Development"
]
---
# Want to learn about JavaScript’s for loops? This animated SCUBA diver can help!

**For** loops can be tough to follow if you are learning to code for the first time. This animated explanation should make it slightly easier.

**For** loops are a fundamental part of pretty much every language used in web development. You learn about them in the first week of every computer science 101 class, and they will be a part of any introductory online course.

Even so, if JavaScript is your first coding language (like it was for me), the concept of a for loop can still feel a little mysterious. Sure, you might understand it in principle. But once you start layering other concepts on top — like arrays, objects, and more complicated math — you might find that you don’t understand them as clearly as you would like.

So, I wanted to create a crystal-clear explanation that will be lodged in your brain. When you are introduced to more complicated concepts, it will be easy to use them inside your for loops.

#### So what are for loops?

If you aren’t already familiar, for loops allow you to take action on a list of elements without explicitly naming each element.

Say you have the following list of elements: 0,1,2,3,4\. You would not want to manually plug each one into a function or access the index of an array. You would want to loop through them and automatically take the action for each element in the list. I will explain more in a moment.

#### Why the heck do I need a for loop explanation?

Let’s look at a basic one.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/49fda71e0492d998b751264ad966990c?postId=76a038a09cc8" data-media-id="49fda71e0492d998b751264ad966990c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F8312841%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





This would output:

<pre name="24b2" id="24b2" class="graf graf--pre graf-after--p">0  
1  
2  
3  
4</pre>

Here are the two problems that I see:

*   What is the concept of _i_? It is used differently than other variables.
*   Where does the iteration happen? In other words, when does _i_ increase?



![](https://cdn-images-1.medium.com/max/1600/1*DE9ODjXM6QXqMfq0c-K5RQ.png)



We are going to look at for loops a different way. **Imagine that you are a scuba diver,** and you are planning a day-long trip to a new location. You are checking out a new reef, so you will probably want to take multiple trips to the bottom to make sure you see all the coral and marine life.

#### Preparing for the dive (initialization and condition)





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/49fda71e0492d998b751264ad966990c?postId=76a038a09cc8" data-media-id="49fda71e0492d998b751264ad966990c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F8312841%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Before you start your dive, you need to determine how many oxygen tanks you will need over the course of the day.

_let i= 0;_

This is the **initialization.** Ittells you the value of the first oxygen tank. In this case, you start at tank 0.



![](https://cdn-images-1.medium.com/max/1600/1*OcULbAvuWwufuJoH3KNMfA.png)



_i < 5_

This is the **condition**. It is kind of like the capacity of the boat. You can only add as many oxygen tanks as your boat will hold.



![](https://cdn-images-1.medium.com/max/1600/1*YsJJ0s4DbgW8WcIcftPXyQ.png)



#### Setting up oxygen tanks (update)

So far, we know that our first oxygen tank has a value of 0, and the last one must be less than 5\. But how many tanks do you need to prepare?

The last part, called the **update**, tells us how many tanks we need to line up.

_i++_

This is shorthand for: _i = i+1_

It means that every time we finish a loop, we will add 1 to i. Since i starts at 0, here is what that looks like.



![](https://cdn-images-1.medium.com/max/1600/1*kY-ArC5Hs5oQIbw6H1mOIA.gif)



We continue to add oxygen tanks until we hit the limit. When we add one tank at a time, the last value that fulfills the **condition** is 4.

#### Scuba diver goes on first trip (iteration)

So far, we know the start value of _i_ (0) and each value of _i_ that fulfills the **condition** (0–4). We are all set up. Now, we need to bring in the scuba diver and execute the statements within the for loop.

Imagine that we are running this loop:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/0a519c5ba47dff7914c9338f8a2867d8?postId=76a038a09cc8" data-media-id="0a519c5ba47dff7914c9338f8a2867d8" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F8312841%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





So, your scuba diver starts at a value of 0.



![](https://cdn-images-1.medium.com/max/1600/1*n__pDZLTVnYhr5xMDHiAGw.png)



Do you see where we are going with this? Your scuba diver is actually _i_! And it is going to move through the contents of the for loop, and then come up for another tank.



![](https://cdn-images-1.medium.com/max/1600/1*fEwGM-iXwM738RmLmkbfCQ.gif)



Right now, the loop only has one statement. Here is what will happen on the first iteration.



![](https://cdn-images-1.medium.com/max/1600/1*w1q3AVZpxgGwfB6cs-bMNA.gif)



The console would log: “The current value is 0” since _i_ is 0\. Your scuba diver carries the value of each oxygen tank as it moves through the array.

#### Swimming back up (second iteration)





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/0a519c5ba47dff7914c9338f8a2867d8?postId=76a038a09cc8" data-media-id="0a519c5ba47dff7914c9338f8a2867d8" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F8312841%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Since this for loop only has one statement, you just completed the first iteration. Now, you need to run through it using the next value.

You will usually find that your for loops have many lines of code. But for the time being, we are just sticking to the one line so that you can trace the path of _i_.

Here’s what happens when you hit that last bracket: }.



![](https://cdn-images-1.medium.com/max/1600/1*VVGnJnOjP1-sBvD1HEp8-Q.gif)



The scuba diver drops the 0 tank and climbs the ladder back up to grab the second tank, with a value of 1\. The scuba diver is doing some sort of weird solitary relay race, but hey, that is the nature of a for loop. You want it to be as quick as possible. Now, the diver is ready to go through the loop again with a value of 1.

#### The rest of the oxygen tanks (every iteration)

Now the diver needs to take each oxygen tank through the loop until they are all gone.

Each time, we will log a new statement to the console.



![](https://cdn-images-1.medium.com/max/1600/1*-6-NXQWEqARvOTgObuKR5A.gif)



The final output would be:

<pre name="e833" id="e833" class="graf graf--pre graf-after--p">The current value is 0  
The current value is 1  
The current value is 2  
The current value is 3  
The current value is 4</pre>

By the end of the loop, _i_ is equal to 4 and cannot go any higher due to the **condition**, so the loop is done. If you run the loop again, _i_ will start at 0 again due to the **initialization**.

Why aren’t there multiple scuba divers? Because there is only one _i_! There can only be one value of _i_ going through the loop at any time. _i_ needs to climb back up to the top to grab the next value.

#### Changing the conditions

Let’s say that now, instead of counting up from 0 to 5, you want to count down every whole number from 10 to 2\. How might you do that?







![](https://cdn-images-1.medium.com/max/2000/1*XoFg1YUcFk4JnjIJUq_i5g.png)







Since the start value is 10, you need to **initialize** _i_ to 10.

_let i= 10;_

Then, since you want the last number to be 2, you need to set a **condition** for all numbers greater than 1.

_i > 1_

And, instead of i++, we use _i - -_, which is equivalent to _i= i-1._

Full code:

<pre name="310e" id="310e" class="graf graf--pre graf-after--p">for ( let i = 10; i > 1; i --){}</pre>

#### Using for loops alongside arrays

Before you read this section, you should understand arrays. If you have not studied them before, check out [my guide here](https://medium.freecodecamp.org/javascript-arrays-and-objects-are-just-like-books-and-newspapers-6e1cbd8a1746).

For loops are commonly used to iterate through arrays. Let’s say you have an array full of test scores.

<pre name="b493" id="b493" class="graf graf--pre graf-after--p">var testScores = [64, 86, 73, 82, 95, 62, 87, 99];</pre>

You want to log a message related to each score in the console. As you go through your loop, you need to be able to align the current value of _i_ with the **index** of the array. Therefore, you need to make sure the for loop goes through every item in the array, no matter how many test scores are in it.

We can use the [length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length) property of the array to discover how many elements it contains. In this case, it is 8\. Remember that arrays are also [0-indexed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), meaning the first element of the array has an index of 0.







![](https://cdn-images-1.medium.com/max/2000/1*sTvu3W0YFTXJnZXojwh_kw.png)







We **initialize** _i_ to 0\. We can actually use the testScores.length in the condition, so that it will work no matter how many elements are in the array.

_i< testScores.length_

We can reference each item in the array by using _i_ as the index.

_testScores[i]_

Back to our scuba diver: It needs to takes as many trips as there are elements in the array. This is why it is so important for us to track _i_. In this example, the values of the tanks map to specific items in the array.



![](https://cdn-images-1.medium.com/max/1600/1*BTH-FD_G2oPdsCLod0snmA.gif)



The example above shows the third iteration of the loop, which will access the third element of the array at index 2\. See how that can be tricky?

Here is the final code for that:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/1ee09eb4cff7bd663871c32bcf66c358?postId=76a038a09cc8" data-media-id="1ee09eb4cff7bd663871c32bcf66c358" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F8312841%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Did you enjoy this? Give it a clap so others can discover it as well. And, if you want to get notified when I release future tutorials that use analogies, sign up here:





<iframe data-width="800" data-height="400" width="700" height="350" src="https://medium.freecodecamp.org/media/614143bb18105e1285ae4a1df769c191?postId=76a038a09cc8" data-media-id="614143bb18105e1285ae4a1df769c191" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fe.enpose.co%2F%3Fkey%3DdRXnS9Gplk%26w%3D700%26h%3D425%26url%3Dhttps%253A%252F%252Fupscri.be%252F97999b%252F%253Fenpose&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>












