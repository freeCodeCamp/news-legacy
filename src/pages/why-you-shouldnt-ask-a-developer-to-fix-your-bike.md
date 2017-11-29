---
author: Andrew Burmistrov
authorTwitter: none
authorFacebook: none
title: "Why you should never ask a developer to fix your bike"
subTitle: "I used to work as a system administrator. I spent my days repairing PCs, doing backups, and restoring deleted emails that had suddenly be..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*Pl320OpAF3mO0Ln_KaBqmA.jpeg
url: https://medium.freecodecamp.org/why-you-shouldnt-ask-a-developer-to-fix-your-bike-336be286fc37
id: why-you-shouldnt-ask-a-developer-to-fix-your-bike-336be286fc37
date: 2017-02-12T15:25:51.408Z
tags: [
  "Tech",
  "Design",
  "Life Lessons",
  "Technology",
  "Programming"
]
---
# Why you should never ask a developer to fix your bike







![](https://cdn-images-1.medium.com/max/2000/1*Pl320OpAF3mO0Ln_KaBqmA.jpeg)







I used to work as a system administrator. I spent my days repairing PCs, doing backups, and restoring deleted emails that had suddenly become very important. But sometimes I got really weird requests. Like fixing a microwave. Or changing a light bulb in the women’s bathroom. One day I someone even asked me if I was good with blenders.

That’s the way people tend to see tech people. Yes, we know stuff: our stuff. And sometimes we’re also guilty of deluding ourselves into thinking we’re good at other tech-related stuff. But not all tech-related stuff is our stuff. Take bicycles, for example.

If you want to repair a bicycle, you have to know how it works. And if you know how it works, you can easily **draw** a bicycle. Most people are confident they know how a bicycle works. And yet, if you ask them to draw a bicycle, their drawings may look like this:







![](https://cdn-images-1.medium.com/max/2000/0*3LFFumO8u7VyKlhc.png)







Scientists call this an illusion of knowledge. Our brain more readily convinces us that we know something than it lets us admit that we don’t. National Geographic made a [whole episode](http://www.dailymotion.com/video/x2aiyo7_what-you-dont-know-brain-games-episode-09_school) about this phenomena where **90% of participants drew bicycles unrealistically.**

In his famous project [Velocipedia](https://www.behance.net/gallery/35437979/Velocipedia), Gianluca Gimini pushed it even further. he asked different people to draw a bicycle and then created 3D-models, based on their sketches:



![](https://cdn-images-1.medium.com/max/1600/0*Xu87dF-p4VQiJUBM.png)



So, 90% of people don’t know how a bicycle operates. And yet…

In both aforementioned examples (National Geographic and Velocipedia project) participants were people with general knowledge (many were students). No specific criteria. This is where I got lucky.

Recently we’ve been training a [neural net](http://ai.icons8.com/), whose sole purpose was to recognize icons, sketched by people. We sent an email to our user database asking our customers to draw all kinds of things: cars, houses, trash boxes… and bicycles.

And our audience consists of:



![](https://cdn-images-1.medium.com/max/1600/0*6u-YsiKTNg06-mbJ.png)



Half of the people, who we asked to draw a bicycle were developers. Now the question stands: **will 90% of bicycles still be unrealistic, or will there be any improvement given the fact that half of the audience are developers?**

### Overview

I asked my friend, an engineer and avid biker (told you I was lucky) to help me analyze 200 drawing of bicycles that we then put into 4 different categories:



![](https://cdn-images-1.medium.com/max/1600/0*ZFKC57KLCwIOpsbg.png)



**Not rideable:** it’s usually a very primitive drawing of two wheels and a frame, attached the way that prevents wheels from rolling at all.

**Ride by rolling:** these bicycles can roll, but can’t turn. Or, sometimes, be sat on. So these bikes are for very straightforward people, who have no time to sit.

**Rideable (more or less):** these have small issues like no pedals/chain or redundant structures of frame.

**Totally rideable:** people really knew what they were drawing there.

Overall 76% drawings were unrealistic, not 90%.

> Developers draw bicycles that are actually rideable slightly more often.

Before we jump to conclusions, however, there are a few important factors that could affect this number.

### Constructed Drawing vs. Prepared

Before asking my engineer friend for help with analyzing the drawings, I asked him to draw one. Unprepared and receiving no hints. Here’s how it went:



![](https://cdn-images-1.medium.com/max/1600/1*CglH10bv1CzZ84O_kQXRqA.gif)



Take a look at how he doesn’t use some prepared mental shortcuts for elements, but constructs the bicycle. It is a **constructed drawing**.

The lines may be irregular and proportions may be messed up, but that’s not important. You’ll see that these bicycles were also constructed:



![](https://cdn-images-1.medium.com/max/1600/0*_QBQuxw7KWOxdAza.png)



On the other side, there are quite a few designers among our audience (~30%). Their drawings are very accurate.



![](https://cdn-images-1.medium.com/max/1600/0*j9L0pxfsHdRGBRQd.png)



These are **prepared drawings**. Fortunately, only a very small portion of all drawings seemed like prepared ones. So I could conclude two things:

*   It does not affect overall numbers that much
*   30% of our audience is designers, yet only a small portion of drawings were prepared. I suppose not many designers are able to draw a bicycle from memory. By the way, judging by this [experiment](https://icons8.com/articles/how-good-are-designers-at-following-references-a-fiverr-experiment/), even if you give them a reference, it may not be enough.

### Other factors

There are few more factors at play here:

#### This was an uncontrolled experiment

Drawings were not restricted by time and there were no observers — people could google for a reference. But judging by the number of unusual bicycles, not many of them did that. Even when given a chance, people still prefer to invent:



![](https://cdn-images-1.medium.com/max/1600/0*IEPzTqXr3gi2n11I.png)



> _“A single designer could not invent this many new bike designs in 100 lifetimes. And this is why I look at this collection in such awe.”_ — **Gianluca Gimini, Velocipedia**

### Country



![](https://cdn-images-1.medium.com/max/1600/0*YlnX8VkUSM1ne5F4.png)



Bikes are more popular in some countries than in others. But only one of our top 5 traffic countries (Japan) is on the [list](http://top10hell.com/top-10-countries-with-most-bicycles-per-capita/). I’d love to see how good people are at drawing bicycles in the Netherlands, where there are more bicycles per soul than horses in the Mongol army.

### Conclusion

With all the factors mentioned — plus statistical faults — the number of people who draw bicycles unrealistically is **5–10% lower among developers** than in general.

This is a big stretch, though, because there are so many factors at play, such as the general popularity growth of bikes during last years, gender specifics ([92% of developers are men](http://fusion.net/story/115998/survey-says-92-percent-of-software-developers-are-men/)). Yes, I’d like to think that developers are savvy enough to draw realistic bicycles, but the numbers aren’t dramatic enough to really draw that conclusion.

So I’ll end this article just as I started it. With my own example.

I’ve repaired hundreds of PC’s, configured many network devices. I’ve never repaired a single bike in my life.

So after watching hundreds of drawings of bicycles, I decided to draw one myself. Not to copy it, but to actually construct it in my head, from scratch. No references and mental shortcuts.

Here it is:



![](https://cdn-images-1.medium.com/max/1600/1*ygyL5MnmC-w-7uup57deuQ.gif)



Though I’ve owned half dozen bicycles, I’ve never had a chance to repair one and never had the motivation. I messed up the wheeling frame. My bicycle can’t turn.

I’m not saying tech people can’t fix things. I do believe tech people are savvy, and repairing a bike is easier than migrating from one framework to another, while covering every bit of code with tests. Everything is possible, if you have the motivation.

I’m saying that you **shouldn’t be able to expect developers to be good at fixing other things**. So if you really want me to repair your bike, try giving me some motivation. A cupcake is a good start.











* * *







**About the author**  
[Andrew](https://twitter.com/ABNovels) started at Icons8 as a usability specialist, conducting interviews and usability surveys. He desperately wanted to share his findings with our professional community and started writing insightful and funny (sometimes both) stories for our blog.

_Follow Icons8:_ [_Twitter_](https://twitter.com/icons_8) _|_ [_Facebook_](https://www.facebook.com/Icons8/) _|_ [_Dribbble_](https://dribbble.com/icons8)








