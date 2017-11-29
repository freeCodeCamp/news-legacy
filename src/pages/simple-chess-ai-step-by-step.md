---
author: Lauri Hartikka
authorTwitter: https://twitter.com/lhartikk
authorFacebook: none
title: "A step-by-step guide to building a simple chess AI"
subTitle: "Let’s explore some basic concepts that will help us create a simple chess AI:..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*eP0V-xfRWfW3QHJhALJ5RA.jpeg
url: https://medium.freecodecamp.org/simple-chess-ai-step-by-step-1d55a9266977
id: simple-chess-ai-step-by-step-1d55a9266977
date: 2017-03-30T19:26:08.690Z
tags: [
	"Programming",
	"Chess",
	"Artificial Intelligence",
	"Web Development",
	"Technology"
]
---
# A step-by-step guide to building a simple chess AI











![](https://cdn-images-1.medium.com/max/2000/1*eP0V-xfRWfW3QHJhALJ5RA.jpeg)












Let’s explore some basic concepts that will help us create a simple chess AI:

*   move-generation
*   board evaluation
*   minimax
*   and alpha beta pruning.

At each step, we’ll improve our algorithm with one of these time-tested chess-programming techniques. I’ll demonstrate how each affects the algorithm’s playing style.

You can view the final AI algorithm here on [GitHub](https://github.com/lhartikk/simple-chess-ai).





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F648232697047871488%2FgEw1nlW8_bigger.jpg&key=4fce0568f2ce49e8b54624ef71a8a5bd&width=40)


<iframe data-width="500" data-height="185" width="500" height="185" data-src="https://medium.freecodecamp.org/media/4070737c07602af33a19d4f101ab76eb?postId=1d55a9266977" data-media-id="4070737c07602af33a19d4f101ab76eb" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F648232697047871488%2FgEw1nlW8_bigger.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








### Step 1: Move generation and board visualization

We’ll use the [chess.js](https://github.com/jhlywa/chess.js) library for move generation, and [chessboard.js](https://github.com/oakmac/chessboardjs/) for visualizing the board. The move generation library basically implements all the rules of chess. Based on this, we can calculate all legal moves for a given board state.
















A visualization of the move generation function. The starting position is used as input and the output is all the possible moves from that position.







Using these libraries will help us focus only on the most interesting task: creating the algorithm that finds the best move.

We’ll start by creating a function that just returns a random move from all of the possible moves:





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F1086545%3Fv%3D3%26s%3D400&key=4fce0568f2ce49e8b54624ef71a8a5bd&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/fc1ce86e7ce01f90eaded31e7e2f21dc?postId=1d55a9266977" data-media-id="fc1ce86e7ce01f90eaded31e7e2f21dc" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F1086545%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








Although this algorithm isn’t a very solid chess player, it’s a good starting point, as we can actually play against it:












Black plays random moves. Playable on [https://jsfiddle.net/lhartikk/m14epfwb/](https://jsfiddle.net/lhartikk/m14epfwb/)4



### Step 2 : Position evaluation

Now let’s try to understand which side is stronger in a certain position. The simplest way to achieve this is to count the relative strength of the pieces on the board using the following table:














With the evaluation function, we’re able to create an algorithm that chooses the move that gives the highest evaluation:





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F1086545%3Fv%3D3%26s%3D400&key=4fce0568f2ce49e8b54624ef71a8a5bd&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/733ac1a9ca56e64ad60219caa0640cb3?postId=1d55a9266977" data-media-id="733ac1a9ca56e64ad60219caa0640cb3" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F1086545%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








The only tangible improvement is that our algorithm will now capture a piece if it can.












Black plays with the aid of the simple evaluation function. Playable on [https://jsfiddle.net/lhartikk/m5q6fgtb/1/](https://jsfiddle.net/lhartikk/m5q6fgtb/1/)



### Step 3: Search tree using Minimax

Next we’re going to create a search tree from which the algorithm can chose the best move. This is done by using the [Minimax](https://en.wikipedia.org/wiki/Minimax) algorithm.

In this algorithm, the recursive tree of all possible moves is explored to a given depth, and the position is evaluated at the ending “leaves” of the tree.

After that, we return either the smallest or the largest value of the child to the parent node, depending on whether it’s a white or black to move. (That is, we try to either minimize or maximize the outcome at each level.)












A visualization of the minimax algorithm in an artificial position. The best move for white is **b2-c3**, because we can guarantee that we can get to a position where the evaluation is **-50**







![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F1086545%3Fv%3D3%26s%3D400&key=4fce0568f2ce49e8b54624ef71a8a5bd&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/6fcadd893b7cdda93b267ae40a5dd43c?postId=1d55a9266977" data-media-id="6fcadd893b7cdda93b267ae40a5dd43c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F1086545%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








With minimax in place, our algorithm is starting to understand some basic tactics of chess:












Minimax with depth level 2\. Playable on: [https://jsfiddle.net/k96eoq0q/1/](https://jsfiddle.net/k96eoq0q/1/)



The effectiveness of the minimax algorithm is heavily based on the search depth we can achieve. This is something we’ll improve in the following step.

### Step 4: Alpha-beta pruning

[Alpha-beta](https://en.wikipedia.org/wiki/Alpha%E2%80%93beta_pruning) pruning is an optimization method to the minimax algorithm that allows us to disregard some branches in the search tree. This helps us evaluate the minimax search tree much deeper, while using the same resources.

The alpha-beta pruning is based on the situation where we can stop evaluating a part of the search tree if we find a move that leads to a worse situation than a previously discovered move.

The alpha-beta pruning does not influence the outcome of the minimax algorithm — it only makes it faster.

The alpha-beta algorithm also is more efficient if we happen to visit **first** those paths that lead to good moves.












The positions we do not need to explore if alpha-beta pruning isused and the tree is visited in the described order.



With alpha-beta, we get a significant boost to the minimax algorithm, as is shown in the following example:












The number of positions that are required to evaluate if we want to perform a search with depth of 4 and the “root” position is the one that is shown.



Follow [this link](https://jsfiddle.net/Laa0p1mh/3/) to try the alpha-beta improved version of the chess AI.

### Step 5: Improved evaluation function

The initial evaluation function is quite naive as we only count the material that is found on the board. To improve this, we add to the evaluation a factor that takes in account the position of the pieces. For example, a knight on the center of the board is better (because it has more options and is thus more active) than a knight on the edge of the board.

We’ll use a slightly adjusted version of piece-square tables that are originally described in the [chess-programming-wiki](https://chessprogramming.wikispaces.com/Simplified+evaluation+function).












The visualized piece-square tables visualized. We can decrease or increase the evaluation, depending on the location of the piece.



With the following improvement, we start to get an algorithm that plays some “decent” chess, at least from the viewpoint of a casual player:












Improved evaluation and alpha-beta pruning with search depth of 3\. Playable on [https://jsfiddle.net/q76uzxwe/1/](https://jsfiddle.net/q76uzxwe/1/)



### Conclusions

The strength of even a simple chess-playing algorithm is that it doesn’t make stupid mistakes. This said, it still lacks strategic understanding.

With the methods I introduced here, we’ve been able to program a chess-playing-algorithm that can play basic chess. The “AI-part” (move-generation excluded) of the final algorithm is just 200 lines of code, meaning the basic concepts are quite simple to implement. You can check out the final version is on [GitHub](https://github.com/lhartikk/simple-chess-ai).

Some further improvements we could make to the algorithm would be for instance:

*   [move-ordering](https://chessprogramming.wikispaces.com/Move+Ordering)
*   faster [move generation](https://chessprogramming.wikispaces.com/Move+Generation)
*   and [end-game](https://chessprogramming.wikispaces.com/Endgame) specific evaluation.

If you want to learn more, check out the [chess programming wiki](https://chessprogramming.wikispaces.com/). It’s a helpful resource for exploring beyond these basic concepts I introduced here.

Thanks for reading!








