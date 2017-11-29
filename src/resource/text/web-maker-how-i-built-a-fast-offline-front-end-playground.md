---
author: kushagra gour
authorTwitter: https://twitter.com/chinchang457
authorFacebook: none
title: "Web Maker — How I built a fast, offline front-end playground"
subTitle: "Web Maker is a Chrome extension that gives you a blazing fast and offline front-end playground — right inside your browser...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*V5SvqQu7FekmKtIa0r4ZiQ.png
url: https://medium.freecodecamp.org/web-maker-how-i-built-a-fast-offline-front-end-playground-9fe3629bc86f
id: web-maker-how-i-built-a-fast-offline-front-end-playground-9fe3629bc86f
date: 2017-07-31T18:34:26.538Z
tags: [
  "Web Development",
  "Tech",
  "Startup",
  "Design",
  "Open Source"
]
---
# Web Maker — How I built a fast, offline front-end playground







![](https://cdn-images-1.medium.com/max/2000/1*V5SvqQu7FekmKtIa0r4ZiQ.png)







[Web Maker](https://webmakerapp.com/) is a Chrome extension that gives you a blazing fast and offline front-end playground — right inside your browser.

It’s used daily by thousands of developers around the world and has a [5 star rating from 300+ users](https://chrome.google.com/webstore/detail/web-maker/lkfkkhfhhdkiemehlpkgjeojomhpccnh/reviews). It was also a homepage featured extension on the Chrome Webstore.

You can use Web Maker to play with HTML, CSS and JavaScript right in the browser without any external editor or specific setup. You can use things like Angular, React, Sass, Babel, or Atomic CSS — just like that.

### Why I made web maker

If you’re a front-end developer, you’ve probably tried one or more of the code playgrounds out there — like CodePen, JSBin, JSFiddle — to figure out code issues or to discuss snippets and logic pieces with colleagues.

They’re all great and do the job perfectly.

But I’ve always felt a slight friction in using them over the internet — there’s an inherent delay between starting them up and being able to use them.

I also wanted a quick way to hack stuff while traveling or waiting at the airport, where you’re mostly offline. I could go with traditional editor and browser thing, but that requires a bit of setup.

When I thought more about it, I realized there are many places in the world with limited or no internet connectivity at all. People who want to learn and do web development there can’t use these online playgrounds. That shouldn’t stop them from learning and creating things!

I tried looking for something that could give me what I wanted, but couldn’t find any. And so Web Maker was born.

### How I made Web Maker

The initial version of Web Maker was very basic. It had three editable sections (which were CodeMirror instances) for HTML, CSS, and JavaScript each. Whenever code was updated, it was combined into an HTML string with everything placed inline. This HTML string was then dumped inside an iframe document and rendered.

This process has changed over time and multiple features have shipped since then. There are many interesting decisions, features, logic pieces and challenges that I’ll share in this article.

### Chrome extension — the ultimate distribution platform

I wanted a very simple distribution platform for Web Maker since it was in early stages. I also wanted something with a wide reach, so I chose to make it a Chrome extension.

The Chrome Web Store is a breeze to use. Pushing an update is very easy and quick. The Chrome extension platform also offers capabilities that can be leveraged into interesting features. One example in Web Maker is screenshot capture of preview. It uses the `[captureVisibleTab](https://developer.chrome.com/extensions/tabs#method-captureVisibleTab)` API to grab the preview iframe’s screenshot and then the `[downloads](https://developer.chrome.com/extensions/downloads)` API to download it for you with a click of a button.

### Written in vanilla JavaScript and CSS

I have worked with JavaScript frameworks like [Angular](https://angularjs.org/) and [Vue](https://vuejs.org/) in small and large-scale applications. I could have used any of the available frameworks here too. But for Web Maker I decided to go vanilla to challenge myself and see how far could I go without a framework until the codebase becomes spaghetti. I wanted to use all the knowledge I have gained from working with those frameworks and libraries to keep the code sane, organized and DRY.

As most projects do, I started with a single `script.js` JavaScript file. To keep the codebase modular and organized, I moved big independent chunks out of it into separate files as needed (for example, [utils.js](https://github.com/chinchang/web-maker/blob/master/src/utils.js) and [dropdown.js](https://github.com/chinchang/web-maker/blob/master/src/dropdown.js)).

Apart from that I also wrote a small directive system (like in angular/Vue) that lets me do things like:

<pre name="93a1" id="93a1" class="graf graf--pre graf-after--p">Button</pre>

and

<pre name="5403" id="5403" class="graf graf--pre graf-after--p"><input d-change=”someOtherFunction” ></pre>

_Note: I couldn’t use inline scripts like_ `_onclick_` _or_ `_onchange_`_. They’re not allowed in Chrome extensions due to security restrictions._

For CSS too, Web Maker only relies on browser provided features like CSS variables. Since I developed Web Maker just for Chrome, I can safely use new upcoming features without worrying about cross browser support — another perk of building a Chrome extension.

I plan to look into [web components](https://www.webcomponents.org/) to break the UI into independent components.

### Preview generation

As I mentioned earlier, in the first version of the app, the final preview was simply an HTML string which had user’s CSS as an inlined style tag and user’s JavaScript as inlined script tag. And this HTML string was written in a temporary HTML file which loaded in an iframe. The HTML file looked something like this:

<pre name="8de2" id="8de2" class="graf graf--pre graf-after--p"><html>  
 <head>  
  <style>  
   user CSS here...  
  </style>  
 </head>  
 <body>  
  user html here...  
  <script>user JS here...</script>   
 </body>  
</html></pre>

But while working on the version 2.0 of Web Maker I found that on Chrome Canary (v57 at the time) the preview was no longer running the user’s JavaScript. Upon inspection, I found a chrome policy error in the developer console that said:

> Refused to execute inline script because it violates the following Content Security Policy directive…

Now, I already knew that the Content Security Policy (CSP) didn’t allow me to put inline scripts into a Chrome extension’s markup, and I had all my JavaScript in separate files. This was different. _Starting with Chrome 57, the CSP had started applying to preview iframes, too._ The solution was to move the user’s JavaScript from inline to a separate JavaScript file.

So I refactored the logic and now on every refresh, the user’s JavaScript is written into a temporary JavaScript file. This is then loaded in the preview iframe.

Note that the preview iframe isn’t refreshed on every keystroke in the editor. The refresh is [debounced](https://davidwalsh.name/javascript-debounce-function) on user input — so the preview is only refreshed when the user has stopped typing for a short duration. Otherwise, it would result in a lot of unnecessary refreshes as the user is typing.

CSS updating is a little different though. Unlike HTML and JavaScript where the complete iframe is refreshed, CSS updates whenever it’s edited in the style tag of the iframe. There is no file writing or iframe refresh involved. Hence, for CSS, the preview refresh is a lot faster.

### Infinite loop prevention in JavaScript

As I mentioned above, the preview refreshes as soon as the user stops typing. At this point, it’s possible that user paused while writing a loop in JavaScript, resulting in a partial form. Something like:

    for (var i = 0; i<10; [user_cursor_here]) {}

The increment/decrement condition is missing from this JavaScript — so if it was put inside the iframe, the browser tab would choke! Such cases need to be prevented by any playground like Web Maker.

Web Maker does this by parsing user’s JavaScript and modifying all the loops so that each loop keeps checking if it hasn’t taken too long to run.

Basically, this:

    for (var i = 0; i<10; [user_cursor_here]) {}

is converted to:

    var 

If we spend more than a second inside a loop, we break and come out.

I use [Esprima](http://esprima.org/) for all this instrumentation. Here is a [detailed blog post](https://kushagragour.in/blog/2017/02/web-maker-infinite-loop-prevention/) on how it’s done. Note, the logic mentioned in the blog post was recently refactored to be more efficient, as [suggested](https://twitter.com/AriyaHidayat/status/832302074704523267) by Esprima’s author Ariya Hidayat.

### Preprocessors

Like most front-end playground, Web Maker gives many preprocessors for each HTML, CSS, and JavaScript.

Adding any preprocessor in the app requires getting hold of its transpiler (source-to-source compiler) and understanding how it transpiles the input code. You also need to know that it displays transpilation errors besides every line.

Now almost all of the online playgrounds out there transpile your code on their server. But Web Maker has no server — it sits in your browser and runs in your browser.

Many transpilers are meant to be run only in a NodeJS environment, so I made an effort to bundle them into browser compatible code. Web Maker uses transpilers like [CoffeeScript](http://coffeescript.org/v1/browser-compiler/coffee-script.js), [SASS](https://github.com/medialize/sass.js/), and [Babel](https://github.com/babel/babel-standalone).

Upon every change in the editor, the user’s code is sent to the appropriate transpiler, and then the transpiled code is sent to preview generation. I used a Promise based API for transpiling code for two reasons:

1.  SASS transpiler is not synchronous. It uses a worker to convert the SASS code to CSS on a separate thread.
2.  I might move other transpilers to a separate worker too. Source compilation can sometimes take a long time. It can also result in infinite loops, blocking the main UI thread in such cases. Thus it’s better to move them to separate worker.

For example, the function that converts JavaScript looks like this in a broad sense:

<pre name="7bbf" id="7bbf" class="graf graf--pre graf-after--p">function computeJs() {  
 var d = deferred();  
 if (jsMode === JsModes.COFFEESCRIPT) {  

  try {  
   code = CoffeeScript.compile(code, { bare: true });  
  } catch (e) {  
   showErrors(  
    'js',  
    [{ lineNumber: e.location.first_line, message: e.message }]  
   );     
  } finally {  
   d.resolve(code);  
  }  
}</pre>

### Storage

Version 2.0 of Web Maker shipped with a very important capability to store user creations.

I decided to use `localStorage`. So, even if you are working on a different machine you can save all your Web Maker settings like indentation size, theme etc.

It would have been great if even the creations were stored in synced storage like the extension’s settings. That way they’d be accessible across devices. Synced storage come with comparatively lower space quota, however, and I didn’t want to risk the saved work.

You may be able to save all your work on the cloud in future versions!

Web Maker also has an option to export and import all the saved creations.

### Built on open web technologies and open-source libraries

Web Maker is build over multiple awesome open source libraries and is itself [open source](https://github.com/chinchang/web-maker).

The three editor panes where you actually type the code is is built with [CodeMirror](https://codemirror.net/). CodeMirror comes with a lot of add-ons and modes, which allows Web Maker to support code autocompletion, code folding, syntax highlighting, and themes.

Thanks to [Esprima](http://esprima.org/), you can see generic JavaScript errors in your code as you type in the editor. As I mentioned before, Esprima also helps prevent infinite loops.

Apart from that Web Maker uses [Split.js](https://nathancahill.github.io/Split.js/), [Hint.css](https://kushagragour.in/lab/hint/), [Emmet](https://emmet.io/), [Inlet.js](https://github.com/enjalot/Inlet), and even Web Maker! Yes, Web Maker is made inside Web Maker.

### Challenges

There were many slowdowns during the development, but I would like to talk about two major ones.

As I mentioned, when I was working on version 2.0, I discovered a major change in Chrome 57 which broke the ability to put inline scripts into the extension’s markup.

There was also a feature shipped with 2.0 that allowed the user to add any number of external JavaScript or CSS libraries. When the user enters a JavaScript library URL, it is added as a script tag with the `src` attribute set to the URL. Chrome extension CSP, apart from preventing inline JavaScript, also restricts JavaScript from loading domains except those mentioned in the CSP — which meant that user won’t be able to load external JavaScript from any random domain.

This is currently partially solved by whitelisting all the major CDNs in the `manifest.json` file. It’s still not perfect as user cannot load JavaScript from any domain apart from those.

Another big thing that hit me was the _Preview Screenshot_ feature. This feature allows the user to grab a screenshot of the current preview and download it as an image with a click of a button. This feature required me to bring in two more permissions: `downloads` and ``.

<`all_urls>` is actually a weird permission, but it’s a must-have if you want to use the `[captureVisibleTab](https://developer.chrome.com/extensions/tabs#method-captureVisibleTab)` API. Here’s how it looks while installing the extension:



![](https://cdn-images-1.medium.com/max/1600/1*QhETbSivnKLVY-U5H8iaNg.png)

Permissions dialog while installing Web Maker



The first line is pretty scary for anyone installing the extension.

Additionally, if you add a new permission for a new version of an extension, Chrome disables the installed extension and shows a popup that the extension requires new permission.

This alarmed some users who already had Web Maker installed. Many people who saw this new permission being asked, didn’t allow it, and uninstalled it right away.

After this particular release, I saw a big spike in the number of uninstalls.

The moral of the story: Be careful with the permissions you add to your app. Unless required for core-functioning, always go for optional in-app permissions.

### Summing it up

Web Maker has come quite far in terms of usability, features, and adoption. Being quick and offline makes it usable in huge number of scenarios, from doing web experiments on a train/plane to teaching a classroom of students.

Web Maker can also be used by professionals and beginners in areas where the internet is slow or not present at all.

And I am sure [Web Maker](https://webmakerapp.com/) can help [FreeCodeCamp](https://www.freecodecamp.com/) campers tremendously in their learnings and practice.

Moreover, Web Maker is [open-source](https://github.com/chinchang/web-maker), so everyone is welcome to suggest and implement features they think would make it more useful. It could be your first step to learn [some practical JavaScript](https://hackernoon.com/unconventional-way-of-learning-a-new-programming-language-e4d1f600342c) by contributing.











* * *







If you have any suggestions, comments or questions, tweet them [@webmakerApp](https://twitter.com/webmakerApp). I am excited to hear your feedback and experience with it.

[Install Web Maker](https://webmakerapp.com/) and give it a spin and follow [Web Maker](https://medium.com/web-maker) on Medium for tips, tricks and how-to articles.








