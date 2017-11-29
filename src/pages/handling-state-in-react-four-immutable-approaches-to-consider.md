---
author: Cory House
authorTwitter: https://twitter.com/housecor
authorFacebook: none
title: "Handling State in React: Four Immutable Approaches to Consider"
subTitle: "Perhaps the most common point of confusion in React today: state...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*OEjZQSVvWnGgUF-dTrTS_w.jpeg
url: https://medium.freecodecamp.org/handling-state-in-react-four-immutable-approaches-to-consider-d1f5c00249d5
id: handling-state-in-react-four-immutable-approaches-to-consider-d1f5c00249d5
date: 2017-06-13T14:54:29.451Z
tags: [
  "JavaScript",
  "React",
  "React Native",
  "Web Development",
  "Programming"
]
---
# Handling State in React: Four Immutable Approaches to Consider







![](https://cdn-images-1.medium.com/max/2000/1*OEjZQSVvWnGgUF-dTrTS_w.jpeg)

Natural History Museum, London, UK by [**Joshua K. Jackson**](http://unsplash.com/@joshua?utm_campaign=photographer-credit "Download free do whatever you want high-resolution photos from Joshua K. Jackson")







Perhaps the most common point of confusion in React today: state.

Imagine you have a form for editing a user. It’s common to create a single change handler to handle changes to all form fields. It may look something like this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/70b84d49e8d5ad2f862f979d2167d149?postId=d1f5c00249d5" data-media-id="70b84d49e8d5ad2f862f979d2167d149" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F1688997%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



I’m using [ES6 object shorthand](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) on line 5 — you can omit the right-hand side when the left-hand side matches.



The concern is on line 4\. Line 4 actually mutates state because the user variable is a _reference_ to state. React state should be treated as immutable.

From the [React docs](https://facebook.github.io/react/docs/react-component.html#state):

> Never mutate `this.state` directly, as calling `setState()` afterwards may replace the mutation you made. Treat `this.state` as if it were immutable.

Why?

1.  setState batches work behind the scenes. This means a manual state mutation may be overridden when setState is processed.
2.  If you declare a shouldComponentUpdate method, you can’t use a === equality check inside because _the object reference will not change_. So the approach above has a potential performance impact as well.

**Bottom line**: The example above often works okay, but to avoid edge cases, treat state as immutable.

Here are four ways to treat state as immutable:

### Approach #1: Object.assign

[Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) creates a copy of an object. The first parameter is the target, then you specify one or more parameters for properties you’d like to tack on. So fixing the example above involves a simple change to line 3:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/f5ddaa68eb17e0e8db81269f436494e7?postId=d1f5c00249d5" data-media-id="f5ddaa68eb17e0e8db81269f436494e7" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F1688997%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





On line 3, I’m saying “Create a new empty object and add all the properties on this.state.user to it.” This creates a separate copy of the user object that’s stored in state. Now I’m safe to mutate the user object on line 4 — it’s a completely separate object from the object in state.

Be sure to polyfill Object.assign since it’s [unsupported in IE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) and [not transpiled by Babel](https://babeljs.io/docs/usage/polyfill/). Four options to consider:

1.  [object-assign](https://www.npmjs.com/package/object-assign)
2.  [The MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
3.  [Babel Polyfill](https://babeljs.io/docs/usage/polyfill/)
4.  [Polyfill.io](https://polyfill.io/v2/docs/features/#Object_assign)

### Approach #2: Object Spread

Object spread is currently a [stage 3 feature](https://github.com/tc39/proposal-object-rest-spread), and can be [transpiled by Babel](http://babeljs.io/docs/plugins/transform-object-rest-spread/#example). This approach is more concise:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ce78b1da0e46938bc508a836941c0c60?postId=d1f5c00249d5" data-media-id="ce78b1da0e46938bc508a836941c0c60" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F1688997%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





On line 3 I’m saying “Use all the properties on this.state.user to create a new object, then set the property represented by [name] to a new value passed on event.target.value”. So this approach works similarly to the Object.assign approach, but has two benefits:

1.  No polyfill required, since Babel can transpile
2.  More concise

You can even use destructuring and inlining to make this a one-liner:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/202d91f41123d6bb535d337acab2f8d5?postId=d1f5c00249d5" data-media-id="202d91f41123d6bb535d337acab2f8d5" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F1688997%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





I’m destructuring event in the method signature to get a reference to event.target. Then I’m declaring that state should be set to a copy of this.state.user with the relevant property set to a new value. I like how terse this is. This is currently my favorite approach to writing change handlers. 🏅

These two approaches above are the most common and straightforward ways to handle immutable state. Want more power? Check out the other two options below.

### Approach #3: Immutability Helper

[Immutability-helper](https://github.com/kolodny/immutability-helper) is a handy library for mutating a copy of data without changing the source. This library is suggested in [React’s docs](https://facebook.github.io/react/docs/update.html).





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b69b1ed6d206d1024ac158e307a2258a?postId=d1f5c00249d5" data-media-id="b69b1ed6d206d1024ac158e307a2258a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F1688997%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





On line 5, I’m calling merge, which is [one of many commands](https://github.com/kolodny/immutability-helper#available-commands) provided by immutability-helper. Much like Object.assign, I pass it the target object as the first parameter, then specify the property I’d like to merge in.

There’s much more to immutability helper than this. It uses a syntax inspired from MongoDB’s query language and offers a [variety of powerful ways to work with immutable data](https://github.com/kolodny/immutability-helper#available-commands).

### Approach #4: Immutable.js

Want to programatically enforce immutability? Consider [immutable.js](https://facebook.github.io/immutable-js/). This library provides immutable data structures.

Here’s an example, using an immutable map:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/379c6a33451807f4d9ae73cfb8647c75?postId=d1f5c00249d5" data-media-id="379c6a33451807f4d9ae73cfb8647c75" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F1688997%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





There are three basic steps above:

1.  Import immutable.
2.  Set state to an immutable map in the constructor
3.  Use the set method in the change handler to create a new copy of user.

The beauty of immutable.js: **If you try to mutate state directly, it will fail**. With the other approaches above, it’s easy to forget, and React won’t warn you when you mutate state directly.

The downsides of immutable?

1.  **Bloat**. Immutable.js adds 57K minified to your bundle. Considering libraries like [Preact can replace React in only 3K](https://preactjs.com), that’s hard to accept.
2.  **Syntax**. You have to reference object properties via strings and method calls instead of directly. I prefer user.name over user.get(‘name’).
3.  **YATTL** (Yet another thing to learn) — Anyone joining your team needs to learn yet another API for getting and setting data, as well as a new set of datatypes.

### Final Tip: Consider Using Functional setState

One other wrinkle can bite you:

> setState() does not immediately mutate this.state but creates a pending state transition. Accessing this.state after calling this method can potentially return the existing value.

Since setState calls are batched, code like this leads to a bug:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2965a1e6c5581b5b8b33ff3ffccd7876?postId=d1f5c00249d5" data-media-id="2965a1e6c5581b5b8b33ff3ffccd7876" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F1688997%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





If you want to run code after a setState call has completed, use the callback form of setState:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9f937bdbc41b9522430511f73bd70b88?postId=d1f5c00249d5" data-media-id="9f937bdbc41b9522430511f73bd70b88" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F1688997%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





### My Take

I admire the simplicity and light weight of option #2 above: Object spread. It doesn’t require a polyfill or separate library, and I can declare a change handler on a single line. 👍

Have other ways you like to handle state in React? Please chime in via the comments!

### Looking for More on React? ⚛

I’ve authored [multiple React and JavaScript courses](http://bit.ly/psauthorpageimmutablepost) on Pluralsight ([free trial](http://bit.ly/pstrialimmutablepost)). My latest, “[Creating Reusable React Components](http://bit.ly/psreactcomponentsimmutablepost)” just published! 🎉



[![](https://cdn-images-1.medium.com/max/1600/1*BkPc3o2d2bz0YEO7z5C2JQ.png)](https://app.pluralsight.com/profile/author/cory-house)













* * *







[Cory House](https://twitter.com/housecor) is the author of [multiple courses on JavaScript, React, clean code, .NET, and more on Pluralsight](http://pluralsight.com/author/cory-house). He is principal consultant at [reactjsconsulting.com](http://www.reactjsconsulting.com), a Software Architect at VinSolutions, a Microsoft MVP, and trains software developers internationally on software practices like front-end development and clean coding. Cory tweets about JavaScript and front-end development on Twitter as [@housecor](http://www.twitter.com/housecor).








