---
author: Mariya Diminsky
authorTwitter: none
authorFacebook: none
title: "Learn Node.js with Brigadier Fluffykins Part III: Request Object, Configure Routes, Serve Files"
subTitle: "Welcome to Part III of Learn Node.js With Brigadier Fluffykins, a series created to help you easily understand Node.js ❤..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*4E7_DswXy8rFF2Dzrq1H3A.jpeg
url: https://medium.freecodecamp.org/learn-node-js-with-brigadier-fluffykins-part-iii-request-object-configure-routes-serve-files-7666f783dc10
id: learn-node-js-with-brigadier-fluffykins-part-iii-request-object-configure-routes-serve-files-7666f783dc10
date: 2016-07-29T03:05:48.690Z
tags: [
  "Nodejs",
  "JavaScript",
  "Web Development",
  "Programming",
  "Software Development"
]
---
# Learn Node.js with Brigadier Fluffykins Part III: Request Object, Configure Routes, Serve Files







![](https://cdn-images-1.medium.com/max/2000/1*4E7_DswXy8rFF2Dzrq1H3A.jpeg)







Welcome to Part III of **Learn Node.js With Brigadier Fluffykins**, a series created to help you easily understand Node.js ❤

In [Part II](https://medium.com/@__Masha__/learn-node-js-with-brigadier-fluffykins-part-ii-events-eventemitter-the-event-loop-6d4c139694fb#.gmus13l0y) Brigadier Fluffykins and I walked you through how Node.js is an event driven language. You learned how this is important for asynchronous behavior, and how these events are processed via the _Event Loop_. You also learned how DOM events and events in Node.js are similar. Lastly, we created our first _EventEmitter_.

Let’s move on to the next lesson! OH YEAH!!



![](https://cdn-images-1.medium.com/max/1600/1*FdYBKFCqeQDsc1IHEtAGhw.gif)



Today’s we’ll learn about:

*   Types of request methods
*   The _Request Object_
*   Configuring multiple routes
*   Difference between _setHeader_ and _writeHead_
*   How to serve files (HTML, CSS, etc.)

#### Types of Request Methods

The four main HTTP requests:

*   GET — Used when the client is requesting data. For example, when they are asking to view your homepage, they will need the HTML, CSS, and JavaScript documents. These are all GET requests.
*   POST — Used when the client is submitting data to the server or to a database. For example, submitting a form.
*   PUT — Similar to POST, but not used much. Use this when you are changing something at a specific URL or updating a resource in the server. The main difference is that PUT is [idempotent](http://stackoverflow.com/questions/630453/put-vs-post-in-rest).
*   DELETE — Deletes the specified resource.

GET and POST requests are used most often. PUT and DELETE aren’t used as much. Then there are requests such as HEAD, OPTIONS, and CONNECT. These are used even less often, but good to know just in case.

Since GET and POST are the most common, we’ll be reviewing these. The GET request will be discussed today, while we’ll discuss the POST method in the next lesson, as it’s going to make more sense then.

#### The Request Object

When we set up our server, we want the _request_ _event_ to listen for any incoming requests from the client. It’s important to remember that this is not the same as the _request object_ in a callback. Also, the request and response objects _look like_ parameters, and you can even change their names — like I did in the example below from ‘request’ to ‘req’ and ‘response’ to ‘res’ — but they are still objects. Keep that in mind.



![](https://cdn-images-1.medium.com/max/1600/1*a1j4lLcOjTlgqVAj3ygdXw.png)



The _request object_ is huge with many different properties, functions, and methods. Let’s try printing the _request object_ in your terminal. Open up the _server.js_ in the [_nodestory2_](https://drive.google.com/open?id=0Byvu31DWppA7RVVHUEtRWkotbHM) folder. All the files you need for the rest of this lesson will be here.

Before continuing, Brigadier Fluffykins and I want you to know:

If you feel overwhelmed by the amount of code in the [zip](https://drive.google.com/open?id=0Byvu31DWppA7RVVHUEtRWkotbHM) folder, especially the _server.js_ file — I know I did when I first started learning Node.js — just take a breather and know that we’ve got your back. We’ll be walking you through each section, step by step. Take as much time as you need.

Perseverance is key to progress in programming, and in life. Also, constantly save your file and restart the server if you made any changes in the file. Good luck! :)

You can also just create your own file with the same name — _server.js_ and copy and paste this in:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/69ee0b76b0de633dfb61a43bab19b370?postId=7666f783dc10" data-media-id="69ee0b76b0de633dfb61a43bab19b370" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Kudos if you know what to do next.

Locate your _server.js_ file or the [_nodestory2_](https://drive.google.com/open?id=0Byvu31DWppA7RVVHUEtRWkotbHM) folder you downloaded. In the example below I went to my Desktop, then the _nodestory2_ folder then inside that folder was the _server.js_ file.

Type in _node server.js_ in the shell, go to _http://localhost:3000/_, and you should see the _request object_ in your shell:



![](https://cdn-images-1.medium.com/max/1600/1*LVsgnT7vovdl2G-Cn8RcUg.png)



The screenshot above is after I’ve scrolled all the way up to the beginning.

It’s ginormous right?

The _request object_ is an instance of the _IncomingMessage object_. You can read more about that [here](https://nodejs.org/api/http.html#http_class_http_incomingmessage) if you’re interested.

Throughout this series, we will discuss the more commonly-used properties of the _request object_, especially since you’ll probably only be using a handful of them in your projects.

The _url_ and _method_ properties are two that frequently work together. When we set up our server and have these two properties, we are saying “Hey server, if you see that the client is coming from _this URL_ and _they want information back_ (GET method), then trigger the callback”.

When you print the _url_ and _method_ properties of the _request object_ what do you get? Comment out STEP #2 and uncomment STEP #2.1\. Or copy and paste this into your _server.js_ file:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/0e63a1116d3f008e111664c7e081c629?postId=7666f783dc10" data-media-id="0e63a1116d3f008e111664c7e081c629" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Remember, as I mentioned in [Part I](https://medium.freecodecamp.com/learn-node-js-with-brigadier-fluffykins-i-basics-async-sync-create-your-first-server-b9e54a45e108#.bvd38wc9b), any time you make changes inside of a server file, you have to restart the server again for it to work properly. To stop the server manually go into your terminal and press _control + C_ for Mac (again, I believe it’s _killall node_ for Windows).

Now type _node server.js_ in the shell to start the server, then go to _http://localhost:3000/_, and you should see something like this in your shell:



![](https://cdn-images-1.medium.com/max/1600/1*pbM-TX_6zJsnviO4UfHzkQ.png)



The request URL printed ‘/’. This is the URL for where the client is coming from, in this case the homepage — also called the ‘root directory’. And the request method printed ‘GET’, meaning the client wanted to view or _get_ the necessary files for the page.

If you get a second GET request, it’s most likely for the favicon in your browser that’s automatically requested by [default](http://stackoverflow.com/questions/9746769/why-is-there-an-additional-favicon-ico-http-request).

The _headers_ method is also quite useful, as it gives us information about where the request is coming from. This including browsing info, cookies, and more.

Let’s try printing the headers and then accessing one. Be aware that it comes as an object of key value pairs. Uncomment STEP #2.2 and comment out STEP #2.1 or copy and paste this into your _server.js_ file:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/01f46c2975c2a7378bb54df886dcf3cb?postId=7666f783dc10" data-media-id="01f46c2975c2a7378bb54df886dcf3cb" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Restart the server. You should get an object of headers in your shell.

If you get two objects, again, probably that favicon, and thus a second header object was printed, just ignore it for now.

It’s important to note that if you are receiving headers that are the same name they will either be overwritten or presented as a string separated by commas, depending on the type of header it is.

If you really want the exact headers that exist — even if they have the same names (possibly because you need their different values) — you can use the _rawHeaders_ method. So you would enter r_eq.rawHeaders_ instead of _req.headers_.

Try it out! See what you get :)

#### Configuring Multiple Routes

This URL: _/_ means the home page. To access a different page, we create a new GET request with a different name after the forward slash.

Let’s review everything we’ve learned so far and create two GET requests — one if the client is requesting the homepage and another one if they are requesting the _/blueberries_ page. Why blueberries? It doesn’t actually matter. If you know the client is going to go to _www.yourhomepage.com/blueberries_ then you know that you have to create a request in your server for _/blueberries_ so when they type that URL path, they will see some content instead of an error message.

The truth is, Brigadier Fluffykins demonstrated his ninja skills to me and in payment, I had to choose that URL path:



![](https://cdn-images-1.medium.com/max/1600/1*ZvI7nw1ZJI912s6CQXqDjQ.jpeg)

Brigadier Fluffykins using his legendary ‘push-bite’ move on the poor neighborhood cat.



Otherwise, it wouldn’t actually matter. Let’s continue:

Comment out STEP #2.2 and uncomment STEP #2.3 or just copy and paste this into your _server.js_ file. Don’t forget to save after:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/183faa27dba925f665f2ea31a4118d54?postId=7666f783dc10" data-media-id="183faa27dba925f665f2ea31a4118d54" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Now restart the server and go to _http://localhost:3000/_, you should see this:



![](https://cdn-images-1.medium.com/max/1600/1*JuRtCjW0OPbKETCxJw35GQ.png)

Brigadier Fluffykin’s distant relative, Matilda.



Ok good, now let’s try out the other request we configured. Go to _http://localhost:3000/blueberries_. You should see this:



![](https://cdn-images-1.medium.com/max/1600/1*-tvN0KLeHT6myhGmJs7dGw.png)



Do you see what happened there? We can change _/blueberries_ to anything we want, as long as we configure what the client should see. So if you went to [_http://localhost:3000/something_](http://localhost:3000/something) or [_http://localhost:3000/somethingelse_,](http://localhost:3000/somethingelse,)itwouldn’t work unless we created responses for these requests in our server.

Let’s demonstrate this by changing one line in our code. Change this line:

<pre name="40b2" id="40b2" class="graf graf--pre graf-after--p">if (req.url === '/blueberries') {</pre>

To this:

<pre name="74bc" id="74bc" class="graf graf--pre graf-after--p">if (req.url === '/carrots') {</pre>

Save and restart your server. Now go to: _http://localhost:3000/blueberries_

See how it no longer works? Go to _http://localhost:3000/carrots_

It should work now because we have a response configured for the _/carrots_ path, while the path for _/blueberries_ no longer exists (unless we choose to create it).

#### The difference between setHeader and writeHead

The _setHeader_ method takes a name as its first parameter, and a value for its second. You can call this method multiple times in the same request, but make sure you don’t include invalid characters or you’ll receive an error — specifically, a _TypeError_.

Let’s try this out, change your home page request to this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a5f014e934ba09eed5a3698d043a19f7?postId=7666f783dc10" data-media-id="a5f014e934ba09eed5a3698d043a19f7" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Save and restart the server.

You should see the new headers on the homepage in your Network tab.

To access your Network tab, right click → inspect → choose the Network tab(in the same row as Console).

Or on a mac: Cmd + Option + J → Network tab.



![](https://cdn-images-1.medium.com/max/1600/1*8TgYfEaQaxiJ58Lh9tezhA.png)



It’s not particular useful to set random headers, but if you’re working with authentication or cookies in the browser, _setHeader_ is part of that process.

In our [last lesson](https://medium.freecodecamp.com/learn-node-js-with-brigadier-fluffykins-i-basics-async-sync-create-your-first-server-b9e54a45e108#.bvd38wc9b) we set the header via _writeHead_ method. There we set the status code. The difference between _setHeader_ and _writeHead_ is that _setHeader_ sets one header at a time, and you can use as many _setHeader_ methods as you need before you send the response.

On the other hand, _writeHead_ can set the status code (first parameter), and multiple headers inside of an object (the second parameter) at the same time.

Setting the status code manually helps ensure that the page will load correctly. If you include _setHeader_ and _writeHead_ in the same request, they will merge together with _writeHead_ taking precedence. This also means any headers with the same name in both _setHeader_ and _writeHead_ will be overwritten by _writeHead_ headers.

#### How to Serve Files

Have you noticed how our responses have only been plain words and simple HTML? As a developer you will often serve actual documents, so let’s learn how to do that!

Either paste this into your _server.js_ or uncomment STEP #2.4 and comment out STEP #2.3\. Can you guess what’s happening here?





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/4d4ac117dd8a473d21856341b26d268c?postId=7666f783dc10" data-media-id="4d4ac117dd8a473d21856341b26d268c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





This should be in your _index.html_ file:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9d9794ed52d4427d2f4128c6a6876681?postId=7666f783dc10" data-media-id="9d9794ed52d4427d2f4128c6a6876681" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





…and this little snippet should be in your _style.css_ file:

<pre name="c808" id="c808" class="graf graf--pre graf-after--p">.see-me {  
 background-color: black;  
}</pre>

Take a look at the code in _server.js_ on STEP #2.4\. Read through the code comments and see if you can understand what’s going on before continuing.

_readFile_ is a method of the _file system,_ one of Node.js’s core modules, which we briefly covered in [Part I](https://medium.freecodecamp.com/learn-node-js-with-brigadier-fluffykins-i-basics-async-sync-create-your-first-server-b9e54a45e108#.bvd38wc9b). And that’s why we required that module in our code and stored it in the _fs_ variable.It will read the file asynchronously and trigger the callback. When the callback is triggered, the file is inside of it. So the next thing we did was send it to the client using the _end_ method.

You can also send over _.js_ files — and even _JSON_ — just don’t forget to set the _Content-Type_ headers to avoid errors. For example for a _.js_ file, the _Content-Type_ should be set to _application/javascript_. These are also known as the MIME types.

___dirname_ basically means the current directory of the _server.js_ file. More on paths, modules and libraries in the next lesson!

Did you notice how we configured the request for the _style.css_?

Why do you think we need to do this?

Most likely the client won’t be typing in _yourwebsite.com/style.css._ The client just wants your _style.css_ to automatically be there so that your HTML page looks great right? You could test it out and visit _localhost:3000/style.css_ and you’ll see it there, but how do we get it sent to the client automatically?

You probably remember making HTML pages and including your CSS in a different file. To get that CSS to work, we needed to include the CSS _link_ tag inside of the html page. We already did this in _index.html_:

<pre name="45f9" id="45f9" class="graf graf--pre graf-after--p"><link rel="stylesheet" href="style.css"></pre>

So now when a client requests the _index.html_ page, the server will scan the code inside _index.html_ for any other important tags such as the _link_ (CSS files) or _scrip_t (JavaScript files) tags.

In our case we only included the CSS page. It will find this _link_ tag and essentially this is like sending an automatic GET request. Basically the servers are like:

“Hey look, the client wants the HTML page! OK, let me check if this HTML page has anything else I need to send. Oh look, a _link_ tag for the file _style.css_! That must mean there is a css page for this html page. Ok let’s go back into my _server.js_ file. Yep! I have a _response_ for this CSS file too, so I’ll be serving back both the HTML file and CSS files!”

If you visit the home page now and open the Network tab, you should see the CSS working properly. If you don’t see it right away, refresh the browser. And if you still don’t see it, make sure you saved the file and restarted the server:



![](https://cdn-images-1.medium.com/max/1600/1*rjZkTEtCCsjPpa1oN8ZHNA.png)



Otherwise, if we didn’t configure the _style.css_ request in our _server.js,_ only the HTML page would be sent and we would see an error in our network tab for the _style.css_ page.

We may also experience abnormally long load times because the server is searching for the configuration of the _style.css_. It would be thinking:

“I see that the HTML file has a _link_ tag but I can’t find any _response_ for this CSS file in _server.js_. I don’t get it. Where is it? Where is it?”

And I’d like to close today’s lesson with a nifty little trick. It may look intimidating at first, especially if it’s your first time seeing _regex_. I just wanted to share this handy snippet with you anyway in case in the near future you’re setting up an app and all it needs is to serve files that end with _.js, .html, or .css._ instead of writing multiple requests.

It’s OK if you don’t understand it right away — just save it for later and come back to it when you’re ready! It’s good to have in your back pocket :)

<pre name="e3df" id="e3df" class="graf graf--pre graf-after--p">if (request.url.match(/.js$|.html$|.css$/)) {  
  return response.end(fs.readFileSync(__dirname + '/..' +   request.url));  
}</pre>

#### Check out these extra resources

*   The _response object_ has some similar properties as the _request object_, but while the _request object_ inherits from the [_IncomingMessage object_](https://nodejs.org/api/http.html#http_class_http_incomingmessage), the _response object_ inherits from [_http.ServerResponse_ _object_](https://nodejs.org/api/http.html#http_class_http_serverresponse).
*   Learn more about headers [here](https://nodejs.org/api/http.html#http_http).
*   [Review Request Types](http://www.w3schools.com/tags/ref_httpmethods.asp)

Congrats! You’ve made it through **Learn Node.js With Brigadier Fluffykins** Part III! You learned about the different request types, how to configure GET requests at different URLs, and how to serve files!

On top of all this you should now have a basic understanding of the r_equest object_, and some useful methods! Great job today!

We’ll learn more about these topics as well as others we’ve only scratched in the next few lessons. Thank you for reading and stay tuned.

Keep your wisdom up to date by clicking the ❤ below and following, as more **Learn Node.js With Brigadier Fluffykins** is coming soon to Medium!

[**Part I: Sync, Async, and Creating Your First Server!**](https://medium.com/free-code-camp/learn-node-js-with-brigadier-fluffykins-i-basics-async-sync-create-your-first-server-b9e54a45e108#.t91sbbaru)

[**Part II: Events, EventEmitter & Event Loop**](https://medium.com/@__Masha__/learn-node-js-with-brigadier-fluffykins-part-ii-events-eventemitter-the-event-loop-6d4c139694fb#.2rg8m7uen)

[**Part III: Request Object, Configure Routes, Serve Files**](https://medium.com/@__Masha__/learn-node-js-with-brigadier-fluffykins-part-iii-request-object-configure-routes-serve-files-7666f783dc10#.t36ij32rf)








