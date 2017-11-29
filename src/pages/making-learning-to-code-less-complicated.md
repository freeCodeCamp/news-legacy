---
author: Gareth Wilson
authorTwitter: https://twitter.com/_gw
authorFacebook: none
title: "Designing Glitch: How we’re tackling web development’s nagging complexity"
subTitle: "As the analogy goes, a frog placed in boiling water will jump out. But if it’s placed in cold water that’s slowly heated, it won’t percei..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*IpRjQvEIQfdIsStej476rA.jpeg
url: https://medium.freecodecamp.org/making-learning-to-code-less-complicated-ad457e56a446
id: making-learning-to-code-less-complicated-ad457e56a446
date: 2016-07-25T15:26:28.368Z
tags: [
  "Web Development",
  "Design",
  "Web Design",
  "Programming",
  "Nodejs"
]
---
# Designing Glitch: How we’re tackling web development’s nagging complexity



![](https://cdn-images-1.medium.com/max/1600/1*IpRjQvEIQfdIsStej476rA.jpeg)



As the analogy goes, a frog placed in boiling water will jump out. But if it’s placed in cold water that’s slowly heated, it won’t perceive the danger, and it will be cooked to death.

Web Developers are like those frogs, slowly boiling. Immersed in code and tools every day, we haven’t noticed the slow creep of complexity. But approach the industry with fresh eyes — as someone just learning to code, for example — and you’ll see how many people get overwhelmed before they’ve even typed a line of code. Which programming language do I start with? What libraries do I use? Which IDE is best? SQL or NoSQL? Merge or rebase? And what on earth is a dyno?

It’s this complexity that spurred us at Fog Creek to build [Glitch](https://glitch.com), the friendly community where you’ll build the app of your dreams (or pragmatic needs!) It removes all setup, so you only have to worry about writing code to build a web app. Because despite having built web products used by millions of people, like Stack Overflow and Trello, for over 15 years, we realized that we often overlook the complexity we’re immersed in every day as developers.

Over the years that web development has existed, we’ve seen the proliferation of tools, languages, libraries and frameworks that aim to make web development easier. But now, before we even get to ‘Hello World’ we have to work through the complexity of configuring servers, running shell commands, compiling files, setting up build pipelines and mastering version control systems.

The result is that if you just started learning to code, there’s an enormous amount of _non-code stuff_ that you have to contend with. This can be a distraction from learning core programming concepts. And they’re likely to trip you up, so you spend what precious little time you have shaving the proverbial yak, and solving the types of issues that — once resolved — haven’t taught you anything.



![](https://cdn-images-1.medium.com/max/1600/1*kAmu-Mkq5AMaMS39sPfWFA.jpeg)



The more we conducted user research — talking with people who were new to coding — the more phrases like ‘feeling stupid’ and ‘felt like an idiot’ came up. But we really shouldn’t have been all that surprised. After all, if an experienced dev like Ron Jeffries, the father of Extreme Programming, is [getting stuck _for days_](http://ronjeffries.com/articles/016-0607/yaks/) just trying to get a simple app running, then what hope is there for the rest of us?

#### Removing some of the complexity from web development

So we thought we’d try to tackle this problem. The first thing, though, was to get really specific about what problem we were setting out to solve. Web development is an extremely complex field with a whole host of issues, and we couldn’t hope to solve them all.

We started with a [Creek Week](http://blog.fogcreek.com/how-we-embed-a-culture-of-innovation-with-creek-weeks/). That’s where we take a week away from our day-to-day activities and focus entirely on researching a problem. The pitch for the Creek Week was “to abstract away the boring, hard-to-learn parts of development” and deliver something that enabled people to “write an application and deploy it to a URL without the tedium.”

That’s a little more specific, and it helped to rule out a number of things. For a start, we were ‘abstracting away’ — not replacing. And we weren’t looking to make programming itself easier. We weren’t just re-creating [Logo](https://en.wikipedia.org/wiki/Logo_%28programming_language%29).

This mission helped focus our research, too. We looked at existing solutions that touched upon this area but hadn’t yet solved the problem. Solutions like IaaS, PaaS, Rapid Application Development, and online code editors. From that, we learned a lot, including some approaches that we thought we should avoid, such as trying to do away with code altogether by creating some visual app creation software. That’s a well-trodden path, with no real winners to date. We wanted to retain the power and flexibility of coding, but just make it quicker and easier to get started.

During the Creek Week, we created a proof concept that was used to get buy-in from the rest of the organization, so we could get a green light to explore the problem further. We also created some mockups:



![](https://cdn-images-1.medium.com/max/1600/1*Fbv_q0jjzgRTsMS1Y89P-g.png)

Initial Editor Mockup





![](https://cdn-images-1.medium.com/max/1600/1*I5ymP1GtnEQrWadhX2wAbw.png)

Project Creation Screen Mockup



You’ll notice aspects like a button to ‘commit and push’, the ‘master’ branch, and ‘tests’ section. We hadn’t yet begun to delve into which technologies we wanted to bring to bear on the problem. We needed to get more specific.

#### Principle-led Product Design

To do so, like [when we created Trello](http://blog.fogcreek.com/the-process-of-creating-trello-tech-talk/), we boiled our thinking down into some product principles. These were an attempt to outline our approach, and encapsulate our opinions on the best way to solve the problem. They were:

*   Be the fastest, easiest way to get your own web app and start working on it.
*   You should get instant, direct feedback when you edit your app.
*   You should always feel safe making edits, and you can try out ideas without breaking your project.
*   The editor should be fun to use, yet fast and approachable.

These helped us more critically refine our ideas.

So for example, re-evaluating the ‘Project Creation Screen’ mockup above with these principles in mind, we could see that as a starting point, it meant users would have to make a number of tough choices about technologies up front. So instead of being able to just start making something, you’d likely have to go off researching the differences between the options provided. This clearly violated our first product principle of getting you started fast, and was more an example of us being too opinionated about the ‘best way’ to code.

These principles also meant doing away with the ‘commit and push’ button, because this not only assumed you knew what a ‘commit’ was, and what a ‘push’ would do, but it was also a blocker to instant feedback. What’s more, speaking about these principles with people revealed that version control was a source of a lot of anxiety and confusion, with most people only using a tiny subset of Git’s capabilities.

Similarly, while the flexibility and control afforded by access to the command-line is powerful, it exposed users to environment issues that could take hours to resolve, and from which they often learned little. Yet, if we wanted to be the ‘easiest’ then we had to build on the existing way people use code. So copying and pasting an answer from Stack Overflow should just work like it would on your local machine.

And so armed with those product principles, we felt we now had sufficient understanding to build the MVP. Research and analysis could only get us so far. Now we wanted to know how these ideas would work in practice.

#### Building the MVP

The next few months were a mixture of development, running internal user tests and — to keep the project on track — fortnightly check-ins between the team and the founders. These sessions helped provide input from those who weren’t involved in the day-to-day issues of the project. And as such, they served as a way of preventing groupthink and getting stuck in the minutiae of product development.

To really drive that point home, we needed to get out of the building and get input from those beyond our own organization. So we sought help from our friends at the Recurse Center and the Flat Iron School. We presented the product to them, gained feedback, and also ran a number of one-on-one product testing sessions to get further qualitative feedback.



![](https://cdn-images-1.medium.com/max/1600/1*wl49xJD8q5RDnAHPnvtKkA.png)

Inserting snippets screen



These tests proved useful in understanding which aspects of the product may have fit the principles, but didn’t actually work in practice. For example, to make it easier to do common coding tasks, we let you search and insert pre-made code snippets. This made sense in theory, but in user tests, nobody used them, even after they were told about them. And they posed a number of tricky questions, like where would the snippets come from? Who would write and maintain them? And should we just add packages to projects if a snippet required it?



![](https://cdn-images-1.medium.com/max/1600/1*dR6dLMZJ5Rnnd9XiUaCKTQ.png)

On-the-fly language selection



Another feature that lived for months in the beta was on-the-fly language selection for files. In theory, this made it easy to experiment with languages and was a contextual way to show users our currently supported languages. To deliver this, we had to create a number of libraries that we thought also helped abstract away some of the boilerplate code that existing frameworks and languages required.

This fit well within our product principles, but actually, what happened in testing is that people felt less comfortable when they couldn’t see their initialization code. It wasn’t what they were expecting to see, and this made it difficult for them to understand how the product worked. So we continued to refine the product, making it simpler and more transparent.

#### What We’ve Delivered

The final stage was to get usage data and opinion on the product at scale. So we opened our beta up for anyone to use, which is where we’re currently up to. But in terms of the grand vision of removing complexity from web development, what have we actually delivered?

Well, if you go to [glitch.com](https://glitch.com/edit), a new project is automatically started that contains a welcome project app. That app has its own URL and is instantly accessible to you and anyone you share it with. And it’s a real web app, with both server and client-side code.

You can then edit it, or create a new project, and build out any Node.js app you want (we’ll be adding support for other backends soon!), including real, fully-functional web apps. But what’s perhaps more interesting is what you didn’t have to do to get that web app up and running:

*   You didn’t make an account.
*   You didn’t configure and setup a web server.
*   You didn’t sign up with a host and wait for name servers to update.
*   You didn’t install an operating system, LAMP, Node or anything else.
*   You didn’t commit, build, or deploy your code.

The apps you create are instantly live, hosted by us, and are always up to date with your latest changes, because changes are deployed as you type them. There’s no setup, like configuring your environment, setting up your build pipeline, memorizing Git, or manually deploying updates. And you can invite teammates to your project so that you can collaborate on code together and see changes as they’re made.

You can get started quickly by remixing existing community projects and every project gets a URL for editing and viewing, so you can share your code or your creations.

We have a long way to go, but we’ve taken the first steps in removing some of the complexity from web development. So next time you’re looking to learn a new library, write a quick script, or prototype a product, give it a [try for yourself](https://glitch.com) and see just how much quicker it is to get to writing code.








