---
author: Cory House
authorTwitter: https://twitter.com/housecor
authorFacebook: none
title: "Browserify vs Webpack"
subTitle: "If you need a cabin, why start<br>with a mere pile of logs?"
coverSrc: https://cdn-images-1.medium.com/max/1600/1*E_cgh1eE6GAtWWMkQRc-3Q.jpeg
url: https://medium.freecodecamp.org/browserify-vs-webpack-b3d7ca08a0a9
id: browserify-vs-webpack-b3d7ca08a0a9
date: 2015-07-27T13:11:47.801Z
tags: [
  "JavaScript",
  "Webpack",
  "Browserify",
  "Web Development",
  "Programming"
]
---
# Browserify vs Webpack

## _If you need a cabin, why start  
with a mere pile of logs?_



















* * *







> In the land of JavaScript, no one is king for long.

Just last year [Grunt](http://www.gruntjs.com) was effectively dethroned by [Gulp](http://gulpjs.com/). And now, just as Gulp and [Browserify](http://browserify.org/) are finally reaching critical mass, [Webpack](http://webpack.github.io/) threatens to unseat them both. Is there truly a compelling reason to change your front-end build process _yet again_?

Let’s consider the merits of each approach.

### Browserify (and friends…)

Browserify is conceptually simple. Hey, see all these cool packages on [npm](http://npmjs.org)? Let me wrap those up for ya so you can use those in the browser. Handy. Thanks Browserify! Yet this simplicity is also its Achilles heel. Chances are you have a long list of other things you need to get done like minifying, bundling, linting, running tests, etc.

Sure, Browserify has a [rich ecosystem of transforms](https://github.com/substack/node-browserify/wiki/list-of-transforms) to help get things done. But to wire all this up, you’re on your own. So you’re going to reach for a JavaScript build automation tool like Grunt or Gulp. These tools work great, but configuring them properly is a time-consuming process. After you’ve worked with Grunt or Gulp for long, you start to realize a long list of things you do for every project. Wouldn’t it be nice to start with a more powerful and opinionated tool that made more assumptions about your build process?

If you think of your build process like a unique log cabin, then Browserify with Gulp/Grunt is like starting off here:



![](https://cdn-images-1.medium.com/max/1600/1*E_cgh1eE6GAtWWMkQRc-3Q.jpeg)

Some assembly required.



### Webpack

Webpack attacks the build problem in a fundamentally more integrated and opinionated manner. In Browserify you use Gulp/Grunt and a long list of transforms and plugins to get the job done. **Webpack offers enough power out of the box that you typically don’t need Grunt or Gulp at all**. Yep, sorry, that shiny new skill you just mastered is already nearly useless. Uh…yay? Sigh. Welcome to life on the front-end.

But hey, that’s the price of progress. With Webpack you can declare a simple config file to define your build process. Woah, a config file? Yes, if you migrated from Grunt to Gulp because you prefer code over configuration, that may sound like a step backward. But configuration isn’t necessarily a bad thing.

> Configuration-based systems are preferable to imperative systems if they make the right assumptions about your goals up front.

I find Webpack does just that. Webpack assumes you need to move files from a source directory to a destination directory. It assumes you want to work with JavaScript libraries in various module formats like CommonJS, and AMD. It assumes you’ll want to compile various formats using a [long list of loaders](https://www.npmjs.com/search?q=webpack+loader). Sure, you can do all this via Browserify and Gulp, but you have to do more wiring yourself. And you’re manually wiring together two totally separate technologies.

The integrated nature of Webpack really shines when you consider the stories for working with other assets like images and CSS. Webpack is smart enough to dynamically inline your [CSS](http://webpack.github.io/docs/stylesheets.html) and [images](https://github.com/webpack/url-loader) when it makes sense. You can simply include these assets like you do with JavaScript today. Want to use CSS? Easy:

<pre name="a3bd" id="a3bd" class="graf graf--pre graf-after--p">require("./stylesheet.css");</pre>

Huh? Why not simply reference CSS the old way? Well, Webpack will consider the size of this file. **If it’s small, it’ll inline the stylesheet!** If it’s long, it’ll minify the file and give it a unique name for cache busting. This same story works for [images](https://github.com/webpack/url-loader) as well using the url loader plugin.

<pre name="0366" id="0366" class="graf graf--pre graf-after--p">img.src = require(‘./glyph.png’);</pre>

Webpack will base64 encode this image if it’s small enough that it makes sense. Slick!

Since Webpack is totally aware of your build process, it can [intelligently split your resources into bundles](http://webpack.github.io/docs/code-splitting.html). This comes in handy on larger SPAs. Your users will be served only the files they need for a given page instead of a single monolithic JavaScript file.

Finally, if you want to enjoy rapid application development without browser refreshes, Webpack offers [hot module replacement](http://webpack.github.io/docs/hot-module-replacement.html). If you happen to work in React, you can utilize [React Hot Loader](https://github.com/gaearon/react-hot-loader). Yes, [Browserify has an equivalent](https://github.com/milankinen/livereactload), but in my experience, Webpack’s implementation by [@dan_abromov](http://www.twitter.com/dan_abramov)is superior. Trust me, once you’ve experienced rapid feedback application development like this, you’ll never go back:





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/13b373517ecb49243036ffefb9c20f7f?postId=b3d7ca08a0a9" data-media-id="13b373517ecb49243036ffefb9c20f7f" allowfullscreen="" frameborder="0"></iframe>





Webpack assumes you want to build a log cabin. So you start with a real cabin, and then it gives you the tools need to tweak it to your needs.



![](https://cdn-images-1.medium.com/max/1600/1*YW70wmIr2R3tb5Xtec2giw.jpeg)

Why not start here and tweak a few minor things that make you unique?



### The Bottom Line

If you prefer explicitly configuring small single-purpose tools from the ground up, then Browserify with Gulp/Grunt is going to be more your style. Browserify is easier to understand initially since the conceptual surface area is so much smaller — assuming you already know Gulp or Grunt. When using Gulp with Browserify, the resulting build process can be easier to understand than the equivalent Webpack build. It’s often more explicit about intentions. Browserify’s rich plugin ecosystem means you can get just about anything done with enough wiring. Ah, the wiring. That’s the big downside. Being this explicit takes a lot of time and debugging to get right. I recently created a [starter kit](https://github.com/coryhouse/react-flux-starter-kit) for my upcoming Pluralsight course on React and Flux. It pulls in some React specific tech, but removing those dependencies is trivial if you’re just looking for a quick way to get rolling with Browserify and Gulp.

But if you’re comfy with a little “magic” via a single more opinionated tool, then Webpack can reduce the time it takes to stand up a robust build process. I’ve found my Webpack configs are usually about half the size of the equivalent Gulp file. The win isn’t merely less typing — This also translates to less time spent debugging your config.

Massive Grunt files turned many off to the idea of configuration. But Grunt’s failure wasn’t configuration. It was a lack of opinion. **Configuration isn’t evil.** It’s a powerful time-saver when the assumptions are right.

> Build tooling shouldn’t require a custom build from the ground up. It should provide customization points that allow you to handle the few things that make you truly unique.

### Ready to dig deeper?

The [updated Webpack docs](https://webpack.js.org) are great, but I suggest reading [Pete Hunt’s excellent intro](https://github.com/petehunt/webpack-howto) instead. Then, check out “[Creating a JavaScript Development Environment](https://app.pluralsight.com/library/courses/javascript-development-environment)” on Pluralsight ([free trial](https://billing.pluralsight.com/individual/checkout/account-details?sku=IND-Y-PLUS-FT)) to see a full development environment built from the ground up using Webpack.

Using React? Check out “[Building Applications with React and Redux in ES6](https://app.pluralsight.com/library/courses/react-redux-react-router-es6)”.

Chime in on [Hacker News](https://news.ycombinator.com/item?id=9954973) or [Reddit](https://www.reddit.com/r/javascript/comments/3erss1/browserify_vs_webpack/)











* * *







[Cory House](https://twitter.com/housecor) is the author of [multiple courses on JavaScript, React, clean code, .NET, and more on Pluralsight](http://pluralsight.com/author/cory-house). He is principal consultant at [reactjsconsulting.com](http://www.reactjsconsulting.com), a Software Architect at VinSolutions, a Microsoft MVP, and trains software developers internationally on software practices like front-end development and clean coding. Cory tweets about JavaScript and front-end development on Twitter as [@housecor](http://www.twitter.com/housecor).








