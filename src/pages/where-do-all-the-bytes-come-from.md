---
author: Colt McAnlis
authorTwitter: https://twitter.com/duhroach
authorFacebook: none
title: "Where do all the bytes come from?"
subTitle: "Great question Dion! I will answer it, and not just because you’re my new boss, but because it’s a good question. (but also because you’r..."
coverSrc: https://cdn-images-1.medium.com/max/1600/0*DBN4XJyIGy7gnrNl.
url: https://medium.freecodecamp.org/where-do-all-the-bytes-come-from-f51586690fd0
id: where-do-all-the-bytes-come-from-f51586690fd0
date: 2015-12-12T19:39:33.741Z
tags: [
  "Game Development",
  "Compression",
  "Image Compression",
  "Design",
  "Learning"
]
---
# Where do all the bytes come from?



[![](https://cdn-images-1.medium.com/max/1600/0*DBN4XJyIGy7gnrNl.)](https://twitter.com/dalmaer/status/675738498800848896)



Great question Dion! I will answer it, and not just _because_ you’re my new boss, but because it’s a good question. (but also because [you’re my new boss](https://medium.com/ben-and-dion/heading-to-google-take-2-0-153841c6e1ae#.asvmj5s45).)

I want to set something clear here though : we’re not really comparing Apples-to-Apples, so let’s define some technologies first.

### How Mario Works

So let’s talk about how the original Super Mario game worked, from an asset perspective.

The original NES console was only designed to output images that were 256 wide by 240 high; meaning that the final image that needed to be displayed to the screen was 180kb in size.

Besides that, the NES only had 2kb of RAM. A cartridge itself could could hold 8k to 1mb of game data. So, there was no way to fit the entire game’s contents into main memory. Basically, a subset of the 1MB cartridge data must be loaded into the 2kb RAM and used to render the 180kb screen. How does one achieve that?

[SpriteSheets](https://en.wikipedia.org/wiki/Sprite_%28computer_graphics%29).

Sprite sheets contain small tiles of graphics, that are re-used over and over again. For example, below is a remake of the original super mario sprite sheet:



![](https://cdn-images-1.medium.com/max/1600/0*dwRaOKJJTu_i9TvZ.)

It’s not the exact original sprite sheet, but you can get a sense of the small blocks of data that can be use over-and-over again.



Each small 16x16 pixel square represents a “tile” and artists would string these together to create the actual levels. The levels themselves, just became a giant 2D array of indexes into the sprite sheet. (I talk about this in a lot more detail in Lesson 3 of my [HTML5 Game Development course @ Udacity](https://www.udacity.com/course/html5-game-development--cs255), or in my book [HTML5 Game Development Insights](http://www.apress.com/9781430266976).) Tack on some [Run-Length-Encoding](https://en.wikipedia.org/wiki/Run-length_encoding), or some basic [LZ77](https://www.youtube.com/watch?v=Jqc418tQDkg), and you get a fairly compact format for levels.



![](https://cdn-images-1.medium.com/max/1600/0*qimWOyFboQoLx32R.)

Behold, that level that you parents could never complete.



So with concepts like tile-sheets and sprite-sheets, we can use a small set of images to create large scenes & worlds. This is generally how most games work. Even 3D games will have a set of common textures that are applied multiple times and places throughout the game itself.

Now let’s talk about generic image compression.

### How Images are compressed

Here’s the “_not fair_” part of this comparison. Generic image compression algorithms have no domain knowledge about the pixels inside of them. JPG, PNG, WebP have all been designed for _photos_ and not so much _game screens_. The result is that for a given 16x16 pixel block, these algorithms assume it’s unique among the image; Besides some color quantization, there’s no real logic added to determine if another 16x16 block could be an _exact duplicate_ of the current one. This generally means there’s a lower-bound on how a given block of data is compressed.

For example, [JPG](https://en.wikipedia.org/wiki/JPEG) breaks a given image into 8x8 pixel blocks, converts the RGB color space into the [YCbCr](https://en.wikipedia.org/wiki/YCbCr) version, and then applies [Discrete cosine transform](https://en.wikipedia.org/wiki/Discrete_cosine_transform) on them. It’s only **after** this step, does a lossless encoder come along, and see if it can match up common duplicate groups using DPCM, or RLE.



![](https://cdn-images-1.medium.com/max/1600/0*xdUjGXy1FE9sgpqE.)

A block-view of how JPG image compression works.



So, the only place where two blocks might get compacted into 1 block, is if their post-DCTd version is identical, and RLE can make stride recommendations. This doesn’t happen that often.

[Despite its other flaws](https://www.youtube.com/watch?v=jHXzzHElFPk), PNG is much better in this regard. PNG compression is entirely lossless, (so your image quality is high, but your compression savings are low), and based on the DEFLATE codec, which pairs [LZSS](https://www.youtube.com/watch?v=Jqc418tQDkg) along with [Arithmetic Compression](https://www.youtube.com/watch?v=FdMoL3PzmSA). The result is that long runs of similar pixels can end up being cut down to a much smaller size. This is why an image with a very uniform background will always be smaller as a PNG instead of a JPG.

#### The below image is a 5.9kb PNG file, while the JPG image is 106kb



![](https://cdn-images-1.medium.com/max/1600/0*sUO8JCbLZc_i-524.)

Since this image has lots of duplicate pixels (the blue sky background) compressors like PNG do a better job than their block-based JPG counterparts.



### Apples vs. Dragonfruit

My point here is that it’s kinda unfair to compare game content to a single image on the internet.

From the game side, you start with a small set of re-usable tiles, and index them to build up your larger image, we can do this, because we know how the game is going to be made. On the other side, JPG/PNG/WebP just tries to compress the data it can find in local blocks, without any real desire to match repeated content. Image compression is clearly at a disadvantage here, since they don’t have prior knowledge of their data space, they can’t really make any expectations about it.

I mean, consider [The Demo Scene](https://en.wikipedia.org/wiki/Demoscene) which is super big on this [sort of thing](https://en.wikipedia.org/wiki/.kkrieger). They can cram 30minutes of an entire 3d shooter into 64kb because they understand and know so much more about their data.



![](https://cdn-images-1.medium.com/max/1600/1*KFIQVD2tHQ3nu9GBEu3RWg.jpeg)

A much better comparison. The .[kkrieger](https://en.wikipedia.org/wiki/.kkrieger) demo fit 30 minutes of a 3D shooter gameplay, with physics, sound, textures, and AI into 64kb of data. Seems like a massive amount of gain for just 24kb more than the original Mario.



It just goes to show, with the right amount of foreknowledge about your data, you can do great things with compression.

### Looking forward.

Obviously, we’ve grown up since the 256x240 displays of the NES days. [The phone in my pocket](https://www.google.com/nexus/5x/) has 1,920 x 1,080 display pixels @ it’s 5.2” size, giving it ~423 pixels per inch density. To compare that in the same number of pixels that’s ~33 super-mario screens, or rather, 8MB of pixel data. I don’t think anyone’s surprised that screen resolutions are increasing, but it also comes with the need for _more data_.

This is something I’ve been [harping on for a while now](https://www.youtube.com/watch?v=dmX2MpEBYhw). While we get bigger displays, the content channels need to up their resolution outputs in order to still look good on our higher-density setups (otherwise, [we get scaling blurryness..](http://www.leemunroe.com/designing-for-high-resolution-retina-displays/)). This of course, causes our video game packages to grow in size, our [web-pages to grow in size](http://royal.pingdom.com/2011/11/21/web-pages-getting-bloated-here-is-why/), and even our [youtube streaming videos](http://mashable.com/2014/01/03/youtube-4k-ces/) to grow in size. Basically, we’re sending more data to smaller devices simply due to screen resolution. Which, for the next 2 billion folks in emerging markets, on 2G connections, is like the worst idea ever.

But I digress. That’s a different post.








