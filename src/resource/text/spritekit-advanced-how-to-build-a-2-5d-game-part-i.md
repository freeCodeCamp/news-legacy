---
author: Luke Konior
authorTwitter: https://twitter.com/LukKonior
authorFacebook: https://facebook.com/897914406888946
title: "SpriteKit Advanced — How to build a 2,5D game (Part I)"
subTitle: "This article is about graphical evolution of Raft Challenge from the prototype to the final product. It’s AIM-ed for the people who are t..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*UfZWvFeWyuKgOIlkuU1log.png
url: https://medium.freecodecamp.org/spritekit-advanced-how-to-build-a-2-5d-game-part-i-2dc76c7c65e2
id: spritekit-advanced-how-to-build-a-2-5d-game-part-i-2dc76c7c65e2
date: 2017-10-01T20:04:38.202Z
tags: [
  "iOS",
  "Spritekit",
  "Game Development",
  "Tech",
  "Mobile App Development"
]
---
# SpriteKit Advanced — How to build a 2,5D game (Part I)







![](https://cdn-images-1.medium.com/max/2000/1*UfZWvFeWyuKgOIlkuU1log.png)







### Intro

This article is about graphical evolution of [Raft Challenge](https://itunes.apple.com/app/apple-store/id1073887270?pt=117756562&ct=Develop%20Articles&mt=8) from the prototype to the final product. It’s [AIM](https://www.allinmobile.co)-ed for the people who are thinking about making their own game with graphics like Raft, but don’t know exactly how to start.

### The very beginning of Raft Challenge

Raft Challenge was born during the first hackathon organized by [All In Mobile](https://www.allinmobile.co). The idea was to make a game where a player avoids obstacles. We wanted to keep things as simple as possible.

After the weekend, we had a prototype that looked like this:



![](https://cdn-images-1.medium.com/max/1600/0*29ZcVeUwWak334-s.)



Raft Challenge won the hackathon. The company announced that it’ll make the resources to improve the game.

### Let’s make it 2,5D!

At the start of the project, Raft had the simplest possible graphics. A view was directly over a flat ground texture, with colored circles that indicated the player and the enemies. It was beautiful and as simple as the code underneath. Then our [graphic designer](https://dribbble.com/allinmobile) came and messed up everything. He said, “Let’s make it 2,5D!”. The challenge was accepted and the animation above was the result.

After the hackathon he showed up once again. This time it was something more than one sentence.

It was an evil smile and this video:



![](https://cdn-images-1.medium.com/max/1600/0*3TKCZXfkWaib8OYk.)



### Perspective explained

Ok, let’s drop the act :-). I’ve wanted to give him the feeling that he’s in charge. But I’m the boss here! The perspective is easy to implement in code, regardless of what 2D engine we use.

First, we have to determine where we want to put the [vanishing point](https://en.wikipedia.org/wiki/Perspective_%28graphical%29#One-point_perspective). The example below shows this point in the center of the canvas.



![](https://cdn-images-1.medium.com/max/1600/0*xnahdNb6kRoh-G7m.)



Raft Challenge has this point in the upper half of the screen, because the sky and everything overhead isn’t as important as obstacles on the river.

How are the sprites themselves made? While it may be obvious for someone with artistic background, it isn’t necessarily clear for a technical person.

There are two rules:



![](https://cdn-images-1.medium.com/max/1600/0*ipZT-l4zDgd9T6Iz.)



*   Moving parts must be drawn along the helper lines as shown above  
    All those lines intersect in the vanishing point

**Note:** The coast part isn’t reaching the vanishing point. It stops somewhere in the middle, leaving the transparent area behind.



![](https://cdn-images-1.medium.com/max/1600/0*pr5ogyA1xVz0lgvv.)



*   That empty area between the graphic and the vanishing point has an important purpose  
    It’ll hold elements that are further away.

Those parts are made by applying a twice smaller scale for each step. The resulting image should be seamless if the texture is well-made.

### Assembling the scene



![](https://cdn-images-1.medium.com/max/1600/0*4VyeL4eUI7iNyYqP.)



After we’ve prepared all our assets, we need to put them all into the scene.

Let’s see how it looks in Raft Challenge.



![](https://cdn-images-1.medium.com/max/1600/0*qAPitL_kSVE8ytz1.)



Starting from the bottom:

1.  Background layers  
    Background   
    Grass   
    Fog bottom   
    Sun   
    Mountains   
    Horizon Line

*   These layers are all static they don’t move
*   Background acts for both the sky and water
*   The background is a plain gradient   
    It’s stretched to fill the entire device’s screen   
    The aspect ratio is ignored
*   We may merge layers other than Background for increased performance unless we want to change some properties
*   We may move the sun during the gameplay  
     or replace mountains for something different

2\. Perspective layers   
Trees with reflections   
Coast   
Obstacles

*   For the clarity of the image above, layers with similar content were grouped  
    There were:   
    2 layers of Obstacles  
    8 layers of Coast  
    8 layers of Trees with reflections
*   These layers are scaled up by 2 when a player is moving forward
*   Order of these layers depends on  
    distance   
    closer ones are on top  
    priority   
    Obstacle > Coast > Trees

3\. Character

*   If an Obstacle is in the closest possible position, it may have z-position higher than the Character itself  
    In this case, the Obstacle covers the Character, which is desirable

4\. GUI

*   Good graphics should depend on illusions and tricks instead of hardware



![](https://cdn-images-1.medium.com/max/1600/0*zgXz-u5twZohGh22.)



### Summary

This article should give us an idea how to approach the problem of making assets to a 2,5D game and organizing them into a scene.

You can read [part 2 of this series here](https://medium.freecodecamp.org/spritekit-advanced-how-to-build-a-2-5d-game-part-ii-30ddb613b568).

About the author: Kamil Ziętek is an iOS Developer at [www.allinmobile.co](http://www.allinmobile.co)








