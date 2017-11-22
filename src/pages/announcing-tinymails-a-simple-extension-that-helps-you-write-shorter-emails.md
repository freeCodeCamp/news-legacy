---
author: Florent Crivello
authorTwitter: https://twitter.com/Altimor
authorFacebook: https://facebook.com/10206549674758970
title: "How I built TinyMails: a chrome extension that helps you write shorter emails"
subTitle: "I’ve been complaining about the death of brevity for a while now. Personal correspondence — especially emails — are as verbose as ever...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*th13skTPFs53EtCuupOYQA.jpeg
url: https://medium.freecodecamp.org/announcing-tinymails-a-simple-extension-that-helps-you-write-shorter-emails-ff89329a4f21
id: announcing-tinymails-a-simple-extension-that-helps-you-write-shorter-emails-ff89329a4f21
date: 2017-03-07T14:49:13.066Z
tags: [
  "Productivity",
  "Self Improvement",
  "Chrome",
  "Tech",
  "Startup"
]
---
# How I built TinyMails: a chrome extension that helps you write shorter emails







![](https://cdn-images-1.medium.com/max/2000/1*th13skTPFs53EtCuupOYQA.jpeg)







I’ve been complaining about the death of brevity for a while now. Personal correspondence — especially emails — are as verbose as ever.

Some of this is because it’s now much easier to generate a lot of content (computers are faster than typewriters, which are faster than longhand).

When you compose an email, your email clients greet you with a Nice Giant Text Field that seems to be saying: “Now is the time to write that novel you’ve been dreaming of!” Compare this to the ridiculously tiny text field of IM apps (in blue):







![](https://cdn-images-1.medium.com/max/2000/1*6oavJb8rUH-1YZeTFRoJlQ.png)







Granted, emails are richer in content than instant messages, but I also think that people would be nudged into writing much shorter emails if that box were smaller (and auto expanded as you type, like in Facebook Messenger).

So, in the spirit of “don’t complain about X, build Y instead,” I built [TinyMails](https://www.producthunt.com/posts/tinymails), my first Chrome extension. As you’re composing an email, TinyMails shows you how many words you’ve written, along with an estimate of how long it’ll take to read it. It also gradually makes the estimate’s text more and more red as the email gets longer and longer.



![](https://cdn-images-1.medium.com/max/1600/1*sXUvL2cfiDPEpC-IIu89vA.gif)



You can download it here on the [Chrome WebStore](https://chrome.google.com/webstore/detail/tinymails/flpmjncnhickgfkjgmeloenfjgpgcpni), upvote it [on ProductHunt](https://www.producthunt.com/posts/tinymails), and passive-aggressively send it to everyone you know who tends to be verbose in their emails (I for one added a link to my signature).

### The Technical Stuff

For the curious ones, I put [the source of the extension here on GitHub](https://github.com/Altimor/TinyMails). I used the amazing [InboxSDK](https://www.inboxsdk.com), which gives a high level API to deal with Gmail / Inbox, allowing me to focus on the actual logic of my extension, and to build it in 2 or 3 hours.

As I was coding and profiling it, I noticed it was a lot more computation-heavy than I’d thought. Part of this is just JavaScript being JavaScript. But I also do this thing where — every time a key is pressed — I clone the entire DOM of the composing text field so that I’m able to remove the signature from the word count. It turns out that this is non-trivial, so I made it do this at most 5 times per second. This is frequently enough to feel real time, but more energy efficient than the previous behavior.

Feel free to reach out on Twitter ([@Altimor](https://twitter.com/Altimor)) for feedback/suggestions, and leave a review if you like it :)








