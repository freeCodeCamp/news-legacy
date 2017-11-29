---
author: Radu Raicea
authorTwitter: https://twitter.com/radu_raicea
authorFacebook: none
title: "How Pretty Good Privacy works, and how you can use it for secure communication"
subTitle: "Sending sensitive information through the internet is always nerve-racking. What if somebody else sees the bank information I’m sending? ..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*z52ec1RmWo163zQc_LNIaQ.jpeg
url: https://medium.freecodecamp.org/how-does-pretty-good-privacy-work-3f5f75ecea97
id: how-does-pretty-good-privacy-work-3f5f75ecea97
date: 2017-10-08T15:51:16.595Z
tags: [
  "Security",
  "Privacy",
  "Programming",
  "Tech",
  "Technology"
]
---
# How Pretty Good Privacy works, and how you can use it for secure communication







![](https://cdn-images-1.medium.com/max/2000/1*z52ec1RmWo163zQc_LNIaQ.jpeg)

Image credit: [Mr. Robot Wallpaper](http://wallpaperswide.com/fsociety_mr_robot_hacking-wallpapers.html)







Sending sensitive information through the internet is always nerve-racking. What if somebody else sees the bank information I’m sending? Or even those dank memes that should not be spoken of?

Fortunately, there’s a pretty good solution to this problem: **Pretty Good Privacy (PGP)**.

A software engineer named [Phil Zimmermann](https://en.wikipedia.org/wiki/Phil_Zimmermann) created PGP back in 1991\. He was an anti-nuclear activist, and wanted a way to transfer information securely over the Internet.

Zimmermann got into trouble with the US government in 1993 because PGP travelled international waters and reached a vast number of countries around the globe, violating US export restrictions for cryptographic software.

Today, PGP is “owned” by [Symantec](https://en.wikipedia.org/wiki/Symantec), but **OpenPGP**, an e-mail encryption standard, is implemented by [multiple software](http://openpgp.org/software/).

You might also hear a lot about [**GPG**](https://gnupg.org). It is another software tool that implements the OpenPGP standard.

### How does PGP actually work?

PGP is very easy to understand, on the surface. Imagine you want to send your credit card information to a friend and you write it on a piece of paper. You then put the paper in a box and send it by mail.

A thief can easily steal the box and look at the paper that contains your credit card information. What could you do instead?

You decide to put a key lock on the box, but you realize that you have to send the key along with the box. That’s no good.

What if you meet your friend in person to share the key beforehand? That could work, right? It could, but then both of you have a key that allows to unlock the box. You, as the sender, will never need to open the box again after closing it. By keeping a copy of a key that can unlock the box, you are creating a vulnerability.

Finally, you found just the right solution: you’ll have two keys. The first key will only be able to lock the box. The second key will only be able to open the box. That way, only the person who needs to get the content of the box has the key that allows them to unlock it.

This is how PGP works. You have a **public key** (to lock/encrypt the message) and a **private key** (to unlock/decrypt the message). You would send the public key to all your friends so that they can encrypt sensitive messages that they want to send to you. Once you receive an encrypted message, you use your private key to decrypt it.



![](https://cdn-images-1.medium.com/max/1600/1*LpV5okf8ByND-ClSQZ7-aA.png)

Image credit: [OpenPGP](https://www.goanywhere.com/managed-file-transfer/encryption/open-pgp)



### A Brief Example

There are plenty of [software tools](http://openpgp.org/software/) that implement the OpenPGP standard. They all have different ways of setting up PGP encryption. One particular tool that works very well is _Apple Mail_.

If you are using a Mac computer, you can download the [GPGTools](https://gpgtools.org). This application will generate and manage your public and private keys. It also integrates automatically with Apple Mail.

Once the keys are generated, you will see a _lock_ icon in the subject line, when composing a new message in Apple Mail. This means that the message will be encrypted with the public key you’ve generated.



![](https://cdn-images-1.medium.com/max/1600/1*oeDIGUXjiml1UmEZl860ew.png)

Composing a PGP encrypted e-mail using Apple Mail



After sending the e-mail to someone, it will look like this. They will not be able to see the content of the e-mail until they decrypt it using the private key.

Note that **PGP encryption does not encrypt the subject line of an e-mail**. Never put any sensitive information in the subject line.



![](https://cdn-images-1.medium.com/max/1600/1*6Hw4Wf32s-YHQgalVo48ow.png)

Receiving a PGP encrypted e-mail



If you are using software that automatically decrypts the message using your private key, like Apple Mail, it will look something like this:



![](https://cdn-images-1.medium.com/max/1600/1*T7F_wQccqovMiS55JsuhQw.png)

Decrypted PGP e-mail



### In summary…

*   **Pretty Good Privacy** (PGP) allows you to send files and messages securely over the Internet
*   PGP generates a **public key** (to encrypt messages) and a **private key** (to decrypt messages)
*   [OpenPGP](http://openpgp.org) is an e-mail encryption standard
*   [**GPG**](https://gnupg.org) is an open-source implementation of OpenPGP
*   You can find a brief list of software that have PGP capability [**here**](http://openpgp.org/software/)

### References

*   [http://philzimmermann.com/EN/background/index.html](http://philzimmermann.com/EN/background/index.html)
*   [https://gnupg.org/index.html](https://gnupg.org/index.html)
*   [https://gpgtools.org](https://gpgtools.org)
*   [http://openpgp.org](http://openpgp.org)
*   [PGP Workflow Diagram](https://www.goanywhere.com/managed-file-transfer/encryption/open-pgp)

For more updates, follow me on [Twitter](https://twitter.com/radu_raicea).








