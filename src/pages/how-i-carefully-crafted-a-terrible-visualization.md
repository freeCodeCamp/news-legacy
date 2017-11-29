---
author: Krist Wongsuphasawat
authorTwitter: https://twitter.com/kristw
authorFacebook: https://facebook.com/10152865766859646
title: "How I carefully crafted a truly terrible data visualization"
subTitle: "Yes, you read that right. I am going to explain how I put together a really bad visualization, intentionally...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*0u_09uNk77XdqOctXLk9MA.jpeg
url: https://medium.freecodecamp.org/how-i-carefully-crafted-a-terrible-visualization-2c8e06d50ebb
id: how-i-carefully-crafted-a-terrible-visualization-2c8e06d50ebb
date: 2016-04-13T08:48:03.192Z
tags: [
  "Design",
  "Data Visualization",
  "Data Science",
  "Big Data",
  "Tech"
]
---
# How I carefully crafted a truly terrible data visualization







![](https://cdn-images-1.medium.com/max/2000/1*0u_09uNk77XdqOctXLk9MA.jpeg)







Yes, you read that right. I am going to explain how I put together a really bad visualization, intentionally.

Andy Kirk of [visualisingdata.com](http://www.visualisingdata.com/) posted an interesting contest challenging everyone to come up with the **“best worst viz.”** Of course, one of the motivations for me doing this is to win a copy of his book. But the contest itself is also a thoughtful exercise.





<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/c851daf15f6a1f1c7b6700e564579d9b?postId=2c8e06d50ebb" data-media-id="c851daf15f6a1f1c7b6700e564579d9b" allowfullscreen="" frameborder="0"></iframe>





When talking about extremely bad visualizations, the stereotypical ones often involve _3D pie charts,_ _rainbow color palettes_ andterrible choices of fonts, layouts, and colors.

In my opinion, bad visualizations don’t have to be just that. The goal I had in mind was to create a piece that looks totally harmless, but will torture your brain until you realize how absurdly ridiculous the whole thing is.

I collected data from visualizations featured on [viz.wtf](http://viz.wtf/) and drew each mark to represent one of the visualizations and its properties. Example questions to exercise your WTF gland are:

*   What’s the most common color for these visualizations?
*   Where are the pie charts?
*   Can you point out the least popular piece?
*   How often is 3D used?
*   Is there any pattern at all?







![](https://cdn-images-1.medium.com/max/2000/1*Q-tJ3MgDqZqH5eU7CsJzWQ.png)







Before reading the next section, try to figure out everything that is wrong with this chart by yourself.











* * *







### Concept

The main idea was to create conflicts in perception and mess with viewers’ cognitive thinking.

Bad visualizations usually have mismatches between visual encodings and data, such as encoding incomparable areas (3D pie) for numerical values. These mismatches leave viewers with little to do but scratch their heads, then abandon the visualization because it takes too much effort to make sense of it.

I wanted to take bad to the next level, and was inspired by one of my favorite responses from the Stack Overflow questions, “[What is the best comment in source code you have ever encountered?](http://stackoverflow.com/questions/184618/what-is-the-best-comment-in-source-code-you-have-ever-encountered)”

> #define TRUE FALSE  
> //Happy debugging suckers

My goal was to make something that seems like it can be interpreted, but creates very strong conflicts with our prior knowledge that are almost impossible to overcome. To do this, I chose very direct choices of encoding, such as using color to represent color, and position to represent position, then set the mappings counterintuitively so I could wreak complete havoc with viewers’ minds.

### Data

I was looking for a good dataset to try the idea on but could not find one I really liked. Then I got the idea that it would be recursively bad to create a bad visualization, of bad visualizations, so I manually collected some data from [viz.wtf](http://viz.wtf/)

### Here are all the crimes I have committed to this chart:

1.  I used color to represent color, but didn’t guarantee that they would be the same color. As a result, _green_ is the new _black_.
2.  I also didn’t add enough unique colors, so there are duplicates. For instance, both _red_ and _blue_ are represented by _green_. (This was not intentional at first, but then it made things look worse so I kept it.)
3.  There was a special case for “mixed” color, as I couldn’t decide what color to encode it with. As a result, each of these “mixed” visualizations received a randomly selected color.
4.  I used position to represent position, but ensured that these never matched up. With that, right is on the left.
5.  I used shapes to represent chart types, but ensured that they never matched. With that, a bar chart is a circle, while a pie chart looks like a bar.
6.  I used size to encode popularity, but used an inverse scale with the biggest size meaning zero.
7.  I made axis labels more complicated than they needed to be. No 3D? True or false?
8.  I rotate each giant number by its value in degrees. This one is pointless encoding.
9.  The circles around the giant numbers don’t mean anything. They do not indicate boundaries.
10.  If you sum all the numbers, there are actually 102 visualizations, not 100.
11.  I added a dinosaur. Because I could.
12.  Lastly, there was a link to the raw data, proudly shared in PDF format.

If you spot other terrible aspects of this visualization that I’ve overlooked, please feel free to leave a response below, or tweet at me.








