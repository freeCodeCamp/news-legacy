---
author: Sudheesh Shetty
authorTwitter: none
authorFacebook: none
title: "How to simplify your app’s authentication by using JSON Web Token"
subTitle: "Every application we come across today implements security measures so that the user data is not misused. Security is always something th..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*_1sCpXcnCbvwlJ6uvAKIhw.png
url: https://medium.freecodecamp.org/how-to-make-authentication-easier-with-json-web-token-cc15df3f2228
id: how-to-make-authentication-easier-with-json-web-token-cc15df3f2228
date: 2017-06-07T15:55:03.571Z
tags: [
  "JavaScript",
  "Web Development",
  "Programming",
  "Tech",
  "Startup"
]
---
# How to simplify your app’s authentication by using JSON Web Token



![](https://cdn-images-1.medium.com/max/1600/1*_1sCpXcnCbvwlJ6uvAKIhw.png)

A sample authentication flow



Every application we come across today implements security measures so that the user data is not misused. Security is always something that is changing and evolving. Authentication is one of the essential part of every application.

There are various ways to authenticate the user. Let us discuss token based authentication using node.js application. For this, we will be using JSON Web tokens.

### What are JSON Web Tokens (JWT)?

JSON Web Tokens (JWT) is a standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.

*   **Compact**: Smaller size so that easily transferred.
*   **Self-Contained:** It contains all information about the user.

### How Do they work?

When a user sends a request with required parameters like username and password. The application checks if username and password are valid. On validation, the application will create a token using a payload and a secret key. It will then send the token back to the user to store and send it with each request. When user sends request with this token, application verifies validity with same secret key. If the token is valid, the request is served, else the application will send an appropriate error message.



![](https://cdn-images-1.medium.com/max/1600/1*YO9j_eWCQLSfb4OxwoorrQ.jpeg)

Token Generation Flow



### Structure

Basic structure of JWT is something like

<pre name="9401" id="9401" class="graf graf--pre graf-after--p">header payload signature</pre>

*   **header:** It contains token type and algorithm used to make signature. Gets encoded to base64.
*   **payload:** Any custom user data like username and email.
*   **signature:** Hash of encoded header, payload and a secret key.

### Advantages of JWT

*   **Single Key:** There is no need for database calls every time to verify the user. A single secret key will decode tokens provided by any user.
*   **Portable:** Same token can be used among different domains or different platforms. All it needs is the key.
*   **Easy Expire:** One can set expiration time using JWT. After that time JWT expires.

### How can we do it?

We are going to build a node.js application with few routes and authenticate them using tokens. Basic knowledge of node.js and javascript is required.

**Step 1 **— Open terminal. Start a new project in a directory

<pre name="ba42" id="ba42" class="graf graf--pre graf-after--p">cd auth</pre>

<pre name="28cd" id="28cd" class="graf graf--pre graf-after--pre">npm init</pre>

This will start a new project. Process will ask for certain information. Provide all the details required. Process will create _package.json_ and it will look something like this.

<pre name="7deb" id="7deb" class="graf graf--pre graf-after--p">{  
  "name": "auth",  
  "version": "1.0.0",  
  "description": "application to explain authentication",  
  "main": "server.js",  
  "scripts": {  
    "test": "echo \"Error: no test specified\" && exit 1"  
  },  
  "author": "Your name",  
  "license": "ISC"  
}</pre>

**Step 2 **— Install the dependencies. Again go back to terminal and paste the following line.

    npm install express body-parser jsonwebtoken --save

*   **_express:_** _Node.js_ web application framework.
*   **_body-parser:_** To get parameters from our POST request.
*   **_jsonwebtoken:_** To create and verify tokens.

After installing the dependencies. Our package.json will look something like this:

<pre name="50f5" id="50f5" class="graf graf--pre graf-after--p">{  
  "name": "auth",  
  "version": "1.0.0",  
  "description": "application to explain authentication",  
  "main": "server.js",  
  "scripts": {  
    "test": "echo \"Error: no test specified\" && exit 1"  
  },  
  "author": "Your name",  
  "license": "ISC",  
  "dependencies": {  
    "body-parser": "^1.17.2",  
    "express": "^4.15.3",  
    "jsonwebtoken": "^7.4.1"  
  }  
}</pre>

**Step 3 — **Create server

Let us create a server, serving at port 3000 which sends the index.html when `/` route is called. We will also create `/login` API which authenticates the user and a `/getusers` API which gives list of users. Let’s create dummy data for now and store it in the ‘users’ array. You may also replace them with database calls.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/8b7c1a680404bc32253a5a605f2dc363?postId=cc15df3f2228" data-media-id="8b7c1a680404bc32253a5a605f2dc363" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F3449669%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





**Step 4 — **Build the Client

Let us create a client using HTML, Bootstrap and JavaScript. Our client has two parts: login screen and a place to retrieve users. Login screen will contain text boxes for email and password and a button to send request. We will also add a text box and button to pass the token and get list of users.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/90a8952a49251ebf2eeb6beecb490813?postId=cc15df3f2228" data-media-id="90a8952a49251ebf2eeb6beecb490813" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F3449669%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





**Step 5 — **Start the application

<pre name="3ad4" id="3ad4" class="graf graf--pre graf-after--p">node server.js</pre>

### Is our app secure?



![](https://cdn-images-1.medium.com/max/1600/1*8zQJKP0zeK9dRKizu5k5kA.gif)



No, you might see that even if you don’t pass the token you can get the list of all users. We have not implemented authentication yet. Let’s add authentication to `/getusers` API so that users with valid token can retrieve users list.

### How to Add Authentication?

1.  Include JWT to the server.js file.

<pre name="cbed" id="cbed" class="graf graf--pre graf-after--li">var jwt=require('jsonwebtoken');</pre>

2\. Pass the payload(any object, here pass the user object itself) and a secret string to sign function and create a token.

<pre name="859e" id="859e" class="graf graf--pre graf-after--p">var token=jwt.sign(<user>,<secret>);</pre>

3\. When the token is created successfully pass the same to client.

<pre name="c5a6" id="c5a6" class="graf graf--pre graf-after--p">res.json({token:token});</pre>

You can then store token on client side and pass it every time during the session to authenticate. Let’s change the “getlist” function so that we can pass token to the server when we want to access users list.

Let’s add a middleware to authenticate `/getusers` or any secure route that is added in future. Make sure that all routes that needs authentication is below the middleware.

In server.js, first we have login route which creates token. After that we have middleware which we will use to verify the token. All the routes which needs authentication are after middleware. The order is very important.

4\. To decode, you pass the token and secret key to verify function. Function will return error if the token is invalid or success if token is valid.

<pre name="bcb6" id="bcb6" class="graf graf--pre graf-after--p">jwt.verify(token,"samplesecret",(err,decod)=>{  
  //your logic  
})</pre>

Call next() so that respective routes are called.

Final server.js will look like this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9dba82c285907c63e9e03d3e31f13952?postId=cc15df3f2228" data-media-id="9dba82c285907c63e9e03d3e31f13952" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F3449669%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Final index.html will look like this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/192adf34e3784c0d197bc29bf341c4d3?postId=cc15df3f2228" data-media-id="192adf34e3784c0d197bc29bf341c4d3" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F3449669%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





That’s it. This is a simple example of how to use token to authenticate your app. I have put the complete code on GitHub. You may check it there.

[**sudheeshshetty/JWT_Auth**  
_Contribute to JWT_Auth development by creating an account on GitHub._github.com](https://github.com/sudheeshshetty/JWT_Auth "https://github.com/sudheeshshetty/JWT_Auth")[](https://github.com/sudheeshshetty/JWT_Auth)

Thanks for reading and do follow me and recommend the same to others by clicking on ♡ . My twitter handle is [sudheeshshetty](https://twitter.com/sudheeshshetty).








