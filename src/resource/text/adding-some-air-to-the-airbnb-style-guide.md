---
author: Alex Moldovan
authorTwitter: https://twitter.com/alexnmoldovan
authorFacebook: https://facebook.com/1152981894719728
title: "Breathing air into AirBnB’s JavaScript Style Guide"
subTitle: "No one sets out to write ugly, inconsistently-styled code. It just sort of happens...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*9nMBMt-OugnruBr_M-WuEQ.png
url: https://medium.freecodecamp.org/adding-some-air-to-the-airbnb-style-guide-3df40e31c57a
id: adding-some-air-to-the-airbnb-style-guide-3df40e31c57a
date: 2016-08-11T21:24:07.644Z
tags: [
  "JavaScript",
  "React",
  "Programming",
  "Web Development",
  "Software Development"
]
---
# Breathing air into AirBnB’s JavaScript Style Guide



![](https://cdn-images-1.medium.com/max/1600/1*9nMBMt-OugnruBr_M-WuEQ.png)

Image courtesy of [https://xkcd.com/](https://xkcd.com/)



No one sets out to write ugly, inconsistently-styled code. It just sort of happens.

Even as the only developer on a project, the more time that passes and the more code you crank out, the harder it gets harder to maintain a consistent code style.

That’s why you need a style guide.

I’ve experienced first-hand how much more teams can accomplish after adopting a style guide.

You no longer need to make little style judgement calls throughout the day. Just consult the style guide.

And when a teammate needs to maintain your code, it’s clean code that they can read and understand.

Adopting a style guide is one of the easiest things you can do to boost your code’s maintainability — which ultimately boosts your team’s productivity. So let’s explore the most popular way to do this.

#### Enter AirBnB + ESLint

The JavaScript ecosystem offers a wide variety of [tools](https://www.sitepoint.com/comparison-javascript-linting-tools/) and [style guides](http://noeticforce.com/best-javascript-style-guide-for-maintainable-code). This should surprise no one. with JavaScript, we’ve come to expect a wide variety of everything.

But as the ecosystem matures, experienced developers start to yearn for “the standard way” of doing things that more solidified ecosystems offer.

You’re of course welcome to spend a few days exploring the JavaScript ecosystem and comparing different tools, but I’ll try and save you some time**:** [**ESLint**](http://eslint.org/) **is the most popular JavaScript linting tool, and** [**AirBnB’s style guide**](https://github.com/airbnb/javascript) **is the most widely-used style guide.**

For more details on adding ESLint to your project checkout [this link](http://eslint.org/docs/user-guide/configuring).

Once you have that squared away, you can configure your project to enforce AirBnB’s style guide by installing their npm package:

<pre name="fdff" id="fdff" class="graf graf--pre graf-after--p">npm install --save-dev eslint-config-airbnb</pre>

Add the following line in your _.eslintrc_ file

<pre name="2179" id="2179" class="graf graf--pre graf-after--p">"extends": "airbnb"</pre>

And voilà! Your code is now subject the rules of the most popular JavaScript style guide. Happy coding!

#### Standards are overrated

While I agree with most of the rules in the style guide, here is a list of overrides that I compiled. This is what the _.eslintrc_ files in projects’ root folders look like:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9ae8799913b24adaa118e14e57a84134?postId=3df40e31c57a" data-media-id="9ae8799913b24adaa118e14e57a84134" allowfullscreen="" frameborder="0"></iframe>





Let me explain the reasoning behind each of these customizations in detail.

#### Indentation

The tabs VS spaces war can potentially ruin friendships, and possibly even sabotage romantic relationships.





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/6b753341dc57e39f534315c648060739?postId=3df40e31c57a" data-media-id="6b753341dc57e39f534315c648060739" allowfullscreen="" frameborder="0"></iframe>





I prefer to indent my code 4 spaces, even though a vast majority of configs out there prefer an indentation of 2.

My reasoning is that in order to write clean code, larger indentations give you a better visual representation of how deep the nesting is in your functions, and how many different branches you have.

You definitely shouldn’t be nesting code deeper than 3 or 4 layers inside a JavaScript file (it’s a code smell). So having 4 spaces offers you better readability, while preserving other rules like keeping your code within a 80 or 120 character-per-line limit.

Also, indentation is one of the rules that breathes more “air” into AirBnB’s default style guide. As a result, your code doesn’t crowd on the left side of editor so badly.

#### Spacing

This is probably the biggest deviation from the standard. I hate crowded code. I started writing code with extra space padding more than 2 years ago, and I never looked back.

So what do those rules mean? Well, have a look at the following code. It technically respects the rules of AirBnB’s official style guide.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/8d3a83778cb9cd6213f4d6a477322c4d?postId=3df40e31c57a" data-media-id="8d3a83778cb9cd6213f4d6a477322c4d" allowfullscreen="" frameborder="0"></iframe>





I know, it’s a bit confusing. I tried looking for a medium complexity function from one of my codebases, but I had to obfuscate a lot of it, so don’t try to understand the logic behind the code (because there is none). Just try to read it. Try to focus, for example, on variables that are used in multiple places, when parameters are passed to functions, and where the function calls are.

Now have a look at the same code, but with the extra spacing rules applied:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/74f540d07eed62eba0daf68577912dd3?postId=3df40e31c57a" data-media-id="74f540d07eed62eba0daf68577912dd3" allowfullscreen="" frameborder="0"></iframe>





I’m not saying that it’s highly readable now, but you can more easily identify where you have parameters sent to functions — especially around the curried functions.

Also check the difference between the 2- and the 4-space indentation in the two examples.

At first, these techniques might not seem like a big improvement. I encourage you to give them a try. I think you’ll quickly experience what a difference this makes.

#### Quote wars

While the first two categories had some clear arguments, I must say that the **single** vs **double** quotes decision is a highly subjective one.

My preference for double quotes probably comes from working a lot with React, where you mix JavaScript with [JSX tags](https://facebook.github.io/react/docs/jsx-in-depth.html). Since JSX is closer to HTML, the tendency is to add attributes between double quotes. So I started using double quotes for everything, just for consistency.

One thing I’ve noticed is that you’re much more likely to need to write a single quote inside a string of English text than a double quote (“I’m here”, “Don’t do that”). So double quotes might be more convenient in these cases.

#### Code Arrangement

The official AirBnB style guide has a “no-use-before-define” rule, which throws an error if you try to use something before you define it. This is a good rule — especially for variables — because you should not rely on hoisting, and you should keep the [temporal dead zone](http://jsrocks.org/2015/01/temporal-dead-zone-tdz-demystified/) problem in mind when you use let and const.

I prefer to allow functions be used before they’re defined. The reason is simple: most of the time, you will break your functions down into smaller sub-functions. However, the “no-use-before-define” rule will tell you to put these sub-functions **before** the original function.

But your sub-functions are there to abstract parts of the algorithm. They should not bother you when you open a file containing your **top-level function**, which you use outside of the file.

Of course, this is debatable. But it does impact debugging. When you iterate over some code, and you find a call to a different function, ideally you should be able to look below it, or — worst case scenario — scroll down through a few sub-functions and find what you’re looking for.

This, in combination with AirBnB’s [function _declaration_ against function _expression_](http://eslint.org/docs/rules/func-style)rule,can give you the freedom to structure your modules or function libraries as you like, while ensuring you don’t accidentally call an uninitialized function.

#### Const over let

Here’s another small deviation from the style guide. You can notice in my config:

<pre name="1db2" id="1db2" class="graf graf--pre graf-after--p">"prefer-const": 1</pre>

In the AirBnB config, this is set to **2,** which stands for _error_, while **1** stands for _warning_.

Now, if you don’t understand why you should prefer const over let, you can read more about it [here](https://medium.freecodecamp.com/start-writing-modern-javascript-code-f98eccb4841#7d2a) and [here](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.4ufsdmvkl).

Regarding my deviation, I prefer a warning, because there are situations in which you do not change the assignment of a variable, but you change a lot of its content.

Have a look at this code:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/1eda4934648b69a4d8902d44c124f889?postId=3df40e31c57a" data-media-id="1eda4934648b69a4d8902d44c124f889" allowfullscreen="" frameborder="0"></iframe>





The rules will tell you that this is right — _hash_ should be _const_ because it is not re-assigned. But this never really made sense to me. I should be aware that there’s a great deal of change happening inside _hash._

So I will use _let_ to signal the fact that the variable is subject to change. _const_ and _let_ should lend more meaning to your variables, and should not hide the truth in any way.

#### Code Complexity

You can [cyclomatic code complexity](https://reactjsnews.com/composing-components) to compute the complexity of each of your functions.

Deciding on a max level of complexity is tricky. Ideally it should be as low as possible, meaning that your functions should have at most 1 or 2 branching possibilities.

It makes sense to have that number as low as possible from the perspective of code reuse and testing. But there are times when it’s harder to break functions down. That’s why I see the complexity more as a warning then as an error.

The important thing here is to limit the number of functions that reach that maximum complexity limit. Even in a medium-sized codebase, I wouldn’t like to see more than 10 functions that break this rule. So I picked the maximum value of 5, in order to highlight those functions. I’ll target these functions when I have time to do some refactoring.

Complexity can be solved in multiple ways. Refactoring into smaller functions is the obvious one. Another option is transforming your _switch_ statements into mapping assignments.

We had several debates inside our team, and we ended up using 5 as a reference value for the max complexity rule. But in some cases we go down to 4, just to be sure that we are writing clean and simple code.

#### A note on React

Because I work a lot with React, and the AirBnB config also contains a hefty number of rules in that area, I wanted to include some of my preferences on these here, too.

The main goal of my React overrides is to limit the differentiation between regular JavaScript modules and React components, as well as between JavaScript code and JSX. That’s why I choose similar indentation and the use of double quotes for all JSX attributes. And that is why I prefer to leave all my files with the .js extension.

Finally, related to [class vs factory components](https://reactjsnews.com/composing-components), I tend to prefer the latter. I see no advantage to using classes at this point. I may write a future post expanding on why I feel this way.











* * *







That’s about it! I hope you enjoyed reading this. I welcome your feedback below.

If you liked the article, click on the green heart below, and I will know my efforts are not in vain.








