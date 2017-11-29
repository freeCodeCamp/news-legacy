---
author: Stephen Mayeux
authorTwitter: https://twitter.com/ESLhiphop
authorFacebook: https://facebook.com/10105098501688775
title: "Understanding Asynchronous JavaScript Callbacks Through Household Chores"
subTitle: "The other day I read Kevin Kononenko’s brilliantly funny and easy-to-understand guide to MVC frameworks. He explains the Model-View-Contr..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*VUwszg-nhLvQ4uN5iqBLag.jpeg
url: https://medium.freecodecamp.org/understanding-asynchronous-javascript-callbacks-through-household-chores-e3de9a1dbd04
id: understanding-asynchronous-javascript-callbacks-through-household-chores-e3de9a1dbd04
date: 2016-05-16T08:55:08.327Z
tags: [
  "JavaScript",
  "Programming",
  "Education",
  "Tech",
  "Technology"
]
---
# Understanding Asynchronous JavaScript Callbacks Through Household Chores







![](https://cdn-images-1.medium.com/max/2000/1*VUwszg-nhLvQ4uN5iqBLag.jpeg)







#### If you’ve ever done the laundry, you can understand how callbacks work.

The other day I read [Kevin Kononenko](https://medium.com/@kevink)’s brilliantly funny and easy-to-understand guide to MVC frameworks. He explains the [Model-View-Controller paradigm through ordering drinks at a bar](https://medium.freecodecamp.com/model-view-controller-mvc-explained-through-ordering-drinks-at-the-bar-efcba6255053#.9bjays8jc), and it has been one of my favorite programming explanations I think ever!

I really appreciated it because it was written without an air of pretension or elitism, and it made me wonder why a lot of other experienced coders can’t help newbies without the _l337er-than-thou_ attitude?

I teach English in South Korea at the moment, and we teachers have to think like Kevin all the time. Nowadays it is really frowned upon to explicitly explain grammatical concepts, so good teachers try to contextualize the target language (i.e. the grammar or vocabulary they want to teach) with stories, film, music, and images.

This teaching methodology was influenced by British linguists in the 1980s, which has informed modern foreign language pedagogy today. Maybe the same thing is happening right now for coding education!

Kevin is going to be a hard act to follow, but I would like to explain how asynchronous callbacks work in JavaScript through the context of doing common household chores.

#### Synchronous Honey-Do List

Shout out to my wife who has been doing double her share of the chores at home while I learn to code. I owe her big time!

I usually help out around the house on Sundays, and her honey-do list for me looks like this:

1.  Do the laundry
2.  Give dog a bath
3.  Sort the recycling
4.  Balance the budget
5.  Figure out what we’re doing for dinner.

**Technical aside:** At the core, JavaScript is a synchronous programming language, meaning it runs one line of code at a time. It cannot move on to the next line of code until the current line has finished executing. Consider this example:

<pre name="bb9c" id="bb9c" class="graf graf--pre graf-after--p">function syncChores() {  
  console.log('Do the laundry');  
  console.log('wash the dog');  
  console.log('sort the recycling');  
}</pre>

<pre name="c16f" id="c16f" class="graf graf--pre graf-after--pre">syncChores();</pre>

<pre name="cc12" id="cc12" class="graf graf--pre graf-after--pre">/* Output appears in the same order it was written:</pre>

<pre name="2f5b" id="2f5b" class="graf graf--pre graf-after--pre">   Do the laundry  
   wash the dog  
   sort the recycling</pre>

<pre name="3a37" id="3a37" class="graf graf--pre graf-after--pre">*/</pre>

Now imagine if I did my chores synchronously in real life. What would happen? What would that look like?

If you go back to my list, you will see that doing the laundry is the first item. It takes about 35 minutes for a typical wash cycle to finish and an additional 45 minutes for a load of laundry to dry. So for 80 minutes, I am just sitting on my lazy butt, not doing any other chores, as I synchronously wait for the laundry to finish.

Here’s what that looks like with pseudocode:

<pre name="073d" id="073d" class="graf graf--pre graf-after--p">function doLaundry() {  
  startWashCycle();  
  switchToDryer();  
  foldAndIronClothes();  
}</pre>

<pre name="c959" id="c959" class="graf graf--pre graf-after--pre">function washDog() {  
  // imagine some dog-washing code here  
}</pre>

<pre name="8d6c" id="8d6c" class="graf graf--pre graf-after--pre">function sortRecycling() {  
  // and imagine some sorting code here  
}</pre>

<pre name="6351" id="6351" class="graf graf--pre graf-after--pre">doLaundry();  
// Now wait a full 80 minutes before completing other functions</pre>

<pre name="0baa" id="0baa" class="graf graf--pre graf-after--pre">// Now I can finally wash my dog!  
washDog();  
sortRecycling();</pre>

Not very efficient, is it? In real life, busy adults would tackle these chores asynchronously, meaning they would start the laundry, continue doing other tasks on the lists, and go back to the laundry when the wash cycle has finished.

This action of going back to the laundry when it’s ready is analogous to the JavaScript **callback function**, and our washing machines quite literally call us back with some alarm or buzzer! This allows us to go on and do other chores and then continue with the laundry chore when it is ready for us.

#### Asynchronous Honey-Do List

Let’s do the chores again, this time asynchronously. What would that look like in pseudocode?

<pre name="1d49" id="1d49" class="graf graf--pre graf-after--p">function doLaundry(callback) {  
  // imagine initial code that kicks off wash cycle  
  // takes 80 minutes to complete wash cycle</pre>

<pre name="d826" id="d826" class="graf graf--pre graf-after--pre">  callback(err, cleanLaundry);  
}</pre>

<pre name="0900" id="0900" class="graf graf--pre graf-after--pre">doLaundry(function(err, cleanLaundry) {  
  // sometimes our washing machines break down  
  // better handle that possible error</pre>

<pre name="2031" id="2031" class="graf graf--pre graf-after--pre">  if (err) throw err;</pre>

<pre name="f146" id="f146" class="graf graf--pre graf-after--pre">  // if no errors, switch to dryer after wash is complete</pre>

<pre name="1317" id="1317" class="graf graf--pre graf-after--pre">  // Tada! Our call back alerting us that washing is complete!</pre>

<pre name="241e" id="241e" class="graf graf--pre graf-after--pre">  switchToDryer(cleanLaundry);</pre>

<pre name="22e8" id="22e8" class="graf graf--pre graf-after--pre">});</pre>

<pre name="4257" id="4257" class="graf graf--pre graf-after--pre">// as we wait, JavaScript will run this stuff now!</pre>

<pre name="0e56" id="0e56" class="graf graf--pre graf-after--pre">washDog();</pre>

<pre name="fe5e" id="fe5e" class="graf graf--pre graf-after--pre">// still time for more chores!</pre>

<pre name="261f" id="261f" class="graf graf--pre graf-after--pre">sortRecycling();</pre>

<pre name="d59c" id="d59c" class="graf graf--pre graf-after--pre">// the following will be undefined because it is not yet ready</pre>

<pre name="bd67" id="bd67" class="graf graf--pre graf-after--pre">console.log(cleanLaundry);</pre>

<pre name="9ded" id="9ded" class="graf graf--pre graf-after--pre">// Now the laundry is ready!   
// Let's go back and switch clothes to the dryer</pre>

<pre name="76b7" id="76b7" class="graf graf--pre graf-after--pre">// The clothes are drying. Let's continue doing more chores.  
// Tanya will be impressed with my productivity!</pre>

<pre name="f2e7" id="f2e7" class="graf graf--pre graf-after--pre">balanceBudget();</pre>

Like Kevin’s article, this was only meant to clear up the concept of callbacks. If you want a more practical guide, check out [Callback Hell](http://callbackhell.com).

#### Your Turn

It helps if you can apply abstract concepts to real situations. Can you think about what you do at home, school, or work that resembles synchronous and asynchronous code? Write them in the comments below!








