---
author: Aline Lerner
authorTwitter: https://twitter.com/alinelernerLLC
authorFacebook: none
title: "What you do after you graduate matters way more than where you went to school. Here’s the data."
subTitle: "The first blog post I published that got any real attention was called “Lessons from a year’s worth of hiring data.” It was my attempt to..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*qp-tyBPC63nmozLLlTpKDg.jpeg
url: https://medium.freecodecamp.org/what-you-do-after-you-graduate-matters-way-more-than-where-you-went-to-school-heres-the-data-e1cffd4ed76
id: what-you-do-after-you-graduate-matters-way-more-than-where-you-went-to-school-heres-the-data-e1cffd4ed76
date: 2016-12-30T02:51:20.709Z
tags: [
  "Programming",
  "Startup",
  "Self Improvement",
  "Life Lessons",
  "Tech"
]
---
# What you do after you graduate matters way more than where you went to school. Here’s the data.







![](https://cdn-images-1.medium.com/max/2000/1*qp-tyBPC63nmozLLlTpKDg.jpeg)







The first blog post I published that got any real attention was called “[Lessons from a year’s worth of hiring data](http://blog.alinelerner.com/lessons-from-a-years-worth-of-hiring-data/).” It was my attempt to understand what attributes of someone’s resume actually mattered for getting a software engineering job. As it turned out, where someone went to school didn’t matter at all. By far and away, the strongest signal came from the number of typos and grammatical errors on their resume.

Since then, I’ve discovered (and written about) how [useless resumes are](http://blog.alinelerner.com/resumes-suck-heres-the-data/). But ever since writing that first post, I’ve been itching to do something similar with our platform’s data.

For context, interviewing.io is a platform where people can practice technical interviewing anonymously and, in the process, find jobs.

If you do well in practice interviews, and you advance to guaranteed (and anonymous!) technical interviews with companies like Uber, Twitch, and Lyft.

Over the course of our existence, we’ve amassed performance data from thousands of real and practice interviews. Data from these interviews sets us up nicely to look at what signals from an interviewee’s background might matter when it comes to performance.

### First, some background on our dataset

When an interviewer and an interviewee match on our platform, they meet in a collaborative coding environment with voice, text chat, and a whiteboard and jump right into a technical question. Interview questions on the platform tend to fall into the category of what you’d encounter at a phone screen for a back-end software engineering role. Interviewers typically come from a mix of large companies like Google, Facebook, and Uber, as well as engineering-focused startups like Asana, Mattermark, and KeepSafe.

After every interview, interviewers rate interviewees on a few different dimensions, including technical ability. Technical ability gets rated on a scale of 1 to 4, where 1 is “poor” and 4 is “amazing!” On our platform, a score of 3 or above has generally meant that the person was good enough to move forward. You can see what our feedback form looks like below:



![](https://cdn-images-1.medium.com/max/1600/1*aWzK3fgDWt4H2UZZS9_C5w.png)



To run the analysis for this post, we cross-referenced interviewees’ average technical scores (circled in red in the feedback form above) with these attributes to see which ones mattered most:

*   Attended a top computer science school
*   Worked at a top company
*   Took classes on Udacity or Coursera
*   Founded a startup
*   Master’s degree
*   Years of experience

Of all of these, only 3 attributes emerged as statistically significant: **top school, top company, and classes on Udacity/Coursera.** Apparently, as the fine gentlemen of Metallica once said, nothing else matters.

In the graph below, you can see the [effect size](https://en.wikipedia.org/wiki/Effect_size) of each of the significant attributes (attributes that didn’t achieve statistical significance don’t have bars):



![](https://cdn-images-1.medium.com/max/1600/1*C33sLT6t0nGOs7AwhI3JvA.png)



As I said at the outset, these results were quite surprising.

Let’s take a stab at explaining each of these outcomes.

### Top School and Top Company

Going into this, I expected top company to matter, but not top school. The company thing makes sense — you’re selecting people who’ve successfully been through at least one interview gauntlet, so the odds of them succeeding at future interviews should be higher.

Top school is a bit more muddy, and it was indeed the least impactful of the significant attributes.

Why did schooling matter in this iteration of the data but didn’t matter when I was looking at resumes? I expect the answer lies in the disparity between performance in an isolated technical phone screen versus what happens when a candidate actually goes on site.

With the right preparation, the technical phone interview is manageable. Top schools often have rigorous algorithms classes and a culture of preparing for technical phone screens.

To see why this culture matters and how it might create an unfair advantage for those immersed in it, see my post about how we need to [rethink the technical interview](http://blog.interviewing.io/you-cant-fix-diversity-in-tech-without-fixing-the-technical-interview/). Whether passing an algorithmic technical phone screen actually means you’re a great engineer is another matter entirely and hopefully the subject of a future post.

### Udacity/Coursera

That online course participation (Udacity and Coursera in particular, as those were the ones interviewing.io users gravitated to most) mattered as much as it did — and mattering way more than pedigree — was probably the most surprising finding here, and so it merited some additional digging.

In particular, I was curious about the interplay between online courses and top schools. So I partitioned online course participants into people who had attended top schools versus people who hadn’t. When I did that, something startling emerged.

For people who attended top schools, completing Udacity or Coursera courses didn’t appear to matter. But for people who did not attend top schools, the effect of taking these online courses was huge. So huge, in fact, that it dominated the board.

Moreover, **interviewees who attended top schools performed significantly worse than interviewees who had not attended top schools, but had taken a Udacity or Coursera course.**

So, what does this mean? Of course (as you’re probably thinking to yourself while you read this), correlation doesn’t imply causation.

Online courses aren’t necessarily some magic pill.

But I suspect that people who gravitate toward online courses — and especially those who might have a chip on their shoulder about their undergrad pedigree, who might drink from the online course firehose — already tend to be abnormally driven.

But, even with that, I’d be hard pressed to say that completing great online computer science classes isn’t going to help you become a better interviewee — especially if you didn’t have the benefit of a rigorous algorithms class up until then.

Indeed, a lot of the courses we saw people take focused on algorithms, so it’s no surprise that supplementing your preparation with courses like this could be tremendously useful.

Some of the most popular courses we saw were:

**Udacity**  
[Design of Computer Programs](https://www.udacity.com/course/design-of-computer-programs--cs212)  
[Intro to Algorithms](https://www.udacity.com/course/intro-to-algorithms--cs215)  
[Computability, Complexity & Algorithms](https://www.udacity.com/course/computability-complexity-algorithms--ud061)

**Coursera**  
[Algorithms Specialization](https://www.coursera.org/specializations/algorithms)  
[Functional Programming Principles in Scala](https://www.coursera.org/learn/progfun1)  
[Machine Learning](https://www.coursera.org/learn/machine-learning)  
[Algorithms on Graphs](https://www.coursera.org/learn/algorithms-on-graphs)

### Founder Status

Having been a founder didn’t matter at all when it came to technical interview performance.

This, too, isn’t that surprising. The things that make one a good founder aren’t necessarily the things that make one a good engineer. And if you just came out of running a startup and are looking to get back into an individual contributor role, odds are that your interview skills will be a bit rusty.

This is also true of folks who’ve been in industry but haven’t gone through technical interviews in a while, as you’ll see below.

### Master’s Degree and Years of Experience

No surprises here. I’ve ranted quite a bit about the [disutility of master’s degrees](http://blog.alinelerner.com/how-different-is-a-b-s-in-computer-science-from-a-m-s-in-computer-science-when-it-comes-to-recruiting/), so I won’t belabor the point.

Years of experience, too, shouldn’t be that surprising. For context, our average user has about 5 years of experience, with most having between 2 and 10.

I think we’ve all anecdotally observed that the time spent away from your schooling doesn’t do you any favors when it comes to interview prep.

You can see a scatter plot of interview performance versus years of experience below, as well as my attempt to fit a line through it (as you can see, the R² is piss poor, meaning that there’s no statistically relevant relationship to speak of).



![](https://cdn-images-1.medium.com/max/1600/1*5gsVY36nMglrRUGyQPo0Rw.png)



### Closing thoughts

If you know me, or have read some of my writing before, you’ll recall that I’ve been loudly opposed to the concept of pedigree as a useful hiring signal. With that in mind, I feel like I must clearly acknowledge that the results we found this time run counter to my stance.

But that’s the whole point, isn’t it? You live, you get some data, you make some graphs, you learn, you make new graphs, and you adjust.

Even with this new data, I’m excited to see that what mattered way more than pedigree was the actions people took to better themselves — in this case, rounding out their existing knowledge with online courses — regardless of their background.

Most importantly, these findings have done nothing to change interviewing.io’s core mission. We’re creating an efficient and meritocratic way for candidates and companies to find each other. As long as you can code, we couldn’t care less about who you are or where you come from.

In our ideal world, all these conversations about which proxies matter more than others would be moot non-starters, because coding ability would stand for, well, coding ability. And that’s the world we’re building.











* * *







Want to become awesome at technical interviews and land your next job in the process? [Join interviewing.io](http://www.interviewing.io)!








