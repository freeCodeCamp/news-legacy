---
author: Elliott McNary
authorTwitter: https://twitter.com/ElliottMcNary
authorFacebook: none
title: "Adventures in NodeJS"
subTitle: "I built an app a couple of weeks ago after going through FreeCodeCamp’s Front-End curriculum and wanted to write an update as I head into..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*S9lOOozk-9WPFLnCSsF_ww.png
url: https://medium.freecodecamp.org/adventures-in-nodejs-d3d1f85a9d3e
id: adventures-in-nodejs-d3d1f85a9d3e
date: 2016-01-22T09:57:53.412Z
tags: [
  "JavaScript",
  "Nodejs",
  "Learning To Code",
  "Technology",
  "Design"
]
---
# Adventures in NodeJS







![](https://cdn-images-1.medium.com/max/2000/1*S9lOOozk-9WPFLnCSsF_ww.png)







I built an app a couple of weeks ago after going through FreeCodeCamp’s Front-End curriculum and wanted to write an update as I head into NodeJS-land. I was finally able to obtain my Front-End certificate, which I am very proud of, but the excitement quickly wore off once I jumped into the backend side of things.

Learning NodeJS has been incredibly difficult so far. There’s no point in trying to sprinkle it with fairy dust. The move from the front-end of primarily using JQuery and some basic JS techniques, to the backend with plain ol’ Javascript and hundreds of callbacks showed me that I had no clue what I was doing.



![](https://cdn-images-1.medium.com/max/1600/1*O3uO1TQlhbi-qUxdOHCo_A.jpeg)

Me trying to learn NodeJS



NodeJS requires a fundamental understanding of Javascript. I definitely didn’t have that when I started trying to learn it. I had to go back to watching hours of YouTube videos explaining callbacks, the event loop, closures, scope, etc…

I started to get a fair amount of understanding, but would still get lost after tons of callbacks. I was using learnyounode and couldn’t even get past the first problem without looking for a solution.

I started consuming an incredible amount of MEAN Stack tutorials to try and get the basic ideas of using Express for routing and Node. I built no less than 4 different To-Do apps, 2 reddit clones, 1 Twitter clone, and 2 chat apps, before I realized I wasn’t really absorbing what was going on. I definitely wasn’t mindlessly following instructions, but they assumed I knew too much about Javascript.



![](https://cdn-images-1.medium.com/max/1600/1*Xn-SnhpZniQFjxpUJqIwqA.jpeg)



I started watching a series on TheNewBoston’s YouTube channel that really helped me get the fundamentals down. I was going to try and make another reddit clone, until I realized that I should learn with something I care about, the Soundcloud queue app I built.

I stopped watching things and started reading through documentation. I followed getting started tutorials to try and understand the fundamentals a bit more.

I’ve frequently talked about the feeling of getting something to “click” when programming, and this time I had the same feeling. It’s a time you’ll never forget because your adrenaline is pumping and you can see some light. When I was able to setup my first database with key-value pairs, have events push things to the database, and then send the JSON to a route that I made was incredible. It was late and I was fist pumping around my room like a lunatic.



![](https://cdn-images-1.medium.com/max/1600/1*sXgGtNHK2GgsUBc7ndEQQQ.jpeg)



From there I started to gain some confidence and kept pushing myself. I worked on finding, sorting, and incrementing my existing documents in MongoDB. I realized I wanted a live feed so I started looking into Socket.io.

I think the problem with the tutorials I was consuming before, was that I never really learned _why_ I was doing things. I was always just doing them and not really thinking about it. It’s incredibly important to know why you’re doing what you’re doing.

Instead of googling something that started with “How do I…”, I started searching for the why and trying to figure out what’s actually going on. My searches started to look more like “What is a refresh token in OAuth?” or “What does serialize and deserialize do in Passport.js?”.

When I made that switch I really started to learn.

It’s also very important to keep pushing yourself. If you have something that you want to make, build it. There is always a way to do something, it’s just up to you to figure out (unless of course it’s an API limitation or something…then you just need to get a bit hack-y :). If you don’t know how to authenticate users, try to learn. If you don’t know how to create an RESTful API, learn! It’ll take a ton of time, but once it clicks you’ll be ecstatic.

I was so in the zone last Sunday I was working until 5am when the Seahawks started playing here in Melbourne. It was a 14 hour coding-binge. I’ve really never had that much enjoyment and focus with anything before. It was a crazy feeling.



![](https://cdn-images-1.medium.com/max/1600/1*BvLBslEylPcsjanQ3Grwcw.jpeg)



I’ve finally figured out (well sort of) how to deploy this with Heroku and it’s live. There is now a feed showing the songs that are being queued on the site, as well as a live artist feed in the top right showing the artists being searched now across the site. I have also implemented a Top 10 ranking for the Top 10 songs queued all time (well, since launching the feature).

The Random 20 is still there for all of those who use it to find new music. And thanks to a suggestion on my [last post](https://medium.freecodecamp.com/building-an-app-outside-of-your-curriculum-7b76aa881d52), I’ve enabled users to log in with their SoundCloud accounts and like songs.

Learning Node and Javascript properly is going to be a long journey, but I have patience. Three months ago I didn’t even know what a variable was.

You can follow my adventure on [Twitter](http://twitter.com/ElliottMcNary) as well.








