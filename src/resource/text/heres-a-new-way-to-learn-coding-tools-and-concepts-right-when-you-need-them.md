---
author: Quincy Larson
authorTwitter: https://twitter.com/ossia
authorFacebook: https://facebook.com/10100956570023241
title: "Here’s a new way to learn coding tools and concepts right when you need them"
subTitle: "As a developer, I constantly learn new concepts and tools...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*0yp4oKPFRI4Q-FfX-MqWnQ.jpeg
url: https://medium.freecodecamp.org/heres-a-new-way-to-learn-coding-tools-and-concepts-right-when-you-need-them-ee82d15c576d
id: heres-a-new-way-to-learn-coding-tools-and-concepts-right-when-you-need-them-ee82d15c576d
date: 2017-09-22T15:51:19.277Z
tags: [
  "Web Development",
  "Tech",
  "Technology",
  "Startup",
  "Design"
]
---
# Here’s a new way to learn coding tools and concepts right when you need them







![](https://cdn-images-1.medium.com/max/2000/1*0yp4oKPFRI4Q-FfX-MqWnQ.jpeg)







As a developer, I constantly learn new concepts and tools.

This learning process usually starts when I’m coding and I get stuck.

I do a quick Google search and usually end up on a Stack Overflow page that looks like this:







![](https://cdn-images-1.medium.com/max/2000/1*O0acG-pJOG8fRSPGPz4LEQ.png)

A parody Stack Overflow page.







Then at lunch, I hear all my friends raving about something called functional programming.

“Hm…” I think to myself. “I only learned object-oriented programming, and am a bit embarrassed to ask what functional programming is.”

So I turn to my laptop. “What is functional programming?” I ask Google.

And Google tells me to read a Wikipedia article that looks like this:







![](https://cdn-images-1.medium.com/max/2000/1*qX9LboiIHFfEWdPgOmXtYA.png)

The Wikipedia entry for functional programming.







Wow — that’s a lot of big words, links to articles, and footnotes. Entscheidungsproblem? Is that even English?

I just wanted a “good enough” explanation of what the heck functional programming is.

### Introducing the freeCodeCamp Guide — good enough explanations for busy people like you







![](https://cdn-images-1.medium.com/max/2000/1*SeE3_HMXFEmHzkOCIF5Y4g.png)

A screenshot of the freeCodeCamp Guide







This desire for “good enough” explanations inspired us to build the [freeCodeCamp Guide](https://guide.freecodecamp.org/).

The Guide is a searchable reference that aims to cover all concepts related to software development.

The articles are simple enough for non-native English speakers to understand them. They’re short enough for busy people to read them while taking a few sips of coffee.







![](https://cdn-images-1.medium.com/max/2000/1*s0O4MoHJjwWZ8_cAkflWyw.png)

A Guide article on the Git Clone command.







Currently, the freeCodeCamp Guide has about 3,000 articles. About half of these are “stubs” — topics that we know are important, but haven’t had time to write yet.

These articles cover topics that aren’t part of the freeCodeCamp web development certificates, like SQL:







![](https://cdn-images-1.medium.com/max/2000/1*8XpmslfzjnYt9mEjEUj8UA.png)

A screenshot of the freeCodeCamp Guide article on SQL’s ALTER TABLE command







And Python:







![](https://cdn-images-1.medium.com/max/2000/1*E45xH3ZIi7sIVozlqaT9gQ.png)

A screenshot of the freeCodeCamp Guide’s article on the 8 Python comparison operations.







For our search engine, we’re using the powerful open source Elasticsearch tool. Not only does this search through the freeCodeCamp Guide articles, it also searches through:

*   hundreds of interactive freeCodeCamp coding challenges
*   hundreds of freeCodeCamp YouTube videos
*   and soon, thousands of freeCodeCamp Medium articles







![](https://cdn-images-1.medium.com/max/2000/1*9z7M6GRVX5TeI0XaONhO5w.png)

A search for “jQuery children” reveals articles, coding challenges, and videos explaining the concept.







This entire project is completely free and open source. So if you’re looking for an easy way to get started contributing to open source, this is it!

### How to contribute to open source — right in your browser — by improving the freeCodeCamp Guide



![](https://cdn-images-1.medium.com/max/1600/1*EX5rn0q6L6qR-KQixxMdpQ.jpeg)



You can contribute to the freeCodeCamp Guide right in your browser on GitHub. You can also do this without going through the usual process of cloning the GitHub repository to your local computer, installing packages, and exploring the codebase.

Instead, you just need to choose a topic you’re interested in — maybe you just discovered a new design concept, for example — and write about it.

Currently there are thousands of topics and sub-topics. Most of these are Wikipedia-style “stubs” with nothing more than a name. You can do some research and help flesh-out these stubs.

Here’s a short gif showing how you can do this:







![](https://cdn-images-1.medium.com/max/2000/1*qnFS6ITMwcpsiZvF5b1pHw.gif)

A Gif showing how to make an open source contribution to an article, right in your browser.







The steps are:

1.  Explore the [guide folders](https://github.com/freeCodeCamp/guides/tree/master/src/pages/) and choose a topic you want to write about.
2.  Open that folder’s index.md file by double-clicking it.
3.  Click the pen symbol in the upper right-hand corner to edit it.
4.  Make your changes to it. You can embed images, YouTube, CodePen, REPL.it — whatever you need to help teach a concept.
5.  Scroll down and describe your changes in the commit message.
6.  Make sure the “Create a new branch for this commit and start a pull request” radio button is selected.
7.  Click “Commit Changes.”
8.  On the next page, click “Create Pull Request.”

We will run some tests to make sure your changes didn’t break anything. Then one of our maintainers will give you feedback on your article. Once everything looks good, we’ll merge your pull request.

Your contribution will automatically be deployed to the freeCodeCamp Guide, where millions of people can read and reference it.



![](https://cdn-images-1.medium.com/max/1600/1*JygArrG_p2jQW9MiKFcGCg.gif)



Contributing to our guide articles is a good way to ease into contributing to open source. You can also join our [Contributor chat room](https://gitter.im/FreeCodeCamp/Contributors) to hang out with other contributors and ask questions.

### How we built the freeCodeCamp Guide

Over the past few months, we’ve used a variety of tools to build this fast, single-page app:

*   React and Redux
*   [Gatsby.js](https://github.com/gatsbyjs/gatsby) — a tool for creating fast static websites
*   [Elasticsearch](https://www.elastic.co/products/elasticsearch) — the gold standard for full-text search
*   [Netlify](https://www.netlify.com/) — a high-performance static website hosting tool

The following people have been instrumental in the development of the freeCodeCamp Guide so far:

*   [Stuart Taylor](https://github.com/Bouncey)
*   [Heather Kusmierz](https://github.com/HKuz)
*   [Timo Keurentjes](https://github.com/systimotic)
*   [Steve Chevalier](https://github.com/SteveChevalier)
*   [Vanessa Sena](https://github.com/vanessasena)
*   [Kuriakin Zeng](https://github.com/kuriakinzeng)
*   [Eric Leung](https://github.com/erictleung)
*   [Kevin Holmes](https://github.com/codersc)
*   [Rahul Tiwari](https://github.com/invinciblycool)

The freeCodeCamp Guide is very much a work in progress. If you notice any bugs, or see any ways that the freeCodeCamp Guide can be improved, [create a GitHub issue](http://github.com/FreeCodeCamp/guides/issues/new) and we’ll look into it.

If you want to support the freeCodeCamp Guide and other open source efforts that the freeCodeCamp community is building, you can [support our nonprofit with monthly donation you can afford](https://donate.freecodecamp.org).

Have fun [exploring the freeCodeCamp Guide](https://guide.freecodecamp.org)!

Thanks for reading, and for being a part of the freeCodeCamp community. We’re going to keep doing everything we can to make life easier for busy people like you!








