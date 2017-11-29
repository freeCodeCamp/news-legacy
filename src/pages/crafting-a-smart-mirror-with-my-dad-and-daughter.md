---
author: Coding with Cookie
authorTwitter: https://twitter.com/codingwcookie
authorFacebook: none
title: "How I built a Smart Mirror, with a little help from my daughter and her grandpa"
subTitle: "This month I built a smart mirror with my dad and daughter. This project spanned across three generations...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*0MC93WQzKqFGisGM2WisVQ.png
url: https://medium.freecodecamp.org/crafting-a-smart-mirror-with-my-dad-and-daughter-c3bdd151fefd
id: crafting-a-smart-mirror-with-my-dad-and-daughter-c3bdd151fefd
date: 2017-08-21T04:31:11.238Z
tags: [
  "Raspberry Pi",
  "Internet of Things",
  "Smart Home",
  "Life",
  "Technology"
]
---
# How I built a Smart Mirror, with a little help from my daughter and her grandpa

This month I built a smart mirror with my dad and daughter. This project spanned across three generations.

The idea started a few years ago with the novelty of a smart mirror. But before I was going invest the time and money to make one, I needed a practical reason to build one. Recently that reason presented itself.

In our kitchen we have a whiteboard where we list out our dinner plans for the week and I wanted to upgrade it. I submitted a presentation idea for the smart mirror at local tech conference. My smart mirror presentation was [selected](https://seattle.codecamp.us/Session/Details/217). This accelerated my timeline.







![](https://cdn-images-1.medium.com/max/2000/1*0MC93WQzKqFGisGM2WisVQ.png)

Programming the Smart Mirror with my Daughter







I needed help with the design of the smart mirror frame

since I live in the digital world designing software that lives in the cloud. My dad is a Mechanical Engineer who lives in the physical world designing the planes we fly though the clouds everyday. While talking with my dad one evening, he suggested to create some initial sketches of the mirror.







![](https://cdn-images-1.medium.com/max/2000/1*vCEPY2LlltiR4StEa16iiQ.jpeg)

Initial Design of Smart Mirror







After a few more conversations with my dad and several design revisions, we settled on a simple box design for the frame. My dad knew more about woodworking than I did, and he had a few suggestions for me.

Like using cabinet draw sides for the sides of the frame as they already came with a groove to hold the glass. And using [french cleats](https://en.wikipedia.org/wiki/French_cleat) to secure the mirror to the wall. This also allowed it to be easily removed for transport.







![](https://cdn-images-1.medium.com/max/2000/1*ZOn3rs_nvfx9HcayYwtIkw.jpeg)

Revised Design of the Smart Mirror







My wife was a huge support in this endeavor. She helped by sorting through dozens of televisions looking for the right price and features. The size had to be large enough for our kitchen, but not too large to make transporting a hassle. Finally she was able to get a television from Best Buy that had everything I was looking for. And the best part was that it was on sale.

The most noticeable part of the smart mirror is the reflective mirror. Most household mirrors are made from glass. But the biggest downside to using glass is that it’s fragile and doesn’t transport well. I chose plastic as it’s lighter, more transparent, and more durable.

It’s nice to talk to experts and I live in Seattle which has a great local [plastic supplier](https://www.tapplastics.com/). They were excellent and able to help me select the correct plastic. They suggested acrylic and we even tested the mirror film I had acquired on a sample they had. And this was not the first smart mirror they had supplied the plastic for so I knew I was on the right track.

The choice was simple when it came to deciding where to assemble the frame. My dad has a new workshop and all the tools we needed and I have a garage and a single toolbox. Once I had acquired the wood, acrylic, and mirror film, I went over to my dad’s workshop to assemble the frame.

I thought it would take 4–5 hours. But it took around 15 hours to assemble the mirror. That may be due to refining the design as we were making the mirror. It may also be due to me asking a lot of questions, like why glue this instead of screw that. Or it was due to having a good time with my dad. Looking back it was a combination of all the above.

Over three separate days we cut, glued, nailed, and screwed the frame together. It would hold the television, acrylic mirror, and Raspberry Pi.

Several power tools were used including a table saw, chop saw, and nail gun so my daughter didn’t help with that part. But she was able to help with the final assembly when the acrylic mirror was inserted. She was even able to use the power drill to screw in the top during the final assembly.







![](https://cdn-images-1.medium.com/max/2000/1*0gheGlfYXpB1Mrdc086vkg.jpeg)

My Daughter using a Power Drill to Screw in the Top of the Mirror







With all the woodworking completed, my daughter and I started wiring everything together. As pink is her favorite color, it was obvious that the only choice was to 3D print the Raspberry Pi case in pink.

We put the Raspberry Pi into the pink case and attached it to the back of the TV via adhesive Velcro.

By using Velcro, the Raspberry Pi can be disconnected. Thus I can show the size of the computer transforming the mirror into a smart mirror.



![](https://cdn-images-1.medium.com/max/1600/1*uHb5-9NkARoGyX6_JiBLUQ.jpeg)

3D Printed Pink Raspberry Pi Case



Modern televisions usually include a USB port, and the one my wife found did indeed have one. I tested it out the USB Port on the TV and it was able to supply enough power to the Raspberry Pi. This meant that the TV Power cord was the only cable I needed to plug into the wall outlet.

Then we plugged the USB and HDMI cables into both the Raspberry Pi and TV and we were ready to go.

With the on board WiFi I connected the smart mirror to the internet without any other wires. And when the power is out it will still work as a traditional non-smart mirror.







![](https://cdn-images-1.medium.com/max/2000/1*hDmu4OZxb6r8Tq2-xfXsIw.jpeg)

My Daughter and I Connecting all the Wires on the Back of the Smart Mirror







When you are 4, typing on a keyboard and coding are cool. We’ll see how she feels when she’s 14.

My daughter got to help a lot on the software part of the smart mirror. Since her spelling abilities end with her name, she was able to type that and was very excited when she saw it on the smart mirror.

To get her name to appear, we used HTML. To keep it simple a static HTML page with inline styling via Chrome, fullscreen `F11`, was all we had to do to get it working. The background needs to be as dark as possible to minimize the light coming though the mirror.

When the screen is off or completely black it appears as a common mirror. The text and graphics need to be as bright as possible to show through, transforming it into a smart mirror. On my mirror I was able to find a film with 5% transparency.







![](https://cdn-images-1.medium.com/max/2000/1*SXPDPCF59-KLfzlGpW-cCA.jpeg)

Installing the Acrylic Mirror into the Frame







In reviewing my mirror thus far, I would do a few things different next time. First, I would get a slimmer television. Right now the mirror frame is 4.5 inches deep, which is deep enough that you notice, but not so deep that it’s obtrusive.

Next, I would order acrylic with the mirror film already installed. My dad and I were able to install the film in 20 min, but this resulted in several small bubbles. Most likely due to a few small pieces of dust trapped between the film and acrylic.

Also, I would add a more stylized front. If you take a look at the corners of my smart mirror, you will see all the layers of plywood. This could be hidden with some nice wood to more resemble a picture frame.

Finally, I would add a small gap between the TV and acrylic. Currently, the acrylic is helping to support the TV. This is putting pressure on the acrylic causing it to bend slightly. This results in a slight distortion of the mirror.

Building the Smart Mirror has been a great experience and if you have any questions please [reach out](https://codingwithcookie.com/contact/).

The next project that my daughter and I are working on is wiring some sensors in the kitchen to track the temperature in the refrigerator and freezer. I’m hoping to get her more involved with this and future projects as she is excited to help and wire the sensors on a breadboard.

I look forward to sharing that story with you once she and I have completed it.



![](https://cdn-images-1.medium.com/max/1600/1*oZEtDRyuK9QDXUFuTewdPA.jpeg)










