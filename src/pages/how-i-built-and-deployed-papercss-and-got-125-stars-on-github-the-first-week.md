---
author: Rhyne Vlaservich
authorTwitter: https://twitter.com/RhyneAV
authorFacebook: https://facebook.com/10205392171550819
title: "How I built and deployed PaperCSS — and got 125+ stars on Github the first week"
subTitle: "I had just finished up a summer internship in New York working as a software engineer. During my exit interview, I asked for some feedbac..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*mxL8G7PSiKvz4-PN2CKN7A.png
url: https://medium.freecodecamp.org/how-i-built-and-deployed-papercss-and-got-125-stars-on-github-the-first-week-89f8d6ac14b1
id: how-i-built-and-deployed-papercss-and-got-125-stars-on-github-the-first-week-89f8d6ac14b1
date: 2017-11-19T09:54:55.194Z
tags: [
  "JavaScript",
  "Tech",
  "Web Development",
  "Programming",
  "Life Lessons"
]
---
# How I built and deployed PaperCSS — and got 125+ stars on Github the first week



[![](https://cdn-images-1.medium.com/max/1600/1*mxL8G7PSiKvz4-PN2CKN7A.png)](https://www.getpapercss.com/)



#### Background

I had just finished up a summer internship in New York working as a software engineer. During my exit interview, I asked for some feedback about any areas where I could improve. Since I’m very interested in a career in front-end web development, my main takeaway from that conversation was getting better with CSS.

I decided that the best way to learn CSS (and how to build it with [LESS](http://lesscss.org/)) was to create my own CSS framework. Instead of just blindly using [Bootstrap](http://getbootstrap.com/), I wanted to fully understand everything under the hood. As a bonus, this CSS framework could be the basis of all of my future projects.



![](https://cdn-images-1.medium.com/max/1600/1*74dionp4nKgkX2LKgzssgg.png)



I now knew I wanted to build a CSS framework, but I had little direction until I stumbled upon [Tiffany Rayside’s Imperfect Buttons Codepen](https://codepen.io/tmrDevelops/pen/VeRvKX). I loved how the borders weren’t straight and how it was, well, imperfect. I thought this concept would be really cool if applied to every other type of HTML element. And so PaperCSS was born.

#### Building PaperCSS

I spent the next several weeks building out classes for the framework. I started with the Flexgrid, because I really wanted to learn more about how flexbox can be used and applied. I also knew that it would be useful to have a system of positioning elements for the documentation website. I then added more features and styles as I had time.



![](https://cdn-images-1.medium.com/max/1600/1*4H_hw5f6qkHNGxRf1XcH5Q.png)

Example of a feature, borders!



I spent time learning [Gulp](https://gulpjs.com/) to automate building the CSS. All I had to do was add styles into a .less file and let Gulp build the CSS for me. I could then instantly view it on the documentation/demo site. I used the [gulp-watch-less](https://www.npmjs.com/package/gulp-watch-less) module so I didn’t even have to reload the site to see changes.

It was fun learning how Gulp works and playing with all of the different modules that exist for it. It feels like there’s a gulp package for anything you need.

Overall, building this framework was pretty straightforward. I wanted to keep it as simple as possible so people could contribute more easily. But more on that later.

#### Deploying PaperCSS

I ended up deploying the framework on [Netlify](https://www.netlify.com/). All you have to do is hook up your Git repo, your build command, and your domain name (if you have one). They even let you add https in just two clicks. I’m in love with their service (and am not being paid to say that).

From there, any pushes to your master branch automatically trigger a rebuild and redeploy of your site.



![](https://cdn-images-1.medium.com/max/1600/1*_ruJuLs1hvuMdZ-XcRltLA.png)

Another feature, custom Radio Buttons and Boxes



Honestly, the hardest part (so far) of this deployment has been picking the domain name. papercss.com was taken, so I had to get creative. I ended up choosing getpapercss.com, since other frameworks have put “get” before their actual name (ahem, Bootstrap). Some other options I liked were papercss.style and papercss.org.

#### Launching PaperCSS

After getting some feedback from friends and previous colleagues, I decided to share PaperCSS on the internet. I posted it to [Hacker News](https://news.ycombinator.com/item?id=15584262) and [r/web_design](https://www.reddit.com/r/web_design/comments/79n3qh/papercss_the_less_formal_css_framework/). I had created this framework for web developers, so I figured that these two audiences would be ideal.

I did some quick research and found that the best time to post to Reddit was [Sunday & Monday morning](http://maxcandocia.com/article/2017/Jul/29/what-time-to-post-to-reddit/). Since my Googling took place on a Sunday night, I opted to post to these two channels on Monday morning.

Hacker News got a little bit of traction, and some great feedback in the comments.



![](https://cdn-images-1.medium.com/max/1600/1*JG4bcg3EVCh-qTPvN-bldQ.png)

[Hacker News Submission](https://news.ycombinator.com/item?id=15584262)



But it **really**took off on Reddit. Normally, when I launch a small application or Chrome extension, I get three upvotes and maybe a comment saying “meh.” But PaperCSS somehow went to the top of r/web_design and stayed in the top post position for nearly two days.



![](https://cdn-images-1.medium.com/max/1600/1*dO6D5yPbJEEs68JoLc3jPQ.png)

[r/web_design submission](https://www.reddit.com/r/web_design/comments/79n3qh/papercss_the_less_formal_css_framework/) after day 1



But the best part of launching was the immediate interest in contributing. There were three pull requests by the time I opened my email that afternoon!

I suddenly felt a sense of responsibility. This was no longer some random project I could forget about and leave behind. People were interested enough to want to make it better. I felt like I owed it to them, and everyone using PaperCSS, to make sure their contributions were included. The project must live on!

#### The first week

Here’s the quick rundown of the first week of PaperCSS:

*   500+ new lines of code
*   125+ stars on Github
*   13 issues
*   12 pull requests
*   6 new features (tooltips, cards, alerts, badges, border styles, disabled buttons)
*   And a wealth of support and feedback!



![](https://cdn-images-1.medium.com/max/1600/1*2_4WU3Daxb-yfveyu35G-Q.png)

New alerts feature



Do you want to know the craziest part about this whole thing? I’ve personally added none of those new features. It’s been a busy week, so I’ve just spent my time with PaperCSS commenting on issues and pull requests and merging them all in.

It’s very weird being on the other side of the pull request. Thank you to **TotomInc**, **Fraham**, and **joelwallis** for their contributions thus far! And thank you to everyone else for the feedback on Hacker News, Reddit, and through issues on Github.

#### The future of PaperCSS

The future of this project depends on where everyone wants to take it. I love the small community that has sprouted around it, and want it to be a framework that grows organically. I’d love to keep adding features, cleaning the code base, and letting it be a simple project that’s easy to contribute to.

Some tangibles that I really want to take care of ASAP:

*   Getting PaperCSS on a CDN. That way, users don’t need to download it — it can just be externally linked.
*   Getting PaperCSS onto NPM for easy-peasy `npm install`
*   Figuring out the best way to make sure documentation matches the latest release
*   Adding example pages
*   Breaking out the monolithic index.html file into bite-sized chunks, while still making it simple to figure out and contribute to.

Speaking to that last point: a lot of projects on Github are intimidating to set up locally — but PaperCSS isn’t. It’s relatively easy to understand it and add features, since the only moving parts are the .less files and the index.html file. I’d like to continue to keep it simple, and keep the barrier to entry (for contributing) low.

For anyone who wants to get started with an open source project, this would be a great place to do so. If you haven’t opened a pull request before, I’d be happy to walk you through that process.

#### Conclusion

To sum it up, it’s been a wild week. PaperCSS has surpassed my expectations by 1,000% and I’m thrilled with how it is shaping up. I’m still learning a lot about how to manage the framework and contributions, and would appreciate any advice on the matter. Also, please consider using PaperCSS for your next project, and send me a link with how it turns out :)



[![](https://cdn-images-1.medium.com/max/1600/1*_IdCHhpv40ZMJPAeFcgjbw.png)](https://www.getpapercss.com/)





[![](https://cdn-images-1.medium.com/max/1600/1*wYuqxdPizKJMTQmL50Ydtw.png)](https://github.com/rhyneav/papercss)





[![](https://cdn-images-1.medium.com/max/1600/1*PvQLWhLnUkCEQGPTtgRJqw.png)](https://github.com/rhyneav/papercss/releases)










