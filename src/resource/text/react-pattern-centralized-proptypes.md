---
author: Cory House
authorTwitter: https://twitter.com/housecor
authorFacebook: none
title: "React Pattern: Centralized PropTypes"
subTitle: "Avoid repeating yourself by centralizing PropTypes"
coverSrc: https://cdn-images-1.medium.com/max/2000/1*fjBw8m5BiLqjW9BHfmySfg.jpeg
url: https://medium.freecodecamp.org/react-pattern-centralized-proptypes-f981ff672f3b
id: react-pattern-centralized-proptypes-f981ff672f3b
date: 2017-11-14T16:39:43.298Z
tags: [
  "JavaScript",
  "Web Development",
  "React",
  "Programming",
  "Web Design"
]
---
# React Pattern: Centralized PropTypes

## Avoid repeating yourself by centralizing PropTypes







![](https://cdn-images-1.medium.com/max/2000/1*fjBw8m5BiLqjW9BHfmySfg.jpeg)

[G](https://unsplash.com/photos/Y5VHEKzHeLg)rand Central Station, New York, NY







There are three popular ways to handle types in React: [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html), [TypeScript](http://typescriptlang.org) and [Flow](http://flowtype.org/). This post is about PropTypes, which are currently the most popular.





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/4b8b6f3e6af52c262c3cc65c0ca4d204?postId=f981ff672f3b" data-media-id="4b8b6f3e6af52c262c3cc65c0ca4d204" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F650743198348808192%2FLT6SeOJr_400x400.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Since PropTypes provide type warnings at runtime, it’s helpful to be as specific as possible.

*   Component accepts an object? Declare the object’s shape.
*   Prop only accepts a specific list of values? Use oneOf.
*   Array should contain numbers? Use arrayOf.
*   You can even declare your own types. [AirBnB offers many additional PropTypes](https://github.com/airbnb/prop-types).

Here’s a PropType example:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/e019278c6f44de68391613cd427f60bf?postId=f981ff672f3b" data-media-id="e019278c6f44de68391613cd427f60bf" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F1688997%3Fs%3D400%26v%3D4&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



PropType declaration example



In real apps with large objects, this quickly leads to a lot of code. That’s a problem, because **in React, you’ll often pass the same object to multiple components**. Repeating these details in multiple component files breaks the [DRY principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) (don’t repeat yourself). Repeating yourself creates a maintenance problem.

The solution? **Centralize your PropTypes**.

#### Here’s How to Centralize PropTypes

I prefer centralizing PropTypes in /types/index.js.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/7f8c95bf8547914ded554ae773b5c67d?postId=f981ff672f3b" data-media-id="7f8c95bf8547914ded554ae773b5c67d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F1688997%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





I’m using named imports on line 2 to shorten the declarations. 👍

And here’s how I use the PropType I declared above:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d25d344201d77c812adc57179733deae?postId=f981ff672f3b" data-media-id="d25d344201d77c812adc57179733deae" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F1688997%3Fs%3D400%26v%3D4&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





I use a named import to get a reference to the exported PropType declaration on line 2\. And I put it to use on line 13.

**Benefits**:

1.  The centralized PropType radically simplifies the component’s PropType declaration. Line 13 just references the centralized PropType, so it’s easy to read.
2.  The centralized type only declares the shape, so you can still mark the prop as required as needed.
3.  No more copy/paste. If the object shape changes later, you have a single place to update. 🎉

Here’s a [working example on CodeSandbox](https://codesandbox.io/s/3vw24xnlqm).





<iframe data-width="1000" data-height="500" width="700" height="350" src="https://medium.freecodecamp.org/media/b3048fa80cab9fa3dbbfde4ebdaef4c4?postId=f981ff672f3b" data-media-id="b3048fa80cab9fa3dbbfde4ebdaef4c4" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fcodesandbox.io%2Fstatic%2Fimg%2Fbanner.png&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





#### Extra Credit: Generate Your PropTypes

Finally, consider writing some custom code to generate your PropType declarations from your server-side code. For example, if your API is written using a strongly typed language like C# or Java, consider generating your PropType declarations as part of your server-side API build process by reading the shape of your server-side classes. This way you don’t have to worry about keeping your client-side PropTypes and your server-side API code in sync. 👍

**Side-note**: If you know of a project that does this for any server-side languages, please reply in the comments and I’ll add a link here.

**Edit**: You can convert JSON into PropTypes using [transform.now](https://transform.now.sh/). 🎉

### Summary

1.  Declare your PropTypes as explicitly as possible, so you know when you’ve made a mistake.
2.  Centralize your PropTypes to avoid repeating yourself.
3.  If you’re working in a strongly typed language on the server, consider generating your PropTypes by reading your server-side code. This assures your PropTypes match your server-side types.

### Looking for More on React? ⚛️

I’ve authored [multiple React and JavaScript courses](http://bit.ly/psauthorpageimmutablepost) on Pluralsight ([free trial](http://bit.ly/pstrialimmutablepost)).



[![](https://cdn-images-1.medium.com/max/1600/1*BkPc3o2d2bz0YEO7z5C2JQ.png)](https://www.pluralsight.com/authors/cory-house)













* * *







[Cory House](https://twitter.com/housecor) is the author of [multiple courses on JavaScript, React, clean code, .NET, and more on Pluralsight](http://pluralsight.com/author/cory-house). He is principal consultant at [reactjsconsulting.com](http://www.reactjsconsulting.com), a Software Architect at VinSolutions, a Microsoft MVP, and trains software developers internationally on software practices like front-end development and clean coding. Cory tweets about JavaScript and front-end development on Twitter as [@housecor](http://www.twitter.com/housecor).








