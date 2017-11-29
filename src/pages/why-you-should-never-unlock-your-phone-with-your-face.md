---
author: Quincy Larson
authorTwitter: https://twitter.com/ossia
authorFacebook: https://facebook.com/10100956570023241
title: "Why you shouldn’t unlock your phone with your face"
subTitle: "UPDATE November 12, 2017: Face ID has been defeated!..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*Bq0aEuzkRhJU9FdlGCkEeQ.jpeg
url: https://medium.freecodecamp.org/why-you-should-never-unlock-your-phone-with-your-face-79c07772a28
id: why-you-should-never-unlock-your-phone-with-your-face-79c07772a28
date: 2017-09-12T19:26:57.376Z
tags: [
  "Apple",
  "Security",
  "Tech",
  "Technology",
  "Life Lessons"
]
---
# Why you shouldn’t unlock your phone with your face







![](https://cdn-images-1.medium.com/max/2000/1*Bq0aEuzkRhJU9FdlGCkEeQ.jpeg)

Photo credit: Engaget







**UPDATE November 12, 2017: Face ID has been defeated!**

9 days after the iPhone X’s first release, Vietnamese security researches have already found a reliable way to trick Face ID into unlocking an iPhone. They use a silicone mask stretched over a 3D-printed frame, with printed pictures of eyes and a mouth glued to it.

They say it only cost them about $150 to make the mask.

Here’s a demonstration of the exploit (90 second video):





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/cc2b47d1d6a8724f650b033f17927aef?postId=79c07772a28" data-media-id="cc2b47d1d6a8724f650b033f17927aef" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fi4YQRLQVixM%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>















* * *







Today Apple announced its new Face ID technology. It’s a new way to unlock your phone through facial recognition. All you have to do is look at your phone and it will recognize you and unlock itself.

At time of writing, nobody outside of Apple has tested the security of Face ID. So this article is about the security of facial recognition, and other forms of biometric identification in general.

Historically, biometric identification has been insecure.

Cameras can be tricked.

Voices can be recorded.

Fingerprints can be lifted.

And in many countries — including the US — [the police can legally force you to use your fingerprint to unlock your phone](https://www.theatlantic.com/technology/archive/2016/05/iphone-fingerprint-search-warrant/480861/). So they can most certainly point your phone at your face and unlock it against your will.

If you value the security of your data — your email, social media accounts, family photos, the history of every place you’ve ever been with your phone — then I recommend against using biometric identification.

Instead, use a passcode to unlock your phone.

### It hurts a lot more to change your face than to change your passcode

Here’s a great scene from the 2007 movie The Bourne Ultimatum where Matt Damon’s character defeats 2-factor biometric identification on a safe:









<iframe data-width="854" data-height="480" width="980" height="551" src="https://medium.freecodecamp.org/media/b571b864c8487c3521e6a1491b33df54?postId=79c07772a28" data-media-id="b571b864c8487c3521e6a1491b33df54" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FJRLNdcmRcFY%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>









Even though this is a Hollywood movie from 10 years ago, it illustrates some of the problems inherent in biometric identification.

How many pictures of your face are out there? Could those images be stitched together and 3D-modeled to the degree of accuracy necessary to defeat Face ID, with its infrared lights and dot projection system?

Here’s the full Face ID demo, if you’re curious how it works:









<iframe data-width="854" data-height="480" width="980" height="551" src="https://medium.freecodecamp.org/media/72da859072e3b50511fc84a8c86f9108?postId=79c07772a28" data-media-id="72da859072e3b50511fc84a8c86f9108" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FnjhlO2HSNz0%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>









It’s just a matter of time before a reliable technique emerges to defeat Apple’s Face ID and other systems like it, like Samsung’s new facial unlocking system.

What makes me so confident about this? Let’s talk about iris scanners.

The human iris has millions of cells in it, and every human’s irises are unique. This seems like pretty good candidate for biometric identification, right?







![](https://cdn-images-1.medium.com/max/2000/1*TBK_ANMcEQVXFUffIVo73Q.jpeg)







Well, here are some security researchers who broke through the Samsung Galaxy 8 phone’s iris scanner lock back in May. They ended up using nothing more than a printer and a contact lens.









<iframe data-width="854" data-height="480" width="980" height="551" src="https://medium.freecodecamp.org/media/06215c0a8bf91636b8ab84b15fe4b912?postId=79c07772a28" data-media-id="06215c0a8bf91636b8ab84b15fe4b912" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F4VrqufsHpS4%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>









Let’s take a step back and consider the ultimate biometric identifier of you as a person: your DNA.

Your DNA is just a long string of data. The human genome is 3 billion base pairs. You could store a person’s entire genome in less than a gigabyte — the same amount of data as a single episode of Game of Thrones.

And sequencing someone’s genome is cheap. The cost is falling much faster than the cost of computation in general.







![](https://cdn-images-1.medium.com/max/2000/1*pyWbPNKHOwLAa9grhV2qxw.jpeg)







If the sequence of your DNA got leaked out into the open, it would be pretty hard to change it.

And changing your voice, fingerprints — or the structure of your face — would be pretty hard, too.

So don’t rely on biometric identification. There’s a much better answer. And you’re not going to like it. Because it’s less convenient. But it works.

### Numeric Passcodes: hard to guess, easy to change, and legally protected

With iPhones, you only get 10 attempts to unlock a phone with a passcode.

Assuming your passcode is a 4-digit numeric PIN, there are 10⁴ possible combinations. That means someone trying to unlock your phone has a one-in-a-thousand chance of successfully unlocking your phone.

This may not sound as secure as the “one in a million” figure Apple toted as the likelihood that someone could look similar enough to you to unlock your iPhone. But with your numeric passcode, an attacker has nothing to go on. They have no idea what that number could be. If it’s truly random, this would make it more secure than Face ID.

And since your passcode will be the fallback for Face ID if it fails, you should go ahead and make it a good one, whether you use Face ID or not.

Here are the 20 most common 4-digit numeric passcodes. Be sure to avoid using these so you can maximize your security.

<pre name="b483" id="b483" class="graf graf--pre graf-after--p">+------+------+-----------+  
| Rank | Code | Frequency |  
+------+------+-----------+  
| #1   | 1234 | 10.713%   |  
| #2   | 1111 | 6.016%    |  
| #3   | 0000 | 1.881%    |  
| #4   | 1212 | 1.197%    |  
| #5   | 7777 | 0.745%    |  
| #6   | 1004 | 0.616%    |  
| #7   | 2000 | 0.613%    |  
| #8   | 4444 | 0.526%    |  
| #9   | 2222 | 0.516%    |  
| #10  | 6969 | 0.512%    |  
| #11  | 9999 | 0.451%    |  
| #12  | 3333 | 0.419%    |  
| #13  | 5555 | 0.395%    |  
| #14  | 6666 | 0.391%    |  
| #15  | 1122 | 0.366%    |  
| #16  | 1313 | 0.304%    |  
| #17  | 8888 | 0.303%    |  
| #18  | 4321 | 0.293%    |  
| #19  | 2001 | 0.290%    |  
| #20  | 1010 | 0.285%    |  
+------+------+-----------+</pre>

Data source: [The Datagenetics Blog](http://datagenetics.com/blog/september32012/index.html)

And if you really want a random number, paste this into your browser’s JavaScript console (to access it click View > Developer > JavaScript Console):

<pre name="7a59" id="7a59" class="graf graf--pre graf-after--p">console.log((Math.floor(Math.random() * 10000) + 10000).toString().substring(1));</pre>

Most phones — including iPhone — support multi-digit passcodes. Each extra digit gives you an order of magnitude of extra security. But considering that you will be entering this many times a day, 4 digits may be the more sustainable choice here.

And to be clear, a court in the US cannot force you to give up your passcode. That passcode exists in your head, and yours alone. It is your property, and won’t be used to incriminate you or strong-arm access to your data unless you voluntarily give it up.

The security and peace of mind you get from a passcode is well worth the 2 seconds it takes to enter it.

### The way forward for biometric identification

Instead of the current all-or-nothing approach — you’re either authenticated or you aren’t — device manufacturers should take a tiered approach, requiring different levels of authentication to access different apps and data.

This is similar to traditional role-based access control in software. And phones already do this with lock screens.

For example, by default on iOS, you can read incoming text messages without unlocking your phone. And whenever you try to buy something in the App Store, iOS by default requires you to enter an even longer password to confirm a purchase.

Something like Face ID could be used to unlock your “read” permission to use less sensitive apps where you consume information, such as newspaper apps.

But then when you want “write” permission so you can send a text or post a tweet, your phone could require you to enter a passcode.

This would largely address the “I need to unlock my phone 80 times a day” problem, which is probably the main reason [89% of iPhone users use TouchID](http://appleinsider.com/articles/16/04/19/average-iphone-user-unlocks-device-80-times-per-day-89-use-touch-id-apple-says).

This is a software change that could be rolled out to all iPhones — including ones that people are already using. And doing so would make everyone much more secure.

There is a sweet spot on the security-convenience continuum. But unlocking your entire phone — and all the data, social media accounts, and bank accounts that comes with it — with just your face? We still have a ways to go before we reach that sweet spot.

For now, my advice is to continue using passcodes, and to make sure they’re strong passcodes.








