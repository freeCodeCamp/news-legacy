---
author: Preethi Kasireddy
authorTwitter: https://twitter.com/iam_preethi
authorFacebook: https://facebook.com/10152986375997506
title: "Why use static types in JavaScript? Should we use them or not?"
subTitle: "Note: This is Part 3 of a 3-part series. You can check out Part 1 and Part 2 if you haven’t already!..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*PKmiFZ47uY9CwfIHrPny-A.jpeg
url: https://medium.freecodecamp.org/why-use-static-types-in-javascript-part-4-b2e1e06a67c9
id: why-use-static-types-in-javascript-part-4-b2e1e06a67c9
date: 2016-12-11T18:27:35.515Z
tags: [
  "JavaScript",
  "Programming",
  "Computer Science",
  "Software Development",
  "Learning To Code"
]
---
# Why use static types in JavaScript? Should we use them or not?



![](https://cdn-images-1.medium.com/max/1600/1*PKmiFZ47uY9CwfIHrPny-A.jpeg)



_Note: This is Part 3 of a 3-part series. You can check out_ [_Part 1_](https://medium.freecodecamp.com/why-use-static-types-in-javascript-part-1-8382da1e0adb#.91629ow6y) _and_ [_Part 2_](https://medium.com/@preethikasireddy/why-use-static-types-in-javascript-part-2-part-3-be699ee7be60#.j4viwr6km) _if you haven’t already!_

### So should we use static types in JavaScript or not?

The first programming languages I learned were JavaScript and Python, both of which are dynamically-typed languages.

But my foray into static types have added a whole new dimension to how I think about programming. For example, even though I found the Elm compiler errors overwhelming at first, defining types and “pleasing the compiler” became second nature, and actually improved my code thinking. Plus, there’s nothing more liberating than an intelligent robot telling me when I’m doing something wrong and how to fix it.

Despite the tradeoffs that come with types like verbosity and the upfront investment to master them, the safety and correctness that types add to our programs make these “disadvantages” less of an issue for me personally.

Dynamic typing feels faster and easier, but it sometimes loses ground once you actually try to make a program run in the wild. At the same time, you can talk to any Java developer who’s had to work with more complicated generic type definitions and they’ll tell you all about how much they hate types.

Ultimately, there’s no silver bullet. My personal approach is to favor using types under these circumstances:

1.  The program is critical to your business
2.  The program is likely to be refactored as your needs evolve
3.  The program is complex and has many moving parts
4.  The program is maintained by a large team of developers who need to be able to grasp and understand the code quickly and accurately

On the flip side, I’d consider opting out of types in these types of situations:

1.  The code is short-lived and non-critical
2.  You’re prototyping and trying to move as quickly as possible
3.  The program is small and/or simple
4.  You’re the only developer

The beauty of being a JavaScript developer today is that because of tools like Flow and TypeScript, we finally have a choice of whether to use static types or good ol’ vanilla JavaScript.

### Conclusion

I hope this post helped you get a feel for why types matter, how to use them, and most importantly _*when*_ to use them.

Being able to toggle between dynamic and static types is a powerful tool for the JavaScript community — and exciting :)

More questions? As always, ping me in the comments to keep the conversation going.








