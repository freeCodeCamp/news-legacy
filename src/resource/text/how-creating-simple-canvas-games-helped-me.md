---
author: Surbhi Oberoi
authorTwitter: https://twitter.com/thesurbhioberoi
authorFacebook: https://facebook.com/1028912743815761
title: "How building HTML5 canvas games helped me learn programming"
subTitle: "Like many 9 year-olds, the first thing I did when our family got a computer was install games on it. My brother and I would tussle after ..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*bm6Nb2cCdNWKFZh1TKDnAw.jpeg
url: https://medium.freecodecamp.org/how-creating-simple-canvas-games-helped-me-6eef839f450e
id: how-creating-simple-canvas-games-helped-me-6eef839f450e
date: 2016-05-25T04:54:08.000Z
tags: [
  "Women In Tech",
  "Games",
  "Programming",
  "Gaming",
  "Gamedev"
]
---
# How building HTML5 canvas games helped me learn programming







![](https://cdn-images-1.medium.com/max/2000/1*bm6Nb2cCdNWKFZh1TKDnAw.jpeg)

Image credit: DIY.org







Like many 9 year-olds, the first thing I did when our family got a computer was install games on it. My brother and I would tussle after school over who got to play before mom or dad got home and booted us off of it.

As I grew up, my interests drifted away from gaming, and toward reading. Then a few days ago, my friend showed me Super Mario on his phone. And just like that, I was hooked on games again.

A thought occurred to me in that moment: why not create a game? Now that I’m learning to code with [Free Code Camp](http://www.freecodecamp.com), I just might be able to create a basic game. But I had no clue where to start. So I started googling.

I found out about canvas API, and how it could be used to create basic games. I took Udacity’s HTML5 Canvas course. It took me three days to finally wrap my head around the concepts of canvas.

After the course, I still felt I needed a tutorial to teach me how to build a game from the scratch step-by-step, so I followed one. This revealed to me that I was still lost on some of the fundamentals of Object Oriented Programming, so I found another course on Udacity for Object Oriented JavaScript.

This was pretty dense, and took some time to digest. I had to watch some videos twice to understand them. But eventually, I finished watching all the videos, and came to the last chapter where you finally create a game. The good part about this course was that they provided a game framework already.

The game was called “Frogger”, where a sprite would have to cross a path full of bugs without colliding with any of them. The sprite could also collect gems to score extra points.

To begin with, I forked their GitHub repo. There were files already created — like when using a generator like Yeoman — and the JavaScript was divided into three files: app.js, engine.js and resources.js. All I had to do was fill in the pre-written functions. Since these functions were already named, I got a fair idea of which arguments to pass and what loops to create.

There are three important aspects to any game:

1.  **The game loop **— it keeps repeating a process, so that the game won’t stop unless you call the function to stop.
2.  **Rendering **— taking cues from the back end works and showing sprites on the front end (using canvas, in this case).
3.  **Updating **— updating the positions of the sprites according to the specified moves.

This might seem easy for someone who has been coding for years, but starting off fresh required a lot of patience.

After quite a bit of brainstorming and fixing bugs, the game worked. Even though it was quite basic, the sheer joy I felt having created a game was immense.

Here’s what my game looks like:



![](https://cdn-images-1.medium.com/max/1600/1*MOuZHazJOHEP2OjsPRji0Q.gif)



And here’s my code on GitHub:

[**surbhioberoi/frontend-nanodegree-arcade-game**  
_Contribute to frontend-nanodegree-arcade-game development by creating an account on GitHub._github.com](https://github.com/surbhioberoi/frontend-nanodegree-arcade-game "https://github.com/surbhioberoi/frontend-nanodegree-arcade-game")[](https://github.com/surbhioberoi/frontend-nanodegree-arcade-game)

This game can be improved in a number of ways, such as by using random inputs. Here, I’ve hard-coded the positions, which is not a good practice. I am learning to do things in a better way, and the first step is acknowledging that a better way exists.

Over the weekend, I practiced Canvas some more, and it was fun! I created simple things on [JSfiddle](https://jsfiddle.net/) — just anything that popped into my head that could use canvas.

I wanted to create something more now. I had heard about Conway’s Game of Life. Initially, I thought that it would be really hard to create it. Despite my skepticism that I could pull it off, I just started thinking about it.

There are two very important things about coding that I learnt after making many silly mistakes: **Never never panic!** Everything is doable — just find out how. And **never begin writing code straight away.** Take time, think, sketch out your data and functionality on a sheet of paper. Try to solve the problem manually first, like you would do without a computer. If you follow this approach, writing code should always be the last step, for it’s important to know what to code first.

In my notebook, I wrote my functions, data, and what I thought would be my inputs. I created the canvas first, then proceeded to create the grid for the Game of Life.

Honestly, it’s frustrating when something does not work how you expect it to, but when it eventually works, all the irritation was worth it. It feels good to create things, and even better when those things are playable games.

The challenging part of creating this game was figuring out how to make the grid area clickable. This really worked me up, but I finally figured out a way: using offset coordinates.

Here’s what The Game of Life looks like:



![](https://cdn-images-1.medium.com/max/1600/1*1jAu6l_qfMyFHuHyRhQfmg.gif)



And here’s my code on GitHub:

[**surbhioberoi/GameOfLife**  
_GameOfLife - Conway's game of life_github.com](https://github.com/surbhioberoi/GameOfLife "https://github.com/surbhioberoi/GameOfLife")[](https://github.com/surbhioberoi/GameOfLife)

The problems that I often faced when creating something new was the fear that I wouldn’t be able to do it. I kind of overcame this fear by learning to create games.

Also, I thought that rendering the back end on the front end was the hardest part, and it genuinely scared me. But now I’m getting past that challenge, as well.

I’ve found creating games to be the most fun way of practicing programming, because I’ve always loved playing them. Games have helped me learn programming in an entertaining way, and that I think is the best way to learn anything new.

HTML5 Canvas is really awesome, and once you get a hang of it, it is convenient to use. It’s quite fascinating how you can create so many things with just this one element.

Now, I don’t know whether you like playing games. If there’s something that you enjoy more, just try to create that. When you create something that you actually like, you can overcome the fear of not being able to create it. It will still be hard, but you’ll have the benefit of enjoyable perks along, like having a new game to play afterward. And the best part — the sense of accomplishment — will always be there waiting for you, no matter how long the creative process takes.











* * *







_Originally published at_ [_surbhioberoi.com_](http://surbhioberoi.com/how-creating-simple-canvas-games-helped-me/)_._








