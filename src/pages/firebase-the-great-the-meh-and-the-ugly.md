---
author: Pier Bover
authorTwitter: https://twitter.com/PierB
authorFacebook: https://facebook.com/10204541732080952
title: "Firebase: the great, the meh, and the ugly"
subTitle: "We jumped right into Firebase when Google announced it at Google I/O in May 2016...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*AoarrKQjCE0zVJkxl9za8Q.jpeg
url: https://medium.freecodecamp.org/firebase-the-great-the-meh-and-the-ugly-a07252fbcf15
id: firebase-the-great-the-meh-and-the-ugly-a07252fbcf15
date: 2017-01-13T04:25:56.274Z
tags: [
  "JavaScript",
  "Web Development",
  "Programming",
  "Startup",
  "Tech"
]
---
# Firebase: the great, the meh, and the ugly



![](https://cdn-images-1.medium.com/max/1600/1*AoarrKQjCE0zVJkxl9za8Q.jpeg)



We jumped right into Firebase when Google announced it at Google I/O in May 2016.

We were starting a single-page React application that needed to work on mobile via Cordova, and desktop via Electron. So Firebase seemed like a magical solution for us.

Now, after 7 months of working with Firebase almost daily, I’m ready to share our experience with it.











* * *







### The Great

#### Realtime data

Yep, that’s awesome. With a bit of plumbing and some data binding sorcery you can connect your views with your data and they magically change when the data changes.

In our experience performance was consistently great, although Firebase is designed with millions of users in mind so we didn’t even scratch the surface of the beast.

Our users are still impressed by how fast everything runs.

#### Static hosting on steroids

Firebase hosting comes with free CDN and SSL — all running on the Google Cloud platform. This means you shouldn’t have any problems serving files to any number of users all over the globe.

If you’re looking for zero-configuration hosting for your next single-page app or static website, I’d really consider Firebase as an option, even if you don’t use any of Google’s other services.

#### Super powers

Firebase also provides you with a number of services and SDKs that are super easy to integrate such as:

*   OAuth authentication
*   File storage
*   Database backups
*   Automagical scaling
*   CLI for deploying and other duties
*   Free tier











* * *







### The Meh

#### The console

It’s pretty and it allows you to do a number of things, but it’s not _that_ useful.

The database manager is really a glorified JSON editor. Great for what it is, but it’s not the full fledged solution I was expecting it to be. If you come from WorkBench, Postico, Mongotron, or even PHPMyAdmin, this will come as a nice toy.

Another very limiting aspect of the console is the lack of detailed logs or analytics. Considering it’s _data-obsessed-Google_ we are talking about this seems bizarre. Sure you get a nice graph for usage of the database, but there is no way to know how many times a file has been downloaded from storage unless you implement a solution yourself.

#### Serverless?

Firebase is static hosting + API, nothing more. This limitation is not the end of the world. You can easily solve this by using a Node.js server as another client of Firebase, which you will most probably need for many common tasks such as creating thumbnails, sending emails to your users, etc.

Apparently it will be possible to use [Google Cloud Functions](https://cloud.google.com/functions/) (still in Alpha) with Firebase but who knows when. Maybe this will be announced at Google I/O 2017.

**( Edit March 2017**: Firebase just announced [Google Cloud Functions for Firebase](https://firebase.googleblog.com/2017/03/introducing-cloud-functions-for-firebase.html) )

#### Defining security rules

Firebase uses a JSON file with Javascript code in strings to define rules over the database and storage.

<pre name="1b2f" id="1b2f" class="graf graf--pre graf-after--p">{  
  "rules": {  
    "users": {  
      "$uid": {  
        ".write": "$uid === auth.uid"  
      }  
    }  
  }  
}</pre>

This is not as bad as it sounds since you can use [Bolt](https://github.com/firebase/bolt) to make this process less painful. Although, even when using Bolt, once you go beyond a simple few dozen rules this file becomes unmaintainable Italian Food™.

Services like [Dream Factory](https://www.dreamfactory.com/) and [Graph Cool](https://www.graph.cool/) give you a proper tool to do that without losing your sanity.

#### Proprietary tech

When Facebook decided to shut down Parse, many projects found themselves in a difficult position. I honestly doubt this is going to happen to Firebase, but I can understand the reluctance to couple your tech stack with a third party platform-as-a-service.

#### No way to develop locally

If you travel frequently or live in a country with poor connectivity consider that you can’t work with a local installation. You can’t just use Docker or Node and start your API.











* * *







### The ugly

#### Limited Javascript SDK

There are a number of features in Firebase that are only implemented in their iOS and Android SDKs.

The most glaring one is the lack of offline persistence when working with Javascript. Your web, hybrid, or ReactNative application will continue working if the device loses connectivity momentarily. But once you close the application or tab, your data will be gone. It’s up to you to implement a cache with persistence. This can really be a serious endeavor, especially on mobile.

The Javascript SDK doesn’t even have a way to cache data (not sure about iOS or Android). If you load `/products` and then need that data again later you will have to reload it unless you manually keep a connection in the background. It’s not hard to implement this, but again, why doesn’t Firebase provide a _magical_ way to do that?

#### No way to query your data properly

You can do some very basic filtering and pagination, but other than that you are on your own.

Really? Google is providing a data service with no searching or filtering capabilities?

Yeah. Really.

If you want to implement search functionality, you will have to either download all the data and do it in the client, use a server like I described previously, or implement a third party service like [Elastic](https://www.elastic.co/).

Firebase’s developers have said that this is by design, so they can assure high performance. OK. But why not let us users decide if we can afford to pay the performance price for our use case?

Yeah, and forget about doing joins or anything remotely fancy with your data. Which brings me to…

#### Dumb data modelling

> Dealing with relations with NoSQL is hard, dealing with relations with Firebase is pain in the ass. - [Baptiste Jamin](https://crisp.im/blog/author/baptiste/)

What he said.

The Firebase database is basically just one huge JSON file. There’s no way to declare _one to many_ or _many to many_ relationships. In practice this means that you’ll end up duplicating your data all over the place.

This doesn’t seem so bad at first. After all, it’s convenient to put the name of the user in a chat message, no?

<pre name="2441" id="2441" class="graf graf--pre graf-after--p">{  
 “author”:”Pepito Flores”,  
 “message”:”I want a taco!”,  
 “time”: 1484269756951  
}</pre>

The problem comes when you have to actually edit Pepito’s name since you will have to modify it **everywhere** you have used it and not only in `/users`.

Telling your users that they can’t edit their name is not usually a viable option, so:

1.  Your client code for writing and editing data to Firebase will become in many cases Italian Food™.
2.  Documenting where you have duplicated your data will be difficult to say the least.

Also since many NoSQL databases like [MongoDB](https://docs.mongodb.com/manual/core/data-model-design/#data-modeling-referencing) or [RethinkDB](https://www.rethinkdb.com/docs/table-joins/) have found ways around this problem, I find it difficult to believe that Google can’t solve this with at least reasonable performance.

### TL;DR

Firebase is awesome for simple projects or developing small features that require realtime data. For example a chat or a notification system. Those are the impressive 30 min demos you see on YouTube. It also works really well if your data are streams of _things_ with a simple structure such as a service for an online multiplayer game.

Anything with more complex data requirement becomes difficult or even impossible with Firebase. Regular _run of the mill_ database queries are in most cases more valuable than realtime data, and as impressive as seeing stuff changing is, you probably don’t need any of it.

Like everything, pick the right tool for the job.

### Addendum: what Firebase needs to be awesome

1.  Real querying capabilities. Search, joins, the whole enchilada.
2.  Some sort of references likes MongoDB or RethinkDB.
3.  Real offline persistence with Javascript.
4.  Give me _moar_ analytics.
5.  A cache API.



![](https://cdn-images-1.medium.com/max/1600/1*5duCBunpwimQKODGBxM8lQ.png)



That is all.

### Addendum 2: moar info

If you are reading this you might be evaluating Firebase as a developer or CTO. Here are some other articles that could help you decide whether Firebase might work for you, and whether it’s worth investing extra dev time for evaluation.

[**Firebase: The Good, Bad, and the Ugly - RaizException - Raizlabs Developer Blog**  
_As part of our work as software developers at Raizlabs, we are constantly evaluating the latest development tools used…_www.raizlabs.com](https://www.raizlabs.com/dev/2016/12/firebase-case-study/ "https://www.raizlabs.com/dev/2016/12/firebase-case-study/")[](https://www.raizlabs.com/dev/2016/12/firebase-case-study/)

[**Reasons Not To Use Firebase**  
_Building real-time applications is today standard. At Crisp, we used Firebase in production over 9 month, starting from…_crisp.im](https://crisp.im/blog/why-you-should-never-use-firebase-realtime-database/ "https://crisp.im/blog/why-you-should-never-use-firebase-realtime-database/")[](https://crisp.im/blog/why-you-should-never-use-firebase-realtime-database/)








