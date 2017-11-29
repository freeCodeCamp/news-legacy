---
author: James Wright
authorTwitter: https://twitter.com/jamesseanwright
authorFacebook: none
title: "Introducing Type Safety To Your JavaScript Project? Think Again"
subTitle: "I’ve heard various counter-arguments regarding type safety in JavaScript since I first published this article, and while I still believe ..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*0o35DC9HRHPhjwYMHwbz_g.jpeg
url: https://medium.freecodecamp.org/stop-bringing-strong-typing-to-javascript-4da0666cba6e
id: stop-bringing-strong-typing-to-javascript-4da0666cba6e
date: 2016-06-02T12:39:31.874Z
tags: [
  "JavaScript",
  "Programming",
  "Technology",
  "Software Development",
  "ES6"
]
---
# Introducing Type Safety To Your JavaScript Project? Think Again

### Update — 1st February 2017

I’ve heard various counter-arguments regarding type safety in JavaScript since I first published this article, and while I still believe most projects do not require the use of a typed JavaScript superset, some appropriate use cases have grabbed my attention:

*   [Glimmer](https://github.com/tildeio/glimmer), the low-level rendering engine behind Ember, is written in TypeScript to promote [monomorphic call sites](http://mrale.ph/blog/2015/01/11/whats-up-with-monomorphism.html), aiding performance when executed by V8 and potentially other JavaScript engines
*   [Visual Studio Code](https://github.com/Microsoft/vscode) benefits from TypeScript due to the sheer size of the project; given that it’s distributed as a desktop application, having one codebase rather than reconciling individual packages at build time is, in my opinion, a sensible option

Beyond this, the below still applies.











* * *







Today, I encountered an article regarding the launch of [JS++](http://sdtimes.com/onux-seeks-fix-javascripts-lack-type-safety/), which claims to “fix JavaScript’s lack of type safety.” Funnily enough, we already have [TypeScript](https://www.typescriptlang.org/), [ST-JS](http://st-js.github.io/), and [Scala.js](https://www.scala-js.org/), which assist developers in ultimately achieving the same goal.

Before I launch into this tirade, allow me to highlight three important points:

*   I’ve previously written [a tutorial](http://www.codeproject.com/Articles/871622/Writing-a-chat-server-using-Node-js-TypeScript-and) on establishing a simple TypeScript project. I see the hypocrisy but my opinions have changed since I published it over a year ago
*   Strong typing and static typing are vital paradigms. The former provides transparency over the entities represented in one’s code, their relationships, and the functionality they may be expected to provide, while the latter is an important, compile-time safety net in complex systems. I come from a C# background, so I have first-hand experience of this
*   I also love JavaScript, given its inherent flaws, many of which have been addressed with ECMAScript 6 and 7

So why am I generally against static typing in JavaScript?

Predominantly, what makes JavaScript such a powerful language is its weakly-typed nature; it’s trivial to implement branches of logic via type coercion, and it’s so easy to create object instances of an arbitrary type. Furthermore, the lack of compilation (unless one is using a transpiler or build tool such as Babel, for example) makes development incredibly fast, as long the code doesn’t result in any bizarre behaviours. In my opinion, this is what makes it so powerful for frontend and **simple** backend (e.g. IoT) development.

I personally believe that if one is developing a system so complex that it requires type safety, then one should be using a language that supports it at its core; writing a guidance system, which involves complex mathematical operations, in JavaScript is insane.

My main concern with these JavaScript tools and supersets is that they compile to, well, JavaScript; these programs are consequently running in a dynamic context, thus the same side effects could still occur. TypeScript, for example, may be statically typed (i.e. type information is gathered and analysed at compile-time), but one must have full confidence that the resulting code will still run as expected. Yes, of course even statically-typed languages are usually compiled to a lower-level language, which is then typically interpreted, but these target languages were surely designed with typing as a first-class citizen; as an example, Microsoft’s JIT compiler for .NET still implements [runtime type-checking of its intermediate language](https://msdn.microsoft.com/en-us/library/k5532s8a%28v=vs.110%29.aspx) before compiling to native code.

Furthermore, when undertaking frontend development, I’m still of the mindset that JavaScript should be used to _complement_ HTML and CSS solutions e.g. adding classes to elements, making HTTP calls to backend services etc. While the web has matured in terms of frameworks for authoring larger, UI-based applications (FYI, I have written larger apps with React.js and vanilla JS too; I love both), I prefer to keep my JS as light as possible. I understand that this isn’t always a possibility in reality, but if backend systems serve as the source truth for fundamental business logic, then frontend code becomes lighter and less redundant; in this respect, what benefits will a type system bring?

Following my point of the size of frontend software, my current work entails writing concentrated web applications for each concern of the overarching system; as opposed to one large single-page application for our shop, which contains a product list view, a product details view, and a purchase journey view, we have respective Node.js-backed apps for them. Evidently, this is a best practice in terms of loose coupling and resilience, but from a code point of view, it allows one of focus more easily on the implementation of one area of our frontend.

My final argument is this; is JavaScript really that difficult to learn? As I’ve said before, ECMAScript 5 itself is a flawed language; [the different function invocation patterns](https://www.safaribooksonline.com/library/view/javascript-the-good/9780596517748/ch04s03.html) and how they affect the `this` keyword and lack of block scoping, for example, can make it difficult for beginners. However, with ECMAScript 6, plus the plethora of amazing resources out there, it’s easy to overcome and be aware of these issues. Why not just skip the middle man and learn the language directly?

I’ll close by saying I’m a fan of all typing approaches, but some suit certain scenarios more than others. If JavaScript works best for the majority of frontend software, given its ubiquity within development teams and their projects, then surely it doesn’t need a superset. Additionally, there is a truckload of languages that are inherently type safe, so stop reinventing the wheel!








