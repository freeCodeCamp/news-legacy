---
author: Ben Carp
authorTwitter: none
authorFacebook: https://facebook.com/278018276026925
title: "Building an AI algorithm for the Tic-Tac-Toe challenge"
subTitle: "As part of the freeCodeCamp curriculum, I was challenged build a Tic-Tac-Toe web app. It was a real pleasure...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*tTQJFNpKFOOiH8dN_2tyEQ.png
url: https://medium.freecodecamp.org/building-an-ai-algorithm-for-the-tic-tac-toe-challenge-29d4d5adee07
id: building-an-ai-algorithm-for-the-tic-tac-toe-challenge-29d4d5adee07
date: 2017-11-08T16:57:27.088Z
tags: [
  "Programming",
  "AI",
  "Algorithms",
  "Games",
  "JavaScript"
]
---
# Building an AI algorithm for the Tic-Tac-Toe challenge



![](https://cdn-images-1.medium.com/max/1600/1*tTQJFNpKFOOiH8dN_2tyEQ.png)



As part of the [freeCodeCamp](https://www.freecodecamp.org/) curriculum, I was challenged build a [Tic-Tac-Toe](https://en.wikipedia.org/wiki/Tic-tac-toe) web app. It was a real pleasure.

The app includes an ultimate computer player. It can optimize any given situation on the Tic-Tac-Toe board. The outcome surprised me.

Even in such a simple game, the computer player taught me some new moves. As for the code I wrote, it is somewhat unique and interesting to explore.

### Check it out

Visit [this link](https://carpben.github.io/TicTacToe/) and choose to play against the computer. **I challenge you to win**. You might find…that you can’t.

Yet, if you are hard on the defense, you might find out that the computer is not able to win either. I learned by experience that Tic-Tac-Toe has a simple **non-lose** strategy.

This means that if you manage to get a tie you are making the right defensive choices. The computer still optimizes its’ moves. So, the best result it can achieve against a player such as yourself might only be a tie.

### Main Solution steps

### 1\. board data structure

<pre name="af68" id="af68" class="graf graf--pre graf-after--h3">_gameBoard: [  
[“”, “”, “”],  
[“”, “”, “”],  
[“”, “”, “”]  
]</pre>

The board Array contains 3 arrays, each representing a row.  
Each row array contains 3 character or string elements.

These elements are either:

*   “ ” as an empty string, representing an empty cell
*   “X” representing the X player
*   “O” representing the O player

### 2\. getResult function

[Begins at Line 59](https://github.com/carpben/TicTacToe/blob/ea8a67918f0ab97bca40e4383839e95695da803f/tictactoe.js#L59)

At any given state, the board will be in one and one only of these possible states:

*   Incomplete
*   player X won
*   Player O won
*   or a tie

The `getResult` function receives a board array, iterates over all the rows, through all the columns and across both diagonals. It checks the succession of symbols. Then it lets us know the current state of that board.

### 3\. getBestMove Function

Here it gets more difficult. When the board is empty it is very difficult to identify the best possible move. Take a look at this board.



![](https://cdn-images-1.medium.com/max/1600/0*Dsyde0AOjxdNDKcf.)



Which is the best possible possible move?



![](https://cdn-images-1.medium.com/max/1600/0*i4_4_Zj1k5vL6y-M.)



When the board becomes populated, the best possible move pops out to our eyes.



![](https://cdn-images-1.medium.com/max/1600/0*AhY-mhauWzJUci57.)



Let’s use this populated board as our starting point. Lets decide that the next move is ours, and that our symbol is an “X”.

Let’s try to identify the best possible move with the tools we already have. There are 3 empty cells that correspond with 3 possible moves. Lets check the result for each of these options.

We can do this by iterating over the possible moves, and for each of them:

*   Create a new board
*   Add our symbol to the corresponding empty cell
*   Send this board to the `getResult` function



![](https://cdn-images-1.medium.com/max/1600/0*icD9gAM1qcKbp2Co.)

**Move 1**





![](https://cdn-images-1.medium.com/max/1600/0*W5gAvB6HADWOxeaF.)

**Move 2**





![](https://cdn-images-1.medium.com/max/1600/0*zae3uSQUIuWlXFM6.)

**Move 3**



From the 3 boards in the figure above, when we send the second board to the `getResult` function, we will receive our trophy.

Please concentrate for the next essential steps:

1.  We need to grade the possible moves so we can compare them. Let’s decide that if a move yields a winning board we will grade it 1\. If it yields a losing board it will receive the grade of -1\. A tie will receive a grade of 0.
2.  Move 2 will receive a grade of 1\. When we find a move graded with 1 we can ignore all other possible moves. There is no other better possible move than a definite victory.
3.  But for the sake of understanding, how would we grade moves 1 or 3, or any other move with an incomplete result?

Let’s Focus on move 3\. The solution is to send the corresponding board recursively to the `getBestMove` function.

You might be thinking, “But wait! Our opponent plays the next move.” That’s right. Let’s find out what grade our opponent gets for his best future move.

Our opponent has only two possible moves:



![](https://cdn-images-1.medium.com/max/1600/0*WGMUS4167_ub3ev-.)

**Move 3–1**





![](https://cdn-images-1.medium.com/max/1600/0*bUNVZCA4P7FVxeY4.)

**Move 3–2**



Move 3–1 will win the game in favor of our opponent. Since we are using the exact same `getBestMove` function, Move 3–1 will receive a grade of 1.

This might be a bit confusing as both our victory and our loss will receive grades of 1\. We need to remember that this function call belongs to our opponent, and his victory is our loss and vice versa.

We must negate any grade returned to the `getBestMove` function by the `getBestMove` function.

Move 3–1 receives a grade of 1\. The `getBestMove` function returns a grade of 1, and we can grade Move 3 with a -1.



![](https://cdn-images-1.medium.com/max/1600/0*DrYhRWpB33bwSdPU.)



In this manner, the `getBestMove` function continues to explore moves and consequent moves. This process will continue until:

1.  It finds a move graded with 1, in which case it will return the move immediately
2.  It will continue until each possible move has a grade. The possible moves (with grades 0 and -1) are stored in an array
3.  The array will then be:   
    [a] randomized   
    [b] sorted from high to low   
    [c] the first element will be returned

These steps guarantee that:

1.  A losing move will be avoided unless it’s the only option
2.  The computer player can play diversely

#### End Notes:

1.  There are strong legitimate concerns over the [risks](https://en.wikipedia.org/wiki/Friendly_artificial_intelligence) Artificial Intelligence (AI) brings with it.  
    Lets use AI for the benefit of all.   
    The best possible AI software is that which can prevent us from misusing AI.
2.  I consulted [Assaf Weinberg](https://twitter.com/assafweinberg?lang=en) in the process of writing the app

See [my code](https://github.com/carpben/TicTacToe/blob/master/tictactoe.js) on GitHub.








