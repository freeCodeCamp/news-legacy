---
author: Thomas Noe
authorTwitter: none
authorFacebook: none
title: "Applying JavaScript: User Scripts"
subTitle: "Writing a Userscript is a fun way to use your JavaScript skills. It takes you out of the editor into the browser with real time feedback ..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*ec0HoiWFiji_XNA4OXk29w.jpeg
url: https://medium.freecodecamp.org/applying-javascript-user-scripts-2e505643644d
id: applying-javascript-user-scripts-2e505643644d
date: 2016-04-01T17:04:17.639Z
tags: [
  "Web Development",
  "Front End Development",
  "JavaScript",
  "Programming",
  "Technology"
]
---
# Applying JavaScript: User Scripts



![](https://cdn-images-1.medium.com/max/1600/1*ec0HoiWFiji_XNA4OXk29w.jpeg)

[Art credit](http://incautusofficial.deviantart.com/art/Flat-Browsers-391657414)



Writing a Userscript is a fun way to use your JavaScript skills. It takes you out of the editor into the browser with real time feedback and validation.

#### What is a user script?

> Userscripts _(a.k.a User Scripts, User scripts, or .user.js)_ are open-source licensed add-ons for web browsers that change web pages as they are loaded. They give users the power to make websites do what they want them to, rather than what was originally intended.

User scripts are written in JavaScript and allow you to tweak the look and feel of a webpage on your browser. The scripts only effect your browser, not the actual webpage.

#### A quick warning

> You should be aware of privacy issues when using userscripts, and should not install them from sources you do not trust. Userscripts can carry out actions on your behalf and can potentially access any information on a website you have access to, or that you enter into a website. They are often permitted to carry out functions that scripts on normal websites cannot, such as storing information on your computer and sharing it between website. Badly written userscripts could potentially also be exploited by malicious websites.

_explanations taken from_ [https://github.com/OpenUserJs/OpenUserJS.org/wiki/Userscript-Beginners-HOWTO](https://github.com/OpenUserJs/OpenUserJS.org/wiki/Userscript-Beginners-HOWTO)

#### Why user scripts?

Free Code Camp has a lot of great real world projects that will enrich your skill set and portfolio. I personally like using the skills I have learned in JavaScript, jQuery, and CSS to modify my day to day browsing.

Some User Scripts have been extremely popular and were made into browser extensions. An example of one would be the Reddit Enhancement Suite found at [http://redditenhancementsuite.com/](http://redditenhancementsuite.com/).

You too could use your user script as a base of a browser extension!

### Getting started

User scripts are run from browser extensions themselves. Grease Monkey (FireFox) was the pioneer add on to allow people to customize their browsing experience. Install the appropriate plug in for your browser.

For FireFox: **_Grease Monkey_**

[**Greasemonkey**  
_The Development Channel lets you test an experimental new version of this add-on before it's released to the general…_addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/ "https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/")[](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)

For Chrome: **_Tamper Monkey_**

[**Tampermonkey**  
_The most popular userscript manager for Blink-based browsers_chrome.google.com](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en "https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en")[](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)

For this tutorial I will be using Chrome with Tamper Monkey.

There shouldn’t be any significant differences with the process after installing either Grease Monkey or Tamper Monkey.

Just in case, here is a quick link to installing Grease Monkey (as well as making a few things with it.)

[**Greasemonkey Tutorial for Beginners**  
_In Greasemonkey tutorial, I have covered how to write Greasemonkey user scripts. After this tutorial,you will be able…_hayageek.com](http://hayageek.com/greasemonkey-tutorial/#install-greasemonkey "http://hayageek.com/greasemonkey-tutorial/#install-greasemonkey")[](http://hayageek.com/greasemonkey-tutorial/#install-greasemonkey)

### the project

We are going to be making a slight change to the home page on Hacker News [http://news.ycombinator.com](http://news.ycombinator.com).



![](https://cdn-images-1.medium.com/max/1600/1*Gk3SbYr0W3BF85PEd937tw.jpeg)

HackerNews homepage



We will be using jQuery to make alternating links background colors slightly different to improve readability.

#### start a new script

Click on the Tamper Monkey icon in the top right and select ‘_Add a new script’_ from the dialog box.

You should be brought to a new tab that looks like this



![](https://cdn-images-1.medium.com/max/1600/1*gR0YqSsl6jLKi2Q0CHTo2w.jpeg)

new script page



#### Fill in the information

After starting a new script the first thing we want to do is fill in the script information at the top. Go ahead and fill in the following attributes how ever you want

*   name
*   description
*   author

I will show you what mine looks like as well.

#### Add jQuery

right before the line

<pre name="1922" id="1922" class="graf graf--pre graf-after--p">// ==/UserScript==</pre>

add a line with the text of

<pre name="7d4d" id="7d4d" class="graf graf--pre graf-after--p">// @require http://code.jquery.com/jquery-latest.js</pre>

Think of this as importing/requiring jQuery for a JS project.

#### here is mine







![](https://cdn-images-1.medium.com/max/2000/1*FUvxUM49iidNY9inCu5-eQ.jpeg)

script info filled out







### Hello script.js!

Let’s see if it our script loads on [http://news.ycombinator.com](http://news.ycombinator.com) and jQuery is good to go.

After the // _your code here_ line add the following code

<pre name="d393" id="d393" class="graf graf--pre graf-after--p">$(document).ready(function() {  
  alert('WINNING');  
});</pre>

and enter **Ctrl + s** or click on the save button on the left

You may be brought to the following page. If not, click on the Installed userscripts tab.







![](https://cdn-images-1.medium.com/max/2000/1*3tUeAEJdd8KIFEsRKcSISQ.jpeg)

installed userscripts page







Awesome! Out script is loaded into Tamper Monkey. The green dot on the left means that the script is turned on. You can even see the Hacker News logo in the screenshot.

#### execute the script

Visit [Hacker News](http://news.ycombinator.com) in your browser and if you’ve been following along and everything went well, you should see



![](https://cdn-images-1.medium.com/max/1600/1*0r0uIH20bDZQEcFgIAjBrg.jpeg)

working alert dialog



### Fire up the debugger

It’s time to find the post elements we want to modify. Enter **_Ctrl + Shift + i_** to bring up the browser debugger.

Now we want to select an element to take a closer look. Clicking on the blue square with the mouse in it at the top left of the debugger will open the element selector. You can also use the key command **_Ctrl + Shift + c_**.



![](https://cdn-images-1.medium.com/max/1600/1*N9b1EQ2E5ss_FMxCCj7k8Q.jpeg)

element selector



As you can see I found an element called _td.title_. After clicking on it the element is highlighted in the elements tab of the debugger (also shown above.)

Highlighting the element above our title called

<pre name="dc65" id="dc65" class="graf graf--pre graf-after--p"><tr class="athing"></pre>

selects this in the browser



![](https://cdn-images-1.medium.com/max/1600/1*UGSrDikAyEtako1hlS-vRw.jpeg)

BINGO



Bingo. It looks like we found the element we want. Hacker News has a clean HTML layout so it wasn’t too difficult to find our target element.

If you remember your jQuery, all you have to do to find all of the post elements is use the selector

<pre name="1502" id="1502" class="graf graf--pre graf-after--p">$('.athing')</pre>

#### do something to our post element

Now that we have a way to select our element with jQuery we can alter our element. Let’s change the background color of the posts using the following code. Change the $(document).ready() code to this

<pre name="40c8" id="40c8" class="graf graf--pre graf-after--p">$(document).ready(function() {  
  $('.athing').css('background-color', '#DDD');  
});</pre>

_note: #DDD is shorthand for #DDDDDD;_

let’s look at the resulting page. Remember to save your userscript then refresh the HackerNews page. You may have to close your debugger to view the whole page.



![](https://cdn-images-1.medium.com/max/1600/1*zGkr4EAf3RvRNYkDHN6YbQ.jpeg)

altered Hacker News front page



Are we done yet? Not quite. We have changed all of our post elements instead of alternating. It may look like the zebra effect we wanted but that’s only because the score/subinfo element isn’t effected. _If you feel inclined to alter that element as well please do and feel free to post your method in the comments. It’s outside of the scope of this guide._

_Oh no?! What do we do… I don’t want to write any loops!_

#### jQuery to the rescue

Have no fear, fellow Campers. jQuery has come to the rescue yet again.

jQuery provides special selectors just for an occasion like this.

Now introducing **:odd**

[**:odd Selector**  
_Description: Selects odd elements, zero-indexed. See also even. In particular, note that the 0-based indexing means…_api.jquery.com](https://api.jquery.com/odd-selector/ "https://api.jquery.com/odd-selector/")[](https://api.jquery.com/odd-selector/)

all we have to do is add **:odd** to the end of our selector so that the line looks like this. **_note: I have also changed the color to #EEE; to blend in better._**

<pre name="dd5d" id="dd5d" class="graf graf--pre graf-after--p">    $(‘.athing:odd’).css(‘background-color’, ‘#EEE’);</pre>

Save your script and refresh HackerNews and you should see this final product



![](https://cdn-images-1.medium.com/max/1600/1*gwAAteQdQMSoQm3klQHG7Q.jpeg)

final product



### Wraping up

There you have it. Now you have another creative outlet to unleash your budding coding wizardry on! User Scripts can be used to tweak the functionality or look of a site, to add a feature you’ve always wanted, plus much more.

#### Homework

Write your own User Script to add something to a website you use often. Whether it be styling or a button that can toggle the visibility of certain elements, it’s all up to you. Provide your product in the comments here!

Go forth and conquer Campers!

#### More reading

[**Tampermonkey**  
_Tampermonkey is a free browser extension and the most popular userscript manager for Blink-based Browsers like Chrome…_tampermonkey.net](https://tampermonkey.net/documentation.php "https://tampermonkey.net/documentation.php")[](https://tampermonkey.net/documentation.php)

[**GreaseSpot Wiki**  
_GreaseSpot is community documentation for user scripting with Greasemonkey._wiki.greasespot.net](http://wiki.greasespot.net/Main_Page "http://wiki.greasespot.net/Main_Page")[](http://wiki.greasespot.net/Main_Page)

[**Greasy Fork - safe and useful user scripts**  
_User scripts put you in control of your browsing experience. Once installed, they automatically make the sites you…_greasyfork.org](https://greasyfork.org/en "https://greasyfork.org/en")[](https://greasyfork.org/en)

[**Getting Started: Building a Chrome Extension**  
_Extensions allow you to add functionality to Chrome without diving deeply into native code. You can create new…_developer.chrome.com](https://developer.chrome.com/extensions/getstarted "https://developer.chrome.com/extensions/getstarted")[](https://developer.chrome.com/extensions/getstarted)

[**How to develop a Firefox extension**  
_This blog post is very outdated. If you want a more recent guide to extension development, please read the new How to…_blog.mozilla.org](https://blog.mozilla.org/addons/2009/01/28/how-to-develop-a-firefox-extension/ "https://blog.mozilla.org/addons/2009/01/28/how-to-develop-a-firefox-extension/")[](https://blog.mozilla.org/addons/2009/01/28/how-to-develop-a-firefox-extension/)








