---
author: Zell Liew
authorTwitter: https://twitter.com/zellwk
authorFacebook: none
title: "Everything I know about web responsive typography"
subTitle: "Responsive typography is a tough nut to crack. This was the best method I could come up with when I first started creating responsive web..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*y46Tvi_apZUxaZnxQzQ_sg.jpeg
url: https://medium.freecodecamp.org/everything-i-know-about-responsive-web-typography-c774c2138f5c
id: everything-i-know-about-responsive-web-typography-c774c2138f5c
date: 2016-01-18T03:55:28.591Z
tags: [
  "CSS",
  "Typography",
  "Design",
  "Programming",
  "UX"
]
---
# Everything I know about web responsive typography







![](https://cdn-images-1.medium.com/max/2000/1*y46Tvi_apZUxaZnxQzQ_sg.jpeg)

(Photo credit: [kineticknowledge](http://www.kineticknowledge.com/))







Responsive typography is a tough nut to crack. This was the best method I could come up with when I first started creating responsive websites:

<pre name="04b9" id="04b9" class="graf graf--pre graf-after--p">p {  
  font-size: 16px;  
}</pre>

<pre name="8bdc" id="8bdc" class="graf graf--pre graf-after--pre">@media (min-width: 800px) {  
  p {  
    font-size: 18px;  
  }  
}</pre>

<pre name="7d93" id="7d93" class="graf graf--pre graf-after--pre">/* Repeat for h1 - h6 and other type groups */</pre>

I’ve learned a lot more about typography since then and picked up best practices like using relative units, vertical rhythms and meaningful typography scales.

These new practices were wonderful. They made my websites look more pleasing to the eye. Implementing them, however, was a horrible experience.

I had to write complex code and I found myself struggling to create responsive websites under tremendous time pressure.

Now, after months of hacking, I’ve finally created a solution that I’m happy to share with you. It’s called Typi.

Typi is great because it allows me to use the practices I’ve learned, and at the same time solves most of the problems I’ve encountered in 3 simple steps. Let me explain these three steps by walking you through the practices I use when working with responsive typography.

### Practice 1: Increase font-size and line-height of your body copy as screen sizes increase.

Reading on the mobile vs the desktop are two completely different experiences. You undoubtedly hold your device closer to you when you read on the mobile since the screen is smaller.

Your desktop screen will be further away from you compared to the mobile. Hence, the same font-size on the desktop looks slightly smaller due to the further distance.

To increase readability and compensate for the loss in size due to distance, we increase the font size.

I first got to know of this practice through the [responsive typography basics](https://ia.net/know-how/responsive-typography-the-basics) post on [ia.net](http://ia.net/). I highly suggest checking the post out if you’re unfamiliar with what I’m talking about.

An implementation of this practice in Sass can be this:

<pre name="9afb" id="9afb" class="graf graf--pre graf-after--p">html {  
  font-size: 16px;</pre>

<pre name="4c01" id="4c01" class="graf graf--pre graf-after--pre">  @media (min-width: 800px) {  
    font-size: 18px;  
  }</pre>

<pre name="b950" id="b950" class="graf graf--pre graf-after--pre">  @media (min-width: 1200px) {  
    font-size: 20px;  
  }  
}</pre>

Note: as we increase font sizes, we might also need to increase the line height to allow more breathing room between lines of text. With Sass, this can look like:

<pre name="f3fa" id="f3fa" class="graf graf--pre graf-after--p">html {  
  font-size: 16px;  
  line-height: 1.3;</pre>

<pre name="dced" id="dced" class="graf graf--pre graf-after--pre">  @media (min-width: 800px) {  
    font-size: 18px;  
  }</pre>

<pre name="69ed" id="69ed" class="graf graf--pre graf-after--pre">  @media (min-width: 1200px) {  
    font-size: 20px;  
    line-height: 1.4;  
  }  
}</pre>

### Practice 2: Use a modular scale for your typography

It’s difficult to pick the font-size of your typographic elements (<h1> to <h6>), especially if you’re trying to pull them out of thin air. A modular scale, also called typography scale, is a tool you can use to help you pick good typography sizes that flow well with the rest of your page.

It is a sequence of numbers related to each other through a ratio (a number). It can be created by multiplying (or dividing) the font-size of your body copy with the ratio. The resultant number is then multiplied (or divided) again with the ratio.



![](https://cdn-images-1.medium.com/max/1600/0*3so2OEKM6Cicnkg8.png)



An implementation of modular scale at work with the above scale can be this:

<pre name="59af" id="59af" class="graf graf--pre graf-after--p">html { font-size: 16px }  
h1 { font-size: 50px }  
h2 { font-size: 37px }  
h3 { font-size: 28px }  
// ...</pre>

Of course, it’s not going to be so simple. If you remember the first practice we discussed earlier in this article, you’ll notice that the body font-size should change as your screen width changes.

This becomes a problem when you have to change the typography sizes of _all your elements_ at _every breakpoint_ to ensure the scale stays consistent.

<pre name="6217" id="6217" class="graf graf--pre graf-after--p">html {  
  font-size: 16px;  
  line-height: 1.3;  
  @media (min-width: 800px) {  
    font-size: 18px;  
  }</pre>

<pre name="01fd" id="01fd" class="graf graf--pre graf-after--pre">  @media (min-width: 1200px) {  
    font-size: 20px;  
    line-height: 1.4;  
  }  
}</pre>

<pre name="a39f" id="a39f" class="graf graf--pre graf-after--pre">h1 {  
  font-size: 50px;  
  @media (min-width: 800px) {  
    font-size: 56px;  
  }  
  @media (min-width: 1200px) {  
    font-size: 63px;  
  }  
}</pre>

<pre name="3e52" id="3e52" class="graf graf--pre graf-after--pre">h2 {  
  font-size: 37px;  
  @media (min-width: 800px) {  
    font-size: 42px;  
  }  
  @media (min-width: 1200px) {  
    font-size: 47px;  
  }  
}</pre>

<pre name="573d" id="573d" class="graf graf--pre graf-after--pre">h2 {  
  font-size: 28px;  
  @media (min-width: 800px) {  
    font-size: 32px;  
  }  
  @media (min-width: 1200px) {  
    font-size: 35px;  
  }  
}  
// ...</pre>

Ugh.

The solution? Check out the next practice.

Note: If you need help with choosing your starting font-size and ratio for your modular scale, I suggest reading this [article on meaningful typography](http://alistapart.com/article/more-meaningful-typography) by Tim Brown.

### Practice 3: Use relative typography units

Relative units in CSS are percentages (%), viewport units (vh, vw, vmin, vmax) , the em unit (em) and the rem unit (rem). The ones commonly used to size typography are **em** and **rem**.

You can use both **em** and **rem** in the same manner to solve the problem we encountered in practice 2\. To convert pixels into em, we take the target font-size and divide it against the base-font size.

Here’s how it would look:

<pre name="7ee0" id="7ee0" class="graf graf--pre graf-after--p">html {  
  font-size: 16px;  
  @media (min-width: 800px) {  
    font-size: 18px;  
  }  
  @media (min-width: 1200px) {  
    font-size: 20px;  
  }  
}</pre>

<pre name="cfd0" id="cfd0" class="graf graf--pre graf-after--pre">h1 { font-size: 3.125em; } // 50 ÷ 16 = 3.125  
h2 { font-size: 2.3125em;} // 37 ÷ 16 = 2.3125  
h3 { font-size: 1.75em; } // 28 ÷ 16 = 1.75  
// ...</pre>

<pre name="f7ab" id="f7ab" class="graf graf--pre graf-after--pre">// Note: These are approximate values.  
// The actual values derived from modularscale.com are 3.129em, 2.3353em and 1.769em respectively.</pre>

Much better now!

There are a few more problems. Notice how <h1> becomes approximately 63px as the screen width increases to 1200px.

63px is pretty large. Reading the <h1> text starts to get uncomfortable already. A better decision might be to tone it down to 47px instead (size of <h2>).

When this happens, you might want to decrease the size of the <h2>element since it’s a good practice to emphasize the <h1> element. Sometimes, you might also need to change the line-height as well.

The code then becomes…

<pre name="1c24" id="1c24" class="graf graf--pre graf-after--p">html {  
  font-size: 16px;  
  @media (min-width: 800px) {  
    font-size: 18px;  
  }  
  @media (min-width: 1200px) {  
    font-size: 20px;  
  }  
}</pre>

<pre name="94e0" id="94e0" class="graf graf--pre graf-after--pre">h1 {  
  font-size: 3.129em;  
  line-height: 1.2;</pre>

<pre name="4518" id="4518" class="graf graf--pre graf-after--pre">  @media (min-width: 1200px) {  
    font-size: 2.3353em;     
    line-height: 1.3;  
  }  
}</pre>

<pre name="7b4f" id="7b4f" class="graf graf--pre graf-after--pre">h2 {  
  font-size: 2.3353em;  
  @media (min-width: 1200px) {  
    font-size: 1.769em;     
  }  
}</pre>

<pre name="82ba" id="82ba" class="graf graf--pre graf-after--pre">h3 {  
  font-size: 1.769em;  
  @media (min-width: 1200px) {  
    font-size: 1.33em;  
  }  
}</pre>

<pre name="f7e1" id="f7e1" class="graf graf--pre graf-after--pre">// ...</pre>

Ugh. Back to square one :(

This is where [Typi](https://github.com/zellwk/typi) comes in. Let’s take a break from the practices and see how Typi can help you.

### Using Typi

Typi is a Sass library that allows you to set the font-size and line-height properties of all your typographic elements in separate Sass maps. These maps can then be used to output the code we see in the above situation. Here’s how it works.

First, you need to setup a $typi map. It looks like this:

<pre name="f550" id="f550" class="graf graf--pre graf-after--p">$typi: (  
  null: 16px,  
  small: 18px,  
  large: 20px  
);</pre>

null, small and large are breakpoints.

Typi automatically looks for a $breakpoints map to create your media queries (which means it can integrate perfectly with [mappy-breakpoints](https://github.com/zellwk/mappy-breakpoints), a library I created to help with media queries).

<pre name="99fe" id="99fe" class="graf graf--pre graf-after--p">$breakpoints: (  
  small: 800px,  
  large: 1200px  
);</pre>

Once the $typi map is set up, we call the typi-base() mixin within the html selector.

<pre name="1195" id="1195" class="graf graf--pre graf-after--p">html {  
  @include typi-base();    
}</pre>

This typi-base() mixin creates the same styles we wrote for the <html> tag in Practice 2\. The only difference is that the font-sizes are stated in percentages.

<pre name="7417" id="7417" class="graf graf--pre graf-after--p">html {  
  font-size: 100%; /* This means 16px */  
}</pre>

<pre name="73dc" id="73dc" class="graf graf--pre graf-after--pre">@media all and (min-width: 800px) {  
  html {  
    font-size: 112.5%; /* This means 18px */  
  }  
}</pre>

<pre name="1058" id="1058" class="graf graf--pre graf-after--pre">@media all and (min-width: 1200px) {  
  html {  
    font-size: 125%; /* This means 20px */  
  }  
}</pre>

We also mentioned that there might be a need to change line-height values as the font-size changes. You can change line-height values easily in Typi by providing a second line-height value to each breakpoint that requires it:

<pre name="26c5" id="26c5" class="graf graf--pre graf-after--p">$typi: (  
  null: (16px, 1.3), // Sets line-height to 1.3  
  small: 18px,  
  large: (20px, 1.4) // Sets line-height to 1.4  
);</pre>

The resultant CSS from our updated $typi map is:

<pre name="2b69" id="2b69" class="graf graf--pre graf-after--p">html {  
  font-size: 100%; /* This means 16px */  
  line-height: 1.3;  
}</pre>

<pre name="ff96" id="ff96" class="graf graf--pre graf-after--pre">@media all and (min-width: 800px) {  
  html {  
    font-size: 112.5%; /* This means 18px */  
  }  
}</pre>

<pre name="b9be" id="b9be" class="graf graf--pre graf-after--pre">@media all and (min-width: 1200px) {  
  html {  
    font-size: 125%; /* This means 20px */  
    line-height: 1.4;  
  }  
}</pre>

After creating the $typi map, we can create other font-maps using the same format. Here’s an example:

<pre name="adb3" id="adb3" class="graf graf--pre graf-after--p">$h1-map: (  
  null: (3.129em, 1.2),  
  large: (2.3353em, 1.3)  
  );</pre>

<pre name="e890" id="e890" class="graf graf--pre graf-after--pre">$h2-map: (  
  null: 2.3353em,  
  large: 1.769em  
  );</pre>

<pre name="f9bd" id="f9bd" class="graf graf--pre graf-after--pre">$h3-map: (  
  null: 1.769em,  
  large: 1.333em  
  );  
// ...</pre>

Then, we call each of these font-maps using the typi mixin:

<pre name="f23d" id="f23d" class="graf graf--pre graf-after--p">h1 { @include typi($h1-map) }  
h2 { @include typi($h2-map) }  
h3 { @include typi($h3-map) }  
// ...</pre>

The resultant CSS would be:

<pre name="668c" id="668c" class="graf graf--pre graf-after--p">h1 {  
  font-size: 3.129em;  
  line-height: 1.2;  
}</pre>

<pre name="24bd" id="24bd" class="graf graf--pre graf-after--pre">@media (min-width: 1200px) {  
  h1 {  
    font-size: 2.3353em;  
    line-height: 1.3;  
  }  
}</pre>

<pre name="4ba1" id="4ba1" class="graf graf--pre graf-after--pre">h2 {  
  font-size: 2.3353em;  
}</pre>

<pre name="1d38" id="1d38" class="graf graf--pre graf-after--pre">@media (min-width: 1200px) {  
  h2 {  
    font-size: 1.769em;  
  }  
}</pre>

<pre name="10dd" id="10dd" class="graf graf--pre graf-after--pre">h3 {  
  font-size: 1.769em;  
}</pre>

<pre name="6f9d" id="6f9d" class="graf graf--pre graf-after--pre">@media (min-width: 1200px) {  
  h3 {  
    font-size: 1.333em;  
  }  
}</pre>

Pretty neat huh? You’ll have to [download Typi](https://github.com/zellwk/typi) to play with it. (It’s not available on Sassmeister or Codepen yet)

**PROTIP**: You can use the modular scale Sass mixin if you don’t want to write exact em values (like 1.769em) across different font maps.

To do so, you have to [download the library](https://github.com/modularscale/modularscale-sass) and import it into your Sass file. Then, change the font maps such that it uses the ms() function.

<pre name="25be" id="25be" class="graf graf--pre graf-after--p">$h1-map: (  
  null: (ms(4) 1.2),  
  large: (ms(3), 1.3)  
  );</pre>

<pre name="31b8" id="31b8" class="graf graf--pre graf-after--pre">$h2-map: (  
  null: ms(3),  
  large: ms(2)  
  );</pre>

<pre name="867e" id="867e" class="graf graf--pre graf-after--pre">$h3-map: (  
  null: ms(2),  
  large: ms(1)  
  );  
// ...</pre>

So, in a nutshell, [**Typi**](https://github.com/zellwk/typi) makes responsive typography easier by helping you **write font-size and line-height properties at different breakpoints`**.

Now that I’m done introducing you to Typi, let’s move on and talk about the final two practices (and some problems that I have yet to find a solution for).

### Practice 4: Apply vertical rhythms

Vertical Rhythms is a concept from print design, where we keep vertical spaces between elements on a page consistent (and relative) to each other. The idea is similar to using a typography scale — to allow elements on your page to flow well.

In practice, we often use the line-height property of the body copy as the base for a consistent vertical rhythm. Let’s say the body copy of your website has **line-height of 25px**. You’ll do two things:

1.  Set the **vertical white space between elements** to a **multiple of 25px**
2.  Set the **line-height of all text elements** to a **multiple of 25px**

This is how it might look like in CSS (Note: This hasn’t taken the three practices I mentioned above into account yet)

<pre name="f1f3" id="f1f3" class="graf graf--pre graf-after--p">html {  
  font-size: 18px;  
  line-height: 25px;  
}</pre>

<pre name="e581" id="e581" class="graf graf--pre graf-after--pre">// Resets margins  
body, h1, p {  
  margin: 0;  
}</pre>

<pre name="58c5" id="58c5" class="graf graf--pre graf-after--pre">h1 {  
  font-size: 63px;  
  line-height: 75px;  
  margin: 25px 0;  
}</pre>

<pre name="358b" id="358b" class="graf graf--pre graf-after--pre">p + p {  
  margin-top: 25px;  
}</pre>





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/642701e812f5f25bb7e0b79194037135?postId=c774c2138f5c" data-media-id="642701e812f5f25bb7e0b79194037135" allowfullscreen="" frameborder="0"></iframe>





Looks pretty good! Let’s take it a step further by changing the code above into relative units. While doing so, you’ll encounter the great em vs rem debate.

### Em vs Rem

Let’s try converting the code first into **ems**, then **rems**. By the way, the [best practices states that line-height values should be unitless](https://css-tricks.com/almanac/properties/l/line-height/).

<pre name="92d0" id="92d0" class="graf graf--pre graf-after--p">html {  
  font-size: 1.125em;  
  line-height: 1.4; // This is 25.2px to be accurate  
}</pre>

<pre name="0a30" id="0a30" class="graf graf--pre graf-after--pre">// Resets margins  
body, h1, p {  
  margin: 0;  
}</pre>

<pre name="1cde" id="1cde" class="graf graf--pre graf-after--pre">h1 {  
  // font size is 63.147px to be more precise  
  font-size: 3.5082em; // 63.147 ÷ 18 = 3.5082em  
  line-height: 1.1972; // 75.6 ÷ 63.147 =  1.1972  
  margin: 0.3991em 0; // 25.2 ÷ 63.147 = 0.3991  
}</pre>

<pre name="5259" id="5259" class="graf graf--pre graf-after--pre">p + p {  
  margin-top: 1.4em;  
}</pre>

Pay special attention to how we converted the margin property on the <h1> element into ems.

Notice how we used 63.147px as the base for the division? This must be done because sizes **calculated with ems are relative to it’s current font-size**. It often causes confusion and involves a lot of complex math.

Now, here’s the kicker. Even though we tried to be as accurate as we can be, browsers don’t seem to cooperate with us. You’ll notice that our vertical rhythms start getting screwy.





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/0219c1f9b285ac6c89aaf6dee517fbbf?postId=c774c2138f5c" data-media-id="0219c1f9b285ac6c89aaf6dee517fbbf" allowfullscreen="" frameborder="0"></iframe>





Two problems contributed to this screwy behavior.

First, we’re not 100% precise and accurate with our math. We could get more precise (like 10 decimal places), but that would make our code ugly as hell.

Second, different browsers handle subpixel rounding issues differently. This means we’ll never be able to get pixel-perfect rhythms no matter how hard we try.

Well, I don’t want to harp on subpixel rounding because there’s nothing much we can do. Let’s take a look at how the rem unit handles this complex math instead, shall we?

<pre name="335f" id="335f" class="graf graf--pre graf-after--p">html {  
  font-size: 1.125rem;  
  line-height: 1.4; // This is 25.2px to be accurate  
}</pre>

<pre name="e724" id="e724" class="graf graf--pre graf-after--pre">// Resets margins  
body, h1, p {  
  margin: 0;  
}</pre>

<pre name="45e1" id="45e1" class="graf graf--pre graf-after--pre">h1 {  
  font-size: 3.5082rem; // 63.147 ÷ 18 = 3.5082  
  line-height: 1.1972; // 75.6 ÷ 63.147 = 1.1972  
  margin: 1.4rem 0; // 25.2 ÷ 18 = 1.4  
}</pre>

<pre name="12f5" id="12f5" class="graf graf--pre graf-after--pre">p + p {  
  margin-top: 1.4rem;  
}</pre>

Notice how we used 1.4rem on the margin property instead of 0.3991em? The **rem unit makes calculations** with vertical rhythms **much simpler**.

**This doesn’t mean you should switch blindly to the rem unit** though. Rems and em units are both useful, and they should be used for different purposes. I’ll write about this topic another day. For now, let’s come back to vertical rhythms.

Now that we’ve converted our vertical rhythms into relative units, let’s take a look at how it fares when we combine it with practice one (font-sizes and line-heights should change when screen sizes change).

We’re going to keep this example as simple as possible by using only one media-query. We’re also going to use the rem unit.

<pre name="3003" id="3003" class="graf graf--pre graf-after--p">html {  
  font-size: 1.125em;  
  line-height: 1.4;</pre>

<pre name="5d54" id="5d54" class="graf graf--pre graf-after--pre">  @media (min-width: 1200px) {  
    font-size: 1.25em; // this is 20px  
    // Slight change in line heights at 1200px  
    line-height: 1.45 // this is 29px  
  }  
}</pre>

<pre name="6dfa" id="6dfa" class="graf graf--pre graf-after--pre">// Resets margins  
body, h1, p {  
  margin: 0;  
}</pre>

<pre name="a439" id="a439" class="graf graf--pre graf-after--pre">h1 {  
  font-size: 3.5082em;  
  line-height: 1.1972;  
  margin: 1.45rem 0;</pre>

<pre name="8e8e" id="8e8e" class="graf graf--pre graf-after--pre">  @media (min-width: 1200px) {  
    // font-size is now 70.164px  
    line-height: 1.24; // 29px * 3 ÷ 70.164 = 1.24  
    margin: 1.45rem 0;  
  }  
}</pre>

<pre name="af32" id="af32" class="graf graf--pre graf-after--pre">p + p {  
  margin-top: 1.4em;  
  @media (min-width: 1200px) {  
    margin-top: 1.45em  
  }  
}</pre>

Ugh. We might have to add 20,000 media queries to change margin and line-height of all our elements with just this one change in the line-height property on <html>. We haven’t even talked about padding or border properties yet!

### (╯°□°）╯︵ ┻━┻

So, here’s what I realized. **It’s impossible to apply perfect responsive vertical rhythms across different browsers**. At least not with the current technology.

What we can do instead is:

1.  We can make do with line-height properties of major typographic elements by eyeballing and using Typi.
2.  Try not to change the line-height property of your body copy if you can. Things will become easier when [CSS variables](http://caniuse.com/#search=css%20var) are finally supported in all major browsers.

### Practice 5: Keep text measures between 45–75 characters

Oh, this one is easy. Just remember this: one character is approximately 0.5em. A text measure between 45–75 characters means the width of your text element must be between 22.5em and 37.5em.

From experience, I’m mostly concerned about text overflowing 75 characters. If your text goes below 45 characters, maybe it’s time to have a change of font sizes.

<pre name="37e9" id="37e9" class="graf graf--pre graf-after--p">article {  
  max-width: 30em;  
  /* Anywhere between 22.5em to 37.5em. Use your discretion */  
}</pre>

### Wrapping Up

Responsive typography is hard. There are still no perfect answers we can rely on, but let’s try to make do for now.

By the way, here’s the link to [Typi](https://github.com/zellwk/typi) again if you want to play with it.











* * *







> This article first appeared on my blog at [www.zell-weekeat.com](http://zell-weekeat.com). Check it out if you want more articles like this








