---
author: freeCodeCamp
authorTwitter: https://twitter.com/freeCodeCamp
authorFacebook: none
title: "So Yeah We Tried Slack… and We Deeply Regretted It"
subTitle: "Back in April, all was well with our community of busy adults learning to code. We were communicating using Gitter.im, a GitHub based cha..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*0waolhA5cXHx7Sm28qpD1Q.png
url: https://medium.freecodecamp.org/so-yeah-we-tried-slack-and-we-deeply-regretted-it-391bcc714c81
id: so-yeah-we-tried-slack-and-we-deeply-regretted-it-391bcc714c81
date: 2015-06-21T16:56:49.585Z
tags: [
  "Slack",
  "Startup",
  "Tech",
  "Social Media",
  "Design"
]
---
# So Yeah We Tried Slack… and We Deeply Regretted It

Back in April, all was well with our community of busy adults learning to code. We were communicating using [Gitter.im](http://gitter.im/), a GitHub based chatroom system. And yet every day, someone would ask me “Why aren’t your campers using Slack?”

I’d considered Slack back in October before even starting Free Code Camp, so I was well aware of its limitations. But gradually, my cool kid friends persuaded me.

First we messed around with Slack’s API and found an undocumented workaround for their cumbersome email invite system, so we’d be able to automatically add campers to our Slack. Then Harvard’s CS50 class, one of the most popular online courses, started using it. I thought, “OK — if it’s good enough for Harvard, it’s probably safe for us to switch.”



![](https://cdn-images-1.medium.com/max/1600/1*3zUJhcvI2uX2TsEPob0MWw.png)



Though their free tier warns that you only get 10,000 messages of searchable archive, and 5 integrations, they clearly state that “there is no limit on how many people you can add to your team on Slack.” So we assumed we wouldn’t need to worry about outgrowing their service. But trusting Slack’s marketing would prove to be a huge mistake.

### Bowing to Peer Pressure

Our campers were happy. We were finally using the premier collaboration tool! Our campers lauded Slack’s hotkeys and mobile experience. They were delighted by Slack’s plaid patterns and warm visual design.



![](https://cdn-images-1.medium.com/max/1600/0*3lt-KtHQmo8v495m.)



Our other core contributors sighed in relief. Our campers were among the cool kids.

### The cracks start to show

Anxiety set in as I saw how quickly we reached Slack’s limits. Messages like this one appeared everywhere, in full view of our campers:



![](https://cdn-images-1.medium.com/max/1600/0*yrvXeJq1-3hcVaNQ.)



Slack’s cheapest plan was $5 per user, per month. That’s $5 x 12 months x 8,462 campers = $507,720 per year, just for our current campers. Until we paid, Slack would aggressively archive messages, sometimes only minutes after they were sent.

Slack’s support team told us that if we wanted this message to go away, we would need to create an integration that exported the messages, then deleted them. We were fine with this, and grateful that this was an option, so we started work on it.



![](https://cdn-images-1.medium.com/max/1600/0*GVz2mpqkHhUpKG3Y.)

We also quickly maxed out our integrations, and were slowly creeping toward Slack’s maximum storage limits.



A few weeks later, we hit around 5,000 campers in our Slack, and Slack’s desktop apps became sluggish. Then their mobile apps became literally unusable. Then one morning I did a single @everyone mention, and Slack sent out 50 duplicate notification emails to every single camper over the next 3 hours.



![](https://cdn-images-1.medium.com/max/1600/0*3kmxNq3jzlSXdyde.)

Nobody complains about Slack’s email notifications anymore, because everyone turned them off entirely after this happened.



And still, we blithely shepherded 300 to 500 new campers into our Slack every day, hopeful that this messaging company, now worth $2.8 billion, would hire more engineers to flog their infrastructure into shape. We also held our breaths as we waited for Slacks’ teased support for large open source communities like ours.



![](https://cdn-images-1.medium.com/max/1600/0*ftPyC0X3BN53JJrA.)



### The last straw

I woke up this morning to a mountain of tweets and emails from new campers saying they weren’t receiving our automatically sent Slack invites. Not exactly what you want to happen three days after your open source community is [featured in Wired Magazine](http://www.wired.com/2015/06/can-real-world-work-free-coding-boot-camp/).

Slack’s support team was enthusiastic about helping, and kept saying the email notifications had gone out.



![](https://cdn-images-1.medium.com/max/1600/0*CuP_Pk4krZX0c6LH.)



In my desperation, I tried to manually send out the invites. That’s when I was confronted with an ominous message: “You have reached the maximum number of users”.

My heart sank. Our contributors had sunk so many hours into building Slack features. We’d endorsed Slack to thousands of people on our Twitch.tv streams, and even mentioned it in interviews with the media. We were heavily dependent on their service.

In a cold sweat, I started googling. There was literally nothing on web saying anything about Slack having a maximum number of users — only marketing material saying that free tier organizations could have as many users as we wanted. Apparently, we were the first community to ever hit Slack’s undisclosed limit.

I opened yet another support ticket and phoned our core contributors for an emergency Saturday night meeting to discuss our options.

Shortly afterward, Slack Support sent me this email:



![](https://cdn-images-1.medium.com/max/1600/0*AslmJvPhjjv6FTij.)

(Identity removed to protect the poor support lady who was just doing her job.)



Well, that was that. No way were we going to spread our community across a bunch of disparate Slack instances. The entire point of a chat room app is convenient real time conversation. Trying to remember which Slack you had to go to to talk with a specific camper would be a logistical nightmare. Just sending an email would be way faster than this.

### The prodigal son returns

Even though it was 1 a.m. London time, someone from Gitter’s team quickly responded to my desperate tweet, reassuring me that Gitter had no hidden maximum room size. They assured me that things “should be fine”.



![](https://cdn-images-1.medium.com/max/1600/0*_vVqe-3YLrgWlhJG.)



It’s worth pointing out that Gitter is a small team. Crunchbase doesn’t show them as having any funding at all. And yet they are slowly winning a battle with competitors like Atlassian’s Hipchat, Basecamp, and Slack, at least for housing large open source communities.

I tried Gitter’s iOS app. It was much faster than before, and included new features like tab completion on @mentions.

Another thing I noticed is that Gitter now allows you the option of hiding your email address, something Slack has yet to implement [despite popular demand](https://twitter.com/slackhq/status/531750460940886016?lang=en) and the relative ease with which this could be implemented. This was a privacy issue that we’d had to explicitly warn our campers of, but will no longer have to worry about.

A moment ago, I even received this email from one of Gitter’s founders:



![](https://cdn-images-1.medium.com/max/1600/0*ateZH6Vyx8w63o0R.)



Gitter, like us, has embraced the power of Node.js. They are hardening their infrastructure so they can support growing open-source communities like ours. They are a scrappy startup with responsive support team (their founders). The warmth of their response made me feel embarrassed that I had bowed to peer pressure and ever left them.

In retrospect we clearly should have tried to work closer with them on our issues.



![](https://cdn-images-1.medium.com/max/1600/0*seuGHMEnCagar3Bd.)



It was very strange moving back to our old Gitter chatroom. It was like a scene from The Walking Dead. Half finished conversations. Thousands of accounts standing idle.

But it feels good to be back. We’re going to dust this place off and get back to helping people learn to code and land coding jobs.








