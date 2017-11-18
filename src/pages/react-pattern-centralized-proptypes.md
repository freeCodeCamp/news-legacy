---
author: Cory House
title: React Pattern Centralized PropTypes
coverSrc: https://cdn-images-1.medium.com/max/1024/1*fjBw8m5BiLqjW9BHfmySfg.jpeg
url: https://medium.freecodecamp.org/react-pattern-centralized-proptypes-f981ff672f3b?source=rss----336d898217ee---4
id: https://medium.com/p/f981ff672f3b
date: Tue, 14 Nov 2017 16:39:43 GMT
---
#### Avoid repeating yourself by centralizing PropTypes

![](https://cdn-images-1.medium.com/max/1024/1*fjBw8m5BiLqjW9BHfmySfg.jpeg)

<figcaption>[G](https://unsplash.com/photos/Y5VHEKzHeLg)rand Central Station, New York, NY</figcaption>



There are three popular ways to handle types in React: [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html), [TypeScript](http://typescriptlang.org) and [Flow](http://flowtype.org/). This post is about PropTypes, which are currently the most popular.

<style>body[data-twttr-rendered="true"] {background-color: transparent;}.twitter-tweet {margin: auto !important;}</style>

> 📊 For enforcing types in React, I typically use... #react RT's appreciated
>
>  — [@housecor](https://twitter.com/housecor/status/911673327240073216)

<script>function notifyResize(height) {height = height ? height : document.documentElement.offsetHeight; var resized = false; if (window.donkey && donkey.resize) {donkey.resize(height); resized = true;}if (parent && parent._resizeIframe) {var obj = {iframe: window.frameElement, height: height}; parent._resizeIframe(obj); resized = true;}if (window.location && window.location.hash === "#amp=1" && window.parent && window.parent.postMessage) {window.parent.postMessage({sentinel: "amp", type: "embed-size", height: height}, "*");}if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.resize) {window.webkit.messageHandlers.resize.postMessage(height); resized = true;}return resized;}twttr.events.bind('rendered', function (event) {notifyResize();}); twttr.events.bind('resize', function (event) {notifyResize();});</script><script>if (parent && parent._resizeIframe) {var maxWidth = parseInt(window.frameElement.getAttribute("width")); if ( 500 < maxWidth) {window.frameElement.setAttribute("width", "500");}}</script>

Since PropTypes provide type warnings at runtime, it’s helpful to be as specific as possible.

*   Component accepts an object? Declare the object’s shape.
*   Prop only accepts a specific list of values? Use oneOf.
*   Array should contain numbers? Use arrayOf.
*   You can even declare your own types. [AirBnB offers many additional PropTypes](https://github.com/airbnb/prop-types).

Here’s a PropType example:

<iframe src="" width="0" height="0" frameborder="0" scrolling="no"><a href="https://medium.com/media/e019278c6f44de68391613cd427f60bf/href">https://medium.com/media/e019278c6f44de68391613cd427f60bf/href</a></iframe>

In real apps with large objects, this quickly leads to a lot of code. That’s a problem, because **in React, you’ll often pass the same object to multiple components**. Repeating these details in multiple component files breaks the [DRY principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) (don’t repeat yourself). Repeating yourself creates a maintenance problem.

The solution? **Centralize your PropTypes**.

#### Here’s How to Centralize PropTypes

I prefer centralizing PropTypes in /types/index.js.

<iframe src="" width="0" height="0" frameborder="0" scrolling="no"><a href="https://medium.com/media/7f8c95bf8547914ded554ae773b5c67d/href">https://medium.com/media/7f8c95bf8547914ded554ae773b5c67d/href</a></iframe>

I’m using named imports on line 2 to shorten the declarations. 👍

And here’s how I use the PropType I declared above:

<iframe src="" width="0" height="0" frameborder="0" scrolling="no"><a href="https://medium.com/media/d25d344201d77c812adc57179733deae/href">https://medium.com/media/d25d344201d77c812adc57179733deae/href</a></iframe>

I use a named import to get a reference to the exported PropType declaration on line 2\. And I put it to use on line 13.

**Benefits**:

1.  The centralized PropType radically simplifies the component’s PropType declaration. Line 13 just references the centralized PropType, so it’s easy to read.
2.  The centralized type only declares the shape, so you can still mark the prop as required as needed.
3.  No more copy/paste. If the object shape changes later, you have a single place to update. 🎉

Here’s a [working example on CodeSandbox](https://codesandbox.io/s/3vw24xnlqm).

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fcodesandbox.io%2Fembed%2F3vw24xnlqm%3Fmodule%3D%252FUserDetails.js%26view%3Deditor&amp;url=https%3A%2F%2Fcodesandbox.io%2Fs%2F3vw24xnlqm%3Fmodule%3D%252FUserDetails.js%26view%3Deditor&amp;image=https%3A%2F%2Fcodesandbox.io%2Fstatic%2Fimg%2Fbanner.png&amp;key=a19fcc184b9711e1b4764040d3dc5c07&amp;type=text%2Fhtml&amp;schema=codesandbox" width="1000" height="500" frameborder="0" scrolling="no"><a href="https://medium.com/media/b3048fa80cab9fa3dbbfde4ebdaef4c4/href">https://medium.com/media/b3048fa80cab9fa3dbbfde4ebdaef4c4/href</a></iframe>

#### Extra Credit: Generate Your PropTypes

Finally, consider writing some custom code to generate your PropType declarations from your server-side code. For example, if your API is written using a strongly typed language like C# or Java, consider generating your PropType declarations as part of your server-side API build process by reading the shape of your server-side classes. This way you don’t have to worry about keeping your client-side PropTypes and your server-side API code in sync. 👍

**Side-note**: If you know of a project that does this for any server-side languages, please reply in the comments and I’ll add a link here.

**Edit**: You can convert JSON into PropTypes using [transform.now](https://transform.now.sh/). 🎉

### Summary

1.  Declare your PropTypes as explicitly as possible, so you know when you’ve made a mistake.
2.  Centralize your PropTypes to avoid repeating yourself.
3.  If you’re working in a strongly typed language on the server, consider generating your PropTypes by reading your server-side code. This assures your PropTypes match your server-side types.

### Looking for More on React? ⚛️

I’ve authored [multiple React and JavaScript courses](http://bit.ly/psauthorpageimmutablepost) on Pluralsight ([free trial](http://bit.ly/pstrialimmutablepost)).

[![](https://cdn-images-1.medium.com/proxy/1*BkPc3o2d2bz0YEO7z5C2JQ.png)](https://www.pluralsight.com/authors/cory-house)

[Cory House](https://twitter.com/housecor) is the author of [multiple courses on JavaScript, React, clean code, .NET, and more on Pluralsight](http://pluralsight.com/author/cory-house). He is principal consultant at [reactjsconsulting.com](http://www.reactjsconsulting.com), a Software Architect at VinSolutions, a Microsoft MVP, and trains software developers internationally on software practices like front-end development and clean coding. Cory tweets about JavaScript and front-end development on Twitter as [@housecor](http://www.twitter.com/housecor).

![](https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=f981ff672f3b)

* * *

[React Pattern: Centralized PropTypes](https://medium.freecodecamp.org/react-pattern-centralized-proptypes-f981ff672f3b) was originally published in [freeCodeCamp](https://medium.freecodecamp.org) on Medium, where people are continuing the conversation by highlighting and responding to this story.
