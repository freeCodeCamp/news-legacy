---
author: Rajat Saxena
authorTwitter: https://twitter.com/rajat1saxena
authorFacebook: https://facebook.com/1544297445883632
title: "How I designed, developed, and deployed a chatbot entirely in the cloud"
subTitle: "It all started with a YouTube video I recorded few months back. In it, I talked about the importance of deliberate revision. This helps y..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*3LjbN07y5RZBvo1JYIBt9w.png
url: https://medium.freecodecamp.org/how-i-designed-developed-and-deployed-a-chatbot-entirely-in-the-cloud-a60614eb94f2
id: how-i-designed-developed-and-deployed-a-chatbot-entirely-in-the-cloud-a60614eb94f2
date: 2017-09-07T04:18:13.407Z
tags: [
  "Design",
  "Chatbots",
  "Artificial Intelligence",
  "Tech",
  "Web Development"
]
---
# How I designed, developed, and deployed a chatbot entirely in the cloud





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/5e8509539ebca09c9075004ad5360659?postId=a60614eb94f2" data-media-id="5e8509539ebca09c9075004ad5360659" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F5Zoddm5GPPQ%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



Revisebot in Action



It all started with a YouTube video I recorded few months back. In it, I talked about **the importance of deliberate revision.** This helps you retain things in your mind for a longer period of time, and gives you techniques to revise important projects. If you haven’t, please [watch it here](https://youtu.be/SvOzfgptqhM).

In the video, I talked about how frequently you should revise, what the heck is [the forgetting curve](https://en.wikipedia.org/wiki/Forgetting_curve), and why you should care.

I wanted to give you guys a proper tool, in addition to the video, so that you can revise better. Being a developer, my natural response was “Let’s write an app!”

But if you’ve read my other article about [why native apps are doomed](https://hackernoon.com/mobile-apps-are-doomed-i-repeat-mobile-apps-are-doomed-3cf80193819f), you know I was a bit reluctant to write a standalone app for this. I took a step back and analyzed the situation. I needed a back-end to store users’ data and a front-end to collect and show that data.

I wanted the user on-boarding to be as frictionless as possible. Forcing users to download a new app is hard. If I built a chatbot, it would serve that purpose and I wouldn’t have to convince anyone to download anything. I would also save some time since I wouldn’t have to build a standalone client app and go through app stores’ processes.

You can try the bot I built [here](https://blooming-escarpment-58368.herokuapp.com/).

Let’s cut to the chase and talk about the process. Read on to see how my chatbot went from an idea to a fully working product — entirely using cloud-based tools.

### Quest #1: AI and NLP

Natural Language Processing (NLP) and AI are integral parts of any smart chatbot. So, I knew from the start that I’d require AI and NLP to make my bot “smart” and something you could talk to. It should also understand what you are asking it to do. I come from a full stack development background and I have zero experience with Machine Learning, AI or NLP. But for this bot, all of these things were necessities.

Being a tech enthusiast, I always keep tabs on what tools and libraries the Biggies are launching. I was aware of [Wit.ai](https://wit.ai/), an online API, released by Facebook for enabling NLP in your apps and bots. I played around with it for a while but found it particularly hard.

I quickly searched for other alternatives and found [Api.ai](https://api.ai/). I played around with it and found it more developer-friendly, so I went with it.

Here’s what exactly you do with these ai APIs:

1.  First, you write down a probable conversation which can happen between your bot and a person.
2.  Based on that conversation, you create an exclusive flow-diagram (or something like that) which handles all the outcomes of the conversation.
3.  You program the Api.ai agent to handle all the pre-defined outcomes using its dashboard. It’s simple enough — once you learn it.

**Note:** You can call on custom logic, which resides in your secure back-end, if API.ai’s built-in handlers can’t handle your use case. In the case of Revisebot, I was storing each user’s learning history and calculating what topics the user should revise next. This required custom calculations and persistence mechanisms.



![](https://cdn-images-1.medium.com/max/1600/1*3LjbN07y5RZBvo1JYIBt9w.png)

Revisebot’s NLP using Api.ai



Api.ai also offers some pre-built agents, such as small talk and weather agents, which can answer users’ queries about weather and other topics. These are plug-n-play things which you can readily use in your chatbots.

Since Revisebot needed to handle custom use cases, I had to write some code. Time to churn out some JavaScript/Node.js code. Yay!

### Quest #2: Cloud Hosting

I am a long time user of [Digital Ocean](https://www.digitalocean.com), but it costs around $6/month at a minimum. Since I wasn’t hoping to make money off of Revisebot, hosting it on Digital Ocean didn’t make sense. I’d be losing money on a monthly basis.

**I needed a free cloud host for this project**. I knew Firebase offered free hosting (as I’ve used it in the past). I have also used [Open Shift](https://www.openshift.com) as well, for other projects (mostly [Laravel](https://laravel.com/)). But I thought it would be a great idea to Google some other alternatives, at least for the sake of Node.js.

That’s when I came across [Heroku](https://www.heroku.com/) and its free plan.

In no time, I learned that Heroku’s Node.js integration is awesome. So I read their docs and quickly spun up a Node.js app on their free dynamo. It was enough for my needs. Its only limitation was that it sleeps after a while, so the first API call might fail while the dynamo is waking up from sleep. But I adapted my chatbot to respond to such scenarios.

### Quest #3: MongoDB in the cloud

I had been contemplating learning some MongoDB. So I decided to use MongoDB as the database for my chatbot. A chat app is a good use case for MongoDB’s document-based storage system.

My plan ran into a little roadblock when I discovered that Heroku does not offer MongoDB integration for free. No worries — I went back to my friend Google and searched for a “Free MongoDB cloud.”

That’s how I came to know about [mLabs](https://mlab.com/), which offers free MongoDB instances in the cloud.

Their free plan is not recommended for production ready apps, but that’s OK. I’m gonna run my chatbot on the free plan anyway.

### Quest #4: Cloud IDE

My plan was to code the entire thing up in whatever free time I had after my full time job. Because of this, I needed the flexibility of coding from anywhere. So my developer workspace needed to reside in the cloud, which I could load up from anywhere I had internet.

I’ve been using cloud-based IDEs for quite a while and the experience is mixed. [Nitrous.io was awesome but they shut it down](https://www.nitrous.io/). :( After trying some online IDEs like [cloud9](https://c9.io/) and [codeanywhere](https://codeanywhere.com/), the one that I found most stable and developer-friendly was [Codenvy](https://codenvy.io). It offers workspaces which you can create or destroy at your own will.

So I created a new Ubuntu-based workspace in Codenvy and installed node, npm, git and curl right away. Codenvy offers a terminal as well, so Linux users feel right at home. My developer workspace in the cloud was all set.

Next, I **git-cloned** my project’s repository from Heroku, and set up the DB integration with mLab’s MongoDB instance using ._env_ files. As you can see in the screenshot below, _blooming-escarpment-58368_ was my Heroku Node.js project.



![](https://cdn-images-1.medium.com/max/1600/1*hpg2Wdi9l1fLt3oX5LaoYQ.png)

Coding revisebot in Codenvy.io



### Quest #5: Integrating the chatbot with Social Media APIs

The chatbot was supposed to work with Facebook Messenger and Slack. I would have to learn the developer APIs for both platforms and set up my development machine for testing the API calls. Luckily, [Api.ai](https://api.ai) also offers easy one-click integration with most of the social media platforms. You just have to follow their documentation to bring your chatbot to the specified platform.



![](https://cdn-images-1.medium.com/max/1600/1*blosw16HhjUGCvC6Bz98ZA.png)

Social Media Integration for Revisebot



As you can see in the screenshot above, I’ve integrated Revisebot with Facebook Messenger and Slack, as of now. This step won’t take long, believe me.

Using these tools, I was able to write, test and deploy the entire ecosystem of my chatbot (the DB, the application layer, the front-end and the AI agent) to react to users’ queries.

But there were still some pieces left in order to make Revisebot a complete, finished product.

### Quest #6: Source Code Management

Although I was the only developer working on this chatbot, I needed to store the code somewhere safe. Git was an obvious choice for source code and version control management, but [GitHub](https://github.com/) does not offer a free, private repository. Revisebot was not supposed to be an open-source venture, so I could not host the source code there. Additionally, as I was not using a local development machine, I couldn’t use any local git repo to store my code on.

Back in the day, I played around with [bitbucket.org](https://bitbucket.org/product). I had some idea that they offered a **free private repository,** but wasn’t sure if they still offered any such plans. I went to their site and found that they did. The rest is pretty self-explanatory.

### Quest #7: Graphic Assets

Design and graphics sit at the core of any digital product. I needed a logo, background images, and cover images for my chatbot’s Facebook page, Slack app store listing, and homepage.

I am not a designer by any means, so I needed some help. I had to choose the color palette and icons, mix shapes together to create a logo, and more.

Luckily, there is a helpful tool for this called [Canva](https://www.canva.com/).

It offers ready-made design templates for social media, YouTube, and logos which you can customize according to your needs. I created Revisebot’s logo, entirely in Canva, using free shapes and some creativity. I think I did fine.



![](https://cdn-images-1.medium.com/max/1600/1*Bu2w7ew1YC6gWzVhwksGEQ.png)

Revisebot’s Logo, built using Canva.com



I also used some of their free templates to create other visual assets for Revisebot like a Facebook cover image.

So that’s how I coded and deployed a fully working chatbot, which can help you schedule your revision, entirely in the cloud.

It costs me exactly $0 to run this service.

Let me know if you have any questions regarding my project.

*No local machines were engaged in the making of this chatbot.











* * *







If you liked this post, kindly give me some claps and follow me for more posts like this one. You should also subscribe to my YouTube channel, if you like developing digital things.

#### [Twitter](https://twitter.com/rajat1saxena)|[YouTube](https://www.youtube.com/channel/UCUmQhjjF9bsIaVDJUHSIIKw)|[Rayn Studios](https://medium.com/rayn-studios)

Till next time…








