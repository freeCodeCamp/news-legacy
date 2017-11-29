---
author: Tyler McGinnis
authorTwitter: https://twitter.com/tylermcginnis
authorFacebook: https://facebook.com/10153707086226430
title: "The History of JavaScript: ECMAScript, TC39, and beyond"
subTitle: "JavaScript is a living language which is constantly adding new features. What I want to do in this post is break down that process and sh..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*sGOwSnyYGIaqrPEz4hf4hg.png
url: https://medium.freecodecamp.org/ecmascript-tc39-and-the-history-of-javascript-26067498feb9
id: ecmascript-tc39-and-the-history-of-javascript-26067498feb9
date: 2017-09-28T08:14:05.284Z
tags: [
  "JavaScript",
  "Web Development",
  "Tech",
  "Startup",
  "Technology"
]
---
# The History of JavaScript: ECMAScript, TC39, and beyond







![](https://cdn-images-1.medium.com/max/2000/1*sGOwSnyYGIaqrPEz4hf4hg.png)







JavaScript is a living language which is constantly adding new features. What I want to do in this post is break down that process and show the steps needed for a new feature to go from a simple idea to part of the official specification. To do that, we’ll need to cover three things: ECMA, ECMAScript, and the TC39.

Note that I’ve also recorded a video version of this article, if you’d prefer to watch that:









<iframe data-width="854" data-height="480" width="980" height="551" src="https://medium.freecodecamp.org/media/36573e255beaf46beabaf6a4ff9f2bf8?postId=26067498feb9" data-media-id="36573e255beaf46beabaf6a4ff9f2bf8" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FgytOcNFV1dM%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>









Let’s take ourselves back to 1995\. The cult classic Heavy Weights was in theaters, Nicolas Cage won an Oscar, and websites looked something like this. Now, odds are the way you viewed this website was with Netscape Navigator.

At the time, Netscape Navigator was the most popular web browser with almost 80% market share. The founder of Netscape, the company behind Netscape Navigator, was Mark Andreessen. He had a vision for the future of the web and it was more than just a way to share and distribute documents. He envisioned a more dynamic platform with client side interactivity — a sort of “glue langauge” that was easy to use by both designers and developers.

This is where Brendan Eich comes into the picture. He was recruited by Netscape with the goal of embedding the Scheme programming language into Netscape Navigator. But before he could get started, Netscape collaborated with Sun Microsystems to make their up and coming programming language Java available in the browser. Now this brings up the question, “If Java was already a suitable language, why bring on Brendan to create another one?“.

Well if you remember back to Netscape’s goal, they wanted a scripting language that was simple enough for designers and amateurs to use — Java wasn’t that. So the idea became that Java could be used by professionals and “Mocha”, which was the initial name of JavaScript, would be used by everyone else.

Because of this collaboration between languages, Netscape decided that Mocha needed to compliment Java and should have a relatively similar syntax. Then, in just 10 days, Brendan created the first version of Mocha which still had some functionality from Scheme, the object orientation of SmallTalk, and the syntax of Java. Eventually the name Mocha changed to LiveScript and then LiveScript changed to JavaScript as a marketing ploy to ride the hype of Java. So at this point, JavaScript was marketed as a scripting language for the browser — accessible to both amateurs and designers while Java was the professional tool for building rich web components.

Now, it’s important to understand the context of when these events were happening. Besides Nicolas Cage winning an Oscar, Microsoft was also working on Internet Explorer. Because JavaScript fundamentally changed the user experience of the web, if you were a competing browser you had no choice but to come up with your own JavaScript implementation since it wasn’t standardized yet. So, that’s exactly what Microsoft did and they called it JScript.

This lead to a pretty famous problem in the history of the internet. JScript filled the same use case as JavaScript, but its implementation was different. This meant that you couldn’t build one website and expect it to work on both Internet Explorer and Nestscape Navigator. In fact, the two implementations were so different that “Best viewed in Netscape” and “Best viewed in Internet Explorer” logos became common for most companies who couldn’t afford to build for both implementations.

This is where Ecma comes into the picture. Ecma International is “an industry association founded in 1961, dedicated to the standardization of information and communication systems.” In November of 1996, Netscape submitted JavaScript to Ecma to build out a standard specification.

By doing this it gave other implementors a voice in the evolution of the language and, ideally, it would keep other implementations consistent across browsers. So let’s dive into how Ecma works.

Each new specification comes with a standard and a committee. In JavaScript’s case, the standard is ECMA-262 and the committee who works on the ECMA-262 standard is the TC39\. If you look up the ECMA262 standard, you’ll notice that the term “JavaScript” is never used. Instead, they use the term “EcmaScript” to talk about the official language. The reason for this is because Oracle owns the trademark for the term “JavaScript”, so to avoid legal issues, Ecma used the term EcmaScript instead.

In the real world, ECMAScript is usually used to refer to the official standard, EMCA-262, while JavaScript is used when talking about the language in practice. As mentioned earlier, the committee which oversees the evolution of the Ecma262 standard is the TC39, which stands for Technical Committee 39.

The TC39 is made up of “members” who are typically browser vendors and large companies who’ve invested heavily in the web like Facebook and PayPal. To attend the meetings, “members” (again, large companies and browser vendors) will send “delegates” to represent said company or browser. It’s these delegates who are responsible for creating, approving, or denying language proposals.

When a new proposal is created, that proposal has to go through certain stages before it becomes part of the official specification. It’s important to keep in mind that in order for any proposal to move from one stage to another, a consensus among the TC39 must be met. This means that a large majority must agree while nobody strongly disagrees enough to veto a specific proposal.

Each new proposal starts off at Stage 0\. This stage is called the Strawman stage. Stage 0 proposals are “proposals which are planned to be presented to the committee by a TC39 champion or, have been presented to the committee and not rejected definitively, but have not yet achieved any of the criteria to get into stage 1.” So the only requirement for becoming a Stage 0 proposal is that the document must be reviewed at a TC39 meeting. It’s important to note that using a Stage 0 feature in your codebase is fine, but even if it does continue on to become part of the official spec, it’ll almost certainly go through a few iterations before then.

The next stage in the maturity of a new proposal is Stage 1\. In order to progress to Stage 1, an official “champion” who is part of TC39 must be identified and is responsible for the proposal. In addition, the proposal needs to describe the problem it solves, have illustrative examples of usage, a high level API, and identify any potential concerns and implementation challenges. By accepting a proposal for stage 1, the committee signals they’re willing to spend resources to look into the proposal in more depth.

The next stage is Stage 2\. At this point, it’s more than likely that this feature will eventually become part of the official specification. In order to make it to stage 2, the proposal must, in formal language, have a description of the syntax and semantics of the new feature. In other words, a draft, or a first version of what will be in the official specification is written. This is the stage to really lock down all aspects of the feature. Future changes may still likely occur, but they should only be minor, incremental changes.

Next up is Stage 3\. At this point the proposal is mostly finished and now it just needs feedback from implementors and users to progress further. In order to progress to Stage 3, the spec text should be finished and at least two spec complient implementations must be created.

The last stage is Stage 4\. At this point, the proposal is ready to be included in the official specification. To get to Stage 4, tests have to be written, two spec complient implementations should pass those tests, members should have significant practical experience with the new feature, and the EcmaScript spec editor must sign off on the spec text. Basically once a proposal makes it to stage 4, it’s ready to stop being a proposal and make its way into the official specification. This brings up the last thing you need to know about this whole process and that is TC39s release schedule.

As of 2016, a new version of ECMAScript is released every year with whatever features are ready at that time. What that means is that any Stage 4 proposals that exist when a new release happens, will be included in the release for that year. Because of this yearly release cycle, new features should be much more incremental and easier to adopt.











* * *







This is part of my [tylermcginnis.com](https://tylermcginnis.com/videos/ecmascript/) “[Modern JavaScript](https://tylermcginnis.com/courses/modern-javascript/)” course.



[![](https://cdn-images-1.medium.com/max/1600/1*g8rYjAG5p6R3lgrDhjEwYw.png)](https://tylermcginnis.com/courses/modern-javascript)










