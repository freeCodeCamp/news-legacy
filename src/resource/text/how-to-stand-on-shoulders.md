---
author: Quincy Larson
authorTwitter: https://twitter.com/ossia
authorFacebook: https://facebook.com/10100956570023241
title: "How to stand on the shoulders of giants"
subTitle: "In 1676, Isaac Newton spoke of the great thinkers who came before him as “giants.” Their insights helped him discover new insights of his..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*T6aVOabMihmYjCFn4Fc0GQ.jpeg
url: https://medium.freecodecamp.org/how-to-stand-on-shoulders-16e8cfbc127b
id: how-to-stand-on-shoulders-16e8cfbc127b
date: 2016-10-06T02:52:27.223Z
tags: [
  "Tech",
  "Startup",
  "Web Development",
  "Design",
  "Life Lessons"
]
---
# How to stand on the shoulders of giants







![](https://cdn-images-1.medium.com/max/2000/1*T6aVOabMihmYjCFn4Fc0GQ.jpeg)

Concurs de Castells, Spain’s annual human tower competition.







> **“If I have seen further than others, it is by standing on the shoulders of giants.” — **Isaac Newton

In 1676, Isaac Newton spoke of the great thinkers who came before him as “giants.” Their insights helped him discover new insights of his own.

340 years later, the giants are much taller. They’re all over the place — not just in books, like in Newton’s time. They’re in open academic journals. Open source projects. Open datasets.

With an internet connection, you can stand on the shoulders of as many giants as you’d like.

But most people don’t realize how much they’d see if they bothered climbing up there. Most people figure they can see far enough from where they’re already standing. The climb doesn’t seem like it would be worth the effort.

Before you can stand on the shoulders of giants, you need to accept that you don’t see everything. You need to recognize how much there is out there that only these giants can show you.

### Ubuntu

> “I am what I am because of who we all are.” — English translation of the Zulu word “Ubuntu”

Even in the darkness of human prehistory, we started figuring out some cool things.

Giants started to emerge, riding on oral tradition. Then books.

We compounded insight onto insight. And the giants grew.

Over the aeons, we discovered some pretty neat ideas and built some pretty cool things. Things worth using.

But every day, thousands of people ignore these things. They say: “I know, I’ll build this new thing from scratch.”

And they embark on a costly journey to build their dreams from the ground up.

We spend a lot of money on software. About [60%](https://www.idc.com/getdoc.jsp?containerId=prUS41006516) of the $2.5 trillion we spend on technology every year goes toward software development and software consulting services.

That’s one and a half _trillion_ dollars. Enough to acquire Instagram 1,500 times over. Every year.

And we don’t always [get our money’s worth](http://www.zdnet.com/article/ten-budget-busting-it-disasters-you-should-learn-from/).







![](https://cdn-images-1.medium.com/max/2000/1*9z1F-VdlECnuADR_HHLs7g.png)

Chartes Cathedral was named after Bernard of Chartre, the 12th century scholar who first observed that we “stand on the shoulders of giants.” The south windows of the cathedral depict scholars on the shoulders of scholars.







### Not Invented Here

Humans are over-confident. We think we can reinvent the wheel, and that our version will be better.

Who knows, maybe the wheel can in fact be improved upon. But if we’re trying to design something more complicated — like a car — do we really want to spend all our time re-inventing wheels?

It’s in our nature to want to build things ourselves.

We love vertically integrated products like Ferraris, Rolexes, and iPhones.

We admire the craftsmanship that goes into each detail.

We marvel at how the design, manufacturing, and distribution all flow together in one controlled process.

And we want that entire stack to ourselves, too.

But in doing so, we fall prey to a paralyzing mentality called Not Invented Here.

> “Not Invented Here Syndrome is the tendency of a project group to believe it possess a monopoly of knowledge of its field, which leads it to reject new ideas from outsiders, to the likely detriment of its performance.” — Ralph Katz and Thomas J. Allen of the MIT Sloan School of Management

Here’s a PDF of [the most widely cited paper](http://macroconnections.media.mit.edu/share/NotInventedHere.pdf) on Not Invented Here — originally published in 1982 — in case you want to geek out on the gravity of its findings.

What this paper doesn’t tell you is that 34 years later, we’re still falling for this same old cognitive bias.

A recent example of Not Invented Here is India’s Swayam online course platform. They could have just built on top of edX’s open source course platform for free. [Dozens of other organizations](https://github.com/edx/edx-platform/wiki/Sites-powered-by-Open-edX) did so, including China’s popular XuetangX platform.

Instead, Swayam spent $6 million building a platform of their own. And they’ll spend millions more in the coming years to maintain this custom solution.

This may not sound like much money, but put that figure in the context of the $30 million they budgeted for paying teachers to create the courses. And this also set back their launch date by two years.

Not Invented Here starts innocently enough…

> “Why should we use WordPress for our blog? Blogs aren’t hard. Let’s build our own CMS.”

Then people get bolder and start thinking…

> “Why should we use Sugar CRM to keep track of donors? Donor tracking isn’t hard. Let’s build our own CRM.”

Which only further emboldens people to propose things like:

> “Why should we use AWS? Cloud isn’t hard. Let’s build our own data center and implement our own private cloud.”

Left unchecked, this mentality can lead to projects like HealthCare.gov — a $90 million project that ended up costing American taxpayers $1.7 billion.

I was one of the millions of people who wasted hours of their lives trying to sign up for health insurance, only to be thwarted by JavaScript errors and unresponsive servers.

Amid the Healthcare.gov meltdown, three San Francisco developers decided to grab some off-the-shelf components. They integrated some public APIs. They built significant chunks of Healthcare.gov’s functionality. And they did all this in just a few weeks, for a [few hundred dollars](http://www.cnn.com/2013/11/11/tech/web/alternate-healthcare-site/).

### A tale of standing on the shoulders of giants. My own.

Two years ago, I wanted to start a community where busy people could learn to code together.

I had just spent 18 months building a huge custom solution: a course recommendation engine that it turned out no one wanted to use.

So I decided to go in the exact opposite direction. I would write as little code as necessary, and focus instead on using other people’s code.

So what did the community need?

1.  a way to communicate with one another
2.  a blog where everyone could share their personal insights and stories
3.  a curriculum, and a way to track people’s progress through it

The old Not Invented Here-prone me would have:

1.  built a chatroom using web sockets, then built the moderation tools, various API integrations, and figured a good way to persist messages across sessions.
2.  built a blog from scratch, dealt with design issues like readability, tagging, embedding, and basic features people have come to expect, such as RSS.
3.  built a custom CMS for the interactive coding challenges, then built out the profile system, then **designed and implemented a core programming curriculum.**

This last step probably would have taken me years to do on my own.

And before you tell me “in this day and age, no one’s silly enough to roll their own blog” — well, apparently I was, because I spent a few days doing just that. A few days that I’ll never get back.

But here’s what the new me — fresh from an 18-month descent into Not Invented Here Hell — decided to do.

I didn’t know any Node.js at the time. But I knew smart people who convinced me that full stack JavaScript was the future.

I also knew about the [Hackathon Starter](https://github.com/sahat/hackathon-starter), a popular open source Node.js boilerplate. So I forked it.

Since I’d spent the last 18 months scraping, auditing, and classifying thousands of online courses, I knew which ones best covered programming and computer science. So instead of designing a curriculum, I curated existing resources.

For the chat room, I just used HipChat. For the blog, I just used Blogger.

And within 3 days, the new community was live.

It’s hard to predict how a solution will evolve over time. You learn so much from just shipping the damn thing.

If you get started immediately using off-the-shelf solutions, you can swap them out later, and fine-tune things as you go.

Over time, our community has made thousands of small tweaks based on feedback. We’ve also moved our chat rooms over to Gitter, and our community’s blog over to [Medium](https://medium.freecodecamp.com/we-just-abandoned-our-blog-for-medium-you-probably-should-too-33e742a1d49#.up9e573c7).

Once we had a critical mass of open source contributors, we set to work designing and implementing our own 1,200 hour curriculum.

Today, more than 5,000 people from our community have learned to code well enough to get their first developer jobs.

But if I hadn’t resisted my Not Invented Here tendencies, I never would have gotten things off the ground.

### How to stand on the shoulders of giants

I’ll leave you with three simple tips for making the most of the thousands of years of insights at your fingertips.

#### Tip #1: Learn to recognize Not Invented Here in yourself and others.

Accept that it’s in our nature to want to build things ourselves. The light side of this is a hobbyist building their own furniture. The dark side is a developer [rolling their own security](http://security.stackexchange.com/questions/18197/why-shouldnt-we-roll-our-own).

#### Tip #2: Learn what tools are out there.

The easiest way to understand what types of tools are available is to continue doing what you’re doing right now: reading about technology.

Most [major open source projects](https://github.com/search?utf8=%E2%9C%93&q=stars%3A%3E0&type=Repositories&ref=searchresults) are on GitHub, where you can view their documentation. You can deploy many of these tools [in minutes](https://bitnami.com/stacks) to your own cloud server.

#### Tip #3: Read history.

I’m sure your high school history teacher quoted you this, and they were right:

> “Those who do not read history are doomed to repeat it.” — George Santayana in 1905

There are a lot of excellent books about the history of technology. I recommend this one by Walter Isaacson, the same guy who wrote the famous Albert Einstein and Steve Jobs biographies. It’s specifically about the history of software:

[**The Innovators: How a Group of Hackers, Geniuses, and Geeks Created the Digital Revolution**  
_Edit description_amzn.to](http://amzn.to/2aZVCR6 "http://amzn.to/2aZVCR6")[](http://amzn.to/2aZVCR6)

The giants are eager to hoist you onto their shoulders. Let them. They will give you a view of just how many problems are still out there, waiting for you to go solve them.











* * *







_If you liked this, click the💚 below so other people will see this here on Medium._



![](https://cdn-images-1.medium.com/max/1600/1*31StU5CNIHk8VDkSHWO6nA.gif)










