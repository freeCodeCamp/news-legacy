---
author: Gitter
authorTwitter: https://twitter.com/gitchat
authorFacebook: none
title: "Building Online Communities: Pupil Labs"
subTitle: "Will Patera and Moritz Kassner are the founders of Pupil — a mobile eye tracking platform, which they are building working closely with a..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*GkWBYwtyuYJyjiP706QG-Q.png
url: https://medium.freecodecamp.org/building-online-communities-pupil-labs-feb3999ccc44
id: building-online-communities-pupil-labs-feb3999ccc44
date: 2016-08-17T14:06:12.008Z
tags: [
  "Open Source",
  "Virtual Reality",
  "VR",
  "Tech",
  "Startup"
]
---
# Building Online Communities: Pupil Labs

_Will Patera and Moritz Kassner are the founders of Pupil — a mobile eye tracking platform, which they are building working closely with an open source community. Find out more about their exciting project & feel free to drop by the Pupil Labs_ [_community channel on Gitter._](https://gitter.im/orgs/pupil-labs/rooms)

**Tell us about a little bit about** **yourself.**

Will Patera and Moritz Kassner founded [Pupil Labs](https://pupil-labs.com) in 2013\. Andreas Bulling joined as the scientific adviser and partner in 2014\. We develop open source software and build accessible hardware for mobile eye tracking and eye tracking integrations for VR/AR. We have backgrounds in computer science, industrial design, and architecture.

**What is Pupil? How did it all begin?**

[Pupil](https://github.com/pupil-labs/pupil) is an open source eye tracking platform. Pupil started as a part of our [joint Master’s thesis](http://dspace.mit.edu/handle/1721.1/72626) at MIT. We wanted to be able to record and visualize what someone was looking at (gaze) while navigating through buildings. At the time, there were no accessible or open source mobile tracking tools. So, we decided to build our own hardware and software. We developed a mobile eye tracking headset with our own cameras and proof of concept along with capture and visualization software.

After finishing our thesis, we released the code (on Google Code — yes Google Code was still a thing in 2012) and published DIY instructions, and bill of materials, so that others could build their own mobile eye tracking headset and conduct research.

The community, developed organically around the initial open source codebase and wiki. We started receiving requests from the community to purchase eye tracking hardware, and in late 2013 we formed the company Pupil Labs. The company provides a way for us continue working on Pupil and pursuing the vision of the platform.



![](https://cdn-images-1.medium.com/max/1600/1*UkXVskbg1opWYQkaxFBtUQ.jpeg)

Pupil binocular mobile eye tracking headset.



Eye tracking is exciting because it intersects with a diverse range of research fields, application areas, and development topics. It’s fun to meet new people and learn about new areas where eye tracking is employed. Research areas include (but are not limited to): psychology, cognitive science, neuroscience, UI/UX, artificial intelligence, music, education, assistive technology, optics, ophthalmology, optometry, transportation and wayfinding, urban design, architecture, computer graphics, VR, AR, and more. Here are [some academic publications](https://docs.google.com/spreadsheets/d/1ZD6HDbjzrtRNB4VB0b7GFMaXVGKZYeI0zBOBEEPwvBI/edit?usp=sharing) that cite Pupil.

On the development side it is equally diverse. Problems/projects address: ergonomics and physiology, optics, electrical engineering, computer vision, pupil detection algorithms and eye movement classification, visualization and more.

**What common goals do you have as a community?**

We share a common desire to make eye tracking accessible and reducing the barriers to obtaining robust eye tracking data for research and novel interfaces.

**What issues related to your project are you most excited about these days?**

We are really excited about our latest project called hmd-eyes — a community driven platform for open source eye tracking tools in VR, AR, and MR. We outline the goals of the project in this [blog post](https://pupil-labs.com/blog/2016-04/eye-tracking-head-mounted-displays/). The [github repo](https://github.com/pupil-labs/hmd-eyes) for this project is somewhat bare-bones right now, but more coming soon. We also have a Gitter channel for this project at [hmd-eyes](https://gitter.im/pupil-labs/hmd-eyes?utm_source=share-link&utm_medium=link&utm_campaign=share-link).

**How do you expect VR to evolve in the next coming years? What will be the most interesting use cases in your opinion?**

There is certainly a lot of speculation and excitement surrounding VR and AR right now, and a lot of interest for eye tracking in VR/AR.

We think that it is only a matter of time — maybe only one to two more release cycles — until eye tracking will be integrated into consumerware HMDs (VR, AR, MR). This is exciting. But, will these consumerware platforms be accessible and open, or a black box? Will researchers and developers be able to access the fundamental pupil detection and mapping algorithms or develop their own methods? Will the work that you do within one SDK be portable or locked into one system?



![](https://cdn-images-1.medium.com/max/1600/1*VKtj1Sp6KBoYvP1jZErTSg.png)

Pupil Labs recently released an eye tracking addon for the HTC Vive AR Headset.



We develop eye tracking hardware add-ons for VR and AR headsets, and have initiated a project called hmd-eyes to create open source building blocks for eye tracking in HMDs. Our goal is to work with and support a community of researchers and developers in creating reusable open-source software modules for eye tracking in HMDs. We know that many developers have already thought of or implemented eye tracking software for HMDs and instead of re-inventing wheels, we should form a community to share knowledge and tools.

Foveated rendering has gotten a lot of press. It is exciting, but maybe just the tip of the application-iceberg. There is so much that can be done within AR/VR that requires robust eye tracking data. There is interesting research into cognition aware computing using eye tracking.

**What are the main issues discussed in the Pupil channel on Gitter?**

Before Gitter, our only way to get in touch with our community was through Github and a Google Group (mailing list). We still use the Google Group, but have found that Gitter is really nice for quick feedback and sharing within the community.

A lot of the questions from our community are about setup and workflow. When both software and hardware (especially something you wear) is involved, workflows can quickly get complicated. It’s nice to be able to give and receive rapid feedback on Gitter. This helps the community to improve documentation and understand critical areas where improvements can be made.

We also maintain a wiki for Pupil. The wiki is open for anyone in the community to edit and can serve as both reference for developers and a “getting started” for new members.

The Pupil channel is also used to share development progress and post videos to project demos and research papers. It’s always fun to see video demos!

**What are the factors that you have taken into account while creating and maintaining the community? What factors contribute to the success of your community?**

In the beginning it required a lot of fostering. Most of knowledge was with the maintainers, and we had to answer almost all questions. Now the community has matured to a level that it is self perpetuating and there is more active exchange among its users.

**How do you encourage participants’ commitment and contribution to the community?**

It is our duty as maintainers to make sure the community is welcoming and supportive, and try our best to give quick feedback. That being said, we feel like we are still learning on how to best encourage participation in the community.

It’s great when contributors step forward and answer questions, share their work in progress, improve documentation, open issues, and make pull requests.

We really envision the community to be driven by others as much as us. With members taking ownership over certain areas of expertise.

**Based on your experience, do you feel that the open source communities have changed and evolved over the past years? If so, how?**

The great thing about community driven open source work is that, in the best case, it is always changing and evolving. There are certainly more tools now than ever before, that enable people to work together from around the world and to facilitate getting work done online. As communities evolve, so do the enabling technologies.

**What advice would you give to someone who wants to start an online open source community?**

Just start your project publicly. Initially you may be writing to yourself. Do your best to write docs, updates and code that are concise and a pleasure to read.

**Anything else you want to add?**

We ❤ Gitter. Its great to connect with community members and interested newcomers. We also rely on it heavily for internal communication; keeping our distributed team connected and coordinated.








