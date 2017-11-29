---
author: Victor Savkin
authorTwitter: https://twitter.com/victorsavkin
authorFacebook: https://facebook.com/10208572694571329
title: "Make WebStorm better with these customizations"
subTitle: "In this blog post I will show how to make WebStorm look awesome, make it faster, and improve the dev ergonomics...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*oCrv_hHYKEzkVxS0zaVwwg.png
url: https://medium.freecodecamp.org/make-webstorm-better-with-these-customizations-c038c9e5f84b
id: make-webstorm-better-with-these-customizations-c038c9e5f84b
date: 2016-08-03T17:28:08.664Z
tags: [
  "JavaScript",
  "Web Development",
  "Software Development",
  "Programming",
  "How To"
]
---
# Make WebStorm better with these customizations







![](https://cdn-images-1.medium.com/max/2000/1*oCrv_hHYKEzkVxS0zaVwwg.png)







In this blog post I will show how to make WebStorm look awesome, make it faster, and improve the dev ergonomics.

#### Make WebStorm Look Awesome

If you are asking yourself why is my WebStorm UI looks so much cooler than the default UI, the answer is that I customized it.

To get the same look, do the following:

*   Hide the toolbar and tool buttons. WebStorm is a keyboard-friendly environment, so there is absolutely no reason to have any buttons taking valuable real estate.
*   [Install the Material UI theme plugin.](https://github.com/ChrisRM/material-theme-jetbrains) It looks gorgeous.
*   Don’t settle for the default font. Use the one you really like. (e.g., I use [Operator Mono](http://www.typography.com/fonts/operator/styles/)).

#### Make WebStorm Fast

My WebStorm does not just look better, **it is faster as well**. If you feel the need for speed, do the following:

Open:

<pre name="2960" id="2960" class="graf graf--pre graf-after--p">/Applications/WebStorm.app/Contents/bin</pre>

Open the idea.properties configuration file, and enable [the experimental zero-latency mode](https://blog.jetbrains.com/idea/2015/08/experimental-zero-latency-typing-in-intellij-idea-15-eap/) by adding the following line:

<pre name="d91f" id="d91f" class="graf graf--pre graf-after--p">editor.zero.latency.typing=true</pre>

If you even felt that WebStorm is laggy comparing to text editors, the zero-latency mode will fix this.

Next, open webstorm.vmoptions. Bump up the max heap size to at least 3 gigabytes. Our dev machines have so much memory — might as well use it!

#### Secret Weapon: AceJump



![](https://cdn-images-1.medium.com/max/1600/1*tIQ0p2EVXthdVMEy7d_31w.png)



Finally, do yourself a favor and install the Ace Jump plugin. With it you can move your cursor anywhere on the screen with just two keystrokes. So no more “down down down down down right right right right’. To see it in action, [watch this video by](https://www.youtube.com/watch?v=yK8eM50DsAY) [John Lindquist](https://www.youtube.com/channel/UCKW92i7iQFuNILqQOUOCrFw)[.](https://www.youtube.com/watch?v=yK8eM50DsAY)











* * *







[Follow @victorsavkin](https://twitter.com/victorsavkin) to read more about Web Development.

_If you liked this, click the💚 below so other people will see this here on Medium._








