---
author: Gordon Davidescu
authorTwitter: none
authorFacebook: https://facebook.com/10153865752303304
title: "The Importance of Pseudo-code in Searching for Solutions"
subTitle: "So you sign up for Free Code Camp and start plowing through lesson after lesson them like an industrial lawn mower. Everything is going g..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*nOgcKHfPr41FTbaKc1rmkw.jpeg
url: https://medium.freecodecamp.org/the-importance-of-pseudo-code-in-searching-for-solutions-f6d5b5d77a83
id: the-importance-of-pseudo-code-in-searching-for-solutions-f6d5b5d77a83
date: 2016-07-13T20:28:06.304Z
tags: [
  "Programming",
  "Tech",
  "Technology",
  "Software Development",
  "Coding"
]
---
# The Importance of Pseudo-code in Searching for Solutions



![](https://cdn-images-1.medium.com/max/1600/1*nOgcKHfPr41FTbaKc1rmkw.jpeg)

courtesy of [http://morguefile.com/creative/cheriedurbin](http://morguefile.com/creative/cheriedurbin)



So you sign up for Free Code Camp and start plowing through lesson after lesson them like an industrial lawn mower. Everything is going great, until all of a sudden you hit one of the big code challenges — and you freeze.

You don’t know where to begin. There’s so much that the challenge is demanding of you. You’re not even sure whether you actually know how to do all of the things that it is asking you to do.

Let’s take the [Tic Tac Toechallenge](https://www.freecodecamp.com/challenges/build-a-tic-tac-toe-game) for one. It’s a game, it has to be playable, it has to allow you to choose a side. And, of course, it also has to be winnable (and lose-able).

I think this happens to a lot of people who attend Free Code Camp, even if they have prior experience learning to code. This happened to me plenty during my brief stint as a computer science major.

In short, it is easy to be overwhelmed. And in absence of an in-person whom you can ask “So where do I even begin?” you may despair and just do…nothing. Nothing but play the latest _click this cookie_ kind of game until inspiration strikes.

#### Enter pseudo-code

Instead of doing nothing, try using pseudo-code_._ It will help youmake a map of where to start, and how to best to proceed.

What is pseudo-code? In short, it is something you write that is not _actual_ code in any programming language but that, if anyone were to read it, would make it clear what is happening.

Ask any kid how tic-tac-toe works and they can tell you. (As opposed to Patrick’s game _tic tac._ Only someone with a a five year old son who’s seen that episode of Spongebob Squarepants a few times can explain that).

You have your board. One player is X. One player is O. One of them goes first. And then the other. Each puts their symbol in unoccupied squares. They keep alternating turns until one of them has three in a row, or the board is full and neither wins. New match.

Now, let’s see how that plays out in pseudo-code. Here’s what I would write :

<pre name="1914" id="1914" class="graf graf--pre graf-after--p">Draw a board on the screen — three squares across by three squares down. If any of the squares are clicked before a new game is started, pop up a warning that their game has not started yet Button : new game.</pre>

<pre name="6e79" id="6e79" class="graf graf--pre graf-after--pre">When clicked, variable player = x or o depending on which they clicked.</pre>

<pre name="2f1e" id="2f1e" class="graf graf--pre graf-after--pre">On the click of a block:  
If there is an X or an O in the block, do nothing.  
If there is neither X nor O in the block, change the board space with player.  
  If the top row or the middle row or the bottom row or the first column or the middle column or either of the diagonals are all player piece --   
     Announce the player wins!  
     Ask if the player wants to play again!  
     If yes, start from the top!  
   If the player did not win and the board is not full, let the computer take its turn.  
      Computer turn:  
      From the first square to the last square, check for two player pieces in either the first, second, or last row or column or diagonal and when found, place a computer piece in the third unoccupied space.  
      If none of these are found:  
          From the first square to the last square, check each one to see if any is blank.  
          As soon as one is found blank, put the computer's piece there.  
          If the top row or the middle row or the bottom row or the first column or the middle column or either of the diagonals are all computer piece --   
     Announce the computer wins!  
     Ask if the player wants to play again!  
     If yes, start from the top!  
   If the computer did not win and the board is not full, start from the top with the player's turn.</pre>

<pre name="8375" id="8375" class="graf graf--pre graf-after--pre">If the board is full, game over! New round? Ask the player.</pre>

That’s it. That’s the whole game, broken down into four basic steps. Now comes the really fun part, as it were — the research.

Since you now have a map of how the app is going to work out, you can look at any of the steps and do some research as to how to make it happen.

First, how do you draw a board in HTML with clickable sections?

It becomes quickly evident that you should probably use the 






