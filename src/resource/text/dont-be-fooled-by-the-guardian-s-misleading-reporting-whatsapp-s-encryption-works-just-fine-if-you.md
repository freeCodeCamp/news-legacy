---
author: Romain Aubert
authorTwitter: https://twitter.com/romaub
authorFacebook: none
title: "WhatsApp chose convenience over privacy, here’s how you can fix this"
subTitle: "A few weeks ago, The Guardian reported on a so-called WhatsApp “backdoor.”..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*qz8dtxtJlyNpNiyNhzIJ4Q.jpeg
url: https://medium.freecodecamp.org/dont-be-fooled-by-the-guardian-s-misleading-reporting-whatsapp-s-encryption-works-just-fine-if-you-d2a9a3ef6731
id: dont-be-fooled-by-the-guardian-s-misleading-reporting-whatsapp-s-encryption-works-just-fine-if-you-d2a9a3ef6731
date: 2017-02-18T16:20:53.774Z
tags: [
  "Privacy",
  "Security",
  "Tech",
  "Media",
  "Technology"
]
---
# WhatsApp chose convenience over privacy, here’s how you can fix this

A few weeks ago, The Guardian [reported](https://www.theguardian.com/technology/2017/jan/13/whatsapp-backdoor-allows-snooping-on-encrypted-messages) on a so-called WhatsApp “backdoor.”

This brought a flurry of high profile security experts into the conversation, starting with Moxie Marlinspike, who helped create the encryption protocol that WhatsApp uses.

The Guardian reacted by publishing an [opinion piece](https://www.theguardian.com/technology/2017/jan/16/whatsapp-vulnerability-facebook) by Tobias Boelter, the researcher who discovered the flaw.

Some other security researchers have since written [some thorough and insightful points](http://technosociology.org/?page_id=1687) about The Guardian’s article.

Basically, the WhatsApp “backdoor” vulnerability brought up by The Guardian is not a backdoor per se. And the flaw had been [known](https://tobi.rocks/2016/04/whats-app-retransmission-vulnerability/) since April 2016.

### What exactly is a backdoor?

Before we dive into the argument, it might be worth spending a bit of time explaining what exactly a backdoor is. This word has been used a lot over the past few years.





<iframe data-width="640" data-height="480" width="640" height="480" src="https://medium.freecodecamp.org/media/8e31a39921273f3a63b8f157630b29a2?postId=d2a9a3ef6731" data-media-id="8e31a39921273f3a63b8f157630b29a2" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FcuYQ4qUEfEI%2Fhqdefault.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



A scene about back doors from the 1983 movie War Games



Below is a concise [explanation](https://www.eff.org/deeplinks/2016/03/thinking-about-term-backdoor) of backdoors by the Electronic Frontier Foundation (EFF):

> It was originally used — along with “trapdoor” — throughout the 1980s to refer to secret accounts and/or passwords created to allow someone unknown access into a system.

Their broader interpretation of the term today:

> _Any mechanism_ someone designs into a system that allows for access via bypassing normal security measures.

As the EFF mentions in their article, **a backdoor does not have to be secret:**

> The government’s ability to bypass the Clipper Chip’s security wasn’t a secret back in the 1990s. It was part of the system’s basic design.

If you feel like you’d want a deeper definition of the term, you can dive into the 7,000-word long [essay](https://www.zdziarski.com/blog/?p=6077) of security expert Jonathan Zdziarski.

### If this isn’t a backdoor then, then what is it?

The usage of the word _backdoor_ was described as “supremely inaccurate” by Open Whisper System’s (OWS) founder Moxie Marlinspike, who explained [why](https://whispersystems.org/blog/there-is-no-whatsapp-backdoor/) WhatsApp has no backdoor, and how the implementation of the end-to-end encryption protocol in fact detects [man-in-the-middle attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack):

> _The fact that WhatsApp handles key changes is not a “backdoor,” it is how cryptography works. Any attempt to intercept messages in transmit by the server is detectable by the sender, just like with Signal, PGP, or any other end-to-end encrypted communication system._

By the way, an “attempt to intercept messages” is only detectable if you activate “show security notification” (In WhatsApp, go to: Settings > Account > Security > show security notifications: on).

Then Moxie explains why this is solely a design decision to improve the usability of WhatsApp:

> _The only question it might be reasonable to ask is whether these safety number change notifications should be “blocking” or “non-blocking.” In other words, when a contact’s key changes [this happens when a user reinstalls the app or changes phones], should WhatsApp require the user to manually verify the new key before continuing, or should WhatsApp display an advisory notification and continue without blocking the user._

> _Given the size and scope of WhatsApp’s user base, we feel that their choice to display a non-blocking notification is appropriate. It provides transparent and cryptographically guaranteed confidence in the privacy of a user’s communication, along with a simple user experience. The choice to make these notifications “blocking” would in some ways make things worse. That would leak information to the server about who has enabled safety number change notifications and who hasn’t, effectively telling the server who it could MITM transparently and who it couldn’t; something that WhatsApp considered very carefully._

Note that OWS is the company that built the end-to-end encryption protocol that WhatsApp uses.

[**Why I told my friends to stop using WhatsApp and Telegram**  
_Even with end-to-end encryption Big Brother is still in your phone: metadata_medium.freecodecamp.com](https://medium.freecodecamp.com/why-i-asked-my-friends-to-stop-using-whatsapp-and-telegram-e93346b3c1f0 "https://medium.freecodecamp.com/why-i-asked-my-friends-to-stop-using-whatsapp-and-telegram-e93346b3c1f0")[](https://medium.freecodecamp.com/why-i-asked-my-friends-to-stop-using-whatsapp-and-telegram-e93346b3c1f0)











* * *







#### Not everyone agrees

Most experts agree that there is no abackdoor, but Tobias Boelter argues there is actually a flaw — more precisely a vulnerability to a [man-in-the-middle attack](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) that can be performed because of a retransmission vulnerability. He published a [blog post](https://tobi.rocks/2016/04/whats-app-retransmission-vulnerability/) outlining the flaw.

But the flaw that The Guardian misleadingly reported in January 2017 as a backdoor was actually known of since April 2016.

Back in April 2016, Facebook even acknowledged the flaw and replied to white-hat report from Boelter:

> “[…] We were previously aware of the issue and might change it in the future, but for now it’s not something we’re actively working on changing.[…]”

### The Guardian’s misleading report

As [Alex Muffett](https://medium.com/@photo.sheriff) [outlines](https://medium.com/@alecmuffett/despondency-is-how-surveillance-will-win-c76f780be9fa#.f7mtkbfsy) in his article, this core argument of the Guardian’s article is just that the surveillance will ultimately win. In the process, it got its main facts wrong.

> “Nobody has benefited from this article, except the author, the newspaper, and the state surveillance industry as a whole.” — Alex Muffet

The Guardian’s report is questionable. As a mea culpa, they invited Tobias Boelter, the security researcher who discovered the flaw, to write a column. Boelter set out to describe what the vulnerability is and why it matters:

> _A user’s public key can be used to encrypt messages which can then only be made readable again with the associated secret key. A difficult problem in secure communication is getting your friend’s public keys. Apps such as_ [_WhatsApp_](https://www.theguardian.com/technology/whatsapp) _and Signal make the process of getting those keys easy for you by storing them on their central servers and allowing your app to download the public keys of your contacts automatically._

> _The problem here is that the WhatsApp server could potentially lie about the public keys. Instead of giving you your friend’s key, it could give you a public key belonging to a third party, such as the government._

And he also explained how WhatsApp failed to sufficiently inform users of their option to be notified when keys change, and to verify their keys with friends:

> _You should be notified when sent a friend’s new public key, and given the option to validate again that this new key indeed belongs to your friend and not some other party. This behavior is called “blocking”. The problem with WhatsApp is that you are not given this option._

> _Instead, your WhatsApp will automatically accept this new key and resend all “in transit” messages (those marked with only one tick), encrypted with the new, potentially malicious key. This behavior is called “non-blocking”._

Again, you can enable the “show security notifications” in WhatsApp’s setting — [or switch to Signal](https://medium.freecodecamp.com/why-i-asked-my-friends-to-stop-using-whatsapp-and-telegram-e93346b3c1f0#.5b0esudtp), OWS’s own secure messaging tool.

### Convenience over privacy

Whoever is right — this whole debate is happening because many users favor [network effects](https://en.wikipedia.org/wiki/Network_effect), convenience, and usability over privacy.

This argument was also corroborated by [Frederic Jacobs](https://twitter.com/FredericJacobs), a former Signal staffer:





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/d88f3200afd9e97ad53b91e65f4f6109?postId=d2a9a3ef6731" data-media-id="d88f3200afd9e97ad53b91e65f4f6109" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F804985907837337600%2Fz_esNSb6_bigger.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





But again, Tobias Boelter refutes the User Experience VS security argument:

> _Signal chooses to handle key changes with blocking and so does not have this vulnerability, but WhatsApp chooses to go with non-blocking and therefore has it. So how are they different? How more difficult is Signal to use?_

I’ll leave to you to decide.

The questions we are left with are:

*   Will privacy and security prevail over convenience and UX?
*   What will prompt that shift? (or what is already prompting that shift)?

### And then there’s metadata…

While it’s great to have security experts raising questions over the security of ubiquitous messaging applications, I think we are still missing the bigger picture. WhatsApp collects extensive metadata about its users’ communication.

As I mentioned in my [previous post](https://medium.freecodecamp.com/why-i-asked-my-friends-to-stop-using-whatsapp-and-telegram-e93346b3c1f0#.nj3rdfiu9), end-to-end encryption can be of little help if we want to know what messages are about. Using end-to-end encryption does not prevent messaging services from collecting metadata.











* * *







**If you made it to the end of this article, please ‘clap’. That would be great. Thank you.**





<iframe data-width="800" data-height="400" width="700" height="350" src="https://medium.freecodecamp.org/media/0e6c9be8c2ae5a9ac438571954b0d59c?postId=d2a9a3ef6731" data-media-id="0e6c9be8c2ae5a9ac438571954b0d59c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fupscri.be%2Fmedia%2Fform.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>












