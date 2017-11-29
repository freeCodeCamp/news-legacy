---
author: Artem Sapegin
authorTwitter: https://twitter.com/iamsapegin
authorFacebook: https://facebook.com/10153607662248514
title: "Why robots should format our code for us"
subTitle: "I used to think that a personal code style is a good thing for a programmer. It shows you are a mature developer who knows what good code..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*U-jFxHWyzxtZTGtS6Q2CQQ.jpeg
url: https://medium.freecodecamp.org/why-robots-should-format-our-code-159fd06d17f7
id: why-robots-should-format-our-code-159fd06d17f7
date: 2017-10-08T14:00:58.507Z
tags: [
  "JavaScript",
  "Programming",
  "Productivity",
  "Self Improvement",
  "Tech"
]
---
# Why robots should format our code for us







![](https://cdn-images-1.medium.com/max/2000/1*U-jFxHWyzxtZTGtS6Q2CQQ.jpeg)

Photo by [yours truly](http://unsplash.com/photos/b18TRXc8UPQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)







I used to think that a personal code style is a good thing for a programmer. It shows you are a mature developer who knows what good code should look like.

My college professors told me that they knew when some of my classmates used my code in their work because of the different code style. Now I think it was because my code was at least somehow formatted and everyone else’s was a mess.

Since then I’ve spent a lot of time arguing code style and configuring tools to enforce it. It’s time for a change.

#### A few examples

After reading the [The Programmers’ Stone](https://www.datapacrat.com/Opinion/Reciprocality/r0/index.html) I put braces like this for a long time:

    if (food === 'pizza'){    alert('Pizza ;-)');  }else{      alert('Not pizza ;-(');}

But then I realized that I may be the only one who did it that way in the front-end community. Everybody else uses this style:

    if (food === 'pizza') {    alert('Pizza ;-)');  } else {    alert('Not pizza ;-(');}

Or this:

    if (food === 'pizza') {    alert('Pizza ;-)');  }else {      alert('Not pizza ;-(');}

So I’ve changed my style to the last one.

I like this style for chaining very much:

    function foo(items) {  return items    .filter(item => item.checked)    .map(item => item.value)  ;}

I see the same refactoring benefits as for [trailing commas](https://medium.com/@nikgraf/why-you-should-enforce-dangling-commas-for-multiline-statements-d034c98e36f8):

    const food = [  'pizza',  'burger',  'pasta',]

But I’m probably even more lonely with this style than I was with braces. Nobody would ever send me code for review with this style, no linter can enforce it. So I have to stop using it too to be closer to the real world.

There’s another thing that nobody else does except me . I always put two spaces before end-of-the-line comment:

    const volume = 200;  // ml

I thought it improves readability. But it actually makes the codebase inconsistent because other developers only put one space.

#### What JavaScript developers do

Unfortunately JavaScript has no official code style. There are a few [popular code styles](http://blog.sapegin.me/all/javascript-code-styles) like [Airbnb](http://airbnb.io/javascript/) or [Standard](https://standardjs.com/). You could use them to make your code look familiar to other developers.

You could use [ESLint](https://eslint.org/) to enforce code style and even autoformat code in some cases. But it won’t make your code base 100% consistent. ESLint with Airbnb config would normalize only my first example and allow inconsistency in the other two examples.

#### What JavaScript developers should do

Some languages have strict code styles and tools to format code. So developers don’t waste time arguing code style. Look at [Refmt](https://reasonml.github.io/guide/what-and-why) for Reason and [Rustfmt](https://github.com/rust-lang-nursery/rustfmt) for Rust.

It looks like JavaScript finally [has a solution](http://jlongster.com/A-Prettier-Formatter) to this problem. A new tool called [Prettier](https://github.com/prettier/prettier) will reformat your code using its own rules. It completely ignores how the code was written in the first place.

Let’s [try Prettier](https://prettier.github.io/prettier/) on my examples:

    if (food === 'pizza') {  alert('Pizza ;-)');} else {  alert('Not pizza ;-(');}function foo(items) {  return items.filter(item => item.checked).map(item => item.value);}const volume = 200; // ml

You can disagree with this style. For example I don’t like the `else` placement and writing function chains in one line is questionable. But I see huge benefits in adopting Prettier:

*   Almost no decisions to make — Prettier has few options.
*   No arguing about particular rules if you’re working in a team.
*   No need to learn your project’s code style for contributors.
*   No need to fix style issues reported by ESLint.
*   Possible to set up autoformat on file save.

#### Conclusion

Prettier has been already adopted by [some popular projects](https://github.com/prettier/prettier/issues/1351) like React and Babel. And I’m starting to [convert all my projects](https://github.com/tamiadev/eslint-config-tamia) from my custom code style to Prettier. I will recommend it instead of the Airbnb code style.

At first I had a lot of “Ugh, that’s ugly” moments with Prettier. But when I think that I’d have to, for example, manually reformat JSX code from a single-line to multi-line when I add another prop and it doesn’t fit on one line — I realize that it’s totally worth it.



![Prettier](https://cdn-images-1.medium.com/max/1600/0*spj1CsmHiP8l4C5h.gif)

Prettier is formatting your code when you save a file



Read how to [set up Prettier](https://survivejs.com/maintenance/code-quality/code-formatting/) in your project.

P. S. [Have a look at my new tool](https://github.com/sapegin/mrm) that will simplify adding ESLint, Prettier, and other tools to your project, as well as keeping their configs in sync.








