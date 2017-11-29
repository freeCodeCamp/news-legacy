---
author: Kevin Kononenko
authorTwitter: https://twitter.com/devmanual
authorFacebook: https://facebook.com/10203738544564981
title: "JavaScript Promises Explained By Gambling At A Casino"
subTitle: "We all love the asynchronous capabilities of JavaScript. In fact, we love them so much that sometimes, we overindulge. And then we get co..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*WcIi4QEeGRC0btw4nImRVQ.jpeg
url: https://medium.freecodecamp.org/javascript-promises-explained-by-gambling-at-a-casino-28ad4c5b2573
id: javascript-promises-explained-by-gambling-at-a-casino-28ad4c5b2573
date: 2016-05-24T21:22:24.471Z
tags: [
  "JavaScript",
  "Programming",
  "Education",
  "Tech",
  "Web Development"
]
---
# JavaScript Promises Explained By Gambling At A Casino







![](https://cdn-images-1.medium.com/max/2000/1*WcIi4QEeGRC0btw4nImRVQ.jpeg)







#### Promises might seem confusing… until you find yourself in “callback hell.” Then they seem reasonable!

We all love the asynchronous capabilities of JavaScript. In fact, we love them so much that sometimes, we overindulge. And then we get code that looks like this “[pyramid of doom](https://en.wikipedia.org/wiki/Pyramid_of_doom_%28programming%29)”, at which you’ll want to respond by throwing a Hadouken:



![](https://cdn-images-1.medium.com/max/1600/1*mL04Mh-tDosU6_OlqexwyQ.jpeg)



This is commonly known as “callback hell” because you probably don’t want to re-read that code and try to understand how everything works, and in what sequence it works. In fact, nobody on your team does either.

Here is another, more straightforward example:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/7c683ab0ad4f61f293fb450445c5d5ab?postId=28ad4c5b2573" data-media-id="7c683ab0ad4f61f293fb450445c5d5ab" allowfullscreen="" frameborder="0"></iframe>





A few things are difficult about the above example:

*   Unclear error handling. What happens if something goes wrong?
*   Each function depends on the previous function. You do not need the asynchronous style. You want to make the order clear to others reading the code. When you chain this many functions together, a synchronous style of code will be more readable.
*   You need to continually track the variables for input into a function, and then output. And also track the logic that happens to each output. This becomes exhausting.

You could make this entire process more understandable using **promises**. If you are like me, you may have heard of promises once or twice, but then ignored them because they seemed confusing. The basic uses of promises are actually pretty easy if you understand callbacks.

Promises are kind of like going to the casino, and if you are looking to clean up a nasty code block, they are an excellent solution. Promises encourage straightforward, single-purpose functions that will allow you to write clear code and understand every step without headaches.

Note: If you do not have experience with callbacks, check out [my explanation](https://medium.freecodecamp.com/javascript-callbacks-explained-using-minions-da272f4d9bcd#.slyskqmt8) on the principles of callbacks. If you are looking for a more technical explanation of promises, check out [this guide](http://www.telerik.com/blogs/what-is-the-point-of-promises) or [this guide](https://www.promisejs.org/) or [this video](https://www.youtube.com/watch?v=obaSQBBWZLk).

#### Let the betting begin!

**A promise holds the place of a value that does not yet exist, but will certainly exist in the future.** This allows you to clearly follow a function and understand its beginning and end. As shown above, promises are a great way of giving clarity to consecutive asynchronous functions and clarifying inputs and outputs.

Let’s say that you are taking a weekend vacation to a casino. You have two weeks of salary in your pocket, and you are going to enjoy every moment as you bet it away, down to the last dime. You get your hotel room, then head down to the casino. The tables at the casino do not accept cash, however. You need to head over to a cashier station to exchange your money (let’s say $1,000) for casino tokens, like these guys:



![](https://cdn-images-1.medium.com/max/1600/1*rjNGiLJjB1bLbhmsopH_8A.jpeg)

By Podknox, User:AlanM1 — Cropped from [1], CC BY 2.0, [https://commons.wikimedia.org/w/index.php?curid=21571904](https://commons.wikimedia.org/w/index.php?curid=21571904)



Stop right here. This is the beginning of a promise! You have a known value to start, but it is a stand-in, not a final product. You can’t spend these casino tokens outside of the casino floor, and you didn’t come to the casino to collect casino tokens. You went there to play games, and casino tokens are the starting point that will allow you to translate your $1,000 cash into a final product, hopefully more than $1,000.

After you get your tokens, you try all your favorite games. You play 20 hands of blackjack, bet 30% of your money and lose $200\. That was quick. You move on to roulette, and bet 5% on black until you win $50\. You move on to poker, bet 50% of your money, then lose $500 after you get too confident.

Here is that process in code:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/05d4cca7b0ceaac82dcc42d40670a5b2?postId=28ad4c5b2573" data-media-id="05d4cca7b0ceaac82dcc42d40670a5b2" allowfullscreen="" frameborder="0"></iframe>





A couple things to note about this scenario:

*   You can’t play two tables at once, so one game must follow the other.
*   There is not much you can do in a casino besides play games, so you want to move directly from one game to another.
*   The only relevant input when you start a particular game is the number of tokens you can use to bet.
*   The output from a particular game will also be tokens.
*   If you run out of tokens, you will not be able to start another game. You can either complain to the manager at this point and try to gain their sympathy, or (more likely) start drinking.

**Each of the three .then() statements in the above sequence is a promise**. It begins with a definitive stand-in value, and will return an unknown quantity of tokens, depending on how the game goes. Once the game finishes, it returns the value and immediately feeds it to the next promise. The previous promise is considered “fulfilled”.

Here is the above example, in an extensible way:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/af96c363179a9946e0f7794cbb933364?postId=28ad4c5b2573" data-media-id="af96c363179a9946e0f7794cbb933364" allowfullscreen="" frameborder="0"></iframe>





In this example, all the functions are reusable! So if you want to play the games in a different order, you can easily switch them around in lines 4–6.

For sake of comparison, here is the same code without promises:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c26c2a72c3bd029fa4e8e302630eaedb?postId=28ad4c5b2573" data-media-id="c26c2a72c3bd029fa4e8e302630eaedb" allowfullscreen="" frameborder="0"></iframe>





Pretty tough to read! Also, the error messages are repetitive. You might throw this error if the promise is rejected due to a value less than or equal to $0\. The asynchronous style is unnecessary, because we know that this is a sequence of consecutive actions.

#### Doubling down on these examples

If you understand promises at this point, I am freaking amazed! Let’s dig deeper into the first example to break it down line-by-line.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/05d4cca7b0ceaac82dcc42d40670a5b2?postId=28ad4c5b2573" data-media-id="05d4cca7b0ceaac82dcc42d40670a5b2" allowfullscreen="" frameborder="0"></iframe>





**Line 3:** You convert your $1,000 in cash into tokens using the getCasinoTokens() function, not pictured here.

**Line 4:** The .then() statement signifies that the next code block will use the results of the getCasinoTokens() function. Those results will be passed in via the _tokens_ argument. This segment, lined 4–6, is now an **unfulfilled promise**. We took in the _tokens_ value, and we are waiting to transform that value before we can move on. A return statement will fulfill it.

**Line 5:** We call the playBlackjack() function with 30% of the tokens. Since blackjack can only be played with tokens, it is important that this argument is in the form of a number. If it was a string, or array, or object, this function would throw an error, and we would reject the promise. When the promise is rejected, we move down to the .catch() function on line 13 to see what to do if an error occurs. Fortunately, tokens is a number, the function finishes, and this promise is fulfilled. We input one token amount, did some betting, and came out with a new token amount

**Line 7:** There is another .then() function, which means we now have another unfulfilled promise. The input value for this promise is the **result of the return statement from the previous function.** In this case, it is a token count after playing blackjack. This is fed into the promise via the _moreTokens_ argument. If you were at the casino, you would have taken your resulting pile of tokens and moved directly to the next game, roulette.

**Line 8:** If the playRoulette() function is successfully completed, this promise will be fulfilled. In this case, as long as moreTokens is a number, it will complete successfully. And then we repeat this process for every consecutive .then() function.

**Line 13:** The catch() function handles any errors, so we do not need to do error handling within every single function or neglect error handling entirely.

The key to promises is the concept of unfulfilled, fulfilled or rejected. Once you create a sequence of these promises, you have a clear flow of inputs and outputs, and clear code for others to read. You can use the 3 different states to track the progress of the entire chain of promises. The style is synchronous (sequential), even though the actual execution is asynchronous.





<iframe data-width="800" data-height="400" width="700" height="350" src="https://medium.freecodecamp.org/media/49d3eea55442a7cdcaff56ecc0af5a9e?postId=28ad4c5b2573" data-media-id="49d3eea55442a7cdcaff56ecc0af5a9e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fupscri.be%2Fmedia%2Fform.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>















* * *







Thanks for reading. I hope this analogy helped you better understand JavaScript and promises.

Click the 💚 below so other people will see this article here on Medium.








