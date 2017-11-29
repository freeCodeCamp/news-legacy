---
author: Filip Hracek
authorTwitter: none
authorFacebook: none
title: "Why open source projects (sadly) favor new users, and what you can do about it"
subTitle: "Every now and then, all developer products (SDKs, frameworks, APIs) will have to choose between favoring their existing users or new ones..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*m13n-rBdC5GtBhHN9nLqRQ.jpeg
url: https://medium.freecodecamp.org/why-open-source-projects-sadly-favor-new-users-and-what-you-can-do-about-it-ba586038949e
id: why-open-source-projects-sadly-favor-new-users-and-what-you-can-do-about-it-ba586038949e
date: 2017-08-19T16:18:15.107Z
tags: [
  "Open Source",
  "Startup",
  "UX",
  "Tech",
  "Programming"
]
---
# Why open source projects (sadly) favor new users, and what you can do about it







![](https://cdn-images-1.medium.com/max/2000/1*m13n-rBdC5GtBhHN9nLqRQ.jpeg)







Every now and then, all developer products (SDKs, frameworks, APIs) will have to choose between favoring their existing users or new ones. Make the initial app “just work” for beginners with some default magic? You hurt the debuggability of large apps. Introduce a feature for your power-users? The newcomers will have to deal with a steeper learning curve.

In April, I wrote about the [“Hello World” fallacy](https://medium.com/@filiph/the-hello-world-fallacy-ef4f43ca8b7e). This is the unconscious assumption that if it’s easier to get started with technology A than with technology B, then A is better than B.

This is bad, because most developers, most of the time, don’t write hello world apps. They fall in love with how easy it is to build a demo. Then, months later, they struggle while trying to build an actual product.

But it gets worse.

It’s not just perception. Favoring the “Hello World” scenario **actually pays off in the long run**if you’re building an open source library or framework. Sadly, you’re better off sacrificing productivity of your long-term users to make things easier for your new users.

This is because of the dynamics of technology adoption:



![](https://cdn-images-1.medium.com/max/1600/1*QGmAaAtp8tbLhINmfeV8vA.png)

Simplified diagram of developer tech adoption.In the diagram above, we have two competing technologies, A and B. Their adoption is proportionate to the buzz (blogposts, talks, Github repos) around them, and to their perceived value as reported by current users.



There is a **reinforcing feedback loop** here. The more people try the technology, the more buzz is generated around it, so more people try it, and so on.

After some time, developers stop using the technology and move on to something else. This **churn** is proportionate to their dissatisfaction with the tech and with its age.

The problem is with **delays**. The reinforcing feedback loop from new users is almost immediate. The first blogposts start appearing after mere weeks. But the churn and the more informed articles appear much later, after many months. It takes time to build something real. You need to build something real before you can talk about the underlying technology in an informed way.

Let’s say technology A optimized for initial ease of use (“hello world” and small apps). Technology B optimized for long-term users (real apps). **If technology A gets twice the initial buzz from new users than technology B, and technology B gets twice the informed buzz than technology A, then technology A still wins — by a large margin.** That’s because, in our little model, the informed buzz trails the initial buzz by an average of 12 weeks. That’s all it takes. Technology A will attract new users at a much faster pace. It will also lose users more rapidly than technology B. But that churn happens much later and, in general, slower than in the adoption phase.







![](https://cdn-images-1.medium.com/max/2000/1*A8UxqqpNz4EqFkfvXjvIIQ.png)

Result of a simple simulation.







By the time technology A loses its advantage, it’s all over. Both technologies are on their slow way out. Technology A had been used by almost twice as many developers at that point. **Despite being worse for building real apps**.

Say technology B goes all the way. It optimizes the hell out of the long-term user experience, and completely de-prioritizes the “hello world” scenario. The result is even sadder:







![](https://cdn-images-1.medium.com/max/2000/1*hA1THDBInoFnXxTNfIfoqA.png)







No matter how you fiddle with the numbers, technology B always loses. The reinforcing feedback loop and the delay in churn will always be there.

Let’s look at exactly what I mean by “optimizing for new users” versus “optimizing for long-term users.”

#### What’s important for new users (first few weeks or months):

*   Length and ease of first-time setup
*   Defaults & automagic (ability to “just work” for the most prevalent initial scenarios)
*   Size of small apps
*   Performance of small apps
*   Freedom (“use whatever you’re used to”)

#### What’s important for long-term users (once they’ve built a large app):

*   Ease of refactoring
*   Explicitness (the “do not surprise the programmer” principle)
*   Customizability
*   Size of big apps
*   Performance of big apps
*   Standardization

### Why is this an open source problem?

One great thing about open source is that it’s free. In this case, that’s also part of the problem.

Paid SDKs and frameworks will never see the rate of adoption that open source does. But they’re also someone’s business. Businesses tend to prefer ongoing, long-term customers over uncertain new leads. If technology A was a company, it would not fare well.

Please note: I am _not_ saying we should all start paying for frameworks now. I’m just explaining why open source is particularly vulnerable to this problem.

I believe this is one of the reasons for the “[JavaScript fatigue](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f)” in the web world, by the way. That ecosystem naturally selects technologies that are easy to start with. This creates an arms race: new generations of libraries and frameworks are ever more easy on the newcomer, but harder to scale.

Technologies that _don’t_ optimize for the “hello world” are doomed to obscurity. You end up with a rapid succession of technologies that are innovative but not great for building large software projects.



![](https://cdn-images-1.medium.com/max/1600/1*QKNLiP2pBCbjQgFLq-jh8Q.png)

Comparison of the lifetime of .NET versus the lifetime of knockout.js.



It’s not only the JavaScript ecosystem, of course. The whole world of developer products is seeing faster turnarounds. The .NET Framework is 15 years old this year, and it’s still in use. That’s a remnant of an old era. Today, even outside the web ecosystem, we see frameworks that ‘rule’ for 18 months and then die.

### What can we do about it?

I hope I’ve shown that this is not about framework and library owners being dishonest, nearsighted, or stupid. The problem is inherent to the ecosystem. It stems from feedback delays — something nobody can really do anything about (unless they possess a time machine).

As a library owner, if you “choose not to play,” you will significantly harm your project’s chances for success. You will become technology B.



![](https://cdn-images-1.medium.com/max/1600/1*_l6BvhiinK2Tt5_DJu6Dyg.gif)



That being said, framework owners _can_ be conscious about this. They can educate about software scalability. They can seek out their largest “customers” and work closely with them. They can consciously and transparently emphasize large apps over tech demos. My hope is that the industry starts doing it as a whole. It’s in everyone’s interest.

For consumers of these frameworks (and SDKs, libraries, APIs), the advice is quite simple:

**Never listen to anyone who hasn’t built a very large* app with the technology they’re talking about.**

(* The size of the app depends on what _you_ want to build.)

The problem with this piece of advice is probably clear. If you live by it, you’ll miss every cool new technology that is out there. By the time someone builds something big enough, and is therefore competent to speak, you might very well be too late to the party.

So I have some less glorious but more practical advice for you:

*   **Take note of the people on the project and their track record.** Past behavior is the best predictor of future behavior.
*   **Ignore the “hello world” experience.** Know that 99.99% of your time with the technology will _not_ be “hello world.”
*   **Be wary of implicit “magic.”** That almost never mixes well with real apps.
*   **Discount recommendations by people who only build small apps or proof-of-concepts.**
*   **If you want to get fancy, build “app generators” that automatically produce very large codebases in the technologies you are evaluating.** With this, you can produce an approximation of a huge 100KLOC app in a single afternoon. See how the generated large app performs and how the tooling keeps up at this scale. (This is what the AngularDart team at Google does to gauge its own framework’s standing among others.)

If you have other ideas, please share them in the comments. I’ll happily add the best ones above.








