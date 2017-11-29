---
author: Sudheesh Shetty
authorTwitter: none
authorFacebook: none
title: "How to build your own real-time chat app"
subTitle: "Messaging apps are surging in popularity. The past few years have brought apps like WhatsApp, Telegram, Signal, and Line...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*q9WivDkg8ALSxw1jG1y1Jw.jpeg
url: https://medium.freecodecamp.org/building-a-chat-application-with-mean-stack-637254d1136d
id: building-a-chat-application-with-mean-stack-637254d1136d
date: 2016-11-16T06:37:31.448Z
tags: [
  "Nodejs",
  "JavaScript",
  "Programming",
  "Tech",
  "Startup"
]
---
# How to build your own real-time chat app







![](https://cdn-images-1.medium.com/max/2000/1*q9WivDkg8ALSxw1jG1y1Jw.jpeg)







Messaging apps are surging in popularity. The past few years have brought apps like WhatsApp, Telegram, Signal, and Line.

People seem to prefer chat-based applications because they allow for real-time interaction. They also add a personal touch to the experience.

I recently attended a workshop conducted by the Free Software Movement Karnataka in Bangalore where I mentored a group of college students.

During the interactions, I observed certain things:

1.  Despite encouraging students to interact with the mentor, communication was always one-sided.
2.  Students often felt too shy to ask questions during the sessions.
3.  They were more comfortable asking questions and getting feedback in one-on-one conversations.

So we had to find a solution to break the ice between mentors and students. A local chat application came handy in this situation. People love to be anonymous, which gives them more power to express themselves and ask anytime anywhere. This is the same mantra used by most of the popular forums on the internet, such as Reddit and 4chan. These are just a few giant examples of semi-anonymous apps.

So I started thinking about this idea. I came up with some of the basic requirements and features.

1.  Users register by giving a handle, which is unique to every user (a dummy name). Only the handle will be revealed to other users. So people are free to choose any handle and hence they stay anonymous.
2.  A member can see other members who are online. They have an option to go public, which broadcast the message to all online members in the chat.
3.  For private messages, the sender should first send a request to the other member. Other members upon accepting the request can have private chat with them.

### **Technology, Tools used**

1.  MEAN Stack(Mongo, Express, Angular, Node).
2.  Sockets to enable one-on-one communication in real time
3.  AJAX for sign-up and login

### **So how do you create a simple chat application?**

In this tutorial, I’m going to help you create your own chat application. You can later integrate as a widget into any project! This tutorial won’t concentrate on the complete development of a chat application. But it will help you build one.

**Pre-requisite :** You need to know some basic knowledge of MEAN Stack, as we are making use of it to build one.

First, create a directory structure something like this.



![](https://cdn-images-1.medium.com/max/1600/1*bdJ5lKSWXS_-40D9TJ9dNA.jpeg)

**Directory structure of the project**



Install [Node.js](https://nodejs.org/en/download/package-manager/) and [MongoDB](https://docs.mongodb.com/manual/administration/install-community/).

We’ll be making use of AngularJS 1 for this tutorial. Download the AngularJS library from [here](https://angularjs.org/) and copy it to the lib folder in Client directory.

If you like to beautify the application you can download any CSS libraries and copy them to lib as well.

### **Building the Server**

**Step 1 **— Start the project :

Go to Server directory and run this command:

<pre name="f60b" id="f60b" class="graf graf--pre graf-after--p">npm init</pre>

This will start a new project. Provide all the details required. The _package.json_ will be created and will look something like this.

<pre name="c12e" id="c12e" class="graf graf--pre graf-after--p">{  
  "name": "chat",  
  "version": "1.0.0",  
  "description": "Chat application",  
  "main": "server.js",  
  "scripts": {  
    "test": "echo \"Error: no test specified\" && exit 1"  
  },  
  "author": "Your name",  
  "license": "ISC"  
}</pre>

**Step 2** — Install the dependencies.

*   **socket.io** — is a _javascript_ library for real-time web applications. It enables real-time, bi-directional communication between web clients and servers.
*   **express** — is a _Node.js_ web application framework. It provides the set of features to develop the web and mobile applications. One can respond to HTTP request using different middlewares and also render HTML pages.

    npm install --save socket.ionpm install --save express

This will install required dependencies and add those to _package.json._ An extra field will be added to _package.json_ which will look like this:

<pre name="c723" id="c723" class="graf graf--pre graf-after--p">"dependencies": {  
    "express": "^4.14.0",  
    "socket.io": "^1.4.8"  
  }</pre>

**Step 3 — **Creating the Server

Create a server which serves at port 3000 and will send the html when called.

Initialize a new socket connection by passing HTTP object.

Event _connection_ will be listening for incoming sockets.

Each socket emits _disconnect_ event which will be called whenever a client disconnects.

*   **socket.on** waits for the event. Whenever that event is triggered the callback function is called.
*   **io.emit** is used to emit the message to all sockets connected to it.

The syntax is:

    socket.on('event', function(msg){})io.emit('event', 'message')

Create a server with name _server.js._ It should:

*   print a message to the console upon a user connecting
*   listen for _chat message_ events and broadcast the received message to all sockets connected.
*   Whenever a user _disconnects,_ it should print the message to the console.

The server will look something like this:

    var app = require('express')();var http = require('http').Server(app);var io = require('socket.io')(http);

    app.get('/', function(req, res){  res.sendfile('index.html');});

    io.on('connection', function(socket){  console.log('user connected');  socket.on('chat message', function(msg){    io.emit('chat message', msg);  });  socket.on('disconnect', function(){    console.log('user disconnected');  });});

    http.listen(3000, function(){  console.log('listening on *:3000');});

### **Building the Client**

Create the index.html in the client directory, style.css in the css directory and app.js in js directory in the client.

**_index.html:_**

Let us write a simple HTML which can take our message and also display it.

Include _socket.io-client_ and _angular.js_ in your HTML script.

<pre name="f96b" id="f96b" class="graf graf--pre graf-after--p"><script src="/path/to/angular.js"></script>  
<script src="/socket.io/socket.io.js"></script></pre>

**socket.io** serves the client for us. It defaults to connect to the host that serves the page. Final HTML looks something like this:

<pre name="3e3b" id="3e3b" class="graf graf--pre graf-after--p"><!doctype html>  
<html ng-app="myApp">  
  <head>  
    <title>Socket.IO chat</title>  
    <link rel="stylesheet" href="/css/style.css">  
    <script src="/lib/angular/angular.js"></script>  
    <script src="/socket.io/socket.io.js"></script>  
    <script src="[http://code.jquery.com/jquery-1.11.1.js](http://code.jquery.com/jquery-1.11.1.js)">  
    </script>  
    <script src="/js/app.js"></script>  
  </head>  
  <body ng-controller="mainController">  
    <ul id="messages"></ul>  
      
      <button ng-click="send()">Send</button>  
      
  </body>  
</html></pre>

**_css/style.css:_**

Give it some styling so that it looks like a chatbox. You can make use of any libraries.

<pre name="f0c6" id="f0c6" class="graf graf--pre graf-after--p">* { margin: 0; padding: 0; box-sizing: border-box; }  
body { font: 13px Helvetica, Arial; }  
div { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }  
div input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }  
div button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }  
#messages { list-style-type: none; margin: 0; padding: 0; }  
#messages li { padding: 5px 10px; }  
#messages li:nth-child(odd) { background: #eee; }</pre>

**_js/app.js:_**

Create an angular.js app and initialize a socket connection.

*   **socket.on** listens for a particular event. It calls a callback function whenever that event is called.
*   **socket.emit** is used to emit the message to the particular event.

Basic syntax of both are:

<pre name="6b0d" id="6b0d" class="graf graf--pre graf-after--p">socket.on(‘event name’, function(msg){});  
socket.emit('event name', message);</pre>

So whenever the message is typed and the button is clicked, call the function to send the message.

Whenever the socket receives a message, display it.

The JavaScript will look something like this:

<pre name="96eb" id="96eb" class="graf graf--pre graf-after--p">var app=angular.module('myApp',[]);</pre>

<pre name="ab3c" id="ab3c" class="graf graf--pre graf-after--pre">app.controller('mainController',['$scope',function($scope){  
 var socket = io.connect();  
 $scope.send = function(){  
  socket.emit('chat message', $scope.message);  
  $scope.message="";  
 }  
 socket.on('chat message', function(msg){  
  var li=document.createElement("li");  
  li.appendChild(document.createTextNode(msg));  
  document.getElementById("messages").appendChild(li);  
 });  
}]);</pre>

### **Running the application**

Go to server directory where our server is present. Run the server using the following command:

<pre name="a0c9" id="a0c9" class="graf graf--pre graf-after--p">node server.js</pre>

The server starts running on port 3000\. Go to the browser and type the following url:

<pre name="43fc" id="43fc" class="graf graf--pre graf-after--p">http://localhost:3000</pre>

### **How to improve the same application**

You can design a database to save user details and messages. It would be good if the design was scalable so that you could add more features later.

You need to install Mongoose or a MongoDB module to make use of a Mongo database:

<pre name="f5fe" id="f5fe" class="graf graf--pre graf-after--p">npm install --save mongoose</pre>

or:

<pre name="236b" id="236b" class="graf graf--pre graf-after--p">npm install --save mongodb</pre>

Here’s the documentation to use [mongoose](http://mongoosejs.com/docs/index.html) and the [mongodb](https://docs.mongodb.com/getting-started/node/client/) module.

Here’s what my schema design looks like:

<pre name="411e" id="411e" class="graf graf--pre graf-after--p">{  
 “_id” : ObjectId(“5809171b71e640556be904ef”),  
 “name” : “Sudheesh Shetty”,  
 “handle” : “sudheesh”,  
 “password” : “556624370”,  
 “phone” : “8888888888”,  
 “email” : “sudheeshshetty@gmail.com”,  
 “friends” : [  
    {  
      “name” : “abc”,  
      “status” : “Friend”  
    },  
    {  
      “name” : “xyz”,  
      “status” : “Friend”  
    }  
 ],  
 “__v” : 0  
}</pre>

Here, the status of each member can be:

*   Friend: Stating that the member is a friend.
*   Pending: If the member has not yet accepted.
*   Blocked: If the member has blocked the other member.

Suppose the member has rejected a chat request. The sender can then send a chat request again. A user can also save the messages by creating an extra collection. Each document will have the message, sender, receiver, and time.

So design your database according to your specific needs and how you want to handle messages.

2\. Create REST APIs to serve the client. For example, an endpoint that sends a home page, from which users can make other requests.

Few of my API endpoints are:

<pre name="f7c4" id="f7c4" class="graf graf--pre graf-after--p">app.post(‘/register’,function(req,res){})</pre>

<pre name="0ada" id="0ada" class="graf graf--pre graf-after--pre">app.post(‘/login’,function(req,res){})</pre>

<pre name="4680" id="4680" class="graf graf--pre graf-after--pre">app.post(‘/friend_request’,function(req,res){})</pre>

<pre name="6dd4" id="6dd4" class="graf graf--pre graf-after--pre">app.post(‘/friend_request/confirmed’,function(req,res){})</pre>

3\. Think of some cool additional features and implement them.

I have created a chat application of my own:

[**sudheeshshetty/Chat**  
_Contribute to Chat development by creating an account on GitHub._github.com](https://github.com/sudheeshshetty/Chat "https://github.com/sudheeshshetty/Chat")[](https://github.com/sudheeshshetty/Chat)

Here’s a quick glance at my chat application:







![](https://cdn-images-1.medium.com/max/2000/1*Qxpy7GN8132veIMzUfWOLA.png)

Login screen





![](https://cdn-images-1.medium.com/max/2000/1*HRqQTX-ACCAlU2UQ9PNaGg.png)

How it looks after login.







Please do look at it, and give it a star at the top right if you like it. There are many ways I could improve this application. If you have any suggestions, send them to me at sudheeshshetty@gmail.com.

You can follow me here on click the green heart if you found this helpful so that more people will see this. You can also [follow me on GitHub](https://github.com/sudheeshshetty) and [twitter](https://twitter.com/sudheeshshetty).








