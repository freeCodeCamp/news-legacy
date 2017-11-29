---
author: Chet Corcos
authorTwitter: none
authorFacebook: https://facebook.com/1165511785
title: "Martian Math"
subTitle: "We’re going to explore number systems by solving one of my favorite riddles...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*mK-q8ZwVLhz_XB5XUuItow.png
url: https://medium.freecodecamp.org/martian-math-812a029e2ea0
id: martian-math-812a029e2ea0
date: 2017-03-16T18:09:51.541Z
tags: [
  "Mathematics",
  "Math",
  "Education",
  "Life Lessons",
  "Self Improvement"
]
---
# Martian Math

We’re going to explore number systems by solving one of my favorite riddles.

> You are the first explorer on Mars and you discover a math equation carved into a rock: 12 + 24 = 40\. How many fingers did Martians have?

I love this riddle because it makes you rethink your entire understanding of numbers. It also demonstrates a problem in the way math is taught in school — rather than teach for fundamental understanding, we’re taught how to pass a test. Thus we’re stuck with a shallow understanding of simple concepts like numbers! But enough preaching, let’s learn something.

Conceptually, numbers are just quantities, but how we represent those quantities can vary. We typically represent numbers in a base-10 number system. What that means is every digit’s place in a number represents a power of 10\. That is, the number 123 represents 1×10³ + 2×10¹ + 3×10⁰. However, it is _possible_ to use a number system that is not based on powers of 10\. It’s hard to imagine living in a world that uses a non-base-10 number system, but in reality, the way representation numbers is completely arbitrary! So why are we using a 10-based number system? You guessed it — we have 10 fingers!

Here’s a little visualization of how a 10-based number system works. Notice that every time one column fills up we add one more to the next column over.



![](https://cdn-images-1.medium.com/max/1600/1*MyXRgeu8oGDA_kJ9R-yLSg.gif)



The beauty of this way of looking at numbers is that the concept of a quantity feels natural for all number systems, not just base-10\. So let’s explore some other number systems.

Computer’s represent numbers using _binary_ which is a base-2 number system. It’s the same concept except rather than rolling over to the next column after 9 dots fill up, you roll over after only 1.



![](https://cdn-images-1.medium.com/max/1600/1*OR8ku4ebtlYlyxh3sgJLvA.gif)



Programmers often represent numbers using _hexadecimal_ which is a base-16 number system. They do this because binary isn’t very compact — it takes 4 binary digits just to represent the number 16 — and because 16 is a power of 2 which makes it easy to convert between the two number systems.

Since it would be weird for a number like 12 to represent only one digit place when we write it out, we usually start counting up the alphabet after 9\. That is, _A_ represents 10, _B_ represents 11, _C_ represents 12, and so on.



![](https://cdn-images-1.medium.com/max/1600/1*aGlD97JcPj193CI2esmjVg.gif)



And now for our riddle! First, see if you can’t figure it out yourself. If you want, you can [play around with the visualization tool yourself](http://aprt.us/editor/?load=https://gist.githubusercontent.com/ccorcos/5bae90fda25c82f924cd59c475608f30/raw/c39ecec1e3ccb2e79b7f6a8f665ab80f6962a8ff/Number%2520System.json&fullScreen=1).

I’ve already given you a big hint — we have a 10-based number system because we have 10 fingers! So if we can find a number system where those _symbols_ represent _numbers_ that satisfy the equation, then we’ve solved the riddle.











* * *







There’s a more direct way of finding the answer but let’s just use our good friend “guess-and-check.” Since every Martian in every pop-culture reference has 6 fingers, let’s give that a shot.

Let’s recall the equation for reference: 12 + 24 = 40.



![](https://cdn-images-1.medium.com/max/1600/1*tbWdNwUMHTfdajUyrizqUA.png)



As you can see, 8 is represented as 12 in a base-6 number system. That’s because 8 = 1×⁶¹ + 2×⁶⁰.



![](https://cdn-images-1.medium.com/max/1600/1*dqtV9KPCbgTN0VnwEk6mfw.png)



Here, you can see that 16 is represented as 23 in a base-6 number system.



![](https://cdn-images-1.medium.com/max/1600/1*102_HlBDtSUv7sfpn_8o6A.png)



And finally, 24 is represented as 40in a base-6 number system. Thus, if we were to convert this equation into a base-10 number system, we’d have 8 + 16 = 24\. So there’s the answer to the riddle — Martians have 6 fingers!

It’s hard to understand this equation because that’s how we’ve learned to mechanically solve math problems. But we actually use non-base-10 number systems every day. I bet this equation makes sense to you: 0:30 + 1:45 = 2:15\. Time is a perfect example of a number system that is not base-10\. And if you live in the U.S. and have to use our awful measuring system, you’ll find weird number systems all over the place.

At the end of the day, what I hope you’ve gained from this article is an appreciation for the difference between concepts like quantities and the symbolic representations we use to encode those concepts. It’s subtle concepts like this that are far more important than the rote exercise of adding up two numbers on paper.











* * *







P.S. Check out [Apparatus](http://aprt.us/)! It’s an amazing piece of software for creating interactive diagrams.











* * *







If you’re interested in stuff like this, you might enjoy reading through my weekly newsletter of everything I find interesting. You can [subscribe here](http://news.chetcorcos.com/).








