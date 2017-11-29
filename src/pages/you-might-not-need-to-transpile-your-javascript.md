---
author: Alex Ewerlöf
authorTwitter: https://twitter.com/alexewerlof
authorFacebook: none
title: "You might not need to transpile your JavaScript"
subTitle: "Popular guides like YouMightNotNeedJQuery.com and You Don’t Need Lodash/Underscore have challenged common industry practices...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*dzbgLnjV6aUOoLKdJwsOBQ.png
url: https://medium.freecodecamp.org/you-might-not-need-to-transpile-your-javascript-4d5e0a438ca
id: you-might-not-need-to-transpile-your-javascript-4d5e0a438ca
date: 2017-05-19T10:01:51.556Z
tags: [
  "JavaScript",
  "Ecmascript 6",
  "Nodejs"
]
---
# You might not need to transpile your JavaScript

Popular guides like [YouMightNotNeedJQuery.com](http://youmightnotneedjquery.com/) and [You Don’t Need Lodash/Underscore](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore) have challenged common industry practices.

This post is not as wild as, say, [YouMightNotNeedJS.com](http://youmightnotneedjs.com/), but it does elaborate on transpilation, and explains why it may not be as necessary in the near future.

[StatCounter](http://gs.statcounter.com/) gathers data about 15+ billion page views every month from 2.5 million websites [around the globe](http://gs.statcounter.com/sample-size/StatCounterGlobalStatsSep15_SampleSizeCountryBreakdown.csv). As of May 2017, this is the status quo:



![](https://cdn-images-1.medium.com/max/1600/1*dzbgLnjV6aUOoLKdJwsOBQ.png)

Browser market share as of May 2017 in %



The thing that makes this diagram interesting is that the top 3 browsers (Chrome, Safari and FireFox) are [evergreen](https://www.techopedia.com/definition/31094/evergreen-browser),which means 74% of users get the latest version of their browser automatically.

Let’s see whether this assumption is correct.

Here are the top browser versions in the market:







![](https://cdn-images-1.medium.com/max/2000/1*Xm6mE2_iH9MiZWJz3oOFpg.png)

Browser version distributions according to [StatCounter](http://gs.statcounter.com/browser-version-market-share/desktop-mobile-tablet/worldwide/#monthly-201705-201705-bar)







Chrome 58 [was released](https://www.chromium.org/developers/calendar) less than a month ago and its desktop version holds 12.77% of the global browser market share. Chrome 57 was release just 42 days before that and its desktop version holds 9.96% of the global browser market. Unfortunately StatCounter doesn’t differentiate between chrome versions on mobile platforms but assuming the same ratio as desktop we end up with:



![](https://cdn-images-1.medium.com/max/1600/1*yiFTkT1uVScQyJ4PyJg1hA.png)

All versions of chrome in the market (to



### What does it mean for my code?

According to [ES Compatibility Table](http://kangax.github.io/compat-table/es6/) the latest version of all major browsers have a very good support for ES6 features:



![](https://cdn-images-1.medium.com/max/1600/1*AaEwJgIVikDGMIKrDmhOKA.png)

All major browsers have a very good ES6 support



In other words if you’re transpiling your JavaScript to ES5, you’re making your code unnecessarily big and slow to support a minority of the users who will probably upgrade their system by the time you manage to configure your Webpack and Babel! 😉

### Why would you still transpile?

You may still want to transpile your code but hopefully after weighing cons and pros or possible alternatives:

*   You’re using React JSX (which is pretty popular at the moment so I’m assuming lots of developers fit into this category). JSX at its core is a **transformation** of XHTML to JS code and doesn’t necessary need a full transpiler like Babel. Besides, if all you need is [VirtualDom](https://github.com/Matt-Esch/virtual-dom), use that instead.
*   You want to try the latest features of the language. Unless you’re part of TC39 or have a burning desire for injecting unstable language features into your production code, you’re probably fine with ES6\. Nowadays we have a decent language is the majority of the browsers and the need to transpile are fading away.
*   You’re using TypeScript and hopefully [weighed the cons and pros](https://medium.freecodecamp.com/when-should-i-use-typescript-311cb5fe801b). TypeScript compiler, when targetting a modern version of ES6 mostly strips out the type information rather than transforming syntax.
*   You wanna reduce code size using [tree shaking](http://www.engineyard.com/blog/tree-shaking) (here’s is how to do it [in webpack](https://medium.freecodecamp.org/tree-shaking-es6-modules-in-webpack-2-1add6672f31b) and [rollup](https://rollupjs.org/#tree-shaking)). You want to obfuscate your code or reduce its size by minification. You want to conditionally exclude part of the code. This requires static code analysis. You can use a smart bundler for size-sensitive production services like Mobile devices, but we’re gonna see more careful cost assessments when creating such alternative deployments. _These sorts of static code analysis will continue to be useful as “advanced optimization techniques” for production code._You don’t **have to** minify your files. UglifyJS can’t minify ES6 at the moment (though a harmoney branch exists) but [Babili](https://github.com/babel/babili) can deal with it. The compression algorithms do a pretty decent job ([not when the files are too little](https://webmasters.stackexchange.com/questions/31750/what-is-recommended-minimum-object-size-for-gzip-performance-benefits)) and unless you’re shipping an operating system in every page load, it should do fine without compression. These days images and multimedia content take much more bandwidth than the code.
*   You want the elephant in the room:



![](https://cdn-images-1.medium.com/max/1600/1*ZGf-je0HoEYEzjGSo79yOA.png)



NPM is [the largest](https://www.linux.com/news/event/Nodejs/2016/state-union-npm) package manager on the planet. Most non-trivial web applications use some code from NPM and that implies using a module bundler. That is soon gonna change! Chrome already supports ES6 modules in [Canary](https://www.chromestatus.com/feature/5365692190687232) (Chrome 60 will officially ship this feature this August) and Safari is [close to ship it](https://bugs.webkit.org/show_bug.cgi?id=147340) too while Firefox and Edge are working on it.

Besides [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) allows voluntarily pushing resources to the browser. That means if **a.js** is importing **b.js** and **c.js**, the server can push **b.js** and **c.js** every time **a.js** is fetched which minimizes the time between requests. This is of course a simplified view because in practice browser might already have **b.js** and **c.js** in its cache. HTTP/2 is [supported in the majority of browsers](http://caniuse.com/#search=http2).

### The future without Transpilation

Considering the statistics above, this means 2018 will be the year the majority of the web apps can get rid of the module bundlers or transpilers.

Transpilation is a workaround. We might have done it for too long that we got used to it, but think about it. We are “compiling” an “interpreted” language to an “interpreted” language! Besides:

*   Configuring Webpack/Browserify is an unnecessary tax in many cases
*   Debugging using sourcemaps is always harder than debugging the actual script being run (anyone had fun trying to debug `this` or variables when sourcemaps don’t work properly?)
*   It kills the DX when you have to wait a few seconds (sometimes half a minute) after each edit to see the latest code. Hot Module Reloading (HMR) is an answer to that but it’s not always smooth and quick to configure. Without transpilation, all you have to do is to refresh the page and in less than a second your latest page is there!

This August when ES6 modules are shipped, some types of applications will not use transpilation at all:

*   Chrome Extensions
*   Electron desktop applications
*   B2B web apps that are made to be run by business users who already have good gears provided by the company

When transpilation becomes a thing of the past, [libraries with Hyperscript syntax](https://mithril.js.org/hyperscript.html) will bring the ideas of React to _POJS_ (Plain Old JavaScript that is not transpiled and easily debuggable on the console).

### Don’t transpile, but compile for real!

[WASM](http://webassembly.org/) is the new kid in town and it’s the official compilation target that promises [faster execution speed and smaller code size](https://www.youtube.com/watch?v=HktWin_LPf4). [Currently](http://caniuse.com/#feat=wasm) Chrome and Firefox support WASM but there’s a good consensus among the big browser vendors that WASM is going to be the common run-time of the future. If you got Chrome, you can [give it a try](http://webassembly.org/demo/).

If you’re the kind of developer who itches for something new, take a look at [Rust](https://doc.rust-lang.org/book/). It [compiles to WASM](https://hackernoon.com/compiling-rust-to-webassembly-guide-411066a69fde) but isn’t limited to web. People actually use it to write [operating system](https://github.com/redox-os/redox) or [browser engine](https://github.com/servo/servo). Besides old time C/C++ developers [approve and like it](https://www.quora.com/What-do-C-C++-systems-programmers-think-of-Rust) and it has a very welcoming community.

### A few notes

*   According to former Mozilla CTO [Chrome won](https://andreasgal.com/2017/05/25/chrome-won/) and it’s unlikely that there’s going to be another browser war. The interesting thing is that **Chrome won it with meritocracy**. It’s open source and Google has clearly defined [what information it is gathering](https://www.google.com/chrome/browser/privacy/whitepaper.html) from the users. Chrome wins [even the business users](https://tech.slashdot.org/story/17/05/28/0243212/even-for-businesses-chrome-is-the-top-browser) which traditionally use Windows. Nevertheless, while the end users choose Chrome because of its speed, security and simplicity, programmers love its developer tools. Google have an active role in the TC39 which drives the future of JavaScript and in general is the strongest proponent of the web platform even though it may compete with its own mobile OS. Not only that, but Google also helps its competitors. Google has been one of the biggest financial supporters of Mozilla and its [rendering engine](https://www.chromium.org/blink) is used by Opera.
*   [Microsoft officially](https://www.quora.com/What-do-C-C++-systems-programmers-think-of-Rust) [dropped support for IE](https://www.microsoft.com/en-us/windowsforbusiness/end-of-ie-support) about 17 months ago. IE 11 will continue to receive security updates until 2025, but it’s up to you to decide on spending [significant resources](http://kangax.github.io/compat-table/es6/#ie11) to support a browser that only 3.24% of the market uses. Also keep in mind that Edge is the default browser in Windows 10\. If anyone doesn’t want to upgrade their Windows to the latest version, the recent [WannaCrypt attack](https://blogs.technet.microsoft.com/msrc/2017/05/12/customer-guidance-for-wannacrypt-attacks/) probably gives them a reason to reconsider! I’m personally interested to any market research on the revenue coming from this particular customer segment.
*   Apple put [a set of unfair restrictions](https://www.howtogeek.com/184283/why-third-party-browsers-will-always-be-inferior-to-safari-on-iphone-and-ipad/) to keep the other browser vendors out of their iOS platform. So for example Chrome on iOS is technically limited to parts of Safari engine! Safari [used to be the new IE](https://www.safari-is-the-new-ie.com/), until back in 2016 they did a good job and became the browser with the best ES6 support:



![](https://cdn-images-1.medium.com/max/1600/1*_QUKvBdG1upb8iDGHuHskg.png)

Released 16 months ago, Safari 10 brought a good level of ES6 support to iOS platforms



Overall the global share of iOS/Safari is less than Android/Chrome. It varies by country, for example in richer countries iOS has a bit higher penetration while in the developing world Android is the absolute winner but globally here are the stats:



![](https://cdn-images-1.medium.com/max/1600/1*dsABM9CuqW4ahi9zdhyl4A.png)

Global browser share for Android and iOS



### Call to Action!

If you’re old enough, you probably may remember the annoying days when some websites forced (or politely suggested) their browser of choice (mostly IE):



![](https://cdn-images-1.medium.com/max/1600/0*5qIHRjqP3lx8qf1g.)



We don’t wanna do that! No matter how excited we are about Chrome, we don’t want to ignore 46% of the web traffic not being rendered by Chrome.

> Just because we might have support for ES6 modules in browsers soon, it doesn’t mean that we can get rid of a build process and a proper “bundle strategy”. — [Stefan Judis](https://www.contentful.com/blog/2017/04/04/es6-modules-support-lands-in-browsers-is-it-time-to-rethink-bundling/)

We’ll always have people stuck with an old browser in their TV firmware or car infotainment system. We’ll always have that stubborn grandpa who doesn’t see the need to invest in upgrading his machine only to leave it as a legacy. Kids will continue using their parent’s old iPhone or tablet and [1 laptop per child](http://one.laptop.org/about/hardware) will not grow some processing power over night. We don’t want to lock anyone out.

This is not a new problem though. Despite ES6 being one of the biggest changes in the web, [graceful degradation](https://www.w3.org/wiki/Graceful_degradation_versus_progressive_enhancement) can still provide some use for the **minority** while keeping the development costs under control for the majority.

In a future post I’ll discuss the practical side of how to ship modern code while having a backup plan for graceful degradation. You can follow me on Twitter or Medium to stay tuned.

**BONUS:** Take a look at [JS Codeshift](https://github.com/facebook/jscodeshift). It is a CLI for converting old javascript code to new javascript code updating even old javascript library calls to their latest API. It tries to preserve as much as the original styling as possible. Workflow: after committing your changes to version control, run this and do a thorough comparison and run the automated & manual tests. Done!











* * *







**Update 1 (2017–09–8):** Chrome 61 landed a few days ago with full ES6 module support. It has 54% of global browser market. Safari (14% of global market) has supported ES6 modules for a while.

**Update 2 (2017–09–10):** you can still support browsers which don’t support ES6 modules thanks to [this trick](https://medium.com/dev-channel/es6-modules-in-chrome-canary-m60-ba588dfb8ab7) _<script_ **_nomodule_** _src=”compiled.js”></script>_. The **_nomodule_** attribute tells the browsers with ES6 module support not to load the script. On Safari there are some caveats that you can read in the page that talks about the trick. Read [the spec](https://html.spec.whatwg.org/multipage/scripting.html#the-script-element).

**Update 3 (2017–09–12):** [ES6 modules support lands in browsers: is it time to rethink bundling?](https://www.contentful.com/blog/2017/04/04/es6-modules-support-lands-in-browsers-is-it-time-to-rethink-bundling/)

**Update 4 (2017–09–12):** module are _defer_red by default. If you want to bypass that, add an _async_ attribute to the script tag to prevent [Single Point Of Failure (SPOF)](https://www.stevesouders.com/blog/2010/06/01/frontend-spof/).

**Update 5 (2017–09–13):** Node LTS 8.5 [supports ES6 Modules](https://nodejs.org/en/blog/release/v8.5.0/) (called ESM) behind a flag when the file has a ***.msj** extention. Here’s a [nice intro](http://2ality.com/2017/09/native-esm-node.html) about how they’re used.

**Update 6 (2017-09–22):** [here](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/) is some great practical advice for supporting both new and old browsers. The bandwidth savings for avoiding transpilation is great!








