---
author: Gitter
authorTwitter: https://twitter.com/gitchat
authorFacebook: none
title: "Building Online Communities: OpenAPS"
subTitle: "Dana Lewis is the founder of OpenAPS (Open Artificial Pancreas System), an open and transparent effort to make artificial pancreas techno..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*K0mzkX-bCbkn_dV7kEmk5w.png
url: https://medium.freecodecamp.org/building-online-communities-openaps-96475c235f7e
id: building-online-communities-openaps-96475c235f7e
date: 2016-10-28T12:31:57.088Z
tags: [
  "Open Source",
  "Diabetes",
  "Health Technology",
  "Community Building",
  "Community"
]
---
# Building Online Communities: OpenAPS

[Dana Lewis](https://twitter.com/danamlewis) is the founder of [OpenAPS](https://openaps.org/) (Open Artificial Pancreas System), an open and transparent effort to make artificial pancreas technology widely available.

We interviewed her to learn more about her story. You can learn more by visiting the OpenAPS [channel on Gitter](https://gitter.im/nightscout/intend-to-bolus).



![](https://cdn-images-1.medium.com/max/1600/1*JmTCsuEh2OA92KlJj9Kvmg.jpeg)

Dana Lewis and the OpenAPS rig.



**Hi Dana! Tell us about yourself and the OpenAPS project. What is OpenAPS & what’s the story behind it?**

#[OpenAPS](http://www.openaps.org/) is the open source movement to make artificial pancreas technology more widely available and much sooner than otherwise would be possible. The “artificial pancreas” (also considered to be a “hybrid closed loop”) automates insulin delivery using an existing insulin pump and a continuous glucose monitor for people with type 1 diabetes. Right now, there is no commercially available option available, so people are stuck using “standard therapy”, which means doing all dosing calculations themselves. This can be really hard, when blood glucose levels are changing all the time; and REALLY hard at night when people are asleep!

I ([@DanaMLewis](http://twitter.com/danamlewis)) have lived with type 1 diabetes myself for over 14 years and know how hard this is. A few years ago, instead of just saying “oh well, I can’t do anything” to improve my existing medical devices, I started looking for workarounds to problem solve for my real-world life. I first used open source code to pull data from my CGM in real time and make louder alarms by sending that data to my phone. (That piece of open source code ultimately evolved into [Nightscout](http://nightscout.info/), a great tool worth checking out for remote CGM data monitoring.)

Our “louder alarm” system [evolved](https://diyps.org/2016/05/12/how-i-designed-a-diy-closed-loop-artificial-pancreas/) into an “[open loop](https://diyps.org/2014/02/07/a-diy-artificial-pancreas-system/)” system with a dosing decision algorithm that we then developed. [Scott](http://twitter.com/scottleibrand) and I then realized we could leverage someone else’s open source code to send commands (with the addition of a small computer like a Raspberry Pi and a radio stick) directly to my insulin pump, ultimately [creating a closed loop artificial pancreas system](https://diyps.org/2014/12/15/how-does-a-closed-loop-artificial-pancreas-work-when-you-diy-or-diyps-closed-loop-is-working/). I first “closed the loop” for myself in December 2014, and we [launched](https://diyps.org/2015/02/07/diyps-openaps/) OpenAPS in February 2015\. We can’t commercially distribute medical devices or full software systems, because that is activity regulated by the FDA; but we wanted to find a way to share knowledge so that if someone else wanted to build their own closed loop, they could do so until something became commercially available in the future. So that’s what we did, and why OpenAPS exists today.

OpenAPS is a number of things, but think of it as an ecosystem where you can take existing insulin pumps & CGMs and pair it with other commercially available hardware and open source software to help automate insulin delivery in a way that reduces overall risk for daily life with diabetes.

**What common goals do you have as a community?**

Our main common goal is easing the burden of life with type 1 diabetes. Life with diabetes is HARD. Not just physically, but also emotionally. The cognitive burden plays a big role on entire families, because whether it’s parents supporting a child growing up with diabetes, or an adult and their loved ones, diabetes impacts everyone. The #WeAreNotWaiting movement is a broader community beyond #OpenAPS that says “we **can’t** wait years and years for better tools and solutions, so we will do everything we can to make today easier” for people living with diabetes.

“Pay it forward” is another common goal. We are all utilizing tools and ideas donated to the community by others, so we’re all passionate about paying it forward in any way we can. This may include contributing PRs to code or documentation, or turning around and helping someone in Gitter who is asking about something you learned last week. For many of us, “paying it forward” is our first introduction to contributing to open source.



![](https://cdn-images-1.medium.com/max/1600/1*jf--oxGMna_sXmQgRluMaw.jpeg)

The OpenAPS Stack



**What issues related to the project are you personally most excited about these days?**

OpenAPS is at the point where there are at least (n=1)*127+ people worldwide utilizing DIY closed loop systems. Because these are (n=1) efforts and everyone has to build their own systems (this is for safety reasons, too), there are constantly improvements and tweaks needed to [the setup process documentation available on Github](https://github.com/openaps/docs). We’ve come a long way, though. When someone complains about documentation not being perfect, I laugh and point out that we originally built the first closed loop with ZERO documentation: at least some imperfect documentation is better than none! Then we work together to fix the documentation. Many people make their first pull request to the documentation repository, and it’s their first contribution to open source — but hopefully not their last!

The other common issue is time. Everyone works on this in their spare time, and we all have day jobs. So our collective work to improve [code](https://github.com/openaps/oref0/), [documentation](https://github.com/openaps/docs), and [support others](https://gitter.im/nightscout/intend-to-bolus) setting up their own systems takes place on nights and weekends and early mornings and break times. But with a worldwide community, there’s usually someone always online on [Gitter](https://gitter.im/nightscout/intend-to-bolus) and able to answer questions, which is great!

**What progress has been made since the beginning of the project, can you share some particular success stories?**

Scott and I built my first closed loop, and then worked with [Ben West](https://github.com/bewest) as he built [the openaps toolkit](https://github.com/openaps/openaps) to make it easier for others to build their own systems. The openaps toolkit in of itself is a huge success, because it is basically building blocks that anyone can take to use to build a system to read data from compatible diabetes devices.

The [OpenAPS documentation](https://github.com/openaps/docs) is also a success, because it’s a constantly evolving, living, breathing set of documents that doesn’t necessarily have a clear roadmap for future development. It changes any time we add a new hardware option or software tool (which is pretty often), so it’s impressive that this documentation is still useful and still supporting people to get setup. And I’m pretty proud that the documentation is at a level so that someone with zero previous tech experience can use it and learn what they need to do in order to build themselves a closed loop system.

**What are the main issues discussed in the OpenAPS channel on Gitter?**

There are a bunch of different rooms in Gitter that is used by the community, but [the most heavily used room is the one where most setup conversations for OpenAPS happen](https://gitter.im/nightscout/intend-to-bolus). We use Gitter primarily for people who are working through the setup process, but we also use it to host discussions about new documentation being added, and new features being tested and discussed before being incorporated into the dev branch of code.

**What factors contribute to the success of your community? What are the key challenges?**

The success of the OpenAPS community is a testament to the people involved. That includes Ben’s [years](https://www.youtube.com/watch?v=n0KUgieLPNw&feature=youtu.be) of work behind the scenes and active support for helping many of us learn about open source and related tools (including encouraging us from the get go to use Gitter and Github); to Scott’s tireless dedication to helping me (even though he himself doesn’t have diabetes!) not only build my first closed loop but then make it an option to anyone in the world who is willing to build their own; to the dozens of people contributing to documentation and building new hardware and software tools. We wouldn’t be where we are today without all of these amazing people.

Some of the challenges involve time constraints. Others involve the fact that we are working in a grey area of regulation. Technically, the FDA regulates commercially distributed medical devices. There is no medical device being distributed in our case, and everyone doing DIY is individually building their own systems. But there is some fear by individuals in the community that they are going to get sued for personally building tools for themselves to help them manage their diabetes. So fear itself of unnecessary litigation or regulation is a challenge on the individual level.

And yes, some of the challenge is technical — even though we’ve seen [dozens of people with zero technical experience work their way through the process](https://diyps.org/2015/04/08/making-and-diying-continued/) and build themselves systems, there are also dozens who’ve convinced themselves that they can’t do it and aren’t willing to try. But, since this is not an FDA-approved system, the requirement to do it yourself will always be there — so for those who are unwilling to try or for other good reasons decide this type of system is not for them, they will have to wait for commercially approved options to become available.



![](https://cdn-images-1.medium.com/max/1600/1*5E6S97V41AmTxgpPGgoOxg.png)



**Based on your experience, do you feel that the open source communities have changed and evolved over the past years? If so, how?**

I’ve only been involved in open source for the last three or so years. But one of the things I most appreciate is the warm support and collaboration I’ve gotten from people like Ben, Scott, [Chris Hannemann](https://github.com/channemann), [Pete Schwamb](http://github.com/ps2), [Oskar Pearson](https://github.com/oskarpearson), and [Nate Racklyeft](https://github.com/loudnate) (among many others), who are always willing to answer questions and share their knowledge. I’ve found that awesome spirit to be pretty prevalent in every area of open source, and I think it makes a big difference for evolving and growing open source communities.

**What advice would you give to someone who wants to start an online open source community focused on healthcare?**

Stay centered on your purpose. I don’t think it’s about starting a community, but supporting and shepherding the community that grows out of a shared project or sense of purpose. For us, that shared purpose is making life with diabetes easier and making artificial pancreas technology more accessible for all. And I also suggest using the tools that are available. One of the reasons we use (and really like) Gitter is because there is a low barrier to entry: the content is publicly accessible, so anyone can observe or [lurk](https://gitter.im/nightscout/intend-to-bolus) and learn before they’re ready to jump in or ask their first question. It’s nice to have that one central gathering place for discussion, rather than having key conversations splintered across numerous channels.

**Anything else that you want to add?**

For anyone interested in learning more about OpenAPS, [reading the OpenAPS Reference Design](https://openaps.org/reference-design/) is a great starting place, followed by [the OpenAPS FAQs](https://openaps.org/frequently-asked-questions/). And if you’re interested in diving into DIY diabetes and the open source communities, we’d be happy to point you to them! Feel free to drop me a note at dana@OpenAPS.org or reach out to us on [Gitter](https://gitter.im/nightscout/intend-to-bolus).

**Thank you!**








