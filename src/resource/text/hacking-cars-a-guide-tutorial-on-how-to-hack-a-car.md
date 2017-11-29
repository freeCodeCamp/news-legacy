---
author: Kenny Kuchera
authorTwitter: https://twitter.com/KennyKuchera
authorFacebook: none
title: "How to hack a car — a quick crash-course"
subTitle: "The goal of this article is to get you started hacking cars — fast, cheap, and easy. In order to do this, we’ll spoof the RPM gauge as an..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*LVuumyKElZ0zrQRQgjjSpw.jpeg
url: https://medium.freecodecamp.org/hacking-cars-a-guide-tutorial-on-how-to-hack-a-car-5eafcfbbb7ec
id: hacking-cars-a-guide-tutorial-on-how-to-hack-a-car-5eafcfbbb7ec
date: 2017-06-21T17:40:44.970Z
tags: [
  "Cars",
  "Technology",
  "Tech",
  "Self Improvement",
  "Programming"
]
---
# How to hack a car — a quick crash-course







![](https://cdn-images-1.medium.com/max/2000/1*LVuumyKElZ0zrQRQgjjSpw.jpeg)

Spoofed tachometer, the engine isn’t running.







The goal of this article is to get you started hacking cars — fast, cheap, and easy. In order to do this, we’ll spoof the RPM gauge as an example.

The following is by no means an exhaustive tutorial. It instead aims to provide just enough information to get you up and running. If you want to dig deeper you can checkout the must-reads at the end.

If you decide to carry out this tutorial in real life, you’ll need a Linux computer (or a virtual Linux machine), and a CAN-to-USB device (which we’ll look into later).

### A car is a network

A car consists of multiple computers to control the engine, transmission, windows, locks, lights, etc. These computers are called [electronic control units](https://en.wikipedia.org/wiki/Electronic_control_unit) (ECU) and communicate with each other over a network.

For example, when you press the button on your steering wheel to increase the volume of the radio, the steering wheel ECU sends a command to increase volume onto the network, the radio ECU then sees this command and acts accordingly.

There are multiple networks in a car, generally at least two:

*   One for critical data such as engine and powertrain messages
*   And one for less critical data such as radio and door locks

The critical network uses a fast and reliable protocol whereas the non-critical network uses a slower, less reliable but cheaper protocol. The number of networks as well as which ECUs are networked together depends on the car make, model and year. An ECU could also be connected to multiple networks.

### Connecting to a network

Some networks can be accessed via the OBD-II port. [OBD-II](https://en.wikipedia.org/wiki/On-board_diagnostics) is mandatory on all cars and light trucks built in the US after 1996 and Europe after 2004.

The connector is in arms reach of the driver’s seat. You might need to lift off some plastic cover but it is always accessible without tools.



![](https://cdn-images-1.medium.com/max/1600/1*2ixNrvqdpJf5cau-H_vkZA.jpeg)

OBD-II connector.



The OBD-II standard allows for [five](https://en.wikipedia.org/wiki/On-board_diagnostics#OBD-II_signal_protocols) signaling protocols. It’s up to the manufacturer to decide which one to use. [CAN](https://en.wikipedia.org/wiki/CAN_bus) is the most popular one and is what we will discuss. It is accessible via pins 6 and 14 of the OBD-II connector. If your car has a CAN bus, you will see metal leads on the pins as in the image above.

The CAN bus is a reliable, high speed bus that is used to send critical data. Unfortunately the data packets on the bus are not standardized so you will need to reverse them to know what they mean. The OBD-II standard also leaves room for vendor specific pins that can be used for vendor specific protocols. This makes it easier for the dealer to diagnose problems.

On my car (GM), I have a standard CAN bus on pins 6 and 14, and a vendor specific single wire CAN bus on pin 1\. The standard CAN bus is a reliable, high speed (500 kbps) protocol also referred to as high speed CAN (HS-CAN). It is used for critical data. The single wire CAN bus (SW-CAN) or GMLAN is slower (33.3 kbps) and less reliable but cheaper since it only uses one wire. This bus is used for non-critical data.

If you see a vendor specific pin and don’t know which protocol is being used, Google “<make> OBD pinout”. There is also low speed CAN (LS-CAN) and medium speed CAN (MS-CAN). MS-CAN is generally on pins 3 & 11, running at 125 kbps on Ford and Volvo cars.

### Tools

You will need both a device that’s capable of interpreting CAN data as well as software to analyze the data

#### Hardware

In order to receive and transmit CAN packets, you need a device that is capable of this. You will often come across ELM327 based devices. While these have their use, they are terrible for hacking. They are way too slow to monitor the CAN bus.

There are also high-end devices like Kvaser, Peak or EMS Wünsche. These will get the job done but are overkill and pretty expensive.

Some high-end devices also require you to purchase software along with it. The [USB2CAN](http://www.8devices.com/products/usb2can/) is a native CAN interface for Linux that offers great value for money.

You could also use [Cantact](http://linklayer.github.io/cantact/) or [CANUSB](http://www.can232.com/?page_id=16). However these aren’t native CAN devices in Linux and use an ASCII based protocol. This means that they are slightly more complicated to set up and have lesser performance. On the other hand, they are well supported across multiple operating systems.

I use [CANalyze](https://kkuchera.github.io/canalyze/) which I’ve designed for my needs. It is similar to USB2CAN in that it’s an affordable native CAN interface but it uses a newer micro controller, is open source and can be built using open source tools. The rest of this tutorial assumes you are using a native CAN interface.

#### Software

To communicate with the device you need to install the can-utils package on your Linux machine. You can do this via by typing the following into the Linux prompt:

<pre name="7289" id="7289" class="graf graf--pre graf-after--p">sudo apt-get install can-utils</pre>

Can-utils makes it extremely easy to send, receive and analyze CAN packets. These are the commands that we will use.

*   **cansniffer** display only the packets that are changing
*   **candump** dump all received packets
*   **cansend** send a packet

Linux has CAN support built in to the kernel via [SocketCAN](https://www.kernel.org/doc/Documentation/networking/can.txt). This makes it easy to write your own additional programs. You can interact with the CAN bus in the same way you would interact with any other network i.e. via sockets.

### CAN bus

Before you start reversing, you should have some understanding of how the CAN bus works. It consists of 2 wires and uses differential signaling. Since it’s a bus, multiple devices can be connected to these two wires. When a CAN frame is sent on the bus, it is received by all ECUs but is only processed if it’s useful for the ECU. If multiple CAN frames are sent at the same time, the one with the highest priority wins. A CAN frame has 3 parts that are relevant to us.

*   **arbitration identifier** The identifier of a message. An ECU uses it to decide to process or ignore the received frame. It also represents the message’s priority. A lower number has a higher priority. So for example, if you’d be an engineer designing the network, you would give the frame for the deployment of airbags a very high priority or a low arbitration ID. On the other hand you’d give a lower priority or higher arbitration ID to data meant for the door locks.
*   **data length code (DLC)** Indicates the length of the data field in bytes. A CAN frame can have at most 8 bytes of data.
*   **data field** Contains up to 8 bytes of data.

### Reversing the CAN bus

The general approach to reversing the CAN bus is to generate the behavior you want to mimic and find the message that causes that behavior. For example, lets say the lane keeping assist system (LKAS) on your car is crap and you’ve made your own.

In order for it to control the steering, you need to know what messages to send. The way to figure this out is to turn on the original LKAS, monitor the CAN bus and identify the packets responsible for turning the steering wheel. Once you have identified these packets, you can have your own LKAS send these packets onto the CAN bus to control the steering wheel.

In our case, we want to spoof the tachometer so we need to change the RPM by stepping on the gas with the car on and in neutral and then try to find the packet responsible for changing the RPM.

#### Setup

Plug the CAN device into the car’s OBD-II port and the computer’s USB port. Bring up the CAN interface by running the following in your Linux prompt:

<pre name="bd3c" id="bd3c" class="graf graf--pre graf-after--p">sudo ip link set can0 up type can bitrate 500000</pre>

which brings up the `can0` interface (always `can0` if you only have one device connected) at a bit rate of 500 kbps, which is standard.

#### Identify

When the car is off, the ECUs are usually sleeping so you need to turn on the car or put it in accessory mode. You can look at raw CAN data by running this in your Linux prompt:

<pre name="6793" id="6793" class="graf graf--pre graf-after--p">candump can0</pre>

This prints CAN data to the screen as soon as it is received. This however is very unorganized and it is very difficult to see what packets correspond to a certain event. You can press ctrl+c to stop the program. To make the data more readable we use cansniffer which groups the packets by arbitration ID and only shows the packets that are changing. In order to start it run the command in your Linux prompt:

<pre name="da5e" id="da5e" class="graf graf--pre graf-after--p">cansniffer -c can0</pre>

where `-c` colorizes the changing bytes and `can0` is the interface to sniff. It takes a few seconds to remove the constant packets.

You should see something similar to the image below, though the numbers will probably be completely different.



![](https://cdn-images-1.medium.com/max/1600/1*PoFwyHknnF8DvW-w5xsnjw.png)

Cansniffer with engine idle.



The first column (delta) shows the rate in seconds at which the packets with that arbitration ID are being received. The second column (ID) contains the arbitration ID. The remaining alphanumeric columns (data …) contain the data bytes. If the data has an ASCII representation, it can be seen to the right, otherwise it’s a dot.

When you step on the throttle with the engine running in order to increase RPM, there might be new CAN messages appearing on the screen and/or existing ones changing.

We need to find a CAN message where the changing bytes correlate to the change in RPM. We can probably expect that the value will increase/decrease as the RPM increases/decreases.

The first CAN frame in cansniffer that seems to vary with RPM is the frame with arbitration id `C9`. There are probably multiple potential packets that vary with RPM, this is just the first one.



![](https://cdn-images-1.medium.com/max/1600/1*KFDPPEAZuO13NbzRn2aiOA.png)

Detected packet correlating to RPM.



There are 4 bytes that are changing (colored red) in this message but not all of these necessarily indicate the RPM. Variations in the third byte `07` don’t seem to correlate to varying RPM. The last byte `1B` does.

However, as soon as we take our foot off the throttle, it goes to `00` . This would indicate that it represents the throttle position and not the RPM.

Finally there are the two bytes `21 C0` that do seem to correspond to a change in RPM. More so, it varies as a 16 byte integer i.e. when the second byte `C0` overflows, the first byte `21` gets increased by one. Also it seems that `21` corresponds to roughly 2000 RPM. This is good to note when you will replay the message.

#### Replay

Once you have a candidate, send it onto the CAN bus with the following command in your Linux prompt:

<pre name="2f91" id="2f91" class="graf graf--pre graf-after--p">cansend can0 0C9#8021C0071B101000</pre>

where the frame has the format `#{data}` and must be substituted with your own CAN message.

Your car can be running or in accessory mode for this. Be sure to use a packet that you obtained when the engine was non-idle or else you won’t see anything change when replaying it while your engine is idle.

If you just send the packet once, you will probably not see anything change on the instrument cluster. This is because the original message is still being sent continuously on the bus at 0.2 second intervals by the ECU so your message will just be ignored.

Recall that the rate is given in the first column of cansniffer. There are two ways to get around this aside from disconnecting the ECU that’s generating these messages. One option is to send the packets at a much higher frequency than the ones currently being sent. You can do this by running the following in your Linux prompt:

<pre name="0d2a" id="0d2a" class="graf graf--pre graf-after--p">while true; do cansend can0 0C9#8021C0071B101000; sleep 0.002; done</pre>

and substituting the CAN message with the one you’ve identified. Press ctrl+c to stop.

Another option is to monitor the bus, and every time you detect the packet that you want to spoof, send your own packet out immediately after. This can be done by running in your Linux prompt:

<pre name="94c9" id="94c9" class="graf graf--pre graf-after--p">candump can0 | grep " 0C9 " | while read line; do cansend can0 0C9#8021C0071B101000; done</pre>

where you need to substitute the CAN message and `0C9` with CAN message you identified and it’s arbitration id respectively. You can experiment with both approaches to see which one works better.

If the tachometer changes, good job, you found it! If not, identify the next message that correlates to RPM and replay it.

#### Fuzzing

Now that you have the CAN frame that sets the RPM on the instrument cluster, you can play with the data that you send to see what happens. We have noted that the the two bytes that correspond to RPM behave as a 16bit integer so in order to set the tachometer to 8k RPM, we run the following in your Linux prompt:

<pre name="ced4" id="ced4" class="graf graf--pre graf-after--p">while true; do cansend can0 0C9#00**8000**0000101000; sleep 0.002; done</pre>

and the result is…



![](https://cdn-images-1.medium.com/max/1600/1*LVuumyKElZ0zrQRQgjjSpw.jpeg)

Spoofed RPM with engine turned off.



That’s it! You can now try controlling the speedometer, radio, lights, door locks, etc. using the same approach.

### Possible issues

*   While the CAN bus is the most popular network, it’s not the only network. If you can’t find the message you are looking for on the CAN bus, try a different network. Especially non-critical messages such as radio, lights and door locks will probably be on a different network.
*   As mentioned the exact data transmitted over CAN depends on the car’s make, model and year. Some cars use a counter in the CAN message to ensure the same message isn’t processed multiple times. This is slightly more difficult but you should be able to do it with the provided information. Some cars also use a checksum to ensure integrity of the data. Calculating this checksum can be difficult. If you have a Toyota, check out [Adventures in Automotive Networks and Control Units](http://illmatics.com/car_hacking.pdf), p10, Checksum-Toyota. Everyone should really read the whole paper.
*   When replaying the identified packet on the bus, your CAN to USB device might go into the “bus off” state. This is part of the CAN standard and happens when the device experienced too many errors. This generally happens when there is a lot of traffic on the bus. In order to get around this you can play with delays and timing, maybe try replaying the message immediately after putting the car in accessory mode, try waiting a bit, try it with the car on, etc. If you’ve identified what ECU’s are connected to the bus, you can also pull their fuse to stop them from sending messages and lower the traffic on the bus.

### Must reads

*   [Car Hacker’s Handbook](http://opengarages.org/handbook/)
*   Charlie Miller’s and Chris Valasek’s [research](http://illmatics.com/carhacking.html), yes all of it
*   University of California San Diego’s and University of Washington’s [research](http://www.autosec.org/publications.html).

Be sure to also check out [Open Garages](https://opengarages.org) and their [videos](https://www.youtube.com/playlist?list=PLBqtCp9s_lnEOtf6I1DDMEANIzJJLXRhe).








