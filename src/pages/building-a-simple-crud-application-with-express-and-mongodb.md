---
author: Zell Liew
authorTwitter: https://twitter.com/zellwk
authorFacebook: none
title: "Building a Simple CRUD Application with Express and MongoDB"
subTitle: "For a long time, I didn’t dare venture into back end development. I felt intimidated because of my lack of an academic background in prog..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*umzW9eAqELBCuo458Rzdcw.jpeg
url: https://medium.freecodecamp.org/building-a-simple-crud-application-with-express-and-mongodb-63f80f3eb1cd
id: building-a-simple-crud-application-with-express-and-mongodb-63f80f3eb1cd
date: 2016-01-26T06:50:38.164Z
tags: [
  "Nodejs",
  "Web Development",
  "Education",
  "Programming",
  "Learning To Code"
]
---
# Building a Simple CRUD Application with Express and MongoDB







![](https://cdn-images-1.medium.com/max/2000/1*umzW9eAqELBCuo458Rzdcw.jpeg)







For a long time, I didn’t dare venture into back end development. I felt intimidated because of my lack of an academic background in programming.

I remember when I eventually built up the courage to try back end development. I had such a hard time understanding the documentation for Express, MongoDB, and Node.js that I gave up.

I eventually went back and worked through my confusion. Now, one year later, I understood how to work with these tools. So, I decided to write this comprehensive tutorial so you won’t have to go through the same headache that I went through.

### CRUD, Express and MongoDB

CRUD, Express and MongoDB are big words for a person who has never touched any server-side programming in their life. Let’s quickly introduce what they are before we diving into the tutorial.

[**Express**](http://www.google.com/) is a framework for building web applications on top of Node.js. It simplifies the server creation process that is already available in Node. In case you were wondering, Node allows you to use JavaScript as your server-side language.

[**MongoDB**](https://www.mongodb.org/) is a database. This is the place where you store information for your web websites (or applications).

[**CRUD**](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) is an acronym for Create, Read, Update and Delete. It is a set of operations we get servers to execute (POST, GET, PUT and DELETE respectively). This is what each operation does:

*   **Create (POST)** — Make something
*   **Read (GET)**_- Get something
*   **Update (PUT)** — Change something
*   **Delete (DELETE)**– Remove something

If we put CRUD, Express and MongoDB together into a single diagram, this is what it would look like:



![](https://cdn-images-1.medium.com/max/1600/0*UKwrPtpRSGFiDomm.png)



Does CRUD, Express and MongoDB makes more sense to you now?

Great. Let’s move on.

### What we’re building

We’re going to build an application simple list application that allows you to keep track of things within a list (like a Todo List for example).

Well, a todo list is kind of boring. How about we make a list of quotes from Star wars characters instead? Awesome, isn’t it? Feel free to take a quick look at the [demo](https://crud-express-mongo.herokuapp.com/) before continuing with the tutorial. Also, [this is where](https://github.com/zellwk/crud-express-mongo) you can find the finished code for the application.

By the way, what we’re building isn’t a sexy single page app. We’re mainly focusing on how to use CRUD, Express and Mongo DB in this tutorial, so, more server-side stuff. I’m not going to emphasize style.

You’ll need two things to get started with this tutorial:

1.  You shouldn’t be afraid of typing commands into a shell. Check out [this article](http://www.zell-weekeat.com/fear-of-command-line/) if you currently are.
2.  You need to have [Node](https://nodejs.org/) installed.

To check if you have Node installed, open up your command line and run the following code:

<pre name="da04" id="da04" class="graf graf--pre graf-after--p">$ node -v</pre>

You should get a version number if you have Node installed. If you don’t, you can install Node either by downloading the installer from [Node’s website](https://nodejs.org/) or downloading it through package managers like [Homebrew](http://brew.sh/) (Mac) and [Chocolatey](https://chocolatey.org/) (Windows).

### Getting started

Start by creating a folder for this project. Feel free to call it anything you want. Once you navigate into it, run the npm init command.

This command creates a package.json file which helps you manage dependencies that we install later in the tutorial.

<pre name="a8da" id="a8da" class="graf graf--pre graf-after--p">$ npm init</pre>

Just hit enter through everything that appears. I’ll talk about the ones you need to know as we go along.

### Running Node for the first time in your life

The simplest way to use node is to run the node command, and specify a path to a file. Let’s create a file called server.js to run node with.

<pre name="acec" id="acec" class="graf graf--pre graf-after--p">$ touch server.js</pre>

When the execute the server.js file, we want to make sure it’s running properly. To do so, simply write a console.log statement in server.js:

<pre name="d506" id="d506" class="graf graf--pre graf-after--p">console.log('May Node be with you')</pre>

Now, run node server.js in your command line and you should see the statement you logged:



![](https://cdn-images-1.medium.com/max/1600/0*82cfsJUuV4b0Mmn2.png)



Great. Let’s move on and learn how to use Express now.

### Using Express

We first have to install Express before we can use it in our application. Installing Express is pretty easy. All we have to do is run an install command with Node package manager (npm),which comes bundled with Node.

Run the npm install express — save command in your command line:

<pre name="3c0d" id="3c0d" class="graf graf--pre graf-after--p">$ npm install express --save</pre>

Once you’re done, you should see that npm has saved Express as a dependency in package.json.



![](https://cdn-images-1.medium.com/max/1600/0*WQ2iauA--9SEqja3.png)



Next, we use express in server.js by requiring it.

<pre name="6301" id="6301" class="graf graf--pre graf-after--p">const express = require('express');  
const app = express();</pre>

The first thing we want to do is to create a server where browsers can connect to. We can do so with the help of a listen method provided by Express:

<pre name="6165" id="6165" class="graf graf--pre graf-after--p">app.listen(3000, function() {  
  console.log('listening on 3000')  
})</pre>

Now, run node server.js and navigate to localhost:3000 on your browser. You should see a message that says “cannot get /”.



![](https://cdn-images-1.medium.com/max/1600/0*HuIZ1G3D7TMPjbdU.png)



That’s a good sign. It means **we can now communicate to our express server through the browser**. This is where we begin CRUD operations.

### CRUD — READ

The **READ** operation is performed by browsers whenever you visit a webpage. Under the hood, browsers sends a **GET** request to the server to perform a READ operation. The reason we see the “cannot get /” error is because we have yet to send anything back to the browser from our server.

In Express, we handle a **GET** request with the get method:

<pre name="bd65" id="bd65" class="graf graf--pre graf-after--p">app.get(path, callback)</pre>

**The first argument, path**, is the path of the GET request. It’s anything that comes after your domain name.

When we’re visiting localhost:3000, our browsers are actually looking for localhost:3000/. The path argument in this case is /.

**The second argument is a callback function** that tells the server what to do when the path is matched. It takes in two arguments, a request object and a response object:

<pre name="651b" id="651b" class="graf graf--pre graf-after--p">app.get('/', function (request, response) {  
  // do something here  
})</pre>

For now, let’s write “Hello World” back to the browser. We do so by using a send method that comes with the response object:

<pre name="24cd" id="24cd" class="graf graf--pre graf-after--p">app.get('/', function(req, res) {  
  res.send('Hello World')  
})  
// Note: request and response are usually written as req and res respectively.</pre>

I’m going to start writing in ES6 code and show you how to convert to ES6 along the way as well. First off, I’m replacing the function() with the [ES6 arrow function](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions). The below code is the same as the above code:

<pre name="f0f2" id="f0f2" class="graf graf--pre graf-after--p">app.get('/', (req, res) => {  
  res.send('hello world')  
})</pre>

Now, restart your server by doing the following:

1.  Stop the current server by hitting CTRL + C in the command line.
2.  Run node server.js again.

Then, navigate to localhost:3000 on your browser. You should be able to see a string that says “Hello World”.



![](https://cdn-images-1.medium.com/max/1600/0*jBDbdhi2v2N82RvP.png)



Great. Let’s change our app so we serve an index.html page back to the browser instead. To do so, we use the sendFile method that’s provided by the res object.

<pre name="dd69" id="dd69" class="graf graf--pre graf-after--p">app.get('/', (req, res) => {  
  res.sendFile(__dirname + '/index.html')  
  // Note: __dirname is the path to your current working directory. Try logging it and see what you get!   
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.  
})</pre>

In the sendFile method above, we told Express to serve an index.html file that can be found in the root of your project folder. We don’t have that file yet. Let’s make it now.

<pre name="c709" id="c709" class="graf graf--pre graf-after--p">touch index.html</pre>

Let’s put some text in our index.html file as well:

<pre name="02f8" id="02f8" class="graf graf--pre graf-after--p"><!DOCTYPE html>  
<html lang="en">  
<head>  
  <meta charset="UTF-8">  
  <title>MY APP</title>  
</head>  
<body>  
  May Node and Express be with you.     
</body>  
</html></pre>

Restart your server and refresh your browser. You should be able to see the results of your HTML file now.



![](https://cdn-images-1.medium.com/max/1600/0*oisDzT819Ex3FtDs.png)



This is how Express handles a **GET** request (**READ** operation) in a nutshell.

At this point, you probably have realized that you need to restart your server whenever you make a change to server.js. This is process is incredibly tedious, so let’s take a quick detour and streamline it by using a package called [nodemon](http://nodemon.io/).

### Enter Nodemon

**Nodemon restarts the server automatically** whenever you save a file that the server uses. We can install Nodemon by using the following command:

<pre name="5547" id="5547" class="graf graf--pre graf-after--p">$ npm install nodemon --save-dev</pre>

Note: The reason we’re using a — save-dev flag here is because we’re only using Nodemon when we’re developing. This flag would save Nodemon as a devDependency in your package.json file.

Moving on, Nodemon behaves exactly the same as node, which means we can run our server by calling nodemon server.js. However, we can’t do it in the command line right now because Nodemon isn’t installed with a -g flag.

There’s one other way to run Nodemon — we can execute Nodemon from the node_modules folder. The code looks like this:

<pre name="d8e2" id="d8e2" class="graf graf--pre graf-after--p">$ ./node_modules/.bin/nodemon server.js</pre>

That’s a handful to type. One way to make it simpler is to create a script key in package.json.

<pre name="df0b" id="df0b" class="graf graf--pre graf-after--p">{  
  // ...   
  "scripts": {  
    "dev": "nodemon server.js"  
  }  
  // ...  
}</pre>

Now, you can run npm run dev to trigger nodemon server.js.

Back to the main topic. We’re going to cover the **CREATE** operation next.

### CRUD — CREATE

The **CREATE** operation is performed only by the browser if a **POST** request is sent to the server. This POST request can triggered either with JavaScript or through a <form> element.

Let’s find out how to use a <form> element to create new entries for our star wars quote app for this part of the tutorial.

To do so, you first have to create a <form> element and add it to your index.html file. You need to have three things on this form element:

1.  An action attribute
2.  a method attribute
3.  and name attributes on all <input> elements within the form

<pre name="5c54" id="5c54" class="graf graf--pre graf-after--li"><form action="/quotes" method="POST">  
  <input type="text" placeholder="name" name="name">  
  <input type="text" placeholder="quote" name="quote">  
  <button type="submit">Submit</button>  
</form></pre>

The action attribute tells the browser where to navigate to in our Express app. In this case, we’re navigating to /quotes. The method attribute tells the browser what to request to send. In this case, it’s a POST request.

On our server, we can handle this POST request with a post method that Express provides. It takes the same arguments as the GET method:

<pre name="4ce9" id="4ce9" class="graf graf--pre graf-after--p">app.post('/quotes', (req, res) => {  
  console.log('Hellooooooooooooooooo!')  
})</pre>

Restart your server (hopefully you’ve set up Nodemon so it restarts automatically) and refresh your browser. Then, enter something into your form element. You should be able to see Hellooooooooooooooooo! in your command line.



![](https://cdn-images-1.medium.com/max/1600/0*qsLmf8vEhBlhIfJj.png)



Great, we know that Express is handling the form for us right now. The next question is, how do we get the input values with Express?

Turns out, Express doesn’t handle reading data from the <form> element on it’s own. We have to add another package called [body-parser](https://www.npmjs.com/package/body-parser) to gain this functionality.

<pre name="115e" id="115e" class="graf graf--pre graf-after--p">$ npm install body-parser --save</pre>

Express allows us to add middlewares like body-parser to our application with the use method. You’ll hear the term middleware a lot when dealing with Express. These things are basically plugins that change the request or response object before they get handled by our application. **Make sure you place body-parser before your CRUD handlers!**

<pre name="3903" id="3903" class="graf graf--pre graf-after--p">const express = require('express')  
const bodyParser= require('body-parser')  
const app = express()</pre>

<pre name="79dc" id="79dc" class="graf graf--pre graf-after--pre">app.use(bodyParser.urlencoded({extended: true}))</pre>

<pre name="ef29" id="ef29" class="graf graf--pre graf-after--pre">// All your handlers here...</pre>

The urlencoded method within body-parser tells body-parser to extract data from the <form> element and add them to the body property in the request object.

Now, you should be able to see everything in the form field within the req.body object. Try doing a console.log and see what it is!

<pre name="c4f3" id="c4f3" class="graf graf--pre graf-after--p">app.post('/quotes', (req, res) => {  
  console.log(req.body)  
})</pre>

You should be able to get an object similar to the following in your command line:



![](https://cdn-images-1.medium.com/max/1600/0*cmNU6GQhNS7BYsLT.png)



Hmmm. Master Yoda has spoken! Let’s make sure we remember Yoda’s words. It’s important. We want to be able to retrieve it the next time we load our index page.

Enter the database, MongoDB.

### MongoDB

We first have to install MongoDB through npm if we want to use it as our database.

<pre name="f64c" id="f64c" class="graf graf--pre graf-after--p">npm install mongodb --save</pre>

Once installed, we can connect to MongoDB through the Mongo.Client‘s connect method as shown in the code below:

<pre name="301b" id="301b" class="graf graf--pre graf-after--p">const MongoClient = require('mongodb').MongoClient</pre>

<pre name="ad65" id="ad65" class="graf graf--pre graf-after--pre">MongoClient.connect('link-to-mongodb', (err, database) => {  
  // ... start the server  
})</pre>

The next part is to get the correct link to our database. Most people store their databases on cloud services like [MongoLab](https://mongolab.com/). We’re going to do same as well.

So, go ahead and create an account with MongoLab. (It’s free). Once you’re done, create a new MongoDB Deployment and set the plan to sandbox.



![](https://cdn-images-1.medium.com/max/1600/0*YujCEhVovfSgPH_j.png)



Once you’re done creating the deployment, head into it and create a database user and database password. **Remember the database user and database password** because you’re going to use it to connect the database you’ve just created.



![](https://cdn-images-1.medium.com/max/1600/0*pPeHMc1EqlQRAqKU.png)



Finally, grab the MongoDB url and add it to your MongoClient.connect method. Make sure you use your database user and password!



![](https://cdn-images-1.medium.com/max/1600/0*x5a1AplcCRyq712P.png)



<pre name="edf6" id="edf6" class="graf graf--pre graf-after--figure">MongoClient.connect('your-mongodb-url', (err, database) => {  
  // ... do something here  
})</pre>

Next, we want to start our servers only when the database is connected. Hence, let’s move app.listen into the connect method. We’re also going to create a db variable to allow us to use the database when we handle requests from the browser.

<pre name="e3d3" id="e3d3" class="graf graf--pre graf-after--p">var db</pre>

<pre name="78d2" id="78d2" class="graf graf--pre graf-after--pre">MongoClient.connect('your-mongodb-url', (err, database) => {  
  if (err) return console.log(err)  
  db = database  
  app.listen(3000, () => {  
    console.log('listening on 3000')  
  })  
})</pre>

We’re done setting up MongoDB. Now, let’s create a quotes collection to store quotes for our application.

By the way, **a collection is a named location to store stuff**. You can create as many collections as you want. It can be things like “products”, “quotes”, “groceries”, or any other labels you choose.

We can create the quotes collection by using the string quotes while calling MongoDB’s db.collection() method. While creating the quotes collection, we can also save our first entry into MongoDB with the save method simultaneously.

**Once we’re done saving, we have to redirect the user somewhere** (or they’ll be stuck waiting forever for our server to move). In this case, we’re going to redirect them back to /, which causes their browsers to reload.

<pre name="5399" id="5399" class="graf graf--pre graf-after--p">app.post('/quotes', (req, res) => {  
  db.collection('quotes').save(req.body, (err, result) => {  
    if (err) return console.log(err)</pre>

<pre name="d688" id="d688" class="graf graf--pre graf-after--pre">    console.log('saved to database')  
    res.redirect('/')  
  })  
})</pre>

Now, if you enter something into the <form> element, you’ll be able to see an entry in your MongoDB collection.



![](https://cdn-images-1.medium.com/max/1600/0*XEGKefxWJP6SlQpM.png)



Whoohoo! Since we already have some quotes in the collection, why not try showing them to our user when they land on our page?

### Showing quotes to users

We have to do two things to show the quotes stored in MongoLab to our users.

1.  Get quotes from MongoLab
2.  Use a template engine to display the quotes

Let’s go one step at a time.

We can get the quotes from MongoLab by using the find method that’s available in the collection method.

<pre name="9dc2" id="9dc2" class="graf graf--pre graf-after--p">app.get('/', (req, res) => {  
  var cursor = db.collection('quotes').find()  
})</pre>

The find method returns a cursor (A Mongo Object) that probably doesn’t make sense if you console.log it out.



![](https://cdn-images-1.medium.com/max/1600/0*IQHvKZ7Bd5mIlxT0.png)



The good news is, this cursor object contains all quotes from our database. It also contains a bunch of other properties and methods that allow us to work with data easily. One such method is the toArray method.

**The toArray method** takes in a callback function that allows us to do stuff with quotes we retrieved from MongoLab. Let’s try doing a console.log() for the results and see what we get!

<pre name="e081" id="e081" class="graf graf--pre graf-after--p">db.collection('quotes').find().toArray(function(err, results) {  
  console.log(results)  
  // send HTML file populated with quotes here  
})</pre>



![](https://cdn-images-1.medium.com/max/1600/0*6McLqpFyG1xA5of1.png)



Great! You now see an array of quotes (I only have one right now). We’ve completed the first part — getting data from MongoLab. The next part is to generate a HTML that contains all our quotes.

We can’t serve our index.html file and expect quotes to magically appear because there’s no way to add dynamic content to a HTML file. What we can do instead, is to use template engines to help us out. Some popular template engines include Jade, Embedded JavaScript and Nunjucks.

I’ve written extensively about the how and why of template engines in a [separate post](http://www.zell-weekeat.com/nunjucks-with-gulp/). You might want to check it out if you have no idea what template engines are. I personally use (and recommend) Nunjucks as my template engine of choice. Feel free to check out the post to find out why.

For this tutorial, we’re going to use [Embedded JavaScript](http://www.embeddedjs.com/) (ejs) as our template engine because it’s the easiest to start with. You’ll find it familiar from the get-go since you already know HTML and JavaScript.

We can use EJS by first installing it, then setting the view engine in Express to ejs.

<pre name="ac23" id="ac23" class="graf graf--pre graf-after--p">$ npm install ejs --save</pre>

<pre name="a317" id="a317" class="graf graf--pre graf-after--pre">app.set('view engine', 'ejs')</pre>

Once the view engine is set, we can begin generating the HTML with our quotes. This process is also called **rendering**. We can use the render object built into the response object render to do so. It has the following syntax:

<pre name="4777" id="4777" class="graf graf--pre graf-after--p">res.render(view, locals)</pre>

**The first parameter, views**, is the name of the file we’re rendering. This file must be placed within a views folder.

**The second parameter, locals**, is an object that passes data into the view.

Let’s first create an index.ejs file within the views folder so we can start populating data.

<pre name="bcdd" id="bcdd" class="graf graf--pre graf-after--p">$ mkdir views  
$ touch views/index.ejs</pre>

Now, place the following code within index.ejs.

<pre name="cbcf" id="cbcf" class="graf graf--pre graf-after--p"><ul class="quotes">  
  <% for(var i=0; i<quotes.length; i++) {%>  
    <li class="quote">  
        
        
    </li>  
  <% } %>  
</ul></pre>

See what I mean when I say you’ll find it familiar? In EJS, you can write JavaScript within <% and %> tags. You can also output JavaScript as strings if you use the <%= and %> tags.

Here, you can see that we’re basically looping through the quotes array and create strings with quotes[i].name and quotes[i].quote.

One more thing to do before we move on from the index.ejs file. Remember to copy the <form> element from the index.html file into this file as well. The complete index.ejs file so far should be:

<pre name="8aab" id="8aab" class="graf graf--pre graf-after--p"><!DOCTYPE html>  
<html lang="en">  
<head>  
  <meta charset="UTF-8">  
  <title>MY APP</title>  
</head>  
<body>  
  May Node and Express be with you.</pre>

<pre name="731c" id="731c" class="graf graf--pre graf-after--pre">  <ul class="quotes">  
  <% for(var i=0; i<quotes.length; i++) {%>  
    <li class="quote">  
        
        
    </li>  
  <% } %>  
  </ul></pre>

<pre name="0ebe" id="0ebe" class="graf graf--pre graf-after--pre">  <form action="/quotes" method="POST">  
    <input type="text" placeholder="name" name="name">  
    <input type="text" placeholder="quote" name="quote">  
    <button type="submit">Submit</button>  
  </form>  
</body>  
</html></pre>

Finally, we have to render this index.ejs file when handling the **GET** request. Here, we’re setting the results (an array) as the quotes array we used in index.ejs above.

<pre name="4a62" id="4a62" class="graf graf--pre graf-after--p">app.get('/', (req, res) => {  
  db.collection('quotes').find().toArray((err, result) => {  
    if (err) return console.log(err)  
    // renders index.ejs  
    res.render('index.ejs', {quotes: result})  
  })  
})</pre>

Now, refresh your browser and you should be able to see Master Yoda’s quotes.



![](https://cdn-images-1.medium.com/max/1600/0*Wy8S2Yag15rpIOlt.png)



Um. You maybe only have one quote if you followed the tutorial step by step until this point. The reason I have multiple quotes is because I silently added more as I worked on the application.

### Wrapping Up

We’ve covered a lot of ground in just 3000 words. Here are a few bullets to sum it all up. You have…

*   Created an Express Server
*   Learned to execute CREATE and READ operations
*   Learned to save and read from MongoDB
*   Learned to use a template engine like Embedded JS.

There are two more operations to go, but we’ll leave it to the [next post.](http://www.zell-weekeat.com/crud-express-and-mongodb-2/) Catch you there!











* * *







This article first appeared on my blog at [www.zell-weekeat.com](http://zell-weekeat.com). Check it out if you want more articles like this








