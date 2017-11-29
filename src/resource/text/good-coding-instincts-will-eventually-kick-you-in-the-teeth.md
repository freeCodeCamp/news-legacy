---
author: Bill Sourour
authorTwitter: https://twitter.com/BillSourour
authorFacebook: https://facebook.com/146616355903929
title: "Good coding instincts will eventually kick you in the teeth"
subTitle: "I wrote my first few lines of code almost 32 years ago, when I was 6 years old. I developed very strong coding instincts. I could look at..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*YiNzs1FIlS1SNVlOYYuK9g.jpeg
url: https://medium.freecodecamp.org/good-coding-instincts-will-eventually-kick-you-in-the-teeth-2b3766897f3f
id: good-coding-instincts-will-eventually-kick-you-in-the-teeth-2b3766897f3f
date: 2016-07-06T08:19:59.803Z
tags: [
  "Programming",
  "Web Development",
  "Education",
  "Design",
  "Tech"
]
---
# Good coding instincts will eventually kick you in the teeth







![](https://cdn-images-1.medium.com/max/2000/1*YiNzs1FIlS1SNVlOYYuK9g.jpeg)







I wrote my first few lines of code almost 32 years ago, when I was 6 years old. I developed very strong coding instincts. I could look at any problem and immediately know how to solve it, just by intuition.



![](https://cdn-images-1.medium.com/max/1600/1*305XiJ_yIDQVftkLOrJUNA.gif)



By the time I started coding the web for a living, I felt like a rock star. I found and fixed bugs faster than any of my co-workers. My team started assigning me all the most challenging features and the most nagging bugs. They even started calling me a “wizard.”

But following your intuition can only take you so far. I hit a plateau. And no amount of coding instinct was going to push me past it.

#### The trouble with trusting your gut

Unfortunately, intuition as a technique for learning and problem solving doesn’t scale very well. When you rely on instinct and intuition alone, you get a curve that looks like this:



![](https://cdn-images-1.medium.com/max/1600/1*dcJsHgUeI4qWCH1udc8IAA.png)



Of course, you can choose to accept your limits and only ever deal with problems below the line. This will indulge your “rock star coder” fantasy, but it will quickly begin to limit your growth and your career. Plus, it’s boring.

As I pushed myself further and further ahead in my career — and started to really challenge my own abilities — I began to notice a disturbing trend. I was no longer the fastest kid on the block.

I had always known that I’d eventually run into people smarter and more talented than me. (My delusions of grandeur were still grounded in reality. I’m no genius.)

But when I looked around, I realized that some of the people beating me were not using a superior intellect or some sort of innate gift for code. They just had a secret weapon that I sorely lacked: **discipline**.

It turns out that a consistent, repeatable, methodical approach to learning and problem solving will eventually outperform any natural gifts — or instincts — that you may have developed.



![](https://cdn-images-1.medium.com/max/1600/1*GXRfIH_YU0t_pu3ZIqFCqA.gif)

Your instincts don’t stand a chance



#### Let’s tool up those problem solving abilities

Regardless of who you are, how much passion or natural talent you have, you will eventually hit a hard ceiling. I’m going to share with you a few techniques that will dramatically improve your disciplined problem solving abilities.

I’m assuming that, if you have a debugger, you’ve already run it, Googled the output, and had no luck.

I’m also assuming that if the problem was reported by someone else, you have been able to reproduce the problem. This second assumption is a big one. If you can’t reproduce the problem, then that needs to be your first step.

You need to compare the context and environment in which the problem occurred to the context and environment in which you are trying to reproduce it. Start eliminating any differences you can, one by one, until you can reproduce.

Once you can reproduce the problem, and after the debugger has failed to be of any use, you can try the following **disciplined** approaches.

#### RTFM

Read the documentation, you fool! (Admittedly this isn’t what RTFM stands for exactly, but there may be children reading.)

**Actually read it** — more than once if you need to. Don’t just skim it looking for something you can copy, paste, and pray will work.

The problem is you want an answer fast. You want that thrill of victory. But you’re not willing to put in the work. So slow down. Take a breath. Grab a coffee. And read the **relevant** documentation all the way through.

If you have no documentation, consider creating some, then sharing it with others after you’ve fixed the problem.

#### Test Your Assumptions

If you expect something to work and it doesn’t, it’s because you’ve made a bad assumption somewhere along the way. Take an inventory of your assumptions and try to prove that each one is true.

Start with the most basic assumptions that can be quickly tested. Is the server actually running? Is it connected to the network? Is everything spelled correctly? Are all the brackets and semicolons in the right place?

If you don’t start with the simple things, and it does turn out to be one of these things, when you finally figure it out you will want to jump out a window. So save yourself the headache.

#### Disassemble and Reassemble



![](https://cdn-images-1.medium.com/max/1600/1*EJNfxVL99cHaU5kqMiKLQA.gif)

Johnny 5 may have been alive, but your code isn’t. Don’t be afraid to disassemble it.



Remove components from the solution until it starts working again, then put the components back one-by-one in order to find the broken piece.

This feels tedious and scary, but it is one of the most effective, disciplined ways to find the cause of a bug in your code. Make sure you have a backup before you start though, in case you accidentally end up with Humpty Dumpty code (code that you can’t put back together again).

By the way, if you find yourself in a situation where you don’t know how to reassemble the code back to how it was, this is an indication of a potentially bigger problem: you don’t understand the codebase you’re working with. That’s bad bananas, my friend.

If you’re on a tight deadline, seek help immediately from someone who understands the codebase better than you. If no such person exists, dig in for a long night, and prioritize getting to know and understand how this code works, so that you can fix it.

#### Eliminate Variables

Anything that can change from one trial to the next should be made to remain static while you’re debugging. You can’t hit a moving target. This is where Test Driven Development (TDD) comes in handy. If you’re using TDD, then you should have some mock objects at your disposal.

> Mock objects are simulated objects that mimic the behavior of real objects in controlled ways. A programmer typically creates a mock object to test the behavior of some other object, in much the same way that a car designer uses a crash test dummy to simulate the dynamic behavior of a human in vehicle impacts. — [Wikipedia](https://en.wikipedia.org/wiki/Mock_object)

If you didn’t do TDD, then you’ll need to mock out any moving parts now, so that you can find the bug under stable conditions.

Here’s a tip: if you mock an object and the bug suddenly goes away, then the bug is likely in the object you mocked.

#### Use the “Saff Squeeze”

There’s a technique called the “Saff Squeeze” — named and popularized by [Kent Beck](https://en.wikipedia.org/wiki/Kent_Beck) — that is sort of a cross between the two ideas above.

He describes it this way:

> “To effectively isolate a defect, start with a system-level test and progressively inline and prune until you have the smallest possible test that demonstrates the defect.” — Kent Beck

So instead of formal mocks or code disassembly, you simply add the body of the functions that you’re testing into the test itself, then move the assertions down until the bug goes away.

This has the added benefit of leaving you with smaller, more specific tests.

> **Edit**: Thanks to [Jim Balter](https://medium.com/@jqbalter) for pointing out [this link](http://stackoverflow.com/a/23890913/544557) to a good example and explanation of the Saff Squeeze.

#### After You Fix It, Break It and Fix It Again

Never leave a bug until you fully understand how you fixed it. You should be able to reproduce the bug and fix it again at will.

I can’t stress this enough. If you fix a bug and you’re not sure exactly what caused it or how you managed to fix it, that bug will come back to bite you at the worst possible time.

#### What About Those Instincts?

Now that you’ve learned these techniques, does that mean you should always use them first instead of relying on your instincts? No. Absolutely not.

What I recommend is that you give your instincts a time box in which to succeed. If you have a strong hunch about what the problem might be — and you can test your hunch quickly — do that first. If the bug is below the green line in the chart above, chances are that your instincts will be the fastest path to a solution.

Once you’ve quickly tried your first or second hunch and been wrong though, stop the shotgun approach and start doing things methodically.

Having both instincts and discipline will make you one of the top coders on any team.











* * *







If you liked this piece, please ❤ recommend ❤ and share it. I’d like to help as many developers as I can.











* * *







To help you even more, I have put together a **free** PDF list of my five favourite code refactoring techniques — that lead to fewer bugs — get it by   
[**clicking here.**](https://devmastery.com/signup/instinct/index.html)








