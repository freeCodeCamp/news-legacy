---
author: Christopher Phillips
authorTwitter: https://twitter.com/chrispwebdev
authorFacebook: https://facebook.com/10100778151856270
title: "How to Patch Together an AI from Scratch"
subTitle: "Yesterday I started the Tic Tac Toe project from Free Code Camp...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*vWwvSGP1gDBT0Uf_OXIRFQ.jpeg
url: https://medium.freecodecamp.org/struggling-with-a-coding-challenge-follow-these-simple-steps-a5372c6ea0f4
id: struggling-with-a-coding-challenge-follow-these-simple-steps-a5372c6ea0f4
date: 2015-11-19T03:37:08.126Z
tags: [
  "Programming",
  "Web Development",
  "Education",
  "Artificial Intelligence",
  "Game Development"
]
---
# How to Patch Together an AI from Scratch







![](https://cdn-images-1.medium.com/max/2000/1*vWwvSGP1gDBT0Uf_OXIRFQ.jpeg)

Image source: [The Modern Quilt Guild](http://www.themodernquiltguild.com/)







Yesterday I started the Tic Tac Toe project from [Free Code Camp](http://freecodecamp.com).

It’s a “programming” challenge in many ways, as it involves creating AI that responds intelligently to your moves. In fact, the goal is to create an AI that’s unbeatable.

This seemed a little more complex than getting some elements from the DOM, turning them into jQuery objects, and applying some methods to them, like we were doing with earlier projects. So I started googling around, only to get lost in MiniMax theories, horrendous YouTube tutorials, and poorly written guides.

I decided to take it upon myself to jump straight in. And that decision has lead me to learn so much.

#### Know what you don’t know

It’s really important in coding to recognize your current knowledge and it’s limits. So how do you approach a challenge that involves far more than you already know.

**1\. Think about how you will approach the problem.** Create a plan of attack, even if you’re not sure how each step will work yet. If it’s with [Free Code Camp](http://freecodecamp.com), make sure you include the user stories in this plan and how you will include each one.

**2\. Start with the basics.** For Tic Tac Toe, that meant creating the HTML and CSS with buttons that could be taken from the DOM and worked with in JS.

**3\. Work with methods that you have used before.** I have worked with elements from the DOM many times using jQuery and JavaScript so getting a button, giving it an innerHTML text value and a class, was not an issue.

**4\. Create a simpler solution**. This for me involved creating a game for 2 players with no AI. You can see this [here](http://codepen.io/chris_is_phillips/full/pjYyQa/). A simple overview:

*   When a user clicks a button, it adds an “X” to that button. Then the player symbol alternates to a “O” for the next player. It then toggles back and forth.
*   When a winning line is created, an alert message is created which says “Congratulations” + player symbol + “You won”.
*   If no winning line is created, it is a draw, with an appropriate alert message.

**5\. Add layers of functionality with what you know**. I added buttons that would let you choose which symbol the first player would like to be. These were simple, just changing a variable. The next thing I had to do was to create some AI. I tried two things.

*   A loop that places a computer response in the next available box. This created a very simple AI that was really easy to beat. See it [here](http://codepen.io/chris_is_phillips/full/Qjomdr/).
*   A loop that generated a random number between 1 and 9, and put a value in that box if it was free. More complex, but ultimately a very stupid AI! See it [here](http://codepen.io/chris_is_phillips/full/jbJzKQ/).

**6\. Research, learn and perfect your solution**. I am now researching MiniMax theory which is a recursive function to generate possible scenarios based on theoretical player/computer turns. I will aim to apply this functionality as soon as I have a good grasp. I also need to [refactor](http://blog.cphillips.co.uk/archives/98) my code as it is a bit messy.

**No problem is too great.** Start with small steps utilizing your current knowledge, build upon it, and then research the tasks remaining that you can’t accomplish. This challenge has taught me the most so far out of all the [Free Code Camp](http://freecodecamp.com) curriculum.











* * *







_Originally published at_ [_CHRIS PHILLIPS_](http://blog.cphillips.co.uk/archives/323)_._








