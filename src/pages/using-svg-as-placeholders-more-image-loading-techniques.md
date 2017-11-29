---
author: José M. Pérez
authorTwitter: https://twitter.com/jmperezperez
authorFacebook: none
title: "How to use SVG as a Placeholder, and Other Image Loading Techniques"
subTitle: "I’m passionate about image performance optimisation and making images load fast on the web. One of the most interesting areas of explorat..."
coverSrc: https://cdn-images-1.medium.com/max/2000/0*zJGl1vKLttcJGIL4.jpg
url: https://medium.freecodecamp.org/using-svg-as-placeholders-more-image-loading-techniques-bed1b810ab2c
id: using-svg-as-placeholders-more-image-loading-techniques-bed1b810ab2c
date: 2017-10-30T16:09:28.479Z
tags: [
  "Design",
  "Web Development",
  "UX",
  "Web Design",
  "Programming"
]
---
# How to use SVG as a Placeholder, and Other Image Loading Techniques







![](https://cdn-images-1.medium.com/max/2000/0*zJGl1vKLttcJGIL4.jpg)

Generating SVGs from images can be used for placeholders. Keep reading!







I’m passionate about image performance optimisation and making images load fast on the web. One of the most interesting areas of exploration is placeholders: what to show when the image hasn’t loaded yet.

During the last days I have come across some loading techniques that use SVG, and I would like to describe them in this post.

In this post we will go through these topics:

*   Overview of different types of placeholders
*   SVG-based placeholders (edges, shapes and silhouettes)
*   Automating the process.

### Overview of different types of placeholders

In the past [I have written about placeholders and lazy-load of images](https://medium.com/@jmperezperez/lazy-loading-images-on-the-web-to-improve-loading-time-and-saving-bandwidth-ec988b710290), and also [talked about it](https://www.youtube.com/watch?v=szmVNOnkwoU). When doing lazy-loading of images it’s a good idea to think about what to render as a placeholder, since it can have a big impact in user’s perceived performance. In the past I described several options:







![](https://cdn-images-1.medium.com/max/2000/0*jlMM144vAhH-0bEn.png)







Several strategies to fill the area of an image before it loads.

*   **Keeping the space empty for the image**: In a world of responsive design, this prevents content from jumping around. Those layout changes are bad from a user’s experience point of view, but also for performance. The browser is forced to do layout re calculations every time it fetches the dimensions of an image, leaving space for it.
*   **Placeholder**: Imagine that we are displaying a user’s profile image. We might want to display a silhouette in the background. This is shown while the main image is loaded, but also when that request failed or when the user didn’t set any profile picture at all. These images are usually vector-based, and due to their small size are a good candidate to be inlined.
*   **Solid colour**: Take a colour from the image and use it as the background colour for the placeholder. This can be the dominant colour, the most vibrant… The idea is that it is based on the image you are loading and should help making the transition between no image to image loaded smoother.
*   **Blurry image**: Also called blur-up technique. You render a tiny version of the image and then transition to the full one. The initial image is tiny both in pixels and kBs. To remove artifacts the image is scaled up and blurred. I have written previously about this on [How Medium does progressive image loading](https://medium.com/@jmperezperez/how-medium-does-progressive-image-loading-fd1e4dc1ee3d), [Using WebP to create tiny preview images](https://medium.com/@jmperezperez/using-webp-to-create-tiny-preview-images-3e9b924f28d6), and [More examples of Progressive Image Loading](https://medium.com/@jmperezperez/more-examples-of-progressive-image-loading-f258be9f440b) .

Turns out there are many other variations and lots of smart people are developing other techniques to create placeholders.

One of them is having gradients instead of solid colours. The gradients can create a more accurate preview of the final image, with very little overhead (increase in payload).



![](https://cdn-images-1.medium.com/max/1600/0*ecPkBAl69ayvRctn.jpg)

Using gradients as backgrounds. Screenshot from Gradify, which is not online anymore. Code [on GitHub](https://github.com/fraser-hemp/gradify).



Another technique is using SVGs based on the image, which is getting some traction with recent experiments and hacks.

### SVG-based placeholders

We know SVGs are ideal for vector images. In most cases we want to load a bitmap one, so the question is how to vectorise an image. Some options are using edges, shapes and areas.

#### Edges

In [a previous post](https://medium.com/@jmperezperez/drawing-images-using-edge-detection-and-svg-animation-16a1a3676d3) I explained how to find out the edges of an image and create an animation. My initial goal was to try to draw regions, vectorising the image, but I didn’t know how to do it. I realised that using the edges could also be innovative and I decided to animate them creating a “drawing” effect.





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/8c5c44a4adf82b09692a34eb4daa3e2e?postId=bed1b810ab2c" data-media-id="8c5c44a4adf82b09692a34eb4daa3e2e" allowfullscreen="" frameborder="0"></iframe>





[**Drawing images using edge detection and SVG animation**  
_Back in the days SVG was barely used and supported. Some time after we started using them as an alternative to classic…_medium.com](https://medium.com/@jmperezperez/drawing-images-using-edge-detection-and-svg-animation-16a1a3676d3 "https://medium.com/@jmperezperez/drawing-images-using-edge-detection-and-svg-animation-16a1a3676d3")[](https://medium.com/@jmperezperez/drawing-images-using-edge-detection-and-svg-animation-16a1a3676d3)

#### Shapes

SVG can also be used to draw areas from the image instead of edges/borders. In a way, we would vectorise a bitmap image to create a placeholder.

Back in the days I tried to do something similar with triangles. You can see the result in my talks [at CSSConf](https://jmperezperez.com/cssconfau16/#/45) and [Render Conf](https://jmperezperez.com/renderconf17/#/46).





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/05d1ee44f0537f8257258124d7b94613?postId=bed1b810ab2c" data-media-id="05d1ee44f0537f8257258124d7b94613" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fi.cdpn.io%2F390060.BmaWmQ.small.751c0fd1-eaa4-44cb-b2dc-dfc99f9f1437.png&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





The codepen above is a proof of concept of a SVG-based placeholder composed of 245 triangles. The generation of the triangles is based on [Delaunay triangulation](https://en.wikipedia.org/wiki/Delaunay_triangulation) using [Possan’s polyserver](https://github.com/possan/polyserver). As expected, the more triangles the SVG uses, the bigger the file size.

#### Primitive and SQIP, a SVG-based LQIP technique

Tobias Baldauf has been working on another Low-Quality Image Placeholder technique using SVGs called [SQIP](https://github.com/technopagan/sqip). Before digging into SQIP itself I will give an overview of [Primitive](https://github.com/fogleman/primitive), a library on which SQIP is based.

Primitive is quite fascinating and I definitely recommend you to check it out. It converts a bitmap image into a SVG composed of overlapping shapes. Its small size makes it suitable for inlining it straight into the page. One less roundtrip, and a meaningful placeholder within the initial HTML payload.

Primitive generates an image based on shapes like triangles, rectangles and circles (and a few others). In every step it adds a new one. The more steps, the resulting image looks closer to the original one. If your output is SVG it also means the size of the output code will be larger.

In order to understand how Primitive works, I ran it through a couple of images. I generated SVGs for the artwork using 10 shapes and 100 shapes:







![](https://cdn-images-1.medium.com/max/800/1*y4sr9twkh_WyZh6h0yH98Q.png)





![](https://cdn-images-1.medium.com/max/800/1*cqyhYnx83LYvhGdmg2dFDw.png)





![](https://cdn-images-1.medium.com/max/800/1*qQP5160gPKQdysh0gFnNfw.jpeg)

Processing [this picture](https://jmperezperez.com/assets/images/posts/svg-placeholders/pexels-photo-281184-square.jpg) using Primitive, using [10 shapes](https://jmperezperez.com/assets/images/posts/svg-placeholders/pexels-photo-281184-square-10.svg) and [100 shapes](https://jmperezperez.com/assets/images/posts/svg-placeholders/pexels-photo-281184-square-100.svg).









![](https://cdn-images-1.medium.com/max/800/1*PWZLlC4lrLO4CVv1GwR7qA.png)





![](https://cdn-images-1.medium.com/max/800/1*khnga22ldJKOZ2z45Srh8A.png)





![](https://cdn-images-1.medium.com/max/800/1*N-20rR7YGFXiDSqIeIyOjA.jpeg)

Processing [this picture](https://jmperezperez.com/assets/images/posts/svg-placeholders/pexels-photo-618463-square.jpg) using Primitive, using [10 shapes](https://jmperezperez.com/assets/images/posts/svg-placeholders/pexels-photo-618463-square-10.svg) and [100 shapes](https://jmperezperez.com/assets/images/posts/svg-placeholders/pexels-photo-618463-square-100.svg).







When using 10 shapes the images we start getting a grasp of the original image. In the context of image placeholders there is potential to use this SVG as the placeholder. Actually, the code for the SVG with 10 shapes is really small, around 1030 bytes, which goes down to ~640 bytes when passing the output through SVGO.

<pre name="fb83" id="fb83" class="graf graf--pre graf-after--p"><svg xmlns=”http://www.w3.org/2000/svg" width=”1024" height=”1024"><path fill=”#817c70" d=”M0 0h1024v1024H0z”/><g fill-opacity=”.502"><path fill=”#03020f” d=”M178 994l580 92L402–62"/><path fill=”#f2e2ba” d=”M638 894L614 6l472 440"/><path fill=”#fff8be” d=”M-62 854h300L138–62"/><path fill=”#76c2d9" d=”M410–62L154 530–62 38"/><path fill=”#62b4cf” d=”M1086–2L498–30l484 508"/><path fill=”#010412" d=”M430–2l196 52–76 356"/><path fill=”#eb7d3f” d=”M598 594l488–32–308 520"/><path fill=”#080a18" d=”M198 418l32 304 116–448"/><path fill=”#3f201d” d=”M1086 1062l-344–52 248–148"/><path fill=”#ebd29f” d=”M630 658l-60–372 516 320"/></g></svg></pre>

The images generated with 100 shapes are larger, as expected, weighting ~5kB after SVGO (8kB before). They have a great level of detail with a still small payload. The decision of how many triangles to use will depend largely on the type of image (eg contrast, amount of colours, complexity) and level of detail.

It would be possible to create a script similar to [cpeg-dssim](https://github.com/technopagan/cjpeg-dssim) that tweaks the amount of shapes used until a [structural similarity](https://en.wikipedia.org/wiki/Structural_similarity) threshold is met (or a maximum number of shapes in the worst case).

These resulting SVGs are great also to use as background images. Being size-constrained and vector-based they are a good candidate for hero images and large backgrounds that otherwise would show artifacts.

#### SQIP

In [Tobias’ own words](https://github.com/technopagan/sqip):

> _SQIP is an attempt to find a balance between these two extremes: it makes use of_ [_Primitive_](https://github.com/fogleman/primitive) _to generate a SVG consisting of several simple shapes that approximate the main features visible inside the image, optimizes the SVG using_ [_SVGO_](https://github.com/svg/svgo) _and adds a Gaussian Blur filter to it. This produces a SVG placeholder which weighs in at only ~800–1000 bytes, looks smooth on all screens and provides an visual cue of image contents to come._

The result is similar to using a tiny placeholder image for the blur-up technique (what [Medium](https://medium.com/@jmperezperez/how-medium-does-progressive-image-loading-fd1e4dc1ee3d) and [other sites](https://medium.com/@jmperezperez/more-examples-of-progressive-image-loading-f258be9f440b) do). The difference is that instead of using a bitmap image, eg JPG or WebP, the placeholder is SVG.

If we run SQIP against the original images we’ll get this:







![](https://cdn-images-1.medium.com/max/1200/0*yUY1ZFP27vFYgj_o.png)





![](https://cdn-images-1.medium.com/max/1200/0*DKoZP7DXFvUZJ34E.png)

The output images using SQIP for [the first picture](https://jmperezperez.com/assets/images/posts/svg-placeholders/pexels-photo-281184-square-sqip.svg) and [the second one](https://jmperezperez.com/svg-placeholders/%28/assets/images/posts/svg-placeholders/pexels-photo-618463-square-sqip.svg).







The output SVG is ~900 bytes, and inspecting the code we can spot the `feGaussianBlur` filter applied to the group of shapes:

<pre name="84a1" id="84a1" class="graf graf--pre graf-after--p"><svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" viewBox="0 0 2000 2000">**<filter id="b"><feGaussianBlur stdDeviation="12" /></filter>**<path fill="#817c70" d="M0 0h2000v2000H0z"/><g filter="**url(#b)**" transform="translate(4 4) scale(7.8125)" fill-opacity=".5"><ellipse fill="#000210" rx="1" ry="1" transform="matrix(50.41098 -3.7951 11.14787 148.07886 107 194.6)"/><ellipse fill="#eee3bb" rx="1" ry="1" transform="matrix(-56.38179 17.684 -24.48514 -78.06584 205 110.1)"/><ellipse fill="#fff4bd" rx="1" ry="1" transform="matrix(35.40604 -5.49219 14.85017 95.73337 16.4 123.6)"/><ellipse fill="#79c7db" cx="21" cy="39" rx="65" ry="65"/><ellipse fill="#0c1320" cx="117" cy="38" rx="34" ry="47"/><ellipse fill="#5cb0cd" rx="1" ry="1" transform="matrix(-39.46201 77.24476 -54.56092 -27.87353 219.2 7.9)"/><path fill="#e57339" d="M271 159l-123–16 43 128z"/><ellipse fill="#47332f" cx="214" cy="237" rx="242" ry="19"/></g></svg></pre>

SQIP can also output an image tag with the SVG contents Base 64 encoded:

<pre name="f95f" id="f95f" class="graf graf--pre graf-after--p"><img width="640" height="640" src="example.jpg” alt="Add descriptive alt text" style="background-size: cover; background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAw…<stripped base 64>…PjwvZz48L3N2Zz4=);"></pre>

#### Silhouettes

We just had a look at using SVGs for edges and primitive shapes. Another possibility is to vectorise the images “tracing” them. [Mikael Ainalem](https://twitter.com/mikaelainalem) shared [a codepen](https://codepen.io/ainalem/full/aLKxjm/) a few days ago showing how to use a 2-colour silhouette as a placeholder. The result is really pretty:



![](https://cdn-images-1.medium.com/max/1600/1*r6HbVnBkISCQp_UVKjOJKQ.gif)



The SVGs in this case were hand drawn, but the technique quickly spawned integrations with tools to automate the process.

*   [Gatsby](https://www.gatsbyjs.org/), a static site generator using React supports these traced SVGs now. It uses [a JS PORT of potrace](https://www.npmjs.com/package/potrace) to vectorise the images.





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/8087e75c67b30b1ba1e8beb14f875482?postId=bed1b810ab2c" data-media-id="8087e75c67b30b1ba1e8beb14f875482" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fext_tw_video_thumb%2F923303819420647424%2Fpu%2Fimg%2FjyDM1HG74eizeWsa.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





*   [Craft 3 CMS](https://craftcms.com/), which also added support for silhouettes. It uses [a PHP port of potrace](https://github.com/nystudio107/craft3-imageoptimize/blob/master/src/lib/Potracio.php).





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/1773750892f5339bc189f993979325e4?postId=bed1b810ab2c" data-media-id="1773750892f5339bc189f993979325e4" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fext_tw_video_thumb%2F920673865923223552%2Fpu%2Fimg%2FC1cZ6atAKyNbJ4-X.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





*   [image-trace-loader](https://github.com/EmilTholin/image-trace-loader), a Webpack loader that uses potrace to process the images.





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/f0167ab6188e24a1f90601ae14ff6acc?postId=bed1b810ab2c" data-media-id="f0167ab6188e24a1f90601ae14ff6acc" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F700358486014758913%2F7xRu23tJ_400x400.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





It’s also interesting to see a comparison of the output between Emil’s webpack loader (based on potrace) and Mikael’s hand-drawn SVGs.





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/8161aeb53a3e9974301b1cbbf0a9814a?postId=bed1b810ab2c" data-media-id="8161aeb53a3e9974301b1cbbf0a9814a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FDMbLT9bUIAA1yB7.jpg%3Alarge&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





I assume the output generated by potrace is using the default options. However, it’s possible to tweak them. Check [the options for image-trace-loader](https://github.com/EmilTholin/image-trace-loader#options), which are pretty much [the ones passed down to potrace](https://www.npmjs.com/package/potrace#parameters).

### Summary

We have seen different tools and techniques to generate SVGs from images and use them as placeholders. The same way [WebP is a fantastic format for thumbnails](https://medium.com/@jmperezperez/using-webp-to-create-tiny-preview-images-3e9b924f28d6), SVG is also an interesting format to use in placeholders. We can control the level of detail (and thus, size), it’s highly compressible and easy to manipulate with CSS and JS.

#### Extra Resources

This post made it to [the top of Hacker News](https://news.ycombinator.com/item?id=15696596). I’m very grateful for that, and for all the links to other resources that have been shared in the comments on that page. Here are a few of them!

*   [Geometrize](https://github.com/Tw1ddle/geometrize-haxe) is a port of Primitive written in Haxe. There is also [a JS implementation](https://github.com/Tw1ddle/geometrize-haxe-web) that you can try out directly [on your browser](http://www.samcodes.co.uk/project/geometrize-haxe-web/).
*   [Primitive.js](https://github.com/ondras/primitive.js), which is a port of Primitive in JS. Also, [primitive.nextgen](https://github.com/cielito-lindo-productions/primitive.nextgen), which is a port of the Primitive desktop app using Primitive.js and Electron.
*   There are a couple of Twitter accounts where you can see examples of images generated with Primitive and Geometrize. Check out [@PrimitivePic](https://twitter.com/PrimitivePic) and [@Geometrizer](https://twitter.com/Geometrizer).
*   [imagetracerjs](https://github.com/jankovicsandras/imagetracerjs), which is a raster image tracer and vectorizer written in JavaScript. There are also ports for [Java](https://github.com/jankovicsandras/imagetracerjava) and [Android](https://github.com/jankovicsandras/imagetracerandroid).











* * *







### Related Posts

If you have enjoyed this post, check out these other posts I have written about techniques loading images:

[**How Medium does progressive image loading**  
_Recently, I was browsing a post on Medium and I spotted a nice image loading effect. First, load a small blurry image…_medium.com](https://medium.com/@jmperezperez/how-medium-does-progressive-image-loading-fd1e4dc1ee3d "https://medium.com/@jmperezperez/how-medium-does-progressive-image-loading-fd1e4dc1ee3d")[](https://medium.com/@jmperezperez/how-medium-does-progressive-image-loading-fd1e4dc1ee3d)

[**Using WebP to create tiny preview images**  
_Following with the image optimization topic, I am going to have a deeper look to Facebook’s technique to create preview…_medium.com](https://medium.com/@jmperezperez/using-webp-to-create-tiny-preview-images-3e9b924f28d6 "https://medium.com/@jmperezperez/using-webp-to-create-tiny-preview-images-3e9b924f28d6")[](https://medium.com/@jmperezperez/using-webp-to-create-tiny-preview-images-3e9b924f28d6)

[**More examples of Progressive Image Loading**  
_In a past post I dissected a technique used by Medium to display images, transitioning from a blurry image to the final…_medium.com](https://medium.com/@jmperezperez/more-examples-of-progressive-image-loading-f258be9f440b "https://medium.com/@jmperezperez/more-examples-of-progressive-image-loading-f258be9f440b")[](https://medium.com/@jmperezperez/more-examples-of-progressive-image-loading-f258be9f440b)











* * *







You can read more of my articles on [jmperezperez.com](https://jmperezperez.com/svg-placeholders/).








