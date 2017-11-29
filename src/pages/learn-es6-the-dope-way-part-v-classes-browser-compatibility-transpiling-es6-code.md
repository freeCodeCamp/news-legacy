---
author: Mariya Diminsky
authorTwitter: none
authorFacebook: none
title: "Learn ES6 The Dope Way Part V: Classes, Transpiling ES6 Code &amp; More Resources!"
subTitle: "Welcome to Part V of Learn ES6 The Dope Way, a series created to help you easily understand ES6 (ECMAScript 6)!..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*RuxaPPPrL6K09eF4pFhISw.jpeg
url: https://medium.freecodecamp.org/learn-es6-the-dope-way-part-v-classes-browser-compatibility-transpiling-es6-code-47f62267661
id: learn-es6-the-dope-way-part-v-classes-browser-compatibility-transpiling-es6-code-47f62267661
date: 2016-06-27T06:02:46.575Z
tags: [
  "JavaScript",
  "ES6",
  "Web Development",
  "Tutorial",
  "Education"
]
---
# Learn ES6 The Dope Way Part V: Classes, Transpiling ES6 Code & More Resources!







![](https://cdn-images-1.medium.com/max/2000/1*RuxaPPPrL6K09eF4pFhISw.jpeg)







Welcome to Part V of **Learn ES6 The Dope Way**, a series created to help you easily understand ES6 (ECMAScript 6)!

Today we’ll explore ES6 _classes_, learn how to compile our code into ES5 for browser compatibility and learn about some awesome resources that will help us understand ES6 in greater depth! Adventure time! ❤



![](https://cdn-images-1.medium.com/max/1600/1*EwyGlROHPNaLRBejoGqM3g.gif)



#### Classes in ES6

**Benefits:**

*   A simpler way of dealing with JavaScript’s Prototype-Inheritance — it’s just ‘syntactical sugar’.
*   You are still using the same object-oriented inheritance model.
*   Similar to _class_ syntax in Java, Python, Ruby and PHP.
*   Saves you a lot of typing.

**Beware:**

*   Use can only invoke a _class_ via _new_, not a function call.
*   Use _super()_ to call the _constructor_ of a parent class.
*   A _class_ looks like an object but behaves like a function — because it is a function.
*   _Class_ declarations are not hoisted as function declarations are.
*   A name given to a _class_ expression is only local to the _class_ body.
*   A _SyntaxError_ will be thrown if the class contains more than one occurrence of a _constructor_ method.
*   While the members of an object literal are separated by commas, commas are illegal in _classes _— this emphasizes the difference between them. Semicolons are only allowed for future syntax (possibly ES7), which may include properties cancelled by semicolons.
*   In _derived classes_(explained later), _super()_ must be called first, before you can use the _this_ keyword. Otherwise it will cause a _ReferenceError_.
*   _Static_ properties are properties of the _class_ itself. Thus while they can be inherited and accessed by directly calling the _class_ name, if you call an instance of the _class_(and store it within a variable)you will not be able to access it with that variable.

#### Creating a Class

So how do we create a _class_? Let us first review how objects are created in ES5 without the use of _classes_:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/79c2eb4a5ffb7b2ace855a1682a55b29?postId=47f62267661" data-media-id="79c2eb4a5ffb7b2ace855a1682a55b29" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Now observe the same thing with ES6 _classes_:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ed42154db05efa22beba1d688f6581b6?postId=47f62267661" data-media-id="ed42154db05efa22beba1d688f6581b6" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





What are the main differences? Clearly the _class_ syntax looks like an object, but remember that actually it’s still a function and behaves so. Test it out yourself:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c4bcc5ffc90ccc1c60e9a6e502c536f2?postId=47f62267661" data-media-id="c4bcc5ffc90ccc1c60e9a6e502c536f2" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Another main difference is anything you want to store must be within a _constructor_ method. Any prototype method of the _class_ should be inside of that _class,_ but outside of the _constructor,_ without writing ‘._prototype_’, and in ES6 function syntax.

#### Twos Ways of Defining a Class & Prototype Inheritance

Now there are two main ways of defining a _class _— the example above is one of the more common ways, a _class_ declaration. While a _class_ is indeed a function and function declarations are hoisted — meaning the function can be accessed no matter if it is called before it is declared — yet you cannot hoist a _class_ declaration. This is important to remember:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b5edd08016ad09131b4dc38b427d0fdb?postId=47f62267661" data-media-id="b5edd08016ad09131b4dc38b427d0fdb" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





The reason for this limitation is that _classes_ can have an _extends_ clause — used for inheritance — whose value can be specified at a later time or may even depend on an inputted value or computation. Since expressions may sometime need to be evaluated another time, it makes sense for this evaluation not to be hoisted before all values are evaluated. Not doing so may cause errors in your code.

Still, it is possible to store an instance of a _class_ before it is created in a function for later use and evaluate it after the _class_ has been defined:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d07d2a359f0b0389f4fe382bf52bb876?postId=47f62267661" data-media-id="d07d2a359f0b0389f4fe382bf52bb876" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





The second way to define a class is a _class_ expression. As with function expressions, class _expressions_ can be named or anonymous. Be aware, these names are only local to the _class_ body and cannot be accessed outside of it:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/6ab2c3f713c82042ae8a3994621ab5af?postId=47f62267661" data-media-id="6ab2c3f713c82042ae8a3994621ab5af" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





There are two types of _classes_: The base _class — _or the parent class — and the derived _class — _the inherited subclass. Here _Bunny_ is the base class and _BelgianHare_ is the derived class since it has the _extends_ clause. Notice how simple the syntax for prototype inheritance is with _classes_:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/96c7da2bda52ed185642417cdf5442cf?postId=47f62267661" data-media-id="96c7da2bda52ed185642417cdf5442cf" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





The _super()_ function inside of the derived _class_, _BelgianHare_, gives us access to the _constructor_ in the base _class_, _Bunny_, so when we call the prototype methods from both _classes_(_drinkFavDrink()_ from the derived _class,_ and _eatFavFood()_ from the base _class_), they both work!

#### Browser Compatibility

Not all ES6 features are fully supported on all browsers as of yet. In the meantime stay updated by checking out these sites:

*   View compatibility chart: [https://kangax.github.io/compat-table/es6/](https://kangax.github.io/compat-table/es6/)
*   Enter any ES6 feature in manually: [http://caniuse.com/#search=const](http://caniuse.com/#search=const)

#### Transpiling ES6 Code

Since not all browsers support all ES6 features you need to transpile your ES6 code into a compiler such as _Babel_ or module bundler like _Webpack_.

Transpiling simply means taking out ES6 code and converting it into ES5 so it can be read by all browsers — like a safety precaution!

There are many transpiling tools, the most popular are also the ones that support the most ES6 features:

*   _Babel.js_
*   _Closure_
*   _Traceur_

You can use any of of these, but out of the three listed, I would recommend _Babel_ for smaller projects. Please follow their simple steps for installing _Babel_ into your project via _Node_: [https://babeljs.io/](https://babeljs.io/)



![](https://cdn-images-1.medium.com/max/1600/1*YHKpM73vm1u2fvrKgYcYYw.png)



For larger projects I recommend using _Webpack_. _Webpack_ does a lot of complicated things for you, including: transpiling code, SAS conversions, dependency management, and even replacing tools such as _Grunt_, _Gulp_ and _Browserify_. There is already an informative tutorial written on Webpack right over [here](https://medium.com/@dabit3/beginner-s-guide-to-webpack-b1f1a3638460#.mu2kgudga).

#### Resources

Check out these resources to learn and explore ES6 in greater depth:



![](https://cdn-images-1.medium.com/max/1600/1*h6QrITdqOjVWG9-e3nkLSA.png)



The Mozilla Developer Network (MDN) is a superb tool for learning about all ES6 concepts, actually anything JavaScript. For example, let’s learn more about _classes_: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

Babel.js has super useful article summarizing all our ES6 points into one: [https://babeljs.io/docs/learn-es2015/](https://babeljs.io/docs/learn-es2015/)

This guy is always fun to watch: [https://www.youtube.com/playlist?list=PL0zVEGEvSaeHJppaRLrqjeTPnCH6vw-sm](https://www.youtube.com/playlist?list=PL0zVEGEvSaeHJppaRLrqjeTPnCH6vw-sm)

And check out this exhaustive list of ES6 study resources: [https://github.com/ericdouglas/ES6-Learning](https://github.com/ericdouglas/ES6-Learning)

There are many, many more. Go forth my child, explore thy internet.

Remember, no matter how experienced you are — Google is your friend.

Congrats! You’ve made it through **Learn ES6 The Dope Way** Part V and now you’ve learned a clever way of using prototype inheritance through ES6 _classes_, understand that it’s important to _always_ transpile your code since not all browsers support _all_ features of ES6— either through _Babel.js_ for smaller projects or _Webpack_ for larger projects.

Keep your wisdom updated by liking and following. This is the last lesson in the **Learn ES6 The Dope Way** series! Congrats, you’ve made it!! Pat yourself in the back you did a great job!! I’m so proud of you! Yay!!!



![](https://cdn-images-1.medium.com/max/1600/1*2ecYe92TjNDCisDHLDH_4Q.gif)



**Thanks for reading ❤** Stay tuned for more JavaScript lessons underway!

[**Part I: const, let & var**](https://medium.freecodecamp.com/learn-es6-the-dope-way-i-const-let-var-ae828580472b#.lvovn8y96)

[**Part II: (Arrow) => functions and ‘this’ keyword**](https://medium.com/@__Masha__/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881#.59q9th108)

[**Part III: Template Literals, Spread Operators & Generators!**](https://medium.com/@__Masha__/learn-es6-the-dope-way-part-iii-template-literals-spread-operators-generators-592765337294#.akxbad3wl)

[**Part IV: Default Parameters, Destructuring Assignment, and a new ES6 method!**](https://medium.com/@__Masha__/learn-es6-the-dope-way-part-iv-default-parameters-destructuring-assignment-a-new-es6-method-44393190b8c9#.c0xb0vmqz)

[**Part V: Classes, Transpiling ES6 Code & More Resources!**](https://medium.com/@__Masha__/learn-es6-the-dope-way-part-v-classes-browser-compatibility-transpiling-es6-code-47f62267661#.5xsfm9s8s)

You can also find me on github ❤ [https://github.com/Mashadim](https://github.com/Mashadim)








