---
author: Robert Skalko
authorTwitter: https://twitter.com/Coding_Rob
authorFacebook: none
title: "I built a role playing game in JavaScript. You can, too. Here’s how."
subTitle: "So you want to try and make a game, but are a bit intimidated? Don’t worry, I was too!..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*dT0K035G8ZPYB6qWv4Vy1Q.png
url: https://medium.freecodecamp.org/learning-javascript-by-making-a-game-4aca51ad9030
id: learning-javascript-by-making-a-game-4aca51ad9030
date: 2016-09-02T19:20:55.720Z
tags: [
  "JavaScript",
  "Gamedev",
  "Learning To Code",
  "Life Lessons",
  "Web Development"
]
---
# I built a role playing game in JavaScript. You can, too. Here’s how.







![](https://cdn-images-1.medium.com/max/2000/1*dT0K035G8ZPYB6qWv4Vy1Q.png)

The version v1.05 of the game







So you want to try and make a game, but are a bit intimidated? Don’t worry, I was too!

I was afraid of using objects, for example. They were this big spooky thing that I shelved away for later. But now I use them all the time!

I’m going to walk you through all the steps I went through to build my JavaScript role playing game.

Here’s my game running on CodePen. (Note that it’s not yet optimized for mobile):





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/cc2298ae1d2ad963dcf78e4f94ecf1e1?postId=4aca51ad9030" data-media-id="cc2298ae1d2ad963dcf78e4f94ecf1e1" allowfullscreen="" frameborder="0"></iframe>





**First**,pick the point of your game. Is it a puzzle? An RPG? A hack & slash? All right, now think about the technical difficulties of making it. A puzzle game would require a lot of complicated javascript. A hack & slash would need a lot of careful balancing, and so on.

Also, decide whether you want it to be a browser game, a mobile game, or both (a “native web” game).

For example, my game can’t fit well on mobile screen, because the player has 24 spells. That’s not comfortable clicking these small buttons on a tiny screen, so I would need to redesign the game for mobile.

**Second**, write down _all_ the things you need to program to actually make the game. For me it was:

*   an inventory system
*   an item generator
*   a player stat system
*   a saving system

**Third**, start making your game by solving these problems one by one.

### Need help actually creating the game?



![](https://cdn-images-1.medium.com/max/1600/1*aEC1UYYqmYtobaoaCTqg0Q.jpeg)



It’s much easier to break your game down into small tasks. You’re not making a game, you’re making an inventory system. Then you’re making a combat system. And so on.

Unless you are already good at drawing — or want to spend months or years getting good at it — use these tools to create assets that will make your game look good:

*   [Game-Icons.net](http://game-icons.net) — these icons are fun and easy to color
*   [Open Game Art](http://opengameart.org) — get some great public domain assets
*   [Bulk Resize Photos](http://bulkresizephotos.com) — a great tool for making your own tiny icons
*   [CSS Sprite Generator](http://spritegen.website-performance.org) — helps you make CSS spritesheets for your icons

### Issues I encountered them and how I solved them

#### Spritesheets

Do you plan on having more than 20 images in your game? If so, you don’t want to make 20 images with image links to each one. You might not think 20 images is that much, but if you decide to add 50 more? That’s where [spritesheets](http://spritegen.website-performance.org) come in handy. Put some pictures onto them, copy the CSS file to your project, and just add the class to your element that corresponds with your desired image.

#### Saving your game’s state

Do you want your game to be saved? Well you can choose between using the browser’s LocalStorage and storing things on a server. Servers require back end knowledge. If you have none, I suggest using LocalStorage. It saves the game as long as the user doesn’t delete it with some cleanup tool. Here’s how I did it:



![](https://cdn-images-1.medium.com/max/1600/1*8mlKqFNdm2SFjSooVGFsKg.png)



Basically, save all your data in one object, then update your items on load. Use the JSON stringify and parse it later.

#### Modularize your code

Figure out which part to hard-code and which parts to modularize. I mistakenly started hard-coding spells, which got ugly quickly. I needed 24 of these functions, along with 24 ifCritical functions.



![](https://cdn-images-1.medium.com/max/1600/1*tCuUgl39v-PFS4KJaLjZWw.png)

I swear I didn’t write this! Uhh.. I was forced to!





![](https://cdn-images-1.medium.com/max/1600/1*4FoWNMmrj3KZnxYoeVPqyQ.png)

It even has a function which can add custom functionality!



Now you may ask, how does the second spell work? I have a function playerAttack() that uses the spell object to do stuff:

*   It first runs the update spells function, which calls the spells object. Then the spell takes your current stats and turns them into values like “damage” and “mana cost”.
*   It checks to see whether the damage is more than 0\. If yes, it does damage to boss and displays the damage, which spell did it, and the amount. It does this for most other values, too. You might think that a greater-than-zero check is useless, but you’ll think again when the game says you did 0 damage and restored 0 mana.
*   Then it runs a custom function, if the spell has one. This could be used to give spells special effects which aren’t possible through our main attack function.

#### The game loop

For me, the game loop checks and update things: player stats, whether the player is dead, whether the player just leveled up, whether a boss is dead, and so on.

You’ll have to figure this one out yourself. I think it’s good learning experience. Think about for what and when the checks and updates need to run. For example, with a level check, I set it to run every 20 seconds since leveling isn’t that big a deal.

But then I also have a Boss death check which runs every second after battle starts. Why? So players don’t have to wait 20 seconds for a boss to die.

Some other things don’t even need to be in a loop. The functions can just be called when they are needed. Take my update spell function, for example. It’s only called when a player uses a spell.











* * *







### A few things I’ve learned:

*   Objects are good. This way, when you have to save data, you just need to save the object — not the 50 individual variables.
*   Always set timeouts and intervals as variables, so they can be cleared later on — unless they are permanent effects that and you’re sure you won’t ever need to clear them.
*   One big javascript file might not be a wise idea. CodePen only allows for one JavaScript file, but ideally, you should separate everything into modules.
*   If you’re not worried about performance, you can just copy and paste the object when it needs to be updated — no need for updating half of the values individually. If the object is huge, you can even define the object first as a variable like: **var object;** and then build it up using some other function when you want it to be updated. I did this with my spells. Every time player casts a spell, the updateSpell() function first defines the spells object again, calculates all the damage and stats, and then fires the spell.

### Funny things I’ve compromised on:

*   Skill mana costs are per boss level, because if they were at the player level, I’d punish players for leveling up. This also made higher level bosses much harder, which I liked.
*   Items are created with all stats, but they are not displayed if they are 0\. This way, I don’t need to check for undefined, and I can avoid displaying stats if they’re generated as 0\. Double win!
*   I have simplified buffs and debuffs a lot. Basically, there’s a var buffStat, nerfStat, totalStat and stat. So buffs or debuffs never stack.
*   With bosses, nerf stat skill doesn’t actually nerf it to 0\. This is a lot more sophisticated than that. It nerfs the stat by 9999999, then checks to see if it’s less than 0\. If yes, it sets it to 0\. So if you manage to reach a level where you have stats that are in the billions, I might have to add more zeros.

What all of this has thought me is that I should plan a bit further ahead, even if I’m just building a fun project to expand my own skills.

Also, I now have a much better understanding of how bugs arise: sometimes you don’t realize all the edge cases where things can break down the road. And that’s when the bugs bite.

### Bugs and Exploits



![](https://cdn-images-1.medium.com/max/1600/1*VsmyUTc8fhqfX9haZAtXDA.jpeg)



This one amazed me, and scared me a little. I couldn’t believe that my perfect piece of art contained bugs!

Ok, I’m exaggerating a bit. But I did underestimate the sheer number of things that could go wrong without me even realizing it.

Here’s a few bugs and exploits that cropped up, off the top of my head:

1.  You could change boss levels while battling a boss, and get better loot drops that way
2.  HP and Mana bars would sometime overflow
3.  You could attack the boss before the battle even started. Talk about a sucker punch!
4.  Mana could go negative, which prevented you from being able to perform even basic attacks, which is the main way you can restore your mana.
5.  Heals temporarily increased your maximum health.
6.  One spell wasn’t actually clickable most of the time due to a CSS problem
7.  Attacking while not in combat put your spells on infinite cooldown

These all sound horrifying right? In an MMORPG, these things would be abused from day one and ruin everything!

Well, the good news is that most of them were easily fixable — usually with less than 1 line of code.

Others bugs, though, required me to completely rework the entire system. With the spell system, I went from having to write 3 whole functions for each spell to needing only a small object which takes only a few seconds of editing.

Again, here’s my game if you want to try it out (note that it’s not optimized for mobile devices):





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/cc2298ae1d2ad963dcf78e4f94ecf1e1?postId=4aca51ad9030" data-media-id="cc2298ae1d2ad963dcf78e4f94ecf1e1" allowfullscreen="" frameborder="0"></iframe>





And here’s the code (which is also open source and editable on CodePen):

[**RobertSkalko/LOOT-RPG-v1.0**  
_LOOT-RPG-v1.0 - Kill bosses, get LOOT!_github.com](https://github.com/RobertSkalko/LOOT-RPG-v1.0 "https://github.com/RobertSkalko/LOOT-RPG-v1.0")[](https://github.com/RobertSkalko/LOOT-RPG-v1.0)

Keep in mind that I’m a beginner (just 2 months into programming) so some of my solutions can be improved. Hopefully though, I gave you at least the basics to get you started!

Have fun creating your Javascript game!








