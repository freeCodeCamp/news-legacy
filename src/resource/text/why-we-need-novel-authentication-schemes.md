---
author: Mariia Borysova
authorTwitter: none
authorFacebook: none
title: "Why we need novel authentication schemes?"
subTitle: "Revealing security holes in 5 main methods of authentication..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*9NyXeoNrQoKQoWY7ZuMXew.jpeg
url: https://medium.freecodecamp.org/why-we-need-novel-authentication-schemes-6d5139e0cd9
id: why-we-need-novel-authentication-schemes-6d5139e0cd9
date: 2016-03-26T09:24:26.024Z
tags: [
  "Security",
  "Infosec",
  "Web Development",
  "Technology",
  "Programming"
]
---
# Why we need novel authentication schemes?







![](https://cdn-images-1.medium.com/max/2000/1*9NyXeoNrQoKQoWY7ZuMXew.jpeg)







Revealing security holes in 5 main methods of authentication

### Introduction: A Word To Pass

Passwords are ultimate keepers of diversity and security. Since Ancient Roman times until now, they are used for one to prove being worthy to get some privilege others do not possess, however strongly desire to obtain. A “magic word”, which one knows and others don’t, opens the door for an opportunity and diversifies an individual selecting them from an enormous crowd.

We can say that password is the oldest and the most widely used pillar of authentication, which is extensively used in 21st century Internet. Its importance is even greater than before, because nowadays more and more people are communicating remotely without seeing or hearing each other, using remote means to gain access to automated systems. Therefore, they have to rely only on passwords to verify remote party and prove their own identity. Just getting to know other person’s password allows you to become that person in the eyes of others, do whatever you please in their name, obtain their privileges in automated systems. That’s why passwords are so critical to protect properly.

However, most of the schemes used for authentication today have their own weaknesses — although some of them are quite theoretical, in rapidly changing world theoretical threats frequently become very practical.

#### Communication as main threat to secrets

The idealistic way to keep a secret safe is not to use it: if you never use it, nobody will intercept it. However, this makes such secrets useless. Since secrets give you privileges, you want to obtain and exercise those privileges now and then.

To do that you have to prove you know the secret. This process involves communicating the secret to other party, which eventually exposes whole or part of a secret. Exercising a secret involves at least 2 parties: a prover (you) and a verifier (an entity which eventually decides whether your secret is the real correct one and you deserve the privileges you claim). However, if you cannot communicate with verifier directly, you have to use one or more intermediate entities, in which case those entities know the secret as well.

Now let’s get back to real world of 21st century and Internet: while communicating, you may be using thousands of intermediate links to deliver your data, so once you send a secret to verifier — it’s not a secret anymore.

### Existing methods of authentication

Existing methods provide some level of protection,- better or worse,- yet each of them has significant drawbacks. So far, most current systems and secure protocols have used only three types of cryptographic primitives: encryption, key agreement and digital signatures. More high level tasks, like authentication, are achieved by combining those primitives in some way in a protocol.



![](https://cdn-images-1.medium.com/max/1200/1*GRHd9iKAhL5A_3_XopGOlg.jpeg)



Internet authentication started with pretty basic passwords: a user entered the password in the web-form, password was sent via HTTP to the server, server verified the password and lets the user in. That was in the early days of the small Internet. At that time attackers were limited by having very little experience on how Internet works. Even if some had basic networking knowledge, they did not have equipment, tools or software (which was very expensive at that time) to do the attacks. Also, the attacks themselves were pointless because of the little commercial value of the information which traversed the Internet at that time. Eventually growth of the Internet and availability of the knowledge, software and tools created a first network attacker: HTTP passwords were easily stolen by simplest passive network sniffers and protocol analyzers.

Next step was to change passwords to some values which were useless for passive eavesdroppers: people started hashing the password. Since both server and user had the same password, they could produce identical hashes of those and compare them, with user sending the hash to server. It seemed that attackers couldn’t get the password, because reversing a hash function is computationally “almost impossible”. This solution saved the day… for just a little while! Attackers used two ways to overcome this:

_First:_ many people make their passwords “easy-to-remember”, so they attackers hashed a big set of popular words and by knowing the hash, could easily “lookup” the original password if it happened to be from the produced “dictionary”: a dictionary attack was invented.

_Second:_ even if someone used complex password, attackers just used the hash directly to authenticate with the server with a “modified browser”. They did not enter the password in the form, but injected hash directly to HTTP stream: an active attack was invented.



![](https://cdn-images-1.medium.com/max/1600/1*kf2NQd5Ak3cE6wJH0tfH_g.jpeg)



It was clear now that HTTP traffic had to be encrypted. However, since communicating parties were located far away from each other a key agreement was used and was eventually broken by attackers: man-in-the-middle was proposed.

The history continues: the more sophisticated schemes for protecting the transmission of passwords are proposed, the better and smarter attacks are designed to defeat them. Wouldn’t it be great to avoid transmitting the passwords at all?

#### 1\. Custom hash exchange protocols

Most of engineers who just begin developing cryptographic tools, seem very pleased when they have their first success in turning a piece of data to a random-looking string using some key and recovering the original data. The problem is that most of the engineers stop at this point. As we know from Schneier’s law:

_Anyone, from the most clueless amateur to the best cryptographer, can create an algorithm that he himself can’t break._

They think that if the output is indeed random-looking and nobody knows the key, they are safe. So, one can always find low-security encryption schemes, hardcoded keys or initial vectors, improper usage of encryption modes etc. even in production software. And, although your output looks random-like, a sophisticated attacker with proper tools and mathematical background will surely find patterns, side-channel leaks, perform cryptanalysis and eventually will recover the data. Even large companies get into trouble with this, so what makes you special?

Different schemes involving bcrypt, pbkdf2 or any ‘encrypt then compare’ frameworks provide only a fragment of security system instead of complete solution. This does not provide sufficient level of security at all.

#### 2\. HTTP authentication

Passwords are still widely used in HTTP to give users access to restricted resources. However, despite the long history of updates of authentication protocols, still there is some room for attacks. A security-aware user will never attempt to enter their password on a website, if that website does not provide a HTTPS connection for entering such credentials. This means that even today HTTP authentication mechanisms by themselves are pretty weak. Let’s check the simplified high-level picture of HTTP authentication:



![](https://cdn-images-1.medium.com/max/1600/0*JmW8cRdAO4lnDK5_.png)

On first glance it seems OK, but if taken more thought many concerns may come up to one’s mind:



*   First of all, the server authenticates the client, but client does not authenticate the server. So the clients has no idea whom they sends their credentials. Moreover, HTTP authentication does not define confidentiality, so anyone can at least know that a certain web resource has certain userbase simply by observing traffic.
*   Although in recent authentication protocols users do not send passwords directly, sending hashes (which is one-way irreversible function) of their passwords instead, passive eavesdroppers can still collect this information and use more complex techniques (like [dictionary attacks](https://en.wikipedia.org/wiki/Dictionary_attack) to recover the password).
*   Previous authentication mechanisms did not use server nonces, so a simple [replay attack](https://en.wikipedia.org/wiki/Replay_attack) was possible. Even today many browsers support such older mechanisms for compatibility reasons, so a [man-in-the-middle](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) can forge messages between client and server and perform a [downgrade attack](https://en.wikipedia.org/wiki/Downgrade_attack).

#### 3\. Kerberos

A lazy approach: instead of authenticating each other, why not make someone else do it? So an entity is created, all clients and services register their keys there and when communication between particular client and server is needed, they just “ask the service”. Seems good at first, but there are some drawbacks and the main of them is that all drawbacks are becoming worse and worse as your infrastructure grows:

*   poorly developed methods to get initial trust to the kerberos server (initial client and service registration)
*   mostly symmetric encryption is used for protocol information and, since protocol is known, there is an open possibility of known-plaintext attacks
*   development and testing is hard under Kerberos: a separate domain and separate Kerberos setup is needed for development and production environments
*   possible misconfigurations and use of weak cryptography for unexperienced administrators
*   the most important: it’s all good until you Kerberos server is secure. When it is compromised a whole security ecosystem explodes. And since sooner or later security breaches happen, having Kerberos is similar to having a security time-bomb in your backyard.

#### 4\. SSL/TLS

[SSL/TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) is de facto standard protocol for Internet authentication. Using TLS, a client (for example, a browser) authenticates the server and, optionally, the server may authenticate the client. The protocol is well established, however does have some drawbacks:

*   requires established [Public key infrastructure](https://en.wikipedia.org/wiki/Public_key_infrastructure), which is hard to setup and maintain technically as well as costly
*   the protocol is complex, so it has poor audit-ability in terms of implementation (numerous implementation attacks prove it)
*   has long history of updates and improvements, which are driven by compatibility reasons as well as discovered protocol attacks
*   still has weaknesses (partly because of the above)

Although, current version is considered secure (yet people rarely use the latest TLS version, instead drowning in old ciphers and vulnerable versions like SSLv3), still there are many pieces a passive observer may collect from the protocol outcome:

*   whether the protocol succeeded or not
*   which parties are communicating (by checking certificate fields)
*   how modern is the software on client and server (by examining communicated TLS version and list of supported cipher suites)
*   possibly whether the parties use dedicated hardware for private key storage

#### 5\. OAuth

One might think that we’ve omitted OAuth, popular Delegated Authorization protocol frequently used for authentication nowadays.

However, it is a protocol that:

*   one of it’s main designers [resigns with negative feedback](http://hueniverse.com/2012/07/26/oauth-2-0-and-the-road-to-hell/) towards security level
*   [multiple](http://www.thread-safe.com/2012/01/problem-with-oauth-for-authentication.html) [flaws](http://leastprivilege.com/2013/03/15/common-oauth2-vulnerabilities-and-mitigation-techniques/) found in it’s core design
*   [numerous](http://homakov.blogspot.com/2012/07/saferweb-most-common-oauth2.html) [implementation](http://homakov.blogspot.com/2013/03/oauth1-oauth2-oauth.html) [error](http://insanecoding.blogspot.com/2013/03/oauth-great-way-to-cripple-your-api.html) [patterns](https://conference.hitb.org/hitbsecconf2013ams/materials/D2T1%20-%20Andrey%20Labunets%20and%20Egor%20Homakov%20-%20OAuth%202.0%20and%20the%20Road%20to%20XSS.pdf)
*   … floating among deployments as huge as [Github](http://homakov.blogspot.com/2014/02/how-i-hacked-github-again.html) and [Facebook](https://www.facebook.com/IHAverified/posts/632698623426949)

In short, you might pick all of the worst points from previous methods (unauthenticated clients, bad transport security), add new ones (active side attacks!) and have that as “authentication” protocol.

If, by any whim of misfortune, you have to end up using OAuth for authentication, please invest some time into [hardening it as much as possible](https://github.com/homakov/oauthsecurity).

### With rising complexity, new problems arise.

Apart from problems with protocols themselves, new network topologies and relationship schemes arise, with ad-hoc network layouts, mixed roles and little ability to carry weighty trust infrastructure from the past. New vulnerability types and new vulnerability detection techniques render new attack vectors efficient.

What do we do to address these challenges?

Not much. We raise complexity even more by introducing multi-factor authentication. We add authentication tokens with really bad properties (like fingerprints, photographed by special camera in your iPhone). We introduce physical devices.

However, with each of these authentication channels having their own flaws, while general strength of the whole scheme is better when every part is strong enough, when any of the authentication channels is compromised, security degrades drastically. And, as infrastructure for these new authentication channels is yet to be stabilized, you might even not understand that your token is compromised, along with the whole authentication scheme.

### Is there a solution?

All of aforementioned methods are strong to some extent, and have certain different weaknesses. If you are willing to stick to these methods, at least put some effort into protecting them from their weaknesses by applying the best practices available. As cryptographers, we strive for methods, which are [theoretically secure, not only ‘never proven to be insecure’, which is known as practically secure](https://books.google.com.ua/books?id=1NHli2uzt_EC&pg=PA76&lpg=PA76&dq=practical+vs+theoretical+security&source=bl&ots=tWHzZvyCNE&sig=ZDHHwhcYADzUoaTUoelbsyOx6dI&hl=uk&sa=X&ved=0ahUKEwj4p4mxo67JAhUHjiwKHat9Df8Q6AEIOjAE#v=onepage&q=practical%20vs%20theoretical%20security&f=false).

However, we’ve got something more interesting for people willing to try new things. Something that’s not only practically strong, but mathematically strong as well.

At Cossack Labs, we were working on novel request authentication scheme, efficient when there is object identifier (A) and unique object’s property (B). Among such objects are, not surprisingly, login/password pairs. This method is not reliant on traditional cryptographic properties, which still include sending passwords in one or another form over the network (and having some theoretical probability of being compromised), but quite a practical implementation of novel cryptographic math, which does not leak credentials at all, either in direct or hashed form.

Stay tuned for next educational articles and scientific paper on Secure Authenticator, novel way to check user password with 0 chance of its interception.

P.S. This article was originally published on our [blog](https://cossacklabs.com/why-we-need-novel-authentication-methods.html).








