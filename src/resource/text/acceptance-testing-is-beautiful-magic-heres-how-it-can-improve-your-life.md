---
author: Todd Chaffee
authorTwitter: none
authorFacebook: https://facebook.com/10154009118138217
title: "Acceptance testing is beautiful magic. Here’s how it can improve your life."
subTitle: "More accurately, automated acceptance testing in the browser is beautiful magic...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*G7F-40pBvJwqungBuBtYyg.jpeg
url: https://medium.freecodecamp.org/acceptance-testing-is-beautiful-magic-heres-how-it-can-improve-your-life-41759775d19d
id: acceptance-testing-is-beautiful-magic-heres-how-it-can-improve-your-life-41759775d19d
date: 2017-09-21T21:38:59.391Z
tags: [
  "Tech",
  "Web Development",
  "Programming",
  "Startup",
  "Technology"
]
---
# Acceptance testing is beautiful magic. Here’s how it can improve your life.







![](https://cdn-images-1.medium.com/max/2000/1*G7F-40pBvJwqungBuBtYyg.jpeg)







More accurately,**automated** acceptance testing in the browser is beautiful magic.

Actually, what I really want to say is that automated acceptance testing might lead to discussing the superb finish of your favorite Pinot Noir with your friends over dinner. I promise this will all make sense by the end of this short article.

Back to **beautiful magic**.

### A bit about automated acceptance testing

Every programmer loves automated browser testing when they first see it. I have seen jaded programmers, not easy to impress, who have laughed with joy the first time they see it. I’ll admit I laughed the first time. When you start the tests, your browser will open up and then, without doing anything else, it looks like someone is clicking around and doing stuff.



![](https://cdn-images-1.medium.com/max/1600/1*nzxSEzpGYHtDOjXcO2RT2A.gif)

All your browser are belong to us



It’s so creepy or fun or fascinating that Chrome feels the need to pop up a warning at the top of the browser: “Chrome is being controlled by automated test software.” I suppose this is to clarify that it’s not ghosts or robots? Let’s call it robots anyway. But no matter how cool it looks at first (even if you’re not impressed with my animated GIF), that’s not even the kind of beautiful magic I am talking about.

As a lifelong programmer, I mostly care about the beautiful magic that makes us better at our jobs. Before I try to sell you on the benefits of automated **acceptance** testing, let’s quickly put it in context. There are lots of types of testing when it comes to software. One classic way to categorize testing is by how much of the software the tests cover:

**Unit testing** — tests the smallest possible unit of source code, typically a function or method

**Integration testing** — builds on unit testing by checking how well units work together when they call each other

**Acceptance testing** — tests that EVERYTHING works from a user perspective

You can do acceptance testing the hard way. First, the programmers click through the entire website, going through manual tests, dozens or hundreds of times. Then the client — who’s paying you — goes through the same painful and time-consuming exercise (and surely misses things). Which leads us from beautiful magic into a mystery:

**Why are people, who are paid to automate things, manually doing something over and over again that can be done far faster by a robot?**

I won’t attempt to solve that mystery. Instead, I want to tell you a short story about all the kinds of beautiful magic automated acceptance testing can bring into your programming life.

### Making freeCodeCamp better with automated acceptance testing

The [Beta version of freeCodeCamp](http://beta.freecodecamp.com/en/) has some impressive improvements for people learning how to code. One is a feature that allows students to click a button and verify that their project assignment works. You saw a robot clicking that button in the animated GIF above. The button turns green once all the features are working in the student’s project. It provides value to students, because when they click and then see the green light, they can be confident they are finished with the project.

Thanks to the hard work of [Peter Weinberg](https://github.com/no-stack-dub-sack), [Anis Nouira](https://github.com/Weezlo), [Tracey Bushman](https://github.com/tbushman) [Christian Paul](https://github.com/Christian-Paul), [Sean Smith](https://github.com/bonham000), [Andre Alonzo](https://github.com/paycoguy), and [others](https://github.com/freeCodeCamp/testable-projects-fcc/graphs/contributors), we have this feature for 15 of the project assignments on the [beta version of freeCodeCamp](http://beta.freecodecamp.com/en/). You can see an example of [each project over at CodePen](https://codepen.io/collection/npZPmR/), and even run the tests manually yourself.

This feature is a type of test, but it’s not the kind of testing we are talking about. So let’s continue to call it a feature to avoid confusion. The feature has a web UI that students use just like any feature on any other web site. Someone had to code that UI. And for each assigned student project, someone had to write a separate set of code that describes the unique features of that project. You can see all the code [over at the GitHub repo](https://github.com/freeCodeCamp/testable-projects-fcc) (please consider volunteering if you would like to help us improve this feature).

Each contributor also has the responsibility of making sure this feature works for the hundreds of thousands of eventual freeCodeCamp students that will use it. It is a production feature that lives on the web like any other website feature.

Savvy programmers will have already figured out where I’m heading: writing automated acceptance tests for this feature. And yes, this feature is a test, so we are testing the tests. Does this sound like **too much testing**? It’s not. As long as an end user somewhere is going to use your feature on the web, there is good reason to automate the testing of that feature. Even if the feature itself is a sort of test. Enough meta, let’s move on.

When I joined the project that provides this feature, I was asked along with other volunteers to fix some bugs students had discovered.

I happily reproduced the first issue and started coding. Pretty quickly I fixed my first bug, and then it came time to test my solution. Argh, the pain! The hair being torn out in frustration! The absurd amount of time it took me! This was my process:

1.  Fork the sample CodePen project for the test I just fixed.
2.  Change the Javascript settings to use my local bundle instead of the CDN.
3.  Some other manual steps left out here like changing the CodePen view and refreshing the project…. you see them all in the GIF at the start of this story.
4.  Click the “Run Tests” button.
5.  Wait for the tests to complete and check if they are successful.
6.  And this is the worst part: **go back to step 2 and repeat for each of the other fourteen CodePen sample projects!**

If, at any point, you find and fix another problem with your code, you need to repeat the entire thing.

It took me about ten minutes to reproduce and fix my first issue. And **almost an hour** of boring clicking to test my changes and make sure my fix did not break something else. I knew this couldn’t continue. I didn’t want it to continue.

It wasn’t scalable, and we are hoping to add more camper projects and to eventually support more frameworks like Angular. We also wanted to make sure the feature works on all modern browsers and operating systems — and I had only tested it on Linux with Chrome. Did I need to recruit another volunteer for an hour of their time to test on Mac? What about Windows?

It felt like the testing process was going to make the project a bad experience for volunteers. It was already a bad experience for me. Almost no time would be spent doing the actual fun part: the programming. So I returned to the fun part, and wrote a program to automate the acceptance testing using Selenium.

Here is the test process now that we have automated it with Selenium:

<pre name="5d1b" id="5d1b" class="graf graf--pre graf-after--p">npm test</pre>

That’s it. You can immediately return to programming (or whatever it is you enjoy more than the grunt work of manually testing) and come back four minutes later to see if all the tests passed. An hour-long manual process reduced to four minutes. Robots can be fast.

### The beautiful magic

The number one thing I get out of automated acceptance testing is **more time to do the things I really enjoy**_._ Since it might not be obvious from my story, here’s a list of some of the other beautiful magic you can get out of automating your acceptance tests.



![](https://cdn-images-1.medium.com/max/1600/1*Os-jiD2t3qqx8Xngxin3sg.png)

Ensure every PR passes all tests



1.  It’s repeatable. A robot **never**forget any of the tests.
2.  If you do it right, it should be a lot faster than manual tests. More on this in the link at the end of this article.
3.  GitHub allows you to run the tests automatically on a continuous integration server when you create a pull request. You can make sure every PR passes the tests before it is merged. [Here is a link to the output](https://travis-ci.org/freeCodeCamp/testable-projects-fcc/builds/258281930?utm_source=github_status&utm_medium=notification) of the Travis CI tests for one of our PRs.
4.  It is scalable. As a project gets bigger, it takes more and more time to test it. Can you imagine manually testing the Amazon website with all its features?
5.  It’s free documentation. Your source code is a list of every test that should be performed. The output of your test suite also provides a human-readable list of what tests were performed (see the Travis CI output from point 3, above).
6.  You can cover far more configurations. A human tester will usually have access to one or two operating systems and a couple of browsers (at most). Maybe a couple of different mobile phones. With automated testing, you can run your tests on [hundreds of combinations of operating systems, mobile phones, and browser versions](https://saucelabs.com/platforms).

One final benefit. Let’s imagine a client calls you on a Friday night **as you are about to sit down to dinner with friends**. You make the mistake of answering the call because it’s one of your better clients. They desperately need one line of code changed to fix something minor for a huge weekend sale. It’s an easy fix so you bang it out in five minutes. Now you have two choices (I’m not including the unwise “choice” of not testing your change):

1.  Do you go through **at least an hour-long** process of manually testing every feature on the website to make sure your fix did not break anything? In your rush not to leave your friends waiting, what tests will you miss?
2.  Or do you type `npm test` and let a robot take over so you can return to the company of your friends, who have **just opened a bottle of your favorite Pinot Noir**? One hundred percent confident you haven’t broken anything and your weekend of fun can begin (while your client’s big sale makes them buckets of money).

If that’s not beautiful magic — I did promise and deliver wine — then you might never be convinced to give automated acceptance testing a try.

If you’d like to learn more about how you can make your automated tests reliable and fast, check out my article on [Reliable Selenium NodeJS Tests](https://medium.com/@tchaffee/reliable-selenium-nodejs-tests-c3fdafdca2a9). Wine not included.

Did you like this article? If so, give me some claps so more people see it. Thanks!








