---
author: Robert Axelsen
authorTwitter: https://twitter.com/Robert_Axelsen
authorFacebook: none
title: "Google Chrome might have broken your tests without you even knowing about it"
subTitle: "My colleague just discovered that Chrome 58 (released April 19th) has silently muted all console.debug() output in their Chrome Dev Tools..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*jnZ0lrbFnVqzqCCph67VmA.jpeg
url: https://medium.freecodecamp.org/google-chrome-might-have-broken-your-tests-without-you-even-knowing-about-it-9d9130a6fd0c
id: google-chrome-might-have-broken-your-tests-without-you-even-knowing-about-it-9d9130a6fd0c
date: 2017-06-11T15:05:04.948Z
tags: [
  "JavaScript",
  "Tech",
  "Google",
  "Startup",
  "Web Development"
]
---
# Google Chrome might have broken your tests without you even knowing about it







![](https://cdn-images-1.medium.com/max/2000/1*jnZ0lrbFnVqzqCCph67VmA.jpeg)







My colleague just discovered that Chrome 58 (released April 19th) has silently muted all console.debug() output in their Chrome Dev Tools.

How? By making changes to the **Console UI**, from filtering based on type of console method to filtering based on levels.

Introducing levels is not a bad thing in and of itself. But Google also chose to stop showing all console output by default. Now you can only see level “Info” and below.







![](https://cdn-images-1.medium.com/max/2000/1*pWzfBTBmUuKqVZ47uUuD2w.png)







Depending on your project, it might also be a big deal to no longer be able to filter by showing only one console method’s output.

For example only `console.log()`. This is particularly troublesome if you’re working on a larger project with hundreds of different types of output mixed together.

As you can see from the comments section [in the release notes](https://developers.google.com/web/updates/2017/03/devtools-release-notes), this has not been received well by developers.



![](https://cdn-images-1.medium.com/max/1600/1*pH5BuRfd9Bi47d6OlXysOQ.png)



### Failing Tests

This means that if your app or project relies on `console.debug()` level output for testing, your tests might have been failing for over a month without you even noticing.

All without so much as a pop-up warning from Google.

By making logging non-verbose by default, I believe Google has broken with best practice here, and made a huge mistake.

Also, removing the ability to only show output based on a specific console method has resulted in a worsened workflow for many developers.

### Test it out for yourself

I did some testing with the following console methods in Chrome Dev Tools:

<pre name="dd70" id="dd70" class="graf graf--pre graf-after--p">console.assert(true, {assert: "assert"});  
console.count('count');  
console.debug('debug');  
console.dir({dir: "dir"});  
console.error('error');  
console.info('info');  
console.log('log');  
console.profile('profile');  
setTimeout(function(){ console.profileEnd('profile'); }, 1000);  
console.table('table');  
console.time('time');  
setTimeout(function(){ console.timeEnd('time'); }, 1000);  
console.timeStamp('timeStamp');  
console.trace('trace');  
console.warn('warn');</pre>

You can simply copy paste this into the console in Chrome Dev Tools, hit enter, and change the filter level to see what is displayed in which level.

### Some Screenshots To Illustrate

Here are some screenshots to illustrate the differences between levels. Notice especially the first screenshot of default “Info” level, and the fact that “3 items are hidden.”







![](https://cdn-images-1.medium.com/max/2000/1*HO8pNCCSqyCOYfI5jERAng.png)

Chrome 58, Chrome Dev Tools Console output, level “Info”.





![](https://cdn-images-1.medium.com/max/2000/1*RsugGzS3T1EbUJ0Of3zKaQ.png)

Chrome 58, Chrome Dev Tools Console output, level “Verbose”.





![](https://cdn-images-1.medium.com/max/2000/1*ByCAzHs7JsmfdWLiGkyUHA.png)

Chrome 58, Chrome Dev Tools Console output, level “Warnings”.





![](https://cdn-images-1.medium.com/max/2000/1*xiCb95CUA93ojcSW-mrqRA.png)

Chrome 58, Chrome Dev Tools Console output, level “Errors”.







### Have Any Thoughts?

What do you think about this change? Was Google in the wrong for making this change? Or do you think it was an improvement to the “Console UI” overall? Please leave a comment below.

_This article was originally published on_ [_“Hello, I Love Code”_](http://helloilovecode.com/) _and is written by_ [_Robert Axelsen_](http://rob.ee/)_, who is a JavaScript Developer, Meetup Organizer and Open Source enthusiast based in Austria, Europe._

_You can connect with Robert on_ [_Twitter_](https://twitter.com/Robert_Axelsen)_, or get to know him better by_ [_visiting his website._](http://rob.ee/)








