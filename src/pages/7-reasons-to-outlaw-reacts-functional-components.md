---
author: Cory House
authorTwitter: https://twitter.com/housecor
authorFacebook: none
title: "7 Reasons to Outlaw React’s Functional Components"
subTitle: "Are React’s Functional Components Worth The Cost?"
coverSrc: https://cdn-images-1.medium.com/max/1600/1*nywxB5PdmQq8zmB_TnMTbQ.jpeg
url: https://medium.freecodecamp.org/7-reasons-to-outlaw-reacts-functional-components-ff5b5ae09b7c
id: 7-reasons-to-outlaw-reacts-functional-components-ff5b5ae09b7c
date: 2017-10-10T14:07:29.438Z
tags: [
  "React",
  "JavaScript",
  "React Native",
  "Web Development",
  "Programming"
]
---
# 7 Reasons to Outlaw React’s Functional Components

## Are React’s Functional Components Worth The Cost?



![](https://cdn-images-1.medium.com/max/1600/1*nywxB5PdmQq8zmB_TnMTbQ.jpeg)

Stop, collaborate, and listen.



I’m spending the week consulting a team in Seattle to help [accelerate their transition to React](http://reactjsconsulting.com). Today, we discussed the [8 key decisions to make to standardize React development](https://medium.freecodecamp.org/8-key-react-component-decisions-cc965db11594).

I shared a few [reasons I’m a fan of functional components](https://medium.freecodecamp.org/8-key-react-component-decisions-cc965db11594). One response surprised me:

> “Let’s forbid using functional components.”

Woah, really? We discussed the issue at length. Here’s why.

#### 1\. Conversion Hassle

Functional components don’t support state, refs, or lifecycle methods. They can’t extend PureComponent either. Sometimes, you’ll create a functional component only to realize that you need one of these class-only features later. In these situations, it’s a hassle to manually convert to a function into a class.

**Edit**: Instead of converting to a class, you can enhance existing functional with lifecycle methods, state, and more via [recompose](https://github.com/acdlite/recompose).

#### 2\. Messy Diffs

After you’ve finished the conversion, the diff is noisy. Even a trivial one-line change results in a multi-line code review.

Here’s an example of converting a functional component to a class so that it can be declared a PureComponent.



![](https://cdn-images-1.medium.com/max/1600/1*J4LLOPCNJLPf2mqndgH6Jg.png)



If this component were declared as a class from the start, the true intent of the commit would be crystal clear — it would require a 4 character change:



![](https://cdn-images-1.medium.com/max/1600/1*udhxm4DiyVhJucx_aCh8Gg.png)



Conversion obscures the component’s history by creating the illusion that the component has been largely rewritten when in fact you may have made a very trivial change. The person who does the conversion will be “blamed” for writing many lines that they merely changed for conversion reasons.

#### 3\. Minor Signal to Noise Differences

Compare a minimal class to a function, and the differences are minor. Remember, constructors are optional without state.



![](https://cdn-images-1.medium.com/max/1600/1*RBAZms126DhaLb-ymPkkJg.png)

A class without default props is only 3 lines longer (due to explicit render and destructuring on separate line). Without destructuring a class is only 2 lines longer.



**Correction**: Oops! I forgot the functional style can be a one-liner with a simple arrow function:

<pre name="4e57" id="4e57" class="graf graf--pre graf-after--p">const Hello = ({greeting, firstName}) => </pre>

#### 4\. Inconsistency

Function and class components look different. This inconsistency can slow developers down as they shift between the two styles.

*   In classes, you say **this.props**, in functions, you say **props**.
*   In classes, you declare a renderfunction. In functions, you don’t.
*   In classes, you destructure at the top of render. In functions, you destructure in the function’s argument list.
*   In classes, you declare default props below the component (or via class properties if you’re willing to use a [stage-3 feature](https://tc39.github.io/proposal-class-fields/)). In functions, you declare default props using default arguments.

These subtle differences add friction for new devs, and the context switching leads to mistakes for experienced devs too.

#### 5\. Classes Are Familiar to OO Developers

Yes, JavaScript’s classes are certainly different than Java and C# classes. But anyone working in OO-land on the server is likely to find this simple rule easy to understand:

> “A React component is a class that extends React.Component.”

Adding a nuanced conversation about how and when to use plain functions adds confusion for OO devs who are already accustomed to being required to use classes for everything. Now I’m not saying this mindset is healthy — the React community fosters more of a functional mindset. But, one must acknowledge that functional components create mental-model friction for OO devs.

#### 6\. No Performance Benefits, Yet

While the React team has alluded to the chance that functional components will be faster or more efficient in the future, that’s not the case yet. So one could argue functional components are currently a premature optimization.

And since functional components require conversion to a class to implement today’s performance tweaks like shouldComponentUpdate and PureComponent, they’re actually more of a hassle to optimize for performance today.

#### 7\. Yet another decision

Finally, JavaScript developers already have a [ridiculous number of decisions to make](https://medium.freecodecamp.org/you-need-a-javascript-starter-kit-ff12d90ed8c5). Banning functional components eliminates a decision: Always create a class.

### Summary

[I’m still a fan of functional components](https://medium.freecodecamp.org/8-key-react-component-decisions-cc965db11594). But now I recognize they’re not necessarily a slam dunk for everyone. So, as usual, consider the tradeoffs. 👍

See other downsides or benefits? Chime in below.

### Looking for More on React? ⚛️

I’ve authored [multiple React and JavaScript courses](http://bit.ly/psauthorpageimmutablepost) on Pluralsight ([free trial](http://bit.ly/pstrialimmutablepost)).



[![](https://cdn-images-1.medium.com/max/1600/1*BkPc3o2d2bz0YEO7z5C2JQ.png)](https://www.pluralsight.com/authors/cory-house)













* * *







[Cory House](https://twitter.com/housecor) is the author of [multiple courses on JavaScript, React, clean code, .NET, and more on Pluralsight](http://pluralsight.com/author/cory-house). He is principal consultant at [reactjsconsulting.com](http://www.reactjsconsulting.com), a Software Architect at VinSolutions, a Microsoft MVP, and trains software developers internationally on software practices like front-end development and clean coding. Cory tweets about JavaScript and front-end development on Twitter as [@housecor](http://www.twitter.com/housecor).








