---
author: Oluwaseun Omoyajowo
authorTwitter: https://twitter.com/oluwaseunOmoya
authorFacebook: https://facebook.com/1130630330354964
title: "Walking Inside the Node.js Event Loop"
subTitle: "NodeJS Event loop is perhaps one of the most misunderstood concepts in node. Unfortunately most articles online are not helping. Until a ..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*mLzCgaWN0FT9kLGtObzBeA.jpeg
url: https://medium.freecodecamp.org/walking-inside-nodejs-event-loop-85caeca391a9
id: walking-inside-nodejs-event-loop-85caeca391a9
date: 2017-08-18T17:06:37.692Z
tags: [
  "JavaScript",
  "Nodejs",
  "Technology",
  "Web Development",
  "Programming"
]
---
# Walking Inside the Node.js Event Loop







![](https://cdn-images-1.medium.com/max/2000/1*mLzCgaWN0FT9kLGtObzBeA.jpeg)







NodeJS Event loop is perhaps one of the most misunderstood concepts in node. Unfortunately most articles online are not helping. Until a few days ago I also had the wrong idea of how Event loop works thanks to Daniel Khan’s [article](https://medium.com/the-node-js-collection/what-you-should-know-to-really-understand-the-node-js-event-loop-and-its-metrics-c4907b19da4c). Daniel highlighted some of these misconceptions and also explained the realities. I will just point out the most popular below and you can go over Daniel’s [article](https://medium.com/the-node-js-collection/what-you-should-know-to-really-understand-the-node-js-event-loop-and-its-metrics-c4907b19da4c) after and read everything in full.

“_The Event loop runs in a separate thread in the user code. There is a main thread where the JavaScript code of the user (userland code) runs in and another one that runs the event loop. Every time an asynchronous operation takes place, the main thread will hand over the work to the event loop thread and once it is done, the event loop thread will ping the main thread to execute a callback._” — This is WRONG

This basically had been my own idea of Event loop, so I decided to do research and go deeper. In this article I will be explaining how everything happens with a general example.

To get started, Create a JavaScript file save it with whatever name you like, mine is ‘index.js’. Type or copy and paste the following codes inside the file.

<pre name="20a3" id="20a3" class="graf graf--pre graf-after--p">const fs = require('fs');</pre>

<pre name="7824" id="7824" class="graf graf--pre graf-after--pre">const setTimeOutlogger = ()=>{  
    console.log('setTimeout logger');  
}  
const setImmediateLogger = ()=>{  
    console.log('setImmediate logger');  
}</pre>

<pre name="6d63" id="6d63" class="graf graf--pre graf-after--pre">//For timeout   
setTimeout(setTimeOutlogger, 1000);</pre>

<pre name="5691" id="5691" class="graf graf--pre graf-after--pre">//File I/O operation  
fs.readFile('test.txt', 'utf-8',(data)=>{  
    console.log('Reading data 1');  
});  
fs.readFile('test.txt', 'utf-8',(data)=>{  
    console.log('Reading data 2');  
});  
fs.readFile('test.txt', 'utf-8',(data)=>{  
    console.log('Reading data 3');  
});  
fs.readFile('test.txt', 'utf-8',(data)=>{  
    console.log('Reading data 4');  
});  
fs.readFile('test.txt', 'utf-8',(data)=>{  
    console.log('Reading data 5');  
});</pre>

<pre name="c25c" id="c25c" class="graf graf--pre graf-after--pre">//For setImmediate  
setImmediate(setImmediateLogger);  
setImmediate(setImmediateLogger);  
setImmediate(setImmediateLogger);</pre>

Create a text file, ‘.txt’ in the same directory and save it with whatever name you like. Mine is ‘test.txt’. Inside this file type anything you like.

Before you run the JavaScript file, if you are able to guess the order of the console output then *thumbs up for you*. My own output:

<pre name="e006" id="e006" class="graf graf--pre graf-after--p">setImmediate logger  
setImmediate logger  
setImmediate logger  
Reading data 1  
Reading data 2  
Reading data 3  
Reading data 4  
Reading data 5  
setTimeout logger</pre>

It is possible for yours to be different, depending on the size of file you are reading, and the content in the ‘.txt’ file you created.

So what happened in the Event loop when you ran the code?

When Node.js starts, it initializes the Event loop, processes the provided input script which may make async API calls, then begins processing the Event loop. There is only one thread and that is the thread Event loop runs on. Event loop works in a cyclical order, with different phases. The order of operation of Event loop is shown below.



![](https://cdn-images-1.medium.com/max/1600/1*4tfBo0qxgakrcrXrOqNz6Q.png)



There are six phases in the Event loop but one works internally. Below is an overview of each phase from the Node.js [doc](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/).

*   timers: this phase executes callbacks scheduled by `setTimeout()` and `setInterval()`.
*   I/O callbacks: executes almost all callbacks with the exception of close callbacks, the ones scheduled by timers, and `setImmediate()`.
*   idle, prepare: only used internally.
*   poll: retrieve new I/O events; node will block here when appropriate.
*   check: `setImmediate()` callbacks are invoked here.close callbacks: such as `socket.on(‘close’)`.

### Timers

From our example, we `setTimeout` to 1s before invoking `timeOutLogger`function. This is the first phase (not exactly the first but from our example it is) of the event loop. The timer sets the threshold at which the callback will be executed.

It is important to note that each phase has a first in, first out (FIFO) queue of callbacks to be executed.

### I/O callbacks

This phase executes system error callbacks such as Transmission Control Protocol (TCP) socket connection error `ECONNREFUSED.` While this phase is called I/O callback, understand that normal I/O operation callbacks are executed in the poll phase. I will dive into this next. In our example no callback was queued here.

### Poll

This phase is where most of the work is done. From the Node.js doc, the poll phase basically does two things:

*   Executing scripts for timers whose threshold has elapsed
*   Processing events in the poll queue

Following our example in this phase, there is currently an empty queue since `fs.readFile` has not completed. While waiting, the timer `**1s**` threshold set earlier hasn’t elapsed. The event loop checks for callbacks queued by `setImmediate()` in the check phase. There are three callbacks from our example queued by `setImmediate()`. The event loop enters the check phase.

### Check

In the check phase, the event loop executes all callbacks in the queue, hence the console output order in our example.

After executing all callbacks in the check queue and no timer threshold has been reached. But there are queued callbacks in the poll phase already from fs.readFile**.** Event loop executes all callbacks (event loops blocks) until maximum or the queue is empty again. Here is the thing, while executing the callbacks it is possible for timer threshold to elapse. And with new timer callback ready to be executed, the timer will have to wait for poll callbacks to execute, causing extra delays. This is one of the reasons why it is advisable not to do so many things inside your callbacks. After executing the poll queue callbacks, event loop immediately wraps back to the timer to execute the callback.

**Note:** To prevent the poll phase from starving the event loop, [libuv](http://libuv.org/) also has a hard maximum (system dependent) before it stops polling for more events.

### Conclusion

While there are still many things going on behind the scene inside event loops, I hope have been able to give you an overview of inside the Node.js event loop. If you have any question or like to make correction kindly write it in the response. I will answer as soon as I can or update the article.

Thanks for reading. I’m Oluwaseun Omoyajowo, Freelance full-stack web developer. Get in touch! [Twitter](https://twitter.com/flickzcode) [LinkedIn](https://www.linkedin.com/in/oluwaseun-omoyajowo-641358110/?lipi=urn%3Ali%3Apage%3Ad_flagship3_notifications%3BESCtLB7XS8aBHaL2eaiW0g%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_notifications-nav.settings_view_profile) [Github](https://github.com/flickz) [Facebook](https://facebook.com/sheaflickz)








