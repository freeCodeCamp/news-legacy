---
author: Vikram Rangnekar
authorTwitter: https://twitter.com/dosco
authorFacebook: none
title: "How I Built a Serverless Startup"
subTitle: "Let me cut right to it, Serverless is a buzzword. But it’s also a great way to refer to a massive change in how we build software. Yes, t..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*5vxLWV8PDC7ghDGqqPijCA.jpeg
url: https://medium.freecodecamp.org/how-i-built-a-serverless-startup-387fc6f61064
id: how-i-built-a-serverless-startup-387fc6f61064
date: 2017-06-20T15:18:36.850Z
tags: [
  "Serverless",
  "Startup",
  "Programming",
  "Web Development",
  "Tech"
]
---
# How I Built a Serverless Startup







![](https://cdn-images-1.medium.com/max/2000/1*5vxLWV8PDC7ghDGqqPijCA.jpeg)







Let me cut right to it, Serverless is a buzzword. But it’s also a great way to refer to a massive change in how we build software. Yes, there are still servers involved, we haven’t gotten rid of those. The difference is that you don’t concern yourself with them. Serverless is about focusing on your code not the infrastructure that it runs on. You’re leasing just enough computing power to do your job when you need it.

> Serverless computing is the ability to call from a vast pool of resources. Lease the right amount of resources to do your job at the moment you need it. And hand it back as soon as you’re done.

I discovered Serverless computing back in 2008, when Google released a product called App Engine. We were struggling with infrastructure for our startup and App Engine looked interesting. We ended up building our entire product “Socialwok” on it. It was then I first realized how great an advantage it is to build products using Serverless tech.

Things have come far since then and we are moving into a Serverless future. Not having to concern yourself with managing infrastructure helps you move faster and be more creative. I was so convinced about this that I wrote a whole book to preach the power of managed infrastructure.

[https://www.amazon.com/How-Build-Future-powered-software-ebook/dp/B01N580GJQ](https://www.amazon.com/How-Build-Future-powered-software-ebook/dp/B01N580GJQ)

To take this idea further I decided to build a Serverless startup. A product that consumes very little resources and will scale to millions of users if need be. When going serverless there are a few options you can pick from. Amazon Lambda and Google Firebase plus Cloud Functions are the two popular options. I chose to go with Google as I’m more familiar with their tech.

The product I built [Bell+Cat](https://bellpluscat.com/) is a tool to help you get organized. Think of it as simpler spreadsheet. I wanted to keep this product free and accessible to everyone. If a million people decided to use it, then it should cost me very little to serve them.

To make this happen I decided to use Google Drive to store the users data. It’s proven secure, dependable and is compliant with all the things people may need. Also it’s nice knowing your data is somewhere familiar. Google Drive gives everyone 15GB free of storage so [Bell+Cat](https://bellpluscat.com/) is a great way to make more use of it. I wanted to ensure a very high level of security. To achieve this I designed it such that your data only flows between Google Drive and your browser. And encrypted at all times. This makes it way more secure and I don’t have to worry about storing any sensitive user information.

To host the application I choose Google Firebase Hosting. A pretty great product that uses Google’s CDN networks to serve the app to anyone in the world in the fastest way possible. I love that it takes one command “firebase deploy” to launch a new version of [Bell+Cat](https://bellpluscat.com/) in seconds. There is very little else I had to do.

As soon as the app started gaining users, I began getting feature requests. One of the more popular requests was for a way to share the [Bell+Cat](https://bellpluscat.com/) file with others or embed it on their own website. This feature required me to handle some backend computation. In a traditional way, this would have required me to run a server but in this case I used Cloud Functions. This is a true Serverless infrastructure and is well integrated into Firebase. Cloud Functions allows for small snippets of code to execute. This trigger can be any event like request from browser. And you’re only charged tiny fractions of a cent for each run. This works out to about 40 cents for a million runs. It’s important to remember there are no servers for you to manage here not even virtual ones.

Anyone building software is familiar with the process of breaking down a larger problem into small parts. With Cloud Functions each part only runs when it triggered and you only pay when it does. I’d like to think that Serverless will help us use our computing resources in a more efficient way. And we will need less servers than we would have. With tech taking over everything, needing less servers should be good for the environment in the long run. Thinking serverless helps us build better products with smaller teams. Snapchat which runs on Google App Engine. They have spoken about how they don’t have anyone managing servers within their team. This is very unusual for products at their scale.

> “If I have seen further it is only by standing on the shoulders of giants.”  
>  — Isaac Newton

Making good tech choices can help your idea in so many ways. Like in the case of [Bell+Cat](https://bellpluscat.com/) it’s allowed me to keep the product free and accessible to anyone who needs it. It also allowed a single developer to continue to focus on the core product and be very productive. Going Serverless on the Google Cloud gives [Bell+Cat](https://bellpluscat.com/) so much for free. Planets fastest networks a very high level of security, sophisticated computing infrastructure managed by lots of very smart people. And for me the most important benefit of all that as I end this article and go to bed, someone else will be making sure my code keeps running.

[**Bell+Cat - A simple organizer in your browser**  
_A simple and free tool to get you organized. Saves to Google Drive. Secure and private. Use templates or import from an…_bellpluscat.com](https://bellpluscat.com/ "https://bellpluscat.com/")[](https://bellpluscat.com/)








