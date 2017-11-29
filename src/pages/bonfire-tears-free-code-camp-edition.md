---
author: Tiffany White
authorTwitter: https://twitter.com/TiffanyW_412
authorFacebook: none
title: "Crying Algorithm Tears"
subTitle: "There comes a point in every new programmers life when they hit a barrier, a wall, a threshold between understanding and not understandin..."
coverSrc: https://cdn-images-1.medium.com/max/1600/0*reQ5pMmpwq1G06h-.jpg
url: https://medium.freecodecamp.org/bonfire-tears-free-code-camp-edition-d79bbfd3d945
id: bonfire-tears-free-code-camp-edition-d79bbfd3d945
date: 2015-11-26T07:06:21.853Z
tags: [
  "JavaScript",
  "Learning To Code",
  "Programming",
  "Women In Tech",
  "Women"
]
---
# Crying Algorithm Tears



![](https://cdn-images-1.medium.com/max/1600/0*reQ5pMmpwq1G06h-.jpg)



> “Laughter and tears are both responses to frustration and exhaustion. I myself prefer to laugh, since there is less cleaning to do afterward.” ― Kurt Vonnegut

There comes a point in every new programmers life when they hit a barrier, a wall, a threshold between understanding and not understanding the material at hand.

I hit that threshold yesterday.

And the day before yesterday.

In retrospect, the solution was so simple. I had the right idea several times. I got encouraged, and explained to, and guided, but it was like their words just bounced off of my skull instead of being absorbed into my grey matter.

The algorithm challenge was:

> Check if a string (first argument) ends with the given target string (second argument).

> Remember to use Read-Search-Ask if you get stuck. Write your own code.

> Here are some helpful links:

> String.substr()

The code Free Code Camp started me off with:

<pre name="e680" id="e680" class="graf graf--pre graf-after--p">function end(str, target) { </pre>

<pre name="7835" id="7835" class="graf graf--pre graf-after--pre">// “Never give up and good luck will find you.” </pre>

<pre name="9a9c" id="9a9c" class="graf graf--pre graf-after--pre">// — Falcor </pre>

<pre name="e8b6" id="e8b6" class="graf graf--pre graf-after--pre">return str; </pre>

<pre name="9a05" id="9a05" class="graf graf--pre graf-after--pre">}</pre>

<pre name="803e" id="803e" class="graf graf--pre graf-after--pre">end(“Bastian”, “n”); </pre>

#### What the Hell? Substrings?



![](https://cdn-images-1.medium.com/max/1600/0*k9MyKxq8P6tLWagt.gif)



> You’ve done it before and you can do it now. See the positive possibilities. Redirect the substantial energy of your frustration and turn it into positive, effective, unstoppable determination. –Ralph Marston

I knew from looking at the failing tests that my algorithm had to handle strings of different lengths. But I kept hardcoding for just one of the test’s strings.

How do I code this thing for different string lengths? How do I get the length of a string? .length() right? YES. But _how_. Where do I put the .length()?

I had this code:

<pre name="423f" id="423f" class="graf graf--pre graf-after--p">function end(str, target) { </pre>

<pre name="e18a" id="e18a" class="graf graf--pre graf-after--pre">     //”Never give up and good luck will find you.” </pre>

<pre name="ee89" id="ee89" class="graf graf--pre graf-after--pre">    // — Falcor</pre>

<pre name="dd04" id="dd04" class="graf graf--pre graf-after--pre">   //’abcdefghijklmn’.substr(0, 3)</pre>

<pre name="55ea" id="55ea" class="graf graf--pre graf-after--pre">  // ‘abc’</pre>

<pre name="7254" id="7254" class="graf graf--pre graf-after--pre"> //”grab 3 characters starting with the character at address number 0" ​ </pre>

<pre name="b7da" id="b7da" class="graf graf--pre graf-after--pre">    var isEqual = str.substr(6, 1) === target.substr(0, 1); </pre>

<pre name="a1ae" id="a1ae" class="graf graf--pre graf-after--pre">    return isEqual;</pre>

<pre name="685f" id="685f" class="graf graf--pre graf-after--pre">} ​ end(“Bastian”, “n”);</pre>

I found out in one of Free Code Camp’s help chat rooms that you can get to the end of a string by using a negative number. No need to keep popping off all those letters before the “n” on Bastian.

But I continued to hard code for “Bastian” and “n”.

I needed a broader approach.

I tried:

<pre name="eb6e" id="eb6e" class="graf graf--pre graf-after--p">function end(str, target) {</pre>

<pre name="65d5" id="65d5" class="graf graf--pre graf-after--pre">​   var isEqual = str.substr(-1) === target.substr(-1); return isEqual;</pre>

<pre name="404b" id="404b" class="graf graf--pre graf-after--pre">} ​ end(“Bastian”, “n”);</pre>

But I wasn’t really making any progress. All but one of the tests were passing, and I still wasn’t really utilizing .length() to address the variance in string length.

So I tried this:

<pre name="c454" id="c454" class="graf graf--pre graf-after--p">function end(str, target) {</pre>

<pre name="6537" id="6537" class="graf graf--pre graf-after--pre">    var n = target.length;   
    var z = str.length;   
    var isEqual = str.substr(-1) === target.substr(-1); return isEqual;</pre>

<pre name="bda5" id="bda5" class="graf graf--pre graf-after--pre">} ​ end(“Bastian”, “n”);</pre>

Same result. I knew I needed to have .length() up there. But where to go after that?

#### Aha!



![](https://cdn-images-1.medium.com/max/1600/0*bGUwwQpIJYjPywvs.gif)



Finally, I had to be guided to the answer. The woman was in Britain and I am pretty sure I was keeping her awake. But together we came up with this solution:

<pre name="c12c" id="c12c" class="graf graf--pre graf-after--p">// You didn't think I'd give it away, did you?</pre>

And finally I understood it. It took a while to get there, but when we reached the solution, I felt like a complete idiot. How could I have not understood this earlier?

I cried. I literally cried. Part of that was just me already being emotional.

The other part was me not wanting to put my fist through my MacBook Pro’s screen.

Strings are characters. Not words. And I was totally getting stuck on that.

Algorithm tears indeed.











* * *







_Originally published at_ [_Code Newbie in Pittsburgh_](http://helloburgh.me/2015/11/26/bonfire-tears-free-code-camp-edition/)_._








