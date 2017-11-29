---
author: Jonathan Z. White
authorTwitter: https://twitter.com/JonathanZWhite
authorFacebook: none
title: "Cracking the front-end interview"
subTitle: "Technical front-end interviews are difficult. That’s a fact. Not only do you need to have a solid grasp of computer science fundamentals,..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*fM15DmX9fOiTyFftaxRbPg.png
url: https://medium.freecodecamp.org/cracking-the-front-end-interview-9a34cd46237
id: cracking-the-front-end-interview-9a34cd46237
date: 2016-05-03T13:16:32.933Z
tags: [
  "Front End Development",
  "Web Development",
  "JavaScript",
  "Learning",
  "Tech"
]
---
# Cracking the front-end interview







![](https://cdn-images-1.medium.com/max/2000/1*fM15DmX9fOiTyFftaxRbPg.png)

By [@jonathanzwhite](https://twitter.com/JonathanZWhite)







Technical front-end interviews are difficult. That’s a fact. Not only do you need to have a solid grasp of computer science fundamentals, but also an understanding of things like web performance, build systems, and CSS layout engines.

While there are resources out there, I’ve found that there are only a few _complete_ guides for helping you prepare for a front-end interview. So I decided to write a topic by topic outline that will hopefully help you ace your next interview.

#### Before the interview

So before your interview, ask your recruiter for the format of the interview. Some interviews might revolve around a whiteboard while others might use an online text editor like CoderPad. It’s important to know so you can practice in the environment that your interview is going to take place in.

Also, ask your recruiter for tips on what topics to focus on when preparing. The reason behind this is because in addition to front-end specific question, some companies will ask you traditional computer science questions about topics like searching and sorting algorithms.

### Front-end concepts

HTML and CSS, Javascript, and Javascript design patterns are the key concepts that you will be tested on during an interview. Go through the list and make sure you are comfortable with each topic.



![](https://cdn-images-1.medium.com/max/1600/1*Cx4fcxgCFGgI3TyL43Ed1g.png)



HTML and CSS is like the bread and butter of front-end development. During interviews, you will most likely be asked questions about the nuances of HTML and CSS. Also, be prepared to be asked to code up a layout based on a mockup.

Just in case you need an HTML and CSS refresher, here are a few basic concepts to look over.

*   [CSS animations](https://css-tricks.com/almanac/properties/a/animation/)
*   [CSS sprites](https://css-tricks.com/css-sprites/)
*   [Pseudo classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
*   [Grid systems](http://www.sitepoint.com/understanding-css-grid-systems/)
*   [Semantic markup](http://www.hongkiat.com/blog/html-5-semantics/)

In addition to these concepts, know about CSS preprocessors like [SASS](http://sass-lang.com/guide) or [LESS](http://lesscss.org/) and their benefits. Also be familiar with CSS naming conventions like [BEM and OOCSS](http://clubmate.fi/oocss-acss-bem-smacss-what-are-they-what-should-i-use/).

Another important point is that interviewers look for candidates who champion CSS best practices. As a good reference, this [guide](https://medium.com/@fat/mediums-css-is-actually-pretty-fucking-good-b8e2a6c78b06#.7i1ey8j4g) written by a front-end at Medium provides insight into how Medium iterated to their current CSS architecture.

I mentioned earlier that some interviewers will ask you to recreate layouts in HTML and CSS. Practice doing so in a playground like [CodePen](http://codepen.io/). Check out [Dribbble](https://dribbble.com/) since it has lots of simple yet nice designs that would be fun to recreate.

Finally, as front-ends, we are so used to making changes in our editor and then verifying the change in our browser. Often times during interviews, you won’t have this luxury. When you’re preparing for your interview, try code most of your layout _without_ looking at the result till the end.











* * *









![](https://cdn-images-1.medium.com/max/1600/1*qyu6vCvAfXXG_M88izPm9Q.png)



If HTML and CSS are the bread and butter of front-end development, then Javascript is the knife. Companies will spend a good amount of time during your interview testing your knowledge of Javascript. A lot of the questions will revolve around the following concepts.

*   [Prototypal inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
*   [Scoping](https://spin.atomicobject.com/2014/10/20/javascript-scope-closures/)
*   [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
*   [The event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
*   [Event bubbling](http://javascript.info/tutorial/bubbling-and-capturing)
*   [Apply, call, and bind](http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/)
*   [Callbacks and promises](https://www.quora.com/Whats-the-difference-between-a-promise-and-a-callback-in-Javascript)
*   [Variable and function hoisting](http://adripofjavascript.com/blog/drips/variable-and-function-hoisting)
*   [Currying](http://www.sitepoint.com/currying-in-functional-javascript/)

When given a Javascript question, figure out which of these concepts you’re being tested on and it’ll be much easier to figure out the right solution. If you feel confident of your Javascript prowess, test your knowledge [here](https://www.toptal.com/javascript/interview-questions), [here](https://www.codementor.io/javascript/tutorial/21-essential-javascript-tech-interview-practice-questions-answers), and [here](http://career.guru99.com/top-85-javascript-interview-questions/).











* * *









![](https://cdn-images-1.medium.com/max/1600/1*ZqpnG0cUVPRicofbwL8MHA.png)



Design patterns in Javascript provide you with repeatable solutions to common problems. These are a few of the design patterns that are important to know.

*   [Decorator](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#decoratorpatternjavascript)
*   [Factory](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#factorypatternjavascript)
*   [Singleton](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript)
*   [Revealing module](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript)
*   [Facade](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#facadepatternjavascript)
*   [Observer](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript)
*   [MVC](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailmvc), [MVP](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailmvp), [MVVM](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailmvvm)

Asides from Javascript design patterns, it’s good to be familiar with Javascript frameworks. This does _not_ mean that you have to go learn another framework before your interview. Instead, know _when_ and _why_ front-end teams use frameworks. Also, if you’re interviewing for something like a React + Flux or an Angular position, review some of the documentation for the architecture of the framework beforehand.

### Computer science concepts

Some companies hire software engineers before front-end developers. What this means is that these companies expect you to be well grounded in topics like good software design principles, scalable code architecture, and testing.

If your recruiter suggests you review your knowledge of data structures and algorithms, this section is for you. _Otherwise, feel free to skip this section._ If you don’t have a computer science background, that’s okay. Most of these concepts are pretty straightforward to learn.



![](https://cdn-images-1.medium.com/max/1600/1*xelh9mMQzhZbhb85uWtHNA.png)



These are the basic data structures that I would suggest knowing off the top of your head. Don’t just read about them, take the time to implement them in Javascript as well. If you’re not familiar with unit testing, test your data structure with a library like [Mocha](https://mochajs.org/) to learn.

*   Linked lists
*   Hashtables
*   Stacks and queues
*   Trees (binary trees and heaps)
*   Graphs

Note: For graphs, also know how to implement depth-first and breadth-first search traversals.

For implementations of these data structures, you can take a look at [SanFoundry](http://www.sanfoundry.com/java-programming-examples-data-structures/). All their examples are in Java but re-implementing them in Javascript is pretty easy.











* * *









![](https://cdn-images-1.medium.com/max/1600/1*4Y9vSWE5yuMjmvx4gv0mRQ.png)



Once you feel confident about data structures, you can move onto sorting. Go through the list, implement them in Javascript, and then make note of their [time and space complexity](http://bigocheatsheet.com/).

*   Binary search
*   Bubble sort
*   Insertion sort
*   Merge sort
*   Quick sort
*   Selection sort

After reviewing data structures and algorithms, test your knowledge with [Leetcode](https://leetcode.com/) and these [technical Javascript questions](https://www.interviewcake.com/javascript-interview-questions).

### Wrapping it up

I know it’s a lot of material to take in, especially if you’re new to front-end development. Start preparing for your interview ahead of time, so you can move at a comfortable pace.

Also, remember that interviews are not a measure of your worth as a programmer. Some people are good at interviews, other are not. Sometimes you click with your interviewer, other times you don’t.

If you have any questions, feel free to leave a note or [Tweet](https://twitter.com/JonathanZWhite) out to me. I would also **love** to know how your interview experience went. Good luck!

_P.S. If you liked this article, it would mean a lot if you hit the recommend button or share with friends._











* * *







If you want more, you can follow me on [Twitter](https://twitter.com/JonathanZWhite) where I post non-sensical ramblings about design, front-end development, bots, and machine learning.








