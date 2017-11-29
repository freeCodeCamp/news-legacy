---
author: Kurt
authorTwitter: none
authorFacebook: none
title: "Making it rain code — Matrix Style"
subTitle: "Out of all the great things HTML 5 brought us, I love the canvas element the most. I hope that once you see how powerful it is, you’ll wa..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*KgmujbLEB5TS1PQcPycPGg.png
url: https://medium.freecodecamp.org/canmaking-it-rain-code-matrix-style-ec6e1386084e
id: canmaking-it-rain-code-matrix-style-ec6e1386084e
date: 2016-04-15T00:15:54.434Z
tags: [
  "Web Development",
  "Programming",
  "JavaScript",
  "Design",
  "Learning"
]
---
# Making it rain code — Matrix Style







![](https://cdn-images-1.medium.com/max/2000/1*KgmujbLEB5TS1PQcPycPGg.png)







#### An introduction to HTML 5 canvas animations

Out of all the great things HTML 5 brought us, I love the canvas element the most. I hope that once you see how powerful it is, you’ll want to put in the time to master canvas animations yourself.

#### What is a canvas?

A canvas is exactly what its name implies. It is a blank canvas that you can paint as you wish and then render in your browser as an image. The real beauty is that it not only allows you to create images, but also to continuously redraw & render them — hence creating an animation.

The power of canvas is limited only by your imagination. I’ve used the canvas element to create everything from static images on-the-fly to games, graphical user interfaces. and even a MailChimp-style email builder. You can even render the canvas in 3D!

For me, the canvas element changed everything. I was no longer limited to using the default HTML tags. I could create everything I wanted in the browser. And you’d better believe this pushed my JavaScript skills to a whole new levels.

#### Getting Started

Instead of demonstrating how to simply draw on a canvas, I want to give you a glimpse of what you can create with it. If you haven’t seen The Matrix yet, stop reading now and go watch it. If you have seen it, you’ll recognize the famous “falling code” from the title. Let’s create this with canvas!





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/44c2c276accc77fe8867c3293438625d?postId=ec6e1386084e" data-media-id="44c2c276accc77fe8867c3293438625d" allowfullscreen="" frameborder="0"></iframe>



The final animated canvas



Instead of doing a step by step tutorial, to save time I will post the code below and walk you through it explaining what each piece is doing as we move along.

The HTML:

<pre name="159a" id="159a" class="graf graf--pre graf-after--p"><canvas id=”canvas” width=”600px” height=”400px”></canvas>  
<img id=”logo” width=”400px;” src=”[https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg](https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg)"/></pre>

The CSS:

<pre name="b27a" id="b27a" class="graf graf--pre graf-after--p">body{  
 background-color:#d2d2d2;  
}  
#canvas{  
 background-color:#000;  
 display:block;  
 margin:auto;  
}  
#logo{  
 display:none;  
}</pre>

The JavaScript:

<pre name="6096" id="6096" class="graf graf--pre graf-after--p">var canvas = document.getElementById(‘canvas’);  
var ctx = canvas.getContext(‘2d’);  
var t = text();  
var logo = document.getElementById(‘logo’);  
var lines = [];  
window.setInterval(draw, 100);</pre>

<pre name="15c7" id="15c7" class="graf graf--pre graf-after--pre">function draw() {  
 if (Math.floor(Math.random() * 2) === 0 && lines.length < 100) {  
  lines.push(new textLine());  
 }  
 ctx.clearRect(0, 0, canvas.width, canvas.height);  
 lines.forEach(function(tl) {</pre>

<pre name="b250" id="b250" class="graf graf--pre graf-after--pre">  ctx.drawImage(tl.text, tl.posX, tl.animate(), 20, 1000);  
 });  
 ctx.drawImage(logo, 100, 155, 400, 70);</pre>

<pre name="f731" id="f731" class="graf graf--pre graf-after--pre">}</pre>

<pre name="0356" id="0356" class="graf graf--pre graf-after--pre">function textLine() {  
 this.text = t;  
 this.posX = (function() {  
  return Math.floor(Math.random() * canvas.width);  
 })();  
 this.offsetY = -1000;  
 this.animate = function() {  
  if (this.offsetY >= 0) {  
   this.offsetY = -1000;  
  }  
  this.offsetY += 10;  
  return this.offsetY;  
 };  
}</pre>

<pre name="9aca" id="9aca" class="graf graf--pre graf-after--pre">function text() {  
 var offscreenCanvas = document.createElement(‘canvas’);  
 offscreenCanvas.width = “30”;  
 offscreenCanvas.height = “1000”;  
 offscreenCanvas.style.display = “none”;  
 document.body.appendChild(offscreenCanvas);  
 var octx = offscreenCanvas.getContext(‘2d’);  
 octx.textAlign = “center”;  
 octx.shadowColor = “lightgreen”;  
 octx.shadowOffsetX = 2;  
 octx.shadowOffsetY = -5;  
 octx.shadowBlur = 1;  
 octx.fillStyle = ‘darkgreen’;  
 octx.textAlign = “left”;  
 var step = 10;  
 for (i = 0; i < 100; i++) {  
  var charCode = 0;  
  while (charCode < 60) {  
   charCode = Math.floor(Math.random() * 100);  
  }  
  octx.fillText(String.fromCharCode(charCode), 0, step);  
  step += 10;  
 }  
 return offscreenCanvas;  
}</pre>

#### How does it work?

On line #1 we grab the canvas element by its id. Every canvas element has its own _context — _an interface to manipulate its contents. This is what the _ctx_ variable on line 2 refers to.

To create the animated background, we will need a vertical line of random text, which we will then redraw multiple times over the X-axis and animate incrementally on the Y-axis to give us the end effect.

Since text is always rendered horizontally, we will render the text on _another_ invisible canvas and draw it as an image on our original canvas.

On line #3 we set the variable _t_ to the result of the _text()_ function which generates and returns our invisible canvas element.

In this function we create a new canvas, set its width and height and set its display property to none to hide it and then append it to the document body. Then we set the color, shadow and offset for the text that we will draw.

To generate vertical random characters we loop and draw a new random character 100 times and increment it by 10px on the Y-axis on each interval. To generate a random character I use _Math.random()_ to get a number between 60 and 100 and then convert it into a character using _String.fromCharCode()._

This draws our vertical text with a shadow and returns the canvas to the t variable.

#### The animation loop

Over the next 3 line of code, I retrieve the FreeCodeCamp logo, declare an array that will hold the separate lines that make up the background, and use _window.setInterval_ to run the _draw()_ function every 100 milliseconds.

When animating a canvas, it’s good practice to rather use _window.requestAnimationFrame(),_ but I felt this is too confusing for beginners, since its a bit tricky setting the frame rate.

The first thing the _draw()_ function does is generate a random number between 1 and 0\. If the number is 0 and there are less than 100 individual lines of text being animated on the background it pushes a new _textLine()_ into the lines array.

The _textLine()_ function returns an object which contains

1.  The resulting vertical text held in the _t_ variable.
2.  The offset amount that it will be rendered on the X-axis (generated randomly on each instance of the object).
3.  An initial offset of -1000px on the Y-axis which places it just above the canvas.
4.  An animate method which adds 10px to the Y-axis each time it is called and returns the result making the text move downwards. If the Y-axis offset reaches 0 it is reset to -1000px providing a continual animation.

The canvas is cleared, and then the _draw()_ function loops through each line of text in the _lines_ array and draws it on the canvas calling its _animate_ method each time a line is drawn to move it downwards.

Since each line has a random offset on the X-axis and a newline is added at random intervals the lines of text fall at different rates across the canvas creating the raining code effect!

Lastly the FreeCodeCamp logo is drawn over the background, giving us our final animation.

#### Where to now?

If canvas is something that interests you, you can learn more about it in the [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API#Guides_and_tutorials).

I plan like create a series of more basic step by step tutorials walking through canvas animations as I find the time.

If you didn’t find the above code too difficult and would like to mess with it, here are a few cool ideas:

1.  Make the dimensions dynamic so that the canvas scales and continues animating as you resize your browser.
2.  Instead of randomly generating characters, grab a file of your own code from GitHub and animate that instead.
3.  Render your name in place of the FreeCodeCamp logo, and make it look like the Matrix poster.
4.  Instead of generating each line at random, bind a click event to the canvas and render a new line at the X coordinates of your mouse click.

I hope you enjoyed this intro, if you did feel free to check out some of the other articles that I’ve written.

[**Turning code to cash — How to make money as a Web Developer and live to tell the tale.**  
_So you just learnt to code. You’re eager and anyone who can’t code thinks you’re a genius, word gets out and all of a…_medium.com](https://medium.com/p/f5eedc557b3e "https://medium.com/p/f5eedc557b3e")[](https://medium.com/p/f5eedc557b3e)

[**How to write a jQuery like library in 71 lines of code — Learn about the DOM**  
_JavaScript frameworks are all the rage. Chances are that any JavaScript related news feed you open will be littered…_medium.com](https://medium.com/p/e9fb99dbc8d2 "https://medium.com/p/e9fb99dbc8d2")[](https://medium.com/p/e9fb99dbc8d2)

[**5 Things to Remember When You’re Learning to Program**  
_Learning to program is challenging. Aside from choosing a language or setting up a development environment that you…_medium.com](https://medium.com/p/1ed8e734b04f "https://medium.com/p/1ed8e734b04f")[](https://medium.com/p/1ed8e734b04f)

[**How I Became a Programmer. And When I Started Calling Myself One**  
_I’ve wanted to start blogging about programming for months now and like so many others before me I set off full of…_medium.com](https://medium.com/p/54a0533c4335 "https://medium.com/p/54a0533c4335")[](https://medium.com/p/54a0533c4335)

[**Preventative Programming — how fix to bugs before they happen**  
_…and why Sherlock Holmes would have been a brilliant programmer_medium.com](https://medium.com/p/9df82cf215c5 "https://medium.com/p/9df82cf215c5")[](https://medium.com/p/9df82cf215c5)








