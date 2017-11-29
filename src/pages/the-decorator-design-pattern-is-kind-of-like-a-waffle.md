---
author: Sihui Huang
authorTwitter: https://twitter.com/sihui_io
authorFacebook: none
title: "The Decorator Design Pattern is kind of like a waffle"
subTitle: "The decorator pattern is about adding extra features to an existing object...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*4FU5faISak9BmmtnI12bpQ.jpeg
url: https://medium.freecodecamp.org/the-decorator-design-pattern-is-kind-of-like-a-waffle-264e8c816715
id: the-decorator-design-pattern-is-kind-of-like-a-waffle-264e8c816715
date: 2017-11-25T23:29:10.622Z
tags: [
	"Design Patterns",
	"Programming",
	"Technology",
	"Learning To Code",
	"Web Development"
]
---
# The Decorator Design Pattern is kind of like a waffle











![](https://cdn-images-1.medium.com/max/2000/1*4FU5faISak9BmmtnI12bpQ.jpeg)












The decorator pattern is about adding extra features to an existing object.

Does that sound like French?

No worries.

We will come back to this later.

Let’s take a look at some waffles first!

The genius part about waffles is that they start plain and simple. Because they are plain, almost everything tastes good with them

Some common toppings for waffles are strawberries, blueberries, blackberries, bananas, almonds, and syrups.














Let’s try to create a collection of different waffle objects.

There will be StrawberryWaffle, BlueberryWaffle, BlackberryWaffle, BananaWaffle, AlmondWaffle, and SyrupWaffle.

Wait, we can have strawberries and blueberries on the same waffle. This gives us a StrawberryBlueberryWaffle.

We can also have strawberries and blackberries on the same waffle. This gives us a StrawberryBlackberryWaffle.

No one is forbidding us from putting three toppings on the same waffle. This gives us a StrawberryBlueberryBlackberryWaffle.

To make things simple, let’s consider strawberries, blueberries, and blackberries as potential toppings. There are eight different combinations[1].

Does this mean we need to create eight different objects for our waffle collection?

If we add bananas into our potential toppings list, there are 16 different combinations[2].

It’s obvious that adding a single topping to our toppings list causes an explosion in our waffle collection.

**It’s not feasible to create a different waffle class for each possible combination of toppings.** There must be a better way to do this.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FuzZh2psw4J3ri%2Fgiphy.gif&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe data-width="435" data-height="234" width="435" height="234" data-src="https://medium.freecodecamp.org/media/7603dbe075df2d666a8921cf3cdbcd53?postId=264e8c816715" data-media-id="7603dbe075df2d666a8921cf3cdbcd53" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FuzZh2psw4J3ri%2Fgiphy.gif&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








What if, when we want a StrawberryWaffle instead of creating a StrawberryWaffle, we create a Waffle and add strawberries to it?

What about StrawberryBlueberryWaffle then? 🤔🤔🤔

💡💡💡**We can create a Waffle, add strawberries to it, and add blueberries to it!**💡💡💡

### Creating Waffle Classes

Let’s take a look at the plain waffle class:





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars5.githubusercontent.com%2Fu%2F3139206%3Fv%3D4%26s%3D400&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/4ea0bc973e2ab944121920ddf60ef6bb?postId=264e8c816715" data-media-id="4ea0bc973e2ab944121920ddf60ef6bb" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars5.githubusercontent.com%2Fu%2F3139206%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








You can create a waffle, serve it, and eat it like this:



![](https://cdn-images-1.medium.com/max/1600/1*weV8NQ2k6szFGp3W7UdUcw.png)



And here is the StrawberryWaffle class:





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars5.githubusercontent.com%2Fu%2F3139206%3Fv%3D4%26s%3D400&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/4c340d6b0af181a56ce98af84df576d3?postId=264e8c816715" data-media-id="4c340d6b0af181a56ce98af84df576d3" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars5.githubusercontent.com%2Fu%2F3139206%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








**Notice we pass a waffle object inside the StrawberryWaffle constructor to create a StrawberryWaffle.**

The StrawberryWaffle class has:

1.  The passed-in waffle
2.  Strawberries as a topping
3.  A `serve` method that calls the passed-in waffle’s `serve` method. Then prints `topped with strawberries`
4.  A `eat` method that calls the passed-in waffle’s `eat` method and then prints `and then eat some strawberries`

You can create a strawberry waffle, serve it, and eat it like this:














Here are the BlueberryWaffle and BlackberryWaffle classes:





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars5.githubusercontent.com%2Fu%2F3139206%3Fv%3D4%26s%3D400&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/6db3e5f98ac73e2d925dbca219549cfa?postId=264e8c816715" data-media-id="6db3e5f98ac73e2d925dbca219549cfa" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars5.githubusercontent.com%2Fu%2F3139206%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








And you can use them like this:














### Pulling the Common Part Out

Noticing the StrawberryWaffle class, the BlueberryWaffle class, and the BlackberryWaffle class are almost identical except for their `topping`, we can pull the common parts out as a parent class.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars5.githubusercontent.com%2Fu%2F3139206%3Fv%3D4%26s%3D400&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/629a2d13ab36aeee0114671c5858e7ee?postId=264e8c816715" data-media-id="629a2d13ab36aeee0114671c5858e7ee" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars5.githubusercontent.com%2Fu%2F3139206%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








In `WaffleDecorator`, `topping` is no longer an attribute of the object. Instead, it’s a method that can be overridden by a child class.

Now we can rewrite `StrawberryWaffle`, `BlueberryWaffle`, and `BlackberryWaffle` to inherit `WaffleDecorator` to gain these common functionalities:





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars5.githubusercontent.com%2Fu%2F3139206%3Fv%3D4%26s%3D400&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/c8de04ef1bb5d79c3e9d65ce24a49536?postId=264e8c816715" data-media-id="c8de04ef1bb5d79c3e9d65ce24a49536" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars5.githubusercontent.com%2Fu%2F3139206%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








And they should still work the same as before:














Here are the classes we create:














### Creating a BlueberryStrawberry Waffle

Now we have `Waffle`, `StrawberryWaffle`, `BlueberryWaffle`, and `BlackberryWaffle`.

It’s time to achieve the goal we originally set out:

**create a Waffle, add strawberries to it, and add blueberries to it**.

Just like this:



![](https://cdn-images-1.medium.com/max/1600/1*QiuxdYN-dwhk0t1f47Hl_A.png)



And we can:














### What is happening?! 😱😱😱





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FRv0zzokgDrg4M%2F200.gif&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe data-width="435" data-height="324" width="435" height="324" data-src="https://medium.freecodecamp.org/media/bc5040a57d9dd54c4cbc5b04c9d4ecd2?postId=264e8c816715" data-media-id="bc5040a57d9dd54c4cbc5b04c9d4ecd2" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FRv0zzokgDrg4M%2F200.gif&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








Let’s take a closer look at how we created the `blueberry_strawberry_waffle`:

First, we created a `plain_waffle` with `Waffle`: `plain_waffle = Waffle.new`














Then we created `strawberry_waffle` by passing the `plain_waffle` into the `StrawberryWaffle` constructor. `strawberry_waffle = StrawberryWaffle.new(plain_waffle)`














It’s worth noting that when we create the `strawberry_waffle`, we hold the passed-in `plain_waffle` as an instance variable of `strawberry_waffle`:














As we can see, `strawberry_waffle.waffle` and `plain_waffle` are the same object:



![](https://cdn-images-1.medium.com/max/1600/1*D1n_qoh30U6p3OMLoGDvKg.png)



At this point, when we call `strawberry_waffle.serve.` We first call `plain_waffle.serve` then print `topped with strawberries`.
















![](https://cdn-images-1.medium.com/max/1600/1*nounSGokjqaJo3AJJEbD-g.png)



For `strawberry_waffle.eat`, we first call `plain_waffle.eat` then print `and then eat some strawberries`.
















![](https://cdn-images-1.medium.com/max/1600/1*dj_EkO2PeewA0LWi2uqztA.png)



We create `blueberry_strawberry_waffle` by passing the `strawberry_waffle`into the `BlueberryWaffle` constructor. `blueberry_strawberry_waffle = BlueberryStrawberryWaffle.new(strawberry_waffle)`














When we create the `blueberry_strawberry_waffle`, we hold the passed-in `strawberry_waffle` as an instance variable of `blueberry_strawberry_waffle`:



![](https://cdn-images-1.medium.com/max/1600/1*r9CRF5itgt635btmNldXgw.png)



When we call `blueberry_strawberry_waffle.serve` we first call `strawberry_waffle.serve`. Which calls `plain_waffle.serve` then prints `topped with strawberries.` Then print `topped with blueberries`.



![](https://cdn-images-1.medium.com/max/1600/1*aEai4fnfaqbgbnwq6a4Y4A.png)



When we call `blueberry_strawberry_waffle.eat` we first call `strawberry_waffle.eat`. Which calls `plain_waffle.eat` then prints and then `eat some strawberries`. Then print `and then eat some blueberries`.



![](https://cdn-images-1.medium.com/max/1600/1*TSLbCErIsP56O_HaOaDusw.png)



### The Key of the Magic:

`strawberry_waffle` is built on top of `plain_waffle`. And `blueberry_strawberry_waffle` is built on top of `strawberry_waffle`.

The key of being able to build waffles on top of each other is **all waffles have to obey the same interface**.

All waffles have a `serve` method and an `eat` method.

That’s why within the `StrawberryWaffle/BlueberryWaffle/BlackberryWaffle`classes, we are confident that the passed-in `waffle` has a `serve` method and an `eat` method.

And we can leverage the `serve` method and the `eat` method from the passed-in waffle when defining a new `serve` method and a new `eat` method.

A WaffleDecorator doesn’t care about the kind of waffle. It can be a plain_waffle, a strawberry_waffle, or an alien-waffle.

**All that matters is that a WaffleDecorator takes a waffle and returns a enhanced waffle. The waffle it takes and the waffle it returns obey the same interface.**

**Since all decorators taking and returning waffles obey the same interface, the result of a decorator can be passed into another decorator.**

Just like this:














or this:














Now with `Waffle`, `StrawberryWaffle`, `BlueberryWaffle`, and `BlackberryWaffle`, we can create all eight different waffles.

Adding banana into our topping list is as easy as:





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars5.githubusercontent.com%2Fu%2F3139206%3Fv%3D4%26s%3D400&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/b1648db10890a01c4e1e79f34dbf84f2?postId=264e8c816715" data-media-id="b1648db10890a01c4e1e79f34dbf84f2" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars5.githubusercontent.com%2Fu%2F3139206%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>





















### You just Learned the Decorator Pattern! 🎉🎉🎉

Here’s its definition:

> Decorator attaches additional responsibilities to an object dynamically.

### Takeaways:

1.  **The decorator pattern is about adding additional features to an existing object easily.**
2.  **The object to be decorated (the one being passed into all decorators) and objects returned from decorators have to obey the same interface.**











* * *







Thanks for reading! I hope you enjoy the article. 🙃

I publish to [sihui.io](http://www.sihui.io/) weekly.

Subscribe so you won’t miss the next article from the series.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Fupscri.be%2Fmedia%2Fform.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe data-width="800" data-height="480" width="700" height="420" data-src="https://medium.freecodecamp.org/media/85649cc8b67966057c7c8dde81ece26d?postId=264e8c816715" data-media-id="85649cc8b67966057c7c8dde81ece26d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fupscri.be%2Fmedia%2Fform.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>


















* * *







Next time we will take a look at …











* * *




















[1] PlainWaffle, StrawberryWaffle, BlueberryWaffle, BlackberryWaffle, StrawberryBlueberryWaffle, StrawberryBlackberryWaffle, BlueberryBlackberryWaffle, and StrawberryBlueberryBlackberryWaffle.

[2] [C(4, 0) + C(4, 1) + C(4, 2) + C(4, 3) + C(4, 4) = 16](https://www.calculatorsoup.com/calculators/discretemathematics/combinations.php)








