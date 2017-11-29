---
author: Stefano Grassi
authorTwitter: https://twitter.com/FabulousFreak
authorFacebook: https://facebook.com/10201087988758563
title: "Gulp! I Improved my Workflow!"
subTitle: "yet another hands-on experience with Gulp.js"
coverSrc: https://cdn-images-1.medium.com/max/2000/1*3vp5N6O1BBr79sdNtU6cQg.jpeg
url: https://medium.freecodecamp.org/gulp-i-improved-my-workflow-354d31d25655
id: gulp-i-improved-my-workflow-354d31d25655
date: 2015-10-17T22:33:35.095Z
tags: [
  "JavaScript",
  "Gulp",
  "Front End Development"
]
---
# Gulp! I Improved my Workflow!

## yet another hands-on experience with Gulp.js







![](https://cdn-images-1.medium.com/max/2000/1*3vp5N6O1BBr79sdNtU6cQg.jpeg)

Jökulsárlón, Iceland by [Jeremy Goldberg](https://unsplash.com/jeremy)







Unless you’ve been living under a rock for the past few years, the number of tools at the disposal of front-end developers have grown rapidly. What we have now is a wide range of projects dedicated to speed-up, automate and increase the quality of our workflow.

For example, just imagine:

*   compiling [SASS](https://www.npmjs.com/package/gulp-sass)/[LESS](https://www.npmjs.com/package/gulp-less)/[PostCSS](https://www.npmjs.com/package/postcss)/[Stylus](https://www.npmjs.com/package/gulp-stylus) to a minified CSS, [tailored](https://www.npmjs.com/package/gulp-uncss) to your needs, [auto-prefixed](https://www.npmjs.com/package/gulp-autoprefixer) and in real-time
*   [concatenating](https://www.npmjs.com/package/gulp-concat) and [minifying](https://www.npmjs.com/package/gulp-uglify) your scripts
*   compressing html files created from [templates](https://www.npmjs.com/package/gulp-file-include) and atomic modules
*   [preview](http://www.browsersync.io/) your webapp from a virtual server during the compilation, auto-refreshed and synced to all your devices
*   test your web [performance](https://www.npmjs.com/package/gulp-sitespeedio)
*   self-updating style-[guide](https://trulia.github.io/hologram/) of the project
*   [compressing](https://www.npmjs.com/package/gulp-imagemin) images and creating [sprites](https://www.npmjs.com/package/gulp.spritesmith)

Some years ago this sounded more like a Disneyan dream but we’re living in the future, so fear not! [Grunt](http://gruntjs.com/), [Mimosa](http://mimosa.io/), [Broccoli](http://broccolijs.com/) and [Gulp](http://gulpjs.com/) to the rescue!

Each system has its own strong points. I’ve chosen Gulp for my needs but make sure to check them all out before deciding which best suits you.











* * *







#### So… gulp? What’s that?

[**gulpjs/gulp**  
_gulp — The streaming build system_github.com](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md "https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md")[](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

As its site states, Gulp is a “[streaming build system](http://gulpjs.com/)” which means that you can set your own tasks to be run on a pipeline, monitor a folder for a change and re-run.

And it’s **super simple**.



![](https://cdn-images-1.medium.com/max/1600/1*_PQJkvbZJNE_BjXpvIGCPQ.jpeg)

That’s ingenious, if I understand it correctly.  
It’s a Swiss watch.  
Yeah, the beauty of this is its simplicity.













* * *







#### Gulp Basic Concepts

Let’s sip through the main elements

**gulp.task** aka the action you want to achieve. Managing CSS? Generating the docs?  
Gulp define them with [orchestrator](https://github.com/robrich/orchestrator), a module that allows us to define dependencies and maximum concurrency

<pre name="d956" id="d956" class="graf graf--pre graf-after--p">gulp.task(‘somename’, function() {  
 // Do stuff  
});</pre>



![](https://cdn-images-1.medium.com/max/1600/1*MRor084bOQstofwPYVjaFQ.jpeg)



**gulp.watch** aka the folders you want to keep checked for changes

<pre name="dc9b" id="dc9b" class="graf graf--pre graf-after--p">gulp.watch(‘folder/*.ext’, [‘firstTask’, ‘secondTask’]);</pre>

Every **stream** originates from a source(s) matching a specific **glob** (a pattern that a file needs to match)

<pre name="7622" id="7622" class="graf graf--pre graf-after--p">gulp.src(globs[, options])</pre>

a series of **pipes** (actions)

<pre name="d11f" id="d11f" class="graf graf--pre graf-after--p">.pipe(concat()),  
.pipe(minify())</pre>

and a **destination** defined with

<pre name="320e" id="320e" class="graf graf--pre graf-after--p">gulp.dest(path[, options])</pre>

To operate, gulp needs two core files, **package.json** and **gulpfile.js.** _(For the installation of gulp, follow the official docs)_











* * *







#### Gulpfile.js

In the **gulpfile** we’ll declare which plugins are we going to use, the tasks we want to run, which folders we’re going to watch, etc…





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d23159097715d66621058d3ebf655a86?postId=354d31d25655" data-media-id="d23159097715d66621058d3ebf655a86" allowfullscreen="" frameborder="0"></iframe>





#### Package.json

The **package.json** file is used to store all the information regarding the dependencies of the project (gulp included!).



![](https://cdn-images-1.medium.com/max/1600/1*p1_LFP4jZEH6b9asHPueyg.jpeg)



*   To **create** it

<pre name="7ddc" id="7ddc" class="graf graf--pre graf-after--li">$ npm init</pre>

You’ll be prompted to enter some basic info for the heading of the file, like the author name, the project name and so on.

*   To **install** a plugin and save the dependency on the json file

<pre name="73a5" id="73a5" class="graf graf--pre graf-after--li">$ npm install --save-dev _yourPluginName_</pre>

*   To **uninstall** a plugin and remove the dependency on the json file

<pre name="112f" id="112f" class="graf graf--pre graf-after--li">$ npm uninstall --save-dev _yourPluginName_</pre>

*   If you need to **install all the dependencies** from a compiled package.json

<pre name="b168" id="b168" class="graf graf--pre graf-after--li graf--trailing">$ npm install</pre>











* * *







#### Project Organization

This is my approach to organize the folder of a project managed with Gulp





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2ff24c0452e43826decd4e322102634a?postId=354d31d25655" data-media-id="2ff24c0452e43826decd4e322102634a" allowfullscreen="" frameborder="0"></iframe>















* * *







#### Plugins FTW!

Gulp has an impressing list of plugins (**1895** at the time I’m writing this article)

[**gulp.js plugin registry**  
_Discover gulp.js plugins_gulpjs.com](http://gulpjs.com/plugins/ "http://gulpjs.com/plugins/")[](http://gulpjs.com/plugins/)

**Must Have**

*   [gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins)  
    This lazy-loads the plugins installed in your project. You assign a variable to it, and use it to reference other plugins instead of repeating the requirement declaration for every other plugin.

<pre name="5f1f" id="5f1f" class="graf graf--pre graf-after--li">var $ = require('gulp-load-plugins')();</pre>

<pre name="0670" id="0670" class="graf graf--pre graf-after--pre">_// Example for gulp-concat_  
.pipe($.concat('main.js'))</pre>

*   [browsersync](http://www.browsersync.io/docs/gulp/)  
    page refresh at any change on every device connected to the same URL (localhost or LAN)
*   [sitespeed](https://www.sitespeed.io)  
    my favourite tool for performance testing
*   [uncss](https://github.com/giakki/uncss)  
    are you using a CSS framework like Bootstrap for a landing page?  
    You NEED this.











* * *







#### What? How do I update Gulp plugins, you ask?

<pre name="94ae" id="94ae" class="graf graf--pre graf-after--h4">$ npm install -g npm-check-updates</pre>

<pre name="9bc5" id="9bc5" class="graf graf--pre graf-after--pre">$ npm-check-updates -u</pre>

<pre name="ef53" id="ef53" class="graf graf--pre graf-after--pre">$ rm -fr node_modules</pre>

<pre name="4c4e" id="4c4e" class="graf graf--pre graf-after--pre">$ npm install</pre>

> Basically this installs **npm-check-updates** globally, runs it against your package.json and updates the dependency versions.  
> Then you just delete the node modules folder and re-install.

> from: [https://stackoverflow.com/questions/27024431/updating-gulp-plugins](https://stackoverflow.com/questions/27024431/updating-gulp-plugins)

Note: As a general rule, and as a last resort, we better **clean** the npm cache with

<pre name="684b" id="684b" class="graf graf--pre graf-after--p graf--trailing">$ npm cache clean</pre>











* * *







#### _That’s all, folks! Thank you for reaching this point!_

#### _I hope that I kept you interested enough to check some of the links that stuffed this article. They’re there because I wanted to show my support for all the great work that fellow developers are doing for the community._








