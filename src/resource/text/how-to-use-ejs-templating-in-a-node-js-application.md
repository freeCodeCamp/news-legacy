---
author: Jennifer Bland
authorTwitter: https://twitter.com/ratracegrad
authorFacebook: https://facebook.com/10153268557930902
title: "How to use EJS Templating in a Node.js Application"
subTitle: "EJS, embedded javascript, is a templating language. EJS combines data and a template to produce HTML. One of the most important features ..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*TDMS2SG4EjQuDsRPDDh50w.png
url: https://medium.freecodecamp.org/how-to-use-ejs-templating-in-a-node-js-application-ea9347a96c65
id: how-to-use-ejs-templating-in-a-node-js-application-ea9347a96c65
date: 2016-04-03T14:59:47.112Z
tags: [
  "JavaScript",
  "Nodejs",
  "Ejs",
  "Web Development",
  "Programming"
]
---
# How to use EJS Templating in a Node.js Application







![](https://cdn-images-1.medium.com/max/2000/1*TDMS2SG4EjQuDsRPDDh50w.png)







EJS, embedded javascript, is a templating language. EJS combines data and a template to produce HTML. One of the most important features in EJS is its use of partials. Partials allow you to define something once, and then apply it to any page in your application.

I will show you how to create a simple Node.js application that uses EJS as the templating engine. Then we will create 2 pages for a website. We will use partials to build out our head, navigation, footer and content.

[You can get the code for this example on github](https://github.com/ratracegrad/nodejs_ejs_boilerplate)

#### File Structure

We will be creating a sample application that will have two pages: index and about.

Here is the file structure for the application we will be creating.

<pre name="f5de" id="f5de" class="graf graf--pre graf-after--p">public  
 — — style.css  
- routes  
 — — index.js  
- views  
 — — pages  
 — — — — about.ejs  
 — — — — index.ejs  
- partials  
 — — — — 3columns.ejs  
 — — — — footer.ejs  
 — — — — head.ejs  
 — — — — nav.ejs  
 — — — — scripts.ejs  
- package.json  
- server.js</pre>

#### Getting Started

We will setup our package.json first. This file will contain all the modules we will be using in our application. We will be using:

*   express
*   ejs

<pre name="49e2" id="49e2" class="graf graf--pre graf-after--li">{  
   “name”:    “node_ejs_boilerplate”,  
   “version”: “1.0.0”,  
   “description”: “Boilerplate showing the use of ejs as view template engine in a Node.js application”,  
   “author”: “Jennifer Bland”,  
   “main”: “server.js”,  
   “dependencies”: {  
       “ejs”: “^2.4.1”,  
       “express”: “^4.13.4”  
   }  
}</pre>

You can add the dependencies directly into your package.json or your can install the dependencies so that they are automatically added to the package.json. To manually install dependencies, enter this command:

<pre name="733b" id="733b" class="graf graf--pre graf-after--p">npm install express ejs  — save</pre>

If you added dependencies by adding them to your package.json, you will need to install them by using this commend:

<pre name="298b" id="298b" class="graf graf--pre graf-after--p">npm install</pre>

#### Server.js

Now that we have all our dependencies installed, we need to build out application in server.js. Here is what our server.js file looks like.

<pre name="057d" id="057d" class="graf graf--pre graf--startsWithSingleQuote graf-after--p">‘use strict’;</pre>

<pre name="a2d3" id="a2d3" class="graf graf--pre graf-after--pre">// ================================================================  
// get all the tools we need  
// ================================================================  
var express = require(‘express’);  
var routes = require(‘./routes/index.js’);  
var port = process.env.PORT || 3000;</pre>

<pre name="7219" id="7219" class="graf graf--pre graf-after--pre">var app = express();</pre>

<pre name="1ee8" id="1ee8" class="graf graf--pre graf-after--pre">// ================================================================  
// setup our express application  
// ================================================================  
app.use(‘/public’, express.static(process.cwd() + ‘/public’));  
app.set(‘view engine’, ‘ejs’);</pre>

<pre name="e4f5" id="e4f5" class="graf graf--pre graf-after--pre">// ================================================================  
// setup routes  
// ================================================================  
routes(app);</pre>

<pre name="d3ae" id="d3ae" class="graf graf--pre graf-after--pre">// ================================================================  
// start our server  
// ================================================================  
app.listen(port, function() {  
 console.log(‘Server listening on port ‘ + port + ‘…’);  
});</pre>

Our server will be listening on the port defined in process.env.PORT or 3000 if it is not defined.

We define a /public directory because this is how we will reach our stylesheet style.css located in the /public folder.

We define our templating engine to be ejs.

#### Routes

To make our application follow the structure of a node.js application I have put the routes for our index and about pages into their own file. This file is index.js in the routes folder.

Since I have put the routes in their own folder I need to gain access to them by requiring them in the server.js file.

We have 2 routes in our application

*   / — this is a GET to display the homepage
*   /about — this is a GET to display the about page

In the routes we use res.render to display the appropriate pages. The render command by default will look for files in a folder called views. We rely on this default and only add the path from within the views folder.

Here is our index.js file in the routes folder.

<pre name="efec" id="efec" class="graf graf--pre graf--startsWithSingleQuote graf-after--p">‘use strict’;</pre>

<pre name="882f" id="882f" class="graf graf--pre graf-after--pre">module.exports = function(app) {  
 app.get(‘/’, function(req, res) {  
   res.render(‘pages/index’);  
 });</pre>

<pre name="b640" id="b640" class="graf graf--pre graf-after--pre"> app.get(‘/about’, function(req, res) {  
   res.render(‘pages/about’);  
 });  
};</pre>

#### Configuring our partials

For our sample application, I am going to implement four partials.

*   head — contains items found in the head section of a webpage
*   nav — the navigation that will be displayed on every page
*   footer — static footer with link to my website
*   scripts- loading scripts like jQuery and Bootstrap
*   3columns — content that will be displayed on the homepage

Partials provide easy maintenance of your code. For example, if you create navigation on all of your pages, when you need to add a new entry to the navigation, you must then update every single page with this change.

The navigation partial will be inserted into every page that requires it. To add a new entry to the navigation, you need to just update the partial and it will automatically be applied to every page that contains the nav partial.

Here are the contents of all of our partials.

head.ejs

<pre name="158a" id="158a" class="graf graf--pre graf-after--p"><! — views/partials/head.ejs →  
<head>  
  <meta charset=”UTF-8">  
  <meta http-equiv=”X-UA-Compatible” content=”IE=edge”>  
  <meta name=”viewport” content=”width=device-width, initial-scale=1">  
  <! — The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags →  
  <title>Demonstration of EJS templating in NodeJS Application</title></pre>

<pre name="137a" id="137a" class="graf graf--pre graf-after--pre">  <! — STYLESHEETS →  
  <! — CSS (load bootstrap from a CDN) →  
  <link rel=”stylesheet” href=”[https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css](https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css)">  
  <link rel=”stylesheet” href=”/public/style.css”>  
</head></pre>

nav.ejs

<pre name="0bbc" id="0bbc" class="graf graf--pre graf-after--p"><! — views/partials/nav.ejs →  
<nav class=”navbar navbar-inverse navbar-fixed-top” role=”navigation”>  
 </pre>

<pre name="9dcc" id="9dcc" class="graf graf--pre graf-after--pre">  
   
   
 CodePrep.io  
   
 </pre>

<pre name="13b8" id="13b8" class="graf graf--pre graf-after--pre"><ul class=”nav navbar-nav pull-right”>  
 <li>Home</li>  
 <li>About</li>  
 </ul></pre>

<pre name="0f1b" id="0f1b" class="graf graf--pre graf-after--pre">  
</nav></pre>

footer.ejs

<pre name="d53b" id="d53b" class="graf graf--pre graf-after--p"><! — views/partials/footer.ejs →  
<footer class=”footer”>  
   
 <p class=”text-center text-muted”>© Copyright 2015 CodePrep.io</p>  
   
</footer></pre>

scripts.ejs

<pre name="fe33" id="fe33" class="graf graf--pre graf-after--p"><! — views/partials/scripts.ejs →</pre>

<pre name="8f66" id="8f66" class="graf graf--pre graf-after--pre"><! — jQuery (necessary for Bootstrap’s JavaScript plugins) →  
<script src=”[https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js](https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js)"></script>  
<! — Bootstrap javascript file →  
<script src=”[https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js](https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js)"></script></pre>

3columns.ejs

<pre name="6b80" id="6b80" class="graf graf--pre graf-after--p"><! — views/partials/3columns.ejs →  
  
   
 <h2 class=”text-center”>Sample Data</h2>  
   
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget iaculis lorem. Fusce elementum magna fringilla ipsum bibendum, vitae consectetur ligula interdum. Sed mauris diam, hendrerit eget suscipit vel, luctus at odio. Etiam pellentesque a metus et pharetra. Praesent dictum, libero id tempor malesuada, erat ex cursus nibh, ac hendrerit massa neque commodo metus. Integer porttitor ante eu varius interdum. Suspendisse quis iaculis erat. Fusce eu nisl id eros tempor posuere. Donec placerat orci orci, ut ultrices neque rutrum in. Nunc dignissim ante et risus rhoncus, vel feugiat mi vestibulum. Aliquam in dictum neque, non vestibulum lorem. Sed imperdiet dolor vitae felis iaculis, id sollicitudin lectus rhoncus. Maecenas ac dolor eget tortor rutrum commodo. Aliquam luctus iaculis mi id semper. Suspendisse sem nisi, convallis at dapibus in, convallis eu neque. Curabitur maximus magna et nulla ullamcorper facilisis.</p>  
   
   
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget iaculis lorem. Fusce elementum magna fringilla ipsum bibendum, vitae consectetur ligula interdum. Sed mauris diam, hendrerit eget suscipit vel, luctus at odio. Etiam pellentesque a metus et pharetra. Praesent dictum, libero id tempor malesuada, erat ex cursus nibh, ac hendrerit massa neque commodo metus. Integer porttitor ante eu varius interdum. Suspendisse quis iaculis erat. Fusce eu nisl id eros tempor posuere. Donec placerat orci orci, ut ultrices neque rutrum in. Nunc dignissim ante et risus rhoncus, vel feugiat mi vestibulum. Aliquam in dictum neque, non vestibulum lorem. Sed imperdiet dolor vitae felis iaculis, id sollicitudin lectus rhoncus. Maecenas ac dolor eget tortor rutrum commodo. Aliquam luctus iaculis mi id semper. Suspendisse sem nisi, convallis at dapibus in, convallis eu neque. Curabitur maximus magna et nulla ullamcorper facilisis.</p>  
   
   
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget iaculis lorem. Fusce elementum magna fringilla ipsum bibendum, vitae consectetur ligula interdum. Sed mauris diam, hendrerit eget suscipit vel, luctus at odio. Etiam pellentesque a metus et pharetra. Praesent dictum, libero id tempor malesuada, erat ex cursus nibh, ac hendrerit massa neque commodo metus. Integer porttitor ante eu varius interdum. Suspendisse quis iaculis erat. Fusce eu nisl id eros tempor posuere. Donec placerat orci orci, ut ultrices neque rutrum in. Nunc dignissim ante et risus rhoncus, vel feugiat mi vestibulum. Aliquam in dictum neque, non vestibulum lorem. Sed imperdiet dolor vitae felis iaculis, id sollicitudin lectus rhoncus. Maecenas ac dolor eget tortor rutrum commodo. Aliquam luctus iaculis mi id semper. Suspendisse sem nisi, convallis at dapibus in, convallis eu neque. Curabitur maximus magna et nulla ullamcorper facilisis.</p>  
   
   
</pre>

#### Building our Pages

Our sample application has a homepage and an about page. We will need to create both of these pages. On these pages we will insert the appropriate partials we just created on the page.

We put all of our partials in a folder called partials within the views folder. We are going to create another folder in the views folder called pages. This folder will contain our homepage and about pages.

To insert a partial on a page we use this format:

<pre name="52bc" id="52bc" class="graf graf--pre graf-after--p"><% include ../partials/head %></pre>

Here are the contents of our two pages:

**index.ejs**

<pre name="ba59" id="ba59" class="graf graf--pre graf-after--p"><!DOCTYPE html>  
<html lang=”en”></pre>

<pre name="694c" id="694c" class="graf graf--pre graf-after--pre"><% include ../partials/head %></pre>

<pre name="1d06" id="1d06" class="graf graf--pre graf-after--pre"><body></pre>

<pre name="1af2" id="1af2" class="graf graf--pre graf-after--pre"><% include ../partials/nav %></pre>

<pre name="e505" id="e505" class="graf graf--pre graf-after--pre">  
   
 <h1>CodePrep.io Presents</h1>  
 <p>Using EJS templating with Node.js</p>  
   
 </pre>

<pre name="55db" id="55db" class="graf graf--pre graf-after--pre"><% include ../partials/3columns %></pre>

<pre name="c54f" id="c54f" class="graf graf--pre graf-after--pre"><% include ../partials/footer %></pre>

<pre name="9ac8" id="9ac8" class="graf graf--pre graf-after--pre"><% include ../partials/scripts %></pre>

<pre name="3546" id="3546" class="graf graf--pre graf-after--pre"></body></pre>

<pre name="296e" id="296e" class="graf graf--pre graf-after--pre"></html></pre>

**about.ejs**

<pre name="6974" id="6974" class="graf graf--pre graf-after--p"><!DOCTYPE html>  
<html lang=”en”></pre>

<pre name="17dc" id="17dc" class="graf graf--pre graf-after--pre"><% include ../partials/head %></pre>

<pre name="31ff" id="31ff" class="graf graf--pre graf-after--pre"><body></pre>

<pre name="86c8" id="86c8" class="graf graf--pre graf-after--pre"><% include ../partials/nav %></pre>

<pre name="0714" id="0714" class="graf graf--pre graf-after--pre"><! — content for about page →  
   
   
 <h2 class=”text-center”>About Page</h2>  
   
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien eros, dictum eu malesuada sagittis, pellentesque sed enim. Donec at odio volutpat, dignissim mauris tincidunt, pharetra lorem. Fusce porta neque non lorem vulputate, et commodo dolor semper. Proin sodales lacinia nibh vel semper. Nulla sed faucibus nisi. Aliquam venenatis pellentesque tortor et fringilla. Nulla porttitor massa vitae libero volutpat, id mollis neque elementum. Integer porta, enim eu pharetra interdum, diam metus mollis purus, id ornare risus enim a magna. Sed rhoncus, nulla ac hendrerit lacinia, neque lectus iaculis ligula, et euismod erat massa sit amet orci. Ut fermentum hendrerit arcu. Vestibulum quis leo ut ante eleifend fringilla.</pre>

<pre name="9adf" id="9adf" class="graf graf--pre graf-after--pre">Morbi maximus eu lorem sit amet tempor. Nunc dignissim lacus vel aliquet ornare. Aliquam eget turpis et nisi tincidunt rhoncus. Vestibulum interdum interdum aliquet. Phasellus quis erat est. Pellentesque molestie pretium quam in fermentum. Maecenas eu luctus turpis, euismod feugiat risus. Integer scelerisque cursus tempor. Phasellus in bibendum tortor.</pre>

<pre name="b7dc" id="b7dc" class="graf graf--pre graf-after--pre">Aenean vitae lorem augue. Cras ultricies posuere vestibulum. Integer non felis porttitor mi ultricies pretium. Sed vitae nisi accumsan, maximus lorem sed, malesuada quam. Nunc lacus est, elementum vel ultrices sit amet, suscipit eu nibh. Maecenas vel facilisis leo, id congue sem. In hac habitasse platea dictumst. Aenean est lorem, hendrerit sit amet rutrum ac, sodales eget neque. Pellentesque hendrerit, risus in bibendum varius, purus tellus accumsan leo, et suscipit lorem nulla non arcu.</p>  
 </pre>

<pre name="966c" id="966c" class="graf graf--pre graf-after--pre">  
 <! — end of content →</pre>

<pre name="e05a" id="e05a" class="graf graf--pre graf-after--pre"><% include ../partials/footer %></pre>

<pre name="f1fb" id="f1fb" class="graf graf--pre graf-after--pre"><% include ../partials/scripts %></pre>

<pre name="6a29" id="6a29" class="graf graf--pre graf-after--pre"></body>  
</html></pre>

#### Starting our Application

To start the application enter the following command:

<pre name="f433" id="f433" class="graf graf--pre graf-after--p">node server.js</pre>

When our application starts it will display our homepage:



![](https://cdn-images-1.medium.com/max/1600/1*fPKZD7YVjisdQWwPg6AO5Q.png)

homepage



If you click on the about link in the navigation, you will see the about page:



![](https://cdn-images-1.medium.com/max/1600/1*afMTSnpOkd5qt2nf0NP1DQ.png)

about page



### Get the code

[You can get the code for this example on github](https://github.com/ratracegrad/nodejs_ejs_boilerplate)

### More Articles

Thanks for reading my article. If you like it, please click on clap icon below so that others will find the article. Here are some more of my articles that you might be interested in:  
[Using Node.js & Express.js to save data to MongoDB Database](https://medium.com/@ratracegrad/hitchhikers-guide-to-back-end-development-with-examples-3f97c70e0073)  
[First Impressions Count — Why Doesn’t Your Github Repo Have a ReadMe File?](https://medium.com/@ratracegrad/first-impressions-count-why-doesnt-your-github-repo-have-a-readme-file-f240961a8fca)  
[Why Company Culture is Important to Your Career as a Software Engineer](https://medium.freecodecamp.org/why-company-culture-is-important-to-your-career-as-a-software-engineer-5a590bc44621)








