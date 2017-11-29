---
author: Aline Lerner
authorTwitter: https://twitter.com/alinelernerLLC
authorFacebook: none
title: "People can’t gauge their own interview performance. And that makes them harder to hire."
subTitle: "My experience as a software engineer — and as someone who recruits software engineers — has convinced me of two things:..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*xfX1-CoUOQuoxYLSJhrZ6w.jpeg
url: https://medium.freecodecamp.org/people-cant-gauge-their-own-interview-performance-and-that-makes-them-harder-to-hire-96cd51601437
id: people-cant-gauge-their-own-interview-performance-and-that-makes-them-harder-to-hire-96cd51601437
date: 2016-08-16T20:26:24.014Z
tags: [
  "Recruiting",
  "Programming",
  "Tech",
  "Startup",
  "Data Science"
]
---
# People can’t gauge their own interview performance. And that makes them harder to hire.

My experience as a software engineer — and as someone who recruits software engineers — has convinced me of two things:

1.  Resumes are a poor predictor of job performance — and I’ve [conducted an experiment](https://medium.freecodecamp.com/resumes-suck-heres-the-data-ee88fcc27615#.c8dobfhip) that shows this.
2.  Everyone — regardless of how they look on paper — should have the opportunity to prove their mettle.

These insights lead me to co-found an anonymous technical interviewing platform called [interviewing.io](http://www.interviewing.io).

On interviewing.io, questions tend to fall into the category of what you’d encounter during a phone screen for a back end software engineering role at a top company. And interviewers typically come from a mix of larger companies like Google, Facebook, and Twitter, as well as engineering-focused startups like Asana, Mattermark and KeepSafe.

One of the best parts of running an interviewing platform is access to a ton of interview data. We track everything that happens during an interview, including what people say, the code they write, stuff they draw, and so on. And we also track post-interview feedback.

In this post, I’ll tackle something surprising that we learned from our data — **people simply can’t gauge their own interview performance, and that actually makes it harder to hire them.**

#### First, a bit about setup

When an interviewer and an interviewee match on our platform, they meet in a collaborative coding environment with voice, text chat, and a whiteboard, and jump right into a technical question.

After each interview, people leave one another feedback, and each party can see what the other person said about them once they’ve both submitted their reviews.

If both people find each other competent and pleasant, they have the option to unmask.

Overall, interviewees tend to do quite well on the platform, with **just under half of interviews resulting in a “yes” from the interviewer.**

Here’s what one of our feedback forms look like:



![](https://cdn-images-1.medium.com/max/1600/1*7yLf8OOlUlAo2vsfvfoaMw.png)

Feedback form for interviewers



In addition to one direct yes/no question, we ask about a few different aspects of interview performance using a 1–4 scale.

We also ask interviewees some extra questions that we don’t share with their interviewers. And one of those questions is about how well they think they did.

In this post, we’ll focus on the technical score an interviewer gives an interviewee (circled above), and the interviewee’s self-assessment.

For context, a technical score of 3 or above seems to be the rough cut-off for hirability.

#### Perceived versus actual performance

Here’s the distribution of people’s actual technical performance (as rated by their interviewers) and the distribution of their perceived performance (how they rated themselves) for the same set of interviews.



![](https://cdn-images-1.medium.com/max/1600/1*n4xeAA-FwDScjvrqCia9MQ.png)



Right away, you can see that there’s a disparity, but things really get interesting when you plot perceived vs. actual performance _for each interview_.

Here’s a heat map of the data where the darker areas represent higher interview concentration:



![](https://cdn-images-1.medium.com/max/1600/1*varPTD9U9S0_B0VrEb7ttw.png)



For instance, the darkest square represents interviews where both perceived and actual performance was rated as a 3.

If you run a linear regression on the data, you get an R-squared of only 0.24\. And once you take away the worst interviews, it drops down even further to a 0.16\. (Note that we tried fitting a number of different curves to the data, but they all sucked.)

For context, [R-squared](http://blog.minitab.com/blog/adventures-in-statistics/regression-analysis-how-do-i-interpret-r-squared-and-assess-the-goodness-of-fit) is a measurement of how well you can fit empirical data to some mathematical model. It’s on a scale from 0 to 1, with 0 meaning that everything is noise, and 1 meaning that everything fits perfectly.

In other words, **even though some small positive relationship exists between actual and perceived performance, it’s not a strong, predictable correspondence.**

You can also see **there’s a non-trivial amount of impostor syndrome** going on here, which probably comes as no surprise to anyone who’s worked as an engineer.

Gayle Laakmann McDowell of _Cracking the Coding Interview_ fame has written quite a bit about [how bad people are at gauging their own interview performance](http://www.gayle.com/blog/2011/03/31/why-your-interview-performance-is-impossible-to-judge). It’s something that I had noticed anecdotally when I was doing recruiting, so it was nice to see some empirical data on that front.

In her writing, Gayle mentions that it’s the job of a good interviewer to make you feel like you did OK, even if you bombed.

I was curious about whether that’s what was going on here, but when I ran the numbers, there wasn’t any relationship between how highly an interviewer was rated overall and how off their interviewees’ self-assessments were, in one direction or the other.

Ultimately, this isn’t a big dataset. There are only 254 interviews represented here, because not all interviews in our data set had comprehensive, mutual feedback.

Moreover, I realize that raw scores don’t tell the whole story, and I’ll focus on standardization of these scores and the resulting rat’s nest in my next post.

That said, though interviewer strictness does vary. interviewing.io gates interviewers pretty heavily based on their background and experience, so the overall bar is high and comparable to what you’d find at a good company in the wild.

But we did find that this relationship emerged very early on, and has persisted with more and more interviews. To date, R-squared has never exceeded 0.26.

We’ll continue to monitor the relationship between perceived and actual performance as we host more interviews.

Now here’s the actionable and kind of messed up part. Remember those feedback forms I showed you where we ask interviewees whether they’d want to work with their interviewer? **As it turns out, there’s a very statistically significant relationship** ([p value](https://en.wikipedia.org/wiki/P-value)_)_ between whether people think they did well and whether they’d want to work with the interviewer.

This means that **when people think they did poorly, they may be a lot less likely to want to work with you**— 3 times less likely, according to our data.

And by extension, it means that in every interview cycle, some portion of interviewees lose interest in joining your company just because they didn’t think they did well, _despite the fact that they actually did_.

How can you mitigate these losses? **Give positive, actionable feedback immediately (or as soon as possible)!**

This way, interviewees don’t have time to put themselves through the self-flagellation gauntlet that follows a perceived poor performance, followed by the inevitable rationalization that they _totally_ didn’t want to work there anyway.











* * *







_Want to see how well you can gauge your own interview performance… and land your next job in the process? Join_ [_interviewing.io_](http://interviewing.io)_._








