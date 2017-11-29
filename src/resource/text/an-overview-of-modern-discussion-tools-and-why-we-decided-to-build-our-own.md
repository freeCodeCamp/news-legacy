---
author: freeCodeCamp
authorTwitter: https://twitter.com/freeCodeCamp
authorFacebook: none
title: "An Overview of Modern Discussion Tools, and Why We Decided to Build Our Own"
subTitle: "Our chat rooms are a fun place to hang out, make friends, and get fast help. But knew early on that our campers wanted a less synchronous..."
coverSrc: https://cdn-images-1.medium.com/max/1600/0*WsjchoXvv2f1TMEt.png
url: https://medium.freecodecamp.org/an-overview-of-modern-discussion-tools-and-why-we-decided-to-build-our-own-54bd98c48b15
id: an-overview-of-modern-discussion-tools-and-why-we-decided-to-build-our-own-54bd98c48b15
date: 2015-05-14T05:50:28.993Z
tags: [
  "Reddit",
  "News",
  "Web Development",
  "Social Media",
  "Design"
]
---
# An Overview of Modern Discussion Tools, and Why We Decided to Build Our Own

Our chat rooms are a fun place to hang out, make friends, and get fast help. But knew early on that our campers wanted a less synchronous place to discuss articles and share their projects.

We needed a modern discussion tool, with upvoting, commenting, threading and search, that could be further indexed by search engines.

Since we’re [Pragmatic Programmers](http://amzn.to/1wWvhrz), and we did our best to avoid [Not Invented Here syndrome](http://en.wikipedia.org/wiki/Not_invented_here). We resolved to give every product on the market a fair shot. So first we tried all of the following:

### Reddit Subreddits



![](https://cdn-images-1.medium.com/max/1600/0*WsjchoXvv2f1TMEt.png)



Pros:

*   You can create a subreddit and configure it in less than an hour.
*   Subreddits are free, reliable, and managed by Reddit.
*   Subreddits serve as a discovery mechanism. Other Reddit users may stumble upon your subreddit.

Cons:

*   Reddit’s pages are filled with distracting buttons and ads, constantly drawing your users’ attention away from your content.
*   It requires a Reddit login and password, and active session.
*   Reddit gets the backlinks, not you.

### Discourse



![](https://cdn-images-1.medium.com/max/1600/0*uIVjFdgz56BiBCwc.png)



Pros:

*   Discourse has Tons of features and a powerful admin panel.
*   Discourse automatically backs up images and nightly database dumps to AWS S3.
*   You can deploy Discourse to AWS and configure it in a few hours using [Bitnami](https://bitnami.com/stack/discourse).

Cons:

*   You need to know Ruby on Rails in order to customize and maintain a Discourse instance.
*   Discourse wants you to do things its way. For example, you can’t disable any of its hotkeys.
*   Discourse is slow. Even on a small EC2 instance (~$700/year), and the app just crawled, regardless of how few people were using it.

### NodeBB



![](https://cdn-images-1.medium.com/max/1600/0*uGKWapOh-Wasqb64.png)



Pros:

*   NodeBB is written in NodeJS, and as a result it’s fast.
*   NodeBB was designed to work with Redis, and this shows in the schema design. The MongoDB support feels ‘bolted on’.
*   NodeBB It gets better every day thanks to an active development community.

Cons:

*   We couldn’t get it to work on Heroku with MongoDB, and couldn’t find any documentation as to how we might do this.
*   NodeBB does a lot of things, but none of them particularly well.

### Telesc.pe



![](https://cdn-images-1.medium.com/max/1600/0*QYSJ-xVz80oEYZxF.png)



Pros:

*   Telesc.pe is nearly identical in functionality to Hacker News and Reddit

Cons:

*   You have to use Meteor.js to customize and maintain it.
*   Last time we tried, Telesc.pe wasn’t able to run on Heroku, despite buildpacks that were supposed to allow Meteor apps to run on Heroku.

### Camper News



![](https://cdn-images-1.medium.com/max/1600/0*AjPoNK4x2a7WRCR-.png)



After trying all of these solutions and finding them suboptimal for our campers, we decided to give up and build one of our own. Pros:

*   Campers can start posting immediately without having to leave Free Code Camp or creating extra logins and passwords.
*   Campers’ posts link back to their Free Code Camp portfolios, raising their profile within the community.
*   Each submission becomes a searchable artifact that campers can find and use in the future.

We can observe aggregate behavior, A/B test, and use collected data to make Free Code Camp a better place to learn to code.

We stayed as close to the conventions that work on Reddit, Product Hunt, and Hacker News.

Camper News will continue to evolve as we get feedback from our campers. It’s already open-source, but we may go a step further and task some of our campers with factoring it out into a stand-alone app.

[Check out Camper News here](http://www.freecodecamp.com/stories/hot). We’re looking forward to reading your articles.

_Originally published at_ [_blog.freecodecamp.com_](http://blog.freecodecamp.com/2015/03/an-overview-of-modern-discussion-tools-and-why-we-decided-to-build-our-own.html) _on March 10, 2015._








