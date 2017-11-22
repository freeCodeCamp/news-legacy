---
author: Gabriel Colombo
authorTwitter: https://twitter.com/gcolombo_
authorFacebook: https://facebook.com/596194503867473
title: "How to deal with technical debt and save your sanity"
subTitle: "When was the last time you found yourself working in a file containing 7,000+ lines of code?..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*s7y24bN2-3GcYzPsm2kgtQ.jpeg
url: https://medium.freecodecamp.org/tame-your-tech-debt-by-refactoring-more-often-fcc34dd24a33
id: tame-your-tech-debt-by-refactoring-more-often-fcc34dd24a33
date: 2017-07-29T19:57:11.322Z
tags: [
  "Web Development",
  "Programming",
  "Agile",
  "Startup",
  "Tech"
]
---
# How to deal with technical debt and save your sanity



![](https://cdn-images-1.medium.com/max/1600/1*s7y24bN2-3GcYzPsm2kgtQ.jpeg)

Picture by Dominic — [https://www.flickr.com/photos/dwxh/](https://www.flickr.com/photos/dwxh/)



When was the last time you found yourself working in a file containing 7,000+ lines of code?

I’m doing exactly that at this very moment. Refactoring some functionality from a legacy project along with writing this article.

Trust me, this sucks.

Unfortunately this is a reality for tons of developers. Projects grow out of control for various reasons. A particular change might not fit the current process or become ineffective in the long run.

These situations often lead to developers implementing temporary solutions to keep things running. There’s nothing wrong with that.

The problem starts to aggravate when these solutions get reused in different functionalities.

Re-using a solution without understanding the conditions under which it was developed, and what problem it was to solve, only increases your technical debt.

### What is technical debt

The following statement reflects my favorite definition of technical debt:

> A set of intentful trade-offs made during various development stages of an application.

But what does it mean?

When creating a new product, important decisions must happen at every stage. Each decision holds a particular weight that affects the development process. Trade-offs must occur.

_“Do we sacrifice coding standards so we can ship faster?”_

_“How do we create this feature without over-engineering? It doesn’t need a complete architecture right now, but we’re gonna have to improve it later on.”_

As we make more decisions, these trade-offs start to impact the development process. Maintenance problems arise and new features aren’t shipped as fast as they used to be.

This is the moment where motivation goes down the drain.

I worked on projects based on the following premise:

_“We’re going to switch to a different technology and everything will get discarded. For now, as long as it works, don’t worry too much about coding standards.”_

If it doesn’t sound too bad for you, let’s look at it from a different angle:

_“We’re all going to die at some point, so while you’re alive, do whatever you want and don’t worry about the consequences_.”

See what I mean?

Each project should have a set of standards, so that everyone knows how they should do things. **These standards should always matter while there’s people working on the project.**

### Why refactor?

Back when I was a junior developer at my first job, we were a team of 5, so everyone had to wear many hats at once.

I started developing both front and back-end with Laravel. It took time to learn the framework and understand the [PSRs](http://www.php-fig.org/psr/) (PHP Standards Recommendations), since I’d never dealt with it before. During this period, some of the code I wrote didn’t meet the standards.

Every Monday I went back and took a look at the code I wrote the week before and everything met the standards. My boss refactored weekly, and sometimes daily if something seemed outrageous.

This constant refactoring made the project’s structure somewhat unpredictable. Things did break from time to time, especially when working on different branches. Oh well, you know what they say:



![](https://cdn-images-1.medium.com/max/1600/1*1Wr_qMieyYWEYedXXilyKg.jpeg)

Just make sure you have stable infrastructure. ([source](http://mashable.com/2014/04/30/facebooks-new-mantra-move-fast-with-stability/))



So one day we were having lunch together and I decided to ask why he refactored our code so often. His answer was something like this:

_“If I don’t refactor, no one will._

_We have a very small team, but eventually it will grow._

_If you go to our codebase and find it messy and out of standards, you probably won’t take the time to make things right, you’ll simply add another if statement and move on, but if everything is neat and tidy, you’ll feel like doing something wrong by not following the standards”._

That conversation changed the way I see things, not only as a developer, but as an individual. For that I’m grateful.

James Q. Wilson and George L. Kelling explored the general concept of his explanation with the Broken Windows Theory.

[**Broken windows theory — Wikipedia**  
_The broken windows theory is a criminological theory of the norm-setting and signaling effect of urban disorder and…_en.wikipedia.org](https://en.wikipedia.org/wiki/Broken_windows_theory "https://en.wikipedia.org/wiki/Broken_windows_theory")[](https://en.wikipedia.org/wiki/Broken_windows_theory)

Their theory presents the following concept:

_An ordered and clean environment, one that is maintained, sends the signal that the area is monitored and that criminal behavior is not tolerated. Conversely, a disordered environment, one that is not maintained (broken windows, graffiti, excessive litter), sends the signal that the area is not monitored and that criminal behavior has little risk of detection._

This makes so much sense when related to programming. If no one cares, low quality code gets shipped and the project gets harder and harder to maintain in the long run.

Knowing this little backstory, let’s have a look at when to consider refactoring your code.

#### When to refactor your codebase

Constant refactor provides consistency, higher productivity and more control over the codebase.

You should consider refactoring your code if:

*   The project will continue to run for a long time.
*   You’re having maintenance problems. (Difficulty on finding and solving problems or making changes to a particular feature).
*   Certain functionalities are inconsistent (The same component behaves differently on different pages).
*   There’s too much code duplication.
*   Your functions have way too much business logic.

#### When to resist the urge to refactor

*   The project won’t grow and doesn’t need much maintenance.
*   You lack automated testing and isn’t planning on implementing them.
*   You wanna migrate to a different technology because it’s trendy.
*   When refactoring will consume too much time.

### Conclusion



![](https://cdn-images-1.medium.com/max/1600/1*2rK6gBMkTSyTEYZ6YHRrlQ.jpeg)

JUST DO IT!



Technical debt is a huge deal on any project, especially on legacy projects. The earlier we take action to keep it under control, higher the end quality will be.

Constant refactoring helps you reduce dependencies and increase maintainability. The codebase becomes easier to test and reason about.

As a starting point, try spotting some of the situations listed above and think about how to improve them. Here’s a great [article](https://medium.com/web-engineering-vox/how-to-write-solid-code-that-doesnt-suck-2a3416623d48) to help you get started.

Thanks for reading! I hope you enjoyed this article.

If it helps you in any way, please help me spread the word by sharing it :)

Oh! Also, say hello to me on twitter — [@gcolombo](https://twitter.com/gcolombo_)








