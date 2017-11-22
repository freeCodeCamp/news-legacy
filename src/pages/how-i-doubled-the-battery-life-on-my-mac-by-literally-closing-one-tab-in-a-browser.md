---
author: Primož Cigler
authorTwitter: https://twitter.com/primozcigler
authorFacebook: https://facebook.com/10205340525104186
title: "How I doubled the battery life on my Mac by literally closing one tab in a browser"
subTitle: "Today I want to share a quick and easy hack that doubled the time-on-battery on my laptop...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*dZXvMSeVmswJhC6n41sywg.jpeg
url: https://medium.freecodecamp.org/how-i-doubled-the-battery-life-on-my-mac-by-literally-closing-one-tab-in-a-browser-d96f2c5374db
id: how-i-doubled-the-battery-life-on-my-mac-by-literally-closing-one-tab-in-a-browser-d96f2c5374db
date: 2016-02-17T09:40:58.864Z
tags: [
  "Web Development",
  "Apple",
  "Productivity",
  "Life Lessons",
  "Self Improvement"
]
---
# How I doubled the battery life on my Mac by literally closing one tab in a browser



![](https://cdn-images-1.medium.com/max/1600/1*dZXvMSeVmswJhC6n41sywg.jpeg)



Today I want to share a quick and easy hack that **doubled** the time-on-battery on my laptop.

It is so easy to do once you know where to look.

I spend most of the time on my laptop in the browser. This is mostly because I read stuff, stick on social media or develop websites. I use Chrome for this, I rarely open any other browser — most of the time for testing only.

Chrome is generally known not being energy efficient app, so it is a trade-off, but I find it much better (especially for dev) than anything else.

For quite some time now I started to notice that the battery is not lasting as long as it used to when I bought this laptop a year and a half ago. It is normal that it is losing its power over time. But then one day about 2 weeks ago, when I was lying ill in my bed, I decided to check what is draining my battery so fast and if I can fix it.

Fortunately the OS X comes with the Activity Monitor, which also gives you the overview which apps put most impact on your battery life.







![](https://cdn-images-1.medium.com/max/2000/1*jyqZUpAeyky4R__u17In5g.png)

Activity Monitor







If you sort the list by column _Avg Energy Impact_, you will find the most troublesome apps. In my case Google Chrome. You can solve the problem easily by quitting the app, but as I mentioned, this was not viable in my case, as I want to use Chrome.

The screenshot above was taken at the time I am writing this and it showing the “fixed” Chrome. **By the time I went to analyze it for the first time, the _Avg Energy Impact_ value for Chrome was well over 100, around 140**.

#### So, how did I manage to cut it down to about one third?

It was quite simple. I literally had to **close one single tab** in Chrome, which was using lots of CPU.

My toolbar in Chrome looks like this:



![](https://cdn-images-1.medium.com/max/1600/1*gSEMiCKnrfv0GqE6ZqfXmg.png)



I have couple of pinned tabs which I want always open and then come the tabs that “_come and go”_.

There is one not-so-well known tool in Chrome, that allows you to analyse how much resources the **individual tabs consume**. It is called **Task Manager** and you can find it in **Menu > More Tools > Task Manager**.



![](https://cdn-images-1.medium.com/max/1600/1*TZVAsQTukJ-e8fKjSfJrdQ.png)

Where to find Task Manager in Chrome



When opened, it will reveal more fine-grained details about CPU and RAM spent within Chrome.



![](https://cdn-images-1.medium.com/max/1600/1*S-clN-DWtvEWEoaJ7utjGA.png)

Chrome Task Meneger



What you’re interested in is the CPU — this is what is draining your battery.

> Find the tabs that are constantly greedy for your CPU and kill them with fire!

To my case. I had the currency exchange rates (USD to EUR) opened all the time. It was [this page](http://www.xe.com/currencycharts/?from=EUR&to=USD&view=1M). And look at this, when I have this page opened and pinned:



![](https://cdn-images-1.medium.com/max/1600/1*Fy5van6rRHkJBPKTEAh46g.png)

Tab XE.com is sooooooo CPU intensive (the tab was inactive when I created the screenshot)



It was obvious choice. I can live without pinned tab about exchange rates, if that makes my laptop alive for twice the time.

If you feel that your laptop battery is struggling because of the Chrome, check out the Chrome Task Manager. Kill the most greedy websites with fire and notify their developers. They are probably doing some dirty stuff in JavaScript which is draining your battery like hell.











* * *







_You might follow me on_ [_Twitter_](https://twitter.com/primozcigler)_, but we both know Twitter is very noisy. So you can_ [_leave me your email_](http://eepurl.com/bLlBLj) _and I will occasionally send you stuff I find useful._








