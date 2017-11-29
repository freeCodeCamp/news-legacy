---
author: Jonathan Z. White
authorTwitter: https://twitter.com/JonathanZWhite
authorFacebook: none
title: "Leveling up in CSS"
subTitle: "CSS seems easy at first. After all, it’s just styling, right?..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*pctGU4jDyVlIT2GbiiQ3SQ.png
url: https://medium.freecodecamp.org/leveling-up-css-44b5045a2667
id: leveling-up-css-44b5045a2667
date: 2016-06-21T16:20:42.861Z
tags: [
  "CSS",
  "Web Development",
  "Front End Development",
  "Design",
  "Web Design"
]
---
# Leveling up in CSS

CSS seems easy at first. After all, it’s just styling, right?

But, give it time. Soon, CSS will show you the true depths of its complexity.

There are four things you can do to stay sane while using CSS at scale: use proper semantics, modularize, adopt a naming convention, and follow the single responsibility principle.

#### Use proper semantics

In HTML and CSS there is the concept of semantic markup. Semantics is the meaning of words and their relationships. In the context of HTML, it means using appropriate markup tags. Here is a classic example.

<pre name="65fb" id="65fb" class="graf graf--pre graf-after--p"><!-- bad -->  
</pre>

<pre name="3069" id="3069" class="graf graf--pre graf-after--pre"><!-- good -->  
<footer></footer></pre>

Semantic HTML is pretty straightforward. On the other-hand, semantic CSS is much more abstract and subjective. Writing semantic CSS means choosing class names that convey structural meaning and function. Come up with class names that are easy to understand. Make sure they aren’t too specific. That way, you can reuse your classes.



![](https://cdn-images-1.medium.com/max/1600/1*bXUT9ToNeBTYfTAFY18RrQ.png)



To illustrate good semantic class names, here is a simplified example of Medium’s CSS.

<pre name="bd33" id="bd33" class="graf graf--pre graf-after--p">  
    
      
        
        <!-- content -->  
        
    </article>  
    
</pre>

From the code, you can immediately discern structure, role, and meaning. The parent class is _stream,_ a list of articles. The child class is _streamItem,_ an actual article within the list. It’s clear how parent and child relate to one another. Furthermore, those classes are used on every page that features articles.

**You should be able to read HTML and CSS like a book. It should tell a story. A story has characters and relationships between them. More semantic CSS will ultimately make your code more maintainable.**

For further reading, check out [What Makes for Semantic Class Names](https://css-tricks.com/semantic-class-names/), [Naming CSS Stuff is Really Hard](https://seesparkbox.com/foundry/naming_css_stuff_is_really_hard), and [Semantics and Sensibility](http://csswizardry.com/2010/08/semantics-and-sensibility/). For a longer read, see [About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/).

#### Modularize

In the age of component-based libraries like React, modularization is king. Think of components as composable modules created by deconstructing interfaces. Below is Product Hunt’s front page stream. As an exercise, let’s break the stream down into various components.



![](https://cdn-images-1.medium.com/max/1600/1*DYyfF6m1JW4DTSncGztYlg.png)



Each colored outline represent a component. The _stream_ has many _stream items_.

<pre name="2345" id="2345" class="graf graf--pre graf-after--p">  
    
    <!-- product info -->  
    
</pre>

Most components can be broken down into even smaller components.



![](https://cdn-images-1.medium.com/max/1600/1*_SKkr5D4W-UmBsABXkGhFw.png)



Each _stream item_ has a _thumbnail_ and information about a featured product.

<pre name="9a15" id="9a15" class="graf graf--pre graf-after--p"><!-- STREAM COMPONENT -->  
  
  </pre>

<pre name="9d24" id="9d24" class="graf graf--pre graf-after--pre">    <!-- POST COMPONENT -->  
      
      <img src="thumbnail.png" class="postThumbnail"/>  
        
        <!-- product info -->  
        
    </pre>

<pre name="8c7f" id="8c7f" class="graf graf--pre graf-after--pre">    
</pre>

Because the _stream_ component is independent of its children and vice versa, you can easily adjust or switch out the _post_ class without making significant changes to the _stream_ class.

Thinking in components will help you make your decouple code. The more [decoupled](https://en.wikipedia.org/wiki/Coupling_%28computer_programming%29) your code is, the lower the interdependence between your classes. This makes your code easier to modify and work with in the long run.



![](https://cdn-images-1.medium.com/max/1600/1*kylsX1bPHVD-qBjSS6KSJA.png)

[Component driven design](https://dribbble.com/shots/1200218-iOS-7-UI-Components)



When modularizing your CSS, start off by breaking your design down into component. You can do this with paper and pencil or in a program like Illustrator or Sketch. Identifying components will give you an idea of how to name your classes and how they relate to one another.

To read more about component driven CSS, check out [CSS Architectures: Scalable and Modular Approaches](https://www.sitepoint.com/css-architectures-scalable-and-modular-approaches/), [Writing Modular CSS with Sass](http://sassbreak.com/writing-modular-css-with-sass/), and [Modularizing Your Front-End Code for Long Term Maintainability and Sanity](http://www.berndtgroup.net/thinking/blog/development/modularizing-your-front-end-code-for-long-term-maintainability-and-sanity).

#### Choose a good naming convention

There are dozens of CSS naming conventions out there. Some people swear by their choice of convention, claiming theirs is better than others. In truth, the best naming convention is different for each person. The best advice I ever received on this is: choose the naming convention that makes the most sense to you.

Here is a short list of some of the naming conventions people use:

*   [Object oriented CSS OOCSS](https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/)
*   [Block element modifier (BEM)](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
*   [Scalable and modular architecture for CSS (SMACSS)](https://smacss.com/)
*   [Atomic](http://acss.io/)

One of my favorite naming conventions is BEM. BEM stands for block, element, and modifier. [Yandex](https://www.yandex.com/), the Russian equivalent of Google, came up with it to issues they had with their CSS codebase at scale.



![](https://cdn-images-1.medium.com/max/1600/1*IiVPU9-HXHbxGcx6IJ8Wgg.png)



BEM is one of the simplest — yet strictest — of the naming conventions.

<pre name="9545" id="9545" class="graf graf--pre graf-after--p">.block {}  
.block__element {}  
.block--modifier {}</pre>

Blocks represent higher level classes. Elements are children of blocks. And modifiers represent different states.



![](https://cdn-images-1.medium.com/max/1600/1*hkJWfX4XgUf0wbn6iWognA.png)



<pre name="fc17" id="fc17" class="graf graf--pre graf-after--figure">  
 <input type="search__btn search__btn--active" />  
</pre>

In the example above, the class _search_ is the block and _search button_ is its element. If we want to modify the state of the button, we can add a modifier like _active_.

One thing to remember about naming conventions is that regardless of which CSS naming convention you prefer, you will often times inherit or work on codebases with different standards. Be open to learning new standards and alternative ways of thinking about CSS.

You can read more about BEM in [Getting your head ’round BEM syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/), [BEM 101](https://css-tricks.com/bem-101/), and [Intro to BEM](http://getbem.com/introduction/). For general reading about different conventions, check out [OOCSS, ACSS, BEM, SMACSS: what are they? What should I use?](http://clubmate.fi/oocss-acss-bem-smacss-what-are-they-what-should-i-use/)

#### Follow the single responsibility principle

The single responsibility principles states that every module or class should have responsibility over a single part of the functionality provided by the software, and that responsibility should be entirely encapsulated by the class.

Within the context of CSS, the single responsibility principles means that pieces of code, classes and modules should do only one thing. When applied to CSS file organization, this means that self-contained components like carousels and navigation bars should have their own CSS file.

<pre name="086f" id="086f" class="graf graf--pre graf-after--p">/components   
  |- carousel  
  |- |- carousel.css  
  |- |- carousel.partial.html  
  |- |- carousel.js  
  |- nav  
  |- |- nav.css  
  |- |- nav.partial.html  
  |- |- nav.js</pre>

Another common pattern in file organization is grouping files by functionality. For example, in the snippet above, all the files related to the carousel component are grouped together. Adopting this approach makes finding files much easier.

In addition to separating component styles, it’s good to separate global style using the single responsibility principle.

<pre name="279c" id="279c" class="graf graf--pre graf-after--p">/base  
  |- application.css   
  |- typography.css  
  |- colors.css  
  |- grid.css</pre>

In the example, each style concern is separated into its own file. This way, if you want to update your colors, you know exactly where to look.

Regardless of which file organization convention you use, let the single responsibility principle help guide your decisions. If one file starts getting bloated, consider partitioning it out based on what makes logical sense.

For more on file structures and CSS architecture, read [Aesthetic Sass 1: Architecture and Style Organization](https://scotch.io/tutorials/aesthetic-sass-1-architecture-and-style-organization) and [Scalable and Maintainable CSS Architecture](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/).

When the single responsibility principle is applied to individual CSS classes, it means that each class should have only one function. In other words, separate out styles into different classes based on concerns. Here is a classic example:

<pre name="2586" id="2586" class="graf graf--pre graf-after--p">.splash {  
  background: #f2f2f2;  
  color: #fffff;  
  margin: 20px;  
  padding: 30px;  
  border-radius: 4px;  
  position: absolute;  
  top: 0;  
  right: 0;  
  bottom: 0;  
  left: 0;  
}</pre>

In the example above, we are mixing concerns. The _splash_ class not only contains presentation and styling logic for itself, but for its children as well. To remedy this, we can split the code into two separate classes.

<pre name="ac2b" id="ac2b" class="graf graf--pre graf-after--p">.splash {  
  position: absolute;  
  top: 0;  
  right: 0;  
  bottom: 0;  
  left: 0;  
}</pre>

<pre name="3998" id="3998" class="graf graf--pre graf-after--pre">.splash__content {  
  background: #f2f2f2;  
  color: #fffff;  
  padding: 30px;  
  border-radius: 4px;  
}</pre>

Now we have a _splash_ and _splash content_. We can use _splash_ as a generic full-bleed class that takes any child. All of the concerns of the child, in this case the _splash content_, are decoupled from the parent.

You can read more about applying the single responsibility approach to styling and classes in [The single responsibility principle applied to CSS](http://csswizardry.com/2012/04/the-single-responsibility-principle-applied-to-css/) and [Single Responsibility](http://drewbarontini.com/articles/single-responsibility/).

#### Simplicity over complexity

Ask any good front-end developer or CSS architect and they will tell you that they’ve never been fully satisfied with their code. Writing good CSS is an iterative process. Start simple, follow basic CSS conventions and style guides, and iterate from there.

I would love to know how you approach CSS. What is your favorite naming convention? How do you organize your code? Feel free to leave a note or [Tweet](https://twitter.com/JonathanZWhite) to me.

_P.S. If you liked this article, it would mean a lot if you hit the recommend button or share with friends._











* * *







If you want more, you can follow me on [Twitter](https://twitter.com/JonathanZWhite) where I post non-sensical ramblings about design, front-end development, bots, and machine learning.







[![](https://cdn-images-1.medium.com/max/1200/1*UOsjAdUZ9O0QSyfXOpQPbA.png)](https://twitter.com/JonathanZWhite)





[![](https://cdn-images-1.medium.com/max/1200/1*mxQhZLqG7l5dMLvxYAklgw.png)](http://mrwhite.space/signup)










