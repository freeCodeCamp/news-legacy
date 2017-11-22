---
author: Samer Buna
authorTwitter: https://twitter.com/samerbuna
authorFacebook: https://facebook.com/568190226682058
title: "Hard Coding Concepts Explained with Simple Real-life Analogies"
subTitle: "How to explain coding concepts like streams, promises, linting, and declarative programming to a 5-year-old"
coverSrc: https://cdn-images-1.medium.com/max/2000/1*_vKRQ66IBIliuqjqkQBLUQ.png
url: https://medium.freecodecamp.org/hard-coding-concepts-explained-with-simple-real-life-analogies-280635e98e37
id: hard-coding-concepts-explained-with-simple-real-life-analogies-280635e98e37
date: 2017-11-08T19:12:40.091Z
tags: [
  "Life Lessons",
  "Tech",
  "Startup",
  "Web Development",
  "Self Improvement"
]
---
# Hard Coding Concepts Explained with Simple Real-life Analogies

## How to explain coding concepts like streams, promises, linting, and declarative programming to a 5-year-old

I love thinking about coding concepts by comparing them to familiar things we know in life. There are so many analogies out there about coding concepts. Some of them are good while others are confusing, mainly because they focus on partial aspects of a concept while ignoring many others. This article will summarize some of the analogies that I think best fit a few coding concepts in complete ways.







![](https://cdn-images-1.medium.com/max/2000/1*_vKRQ66IBIliuqjqkQBLUQ.png)

Warning: do not read this article on an empty stomach







I will start with simple concepts and move on to harder ones. Let’s start with coding itself. Coding can be compared to writing cooking recipes. A recipe in this analogy is the program and the cook is the computer. A recipe is a list of instructions for a cook to follow and a program is a list of instructions for a computer to execute.

This is a very simple analogy given that a recipe is written in a human language and a program is written in a computer language and those are very different languages (unless your recipes have closures and promises!). There are also not a lot of unexpected things to plan for in a recipe while a computer program will have many. Regardless of its simplicity, it is a good way to show how a computer carries out a list of instructions sequentially. It also shows where one instruction line can use any result from executing prior instruction lines.

Some recipes will even have [if-statements](https://medium.com/@samerbuna/coding-tip-try-to-code-without-if-statements-d06799eed231): if cooking for 2, 4 or 8! Some recipes will have [loops](https://medium.com/@samerbuna/coding-tip-try-to-code-without-loops-18694cf06428): keep beating that mix until…

I also like this analogy because of all the ready items and tools that you can use in your recipes — like the cake mix that you can use to make cupcakes and that specially-shaped pan that makes it so much easier to create cupcakes.

The use of ready items and tools is like including and using a package of code written by others in your own code.

<pre name="bfb6" id="bfb6" class="graf graf--pre graf-after--p">// The making of a cupcake  
// First steps:</pre>

<pre name="2b42" id="2b42" class="graf graf--pre graf-after--pre">$ npm install cake-mix  
$ npm install cupcake-pan</pre>

[_NPM_](https://www.npmjs.com/) is the package manager for [_Node.js_](https://nodejs.org/en/), which a very popular _framework_ for writing JavaScript applications. In this analogy, Node.js is like the kitchen itself. It allows you to execute lines in your recipes by using built-in modules like your oven and sink.

Speaking of unhealthy food, this next analogy is for learning how to code and is compared to eating habits. I particularly LOVE this analogy and what it conveys because it helps me to stay on track in my code learning journey. For me, this began in high school and will continue until my brain reaches its last instruction: die();

#### Learning To Code

Learning to code is like trying to lose weight. This analogy applies to learning anything really, but learning to code is a special match here.

“Losing Weight” is a negative term. We should really call it “Gaining Health.” In that sense, it is very much comparable to “Gaining Knowledge.” The educational resources you have available to you are like your food options. Some are just okay, some are great, and some are completely bad for you. Eating healthy and exercising are the main two activities that will help you gain health. Similarly, consuming good educational resources and practicing coding by hand are the main two activities that will help you gain good coding knowledge.

So how do you learn “healthy”? When you commit to eating healthy, you use filters like _organic_, _local_, _reduced-fat_, _grass-fed_, and _non-gmo._ It is exactly the same with healthy educational resources except these labels are not yet as clear. I hope educational resources will someday have verifiable and relevant labels too. Maybe labels like “not-sponsored,” “no-marketing,” “approved-by-experts,” “tightly-edited,” and “dragons-ahead.”

Yet, instead of filtering by the content, you can easily filter by the good brands. I do that with food too. I know and trust a few brands and I mostly use those. It is easier. With educational resources, there are some brands (publications and people) that you should just follow all the time.

After filtering your knowledge intake to only the good resources, you just need to exercise! Practice everything you learn, but not just by re-doing exactly what you learned. Also challenge yourself to do something slightly different around the topics that you learned. If you are lucky, you will get stuck! Then you will permanently learn something else when you get unstuck.

Exercise is for both the body and the mind.

#### Variables

_Variables are used in computer programs to hold data_. This is a very simplified statement and it is by many measures simply wrong.

Variables do not hold data. They just point to it. Data is held in the computer’s memory. You can compare variables to the labels you place on your email messages (or notes, or files).

_All code samples in this article are written in JavaScript._ [_JavaScript is a very easy to learn computer language_](https://medium.com/@samerbuna/lets-learn-coding-introduction-and-basics-65e31414a197)_._

In Gmail, a label is a pointer to an email or a list of emails. Many labels can point to the same email. This is similar to assigning another variable to an existing variable:

<pre name="c578" id="c578" class="graf graf--pre graf-after--p">let work = [email1, email2, email3];  
let important = work;</pre>

Both work and important are now labels that point to the exact same list of emails.

Some variables represent _constant references_. They cannot be changed. This is like the “_sent_” label in Gmail. While we can change the work label above and make it point to a different list of emails, we cannot change the label sent. You cannot point the _sent_ label to a different list of emails. You can only make it point to more emails.

<pre name="ea7e" id="ea7e" class="graf graf--pre graf-after--p">const sent = [];</pre>

<pre name="0c2f" id="0c2f" class="graf graf--pre graf-after--pre">// You cannot change the _meaning_ of sent now  
// But you can add more values to it:</pre>

<pre name="a31b" id="a31b" class="graf graf--pre graf-after--pre">sent.push(new Email());</pre>

#### Errors and Exceptions

A programmer’s expertise is largely about how to deal with errors. [Expert programmers](https://medium.com/@samerbuna/software-engineering-is-different-from-programming-b108c135af26) love errors because, for them, errors mean progress.

Sometimes we expect to see these wonderful red messages and if we do not we know that the code is simply wrong!

I love the phrase “_listen_ to your code” because I think code evolves by communicating to us using errors.

This is exactly like raising kids.

The most important parenting concept that I realized, with practice, is how kids communicate by misbehaving. This is because they do not have a logical brain yet. I think programs do the exact same thing. They also communicate by misbehaving (producing errors) because programs are not completely logical. Your task as a programmer is to add more logic in the code to handle the cases that originally produced errors. This is just like how a parent’s task is to teach the misbehaving kid what is wrong with that bad behavior and what to do differently next time.

Some errors are not recoverable and a program encountering those should just exit (and be rebooted). This is like if your heart stops. There is not much that can be done except to reboot it with an electric shock. This is why we monitor our programs and reboot them when they get to that state. Luckily, the process of rebooting a program is not as dramatic.

Most errors that happen during the early development of programs help improve these programs so that the errors never happen. This is how good kids are raised. They do not repeat the misbehaving because now they have good logic to guide them in a good direction.

Some errors evolve to be exceptions. Exceptions are expected errors. Errors that we can plan for and recover from. The best coding example here is a Network Connection error while we make a program, for example, download some data. This is very much expected because we know network connections could be unreliable so we plan for that error. When that error happens, let’s label the task of downloading that data as incomplete. Queue it somewhere, and re-try it at a later time (see below for an analogy for queuing).

What we did with this planned exception is give the computer a different set of instructions (a different recipe) to do when that error happens. We do exactly that with our kids as well. We give them instructions about what to do in certain future scenarios that we expect (or fear in this case).

<pre name="1efa" id="1efa" class="graf graf--pre graf-after--p">// Hey kids  
if (stranger.offersYou(chocolate)) {  
  doNotAccept();  
  doNotTalkTo(stranger);  
  walkAway();  
}</pre>

<pre name="813a" id="813a" class="graf graf--pre graf-after--pre">if (stranger.triesToForceYouToDoSomething()) {  
  screamFor(help);  
  runAway();  
  call(911);  
}</pre>

#### Reactive Programming and Streams

Reactive programming is a popular method for writing code that is based on _reacting to changes_. It is inspired by our everyday life and how we take actions and communicate with others. When performing everyday life activities, we try to multitask when we can but the brain cannot multitask no matter how hard we try. The only way we humans can multitask is to _switch tasks_ and split them efficiently during their lifetime. This makes more sense when the tasks that we need to do require some amount of _waiting_, which is almost always the case. We actually always switch-tasks, even when we are not aware of it.

Reactive programming is simply to program using, and relying on, _events_ instead of the order of lines in the code. Usually, this involves more than one event, and those events happen in a sequence over time. We call this sequence of events a “_stream_”.

Think of events as anything that might happen in the future. For example, you know that Jane (a store owner) is always tweeting interesting things on Twitter. Every time she tweets something we call that an “event”. If you look at Jane’s Twitter feed, you have a sequence of “events” happening over time (a stream of events). Reactive programming is named so because we get to “react” to those events. For example, imagine that you are waiting for Jane to tweet a promotional code about something cool she sells in her store. You want to “react” to that tweet and buy the cool thing using the promotional code. In a simplified picture, that is exactly what Reactive programming is all about.

To be able to react to an event, we have to be _monitoring_ it. If we do not track the event, we will never know when to react to it. On Twitter, to monitor the events of Jane tweeting, we follow Jane and set our phone to notify us every time she tweets. When she does, we look at the tweet and make a decision on whether we need to further react to it or not.

In reactive programming, the process of monitoring an event is known as listening or _subscribing_ to the event. This is, in fact, very similar to subscribing to a newsletter. When you subscribe to a newsletter on the Web, you supply your email address. Every time there is a new issue of the newsletter your email address will be used as the way for you to get a copy of the issue. Similarly, we subscribe to an event stream with a function. Every time there is a new event, the stream will use the function to enable our code to react to the event. In this analogy, the newsletter platform is the event stream. Every issue of the newsletter is an event and your email is the function you use to subscribe to the event stream.

Now imagine a dynamic newsletter that allows you to select topics and send you only the news items that match your topics. You are basically filtering the newsletter issues to your liking and that is something we can do on event streams as well. Also, imagine that you have subscribed to several newsletters using different email addresses. You later decided that you want all issues of the newsletters to be sent to a new single email address. One easy thing you can do is to set an email rule that forwards any issues from any newsletter to the new email address. You are basically merging multiple newsletter issues into one email address, which is another thing we can do with event streams.

Another way to think about event streams is to compare them to regular arrays. They are actually very similar. Arrays are a sequence of values in space while event streams are a sequence of values over time. In reactive programming, all the functional operations that we can do on an array. Filtering, reducing, mapping, combining, piping can all be done on event streams. We can filter an event stream, reduce the values of an event stream, map an event stream to another, combine streams, and make one stream an input to another. These are all options that yield new streams of values over time.

#### Callbacks and Promises

Imagine you ask someone to give you something that needs some time to be prepared. They take your order and your name and tell you to wait to be called when your order is ready. After a while, they call your name and give you what you asked for.

The name you originally gave them is the _callback_ function here. They called it with the object that was requested.

This is like when you order a latte from Starbucks (in the store, not in the drive-thru). They synchronously record your order and name and then you wait until your name is called. When that happens, you receive your latte:

<pre name="4eb2" id="4eb2" class="graf graf--pre graf-after--p">starbucks.makeMeALatte({ type: 'Vanilla', size: 'Grande' }, Samer);</pre>

<pre name="7eb8" id="7eb8" class="graf graf--pre graf-after--pre">// "Samer" here is the callback function.  
// When the Latte is ready, the barista will call Samer   
// with the ready object  
// We define a function Samer to process the ready object</pre>

<pre name="36fe" id="36fe" class="graf graf--pre graf-after--pre">function Samer(readyLatte) {  
  // drink readyLatte  
}</pre>

Now imagine you ask someone to give you something, but they give you something else. Let’s call it a mystery object. They promise you that this mystery object might eventually turn into the thing you originally asked for.

This promise mystery object can turn into one of two possible forms. One form is associated with success and the other with failure.

This is like when we ask a chicken for a chick and the chicken gives us an egg. That egg might successfully turn into a chick or it might die and be useless.

<pre name="23f5" id="23f5" class="graf graf--pre graf-after--p">const egg = chicken.makeChick();   // It's a promise!</pre>

<pre name="c003" id="c003" class="graf graf--pre graf-after--pre">egg.then(chick => raiseChick())    // Success outcome  
   .catch(badEgg => throw baddEgg) // Fail outcome</pre>

#### Queues and Stacks

When we work with elements of data, there are two popular data structures to store and use these elements: A LIFO _Stack_ and a FIFO _queue_.

LIFO stands for _Last In First Out_ and FIFO stands for _First In First Out_.

The simplest analogy of a data stack is the stack of dirty dishes in your sink. When you are done using a dish, you stack it on top of the existing dirty dishes until you are ready to wash them.

When you are ready to wash them, you take the last dirty dish that you stacked and you wash that. In computer terminologies, we say you “popped” a dish.

The _last_ dish you stacked is the _first_ dish you washed. This is LIFO.

The simplest analogy of a data queue is the line of people that forms in front of a checkout or order station. When you are ready to pay for your groceries and take them home, you might need to queue yourself in a line until it is your turn.

The first person to arrive at that queue will be the first person to be done with it. This is FIFO.

#### Pair Programming

You can drive your car on your own when you go to familiar places, but when it is time to go somewhere far for the first time you use a GPS. If you have someone else in the car with you, a better option would be to have them navigate by giving you the instructions on where to turn next. If you do not follow the instructions and end up taking a bad turn, they will let you know immediately and advise you on how to correct it.

Having a navigator next to you when you drive is like having a pair-programmer. You are not driving alone. You are a team with the same goal: to arrive at your destination safely, without any problems, and with the least amount of time and effort.

You can probably do it yourself without a human navigator or a fancy GPS by using the old-school way and checking a map before you leave. If needed, you can check the map again. If you check the map while driving, you might accidentally hit a curb or put a dent in the car. If you stop to check the map, you will be losing time. Without that pair navigator, you are not as safe and/or the journey will take a lot longer.

The experience of your pair navigator might also teach you new things. They might know of a new shortcut that you do not and one that is not on the map. You learn from their relevant experience, and this is beyond valuable.

If you need to go to two destinations and you have two cars. You might be tempted to think that it would be faster to drive solo and do the destinations in parallel. This might be faster in the short term, but all things considered, time might not be the most important factor here. When it comes to computer programs, using one car and making sure it is dent-free at the end of both journeys might be a far more important factor. This why we love pair programming.

#### Linting and Task Automation

If you have to drive alone on that long trip, you can still make your journey safer by relying on tools. A map is a tool. The GPS is a better tool. Cruise control is another tool.

Tools that automatically warn you if you do something wrong while driving are similar to _linting_ tools for coding. In JavaScript, the best linting tool today is ESLint. It will warn you about so many wrong things you should not be doing while coding. Best of all, it can do that even before you run your program.

Examples of tools that warn you while you are driving are evolving in modern cars. Cars can now warn you when you cross a lane line unexpectedly, or when you try to turn or change a lane while not seeing that hidden car in your blind spot. Additionally, they warn you when you drive over the speed limit, or when you are about to hit something while trying to park in a tight spot.

Linting tools also evolve to provide more accurate and helpful warnings. ESlint always surprises me with very accurate warnings. Additionally, its default recommendations are getting better with each upgrade.

Another analogy that I love in modern cars is automation. Any task that you repeat often should be automated once its purpose and value are clear. Instead of restarting that program every time you save the file, have a monitor process that automates that. Rather than running a format command on your code before you share it with others, have a command that automatically does that every time you commit your code to source control.

Modern cars automate so many things as well. The obvious example here is adaptive cruise control, but other subtle examples include automatic windshield wipers and automatic high beams at night (my favorite!).

#### Imperative vs Declarative Programming

When you need to do something, there is always the _what_ and the _how_ aspects of it. What exactly needs to be done and how do we do it.

Imperative programming is about the _how_. Declarative programming is about the _what_.

_What? How? And why should you care?_

An imperative approach represents a list of steps. Do this first, then do that, and after that do something else. For example: _Go over a list of numbers one by one and for every one add its value to a running sum._

A declarative approach represents what we have and what we need. For example: _We have a list of numbers and we need the sum of those numbers._ The imperative language is closer to the computers of today because they only know how to execute instructions. The declarative language is closer to how we think and command. Get it done, please. Somehow!

The good news is computer languages have evolved. Computer languages offer declarative ways to do the needed imperative computer instructions. Just as cars have evolved from manual stick shift into automatic and self-driving ones!

Imperative programming is like driving a stick shift car. You need to do manual steps (press the clutch, depress it slowly, change gears incrementally, etc). Declarative programming is like driving an automatic car — you just specify the “what”: Park or Drive.

You cannot program declaratively unless you have the tools that enable you to do so. While you can imperatively drive an automatic car (by switching to manual mode) you cannot declaratively drive a stick shift car. If all you have is a stick shift car, imperative programming is your only obvious choice. This is unless you take the time to install an automatic gear shifter, which might be worth it in the long term. If you can afford a new car, you will probably go with an automatic one unless you are that true nerd who still likes to program with Assembly!

[_Assembly_](https://en.wikipedia.org/wiki/Assembly_language) _is the original true imperative low-level computer language with pure instructions that directly translate into machine code._

Note that imperative programming might produce faster programs. Additionally, declarative programming requires less effort from you. In general, it will also require less effort to be maintained. Coding does not have to be one way or the other. Any non-trivial computer program will most likely have a little bit of both approaches. Also, knowing how to code declaratively is great, but it does not mean that you do not need to learn the imperative ways as well. You should simply be confident using both.

Tools that enable you to program declaratively evolve into better and faster ways to get you where you are heading. The ultimate declarative experience with modern cars is the self-driving ones. The “what” becomes the destination and the car will do the rest. This is somehow, probably, the future of programming as well. We will have programs that understand all goals and they can just work their magic to generate logic to get us to those goals.

_What is your favorite analogy? Let me know in the responses section below._

Thanks for reading!











* * *







I am writing a [React.js e-book](https://jscomplete.com/learn-react-js-by-building-simple-games) that will be published soon. You can [pre-order it here](https://jscomplete.com/learn-react-js-by-building-simple-games).

[**Learn React.js by Building Simple Games :: Samer Buna**  
_Learn all the fundamental and advanced concepts of React.js by building simple browser games_jscomplete.com](https://jscomplete.com/learn-react-js-by-building-simple-games "https://jscomplete.com/learn-react-js-by-building-simple-games")[](https://jscomplete.com/learn-react-js-by-building-simple-games)

I create online courses for [Pluralsight](https://app.pluralsight.com/profile/author/samer-buna) and [Lynda](https://www.lynda.com/Samer-Buna/7060467-1.html). My most recent courses are [React Native Essential Training](https://www.lynda.com/React-Native-tutorials/React-Native-Essential-Training/560343-2.html), [Advanced React](https://www.pluralsight.com/courses/reactjs-advanced), and [Advanced Node](https://www.pluralsight.com/courses/nodejs-advanced). I also do training for teams covering beginner to advanced levels in JavaScript, Node, React, React Native, GraphQL, PostgreSQL, and more. Email [kyle@agilelabs.com](mailto:kyle@agilelabs.com) if you want to book a training for your team.








