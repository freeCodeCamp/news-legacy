---
author: Aline Lerner
authorTwitter: https://twitter.com/alinelernerLLC
authorFacebook: none
title: "Lessons from a year’s worth of hiring data"
subTitle: "Before I started interviewing.io (which was inspired in large part by what I learned while working on this post), I worked as a recruiter..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*gZml9fEIcquQNBJNlCq7fg.jpeg
url: https://medium.freecodecamp.org/lessons-from-a-years-worth-of-hiring-data-dacf4e7668d4
id: lessons-from-a-years-worth-of-hiring-data-dacf4e7668d4
date: 2016-07-29T09:33:00.318Z
tags: [
  "Tech",
  "Hiring",
  "Startup",
  "Technology",
  "Careers"
]
---
# Lessons from a year’s worth of hiring data



![](https://cdn-images-1.medium.com/max/1600/1*gZml9fEIcquQNBJNlCq7fg.jpeg)



Before I started [interviewing.io](http://interviewing.io) (which was inspired in large part by what I learned while working on this post), I worked as a recruiter. I also ran technical recruiting at [TrialPay](http://www.trialpay.com).

Before that, I worked as a software engineer, and one part of my job was conducting first-round technical interviews. Between January 2012 and January 2013, I interviewed roughly 300 people for our back-end/full-stack engineer positions.

TrialPay was awesome and gave me a lot of freedom, so I was able to use my intuition about whom to interview. As a result, candidates ranged from self-taught college dropouts or associate’s degree holders to PhD holders, ACM winners, MIT/Harvard/Stanford/Caltech students, and Microsoft, Amazon, Facebook, and Google interns — and everyone in between.

**While interviewing such a wide cross section of people, I realized that I had a golden opportunity to test some of the prevalent folk wisdom about hiring.**

The results were pretty surprising, so I thought it would be cool to share them. Here’s what I found:

*   typos and grammatical errors matter more than anything else
*   having attended a top computer science school doesn’t matter
*   listing side projects on your resume isn’t as advantageous as expected
*   GPA doesn’t seem to matter

And the least surprising thing that I was able to confirm was that:

*   having worked at a top company matters

Of course, a data set of size 300 is a pittance, and I’m a far cry from a data scientist. Most of the statistics here is done with the help of [Statwing](http://www.statwing.com) and with Wikipedia as a crutch. With the advent of more data and more rigorous analysis, perhaps these conclusions will be proven untrue. But, you gotta start somewhere.

#### **_Why any of this matters_**

In the status quo, most companies don’t run exhaustive analyses of hiring data, and the ones that do keep it closely guarded and only share [vague generalities](http://www.businessinsider.com/big-data-in-the-workplace-2013-5) with the public. As a result, a certain mysticism persists in hiring, and great engineers who don’t fit in “the mold” end up getting cut before another engineer has the chance to see their work.

Why has a pedigree become such a big deal in an industry that’s supposed to be a meritocracy? At the heart of the matter is scarcity of resources. When a company gets to be a certain size, hiring managers don’t have the bandwidth to look over every resume and treat every applicant like a unique and beautiful snowflake. As a result, the people doing initial resume filtering are not engineers. Engineers are expensive and have better things to do than read resumes all day. Enter recruiters or HR people. As soon as you get someone who’s never been an engineer making hiring decisions, you need to set up proxies for aptitude. Because these proxies need to be easily detectable, things like a CS degree from a top school become paramount.

**Bemoaning that non-technical people are the first to filter resumes is silly because it’s not going to change. What can change, however, is how they do the filtering.** We need to start thinking analytically about these things, and I hope that publishing this data is a step in the right direction.

#### **_Method_**

To sort facts from folk wisdom, I isolated some features that were universal among resumes and would be easy to spot by technical and non-technical people alike and then ran statistical significance tests on them.

My goal was to determine which features were the strongest signals of success, which I defined as getting an offer. I ran this analysis on people whom we decided to interview rather than on every applicant. Roughly out 9 out of 10 applicants were screened out before the first round. The motivation there was to gain some insight into what separates decent candidates from great ones, which is a much harder question than what separates poor candidates from great ones.

Certainly there will be some sampling bias at play here, as I only looked at people who chose to apply to TrialPay specifically, but I’m hoping that TrialPay’s experience could be a stand-in for any number of startups that enjoy some renown in their specific fields but are not known globally.

It also bears mentioning that this is a study into what resume attributes are significant when it comes to getting hired rather than when it comes to on-the-job performance.

Here are the features I chose to focus on (in no particular order):

*   **BS in Computer Science from a top school** (as determined by U.S. News and World Report)
*   **Number of grammatical errors, spelling errors, and syntactic inconsistencies**
*   **Frequency of buzzwords** (programming languages, frameworks, OSes, software packages, etc.)
*   **How easy it is to tell what someone did at each of their jobs**
*   **Highest degree earned**
*   **Resume length**
*   **Presence of personal projects**
*   **Work experience in a top company**
*   **Undergraduate GPA**

#### **_TrialPay’s hiring bar and interview process_**

Before I share the actual results, a quick word about context is in order. TrialPay’s hiring standards are quite high. We ended up interviewing roughly 1 in 10 people that applied. Of those, after several rounds of interviewing (generally a phone screen followed by a live coding round followed by onsite), we extended offers to roughly 1 in 50, for an ultimate offer rate of 1 in 500.

The interview process is pretty standard, though the company shies away from asking puzzle questions that depend on some amount of luck/clicking to get the correct answer. Instead, they prefer problems that gradually build on themselves and open-ended design and architecture questions.

### **_The results_**

Now, here’s what I discovered. The bar height represents [effect size](http://en.wikipedia.org/wiki/Effect_size). Every feature with a bar was statistically significant. These results were quite surprising, and I will try to explain and provide more info about some of the more interesting stuff I found.



![](https://cdn-images-1.medium.com/max/1600/1*Q80qedOoslyHbmL1FMfA9w.png)

Effect size of resume features



#### Number of errors

The most significant feature by far was the presence of typos, grammatical errors, or syntactic inconsistencies.

Errors I counted included everything from classic transgressions like mixing up “its” and “it’s” to typos and bad comma usage. In the figure below, I’ve created a fictional resume snippet to highlight some of the more common errors.



![](https://cdn-images-1.medium.com/max/1600/1*ynV-0GY0COaUStmykVEWuA.png)



This particular result was especially encouraging because it’s something that can be spotted by HR people as well as engineers. When I surveyed 30 hiring managers about which resume attributes they thought were most important, however, no one ranked number of errors highest.

Presumably, hiring managers don’t think that this attribute is that important for a couple of reasons: (1) resumes that are rife with mistakes get screened out before even getting to them and (2) people almost expect engineers to be a bit careless with stuff like spelling and grammar. With respect to the first point, keep in mind that the resumes in this analysis were only of people whom we decided to interview. With respect to the 2nd point, namely that engineers shouldn’t be held to the same writing standards as people in more humanities-oriented fields, I give you my next chart.

Below is a breakdown of how resumes that ultimately led to an offer stacked up against those that didn’t. (Here, I’m showing the absolute number of errors, but when I ran the numbers against number of errors adjusted for resume length, the result were virtually identical.)



![](https://cdn-images-1.medium.com/max/1600/1*Q9l2Se0BTMJjLHHAyghipw.png)



As you can see, the distributions look quite different between the group of people who got offers and those that didn’t. Moreover, **about 87% of people who got offers made 2 or fewer mistakes**.

In startup situations, not only are good written communication skills extremely important (a lot of heavy lifting and decision making happens over email), but I have anecdotally found that being able to write well tends to correlate very strongly with whether a candidate is good at more analytical tasks.

Not submitting a resume rife with errors is a sign that the candidate has strong attention to detail which is an invaluable skill when it comes to coding, where there are often all manners of funky edge cases and where you’re regularly being called upon to review others’ code and help them find obscure errors that they can’t seem to locate because they’ve been staring at the same 10 lines of code for the last 2 hours.

It’s also important to note that a resume isn’t something you write on the spot. Rather, it’s a document that you have every opportunity to improve. You should have at least 2 people proofread your resume before submitting it. When you do submit, you’re essentially saying, “This is everything I have done. This is what I’m proud of. This is the best I can do.” So make sure that that is actually true, and don’t look stupid by accident.

#### **_Top company_**

No surprises here. The only surprise is that this attribute wasn’t more significant. Though I’m generally not too excited by judging someone on pedigree, having been able to hold down a demanding job at a competitive employer shows that you can actually, you know, hold down a demanding job at a competitive employer.

Of all the companies that our applicants had on their resumes, I classified the following as elite: Amazon, Apple, Evernote, Facebook, Google, LinkedIn, Microsoft, Oracle, any Y Combinator startup, Yelp, and Zynga.

#### **_Undergraduate GPA_**

After I ran the numbers to try to figure out whether GPA mattered, the outcome was a bit surprising: GPA appeared to not matter at all. Take a look at the GPA distribution for candidates who got offers versus candidates that didn’t.



![](https://cdn-images-1.medium.com/max/1600/1*B9gl4xn3uf6X9K0byHC5Dg.png)



As a caveat, it’s worth mentioning that roughly half of our applicants didn’t list their GPAs on their resumes, so not only is the data set smaller, but there are probably some biases at play. I did some experiments with filling in the missing data and separating out new grads, and I will discuss those results in a future post.

#### **_Is it easy to tell what the candidate actually did?_**

Take a look at this role description:



![](https://cdn-images-1.medium.com/max/1600/1*VLDTf3xcHamC9alLQCG5-Q.png)





![](https://cdn-images-1.medium.com/max/1600/1*fTTSIAEC-X76RrCeIUDHlA.png)



In which of these is it easier to tell what the candidate did? I would argue that the first snippet is infinitely more clear than the second. In the first, you get a very clear idea of what the product is, what the candidate’s contribution was in the context of the product, and why that contribution matters. In the second, the candidate is using some standard industry lingo as a crutch — what he said could easily be applied to pretty much any software engineering position.

Judging each resume along these lines certainly wasn’t an exact science, and not every example was as cut-and-dry as the one above. Moreover, while I did my best to avoid confirmation bias while deciding whether I could tell what someone did, I’m sure that the system wasn’t perfect.

All this said, however, I do find this result quite encouraging. **People who are passionate about and good at what they do tend to also be pretty good at cutting to the chase.**

I remember the feeling of having to write my resume when I was looking for my first coding job, and I distinctly remember how easily words flowed when I was excited about a project versus when I knew deep down inside that whatever I had been working on was some mundane piece of crap. In the latter case is when words like “software development life cycle” and a bunch of acronyms reared their ugly heads… a pitiful attempt to divert the reader from lack of substance by waving a bunch of impressive sounding terms in their face.

This impression is further confirmed by a word cloud generated from candidate resumes that received an offer versus those that didn’t. For these clouds, I took words that appeared very frequently in one data set relative to how often they appeared in the other one.



![](https://cdn-images-1.medium.com/max/1600/1*TOG-ZsvDUwohIecfgyagIw.png)

Words that dominate “good” resumes.





![](https://cdn-images-1.medium.com/max/1600/1*67GPVKZ9z3xnekkNjkr7oA.png)

Words that dominate “bad” resumes.



As you can see, “good” resumes focused much more on action words/doing stuff (“manage”, “ship”, “team”, “create”, and so on) versus “bad” resumes which, in turn, focused much more on details/technologies used/techniques.

#### **_Highest degree earned_**



![](https://cdn-images-1.medium.com/max/1600/1*qdwPISzY776klc26frq8QQ.png)



Though highest degree earned didn’t appear to be significant in this particular data set, there was a definite trend that caught my attention. Take a look at the graph of offers extended as a function of degree.



![](https://cdn-images-1.medium.com/max/1600/1*N4tIEAimscx1BhP60SW0Fw.png)



As you can see, the higher the degree, the lower the offer rate. I’m confident that with the advent of more data (especially more people without degrees and with master’s degrees), this relationship will become more clear.

**I believe that self-motivated college dropouts are some of the best candidates around because going out of your way to learn new things on your own time, in a non-deterministic way, while juggling the rest of your life is, in some ways, much more impressive than just doing homework for 4 years.**

#### **_BS in Computer Science from a top school_**

“But wait,” you say, “even if highest degree earned doesn’t matter, not all BS degrees are created equal! And having a BS in Computer Science, from a top school must be important because it’s in every freaking job ad I’ve ever seen!”

And to you I say,“cry me a river, buddy.” Then I feel a bit uncomfortable using such strong language, in light of the fact that n ~= 300.

However,roughly half of the candidates (122, to be exact) in the data set were sporting some fancy pieces of paper. And yet, our hire rate was not too different among people who had said fancy pieces of paper and those that didn’t.In fact, in 2012, **half of the offers we made at TrialPay were to people without a BS in CS from a top school.**

This doesn’t mean that every dropout or student from a 3rd rate school is an unsung genius — there were plenty that I cut before interviewing because they hadn’t done anything to offset their lack of pedigree. However, I do hope that this finding gives you a bit of pause before taking the importance of a degree in CS from a top school at face value.



![](https://cdn-images-1.medium.com/max/1600/1*Fs_nd6jeZgBgRKitWQL-8g.jpeg)



In a nutshell, when you see someone who doesn’t have a pedigree, but looks really smart (has no errors/typos, clearly explains what they worked on, shows passion, and so forth), do yourself a favor and interview them.

#### **_Personal projects_**

Of late, it’s become accepted that one should have some kind of side projects in addition to whatever it is you’re doing at work, and this advice becomes especially important for people who don’t have a nice pedigree on paper.

Sounds reasonable, right? Here’s what ends up happening. To game the system, applicants start linking to virtually empty GitHub accounts that are full of forked repos where they, at best, fixed some silly whitespace issue. In other words, it’s like 10,000 forks when all you need is a glimmer of original thought.



![](https://cdn-images-1.medium.com/max/1600/1*avwxXqxChiCzkJ1VoQPl-Q.jpeg)



Yay forks.

Outside of that, there’s the fact that not all side projects are created equal. I can find some silly tutorial for some flashy UI thing, copy the code from it verbatim, swap in something that makes it a bit personal, and then call that a side project on my resume. Or I can create a new, actually useful JavaScript framework. Or I can spend a year bootstrapping a startup in my off hours and get it up to tens of thousands of users. Or I can arbitrarily call myself CTO of something I spaghetti-coded in a weekend with a friend.

Telling the difference between these kinds of projects is somewhat time-consuming for someone with a technical background and almost impossible for someone who’s never coded before. Therefore, **while awesome side projects are a HUGE indicator of competence, if the people reading resumes can’t tell the difference between awesome and underwhelming** (either because of lack of domain-specific knowledge or because of time considerations), **the signal gets lost in the noise.**

#### **Conclusion**

When I started this project, it was my hope that I’d be able to debunk some myths about hiring or at least start a conversation that would make people think twice before taking folk wisdom as gospel. I also hoped that I’d be able to help non-technical HR people get better at filtering resumes so that fewer smart people would fall through the cracks.

Some of my findings were quite encouraging in this regard because things like typos/grammatical errors, clarity of explanation, and whether someone worked at an elite company are all attributes that a non-technical person can parse. I was also especially encouraged by undergraduate pedigree not necessarily being a signal of success.

At the end of the day, spotting top talent is extremely hard, and much more work is needed. I’m optimistic, however. As more data becomes available and more companies embrace the spirit of transparency, proxies for aptitude that don’t stand up under scrutiny will be eliminated, better criteria will take their place, and smart, driven people will have more opportunities to do awesome things with their careers than ever before.

_I’m CEO and co-founder of_ [_interviewing.io_](http://interviewing.io)_, a platform where engineers can practice technical interviewing anonymously and find jobs based on interview performance rather than resumes, which I increasingly believe are the worst way to gauge engineering aptitude._

_Want to find a great job without ever touching your resume? Join_ [_interviewing.io_](http://interviewing.io)_._








