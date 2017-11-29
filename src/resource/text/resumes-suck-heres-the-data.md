---
author: Aline Lerner
authorTwitter: https://twitter.com/alinelernerLLC
authorFacebook: none
title: "Resumes suck. Here’s the data."
subTitle: "I reviewed a solid year’s worth of resumes from engineers we had hired at TrialPay. The strongest signal I could find for whether we woul..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*BtcIfElvqtDEntXO1tB4kA.jpeg
url: https://medium.freecodecamp.org/resumes-suck-heres-the-data-ee88fcc27615
id: resumes-suck-heres-the-data-ee88fcc27615
date: 2016-07-22T09:14:40.943Z
tags: [
  "Careers",
  "Programming",
  "Jobs",
  "Tech",
  "Data Science"
]
---
# Resumes suck. Here’s the data.







![](https://cdn-images-1.medium.com/max/2000/1*BtcIfElvqtDEntXO1tB4kA.jpeg)

([Image credit](http://wallpaperise.xyz/shredder-paper-destruction-full-hd-wallpaper/))







I reviewed a solid year’s worth of resumes from engineers we had hired at TrialPay. The strongest signal I could find for whether we would extend an offer to an engineer: the [number of typos](http://wallpaperise.xyz/shredder-paper-destruction-full-hd-wallpaper/) and grammatical errors on their resume.

On the other hand, where people went to school, their GPA, and highest degree earned — these didn’t matter _at all_.

These results were pretty unexpected. They ran counter to how resumes are normally filtered. And they left me scratching my head about how good people really are at making value judgments based on resumes.

So, I decided to run an experiment. I wanted to see how good engineers and recruiters actually were at resume-based candidate filtering.

Going into it, I was pretty sure that engineers would do a much better job than recruiters. After all, engineers are technical. They don’t need to rely on proxies like recruiters do.

But that’s not what happened at all. As it turned out, people are pretty bad at filtering resumes — across the board. After running the numbers, it began to look like resumes might not be a particularly effective filtering tool in the first place.

#### Setup

The setup was simple. I would:

1.  Take resumes from my collection.
2.  Remove all personally identifying info (name, contact info, dates, etc.).
3.  Show them to a bunch of recruiters and engineers.
4.  For each resume, ask just one question: _Would you interview this candidate?_

Essentially, each participant saw something like this:



![](https://cdn-images-1.medium.com/max/1600/1*92k6uxwTEjwgEyDh2N7xhQ.png)



If the participant didn’t want to interview the candidate, they’d have to write a few words about why. If they did want to interview, they also had the option of substantiating their decision, but, in the interest of not fatiguing participants, I didn’t require it.

To make judging easier, I told participants to pretend that they were hiring for a full-stack or back-end web dev role, as appropriate. I also told participants not to worry too much about the candidate’s seniority when making judgments, and to assume that the seniority of the role matched the seniority of the candidate.

**For each resume, I had a pretty good idea of how strong the engineer in question was, and I split resumes into two strength-based groups**. To make this judgment call, I drew on my personal experience — most of the resumes came from candidates I placed (or tried to place) at top-tier startups. In these cases, I knew exactly how the engineer had done in technical interviews, and, more often than not, I had visibility into how they performed on the job afterwards.

The remainder of resumes came from engineers I had worked with directly. **The question was whether the participants in this experiment could figure out who was who just from the resume.**

At this juncture, a disclaimer is in order. Certainly, someone’s subjective hirability based on the experience of one recruiter is not an oracle of engineering ability. With the advent of more data and more rigorous analysis, perhaps these results will be proven untrue. But, you gotta start somewhere.

That said, here’s the experiment by the numbers:

*   I used a total of **51 resumes** in this study. 64% belonged to strong candidates.
*   A total of **152 people** participated in the experiment.

**Each participant made judgments on 6 randomly selected resumes** from the original set of 51, for a total of **716 data points**.

_(This number is less than 152*6=912 because not everyone who participated evaluated all 6 resumes.)_

If you want to take the experiment for a whirl yourself, you can do so [here](http://bit.ly/judgefest).

Participants were broken up into engineers (both engineers involved in hiring and hiring managers themselves) and recruiters (both in-house and agency). There were 46 recruiters (22 in-house and 24 agency) and 106 engineers (20 hiring managers and 86 non-manager engineers who were still involved in hiring).

#### Results

So, what ended up happening? Below, you can see a comparison of resume scores for both groups of candidates.

A resume score is the average of all the votes each resume got, where a ‘no’ counted as 0 and a ‘yes’ vote counted as 1\. The dotted line in each box is the mean for each resume group — you can see they’re pretty much the same. The solid line is the median, and the boxes contain the 2nd and 3rd quartiles on either side of it.



![](https://cdn-images-1.medium.com/max/1600/1*JiMWchSbVaZTQjNil97kMQ.png)



As you can see, people weren’t very good at this task. What’s pretty alarming is that **scores are all over the place, for both strong and less strong candidates.**

Another way to look at the data is to look at the distribution of accuracy scores. _Accuracy_ in this context refers to how many resumes people were able to tag correctly out of the subset of 6 that they saw. As you can see, results were all over the board.



![](https://cdn-images-1.medium.com/max/1600/1*03OO3j2w3Tclvnv9vAhABQ.png)



On average, participants guessed correctly 53% of the time. This was pretty surprising. At the risk of being glib, according to these results, when a good chunk of people involved in hiring make resume judgments, they might as well be flipping a coin.



![](https://cdn-images-1.medium.com/max/1600/1*1Wii9tfjwqvpjYJMBJUOFg.png)

([Image credit](https://what-if.xkcd.com/19/))



What about performance broken down by participant group? Here’s the breakdown:

*   Agency recruiters — 56%
*   Engineers — 54%
*   In-house recruiters — 52%
*   Engineering hiring managers — 48%

None of the differences between participant groups were statistically significant. In other words, all groups did equally poorly.

For each group, you can see how well people did below.



![](https://cdn-images-1.medium.com/max/1600/1*6G8Qhin5oloHrVYX31WSPA.png)



To try to understand whether people really were this bad at the task or whether perhaps the task itself was flawed, I ran some more stats.

One thing I wanted to understand, in particular, was whether _inter-rater agreement_ was high. In other words, when rating resumes, were participants disagreeing with each other more often than you’d expect to happen by chance? If so, then even if my criteria for whether each resume belonged to a strong candidate wasn’t perfect, the results would still be compelling.

No matter how you slice it, if people involved in hiring consistently can’t come to a consensus, then something about the task at hand is too ambiguous.

The test I used to gauge inter-rater agreement is called [Fleiss’ kappa](http://en.wikipedia.org/wiki/Fleiss%27_kappa). The result is on the following scale of -1 to 1:

*   _-1_ perfect disagreement; no rater agrees with any other
*   _0_ random; the raters might as well have been flipping a coin
*   _1_ perfect agreement; the raters all agree with one another

Fleiss’ kappa for this data set was 0.13\. 0.13 is close to zero, implying just mildly better than coin flip. In other words, the task of making value judgments based on these resumes was likely too ambiguous for humans to do well on with the given information alone.

TL;DR Resumes might actually suck.

### Some interesting patterns

In addition to the finding out that people aren’t good at judging resumes, I was able to uncover a few interesting patterns.

#### **Times didn’t matter.**

We’ve all heard of and were probably a bit incredulous about [the study](http://info.theladders.com/our-team/you-only-get-6-seconds-of-fame-make-it-count) that showed recruiters spend less than 10 seconds on a resume on average. In this experiment, people took a lot longer to make value judgments. People took a median of 1 minute and 40 seconds per resume. In-house recruiters were fastest, and agency recruiters were slowest. **However, how long someone spent looking at a resume appeared to have no bearing, overall, on whether they’d guess correctly.**

#### **Different things mattered to engineers and recruiters.**

Whenever a participant deemed a candidate not worth interviewing, they had to substantiate their decision. Though these criteria are clearly not the be-all and end-all of resume filtering. If they were, people would have done better.

It was interesting to see that engineers and recruiters were looking for different things.

_( I created the categories below from participants’ full-text rejection reasons, after the fact.)_



![](https://cdn-images-1.medium.com/max/1600/1*uyPcpJVRx3pykLJjpzUQRg.png)





![](https://cdn-images-1.medium.com/max/1600/1*WXEtynD7GHYDQmwnW_oq9w.png)



Incidentally, _lack of relevant experience_ didn’t refer to lack of experience with a specific stack. Verbatim rejection reasons under this category tended to say stuff like “projects not extensive enough,” “lack of core computer science,” or “a lot of academic projects around Electrical Engineering, not a lot on the resume about programming or web development.”

_Culture fit_ in the engineering graph denotes concerns about engineering culture fit, rather than culture fit overall. This could be anything from concern that someone used to working with Microsoft technologies might not be at home in a Ruby on Rails shop to worrying that the candidate is too much of a hacker to write clean, maintainable code.

#### **Different groups did better on different kinds of resumes.**

First of all, and not surprisingly, engineers tended to do slightly better on resumes that had projects. Engineers also tended to do better on resumes that included detailed and clear explanations of what the candidate worked on.

To get an idea of what I mean by detailed and clear explanations, take a look at the two versions below (source: [Lessons from a year’s worth of hiring data](http://blog.alinelerner.com/lessons-from-a-years-worth-of-hiring-data/ "Lessons from a year’s worth of hiring data")). The first description can apply to pretty much any software engineering project, whereas after reading the second, you have a pretty good idea of what the candidate worked on.



![](https://cdn-images-1.medium.com/max/1600/1*fTTSIAEC-X76RrCeIUDHlA.png)





![](https://cdn-images-1.medium.com/max/1600/1*VLDTf3xcHamC9alLQCG5-Q.png)



Recruiters, on the other hand, tended to do better with candidates from top companies. This also makes sense. Agency recruiters deal with a huge, disparate candidate set while also dealing with a large number of companies in parallel. They’re going to have a lot of good breadth-first insight including which companies have the highest engineering bar, which companies recently had layoffs, which teams within a specific company are the strongest, and so on.

### **_Resumes just aren’t that useful_**

So, why are people pretty bad at this task? As we saw above, **it may not be a matter of being good or bad at judging resumes but rather a matter of the task itself being flawed — at the end of the day, the resume is a low-signal document.**

If we’re honest, no one really knows how to write resumes particularly well. Many people get their first resume writing tips from their university’s career services department, which is staffed with people who’ve never held a job in the field they’re advising for.

Hell, some of the most fervent resume advice I ever got was from a technical recruiter, who insisted that I list every technology I’d ever worked with on every single undergrad research project I’d ever done. I left his office in a cold sweaty panic, desperately trying to remember what version of Apache MIT had been running at the time.

Very smart people — who are otherwise fantastic writers — seem to check every ounce of intuition and personality at the door, then churn out soulless documents expounding their experience with the software development life cycle or whatever. They’re scared that sounding like a human being on their resume — or not peppering it with enough keywords — will eliminate them from the applicant pool before an engineer even has the chance to look at their resume.

Writing aside, reading resumes is a tedious and largely thankless task. If it’s not your job, it’s a distraction that you want to get over with so you can go back to writing code.

If reading resumes is your job, you probably have a huge stack to get through. So it’s going to be hard to do deep dives into people’s work and projects, even if you’re technical enough to understand them — and this is assuming they included links to their work in the first place.

On top of that, spending more time on a given resume may not even yield a more accurate result, at least according to what I observed in this study.

### **_How to fix top-of-the-funnel filtering_**

Assuming that my results are reproducible and people, across the board, are really quite bad at filtering resumes, there are a few things we can do to make top-of-the-funnel filtering better.

In the short term, improving collaboration across different teams involved in hiring is a good start. As we saw, engineers are better at judging certain kinds of resumes, and recruiters are better at others. If a resume has projects or a GitHub account with content listed, passing it over to an engineer to get a second opinion is probably a good idea. And if a candidate is coming from a company with a strong brand, but one that you’re not too familiar with, getting some insider info from a recruiter might not be the worst thing.

**Longer-term, how engineers are filtered fundamentally needs to change**. In my [TrialPay study](http://blog.alinelerner.com/lessons-from-a-years-worth-of-hiring-data/ "Lessons from a year’s worth of hiring data"), I found that, in addition to grammatical errors, one of the things that mattered most was how clearly people described their work. In this study, I found that engineers were better at making judgments on resumes that included these kinds of descriptions.

Given these findings, relying more heavily on a writing sample during the filtering process might be in order. For the writing sample, I am imagining something that isn’t a cover letter. People tend to make those pretty formulaic and don’t talk about anything too personal or interesting. Rather, it should be a concise description of something you worked on recently that you are excited to talk about, as explained to a non-technical audience.

I think the non-technical audience aspect is critical, because if you can break down complex concepts for a layman to understand, you’re probably a good communicator and actually understand what you worked on. Moreover, recruiters could actually read this description and make valuable judgments about whether the writing is good and whether they understand what the person did.

Honestly, I really hope that the resume dies a grisly death. One of the coolest things about coding is that it doesn’t take much time or effort to determine whether someone can perform above some minimum threshold. All you need is the internets and a code editor.

Of course, figuring out whether someone is great is tough and takes more time. But figuring out if someone meets a minimum standard — mind you the same kind of minimum standard we’re trying to meet when we go through a pile of resumes — is pretty damn fast.

And in light of this, relying on low-signal proxies doesn’t make sense at all.

_I’m CEO and co-founder of_ [_interviewing.io_](http://interviewing.io)_, a platform where engineers can practice technical interviewing anonymously and find jobs based on interview performance rather than resumes._

_Want to find a great job without ever touching your resume? Join_ [_interviewing.io_](http://interviewing.io)_._








