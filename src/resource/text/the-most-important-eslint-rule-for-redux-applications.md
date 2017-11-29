---
author: Paul Matthew Jaworski
authorTwitter: https://twitter.com/onlypauljay
authorFacebook: https://facebook.com/10156875079455112
title: "The Most Important ESLint Rule for Redux Applications"
subTitle: "tl;dr Run yarn add --dev eslint-plugin-import and add "import/named": 2 to your .eslintrc rules to prevent accidentally importing constan..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*tGg0-DNVNOVfkoqI6KF3WQ.png
url: https://medium.freecodecamp.org/the-most-important-eslint-rule-for-redux-applications-c10f6aeff61d
id: the-most-important-eslint-rule-for-redux-applications-c10f6aeff61d
date: 2016-10-26T03:18:50.943Z
tags: [
  "JavaScript",
  "React",
  "Redux",
  "Eslint",
  "ES6"
]
---
# The Most Important ESLint Rule for Redux Applications



![](https://cdn-images-1.medium.com/max/1600/1*tGg0-DNVNOVfkoqI6KF3WQ.png)



**tl;dr** Run `yarn add --dev eslint-plugin-import` and add `"import/named": 2` to your `.eslintrc` rules to prevent accidentally importing constants that don’t exist to your reducers.

If you’re developing an application using [React](https://facebook.github.io/react/) and [Redux](http://redux.js.org/), your reducers probably look something like this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/29da73819a3a7ddad6023094b4e305d0?postId=c10f6aeff61d" data-media-id="29da73819a3a7ddad6023094b4e305d0" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F2061159%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





This example is pretty straight-forward. You’re only importing one constant up top.

Your file structure currently looks like this:

<pre name="bd5a" id="bd5a" class="graf graf--pre graf-after--p">.  
├── actions  
|   ├── constants.js  
|   └── index.js  
...omitted for brevity...  
├── reducers  
|   ├── accountReducer.js  
|   └── index.js  
...omitted for brevity...  
├── indes.js  
└── index.html</pre>

But as your codebase grows, your reducers will become more complicated. Organizing your files by type may no longer makes sense. So you decide to start organizing things by feature or route instead:

<pre name="46b3" id="46b3" class="graf graf--pre graf-after--p">.  
├── actions  
|   ├── constants.js  
|   └── index.js  
...omitted for brevity...  
├── reducers  
|   └── index.js  
├── routes  
|   ├── accounts  
|   |   ├── components  
|   |   ├── containers  
|   |   ├── module  
|   |   |   ├── actions.js  
|   |   |   ├── constants.js  
|   |   |   └── index.js (exports our reducer)  
|   |   ├── styles  
|   |   └── index.js  
|   └── index.js  
...omitted for brevity...  
├── indes.js  
└── index.html</pre>

Awesome! Now you don’t have 100 components in our main components folder anymore. Things are a bit neater, and easier to reason about.

There’s a problem with your refactor, though. Suddenly this `import` in your reducer is now referring to a non-existent path:

<pre name="8e42" id="8e42" class="graf graf--pre graf-after--p">import { RECEIVE_ACCOUNT_SUCCESS } from '../actions/constants';</pre>

You get an error about that path being unresolved immediately, so you change it:

<pre name="d49f" id="d49f" class="graf graf--pre graf-after--p">import { RECEIVE_ACCOUNT_SUCCESS } from './constants';</pre>

Cool. But what if you didn’t actually define that constant in your new file?

Now you’re about to experience one of the most frustrating bugs possible in a Redux app — importing an undefined constant into a reducer. Your tests will break, your app will break, and you’ll bash your head into your desk until you figure it out.

The problem is that this type of bug just fails silently. ES6 imports don’t care whether or not the variable you’re importing is defined. You’ll never see an error about it.

### **ESLint to the Rescue!**

The key to avoiding this type of bug is to installing `eslint-plugin-import`, then set one simple little rule in your `.eslintrc`:

<pre name="28a4" id="28a4" class="graf graf--pre graf-after--p">"import/named": 2</pre>

That’s it! Now you’ll get an error anytime you try to import an undefined constant into one of your reducers.

Edit: Unless you’re extending a base config that already includes it, you’ll also need to add `"import"` to the plugins section of your `.eslintrc`. Thanks to [Dave Mac](https://medium.com/@DveMac) for pointing that out!

Happy coding!








