---
author: Jamund Ferguson
authorTwitter: https://twitter.com/xjamundx
authorFacebook: https://facebook.com/10105347919084188
title: "Getting Started with Async/Await"
subTitle: "Inspired by the Zeit team’s post on the subject, my team at PayPal recently migrated our main server-side codebase to use Async/Await. I’..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*RXBeQAwHOw_tZ2oBL4h8QA.jpeg
url: https://medium.freecodecamp.org/getting-started-with-async-await-b66385983875
id: getting-started-with-async-await-b66385983875
date: 2016-07-21T21:17:32.785Z
tags: [
  "JavaScript",
  "Nodejs",
  "ES6",
  "Web Development",
  "Programming"
]
---
# Getting Started with Async/Await







![](https://cdn-images-1.medium.com/max/2000/1*RXBeQAwHOw_tZ2oBL4h8QA.jpeg)







Inspired by the [Zeit team’s post on the subject](https://zeit.co/blog/async-and-await), my team at PayPal recently migrated our main server-side codebase to use Async/Await. I’m excited to share with you some of things we learned along the way.

Let’s start with some terminology:

*   **Async function**
*   **Await keyword**

People usually say async/await which is lovely and nice really, but you should know that they aren’t the same thing. There are _async functions_and there is the _await keyword_. They are certainly tied together in some ways, but async functions in particular can be used without await. How is that?

#### Async Functions Return a Promise

When you create a function with the async keyword that function will always return a Promise. When you return inside your async function it wraps your value in a Promise.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/62c9b9b9810ed34059768f87c76fc0e5?postId=b66385983875" data-media-id="62c9b9b9810ed34059768f87c76fc0e5" allowfullscreen="" frameborder="0"></iframe>



An async functions and its Promise-based Equivalent



Even if your code throws inside an async function it won’t automatically bubble up, instead it will return a rejected promise

#### Async Functions are the only Place where you can use Await

In addition to converting your returns into a Promise, an async function is also special in that it’s the only place where you can use the await keyword.*

What is the **await** keyword? Await lets you pause the execution of an async function until it receives the results of a promise. This lets you write async code that reads in the order that it’s executed.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/500c446699a160c9b11736af6b93c05a?postId=b66385983875" data-media-id="500c446699a160c9b11736af6b93c05a" allowfullscreen="" frameborder="0"></iframe>





Await allows you to write asynchronous code with no callbacks at all. This makes your code much more readable. And await works with any promise, not just promises created by async functions.

#### Error Handling in Async Functions

Because an async function is a **Promise**, when you **throw** inside of an async function it’s swallowed up and returned as a rejected Promise.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ab85d0460c9d62bd549204278a5649da?postId=b66385983875" data-media-id="ab85d0460c9d62bd549204278a5649da" allowfullscreen="" frameborder="0"></iframe>





If you are using **await** to call the **Promise** you can wrap it in **try/catch** or you’ll need to add a **catch** handler to the returned Promise.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/4b4230490e5e29ff26cee17e45329aa8?postId=b66385983875" data-media-id="4b4230490e5e29ff26cee17e45329aa8" allowfullscreen="" frameborder="0"></iframe>





Promise errors usually bubble up to their parent, so you usually only need that **try/catch** on your top-level Promise.

#### Putting  it all Together

Taking advantage of the error handling properties of promises and the concise syntax of async functions can yield some powerfully simple results.

In this simplified example you can see how one might take advantage of the inherent error handling capabilities async functions to simplify error handling in an Express app





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/8508c3d934bea7d71e48a6a3b9627761?postId=b66385983875" data-media-id="8508c3d934bea7d71e48a6a3b9627761" allowfullscreen="" frameborder="0"></iframe>





On my team at PayPal we usually handle errors with **next(err).** However with async/await we can simply **throw** errors anywhere in the code and the router will forward them to the **next** function provided by Express**.** This is a huge simplification.

Moving from callbacks to promises and async/await has condensed error handling in our app and will improve comprehension for our more complicated code paths. It took me a couple of hours to migrate most of our routes from plain callbacks to this new approach. Really the only thing you need to get started is a [solid knowledge of Promises](https://medium.com/@bluepnume/learn-about-promises-before-you-start-using-async-await-eb148164a9c8#.vproogyex) and an understanding of [how to setup babel](https://babeljs.io/docs/setup/#installation).

I eagerly await hearing your experiences with these newfangled functions and believe they are going to be one of my favorite tools in the JavaScript toolbox moving forward.











* * *







* Top-level await is not allowed in the current spec ([Though there has been some discussion about possibly allowing this in the future](https://github.com/tc39/ecmascript-asyncawait/issues/9#issuecomment-127427447)).








