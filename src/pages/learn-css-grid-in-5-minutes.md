---
author: Per Harald Borgen
authorTwitter: https://twitter.com/perborgen
authorFacebook: https://facebook.com/10156392389390183
title: "Learn CSS Grid in 5 Minutes"
subTitle: "A quick introductions to the future of website layouts."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*Oc88rInEcNuY-xCN3e1iPQ.png
url: https://medium.freecodecamp.org/learn-css-grid-in-5-minutes-f582e87b1228
id: learn-css-grid-in-5-minutes-f582e87b1228
date: 2017-11-26T21:40:00.364Z
tags: [
	"CSS",
	"Design",
	"Web Development",
	"Web Design",
	"Technology"
]
---
# Learn CSS Grid in 5 Minutes

## A quick introductions to the future of website layouts.











![](https://cdn-images-1.medium.com/max/2000/1*Oc88rInEcNuY-xCN3e1iPQ.png)












Grid layouts are fundamental to the design of websites, and the CSS Grid module is the most powerful and easiest tool for creating it.

The module has also gotten native support by the [major browsers](https://caniuse.com/#feat=css-grid) (Safari, Chrome, Firefox) this year, so I believe that all front-end developer will have to learn this technology in the _not too distant_ future.

In this article, I’ll take you through the very basics of CSS Grid as quickly as possible. I’ll be leaving out everything you shouldn’t care about until you’ve understood the basics.

> I‘m also working on creating an in-depth CSS Grid course, which I’ll launch for free in December. Check out [a preview of the course here.](https://scrimba.com/c/c2gd3T2)







 [


](https://scrimba.com/c/c2gd3T2) 







Oh, and if you want early access to the course, [leave your email here.](http://eepurl.com/c_R31n)

Now let’s jump into it!

### Your first grid layout

The two core ingredients of a CSS Grid are the **wrapper** (parent)and the **items** (children). The wrapper is the actual grid and the items are the content inside the grid.

Here’s the markup for a wrapper with six items in it:

<pre name="6bb5" id="6bb5" class="graf graf--pre graf-after--p">  
    
    
    
    
    
    
</pre>

To turn our wrapper `div` into a **grid**, we simply give it a display of `grid`:

<pre name="d84c" id="d84c" class="graf graf--pre graf-after--p">.wrapper {  
    display: grid;  
}</pre>

But, this doesn’t do anything yet, as we haven’t defined how we want our grid to look like. It’ll simply stacks 6 `div's` on top of each other.












I’ve added a bit of styling, but that hasn’t got anything to do with CSS grid.



### Columns and rows

To make it two-dimensional, we’ll need to define the columns and rows. Let’s create three columns and two rows. We’ll use the `grid-template-row` and `grid-template-column` properties.

<pre name="924d" id="924d" class="graf graf--pre graf-after--p">.wrapper {  
    display: grid;  
    grid-template-columns: 100px 100px 100px;  
    grid-template-rows: 50px 50px;  
}</pre>

As we’ve written three values for `grid-template-columns`, we’ll get three columns. We’ll get two rows, as we’ve specified two values for the `grid-template-rows`.

The values dictate how wide we want our columns to be (100px) and how tall we’d want our rows to be (50px). Here’s the result:














To make sure you properly understand the relation between the values and how the grid looks, take a look at this example as well.

<pre name="ed6b" id="ed6b" class="graf graf--pre graf-after--p">.wrapper {  
    display: grid;  
    grid-template-columns: 200px 50px 100px;  
    grid-template-rows: 100px 30px;  
}</pre>

Try to grasp the connection between the code and the layout.

Here’s how it plays out:














### Placing the items

The next thing you’ll need to learn is how to place items on the grid. This is where you get superpowers, as it makes it dead simple to create layouts.

Let’s create a 3x3 grid, using the same markup as before.

<pre name="8fa3" id="8fa3" class="graf graf--pre graf-after--p">.wrapper {  
    display: grid;  
    grid-template-columns: 100px 100px 100px;  
    grid-template-rows: 100px 100px 100px;  
}</pre>

This will result in the following layout:














> Notice, we only see a 3x2 grid on the page, while we defined it as a 3x3 grid. That’s because we only have six items to fill the grid with. If we had three more, then the lowest row would be filled as well.

To position and resize the items we’ll target them and use the `grid-column`and `grid-row` properties:

<pre name="fa36" id="fa36" class="graf graf--pre graf-after--p">.item1 {  
    grid-column-start: 1;  
    grid-column-end: 4;  
}</pre>

What we’re saying here is that we want item1 to start on the first grid line and end on the fourth column line. In other words, it’ll take up the entire row. Here’s how that’ll play out on the screen:














Are you confused why we have 4 column lines when we only have 3 columns. Take a look at this image, where I’ve drawn the column lines in black:














Notice that we’re now using all the rows in the grid. When we made the first item take up the entire first row, it pushed the rest of the items down.

Finally, I’d like to show a simpler way of writing the syntax above:

<pre name="e06a" id="e06a" class="graf graf--pre graf-after--p">.item1 {  
    grid-column: 1 / 4;  
}</pre>

To make sure you’ve understood this concept properly, let’s rearrange the items a little bit.

<pre name="d9d2" id="d9d2" class="graf graf--pre graf-after--p">.item1 {  
    grid-column-start: 1;  
    grid-column-end: 3;  
}</pre>

<pre name="aaf4" id="aaf4" class="graf graf--pre graf-after--pre">.item3 {  
    grid-row-start: 2;  
    grid-row-end: 4;  
}</pre>

<pre name="ad3e" id="ad3e" class="graf graf--pre graf-after--pre">.item4 {  
    grid-column-start: 2;  
    grid-column-end: 4;  
}</pre>

Here’s how that looks on the page. Try to wrap you head around why it looks like it does. It shouldn’t be too hard.














And that was it!

There are of course tons of concepts we haven’t gone through yet. And if you want to learn those, just leave your [email here](http://eepurl.com/c_R31n), and I’ll let you know when I launch my free CSS Grid course on [Scrimba.](http://scrimba.com)

If you have any questions, please leave a comment and I’ll answer as best as I can :)








