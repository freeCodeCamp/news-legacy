---
author: Sergei Garcia
authorTwitter: none
authorFacebook: https://facebook.com/1793825250854268
title: "My journey to becoming a web developer from scratch without a CS degree (and what I learned from it)"
subTitle: "First, let me introduce myself. My name is Sergei Garcia, and I’m a full-time front end developer with 2 years experience. In that time, ..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*zVDcaM6mqhi9m0LP_Sq4Ag.jpeg
url: https://medium.freecodecamp.org/my-journey-to-becoming-a-web-developer-from-scratch-without-a-cs-degree-2-years-later-and-what-i-4a7fd2ff5503
id: my-journey-to-becoming-a-web-developer-from-scratch-without-a-cs-degree-2-years-later-and-what-i-4a7fd2ff5503
date: 2016-08-17T18:29:00.683Z
tags: [
  "Web Development",
  "JavaScript",
  "Tech",
  "Startup",
  "Life Lessons"
]
---
# My journey to becoming a web developer from scratch without a CS degree (and what I learned from it)



![](https://cdn-images-1.medium.com/max/1600/1*zVDcaM6mqhi9m0LP_Sq4Ag.jpeg)



First, let me introduce myself. My name is Sergei Garcia, and I’m a full-time front end developer with 2 years experience. In that time, I’ve worked as a front-end developer for both a Forbes 500 consulting firm and a small company.

This may not sound like a lot of experience, but finishing my second year as a developer has been a huge milestone for me. This is because I had no real experience doing web development — and not much programming experience in general beyond some basic C# and Java training I got from a few online courses. I also didn’t have a computer science degree since I graduated with a degree in IT project management.

I’d never written about my experience despite all the help I’ve received from wonderful resources like Medium, Stack Overflow, and Reddit’s programming subreddits. So today, I decided to change that. Today I’m going to fill you in on what went right, and what didn’t, so that if you’re embarking on this journey, you’ll have better luck than I did.

I know that there are a lot of articles like this, but not very many of them discuss the process with the benefit of an extra two years of hindsight.

I’ll start off with my journey, including what went wrong along the way. If you just care about what my suggestions for the shortest possible route to becoming a web developer from scratch are, feel free to skip to the last section: **The shortest route**.

So, without any further ado, Let’s get started!

### Getting the Basics

After deciding I wanted to get into web development the first question on my mind was “What do I learn?” After doing some research, I ended up making my learning path based on what most entry-level web developer positions asked for, which was:

*   JavaScript
*   HTML & CSS
*   CSS Preprocessors (Less & Sass)
*   Responsive Design
*   AngularJS
*   Design Patterns
*   Git
*   NodeJS
*   Task Runners

Here’s how it went.

#### Javascript

I began my Journey learning JavaScript through [CodeSchool](https://www.codeschool.com/)(paid) and [Codecademy](https://www.codecademy.com/)(free). If you don’t know about these, they’re great websites that allow you to learn to code by coding inside the browser.

I found learning resources like this were the best when you are just getting started. Just be advised that this method of learning gets tiring quickly once you get into more advanced stuff, since their algorithms for checking whether you solved the code example correctly have some accuracy issues. Both of their introductory courses to JavaScript were outstanding and I highly recommend them.

Once I got the basics out of the way, I proceeded to get a stronger JavaScript foundation by reading the [Eloquent Javascript: A Modern Introduction to Programming](http://eloquentjavascript.net/) book by Haverbeke (free).

This book was recommended to me by a lot of people in the JavaScript forums as a must read, and for good reason. That book was tough — especially if you’re just learning programming like I was back then. But I’m glad I didn’t give up and kept at it. It was phenomenal due to the vast scope of programming concepts it covers, even if it was a bit ruthless at times. Whatever you do, don’t skip the code challenges. Once you finish this book, then you can finally say with confidence that you have a good grasp on JavaScript.

You can also optionally learn jQuery (though I really don’t recommend learning it yet — more on this later). You can learn it through CodeSchool’s [Try jQuery](http://try.jquery.com/) course.

#### **HTML & CSS**

After learning JavaScript, I proceeded to learn the fundamentals of HTML & CSS and web design through CodeSchool’s [HTML & CSS learning path](https://www.codeschool.com/learn/html-css). These courses are still my favorites today, since the pacing is great, and the overall scope of what they cover allowed me to acquire a stronger foundation to this.

You could also switch this out easily for something like Codecademy’s [HTML & CSS](https://www.codecademy.com/learn/web) course and still get similar results. Or if you are up for a challenge, Udacity’s course [Intro to HTML and CSS](https://www.udacity.com/course/intro-to-html-and-css--ud304) is far more complete, and slightly more challenging.

**Bonus**: If you can get your hands on Jon Duckett’s [_HTML and CSS: Design and Build Websites_](https://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189/ref=sr_1_3?ie=UTF8&qid=1471443779&sr=8-3&keywords=john+ducket)book, it’s also a rock solid starting point for learning HTML & CSS (with a sprinkle of web design). It’s highly rated (4.7/5 on Amazon), offers a solid introduction to the world of web development. It’s a beautiful book thanks to it’s clean design with big letters and colorful pages. I often come back to it just to admire it.

#### Less / Sass

For those unfamiliar, Less & Sass are CSS transpilers that allow you to write CSS in a more elegant manner. This lets you do things that aren’t normally supported, like nesting CSS rules. Once finished, these CSS transpilers “compile” your code and convert it to normal CSS.

There are 2 major CSS transpilers right now: **Less** and **Sass**. Sass is the more popular one, but I found learning Less first to be easier, mainly because using Sass on your computer requires also installing Ruby, which I wasn’t fond of.

You can get a quick, yet complete overview of Less using [WinLess’s Online Less Compiler](http://winless.org/online-less-compiler) and it’s code examples to see how your Less code would turn into CSS. You can also try Sass online using [SassMeister](http://www.sassmeister.com/) (though this doesn’t include code examples).

It doesn’t matter whether you learn Less or Sass first. They’re extremely similar, so once you know one, you pretty much know the other. You can find a great quick comparison between Less and Sass on Shelby Moulden’s article [Comparison between LESS & SASS](http://shelbymoulden.com/blog/?post=comparison-between-less-and-sass).

#### Responsive Design

I originally learned about responsive design and Bootstrap using Codeschool’s HTML & CSS path, but I recently found Udacity’s course by Google on [Responsive Web Design Fundamentals](https://www.udacity.com/course/responsive-web-design-fundamentals--ud893) to be fantastic at covering the basics and beyond in a far more complete manner than Codeschool did.

You can do responsive design without any additional framework, but it’s far easier with the help of a responsive framework like Bootstrap. Bootstrap’s [official documentation](http://getbootstrap.com/css/) is very well made so you should have no problem at getting started with it.

If you are having trouble grasping it’s basic principles, read Froont’s blog post on [9 basic principles of responsive web design](http://blog.froont.com/9-basic-principles-of-responsive-web-design/). It has beautiful clean & simple animations that help illustrate visually the principles of responsive web design.

#### AngularJS

I didn’t really know what exactly AngularJS was back then, but I knew everyone was talking about it, and that if I wanted to become a web developer I needed to learn it. I found Google Developer’s [Design Decisions in AngularJS](https://www.youtube.com/watch?v=HCR7i5F5L8c) to provide the best general overview of what AngularJS was and how it improved making web applications.

I first thought of learning AngularJS through their official documentation, but this turned out to be a terrible idea. The documentation wasn’t very easy on beginners, and the cluttered formatting made it hard to read and understand.

I then proceeded to learn AngularJS through Codeschool. With my positive experience on the JavaScript and CSS courses also from there, I expected nothing less than a great course. I was wrong. The course was a disaster from the get go, since the algorithm used to check if you got the code example right sometimes didn’t work right and marked your clearly right solution as incorrect. There were even times where all it took to fix the broken validation system was a page refresh. As for the course’s content, it wasn’t great either. It did an ok job at explaining the basic components of an AngularJS application, but it did a terrible job at integrating these into a real application, leaving me with far more questions than I started with.

After some searching around forums, I stumbled upon [Egghead.io](https://egghead.io/)(free / paid) where I had much better luck. Their course material was a lot cleaner, more concise, and more complete, making for a far better experience. Not to mention that apart from their courses, they have bite-sized 2–5 minute lessons that cover important topics. (For example: What is a controller? What is a filter? What is $scope?) These make it really easy to understand the basics. They also have some videos that require payment, but they are usually the ones covering more advanced angular topics you will not need until later on. I took their [AngularJS Fundamentals](https://egghead.io/courses/angularjs-app-from-scratch-getting-started) course and I was fully satisfied with the results (and also became a big fan of Egghead.io’s courses in the process).

#### Design Patterns

Design patterns are basically reusable code solutions that can be repeatedly used to solve common software problems. Having a foundation on this will make you far more competitive software developer in any programming language. This will also make it easier for you to understand other people’s code, since you’ll quickly identify what design pattern they used on their code to better understand it.

I found the 2 best sources to learn this are doFactory’s [JavaScript Design Patterns](http://www.dofactory.com/javascript/design-patterns) and Addy Osmani’s [Learning JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/). I found doFactory a lot easier to understand, while Addy Osmani’s book was a lot more complete.

#### Chrome DevTools

Chrome is one of the most powerful tools for a web developer. The sooner you master it, the more time you can save later on. Codeschool’s free course [Explore and Master Chrome DevTools](http://discover-devtools.codeschool.com/) does a great job at introducing them.

#### Git (Version Control)

Ah, Git — the tool I never knew I needed until I discovered what it could do. Git basically it lets you keep a track of the changes you make to your code so that if things go wrong, you can roll back to a previous point in time. It also lets you see your code’s history.

I found CodeSchool’s free [Try Github](https://try.github.io/levels/1/challenges/1) course to be a friendly way to get started. [Atlassian’s Git training](https://www.atlassian.com/git/tutorials/) was superb at covering the more advanced commands available. Codeschool’s [Git Learning Path](https://www.codeschool.com/learn/git) is also great at covering Git’s fundamentals.

#### NodeJS

It didn’t take long before I learned that having a basic understanding of NodeJS would help me greatly in my quest of becoming a web developer (more on this soon).

I tried Codeschool’s courses on Node, but I found them really lacking in content. I found [NodeSchool.io](http://nodeschool.io/) to be a far better teacher at getting the basics right, and it was fun! I loved the hands-on approach it offered, which was similar to Codeschool and Codecademy — with the added improvement that I was really running NodeJS.

#### Task Runners (Grunt & Gulp)

Grunt and Gulp were quite a big surprise to me in that I had no idea tools like that even existed — but I’m extremely glad they do! Basically, these task runners allow you to automate common tasks. For example, remember Less/Sass? Normally you would have to manually run the CSS compiler every time you make an edit for it to compile the CSS, and then update the browser. Using a task runner, you can set it up to watch your Less/Sass files for changes, and when it detects a change, compile your CSS, and automatically refresh the browser. This is immensely useful at reducing your development time.

There are 2 main task runners right now: Grunt and Gulp. While they do the exact same thing, they work in very different ways, with Grunt being a lot more verbose and configuration oriented, and Gulp being shorter to write and preferring code over configuration.

Knowing NodeJS will help you write better Grunt and Gulp files since **both of them run on NodeJS**. You can pick whichever you want, but I found Gulp to be far easier to learn and write. I still today prefer it because of its minimalist — yet powerful — pipe-based approach.

I found Scotch.io’s courses on [Grunt](https://scotch.io/tutorials/a-simple-guide-to-getting-started-with-grunt) and [Gulp](https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js) to be among the best out there.

### Challenges I faced on my first job

Once I covered the fundamentals of web development, I was ready for my first web development interview for an entry level position. I won’t go into details about the interview since this isn’t this article’s main focus. But I will say that I was told my relatively strong JavaScript knowledge help me secure the position. (Thanks, Eloquent JavaScript!)

I have to say, I was quite nervous on my first project. It involved making reusable web components with HTML, CSS and JavaScript, along with Bootstrap, Sass, Grunt as tooling. T

he two biggest mistakes I found at first were:

1.  **Fear of failure.** Because I was the new guy, I was constantly in fear of my code being wrong or poorly made, so I spent a lot of time double-checking everything and adhered to coding best practices. Because of this, I rarely attempted solutions in creative new ways because of my fear that it might not work correctly at the end. This effectively shut down my drive to learn new things.
2.  **Doing things because “X” person who knows better than me said so.** I did this a lot at first. While not completely wrong, doing things in a certain way only because “X” expert on the matter said so — without knowing why — lead to me not really knowing when to why things were done the way they were. I soon learned that there were exceptions to everything, and that **you always should know the reason behind best practices.**

Thankfully, I had an understanding team lead during my first project who helped me overcome these issues. He constantly motivated me to try new things, even if things went wrong sometimes. He also told me to question everything — even his teachings.

In time, I learnt my lesson. From then on, I’ve always been a person that looks forward to trying new things. I always try to understand why best practices exist, when they’re right, and when they don’t apply to a situation.

Using AngularJS in an actual project also posed quite a big challenge for me. This was mainly because a lot of the things I did with it, I did without fully understanding why they happened. I thought of it as “angular magic.”

There were many times that I wished I knew how Angular actually worked, but it was scary looking at the documentation.

I eventually stumbled upon an amazing book called [Build Your Own AngularJS](http://teropa.info/build-your-own-angular/). I didn’t read all of it, but reading the section on Scopes and Watchers and how they worked really unveiled how the magic behind angular, wasn’t really magic. It was just a clever way of maintaining data-binding using dirty checking and nested scopes. I highly recommend this book to anyone seeking to fully understand AngularJS.

The other challenge I faced a year later was how fast web development progressed. I had just mastered AngularJS and Grunt, and was feeling all proud and mighty — only to soon find out Gulp and ReactJS were on the horizon. And a year later after learning them, Webpack started gaining ground, and I had to learn that too. As you can imagine, a big part of me was pretty disappointed with how quickly some of my knowledge became obsolete. But a coworker soon enlightened me by telling me something that changed how I viewed libraries and frameworks forever:

> **“Libraries and Frameworks may become obsolete, but the concepts and solutions they propose often survive the test of time.”**

He was right. AngularJS may have become obsolete, but fully understanding the magic behind it helped me better understand React’s web component architecture, which improved upon Angular’s Directives concept. It also helped me understand how ReactJS gained so much popularity, as well as what kind of future awaited.

I don’t recall facing any other major challenges on my subsequent projects. But what I will say is that over the course of the 2 years I’ve been doing web development, the #1 thing that has helped succeed (according to my own coworkers) was my excitement and my powerful drive to always be on the lookout for new things to learn. I soon found out this was a winning combination with web development since things over here change really, really fast, with new frameworks and libraries constantly emerging.

On the flip side of the coin, the other thing that helped me a ton — and something I found out quite recently actually — was understanding what **not** to learn. This became critical to my process of becoming a better web developer.

It’s not uncommon to see people criticizing the abnormally fast pace of evolution of web technologies, or how a new JavaScript library or framework comes out nearly every day. But in time I saw the light and finally understood:

> _You don’t have to learn every new library or framework that comes out._

Often it’s a great idea to do a simple hello world example app so you can see what a framework offers. Then you can move on. But usually, you should try to focus on what best suits your project’s needs. This can be hard at first, but thankfully great places like Stack Overflow, Medium and Reddit exist where you can find useful discussions between frameworks, and figure out which ones fit your specific use cases the best.

### Going Further

In the upcoming years, I proceeded to continuously improve in the following ways

#### JavaScript

Once you finish Eloquent JavaScript, it’s rather easy to say and feel like you’ve mastered JavaScript, but then comes [You Don’t Know JS](https://github.com/getify/You-Dont-Know-JS) and it absolutely destroys you (or at least it did to me). This book series (free by the way) was mentioned to me several times by a few senior web developers in the office as _the book_ to read, and that only until I’ve read it can I say I fully know JavaScript. They were right, since page after page it continuously blew my mind as to how truly complex JavaScript really was, as well as many, many common pitfalls un-experienced & experienced people without a proper JavaScript understanding may have.

Reading that book series really opened my mind, and I also highly recommend it to anyone wanting to call themselves an expert JavaScript developer. Once you got that out of the way, there are 2 extra resources I highly recommend to get an even further, more advanced JavaScript knowledge;

*   [JavaScript, The Better Parts](https://vimeo.com/97419177): An amazing talk by D. Crockford that talks about JavaScript’s biggest weaknesses, it’s “Foot Guns,” and how to utilize them as its strengths.
*   [The Two Pillars of JavaScript](https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3#.91eor7lrd): a solid article by recognized JavaScript Medium writer Eric Elliott that talks about the 2 great pillars of JavaScript: Prototypical Inheritance and Functional Programming

Once you have a profound understanding of JavaScript, proceed with ECMASCript 2015 (also known as ES6), the latest, and current JavaScript standard. Smashing Magazine’s article [ECMAScript 6 (ES6): What’s New In The Next Version Of JavaScript](https://www.smashingmagazine.com/2015/10/es6-whats-new-next-version-javascript/) is a great short review of what’s new in ES6\. You can try ES6 in the browser using [Babel’s online transpiler](https://babeljs.io/repl/).

#### CSS

CSS can get messy and disorganized very, very quickly. There have been quite a few different methodologies proposed to write cleaner CSS, but 2 stand out which I highly recommend you read about ASAP to stay competitive:

*   [SMACSS](https://smacss.com/): Scalable and Modular Architecture for CSS. A flexible guide to developing sites small and large.
*   [BEM](http://getbem.com/): a methodology that helps you to achieve reusable components and code sharing in the front-end.

I personally prefer SMACSS because of it’s cleaner look, but some companies and CSS Frameworks still use BEM, so it’s worth knowing both.

You should also start focusing on your CSS’s performance. Smashing Magazine’s article [Managing Mobile Performance Optimization](https://www.smashingmagazine.com/2016/03/managing-mobile-performance-optimization/) and HTML5 Rocks’s article [High Performance Animation](http://www.html5rocks.com/en/tutorials/speed/high-performance-animations/) did a solid job at providing a head start on this. A quick read through both articles should give you a solid foundation.

#### JavaScript Bundlers

By now you should have strong understanding of Grunt or Gulp. The next step is adding a JavaScript bundler to your task runner, which will allow for a more modular organization of your JavaScript application.

The two biggest players right now are:

*   [Browserify](http://browserify.org/): lets you require modules in the browser by bundling up all of your dependencies.
*   [Webpack](https://webpack.github.io/): basically Browserify on steroids. Harder to configure and set up.

Scotch.io’s mini-course [Getting Started with Browserify](https://scotch.io/tutorials/getting-started-with-browserify) can provide you a jump-start with browserify, while David Fox Powell article [Why Can’t Anyone Write a Simple Webpack Tutorial](http://Why%20Can’t%20Anyone%20Write%20a%20Simple%20Webpack%20Tutorial?)? is a great, fun to read introduction to webpack.

Personally I haven’t spent a lot of time using webpack, but in my time with it, I have to say it’s been amazing — even if it’s slightly harder to set up. If you are just getting started, I’d go for Browserify since it’s a lot simpler to set up. Just be aware that webpack is the future, and what bigger projects are starting to use.

#### ReactJS

ReactJS is quickly gaining popularity, and it doesn’t seem to be slowing down — to the extent that people are asking “Is React killing Angular?”

Scotch.io’s [Learning React.js: Getting Started and Concepts](https://scotch.io/tutorials/learning-react-getting-started-and-concepts) provides a solid overview of React. Once you got that out of the way, continue with Egghead.io’s course on [React Fundamentals](https://egghead.io/courses/react-fundamentals) where you will build a fully working ReactJS app and then migrate it to ES6 syntax. You can follow up with the [official ReactJS documentation](https://facebook.github.io/react/docs/getting-started.html) which is very well made and will allow you to fully master it.

Since React is only the view, it’s highly recommended you learn Redux. Most courses on Redux are a bit complex in my opinion, but [CSS Tricks Leveling Up with React: Redux](https://css-tricks.com/learning-react-redux/) does score a great balance between simplicity and being informative at getting started with Redux.

You might have also heard of Flux at this point, but if you’re wondering why you should use Redux over Flux, check out the question on Stack Overflow [Why use Redux over Facebook Flux?](http://stackoverflow.com/questions/32461229/why-use-redux-over-facebook-flux) which was answered by Redux’s creator!

### Looking back on my mistakes and what I learned

I made a lot of mistakes in my 2 years of learning web development. Overall, I think my biggest mistake was not mastering the basics before moving on to libraries and frameworks. I guess this applies to almost every programming language out there, but in my opinion it applies even more to JavaScript. This is because in many ways, JavaScript is a broken language and contains a lot of “Foot Guns” (you should have heard of this if you watched D. Crockford’s talk on “JavaScript, the better parts” I mentioned earlier). These can make life insufferably hard if you don’t fully understand them.

I recall once having gotten stuck in an AngularJS issue with $scope which took me 3 days to debug, only to find it wasn’t even an AngularJS issue, but a JavaScript issue that I caused myself because of failing to understand how _this_ works.

#### Clean Code

It’s strange that I don’t see this talked about as often. I didn’t always care for writing clean code, but honestly it’s one of the things I’m most proud of having learned. This is because everyone loves to complain how their last place had one of the worst, ugliest code base in the world. So why can’t anyone talk about how great their last one was? How their code ended up so clean and well made they were proud of it?

This is a trend I’d like to change, and I believe a difference can be made if enough people push for it. Strive to make variable and function names understandable in English, even if you have to write a bit more. Not doing so will only lead to you having to manually document it sometime in the future to make it clearer. This will also cause your overall codebase to become harder to understand by new developers and yourself. Yes, yourself. Why yourself? Because if you’re not enforcing clean code, what makes you think your coworkers should enforce it and write clean code for you to easily understand? Let’s lead by example.

And if that isn’t a good enough incentive, people very often recognize and value clean code writers. You’ll find that by writing clean code your coworkers and friends will enjoy working with you even more, and in turn, you’ll live a happier life.

#### jQuery

Some of you might notice I also didn’t make much of an emphasis on jQuery. This is because in my experience, I found jQuery did me more harm than good at first. Some of you may not agree, but please let me explain: When I first learned it, the general idea I understood was that jQuery was everywhere and that you could use it for pretty much everything. Because of this, I got used to using jQuery for pretty much anything, and for any problem I encountered, I looked for a solution for it that used jQuery.

Don’t get me wrong, jQuery was awesome in my time using it, so awesome in fact, that I blindly ignored that 90% of what I did with jQuery could be done natively in modern browsers in a similarly easy syntax.

You may now be thinking: “So what’s wrong with that? jQuery doesn’t weight all that much anyway and using it you still end up writing less code than if you did things natively.” But using jQuery over native APIs wasn’t the problem. The problem was that my entire way of thinking and all the solutions to common problems I knew up until that point required jQuery to work. And this became a huge problem when I got my first project and was told jQuery wasn’t a dependency.

Using jQuery made me useless without it, and made me completely ignore the native methods and solutions that have always existed. It made all my solutions less portable too, since using them required jQuery.

Since then, I’ve strived to not use jQuery unless it is absolutely necessary and truly provides big improvement in efficiency and readability to our codebase (for example, heavy DOM manipulation).

Once again, don’t get me wrong, jQuery is great, but if I could go back in time and meet my past self that was just learning web development, I’d heavily advise myself against learning jQuery altogether until I’ve learned how to do things without it. If you are having trouble doing the switch like I did, check out [You Might Not Need jQuery](http://youmightnotneedjquery.com/).

#### Courses

As for course material; while a lot of CodeSchool’s courses were outstanding (The HTML & CSS branch was specially fantastic), even if a few of their courses on frameworks fell flat a bit flat (AngularJS, BackboneJS, etc.).

I also took quite a lot of [Pluralsight](https://www.pluralsight.com/) courses, which I didn’t mention because after all this time, I’ve reached the conclusion that picking their learning path is overall **a bad idea and unreliable**. Since their courses are made by teachers who aren’t always (in my opinion) very good at teaching, I found their course quality fluctuates wildly since their course quality standards are non-existent. I’ve had courses where even the person giving the course sounded like he was falling asleep. And I honestly don’t have the attention span to keep paying attention on a 6–10 hour course — and a lot of them last that long, if not longer.

I spent a good 80–100 hours of training in Pluralsight, and I honestly want a good part of it back. Don’t get me wrong, I had a few amazing courses on Pluralsight, but their focus on quantity over quality really made me waste my time. I could have learnt so much more if I had taken courses from better sources like Egghead.io and CodeSchool, where they value more quality of quantity.

The only reason I could ever think of someone using Pluralsight is to take a course that no other website has in some more obscure technology (like Installshield, or Xamarin), or to take a few very specific courses that they know were very well received and reviewed (For example, John Papa’s Angular Fundamentals).

Overall, if you want to use Pluralsight, be sure that you are taking courses hand-picked by someone that took them first and that are recognized as high quality and useful.

I also recently tried [Team Treehouse](https://teamtreehouse.com) training and I’ve got to say, I’m amazed at the quality that went into their courses, even rivaling that of CodeSchool, and their course material is highly extensive.

After skimming through the HTML, CSS and JavaScript learning paths there, I see you could easily acquire the foundation of pretty much everything. Don’t believe me? Just look at [their learning tracks](https://teamtreehouse.com/tracks) and tell me it’s not amazing. Sure, it’s a bit expensive at $30 USD a month, but in my opinion it’s incredibly worth it. (I’m paying for it right now to learn WordPress since I need it for a freelance project and the material is great).

#### A word on paid courses

I felt a need to speak about this since I’ve noticed the general consensus that you can learn programming without paying a dime and be as competitive as one that paid for a course. While true, I cannot stress enough the value paying for the right course has. Sure, quite a lot of the most valuable course material I’ve written about is free, but a lot of it is also paid. Mainly because sometimes you just can’t beat having someone carefully explain things to you in a visual way.

Yes, there are terrible learning paid courses which I would advise against since their value proposition is questionable (see Pluralsight), but others like Egghead.io, CodeSchool, and Team Treehouse offer outstanding bang-for-your-buck, despite their relatively costly monthly subscription ($25-$30 a month). Plus, they all have free 7–15 day trials so you can see which one works best for you.

If you play your cards right, paying 1–2 months of either of them can easily net you knowledge you would only otherwise get after stumbling upon countless of articles and blog posts over a year. They’re honestly that good.

So yes, they are not necessary, but if you can afford at least one month, you can be sure it will give you a strong edge.

#### The secret sauce for success

I’ve met a lot of developers over the past 2 years I’ve been a web developer. Along my journey, I’ve met a few developers who really stood out — developers who were clearly in a league of their own, and to whom me and everyone else looked up to. I found these individuals shared quite a few characteristics, which I’d like to share with you right now. These are in my opinion the secret sauce to being a successful web developer:

*   **Love what you do.** This is simply the most important characteristic of them all. If you don’t love what you do (be it CSS Styling or JavaScript), it will truly show in what you do. Those who are passionate about what they do often clearly stand out from the crowd.
*   **Be generous and share your knowledge**. It’s very easy to want to keep that new CSS/JavaScript hack you found that solves the project’s issues a secret, but please don’t. The people who share their knowledge the most are often the most valuable, since they can be placed in any kind of team and improve it’s quality by a huge margin.
*   **Always be on the lookout for new things**. Most of the successful developers I’ve met share this common trait. Whether it be by reading blogs, spending lots of time in programming related discussions, or even talking about what’s new in web development during lunch breaks. Being on the lookout for new things all the time allows the best developers to always stay ahead of the curve.

### The shortest route

Whew, this article took a while to finish (6 hours and counting). We’re almost done! You may be wondering: “Ok, cool story, but what’s the quickest route?” And so, here it is.

I’ve organized this in the way that I would take it if I could go back and do things right. I also added a few bonuses, which I would have loved to have had back then. Enjoy!

#### Javascript

1.  [CodeSchool](https://www.codeschool.com/learn/javascript) or [Treehouse’s](https://teamtreehouse.com/tracks/full-stack-javascript) Javascript learning path (paid) OR [Codecademy’s Javascript course](https://www.codecademy.com/learn/javascript)
2.  [Eloquent JavaScript](http://eloquentjavascript.net/)
3.  [You Don’t Know JS](https://github.com/getify/You-Dont-Know-JS)
4.  [JS: The Right Way](http://jstherightway.org)
5.  [Learn ES6](https://egghead.io/courses/learn-es6-ecmascript-2015) by Egghead.io

#### HTML & CSS

1.  [CodeSchool](https://www.codeschool.com/learn/html-css) or [Treehouse’s](https://teamtreehouse.com/tracks) HTML & CSS learning path(Paid) OR [HTML and CSS: Design and Build Websites](https://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189/ref=sr_1_3?ie=UTF8&qid=1471454089&sr=8-3&keywords=jon+ducket) by John Ducket OR [Codecademy’s HTML & CSS course](https://www.codecademy.com/learn/web).
2.  [Specifics on CSS Specifity](https://css-tricks.com/specifics-on-css-specificity/) by CSS Tricks
3.  [Learn CSS Layout](http://learnlayout.com/)
4.  [SMACSS](https://smacss.com/)
5.  [9 basic principles of responsive web design](http://blog.froont.com/9-basic-principles-of-responsive-web-design/) by Front
6.  [Responsive Web Design Fundamentals](https://www.udacity.com/course/responsive-web-design-fundamentals--ud893) by Google on Udacity (Take if you didn’t use CodeSchool or Treehouse learning path)
7.  [Managing Mobile Performance Optimization](https://www.smashingmagazine.com/2016/03/managing-mobile-performance-optimization/) by Smashing Magazine OR [Browser Rendering Optimization](https://www.udacity.com/course/browser-rendering-optimization--ud860) and [Website Performance Optimization](https://www.udacity.com/course/website-performance-optimization--ud884) by Google on Udacity
8.  [Web fundamentals](https://developers.google.com/web/fundamentals/?hl=en) by Google

#### Developer Tools

1.  [Explore and Master DevTools](http://discover-devtools.codeschool.com/) by CodeSchool
2.  [Learn Git](https://www.codecademy.com/learn/learn-git) by Codecademy and [Try Github](https://try.github.io/levels/1/challenges/1) by Codeschool
3.  [Introduction to Linux Commands](https://www.smashingmagazine.com/2012/01/introduction-to-linux-commands/) by Smashing Magazine
4.  [Automate Your Tasks Easily with Gulp.js](https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js) by Scotch.io

#### AngularJS

1.  [Design Decisions in AngularJS](https://www.youtube.com/watch?v=HCR7i5F5L8c) by Google Developers (Intro to AngularJS)
2.  [AngularJS fundamentals](https://egghead.io/courses/angularjs-app-from-scratch-getting-started) by Egghead.io
3.  [John Papa’s Angular Styleguide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)
4.  [Creating a Single Page Todo App with Node and Angular](https://scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular) (MEAN) by Scotch.io
5.  [AngularJS application structure](https://egghead.io/courses/angularjs-application-architecture) by Egghead.io (Paid) OR Scotch.io’s [Angular Courses](https://scotch.io/tag/angular-js)

#### ReactJS

1.  [Learning React.js: Getting Started and Concepts](https://scotch.io/tutorials/learning-react-getting-started-and-concepts) by Scotch.io
2.  [Intro to webpack](https://egghead.io/lessons/javascript-intro-to-webpack) by Egghead.io
3.  [React Fundamentals](https://egghead.io/courses/react-fundamentals) by Egghead.io
4.  [Leveling Up with React: Redux](https://css-tricks.com/learning-react-redux/) by CSS Tricks

#### Back End

1.  [NodeJS tutorials by NodeSchool.io](http://nodeschool.io/)
2.  [How I explained REST to my Wife](http://www.looah.com/source/view/2284)
3.  [Creating a Single Page Todo App with Node and Angular](https://scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular) by Scotch.io (Node, ExpressJS, MongoDB, Angular, REST)

#### Bonus: Resources

Completely optional, but some of my favorite articles and resources which I’ve found over the years which you will probably love if you are interested in their respective topic.

*   [Web Design in 4 minutes](http://jgthms.com/web-design-in-4-minutes/). A very creative and original interactive tutorial that teaches you the fundamentals of web design.
*   [Awwards](http://www.awwwards.com/). Looking for web design inspiration? Look no further.
*   [Why Hiring is so hard in tech](https://medium.com/javascript-scene/why-hiring-is-so-hard-in-tech-c462c3230017) by Eric Elliott. Here Eric is does an amazing job at summarizing how it’s surprisingly hard to find great developers, and how to become one.
*   [NoSQL database systems mega comparison](https://kkovacs.eu/cassandra-vs-mongodb-vs-couchdb-vs-redis) by Kristof Kovacs. This is a superb comparison between the most popular NoSQL database systems out there. MongoDB, Redis, CouchDB, Cassandra, ElasticSearch, they and more are all here.
*   [XSS Game](https://xss-game.appspot.com/). Cross-site scripting (XSS) bugs are one of the most common and dangerous types of vulnerabilities in Web applications. Using this awesome resource you can learn how to find and exploit XSS bugs, and how to prevent them from happening to your web application.
*   [How To Write Unmaintainable Code](https://github.com/Droogans/unmaintainable-code). Hilarious article on how _not_towrite maintainable, clean code.

#### Bonus: My tools

I thought it’d also be nice to share some of the tools I discovered (some well known, some not so much) that have made my life easier as web developer so here they are.

*   [Jetbrains Webstorm](https://www.jetbrains.com/webstorm/): Full featured Web Development IDE. (My editor of choice) Paid, but offers a 1 year free license for students.
*   [Atom.io](https://atom.io/): Highly extensible text editor with IDE like features rivaling Webstorm. Free.
*   [Sublime Text](https://www.sublimetext.com/): Lightning fast text editor with plugins support and an aesthetically pleasing look. (I normally keep Webstorm/Atom installed as IDE for serious work, and Sublime Text installed for quick edits to files.)
*   [caniuse.com](http://caniuse.com/): Browser support is critical for websites, and this is the #1 resource at figuring out what features are supported by which browser version and which are.
*   [Cloud 9](https://c9.io/): Cloud based development environment and IDE with Git support that runs on Linux. Great for programming remotely and testing out NodeJS or other server side things without needing to install anything on your machine
*   [CodePen](https://codepen.io/), [Plunker](http://plnkr.co/edit) and [JSFiddle](https://jsfiddle.net/): Great cloud based front end playgrounds that let you do quick HTML/CSS/JS demos you can share, or work on later on if you create a free account. CodePen is often best for CSS related things because of it’s minimalistic interface and plethora of CSS related features, Plunker for JavaScript demos because of it’s powerful JS features, and JSFiddle for demos that you wish to collaborate with others in real time thanks to it’s live editor sharing collaboration feature.
*   [Vanilla List](http://www.vanillalist.com/): A repository of JavaScript plugins and libraries using only vanilla JavaScript (meaning they require no libraries to work, like jQuery)
*   [YouMightNotNeedjQuery](http://youmightnotneedjquery.com/): You probably don’t. See for yourself.
*   [PublicAPIs](https://www.publicapis.com/): Ever wondered what public APIs exist? Look no further!
*   [Gravit.io](https://www.gravit.io): Cloud based design application rivaling adobe illustrator. (Free!) Useful for quick mockups and web design.
*   [Adobe Kuler](https://color.adobe.com): Webapp to help you create harmonious color combinations for any website. Also has an “Explore” showcase of color palettes built by other designers as well as a ranking system to help inspire you.
*   [Name that color](http://chir.ag/projects/name-that-color): Stop spending lots of time figuring out how to name your color variables in less/sass and just use their rightful name with this webapp

### Conclusion

I’d just like to say I really enjoyed writing this, and it makes me really happy to have been finally able to give something back to the incredibly supportive programming community everywhere.

As some of you already noticed, this is my first blog post, but you can be sure I plan to write more. Just don’t expect one every week. Remember: quality over quantity!

If any of you have any questions left, feel free to leave a comment and I’ll do my best to get back to you ASAP.

I hope this was useful to you guys, until next time, Best!











* * *







**Jan ’17 Update**: Wow, this really blew up! I just want to thank everyone so much for the kind words, and to let you all know I’m still here, and still working on my next article: “_So you want to learn JavaScript in 2017\. Confused? So was I._” where I solely focus and go in depth on the JavaScript Ecosystem in 2017\. I’m working **really hard** to make it as chock-full of content as this one, while also improving the quality and range of it’s content. It should be published around **March ’17**, so if you are interested in that, don’t forget to ♥ this article and Follow me on Medium. Have a great day everyone!








