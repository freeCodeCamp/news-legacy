---
author: Vivian Cromwell
authorTwitter: https://twitter.com/viviancromwell
authorFacebook: none
title: "Between the Wires: An interview with data scientist Karissa McKelvey"
subTitle: "I interviewed Karissa McKelvey, who is the Director of Engineering at Dat Project, a distributed data sharing tool that packages your dat..."
coverSrc: https://cdn-images-1.medium.com/max/1600/0*WuWI9sddH7sTIL9B.jpeg
url: https://medium.freecodecamp.org/karissa-mckelvey-864084c27cbb
id: karissa-mckelvey-864084c27cbb
date: 2017-08-25T19:34:29.000Z
tags: [
  "Tech",
  "Data Science",
  "Data Visualization",
  "Women In Tech",
  "JavaScript"
]
---
# Between the Wires: An interview with data scientist Karissa McKelvey



![](https://cdn-images-1.medium.com/max/1600/0*WuWI9sddH7sTIL9B.jpeg)



I interviewed [Karissa McKelvey](https://twitter.com/okdistribute), who is the Director of Engineering at [Dat Project](https://datproject.org/), a distributed data sharing tool that packages your data and shares it over a distributed network.

#### **How did you get into programming?**

I went to a public school. Like most 13-year-olds, I just wanted to pass my tests. At some point, I started programming on the TI-83 calculator. I would give it to my friends in exchange for extra lunch or Magic cards. That’s how I started getting into programming. After that, I started making websites in high school for video games I was playing .

I didn’t really think of it as programming then because all I was doing was just fixing the problems I needed to solve. I didn’t really choose Computer Science when I decided to go to college. I actually chose Political Science because I was really interested in politics and debates. At the time, I put programming on the side until I realized that it was something I wanted to do, so I ended up with dual-majors in college.

Later, I went into a PhD program in Informatics at Indiana University. The premise was to apply computer science to a particular domain. Between 2010 and 2014, I collected a lot of data from Twitter through my lab, Complex Networks and Systems Research. During social movements and big political events, we got to look into how news and ideas spread online. It was exciting to see the whole picture, and that’s how I started getting into data analysis.



![](https://cdn-images-1.medium.com/max/1600/0*MQQq1Ut4cgGD4h_0.png)



#### **How did you get involved with Dat Project?**

You would think that researchers are really smart and have all the perfect systems that integrate data from all the different sources. You would assume it must be really easy to transfer data between people. But that totally wasn’t the case at all. It was really hard to work with data in the university. Some groups had developed in-house data warehouses and workflows, but most labs have had trouble collaborating and sharing data.

I found this to be a huge headache when I left my PhD program and started doing data visualization. I worked at Continuum Analytics and at Google, and then joined a startup called Datapad. A year later, I found [Max Ogden](https://twitter.com/denormalize) and the [Dat Project](https://twitter.com/dat_project), I messaged Max on Twitter about data sharing, and now I’m here today.

#### **What is Dat project?**



![](https://cdn-images-1.medium.com/max/1600/0*Ih-L-qzT13O6CA5Z.jpg)

Logo for Dat Project



[Dat](https://datproject.org/) is a distributed data sharing tool that packages your data and shares it over a distributed network. That means that we take the best parts of [BitTorrent](https://en.wikipedia.org/wiki/BitTorrent), which is a distributed network, and the best parts of [Git](https://en.wikipedia.org/wiki/Git), where you have version history, and you put them together. It doesn’t actually use Git or BitTorrent, but it’s inspired by these two projects to build something that’s more robust and more resilient to data outages.

We started working on this three and a half years ago. Max got a grant from the [Knight Foundation](https://knightfoundation.org/) to do a prototype. Since then, it has gone through three iterations of design, implementation and testing. At the moment, most of our users are scientists, because we’ve been marketing and working with them on scientist use cases. It’s also very useful for other kinds of things, which is the great part about having a versatile platform for general use.

The issue with BitTorrent is that users can’t update the data over time because the hash and the link to find the data will change every time. We found a way around that problem by creating a public key that doesn’t change, and the person who generated the key can add more data to it over the time by using the private key. The people who get access to the data can look at the history and go back in time, they can also look for a certain byte range in a file, which is a really powerful and useful tool.

#### **How does the grant funding work for Dat?**

Max got the first grant of $50,000 from the Knight Foundation to work on the prototype. This lasted for 6–9 months and then someone from the [Sloan Foundation](https://sloan.org/) who was interested in the project approached Max and said “Hey, let’s apply this to science.” The Sloan Foundation funds tools that are useful for scientists and to advance research integrity and efficiency.



![](https://cdn-images-1.medium.com/max/1600/0*xXJLbB206g8qamZ5.jpg)

Knight Foundation



Max started building a team as we continued to get more grants from the Sloan and Knight Foundations. The entire project has been entirely funded by grants. The biggest and most important part about getting grants is getting approached by a grant officer and convincing them that your project is worth it. The grant officer’s job is to give money to projects that they believe in or the projects that they believe fulfill the mission of the foundation.



![](https://cdn-images-1.medium.com/max/1600/0*Dyls7V3CJV66oXA8.png)

Sloan Foundation



Every funder is different. Sometimes they only want to give you $20,000 or $50,000, and then other times they want to give you half a million dollars. They’re always trying to push for the public and general good.

#### **If a foundation gives you a set of grants, how is the expectation being set?**

The first thing you do is write your proposal, which can range from 12 to 200 pages. In the proposal, you need to state what your milestones are. If it’s a year and a half grant, you could say, “By three months in we’ll have hired a team. By seven months in, we’ll have user testing done, have a nice set of designs and have the alpha version.” Anything to give the funder a clear idea of what’s to come.

You want to set these milestones in the proposal as well as metrics, such as the number of users and downloads. At predefined intervals, like six months, you need to do a short report to inform where you are with the project and how well you are doing with the metrics. People who give away money want to make sure that their money is being used properly.

#### **How do grant officers and engineers find each other to collaborate?**

There are multiple ways that you can get introduced to a grant officer, but I personally like to stick to two.

The first way, in the context of a conference or convention, is to have a solid presentation that catches the eye of grant officers in the room. That way, they’ll approach you about the project. Another way is to get introduced to grant officers by someone you know, and that’s when you really have to put connections in place.

There is a another way, which is the most visible but probably least effective way to get the grant, and that’s to apply via online forms or competitions. Usually that’s their way of getting newcomers into the pool. If you haven’t been able to get your big break yet, participating in one of the online forums or challenges may help. But you need to have realistic expectation because there are a lot of people who apply and the competition is really fierce.

#### **How do grant foundations perceive open source?**

Open source is a way for people to have their projects continue succeeding even if they’re not funded and even if the project didn’t meet its goals. It is a good way to contribute to the community in long term. When you have something that’s closed source, it dies along with the idea, the company or the organization.

A lot of grant foundations strive to be altruistic, so open source falls into their strategy, because they just want to fund projects that will be useful for the public. This then allows a lot of other creators and entrepreneurs to get interested and involved with your mission.

#### **Dat runs a very distributed team. Tell us your best practices when it comes to team productivity and communication. What tools do you use?**

GitHub has helped immensely with the distributed team — Mathias Buus, in Copenhagen; Max Ogden and Joe Hand in Portland; Yoshua Wuyts, Julian Gruber, and Kristina Schneider in Berlin, and Chia-liang Kao in Taiwan.. We try to avoid private communication in the team, so everything is done in the public IRC. We have daily stand-up to cover what we are doing that day and bi-weekly call to update each other on our current situation, and from there we plan out what happens next.



![](https://cdn-images-1.medium.com/max/1600/0*W4mA1sMuHE1QRcEI.jpg)



Doing everything in public helps get other people who aren’t on the team to collaborate with us as open source contributors. “Open source,” in my mind, is synonymous with “distributed.”

It’s great that we don’t have a team that consists of more than three people. One of the keys is having a small and focused team. I think people work best in groups of two or three. More than that, and it gets difficult to come to conclusions. When people make ownership of their part of the project, they feel empowered to make decisions. At the same time, they can also get input from other people in a horizontal fashion.

#### **What is Code for Science and Society?**



![](https://cdn-images-1.medium.com/max/1600/0*Wf42_N_ga3NfsI-w.png)



[Code for Science and Society](https://codeforscience.org/) is a nonprofit organization that fiscally sponsors people who want to get a grant based project.

Fiscal sponsoring is basically what happens is when you get a grant, and regardless the check size, you can’t just accept that money as an individual. You need an organization that’s going to take the liability for you. The foundation gives the money to a nonprofit, then the nonprofit gives the money to you as a contractor and takes care of legal and accounting.

We created [Code for Science and Society](https://codeforscience.org/) to house the Dat Project and also to house a project called [Stenci.la](https://stenci.la/), and we’re also looking for other projects to house. Essentially, we’re helping people get funding and handle all of the process, so they can focus on the project and get paid as a contractor through the non-profit. We’re actively looking for people who are interested in trying to get a grant. If you have a big idea, maybe even a prototype, we want to help you get funded and be your fiscal sponsor.

What happens is that a lot of engineers have a great idea, and they might also have a connection to a grant officer, but they don’t know how to do accounting and they don’t always know how to hire people. There’s a lot of smaller details that engineers shouldn’t have to worry about, and we should be focusing on the bigger picture and mission we’re trying to accomplish. But it’s a hard subject for open source, because you just want to make the product but you don’t have a company that’s helping you out. We’re trying to be that umbrella organization.

Ideally, all the projects in our portfolio would be things that can work with each other. That includes coding for science, society, journalism, open government, activism, collaboration and in general across these domains.

#### **Walk us through a day in the life of building Dat and Code for Science and Society?**

While it’s entertaining and challenging to build, sustain and put out fires in an open-source project, it’s also tough because the tasks you have to do are constantly changing. One day I’m up writing a grant, the next hour I have to fix a bug, and then the next hour someone’s calling me on the phone about accounting. Because we’re a nonprofit, we’re always a little under-funded, which means everyone has to juggle a lot of different tasks.

There have been times where it’s quiet and I’m just coding for 40 hours a week, but then I start to get a little restless. I like being busy. I think that’s why I did a dual-major in political science and computer science because I like to change it up. I like to talk and I like to code.

#### **Can you talk about a couple really difficult periods you’ve had to go through or are currently facing in building Dat and CSS? How do you overcome the struggle?**

One of the hardest times was about a year and a half ago. I’d been on the team for a year, but Max and Mathias had been working on it for about two years by then. I had built all this stuff on top of Dat, but the internal design was not working for our target users. We had a realization that we had to essentially start from scratch.

We knew that it was going to be the best long term decision, but it was a challenging one to face. We realized that our users were unhappy, and we weren’t getting any new users, so we had to think about what they would want. What they wanted required a complete redesign from the ground up.

Letting go of our prototype and moving to a new version was a tough transition. We found users who would help us design the next phase and work through all of the kinks and details. What’s great about nonprofits is that you can do that, because you’re not on a shorter runway. You don’t have an intense need to get user or revenue, which gives you leeway. We knew how much time we had left, and we knew that we could rebuild the product in that amount of time. Being able to start from scratch offered refreshing change, and we got to connect with our users to see what needed to be different.

#### **What’s next for Dat Project ?**

We’re really excited about the [data rescue efforts](https://www.datarefuge.org/) that have been going on.

We’ve been working with [Data Refuge](https://www.datarefuge.org/) along with [Library of Congress](https://www.loc.gov/) , [Sunlight Foundation](https://sunlightfoundation.com/) and [DATA.GOV](https://www.data.gov/). We’re going to be figuring out how to efficiently back up all the data amongst different institutions that want to host the data. We’re also trying to make it easier to backup open data sets in a distributed way, so that as more institutions host big data sets, they’re able to take a slice of that data set. You can read more about this effort on [New York Times](https://www.nytimes.com/2017/03/06/science/donald-trump-data-rescue-science.html?mcubz=3).



![](https://cdn-images-1.medium.com/max/1600/0*sEF_12ASXN7k7HCm.jpg)

Source: [https://www.nytimes.com/2017/03/06/science/donald-trump-data-rescue-science.html?mcubz=3](https://www.nytimes.com/2017/03/06/science/donald-trump-data-rescue-science.html?mcubz=3)



For example, DATA.GOV is 60 terabytes of data. No one institution is going to want to host 60 terabytes themselves. What we want to do is use Dat to distribute the data sets across many different institutions, so institutions have only a slice that they’re willing to contribute.

It’s important to back up these data sets in a way that’s distributed so that even if one of them goes down, the data can still be available at another institution. That’s just one of the pieces, because what’s really important is that people can actually use that data. People all around the world use data that is generated by the United States’ funding apparatus, [scientists and government.](https://www.nytimes.com/2017/03/06/science/donald-trump-data-rescue-science.html?mcubz=3)

We’re talking about climate data sets, astronomy datasets, anything. The versatility of the platform allows for an efficient way to spread information, which is why libraries are getting on board. We want to make it really easy for people to describe their data sets, and we want Dat to be a really good tool for doing this. That’s the goal for the next few months.

What we’re trying to do is collect data sets from all around the world to make it easy for anyone to publish them. We’ve implemented a new system with “infecting” or “injecting” Dats into existing repositories. You just have to have a series of metadata files. What we want to do is take data sets that already exist on a lot of these international data repositories and turn them into Dats.

People can download the data and access Dat from the website to get updates, access data history, and more — even if it’s in the old HTTP repository. We’ve got some pretty exciting stuff coming up, and we want to do that for repositories all over the world.

#### **What other hobbies or interests do you have outside of programming?**

I play trumpet. It’s a tough instrument to play, but I’m glad I stuck with it.



![](https://cdn-images-1.medium.com/max/1600/0*rpB-ZxFtDWVSB83t.jpg)

Karissa plays trumpet



Besides that, I work with the [Debt Collective](https://debtcollective.org/), a debtors’ union that fights against predatory lending in the United States. In terms of basic needs like education and healthcare, the debt financing system should definitely be changed. It is gratuitously difficult to live in this system without getting debt. I like their mission. They help people all over the country who are in dire situations in disputing their debt. I helped them build their website a little bit and did some technology consulting for them.











* * *







I [originally](https://betweenthewires.org/2017/08/25/karissa-mckelvey/) posted this interview on [Between the Wires](http://betweenthewires.org), an interview series featuring those who are building developer and designer products.

This project is made possible with sponsorships from [frontendmasters.com](https://frontendmasters.com/), [egghead.io](https://egghead.io/) and [Microsoft Edge](https://www.microsoft.com/en-us/windows/microsoft-edge).



![](https://cdn-images-1.medium.com/max/1600/1*xs49rbwRhgtVnEbmPYQkGw.png)

Our sponsors.



[Donate to support this project](https://opencollective.com/betweenthewires).

To suggest a maker you’d like to hear from, please fill out this [form](https://goo.gl/forms/XhR1IyLXJHNMljcp1).

You can also send feedback to [betweenthewires](https://twitter.com/betweenthewires) on Twitter.








