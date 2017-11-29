---
author: Romain Aubert
authorTwitter: https://twitter.com/romaub
authorFacebook: none
title: "Why I told my friends to stop using WhatsApp and Telegram"
subTitle: "Even with end-to-end encryption Big Brother is still in your phone: metadata"
coverSrc: https://cdn-images-1.medium.com/max/2000/1*ud92h35bv3aCtbnwGJ02kA.png
url: https://medium.freecodecamp.org/why-i-asked-my-friends-to-stop-using-whatsapp-and-telegram-e93346b3c1f0
id: why-i-asked-my-friends-to-stop-using-whatsapp-and-telegram-e93346b3c1f0
date: 2017-01-09T09:00:37.115Z
tags: [
  "Privacy",
  "Tech",
  "Security",
  "Social Media",
  "Life Lessons"
]
---
# Why I told my friends to stop using WhatsApp and Telegram

## Even with end-to-end encryption Big Brother is still in your phone: metadata

This morning I told my friends to stop using WhatsApp and Telegram and sent them an invitation to switch to the [Signal](https://whispersystems.org/#page-top) messaging app.

Here’s why.

### Encryption Protocols: The Signal Protocol VS Telegram’s MTProto

You may not realize it, but you’re probably already using the Signal Protocol — along with more than 1 billion people every day.

The Signal Protocol is used by WhatsApp, Facebook Messenger, Google Allo and Signal’s own messaging app.

But what is the Signal Protocol?

> The Signal Protocol is a non-federated [cryptographic protocol](https://en.wikipedia.org/wiki/Cryptographic_protocol "Cryptographic protocol") that provides [end-to-end encryption](https://ssd.eff.org/en/glossary/end-end-encryption) for instant messaging conversations. — Wikipedia

End-to-end encryption ensures that your message is turned into a secret message by its original sender, then only decoded by its final recipient.

That’s what WhatsApp started to use a few months ago when they displayed this message in your conversation:



![](https://cdn-images-1.medium.com/max/1600/1*IU7Pi7tN74OI8CbumVZaWg.png)

[Image credit](https://whispersystems.org/blog/whatsapp-complete/)



The Signal Protocol was built by [Open Whisper System](https://whispersystems.org/), a nonprofit group that was founded in 2013 by former Twitter head of security [Moxie Marlinspike](https://en.wikipedia.org/wiki/Moxie_Marlinspike "Moxie Marlinspike"). Back in 2011 the 140-character messaging platform acquired Marlinspike first secure messaging company Whisper System.

Open Whisper System focuses on the development of the Signal Protocol and also maintains a messaging application called Signal. The nonprofit is funded through a combination of [donations](https://freedom.press/crowdfunding/) and grants.

In October 2016, the Signal protocol was reviewed by an international team of security researchers and got [glowing reviews](https://www.cyberscoop.com/signal-security-audit-encryption-facebook-messenger-whatsapp/).

Reading the above, you might think you are fine since WhatsApp, Facebook Messenger, and Google Allo also use the Signal Protocol.

Well, you’re not.

Facebook Messenger and Google Allo don’t enable end-to-end encryption by default. Facebook Messenger users have to enable “Secret Conversations” and Google Allo users have to enable Incognito Mode.

Telegram, the 100-million-user app made by social network VK’s founder [Pavel Durov](https://en.wikipedia.org/wiki/Pavel_Durov), uses its own encryption protocol: MTProto. Telegram was the subject to a lot of [controversies over its encryption protocol](https://news.ycombinator.com/item?id=6913456). Then in 2015, a security researcher published a [research paper](http://cs.au.dk/~jakjak/master-thesis.pdf) detailing theoretical weaknesses* in MTProto and concluded that Telegram shouldn’t have tried to roll their own encryption.

So this leaves us with WhatsApp and Signal — the only two applications to use the Signal Protocol by default for all messages sent*.

You may be asking — why not stick with WhatsApp then?

The reason lies in WhatsApp’s collection of metadata.

### **Data collection and metadata**

Metadata and data collection have often been at the center of debates, with parties often claiming some statements along the line of:

> We can’t listen/read the content of your communication because we use end-to-end encryption, we can only collect metadata_._

Metadata has often been a blurry term. For your convenience, below is a clarified definition of metadata:





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/14f9b8a139baf02b9793002ddef87dbb?postId=e93346b3c1f0" data-media-id="14f9b8a139baf02b9793002ddef87dbb" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F648888480974508032%2F66_cUYfj_bigger.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





If you’re still unclear about what metadata is, read the [post](https://www.eff.org/deeplinks/2013/06/why-metadata-matters) from EFF by [Kurt Opsahl](https://medium.com/@kurtopsahl). He gives examples of what companies or governments know when they collect metadata:

> They know you rang a phone sex service at 2:24 am and spoke for 18 minutes. But they don’t know what you talked about.

> They know you called the suicide prevention hotline from the Golden Gate Bridge. But the topic of the call remains a secret.

> They know you spoke with an HIV testing service, then your doctor, then your health insurance company in the same hour. But they don’t know what was discussed.

Now that you know what metadata is, let me reiterate: **using end-to-end encryption does not prevent messaging services from collecting metadata.**

Let’s see what these guys are collecting:

### **WhatsApp**

WhatsApp’s FAQ [states](https://www.whatsapp.com/faq/en/general/20971813) that its app has access to all the phone numbers in your address book, and that it [collects](https://www.whatsapp.com/legal/#privacy-policy-information-we-collect) a myriad of information about you.

What’s interesting is that WhatsApp doesn’t store your messages on its servers. Instead, your messages are stored on your phone — then ultimately on the servers where you back up your phone. For example, if you use an iPhone, all your WhatsApp messages are stored in iCloud, if you use it as a backup.

As for the information WhatsApp collects about when, where, and with whom you communicate, it’s a lot more vague. Here’s what they say:

> **Usage and Log Information.** We collect service-related, diagnostic, and performance information. This includes information about your activity (such as how you use our Services, how you interact with others using our Services, and the like), log files, and diagnostic, crash, website, and performance logs and reports.

WhatsApp also collects device-specific information when you install, access, or use their service — such as the model of your phone, its operating system, and information from your browser, IP address, and mobile network — including your phone number.

And if they can’t collect that information through your phone, they’ll obtain it when people message you, since WhatsApp also has access to your friends’ activity data.

Besides the unencrypted backups, other concerns were [outlined](https://www.eff.org/deeplinks/2016/10/where-whatsapp-went-wrong-effs-four-biggest-security-concerns) by the Electronic Frontier Foundation over key change notification, WhatsApp’s web app, and its sharing of data with Facebook, who acquired WhatsApp in 2014.

Speaking of Facebook…

### **Facebook Messenger**

MIT Technology Review [wrote](https://www.technologyreview.com/s/428150/what-facebook-knows/):

> Facebook is collecting the most extensive data set ever assembled on human social behavior.

I don’t need to break down what data Facebook collects. Facebook is your friend, so they made it very simple for you to understand just how close of a friend they are:







![](https://cdn-images-1.medium.com/max/2000/1*PaCqj-ah-7G0GyhHSimmxw.png)

[Wording from Facebook’s official privacy explanation](https://www.facebook.com/privacy/explanation)







### **Google Allo**

Google Allo has been [widely criticized](http://www.independent.co.uk/life-style/gadgets-and-tech/news/google-allo-should-be-deleted-and-never-used-says-edward-snowden-a7320861.html) by security experts.

Not only can Google actually read every message you say, they will store all conversations.

It is that simple.

Here’s Edward Snowden’s tongue-in-cheek advertisement for Allo:





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/c17ff43d7e8a3a93c56ba8d661f440f2?postId=e93346b3c1f0" data-media-id="c17ff43d7e8a3a93c56ba8d661f440f2" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F648888480974508032%2F66_cUYfj_bigger.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





### **Telegram**

Telegramis a tricky one since as I mentioned its encryption protocol shows some flaws from an theoretical perspective.* But let’s set that aside and look at what they collect from you.

Messages, photos, videos, and documents are encrypted and [stored](https://telegram.org/privacy#2-storing-data) on Telegram’s servers (except for the _Secret Chat_ messages, which aren’t stored on Telegram’s servers). Like WhatsApp and Facebook, Telegram accesses and stores your contact list on its server. This is how they’re are able to send you a notification when someone new from you contact list joins Telegram. Nice of them, right?

### **Signal**

The [only data Signal retains](https://whispersystems.org/signal/privacy/) is the phone number you register with and when you last logged into their server.

That is it.

It doesn’t even record the hour, minute, or second — only the day.

If you’re feeling mischievous, Signal even has [disappearing messages](https://signal.org/blog/disappearing-messages/).

And Signal is free. Really free. Meaning that they aren’t trying to turn your eyeballs into a product for advertisers like Facebook or Google want to do with their messaging apps. You can donate to Signal [here](https://freedom.press/crowdfunding/).

By the way, Signal code is free and open-source, available on [GitHub](https://github.com/whispersystems) for you to check.

[**WhatsApp chose convenience over privacy and security, but here’s how you can fix this**  
_A few weeks ago, The Guardian reported on a so-called WhatsApp “backdoor.”_medium.freecodecamp.com](https://medium.freecodecamp.com/dont-be-fooled-by-the-guardian-s-misleading-reporting-whatsapp-s-encryption-works-just-fine-if-you-d2a9a3ef6731 "https://medium.freecodecamp.com/dont-be-fooled-by-the-guardian-s-misleading-reporting-whatsapp-s-encryption-works-just-fine-if-you-d2a9a3ef6731")[](https://medium.freecodecamp.com/dont-be-fooled-by-the-guardian-s-misleading-reporting-whatsapp-s-encryption-works-just-fine-if-you-d2a9a3ef6731)











* * *







### Why should you care about your privacy?

You might be tempted to say something like:

> _Who cares? I have nothing to hide._

If you don’t think privacy is all that important:

*   Watch [Glenn Greenwald](https://medium.com/@ggreenwald)’s [TED talk](http://www.ted.com/talks/glenn_greenwald_why_privacy_matters) on why privacy matters_._
*   Read [Quincy Larson](https://medium.com/@quincylarson)’s article about [how to encrypt your life in less than an hour](https://medium.freecodecamp.com/tor-signal-and-beyond-a-law-abiding-citizens-guide-to-privacy-1a593f2104c3).
*   And [here’s more](https://medium.com/learnliberty/encryption-is-a-human-rights-issue-your-privacy-and-free-speech-depend-on-it-amul-kalia-71c85089ab6b#.itp1wxr4k) on why encryption is a human right by [Electronic Frontier Foundation](https://medium.com/u/2fa7aa79cd7a)’s Amul Kalia.





<iframe data-width="800" data-height="400" width="700" height="350" src="https://medium.freecodecamp.org/media/0e6c9be8c2ae5a9ac438571954b0d59c?postId=e93346b3c1f0" data-media-id="0e6c9be8c2ae5a9ac438571954b0d59c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fupscri.be%2Fmedia%2Fform.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>















* * *







Further readings:

[**WhatsApp chose convenience over full security, but here’s how you can improve this**  
_A few weeks ago, The Guardian reported on a so-called WhatsApp “backdoor.”_medium.freecodecamp.com](https://medium.freecodecamp.com/dont-be-fooled-by-the-guardian-s-misleading-reporting-whatsapp-s-encryption-works-just-fine-if-you-d2a9a3ef6731 "https://medium.freecodecamp.com/dont-be-fooled-by-the-guardian-s-misleading-reporting-whatsapp-s-encryption-works-just-fine-if-you-d2a9a3ef6731")[](https://medium.freecodecamp.com/dont-be-fooled-by-the-guardian-s-misleading-reporting-whatsapp-s-encryption-works-just-fine-if-you-d2a9a3ef6731)











* * *







**Edit 24/01/2017:** *previously we stated that “[Telegram’s] encryption protocol [was] not secure”. [Telegram Messenger](https://medium.com/@telegram) brought some clarification by publishing a [blog](http://telegra.ph/mtproto-security-01-17) post commenting on the finding of J. Jakobsen.











* * *







**If this blog post was useful to you, please click that little green heart below. That would be great. Thank you.**

_Article also available in_ [_French_](http://Lecture%20de%20métro%20:%20%22Running%20a%20Script%20to%20Register%20Send%20Addresses?%2010%20Years%20in%20Jail!%20No%20legitimate%20email%20marketer%20would%20ever%20stoop%20to%20using%20harvesting%20software%20or%20automated%20dictionary%20attacks%20to%20send%20email%20-%20and%20that’s%20a%20very%20wise%20policy%20given%20that%20Hong%20Kong%20reserves%20the%20right%20to%20fine%20violators%20up%20to%20one%20million%20HK%20dollars%20%28US%20$130,000%29%20and%20imprison%20them%20for%20up%20to%20ten%20years.%20Some%20reputable%20email%20marketers%20may%20believe%20that%20running%20a%20script%20to%20register%20more%20than%20four%20email%20addresses%20to%20send%20commercial%20email%20from%20is%20a%20completely%20innocuous%20practice,%20but%20Hong%20Kong%20considers%20that%20just%20as%20bad%20as%20other%20“automated%20attacks”%20and%20applies%20the%20same%20severe%20penalties.”%20%20[7:30]%20%20%20http://www.benchmarkemail.com/blogs/detail/complying-with-hong-kong-email-marketing-legislation)_,_ [_Italian_](https://medium.com/@Paolus/perch%C3%A9-ho-detto-ai-miei-amici-di-non-usare-pi%C3%B9-whatsapp-e-telegram-f1ce6c292570#.82cef5fk1)_,_ [_German_](https://medium.com/@short_cut/warum-ich-meinen-freunden-gesagt-habe-sie-sollen-whatsapp-und-telegram-nicht-mehr-benutzen-8dae95c621f7#.okawp2fyy)_,_ [_Spanish_](https://medium.com/@mesmerismo/por-qu%C3%A9-he-pedido-a-mis-amigos-que-dejen-de-usar-whatsapp-y-telegram-bfc992bc0fd#.a3x96fr7w) _and_ [_Turkish_](https://medium.com/@dvt.tnhn.krlbs/neden-arkada%C5%9Flar%C4%B1ma-whatsapp-ve-telegram-%C4%B1-kullanmay%C4%B1-b%C4%B1rakmalar%C4%B1-gerekti%C4%9Fini-s%C3%B6yledim-c8c2debf91ac#.zciithk87)_._

_This article was also_ [_published_](http://datanews.knack.be/ict/nieuws/waarom-ik-mijn-vrienden-vroeg-om-niet-langer-whatsapp-te-gebruiken/article-opinion-807403.html) _in Dutch in the Belgium newspaper Knack._








