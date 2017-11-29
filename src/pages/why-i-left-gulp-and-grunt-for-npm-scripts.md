---
author: Cory House
authorTwitter: https://twitter.com/housecor
authorFacebook: none
title: "Why I Left Gulp and Grunt for npm Scripts"
subTitle: "I know what you’re thinking. WAT?! Didn’t Gulp just kill Grunt? Why can’t we just be content for a few minutes here in JavaScript land? I..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*DnSo0yGbkLsYscYR4sWOnA.png
url: https://medium.freecodecamp.org/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8
id: why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8
date: 2016-01-17T14:01:24.752Z
tags: [
  "JavaScript",
  "Nodejs",
  "NPM",
  "Programming",
  "Tech"
]
---
# Why I Left Gulp and Grunt for npm Scripts



![](https://cdn-images-1.medium.com/max/1600/1*DnSo0yGbkLsYscYR4sWOnA.png)



I know what you’re thinking. WAT?! Didn’t Gulp just kill Grunt? Why can’t we just be content for a few minutes here in JavaScript land? I hear ya, but…

> I’ve found Gulp and Grunt to be unnecessary abstractions. npm scripts are plenty powerful and often easier to live with.

#### Let’s Begin With An Example…

I was a big fan of Gulp. But on my last project, I ended up with 100’s of lines in my gulpfile and around a dozen Gulp plugins. I was struggling to integrate Webpack, Browsersync, hot reloading, Mocha and much more using Gulp. Why? Well, some plugins had insufficient documentation for my use case. Some plugins only exposed part of the API I needed. One had an odd bug where it would only watch a small number of files. Another stripped colors when outputting to the command line.

These are solvable problems, but **none of these issues occurred when I called the tools directly.**

Lately I’ve noticed many open-source projects are simply using npm scripts. I decided to step back and re-examine. Did I really need Gulp? It turns out I didn’t.

I decided to try using just npm scripts on my new open source project. I created a rich dev environment and build process for React applications using just npm scripts. Curious what this looks like? Check out [React Slingshot](https://github.com/coryhouse/react-slingshot). I walk through how to create this build process using npm scripts in “[Building a JavaScript Development Environment](https://app.pluralsight.com/library/courses/javascript-development-environment/table-of-contents)” on Pluralsight.

The surprising thing is, I now prefer working with npm scripts over Gulp. Here’s why.

### What’s Wrong with Gulp and Grunt?

Over time, I’ve noticed three core issues with task runners like Gulp and Grunt:

1.  Dependence on plugin authors
2.  Frustrating debugging
3.  Disjointed documentation

Let’s consider each of these issues.

#### Issue #1: Dependence on Plugin Authors

When you’re working with new or unpopular technologies, no plugin may exist at all. And when a plugin exists, it may be outdated. For example, Babel 6 was recently released. The API changed significantly, so many Gulp plugins were incompatible with the latest version. When using Gulp, I was stuck because the Gulp plugin I needed wasn’t updated yet.

With Gulp or Grunt, you must wait for plugin maintainers to provide updates, or fix it yourself. This delays your ability to utilize new versions of modern tools. In contrast, **when I use npm scripts, I consume tools directly without an extra layer of abstraction**. This means when new versions of Mocha, Istanbul, Babel, Webpack, Browserify and so on are released, I’m able to utilize the new versions immediately.

In terms of selection, nothing beats npm:



![](https://cdn-images-1.medium.com/max/1600/1*Ukvg75zwIh7eZn35s8bs3g.png)

Gulp has ~2,100 plugins. Grunt has ~5,400\. npm offers over 227,000 packages, growing at a rate of 400+ daily.



> When you use **npm scripts, you don’t search for a Grunt or Gulp plugin. You choose from over 227,000 npm packages.**

To be fair, if the Grunt or Gulp plugin you need isn’t available, you can certainly utilize npm packages directly. But then you’re no longer leveraging Gulp or Grunt for that specific task.

#### Issue #2: Frustrating Debugging

As integrations fail, debugging in Grunt and Gulp can be frustrating. Since you’re working with an extra layer of abstraction, there are more potential causes for any bug:

1.  Is the base tool broken?
2.  Is the Grunt/Gulp plugin broken?
3.  Is my configuration broken?
4.  Am I using incompatible versions?

Using npm scripts eliminates #2\. And I find #3 is far less common since I typically call the tool’s command line interface directly. Finally, #4 is less common since I’ve reduced the number of packages in my project by utilizing npm directly instead of using a task runner’s abstraction.

#### Issue #3: Disjointed Documentation

The documentation for the core tools I need is nearly always better than the associated Grunt and Gulp plugins. For example, if I use gulp-eslint, I end up splitting my time between the [gulp-eslint](https://github.com/adametry/gulp-eslint) docs and the ESLint website. I have to switch context between the plugin and the tool it is abstracting. The core piece of friction in Gulp and Grunt is this:

> **Understanding the tool isn’t enough. Gulp and Grunt require you to understand the plugin’s abstraction.**

Most build-related tools offer clear, powerful, and well-documented command line interfaces. See the [docs on ESLint’s CLI](http://eslint.org/docs/user-guide/command-line-interface) as a good example. I find reading and implementing a short command line call in npm scripts clearer, lower friction, and easier to debug (since there’s a layer of abstraction removed).

Now that I’ve established the pain points, the question is, why do we think we need task runners like Gulp and Grunt?

### Why Have We Ignored npm for builds?

I believe there are **four core misconceptions** that led to Gulp and Grunt becoming so popular:

1.  People think npm scripts require strong command line skills
2.  People think npm scripts aren’t powerful enough
3.  People think Gulp’s streams are necessary for fast builds
4.  People think npm scripts don’t run cross platform

Let’s address these misconceptions in order.

#### Misconception #1**:** npm Scripts Require Strong Command-Line Skills

You don’t have to know much about your operating system’s command line to enjoy the power of npm scripts. Sure, [grep, sed, awk, and pipes](http://www.tutorialspoint.com/unix/unix-useful-commands.htm) are lifelong skills worth learning, but **you don’t have to be a Unix or Windows command line wizard to use npm scripts**. You can leverage the 1000’s of packages in npm to get the job done instead.

For instance, you might not know that in Unix this forcefully deletes a directory: rm -rf. That’s okay. You can use [rimraf](https://www.npmjs.com/package/rimraf) which does the same thing (and it works cross-platform to boot). Most npm packages offer interfaces that assume very little knowledge of your OS’s command line. Just search npm for packages that do what you need, read the docs, learn as you go. I used to search for Gulp plugins. Now I search for npm packages instead. A great resource: [libraries.io](https://libraries.io).

#### **Misconception #2: npm Scripts Aren’t Powerful Enough**

npm scripts are surprisingly powerful on their own. There are convention-based [pre and post hooks](https://docs.npmjs.com/misc/scripts#description):





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/cf13ea55c1041743ca49ddd6b46b668d?postId=3d6853dd22b8" data-media-id="cf13ea55c1041743ca49ddd6b46b668d" allowfullscreen="" frameborder="0"></iframe>





All you do is follow convention. The scripts above will run in order based on their prefix. The prebuild script will run before the build script because it has the same name, but is prefixed with “pre”. The postbuild script will run after the build script because it has the prefix of “post”. So if I create scripts named prebuild, build, and postbuild, they’ll run automatically in that order when I type `npm run build`.

You can also decompose big problems by calling one script from another:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/5b58ee0625720944a56197f07e46b02f?postId=3d6853dd22b8" data-media-id="5b58ee0625720944a56197f07e46b02f" allowfullscreen="" frameborder="0"></iframe>





In this example the prebuild task calls the clean task. This allows you to decompose your scripts into small, well-named, single responsibility, one-liners.

You can call multiple scripts serially on a single line using &&. The scripts in the clean step above will run one after the other. This simplicity will really make you smile if you’re someone who has struggled with getting a list of tasks to run in order in Gulp.

And if a command gets too complicated, you can always call a separate file:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/6dd561d5d8a3ae331219e8ec043443e5?postId=3d6853dd22b8" data-media-id="6dd561d5d8a3ae331219e8ec043443e5" allowfullscreen="" frameborder="0"></iframe>





I’m calling a separate script in the build task above. That script will be run by Node and thus can utilize any npm packages I need, and utilize all the power of JavaScript inside.

I could go on, but [the core features are documented here](https://docs.npmjs.com/misc/scripts). Also, there’s also a short [Pluralsight course on using npm as a build tool](https://www.pluralsight.com/courses/npm-build-tool-introduction). Or, check out [React Slingshot](https://github.com/coryhouse/react-slingshot) for an example of all this in action.

#### Misconception #3: Gulp’s Streams Are Necessary for Fast Builds

Gulp quickly gained traction over Grunt because Gulp’s in-memory streams are faster than Grunt’s file-based approach. But you don’t need Gulp to enjoy the power of streaming. In fact, **streaming has always been built into both Unix and Windows command lines**. The pipe (|) operator streams the output of one command to the input of another command. And the redirection (>) operator redirects output to a file.

So, for example, in Unix I can use `grep` the contents of a file and redirect the output to a new file:

<pre name="0a38" id="0a38" class="graf graf--pre graf-after--p">grep ‘Cory House’ bigFile.txt > linesThatHaveMyName.txt</pre>

**The work above is streamed. No intermediate files are written.** (Wondering how to do the command above in a cross-platform way? Read on…)

You can also use the `&` operator to run two commands at the same time on Unix:

<pre name="305e" id="305e" class="graf graf--pre graf-after--p">npm run script1.js & npm run script2.js</pre>

The two scripts above will run in at the same time. To run scripts concurrently cross platform, use [npm-run-all](https://www.npmjs.com/package/npm-run-all). This leads to the next misconception…

#### Misconception #4: npm Scripts Don’t Run Cross-platform

Many projects are tied to a specific operating system, so cross-platform concerns don’t matter. But if you need to run cross-platform, npm scripts can still work great. Countless open source projects are proof. Here’s how.

Your operating system’s command line runs your npm scripts. So on Linux and OSX, your npm scripts run on a Unix command line. On Windows, npm scripts run on the Windows command line. Thus, if you want your build scripts to run on all platforms, you need to make both Unix and Windows happy. Here are three approaches:

**Approach 1:** Use [commands that run cross-platform](http://www.yolinux.com/TUTORIALS/unix_for_dos_users.html). There’s a surprising number of cross-platform commands. Here’s a few:

<pre name="78c3" id="78c3" class="graf graf--pre graf-after--p">&& chain tasks (Run one task after another)  
< input file contents to a command  
> redirect command output to a file  
| redirect command output to another command</pre>

**Approach 2:** Use node packages. You can use node packages instead of shell commands. For instance, use [rimraf](https://www.npmjs.com/package/rimraf) instead of `rm -rf`. Use [cross-env](https://www.npmjs.com/package/cross-env) to set environment variables in a cross-platform way. Search Google, npm or [libraries.io](https://libraries.io) for what you want to do and there is almost certainly a node package that will get it done cross-platform. And if your command line calls get too long, you can call Node packages in separate scripts as well like this:

<pre name="bba7" id="bba7" class="graf graf--pre graf-after--p">node scriptName.js</pre>

The script above is plain old JavaScript, run by Node. And since you’re just calling a script on the command line, you’re not limited to .js files. You can run any script that your OS can execute such as Bash, Python, Ruby, or Powershell as well.

**Approach 3**: Use [ShellJS](https://www.npmjs.com/package/shelljs). ShellJS is an npm package that runs Unix commands via Node. So this gives you the power to run Unix commands on all platforms, including Windows.

I used a combination of approach #1 and #2 on [React Slingshot](https://github.com/coryhouse/react-slingshot).

### Pain Point

There are admittedly some downsides: The JSON spec doesn’t support comments, so you can’t add comments in package.json. There are a few ways to work around this limitation:

1.  Write small, well-named, single purpose scripts
2.  Document scripts separately (in a README.md for instance)
3.  Call a separate .js file

I prefer option #1\. If you break each script down to have a single responsibility, comments are rarely necessary. **The script’s name should fully describe the intent, just like any small well-named function.** As I discuss in “[Clean Code: Writing Code for Humans](https://www.pluralsight.com/courses/writing-clean-code-humans)”, small single responsibility functions rarely require comments. When I feel a comment is necessary, I use option #3 and move the script to a separate file. This gives me all the compositional power of JavaScript when I need it.

Package.json also doesn’t support variables. This sounds like a big deal, but it’s not for two reasons. First, the most common need for variables revolves around environment, which you can set on the command line. Second, if you need variables for other reasons, you can call a separate .js file. Check out [React-starter-kit](https://github.com/kriasoft/react-starter-kit/blob/master/package.json#L74) for an elegant example of this pattern.

Finally, there’s also a risk of creating long, complex command line arguments that are difficult to understand. Code reviews and diligent refactoring are a great way to assure npm scripts are decomposed into small, well-named, single purpose functions that everyone understands. If it’s complex enough to need a comment, you should likely refactor the single script into multiple well named scripts or extract it to a separate file.

#### Abstractions Must Be Justified

Gulp and Grunt are abstractions over the tools I use. Abstractions are useful, but abstractions have a cost. They leak. They make us dependent upon the plugin maintainers and their documentation. And they add complexity by increasing the number of dependencies. I’ve decided task runners like Gulp and Grunt are abstractions I no longer need.

Looking for details? I walk through how to create a build process using npm scripts from scratch in “[Building a JavaScript Development Environment](https://app.pluralsight.com/library/courses/javascript-development-environment/table-of-contents)” on Pluralsight.

Comments? Chime in below or on [Reddit](https://www.reddit.com/r/javascript/comments/41e1ys/why_i_left_gulp_and_grunt_for_npm_scripts/) or [Hacker News](https://news.ycombinator.com/item?id=10929476).

Finally, I’m far from the first person to suggest this. Here are some excellent links:

*   [Task automation with npm run](http://substack.net/task_automation_with_npm_run) — James Holliday
*   [Advanced front-end automation with npm scripts](https://www.youtube.com/watch?v=0RYETb9YVrk) — Kate Hudson
*   [How to use npm as a build tool](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/) — Kieth Cirkel
*   [Introduction to npm as a Build Tool](http://app.pluralsight.com/courses/npm-build-tool-introduction) — Marcus Hammarberg
*   [Gulp is awesome, but do we really need it?](http://gon.to/2015/02/26/gulp-is-awesome-but-do-we-really-need-it/) — Gonto
*   [NPM Scripts for Build Tooling](http://code.tutsplus.com/courses/npm-scripts-for-build-tooling) — Andrew Burgess











* * *







**_Cory House_** is the author of “[React and Redux in ES6](https://pluralsight.com/courses/react-redux-react-router-es6)”, “[Clean Code: Writing Code for Humans](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiK1pXx89nJAhUujoMKHeuWAEUQFggcMAA&url=https%3A%2F%2Fwww.pluralsight.com%2Fcourses%2Fwriting-clean-code-humans&usg=AFQjCNEBfkBoN-IgCn_1jFUqWDAUIxcmAw&sig2=Ub9Wup4k4mrw_ffPgYu3tA)” and [multiple other courses on Pluralsight](https://app.pluralsight.com/profile/author/cory-house). He is a Software Architect at VinSolutions and [trains software developers internationally](http://www.bitnative.com/training/) on software practices like front-end development and clean coding. Cory is a Microsoft MVP, Telerik Developer Expert, and founder of [outlierdeveloper.com](http://www.outlierdeveloper.com).








