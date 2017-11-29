---
author: Paul Breslin
authorTwitter: none
authorFacebook: none
title: "How to write beautiful Node.js APIs using async/await and the Firebase Database"
subTitle: "This tutorial will cover the typical use cases you’ll come across when writing RESTful API endpoints to read and write to a Firebase Data..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*6wZYofh0czXf3SO8Ubw2xg.png
url: https://medium.freecodecamp.org/how-to-write-beautiful-node-js-apis-using-async-await-and-the-firebase-database-befdf3a5ffee
id: how-to-write-beautiful-node-js-apis-using-async-await-and-the-firebase-database-befdf3a5ffee
date: 2017-07-05T03:29:47.768Z
tags: [
  "JavaScript",
  "Firebase",
  "Nodejs",
  "Web Development",
  "Programming"
]
---
# How to write beautiful Node.js APIs using async/await and the Firebase Database



![](https://cdn-images-1.medium.com/max/1600/1*6wZYofh0czXf3SO8Ubw2xg.png)



This tutorial will cover the typical use cases you’ll come across when writing RESTful API endpoints to read and write to a Firebase Database instance.

There will be a focus on **beautiful** asynchronous code, which makes use of the `async/await` feature in Node.js (available in v7.6 and above).

(Feel free to smile sweetly as you wave goodbye to callback hell 👋)

### Prerequisites

I’ll assume that you already have a Node.js application set up with the Firebase Admin SDK. If not, then check out the [official setup guide](https://firebase.google.com/docs/admin/setup).

### Writing data

First off, let’s create an example `POST` endpoint which will save words to our Firebase Database instance:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c4f1beeacf8045dc4cf3087c8b6dca96?postId=befdf3a5ffee" data-media-id="c4f1beeacf8045dc4cf3087c8b6dca96" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F6935585%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





This is a very basic endpoint which takes a `userId` and a `word` value, then saves the given word to a `words` collection. Simple enough.

But something’s wrong. We’re missing error handling! In the example above, we return a `201` status code (meaning the resource was created), even if the word wasn’t properly saved to our Firebase Database instance.

So, let’s add some error handling:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/82420bc1e7231f5a52fbebf12dd0ccce?postId=befdf3a5ffee" data-media-id="82420bc1e7231f5a52fbebf12dd0ccce" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F6935585%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Now that the endpoint returns accurate status codes, the client can display a relevant message to the user. For example, “Word saved successfully.” Or “Unable to save word, click here to try again.”

> Note: if some of the ES2015+ syntax looks unfamiliar to you, check out the Babel [ES2015 guide](https://babeljs.io/learn-es2015/).

### Reading data

OK, now that we’ve written some data to our Firebase Database, let’s try reading from it.

First, let’s see what a `GET` endpoint looks like using the original promise-based method:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a0646a20311e4ec342f3d5f24ef0a343?postId=befdf3a5ffee" data-media-id="a0646a20311e4ec342f3d5f24ef0a343" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F6935585%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



(Error handling omitted for code brevity)



Again, simple enough. Now let’s compare it with an `async/await` version of the same code:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/f1c7ee01ef88c9aee739a5e29b967228?postId=befdf3a5ffee" data-media-id="f1c7ee01ef88c9aee739a5e29b967228" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F6935585%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



(Error handling omitted for code brevity)



Note the `async` keyword added before the function parameters `(req, res)` and the `await` keyword which now precedes the `db.ref()` statement.

The `db.ref()` method returns a promise, which means we can use the `await` keyword to “pause” execution of the script. (The `await` keyword can be used with any promise).

The final `res.send()` method will **only run** **after** the `db.ref()` promise is fulfilled.

That’s all well and good, but the true beauty of `async/await` becomes apparent when you need to chain multiple asynchronous requests.

Let’s say you had to run a number of asynchronous functions sequentially:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ae4f21304b8d63c773b5938f965e789c?postId=befdf3a5ffee" data-media-id="ae4f21304b8d63c773b5938f965e789c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F6935585%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Not pretty. This is also known as the “pyramid of doom” (and we haven’t even added error handlers yet).

Now take a look at the above snippet rewritten to use `async/await`:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/5dc2379110177401134846882d17cfa8?postId=befdf3a5ffee" data-media-id="5dc2379110177401134846882d17cfa8" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F6935585%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





No more pyramid of doom! What’s more, all of the `await` statements can be wrapped in a single `try/catch` block to handle any errors:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2942d2ef5834115f295d5d3b8bf19d5c?postId=befdf3a5ffee" data-media-id="2942d2ef5834115f295d5d3b8bf19d5c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F6935585%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



Truly beautiful.



### Parallel async/await requests

What about cases where you need to fetch multiple records from your Firebase Database at the same time?

Easy. Just use the `Promise.all()` method to run Firebase Database requests in parallel:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/084eb4870d4c43577d4bfae2abe722c4?postId=befdf3a5ffee" data-media-id="084eb4870d4c43577d4bfae2abe722c4" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F6935585%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





### One more thing

When creating an endpoint to return data retrieved from a Firebase Database instance, be careful not to simply return the entire `snapshot.val()`. This can cause an issue with JSON parsing on the client.

For example, say your client has the following code:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2d3f7aaeb2eec5f8dabe21b3a0952f4c?postId=befdf3a5ffee" data-media-id="2d3f7aaeb2eec5f8dabe21b3a0952f4c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F6935585%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



Obviously, your client code would be using async/await ;)



The `snapshot.val()` returned by Firebase can either be a JSON object, or `null` if no record exists. If `null` is returned, the `response.json()` in the above snippet will throw an error, as it’s attempting to parse a non-object type.

To protect yourself from this, you can use `Object.assign()` to always return an object to the client:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c7c96fc1d74b9676ed2cc715acb9ac03?postId=befdf3a5ffee" data-media-id="c7c96fc1d74b9676ed2cc715acb9ac03" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F6935585%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Thanks for reading!











* * *







_Interested in seeing a real-world project built on top of Firebase and Node.js? Check out_ [_Vocabify_](https://vocabifyapp.com)_, the vocabulary builder that helps you remember the words you come across._








