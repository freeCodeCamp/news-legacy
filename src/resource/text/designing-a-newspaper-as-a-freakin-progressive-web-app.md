---
author: James Y Rauhut
authorTwitter: https://twitter.com/seejamescode
authorFacebook: none
title: "How to Design a Progressive Web App News Website"
subTitle: "A lot of my work lately has been making design system specs and tools for IBM. Yet, I needed a break back into product design. So over th..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*vx2DokMCll5imkF7cFP0EQ.png
url: https://medium.freecodecamp.org/designing-a-newspaper-as-a-freakin-progressive-web-app-22acf4eb5a68
id: designing-a-newspaper-as-a-freakin-progressive-web-app-22acf4eb5a68
date: 2017-09-15T19:06:16.336Z
tags: [
  "Design",
  "Tech",
  "Startup",
  "UX",
  "Technology"
]
---
# How to Design a Progressive Web App News Website







![](https://cdn-images-1.medium.com/max/2000/1*vx2DokMCll5imkF7cFP0EQ.png)







A lot of my work lately has been making design system specs and tools for IBM. Yet, I needed a break back into product design. So over the last couple of weeks, I spent free time working on a fun design challenge.

I am going to walk you through how I identified a problem, pushed myself in a new direction, and learned some new tricks.

Note that I’ve written a sister article about how to code this Progressive Web App news website [here](https://medium.freecodecamp.org/coding-a-newspaper-as-a-freakin-progressive-web-app-e456d4a2b9cd).

### Identifying the Problem

Designing for yourself is the easiest project you will ever have.

While working, I noticed a new behavior at work. I would become bored on a task after a while and then check Reddit’s r/WorldNews. The problem was that I wanted to browse that page to feel up-to-date on current events but that is not what happened.

The page focuses on the community aspects with up-voting and comments. Granted, that is what Reddit was built for.







![](https://cdn-images-1.medium.com/max/2000/1*1sYlvFiZfqM-r6cPGsXdWw.png)







The benefit of r/WorldNews is that the headlines at the top are upvoted because others found them important or interesting.

I wanted to focus on those headlines and also have the option to dig deeper into a story. Comments would distract me from doing that. I once saw a study saying that Reddit users were more likely to go straight to the comments instead of clicking the link posted. I knew this was true from my own behavior and it kept me from reaching my intended goal of reading the articles.

So I set a goal for the user experience:

> A user can stay up-to-date on the top news from across the web without community distractions.

### Staying Skeuomorphic

Listen, sometimes you need a break from what you are working on. You need to take a step back and do the exact opposite. In this case, I needed to get away from my flatter-than-a-pancake designs. I needed to stop abstracting UI like Jackson Pollock.

I needed to go back to the late 2000’s skeuomorphism craze. Everything resembled analog items.I decided to get skeuomorphic with newspapers.

Sunday morning as a kid, my dad and I would go out to a Tex-Mex restaurant to eat breakfast tacos and read the local paper. There was a bliss in those moments because you would scan the stories for an hour. You eyes would jump around to find the next story you prioritized. There were no opinions besides Dear Amy telling me how to address my non-existent bully at work.

So I set a goal for the visual design:

> The appearance will only bring in web-based elements as needed and emulate a physical newspaper as much as possible.



![](https://cdn-images-1.medium.com/max/1600/1*QFX7nWBeIaXqD0J_f5zq3w.png)



I had already seen that [New York Times](https://www.nytimes.com/) and [Financial Times](https://www.ft.com/) do great jobs of emulating their non-digital roots. But I stayed away from them to see what patterns I could recognize from newspaper layouts themselves.

It was a blast to look over the newspapers, and there were a lot of identifiable trends:

*   Dramatic type scale
*   Masonry layout
*   Justified text
*   Just enough images to capture initial attention
*   A header break with details of the issue
*   Sweet, ruffled texture

### Going to the Press

Sticking to the newspaper trends helped me iterate on the design. The only sketches I would have to show are solid rectangles for layout. This is because I work faster by prototyping directly in code. The only time I felt like I broke the skeuomorphism was to support offline mode.

In that situation, I needed to tell the user that they were looking at outdated stories based on their connection:



![](https://cdn-images-1.medium.com/max/1600/1*SYTUYpSp3SeF5MaUE2DdKw.png)



A lot of offline UX patterns include an “attempt to reconnect” interaction, but I believed this went against the visual goal I had made previously. The rationale was that users already know how to refresh a page in their browser and that the stories would automatically update if their device regained connection anyways.

One user-based performance stats that was doing poorly while I was working on this was the perceptual speed index. This measures how fast the user believes the experience based on how fast elements visually appear. The low score was due to a quick load of the page but then a delay for the stories to actually appear. I was able to improve the score with loading skeletons for the stories.

**Side Note**: You can learn more about perceptual speed index and how to measure it in this guide: [The Quick, New Way Designers Can Test User-Centric Metrics](https://medium.com/design-ibm/the-quick-new-way-designers-can-test-user-centric-metrics-37e78daf48df).



![](https://cdn-images-1.medium.com/max/1600/1*8xT9w6Zz8jtjimyOkrLCiQ.png)



The final detail I felt compelled to flesh out was a conversion. What action could I measure as an achievement on my end? Just visiting the site was not enough to measure success. So I ended up positioning “advertisements” within the experience.

There are two different types of ads:

1.  Everyone sees links to donate to charity. The hope is that if a user becomes a frequent user, they would click the same charitable ad they see over and over again.
2.  Users with up-to-date Chrome and Firefox browsers see links to install the browser plugin. The plugin, Global Upvote Tab, makes every new tab The Global Upvote while still giving the user immediate control of their URL bar.

### The Final Outcome



![](https://cdn-images-1.medium.com/max/1600/1*fCWIqJmHFT8BuiyzgXFYmQ.png)



I am satisfied with how this two week side-project turned out! Sticking with the minimalistic user experience and visual goals kept the project brief, but focused. While it is may be cheating that I consider myself the user, I continue to enjoy [The Global Upvote](https://www.globalupvote.com/) as my new tab experience.

If I went back and did anything different, I would create multiple layouts that rotate as the user visits at different times. This would rid the user of being tired of always seeing images and ads in similar places. The one benefit I do have, thanks to dynamic data, is ever-changing heights.

I hope you enjoyed this case write-up!

Again, I’ve written a sister article about how to code this Progressive Web App news website [here](https://medium.freecodecamp.org/coding-a-newspaper-as-a-freakin-progressive-web-app-e456d4a2b9cd).

For further information: Feel free to contact me by the comments, [email](mailto:james@seejamescode.com), or [@seejamescode](https://twitter.com/seejamescode). I work in ATX for IBM Design and always love conversation with the web design community.








