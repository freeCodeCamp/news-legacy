---
author: Tiago Lopes Ferreira
authorTwitter: https://twitter.com/ferreiratiago_
authorFacebook: none
title: "Demystifying ES6 Iterables &amp; Iterators"
subTitle: "ES6 introduces a new way to interact with JavaScript data structures — iteration. Let’s demystify it...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*HV1DyPBjIp_aJVqIVFi_bw.png
url: https://medium.freecodecamp.org/demystifying-es6-iterables-iterators-4bdd0b084082
id: demystifying-es6-iterables-iterators-4bdd0b084082
date: 2017-06-21T17:20:07.071Z
tags: [
  "JavaScript",
  "ES6",
  "Web Development",
  "Programming",
  "Software Development"
]
---
# Demystifying ES6 Iterables & Iterators







![](https://cdn-images-1.medium.com/max/2000/1*HV1DyPBjIp_aJVqIVFi_bw.png)







ES6 introduces a new way to interact with JavaScript data structures — **iteration**. Let’s demystify it.

There are 2 core concepts:

*   **Iterable** — described by a data structure that provides a way to expose its data to the public. This is done by implementing a method whose key is `Symbol.iterator`. `Symbol.iterator` is a factory of iterators.
*   **Iterator** — described by a structure that contains a pointer to the next element in the iteration.

### Protocol

Both iterable and iterator follow a protocol that enables objects to be iterable:

*   An **interable** must be an object with a function iterator whose key is `Symbol.iterator`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a9074eb0d9c13cac68798749e9139652?postId=4bdd0b084082" data-media-id="a9074eb0d9c13cac68798749e9139652" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





*   An **iterator** must be an object with a function named `next` that returns an object with the keys: `value` — the current item in the iteration; and `done`— _true_ if the iteration has finished, _false_ otherwise.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/46f6ebafb8b9becde536771dcbb4f329?postId=4bdd0b084082" data-media-id="46f6ebafb8b9becde536771dcbb4f329" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





#### Iterability

Iterability follows the idea of _data sources_ and _data consumers_:

*   **data sources**— are the place from where data consumers get their data. For instance, an `Array` such as `[1,2,3]` is a data source structure that holds the data through which a data consumer will iterate (e.g. `1, 2, and 3`). More examples are `String`, `Maps` and `Sets`.
*   **data consumers **— are the what consume the data from data sources. For instance, the `for-of` loop is a data consumer able to iterate over an `Array` data source. More examples are the `spread operator` and `Array.from`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/90f1f363ad92e85a97f32f5e0b1c5103?postId=4bdd0b084082" data-media-id="90f1f363ad92e85a97f32f5e0b1c5103" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





For a structure to be a _data source_, it needs to allow and say how its data should be consumed. This is done through **iterators**. Therefore, a _data source_ needs to follow the iterator protocol described above.

However, it’s not practical for every _data consumer_ to support all _data sources_, especially since JavaScript allows us to build our own data sources. So ES6 introduces the interface **Iterable**.

_Data consumers_ consume the data from _data sources_ through **iterables**.

#### In Practice

Let’s see how this works on a defined data source — `Array`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c25a316d21c00b84668d24c9e53ad8b9?postId=4bdd0b084082" data-media-id="c25a316d21c00b84668d24c9e53ad8b9" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





### Iterable Data Sources



![](https://cdn-images-1.medium.com/max/1600/1*tqsRBISIOIoXcCAYp7V1Lw.gif)



We will use `for-of` to explore some of the data sources that implement the **iterable protocol**.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/5ab11348975208bab8c30512f586e209?postId=4bdd0b084082" data-media-id="5ab11348975208bab8c30512f586e209" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





#### Plain Objects

At this stage we need to say that plain objects are not iterable. [Axel Rauschmayer](http://%28https://twitter.com/rauschma) does a great job explaining why on [Exploring ES6](http://exploringjs.com/es6/).

A brief explanation is that we can iterate over a JavaScript objects at two different levels:

*   **program level** — which means iterating over an object properties that represent it’s structure. For instance, `Array.prototype.length`, where `length` is related with the object’s structure and not it’s data.
*   **data level** — meaning iterating over a data structure and extracting its data. For instance, for our `Array` example, that would mean iterating over the array’s data. If `array = [1,2,3,4]`, iterate over the values `1, 2, 3 and 4`.

> **However, bringing the concept of iteration into plain objects means mixing-up program and data structures **— [Axel](http://%28https://twitter.com/rauschma)

The problem with plain objects is everyones’ ability to create their own objects.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2702c4c3cf7ce65def4386d6824825d4?postId=4bdd0b084082" data-media-id="2702c4c3cf7ce65def4386d6824825d4" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





_In our Hugo’s example how would JavaScript distinguish between the data level, i.e._ `_Hugo.fullName_`_, and the program level, i.e._ `_Hugo.toString()_`_?_

While it is possible to distinguish between the two levels of iteration on well-defined structures, such as `Arrays`, it is impossible to do so for any object.

This is why we get iteration for free on `Array` (also on `String`, `Map`, and `Set`) but not on plain objects.

> **We can, however, implement our own iterables.**

### Implement Iterables



![](https://cdn-images-1.medium.com/max/1600/1*PZBEg-i1BCHKA-sPsVoMJg.gif)



We can build our own iterables, although we usually use generators for that.

In order to build our own iterable we need to follow the iteration protocol, which says:

*   An object becomes an **iterable** if it implements a function whose key is `Symbol.iterator` and returns an `iterator`.
*   The `iterator` itself is an object with a function called `next` inside it. `next` should return an object with two keys `value` and `done`. `value` contains the next element of the iteration and `done` a flag saying if the iteration has finished.

#### Example





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/1b1a97fca055da5696fd3098707645aa?postId=4bdd0b084082" data-media-id="1b1a97fca055da5696fd3098707645aa" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Our iterable implementation is very simple. We have followed the **iterable protocol** and on each iteration the `for-of` loop will ask the iterator for the `next` element.

Our iterator will return on `next` an object containing the following by iteration:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/fad87814743a4848fe8b3df882298700?postId=4bdd0b084082" data-media-id="fad87814743a4848fe8b3df882298700" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Please note that we switch the order of the our properties `next` and `done` for convenience. Having `next` first, it would break the implementation since we will first pop an element and then count the elements.

It is useful to know that `done` is `false` by default, which means that we can ignore it when that’s the case. The same is true for `value` when `done` is `true`.

We will see that in a minute.

#### Iterator as an Iterable

We could build our iterator as an iterable.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/79cb14ff44dfadb625270e59ab9b7ce5?postId=4bdd0b084082" data-media-id="79cb14ff44dfadb625270e59ab9b7ce5" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Please note that this is the pattern followed by ES6 built-in iterators.

**Why is this a useful?**

Although `for-of` only works with iterables, not with iterators, being the same means that we can pause the execution of `for-of` and continue afterwords.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c6e833ce60f38b05c90d7e814caaa758?postId=4bdd0b084082" data-media-id="c6e833ce60f38b05c90d7e814caaa758" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





#### Return and Throw

There are two optional iterator methods that we haven’t explore yet:

**Return**

`return` gives the iterator the opportunity to **clean up** the house when it breaks unexpectedly. When we call `return` on an iterator we are specifying that we don’t plan to call `next` anymore.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/82805889b991b3df396587d3249e0474?postId=4bdd0b084082" data-media-id="82805889b991b3df396587d3249e0474" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





**Throw**

`throw` is only applied to generators. We will see that when we play with generators.

### Conclusion

ES6 brings iteration as a new way to iterate over JavaScript data structures.

> For iteration to be possible there are _data producers_, who contain the data, and _data consumers,_ who take that data.

In order for this combination to work smoothly iteration is defined by a protocol, which says:

*   An `iterable` is an object that implements a function whose key is `Symbol.iterator` and returns an `iterator`.
*   An `iterator` is an object with a function called `next` inside it. `next` is an object with two keys `value` and `done`. `value` contains the next element of the iteration and `done` a flag saying if the iteration has finished.

Plain objects are not `iterable` since there’s no easy way to distinguish between program and data level iteration.

That’s why ES6 offers a way to build our own iterators by following the `iterator` protocol.



![](https://cdn-images-1.medium.com/max/1600/1*IwfjCQMFHLP5iswRC7dLyg.gif)



### Thanks to 🍻

*   [Axel Rauschmayer](https://twitter.com/rauschma) for his [Exploring ES6 — Iteration](http://exploringjs.com/es6/ch_iteration.html)
*   [Nicolás Bevacqua](https://twitter.com/nzgb) for his [PonyFoo — ES6 Iterators in Depth](https://ponyfoo.com/articles/es6-iterators-in-depth)
*   To all [The Simpsons](https://www.youtube.com/watch?v=SR8WWFzrZAg) fans











* * *







_Be sure to check out my other articles on ES6_

[**Let’s explore ES6 Generators**  
_Generators are an implementation of iterables._medium.freecodecamp.com](https://medium.freecodecamp.com/lets-explore-es6-generators-5e58ed23b0f1 "https://medium.freecodecamp.com/lets-explore-es6-generators-5e58ed23b0f1")[](https://medium.freecodecamp.com/lets-explore-es6-generators-5e58ed23b0f1)








