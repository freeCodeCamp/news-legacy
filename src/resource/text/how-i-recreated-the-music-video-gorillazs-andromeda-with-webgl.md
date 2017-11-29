---
author: Yağız Gürgül
authorTwitter: none
authorFacebook: https://facebook.com/1382951268403682
title: "How I Recreated the Gorillaz Andromeda music video using WebGL"
subTitle: "I was 14 years old when I first saw Gorillaz — Feel Good Inc music video. I fell in love with it saying “Whaatt? A cartoony music video? ..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*9jbUlPQ5H5C49rpKI7NOhQ.png
url: https://medium.freecodecamp.org/how-i-recreated-the-music-video-gorillazs-andromeda-with-webgl-f9b0fe55fb17
id: how-i-recreated-the-music-video-gorillazs-andromeda-with-webgl-f9b0fe55fb17
date: 2017-09-04T19:35:26.055Z
tags: [
	"JavaScript",
	"Music",
	"Tech",
	"Design",
	"Web Development"
]
---
# How I Recreated the Gorillaz Andromeda music video using WebGL











![](https://cdn-images-1.medium.com/max/2000/1*9jbUlPQ5H5C49rpKI7NOhQ.png)












I was 14 years old when I first saw Gorillaz — Feel Good Inc music video. I fell in love with it saying “Whaatt? A cartoony music video? How awesome!”. The next thing I knew I was buying the Demon Days album.

Years later… About 4 months ago YouTube showed me the new Gorillaz music video, Andromeda. When it completed buffering I immediately thought that this video could be rendered on browsers.

That’s when I started to recreate Andromeda music video with WebGL. Feel free to check it out [Gorillaz — Andromeda in WebGL.](http://yagiz.me/andromeda/)









![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F9W44NWYwa1g%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe data-width="854" data-height="480" width="980" height="551" data-src="https://medium.freecodecamp.org/media/2cfa3ca83f393efa0bb3c41d2d741e04?postId=f9b0fe55fb17" data-media-id="2cfa3ca83f393efa0bb3c41d2d741e04" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F9W44NWYwa1g%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>






Original Gorillaz — Andromeda Music Video







When I started recreating, first thing I did was to download [three.js](https://threejs.org/), which is a solid 3D JavaScript library. I downloaded the source, and started with a simple “Hello World” scene. Then I began to plan the objects, textures and animations.

I broke my project into four major parts. These are the background scene, meteors scene, Saturn scene and animations.

### Analyzing the Music Video

Andromeda music video has actually a simple scene. A background galaxy image moving from left to right. A sphere with a flowing texture that I’ll call it Saturn. And meteors dancing in the front. From time to time, when the music gets higher, a meteor comes from top left corner and crushes into Saturn and makes it glow brighter.

I was going to imitate a similar one. So I sketched the scene below with components like background, Saturn and meteors.














### Background Scene

This seems like the simplest part of the scene and it is kinda true. Technically it’s easy. First create a plane. Animate it from left to right. Create another one and place it behind the first one. Set their blend modes to additive so they look merged. Finally, add some textures.

But how about finding a proper, real 4K, beautiful and colourful galaxy texture?

Well that was hard.

I looked up around a thousand sites for licensed or stock free images. But all I could find was a couple of nice, sharp, 4K wallpapers, not real textures.

This was bad. I had to purchase and download them one by one. Then try to convert them to continuous textures. And edit their brightness and contrast settings. After all those steps, I tested them in the scene, trying to see whether they look good or not.

It took some time, but I managed to find the perfect image. Which was totally worth it and I was really to happy to see the results:














I needed to add some post processing effects such as changing the hue to my project. I used EffectComposer (You can find detailed tutorial [here.](http://blog.cjgammon.com/threejs-post-processing)), which is not part of three.js but comes with the examples of it. By using EffectComposer I easly managed to add hue effects to my background scene.

### Meteors Scene

Meteors were the simplest part of the project. At the same time, they were the enemies of performance. There are 500 of them moving, and rotating in the scene! I needed to find a meteor model in the simplest way to have smooth animations.

It’s amazing what you can do with stock geometries in three.js. With [OctahedronGeometry](https://threejs.org/docs/index.html#api/geometries/OctahedronGeometry), I deformed each vertices of it. It basically looks like a rock:














As I said before, this project has 500 meteors. Each one has a different movement speed, rotational speed and a random size. They move from right to left. When they move out from the view, they teleport to right side of the view.














The meteors behind the Saturn are actually one single static image. First I tried to create this static image from scratch. I drew some random circles with glow effect but then I didn’t like how they looked in the scene. Then I found a stars texture. I tinted it to yellow and set its blend mode to additive.

### Saturn Scene

No doubt, this was the hardest part of the scene. To understand why, you need to inspect the features of it in the music video:

*   Texture animates in a way that top part of it moves faster than the bottom part.
*   Saturn doesn’t rotate but texture makes it look like it swings.
*   Saturn has an inner glow. Edges and central parts are brighter.
*   Saturn also has an outer glow. In fact there are two outer glows. One of them is brighter and close to edges, the other one is bigger and darker.

#### Texture

Finding a proper beautiful tex… Well you already know that this is hard. But one of my colleague gave me the simplest idea, to search **“saturn texture”** on Google Images. I was shocked at what I found.

The first image that came up was the exact same image used in the Andromeda music video. Did the artist/designer search “saturn texture” on Google Images and pick the first one in the production? Is this common?

Anyway since I found my Saturn texture, the next part was to animate it. This was the biggest challenge. After I researched a bit, I understood that I needed to use something called **fragment shader**. But what the heck was that? As far as I understood it’s a code that lives in .js/.html but runs in GPU.

When a 3D model is rendered, each pixel on this model needs to know which texture color it should use. One way to do that is to use [UV mapping](https://en.wikipedia.org/wiki/UV_mapping). I animate UV map coordinates exponentially. So the top part became faster than the bottom. It was trial and error a bit but I think I nailed it.














In the video, Saturn also swings. To achieve this movement, I got help from a sin function. One of the inputs of this sin function is frame time, which increases over time. So, the sphere looks like it’s swinging.














#### Glows

There are three types of glows in the project, inner, big outer and small outer glow.

For the inner glow, I created simple black and white gradient texture. Then I added its pixel colors to the original Saturn texture color in the fragment shader:














At first I thought I could create the outer glows by using fragment shader. But I decided that would be overkill, because the camera and Saturn don’t rotate.

So I created black and white circular gradient textures. I placed them behind Saturn and set their blend modes to additive. This saved me a huge amount of development time.

You can see the bigger glow in action. Don’t forget that it’s actually a plane behind Saturn:














This is the smaller but brighter glow created with the same technique:














This is the final result of Saturn with all the glows enabled:














### Animation

Final part of the project was to create animations that were synced with the song.

In the video a meteor comes from top left corner and crashes into Saturn three times. During the first crash, actual Saturn texture, glow effects and the background become visible. During the second and third crashes, Saturn texture and glows become brighter.

I chose [tween.js](https://github.com/tweenjs/tween.js), a JavaScript animation library, which is super easy to use. Whole scene is dynamically controlled by parameters like, background opacity, texture flow speed, and inner and outer glow brightness. Then I tracked the YouTube player’s current time and start to animate these parameters in the right seconds.

You can see the second explosion in action below:














### Bringing Them All Together














While bringing all my components together, I constantly compared my project with the actual music video. I listened to the same song and watched the same video over and over again to make sure my animations matched with the actual video. Many times I changed the values of the effects entirely to make them appealing to the viewers’ eye.

After many modifications and moving back and forth around the scenes, I was very satisfied with the end result, my end product. Even I didn’t expect to see something this beautiful when I first started.

Testing the project on mobile devices was also satisfactory. To see the animations running as smooth as it was on desktop felt great. I didn’t have to make any performance tricks for mobile.

I have to say, experimenting with 3D was an amazing experience. If you are good with JavaScript and math, but don’t have much experience in 3D, I strongly suggest you to play with it. It is rewarding to see what you can do with some planes and spheres.

*   Developer: [Yagiz Gurgul](http://yagiz.me)
*   Project Link: [http://yagiz.me/andromeda/](http://yagiz.me/andromeda/)
*   Project Source: [https://github.com/yagiz/andromeda](https://github.com/yagiz/andromeda)








