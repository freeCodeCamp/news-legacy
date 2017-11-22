---
author: Joe Previte
authorTwitter: https://twitter.com/jjprevite
authorFacebook: https://facebook.com/10204357512172190
title: "I made my first open source contribution within 200 days (and how you can too)"
subTitle: "On December 22nd, 2016, I created a freeCodeCamp account. On July 1st, 2017, I got my first-ever pull request merged into an open-source ..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*w9oin5BRCHMbv0nfqdkuow.jpeg
url: https://medium.freecodecamp.org/i-made-my-first-open-source-contribution-within-200-days-and-how-you-can-too-4d5bdbd63fad
id: i-made-my-first-open-source-contribution-within-200-days-and-how-you-can-too-4d5bdbd63fad
date: 2017-08-04T20:03:51.731Z
tags: [
  "Programming",
  "Self Improvement",
  "Technology",
  "Web Development",
  "Open Source"
]
---
# I made my first open source contribution within 200 days (and how you can too)







![](https://cdn-images-1.medium.com/max/2000/1*w9oin5BRCHMbv0nfqdkuow.jpeg)







On December 22nd, 2016, I created a freeCodeCamp account. On July 1st, 2017, I got my first-ever pull request merged into an open-source project.

I wanted to write this article to share my experience with others. I hope it will show you that contributing to open-source projects is easier than you think.

### Why should you contribute to open source?

You’ve probably heard that contributing to is a good use of your time as a developer. But in case you aren’t yet convinced, here are two reasons to consider:

#### Reason #1: It will help you get a job

This is one of the main reasons I decided to contribute to an open-source project. A few senior developers from my university alumni group told me it could help me appear more employable.

When you do a project on your own through freeCodeCamp, or for a course, you’re the only one that has to approve the code. With an open source project, hundreds of thousands of people may use the code you write. So there’s added pressure to write clean, reusable code.

Also, that community of developers has to accept it. So when they do accept your code, this carries a lot of weight, because of the number of eyes that have seen it.

I think it’s safe to say that open source contributions say a lot more to employers than most personal projects.

#### Reason #2: It’s giving back to the community

Contributing to open-source projects gives you an opportunity to volunteer your time to improve a project used by you and your community. This is probably one of the coolest aspects of programming.

Someone builds a project, and then they open-source it so the public can see the source code. Then a group of people who don’t know each other contribute the code. And it can improve the lives of people all around the world. Not much else in our world compares to that.

### What was the process like when contributing to open source?

You’re probably wondering how I went about it. First, I checked the apps and websites I used on a regular basis to see if any were open-source.

Next, I asked a few of my close coding friends (whom I met in my first [Chingu cohort](https://tropicalchancer.github.io/projectus/) ;)) and we all agreed to take on the challenge together.

We decided on [Habitica](https://habitica.com/), a gamified task manager.

We chose it for the following reasons:

*   We use it every day
*   Their [wiki for contributing](http://habitica.wikia.com/wiki/Guidance_for_Blacksmiths) is well-written
*   They encourage newbies to contribute
*   Their code base consists mainly of Javascript
*   They have a group where you can ask questions and get help when you get stuck

Next, we discussed what we thought was the best way to go about this.

Here’s the step-by-step action plan we used:

#### Step #1: Find a “mentor” — someone in the community who could help us if we got lost

Lucky for us, Habitica has an awesome guild for coders called “Aspiring Blacksmiths (Coding for Habitica).” We posted in the group, and one member agreed to provide us with some guidance.

#### Step #2: Find an issue appropriate for our skill level

Next, we looked at the issues on the [Habitica Github repo](https://github.com/HabitRPG/habitica/issues) and found those labeled “medium-level coding.” We picked four options, and then asked our mentor which would best suit us for the first contribution. After discussing them among our group, we decided on [this one](https://github.com/HabitRPG/habitica/issues/8677#event-1146999223).







![](https://cdn-images-1.medium.com/max/2000/1*kaS5uuRxFm6wGBJd-5Kq8Q.png)







#### Step #3: Work on it alone, but also through pair-programming sessions

The issue took two weeks, or around 14–18 hours to fix. We usually worked on it anywhere from 1–4 hours a day. We spent the majority of that time figuring out which files we needed to change.

We spent hours looking through the project folder. We searched different terms like “group” and “group approvals” until we were able to locate the lines of code we needed to fix.

After we found the files, we faced a new challenge. We had to figure out how to take data from the database and be able to call it in the JSON file to be displayed on the “Group Plans Task Approval” page.

We looked at the objects in the database and found a task type key-value pair with the information we needed. Then we had to add it to an object as a property on an object in a file called `groupApprovalsController.js`. This way we could reference it in the JSON file. We were able to figure all this out thanks to our experience with JavaScript on [freeCodeCamp](https://www.freecodecamp.org), Colt Steele’s [Web Developer Bootcamp course](https://www.udemy.com/the-web-developer-bootcamp/), and reading [You Don’t Know JS](https://github.com/getify/You-Dont-Know-JS).

The next challenge we faced was being able to render markdown and emoji. The project uses an npm package developed by one of the main project programmers, so the docs were easy to follow. We looked at the similar Jade pages and recognized patterns in how the markdown was rendered.

Once we knew the syntax for markdown and the page we had to add it to. We thought the rest would be easy. But it wasn’t. We struggled to figure out how to pass in the specific text we needed.

After hours of frustration and many unsuccessful attempts, we finally figured it out. We had to pass an argument of “approval” into a function called `approvalTitle` and set the text equal to that. The line we ended up writing was:

<pre name="b758" id="b758" class="graf graf--pre graf-after--p">markdown(text = “approvalTitle(approval)”)</pre>

Of course we thought we were done… until we noticed that the new code shifted the location of the “Approve” button on the page.







![](https://cdn-images-1.medium.com/max/2000/1*JdLbRpewK1Elr48wA1MCNA.png)







One solution opened up a new problem, but we accepted the new challenge and persevered. After digging around, Rachel was able to find a Bootstrap fix that made it look a little better.







![](https://cdn-images-1.medium.com/max/2000/1*wlUD2cs3grrAGNmmAyzY_Q.png)







#### Step #4: Submit a Pull Request (PR) to solicit feedback

Our fix wasn’t perfect, but it solved most of the issues and had only a few, minor formatting issues. We asked for help in the Aspiring Blacksmiths’ Guild. They advised us to submit a pull request to receive feedback. We submitted one with our changes. Soon after, another developer made a few suggestions about how to fix the formatting issue.

#### Step #5: Clean up the code and submit a final PR

After cleaning up the commits and organizing them in meaningful ways, we submitted a final PR.

#### Step #6: Celebrate after it’s merged

On Saturday, July 1st, 2017, our PR was merged and we celebrated.



![](https://cdn-images-1.medium.com/max/1600/1*4h__gQAi8QBRNtPLfdxRzQ.png)



### What did I learn?

These are the main things I learned from my first open-source contribution:

*   How to work on code written by other people
*   How to work with another developer to fix a bug
*   How to submit a pull request
*   How to write meaningful commit messages
*   How to contribute to an open-source project

I am grateful for all the encouragement we received from the Habitica community. And I’m glad I was able to work on this with my friend Rachel. Thanks to this experience, I’ve grown as a developer.

### Final Thoughts

If you’re new to programming like I am, I would suggest looking into contributing to an open-source project. It may seem scary at first and parts of it definitely were. That means you’re heading in the right direction.

You’re stepping out of your comfort zone and into uncharted territory. **This is where the real learning happens.** This is where you’ll be challenged in ways you couldn’t have imagined.

If you’ve contributed to an open-source project that you think would be good for newbies, please comment with the names! :)

Thanks for reading! I hope you found this article helpful. If so, let me know by clicking the 💚 or leaving a comment below.








