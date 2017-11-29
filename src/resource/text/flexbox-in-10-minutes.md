---
author: Justin Yek
authorTwitter: https://twitter.com/justinyek
authorFacebook: https://facebook.com/10101301996774822
title: "Learn basic Flexbox in just 10 minutes"
subTitle: "Flexbox, short for “flexible box,” is a layout mode introduced in CSS3 that determines how elements are arranged on a page so that they b..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*8fC9bK5XBVtAlNEHlrtfsQ.jpeg
url: https://medium.freecodecamp.org/flexbox-in-10-minutes-7295497804ed
id: flexbox-in-10-minutes-7295497804ed
date: 2017-05-25T06:43:21.490Z
tags: [
  "CSS",
  "Design",
  "Web Development",
  "Technology",
  "Web Design"
]
---
# Learn basic Flexbox in just 10 minutes







![](https://cdn-images-1.medium.com/max/2000/1*8fC9bK5XBVtAlNEHlrtfsQ.jpeg)







### What is Flexbox?

[Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3), short for “flexible box,” is a layout mode introduced in [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) that determines how elements are arranged on a page so that they behave predictably under different screen sizes and devices.

It is called Flexbox because of its ability to expand and shrink elements inside the the flex box to best fill the available space. Compared to older layout methods such as display table and floating inline blocks, Flexbox is a more powerful way to:

*   Lay out elements in different directions
*   Rearrange the display order of elements
*   Change the alignment of elements
*   Dynamically fit elements into container

### When not to use Flexbox?

While Flexbox is great for scaling, aligning and re-ordering elements, try to avoid using it for:

*   [overall page layout](https://jakearchibald.com/2014/dont-use-flexbox-for-page-layout/)
*   websites which fully support old browsers







![](https://cdn-images-1.medium.com/max/2000/0*6RNstrtiyZlS8sc7.png)

Browser support of Flexbox from [Can I Use…](http://caniuse.com/#search=flex)







Older browsers, like IE 11 or below, do not support or only partially support Flexbox. If you want to play it safe, you should fall back to other CSS layout methods, such as `display: inline-block` with `float` and `display: table`.   
However, if you only target modern browsers, Flexbox is definitely worth a look.

### Terminology



![](https://cdn-images-1.medium.com/max/1600/0*s_mHrBQbrTPr33sm.png)



In the Flexbox model, there three core concepts:

*   flex items, the elements that need to be laid out
*   flex container, which contains flex items
*   flow direction, which determines the layout direction of flex items

Humans learn best from experience and examples, so let’s start!

### Level 1 — Basic

1) Creating a flex container

          

    .flex-container {  display: flex;}

To create a flex container, you just need to add the `display: flex` property to an element. By default, all direct children are considered flex items and are laid out horizontally in a single row from left to right. If the total width of the flex items is larger than the container, the items will be scaled down so that they will fit into the container.

2) Put flex items in a single column

    .flex-container {  display: flex;  flex-direction: column;}

Flex items can be laid out vertically by setting `flex-direction: column`. It is also possible to lay them out in reverse order by setting `flex-direction: column-reverse` or `flex-direction: row-reverse`.

    .flex-container {  display: flex;  flex-direction: column-reverse;}

### Level 2 — Beginner

1) Align flex items to the right

    .flex-container {  display: flex;  justify-content: flex-end;}

Recall that there is flex direction for every Flexbox model. `justify-content`is used to specify where the flex items should be placed along the flex direction. In the example above, `justify-content: flex-end` means items are justified to the end of the flex container in the horizontal direction. That’s why they are placed to the right.

2) Center-align flex items

    .flex-container {  display: flex;  justify-content: center;}

3) Spread out flex items

You can specify how much space should appear between items in a container by using one of three possible spacing values for the`justify-content`property:

*   `space-evenly`: the space between the starting edge of the container and the first item is equal to the spacing between each item and the item adjacent to it.
*   `space-between`: the space between any two adjacent items is the same, but not necessarily equal to the space between the first/last item and its closest edge; the space between the start edge and the first item is equal to the space between the end edge and the last item.
*   `space-around`: the space on each side of an item is the same for each item in the container. Note that the this means the space between two adjacent items will be twice as large as the space between the first/last item and its closest edge.

4) Align flex items in a second direction

    .flex-container {  display: flex;  justify-content: center;  align-items: center;}

Usually, we would like to lay out items along the flex direction while also aligning the items in the direction perpendicular to it. By setting `justify-content: center` and `align-items: center`, flex items can be placed at the center of flex container both horizontally and vertically.

5) Align a particular flex item

    .flex-container {  display: flex;  align-items: center;}

    .flex-bottom {  align-self: flex-end;}

It is possible to align a particular flex item differently than the others in the container by using the `align-self` CSS property on that item.

### Level 3 — Intermediate

1) Allow flex items to wrap into other rows/columns

    .flex-container {  display: flex;  flex-wrap: wrap;}

By default, flex items are not allowed to wrap and they are resized to fit into a single row or column if flex container is not large enough for all of them. By adding `flex-wrap: wrap`, flex items that would overflow the container will be wrapped into another row.

2) Reverse wrapping

    .flex-container {  display: flex;  flex-wrap: wrap-reverse;}

Flex items are still laid out in multiple rows `flex-wrap: wrap-reverse` but they start from the end of flex container.

3) Justify position of lines of elements

    .flex-container {  display: flex;  flex-wrap: wrap;  align-content: flex-start;}

By default, rows of flex items that wrapped are stretched to take up all remaining space with equal spacing between adjacent rows. You can set `align-content` on the flex container to determine the positioning of rows when wrapping occurs. Possible values are `flex-start`, `flex-end`, `center`, `space-between`, `space-around` and `stretch`(default).

### Level 4 — Advanced

1) Expand elements

    .flex-container {  display: flex;}

    .flex-item.nth-of-type(1){  flex-grow: 1;}

    .flex-item.nth-of-type(2) {  flex-grow: 2;}

`flex-grow` takes effect only when there is remaining space in the flex container. The `flex-grow` property of a flex item specifies how much an item will expand relative to the other items in order to fill the flex box. Default is 1\. When set to 0, the item will not grow to fill remaining space at all. In this example, the ratio of two items is 1:2, meaning the first item will take up ⅓, while the second item will take ⅔ of the remaining space.

2) Shrink elements

    .flex-container {  display: flex;}

    .flex-item:nth-of-type(1) {  flex-shrink: 1;}

    .flex-item:nth-of-type(2) {  flex-shrink: 2;}

`flex-shrink` only takes effect when the flex items overflow the flex container because of insufficient space. It specifies how much an item will shrink relative to the other items in order for the items to not overflow the flex box. Default is 1\. When set to 0, the flex item will not shrink at all. In this example, the ratio is 1:2, meaning the first item will shrink by ⅓, while the second item will shrink by ⅔ of the overflowed space.

3) Set the size of elements

    .flex-container {  display: flex;}

    .flex-item.nth-of-type(1) {  flex-basis: 200px;}

    .flex-item.nth-of-type(2) {  flex-basis: 10%;}

Instead of using the initial size of an element, you can customize its size with `flex-basis`. By default, its value is `flex-basis: auto`, which means the size calculated from non-Flexbox CSS rules. You can also set it to some absolute value or a value that represents a percentage of the flex container; for example `flex-basis: 200px` and `flex-basis: 10%`.

4) Put flex-grow, flex-shrink, and flex-basis together

    .flex-container {  display: flex;}

    .flex-item:nth-of-type(1) {  flex: 1 0 100px;}

    .flex-item:nth-of-type(2) {  flex: 2 0 10%;}

`flex` is a shorthand for `flex-grow`, `flex-shrink` and `flex-basis`. In this example, the first flex item is set to be`flex-grow=1`_,_ `flex-shrink=0`_,_ `flex-basis=100px`and the second flex item is set to be`flex-grow=2`_,_ `flex-shrink=0`_,_ `flex-basis=10%`. In this case , since there is remaining space in the flex container, only `flex-grow` takes effects and `flew-shrink` is ignored.

### Conclusion

Flexbox is easy to learn and manipulate. Knowledge of its use is especially helpful since the web development cycle is short and iterations are rapid. If you’d like to experiment more with Flexbox before using it in your projects, you can visit [Flexyboxes](http://the-echoplex.net/flexyboxes/) and [Flexbox Froggy](http://flexboxfroggy.com/) to practice. You can also read more on [CSS trick: A guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) and [W3C: CSS Flexible Box](https://drafts.csswg.org/css-flexbox/).

_This article was originally published on Altitude Labs’_ [_blog_](http://altitudelabs.com/blog/) _and was written by our software engineer, Felix Yau._ [_Altitude Labs_](http://altitudelabs.com) _is a software agency that specializes in personalized, mobile-first React apps._








