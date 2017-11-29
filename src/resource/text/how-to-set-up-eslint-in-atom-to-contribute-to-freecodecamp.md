---
author: Gilbert
authorTwitter: https://twitter.com/gilbertginsberg
authorFacebook: none
title: "How to set up ESLint in Atom so you can contribute to Open Source"
subTitle: "If you want to contribute to open source projects like Free Code Camp, first you’ll need to set up linting...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*9VCSFevPWwOvEfQV8HqnOg.jpeg
url: https://medium.freecodecamp.org/how-to-set-up-eslint-in-atom-to-contribute-to-freecodecamp-3467dee86e2c
id: how-to-set-up-eslint-in-atom-to-contribute-to-freecodecamp-3467dee86e2c
date: 2017-01-05T15:44:45.931Z
tags: [
  "JavaScript",
  "Open Source",
  "Learning To Code",
  "Programming",
  "Web Development"
]
---
# How to set up ESLint in Atom so you can contribute to Open Source







![](https://cdn-images-1.medium.com/max/2000/1*9VCSFevPWwOvEfQV8HqnOg.jpeg)

This isn’t about the lint you get from wool.







If you want to contribute to open source projects like Free Code Camp, first you’ll need to set up linting.

Most projects have their own style standards for JavaScript, and these will be automatically enforced by linting tools like [**ESLint**](http://eslint.org/)**.**

Let’s set up ESLint to run in [Atom](https://github.com/atom/atom), one of the most popular code editors.

Before we begin, here’s a quick heads-up that I make a few assumptions:

*   You’ve followed [Free Code Camp’s contribution guidelines](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/CONTRIBUTING.md#setup-linting) up to the part that reads **Setup Linting.**
*   And so you have installed the necessary **prerequisites** (particularly Node.js and npm).
*   You have at least a basic understanding of using the **command line** and **git**.
*   You’re using [Atom](https://atom.io/) as a text editor (although this article should be useful even if you’re not—you’d just need to check your [text editor’s](http://eslint.org/docs/user-guide/integrations) documentation for instructions regarding ESLint)

### **What exactly is linting?**

> “**Linting** is the process of running a program that will analyze code for potential errors.” — [Oded](https://stackoverflow.com/questions/8503559/what-is-linting) on Stack Overflow

And **ESLint** is a _linting tool_ specific to JavaScript code. You use ESLint to find problematic code (“errors”) written in JavaScript.

By the way, the “ES” in ESLint’s name comes from “ECMAScript,” which is the official name of the core JavaScript language.

Imagine ESLint as your grandma telling you how to live your life. She points out your errors and tells you to clean them up. You listen to grandma, because grandma knows.

These “errors” can be _objective_, which means they’re caused by code that doesn’t conform with, say, the syntax of JavaScript (or whatever programming language you’re linting). In this way, you’d say the linter is picking up syntax errors.

I say “objective errors” because these errors are inherent to JavaScript itself. If you leave out a semi-colon at the end of a variable declaration, that’s objectively an error according to the writers of JavaScript — even if it doesn’t stop your program from running (see [automatic semi-colon insertion](https://stackoverflow.com/questions/2846283/what-are-the-rules-for-javascripts-automatic-semicolon-insertion-asi)).

Or these errors can be _subjective_, which means _you’ve_ (not [Technical Committee 39](https://www.ecma-international.org/memento/TC39.htm), the standards body of ECMAScript) defined a set of rules your code should follow. These coding rules are commonly summed up in a **JavaScript style guide**, which is a document declaring a sort of coding best practices. Free Code Camp among many other software projects use style guides.

Airbnb’s [JavaScript style guide](https://github.com/airbnb/javascript) is one of the most popular for JavaScript developers, and Free Code Camp’s style guide is based off of it.

The purpose of following a style guide is to have a “writing standard” that developers of your project follow to keep code clean, simple, and consistent. This is similar to the concept of the [**AP Stylebook**](https://en.wikipedia.org/wiki/AP_Stylebook)journalists follow. The only difference is that the AP Stylebook is a style guide for English grammar, while Airbnb’s style guide is for JavaScript.

Once you’ve made clear how code should be written for your software project (meaning, you chose a style guide or created one of your own), you’re ready to set up your _linting rules_ for ESLint.

The way ESLint works is you tell it what rules (i.e., you take your style guide rules and convert them to _linting rules_) it should know about and what it should look out for, so ESLint can tap you on the shoulder and let you know when you write problematic code.

To tell ESLint about your linting rules, you configure them in a [config file](http://eslint.org/docs/user-guide/configuring) called`.eslintrc` or `eslintConfig` or `package.json`, which ESLint will look for and read automatically. And as you’re developing, ESLint will warn you of trouble code that doesn’t obey these rules so you can make revisions—as you’re coding. Which is like having grandma pair program with you.

Where [ESLint](http://eslint.org/docs/user-guide/configuring) shines is it is “_designed to be completely configurable, meaning you can turn off every rule and run only with basic syntax validation, or mix and match the bundled rules and your custom rules to make ESLint perfect for your project_.” In other words you can mix and match both objective and subjective rules.

You have [options](https://www.sitepoint.com/comparison-javascript-linting-tools/) when it comes to JavaScript linting tools, but in this article we focus on ESLint because Free Code Camp specifies it in its contribution guidelines. And it’s widely used elsewhere.

You also have [options](http://noeticforce.com/best-javascript-style-guide-for-maintainable-code) when it comes to JavaScript style guides. Airbnb’s is a good one to become familiar with because it has over [45,000 stars on GitHub](https://github.com/airbnb/javascript) at the time of this writing, and is growing in usage.

### **Setup Linting for Free Code Camp**

There are two ways to install ESLint: [globally and locally](https://www.npmjs.com/package/eslint). We’re going to focus on installing it **locally**, which means for your local working directory, i.e., your Free Code Camp cloned repository.

1: Open your Free Code Camp clone in your text editor (this assumes you have indeed cloned Free Code Camp to your computer)

2: In Terminal, `cd` (change directory) to your Free Code Camp directory

3: Type `npm install eslint --save-dev` into Terminal

4: In your Atom text editor, go to **Preferences** >> **Install >>** and type **linter-eslint** in the Search Packages search box



![](https://cdn-images-1.medium.com/max/1600/1*0xXyIhhGrdH-cj8iW7bd1w.png)



Note: You can also install Atom packages from the command line using the `apm` command. See [these instructions](https://github.com/AtomLinter/linter-eslint) for an example.

5: Install **linter-eslint** and **linter**.

6: In your Free Code Camp directory, close out of any `<filename>.js` files and and then re-open

And now the next time you write JavaScript you should see ESLint working!



![](https://cdn-images-1.medium.com/max/1600/1*Xfk62Q_lfzgcHIEUNKTedA.png)



Note: I’ve left out an important step: **configuring ESLint**, that is, the part where you customize ESLint and tell it about your linting rules. I did so because when you clone Free Code Camp’s repository, it _already_ comes with ESLint configuration files, for example, see `eslintrc` and `package.json`. And so you don’t need to do any configuration of your own.

In the event you work on a project where you need to configure ESLint, I point you to the following links:

*   [Configuring ESLint](http://eslint.org/docs/user-guide/configuring).
*   [Get Started with ESLint v1.0](http://devnull.guru/get-started-with-eslint/)
*   [npm, eslint](https://www.npmjs.com/package/eslint)
*   Airbnb’s [extensible shared ESLint config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

To wrap up:

1.  Linting is the process of checking for problematic code.
2.  ESLint is one such tool that performs linting.
3.  ESLint can be a great learning tool because it forces you to write clean, consistent code and develop good coding habits.
4.  Many open source projects ask you to run ESLint.
5.  You should have ESLint set up in your text editor to contribute to Free Code Camp.
6.  If you’re not using Atom, check your [text editor’s](http://eslint.org/docs/user-guide/integrations) docs for how to install ESLint.
7.  Stay the course.

If you have questions, you can tweet me at [@gilbertginsberg](https://twitter.com/gilbertginsberg) or find me at [GilbertIndex](https://goo.gl/DgxjEj).








