---
author: Howard Lo
authorTwitter: https://twitter.com/imhowardlo
authorFacebook: https://facebook.com/100003560038939
title: "Putting the M in MVP"
subTitle: "Years ago, I thought I knew what my minimum viable product (MVP) was. But I was wrong, and ended up building way too much...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*zRZ0I0E2sj9xSYRG95An9Q.jpeg
url: https://medium.freecodecamp.org/putting-the-m-in-mvp-71e036034ed9
id: putting-the-m-in-mvp-71e036034ed9
date: 2016-07-31T19:22:06.163Z
tags: [
  "Tech",
  "Startup",
  "Business",
  "Programming",
  "Lean Startup"
]
---
# Putting the M in MVP







![](https://cdn-images-1.medium.com/max/2000/1*zRZ0I0E2sj9xSYRG95An9Q.jpeg)







Years ago, I thought I knew what my minimum viable product (MVP) was. But I was wrong, and ended up building way too much.

Months ago, I thought I knew what my MVP was. But I was still wrong, and ended up building too much, _but not as much as before_.

As you get practice building products, estimating “viability” does get easier. But you still need to be vigilant. Otherwise, you’ll disappear into your laptop for several months, only to emerge with a product nobody wants.

### **_What’s the absolute minimum?_**

The sky is the limit in development. You can code the hell out of something. You can end up with the world’s prettiest and most animated button. The pitfall is that this seem like a worthwhile effort at the time, because you’re putting in work and seeing results.

But there’s an important concept called diminishing marginal returns. At some point, the work you put in isn’t going to move the needle enough to matter.

If you go far enough, the work you put in isn’t going to move the needle at all. And if you’re not careful, you won’t notice that unmoving needle until you’ve just expended a ton of effort.

So when you’re building your startup — or adding a major feature to your start_ed_-up — how are you going to know when to stop? At what point will you realize that you’ve took things too far?

For starters, you should have a general idea of what you think is necessary and what isn’t. You can organized these into two mental lists: must-haves and nice-to-haves.

Once you satisfied your must-haves list, thats when you stop, and _voila,_ MVP achieved.

> If you are not embarrassed by the first version of your product, you’ve launched too late. — Reid Hoffman

No matter how hard you tried, you probably ended up spending too long working on your MVP before releasing it.

But how long is too long? I wish I could tell you. The best I can do is: it’s too long until it’s too short.

Though I can’t give you a straight answer, I _can_ tell you what I learned on my most recent creation, [Rabbut](https://rabbut.com), which makes it easier to build a mailing list on sites like Medium.

After launching Rabbut, it became apparent what we needed vs. what we didn’t. Take what you can from the my Rabbut story — I’m just passing this along as an example in hopes that it will get you thinking about what features your MVP can do without.

### What We Didn’t Need:

#### A forgot password interface.

Since we have user accounts with passwords, it stands to reason that one day someone will forget their password (me included). This was on the list of things that absolutely needed to happen, because people will get pissed if they can’t get into their dashboard.

This didn’t get built simply because I couldn’t figure out how to set it up. Sorry early users!

Rabbut didn’t have password resets. Not even for admins — no one at the company could reset any password.

To prevent people from getting logged out when closing the browser, I set the cookies to expire after a year and removed the “sign out” button. I had to buy as much time as I could.

What happened? Nothing.

No one forgot their password for 5 months. Granted the first month didn’t have a huge influx of new users, but a feature that finally got used 5 months out definitely falls into the “don’t need it now” list.

At the 5 months mark, a poor old man wrote in and said he had forgotten his password, and didn’t know how to access his dashboard. I apologized, told him it was a bug (heh), asked him to give us a few days, and patched the live site with a very 1990's password reset process.

You can check out [our reset password interface](https://rabbut.com/accounts/password/reset/) to see how unpolished the entire process is (you will need to create an actual account first if you want to go through the workflow). You might also notice that it looks strangely like every other part of our site, because it’s recycled code (more on this point later).

#### Terms of Use and Privacy Policy

Let it be known: I am not a lawyer. Let it also be known: this is probably bad advice and you shouldn’t do this.

Let it finally be known: Rabbut survived without a Terms of Use and Privacy Policy (no lawsuits), and you probably will too, until you start getting big.

The honest truth is, hardly anyone reads these, even though they say they do (though they probably should). And hardly anyone will remember what any terms of use or privacy policy says, even if they did take time to read it.

So who cares?

**Pop quiz!**

1.  Do you know where the Medium.com terms of use and privacy policy are?
2.  What is the minimum age to use Medium.com?

We put in the terms of use and privacy policy for Rabbut because we got cold feet one day — not because anyone complained about it. You don’t need to pay hundreds of dollars for a lawyer to draft one up for your zero-traction company if no one even knows you even exist.

Do this later, and in the meantime be a good samaritan and be careful with other people’s private information.

#### Tests

Here is where all the righteous developers will pull out their digital crosses. _You didn’t write a full test suite for your code? See you in hell._

Tests run your code through a series of…tests… to make sure that any new code you add hasn’t screwed up something critical in your project.

If I could snap my fingers and have all my tests written, I’d snap my fingers.

But if you can avoid spending time you don’t have writing tests up front, don’t write them. Especially if you’re the only developer, or if the project is pretty small. Because if something does break, you are probably familiar enough with the small codebase to know how to fix it, or revert your changes if necessary.

You also don’t need tests if your product’s direction is still flexible. The worst thing about pivoting is throwing away the old code. If you pivot, you’ll probably throw away most of your tests, too.

Once you have traction or a big development team, you can write all the tests your heart desires (or hire a test engineer to do it for you).

In the beginning, things change fast. Keep your code lightweight so it can change just as quickly.

#### Scalable code

If it’s all the same to you, write scalable code. If you’re stuck on something for more than half an hour because you can’t come up with a solution that will support 100,000 concurrent users, just write something hacky/unscalable and move on.

I’m not the worlds greatest developer. Things that are easy to some developers take me way longer than they probably should. This includes writing scalable code.

Yes, I would like code that doesn’t break down when I go from 10 users to 10,000,000.

Yes, I would like the developers who join my company later to marvel at my coding prowess and god-like foresight.

But all of that requires researching and understanding the latest methods of developing efficiently. And might I add, your use of best practices won’t be appreciated by anyone other than the developers on your project (and at the moment, that’s probably just you).

And best practices change often, which is why the shelf life of StackOverflow answers is so short. Staying on the cutting edge is a rough, endless pursuit.

Where you can — if you can — write scalable code. Otherwise, make it work, ship it, then worry about optimizing it later.

#### A staging server

We didn’t really use a staging server for testing until we had to test payments. And even then, we could’ve tested them on our local machine (laptop) by using Stripe.

**Pro tip:** if you value your sanity, use Stripe for all your payments.

Staging servers are nice, and they don’t take too long to setup. But if you’re still in the early stages of discovering your product’s identity, they aren’t necessary.

Most developers sleep late, and push buggy code during the dead hours of the night and test on the live server. It isn’t the end of the world if that one user on your site at 4 a.m. has a diminished experience as a result of a buggy push.

#### Start Free

This isn’t a marketing strategy or a pricing strategy.

Start free, because it takes time to set everything up.

If you push out payments, you’re going to need a pricing page to tell people what they get from paying vs. not paying. If you don’t, your users will contact support and your customer support team (probably also you) will hate you, which sucks.

You’re also going to need to code the payment forms and payment systems, which sucks.

You’ll need to setup HTTPS immediately, because most payment platforms won’t allow you to accept money unless you’re secured.

Then you probably need a corporate bank account. Banks suck.

Depending on how much you trust your team, you might also need to incorporate, or setup an official “business.” Incorporating is expensive, and sucks.

Not to mention, if you screw up anywhere in the math or code — like forgetting to add in shipping costs — you might actually lose money on your transactions. This happened to me, and it really sucked.

All of that is just extra time you’ll need to launch.

Humans made it to the moon by getting to orbit first. Start free.

#### HTTPS

You don’t need security in the beginning.

Before you put on your tin hats and cry “what if I get hacked!?” remember: **you need to be popular before you get hacked**.

Most hackers want the best bang for their buck. Why would they hack your obscure project with 10 users when they can focus on places that have 100 million users?

Remember the hacker who leaked a ton of celebrity intimates? Ever wonder why he didn’t bother leaking yours?

Another prime example is Facebook. They didn’t have HTTPS until they got reprimanded and required to from the FTC, [nearly a decade after they launched](http://www.darkreading.com/risk-management/facebook-adopts-secure-web-pages-by-default/d/d-id/1107448). By then, they had sensitive information of millions of people.

You won’t get in trouble for a long time, but HTTPS _does_ make some of your users feel better about your site. I don’t suggest you pull a Facebook and wait a decade, but get HTTPS when you need it (payments) or when your users — or the FTC — complain too much.

### What we actually needed

“What constitutes an MVP” changes from year to year. It depends on people’s expectations.

In the early 90’s, an MVP website was probably just plain text with a single popup ad. Today, an MVP needs to satisfy a crowd with higher standards. So here are some things you _should_ do, aside from no avoid popups:

#### User experience and your front end

You can write crap code. Your server be held together by rubber bands and chewing gum. But your users should _never_ _feel it_.

If your webpage takes 20 seconds to load, fix it. MVP or not, if it affects usability, it matters.

When it comes to MVPs, UX is the exception, because “viable” products need to _feel_ polished, at the minimum. People today expect even beta applications to be functional and not frustrating. Blame all those overachievers that came before you.

Keep your design simple, so you have less to code and less to design. Lately the clean/flat look is in, so this should be easy.

You don’t need fancy animations or interactive easter eggs, but you should spend some time on your front end so it looks and feels modern.

Use pre-made nice-looking CSS frameworks like Bootstrap to cut down on development time.

Reuse HTML components as often as possible, as long as doing so doesn’t lead to confusion. Repurpose button designs, forms, and other components.

Your MVP won’t look the way it did in your dreams, but thats a luxury for version 2.0+.

Fool your users into thinking your app is more polished than it actually is.

#### Organize your database

This may seem like a “nice-to-have” to many people, but I think it is necessary even for an MVP, because it will save a ton of headaches down the road.

I hate migrating data or making surgical changes to it later. It’s unnerving, risky, and most of the time, it’s hard to see what’s going on (unlike front end or design).

Disorganized and fragmented data can slow down your site (UX), make development a huge pain (Developer Experience), and complicate every step you take henceforth.

I take extra time to think about how to store my data in a way where it makes sense for my current product and any foreseeable pivots.

You don’t want to go overboard on schema design, but seriously — don’t half-ass your database. Whole-ass it.

### May The Force Be With You

The truth is — yeah, I reveal the truth after you read everything — you won’t know until you’ve done it. It’s better to come up short than to waste time doing work that won’t matter.

And you won’t know what doesn’t matter unless you come up short.

Don’t worry about embarrassment, because even if your nudes were leaked, you’re probably a semi-anonymous dreamer like the rest of us, and nobody out there will care. Theres startup advice in there somewhere.

Finally, no matter how badly you blow your MVP…

( •_•)  
( •_•)>⌐■-■

…you can always write about it after.

(⌐■_■)











* * *







_I made_ [_rabbut.com_](https://rabbut.com/?ref=h0)_, a tool that lets you collect emails here on Medium (and other places). Oh look, here is one now:_

[**Looking for my older stories? I’ve got some. Here.**  
_Looking for older stories is a PITA on Medium. Click here for a shortcut._powered.by.rabbut.com](https://powered.by.rabbut.com/s/lbYA?c=10 "https://powered.by.rabbut.com/s/lbYA?c=10")[](https://powered.by.rabbut.com/s/lbYA?c=10)

_Also, I’m giving away a few copies of my eBook on starting up a startup. Especially good for people who don’t know how to startup a startup:_

[**First 10 people to subscribe get my free eBook.**  
_How to startup your startup as a nobody._powered.by.rabbut.com](https://powered.by.rabbut.com/e/wNXK?c=0 "https://powered.by.rabbut.com/e/wNXK?c=0")[](https://powered.by.rabbut.com/e/wNXK?c=0)

_Man, these_ [_rabbut_](https://rabbut.com/?ref=h00) _things are like everywhere now. I wonder where you could get one…_








