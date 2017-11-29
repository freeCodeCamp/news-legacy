---
author: Jonathan Solórzano-Hamilton
authorTwitter: https://twitter.com/jhsolor
authorFacebook: none
title: "Your code stinks. Here’s what you can do about it."
subTitle: "Humans stink. It’s nothing to be ashamed of: it is the inevitable consequence of our animal nature...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*BZSZytmK-78-xGeK-P0_fw.jpeg
url: https://medium.freecodecamp.org/your-code-stinks-heres-what-you-can-do-about-it-3f9650653447
id: your-code-stinks-heres-what-you-can-do-about-it-3f9650653447
date: 2017-11-16T09:22:12.717Z
tags: [
  "Software Development",
  "Tech",
  "Productivity",
  "Programming",
  "Life Lessons"
]
---
# Your code stinks. Here’s what you can do about it.

Humans stink. It’s nothing to be ashamed of: it is the inevitable consequence of our animal nature.

But humans aspire to be more than animals.

Humanity’s singular endeavor throughout history has been the journey to eliminate stink. We’ve always hated it. Even in antiquity, we sent people on [ridiculous journeys around the world in rickety sailboats, and across deserts on tiny horses, to find some remedy for it](https://en.wikipedia.org/wiki/Spice_trade).

We have iterated for thousands of years to reach a stink-free world. From the invention of soap and toothpaste to the Yankee Doodle Candle Co. and Febreze — our soaps, candles, and sprays now give us a way to make food waste and industrial garbage smell like mountain raindrops and sugar cookies.



![](https://cdn-images-1.medium.com/max/1600/1*edw-nKvDvMKNpTxE3Y5_8Q.jpeg)

Mmmm! Pumpkin spice! (Photo by [NeONBRAND](https://unsplash.com/photos/8Yk4T-tDSYY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText))



And yet with each innovation, we find a new way to stink.

Like our battle between antibiotics and bacteria, we have launched an endless arms race between ourselves and our environment. Now we’re moving beyond the era of physical products.

With our advancement, we have brought stink along with us — just as we always have. We created the information age.

And we created information stink.

#### Should I drink this?

Garbage comes cloaked in a wonderful variety of smells. As a new father, a door opened for me into an undiscovered country of stink. Previously, I had only heard rumors of this world from the few parents who survived it. Rumors always accompanied by a thousand-yard stare.

Just so, there are many types of stinky information. [Teenagers in central Europe write up fake news articles](https://www.npr.org/2016/12/14/505547295/fake-news-expert-on-how-false-stories-spread-and-why-people-believe-them) for social media clicks. There is always [one more weird trick](http://www.slate.com/articles/business/moneybox/2013/07/how_one_weird_trick_conquered_the_internet_what_happens_when_you_click_on.html) that doctors don’t want you to know.

Today, in this article, we’re going past all that. We’re diving into the very seams of our new information era to learn about the stinks that we Morlocks are creating in our very own products. I’m talking about code smell.

Kent Beck and Martin Fowler define code smell as “[a surface indication that usually corresponds to a deeper problem in the system.](https://martinfowler.com/bliki/CodeSmell.html)”

Woof.

A simpler version is that smelly code causes you to say “that doesn’t seem right” when you glance at it. Code that has begun to smell resembles milk on the cusp of spoiling. It looks like it **might** be okay, but it seems to be “off” just a bit.



![](https://cdn-images-1.medium.com/max/1600/1*0ViDoBn7nMsPuXg_y4P2KA.jpeg)

That’s… awfully foamy. ([source](https://www.pexels.com/photo/healthy-drink-glass-milk-46520/))



And — just like with smelly milk — if you want to be sure you’ll be at work the next day, you may not want to settle for smelly code. So are you ready to come to grips with your code smell?

#### Learning to smell

Acceptance is the first step to killing code stink. I know your code stinks. Maybe not all of your code, but certainly some of your code. Like I said, it’s a fact of nature — animals create stink, and as coders we are just techno-animals. Technanimals?

You have to accept that your code isn’t always going to smell like roses. Especially your first draft. Your first draft is never going to be your best.



![](https://cdn-images-1.medium.com/max/1600/1*Y1zZK3fLQN54kseJEnowUw.jpeg)

Photo by [Thought Catalog](https://unsplash.com/photos/RdmLSJR-tq8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)



That’s right, your “draft.” You need to start treating coding the way we treat other endeavors. You need to plan to iterate from the beginning.

You have probably spent your entire education since kindergarten learning about outlines, first drafts, rewrites, editing, peer editing, and the other steps of writing. Do you want to forget it all and treat coding like a stream-of-consciousness exercise?

Don’t. Code like you would write an argument: with a clearly planned conclusion in mind, an outline of the logical steps needed to get there, and a series of drafts. Call it “[refactoring](https://refactoring.com/)” if you want. Rubbing your own nose in your code will teach you to make it less smelly in the first place.

Like all smells, you’ll get better at detecting code smells once you’re sensitized to them. You will find it worthwhile to learn the most common smells and how to identify them. There are many [useful](https://blog.codinghorror.com/code-smells/) [articles](https://sourcemaking.com/refactoring/smells) about specific code smells and how to treat them.

Technology can also help save you from smells. Do you have deodorant? Your IDE may not have a plug-in deodorizer today. But it could! [Static code analysis](https://www.sonarqube.org/) and [linting](https://guide.freecodecamp.org/javascript/code-linting-in-javascript/) [tools](https://medium.freecodecamp.org/how-to-set-up-eslint-in-atom-to-contribute-to-freecodecamp-3467dee86e2c) give your code a shower to help keep it from getting too smelly.



![](https://cdn-images-1.medium.com/max/1600/1*FntCclZjLFE_wRbh71akig.png)

([source](https://www.pexels.com/photo/black-and-white-blue-bottles-close-up-339835/))



If you’re not already habitually unit testing, this is a good reason to start. Writing unit tests forces you to go back over your code to figure out where and what to test. This is a much harder task if you’re holding your nose at the same time. Reviewing code for testing provides you with both an opportunity and an incentive for better (and less smelly) coding.

#### Whoever smelt it…

Let’s face it. Other people are going to notice your stink long before you do. It’s basically the first rule of society. Humans first started coalescing into groups for the opportunity to mock other humans. It’s an archaeological fact™️. My wife is an archaeologist, and I am 100% sure she face-palmed upon reading that.

The best way to find and fix the stinky spots in your code is to review it with other people. Peer code review has a lot of benefits. The first benefit is that you get to aggravate your co-workers. You’ll immediately find out how poorly written your first effort was by the groans of dismay wafting across the office after you click “submit pull request.”



![](https://cdn-images-1.medium.com/max/1600/1*8c333d_YNEHG4q3UDb1wTA.jpeg)

Photo by [Helloquence](https://unsplash.com/photos/5fNmWej4tAA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)



Another great way to reduce stink is to review other people’s code. Take delight in pointing out their failings and flaws! Then quietly realize that you make the same mistakes all the time. The back-and-forth of a good peer review system will help you become a better developer faster than just about anything else.

But what if you don’t have co-workers or friends and spend your days writing code alone in a dark basement? Well, dear friendless freelancer, there is no better time to start [participating in open source](https://medium.freecodecamp.org/i-just-got-my-free-hacktoberfest-shirt-heres-a-quick-way-you-can-get-yours-fa78d6e24307). [freeCodeCamp](https://www.freecodecamp.org/) is a great place to start.

#### Conclusion

Nobody wants to stink. And you don’t have to. Coding stink is like all others: with a little hygiene it can be managed.



![](https://cdn-images-1.medium.com/max/1600/1*MJKQTcoms33CWn0yL_nETA.jpeg)

([source](https://www.pexels.com/photo/blur-close-up-focus-indoors-78931/))



It’s time to examine your coding process. Is it iterative? Do you seek feedback from others? Are you using free tools to check your code for “grammatical” mistakes? Are you testing?

It’s also time to learn about the common code smells and how to avoid them. A good coding process is like a good writing process, with lots of drafts and editing. So, too, is coding skill like writing skill: there are rhetorical devices that are known to be effective, and fallacies that are known to fail.

You don’t have to discover them all on your own. Read up on known code smells and refactoring techniques.

Finally, keep practicing to hone your skills. Do side projects and open source to get even more and better feedback.

Your nose will thank you.

Please 👏 to let me know if you enjoyed this article!








