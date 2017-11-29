---
author: Déborah Mesquita
authorTwitter: https://twitter.com/dehhmesquita
authorFacebook: none
title: "How I built a game that won the 2016 Azure Machine Learning Award"
subTitle: "Every year, Microsoft hosts the Imagine Cup. Young developers often call it the “Olympics of Technology” and consider it one of the top c..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*JQcCZ8tOoE-MztriV1QKTg.jpeg
url: https://medium.freecodecamp.org/how-i-won-the-azure-machine-learning-award-418ff35c6e4d
id: how-i-won-the-azure-machine-learning-award-418ff35c6e4d
date: 2017-02-17T20:02:56.259Z
tags: [
  "Machine Learning",
  "Artificial Intelligence",
  "Data Science",
  "Learning",
  "Tech"
]
---
# How I built a game that won the 2016 Azure Machine Learning Award







![](https://cdn-images-1.medium.com/max/2000/1*JQcCZ8tOoE-MztriV1QKTg.jpeg)

Me and the brazilian team in the Quincy Jones Performing Arts Center at Seattle’s Garfield High School







Every year, Microsoft hosts the [Imagine Cup](https://compete.imagine.microsoft.com/pt-br/category/0?skillLevel=0). Young developers often call it the “[Olympics of Technology](https://en.wikipedia.org/wiki/Imagine_Cup)” and consider it one of the top competitions related to software design. As a result, it attracts lots of young participants from around the world, who collaborate to solve some of the world’s toughest challenges.

In 2016, they hosted the [Hello Cloud Machine Learning Award](https://compete.imagine.microsoft.com/pt-br/competition/17554), where winners were selected from all entries based on quality, creativity and the effectiveness of their use of Azure Machine Learning Studio.

I jumped into the competition to learn more about machine learning and ended up as one of the winners of the challenge. What got my interested in the first place was the focus of the competition: **to build creative and inventive systems using machine learning**.

When a user stops using a good or service (in this case, a game), we call that “churn.” Based on past player history, or data for similar players over time, we can create a machine learning model to predict when a player is most likely to quit.

In the first part of the competition we had to build, train, score, and evaluate a model to do just that in the Azure ML Studio. We then had take a basic game provided by them, connect it to the Azure ML service, and publish it to the web.







![](https://cdn-images-1.medium.com/max/2000/1*2wH1qa4gkLEYvSGeT5wr0w.png)

This was my first Game Design Document (more on that latter)







One of the key factors that makes a player abandon a game is its difficulty level. If it's too easy the game gets boring, and if it's too hard it demotivates the user to keep playing.

I decided to use the rock-paper-scissors dynamics in the game. To earn new superpowers in the game, the players (math students) would have to solve some math equations (these were used like attacks in a fighting game).

Based on the data for each player, we could adjust the difficulty of the math equations to keep them motivated to play the game. We could also identify what kind of equations were causing kids the more trouble (subtraction? multiplication?). This is an amazing opportunity to help teachers and everyone involved in the learning process.

#### Principle 1: Focus on being different

One thing I know for sure in competitions is this: **focus on being different instead of just focusing on being better**. We don't know the number of competitors for sure, but based on what we heard there in Seattle, the contest had almost 1,000 entries. That's a lot of games for the judges to evaluate. You have to do everything you can to stand out from a crowd that size.

I bet that when you read the word “different” your first thought was “Great, now I have to come up with something big and strange out of nowhere.” Don’t worry — that isn’t the case. Because here’s another thing I know for sure: **to be different, you can just focus on being yourself**. I know it sounds cheesy, but let's elaborate on that.

> “Be yourself; everyone else is already taken.” ― [**Oscar Wilde**](https://www.goodreads.com/author/show/3565.Oscar_Wilde)

You are you, right? No one else in the world have had the experience you had, did everything you did or felt exactly everything you felt. That's it, you just have to use _this_ to be different (and original). Now let's go back to what I did in the contest.

I bought my first Wacom tablet in time for the competition, and honestly I was just looking for excuses to use it. I like to get adventurous in other areas, and I know that this is something that differentiates me. So I decided to work and change the assets of the game.



![](https://cdn-images-1.medium.com/max/1600/1*6ISgnpYDD28RZhE29AVwsA.png)

The asset they gave us and the asset I created (hey, I'm not an illustrator ok, take it easy)



#### Principle 2: Start with what you know

In the competition we first had to follow a tutorial. Only after that could we begin to create our own version of the game. This is a great way to design the workflow of our projects (and side projects): **always find a way to make the start phase easy**.

I first heard this advice in the book [Think Like a Programmer](https://www.nostarch.com/thinklikeaprogrammer). It’s true for programming, but it’s also true for a bunch of other aspects of our lives.

> Once you have divided the problem up into pieces, for example, go ahead and complete any pieces you already know how to code. Having a working partial solution may speak ideas about the rest of the problem. Also, as you may have noticed, **a common theme in problem solving is making useful progress to build confidence that you will ultimately complete the task**. By starting with what you know, **you build confidence and momentum toward the goal**. ― [V](https://www.goodreads.com/author/show/3565.Oscar_Wilde). Anton Spraul, [Think Like a Programmer](https://www.nostarch.com/thinklikeaprogrammer)

Let's be honest: programming is hard. During the competition I had some moments of frustration, but things like seeing my first predictive model running and seeing the pieces of the game start to work together got me going. Make sure you can start to see progress in a project, right from the beginning.

#### Principle 3: Adapt

This was the key factor for winning the competition, because without it, my entry wouldn't even have been submitted. **Time is a limited source**. Everybody knows this, but it’s something that we always have to keep reminding ourselves of — especially us programmers.

If you take a look at my Game Design Document above, you can see that my first idea for the game had a lot of features. For example, we had levels for the players, items they would be able to collect, healing effects, and so on. As the deadline approached, I realized that I didn't have time to execute all of those ideas. So I had to think: what is the one thing that I should have in the game to make sure that it would accomplish my goal? The answer was math equations and the rock-paper-scissors dynamics, and that was what I implemented.

It's not easy to give instructions about how to adapt, because every situation is a different. But you should know that you will have to **make choices** along the way. Your main focus should be to finish the thing on time, so you can indeed compete in the contest.











* * *







Well, as you may know by now, my project was one of the two winners of the challenge (yay!). I won a trip to the Imagine Cup World Finals and had mentoring sessions with members of the Microsoft Data Platform product.

With this project I finally found my main career goal: **to design Machine Learning systems that let humans do things they care about**.








