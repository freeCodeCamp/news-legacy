---
author: Bill Sourour
authorTwitter: https://twitter.com/BillSourour
authorFacebook: https://facebook.com/146616355903929
title: "Constant confusion: why I still use JavaScript function statements"
subTitle: "Back in the late 90’s — when I learned JavaScript — we were taught to write the “Hello World” function using a function statement. Like t..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*XtnYegzS5oCV0xWGEgNaiQ.jpeg
url: https://medium.freecodecamp.org/constant-confusion-why-i-still-use-javascript-function-statements-984ece0b72fd
id: constant-confusion-why-i-still-use-javascript-function-statements-984ece0b72fd
date: 2016-08-16T20:56:15.055Z
tags: [
  "JavaScript",
  "ES6",
  "Programming",
  "Web Development",
  "Software Development"
]
---
# Constant confusion: why I still use JavaScript function statements







![](https://cdn-images-1.medium.com/max/2000/1*XtnYegzS5oCV0xWGEgNaiQ.jpeg)







Back in the late 90’s — when I learned JavaScript — we were taught to write the “Hello World” function using a **function statement**. Like this…

<pre name="72af" id="72af" class="graf graf--pre graf-after--p">function helloWorld() {  
  return ‘Hello World!’;  
}</pre>

These days it seems all the cool kids are writing the “Hello World” function like this…

<pre name="cc4e" id="cc4e" class="graf graf--pre graf-after--p">const helloWorld = () => 'Hello World!';</pre>

This is a **function expression** in ES2015 JavaScript and it’s sexy as hell. It’s beautiful to look at. It’s all one line. So terse. So lovely.

It uses an arrow function which is one of the [most popular features of ES2015](http://www.2ality.com/2015/07/favorite-es6-features.html).

When I first saw this I was like:



![](https://cdn-images-1.medium.com/max/1600/1*LckJgMhB94B8xc5Ftr9_5w.jpeg)

Even though [Babel](http://babeljs.com) is free.



So, after almost 20 years of JavaScript and after using ES2015 on a number of projects, here is how I would write the “Hello World” function today:

<pre name="f6c0" id="f6c0" class="graf graf--pre graf-after--p">function helloWorld() {  
  return ‘Hello World!’;  
}</pre>

Now that I have shown you the new way, I’m sure you can barely stand to look at the old school code above.

Three whole lines for just a simple little function! All those extra characters!

I know what you’re thinking…



![](https://cdn-images-1.medium.com/max/1600/1*cOba5M3Cnvg9OPXNzq0spw.gif)

Ain’t nobody got time for that!



I love arrow functions, I really do. But when I need to declare a top level function in my code, I still use a good old-fashioned function statement.

This quote by “Uncle Bob” Martin explains why:

> “…the ratio of time spent reading versus writing is well over 10 to 1\. We are constantly reading old code as part of the effort to write new code.

> Because this ratio is so high, we want the reading of code to be easy even if it makes the writing harder.”

> — Robert C. Martin   
> Clean Code: A Handbook of Agile Software Craftsmanship

Function statements have two clear advantages over function expressions:

#### Advantage #1: Clarity of intent

When scanning through thousands of lines of code a day, it’s useful to be able to figure out the programmer’s intent as quickly and easily as possible.

Take a look at this:

<pre name="4c69" id="4c69" class="graf graf--pre graf-after--p">const maxNumberOfItemsInCart = ...;</pre>

You read all those characters and you still don’t know if the ellipsis represents a function or some other value. It could be:

<pre name="3a18" id="3a18" class="graf graf--pre graf-after--p">const maxNumberOfItemsInCart = 100;</pre>

…or it could just as easily be:

<pre name="0356" id="0356" class="graf graf--pre graf-after--p">const maxNumberOfItemsInCart = (statusPoints) => statusPoints * 10;</pre>

If you use a function statement, there is no such ambiguity.

Look at:

<pre name="5bb5" id="5bb5" class="graf graf--pre graf-after--p">const maxNumberOfItemsInCart = 100;</pre>

…versus:

<pre name="0d06" id="0d06" class="graf graf--pre graf-after--p">function maxNumberOfItemsInCart(statusPoints) {  
  return statusPoints * 10;  
}</pre>

The intent is crystal clear right from the start of the line.

But maybe you’re using a code editor that has some color-coding clues. Maybe you’re a speed reader. Maybe you just don’t think it’s that a big a deal.

I hear you. The terseness is still looking pretty sexy.

In fact, if this were my only reason, I might have found a way to convince myself that it’s a worthwhile tradeoff.

But it’s **not** my only reason…

#### Advantage #2: Order of declaration == order of execution

Ideally, I want to declare my code more or less in the order that I expect it will get executed.

This is the showstopper for me: any value declared using the const keyword is **inaccessible** until execution reaches it.



![](https://cdn-images-1.medium.com/max/1600/1*MINb-ejYCab5RKkhqAplDA.gif)

Prepare for fancy jargon that proves I kinda know what I am talking about (hopefully).



**Fair warning:** I’m about to go all, “Professor JavaScript” on you. The only thing you need to understand in all the jargon below is that **you cannot use a const until you’ve declared it**.

The following code will throw an error:

<pre name="ccfb" id="ccfb" class="graf graf--pre graf-after--p">sayHelloTo(‘Bill’);</pre>

<pre name="f20d" id="f20d" class="graf graf--pre graf-after--pre">const sayHelloTo = (name) => `Hello ${name}`;</pre>

This is because, when the JavaScript engine reads the code, it will **bind** “sayHelloTo”, but it won’t **initialize** it.

All declarations in JavaScript are bound early, but they are initialized differently.

In other words, JavaScript **binds** the declaration of “sayHelloTo” — reads it first and creates a space in memory to **hold its value **— but it doesn’t **set** “sayHelloTo” to anything until it reaches it during **execution**.

The time between “sayHelloTo” being bound and “sayHelloTo” being initialized is called the **temporal dead zone** (TDZ).

If you’re using ES2015 directly in the browser (as opposed to transpiling down to ES5 with something like Babel), the following code actually throws an error too:

<pre name="352f" id="352f" class="graf graf--pre graf-after--p">if(thing) {   
  console.log(thing);  
}  
const thing = 'awesome thing';</pre>

The code above, written using “var” instead of “const”, would **not** throw an error because vars get initialized as _undefined_ when they are bound, whereas consts are not initialized at all at bind time. But I digress…

Function statements do not suffer from this TDZ problem. The following is perfectly valid:

<pre name="6828" id="6828" class="graf graf--pre graf-after--p">sayHelloTo(‘Bill’);</pre>

<pre name="3d8d" id="3d8d" class="graf graf--pre graf-after--pre">function sayHelloTo(name) {  
  return `Hello ${name}`;  
}</pre>

This is because function statements get initialized as soon as they are bound — **before** any code is executed.

So, no matter when you declare the function, it will be available to its **lexical scope** as soon as the code starts executing.



![](https://cdn-images-1.medium.com/max/1600/1*6Lat3Yjtl7LP5OIiAznp2g.gif)

Professor JavaScript, out!



What I’ve just described above forces us to write code that looks upside down. We have to start with the lowest level function and work our way up.

My brain doesn’t work that way. I want the context before the details.

Most code is written by humans. So it makes sense that most people’s order of understanding roughly follows most code’s order of execution.

In fact, wouldn’t it be nice if we could provide a little summary of our API at the top of our code? With function statements, we totally can.

Check out this (somewhat contrived) shopping cart module…

<pre name="ec91" id="ec91" class="graf graf--pre graf-after--p">export {  
          createCart,  
       addItemToCart,  
  removeItemFromCart,  
        cartSubTotal,  
           cartTotal,  
            saveCart,  
           clearCart,  
}</pre>

<pre name="f62b" id="f62b" class="graf graf--pre graf-after--pre">function createCart(customerId) {...}</pre>

<pre name="6dab" id="6dab" class="graf graf--pre graf-after--pre">function isValidCustomer(customerId) {...}</pre>

<pre name="8734" id="8734" class="graf graf--pre graf-after--pre">function addItemToCart(item, cart) {...}</pre>

<pre name="2553" id="2553" class="graf graf--pre graf-after--pre">function isValidCart(cart) {...}</pre>

<pre name="d68c" id="d68c" class="graf graf--pre graf-after--pre">function isValidItem(item) {...}</pre>

<pre name="2532" id="2532" class="graf graf--pre graf-after--pre">...</pre>

With function expressions it would look something like…

<pre name="5695" id="5695" class="graf graf--pre graf-after--p">...</pre>

<pre name="7434" id="7434" class="graf graf--pre graf-after--pre">const _isValidCustomer = (customerId) => ...</pre>

<pre name="3b49" id="3b49" class="graf graf--pre graf-after--pre">const _isValidCart = (cart) => ...</pre>

<pre name="dd49" id="dd49" class="graf graf--pre graf-after--pre">const _isValidItem = (item) => ...</pre>

<pre name="b1cb" id="b1cb" class="graf graf--pre graf-after--pre">const createCart = (customerId) => ...</pre>

<pre name="0db8" id="0db8" class="graf graf--pre graf-after--pre">const addItemToCart = (item, cart) => ...</pre>

<pre name="b267" id="b267" class="graf graf--pre graf-after--pre">...</pre>

<pre name="5909" id="5909" class="graf graf--pre graf-after--pre">export {  
          createCart,  
       addItemToCart,  
  removeItemFromCart,  
        cartSubTotal,  
           cartTotal,  
            saveCart,  
           clearCart,  
}</pre>

Imagine this as a larger module with many small internal functions. Which would you prefer?

There are those who will argue that using something before you’ve declared it is unnatural, and can have unintended consequences. There are even extremely smart people who have said such things.

It is definitely an opinion — not a fact — that one way is better than the other.

But if you ask me: **Code is communication. Good code tells a story.**

I’ll let the compilers and the transpilers, the minifiers and the uglyfiers, deal with optimizing code for the machines.

I want to optimize my code for **human understanding**.











* * *







### What about those arrow functions, though?

Yes. Still sexy and still awesome.

I typically use arrow functions to pass a small function as a value to a higher order function. I use arrow functions with promises, with map, with filter, with reduce. They are the bees knees, my friends!

Some examples:

<pre name="a061" id="a061" class="graf graf--pre graf-after--p">const goodSingers = singers.filter((singer) => singer.name !== 'Justin Bieber');</pre>

<pre name="2df0" id="2df0" class="graf graf--pre graf-after--pre">function tonyMontana() {  
  return getTheMoney()  
           .then((money) => money.getThePower())  
           .then((power) => power.getTheWomen());  
}</pre>

I used a few other new JavaScript features in this article. If you want to learn more about the latest JavaScript standard (ES2015) and all the cool features it has to offer, **you should** [**get my quick start guide for free**](https://devmastery.com/signup/es6quickstart/index.html)**.**











* * *







My goal is always to help as many developers as possible, if you found this article useful, please hit the ❤ (recommend) button so that others will see it. Thanks!








