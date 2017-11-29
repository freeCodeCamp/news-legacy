---
author: Taron Foxworth
authorTwitter: https://twitter.com/anaptfox
authorFacebook: https://facebook.com/10200494512401445
title: "Hardware fundamentals: how pull-down and pull-up resistors work"
subTitle: "If you’ve ever wired up a button to an Arduino, you’ve come across this diagram:..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*SMTqmqkvw4LnRckc2Wj9RQ.jpeg
url: https://medium.freecodecamp.org/a-simple-explanation-of-pull-down-and-pull-up-resistors-660b308f116a
id: a-simple-explanation-of-pull-down-and-pull-up-resistors-660b308f116a
date: 2017-03-17T19:40:27.936Z
tags: [
  "Arduino",
  "Internet of Things",
  "Technology",
  "Hardware",
  "Makers"
]
---
# Hardware fundamentals: how pull-down and pull-up resistors work







![](https://cdn-images-1.medium.com/max/2000/1*SMTqmqkvw4LnRckc2Wj9RQ.jpeg)

An axial-lead resistor







If you’ve ever wired up a button to an Arduino, you’ve come across this diagram:



![](https://cdn-images-1.medium.com/max/1600/1*h1oB-dIKV2rNW3l05jOTOQ.png)



At first, this can be confusing. My first thoughts: “Why do I need a resistor? I just want to it to tell me whether the button is being pressed.”

After a lot of reading, there wasn’t a simple explanation.

### What’s going on here



![](https://cdn-images-1.medium.com/max/1600/1*0voPrAar5qTG7c6OR76RIA.png)

Diagram 1



In that button — AKA a switch—the wires are shaped in the form of an “H”. But the middle isn’t connected — or the circuit isn’t connected — until we press the button.

In reality, we want to read from the Arduino a `0` when nothing is connected and a `1` when the button is pressed.

On the Arduino, this is called General Purpose Input Output ([GPIO](https://en.wikipedia.org/wiki/General-purpose_input/output)).

So, we can do something like this:



![](https://cdn-images-1.medium.com/max/1600/1*dtatSwNEmWLRTZYOSjCYNQ.png)

Diagram 2



We connect positive (5v, 3.3V, or VCC) to the left side of the circuit.

Now, when the button is pressed, the GPIO will read a `1`, and all is good.



![](https://cdn-images-1.medium.com/max/1600/1*ZbkKPisOF90rGU1IQPdsbg.png)

Diagram 3



Well, no. Let’s take a look at Diagram 2 again:



![](https://cdn-images-1.medium.com/max/1600/1*dtatSwNEmWLRTZYOSjCYNQ.png)

Diagram 2



We wanted a `0` when nothing is connected, but how can you guarantee this? Currently, there is no way to guarantee the GPIO to be `0`.

There is also electromagnetic frequencies in the air that could draw your GPIO to `0` or `1`. It could even fluctuate between the two! This way, we can’t be positive it’s a `0` (I’m so bad at puns). This is also known as a logical `0`.

One way to get a logical `0` is to tie the pin to Ground:



![](https://cdn-images-1.medium.com/max/1600/1*cJjDJqreMcQcO0a1iLamWw.png)



Yay! So, now it’s a guaranteed logical zero. While pushing the button, it’s going to be `1` now. Right?

Well, No.



![](https://cdn-images-1.medium.com/max/1600/1*-3LZgddTwMxydhvBBcis_A.png)



You just created a [short circuit](https://en.wikipedia.org/wiki/Short_circuit). 😔

This is where the resistor comes in. To avoid a short circuit, we need to add resistance to our circuit. The resistor keeps things under control.



![](https://cdn-images-1.medium.com/max/1600/1*aeuKcZcDrmjyRL932RrLGw.png)



[Electricity will take the path of least resistance.](http://ecmweb.com/content/path-least-resistance) Your GPIO will now register a `1` when the button is pressed. Like so:



![](https://cdn-images-1.medium.com/max/1600/1*ztqcYi6zpfoMGFFSsGUjNA.png)





![](https://cdn-images-1.medium.com/max/1600/1*0lK8NtZapeKPBVVBUWFGBA.gif)



Woo Hoo! Now we’re working with something.

Now let’s look at the opposite: pull-up resistors. It’s the same thing but in reverse. While the button is not pressed, the GPIO will register a `1`. When you pressed the button, the GPIO will be `0`.

While not pressed, we have the GPIO connected to positive ( VCC ). So, any current that is there will be pulled-up so that the GPIO registers a logical `1`.



![](https://cdn-images-1.medium.com/max/1600/1*GfaViEPlJDA9WQLlN9m3kQ.png)



It’s important to note here that, electricity always wants to go to Ground. So, when we press the button, the current that’s flowing will flow to Ground. Thus, any current that would have been going to the GPIO goes with it, leaving the GPIO at a logical `0`.



![](https://cdn-images-1.medium.com/max/1600/1*KrxhpNRUCwWo-3MtOWmDEg.png)



💥 The End.

#### Why did I write this?

I joined [Losant](https://losant.com) in September of 2016 with no hardware experience. Every single hardware starter kit gives you a button with no explanation of this concept. Hopefully, this helps your light bulb go off too. 💡

This only scratched the surface. If you want to dig deeper, check out these resources:

[**Pull-up Resistors - learn.sparkfun.com**  
_Another thing to point out is that the larger the resistance for the pull-up, the slower the pin is to respond to…_learn.sparkfun.com](https://learn.sparkfun.com/tutorials/pull-up-resistors "https://learn.sparkfun.com/tutorials/pull-up-resistors")[](https://learn.sparkfun.com/tutorials/pull-up-resistors)





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/cf558c40a803db4609c3c6885a257380?postId=660b308f116a" data-media-id="cf558c40a803db4609c3c6885a257380" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FBxA7qwmY9mg%2Fhqdefault.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





I love feedback. So, please let me know if this could be improved. **If I totally missed the ball on this,** [**let me know**](http://twitter.com/anaptfox)**!** I would love to make it better for others.








