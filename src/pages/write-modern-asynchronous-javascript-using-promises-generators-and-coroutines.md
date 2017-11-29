---
author: William Gottschalk
authorTwitter: https://twitter.com/will_gottchalk
authorFacebook: https://facebook.com/10100338007407416
title: "Write Modern Asynchronous Javascript using Promises, Generators, and Coroutines"
subTitle: "Over the years, “Callback Hell” is often cited as one of the most hated design patterns in Javascript for managing concurrency. Just in c..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*SYxxUFJirsj3BH1-LCsFZw.jpeg
url: https://medium.freecodecamp.org/write-modern-asynchronous-javascript-using-promises-generators-and-coroutines-5fa9fe62cf74
id: write-modern-asynchronous-javascript-using-promises-generators-and-coroutines-5fa9fe62cf74
date: 2016-07-11T23:07:07.213Z
tags: [
  "JavaScript",
  "Programming",
  "ES6",
  "Software Development",
  "Tech"
]
---
# Write Modern Asynchronous Javascript using Promises, Generators, and Coroutines







![](https://cdn-images-1.medium.com/max/2000/1*SYxxUFJirsj3BH1-LCsFZw.jpeg)

How you might feel after learning about Promises, Generators, and Coroutines







Over the years, “Callback Hell” is often cited as one of the most hated design patterns in Javascript for managing concurrency. Just in case you’ve forgotten what that looks like, here is an example of a varying and processing a transaction in Express:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2b2b70a28302ce980424fa440588d59e?postId=5fa9fe62cf74" data-media-id="2b2b70a28302ce980424fa440588d59e" allowfullscreen="" frameborder="0"></iframe>





#### Promises were supposed to save us…

I was told that promises would allow us Javascript developers to write asynchronous code as if it were synchronous by wrapping our async functions in a special object. In order to access the value of the Promise, we call either **_.then_** or **_.catch_** on the Promise object. But what happens when we try to refactor the above example using Promises?





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9a87afde8fcfe817b981ac371fbd2124?postId=5fa9fe62cf74" data-media-id="9a87afde8fcfe817b981ac371fbd2124" allowfullscreen="" frameborder="0"></iframe>





Since each function inside of the callback is scoped, we cannot access the user object inside of the second **_.then_** callback.

So after a little digging, I couldn’t find an elegant solution, but I did find a frustrating one:

> Just indent your promises so that they have proper scoping.

Indent my promises!? So its back to the Pyramid of Doom now?





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/e415aca750faf07957f8154fbe7cc45f?postId=5fa9fe62cf74" data-media-id="e415aca750faf07957f8154fbe7cc45f" allowfullscreen="" frameborder="0"></iframe>





I would argue that the nested callback version looks cleaner and is easier to reason about than the nested promise version.

#### Async Await Will Save Us!

The **_async_** and **_await_** keywords will allow us to write our javascript code as though it is synchronous. Here is code written with those keywords coming in ES7:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/1b6ecc864e380ac524ab6a78d2eb1a36?postId=5fa9fe62cf74" data-media-id="1b6ecc864e380ac524ab6a78d2eb1a36" allowfullscreen="" frameborder="0"></iframe>





Unfortunately the majority of ES7 features including **_async_**_/_**_await_** have not been natively implemented and therefore, require the use of a transpiler. However, you can write code that looks exactly like the code above using ES6 features that have been implemented in most modern browsers as well as Node version 4+.

#### The Dynamic Duo: Generators and Coroutines

Generators are a great metaprogramming tool. They can be used for things like lazy evaluation, iterating over memory intensive data sets and on-demand data processing from multiple data sources using a library like RxJs.

However, we wouldn’t want to use generators alone in production code because they forces us to reason about a process over time. And each time we call next, we jump back to our generator like a GOTO statement.

Coroutines understand this and remedy this situation by wrapping a generator and abstracting away all of the complexity.

#### The ES6 version using Coroutine

Coroutines allow us to **_yield_** our asynchronous functions one line at a time, making our code look synchronous.

It’s important to note that I am using the Co library. Co’s coroutine will execute the generator immediately where as Bluebird’s coroutine will return a function that you must invoke to run the generator.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/eaf532a99e0e4df5001d7e28a6107a96?postId=5fa9fe62cf74" data-media-id="eaf532a99e0e4df5001d7e28a6107a96" allowfullscreen="" frameborder="0"></iframe>



If there is an error at any step in the generator, the coroutine will stop execution and return a rejected Promise.



Let’s establish some basic rules to using coroutines:

1.  Any function to the right of a **_yield_** must return a Promise.
2.  If you want to execute your code now, use **_co_**.
3.  If you want to execute your code later, use **_co.wrap_**.
4.  Make sure to chain a **_.catch_** at the end of your coroutine to handle errors. Otherwise, you should wrap your code in a try/catch block.
5.  Bluebird’s **_Promise.coroutine_** is the equivalent to Co’s **_co.wrap_** and not the **_co_** function on it’s own.

#### What if I want to run multiple processes concurrently?

You can either use objects or arrays with the yield keyword and then destructure the result.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/40fc3d864b5ceb8c9d36dba0659dbc43?postId=5fa9fe62cf74" data-media-id="40fc3d864b5ceb8c9d36dba0659dbc43" allowfullscreen="" frameborder="0"></iframe>



This example is specific to the Co library







<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9ac35cd0e0c2153fd5149f4f6b3fa4bb?postId=5fa9fe62cf74" data-media-id="9ac35cd0e0c2153fd5149f4f6b3fa4bb" allowfullscreen="" frameborder="0"></iframe>



This is an example using the Bluebird library.



#### Libraries that you can use today:

[**Promise.coroutine | bluebird**  
_Bluebird is a fully featured JavaScript promises library with unmatched performance._bluebirdjs.com](http://bluebirdjs.com/docs/api/promise.coroutine.html "http://bluebirdjs.com/docs/api/promise.coroutine.html")[](http://bluebirdjs.com/docs/api/promise.coroutine.html)

[**co**  
_generator async control flow goodness_www.npmjs.com](https://www.npmjs.com/package/co "https://www.npmjs.com/package/co")[](https://www.npmjs.com/package/co)

[**Babel · _The compiler for writing next generation JavaScript_**  
The compiler for writing next generation JavaScriptbabeljs.io](https://babeljs.io/ "https://babeljs.io/")[](https://babeljs.io/)

[**asyncawait**  
_async/await for node.js_www.npmjs.com](https://www.npmjs.com/package/asyncawait "https://www.npmjs.com/package/asyncawait")[](https://www.npmjs.com/package/asyncawait)








