---
author: Joe Hanson
authorTwitter: none
authorFacebook: none
title: "How much to build and how much to buy: powering chat and messaging apps"
subTitle: "When you’re building a chat application of any kind — from mobile group messaging and multiplayer in-game chat, to customer support and c..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*OXWXXpMEqJja5J21hmD1fw.png
url: https://medium.freecodecamp.org/powering-chat-and-messaging-apps-the-current-landscape-ad0657140b94
id: powering-chat-and-messaging-apps-the-current-landscape-ad0657140b94
date: 2017-11-18T16:48:20.745Z
tags: [
  "Tech",
  "Web Development",
  "Cloud Computing",
  "Startup",
  "Design"
]
---
# How much to build and how much to buy: powering chat and messaging apps







![](https://cdn-images-1.medium.com/max/2000/1*OXWXXpMEqJja5J21hmD1fw.png)







When you’re building a chat application of any kind — from mobile group messaging and multiplayer in-game chat, to customer support and chatbots — choosing the right platforms, frameworks, and protocols can make or break your business.

That’s because deciding whether to build or buy a chat app isn’t binary. The days of making a decision to do-it-yourself or buy from a vendor are gone.

The question now is **how much do I want to build, and how much do I want to buy?**

Between open-source, IaaS, PaaS, SaaS, SDKs, APIs and Microservices, businesses have never had more options for **how** they want to build their chat products. And the spectrum of choices only continues to widen.

As cloud computing becomes more accessible and affordable, innovative new companies solve specific problems. Devices become more powerful. If businesses want to keep up, they must understand the vendor landscape along with the benefits and challenges of each option along the spectrum.

As a result, there are many mistakes that developers and organizations can make when choosing chat or messaging platforms for their application.

In this post, we’ll discuss a number of different chat application types and look at the different platform options for powering and delivering messaging apps. We’ll also discuss challenges that can arise from making certain decisions throughout the development cycle, like scalability, time to market, and other differentiators.

### Choosing a chat service provider: current landscape

There are a wide variety of options across the build vs. buy spectrum. You have open-source on one end (build) and fully built out (SaaS) solutions on the other (buy). With hundreds of options in between, all with different pros and cons, we’ll seek to give you an idea of the landscape in a simple chart:



![](https://cdn-images-1.medium.com/max/1600/1*5pSZtT1kQVHNijWUaikmqA.png)



#### Open-source protocols

The furthest on the build side are open-source protocols like [WebSockets](https://www.pubnub.com/learn/glossary/what-is-websocket/) and [HTTP Long Polling](https://www.pubnub.com/blog/2014-12-01-http-long-polling/). These are simply protocols, which means that you manage everything to make them work. That includes spinning up your back-end infrastructure, maintaining it, building new SDKs to support new devices and languages, and everything else.

These are great for prototyping, building small applications, or getting your hands dirty with the full stack. But most real-time messaging services offer free versions with all the back-end infrastructure included. And you’ll need to gear up for some serious headaches when it’s time to scale.

#### Open-source frameworks

Open-source frameworks are a smidge past pure build, but still require you to maintain the infrastructure on your own. For chat use cases, open-source frameworks tend to rely on a community of developers to update the framework and maintain the client SDKs.

#### Infrastructure-as-a-Service (IaaS)

These are the big dogs — the cloud infrastructure service providers like AWS, Digital Ocean, Azure, Bluemix, and Google Cloud. They actually end up powering a lot of the PaaS, messaging solution providers, and SaaS products that we’ll talk about next.

In a nutshell, you can use open-source protocols with an IaaS to launch your app. The infrastructure is taken care of, but there’s still a lot of building to do yourself.

#### Platform-as-a-Service (PaaS)

PaaS providers like [PubNub](https://www.pubnub.com/?utm_source=Syndication&utm_medium=Medium&utm_campaign=SYN-CY17-Q4-Medium-November-13) and [Firebase](http://firebase.com) offer hosted solutions for building chat applications. They include not only the infrastructure, but also the APIs for building chat features. Building and customizing the application requires engineering resources, since their SDKs are open. But security and maintenance of the service (the back-end and the client SDKs) are handled by the PaaS.

#### Chat frameworks

These framework providers are almost as close to buying as you can get, but still require a fair amount of engineering. The big difference between these providers and PaaS is that they provide more of a black box approach — you have less freedom to customize the APIs and infrastructure. Often they’ll provide the UI as well.

PubNub [ChatEngine](https://www.pubnub.com/products/chatengine/?utm_source=Syndication&utm_medium=Medium&utm_campaign=SYN-CY17-Q4-Medium-November-13) offers a more open and extensible framework, for example. [Layer](http://layer.com) would fall closer to the black box SaaS chat solutions, but still offers a fair amount of customization options.

#### SaaS

Lastly, the furthest over on the buy side of the spectrum, SaaS companies provide a fully-built out solution that requires a small amount of engineering. UI, integrations, and infrastructure are all handled by the SaaS provider. Leaders in the space include [Intercom](http://intercom.com) and [Zendesk Chat](https://www.zendesk.com/chat/).

### Questions to ask yourself when choosing your chat service provider

As with all the other parts of your critical infrastructure, the key questions still remain the same:

*   Do you run your own service, or do you utilize a hosted service?
*   How much does it cost upfront? How much will it eventually cost at scale?
*   Is the hosted service reliable, secure, and scalable?
*   How mission-critical is chat to your application?
*   Who on your team will maintain it? Do they have the skills to make it scalable and secure?
*   Where does the service store the data, and who has access to it?

### Choosing your chat service provider: open-source vs. hosted



![](https://cdn-images-1.medium.com/max/1600/0*FRYhZWS5NkRf-GMZ.png)



When it comes to software development, everyone knows that what works in the lab is not guaranteed to work in the wild. That’s because the wild presents all those challenges you may not think about, or may not even know about yet.

When it comes to choosing the right technology to power your chat, there are a number of build and buy considerations to look at. We’ll look at security, scalability, reliability, customization, and business reasons for selecting your stack in the lab vs. the real world.

#### Infrastructure

In you’re going down the open-source route, you’ll choose your tool, install it, and orchestrate the operation of that tool.

From there, you’ll start thinking about the infrastructure side of things, like load-balancing and redundant nodes. These are requirements for launching an app at scale. This is when you may tap an IaaS provider to handle the back-end. Even so, it will still require heavy engineering, including:

*   Spinning up multiple testing, staging, and production environments
*   Twelve factor
*   Coordinating provisioning for those multiple environments (like a Kubernetes)
*   Deploying your application code to the environments
*   Setting up service management, system monitoring, and Ops alerting
*   Creating a load balancing scheme (like Nginx or HAProxy)
*   Figuring out how to segment data by channels or topics (like Redis [pub/sub](https://www.pubnub.com/learn/glossary/what-is-publish-subscribe/) with [Socket.io](https://www.pubnub.com/learn/glossary/what-is-socketio/))
*   Finding a store and forward solution for signal recovery, like in-memory caching
*   Implementing a method to detect which client to connect to which data center and port
*   Figuring out which channels/topics to send/receive for a given client
*   Deciding which platforms and languages you’ll support
*   Creating universal data serialization (JSON)
*   Customizing code to detect data uplink that works across device types
*   Determining Quality of Service and level of loss, and developing a data recovery scheme (or settle for “fire and forget”)
*   Deciding which APIs and capabilities you’ll need, then building them (presence detection)

That’s a laundry list of considerations. But if you’re choosing the open-source route, these are the things you’ll have to consider once you’re outside the lab and scaling your app.

#### Security

For chat, security is paramount. We’re increasingly sending more confidential and mission-critical information via chat applications, from financial details to chatbot commands. Ensuring that you have full control over access and encryption is imperative.



![](https://cdn-images-1.medium.com/max/1600/0*CCahFHHZJiwWZxXi.png)



Every successful chat service provider offers different levels of security. Here are the most important features that must be included in any hosted-service provider:

*   End-to-end encryption with TLS for in/outbound packets and AES for packets
*   Support fine-grained, token-based access control. Token-based access control allows you to grant and revoke access to any messaging channel.
*   Compliance is key, especially for verticalized chat applications. The hosted-service provider should be certified for HIPAA (healthcare), SOC 2, GDPR (EU), Data Shield, and SafeHarbor (EU/US).

For those who choose not to utilize a hosted-service provider, the following are additional security considerations that you’ll have to handle on your own:

*   Purchasing a TLS certificate, then distributing and managing that certificate securely
*   Figuring out how to protect channels and topics (not covered by TLS)
*   Building an authorization systems for users
*   Considering AES and/or RSA encryption for payloads (not covered by TLS)
*   Complying with legislative security policies (like SafeHarbor or HIPAA)

#### Scalability

For chat apps with thousands of active users chatting simultaneously, and ones that continue to grow, expertise on scale is a major challenge. Both open-source and some hosted-service providers deal with this. But when it comes to scale, hosted solutions mitigate the risk of app-breaking scalability issues far greater than open-source options.

For hosted solutions, there are a couple indicators that your service of choice will scale with your app growth.

**Multiple global points of presence:** Chat messages should be globally replicated, so that if messages are dropped, a backup message will be delivered. This also increases the performance of your application, as every chat user doesn’t have to connect to the same data center (especially those halfway across the earth).

**Uptime SLAs:** Uptime SLAs hold hosted-service providers accountable, and they should credit you if those SLAs are not met based on the terms.

For the do-it-yourselfers, you need to consider:

*   A custom built load testing service that can simulate a realistic audience
*   Creating update protocol & continuously modifying your network to support new products/services
*   Paying for Socket server costs, QA systems, and hot failovers
*   Ongoing Ops monitoring and additional headcount required

#### Reliability

There is so much competition for messaging applications. With the app store a click away, any issue a user encounters can lead them to an alternative. Reliability is a key factor in making your app sticky. When vetting hosted service providers, here are a couple key indicators of reliability:

*   Data replication for multiple points of presence and automatic failover to ensure that messages are delivered 100% of the time (and actually in realtime)
*   Message “catch-up” in case of connection dropout (if a user is in a tunnel, for example, they’ll receive the message when they come out the other side)

If using an open-source solution, you’ll have to also handle:

*   Building a load distribution system
*   Identifying error messages
*   Building a log system
*   Knowing when faults occur and developing a playbook of responses
*   Building service management (like PagerDuty)
*   Developing multi-datacenter deployment

### Open-source vs. hosted

When you look at the major considerations, you can see that building out a realtime messaging system on your own poses a lot of risks. It is a great option for smaller chat applications. But once you begin to grow, security, reliability, and scalability challenges can add up.

Most hosted-solution providers also allow a free-forever sandbox pricing tier. This allows you to develop your app without paying, and once you’ve grown to a certain size, you pay as you grow. For those companies looking to move fast and not wanting to worry about all the intricacies of networking and infrastructure, hosted-solutions are the way to go.

If you enjoyed this article, please give it a clap so more people see it. Thanks!

_Originally published at_ [_www.pubnub.com_](https://www.pubnub.com/blog/building-chat-the-current-landscape/)_._








