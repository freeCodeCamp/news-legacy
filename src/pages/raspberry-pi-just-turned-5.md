---
author: Terren Peterson
authorTwitter: https://twitter.com/Terren_in_VA
authorFacebook: https://facebook.com/10154025468377615
title: "Raspberry Pi just turned 5. Here’s a brief history of the world’s tiniest hobbyist computer."
subTitle: "Raspberry Pi just turned five years old. In this short period of time, twelve million of these devices have been sold, enabling countless..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*7GJdUsrLnqQ3RLdBz4rOVQ.jpeg
url: https://medium.freecodecamp.org/raspberry-pi-just-turned-5-d4210cc29230
id: raspberry-pi-just-turned-5-d4210cc29230
date: 2017-03-11T22:04:14.720Z
tags: [
  "Raspberry Pi",
  "Technology",
  "Makers",
  "Tech",
  "Startup"
]
---
# Raspberry Pi just turned 5\. Here’s a brief history of the world’s tiniest hobbyist computer.







![](https://cdn-images-1.medium.com/max/2000/1*7GJdUsrLnqQ3RLdBz4rOVQ.jpeg)

Three generations of devices — Gen 1, Gen 2, and Zero







Raspberry Pi just turned five years old. In this short period of time, twelve million of these devices have been sold, enabling countless maker projects around the world.

Let’s walk through the evolution of these devices, and explore how they can be used on projects.

### In the beginning…

The first generation of the Raspberry Pi devices came out in 2012\. You could fit one on a 3" x 2" card (not including protrusions from add-ons). They used a standard SD card as their local drive, and featured two USB ports.



![](https://cdn-images-1.medium.com/max/1600/1*OSKRsxwiE_21fMktNr_QUg.jpeg)

Hardware for first generation Raspberry Pi



The price point was extremely low (initial targets were $35 and $25 for just the Pi). Hobbyists like me quickly snapped them up and got started on Internet of Things projects.

Users like me quickly realized that you needed a number of hardware extensions before you could get the device onto a wireless network — or to even connect it to a keyboard and mouse. You also wanted to mount it inside a durable case to prevent wear and tear on the board.

We purchased our first one for Christmas in 2013\. My daughter and I used it for her science project, which involved creating an LED alarm that could detect when an intruder ventured near her [Minecraft castle](https://www.raspberrypi.org/learning/getting-started-with-minecraft-pi/). The device supported scripting in Python, and all of the relevant extensions to make remote HTTP/S calls using the Minecraft SDK.



![](https://cdn-images-1.medium.com/max/1600/1*NQZW2wbaER_kCp2FZkvb0A.jpeg)



### Generation 2

Raspberry Pi added major improvements to their second generation, which they released in early 2015\. This included a doubling of the number of USB ports. This eliminated the need for a USB hub. Instead, you could plug a wireless adapter, keyboard, and mouse all directly into the device at the same time.

To make way for an expansion of GPIO pins, they removed the little-used RCA and 3.5mm ports and added a smaller microSD card for the local drive. They upgraded the onboard CPU from a single to a quad core, expanding the processing capabilities of the device.

While the visual changes to the device were small, these were major upgrades were all based on the community’s usage and feedback.



![](https://cdn-images-1.medium.com/max/1600/1*tKRzlUEkT19jlTZiDTH8dg.jpeg)

Side-by-side Gen 2 and Gen 1 Devices



In experimenting with this next generation of device, I found that the GPIO pins were great for running sensors. The size and power were ideal for [indoor gardening projects](https://www.hackster.io/terren/simple-gardening-service-manage-indoor-gardens-using-iot-be95d1), too.



![](https://cdn-images-1.medium.com/max/1600/1*Zz0tmv-oDBExbSg4xoWHrA.jpeg)



I could use a single unit mounted within my experiment to record humidity, temperature, and soil moisture content. I could also capture time-lapse photos by adding a camera, then upload all of the data to the Cloud for processing and pushing out to a website.

I could also use the GPIO pins to control relays that instruct motors to turn off and on. This could be very useful when building a [voice enabled pitching machine](https://www.hackster.io/terren/roxie-the-voice-activated-pitching-machine-94e4f2) like the one in the video below.





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/21e2b8ac6f44b91f0e6b506a30f144e3?postId=d4210cc29230" data-media-id="21e2b8ac6f44b91f0e6b506a30f144e3" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fg3wcF0_ms-0%2Fhqdefault.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





### Shrinking to Zero

Raspberry Pi released a second line in late 2015: the Raspberry Pi Zero. The target price dropped as well, with $5 being the new standard (although it was difficult to find a retailer with them at stock.)

While the Zero didn’t have the same number of ports — just one micro USB — it did have a massive advantage in size and power consumption. It weighed in at just 9 grams, and the board was just one-third the size. It continued to support the addition of a camera, and the operating system was the same as with the larger models.

The Zero’s power consumption was less than a Watt, enabling it to draw minimal power from either a direct USB power source or a local battery. While the Model B had gotten more powerful, it also was drawing up to 4 Watts — more than double the initial model. This could be a limiter when doing remote data collection in situations where a steady source of power wasn’t available.



![](https://cdn-images-1.medium.com/max/1600/1*JGmS1vrsjE72qNQ4Ft5hww.jpeg)

Raspberry Pi Zero vs. 2nd Generation Model B



The reduction in size allowed for the device to be hidden easier in Internet of Things projects, including this image recognition system I built for [monitoring my coffee bean supply](https://medium.freecodecamp.com/how-i-built-a-fully-automated-system-that-restocks-my-kitchens-coffee-from-amazon-87072b65efd0).



![](https://cdn-images-1.medium.com/max/1600/1*G1MQH50H359-2HKD9fTuFQ.jpeg)

JavaWatch based on a Raspberry Pi Zero



### What’s Next?

As part of their five year anniversary, Raspberry Pi [just announced](https://www.raspberrypi.org/blog/#raspberry-pi-zero-w-joins-family) a new wireless version of the Zero with a price point of just $10! Looking at the photo above, it’s easy to see the benefit. Given that wireless connectors need a USB port, you need an adapter so large that it can make the small device look awkward with projects like this.

The latest version puts the WiFi connection on the board itself, eliminating the need for a dongle and the extra expense of a separate WiFi adapter.

My guess is that the next version will upgrade to a multi-core CPU to handle greater processing. There’s parity with most of the other capabilities of the larger model, so you might not need to many other add-ons.

The number of uses for these devices are limitless. They will surely stay in high demand.

Thanks for reading. I hope you get to experiment with a Raspberry Pi soon.








