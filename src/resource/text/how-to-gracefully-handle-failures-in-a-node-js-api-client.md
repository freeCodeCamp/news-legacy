---
author: Roger Jin
authorTwitter: none
authorFacebook: none
title: "How to gracefully handle failures in a Node.js API client"
subTitle: "There are two facts of life: you breathe air, and errors will occur in your programs...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*qMJClMkWWIHzXfOJiLf8pw.jpeg
url: https://medium.freecodecamp.org/how-to-gracefully-handle-failures-in-a-node-js-api-client-605673cb72ab
id: how-to-gracefully-handle-failures-in-a-node-js-api-client-605673cb72ab
date: 2017-10-10T21:36:56.271Z
tags: [
  "JavaScript",
  "Web Development",
  "Nodejs",
  "Tech",
  "Startup"
]
---
# How to gracefully handle failures in a Node.js API client







![](https://cdn-images-1.medium.com/max/2000/1*qMJClMkWWIHzXfOJiLf8pw.jpeg)







There are two facts of life: you breathe air, and errors will occur in your programs.

We’ve all experienced trouble connecting to Wi-Fi, or had a phone call drop on us abruptly. Intermittent failures across internet works are statistically unusual on the whole, but still bound to occur. This means that for programmers, anything that waits for a response over a network is prone to error.

I’m an architect for a “content management system as a service” called [ButterCMS](https://buttercms.com/), so I’ll explore reliability using this tool. It consists of:

*   a hosted dashboard for content editors
*   a JSON API for retrieving this content
*   SDK’s for integrating ButterCMS into native code.

The database, logic, and administrative dashboard is a service through a web API. The question is “What can you do with the inevitable errors in your Node.js client?” Errors over a client API are bound to happen–it is what you do about it that matters most.

In this article I’ll walk through how I added better handling of failures to the ButterCMS JavaScript [API client](https://github.com/buttercms/buttercms-js). By the end of this article, you will hopefully have a better understanding of how to deal with failure in your own API clients.

### Basic Exception Handling

To begin, let’s look at an example API request for retrieving a blog post from the Butter API:

    butter.post.retrieve('example-post')  .then(function onSuccess(resp) {    console.log(resp.data);  });

This will work except it leaves you blind to any exceptions the client can throw at you. Note the client API uses [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) to get blog data. Keep this in mind as JavaScript takes on a new dimension through promises.

To handle exceptions using a promise, slap a `catch()` at the end.

For example:

    butter.post.retrieve('example-post')  .catch(function onError(error) {    console.log(error);  });

Done! A JavaScript promise handles all errors for you and executes the `onError()` callback. The `error` object contains very useful information about what went wrong.

If you look under the hood of the ButterCMS client API you’ll see it uses [axios](https://github.com/mzabriskie/axios). Axios is a promise based HTTP client that works in the browser and Node.js.

Examining the Axios error object you get back through a promise reveals the following error object:

    {data:Object, status:401, statusText:'Unauthorized', headers:Object, config:Object}

The HTTP status code tells me what the error was.

### Better Exception Handling

The type of errors you get will depend on the API behavior. For example, the ButterCMS API docoumentation lists all [possible responses](https://buttercms.com/docs/api/?javascript#errors). You can get a 400, 401, or a 404 depending on the request.

One way to deal with these exceptions is to handle each status in a different way. For example, you could handle errors:

    butter.post.retrieve('example-post')  .catch(function onError(error) {    if (error.status === 400) {      console.log('Bad request, often due to missing a required parameter.');    } else if (error.status === 401) {      console.log('No valid API key provided.');    } else if (error.status === 404) {      console.log('The requested resource doesn\'t exist.');    }  });

By using the HTTP status as the source of truth, you can interpret the reason for the error however you want.

Other companies, like the [Stripe API client](https://github.com/stripe/stripe-node), solve the problem with an [error type](https://github.com/stripe/stripe-node/blob/master/lib/Error.js) on the response. The error `typestatus` code tells you what type of error is coming back in the response.

With all this, one final question remains. “What happens when the network request times out?”

For a client API, any request over a network is very risky. Network connectivity can be a luxury one can’t afford at times.

Let’s examine what error exception you get when it times out. The ButterCMS client API has a default value of 3000 ms or 3 seconds.

Take a look at this error object when it times out from the exception handler:

    {code:'ECONNABORTED', message:String, stack:String, timeout:3000}

Like any good error object, it has plenty of good details about the exception. Note this error object is different from the one we saw earlier. One distinct difference is the `timeout` property. This can be useful in dealing with this kind of exception in a unique way.

The question is, “Is there a graceful way to handle these kinds of exceptions?”

### Handling Network Errors

One idea is to auto-retry the request after it fails. Anything that waits for a network response can fail. The failure occurs because of circumstances outside your direct control. As developers, it is nice to be in control but life comes with many exceptions.

[Polly-js](https://github.com/mauricedb/polly-js) can attempt to retry the action once it detects an error. The polly-js library can handle exceptions through a JavaScript promise. This promise catches the exception in case all the retries fail and executes the `catch()`. But, we decided not to use polly-js because it is an extra dependency that adds bloat to the client API.

One design principle at play here is: “A little copy-paste is better than an extra dependency.” The bulk of the retry logic is minimal and has exactly what we need to solve the problem.

The crux of auto retries returns a JavaScript promise:

    function executeForPromiseWithDelay(config, cb) {  return new Promise(function (resolve, reject) {    function execute() {      var original = cb();

    original.then(function (e) {        resolve(e);      }, function (e) {        var delay = config.delays.shift();

    if (delay && config.handleFn(e)) {          setTimeout(execute, delay);        } else {          reject(e);        }      });    }

    execute();  });}

The promise has the `resolve` and `reject` callbacks encapsulated for automatic retries. The `config.handleFn()` callback figures out what condition will cause it to retry. The `config.delays.shift()` will remove the first item from the list and delay the next attempt.

The good news is it can meet a specific condition before there are any retries. The library has a `handle()` function to set the callback that evaluates the condition. You tell it how many retries, give the condition, and final exception handling.

The ButterCMS client API has `retry` capabilities out of the box. To enable auto retries you need this:

    butter.post.retrieve('example-post')  .handle(function onError(error) {    // Only retry on time out    return error.timeout;  })  .executeWithAutoRetry(3)  .then(function onSuccess(resp) {    console.log(resp.data);  })  .catch(function onTimeoutError(error) {    if (error.timeout) {      console.log('The network request has timed out.');    }  });

The `executeWithAutoRetry()` staggers subsequent requests and retries if there is a failure. For example, the first attempt will fail then wait 100ms before the second attempt. The second attempt, if it fails, will wait 200ms before the third. The third attempt will wait 400ms before the fourth and final attempt.

With the ButterCMS API client, you now have a nice way of handling promise based exceptions. All you need to do is configure it to your liking.

### Conclusion

When it comes to errors, you can either bury your head in the sand or handle the unexpected with grace and elegance. Any client API that waits for a response through a connection is prone to exceptions. The choice is yours on what to do when erratic behavior happens.

Consider an exception as unpredictable behavior. Except, because it is unpredictable does not mean you can’t prepare in advance. When handling exceptions, focus on anticipating what went wrong, not application logic.

Network connectivity is one of the worst culprits of failures. Be sure to prepare in advance, to give requests a second change in case of a failed connection.

This article was originally published on our [blog](https://buttercms.com/blog/how-to-gracefully-handle-failures-in-a-nodejs-api-client)_._

For more content like this, follow ButterCMS on [Twitter](https://twitter.com/buttercms/).








