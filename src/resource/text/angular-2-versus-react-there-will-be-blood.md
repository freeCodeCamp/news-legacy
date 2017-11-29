---
author: Cory House
authorTwitter: https://twitter.com/housecor
authorFacebook: none
title: "Angular 2 versus React: There Will Be Blood"
subTitle: "Angular 2 has reached Beta and appears poised to become the hot new framework of 2016. It’s time for a showdown. Let’s see how it stacks ..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*MRPl_SNuRGJchb6eOAnkSA.jpeg
url: https://medium.freecodecamp.org/angular-2-versus-react-there-will-be-blood-66595faafd51
id: angular-2-versus-react-there-will-be-blood-66595faafd51
date: 2016-01-03T20:49:44.303Z
tags: [
  "JavaScript",
  "Angularjs",
  "React",
  "Tech",
  "Programming"
]
---
# Angular 2 versus React: There Will Be Blood

[Angular 2 has reached Beta](https://angular.io) and appears poised to become the hot new framework of 2016\. It’s time for a showdown. Let’s see how it stacks up against 2015’s darling: [React](https://facebook.github.io/react/).

**Disclaimer:** I enjoyed working in Angular 1 but switched to React in 2015\. I’ve published Pluralsight courses on [React and Flux](https://www.pluralsight.com/courses/react-flux-building-applications) and [React and Redux in ES6](https://app.pluralsight.com/library/courses/react-flux-building-applications) ([free trial](http://app.pluralsight.com/signup)). So **yes, I’m biased. But I’m attacking both sides.**

Alright, let’s do this. There will be blood.



![](https://cdn-images-1.medium.com/max/1600/1*MRPl_SNuRGJchb6eOAnkSA.jpeg)

Photo credit: [@jwcarrol](https://twitter.com/jwcarroll)



### You’re Comparing Apples and Orangutans!

Sigh. Yes, Angular is a framework, React is a library. Some say this difference makes comparing them illogical. Not at all!

> Choosing between Angular and React is like choosing between buying an off-the-shelf computer and building your own with off-the-shelf parts.

This post considers the merits of these two approaches. I compare React’s syntax and component model to Angular’s syntax and component model. This is like comparing an off-the-shelf computer’s CPU to a raw CPU. Apples to apples.

### Angular 2 Advantages

Let’s start by considering Angular 2’s advantages over React.

#### **Low Decision Fatigue**

Since Angular is a framework, it provides significantly more opinions and functionality out of the box. With React, you typically pull a number of other libraries off the shelf to build a real app. You’ll likely want libraries for routing, enforcing unidirectional flows, web API calls, testing, dependency management, and so on. The number of decisions is pretty overwhelming. This is why React has so many starter kits (I’ve [published](https://github.com/coryhouse/react-flux-starter-kit) [two](https://github.com/coryhouse/react-slingshot)).

Angular offers more opinions out of the box, which helps you get started more quickly without feeling intimidated by decisions. This enforced consistency also helps new hires feel at home more quickly and makes switching developers between teams more practical.

I admire how the Angular core team has embraced TypeScript, which leads to the next advantage…

#### TypeScript = Clear Path

Sure, TypeScript isn’t loved by all, but Angular 2’s opinionated take on which flavor of JavaScript to use is a big win. React examples across the web are frustratingly inconsistent — it’s presented in ES5 and ES6 in roughly equal numbers, and it currently offers [three different ways to declare components](http://jamesknelson.com/should-i-use-react-createclass-es6-classes-or-stateless-functional-components/). This creates confusion for newcomers. (Angular also embraces decorators instead of extends — many would consider this a plus as well).

While Angular 2 doesn’t require TypeScript, the Angular core team certainly embraces it and defaults to using TypeScript in documentation. This means related examples and open source projects are more likely to feel familiar and consistent. Angular already provides [clear examples that show how to utilize the TypeScript compiler](https://angular.io/docs/ts/latest/quickstart.html). (though admittedly, [not everyone is embracing TypeScript](http://angularjs.blogspot.com/2015/09/angular-2-survey-results.html) yet, but I suspect shortly after launch it’ll become the de facto standard). This consistency should help avoid the confusion and decision overload that comes with getting started with React.

#### Reduced Churn

2015 was the year of [JavaScript fatigue](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4#.559iqxb39). Although React itself is expected to be quite stable with [version 15 coming soon](https://facebook.github.io/react/blog/), React’s ecosystem has churned at a rapid pace, particularly around the [long list of Flux flavors](https://github.com/kriasoft/react-starter-kit/issues/22) and [routing](https://github.com/rackt/react-router). So anything you write in React today may feel out of date or require breaking changes in the future if you lean on one of many related libraries.

In contrast, Angular 2 is a careful, methodical reinvention of a mature, comprehensive framework. So Angular is less likely to churn in painful ways after release. And as a full framework, when you choose Angular, you can trust a single team to make careful decisions about the future. In React, it’s your responsibility to herd a bunch of disparate, fast-moving, open-source libraries into a comprehensive whole that plays well together. It’s time-consuming, frustrating, and a never-ending job.

#### **Broad Tooling Support**

As you’ll see below, I consider React’s JSX a big win. However, you need to select tooling that supports JSX. React has become so popular that tooling support is rarely a problem today, but new tooling such as IDEs and linters are unlikely to support JSX on day one. Angular 2’s templates store markup in a string or in separate HTML files, so it doesn’t require special tooling support (though it appears tooling to intelligently parse Angular’s string templates is on the way).

#### Web Component Friendly

Angular 2’s design embraces the web component’s standard. Sheesh, I’m embarrassed I forgot to mention this initially — I recently published a [course on web components](https://www.pluralsight.com/courses/web-components-shadow-dom)! In short, the components that you build in Angular 2 should be much easier to convert into plain, native web components than React’s components. Sure, [browser support is still weak](http://jonrimmer.github.io/are-we-componentized-yet/), but this could be a big win in the long-term.

Angular’s approach comes with its own set of gotchas, which is a good segue for discussing React’s advantages…

### React Advantages

Alright, let’s consider what sets React apart.

#### **JSX**

JSX is an HTML-like syntax that compiles down to JavaScript. Markup and code are composed in the same file. This means code completion gives you a hand as you type references to your component’s functions and variables. In contrast, Angular’s string-based templates come with the usual downsides: No code coloring in many editors, limited code completion support, and run-time failures. You’d normally expect poor error messaging as well, but the Angular team [created their own HTML parser to fix that](https://github.com/angular/angular/issues/4417). (Bravo!)

If you don’t like Angular string-based templates, you can move the templates to a separate file, but then you’re back to what I call “the old days:” wiring the two files together in your head, with no code completion support or compile-time checking to assist. That doesn’t seem like a big deal until you’ve enjoyed life in React. Composing components in a single **_compile-time checked_** file is one of the big reasons JSX is so special.







![](https://cdn-images-1.medium.com/max/2000/1*ivDnyMP63YJBBGKCNyRUzQ.png)

Contrasting how Angular 2 and React handle a missing closing tag







For more on why JSX is such a big win, see [JSX: The Other Side of the Coin](https://medium.com/@housecor/react-s-jsx-the-other-side-of-the-coin-2ace7ab62b98#.5007n49wq).

#### **React Fails Fast and Explicitly**

When you make a typo in React’s JSX, it won’t compile. That’s a beautiful thing. It means you know immediately exactly which line has an error. It tells you immediately when you forget to close a tag or reference a property that doesn’t exist. In fact, **the JSX compiler** **specifies the line number where the typo occurred**. This behavior radically speeds development.

In contrast, when you mistype a variable reference in Angular 2, nothing happens at all. **Angular 2 fails quietly at run time instead of compile-time**. It fails _slowly_. I load the app and wonder why my data isn’t displaying. Not fun.

#### **React is JavaScript-Centric**

Here it is. This is the fundamental difference between React and Angular. **Unfortunately, Angular 2 remains HTML-centric rather than JavaScript-centric**. Angular 2 failed to solve its most fundamental design problem:

> Angular 2 continues to put “JS” into HTML. React puts “HTML” into JS.

I can’t emphasize the impact of this schism enough. It fundamentally impacts the development experience. Angular’s HTML-centric design remains its greatest weakness. As I cover in “[JSX: The Other Side of the Coin](https://medium.com/@housecor/react-s-jsx-the-other-side-of-the-coin-2ace7ab62b98#.jqh5kkxlk)”, JavaScript is far more powerful than HTML. Thus, **it’s more logical to enhance JavaScript to support markup than to enhance HTML to support logic**. HTML and JavaScript need to be glued together somehow, and React’s JavaScript-centric approach is fundamentally superior to Angular, Ember, and Knockout’s HTML-centric approach.

Here’s why…

#### React’s JavaScript-centric design = simplicity

Angular 2 continues Angular 1’s approach of trying to make HTML more powerful. So you have to utilize Angular 2's unique syntax for simple tasks like looping and conditionals. For example, Angular 2 offers both one and two way binding via two syntaxes that are unfortunately quite different:

<pre name="7106" id="7106" class="graf graf--pre graf-after--p">{{myVar}} //One-way binding  
ngModel="myVar" //Two-way binding</pre>

In React, binding markup doesn’t change based on this decision (it’s handled elsewhere, as I’d argue it should be). In either case, it looks like this:

<pre name="4110" id="4110" class="graf graf--pre graf-after--p">{myVar}</pre>

Angular 2 supports inline master templates using this syntax:

<pre name="f964" id="f964" class="graf graf--pre graf-after--p"><ul>  
  <li *ngFor="#hero of heroes">  
    {{hero.name}}  
  </li>  
</ul></pre>

The above snippet loops over an array of heroes. I have multiple concerns:

*   Declaring a “master template” via a preceeding asterisk is cryptic.
*   The pound sign in front of hero declares a local template variable. This key concept looks like needless noise (if preferred, you can use `var`).
*   The ngFor adds looping semantics to HTML via an Angular-specific attribute.

Contrast Angular 2’s syntax above with React’s pure JS*: (admittedly the key property below is React-specific)

<pre name="8fb3" id="8fb3" class="graf graf--pre graf-after--p"><ul>  
  { heroes.map(hero =>  
    <li key={hero.id}>{hero.name}</li>  
  )}  
</ul></pre>

Since JS supports looping natively, React’s JSX can simply leverage all the power of JS for such things and do much more with map, filter, etc.

Just read the [Angular 2 Cheat Sheet](https://angular.io/docs/ts/latest/guide/cheatsheet.html). That’s not HTML. That’s not JavaScript. It’s **_Angular_**.

> **To read Angular:** Learn a long list of Angular-specific syntax.

> To read React: Learn JavaScript.

React is unique in its syntactic and conceptual simplicity. Consider iterating in today’s popular JS frameworks/libraries:

<pre name="eaaf" id="eaaf" class="graf graf--pre graf-after--p">Ember: {{# each}}  
Angular 1: ng-repeat  
Angular 2: ngFor  
Knockout: data-bind=”foreach”  
React: JUST USE JS. :)</pre>

All except React use framework specific replacements for something that is native and trivial in JavaScript: **a loop**. That’s the beauty of React. It embraces the power of JavaScript to handle markup, so no odd new syntax is required.

Angular 2’s syntactic oddities continue with click binding:

<pre name="2ce7" id="2ce7" class="graf graf--pre graf-after--p">(click)=”onSelect(hero)"</pre>

In contrast, React again uses plain ‘ol JavaScript:

<pre name="c473" id="c473" class="graf graf--pre graf-after--p">onClick={this.onSelect.bind(this, hero)}</pre>

And since React includes a synthetic event system (as does Angular 2), you don’t have to worry about the performance implications of declaring event handlers inline like this.

Why fill your head with a framework’s unique syntax if you don’t have to? Why not simply embrace the power of JS?

#### Luxurious Development Experience

JSX’s code completion support, compile-time checks, and rich error messaging already create an excellent development experience that saves both typing and time. But combine all that with hot reloading with time travel and you have a rapid development experience like no other.





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/13b373517ecb49243036ffefb9c20f7f?postId=66595faafd51" data-media-id="13b373517ecb49243036ffefb9c20f7f" allowfullscreen="" frameborder="0"></iframe>





#### Size Concerns

Here’s the sizes of some popular frameworks and libraries, minified ([source](https://gist.github.com/Restuta/cda69e50a853aa64912d)):

**Angular 2:** 566k (766k with RxJS)  
**Ember:** 435k[**Angular 1**](https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js)**:** 143k  
**React + Redux:** 139k

**Edit**: Sorry, I had incorrect numbers earlier that were for simple ToDoMVC apps instead of the raw frameworks. Also, the Angular 2 number is expected to drop for the final release. The sizes listed are for the framework, minified, in the browser (no gzip is factored in here).

To make a real comparison, I built Angular 2’s Tour of Heroes app in both Angular 2 and React (I used the new [React Slingshot](https://github.com/coryhouse/react-slingshot) starter kit). The result?

[**Angular 2**](https://github.com/coryhouse/angular-2-tour-of-heroes/tree/master)**:** 764k minified  
[**React + Redux**](https://github.com/coryhouse/react-tour-of-heroes)**:** 151k minified

So **Angular 2 is currently over four times the size of a React + Redux app of comparable simplicity**. (Again, Angular 2 is expected to lose some weight before the final release).

Now that said, I admit that concerns about the size of frameworks may be overblown:

> Large apps tend to have a minimum of several hundred kilobytes of code — often more — whether they’re built with a framework or not. Developers need abstractions to build complex software, and whether they come from a framework or are hand-written, they negatively impact the performance of apps.

> Even if you were to eliminate frameworks entirely, many apps would still have hundreds of kilobytes of JavaScript. — Tom Dale in [JavaScript Frameworks and Mobile Performance](http://tomdale.net/2015/11/javascript-frameworks-and-mobile-performance/)

Tom is right. Frameworks like Angular and Ember are bigger because they offer many more features out of the box.

However, my concern is this: many apps don’t need everything these large frameworks put in the box. In a world that’s increasingly embracing microservices, microapps, and [single-responsibility packages](http://www.npmjs.com), **React gives you the power to “right-size” your application by carefully selecting only what is necessary**. In a world with [over 200,000 npm modules](http://www.modulecounts.com), that’s a powerful place to be.

#### React Embraces [the Unix Philosophy](https://en.wikipedia.org/wiki/Unix_philosophy).

React is a library. It’s precisely the opposite philosophy of large, comprehensive frameworks like Angular and Ember. So when you select React, you’re free to choose modern best-of-breed libraries that solve your problem best. JavaScript moves fast, and React allows you to swap out small pieces of your application for better libraries instead of waiting around and hoping your framework will innovate.

Unix has stood the test of time. Here’s why:

> The philosophy of small, composable, single-purpose tools never goes out of style.

React is a focused, composable, single-purpose tool used by [many of the largest websites in the world](https://github.com/facebook/react/wiki/Sites-Using-React). That bodes well for its future (That said, Angular is [used by many big names](https://www.madewithangular.com/#/) too).

#### Showdown Summary

Angular 2 is a huge improvement over version 1\. The new component model is simpler to grasp than v1’s directives, it supports isomorphic/universal rendering, and it uses a virtual DOM offering 3–10x improvements in performance. These changes make Angular 2 very competitive with React. There’s no denying that its full-featured, opinionated nature offers some clear benefits by reducing “JavaScript fatigue”.

However, Angular 2’s size and syntax give me pause. Angular’s commitment to HTML-centric design makes it complex compared to React’s simpler JavaScript-centric model. In React, you don’t learn framework-specific HTML shims like ngWhatever. You spend your time writing plain ‘ol JavaScript. That’s the future I believe in.











* * *







Comments? Chime in on [Reddit](https://www.reddit.com/r/javascript/comments/3zbo90/angular_2_versus_react_there_will_be_blood/) or [Hacker News](https://news.ycombinator.com/item?id=10836236).

**_Cory House_** is the author of “[Building Applications with React and Flux](https://www.pluralsight.com/courses/react-flux-building-applications)”, “[Clean Code: Writing Code for Humans](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiK1pXx89nJAhUujoMKHeuWAEUQFggcMAA&url=https%3A%2F%2Fwww.pluralsight.com%2Fcourses%2Fwriting-clean-code-humans&usg=AFQjCNEBfkBoN-IgCn_1jFUqWDAUIxcmAw&sig2=Ub9Wup4k4mrw_ffPgYu3tA)” and multiple other courses on Pluralsight. He is a Software Architect at VinSolutions and [trains software developers internationally](http://www.bitnative.com/training/) on software practices like front-end development and clean coding. Cory is a Microsoft MVP, Telerik Developer Expert, and founder of [outlierdeveloper.com](http://www.outlierdeveloper.com).








