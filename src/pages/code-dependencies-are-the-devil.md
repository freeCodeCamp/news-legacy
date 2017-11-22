---
author: Bill Sourour
authorTwitter: https://twitter.com/BillSourour
authorFacebook: https://facebook.com/146616355903929
title: "Code dependencies are the devil."
subTitle: "The tools, libraries, and frameworks we use to build our web applications today are drastically different from the ones we used just a fe..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*oFvJ70L0ahpQsMqzCA0gww.jpeg
url: https://medium.freecodecamp.org/code-dependencies-are-the-devil-35ed28b556d
id: code-dependencies-are-the-devil-35ed28b556d
date: 2016-10-26T23:53:54.170Z
tags: [
  "Programming",
  "Web Development",
  "JavaScript",
  "Tech",
  "Startup"
]
---
# Code dependencies are the devil.



![](https://cdn-images-1.medium.com/max/1600/1*oFvJ70L0ahpQsMqzCA0gww.jpeg)

Your dependencies will burn you every time.



> “Change is the only constant…” – Heraclitus (Philosopher)

The tools, libraries, and frameworks we use to build our web applications today are drastically different from the ones we used just a few short years ago.

In a few short years from now, most of these technologies will have changed dramatically again. Yet, many of us make these a central, inextricable part of our apps.

We import, use, and inherit from the flavor-of-the-month frameworks as if they’re all going to be around and unchanged forever. Well… they’re not. And that’s a problem.

After 20+ years of developing, designing, and architecting web applications, I’ve come to appreciate two important truths:

1.  External dependencies pose a great threat to the long term stability and viability of any application.
2.  It’s increasingly difficult — if not impossible — to build any kind of non-trivial app without leveraging external dependencies.

This article is about reconciling these two truths so that our apps have the greatest chance of long-term survival.

### The rabbit hole is very deep indeed.



![](https://cdn-images-1.medium.com/max/1600/1*YX_NxayhYTBgkcRzISvF5g.gif)



If we start thinking of all the things our web apps depend upon it’s easy to think of a dozen or more before we even get to the code:

*   Power
*   Connectivity
*   Firewall
*   DNS
*   Server Hardware (CPU, Disk, Ram, …)
*   Cooling
*   Virtualization Platform
*   Container Platform
*   Operating System
*   Web Server Platform
*   App Server Platform
*   Web Browser

As developers, it’s good to be aware of these things, but there’s often not much we can do about them. So, let’s ignore them for now and talk only about the code.

In code, there are three kinds of dependencies:

#### 1\. Dependencies we control

This is code written and owned by us or our organization.

#### 2\. Dependencies we don’t control

This is code written by a third party vendor or open-source software community.

#### 3\. Dependencies once removed

These are the code dependencies our third-party code dependencies depend upon. (Say that three times fast!)

We’re going to talk mainly about **dependencies we don’t control**.

**Dependencies we control** and **dependencies once removed** can still cause headaches, but in the case of dependencies we control, we should be able to directly intervene and mitigate any problems.

In the case of dependencies once removed, we can usually rely on a third-party to take care of it for us, since they are dependent on these, too.

### Why third-party code dependencies are good



![](https://cdn-images-1.medium.com/max/1600/1*aQD4u1YevY-u8vxvIIuccw.png)



A large portion of your web application exists to solve common problems: authentication, authorization, data access, error handling, navigation, logging, encryption, displaying a list of items, validating form inputs, and so on...

Regardless of which technology stack you use, there’s a good chance that common solutions to these problems exist, and are available as libraries that you can easily acquire and plug-in to your codebase. Writing any of this stuff completely from scratch is generally a waste of time.

You want to concentrate on code that either solves an uncommon problem or solves a common problem in an uncommon way. That’s what makes your application valuable: the code that implements the business rules that are unique to your app alone — the “secret sauce.”

Google’s search and page ranking algorithm, Facebook’s timeline filtering, Netflix’s “recommended for you” section and data compression algorithms— the code behind all of these features is “secret sauce.”

Third-party code — in the form of libraries — allows you to quickly implement those commoditized features of your app, so you can stay focused on your “secret sauce.”

### Why third-party code dependencies are bad

Take a look at any non-trivial web-app built in the last couple of years and you’ll be absolutely astounded by the amount of code that actually comes from a third-party library. What if one or more of those third-party libraries [changes drastically](https://daveceddia.com/angular-2-should-you-upgrade/), or [disappears](http://blog.parse.com/announcements/moving-on/), or [breaks](http://www.theregister.co.uk/2016/03/23/npm_left_pad_chaos/)?

If it’s open-source, perhaps you can fix it yourself. But how well do you understand all the code in that library you don’t own? A big reason why you use a library in the first place is to get the benefits of the code without having to worry about all the details. But now you’re stuck. You’ve completely tied your fortune to these dependencies that you don’t own and don’t control.



![](https://cdn-images-1.medium.com/max/1600/1*o963wIB3tC1jp1xrVmLzxw.gif)

Don’t worry, by the end of this article, you’ll find a new hope.



Perhaps you think I’m exaggerating, or speaking from a purely academic point of view. Let me assure you — I have dozens of examples of clients who completely snookered themselves by embedding third-party code too tightly into their app. Here‘s just one recent example…

A former client of mine built their app using a Backend-as-a-Service provider owned by Facebook, called [Parse](http://Parse.com). They used a JavaScript client library provided by Parse to consume the Parse service. In the process, they tightly coupled all of their code — including the “secret sauce” code — to this library.

Three months after my client’s initial product launch — just as they started getting some good traction with real, paying customers — Parse announced it was shutting down.

Now instead of focusing on iterating on their product and growing their customer base, my client had to figure out how to either migrate to a self-hosted, open-source version of Parse, or replace Parse completely.

The disruption this caused for a young, fledgling application was so huge that my client eventually scrapped the app entirely.

### Balancing the good and the bad



![](https://cdn-images-1.medium.com/max/1600/1*1JOPLsui4CqbQJBzG5IyVw.gif)



Several years ago, my go-to solution for overcoming the risks while retaining the benefits of third-party-libraries was to wrap them using the [Adapter Pattern](http://www.dofactory.com/javascript/adapter-design-pattern).

Essentially, you wrap the third party code in an adapter class or module that you’ve written. This then works to expose the functions of the third party libraries in a manner that you control.

Using this pattern, if a third-party library or framework changes, or goes away, you only have to fix a bit of adapter code. The rest of your app stays intact.



![](https://cdn-images-1.medium.com/max/1600/1*pcTpvQb9ChTfAv4scuM7Gw.jpeg)

Adapter pattern diagram from [Dofactory.com](http://www.dofactory.com/javascript/adapter-design-pattern)



This sounds good on paper. When you have self-contained dependencies that only provide a few functions, this will do the trick. But things can get ugly fast.

Can you imagine having to wrap the entire React library (including JSX) before using any of it? How about wrapping jQuery, or Angular, or the Spring framework in Java? This quickly becomes a nightmare.

These days I recommend a more nuanced approach…

For each dependency you want to add to your codebase, evaluate the level of risk it will introduce by multiplying two factors:

1.  The likelihood that the dependency will change in a material way.
2.  The amount of damage a material change to the dependency would do to your application.

A third-party library or framework is **less likely** to change when some or all of the following things are true:

*   It has been around for several years and has had several major releases.
*   It is widely used by many commercial applications.
*   It has the active support of a large organization — preferably a household name company or institution.

A third-party library or framework will do **less damage** to your application when some or all of the following things are true:

*   It’s only used by a small portion of your application, rather than being used throughout.
*   The code that depends upon it is not part of that “secret sauce” I talked about earlier.
*   Removing it requires minimal changes to your codebase.
*   Your entire application is very small and can be rewritten quickly. (Be careful with this one — it’s rarely true for very long.)

The riskier something is, the more likely you should be to wrap it or avoid it altogether.

When it comes to the code that is really central to the value proposition of your application —your “secret sauce” — you need to be extremely protective of it. Make that code as independent as possible. If you absolutely need to use a dependency, consider injecting it rather than directly referencing it. Even then, be careful.

Sometimes this means saying “no” to a third-party library you think is really cool, or that you really want to use for one reason or another. Be strong. Trust me, it will pay off. Just ask all those people who invested heavily in the very first release of Angular, or my former client who used Parse everywhere. It’s no fun. Believe me.

Speaking of fun, take a look at this…



![](https://cdn-images-1.medium.com/max/1600/1*NzMKhRyHJT0myaBb7-A7HQ.jpeg)

Dependency graph for [TinyTag explorer](http://www.tarind.com/depgraph.html)



The image above is the dependency graph for an application called TinyTag Explorer.

Generating a dependency graph for your existing apps is a great way to understand the level of risk being introduced by your dependencies. I’ve put together a list of free tools for generating graphs similar to the above in a variety of languages including JavaScript, C#, Java, PHP, and Python. You can get it [here](https://devmastery.leadpages.co/dependency-tools).

### Help me help others

I want to help as many developers as I can by sharing my knowledge and experience with them. Please help me by clicking the ❤ recommend button (green heart) below.

Finally, don’t forget to grab your list of free dependency graph generators [here](https://devmastery.leadpages.co/dependency-tools).








