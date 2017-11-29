---
author: Mariya Diminsky
authorTwitter: none
authorFacebook: none
title: "Learn ES6 The Dope Way Part III: Template Literals, Spread Operators, and Generators!"
subTitle: "Welcome to Part III of Learn ES6 The Dope Way, a series created to help you easily understand ES6 (ECMAScript 6)!..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*RuxaPPPrL6K09eF4pFhISw.jpeg
url: https://medium.freecodecamp.org/learn-es6-the-dope-way-part-iii-template-literals-spread-operators-generators-592765337294
id: learn-es6-the-dope-way-part-iii-template-literals-spread-operators-generators-592765337294
date: 2016-06-14T08:50:52.366Z
tags: [
  "JavaScript",
  "ES6",
  "Education",
  "Web Development",
  "Tutorial"
]
---
# Learn ES6 The Dope Way Part III: Template Literals, Spread Operators, and Generators!







![](https://cdn-images-1.medium.com/max/2000/1*RuxaPPPrL6K09eF4pFhISw.jpeg)







Welcome to Part III of **Learn ES6 The Dope Way**, a series created to help you easily understand ES6 (ECMAScript 6)!

Let’s adventure further into ES6 and cover three super valuable concepts:

*   Template Literals
*   Spread Operators
*   Generators

#### Template Literals

Benefits:

*   Easy expression interpolation and method calls! See examples below.
*   Including complex information in the format you want is simple!
*   You don’t need to worry about multiple quotation marks, multi-lines, spaces, or using “+” sign either! Only two back ticks recognize all the information inside of them! Woohoo!

Beware:

*   Commonly called “Template Strings”, as this was their name in prior editions of ES2015 / ES6 specification.
*   Variables and parameters need to be wrapper in dollar sign and curly braces, ie. _placeholder_ ${EXAMPLE}.
*   The plus sign,“+”, inside of a Template Literal literally acts as a math operation, not a concatenation if also inside ${}. See examples below for further explanation.

#### Migrating to Template Literal Syntax

After reviewing the benefits and items to be aware of, take note of these examples and study the subtle differences with using Template Literals:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a5e4196374c679c328126014d52e62dc?postId=592765337294" data-media-id="a5e4196374c679c328126014d52e62dc" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Let’s checkout an even more complex way of using Template Literals! Look at how easy it is to include all this information without worrying about all the “+” signs, spaces, math logic, and quotation placement! It can be _so_ convenient! Also please note, you will need to include another dollar sign, outside of the placeholder, if printing out prices:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b2fed9ad152cab3ccdf6e274fb4d1da6?postId=592765337294" data-media-id="b2fed9ad152cab3ccdf6e274fb4d1da6" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Wow, so much simpler!! It’s so exciting…Ahh!!



![](https://cdn-images-1.medium.com/max/1600/1*WKbJrvvwwSQvnI9Yn_HTIw.gif)



#### Spread Operators

If you have multiple arguments in an array that you want to insert into a function call, or multiple arrays and/or array elements that you want to insert into another array seamlessly, use Spread Operators!

Benefits:

*   Easily concats arrays inside of other arrays.
*   Place the arrays wherever you want inside of that array.
*   Easily add arguments into function call.
*   Just 3 dots ‘…’ before the array name.
*   Similar to _function.apply_ but can be used with the _new_ keyword, while _function.apply_ cannot.

Let’s take a look at a situation where we would want to add several arrays into another main array without using the Spread Operator:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/8ffca4f818d564b6ef8ca7adb9882331?postId=592765337294" data-media-id="8ffca4f818d564b6ef8ca7adb9882331" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





With the Spread Operator, your arrays are automatically inserted and concatenated wherever you’d like. No need for any extra steps:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/654f37aed9d4337ca5460cf3a4b6b466?postId=592765337294" data-media-id="654f37aed9d4337ca5460cf3a4b6b466" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Another useful example:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/731e2f3cd1bdac82c5cfcd977ea61eb2?postId=592765337294" data-media-id="731e2f3cd1bdac82c5cfcd977ea61eb2" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





#### Potentially more useful than .apply()

What if you have multiple arguments to place inside of a function? You could use the good ol’ _Function.prototype.apply_:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/7f51a02f85bfd849c553c2eea5db5b87?postId=592765337294" data-media-id="7f51a02f85bfd849c553c2eea5db5b87" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Or use the Spread Operator:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/35a4387219270b4ae53aa34bf487b01a?postId=592765337294" data-media-id="35a4387219270b4ae53aa34bf487b01a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





In ES5 it is not possible to compose the _new_ keyword with the _apply_ method. Since the introduction of the Spread Operator syntax, you can now!





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/7f931f68113bb6e775d8a360ca350cef?postId=592765337294" data-media-id="7f931f68113bb6e775d8a360ca350cef" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





#### Generators

Benefits:

*   Allows you to pause functions to be resumed later.
*   Easier to create asynchronous functions.
*   Used commonly with _setTimeout()_ or _setInterval()_ to time asynchronous events.

Be aware:

*   You know you are looking at a generator if you see * and the word _yield_.
*   You need to call the function each time so the next function within is called, otherwise it won’t run, unless it’s within a _setInterval()_.
*   Result naturally comes out in object form, add ._value_ to get value only.
*   Object comes with _done_ property that is set to false until all _yield_ expressions are printed.
*   Generators end either when all functions/values have been called or if a _return_ statement is present.

Example:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/8ede20c632907476f256ea0d22280e80?postId=592765337294" data-media-id="8ede20c632907476f256ea0d22280e80" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Generators are super useful when it comes to asynchronous functions calls. Let’s say you have 3 different functions that you’ve stored in an array and you want to call each one after another after a certain amount of time:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d570e6fec81d522d88272a9cb0340663?postId=592765337294" data-media-id="d570e6fec81d522d88272a9cb0340663" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





This can similarly be accomplished via a _promise_ (an operation that hasn’t completed yet, but is expected in the future) as well. Developers sometimes use promises and Generators together in their code, so it’s good to be aware of both.

Congrats! You’ve made it through **Learn ES6 The Dope Way** Part III and now you’ve acquired three super valuable concepts! You can now safely brush up and make efficient use of Template Literals, Spread Operators, and Generators within your code. Woohoo! Go you!

Although, you might want to wait since there are still browser issues with ES6 and it’s important to use compilers like _Babel_ or a module bundler like _Webpack_ before publishing your code. All of these will be discussed in future editions of **Learn ES6 The Dope Way! Thanks for reading** **❤**

Keep your wisdom updated by liking and following as more **Learn ES6 The Dope Way** is coming soon to Medium!

[**Part I: const, let & var**](https://medium.freecodecamp.com/learn-es6-the-dope-way-i-const-let-var-ae828580472b#.lvovn8y96)

[**Part II: (Arrow) => functions and ‘this’ keyword**](https://medium.com/@__Masha__/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881#.59q9th108)

[**Part III: Template Literals, Spread Operators & Generators!**](https://medium.com/@__Masha__/learn-es6-the-dope-way-part-iii-template-literals-spread-operators-generators-592765337294#.akxbad3wl)

[**Part IV: Default Parameters, Destructuring Assignment, and a new ES6 method!**](https://medium.com/@__Masha__/learn-es6-the-dope-way-part-iv-default-parameters-destructuring-assignment-a-new-es6-method-44393190b8c9#.c0xb0vmqz)

[**Part V: Classes, Transpiling ES6 Code & More Resources!**](https://medium.com/@__Masha__/learn-es6-the-dope-way-part-v-classes-browser-compatibility-transpiling-es6-code-47f62267661#.5xsfm9s8s)

You can also find me on github ❤ [https://github.com/Mashadim](https://github.com/Mashadim)








