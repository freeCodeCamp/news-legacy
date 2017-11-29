---
author: Cory House
authorTwitter: https://twitter.com/housecor
authorFacebook: none
title: "React Pattern: Extract Child Components to Avoid Binding"
subTitle: "Here’s a common scenario in React: You’re mapping over an array, and you need each item to call a click handler and pass some relevant da..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*zISOb74W7PriWKX0y7biKg.jpeg
url: https://medium.freecodecamp.org/react-pattern-extract-child-components-to-avoid-binding-e3ad8310725e
id: react-pattern-extract-child-components-to-avoid-binding-e3ad8310725e
date: 2017-07-04T13:55:44.381Z
tags: [
  "JavaScript",
  "React",
  "React Native",
  "Web Development",
  "Web Design"
]
---
# React Pattern: Extract Child Components to Avoid Binding



![](https://cdn-images-1.medium.com/max/1600/1*zISOb74W7PriWKX0y7biKg.jpeg)

Having issues with your component? Extract that wild child!



Here’s a common scenario in React: You’re mapping over an array, and you need each item to call a click handler and pass some relevant data.

Here’s an example. I’m iterating over a list of users and passing the userId to delete to the deleteUser function on line 31.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d06ce21b55d2473648b5d6fe2133c4a6?postId=e3ad8310725e" data-media-id="d06ce21b55d2473648b5d6fe2133c4a6" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F1688997%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



I’m using a [class property](https://babeljs.io/docs/plugins/transform-class-properties/) for deleteUser above to avoid manually binding the function in the constructor. For more on binding approaches, see [this post](https://medium.freecodecamp.com/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56)



Here’s a [working example on Codesandbox](https://codesandbox.io/s/0OP2Yq87). (which is awesome 😍)

### So What’s the Problem?

I’m using an arrow function in the click handler. This means **every time render runs, a new function is allocated**. In many cases, this isn’t a big deal. But if you have child components, they’ll re-render even when data hasn’t changed because each render allocates a new function.

**Bottom line**: Avoid declaring arrow functions or binding in render for optimal performance. My team uses [this ESLint rule](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md) to help alert us to this issue.

### What’s the Solution?

So how do you avoid binding and arrow functions in render? One option is to extract a child component. Here, I’ve extracted the list item to UserListItem.js:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2c349b903dbef303dd976a862b301b9b?postId=e3ad8310725e" data-media-id="2c349b903dbef303dd976a862b301b9b" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F1688997%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Then, the parent component’s render gets simpler, and no longer needs to contain an arrow function. It passes the relevant context for each list item down via props in the new “renderUserListItem” function.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c6d7924419a3550cbafccbb097645854?postId=e3ad8310725e" data-media-id="c6d7924419a3550cbafccbb097645854" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F1688997%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Note that instead of using an arrow function in render while mapping, we’re calling a new function declared outside of render on line 19\. No more function allocations on each render. 👍

Here’s a [working example of this final refactor](https://codesandbox.io/s/jqQ0AlQlW).

### Yay or Yuck?

This pattern improves performance by eliminating redundant function allocations. So it’s most useful when this situation applies to your component:

1.  Render is called frequently.
2.  Rendering children is expensive.

Admittedly, extracting a child component as I’ve suggested above is extra work too. It requires more moving parts, and more code. So if you’re not having performance issues, it’s arguably a premature optimization 🙈.

So you have two options: Either allow arrows and binds everywhere (and deal with perf issues if they pop up), or forbid them for optimal performance and consistency.

**Bottom-line:** I recommend disallowing arrows and binds in render. Here’s why:

1.  You have to disable the [useful ESLint rule](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md) I suggested above to allow it.
2.  Once you disable a linting rule, people are likely to copy this pattern and start disabling other linting rules. An exception in one place can quickly become the norm…





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/a00523c97850a4a24c7cce9efa2425ad?postId=e3ad8310725e" data-media-id="a00523c97850a4a24c7cce9efa2425ad" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F650743198348808192%2FLT6SeOJr_400x400.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





So I find extracting child components a useful pattern to avoid binding in render.

Have another way you like to handle this? Chime in via the comments!

### Looking for More on React? ⚛

I’ve authored [multiple React and JavaScript courses](http://bit.ly/psauthorpageimmutablepost) on Pluralsight ([free trial](http://bit.ly/pstrialimmutablepost)). My latest, “[Creating Reusable React Components](http://bit.ly/psreactcomponentsimmutablepost)” just published! 🎉



![](https://cdn-images-1.medium.com/max/1600/1*BkPc3o2d2bz0YEO7z5C2JQ.png)













* * *







[Cory House](https://twitter.com/housecor) is the author of [multiple courses on JavaScript, React, clean code, .NET, and more on Pluralsight](http://pluralsight.com/author/cory-house). He is principal consultant at [reactjsconsulting.com](http://www.reactjsconsulting.com), a Software Architect at VinSolutions, a Microsoft MVP, and trains software developers internationally on software practices like front-end development and clean coding. Cory tweets about JavaScript and front-end development on Twitter as [@housecor](http://www.twitter.com/housecor).








