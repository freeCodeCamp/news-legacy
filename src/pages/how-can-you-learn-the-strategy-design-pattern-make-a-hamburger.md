---
author: Sihui Huang
authorTwitter: https://twitter.com/sihui_io
authorFacebook: none
title: "How can you learn the Strategy Design Pattern? Make a hamburger!"
subTitle: "Do you know how to order a burger?..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*oIC7jzfYZde2T_Oo6DpI2Q.png
url: https://medium.freecodecamp.org/how-can-you-learn-the-strategy-design-pattern-make-a-hamburger-a6ad4332b838
id: how-can-you-learn-the-strategy-design-pattern-make-a-hamburger-a6ad4332b838
date: 2017-10-26T20:28:49.435Z
tags: [
  "Food",
  "Ruby",
  "Programming",
  "Tech",
  "Design"
]
---
# **How can you learn the Strategy Design Pattern? Make a hamburger!**







![](https://cdn-images-1.medium.com/max/2000/1*oIC7jzfYZde2T_Oo6DpI2Q.png)







Do you know how to order a burger?

If so, I have good news for you. Then you know how to use one of the most commonly used design patterns, [strategy pattern](https://en.wikipedia.org/wiki/Strategy_pattern)!

“How so?” you might ask. Well, let’s take a look at the features of strategy pattern.

*   It defines a family of algorithms.
*   It encapsulates each algorithm.
*   It makes the algorithms interchangeable within that family.

Strategy pattern lets the algorithm vary independently from clients that use it.



![](https://cdn-images-1.medium.com/max/1600/1*UQuo_svmmX9OKxW3teI12g.png)

Do you feel as confused as this guy?



How does this have anything to do with burgers?

Let’s think about burgers for a second.



![](https://cdn-images-1.medium.com/max/1600/1*uiU-4XXn3GoQFEGYgRFcEw.png)



There are many varieties of burgers: veggie burger, cheeseburger, grilled chicken burger, and double cheeseburger to name a few. All of them share the same format: the top bun + patty + bottom bun.

It’s the patty that makes each burger different. A cheeseburger has cheese and a beef patty in the middle, whereas a grilled chicken burger has a grilled chicken breast patty.

Let’s recap the strategy pattern definition in terms of burgers. What is the family of algorithms in terms of burgers? It’s the family of different patties:

*   patty for a chicken burger = [grilled chicken breast]
*   patty for a cheeseburger = [cheese + beef patty]
*   patty for a double cheeseburger = [cheese + beef patty + cheese + beef patty]

They are encapsulated and interchangeable with each other. Swap out the chicken burger patty with the cheeseburger patty, and you get a cheeseburger.

> Strategy lets the algorithm vary independently from clients that use it.

You can order any burger you like. But for a chef, making a burger follows the same general procedure: prepare the bun, cook the patty, and then put the patty in-between the top and bottom buns.

A burger is a real-life example of using strategy pattern.

Let’s take a look at the code.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2bf1fe74bacc80bd9a75beab05dfbc06?postId=a6ad4332b838" data-media-id="2bf1fe74bacc80bd9a75beab05dfbc06" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3139206%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>









<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/f704f4fc349d71fc874a67188425384d?postId=a6ad4332b838" data-media-id="f704f4fc349d71fc874a67188425384d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3139206%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





There are three participants in the strategy pattern.

**Strategy** declares an interface common to all supported algorithms. Context uses this interface to call the algorithm defined by a concrete strategy.

**Concrete strategy** implements the algorithm using the StrategyInterface.

**Context** is configured with a ConcreteStrategy Object; maintains a reference to a strategy object; may define an interface that lets strategy access its data.

GrilledChickenStuffing and BeefPattyStuffing are our concrete strategies. Each defines how its stuffing should be cooked. The `Burger` class is our context. It’s configured with a concrete strategy and it uses the concrete strategy later when a burger needs to be cooked.

In our burger example, we don’t have a specific class that declares what interface the concrete strategies should implement. That’s because we don’t need to, thanks to Ruby’s duck typing. If it walks like a duck and talks like a duck, it’s a duck. If it can be cooked as a burger patty, it is a burger patty.

Strategy declares the interface for which a concrete strategy should implement and for which context can use. As you can see in the above code, both GrilledChickenStuffing and BeefPattyStuffing implements the cook method, and that’s the method the user of a concrete strategy, aka the context, expects a concrete strategy to provide.

#### **The key idea of the strategy pattern**

The key to the strategy pattern is to pull the varying algorithms out into a separate object. These objects become a family of algorithms the context can choose from. Each of these objects, aka the strategies, does the same job and supports the same interface.

In our burger example, we have different patty strategies for a burger. And each of the concrete burger patty strategy supports the same interface by implementing the cook method.

It’s all about composition. The user has a strategy and delegates. The user of the strategy delegates the job. In our example, a burger has a patty, and it delegates the job of cooking.

#### **Advantages of the strategy pattern**

*   It achieves better separation of concerns by pulling out a set of strategies from a class and relives the `Burger` class of any responsibility for our knowledge of the stuffing.
*   It makes it easy to switch strategies at runtime because the pattern is based on composition and delegation, rather than on inheritance.

#### **Things to watch out for while considering using the strategy pattern**

*   Data passing between context and strategy. If the implementation of a concrete strategy requires data from the context, you can either pass the data as parameters to a concrete strategy or pass the context itself into a concrete strategy. This is so that the concrete strategy can have access to the data through the context. Whichever way you choose, watch out for the tangling of the context and the concrete strategy.
*   Double check if you actually need the strategy pattern, the [template method](https://en.wikipedia.org/wiki/Template_method_pattern), or the [decorator pattern](https://en.wikipedia.org/wiki/Decorator_pattern).

#### **Design principles used in the strategy pattern**

*   Encapsulate what varies
*   Favor composition over inheritance
*   Program to interfaces, not implementation

Now you have learned about the strategy pattern.

Here’s an important question: what’s your favorite burger strategy? :)





<iframe data-width="800" data-height="480" width="700" height="420" src="https://medium.freecodecamp.org/media/85649cc8b67966057c7c8dde81ece26d?postId=a6ad4332b838" data-media-id="85649cc8b67966057c7c8dde81ece26d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fupscri.be%2Fmedia%2Fform.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>















* * *







Next time we will take a look at the template method and …



![](https://cdn-images-1.medium.com/max/1600/1*VboteHPFWOiIWe9ujGeiBA.png)










