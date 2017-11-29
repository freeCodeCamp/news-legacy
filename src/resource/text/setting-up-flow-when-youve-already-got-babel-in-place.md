---
author: James Kyle
authorTwitter: https://twitter.com/thejameskyle
authorFacebook: https://facebook.com/1067468120008432
title: "Setting up Flow when you’ve already got Babel in place"
subTitle: "Flow is a static type checker for JavaScript. It makes you more productive by providing feedback as you write code. Flow gives you warnin..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*S3mUOCWvhWPralT0YbcdRA.png
url: https://medium.freecodecamp.org/setting-up-flow-when-youve-already-got-babel-in-place-c04fdca8d14d
id: setting-up-flow-when-youve-already-got-babel-in-place-c04fdca8d14d
date: 2016-08-09T14:53:46.375Z
tags: [
  "JavaScript",
  "Flowtype",
  "Programming"
]
---
# Setting up Flow when you’ve already got Babel in place

Flow is a static type checker for JavaScript. It makes you more productive by providing feedback as you write code. Flow gives you warnings in real-time that point out when you’ve made a mistake. If you would like to know more, check out [flowtype.org](https://flowtype.org/).

Rather than trying to build it’s own entirely separate ecosystem, Flow hooks into the existing JavaScript ecosystem. Using Babel to compile your code is one of the easiest ways to integrate Flow into a project.

After two years of hard work, Babel works pretty much everywhere, just take a look at the setup page with integrations for [every build tool you can imagine](http://babeljs.io/docs/setup/).

If you don’t have Babel set up yet, you can use that guide to get set up. You also might want to checkout my [handbook on Babel](https://github.com/thejameskyle/babel-handbook).







![](https://cdn-images-1.medium.com/max/2000/1*aDSztO-MlNEXFbl8jyB3rw.png)







### Setting up Flow on top of Babel

Once you have Babel set up, it’s easy to get going with Flow. First lets install two dependencies:

<pre name="7d2f" id="7d2f" class="graf graf--pre graf-after--p">$ npm install --save-dev babel-plugin-transform-flow-strip-types  
$ npm install --global flow-bin</pre>

The Babel plugin is there in order to strip Flow types away so that your program runs. **flow-bin** is how you use Flow from the command line.

Next, let’s add the Babel plugin to your **.babelrc** (or where-ever you are configuring Babel with options):

<pre name="7384" id="7384" class="graf graf--pre graf-after--p">{  
  presets: [...],  
  plugins: [..., **"transform-flow-strip-types"**]  
}</pre>

> **Note:** I’m assuming you are using Babel 6 for this tutorial. It is recommended that you [upgrade](http://babeljs.io/blog/2015/10/31/setting-up-babel-6) if you have not already.

Finally we’ll run **flow init** in our directory, which will create a **.flowconfig** file that should look like this:

<pre name="5047" id="5047" class="graf graf--pre graf-after--p">[ignore]</pre>

<pre name="59a7" id="59a7" class="graf graf--pre graf-after--pre">[include]</pre>

<pre name="1752" id="1752" class="graf graf--pre graf-after--pre">[libs]</pre>

<pre name="d62f" id="d62f" class="graf graf--pre graf-after--pre">[options]</pre>

Awesome! Now we have Flow all set up in your project. How about we start making it run on some files?











* * *







### Getting Flow running

Flow is designed to be introduced to your repo incrementally. That means that you don’t have to add it to your whole codebase all at once. Instead, you can add it file-by-file as you go. Let’s start with something simple to get you going.

First, try to find a file that doesn’t have a lot of complexity or external dependencies. Something with just a handful of plain functions to get started with.

<pre name="35fe" id="35fe" class="graf graf--pre graf-after--p">import {getNumberFromString} from "string-math-lib";</pre>

<pre name="c8cb" id="c8cb" class="graf graf--pre graf-after--pre">export function multiplyStrings(a, b) {  
  return getNumberFromString(a) * getNumberFromString(b);  
}</pre>

In order to get Flow running on this file, we need to add a “flow pragma” comment at the top like this:

<pre name="0034" id="0034" class="graf graf--pre graf-after--p">// @flow</pre>

<pre name="5579" id="5579" class="graf graf--pre graf-after--pre">import {getNumberFromString} from "string-math-lib";</pre>

<pre name="97c2" id="97c2" class="graf graf--pre graf-after--pre">export function multiplyStrings(a, b) {  
  return getNumberFromString(a) * getNumberFromString(b);  
}</pre>

This little comment at the top of the file tells Flow “Okay, I want you to type-check this file”.

Now we need to actually run Flow for the first time. In order to do that, you’ll need to switch back to your terminal and run the following command:

<pre name="36bb" id="36bb" class="graf graf--pre graf-after--p">$ flow</pre>

> **Note:** This command is an alias of **flow status**.

What this command does is start up a Flow server and asks it for the “status” of your repo, which will most likely return some errors for you to fix.

The most common errors that you’re gonna see in a new file are:

*   “Missing annotation”
*   “Required module not found”

These errors are related to imports and exports. The reason they come up is a result of how Flow works. In order to check types across files, Flow looks directly at the imports and exports of each file.

#### **“Missing annotation”**

You’ll see an error like this from Flow because it relates somehow to an export of your file. Other than that Flow won’t complain about missing type annotations.

So in order to fix that, we can start adding some types to your file. For a detailed guide on how to do that [see the user guide](https://flowtype.org/docs/type-annotations.html). What you should end up is with some types like this:

<pre name="ad7b" id="ad7b" class="graf graf--pre graf-after--p">import {getNumberFromString} from "string-math-lib";</pre>

<pre name="c9c1" id="c9c1" class="graf graf--pre graf-after--pre">export function multiplyStrings(a**: string**, b**: string**)**: number** {  
  return getNumberFromString(a) * getNumberFromString(b);  
}</pre>

Keep running **flow** as you add your types to see the effects of what you are doing. Eventually you should be able to clear out all the “Missing annotation” errors.

#### “Required module not found”

You’ll get these errors whenever you an import/require that can’t be resolved using Node’s normal module algorithm or if you have ignored it with your **.flowconfig**.

This can be caused by a lot of things, maybe you’re using a special webpack resolver, maybe you forgot to install something. Whatever the reason, Flow needs to be able to find the module you are importing to do its job correctly. You have a couple options on how to solve this:

1.  **module.name_mapper — **specify a regular expression to match against module names, and a replacement pattern.
2.  Create a library definition for the missing module

We’ll focus on creating a library definition for the module, if you need to use **module.name_mapper** you can see more about it [in the documentation](https://flowtype.org/docs/advanced-configuration.html#options).

#### Creating a library definition

Having library definitions is useful for giving types to the packages you have installed that don’t have types. Let’s set one up for our **string-math-lib** library from the previous example.

First create a **flow-typed** directory in your root directory (the directory where you put your **.flowconfig**).

> You can use other directory names using the **[lib]** section of your **.flowconfig**. However, using **flow-typed** will work out of the box.

Now we’ll create a **flow-typed/string-math-lib.js** file to hold our “libdef” and start it off like this:

<pre name="aeac" id="aeac" class="graf graf--pre graf-after--p">**declare module "string-math-lib" {**  
  // ...  
**}**</pre>

Next we just need to write definitions for exports of that module.

<pre name="9dd0" id="9dd0" class="graf graf--pre graf-after--p">declare module "string-math-lib" {  
 **declare function getNumberFromString(str: string): number**  
}</pre>

> **Note:** If you need to document the “default” or primary export, you can do that with **declare module.exports:** or **declare export default**

There’s a lot more to library definitions so you should read through the [documentation](https://flowtype.org/docs/declarations.html) and read [this blog post on how to create high-quality libdefs](https://medium.com/@thejameskyle/flow-mapping-an-object-373d64c44592).

#### Installing a libdef from flow-typed



![](https://cdn-images-1.medium.com/max/1600/1*7zPXFtoweCMuGHb54Z6ZSQ.png)



Because libdefs can consume a lot of time, we maintain an official repository of high-quality libdefs for all sorts of packages called [flow-typed](https://github.com/flowtype/flow-typed).

To get started with flow-typed, install the command line interface (CLI) globally:

<pre name="7cc3" id="7cc3" class="graf graf--pre graf-after--p">$ npm install --global flow-typed</pre>

Now you can look within [**flow-typed/definitions/npm**](https://github.com/flowtype/flow-typed/tree/master/definitions/npm)to see if there’s an existing libdef for a package you want to use, if there is you can install it like this:

<pre name="a76a" id="a76a" class="graf graf--pre graf-after--p">$ flow-typed install chalk@1.0.0 --flowVersion 0.30</pre>

This tells flow-typed that you want to install the **chalk** package at the **1.0.0** version when you are running Flow **0.30**.

The **flow-typed** CLI is still in beta and there is a lot of improvements planned for it, so expect this to improve a lot in the near future.

Be sure to contribute back to the flow-typed libdefs. It’s a community effort, and the more people that contribute, the better it gets.

#### Other errors you might run into:

Hopefully, we’ve covered just about everything that you will run into while getting started with Flow. However, you also might run into some errors like this:

*   Package inside of **node_modules** is reporting errors
*   Reading **node_modules** is taking a really long time
*   Malformed JSON inside **node_modules** is causing errors

There’s a handful of reasons for these types of errors that I won’t get into in this post (I’m working on detailed documentation for each individual error). For now, in order to keep yourself moving, you can just **[ignore]** the files that are causing these errors.

This means adding file paths to your **[ignore]** section in your **.flowconfig** like this:

<pre name="cdcb" id="cdcb" class="graf graf--pre graf-after--p">[ignore]  
**./node_modules/package-name/*  
./node_modules/other-package/tests/*.json**</pre>

<pre name="c7be" id="c7be" class="graf graf--pre graf-after--pre">[include]</pre>

<pre name="5147" id="5147" class="graf graf--pre graf-after--pre">[libs]</pre>

<pre name="cbd1" id="cbd1" class="graf graf--pre graf-after--pre">[options]</pre>

There is generally better options than this, but this should give you a good place to start.

> For some examples of how to better handle errors within node_modules see this [Stack Overflow answer about fbjs](http://stackoverflow.com/questions/38225538/flow-type-checker-errors-in-node-modules/38264353#38264353).

#### **Pro tip: Checking to see how well you’re covered**

If you’re ever wondering how well a file is covered by Flow, you can use the following command to see a coverage report:

<pre name="c0fc" id="c0fc" class="graf graf--pre graf-after--p">$ flow coverage path/to/file.js --color</pre>

### Additional Resources and Support

There’s lots that was not covered by this article. So here are some links to resources that can help you out.

*   [Flow Website](https://flowtype.org/)
*   [Try Flow Online](https://flowtype.org/try/)
*   [Flow GitHub](https://github.com/facebook/flow)
*   [Stack Overflow #flowtyped](http://stackoverflow.com/questions/tagged/flowtype)

The Flow team is committed to making sure that everyone has an excellent experience using Flow. If that is ever not true, we’d love to hear from you about how to improve.











* * *







Follow [James Kyle on twitter](https://twitter.com/thejameskyle). Follow [Flow on twitter](https://twitter.com/flowtype) too.








