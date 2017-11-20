---
author: Artem Syzonenko
title: "𝔹𝕝𝕦𝕣𝕣𝕖𝕕 𝕀𝕞𝕒𝕘𝕖𝕤 𝔸𝕣𝕖 𝔼𝕧𝕖𝕣𝕪𝕨𝕙𝕖𝕣𝕖"
subTitle: "We didn’t have any problems with image sharpness in the early years of the internet, because we didn’t need to show websites on mobile…"
coverSrc: https://cdn-images-1.medium.com/max/1000/1*QTXhwd9fNvtIK1sJn1yC3w.jpeg
url: https://medium.freecodecamp.org/-898b38a6c0e1
id: -898b38a6c0e1
date: 2017-11-15T14:37:35.884Z
tags: [
  "Web Development",
  "UX",
  "Design",
  "JavaScript",
  "Responsive Design"
]
---
# 𝔹𝕝𝕦𝕣𝕣𝕖𝕕 𝕀𝕞𝕒𝕘𝕖𝕤 𝔸𝕣𝕖 𝔼𝕧𝕖𝕣𝕪𝕨𝕙𝕖𝕣𝕖

We didn’t have any problems with image sharpness in the early years of the internet, because we didn’t need to show websites on mobile devices.

Today we see a tremendous growth in mobile web surfing. So much so that, this year, it has even overtaken traffic on desktops.

Most clients try to create responsive interfaces for their websites so they are easily accessible from any kind of device. And it doesn’t seem strange that many layout developers have started to use

<pre name="de4a" id="de4a" class="graf graf--pre graf-after--p">img {  
    width: 100%;  
    height: auto;  
}</pre>

for their images. So they seamlessly work across any browser window resolution, scaling to the available space.

Conceptually, everything looks good. Designers create nice big images, and developers use those images for every device. In some cases, developers create multiple versions of the same image, so a smaller image is downloaded for mobile screens, and a bigger image for desktops.

Unfortunately, Chrome doesn’t want to resize images in the way that good image editors do. Instead, it out-puts the image with not the same, or similar, sharpness as the initial image.

The main reason for this may be performance. When a webpage has many images, and the device processor is not highly productive, additional image processing could lead to bigger lags in page rendering, so Chrome omit this process as not being crucial for end users.

I will show you some examples using Chrome browser, and then using other browsers. Here is an image, downsized to 1000 px in Photoshop:

![](https://cdn-images-1.medium.com/max/2000/1*QTXhwd9fNvtIK1sJn1yC3w.jpeg)

The same image uploaded in original size and downscaled by the browser. Compare the sharpness of the dog’s eyes.

![](https://cdn-images-1.medium.com/max/2000/1*YUx8q6c4KSZCATS-ExsiUA.png)

Photoshop:

![](https://cdn-images-1.medium.com/max/2000/1*6mlqCoOWR-8rwZ2RDor9Bg.jpeg)

Browser:

![](https://cdn-images-1.medium.com/max/2000/1*KLIqpgYFeQBmaeAC5bm1fg.png)

Things get even worse when you add sharpness in Photoshop after downsizing. But photos are more forgiving in this case, as they typically don’t have many sharp edges. Issues with any vector illustrations saved as .png images are much more noticeable. Frequent case — website logos.

[Asana](https://asana.com/)’s logo, initial file:

![](https://cdn-images-1.medium.com/max/1600/0*TylfzK-hYzN2PM11.png)

Resized in Photoshop:

![](https://cdn-images-1.medium.com/max/1600/1*7Vt6ngwsKpWhfmSQb_SRwA.png)

Rendered in browser:

![](https://cdn-images-1.medium.com/max/1600/1*CtApACCiuIfaG32FPWr8uQ.png)

[Wecan](https://discourse.wekan.io/)’s logo, initial file:

![](https://cdn-images-1.medium.com/max/1600/1*g8_GnmkNWiHHncFtsNdg_A.png)

Resized in Photoshop:

![](https://cdn-images-1.medium.com/max/1600/1*lUiEwguiRH5wrojCU5DELQ.png)

Rendered in browser:

![](https://cdn-images-1.medium.com/max/1600/1*ID-Ag67U4h_Org6GJTOuNg.png)

And couple of additional browser-rendered logos:

![](https://cdn-images-1.medium.com/max/1600/1*DobH7f5-FHMadcES8CQ0pw.png)![](https://cdn-images-1.medium.com/max/1600/1*9ejmr6QnS3vyrz-N5HKP6A.png)

I found the most amusing comparisons of blurred images on UX-related websites. _Smashingmagazine_ [Jobs section](https://jobs.smashingmagazine.com/), in browser:

![](https://cdn-images-1.medium.com/max/1600/1*iX1tniAttwW27vStY3PREQ.png)

In Photoshop:

![](https://cdn-images-1.medium.com/max/1600/1*XWFgJI1j78RVY1KaeDLgRw.png)

[Nielsen Norman Group](https://www.nngroup.com), [Empathy Mapping](http://Empathy%20Mapping) article, rendered graph:

![](https://cdn-images-1.medium.com/max/1600/1*b_IxEqmN8kCjRLwpuDFYSA.png)

Using Photoshop resizing:

![](https://cdn-images-1.medium.com/max/1600/1*mWWlYNARZ7TbbdgCZ4haVg.png)

I must admit that this problem is Chrome-only. IE renders much better; it is noticeable that some thin lines are pixelated, which is fine for text:

![](https://cdn-images-1.medium.com/max/1600/1*4IgQzuhYIj8SEvfPZbDrHw.png)![](https://cdn-images-1.medium.com/max/1600/1*yXxpYBZzFJbglHa3ukz-KA.png)![](https://cdn-images-1.medium.com/max/1600/1*4Qm_LoCrDY8MihtmuYu6uQ.png)

Firefox has good rendering as well; smoothing makes text a little less readable than in IE, but is better for logos:

![](https://cdn-images-1.medium.com/max/1600/1*1Imkn2zFhC082vf9VUGthQ.png)![](https://cdn-images-1.medium.com/max/1600/1*csQrb4MZl1nM4qh5yC_wQQ.png)![](https://cdn-images-1.medium.com/max/1600/1*Z6k-Cd469hjbArgRDPkuIw.png)

What developers should do right now is to turn on webkit auto-sharping property:

<pre name="dd01" id="dd01" class="graf graf--pre graf-after--p"><span class="markup--quote markup--pre-quote is-other" name="anon_a7f57a63fc1a" data-creator-ids="anon">img {  
    image-rendering: -webkit-optimize-contrast;  
}</span></pre>

This is what we would get if it was turned on:

![](https://cdn-images-1.medium.com/max/1600/1*CKPVD5I4ZJIE0z4ijfWkTg.png)![](https://cdn-images-1.medium.com/max/1600/1*ZivzO65R4WCZjNegm5ppFQ.png)![](https://cdn-images-1.medium.com/max/1600/1*oDMeY6Lt36_UY4c4-huIQg.png)

So, before the most popular browser in the world implements a good image down-sampling algorithm, we can use webkit-optimize-contrast property, which allows visitors to our sites to enjoy our photos, discern item details in our online shop, and appreciate readability of our screenshots and diagrams. But be careful, in some cases it can lead to pixelated results.
