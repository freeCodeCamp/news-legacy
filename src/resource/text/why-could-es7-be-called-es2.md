---
author: Tiago Lopes Ferreira
authorTwitter: https://twitter.com/ferreiratiago_
authorFacebook: none
title: "The newest version of JavaScript only has 2 new features. Here’s how they work."
subTitle: "Let’s talk about the latest version of JavaScript: ECMAScript 2016 (more commonly known as ES7). ES7 brings two new features: Array.proto..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*ZxRdFZUQT6YcUVQFhTTNKQ.png
url: https://medium.freecodecamp.org/why-could-es7-be-called-es2-4c5f094ccef7
id: why-could-es7-be-called-es2-4c5f094ccef7
date: 2017-10-13T06:42:34.379Z
tags: [
  "JavaScript",
  "Web Development",
  "Es7",
  "Exponential Operator",
  "Array Prototype Includes"
]
---
# The newest version of JavaScript only has 2 new features. Here’s how they work.







![](https://cdn-images-1.medium.com/max/2000/1*ZxRdFZUQT6YcUVQFhTTNKQ.png)







Let’s talk about the latest version of JavaScript: ECMAScript 2016 (more commonly known as ES7). ES7 brings two new features: `Array.prototype.includes()` and the new exponential operator: `**`.

### Array.prototype.includes()

Gone are the days where we used `.indexOf()` to know if an element **existed** in an array.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/80f749bede88fb14fc58ad28e57d0691?postId=4c5f094ccef7" data-media-id="80f749bede88fb14fc58ad28e57d0691" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





The key word is **_“exist.”_**

`.indexOf()` is fine if we want to know at which index a given element appears.

But if our goal is to know if a given element **exists** in an array, then `.indexOf()` is not the best option. And the reason is simple: When querying the existence of something we expect a boolean value, **not a number**.

`Array.prototype.includes()` does exactly that. It determines if a given element exists in an array, returning `true` if it does, `false` otherwise.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ce14c573b80a2f2a50f7e882a4113302?postId=4c5f094ccef7" data-media-id="ce14c573b80a2f2a50f7e882a4113302" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





### Into The Specification

<pre name="ccaa" id="ccaa" class="graf graf--pre graf-after--h3">Array.prototype.includes ( _searchElement_ [ , _fromIndex_ ] )</pre>

*   `searchElement` — the element to search for.
*   `fromIndex` _(optional)_ — the index from which to start to search.

Diving into the [specification](https://www.ecma-international.org/ecma-262/7.0/) feels like searching for power.



![](https://cdn-images-1.medium.com/max/1600/1*4KuLQRBf9qZkEGUsFKZnJg.png)



The specification says:

Let’s go step-by-step and try to understand the specification with examples.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d716d2b25a1f1f85424128f091e649c6?postId=4c5f094ccef7" data-media-id="d716d2b25a1f1f85424128f091e649c6" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





1.  The difference here is the position of the element 4\. Because our first example places 4 in the last position, includes will search the whole array. By specification `.includes()` returns immediately after finding the `searchElement`. This makes our second operation much faster.
2.  The big difference with the [SameValueZero](https://www.ecma-international.org/ecma-262/7.0/#sec-samevaluezero) algorithm versus the [Strict Equality Comparison](https://www.ecma-international.org/ecma-262/7.0/#sec-strict-equality-comparison) (used by `.indexOf()`) is that it allows detecting the **NaN** elements.
3.  It returns the boolean `true` when the element is found and `false` otherwise. No more indexes as result 👏
4.  As opposite to `.indexOf()`, `.includes()` does not skip missing array elements. Instead, it treats them as **undefined** values.

Are you starting to feel the power?

We haven’t even touched `fromIndex`.

Let’s check the specification:

> The optional second argument `fromIndex` defaults to `0` (i.e. the whole array is searched). If it is greater than or equal to the length of the array, **false** is returned, i.e. the array will not be searched. If it is negative, it is used as the **offset** from the end of the array to compute `fromIndex`. If the computed index is less than `0`, the whole array will be searched.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/f4c2f2783914e75ae5520b55e7fa8801?postId=4c5f094ccef7" data-media-id="f4c2f2783914e75ae5520b55e7fa8801" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





1.  If no `fromIndex` is provided them the default value of `0` is taken and the **whole** array is searched.
2.  `.includes()` immediately returns **false** when the value of `fromIndex` is bigger than array’s length.
3.  When `fromIndex` is negative, then it’s value is calculated as `array.length — fromIndex`. This is particularly useful when searching on the last elements. For example, `fromIndex = -5` is the same as searching on the last 5 elements.
4.  To avoid `.includes()` from breaking when the `fromIndex` calculated value is lower than 0, the whole array is searched. I would rather break 💥

OK — one last new feature…

### `The Exponential Operator (**)`

We’ve been waiting for the day we can play with exponentialnumbers like we play with addition, subtraction, multiplication, division.

Well, that day is here.

The operator `**` behaves exactly the same way as `Math.pow()`. It returns the result of raising the first operand to the power of the second (e.g. `x ** y`).





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d7e71c665a570eec90f7cf3f17b62a41?postId=4c5f094ccef7" data-media-id="d7e71c665a570eec90f7cf3f17b62a41" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





That’s it!

You now have the power of **ES7**! Use it well!



![](https://cdn-images-1.medium.com/max/1600/1*owhYyEq_wSRyPN_OuyQXPQ.gif)



### Thanks to 🍻

*   [2ality.com](http://2ality.com/2016/01/ecmascript-2016.html) by [Axel Rauschmayer](https://twitter.com/rauschma)
*   [ECMAScript® 2016 Language Specification](https://www.ecma-international.org/ecma-262/7.0/)
*   To all [He-Man](https://www.youtube.com/watch?v=7yeA7a0uS3A) fans
*   [freeCodeCamp](https://medium.freecodecamp.org/) for publishing ❤️











* * *







Be sure to check out my articles on ES6:

[**Let’s explore ES6 Generators**  
_Generators, aka, an implementation of iterables._medium.freecodecamp.org](https://medium.freecodecamp.org/lets-explore-es6-generators-5e58ed23b0f1 "https://medium.freecodecamp.org/lets-explore-es6-generators-5e58ed23b0f1")[](https://medium.freecodecamp.org/lets-explore-es6-generators-5e58ed23b0f1)

[**Oh Yes! Async / Await**  
_async / await is the new JavaScript syntax to declare an asynchronous function._medium.freecodecamp.org](https://medium.freecodecamp.org/oh-yes-async-await-f54e5a079fc1 "https://medium.freecodecamp.org/oh-yes-async-await-f54e5a079fc1")[](https://medium.freecodecamp.org/oh-yes-async-await-f54e5a079fc1)








