---
author: Cory House
authorTwitter: https://twitter.com/housecor
authorFacebook: none
title: "Why Arrow Functions and bind in React’s Render are Problematic"
subTitle: "(Hint: It makes shouldComponentUpdate and PureComponent cranky)"
coverSrc: https://cdn-images-1.medium.com/max/1600/1*mcgExlgxxMzp9ZugfTc9LQ.jpeg
url: https://medium.freecodecamp.org/why-arrow-functions-and-bind-in-reacts-render-are-problematic-f1c08b060e36
id: why-arrow-functions-and-bind-in-reacts-render-are-problematic-f1c08b060e36
date: 2017-08-22T14:40:09.599Z
tags: [
  "JavaScript",
  "React",
  "React Native",
  "Web Development",
  "Programming"
]
---
# Why Arrow Functions and bind in React’s Render are Problematic

## (Hint: It makes shouldComponentUpdate and PureComponent cranky)



![](https://cdn-images-1.medium.com/max/1600/1*mcgExlgxxMzp9ZugfTc9LQ.jpeg)

Watch for arrows…



In a previous post, I explained how to [extract React child components to avoid using bind or arrow functions in render](https://medium.freecodecamp.org/react-pattern-extract-child-components-to-avoid-binding-e3ad8310725e). But I didn’t provide a clear demo to show why this is useful.

Here’s a quick example.

In this example, I’m using an arrow function in render to bind the relevant user ID to each delete button.





<iframe data-width="1000" data-height="500" width="700" height="350" src="https://medium.freecodecamp.org/media/c9835ff722806369e62e062528ac85a3?postId=f1c08b060e36" data-media-id="c9835ff722806369e62e062528ac85a3" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fcodesandbox.io%2Fstatic%2Fimg%2Fbanner.png&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



New to CodeSandbox? Click the colored boxes at the top of the example to toggle between code, split, and UI view. Click the hamburger on the top left to view the other files in this solution.



On line 35, I’m using an arrow function to pass a value to the deleteUser function. That’s a problem.

To see why, check out User.js (click the hamburger icon on the top left to select different files in the example). I’m logging to the console each time render is called. I’ve declared User as a [PureComponent](https://facebook.github.io/react/docs/react-api.html#react.purecomponent). So User should only re-render when props or state change. But **when you click on delete for a user, note that render is called for _all_ User instances**.

Here’s why: The parent component is passing down an arrow function on props. Arrow functions are reallocated on every render (same story with using bind). So although I’ve declared User.js as a PureComponent, the arrow function in User’s parent causes the User component to see a new function being sent in on props for all users. So every user re-renders when **_any_** delete button is clicked. 👎

Summary:

> Avoid arrow functions and binds in render. It breaks performance optimizations like shouldComponentUpdate and PureComponent.

### What Should I Do Instead?

For contrast, here’s an example that doesn’t use an arrow function in render.





<iframe data-width="1000" data-height="500" width="700" height="350" src="https://medium.freecodecamp.org/media/45c403af162bc8ad865aa023511d727d?postId=f1c08b060e36" data-media-id="45c403af162bc8ad865aa023511d727d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fcodesandbox.io%2Fstatic%2Fimg%2Fbanner.png&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



In this version, index.js has no arrow in render



In this example, index.js has no arrow function in render. Instead, the relevant data is passed down to User.js. In User.js, onDeleteClick calls the onClick function passed in on props with the relevant user.id.

With this change, when you click on delete, notice that render isn’t called for the other Users! 👍

### Summary

For optimal performance,

1.  Avoid arrow functions and bind in render.
2.  How? [Extract child components](https://medium.freecodecamp.org/react-pattern-extract-child-components-to-avoid-binding-e3ad8310725e), or [pass data on the HTML element](https://medium.com/@mgnrsb/another-way-to-avoid-binding-in-render-in-simple-cases-like-this-where-all-you-need-is-to-remember-68af83da0258).

### Looking for More on React? ⚛️

I’ve authored [multiple React and JavaScript courses](http://bit.ly/psauthorpageimmutablepost) on Pluralsight ([free trial](http://bit.ly/pstrialimmutablepost)). My latest, “[Creating Reusable React Components](http://bit.ly/psreactcomponentsimmutablepost)” just published! 🎉



[![](https://cdn-images-1.medium.com/max/1600/1*BkPc3o2d2bz0YEO7z5C2JQ.png)](https://www.pluralsight.com/authors/cory-house)













* * *







[Cory House](https://twitter.com/housecor) is the author of [multiple courses on JavaScript, React, clean code, .NET, and more on Pluralsight](http://pluralsight.com/author/cory-house). He is principal consultant at [reactjsconsulting.com](http://www.reactjsconsulting.com), a Software Architect at VinSolutions, a Microsoft MVP, and trains software developers internationally on software practices like front-end development and clean coding. Cory tweets about JavaScript and front-end development on Twitter as [@housecor](http://www.twitter.com/housecor).








