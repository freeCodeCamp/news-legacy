---
author: Aline Lerner
authorTwitter: https://twitter.com/alinelernerLLC
authorFacebook: none
title: "LinkedIn endorsements are dumb. Here’s the data."
subTitle: "If you’re an engineer who’s been endorsed on LinkedIn for any number of languages/frameworks/skills, you’ve probably noticed that somethi..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*QmuV1gwUU_FhRpeNfTTslg.jpeg
url: https://medium.freecodecamp.org/linkedin-endorsements-are-dumb-heres-the-data-386a9e1606f1
id: linkedin-endorsements-are-dumb-heres-the-data-386a9e1606f1
date: 2017-03-10T15:23:45.120Z
tags: [
  "Careers",
  "Recruiting",
  "Life Lessons",
  "Tech",
  "Startup"
]
---
# LinkedIn endorsements are dumb. Here’s the data.







![](https://cdn-images-1.medium.com/max/2000/1*QmuV1gwUU_FhRpeNfTTslg.jpeg)







If you’re an engineer who’s been endorsed on LinkedIn for any number of languages/frameworks/skills, you’ve probably noticed that something isn’t quite right. Maybe they’re frameworks you’ve never touched or languages you haven’t used since freshman year of college.

No matter the specifics, you’re probably at least a bit wary of the value of the LinkedIn endorsements feature. The internets, too, don’t disappoint in enumerating some [absurd potential endorsements](https://www.socialtalent.co/blog/endorsement-bombing) or in [bemoaning the lack of relevance of said endorsements](https://news.ycombinator.com/item?id=6292348), even when they’re given in earnest.

Having a gut feeling for this is one thing, but we were curious about whether we could actually come up with some numbers that showed how useless endorsements can be, and we weren’t disappointed. If you want graphs and numbers, scroll down to the “Here’s the data” section below. Otherwise, humor me and read my completely speculative take on why endorsements exist in the first place.

### LinkedIn endorsements are just noisy crowdsourced tagging

Pretend for a moment that you’re a recruiter who’s been tasked with filling an engineering role. You’re one of many people who pays LinkedIn ~$9K/year for a recruiter seat on their platform. (Roughly [60% of LinkedIn’s revenue comes from recruiting](https://investors.linkedin.com/events-and-news/corporate-press-releases/press-release-details/2016/LinkedIn-Announces-Third-Quarter-2016-Results/default.aspx), so you can see why this stuff matters.)

That hefty price tag broadens your search radius (which is otherwise artificially constrained) and lets you search the entire system. Let’s say you have to find a strong back-end engineer. How do you begin?

Unfortunately, LinkedIn’s faceted search (pictured below) doesn’t come with a “can code” filter[1]:



![](https://cdn-images-1.medium.com/max/1600/1*iWgLOpE92_aNbQJOY9Wicw.png)



So, instead of searching for what you really want, you have to rely on proxies. Some obvious proxies, [even though they’re not that great](http://blog.interviewing.io/lessons-from-3000-technical-interviews/), might be where someone went to school or where they’ve worked before.

But if you need to look for engineering ability, you’re going to have to get more specific. If you’re like most recruiters, you’ll first look for the main programming language your company uses and go from there.

And this is despite [knowledge of a specific language not being a good indicator of programming ability](http://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/) and despite most hiring managers not caring which languages their engineers know.

Now pretend you’re LinkedIn. You have no data about how good people are at coding, and though you do have a lot of resume/biographical data, that doesn’t tell the whole story.

You can try relying on engineers filling in their own profiles with languages they know, but given that engineers tend to be pretty skittish about filling in their LinkedIn profile with a bunch of buzzwords, what do you do? You build a crowdsourced tagger, of course! Then, all of a sudden, your users will do your work for you.

Why do I think this is the case? Well, if LinkedIn cared about true endorsements rather than perpetuating the skills-based myth that keeps recruiters in their ecosystem, they could have written a weighted endorsement system by now, at the very least. That way, an endorsement from someone with expertise in some field might mean more than an endorsement from your mom (unless, of course, she’s an expert in the field).

But they don’t do that, or at least they don’t surface it in candidate search. It’s not worth it. Because the point of endorsements isn’t to get at the truth. It’s to keep recruiters feeling like they’re getting value out of the faceted search they’re paying almost $10K per seat for. In other words, improving the fidelity of endorsements would likely cannibalize LinkedIn’s revenue.

You could make the counterargument that despite the noise, LinkedIn endorsements still carry enough signal to be a useful first-pass filter and that having them is more useful than not having them. This is the question I was curious about, so I decided to cross-reference our users’ interview data with their LinkedIn endorsements.

### The setup

So, what data do we have? First, for context, interviewing.io is a platform where people can practice technical interviewing anonymously with interviewers from top companies and, in the process, find jobs. Do well in practice, and you get guaranteed (and anonymous!) technical interviews at companies like Uber, Twitch, Lyft, and more. Over the course of our existence, we’ve amassed performance data from close to 5,000 real and practice interviews.

When an interviewer and an interviewee match on our platform, they meet in a collaborative coding environment with voice, text chat, and a whiteboard and jump right into a technical question. Interview questions on the platform tend to fall into the category of what you’d encounter at a phone screen for a back-end software engineering role.

After every interview, interviewers rate interviewees on a few different dimensions, including technical ability. Technical ability gets rated on a scale of 1 to 4, where 1 is “poor” and 4 is “amazing!”. On our platform, a score of 3 or above has generally meant that the person was good enough to move forward. You can see what our feedback form looks like below:



![](https://cdn-images-1.medium.com/max/1600/1*ffEaXMNeNTlg8w5cMyJwuQ.png)



As promised, I cross-referenced our data with our users’ LinkedIn profiles and found some interesting, albeit not that surprising, stuff.

### Endorsements vs. what languages people actually program in

The first thing I looked at was whether the programming language people interviewed in most frequently had any relationship to the programming language for which they were most endorsed. It was nice that, across the board, people tended to prefer one language for their interviews, so we didn’t really have a lot of edge cases to contend with.

**It turns out that people’s interview language of choice matched their most endorsed language on LinkedIn just under 50% of the time.**

Of course, just because you’ve been endorsed a lot for a specific language doesn’t mean that you’re not good at the other languages you’ve been endorsed for. To dig deeper, I took a look at whether our users had been endorsed for their interview language of choice at all. It turns out that people were endorsed for their language of choice 72% of the time. This isn’t a particularly powerful statement, though, because most people on our platform have been endorsed for at least 5 programming languages.

That said, even when an engineer had been endorsed for their interview language of choice, that language appeared in their “featured skills” section only 31% of the time. This means that **most of the time, recruiters would have to click “View more”** **to see the language that people prefer to code in, if it’s even listed in the first place.**



![](https://cdn-images-1.medium.com/max/1600/1*u-c-jY4aTnDyXWdGeuQTog.png)



So, how often were people endorsed for their language of choice? Quantifying endorsements[2] is a bit fuzzy, but to answer this meaningfully, I looked at how often people were endorsed for that language relative to how often they were endorsed for their most-endorsed language, in the cases when the two languages weren’t the same (recall that this happened about half the time).

Perhaps if these numbers were close to 1 most of the time, then endorsements might carry some signal. As you can see in the histogram below, this was not the case at all.



![](https://cdn-images-1.medium.com/max/1600/1*xLCfJVfEDLhQbwQgfFTylA.png)



The x-axis above is how often people were endorsed for their interview language of choice relative to their most-endorsed language. The bars on the left are cases where someone was barely endorsed for their language of choice, and all the way to the right are cases where people were endorsed for both languages equally as often. All told, the distribution is actually pretty uniform, making for more noise than signal.

### Endorsements vs. interview performance

The next thing I looked at was whether there was any correspondence between how heavily endorsed someone was on LinkedIn and their interview performance. This time, to quantify the strength of someone’s endorsements[3], I looked at how many times someone was endorsed for their most-endorsed language and correlated that to their average technical score in interviews on interviewing.io.

Below, you can see a scatter plot of technical ability vs. LinkedIn endorsements, as well as my attempt to fit a line through it. **As you can see, the R² is piss-poor, meaning that there isn’t a relationship between how heavily endorsed someone is and their technical ability to speak of.**



![](https://cdn-images-1.medium.com/max/1600/1*FQDhzJjkSknO58myXb6NWQ.png)



### Endorsements vs. no endorsements… and closing thoughts

Lastly, I took a look at whether having any endorsements in the first place mattered with respect to interview performance. If I’m honest, I was hoping there’d be a negative correlation. That is, if you don’t have endorsements, you’re a better coder. After running some significance testing, though, it became clear that having any endorsements at all (or not) doesn’t matter.

So, where does this leave us? As long as there’s money to be made in peddling low-signal proxies, endorsements won’t go away and probably won’t get much better.

It is my hope, though, that any recruiters reading this will take a second look at the candidates they’re sourcing and try to, where possible, look at each candidate as more than the sum of their buzzword parts.











* * *







Want to become awesome at technical interviews and land your next job in the process? [Join interviewing.io](http://www.interviewing.io)!











* * *







[1] You know what comes with a can code filter? interviewing.io does! We know how people are doing rigorous, live technical interviews, which, in turn, lets us reliably predict how well they will do in future interviews. Roughly 60%3 of our candidates pass technical phone screens and make it onsite. [Want to use us to hire?](https://www.interviewing.io/employers/)

[2] There are a lot of possible approaches to comparing endorsements, to each other and to other stuff. In this post, I decided to, as much as possible mimic how a recruiter might think about a candidate’s endorsements when looking at their profile. Recruiters are busy (I know; I used to be one) and get paid to make quick judgments. Therefore, given that LinkedIn doesn’t normalize endorsements for you, if a recruiter wanted to do it, they’d have to actually add up all of someone’s endorsements and then do a bunch of pairwise division. This isn’t sustainable, and it’s much easier and faster to look at the absolute numbers. For this exact reason, when comparing the endorsements for two languages, I chose to normalize the relative to each other rather than relative to all other endorsements. And when trying to quantify the strength of someone’s programming endorsements as a whole, I opted to just count the number of endorsements for someone’s most-endorsed language.

[3] See footnote 2 above. I used the same rationale.








