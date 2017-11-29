---
author: freeCodeCamp
authorTwitter: https://twitter.com/freeCodeCamp
authorFacebook: none
title: "Transparency in Action: Free Code Camp is Now Open Source"
subTitle: "We’re thrilled to announce that Free Code Camp is now fully open-source. Now you can fork our code base and use it to set up an education..."
coverSrc: https://cdn-images-1.medium.com/max/1600/0*hUUtRVv9N6KVf8-F.jpg
url: https://medium.freecodecamp.org/transparency-in-action-free-code-camp-is-now-open-source-9dae1985d925
id: transparency-in-action-free-code-camp-is-now-open-source-9dae1985d925
date: 2014-12-30T07:08:29.519Z
tags: [
  "Open Source",
  "Web Development",
  "JavaScript",
  "Social Media",
  "Technology"
]
---
# Transparency in Action: Free Code Camp is Now Open Source

We’re thrilled to announce that Free Code Camp is now [fully open-source](https://github.com/freecodecamp/freecodecamp). Now you can fork our code base and use it to set up an educational community of your own. If you notice a bug or think up a way of improving Free Code Camp, you can now take action directly by submitting a pull request.

### Our Code

I originally built Free Code Camp in Ruby on Rails, because I was comfortable with it. But it’s been clear for a while now that JavaScript is the future. New tools like Node.js and Express.js have made it possible to move to a fully JavaScript stack, and that’s precisely what lots of schools and companies are doing. A big part of Free Code Camp is eliminating noise and helping busy people focus on learning one opinionated set of tools. Since we were learning Full Stack JavaScript, a non-JavaScript codebase sent the wrong signal. So I scrapped the Rails app, learned enough asynchronous Node.js to be ‘dangerous’, and started building.



![](https://cdn-images-1.medium.com/max/1600/0*hUUtRVv9N6KVf8-F.jpg)



_The closet office where I built Free Code Camp Version 0.1.0._

I looked at Meteor.js and Mean.js (this was right before the Mean.io fork), and even considered just using Angular.js with a Google App Engine backend. But ultimately, I decided to go with the [Hackathon Starter App](https://github.com/sahat/hackathon-starter). With its authentication suite and API integrations, it’s practically a framework in itself.  
I launched Free Code Camp a few days later, with nothing more than five coding challenges and a Hipchat room. Slowly people started to come by. Miraculously, many of them stayed!



![](https://cdn-images-1.medium.com/max/1600/0*ysHoX0ttspHq8bPU.png)



_What Free Code Camp looked like when we launched about 10 weeks ago._

Free Code Camp was my first Node.js app. I showed the code to one experienced JavaScript developer who kept shouting “What the hell were you thinking here?” as he flitted through the codebase. As hacky as it was, he conceded that since it was serving thousands of page views a day without incident, it wasn’t a total embarrassment and I should go ahead and open source.  
So we installed Helmet.js for added security, moved the API keys to a .env file, and purged them from Git history. And voila, the exact same code Free Code Camp uses in production is now freely available here.

### Our Infrastructure

We were using just one (free) Heroku dyno, but since we occasionally exceed 20 concurrent sessions, we kicked it up to two, for $35 a month. We serve assets through S3 and have a small AWS instance for our Discourse-powered forum. We pay a combined $240 per year for a Vimeo Pro account and a Screen Hero account, and $60 for a single Google Apps for Business team account. This brings the total cost of all our infrastructure to less than $2,000 per year.

### Our Volunteer Camp Counselors

We’re a community of busy people learning to code. We call ourselves “Code Campers”. Some of us Code Campers are even busier than others, because we volunteer our time to actively improve Free Code Camp. Our team of “Camp Counselors” hangs out on our chat room and our forum. We do our best to welcome newcomers and answer various coding questions. Our single goal is to maximize the number of busy people like us who are able to work their way through our challenges, build a portfolio of projects for nonprofits, then get a coding job.



![](https://cdn-images-1.medium.com/max/1600/0*sbqy-3D41NFUGDUv.png)



_Some of our patient, enthusiastic Camp Counselors._

Nobody gets paid anything. If we eventually accept funding or make money through a job board, we’ll figure out a fair, transparent way to distribute equity to our volunteers or start paying them. Most of our communication takes place through our chat room and our frequent pair programming sessions. We’re geographically distributed, but we meet in person when possible. Our Camp Counselors propose new features and content, discuss the priorities and details, then pair up and start building. This blog post, for example, has been edited and improved upon by several Camp Counselors.

### Our Metrics

In less than 3 months, we’ve grown to nearly 5,000 Code Campers. But what we’re really proud of is not the quantity of our Code Campers, but the caliber of their work ethic. A bunch of people with work, school, kids — and [even grandkids](http://blog.freecodecamp.com/2014/11/I-am-a-Grandma-and-my-coding-career-is-just-getting-started.html) — are investing their precious time toward learning to code. We completely overhauled our curriculum three weeks ago, and since then, we’ve had hundreds of people work through our hour-long challenges. We’ve made all these metrics publicly available [here](http://www.freecodecamp.com/stats). As a side note, if you’re interested in analyzing our (anonymized) data, or helping us better visualize it, we’d love to facilitate this.

### Our Future

Don’t expect any stealth initiatives or grand unveilings from us. We’re more interested in evolving out in the open, like the internet did, than making an explosive debut, like the atomic bomb did. We believe the Open Source refrain that “With enough eyeballs, all bugs are shallow”, and welcome any ideas you have for making Free Code Camp a better, more efficient place for busy people to learn to code.

In closing, I’d like to compare Free Code Camp’s philosophy with that of Ubuntu. Not the Ubuntu Linux distribution that powers much of the internet, but its namesake, the Ubuntu philosophy of Southern Africa. Ubuntu is a Zulu word that translates roughly to “I am what I am because of who we all are.”



![](https://cdn-images-1.medium.com/max/1600/0*mIa-Fp-HD_MuaV0s.jpg)



_Leymah Gbowee, the Liberian peace activist and Nobel Peace Prize laureate responsible for Ubuntu’s most widely accepted English-language definition._

Free Code Camp is what it is because of who our Code Campers are. Busy people helping each other learn to code. And that’s who we’ll continue to be going forward.











* * *







_Originally published at_ [_blog.freecodecamp.com_](http://blog.freecodecamp.com/2014/12/transparency-in-action-free-code-camp.html) _on December 29, 2014._








