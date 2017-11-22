---
author: Scott Domes
authorTwitter: https://twitter.com/scottdomes
authorFacebook: https://facebook.com/504870381
title: "Build a Node.js API in Under 30 Minutes"
subTitle: "Node.js can be intimidating to beginners. But its flexible structure and lack of strict guidelines makes it seem more complicated than it..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*s5LVdcugM62xzSvGUpTLWA.png
url: https://medium.freecodecamp.org/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2
id: building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2
date: 2017-01-10T16:40:30.294Z
tags: [
  "Nodejs",
  "JavaScript",
  "Web Development",
  "Programming",
  "API"
]
---
# Build a Node.js API in Under 30 Minutes

Node.js can be intimidating to beginners. But its flexible structure and lack of strict guidelines makes it seem more complicated than it is.

This tutorial is a quick and simple guide to Node.js, the Express framework, and MongoDB, focusing on the fundamental REST routes and basic database interaction. You’ll build a simple API boilerplate that can then be used as the foundation for any app.

**Who This Tutorial Is For**: You should have a basic understanding of REST APIs and CRUD operations, plus basic JavaScript knowledge. I use ES6 (mainly fat-arrow functions), but nothing too complex.

For this tutorial, you’ll create the skeleton of a back-end for a note-taking application — think [Google Keep](http://keep.google.com). You want to be able to do all four CRUD actions on your notes: create, read, update, and delete.

### Setting Up

If you don’t have Node installed, [see here](https://howtonode.org/how-to-install-nodejs).

In a new directory, run npm init, and follow along with the prompts, giving your app the name of ‘notable’ (or whatever else you might like).

<pre name="9d6a" id="9d6a" class="graf graf--pre graf-after--p">npm init</pre>

Once that’s done, you should have a _package.json_ ready to go in your directory. This means you can start installing the dependencies you need for your project.

You’re going to use Express as your framework, MongoDB as the database, and a package called body-parser to help deal with JSON requests.

<pre name="11e0" id="11e0" class="graf graf--pre graf-after--p">npm install --save express mongodb body-parser</pre>

I also highly recommend installing Nodemon as a dev dependency. It’s a simple little package that automatically restarts your server when files change.

If you run:

    npm install --save-dev nodemon

You can then add the following script to _package.json_:

<pre name="8b49" id="8b49" class="graf graf--pre graf-after--p">// package.json</pre>

<pre name="1f30" id="1f30" class="graf graf--pre graf-after--pre">  "scripts": {  
    "dev": "nodemon server.js"  
  },</pre>

Your complete _package.json_ should look like this:

<pre name="771f" id="771f" class="graf graf--pre graf-after--p">// package.json</pre>

<pre name="f3db" id="f3db" class="graf graf--pre graf-after--pre">{  
  "name": "notable",  
  "version": "1.0.0",  
  "description": "",  
  "main": "server.js",  
  "scripts": {  
    "dev": "nodemon server.js"  
  },  
  "author": "",  
  "license": "ISC",  
  "dependencies": {  
    "body-parser": "^1.15.2",  
    "express": "^4.14.0",  
    "mongodb": "^2.2.16"  
  },  
  "devDependencies": {  
    "nodemon": "^1.11.0"  
  }  
}</pre>

Now you can create your _server.js_ fileand start building your API.

### Our Server

Let’s start by requiring all your dependencies in _server.js._

<pre name="d7ba" id="d7ba" class="graf graf--pre graf-after--p">// server.js</pre>

<pre name="280f" id="280f" class="graf graf--pre graf-after--pre">const express        = require('express');  
const MongoClient    = require('mongodb').MongoClient;  
const bodyParser     = require('body-parser');</pre>

<pre name="f5b9" id="f5b9" class="graf graf--pre graf-after--pre">const app            = express();</pre>

You’re going to use the MongoClient to interact with your database. Note that you also initialize your app as an instance of Express, your framework.

The last thing you need to do to get your server up and running is to tell your app to start _listening_ for HTTP requests.

You can specify a port, and start the listening like so:

<pre name="3025" id="3025" class="graf graf--pre graf-after--p">// server.js</pre>

<pre name="f66b" id="f66b" class="graf graf--pre graf-after--pre">const port = 8000;</pre>

<pre name="70b3" id="70b3" class="graf graf--pre graf-after--pre">app.listen(port, () => {  
  console.log('We are live on ' + port);  
});</pre>

Now if you run _npm run dev_ (or _node server.js_ if you didn’t install Nodemon) you should see ‘We are live on port 8000’ in the terminal.

Your server is live. But it doesn’t do a whole lot. Or anything, really.

Let’s fix that.

### CRUDdy Routes

For this example, you want to build 4 routes; to CREATE a note, to READ your notes, to UPDATE a note, and to DELETE a note.

This will give you a good idea of how to structure almost any basic route with Node.

To test your API, though, you need to mimic a client side making requests. To do so, you’ll use a great app called [Postman](https://www.getpostman.com/). It allows you to make simple HTTP requests with custom bodies and parameters.

Install Postman, and let’s start setting up your routes.

### Super Organized

Most Node.js tutorials (and many real apps) put all their routes in one big _routes.js_ file. This makes me a wee bit uncomfortable. In contrast, splitting up your files into separate folders leads to good readability, and makes big apps more manageable.

You don’t have a big app, but let’s do this right. Make the following directories: an _app_ folder with a routes folder inside it, with an _index.js_ and a _note_routes.js_ file inside it.

In other words: root > app > routes > index.js and note_routes.js.

<pre name="e3d0" id="e3d0" class="graf graf--pre graf-after--p">mkdir app  
cd app  
mkdir routes  
cd routes  
touch index.js  
touch note_routes.js</pre>

These directories may seem like overkill for your simple small app, but it’s always good to start with best practices.

### Your First Route

Let’s start with the C in CRUD- create. How would you create a note?

Well, before you do that, you have to build a bit more infrastructure. In Express, routes are wrapped in a function, which takes the Express instance and a database as arguments.

Like this:

<pre name="9a98" id="9a98" class="graf graf--pre graf-after--p">// routes/note_routes.js</pre>

<pre name="4008" id="4008" class="graf graf--pre graf-after--pre">module.exports = function(app, db) {</pre>

<pre name="ff81" id="ff81" class="graf graf--pre graf-after--pre">};</pre>

You can then export this function through your _index.js_:

<pre name="e5c9" id="e5c9" class="graf graf--pre graf-after--p">// routes/index.js</pre>

<pre name="b5ea" id="b5ea" class="graf graf--pre graf-after--pre">const noteRoutes = require('./note_routes');</pre>

<pre name="f048" id="f048" class="graf graf--pre graf-after--pre">module.exports = function(app, db) {  
  noteRoutes(app, db);  
  // Other route groups could go here, in the future  
};</pre>

Then import it for use in _server.js:_

<pre name="85f2" id="85f2" class="graf graf--pre graf-after--p">// server.js</pre>

<pre name="1063" id="1063" class="graf graf--pre graf-after--pre">const express        = require('express');  
const MongoClient    = require('mongodb').MongoClient;  
const bodyParser     = require('body-parser');</pre>

<pre name="96c6" id="96c6" class="graf graf--pre graf-after--pre">const app            = express();</pre>

<pre name="4b6b" id="4b6b" class="graf graf--pre graf-after--pre">const port = 8000;</pre>

<pre name="b857" id="b857" class="graf graf--pre graf-after--pre">**require('./app/routes')(app, {});** app.listen(port, () => {  
  console.log('We are live on ' + port);  
});</pre>

Note that since you don’t have a database yet set up, you’re just passing in an empty object.

Okay, _now_ you can make your CREATE route.

The syntax is simple:

<pre name="0c1a" id="0c1a" class="graf graf--pre graf-after--p">// note_routes.js</pre>

<pre name="2082" id="2082" class="graf graf--pre graf-after--pre">module.exports = function(app, db) {  
 **app.post('/notes', (req, res) => {  
    // You'll create your note here.  
    res.send('Hello')  
  });**  
};</pre>

When the app receives a _post_ request to the ‘/notes’ path, it will execute the code inside the callback- passing in a request object (which contains the parameters or JSON of the request) and a response object (used to reply).

You can test this by using Postman to send a POST request to localhost:8000/notes.



![](https://cdn-images-1.medium.com/max/1600/1*pqIRP6BQSrVCCc6XVPZxPg.png)

You should get the ‘Hello’ back.



Nice! You created your first real route.

Next step is to add some parameters to your request and process them in your API and, finally, add in your database.

### Request Parameters

In Postman, go to the Body tab and add some key-value pairs, after selecting the _x-www-form-urlencoded_ radio button.

This will add encoded form data to your request, which you’ll be able to process with your API.



![](https://cdn-images-1.medium.com/max/1600/1*z2mIHYqGFYhSJv0x2_caqg.png)

You can try being more creative than me.



Now in your _note_routes.js_, let’s just log out the body.

<pre name="99ec" id="99ec" class="graf graf--pre graf-after--p">// note_routes.js</pre>

<pre name="9958" id="9958" class="graf graf--pre graf-after--pre">module.exports = function(app, db) {  
  app.post('/notes', (req, res) => {  
 **console.log(req.body)**    res.send('Hello')  
  });  
};</pre>

Try sending the Postman request and you’ll see… undefined.

Unfortunately, Express can’t process URL encoded forms on its own. But you did install that body-parser package…

<pre name="8857" id="8857" class="graf graf--pre graf-after--p">// server.</pre>

<pre name="06ff" id="06ff" class="graf graf--pre graf-after--pre">const express        = require('express');  
const MongoClient    = require('mongodb').MongoClient;  
const bodyParser     = require('body-parser');</pre>

<pre name="fe54" id="fe54" class="graf graf--pre graf-after--pre">const app            = express();</pre>

<pre name="b9f1" id="b9f1" class="graf graf--pre graf-after--pre">const port = 8000;</pre>

<pre name="730f" id="730f" class="graf graf--pre graf-after--pre">**app.use(bodyParser.urlencoded({ extended: true }));**</pre>

<pre name="3dcf" id="3dcf" class="graf graf--pre graf-after--pre">require('./app/routes')(app, {});  
app.listen(port, () => {  
  console.log('We are live on ' + port);  
});</pre>

Now you should see the body as an object in the terminal.

<pre name="2585" id="2585" class="graf graf--pre graf-after--p">{ title: 'My Note Title', body: 'What a great note.' }</pre>

Last step to your preliminary route: set up the database, and then add your data in.

The easiest way to set up a Mongo database is through [mLab](https://mlab.com/): it’s free for the smallest size, and quite fast to setup.

Once you create an account and a MongoDB deployment, add a user to the database with a username and password:



![](https://cdn-images-1.medium.com/max/1600/1*E5ws9QPkraXVwigcdW86nw.png)



then grab the URL here (the second one):



![](https://cdn-images-1.medium.com/max/1600/1*kJMlsvyB11W73cO-CioxxA.png)



And in a directory config in the root of your project, create a db.js file.

<pre name="ef25" id="ef25" class="graf graf--pre graf-after--p">mkdir config   
cd config  
touch db.js</pre>

Inside, add the URL:

<pre name="72b3" id="72b3" class="graf graf--pre graf-after--p">module.exports = {  
  url : YOUR URL HERE  
};</pre>

Don’t forget to add your username and password (the ones from the database user, not your mLab account) into the URL. (If you’re committing this project to Github, be sure to include a .gitignore file [like so](https://github.com/scottdomes/notable-node-api-tutorial/blob/master/.gitignore), so you don’t share your password with everyone.)

Now in your _server.js_, you can use the MongoClient to connect to your DB, and use this to wrap your app setup:

<pre name="5d8a" id="5d8a" class="graf graf--pre graf-after--p">// server.js</pre>

<pre name="2da5" id="2da5" class="graf graf--pre graf-after--pre">const express        = require('express');  
const MongoClient    = require('mongodb').MongoClient;  
const bodyParser     = require('body-parser');  
**const db             = require('./config/db');**</pre>

<pre name="e700" id="e700" class="graf graf--pre graf-after--pre">const app            = express();</pre>

<pre name="bfd6" id="bfd6" class="graf graf--pre graf-after--pre">const port = 8000;</pre>

<pre name="32ce" id="32ce" class="graf graf--pre graf-after--pre">app.use(bodyParser.urlencoded({ extended: true }));</pre>

<pre name="c42a" id="c42a" class="graf graf--pre graf-after--pre">**MongoClient.connect(db.url, (err, database) => {  
  if (err) return console.log(err)  
  require('./app/routes')(app, database);**</pre>

<pre name="a25b" id="a25b" class="graf graf--pre graf-after--pre"> **app.listen(port, () => {  
    console.log('We are live on ' + port);  
  });                 
})**</pre>

That’s the last of your infrastructure setup! It’s all route-building from here.

### Adding to your Database

MongoDB stores data in _collections_- which are exactly how they sound. In your case, you want to store your notes in a collection called — you guessed it — notes.

Since you pass in your database as the _db_ argument in your routes, you can then access it like so:

<pre name="d1c8" id="d1c8" class="graf graf--pre graf-after--p">db.collection('notes')</pre>

Creating a note is as simple as calling _insert_ on your collection:

<pre name="4d3b" id="4d3b" class="graf graf--pre graf-after--p">const note = { text: req.body.body, title: req.body.title}  
  db.collection('notes').insert(note, (err, results) => {  
}</pre>

Once the insert is complete (or has failed for whatever reason), you want to either send back an error or send back the newly created note object. Here’s the full _note_routes.js:_

<pre name="d483" id="d483" class="graf graf--pre graf-after--p">// note_routes.js</pre>

<pre name="a886" id="a886" class="graf graf--pre graf-after--pre">module.exports = function(app, db) {  
  app.post('/notes', (req, res) => {  
    const note = { text: req.body.body, title: req.body.title };  
    db.collection('notes').insert(note, (err, result) => {  
 **if (err) {   
        res.send({ 'error': 'An error has occurred' });   
      } else {  
        res.send(result.ops[0]);  
      }**  
    });  
  });  
};</pre>

Try it out! Send an x-www-form-urlencoded POST request with Postman, with a _title_ and _body_ set under the Body tab.

The response should look like this:



![](https://cdn-images-1.medium.com/max/1600/1*YcGwoqOpRkQEo-N0W_-WEA.png)



If you log into mLab, you should also see the created note in the database.

### Your READ Route

Now you can pick up the pace a bit.

Say you wanted to get back the note you just created, by navigating to localhost:8000/notes/{the id}. In this case, that would be localhost:8000/notes/585182bd42ac5b07a9755ea3.

(If you don’t have the ID for one of your notes, you can check on mLab or just create a new one).

Here’s what this would look like in _note_routes.js_:

<pre name="91ce" id="91ce" class="graf graf--pre graf-after--p">// note_routes.js</pre>

<pre name="bfb9" id="bfb9" class="graf graf--pre graf-after--pre">module.exports = function(app, db) {  
 **app.get('/notes/:id', (req, res) => {  

  });**</pre>

<pre name="ce6c" id="ce6c" class="graf graf--pre graf-after--pre">  app.post('/notes', (req, res) => {  
    const note = { text: req.body.body, title: req.body.title };  
    db.collection('notes').insert(note, (err, result) => {  
      if (err) {   
        res.send({ 'error': 'An error has occurred' });   
      } else {  
        res.send(result.ops[0]);  
      }  
    });  
  });  
};</pre>

Just like before, you’re going to call a method on your database collection of notes. Here, it’s the aptly named findOne.

<pre name="af4f" id="af4f" class="graf graf--pre graf-after--p">// note_routes.js</pre>

<pre name="2ae7" id="2ae7" class="graf graf--pre graf-after--pre">module.exports = function(app, db) {  
  app.get('/notes/:id', (req, res) => {  
 **const details = { '_id': <ID GOES HERE> };  
    db.collection('notes').findOne(details, (err, item) => {  
      if (err) {  
        res.send({'error':'An error has occurred'});  
      } else {  
        res.send(item);  
      }  
    });**  });</pre>

<pre name="a454" id="a454" class="graf graf--pre graf-after--pre">app.post('/notes', (req, res) => {  
    const note = { text: req.body.body, title: req.body.title };  
    db.collection('notes').insert(note, (err, result) => {  
      if (err) {   
        res.send({ 'error': 'An error has occurred' });   
      } else {  
        res.send(result.ops[0]);  
      }  
    });  
  });  
};</pre>

You can grab the id from the URL parameters via _req.params.id_. However, if you try to just plop in the string into the <> above, it won’t work.

MongoDB requires not just an ID as a _string_, but as an ID _object_ or, as they call it, an ObjectID.

Don’t worry, it’s an easy fix. Here’s the full code:

<pre name="902c" id="902c" class="graf graf--pre graf-after--p">// note_routes.js</pre>

<pre name="2bfc" id="2bfc" class="graf graf--pre graf-after--pre">**var ObjectID = require('mongodb').ObjectID;**</pre>

<pre name="bd0d" id="bd0d" class="graf graf--pre graf-after--pre">module.exports = function(app, db) {  
  app.get('/notes/:id', (req, res) => {  
 **const id = req.params.id;  
    const details = { '_id': new ObjectID(id) };**    db.collection('notes').findOne(details, (err, item) => {  
      if (err) {  
        res.send({'error':'An error has occurred'});  
      } else {  
        res.send(item);  
      }   
    });  
  });</pre>

<pre name="4dd4" id="4dd4" class="graf graf--pre graf-after--pre">app.post('/notes', (req, res) => {  
    const note = { text: req.body.body, title: req.body.title };  
    db.collection('notes').insert(note, (err, result) => {  
      if (err) {   
        res.send({ 'error': 'An error has occurred' });   
      } else {  
        res.send(result.ops[0]);  
      }  
    });  
  });  
};</pre>

Try it out with one of your note ID’s, and it should look like this:



![](https://cdn-images-1.medium.com/max/1600/1*C18DVEZFNx6MCQby_VtWKg.png)



### Your DELETE Route

Deleting an object is actually pretty much the same as finding an object. You just use the _remove_ function instead of the _findOne_. Here’s the full code. I’ve highlighted what’s different from your GET:

<pre name="1620" id="1620" class="graf graf--pre graf-after--p">// note_routes.js</pre>

<pre name="cd9a" id="cd9a" class="graf graf--pre graf-after--pre">// ...</pre>

<pre name="6f32" id="6f32" class="graf graf--pre graf-after--pre">  app.**delete**('/notes/:id', (req, res) => {  
    const id = req.params.id;  
    const details = { '_id': new ObjectID(id) };  
    db.collection('notes').**remove**(details, (err, item) => {  
      if (err) {  
        res.send({'error':'An error has occurred'});  
      } else {  
 **res.send('Note ' + id + ' deleted!');**      }   
    });  
  });</pre>

<pre name="2665" id="2665" class="graf graf--pre graf-after--pre">// ...</pre>

### **Your UPDATE Route**

Last one! The PUT is basically a hybrid between READ and CREATE. You find the object, then update it accordingly. If you deleted your only note, time to make another one!

The code:

<pre name="fb09" id="fb09" class="graf graf--pre graf-after--p">// note_routes.js</pre>

<pre name="0f43" id="0f43" class="graf graf--pre graf-after--pre">// ...</pre>

<pre name="6027" id="6027" class="graf graf--pre graf-after--pre">  app.**put**('/notes/:id', (req, res) => {  
 **const id = req.params.id;  
    const details = { '_id': new ObjectID(id) };  
    const note = { text: req.body.body, title: req.body.title };  
    db.collection('notes').update(details, note, (err, result) => {**      if (err) {  
          res.send({'error':'An error has occurred'});  
      } else {  
          res.send(note);  
      }   
    });  
  });</pre>

<pre name="b1c8" id="b1c8" class="graf graf--pre graf-after--pre">// ...</pre>

Now you can update any of your notes, like so:



![](https://cdn-images-1.medium.com/max/1600/1*LZ1DzuxzAJAyNYjO4sZcmg.png)



Note the imperfection with this code- if you fail to supply a body or title, the PUT request will nullify those fields on the note in the database.

You could easily add some conditional logic to update the fields only if they’re present in the request- I left that out just to keep it simple.

### API Complete

That’s it! You have a working Node API with each of the four major CRUD operations.

The goal of this tutorial was to give you a degree of familiarity with Express, Node, and MongoDB — you can use your simple app as a launching pad for more complex projects.

In the future I’ll be writing tutorials to create more simple API’s in different languages and frameworks. Hit the follow button if you’re interested!

If this tutorial was any help to you, please hit the green heart below- it means a lot. Feel free to also leave me a comment with any feedback or questions.

Thanks for reading!








