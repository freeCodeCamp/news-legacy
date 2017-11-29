---
author: Fagner Brack
authorTwitter: https://twitter.com/FagnerBrack
authorFacebook: none
title: "Code That Doesn't Exist Is The Code You Don't Need To Debug"
subTitle: "As developers, we tend to write more code than necessary"
coverSrc: https://cdn-images-1.medium.com/max/2000/1*wuV2gWnanM8JoG_8CS09tQ.jpeg
url: https://medium.freecodecamp.org/code-that-dont-exist-is-the-code-you-don-t-need-to-debug-88985ed9604
id: code-that-dont-exist-is-the-code-you-don-t-need-to-debug-88985ed9604
date: 2017-01-19T09:02:00.633Z
tags: [
  "Software Development",
  "Programming",
  "Web Development",
  "Technology",
  "Coding"
]
---
# Code That Doesn't Exist Is The Code You Don't Need To Debug

## As developers, we tend to write more code than necessary







![](https://cdn-images-1.medium.com/max/2000/1*wuV2gWnanM8JoG_8CS09tQ.jpeg)

The design artwork of a man working on a notebook with a monster on the side connected to it. The monster is holding a bag of money and eating a camera that will be stored in its head, which already contains a car, a smartphone, a guitar and a notebook.







As a developer, you’re in the business of managing complexity. And code is inherently complex.

By writing as little code as necessary to solve the task at hand, you’ll have fewer concerns down the road.

Less code, less complexity.





<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/8296175da96ea71f883c0aae6d17d119?postId=88985ed9604" data-media-id="8296175da96ea71f883c0aae6d17d119" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1824002576%2Fpg-railsconf_bigger.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





There are many examples that can illustrate this principle. For the purpose of this post, let’s say you want to test an existing function. It’s an untested legacy function that executes a network request and does something with its response. The important aspect is that the response contains more data than what the code actually uses.





<iframe data-width="600" data-height="400" width="600" height="400" src="https://medium.freecodecamp.org/media/225e5735dfbab48de7a269e8cade6f3c?postId=88985ed9604" data-media-id="225e5735dfbab48de7a269e8cade6f3c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fwww.gravatar.com%2Favatar%2F0bc8a8a53f215ebcbdc39479f182c803%2F%3Fdefault%3D%26s%3D80&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



The [code](https://jsfiddle.net/fagnerbrack/yqc1kd0w/) showing a function that only requires the "street", "number" and "suburb" properties from the "accountDetails". See the line 27.



When testing that function, you want to stub the network request and provide a fixed dataset that simulates the original one. This way you can verify whether the function works as expected.





<iframe data-width="600" data-height="400" width="600" height="400" src="https://medium.freecodecamp.org/media/6bf33779a53039d39ebd1cecefb8b954?postId=88985ed9604" data-media-id="6bf33779a53039d39ebd1cecefb8b954" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fwww.gravatar.com%2Favatar%2F0bc8a8a53f215ebcbdc39479f182c803%2F%3Fdefault%3D%26s%3D80&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



The [code](https://jsfiddle.net/fagnerbrack/pmgv0chw/) stubbing the network request with the same dataset. See lines 37 to 47.



But the original dataset is huge and you don't really care about the rest of it. You can just provide the minimum response necessary to satisfy the requirements of the function you’re testing.





<iframe data-width="600" data-height="400" width="600" height="400" src="https://medium.freecodecamp.org/media/38475259d01bf27be5044720872426a0?postId=88985ed9604" data-media-id="38475259d01bf27be5044720872426a0" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fwww.gravatar.com%2Favatar%2F0bc8a8a53f215ebcbdc39479f182c803%2F%3Fdefault%3D%26s%3D80&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



The [code](https://jsfiddle.net/fagnerbrack/d034g09g/), stubbing just the minimum amount of properties from the dataset. See lines 37 to 41.



There are a few benefits with the last example:

1.  There’s no unused response in the test
2.  The dataset won’t be huge, so it’s easier to reason about it (and that also makes the test smaller)
3.  If the code starts requiring more data from the response because of another test on the same function, the test will fail and you can start adding the rest of the response on an ad-hoc basis
4.  If you always change code by changing the tests first, when the code starts requiring less data, you’ll always be removing it from the tests first in order to keep the minimum amount of code necessary to test it

[Test Driven Development](https://medium.com/@fagnerbrack/why-test-driven-development-4fb92d56487c) (TDD) forces you to write the minimum amount of code that satisfies a use case. In the last example, if you had used TDD, it would have forced you to write the minimum amount of code in the dataset until you needed more data (See number 3 above).

In a great article called [You Are Not Paid to Write Code](http://bravenewgeek.com/you-are-not-paid-to-write-code/), Tyler Treat says:

> _Every time you write code […] you are introducing the possibility of failure into your system._

A software system has a tendency to become more complex over time, increasing [Software Entropy](https://en.wikipedia.org/wiki/Software_entropy). The act of deleting code helps drive the system to a state where there’s only code that is necessary — a state where there's less Software Entropy. But project teams tend to ignore this principle and focus mostly on adding new things.

To avoid that, I believe developers should be rewarded when they remove code. Perhaps the same way (or more) than when they add new features.

> Removing useless code should be rewardable.

Besides complexity, useless code can also represent part of a functionality that doesn't provide any value. For every feature or change related to that functionality, you have more stuff to test, maintain, and support. That’s an unnecessary cost to the project, and a cost that doesn't go away unless explicitly removed.

Evolution has shaped our minds to think of short term benefits. Adding features or fixing bugs to satisfy the project goal leads to **short term benefit** in the context of Software Entropy. This is essential, but shouldn’t come at the expense of adding or leaving code that is not necessary.

The characteristic that makes us humans is our ability to think ahead. Our ability to think about what really matters for a project. What we need is to reinforce the culture of removing code.

**The code that doesn’t exist is the code you don’t need to worry about**.

After all, why having to worry about something you don’t need to?











* * *







Thanks for reading. If you have some feedback, reach out to me on [Twitter](https://twitter.com/FagnerBrack), [Facebook](https://www.facebook.com/fagner.brack) or [Github](http://github.com/FagnerMartinsBrack).








