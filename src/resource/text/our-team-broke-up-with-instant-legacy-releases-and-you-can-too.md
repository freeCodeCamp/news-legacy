---
author: Jonathan Solórzano-Hamilton
authorTwitter: https://twitter.com/jhsolor
authorFacebook: none
title: "How our team broke up with “instant-legacy” code releases — and how you can too"
subTitle: "The concept of legacy conveys permanence, value, and the greatness we bequeath to our children and our successors in the community...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*4HwxRppmVvjdyhlytqVXsg.jpeg
url: https://medium.freecodecamp.org/our-team-broke-up-with-instant-legacy-releases-and-you-can-too-d129d7ae96bb
id: our-team-broke-up-with-instant-legacy-releases-and-you-can-too-d129d7ae96bb
date: 2017-10-05T13:47:05.258Z
tags: [
  "Software Development",
  "Tech",
  "Design",
  "Productivity",
  "Life Lessons"
]
---
# How our team broke up with “instant-legacy” code releases — and how you can too







![](https://cdn-images-1.medium.com/max/2000/1*4HwxRppmVvjdyhlytqVXsg.jpeg)

The one time breaking up isn’t hard to do ([source](https://pixabay.com/en/board-heart-play-over-love-off-1820678/))







The concept of **legacy** conveys permanence, value, and the greatness we bequeath to our children and our successors in the community.

People make ludicrously generous donations to charitable causes to establish their legacy. They create eponymous endowments or buildings and strive to protect the name their children will inherit.

It’s therefore striking that software developers have gotten their “legacy” so catastrophically wrong.

Google “legacy,” and you’ll see the first definition matches what I’ve laid out for you here. It’s a definition that’s persisted since the 14th or 15th century.

The second definition provides a shocking contrast:

> legacy. adjective (computing) “denoting software or hardware that has been superseded but is difficult to replace because of its wide use.

Dictionaries around the internet agree with this definition. It applies only to the field of computing. We developers have managed to invert the definition of our own legacy in the historical eye-blink that is computer science. That’s almost impressive!

If you’re an experienced developer, you’ve certainly been tasked with supporting at least one legacy system in your career. For the uninitiated, well — buy a lot of caffeinated beverages.

I’m about to relate to you the brief story of our toxic relationship with our legacy codebase. I’ll then describe how we broke up with it, and what we’ve changed to avoid falling back into bad relationships with high-maintenance code.

### The Breakup

It took eight months of seven-day weeks and twelve-hour days to complete our last legacy system overhaul.

Our predecessors had pushed code into production for years without writing a single line of documentation. In fact, some of it wasn’t even in source control, as we later learned. But that’s another story.

I’m sure you’ve seen gems like this before:

<pre name="b6cd" id="b6cd" class="graf graf--pre graf-after--p">... hundreds of line of incomprehensible code</pre>

<pre name="4098" id="4098" class="graf graf--pre graf-after--pre">// TODO: Fix this bug!!!</pre>

<pre name="3929" id="3929" class="graf graf--pre graf-after--pre">... hundreds more lines in the same method, no idea where or what the bug is</pre>

That is the approximate ratio and quality of the only documentation we had on the project.



![](https://cdn-images-1.medium.com/max/1600/1*cWvYzu45qy9mGT8BSojeKw.jpeg)

I wonder if they had Tom Felton moonlight as a production support developer to keep him Slytherin-white ([source](http://tomfelton.org/))



I wasn’t exposed to direct sunlight again until April, and I’d had enough. It was time for a break-up.

### The importance of documentation

In his book “The Art of Unit Testing,” Roy Osherove defines legacy code as any code that doesn’t have tests. He was an optimist. I more loosely regard as legacy any code which contains **more technical debt** than the **time it took to write**.

As our organization had, many development teams fall into the trap of **instant-legacy code:** code that already fits the “legacy code” label at the time of release.

In my experience, documentation is the most important aspect of avoiding such legacy code.

I have yet to meet a developer who loves the idea of documentation. On the other hand, I also have never met a developer who loves crawling inside the skull of a stranger to reverse-engineer a legacy implementation without any documentation.

As they say, breaking up is hard to do. But in this case, I promise it will be worth it.

So let’s get started on converting your legacy into something you’ll be proud to bequeath to your successors. Let’s get documenting!

### Our approach: four layers of documentation

We created, and began rigorously following, a four-layer architecture for documentation. We maintain three layers of persistent documentation for the project through its life-cycle. We also communicate through one layer of ephemeral documentation during our release management process.

The three persistent layers of documentation correlate to three different velocities in our development process. We include documentation review as part of code review to avoid falling back into bad habits.

#### // The front lines: in-line comments keep maintainers sane

The most granular tier of explicit documentation is in the code. We perform complete documentation of all classes and methods, their inputs, expected outputs, and exception pathways. We also document “unusual” code in-line.

As a predominantly C# shop we use /// documentation ubiquitously. This decorates class, interface, and method declarations. The /// helper auto-generates XML stubs to document the nuts and bolts of the API.

These pop up when your code is being referenced by an external project or DLL (dynamic-link library), provided that you’ve distributed the debugging files. Our IDE (integrated development environment) renders this as tool-tip help wherever a reference appears. This greatly aids developers, who are diving into our code for the first time, when trying to fix a bug or extend it for a new use case.

It’s worth researching your language and IDE of choice to learn how to extend it with contextual help for your libraries. If you’re not used to documenting your APIs, I suggest reading [these](https://blog.hitchhq.com/how-to-create-amazing-api-documentation-bc4f55361378) [articles](https://blog.hitchhq.com/api-best-practices-documentation-20e050f8669b) to get started.

We also include regular // comments beyond API documentation. We add these wherever the code is counter-intuitive, or if we’ve found a particularly elegant solution to a problem. We also use these to create “to-do’s” for later refactor when putting in a quick-and-dirty fix.

These are invaluable to whoever has to come along and [revert the change](https://blog.kentcdodds.com/please-don-t-commit-commented-out-code-53d0b5b26d5f) or fix the code.

Because it’s in-line with the source code, this documentation changes at the highest velocity — right along with the code it supports.

#### README: making implementation a breeze

We use README files as an implementer’s guide. This documentation is for whoever will be consuming our libraries. It serves a secondary purpose as tactical-level documentation of the particulars of the implementation.

We use GitHub for source control, so we place readme.md ([Markdown](https://daringfireball.net/projects/markdown/syntax)) files in each folder in our GitHub repository. GitHub very nicely renders Markdown files and automatically shows the rendered readme.md files in each folder. This results in a much more usable help file than a simple .txt document.



![](https://cdn-images-1.medium.com/max/1600/1*K8FDONmI9NeKpB-h6iXAWg.png)

The [Markdown](https://daringfireball.net/projects/markdown/syntax) logo



Storing this documentation in the code-base helps developers maintain the documentation. Anyone making a code change can easily open the .MD file in their source code editor or an [online markdown editor](https://stackedit.io/), and immediately update the documentation.

Thus the source-controlled Markdown files live next to, but not within, the code they support. It’s also somewhat more “zoomed out” than inline comments. These two factors result in a lower velocity of updates on this documentation. Because you can still include it in the same commits it changes with higher velocity than offline documentation.

The final advantage of this format is that anyone who downloads the source code has immediate access to the implementation guides. Coupled with the inline documentation, this provides both maintainers and consumers with sufficient documentation. They can develop a basic understanding of the project without jumping into another system, such as a wiki.

#### Wiki: where business meets development

We use the wiki-level documentation to marry the implementation to the business requirements. This documentation consists primarily of requirements, enterprise architecture diagrams and considerations, and tactical diagrams such as unified modeling language (UML) flow charts and class diagrams.

We also use pages (on the same wiki) as meeting minutes, and to record decisions. We use a wiki which has versioning so that we can see a complete history of how requirements and designs have changed over time.

We thereby ensure a complete history of the requirements process and how it relates to the changing architecture. Incidentally, GitHub also provides a wiki feature, but we use a third-party wiki which integrates with our project management software.

#### Release management: commit and pull request comments

Our release management process includes **code review**. Our code review includes **documentation review**.

As GitHub is our source control platform, we bake code review into our pull requests. The platform supports commenting upon check-in, inline comment threads on portions of commits, and a conversation thread on the pull request.

The key to using these communication channels successfully is to ensure that all discussions result in a tangible output. Either clarify the code itself, or extend the permanent documentation in response to questions.

If the reviewer doesn’t understand the code as it is written, future developers won’t either. Rewrite the code to be more self-explanatory, or extend the in-line or readme documentation.

It’s not sufficient to end the conversation by replying to the thread: we treat this documentation as ephemeral, and on a long-lived code-base it’s a pain to review the full commit history.

#### Bonus round: self-documenting code

Finally, one quick plug for so-called “self-documenting code.” I’m a firm believer that the code should be self-explanatory at the surface. Explicit documentation should provide context or improve maintainability.

There are already good articles about this ([here’s one](https://blog.mindorks.com/good-code-vs-bad-code-263f71e867c1)), so I won’t go into detail here.

### Final thoughts

I hope that you learn from our experience. Our four-layer documentation architecture may not work for you, but it’s important to figure out what will.

The big take-aways? First, it’s necessary to develop a healthy understanding of yourself and your own needs before you entangle yourself with a new code base.

Second, it’s easier to stay out of a bad relationship with legacy code than to extract yourself once you’re already committed.

And third, you only leave one legacy. But every commit you make contributes to it. They won’t all be good, they won’t all be bad, but they should at least be clear. Please think about what you’re leaving for those who come after you.

Together we can reclaim our legacy as developers.











* * *







If you enjoyed this article and want more like it, please 👏 to show your support!











* * *







Jonathan is the Assistant Director of Architecture and Operations at UCLA’s department of Research Information Systems. He earned a Physics degree from Stanford University and has since spent over 10 years working in information systems architecture, data-driven business process improvement, and organizational management. He is also the founder of [Peach Pie Apps Workshop](http://www.peachpieapps.com), a company that focuses on building data solutions and training for non-profits.








