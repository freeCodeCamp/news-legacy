---
author: Shakeel Mohamed
authorTwitter: https://twitter.com/_Shakeel
authorFacebook: https://facebook.com/10152893016933435
title: "Reflecting on 1 Year of Zen Audio Player"
subTitle: "Today marks one year since I made the first commit to the Zen Audio Player (ZAP) project on GitHub! After reading Robby Russell’s post ab..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*0Um-aajCPexvEbOI-sot8A.png
url: https://medium.freecodecamp.org/reflecting-on-1-year-of-zen-audio-player-57ee759365ee
id: reflecting-on-1-year-of-zen-audio-player-57ee759365ee
date: 2016-03-25T17:49:40.136Z
tags: [
  "Programming",
  "Open Source",
  "Music",
  "Design",
  "UX"
]
---
# Reflecting on 1 Year of Zen Audio Player

Today marks one year since I made the [first commit](https://github.com/zen-audio-player/zen-audio-player.github.io/commit/262d8a23b59860c936fbb07731edf838cb587adf) to the Zen Audio Player (ZAP) project on GitHub! After reading [Robby Russell’s post about Oh my Zsh](https://medium.com/@robbyrussell/d-oh-my-zsh-af99ca54212c), I’ve realized ZAP has a lot of potential going into year 2\. Over the past year the project has grown in ways I would’ve never imagined. To date we’ve had 20 contributors, and most have been in the past 4 months!



![](https://cdn-images-1.medium.com/max/1600/1*0Um-aajCPexvEbOI-sot8A.png)

A current render of the website, made by [Yuri Brunetto](https://github.com/YuriBrunetto).



### A Brief Timeline of Development

#### Birth

Last year, I had a very simple idea: hide the video player on YouTube videos and just listen to the audio. I thought it would be something fairly easy to do, and it was. I slapped together a working version of a website in a couple of weeknights while procrastinating on my [senior project](https://medium.com/@_shakeel/hacker-s-first-logo-designing-in-powerpoint-7eeeb6925097). My “innovation” was setting the height of the YouTube player small enough so only the controls were visible.



[![](https://cdn-images-1.medium.com/max/1600/1*UAYPDlzIEZN0BUAv0UTRSQ.png)](https://github.com/zen-audio-player/zen-audio-player.github.io/commit/262d8a23b59860c936fbb07731edf838cb587adf)

This was the entire website: 1 heading, 1 text box, 1 button.



Life was great for a few months. I was listening to [progressive trance mixes](https://www.youtube.com/results?search_query=progressive+trance) at work without being embarrassed by the borderline-NSFW thumbnails/slideshows on most of these videos. In my spare time on nights and weekends I started adding features. Then all of a sudden one day, YouTube redesigned their video player.

#### iFrame API

To [workaround YouTube’s new unfavorable UI](https://github.com/zen-audio-player/zen-audio-player.github.io/issues/33) (which auto-hides the player controls), a great deal of JavaScript was required to manipulate the YouTube iFrame API in the way we wanted. The changes we made to work with YouTube’s iFrame API (instead of direct HTML embeds) still exist in ZAP today. We’re [currently working](https://github.com/zen-audio-player/zen-audio-player.github.io/pull/153) on replacing most of this code using [Plyr](https://plyr.io/). [Sam Potts](https://github.com/SamPotts) has been tremendously helpful by implementing features for us and we hope to continue collaborating with him.

#### Contributors!

Out of the blue one day in October ZAP received our first contributor [pull request](https://github.com/zen-audio-player/zen-audio-player.github.io/pull/40) from [Matt Stannett](https://github.com/BeigeBadger)! Before Matt, the repo was actually on my personal GitHub account. After some time, I transferred the repo to the [ZAP GitHub organization](https://github.com/zen-audio-player). Working with him on a few changes motivated me to spend more time working on ZAP. His initial involvement inspired me to post the project on [Up For Grabs](http://up-for-grabs.net/) leading to many more contributions than expected.

#### New Features

It still amazes me that some features have been implemented solely by contributors to ZAP. Some of these are:

*   Rendering the YouTube video’s description (with proper hyperlinks)
*   YouTube search with autocompletion
*   Showing search results, and playing the audio for that video without leaving the ZAP website

### Tools

GitHub has been really great about promoting [free tools for open source projects](https://github.com/integrations). The following tools have been tremendously helpful and will continue to benefit ZAP in the future:

*   GitHub Pages — nothing beats free hosting for our static site!
*   [Gitter](https://gitter.im/zen-audio-player/zen-audio-player.github.io) — our awesome chatroom that’s integrated with our other services
*   [Travis CI](https://github.com/zen-audio-player/zen-audio-player.github.io/) — somebody’s gotta run the tests
*   [Code Climate](https://codeclimate.com) — a great automated code quality analyzing service
*   [TrackJS](https://trackjs.com/) — useful for tracking & reporting user JavaScript errors
*   [Google Analytics](http://www.google.com/analytics/) / [Keen.IO](https://keen.io/) — so we can now how users are using the site

### Thanks

I am deeply grateful for the contributors we’ve had so far, and I look forward to collaborating with more in the future.  
I want to especially thanks the following individuals:

*   [**Matt Stannett** ](https://github.com/BeigeBadger)— the first contributor, without him I might’ve abandoned the project months ago!
*   [**Ian Spence**](https://github.com/ecnepsnai) — he bought the domain name! [ZenPlayer.audio](https://zenplayer.audio/)
*   [**Monica Cheung**](https://github.com/monicacheung) — she’s contributed the most code to the project so far, and added the best feature: YouTube search!








