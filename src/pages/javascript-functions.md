---
author: Adam Recvlohe
authorTwitter: https://twitter.com/adamrecvlohe
authorFacebook: none
title: "Let’s Make Emoji with JavaScript and HTML5 Canvas!"
subTitle: "I started working in the web development field about 6 months ago after spending most of my career in education. The transition has been ..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*fzz0bNoOcUnsihyppXAMEA.jpeg
url: https://medium.freecodecamp.org/javascript-functions-af6f9186a553
id: javascript-functions-af6f9186a553
date: 2016-03-25T01:58:19.954Z
tags: [
  "JavaScript",
  "Web Development",
  "The Iron Yard",
  "Design",
  "Programming"
]
---
# Let’s Make Emoji with JavaScript and HTML5 Canvas!







![](https://cdn-images-1.medium.com/max/2000/1*fzz0bNoOcUnsihyppXAMEA.jpeg)







#### Before the Emoji, some background…

I started working in the web development field about 6 months ago after spending most of my career in education. The transition has been great and I am very thankful for the opportunity to work on real-world web applications.

I very happy working in the industry but from my perspective, there is still plenty to learn. Therefore, from the day I started as a JavaScript Developer I have continued to spend time studying each evening to level up my skills.

Along with studying, I recently began teaching an ‘Intro to JavaScript Course’ to Tampa Bay teenagers (at The Iron Yard in St.Pete, Florida). This has been a great experience for many reasons. First, it has challenged me to learn more about the intricacies and nuances of the JavaScript language.

Second, I have gotten a chance to teach again, which is one of my passions. And third, I got to reexamine how I learned to program and how that differs drastically from beginners who aren’t even sure if they like coding and in some cases couldn’t care less about what I have to say.

You see, the curriculum that I originally thought would be great for this class was JavaScript in three ways: JS in the DOM, JS on the server, and functional JS programming.

After the first day, and a good talking to from my Teaching Assistants, I realized I was totally off base. These topics may interest me, but certainly don’t entertain a youth who just wants to play add-sponsored games in the browser. I totally reevaluated what I would teach, and in the process began to have fun!

Below is the first lesson I gave to the students where I start out discussing functions and end up creating a smiley face emoji. Enjoy!

If you want to follow along as we talk about functions, open up a browser and go to [repl.it](http://repl.it) and under popular languages choose NodeJS. A REPL (Read Evaluate Print Loop) should open up for you and you can follow along with the code.

### What are functions?

To understand how we will use HTML5 canvas we have to understand a little bit about functions.

“Functions are self-contained modules of code that accomplish a specific task. Functions usually “take in” data, process it, and “return” a result. Once a function is written, it can be used over and over again.”

Now let me give you a few examples of the type of functions we will be dealing with.

### Function Types

#### Regular Ole’ Function

We declare a basic function using the JavaScript keyword _function_.

<pre name="5fc5" id="5fc5" class="graf graf--pre graf-after--p">function sayHelloTo(name) {  
    return ‘Hello ‘ + name;  
}  

sayHelloTo(‘Adam’);</pre>

This function takes one parameter called _name_. It is a variable that is passed to the _sayHelloTo_ function. Therefore, when the program executes it will pass in what is provided. In my case it is _Adam_, so in the console you will see _Hello Adam_.

#### Constructor Pattern

We can also create a function using the constructor pattern.

<pre name="fd5c" id="fd5c" class="graf graf--pre graf-after--p">function Person(name) {  
    this.name = name;  
    this.sayHello = function() {  
        return “Hello, my name is “ + this.name;  
    }  
}  

var me = new Person(“Adam”);  
me.sayHello();</pre>

The Javascript keyword _this_ refers to the function. What that means is when we pass in a variable like _name_, just as we did before, we can assign it to the function and any instance of that function. To create an instance we use the JavaScript keyword _new_. When this new instance of the function is created it also has as its properties a _this.name_ value and a _this.sayHello_ method. When we created the instance of the method we passed in our name: _var me = new Person(‘Adam’)_. When you look at the _sayHello_ method, it uses that _name_, that is now part of that instance, to create a sentence. If you execute this code in the NodeJS REPL on repl.it you should see it output _Hello, my name is Adam_.

Now that we got the boring stuff out the way, let’s draw on some canvas. The way I taught this next section was using codepen.io. What I suggest is if you want to follow along, go to codepen.io, create an account, then create a new pen and you should be set. Be sure to activate you account if you want to save your work.

### Let’s Draw on Canvas

First, we need to create the canvas to be able to draw on it. In your HTML create a canvas tag.

<pre name="f529" id="f529" class="graf graf--pre graf-after--p"><canvas id=“canvas”></canvas></pre>

Now it’s JavaScript from here on!

We need to grab our canvas element from the DOM and declare it as a variable. This will allow us to set its context. We aren’t that skilled with ‘3d’ yet, so we will stick with a ‘2d’ context.

<pre name="ecdb" id="ecdb" class="graf graf--pre graf-after--p">var canvas = document.getElementById(“canvas”);  
var context = canvas.getContext(“2d”);</pre>

We can also give the canvas its _width_ and _height_ properties.

<pre name="0520" id="0520" class="graf graf--pre graf-after--p">var canvas = document.getElementById(“canvas”);  
canvas.width = 800;  
canvas.height = 800;  
var context = canvas.getContext(“2d”);</pre>

I want to point out here that the _canvas_ is acting exactly like an object. It has properties and methods just like we saw from our constructor function above. Slightly different in how we declared it but functionally it operates very similar. So you see that it has _height_ and _width_ properties as well as a _getContext_ method.

Now let’s put all of that into a function so that you can get somewhat familiar with functional programming.

<pre name="19cb" id="19cb" class="graf graf--pre graf-after--p">function draw() {  
  var canvas = document.getElementById(“canvas”);  
  canvas.width = 800;  
  canvas.height = 800;  
  var context = canvas.getContext(“2d”);  
}</pre>

Nothing will show up on the screen just yet, we will use the _fillRect_ method to help us with that.

<pre name="fa54" id="fa54" class="graf graf--pre graf-after--p">function draw() {  
  var canvas = document.getElementById("canvas");  
  canvas.width = 800;  
  canvas.height = 800;  
  var context = canvas.getContext("2d");  
  context.fillRect(10,10, 100, 200);  
}</pre>

If you haven’t guessed it, the _fillRect_ method takes four parameters: x coordinate, y coordinate, width, and height. On canvas, the x-axis starts at 0 on the left and to infinity going right. The y-axis starts at 0 from the top and to infinity going down. So when we start at (10, 10) we are placing the imaginary cursor on point (x = 10, y = 10) and going 100 to the right and 200 down from that point.

As you may have noticed, it still hasn’t been added to the page yet. Add a simple _window.onload_ function and have it equal our finished draw function.

<pre name="ffd3" id="ffd3" class="graf graf--pre graf-after--p">function draw() {  
  var canvas = document.getElementById("canvas");  
  canvas.width = 800;  
  canvas.height = 800;  
  var context = canvas.getContext("2d");  
  context.fillRect(10,10, 100, 200);  
}  

window.onload = draw;</pre>

You might be wondering why the draw function was executed even though we didn’t execute it with parens _( )._ That’s because _window.onload_ is a function. That’s the same as saying:

<pre name="7916" id="7916" class="graf graf--pre graf-after--p">window.onload = function() {  
// Do stuff here like what we put in draw();  
}</pre>

That means _window.onload_ executes a function when the window is loaded, so what ends up happening is _window.onload_ with its magical powers puts invisible parens around draw, thus executing it. A lot of magic is involved. But now you know the hocus pocus.

Let’s add some color for fun! Here we use the _fillStyle_ method for that. It needs to come before _fillRect_ or it won’t show.

<pre name="f711" id="f711" class="graf graf--pre graf-after--p">function draw() {  
  var canvas = document.getElementById("canvas");  
  canvas.width = 800;  
  canvas.height = 800;  
  var context = canvas.getContext("2d");  
  context.fillStyle = "blue";  
  context.fillRect(10,10, 100, 200);  
}  

window.onload = draw;</pre>

Here is a sample of that on codepen:





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/198d0bb2b6300dff25921294df7c133c?postId=af6f9186a553" data-media-id="198d0bb2b6300dff25921294df7c133c" allowfullscreen="" frameborder="0"></iframe>





### Let’s draw some other shapes!

That was pretty simple. Let’s draw some other shapes now. Just as we did before we will create a function and instantiate our canvas with a _width_, _height_, and _context_.

<pre name="3e72" id="3e72" class="graf graf--pre graf-after--p">function triangle() {  
  var canvas = document.getElementById(“canvas”);  
  var context = canvas.getContext(“2d”);  
  canvas.width = 400;  
  canvas.height = 400;  
}</pre>

So we don’t forget, change the _onload_ function to take the triangle function now.

<pre name="f43f" id="f43f" class="graf graf--pre graf-after--p">window.onload = triangle;</pre>

Now that we have our canvas, let’s start to draw lines on the canvas to create our triangle.

<pre name="97d3" id="97d3" class="graf graf--pre graf-after--p">function triangle() {  
  var canvas = document.getElementById(“canvas”);  
  var context = canvas.getContext(“2d”);  
  canvas.width = 400;  
  canvas.height = 400;  

  context.beginPath();  
  context.moveTo(75, 50);  
}</pre>

Here we are starting our path and moving the cursor to point (x = 75, y = 50).

Now let’s go to town drawing some lines.

<pre name="37f8" id="37f8" class="graf graf--pre graf-after--p">function triangle() {  
  var canvas = document.getElementById(“canvas”);  
  var context = canvas.getContext(“2d”);  
  canvas.width = 400;  
  canvas.height = 400;  

  context.beginPath();  
  context.moveTo(75, 50);  
  context.lineTo(100, 75);  
  context.lineTo(100, 25);  
  context.stroke();  
}</pre>

This created the first two lines that we needed. To finish it off we go back to where we started.

<pre name="8edf" id="8edf" class="graf graf--pre graf-after--p">function triangle() {  
  var canvas = document.getElementById(“canvas”);  
  var context = canvas.getContext(“2d”);  
  canvas.width = 400;  
  canvas.height = 400;  

  context.beginPath();  
  context.moveTo(75, 50);  
  context.lineTo(100, 75);  
  context.lineTo(100, 25);  
  context.lineTo(75, 50); // Back to where we started  
  context.stroke();  
}</pre>

To fill in the triangle we can use the fill method.

<pre name="380d" id="380d" class="graf graf--pre graf-after--p">function triangle() {  
  var canvas = document.getElementById(“canvas”);  
  var context = canvas.getContext(“2d”);  
  canvas.width = 400;  
  canvas.height = 400;  

  context.beginPath();  
  context.moveTo(75, 50);  
  context.lineTo(100, 75);  
  context.lineTo(100, 25);  
  context.lineTo(75, 50);  
  context.stroke();  
  context.fill();  
}</pre>

Here is what that looks like in the wild:





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/5e8e021bed6b8b167791b92ce7395fc5?postId=af6f9186a553" data-media-id="5e8e021bed6b8b167791b92ce7395fc5" allowfullscreen="" frameborder="0"></iframe>





We can do the same thing now and easily create a giant pyramid.

<pre name="70e5" id="70e5" class="graf graf--pre graf-after--p">function pyramid() {  
  var canvas = document.getElementById(“canvas”);  
  var context = canvas.getContext(“2d”);  
  canvas.width = 400;  
  canvas.height = 400;  
}</pre>

Remember to change the _onload_ function to pyramid.

<pre name="4794" id="4794" class="graf graf--pre graf-after--p">window.onload = pyramid;</pre>

Let’s now move the cursor to where we want it to be.

<pre name="dd77" id="dd77" class="graf graf--pre graf-after--p">function pyramid() {  
  var canvas = document.getElementById(“canvas”);  
  var context = canvas.getContext(“2d”);  
  canvas.width = 400;  
  canvas.height = 400;  

  context.beginPath();  
  context.moveTo(200, 0);  
}</pre>

I want my pyramid to take up as much space as possible, so I am starting out at the very top of my canvas and exactly in the middle of the x-axis.

Now we can begin drawing our shape and filling it in.

<pre name="fbd7" id="fbd7" class="graf graf--pre graf-after--p">context.lineTo(0, 400);  
context.lineTo(400, 400);  
context.lineTo(200, 0);  
context.stroke();  
context.fillStyle = “orange”;  
context.fill();</pre>

Done! You should now have a nice orange pyramid on your screen because of course you are part the Illuminati. Don’t lie!

Here is the finished product that you can play with:





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/a0e7081b7a0b58b91fc2215d12adc5b0?postId=af6f9186a553" data-media-id="a0e7081b7a0b58b91fc2215d12adc5b0" allowfullscreen="" frameborder="0"></iframe>





### Emojis!

Now for what you came for: Emojis!

Just as we did before we set up our canvas.

<pre name="2a1c" id="2a1c" class="graf graf--pre graf-after--p">function smileyFaceEmoji() {  
    var canvas = document.getElementById(“canvas”);  
    var context = canvas.getContext(“2d”);  
    canvas.width = 500;  
    canvas.height = 500;  
}</pre>

Remember to change _onload_ to this function.

<pre name="ad51" id="ad51" class="graf graf--pre graf-after--p">window.onload = smileyFaceEmoji;</pre>

Now let’s draw our face.

<pre name="1d25" id="1d25" class="graf graf--pre graf-after--p">context.beginPath();  
context.arc(250, 250, 100,0,Math.PI*2, true);  
context.stroke();</pre>

I kind of switched things up here using the _arc_ function. The _arc_ function takes quite a few arguments: x coordinate, y coordinate, radius, starting point in radians, ending point in radians, and whether it is drawn clockwise (we said true). As opposed to how a rectangle is made starting at one point and moving to the next, the point (x = 250, y = 250) is actually the middle of the circle and then extending out 100 pixels.

Cool huh?! Next comes the eyes.

<pre name="545f" id="545f" class="graf graf--pre graf-after--p">context.moveTo(235, 225);  
context.arc(225, 225, 10, 0, Math.PI*2, true);  
context.moveTo(285, 225);  
context.arc(275, 225, 10, 0, Math.PI*2, true);  
context.stroke();</pre>

Then the mouth.

<pre name="ae58" id="ae58" class="graf graf--pre graf-after--p">context.moveTo(250, 275);  
context.arc(250, 275, 50, 0, Math.PI, false);   
// Why is this last value false? Why did you just use Math.PI?  
context.moveTo(250, 275);  
context.lineTo(200, 275);  
context.stroke();</pre>

Here is what the finished product looks like:





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/7a203daa8f3c02e34b7bab7733aa4e09?postId=af6f9186a553" data-media-id="7a203daa8f3c02e34b7bab7733aa4e09" allowfullscreen="" frameborder="0"></iframe>





You did it, you just made a smiley face emoji! Gosh darn it I am proud of you! If you want to take your canvas skills to the next level try out one of the exercises below.

### Exercises

1.  Draw a poop emoji.
2.  Draw your initials in cursive.

### In summary

In this lesson you learned about functions: how to create functions, execute functions, and use functions to build small programs that draw lines on a canvas. We learned that functions take many forms and can be given properties and methods. I hope you enjoyed this lesson as it was my intention to show you the power of functions without bogging you down with jargon, instead using visual stimuli to bring them to life!

If you want to see all the code for this lesson go to my codepen [here](http://codepen.io/arecvlohe/pen/QNGjBr/).








