---
author: Kevin Kononenko
authorTwitter: https://twitter.com/devmanual
authorFacebook: https://facebook.com/10203738544564981
title: "CSS Flexbox Explained by Road Tripping Across the Country"
subTitle: "If you have ever been on a long roadtrip, then you can understand CSS Flexbox!"
coverSrc: https://cdn-images-1.medium.com/max/2000/1*kwaAOW_ja_raNVgV3VgZ2g.jpeg
url: https://medium.freecodecamp.org/css-flexbox-explained-by-road-tripping-across-the-country-1217b69c390e
id: css-flexbox-explained-by-road-tripping-across-the-country-1217b69c390e
date: 2016-10-22T05:34:28.001Z
tags: [
  "CSS",
  "Web Development",
  "Design",
  "Web Design",
  "Programming"
]
---
# CSS Flexbox Explained by Road Tripping Across the Country

## If you have ever been on a long roadtrip, then you can understand CSS Flexbox!

The popular Flexbox model attempts to replace the giant pain known as CSS “[floats](https://medium.freecodecamp.com/css-floats-explained-by-riding-an-escalator-57fa55232333)”. Unfortunately, it also introduces yet another entirely new system into CSS. And you thought there were enough already!

Actually, the grid-oriented nature of Flexbox makes much more sense than constantly juggling your “float” and “block/inline-block” values.

There are already a couple good resources out there, like [Flexbox Tower Defense](http://www.flexboxdefense.com/) and this [more technical guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

In this article, I’ll take the route of explaining the Flexbox system through one of my favorite types of vacations… the road trip!

That’s right — we’re going to use the entire United States in this analogy.

The US actually has a grid-oriented interstate highway system that spans East-West and North-South.



![](https://cdn-images-1.medium.com/max/1600/1*dvFENsh3hvfWUw4Y6ahXfA.png)



While this map is geographically accurate, it’s pretty hard to understand. So let’s try that again.







![](https://cdn-images-1.medium.com/max/2000/1*Qqg_4ini5SyEszW8kQByqA.jpeg)

[https://betterexplained.com/articles/highway-math/](https://betterexplained.com/articles/highway-math/)







In this scenario, **you must primarily travel along a one-directional path**.

For example, you might take the route from Seattle to Boston which only includes west to east. Or, you might take the route from Seattle to San Diego, which only covers north to south.

Since the default position is top left, we’ll start from Seattle. You’ll get a chance to add side trips to your road trip towards the end! This is important because it imitates the flow of  with “display:flex;”. The default value is “row”, which means from left to right. No surprises there.

Let’s say you’re starting in Seattle, and taking a trip to Boston. That trip might look like this in HTML:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a3ebb75fba9ab7d66c276aede453b38c?postId=1217b69c390e" data-media-id="a3ebb75fba9ab7d66c276aede453b38c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F8312841%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





This assumes that you’re making stops at Yellowstone, Mount Rushmore and Chicago. Here is a timeline view, assuming you stop for 2 days at each location.



![](https://cdn-images-1.medium.com/max/1600/1*MHr0lF_nWdUim0T1duN81A.png)



And what if you are using “flex-direction:column;”? That means that your 

![](https://cdn-images-1.medium.com/max/1600/1*9k1NlSDqmYG46zb_nc49oQ.png)



### justify-content: How you space your stops along the trip

Alright, let’s return to the Seattle to Boston trip. With Flexbox, we can decide how our child s spread from the left-most side. This is similar to choosing to do all of your stops on the roadtrip at the beginning. This would include places like Glacier National Park, Yellowstone and Mount Rushmore.

On a map:



![](https://cdn-images-1.medium.com/max/1600/1*hsukM2jd3rHpnMZe77R0SQ.png)



Okay, this is admittedly a little unrealistic. You probably would not want to drive 20 hours from South Dakota straight to Boston. The same could be said of “_flex-end_”, when all of the 

![](https://cdn-images-1.medium.com/max/1600/1*UqTFioPsD_oGuGSR04u22w.png)



Another example is “_center_”, where the . That would mean visits to Mount Rushmore, the Mall of America in Minnesota and Chicago.

### align-items: Which highway do you want to take across the country?

Alright, so far we have mainly been discussing the northern route across the country. In HTML terms, that means we are just going along the top of the  without any CSS trickery.

The align-items property defaults to “flex-start”, but if we change that to “_center_”, our 

![](https://cdn-images-1.medium.com/max/1600/1*v8ihdtN84aFfEu5rMlCrXw.png)



And, in HTML:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/0299d83e34b45e47e95632df0c160d7f?postId=1217b69c390e" data-media-id="0299d83e34b45e47e95632df0c160d7f" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F8312841%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





If you wanted to set your align-items value to “_flex-end_”, your s in order to have them move vertically within the container, regardless of the align-items property. So if you are taking the trip from Seattle to Boston, you can make a stop in Las Vegas, which is in the middle of the country. Then you can continue on to Mount Rushmore or wherever else on the normal horizontal flow.



![](https://cdn-images-1.medium.com/max/1600/1*MktBw1O06Ka2hyx94qaC3g.png)



### order: Make your stops in a specific order

So far, every stop has corresponded with the order of the elements in the HTML. In other words, if the Mount Rushmore stop is specified third in the HTML, that means it will be the third stop on the road trip.

The “order” property is a numerical value that allows us to change the order of the HTML elements. Without Flexbox, we would need to use a confusing series of floats, or just change the HTML.

With “order”, we can turn around on our road trip and visit a place that is not on the way to the end point. Would you do this in real life? Only if you enjoy an extra 15 hours in the car!

Let’s say we’re taking the northern trip, Seattle to Boston. Here’s that HTML again.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a3ebb75fba9ab7d66c276aede453b38c?postId=1217b69c390e" data-media-id="a3ebb75fba9ab7d66c276aede453b38c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F8312841%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





But, after starting in Seattle, we want to first go to South Dakota for the world’s largest square dance festival. We would use the “order” property to make sure the Mount Rushmore visit comes right after Seattle.

Order defaults to 0, so we might want to give seattleVisit a value of -2, and mountRushmoreVisit a value of -1 to make sure it comes 2nd. Then the rest of the elements will follow in a normal flow.



![](https://cdn-images-1.medium.com/max/1600/1*qXT61u8PvoKDzOQhQVvH2A.png)



Notice — this is now strictly a timeline view, not using the geographic order as the other maps were using.





<iframe data-width="800" data-height="400" width="700" height="350" src="https://medium.freecodecamp.org/media/49d3eea55442a7cdcaff56ecc0af5a9e?postId=1217b69c390e" data-media-id="49d3eea55442a7cdcaff56ecc0af5a9e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fupscri.be%2Fmedia%2Fform.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





### Conclusion

Time for a little quiz! Here are some sample destinations, in HTML.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d217921cf6e9a713f24414cd7195641f?postId=1217b69c390e" data-media-id="d217921cf6e9a713f24414cd7195641f" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F8312841%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





But, if the following is your planned route… what would the CSS need to look like?

*   Start in San Francisco
*   2nd stop: Las Vegas
*   3rd Stop: Mount Rushmore
*   4th Stop: Backtrack to Denver
*   End by driving all the way to Washington D.C

The answer:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/1754e01453e5216c0e0c6cc5de339e56?postId=1217b69c390e" data-media-id="1754e01453e5216c0e0c6cc5de339e56" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F8312841%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Here’s the reasoning behind this:

*   4 out of 5 items are along our central route, so we “align-items” to _center._
*   The three stops are generally in the middle of the United States from a West-East perspective, so we “justify-content_”_ to _center_ as well.
*   Mount Rushmore is on the northern route, so we use _align-self_ on that one s in the HTML. Order allows us to change the sequence of  so that we still end in D.C.











* * *







If you enjoyed this post, you may also enjoy my [other explanations](https://www.rtfmanual.io/guides/) of challenging CSS and JavaScript topics, such as positioning, Model-View-Controller, and callbacks.

And if you think this might help other people in the same position as you, give it a “heart”!








