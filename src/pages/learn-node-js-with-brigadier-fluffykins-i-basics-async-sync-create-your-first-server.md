---
author: Mariya Diminsky
authorTwitter: none
authorFacebook: none
title: "Learn Node.js with Brigadier Fluffykins Part I: Sync, Async, and Creating Your First Server!"
subTitle: "Welcome to Part I of Learn Node.js With Brigadier Fluffykins, a series created to help you easily understand Node.js ❤..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*4E7_DswXy8rFF2Dzrq1H3A.jpeg
url: https://medium.freecodecamp.org/learn-node-js-with-brigadier-fluffykins-i-basics-async-sync-create-your-first-server-b9e54a45e108
id: learn-node-js-with-brigadier-fluffykins-i-basics-async-sync-create-your-first-server-b9e54a45e108
date: 2016-07-11T22:02:13.248Z
tags: [
	"Nodejs",
	"JavaScript",
	"Web Development",
	"Tutorial",
	"Education"
]
---
# Learn Node.js with Brigadier Fluffykins Part I: Sync, Async, and Creating Your First Server!











![](https://cdn-images-1.medium.com/max/2000/1*4E7_DswXy8rFF2Dzrq1H3A.jpeg)












Welcome to Part I of **Learn Node.js With Brigadier Fluffykins**, a series created to help you easily understand Node.js ❤

A new adventure has arrived! I will be taking you step by step from initial Node.js install to creating your first server, to customizing your responses, understanding streams and events, as well as using frameworks. Let’s begin.














Brigadier Fluffykins wants to make sure you’ve reviewed the basics of _callbacks_ and _promises_. If not:

*   Watch [this](https://www.youtube.com/watch?v=QqiNn3GfTMc) video & read [this](https://medium.freecodecamp.com/javascript-callbacks-explained-using-minions-da272f4d9bcd#.10k431muw) article on _callbacks_.
*   Watch [this](https://youtu.be/2d7s3spWAzo?t=24s) video & read [this](https://davidwalsh.name/promises) article on _promises_.

It’s ok if you don’t understanding everything right away. The important thing is that you are introduced to these concepts now. We want your brain to begin adjusting to the Node.js programming patterns you will implement throughout these lessons. Good luck and happy learning! :)

Today’s lesson will cover:

*   What Node.js is and what you can build with it.
*   Brief overview of how the web works(i.e. Client, Server relationship).
*   Downloading and installing Node.js on Mac/Windows/Linux.
*   What asynchronous/synchronous mean, and what non-blocking/blocking mean.
*   How to create your first server.

### What is Node.js?

Node.js is an open source cross platform runtime environment that allows you to build scalable network applications on the server-side.

By runtime environment, I mean that inside Node.js is the [_V8 JavaScript runtime _](http://stackoverflow.com/questions/29027845/what-is-the-difference-between-javascript-engine-and-javascript-runtime-environm)— the same one used (and developed by) the Google Chrome browser on the client-side. Using Node.js’s modules and libraries — explained later in this series — we have a way to:

*   Scale apps as traffic increases
*   Build chat rooms and other data-heavy apps
*   Directly manipulate database information
*   Access and shape the files in our system based on preference
*   Route requests (for website’s html/css/js pages) and monitor traffic
*   Have faster uploads and the ability to show the progress of those uploads
*   Customize our responses to these requests via routing and redirecting

Due to _V8_ and Node.js mostly being written in C and C++(even though many modules are written in JavaScript), Node.js is very fast. This is super important when you have an application that needs scaling.

Imagine thousands of users hitting your app, and thus requesting info from your server. What do you think will happen? You have no way of handling these requests, and even if you do, they may be synchronous (explained later). Users end up waiting in line behind thousands of other users for the necessary files to return. Loading speeds are slow, creating a poor user experience and causing you to lose business.

Scaling your app when traffic hits is one of the biggest challenges an app faces in the early stages.

Node.js allows you to operate a huge number of connections simultaneously and asynchronously — this basically means it allows for scalability. On top of this, you have libraries to help you customize the handling of these issues.

### Client and Server: The Traditional Model

Before we continue I want to give a brief overview of how the web works via client and server. If you already understand this go ahead and skip this part.

When I say client, I mean anyone who is requesting information.

When I say server, I mean anyone who is processing a request and responding back with the necessary information.

For example, when you go to type in:














You are about to initiate several requests for the website’s HTML page, it’s CSS stylesheets, it’s JavaScript documents, and so on. You are _asking_ or _requesting_ their server to show you the page and all the documents associated with it.

When the website’s servers receives these requests, they respond with the HTML page, the CSS stylesheets, and whatever else you may need to view that page. This is the gist of it.

It’s important to note that anyone can be a client or a server. When you are creating an app locally you are in fact acting as a client and a server (such as _localhost:3000_). More on that later.

For now, let’s explore how Node.js handles these requests compared to the old-school model. We’ll use animations that Brigadier Fluffykins made for us. The orange is Brigadier Fluffykin’s request to his favorite website and the green is the response from the server. Slow and steady:












Brigadier Fluffykins is annoyed.



The traditional client-server model involves the client initializing a request first. Each request connection creates a new thread — a new process where code runs — thus taking up memory in your system. This eventually creates scalability issues due to memory running out or your server crashing due to an over flood of requests (high user traffic).

If you’re interested in diving deeper in how the client-server model works, I recommend exploring [here](https://medium.freecodecamp.com/how-the-web-works-a-primer-for-newcomers-to-web-development-or-anyone-really-b4584e63585c).

### Client and Server: With Node.js

With Node.js, both the client and server can initiate two-way connections allowing data to freely communicate between the two. Even though Node.js is single threaded — just like Javascript —and only one process happens at a time (explained later in the series), it ‘acts’ multi-threaded by processing requests via _callbacks_ and _promises._ It’s thus able to support thousands of concurrent connections in an non-blocking/asynchronous manner.












Brigadier Fluffykins is happy.



Node.js can act as the client or the server or both. How awesome is that!?

As the server, a user visits your website and make requests (for HTML, CSS, and JavaScript files). Node.js receives these requests and sends a response (the HTML, CSS, and JavaScript files requested) and so on.

As a client, Node.js requests content from another site. For example, when a client wants to post something to Pinterest or Twitter from your site.

To use Node.js as a client you need to install the [Request](https://www.npmjs.com/package/request) library (We’ll talk about installing modules and libraries for Node.js later in this series).

It’s important to realize that Node.js doesn’t do anything by itself. It’s not a web server. It’s just a runtime environment. If you want a web server, you bet your dilly da hoo ha that you need to write that server yourself young man (woman…child…cat…you get the point). You want to add information to your files? You gotta write that yourself too — Node.js doesn’t magically create this for you, but it sure adds a lot of great functionality you can play with. And Brigadier Bunny Fluffykins is going to teach you how! Yeah!

### **Downloading and Installing Node.js**

1.  Open your command line terminal. If you don’t know how to find your command line, here are a few links that may help:

*   [Mac](https://www.davidbaumgold.com/tutorials/command-line/#finding-the-command-line)
*   [Windows](http://www.computerhope.com/issues/chusedos.htm)
*   [Linux](http://linuxcommand.org/lts0010.php#starting)

2\. Next, make sure Git is up and running:

*   You can download it [here](https://git-scm.com/downloads).
*   Watch [this](https://git-scm.com/video/get-going) 4 minute video intro on git.
*   Read this [article](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) if you still need help.

3\. [Download](https://nodejs.org/en/download/) Node.js onto your system.

To check if you installed it, type in _node -v_ in your command line, you should see the version number pop up:



![](https://cdn-images-1.medium.com/max/1600/1*Hsizklixn9QgjmdnqkvnfA.png)



Now that you have Node.js installed, you access the _node_ command in your terminal, and type JavaScript code in your shell!














You can also execute code from a JavaScript file:

Let’s create a file called _bunny.js_ in your code editor (such as Sublime, Brackets or Atom). Type in _console.log(‘I will give Brigadier Fluffykins 20 carrot bits’)_ inside the file, or download [this](https://drive.google.com/file/d/0Byvu31DWppA7UEs5SWc2bWN5S1E/view?pref=2&pli=1) zip which includes this file as well as the next few files we need for the rest of the lesson.














Press _ctrl + c_ inside the terminal for Mac twice to exit out of the node process (I believe it’s _killall node_ for Windows — correct me if I’m wrong here).

Now find where your file is located. In my case, I moved to Desktop, then the folder where I saved the _bunny.js_ file (_nodestory_). You may have it saved on your Desktop. Now in the shell type _node bunny.js_ and VOILA! Your JavaScript shows up in the terminal! :)














### Asynchronous & Synchronous Code

In order for Node.js to handle thousands of concurrent connections, it needs to handle them asynchronously, in a non-blocking way. What this means is you can have more than one action running at the same time, you saw this in the second animation.

Blocking — or synchronous — on the other hand, will run only one action at time. It will not allow a second action to run until it’s finished. When we sent a request for a file, we had to wait for the server to respond until we could send another request. This takes a really long time for Brigadier Fluffykins, and he was unhappy.

If you create code asynchronously, you can run actions in parallel. This can take less than half as much time as using a synchronous approach.

Although Node.js was purposefully created to be non-blocking, it allows developers the option to choose how they want their code run via changeable methods in their libraries. For example, Node.js has an _appendFile_ method that can append something new to your file [asynchronously](https://nodejs.org/docs/latest-v5.x/api/fs.html#fs_fs_appendfile_file_data_options_callback) or [synchronously](https://nodejs.org/docs/latest-v5.x/api/fs.html#fs_fs_appendfilesync_file_data_options). Here’s another example:

Follow steps 1–5, or download this [zip](https://drive.google.com/file/d/0Byvu31DWppA7UEs5SWc2bWN5S1E/view?pref=2&pli=1) with files I’ve already created for you:

1.  First let’s create a folder called ‘_nodestory_’ .
2.  Create these 3 files: _wishlist.html_, _bunnySync.js_ and _bunnyAsync.js_ inside the folder.
3.  Open this folder in your code editor(Sublime, Brackets, Atom etc).
4.  In _wishlist.html_ copy and paste this in:





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/7be885e7663fd7a6d31bdf3826aa72f1?postId=b9e54a45e108" data-media-id="7be885e7663fd7a6d31bdf3826aa72f1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








5\. In _bunnySync.js_ copy and paste this in:





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/42d4926a7c35cdea1d7e0a8a8509f286?postId=b9e54a45e108" data-media-id="42d4926a7c35cdea1d7e0a8a8509f286" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








Ok now run _node bunnySync.js_ in your terminal:














Notice how our alert is printed in the same order as when we wrote the code? Now let’s try the same concept but asynchronously/non-blocking.

In _bunnyAsync.js_ paste this in — make sure it’s the right file name:





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/7396268d36a58f12ad3578785d3eedd3?postId=b9e54a45e108" data-media-id="7396268d36a58f12ad3578785d3eedd3" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








Ok now run _node bunnyAsync.js_ in your terminal:














Notice how our alerts, no matter the order, all print before the file is fully read? Reading the file takes longer then using the _console.log_ function, and thus our alerts are printed first. Once the file is read, it eventually prints.

### **Create Your First Server**

It’s thaaaaaaat special time of year… to create your first server!

Woohoo! I am so excited for you! We’ll be going through several examples, so either create a file called _server.js_ and paste this in:





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/7431c093d2c865dac759bc637467b111?postId=b9e54a45e108" data-media-id="7431c093d2c865dac759bc637467b111" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








…or open the _server.js_ file in the zipped folder I provided earlier.

Make sure that only the _http_ and _fs_ variables — as well as ‘STEP #1’ — are uncommented. Review the code and deliberate on what you think is happening before you continue reading.

As you may have noticed, along with modules and third-party libraries, Node.js also comes wth an extensive list of methods. You most likely won’t be using all of them — it really depends on what you’re building.

Now type _node server.js_ in your terminal to start the server.

Go to your url header and type _localhost:3000_ to see the response you just sent:














Ok, what’s happening here?

For every request, you need a response. First, we respond to the client by setting the status code in the header to 200, meaning this website is OK, ready to go!

You can check the headers by clicking _option + command + J_ in Chrome on a Mac, or right clicking and choosing _inspect_ then clicking the _Network_ tab (it’s one of the options next to the _Console_ tab). If you don’t see anything under _Network_ just hit refresh. Otherwise click the page and you will see under _Headers_ the status code and what kind of requests the client made (in our case, “localhost:3000”). This is a GET request, since we want to get a file from a server.

Here’s what would happen if we set our headers to 404:














Try it out in your code and see if you can get a 404 status code.

Headers and status codes are an interesting topic by themselves, but I won’t go into that now. I have included resources in the end, if you’d like to research this more.

Next we have the response we want to send back to the client, or what the client will actually view on their page using the _write_ method. Then we close the connection with the _end_ method.

Lastly, we set up the port that our server will listen for requests. This can be 3000, 8080, or basically whatever you want. Just make sure you go to _localhost:8080_ if, for example, you’re using port 8080.

It’s a good practice to set the headers first before you set the response, especially because headers come before the body in the _HTTP_ responses.

You just learned to create your first server! Pat yourself in the back, or slap yourself in the face — whatever works for you!

Let’s continue our adventure by building one of the more common forms you’ll see for _HTTP_ servers. This is the same as what we just created, except there are some slight syntax differences which focus on _events_ and _event emitters_ (explained later in the series).

Comment out ‘STEP #1’ and uncomment ‘STEP #1.5’.

This is really important: before you do anything else, be aware that when you start a server then change something again in the file, the changes won’t be visible until you stop the server and start it again. There are libraries that will automatically restart the server for you upon detecting changes (like [Nodemon](https://www.npmjs.com/package/nodemon)), but don’t worry about setting that up right now.

For now, to stop the server manually go into your terminal and press _control + C_ for Mac (again, I believe it’s _killall node_ for Windows) then either press the up arrow to go through the previous commands you typed, or manually type in _node server.js_.

You should see this:














Notice that we can send some basic HTML inside the _end_ method, thus sending a response and ending our connection at the same time. We can also store our server in a variable to make it more readable when we are using events such as _request_. It’s important to note that the _request_ event is not the same as the _Request_ third-party library. This confused me when I first learned Node.js, and I wouldn’t want you to go through the same thing. We’ll be talking about these in the next few lessons of the series.

### Extra Resources

I implore you to go out and do some research. Make the most out of the time that you have. Here are a few places you can start:

*   [What is Node.js Exactly?](https://www.youtube.com/watch?v=pU9Q6oiQNd0)
*   [Node.js Docs](https://nodejs.org/docs/latest-v5.x/api/).
*   [What are buffers in Node?](https://docs.nodejitsu.com/articles/advanced/buffers/how-to-use-buffers/)
*   [List of Status Codes and their meanings.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
*   [Repeat after me: “Google is my friend”](https://www.google.com/)

Congrats! You’ve made it through **Learn Node.js With Brigadier Fluffykins** Part I! Now you’ll be able to explain the basics of Node.js as well as what you can build with it. You gained an intro on how async/non-blocking and sync/blocking code works, and the benefits that Node.js provides with async programming. Best of all, you were finally able to set up your very first server!

Wow. Seriously, great job. Brigadier Fluffykins commends your effort.

We will go deeper into these topics as well as others we’ve only scratched in the next few lessons. Thank you for reading and stay tuned.

Keep your wisdom up to date by clicking the ❤ below and following, as more **Learn Node.js With Brigadier Fluffykins** is coming soon to Medium!

[**Part I: Sync, Async, and Creating Your First Server!**](https://medium.freecodecamp.com/learn-node-js-with-brigadier-fluffykins-i-basics-async-sync-create-your-first-server-b9e54a45e108#.bvd38wc9b)

[**Part II: Events, EventEmitter & Event Loop**](https://medium.com/@__Masha__/learn-node-js-with-brigadier-fluffykins-part-ii-events-eventemitter-the-event-loop-6d4c139694fb#.957cacwgv)

[**Part III: Request Object, Configure Routes, Serve Files**](https://medium.com/@__Masha__/learn-node-js-with-brigadier-fluffykins-part-iii-request-object-configure-routes-serve-files-7666f783dc10#.g5j0faw3x)








