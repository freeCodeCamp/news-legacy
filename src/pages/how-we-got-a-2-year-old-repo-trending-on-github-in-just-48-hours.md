---
author: Abhinav Suri
authorTwitter: https://twitter.com/abhisuri97
authorFacebook: https://facebook.com/560187284137663
title: "How we got our 2-year-old repo trending on GitHub in just 48 hours"
subTitle: "Github has made it easy for millions of developers to publicize their projects so they can attract users and collaborators. But these dev..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*D2NgKZ1T7LYXrFPAXnorTg.jpeg
url: https://medium.freecodecamp.org/how-we-got-a-2-year-old-repo-trending-on-github-in-just-48-hours-12151039d78b
id: how-we-got-a-2-year-old-repo-trending-on-github-in-just-48-hours-12151039d78b
date: 2017-01-27T20:24:00.821Z
tags: [
	"Open Source",
	"Python",
	"Startup",
	"Web Development",
	"Tech"
]
---
# How we got our 2-year-old repo trending on GitHub in just 48 hours











![](https://cdn-images-1.medium.com/max/2000/1*D2NgKZ1T7LYXrFPAXnorTg.jpeg)












Github has made it easy for millions of developers to publicize their projects so they can attract users and collaborators. But these developers often find themselves spending _hundreds of hours_ building a project, only to push it to GitHub and earn a mere one or two stars.

I found myself in this situation while building a project for the nonprofit I work at, [Hack4Impact](http://hack4impact.org). It’s a student group that makes [technical projects](http://hack4impact.org/projects) for community organizations.

Together, we’ve built **flask-base**,which serves as boilerplate code for all of our products. It contains some basic staples of a flask web app: SQLAlchemy, a Redis Queue, and User Authentication (among a few other features).

You can check out our repo [here](http://github.com/hack4impact/flask-base).







![](https://cdn-images-1.medium.com/max/1600/1*AmBpbInStBZWkuT08qeEbw.gif)






A demo of the admin backend on flask-base



The big advantage of flask-base is that its “plug and play.” You don’t need to do much setup to get a runnable version on your machine (and it is very easy to get it running on hosting services such as Heroku). Plus, it’s fairly barebones compared to a lot of other boilerplate applications out there, so there is a lot of room for customizability.

Flask-base has been in development for two years, and it has helped us form the boilerplate for about 90% of the technical projects we take on. This project made it possible to create products for organizations like [Kiva](http://hack4impact.org/projects/kiva), [OSET](http://hack4impact.org/projects/oset), [Juvenile Law Center](http://hack4impact.org/projects/m4a-jlc-sp2), and [Givology](http://hack4impact.org/projects/givology).

Flask-base has enabled us to help community organizations across the United States achieve the social impact they strive for. But despite our efforts to publicize our code on various outlets, flask-base remained unknown to all but a handful of people who were working on it.



![](https://cdn-images-1.medium.com/max/1600/1*VjQ2ROp23yGAPYM8AwQ4Mg.png)

The old days



Our failed efforts led us to frustration because we felt like other developers and small organizations could use flask-base for similarly impactful projects. But we just couldn’t quite figure out how to get the product out there. As a result, we started questioning the fairness of an open source medium **that was supposed to bubble up great ideas to the top**.












How open sourcing a project feels. ([source](http://gifrific.com/wp-content/uploads/2012/04/gob-letter-throw.gif))



But then we discovered what was wrong with our approach. We took a hard look at how open source works from the perspective of the _user_. We noticed key areas to fix and improved our project so we could poise it for use in the real world.

**Then, we got our moment.** I posted our project to the [/r/Python](http://reddit.com/r/python) subreddit, and it got a little traction. We decided to run with it. Within the span of 48 hours, our repository went from 9 stars to over 200\. And it kept growing.

Suddenly, we were getting comments and suggestions from people who were interested in the project. _It was incredible._












the old days += 544 stars, 74 forks, and 16 watches



This article is about how we got flask-base to where it is today. If you have an impactful project to share, you can implement our suggestions, (hopefully) get noticed in the open source universe, and make the most out of it.

### It starts with research

We began to look at examples of success. The popular repositories on GitHub tend to have a few features in common:

*   A README with pictures/gifs of the product in action
*   Documentation
*   Static Code Analysis
*   Contributing instructions
*   A well-defined setup section
*   _A logo (completely optional)_
















Breakdown of the first few lines of a README







Some great examples of great Github repos to look at:

*   [React-Router](https://github.com/ReactTraining/react-router): 19k+ stars, 4.5k+ forks. Besides being useful for managing single page web apps, React Router is one of the few repositories out there with a dedicated tutorial on how to use the framework. It also has a comprehensive set up guide along with references to errors users may experience.
*   [Webpack](https://github.com/webpack/webpack): 23.5k+ stars, 2.7k+ forks. Webpack is arguably one of the best tools for modern front-end web development because of its reliability and ability to cover building for many different browser versions. The README certainly attests to this with dozens of badges and example use cases along with links to documentation. Webpack also emphasizes the role of the community in maintaining the project (specifically by having dedicated Sponsor and Backer sections)

Well how about a bad example of a Github repo:

*   [abhisuri97/leARn](https://github.com/abhisuri97/leARn): Yes… I am calling out one of my own repos as a bad example. This repo was for a hackathon project I made that won PennApps XIII VR/AR and got Top 10\. This was my one and only time developing with Unity, hence the large amount of files that are extraneous and do not need to be committed. While there is great explanation of what the project does, it doesn’t explain how to get it working on someone’s system or what are the features.

After looking through several dozen repositories and monitoring top-trending for a few days, we picked up on a crucial idea that all the popular repositories addressed: **If I am a developer looking at your repo, give me a reason to use your project and make it as simple as possible to get set up.**

### The A.G.D. (Attention Grabbing Device)












[Image source](https://media.licdn.com/mpr/mpr/p/5/005/08b/07a/348caff.jpg)



#### Oratory and README:

Back when I did speech competitions in high school, I participated in an event called Original Oratory. It was a 10-minute speech that you wrote and performed in front of a judge. Every oratory I gave started with a 2-minute long _A.G.D._ (attention grabbing device). Usually, it was a story followed by a thesis for the speech, and a preview of the points I was going to address.

Well…**READMEs are the A.G.D. of your project!**

READMEs are the first thing your visitor will see when looking at your repository. So you should make sure your README contains essential information about your project.

But what’s crucial? How do you grab the attention of your visitor?

When someone is looking at your project, they want to know:

*   what is it
*   how good the code is
*   how much support is available
*   what’s included
*   what does it look like
*   and how they should go about setting it up.

Let’s address each of these questions.

#### What is it?












A huge logo will quickly address what the repository is



This is a fairly simple question to answer for most repositories, but a lot of people do it wrong. Your project is one amongst millions. You have a small amount of time to make an impression.

**Describe your project in a tweet (around 140 characters).** It’s okay to leave out details. That’s what the features section is for. A logo also helps with this, because it will distinguish the name of your project from the plain black and white of the README text (and also shows you put effort into making a logo).

#### How good is the code?

This question is probably the one that a 90% of repositories fail to address. While the definition of “good” code is subjective, there are a few aspects people can agree on.

*   It is well tested
*   It passes style checks (ESLint etc.)
*   It can compile in its current state (and there are relatively no issues)
*   It passes some form of static analysis (through services such as Code Climate)












Code Climate’s dashboard gives you a GPA for code quality





![](https://cdn-images-1.medium.com/max/1600/1*JCuG0rgtsASpr-dTXtJRoA.png)

The Github badges on flask-base



No developer is going to look at your code line by line to see whether it’s good _before_ deciding to use your project. Hence the “badges” that appear on the first line of a project. The great thing about these badges is that they are ridiculously easy to set up, and give your project a lot of credibility without visitors having to look at your code at all.

#### How much support is available?

Support comes in two flavors: support for problems and support for learning how to use the project.

Support for problems can be solved through a FAQ. But for new projects, people don’t know what bugs may be lurking in the depths of old code (and hence may not have content for a FAQ). The only way to demonstrate this type of support is to address issues as they come up, and quickly resolve them.
















flask-base documentation generated with mkdocs. [View our docs](http://hack4impact.github.io/flask-base).







The second flavor of support can be addressed through documentation. This task is a huge pain point for developers, but it’s **critical** to the popularity of your project (and it should be done at some point regardless).

Docs are easy to create with [mkdocs](http://www.mkdocs.org/), and you can generate a gh-pages site from the mkdocs CLI, which you can then host for free on Github.

Good documentation will give your users examples of how to use the program and explain difficult components. It should also give a detailed guide of how to launch the project (if it is a web app).

#### What’s included?












X for Y



A features list should not be exhaustive, but should list features that are central to your application and are accessible (and demo-able). At maximum, this list should be 10 features long and be in the format “(Used) X for feature Y.”

#### What does it look like?












Demoing the admin page editing feature of flask-base



If a picture is worth a thousand words, then a .gif is worth a million. Show **how** your application is working — even if this means showing command line output. This piece of information gives the developer looking at your project an idea of a) how it is supposed to look, and b) whether it suits their needs.

**Never underestimate how much a good graphic will convince a developer to use your project.**

#### How do I set it up?
















Our setup instructions







While developing, chances are you’re working on the project on a single computer with everything installed. **But you must provide a way to get a user set up and running with your in 3–4 steps.** If this means creating a MakeFile, do it. Also be sure to mention any “global” tools you used, like _babel-cli_ and _babel-core._

As a general rule of thumb, if you had to install it, chances are someone else will have to do this as well. Also be sure to compress all your scripts into install into a single file (for python this would be _requirements.txt_ and for node/javascript it would be _package.json_). In short, someone should be able to get your project running in less than 5 minutes.

### Getting to Trending:

So a great Attention Grabbing Device (aka README) will help you retain your visitors. But how do you drive visitors to your project in the first place?

There are 3 main outlets that you can use:










































Hacker News, Product Hunt, Reddit (pictures sourced from their respective press kits)







**Hacker News/Product Hunt:** Both provide great ways to expose the project to an engaged community of developers (and you can pick up media coverage). But the problem is that getting your post to the top of either requires a significant amount of planning and some users willing to help promote your post from the beginning.

**Reddit:** By far the best way to get a repository off the ground with some stars. **But you need to find the right community**. For flask-base, that community was [/r/Python](http://reddit.com/r/python), where we got to the top post of the day without much effort.

The key is to get to a community that will care about your project (and will use it). But you should be wary of posting in very generic subreddits such as /r/Programming where there are tons of competing posts that will drown out your own post.












[Veronica Wharton](https://medium.com/@veronicawharton) and I teaching a Flask workshop at PennApps XV



**Workshops:** This is also a “secret”, but workshops are an excellent way to get your initial dozen or so stars on your repository. Give a workshop on how you created your project, what it does, and _most importantly_, show how to use it (with an example).

We did this at PennApps XV by teaching a workshop on how to make web applications with Flask. The turnout was around 40 people, and we showed flask-base as an example of a Flask app they could use during the hackathon. Five minutes after our workshop ended, we checked the repository and found that **it had gotten 17 stars and eight forks**. That feeling was amazing :)

### Monitoring Status
















Addressing comments on improvement. Be nice, justify your opinions, and welcome input from others.







Inevitably there will be someone who points out a bug/inconsistency after you launch. Just be sure to address those individuals, reply to all comments, and take into account all feedback. **Keeping engaged with your audience is key to making sure the audience is invested in your project.**

Once you get an initial growth of 30 to 40 stars in a short period (1–2 hours), then your project will have a decent chance of making it to trending. (Of course, I can’t speak to the specifics of how GitHub’s trending algorithm works)
















Flask-base top trending for Python repos on Github after 24 hours







### Some of our accomplishments

Flask-base reached the **top daily trending** for python repositories, **top 3 overall trending**, and **top of /r/Python** for the week.

Hack4Impact became the **4th most trending python developer** and **5th most trending overall developer**.

Additionally, we’ve had **80+ clones** and **40+ forks** to date.

As a computer science undergraduate, it’s amazing to see that people are using the code that I helped write.
















A thank you letter I received.














Our analytics on GitHub. Reddit was really helpful.







If you don’t reach your goal of getting trending, don’t worry. Just rinse and repeat. Sometimes you will get lucky and sometimes you won’t.

If you make an effort to create open source code that you think other people will find useful, you’ll be contributing to the open source world. You’ll be making the most of all that open source has to offer.

### Acknowledgements

A big thanks to [Alex Piatski](https://medium.com/@alexpiatski), [Veronica Wharton](https://medium.com/@veronicawharton), [Emmett Neyman](https://medium.com/@emmettneyman), Stephanie Shi, and [Ben Sandler](https://medium.com/@sandlerben) for giving input on this article. Thank you to the developers of flask-base ([Ben Sandler](https://medium.com/@sandlerben), [Yoni Nachmany](https://medium.com/@yoninachmany), [Max McCarthy](https://medium.com/@maxllmcc), [Veronica Wharton](https://medium.com/@veronicawharton), Alex Harelick, Nancy Wong, and [Annie Meng](https://medium.com/@anniezmeng)) for making this a great project.

Lastly, thank you to [Hack4Impact](https://medium.com/@hack4impact) for letting me be part of such a socially impactful community.

If you want to learn more about flask-base, [**visit the repo**](http://github.com/hack4impact/flask-base)**.**

If you want to check out some of the projects made with flask-base, [**visit Hack4impact’s** **projects page**](http://hack4impact.org/projects).

If you want to learn more about Hack4Impact (aka the organization that created flask-base), [**visit our website**](http://hack4impact.org).

If you want to learn more about me, visit my [**personal site**](http://abhinavsuri.com), my [**Github**](http://github.com/abhisuri97), or email me at [**suria@seas.upenn.edu**](mailto:suria@seas.upenn.edu).








