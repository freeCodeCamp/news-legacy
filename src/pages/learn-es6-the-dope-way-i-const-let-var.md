---
author: Mariya Diminsky
authorTwitter: none
authorFacebook: none
title: "Learn ES6 The Dope Way Part I: const, let &amp; var"
subTitle: "Welcome to Part I of Learn ES6 The Dope Way, a series created to help you easily understand ES6 (ECMAScript 6)!..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*RuxaPPPrL6K09eF4pFhISw.jpeg
url: https://medium.freecodecamp.org/learn-es6-the-dope-way-i-const-let-var-ae828580472b
id: learn-es6-the-dope-way-i-const-let-var-ae828580472b
date: 2016-05-01T05:40:02.028Z
tags: [
  "ES6",
  "JavaScript",
  "Programming",
  "Web Development",
  "Tech"
]
---
# Learn ES6 The Dope Way Part I: const, let & var







![](https://cdn-images-1.medium.com/max/2000/1*RuxaPPPrL6K09eF4pFhISw.jpeg)







Welcome to Part I of **Learn ES6 The Dope Way,** a series created to help you easily understand ES6 (ECMAScript 6)!

First up, what’s the deal with _const_, _let_, and _var_?

You’ve probably been a witness to one of these situations — _let_ and/or _const_ being substituted for _var_, or _let_ and _const_ being used in the same code at the same time, or even more perplexing, _let_, _const_ AND _var_ all being used at the once!?

Hey no worries, I got you. Let’s clear this fog together:

#### const

Benefits:

*   Useful if you’re setting a variable that you don’t plan on changing.
*   Protects and prevents your variables from reassignment.
*   In compiled languages, there is an increase in runtime efficiency of your code and thus an overall performance boost vs using plain ‘ol _var_.

Beware:

*   Works as it should in Chrome and Firefox. But not in Safari. Instead it acts as a normal variable, as if it were _var,_ and thus can be reassigned.
*   Generally there is programming convention to set the name in all caps to show others reading your code that the value of the _const_ valueshould not be changed — you will witness both lowercase and caps _const_ coding situations. Just something to be aware of.

Examples:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c4c7fd9ee616f0341cd17b3f8fa2a256?postId=ae828580472b" data-media-id="c4c7fd9ee616f0341cd17b3f8fa2a256" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Does that make sense?

> Think of const, like the constant sea — _never-ending, never-changing…_

> …except in Safari.

#### let

Students and experienced programmers coming from a Ruby or Python background will love _let,_ as it enforces block scoping!

As you migrate over to ES6 country, you may notice yourself adjusting to a new _let_ metamorphosis taking over your coding style, and find yourself less likely to using _var_ anymore. With _let_ it’s so much more clear now where your values are coming from without worrying about them being hoisted!

Benefits:

*   Block-Scoping, your variable’s values are exactly as they should be in that current scope and they are not hoisted as with _var_.
*   Super useful if you don’t want your values to be overwritten, like in a for loop.

Beware:

*   You may not always want to use _let_. For example in situations where variables aren’t as easily block scoped, _var_ may be more convenient.

Examples:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/8527b1190c387f8aec8465b5994f4a96?postId=ae828580472b" data-media-id="8527b1190c387f8aec8465b5994f4a96" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Do you see the difference? It’s all about scope. With _var_, it has access to it’s parent/outer scope and thus can change the value inside the if statement. Unlike _let_ which is block-scoped and can only be altered within the current scope it’s in.

_let_ is super straight-forward. It’s like a person who speaks straight to your face and tells you exactly what they need right then and there while _var_ does this as well but may occasionally reply with unexpected answers — due to hoisting and access to outer scope variables. Depending on the situation either one may be in your favor.

Another great example on the benefits of _let_:

Say you want to create a game board of 30 divs and each one has their own value. If you were to do this with _var_, the _i_ index would be overwritten for every iteration — every single div would have the value of 30! Yikes!

On the other hand, with _let_, every div has its own value, as its own div scope is maintained for each iteration! See the difference:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a159c903c9f8e33795c6bd13841983e7?postId=ae828580472b" data-media-id="a159c903c9f8e33795c6bd13841983e7" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Congrats! You’ve made it through **Learn ES6 The Dope Way** Part I and now you know the main differences between const, let and var! Woohoo! You rockstar, you :)

Keep your knowledge updated by liking and following as more **Learn ES6 The Dope Way** is coming soon to Medium!

[**Part I: const, let & var**](https://medium.freecodecamp.com/learn-es6-the-dope-way-i-const-let-var-ae828580472b#.lvovn8y96)

[**Part II: (Arrow) => functions and ‘this’ keyword;**](https://medium.com/@__Masha__/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881#.59q9th108)

[**Part III: Template Literals, Spread Operators & Generators!**](https://medium.com/@__Masha__/learn-es6-the-dope-way-part-iii-template-literals-spread-operators-generators-592765337294#.akxbad3wl)

[**Part IV: Default Parameters, Destructuring Assignment, and a new ES6 method!**](https://medium.com/@__Masha__/learn-es6-the-dope-way-part-iv-default-parameters-destructuring-assignment-a-new-es6-method-44393190b8c9#.c0xb0vmqz)

[**Part V: Classes, Transpiling ES6 Code & More Resources!**](https://medium.com/@__Masha__/learn-es6-the-dope-way-part-v-classes-browser-compatibility-transpiling-es6-code-47f62267661#.5xsfm9s8s)

You can also find me on github ❤ [https://github.com/Mashadim](https://github.com/Mashadim)








