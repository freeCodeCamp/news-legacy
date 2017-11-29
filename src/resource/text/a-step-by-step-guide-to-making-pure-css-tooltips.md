---
author: Youssouf El Azizi
authorTwitter: https://twitter.com/ElaziziYoussouf
authorFacebook: https://facebook.com/1418280548194657
title: "A step-by-step guide to making pure-CSS tooltips"
subTitle: "I recently worked through a short tutorial about creating simple tooltips using pure CSS (and no additional HTML element or JavaScript). ..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*8RpaP4J1KI-RaxdIdMXHNg.gif
url: https://medium.freecodecamp.org/a-step-by-step-guide-to-making-pure-css-tooltips-3d5a3e237346
id: a-step-by-step-guide-to-making-pure-css-tooltips-3d5a3e237346
date: 2017-05-03T14:46:47.034Z
tags: [
  "CSS",
  "Design",
  "UX",
  "Web Development",
  "Web Design"
]
---
# A step-by-step guide to making pure-CSS tooltips



![](https://cdn-images-1.medium.com/max/1600/1*8RpaP4J1KI-RaxdIdMXHNg.gif)



I recently worked through a short tutorial about creating simple tooltips using pure CSS (and no additional HTML element or JavaScript). I later used this technique in my own project, and figured out some tricks to improve upon it.

This article is a step-by-step tutorial that will help you understand these CSS tricks so you can make pure-CSS tooltips, too.

By the end of this post, you’ll know how to add a tooltip to any element by adding a simple attribute.

### The problem

I needed to create a custom tooltip for my project.

I started off by Googling “CSS Tooltip Generator.” I found quite a few generators. Their approach was to add a span with an absolute position inside the element you want a tooltip for.

But I already had an otherwise-complete project. I didn’t want to go back through and add all these span elements throughout my project. This would take time and will complicate my HTML. There had to be a better way.

At last, I found an amazing tutorial on YouTube about tooltips. The smart trick it used was to create a tooltip using the `:: before` and `:: after` CSS selectors. You can watch the video [here](https://www.youtube.com/watch?v=M4lQwiUvGlY&t=157s).

This trick is was smart and clean, but it wasn’t generic enough.

### Improving upon the solution

In this part, I’ll make this trick more generic and we’ll discover more about some CSS properties. Here’s what we ultimately want to be able to do:

<pre name="397c" id="397c" class="graf graf--pre graf-after--p"><button tooltip=”tooltip content here”> click here !! </button></pre>

Not only that, but we want to be able to specify the tooltip position easily:

<pre name="f723" id="f723" class="graf graf--pre graf-after--p"><button tooltip=”tooltip content here” tooltip-position=”left” > click here !! </button></pre>

First — as mentioned in the video — we’ll add a `before` and an `after` pseudo element to the button.

`::after` and `::before` are pseudo-elements, which allow you to insert content onto a page from CSS before or after the content of the element. They work like this:

<pre name="3012" id="3012" class="graf graf--pre graf-after--p">div::after {  
 content: “after”;  
}  
div::before {  
 content: “before”;  
}</pre>

The result looks something like this:

<pre name="8874" id="8874" class="graf graf--pre graf-after--p">  
 after  
</pre>

### Let’s walk through this step-by-step

**Step 1:** we’ll add a tooltip attribute like this:

<pre name="dc27" id="dc27" class="graf graf--pre graf-after--p"><button tooltip=”simple tooltip here”> click Me !! </button> </pre>

We need `::after` and `::before` pseudo-elements. These will be a simple rectangle with the content of the tooltip. We create a simple rectangle with CSS by adding a border around an empty element that we create with the `content` property.

The `::before` pseudo-element is used to show the tooltip content. We add it with the property `content` and extract the tooltip attribute value. The value for content can be a string, an attribute value from the element like our example, or even an image with `url(path/image.png)`.

To make this work, the button element’s position must be relative. In other words, the position of all elements inside the button is relative to the position of the button element itself.

We add also some position tricks to make the tooltip in the center with the transform property and this the result.

Here’s our CSS:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/e6590d7ee2930152ae7e651732fb8b55?postId=3d5a3e237346" data-media-id="e6590d7ee2930152ae7e651732fb8b55" allowfullscreen="" frameborder="0"></iframe>





**Step 2:** we just play with the `::before` and `::after` pseudo-elements to create a tooltip position. Our button HTML will look like this:

<pre name="614b" id="614b" class="graf graf--pre graf-after--p"><button tooltip=”tooltip here” tooltip-position=”left”> click here !! </button>  

</pre>

The tooltip-position can be: right, left, top, or bottom.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b3188bca30f1469da1b2d1e5afe5dc06?postId=3d5a3e237346" data-media-id="b3188bca30f1469da1b2d1e5afe5dc06" allowfullscreen="" frameborder="0"></iframe>





**step 3**: in this final step, we will add a simple hover animation to the tooltip.

This CodePen shows the end result (and you can click through to see the final code):





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/a43c8bcbce185c560bcfa84c0361f9ea?postId=3d5a3e237346" data-media-id="a43c8bcbce185c560bcfa84c0361f9ea" allowfullscreen="" frameborder="0"></iframe>





Thanks for reading! If you think other people should read this, press the 💚 button, tweet and share the post. Remember to follow me on Medium so you can get notified about my future posts.



![](https://cdn-images-1.medium.com/max/1600/1*LPHtw2Z8OsGaAfjNWSrm9w.gif)










