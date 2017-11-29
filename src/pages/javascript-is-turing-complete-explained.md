---
author: rajaraodv
authorTwitter: https://twitter.com/rajaraodv
authorFacebook: none
title: "JavaScript Is Turing Complete— Explained"
subTitle: "If you start learning functional programming in JavaScript, you’ll probably hear about lambda calculus, Turing machine, Turing complete a..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*u__iwCIORZT5-m_zdiucgA.png
url: https://medium.freecodecamp.org/javascript-is-turing-complete-explained-41a34287d263
id: javascript-is-turing-complete-explained-41a34287d263
date: 2016-05-19T07:35:59.445Z
tags: [
  "JavaScript",
  "Programming",
  "Computer Science",
  "Technology",
  "Tech"
]
---
# JavaScript Is Turing Complete— Explained

If you start learning functional programming in JavaScript, you’ll probably hear about [lambda calculus](https://en.wikipedia.org/wiki/Lambda_calculus), [Turing machine](https://en.wikipedia.org/wiki/Turing_machine), [Turing complete](https://en.wikipedia.org/wiki/Turing_completeness) and somehow “JavaScript is Turing complete”.

But, no one seem to explain, in simple terms, what it actually means. What’s the relation b/w a Turing “machine” and JavaScript “language”? Also, most people use jargon to explain jargon like so:

> In [computability theory](https://en.wikipedia.org/wiki/Computability_theory "Computability theory"), a system of data-manipulation rules (such as a computer’s [instruction set](https://en.wikipedia.org/wiki/Instruction_set "Instruction set"), a [programming language](https://en.wikipedia.org/wiki/Programming_language "Programming language"), or a [cellular automaton](https://en.wikipedia.org/wiki/Cellular_automaton "Cellular automaton")) is said to be **Turing complete** or **computationally universal** if it can be used to simulate any single-taped [Turing machine](https://en.wikipedia.org/wiki/Turing_machine "Turing machine"). The concept is named after English mathematician [Alan Turing](https://en.wikipedia.org/wiki/Alan_Turing "Alan Turing"). A classic example is [lambda calculus](https://en.wikipedia.org/wiki/Lambda_calculus "Lambda calculus").

So this is my attempt at explaining these comcepts simply.

### Turing Machines

Back in the day, people wanted to know how to create a machine that could do all the calculations they were doing by hand. They wanted to know how to build such a machine and how it might work.

[Alan Turing](https://en.wikipedia.org/wiki/Alan_Turing) came up with a hypothetical machine that could take any program of any complexity and run it. It could be implemented using a simple tape, a head that moves left and right, could store data by reading, writing, and erasing the contents of square cells. Given long enough tape and enough time, it could compute any program.

In other words, he explained how someone can build a computer. And called the computer a “Turing machine”

> **Trivia:** Back in Alan Turing’s days, the word “Computer” meant the person who manually computes programs (not the machines) :)

#### So powerful yet so simple

Turing machines soon became very popular, and eventually a standard because while they provided a powerful mechanism to calculate anything, they were also easy to understand. As described in the video below, Turing machines use a tape to keep track of states and run computations.





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/4aabbb624c5305cd92be0ad6afc38b07?postId=41a34287d263" data-media-id="4aabbb624c5305cd92be0ad6afc38b07" allowfullscreen="" frameborder="0"></iframe>





#### “Single” Vs “Multi” Tape Turing Machines

One other jargon you’ll hear about Turing machines is the concept of “single” tape.



![](https://cdn-images-1.medium.com/max/1600/1*YcmJ5nJ_XNXK5PoIjFULTQ.jpeg)



The initial version of the Turing machine had just a long single tape. Later on, people came up with the concept of “multiple” tape Turing machines that used two to five tapes. **Multi-tape Turing machines were not any more powerful than single-tape ones, but they helped to simplify programs.**

**So explicitly saying “single” tape isn’t necessary.**





<iframe data-width="640" data-height="480" width="640" height="480" src="https://medium.freecodecamp.org/media/62b897fa47520f0eba6403a28aa10b62?postId=41a34287d263" data-media-id="62b897fa47520f0eba6403a28aa10b62" allowfullscreen="" frameborder="0"></iframe>



This video shows that a multi-tap Turing Machine can be implemented in a single-tape Turing Machine.



### Turing Complete

If a physical machine (like a computer) or virtual machine, which is a software, (like JavaVM) can take **any** program and run it just like a Turing machine, then that machine is called “Turing Complete”. PS: It’s kind of a certification.

#### Examples: Turing complete Vs Turing incomplete machine



![](https://cdn-images-1.medium.com/max/1600/1*5KRGqyU6zKHJ7CUIpZ8QRA.jpeg)

Not Turing Complete



A calculator is a good example of a **Turing incomplete machine** because it can only perform a small pre-defined subset of calculations.

However a home computer (Mac or a PC) is a Turing complete machine because it can do any calculation that a Turing machine can do if we give it enough memory and time.

### “JavaScript Is Turing Complete”

If you think about it, a Turing machine is just a concept — it means that any “_thing_”(physical or virtual) that takes any program and run it is essentially a Turing Machine. And if that “thing” can run every program that a “Turing Machine” can run, then it is called “Turing Complete”.

Now if you think about any modern programming language, they also take programs(written by us) as input and run them. Further, any program that can be theoretically written to run for a Turing machine can also be written in JavaScript. **Thus, JavaScript is Turing complete.**

**That’s it!**

_🎉🎉🎉_ **_If you like this post, please 1\._** ❤❤❤**_it below on Medium and 2\. please share it on Twitter. You may retweet the below card_**_🎉🎉🎉_

### My Other Posts

**LATEST:** [Functional Programming In JS — With Practical Examples (Part 1)](https://medium.com/@rajaraodv/functional-programming-in-js-with-practical-examples-part-1-87c2b0dbc276#.fbgrmoa7g)

#### Functional Programming

1.  [_JavaScript Is Turing Complete — Explained_](https://medium.com/@rajaraodv/javascript-is-turing-complete-explained-41a34287d263#.6t0b2w66p)
2.  [Functional Programming In JS — With Practical Examples (Part 1)](https://medium.com/@rajaraodv/functional-programming-in-js-with-practical-examples-part-1-87c2b0dbc276#.fbgrmoa7g)

#### ES6

1.  [_5 JavaScript “Bad” Parts That Are Fixed In ES6_](https://medium.com/@rajaraodv/5-javascript-bad-parts-that-are-fixed-in-es6-c7c45d44fd81#.7e2s6cghy)
2.  [_Is “Class” In ES6 The New “Bad” Part?_](https://medium.com/@rajaraodv/is-class-in-es6-the-new-bad-part-6c4e6fe1ee65#.4hqgpj2uv)

#### WebPack

1.  [_Webpack — The Confusing Parts_](https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9#.6ot6deo2b)
2.  [_Webpack & Hot Module Replacement [HMR]_](https://medium.com/@rajaraodv/webpack-hot-module-replacement-hmr-e756a726a07#.y667mx4lg) _(under-the-hood)_
3.  [_Webpack’s HMR And React-Hot-Loader — The Missing Manual_](https://medium.com/@rajaraodv/webpacks-hmr-react-hot-loader-the-missing-manual-232336dc0d96#.fbb1e7ehl)

#### Draft.js

1.  [_Why Draft.js And Why You Should Contribute_](https://medium.com/@rajaraodv/why-draft-js-and-why-you-should-contribute-460c4a69e6c8#.jp1tsvsqc)
2.  [_How Draft.js Represents Rich Text Data_](https://medium.com/@rajaraodv/how-draft-js-represents-rich-text-data-eeabb5f25cf2#.hh0ue85lo)

#### React And Redux :

1.  [_Step by Step Guide To Building React Redux Apps_](https://medium.com/@rajaraodv/step-by-step-guide-to-building-react-redux-apps-using-mocks-48ca0f47f9a#.s7zsgq3u1)
2.  [_A Guide For Building A React Redux CRUD App_](https://medium.com/@rajaraodv/a-guide-for-building-a-react-redux-crud-app-7fe0b8943d0f#.g99gruhdz) _(3-page app)_
3.  [_Using Middlewares In React Redux Apps_](https://medium.com/@rajaraodv/using-middlewares-in-react-redux-apps-f7c9652610c6#.oentrjqpj)
4.  [_Adding A Robust Form Validation To React Redux Apps_](https://medium.com/@rajaraodv/adding-a-robust-form-validation-to-react-redux-apps-616ca240c124#.jq013tkr1)
5.  [_Securing React Redux Apps With JWT Tokens_](https://medium.com/@rajaraodv/securing-react-redux-apps-with-jwt-tokens-fcfe81356ea0#.xci6o9s6w)
6.  [_Handling Transactional Emails In React Redux Apps_](https://medium.com/@rajaraodv/handling-transactional-emails-in-react-redux-apps-8b1134748f76#.a24nenmnt)
7.  [_The Anatomy Of A React Redux App_](https://medium.com/@rajaraodv/the-anatomy-of-a-react-redux-app-759282368c5a#.7wwjs8eqo)

#### Salesforce

1.  [_Developing React Redux Apps In Salesforce’s Visualforce_](https://medium.com/@rajaraodv/developing-react-redux-apps-in-salesforce-s-visualforce-3ad7be560d1c#.f6bao6mtu)





<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/a4078aa3b06803835dd9a0748952ab6b?postId=41a34287d263" data-media-id="a4078aa3b06803835dd9a0748952ab6b" allowfullscreen="" frameborder="0"></iframe>





**Thanks for reading!**








