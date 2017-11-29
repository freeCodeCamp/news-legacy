---
author: Kevin Kononenko
authorTwitter: https://twitter.com/devmanual
authorFacebook: https://facebook.com/10203738544564981
title: "AJAX Explained by Upgrading Your Video Game Character"
subTitle: "If you’ve played video games, then you can understand the basics of POST and GET."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*Qxz_AwMSypWEHpIIwcCmzQ.jpeg
url: https://medium.freecodecamp.org/ajax-explained-by-upgrading-your-video-game-character-17d26305163c
id: ajax-explained-by-upgrading-your-video-game-character-17d26305163c
date: 2016-12-20T17:58:53.573Z
tags: [
  "JavaScript",
  "Web Development",
  "Life Lessons",
  "Programming",
  "Tech"
]
---
# AJAX Explained by Upgrading Your Video Game Character

## If you’ve played video games, then you can understand the basics of POST and GET.

AJAX (short for Asynchronous JavaScript and XML) can be pretty tough for new web developers to grasp. Without a sense of how the browser interacts with the server, AJAX can seem as though it’s powered by magic.

But don’t lose hope. Think of AJAX as similar to how you upgrade your character in role-playing games like Pokemon or Final Fantasy.

You can use AJAX to build modern web apps with a **minimum number of page reloads**. If you want to build a site that easily flows between different screens and features, then you’ll need AJAX to load content dynamically based on user requests.

This post will focus on the ways that you can interact with a server using the two most common AJAX methods: POST and GET.

I’m going to assume that you already know the [basics of callbacks](https://medium.freecodecamp.com/javascript-callbacks-explained-using-minions-da272f4d9bcd). Also, I’ll assume that you have already outlined a place in your web app where you need to load data dynamically.

### POST requests are like adding items to your inventory

You can use POST to add data to your database. In your video game, this is kind of like the process when you open every treasure chest in sight until you find the item you need.



![](https://cdn-images-1.medium.com/max/1600/1*ae5a20w-_EBjOjMVr3nwIA.png)



Let’s say you need a new weapon to take on bigger challenges in your game. You search every item stash until you finally find it — a new sword! This weapon is lighter, faster, and stronger than the club that you started the game with.



![](https://cdn-images-1.medium.com/max/1600/1*OwUtGFxXM2s3pZUuamn-Og.png)



So now you want to pick this up awesome sword and dump the your old, stinky club. From a code perspective, there are a couple things you need to store:

1.  The type of equipment you are adding (sword)
2.  The weight (let’s say 20)
3.  The damage per strike (let’s say 10)
4.  It’s type of metal (let’s say steel)
5.  Defense/blocking ability (let’s say 5)

In order to send this data to the server and save it, you’ll need to POST it.

Note that we’ll use jQuery — one of the most popular JavaScript libraries — to simplify the process of making these these requests.

Your POST request will have 4 parts:



![](https://cdn-images-1.medium.com/max/1600/1*BCjBuV9KqEe8UAt6suztmQ.png)



1.  whether you’re doing `$.post` or `$.get`
2.  The **route. A route is a repeatable pattern that your back-end will recognize.** In this case, adding pretty much any equipment, like a sword or shield or breastplate, will follow a similar pattern because they can all be equipped on your character. You would use a different route if you were gathering resources, like metal ore, wood or coin. Although these need to be stored, they would not be “equipped” to your character- just stored in your inventory. Those routes might be “/gatherResource” or “/collectCoins”.
3.  The data that is actually going to be stored. Here, you’re storing the attributes of the equipment: type of equipment, damage, weight etc., like we outlined above. We can use an object for this.
4.  The callback. This lets you specify what should happen directly after the POST is completed. You may want to equip the sword and drop the club.

Here’s the finished code you would use to store the sword:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a69aa042e865df7c8c2d2d1923a02352?postId=17d26305163c" data-media-id="a69aa042e865df7c8c2d2d1923a02352" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F8312841%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





The toughest part is figuring out what should go in the route, and what goes in the parameters/data. In this case, you’re writing a more generalized `storeEquipment` route, because you can follow a similar procedure for adding any type of equipment. The parameters allow you to offer specifics.

Relational databases are a little outside the scope of this tutorial, but if you wanted to set up a database to store this, you might create an “equipment” table that stores all of the equipment for each user. It would look something like this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/813092ed53bdfac4961df557288d67b5?postId=17d26305163c" data-media-id="813092ed53bdfac4961df557288d67b5" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F8312841%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





When you’re building a web app, you could use a POST request to:

1.  Create a new user
2.  Store an entry created by a user
3.  Store a comment created by a user

### GET Request are like spawning enemies

GET requests allow you to retrieve data that’s already stored in your database. You aren’t modifying or adding anything — you’re merely presenting data that already exists. This is kind of like when you are running around in Pokemon, and this happens:



![](https://cdn-images-1.medium.com/max/1600/1*ZtMtaBNANbl6S_K8ajCpSg.jpeg)



Let’s say you stomp this poor Diglett. That would not change the fact that there is a Pokemon called Diglett that exists on your server. You’ll still be able to face Digletts in the future.

Let’s say you’re running around in a dungeon, and you face the most terrifying enemy of all time: the skeleton (not really).



![](https://cdn-images-1.medium.com/max/1600/1*_0pq6O6wWL0wqr4e92s-Ww.png)



We need to write the code so that this random skeleton will have certain traits. Here are what some of its attributes might look like:

1.  Type: skeleton
2.  Attack: 10
3.  Mobility: 5
4.  Defense: 2
5.  Equipment: helmet, mace

You might structure your GET like this:



![](https://cdn-images-1.medium.com/max/1600/1*2r7GCghEGEMWXZzMMi3s0g.png)



1.  `$.get` or `$.post`
2.  The route. A GET route means you will be retrieving data off the server in a specific package. Similar to POST, you want to this route to be generalized so it captures any type of interaction with an enemy.
3.  The parameters. The details on this specific enemy.
4.  The callback. What happens when you engage this enemy in a fight?





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/435a28b68f0296dbd105499af1052cdf?postId=17d26305163c" data-media-id="435a28b68f0296dbd105499af1052cdf" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F8312841%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





When you originally built the game, you determined what a skeleton would look like, how it would move. Now, you need to dynamically create a skeleton that will face your character. The GET request will allow you to summon a skeleton with specific traits that are dictated by your parameters.

If your character defeats this skeleton, it won’t delete anything from your server. It just means that your character was superior to this particular combination of data that the skeleton represented.

Now let’s say that you’re building an e-commerce site where you’re selling cardboard boxes. The user may want to sort their choices based on:

1.  Thickness of the box
2.  Size of the box
3.  Quantity available

You would want to allow the user to sort the choices dynamically. So you would use a GET request to retrieve all boxes with the specific traits without making the user reload the page every time that a box is checked or unchecked.





<iframe data-width="800" data-height="400" width="700" height="350" src="https://medium.freecodecamp.org/media/49d3eea55442a7cdcaff56ecc0af5a9e?postId=17d26305163c" data-media-id="49d3eea55442a7cdcaff56ecc0af5a9e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fupscri.be%2Fmedia%2Fform.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





### In summary…



![](https://cdn-images-1.medium.com/max/1600/1*m7N44wJHN0FhFuyzwA3BCg.png)



*   Your database is filled with components that can be summoned and presented to the user. Some were initialized with the app, and some are added by the user.
*   A POST request allows you to add components to the database.
*   A GET request allows you to dynamically summon both built-in and previously-added components. They can be combined in different ways based on the parameters of the GET request.

If you enjoyed this post, you may also enjoy my [other explanations](https://www.rtfmanual.io/guides/) of challenging CSS and JavaScript topics, such as positioning, Model-View-Controller, and callbacks.

And if you think this might help other people in the same position as you, give it a “heart”!








