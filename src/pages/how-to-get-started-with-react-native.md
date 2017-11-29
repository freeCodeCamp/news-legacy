---
author: Spencer Carli
authorTwitter: https://twitter.com/spencer_carli
authorFacebook: none
title: "How to Get Started with React Native"
subTitle: "Before diving in I want to tell you a little story — I’ve been wanting to put together a simple website. Not a web app, just a simple web..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*4FUZ_X3XD3MgqsrpncPhTA.jpeg
url: https://medium.freecodecamp.org/how-to-get-started-with-react-native-8ef42f65160a
id: how-to-get-started-with-react-native-8ef42f65160a
date: 2017-08-09T22:48:18.745Z
tags: [
  "React Native",
  "React",
  "JavaScript",
  "Mobile App Development",
  "Programming"
]
---
# How to Get Started with React Native







![](https://cdn-images-1.medium.com/max/2000/1*4FUZ_X3XD3MgqsrpncPhTA.jpeg)







Before diving in I want to tell you a little story — I’ve been wanting to put together a simple website. Not a web app, just a simple website. I haven’t done that in a quite a while so I started looking around for how to do it…

… and then I found myself falling down a rabbit hole of increasing complexity, using different tools, and forgetting about what I actually wanted to build.

I ended up throwing everything I did away (it was useless anyway), signing up for a course, and just following along so I could get a sense of things before working on my project.

Most of my time is spent in the realm of React Native, and on the web I see many people in the same situation I was in. I email and chat with a few dozen people a week who are also interested in learning React Native. They’ve heard about it from a friend or a co-worker, seen it mentioned on Twitter, a client **insists** on using it for a project, or one of a dozen other reasons. Tech people are very diverse in how and why they learn about new things.

Some people are coming from a web development background, others have used tools like Cordova, and others are making the leap into the JavaScript world for the first time. Regardless of someone’s background many of the same things come up.

### **JavaScript Syntax Woes**

<pre name="2e4a" id="2e4a" class="graf graf--pre graf-after--h3">class App extends React.Component { ... }</pre>

Okay, I’ve seen classes before. No big deal — but in JavaScript?

<pre name="369c" id="369c" class="graf graf--pre graf-after--p">const { amount, purchaseDate } = this.props;</pre>

Huh, `const` and what’s with the curly braces on the left of the equals?

<pre name="cf3c" id="cf3c" class="graf graf--pre graf-after--p">export default App;  
export App;</pre>

What’s the difference, though?

Regardless of whether you’re familiar with JavaScript or not the use of ES2015/ES6 trips people up, a lot. And it’s **very** common in React Native. People who have used JavaScript often haven’t used this (relatively) new syntax. And people who are just learning JavaScript are often referencing tutorials that don’t use it . This leads towards more confusion.

Just know that what you see in Javascript tutorials still applies, as does what you’ve previously learned. ES2015/ES6 is simply an extension that makes it easier to do things (once you’re familiar with it).

To learn ES2015/ES6 check out this [no-fluff intro by Babel](https://babeljs.io/learn-es2015/). There’s also a [nice series](https://medium.freecodecamp.com/learn-es6-the-dope-way-i-const-let-var-ae828580472b) that will introduce and explain things to you.

#### Have a Basic Grasp on React

I know you want to dive right into React Native — it’s **awesome**. But if you want to minimize confusion, then I would suggest spending a bit of time understanding the basics of a React application.

There’s some terminology you’ll want to know and you’ll want to understand how you compose an application. React Native is an extension of React. It’s just a different client target that’s using React and its principles to create the application.

Getting a grasp on React is a good use of time. Looking through the [homepage](https://facebook.github.io/react/) alone will help you quite a bit. I also suggest you look through the [official tutorial](https://facebook.github.io/react/tutorial/tutorial.html) to get an even better grasp.

You don’t have to spend a ton of time here building a complex web application with React, just use this time getting familiar with the idea of React.

### Setting Up the Development Environment

You don’t need a special text editor. Whatever you’ve been using will likely work fine. Don’t stress about the editor right now.

Now if you want to build a React Native app, which works on iOS and Android, you’ve got to install all the development tools for those platforms, right?

Well, no. Not right now at least.

There’s a tool called [Expo](https://expo.io/) which takes care of all the native development environment stuff so you can focus on learning React Native and building apps with it.

But wait — it gets better! There’s a command line tool called [Create React Native App](https://github.com/react-community/create-react-native-app) which makes it even **easier** to get started with React Native. It’s backed by Expo which means all we have to do is install the command line interface and then we’re off to the React Native races!

Scan the QR code output from the Expo app and start hacking! The code will update on every file save.

### How do I…

Here’s a rapid fire, opinionated, list of tools to handle common needs:

*   Manage state: [Redux](http://redux.js.org/)
*   Work with a remote API: [Redux Saga](https://redux-saga.js.org/)
*   Navigation: [React Navigation](https://reactnavigation.org/)
*   Share the app: [Publish to Expo](https://docs.expo.io/versions/v17.0.0/guides/exp-cli.html)
*   Style the app: [React Native Extended StyleSheet](https://github.com/vitalets/react-native-extended-stylesheet)
*   A code editor: [Visual Studio Code](https://code.visualstudio.com/)

I hope that helps you get up and running with React Native a bit faster and with less confusion!

I put together a free video course that walks you through building a React Native app from setting up your development environment to publishing to Expo. Spend some time understanding ES2015, get a general sense of React, and dive into this course. It’s helped hundreds already and I hope it can help you too!

[**React Native Basics: Build a Currency Converter**  
_Learn to Use Navigation, Setup Redux, Design Components, Work with a Remote API, and More_learn.handlebarlabs.com](http://learn.handlebarlabs.com/p/react-native-basics-build-a-currency-converter "http://learn.handlebarlabs.com/p/react-native-basics-build-a-currency-converter")[](http://learn.handlebarlabs.com/p/react-native-basics-build-a-currency-converter)

If you enjoyed this be sure to recommend it and send it to someone who wants to learn React Native!








