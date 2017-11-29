---
author: Preethi Kasireddy
authorTwitter: https://twitter.com/iam_preethi
authorFacebook: https://facebook.com/10152986375997506
title: "JavaScript Modules Part 2: Module Bundling"
subTitle: "In Part I of this post, I talked about what modules are, why developers use them, and the various ways to incorporate them into your prog..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*e0eQH_9X8jN7yC6AEqlvdQ.jpeg
url: https://medium.freecodecamp.org/javascript-modules-part-2-module-bundling-5020383cf306
id: javascript-modules-part-2-module-bundling-5020383cf306
date: 2016-02-05T16:42:12.561Z
tags: [
  "JavaScript",
  "ES6",
  "Programming",
  "Technology",
  "Software Development"
]
---
# JavaScript Modules Part 2: Module Bundling







![](https://cdn-images-1.medium.com/max/2000/1*e0eQH_9X8jN7yC6AEqlvdQ.jpeg)

[http://alpha.wallhaven.cc/wallpaper/33246](http://alpha.wallhaven.cc/wallpaper/33246)







In [Part I](https://medium.freecodecamp.com/javascript-modules-a-beginner-s-guide-783f7d7a5fcc?source=latest---------1) of this post, I talked about what modules are, why developers use them, and the various ways to incorporate them into your programs.

In this second part, I’ll tackle what exactly it means to “bundle” modules: why we bundle modules, the different ways to do so, and the future of modules in web development.

### What is module bundling?

On a high level, module bundling is simply the process of stitching together a group of modules (and their dependencies) into a single file (or group of files) in the correct order.

As with all aspects of web development, the devil is in the details. :)

### Why bundle modules at all?

When you divide your program into modules, you typically organize those modules into different files and folders. Chances are, you’ll also have a group of modules for the libraries you’re using, like Underscore or React.

As a result, each of those files has to be included in your main HTML file in a **_<script>_** tag, which is then loaded by the browser when a user visits your home page. Having separate **_<script>_** tags for each file means that the browser has to load each file individually: one… by… one.

…Which is bad news for page load time.

To get around this problem, we bundle, or “concatenate” all our files into one big file (or a couple files as the case may be) in order to reduce the number of requests. When you hear developers talking about the “build step” or “build process,” this is what they’re talking about.

Another common approach to speed up the bundling operation is to “minify” the bundled code. Minification is the process of removing unnecessary characters from source code (e.g. whitespace, comments, new line characters, etc.), in order to reduce the overall size of the content without changing the functionality of the code.

Less data means less browser processing time, which in turn reduces the time it takes to download files. If you’ve ever seen a file that had a “min” extension like “[underscore-min.js](https://github.com/jashkenas/underscore/blob/master/underscore-min.js)”, you probably noticed that the minified version is pretty tiny (and unreadable) compared to the [full version](https://github.com/jashkenas/underscore/blob/master/underscore.js).

Task runners like Gulp and Grunt make concatenation and minification straightforward for developers, ensuring that human-readable code stays exposed for developers while machine-optimized code gets bundled for browsers.

### What are the different ways to bundle modules?

Concatenating and minifying your files works great when you’re using one of the standard module patterns (discussed in the [previous post](https://medium.freecodecamp.com/javascript-modules-a-beginner-s-guide-783f7d7a5fcc#.y8hs0nsne)) to define your modules. All you’re really doing is mashing together a bunch of plain vanilla JavaScript code.

However, if you’re adhering to _non-native_ module systems that browsers can’t interpret like CommonJS or AMD (or even _native_ ES6 module formats), you’ll need to use a specialized tool to convert your modules into properly-ordered browser-friendly code. That’s where Browserify, RequireJS, Webpack, and other “module bundlers” or “module loaders” come into play.

In addition to bundling and/or loading your modules, module bundlers offer a ton of additional features like auto-recompiling code when you make a change or producing source maps for debugging.

Let’s walk through some common module bundling methods:

### Bundling CommonJS

As you know from [Part 1](https://medium.freecodecamp.com/javascript-modules-a-beginner-s-guide-783f7d7a5fcc#.y8hs0nsne), CommonJS loads modules synchronously, which would be fine except that it’s not practical for browsers. I mentioned that there was a workaround to this — one of them is a module bundler called Browserify. Browserify is a tool that compiles CommonJS modules for the browser.

For example, let’s say you have this main.js file that imports a module to calculate the average of an array of numbers:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/5f754145153f26483ff0ebcd5d5cd3ef?postId=5020383cf306" data-media-id="5f754145153f26483ff0ebcd5d5cd3ef" allowfullscreen="" frameborder="0"></iframe>





So in this case, we have one dependency (myDependency). Using the command below, Browserify recursively bundles up all the required module(s) starting at main.js into a single file called bundle.js:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/25322d1eaca04c36d6e53d660e12ef25?postId=5020383cf306" data-media-id="25322d1eaca04c36d6e53d660e12ef25" allowfullscreen="" frameborder="0"></iframe>





Browserify does this by jumping in to parse the [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) for each **_require_** call in order to traverse the entire dependency graph of your project. Once it’s figured out how your dependencies are structured, it bundles them all in the right order into a single file. At that point, all you have to do is insert a single **_<script>_** tag with your **_“bundle.js”_** file into your html to ensure that all of your source code is downloaded in one HTTP request. Bam! Bundled to go.

Similarly, if you have multiple files with multiple dependencies, you simply tell Browserify what your entry file is and sit back while it does its magic.

The final product: bundled files prepped and ready for tools like Minify-JS to minify the bundled code.

### Bundling AMD

If you’re using AMD, you’ll want to use an AMD _loader_ like RequireJS or Curl. A module loader (vs. a bundler) dynamically loads modules that your program needs to run.

As a reminder, one of the main differences of AMD over CommonJS is that it loads modules asynchronously. In this sense, with AMD, you technically don’t actually need a build step where you bundle your modules into one file since you’re loading your modules asynchronously — meaning you’re progressively downloading only those files which are strictly necessary to execute the program instead of downloading all the files at once when the user first visits the page.

In reality, however, the overhead of high-volume requests over time for every user action doesn’t make much sense in production. Most web developers still use build tools to bundle and minify their AMD modules for optimal performance, using tools like RequireJS optimizer, [r.js](http://requirejs.org/docs/optimization.html), for example.

Overall, the difference between AMD and CommonJS when it comes to bundling is this: during development, AMD apps can get away without a build step. At least, until you push the code live, at which point optimizers like r.js can step in to handle it.

For an interesting discussion on CommonJS vs. AMD, check out this post at [Tom Dale’s blog](http://tomdale.net/2012/01/amd-is-not-the-answer/) :)

### Webpack

So far as bundlers go, Webpack is the new kid on the block. It was designed to be agnostic to the module system you use, allowing developers to use CommonJS, AMD, or ES6 as appropriate.

You might be wondering why we need Webpack when we already have other bundlers like Browserify and RequireJS that get the job done and do a pretty darn good job at it. Well, for one, Webpack provides some useful features like “code splitting” — a way to split your codebase into “chunks” which are loaded on demand.

For example, if you have a web app with blocks of code that are only required under certain circumstances, it might not be efficient to put the whole codebase into a single massive bundled file. In this case, you could use code splitting to extract code into bundled chunks that can be loaded on demand, avoiding trouble with big up-front payloads when most users only need the core of your application.

Code splitting is just one of many compelling features Webpack offers, and the Internet is full of strong opinion pieces on whether Webpack or Browserify is better. Here are just a few of the more level-headed discussions that I found useful for wrapping my head around the issue:

*   [https://gist.github.com/substack/68f8d502be42d5cd4942](https://gist.github.com/substack/68f8d502be42d5cd4942)
*   [http://mattdesl.svbtle.com/browserify-vs-webpack](http://mattdesl.svbtle.com/browserify-vs-webpack)
*   [http://blog.namangoel.com/browserify-vs-webpack-js-drama](http://blog.namangoel.com/browserify-vs-webpack-js-drama)

### ES6 modules

Back already? Good! Because next up I want to talk about ES6 modules, which in some ways could reduce the need for bundlers in the future. (you’ll see what I mean momentarily.) First, let’s understand how ES6 modules are loaded.

The most important difference between the current JS Module formats (CommonJS, AMD) and ES6 modules is that ES6 modules are designed with static analysis in mind. What this means is that when you import modules, the import is resolved at compile time — that is, before the script starts executing. This allows us to remove exports that are not used by other modules before we run the program. Removing unused exports can lead to significant space savings, reducing stress on the browser.

One common question that comes up is: how is this any different from the dead code elimination that happens when you use something like UglifyJS to minify your code? The answer is, as always, “it depends.”

_(NOTE: Dead code elimination is an optimization step which removes unused code and variables — think of it as removing the excess baggage that your bundled program doesn’t need to run, *after* it’s been bundled)._

Sometimes, dead code elimination could work exactly the same between UglifyJS and ES6 modules, and other times not. There’s a cool example at [Rollup’s wiki](https://github.com/rollup/rollup)) if you want to check it out.

What makes ES6 modules different is the different approach to dead code elimination, called “tree shaking”. Tree shaking is essentially dead code elimination reversed. It only _includes_ code that your bundle needs to run, rather than excluding code your bundle doesn’t need. Let’s look at an example of tree shaking:

Let’s say we have a utils.js file with the functions below, each of which we export using ES6 syntax:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ec77b878169ee96b082bc64749970084?postId=5020383cf306" data-media-id="ec77b878169ee96b082bc64749970084" allowfullscreen="" frameborder="0"></iframe>





Next, let’s say we don’t know what utils functions we want to use in our program, so we go ahead and import all of the modules in main.js like so:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b0138adcd916f39c39c679b522fdc458?postId=5020383cf306" data-media-id="b0138adcd916f39c39c679b522fdc458" allowfullscreen="" frameborder="0"></iframe>





And then we later end up only using the each function:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ee8d734f183d29fca8febcc6b1480364?postId=5020383cf306" data-media-id="ee8d734f183d29fca8febcc6b1480364" allowfullscreen="" frameborder="0"></iframe>





The “tree shaken” version of our main.js file would look like this once the modules have been loaded:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b85b72e8d19ad13b09cc39339fde7905?postId=5020383cf306" data-media-id="b85b72e8d19ad13b09cc39339fde7905" allowfullscreen="" frameborder="0"></iframe>





Notice how the only exports included are the ones we use: **each**.

Meanwhile, if we decide to use the filter function instead of the each function, we wind up looking at something like this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/6eab3a110307068b35f9697c02d5a6ec?postId=5020383cf306" data-media-id="6eab3a110307068b35f9697c02d5a6ec" allowfullscreen="" frameborder="0"></iframe>





The tree shaken version looks like:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b5019f0164f18c7fc6e8b8712a8466f3?postId=5020383cf306" data-media-id="b5019f0164f18c7fc6e8b8712a8466f3" allowfullscreen="" frameborder="0"></iframe>





Notice how this time both **_each_** and **_filter_** are included. This is because **_filter_** is defined to use **_each_**, so we need both exports for the module to work.

Pretty slick, huh?

I challenge you to play around and explore tree shaking in Rollup.js’s [live demo and editor](http://rollupjs.org/).

### Building ES6 modules

Ok, so we know that ES6 modules are loaded differently than other module formats, but we still haven’t talked about the build step for when you’re using ES6 modules.

Unfortunately, ES6 modules still require some extra work, since there isn’t a native implementation for how browsers load ES6 modules just yet.



![](https://cdn-images-1.medium.com/max/1600/1*lpAgpggDLcK1a3MBEbmODg.png)

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)



Here are a couple of the options for building/converting ES6 modules to work in the browser, with **#1** being the most common approach today:

1.  Use a transpiler (e.g. Babel or Traceur) to transpile your ES6 code to ES5 code in either CommonJS, AMD, or UMD format. Then pipe the transpiled code through a module bundler like Browserify or Webpack to create one or more bundled files.
2.  Use [Rollup.js](http://rollupjs.org/), which is very similar to option #1 except that Rollup piggybacks on the power of ES6 modules to statically analyze your ES6 code and dependencies before bundling. It uses “tree shaking” to include the bare minimum in your bundle. Overall, the main benefit of Rollup.js over Browserify or Webpack when you’re using ES6 modules is that tree shaking could make your bundles smaller. The caveat is that Rollup provide several formats to bundle your code to, including ES6, CommonJS, AMD, UMD, or IIFE. The IIFE and UMD bundles would work in your browser as they are, but if you choose to bundle to AMD, CommonJS, or ES6, you need to find other methods to convert that code into a format the browser understands (e.g. by using Browserify, Webpack, RequireJS, etc.).

### Jumping through hoops

As web developers, we have to jump through a lot of hoops. It’s not always easy to convert our beautiful ES6 modules into something browsers can interpret.

The question is, when will ES6 modules run in the browser without all this overhead?

The answer, thankfully, “sooner than later.”

ECMAScript currently has a specification for a solution called the [ECMAScript 6 module loader API](https://github.com/ModuleLoader/es6-module-loader). In short, this is a programmatic, Promise-based API that is supposed to dynamically load your modules and cache them so that subsequent imports do not reload a new version of the module.

It’ll look something like this:

**myModule.js**





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/76214289358850ffc4e1024ae9960f2e?postId=5020383cf306" data-media-id="76214289358850ffc4e1024ae9960f2e" allowfullscreen="" frameborder="0"></iframe>





**main.js**





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/552a1d073d7c047b7797039a9881b62b?postId=5020383cf306" data-media-id="552a1d073d7c047b7797039a9881b62b" allowfullscreen="" frameborder="0"></iframe>





Alternately, you could also define modules by specifying “type=module” directly in the script tag, like so:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/121a6ee0064027770d88aecee972ec5f?postId=5020383cf306" data-media-id="121a6ee0064027770d88aecee972ec5f" allowfullscreen="" frameborder="0"></iframe>





If you haven’t checked out the repo for the module loader API polyfill yet, I strongly encourage you to at least [take a peek](https://github.com/ModuleLoader/es6-module-loader).

Moreover, if you want to test-drive this approach, check out [SystemJS](https://github.com/systemjs/systemjs), which is built on top of the [ES6 Module Loader polyfill](https://github.com/ModuleLoader/es6-module-loader) . SystemJS dynamically loads any module format (ES6 modules, AMD, CommonJS and/or global scripts) in the browser and in Node. It keeps track of all loaded modules in a “module registry” to avoid re-loading modules that were previously loaded. Not to mention that it also automatically transpiles ES6 modules (if you simply set an option) and has the ability to load any module type from any other type! Pretty neat.

### Will we still need bundlers now that we have native ES6 modules?

The rising popularity of ES6 modules has some interesting consequences:

#### Will HTTP/2 make module bundlers obsolete?

With HTTP/1, we’re only allowed one request per TCP connection. That’s why in loading multiple resources requires multiple requests. With HTTP/2, everything changes. HTTP/2 is fully multiplexed, meaning multiple requests and responses can happen in parallel. As a result, we can serve multiple requests simultaneously with a single connection.

Since the cost per HTTP request is significantly lower than HTTP/1, loading a bunch of modules isn’t going to be a huge performance issue in the long run. Some argue that this means module bundling isn’t going to be necessary anymore. It’s certainly possible, but it really depends on the situation.

For one, module bundling offers benefits that HTTP/2 doesn’t account for, like removing unused exports to save space. If you’re building a website where every tiny bit of performance matters, bundling may give you incremental advantages in the long run. That said, if your performance needs aren’t so extreme, you could potentially save time at minimal cost by skipping the build step altogether.

Overall, we’re still pretty far away from having a majority of websites serving their code over HTTP/2\. I’m inclined to predict that the build process is here to stay _at least_ for the near term.

PS: There are other differences with HTTP/2 as well, and if you’re curious, here’s a [great resource](https://http2.github.io/faq/#what-are-the-key-differences-to-http1x).

#### Will CommonJS , AMD, and UMD become obsolete?

Once ES6 becomes _the_ module standard, do we really need other non-native module formats?

I doubt it.

Web development stands to benefit greatly from following a single standardized method to import and export modules in JavaScript, free of intermediary steps. How long will it take to reach the point where ES6 is the module standard?

Chances are, quite a while ;)

Plus, there are many people who like having “flavors” to choose from, so the “one truthful approach” may not ever become a reality.

### Conclusion

I hope this two-part post helped clear up some of the jargon developers use when talking about modules and module bundling. Go ahead and check out [part I](https://medium.freecodecamp.com/javascript-modules-a-beginner-s-guide-783f7d7a5fcc#.y8hs0nsne) if you found any of the terms above confusing.

As always, talk to me in the comments and feel free to ask questions!

Happy bundling :)








