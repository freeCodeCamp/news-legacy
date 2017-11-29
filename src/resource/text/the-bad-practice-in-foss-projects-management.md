---
author: Julien Danjou
authorTwitter: https://twitter.com/juldanjou
authorFacebook: https://facebook.com/1726218557646270
title: "Don’t limit your open source project’s potential"
subTitle: "During the OpenStack summit a few weeks ago, I had the chance to talk to some people about my experience on running open source projects...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*Xyb4yDofTG6gYGzA0mvU9w.jpeg
url: https://medium.freecodecamp.org/the-bad-practice-in-foss-projects-management-32f66c3515f9
id: the-bad-practice-in-foss-projects-management-32f66c3515f9
date: 2016-06-21T21:01:02.126Z
tags: [
  "Open Source",
  "Programming",
  "Free Software",
  "Openstack",
  "Software Development"
]
---
# Don’t limit your open source project’s potential







![](https://cdn-images-1.medium.com/max/2000/1*Xyb4yDofTG6gYGzA0mvU9w.jpeg)







During the OpenStack summit a few weeks ago, I had the chance to talk to some people about my experience on running open source projects. It turns out that after hanging out in communities and contributing to many projects for years, I may be able to provide some hindsight and an external eye to many of those who are new to it.

There are plenty of resource explaining how to run an open source projects out there. Today, I would like to take a different angle and emphasize what you should not _socially_ do in your projects. This list comes from various open source projects I’ve encountered these past years. Let’s explore these bad practices and illustrate them with examples.

#### Don’t perceive new contributors as an annoyance

When software developers and maintainers are busy, there’s one thing they don’t need: more work. To many people, the instinctive reactions to external contribution is: damn, more work. And actually, it is.

So some maintainers tend to avoid that surplus of work. They explicitly state that they don’t want contributions, or they passive-aggressively make contributors feel un-welcome. This can take a lot of different forms, from ignoring them to being unpleasant. This allows the project maintainer to avoid coaching new contributors on how they can productively add to the project.

This is one of the biggest mistakes you can make in open source. If people are sending you more work, you should do whatever it takes to feel them welcome, so that they will continue working with you. Pretty soon they might become the people doing the work you are doing, instead of you. Just think: retirement!

Let’s take a look at my friend Gordon, who started as a Ceilometer contributor in 2013\. He was doing great code reviews, but he was actually giving me more work by catching bugs in my patches and sending me patches that I had to review. Instead of being a bully so that he would stop making me rework my code and review his patches, [I requested that we trust him even more by adding him as a core reviewer](http://lists.openstack.org/pipermail/openstack-dev/2013-May/008975.html).

If contributors aren’t able to make their first contribution, they definitely won’t make a second one. They won’t make any. And the project may very well have lost its future maintainers.

#### Don’t limit your contributors to just grunt work

When new contributors arrive and want to contribute to a particular project, they bring with them a wide range of motivations. Some of them are users, but some of them are just people looking to see what it’s like contributing to an open source project. They want the thrill of giving back to an ecosystem that they use.

The usual response from maintainers is to push people into doing grunt work. That means doing jobs that have no interest, little value, and probably have no direct impact on the project.

Some people actually don’t mind doing grunt work, but others do. Some people will love it as soon as you give them something — anything — to do and acknowledgment for their efforts. But others will feel offended that you’ve asked them to do low impact work. Be aware of this, and be sure to high-five the people doing your grunt work. That’s the only way to keep them around.



![](https://cdn-images-1.medium.com/max/1600/0*B5TBho1cOLaHZxk6.jpg)



#### Don’t forget to praise even small contributions

When the first pull request a new contributor sends over is just a typo fix, some developers will feel annoyed at the prospect of wasting precious time vetting such a small contribution. And nobody cares about bad English in their documentation anyway, right?

My first contributions to [home-assistant](https://github.com/home-assistant/home-assistant/commit/36cb12cd157b22bdc1fa28b700ca0fb751cca7a4) and [Postmodern](https://github.com/marijnh/Postmodern/commit/ec537f72393e1032853b78e0b7b4d0ff98632a02) were me fixing typos in their documentation.

I contributed to [Org-mode](http://orgmode.org/) for a few years. [My first patch to orgmode](http://repo.or.cz/org-mode.git/commit/a153f5a31dffbc6b78a8c5d8d027961abe585a38) was about fixing a docstring. Then, I sent 56 patches, fixing bugs and adding fancy features. I also wrote a few external modules. To this day, I’m still #16 on the top-committer list of Org-mode, which lists 390 contributors. So I ended up being much more than a small contributor to their project. I’m pretty sure in retrospect their community was glad that they didn’t dismiss my documentation fix as a waste of their time.

#### Don’t set the bar too high for new comers



![](https://cdn-images-1.medium.com/max/1600/0*pWgdUsO_Z85U3Vtc.png)



When new contributors arrive, their knowledge about the project, its context, and the technologies can vary largely. One of the mistakes project maintainers often make is to ask contributors to perform a bunch of complicated tasks before they can contribute. This can have the effect of scaring away many contributors who are are relatively shy or introverted. They may just disappear, feeling too stupid to help.

Before making any comment, you should not have any assumption about their knowledge. You also should be very delicate when assessing contributor skills, as some people might feel vexed if you underestimate them too much.

Once their skill level has been properly evaluated (a few exchanges should be enough), you need to mentor your contributor to the right degree so they can blossom. It takes time and experience to master this, and you may likely lose some of them in the process, but it’s a path that every maintainer has to take.

Mentoring is a very important aspect of welcoming new contributors to your project, whatever it may be. Mentorship applies nicely outside free software too.

#### Don’t make people to make sacrifices in order to help you



![](https://cdn-images-1.medium.com/max/1600/0*IOkg7JRcwfEPRAoM.jpg)



This is an aspect that varies a lot depending on the project and context, but it’s really important. As a free software project, where most people will contribute on their own good will and sometimes spare time, you must not require them to make big sacrifices. This won’t work.

One of the worst things you can do is require contributors to fly 5,000 kilometers to meet in person to discuss the project. This puts contributors in an unfair position, based on their ability to leave their family for a week, take a plane/boat/car/train, rent an hotel, etc. This is not good, and you should do everything in your power to avoid _requiring_ contributors to do this in order to participate in the project and feel included in its community.

Don’t get me wrong. I’m not saying that social activities should be prohibited. Quite the contrary. Just avoid excluding people when you discuss any project.

The same applies to any other form of discussion that makes it complicated for everyone to participate: IRC meetings (it’s hard for some people to book an hour, especially depending on the timezone they live in), video-conferencing (especially using non-free software), etc.

Everything that requires people to basically interact with the project in a synchronous manner for a period of time will put constraints on them that can make them uncomfortable.

The best medium is still e-mail and asynchronous derivatives (like bug trackers) which allow people to work at their own pace on their own time.

#### Don’t forget to that you have a Code of Conduct — written or implied

Conduct codes seem to be a trendy topic (and a touchy subject), as more and more communities open up to a wilder audience than before — which is great.

Actually, all communities have a code of conduct, whether it’s written with black ink, or being carried in everyone’s mind unconsciously.

Now, depending on the size of your community and how you feel comfortable applying it, you may want to write it down in a document, like [Debian did](https://www.debian.org/code_of_conduct).

Having a code of conduct does not transform your whole project community magically into a bunch of care bears who follow its guidance. But it does provide an interesting artifact that you can refer to when needed. You can throwing it at some people, to indicate that their behavior is not welcome in the project, and somehow, ease their potential exclusion — even if nobody wants to go that far generally, and that’s it’s rarely that useful.

I don’t think it’s mandatory to have such a paper on smaller projects. But you have to keep in mind that the implicit code of conduct will be derived from _your_ own behavior. The way your leader(s) communicate with others will set the entire social mood of the project. Do not underestimate that.

When we started the [Ceilometer](http://launchpad.net/ceilometer) project, we implicitly followed the [OpenStack Code of Conduct](https://www.openstack.org/legal/community-code-of-conduct/) before it even existed, and probably set the bar a little higher. Being nice, welcoming and open-minded, we achieved a decent diversity score, with up to 25% of our core team being women — way above the current ratio in OpenStack and most open source projects!



![](https://cdn-images-1.medium.com/max/1600/0*tr098pqzLi5XoZBc.jpg)



#### Don’t make non-native English speakers feel like outsiders

It’s quite important to be aware of that the vast majority of free software projects out there are using English as the common language of communication. This makes a lot of sense: it’s a commonly spoken language, and it seems to do the job well.

But a large proportion of the hackers out there are not native English speakers. Many are not able to speak English fluently. This means that the rate at which they can have a conversation might be slow, which can frustrate native English speakers.

The principal demonstration of this phenomena can be seen in social events (e.g. conferences) where people are debating. It can be very hard for people to explain their thoughts in English and to communicate properly at a decent rate, making the conversation and the transmission of ideas slow.

The worst thing that one can see in this context is a native English speaker cutting people off and ignoring them, just because they are talking too slowly. I do understand that it can be frustrating, but the problem here is not the non-native English speaking — it’s that the medium being used does not put your fellow coders on an the same even playing field that asynchronous conversation would.

To a lesser extent, the same applies to IRC meetings, which are relatively synchronous. Completely asynchronous media do not have this flaw, and that’s why they should also be preferred.

#### No vision, no delegation

One of the most common tragedies in the open source world is seeing a maintainer struggling with the growth of their project while other contributors are unsuccessfully trying to help them.

Indeed, when an influx of new contributor starts asking for new features, feedback, or directions, some maintainers choke and don’t know how to respond. This ends up frustrating contributors, who therefore may simply vanish.

It’s important to have a vision for your project and to communicate it. Make it clear to your contributors what you want and don’t want in your project. Transferring that in a clear (and non-aggressive, please) manner, is a good way of lowering the friction between contributors. They’ll pretty soon know whether they want to join your ship or not, and what to expect. So be a good captain.

If they chose to work with you and contribute, you should start trusting them as soon as you can, and delegate some of your responsibilities. These can be any tasks that you used to do yourself: review patches targeting some subsystem, fixing bugs, or writing docs.

Let people own an entire part of the project, so they feel responsible and care about it as much as you do. Doing the opposite — being a control-freak — is your best shot at staying alone with your open source software. And no project is going to grow and become successful that way.

In 2009, when Uli Schlachter sent [his first patch to awesome](http://article.gmane.org/gmane.comp.window-managers.awesome.devel/1746/match=uli+schlachter), this was more work for me. I had to review this patch, and I was already pretty busy designing the new versions of awesome and doing my day job! Uli’s work was not perfect, and I had to fix it myself. More work. And what did I do? A few minutes later, I [replied to him](http://article.gmane.org/gmane.comp.window-managers.awesome.devel/1747/match=uli+schlachter) with a clear plan of what he should do, and what I thought about his work.

In response, Uli sent patches and improved the project. Do you know what Uli does today? He manages the awesome window manager project, and has since 2010 instead of me. I managed to transmit my vision, delegate it, and then retire!

#### Be careful to recognize all kinds of contributions

People contribute in different ways, and it’s not always with code. There are a lot of tasks surrounding free software projects: documentation, bug triage, user support, user experience design, communication, translation…

For example, it took a while for [Debian](http://debian.org/) to recognize that they should grant their translators the status of Debian Developer. [OpenStack](http://openstack.org/) is working in the same direction by trying to [recognize non-technical contributions](https://wiki.openstack.org/wiki/NonATCRecognition).

As soon as your project starts attributing badges to some people and creating different classes of members in the community, you should be very careful that you don’t forget anyone. That’s the easiest road to losing contributors along the road.



![](https://cdn-images-1.medium.com/max/1600/0*6M57dhgqTNfoq1dV.jpg)



#### Don’t forget to be thankful

This whole list has been inspired by many years of open source hacking and free software contributions. Let me know in the comments section if you have anything that has blocked you from contributing to open source projects. Thanks for reading!

> Original article at [https://julien.danjou.info/blog/2016/foss-projects-management-bad-practice](https://julien.danjou.info/blog/2016/foss-projects-management-bad-practice)








