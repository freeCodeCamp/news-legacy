---
author: Vivian Cromwell
authorTwitter: https://twitter.com/viviancromwell
authorFacebook: none
title: "Between the Wires: An interview with developer and entrepreneur Guillermo Rauch"
subTitle: "I interviewed Guillermo Rauch, the founder of zeit.co. Zeit’s mission is to make cloud deployment simple, global, and real time. Rauch al..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*Q2YEyS0BkehpBQ7yfSxIMQ.jpeg
url: https://medium.freecodecamp.org/between-the-wires-an-interview-with-developer-and-entrepreneur-guillermo-rauch-1ce38774056a
id: between-the-wires-an-interview-with-developer-and-entrepreneur-guillermo-rauch-1ce38774056a
date: 2017-05-16T16:01:01.416Z
tags: [
  "Startup",
  "Technology",
  "JavaScript",
  "Tech",
  "Entrepreneurship"
]
---
# Between the Wires: An interview with developer and entrepreneur Guillermo Rauch







![](https://cdn-images-1.medium.com/max/2000/1*Q2YEyS0BkehpBQ7yfSxIMQ.jpeg)

(Credit to Vivian Cromwell, Fuji X-T1 )







_I interviewed Guillermo Rauch,_ _the founder of_ [_zeit.co_](http://zeit.co)_. Zeit’s mission is to make cloud deployment simple, global, and real time. Rauch also built_ [_socket.io_](http://socket.io/) _and founded two startups previously: LearnBoost and CloudUp._

_This article was_ [_originally_](https://medium.com/between-the-wires/between-the-wires-guillermo-rauch-2819177beedc) _posted on_ [_Between the Wires_](http://betweenthewires.org)_, an interview series featuring those who are building developer products._

#### Tell us a little bit about your childhood, and where you grew up.

I grew up in a little town in Argentina right outside of Buenos Aires. It’s a small residential community with very little internet access and very little in the way of acquiring a computer.

My dad was really into engineering in general and Star Trek, so he always wanted to buy new, cool things for the family. We got a computer when I was about seven. I actually still remember the first day we got it and I remember Windows 95 booting up. That’s when it all started.

#### What specifically got you into programming?

There were a couple things that happened early on. One was the early exposure to alternative operating systems. When I first heard of Linux, for example, it was very difficult to use.



![](https://cdn-images-1.medium.com/max/1600/1*RgTaOHeiq7rSxyeKXF949g.jpeg)

Guillermo, 12, explaining to Richard Stallman that vi > emacs



Programming really clicked for me due to my exposure to the terminals, and the very few number of steps that it took from writing a file, and then running GCC and getting the binary out.

There’s this idea that the shell itself is sort of a programming language as well, right? It all fits together very nicely.

> “I could actually extract so much excitement from these few characters on a black screen.”

I think that was like my first moment where I knew that programming was extremely exciting to me. I could actually extract so much excitement from these few characters on a black screen. Excitement with programming has a lot to do with that, because there’s so much negative feedback involved in the process, that the victories have to get you extremely excited. It’s the little things — like a test passing with a bunch of green dots on the screen — that got me really excited.

#### That seems to be the influence of [Hyper.app](https://hyper.is/), right?

Definitely. [Hyper.app](https://hyper.is/) to me is sort of a continuation of that idea.

Also, sometime early on I discovered open source through a lot of projects that were written in PHP MySQL. With PHP, I first got a taste of what it was like to get gigantic code base written by people that were far more experienced than me. When I was able to edit that work and get immediate feedback, I was fascinated.

#### Was MooTools your first major Open Source project that you contributed to in a significant way?

[MooTools](http://mootools.net/) is a collection of JavaScript utilities designed for the intermediate to advanced JavaScript developer.

I remember this really simple website that I was building for a music catalog. There were a bunch of rows each with three buttons on the right hand side: Inspect, Edit, and Remove. I wanted that remove button to just remove that row on the client side. I didn’t want to fetch the entire website again. So we ended up using a hidden iFrame that we could post to and then detect the iFrame call back event. Later on I discovered that this iFrame thing is hack. That is what got me really into MooTools.

That was my first really important open source role which led to my first job. I was 16 years old at this point, when I was named a core developer for MooTools.

Then, the following year, I got invited to Switzerland because a startup company had decided to bet on MooTools for all their front end applications code. One of the other core developers consulting for this firm, his name’s Aaron Newton, recommended me. I think this is why it’s so important to have people that bet on you early on.

A week later, they flew me out to Switzerland. I remember meeting the CEO at the train station. He was like, “wait a second. Is this kid lost? Are you really our new engineer?” I was like “yep, let’s go. Let’s get this done.”

Then, they opened an office here in San Francisco, and that’s when I decided to move on and start my own company, because why not?

#### Your first startup LearnBoost, produced so many open source projects and helped push the Node JS adoption in the early days, how did you do that, or was that a side effect?

[Learnboost](https://www.learnboost.com/) was my first startup, we wanted to help teachers manage their classroom in one place using digital grade book.

It’s interesting, because it is a side effect, but then a lot of side effects in start-ups become your main effects. This is a classic story you hear, where one of the features of the company became the biggest business in the company.

I think we started off with the intent of using Node. When we first started writing the code base, it was a mesh of one language for the backend and JavaScript in the front end. Then when Node came out, we decided to bet 100% of every line of code in JavaScript. Why not?

The caveat was that it involved using a lot of stuff that was just being developed, like one of the very first few versions of Express. Sometimes we would use early versions of software and find they were not good enough so then would build our own and open source it.

Open source was the only way that we could do that, because we were using a lot of open source internally. We were recruiting from the people that were creating these open source projects, and then we were giving back as a way to sort of fuel growth on that platform.

That’s also what we became known for, open source.

#### We’ve talked a lot about the good side with LearnBoost and Cloudup, do you want to share a little bit about the challenges you have faced?

Lots of challenges. To start, I was really passionate about building an education product, but as I just narrated my own story, I didn’t finish high school and I didn’t go to college.

So I think we were building a product that didn’t really embody the very way that I had built my career up to that point. If I had to build or recommend an education tool again, I’d actually recommend the ones that made me successful.

I learned almost everything from the internet. How I learned English is a great example. I learned by reading through a lot of the documentation that I found online, which was often only in English. So I had no choice but to learn to read it.

Learning to code is another example. You can learn to code on your own at home. You can get immediate feedback if you use the right tools. That’s the sort of the thing that I wish we had tried to build with the product for others. Not just make a general education tool.

Early on, we were asking teachers, “okay, what do you think about this seating chart? What do you think about this?” As opposed to I think the best start-ups have a way of telling everyone else, “okay, why don’t you try this? It’s a new way of doing things,” and sort of taking a risk with that, as well.

Going back to “how could I have made that better back then?” I would also try to encourage people that are learning to ask questions like: What do you do with all these things that you learned? How do you get paid and do this full time in the future?

I think for a lot of things that have to do with knowledge acquisition, you make a better return for yourself if you try to get it for free, and then you put your creativity on top, and then you put that back into the market. That’s basically 100% profit.

I think we can do a lot of this with open source too. We have to continue to find ways that people can learn and contribute to open source, and then make that a complete system. Not a system that’s based on hoping for a donation that might not actually ever come, but something that really gives that power back to the creator, based on its usage.

> “That is one of the things that we’re missing right now in the open source community. There have been people that have made vast contributions to the world that we’ve built everything on, but because of a certain set of decisions that they made, they haven’t been able to maintain.”

This actually ended up being the case for Open SSL. Open SSL, one of the most widespread, and most important pieces of infrastructure in the entire world. It was under funded, and full of security vulnerabilities.

#### Besides product-related challenges, were there any team or emotionally-driven challenges?

I think there are two kinds of emotional challenges. One is which you face directly — maybe you were trying to sell your product and you got denied because they went with your competitor, or maybe you got turned down by an investor. This type of challenge is very direct feedback of “oh, that went wrong.”

The other less subtle one, when you’re taking on these multi-year projects, is that there is no end in sight.

It could happen that tomorrow you get acquired for something that your peers would consider a ridiculous amount of money. It could happen that you have to spend twenty years solidly building a business, and then finding some sort of retribution for your co-workers and employees in the end.

It’s subtle and you’re carrying this emotional baggage as you’re constantly fighting an uphill battle, every single day. I think that’s what I sort of referred to when, maybe the idea that you were pursuing, is not completely aligned with your identity or vision of the world, but you feel it’s too late to change it.

I think for us, the great thing we did is, we didn’t feel it was too late to change it. We sort of said from one day to the next, this is our new focus. It’s difficult, and then you face a lot of the direct negative feedback, because all of your employees are like, “why? Why are we changing everything? I kind of liked what I was working on before. We were doing well.”

I think it’s all about trying to align the mission of the company and your view of it. This is also why it’s important to not be too attached to bad ideas. Sometimes it’s tricky, because there’s money involved. There’s other people’s money involved.

I think this is one of the big lessons for open source as well. You invest a lot in a certain solution, but you have to realize at some point it’ll exhaust its evolution, and it can’t grow any further. The smart thing to do is leave it alone, and start anew, start fresh.

#### Interesting. Obviously you were right back at it with ZEIT and HyperTerm so the first startup didn’t put you down in any way. I’m curious to hear, now that you’re in the middle of building it, what do you consider a successful long term outcome for ZEIT and HyperTerm?



![](https://cdn-images-1.medium.com/max/1600/1*H18xgGNRo9YE2nqjJuQY6A.png)



> “One of my dreams is that the next Facebook or the next Snapchat will be created by someone that has not have to gone through all this education or has had to develop all these connections and hire all these bright people. Really, it can be one girl in Africa. It can be a boy in Bangladesh.”

Our mission is to enable everyone in the world to deploy applications and services very easily. We think that the entire fabric of the internet is very, very difficult to grasp. There are so many layers and so many technologies and so much lingo involved from DNS to SSL to IP to TCP to HTTP to different ways of achieving performance. The way that we measure our success is obviously getting more people to put their work out there and be more productive by changing that stuff more frequently.

Our vision is that anyone in a company will be able to complete an entire product or experience and deploy by themselves. You give the power to one person, what otherwise would’ve taken an entire team of people. You give them the feedback within 100 milliseconds as opposed to something that used to take minutes or hours or weeks.

It took one person to create Facebook, and it was a fairly-educated man in a Harvard dorm, and then they took a certain number of years to achieve their first million users. You can see how that’s changing very quickly, right? The level of education of people that started the next big revolutions is not necessarily as high and the time it takes for them to get to a million users is lower each time. One of the things that we do particularly well is we take your deployment and we scale it on your behalf.

One of my dreams is that the next Facebook or the next Snapchat will be created by someone that has not have to gone through all this education or has had to develop all these connections and hire all these bright people to help scale the business or the technology for them. Really, it can be one girl in Africa. It can be a boy in Bangladesh.

That would be the dream scenario for us, giving that amount of power to the individual. It’s a power I think our industry and this technology have given us. Because it’s so hard to start from scratch and build the Trump tower.

#### Zeit has a very distributed team including your co-founders. Can you talk about your best practices when it comes to team productivity and communication? What tools do you use?

> “Distributed teams in my opinion are the only way forward because otherwise you’re missing out on all this amazing creativity and all this diversity that comes from people that are not with you in that same physical space.”



![](https://cdn-images-1.medium.com/max/1600/1*t3UFr8sntJi51plbPl4PJg.jpeg)

Zeit team and their largest customer in Europe



I’ll give you an example of what I think is the biggest advantage of distributed teams:

We launched Hyper.app, which I primarily worked on myself for about two weeks. Then I opened it to the world. What happened next will blow your mind. A week after we launched it, we already had 50 contributors that had landed pull requests. We had 100 plugins written on top of it.

I think something that helped with that was we made themes very simple to create. It was very rewarding to see that response because you’re creating the platform on top of which we will contribute a combination of Lego blocks.

Imagine the physical or in-person counterpart to such an endeavor? How do you coordinate 50 human beings around a project, around an office space? How do you recruit them so quickly? How do you even talk to them one-on-one or settle details of how they’re going to work and so on?

I think open source is showing us what this dramatic exponential rise in productivity can be. There’s no other way than doing it over the internet because physical collaboration is slow.

We also set up Slack, where everyone joined and started to exchange ideas. Again, this massive workforce of strangers assembled almost spontaneously and had all these tools to collaborate. To me it felt like it happened overnight. For me, I want to replicate that with my own company. I don’t want my ability to make really great products to be constrained by physicality. I don’t want to burden people with unnecessary protocols, and unnecessary routines that may be inconvenient to them.

Distributed teams in my opinion are the only way forward because otherwise you’re missing out on all this amazing creativity and all this diversity that comes from people that are not with you in that same physical space.

#### What is the biggest challenge your startup is facing at the moment?

I think there are a lot of challenges that have to do with the product education. The best thing to do is to not create a product that has every single feature for every single type of workflow out there. Instead we want to educate users on how to use the product in the best way possible.

Sometimes you get enthusiastic customers, perhaps really large customers, that maybe have different ideas about how to use the product or platform. For us, it’s about striking a fine balance between adding features over time, but retaining the simplicity and retaining the belief on what the best model is for API development. It comes back to saying no to a lot of things, even when it’s extremely tempting from a financial perspective.

#### Who are some of your programming heroes?

[Leslie Lamport,](https://en.wikipedia.org/wiki/Leslie_Lamport) number one. He is a computer science hero because the breadth and depth of his contributions is unmatched by anyone in our field. In my mind he is comparable to [Alan Turing](https://en.wikipedia.org/wiki/Alan_Turing), in that he opened a completely new field, namely of distributed systems. We are still working on grasping the size of his contributions and continue to study his ideas, specifically with recent works like Raft and Flexible Paxos . Ironically for this question, he[thinks](http://research.microsoft.com/en-us/um/people/lamport/pubs/state-machine.pdf) we put too much emphasis on programming **languages** when simple mathematical tools (sets, functions and basic logic) are sufficient to express any program.

[Dan Bernstein](https://en.wikipedia.org/wiki/Daniel_J._Bernstein) is unmatched in the field of cryptography and security. Extensive theoretical and low-level systems contributions, yet also known for tasteful, practical, approachable and widely-used software like Qmail.

I’m also a big fan of lesser-talked-about heroes behind software we use every day. [Junio Hamano](https://github.com/gitster), lead maintainer of git, comes to mind. Git was a very short term project by Linus which has been masterfully conducted ever since.

#### Moving to more general questions, what are some of your hobbies or interests outside of programming?

Programming is my main hobby. Besides that, I enjoy bodyweight fitness, also known as calisthenics, which is the exercise of your own body without body weights or gyms or things of that matter. It’s a form of meditation for me. It’s also a way of setting up almost unachievable challenges.

I have a Shiba Inu. Yeah, I learned a lot from my dog because he has this amazing life figured out for himself. He’s very zen. He’s a dog from Japan that has an amazing personality. I think there’s a lot that we do for them, but there’s a lot that we get from them as well, like a great appreciation for different life, I think.



![](https://cdn-images-1.medium.com/max/1600/1*CEIMwxWSvQwRZMj1y-gccA.jpeg)

Dei, so zen.



I’m also passionate about design, I’m always thinking about what little applications or projects I can create on the side that can have a tremendous amount of impact.











* * *











<iframe data-width="800" data-height="400" width="700" height="350" src="https://medium.freecodecamp.org/media/b3df5dcd0dc099c1ca67ceeaee248475?postId=1ce38774056a" data-media-id="b3df5dcd0dc099c1ca67ceeaee248475" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fupscri.be%2Fmedia%2Fform.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





[Donate to support this project](https://opencollective.com/betweenthewires).

This project is made possible with sponsorships from [frontendmasters.com](https://frontendmasters.com/), [egghead.io](https://egghead.io/), [Microsoft Edge](https://www.microsoft.com/en-us/windows/microsoft-edge) and [Google Developers](https://developers.google.com/).



![](https://cdn-images-1.medium.com/max/1600/0*bMdgkbz1ZwgKR-Wp.png)

Our sponsors.



To suggest a maker you’d like to hear from, please fill out this [form](https://goo.gl/forms/XhR1IyLXJHNMljcp1).

You can also send feedback to [betweenthewires](https://twitter.com/betweenthewires) on Twitter.








