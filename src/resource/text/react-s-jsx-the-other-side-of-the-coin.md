---
author: Cory House
authorTwitter: https://twitter.com/housecor
authorFacebook: none
title: "React’s JSX: The Other Side of the Coin"
subTitle: "Stay calm. Embrace the evolution...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*RBTfDZzW0N5TzHg_pqWmSg.png
url: https://medium.freecodecamp.org/react-s-jsx-the-other-side-of-the-coin-2ace7ab62b98
id: react-s-jsx-the-other-side-of-the-coin-2ace7ab62b98
date: 2015-08-13T16:01:13.977Z
tags: [
  "React",
  "JavaScript",
  "Web Development",
  "Tech",
  "Programming"
]
---
# React’s JSX: The Other Side of the Coin

Stay calm. Embrace the evolution.



















* * *







When React was released, many people took one look at JSX and lost their minds. What are these angle brackets doing in JavaScript?! What about separation of concerns? Has Facebook learned nothing from the community?











* * *











<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/b0419e4bccb7d3af9c0f2e09d707d0a8?postId=2ace7ab62b98" data-media-id="b0419e4bccb7d3af9c0f2e09d707d0a8" allowfullscreen="" frameborder="0"></iframe>





Like many, my initial reaction to [React’s JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) was skeptical, to say the least. And while I’ve come to love JSX, anytime I introduce it to a new developer, I feel like I’m showing off my ugly baby.



![](https://cdn-images-1.medium.com/max/1600/1*RBTfDZzW0N5TzHg_pqWmSg.png)

Try to imagine an ugly baby here. My son is clearly adorable.



Despite the initial drama, I’ve come to realize that **JSX isn’t such a radical idea after all. In fact, it’s simply the other side of the coin**. It’s a natural evolutionary transition. To appreciate why, a history lesson is in order.

### Phase 1: Unobtrusive JavaScript

Remember the good old days of jQuery? The era of [unobtrusive JavaScript](https://en.wikipedia.org/wiki/Unobtrusive_JavaScript) was in full bloom. Our HTML was pure HTML. Our JavaScript was pure JavaScript. Our concerns were perfectly separated.

We’d write HTML like this:

<pre name="d41e" id="d41e" class="graf graf--pre graf-after--p">Click to hide me</pre>

Then we’d write JavaScript like this:

<pre name="dd44" id="dd44" class="graf graf--pre graf-after--p">$(‘.hide’).click(function() { $(this).hide(); } </pre>

#win. Right? Not exactly.

This seemed like a great idea. Our HTML is totally pure! But then we realized some problems: Uh, how can I tell that these two lines are interconnected? Answer: I can’t unless I read every single line of JavaScript. With this pattern, **you can’t change a line of markup without checking every single line of JavaScript to assure you’re not breaking a selector.** You see, there’s no actual separation going on here. Sure, the JS and HTML are in separate files, but these two technologies are fundamentally joined at the hip. They must move in lockstep or the application will crash.

Strictly separating HTML and JS actually led to applications that were _harder_ to maintain and debug. Each time you wanted to change a line of markup, you had to worry about breaking a jQuery selector. Perhaps if we relaxed our religious devotion to separation of concerns, we could relieve some of this pain? This ushered in phase 2…

### Phase 2: Two-way Binding

When front-end developers saw two-way binding in Knockout and Angular, it was a revelation. Many of us tossed our religious devotion to separation of concerns and embraced the power of declaring bindings in HTML. When data changed, the UI changed. When the UI changed, the data changed. So clean. So simple.

Sure, every library and framework has a proprietary way of getting this done, but they’re all fundamentally doing the same thing. Just consider this simple example of iterating over an array in a few popular frameworks:

<pre name="41f3" id="41f3" class="graf graf--pre graf-after--p">//Angular  
</pre>

<pre name="b55c" id="b55c" class="graf graf--pre graf-after--pre">//Ember  
{{#each user in users}}</pre>

<pre name="7953" id="7953" class="graf graf--pre graf-after--pre">//Knockout  
data-bind=”foreach: users”</pre>

But something interesting is at play here. Few have recognized a very fundamental problem: **We’re effectively putting JavaScript in our HTML.** This isn’t separation of concerns. All of these approaches do the same thing: They make HTML more powerful by adding extra proprietary markup. This markup is effectively parsed as JavaScript. And now that we’re finally comfortable intermingling JS and HTML this way, it’s time for React to step in and show us the other side of the coin…

### Phase 3: JSX

React’s JSX isn’t a radical shift. It’s merely the fruit of a simple realization:

> As an industry, we’ve already decided: HTML and JavaScript belong together.

Admittedly, we didn’t say this out loud. But embracing Angular, Knockout and Ember made our new preference clear. As I established above, writing data-binding code in HTML is effectively putting JS in HTML. But **if we’re going to intermingle, why should we choose to augment a technology as weak and lax as HTML?** Browsers have loosely interpreted HTML since the beginning of time. So is HTML a logical foundation for declaring data-binding, looping, and conditional logic?

Facebook recognized that JavaScript was a more logical and powerful technology for handling these two intermingled concerns. The epiphany comes down to this:

> Angular, Ember and Knockout put “JS” in your HTML.  
> React puts “HTML” in your JS.

The benefits of this move are multifaceted and not necessarily appreciated until you’ve tried working with React and JSX. React’s JSX is fundamentally superior to all the “Phase 2” style frameworks above for a few simple reasons:

#### Compile-time Errors

When you make a typo in HTML, you generally have no idea where you screwed up. In many cases it’s a silent run-time error. For example, if you type n-repeat instead of ng-repeat when working with Angular, nothing will happen. Same story with data-bnd vs data-bind in Knockout. In either case, your app will silently fail at runtime. That’s frustrating.

In contrast, when you make a typo in JSX, it won’t compile. Forgot to close that <li> tag? Wouldn’t you love to get rich feedback like this when you make a typo in your HTML?

<pre name="5328" id="5328" class="graf graf--pre graf-after--p">ReactifyError: /components/header.js: Parse Error: **Line 23**: Expected corresponding JSX closing tag for li while parsing file: /components/header.js</pre>

With JSX, this detailed feedback is finally a reality! It’s hard to overemphasize what a big win this is. This rapid feedback loop greatly increases productivity. As I discuss in my Clean Code course, [well- engineered solutions fail fast](http://www.pluralsight.com/courses/writing-clean-code-humans).

#### Leverage the Full Power of JavaScript

Composing your markup within JavaScript means you can enjoy all the power of JavaScript when working with your markup, instead of a small proprietary subset that is offered within HTML-centric frameworks like Angular and Knockout.

> Client-side frameworks shouldn’t require you to learn a proprietary syntax for declaring loops and conditionals.

React avoids the overhead of learning yet another proprietary way to declare looping and basic conditional logic. As you can see above in the Phase 2 section, every two-way binding framework utilizes its own special syntax. In contrast, JSX looks nearly identical to HTML, and it uses plain ‘ol JavaScript for things like conditionals and loops. In an ecosystem as fragmented as JavaScript, not having to learn yet another proprietary data binding syntax is a nice win.

And since you’re writing your markup in the same file as the associated JavaScript data, many IDE’s will give you intellisense support as you reference your functions. Think about how often you’ve made a typo when referencing a function in HTML-oriented frameworks.



![](https://cdn-images-1.medium.com/max/1600/1*Q1aeCkZFM6hB8dkbY4HHqA.png)

Intellisense support as I reference JavaScript functions in JSX? Nice.



### Final Thoughts

JSX isn’t some wild idea. It’s a natural progression. So try not to freak out.

> JSX isn’t revolutionary. It’s evolutionary.

Like most forms of evolution, it’s a clear improvement.

Want to learn more? Check out my new course “[Building Applications with React and Flux](http://www.pluralsight.com/author/cory-house)” on Pluralsight.

Chime in on [Reddit](https://www.reddit.com/r/javascript/comments/3gv4at/reacts_jsx_dont_freak_out_its_evolutionary/) or [Hacker News](https://news.ycombinator.com/item?id=10056366).











* * *







**_Cory House_** is the author of “[Building Applications with React and Flux](https://www.pluralsight.com/courses/react-flux-building-applications)”, “[Clean Code: Writing Code for Humans](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiK1pXx89nJAhUujoMKHeuWAEUQFggcMAA&url=https%3A%2F%2Fwww.pluralsight.com%2Fcourses%2Fwriting-clean-code-humans&usg=AFQjCNEBfkBoN-IgCn_1jFUqWDAUIxcmAw&sig2=Ub9Wup4k4mrw_ffPgYu3tA)” and multiple other courses on Pluralsight. He is a Software Architect at VinSolutions and [trains software developers internationally](http://www.bitnative.com/training/) on software practices like front-end development and clean coding. Cory is a Microsoft MVP, Telerik Developer Expert, and founder of [outlierdeveloper.com](http://www.outlierdeveloper.com).








