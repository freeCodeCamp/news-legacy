---
author: Fagner Brack
authorTwitter: https://twitter.com/FagnerBrack
authorFacebook: none
title: "Don’t copy-paste code. Type it out. 🔊"
subTitle: "Typing code can help you develop a learning mindset"
coverSrc: https://cdn-images-1.medium.com/max/2000/1*wgbmuDgBQ6N-kOrbD-qMFA.jpeg
url: https://medium.freecodecamp.org/the-benefits-of-typing-instead-of-copying-54ed734ad849
id: the-benefits-of-typing-instead-of-copying-54ed734ad849
date: 2016-07-21T10:29:51.388Z
tags: [
  "Web Development",
  "Programming",
  "Software Development",
  "Software Engineering",
  "Technology"
]
---
# Don’t copy-paste code. Type it out. 🔊

## Typing code can help you develop a learning mindset







![](https://cdn-images-1.medium.com/max/2000/1*wgbmuDgBQ6N-kOrbD-qMFA.jpeg)

The hands of a programmer joyously typing code into a laptop











<iframe data-width="700" data-height="185" width="700" height="185" src="https://medium.freecodecamp.org/media/166f686efb3ca0a5d40a142e67b1f8ee?postId=54ed734ad849" data-media-id="166f686efb3ca0a5d40a142e67b1f8ee" allowfullscreen="" frameborder="0"></iframe>



[Listen to the audio version!](https://play.ht/articles/54ed734ad849)













* * *







Want to break some code? Change it real quick before you even understand what it does.

Now you’re practicing Cargo Cult programming — a style of software development where you ignore how a piece of code works and its relationship with the code around it.

> The term _cargo cult programmer_ may apply when a computer programmer that is inexperienced with the problem at hand [copies some code](https://en.wikipedia.org/wiki/Copy_and_paste_programming "Copy and paste programming") from one place to another with little or no understanding of how it works or whether it is required in its new position.

> — [Cargo Cult Programming on Wikipedia](https://en.wikipedia.org/wiki/Cargo_cult_programming)

When a developer **copies** a piece of code that they don't understand and uses it in the hope of fixing some problem, they’re practicing Cargo Cult programming. This increases the risk of unintended side-effects.

When a developer **reads** a piece of code that they don't understand and still changes it in the hope of fixing some problem, they’re also practicing Cargo Cult programming.

The problem, in this case, is not that the developer is copying something. Anyone can copy a snippet of code, understand it, learn from it, use it, and still have a lower risk of unintended side-effects.

Cargo Cult programming, on the other hand, represents a fundamental misunderstanding of proven steps for learning from other people's code.

Here’s the most efficient way to learn in this context:

1.  Read a piece of code.
2.  Understand all features of the language that are being used there.
3.  Understand all the features of the libraries/frameworks that are being used there.
4.  Learn the basics of those libraries/frameworks.
5.  Understand what every line does and the purpose of those libraries/frameworks in the context of that piece of code.

For someone who starts working with a new language, this is going to be extremely hard. The amount of information a human needs to retain to efficiently understand even a small snippet of code is so huge that it might be forgotten right away. What we can do is leverage certain aspects of how the human brain is used to learning things — consciously or unconsciously — with some proven techniques.

One of those techniques is [blocked practice](https://psychologywod.com/2013/08/18/blocked-practice-vs-random-practice-shake-things-up-in-your-training-and-in-your-life/). It’s basically where you learn by “performing a single skill over and over, with repetition being the key.”

This isn’t the best way to learn, though. [It’s proven](https://psychologywod.com/2013/08/18/blocked-practice-vs-random-practice-shake-things-up-in-your-training-and-in-your-life/) that, when you learn through interleaving different variations of the same skill, you’ll learn more efficiently.



![](https://cdn-images-1.medium.com/max/1600/1*XLZ9M1R2F2BN-YKpqKm_OQ.jpeg)

The Cone of Experience, from [Dale, Edgar. Audio-Visual Methods in Teaching (p. 39)](http://ocw.metu.edu.tr/file.php/118/dale_audio-visual_20methods_20in_20teaching_1_.pdf). The graph shows two extremes between direct experience (bottom) into pure abstraction (top). Intuitively we could assume that reading or lectures (abstract visual symbols) could have less retention rate than practice (Direct, Purposeful Experiences). _Note: There is evidence that the famous_ [_Learning Pyramid_](https://www.fitnyc.edu/files/pdfs/CET_Pyramid.pdf) _might be a knock-off of the Cone of Experience, with added numbers that seem to_ [_have been made up_](http://www.willatworklearning.com/2006/05/people_remember.html) _(I have created_ [_a post about this_](https://hackernoon.com/the-danger-of-relying-on-abstractions-dfa04a8d553d)_)._



In software engineering, we can leverage both blocked and interleaving learning practices when we **type** the code in different contexts, instead of just **copying and pasting** it.

When copy-pasting snippets, we’re just reading (if we even bother doing that). And according to the relationship of the Cone of Experience, we might learn only a small portion of the information we consume because it’s too abstract.

Contrast this with learning better by actually typing out that piece of code. This is a more direct and purposeful experience. It forces your brain to understand all those different patterns and learn more efficiently.

> Typing code instead of copy-pasting it provides a better learning ROI because we’re practicing instead of just reading.

Naming things is considered one of the most difficult aspects of programming. When we copy code without understanding it, we run the risk of breaking something by overwriting variable names, function names, or classes.

If we instead understand the code first, then type it up in our own words, we can rename things in a way that suits our app and ensures we don’t have any [naming collisions](https://en.wikipedia.org/wiki/Naming_collision), even if the final result is functionally the same as the piece of code we’re basing upon.

Besides that, if we copy the code from one place in our codebase to another, there’s a chance that we’ll copy tokens that are unnecessary or forget to change tokens that should have been changed.

Take the following HTML snippet, for example:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/def77f5fd60884c4e6d2d822c9d5b37c?postId=54ed734ad849" data-media-id="def77f5fd60884c4e6d2d822c9d5b37c" allowfullscreen="" frameborder="0"></iframe>



[The code for an HTML snippet](https://gist.github.com/FagnerMartinsBrack/550a6324368f59dc0a7ddea671c00122) with a label element containing an attribute called "for" and value "name" and an input with the attribute "id" and value "name".



When duplicating that code to create a new input, we’re likely to forget to change the _for_ attribute of the _label_ element, which will break the intended behavior for the new input.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b8794c08d0f2e7becc709c4648351cb3?postId=54ed734ad849" data-media-id="b8794c08d0f2e7becc709c4648351cb3" allowfullscreen="" frameborder="0"></iframe>



[The code](https://gist.github.com/FagnerMartinsBrack/89d0ad963563d64868970ae2d8aa8492) showing the previous label and input elements being duplicated to create a new field. The label has been copied over, however, the attribute "for" remained unchanged.



This example is interesting because it’s the kind of functionality that is hard to test, even with visual regression. It heavily depends on static testing — like a code review — to make sure that the code was written for the intended purpose. (In this case, to propagate mouse events to the input for the same _id_ of the label _for_ attribute.)

The same thing happens with tests. When we copy an already passing test instead of creating a new one from the scratch, we run the risk of not changing necessary tokens that would otherwise cause that test to fail.

In this case, though, we can prevent this mistake by using [Test Driven Development](https://medium.com/@fagnerbrack/why-test-driven-development-4fb92d56487c) — a mindset based on creating a failing test first, then change the application code to make it pass. This mindset allows us to be confident that we’re less likely to miss something or [create false-positives](https://medium.com/@fagnerbrack/mocking-can-lean-to-nondeterministic-tests-4ba8aef977a0).

Instead of copying code without understanding it, learn from other people's code and practice on top of it. This will maximize your learning ROI.

After all, the most valuable resource of a developer is the brain — not the fingers.











* * *







Here’s a follow-up article I recommend:[Thalheimer, W. (2010, April). How Much Do People Forget?](http://willthalheimer.typepad.com/files/how-much-do-people-forget-v12-14-2010-2.pdf)











* * *







Thanks for reading. If you have some feedback, reach out to me on [Twitter](https://twitter.com/FagnerBrack), [Facebook](https://www.facebook.com/fagner.brack) or [Github](http://github.com/FagnerMartinsBrack).








