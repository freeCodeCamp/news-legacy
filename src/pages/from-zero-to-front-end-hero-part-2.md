---
author: Jonathan Z. White
authorTwitter: https://twitter.com/JonathanZWhite
authorFacebook: none
title: "From Zero to Front-end Hero (Part 2)"
subTitle: "This article is part two of the “From Zero to Front-end Hero” series. In part one, you learned how to create layouts with HTML and CSS as..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*2HMyUzkxeVEguBwDI9-rYg.png
url: https://medium.freecodecamp.org/from-zero-to-front-end-hero-part-2-adfa4824da9b
id: from-zero-to-front-end-hero-part-2-adfa4824da9b
date: 2016-05-24T12:05:24.006Z
tags: [
	"JavaScript",
	"Web Development",
	"Front End Development",
	"Design",
	"Technology"
]
---
# From Zero to Front-end Hero (Part 2)

This article is part two of the “From Zero to Front-end Hero” series. In [part one](https://medium.com/@JonathanZWhite/from-zero-to-front-end-hero-part-1-7d4f7f0bff02), you learned how to create layouts with HTML and CSS as well as some best practices. In part two, we will focus on learning JavaScript as a standalone language, how to add interactivity to interfaces, JavaScript design and architectural patterns, and how to build web apps.

Just like with HTML and CSS, there are tons of JavaScript tutorials out there. However, especially for someone new to front-end, it’s hard to figure what tutorials to use and what order to do them in. The main goal of this series is to provide you with a road map to help you navigate learning to be a front-end.

If you haven’t already read part one, go ahead and do that before reading on.

[**From Zero to Front-end Hero (Part 1)**  
_A complete guide to learning front-end development_medium.com](https://medium.com/p/7d4f7f0bff02 "https://medium.com/p/7d4f7f0bff02")[](https://medium.com/p/7d4f7f0bff02)

### JavaScript Basics














JavaScript is a cross-platform programming language that can be used for practically anything these days, but we’ll get into that later once you understand the basics of how developers use JavaScript for the web.

#### Language

Before learning how to apply JavaScript to the web, first learn about the language itself. To get started, read Mozilla Developer Network’s [Language basics crash course](https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/JavaScript_basics). This tutorial will teach you basic language constructs like variables, conditionals, and functions.

After that, read through the following sections in MDN’s [JavaScript guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide):

*   [Grammar and types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)
*   [Control flow and error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
*   [Loops and iterations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
*   [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

Don’t worry too much about memorizing specific syntax. You can always look that up. Instead, focus on understanding important concepts like variable instantiation, loops, and functions. If the material is too dense, that’s okay. Skim through the reading; you can always go back later. And as you put these concepts into practice, they will become much clearer.

To break the monotony of text-based learning, check out the [JavaScript course](https://www.codecademy.com/learn/javascript) by Codecademy. It’s hands-on and fun. Also, if you have time, for each concept I listed above, read the corresponding chapter in [Eloquent JavaScript](http://eloquentjavascript.net/) to reinforce your learning. Eloquent JavaScript is a great free online book that every aspiring front-end developer should read.

#### Interactivity












[One use for JavaScript is for animating your layouts](https://dribbble.com/shots/2067564-Replace)



Now that you have a basic understanding of JavaScript as a language, the next step is to apply it to web. To understand how JavaScript interacts with websites, you first have to know about the [Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).

The DOM is a representational structure of HTML documents. It’s a tree-like structure made up of [JavaScript objects](http://javascriptissexy.com/javascript-objects-in-detail/) that correspond to HTML nodes. For further reading about the DOM, read [What is the DOM](https://css-tricks.com/dom/) by CSSTricks. It provides a simple and straightforward explanation of the DOM.












[Inspecting the dom](https://dribbble.com/shots/1169778-Chrome-and-Sublime-text)



JavaScript interacts with the DOM to change and update it. Here is an example where we select an HTML element and change its content:

<pre name="bce9" id="bce9" class="graf graf--pre graf-after--p">var container = document.getElementById(“container”); </pre>

<pre name="ebfa" id="ebfa" class="graf graf--pre graf-after--pre">container.innerHTML = 'New Content!';</pre>

Don’t worry, that was just a simple example. You can do a lot more than that with JavaScript DOM manipulation. To learn more about how to use JavaScript to interact with the DOM, go through the following guides in MDN’s section, [The Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model).

*   [Events](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events)
*   [Examples of web and XML development using the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Examples "This chapter provides some longer examples of web and XML development using the DOM. Wherever possible, the examples use common APIs, tricks, and patterns in JavaScript for manipulating the document object.")
*   [How to create a DOM tree](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/How_to_create_a_DOM_tree "This page describes how to use the DOM Core API in JavaScript to create and modify DOM objects. It applies to all Gecko-based applications (such as Firefox) both in privileged (extensions) and unprivileged (web pages) code.")
*   [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction "This section provides a brief conceptual introduction to the DOM: what it is, how it provides structure for HTML and XML documents, how you can access it, and how this API presents the reference information and examples.")
*   [Locating DOM elements using selectors](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors "The Selectors API provides methods that make it quick and easy to retrieve Element nodes from the DOM by matching against a set of selectors. This is much faster than past techniques, wherein it was necessary to, for example, use a loop in JavaScript code to locate the specific items you needed to find.")

Once again, focus on concepts over syntax. Be able to answer the following questions:

*   What is the DOM?
*   How do you query elements?
*   How do you add event listeners?
*   How do you change DOM node properties?

For a list of common JavaScript DOM interactions, check out [JavaScript Functions and Helpers](https://plainjs.com/javascript/) by PlainJS. This site provides examples of how to do things like set [styles on HTML elements](https://plainjs.com/javascript/styles/set-and-get-css-styles-of-elements-53/) and [attach keyboard event listeners](https://plainjs.com/javascript/events/getting-the-keycode-from-keyboard-events-17/). And if you want to dig deeper, you can always read the section on the DOM in [Eloquent JavaScript](http://eloquentjavascript.net/13_dom.html).

#### Inspector

To debug client-side JavaScript, we use developer tools built into browsers. The inspector panel is available in most browsers and lets you see the source of web pages. You can track JavaScript as it executes, print debug statements to the console, and see things like network requests and resources.

Here is a [tutorial](https://developer.chrome.com/devtools) on using the Chrome developer tool. If you’re using Firefox, you can check out this [tutorial](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector).












[Chrome developer tools](https://dribbble.com/shots/995021-Discover-DevTools)



### Practicing the basics

At this point, there is still a lot more to learn about JavaScript. However, the last section contained a lot of new information. I think it’s time we took a break and tackled a few small experiments. They should help solidify some of the concepts you just learned.

#### Experiment 1

For experiment 1, go to [AirBnB](https://www.airbnb.com/), open up your browser’s [page inspector](https://developer.chrome.com/devtools), and click on the [console tab](https://developer.chrome.com/devtools/docs/console). Here you can execute JavaScript on the page. What we are going to do is have some fun with manipulating some of the elements on the page. See if you can do all of the following DOM manipulations.












[Airbnb.com](https://www.airbnb.com/)



I chose AirBnB’s website because their CSS class names are relatively straightforward and aren’t obfuscated by some compiler. However, you can choose to do this on any page you want.

*   Select a header tag with a unique class name and change the text
*   Select any element on the page and remove it
*   Select any element and change one of its CSS properties
*   Select a specific section tag and move it down 250 pixels
*   Select any component, like a panel, and adjust its visibility
*   Define a function named _doSomething_ that alerts “Hello world” and then execute it
*   Select a specific paragraph tag, add a _click_ event listener to it, and run _doSomething_ every time the event is fired

If you get stuck, reference the [JavaScript Functions and Helpers](https://plainjs.com/javascript/) guide. I based most of these tasks off of it. Below is an example of how to complete the first bullet point:

<pre name="9448" id="9448" class="graf graf--pre graf-after--p">var header = document.querySelector(‘.text-branding’)</pre>

<pre name="30a5" id="30a5" class="graf graf--pre graf-after--pre">header.innerText = ‘Boop'</pre>

The main purpose of this experiment is to take some of the things you learned about JavaScript and DOM manipulation and see it in action.

#### Experiment 2












[JavaScript enables developers to create interactive interfaces](https://dribbble.com/shots/2716909-Opening-screen-for-banking-App)



Using [CodePen](https://twitter.com/JonathanZWhite), write a basic JavaScript heavy experiment that uses DOM manipulation and requires some [programmatic logic](https://en.wikipedia.org/wiki/Logic_in_computer_science) to function. The focus of this experiment is to take some of the things you learned in [From Hero to Front-end Hero Part 1](https://medium.freecodecamp.com/from-zero-to-front-end-hero-part-1-7d4f7f0bff02#.qp3n3h8ew) and combine it with JavaScript. Here are a few reference examples that might serve as inspiration.

*   [Periodic Table](http://codepen.io/tony_the_coder/pen/GZdNQY)
*   [Mood Color Generator](http://codepen.io/mecarter/pen/RNomVo)
*   [Calculator](http://codepen.io/nodws/pen/heILd)
*   [JavaScript Quiz](http://codepen.io/jasonchan/pen/wMaEwN)
*   [Playable Canvas Asteroids](http://codepen.io/jeffibacache/pen/bzBsp)

### More JavaScript

Now that you know some JavaScript and have had some practice with it, we’re going to move on to some more advanced concepts. The concepts below aren’t directly related to one another. I grouped them in this section because they are necessary for understanding how to build more complex front-end systems. You will better understand how to put them to use once you reach the experiments and frameworks section.

#### Language

As you do more work with JavaScript, you will encounter some higher level concepts. This is a list of some of those concepts. When you have time, go through each bullet point. Also, [Eloquent JavaScript](http://eloquentjavascript.net/) covers much of this material, if you want to supplement your learning.

*   [Prototypal inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
*   [Scoping](https://spin.atomicobject.com/2014/10/20/javascript-scope-closures/)
*   [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
*   [The event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
*   [Event bubbling](http://javascript.info/tutorial/bubbling-and-capturing)
*   [Apply, call, and bind](http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/)
*   [Callbacks and promises](https://www.quora.com/Whats-the-difference-between-a-promise-and-a-callback-in-Javascript)
*   [Variable and function hoisting](http://adripofjavascript.com/blog/drips/variable-and-function-hoisting)
*   [Currying](http://www.sitepoint.com/currying-in-functional-javascript/)

#### Imperative vs. Declarative

There are two types of approaches to how JavaScript interacts with the DOM: imperative and declarative. On one hand, declarative programming focuses on _what_ happens. On the other hand, imperative programming focuses on _what_ as well as the _how._

<pre name="48f2" id="48f2" class="graf graf--pre graf-after--p">var hero = document.querySelector('.hero')</pre>

<pre name="9985" id="9985" class="graf graf--pre graf-after--pre">hero.addEventListener(‘click’, function() {  
  var newChild = document.createElement(‘p’)</pre>

<pre name="a090" id="a090" class="graf graf--pre graf-after--pre">  newChild.appendChild(document.createTextNode(‘Hello world!’))  
    newChild.setAttribute(‘class’, ‘text’)  
    newChild.setAttribute(‘data-info’, ‘header’)  
    hero.appendChild(newChild)  
 })  
}</pre>

This is an example of imperative programming where we manually query an element and store UI state in the DOM. In other words, focusing on _how_ to achieve something. The biggest problem with this code is that it is fragile. If someone working on the code changes the class name in HTML from _hero_ to _villain_, the event listener will no longer fire since there is no _hero_ class in the DOM.

Declarative programming solves this problem. Instead of having to select elements, you leave it up to the framework or library you are using. This lets you focus on the _what_ instead of the _how._ For more reading, check out [The State Of JavaScript — A Shift From Imperative To Declarative](http://www.tysoncadenhead.com/blog/the-state-of-javascript-a-shift-from-imperative-to-declarative#.Vz0WEZMrIUE) and [Three D’s of Web Development #1: Declarative vs. Imperative](http://developer.telerik.com/featured/three-ds-of-web-development-1-declarative-vs-imperative/).

This guide first teaches you the imperative approach before introducing the declarative approach with frameworks like Angular and libraries like React. I recommend learning in this order because it lets you see the problem that declarative JavaScript solves.

#### Ajax

Throughout some of these articles and tutorials, you’ve probably seen the term [Ajax](https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started) mentioned a few times. Ajax is a technique that allows web pages to interface with server using JavaScript.












[Ajax is what makes content dynamic](https://dribbble.com/shots/1911260-Loading-with-Swift)



For example, when you submit a form on a website, it collects your input and makes an HTTP request that sends that data to a server. When you post a tweet on Twitter, your Twitter client makes an HTTP request to Twitter’s server API and updates the page with the server response.

For reading on Ajax check out [What is Ajax](http://www.vandelaydesign.com/what-is-ajax-webdev/). If you still don’t entirely get the concept of AJAX, take a look at [Explain it like i’m 5, what is Ajax](https://www.reddit.com/r/explainlikeimfive/comments/19gvn9/explain_it_like_im_5_what_is_ajax/). And if all that is not enough, you can read Eloquent JavaScript’s [chapter](http://eloquentjavascript.net/17_http.html) on HTTP.

Today, the upcoming browser standard for making HTTP requests is [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). You can read more about Fetch in this article by [Dan Walsh](https://davidwalsh.name/fetch). It covers how Fetch works and how to use it. You can also find a Fetch [polyfill](http://stackoverflow.com/questions/7087331/what-is-the-meaning-of-polyfills-in-html5) with documentation [here](https://github.com/github/fetch).

#### jQuery

Up until now, you’ve been doing DOM manipulations with just JavaScript. The truth is, there are a lot of DOM manipulation libraries that provide APIs to simplify the code you write.

One of the most popular DOM manipulation libraries is [jQuery](https://jquery.com/). Keep in mind, jQuery is an imperative library. It was written before front-end systems were as complex as they are today. Today, the answer to managing complex UIs are declarative frameworks and libraries like Angular and React. However, I still recommend that you learn jQuery because you will more than likely encounter it during your career as a front-end.












[jQuery is an abstraction on top of plain JavaScript DOM manipulation](https://dribbble.com/shots/2677538-Recipe-Application)



To learn the basics of jQuery, check out jQuery’s [Learning Center](http://learn.jquery.com/). It goes step by step through important concepts like [animations](http://learn.jquery.com/effects/intro-to-effects/) and [event handling](http://learn.jquery.com/events/handling-events/). If you want a more hands on tutorial, you can give Codecademy’s [jQuery course](https://www.codecademy.com/learn/jquery) a shot.

Keep in mind, jQuery is not always the solution for imperative DOM manipulation. [PlainJS](https://plainjs.com/javascript/) and [You Might Not Need jQuery](http://youmightnotneedjquery.com/) are two good resources that show you equivalent JavaScript functions to frequently used jQuery functions.

#### ES5 vs. ES6

Another important concept to understand about JavaScript is [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) and how it relates to Javascript. There are two main flavors of JavaScript that you will encounter today: ES5 and ES6\. ES5 and ES6 are ECMAScript standards that JavaScript uses. You can think of them as versions of JavaScript. The final draft of ES5 was finalized in 2009 and that’s what you’ve been using so far.

ES6, also known as ES2015, is the new standard that brings new language constructs like [constants](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const), [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), and [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) to JavaScript. It’s important to note that ES6 bring new language features but still define them semantically in terms of ES5\. For example, classes in ES6 are merely [syntactical sugar](https://en.wikipedia.org/wiki/Syntactic_sugar) over JavaScript [prototypal inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

It’s essential to know both ES5 and ES6 as you’ll see applications today that use one or the other. A good introduction to ES6 is [ES5, ES6, ES2016, ES.Next: What’s going on with JavaScript versioning](http://benmccormick.org/2015/09/14/es5-es6-es2016-es-next-whats-going-on-with-javascript-versioning/ "ES5, ES6, ES2016, ES.Next: What's going on with JavaScript versioning?") and Dan Wahlin’s [Getting Started with ES6 — The Next Version of JavaScript](http://weblogs.asp.net/dwahlin/getting-started-with-es6-%E2%80%93-the-next-version-of-javascript). After that, you can see a full list of changes from ES5 to ES6 at [ES6 Features](http://es6-features.org/#Constants). If you want even more, check out this [Github repository](https://github.com/lukehoban/es6features) of ES6 features.

### More Practice

If you’ve reached this point, congratulate yourself. You’ve already learned a lot about JavaScript. Let’s put some of what you’ve learned into practice.

#### Experiment 3












[Flipboard.com](https://flipboard.com/)



Experiment 3 will focus on teaching you how to apply skills like DOM manipulation and jQuery. For this experiment, we’re going to take a more structured approach. Experiment 3 will be to clone Flipboard’s home page by following along with Codecademy’s [Flipboard’s home page and add interactivity with JavaScript](https://www.codecademy.com/skills/make-an-interactive-website) tutorial.

During the tutorial, focus on understanding how to make a site interactive, when to make it interactive, and how to apply jQuery.

#### Experiment 4












[Dieter Rams Clock](https://dribbble.com/shots/1036844-Clock)



Experiment 4 combines what you learned about HTML and CSS with your introductory course in JavaScript. For this experiment, you will create a clock of your own design and make it interactive with JavaScript. Before starting, I recommend reading [Decoupling Your HTML, CSS, and JavaScript](http://philipwalton.com/articles/decoupling-html-css-and-javascript/) to learn basic CSS class naming conventions when JavaScript is thrown into the mix. I also prepared a list of pens on CodePen that you can you use as reference for this experiment. For more examples, search [clock](http://codepen.io/search/pens?q=clock&limit=all&type=type-pens) on CodePen.

*   [Flat Clock](http://codepen.io/stevenfabre/pen/Cyhjb)
*   [jQuery Wall Clock](http://codepen.io/mattlitzinger/pen/ruEyz)
*   [Fancy Clock](http://codepen.io/rapidrob/pen/IGEhn)
*   [Retro Clock](http://codepen.io/OfficialAntarctica/pen/VYzvgj)
*   [Simple JavaScript Clock](http://codepen.io/dudleystorey/pen/unEyp)

You can do this experiment in one of two ways. You can either start by designing and creating the layout in HTML and CSS and then adding interactivity with JavaScript. Or you can write the JavaScript logic first and then move onto the layout. Also, you can use jQuery, but also feel free to use plain JavaScript.

### JavaScript Frameworks

With the basics of JavaScript under your belt, it’s time to learn about JavaScript frameworks. Frameworks are JavaScript libraries that help you structure and organize your code. JavaScript frameworks provide developers with repeatable solutions to complex front-end problems, like state management, routing, and performance optimization. They are commonly used to build [web apps](http://www.visionmobile.com/blog/2013/07/web-sites-vs-web-apps-what-the-experts-think/).

I won’t include a description of every JavaScript framework. However, here is a quick list of a few frameworks: [Angular](https://angularjs.org/), [React](https://facebook.github.io/react/) + [Flux](https://facebook.github.io/react/docs/flux-overview.html), [Ember](http://emberjs.com/), [Aurelia](http://aurelia.io/), [Vue](http://vuejs.org/), and [Meteor](https://www.meteor.com/). You don’t have to learn every framework. Pick one and learn it well. Don’t chase after frameworks. Instead, understand the underlying programming philosophies and principles that the frameworks are built on.

#### Architectural Patterns

Before looking at frameworks, it’s important to understand a few architectural patterns that frameworks tend to use: [model-view-controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller), [model-view-viewmodel](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel), and [model–view–presenter](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93presenter). These patterns are designed to create clear [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) between application layers.

Separation of concerns is a design principle that suggests splitting applications into different domain specific layers. For example, instead of having HTML hold application state, you can use a JavaScript object — usually called a model — to store state.

To learn more about these patterns, first read about MVC at [Chrome Developers](https://developer.chrome.com/apps/app_frameworks). After that, read [Understanding MVC And MVP (For JavaScript And Backbone Developers)](https://addyosmani.com/blog/understanding-mvc-and-mvp-for-javascript-and-backbone-developers/). In that article, don’t worry about learning Backbone, just go through the parts with explanations of MVC and MVP.

Addy Osman also wrote about MVVM in [Understanding MVVM — A Guide For JavaScript Developers](https://addyosmani.com/blog/understanding-mvvm-a-guide-for-javascript-developers/). To learn about the origins of MVC and why it came about, read Martin Fowler’s essay on [GUI Architectures](http://martinfowler.com/eaaDev/uiArchs.html). Finally, read the section, [JavaScript MV* Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailmvcmvp), in Learning JavaScript Design Patterns. [Learning JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/) is a fantastic free online book.

#### Design Patterns

JavaScript frameworks don’t reinvent the wheel. Most of them rely on [design patterns](https://en.wikipedia.org/wiki/Software_design_pattern). You can think of design patterns as general templates for solving common problems in software development.

While understanding JavaScript design patterns isn’t a prerequisite for learning a framework, I suggest looking through the following list at some point.

*   [Decorator](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#decoratorpatternjavascript)
*   [Factory](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#factorypatternjavascript)
*   [Singleton](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript)
*   [Revealing module](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript)
*   [Facade](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#facadepatternjavascript)
*   [Observer](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript)

Understanding and being able to implement some of these design patterns will not only make you a better engineer but will also help you understand what some frameworks are doing under the hood.

#### AngularJS

AngularJS is a JavaScript [MVC](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailmvc) and sometimes [MVVM](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailmvvm) framework. It’s maintained by Google and took the JavaScript community by storm when it was first released in 2010.












[AngularJS - what HTML would have been](https://dribbble.com/shots/2445643-Angular-JS-Developers)



Angular is a declarative framework. One of the most helpful reading that helped me understand how to transition from imperative to declarative JavaScript programming was [How is AngularJS different from jQuery](http://stackoverflow.com/questions/13151725/how-is-angularjs-different-from-jquery) on StackOverflow.

If you want to learn more about Angular, check out the Angular [documentation](https://docs.angularjs.org/guide). They also have a tutorial called [Angular Cat](https://docs.angularjs.org/tutorial/step_00) that lets you jump into coding right away. A more complete guide to learning Angular can be found in this [Github repository](https://github.com/timjacobi/angular2-education) by Tim Jacobi. Also, check out this definitive [best practice styleguide](https://github.com/johnpapa/angular-styleguide) written by John Papa.

#### React + Flux

Angular solves a lot of problems that developers face when building complex front-end systems. Another popular tool is [React](https://facebook.github.io/react/), which is a library for building user interfaces. You can think of it as the V in MVC. Since React is only a library, it’s often seen with an architecture known as [Flux](https://facebook.github.io/flux/).












[A JavaScript library for building interfaces](https://dribbble.com/shots/2484828-React-Illustration)



Facebook designed React and Flux to address some of the shortcomings of MVC and its problems at scale. Take a look at their well-known presentation [Hacker Way: Rethinking Web App Development at Facebook](https://www.youtube.com/watch?list=PLb0IAmt7-GS188xDYE-u1ShQmFFGbrk0v&v=nYkdrAPrdcw). It goes over Flux and it’s origins.





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/ab9ae3e28a530497972d6c4d695dff2b?postId=adfa4824da9b" data-media-id="ab9ae3e28a530497972d6c4d695dff2b" allowfullscreen="" frameborder="0"></iframe>





To get started with React and Flux, first learn React. A good primer is the [React documentation](https://facebook.github.io/react/docs/getting-started.html). After that, check out [React.js Introduction For People Who Know Just Enough jQuery To Get By](http://reactfordesigners.com/labs/reactjs-introduction-for-people-who-know-just-enough-jquery-to-get-by/) to help you transition from the jQuery mindset.

Once you have a basic understanding of React, start learning Flux. A good place to start is the [official Flux documentation](https://facebook.github.io/flux/docs/overview.html). After that check out [Awesome React](https://github.com/enaqx/awesome-react), which is a curated list of links that will help you advance further in your learning.

### Practicing with Frameworks

Now that you have some basic knowledge of JavaScript frameworks and architectural patterns, it’s time to put it to practice. During these two experiments, focus on applying the architectural concepts that you have learned. In particular, keep your code [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), have a [clear separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns), and adhere to the [single responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle).

#### Experiment 5

Experiment 5 is to take apart and rebuild the Todo MVC app using framework agnostic JavaScript. In other words, plain old JavaScript without a framework. The purpose of this experiment is to show you how MVC works without mixing in framework specific syntax.














To get started, check out the end result at [TodoMVC](http://todomvc.com/examples/vanillajs/). The first step is to create a new project locally and first establish the three components of MVC. Since this is an involved experiment, reference the full source code in this [Github repository](https://github.com/tastejs/todomvc/tree/gh-pages/examples/vanillajs). If you can’t completely replicate the project or don’t have time, that’s fine. Download the repo code and play around with the different MVC components until you understand how they correlate to one another.

#### Experiment 6

Experiment 6 was a good exercise in applying MVC. Understanding MVC is an important step towards learning JavaScript frameworks. Experiment 6 is to follow a tutorial by Scotch.io to build an Etsy clone with Angular.














[Build an Etsy Clone with Angular and Stamplay](https://scotch.io/tutorials/build-an-etsy-clone-with-angular-and-stamplay-part-1) will teach you how to build a web app with Angular, interface with [APIs](https://en.wikipedia.org/wiki/Application_programming_interface), and how to structure large projects. After doing this tutorial, be able to answer the following questions.

*   What is a web app?
*   How is MVC/MVVM applied with Angular?
*   What is an API and what does it do?
*   How do you organize and structure large code bases?
*   What are the advantages of breaking your UI into directive components?

If you want to try your hand at building more Angular web apps, try [Build a Real-Time Status Update App with AngularJS & Firebase](https://www.sitepoint.com/real-time-status-update-app-angularjs-firebase/).

#### Experiment 7












[React and Flux are a powerful combination for building complex web apps](https://egghead.io/series/react-flux-architecture)



Now that you’ve applied MVC, it’s time to try [Flux](https://facebook.github.io/flux/). Experiment 7 is to build a todo list using [React](https://facebook.github.io/react/) and Flux architecture. You can find the full tutorial on [Facebook’s Flux documentation site](https://facebook.github.io/flux/docs/todo-list.html). It will teach you step by step how to use React to build interfaces and how Flux is applied to building web apps.

Once you’ve completed that tutorial, you can move onto more involved tutorials like [How to Build a Todo App Using React, Redux, and Immutable.js](https://www.sitepoint.com/how-to-build-a-todo-app-using-react-redux-and-immutable-js/) and [Build a Microblogging App With Flux and React](http://code.tutsplus.com/courses/build-a-microblogging-app-with-flux-and-react).

### Stay current

Just like the rest of front-end, the JavaScript landscape moves fast. It’s important to stay ahead of the curve.












[The JavaScript landscape changes fast](http://www.deviantart.com/art/Fantasy-Ocean-Landscape-497289755)



Below is a list of websites, blogs, and forums that are both enjoyable to read and informative.

*   [Smashing Magazine](https://www.smashingmagazine.com/tag/javascript/)
*   [JavaScript Weekly](http://javascriptweekly.com/)
*   [Ng Weekly](http://www.ng-newsletter.com/)
*   [Reddit JavaScript](https://www.reddit.com/r/javascript/)
*   [JavaScript Jabber](https://devchat.tv/js-jabber)

### Learn by example

As always, the best way to learn is by example.

#### Styleguides

JavaScript styleguides are sets of coding conventions designed to help keep your code readable and maintainable.

*   [AirBnB JavaScript Styleguide](https://github.com/airbnb/javascript)
*   [Principles of Writing Consistent, Idiomatic JavaScript](https://github.com/rwaldron/idiomatic.js/)
*   [Node Styleguide](https://github.com/felixge/node-style-guide)
*   [MDN Coding Style](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Coding_Style)

#### Codebases

I can’t emphasize how helpful it is to read good code. Learn how to search [Github](https://github.com/) for relevant repositories whenever picking up something new.

*   [Lodash](https://github.com/lodash/lodash)
*   [Underscore](https://github.com/jashkenas/underscore)
*   [Babel](https://github.com/babel/babel)
*   [Ghost](https://github.com/TryGhost/Ghost)
*   [NodeBB](https://github.com/NodeBB/NodeBB)
*   [KeystoneJS](https://github.com/keystonejs/keystone)

### Wrap up

By the end of this guide, you should have a solid grasp of JavaScript fundamentals and how to apply them to the web. Remember, this guide gives you a general road map. If you want to become a front-end hero, it’s important that you spend time working on projects to apply these concepts. The more projects you do and the more passionate you are about them, the more you will learn.

This article is the second part to the two part series. What’s missing from this guide is an introduction to [Node](https://nodejs.org/en/), which is a platform that allows JavaScript to run on servers. In the future, I may write a part three that goes over server-side development with Node and things like [noSQL](https://en.wikipedia.org/wiki/NoSQL) databases.

If you want me to elaborate on anything or have any questions, feel free to leave me a note or [Tweet](https://twitter.com/jonathanzwhite) out to me.

_P.S. If you liked this article, it would mean a lot if you hit the recommend button or share with friends._











* * *







If you want more, you can follow me on [Twitter](https://twitter.com/JonathanZWhite) where I post non-sensical ramblings about design, front-end development, bots, and machine learning.







 [


](https://twitter.com/JonathanZWhite) 























