---
author: Tyler McGinnis
authorTwitter: https://twitter.com/tylermcginnis
authorFacebook: https://facebook.com/10153707086226430
title: "“create-react-app” and the future of creating React applications"
subTitle: "Over the past few years, I’ve been heavily involved with teaching people how to build applications with React.js. First there was React W..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*_TQM_EljJcHe3usAVTPjuw.jpeg
url: https://medium.freecodecamp.org/create-react-app-and-the-future-of-creating-react-applications-3c336f29bf1c
id: create-react-app-and-the-future-of-creating-react-applications-3c336f29bf1c
date: 2016-07-22T16:35:26.778Z
tags: [
  "JavaScript",
  "React",
  "Software Development",
  "Programming",
  "Web Development"
]
---
# “create-react-app” and the future of creating React applications







![](https://cdn-images-1.medium.com/max/2000/1*_TQM_EljJcHe3usAVTPjuw.jpeg)







Over the past few years, I’ve been heavily involved with teaching people how to build applications with React.js. First there was [React Week](https://reactweek.com/), held way back in March of 2015\. Then came [Egghead](https://egghead.io/courses/build-your-first-react-js-application). Then came [React.js Program](http://reactjsprogram.com).

Throughout all of these workshops, one thing was consistent: getting started with a React application was [pretty overwhelming](https://twitter.com/thomasfuchs/status/708675139253174273), for both beginners and senior developers alike.

Yes, we’re building better quality apps than we’ve ever built. Yes, even a few years ago we had nothing comparable to the tooling we have now. Yes, the end result is worth it . But that doesn’t make it any easier for someone who just wants to get to “Hello World.”

This is why I’m excited about _“create-react-app”_.

“[create-react-app](https://github.com/facebookincubator/create-react-app)” is an **official** command line interface (CLI) for building React applications with no build configuration.

To get started, do this:

<pre name="409d" id="409d" class="graf graf--pre graf-after--p">npm install -g create-react-app  

create-react-app Awesome</pre>

You’ll get output that looks like this:



![](https://cdn-images-1.medium.com/max/1600/1*iq495W8nN8QDHfepKL9uTQ.png)



This is huge! If you’re just getting started with React, you should probably take a break and just relish this moment.

Now, when you build a React app, you don’t _need_ to know the secret combination of Webpack and Babel. You can just focus on what you really care about: building the actual app.

If we **cd** into our **Awesome** project, we’ll have a folder structure that looks like this:

<pre name="6109" id="6109" class="graf graf--pre graf-after--p">Awesome/  
  README.md  
  index.html  
  favicon.ico  
  node_modules/  
  package.json  
  src/  
    App.css  
    App.js  
    index.css  
    index.js  
    logo.svg</pre>

and a very minimal package.json:

<pre name="0ea3" id="0ea3" class="graf graf--pre graf-after--p">{  
   “name”: “Awesome”,  
   “version”: “0.0.1”,  
   “devDependencies”: {  
     “react-scripts”: “0.1.0”  
   },  
   “dependencies”: {  
     “react”: “^15.2.1”,  
     “react-dom”: “^15.2.1”  
   },  
   “scripts”: {  
     “start”: “react-scripts start”,  
     “build”: “react-scripts build”,  
     “eject”: “react-scripts eject”  
   }  
}</pre>

You’ll notice you have three options: **start**, **build**, and **eject**.

**start** is what you’re probably already familiar with. It will start up a local development server on **localhost:3000**

**build** will prep your app for production by correctly bundling React in production mode (by setting NODE_ENV to “production”), minifying your code (with filename hashing), and outputting the result to a **build** folder.

**eject** is the interesting one. Our friends over on the React team are pretty smart, and they didn’t want you to be “locked in” to their specific configurations for the lifetime of this project. Because of this, you have the ability to “eject.”

**eject** will take all of the default configuration and build dependencies given to you by **create-react-app**, thenmove them into the project itself. This way your project can continue from exactly where it is. But now you’ll have the ability to modify any of the default configurations you were given by **create-react-app**.

The downside of **eject** is that once you run it, you can’t go back.

To see this in action, if you run **npm run eject**, your package.json file changes from the code above, to this:

<pre name="a144" id="a144" class="graf graf--pre graf-after--p">{  
  "name": "Awesome",  
  "version": "0.0.1",  
  "devDependencies": {  
    "autoprefixer": "6.3.7",  
    "babel-core": "6.10.4",  
    "babel-eslint": "6.1.2",  
    "babel-loader": "6.2.4",  
    "babel-plugin-syntax-trailing-function-commas": "6.8.0",  
    "babel-plugin-transform-class-properties": "6.10.2",  
    "babel-plugin-transform-object-rest-spread": "6.8.0",  
    "babel-plugin-transform-react-constant-elements": "6.9.1",  
    "babel-preset-es2015": "6.9.0",  
    "babel-preset-es2016": "6.11.3",  
    "babel-preset-react": "6.11.1",  
    "chalk": "1.1.3",  
    "cross-spawn": "4.0.0",  
    "css-loader": "0.23.1",  
    "eslint": "3.1.1",  
    "eslint-loader": "1.4.1",  
    "eslint-plugin-import": "1.10.3",  
    "eslint-plugin-react": "5.2.2",  
    "extract-text-webpack-plugin": "1.0.1",  
    "file-loader": "0.9.0",  
    "fs-extra": "^0.30.0",  
    "html-webpack-plugin": "2.22.0",  
    "json-loader": "0.5.4",  
    "opn": "4.0.2",  
    "postcss-loader": "0.9.1",  
    "rimraf": "2.5.3",  
    "style-loader": "0.13.1",  
    "url-loader": "0.5.7",  
    "webpack": "1.13.1",  
    "webpack-dev-server": "1.14.1"  
  },  
  "dependencies": {  
    "react": "^15.2.1",  
    "react-dom": "^15.2.1"  
  },  
  "scripts": {  
    "start": "node ./scripts/start.js",  
    "build": "node ./scripts/build.js"  
  }  
}</pre>

And our folder structure now looks like this:

<pre name="2c9b" id="2c9b" class="graf graf--pre graf-after--p">Awesome/  
  README.md  
  index.html  
  favicon.ico  
  node_modules/  
  package.json  
  src/  
    App.css  
    App.js  
    index.css  
    index.js  
    logo.svg  
 scripts/  
    build.js  
    start.js  
    openChrome.applescript  
 config/  
    babel.dev.js  
    babel.prod.js  
    eslint.js  
    webpack.config.dev.js  
    webpack.config.prod.js</pre>

So it’s just like we described above: all of the configuration settings that were abstracted from us earlier have now been moved into our project, so we have direct control over them from that point on.

There are some other great features, besides just the ability to “eject.” I think the main goal of this project was to take the “most common denominator” features, if you will, and tie them into a CLI.

Out of the box you get:

*   React, JSX, ES6 (and some ES+)
*   the ability to import CSS and images directly from JavaScript
*   CSS, which is automagically autoprefixed
*   a production build script as we talked about earlier
*   a development server, which will lint for common errors

All of which are pretty fundamental and universal for building a React app.

Now, with that said, you’ll notice there are some pretty fundamental pieces still missing.

It’s difficult to make so many decisions without trudging over the “opinionated” line. This project is opinionated, and with those opinions comes tradeoffs.

The README points out that there’s still no support for the following

*   testing
*   server Rendering
*   some experimental syntax extensions (like decorators)
*   CSS Modules
*   LESS or Sass
*   hot reloading of components

This might be a deal breaker for some of you. Many of those things have become standard for building a real “production grade” React app. However, if you’re the type of person who is doing Server Side Rendering along with decorators, you’re most likely not the target market here.

### Final thoughts

Overall, I’m excited for this project. It benefits the part of the community which desperately needed more guidelines and help getting started while not really affecting everyone else who already had their own process.

Do I think you should still learn Webpack and Babel? Absolutely. But now, that decision is up to you.

_Originally published at_ [_tylermcginnis.com_](https://tylermcginnis.com/create-react-app-and-the-future-of-creating-react-applications/)_._











* * *







Follow [**Tyler McGinnis**](https://twitter.com/tylermcginnis) on Twitter











* * *









[![](https://cdn-images-1.medium.com/max/1600/1*aO_lgSCLb34rKumYUGR-nA.png)](https://tylermcginnis.com)

tylermcginnis.com










