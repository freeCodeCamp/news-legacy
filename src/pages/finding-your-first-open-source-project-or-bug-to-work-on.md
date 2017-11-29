---
author: Shubheksha
authorTwitter: https://twitter.com/ScribblingOn
authorFacebook: none
title: "How to find your first open source bug to fix"
subTitle: "When you’re new to open source, you’ll find yourself asking:..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*qaM9LjB9PY5pwj9RDtP93g.jpeg
url: https://medium.freecodecamp.org/finding-your-first-open-source-project-or-bug-to-work-on-1712f651e5ba
id: finding-your-first-open-source-project-or-bug-to-work-on-1712f651e5ba
date: 2016-09-21T19:52:17.817Z
tags: [
  "Open Source",
  "Programming",
  "Web Development",
  "Mozilla",
  "Life Lessons"
]
---
# How to find your first open source bug to fix



![](https://cdn-images-1.medium.com/max/1600/1*qaM9LjB9PY5pwj9RDtP93g.jpeg)



When you’re new to open source, you’ll find yourself asking:

> I know some [programming language]. I want to get some practice, while helping out. How do I find an open source project where I can contribute? Hm… I don’t know where to start. This seems complicated.

I’ve asked this same question over and over to a lot of developers. And their answers can be categorized as one of three approaches:

#### Approach #1: Contribute to something you love

The most common answer I get is to contribute to something you already use everyday. Something that interests you.

#### Approach #2: Specifically seek out beginner-friendly projects

Here are a few characteristics of beginner-friendly open source projects:

*   Well-defined, detailed contribution guidelines that include setting up their project locally, their Git workflow, and their coding style guidelines
*   Proper classification of issues using labels like “good-first-bug”, “beginner”, or “first-timers-only”
*   Activity on those beginner issues, with previous questions answered quickly

#### Approach #3: Stop searching for projects and start searching for bugs.

This is the approach I chose, and the focus of this article.

After trying approaches #1 and #2, I stopped thinking in terms of projects. I focused instead on finding bugs that I thought I could fix.

Every bug is associated with a project, so when finding bugs, you’ll inevitably discover projects, anyway.

This approach works if you want to get started immediately. I can’t guarantee that it will inspire you to stick with a project after your first few contributions. Maybe you won’t be interested after all. But maybe you’ll dive into the project and discover that you really like it.

Either way, once you’ve fixed a few bugs, you’ll have the confidence to venture out there and explore more on your own.



![](https://cdn-images-1.medium.com/max/1600/1*fbfhBbaFEJRIOxUAWfC-Yw.png)



### So how do you find the bugs to begin with?

Deciding which bugs to work on isn’t easy. There are a ton of projects out there, and each has plenty of open issues. But you need to start somewhere.

So I’ll share all the resources and tips I’ve used to find bugs. First I’ll focus on finding good starter bugs in general in various bug trackers and code hosting sites. Then I’ll share some resources specific to the Mozilla ecosystem, where I’ve been [contributing regularly](https://medium.freecodecamp.com/a-beginners-very-bumpy-journey-through-the-world-of-open-source-4d108d540b39).

#### Finding good bugs for beginners

A good place to start your bug hunt is [Up For Grabs](http://up-for-grabs.net/#/). The whole purpose of the site is to help new contributors get their feet wet by maintaining a list of projects with beginner-friendly issues. It’s a great place to get started if you feel completely lost.

GitHubhas a [powerful search engine](https://help.github.com/articles/searching-github/) where you can customize your search in a variety of ways. The easiest way to search is [by issue label](https://help.github.com/articles/searching-issues/).

A lot of open source projects label their issues to conveniently track them. A lot of projects use labels like [beginner](https://github.com/search?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22beginner%22&type=Issues&ref=searchresults), [easy](https://github.com/search?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22easy%22&type=Issues&ref=searchresults), [starter](https://github.com/search?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22starter%22&type=Issues&ref=searchresults), [good first bug](https://github.com/search?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22good+first+bug%22&type=Issues&ref=searchresults), [low hanging fruit](https://github.com/search?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22low+hanging+fruit%22&type=Issues&ref=searchresults), [bitesize](https://github.com/search?utf8=✓&q=is%3Aissue+is%3Aopen+label%3A%22bitesize%22+&type=Issues&ref=searchresults), [trivial](https://github.com/search?utf8=✓&q=is%3Aissue+is%3Aopen+label%3A%22trivial%22+&type=Issues&ref=searchresults), [easy fix](https://github.com/search?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22easy+fix%22+&type=Issues&ref=searchresults), and [new contributor](https://github.com/search?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22new+contributor%22+&type=Issues&ref=searchresults).

You can further narrow down your search based on the programming language you’re comfortable with, by adding _language: name_ to your search query. For example, here are all issues [labelled as “beginner” in JavaScript](https://github.com/search?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22beginner%22+language%3Ajavascript).

[Issuehub.io](http://issuehub.io) is a tool for searching issues by label and language, in case you find it tedious to remember the GitHub search syntax.

If you’re completely new to open source, you should definitely start with [First Timers Only](http://www.firsttimersonly.com/). It’s an initiative by [Kent C. Dodds](https://medium.com/@kentcdodds), based on his own [First Timers Only](https://medium.com/@kentcdodds/first-timers-only-78281ea47455) post and [Scott Hanselman](https://medium.com/@shanselman)’s [Bring Kindness Back to Open Source](http://www.hanselman.com/blog/BringKindnessBackToOpenSource.aspx). The bugs are labelled [first-timers-only](https://github.com/search?q=label%3Afirst-timers-only&state=open&type=Issues).

You might also find this [Twitter bot](https://twitter.com/first_tmrs_only) helpful. It tweets out all issues labelled as “first-timers-only”.

Another great way to find issues is [YourFirstPR](https://twitter.com/yourfirstpr) by [Charlotte Spencer](https://medium.com/@charlotteis). They showcase starter issues on GitHub that can be easily tackled by new contributors.

[Awesome-for-beginners](https://github.com/MunGell/awesome-for-beginners) is a GitHub repo that amasses projects with good bugs for new contributors, and applies labels to describe them.

[Openhatch](https://openhatch.org/) is a non-profit organization that helps lower barriers of entry into open source. You can find bugs and projects here, as well.

### The Mozilla Contributor Ecosystem

A lot of Mozilla’s projects are hosted on [GitHub](https://github.com/mozilla/). For these projects, everything I listed above is still useful. They use the label “good first bug” for starter issues.

But Mozilla also uses its own tool called [Bugzilla](https://bugzilla.mozilla.org/) as its primary issue tracker. They host some of their issues [here](https://hg.mozilla.org/), and use [Mercurial for version control instead of Git](https://mozilla-version-control-tools.readthedocs.io/).

Firefox is one of the projects that uses Bugzilla and Mercurial. It’s a bit scary, to be honest. It’s a lot to take in. So I recommend this [excellent blog post and video](http://blog.johnath.com/2010/02/04/bugzilla-for-humans/), which does a great job at demystifying these tools.

Over the years, Mozillians have tried to make it as simple as possible to contribute to Mozilla. Here are their efforts:

*   [Good First Bugs](https://bugzil.la/sw:%22[good%20first%20bug]%22&limit=0): These are bugs that developers have identified as a good introduction to the project. They are often (but not always) relatively easy to solve
*   [Mentored Bugs](https://bugzilla.mozilla.org/buglist.cgi?quicksearch=mentor%3A%40): These bugs have a mentor assigned who will be there on IRC to help you when you get stuck while working on fix. They often review your patch and give feedback. If you don’t know where to begin with contributing to Mozilla projects, this is the best place to start. You’ll have someone who can answer your questions when you feel you’ve run up against a wall. All the mentors I’ve worked with have been super responsive, supportive, and helpful throughout.
*   [Bugs Ahoy](http://www.joshmatthews.net/bugsahoy/): This is a site dedicated to finding bugs on Bugzilla. It has a friendly UI, where you can filter by language.
*   [Firefox DevTools](http://firefox-dev.tools/): This site is dedicated to bugs filed for the developer tools in the Firefox browser. You can sort based on the DevTools components you want to work on.
*   [What Can I Do For Mozilla](http://whatcanidoformozilla.org/) — This is a great way to explore and figure out what you can work on by answering a bunch of questions about your skill set and interests.
*   [Start Mozilla](https://twitter.com/StartMozilla): This is a Twitter account that tweets about issues fit for contributors new to the Mozilla ecosystem.

If you know of any other resources for finding good bugs for newbie contributors, please let me know in the comments. I will be more than happy to extend this list.

_If you think this post was useful, please tap the “︎_❤” _to help to promote this piece to others._



![](https://cdn-images-1.medium.com/max/1600/1*L-UrDWXiwdc5hHgjzlRDjg.gif)










