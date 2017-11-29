---
author: Sacha Greif
authorTwitter: https://twitter.com/SachaGreif
authorFacebook: https://facebook.com/10153995454490456
title: "A Study Plan To Cure JavaScript Fatigue"
subTitle: "Like everybody else, I recently came across Jose Aguinaga’s post “How it feels to learn JavaScript in 2016”...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*9aqEe1RQXAh77hA07VZN0w.png
url: https://medium.freecodecamp.org/a-study-plan-to-cure-javascript-fatigue-8ad3a54f2eb1
id: a-study-plan-to-cure-javascript-fatigue-8ad3a54f2eb1
date: 2016-10-31T07:19:05.684Z
tags: [
	"JavaScript",
	"Life Lessons",
	"Tech",
	"React",
	"Web Development"
]
---
# A Study Plan To Cure JavaScript Fatigue

Like everybody else, I recently came across Jose Aguinaga’s post “[How it feels to learn JavaScript in 2016](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.5wjpn7svo)”.

It’s clear that this post hit a nerve: I saw it reaching the top spot on [Hacker News](http://news.ycombinator.com) not once but _twice._ It was the most popular post on [/r/javascript](http://reddit.com/r/javascript/) as well, and as of right now it has over 10k likes on Medium — which is probably more than all my own posts put together. But who’s counting?

This didn’t come as a surprise though: I’ve known for a long time that the JavaScript ecosystem can be confusing. In fact, the very reason why I ran the [State Of JavaScript](http://stateofjs.com) survey was to find out which libraries were actually popular, and finally sort the signal from the noise.

But today, I want to go one step further. Instead of simply complaining about the state of things, I’m going to give you a concrete, step-by-step study plan to conquering the JavaScript ecosystem.

### Who Is This For

This study plan is for you if:

*   You’re already familiar with basic programming concepts like variables and functions.
*   You might have already done back-end work with languages such as PHP and Python, and maybe used front-end libraries such as jQuery for a few simple hacks.
*   You now want to get into more serious front-end development but are drowning in frameworks and libraries before you’ve even started.

### Things We’ll Cover

*   What a modern JavaScript web app looks like
*   Why you can’t just use jQuery
*   Why React is the safest pick
*   Why you may not need to “learn JavaScript properly” first
*   How to learn ES6 syntax
*   Why and how to learn Redux
*   What GraphQL is and why it’s a big deal
*   Where to go next

### Resources Mentioned Here

Disclaimer: this post will include a few affiliate links to courses by [Wes Bos](http://wesbos.com/), but the material is recommended because I genuinely think it’s good, and not just because of the affiliate scheme.

If you would rather find other resources, Mark Erikson maintains a great list of [React, ES6, and Redux](https://github.com/markerikson/react-redux-links) links.

### JavaScript vs JavaScript

Before we start, we need to make sure we’re talking about the same thing. If you google “Learn JavaScript” or “JavaScript study plan”, you’ll find a ton of resources that teach you how to learn the JavaScript _language_.

But that’s actually the _easy_ part. While you can definitely dig deep and learn the intricacies of the language, the truth is most web apps use relatively simple code. In other words, 80% of what you’ll ever need to write web apps is typically covered in the first few chapters of your typical JavaScript book.

No, the hard problem is mastering the JavaScript _ecosystem_, with its countless competing frameworks and libraries. The good news is, that’s exactly what this study plan focuses on.

### The Building Blocks Of JavaScript Apps

In order to understand why modern JavaScript apps seem so complex, you first have to understand how they work.

For starters, let’s look at a “traditional” web app circa 2008:






















1.  The database sends data to your back-end (e.g. your PHP or Rails app).
2.  The back-end reads that data and outputs HTML.
3.  The HTML is sent to the browser, which displays it as the DOM (basically, a web page)

Now a lot of these apps also sprinkled in some JavaScript code on the client to add interactivity, such as tabs and modal windows. But fundamentally, the browser was still receiving HTML and going from there.

Now compare this with a “modern” 2016 web app (also known as the “Single Page App”):






















Notice the difference? Instead of sending HTML, the server now sends _data_, and the “data to HTML” conversion step happens on the client instead (which is why you’re also sending along the code that tells the client how to perform said conversion).

This has many implications. First, the good:

*   For a given piece of content, sending only data is faster than sending entire HTML pages.
*   The client can swap in content instantly without having to ever refresh the browser window (thus the term “Single Page App”).

The bad:

*   The initial load takes longer since the “data to HTML” codebase can grow quite large.
*   You now need a place to store and manage the data on the client too, in case you want to cache it or inspect it.

And the ugly:

*   Congratulations — you now have to deal with a client-side stack, which can get just as complex as your server-side stack.

### The Client-Server Spectrum

So why go through all this trouble if there are so many downsides? Why not just stick to the good old PHP apps of old?

Well, imagine you’re building a calculator. If the user wants to know what 2 + 2 is, it doesn’t make sense to go all the way back to the server to perform the operation when the browser is perfectly capable of doing it.

On the other hand, if you’re building a purely static site such as a blog, it’s perfectly fine to generate the final HTML on the server and be done with it.

The truth is, most web apps fall somewhere in the middle of the spectrum. The problem is knowing where.

But the key thing is that _the spectrum is not continuous_: you can’t start with a pure server-side app and slowly move towards a pure client-side app. At some point (the Divide), you’ll be forced to stop and refactor everything, or else end up with a mess of unmaintainable spaghetti code.






















This is why you shouldn’t “just use jQuery” for everything. You can think of jQuery like duct tape. It’s amazingly handy for small fixes around the house, but if you keep adding more and more things will start looking ugly.

On the other hand, modern JavaScript frameworks are more like 3D-printing a replacement piece: it takes more time, but the result is a lot cleaner and sturdier.

In other words, mastering the modern JavaScript stack is a bet that no matter where they start, most web apps will _probably_ end up on the right side of the divide sooner or later. So yes, it’s more work, but better safe than sorry.

### Week 0: JavaScript Basics

Unless you’ve a pure back-end developer, you probably know _some_ JavaScript. And even if you don’t, JavaScript’s C-like syntax will look somewhat familiar if you’re a PHP or Java developer.

But if JavaScript is a complete mystery to you, don’t despair. There are a lot of free resources out there that will quickly bring you up to speed. For example, a good place to start is [Codecademy’s JavaScript lessons](https://www.codecademy.com/learn/javascript).

### Week 1: Start With React

Now that you know basic JavaScript syntax, and that you understand why JavaScript apps can appear so complex, let’s talk specifics. Where should you start?

I believe the answer is [React](https://facebook.github.io/react/).



 [


](https://facebook.github.io/react/) 



React is a UI library created and open-sourced by Facebook. In other words, it takes care of that “data to HTML” step (the View Layer).

Now don’t get me wrong: I’m not telling you to pick React because it’s the _best_ library out there (because that’s highly subjective), but because it’s _pretty good_.

*   React might not be the _most_ popular library, but it’s _pretty_ popular.
*   React might not be the _most_ lightweight library, but it’s _pretty_ lightweight.
*   React might not be the _easiest_ to learn, but it’s _pretty_ easy to learn.
*   React might not be the _most_ elegant library, but it’s _pretty_ elegant.

In other words, React might not be the _best_ choice in every situation, but I believe it’s the _safest_. And believe me, “just when you’re starting out” is not the right time to take risks with your technological choices.

React will also introduce you to some useful concepts like components, application state, and stateless functions that will prove useful no matter which framework or libraries you end up using during your career.

Finally, React has a large ecosystem of other packages and libraries that work well with it. And its sheer popularity means you’ll be able to find a lot of help on sites like Stack Overflow.

I personally recommend the [React for Beginners](https://reactforbeginners.com/friend/STATEOFJS) course by Wes Bos. It’s how I learned React myself, and it’s just been completely overhauled with the latest React best practices.

### Should You “Learn JavaScript Properly” First?

If you’re a very methodical learner, you might want to get a good grasp of the fundamentals of JavaScript before you do anything else.

But for others, this feels like learning to swim by studying human anatomy and fluid dynamics. Sure, they both play a huge role in swimming, but it’s more fun to just jump in the pool!

There’s no right or wrong answer here, it all depends on your learning style. The truth is, most basic React tutorials will probably use only a tiny subset of JavaScript anyway, so it’s perfectly fine to focus on only what you need now and leave the rest for later.

This also applies to the JavaScript ecosystem at large. Don’t worry too much about understanding the ins and outs of things like Webpack or Babel for now. In fact React recently came out with its own little [command-line utility](https://github.com/facebookincubator/create-react-app) that lets you create apps with no build configuration whatsoever.

### Week 2: Your First React Project

Let’s assume you’ve just completed a React course. If you’re like me, two things are probably true:

*   You’ve already forgotten half of what you just learned.
*   You can’t wait to put the half you _do_ remember in practice.

I believe the best way to learn a framework or a language is to just use it. And personal projects are the perfect occasion to try out new technologies.

A personal project could be anything from a single page to a complex web app, but I feel like redesigning your own personal site can be a good middle ground. Plus, I know you’ve probably been putting it off for years!

Now I did say earlier that using single-page apps for static content was often overkill, but React actually has a secret weapon: [Gatsby](https://github.com/gatsbyjs/gatsby), a React static site generator that lets you “cheat” and get all the benefits of React without any of the downsides.














Here’s why Gatsby is a great way to get started with React:

*   A pre-configured Webpack, meaning you get all the benefits without any of the headaches.
*   Automatic routing based on your directory structure.
*   All HTML content is also generated server-side, so you get the best of both worlds.
*   Static content means no server and super-easy hosting on [GitHub Pages](https://pages.github.com/).

I used Gatsby for the [State Of JavaScript](http://stateofjs.com) site, and not having to worry about routing, build tool configuration, or server-side rendering saved me a ton of time.

### Week 3: Mastering ES6

In my own quest to learn React, I soon reached a point where I could get by copy-pasting code samples, but there was still a lot I didn’t understand.

Specifically, I was unfamiliar with all the new features introduced by [ES6](http://es6-features.org/#Constants), such as:

*   Arrow functions
*   Object destructuring
*   Classes
*   The spread operator

If you’re in the same boat, it might be time to take a couple days and learn ES6 properly. If you enjoyed the React for Beginners course, you might want to check out Wes’ excellent [ES6 for Everybody](https://es6.io/friend/stateofjs) videos.

Or if you prefer free resources, check out [Nicolas Bevacqua’s book, Practical ES6](https://ponyfoo.com/books/practical-es6/chapters).

A good exercise for mastering ES6 is going through an older codebase (such as the one you just created in Week 2!) and converting your code to ES6's shorter, terser syntax whenever possible.

### Week 4: Taking On State Management

As this point you should be capable of building a simple React front-end backed by static content.

But real web apps are not static: they need to get their data from somewhere, generally a database of some kind.

Now you could just send data to your individual components, but that quickly gets messy. For example, what if two components need to display the same piece of data? Or need to talk to each other?

This is where **State Management** comes in. Instead of storing your state (in other words, your data) bit by bit in each component, you store it in a single **global store** that then dispatches it to your React components:






















In the React world, the most popular state management library is Redux. Redux not only helps centralize your data, but it also enforces some strict protocols for manipulating this data.



 [


](http://redux.js.org/) 



You can think of Redux as a bank: you can’t go to your local branch and manually modify your account total (“here, let me just add a couple extra zeroes!”). Instead, you fill out a deposit form, then give it to a bank teller authorized to perform the action.

Similarly, Redux also won’t let you modify your global state directly. Instead, you pass _actions_ to _reducers_, special functions that perform the operation and return the new, updated state as a result.

The result of all this extra work is a highly standardized and maintainable data flow throughout your app, and access to tools such as the [Redux Devtools](https://github.com/gaearon/redux-devtools) to help you visualize it:














Once again you can stay with our friend Wes and learn Redux with [his Redux course](https://learnredux.com/), which is actually completely free!

Or, you can check out Redux creator Dan Abramov’s [video series on egghead.io](https://egghead.io/courses/getting-started-with-redux), which is free as well.

### Bonus Week 5: Building APIs With GraphQL

So far we’ve pretty much only talked about the client, and that’s only half the equation. And even without going into the whole Node ecosystem, it’s important to address one key aspect of any web app: how data gets from the server to the client.

It won’t come as a surprise that this, too, is rapidly changing, with [GraphQL](http://graphql.org) (yet another Facebook open-source project) emerging as a serious alternative to the traditional REST APIs.



 [


](http://graphql.org/) 



Whereas a REST API exposes multiple REST routes that each give you access to a predefined dataset (say, /api/posts, /api/comments, etc.), GraphQL exposes a single endpoint that lets the client _query for the data it needs_.

Think of it as making multiple trips to the butcher shop, bakery, and grocery store, versus giving someone a shopping list and sending them on their way to all three.

This new strategy becomes especially significant when you need to query multiple data sources. Just like with our shopping list example, you can now get data back from all these sources with a single request.

GraphQL has been picking up steam over the past year or so, with many projects (such [Gatsby](https://github.com/gatsbyjs/gatsby/), which we used in Week 2) planning on adopting it.

GraphQL itself is just a protocol, but its best implementation right now is probably the [Apollo](http://apollostack.com) library, which works well with Redux. There is still a lack of instructional material around GraphQL and Apollo, but hopefully the [Apollo documentation](http://dev.apollodata.com/) can help you get started.

### Beyond React & Co

I recommended you start with the React ecosystem because it’s a safe pick, but it’s by no means the only valid front-end stack. If you want to keep exploring, here are two recommendations:

#### Vue

[Vue](http://vuejs.org/) is a relatively new library but it’s growing at record speeds and has already been adopted by major companies, especially in China where it’s being used by the likes of Baidu and Alibaba (think Chinese Google and Chinese Amazon). And it’s also the official front-end layer of PHP framework [Laravel](https://laravel.com/).



 [


](http://vuejs.org/) 



Compared to React, some of its key selling points are:

*   Officially-maintained routing and state management libraries.
*   Focus on performance.
*   Lower learning curve thanks to using HTML-based templates.
*   Less boilerplate code.

As it stands, the two main things that still give React an edge over Vue are the size of the React ecosystem, and [React Native](https://facebook.github.io/react-native/) (more on this later). But I wouldn’t be surprised to see Vue catch up soon!

#### Elm

If Vue is the more approachable option, [Elm](http://elm-lang.org/) is the more cutting-edge one. Elm is not just a framework, but an entire new language that compiles down to JavaScript.

This brings multiple advantages, such as improved performance, enforced semantic versioning, and no runtime exceptions.

I haven’t tried Elm personally, but it’s been warmly recommended by friends and Elm users generally seem very happy with it (as shown by its [84% satisfaction rating](http://stateofjs.com/2016/flavors/) in the State Of JavaScript survey).

### Next Steps

By now you should have a pretty good grasp of the entire React front-end stack, and hopefully be reasonably productive with it.

That doesn’t mean you’re done though! This is only the beginning of your journey through the JavaScript ecosystem. Some of the other topics you’ll eventually run into include:

*   JavaScript on the server (Node, [Express](https://expressjs.com/)…)
*   JavaScript testing ([Jest](https://facebook.github.io/jest/), [Enzyme](https://github.com/airbnb/enzyme)…)
*   Build tools ([Webpack](https://webpack.github.io/)…)
*   Type systems ([TypeScript](https://www.typescriptlang.org/), [Flow](https://flowtype.org/)…)
*   Dealing with CSS in your JavaScript apps ([CSS Modules](https://github.com/css-modules/css-modules), [Styled Components](https://github.com/styled-components/styled-components)…)
*   JavaScript for mobile apps ([React Native](https://facebook.github.io/react-native/)…)
*   JavaScript for desktop apps ([Electron](http://electron.atom.io/)…)

I can’t cover all this here but don’t despair! The first step is always the hardest, and guess what: you’ve just taken it by reading this study plan.

And now that you understand how the various pieces of the ecosystem fit together, it’s just a matter of lining up what you want to learn next and knocking down a new technology each month.

### Keep In Touch

Did you find this study plan helpful? Which area of JavaScript would you like me to write about next? Leave a comment or [tweet](http://twitter.com/sachagreif) to let me know!

And if you want to know next time I publish a post, you can also [sign up to the State Of JavaScript mailing list](http://eepurl.com/ccyxCn).








