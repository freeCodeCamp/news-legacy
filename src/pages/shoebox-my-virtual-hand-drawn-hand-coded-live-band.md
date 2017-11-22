---
author: Michael Forrest
authorTwitter: https://twitter.com/mf_music
authorFacebook: false
title: "Shoebox — my virtual hand-drawn, hand-coded live band"
subTitle: "I wrote this song and then made this realtime animation engine for “virtual live performances” so my song could be played by some funny s..."
coverSrc: 
url: https://medium.freecodecamp.org/shoebox-my-virtual-hand-drawn-hand-coded-live-band-454368d0e66f
id: shoebox-my-virtual-hand-drawn-hand-coded-live-band-454368d0e66f
date: 2017-07-24T12:31:46.722Z
tags: [
  "Music",
  "Tech",
  "Technology",
  "Startup",
  "Design"
]
---
# Shoebox — my virtual hand-drawn, hand-coded live band





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FPQkw0fXgTNI%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="56"></canvas>

<iframe data-width="854" data-height="480" width="700" height="393" data-src="/media/5534f2975482714b3c9e41cae6c397d1?postId=454368d0e66f" data-media-id="5534f2975482714b3c9e41cae6c397d1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FPQkw0fXgTNI%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0" src="/media/5534f2975482714b3c9e41cae6c397d1?postId=454368d0e66f"></iframe>

<noscript class="js-progressiveMedia-inner">&lt;div class="iframeContainer"&gt;&lt;IFRAME data-width="854" data-height="480" width="700" height="393" src="/media/5534f2975482714b3c9e41cae6c397d1?postId=454368d0e66f" data-media-id="5534f2975482714b3c9e41cae6c397d1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FPQkw0fXgTNI%2Fhqdefault.jpg&amp;amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen frameborder="0"&gt;&lt;/IFRAME&gt;&lt;/div&gt;</noscript>







I wrote this song and then made this realtime animation engine for “virtual live performances” so my song could be played by some funny stylized characters. I hand-coded and hand-drew just about every element during this 12 month project. The video above is the first render of the results, but I have designed the system so that different songs and animations can be used without too much trouble. It’s mostly CoffeeScript and three.js.

### **Research + laying out the stage**

First looked at a few live performances on YouTube to see how they were lit and shot.









![](https://cdn-images-1.medium.com/freeze/max/60/1*8aNzsnACoNyi3bCsvThYcw.png?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="18"></canvas>

<noscript class="js-progressiveMedia-inner">&lt;img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/2000/1*8aNzsnACoNyi3bCsvThYcw.png"&gt;</noscript>





Video research







I listened to all the songs on my (not yet released) album to work out what instrumentation I’d need if a band had played them, and laid out a stage with four areas — a singer (me), drummer, bass player and synth/keys. There was an organ in the back.









![](https://cdn-images-1.medium.com/freeze/max/60/1*VkfdTnExo6lu1n45LUgBLw.png?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="67"></canvas>

<noscript class="js-progressiveMedia-inner">&lt;img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/2000/1*VkfdTnExo6lu1n45LUgBLw.png"&gt;</noscript>





Layout for large stage







This stage started feeling a bit too big so I decided to make a smaller one for my first videos.





![](https://cdn-images-1.medium.com/freeze/max/60/1*bmPni-NyAYk-J7YwcmWO_A.png?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="48"></canvas>

<noscript class="js-progressiveMedia-inner">&lt;img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/1600/1*bmPni-NyAYk-J7YwcmWO_A.png"&gt;</noscript>





Half size stage



### **Modelling the instruments**

I defined most of my models as a single folded sheet with two transparent “cheeks” on each side.





![](https://cdn-images-1.medium.com/freeze/max/60/1*S5cb-FocP5-yPvK-UeEDIw.png?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="50"></canvas>

<noscript class="js-progressiveMedia-inner">&lt;img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/1600/1*S5cb-FocP5-yPvK-UeEDIw.png"&gt;</noscript>







This meant I could describe an instrument with a small amount of code.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F9776%3Fv%3D4%26s%3D400&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="75"></canvas>

<iframe width="700" height="250" data-src="/media/b9ebecab45969af416bab4276ebee5c4?postId=454368d0e66f" data-media-id="b9ebecab45969af416bab4276ebee5c4" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F9776%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>

<noscript class="js-progressiveMedia-inner">&lt;div class="iframeContainer"&gt;&lt;IFRAME width="700" height="250" src="/media/b9ebecab45969af416bab4276ebee5c4?postId=454368d0e66f" data-media-id="b9ebecab45969af416bab4276ebee5c4" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F9776%3Fv%3D4%26s%3D400&amp;amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen frameborder="0"&gt;&lt;/IFRAME&gt;&lt;/div&gt;</noscript>







I wanted these things to be printable so I created detailed vector artwork for every instrument. Here’s a close up of the modular synth artwork.









![](https://cdn-images-1.medium.com/freeze/max/60/1*i28nBW1y0TWZGP_bdPuOYQ.png?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="30"></canvas>

<noscript class="js-progressiveMedia-inner">&lt;img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/2000/1*i28nBW1y0TWZGP_bdPuOYQ.png"&gt;</noscript>





Photograph vs my drawing on pixel grid







Here’s a guitar.





![](https://cdn-images-1.medium.com/freeze/max/60/1*M3TSXRUq7222DZji07-awQ.png?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="57"></canvas>

<noscript class="js-progressiveMedia-inner">&lt;img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/1600/1*M3TSXRUq7222DZji07-awQ.png"&gt;</noscript>





Moog Guitar drawing







![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F9776%3Fv%3D4%26s%3D400&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="75"></canvas>

<iframe width="700" height="250" data-src="/media/668ab83188a1943244e031e0a2d93326?postId=454368d0e66f" data-media-id="668ab83188a1943244e031e0a2d93326" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F9776%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>

<noscript class="js-progressiveMedia-inner">&lt;div class="iframeContainer"&gt;&lt;IFRAME width="700" height="250" src="/media/668ab83188a1943244e031e0a2d93326?postId=454368d0e66f" data-media-id="668ab83188a1943244e031e0a2d93326" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F9776%3Fv%3D4%26s%3D400&amp;amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen frameborder="0"&gt;&lt;/IFRAME&gt;&lt;/div&gt;</noscript>







As you can see everything is hand-drawn and hand-coded. I’m not mucking about with .dae files or binary file formats (well — apart from the images…).

All these textures went into a big hand-made texture atlas.









![](https://cdn-images-1.medium.com/freeze/max/60/1*6AcA504tgCh8uZzGGMQSOg.png?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="37"></canvas>

<noscript class="js-progressiveMedia-inner">&lt;img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/2000/1*6AcA504tgCh8uZzGGMQSOg.png"&gt;</noscript>





Texture atlas for all the instruments I created — laid-out by hand







I described the coordinate offset for each element in the atlas and used the same data to map the textures onto the 3d models.

### **Modelling the band**





![](https://cdn-images-1.medium.com/freeze/max/60/1*JS5jWIVRKygRRmNICu1wYw.png?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="56" height="75"></canvas>

<noscript class="js-progressiveMedia-inner">&lt;img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/1600/1*JS5jWIVRKygRRmNICu1wYw.png"&gt;</noscript>





Original Michael Forrest cubee by Ann Forrest



My sister made me a little cardboard cutout a few years ago so I started with her artwork.

I decided to make my band up of three other characters: a frog on synths, a mandrill called Barry on bass and a Minecraft cow on drums.









![](https://cdn-images-1.medium.com/freeze/max/60/1*0iLhCJtgMbqn3xLzv06z1Q.png?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="37"></canvas>

<noscript class="js-progressiveMedia-inner">&lt;img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/2000/1*0iLhCJtgMbqn3xLzv06z1Q.png"&gt;</noscript>





Drawing Barry







I think Barry’s feet gave me the most trouble





![](https://cdn-images-1.medium.com/freeze/max/60/1*H3lEjLKAuNdnyccDquDg_A.png?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="31"></canvas>

<noscript class="js-progressiveMedia-inner">&lt;img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/1600/1*H3lEjLKAuNdnyccDquDg_A.png"&gt;</noscript>





Barry’s feet



I constructed these characters with a minimum of code specifying their layout — they’re just box primitives really.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F9776%3Fv%3D4%26s%3D400&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="75"></canvas>

<iframe width="700" height="250" data-src="/media/124ae349781e9694a47f9e1a5f92d931?postId=454368d0e66f" data-media-id="124ae349781e9694a47f9e1a5f92d931" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F9776%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>

<noscript class="js-progressiveMedia-inner">&lt;div class="iframeContainer"&gt;&lt;IFRAME width="700" height="250" src="/media/124ae349781e9694a47f9e1a5f92d931?postId=454368d0e66f" data-media-id="124ae349781e9694a47f9e1a5f92d931" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F9776%3Fv%3D4%26s%3D400&amp;amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen frameborder="0"&gt;&lt;/IFRAME&gt;&lt;/div&gt;</noscript>







I attached face layers afterwards — note the transparent areas above and below to allow protruding beards and suchlike.





![](https://cdn-images-1.medium.com/freeze/max/60/1*KBGK-qLix4E7TquhB9HZTA.png?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="52"></canvas>

<noscript class="js-progressiveMedia-inner">&lt;img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/1600/1*KBGK-qLix4E7TquhB9HZTA.png"&gt;</noscript>







The four band member textures are in one atlas and the only thing different between each band member is its vertical offset in the atlas.





![](https://cdn-images-1.medium.com/freeze/max/60/1*U9sPXKjmiU4gMcDN8eDn2A.png?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="37" height="75"></canvas>

<noscript class="js-progressiveMedia-inner">&lt;img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/1600/1*U9sPXKjmiU4gMcDN8eDn2A.png"&gt;</noscript>





Texture atlas for the band members



### **Lights**

To make a compelling stage show I first needed to learn how to light a stage. I did some research and picked a style and some colors.









![](https://cdn-images-1.medium.com/freeze/max/60/1*VfvzqoGmXjJCbW856YlrZg.png?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="25"></canvas>

<noscript class="js-progressiveMedia-inner">&lt;img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/2000/1*VfvzqoGmXjJCbW856YlrZg.png"&gt;</noscript>





Lighting research and chosen colour scheme











![](https://cdn-images-1.medium.com/freeze/max/60/1*u12YKUOFFk-ObcGMA9CPCQ.png?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="22"></canvas>

<noscript class="js-progressiveMedia-inner">&lt;img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/2000/1*u12YKUOFFk-ObcGMA9CPCQ.png"&gt;</noscript>











I modelled the lighting enclosures and rigging. Wasn’t too much work when I based it on a lathe primitive.





![](https://cdn-images-1.medium.com/freeze/max/60/1*Qcyl9czyriDxt2G9BrCZOw.png?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="33"></canvas>

<noscript class="js-progressiveMedia-inner">&lt;img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/1600/1*Qcyl9czyriDxt2G9BrCZOw.png"&gt;</noscript>





Spotlight model







![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F9776%3Fv%3D4%26s%3D400&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="75"></canvas>

<iframe width="700" height="250" data-src="/media/c31ab7b9d707c0385d8902b6e10bd3f1?postId=454368d0e66f" data-media-id="c31ab7b9d707c0385d8902b6e10bd3f1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F9776%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>

<noscript class="js-progressiveMedia-inner">&lt;div class="iframeContainer"&gt;&lt;IFRAME width="700" height="250" src="/media/c31ab7b9d707c0385d8902b6e10bd3f1?postId=454368d0e66f" data-media-id="c31ab7b9d707c0385d8902b6e10bd3f1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F9776%3Fv%3D4%26s%3D400&amp;amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen frameborder="0"&gt;&lt;/IFRAME&gt;&lt;/div&gt;</noscript>







### **Mapping out a song**

I needed to map out a song structure to define all the camera movements, lighting and animations I wanted.









![](https://cdn-images-1.medium.com/freeze/max/60/1*aZhjbDvhlO6qhUgO8qDTKQ.png?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="42"></canvas>

<noscript class="js-progressiveMedia-inner">&lt;img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/2000/1*aZhjbDvhlO6qhUgO8qDTKQ.png"&gt;</noscript>











I wrote scripts to convert the data from this spreadsheet into something I could work with in code. Here’s the final data file for the arrangement. There’s not much to it considering how much work it’s doing.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F9776%3Fv%3D4%26s%3D400&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="75"></canvas>

<iframe width="700" height="250" data-src="/media/b3d86de10d45cdf502c39f606201ffee?postId=454368d0e66f" data-media-id="b3d86de10d45cdf502c39f606201ffee" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F9776%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>

<noscript class="js-progressiveMedia-inner">&lt;div class="iframeContainer"&gt;&lt;IFRAME width="700" height="250" src="/media/b3d86de10d45cdf502c39f606201ffee?postId=454368d0e66f" data-media-id="b3d86de10d45cdf502c39f606201ffee" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F9776%3Fv%3D4%26s%3D400&amp;amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen frameborder="0"&gt;&lt;/IFRAME&gt;&lt;/div&gt;</noscript>







This is essentially all the data required to render a performance of one song.

### **Animating the band**

I wanted minimal data but natural movement. I thought I’d need a multi-touch tool to capture animations but once I started defining them I realized I could pose each part individually to bring the animations together step-by-step. Here’s a video of me quickly demonstrating my animation tool.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FoTp1P5qjaGA%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="56"></canvas>

<iframe data-width="640" data-height="480" width="640" height="480" data-src="/media/2ab22b5f19b6f1e32fc6255cb19908b1?postId=454368d0e66f" data-media-id="2ab22b5f19b6f1e32fc6255cb19908b1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FoTp1P5qjaGA%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>

<noscript class="js-progressiveMedia-inner">&lt;div class="iframeContainer"&gt;&lt;IFRAME data-width="640" data-height="480" width="640" height="480" src="/media/2ab22b5f19b6f1e32fc6255cb19908b1?postId=454368d0e66f" data-media-id="2ab22b5f19b6f1e32fc6255cb19908b1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FoTp1P5qjaGA%2Fhqdefault.jpg&amp;amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen frameborder="0"&gt;&lt;/IFRAME&gt;&lt;/div&gt;</noscript>







I saved these animations to a database and generated a JSON file that could be referenced by the front-end code.

**Controllers**

There are three main controllers responsible for a performance — Camera, Animation and Lighting.

The camera controller interprets the different “shot” types into spatial coordinates and animates the camera based on the minimal info provided.

For example, here’s how a camera ‘orbit’ movement is described.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F9776%3Fv%3D4%26s%3D400&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="75"></canvas>

<iframe width="700" height="250" data-src="/media/3d69609165b2f63b7403411aaf5c0fb9?postId=454368d0e66f" data-media-id="3d69609165b2f63b7403411aaf5c0fb9" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F9776%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>

<noscript class="js-progressiveMedia-inner">&lt;div class="iframeContainer"&gt;&lt;IFRAME width="700" height="250" src="/media/3d69609165b2f63b7403411aaf5c0fb9?postId=454368d0e66f" data-media-id="3d69609165b2f63b7403411aaf5c0fb9" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F9776%3Fv%3D4%26s%3D400&amp;amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen frameborder="0"&gt;&lt;/IFRAME&gt;&lt;/div&gt;</noscript>







So we start from `bar 69`, and over the duration of `8 bars` we orbit from `michael`'s `front-left` to `front/right/above`, staying `1000` units away. (I picked my units based on pixel measurements to make certain things easier but it would have been better with hindsight to use metres).

The lighting controller had a “track” for each light (or logical grouping of lights) and then each of these was defined separately in the configuration file. Here’s what the configuration looked like for the backwash light — I just wanted do define the bar numbers and colors or color transitions.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F9776%3Fv%3D4%26s%3D400&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="75"></canvas>

<iframe width="700" height="250" data-src="/media/08736f310ccd664acfef613fea1e6bb0?postId=454368d0e66f" data-media-id="08736f310ccd664acfef613fea1e6bb0" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F9776%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>

<noscript class="js-progressiveMedia-inner">&lt;div class="iframeContainer"&gt;&lt;IFRAME width="700" height="250" src="/media/08736f310ccd664acfef613fea1e6bb0?postId=454368d0e66f" data-media-id="08736f310ccd664acfef613fea1e6bb0" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F9776%3Fv%3D4%26s%3D400&amp;amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen frameborder="0"&gt;&lt;/IFRAME&gt;&lt;/div&gt;</noscript>







My animation tool let me create named animation loops. I referenced these in my configuration file by name and then used this to pick the right animation for each character during the song.

Here’s Barry’s animations for the whole song:





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F9776%3Fv%3D4%26s%3D400&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="75"></canvas>

<iframe width="700" height="250" data-src="/media/6467e7977b2b6c481ab61b7bc541ebfa?postId=454368d0e66f" data-media-id="6467e7977b2b6c481ab61b7bc541ebfa" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F9776%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>

<noscript class="js-progressiveMedia-inner">&lt;div class="iframeContainer"&gt;&lt;IFRAME width="700" height="250" src="/media/6467e7977b2b6c481ab61b7bc541ebfa?postId=454368d0e66f" data-media-id="6467e7977b2b6c481ab61b7bc541ebfa" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F9776%3Fv%3D4%26s%3D400&amp;amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen frameborder="0"&gt;&lt;/IFRAME&gt;&lt;/div&gt;</noscript>







So, taking the second item as an example, we use the animation named `“barry chorus”` for 16 bars starting from bar 25\. We specify that he will hold the `bassGuitar` for these animations. Being played by somebody is a function of the instrument so the guitar knows where it needs to move to be played by Barry.

### **GL Shaders**

I wanted the video to have some decent cinematography and the most important camera effect to me was to have some depth of field effects in the shot (i.e. things in the background and foreground should be out of focus).

My shaders are pretty hacky but the gist of it is that we first generate a depth map so we know how far everything in the scene is from the camera. Then we use this information to blur areas of the image accordingly.





![](https://cdn-images-1.medium.com/freeze/max/60/1*DJRVE7igIxRhx7AtUi9P_A.png?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="35"></canvas>

<noscript class="js-progressiveMedia-inner">&lt;img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/1600/1*DJRVE7igIxRhx7AtUi9P_A.png"&gt;</noscript>





See how the audience is out of focus



The other important effect was the volumetric lighting. The lights needed to look like they were shining through smoke for it to feel like a gig. Here’s the rough extent of the shader technology in my scene. (The names are a bit off — and note that I ended up with multiple “fake suns” so that each light had its own).





![](https://cdn-images-1.medium.com/freeze/max/60/1*zz46sUg3WQuezA2JLIqYMw.png?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="60"></canvas>

<noscript class="js-progressiveMedia-inner">&lt;img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/1600/1*zz46sUg3WQuezA2JLIqYMw.png"&gt;</noscript>











![](https://cdn-images-1.medium.com/freeze/max/60/1*YBs4SdyUlyKfZfyJldEIpA.png?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="45"></canvas>

<noscript class="js-progressiveMedia-inner">&lt;img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/1600/1*YBs4SdyUlyKfZfyJldEIpA.png"&gt;</noscript>





Volumetric lighting effects



### **The audience**

I’d originally created a system where my Twitch followers would be my audience (with face detection to put their faces on bodies) but this didn’t feel quite right for a YouTube video so I went to Cubeecraft.com, the original inspiration for this whole style. I picked out anything that had resonance for me including Spencer and Watchmen characters. These are all hand-made so I filtered them down to ones with similar layouts and found I could copy and paste slices between characters in Sketch to quickly generate files.

I used TexturePacker to generate the textures. Probably could have saved myself a lot of time earlier by doing the same instead of hand-coding each vertex mapping.





![](https://cdn-images-1.medium.com/freeze/max/60/1*MnbSLPg1lWfTQQ9iFpIy_w.png?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="48"></canvas>

<noscript class="js-progressiveMedia-inner">&lt;img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/1600/1*MnbSLPg1lWfTQQ9iFpIy_w.png"&gt;</noscript>





defining slices for each model







![](https://cdn-images-1.medium.com/freeze/max/60/1*02QR1OH13Qd6eW1ao4cfxw.png?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="75"></canvas>

<noscript class="js-progressiveMedia-inner">&lt;img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/1600/1*02QR1OH13Qd6eW1ao4cfxw.png"&gt;</noscript>





Texture atlas for all the cubeecraft characters



### **Rendering**

I used a couple of things and settled on CCapture to make 4K (non-realtime) renders — it took about half an hour to render the final video. I synced this up with the audio again in Apple Motion and used Final Cut Pro to add the intro and outtro.

### **The result (again)**





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FPQkw0fXgTNI%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="56"></canvas>

<iframe data-width="854" data-height="480" width="700" height="393" data-src="/media/5534f2975482714b3c9e41cae6c397d1?postId=454368d0e66f" data-media-id="5534f2975482714b3c9e41cae6c397d1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FPQkw0fXgTNI%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>

<noscript class="js-progressiveMedia-inner">&lt;div class="iframeContainer"&gt;&lt;IFRAME data-width="854" data-height="480" width="700" height="393" src="/media/5534f2975482714b3c9e41cae6c397d1?postId=454368d0e66f" data-media-id="5534f2975482714b3c9e41cae6c397d1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FPQkw0fXgTNI%2Fhqdefault.jpg&amp;amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen frameborder="0"&gt;&lt;/IFRAME&gt;&lt;/div&gt;</noscript>







### **Features beyond the video demo**

This video render is just one possible output. I rendered out a 360 video (although I rushed it and didn’t managed to get the volumetric lighting to work so it doesn’t really look right).

I have this thing hosted on a server but I’m not quite ready to release it until I figure out a good way to make it interactive. I can plug my realtime performances into it so that it syncs up to my semi-improvised live shows. It runs on my iPhone so it works nicely with Google Cardboard style headsets.

I modeled other instruments beyond the ones you see here and I have a lot of sound-reactive stuff that I haven’t shown yet (which, incredibly, also seems to work on mobile). One of the hardest things to do was keep scope under control as I realized more and more possibilities for this system.

### **Questions?**

I’ve really rushed through this explanation — I wanted to start by pointing out the major elements before going into any more detail about each thing.

What would you like to hear more about? I’m planning on going into more depth in a video series in future so it would be good to understand what people want to learn more about.

If you’re inspired by this project’s potential as a product. Personally I can imagine it being an accessible type of music publishing medium living somewhere between recordings and live shows, especially if you plugged it into services like Twitch.

### Liked the song?

If you liked the music, come and find me on [Facebook](http://facebook.com/michael.forrest.music), [Twitter](http://twitter.com/mf_music) and/or [SoundCloud](http://soundcloud.com/michaelforrest).








