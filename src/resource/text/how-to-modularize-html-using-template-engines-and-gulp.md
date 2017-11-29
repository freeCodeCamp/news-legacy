---
author: Zell Liew
authorTwitter: https://twitter.com/zellwk
authorFacebook: none
title: "How to Modularize HTML Using Template Engines and Gulp"
subTitle: "Template engines are tools that help you break HTML code into smaller pieces that you can reuse across multiple HTML files. Template engi..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*uQxKWK71HvEAlKwCc78XbQ.jpeg
url: https://medium.freecodecamp.org/how-to-modularize-html-using-template-engines-and-gulp-d1cb8af54138
id: how-to-modularize-html-using-template-engines-and-gulp-d1cb8af54138
date: 2015-11-07T04:36:01.915Z
tags: [
  "JavaScript",
  "Web Development",
  "Programming",
  "Productivity",
  "Nodejs"
]
---
# How to Modularize HTML Using Template Engines and Gulp







![](https://cdn-images-1.medium.com/max/2000/1*uQxKWK71HvEAlKwCc78XbQ.jpeg)







Template engines are tools that help you break HTML code into smaller pieces that you can reuse across multiple HTML files. Template engines also give you the power to feed data into variables that help simplify your code.

You can only use template engines if you had a way to compile them into HTML. This means that you can only use them if you’re working with a backend language, or if you’re using client-side JavaScript.

However, with Node.js, you can now harness the power of template engines easily through the use of tools like Gulp.

Today, you’ll learn what template engines are, why you should use them, and how to set one up with Gulp.

### Why you should use template engines

Template engines have two major benefits:

1.  They lets you break HTML code down into smaller files
2.  They let you populate your markup with data

Let’s go through them one by one.

#### Breaking HTML into smaller files

It’s common for a HTML file to contain blocks of code that are repeated across the website. Consider this markup for a second:

<pre name="5b2c" id="5b2c" class="graf graf--pre graf-after--p"><body>  
  <nav> ... </nav>  
   ...   
  <footer> ... </footer>  
</body></pre>

Many lines of code, particularly those within nav and footer, are repeated across multiple pages.

Since they are repeated, we can pull them out and place them into smaller files called **partials**.

For example, the navigation partial may contain a simple navigation like this:

<pre name="fd7f" id="fd7f" class="graf graf--pre graf-after--p"><!-- Navigation Partial -->  
<nav>  
  Home  
  About  
  Contact  
</nav></pre>

Then, we can reuse this partial across our HTML files. Here’s what HTML files might look like with partials included:

<pre name="8de9" id="8de9" class="graf graf--pre graf-after--p"><body>  
  {% include partials "nav" %}  
   ...   
  {% include partials "footer" %}  
</body></pre>

Note: The syntax for including partials is different for each template engine. The one shown above is for nunjucks or Swig.

There’s one great thing about being able to break code up like this.

Just imagine what you would do if you had to change the navigation now. When you use a partial, all you have to do is change code in the navigation partial and all your pages will be updated.

This is much easier than having to change the same code across every file the navigation is used on.

Breaking code down into smaller files helps you write less (duplicated) code. It also keeps you from going insane when you need to dive in and change old code.

Let’s move on to the second benefit.

#### Using data to populate markup

This benefit is best explained with an example. Let’s say you’re creating a gallery of images. Your markup would look something similar to this:

<pre name="d7eb" id="d7eb" class="graf graf--pre graf-after--p">  
    
    <img src="item-1.png" alt="item-1">  
    
    
    <img src="item-2.png" alt="item-2">  
    
    
    <img src="item-3.png" alt="item-3">  
    
    
    <img src="item-4.png" alt="item-4">  
    
    
    <img src="item-5.png" alt="item-5">  
    
</pre>

Notice how the .gallery__item div was repeated multiple times above?

If you had to change the markup of one .gallery__item, you’d have to change it in five different places.

Now, imagine that you had the ability to write HTML using loop logic. You’d probably write something similar to this:

<pre name="955d" id="955d" class="graf graf--pre graf-after--p">  
  // Some code to loop through the following 5 times:   
    
    <img src="$path-to-image" alt="$alt-text">  
    
  // end loop  
</pre>

Template engines gives you the ability to use such a loop. Instead of looping exactly five times, it loops through a set of data that you pass to it. The HTML would become:

<pre name="bcaf" id="bcaf" class="graf graf--pre graf-after--p">  
  {% for image in images %}  
      
      <img src="{{src}}" alt="{{alt}}">  
      
  {% endfor %}  
</pre>

The data would be a JSON file that resembles the following:

<pre name="0a2b" id="0a2b" class="graf graf--pre graf-after--p">images: [{  
  src: "item1.png",  
  alt: "alt text for item1"  
  }, {  
  src: "item2.png",  
  alt: "alt text for item1"  
  },  
  // ... Until the end of your data  
]</pre>

With the supplied data, the template engine would create a markup such that the number of .gallery__items would correspond to the number of items in the images array of the data.

The best part is that you only have to change the markup once and all .gallery__items will be updated.

### Using a template engine with Gulp

Before we move on and create a gulp task that uses a template engine, let’s look at a list of popular JavaScript-based template engines that Gulp is able to use:

*   [Dust.js](http://akdubya.github.io/dustjs/)
*   [Embedded JS](http://www.embeddedjs.com/) (also known as ejs)
*   [Handlebars](http://handlebarsjs.com/)
*   [Hogan.js](http://twitter.github.io/hogan.js/)
*   [Jade](http://jade-lang.com/)
*   [Mustache](https://mustache.github.io/)
*   [Nunjucks](https://mozilla.github.io/nunjucks/)
*   [Swig](http://paularmstrong.github.io/swig/) (which is no longer maintained)

Each template engine is unique and has its own pros and cons. Syntax can vary wildly between template engines. Because of this, we’ll focus on using one template engine in this article — nunjucks.

I highly recommend nunjucks because it’s extremely powerful. It has features — like inheritance — that most template engines do not have. I’ve also used Mustache and Handlebars previously, and found that they weren’t powerful enough in many circumstances.

Now, let’s incorporate nunjucks into our workflow.

### Using Nunjucks with Gulp







![](https://cdn-images-1.medium.com/max/2000/1*Lhl-R75OQPH6Xm3bZrs7iA.jpeg)







We can use nunjucks through a plugin called [gulp-nunjucks-render](https://github.com/carlosl/gulp-nunjucks-render).

Let’s start by installing gulp-nunjucks-render.

Note: I’m assuming you know how to use Gulp, so I won’t go into the basics. If you find yourself feeling confused, it might be good to [brush up on your Gulp basics before coming back here.](https://css-tricks.com/gulp-for-beginners/)

<pre name="2a5d" id="2a5d" class="graf graf--pre graf-after--p">$ npm install gulp-nunjucks-render --save-dev</pre>

<pre name="663b" id="663b" class="graf graf--pre graf-after--pre">var nunjucksRender = require('gulp-nunjucks-render');</pre>

Next, we need to create a project structure that allows us to use nunjucks easily. We will use this structure:

<pre name="89f0" id="89f0" class="graf graf--pre graf-after--p">project/   
  |- app/   
      |- index.html and other .html files  
      |- pages/  
      |- templates/  
          |- partials/</pre>

**The templates folder** is used for storing all nunjucks partials and other nunjucks files that will be added to files in the pages folder.

**The pages folder** is used for storing files that will be compiled into HTML. Once they are compiled, they will be created in the app folder.

Let’s work through the process of creating some nunjucks files before creating the Gulp task.

First of all, one good thing about nunjucks (that other template engines might not have) is that it allows you to create a template that contains boilerplate HTML code which can be inherited by other pages. Let’s call this boilerplate HTML layout.nunjucks.

Create a file called layout.nunjucks and place it in your templates folder. It should contain some boilerplate code like <html>, <head> and <body> tags. It can also contain things that are similar across all your pages, like links to CSS and JavaScript files.

Here’s an example of a layout.nunjucks file:

<pre name="01dc" id="01dc" class="graf graf--pre graf-after--p"><!-- layout.nunjucks --></pre>

<pre name="d99f" id="d99f" class="graf graf--pre graf-after--pre"><!DOCTYPE html>  
<html lang="en">  
<head>  
  <meta charset="UTF-8">  
  <title>Document</title>  
  <link rel="stylesheet" href="css/styles.css">  
</head>  
<body></pre>

<pre name="ba7a" id="ba7a" class="graf graf--pre graf-after--pre">  <!-- You write code for this content block in another file -->  
  {% block content %} {% endblock %}</pre>

<pre name="56c8" id="56c8" class="graf graf--pre graf-after--pre">  <script src="bower_components/jquery/dist/jquery.js"></script>  
  <script src="js/main.js"></script>  
</body>  
</html></pre>

By the way, I prefer to use the .nunjucks extension for nunjucks files and partials because it lets me know that I’m working with nunjucks. If you’re not comfortable with .nunjucks, feel free to leave your files as .html.

Next, let’s create a index.nunjucks file in the pages directory. This file will eventually be converted into index.html and placed in the app folder.

It should extend layouts.nunjucks so it contains the boilerplate code we defined in layout.nunjucks:

<pre name="00bb" id="00bb" class="graf graf--pre graf-after--p"><!-- index.nunjucks -->  
{% extends "layout.nunjucks" %}</pre>

We can then add HTML code that’s specific to index.nunjucks between {% block content %} and {% endblock %}.

<pre name="2027" id="2027" class="graf graf--pre graf-after--p"><!-- index.nunjucks -->  
{% extends "layout.nunjucks" %}</pre>

<pre name="a420" id="a420" class="graf graf--pre graf-after--pre">{% block content %}   
<h1>This is the index page</h1>  
{% endblock %}</pre>

We’re done with setting up nunjucks files. Now, let’s create a nunjucks task that coverts index.nunjucks into index.html.

<pre name="e9fc" id="e9fc" class="graf graf--pre graf-after--p">gulp.task('nunjucks', function() {  
  // nunjucks stuff here  
});</pre>

Within the nunjucks task, we first need tell nunjucks where to locate our templates. We can do so with the nunjucks.configure function that gulp-nunjucks-render provides.

<pre name="abbf" id="abbf" class="graf graf--pre graf-after--p">gulp.task('nunjucks', function() {  
  nunjucksRender.nunjucks.configure(['app/templates/']);  
});</pre>

Next, we add files from pages into the gulp task through gulp.src. Then, we output these files in app.

<pre name="31c3" id="31c3" class="graf graf--pre graf-after--p">gulp.task('nunjucks', function() {  
  nunjucksRender.nunjucks.configure(['app/templates/']);</pre>

<pre name="f0d5" id="f0d5" class="graf graf--pre graf-after--pre">  // Gets .html and .nunjucks files in pages  
  return gulp.src('app/pages/**/*.+(html|nunjucks)')  
  // Renders template with nunjucks  
  .pipe(nunjucksRender())  
  // output files in app folder  
  .pipe(gulp.dest('app'))  
});</pre>

Now, try running gulp nunjucks in your command line. Gulp will have created an index.html and placed it in the app folder for you.



![](https://cdn-images-1.medium.com/max/1600/0*7qYZxfS5idGHLbof.png)



If you opened up this index.html file, you should see the following code:

<pre name="2c91" id="2c91" class="graf graf--pre graf-after--p"><!DOCTYPE html>  
<html lang="en">  
<head>  
  <meta charset="UTF-8">  
  <title>Document</title>  
  <link rel="stylesheet" href="css/styles.css">  
</head>  
<body></pre>

<pre name="e3de" id="e3de" class="graf graf--pre graf-after--pre">  <h1>This is the index page</h1></pre>

<pre name="cb80" id="cb80" class="graf graf--pre graf-after--pre">  <script src="js/main.js"></script>  
</body>  
</html></pre>

Notice how everything (except the <h1> tag) came from layouts.nunjucks? That’s what layout.nunjucks is for. If you need to mess around with the <head> tag, add JavaScript or change CSS files, you know you can do it in layouts.nunjucks and every single page will be updated accordingly.

At this point, you’ve successfully extended layouts.nunjucks into index.nunjucks and rendered it index.nunjucks into index.html. There’s a few more things we can improve on. One of the things we can do is to learn to use a partial.

### Adding a Nunjucks Partial

We need to create a partial before we can add it to index.nunjucks. Let’s create a partial called navigation.nunjucks and place it in a partials folder that’s within the templates folder.



![](https://cdn-images-1.medium.com/max/1600/0*xTgHx0PLnJhxFNKB.png)



Then, let’s add a simple navigation to this partial:

<pre name="4a84" id="4a84" class="graf graf--pre graf-after--p"><!-- navigation.nunjucks -->  
<nav>  
  Home  
  About  
  Contact  
</nav></pre>

Let’s now add the partial to our index.nunjucks file. We can add partials with the help of the {% include “path-to-partial” %} statement that nunjucks provides.

<pre name="8199" id="8199" class="graf graf--pre graf-after--p">{% block content %} </pre>

<pre name="44da" id="44da" class="graf graf--pre graf-after--pre"><h1>This is the index page</h1>  
<!-- Adds the navigation partial -->  
{% include "partials/navigation.nunjucks" %}</pre>

<pre name="da01" id="da01" class="graf graf--pre graf-after--pre">{% endblock %}</pre>

Now, if you run gulp nunjucks, you should get a index.html file with the following code:

<pre name="0295" id="0295" class="graf graf--pre graf-after--p"><!-- <head> and CSS --></pre>

<pre name="e656" id="e656" class="graf graf--pre graf-after--pre"><h1>This is the index page</h1></pre>

<pre name="4d1e" id="4d1e" class="graf graf--pre graf-after--pre"><nav>  
  Home  
  About  
  Contact  
</nav></pre>

<pre name="124b" id="124b" class="graf graf--pre graf-after--pre"><!-- JavaScript and </body>    --></pre>

When using partials like navigation, we can often run into situations where we need to add a class to one of the links on a page. Here’s an example:

<pre name="f6bb" id="f6bb" class="graf graf--pre graf-after--p"><nav>  
  <!-- active class should only on be present on the homepage -->  
  Home  
  About  
  Contact  
</nav></pre>

The active class should only be present on the homepage link if we’re on the homepage. If we’re on the about page, then the active class should only be present on the about link.

We can do this with a slightly modified version of partials called **Macros**. The only difference is that you can add variables to it in the same way you would add arguments to a JavaScript function.

### Adding a Nunjucks Macro

First, let’s create a nav-macro.nunjucks file in a macros folder that is within the templates folder. Note that we’re using nav-macro to make sure you don’t get confused between the two navigation nunjuck files.



![](https://cdn-images-1.medium.com/max/1600/0*3-VWQZddWXvgH2ER.png)



You can begin writing macros once you’ve created the nav-macro.nunjucks file.

All macros begin and end with the following tags:

<pre name="4e5d" id="4e5d" class="graf graf--pre graf-after--p">{% macro functionName() %}  
  <!-- Macro stuff here -->  
{% endmacro %}</pre>

Let’s create a macro called active. It’s purpose is to output the active class for our navigation. It should take one argument, activePage, that defaults to “home”.

<pre name="69fd" id="69fd" class="graf graf--pre graf-after--p">{% macro active(activePage='home') %}  
  <!-- Macro stuff here -->  
{% endmacro %}</pre>

We’ll write HTML that will be created within the macro. Here, we can also use the if function provided by nunjucks to check if an active class should be added:

<pre name="3630" id="3630" class="graf graf--pre graf-after--p">{% macro active(activePage='home') %}  
<nav>  
  Home  
  <!-- Repeat for about and contact -->  
</nav>  
{% endmacro %}</pre>

We’re done writing the macro now. Let’s learn to use it in index.nunjucks next.

We use the import function in nunjucks to add a macro file, as opposed to the include function that we used previously to add a partial.

When we import a macro file, we have to set it as a variable as well. Here’s an example:

<pre name="e193" id="e193" class="graf graf--pre graf-after--p"><!-- index.html -->  
{% block content %}</pre>

<pre name="6f28" id="6f28" class="graf graf--pre graf-after--pre"><!-- Importing Nunjucks Macro -->  
{% import 'macros/navigation.nunjucks' as nav %}</pre>

<pre name="d1db" id="d1db" class="graf graf--pre graf-after--pre">{% endblock %}</pre>

In this case, we’ve set the nav variable as the entire navigation.nunjucksmacro file. We can then use the nav variable to call any macro that’s written in that file.

<pre name="b420" id="b420" class="graf graf--pre graf-after--p">{% import 'macros/navigation.nunjucks' as nav %}  
<!-- Creating the navigation with activePage = 'home' -->  
{{nav.active('home')}}</pre>

With this change, try running gulp nunjucks again and you should be able to see this output:

<pre name="59f7" id="59f7" class="graf graf--pre graf-after--p"><nav>  
  Home  
  About  
  Contact  
</nav></pre>

That’s it for using Macros. Knowing this will invariably help you out a lot while using nunjucks :)

There’s one more thing we can do to enhance our templating experience with nunjucks, and that’s populating the HTML with data.

### Populating HTML with data

Let’s start by creating a file called data.json that contains your data. I’d recommend you place this data.json in the app folder.

<pre name="110c" id="110c" class="graf graf--pre graf-after--p">$ cd app  
$ touch data.json</pre>

Let’s add some data now. We can use the data from the earlier example.

<pre name="5efb" id="5efb" class="graf graf--pre graf-after--p">{  
  "images": [{  
    "src": "image-one.png",  
    "alt": "Image one alt text"  
  }, {  
    "src": "image-two.png",  
    "alt": "Image two alt text"  
  }]  
}</pre>

We then have to tweak our nunjucks task slightly to use data from this data.json file. To do so, we need to use to the help of another gulp plugin called [gulp-data](https://www.npmjs.com/package/gulp-data).

Let’s install gulp-data before moving on.

<pre name="dd20" id="dd20" class="graf graf--pre graf-after--p">$ npm install gulp-data --save-dev</pre>

<pre name="eaa5" id="eaa5" class="graf graf--pre graf-after--pre">var data = require('gulp-data');</pre>

Gulp-data takes in a function that allows you to return a file. We can use the require function Node provides to get this data file:

<pre name="3263" id="3263" class="graf graf--pre graf-after--p">.pipe(data(function() {  
  return require('./app/data.json')  
}))</pre>

When using require to get files from a custom directory (not node_modules), we need to tell Node the path to the directory. Here, we start with a ./ that tells Node to start with the current directory, then look into app for the data.json file.

Note: A better way is to use two functions, JSON.parse() and fs.readFileSync() instead of require. We will cover how to do so in [“Automating Your Workflow with Gulp”](http://zell-weekeat.com/automate-your-workflow/).

Let’s add the gulp-data to our nunjucks task now.

<pre name="020a" id="020a" class="graf graf--pre graf-after--p">gulp.task('nunjucks', function() {  
  nunjucksRender.nunjucks.configure(['app/templates/']);</pre>

<pre name="227d" id="227d" class="graf graf--pre graf-after--pre">  return gulp.src('app/pages/**/*.+(html|nunjucks)')  
    // Adding data to nunjucks  
    .pipe(data(function() {  
      return require('./app/data.json')  
    }))  
    .pipe(nunjucksRender())  
    .pipe(gulp.dest('app'))  
});</pre>

Finally, let’s add some markup to index.nunjucks so it uses the data we’ve added.

<pre name="9c39" id="9c39" class="graf graf--pre graf-after--p"><!-- index.nunjucks -->  
{% block content %}  
  
  <!-- Loops through "images" array -->  
  {% for image in images %}  
    
    <img src="{{image.src}}" alt="{{image.alt}}">  
    
  {% endfor %}  
  
{% endblock %}</pre>

<pre name="550d" id="550d" class="graf graf--pre graf-after--pre"><!-- index.html -->  
  
    
    <img src="image-one.png" alt="Image one alt text">  
  Now, if you run `gulp nunjucks`, you should get a `index.html` file with the following markup: </pre>

<pre name="4858" id="4858" class="graf graf--pre graf-after--pre">    
    <img src="image-two.png" alt="Image two alt text">  
    
</pre>

Nice!

### Wrapping up

We’ve learned how template engines make development much easier and some basic ways to use them.

We then dove deeper into one template engine, nunjucks, and got it to work with Gulp. We also learned how to use:

*   extend to inherit a nunjucks file
*   include to include a partial
*   import to import a macro

If you’d like to further speed up your workflow, check out [Automating Your Workflow](http://zell-weekeat.com/automate-your-workflow/). It will cover:

*   Watching and compiling nunjucks files
*   Preventing errors from nunjucks from breaking Gulp’s watch
*   Reloading the browser automatically whenever a file changes











* * *







> This article first appeared on my blog at [www.zell-weekeat.com](http://zell-weekeat.com). Check it out if you want more articles like this








