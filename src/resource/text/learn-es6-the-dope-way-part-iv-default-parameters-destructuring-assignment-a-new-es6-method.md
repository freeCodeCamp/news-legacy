---
author: Mariya Diminsky
authorTwitter: none
authorFacebook: none
title: "Learn ES6 The Dope Way Part IV: Default Parameters, Destructuring Assignment, and a new method!"
subTitle: "Welcome to Part IV of Learn ES6 The Dope Way, a series created to help you easily understand ES6 (ECMAScript 6)!..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*RuxaPPPrL6K09eF4pFhISw.jpeg
url: https://medium.freecodecamp.org/learn-es6-the-dope-way-part-iv-default-parameters-destructuring-assignment-a-new-es6-method-44393190b8c9
id: learn-es6-the-dope-way-part-iv-default-parameters-destructuring-assignment-a-new-es6-method-44393190b8c9
date: 2016-06-17T22:09:51.049Z
tags: [
  "JavaScript",
  "ES6",
  "Web Development",
  "Tutorial",
  "Education"
]
---
# Learn ES6 The Dope Way Part IV: Default Parameters, Destructuring Assignment, and a new method!







![](https://cdn-images-1.medium.com/max/2000/1*RuxaPPPrL6K09eF4pFhISw.jpeg)







Welcome to Part IV of **Learn ES6 The Dope Way**, a series created to help you easily understand ES6 (ECMAScript 6)!

Today let’s explore two new ES6 concepts and introduce a new method!

*   Default Function Parameters
*   Destructuring Assignment
*   A New ES6 Method ❤

#### Default Function Parameters

Benefits:

*   Useful for situations when you need default values in a function.
*   When _undefined_ is passed in, it will still use the default value instead!

Beware:

*   If you set a function as a default value inside of another function, it will throw a ReferenceError
*   The location of your input values, when you call a function, will affect whether you reach the parameter with the default value. For example, if you had two parameters and wanted to reach the second parameter, you would only enter one item in the function you are calling. Since the second parameter would be missing the default value would appear there. See examples below for further explanation.

If you’ve ever wanted to create a function that would have default values as a backup…CONGRATULATIONS! This glorious day has finally arrived!



![](https://cdn-images-1.medium.com/max/1600/1*2x7LH45kcUG3gvkkeKmuQQ.gif)



Default function parameters allow you to initialize default values if either no values are passed, or if _undefined_ is passed. Before, if you had something like this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/030bdac547378ed26f8cd3095d1f3cd3?postId=44393190b8c9" data-media-id="030bdac547378ed26f8cd3095d1f3cd3" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





You would get _NaN_, not a number. But now you can do this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/58bbe70c1128086bba51de79ac078425?postId=44393190b8c9" data-media-id="58bbe70c1128086bba51de79ac078425" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





You get 12! This means if you don’t specifically add values to this function when you call it, it will use the default values. So you can also do this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/066afa09e60886de93401192040359f8?postId=44393190b8c9" data-media-id="066afa09e60886de93401192040359f8" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





The overwriting of default values will occur based on the position in which you enter your input values when you call the function. For example:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b14ac3a026714404afde35b908aa27b0?postId=44393190b8c9" data-media-id="b14ac3a026714404afde35b908aa27b0" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





When passing undefined values, the default value is still chosen:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/cbe3af7184a572790511c597d31be015?postId=44393190b8c9" data-media-id="cbe3af7184a572790511c597d31be015" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





If no default value is assigned for a parameter, it will just return undefined, as normal:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/512331c74ff587da07b9b7e7ed821c14?postId=44393190b8c9" data-media-id="512331c74ff587da07b9b7e7ed821c14" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





#### Destructuring Assignment

Benefits:

*   Extracts data from arrays and objects and assigns them to variables
*   Simplifies the amount of keystrokes needed, and improves readability
*   Super useful when needing to pass in large amount of data with the same properties (such as user profiles)

Beware:

*   Can be a bit complicated to understand in the beginning, but once you understand its benefits, just review the examples provided and research further. You’ll get the hang of it! :)

Let’s take a step back and learn about Destructuring Assignment, and how it’s used in relation to Arrays, Objects, and even in combination with Default Parameters!

First, let’s practice with arrays by creating an array of Bunny’s favorite food. We _could_ access the first and fifth item in the array the traditional way:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/dc4ac6fc9f036dcf5db45f7b64756014?postId=44393190b8c9" data-media-id="dc4ac6fc9f036dcf5db45f7b64756014" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Or we could use Destructuring Assignment! We do this by removing the variable name and passing in a bracket that will point to what items we want in the array when we call it:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/16e17ec016f332c2ffa14cc3f1bfc816?postId=44393190b8c9" data-media-id="16e17ec016f332c2ffa14cc3f1bfc816" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Whoa whoa whoa! What just happened? Where is our Papaya?

AHA! Got you there!



![](https://cdn-images-1.medium.com/max/1600/1*PaoUSb6KsrP3W34HWhOHqA.gif)



Check this out — _firstItem_ and _fifthItem_ are just words. The real trick here is where they are placed. The location of the word you place in the brackets will correspond to the location of the item you want in the array.

This is why the first word in the brackets — _firstItem — _corresponds to the first item in the array ‘_Carrots_’’ and the second word—_fifthItem —_ corresponds to the second item in the array, ‘_Carrot Bits_’.

Here’s how to get access to a different location with the same word:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2304366c0beb3ada4f3d81debd9e8c31?postId=44393190b8c9" data-media-id="2304366c0beb3ada4f3d81debd9e8c31" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Play around with this code in your console so you can better understand this new concept, and tell us all in the comments section what you find. :)

Ok, we’ve got arrays down, so now how about Destructuring Assignment with objects? Let’s first check out the typical way we access items in an object:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/056a0f1234b3182e77eb10466af0cfaa?postId=44393190b8c9" data-media-id="056a0f1234b3182e77eb10466af0cfaa" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Now let’s destructure this object using a similar approach to what we used with arrays . Take away the variable name and in it’s place, put curly braces — as this is an object — just like we did brackets for arrays.

Inside the curly braces, pass in the object properties that we’ll want access to:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/289001daa8aafe3fb517339463c492ac?postId=44393190b8c9" data-media-id="289001daa8aafe3fb517339463c492ac" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Here’s a slightly more complicated but useful way of using Destructuring:

Let’s say you have a function that you want to gain access to all the objects with the same properties but different values. This can be especially useful for large data sets, such as user profiles. But in this example we will use Bunny’s favorite things to make the concept clear:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/bb5303f167b88c822d2d575c00bb26e2?postId=44393190b8c9" data-media-id="bb5303f167b88c822d2d575c00bb26e2" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





So what just happened?

When we passed in our objects(iceCream, sushi, fruit), the favThings function parsed it and allowed us to access these properties because we used same property names in each object.

#### Combining Destructuring Assignment with Default Parameters

Study the example below:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/7fe59bab7c1361ae9588d1cb8b28f2bb?postId=44393190b8c9" data-media-id="7fe59bab7c1361ae9588d1cb8b28f2bb" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Or if you had an object and array ready for Destructuring:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d15f21fc06e18115367925b74816442c?postId=44393190b8c9" data-media-id="d15f21fc06e18115367925b74816442c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





#### A New ES6 Method ❤

Benefits:

*   Repeat strings without using your own algorithm

Beware:

*   Negative numbers and infinity will cause a _RangeError_
*   Decimal Numbers will be rounded down to an integer

Ever seen that algorithm, the one that you usually get when you first start learning algorithms and it asks you to repeat a word/string several times?

CONGRATULATIONS!

Your string-repeating-algorithm days are over!



![](https://cdn-images-1.medium.com/max/1600/1*2x7LH45kcUG3gvkkeKmuQQ.gif)



Introducing the new _repeat.()_ method brought to you by ES6!

Here’s how it works:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/3634e7c1305a3b7d03325f4b20cf5f91?postId=44393190b8c9" data-media-id="3634e7c1305a3b7d03325f4b20cf5f91" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13845602%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Though if you’re reading this and you’re learning algorithms or haven’t started learning them yet, I would highly advise to actually create a function for repeating a string and not using this method since that would defeat the purpose of learning and solving challenges. Once you got it down, go ahead and use this method to your heart’s content. YIPEE!

Congrats! You’ve made it through **Learn ES6 The Dope Way** Part IV and now you’ve acquired two super important ES6 concepts: Default Function Parameters and Destructuring Assignment, as well as learned a fun new method for repeating a string! Yay! Go you!

Remember that if you want to use ES6, there are still browser compatibility issues, so use compilers like _Babel_ or a module bundler like _Webpack_ before publishing your code. All of these will be discussed in future editions of **Learn ES6 The Dope Way! Thanks for reading** **❤**

Keep your wisdom updated by liking and following as more **Learn ES6 The Dope Way** is coming soon to Medium!

[**Part I: const, let & var**](https://medium.freecodecamp.com/learn-es6-the-dope-way-i-const-let-var-ae828580472b#.lvovn8y96)

[**Part II: (Arrow) => functions and ‘this’ keyword**](https://medium.com/@__Masha__/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881#.59q9th108)

[**Part III: Template Literals, Spread Operators & Generators!**](https://medium.com/@__Masha__/learn-es6-the-dope-way-part-iii-template-literals-spread-operators-generators-592765337294#.akxbad3wl)

[**Part IV: Default Parameters, Destructuring Assignment, and a new ES6 method!**](https://medium.com/@__Masha__/learn-es6-the-dope-way-part-iv-default-parameters-destructuring-assignment-a-new-es6-method-44393190b8c9#.c0xb0vmqz)

[**Part V: Classes, Transpiling ES6 Code & More Resources!**](https://medium.com/@__Masha__/learn-es6-the-dope-way-part-v-classes-browser-compatibility-transpiling-es6-code-47f62267661#.5xsfm9s8s)

You can also find me on github ❤ [https://github.com/Mashadim](https://github.com/Mashadim)








