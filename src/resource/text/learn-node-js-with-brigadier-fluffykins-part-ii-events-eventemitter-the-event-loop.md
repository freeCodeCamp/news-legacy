---
author: Mariya Diminsky
authorTwitter: none
authorFacebook: none
title: "Learn Node.js with Brigadier Fluffykins Part II: Events, EventEmitter and the Event Loop"
subTitle: "Welcome to Part II of Learn Node.js With Brigadier Fluffykins, a series created to help you easily understand Node.js ❤..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*4E7_DswXy8rFF2Dzrq1H3A.jpeg
url: https://medium.freecodecamp.org/learn-node-js-with-brigadier-fluffykins-part-ii-events-eventemitter-the-event-loop-6d4c139694fb
id: learn-node-js-with-brigadier-fluffykins-part-ii-events-eventemitter-the-event-loop-6d4c139694fb
date: 2016-07-20T16:32:38.089Z
tags: [
	"JavaScript",
	"Nodejs",
	"Web Development",
	"Programming",
	"Learning To Code"
]
---
# Learn Node.js with Brigadier Fluffykins Part II: Events, EventEmitter and the Event Loop











![](https://cdn-images-1.medium.com/max/2000/1*4E7_DswXy8rFF2Dzrq1H3A.jpeg)












Welcome to Part II of **Learn Node.js With Brigadier Fluffykins**, a series created to help you easily understand Node.js ❤

In [Part I](https://medium.freecodecamp.com/learn-node-js-with-brigadier-fluffykins-i-basics-async-sync-create-your-first-server-b9e54a45e108#.116vkn9sw) Brigadier Fluffykins and I introduced Node.js, what you can build with it, async/sync concepts. I walked you through install, and together we created your first server.

It was glorious:














Today’s lesson will cover:

*   Why Node.js is an event driven language, and how this is important for asynchronous behavior
*   How events in the DOM are similar to events in Node.js
*   How the Event Loop processes requests
*   Creating custom events using the _EventEmitter_

#### Event Driven Programming is Awesome

Since Node.js is single-threaded, in order for it to create concurrency and not be painfully slow — as the traditional client server model explained in [Part I](https://medium.com/free-code-camp/learn-node-js-with-brigadier-fluffykins-i-basics-async-sync-create-your-first-server-b9e54a45e108#.6jgtvz314) — it uses events to listen for requests.

This is different from say, Apache, a web server that uses multi-threaded HTTP. For every request Apache receives, it creates a new thread for handling it. This means that yes, while you can have more than one process running at the same time via threads, the downfall is that results from all the requests have to come back before serving the page.

On the other hand, Node.j’s event driven architecture allows for multiple requests to be processed on a single thread. For example, once a _request_ _event_ is triggered, callbacks and promises process these requests asynchronously.

This means if you have multiple requests coming in and request A is still doing its thing, request B will start fetching the results — the outcome being either request B responds to the client before request A or at the same time as Request A.

Since everything is processed faster, the client has a better user experience. Lets discuss this in more detail further in the lesson.

There are some downfalls to Node.js’s concurrency model but we’ll be covering this in the next few lessons.

#### Events in the DOM are like Events in Node.js

Think of events this way: just as events interact with DOM objects, many objects in Node.js emit events.

If you’ve done any type of DOM manipulation with JavaScript, then you understand that the DOM can have event listeners such as _click_, _dblclick_, _submit, keydown, keyup_ and so on. Once triggered, the event is handled with a callback.

For example, when you set up a _click_ event, you can have a callback say: “when something is clicked, turn the third div blue!”

Here’s a coded example.

In your _index.html_ file:





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/511fec1d8b7c56293bc3c34184459227?postId=6d4c139694fb" data-media-id="511fec1d8b7c56293bc3c34184459227" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








In your _main.js file_:





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/2933f15dff3e9fc526e663baecd22831?postId=6d4c139694fb" data-media-id="2933f15dff3e9fc526e663baecd22831" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








And, if you want to test this out in your own browser here’s some CSS. This should go in _style.css_:





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/3d2d1070643acf6dc645db069715f59c?postId=6d4c139694fb" data-media-id="3d2d1070643acf6dc645db069715f59c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








When the client clicks the button, our _click_ event is triggered, and our callback does something to the DOM. In this case, it turns the third div blue and changes the text inside the button.

Like the _request_ _event_ in Node.js, when the client clicks a button, it’s as if they are sending a request into the main.js file where the _click_ event is listening — just as the _request event_ would listen in for incoming requests.

Then, just like the _response_ _event_ would respond to the client with some information inside the callback, the callback of the DOM’s _click_ event responds by changing the background color of the third div. It also changes the text in the button inside the html file.

The main difference between events in Node.js and events in the DOM is that DOM events stay primarily attached to the DOM object — on the client-side — while events for Node.js are focused more on the relationship between the client and the server.

Node.js emits events from objects — such as the web server object(_http.createServer)._ Lucky for you, you’ve actually already used events back in [Part I](https://medium.com/free-code-camp/learn-node-js-with-brigadier-fluffykins-i-basics-async-sync-create-your-first-server-b9e54a45e108#.6jgtvz314) in STEP #1.5!

During this step, you saved the web server object in it’s own variable and listened for incoming requests via the _request event_ attached to the _http.createServer_ object in the first parameter.

Underneath this object is the _EventEmitter_ _constructor_, which we’ll learn about very soon. For now, review the code we set up in [Part I](https://medium.freecodecamp.com/learn-node-js-with-brigadier-fluffykins-i-basics-async-sync-create-your-first-server-b9e54a45e108#.bvd38wc9b) and see if you have a better grasp of what’s going after our event explanation.

Here it is again for reference:





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/d9bf3cb379e76ce8cfaccab0fff008fc?postId=6d4c139694fb" data-media-id="d9bf3cb379e76ce8cfaccab0fff008fc" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








#### The Event Loop

Ok so you have a basic understanding of events and how they relate with Node.js but how does Node.js actually work under the hood?

The first thing Node.js does when it reads your code is subscribe events you used, such as _request_, _listen_, _connection_ or _close._ Once it’s done, it goes into the _Event Loop_ and listens for these events continuously inside a single thread.

For example, in the server we previously created above, it’s only listening for the _request event_ and thus the Event Loop thinks:

“Have any requests come in?”

“How about now?”

“…. “

“Now?”

“Now right?”












Brigadier Fluffykins likes to pretend he’s Jules Winfield.



No worries, Node.js’s single threaded Event Loop is not Jules Winfield. It’s actually just patiently waiting and listening for events that it previously subscribed to in the background.

If a request does arrive, it triggers the _request_ _event_ and runs the callback we wrote — in our case, the mini html inside the _end_ method in our previous server example. Also be aware that events can trigger other events.

But what if multiple requests come at the same time? Like the _request_ and _close_ event? The event loop will process these events one at time. So first the _request_ _event_ will be processed and then the _close_ _event_. While they are being handled they don’t block more events from coming in. If they did, our code would run twice as long.

#### Lets dive further into what this all means

So when we say JavaScript is single-threaded we are saying it has only one [_Call Stack_ ](https://en.wikipedia.org/wiki/Call_stack)— something that keeps track of functions that will execute in your code. Each golden bar represents a function inside of the _Call Stack_. Last function added on top is the first function that executes and pops off.












Call Stack — Last in, first out.



If JavaScript was a synchronous language, and we had two requests coming in what do you think would happen? We would have to wait for the result of the first request to come back before we could process the second request. This means that the first request would stay in the _Call Stack_, blocking any other requests from coming in, until it’s necessary results returned.

Once the results are retrieved, the first request “pops off,” and only then would the second request go into the _Call Stack_ and get executed:












If JavaScript was synchronous.



JavaScript achieves its concurrency model by storing asynchronous functions somewhere else while other tasks that are much faster run first. Then, when our asynchronous function receives what it needs, it eventually executes. At least that’s the gist of it.

Lets dive deeper now that we know about the _Call Stack_.

When an asynchronous function with a callback or event comes into the _Call Stack_, it automatically moves into the _Web API_. The _Web API_ is where events subscribed to the _Event Loop_ are stored. They await orders from the _Event Loop_, which listens if any of the events are called.

Once someone triggers an event, for example, the _request event_, the callback of this event gets sent into an _event queue_. This queue is also called the _callback queue_ or just _task queue._

The reason we have multiple names for the queue is because the same process that happens for events happens for asynchronous functions — or methods — anything that has a callback, including DOM events and event functions not part of native JavaScript like _ajax_ and _setTimeout_(Yep, they’re part of the _Web API_, not JavaScript).

Now the last thing that happens is the callback of the _request event_ will wait inside of this _event/callback/task queue_ for the _Call Stack_ to empty. This has something to do with the way JavaScript processes memory — so basically just know once we get to this stage we have to wait until all the functions still running empty out before we can add the callback into the _Call Stack_ and process it.

Here’s a visual demonstration of everything we just explained:

1.  JavaScript scans your code and stacks functions, events, and everything else on the _Call Stack_.
2.  The golden bars below are regular, non-asynchronous, functions. The last pink and green bars are two _request events_. These events are subscribed to _Event Loop_ (played by Brigadier Fluffykins) and wait inside the _Web API_ to be called.
3.  As the events wait, other functions are executed on the _Call Stack_.
4.  Once an event is triggered, the _Event Loop_ hears it and that particular event’s callback moves into the _queue._ Although_,_ since this is the _request event_, it would first wait for any results it needs. And only then does it send the callback over into the queue.
5.  While there are still functions running and being executed on the _Call Stack_, the events have to wait for the _Call Stack_ to empty in order for them to run. Brigadier Fluffykins lets them know if it’s A-OK to move into the _Call Stack_ or not depending on if it’s empty or not.












**Left:** Call Stack. **Top Right:** Web API. **Bottom Right:** Queue. **Brigadier Fluffykins is the Event Loop.**



### Lets Create Custom Events!

Event emitters are used extensively in Node.js libraries, so lets learn how to create our own and better understand how they work!

All objects that emit events are instances of the _EventEmitter_ _class_ and all events inherit from the _EventEmitter constructor_. We’ll be creating two events for the _bunnyError_ event emitter — _bunnyWarning_ and _bunnyNeed_.

Copy and paste this into a file called _bunnyEmitter.js_:





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/efdc435ab411f76d66b2ccdaea075e52?postId=6d4c139694fb" data-media-id="efdc435ab411f76d66b2ccdaea075e52" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








Alright so what’s happening here?

First we require in Node.js’s _EventEmitter object_ and then we create an instance of a new EventEmitter object that we will build custom events for. We call this instance _bunnyError_.

Then we create an event listener for our first event, _bunnyWarning_, with the _on_ method, which listens for the event. We handle this event when it’s used by triggering a callback that simply prints “BUNNY WARNING: warning.”

Notice I used _Template Literals_ — an ES6 feature. You can learn more them [here](https://medium.freecodecamp.com/learn-es6-the-dope-way-part-iii-template-literals-spread-operators-generators-592765337294#.7udhwbjrl). It’s the same as saying _console.log(“BUNNY WARNING:” + message)_.

Lastly we use the _emit_ method to trigger or call the event. Once the event is called the callback should run. We can do this as many times as we want.

Assuming the file is on your Desktop, type _node bunnyEmitter.js_ in your shell:














If you only want your event emitter to trigger one time, the _EventEmitter object_ has a method called _.once_ which you can use instead of _.on:_

<pre name="01fb" id="01fb" class="graf graf--pre graf-after--p">yourEventEmitter.once(yourEvent, yourCallback)</pre>

With this, no matter how many times you emit _yourEvent_, it will only work one time.

It’s good practice to limit the number of event listeners you have. In fact if you have more than ten, you will get a warning:

<pre name="6106" id="6106" class="graf graf--pre graf-after--p">"(node) warning: possible EventEmitter memory leak detected. 11 listeners added. Use emitter.setMaxListeners() to increase limit."</pre>

So far you’ve seen terms such as _events_, _event listener_, and _event handler_ being used. Lets make the main differences clear before we move on:

The _event listener_ is the _event_ you create to listen for any incoming events. The _event handler_ is the callback that will be triggered once the _event listener_ hears the _event_.

In our custom event emitter example, the _event listeners_ were _bunnyWarning_ and _bunnyNeeds_ and the _event handlers_ were the callbacks of each event.

#### Check out these extra resources

*   [Node.js docs on events](https://nodejs.org/api/events.html)
*   [List of events for the DOM](https://developer.mozilla.org/en-US/docs/Web/Events)
*   You learned to create an instance of an event emitter but what if you wanted to extend it and use it in different files? [Check this tutorial out](http://www.hacksparrow.com/node-js-eventemitter-tutorial.html)
*   [Learn more the methods on the EventEmitter object](http://www.tutorialspoint.com/nodejs/nodejs_event_emitter.htm)
*   [Want to learn more about the Event Loop?](http://www.tutorialspoint.com/nodejs/nodejs_event_loop.htm)

Congrats! You’ve made it through **Learn Node.js With Brigadier Fluffykins** Part II! In today’s lesson you learned that Node.js is an event driven language and why this is useful for asynchronous behavior. You also learned how these events are processed via the Event Loop.

We also took a dive into learning about the similarities between DOM events and events in Node.js to help you ease into this new realm a bit more.

Lastly, we created out first EventEmitter and two awesome events!

Lets learn more about these topics as well as others we’ve only scratched in the next few lessons. Thank you for reading and stay tuned.

Keep your wisdom up to date by clicking the ❤ below and following, as more **Learn Node.js With Brigadier Fluffykins** is coming soon to Medium!

[**Part I: Sync, Async, and Creating Your First Server!**](https://medium.freecodecamp.com/learn-node-js-with-brigadier-fluffykins-i-basics-async-sync-create-your-first-server-b9e54a45e108#.bvd38wc9b)

[**Part II: Events, EventEmitter & Event Loop**](https://medium.com/@__Masha__/learn-node-js-with-brigadier-fluffykins-part-ii-events-eventemitter-the-event-loop-6d4c139694fb#.957cacwgv)

[**Part III: Request Object, Configure Routes, Serve Files**](https://medium.com/@__Masha__/learn-node-js-with-brigadier-fluffykins-part-iii-request-object-configure-routes-serve-files-7666f783dc10#.g5j0faw3x)








