---
author: rajaraodv
authorTwitter: https://twitter.com/rajaraodv
authorFacebook: none
title: "5 JavaScript “Bad” Parts That Are Fixed In ES6"
subTitle: "ECMAScript 6 (ES6) features can be divided into features that are pure syntactic sugar (like: class), features that enhance JavaScript (l..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*7wW5ARBnO9lewHr46Eff9A.jpeg
url: https://medium.freecodecamp.org/5-javascript-bad-parts-that-are-fixed-in-es6-c7c45d44fd81
id: 5-javascript-bad-parts-that-are-fixed-in-es6-c7c45d44fd81
date: 2016-05-13T18:38:01.292Z
tags: [
  "JavaScript",
  "ES6",
  "Programming",
  "Web Development",
  "Technology"
]
---
# 5 JavaScript “Bad” Parts That Are Fixed In ES6



![](https://cdn-images-1.medium.com/max/1600/1*7wW5ARBnO9lewHr46Eff9A.jpeg)



ECMAScript 6 (ES6) features can be divided into features that are pure syntactic sugar (like: **class**), features that enhance JavaScript (like **import**) and features that fix some of JavaScript’s “bad” parts (like the **let** keyword). Most blogs and articles combine all three types, and can overwhelm newcomers. So I’m writing this post that focuses on just the key ES6 features that fix “bad” parts.

> **I hope that by the end of this blog you’ll realize that by using just a couple ES6 features like let and the fat-arrow, you’ll get massive returns.**

OK, Let’s get started.

### 1\. Block Scope

ES5 only had “function-level scope” (i.e. you wrap code in functions to create scope) and caused a lot of issues. ES6 provides “block”-level scoping(i.e curly-braces to scope) when we use “**let**” or “**const**” instead of “**var**”.

#### Prevent Variable Hoisting Outside of Scope

Below picture shows that the variable “bonus” is not hoisted outside of the “if” block making work as most programming languages.

> Note: You can click on the pictures to zoom and read



![](https://cdn-images-1.medium.com/max/1600/1*_sSmBGUVfnTNPbmDCcSYXQ.png)



#### Prevent Duplicate Variable Declaration

ES6 doesn’t allow duplicate declaration of variables when we declare them using **“let” or “const” in the same scope**. This is very helpful in avoiding duplicate function expressions coming from different libraries (like the “add” function expression below).



![](https://cdn-images-1.medium.com/max/1600/1*0hlaggfnV34FjyrqTiNibQ.png)



#### Eliminates The Need For IIFE

In ES5, in cases like below, we had to use Immediately Invoked Function Expression (IIFE) to ensure we don’t not pollute or overwrite the global scope. In ES6, we can just use curly braces ({}) and use **const** or **let** to get the same effect.



![](https://cdn-images-1.medium.com/max/1600/1*yU9z2vrCpQ2N1Z-dNtlzbA.png)



#### babel — A Tool to convert ES6 to ES5

> We need to ultimately run ES6 in a regular browser. [Babel](http://babeljs.io/) is the most popular tool used to convert ES6 to ES5\. It has various interfaces like a CLI, Node-module and also an online converter. I use the node module for my apps and use the [online version](http://babeljs.io/repl/) to quickly see the differences.

> Below picture shows how Babel renames the variables to simulate “let” and “const”!



![](https://cdn-images-1.medium.com/max/1600/1*z8AcAGsYEgh5Sxtt6rev2w.png)

BabelJS.io renaming variables to simulate let and const



#### Makes It Trivial To Use Functions In Loops

In ES5, if you had a function inside a loop (like for(var i = 0; i < 3; i++) {…}), and if that function tried to access the looping variable “i”, we’d be in trouble because of hoisting. In ES6, if you use “**let**”, you can use functions without any issue.



![](https://cdn-images-1.medium.com/max/1600/1*dsRnyw5CBwCZjyAjDi55Xg.png)



> Note: You can’t use **const** because it is **constant** unless you are using the new for..of loop.

### 2\. Lexical “this” (via Arrow Functions)

In ES5, “this” can vary based on “where” it is called and even “how” it is called and has caused all sorts of pains for JS developers. ES6 eliminates this major issue by “lexical” this.

> Lexical “this” a feature that forces the variable “this” to always point to the object where it is **physically** located within.

#### The problem and two workarounds in ES5:

In the below picture, we are trying to print a user’s firstName and salary. But we are getting the salary from the server (simulated). Notice that when the response comes back, “this” is “window” instead of the “person” object.



![](https://cdn-images-1.medium.com/max/1600/1*2UoDXLLTVcHTKfIEeE8Aow.png)

ES5 — the problem and two workarounds



#### The Solution in ES6

**Simply use the fat-arrow function => and you get the lexical “this” automatically.**



![](https://cdn-images-1.medium.com/max/1600/1*iJ1CK-Na-KTtfKkh69_NYA.png)

Line 16 shows how to use => function in ES6



> The below picture shows how Babel converts fat-arrow function into regular ES5 function w/ workaround so that it works in current browsers.



![](https://cdn-images-1.medium.com/max/1600/1*4RDvh0kMnYAE2dxNIYY31Q.png)

babel is converting fat-arrow to regular ES5 function w/ workaround #2



### 3\. Dealing With “arguments”

In ES5, “arguments” acts like an Array (i.e. we can loop over it), but is not an Array. So, all the Array functions like sort, slice and so on are not available.

In ES6, we can use a new feature called “Rest” parameters. It’s represented with 3 dots and a name like **…args.** Rest parameters is an Array and so we can use all the Array functions.



![](https://cdn-images-1.medium.com/max/1600/1*N4UibXqU1KkTkWb6icv5Qw.png)

Picture shows ES6 “Rest” parameters



### 4\. Classes

Conceptually, there is no such thing as a “Class”(i.e. blueprint) in JS like it is in other OO languages like Java. But people for a long time have treated the “function” (aka “function constructors”) that creates Objects when we use the “new” keyword as Classes.

And since JS doesn’t support the “Classes” and just simulates it via “prototypes”, it’s syntax has been very confusing for both existing JS developers and new comers who wants to use it in a traditional OO fashion. **This is especially true for** **things like: creating subclasses, calling functions in parent class and so on.**

ES6 brings a new syntax that’s common in various programming languages and makes the whole thing simple. Below picture shows a side-by-side comparison of ES5 and ES6 classes.

> Note: You can click on the picture to zoom and read



![](https://cdn-images-1.medium.com/max/1600/1*QtHnKOR06KK8Z_LQ-QIwzA.png)

ES5 Vs ES6 (es6-features.org)



> **UPDATE: Be sure to read:** [**_Is “Class” In ES6 The New “Bad” Part?_**](https://medium.com/@rajaraodv/is-class-in-es6-the-new-bad-part-6c4e6fe1ee65#.4hqgpj2uv) **_(after this)_**

### 5\. Strict Mode

[Strict Mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)(“use strict”) helps identify common issues (or “bad” parts) and also helps with [“securing” JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#Securing_JavaScript). In ES5, the Strict Mode is optional but in ES6, it’s needed for many [ES6 features](http://www.ecma-international.org/ecma-262/6.0/#sec-strict-mode-code). So most people and tools like babel automatically add “use strict” at the top of the file putting the whole JS code in strict mode and forcing us to write better JavaScript.

That’s it! 🙏

### My Other Posts

#### ES6

1.  [_5 JavaScript “Bad” Parts That Are Fixed In ES6_](https://medium.com/@rajaraodv/5-javascript-bad-parts-that-are-fixed-in-es6-c7c45d44fd81#.7e2s6cghy)
2.  [_Is “Class” In ES6 The New “Bad” Part?_](https://medium.com/@rajaraodv/is-class-in-es6-the-new-bad-part-6c4e6fe1ee65#.4hqgpj2uv)

#### WebPack

1.  [_Webpack — The Confusing Parts_](https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9#.6ot6deo2b)
2.  [_Webpack & Hot Module Replacement [HMR]_](https://medium.com/@rajaraodv/webpack-hot-module-replacement-hmr-e756a726a07#.y667mx4lg) _(under-the-hood)_
3.  [_Webpack’s HMR And React-Hot-Loader — The Missing Manual_](https://medium.com/@rajaraodv/webpacks-hmr-react-hot-loader-the-missing-manual-232336dc0d96#.fbb1e7ehl)

#### Draft.js

1.  [_Why Draft.js And Why You Should Contribute_](https://medium.com/@rajaraodv/why-draft-js-and-why-you-should-contribute-460c4a69e6c8#.jp1tsvsqc)
2.  [_How Draft.js Represents Rich Text Data_](https://medium.com/@rajaraodv/how-draft-js-represents-rich-text-data-eeabb5f25cf2#.hh0ue85lo)

#### React And Redux :

1.  [_Step by Step Guide To Building React Redux Apps_](https://medium.com/@rajaraodv/step-by-step-guide-to-building-react-redux-apps-using-mocks-48ca0f47f9a#.s7zsgq3u1)
2.  [_A Guide For Building A React Redux CRUD App_](https://medium.com/@rajaraodv/a-guide-for-building-a-react-redux-crud-app-7fe0b8943d0f#.g99gruhdz) _(3-page app)_
3.  [_Using Middlewares In React Redux Apps_](https://medium.com/@rajaraodv/using-middlewares-in-react-redux-apps-f7c9652610c6#.oentrjqpj)
4.  [_Adding A Robust Form Validation To React Redux Apps_](https://medium.com/@rajaraodv/adding-a-robust-form-validation-to-react-redux-apps-616ca240c124#.jq013tkr1)
5.  [_Securing React Redux Apps With JWT Tokens_](https://medium.com/@rajaraodv/securing-react-redux-apps-with-jwt-tokens-fcfe81356ea0#.xci6o9s6w)
6.  [_Handling Transactional Emails In React Redux Apps_](https://medium.com/@rajaraodv/handling-transactional-emails-in-react-redux-apps-8b1134748f76#.a24nenmnt)
7.  [_The Anatomy Of A React Redux App_](https://medium.com/@rajaraodv/the-anatomy-of-a-react-redux-app-759282368c5a#.7wwjs8eqo)

#### Salesforce

1.  [_Developing React Redux Apps In Salesforce’s Visualforce_](https://medium.com/@rajaraodv/developing-react-redux-apps-in-salesforce-s-visualforce-3ad7be560d1c#.f6bao6mtu)

_🎉🎉🎉_ **_If you like this post, please 1\._** ❤❤❤**_it below on Medium and 2\. please share it on Twitter. You may retweet the below card_**_🎉🎉🎉_





<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/a8b878d517ea8be859805ec29d19a494?postId=c7c45d44fd81" data-media-id="a8b878d517ea8be859805ec29d19a494" allowfullscreen="" frameborder="0"></iframe>





**Thanks for reading!!**😀🙏








