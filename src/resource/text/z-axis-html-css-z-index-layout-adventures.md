---
author: Daniel Robinson
authorTwitter: https://twitter.com/danztweet
authorFacebook: https://facebook.com/10155838031250454
title: "HTML/CSS: Z-axis Adventures"
subTitle: "Let’s jump straight to exploration and adventure...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*4sV2vVFkeY-A9ZIZh_AUtw.png
url: https://medium.freecodecamp.org/z-axis-html-css-z-index-layout-adventures-2419cefdc2ed
id: z-axis-html-css-z-index-layout-adventures-2419cefdc2ed
date: 2016-04-05T20:17:29.178Z
tags: [
  "CSS",
  "Design",
  "Web Development",
  "Programming",
  "Web Design"
]
---
# HTML/CSS: Z-axis Adventures



![](https://cdn-images-1.medium.com/max/1600/1*4sV2vVFkeY-A9ZIZh_AUtw.png)



Let’s jump straight to exploration and adventure.

We start with three circles: each is a div filled in with “█” characters (ink blotches), so we can study the ordering of a divs contents separate from backgrounds and borders. The starting HTML looks like:

<pre name="26ca" id="26ca" class="graf graf--pre graf-after--p"><body>  
   
 ██████<br/>██████<br/>██████<br/>██████<br/>██████  
   
   
 ██████<br/>██████<br/>██████<br/>██████<br/>██████  
   
   
 ██████<br/>██████<br/>██████<br/>██████<br/>██████  
   
</body></pre>

And the CSS:

<pre name="0236" id="0236" class="graf graf--pre graf-after--p">.circle {  
 width: 72px;  
 height: 72px;  
 overflow: hidden;  
 line-height: 16px;  
 border-radius: 100%;  
 box-sizing: border-box;  
}</pre>

<pre name="a94d" id="a94d" class="graf graf--pre graf-after--pre">#one {  
 margin-left: 27px;  
 color: red;  
}</pre>

<pre name="a325" id="a325" class="graf graf--pre graf-after--pre">#two {  
 margin-top: -36px;  
 color: blue;  
}</pre>

<pre name="4723" id="4723" class="graf graf--pre graf-after--pre">#three {  
 margin-top: -72px;  
 margin-left: 56px;  
 color: green;  
}</pre>

This HTML/CSS produces the first image above. Three circles overlapping in the order they were defined. Good. Let’s add some borders:

<pre name="b807" id="b807" class="graf graf--pre graf-after--p">div {  
   border: 6px solid black;  
}</pre>



![](https://cdn-images-1.medium.com/max/1600/1*4QtuH0h-Ljw7M1RQ8wu3qw.png)

Borders are at the back with the contents stacked in the front.



Perhaps this surprises you. The borders are behind even though the contents stay in front. Are the borders stacked as well? A touch of colour:

<pre name="cc6d" id="cc6d" class="graf graf--pre graf-after--p">#two {  
  border-color: grey;  
}</pre>

<pre name="4988" id="4988" class="graf graf--pre graf-after--pre">#three {  
  border-color: white;  
}</pre>



![](https://cdn-images-1.medium.com/max/1600/1*dkIamc39EE8YDonh5o42rg.png)

The border stack order is the same as the content stack order, but independent.



Yes, the order of divs in the HTML decides the order of the borders with respect to each other, and the contents with respect to each other, but the order between borders and contents is: borders go behind contents.

Here are plunkers for the examples so far: [start](https://plnkr.co/edit/osQgt6?p=preview), [black borders](https://plnkr.co/edit/THwgYG?p=preview), [colored borders](https://plnkr.co/edit/ZHSxBZ?p=preview).

So far, the three div’s have had the default type of positioning: static. Let’s “position” them (full code in the [plunker](https://plnkr.co/edit/REXUce?p=preview)):

<pre name="2d6d" id="2d6d" class="graf graf--pre graf-after--p">div {  
   border: 6px solid black;  
   position: relative;  
}</pre>



![](https://cdn-images-1.medium.com/max/1600/1*kd0BLK2Us_BPcU3EHabYTA.png)

Just when you’d gotten your head around borders being ‘separate’?



Ok, so ‘positioned’ elements (position value ≠ static) get stacked together: contents, borders and all. Next experiment! ([plunker](https://plnkr.co/edit/REXUce?p=preview)):

<pre name="0ed5" id="0ed5" class="graf graf--pre graf-after--p">div {  
   border: 6px solid black;  
}</pre>

<pre name="303b" id="303b" class="graf graf--pre graf-after--pre">#one {  
 position: relative; /* just position the first div */  
}</pre>



![](https://cdn-images-1.medium.com/max/1600/1*GmYGkz2bH8nrsZTxnt8u2Q.png)

Red circle is ‘positioned’, the others are not. Positioned elements are the ‘highest’.



Right, so positioned elements go in front of un-positioned elements. Ordering solely based on layout properties has a number of cases. Here’s another ([plunker](https://plnkr.co/edit/vpp2zN?p=preview)):

<pre name="00bb" id="00bb" class="graf graf--pre graf-after--p">#one {  
 margin-left: 24px;  
 color: red;  
}</pre>

<pre name="f647" id="f647" class="graf graf--pre graf-after--pre">#two {  
 margin-top: -36px;  
 margin-right: -20px;  
 border-color: grey;  
 color: blue;  
 float: left;  /* the important part */  
}</pre>

<pre name="8701" id="8701" class="graf graf--pre graf-after--pre">#three {  
 margin-top: -36px;  
 border-color: white;  
 color :green;  
}</pre>



![](https://cdn-images-1.medium.com/max/1600/1*sx6ACHb-VPoNYIEZOEdvhA.png)



Here, the blue circle has been floated left, the other two circles are un-positioned. Both div two’s border and its contents sit together between the other circles respective borders and contents. A floated element acts much like a positioned element, where it’s border and contents are positioned together, except it is not on top.

Let’s skip the content+border act for a moment and take a look at nested HTML. [This codepen](http://codepen.io/designerzone/pen/YXVwGm) jumps us forward nicely.

<pre name="c496" id="c496" class="graf graf--pre graf-after--p">  
   
   
    
  
</pre>

<pre name="5257" id="5257" class="graf graf--pre graf-after--pre">(The CSS solely set’s background colours, box sizes, and margins)</pre>



![](https://cdn-images-1.medium.com/max/1600/1*9VUyaplfAE5fM04gupDcZw.png)



As one might expect, nested HTML creates stacking with respect to the parent element.

Let’s focus on the nested portion — reintroducing borders and contents, but also throw in backgrounds to the mix. I will explain the diagram below but see the [plunker](https://plnkr.co/edit/rbKxnq?p=preview) for the complete HTML/CSS:



![](https://cdn-images-1.medium.com/max/1600/1*hcSIGZHWK7Tm7dpKTDrzrA.png)



Our circle divs from before have become nested squares. The yellow is the background of the outer div, and the crimson on the bottom right is the background of the inner inner div (div three).

The second div has no background. Overflow is allowed. In a nested context with no-positioning, the borders are at the back in nest order.

We also see that the backgrounds are sent to the back with them and are also in nest order: the crimson is behind the blue but above the yellow.

The first line of green chars has been removed to show you this effect. If we add positioning to this, we get a similar effect as we did with the circles — all this border/background sinking goes away ([plunker](https://plnkr.co/edit/zChij4?p=preview)):

<pre name="7c6e" id="7c6e" class="graf graf--pre graf-after--p">div {  
  position: relative;  
}</pre>



![](https://cdn-images-1.medium.com/max/1600/1*d1Nv5qZ-zF1ZsRTK2nKsRg.png)



In a nested context with positioning, children go above parents: borders, backgrounds, contents and all.

If we combine all of the cases so far, we can generate most of the element ordering scenarios with just positions, floats & HTML structure. Well, that is, at least visually. What about when it comes to event capturing? Consider the following:

<pre name="ba41" id="ba41" class="graf graf--pre graf-after--p">  
  
</pre>

<pre name="78a2" id="78a2" class="graf graf--pre graf-after--pre">div {  /* all divs overlap 100% */  
  position: absolute;   
  top: 0;  
  bottom: 0;  
  left: 0;  
  right: 0;   
  background-color: white;  
}</pre>

<pre name="04b7" id="04b7" class="graf graf--pre graf-after--pre">#three {   
  background-color: lightblue;  
}</pre>

<pre name="ef05" id="ef05" class="graf graf--pre graf-after--pre">document.getElementById(‘one’)  
  .addEventListener(‘mouseover’,logTarget)</pre>

<pre name="fc76" id="fc76" class="graf graf--pre graf-after--pre">document.getElementById(‘two’)  
  .addEventListener(‘mouseover’,logTarget)</pre>

<pre name="4ec6" id="4ec6" class="graf graf--pre graf-after--pre">document.getElementById(‘three’)  
  .addEventListener(‘mouseover’,logTarget)</pre>

<pre name="72ee" id="72ee" class="graf graf--pre graf-after--pre">function logTarget(e){   
  console.log(e.target);  
}</pre>

If you move your mouse into the browser window, what _mouseover_ events do you expect will fire?

What about if we update the HTML like follows?

<pre name="6864" id="6864" class="graf graf--pre graf-after--p">  
    
     
    
</pre>

Yes. Exactly. With the in-series HTML you get one event. With the nested you get three*. Despite the fact that visually, the colored third div completely covers the other two divs in each case, for event capturing it doesn’t in the nested case. See the plunkers [here](https://plnkr.co/edit/Y7SMTtHqm2lga0to5g84?p=preview) and [here](https://plnkr.co/edit/Rvb0zaEvCCQO87BRdjeb?p=preview).

*Three events with a target of the third div — it’s still on top, so the mouseover event target applies to it.

So far we’ve explored the natural stacking order — the order purely as defined by HTML structure and standard layout properties such as position and float.

We’ve seen that for element contents floated < un-positioned < positioned. However un-positioned elements have their borders/backgrounds ordered right at the back, while floated and positioned elements bring theirs along for the ride. We’ve also considered ordering both visually and with respect to event capturing.

What about breaking out of the natural stacking order using z-index?











* * *







The CSS z-index property affects positioned elements. We have seen that positioned elements come to the front and bring along all their borders and backgrounds, but other than that they were ordered in the order they were defined in HTML. The z-index simply provides a way of breaking out of that HTML ordering context. So the obvious first example ([plunker](https://plnkr.co/edit/EPHDqI?p=preview)):

<pre name="c2ef" id="c2ef" class="graf graf--pre graf-after--p">div {  
 width: 80px;  
 height: 80px;  
 position: relative;  
 line-height: 16px;  
 box-sizing: border-box;  
}</pre>

<pre name="7180" id="7180" class="graf graf--pre graf-after--pre">#one {  
 background-color: red;  
 z-index: 1;  
}</pre>

<pre name="a85e" id="a85e" class="graf graf--pre graf-after--pre">#two {  
 background-color: blue;  
 top: -80px;  
}</pre>

<pre name="c243" id="c243" class="graf graf--pre graf-after--pre"><body>  
    
    
</body></pre>



![](https://cdn-images-1.medium.com/max/1600/1*suvCQAZlPW1zP7gM9bgJ9g.png)

We’d normally see the blue box since it was defined second, but the red one has a z-index of 1;



Next, it is similar with the nested case, except you must apply a negative to the child element (we’ll take a look at why shortly) for the same ([plunker](https://plnkr.co/edit/UQmeiD?p=preview)):

<pre name="0ec4" id="0ec4" class="graf graf--pre graf-after--p">.box {  
 position: relative;  
 width: 80px;  
 height: 80px;  
}</pre>

<pre name="03fe" id="03fe" class="graf graf--pre graf-after--pre">#one {  
 background-color: red;  
}</pre>

<pre name="4638" id="4638" class="graf graf--pre graf-after--pre">#two {  
 background-color: blue;  
 z-index: -1;  
}  
 </pre>

<pre name="6a23" id="6a23" class="graf graf--pre graf-after--pre">  
    
</pre>



![](https://cdn-images-1.medium.com/max/1600/1*suvCQAZlPW1zP7gM9bgJ9g.png)

#two has been sunk behind #one



If we add a z-index to the parent as well though:

<pre name="41c5" id="41c5" class="graf graf--pre graf-after--p">#one {  
 background-color: red;   
 z-index: 1;  
}</pre>

<pre name="20a3" id="20a3" class="graf graf--pre graf-after--pre">#two {  
 background-color: blue;  
 z-index: -1;  
}</pre>



![](https://cdn-images-1.medium.com/max/1600/1*De-makXkbdFFGlvBsyI7DQ.png)

Erm huh?



The child’s z-index is “ignored” in this case. This may become clearer with this example ([plunker](https://plnkr.co/edit/9WpdxB?p=preview)):

<pre name="878b" id="878b" class="graf graf--pre graf-after--p">.box {  
 position: absolute;  
 width: 80px;  
 height: 80px;  
}</pre>

<pre name="337c" id="337c" class="graf graf--pre graf-after--pre">#one {  
 background-color: red;  
 z-index: 2;  
}</pre>

<pre name="d3fa" id="d3fa" class="graf graf--pre graf-after--pre">#two {  
 height: 60px;  
 width: 60px;  
 background-color: green;  
 z-index: 1;  
}</pre>

<pre name="f0ed" id="f0ed" class="graf graf--pre graf-after--pre">#three {   
 background-color: blue;  
}</pre>

<pre name="1fe6" id="1fe6" class="graf graf--pre graf-after--pre">  
   
   
</pre>



![](https://cdn-images-1.medium.com/max/1600/1*F3tvflSb3-9-Z_BZlQ6h7A.png)



The nesting with the use of the z-index creates a new stacking context. So #one is at ‘2’ with respect to it’s sibling elements, while #two & #three are at ‘1’ and ‘0’ respectively with respect to each other, inside #one.

This can cause confusion in situations like so ([plunker](https://plnkr.co/edit/e27KLU?p=preview)):

<pre name="3eac" id="3eac" class="graf graf--pre graf-after--p">.box {  
 position: absolute;  
 width: 80px;  
 height: 80px;  
}</pre>

<pre name="58e5" id="58e5" class="graf graf--pre graf-after--pre">#one {  
 background-color: red;  
 z-index: 2;  
}</pre>

<pre name="e3b2" id="e3b2" class="graf graf--pre graf-after--pre">#two {  
 width: 100px;  
 position: relative;  
 z-index: 4;  
}</pre>

<pre name="3d55" id="3d55" class="graf graf--pre graf-after--pre">#three {   
 margin-top: 80px;  
 background-color: blue;  
 z-index: 2;  
}  

  
    
    Text inside two  
    Text inside two  
    Text inside two  
    Text inside two  
    Text inside two  
    Text inside two  
    Text inside two  
    Text inside two  
    
  
  
</pre>



![](https://cdn-images-1.medium.com/max/1600/1*Fv8n5cLuCqfWx0q--Vpwbw.png)



Despite the text inside two having a z-index of 4, it is still behind the blue square which has a z-index of 2\. Why? Because it is a z-index of 4, inside a stacking context which has a z-index 0f 2\. Then because the third div is defined after the first div and is at z-index 2 also, it goes on top. Of course, if we tweak it to have a z-index to 1 it goes underneath([plunker](https://plnkr.co/edit/3LsRJv?p=preview)):

<pre name="90ce" id="90ce" class="graf graf--pre graf-after--p">#three {   
 margin-top: 80px;  
 background-color: blue;  
 z-index: 1;  /* was 2, now 1 */  
}</pre>



![](https://cdn-images-1.medium.com/max/1600/1*GJI27WmR4AFVuHqWaoSoPA.png)



Z-index isn’t the only property to create a new context on the parent. Opacity is another :

<pre name="981e" id="981e" class="graf graf--pre graf-after--p">#one {  
 background-color: red;  
 opacity: 0.99;  
}</pre>

<pre name="4903" id="4903" class="graf graf--pre graf-after--pre">#two {  
 width: 100px;  
 position: relative;  
 z-index: 1;  
}</pre>

<pre name="7b99" id="7b99" class="graf graf--pre graf-after--pre">#three {   
 margin-top: 80px;  
 background-color: blue;  
}</pre>

<pre name="9a68" id="9a68" class="graf graf--pre graf-after--pre">(same HTML as above)</pre>



![](https://cdn-images-1.medium.com/max/1600/1*ePO87qREtadiT3bIrsH_ew.png)



At this point, [http://philipwalton.com/articles/what-no-one-told-you-about-z-index/](http://philipwalton.com/articles/what-no-one-told-you-about-z-index/) should start to be quite clear.

[https://www.smashingmagazine.com/2009/09/the-z-index-css-property-a-comprehensive-look/](https://www.smashingmagazine.com/2009/09/the-z-index-css-property-a-comprehensive-look/) is also a good read.

Because there is such a massive interplay of rules going on, stack order can get a little unwieldy, but it is true what that first article says: the rules aren’t that hard to understand, they just aren’t necessarily what one might expect.

The creation of new stack contexts is something that a developer must work with to get the desired outcome in vertical stacking situations.

I hope you’ve had an adventure scrolling up and down the layers of this article.








