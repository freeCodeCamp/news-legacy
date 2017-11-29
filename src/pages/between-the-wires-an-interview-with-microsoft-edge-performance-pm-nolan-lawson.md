---
author: Vivian Cromwell
authorTwitter: https://twitter.com/viviancromwell
authorFacebook: none
title: "Between the Wires: An interview with Microsoft Edge performance PM Nolan Lawson"
subTitle: "I interviewed Nolan Lawson, Web Performance PM at Microsoft Edge. He also maintains the popular open source library PouchDB together with..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*ozpkWNHda_nU62_3VGakQA.png
url: https://medium.freecodecamp.org/between-the-wires-an-interview-with-microsoft-edge-performance-pm-nolan-lawson-ca3240dec2eb
id: between-the-wires-an-interview-with-microsoft-edge-performance-pm-nolan-lawson-ca3240dec2eb
date: 2017-06-20T13:01:37.566Z
tags: [
	"Open Source",
	"Web Development",
	"Technology",
	"Microsoft",
	"Tech"
]
---
# Between the Wires: An interview with Microsoft Edge performance PM Nolan Lawson







![](https://cdn-images-1.medium.com/max/1600/1*ozpkWNHda_nU62_3VGakQA.png)








_I interviewed Nolan Lawson, Web Performance PM at_ [_Microsoft Edge_](https://www.microsoft.com/en-us/windows/microsoft-edge#x2QP2K1csjiH2CwS.97)_. He also maintains the popular open source library_ [_PouchDB_](https://github.com/pouchdb/pouchdb) _together with others._

#### Tell us a little bit about your childhood and where you grew up.

I grew up in a small navy town called Bremerton, near Seattle. I had a pretty typical middle-class upbringing: my step dad worked for the naval shipyard, and my mom was a school nurse and later a school teacher.

As a child I was a voracious reader. I read lots of fantasy and horror books, from the Narnia series to everything by Stephen King. My teachers were suspicious of me reading adult horror novels, but they tolerated it because at least I was reading. I was also really into video games.

I have a great appreciation for the outdoors thanks to an early experience in the Boy Scouts. I’ve also visited France a lot because my biological father is French. That gave me a bit of a travel bug, and as an adult I moved to Ottawa, to Geneva, and then to New York City before coming back to Seattle. I moved around every few years, just on a whim.












(Nolan, 2009)



At some point I realized it would be a good idea to go back home and be closer to family. My girlfriend also wanted to settle there, because that’s where her family is from too. I started looking for jobs around Seattle, and Microsoft became a pretty obvious choice.

#### Tell us a little bit about your first programming experience.

When I was six or seven, my uncle gave me a hand-me-down MS-DOS machine with a 5¼ inch floppy drive. It was ancient by today’s standards. It had basically two games: [Snake](https://en.wikipedia.org/wiki/Snake_%28video_game%29) and [Gorillas](https://en.wikipedia.org/wiki/Gorillas_%28video_game%29), and it actually displayed the BASIC code before they started up. Those two games were all I could figure out to do with it.












(8-inch, 5¼-inch, and 3½-inch floppy disks)














(Gorillas, is a [video game](https://en.wikipedia.org/wiki/Video_game "Video game") first distributed with [MS-DOS 5](https://en.wikipedia.org/wiki/MS-DOS "MS-DOS") and published in 1991 by [IBM](https://en.wikipedia.org/wiki/IBM "IBM") corporation.)



> “I didn’t get back into programming again until I was in college.”

I also had a book on MS-DOS programming, so I took some time to write a really simple Batch script. When the computer would start up, it would print:

“Hi, Nolan. Which game do you want to play? 1\. Gorillas 2\. Snake?”

And you would type one or two depending on which game you wanted to play. I was pretty proud of that script!

When I was around nine, my daycare had a similar computer with even more games on it, so I decided to apply my Batch skills to it. Unfortunately, I messed up the computer and made it so you couldn’t play the games anymore. I felt guilty and it kinda scared me away. I didn’t get back into programming again until I was in college.

As an undergraduate I studied linguistics, mostly because I was learning French and Japanese at the time. I was fascinated by languages. But after graduation, I realized it was kind of hard to get a job in linguistics. As it turned out, though, my department at the University of Washington had a Master’s program in [computational linguistics](http://www.compling.uw.edu/), which seemed like a great option career-wise. That was how I finally got back into programming.

#### What motivated you to get involved with PouchDB?

Around 2012, I was working for an NGO in Geneva. We were building a web app for a client that was using [CouchDB](http://couchdb.apache.org/). Later on, I started playing with CouchDB for a side project. Through that I found [PouchDB](https://pouchdb.com), which could sync data between CouchDB on the server and I[ndexedDB](https://www.w3.org/TR/IndexedDB/) in the browser. I thought it was amazing.












(Pouchdb logo)



While working on that project, I noticed a few bugs in PouchDB. I realized I knew enough Android and enough JavaScript to solve the bugs. Eventually, I ended up fixing more bugs, and contributing to the project more frequently. In early 2014 I become one of the main [contributors](https://github.com/pouchdb/pouchdb/graphs/contributors), and still am today.

The story of how PouchDB got started is pretty interesting. Back in 2010, [Mikeal Rogers](https://twitter.com/mikeal) did this one-off experiment called [IDBCouch](https://github.com/pouchdb/pouchdb/commit/d600081962d3f54b410e5cfcf78cd413ad94abb9), which only worked in Firefox Nightly because IndexedDB was so new at the time. [Max Ogden](https://twitter.com/denormalize) later renamed it to PouchDB, when he was bicycle shopping in San Francisco and thought up the name “[Portable Couch](https://twitter.com/denormalize/status/452906716426797056).” Then [Dale Harvey](https://twitter.com/daleharvey), who works at Mozilla, picked up the project and did an enormous amount of work to get it running well in Firefox and Chrome.












(source: [https://twitter.com/denormalize/status/452906716426797056)](https://twitter.com/denormalize/status/452906716426797056%29)



When I came to the project in late 2013, I wanted PouchDB to work in all the browsers, like jQuery but for databases. I thought people should be able to drop it in and it should “just work” on old versions of Android, IE, and Safari. A lot of my early work was on cross-browser compatibility, which really helped PouchDB become more popular.

PouchDB is a good example of what the IndexedDB authors originally intended when they wrote the spec. They wanted people to build libraries on top of it, in the spirit of the [extensible web manifesto](https://www.w3.org/community/nextweb/2013/06/11/the-extensible-web-manifesto/). The original spec author, Nikunj Mehta, even wondered if someone would write a [“JavaScript CouchDB.”](http://web.archive.org/web/20120430114822/http://blog.o-micron.com/2009/09/now-published-alternative-to-sql-for.html) Today, there are a lot of interesting libraries built on top of IndexedDB, including PouchDB, [localForage](https://github.com/localForage/localForage), [Dexie.js](http://dexie.org/) and [Lovefield](https://github.com/google/lovefield), which provide a more developer-friendly experience.

#### Did PouchDB seek funding from large corporations and the community?

> “I’ve always had this somewhat idealistic notion that PouchDB should be a passion project that’s not corrupted by money. I don’t want to be swayed by one organization or another to push it in a particular direction. It ought to be whatever’s best for users.”

We did try to seek funding pretty early on, around 2013\. Dale set up a bounty system where each GitHub issue might have a notice saying, “Hey, if you solve this issue, there’s a bounty.” There were a few issues with that.

Random people could come in and submit a PR to fix one of the bounty issues. I recall one issue where the PR didn’t quite fix it, but it was halfway there, so I went in and fixed the other half. At that point, it was unclear who the bounty should go to. Should it be split in half? In the end, the person who offered the bounty didn’t even end up paying it. So this system didn’t work too well, and we scrapped it.

Today, PouchDB has grown to [over 200 contributors](https://github.com/pouchdb/pouchdb/graphs/contributors), but essentially Dale is the [BDFL](https://en.wikipedia.org/wiki/Benevolent_dictator_for_life) and I’m the lieutenant. Recently we started [the funding discussion](https://github.com/pouchdb/pouchdb/issues/6229)again, but we need to set up a formal governance model first. This is especially important to enterprises. IBM, which is heavily invested in CouchDB through [Cloudant](https://cloudant.com/), wants to be able to tell their customers that CouchDB and PouchDB are rock-solid solutions to their problems. However, while CouchDB is under the [Apache Foundation](https://www.apache.org/) and has a very clear governance model, PouchDB doesn’t. So some enterprise clients might be a little concerned about that.












(PouchDB team reunion 2015, Nolan Lawson, Gregor Martynus and Calvin Metcalf)



I’ve always had this somewhat idealistic notion that PouchDB should be a passion project that’s not corrupted by money. I don’t want to be swayed by one organization or another to push it in a particular direction. It ought to be whatever’s best for users. We’re at this point in the maturity of the project, though, where we need to start asking the hard questions. For instance, we want to figure out how to raise and distribute money so we can give it out fairly to contributors. We’re exploring options right now, but we haven’t committed to anything yet.

#### What have you learned from the PouchDB project when it comes to OSS sustainability?

> “That’s why I think it’s important to remember what it’s like to be a beginner. When you’re just starting out, even talking to an open-source maintainer can be intimidating.”

PouchDB was my first big open-source project. I have to hand it to Dale; he was my mentor from the start. He taught me all the fundamentals of how to interact in an open-source project.



![](https://cdn-images-1.medium.com/max/1600/1*J2V-cAny-fZTix7y7hlLGg.png)

(Dale Harvey)



In the beginning, even just talking to Dale Harvey on IRC was intimidating. He was the kind of person who gives talks at conferences; people respected him. I was just some rando on the Internet. But Dale is always very patient with new contributors. He responds to everyone’s questions and issues. Even if he thinks something’s a bad idea, he’ll tell them gently. Slowly, I realized Dale is just a normal human being, and he’s happy to have people involved in the project.












(Dale commenting on Github issue)



That’s why I think it’s important to remember what it’s like to be a beginner. When you’re just starting out, even talking to an open-source maintainer can be intimidating. I learned from Dale to be a thoughtful maintainer and to always encourage people to contribute.

Today, PouchDB is very mature, and it requires a huge amount of knowledge to get started, which is challenging to new contributors. One thing I’d like to fix is to make it a little bit easier for newcomers to get on board. That’s something I think is missing right now.

#### “Offline first” is something we have been talking about since 2010\. Do you think we are finally ready for it? What are the main challenges with it today?

Offline is really difficult. It’s one of those things that’s even missing from a university computer science education. What folks don’t realize is, when you’re building an offline-first application, you are essentially building a distributed system: client and server. Just by storing data on those two nodes, you have all the theoretical problems of the [CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem): consistency, availability, and partition tolerance — pick two.

So if you’re building that kind of system, but don’t realize it going in, you’ll probably end up just hacking something together. You may think you got 100% of the way there, but you really only got 90%, and the remaining 10% may take years to finish. It’s taken years to fix all the edge cases in PouchDB.

One of the things we’re trying to do with PouchDB is to raise awareness and help people think about the inherent issues of offline-first architecture. PouchDB has a built-in concept of conflict management, because CouchDB thought about those problems from the very beginning. It’s designed with the [multi-version concurrency control](https://en.wikipedia.org/wiki/Multiversion_concurrency_control) model, which answers the question of what happens when the client and server get out of sync.

User experience is another big problem that hasn’t really been solved yet in offline-first. I think that new models like [Progressive Web Applications](https://developers.google.com/web/progressive-web-apps/) will force us to start to think about how to communicate this to users. There’s a [great post](https://medium.com/@jessebeach/my-biggest-takeaway-from-the-second-offline-camp-in-santa-margarita-ca-d0dd930cd02b#.rkrwj3sbw) from [Jesse Beach](https://twitter.com/jessebeach) where she talks about how to effectively communicate offline states, and at [Offline Camp](http://offlinefirst.org/camp/) we discussed some of these techniques, like switching the UI to grayscale when the app goes offline. It’s not as negative or jarring as an alert, but it’s a subtle indication that you’re offline.












(Nolan at Offline Camp with Jesse Beach and others, 2016)



There’s been a great deal of progress on offline first, but it’s still definitely an unsolved problem.

#### What made you decide to join the Microsoft Edge team? What is your impression of the first six months, going from a small startup to a large organization?

> “But there’s a general feeling across the company now that when we’re transparent and seeking feedback from the community, it works out well for us.”

I came to Microsoft Edge because I wanted to help make the web platform better. I thought it would be a good opportunity to build out a lot of the standards that I’m passionate about. For instance, we’re in the process of building out [Service Workers](https://www.w3.org/TR/service-workers/) and [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/), as well as improvements to IndexedDB. I wanted to be on the ground floor to see those things happen.

Microsoft is fascinating to watch because it’s a company in transition. It’s moving from being fairly closed to being a lot more open. Certain teams have embraced this openness more than others, and even certain people within the same team. But there’s a general feeling across the company now that when we’re transparent and seeking feedback from the community, it works out well for us.

I am still actively involved in the PouchDB project, but I tend to keep my work at Microsoft and PouchDB separate. I’ll triage GitHub issues on the way to work and then do some programming for PouchDB in the evenings or weekends. But I find these two blending together more and more, in a positive way. For example, I might find a bug in IndexedDB on Edge while I’m working on PouchDB issues.

#### Walk us through a day in the life of being a performance PM at Microsoft Edge.

I’m on the performance team, so most of my job centers around identifying performance problems in the browser and communicating those problems to the web developers and the browser team.












(Nolan with Todd Reifsteck and Rob Hwacinski of the Microsoft Edge Team)



One project I’ve been working on is “Performance Clubs,” where we invite web teams to come in and talk about their site’s performance. Usually these are Microsoft sites like Outlook.com and MSN, but sometimes they’re also external partners. When they come in, we do a deep performance analysis of the website using the same tools that we use to build the browser itself. Then we give performance advice to them so they can go back and make their websites faster. I also file issues reported by the site authors and write test cases.

The performance clubs are private for now. Not everyone wants to take the aspects of their websites that they’re not proud of and put them out on public display; it’s like airing your dirty laundry. There has been some discussion about maybe anonymizing and publishing the data, but it’s incredibly difficult to do without revealing the site that you’re analyzing. There’s been some recent controversy about public performance audits; it’s not always welcome.

#### How can browser vendors and framework authors collaborate more closely on web performance, given that it has been a heated discussion recently?

> “…the people who can provide the most value here are JavaScript library and framework authors. They’re in a position where they can be impartial and compare performance across browsers, which is extremely valuable to browser vendors.”

I think it’s important for web developers to understand why performance is such a touchy subject. Browsers don’t compete on API features — we stopped doing that when we agreed to implement web standards — but browsers do compete on performance. Speed is a huge selling point for a browser. Every browser claims to be the fastest, kind of like how McDonald’s and Burger King each claim to have the best burgers. Obviously they can’t both be right.

In general, browser vendors only speak publicly about what they do well. If you talk privately with someone who works on a browser team, they can easily tell you 50 things the browser does well and 50 things it doesn’t do well; they know them by heart. But publicly we tend to only talk about the stuff we do well, because there are business implications there.

For instance, when the WebKit team comes out with the [Speedometer](https://goo.gl/NLU9ch)benchmark or the [MotionMark](https://webkit.org/blog/6943/motionmark-a-new-graphics-benchmark/) benchmark, it’s no surprise that Safari wins. Similarly, when Microsoft writes a blog post about how we have a great JavaScript Engine, we tend to talk about [Octane](https://github.com/chromium/octane) and [JetStream](https://webkit.org/blog/3418/introducing-the-jetstream-benchmark-suite/). Surprise, surprise: we win on those benchmarks.

I think the people who can provide the most value here are JavaScript library and framework authors. They’re in a position where they can be impartial and compare performance across browsers, which is extremely valuable to browser vendors. Unfortunately I feel many of them could be doing better on this.

There’s a lot of interest in web performance today, and you see many JavaScript frameworks competing with one another on performance — [React](https://github.com/facebook/react), [Inferno](https://github.com/infernojs/inferno), [Preact](https://github.com/developit/preact), [Vue](http://vuejs.org/), [Svelte](http://svelte.technology/), etc. But when you look at their benchmarks, they’re often only testing in Chrome or _maybe_ Mobile Safari. Sometimes they don’t even specify which browser they test on, so you just have to assume it’s Chrome.

One framework that’s bucking this trend, which I really love, is [Ember](http://emberjs.com/). They’ve created their own benchmark, the [Ember Benchmark](http://emberperf.eviltrout.com/), and they sometimes go on Twitter and maybe [raise some eyebrows](https://twitter.com/stefanpenner/status/542160874950389760) by pointing out that Chrome doesn’t do as well on their benchmarks as Safari.

This is great feedback for browser vendors. Even if we don’t send public signals about how we feel about the benchmark, we may use it internally and work hard to make our browser better. I would love to see more cross-browser benchmarking and more recognition from JavaScript framework authors that it’s valuable to test across browsers. That’s the big thing I see missing right now.

Edge has pretty good browser market share; it’s improving anyway. I don’t think it’s safe to just ignore browsers because they have too low of a market share, especially because a lot of web developers have a very skewed perception of what the market share is. Windows is the dominant operating system in the world; it’s used by about [90% of all desktop users](https://www.netmarketshare.com/operating-system-market-share.aspx?qprid=10&qpcustomd=0). And Android is [the most popular mobile operating system on the planet](https://www.netmarketshare.com/operating-system-market-share.aspx?qprid=8&qpcustomd=1) by far.

If you just look at web developer conferences, though, you could be forgiven for thinking that the world is purely Mac, or that everybody is using Chrome, or that most people are carrying an iPhone. But the reality is far different. I would say web developers are doing a big disservice to their users if they live in that bubble and assume that everyone else is living in that bubble too.

#### What other hobbies or interests do you have outside of programming?

I play a little guitar and sing a little, mostly for myself. I have a YouTube channel where I post some of [my performances](https://www.youtube.com/watch?v=RNeueQf3bNY). I don’t perform publicly.

#### I’m really interested in e-sports. I spend a lot of time watching [Super Smash Brothers](https://en.wikipedia.org/wiki/Super_Smash_Brothers_Melee) tournaments or watching video game speed runs. Speed runs actually remind me a lot of browser performance. You’re trying to optimize this thing to go as fast as possible, and sometimes you’re cheating quite a bit, such as making your character glitch through a wall. Sometimes I find that a well-tuned website is like a well-tuned speed run — you cheat a bit to get ahead. It’s kind of funny to see the parallels.

#### Who are your programming heroes?

I really admire [D. Richard Hipp](https://en.wikipedia.org/wiki/D._Richard_Hipp), the creator of SQLite, which is arguably the most popular database on the planet. SQLite is a rigorous piece of software with 745 times as much [test code](https://www.sqlite.org/testing.html) as code. You could send that thing to the moon.

Richard Hipp is also something of a programming Renaissance Man; he’s implemented lots of interesting things. He wrote a whole version control system called [Fossil](http://fossil-scm.org/index.html/doc/trunk/www/index.wiki). He wasn’t happy with Git, so he wrote an entire version control system, and that’s the version control system used for SQLite.

If you look at SQLite source code, you’ll also find my favorite open source license of all time, which says “In place of a license, I offer you this prayer.” It’s really beautiful, like a poem.












(SQLite license file ♥)



And yet despite his success, Hipp is also incredibly humble. He never boasts in any interview. I find it inspiring to see someone who is so humble, and yet so proficient in the software world.











* * *







This project is made possible with sponsorships from [frontendmasters.com](https://frontendmasters.com/), [egghead.io](https://egghead.io/), [Microsoft Edge](https://www.microsoft.com/en-us/windows/microsoft-edge) and [Google Developers](https://developers.google.com/).



![](https://cdn-images-1.medium.com/max/1600/0*bMdgkbz1ZwgKR-Wp.png)

Our sponsors.



[Donate to support this project](https://opencollective.com/betweenthewires).

To suggest a maker you’d like to hear from, please fill out this [form](https://goo.gl/forms/XhR1IyLXJHNMljcp1).

You can also send feedback to [betweenthewires](https://twitter.com/betweenthewires) on Twitter.








