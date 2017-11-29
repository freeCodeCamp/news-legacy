---
author: Derwin
authorTwitter: https://twitter.com/derwindevera
authorFacebook: none
title: "Quality Assurance is broken. Here’s how we can make it as agile as everything else."
subTitle: "Process is the key to great software...."
coverSrc: https://cdn-images-1.medium.com/max/2000/0*13Pw6ew6bhXzg5wp.
url: https://medium.freecodecamp.org/quality-assurance-is-broken-heres-how-we-can-make-it-as-agile-as-everything-else-64bd19d5e426
id: quality-assurance-is-broken-heres-how-we-can-make-it-as-agile-as-everything-else-64bd19d5e426
date: 2016-11-22T18:24:58.645Z
tags: [
  "Software Development",
  "Testing",
  "Programming",
  "Tech",
  "Startup"
]
---
# Quality Assurance is broken. Here’s how we can make it as agile as everything else.







![](https://cdn-images-1.medium.com/max/2000/0*13Pw6ew6bhXzg5wp.)







Process is the key to great software.

In general, the industry has made leaps and bounds in software development processes. But testing processes still remain archaic.

Test engineers are forced to manually crunch through tests and bugs at the end of each development cycle.

The result? A ton of wasted time and energy throughout the entire process.

Agile development is dramatically different from waterfall, which is an older, more rigid software development methodology.

Our team practices agile. But as the leader of a team of test engineers, I’ve noticed that our QA process is much more similar to waterfall.

### The QA Waterfall

We start testing at the end of the development process. This leaves test engineers cramped and short on time. You could say that QA testing in agile is a compressed version of waterfall.

While there’s less testing per session in agile than in waterfall, the process could be a lot more effective. For starters, when testing is lumped in at the end, it’s often very urgent and time sensitive. This forces test engineers to optimize for speed, which generally means testing products manually.

Obviously, manual testing works. But there are so many aspects of these tests that could be automated if test engineers had more time to write scripts that test software.

The time cost of manual testing adds up in subsequent weeks, as QA manually tests new builds of the same software. Instead, they could’ve built automated scripts to test more of the software, which would take it off test engineers’ plate and provide faster feedback for software engineers.

At Flipp, we’ve tried testing software the manual, old fashioned, way. But we ran into our own discomforts and challenges.

For example, any delay in the system or releasing the feature would impact the QA team the week after. These types of delays would compound, to the point where the software engineering team would be extremely far ahead of QA, and QA would be desperately trying to catch up.

One common solution to the problem of the development team getting too far ahead of the testing team is to throw a bug bash. This way, the development team can all test bugs to help the QA team catch up before the end of the sprint.

We implemented an even simpler solution: **dev teams include test engineers from the beginning.**

This way test engineers can identify scenarios and write scripts to test with which to test the dev team’s new code. As developers build the actual software, test engineers can build the scripts to test this software with, which can be used over and over again each week. Most importantly, it collectively saves a ton of time, attention, and energy in subsequent testing.

At Flipp, our QA team asks a lot of precision questions and design testability aspects early on, so that we don’t have to go through the cycle of QA to find out there’s bugs in the system. We question it right from the start. Some standard examples of our precision questions:

*   “How much load are we expecting?”
*   “What type of analytic beacons are we relying on so we can measure success for the project?”
*   “How are we going to make it testable so we can easily deploy?”

Here are the benefits we’d noticed as we implemented this solution, and why we think every company needs to rethink how they test for quality.

### **_Faster feedback than agile_**



![](https://cdn-images-1.medium.com/max/1600/0*NHF0tWq0JE0Fv-hB.)



In general, sprint cycle duration varies from project to project. But for example, let’s say each sprint consists of five days.

In the first three days, software engineers will go through ticketing system — building features and completing tickets. Once they’re done, they then pass their build off to QA. QA’s test engineers have the final couple of days to examine these tickets.

This would be a typical sprint cycle in both agile and waterfall: Plan, develop, code, and test.

I mentioned this earlier, but I really want to hammer the point home:

Instead of leaving testing at the end, we should implement testing right from the beginning (during the “plan” phase) and start asking questions. As test engineers, we would need to figure out how to test, and what systems we need to build, so we can test it right from the start.

Traditionally, software engineers would send a build to test engineers, who would then manually conduct a test, and send it back to the software engineers if there were any issues or bugs with the code. There would be a 1–2 day lag as QA might be working on previous tickets. Software engineers would have to wait until that ticket is complete. So, if QA testing is done manually:

1.  Test engineers set up time to do tests
2.  Software engineers lose time and energy to context switching between different tickets
3.  Test engineers spend time to do tests

Pretty clunky, right? Let’s look at how an automated test might work:

A test engineer builds a script where each time someone makes a change and deploys it to the servers, the test ensures that there would be no 500 errors or JavaScript errors. If the test finds any of those errors, the build failed this test, and software engineers will be notified in minutes. Nobody has to wait 2–3 days, it happens automatically. This extremely fast feedback allows the software team to move a lot faster.



![](https://cdn-images-1.medium.com/max/1600/0*0e3k9odY4WZOQT3U.)



The fast feedback compounds into significant savings, particularly for simple and obvious errors. It also minimizes context switching, an overlooked cost.

Consider the software engineers’ mind when they have to return to the build a test engineer just sent back. “What was that feature again? What was that bug? How do I fix it?”

Here, within five minutes, they would know that the phase of testing is complete, and whether it requires more work.

Naturally, as the software becomes more complex, so do the tests.

### **_Minimal emergencies_**

Because QA considers situations from the beginning of the software development process — and doesn’t wait till the end to manually test scenarios and situations — they will have more time to predict emergencies or consider a wider range of circumstances.

It’s as close to zero emergencies as a software and test engineers will get. Obviously, unanticipated errors still come up. But now, the team has a better idea of how to gather and understand the data, and a bug’s impact on users.

For example, let’s say users are reporting an error with the discount slider in the Flipp app. The test engineer will have considered the analytic beacons necessary to quickly check on the reach and significance of the bug. Because of these measures, they might look at the data and notify the team, “This is only impacting 1% of our users.” They can determine that what appeared to be an emergency isn’t really.

A standard QA team is inflexible and won’t allow any bugs to go through. Here there’s tolerance to allow smaller bugs to go through — in order for test engineers to focus on higher priority, wider reaching, bugs. They can more accurately assess the risk of bugs and what’s going through. If impact is minimal, then the test engineers can flag it and have software engineers fix it in the next sprint.

### **_Reinventing your software team’s culture_**

Ultimately, incorporating test engineers into the software development process is one symptom of a greater culture shift. Test engineers’ perspectives will now be considered earlier in the process.

On the test engineering side, test engineers need to be more curious to see how they can make the system better and improve its quality.

The shift would be in everyone — product owners, scrum masters, testing engineers, and software engineers — accepting these questions earlier on and considering them.

This will unify the team and create a better understanding of what feature success looks like.

Typically, engineering leads and product owners take _x_ amount of days to bring something to completion. But their definition of “done” is different from QA’s. Their definition of “done” is sending software over to QA. In contrast, QA’s definition of “done” is when software is releasable to users.

### A blow-by-blow of how we do QA at Flipp

In closing, I’m going to give you a specific example of how this might look when your software team builds and tests a feature. Let’s walk through the various stages of a two week sprint, and what the test engineer’s role, aims, and priorities should be in each of them.

Note that at Flipp, we call our test engineers, “software engineers in test.” For clarity, we referred to them as test engineers in this piece, but this shift in wording in our organization reflects how embedded QA truly is into the software engineering team.

#### Stage 1: Concept

This stage takes place on day one, when the feature is still little more than an idea. The team doesn’t have much clarity on the feature (around 10%). They know about it, but don’t know exactly how it’ll be built.

The test engineer’s most important job in this stage is to thoroughly understand, and potentially help define, what success means to the product owner. Some companies call these definitions the “acceptance criteria.”

In any case, I prefer using the guiding question: “What is winning?”

Figuring out the answer — and corresponding key metrics — will be the whole team’s main focus of the concept stage.

#### Stage 2: Mocks and designs

This stage also happens early in the sprint (usually on day one), when the feature has been defined a bit more clearly (around 30%). The test engineer’s understanding of the feature will change how they test it, and understanding the desired user behavior will inform the testing flow.

The product owner might define winning as having the user take a certain action. If that’s the case, the test engineer must help determine how to take the user there. As the team starts preparing mockups, some flows or concepts might not make sense. It’s the test engineer’s and team’s job to call out mockups that does not follow user flow or doesn’t lead to winning.

The test engineer doesn’t necessarily act in a quality assurance capacity here, but still contributes as a team member. They must help identify different user profiles and different ways the app will be used (i.e., personas). The most important thing for the test engineer in this phase is still one of understanding: to grasp the feature as a whole rather than individual ticket elements.

#### Stage 3: Tickets

Software tickets make up the bulk of the sprint. It could potentially take place from day 1–10\. The tickets make the feature much clearer (at around 60%).

As software engineers work on the feature and resolve tickets, test engineers build small tests to ensure the feature will be built properly. Tickets make the feature more concrete. As the feature becomes more certain, the testing methods become clearer. The test engineer should also build pipelines to enable faster feedback.

That’s a lot of information, so I recommend that the test engineer start off by literally building one test that would be running after every commit or any change. I’d recommend building the happy path scenario first, then moving into the more detailed tests.

When the test engineer tackles these other more detailed tests, they should also identify other paths: What happens if the user rotates the screen? What happens if they cancel? What happens if they have a strange feature combination? What about the potential critical failures of the feature (e.g., making sure the page loads and avoiding the dreaded 500 error, or ensuring the action on the web page gets recorded accurately in the database).

Some of these other paths will be frequent, others will be less common. The test engineer should prioritize the ones they should be testing. I recommend evaluating based on these two criteria:

What is the impact on revenue or key business metrics? The test engineer should make it easy for people to get where they want to go. For example, in Flipp, we want to make it as easy as possible for the users to get to their desired flyer. Any obstacle takes away from quality.

Does it affect retention? The test engineer must ensure the app doesn’t crash, or users don’t exit for any unplanned reason. They should also consider ways of bringing users back in, or encouraging them to re-open the app.

The most important thing for test engineers is for them to prioritize what is being found, based on their definition of winning. They must also identify risks throughout the feature based on the usage, impact, and probability of that scenario occurring. How many people will the ticket influence? How deep is the problem? If the app does fail, will it be difficult to recover?

#### Stage 4: Quality assurance and testing

Quality assurance and testing takes place from days 5–10 (all the way up to release). The feature should be be 90–100% clear at this point.

As tickets become resolved, test engineers should look at their strategy, which they developed in the previous stages, and start executing on their plan. They will work with software engineers to build more clarity or to resolve bugs.

The most important thing here is for test engineers to ensure the features that are related to winning are clear. Nice-to-haves or should do’s aren’t going to be fixed unless there’s extra time.

#### Stage 5: Release/deployment

Release takes place on the final day (hypothetical Day 10). The test engineer’s job must ensure the release is smooth. Prior to release, they should test the feature on a replica of production system. We have a specific post-release checklist we use to keep things consistent. I won’t bore you with the details.

As the feature launches, test engineers should keep a close eye on the data to see if it’s in a healthy state, and look at crash logs. We’re humans, so we all miss things sometime even after testing. There might be events even the most careful testing engineers don’t anticipate.

Smarter quality assurance starts with considering testing at the beginning of the software development process. It means bringing test engineers in with software engineers at the beginning of the test cycle, and considering scenarios and possibilities from the get go. It’ll make the development process smarter and, most importantly, lead to better software.

_I’m Derwin, the director of test engineering at_ [_Flipp_](https://flipp.com/)_. I published a partial version of this at_ [_the Flipp blog_](http://eng.flipp.com/)_. If you’re interested in reinventing the way people buy things, check out our current_ [_job postings_](https://corp.flipp.com/jobs)_._








