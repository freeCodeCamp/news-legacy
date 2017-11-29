---
author: Mariia Borysova
authorTwitter: none
authorFacebook: none
title: "How to prevent database leaks and injections"
subTitle: "Most web and mobile apps have a backend that includes a database of some kind. Your front end consumes data from your back end, and also ..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*pxW6AFbOoapYpcO4qr_ikQ.jpeg
url: https://medium.freecodecamp.org/preventing-leaks-and-injections-in-your-database-be3743af7614
id: preventing-leaks-and-injections-in-your-database-be3743af7614
date: 2017-03-01T15:35:10.421Z
tags: [
  "Security",
  "Database",
  "Programming",
  "Tech",
  "Startup"
]
---
# How to prevent database leaks and injections







![](https://cdn-images-1.medium.com/max/2000/1*pxW6AFbOoapYpcO4qr_ikQ.jpeg)







Most web and mobile apps have a backend that includes a database of some kind. Your front end consumes data from your back end, and also gathers new data to feed back into your database.

Often hackers will target your database for malicious attacks, trying to steal or modify sensitive pieces of information. But most back ends are pretty well protected, and the only attack vector available for malicious actions is through your front end itself.



![](https://cdn-images-1.medium.com/max/1600/1*jm4EqzjpQZy1S_Y6htQRlQ.png)

Your modern app layout, clean and simple



There are many traditional techniques for protecting your data. Most of them will hurt your performance and also limit the scope of protection of your data at the same time.

This post is about something else — several interesting techniques we’re using for detecting intruders in [Acra](https://www.cossacklabs.com/acra/), our open-source database protection suite.

### Front end under attack!

No matter what kinds of authentication and encryption stand between your front end and the remaining parts of your system, you have to trust your front end to let it pass data on in. Any request your front end sends with the correct authentication parameters, your database has to serve.

But what if your front-end application gets exposed in a way that an attacker is able to alter execution or data request flow?



![](https://cdn-images-1.medium.com/max/1600/1*TKjF0cg5GqbMOQ4Whxbwgg.png)

How about forgetting to filter quotes?



If you trust your application and its credentials, you will serve all of its requests, no matter how malicious they are.

#### Let’s introduce a Watchdog



![](https://cdn-images-1.medium.com/max/1600/1*6liJ_LIjdM6Rze8lY8r8ig.png)

Now, all traffic passes through the Watchdog node



Watchdog is a network proxy server that sits between your app and your database, and controls your data stream. If the infrastructure behind the app was not compromised and only front-end is under attack, the only way for attackers to get the data they’re after is sending malformed requests through this Watchdog.

But apart from just enforcing access policy, it can filter correct requests and deny access for the obviously malicious ones.

So, what does such a Watchdog proxy do? It tries to detect anomalies and all large-scale selects that aren’t typical for an application flow. Then based on threat level, it either shuts down database access or generates notification events for monitoring.

Like the idea? [Acra](https://www.cossacklabs.com/acra/) is such a watchdog, additionally providing cryptographic services, focused on selectively and flexibly protecting only sensitive parts of the data you store.

#### What kind of bad requests should we detect?

Typical payloads for SQL Injections:

*   Inserts, targeting authentication data
*   SELECT *
*   Command execution
*   Grant rights
*   Denial of service attacks
*   Typical signatures of escaping payloads to execution on database side

### Detection methods

Detection sounds simple — we should just look at the traffic that passes through Watchdog and match it against some rule. But SQL injections aren’t always simple binary arrays of bytes with pre-determined signatures, which are easy to spot. There are different methods you can use to efficiently scan the database request traffic:

#### **Query templates**

A simple, flexible method of detecting suspicious behavior is matching SQL requests against some list of patterns. It takes some effort to create such a list covering most of the typical attack vectors for your particular data flow. Then you have to match queries against this list. But this is an efficient way to spot most unsophisticated attempts at scale, and early on.

#### **Poison records**

A classic design used to prevent `SELECT *`-type injections, poison record is a way to detect massive requests to the database. Designing your database requests yourself — or at least enumerating the ones your ORM generates — allows you to understand which tables with sensitive data are never accessed via requests with full scan requests. You can store a special record, a tag, in this table, which, when passing the Watchdog, triggers the alarm.

#### **Query enumeration**

> — Let’s try injecting this way…   
>  — Hmm, nah, doesn’t work  
>  — What about that way of escaping magic quotes?

Most processes for finding and exploiting bugs rely on the try-fail-try-again cycle, in which attacker generates a lot of broken queries. Some of them will contain typical signatures, but overall they will increase the number of bad queries to your database.

While detecting these signatures is hard, detecting a sudden increase in empty/syntax error responses from the database is fairly easy.

One of the interesting challenges we’re pursuing right now is being able to detect abnormal (compared to regular request flow) behavior via a machine learning-trained classifier.

#### What if an **attacker mounts an attack that’s indistinguishable from normal application behavior?**

If the attacker is able to reverse engineer the regular data flow and emulate it in a way that you can’t distinguish from the normal app behavior, they will be able to get past your watchdog.

### Further reading

I recommend reading these three articles on classic and modern patterns in database defenses:

[**Cossack Labs / Classic backend security design patterns**  
_In modern client-server applications, most of the sensitive data is stored and (consequentially) leaked lives on the…_www.cossacklabs.com](https://www.cossacklabs.com/classic-backend-security-designs.html "https://www.cossacklabs.com/classic-backend-security-designs.html")[](https://www.cossacklabs.com/classic-backend-security-designs.html)

[**Cossack Labs / Key management for modern application security 101**  
_Frequently overlooked, much less hyped than quantum computers breaking trapdoor functions, managing keys is actually…_www.cossacklabs.com](https://www.cossacklabs.com/key-management-101.html "https://www.cossacklabs.com/key-management-101.html")[](https://www.cossacklabs.com/key-management-101.html)

[**Cossack Labs / 12 and 1 ideas how to enhance backend data security**  
_Previously, we’ve talked about classic design patterns in backend data security, then about key management goals and…_www.cossacklabs.com](https://www.cossacklabs.com/backend-data-security-modern-ideas.html "https://www.cossacklabs.com/backend-data-security-modern-ideas.html")[](https://www.cossacklabs.com/backend-data-security-modern-ideas.html)

Thanks for reading.








