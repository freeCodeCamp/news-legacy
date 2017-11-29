---
author: Adam Petrie
authorTwitter: https://twitter.com/adampetrie
authorFacebook: none
title: "How Toyota changed the way we approach code"
subTitle: "As developers we don’t work in vacuums. We’re constantly faced with constraints like time, budget, and resources. We’re influenced by pri..."
coverSrc: https://cdn-images-1.medium.com/max/1600/0*gBSCjU9-eEZ_HVtx.
url: https://medium.freecodecamp.org/how-toyota-changed-the-way-we-approach-code-f5ea78df025c
id: how-toyota-changed-the-way-we-approach-code-f5ea78df025c
date: 2016-09-13T06:12:58.635Z
tags: [
  "Software Development",
  "Programming",
  "Tech",
  "Startup",
  "Product Management"
]
---
# _How Toyota changed the way we approach code_



![](https://cdn-images-1.medium.com/max/1600/0*gBSCjU9-eEZ_HVtx.)

_Source:_ [_Genzoman_](http://genzoman.deviantart.com/art/Inspector-Gadget-and-Penny-Sketch-560864814) _via_ [_Deviantart_](http://img09.deviantart.net/a089/i/2010/329/2/b/inspector_gadget_study_by_vdvector-d33k9db.jpg)



As developers we don’t work in vacuums. We’re constantly faced with constraints like time, budget, and resources. We’re influenced by priorities outside of our teams that impact what we can work on, when, and for how long.

This is particularly the case when we’re trying to develop a reputation for customer support. Our ability to respond to the customer’s needs in a timely fashion can be the difference between a lucrative relationship and a missed opportunity.

Code quality is often the first casualty of working within these parameters. We make sacrifices to save time and effort. We take on technical debt with the mentality that once our deadline has been met, we’ll be able to revisit the code and clean up our mess.

The only problem with this approach is what looms just beyond the horizon: another deadline. Then another. Then another.

Before we know it we’ve built up significant technical debt. It starts inhibiting our ability to make changes or add new features. Our progress slows. Our product stagnates. The choices we were making to be successful start to become the cause of our failure.

Enough technical debt can leave even the best developers feeling helpless, and asking: where do we go from here?



![](https://cdn-images-1.medium.com/max/1600/0*lBs5n-U5Wv32YO7U.)

_Source:_ [_Realwire_](http://www.realwire.com/writeitfiles/InspGadget.jpeg)



### We Must Accept Our Reality

Our paramount goal is to deliver business value through development efforts. This means that getting the buy-in from stakeholders to devote a large chunk of time to paying down technical debt is often just not an option. The return on investment for large refactoring efforts is too low when the net result is not a tangible improvement to the product.

Larger scale technical improvements can, and should be tied to business value whenever possible; but this takes a lot of coordination and sometimes is just not feasible. Even in a best case scenario these efforts are usually tied to net new features and rarely do they render existing code obsolete such that our desires for better software are met.

We must let go of the notion that we will have time to re-visit our mistakes and correct them without the external pressures that drove us to make them in the first place.

With this in mind how can we turn our code around?



![](https://cdn-images-1.medium.com/max/1600/0*2Br5ja2m2PB_3TTZ.)

_Source:_ [_Behind the Voice Actors_](http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/shows/banner_385.jpg)



### A Case for Kaizen

A Kaizen approach to continual improvement highlights that changes should be small rather than radical. Kaizen suggests that ideas should come from the workers themselves with the hope that they will be easier to implement. Kaizen encourages ownership among the workforce, with the goal of improving motivation and team building. When it comes to improving our software, these tenets apply perfectly.

The word “Kaizen” is Japanese for “improvement.” It’s perhaps most famous for being [one of the two pillars of the Toyota Way](http://www.mckinsey.com/industries/automotive-and-assembly/our-insights/still-learning-from-toyota), and is a philosophy that is built on “continuous improvement.”

It’s best applied to six sigma and manufacturing, but it also has practical applications in the world of software. At Flipp, we use a similar set of words (“constant reinvention”) to describe one of our values.

While there are [specific systems for Kaizen workflow as applied to agile software development](http://agilean.blogs.com/business_productivity/2010/09/kanban-kaizen-scrum.html), we apply Kaizen as a philosophy.

### **_Refactor as You Go_**

Every time you open your editor you are given a chance to perform maintenance on your codebase. It doesn’t have to be glamorous or ground-breaking, but if with every change you strive to leave the code in a better state than you found it, the cumulative difference can be earth-shattering.

When it comes to improving code there are all kinds of different approaches and your success with any of them will vary depending on the code and your experience among other factors.

Below are some of the techniques I employ to try and constantly improve any codebase that I am a contributor to:

*   Address lint errors. Lint affects code readability and if you can’t read code you can’t hope to understand or alter it. Once you’ve completed a story, why not make a single commit to remove existing lint in a file that you’ve edited? It takes moments to accomplish but the impact can be significant.
*   Look for low hanging code smells. Without blowing the scope of a given ticket you can often address some obvious issues.
*   Excessive comments — When code comments describe what is happening rather than why, it is a pretty obvious sign that improvements can be made. Can the the code be written in a self documenting manner such that the comments are unnecessary?
*   Long methods — Shorter methods are easier to read, edit, test, and troubleshoot. That 75 liner needs your help.
*   Long parameter lists — It is a safe assumption that long parameter lists lead to increased complexity. Are all of those params really necessary? Can they be combined into an object? Limit parameter length to reduce complexity.
*   Duplicated code — Find ways to DRY it out. Can the duplication be extracted into a method? Is there an opportunity for a service object? Removing duplication aids readability and reduces opportunities for errors to be introduced.
*   Dead code — If you come across dead code, remove it. Now. Doing so will improve readability and reduce overall code size.
*   There are plenty of other code smells that we can be addressed as well. The more familiar you are with them the more capable you’ll be of identifying and fixing them in your own code.
*   Tests are code, too. Maintaining tests that are easy to read and accurately describe the desired functionality makes refactoring the code itself substantially easier. Is there a test case that can be added? Can the tests be more readable? Less brittle? Is a given test testing the right thing? Improved tests means improved code.

In general, ask yourself this question every time you make a change: what can I do to make this piece of code easier for the next person to read, edit, test, or troubleshoot?



![](https://cdn-images-1.medium.com/max/1600/0*nV7V43PUYGBy-m_X.)

_Source:_ [_Wikia_](http://vignette1.wikia.nocookie.net/video151/images/1/17/Inspector_Gadget_Netflix_Trailer/revision/latest?cb=20150325202318)



### **_When Do We Find the Time?_**

Obviously, the main challenge is the seeming lack of time to take these approaches during the regular workday. I’d suggest finding time during your normal routine, or to prioritize it during down time.

For example, provided you have good test coverage you could easily perform some basic refactoring within a class while addressing the acceptance criteria for a given ticket. (It does take some practice though.)

For larger items, I find time on slow Fridays to go back to or finally address some larger issues that have bothered me. I have also chipped away at large jobs over the course of weeks, if needed.

By adopting the right mindset you will find the opportunities you need without having to sacrifice so much time that these tasks require the full treatment a regular story would get.

If you improve the code, there will be less room for unintended side-effects from new development. Furthermore, you are more well versed in the code itself, so your ability to modify it will be improved moving forward as well.

### **_A Stitch In Time Saves Nine_**

The effort you put towards incremental improvement in your code compounds over time.

Through constantly refactoring you will dramatically increase your understanding of the codebase. When you understand the code well you are significantly more efficient at editing it.

Furthermore, your ability to estimate the complexity related to new features is improved and you are much stronger when it comes to onboarding new developers or helping your team.

Learning when, what, and how to refactor makes you a better developer. The techniques you will employ to effectively refactor are universal and will aid you over the course of your career.

Lastly, cleaning up your codebase makes you a better team member. It is almost a certainty that other people on your team have been caught or frustrated by the same things that you are coming across. If you find a way to address someone else’s pain point they will love you for it.



![](https://cdn-images-1.medium.com/max/1600/0*-fv7sAebIH79cz-N.)

_Source:_ [_Mental Floss_](http://images.mentalfloss.com/sites/default/files/styles/article_640x430/public/4532657169913856.jpeg)



### **_Building Software is Hard_**

Building good software on a tight schedule with limited resources is even harder, but it’s not impossible.

We can learn to accept the reality that we live in and focus incrementally improvement rather than writing perfect code. Then we’ll be better able to maintain the agility that we desperately need. That way, we can remain productive and our products can remain competitive.

Try taking an approach of continuous improvement to your daily development efforts. It will help you grow as a developer, improve your team’s morale, and ultimately increase your ability to deliver business value.











* * *







_I’m Adam, a software engineer at_ [_Flipp_](https://flipp.com/)_. I published another version of this at the_ [_Flipp engineering blog_](http://eng.flipp.com/a-kaizen-approach-to-code-quality/)_. Are you interested in reinventing the way people buy things? Check out our current_ [_job postings_](https://corp.flipp.com/jobs)_._








