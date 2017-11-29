---
author: Simon Waters
authorTwitter: https://twitter.com/developersimon
authorFacebook: none
title: "How to build a Hackintosh for coding"
subTitle: "Let’s talk about Hackintosh-ing — the installation of Mac OS X on PC hardware...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*FYqYWh0SOJVBpuZUKDBtAg.jpeg
url: https://medium.freecodecamp.org/build-a-hackintosh-for-coding-560bcdd3446d
id: build-a-hackintosh-for-coding-560bcdd3446d
date: 2016-06-30T08:55:44.000Z
tags: [
  "Coding",
  "Hackintosh",
  "Apple",
  "Tech",
  "Technology"
]
---
# How to build a Hackintosh for coding



![](https://cdn-images-1.medium.com/max/1600/1*FYqYWh0SOJVBpuZUKDBtAg.jpeg)



Let’s talk about [Hackintosh-ing](https://en.wikipedia.org/wiki/OSx86) — the installation of Mac OS X on PC hardware.

If you want a Mac-compatible computer, but don’t want to shell out thousands of dollars, a Hackintosh can help you code for iOS without buying a Mac.

So without further ado, here’s a quick overview of how to build a Hackintosh, its benefits, and hazards you should watch out for.

> _Well the HP Elitebook 8470p_ [_#hackintosh_](https://twitter.com/hashtag/hackintosh?src=hash) _is now built. Time to carry on with_ [_@FreeCodeCamp_](https://twitter.com/FreeCodeCamp) _-ing, now that I’m mobile_ [_pic.twitter.com/w1psj9Gkud_](https://t.co/w1psj9Gkud)

> _— Simon Waters (@developersimon)_ [_June 12, 2016_](https://twitter.com/developersimon/status/742047965309734912)

#### What is a “Hackintosh”?

For a number of years now, Apple Macs have shipped with Intel processors, the very same ones found in a PC. In fact, quite a number of hardware components are similar on both PC and Mac, aside from the shiny aluminum case.

And some intelligent people have figured out a way to install Mac OS X standard PC hardware, thereby fooling it into thinking it’s a real Mac.

The main benefit is, of course, price. Building your own Hackintosh from a list of [pre-vetted components known to be compatible](http://www.tonymacx86.com/buyersguide/june/2016) will cost you considerably less than a real Mac.

The downside to all this is that building a Hackintosh is that it’s not for the faint-hearted — it takes some research and some knowledge of building a PC, and an element of trial and error to get a fully working system.

Luckily for us, there are a lot of really great resources online to help in building a Hackintosh.

My personal favorite is [www.tonymacx86.com](http://www.tonymacx86.com/), where you’ll find hardware buying guides. It also showcases handy installer tools such as [Unibeast](http://www.tonymacx86.com/resources/unibeast-6-2-0.314/) and [Multibeast](http://www.tonymacx86.com/resources/multibeast-el-capitan-8-2-3.319/), which pretty much create a Hackintosh for you if you have the right hardware.

#### How do I get started?

Your best bet is to head over to [this beginners post](http://www.tonymacx86.com/threads/im-new-to-everything-where-do-i-start.104542/) and get reading to familiarize yourself with it all.

In a nutshell, you start by getting a hold of the latest version of Mac OS X. [This guide will help you](http://www.tonymacx86.com/threads/simplest-mac-os-x-installation-guide.60255/).

You then use Unibeast to create a USB installer of Mac OS X, which will boot on a PC. Once you boot with this USB, you are able to install Mac OS onto a hard drive of your choice.

The final step is to use Multibeast, which allows you to customize your installation, installing custom Mac drivers (known as “kexts” — kernel extensions). These talk to all your hardware and make sure it’s all recognized as “official” Mac components. It also allows you to boot into Mac OS X without needing the USB drive created earlier, giving you a standalone Mac system.

#### What are the benefits?

The main benefit to using a Hackintosh is a much better cost/performance ratio compared to a real Mac. You can save a thousand dollars or more.

Because you can use off-the-shelf hardware, you can in theory build a Mac-compatible computer that is more powerful than any Macs that Apple sells.

You also get to experience the pure joy of using Mac OS X, which is of course a far superior OS than Windows. (Cue the flame war).

Finally, you get access to XCode for development. You can create an Apple ID as normal and use it to publish your apps to the App Store.

#### What are the pitfalls?

Updating to the next version of Mac OS X comes with some risks. You can mostly mitigate these risks by using the Clover bootloader, which keeps all your custom Hackintosh files in a separate area on your hard drive, called the EFI partition. This partition won’t be overwritten by an OS update.

You may not get everything working correctly the first time, so you need to spend a fair bit of time Googling error codes to find out what’s gone wrong. There are very few problems for which there’s no pre-discovered solution, though.

#### Can I turn my laptop into a Hackintosh?

Yes, you can! It’s a bit trickier though, because you are far more limited in hardware customization options than you would be with a desktop computer.

It will either work, or it won’t. Your best bet is to simply Google “laptop model” + “Hackintosh” and see what comes up.

I did my own research, and can tell you that the HP Elitebook 8470p works perfectly, once you swap out the WiFi card for a $2 one from China on eBay. I picked mine up from a UK laptop refurbishment company for GBP£120 (around USD $180–200). It’s the i5 2.6 Ghz version, with the 14-inch standard definition screen. A lot cheaper than repairing my broken 2008 Macbook Pro!



![](https://cdn-images-1.medium.com/max/1600/0*w0MPjTscP7R9o8oW.png)



As you can see, it is recognized as a mid 2012 Macbook Pro.

#### What’s the best hardware to use for a Hackintosh?

If you’re looking to build a new computer from scratch, head over to [www.tonymacx86.com](http://www.tonymacx86.com/) and look at the latest buyers guide (updated monthly). Any components you pick from that list will work, but the most important are the motherboard and CPU. I’ve found that RAM and storage barely make any difference. With a fully-compatible motherboard (Gigabyte’s work well), you won’t need any external ethernet or WiFi cards, as you’ll have everything working “out-of-the-box”.

Here’s the current Hackintosh configuration I use for my for my desktop computer:

*   Gigabyte Z97-SLI Motherboard
*   Intel 4770K CPU @ 3.5 Ghz
*   16GB Corsair RAM (2x 8GB sticks)
*   Gigabyte 760 OC Windforce edition GFX
*   128GB SSD for the OS
*   3TB and 1.5TB 7200 HDs for storage

The SSD works great. I can boot my desktop in about 10–15 seconds.

Back when I started Hackintoshing in around 2009–10, I use an ancient Asus P5K with Core 2 Quad Q6600 processor as my Mac Pro, to compliment my real Macbook Pro early 2008 edition.

#### How much does it cost?

It’s entirely dependent on which components you buy, of course, but you can expect to pay a great deal less than a real Mac. Especially if, like me, you already have a range of PC parts lying around (monitor, keyboard, mouse, case, hard drives etc).

You don’t really need to invest in a fancy graphics card. The onboard Intel HD4000 that comes with Core CPUs is compatible.

My desktop rig was upgraded last year for about £100 (motherboard), £165 (CPU), and £90 (RAM). I already owned the rest of the components.

#### What can I use my Hackintosh for?

Anything you’d use a real Mac for. I tend to use my for day-to-day stuff. I also use it in coding my video game in Unreal Engine, which is inspired by the 1980s video game Spindizzy. The main advantage is that I can also export my game to iOS, because XCode is required for iOS development.

#### What about Windows?

The beauty of a desktop Hackintosh is that you can (with a bit of work) dual boot Mac OS X and Windows from the same hard drive. However, before you attempt this, it’s worth pointing out that to save any future headaches, you really should consider just using a separate hard drive for each OS. This is due to some technicalities with bootloaders being overwritten once you install Windows. Google “Dual Boot Hackintoshes” for more info.

#### Next steps

Get yourself over to [tonymacx86.com](http://www.tonymacx86.com/) and start your research. From a user experience point of view, once you are up and running, there is no difference between a Hackintosh and a real Mac, other than the shiny box it comes it. In terms of performance, you will get far more for your money, and these days stability is just as good as a real Mac.

Happy Hackintoshing!











* * *







_Originally published at_ [_simonwaters.co.uk_](https://simonwaters.co.uk/build-a-hackintosh-for-ios-coding/) _on June 30, 2016._








