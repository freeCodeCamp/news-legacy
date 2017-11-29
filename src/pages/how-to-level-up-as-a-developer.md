---
author: Will Hughes
authorTwitter: none
authorFacebook: https://facebook.com/10153726589728941
title: "How to Level up as a Developer"
subTitle: "Being a productive developer is something you can learn through experience, books, or trial and error. But, one of the best ways to becom..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*5FVm7-zKWkLzcNjRuYG2uw.png
url: https://medium.freecodecamp.org/how-to-level-up-as-a-developer-87344584777c
id: how-to-level-up-as-a-developer-87344584777c
date: 2016-02-19T20:00:56.078Z
tags: [
  "Productivity",
  "Programming",
  "Self Improvement",
  "Careers",
  "Tech"
]
---
# How to Level up as a Developer







![](https://cdn-images-1.medium.com/max/2000/1*5FVm7-zKWkLzcNjRuYG2uw.png)







Being a productive developer is something you can learn through experience, books, or trial and error. But, one of the best ways to become a productive developer is to learn directly from a developer who is already productive. I interviewed some of the most productive engineers at Facebook in order to find an underlying structure for how these developers operated at peak productivity.

### Level 1: REDUCE UNNECESSARY DISTRACTIONS

This section may _seem_ obvious, but it’s the little things that add up and cost us the most in productivity.

**PUSH BACK ON MEETINGS**

> “I go to as few meetings as possible. I generally don’t go to any recurring meetings. This might not work for everybody b/c managers like to schedule recurring meetings and you don’t want to piss off your manager. but then I’d recommend showing the cost of a meeting (10 engineers x 30 minutes/week + 10 minutes of task switching overhead = we paid an engineer to spend half a day/week in that meeting. that’s a lot of time. I always push for replacing recurring meetings with scheduling a meeting when there is something to discuss or a quick standup.” — 

Something many engineers pressed hard was that meetings _can_ be valuable when the meeting is needed. But, we must maintain a critical eye and determine whether each individual meeting is worthwhile.

**BE PREPARED TO DO SMALL TASKS**

> “While building or diffing[1] I quickly clear out my email queue to stay at inbox 0” — Michael Novati

There may be a time where you have just finished a task and now have 5–15 minutes before a meeting, or maybe you just started a test run that will take 1, 5, or 15 minutes. The common reaction is “I can’t get any significant work done in that amount of time”. Which seems logical, many tasks may take from 30 minutes to an hour of focused concentration, _but not all tasks._ Many of the engineers mentioned that they keep lists of small tasks that they can easily take care of in these slower moments throughout the day. Catching up on emails, diff reviews, responding to internal posts, or even small diffs/refactors can fill in these time slots in order to make you more productive and up to date throughout the day.

**GET NOISE CANCELLING HEADPHONES**

If you’ve ever been to one of the younger software companies, you’ll notice how floors are set up as large open areas. This is a double edged sword for engineers. On one hand, you are physically closer to your team. Collaboration and camaraderie between teammates reaches an all time high when you can ask questions and bond with your teammates. The downside to this is that now your precious development focus can be sidetracked by noise in the surrounding area. Sound travels, and when you’re trying to grasp a problem, a loud conversation behind you can be detrimental to your productivity. This is where noise cancelling headphones come in. Technology is far more advanced than simply putting large walls around your ear and turning up the volume. Real noise cancelling headphones cancel out background noise and muffle conversations in the immediate vicinity. After my interview with Michael Novati I bought [the headphones he recommended](http://www.amazon.com/gp/product/B00D42A16E) and I honestly could not see my development process without them. It becomes so evidently clear how much background noise exists in offices once you have something to compare it to.

**WORK WHEN PEOPLE CAN’T BOTHER YOU**

> (On dealing with interruptions) “Moving to NY two years ago probably helped a lot” — Adam Ernst

> “I usually save harder, more complicated tasks for Wednesdays (when I work from home uninterrupted)” — Bob Baldwin

> “I’m not able to actually get much done during ‘normal’ working hours and rely on the extra time to actually accomplish stuff” — 

> “I often get more done between 6 and 9 than during the rest of the day. long uninterrupted time is critical.” — 

I’ll admit it, one of the biggest takeaways from talking to the engineers was that many of them work long hours. Some interesting tidbits about _why_ they worked such long hours were interesting though. During the early mornings, late nights, and weekends, these engineers revelled in the fact that no one was interrupting them. By finding times throughout the day when they had minimal interruptions, they had the time to push through large tasks and get code out.

**REDUCE NOISY EMAILS/NOTIFICATIONS**

> “I turned off all non-emergency email alerts. Only getting emails that need action and forcing myself to check the tasks/review pages at a reasonable rate actually helped me miss fewer things by assuming they were spam” — Ari Chivukula

If you stopped to check your email every time you got a new mail, your day may get completely derailed by distractions. By reducing and filtering notifications to only essentials, you can work longer periods undistracted.

**DON’T LOSE STATE**

> “When I’m interrupted (or have to go to the bathroom) I “save state” in my head, like saving state in a Gameboy Emulator, so that I can return and recover as fast as possible” — Michael Novati

> “Always stop the day midway through a fairly simple or mechanical task. This gives you an easy place to pick up the next day and get back in the zone, instead of starting from scratch.” — Adam Ernst

For me, losing state in terms of programming is when I’m thinking deeply about a problem, I’m interrupted, and I forget what I was thinking about, meaning that I have to go through the whole thinking process again.

One of the best things to do in the case of an interruption while you’re in “the zone” is to defer the interruption. If you’re interrupted while focusing, tell the person that you’ll get back to them in a bit, make a quick note of it, and continue working until you hit a reasonable stopping point. Once you hit that stopping point, knock off all stacked interruptions.

When an interruption can’t be put off, there are many ways to “save your state”. This can be done by writing down your current thought process, writing a failing test, or by simplifying the problem in your mind.

### Level 2: WRITE “BETTER” DIFFS

Good code can mean many things. It can be functional, easy to review, sustainable, etc.

**WRITE SMALLER DIFFS**

> _“Lots of small diffs is like “showing your work” when doing a problem set in engineering” — _

Every engineer I interviewed stressed hard how splitting your code changes into logical modules made it easier for other people to understand and accept quickly. By reducing the cognitive load of the diffs they sent out, reviewers were more confident in accepting changes. Also, by reducing the size of the diffs, the changes were less intimidating for reviewers to look at, so the throughput was faster.

Full disclosure, I gathered the list of engineers questioned for this article by querying which engineers had committed the most diffs during the preceding six month. That would likely lead to a subset of engineers who write many small diffs, as opposed to fewer large diffs.

**STACKING DIFFS[2] && MULTITASKING**

Most of the engineers mentioned that they will stack diff changes on top of each other, creating dependencies for their logic as they go:

> “Sometimes, when I have a really big diff that developed organically, I will go back and start over and divide it up into logical steps and that often results in me changing things along the way that improve the code quality overall.” — 

> “I never stack diffs, rather I’ll have a few independent things I’m working on in parallel and alternate between them as I wait on reviews. Also breaking up a large change into independent pieces works really well, e.g adding an interface, adding an endpoint with some // TODOs in it… effectively stacking without hard dependencies between the diffs and using placeholders instead. Structuring your code so that you don’t need stacking or sub branches generally means that each diff is easily reviewable, shipable, and revertable.” — Michael Novati

> “If I feel like I’m putting multiple diffs into a single diff, then I pull it up in the stack and put one of the logical pieces underneath” — 

> “Small, or at least easy to review, diffs. Not only are they easier and faster to review, they make me write better code because I think through what I’m doing one logical piece at a time, and I waste very little time debugging as a result. Also, expertise with stacked diffs to make the small diffs manageable” — Ari Chivukula

> “I use stacked diffs extensively. Beyond letting me stay unblocked while I’m waiting for code reviews, thinking about ways to split up code into smaller diffs often makes me think about the big picture of what I’m working on, and even simplify the architecture.” — 

Whether engineers used stacked diffs or worked on multiple diffs in parallel appeared to have little effect on their outgoing productivity, indicating that both methodologies allow engineers to be incredibly productive.

**UNIT TESTING**

> “I test the minimum amount to make me feel comfortable” — Michael Novati

> “People feel more confident accepting code that has unit tests.” — 

Unit testing can be a contentious issue at some tech companies, and, for the most part each team and company will have it’s own guidelines for whether engineers should write tests. One thing can be said though, if you’re at a company where someone else is going to be changing the code you’ve written, the _best_ way to make sure that someone else doesn’t break that piece of code, is toenforce its functionality in tests_._

**COMMUNICATE**

> “For trickier diffs, I will add a small number of appropriate reviewers, share the diff in appropriate groups. I’ll usually ping a diff once a day regardless, if it doesn’t get any action. If there is no action for a few days, I’ll ask people what they find intimidating about the diff and make changes to the structure. Finally I always communicate as much as I can in the title. I always start with “[product/tag]” — so people know vaguely what the diff is about, and if I expect a quick accept I’ll put something like “[product-ASAP]” or “[product-PUSHBLOCKER]”” — Michael Novati

This one _should_ be obvious, but, there are many ways to communicate on your diff reviews. A general rule of thumb is to play it diff by diff. If the diff will be reviewed by someone who doesn’t interact with you on a daily basis, you may want to include more context in the description and title than you normally would if you are just getting a review from a teammate. You can also comment on the sections of your diff that you really want people to double check you on, in case the logic gets a bit complicated.

Setting expectations early through design meetings may also ease the process of writing the code, building good APIs and structure in order to integrate systems can be a huge pain reliever further down the development line.

Don’t be afraid to ping reviewers on your diff. If they really don’t want to review your diff, they can resign, or suggest someone else. Diffs that stick around in queues forever are just asking for merge conflicts in the future.

### Level 3: BEING A TEAM PLAYER

Coding is a team sport, and as with all team sports, there is an upper limit to how much you can accomplish working alone.

**REVIEW OTHER PEOPLE’S CODE**

> “Quick scan, read through, patch it, test it, comment.” — 

Doing more reviews to increase your code output sounds like an oxymoron. We can reframe “doing more reviews” as “clearing other people’s queue”. When you change perspective like this, it becomes clearer, that if you’re clearing the diff queue of other engineers, those engineers are more likely to review your diffs and unblock you.

**BUILD TRUST WITH YOUR REVIEWERS/TEAMMATES**

> “I have a core group of engineers with whom I’ve built up a relative sense of trust, and we generally make an effort to review each other’s code quickly” — 

This point merges a bit into the previous one. If you have a core group of reviewers who trust each other to write good code, you can move forward with changes relatively safely, trusting that if an engineer does break something, they will work really hard to fix it the moment it’s discovered.

**BE TRANSPARENT ABOUT WHAT YOU’RE WORKING ON**

> “Use RFC (Request for Comment) diffs when doing greenfield development. The churn of getting feedback on headers/proposed APIs is well worth the time saved compared to changing direction later.” — Adam Ernst

If people don’t know what you’re working on, the amount of information they’ll need process when reviewing a diff will be far more confusing. By keeping reviewers/teammates in the loop early, they can give feedback before large swathes of work are done, removing roadblocks down the line.

**GIVE GOOD FEEDBACK**

> “Focus on giving high-level feedback, rather than nit-picking. Point out bugs if you see them, but trust engineers to have tested (and that they’ll fix any bugs that arise)” — Bob Baldwin

> “Skim to get high level picture, leave feedback if I don’t understand or have changes to suggest. If the high level seems good, read at a deeper level to check for best practice/nit issues, if there are enough request changes, otherwise accept with a few notes.” — Ari Chivukula

A common trend across most of the responses for “What’s your strategy for reviewing a diff” talked about understanding the diff from a high level first. After the basic structure of the diff is understood, go into the code style and logical checking.

**REQUEST CHANGES**

> “Use Request Changes frequently — the worst that can happen is they re-request review (encourage the author to, if they think your Request Changes was in error)” — Adam Ernst

> “If I can see myself breaking it, ask for unit tests or a refactor so I’m less likely to break it. If it’s too large and too complex and it’s clear no one wants to bother with it, ask them to break it up, or at least give suggestions for good ways to do so in the future” — 

Requesting changes on diffs for non-standard things can be awkward. However, In the long run, encouraging better coding practices and validation are likely to pay off as engineers learn from their mistakes and improve.

**ADMIT WHAT YOU DON’T KNOW**

> “If I don’t know much about a part of the codebase I won’t BS that part and I’ll admit it straight up.” — Michael Novati

You don’t really add much to a conversation by pretending to know something you don’t. Be up-front about your knowledge, and encourage people to seek engineers more knowledgeable about certain systems.

### Level 4: ORGANIZE & HUSTLE

**TODOS**

> “I’ll block off personal things on my Calendar and make notes to do things later in the day, by adding meetings. If I don’t add a reminder to my calendar I will forget.” — Michael Novati

For the most part, the engineers I interviewed each used different tools to keep track of the tasks they were working on. This combined systems such as paper, tasks, email, calendar, lists, high-level goals, etc. But, many of the engineers had a “hierarchy” for determining what task should be done next as well as triaging systems for organizing the tasks and emails that were heading their way.

**FAIL FAST, ITERATE**

> “I try to turn around code fast when possible even if I’m not sure it’s optimal (to get comments) and prefer failing fast trying ideas over thinking through 100%” — Ari Chivukula

> “I’m not intimidated by code and I can get in the zone easily and crush through stuff” — Michael Novati

One thing that will probably hold back a lot of engineers (myself included) is fear of failure. Trying to create the perfect product off the bat can be intimidating and cause us to overthink problems. Getting into a habit of jumping into code without knowing exactly how it will turn out can allow us to iterate much faster and see results.

**WORK/LIFE BALANCE**

> “It helps to have a <significant other> who spends more time at work than you do. smile emoticon otherwise, I do sprints where I work really hard and then take it easy. sometimes like 2 months hard and 1 month easy. that’s more effective IMO than 3 months at the same pace (but doesn’t work for everyone) b/c work is non-linear” — 

> “the “thinking about a problem in the shower” trope has some truth to it” — Adam Ernst

Let’s face it, these engineers work really hard. They spend large amounts of time working to get their vast amounts of code out. Though I didn’t ask a specific question about work-life balance, bits and pieces of their work life slipped through, and, though many of the engineers seemed to be wholly focused on work, I was equally surprised by the engineers who drew strict work/life lines and were able to keep up a similar pace to the “all in” engineers. A big takeaway I found was that you can be one of the most productive _and_ have a good work/life balance if you’re willing to optimize your workflow.

### PARTING THOUGHTS

> “Treat other people the way you want to be treated doesn’t get you far past kindergarten. You need to be the kind of engineer other people want to work with, and most of that is learned through feedback. Ask early and often, people who feel heard are people who feel valued” — Ari Chivukula

After going through these interviews, I’ve seen my development process evolve bit by bit (Teammates have to try really hard to get my attention now that I have noise canceling headphones). Splitting diffs, requesting reviews, and TODO lists existed in my development process before, but now I am more robust in how I go about using these tools. I can honestly say I am a way more efficient engineer after implementing these practices.

I’d like to give a huge thanks to all the Facebook engineers I interviewed, Michael, Adam, Ari, Bob, and all the others who wished to remain anonymous. And I’d like to give a huge thanks to Kent for pushing me to write this article, and to Aimee and Andrew for helping me edit it.

### INDEX

1.  **Diff:** When a Facebook engineer talks about a _diff_ they are referring to a differential revision created using the open-source tool [phabricator](http://phabricator.org/). These revisions are code changes that have been put into phabricator for other engineers to review. Engineers can comment, request changes, and accept the code change before it is shipped into production and starts affecting real users. This is done as a validation step for every piece of code written at Facebook (and many other companies) and guarantees constant collaboration and feedback between engineers.
2.  **Stacked Diffs:** Stacking diffs is a level above regular diff creation. When you stack diffs you are creating a logical dependency between your diffs where the diff at the top of the stack is building on top of the functionality of all the diffs below it. This allows engineers to build out features in small, simple changes that can be viewed as incremental progress to a larger goal.

_First seen in my_ [_Facebook note_](https://www.facebook.com/notes/will-hughes/how-to-level-up-as-a-developer/10153879894028632)








