---
author: Gitter
authorTwitter: https://twitter.com/gitchat
authorFacebook: none
title: "Building online communities: Numenta"
subTitle: "We caught up with Matt Taylor from Numenta — an organization whose mission is to lead a new era of machine intelligence and build compute..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*dxRIVyhf8oU4jwe16F12Uw.png
url: https://medium.freecodecamp.org/building-online-communities-numenta-9053ad89bb23
id: building-online-communities-numenta-9053ad89bb23
date: 2016-04-11T11:22:30.659Z
tags: [
  "Machine Learning",
  "Open Source",
  "Brain"
]
---
# Building online communities: Numenta

_We caught up with_ [_Matt Taylor_](https://twitter.com/rhyolight) _from_ [_Numenta_](http://numenta.com/)_— an organization whose mission is to lead a new era of machine intelligence and build computer systems around the principles of the brain. Matt shared his thoughts and insights on the open source community around their exciting projects. Find out what he says, and check out the_ [_Numenta_](https://gitter.im/numenta/public) _community channel on_ [_Gitter_](http://gitter.im)_._

**Tell us about a little bit about yourself and the Numenta community. How did it all begin?**

I am the _Open Source Community Flag-Bearer_ for Numenta (self-titled 😊). Numenta has been around for over 10 years, mostly in a research and development capacity. Our dual mission is to **understand the operating principles of the neocortex** and **build computer systems based upon those principles**. These are pretty lofty goals, and explains why a small “startup” like us has been around for such a long time!

Once we had established some fundamental algorithms based off the neocortex that actually seemed to be working, we open-sourced our entire codebase under the AGPLv3 with the intent of eventually monetizing by licensing our technology. This technology is called **Hierarchical Temporal Memory** **(HTM)**, and we have multiple software implementations of it in different environments within our community codebase. The most popular of these are [**NuPIC**](https://github.com/numenta/nupic) (Numenta Platform for Intelligent Computing), which is a Python / C++ codebase, and [**HTM.Java**](https://github.com/numenta/htm.java) for the JVM. There is also a community-created Clojure implementation that is still in a “research” state.

**What are the main issues discussed in the Numenta channel?**

Most discussions are about HTM theory and the technical details of our open source HTM implementations. HTM is a deep subject, so a lot of people come in with questions about spatial pooling, the temporal memory algorithm, or classifiers. There always seems to be someone around to answer them if I’m not there, which is great. It is nice to have a few dedicated experts who frequent the channel to engage people and build relationships even when I’m not around.

We also chat about ongoing development of the codebases, issues that are being solved, and bug reports. There is no small amount of tech support where we help people get up-and-running with NuPIC and HTM.Java as well.

And since we have such a friendly and diverse community, we have many off-topic and inane discussions simply to entertain ourselves. I think the last one was about [Kanji](https://en.wikipedia.org/wiki/Kanji) or [recumbent bikes](http://m5ligfietsen.nl/site/EN/Models/M-Racer).

**What common goals do you have as a community?**

I think there are two common goals in our community. One is to **build cool applications using the HTM** technology that exists in software today. The second is to **continue evolving HTM theory** so more features of the neocortex and general intelligence can be added to the software over time. We currently model one layer of one region of cortex, up to 65,000 neurons or so, but future developments of HTM will build out hierarchies of these regions as well as add more layers to regions to support upcoming developments like sensorimotor integration, feedback, and attention. The future for this technology is very bright, given that we can do interesting things with such a limited set of neurons today.

**What are the most important factors that you have taken into account while creating and maintaining the community? What factors contribute to the success of your community?**

Two things: _transparency_ and _inclusion_.

Numenta and I starting building this community when we **open-sourced our algorithms in June 2013**. From the start we had an emphasis on transparency. Since the day I started as the OS Community Flag-Bearer at Numenta, I’ve been pushing to ensure we as a company are very open about our technology and our future plans. We regularly hold [HTM Hackers’ Hangouts](https://www.youtube.com/playlist?list=PL3yXMgtrZmDogxgQa_dKsuWj-0Wi_UZlJ) online where anyone in our community can join and video chat with Numenta engineers. We also hold online [Office Hours](https://www.youtube.com/watch?v=MWBFw4WoZxA&list=PL3yXMgtrZmDqsqo6hytKjhrkfFNEYDqfn) with our founder **Jeff Hawkins** and VP of Research **Subutai Ahmad** every few months, allowing folks to ask them questions directly. These are all posted on our [YouTube channel](http://www.youtube.com/channel/UC8-ttzWLgXZOGuhUyrPlUuA). We have even made our [research code open source](http://numenta.com/blog/increasing-research-transparency.html), so anyone can see exactly what algorithms we are working on before it goes mainstream.

A lot of people from all walks of life are interested in the development of cognitive computing technologies like HTM, so we get a healthy mixture of diverse personalities in our community. So I’ve tried from the beginning to make our work as approachable and accessible as possible, allowing laypersons to get involved in ways other very technical projects cannot. We have opportunities for community members to help with documentation, bug reports, proofreading, etc. It’s not just for scientists and engineers. We have people from all walks of life: high school students, octogenarians, neuroscientists, computer engineers, professors, college students, philosophers, etc. I want to make our community appealing to everyone.

**What are the key challenges that you encounter while managing the community?**

It can be a challenge to recognize what different people are working on and where they are coming from. Our community sees a lot of new faces, and some of them are brilliant and doing really interesting things. But it is hard to tell sometimes who is working on what.

HTM technology has a steep learning curve, and it is still very new. The software itself can be tricky to get installed on all operating systems (Python with C++ extensions 😳). We get many people in our community who are learning to program _just so they can work with HTMs_. One of my primary challenges is to make our tech and tech _stack_ more approachable. We’ve come a long way since we started in 2013, but there’s always more to do! I’m currently producing a series of YouTube videos called [HTM School](https://www.youtube.com/playlist?list=PL3yXMgtrZmDqhsFQzwUC9V8MeeVOQ7eZ9) to help educate people of HTM concepts from the ground up. I’m hoping things like this will help me answer questions on our mailing lists about HTM theory. And oh, by the way, the way YouTube videos embed in Gitter is great! 😂

**How do you encourage participants’ commitment and contribution to the community?**

If someone wants to work on code, we have a [stack of newbie issues](https://github.com/numenta/nupic/labels/newbie) that are pretty non-threatening, although it would help if you knew a little something about python. We also have people who write translations of our white papers, which is very helpful to educate in other languages.

I **never discourage crazy people**. We have not discovered all the ways to encode different data into SDRs for HTMs to consume, so I’m just waiting for someone to build something that blows me away. I feel like the best way to quicken that is to share ideas and encourage people to build strange and interesting things. There are a lot of very creative people in our community. Some might call them crazy, but I know a certain percentage of them are **pure genius**.

**Based on your experience, do you feel that the open source communities have changed and evolved over the past years? If so, how?**

I think face-to-face communication is very important for active people in the community. Your face contains a lot of information that augments vocal communication. The more people see each other, the closer they feel. The emergence of better video teleconferencing tools has made it much easier to keep a community adhesive. We publish regular online meetings where anyone in the community may join and voice their opinions and ideas. They all go on our YouTube channel, and I can see how engaged people are by how many views they get. Having the ability to bring people together in conversation like this and publish the entire thing live on the internet is amazing. It is very cool to meet someone at an event and recognize them from YouTube meetings!

Gitter has been really useful, too, especially the way it attaches directly to all our OS codebases and gives us a space to chat about code in a much more personal way than a Github issue.

**What advice would you give to someone who wants to start an online open source community from scratch?**

Either be an extrovert, or really good at pretending like you’re an extrovert. 😉








