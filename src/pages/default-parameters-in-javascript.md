---
author: Tyler McGinnis
authorTwitter: https://twitter.com/tylermcginnis
authorFacebook: https://facebook.com/10153707086226430
title: "How Default Parameters work in JavaScript ES6"
subTitle: "With Default Parameters, you can set default values for any arguments. Then when a function is invoked and those arguments aren’t defined..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*iD9gngBKF0SHQYqejap5wA.jpeg
url: https://medium.freecodecamp.org/default-parameters-in-javascript-4302958331f7
id: default-parameters-in-javascript-4302958331f7
date: 2017-10-02T08:14:05.284Z
tags: [
  "JavaScript",
  "ES6",
  "Software Development",
  "Web Development",
  "Programming"
]
---
# How Default Parameters work in JavaScript ES6







![](https://cdn-images-1.medium.com/max/2000/1*iD9gngBKF0SHQYqejap5wA.jpeg)







With Default Parameters, you can set default values for any arguments. Then when a function is invoked and those arguments aren’t defined, your default values will stand in for them.

In this article, I’ll show you how to use Default Parameters to make certain arguments required.

I’ve also recorded a 7-minute video version of this article:





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/1f2fd32b04fe456b6b448e6e4288989d?postId=4302958331f7" data-media-id="1f2fd32b04fe456b6b448e6e4288989d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FaF3-ub5bkXQ%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Below we have a function called `calculatePayment`. This function will take in three arguments: `price`, `salesTax`, and a `discount`. The goal of this function is to take in those three items and return a final price, after taking into consideration the sales tax and any discount.

What’s interesting about this function is the only argument that is really required is the `price`. When we define `calculatePayment`, we should set default values for both `salesTax` and `discount` so if they’re not specified when the function is invoked, they’ll still be initialized with those values.

With ES5, we’d typically do that like this:

    function calculatePayment (price, salesTax, discount) {   salesTax = salesTax || 0.047   discount = discount || 0 

<pre name="a20b" id="a20b" class="graf graf--pre graf-after--pre">  // math  
}</pre>

If you’ve never seen the `||` operator used like this before, here’s what’s going on. When `calculatePayment` is invoked, `salesTax` is going to be set to `salesTax` is, unless it was falsy, then it will be set to `0.047`. The same thing is happening for `discount`.

If you’re observant, you may have noticed some issues with the current implementation. What happens if when we invoke calculatePayment passing in `100`, `0`, and `0`?

    calculatePayment(100,0,0)

You might expect both `salesTax` and `discount` to be set to `0` since that’s what we specified when the function was invoked. However, in JavaScript, `0` is falsy. So instead of `salesTax` being `0` as we specified, it’s instead set to our default value of `0.047`. To fix this, we can use the `typeof` operator rather than relying on the `||` operator.

    function calculatePayment (price, salesTax, discount) {    salesTax = typeof salesTax === 'undefined' ? 0.047 : salesTax  discount = typeof discount === 'undefined' ? 0 : discount 

<pre name="9064" id="9064" class="graf graf--pre graf-after--pre">  // math  
}</pre>

Much better. Now, `salesTax` will be `0` just as we’d expect. If you’re still with me, you’re in a great place to now understand the value add of ES6’s Default Paremeters since they solve the same problem. However, instead of using the `typeof` operator to check if the values are undefined, we can do something like this instead,

    function calculatePayment(price, salesTax = 0.047, discount = 0) {   console.log('tax', salesTax)    console.log('discount', discount) 

<pre name="331e" id="331e" class="graf graf--pre graf-after--pre">   // math  
}</pre>

Notice all we did was move the logic up into where we define the function’s parameters. Much cleaner.

Now typically this is where posts about Default Parameters end. However, I think there’s one more cool|weird|clever aspect of Default Parameters that’s worth mentioning.

Looking back at the `calculatePayment` function, I mentioned the only real required argument to the function was the `price`. Everything else we could just set a default value for but if `price` wasn’t passed in, the function would break. What if there was a way, using default parameters, to have our function throw an error if `price` was `undefined` when the function was invoked? As you can probably guess, there is.

First, let’s create a function called `isRequired` who’s whole purpose is to just throw an error.

    function isRequired (name) {   throw new Error(name + 'is required') }

Now, similar to what we did earlier with `salesTax` and `discount`, let’s set `price` equal to the function invocation of our `isRequired` function inside of the `calculatePayment`’s parameters.

    function isRequired (name) {   throw new Error(name + 'is required') } 

    function calculatePayment(   price = isRequired('price'),   salesTax = 0.047,   discount = 0 ) {       // math

    }

Now if we invoke `calculatePayment` and don’t pass in a `price`, we’ll get an error.











* * *







Thanks for reading! I originally published this on [tylermcginnis.com](https://tylermcginnis.com/videos/default-parameters/) as part of my “[Modern JavaScript](https://tylermcginnis.com/courses/modern-javascript/)” course.



[![](https://cdn-images-1.medium.com/max/1600/1*g8rYjAG5p6R3lgrDhjEwYw.png)](https://tylermcginnis.com)










