---
author: Barry Jones
authorTwitter: https://twitter.com/brightball
authorFacebook: none
title: "No such thing as “real programming”"
subTitle: "I read an article earlier today called The self-hating Web Developer that I found on Hacker News and it bothered me. It resonated with me..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*cnk8ZVIr4IvrElwj2GBGaA.jpeg
url: https://medium.freecodecamp.org/no-such-thing-as-real-programming-c30b98c51d8
id: no-such-thing-as-real-programming-c30b98c51d8
date: 2016-02-07T07:48:44.728Z
tags: [
  "Programming",
  "Web Development",
  "Books",
  "Learning To Code",
  "Technology"
]
---
# No such thing as “real programming”







![](https://cdn-images-1.medium.com/max/2000/1*cnk8ZVIr4IvrElwj2GBGaA.jpeg)

Photo credit: [Software Diagnostics Institute](http://www.dumpanalysis.org/Library)







I read an article earlier today called [The self-hating Web Developer](http://joequery.me/code/the-self-hating-web-developer/) that I found on [Hacker News](https://news.ycombinator.com/item?id=9910146) and it bothered me. It resonated with me as something that I professionally internalized over my career but it bothered me because Joseph encountered personal financial difficulty for both himself and his family due to the struggle. For that reason (and insomnia), I feel compelled to write this as reference to refer to for anybody else who may be struggling with the same thing.

### Credentials, right to have an opinion, etc

I’ve been programming since 1998, professionally since 2000 so as of this writing about 15 years of professional experience. I have a bachelors and a masters degree, programmed professionally (not dabbled) in 9 different languages, worked heavily with the big 4 relation databases and a couple of NoSQL databases. I manage infrastructure and work extensively on the DevOps side of things. I built single page apps before jQuery or Prototype existed when nobody knew JSON was. I’ve taught a [programming class](http://www.brightball.com/classes/ruby-on-rails-and-postgresql-intro-to-advanced-in-3-weeks), speak regularly about programming, architecture, databases and fraud prevention.

And all of that is important because the reason for every single drop of it is…PHP.

Yes. That PHP. The terrible language. The language that everybody loves to hate on. The language that the author of that post earned a living with, provided for his family with and felt inadequate because of it.

I went through the exact same thing, reading about how bad it was despite miraculously delivering projects for clients and it got old. Really, really old.

### Real Programming?

Systems programmers telling web developers that their job is easy or that it somehow doesn’t count is akin to an aerospace engineer telling a civil engineer that their job isn’t “real engineering.”

Programming is a broad field. There are many different problems to be solved and many different ways of solving those problems. Every language has tradeoffs that somehow tweak its viability for that problem case. Every discipline has different factors involved.

If I’m doing data analysis with R the problems that I’m solving will be very different than if I’m a cloud sysadmin and different still than an enterprise sysadmin. I’m going to use different tools. I’m going to have different constraints. I’m going to have different people paying me to deliver a result that meets their needs.

Some areas are very broad, where you need to account for a number of different intermingling factors. Others are very deep where X years of experience with a language becomes a true measure of your ability to wield it properly.

Web development is broad, especially contract web development. You’re not only pulling together server side and database code, but you’re also handling the HTML and CSS for the design. The javascript for the interactivity. You’re working back and forth with clients to translate their vision and their goals into a deliverable in an amount of time that lets you stay in business by earning a profit with randomized budgets. This isn’t exclusive to web development, it’s just an illustration of what happens when people focus on one part of what you do while ignoring everything else.

You’ve got to be able to communicate with a lot of different types of people. The degree to which you care about presentation and polish vs “it works” increases dramatically. You have to factor in hosting considerations, email deliverability, upgrade paths and security patches for a constantly increasing list of people. Odds are good many of those clients top priority will be reaching customers, so you’re going to need to know about SEO and how to structure all that HTML well to be read by crawlers and hopefully screen readers too. You’re going to need to know how to properly use webmaster tools, analytic tools, build XML sitemaps, organize them and update them. You’re more than likely going to need to be able to build reports from SQL or aggregate data from a couple of cloud services. If the site gets traction, you’re going to learn about performance tuning, scaling and identifying bottlenecks in a hurry.

That’s just going to be based on the client requests. If you care at all about your clients, you will also have to learn how to tell them tactfully where the problems with their plans are going to be and give them revisions without offending them or insulting their intelligence. You will probably have to tell them about things they are going to have to do for security that they don’t want to spend money on. You are going to become the first person they call when somebody starts telling them they have to pay a monthly fee for PCI compliance scans.

But wait…there’s more. You’re also going to basically become a project manager because when you have multiple clients on a growing list they aren’t going to wait patiently for you to finish your current list of to-dos for another client until their turn rolls around. You’re going to learn triage. You’re going to learn recruiting because after a while you won’t have a choice but to enlist some help to handle concurrent requests.

Then you’re going to learn about employment contract law assuming you’d somehow been winging it to this point. If you didn’t know about intellectual property law to begin with, eventually you’re going to learn about that too if for no other reason than the words “work for hire.” Got an unhappy client that doesn’t want to pay for all the work you just did for them? Congrats, now you can learn about collections and/or small claims court.

All that’s assuming you’re just working by yourself and not factoring in all of the details that come with working on a programming team. Communication, documentation, task management, learning curve/hiring pool/training/turnover based decisions, conventions, testing, deployment processes and build pipelines.

But hey…[what do I know](http://www.brightball.com/business/what-exactly-happened-to-brightball-for-hire)? You get back to writing that device driver. C programming is “real programming.” All that other stuff I just described that you don’t have to worry about…child’s play.

### Knowing how much you don’t know

Did you see that jab I took at device drivers? I don’t write device drivers so it’s easy for me to make a generalized statement deriding what goes into doing that job.

The longer you are in this field the more you will realize the impossibility of knowing it all. It’s simply too broad of a field. You’ll [freeze your own productivity](http://www.brightball.com/development/code-is-the-cure-for-developaralysis) trying to weigh so many factors in every programming decision. Ideally, you find something that interests you and pursue it because you enjoy it…which helps you gain a deeper knowledge of it.

Which brings me back to PHP. I’ve barely touched PHP for the last 2 or 3 years. My entire career prior to that was very heavy in PHP. Now I do a lot of infrastructure work, Ruby on Rails, some Go and C#. I’m also a regular speaker at [UpstatePHP in Greenville](http://www.eventbrite.com/o/upstatephp-6881540935). I haven’t once been to a meetup group for any of the other languages. It’s not a bias against those languages, simply that the UpstatePHP group tends to have the most interesting topics. We talk PHP but more so we talk “web developer” stuff…which keeps the subject matter very broad and interesting (for us pretend programmers that is).

PHP got me into every single thing that I do because I didn’t have to invest a lot of time into learning PHP. PHP let me quickly do what I needed to do to interact with the database, present the information to the browser and get out of the way.

It enabled me to focus on all of that peripheral stuff AROUND web development in a way that I’ve never experienced with other languages. It let me spend a lot more time with the database and as such, I’ve got a lot of experience with databases. It let me spend a lot more time on communication. Web developers deal with a lot of people oriented problems that don’t easily fit into an algorithm and effectively communicating is a critical part of that.

When I started using CakePHP I wasn’t conscious of exactly how much of my time I began investing into doing things “the CakePHP way” instead of just getting the things done. When I needed to performance tune a slow application with a lot of traffic it forced me to go well beyond the language limitations and get into server configurations, caching systems, byte-code optimization, disk I/O reduction.

The natural save-refresh loop for development let me iterate my way to solutions and experiment with different things very quickly. It made AJAX/SPA work significantly easier at a time when my other choice would have been to develop with Java and work through a save, compile, deploy, cycle, refresh workflow that alone could turn a one hour problem into an eight hour problem.

PHP enabled me to learn a lot more because it removed my focus from PHP and kept it aimed squarely at the business problems that needed to be solved. That has value. Really, just about anything that you can do that people will regularly pay you enough to justify spending your time on it has value. It doesn’t really matter who does or doesn’t think it’s hard. It’s economics. Supply and demand.

Not to mention, PHP scales down better than most “real languages.” That’s why PHP hosting is dirt cheap. You can fill up a terabyte hard drive on a server with 512mb of RAM and every single bit of PHP code will run when it gets requested. It might not all run at the same time, but it will run and that’s a huge reason that PHP hosting is so inexpensive and abundant. That makes it a perfect fit for so many mild-to-moderate traffic sites and projects. That and the virtual maintenance free nature of deploying it keeps projects from perpetually draining your time after the fact.

### Every language has a purpose

This might come as a shock if you like to bash other languages, but languages exist and become popular because they fill a need. The popularity comes because they do it well. It might not be the best solution for your use case, but for somebody else…it probably was. If you haven’t learned it by now, a huge part of your job as a programmer is weighing trade offs to deliver solutions on time and on budget.

As much as I give Node.js and Java a hard time for completely different reasons both also come with great strengths that fill the needs of a lot of people. There is a reason Wordpress wasn’t written in Java. There is a reason that there isn’t a clear cut framework winner for PHP. There’s a reason high concurrency systems aren’t written in Ruby. There’s a reason that none of those Go success story blog posts talk about how quickly they got a full stack website to market.

### Hold your head up

PHP is definitely not the right solution for a lot of problems in programming. I even gave a presentation [outlining a lot of the reasons WHY](http://www.brightball.com/php/what-s-the-right-php-framework) it’s not. It is a tool that effectively solves a lot of problems in a short period of time. Depending on the your needs, it could be a down right bad solution.

But don’t ever let somebody tell you that it isn’t “real programming” because anybody who would be willing to claim such a thing is illustrating exactly how little they know about what you’ve managed to make a career out of doing. If somebody’s ego feels the need to beat that drum, let them but don’t ever let it drag you down.

You’ve got clients waiting.











* * *







_Originally published at_ [_www.brightball.com_](http://www.brightball.com/development/no-such-thing-as-real-programming)_._








