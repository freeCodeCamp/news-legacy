---
author: Bertil Muth
authorTwitter: https://twitter.com/BertilMuth
authorFacebook: none
title: "Why Agile sucks at your company — and what you can do about it."
subTitle: "Agile development has some serious issues in our industry. Especially in large corporations. I will describe a typical situation first, t..."
coverSrc: https://cdn-images-1.medium.com/max/1600/0*gRNnUZOrWC4fXTO0.jpg
url: https://medium.freecodecamp.org/why-agile-sucks-at-your-company-and-what-you-can-do-about-it-f4bebcc661c3
id: why-agile-sucks-at-your-company-and-what-you-can-do-about-it-f4bebcc661c3
date: 2017-09-28T20:53:35.704Z
tags: [
  "Tech",
  "Programming",
  "Agile",
  "Web Development",
  "Startup"
]
---
# Why Agile sucks at your company — and what you can do about it.



![](https://cdn-images-1.medium.com/max/1600/0*gRNnUZOrWC4fXTO0.jpg)

Source: https://commons.wikimedia.org/wiki/File:MiniHouseOfCards.jpg



Agile development has some serious issues in our industry. Especially in large corporations. I will describe a typical situation first, then analyze it, and suggest improvements.

#### Why Agile typically sucks

Some people in management have an idea for a project. It takes them several months to fix the scope. Based on the scope, the budget for the project is approved. The managers’ bonuses are tied to the scope.

For the managers, Agile equals Scrum. A former project manager takes the role of Product Owner. A developer becomes Scrum Master, part time.

The project starts.

The Product Owner talks to stakeholders in the company. Everybody’s got an opinion. It is hard for the Product Owner to find consensus. And he fears the consequences of disappointing the stakeholders.

He tries to give everybody what they request. On top of the original scope. That’s what higher management expects.

The developers need to meet the unrealistic deadlines of the Product Owner. So they decide to sacrifice quality and accumulate technical debt. As a result, the software they deliver is often buggy.

The Product Owner thinks that the developers can’t deliver proper software in time. So he turns the Daily Scrum into a status reporting meeting. He puts external architects in the team that prescribe the software architecture.

The Product Owner is happy there is a separate QA team. It tests the software after the Scrum team hands it over. It takes several weeks for QA and the manual acceptance tests by business to finish. Then, the release process starts.

Time to market does not get better. The CEO isn’t happy. Over time, everybody starts to think Agile sucks. More and more projects are rolled back to a phase-gate process.

#### It’s a stereotype

The story above is a stereotype. I am a consultant. I have worked in many companies, and in many roles — including Scrum Master and Agile Coach. I have experienced all of the above things. But rarely all in one company.

Maybe you are lucky and work for a company that delivers working software frequently. And devs, stakeholders, and customers are happy. That’s great.

Maybe you are not so lucky. You have experienced some of the things I write about. You feel that they suck. And maybe you wonder what you can do about them.

#### What’s wrong with the situation — a first glance

In Scrum, you don’t fix the scope before development starts. You can’t have both: perfect predictability, and unlimited responsiveness to change.

The investment the company needs to make is clear. It’s the cost of the sprint, per sprint (e.g. per two weeks). The cost of the sprint is the wages of the people working on the product. That cost stays roughly the same, plus some extra costs for hardware and other things.

You don’t need a budget.

Instead, management decides when to do an official release. You can cut the scope when you reach the release date, or you can postpone the release, making further investments necessary.

It is the job of the Product Owner to always request the most valuable feature next. A Product Owner does not need to reach consensus with the stakeholders. He needs to say no to feature requests that provide little value for the customer and the company.

For that to work, the company must empower the Product Owner. He must have the authority to decide what is part of the product, and what not.

Former project managers are often not good candiates for the Product Owner role. Being a Product Owner requires a different style of leadership.

A good Product Owner says what he wants to achieve and why. But not how. He does not assign tasks to anybody. He does not set arbitrary deadlines to incentivize developers to get things done.

It is up to the developers to create the software. And it is the job of developers to forecast when they will finish a feature. To forecast properly, developers need to get good at reliable delivery.

Instead of a QA department, you need automated regression tests. Without them, testing the whole application each sprint is not workable. Not with reliable results. If you don’t have regression tests, quality will go down. Each new feature may break old code.

If you have integration problems, start doing [continuous integration](https://martinfowler.com/articles/continuousIntegration.html). Every developer commits their code into the mainline at least once a day.

If you use a CI system, it can trigger automated tests and you will know if integration works right away. There will be no bad surprises before release. With [continuous delivery](https://martinfowler.com/bliki/ContinuousDelivery.html), you can even automate your release process.

If everybody behaves that way, nobody gets overwhelmed. You can keep a steady pace. And you will work in an agile way.

#### What YOU can do

You read articles on freeCodeCamp, so chances are you’re a developer.

Can you get better at delivering software? Probably. If you want to. If you invest time and energy.

Can you dissolve the QA team, and include the testers in your team? Can you empower the product owner? Maybe you know somebody who can. Maybe you know somebody who knows somebody who can. You can talk with these people. That’s about it.

Key decision makers should understand the values and principles of the [Agile Manifesto](http://agilemanifesto.org). They should act on them because they agree with them. From the heart.

If that’s not the case, expect conflict. There will be tension between the “old” way of working and the “new,” agile way of doing stuff.

And maybe you ask yourself: Can Agile really work in my company?

Right?

I think that’s the wrong question.

#### On becoming more agile

I’ve heard it many times:

“All that Agile stuff is fine in theory, but it doesn’t work at our company.”

I understand the frustration. But that statement is based on the flawed assumption that being agile is binary: You either are agile or you aren’t.

The Agile Manifesto includes this [principle](http://agilemanifesto.org/principles.html):

> “Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.”

So a couple of weeks, at least, huh? There are already companies that deliver in the order of minutes, or even seconds.

They have achieved something the Manifesto authors did not think about in 2001\. They have become **more agile** than expected.

So it is not about “doing agile,” or even “being agile.” It’s about becoming **more agile**.

The Agile Manifesto includes this [principle](http://agilemanifesto.org/principles.html) as well:

> “At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.”

There is always some room to become more effective. No matter what your company’s like. Even if your company follows a phase-gate process.

Companies reflect and adjust their behavior. Sometimes they don’t follow a guide or blueprint to the letter. Let’s look at some examples of what I observed in practice.

### Becoming more agile

#### Making it work

A few years ago, I believed that agile teams needed to be co-located. Then I met a company that out-sourced some of its development. Part of the Scrum team was in Germany, part of it in India.

It worked well. The team delivered working software every two-week sprint. How was that possible?

The team held each Daily Scrum meeting as a video conference at a time that was acceptable for all team members.

One team member in Germany could talk with the developers in India in their native language. After a while, they slightly increased documentation to further reduce misunderstanding.

They visited each other, sometimes in Germany, sometimes in India. They attended training courses in cross-cultural communication.

They made it work.

#### Communication is key

A Scrum team had to cooperate with a separate QA team. Members of the QA team attended every Scrum meeting. It was as if they all were part of a larger, extended team.

The cooperation between the teams worked well. The developers informed QA as soon as parts of a feature were ready to be tested. QA informed the developers as soon as they found a bug.

And QA could help with their expertise in [exploratory testing](https://en.m.wikipedia.org/wiki/Exploratory_testing). Test automation can’t replace those tests.

#### What works for you may not work for me

Many teams I visited had no empowered Product Owner. Often, a “Shadow Product Owner” pulled the strings in the background.

The Product Owner on the team was more of a “Proxy Product Owner.” He worked with the Scrum team, but had no authority to make the final decision about priorities.

I don’t like that at all. But I have seen it work well several times when the Product Owners collaborated closely.

#### Conclusion

You can try to get better at delivery. You can try to cooperate better — in the team, between the departments, and with management.

Maybe you won’t succeed. Probably you won’t turn the ship around.

Still, you can make life better, for you and your co-workers. If you want to climb up a mountain, you need many small steps.

And with every change for the better, new options may emerge.

Did you enjoy this article? If so, give me some claps — I’d appreciate it!








