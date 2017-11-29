---
author: Tiago Lopes Ferreira
authorTwitter: https://twitter.com/ferreiratiago_
authorFacebook: none
title: "Let’s explore ES6 Generators"
subTitle: "Generators are an implementation of iterables...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*clLJU6akoeiZuw0Vw9DC8w.png
url: https://medium.freecodecamp.org/lets-explore-es6-generators-5e58ed23b0f1
id: lets-explore-es6-generators-5e58ed23b0f1
date: 2017-06-21T17:22:27.101Z
tags: [
  "JavaScript",
  "ES6",
  "Programming",
  "Web Development",
  "Software Development"
]
---
# Let’s explore ES6 Generators







![](https://cdn-images-1.medium.com/max/2000/1*clLJU6akoeiZuw0Vw9DC8w.png)







Generators are [an implementation of iterables](https://medium.freecodecamp.com/demystifying-es6-iterables-iterators-4bdd0b084082).

The big deal about generators is that **they are functions that can suspend its execution while maintaining the context**.

This behaviour is crucial when dealing with executions that need to be paused, but its context maintained in order to recover it in the future.

**Does async development sounds familiar here?**

### Syntax

The syntax for generators starts with it’s `function*` declaration (please note the _asterisk_) and the `yield` through which a generator can pause it’s execution.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ae99277530dbd72eea82c15ee46b8dd5?postId=5e58ed23b0f1" data-media-id="ae99277530dbd72eea82c15ee46b8dd5" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Calling our `generator` function creates new generator that we can use to control the process through `next` function.

Running `next` will execute our `generator`’s code until an `yield` expression is reached.

At this point the value on `yield` is emitted and the `generator`’s execution is suspended.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/eaad29611562050d3d3c6c11523d0e76?postId=5e58ed23b0f1" data-media-id="eaad29611562050d3d3c6c11523d0e76" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





#### yield

`yield` was born with generators and allow us to emit values. However, we can only do this while we are inside a generator.

If we try to `yield` a value on a callback, for instance, even if declared inside the generator, we will get an error.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a2f60449f8e049ff77d7e3f04b8e758b?postId=5e58ed23b0f1" data-media-id="a2f60449f8e049ff77d7e3f04b8e758b" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





#### yield*

`yield*` was built to enable calling a generator within another generator.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/7bc8337ae0b2a6eef5f37995622a39d5?postId=5e58ed23b0f1" data-media-id="7bc8337ae0b2a6eef5f37995622a39d5" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Our `b` iterator, produced by `bar` generator, does not work as expected when calling `foo`.

This is because, although the execution of `foo` produces an iterator, we do not iterate over it.

That’s why ES6 brought the operator `yield*`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/e1bc3a10a11f0192f100995493cc5b78?postId=5e58ed23b0f1" data-media-id="e1bc3a10a11f0192f100995493cc5b78" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





This works perfectly with data consumers.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/6fe7af2f1757875376aea1a020c78b09?postId=5e58ed23b0f1" data-media-id="6fe7af2f1757875376aea1a020c78b09" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Internally `yield*` goes over every element on the generator and `yield` it.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d78c6a88f1fa0bed610e03c54d15574d?postId=5e58ed23b0f1" data-media-id="d78c6a88f1fa0bed610e03c54d15574d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





### Generators as Iterators



![](https://cdn-images-1.medium.com/max/1600/1*p65T1aheR-c6JDSWRcUVhA.gif)



**Generators are simple iterables**, which means that they follow the `iterable` and `iterator` protocols:

*   The `iterable` protocol says that an object should return a function iterator whose key is `Symbol.iterator`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/1c52f63eff7fb087f004e3d6a4187e83?postId=5e58ed23b0f1" data-media-id="1c52f63eff7fb087f004e3d6a4187e83" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





*   The `iterator` protocol says that the iterator should be an object pointing to the next element of the iteration. This object should contain a function called `next`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/3589a102c26328bde6b0294bd041fb7d?postId=5e58ed23b0f1" data-media-id="3589a102c26328bde6b0294bd041fb7d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Because generators are iterables then we can use a data consumer, e.g. `for-of`, to iterate over generators’ values.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/188a264d1f55d46df077c744a460f6fe?postId=5e58ed23b0f1" data-media-id="188a264d1f55d46df077c744a460f6fe" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





#### Return

We can add a `return` statement to our generator, however `return` will behave differently according to the way generators’ data is iterated.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/948e2fe930435e080d08fb395ccd8978?postId=5e58ed23b0f1" data-media-id="948e2fe930435e080d08fb395ccd8978" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





When performing the iteration by hand, using `next`, we get our returned value (i.e. `done`) as the last `value` of our iterator object and our `done` flag as true.

On the side, when using a defined data consumer such as `for-of` or `destructuring`, the returned value is ignored.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2de7cb5aed71be1c2f65448e52efbcc3?postId=5e58ed23b0f1" data-media-id="2de7cb5aed71be1c2f65448e52efbcc3" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





#### **yield***

We saw that `yield*` allows us to call a generator inside a generator.

It also allow us to store the value returned by the executed generator.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/0f07dae204fc4aaf1c5407a37ef161e3?postId=5e58ed23b0f1" data-media-id="0f07dae204fc4aaf1c5407a37ef161e3" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





#### Throw

We can `throw` inside a generator and `next` will propagate our exception.

As soon as an exception is thrown the iterator flow breaks and it’s state is set to `done: true` indefinitely.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/092369d6c05269007e3c367b8869247d?postId=5e58ed23b0f1" data-media-id="092369d6c05269007e3c367b8869247d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





### Generators as Data Consumers

Besides generators being data producers, through `yield`, they also have the ability to consume data using `next`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/6e17bfd9de2b0a54a613ca6144be2a8a?postId=5e58ed23b0f1" data-media-id="6e17bfd9de2b0a54a613ca6144be2a8a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





There’s some interesting points to explore here.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/bf01a69441a754506df374810fddc738?postId=5e58ed23b0f1" data-media-id="bf01a69441a754506df374810fddc738" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





#### Generator Creation (1)

At this stage we are creating our generator `g`.

Our execution stops at point `A`.

#### First next (2)

The first execution of `next` gets our generator to be executed until the first `yield` statement.

On this first execution any value sent through `next` is ignored. This is because there’s no `yield` statement until the first `yield` statement 👹

Our execution suspends at `B` waiting for a value to be filled to `yield`.

#### Next next (3)

On the next executions of `next` our generator will run the code until the next `yield`.

In our case, it logs the value that is got through `yield` (i.e. `Got: foo`) and it gets suspended again on `yield`.

### Use Cases



![](https://cdn-images-1.medium.com/max/1600/1*OiK88NOSMsbrlpWdDarvlg.gif)



#### Implement Iterables

Because **generators are an iterable implementation**, when created we get an iterable object, where each `yield` represents the value to emitted on each iteration. This description allow us to use generators to create iterables.

The following example represents a generator as iterable that iterates over even numbers until `max` is reached. Because our generator returns an iterable we can use `for-of` to iterate over the values.

It’s useful to remember that `yield` pauses the generator’s execution, and on each iteration the generator resumes from where it was paused.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/184b2592bac41a02c1f8ceae245f78b3?postId=5e58ed23b0f1" data-media-id="184b2592bac41a02c1f8ceae245f78b3" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





#### Asynchronous Code

We can use generators to better work with async code, such as `promises`.

This use case it a good introduction to the new `async/await` on ES8.

Next is an example of fetching a JSON file with `promises` as we know it. We will use [Jake Archibald](https://twitter.com/jaffathecake) example on [developers.google.com](https://developers.google.com/web/fundamentals/getting-started/primers/promises).





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/473b0191b7409e33976b601165894578?postId=5e58ed23b0f1" data-media-id="473b0191b7409e33976b601165894578" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Using [co library](https://github.com/tj/co) and a generator our code will look more like synchronous code.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/192a910da7d165cf0be05303426bf929?postId=5e58ed23b0f1" data-media-id="192a910da7d165cf0be05303426bf929" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





As for the new `async/await` our code will look a lot like our previous version.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/e57a325b974aec852c1ba62b0b459079?postId=5e58ed23b0f1" data-media-id="e57a325b974aec852c1ba62b0b459079" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3806676%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





### Conclusion

This is schema, made by [Axel Rauschmayer](https://twitter.com/rauschma) on [Exploring ES6](http://exploringjs.com/es6/index.html) show us how generators relate with iterators.



![](https://cdn-images-1.medium.com/max/1600/1*XBMTOSxCUQ6MloksmDYdJw.png)



Generators are an implementation of iterables and follow the `iterable` and `iterator` protocol. Therefore they can be used to build iterables.

The most amazing thing about generators is their ability to suspend their execution. For this ES6 brings a new statement called `yield`.

However, calling a generator inside a generator is not as easy as executing the generator function. For that, ES6 has `yield*`.

> **Generators are the next step to bring asynchronous development close to synchronous.**

### Thanks to 🍻

*   [Axel Rauschmayer](https://twitter.com/rauschma) for his [Exploring ES6 — Generators](http://exploringjs.com/es6/ch_generators.html)
*   [Nicolás Bevacqua](https://twitter.com/nzgb) for his [PonyFoo — ES6 Generators in Depth](https://ponyfoo.com/articles/es6-generators-in-depth)
*   [Jake Archibald](https://twitter.com/jaffathecake) for his promises example on [developers.google.com](https://developers.google.com/web/fundamentals/getting-started/primers/promises)
*   To all [Regular Show](https://www.youtube.com/watch?v=n_OC-RAm7Qs) fans











* * *







_Be sure to check out my other articles on ES6_

[**Demystifying ES6 Iterables & Iterators**  
_Let’s demystify JavaScript new way to interact with data structures._medium.freecodecamp.com](https://medium.freecodecamp.com/demystifying-es6-iterables-iterators-4bdd0b084082 "https://medium.freecodecamp.com/demystifying-es6-iterables-iterators-4bdd0b084082")[](https://medium.freecodecamp.com/demystifying-es6-iterables-iterators-4bdd0b084082)








