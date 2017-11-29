---
author: Bill Sourour
authorTwitter: https://twitter.com/BillSourour
authorFacebook: https://facebook.com/146616355903929
title: "How to conquer legacy code"
subTitle: "At some point in your developer career, your boss will hand you a piece of legacy code — code that someone else wrote a long time ago. Yo..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*Sbh9nL_Q1pr5PcXnIdaicA.png
url: https://medium.freecodecamp.org/conquer-legacy-code-f9e23a6ab758
id: conquer-legacy-code-f9e23a6ab758
date: 2016-08-01T03:47:46.715Z
tags: [
  "Software Development",
  "Programming",
  "Web Development",
  "Coding",
  "Technology"
]
---
# How to conquer legacy code



![](https://cdn-images-1.medium.com/max/1600/1*Sbh9nL_Q1pr5PcXnIdaicA.png)



At some point in your developer career, your boss will hand you a piece of legacy code — code that someone else wrote a long time ago. Your boss will tell you to learn this legacy code, fix it, and add new features to it.

I’ve been in this situation many times over the last two decades. I can help.

#### How to understand legacy code

If you’re lucky, you’ll have documentation, or at least in-line comments. Maybe one or two of the original authors will still even be around to help. But most of the time, you will not be so lucky.

Let’s talk about what you’re going to do in those unlucky cases.

First, you need to be humble. Respect the code, and the developers who wrote it.

It’s easy to look at work that came before you and decide it’s no good and that you can do better. This is the wrong attitude. It will lead you down a very dangerous path.

If you go down this dangerous path, you’ll start making changes before properly understanding the impact of those changes. You’ll “fix” things that aren’t broken, because they are written in a style that you don’t like, or are based on an older way of doing things. Ultimately, you’ll waste an incredible amount of time with this attitude.

So stop. Take a step back and realize that everything in that codebase was done a certain way for a reason.

Until you know the code forward and backward, you have to assume that there were good reasons for it to be written the way it is, and that you just haven’t figured them out yet.

This is a much more productive attitude, and it will save you from breaking everything, then just wanting to jump out of a window when you can’t put it back together quickly enough.

Don’t Humpty Dumpty your codebase.



![](https://cdn-images-1.medium.com/max/1600/1*P7oCy28AjxYcIv8F_Wbo3w.gif)

_“Yeah, so that ‘quick fix’ to the legacy code actually broke everything and I’m not sure why. Ciao!”_



The best way that I’ve found to learn a codebase is to start at the user interface level, then work my way back into the code.

Pick a single user flow, like logging in, placing an order, writing a review, or whatever is relevant to your particular application. Go through the flow as an end user. Then look at the code, starting with the user interface code — it should be the easiest to recognize — and follow each step on back, all the way to the database.

As you go along, draw a **sequence diagram** to help illustrate what is happening. If you’re not sure what a sequence diagram is, or how to draw one, [check out this free tutorial.](http://www.newthinktank.com/2012/11/uml-2-0-sequence-diagrams/) If you don’t have a good tool for drawing UML, [here’s a free one.](https://www.visual-paradigm.com/solution/freeumltool/)



![](https://cdn-images-1.medium.com/max/1600/0*OKAdzneO7BJkr_QW.)

Sample UML sequence diagram.   
source: [UML 2 Sequence Diagrams: An Agile Introduction](http://agilemodeling.com/artifacts/sequenceDiagram.htm)



Once you’ve completed your first sequence diagram, using a local copy of the codebase that you can easily restore, start to make subtle changes to some of the components you’ve encountered. See if you can predict the effects of your changes on the application. This is a good way to test your understanding.

Keep repeating this process, adding to your diagrams until you have a complete picture of the entire application (or at least all the parts you are responsible for).

For bonus points, make sure you share your notes and diagrams. Put them in a highly visible place where the next developer who comes along can easily discover them. Don’t worry about making them perfect, or even pretty. Just do what you can. Every little bit helps.

Overall, the most important thing is to be patient, and avoid beating yourself up. Code is a complex thing. Understanding legacy code takes time. Stay calm.

#### How to fix legacy code

The biggest challenge you’ll face when fixing legacy code is deciding how far to go with your fix. I strongly advise you to make the _minimum viable change_ first. This means you should make the least disruptive change that completely fixes the problem before attempting to clean and refactor any code.

This gives you an escape hatch. Worse case scenario, if you get pulled away to address some other priority — or if you’re on a tight deadline — at least you’ll have pulled together some working code that you can fall back on.

Once you’ve gotten your code working, if you still have time left, you can start making small, incremental improvements.

Martin Fowler has put together a catalog of refactorings which will give you a good idea of the types of changes you can make to incrementally improve a codebase. [Check it out here](http://refactoring.com/catalog/). The idea is to always leave the code in better shape than it was when you found it.

Sometimes, you’ll encounter a bug that is actually the result of a structural defect. These bugs can’t be fixed by a simple change to some conditional logic. They require more invasive changes.

This is where things get hairy. You have to be brutally honest with yourself about what the minimum viable change is. Every fiber of your being will want to pull the code apart and re-write the whole thing. Don’t do it!

Stick to a quick fix, followed by an incremental improvement that refactors it and cleans it up as much as time permits. Your goal is just to make the code a little better every time. The longer you maintain the codebase, the better it will get.





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/a7a296b533ca14c189fa0eb63f3960dd?postId=f9e23a6ab758" data-media-id="a7a296b533ca14c189fa0eb63f3960dd" allowfullscreen="" frameborder="0"></iframe>



I have often played this song on repeat to get myself in the right mood while tweaking legacy code. It really works.



To truly make this approach work, make sure you’re always padding your estimates to allow time for a bit of refactoring.

Sometimes, the structural defects are so bad that a strategy of forever patching just won’t work. This situation is actually much more rare than you might think.

Again, you have to be brutally honest with yourself about the cost/benefit of a rewrite or redesign. You need to accept that, ultimately, this will be a business decision and not a technical one.

Prepare to state your case in business terms. What will it cost to do a major restructuring of the code? What are the real business risks of not doing it? If you have a solid case, you will eventually be heard. Don’t be surprised if it takes a few more cycles of patching first, though.

Remember: if you are doing a major overhaul, first make sure there’s support for the change and a reasonable budget to go along with it. Don’t try to fly under the radar with this. Unless, of course, you relish awkward conversations with management when you start breaking things and missing deadlines.

#### How to add new features to legacy code

Finally, you will eventually be called upon to add features to legacy code. At this point, you have an important decision to make. Do you “go with the flow” of the current codebase, or take things in a new direction?

Again, I advise you to be brutally honest in your evaluation. Would continuing to follow the patterns and practices evident in the existing codebase make it worse, or pile onto an existing problem?

Most of the time, you’ll want to keep things stable. Just make incremental additions using the existing patterns and practices of the code. Re-use existing elements. Make the least disruptive changes possible, while making small, incremental improvements by cleaning and refactoring.

If you believe that a new direction is absolutely necessary, then you’ll need to find a way to isolate your changes and couple them as loosely as possible to the existing codebase.

Try carving out the new feature as a separate project. You can then expose an API that lets the legacy code plug into your new code. This makes it so that your new code and the old legacy code don’t need to know much about each other.

This starts to get a bit tricky when you need to use functionality from the legacy code in order to implement the new feature. The best way to isolate the old code from the new code is to use the Adapter Pattern.



![](https://cdn-images-1.medium.com/max/1600/1*mCss9lg7sm43hARTj3Jo3w.jpeg)

Not this kind of adapter pattern (this won’t work, in case you were wondering)



[DO Factory](http://www.dofactory.com) has a good explanation of the Adapter Pattern:

> “The Adapter pattern translates one interface (an object’s properties and methods) to another. Adapters allow programming components to work together that otherwise wouldn’t because of mismatched interfaces. The Adapter pattern is also referred to as the Wrapper Pattern.

> One scenario where Adapters are commonly used is when new components need to be integrated and work together with existing components in the application.

> Another scenario is refactoring in which parts of the program are rewritten with an improved interface, but the old code still expects the original interface.”

Here are some links to explanations and examples in various languages.

*   [**JavaScript** example of the Adapter Pattern](http://www.dofactory.com/javascript/adapter-design-pattern)
*   [**C#** example of the Adapter Pattern](http://www.dofactory.com/net/adapter-design-pattern)
*   [**Java** example of the Adapter Pattern](http://www.tutorialspoint.com/design_pattern/adapter_pattern.htm)

#### Key takeaways

In summary, here are the key points that will help you tackle and ultimately conquer any codebase:

1.  Never judge legacy code or change it until you’ve taken the time to fully understand it.
2.  Sequence diagrams are your friend.
3.  Prefer small, incremental improvements over wholesale re-writes or changes.
4.  Each change should attempt to leave the code a little better off than it was when you found it.
5.  If you need to make big changes, make a business case and get approval first.
6.  When adding new features, try to “go with the flow.”
7.  If you need to take the code in a new direction, isolate your changes and use the Adapter Pattern to integrate.

Hopefully you found this article useful. My mission is to help as many developers as I can. Please ❤ recommend ❤ this story using the green heart below to help spread the word.











* * *







**Want to code better?** Join thousands of developers who receive valuable articles and information like this from me every week **for free**. Just [click here.](https://devmastery.com/signup/index.html)








