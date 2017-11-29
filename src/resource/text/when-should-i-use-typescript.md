---
author: Alex Ewerlöf
authorTwitter: https://twitter.com/alexewerlof
authorFacebook: none
title: "When should I use TypeScript?"
subTitle: "This article is now available in Japanese and Chinese...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*IkUwv_lceATY-tP7Pf5TeQ.jpeg
url: https://medium.freecodecamp.org/when-should-i-use-typescript-311cb5fe801b
id: when-should-i-use-typescript-311cb5fe801b
date: 2016-03-24T08:56:23.171Z
tags: [
  "JavaScript",
  "Typescript",
  "Angularjs",
  "Web Development",
  "Programming"
]
---
# When should I use TypeScript?



![](https://cdn-images-1.medium.com/max/1600/1*IkUwv_lceATY-tP7Pf5TeQ.jpeg)

The type system is like training wheels. It keeps you from falling, at the price of slowing you down and limiting flexibility.



_This article is now available in_ [_Japanese_](http://postd.cc/when-should-i-use-typescript/) _and_ [_Chinese_](http://www.luxingyun.xyz/2016/08/17/%E4%BD%95%E6%97%B6%E5%BA%94%E8%AF%A5%E4%BD%BF%E7%94%A8typescript/)_._

Last summer we had to convert a huge code base (18,000+ lines of code) from JavaScript to TypeScript. I learned a lot about the strengths and weaknesses of each, and when it makes sense to use one over the other.

### When it makes sense to use TypeScript

#### **When you have a large codebase**

When your codebase is huge, and more than one person works on the project, a type system can help you avoid a lot of common errors. This is especially true for single-page applications.

Any time one developer could introduce breaking changes, it’s generally good to have some sort of safety mechanism.

The TypeScript [transpiler](https://www.stevefenton.co.uk/2012/11/compiling-vs-transpiling/) reveals the most obvious mistakes — though it won’t magically eliminate the need for debugging.

If your codebase isn’t all that big, it probably doesn’t make sense to make it larger by adding type annotations. I’ve converted 180+ files from JavaScript to TypeScript, and in most cases it added roughly 30% to the total code size.

#### **When your team’s developers are already accustom to statically-typed languages**

If you or the majority of the team come from a strongly typed language like C# or Java, and don’t want to go all-in on JavaScript, TypeScript is a good alternative.

Even though I recommend learning Javascript thoroughly, there’s nothing preventing you from using TypeScript without knowing JavaScript. In fact, TypeScript was created by the [same guy](https://en.wikipedia.org/wiki/Anders_Hejlsberg) who made C#, so the syntaxes are similar.

In my company, we had a team of C# developers who were coding a sophisticated desktop application in C# and [WPF](https://en.wikipedia.org/wiki/Windows_Presentation_Foundation) (which is basically a front end development tool for the desktop world). They were then asked to join a web project as full stack developers. So in short order, they were able to learn TypeScript for the front end, then leverage their C# knowledge for the back end.

#### **TypeScript can serve as a replacement for Babel**

The old Microsoft used to take standard tools — Java for example — and add proprietary non-standard features to them — in this case resulting in J++. Then they would try to force developers to choose between the two.

TypeScript is exactly the same approach — this time for JavaScript. By the way, this isn’t Microsoft’s first fork of JavaScript. In 1996, they forked JavaScript to create [JScript](https://en.wikipedia.org/wiki/JScript).

Though it’s is a less-common use case, it’s technically possible to transpile ES6 code into ES5 using the TypeScript transpiler. This is possible because ES6 is essentially a subset of TypeScript, and the TypeScript [transpiler](https://www.stevefenton.co.uk/2012/11/compiling-vs-transpiling/) generates ES5 code.

Typescript’s transpiler generates pretty readable Javascript (EcmaScript 5) code as output. That was one of the reasons why the Angular 2 team chose TypeScript over Google’s own Dart language.

Also, TypeScript has some cool features that are not in ES6, like enums and the ability to initialize member variables in a constructor. I’m not a big fan of inheritance, but I find it useful to have the _public, private, protected, and abstract_ keywords in classes. TypeScript has them and ES6 doesn’t.

Our C# developers thought it was super amazing to be able to write a lambda function as the body of a method — which eliminated the headaches associated with the _this_ keyword.

#### **When a library or framework recommends TypeScript**

If you are using Angular 2 or another library that recommends TypeScript, go for it. Take a look at [what these developers have to say](http://m12.io/blog/we-launched-angular-2-project) after using Angular 2 for six months.

Just know that — even though TypeScript can use all JavaScript libraries out of the box — if you want good syntax errors, you’ll need to add the type definitions for those libraries externally. Fortunately the nice guys at [DefinitelyTyped](http://definitelytyped.org/) have built a community-driven repo with tooling for doing just that. But this is still one extra step when you’re setting up your project

(On a side note: for all you JSX fans, check out [TSX](http://www.typescriptlang.org/docs/handbook/jsx.html).)

#### **When you really feel the need for speed**

This may come as a shock to you, but the TypeScript code can in some situations perform better than JavaScript. Let me explain.

In our JavaScript code, we had a lot of type checks. It was a MedTech app, so even a small error could be literally fatal if it wasn’t dealt with properly. So a lot of functions had statements like:

<pre name="7d1b" id="7d1b" class="graf graf--pre graf-after--p">if(typeof name !== ‘string) throw ‘Name should be string’</pre>

With TypeScript, we could eliminate a lot of these type checks all together.

This especially showed its effect in parts of the code where we previously had a performance bottleneck, because we were able to skip a lot of unnecessary runtime type checking.

### So when are you better off without Typescript?

#### **When you can’t afford an extra transpilation tax**

There are no plans to support TypeScript natively in the browsers. Chrome [did some experiment](https://developers.google.com/v8/experiments#soundscript), but later [cancelled](https://groups.google.com/forum/embed/?place=forum/strengthen-js#!topic/strengthen-js/ojj3TDxbHpQ) support. I suspect this has something to do with unnecessary runtime overhead.

If someone wants training wheels, they can install them. But bikes shouldn’t come with permanent training wheels. This means that you will always have to transpile your TypeScript code before running it in a browser.

For standard ES6, it’s a whole different story. When [ES6 is supported by most browsers](https://kangax.github.io/compat-table/es6/), the current ES6 to ES5 transpilation will become unnecessary.

ES6 is the biggest change to the JavaScript language, and I believe most programmers will just settle with it. But those brave few who want to try the next version of JavaScript’s experimental features, or the features not yet implemented on all browsers — they will need to transpile anyway.

Without transpilation, you just modify the file and refresh your browser. That’s it. No _watching,_ _transpiling on demand,_ or _build system_ are necessary.

If you choose TypeScript, you will end up doing some extra bookkeeping for the type definitions for your Javascript libraries and frameworks (by using DefinitelyTyped or writing your own type annotations). That’s something you wouldn’t need to do for a pure JavaScript projects.

#### **When you want to avoid weird debugging edge cases**

Sourcemaps make it easier to debug Typescript, but the status quo is not perfect. There are really annoying and confusing edge cases.

Also, there are some problems debugging the “this” keyword and properties attached to it (hint: “_this” works in most cases). That is because Sourcemaps currently don’t have a good support for variables — though this may change in the future.

#### **When you want to avoid potential performance penalties**

In our project, we had 9,000+ lines of good old ES5 JavaScript that delivered pure horse power to a 3D WebGL canvas. We kept it that way.

The TypeScript transpiler (just like Babel) has features that require generating extra code (inheritance, enum, generics, async/await, etc). No matter how good your transpiler is, it can’t surpass the optimizations of a good programmer. So we decided to keep it in plain ES5 for ease of debug and deployment (no transpilation whatsoever).

That being said, the performance penalty is probably negligible compared to benefits of a type system and more modern syntax for most projects. But there are cases where milliseconds and even microseconds matter, and in those cases transpilation of any kind is not recommended (even with Babel, CoffeeScript, Dart, etc.).

Note that Typescript doesn’t add any extra code for runtime type checking. All the type checking happens at transpile time and the type annotations are removed from the generated Javascript code.

#### **When you want to maximize your team’s agility**

It’s quicker to set up something in JavaScript. The lack of a type system makes for agility and ease of changing stuff. It also makes it easier to break things, so make sure you know what you’re doing.

Javascript is more flexible. Remember one of the main use cases for a type system is to make it hard to break stuff. If Typescript is Windows, Javascript is Linux.

In JavaScript Land, you don’t get the training wheels of a type system, and the computer assumes you know what you’re doing, but allows you to ride much faster and maneuver easier.

This is particularly important to note if you’re still in the prototyping phase. If so, don’t waste your time with TypeScript. JavaScript is so much more flexible.

Remember that TypeScript is a superset of JavaScript. This means that you can easily convert JavaScript to TypeScript later if you need to.

#### My preference on JavaScript VS TypeScript

There is no one best language overall. But for each individual project, there is probably one objectively best language and library and framework and database and operating system and… you get the picture.

For our project it made sense to use TypeScript. I tried to refactor some of my hobby projects in TypeScript but it sucked. I personally like 4 things about TypeScript:

1.  It’s fully compatible with ES6\. It is really nice seeing Microsoft playing fair with the other browsers. Our ecosystem can benefit from a strong rival to Google, Mozilla, and Apple. Microsoft is spending serious energy on it — such as writing [Visual Studio Code](https://code.visualstudio.com/) from scratch using TypeScript on Google Chrome, of all platforms.
2.  The type system is optional. Coming from a C and Java background, I found the lack of type system in JavaScript liberating. But I hated losing time when I encountered stupid bugs during runtime. TypeScript allows me to avoid many common bugs so I can focus my time on fixing the real tricky ones. It’s a good balance. I like it. It’s my taste. I use types whenever I can because it gives me peace of mind. But that’s me. If I use TypeScript, I don’t want to limit myself to its ES6 features.
3.  The transpiler output is very readable. I am not a fan of Sourcemaps, so I do most of my debugging on the generated JavaScript. It’s absolutely awesome. I can totally understand why Angular 2 [chose TypeScript over Dart](https://jaxenter.com/angular-typescript-dart-115426.html).
4.  TypeScript’s tooling is fantastic. WebStorm is very smart when dealing with JavaScript (some may argue it’s the smartest JS IDE). But TypeScript pushes the limits to a whole new level. The autocompletion and refactoring features in VSCode work much more accurately, and it’s not because the IDE is super smart. That’s all thanks to TypeScript.

Typescript is not the answer for everything. You can still [write terrible code](https://medium.com/@alexewerlof/what-is-shitty-code-handwriting-ae7c00708b) in it.

TypeScript haters are gonna hate, either because of fear of change or because they know somebody who knows somebody who is afraid of it. Life goes on and TypeScript introduces [new features](https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript) to [its community](https://github.com/Microsoft/TypeScript) anyway.

But like React, TypeScript is one of those influential technologies that is pushing the boundaries of our web development.

Whether you use TypeScript or not, it doesn’t hurt to try it out in order to develop your own opinions on it. It has a learning curve, but if you already know JavaScript, it will be a smooth one.

Here is an [online realtime TS transpiler](http://www.typescriptlang.org/Playground) with some examples that let you compare TypeScript code with its equivalent JavaScript code.

Here is a quick [tutorial](http://www.typescriptlang.org/Tutorial), and a [very nice guide](http://www.typescriptlang.org/Handbook), but I’m more a [language-reference](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md) kinda guy. If you like video, here’s [a course from Udemy](https://www.udemy.com/typescript/).

John Papa has a [a short article](http://johnpapa.net/es5-es2015-typescript/) about ES5 and TypeScript.

There’s [an interesting study](http://ttendency.cs.ucl.ac.uk/projects/type_study) that shows all things equal, a type system reduces bugs by 15%.

Oh, and if you feel like going on a side mission, read [why programming is the best job ever](https://medium.com/@alexewerlof/what-s-cool-about-being-a-programmer-5a1e58efeee6).








