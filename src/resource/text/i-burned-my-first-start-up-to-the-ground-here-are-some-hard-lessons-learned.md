---
author: Omer Goldberg
authorTwitter: none
authorFacebook: https://facebook.com/10153022250492073
title: "I burned my first startup to the ground. Here are some hard lessons learned."
subTitle: "It’s been nearly 12 months since my first startup went up in flames. I’m going to tell you how it all happened, in hopes that my mistakes..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*B6MKeZAqqaJVUfWRl_2eTg.jpeg
url: https://medium.freecodecamp.org/i-burned-my-first-start-up-to-the-ground-here-are-some-hard-lessons-learned-ecf17c642534
id: i-burned-my-first-start-up-to-the-ground-here-are-some-hard-lessons-learned-ecf17c642534
date: 2017-06-22T05:18:34.112Z
tags: [
  "Startup",
  "Entrepreneurship",
  "Tech",
  "Technology",
  "Life Lessons"
]
---
# I burned my first startup to the ground. Here are some hard lessons learned.







![](https://cdn-images-1.medium.com/max/2000/1*B6MKeZAqqaJVUfWRl_2eTg.jpeg)







It’s been nearly 12 months since my first startup went up in flames. I’m going to tell you how it all happened, in hopes that my mistakes — and the insights I learned from them — can help you in your own startup adventures.

Before you read this gasoline-drenched story, know that I’m doing fine now. I’ve launched a new startup called Mindflow.ai, which just graduated from Y Combinator’s Startup School. You can check out [Mindflow.ai on GitHub](https://github.com/Arieg419/Mindflow.ai) and [sign up for our Alpha release](http://mindflowai.com).

So without further ado, here are some hard lessons learned.

> “Make **something people want**.” —Paul Graham

Before setting out to build my first company, I was a frequent app builder and hackathon attendee. I loved the rush of “willing” an idea into existence with software. The more I built, the more I learned. After building several projects, I began to feel that with enough determination, patience and perseverance nearly anything was possible.



![](https://cdn-images-1.medium.com/max/1600/1*ON02gkKqj6KVWNm6p2JglQ.jpeg)

Me and my sister winning 1st place at summer-long hackathon.



But working on side projects, and building prototypes was no longer enough! I longed to build something with real utility. I wanted to experience creating software that actually solved a problem for people, preferably on a large scale.**_I wanted to build a company_.**

As a university student from Tel Aviv studying at the Technion (Haifa, over 100km away), the problem I wanted to tackle was clear. Transportation! Commuting was a pain point, and finding ways to and from campus was always a logistic issue.

### JoiRyde



![](https://cdn-images-1.medium.com/max/1600/1*OEOYjVgDZpFiH9T0gM-pBQ.png)

Our nifty splash page



Public transportation in Israel is infamous for being subpar and sparsely available on weekends. To combat this, students open Facebook groups for carpooling. Basically, a student will post his starting and final destinations and time of departure. Students wanting to join would reach out via Facebook, WhatsApp or SMS, coordinate a pickup and chip in on gas expenses.

These Facebook groups can get quite large, and often times coordinating a ride is a headache. Searching for a relevant post, remembering to bring exact cash, and talking to several drivers before finalizing ride details were just a few of the required steps for coordinating a ride.







![](https://cdn-images-1.medium.com/max/2000/1*t4B9-JtRPF00R4-UccOsXg.png)

Ride share facebook groups around the world







Even with the added effort of coordinating a ride, ride sharing was still a common solution. Ultimately, it was a smoother experience than public transportation.

I wanted to make the ride sharing experience easier and more enjoyable by building a mobile app that provided and end to end solution for the ride search, coordination and payment.

### Recruiting a Team

Naturally, I turned to my hackathon buddies. After several weeks of advanced persuasion tactics ;) I convinced them that the cause was worthy.

We were a team of 3\. I would act as CEO, and my friends were CTO and CPO (Chief Product Officer).

We were all developers who had never built a real product. Everyone left their jobs, and those of us who were students (me!) put school on hold. We sorta looked like this:







![](https://cdn-images-1.medium.com/max/2000/1*Fy-OXI9YeBI5skAH9AOxkQ.jpeg)







### Early Mistakes

As a first time founder, **_I didn’t really believe this would work_**_._ Although I wanted it to, in my mind, the best case scenario was that people on campus would use our app. I mostly expected to learn a ton along the way, and gain real world experience with my friends. This alone justified putting school on hold for me.

Because of this mindset, a lot of decisions that should have been weighed heavily were not.

Although we each had roles on paper (CEO, CTO, CPO) we didn’t respect them. Every decision, be it API design, logo, or login flow was a fierce debate.

Now this isn’t necessarily a bad thing. This can even be expected in a group of passionate people. Everyone has a vision for “the best” product, and it’s natural that these visions don’t always align perfectly. But these debates need to be solved quickly and not hinder progress.

**_A startup is not a democracy._** When you have a team everyone should have a set of responsibilities, and **_founders need to trust each other_.** For a given decision it is okay to voice your opinion. But at at the end of the day, the responsibility and authority should fall on one persons shoulders.

### MVP

We all had heard of the importance of building an MVP to test your product out. **Never go full development mode before validating your idea!**

Although we had good intentions, our “MVP” was a full fledged cross platform mobile app. The amount of features was ridiculous.

Come to think of it, I can name several companies who have a smaller set of functionality than what we were trying to build out. This was bad for several reasons:

1.  Our deadline was frustratingly far. We embarked on nearly 6 months of hardcore development, before having our MVP working. Interestingly enough, this deadline would never be reached…
2.  We coded alone, without **_real user feedback._**
3.  We _polished_ the app, trying to perfect it before letting anyone see what we were working on. What a waste of time!

Here are some screenshots of what we were doing. Looking back, this does not look close to what an MVP should look like.



![](https://cdn-images-1.medium.com/max/1600/1*OzvrJLEavjFXXhhmP6qzZw.png)

In app chat for the MVP. Why?!





![](https://cdn-images-1.medium.com/max/1600/1*r8kCXsn0cpsr3MihMfD1XQ.png)

User profile with Facebook Graph API





![](https://cdn-images-1.medium.com/max/1600/1*Ofgm6WN4gCyHMbTjvC-2tQ.png)

Search for a ride



### Funding and Accelerators

Damn, Facebook’s newsfeed algorithms are good. One bright morning while scrolling through my feed during a coding break, something strange pops up. [Capsula](https://capsula.tau.ac.il/) transportation and a clean energy accelerator ad. They were offering 100k grants for entrepreneurs building smart transportation / clean energy ventures.

We debated whether or not we should apply… After all, we were just students… 2 days and 3 YOLOs later we submitted an application form.

Lo and behold, we were called in for an interview!

The accelerator interview cycle was an intense process. We prepared one pagers, executive summaries, pitch decks and did market research. Just a reminder, we were 3 hackers with no business development experience at all. This process was stressful and highlighted stark contrasts in approaches between team members.

This process ate into my development time, but it was extremely important. The research and preparation made me feel more confident about what we were building. **_At this point all of us started believing that this could become a real company._**

Fast forward several weeks and we were selected for the grant! We were ecstatic. But with the accelerator selection, and the promise of funds being injected into the company, things got worse.

Our communication as a team deteriorated, and issues we had were magnified. As teammates, we overstepped our boundaries and everybody was trying to be involved in _every_ decision being made. This was clear to all of us. But instead of handling the issues, we chose to suppress them. We didn’t want a potentially ugly conversation to mess up our mojo, or make us appear divided in front of investors. **_Man, that was a mistake._**

### Things Fall Apart

With the 100k grant, we now had runway to push our MVP. The accelerator provided legal counsel and one of the first things we did was register JoiRyde as a company. This involves allocating stock shares. What this did not involve was **_signing_** a vesting agreement of any sort. I emphasize signing, because we had one written up, but our new lawyers wanted to modify it, and told us not sign it yet.

So because we were equal partners with no vesting agreement, even though we were only 7 months in to our venture, all of us held 33% percent of the company. This was another **_fatal mistake_** for the company.



![](https://cdn-images-1.medium.com/max/1600/1*P_2Nsf1zMdVphQBNwZ5xiw.gif)

How I wish our legal counsel would have reacted



After going through the red tape of setting up a company, more decisions were to be made, like which founder would join me in San Francisco for our Alpha release. I’m going to skip details of the drama here out of respect for those involved.

We couldn’t see eye to eye on the future of our company. Business decisions were taken personal. Damage done at this point was irreversible. Instead of solving differences between us as a team, one of our founders involved our investor. This signaled trouble for our investor, who reached out to me, trying to understand what was happening.

After thinking over the matter, I decided that we couldn’t continue with the founder in question. Our company was about to face numerous challenges, in an already competitive market. If their were already serious problems with trust, communication and vision, these were sure to grow exponentially as the company progressed.

### Trying to Find Middle Ground

We tried to find a solution, by offering compensation to the founder in question.

We offered shares equal to what was written in our unsigned but verbally agreed upon founders agreement. **_Nope._**

We offered _more_ shares than the amount that was written in our unsigned but verbally agreed upon founders agreement. **_Nope._**

The founder in question wanted to leave the company with 33 percent ownership of stock. **_Legally, it was possible, because we didn’t have a vesting agreement._** At this point the accelerator pulled out (rightfully so). No investor would back a company that was in such turmoil before it even had a single user. The ride was over.

### **_Looking Back_**

12 months later, things have simmered down. I’ve gone back to school (finishing my junior year), launched an alpha version of my current venture [Mindflow.ai](https://arieg419.wixsite.com/mindflow), and am starting a Software Engineering internship at Facebook next month.

Although my first company didn’t work out as I had planned, I learned a lot and am thankful for the experiences I had. To sum up the key takeaways from my journey.

1.  **Know Thy Founder** — This sounds soooo cliche. Don’t start a company with someone you don’t know well! Starting a company is **_hard,_** and you’re going to experience a rollercoaster of emotions. Make sure you have a proven track record together, before rushing to open a company.
2.  **Stay Lean** — Figure out the scope of your venture, and be as lean as possible. Is there enough work for 3 people? Is there enough for 2? Having too many founders is a sure way for frustration to build early and fast.
3.  **Find the missing pieces **— When building a lean team, every founder should bring a distinct skill set to the table. Having 3 founders share similar skill sets doesn’t make much sense. Preferably, each founder brings something different and necessary to the mix.
4.  **Ship fast, ship often — **“Shhhhh….. We’re in stealth mode!!” LOLZ. Unless you’re working on a ground-breaking patent, show people what you’re working on as early as possible. Collect feedback, integrate it, ship, repeat.
5.  **Settle legal stuff ASAP** — About to put your life on hold to start your company? Great! If you’ve already decided to do that, spend the time and money to sort out the basics like a founder agreement. _This would have saved our company._ I had never imagined things would play out like this. The second things start getting emotional the script changes quickly. Minimize potential damage before s*#t hits the fan.

### Moving forward

If you found this helpful feel free to to give it a ❤. You can follow me on [Medium](https://medium.com/@omergoldberg), [Linkedin](https://www.linkedin.com/in/omer-goldberg-680b40100/) or [Github](https://github.com/Arieg419), where I post tech / entrepreneurship related stuff.








