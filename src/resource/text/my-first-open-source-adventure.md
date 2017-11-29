---
author: Anthony Ng
authorTwitter: none
authorFacebook: none
title: "My First Open Source Adventure"
subTitle: "The idea of open source has always resonated with me. What’s not to like about people volunteering their time and knowledge for the commo..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*d-pS9aIt4Fywwa0QJGgCvg.jpeg
url: https://medium.freecodecamp.org/my-first-open-source-adventure-82a33f89113
id: my-first-open-source-adventure-82a33f89113
date: 2016-10-06T15:42:39.862Z
tags: [
  "Open Source",
  "Web Development",
  "Programming",
  "Life Lessons",
  "Tech"
]
---
# My First Open Source Adventure



![](https://cdn-images-1.medium.com/max/1600/1*d-pS9aIt4Fywwa0QJGgCvg.jpeg)

Les Alpilles, Mountain Landscape Near South-Reme by Vincent van Gogh



### ✨✨ Inspiration ✨✨

The idea of open source has always resonated with me. What’s not to like about people volunteering their time and knowledge for the common good?

So after reading [Shubheksha](https://medium.com/@shubheksha)’s article [Hey newbie open source contributors: please blog more](https://medium.freecodecamp.com/new-contributors-to-open-source-please-blog-more-920af14cffd#.rwxevlacv), I decided to throw my hat into the ring.

I’ve been told that working on open source projects is one of the best ways to learn.

*   You get to see code written by more experienced developers.
*   You get to work with technology that you wouldn’t have otherwise used on your own hobby projects.

Contributing to open source is a way of expressing your altruistic nature. I imagine a Robin Hood figure armed with a MacBook (which you can barely distinguish under its 20 stickers), courageously battling cumbersome closed-source enterprise software.



![](https://cdn-images-1.medium.com/max/1600/1*zNNMhBUqNQZ3qRD0mauTig.jpeg)

Imagine his arrows are commits.



I wanted to be an open source Robin Hood.

### ☠☠ Fears ☠☠

As I peered into my monitor, the first of many fears entered my mind. What if I’m overwhelmed by the complexity of these open source projects?

Staring down a repository that has 2,000 commits was quite daunting — especially when my hobby projects topped out at 40 commits.

As I started navigating through the forest of files with cryptic names that I’ve never heard of (.snyk, .varci.yml, pm2Start.js), thoughts of imposter syndrome quickly crept in. I asked myself, “Am I actually qualified to touch this code?”

I’d heard some horror stories about harsh communities. What would happen when I got to a point where I need some guidance and had to actually…talk to a person?

Dread suffocated me as I thought about having my first conversation with an open source maintainer. In my head, their responses ranged from “lol are you serious?” to “maybe web development isn’t for you.”

But I took comfort in the fact that, like an internet troll, I could hide myself (and my shame) behind my computer.

I also feared that my pull request wouldn’t get merged. It was possible that my work was so poor that other maintainers won’t bother to steer me in the right direction. Would it be worth devoting hours — or even days — of my time toward code that might not even get used?

Despite these fears, I decided to embark on my open source adventure.

### 🔎🔎 Finding a project 🔎🔎

The first step was finding an Open Source Project to work on. [Shubheksha](https://medium.com/@shubheksha)’s article [How to find your first open source bug to fix](https://medium.freecodecamp.com/finding-your-first-open-source-project-or-bug-to-work-on-1712f651e5ba#.q0bt5j41d) recommended looking at [Up For Grabs](http://up-for-grabs.net/) for project candidates. After quickly scanning through the list of JavaScript projects, I didn’t find any that caught my eye.

I wanted to find a project that I personally used and believed in. The problem was most of those projects were so mature that they were too advanced for me to follow along. For example, I love React, but I didn’t have any idea how to fix “unexpected interleaving of subtree/parent lifecycle methods.”

I was sure that there were projects out there where I could make a significant dent, but they were still unknown to me.

Then I remembered that Free Code Camp is open source. It passed my test as a project that I use and believe in. I’ve gone through hours of their curriculum, and love how they help new developers and nonprofits at the same time. I also recommend Free Code Camp to anyone who mentioned wanting to learn web development.

So after scanning through their [list of open issues on GitHub](https://github.com/FreeCodeCamp/freecodecamp/issues), I chose Free Code Camp as my first Open Source Project.

### 🐜🐜 Finding a bug 🐜🐜

The next step was finding an issue to work on. In theory, this should have been the easiest and quickest thing to do.

But, like watching a movie on Netflix, sometimes you spend more time picking something to watch than actually watching it.

With over 300 open issues, I decided to filter them by labels. I found one labeled “first-timers-only” which sounded friendly enough. But this issue had more than 80 comments. I wasn’t about to touch that.

I didn’t see any issues that I could jump right into and start working on, so I continued my search.

I found another label called “help wanted” and scanned for issues that no one had commented on yet, but nothing jumped out at me.

I decided instead to watch the repo for new issues that no one had tackled yet. After about 15 minutes, I saw that most of the new issues were from campers who were stuck on challenges. These issues weren’t actually bugs that I could fix.

And then [issue #10989](https://github.com/FreeCodeCamp/FreeCodeCamp/issues/10989) came into my life. It was related to a overly-rigid regular expressions test on one of the coding challenges.

I thought to myself, “I know a little about regex.”

Then a maintainer commented that this was a valid issue and added a “help wanted” label to it. My heart started pounding as I reread the issue 3 more times to make sure I didn’t miss anything.

Then I thought to myself, “I can do this!”

I commented on the issue and shyly asked if I could work on it. My knees were weak and my arms were heavy. My palms were sweating as I waited for a response. I felt as nervous as if I had just texted a woman asking her on a date.

And finally, someone responded with, “you can work on that.”

Time to get to work.

### 🚶🚶🏃 Getting started 🚶🚶🏃

I started by looking through the README.md in the repository. Thankfully, Free Code Camp has very detailed instructions on how to contribute and create pull requests. They also have a Gitter channel just for contributors.

I forked the repository and got started.

### 🚷🚷 Stumbling 🚷🚷

I knew that getting my environment set up would be tough. My mentor told me that it took him a week to get all the right programs installed before he could start contributing at his first job.

It’s difficult because you have to read these cryptic error messages in your terminal when something doesn’t install or run correctly. And sure enough, it wasn’t long before I ran into an issue.

When I ran “gulp” to get started, there was an error inside of the gulpfile. It highlighted a line of code that used the ES6 arrow syntax and said that it didn’t recognize it. I looked through the rest of the file and saw no other use of the ES6 arrow syntax. Could I have forgotten a step in the build process?

I googled around for a solution and got nothing helpful. So I decided to hack it. I turned the ES6 arrow into a regular function declaration and see what happened. The “gulp” command didn’t complain anymore, and set up a localhost.

High off of this success, it didn’t take long before I ran into another road block. I went to my localhost and was greeted with the Free Code Camp home page, except that it wasn’t functional. Clicking on the “map” link that normally displays all challenges did nothing. There were a number of errors in the console, most noticeably a missing “bundle.js” file.

I kicked myself for missing a step somewhere, and decided to start from scratch. I deleted my local copy of the repo and reinstalled everything, making sure to be extra vigilant with each keystroke. I meet with the same errors and decide it’s time to use the Gitter channel.

When I first logged into the Gitter channel, I saw a lot of messages talking about new updates to Free Code Camp. To my right, I was greeted by a summary of recent activity on this channel, which included the banning of four people. Were these people guilty of not getting their gulp files to work? Did they nonchalantly ask where their missing bundle.js file was?

I decided to read through the contribution guide again in case I missed something obvious. I’d already read through it so many times that I could practically recite it. I didn’t find anything new that would help me, so I conjured up the strength to finally ask the Gitter channel about my ES6 syntax issue.

Someone responded right away, but I quickly realized they weren’t talking to me.

I waited and waited until salvation came. A maintainer named Dylan told me that I had to update my Node and npm. I looked again at the contribution guide, and realized that it clearly states the version I should be using. How did I overlook this?!

I thanked Dylan for his act of kindness and I quietly thank Gitter for not banning me.

I promptly installed the latest version of Node and npm. Things are looking brighter already.

I decided to delete everything and start from scratch again. It was my third time at this point, and setting this project up had become a familiar dance. I also pulled some new code that has been committed since the day before, which fixed some of the errors I was seeing.

I run into the same error with the missing “bundle.js” file and I asked in the Gitter channel about this. Someone responded that the “gulp” command should have created it. I created the “bundle.js” by running the “webpack” command myself, and finally the environment looked like it was working. I could finally start working on the actual issue!

The actual fix took a quarter of the time that setting up my project took. I wrote a regex that checked for the presence of an element. The tricky part was to turn my regex into a string, then remember to use backslashes to escape characters as needed. I updated one line of code and ran my tests, which passed.

I read through the documentation for pull request instructions. Free Code Camp has an awesome pre-populated checklist when you submit a pull request.

I took a final breath and sent off my pull request. I felt like a parent sending their child off to school. There was nothing else I could do except wait.











* * *







### 🏋🏋 Pull Request Merged! 🏋🏋

The next day, I got an email about the status of my [pull request](https://github.com/FreeCodeCamp/FreeCodeCamp/pull/11026#event-810810708). Someone commented “LGTM.”

I did a quick Google search and discovered that this stands for “Looks good to me.” Then I felt a big sense of relief. They had merged my pull request!

My first step into open source had been a success!

### 🤓🤓 What I learned 🤓🤓

I did learn some technical things by working on this issue. I got more experience working with regex.

I also learned about using backslashes to escape certain characters in strings. Before this, I’d only used backslashes to escape quotation marks.

The other benefit is that I got a lot more comfortable using GitHub.

### 👶👶 Words to new Open Source contributors 👶👶

This was an amazing experience for me, and I recommend other new developers give it a shot. Here’s my advice to those interested in contributing.

#### Tip #1: Work hard and persevere

I would say 60% of the time when you’re working, everything runs without issues. But it’s that other 40% when everything breaks that will define who you are as a developer.

Embrace these obstacles and fight through them.

I learned more from fixing my bugs than I would have if everything had run smoothly.

Change your mindset to welcome mistakes. View them as lessons.

#### Tip #2: Communicate as many details as you can.

This is especially important when you’re asking questions over an asynchronous mode of communication (like Gitter or email).

Imagine you’re using an API to request information about the weather in your city. You could do this:  
 1\. You ask the API for the weather  
 2\. The API responds back asking for a location  
 3\. You respond “New York”  
 4\. The API asks if you want it in celsius, Fahrenheit or kelvin  
 5\. You respond “Fahrenheit”  
 6\. The API responds back with “72 degrees Fahrenheit in New York”

Or you could do this:  
 1\. You ask the API for the weather in New York in Fahrenheit.  
 2\. The API responds back with “72 degrees Fahrenheit in New York”

It seems silly that anyone would choose the first option when working with an API, but that’s exactly what people do when they’re communicating with other people. Simple conversations get drawn out while each party waits minutes or hours for the other to respond.

#### **Tip #3: Don’t be intimidated by open source maintainers.**

They may have more experience than you do, but realize that at one point, they were in your situation, too. They’ve just survived more mistakes than you have.

Just remember that all developers are on the same long road. Some of us are a few steps behind others. The important thing is to keep moving.

### 👤👤 Words to Open Source maintainers 👤👤

The Free Code Camp community is amazing, and was super helpful when I needed it.

I want to thank all the maintainers who go out of their way to help out new contributors. You might think you’re doing something small when you’re telling someone to update their node and npm. What you may not realize is that you may be their lifesaver, keeping them from drowning and quitting.

Keep up the awesome work!

Also, be careful with the words you choose to use.

I was on a trip to Japan and was looking for a restaurant to dine. I passed by a promising restaurant, but it had a sign on the window that said “No English Speaking.” Everything else was in Japanese.

How would a foreigner like me have interpreted this sign? Does it mean that nobody in there speaks English? Does it mean that I’d have to play Russian Roulette with whatever I pointed to on the menu? Does it mean they’re xenophobic and not welcoming of foreigners like me? I kept walking and never bothered to find out.

As maintainers, sometimes you’re the first real person that new contributors communicate with. Be mindful that these contributors are in the foreign land of open source. They may be struggling to speak the language — let alone try to fix an open issue in the repository.

I plan on continuing my open source journey. I hope to see you around and hear your stories.








