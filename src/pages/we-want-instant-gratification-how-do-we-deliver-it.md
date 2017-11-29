---
author: Joe Hanson
authorTwitter: none
authorFacebook: none
title: "Your users crave instant gratification. So how do you give it to them?"
subTitle: "We want it, and we want it 10 minutes ago...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*rs56mlq8ASjz8lgATs8Gdg.png
url: https://medium.freecodecamp.org/we-want-instant-gratification-how-do-we-deliver-it-ce3c4067a9ac
id: we-want-instant-gratification-how-do-we-deliver-it-ce3c4067a9ac
date: 2017-02-16T19:12:37.480Z
tags: [
  "Startup",
  "On Demand",
  "Uber",
  "Cloud Computing",
  "Tech"
]
---
# Your users crave instant gratification. So how do you give it to them?







![](https://cdn-images-1.medium.com/max/2000/1*rs56mlq8ASjz8lgATs8Gdg.png)







We want it, and we want it 10 minutes ago.

We want it with no friction, no barriers, and most importantly, without talking to a human. If we don’t get it, we feel anxious. And this feeling has crept into our daily life.

There’s a reason why listicles outperform long form. We want all the information now. There’s a reason we won’t even watch a YouTube video if it includes a 30-second ad. We want that video now. When our Uber or our Halal Guys Chicken Platter is late, or we are unable to track the driver in realtime, we lose it.

Why? It’s embedded deep in the human psyche. As [Neil Patel puts it](https://www.entrepreneur.com/article/235088):

> In most psychological models, humans are believed to act upon the “pleasure principle.” The pleasure principle is basically the driving force that compels human beings to gratify their needs, wants, and urges. These needs, wants, and urges can be as basic as the need to breathe, eat, or drink. But they can be as complex as the “need” for an iPhone 6 or some other cool new product.

### Beyond the Human Psyche and Into Business

If not already there, businesses are beginning to pivot towards instant gratification, the emotion that comes from being delivered a service or piece of information when the user demands it across every vertical and industry.

**Deliver the data, the product, or the experience when the user requests it.**

Take the on-demand economy. The masses are armed with smartphones and munitioned with applications. And as a result, that accessibility to technology has made the on-demand economy an appendage of how we operate on a daily basis.

You can literally have somebody else do anything for you with the push of a button. Do your laundry. Deliver your groceries. Pick up your child from school. Take your dog out to poo. The on-demand economy has revolutionized urban centers and rural areas alike, across the globe. And it’s only growing as new apps flood the market to solve problems that are both minuscule and mission critical to life.







![](https://cdn-images-1.medium.com/max/2000/1*CgIyVrTDPknQamUpn0ZYXQ.png)

Me, hailing a fake Uber







The on-demand economy is just one example of businesses driven by the sensation of instant gratification, but it’s not just about delivering a good or service in a short period of time. It transcends that. It’s about delivering **something** (like an experience or bit of information)when the user requests it.

This is huge. One of the promises of the Internet of Things is the instantaneous delivery of data from devices to other devices or end users. You can know immediately if your door is locked, your sprinklers are leaking, or [your baby is crying](https://www.wired.com/2016/10/robo-cradle-will-rock-baby-sleep/). In a nutshell, successful businesses of the present and future are built on the sensation of instant gratification.

The next question, how will businesses deliver it, and what does the future hold?

### The Underlying Technology That Drives Instant Gratification

Delivering instant gratification is no easy task, and requires a combination of underlying technologies, especially when it comes to scaling the application or service. However, as the technologies improve and more players enter the game, it’s getting easier, and more innovative.

There are three major pieces — the UI/UX, the serverless infrastructure, and the streaming. What will the users interact with, and how do we deliver the experience to them?

#### UI/UX

A beautiful and easy-to-operate user interface, and the experience it creates for the user is a driving force for instant gratification. There’s been a massive surge in innovative, beautiful APIs and platforms to build interactive UI/UX for web, mobile and Internet of Things apps. And even better, the best ones play nice with other APIs and platforms, creating a beautiful harmony of interworking functions. These APIs and platforms are what the user consumes and craves more of.

In looking at UI, take [Mapbox](https://www.mapbox.com/products/) for example. Mapbox is an incredibly flexible mapping platform that not only provides beautiful “pixel-perfect vector maps,” but a slew of mapping and geolocation APIs to power directions, navigation, geohashing, geocoding, and more. At a developer’s fingertips is a powerful, scalable solution to do just what their homepage does _make maps that move you_.



![](https://cdn-images-1.medium.com/max/1600/1*hKxHNdDUSpCafzmF3qxhZA.png)

Mapbox makes mapping APIs to empower developers to make maps that move you (was that a mouthful?)



Less sexy than Mapbox, but equally important, are a steady stream of APIs and services that power the user experience. You may not know that they’re there (and if you don’t, that means they’re doing a good job). These services power a small piece of the user experience, and focus on just that.

[Stripe](https://stripe.com/) handles billions of dollars a year, and offers a wide-variety of online payment APIs. Stripe is the reason that when you get out of your Uber or Lyft, your fare is paid. And your food delivery is covered.



![](https://cdn-images-1.medium.com/max/1600/1*8BmvIHwnYQveHM6Efbbf8g.png)

Paying for stuff has never been easier



A seamless user experience, with a delightful user interface, to fulfill the instant gratification, is the result of dozens of interworking APIs, services, and platforms. Some you see, some you don’t, but all contribute to the instant gratification.

#### Realtime Streaming / Data Push

Beautiful user interfaces are nothing without good data. By good data, I mean getting the data where it needs to go, when the user wants it. It’s the glue that holds everything together, and the means behind delivering the instant gratification — instantly.







![](https://cdn-images-1.medium.com/max/2000/1*_5wIOq83yzfp-AUw9i0ccg.png)

Lots and lots of messages being sent incredibly fast







At its core, this is done by sending and receiving small packets of data (most commonly JSON) through data centers from one place to another. And it’s important to note that data streaming is bi-directional, not one-way, so data flows seamlessly between any number of publishers to any number of subscribers and vice versa. You can break it down into two types of realtime interaction:

**Streaming:** the instantaneous transfer of data as it changes, in realtime. This could be streaming geocoordinates of a driver or package and publishing the location data on a live-updating map, an alert confirmation an order or proof of purchase in the form of a push notification or web alert, or an updated weather reading on an IoT sensor.

**Data Push:** sending a single message to any number of subscribers. This could be sending chat messages between users or triggering a device action, such as turning on a connected lightbulb via a mobile app.

Data streaming and data push is really at the heart of instant gratification. Users crave that updated data is it changes, and these protocols, and the infrastructure behind it, is what delivers it.

There are both open-source and hosted solutions for doing this. The main difference is that with open-source options, you’ve got the core protocol, but you’re responsible for servers, failover, device support, security, and more. Some examples include [WebSockets, REST,](https://www.pubnub.com/blog/2015-01-05-websockets-vs-rest-api-understanding-the-difference/) and [Socket.IO](http://socket.io/).

Hosted-solutions provide the data streaming protocols (and in some cases, additional realtime functionality), but also handle the infrastructure behind the scenes. Some examples include [PubNub](https://www.pubnub.com?utm_source=Syndication&utm_medium=Medium&utm_campaign=SYN-CY17-Q1-Medium-February-16) and [Pusher](https://pusher.com/).

#### (Serverless) Infrastructure



![](https://cdn-images-1.medium.com/max/1600/1*RLcs2_X35uaPyLVbkOqcYA.png)

It’s not that you don’t NEED servers. It’s that you don’t have to THINK about those servers.



The infrastructure of the instant gratification engine is at the base of everything. It’s the cloud providers and the data centers. It’s the logging, provisioning, routing, load balancing development, deployment, and everything in between. And paramount to each of these areas is security and reliability. And this is now an expectation of apps everywhere today.

A key aspect of this is the affordability of it, and it’s why so many on-demand companies are able to come out of nowhere and disrupt a market. Services like Amazon EC2 let you rent servers and pay only for what you use. It may seem like a no-brainer, but this gives companies big and small enterprise grade servers, affordable no matter what size their company is.

And this is what’s led to the rise of _serverles_s, which is a bit of a misnomer in itself, but has been all the buzz lately. Serverless isn’t servers not being needed anymore, but rather developers not having to worry about servers, because they can outsource all that to a 3rd party and focus on developing, not sysops. As a result, we have teams able to build globally scalable apps at a fraction of the speed, without having to invest headcount and resources into infrastructure.

### Looking Forward — Artificial Intelligence

Still in its early days, but guaranteed to be a big player is the growing adoption of AI, and how it can enhance instant gratification. Right now, we’ve got easily accessible AI that act as a [personal assistant, coordinating meetings via email](https://x.ai/how-it-works/), so users don’t have to play email tag and wait hours or days to schedule a meeting.







![](https://cdn-images-1.medium.com/max/2000/1*lLqpQBZZgQyTPYoclQIpNA.jpeg)

HAL 9000 is here to help you buy new shoes, not kill you.







But AI will continue to advance and become a core part of the on-demand economy, and delivering instant gratification. IBM Watson is rolling out dozens of easily accessible innovative APIs to process inputs and deliver outputs in seconds. Watson, for example, can [analyze a conversation for user sentiment and respond accordingly](https://hackernoon.com/3-ways-to-level-up-your-chat-app-with-ibm-watson-d60513d6d71d#.49otsskcp).

Taking humans out of the loop on tasks that are simple, but require the end user to wait, will be huge going forward. Expect chatbots and virtual assistants first, and more advanced AI services (Amazon Drones anyone?) further down the road.

So the question is, what will we deliver instantly next?








