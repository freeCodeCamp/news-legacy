---
author: K. Anthony
authorTwitter: https://twitter.com/anthkris
authorFacebook: none
title: "December Go Design Something Project: Pomodoro Timer"
subTitle: "The end of the year has been sneaking up on me. I realized that I’ve been seriously neglecting my Free Code Camp practice...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*50luvvhhF28cOaFut3TS_g.png
url: https://medium.freecodecamp.org/december-go-design-something-project-pomodoro-timer-9617ac5d733b
id: december-go-design-something-project-pomodoro-timer-9617ac5d733b
date: 2015-12-16T14:03:28.000Z
tags: [
  "Productivity",
  "Education",
  "Programming",
  "Design",
  "UX"
]
---
# December Go Design Something Project: Pomodoro Timer







![](https://cdn-images-1.medium.com/max/2000/1*50luvvhhF28cOaFut3TS_g.png)







The end of the year has been sneaking up on me. I realized that I’ve been seriously neglecting my [Free Code Camp](http://www.freecodecamp.com) practice.

Seeing as how I had some free time on my hands, in between taking a pretty good, in-depth beginner course on D3.js, I decided to tackle my next front end project: the pomodoro timer.

### The Pitch

So the project was to reverse-engineer this [pen by Geoff Stoerbeck](http://codepen.io/GeoffStorbeck/full/RPbGxZ/). Seems simple right?

Wrong!

I could tell right from the beginning that this project was going to be more complex than the others had been, which is probably why I dragged my feet on it. But once I did get started, I found myself super motivated to work through the problems my idea presented.



![](https://cdn-images-1.medium.com/max/1600/1*cFmJliPYAmitFNvU26x2zw.jpeg)

Pomodoro App by NASA Trained Monkeys



### My Idea

I took my inspiration both from the Geoff’s demo and from the pomodoro apps in the iOS App Store. [Particularly this offering by NASA Trained Monkeys](https://itunes.apple.com/us/app/pomodoro-timer-focus-on-your/id703145045?mt=8).

Essential functionality was to allow users to set both the session and break time and start the timer. They should also be able to pause the timer and restart it.

On the aesthetic side, I really liked the idea of filling up the circle as time passed in the reference pen, but I wanted to add on to that idea by creating little progress bars for each session. I also really liked the idea of shaping the progress bar like a tomato.

With those two things in the back of my mind, I resolved to start from the beginning and just get something working.

### Finding Plugins

My first trial was to find some frameworks that would allow me to do what I wanted.

Naturally, I started with basic functionality. I needed something that would let me easily build a timer. There’s no shortage of timer plugins for jQuery, but I was able to sift through them fairly easily, eschewing anything that was pre-styled.

I experimented with [jQuery Simple Timer by Carlous Souza](http://csouza.me/jQuery-Simple-Timer/). It has a lot of the functionality I wanted but didn’t have the built in ability to pause and restart the timers. So I kept looking until I ran across [Jason Chavannes’ jQuery Timer](http://jchavannes.com/jquery-timer/demo), which had everything I wanted, including good demos and documentation.

Using Jason’s plugin, I was able to get a basic timer working fairly quickly.

My structure mimics the Geoff’s demo, with two variables — one for break time and one for session time — that you can modify using plus and minus buttons.

Once you’ve made your selections, you click the start button and the session timer starts. Once the session timer is complete, then that div hides and the break div shows and the break timer starts.

### Progress Bars

My next project was to try and add in progress bars. As I said, I originally wanted to try and create one shaped like a tomato. I hoped that my newfound beginner knowledge of SVG could come in handy and I even went to the trouble to create a handy little SVG tomato. (Trust me, it’s super cute.)

But I abandoned that idea after a couple of days in favor of just getting a simple circle to work. I had to do a little thinking to realize that I wanted this image to act as a progress bar. But once I hit upon the idea, I went searching for another jQuery plugin. After going through a couple of options, I found that [Rostyslav Bryzgunov’s jQuery Circle Progress plugin fit the bill perfectly](https://github.com/kottenator).

The plugin makes it super easy to create a stand-alone progress bar, but I needed it to work within my larger app. I needed to be able to start it, pause it, and resume it.

Again, this was where I had a lot of issues. Documentation for the plugin mentions a way to stop the animation and, through days of experimentation, I was becoming more and more familiar with the variables involved. I was able to create a half-solution by updating the animationProgress property of the animation call.

However, I found that that this only worked for the first pause. If you were to resume the timer, let it run, pause it, and try to resume it again, animationProgess stayed stuck at the older value.

After about 3 days, I broke down and asked on StackOverflow. [As is often the way, I got a quick answer that did the trick](http://stackoverflow.com/questions/34271707/canvas-animation-progress).

So, 89 versions in, I was finally able to add the progress bar to my app.





<iframe data-width="600" data-height="400" width="600" height="400" src="https://medium.freecodecamp.org/media/35647a71fdda8c077913169da33d3f10?postId=9617ac5d733b" data-media-id="35647a71fdda8c077913169da33d3f10" allowfullscreen="" frameborder="0"></iframe>



The 89th version of my JSFiddle to get the Circle Progress Bar working



### The Hitch

There always has to be a problem, right? I discovered that while my progress bar would keep right on ticking, whether or not the window tab was active. I’d built the timer in such a way that the browser paused its progress when you weren’t looking at it. Not fun.

I was looking around for a way to fix it when I moseyed back over to the timer GitHub repo and saw that other folks had brought up this issue and the code author had begun working on a solution! It would mean using a non-canonical branch of the code but, I was game.

I refactored my code to use the new version. I had to add back in some features that had been removed, most notably the isActive property, and I also had to figure out how to update the new countdown parameter. But in the end, I got it running smoothly after about 5 or 6 hours of work.

### Polishing Up

I added a few aesthetic bits at the end — mostly fonts and styling. I was also able to add back in my super sweet tomato, albeit as a PNG instead of an SVG.

One thing that I discovered is that the code is not quite as DRY as I might like. The way the functions are written, they can’t access global variables, so I’ve had to make variables more than once, within specific scopes. However, I think the code is still pretty readable. I also took the time to comment the code to point out areas of interest.

This project was the most difficult so far, but I’m proud of the outcome.

Probably the best thing about the method Free Code Camp chose for these projects is that they aren’t just going step by step through a tutorial. You have a project with functionality for reference but you have to figure out how to make things work on your own.

At the end of it, you really feel a sense of accomplishment. Plus you’ve actually put your new knowledge to work. You also get a nifty portfolio piece!

### Have a Look

Enough of my rambling. [Have a look at the final version](http://codepen.io/anthkris/full/MaNZWQ/) and let me know what you think!



![](https://cdn-images-1.medium.com/max/1600/0*vV4Xl2zl2su-SKyv.png)













* * *







_Originally published at_ [_www.knanthony.com_](http://www.knanthony.com/blog/december-gds-project-pomodoro-timer/) _on December 16, 2015._








