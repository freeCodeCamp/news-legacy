---
author: Tracy Lee | ladyleet
authorTwitter: https://twitter.com/ladyleet
authorFacebook: none
title: "How to set up a Basic Ember.js app"
subTitle: "So, you want to test out Ember, eh? This article will walk through building a basic app...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*--wRIhx_atl50C4NlkMY5Q.jpeg
url: https://medium.freecodecamp.org/setting-up-a-basic-ember-js-app-c9323760c675
id: setting-up-a-basic-ember-js-app-c9323760c675
date: 2016-08-09T13:06:53.870Z
tags: [
  "JavaScript",
  "Web Development",
  "Ember",
  "Programming",
  "Coding"
]
---
# How to set up a Basic Ember.js app



![](https://cdn-images-1.medium.com/max/1600/1*--wRIhx_atl50C4NlkMY5Q.jpeg)



So, you want to test out Ember, eh? This article will walk through building a basic app.

Here’s what we’ll do:

1.  Set up ember-cli
2.  Create a new application
3.  Use materalize-css for styling
4.  Create components
5.  Cover basic use of Ember’s router
6.  Explore the “each” helper for iterating over data

First things first, you should install ember-cli. Almost all applications are built with ember-cli. It’s very rare that you’ll find one that is not.

And here’s one major benefit of Ember and the Ember community — they rely on convention over configuration more heavily than Angular and React do. They use this as one of their strengths, making them a popular framework for companies who want to build large scale applications.

Being conventional allows Ember to develop community standards such as the ember-cli-deploy story, a strong story around Ember Data, and the loads of contributions the community is able to make through the ember addon ecosystem. (check out [emberaddons.com](http://emberaddons.com))

At the Ember.js website, you’ll find simple install instructions, and even a little quick start guide you can walk through!

Go ahead and install ember-cli to get started:

<pre name="4e9d" id="4e9d" class="graf graf--pre graf-after--p">$ npm install -g ember-cli</pre>



![](https://cdn-images-1.medium.com/max/1600/1*N5acmEwSyRjGrmuE94aVrQ.png)



### Creating a new application

This is as easy as 1–2–3! Simply _ember new <project name>_ and an application will be generated for you.

<pre name="18c5" id="18c5" class="graf graf--pre graf-after--p">ember new yolobrolo</pre>

You’ll see ember-cli creating quite a few files.

Mainly, you should note that Ember has created:

*   application.hbs (handlebars, which is your html file)
*   app.js
*   router.js
*   package.json
*   bower.json
*   tests



![](https://cdn-images-1.medium.com/max/1600/1*7DOqWd12Em8kLghc6QqGIQ.png)



Wahoo! Now, if you open up your IDE, you should see the structure of an Ember application.



![](https://cdn-images-1.medium.com/max/1600/1*U3Wvk6pS8-6nDTA-Yjfhtg.png)



### Installing Materialize-CSS

In case you were wondering, I love material design and materialize-css.

So, if you want to use the styles I usually use, go ahead run the following command.

<pre name="58f4" id="58f4" class="graf graf--pre graf-after--p">npm install materialize-css</pre>

Then, add these lines to your index.html file

<pre name="0be0" id="0be0" class="graf graf--pre graf-after--p"><!-- Compiled and minified CSS -->  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css"></pre>

<pre name="6eff" id="6eff" class="graf graf--pre graf-after--pre"><!--Import Google Icon Font-->  
      <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></pre>

<pre name="12e8" id="12e8" class="graf graf--pre graf-after--pre"><!-- Compiled and minified JavaScript -->  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js"></script></pre>

When done, kill your server and restart it. Your font should change to Roboto:



![](https://cdn-images-1.medium.com/max/1600/1*1QZv88PtC5qsVlAOliNeOA.png)

Before you install materialize-css





![](https://cdn-images-1.medium.com/max/1600/1*44nWCgRY3v45IqGjS95Kew.png)

After you install materialize-css



### Creating components

Ember, like most JavaScript frameworks these days, loves components. So let’s create the component we need: a navigation bar that we can hook up the router to! We use the nav bar that materialize-css gives us.

All you need to do to create a component is this:

<pre name="17f8" id="17f8" class="graf graf--pre graf-after--p">ember g component <component-name></pre>

Make sure the name of your component has a dash in the name as this is the convention.

Here are the files that ember-cli generates for me. It creates:

*   component-name.hbs
*   component-name.js
*   adds integration tests



![](https://cdn-images-1.medium.com/max/1600/1*B5tlJbvcT1Jsa4Ok43t_UQ.png)



This is what my pretty nav-bar looks like.



![](https://cdn-images-1.medium.com/max/1600/1*fecwm_khwqazR39TQ6Z3QA.png)



Here’s the default code if you like:

<pre name="b40c" id="b40c" class="graf graf--pre graf-after--p"><nav>  
      
      Logo  
      <ul id="nav-mobile" class="left hide-on-med-and-down">  
        <li>Videos</li>  
        <li>About</li>  
      </ul>  
      
  </nav></pre>

Anytime you need to reuse a piece of code over and over again, it’s always best to make it a component. :)

### Using Ember’s router

I think I take Ember’s router for granted after playing around in Angular 2 so much.

Actually, I think I take routers for granted in general, but here is my friend [Jay Phelps](http://twitter.com/_jayphelps) telling us why we should care.



![](https://cdn-images-1.medium.com/max/1600/1*X9G9krQQ1fnc11Jj-LG5PQ.png)



Here’s a basic overview of how Ember’s router works.

First things first, you should note there is a router.js file in which all of your routes are defined. Also, in your application.hbs file, there is {{outlet}} which outputs whatever you specify the router to.

In my app, I want to create 2 simple routes — an about page and a videos page.

To create a new route you run this command in ember-cli.

<pre name="32e9" id="32e9" class="graf graf--pre graf-after--p">ember g route <route-name></pre>

Ember will then generate:

*   your-route.js
*   your-route.hbs
*   update the router.js file
*   create a unit test.

You can see all the magic from the command line:



![](https://cdn-images-1.medium.com/max/1600/1*VbfW97PprUII4V5prN23mw.png)



I love how the router.js file is automatically updated for me. You can even create nested routes from the command line. The Ember.js guides are pretty awesome and here is a [link](https://guides.emberjs.com/v2.7.0/routing/) to everything the router can do.

One thing I did in the screenshot below was define my default route. I did that by simply specifying the route path as /. Everything else was pre-generated for me with the CLI.

<pre name="4a12" id="4a12" class="graf graf--pre graf-after--p">this.route(‘videos’, { path:’/’ });</pre>



![](https://cdn-images-1.medium.com/max/1600/1*y2yYsOVzSG03bN0Qi2XUPQ.png)



### Configuring the output of Ember’s router

Let’s explore the application.hbs file. This is where the router will output.

Really, one of the only things I add into my application.hbs file is a navigation bar and footer. I create routes for everything else.

Currently my application.hbs file looks like this.



![](https://cdn-images-1.medium.com/max/1600/1*5MeJM7769ZMRLnFKHhO67Q.png)



Now, going into my nav-bar component I’m going to get routes going for the about page route and the videos route.

Ember uses the {{link-to}} helper for transitions between routes.

Here’s what the syntax looks like:

<pre name="6d93" id="6d93" class="graf graf--pre graf-after--p">{{#link-to ‘videos’}}Videos{{/link-to}}</pre>

The {{link-to}} helper replaces an 

![](https://cdn-images-1.medium.com/max/1600/1*v63Fl9ucUR0VnRo9YbrmLg.png)



Now you know how to use the very basic functionality of the router!

### Iterating Over Data Using the Each Helper

I have a video route, and I’d like to display a set of YouTube videos on the page. I’m going to create a simple video-card component that I will be iterating over and displaying on the video page.

This is what one video card looks like:



![](https://cdn-images-1.medium.com/max/1600/1*9ciWmD418glQpr4DmLzvrg.png)



Part of Ember’s beauty is all the helpers that allow you to do cool things in your app.

Ember’s {{each}} helper is equivalent to the ng-repeat directive in Angular 1 and the *ngFor directive in Angular 2.

Full ember docs on the each helper and helpers in general are [here](https://guides.emberjs.com/v2.6.0/templates/displaying-a-list-of-items/).

Here is what the code for one YouTube video displayed looks like:

<pre name="3a81" id="3a81" class="graf graf--pre graf-after--p">  
   
   
   
 <p>Title</p>  
   
   
 <iframe width=”853" height=”480" src=”[https://www.youtube.com/embed/](https://www.youtube.com/embed/)peNV2yJRMLo?rel=0" frameborder=”0" allowfullscreen></iframe>  
   
   
 With Taras Mankovski  
   
   
   
</pre>

After laying it out, I realize that I want to iterate over 3 pieces of data — the title, the YouTube video link, and the person featured in the video.

So, I need to define my data in an array in my component.js file like such:

<pre name="5cd4" id="5cd4" class="graf graf--pre graf-after--p">model: [{  
 title: “Ember DND Helper”,  
 people: “Taras Mankovski”,  
 videoLink: “peNV2yJRMLo?rel=0”  
 },{  
 title: “Dependency Injection in Angular 2”,  
 people: “Patrick J. Stapleton”,  
 videoLink: “46WovCX8i-I?rel=0”  
 },{  
 title: “Angular CLI”,  
 people: “Mike Brocchi”,  
 videoLink: “BmZLpNRNnZo”  
 },{  
 title: “Angular Material 2 Spelunking & Issue Submission”,  
 people: “Ben Lesh”,  
 videoLink: “3gNsyL7wpXU”  
 }]  
});</pre>



![](https://cdn-images-1.medium.com/max/1600/1*q-ndnJmIRegKOwJ6B_vYDw.png)



Then, I can finally use the {{each}} helper to iterate over my data.

Wrap the content with the {{each}} helper as below, defining the model and your local variable:

<pre name="b47c" id="b47c" class="graf graf--pre graf-after--p">{{#each model as |video|}} CONTENT {{/each}}</pre>

Then, take the pieces of content you’d like to be dynamic and replace it with handlebars and localVariable.x, like so:

<pre name="b5e1" id="b5e1" class="graf graf--pre graf-after--p">{{video.title}}</pre>

<pre name="a81c" id="a81c" class="graf graf--pre graf-after--pre">src="[https://www.youtube.com/embed/](https://www.youtube.com/embed/){{video.videoLink}}"</pre>

<pre name="476e" id="476e" class="graf graf--pre graf-after--pre">{{video.people}}</pre>

Here’s what the code looks like when it’s all said and done:

<pre name="5cbb" id="5cbb" class="graf graf--pre graf-after--p">  
 {{#each model as |video|}}  
   
   
   
 <p>{{video.title}}</p>  
   
   
 <iframe width=”853" height=”480" src=”[https://www.youtube.com/embed/](https://www.youtube.com/embed/){{video.videoLink}}" frameborder=”0" allowfullscreen></iframe>  
   
   
 With {{video.people}}  
   
   
   
 {{/each}}  
</pre>



![](https://cdn-images-1.medium.com/max/1600/1*7z43VYtkKA-jwDMM2Q3YCw.png)



Here’s the end result of using the {{each}} helper.



![](https://cdn-images-1.medium.com/max/1600/1*ysZ28oFxidK31eHhe9pwZQ.png)



### **Deploying to Heroku**

Once upon a time there existed a man called tonycoco. And tonycoco made deploying ember apps to Heroku super easy. Here’s his [github repo](https://github.com/tonycoco/heroku-buildpack-ember-cli) if you want to peep in on this.

First, you should have the Heroku Toolbelt installed and linked with your Heroku account.

Then, all you have to do to deploy to Heroku is commit your changes to master and push.

<pre name="c689" id="c689" class="graf graf--pre graf-after--p">$ heroku create — buildpack [https://github.com/tonycoco/heroku-buildpack-ember-cli.git](https://github.com/tonycoco/heroku-buildpack-ember-cli.git)</pre>

<pre name="e945" id="e945" class="graf graf--pre graf-after--pre">$ git push heroku master</pre>

Wait for it to finish deploying completely.

Go into your [Heroku app dashboard](https://dashboard.heroku.com/apps). Update app to the name you want (to match your app).

Now change the Heroku remote name to match new app name in your .git/config file.

Then, _git push heroku master_ again and you should be all set!

In this case, this app deployed: [http://yolobrolo-ember-1.herokuapp.com/](http://yolobrolo-ember-1.herokuapp.com/)

Yolo! Have fun with it. Hope you try out Ember and enjoy it.

### **Watch me build this step by step**

Oh also, for your viewing purposes, you can watch me build this [on YouTube at yolobrolo](https://www.youtube.com/watch?v=-Ury2S9Y-4Q).








