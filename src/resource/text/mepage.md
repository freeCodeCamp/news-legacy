---
author: Divya Mistry
authorTwitter: https://twitter.com/divyamistry
authorFacebook: none
title: "MePage"
subTitle: "A Single-page Destination on the Web"
coverSrc: https://cdn-images-1.medium.com/max/2000/1*6z_QTQc5m385kAYhsjlt2w.jpeg
url: https://medium.freecodecamp.org/mepage-8b10e260d73
id: mepage-8b10e260d73
date: 2015-11-08T08:50:43.085Z
tags: [
  "Web Development",
  "CSS",
  "Portfolio",
  "Marketing",
  "Startup"
]
---
# MePage

## A Single-page Destination on the Web

After going through some front-end development tutorials on [Free Code Camp](https://medium.com/@FreeCodeCamp), I decided to try my hands at this simple [Zipline challenge](http://www.freecodecamp.com/challenges/zipline-build-a-personal-portfolio-webpage) of creating a portfolio page. I’ll refer to this single-page destination as a _MePage_ for the purpose of this post.











* * *







We’ll do this as a two-step process. First we’ll create a page using [CodePen](http://codepen.io/) to iterate our design and the code, and then optionally we’ll [push](https://help.github.com/articles/pushing-to-a-remote/) it to [Github Pages](https://pages.github.com) when we are satisfied with the results. Do keep in mind that all of this can be done independent of Codepen and Github Pages.

With that in mind, here we go.

### CodePen



![](https://cdn-images-1.medium.com/max/1600/1*fjd-3vkg7STzTTAUM5DNqw.png)

codepen.io Homepage



CodePen provides an easy way to test your front-end development ideas. You can create a set of web pages to learn and/or show-off your web development skills there, and share it with the world. We’ll use it to build a single-page personal site (i.e. a _MePage_) where the visitor can learn about you, your social media presence, and get your contact information.

Step 1: Create a [+New Pen](http://codepen.io/pen/).

Step 2: In the HTML box, write the following. This shows the general structure of the MePage.

<pre name="7ca6" id="7ca6" class="graf graf--pre graf-after--p"><body>  
  <!-- navigation bar -->  
  <!-- header text -->  
  <!-- social icons -->  
  <!-- inspirational quote -->  
  <!-- about me -->  
  <!-- contact me -->  
</body></pre>

Step 3: We’ll utilize Bootstrap for our site. Let’s include that for our use. Click on the gear icon on the top-left corner of the CSS block. In the CSS settings window, click on the Quick-add drop-down menu, and select Bootstrap.







![](https://cdn-images-1.medium.com/max/2000/1*o4wtaxwaN7_MdL2LUdjNZw.png)

Add Bootstrap using Quick-add in CSS settings







While we are at it, let’s also add jQuery and Bootstrap JavaScript libraries to help with interactivity of the menu based navbar. To do this, go to the JavaScript settings page, and Quick-add the jQuery and Bootstrap libraries.

Now we start filling in the various parts of the page.

Step 4: Let’s first create the navigation bar. We’ll utilize the Bootstrap’s [fixed-top navigation](http://getbootstrap.com/examples/navbar-fixed-top/) bar for this.

_Although not necessary, you can read the nitty-gritty details about Bootstrap navbar_ [_here_](http://getbootstrap.com/components/#navbar)_. This will help you customize the navbar later on._

*   Create a <nav> element and a container . This is where the navbar contents will go.

<pre name="d7e8" id="d7e8" class="graf graf--pre graf-after--li"><!-- navigation bar -->  
  <nav class="navbar navbar-default navbar-fixed-top">  
      
      <!-- contents of navigation -->  
      <!-- Add the next bit of code here -->  
      
  </nav></pre>

*   We can also utilize the responsive design for navigation menu when the web page is being viewed on smaller screens. The following code will show the contents of navigation items in a collapsible menu on smaller screens. We’ll also show a Brand Name or a Logo as well. I have chosen to keep my own name as a brand name here.

<pre name="9e31" id="9e31" class="graf graf--pre graf-after--li">  
  <button type="button" class="navbar-toggle collapsed"  
            data-toggle="collapse" data-target="#navbar"  
            aria-expanded="false" aria-controls="navbar"></pre>

<pre name="2778" id="2778" class="graf graf--pre graf-after--pre">    <!-- add the toggle button with 3 horizontal lines/bars -->  
    Toggle navigation  
      
      
      
  </button>  
  Divya Mistry  
  
<!-- Add the next bit of code here --></pre>







![](https://cdn-images-1.medium.com/max/2000/1*qKoRflAv-BX7nfxjkSjeiw.png)

Navigation bar starting to shape up.







*   Next we pick the navigation items for the navbar. For this exercise, we’ll create a _Home_ link to go jump to the default view, an _About_ link to jump to the “about me” section, and a _Contact_ link to jump to thecontact information. These could all be different pages; however, we’ll use the magic of in-page bookmarks and Bootstrap to keep everything in a single-page and jump around the relevant sections. Add the following code where indicated in the previous code chunk.

<pre name="4f10" id="4f10" class="graf graf--pre graf-after--li">  
  <!-- add items to the nav bar -->  
  <ul class="nav navbar-nav navbar-right">  
    <li>Home</li>  
    <li>About</li>  
    <li>Contact</li>  
  </ul>  
  
<!-- Add the next bit of code here --></pre>







![](https://cdn-images-1.medium.com/max/2000/1*VHDcqdUOcjNnh-u2cLIBrQ.png)

Navigation bar ready.







We are done with the navigation bar now. You’ll notice that we have anchored the _About_ and _Contact_ links to #about-me and #contact-me references, but they do nothing if you click on the link. Let’s create those along with some basic structure of our page.

<pre name="4109" id="4109" class="graf graf--pre graf-after--p">  
    
    <!-- header text -->  
    <!-- ADD the header text bit of code HERE -->  
    <!-- social icons -->  
    <!-- ADD the Social buttons bit of code HERE -->  
    <!-- inspirational quote -->  
    <!-- ADD the inspirational quote bit of code HERE -->  
    
    
    <!-- about me -->  
    <!-- ADD the About text bit of code HERE -->  
    
    
    <!-- contact me -->  
    <!-- ADD the Contact text bit of code HERE -->  
    
</pre>

Let’s start filling in the various sections. Add the following lines of code where indicated with <!-- _ADD the … HERE -->_ comments in HTML code above.

*   Header text

<pre name="b552" id="b552" class="graf graf--pre graf-after--li">  
  <!-- name title -->  
  <h1>Divya Mistry</h1>  
  <h4>I *will* bioinformatics you</h1>  
  <hr>  
</pre>

*   Social icons

<pre name="5a12" id="5a12" class="graf graf--pre graf-after--li">  
  <!-- social buttons -->  
  Twitter  
  LinkedIn  
  Github  
</pre>

*   Inspirational quote

<pre name="9ee0" id="9ee0" class="graf graf--pre graf-after--li">  
  <blockquote class="blockquote-reverse my-quote">  
    <p>The fool doth think he is wise, but the wise man knows himself to be a fool.</p>  
    <footer>William Shakespeare in <cite title="India">As You Like It</cite></footer>  
  </blockquote>  
</pre>







![](https://cdn-images-1.medium.com/max/2000/1*vDRQEOqSDYC9NhmgYlGdZw.png)

Content of the main page section.







You’ll notice that a part of the title is cutoff, and the quote doesn’t look quite prominent or aligned. We’ll fix that in a minute. Let’s continue adding the details to remaining sections of the page.

*   About me section. We’ll add a description on left side, and a photograph on the right.

<pre name="f09c" id="f09c" class="graf graf--pre graf-after--li"> <!-- About me - description -->  
  <p class="lead">Consumer and Producer of Sciencey S#!t.</p>  
  <p>I am a student of Bioinformatics and Computational Biology. I like making science easier to use and understand. When I'm not in lab/office, I am at home listening to Bollywood tunes.</p>  
  
 <!-- About me - photo -->  
  <img class="img-rounded" height="250px" alt="Divya's face" src="[https://lh3.googleusercontent.com/kQABk1XZ1HLRrtfkZA9tZH8WDmLgDqWIG44v-IVASL65N1hWX30](https://lh3.googleusercontent.com/kQABk1XZ1HLRrtfkZA9tZH8WDmLgDqWIG44v-IVASL65N1hWX30)">  
</pre>

*   Contact me

<pre name="7170" id="7170" class="graf graf--pre graf-after--li"> <!-- contact me photo -->  
  <img class="img-rounded" src="[https://openclipart.org/image/150px/svg_to_png/98293/1290715998.png](https://openclipart.org/image/150px/svg_to_png/98293/1290715998.png)" alt="Contact Me">  
  
 <!-- contact me text -->  
    
    <br>  
    My Street Address<br>  
    Unit 001<br>  
    Ames, IA 50011<br>  
    [515-555-0144](http://twitter.com/divyamistry "Twitter profile for @divyamistry")</abbr>  
  </address>  
</pre>







![](https://cdn-images-1.medium.com/max/2000/1*hwSjqh2su5swE8sduMLk7A.png)

All the content added. We still need to fix the spacing.







*   Footer. _Ah! I leave this for your exercise. Try to read the Bootstrap documentation and create your own footer. Here’s one idea: add a simple_ /* Lower the main text below the navigation bar */  
body { padding-top: 3em; }</pre>

*   Right now, all the sections are too close together. Let’s separate them to give plenty of spacing in between. You can play around with this padding to your liking. I prefer around a typical laptop screen vertical size of 768px.

<pre name="93a3" id="93a3" class="graf graf--pre graf-after--li">/* each row should be a big screen in itself */  
.row { height: 768px; }</pre>

*   Let’s make the Shakespeare quote a lot more prominent on the screen.

<pre name="84a5" id="84a5" class="graf graf--pre graf-after--li">/* Spacing above quote */  
.my-quote { margin-top: 5em; }</pre>

<pre name="ded6" id="ded6" class="graf graf--pre graf-after--pre">/* Quote text font, size, and color */  
.my-quote>p {   
  font-family: "Lora", serif;   
  font-size: 3em;   
  color: #aaa;  
}</pre>

<pre name="331b" id="331b" class="graf graf--pre graf-after--pre">/* Quote attribution font size and color */  
.my-quote>footer { font-size: 1em; color: #bbb; }</pre>

You’ll notice that I have chosen the [Lora](https://www.google.com/fonts/specimen/Lora) font-family for my quote. This font is available via Google Fonts. To use it, all you have to do is go to your HTML settings (click on the gear icon on top-left corner of the HTML editor), and add the following line in the **Stuff for <head>** text box.

<pre name="7ee5" id="7ee5" class="graf graf--pre graf-after--p"><link href='[https://fonts.googleapis.com/css?family=Lora:400italic'](https://fonts.googleapis.com/css?family=Lora:400italic%27) rel='stylesheet' type='text/css'></pre>







![](https://cdn-images-1.medium.com/max/2000/1*uNnc8LmFoEwkVtP005lDmQ.png)

Adding Google Fonts stylesheet to <head>.







*   Finally, let’s give both information sections some padding space at the top so that when we jump to them, the navigation bar does not hide the content.

<pre name="0539" id="0539" class="graf graf--pre graf-after--li">/* for each of the sections of the page */  
#about-me { padding-top: 6em; }  
#contact-me { padding-top: 6em; }</pre>

_Note that this padding is necessary in spite of the padding of the <body> element, because the in-line bookmark anchors are referenced to the top of the browser window view port where <body> starts, and not relative to where the content inside the body section starts._







![](https://cdn-images-1.medium.com/max/2000/1*-o-kQB6Nr13Ha-yKJgiROg.png)

CSS updated to correct the spacing and alignments.







Step 6: Make any CSS modifications you would like for the footer. I decided to present a slightly smaller text.

Here is my [resulting CodePen](http://codepen.io/anon/pen/wKYqMW) based on this exercise. You can add background images to the body and all the sections to give it a [nice visual effect](http://codepen.io/ThiagoFerreir4/full/eNMxEp).

### Github Pages



![](https://cdn-images-1.medium.com/max/1600/1*UP16Y8izJ8IASnBfd-ZG-g.png)



Github provides a great way to [host static pages](https://pages.github.com/) for yourself and for your projects. I decided to create a [Github user Page](http://divyamistry.github.io/) using the results of this exercise. The code is available in [this repository](https://github.com/divyamistry/divyamistry.github.io). Feel free to fork the repository.

_There are several good tutorials to teach you how Github works. If you are unfamiliar with_ [_git_](https://www.atlassian.com/git/) _and_ [_Github_](https://try.github.io/levels/1/challenges/1)_, give them a go. It’s a skill worth learning._







![](https://cdn-images-1.medium.com/max/2000/1*eAdEAIWlpYgrfTXUuaOqIg.png)

My Github Page using this tutorial.













* * *







### Final words

Hope you liked this exercise, and were able to make your own MePage. Comment here with your CodePen or Github URL to show your results. If you ended up modifying this, and made your own version of an awesome MePage, please share that too. I would love to see that. And finally, if you want to stay in touch, [@divyamistry](https://twitter.com/divyamistry) is a great way to holler.








