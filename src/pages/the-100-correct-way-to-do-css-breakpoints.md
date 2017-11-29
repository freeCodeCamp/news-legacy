---
author: David Gilbertson
authorTwitter: https://twitter.com/D__Gilbertson
authorFacebook: none
title: "The 100% correct way to do CSS breakpoints"
subTitle: "For the next minute or so, I want you to forget about CSS. Forget about web development. Forget about digital user interfaces...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*l9rwwtUMoiRJOb7uGEkhFg.jpeg
url: https://medium.freecodecamp.org/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862
id: the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862
date: 2016-11-19T05:41:29.178Z
tags: [
  "CSS",
  "Web Development",
  "Tech",
  "Web Design",
  "Responsive Design"
]
---
# The 100% correct way to do CSS breakpoints







![](https://cdn-images-1.medium.com/max/2000/1*l9rwwtUMoiRJOb7uGEkhFg.jpeg)







For the next minute or so, I want you to forget about CSS. Forget about web development. Forget about digital user interfaces.

And as you forget these things, I want you to allow your mind to wander. To wander back in time. Back to your youth. Back to your first day of school.

It was a simpler time, when all you had to worry about was drawing shapes and keeping your incontinence in check.







![](https://cdn-images-1.medium.com/max/2000/1*XoDgRc5GXaxo7j47ClsIgw.png)







Take a look at the dots above. Notice how some of them are clumped together, and some of them spread out? What I want you to do is break them up into five groups for me, however you see fit.

Go ahead. After checking that no one is watching, draw a circle around each of the five groups with your child-like finger.

You probably came up with something like the below, right? (And whatever you do, don’t tell me you scrolled down without doing the exercise. I will face palm.)







![](https://cdn-images-1.medium.com/max/2000/1*cZcTR2tVMzYg1U1h3cqdNg.png)







Sure, those two dots on the right could have gone either way. If you grouped them together it’s OK, I guess. They say there’s no wrong answer, but I’ve never been wrong, so I’ve never been on the receiving end of that particular platitude.

Before I go on, did you draw something like the below?







![](https://cdn-images-1.medium.com/max/2000/1*RZryP0xAyOy1_WRpBdPIog.png)







Probably not. Right?

But that’s basically what you’d be doing if you set your breakpoints at positions matching the exact width of popular devices (320px, 768px, 1024px).







![](https://cdn-images-1.medium.com/max/2000/1*pwC0py16i-sQr1agaP26QQ.png)







Have words of the below nature ever entered your ears or exited your mouth?

> “Is the medium breakpoint _up to_ 768px, or including 768? I see… and that’s iPad landscape, or is that ‘large’? Oh, large is 768px _and up._ I see. And small is 320px? What is this range from 0 to 319px? A breakpoint _for ants_?”

I could proceed to show you the correct breakpoints and leave it at that. But I find it very curious that the above method (“silly grouping”) is so widespread.

Why should that be?

I think the answer to this problem, like so many problems, comes down to misaligned terminology. After all, _waterboarding at Guantanamo Bay_ sounds super rad if you don’t know what either of those things are. (Oh [I wish](https://www.reddit.com/r/Showerthoughts/comments/2ucx09/waterboarding_at_guantanamo_bay_sounds_super_rad/) that was my joke.)

I think we mix up “boundaries” and “ranges” in our discussions and implementations of breakpoints.

Tell me, if you do breakpoints in Sass, do you have a variable called `$large` that is, say, 768px?

Is that the lower boundary of the range you refer to as large, or the upper boundary? If it’s the lower, then you must have no `$small` because that should be `0`, right?

And if it’s the upper boundary then how would you define a breakpoint `$large-and-up`? That must be a media query with a `min-width` of `$medium`, right?

And if you are referring to just a boundary when you say large, then we’re in for confusion later on because a media query is always a _range_.

This situation is a mess and we’re wasting time thinking about it. So I have three suggestions:

1.  Get your break_points_ right
2.  Name your _ranges_ sensibly
3.  Be declarative

### Tip #1: Get your breakpoints right

So what are the _right_ breakpoints?

Your kindergarten self already drew the circles. I’ll just turn them into rectangles for you.







![](https://cdn-images-1.medium.com/max/2000/1*-ldpo5wcYVnuyRFbO24WPQ.png)







600px, 900px, 1200px, and 1800px if you plan on giving the giant-monitor people something special. On a side note, if you’re ordering a giant monitor online, make sure you specify it’s for a computer. You don’t want to [get a giant lizard in the mail](http://metro.co.uk/2016/06/16/this-monster-lizard-at-the-door-is-absolutely-terrifying-5947737/).

Those dots your channeled young self has been playing with actually represent the 14 most common screen sizes:



![](https://cdn-images-1.medium.com/max/1600/1*199KbL2oM2P5d4pFMBXYxQ.png)

[image credit](http://gs.statcounter.com/#desktop+mobile+tablet-resolution-ww-monthly-201608-201610-bar)



So we can make a pretty little picture that allows for the easy flow of words between the folks dressed up as business people, designers, developers, and testers.







![](https://cdn-images-1.medium.com/max/2000/1*7YeOvzoYgUEDJdfQy2ERXg.png)

I’m regretting my choice of orange and green, but I’m not redoing all of these pictures now.







### Tip #2: Name your ranges sensibly

Sure, you could name your breakpoints [papa-bear and baby-bear](https://css-tricks.com/naming-media-queries/) if you like. But if I’m going to sit down with a designer and discuss how the site should look on different devices, I want it to be over as quickly as possible. If naming a size _portrait tablet_ facilitates that, then I’m sold. Heck, I’d even forgive you for calling it “iPad portrait.”

“But the landscape is changing!” you may shout. “Phones are getting bigger, tablets are getting smaller!”

But your website’s CSS has a shelf life of about three years (unless it’s Gmail). The iPad has been with us for twice that time, and it has yet to be dethroned. And we know that Apple no longer makes new products, they just remove things from existing ones (buttons, holes, etc).

So 1024 x 768 is here to stay, folks. Let’s not bury our heads in the sand. (Fun fact: ostriches don’t live in cities because there is no sand, and thus nowhere to hide from predators.)

Conclusion: communication is important. Don’t purposefully detach yourself from helpful vocabulary.

### Tip #3: Be declarative

I know, I know, that word “declarative” again. I’ll put it another way: your CSS should define _what_ it wants to happen, not _how_ it should happen. The “how” belongs hidden away in some sort of mixin.

As discussed earlier, part of the confusion around breakpoints is that variables that define a _boundary_ of a range are used as the _name_ of the range. `$large: 600px` simply makes no sense if `large` is a range. It’s the same as saying `var coordinates = 4;`.

So we can hide those details inside a mixin rather than expose them to be used in the code. Or we can do one better and not use variables at all.

At first I did the below snippet as a simplified example. But really I think it covers all the bases. To see it in action, [check out this pen](http://codepen.io/davidgilbertson/pen/aBpJzO). I’m using Sass because I can’t imagine building a site without it. The logic applies to CSS or Less just the same.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/580dd549b784c7959aa0c6bc0754a792?postId=88d6a5ba1862" data-media-id="580dd549b784c7959aa0c6bc0754a792" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F4443482%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



I might be biased, but that’s some nice declarative CSS.



Note that I’m forcing the developer to specify the `-up` or `-only` suffix.

> Ambiguity breeds confusion.

An obvious criticism might be that this doesn’t handle custom media queries. Well good news, everybody. If you want a custom media query, write a custom media query. (In practice, if I needed more complexity than the above I’d cut my losses and run into the loving embrace of [Susy](http://susydocs.oddbird.net/en/latest/toolkit/#breakpoint)’s toolkit.)

Another criticism might be that I’ve got eight mixins here. Surely a single mixin would be the sane thing to do, then just pass in the required size, like so:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b4778a77bc15dcac3e478ec8e16cfd43?postId=88d6a5ba1862" data-media-id="b4778a77bc15dcac3e478ec8e16cfd43" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F4443482%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Sure, that works. But you won’t get compile-time errors if you pass in an unsupported name. And to pass in a sass variable means exposing 8 variables just to pass to a switch in a mixin.

Not to mention the syntax `@include for-desktop-up {...}` is totes more pretty than `@include for-size(desktop-up) {...}`.

A criticism of both these code snippets might be that I’m typing out 900px twice, and also 899px. Surely I should just use variables and subtract 1 when needed.

If you want to do that, go bananas, but there are two reasons I wouldn’t:

1.  These are not things that change frequently. These are also not numbers that are used anywhere else in the code base. No problems are caused by the fact that they _aren’t_ variables — unless you want to expose your Sass breakpoints to a script that injects a JS object with those variables into your page.
2.  The syntax is _nasty_ when you want to turn numbers into strings with Sass. Below is the price you pay for believing that repeating a number twice is the worst of all evils:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/e090930cd2ad663eb98fa90d4912333d?postId=88d6a5ba1862" data-media-id="e090930cd2ad663eb98fa90d4912333d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F4443482%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



Did the ease of comprehension just go up? Or down?



Oh and since I’ve taken on a ranty tone over the last few paragraphs … I pity the fool who does something magical like store breakpoints in a Sass list and loop over them to output media queries, or something similarly ridiculous that future developers will struggle to decipher.

> Complexity is where the bugs hide.

Finally, you may be thinking “shouldn’t I be basing my breakpoints on content, not devices?”. Well I’m amazed you made it this far and the answer is yes … for sites with a single layout. Or if you have multiple layouts and are happy to have a different set of breakpoints for each layout. Oh and also if your site design doesn’t change often, or you’re happy to update your breakpoints when your designs update since you’ll want to _keep_ them based on the content, right?

For complex sites, life is much easier if you pick a handful of breakpoints to use across the site.

We’re done! But this post has not been as furry as I would like, let me see if I can think of an excuse to include some…

Oh, I know!

### Bonus tips for breakpoint development







![](https://cdn-images-1.medium.com/max/2000/1*ClU6ZZNLtd0ux8nqRPfhng.png)

Yes, even flickr has breakpoints at 768 and 1400







1.  If you need to experience CSS breakpoints for screen sizes bigger than the monitor you’re sitting at, use the ‘responsive’ mode in Chrome DevTools and type in whatever giant size you like.
2.  The blue bar shows ‘max-width’ media queries, the orange bar is ‘min-width’ media queries, and the green bar shows media queries with both a min and a max.
3.  Clicking a media query sets the screen to that width. If you click on a green media query more than once, it toggles between the max and min widths.
4.  Right click a media query in the media queries bar to go to the definition of that rule in the CSS.











* * *







Hey, thanks for reading! Comment with your tops ideas, I’d love the hear them. And click the little heart if you think I deserve it, or leave it hollow and empty, like my sense of self-worth will be if you don’t.








