---
author: Roneesh
authorTwitter: https://twitter.com/roneesh
authorFacebook: none
title: "I finally made sense of front end build tools. You can, too."
subTitle: "Front end build tools can be confusing even to experienced developers like me. The solution is to understand how they work — and work tog..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*L4TYDiuYB5-EK8SG2RjHHQ.png
url: https://medium.freecodecamp.org/making-sense-of-front-end-build-tools-3a1b3a87043b
id: making-sense-of-front-end-build-tools-3a1b3a87043b
date: 2016-03-16T16:36:34.703Z
tags: [
  "JavaScript",
  "Web Development",
  "Front End Development",
  "Nodejs",
  "NPM"
]
---
# I finally made sense of front end build tools. You can, too.



![](https://cdn-images-1.medium.com/max/1600/1*L4TYDiuYB5-EK8SG2RjHHQ.png)



Front end build tools can be confusing even to experienced developers like me. The solution is to understand how they work — and work together — on a conceptual level.

This article presents my opinionated approach to making sense of front end build tools. Instead of diving into code, I’ll walk you through my mental model of how these tools work and what they accomplish.

### Don’t be intimidated by the state of the art

Node, NPM, Grunt, Gulp, Bower, Webpack, Browserify, Yeoman, Brunch… there are so many front-end build tools out there that it can seem impossible to keep up.

The key is not being intimidating. All of these projects are designed to make your life easier.

To understand the what, why, and how of these tools, you just need to grasp a few concepts.

#### Concept #1 — The core dichotomy of build tools is “installing vs. doing”

Build tools do two things:

1.  Install things
2.  Do things

The first question to ask yourself when confronting a new build tool is: “Is this tool intended to install things for me, or do things for me?”

“Installing” tools like npm, Bower, and Yeoman can install pretty much anything. They can install front-end libraries like Angular.js or React.js. They can install servers for your dev environment. They can install testing libraries. They even help you install other front end build tools.





<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/6af4629d678252183aeaa1b210c45a6f?postId=3a1b3a87043b" data-media-id="6af4629d678252183aeaa1b210c45a6f" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F572642811029426177%2FGxgFcPtm_bigger.jpeg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





In short, they install most any code-related things you can think of.

The “doing” tools like Grunt, Webpack, Require.js, Brunch, and Gulp are much more complicated. The goal of the “doing” tools is to automate all the menial and error prone tasks in web development. The things they do are sometimes called “tasks.”

To do these “tasks” they often use their own ecosystem of packages and plugins. Each tool writes tasks in different ways. These tools also don’t all do the same thing. Some “doing” tools try to handle any task you throw at it (Grunt, Gulp, etc). Others focus on one thing, such as handling Javascript dependencies (Browserify, Require.js, etc).

Sometimes you end up using several of these tools in the same project.

Here’s a short list of “tasks” I’ve automated with these “doing” tools:

1.  Replacing a string of text in a file
2.  Creating folders and moving files into those folders
3.  Running my unit tests with a single command
4.  Refreshing my browser when I save a file
5.  Combining all my JavaScript files into one, and all my CSS files into one
6.  Minifying my concatenated JavaScript and CSS files
7.  Modifying the placement of <script> tags on an html page

Once you understand that tools install stuff or do stuff, categorizing them becomes much easier:



![](https://cdn-images-1.medium.com/max/1600/1*0MT3awKHigXswTwawZo_cA.png)

Build tools sorted by whether they primarily install things or do things



#### Concept #2 — The grandparent of all build tools is Node and npm

Node and npm install and run all these build tools, so there is always a trace of them in your project. Because of this, many developers try to use these two tools as much as possible before they resort to installing an additional tool.

Node and NPM fall into our “build” and “do” dichotomy. Node is the “do” tool, and npm is the “install” tool.

npm can install libraries like Angular.js or React.js. It can also install a server to run your app locally for development. It can even install tools to do things like minify your code.

Node, on the other hand, “does” things for you, like run JavaScript files, servers, and so much more.

If you need a place to start learning, start with Node+npm, and stay there for a while. When your project gets large enough, you’ll reach the limits of what Node and npm can automate for you. At that point you can organically incorporate another build tool.

#### Concept #3 — A build is just a production ready version of your app

Developers often break JavaScript and CSS out into separate files. Separate files let you focus on writing more modular chunks of code that do one single thing. Files that do one thing decrease your cognitive load. (If you think separate files are more confusing than one large file, try working in a 5000 line file, and you will quickly change your mind 😉 )

But when it’s time to move your app to production, having multiple JavaScript or CSS files isn’t ideal. When a user visits your site, each of your files will require an additional HTTP requests, making your site slower to load.

So to remedy this, you can create a “build” of our app, which merges all your CSS files into one file, and does the same with your JavaScript. This way, you minimize the number and size of files the user gets. To create this “build,” you use a “build tool.”

Below is a screenshot of an app in development. Notice how it has 5 <script> tags and 3 <link> tags? If you look on the left side, notice the DEVELOPMENT folder has 10 files inside of it?



![](https://cdn-images-1.medium.com/max/1600/1*Dxaal-bYJ8mG1fFLlaQUEg.png)

Your app in development



And below here is the same app after a build tool has worked its magic.

Notice how we just have a single script tag and a single link tag? And now the PRODUCTION folder has just 4 files, compared to the DEVELOPMENT folder’s 10.

The app is line for line the same. We’ve just compacted it into a neat small package we call a “build.”



![](https://cdn-images-1.medium.com/max/1600/1*nUhYk9Mot6c6khOJTC4g1w.png)

Your app in its build form



You might wonder why a build is even worth it, if all it does is save your users a few milliseconds of load time. Well, if you’re making a site just for yourself or a few other people, you don’t have to bother with this. Generating a build of your project is only necessary for high traffic sites (or sites that you hope will be high traffic soon 😎).

If you’re just learning development, or only making sites with very low traffic, generating a build might not be worth your time.

#### Concept #4 — The lines between “install” and “do” can be blurry

No tool only does one and not the other. They all do some mix of “install” and “do.” But generally, a tool tends to do more of one than the other.

Sometimes an “install” tool will run files. npm often does this. npm can [run commands and scripts as well](https://medium.freecodecamp.com/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8) — not just install files. A tool like Yeoman installs pre-built boilerplate apps on your computer, but it also dynamically generate new files as needed, blurring the line between install and do.

#### Concept #5 — There is no one right combination of tools

The combination of tools you use can be completely up to you.

You can choose to use no tools whatsoever. Just keep in mind that copying, pasting, minifying, starting servers, and everything else involved can quickly become overwhelming.

Or you can just use Node and npm together with no additional tools. This is great for beginners, but as your project grows it might start feeling like too manual of a process.

Or you can choose to use a few other tools on top of Node and npm in your project. So your app will use Node+npm as it’s core, and then maybe Grunt+Bower or Webpack or Gulp+Bower.

Using some combination of tools like these on top of Node+npm lets you automate a lot of tasks in your project. The price you pay is that these tools have a steep learning curve.



![](https://cdn-images-1.medium.com/max/1600/1*Y5gyN19hMnG91oVq51kKAw.png)

Build Tools in order of increasing complexity, but decreasing tediousness



#### Concept #6 — Build tools have a steep learning curve, so only learn what’s necessary

Building an app is hard enough. You might be working with a new language or a new framework. Or you might have really tricky business logic. So incorporating a build tool can add a whole additional layer of complexity to your project. This is especially true when it’s a project where someone else wrote the code associated with the build tool.

My advice is to only learn exactly what you need to do your job and nothing else.

The best way to learn new things is when you have a real world task that you need to accomplish. For example, don’t learn how to copy files with Grunt for the sake of it. Instead, wait until your project actually needs that, and then figure it out.

Remember: premature complexity will slow you down.

#### Concept #7— All build tools share the same goal: to make you happy by automating a lot of menial tasks

You’re using your build tool to its full potential when you reach what I called “build tool nirvana.” That’s when after you save a file, or run a single command, and tons of tasks happen “automagically” for you.

If your build tool still requires you to manually move files, change values, or run commands to get a new build, then you haven’t reached build tool nirvana yet.

One of the biggest benefits of build tools is that by just saving a file, you can trigger a new build of your app and send it to your browser. This can dramatically speed up your front end development workflow.

So how much effort should you put into configuring and setting up your build tool? Simple: stop when you’re happy with what it’s doing for you.

#### Concept #8 — It’s not just you. The documentation often is terrible.

It’s not you, I promise. For many of these tools, the documentation is quite lacking. Sometimes figuring out how to do basic tasks can be hard.

Keep in mind that there are very few predefined recipes for build tools. You’ll see people get the same results in wildly different ways — sometimes all as answers to the same StackOverflow question!

While this is annoying, it’s also presents you with an opportunity to flex your coder muscles and implement something creative.

After all, isn’t that why we do this?











* * *







_Thanks for reading this! Hopefully these few points make approaching build tools a less confusing experience. If not, I’m happy to clear up any questions (or correct any errors you find in here), tweet me @_[_Roneesh_](https://medium.com/@roneesh)_!_

**And of course, if you liked what you read, please be sure to ❤ it below and share with your friends. As a writer, this means the world to me!**








