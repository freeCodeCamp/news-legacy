---
author: Aline Lerner
authorTwitter: https://twitter.com/alinelernerLLC
authorFacebook: none
title: "You will randomly bomb technical interviews. Everyone does. Here’s the data."
subTitle: "When you listen to hundreds of technical interviews day in and day out, you start to notice patterns. Or in this case, a lack of patterns..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*lMhV31jCihawNepX82s7CQ.jpeg
url: https://medium.freecodecamp.org/you-will-randomly-bomb-technical-interviews-everyone-does-heres-the-data-44475806e32
id: you-will-randomly-bomb-technical-interviews-everyone-does-heres-the-data-44475806e32
date: 2016-09-04T19:34:24.644Z
tags: [
  "Programming",
  "Tech",
  "Startup",
  "Data Science",
  "Business"
]
---
# You will randomly bomb technical interviews. Everyone does. Here’s the data.







![](https://cdn-images-1.medium.com/max/2000/1*lMhV31jCihawNepX82s7CQ.jpeg)







When you listen to hundreds of technical interviews day in and day out, you start to notice patterns. Or in this case, a lack of patterns.

I did find one thing that’s pretty consistent, though, and used it as the basis of a drinking game:

*   Every time someone thinks the answer to an interview question is a hash table, take a drink.
*   And every time the answer actually is hash table, take two drinks.

But don’t try this game. I almost died playing it.

The reason I spend my days listening to technical interviews is because a couple years ago I co-founded [interviewing.io](http://www.interviewing.io), an interviewing platform where people can practice technical interviewing anonymously and, in the process, find jobs.

As a result, I have access to a ton of data on how the same people perform from interview to interview. And I’ve discovered so much volatility that it makes me question the reliability of single-interview outcomes altogether.

### How we got all this data

When an interviewer and an interviewee match on our platform, they meet in a collaborative coding environment with voice, text chat, and a whiteboard and jump right into a technical question.

Interview questions on the platform tend to fall into the category of what you’d encounter at a phone screen for a back-end software engineering role. Interviewers typically come from a mix of large companies like Google, Facebook, and Yelp, as well as engineering-focused startups like Asana, Mattermark, KeepSafe, and more.

After every interview, interviewers rate interviewees on a few different dimensions, including technical ability. Technical ability gets rated on a scale of 1 to 4, where 1 is “meh” and 4 is “amazing!” On our platform, a score of 3 or above has generally meant that the person was good enough to move forward.



![](https://cdn-images-1.medium.com/max/1600/1*kbmJPiA2qGcIc2ld7SwGTA.png)

A sample feedback form.



At this point, you might say, that’s nice and all, but what’s the big deal? Lots of companies collect this kind of data in the context of their own pipelines.

Here’s the thing that makes our data special: the _same_ interviewee can do _multiple_ interviews, each of which is with a _different_ interviewer and/or different company. This opens the door for some pretty interesting and somewhat controlled comparative analysis.

#### Finding #1: Your performance from interview to interview is volatile

Let’s start with some visuals. In the graph below, every person icon represents the mean technical score for an individual interviewee who has done 2 or more interviews on the platform.



![](https://cdn-images-1.medium.com/max/1600/1*HpvMCir_lvlyR3hwHCfaAw.png)



One thing we don’t show in this graph is the passage of time, so you can [see people’s performance over time](https://plot.ly/~aline_interviewingio/858/interviewee-performance-over-time-299-interviews-w-67-interviewees/?share_key=JFfMkYzESYN6gMH2E7vlJC). It’s kind of a hot mess.

The y-axis is standard deviation of performance, so the higher up you go, the more volatile interview performance becomes.

As you can see, roughly 25% of interviewees are consistent in their performance, and the rest are all over the place.

If you look at the graph above, despite the noise, you can probably make some guesses about which people you’d want to interview.

But keep in mind that each represents a _mean_. Let’s pretend that, instead, you had to make a decision based on just one data point. That’s where things get dicey.

To really drive this point home, you should visit the [really cool interactive version](http://bl.ocks.org/leeny/raw/6968602b25adef04ba91ed145d465462/) of this graph. There you can expand everyone’s performance and see just how each person did in each interview. The results might surprise you! For instance:

*   Many people who scored at least one 4 also scored at least one 2.
*   If we look at high performers (mean of 3.3 or higher), we still see a fair amount of variation.
*   Things get really murky when we consider “average” performers (mean between 2.6 and 3.3).

🚀 [Visit the really cool interactive visualization](http://bl.ocks.org/leeny/raw/6968602b25adef04ba91ed145d465462/) 🚀

We were curious to see if volatility varied at all with people’s mean scores. In other words, were weaker players more volatile than strong ones? The answer is no. When we ran a regression on standard deviation vs. mean, we couldn’t come up with any meaningful relationship (R-squared ~= 0.03), which means that people are all over the place — regardless of how strong they are on average.

To me, looking at this data — then pretending that I had to make a hiring decision based on one interview outcome — felt like peering into some beautiful, lavishly appointed parlor through a keyhole. Sometimes you see a piece of art on the wall, sometimes you see the liquor selection, and sometimes you just see the back of a couch.

So, in a real life situation, when you’re trying to decide whether to advance someone to onsite, you’re probably trying to avoid two things — false positives (bringing in people below your bar by mistake) and false negatives (rejecting people who should have made it in).

Most top companies’ interviewing paradigm is that false negatives are less bad than false positives. This makes sense right? With a big enough pipeline and enough resources, even with a high false negative rate, you’ll still get the people you want.

With a high false positive rate, you might get cheaper hiring, but you do potentially irreversible damage to your product, culture, and future hiring standards in the process. And of course, the companies setting the hiring standards and practices for an entire industry _are_ the ones with the big pipelines and seemingly inexhaustible resources.

The dark side of optimizing for high false negative rates, though, rears its head in the form of our current engineering hiring crisis. Do single interview instances, in their current incarnation, give enough signal? Or amidst so much demand for talent, are we turning away qualified people because we’re all looking at a large, volatile graph through a tiny keyhole?

So, hyperbolic moralizing aside, **given how volatile interview performance is, what are the odds that a good candidate will fail an individual phone screen?**

### Finding #2: Your odds of failing a single interview based on past performance

Below, you can see the distribution of mean performance throughout our population of interviewees.



![](https://cdn-images-1.medium.com/max/1600/1*B7bocgoL46NoWLydyLs_HQ.png)



In order to figure out the probability that a candidate with a given mean score would fail an interview, we had to do some stats work.

First, we broke interviewees up into cohorts based on their mean scores (rounded to the nearest 0.25). Then, for each cohort, we calculated the probability of failing, i.e. of getting a score of 2 or less. Finally, to work around our starting data set not being huge, we [resampled](http://www.burns-stat.com/documents/tutorials/the-statistical-bootstrap-and-other-resampling-methods-2/) our data.

In our resampling procedure, we treated an interview outcome as a multinomial distribution. In other words, we pretended that each interview was a roll of a weighted, 4-sided die corresponding to that candidate’s cohort.

We then re-rolled the dice a bunch of times to create a new, “simulated” dataset for each cohort and calculated new probabilities of failure for each cohort using these data sets. Below, you can see the results of repeating this process 10,000 times:



![](https://cdn-images-1.medium.com/max/1600/1*TYAM6wTIcuw5MYr2uZX4sQ.png)



As you can see, a lot of the distributions above overlap with one another. This is important because these overlaps tell us that there may not be statistically significant differences between those groups (e.g. between 2.75 and 3).

Certainly, with the advent of _lot_ more data, the delineations between cohorts may become clearer. On the other hand, if we do need a huge amount of data to detect differences in failure rate, it might suggest that people _are_ intrinsically highly variable in their performance.

At the end of the day, while we can confidently say that there is a significant difference between the bottom end of the spectrum (2.25) versus the top end (3.75), for people in the middle, things are murky.

Nevertheless, using these distributions, we did attempt to compute the probability that a candidate with a certain mean score would fail a single interview:



![](https://cdn-images-1.medium.com/max/1600/1*iyXYefSuom8YAZLvm13tDw.png)

The shaded areas encapsulate a 95% confidence interval.



The fact that people who are overall pretty strong (e.g. mean ~= 3) can mess up technical interviews as much as 22% of the time shows that there’s definitely room for improvement in the process. And this is further exacerbated by the general murkiness in the middle of the spectrum.

### So is interviewing doomed?

Generally, when we think of interviewing, we think of something that ought to have repeatable results and carry a strong signal. However, the data we’ve collected tells a different story.

And that story resonates with both my anecdotal experience as a recruiter and with the sentiments we’ve seen echoed in the community.

Zach Holman’s [Startup Interviewing is F*****](http://zachholman.com/posts/startup-interviewing-is-fucked/) hits on the disconnect between interview process and the job it’s meant to fill.

The fine gentlemen of TripleByte [reached similar conclusions](https://data.triplebyte.com/who-y-combinator-companies-want-c1880a08ac88#.8dspa9u3p) by looking at their own data.

One of the more poignant expressions of inconsistent interviewing results recently came from [rejected.us](http://rejected.us/).

You can bet that many people who are rejected after a phone screen by Company A — but do better during a different phone screen, and ultimately end up somewhere traditionally reputable — are getting hit up by Company A’s recruiters 6 months later.

And despite everyone’s best efforts, the murky, volatile, and ultimately stochastic massage circle of a recruitment process marches on.

So yes, it’s certainly one possible conclusion is that technical interviewing itself is indeed doomed and doesn’t provide a reliable, deterministic signal for one interview instance. Algorithmic interviews are a hotly debated topic and one we’re deeply interested in teasing apart.

One thing in particular we’re very excited about is tracking interview performance as a function of interview type, as we get more and more different interviewing types/approaches happening on the platform. Indeed, one of our long-term goals is to really dig into our data, look at the landscape of different interview styles, and make some serious data-driven statements about what types of technical interviews lead to the highest signal.

In the meantime, however, I am leaning toward the idea that drawing on aggregate performance is much more meaningful than a making such an important decision based on one single, arbitrary interview.

Not only can aggregative performance help correct for an uncharacteristically poor performance, but it can also weed out people who eventually do well in an interview by chance or those who, over time, submit to the beast and memorize _Cracking the Coding Interview_.

I know it’s not always practical (or possible) to gather aggregate performance data in the wild. But let’s say a candidate’s performance is borderline — or where their performance differs wildly from what you’d expect. It might make sense to interview them one more time, focusing on different material, before making the final decision.











* * *







_We’ve collected a ton more interview performance data not yet included in this analysis, so if you’re curious to see whether interview performance is still arbitrary, stay tuned!_

_Want to become awesome at technical interviews and land your next job in the process? Join_ [_interviewing.io_](http://interviewing.io)_._








