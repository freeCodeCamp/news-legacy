---
author: CodeDraken
authorTwitter: https://twitter.com/CodeDraken
authorFacebook: none
title: "How to set up a VPN on Linux in 5 minutes for free"
subTitle: "In this short and overdue tutorial, we will set up a virtual private network (VPN) to help protect your online anonymity. I will not be c..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*ki9vH87FbtYJeQP29IM3fA.png
url: https://medium.freecodecamp.org/how-to-setup-a-vpn-for-free-or-paid-on-linux-62e1a93d04f3
id: how-to-setup-a-vpn-for-free-or-paid-on-linux-62e1a93d04f3
date: 2017-04-24T16:57:27.538Z
tags: [
  "Tech",
  "Linux",
  "Privacy",
  "Web Development",
  "Life Lessons"
]
---
# How to set up a VPN on Linux in 5 minutes for free



![](https://cdn-images-1.medium.com/max/1600/1*ki9vH87FbtYJeQP29IM3fA.png)



In this short and overdue tutorial, we will set up a virtual private network (VPN) to help protect your online anonymity. I will not be covering much on what a VPN is or what these settings are. We’re going to set one up. Let’s get straight to it.

You’ll need:

*   Computer with Linux OS. I’m using Ubuntu. The commands may be different if you’re not on a Debian based distro.
*   Admin/Sudo privileges
*   Basic computer skills
*   Basic knowledge of what a VPN is

Take note of everything you change and make backups in case something goes wrong. Also, for the record, I’m not affiliated with any of the sites linked here. Follow this tutorial at your own risk since you could mess up some settings.

### Part 1: Changing your DNS

Your domain name server (DNS) can give away some information about you, so we will want to change that. Start by using a tool such as [DNS leak test](https://www.dnsleaktest.com) to see what information is visible. Then work on hiding it.

1.  We’re going to use OpenDNS. Head to their website and grab their two name server IP addresses that can be found on their [Setup Guide Page](https://www.opendns.com/setupguide)

*   208.67.222.222
*   208.67.220.220

2\. Edit: /etc/dhcp/dhclient.conf

In your terminal type or copy/paste the command below. Nano is a text editor in the terminal. If the file is located somewhere else on your machine google or look for it.

<pre name="3419" id="3419" class="graf graf--pre graf-after--p">sudo nano /etc/dhcp/dhclient.conf</pre>

Look for the line that says “prepend domain-name-servers.” If it’s commented out with a # symbol at the beginning of the line, uncomment it by removing the #. Now change the line so it uses the IP addresses from OpenDNS, and add one more 8.8.8.8 like mine below. **Your internet may temporarily stop working at this point!**

<pre name="ac5a" id="ac5a" class="graf graf--pre graf-after--p">prepend domain-name-servers 208.67.222.222, 208.67.220.220, 8.8.8.8;</pre>

That line means it will use the first address, then the second if the first one fails, and finally 8.8.8.8 if the first two fail. This usually will not happen. We add 8.8.8.8 because by default it uses 3 addresses. If we don’t add the third one and the first two fail then your real address gets used. Now save and exit as shown below:

Press CTRL + O  
Press ENTER  
Press CTRL + X

This will save and close the file. Now we’ll need to restart network-manager with the next command.

<pre name="b295" id="b295" class="graf graf--pre graf-after--p">sudo service network-manager restart</pre>

You should now check to see if it works. Enter the command below, and see if the nameservers show up. Do a DNS leak test on the website linked above.

<pre name="7693" id="7693" class="graf graf--pre graf-after--p">cat /etc/resolv.conf</pre>



![](https://cdn-images-1.medium.com/max/1600/1*IffNMn47tPwZIjGCKpGkOA.png)



**Potential Issues**

> **I did the steps, but the cat command only shows nameserver 127.0.1.1** Thanks to [Dietmar](https://medium.com/@dlichota?source=post_header_lockup) and [AnalyzeTrades](https://medium.com/@analyzetrades?source=post_header_lockup) for this issue/solution _Try commenting/removing_ **_dns=dnsmasq_** _from_ **_/etc/NetworkManager/NetworkManager.conf_**

### Part 2: Setting up a VPN

**Fixing a DNS leak in web browser:**

1.  In **Firefox** type about:config in your address bar and press Enter.
2.  On the config page search for: media.peerconnection.enabled
3.  Change it to false by double clicking on it.
4.  Restart Firefox.

I don’t know how this is done in other browsers.

**Getting a Free VPN**

1.  Google for a free VPN, and make sure it’s good. I’ll be using [VPNBook](http://www.vpnbook.com/freevpn) for the rest of the steps.
2.  On VPNBook, you just download the config file for the VPN you want. Copy the username and password. The password changes periodically, so you will need to get it again later. It doesn’t matter where you are located when choosing your config file. You can be in the U.S., download the Euro one, and appear to be from Europe.



![](https://cdn-images-1.medium.com/max/1600/1*40N8ti2G0uNu1x9Ho9gP4w.png)



3\. After you extract the downloaded zip file, open your terminal again. Change to the directory where you extracted it, or right click and choose “Open in Terminal.” We have just a few more steps now.

4\. Install OpenVPN to use the config.

<pre name="7016" id="7016" class="graf graf--pre graf-after--p">sudo apt-get install openvpn</pre>

5\. Close your browser and anything connected to the internet. To use OpenVPN, enter the command below to run the config you want. Once it says “Initialization Complete,” you’re all set. You should keep the terminal open. If it fails, try a different VPN, or read the error and try to figure it out.

<pre name="6cfc" id="6cfc" class="graf graf--pre graf-after--p">sudo openvpn vpnbook-ca1-tcp443.ovpn</pre>

6\. Finally, test if it works by doing another DNS leak test.



![](https://cdn-images-1.medium.com/max/1600/1*ws3XoAuqgq2f4v-JONwYIg.png)





![](https://cdn-images-1.medium.com/max/1600/1*-xIlEzwa5qH_JA3tR5BgbA.png)



Congratulations if you made it this far and it works! Here’s a bonus simple bash script that you can run. You just need to change the password when needed.

**Bash Script 1** _credits to_[_Adnan Rahić_](https://medium.com/@adnanrahic?source=post_header_lockup)

<pre name="e8a4" id="e8a4" class="graf graf--pre graf-after--p">#!/bin/bash</pre>

<pre name="7aaf" id="7aaf" class="graf graf--pre graf-after--pre">cd /path/to/VPNBook.com-OpenVPN-Euro1  
username="vpnbook"  
password="he2qv5h"  
read -sp "Enter Sudo Password: " sudopassword</pre>

<pre name="71e2" id="71e2" class="graf graf--pre graf-after--pre">/usr/bin/expect << EOF</pre>

<pre name="bd46" id="bd46" class="graf graf--pre graf-after--pre">spawn sudo openvpn vpnbook-euro1-tcp443.ovpn  
expect "password for $USER: "  
send "$sudopassword\r"  
expect "Enter Auth Username: "  
send "$username\r"  
expect "Enter Auth Password: "  
send "$password\r"  
expect "$ "</pre>

<pre name="bb1e" id="bb1e" class="graf graf--pre graf-after--pre">EOF</pre>

> This will start the VPN without the need to enter the username and password manually. The VPN will also stay running in the background. Here’s a script for killing it if the need arises.

<pre name="138d" id="138d" class="graf graf--pre graf-after--blockquote">#!/bin/bash  
sudo pkill vpn</pre>

**Bash Script 2**

<pre name="1257" id="1257" class="graf graf--pre graf-after--p">#!/bin/bash  
echo "user: vpnbook"  
echo "pass: 5VHZEps"  
sudo openvpn vpnbook-ca1-tcp443.ovpn</pre>

Just put that into a new file, right click > properties > permissions, and allow executing file as a program. This example uses the Canada tcp 443 config.

### Further Reading

Here are a few great articles by Quincy Larson that talk about VPNs, internet privacy, and security.

[**How to set up a VPN in 10 minutes for free (and why you urgently need one)**  
_“A computer lets you make more mistakes faster than any other invention with the possible exceptions of handguns and…_medium.freecodecamp.com](https://medium.freecodecamp.com/how-to-set-up-a-vpn-in-5-minutes-for-free-and-why-you-urgently-need-one-d5cdba361907 "https://medium.freecodecamp.com/how-to-set-up-a-vpn-in-5-minutes-for-free-and-why-you-urgently-need-one-d5cdba361907")[](https://medium.freecodecamp.com/how-to-set-up-a-vpn-in-5-minutes-for-free-and-why-you-urgently-need-one-d5cdba361907)

[**How to encrypt your entire life in less than an hour**  
_“Only the paranoid survive.” — Andy Grove_medium.freecodecamp.org](https://medium.freecodecamp.org/tor-signal-and-beyond-a-law-abiding-citizens-guide-to-privacy-1a593f2104c3 "https://medium.freecodecamp.org/tor-signal-and-beyond-a-law-abiding-citizens-guide-to-privacy-1a593f2104c3")[](https://medium.freecodecamp.org/tor-signal-and-beyond-a-law-abiding-citizens-guide-to-privacy-1a593f2104c3)

If you’re interested in ethical hacking and security, there’s a [free 15 hour course](https://www.youtube.com/watch?v=vg9cNFPQFqM) on YouTube.








