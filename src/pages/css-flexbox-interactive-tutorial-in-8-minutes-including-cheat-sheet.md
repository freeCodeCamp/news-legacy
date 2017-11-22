---
author: Syed Sadiq ali
authorTwitter: https://twitter.com/theyesyed
authorFacebook: https://facebook.com/506986756167957
title: "CSS Flexbox explained in 8 minutes, plus a Flexbox cheat sheet"
subTitle: "When I was new to CSS Flexbox, I read many articles and watched many videos. But most of them were long, and I didn’t have time to read o..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*9oLHLOQtiwiPrEZ8xjtexQ.jpeg
url: https://medium.freecodecamp.org/css-flexbox-interactive-tutorial-in-8-minutes-including-cheat-sheet-6214e00de3d2
id: css-flexbox-interactive-tutorial-in-8-minutes-including-cheat-sheet-6214e00de3d2
date: 2017-09-22T09:41:09.428Z
tags: [
  "CSS",
  "Flexbox",
  "Design",
  "Web Development",
  "UI"
]
---
# CSS Flexbox explained in 8 minutes, plus a Flexbox cheat sheet

When I was new to CSS Flexbox, I read many articles and watched many videos. But most of them were long, and I didn’t have time to read or see them all. So much to do, so little time.

So, I decided to write this article on Flexbox in 8 minutes. I will also share a link to a Flexbox cheat sheet I found to be very useful. It will help you learn Flexbox while designing for the modern Web.

Before we begin, it’s important for you to be familiar with basic HTML and CSS. It would also be helpful to know a CSS Framework like Bootstrap. It would help you get the most from this tutorial.

Flexbox is a pretty new concept in CSS. It solves a lot of problems of Web design like the [Holy Grail Layout](https://en.wikipedia.org/wiki/Holy_Grail_%28web_design%29#CSS3_Flexible_Box_Layout_.28Flexbox.29). Another area where Flexbox helps is appending and prepending elements to other elements.

This is how Wikipedia defines Flexbox:

> [**_CSS Flex Box Layout_**](https://en.wikipedia.org/wiki/CSS_Flex_Box_Layout) _is a_ [_CSS3_](https://www.w3.org/standards/techs/css#w3c_all) _web layout model. It is in the_ [_W3C_](https://www.w3.org/)_’s Candidate Recommendation (CR) stage.The flex layout allows_ [_responsive elements_](https://developers.google.com/web/fundamentals/design-and-ux/responsive/) _within a container to be automatically arranged depending upon screen size (or device)._

Here are the definitions -

1.  **CSS3 **— the latest version of CSS.
2.  **W3C** — World Wide Web Consortium, an organization which develops open standards for the Web.
3.  **Responsive Elements** — When decreasing browser’s size or viewing on tablets and mobile devices, responsive elements change their view like below —



![](https://cdn-images-1.medium.com/max/1600/1*bP9mQPJIn5DxUijXP4dQ3A.png)

responsive-web design



If you’ve used CSS frameworks like [Foundation](https://foundation.zurb.com/) or [Bootstrap](http://getbootstrap.com/) you know it can be challenging to create a responsive web page. With Flexbox it’s super simple.

#### FlexBox in Action

Let’s start this.

Fire up your text editor, and work along with me. That’s the best way to learn.

Step 1 — Create a folder for your new project. Next, create a file named index.html and enter the code shown below. ( 😆 There is only 1 Step).

<pre name="6404" id="6404" class="graf graf--pre graf-after--p"><!DOCTYPE html>  
<html lang="en">  
<head>  
 <meta charset="UTF-8">  
 <title>CSS Flexbox in 8 Minutes</title>  
 <style>  
  ul{  
   display: flex;  
   flex-direction: row;  
   border :1px solid red;  
   background-color: skyblue;   
  }  
  li{  
   list-style: none;  
   width:100px;  
   height:100px;  
   background-color:#ff00ff;  
   margin:10px;  
  }  
 </style>  
</head>  
<body>  
 <ul>  
  <li>1</li>  
  <li>2</li>  
  <li>3</li>  
 </ul>  
</body>  
</html></pre>

Don’t think much about it now since I’ll explain everything in just a minute.

When you open the file in your browser it will look something like this.



![](https://cdn-images-1.medium.com/max/1600/1*tkKs8KEM3GUClPxfepoRxA.jpeg)

display:flex; property makes flow in row instead of column.



Notice that in our CSS we added `display: flex`. This changes our list from acting like a simple block-level element into a Flexbox. Make sure to set this on the parent element, which in this case is `<ul>`. This is what creates the flex container.

Once the parent element is set as the flex container it handles the child elements so you don’t have to.

Also notice that we added `flex-direction: row` in the same `<ul>` section. Flexbox defaults to a row layout. But one feature that makes it so powerful is that you can change the direction by changing the property.

Let’s learn more about that.

### Flex-Axis

Remember the coordinate system you learned in math class? It had an X and Y axis which never changed direction.

The Flex Axis is similar, but the axes don’t remain rigid. The main and cross axes change depending on the flex item’s flow. We’ll talk more about this later but for now, remember that the main axis follows the flow.

If we set `flex-direction:row`, then the axes are as follows:



![](https://cdn-images-1.medium.com/max/1600/1*HNXh6PZMPwd8ilBnOjpuRg.jpeg)

Main Axis and Cross Axis on Default or Flex-direction is Row.



and if we change to `flex-direction:column` the axes change to this:



![](https://cdn-images-1.medium.com/max/1600/1*zao5G4yng-qCJ-cHoLF3YA.jpeg)

Main axis and cross Axis Reversed on flex-direction:column; property



### Flex Container Properties

**Flex Direction —** This is pretty easy to understand. The direction of flex can be `row` or `column`. However, you can reverse the order of the elements in either one. All you have to do is change the property value.

`flex-direction` can be `column` || `row` || `column-reverse` || `row-reverse`

Let’s see some examples.

<pre name="9d06" id="9d06" class="graf graf--pre graf-after--p">flex-direction:row;</pre>



![](https://cdn-images-1.medium.com/max/1600/1*caVyN5oYMapDX1X74K-rCA.jpeg)

flex-direction:row;



<pre name="2693" id="2693" class="graf graf--pre graf-after--figure">flex-direction:row-reverse;</pre>



![](https://cdn-images-1.medium.com/max/1600/1*ayG_tg-eZl9SVPVjmyLfjQ.jpeg)

flex-direction:row-reverse;



<pre name="aa48" id="aa48" class="graf graf--pre graf-after--figure">flex-direction:column;</pre>



![](https://cdn-images-1.medium.com/max/1600/1*dUxsPZJPuh7T0-AYqWaKew.jpeg)

flex-direction:column;



<pre name="4abf" id="4abf" class="graf graf--pre graf-after--figure">flex-direction:column-reverse;</pre>



![](https://cdn-images-1.medium.com/max/1600/1*_fqPSukFwwoEsCMZDI6hMQ.jpeg)

flex-direction : column-reverse;



**Flex Wrap —**If the Flexbox container has items that can’t fit into the available space they shrink until they do. If there are many items they may break the layout by overflowing the container. You can solve this by using the `flex-wrap` property.

The default value of `flex-wrap` property is `nowrap`. This puts the elements onto a single row. As mentioned above, this is not always ideal. Changing the value to `wrap` will put the elements on multiple lines. It’s like when you wrap text in multiple lines in notepad.

`flex-wrap` can be `wrap` || `nowrap` || `wrap-reverse`

Here’s how it works.

<pre name="0e84" id="0e84" class="graf graf--pre graf-after--p">flex-wrap:nowrap; //or don't write this, this value is default</pre>



![](https://cdn-images-1.medium.com/max/1600/1*KLJaNykRRNZ5xkLd9Mn7Ow.jpeg)

flex-wrap : nowrap;



<pre name="6493" id="6493" class="graf graf--pre graf-after--figure">flex-wrap:wrap; //wraps the flex items to second line</pre>



![](https://cdn-images-1.medium.com/max/1600/1*cFl-JrbU3vKOxiLYYaULYA.jpeg)

flex-wrap : wrap;



<pre name="1e33" id="1e33" class="graf graf--pre graf-after--figure">flex-wrap : wrap-reverse; //wraps items in reverse direction.</pre>



![](https://cdn-images-1.medium.com/max/1600/1*UMPfQCIYitwBT6DaRMb92A.jpeg)

flex-wrap : wrap-reverse; — I have included numbers for this example.



**Flex Flow — **is a combined property for both `flex-direction` and `flex-wrap`. It’s a shorthand syntax to make things easier.

<pre name="2fe3" id="2fe3" class="graf graf--pre graf-after--p">flex-flow: column wrap; </pre>

`flex-flow` is equal to writing `flex-direction:column` and `flex-wrap:wrap`. It produces the result of both.



![](https://cdn-images-1.medium.com/max/1600/1*6KUyFbBaQ-azL_qNT5Y2PQ.jpeg)

it’s equivalent to writing flex-direction property as column and flex-wrap as wrap; we have specified some height here.



**Justify Content — **This is like justification included in most text editors. With flexbox we justify the flex items on the main axis.

<pre name="3acd" id="3acd" class="graf graf--pre graf-after--p">justify-content:flex-start || flex-end || center || space-around || space-between; // set it to anything</pre>



![](https://cdn-images-1.medium.com/max/1600/1*N8WIcBNQH6-5yfksTlg7Ew.jpeg)

all the justify content properties, produces these results.



**Align Items** — The `align-items` property of a flex container is similar to `justify-content` but it works on the cross axis.

<pre name="e434" id="e434" class="graf graf--pre graf-after--p">align-items : stretch || flex-start || flex-end || center || baseline; // set it to anything</pre>



![](https://cdn-images-1.medium.com/max/1600/1*iiGq0PAUah_tUJP3DFP0Sw.jpeg)

align-items properties.



**Align Content —**If you have used the `flex-wrap:wrap` property on the container, you can use `align-content` to align the items.

<pre name="339a" id="339a" class="graf graf--pre graf-after--p">align-content: stretch || flex-start || flex-end || center; // set it to anything</pre>



![](https://cdn-images-1.medium.com/max/1600/1*XeL4ymqFXm23_2JDaRjFSw.jpeg)

align content properties.



### Flex Item Properties

**Order —** If you want to change the position of a flex item without changing your HTML DOM, then use the `order` property**.**

You can change the order of any element with a positive number or negative number.

The default order number for all flex items is 0\. Changing the order value to a positive number moves the flex element later in the display. Changing the order value to a negative number moves the flex element earlier in the display. Flex elements with the same order number maintain the same order they had in the source.

Here’s a few examples. Note that each example starts from the original sort order shown below.

<pre name="de51" id="de51" class="graf graf--pre graf-after--p">order : -1 || 0 || 1 || 2; // set it to anything (default is 0)</pre>



![](https://cdn-images-1.medium.com/max/1600/1*jD9UD7NCKME3SxhjUDCTnA.jpeg)

Flex item order property, higher the order, the last the element appear.



As you can see, we can change the Flex-item position without changing any of the HTML code.

Again, the default order number for any element is 0\. The lowest ordered element occurs first. The highest ordered element occurs last. But you can’t use a negative order on the first element. Review the examples above to see how it works.

**Flex Grow — **Here comes one of the most important properties of Flexbox.

Remember that the Flexbox container controls how flex items fill the available space. If there are many flex items, they shrink. But what if there is extra space left over? The `flex-grow` value is the growth factor of a flex item relative to the other items.

Here’s an example.

`flex-grow:0||1;`



![](https://cdn-images-1.medium.com/max/1600/1*ehZyP-86r0saoiELgm0agg.jpeg)

the flex-grow switch is on here, default is off.



When we use the `flex-grow` switch the flex item occupies all the available space.

**Flex Shrink — **If you want to shrink the elements on the basis of a viewport like a tablet or mobile phone, use `flex-shrink`.

`flex-shrink:1;`

It’s like `flex-grow` but in the opposite direction.

**Flex Basis — **If you’d like to set the initial size of a flex element, use `flex-basis`.

`flex-basis:auto||n px;`

`n` can be the size you set for any flex element and you can set it to accommodate the text.

Here’s an example.



![](https://cdn-images-1.medium.com/max/1600/1*9YQjbAcUYqZ_9fhA0dDj9Q.jpeg)

flex-basis property can be set for element resposiveness



### The Flex Shorthand

Don’t think that Flexbox is very complicated. You can define it with 4–8 lines of code.

Here is the shorthand to define the flex-item properties. Learn the acronym GSB, for **G**row, **S**hrink and **B**asis.

The `flex-grow`, `flex-shrink`, and `flex-basis` properties can be set in one line of code.

flex : 0 0 150px;

or

flex: 0 1 auto;

Here are some examples.

### Example 1 : Using Flex to Divide sections

<pre name="9535" id="9535" class="graf graf--pre graf-after--h3"><ul>  
    <li>1</li>  
    <li>2</li>  
</ul>  
<style>  
ul {  
    display: flex;  
    border: 1px solid red;  
    background-color: rgb(222, 222, 221);  
    padding:0px;  
}  
li{  
    list-style: none;  
    width: 100px;  
    height: 100px;  
    background-color: yellow;  
    margin: 10px;  
}</pre>

<pre name="c0f2" id="c0f2" class="graf graf--pre graf-after--pre">li:nth-child(1) {  
    flex: 0 1 25%;  
}</pre>

<pre name="8c3e" id="8c3e" class="graf graf--pre graf-after--pre">li:nth-child(2) {  
    flex: 1 1 75%;  
}  
</style></pre>



![](https://cdn-images-1.medium.com/max/1600/1*re_pfVtMLbFVXvhb4NRddA.jpeg)

flex shorthand for dividing.



this divides the flex container in 25% and 75%.

### Example 2 The Ratio Shorthand

<pre name="7407" id="7407" class="graf graf--pre graf-after--h3"><ul>  
    <li>1</li>  
    <li>2</li>  
</ul>  
<style>  
ul {  
    display: flex;  
    border: 1px solid red;  
    background-color: rgb(222, 222, 221);  
    padding:0px;  
}  
li{  
    list-style: none;  
    width: 100px;  
    height: 100px;  
    background-color: yellow;  
    margin: 10px;  
}</pre>

<pre name="a893" id="a893" class="graf graf--pre graf-after--pre">li:nth-child(1) {  
    flex: 1;  
}</pre>

<pre name="4aea" id="4aea" class="graf graf--pre graf-after--pre">li:nth-child(2) {  
    flex: 5;  
}  
</style></pre>

this will divide the flex-container in **_1/1+5 = 1/6 and 5/1+5=5/6 ratio’s._**



![](https://cdn-images-1.medium.com/max/1600/1*qjm4oN4GmAZ8V6DDuyaRBQ.jpeg)

flex shorthand for ratio.



### The Last Alignment

The last alignment property we’ll discuss is `align-self`. It can be applied to individual flex items so that they can be aligned according to the cross axis.

<pre name="f4d2" id="f4d2" class="graf graf--pre graf-after--p">align-self :   auto || flex-start || flex-end || center || baseline || stretch ; </pre>



![](https://cdn-images-1.medium.com/max/1600/1*aU6B6B_lu3DuqUmE_lpLZQ.jpeg)

align-self property applied on individual items



### FlexBox Reference Material (Including Cheat sheet)

1.  [FlexBox on MDN (Mozilla Developer Network)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
2.  [Solved by Flexbox](https://github.com/philipwalton/solved-by-flexbox) by phillip walton
3.  [The FlexBox Cheatsheet.](http://jonibologna.com/content/images/flexboxsheet.pdf)
4.  [Flexbox Froggy](http://flexboxfroggy.com/) — a Flexbox game to learn Flexbox interactively.

I’m a growing Medium Writer, I write on Web and Motivation, you can help me by Clapping 👏 button below as much as you want and please follow my publication on Motivation here.

[**Motivate Bot**  
_creativity is like philosophy, everyone can do it._medium.com](https://medium.com/motivate-bot "https://medium.com/motivate-bot")[](https://medium.com/motivate-bot)

If you have any questions you can comment down below or contact me on Twitter.

[**motivatebot (@themotivatorbot) | Twitter**  
_The latest Tweets from motivatebot (@themotivatorbot)_www.twitter.com](https://www.twitter.com/themotivatorbot "https://www.twitter.com/themotivatorbot")[](https://www.twitter.com/themotivatorbot)








