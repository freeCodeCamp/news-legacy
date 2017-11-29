---
author: Sacha Greif
authorTwitter: https://twitter.com/SachaGreif
authorFacebook: https://facebook.com/10153995454490456
title: "Which Projects Need React? All Of Them!"
subTitle: "When does a project need React? That’s the question Chris Coyier addressed in a recent blog post. I’m a big fan of Chris’ writing, so I w..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*oBgj1FMn9GrUBIxPh_k2HQ.jpeg
url: https://medium.freecodecamp.org/which-projects-need-react-all-of-them-e7ccb6629ba7
id: which-projects-need-react-all-of-them-e7ccb6629ba7
date: 2017-05-19T03:47:37.657Z
tags: [
  "React",
  "JavaScript",
  "Web Development",
  "Technology",
  "Programming"
]
---
# Which Projects Need React? All Of Them!

When does a project need React? That’s the question Chris Coyier addressed in [a recent blog post](https://css-tricks.com/project-need-react/). I’m a big fan of Chris’ writing, so I was curious to see what he had to say.

In a nutshell, Chris puts forward a series of good and bad reasons why one might want to use React (or other similar modern JavaScript libraries) on a project. Yet while I don’t disagree with his arguments, I still find myself coming to a different conclusion.

So today, I’m here to argue that the answer to “When does a project need React?” is not “it depends.” It’s “**every time.**”

#### React vs Vue vs Angular vs…

First, let’s get something out of the way: in his article, Chris picked React as a stand-in for “front-end libraries” in general, and I’ll do the same here. Plus, React is what I’m most familiar with from my ongoing work on [VulcanJS](http://vulcanjs.org), a React and GraphQL framework.

That being said, my arguments should apply equally well to any other library that offers the same features as React.

### The Power of the Hammer

> “When all you have is a hammer, everything looks like a nail.”

This proverb has long been used to condemn anybody trying to apply a systematic one-size-fits-all approach to every problem.

But let’s suppose for a moment that you _did_ live in a world full of nails (however uncomfortable this might sound), and that your trusty hammer was able to take care of any issues you encounter.

Just consider the benefits of being able to **reuse the same tool every time**:

*   No time spent on deciding which tool to use.
*   Less time spent having to learn new tools.
*   More time to get better at wielding your tool of choice.

So is React that tool? I think it just might be!

### The Complexity Spectrum

First, let’s address the most common argument against the “React all the things!” approach. I’ll quote directly from Chris:

> “A blog, for example, _probably_ has none of the problems and fits none of the scenarios that would make React a good fit. And because it’s not a good fit, it’s probably a _bad_ fit, because it introduces complicated technology and dependencies for something that doesn’t call for it.”

Fair enough. A simple blog doesn’t _need_ React. After all, even if you need a bit of JavaScript to hook up a newsletter sign-up form, you can just use jQuery.

What’s that? You need to use that form in multiple places on different pages? And only show it under certain conditions? And animate it, too? Wait, hold on…

The point I’m trying to make with this little scenario is that complexity is not an all-or-nothing, binary choice. Instead, modern websites live on a continuous spectrum that goes from static page all the way to rich single-page app.

So maybe your project is comfortably nested at the “simple” end of the spectrum _now_, but what about six months down the road? Isn’t it better to pick a technology that leaves you room to grow, rather than one that pigeon-holes you into bad practices?

### The Benefits of React

> “Premature optimization is the root of all evil” — Donald Knuth

This is another popular saying among programmers. After all, who needs hammers and nails when duct tape will do just fine!

But this makes the assumption that “premature optimization” is a long, arduous process with few benefits. And I don’t think this applies to React.

While React may take some time getting used to, once you learn [its basic concepts](https://medium.freecodecamp.com/the-5-things-you-need-to-know-to-understand-react-a1dbd5d114a3) you’ll be just as productive as with classic front-end tools.

Maybe more in fact, because React leverages the extremely powerful concept of **components**. Just like CSS encourages you to think in terms of reusable classes and styles, React pushes you towards a flexible, modular front-end architecture that has benefits for every use case, from the lowly static homepage to the interactive back-end dashboard.

### JavaScript, JavaScript Everywhere

We live in a JavaScript world. Or, as Chris puts it:

> “You got Node.js on the server side. There are loads of projects that yank CSS out of the mix and handle styles through JavaScript. And with React, your HTML is in JavaScript too.

> “All JavaScript! All hail JavaScript!”

Chris isn’t quite convinced, but I am. JavaScript in itself isn’t necessarily perfect, but having access to the entire modern npm ecosystem is amazing.

Installing a jQuery plugin used to involve finding its homepage, downloading it, copying it in your project directory, adding a `<script>` tag, and then hopefully remembering to check back every couple months for new versions. These days, installing the same plugin as a React package is just the matter of a single `npm install` command.

And with new libraries like [styled-components](https://medium.freecodecamp.com/a-5-minute-intro-to-styled-components-41f40eb7cd55), even CSS is now being dragged kicking and screaming into the future.

Believe me, once you get used to this world where everything is speaking the same language, it’s really hard to go back to the old way of doing things.

### Won’t Somebody Please Think of the Users!

I know what you’re thinking: so far I’ve tried to sell you on the benefits of React to developers, but I’ve carefully side-stepped any mention of the end user experience.

And that remains the key argument against modern libraries: slow, JavaScript-bloated sites that take ages just to load one of those “one weird trick” ads.

Except here’s a little secret: **you can get all the benefits of React without any JavaScript at all**!

What I’m talking about here is rendering React on **the server**. In fact, tools like [Gatsby](https://github.com/gatsbyjs/gatsby) (and soon, [Next.js](https://github.com/zeit/next.js/)) even let you compile React components into static HTML files that you can host on, say, GitHub pages.

As an example, [my own personal site](http://sachagreif.com/) is a Gatsby-generated React app that doesn’t load any JavaScript at all (beyond a Google Analytics snippet). I get all the benefits of using React in development (all-JavaScript, access to the npm ecosystem, styled-components, etc.) but end up with a 100% HTML-and-CSS end product.

### Wrapping Up

To recap, here are the four reasons why I think React is a valid choice for _any_ project:

*   It’s really hard to guarantee you’ll never _ever_ need interactive features like tabs, forms — even for the simplest of sites.
*   React’s component-based approach has big benefits — even for static content-based sites.
*   Access to the modern JavaScript ecosystem is a huge benefit.
*   Modern server-rendering tools eliminate for your end user any downsides to using React.

So what do you think, Chris? Have I made a convincing case? Or do doubts still linger in your mind?

And what about you, dear reader? Whether you think like Chris that every tool has its use, or whether you agree with me that the Time of the Hammer is at hand, let us know in the comments!

_This article was originally published on_ [_CSS Tricks_](https://css-tricks.com/projects-need-react/)_._








