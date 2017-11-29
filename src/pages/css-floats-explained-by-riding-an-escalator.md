---
author: Kevin Kononenko
authorTwitter: https://twitter.com/devmanual
authorFacebook: https://facebook.com/10203738544564981
title: "CSS Floats Explained By Riding An Escalator"
subTitle: "If you have ever jumped on an escalator, then you can quickly understand floats."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*Ah5h2jCdtSGkLsEXp8IBnw.jpeg
url: https://medium.freecodecamp.org/css-floats-explained-by-riding-an-escalator-57fa55232333
id: css-floats-explained-by-riding-an-escalator-57fa55232333
date: 2016-09-20T06:32:08.404Z
tags: [
  "CSS",
  "Web Development",
  "Design",
  "Web Design",
  "Life Lessons"
]
---
# CSS Floats Explained By Riding An Escalator

## If you have ever jumped on an escalator, then you can quickly understand floats.

Your 

![](https://cdn-images-1.medium.com/max/1600/1*jdZ50msxxEJXyMfJWR_xvg.jpeg)



The default flow of elements is kind of like the picture above. Some guy is standing in the middle with his hand on the railing. He’s hogging the entire escalator. Nobody can pass him. Pretty poor escalator etiquette, really.

He is standing behind a bunch of other people that are doing the same thing, so nobody can pass them either. There is no concept of lanes or basic human decency.

This is the scenario when you are not using floats at all.



![](https://cdn-images-1.medium.com/max/1600/1*pocm7FjZE_c--G2mLffYtQ.jpeg)



All right, now we’re talking! People showing some level of awareness. Love to see that.

We have one lane formed on the left, and another lane formed on the right. Other people can easily move around the two people that are standing still and walk up the escalator more quickly, if they want. Nobody is blocking the flow by standing in the middle.

This is the scenario when you are using floats in your div. There is a left flow and a right flow, and the elements that are not floated can easily fill the space that is not taken by the floated elements.

### Floats: Left and Right

Using floats can introduce up to two new flows: left and right.



![](https://cdn-images-1.medium.com/max/1600/1*HbpY5zZdaazjF0yMk2HqKQ.png)



And this allows the normal flow of elements, those without a float value, to fill in the spaces around these elements.



![](https://cdn-images-1.medium.com/max/1600/1*bEmyvjSK6YW6__hMh7KX6A.png)



Floats allow you to create these new relationships between flows.

If you had one line of people standing in the middle of the elevator, you would have limited options for new structures. But when you have a left and right column, suddenly you can specify that certain people stand on the right, other ones stay left, and another group can fill in the gaps.

This allows you to create more readable and understandable code, because the float property also gives an **indication of an element’s relationship to surrounding elements.**

### The Clear Property

There is one more wrinkle that we have not discussed yet: the [clear property](https://developer.mozilla.org/en-US/docs/Web/CSS/clear). “Clear” allows elements to specify where they should align in comparison to the floated elements.

In the first picture of the “Floats” section, the two escalator riders were courteously standing on each side of the escalator. This allows others to pass them and move freely as they wish.

Let’s say that instead of having one floated left element and one floated right element, we instead had 3 floated left elements and 1 on the right. The three floated left elements would stack up in a line on the left if we also give them the “clear: left” property. But if they horizontally aligned with the floated right element, it could make it very difficult or even impossible for the normal flow of elements to pass:



![](https://cdn-images-1.medium.com/max/1600/1*8DUo9aDieoVScXu5iade2Q.png)



“Clear: left” tells each person floating left that they should align themselves behind the first element that is floated left. Depending on the size of the bottom two people, it could be challenging for any normal elements to squeeze through and occupy the space on the top right. So even good escalator practices can still lead to blockages.

One of the most frequent uses of the clear property is “clear:both”. This allows you to reset the flow of elements, as opposed to continuing to maintain a right, left and normal flow. It’s kind of like that guy on the escalator who takes up the whole space because he brought his suitcase.



![](https://cdn-images-1.medium.com/max/1600/1*wlb4YUsCAnv2_LIQlTm7sw.png)



With “clear:both”, it doesn’t matter where that one guy is standing in orientation to his suitcase. It doesn’t matter who is standing left or right above him. He’s still blocking the entire escalator. People who get on after him will need to start a new flow of elements, which could include any of the three flows: left, right, or normal.

He has escaped the three-flow system and reset the rules. Bad for people that want to run up the escalator? Sure. But it’s good if you want to stop anyone from passing.

Notice how this is different from the one gentleman at the beginning who stood in the middle of the escalator, behind a line of people who were doing the same. That was a one-flow system. “Clear: both” acknowledges that there may be up to three flows, and blocks the passage of any element that follows.





<iframe data-width="800" data-height="400" width="700" height="350" src="https://medium.freecodecamp.org/media/49d3eea55442a7cdcaff56ecc0af5a9e?postId=57fa55232333" data-media-id="49d3eea55442a7cdcaff56ecc0af5a9e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fupscri.be%2Fmedia%2Fform.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>















* * *







If you enjoyed this post, you may also enjoy my [other explanations](https://www.rtfmanual.io/guides/) of challenging CSS and JavaScript topics, such as positioning, Model-View-Controller, and callbacks.

And if you think this might help other people in the same position as you, give it a “heart”!








