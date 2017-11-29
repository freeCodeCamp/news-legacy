---
author: Alex Moldovan
authorTwitter: https://twitter.com/alexnmoldovan
authorFacebook: https://facebook.com/1152981894719728
title: "ES2015 is already here — it’s just not very evenly distributed"
subTitle: "In 2015, ECMA International finalized the ECMAScript 6 specifications and renamed it to ECMAScript 2015 (ES 2015). This means is that we ..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*EXorOYogh19X_PA08uKODQ.jpeg
url: https://medium.freecodecamp.org/start-writing-modern-javascript-code-f98eccb4841
id: start-writing-modern-javascript-code-f98eccb4841
date: 2016-01-10T20:36:22.029Z
tags: [
  "JavaScript",
  "Software Development",
  "ES6",
  "Programming",
  "Technology"
]
---
# ES2015 is already here — it’s just not very evenly distributed







![](https://cdn-images-1.medium.com/max/2000/1*EXorOYogh19X_PA08uKODQ.jpeg)







In 2015, ECMA International finalized the [ECMAScript 6 specifications](http://www.ecma-international.org/ecma-262/6.0/) and renamed it to **ECMAScript 2015 (ES 2015)**. This means is that we have a new standard in writing **JavaScript** code.

#### Sounds cool, can I use it?

ES2015 comes with a bunch of cool new features that we will briefly discuss later. Now that these features are basically frozen for this iteration, it’s safe to start working with them in full scale production applications.

Even more, I encourage you to migrate your old code as soon as you can to the new standard, because _any line of code that you write using the previous ES5 standard is obsolete from day 1_.

> “The future is already here — it’s just not very evenly distributed.” — William Gibson

As you can see in [the compatibility table](https://kangax.github.io/compat-table/es6/), ES2015 is being adopted at a fast pace by all browsers, even [Safari](https://kangax.github.io/compat-table/es6/#safari9) and [Microsoft Edge](https://kangax.github.io/compat-table/es6/#edge13) (the fancy name they came up with for the new version of IE). Not all functionality is implemented yet, but you can already use a good chunk of the new features directly in the browser.

However, I don’t advise you to write ES2015 code and then run it in directly in browser. [Say hello to **babel**](https://babeljs.io/)**.**



![](https://cdn-images-1.medium.com/max/1600/1*XmHUL5DeySv_dGmvbPqdDQ.png)



**Babel.js** is a [**transpiler**](https://en.wikipedia.org/wiki/Source-to-source_compiler) that you can very easily integrate into your JavaScript build process.

If you want to learn more about how to use babel for all your JavaScript applications — or how to implement a build process — I encourage you to read [this article](https://medium.com/javascript-scene/how-to-use-es6-for-isomorphic-javascript-apps-2a9c3abe5ea2#.xps7gn6up). Then get yourself familiar with task runners like [grunt](http://gruntjs.com/) and [gulp](http://gulpjs.com/), and with module bundlers like [webpack](https://webpack.github.io/) and [Browserify](http://browserify.org/), because they are slowly but surely becoming industry standards.

So we write ES2015 code today, the code gets transpiled into ES5, which is almost 100% supported in most modern browsers. Once most of the major functionalities offered by ES2015 are implemented in the modern browsers, we just get rid of the babel transpiler from our build process. So with a single step we bring our live code to the ES2015 standard.

### What’s new?

I remember being fascinated by the amount of new stuff that ES6 promised to bring, so if you want a complete guide for the new features I can advise you to follow these “tutorials”:

*   [http://es6-features.org/](http://es6-features.org/)
*   [https://github.com/lukehoban/es6features](https://github.com/lukehoban/es6features)
*   [https://babeljs.io/docs/learn-es2015/](https://babeljs.io/docs/learn-es2015/)

Now let’s discuss some of my favorite new features.

#### Arrow Functions

Arrow functions allow you to write anonymous functions in a much more compact way, dropping a lot of boilerplate code. This paves the way for functional style programming, and allows programmers to keep their sanity while reading functional code written by others.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/fcd66e4b0d746cf43f64cef28857ca98?postId=f98eccb4841" data-media-id="fcd66e4b0d746cf43f64cef28857ca98" allowfullscreen="" frameborder="0"></iframe>





The cool part with arrow functions is that you never have the write the word **_function _**—except in the cases in which you actually need a named function. Then you read about the new [enhanced object literal notation](https://github.com/lukehoban/es6features#enhanced-object-literals) and you realize that the word **_function_** is probably going to be forgotten soon.

#### Block-scoped variables

Function-scoped variable behavior has long been the climax of any JavaScript interview. ES2015 makes life easier for those who come from C-based programming languages in which a variable is scoped to the block of code in which it is declared. With “**let**” and “**const**”, your code is much more expressive. Let’s look at a few examples:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ccbb7c5123a686edbdff44b12b558f73?postId=f98eccb4841" data-media-id="ccbb7c5123a686edbdff44b12b558f73" allowfullscreen="" frameborder="0"></iframe>





As you probably figured it out by now, “**let”** is equivalent with “**var”**, but it is block-scoped., This means that it does not exist outside the block in which it is defined.

On the other hand, “**const”** allows you to define a variable with a fixed value. It can only get a value when it is created, and any subsequent assignment to a “**const”** has no effect. This is very important in terms of expressiveness because you can declare all variables that you do not modify in your code with “**const”** and all the others with “**let**.**”** This way, any value that has the potential to mutate in your code is easily trackable from the beginning. If all your variables are constants (no pun intended) you don’t need to worry about side effects or unwanted state mutations.

#### Destructuring

Talking about expressiveness, destructuring offers tons of ways of saying more with fewer lines of code. This feature basically does **pattern matching** on objects and arrays, allowing you to quickly access parts of them.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/cca449eb7a301090610770662986ceb2?postId=f98eccb4841" data-media-id="cca449eb7a301090610770662986ceb2" allowfullscreen="" frameborder="0"></iframe>





With destructuring, you no longer need to create variables which point to certain properties or to sub-objects of the function parameter, like in the _fullName()_ example above. Also it is easier to return multiple values from one function without writing too many lines of code. Destructuring is fun when it is combined with the new ways of handling function parameters: default parameters and the rest and spread operators.

#### Function Parameters — Default, Rest, Spread

Default parameters are pretty straight-forward, and are already present in many programming languages, so nothing extraordinary here. However the **rest** and the **spread** operators allow you to handle function parameters in any way you want.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/be55835fc21a84052be9efca22b3664a?postId=f98eccb4841" data-media-id="be55835fc21a84052be9efca22b3664a" allowfullscreen="" frameborder="0"></iframe>





#### Generators

Ok, we’ve been playing around with the syntax, we’ve made some cool functional style programming snippets, let’s dig deep into one of the most interesting features offered by ES2015, namely **generators**. Very briefly explained, generators are factory functions for **iterators**. Still confused? I was too, but let’s look at an example





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/f48332fbab4c5ba590bda6d550e65208?postId=f98eccb4841" data-media-id="f48332fbab4c5ba590bda6d550e65208" allowfullscreen="" frameborder="0"></iframe>





So what is happening here? A generator is basically a function which can be stopped at any time and resumed afterwards. The generator is stopped when the **yield** statement is executed and it returns whatever value we place next to the yield statement. We use the **next()** function call to go one step at a time, collecting the value yielded by the generator.

As an additional feature, you can pass a parameter to the next() function and that parameter is considered the return of the yield statement in the generator. So we basically have a two-way communication between the generator function and the outside world.

The big deal with generators is their potential to be used in the parts of the code that handle asynchronous calls. Imagine the situation in which you need to perform 3 distinct api calls in a particular order, always using the result of one call as parameter to the next call. Imagine how that code would look like with callbacks or even with promises.

What if we can do something like this instead?





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d16f2a2582b4a3b5070c6e3215d10ca3?postId=f98eccb4841" data-media-id="d16f2a2582b4a3b5070c6e3215d10ca3" allowfullscreen="" frameborder="0"></iframe>





There are already working solutions with allow you to write sequential async calls with generators and promises. As an example, you can checkout this [article which shows a similar solution](http://blog.mgechev.com/2014/12/21/handling-asynchronous-calls-with-es6-javascript-generators/).











* * *







Of course there are many other cool features like string templates, native promises, AMD-style modules, new functions added on the prototypes of Number, String, Array and Object and many more. But I presented here the ones which I consider the most useful in regular coding tasks. However, there’s a dark twist with one of the new features that I want to discuss.

#### Classes

I bet 50% of the people that read the specs were looking forward to this, while the other 50% were saying: “But … why???” I fall into the second category here.

ES2015 brings a sugaring syntax which uses prototypal object creation in the back. Here’s an example:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/08c6d0db2ac1d18b9ec800dd3985cc4c?postId=f98eccb4841" data-media-id="08c6d0db2ac1d18b9ec800dd3985cc4c" allowfullscreen="" frameborder="0"></iframe>





Get this out of your head, JavaScript does **NOT** have classes. JavaScript does not implement object oriented programming based on classes nor will it ever do that. The inheritance model in JavaScript is prototypal, objects are created based on the prototypes of other objects. All these syntax elements you see in the class snippet like: constructor, get, set, static are just implemented in the back as regular functions or simple values added on prototypes.

Adding class in JavaScript is probably the worst mistake moving forward. Think how many people misinterpret the meaning of “**this**”. Multiply that by 10 and you get the number of people that will misinterpret the meaning of “**class**”.

All these constructs are coming from the world of class-based object orientation. People just need to drop these practices, because they do not fit with the paradigms implemented in JavaScript. Further more, they confuse the newcomers more than ever.

> coming to JavaScript and asking how to do classical inheritance is like picking up a touch-screen mobile phone and asking where the rotary dial is. Of course, people will be amused when the next thing out of your mouth is, “If it doesn’t have a rotary dial, it’s not a telephone!” — _Eric Elliott, Programming JavaScript Applications_

My standard interview contains the following set of questions I ask in succession:

*   “Are classes mandatory in OOP?”
*   “Is JavaScript an OOP language?”
*   “Does it have classes?”

Imagine how much time I will potentially waste trying to explain to people that the “classes” that they see in JavaScript are actually NOT classes.

### Embrace Functional Programming

On the bright side, with ES2015 we have all these new features that allow us to write better, cleaner and at a certain extent faster code. I think that now is the time to embrace functional programming as the fundamental paradigm in JavaScript. Preferably, you won’t have to write a single loop statement ever again, except in some rare situations.

With **const** and **let** you are able to add another level of expressiveness to all your variables. You will probably avoid using **var** from this point on. Arrow functions combined with classic iterator functions are letting you write functional reactive programming, basically creating streams of functionality.

Your code becomes more succinct, more functional and less stateful. This also means that your code is easier to test and to maintain, and also far less prone to bugs, and feature pure functions, immutable data. There’s a lot of content out there on the benefits of functional programming, and I think that iterating over those points again doesn’t make sense in the scope of this article.

Working with Babel isn’t that hard, and I encourage you to start doing it today. Remember, code that you write today using ES5 syntax is obsolete. Fair and simple.

### What’s next?

ES2015 was a huge release with a lot of changes. The TC39 committee started with a different approach and they will standardize new features each year, basically splitting what was originally intended to be implemented as ES7 into smaller chunks.

Some of the future features of JavaScript will include: async functions, object/function decorators and things like SIMD (single instruction, multiple data) operations.

Usually all future features are called generically ESnext, in case you see this anywhere. With Babel, you can even play with some of these future features today!

Here are some articles I recommend reading regarding ESnext features:

*   [http://www.2ality.com/2015/11/tc39-process.html](http://www.2ality.com/2015/11/tc39-process.html)
*   [https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841#.hrg2xk5q1](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841#.hrg2xk5q1)
*   [https://www.twilio.com/blog/2015/10/asyncawait-the-hero-javascript-deserved.html](https://www.twilio.com/blog/2015/10/asyncawait-the-hero-javascript-deserved.html)
*   [https://github.com/tc39/ecma262](https://github.com/tc39/ecma262) (official status of features)








