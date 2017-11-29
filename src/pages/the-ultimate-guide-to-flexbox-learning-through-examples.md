---
author: Ohans Emmanuel
authorTwitter: https://twitter.com/OhansEmmanuel
authorFacebook: none
title: "The Ultimate Guide to Flexbox — Learning Through Examples"
subTitle: "What’s the best way to understand Flexbox? Learn the fundamentals, then build lots of stuff. And that’s exactly what we’re going to do in..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*9vcCT6S_dFJqR6yed6Vmqw.png
url: https://medium.freecodecamp.org/the-ultimate-guide-to-flexbox-learning-through-examples-8c90248d4676
id: the-ultimate-guide-to-flexbox-learning-through-examples-8c90248d4676
date: 2017-09-12T04:53:49.566Z
tags: [
  "CSS",
  "Flexbox",
  "Design",
  "UI",
  "Web Development"
]
---
# The Ultimate Guide to Flexbox — Learning Through Examples







![](https://cdn-images-1.medium.com/max/2000/1*9vcCT6S_dFJqR6yed6Vmqw.png)

Note — this is a long read, so if you want, you can download this article and read it offline [here](https://payhip.com/b/YVGf).







What’s the best way to understand **Flexbox**? Learn the fundamentals, then build lots of stuff. And that’s exactly what we’re going to do in this article.

### A few things to note

*   This article was written with intermediate developers in mind, and assumes you already know a bit about Flexbox. But…
*   If you know some CSS, but don’t know Flexbox at all, [I wrote a comprehensive guide here (free article, 46 minute read)](https://medium.freecodecamp.org/understanding-flexbox-everything-you-need-to-know-b4013d4dc9af).
*   And if you don’t know CSS very well, I recommend taking my [Complete (practical) Introduction to CSS (paid course with 74 lessons)](http://bit.ly/learn_css).
*   You don’t have to follow the examples in this article in the order listed here.
*   Flexbox is only a layout technique. Real world projects require more than layouts.
*   When you see a notation such as `div.ohans` it refers to a div with a class name of `ohans`

### Example 1: How to Make a Photo Gallery with Flexbox

Making photos run in rows and columns with Flexbox is easier than most persons perceive.

Consider a simple markup, like so:

<pre name="2e78" id="2e78" class="graf graf--pre graf-after--p"><main class="gallery">  
  <img src="/sample.jpg">  
  <img src="/sample.jpg">  
  <img src="/sample.jpg">  
  <img src="/sample.jpg">  
  <img src="/sample.jpg">  
  <img src="/sample.jpg">  
  <img src="/sample.jpg">  
  <img src="/sample.jpg">  
  <img src="/sample.jpg">  
  <img src="/sample.jpg">  
</main></pre>

We have 10 images within a `main.gallery`.

Assume the `main.gallery` was styled to cover the available screen.

<pre name="3453" id="3453" class="graf graf--pre graf-after--p">.gallery {  
   min-height: 100vh  
}</pre>

#### A Quick Note on Images

By default, images are `inline-block` elements. They have a width and height. They will remain on a line except when constrained by size such as the images being too big to fit on a line.

#### The Starting point

Putting everything together, the result of all the markup and style above is this:



![](https://cdn-images-1.medium.com/max/1600/1*IRASubBbG5GbAHikr-evyg.png)

10 images with their width and height declarations intact. They fall unto the next line when appropriate. Obedient lads ;)



Now, get Flexbox on the scene:

<pre name="a464" id="a464" class="graf graf--pre graf-after--p">.gallery {  
    display: flex  
 }</pre>

At this point, the default behavior of the images has altered. They go from being `inline-block` elements to being `flex-items.`

As a result of the Flexbox context initiated within `.gallery`, the images will now be squashed unto a single line. Plus, they would stretch along the vertical like so:



![](https://cdn-images-1.medium.com/max/1600/1*_8rwRUm6kC8W3gSRkiH22w.png)

The Images now stretch along the vertical, and are squashed unto one line. Nothing’s uglier :(



This is a result of the Flexbox default behavior:

1.  Squash all child elements unto a single line. Do not wrap the elements.

This is bad for a gallery, so we change this behavior like so:

<pre name="1b87" id="1b87" class="graf graf--pre graf-after--p">.gallery {  
    flex-wrap: wrap  
}</pre>

This will now wrap the elements and break them unto multiple lines when appropriate.



![](https://cdn-images-1.medium.com/max/1600/1*d7D8dLBz3BE33kzN596xbg.png)

With the wrap value altered, the images now wrap unto the next line



2\. The images now wrap unto the next line. But they still **stretch** along the vertical. We certainly do **not** want that behavior as it distorts the images.

The `stretch` behavior is due to the default `align-items` value on `flex` containers.

<pre name="4e8d" id="4e8d" class="graf graf--pre graf-after--p">align-items: stretch</pre>

Let’s change that:

<pre name="4eea" id="4eea" class="graf graf--pre graf-after--p">.gallery {  
  ...  
  align-items: flex-start  
}</pre>

This will keep the images from stretching. They’ll assume their default `width` and `height` values.

They will also align to the start of the vertical axis as seen below:



![](https://cdn-images-1.medium.com/max/1600/1*TLUyhn66PTXqX8aPxM1Vww.png)

Now we have images that aren’t distorted. This is pretty much where we began before introducing Flexbox.



Now we have our Flexbox powered gallery.

#### The Advantage of Using Flexbox

At this point there’s not much advantage to using Flexbox. We have the same look we had before initiating the **Flexbox** model.

Apart from getting a responsive gallery for free, the other advantages of using Flexbox come from the alignment options it brings.

Remember that the flex container, `.gallery` assumes the following property values.`flex-direction: row` `justify-content: flex-start` and `align-items: flex-start.`

The layout of the gallery can be switched in an instant by toying with the default values as shown below:

<pre name="c3d2" id="c3d2" class="graf graf--pre graf-after--p">.gallery {  
   ...  
   justify-content:center;  
}</pre>







![](https://cdn-images-1.medium.com/max/2000/1*sjXOHCfoZo9bl-2RnkPfig.png)

The images are now perfectly centered along the horizontal.







As seen in the image above, this will align the images to the center, along the horizontal:

<pre name="66ac" id="66ac" class="graf graf--pre graf-after--p">.gallery {  
   ...  
   justify-content:center;  
   align-items: center;  
}</pre>







![](https://cdn-images-1.medium.com/max/2000/1*WLRrDlQwF8NyomqsBTr5cQ.png)

Taking steps further, we have the images perfectly aligned to the center (horizontally and vertically)







As seen in the image above, this align the images both horizontally and vertically to the center of `.gallery`

With Flexbox comes a lot of alignment options. Feel free to toy with some more alignment options as you deem fit.

You may view the actual Flexbox gallery in this [CodePen](https://codepen.io/ohansemmanuel/full/dzgLLw/).

### Example 2: How to Build Cards with Flexbox

Cards have become popular on the internet. Google, Twitter, Pinterest, and it seems, everyone else is moving to cards.

A Card is a UI design pattern that groups related information in a flexible-size container. It visually resembles a playing card.

There are many good uses for cards. A common one is the infamous pricing grid.



![](https://cdn-images-1.medium.com/max/1600/1*DKu7xTy3g42mCbqhYsTvQg.png)

sample pricing grid mockup



Let’s build one.

#### The Markup

Each card will assume a markup like below:

<pre name="85d0" id="85d0" class="graf graf--pre graf-after--p">  
  <header>  
  </header></pre>

<pre name="ba5d" id="ba5d" class="graf graf--pre graf-after--pre">  <ul>  
    <li></li>  
    <li></li>  
    <li></li>  
  </ul>  
  <button></button>  
</pre>

There will be at least 3 cards. Wrap the cards in a `div.cards`

<pre name="5e61" id="5e61" class="graf graf--pre graf-after--p"></pre>

Now we’ve got a parent element.

For this example, the parent element has been set up to fill the entire viewport.

<pre name="ee4a" id="ee4a" class="graf graf--pre graf-after--p">.cards {  
   min-height: 100vh  
}</pre>

#### Set up Flexbox

The following code block will initiate a Flexbox formatting context within `.cards`

<pre name="149c" id="149c" class="graf graf--pre graf-after--p">.cards {  
  display: flex;  
  flex-wrap: wrap  
}</pre>

If you remember the last example, `flex-wrap` will allow for the `flex-items` to break onto another line.

This happens when the child elements cannot fit into the parent element. This is due to the larger computed width size of the combined child elements.

Go ahead and give the `.card` an initial width.

Using Flexbox:

<pre name="e05a" id="e05a" class="graf graf--pre graf-after--p">.card {  
  flex: 0 0 250px  
}</pre>

This will set the `flex-grow` and `flex-shrink` values to `0`. The `flex-basis` value will be set to `250px`

At this point, the cards will be aligned to the start of the page. They will also stretch along the vertical.



![](https://cdn-images-1.medium.com/max/1600/1*CffwUsAWKxQFLyjukU7l3w.png)

cards aligned to the start of the page



In some cases this may be ideal for your use case. But for most cases, it won’t.

#### The Default Behavior of Flex Containers

The result above is due to the default behavior of flex containers.

The cards begin at the start of the page on the `top left` because `justify-content` is set to the value `flex-start` .

Also, the cards stretch to fill the entire height of the parent element because `align-items` is set to `stretch` by default.

#### Altering the default values

We can achieve pretty impressive results by changing the default values that Flexbox offers.

See below:



![](https://cdn-images-1.medium.com/max/1600/1*VGCUskScbaTT7IXyco1O5g.png)

align-items: flex-start; justify-content: center





![](https://cdn-images-1.medium.com/max/1600/1*Jyi81pceIfls1D9XwN91Bw.png)

align-items: flex-end; justify-content: center





![](https://cdn-images-1.medium.com/max/1600/1*8_-5cyCh-wY-ogscK5ct3w.png)

align-items: center; justify-content: center



To view the final project, see this [CodePen](https://codepen.io/ohansemmanuel/full/Ljqdpa/).

### Example 3: How to Build Grids with Flexbox

Entire CSS frameworks are built on the concept to be discussed in this example. It is pretty important stuff.

#### What is a Grid?

A grid is a series of intersecting straight vertical and horizontal guide lines used to structure content.



![](https://cdn-images-1.medium.com/max/1600/1*xvY4HjLZYY9P0eHiJGItRA.png)

a series of intersecting straight (vertical, horizontal) guide lines



If you’re familiar with CSS frameworks such as Bootstrap, then you sure have used grids before now.

Your mileage may differ, but we will consider varying grid types in this example.

Let’s start with the first one,**basic grids**.

#### Basic Grids



![](https://cdn-images-1.medium.com/max/1600/1*a83vbIAnckQ-a_5KtYg8oQ.png)

A set of basic grids each having equally spaced columns



These are grids with the following characteristics:

*   The grid cells should be spaced equally and expand to fit the entire row.
*   The grid cells should be of equal heights.

It is easy to achieve this with Flexbox. Consider the markup below:

<pre name="65fd" id="65fd" class="graf graf--pre graf-after--p">  
  1  
</pre>

Each `.row` will be its own flex container.

Each element within `.row` then becomes a flex item. All flex items distribute evenly across the row.

By design, it shouldn’t matter whether we have 3 child elements

<pre name="659c" id="659c" class="graf graf--pre graf-after--p">  
  1/3  
  1/3  
  1/3  
</pre>

Or 6 child elements

<pre name="0376" id="0376" class="graf graf--pre graf-after--p">  
  1/6  
  1/6  
  1/6  
  1/6  
  1/6  
  1/6  
</pre>

Or 12 elements

<pre name="9a02" id="9a02" class="graf graf--pre graf-after--p">  
  1/12  
  1/12  
  1/12  
  1/12  
  1/12  
  1/12  
  1/12  
  1/12  
  1/12  
  1/12  
  1/12  
  1/12  
</pre>

#### The Solution

There are just two steps to doing this.

1.  Initiate a Flexbox formatting context:

<pre name="c8df" id="c8df" class="graf graf--pre graf-after--li">.row {  
   display: flex;  
}</pre>

2\. Have each `flex-item` expand to fit the entire row in equal proportions:

<pre name="9256" id="9256" class="graf graf--pre graf-after--p">.row_cell {  
   flex: 1  
}</pre>

And that’s it.

#### The Solution Explained.

<pre name="2d3e" id="2d3e" class="graf graf--pre graf-after--h4">flex: 1</pre>

`flex` is a shorthand property name for setting three distinct Flexbox properties, the `flex-grow` , `flex-shrink` and `flex-basis` properties, in the order stated.

`flex: 1` only has the value `1` set. This value is attributed to the `flex-grow` property.

The `flex-shrink` and `flex-basis` properties will be set to `1` and `0`.

<pre name="9965" id="9965" class="graf graf--pre graf-after--p">flex: 1  === flex: 1 1 0</pre>

#### Grid Cells with Specific Sizes

Sometimes what you want isn’t a grid row of equal cells.

You may want cells that are double the other cells, or any fraction for that matter.



![](https://cdn-images-1.medium.com/max/1600/1*lqYgocfbkOIU6OJmGnEn_Q.png)

grid of row cells that are 2x or 3x the other cells.



The solution is pretty simple.

To these specific grid cells, add a modifier class like so:

    .row_cell--2 

Have the class included in the markup. See the first child `div` in the markup below:

<pre name="4afc" id="4afc" class="graf graf--pre graf-after--p">  
  2x  
  1/3  
  1/3  
</pre>

The cell with the class `.row__cell--2` will be 2 times the default cells.

For a cell that takes up 3 times the available space:

`.row_cell--3 {  
 flex: 3  
}`

#### Grid Cells with Specific Alignments

Thanks to Flexbox, each cell doesn’t have to tied to a certain alignment value. You may specify the specific alignment for any cell.

To do so, use modifier classes like this:

<pre name="5c8a" id="5c8a" class="graf graf--pre graf-after--p">.row_cell--top {  
  align-self: flex-start  
}</pre>

This will align the specific cell to the top of the `row`.



![](https://cdn-images-1.medium.com/max/1600/1*JPZkgq2pKVk1iGmZgCCb5A.png)

applying the .row_cell — top class will align the specific cell to the top of the `row`



You must have also added the class to the specific cell in the markup. See the first child `div` in the markup below:

<pre name="21c3" id="21c3" class="graf graf--pre graf-after--p">  
    
    
    
</pre>

Below are the other alignment options available:

<pre name="b4b1" id="b4b1" class="graf graf--pre graf-after--p">.row_cell--bottom {  
  align-self: flex-end  
}</pre>



![](https://cdn-images-1.medium.com/max/1600/1*2-RdmsobmxLeIN5vNW-h4g.png)

applying the .row_cell — bottom class will align the specific cell to the bottom of the `row`



<pre name="4ad0" id="4ad0" class="graf graf--pre graf-after--figure">.row_cell--center {  
  align-self: center  
}</pre>



![](https://cdn-images-1.medium.com/max/1600/1*zoQb0ttHzIBVpI33Ux47pg.png)

applying the .row_cell — center class will align the specific cell to the center of the `row`



#### Overall Alignment within the Rows

As specific cells can be aligned, so can the **entire** child elements within the row.

To do this, use a modifier class like so:

<pre name="5680" id="5680" class="graf graf--pre graf-after--p">.row--top {  
   align-items: flex-start  
}</pre>



![](https://cdn-images-1.medium.com/max/1600/1*3ZK_S68GgDnmfb7iaD7Q2w.png)

a row with all three cells aligned to the top of the row.



It is important to note that the modifier class, `.row--top` must be added to the `row` or the parent `flex-container`

<pre name="5405" id="5405" class="graf graf--pre graf-after--p">  
    
    
    
</pre>

The other alignment options may be seen below:

<pre name="b71e" id="b71e" class="graf graf--pre graf-after--p">.row--center {  
   align-items: center  
}</pre>



![](https://cdn-images-1.medium.com/max/1600/1*mwOwEVFJy45sLlWlrHamvQ.png)

a row with all three cells aligned to the center of the row.



<pre name="44d2" id="44d2" class="graf graf--pre graf-after--figure">.row--bottom {  
   align-items: flex-end  
}</pre>



![](https://cdn-images-1.medium.com/max/1600/1*aiT4tcE2pCoQQvebQGE4Ng.png)

a row with all three cells aligned to the center of the row.



#### Nested Grids

Without doing anything in particular, these `rows` can be nested within themselves.







![](https://cdn-images-1.medium.com/max/2000/1*E35OxAwfwawqnGY2bJUxiA.png)

A row with two cells, one 2x the other. Within the larger cell, a row of three centered cells has been nested.







You may view the final grids [created here](https://codepen.io/ohansemmanuel/full/xLBLLG/).

#### Even More Grids

While you can get fancy building grids with Flexbox vertical grids and even more complex configurations, use the best tool for the job. Learn, master and use the [CSS Grid Layout](https://medium.com/flexbox-and-grids/how-to-efficiently-master-the-css-grid-in-a-jiffy-585d0c213577). It is the ultimate CSS solution to Grids.

### Example 4: How to Build Website Layouts with Flexbox

The community generally frowns upon using Flexbox for full blown web layouts.

While I agree with this, I also think in certain cases you can get away with it.

The single most important advice I can give here would be:

> **_Use Flexbox where it makes sense_**

I’ll explain that statement in the following example.

#### The Holy Grail Layout

What better website layout to build than the infamous “**holy grail**”?







![](https://cdn-images-1.medium.com/max/2000/1*MYkbKip1RdqBKB9zPq3JbQ.png)

The holy grail layout — header, footer and 3 other content containers.







There are 2 ways to attempt building this layout with Flexbox.

The first is to have the layout built with Flexbox. Place the `header`, `footer`, `nav`, `article` and `aside` all in one `flex-container`.

Let’s begin with that.

#### The Markup

Consider the basic markup below:

<pre name="0872" id="0872" class="graf graf--pre graf-after--p"><body>  
  <header>Header</header>  
  <main>  
    Article</article>  
    <nav>Nav</nav>  
    Aside</aside>  
  </main>  
  <footer>Footer</footer>  
</body></pre>

Among others, there is a particular rule the holy grail adheres to. This rule has inspired the markup above:

The center column, `article` should appear first in the markup, before the two sidebars, `nav` and `aside`.







![](https://cdn-images-1.medium.com/max/2000/1*96nJLOIQOpxgfPvATtSk9g.png)

“</article>” appears first in the markup, but is centered in the layout.







#### Initiate the Flexbox Formatting Context

<pre name="f80c" id="f80c" class="graf graf--pre graf-after--h4">body {  
   display: flex  
}</pre>

Because the child elements should stack from top to bottom, the default direction of the Flexbox must be changed.

<pre name="7d4e" id="7d4e" class="graf graf--pre graf-after--p">body {  
 ...  
 flex-direction: column  
}</pre>

**1**. `header` and `footer` should have a fixed width.

<pre name="bda5" id="bda5" class="graf graf--pre graf-after--p">header,  
footer {  
  height: 20vh /*you can use pixels e.g. 200px*/  
}</pre>

**2.**`main` must be made to fill the available remaining space within the `flex-container`

<pre name="16ea" id="16ea" class="graf graf--pre graf-after--p">main {  
   flex: 1  
}</pre>

Assuming you didn’t forget, `flex: 1` is equivalent to `flex-grow: 1` , `flex-shrink: 1` and `flex-basis: 0`



![](https://cdn-images-1.medium.com/max/1600/1*VPlkzVgvgfJ1n3SoZvbw4g.png)

This will cause `main` to “grow” and contain the available remaining space.



At this point, we need to take care of the contents within `main` which are `article`, `nav` and `aside`.

Set up `main` as a `flex-container` :

<pre name="e1a6" id="e1a6" class="graf graf--pre graf-after--p">main {  
  display: flex  
}</pre>

Have the `nav` and `aside` take up fixed widths:

<pre name="7705" id="7705" class="graf graf--pre graf-after--p">nav,  
aside {  
  width: 20vw  
}</pre>

Ensure that `article` takes up the remaining available space:

<pre name="8637" id="8637" class="graf graf--pre graf-after--p">article {  
   flex: 1  
}</pre>







![](https://cdn-images-1.medium.com/max/2000/1*KTRNFgqbbaPGUtpLI2K7lg.png)

`"article"` now takes up the remaining available space







There’s just one more thing to do now.

Re-order the `flex-items` so `nav` is displayed first:

<pre name="3aff" id="3aff" class="graf graf--pre graf-after--p">nav {  
  order: -1  
}</pre>







![](https://cdn-images-1.medium.com/max/2000/1*MYkbKip1RdqBKB9zPq3JbQ.png)

The final result. [https://codepen.io/ohansemmanuel/full/brzJZz/](https://codepen.io/ohansemmanuel/full/brzJZz/)







The `order` property is used to re-order the position of `flex-items`.

All `flex-items` within a container will be displayed in **increasing** `order` values. The `flex-item` with the lowest `order` values appear first.

All `flex-items` have a default `order` value of `0`.

#### The Holy Grail Layout (another solution)

The previous solution used a `flex-container` as the overall container. The layout is heavily dependent on Flexbox.

Let’s see a more “sane” approach. Take a look at the supposed final result again:







![](https://cdn-images-1.medium.com/max/2000/1*MYkbKip1RdqBKB9zPq3JbQ.png)

The holy grail layout







`header` and `footer` could be treated as block elements. Without any intervention, they will fill up the width of their containing element, and stack from top to bottom.

<pre name="947f" id="947f" class="graf graf--pre graf-after--p"><body>  
  <header>Header</header>  
  <main>  
    Article</article>  
    <nav>Nav</nav>  
    Aside</aside>  
  </main>  
  <footer>Footer</footer>  
</body></pre>

With this approach, the only `flex-container` needed would be `main`.

The singular challenge with this approach is that you have to compute the height of `main` yourself. `main` should fill the available space besides the space taken up by the `header` and `footer.`

<pre name="6603" id="6603" class="graf graf--pre graf-after--p">main {  
  height: calc(100vh - 40vh);  
}</pre>

Consider the code block above. It uses the CSS `calc` function to compute the height of `main.`

Whatever your mileage, the height of `main` must be equal to `calc(100vh — height of header — height of footer ).`

As in the previous solution, you must have given `header` and `footer` a fixed height. Then go ahead and treat `main` the same way as in the previous solution.

You may view the [actual results here](https://codepen.io/ohansemmanuel/full/brzybZ/).

#### 2 column website layouts

Two column layouts are pretty common. They are also easily achieved using Flexbox.



![](https://cdn-images-1.medium.com/max/1600/1*CnXI30jRD4ZMJuy7_wuT9Q.png)

2 column layout with a sidebar and main content area.



Consider the markup below:

<pre name="2ee1" id="2ee1" class="graf graf--pre graf-after--p"><body>  
  sidebar</aside>  
  <main>main</main>  
</body></pre>

Initiate the Flexbox formatting context:

<pre name="3f0d" id="3f0d" class="graf graf--pre graf-after--p">body {  
  display: flex;  
}</pre>

Give `aside` a fixed width:

<pre name="4717" id="4717" class="graf graf--pre graf-after--p">aside {  
   width: 20vw  
}</pre>

Finally, ensure that `main` fills up the remaining available space:

<pre name="e659" id="e659" class="graf graf--pre graf-after--p">main {  
  flex: 1  
}</pre>

That’s pretty much all there is to it.

### Example 5: Media Objects with Flexbox

Media Objects are everywhere. From tweets to Facebook posts, they seem to be the go to choice for most UI designs.







![](https://cdn-images-1.medium.com/max/2000/1*Ja800iXUu4ILkPGHtUUGBQ.png)

Sample Tweet and Facebook post







Consider the markup below:

<pre name="b3d3" id="b3d3" class="graf graf--pre graf-after--p">  
  <img class="media-object" src="/pic.jpg">  
    
    <h3 class="media-heading"> Header </h3>  
    <p></p>  
    
</pre>

As you have guessed, `.media` will establish the Flexbox formatting context:

<pre name="af78" id="af78" class="graf graf--pre graf-after--p">.media {  
   display: flex  
}</pre>

By default, the `flex-items` of a `container` are stretched along the vertical to fill the available height within the `flex-container`.

Make sure the `.media-body` takes up all the remaining available space:

<pre name="8759" id="8759" class="graf graf--pre graf-after--p">.media-body {  
   flex: 1  
}</pre>







![](https://cdn-images-1.medium.com/max/2000/1*6jgAhiSC5eXaAuqpghtoQA.png)

The box on the left stretches to fit the available screen. The media body takes up the remaining horizontal space within the media object (white)







Let’s fix the stretched box.

<pre name="87a8" id="87a8" class="graf graf--pre graf-after--p">.media {  
  ...  
  align-items: flex-start  
}</pre>



![](https://cdn-images-1.medium.com/max/1600/1*pBi-bHpYmbnUDTU95yNQKA.png)

The flex items are now aligned to the start of the media object. The image now takes it default’s size. No weird stretching :)



And that’s it.

#### A flipped Media Object



![](https://cdn-images-1.medium.com/max/1600/1*aC7GdWVhaFEpQaHDvyHwYA.png)

A flipped media object has the image on the other side (right) of the media object



You do not have the change the `html` source order to create a flipped media object.

Just re-order the `flex-item`s like so:

<pre name="e656" id="e656" class="graf graf--pre graf-after--p">.media-object {  
   order: 1  
}</pre>

This will have the image displayed after the `.media-body` and `media-heading`

#### A Nested Media Object

You may even go on to nest the Media object. Without changing any of the CSS styles we have written.

<pre name="2ac5" id="2ac5" class="graf graf--pre graf-after--p">  
  <img class="media-object" src="/pic.jpg">  
    
    <h3 class="media-heading"> Header </h3>  
    <p></p>  

    <!--nested-->  
      
    <img class="media-object" src="/pic.jpg">  
      
        <h3 class="media-heading"> Header </h3>  
        <p></p>  
      
    <!--end nested-->  
     
</pre>

It works!







![](https://cdn-images-1.medium.com/max/2000/1*asfZHPgYddJc7km3JNWUEw.png)

Media objects nested within media objects.







#### A Unicode Media Object

It appears we are not restricted to just images.

Without changing any of the CSS styles written, you can have a unicode represent the image.

<pre name="6663" id="6663" class="graf graf--pre graf-after--p">  
  &#x1F60E;  
    
    <h3 class="media-heading"> Header </h3>  
    <p></p>  
    
</pre>

I have snugged in an emoji there.







![](https://cdn-images-1.medium.com/max/2000/1*1Dy3hR3O3wLmLBwfo-XvkQ.png)

Media object with emoji support.







Taking away the `img` and replacing it with a `div` containing the desired unicode yields the output above.You may grab some more emoji unicodes [here](https://emojipedia.org).

#### An HTML Entity Media Object

You may have also use [html entities](https://www.w3schools.com/html/html_entities.asp) as seen below.

<pre name="37dd" id="37dd" class="graf graf--pre graf-after--p">  
  &phone;  
    
    <h3 class="media-heading"> Header </h3>  
    <p></p>  
    
</pre>

The html entity used in this example is `&phone;` and you may see the result below.







![](https://cdn-images-1.medium.com/max/2000/1*nX6qak80wvv4pUujMatbCg.png)

html entity, &phone;







You can view the result of these examples in this [CodePen](https://codepen.io/ohansemmanuel/full/jLJbGL/).

### Example 6: How to Build Form Elements with Flexbox

It is difficult to find any website that does not have a form or two these days.



![](https://cdn-images-1.medium.com/max/1600/1*JBX4sN_aztmGVSoAebnQJA.png)

form inputs appended and prepended with other elements



Consider the markup below:

    <form class="form">  <input class="form__field">  <button class="form__item">…</button></form><form class="form">  …  <input class="form__field"></form><form class="form">  …  <input class="form__field">  <button class="form__item">…</button></form>

This example shows the combination of aligning input fields with buttons or spans of text. The solution again is quite easy with Flexbox.

Initiate the Flexbox formatting context:

<pre name="ef3a" id="ef3a" class="graf graf--pre graf-after--p">.form {  
  display: flex  
}</pre>

Ensure the input field takes up the available space:

<pre name="3614" id="3614" class="graf graf--pre graf-after--p">.form__field {  
   flex: 1  
}</pre>

Finally, you may style the appended or prepended texts and buttons whichever way you seem fit.

<pre name="768e" id="768e" class="graf graf--pre graf-after--p">.`form__item {  
  ...   
}`</pre>

You may view the complete result of this example in this [CodePen](https://codepen.io/ohansemmanuel/full/ZJPmNj/).

### Example 7: How to Build a Mobile App Layout with Flexbox

In this example, I will walk you the process the mobile app layout below:



![](https://cdn-images-1.medium.com/max/1600/1*-dKIqdrtYslGcv7W6tCczA.png)

The mobile app layout we will build with Flexbox



However, this example is different.

I will explain the process of building the mobile layout in pseudo code, and you’ll go ahead to build it.

This will be a form of practice to get your hands **wet**.

#### Step 1

Strip the layout off the iPhone, and we have this:



![](https://cdn-images-1.medium.com/max/1600/1*oEwe7KhKny_KKF2AAnK88g.jpeg)

The barebones layout



#### Step 2

Define the containing body as a `flex-container`



![](https://cdn-images-1.medium.com/max/1600/1*cBybIMbYPSZvrQa0e3U2gw.jpeg)

Initiate the Flexbox formatting context as a flex container.



#### Step 3

By default, the `flex-direction` of a `flex-container` is set to `row`. In this case, change it to `column` .



![](https://cdn-images-1.medium.com/max/1600/1*IFYXAoJyITSJMSS8lhsU-g.jpeg)

Change the default flex direction to have 3 child elements aka `flex-items`



#### Step 4

Give Item 1 and 3 fixed heights such as `height: 50px.`

#### Step 5

Item 2 must have a height that fills up the available space. Use `flex-grow` or the `flex` shorthand `flex: 1.`

#### Step 6

Finally, treat each block of content as a Media Object as seen in an earlier example.



![](https://cdn-images-1.medium.com/max/1600/1*u-iAL6GcQntR3A6xskAkPg.jpeg)

Treat the blocks of content as media objects.



Follow the six steps above to successfully build the mobile app layout successfully.

### Conclusion

In my experience, most UI layout challenges you’ll be faced with will be a variant of one of these examples.

Go build something cool :)











* * *







If you want to save this for later and read it offline:

[**The Complete Free Guide to Flexbox Practical Examples**  
_If Price does NOT read $0.00, kindly click the_payhip.com](https://payhip.com/b/YVGf "https://payhip.com/b/YVGf")[](https://payhip.com/b/YVGf)

[Tweet me](https://twitter.com/OhansEmmanuel) if you get lost while implementing these examples.

Don’t forget to clap 👏 for this article.








