---
author: Quincy Larson
authorTwitter: https://twitter.com/ossia
authorFacebook: https://facebook.com/10100956570023241
title: "How to make HTML disappear completely"
subTitle: "We all want to disappear sometimes. HTML elements are no different. Sometimes they want to hide out for a while. Not cease to exist compl..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*VcnMqhkSm-S1cMhlKmg1Aw.jpeg
url: https://medium.freecodecamp.org/how-to-disappear-completely-2f23ddb14835
id: how-to-disappear-completely-2f23ddb14835
date: 2016-10-12T23:03:23.245Z
tags: [
  "Web Development",
  "Halloween",
  "Design",
  "Tech",
  "Startup"
]
---
# How to make HTML disappear completely







![](https://cdn-images-1.medium.com/max/2000/1*VcnMqhkSm-S1cMhlKmg1Aw.jpeg)

PacMan’s ghosts disappear into a kill screen, caused by an integer overflow on the game’s 256th level.







We all want to disappear sometimes. HTML elements are no different. Sometimes they want to hide out for a while. Not cease to exist completely — just keep things on the down-low.

Thankfully, when it comes to making HTML elements disappear, CSS offers a variety of options.

### The CSS of becoming invisible

Let’s take an HTML element with the class “ghost” and hide it.

<pre name="0049" id="0049" class="graf graf--pre graf-after--p">//index.html</pre>

<pre name="b069" id="b069" class="graf graf--pre graf-after--pre">  
  <p>I’m friendly!</p>  
</pre>

<pre name="53c0" id="53c0" class="graf graf--pre graf-after--pre">//style.css</pre>

<pre name="cb57" id="cb57" class="graf graf--pre graf-after--pre">.ghost {</pre>

<pre name="2d31" id="2d31" class="graf graf--pre graf-after--pre">}</pre>

### Dead pixels

By default, HTML elements are visible. Their default **visibility** CSS property is **visible**, but you can flip the script and go:

<pre name="3c6e" id="3c6e" class="graf graf--pre graf-after--p">.ghost {</pre>

<pre name="fad1" id="fad1" class="graf graf--pre graf-after--pre">  visibility: hidden;</pre>

<pre name="358e" id="358e" class="graf graf--pre graf-after--pre">}</pre>

Now the ghost is hidden, but it will still take up space on the page.

### Without a trace

If you want to make something invisible, and also not take up any space, You can also use the CSS **display** property.

Developers usually use the display property to dictate whether an HTML element should be displayed as a block element or an inline element, but it can also hide the element completely:

<pre name="5392" id="5392" class="graf graf--pre graf-after--p">.ghost {</pre>

<pre name="5485" id="5485" class="graf graf--pre graf-after--pre">  display: none;</pre>

<pre name="138a" id="138a" class="graf graf--pre graf-after--pre">}</pre>

And unlike **visibility: hidden**, an element hidden with **display: none** won’t take up any space on the page.

### See-through souls







![](https://cdn-images-1.medium.com/max/2000/1*MkwKGqFy4kJKOFaeZtPpRw.png)

Going, going, gone.







You can also make an element so transparent that it’s invisible using the **opacity** CSS property.

<pre name="69ca" id="69ca" class="graf graf--pre graf-after--p">.ghost {</pre>

<pre name="b143" id="b143" class="graf graf--pre graf-after--pre">  opacity: 0.0;</pre>

<pre name="cad6" id="cad6" class="graf graf--pre graf-after--pre">}</pre>

Like **visibility: hidden, opacity: 0.0** will leave an empty space where the HTML element is. Remember, with all of these techniques, the element remains a part of the DOM — it’s just not visible to normal users in their browsers.

### Run away! Run far, far away!

One final way you can hide an element is just to move it so far off the page that you would need to zoom out tremendously to see it.

To do this, first you use the **position** CSS property to give the element an **absolute** position on the page (as opposed to **relative** to other HTML elements).

Then you can move the element off the page an arbitrarily large number of pixels:

<pre name="d8fc" id="d8fc" class="graf graf--pre graf-after--p">.ghost {  
  position: absolute;  
  left: -999999px;  
}</pre>

Why would you do this? Well, it’s good for the accessibility of your content. Screen readers — which visually impaired people use to browse the internet — can pick up this content, and everyone else won’t know the content is there.

For best results, position these invisible elements to the left instead of the top or bottom, which can confuse screen readers.

### Being a ghost for Halloween

When you put all 4 of these techniques together, you’ve got a pretty cool [low-effort Halloween costume](https://www.freecodecamp.com/shop):



![](https://cdn-images-1.medium.com/max/1600/1*RkA6GofBuf0znAVmv3quVA.jpeg)



I made this with the help of Austin-based designer and camper Wes Searan.

You can [pick one up](https://www.freecodecamp.com/shop) through the end of this weekend — in mens and fitted women’s sizes.











* * *







_If you liked this, click the💚 below so other people will see this here on Medium._



![](https://cdn-images-1.medium.com/max/1600/1*31StU5CNIHk8VDkSHWO6nA.gif)










