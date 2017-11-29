---
author: Ivan Orlov
authorTwitter: none
authorFacebook: https://facebook.com/1417011231658371
title: "Make your life easier with JavaScript promises"
subTitle: "If you’re not using Promises in your JavaScript yet, you should give them a try. Today I’ll walk you through situations where promises ar..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*04bMW0y0-DvpWPoks8GvlA.png
url: https://medium.freecodecamp.org/let-there-be-promise-and-there-was-then-e2fd94a0b2f9
id: let-there-be-promise-and-there-was-then-e2fd94a0b2f9
date: 2016-07-26T11:19:06.414Z
tags: [
  "JavaScript",
  "ES6",
  "Web Development",
  "Software Development",
  "Programming"
]
---
# Make your life easier with JavaScript promises



![](https://cdn-images-1.medium.com/max/1600/1*04bMW0y0-DvpWPoks8GvlA.png)



If you’re not using Promises in your JavaScript yet, you should give them a try. Today I’ll walk you through situations where promises are helpful, and show you how to apply them.

> The **promise** object is used for asynchronous computations. A promise represents an operation that hasn’t completed yet, but that you expect to complete in the future.

What does that actually mean? Well, if you’ve already started using NodeJS, you may have already heard about promises. But it might be a little bit hard to grasp the concept. So let me break it down for you.

Let’s implement a [waiting chain](https://tonicdev.com/nchanged/579b31586ee527120007dd57).



![](https://cdn-images-1.medium.com/max/1600/1*XGZBVJ1s34XuJ72Vv4VfxQ.png)



**Wait3** waits for **wait2,** and **wait2** waits for **wait1**.

If you imagine how this would be useful in a real app, think of database requests, or API calls: **Authorize** -> **getAccess** -> **Make a post**

All of these methods are asynchronous. So we need to have a way to sync them, since Javascript is asynchronous.

Passing callbacks is one way to achieve it.

But most JavaScript developers agree: the more nested callbacks you have, the worse your code looks. Besides, how would you handle errors?

<pre name="dfeb" id="dfeb" class="graf graf--pre graf-after--p">function(e, res){  
   if (e) { console.log(e) }  
}</pre>

You must have seen that a lot. Let’s say you inject few of those into your callback stack, but then you realize that you need to catch all of them and display an error, for instance. And then you start dancing around, and make your code even more unreadable in the process.

Here’s one of the snippets I discovered in our old code base, which almost made me choke.



![](https://cdn-images-1.medium.com/max/1600/1*BYrfEqccJOWjG-BL_SlGyg.png)

The full function — and all its nested callbacks — is way too big for me to show here.



After you’ve seen enough of these callback “pyramids of doom,” you too will inevitably decide that it’s time to try promises. Here’s what they look like:



![](https://cdn-images-1.medium.com/max/1600/1*BOVXLOUm9_sIAavyRKFA0A.png)



This might [look](https://tonicdev.com/nchanged/579b36a56ee527120007df2c) confusing at first, but don’t worry, you’ll get there.

I modified this code, so instead of passing callbacks, now each procedure returns a **Promise instance**. Each instance has **then** and **catch** methods, and should be either **resolved** or **rejected**.

Why not try a primitive [auth example](https://tonicdev.com/nchanged/579b3a226ee527120007e086)?



![](https://cdn-images-1.medium.com/max/1600/1*4A8Lg05V4DRnMZY_xvRaOQ.png)



#### Why is this better than using callbacks?

1.  User promotion won’t be executed if there is an error. So you can totally rely on the validity of the user object. No extra validations are required.
2.  You can handle all errors in the same place. You only need one **catch** handler.
3.  You can **vertically** arrange your code. Want to have extra functionality? Create another promise and inject it into your flow using “**then”**

But sometimes it’s not that simple as it seems:

<pre name="389c" id="389c" class="graf graf--pre graf-after--p">flow.procedureC().then(flow.procedureB).then((res) => (  
   flow.procedureD(res)  
));</pre>

What inconveniences can you spot [here](https://tonicdev.com/nchanged/579b17c049cba51300e8f5ab)? Let’s try highlighting these.

### Javascript context

When you pass a function into “then” it loses its context, unless it’s bound. So let’s say you are relying on a specific “this” reference.

You can see the problem [here](https://tonicdev.com/nchanged/579b17c049cba51300e8f5ab). (This runs automatically and you can read the output almost immediately.)

<pre name="e264" id="e264" class="graf graf--pre graf-after--p">flow.procedureC().then(flow.procedureB)</pre>

Passing “flow.procedureB” into a promise without explicitly binding reference will change “this” to a completely different object.

You will get an error: **flow.procedureB** lost its “this”.

And it’s not promises’ fault. That’s just how JavaScript works.

Luckily, there are some workarounds:

#### Binding

<pre name="40cb" id="40cb" class="graf graf--pre graf-after--h4">flow.procedureC().then(flow.procedureB.bind(flow));</pre>

> The **bind()** method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

In our case “this” should be referenced to the “**flow”** instance.

#### **Using closures**:

<pre name="cff1" id="cff1" class="graf graf--pre graf-after--h4">flow.procedureC().then(() => {  
    return flow.procedureB()  
});</pre>

> Closures are functions that refer to independent (free) variables (variables that are used locally, but defined in an enclosing scope). In other words, these functions ‘remember’ the environment in which they were created.

As expected, our closure function “remembered” the environment of “procedureB” which is “**flow**” and resolved the issue.

### Sharing results

You will stumble upon this problem once you start to implement some non-trivial tasks. When your application requires you to go through many steps, verifications, modifying, storing — you will experience impediments with **sharing** and **storing** results in your flow.

<pre name="87d0" id="87d0" class="graf graf--pre graf-after--p">let res_a, res_b, res_c;  
a().then((res) => {  
   res_a = res  
}).then((res) => {  
   return b();  
}).then((res) => {  
   res_b = res;  
}).then(c).then(() => {  
   res_a.callSomething()  
})</pre>

Not very beautiful, is it? After resolving **a** and **b**, you still need to continue working with resolved objects, which means redundant steps.

> A promise returns one object at a time.



![](https://cdn-images-1.medium.com/max/1600/1*mQdhuIaESzo4eTAzdy38zQ.jpeg)



<pre name="0c86" id="0c86" class="graf graf--pre graf-after--figure">.then((res) => {     
   res_b = res // Saving for later re-use  
})</pre>

You can check out this [discussion](http://stackoverflow.com/questions/28250680/how-do-i-access-previous-promise-results-in-a-then-chain). Awaiting, yielding — all of that looks extremely appealing at first glance. But ECMAScript 8 syntax is not approved yet, and it is very complicated for the beginners.

### Solutions

Have you heard of waterfalls or chains? One solution would be to use these.

[Realm-js](https://github.com/realm-js/realm-js) provides a very powerful and elegant solution for sharing scopes and organizing Promise flows.



![](https://cdn-images-1.medium.com/max/1600/1*oVqdZl06Hv908cFrbcd5cA.png)



[Try it live!](https://tonicdev.com/57973bc56ee527120006cebd/57973bc56ee527120006cebe)

The properties of a Class are executed consecutively. If you prefix your method with “set” it will store the result into the scope. So the result of “setFoo()” will become available in the scope or class (let’s call it “**this**”) as “foo”.

**So, how do we benefit from having a class?**

*   We don’t need “then” anymore. The chain is resolved if promised
*   We get to name our procedures. It’s easy to follow and find a needed reference
*   We can share promised results painlessly
*   We can [format](https://github.com/realm-js/realm-js/blob/master/README.md#formatting-the-output) the output if needed

**You have total control of your flow:**

*   You can break chains using [this.$break()](https://github.com/realm-js/realm-js/blob/master/README.md#breaking-chains). That’s a handy one. Once you decide that you don’t need to continue with the flow, call the magic function and resolve the current state. (You can override the output passing an object.)
*   You can also kill chains using [_this.$kill()_](https://github.com/realm-js/realm-js/blob/master/README.md#killing-chains-and-ignoring-the-output)_._

In a nutshell, Chaining replaces the “then” practice, converting your promise flow into a neatly structured class. No more binding problems. Just clear code. Win.

Thanks for reading!

I really hope this approach will help you write better JavaScript. If you have something to say, don’t hesitate to comment. Let’s discuss your code and together we can solve more problems!








