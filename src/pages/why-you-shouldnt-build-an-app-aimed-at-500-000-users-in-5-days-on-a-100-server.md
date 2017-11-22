---
author: Howard Lo
authorTwitter: https://twitter.com/imhowardlo
authorFacebook: https://facebook.com/100003560038939
title: "Why you shouldn’t build an app aimed at 500,000 users in 5 days on a $100 server"
subTitle: "A few days ago, I read Erik Duindam’s “How I built an app with 500,000 users in 5 days on a $100 server” article. Basically, he spent an ..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*11CoLIPHgvJBhWAgZTS4kA.png
url: https://medium.freecodecamp.org/why-you-shouldnt-build-an-app-aimed-at-500-000-users-in-5-days-on-a-100-server-79c57304b445
id: why-you-shouldnt-build-an-app-aimed-at-500-000-users-in-5-days-on-a-100-server-79c57304b445
date: 2016-07-22T17:39:00.039Z
tags: [
  "Startup",
  "Web Development",
  "Lean Startup",
  "Pokemon Go",
  "Tech"
]
---
# Why you shouldn’t build an app aimed at 500,000 users in 5 days on a $100 server







![](https://cdn-images-1.medium.com/max/2000/1*11CoLIPHgvJBhWAgZTS4kA.png)







A few days ago, I read [Erik Duindam](https://medium.com/@mr.erik)’s “How I built an app with 500,000 users in 5 days on a $100 server” article. Basically, he spent an extra 2–3 hours (totaling 24) to make his app (GoSnap) scalable by using a CDN and some optimized databases. He gives another app (GoChat) a hard time for building an app that had technical issues at launch.

Those reading his article should take a few things into consideration:

#### He is a good developer.

Much better than me.

I doubt I could push whatever he did out in 24 hours. He’s quick, and knows what he’s doing.

To him, 2–3 hours isn’t a big deal. You can shave that off your sleeping schedule and feel crappy for a day. But what if you’re not a strong developer? 24 hours turns into a week, and 2–3 hours can be nearly a full day.

If you’re racing to push something out because you’re worried someone else might have the same idea (more common than you think), a full day can make or break you.

Gauge this for yourself, but I’d rather be first with a 90% solution than second with 100% solution.

#### %Failure > %Success

Apps you build are far more likely to fail than they are to succeed.

Erik speaks from a winner’s point of view. Winners speak a lot louder than losers, whose stories about their failures probably aren’t as impactful (or exciting) as Erik’s is.

If you do a quick search for Pokemon Go related apps, there are dozens of failed apps for every successful one.

Barring massive partnerships (Google and Nintendo, in the case of Pokemon Go) the app store is essentially one giant numbers game. Yes, you can spend 10% more time to make your app scalable. But assuming your chance of failure is so high, in most cases that extra 10% of time is going to waste. If you spend 10% more time to make all your Minimum Viable Products (MVPs) scalable, but fail 9x, that’s one fewer MVP you could have built.

And are you really going to stop at 10%? Do you have so much self control and a birds eye view of what you’re doing?

For me, that 10% can become 20% really quick because “well, I put in a CDN on my app, why not put in caching, it’ll only take another 10%.”

Go minimum or go all out. Drawing the line anywhere else isn’t optimal.

#### Failing isn’t so bad.

Erik himself updated his article a few days after:

> The Google Play page says [GoChat] “back 100%” with “over 2 million users”.

GoChat launched an MVP, didn’t know they would get so much traction, and their crappy MVP code buckled under load. GoChat failed.

Or did it?

Because even though GoChat went down, it’s still getting more users than Erik’s GoSnap, which is built to scale. They are different products, sure, but could the extra 10% of time Erik put into GoSnap been better used to hit the app market 2–3 hours sooner? Could Erik be sitting on more users with the 2–3 hours head start and a technical crash after?

Hard to say what the results could’ve been, but it’s interesting to think about.

Even though GoChat’s code failed them, they still bounced back. They optimized in the second step, and still captured over 2 million users. The failure of non-scalable MVPs doesn’t seem to have hurt them all that much in the end.

Could GoChat have gotten more users by this point if they didn’t crash? Possibly. But they sure as hell didn’t miss the gravy train as Erik suggests, so what do you have to worry about?

It’s better to go ahead and launch than to miss the train entirely because you were too busy scaling.











* * *







The thing about “scale” is that at the upper end there are so many users to go around, you can afford to run into problems initially and still capture a good market share post-fix.

At the lower end of “scale” there is nothing. You have nothing on your side but speed of execution. You have to get there fast. Just ask the dozens of other apps that aren’t being downloaded.











* * *







**_Self promotion section!_** _I made_ [_rabbut.com_](https://rabbut.com/?ref=h0)_, a tool that lets you collect emails here on Medium (and other places). Oh look, here is one now:_

[**Looking for my older stories? I’ve got some. Here.**  
_Looking for older stories is a PITA on Medium. Click here for a shortcut._powered.by.rabbut.com](https://powered.by.rabbut.com/s/lbYA?c=10 "https://powered.by.rabbut.com/s/lbYA?c=10")[](https://powered.by.rabbut.com/s/lbYA?c=10)

_Also, I’m giving away my free eBook on starting up a startup. Especially good for people who don’t know how to startup a startup:_

[**First 10 people to subscribe get my free eBook.**  
_How to startup your startup as a nobody._powered.by.rabbut.com](https://powered.by.rabbut.com/e/wNXK?c=0 "https://powered.by.rabbut.com/e/wNXK?c=0")[](https://powered.by.rabbut.com/e/wNXK?c=0)

_Man, these_ [_rabbut_](https://rabbut.com/?ref=h00) _things are like everywhere now. I wonder where you could get one…_








