---
author: Developer Davo
authorTwitter: https://twitter.com/DeveloperDavo
authorFacebook: none
title: "What I learned by developing enterprise software for the first time"
subTitle: "In this article, I’ll share ten lessons I learned from my first project as a self-taught software developer. I was working for a consulti..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*B1ynrF6ECoTQyPmwWRAxag.jpeg
url: https://medium.freecodecamp.org/what-i-learned-by-developing-enterprise-software-for-the-first-time-d630481ce6eb
id: what-i-learned-by-developing-enterprise-software-for-the-first-time-d630481ce6eb
date: 2017-10-23T19:58:26.744Z
tags: [
  "Tech",
  "Startup",
  "Life Lessons",
  "Self Improvement",
  "Programming"
]
---
# What I learned by developing enterprise software for the first time







![](https://cdn-images-1.medium.com/max/2000/1*B1ynrF6ECoTQyPmwWRAxag.jpeg)







In this article, I’ll share ten lessons I learned from my first project as a self-taught software developer. I was working for a consulting company at the time, and my official title was Software Engineer. The project I worked on was a web application for the public sector.



![](https://cdn-images-1.medium.com/max/1600/1*VpK-vWZYaEb4HFlNfXLUQg.png)



#### Lesson #1: learn the architecture as soon as possible

In the beginning, the most challenging part was getting used to the amount of code that was written. There must have been at least a million lines of code by the time I started! This became so much easier after learning about the architecture that we were using. I remember being confused about this at the time.

It wasn’t until I did a crash course on [layered architecture](https://en.wikipedia.org/wiki/Multitier_architecture), offered by the company, that I really understood how to navigate through the code base. I got a very brief overview when I started, but I wish I had a better understanding sooner than I did.

#### Lesson #2: don’t take shortcuts with the architecture

Half way through my time on the project, we added a lot of new functionality. We were able to do some of this with newer technology. As I still didn’t really understand the value of the architecture we were using, I decided to take shortcuts. This ended up costing time and resources when we had to go back and fix it.

#### Lesson #3: do not underestimate the value of the business context

An important part of the project is learning the business requirements. I completely underestimated the importance of this for the whole duration of the project. This was an expensive mistake. If you don’t understand the business context of your work, it is very easy to go down the wrong path.

#### Lesson #4: do not underestimate the value of being self-taught

This project allowed me to gain a lot of confidence in my abilities as a developer. I strongly believe that, if you have the right tools, you can become an expert in anything.

While I’m not claiming to be an expert, my [self-taught learning material](http://learnitmyway.com/2016/11/11/learning-material-software-development/) was more than enough to prepare me for this project. Keep in mind — the list was much shorter back when I started! This revelation inspired me to write [Was studying worth it?](http://learnitmyway.com/2016/10/12/was-studying-worth-it/)

#### Lesson #5: write tests that are fast, and delete those that become obsolete

Our project consisted of many tests. We had an autonomous test suite that ran unit tests, persistence tests, and integration tests. The unit tests took a few minutes to run, but all of them together took a whole hour! I realized that quick tests are best, and there’s no point in hanging on to old tests that are obsolete.

#### Lesson #6: be wary of the consequences of committing less often

We were using [Subversion](https://subversion.apache.org/) for our version control. Unfortunately, the code we were committing was automatically checked in to the repository. We very rarely worked with branches, as the opportunity cost seemed to be too high. This led to committing code less often. I still tried to commit frequently, but I would sometimes break the build — I didn’t think I needed to invest the hour running the tests locally.

#### Lessons #7: write reliable tests — and don’t forget to maintain them

On top of that, some tests were not always green. They would work sometimes, but they would fail just as often. This would cause the build to be red. As a result, I didn’t really appreciate the value of a red build. Sometimes the build would be red for days because someone didn’t notice that another test had been broken.

#### Lesson #8: review the code as soon as possible

Typically, we would have one developer writing the code and another developer reviewing the code. I had opportunities to do both. Often, I would get a feature to develop. Before finishing it, I would be given something to review. It might take days before I got around to reviewing.

This often caused headaches, because the code I was reviewing was not the same as the code that had been developed. [Pair programming](https://en.wikipedia.org/wiki/Pair_programming) would have avoided this problem, but that was not the way we worked.

#### Lesson #9: refactoring should be accompanied by tests

Tests were only introduced five years into the project’s lifespan. Before that, all the testing was done manually. This meant that a lot of the code base didn’t have any test coverage, which is dangerous.

Personally, I really like the idea of applying the [boy scout rule](http://programmer.97things.oreilly.com/wiki/index.php/The_Boy_Scout_Rule) to code. I naturally tended to refactor a lot. But as we didn’t have test coverage for everything that I refactored, I would sometimes introduce defects into our software.

#### Lesson #10: developing software is a compromise between business value and software excellence

We used a [V-model](https://en.wikipedia.org/wiki/V-Model) for the software development process. This included deadlines for developing, manually testing, and releasing the software. We didn’t have unlimited time to develop or review the code we were writing. In some cases, I would spend too much time perfecting the code, which wouldn’t always deliver business value.

#### Final thoughts

This project was a very valuable learning experience for me. I hope you were also able to learn something from it. Let me know in the comments below if you had any similar or contrasting experiences!

**Before you go…** Thanks for reading the article! If you enjoyed it, please don’t forget to show your appreciation by clicking the 👏 below!

I write about my professional and educational experiences as a self-taught software developer. Click the **follow** button if this interests you! You can also follow me on:

*   [GitHub](https://github.com/DeveloperDavo)
*   [Twitter](https://twitter.com/DeveloperDavo)
*   [learnitymyway.com](http://learnitmyway.com) (blog)

**You might also like:**

*   [Learning material — software development](http://learnitmyway.com/2016/11/11/learning-material-software-development/) (my learning path starting with Intro to Computer Science)
*   [Learn how to code with these resources](http://learnitmyway.com/2017/06/04/learn-how-to-code-with-these-resources/) (material for beginners)
*   [Why I changed careers](http://learnitmyway.com/2016/08/10/why-i-changed-careers/)
*   [How I changed careers](http://learnitmyway.com/2016/09/17/how-i-changed-careers/)
*   [Was studying worth it?](http://learnitmyway.com/2016/10/12/was-studying-worth-it/)








