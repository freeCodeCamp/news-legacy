---
author: Mariya Diminsky
authorTwitter: none
authorFacebook: none
title: "Learn ES6 The Dope Way Part II: Arrow functions and the ‘this’ keyword"
subTitle: "Welcome to Part II of Learn ES6 The Dope Way, a series created to help you easily understand ES6 (ECMAScript 6)!..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*qb02fqNhhC5mRIdzLA83Hg.png
url: https://medium.freecodecamp.org/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881
id: learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881
date: 2016-05-16T10:40:45.498Z
tags: [
  "JavaScript",
  "ES6",
  "Education",
  "Web Development",
  "Tutorial"
]
---
# Learn ES6 The Dope Way Part II: Arrow functions and the ‘this’ keyword







![](https://cdn-images-1.medium.com/max/2000/1*qb02fqNhhC5mRIdzLA83Hg.png)







Welcome to Part II of **Learn ES6 The Dope Way,** a series created to help you easily understand ES6 (ECMAScript 6)!

#### **So, what the heck is => ?**

You’ve probably seen these strange Egyptian-looking hieroglyphics symbols here and there, especially in someone else’s code, where you’re currently debugging a ‘_this’_ keyword issue. After an hour of tinkering, you’re now roaming the Google search bar and stalking Stack Overflow. Sound familiar?

Together, let’s cover three topics in **Learn ES6 The Dope Way** Part II:

*   How the ‘_this_’ keyword relates to **=>**.
*   How to migrate functions from ES5 to ES6.
*   Important quirks to be aware of when using **=>**.

#### Arrow Functions

Arrow functions were created to simplify function scope and make using the ‘_this_’ keyword much more straightforward. They utilize the **=>** syntax, which looks like an arrow. Even though I don’t think it needs to go on a diet, people call it “_the fat arrow”_ (and Ruby enthusiasts may know it better as the “_hash rocket”_ ) — something to be aware of.

#### How the ‘this’ keyword relates to Arrow Functions

Before we dive deeper into ES6 arrow functions, it’s important to first have a clear picture of what ‘_this_’ binds to in ES5 code.

If the ‘_this_’ keyword were inside an object’s **method** (a function that belongs to an object), what would it refer to?





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/450463bb616c4e5cc8fff26b17bee0a8?postId=381ac7a32881" data-media-id="450463bb616c4e5cc8fff26b17bee0a8" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Correct! It would refer to the object. We’ll get to why later on.

Now what about if the ‘_this_’ keyword were inside of method’s function?





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/49bf6c074897e415f1716a62476ccb4e?postId=381ac7a32881" data-media-id="49bf6c074897e415f1716a62476ccb4e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





What did you get? Wait, what happened to our bunny…?





<iframe data-width="640" data-height="480" width="640" height="480" src="https://medium.freecodecamp.org/media/a1383cc7650ef34cc1b43cac8d5afbab?postId=381ac7a32881" data-media-id="a1383cc7650ef34cc1b43cac8d5afbab" allowfullscreen="" frameborder="0"></iframe>





Ah, did you think ‘_this_’ refers to the method’s inner function?

Perhaps the object itself?

You are wise to think so, yet it is not so. Allow me to teach you what the coding elders had once taught me:

Coding Elder**:** “_Ah yes,_ t_he code is strong with this one._ _It is indeed practical to think that the ‘this’ keyword binds to the function but the truth is, ‘this’ has now fallen out of scope…It now belongs to…”,_ he pauses as if experiencing inner turmoil_, “the window object._”

That’s right. That’s exactly how it happened.

Why does ‘_this_’ bind to the window object? **Because ‘_this_’, always references the owner of the function it is in, for this case — since it is now out of scope — the window/global object.**

When it is inside of an object’s method — the function’s owner is the object. Thus the ‘_this_’ keyword is bound to the object. Yet when it is inside of a function, either stand alone or within another method, it will always refer to the window/global object.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/5c64808de9537a320006fe40474d3b3c?postId=381ac7a32881" data-media-id="5c64808de9537a320006fe40474d3b3c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





But why…?

This is known as a JavaScript quirk, meaning something that just happens within JavaScript that isn’t exactly straightforward and it doesn’t work the way you would think. This was also regarded by developers as a poor design choice, which they are now remedying with ES6's arrow functions.

Before we continue, it’s important to be aware of two clever ways programmers solve the ‘_this_’ problem within ES5 code, especially since you will continue to run into ES5 for awhile (not every browser has fully migrated to ES6 yet):

**#1** Create a variable outside of the method’s inner function. Now the ‘forEach’ method gains access to ‘_this_’ and thus the object’s properties and their values. This is because ‘_this_’ is being stored in a variable while it is still within the scope of the object’s direct method ‘showTasks’.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/85032c40bce8f2bb18d108e35b784275?postId=381ac7a32881" data-media-id="85032c40bce8f2bb18d108e35b784275" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





**#2** Use bind to attach the ‘_this_’ keyword that refers to the method to the method’s inner function.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/1ea85947cc103976930afb880b517ca5?postId=381ac7a32881" data-media-id="1ea85947cc103976930afb880b517ca5" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





And now introducing…Arrow functions! Dealing with ‘_this_’ issue has never been easier and more straightforward! The simple ES6 solution:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/750f1d137ff1a0ea4726f2c5fcd29ce2?postId=381ac7a32881" data-media-id="750f1d137ff1a0ea4726f2c5fcd29ce2" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





While in ES5 ‘_this_’ referred to the parent of the function, in ES6, arrow functions use lexical scoping — ‘_this_’ refers to it’s current surrounding scope and no further. Thus the inner function knew to bind to the inner function only, and not to the object’s method or the object itself.

#### How to migrate functions from ES5 to ES6.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/1c3ee3d606e1f1d8f6b0ba4974337ad0?postId=381ac7a32881" data-media-id="1c3ee3d606e1f1d8f6b0ba4974337ad0" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





You did it! Great job! Simple enough right? Here are a few more examples utilizing the fat — er skinny arrow, to get your eyes accustomed:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/e28dc4314b7ca5ae202cd4ee22c90e8b?postId=381ac7a32881" data-media-id="e28dc4314b7ca5ae202cd4ee22c90e8b" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





#### Important quirks to be aware of when using Arrow functions

If you use the ‘new’ keyword with => functions it will throw an error. Arrow functions can’t be used as a constructor — normal functions support the ‘new’ via the property prototype and internal method [[Construct]]. Arrow functions don’t use neither, thus the new (() => {}) throws an error.

Further quirks to consider:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/25fed346f54f9afecea657369627f061?postId=381ac7a32881" data-media-id="25fed346f54f9afecea657369627f061" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Congrats! You’ve made it through **Learn ES6 The Dope Way** Part II and now you have a basis for arrow function knowledge, the lexical benefits it gives to ‘_this_’ and also snagged yourself some JavaScript quirk skills! :)

Keep your wisdom updated by liking and following as more **Learn ES6 The Dope Way** is coming soon to Medium!

[**Part I: const, let & var**](https://medium.freecodecamp.com/learn-es6-the-dope-way-i-const-let-var-ae828580472b#.lvovn8y96)

[**Part II: (Arrow) => functions and ‘this’ keyword;**](https://medium.com/@__Masha__/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881#.59q9th108)

[**Part III: Template Literals, Spread Operators & Generators!**](https://medium.com/@__Masha__/learn-es6-the-dope-way-part-iii-template-literals-spread-operators-generators-592765337294#.akxbad3wl)

[**Part IV: Default Parameters, Destructuring Assignment, and a new ES6 method!**](https://medium.com/@__Masha__/learn-es6-the-dope-way-part-iv-default-parameters-destructuring-assignment-a-new-es6-method-44393190b8c9#.c0xb0vmqz)

[**Part V: Classes, Transpiling ES6 Code & More Resources!**](https://medium.com/@__Masha__/learn-es6-the-dope-way-part-v-classes-browser-compatibility-transpiling-es6-code-47f62267661#.5xsfm9s8s)

You can also find me on github ❤ [https://github.com/Mashadim](https://github.com/Mashadim)








