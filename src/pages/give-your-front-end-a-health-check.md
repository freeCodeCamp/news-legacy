---
author: Ewa Mitulska-Wójcik
authorTwitter: https://twitter.com/thedoerdoes
authorFacebook: none
title: "Give your Front End a Health Check"
subTitle: "You’ve built out all your user stories and your app is working. Now’s it’s ready to submit as done, so you can move on with your life...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*6g5YyCI8qhLbQP5QVdJ3Dw.jpeg
url: https://medium.freecodecamp.org/give-your-front-end-a-health-check-952c857ecdb4
id: give-your-front-end-a-health-check-952c857ecdb4
date: 2016-04-20T04:54:16.047Z
tags: [
  "Web Development",
  "Learning To Code",
  "QA",
  "Design",
  "Technology"
]
---
# Give your Front End a Health Check







![](https://cdn-images-1.medium.com/max/2000/1*6g5YyCI8qhLbQP5QVdJ3Dw.jpeg)







You’ve built out all your user stories and your app is working. Now’s it’s ready to submit as done, so you can move on with your life.

Not so fast!

You need to give your code a health check first.

A professional singer wouldn’t start singing until she’s checked both her mic and her speakers. You shouldn’t deploy until you’ve checked your front end, back end, and everything in between.

I’m an impatient person, but coding makes me slow down. Being a developer teaches me to think at least twice, ask questions until the code works, and wait a moment before celebrating success.

Iteration is the key because good product is never done. The key is to iterate on the versions you are proud of, and not on those that are far from ready to go live.

So treat this as a final checklist before going live.

#### 1\. Be responsive

How does your app behave when you resize the browser window? Where do you have your breakpoints in code? Is it fluid enough to fit all sizes without bigger problems?

There are an endless variety of screen sizes. It’s impossible to have all of the devices within reach but, it’s easy to emulate their behavior.

Spending some time in [Code Review Room](http://gitter.im/freecodecamp/codereview), I’ve noticed that many people focus on developing for desktops when they should actually be testing their app on mobile devices first.

Browser tools allow us to emulate the display on various screen sizes and orientations. Use them, they are free.

In Chrome, you can go to a debug view by right clicking any element on the page and selecting “inspect element”, then going to mobile view and emulating different devices.







![](https://cdn-images-1.medium.com/max/2000/1*hU1aVjlk_a52WuaCDLw3Gg.png)

Chrome browser emulation mode







#### 2\. Consider special cases and app states

Empty, error, success, waiting, 404 page, or duplicated button clicks while waiting for API response — how does your app react to them? Do you care about these states that are far from ideal situation you coded for? Do you have helpful feedback to your users for when they encounter these? Have you tested for these special cases? Do you listen and respond in your app, or do you do all the talking?

[Design, code, and test for all states](https://medium.com/@_mikehlee/designing-for-various-states-823816e49c8d#.4x0p9y4oh). Checking user flows can help you a lot to get rid of these easily forsaken points and dead ends. Simply test your work with some users, or at least do it on your own.

Put yourself in users’ shoes by imagining various scenarios that may happen, and remember that this app is completely new for this person.

Try incorrect data inputs, no input at all, misspellings, etc. Be imaginative and try to break your code! Better you do it before your users.

#### 3\. Optimize your performance

[Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) does a great job in telling you what could be done better.

If you want others to be able to read and review your code, don’t minify your JavaScript or CSS — it will make it hard for humans to read. However, you should do it for production code.

For production, you can also use tools such as [Grunt](http://gruntjs.com/) to handle and other operations optimizations for you.

By using the tests such as [PageSpeed](https://developers.google.com/speed/pagespeed/insights/), you can get quick opinion not only on performance, but also on usability issues. Test results provide you with ready suggestions for how to improve your code. Again, you don’t have to accept all, simply choose the suggestions that work for the goals you want to achieve.







![](https://cdn-images-1.medium.com/max/2000/1*EBILvx_9wdUiyeZBuN3vEQ.png)

UX basic health check with PageSpeed tool







#### 4\. Do cross browser testing on every device you have available

Many of us have access to at least two different devices (a computer and a smartphone), and some of us even dual boot different operating systems. Browser emulation has its flaws, so when possible use the native hardware.

You don’t have to write unit tests for a small app showing wiki entries or local weather to check if they work. Test driven development is a great practice, but not the easiest for fresh coders and it may be an excess of form for short code snippets.

What you have to be aware of though is that testing is a part of front end developer’s job, even if there’s a huge team of testers sitting next to you in the same room**.** Before you assign the ticket to other team member you have to make sure it works. Don’t assume, check.

With code, it either works or it doesn’t. There’s no _maybe_ or _I suppose_.



![](https://cdn-images-1.medium.com/max/1600/1*qdUD-BPMc7XtLj-e5ZIKmw.gif)



Cross browser testing can be time-consuming, but there are plenty of tricks to make it more efficient. For instance, each time you test, try using a different browser.

Since you test it while iterating over the project, you can test your code on various browsers many times during the creation of the app itself. Then, before launching the final version it’s much faster to make a quick browser health check, since majority of problems have probably already been discovered and fixed.

Browser developer tools and extensions allow you also to easily discover accessibility constraintsbefore you push the project live. You can also use [BrowserStack](https://www.browserstack.com/), which I’ve found helpful in doing cross-browser testing.







![](https://cdn-images-1.medium.com/max/2000/1*5kpkGGEsYz7JG5RXY541pg.png)

Accessibility Audits in Chrome







I recently [a nice accessibility checklist](http://a11yproject.com/checklist.html). If you want to dig deeper in the topic you may also like to check your apps with [ARIA techniques](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques), articles on [designing for keyboard](http://www.washington.edu/accessibility/checklist/keyboard/), or look through [Simply Accessible archives](http://simplyaccessible.com/archives/).

#### 5\. Keep your head on



![](https://cdn-images-1.medium.com/max/1600/1*V_ZCa_ZUrfeR2ctNff49Tw.gif)

Source: giphy.com



Double check the head section of your HTML, and make sure you have meta descriptions, a viewport set up for mobile, a title tag, and a favicon. Keep at least the basic meta tags, such as description and author. SEO rules change quickly, but an informative description can increase your likelihood of being clicked on a crowded search result page.

If you’re serious about sharing your work, make it easy for others to collaborate. Keep your README.md file concise and explanatory. It’s how most people will view your project on GitHub, so don’t omit this file in your repo.

If you code some small projects on CodePen, go to settings section and add a basic description of your pen and tags. This will allow your work to be easier discovered and understood by others.







![](https://cdn-images-1.medium.com/max/2000/1*r5gBK2zCaR-TA4dpJ-6-KQ.png)

Provide some small info about your pens.







Make sure you import assets and libraries appropriately. If you want to move your project from CodePen to another server, make sure that the external libraries, frameworks, and stylesheets you used in your pen are included.

If you want just a copy for your Github and it’s a small project, you can simply export your pen to gist. To do this, use the export button in the bottom-right corner of Editor View.

#### 6\. Code optimization

Keep DRY (don’t repeat yourself). Once done, have a look at the code once again. Maybe there are snippets which you repeat and they could be replaced by one smart function. Analyze your code once again and look what could be written better. The more you code, the wiser in DRY you become. It’s said to be a good learning code practice to come back to your own code after some time and refactor it. Give it a try.

Before finishing the project **clean your toys**.



![](https://cdn-images-1.medium.com/max/1600/1*5VgNJ56UtlYDolvh0uw-Xw.gif)



All console logs are useful for debugging during creation but unwelcome for production code.

Make comments concise and clear for others reading your code, and preferably in English, unless everyone else on your team speaks the same language.

Make sure there aren’t any console errors, and that all your assets load properly (for that check Network tab in your browser’s developer tools).

You may want to use code validators for [JavaScript](http://www.jslint.com/), [HTML](https://validator.w3.org/), and [CSS](http://csslint.net/)**.** Like with PageSpeed the key is to understand what is worth optimizing.

#### 7\. User Experience

Quick UX health check of your project should include the basics like:

*   **Goals**. Are the users able to solve their problems? Are their expectations met? Do they get what they came for to your app/website? What would a user tell the app is about seeing it just for a moment?
*   **Dead-ends**. Have you checked all possible paths your users can take? Are you helpful? Do you provide feedback just in time a user needs it?
*   **Visual hierarchy**. Is the hierarchy kept? Do you lead users eye? Is your call-to-action visible? Do you have too many items to focus on that fight for being the primary element on a given screen?
*   **Line width.** Is your text easy to scan? Your lines should be no wider than 80 characters. And make sure your lines aren’t too narrow with too much padding.
*   **Readability.** Is your text readable? Are the images of the right size? Is there [contrast](http://leaverou.github.io/contrast-ratio/) between elements appropriate?
*   **Affordability.** Do your buttons look like buttons? Do your links behave like links? Will a user know that an element is clickable or tappable? Does your cursor turn into a finger pointer where appropriate?
*   **Consistency.** Are you consistent in your app? Or do you use 5 different colors to mark the same thing or do you have it organized?
*   [**Microinteractions**](https://uxplanet.org/microinteractions-the-secret-to-great-app-design-4cfe70fbaccf#.ku163smuk)**.** Do you help your users to notice when the elements are hovered in desktop view? How do you mark interactions? Do you respond to what a user does in your app?
*   **Sunlight check.** How does your app behave outside in sunlight? Is everything readable?
*   **Screenreader test.** Have you tried using your app with a screenreader? Is it possible to use it fully being directed just with Voice Over or another screenreader tool?
*   **Proof-read your copy.** Have you got rid of lorem ipsum texts? Are your alerts, warnings, etc. written in a human language, or do they still read like a developer in a hurry wrote them?

#### 8\. Code Review on Gitter

When you are ready with the previous points go to the [Code Review room](https://gitter.im/FreeCodeCamp/CodeReview). Campers are lucky to belong to the community where everybody understands that you are fresh in coding. It’s OK if you make mistakes. We all learn by practicing, and gradually improve our code.

Campers have various prior coding background, and are all at different points in Free Code Camp’s program. So finding help is quite easy.



![](https://cdn-images-1.medium.com/max/1600/1*zI8xNmK4mvnjJq_6159Xcg.gif)



**Don’t ask too early.** Ask for feedback later when your app has started to take on its own character and shape. Try to discover the answer first. Google and [Stack Overflow](http://stackoverflow.com/) are your first stops. Sure, if you get stuck with some problem jump in to the appropriate room and ask! That’s the part of Free Code Camp magic, isn’t it?

**Be precise about what you’re looking for**. Asking precise questions leads you to better answers. Asking a general question like “_Here’s my code. What do you think?”_ will get you a general answer. This can bring a lot of new ideas to light, and a fresh look that can be inspiring. However, a lot of design suggestions are pretty subjective (based on personal taste, and gut reaction after a few seconds), so don’t jump to the conclusion that you must refactor all your code just because one person said so. Ask for justification if you don’t understand what the other person meant. Repeat your question to get feedback from others, and sleep on the suggestions if you are not sure if the change is right for your project.

I love getting **constructive feedback**. It’s better to get a list of suggestions than bunch of praise. Kind words are sometimes needed, but informative comments full of empathy are better for making progress. As you progress, your motivation will become more intrinsic.

#### Bigger projects, shorter lists

Sitemaps, unit tests, functional tests, caching, analytics, appropriate file directories, checking if assets aren’t missing, print version css, SEO optimization… this list could go on for quite a while for sure.

But the more you code, the shorter the list seems to appear, because you will simply code better and internalize many of these considerations.











* * *







_I am a web developer in training. I am a_ [_Free Code Camper_](http://www.freecodecamp.com/ewathedoer)_. I publish on_ [_Medium_](https://medium.com/@thedoer) _and_ [_tweet about UX and startups_](http://twitter.com/thedoerdoes)_. I love useful solutions and friendly collaboration._








