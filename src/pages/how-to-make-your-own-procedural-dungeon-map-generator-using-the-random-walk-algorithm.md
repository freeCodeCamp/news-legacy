---
author: ahmad abdolsaheb
authorTwitter: none
authorFacebook: none
title: "How to code your own procedural dungeon map generator using the Random Walk Algorithm"
subTitle: "As technology evolves and game contents become more algorithmically generated, it’s not difficult to imagine the creation of a life-like ..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*biolx7MiK6OOZYRWeiq1Wg.gif
url: https://medium.freecodecamp.org/how-to-make-your-own-procedural-dungeon-map-generator-using-the-random-walk-algorithm-e0085c8aa9a
id: how-to-make-your-own-procedural-dungeon-map-generator-using-the-random-walk-algorithm-e0085c8aa9a
date: 2017-10-09T21:18:14.603Z
tags: [
  "JavaScript",
  "Games",
  "React",
  "Algorithms",
  "AI"
]
---
# How to code your own procedural dungeon map generator using the Random Walk Algorithm







![](https://cdn-images-1.medium.com/max/2000/1*biolx7MiK6OOZYRWeiq1Wg.gif)







As technology evolves and game contents become more algorithmically generated, it’s not difficult to imagine the creation of a life-like simulation with unique experiences for each player.

Technological breakthroughs, patience, and refined skills will get us there, but the first step is to understand **procedural content generation**.

Though many out-of-the-box solutions for map generation exist, this tutorial will teach you to make your own two-dimensional dungeon map generator from scratch using JavaScript.

There are many two-dimensional map types, and all have the following characteristics:

1\. Accessible and inaccessible areas (tunnels and walls).

2\. A connected route the player can navigate.

The algorithm in this tutorial comes from the [Random Walk Algorithm](https://en.wikipedia.org/wiki/Random_walker_algorithm), one of the simplest solutions for map generation.

After making a grid-like map of walls, this algorithm starts from a random place on the map. It keeps making tunnels and taking random turns to complete its desired number of tunnels.

To see a demo, open the CodePen project below, click on the map to create a new map, and change the following values:

1.  **Dimensions:** the width and height of the map.
2.  **MaxTunnels:** the greatest number of turns the algorithm can take while making the map.
3.  **MaxLength:** the greatest length of each tunnel the algorithm will choose before making a horizontal or vertical turn.









<iframe data-width="800" data-height="600" width="980" height="735" src="https://medium.freecodecamp.org/media/276cdd9bdd7bee1558e924360a0f6eee?postId=e0085c8aa9a" data-media-id="276cdd9bdd7bee1558e924360a0f6eee" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fi.cdpn.io%2F611316.zEKdop.small.57d3626f-6b08-4d57-9bc4-77af9f5ae887.png&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



Demonstration of the algorithm.







**Note:** the larger the _maxTurn_ is compared to the dimensions, the denser the map will be. The larger the _maxLength_ is compared to the dimensions, the more “tunnel-y” it will look.

Next, let’s go through the map generation algorithm to see how it:

1.  Makes a two dimensional map of walls
2.  Chooses a random starting point on the map
3.  While the number of tunnels is not zero
4.  Chooses a random length from maximum allowed length
5.  Chooses a random direction to turn to (right, left, up, down)
6.  Draws a tunnel in that direction while avoiding the edges of the map
7.  Decrements the number of tunnels and repeats the [while loop](https://en.wikipedia.org/wiki/While_loop)
8.  Returns the map with the changes

This loop continues until the number of tunnels is zero.

### The Algorithm in Code

Since the map consists of tunnel and wall cells, we could describe it as zeros and ones in a two-dimensional array like the following:

<pre name="7d2d" id="7d2d" class="graf graf--pre graf-after--p">map = [[**1,1,1,1**,0],  
       [**1**,0,0,0,0],  
       [**1**,0,**1,1,1**],  
       [**1**,0,0,0,**1**],  
       [**1,1,1,**0,**1**]]</pre>

Since every cell is in a two-dimensional array, we can access its value by knowing its row and column such as map [row][column].

Before writing the algorithm, you need a helper function that takes a character and dimension as arguments and returns a two-dimensional array.

<pre name="fef9" id="fef9" class="graf graf--pre graf-after--p">createArray(num, dimensions) {  
    var array = [];      
    for (var i = 0; i < dimensions; i++) {   
      array.push([]);        
      for (var j = 0; j < dimensions; j++) {    
         array[i].push(num);        
      }      
    }      
    return array;    
}</pre>

To implement the Random Walk Algorithm, set the dimensions of the map (width and height), the`maxTunnels` variable, and the`maxLength` variable.

<pre name="50cb" id="50cb" class="graf graf--pre graf-after--p">createMap(){  
 let dimensions = 5,       
 maxTunnels = 3,   
 maxLength = 3;</pre>

Next, make a two-dimensional array using the predefined helper function (two dimensional array of ones).

<pre name="174a" id="174a" class="graf graf--pre graf-after--p">let map = createArray(1, dimensions);</pre>

Set up a random column and random row to create a random starting point for the first tunnel.

<pre name="423d" id="423d" class="graf graf--pre graf-after--p">let currentRow = Math.floor(Math.random() * dimensions),         
    currentColumn = Math.floor(Math.random() * dimensions);</pre>

To avoid the complexity of diagonal turns, the algorithm needs to specify the horizontal and vertical directions. Every cell sits in a two-dimensional array and could be identified with its row and column. Because of this, the directions could be defined as subtractions from and/or additions to the column and row numbers.

For example, to go to a cell around the cell [2][2], you could perform the following operations:

*   to go **up**, subtract 1 from its row [1][2]
*   to go **down**, add 1 to its row [3][2]
*   to go **right**, add 1 to its column [2][3]
*   to go **left**, subtract 1 from its column [2][1]

The following map illustrates these operations:



![](https://cdn-images-1.medium.com/max/1600/1*P1AfxAKl6SAQMgn8SONUGQ.png)

Showing the directions on the map.



Now, set the `directions` variable to the following values that the algorithm will choose from before creating each tunnel:

<pre name="3ebd" id="3ebd" class="graf graf--pre graf-after--p">let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];</pre>

Finally, initiate `randomDirection`variable to hold a random value from the directions array, and set the `lastDirection` variable to an empty array which will hold the older `randomDirection`value.

**Note:** the `lastDirection` array is empty on the first loop because there is no older `randomDirection` value.

<pre name="a50b" id="a50b" class="graf graf--pre graf-after--p">let lastDirection = [],   
    randomDirection;</pre>

Next, make sure `maxTunnel` is not zero and the dimensions and `maxLength`values have been received. Continue finding random directions until you find one that isn’t reverse or identical to `lastDirection`. This [do while loop](https://en.wikipedia.org/wiki/Do_while_loop) helps to prevent overwriting the recently-drawn tunnel or drawing two tunnels back-to-back.

For example, if your `lastTurn` is [0, 1], the do while loop prevents the function from moving forward until `randomDirection` is set to a value that is not [0, 1] or the opposite [0, -1].

<pre name="4cd3" id="4cd3" class="graf graf--pre graf-after--p">do {           
randomDirection = directions[Math.floor(Math.random() * directions.length)];        
} while ((randomDirection[0] === -lastDirection[0] &&      
          randomDirection[1] === -lastDirection[1]) ||   
         (randomDirection[0] === lastDirection[0] &&    
          randomDirection[1] === lastDirection[1]));</pre>

In the do while loop, there are two main conditions that are divided by an || (OR) sign. The first part of the condition also consists of two conditions. The first one checks if the `randomDirection`’s first item is the reverse of the `lastDirection`_’s_ first item. The second one checks if the `randomDirection`’s second item is the reverse of the `lastTurn`’s second item.

To illustrate, if the `lastDirection` is [0,1] and `randomDirection` is [0,-1], the first part of the condition checks if `randomDirection`[0] === — `lastDirection`[0]), which equates to 0 === — 0, and is true.

Then, it checks if (`randomDirection`[1] === — `lastDirection`[1]) which equates to (-1 === -1) and is also true. Since both conditions are true, the algorithm goes back to find another `randomDirection`.

The second part of the condition checks if the first and second values of both arrays are the same.

After choosing a `randomDirection` that satisfies the conditions, set a variable to randomly choose a length from `maxLength`. Set `tunnelLength` variable to zero to server as an iterator.

<pre name="10a3" id="10a3" class="graf graf--pre graf-after--p">let randomLength = Math.ceil(Math.random() * maxLength),         
    tunnelLength = 0;</pre>

Make a tunnel by turning the value of cells from one to zero while the `tunnelLength` is smaller than `randomLength`_._ If within the loop the tunnel hits the edges of the map, the loop should break.

<pre name="a90e" id="a90e" class="graf graf--pre graf-after--p">while (tunnelLength < randomLength) {   
 if(((currentRow === 0) && (randomDirection[0] === -1))||    
    ((currentColumn === 0) && (randomDirection[1] === -1))||   
    ((currentRow === dimensions — 1) && (randomDirection[0] ===1))||  
 ((currentColumn === dimensions — 1) && (randomDirection[1] === 1)))     
 { break; }</pre>

Else set the current cell of the map to zero using `currentRow` and `currentColumn.` Add the values in the `randomDirection` array by setting `currentRow` and `currentColumn` where they need to be in the upcoming iteration of the loop. Now, increment the `tunnelLength` iterator.

<pre name="1180" id="1180" class="graf graf--pre graf-after--p">else{   
  map[currentRow][currentColumn] = 0;   
  currentRow += randomDirection[0];  
  currentColumn += randomDirection[1];   
  tunnelLength++;   
 }   
}</pre>

After the loop makes a tunnel or breaks by hitting an edge of the map, check if the tunnel is at least one block long. If so, set the `lastDirection` to the `randomDirection` and decrement `maxTunnels` and go back to make another tunnel with another `randomDirection`_._

<pre name="0519" id="0519" class="graf graf--pre graf-after--p">if (tunnelLength) {   
 lastDirection = randomDirection;   
 maxTunnels--;   
}</pre>

This IF statement prevents the for loop that hit the edge of the map and did not make a tunnel of at least one cell to decrement the `maxTunnel` and change the `lastDirection`. When that happens, the algorithm goes to find another `randomDirection` to continue.

When it finishes drawing tunnels and `maxTunnels` is zero, return the resulting map with all its turns and tunnels.

<pre name="c648" id="c648" class="graf graf--pre graf-after--p">}  
 return map;  
};</pre>

You can see the complete algorithm in the following snippet:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ace2c07722213b227e771af770470d02?postId=e0085c8aa9a" data-media-id="ace2c07722213b227e771af770470d02" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F4591597%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



The random walk algorithm in one piece.



Congratulations for reading through this tutorial. You are now well-equipped to make your own map generator or improve upon this version. Check out the project on [CodePen](https://codepen.io/anon/pen/aLpORx) and on [GitHub](https://github.com/ahmadabdolsaheb/mapgen) as a react application.

Don’t forget to share your projects in the comments section. If you liked this project, please give it some claps and following me for similar tutorials.

Special thanks to Tom (@moT01 on [Gitter](http://gitter.im/freecodecamp/home)) for co-writing this article.








