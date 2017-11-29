---
author: Aurélien Giraud
authorTwitter: https://twitter.com/aurerua
authorFacebook: none
title: "Building a Node.js application on Android"
subTitle: "Part 2: Express and NeDB"
coverSrc: https://cdn-images-1.medium.com/max/2000/1*gpCGhSHig8ZaHUOxjDJO8g.jpeg
url: https://medium.freecodecamp.org/building-a-node-js-application-on-android-part-2-express-and-nedb-ced04caea7bb
id: building-a-node-js-application-on-android-part-2-express-and-nedb-ced04caea7bb
date: 2016-03-26T19:52:47.962Z
tags: [
  "API",
  "Nodejs",
  "Programming",
  "Learning To Code",
  "JavaScript"
]
---
# Building a Node.js application on Android

## Part 2: Express and NeDB







![](https://cdn-images-1.medium.com/max/2000/1*gpCGhSHig8ZaHUOxjDJO8g.jpeg)







In [Part 1](https://medium.freecodecamp.com/building-a-node-js-application-on-android-part-1-termux-vim-and-node-js-dfa90c28958f#.6oc2qvfwl) we saw how to use Termux, a Terminal emulator and Linux environment for Android. We also edited files with Vim and saw how to run Node. We are now going to build a small node application with the Express framework and use NeDB for the database.

### The story, and who could benefit from it

When I found out I could build a full Node.js application with a Mongo-like database on my Android tablet, I got really excited. So I decided to give it a try, and share about my experience.

It turns out that once Termux is running on Android and Node is installed, the fact that we are on Android instead of Linux doesn’t make much of a difference. In fact, all the Termux specific setup was done in Part 1 and you are welcome to code along on your preferred device/computer/cloud IDE…

This also means that, apart from the fact that we substitute Mongo for NeDB, this article is like the usual introduction to building a RESTful API and is mainly for people who are rather new to Node, Express and Mongo/NeDB.

### What we are going to do



![](https://cdn-images-1.medium.com/max/1600/1*9CqFS4MJHVuFSPiFTMasDA.png)

A basic recurrent goals tracker



In order to demonstrate how to get started with the Express web framework and an NeDB database, let’s look at a basic goal tracker that I’ve been building for myself. At the current stage, it looks as shown in the picture above.

Users can:

*   submit a new goal
*   delete a goal
*   record a success for a goal
*   record a failure for a goal

Well, actually we’re only going to implement the first two features in this post, and in case you’re curious about the two remaining ones, I will provide at the end a link to the code of the full implementation.

So without the need for recording successes and failures, our code will look a bit simpler:



![](https://cdn-images-1.medium.com/max/1600/1*RkYG-8TICUIdjaKhR1OD5g.png)



Here are the steps we are going to go through:

1.  Set up the server with **Express.**
2.  Describe a few **user stories.**
3.  Set up **NeDB**.
4.  Build a **RESTful API**.

### Pre-requisites

We are going to start where we left off in Part 1\. Thus, the only requirement is that node be installed.

### 1\. Setting up the server with Express

[Express](http://expressjs.com/) is a web framework for Node that helps build Node applications. If you have trouble figuring out what Express brings to Node, I recommend you check out Evan Hahn’s article [Understanding Express](http://evanhahn.com/understanding-express/).

Let’s start a new project:

<pre name="b9f7" id="b9f7" class="graf graf--pre graf-after--p">$ mkdir goals-tracker && cd goals-tracker  
$ npm init  
$ touch server.js</pre>

and install Express:

<pre name="5160" id="5160" class="graf graf--pre graf-after--p">npm install express --save</pre>

We are going to use Express to define the routes_,_ that is to define the application end points (URIs) and set up how the application responds to client requests.

Open _server.js_ and copy-paste/write:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/631973cdca2f315b163d4022c2bde733?postId=ced04caea7bb" data-media-id="631973cdca2f315b163d4022c2bde733" allowfullscreen="" frameborder="0"></iframe>





With that in place, you can start the app:

<pre name="51b0" id="51b0" class="graf graf--pre graf-after--p">$ node server.js</pre>

This should print to the console the number of the port on which the server is listening. If you visit [**http://localhost:8080**](http://localhost:8080) in the browser (assuming that 8080 is the number that got printed to the console) you should see on the page: _Our first route is working. :)_

#### Some explanations

The **‘/’** in **app.get( … )** defines the route where we want to attach some behavior from the server. Using ‘/’ refers to the base URI, in our case: [http://localhost:8080](http://localhost:8080/goals). Note that we would get the same result in the browser window if we used **app.get(‘/goals’, …)** instead and visited [http://localhost:8080/goals](http://localhost:8080/goals).

The second argument in **app.get( … )** is a [callback](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/) function that enables us to define what the server should do when the route given as the first argument is visited. In this function:

*   **req** stands for the **request:** this is the information that the server receives from a client (for example this might come from someone using the front-end part of the website/app).
*   **res** stands for **response:** this is the information that the server sends back to the user. This can be a webpage or some other data like an image, some JSON or some XML.

#### Nodemon

In the next parts of this tutorial we are going to make multiple changes to the file _server.js_. In order to avoid restarting the server manually each time to see the result, we can install [**nodemon**](http://nodemon.io/).

Nodemon is a utility that will monitor for changes in your code and automatically restart the server. We are going to install it as a development only dependency using the tag _save-dev:_

<pre name="8ecb" id="8ecb" class="graf graf--pre graf-after--p">npm install nodemon --save-dev</pre>

Now you can restart the server with the _nodemon_ command instead of _node_:

<pre name="e72f" id="e72f" class="graf graf--pre graf-after--p">nodemon server.js</pre>

### 2\. The user stories

Before we move on to the part about NeDB, let’s pause for a moment to think about the business logic. In order to see what we need to implement, we start by defining a few user stories.

A [user story](https://en.wikipedia.org/wiki/User_story) is a very high-level definition of a requirement. User stories are useful for discussing the product in non-technical terms with a client, for estimating how much time and effort the implementation of a feature will take, for guiding the overall development of an application, and for doing [Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development).

Here are the 4 user stories we’re going to use:

1.  As a user, I can save a new goal with its date of creation.
2.  As a user, I can access all the goals that have been saved.
3.  As a user, I can access the whole information about a goal.
4.  As a user, I can delete a goal.

In our case, the stories map one-to-one to the 4 CRUD operations that we are going to talk about in Part 4.

### 3\. Using NeDB

The fact that [NeDB](https://github.com/louischatriot/nedb#inserting-documents) is easy to install, well documented and uses the MongoDB’s API makes it perfect for getting started with developing Node.js applications on Android. There even is [a tool](https://github.com/louischatriot/nedb-to-mongodb) to help you switch to MongoDB later on if need be (I haven’t tried it yet, though).

So let us add NeDB to the project:

<pre name="eaaa" id="eaaa" class="graf graf--pre graf-after--p">$ npm install nedb --save</pre>

and add to _server.js_ a few lines to setup the database and make sure we can save to it:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ab5c51d71149efdd7067aaafc19e35dd?postId=ced04caea7bb" data-media-id="ab5c51d71149efdd7067aaafc19e35dd" allowfullscreen="" frameborder="0"></iframe>





A **Datastore** refers to what would be called a collection in Mongo. We could create multiple datastores if we needed several collections. As demonstrated in NeDB’s documentation, each collection would be saved in a separate file. Here we have chosen to store the goals collection in a file named _goals.db._

#### Checking if it worked

If the server was started earlier with _nodemon_, it should have updated after the changes in _server.js_ got saved. This means that _db.insert(…)_ should have run and the goal should have been logged to the console:

<pre name="7c18" id="7c18" class="graf graf--pre graf-after--p">$ nodemon server.js  
[nodemon] 1.9.1  
[nodemon] to restart at any time, enter `rs`  
[nodemon] watching: *.*  
[nodemon] starting `node server.js`  
Listening on port 8080  
[nodemon] restarting due to changes...  
[nodemon] starting `node server.js`  
Listening on port 8080  
{ description: 'Do 10 minutes meditation every day',  
 successes: [],  
 failures: [],  
 _id: 'ScfixKjsOqz9xBo5',  
 createdAt: Fri Mar 18 2016 22:10:58 GMT+0000 (UTC),  
 updatedAt: Fri Mar 18 2016 22:10:58 GMT+0000 (UTC) }</pre>

A new file called _goals.db_ should also have been created.

<pre name="6e6d" id="6e6d" class="graf graf--pre graf-after--p">$ ls   
goals.db  node_modules/  package.json  server.js</pre>

And it should contain the goal that just got saved.

<pre name="b07a" id="b07a" class="graf graf--pre graf-after--p">$ less goals.db  
{"description":"Do 10 minutes meditation every day","_id":"ScfixKjsOqz9xBo5","createdAt":{"$date":1458339058282},"updatedAt":{"$date":1458339058282}}</pre>

Note that the fields **__id_**, **_createdAt_** and **_updatedAt_** have been filled in automatically by NeDB because we set up the Datastore with the option **_timestampData_** set to _true._

### 4\. Building a RESTful API

Next, let’s build a RESTful API for the application. In a nutshell, this means that we want to use **HTTP verbs** and URIs in order to allow the client to perform [**CRUD**](http://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations (Create, Read, Update and Delete). These operations are also usually going to send back data to the client.

In CRUD terms we can :

*   **Create** data with **POST**,
*   **Read** data with **GET**,
*   **Update** data with [**PUT** or **PATCH**](http://williamdurand.fr/2014/02/14/please-do-not-patch-like-an-idiot/),
*   **Delete** data with **DELETE**.

The HTTP verbs that we are going to use in this post are POST, GET and DELETE.

#### Our API

Here is a table showing the routes that we are going to set up, how they will be accessed (i.e. with which HTTP Verb) and what each one makes possible:



![](https://cdn-images-1.medium.com/max/1600/1*8KehmekfVxgjtJerJhVbIg.png)



If you want to learn more about RESTful APIs, you could check out [_Designing a RESTful Web API_](https://scotch.io/bar-talk/designing-a-restful-web-api) by Mathias Hansen or [_Using HTTP Methods for RESTful Services_](http://www.restapitutorial.com/lessons/httpmethods.html).

#### Testing the API

We are going to test the API manually in the terminal using [curl](https://github.com/curl/curl). If you are not on Android and would rather like to use a GUI to test the API, you could use [POSTMAN](https://www.getpostman.com/).

Let see a first example of how to use curl. Make sure the server is running, open another terminal (in Termux swipe to the right from the left border and click on _new session_) and type:

<pre name="1278" id="1278" class="graf graf--pre graf-after--p">$ curl -X GET "[http://localhost:8080](http://localhost:8080)"</pre>

This should print to the console what we got in the browser window earlier on, that is: _Our first route is working. :)_

We will now add code to _server.js_ bits by bits. In case you would rather like to see the ‘big’ picture first you can head over to [the final server.js file](https://gist.github.com/aurerua/6679d82cc9939247ffa7).

#### Body-parser

To handle the requests that the server receives, we are going to install [body-parser](https://github.com/expressjs/body-parser). It processes the incoming requests and makes it easier for us to access the relevant parts.

<pre name="e2e7" id="e2e7" class="graf graf--pre graf-after--p">npm install body-parser --save</pre>

Add the body-parser setup code to the top of _server.js_ (e.g. right after the setup of the port number):





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/59ff81d4f5304403959d3af7946365d7?postId=ced04caea7bb" data-media-id="59ff81d4f5304403959d3af7946365d7" allowfullscreen="" frameborder="0"></iframe>





#### Getting all the goals





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/e1d2f23d192164d608674472eaa4ab1a?postId=ced04caea7bb" data-media-id="e1d2f23d192164d608674472eaa4ab1a" allowfullscreen="" frameborder="0"></iframe>





If the server receives a **GET** request at **_/goals_**, the callback will be executed and the database will be queried with **_db.find({})_**. Here the object passed to _find()_ is empty. This means that no constraint is set to what we are looking for and all objects in the database should be returned.

Notice also that no callback has been specified to _find()_. Thus a Cursor object is returned, which can first be modified with **sort**, **skip** or **limit** before we use **_exec(callback)_** to finish the query. Here we are using **sort** to return the goals with the most recently updated ones at the top (i.e. the ones with the ‘greater’ date of last update).

If everything went well, the result of the query (in our case an array of goals) is sent back to the client formatted as JSON. In case something went wrong and an error is produced, the error message is sent back to the client instead.

Let us test if it works:

<pre name="adfa" id="adfa" class="graf graf--pre graf-after--p">$ curl -X GET "[http://localhost:8080/goals/](https://goals-tracker-aurerua-1.c9users.io/goals/)"</pre>

This should print to the console an array containing the goal we saved to the database earlier on.

#### Creating a goal





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c6e2189e0d8d756b7f6281df759b2c07?postId=ced04caea7bb" data-media-id="c6e2189e0d8d756b7f6281df759b2c07" allowfullscreen="" frameborder="0"></iframe>





**_req.body_** contains key-value pairs of data that was submitted in the request body. By default, it is undefined and it gets populated by the [_body-parser_](https://www.npmjs.org/package/body-parser) middleware. In our case the request should contain a key-value pair whose key is named ‘_description’_ and whose value is thus retrieved by using **_req.body.description_**.

So first, the goal we want to insert into the database is built from the request using _req.body.description_. Then it can be inserted into the database and if there was no error the response is sent back to the server as JSON.

Now let us try to POST a new goal using curl:

<pre name="ffa2" id="ffa2" class="graf graf--pre graf-after--p">$ curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "description=Read about functional programming every day" "[http://localhost:8080/goals/](https://goals-tracker-aurerua-1.c9users.io/goals/)"</pre>

This should print the JSON representation of the goal that has been sent back to the client.

We post the data as _x-www-form-urlencoded_. This sends the data as query strings that are parsed by the _body-parser_.

#### Getting a goal using its id





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/51ce6e42062eb599014ec3fce28022ad?postId=ced04caea7bb" data-media-id="51ce6e42062eb599014ec3fce28022ad" allowfullscreen="" frameborder="0"></iframe>





**_req.params_** is an object containing properties mapped to the route “parameters”. Here it enables us to access the value of the goal’s id, which is supposed to come after _/goals/_ in the URL in the request. For this to work, we have to use a colon in the URI in front of the property that we want to access with _req.params_.

Apart from the fact that we are using _findOne(…)_ instead of _find(…)_, nothing new here. So let’s test it. For this, you might check what got printed to the console after we saved a new goal using POST and use its _“_id”_ value. Here is my command with the id I got:

<pre name="74f4" id="74f4" class="graf graf--pre graf-after--p">$ curl -X GET "[http://localhost:8080/goals/JJtcFVQnoAxW7KXc](http://localhost:8080/goals/JJtcFVQnoAxW7KXc)"</pre>

This should print to the console the goal with the given id.

#### Deleting a goal using its id





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b4f753607038a486b030c22234423320?postId=ced04caea7bb" data-media-id="b4f753607038a486b030c22234423320" allowfullscreen="" frameborder="0"></iframe>





We use _remove(…)_ to delete a goal from the database. If the deletion is successful, the response is sent with the HTTP status code 200 ([200 means that the deletion was successful](http://www.restapitutorial.com/lessons/httpmethods.html)).

### Wrapping it up

We have set up a server with Express and NeDB, and built a REST API. What we are still missing is a front-end and a bit of wiring.

This next step could take us down many different roads: Would we opt for a template engine and if yes which one? Bootstrap or a similar framework? Angular, React, Aurelia? The list just goes on and on.

In case you would like to have a look at a minimal implementation of a front-end — and maybe play around with it in your browser — you can see the code of a possible solution I have been implementing using [Handlebars](http://handlebarsjs.com/), [Material Design Lite](https://www.getmdl.io/) and the [fetch API](https://developers.google.com/web/updates/2015/03/introduction-to-fetch) by visiting [its repo on GitHub](https://github.com/aurerua/goals-tracker.git) or by cloning it:

<pre name="6470" id="6470" class="graf graf--pre graf-after--p">$ git clone --branch rest-and-view [https://github.com/aurerua/goals-tracker.git](https://github.com/aurerua/goals-tracker.git) --depth 1</pre>

#### Going further

The back-end that we have built still raises the question: how should the code be split into different files and folders for better modularity and maintainability?

In case you’re curious, I have also been writing [another version of the app](https://github.com/aurerua/goals-tracker-mvc.git) that uses a Model-View-Controller folder structure. Feel free to have a look:

<pre name="b25b" id="b25b" class="graf graf--pre graf-after--p">$ git clone [https://github.com/aurerua/goals-tracker-mvc.git](https://github.com/aurerua/goals-tracker.git)</pre>

And if you have any question or feedback, do not hesitate to contact me!








