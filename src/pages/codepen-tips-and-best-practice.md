---
author: Michael Henderson
authorTwitter: https://twitter.com/mhenderson_4
authorFacebook: https://facebook.com/236387193379807
title: "CodePen Tips and Best Practice"
subTitle: "When working in FCC there are going to be times when you create your own projects with CodePen. Campers like to share these projects on t..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*v9Er_3fscyNz8LhhdJXQ4Q.png
url: https://medium.freecodecamp.org/codepen-tips-and-best-practice-cf926ebd0b11
id: codepen-tips-and-best-practice-cf926ebd0b11
date: 2016-06-08T04:12:17.512Z
tags: [
  "Web Development",
  "Learning To Code",
  "CSS",
  "Design",
  "Programming"
]
---
# CodePen Tips and Best Practice







![](https://cdn-images-1.medium.com/max/2000/1*v9Er_3fscyNz8LhhdJXQ4Q.png)







When working in [FCC](https://www.freecodecamp.com) there are going to be times when you create your own projects with [CodePen](https://codepen.io/). Campers like to share these projects on the [Free Code Camp Forum](http://forum.freecodecamp.com) to receive feedback from other Campers.

Today, I am going to show you how to get the most out of CodePen and how to maximize your feedback within the FCC Forum.

Get your sleeping bag and marshmallows. Oh, and don't forget to get your Yeti Cooler back from that bear who stole it while you were sleeping! We are going on a hike to learn a few things.

#### Organizing Your Code In CodePen

When working with CodePen for the first time I remember having all of my code in the HTML section of my Pen. Just like the image below I had my HTML, CSS, and <head> content all in one spot.







![](https://cdn-images-1.medium.com/max/2000/1*4P2EzWulnX3We54OiVZf2g.png)







There is absolutely nothing wrong with building your website like this. But, in CodePen there are ways to clean up your code to make it more organized and readable by others who are helping you or simply checking out your awesome project.

You can open this pen in another tab by clicking [here](http://codepen.io/michaelhenderson/pen/JKYYWz). This will allow you to play around with the code and follow along.

#### Let's Remove Some Things

<pre name="8726" id="8726" class="graf graf--pre graf-after--h4">**<!-- Remove The Following Lines of Code From The Html Section -->** </pre>

<pre name="b229" id="b229" class="graf graf--pre graf-after--pre"><!DOCTYPE html></pre>

<pre name="0e66" id="0e66" class="graf graf--pre graf-after--pre"><html lang="en"></pre>

<pre name="5f2d" id="5f2d" class="graf graf--pre graf-after--pre"></html></pre>

We do not need these pieces of code because CodePen automatically injects them into our project.

#### Follow these steps to properly place your head content where it needs to go in CodePen.

Let’s move our meta content and google font links to the Stuff For <head> part of CodePen.

Here is a snapshot of the code between the head tags. You should only move the code that I have in bold.

<pre name="f5f6" id="f5f6" class="graf graf--pre graf-after--p"><head>   
 <! — Theme Made By [www.w3schools.com](http://www.w3schools.com) — No Copyright -->  
 **<title>Bootstrap Theme Company Page</title>  
 <meta charset=”utf-8">  
 <meta name=”viewport” content=”width=device-width, initial-scale=1">**  
 <link rel=”stylesheet” href=”[http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css](http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css)">  
 **<link href=”**[**http://fonts.googleapis.com/css?family=Montserrat**](http://fonts.googleapis.com/css?family=Montserrat)**" rel=”stylesheet” type=”text/css”>  
 <link href=”**[**http://fonts.googleapis.com/css?family=Lato**](http://fonts.googleapis.com/css?family=Lato)**" rel=”stylesheet” type=”text/css”>**  
 <script src=”[https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js](https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js)"></script>  
 <script src=”[http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js](http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js)"></script>  
 <style>  
 body {  
 font: 400 15px Lato, sans-serif;  
 line-height: 1.8;  
 color: #818181;  
 }  
 h2 {  
 font-size: 24px;  
 text-transform: uppercase;  
 color: #303030;  
 font-weight: 600;  
 margin-bottom: 30px;  
 }  
 h4 {  
 font-size: 19px;  
 line-height: 1.375em;  
 color: #303030;  
 font-weight: 400;  
 margin-bottom: 30px;  
 }   
 .jumbotron {  
 background-color: #f4511e;  
 color: #fff;  
 padding: 100px 25px;  
 font-family: Montserrat, sans-serif;  
 }  
 .container-fluid {  
 padding: 60px 50px;  
 }  
 .bg-grey {  
 background-color: #f6f6f6;  
 }  
 .logo-small {  
 color: #f4511e;  
 font-size: 50px;  
 }  
 .logo {  
 color: #f4511e;  
 font-size: 200px;  
 }  
 .thumbnail {  
 padding: 0 0 15px 0;  
 border: none;  
 border-radius: 0;  
 }  
 .thumbnail img {  
 width: 100%;  
 height: 100%;  
 margin-bottom: 10px;  
 }  
 .carousel-control.right, .carousel-control.left {  
 background-image: none;  
 color: #f4511e;  
 }  
 .carousel-indicators li {  
 border-color: #f4511e;  
 }  
 .carousel-indicators li.active {  
 background-color: #f4511e;  
 }  
 .item h4 {  
 font-size: 19px;  
 line-height: 1.375em;  
 font-weight: 400;  
 font-style: italic;  
 margin: 70px 0;  
 }  
 .item span {  
 font-style: normal;  
 }  
 .panel {  
 border: 1px solid #f4511e;   
 border-radius:0 !important;  
 transition: box-shadow 0.5s;  
 }  
 .panel:hover {  
 box-shadow: 5px 0px 40px rgba(0,0,0, .2);  
 }  
 .panel-footer .btn:hover {  
 border: 1px solid #f4511e;  
 background-color: #fff !important;  
 color: #f4511e;  
 }  
 .panel-heading {  
 color: #fff !important;  
 background-color: #f4511e !important;  
 padding: 25px;  
 border-bottom: 1px solid transparent;  
 border-top-left-radius: 0px;  
 border-top-right-radius: 0px;  
 border-bottom-left-radius: 0px;  
 border-bottom-right-radius: 0px;  
 }  
 .panel-footer {  
 background-color: white !important;  
 }  
 .panel-footer h3 {  
 font-size: 32px;  
 }  
 .panel-footer h4 {  
 color: #aaa;  
 font-size: 14px;  
 }  
 .panel-footer .btn {  
 margin: 15px 0;  
 background-color: #f4511e;  
 color: #fff;  
 }  
 .navbar {  
 margin-bottom: 0;  
 background-color: #f4511e;  
 z-index: 9999;  
 border: 0;  
 font-size: 12px !important;  
 line-height: 1.42857143 !important;  
 letter-spacing: 4px;  
 border-radius: 0;  
 font-family: Montserrat, sans-serif;  
 }  
 .navbar li a, .navbar .navbar-brand {  
 color: #fff !important;  
 }  
 .navbar-nav li a:hover, .navbar-nav li.active a {  
 color: #f4511e !important;  
 background-color: #fff !important;  
 }  
 .navbar-default .navbar-toggle {  
 border-color: transparent;  
 color: #fff !important;  
 }  
 footer .glyphicon {  
 font-size: 20px;  
 margin-bottom: 20px;  
 color: #f4511e;  
 }  
 .slideanim {visibility:hidden;}  
 .slide {  
 animation-name: slide;  
 -webkit-animation-name: slide;  
 animation-duration: 1s;  
 -webkit-animation-duration: 1s;  
 visibility: visible;  
 }  
 [@keyframes](http://twitter.com/keyframes "Twitter profile for @keyframes") slide {  
 0% {  
 opacity: 0;  
 -webkit-transform: translateY(70%);  
 }   
 100% {  
 opacity: 1;  
 -webkit-transform: translateY(0%);  
 }  
 }  
 @-webkit-keyframes slide {  
 0% {  
 opacity: 0;  
 -webkit-transform: translateY(70%);  
 }   
 100% {  
 opacity: 1;  
 -webkit-transform: translateY(0%);  
 }  
 }  
 [@media](http://twitter.com/media "Twitter profile for @media") screen and (max-width: 768px) {  
 .col-sm-4 {  
 text-align: center;  
 margin: 25px 0;  
 }  
 .btn-lg {  
 width: 100%;  
 margin-bottom: 35px;  
 }  
 }  
 [@media](http://twitter.com/media "Twitter profile for @media") screen and (max-width: 480px) {  
 .logo {  
 font-size: 150px;  
 }  
 }  
 </style>  
</head> </pre>

1.  Click the settings button.







![](https://cdn-images-1.medium.com/max/2000/1*85ZMmdFZoncEElpprFjAKg.png)







2\. Click HTML.







![](https://cdn-images-1.medium.com/max/2000/1*P2L3u6NQxdYLJ6n9TsItog.png)







3\. Paste the content into **Stuff for <head>**. Once you are done click Save & Close.







![](https://cdn-images-1.medium.com/max/2000/1*Vi5FTpRuhgRvtAlbBsotHA.png)







#### Now let's move our CSS where it supposed to go

1.  Copy everything between your opening and closing styles tag and paste it into the CSS section.







![](https://cdn-images-1.medium.com/max/2000/1*IbHfQXbgI7WIpSTEQJTjog.png)







Your HTML and CSS are now separated. This makes for an organized and efficient working environment. Please note: You do not have to put <styles> tags in your CSS section.

#### Adding The [Bootstrap](http://getbootstrap.com/) Stylesheet To Your Project

1.  Click Settings.
2.  Click **CSS.**







![](https://cdn-images-1.medium.com/max/2000/1*HJTFIhxsYNc8IRqDNu5mPw.png)







3\. Click the drop down arrow at the bottom where it says “Quick-add” and select bootstrap. It will add it to your external CSS links.







![](https://cdn-images-1.medium.com/max/2000/1*aeKSXsxRobtG9IfuEyzEZg.png)







**Quick Tip:** You can also add Font Awesome as an external style sheet. Read the content under **Add External CSS.**

#### **Adding JavaScript**

1.  Still in settings, click **JavaScript.**







![](https://cdn-images-1.medium.com/max/2000/1*cnT1GVXX4wYTHVskId2wJQ.png)







2\. Click the “Quick-add” drop down menu and add jQuery and Bootstrap.

3\. Click Save & Close.

#### Moving Our JavaScript from the HTML section

1.  Scroll to the bottom and copy the javascript code between your script tags.

<pre name="3598" id="3598" class="graf graf--pre graf-after--li"><script>  
$(document).ready(function(){  
 // Add smooth scrolling to all links in navbar + footer link  
 $(“.navbar a, footer a[href=’#myPage’]”).on(‘click’, function(event) {  
 // Make sure this.hash has a value before overriding default behavior  
 if (this.hash !== “”) {  
 // Prevent default anchor click behavior  
 event.preventDefault();</pre>

<pre name="fabc" id="fabc" class="graf graf--pre graf-after--pre">// Store hash  
 var hash = this.hash;</pre>

<pre name="09ec" id="09ec" class="graf graf--pre graf-after--pre">// Using jQuery’s animate() method to add smooth page scroll  
 // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area  
 $(‘html, body’).animate({  
 scrollTop: $(hash).offset().top  
 }, 900, function(){  

 // Add hash (#) to URL when done scrolling (default click behavior)  
 window.location.hash = hash;  
 });  
 } // End if  
 });  

 $(window).scroll(function() {  
 $(“.slideanim”).each(function(){  
 var pos = $(this).offset().top;</pre>

<pre name="696a" id="696a" class="graf graf--pre graf-after--pre">var winTop = $(window).scrollTop();  
 if (pos < winTop + 600) {  
 $(this).addClass(“slide”);  
 }  
 });  
 });  
})  
</script></pre>

2\. Paste it in the JavaScript section.







![](https://cdn-images-1.medium.com/max/2000/1*pg_-LYVAoLzY7DupCybU8A.png)







#### Finishing up

Now that your HTML, CSS, and JavaScript are separated out, you have a more organized working environment within CodePen. This also makes it easier for others to help you in the Free Code Camp Forum, because they can locate your code and easily diagnose any errors. Play around in the CodePen settings and see what else you can do.

Next time you build a project in CodePen you will know how to add stylesheets, where to properly place <head> content, how to add a JavaScript library, and how to separate your HTML, CSS, and JavaScript. I hope this helps!

I also have a [video](http://forum.freecodecamp.com/t/codepen-tips-for-building-your-projects/5824) explaining how to do some of this too.

Happy coding my friends!








