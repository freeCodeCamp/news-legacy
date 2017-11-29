---
author: Kevin Kononenko
authorTwitter: https://twitter.com/devmanual
authorFacebook: https://facebook.com/10203738544564981
title: "CSS Positioning Explained By Building An Ice Cream Sundae"
subTitle: "If you’ve made an ice cream sundae before, then you can understand CSS positioning."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*gOT0k2y6W0gRYEylFp0cxQ.jpeg
url: https://medium.freecodecamp.org/css-positioning-explained-by-building-an-ice-cream-sundae-831cb884bfa9
id: css-positioning-explained-by-building-an-ice-cream-sundae-831cb884bfa9
date: 2016-08-27T05:27:06.485Z
tags: [
  "CSS",
  "Web Development",
  "Programming",
  "Design",
  "Tech"
]
---
# CSS Positioning Explained By Building An Ice Cream Sundae

## If you’ve made an ice cream sundae before, then you can understand CSS positioning.

Your divs are zooming around the screen like Roman candles.

They’re diving deep into their container, then coming back up to the surface like a whale.

They’re pushing the other elements out of the way, then leaving the container entirely like an impatient businessman.

And somehow, this happens in a new and exciting way every time you change that one nasty line of CSS: the [position property](https://developer.mozilla.org/en-US/docs/Web/CSS/position).

Every single person who has learned CSS has been there. CSS positioning seems to be nonsensical until hours of trial and error finally give you a vague understanding.

This post will end the confusion, once and for all. The position property doesn’t seem to have an obvious relation to any real-world concept… until you consider the humble ice cream sundae.

We’ll cover the following position properties:

*   Absolute
*   Static (default)
*   Fixed
*   Relative



![](https://cdn-images-1.medium.com/max/1600/1*XDzlibMEpQuEbSi685SOzg.png)



And, for the sake of clarity, an ice cream sundae will consist of 4 major components:

*   The glass
*   Ice cream scoops
*   Whipped cream
*   Cherries

### The Ice Cream Sundae as HTML

If you had to explain the structure of an ice cream sundae with HTML, it would probably look like this.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/782aa4e94f4b3383b8066fb87f045350?postId=831cb884bfa9" data-media-id="782aa4e94f4b3383b8066fb87f045350" allowfullscreen="" frameborder="0"></iframe>





Or, in picture form:



![](https://cdn-images-1.medium.com/max/1600/1*pvC4ymGkc2rr8O53vdhzLA.png)



Before we dive into CSS, we can make a couple observations:

1.  The number of ice cream scoops is limited by the glass height. We cannot keep stacking ice cream scoops forever. Eventually, the whole beautiful setup would topple over.
2.  You can put the cherries wherever you darn please. Cherries do not obey the flow and stacking of the scoops.They are smaller, and can fit in nooks and crannies where you cannot fit an ice cream scoop. And, more cherries will not upset the order of the scoops.
3.  The whipped cream sits on top, no matter how many scoops there are. Have you ever seen an ice cream sundae with the whipped cream in the middle, and none on top? Neither have I.

### Position Relative/Static: The Glass and Scoops

As shown in the first picture, our leaning tower of ice cream can only hold 5 scoops before toppling over. Let’s say that these 5 scoops have a total height of 500 pixels, and each scoop sits directly on top of one another. Our fullSundae div, in that case, would have a height of 500px to indicate that it can only handle those 5 scoops, and no more. This is an example of the **default position, static**. We use this to show that the height is unrelated to any container div.

The simple thing to do next would be to just give each iceCreamScoop a height of 100px, which would match the height of the fullSundae div. That would be no fun, because the glass div would be 300px by default. Let’s look at it another way.

Since the glass div contains three of the five scoops, and all scoops are equal height, we can see that the glass div is 60% of the height of the fullSundae div. This is an opportunity for **position relative**! You can set the glass div to position relative and give it a height of 60%. The glass div will look at the height of the entire fullSundae div, and take up 60% of that space. The percentage is relative to the height of the container div, which was stated explicitly as 500px.

You can go even further. If you set each iceCreamScoop within the glass div to **position relative**, each scoop will calculate its height based on the height of the glass div. The glass can fit three scoops, so each scoop should have a height of 33.3%. Here is all of that in code.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a1d8f81aaaa65af8c25e723a62966b53?postId=831cb884bfa9" data-media-id="a1d8f81aaaa65af8c25e723a62966b53" allowfullscreen="" frameborder="0"></iframe>





### Position Fixed: The Whipped Cream

Position fixed should be the easiest one. A **position fixed** element will be stuck in place no matter how far the body extends. In ice cream terms, this is the whipped cream on top. No matter how many ice cream scoops that you try and stack, the whipped cream will still be on top, with the exact same relationship to the scoops. It is positioned relative to the body, not to the containing div.



![](https://cdn-images-1.medium.com/max/1600/1*lp3sSuQHCV9zq_XEsfjGBw.png)



The whipped cream is independent of the series of ice cream scoops. The amount of whipped cream does not affect the maximum number of scoops that you can have in the full sundae. It stays in a consistent spot on the page.

You commonly see position fixed in headers and footers. These are the elements that stick in position, even when you scroll the page or div.

### Position Absolute: The Cherries

There’s a reason I saved Position Absolute for last: it can lead to unmaintainable code if you use it too frequently. You have been warned. But, it works perfectly for the cherries in this example.

You can put cherries almost anywhere in this ice cream sundae. You can put a bunch on top, and it will not topple over. You can wedge them in the glass itself, and you will still be able to fit the same amount of ice cream. They do not obey the same rules as the position static and position relative elements. Furthermore, you can remove them without disturbing any other elements.

These are the key components of **position absolute**. Position absolute elements do not disturb the placement of other elements, but you must state their position explicitly. If you do not, they default to the upper left corner of the body. Or, if one of their parents has position relative, they go to the top left corner of that div.



![](https://cdn-images-1.medium.com/max/1600/1*ZoRoAU2rrzf5IdHuz-xmtg.png)



Check out this cherry-filled sundae. There are cherries added in a bunch of places, and they do not disturb the flow of the other elements. But, keep in mind that you cannot stack the cherries like you stack ice cream scoops. Cherries do not stack. You must place each explicitly.

One last note: position absolute is calculated based on the nearest parent that is NOT position static. If every parent is position static, it is calculated based on the entire body. So, in the case above, the cherries within the glass are positioned based on the height of the glass div, not based on the height of the fullSundae div. The glass div has position relative.





<iframe data-width="800" data-height="400" width="700" height="350" src="https://medium.freecodecamp.org/media/89d1bc98693fc144bdfaf3f859ba2d46?postId=831cb884bfa9" data-media-id="89d1bc98693fc144bdfaf3f859ba2d46" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fupscri.be%2Fmedia%2Fform.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>















* * *







Now go practice it, and when you feel a little more comfortable… you deserve some ice cream!

EDIT: You can now build an ice cream sundae with CSS positioning in this [interactive tutorial](https://www.rtfmanual.io/csssundae/)!

Did you enjoy this post? Give it a “heart” so it can help others as well!

If you enjoyed this post, you may enjoy [my other similar posts](https://medium.com/@kevink) on various JavaScript topics.








