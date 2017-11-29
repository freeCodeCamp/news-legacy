---
author: Narendra N Shetty
authorTwitter: https://twitter.com/narendra_shetty
authorFacebook: https://facebook.com/819753064
title: "Bubble animation with React Native"
subTitle: "Lessons learned while building a React Native App using Animated and PanResponder"
coverSrc: https://cdn-images-1.medium.com/max/1600/0*TRtgLab0Tjd7bLg6.
url: https://medium.freecodecamp.org/bubble-animation-with-react-native-72674eab073a
id: bubble-animation-with-react-native-72674eab073a
date: 2017-08-02T07:35:02.739Z
tags: [
  "React Native",
  "JavaScript",
  "Mobile App Development",
  "Programming",
  "Design"
]
---
# Bubble animation with React Native

## Lessons learned while building a React Native App using `Animated` and `PanResponder`



![](https://cdn-images-1.medium.com/max/1600/0*TRtgLab0Tjd7bLg6.)



In this article, I’ll talk about how I implemented an app transition which I found on Dribbble by [Ramotion](https://dribbble.com/Ramotion).



![](https://cdn-images-1.medium.com/max/1600/1*GZVRK8qxfuLU4AUrUNry5g.gif)

[https://dribbble.com/shots/2694049-Pagination-Controller-App-Interface](https://dribbble.com/shots/2694049-Pagination-Controller-App-Interface)



This pagination controller can be used for onboarding flow or for a tutorial.

The complete version is published in Expo, and you can get it by opening the Expo app and scanning this QR code:



![](https://cdn-images-1.medium.com/max/1600/1*esBhVm4dAnaXERC-coIrVQ.png)

[https://expo.io/@narendrashetty/onboarding-blog](https://expo.io/@narendrashetty/onboarding-blog)



### Let’s begin, shall we?

Here’s how I built the background:

I had `View` holding the background color. This includes `Animated.View` for the bubble animation. Its position was absolute so that it stayed on top of the screen. I also added some basic styles.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/5b83a9d738a848f58a2e3e7bf133c214?postId=72674eab073a" data-media-id="5b83a9d738a848f58a2e3e7bf133c214" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F3153663%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>







![](https://cdn-images-1.medium.com/max/1600/1*Lwk_IdAAzEKX5Hb1tj4JNQ.png)



Then, I animated the bubble by expanding from 0 to max using the CSS transform scale with `Animated.timing`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9cb145a22976829a299f59a2eeac7901?postId=72674eab073a" data-media-id="9cb145a22976829a299f59a2eeac7901" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F3153663%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>







![](https://cdn-images-1.medium.com/max/1600/1*CtAMCroXo5AvBiwOZlc63Q.gif)



The above animation needed to trigger based on user interaction. First I used `TouchableWithoutFeedback`. Then I changed it with gestures.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/eee7af064e66dca96551849d2ae52e22?postId=72674eab073a" data-media-id="eee7af064e66dca96551849d2ae52e22" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F3153663%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>







![](https://cdn-images-1.medium.com/max/1600/1*sIcR0RdmQA7SK2fSUcu7MA.gif)



I positioned the bubble according to the gif, which animated from the bottom. I did this using `top` and `left` property.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a9e13b647ea6e938950f287b7d56b6bb?postId=72674eab073a" data-media-id="a9e13b647ea6e938950f287b7d56b6bb" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F3153663%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>







![](https://cdn-images-1.medium.com/max/1600/1*keM44KHgufeyR5s-aviqaA.gif)



Neat! Results are as expected except the color. We’ll get back to that later.

Now I restructured the code by moving the bubble logic into a separate component called `CircleTransition.` Then I triggered the animation from the parent component.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/291a8565c6bdefd82e611f83877481f0?postId=72674eab073a" data-media-id="291a8565c6bdefd82e611f83877481f0" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F3153663%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>









<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/e43c4696325a6714937c5801493caa65?postId=72674eab073a" data-media-id="e43c4696325a6714937c5801493caa65" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F3153663%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Then it was time when to tackle the color. To make the bubble animate with the new color, I passed the new color into the component. And after the transition, I hid the bubble.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/636999836dd909b53aa7d495cbc47db3?postId=72674eab073a" data-media-id="636999836dd909b53aa7d495cbc47db3" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F3153663%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>









<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/732d7375d47acef095f285d4ba33efa4?postId=72674eab073a" data-media-id="732d7375d47acef095f285d4ba33efa4" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F3153663%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>







![](https://cdn-images-1.medium.com/max/1600/1*OF0UIS4xMaHb5vXg0k6_bQ.gif)



Can you see something weird in the above transition?

During the second bubble transition, the background color is fell back to the first color. I needed to update the background color to the new color with the bubble transitioned.

I passed a callback to the `start` method which executed when the transition completed.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/697f48eba5a50ebd67ac8756a5028d7d?postId=72674eab073a" data-media-id="697f48eba5a50ebd67ac8756a5028d7d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F3153663%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>









<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/14e894b9b99f830ee1f728ec595bd74a?postId=72674eab073a" data-media-id="14e894b9b99f830ee1f728ec595bd74a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F3153663%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>







![](https://cdn-images-1.medium.com/max/1600/1*oo83AYeag2TPn43k6ApHXg.gif)



Voila! It’s all set. Now I had the basic animation working.

Next I got into the gesture. The bubble transitions when the user swipes left or right according to the gif.

I created a new component called `Swipe`. It contains all the logic for the gesture and replaces`TouchableWithoutFeedback`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/684217ea5adccf3ac8dabac453df690d?postId=72674eab073a" data-media-id="684217ea5adccf3ac8dabac453df690d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F3153663%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





I used `PanResponder`which reconciles several touches into a single gesture. It makes single-touch gestures resilient to extra touches. It can also recognize simple multi-touch gestures. For more on this you can go [here](https://facebook.github.io/react-native/docs/panresponder.html) and [here](https://facebook.github.io/react-native/docs/gesture-responder-system.html).





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/758761553621d21ad1c8700c52f9d573?postId=72674eab073a" data-media-id="758761553621d21ad1c8700c52f9d573" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F3153663%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Now for the logic of the gestures.

First I needed to figure out which direction the user is swiping. I only need to animate when the user swipes left or right. I also needed to setup some threshold to determine if it’s actually a swipe or not.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2fa515cef691b7f8daa3c1d63140d2c4?postId=72674eab073a" data-media-id="2fa515cef691b7f8daa3c1d63140d2c4" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F3153663%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





If it was a valid swipe, I triggered the appropriate action.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/0e65d207183aedb487c6d04c739ae4cd?postId=72674eab073a" data-media-id="0e65d207183aedb487c6d04c739ae4cd" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F3153663%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>







![](https://cdn-images-1.medium.com/max/1600/1*RAoguSe8-rcAvnCx2vkCIg.gif)



Yes! You guessed it right. I have gotten what I wanted to achieve with the gesture. Then I added an action for `swipeRight`. The gesture was completed with a bit of refactoring.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/01e7f7e1d08720dc53686418ebbfd4fe?postId=72674eab073a" data-media-id="01e7f7e1d08720dc53686418ebbfd4fe" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F3153663%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>







![](https://cdn-images-1.medium.com/max/1600/1*ENwNGJeMT2zODhYm1-WIzg.gif)



That’s it! This was the most complex part in the app.

I won’t show my complete work on this app. The information in this post should be enough help you build your own. Fork [this](https://github.com/narendrashetty/onboarding-RN) and try to complete your app to match the above gif.

If you are stuck and need any help, final version is in `result` branch, have a peek. Also you can ping me on Twitter [@narendra_shetty](https://twitter.com/narendra_shetty) or comment below.

And when you complete, please share your Expo/GitHub link.

If this article was of any help to you, please clap for me. It will motivate me to write more :)








