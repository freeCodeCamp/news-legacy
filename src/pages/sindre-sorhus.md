---
author: Vivian Cromwell
authorTwitter: https://twitter.com/viviancromwell
authorFacebook: none
title: "Between the Wires: An interview with open source developer Sindre Sorhus"
subTitle: "Here’s my interview Sindre Sorhus, a prolific open source developer who lives in Thailand...."
coverSrc: https://cdn-images-1.medium.com/max/1600/0*qswXTSvRgFBVatSc.jpg
url: https://medium.freecodecamp.org/sindre-sorhus-8426c0ed785d
id: sindre-sorhus-8426c0ed785d
date: 2017-09-04T21:01:48.000Z
tags: [
  "JavaScript",
  "Open Source",
  "Nodejs",
  "Technology",
  "Programming"
]
---
# Between the Wires: An interview with open source developer Sindre Sorhus



![](https://cdn-images-1.medium.com/max/1600/0*qswXTSvRgFBVatSc.jpg)

Sindre at street food restaurant in Bangkok



Here’s my interview [Sindre Sorhus](https://github.com/sindresorhus), a prolific open source developer who lives in Thailand.

#### **Tell us a little bit about your childhood and where you grew up.**

I grew up in a suburban area outside Oslo, Norway. When I was little, I was really interested in Legos. Every year I would get Legos for birthday and Christmas. Legos really sparked my interests in building things early on. At one point, I had a huge Lego city built into my room and it almost occupied the entire room.



![](https://cdn-images-1.medium.com/max/1600/0*T6dXbRwFM8J1ycnA.jpg)

Building with Legos as a child



#### **How did you get into programming?**

When I was seven, my family got our first Windows 95 computer. I used to play a game called Map Blaster where the character jumped around to solve math problems. A few years later we finally got internet access and it changed everything for me. I spent a lot of time writing in guestbooks on other people’s web pages and gathering gifs. One day, I got curious about how the website worked and discovered the “view source” button in the browser.



![](https://cdn-images-1.medium.com/max/1600/0*3AjOcChUhvuf57s6.jpg)

On a family computer, Sindre was checking Microsoft Outlook Express



That was a mind blowing discovery for me. I could just right click, view the source and then I could see how everything was made. I didn’t understand much in the beginning, but as I looked at the same thing over and over again I started to understand how it worked. This is how I started my programming journey.

I made my first website when I was ten. It was after having looked at the source for a few years. It had all kinds of colors, a star patterned background, animated with media background music — it was one of those touches that everyone had on their websites back then. I used [Microsoft FrontPage](https://en.wikipedia.org/wiki/Microsoft_FrontPage).

One time, I was bored so I created thousands of nested directories on my dad’s computer and it ended up crashing the computer. My dad had to reformat the computer; he was impressed and annoyed at the same time. That was also how I lost my first website.

Later during my school year, I got into Flash games and we would watch a lot of Flash movies during school breaks. I was curious how they were made but there was never any source button. So I decompiled the swiff files, that was easy because they were not obfuscated. That, again, gave me the opportunity to learn from other people’s work. I started to modify other people’s games and redid all characters, made new enemies, added high scores. It was a proud moment when I realized others could actually play a game that I had glued together.

#### **You spent five years in the military as a front end developer and photographer. What was the web development like at that time?**



![](https://cdn-images-1.medium.com/max/1600/0*v3u5Pk8KS6LVT6M1.jpg)

Sindre in the military



After graduating from high school, I was conscripted directly to the military in Norway. I got into the media unit where I spent most of my time in the office working on the intranet. There wasn’t much to do in the evenings because we lived in the barracks so I decided to build stuff. But most of my experience had been copying and pasting other people’s PHP and JavaScript and I didn’t quite understand how they worked. One day, I stumbled upon Python and Django, it had great documentation and tutorials that PHP never had. I would read tutorials every day and started building things at work.

That is how my actual coding started. After the conscription, I planned to go traveling before college. But I got a job offer from a unit in the military named Cyber Defence Unit. It was intriguing so I took the offer, and I ended up spending 5 years there.



![](https://cdn-images-1.medium.com/max/1600/0*i_FpaRufM4A4zJEZ.jpg)

The app that Sindre made in the military



#### **How did you get involved with TodoMVC and Yeoman?**

I started using GitHub around 2011 but mostly as a consumer. I would go around, looking at different repos and starring them because they looked fun. I fixed some typos in README.md files but that was about it.

One day I stumbled upon [TodoMVC](http://todomvc.com) which helps you to select a JavaScript framework. It was a really awesome idea, although in hindsight we need a lot more advanced applications to actually solve the problems of performance testing and framework capabilities. The first thing I remembered about TodoMVC was that it had a nice logo. It seems very superficial, but that’s what got me started.



![](https://cdn-images-1.medium.com/max/1600/0*AIFRkK6HibOG__WA.png)

TodoMVC logo



I liked the logo so much that I decided to look around a bit more. I noticed they didn’t really have a jQuery application so I decided to create one. I submitted a pull request over the weekend and got a response back from Addy Osmani who is the maintainer of the project. He merged my PR quickly which was a super nice experience for a beginner like me. I felt good that my app was now included in this really popular project. I did this for a few weeks, and Addy added me to the project which was really cool.

This really got me interested in open source. Before this, I was just a passive consumer, but with TodoMVC I got a taste of maintaining a big project which was a lot of work. But I learned a lot from that experience.

A few months later, Addy went to work for Google. His first project at Google was [Yeoman](http://yeoman.io), a scaffolding tool for modern web apps. Because we worked so well together on TodoMVC, so he decided to invite me as an external contributor.



![](https://cdn-images-1.medium.com/max/1600/0*H_mezW7nLlgOBxfb.png)

Yeoman Logo



Our initial goal with Yeoman was to create a set of tools that everyone can use to create great web apps. What we didn’t realize then is that it is impossible to solve everyone’s problem in one tool because on the web there are just too many use cases. Yeoman became a popular configuration that many developers created generators to extend Yeoman that suit their own use cases.

History repeats itself as well if you look at Create React App or Webpack. Someone starts out making this product that is supposed to solve one problem, but because everyone has different needs, problems arise. When you realize this tool cannot cover everything, you add the configuration. The key is to have a balanced approach. You have to say “No” and you need to know when to say “no”. You may disappoint some users because they have obscure use cases. That is the hard part of making tools, and it’s even more difficult in open source projects because there is so much feedback.

#### **Why are you passionate about open source?**

I love open source and I think it goes back to the “View Source” button in the browser. In my opinion, open source is the most effective way to build software because it enables us to build on top of each other’s work. Everyone benefits if any one person solves a hard problem. Open source lets me work with incredible people from around the globe that I would never have been able to work with otherwise. We get to work on what matters to us and focus on what’s needed by the community instead of focusing on generating revenue.

[Paul Irish](http://twitter.com/paulirish) has a great video on YouTube titled “[Ten Things I learned from the jQuery Source](https://www.youtube.com/watch?v=i_qE1iAmjFg).” That’s what got me interested in reading the jQuery source code. Paul Irish was right, you learn a lot by actually doing whatever it is you want to learn how to do.

#### **How about open source sustainability?**

That’s definitely a point of conflict that I’ve been thinking about a lot recently. I’ve done open source full time for about [three years now](https://twitter.com/sindresorhus/status/902945099369275393). I don’t earn any money but it would be nice to do this full time as a paid job. [Vue.js](https://vuejs.org/) by Evan You is a great example of how open source sustainability can work, though. He created a framework that everyone wanted and it has been used by quite a few companies. Other companies and individuals have incentives to invest in his project because it is useful in production. The key is to make your project dependable. I personally don’t think contributions from individuals are enough to sustain a project.

I’ve been thinking about using [Open Collective](https://opencollective.com/) so we can collect money to reward contributors and event promotions. Webpack has done [a great job](https://opencollective.com/webpack) there. I was actually against this for a long time, because I was worried that there were going to be expectations for us to make unwanted changes whenever someone put money towards the project. Usually, if a company invests in a project, they want the work prioritized and the issues fixed quickly.

I am currently living in Thailand and I think I would be fine with less than [1500 dollars](https://github.com/sindresorhus/ama/issues/414).

#### **You have over 1000 npm packages. How do you stay so productive?**

That’s a misconception. People see the number [1000 packages](https://www.npmjs.com/~sindresorhus) and they think I’m insanely productive, but what they don’t realize is that most of those packages are small and modular. They’re pretty much done when they are published. I like to compare programming to building with Lego: I create lots of Lego bricks which can be assembled to build larger constructions. I use them with other packages before publishing to ensure they solve my problems. That is also why users would not submit a lot of feature requests because they are so small. If they need something more they can just build another module. 90% of my time is spent on my biggest 10 projects.

#### **What is one advice you can give to new OSS contributors when dealing with demanding and toxic people?**

I have been doing open source for six years now so I’ve developed a thick skin. I don’t think anything bothers me anymore because I like to think that I’ve experienced it all. I talk to a lot of beginners who experience some toxicity and then quit. Open source is supposed to be a fun thing you do, not a cause of stress in your life.

My advice to new developers is that you shouldn’t let strangers on the internet negatively affect your mood or your drive. It isn’t worth it. If you have the option to walk away, take it — utilize the unsubscribe button. Open source maintainers need to remember that users are not paying customers. We’re providing something to them for free, on our own free time.

With toxic people, you need to always be the bigger person. It sounds wrong, but what I try to do is to kill them with kindness. Somehow it has worked for me for many years. For example, if someone is annoying, I’ll try to be as open and kind about the situation. I make sure never to be sarcastic or talk down to them. The trolls feed on your annoyance and discourse, so when it’s not there, they’ll leave you alone.

I utilize the muting option wherever it’s provided, especially on Twitter. It’s good to realize just when someone is bordering on toxic, and it’s much better to simply shut that voice and input out instead of causing unnecessary conflict.

#### **You designed some logos for your own modules, they are awesome. How did you learn design?**



![](https://cdn-images-1.medium.com/max/1600/0*KvVoEsRZNsSFbTdW.png)

XO project



I started by following online tutorials to make cool effects. I used to use [Adobe Illustrator](https://www.adobe.com/products/illustrator.html), but now I use [Sketch](https://www.sketchapp.com/) .

It’s really fun for me to design, and I think more programmers should try it. After programming for hours, it’s nice to take a break to do some creative work in a different way.

It also benefits my projects by creating logos, because it gives the project more of a personality. Usually, when you enter a repo on GitHub, you get the same text based things: a header, some introduction and README.md. It is nice to spice it up with some graphics. It turns out people are more likely to use the project if there is a logo. For example, [Vadim Demedes](https://github.com/vadimdemedes), a developer from Ukraine, submitted this [pull request](https://github.com/avajs/ava/pull/30) right after AVA’s release. Vadim later became an AVA team member. He told me he got interested in AVA because of its nice logo.



![](https://cdn-images-1.medium.com/max/1600/0*Q4TrzJ244zn0WaI7.png)

AVA project logo designed by Sindre



**What prompted you to move to Thailand? Tell us what a typical day looks like for you.**

I didn’t really know much about Thailand at all. When I worked in the military obligatory service, I planned to travel. I got an offer and ended up staying for another four years. I just went with the flow, because life happens.

One day, when I was preparing a phone interview with Google, I just decided that if I’m ever going to travel, it would be now, otherwise, it would never happen. So I canceled the interview and submitted my resignation at work the day after. I bought a one-way ticket to Thailand and that was it.

I did backpacking for half a year in South East Asia, and that’s where I met my girlfriend. I eventually settled in Thailand because it was my favorite. I love its rich culture, friendly locals, and food. I have been living in Thailand for two years now.

I work out of local coffee shops three days a week because I am more productive when I have people around me. Otherwise, from nine to six I do a lot of open source coding and maintenance, sometimes my side projects. On most days, I get more than 20 pull requests and tons of issues to fix. In the evening, I spend time with my girlfriend Im; we both love the spicy street food at night markets. Sometimes duty calls and I find myself back in front of the computer late at night.



![](https://cdn-images-1.medium.com/max/1600/0*Pkoe16ZXkxiKzgLd.jpg)

Sindre and his girlfriend Im at Koh Mak, Thailand



I didn’t learn the Thai language because while I am good at programming languages, spoken language is much harder than any programming language, and Thai is especially hard. My girlfriend, on the other hand, is fluent in Thai, Russian, English and pretty good at Swedish. At some point, I want to learn Thai and other languages, but I’m not pressed for time.

#### **What motivated you to start AVA project?**

I was using [Mocha](https://mochajs.org/) a lot because I made a lot of modules that had to be tested. I wasn’t really happy with how it worked. Mocha injects some global objects but they are not defined anywhere. Because I was doing it in Node.js, I had a lot of async APIs and it was not very convenient to do with Mocha.

I wanted something simpler and more optimized for my use case. So one weekend, I decided to work on it, and by Sunday evening I published 0.0.1 version for [AVA](https://github.com/avajs/ava) on npm. Even though JavaScript is single-threaded, IO in Node.js can happen in parallel due to its async nature. AVA takes advantage of this and runs your tests concurrently, which is especially beneficial for IO heavy tests. In addition, test files are run in parallel as separate processes, which allows for potentially even better performance and an isolated environment for each test file.



![](https://cdn-images-1.medium.com/max/1600/0*U3qGfqpVNpoUW-Il.png)

AVA project



Because I didn’t have time to fix bugs and I only wanted to use it on my own projects, it was private. After a year and a half, I finally made a logo for AVA, cleaned up the repo, wrote a lot of documentation. Then, I published the project.

Most of the users seem very happy about AVA because we get positive tweets on the project all the time. They really like how simple the syntax is and how easy it is to get started. I just made it to scratch my own itch, but it turns out that other people had the same problem and liked my solution.

Nowadays, I spend more time on managing the project because there are so many new issues and pull requests every week, which leaves me very little time to code.

#### **Why did you decide to get into macOS development?**

I did a little bit Objective-C programming but I didn’t have a great experience. This January, I got an idea for a Mac application, and I had some free time so I jumped right into [Swift](https://developer.apple.com/swift/). That is how I usually learn new things. It’s very spontaneous. I begin with a desire to make a product, then I figure out what skills I need to make that product then I learn them. The idea comes before the planning.

Swift is a lot harder to learn initially than JavaScript, but Swift shines because it is strongly typed. When you compile, it is much more unlikely to crash if you use optionals correctly. The only thing I didn’t like about Swift is that you still sometimes have to interact with the old APIs in C.



![](https://cdn-images-1.medium.com/max/1600/0*Ps7Sip4uH2_WmHtV.png)

Lungo project logo



I wrote a few productivity and utility apps. [Lungo](https://blog.sindresorhus.com/lungo-b364a6c2745f) is a menu bar app that I wrote, and you find it on the [App Store](https://itunes.apple.com/no/app/lungo/id1263070803?mt=12). The other one I wrote is [Battery Indicator](https://itunes.apple.com/us/app/battery-indicator/id1206020918?mt=12).

#### **What is your plan for next year? Are you planning to go full time or consider other ways to become financial sustainable?**

I have been living off savings for the last three years and doing open source software. That’s a lot easier in Asia but it doesn’t last forever. Ideally, I would like to do open source in a financially sustainable way but that’s difficult, so I will probably do some contracting next year.

I have tried a few different things. One thing I did is to ask for support in [GitHub README.md](https://github.com/sindresorhus/awesome-nodejs) file. I wouldn’t call it an ad but more of a small banner. I made a little bit of money but it is far from being able to sustain me.

I might give [Patreon](https://www.patreon.com/) a try.

#### **What are some of the things you wish to improve in JavaScript ecosystem?**

In my opinion, the JavaScript ecosystem is great already but we still have a lot of quirks to work around on browser side of things. There are so many projects with this giant build script just to get a simple app out there, that is why I love [Node.js](https://nodejs.org/en/).

The problem with browsers is that they are very complex. You have the network to think about, you need to optimize for both size and performance, you have lots of different use cases, frameworks to choose from. Everyone tries to simplify it, but then you end up being too opinionated, then you add configuration but there is too much boilerplate. I don’t see an easy path forward unless you fix the actual platform instead of creating lots of solutions on top of it. One thing I think will improve the situation is when we finally get modules in the browser. You may not need a build step for everything then.

#### **Why are JavaScript developers obsessed with unicorns?**

The whole pony movement started with the [Django](https://www.djangoproject.com/) community actually. When you started asking the features you want, developers would say “I want a faster HTTP parser,” or “I want ORM that just works.” One day, one of the core devs on Django mailing list responded to one of the feature requests with “no, you can’t have a pony!” The whole unicorn movement started with that feature request denial.

There’s even a [website](http://www.djangopony.com/) dedicated to the lovable pony.



![](https://cdn-images-1.medium.com/max/1600/0*kji4HtecX4ehildP.jpg)

Django, the web framework for ponies with magical powers.



I don’t remember exactly how it spread to the JavaScript community. It was one of those things that just happened on its own. Having something as fun and silly as unicorns helps me work through programming and OSS and ups my morale. The same goes for silly gifs.



![](https://cdn-images-1.medium.com/max/1600/0*WAYWibgBaMF89H6k.jpg)

ESPN.com went magical with Konami code. (source: [http://kotaku.com/5230185/the-konami-code-makes-espncom-magical)](http://kotaku.com/5230185/the-konami-code-makes-espncom-magical%29)





![](https://cdn-images-1.medium.com/max/1600/0*oMqeDtXqtUi2cAvw.png)

Sindre’s website





![](https://cdn-images-1.medium.com/max/1600/0*X8BlDIc7o6Z2W3d6.jpg)

Sindre’s laptop homescreen













* * *







I [originally](https://betweenthewires.org/2017/09/04/sindre-sorhus/) posted this interview on [Between the Wires](http://betweenthewires.org), an interview series featuring those who are building developer and designer products.

This project is made possible with sponsorships from [frontendmasters.com](https://frontendmasters.com/), [egghead.io](https://egghead.io/), [Microsoft Edge](https://www.microsoft.com/en-us/windows/microsoft-edge) and [Google Developers](https://developers.google.com/).



![](https://cdn-images-1.medium.com/max/1600/0*YcoiFSyzxi36mUeA.png)










