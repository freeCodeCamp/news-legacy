---
author: Den McHenry
authorTwitter: https://twitter.com/DenMcH
authorFacebook: none
title: "Class Struggle in the 21st Century"
subTitle: "Not that kind of class struggle. I’m talking CSS classes, which — Whoa! What was that?! Wait a minute. Important message incoming...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*sb3Lz9kaHSrMrWLosD2AqA.jpeg
url: https://medium.freecodecamp.org/class-struggle-in-the-21st-century-ae670f700794
id: class-struggle-in-the-21st-century-ae670f700794
date: 2015-12-30T05:55:18.473Z
tags: [
  "CSS",
  "Web Development",
  "Web Design",
  "Self Improvement",
  "Learning"
]
---
# Class Struggle in the 21st Century







![](https://cdn-images-1.medium.com/max/2000/1*sb3Lz9kaHSrMrWLosD2AqA.jpeg)

Class class class class class. Credit: unknown







Not that kind of class struggle. I’m talking CSS classes, which — Whoa! What was that?! Wait a minute. Important message incoming.

> You need a second level heading, text in red, in 60 seconds or this bus will explode. What do you do, hotshot? WHAT DO YOU DO?

Welp, it’s go time! So, if you’ve followed a Web tutorial or a popular framework I guess you go ahead and create a class called **.red-text**. And … done.



![](https://cdn-images-1.medium.com/max/1200/1*uZcWDt_yGLknCV6215-Ytw.jpeg)

What do you do?! You write a new class that tells you exactly what it does! Credit: Speed



Boy, that was fast. Why does Keanu make it look like so much work?

It’s such a great idea, too, because anyone looking at the HTML knows what the visual style will be! Because those are two layers we definitely don’t want to separate. We have a style sheet for some other reason, I think.

Well, as the project grows and the site ages the memos keep coming in that more and more bits of text need to be red. Maybe everyone is convinced users won’t notice the _really_ important stuff (i.e., the stuff they own) without it. And so you throw that class everywhere like tinsel on a bare Christmas tree.

> <p class=“red-text”>, , , _<li class=“red-text”>, und so weiter._

So easy. So efficient. But you know what, Peter? We’re going to have to go ahead and ask you to change all of the red text to blue text. Yeah … we’re rebranding and market research says the kids feel really safe with blue, so … ‘k. Thanks!



![](https://cdn-images-1.medium.com/max/1600/1*KYyhccFIbUVTHj8TOx8SQw.jpeg)

If you could just — add a color thingy — that’d be great. Aaaand put it everywhere. Yeah. Credit: Office Space



No problem.

> .red-text {  
>  color: blue;  
> }

Oh. Hm. Well, let’s change _.red-text_ to _.blue-text_. Wait — all of the text is blue now, but _says_ it’s red. Oh, snap! I have to go into every document on the site and change the class assignment **“red-text”** to **“blue-text”**. But I’m clever. I’m computer savvy. I can do a quick search and replace and fix all … whoa … 9,347 instances of ‘red’. Well, here goes … and … BOOM!

Now we’re talking. The text is blue all over the place. The site makes me feel safe and cozy. They were right about that market research. People can still view source and see that, yep, the blue text sure is labeled **“blue-text”**. All is right with the world.



![](https://cdn-images-1.medium.com/max/1600/1*nc_w92cbjBf_fudP-5O3_g.jpeg)

Not so fast, Hackerman! Credit: Kung Fury



But suddenly you hear hurried footsteps across the floor, and the boss is back.

> Peter, _Stephanie Redner’s assistant just called_ in from the home office. They want to know why the site says “_Stephanie Bluener (pictublue here) usheblue in a new era.”_ This isn’t good, Peter. This isn’t good at all.

Silly example? Maybe. But it’s happened. Maybe not exactly that way, but it’s happened. But it’s not even that scenario that’s really the problem. It’s that when you name your classes in this way, you — _almost_ — may as well be writing inline styles.



![](https://cdn-images-1.medium.com/max/1200/1*KVXyqwj_RMBaj5uhJfMYAg.jpeg)

Credit: [http://www.bonkersworld.net/building-software/](http://www.bonkersworld.net/building-software/)



This happens naturally as a consequence of unintentional design. The site looks and functions a given way because it was tinkered with, piecemeal. And refactoring is hard to do in the real world when the culture doesn’t value it.

You’re short on time. The people with the money don’t get why it’s important — or that it can be problematic in the first place. And really, when your kid smashes a hole through the drywall, you patch it up. You don’t tear down the wall and build it up again. It’s also a super fast fix when someone over your head has notes on an existing site.

So I get it. But it’s kind of become the default. And that’s not a good thing.

Here’s a related issue: you’re using a framework and want buttons to look and act like buttons. It’s not enough to add a **<button>**: you have to load it up like a baked potato:

> <button class=“btn btn-default”>

So what might you do differently?

In the last example, maybe **<button>** should be enough for the default. Do we really need to say that button is part of the class of buttons, and should we ever need to declare a default?

In our hypothetical business, maybe it turns out that when you look more closely the **<h2>** is only red when it falls within a div in the **.widget** class. Maybe **<p>** is only red in those financial terms divs that accounting made you add, the one with that dumb **.notice** class (so garish, but they insisted). And so on.

Well, here’s a better way: leave your HTML uncluttered, and get to know your CSS selectors. We don’t even need to get fancy (yet). We can use a simple descendent selector, which you may know better as a space.

> .widget h2, .notice p {  
>  color: red;  
> }

This is what I dreamed about almost 20 years ago when I was making websites for myself and getting so excited about the future of CSS. It’s kind of heartbreaking now come back into the field, only to find that CSS is blamed for the baffling prevalence of a bad practice.



![](https://cdn-images-1.medium.com/max/1600/1*fNYstHfVVW08a6a6wqqVQA.jpeg)

Great Scott, Marty! Has the state of CSS gotten that bad in the future? Credit: Back to the Future



Littering your HTML elements with classes — especially overly declarative classes—creates maintenance nightmares, produces cluttered markup, and kind of defeats the purpose of separating semantics and style.

So if you can, just don’t ever get on that bus. But if you do, try to mitigate things where you can. And in the end, remember what you’re trying to do in each document, and don’t duplicate your efforts.








