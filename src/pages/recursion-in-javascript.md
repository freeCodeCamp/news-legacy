---
author: Kevin Ennis
authorTwitter: https://twitter.com/kevincennis
authorFacebook: https://facebook.com/10100424855383409
title: "Recursion in JavaScript"
subTitle: "I’m just gonna get this out of the way right up front, because people get really angry otherwise:..."
coverSrc: placeholder
url: https://medium.freecodecamp.org/recursion-in-javascript-1608032c7a1f
id: recursion-in-javascript-1608032c7a1f
date: 2015-07-25T13:11:16.857Z
tags: [
  "JavaScript",
  "Front End Development",
  "Programming",
  "Technology",
  "Web Development"
]
---
# Recursion in JavaScript

I’m just gonna get this out of the way right up front, because people get really angry otherwise:

Consider this post as a series of learning exercises. These examples are designed to make you think — and, if I’m doing it right, maybe expand your understanding of functional programming a little bit.

### Hey, dawg. I heard you like recursion, so I put a “Hey, dawg. I heard you like recursion, so I put a “Hey, dawg…

Loosely defined, recursion is the process of taking a big problem and sub-dividing it into multiple, smaller instances of the same problem.

Put into practice, that generally means writing a function that calls _itself_. Probably the most classic example of this concept is the **factorial** function.

You may remember from math class that the factorial of a number **n** is the product of all positive integers less than or equal to **n.** In other words, the factorial of **5** is **5 x 4 x 3 x 2 x 1**. The mathematical notation for this is **5!**.

Something interesting you might have noticed about that pattern: **5!** is actually just **5 x 4!**. And **4!** is just **4 x 3!**. So on and so forth until you get down to **1**.

Here’s how we’d write that in JavaScript:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/beb51989b1bb20195c118714dfef3db4?postId=1608032c7a1f" data-media-id="beb51989b1bb20195c118714dfef3db4" allowfullscreen="" frameborder="0"></iframe>





If this seems confusing, I’d encourage you to mentally walk through the code using the example of **factorial( 3 )**.

Here’s a bit of help, in case you need it:

1.  **factorial( 3 )** is **3 x factorial( 2 )**.
2.  **factorial( 2 )** is **2 x factorial( 1 )**.
3.  **factorial( 1 )** meets our **if** condition, so it’s just **1.**

So what’s really happening here is that you’re winding up the call stack, getting down to **1**, and then unwinding the stack. As you unwind the call stack, you multiply each result. **1 x 2 x 3** is **6**, and that’s your return value.

### **Reversing A String**

One of my co-workers recently told me about a whiteboard question that he’d been asked in an interview, and I thought it was kind of a fun problem.

> Write a function that accepts a string a reverses it. Recursively.

If you’re the ambitious type, I’d encourage you to take a few minutes and try to solve this one on your own. Keep in mind the core principle of recursion, which is to take a big problem and break it down into smaller instances of itself.

If you got stuck (or you’re the decidedly _unambitious_ type), here’s my solution:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ea229cabbb21f710ba4b76d6ba59cead?postId=1608032c7a1f" data-media-id="ea229cabbb21f710ba4b76d6ba59cead" allowfullscreen="" frameborder="0"></iframe>





Again, I’ll give a quick walk-through example in case you got stuck. We’ll use **reverse(‘bar’)** as a starting point.

1.  **reverse(‘bar’)** is **reverse(‘ar’) + ‘b’**
2.  **reverse(‘ar’)** is **reverse(‘r’) + ‘a’**
3.  **reverse(‘r’)** meets our **if** condition, so it’s just **‘r’**

When the call stack unwinds, we end up with **‘r’ + ‘a’ + ‘b’**.

### Writing a Recursive Map Function

For our final example, we’re going to write a **map()** function. We want to be able to use it like this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a81449621098c07732d6b3cbb6123311?postId=1608032c7a1f" data-media-id="a81449621098c07732d6b3cbb6123311" allowfullscreen="" frameborder="0"></iframe>





Again, I’d _strongly_ encourage you to take a few minutes and try this one on your own. Here are a few hints and reminders:

1.  **map()** should always return a _new_ array.
2.  Break the problem down into smaller chunks.
3.  Remember the **reverse()** example.

Oh, good. You’re back. How did it go?

j/k, this is a blog and I can’t hear you. lol.

Anyway, here’s how I did it:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/aa803107272941a0177d4b17eded8823?postId=1608032c7a1f" data-media-id="aa803107272941a0177d4b17eded8823" allowfullscreen="" frameborder="0"></iframe>





So let’s go through this using the example I gave earlier:

1.  Call **map()** using the array **[ ‘a’, ‘b’, ‘c’ ]**
2.  Create a _new_ array that holds the result of calling **fn(‘a’)**
3.  Return **[ ‘A’ ].concat( map([ ‘b’, ‘c’ ]) )**
4.  Repeat steps 1 through 3 with **[ ‘b’, ‘c’ ]**
5.  Repeat steps 1 through 3 for **[ ‘c’ ]**
6.  Eventually, we call **map()** with an empty array, which ends the recursion.

**NOTE:** You should never, ever, ever do this in a real application. You’ll blow out the stack on large arrays, and more importantly, you create a **huge** amount of garbage by instantiating so many new objects. Use **Array#map** in production code.

### Wrap Up

Hopefully I did a decent job in explaining this stuff. If you’re still struggling a bit to wrap your head around recursion, the best advice I can give is to start with small examples and mentally trace the call stack. Try something like **reverse(‘abc’)** and walk through it, step-by-step. Eventually it’ll click.

— -

Follow me on [Twitter](http://twitter.com/kevincennis) or [Medium](https://medium.com/@kevincennis/) for more posts. I’m trying to write once a day for the next 30 days.

And if you’re in the Boston area and want to come work on crazy, interesting, hard problems with me at [Starry](https://starry.com), shoot me an [email](mailto:kennis84@gmail.com). I’m hiring.








