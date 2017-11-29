---
author: Tiago Lopes Ferreira
authorTwitter: https://twitter.com/ferreiratiago_
authorFacebook: none
title: "Oh yes! Async / Await"
subTitle: "async/await is the new JavaScript syntax to declare an asynchronous function. It’s built on Promises, but is easier to use...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*AiFDaw_q4DMvkKBZI2zaKw.png
url: https://medium.freecodecamp.org/oh-yes-async-await-f54e5a079fc1
id: oh-yes-async-await-f54e5a079fc1
date: 2017-08-04T20:12:00.101Z
tags: [
  "JavaScript",
  "Web Development",
  "Programming",
  "Nodejs",
  "React"
]
---
# Oh yes! Async / Await







![](https://cdn-images-1.medium.com/max/2000/1*AiFDaw_q4DMvkKBZI2zaKw.png)







**async**/**await** is the new JavaScript syntax to declare an asynchronous function. It’s built on Promises, but is easier to use.

A thorough explanation of Promises is beyond the scope of this article. If you are new to Promises in JavaScript, please see [Using promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) to learn more. It’s not essential to be an expert on promises, but a good introduction will help you to learn **async**/**await**.

Here is a quick reminder of how to write and use a promise.

### Promises

A Promise represents a value that will be available now, in the future, or (possibly) never.

A Promise state can be one of the following:

*   **pending** — the Promise was neither resolved nor rejected. It represents a Promise‘s initial state.
*   **resolved** — the operation, wrapped by the Promise, completed successfully.
*   **rejected** — the operation failed.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/f096e2e55da96827292332005047376b?postId=f54e5a079fc1" data-media-id="f096e2e55da96827292332005047376b" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F3806676%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





`getRandomWithPromise()` defines a Promise that resolves with a random number value. `setTimeout()` simulates a delay to an asynchronous task such as an HTTP request.

Here’s an example of how we can use `getRandomWithPromise()`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/dbcba64f964893576231329c28cc555a?postId=f54e5a079fc1" data-media-id="dbcba64f964893576231329c28cc555a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F3806676%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





### async/await



![](https://cdn-images-1.medium.com/max/1600/1*Dp72fOGQa4WJy7M786c9ew.gif)



**async**/**await** is a keyword+operator pair that simplifies asynchronous code.

*   **async** declares the function is asynchronous.
*   **await** is the operator used to wait for a promise to be fulfilled. It can only be used within an **async** function.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2791fe254d02b5be3ccc7b23f3315c3c?postId=f54e5a079fc1" data-media-id="2791fe254d02b5be3ccc7b23f3315c3c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F3806676%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Let’s build an example, using the `getRandomWithAsync()` function and **async**/**await**.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9de75218f56ae2f625b6725cd3e2ab49?postId=f54e5a079fc1" data-media-id="9de75218f56ae2f625b6725cd3e2ab49" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F3806676%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





The first thing to notice is the keyword async declares the function is asynchronous

The **await** operator pauses `getRandomWithPromise()`until the promise is fulfilled.

When fulfilled the promise can be:

**resolved **— meaning that **await** will return the resolved value.

**rejected **— meaning that **await** will throw the rejected value.

Because a promise can throw an unexpected error it is important to wrap our code inside a **try**/**catch** block.

Note that the body of `getRandomWithAsync()` reads like it’s a synchronous function. This is one of the advantages of **async**/**await**. It makes the code logic easy to follow, even though it’s doing complicated work.

There’s no longer the need for indentation as with a [promise chain](https://javascript.info/promise-chaining).

### await

It’s important to remember **await** can only be used inside an **async** function. Otherwise, you’ll get a syntax error.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b7dbf452eb2532bd15c2ef3ba37db8e3?postId=f54e5a079fc1" data-media-id="b7dbf452eb2532bd15c2ef3ba37db8e3" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F3806676%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





This is how to use **await** with an Immediately Invoked Function Expression ([IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)).





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d190e88b96a7decaf32490039c234d2f?postId=f54e5a079fc1" data-media-id="d190e88b96a7decaf32490039c234d2f" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F3806676%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





### Classes

We can also create **async** functions inside classes.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/e6f849c99081e1aace7873f021a580b8?postId=f54e5a079fc1" data-media-id="e6f849c99081e1aace7873f021a580b8" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F3806676%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





### Multiple Promises

What if we have more than one promise to fulfill before continuing?

We can do it in two ways — sequentially or concurrently.

### Sequential





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/5a15d5bc418cdaefb0a4a402d0852d75?postId=f54e5a079fc1" data-media-id="5a15d5bc418cdaefb0a4a402d0852d75" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F3806676%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Promise b is only executed after Promise a fulfills. So the function execution time is the sum of execution time for Promises a and b.

This can be a major performance issue. The good news is we can run both promises concurrently to save time.

### Concurrent





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d0f7f1e4f03c1187e48be3052494e910?postId=f54e5a079fc1" data-media-id="d0f7f1e4f03c1187e48be3052494e910" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F3806676%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





We can run both promises in parallel by modifying the code. If you request the random numbers and save the promises, they will run concurrently. We wait for both promises to complete by using **await** in separate expressions. The result is displayed when they are both complete

The function execution time is equal to the promise that takes the longest time.

### Concurrently (with Promise.all)



![](https://cdn-images-1.medium.com/max/1600/1*XmtzVJeT4cYJuwAXmZk5Lw.gif)







<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/20184b40cdbf9252c46ff63ab732c0bd?postId=f54e5a079fc1" data-media-id="20184b40cdbf9252c46ff63ab732c0bd" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F3806676%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





We can also use `Promise.all` for concurrency.

One of the advantages is that `Promise.all` has fail-fast behavior. If one promise fails, Promise.all will not wait for the other promises to be fulfilled. It rejects immediately.

### await and thenable

The use of the **await** operator is not restricted to promises. **await** will convert any non-promise value into a promise value. It does it by wrapping the value into `Promise.resolve`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/988bc5f769a4ee3215ca0756f51b49aa?postId=f54e5a079fc1" data-media-id="988bc5f769a4ee3215ca0756f51b49aa" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F3806676%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





**await** can be used with any object that has a `.then()` method. This object is also known as a _thenable_.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ee91ec63810fee6f4c4e8504098f53df?postId=f54e5a079fc1" data-media-id="ee91ec63810fee6f4c4e8504098f53df" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F3806676%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





### Conclusion

We now have the new **async**/**await** syntax from JavaScript to write asynchronous code.

**async** is the keyword that specifies that a function is asynchronous.

**await** is the operator used to wait for a promise to be fulfilled.

The syntax **async**/**await** makes asynchronous code look like synchronous code. This makes the code easier to read and understand.

Remember that promises can generate unexpected errors. It’s important to wrap the code inside a **try**/**catch** block to handle them.

You can handle multiple promises in two ways: sequential or concurrent. Concurrency has the advantage because promises can run in parallel.

Finally, the operator **await** is not restricted to promises. We can use it with any object with a `.then()` method (i.e. a thenable).



![](https://cdn-images-1.medium.com/max/1600/1*g6-Vw7Ar5l1jNanUX_DGrA.gif)



### Thanks to 🍻

*   [Brian Terlson](https://twitter.com/bterlson) for his [Async Functions Proposition](https://github.com/tc39/ecmascript-asyncawait)
*   [Nicolás Bevacqua](https://twitter.com/nzgb) for this [PonyFoo — Understanding JavaScript’s async await](https://ponyfoo.com/articles/understanding-javascript-async-await)
*   [MDN — async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
*   To all [Adventure Time](https://www.youtube.com/watch?v=68dkSmglu4Y) fans











* * *







_Be sure to check out my articles on ES6_

[**Demystifying ES6 Iterables & Iterators**  
_Let’s demystify JavaScript new way to interact with data structures._medium.freecodecamp.org](https://medium.freecodecamp.org/demystifying-es6-iterables-iterators-4bdd0b084082 "https://medium.freecodecamp.org/demystifying-es6-iterables-iterators-4bdd0b084082")[](https://medium.freecodecamp.org/demystifying-es6-iterables-iterators-4bdd0b084082)

[**Let’s explore ES6 Generators**  
_Generators, aka, an implementation of iterables._medium.freecodecamp.org](https://medium.freecodecamp.org/lets-explore-es6-generators-5e58ed23b0f1 "https://medium.freecodecamp.org/lets-explore-es6-generators-5e58ed23b0f1")[](https://medium.freecodecamp.org/lets-explore-es6-generators-5e58ed23b0f1)








