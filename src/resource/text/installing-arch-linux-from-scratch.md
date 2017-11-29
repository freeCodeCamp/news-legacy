---
author: Andrea Giammarchi
authorTwitter: https://twitter.com/WebReflection
authorFacebook: none
title: "Installing Arch Linux from scratch"
subTitle: "… and in about 5 minutes …..."
coverSrc: placeholder
url: https://medium.freecodecamp.org/installing-arch-linux-from-scratch-b595095ddd48
id: installing-arch-linux-from-scratch-b595095ddd48
date: 2016-12-18T20:13:22.632Z
tags: [
  "Linux",
  "Archlinux",
  "Archibold",
  "Virtualbox",
  "Technology"
]
---
# Installing Arch Linux from scratch

… and in about 5 minutes …





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/af01f6859798738125ff6cca2673bc77?postId=b595095ddd48" data-media-id="af01f6859798738125ff6cca2673bc77" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FhEVqGNoRRk0%2Fhqdefault.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





As of today, it’s been more or less 3 years I am happily using Arch Linux as my primary Operating System, and I’ve used it daily not only on my laptop, but also on my [Gaming PC](https://medium.com/@WebReflection/a-gaming-pc-without-breaking-the-bank-b56c73bba1e7#.ktf73jt1x) and many [Single Board Computers](https://benja.io/) too.

I’ve been using my [archibold.io](https://archibold.io/) installer for quite a while, and recently I’ve rewritten it after learning more and more about Arch Linux.

This post is about _me_ giving back few things I’ve learned from the [Arch Linux](https://www.archlinux.org/) project and its community, hopefully simplifying life to whoever would like to embrace this awesome distribution!











* * *







### Booting a Linux OS in a nutshell

You need a special partition recognized as bootable, and with some automatically recognized binary file capable of telling the motherboard how to booth, and where to boot on.

In Arch Linux land, there are basically 3 major players: [U-Boot](http://www.denx.de/wiki/U-Boot/WebHome), the default boot loader used by [Arch Linux ARM](https://archlinuxarm.org/) ports, [Syslinux](http://www.syslinux.org/wiki/index.php?title=The_Syslinux_Project), which is the preferred choice of the very same Arch Linux ISO installer, and [Grub](https://www.gnu.org/software/grub/), usually easier to configure on multi-boot systems, which is not part of this very post scope.

Tools to deal with partitions are usually 2: **parted**, preferred when it comes to advanced features like UEFI partition and optimized disk alignment, or **fdisk**, which just works and does the job in a “_less scriptysh_” way.

#### Booting How ?

There are few ways to tell a motherboard how to boot a system: [UEFI](https://en.wikipedia.org/wiki/Unified_Extensible_Firmware_Interface) configuration, which is mostly suitable for Windows OS running on Intel CPUs but usable to boot Linux distros too, and legacy BIOS compatible, which has less features than UEFI but it always delivers (and is the most widely available).

On top of this distinction, while UEFI has a secure boot mode, which is again basically a Windows specific thing only, a boot can also include special commands capable of enabling, or disabling, an [EDD](https://en.wikipedia.org/wiki/INT_13H#EDD) mode, which is a good old _Enhanced Disk Drive_ technology that might not be needed on boot time and in some case should be explicitly disabled like in VirtualBox images or some AMD based SBC like the Gizmo 2 board.

#### Booting What ?

There is one and one only consolidated cross platform and universal File System out there and it’s sadly or thankfully the good old [FAT](https://en.wikipedia.org/wiki/File_Allocation_Table) one.

There are surely more suitable, more secure, faster, and more HW caring options out there, but FAT with a loader is a safe bet with both UEFI and legacy.

In few words, the most basic amount of partitions on your system should be 2: a FAT bootable one, and a “_whatever you want_” else. Please note that [ext4](https://en.wikipedia.org/wiki/Ext4) is still a very valid choice for daily tasks, but there are few valid alternatives to consider, yet not part of this post scope.

#### Any Swap ?

If you are installing Arch Linux on a system with more than 4GB or RAM, and you are not planning to use such system to develop complex software, I’d say you shouldn’t worry much about having a backup [swap](https://en.wikipedia.org/wiki/Paging) partition.

Generally speaking, old laptops I’ve tested, with just 2GB of RAM, has been doing great without any extra swap and a graphical Desktop like [GNOME](https://www.gnome.org/) without effort.

However, if you’d like to have some extra room to build more complex software, and you have more than 1GB of RAM, use 1/4 of your RAM amount and you’d be fine.

### OK but where are all the commands to install Linux ?

This is the best part of this post, the moment you’ve reached this part is the moment you are self trained to answer all basic questions **archibold.io installer** is going to ask you.

Download the [Arch Linux ISO](https://www.archlinux.org/download/) from the website, and use it for a VirtualBox boot, or [burn it to an USB stick following this Wiki Page](https://wiki.archlinux.org/index.php/USB_flash_installation_media), you’ll have everything you need to boot into a terminal and run the following code:

<pre name="4e61" id="4e61" class="graf graf--pre graf-after--p">$ bash <(curl -s archibold.io/base)</pre>

That’s basically it, the procedure will install the most basic Arch Linux you could think of on your machine or, like the video on top of this post shows, on a VirtualBox, in case you want to try it first.

### OK, cool … but I’d like to have a Desktop too!

In this case, oce you have booted into your account, you can check if you have an internet connection typing:

<pre name="cf81" id="cf81" class="graf graf--pre graf-after--p">ip addr</pre>

and if nothing appears under your wifi or ethernet name, follow these instructions:

<pre name="e032" id="e032" class="graf graf--pre graf-after--p"># if not logged as root already, type 'su'  
su  
# use root as default password  
# now, in case you have a wired connection  
ip addr # to see the name of the adapter  
dhcpcd enp0s3 # where enp0s3 is just a made up name, use your one</pre>

<pre name="1209" id="1209" class="graf graf--pre graf-after--pre"># if it was wi-fi card  
wifi-menu # and configure it</pre>

<pre name="47ba" id="47ba" class="graf graf--pre graf-after--pre">exit # to go back to your user</pre>

Once you have an internet connection, you can simply use another helper:

<pre name="9f6e" id="9f6e" class="graf graf--pre graf-after--p">bash <(curl -s archibold.io/install/gnome)</pre>

The latter will guide you to install the best Desktop environment out there.

#### Right .. but …

If you’re stuck at any point, please don’t hesitate to file a bug in the [Open Source archibold repository](https://github.com/WebReflection/archibold.io/tree/gh-pages), or simply ask me questions in here.

I’m pretty sure I can answer most of them so … bring it on! :-)








