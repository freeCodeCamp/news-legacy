---
author: Anthony Ng
authorTwitter: none
authorFacebook: none
title: "Deliberate Practice: What I learned from reading the classNames codebase"
subTitle: "This is part of my plan for deliberate practice to improve as a developer. Take a look at this article to learn more...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*t7iCRsAhtZQAYg3mSQ1jlA.jpeg
url: https://medium.freecodecamp.org/deliberate-practice-what-i-learned-from-reading-classnames-f9b89cb785e4
id: deliberate-practice-what-i-learned-from-reading-classnames-f9b89cb785e4
date: 2017-04-25T00:44:36.032Z
tags: [
  "JavaScript",
  "Github",
  "Open Source",
  "Programming",
  "Web Development"
]
---
# Deliberate Practice: What I learned from reading the classNames codebase



![](https://cdn-images-1.medium.com/max/1600/1*t7iCRsAhtZQAYg3mSQ1jlA.jpeg)

Becoming an Open Sourcerer



This is part of my plan for deliberate practice to improve as a developer. Take a look at [this article](https://medium.com/@newyork.anthonyng/deliberate-practice-becoming-an-open-sourcerer-27a4f7640940) to learn more.

In this article, we’ll look at a library called `classNames` (here’s the [GitHub repository](https://github.com/JedWatson/classnames)). `classNames` provides a simple API to construct class names in React. We’ll take a look at what it does, and what I learned by going through their repo.

### How to use?

The `classNames` API is very simple. They have great examples in their [README.md](https://github.com/JedWatson/classnames/blob/master/README.md).

You can pass string arguments like so:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/79d31a6e0589ac899abf6e29e02a459a?postId=f9b89cb785e4" data-media-id="79d31a6e0589ac899abf6e29e02a459a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F14035529%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





`classNames` also accept objects as arguments. If the value of the key is falsy (false, null, undefined, 0, NaN, empty string), `classNames` omits the value.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/0489ca76baf7c2294f854e0e14c22f4a?postId=f9b89cb785e4" data-media-id="0489ca76baf7c2294f854e0e14c22f4a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F14035529%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





`classNames` also accepts arrays as arguments. Array arguments are recursively flattened and processed using the above rules. You can mix and match different types of arguments (strings, arrays, objects).





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/cc2e47eff4c3f6c3e933691f7ba7782e?postId=f9b89cb785e4" data-media-id="cc2e47eff4c3f6c3e933691f7ba7782e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F14035529%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





### Usage with React

This package’s primary use case is to make React’s class name simpler to work with.

Without `classNames`, you might have used string manipulation to create React’s class names.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/3047db133a91edba9abe142962e85b8e?postId=f9b89cb785e4" data-media-id="3047db133a91edba9abe142962e85b8e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F14035529%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Now with the `classNames` package, it would look like this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2ac7e1cbf33330cc5d22a495d15def2d?postId=f9b89cb785e4" data-media-id="2ac7e1cbf33330cc5d22a495d15def2d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F14035529%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





### Common mistakes: “undefined” classnames

The most common mistake I see at work using `classNames` are `undefined` class names.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a7231274fc0fb2739f2dedb610a50bf1?postId=f9b89cb785e4" data-media-id="a7231274fc0fb2739f2dedb610a50bf1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F14035529%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Remember that falsy values are ignored inside the `classNames` package.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/4af353f8cf9f65b183111074d7cccaf9?postId=f9b89cb785e4" data-media-id="4af353f8cf9f65b183111074d7cccaf9" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F14035529%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Knowing this, we can update our `classNames` example to:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/aae27e7fb7fbe03cf5e06819e7404f38?postId=f9b89cb785e4" data-media-id="aae27e7fb7fbe03cf5e06819e7404f38" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F14035529%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





### Different versions that you can opt into: Dedupe

There’s 2 issues that you might run into. Do you see them?





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ecf6edca99fa4a04d8fcd7c73c2d239b?postId=f9b89cb785e4" data-media-id="ecf6edca99fa4a04d8fcd7c73c2d239b" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F14035529%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Luckily, `classNames` provides an opt-in version of its library for us to use, called `dedupe`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/857bb2b25f020908057f3d5a9e8f290c?postId=f9b89cb785e4" data-media-id="857bb2b25f020908057f3d5a9e8f290c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F14035529%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





That’s more like it. Note that `dedupe` is around 5x slower than the default `classNames` package. Use this only if needed.

### Different versions that you can opt into: Bind

`bind` is another opt-in version of `classNames`. It’s meant to help us when we’re using CSS modules with React. But I find that the default `classNames` package does well with CSS modules.

Take a look at the [README.md](https://github.com/JedWatson/classnames#alternate-bind-version-for-css-modules) for more information.

### Object.create(null)





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a62983cb41727cbc2f8a65c029c8ad66?postId=f9b89cb785e4" data-media-id="a62983cb41727cbc2f8a65c029c8ad66" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F14035529%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





It’s a best practice to use `hasOwnProperty` when iterating over an Object’s keys. You can check if the key belongs to the object, or is inherited.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/469158fff9a4c1b784b369c5fec2e2cc?postId=f9b89cb785e4" data-media-id="469158fff9a4c1b784b369c5fec2e2cc" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F14035529%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





We would use `hasOwnProperty` to get properties that belong to our created object.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9e0b7df283edfeeca47a2c3a0551fa09?postId=f9b89cb785e4" data-media-id="9e0b7df283edfeeca47a2c3a0551fa09" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F14035529%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Instead of using `hasOwnProperty`, we can create a new Object that inherits nothing!





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/0ef5804e8e46d26e77fb650694921c4c?postId=f9b89cb785e4" data-media-id="0ef5804e8e46d26e77fb650694921c4c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F14035529%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





But this also means methods that Objects inherit, such as [toString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) will not exist on this new object.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/1dbbba8c0c095aed90143c7c6bd756d0?postId=f9b89cb785e4" data-media-id="1dbbba8c0c095aed90143c7c6bd756d0" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F14035529%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





### Awesome documentation and great tests

Take a look through the source code of `classNames`. It’s littered with amazing comments and documentation.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/fb916faa5348105d6a2922c01458b074?postId=f9b89cb785e4" data-media-id="fb916faa5348105d6a2922c01458b074" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F14035529%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



Look at the great external link



Awesome documentation isn’t something that’s exclusive to open source projects.

Did you find a great code snippet that you used on your personal project?  
Have you spent hours searching for the perfect StackOverflow answer? Include these links as comments in your code! It will save other developers (and the future you) time when figuring out what’s going on.

`classNames` has amazing documentation on their README.md. It has rich examples that show everything this package can do.

Documentation and comments are great. Yet, they can rot and become out of sync with what the code actually does. But tests don’t lie! Well-written tests will tell you everything that the package should be able to do and not do. If you’re new to a library, check out their tests to get a better understanding of the library.

### apply/call

Knowing how to use JavaScript’s `apply` and `call` are great interview questions. But I rarely get to use them in the real world. Seeing it inside of the `classNames` package was a nice refresher of what it does.

`apply` and `call` basically do the same thing. It sets the `this` of the calling function.

For example,





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/51e09c35d7f79c3d0b5c2e0b6b9e5a50?postId=f9b89cb785e4" data-media-id="51e09c35d7f79c3d0b5c2e0b6b9e5a50" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F14035529%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





The difference comes when you want to pass in arguments into the calling function. Let’s take a look at a function that takes in arguments.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a40a93d91a8058c7f33c70e5eead3148?postId=f9b89cb785e4" data-media-id="a40a93d91a8058c7f33c70e5eead3148" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F14035529%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Notice the small difference here. `apply` takes its arguments in an array (I remember it by remembering that `apply` and `array` both start with `a`). `call` takes its arguments provided individually, like a normal function would.

`classNames` uses `apply` to handle array arguments passed into it.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/85c91629f638036c991ddffb2cb88b22?postId=f9b89cb785e4" data-media-id="85c91629f638036c991ddffb2cb88b22" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F14035529%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



[https://github.com/JedWatson/classnames/blob/master/index.js#L25](https://github.com/JedWatson/classnames/blob/master/index.js#L25)



### Don’t trust anything

Take a look at the code snippet below.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/14f9cc6a6c7915a9aecef6ab72a20110?postId=f9b89cb785e4" data-media-id="14f9cc6a6c7915a9aecef6ab72a20110" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F14035529%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Why would we save the `hasOwnProperty` function to a variable? This is because we have to be defensive about the arguments given. We grab the `hasOwnProperty` from the `Object.prototype`. Let’s take a look at why.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/1449bdb2b7d820433273144d8d494d58?postId=f9b89cb785e4" data-media-id="1449bdb2b7d820433273144d8d494d58" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F14035529%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





That makes sense. But what if someone passed us an object like this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ae073bfa99ed91b4506e446033e3d8a9?postId=f9b89cb785e4" data-media-id="ae073bfa99ed91b4506e446033e3d8a9" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F14035529%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Using the `hasOwnProperty` function from the `Object.prototype` is a safer alternative.

But note that even this isn’t foolproof. The below is still possible.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2a089dc35f29306be10c1f52928999bb?postId=f9b89cb785e4" data-media-id="2a089dc35f29306be10c1f52928999bb" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F14035529%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





### HTML entities

I always forget about HTML entities. I always look for a fancy image, but using HTML entities are well supported and can save you an HTTP request for an image.

Before you start scouring Google Images for assets, take a look at this [chart](https://dev.w3.org/html5/html-author/charref) to see if it has what you need.

### Benchmark Performance

You don’t need to argue with your coworker any more about `for-loops` vs `for-each loops`! You can settle all disputes by seeing how it performs using benchmarking tools (such as [jsPerf](https://jsperf.com/)).

`classNames` is downloaded and used by many, and performance is of greatest concern. Performance differences are looked at before any pull requests are accepted.

Your personal projects might not be concerned with performance. But it is good to keep performance in mind. Take a couple of minutes to play around with [jsPerf](https://jsperf.com/) and set up your own tests.

### travis.yml



![](https://cdn-images-1.medium.com/max/1600/1*KbOOiRXqPSkUclWEKefK3g.png)

Fancy badges from `classNames README.md`



Interested in getting adding fancy badges to your README.md? Check out this great [egghead tutorial](https://egghead.io/lessons/javascript-how-to-write-a-javascript-library-introduction) by Kent C. Dodds on starting your own Open Source project. It covers often-ignored topics, such as setting up Continuous Integration, using Semantic Release, publishing to npm, and more.

### git blame, follow, history

Have you ever run into a certain line of code and was curious about how it came to be? Use the `git blame` feature from the Github website. It will tell you when it was written, who wrote it, and what commit it was from.



![](https://cdn-images-1.medium.com/max/1600/1*sBl_QkREQClHV_yotMqELQ.png)

git blame



You can also view the history of a file and see how it evolved by using `git history`, located right next to `git blame`. Viewing all the commits shows you how a certain file evolved over time.

I recommend that you find an Open Source project that you like and use, and start contributing back to it. You can `watch` a repository and get notifications whenever there are any updates. You might not be ready to push code changes. But updating documentation or helping with other people’s issues are valuable as well.



![](https://cdn-images-1.medium.com/max/1600/1*WpYuscwto8LVB7O_U1lU7A.png)

watch



Thank you for reading this, and I hope you learned something new.








