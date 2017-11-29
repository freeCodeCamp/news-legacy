---
author: Rick Mak
authorTwitter: https://twitter.com/rickmak
authorFacebook: https://facebook.com/10154571208592812
title: "How to handle unknowns and make assumptions when designing a cloud database"
subTitle: "Say you’re a developer who wants to build a note taking app. Let’s look at one feature detail with huge implications on your back-end. To..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*YbuEATHnaNlM4yPP5qYZzg.jpeg
url: https://medium.freecodecamp.org/how-to-handle-unknowns-and-make-assumptions-when-designing-a-cloud-database-df002068a83b
id: how-to-handle-unknowns-and-make-assumptions-when-designing-a-cloud-database-df002068a83b
date: 2017-09-21T16:21:47.547Z
tags: [
  "iOS",
  "Cloud Computing",
  "Database",
  "Tech",
  "Technology"
]
---
# How to handle unknowns and make assumptions when designing a cloud database







![](https://cdn-images-1.medium.com/max/2000/1*YbuEATHnaNlM4yPP5qYZzg.jpeg)

Photo by [Chance Anderson](https://unsplash.com/search/photos/public?photo=if2coegqwZU) via Unsplash







### Scenario: Shoebox or social app?

Say you’re a developer who wants to build a note taking app. Let’s look at one feature detail with huge implications on your back-end. To write a note, your app will need to be able to save the data.

Saving a record to a database is straight forward. The key questions are:

*   Who will need to access that record?
*   Will it only be your user, or will your user share it with others?
*   Will your product be shoe-box app or a social app?

If you intend for the notes to be private to the author, you may conclude that you are making a shoe-box app. This means all data goes to a private DB (database).

If you intend for your app to share notes with others, you may conclude it should be a public DB.

But will you know which it is before you start?

And what will you do if you need to change your product as you go? Public DB and private DB isn’t the first thing most developers think about when they’re building an app. We encountered these question when we were building our back-end product for our developers, [Skygear](https://skygear.io/).

Because of our experience in building apps for clients, we **assumed** there was a right choice of database. And that our user would know how to choose.

How do you build a back-end for developers who aren’t sure of their products needs yet?  
 Or for those who want to keep their options open in the future?

As the tech lead in the project, I’d like to share with you our decision making process from 2 years ago. I hope it helps future development teams approach unknowns and assumptions.

### Why did we start thinking about private vs public DBs?

Many apps require a back-end to store and query user data. The back-end is a lot of hard work to build and, let’s face it — not so enjoyable to create. [Skygear](https://skygear.io/) is our open-source serverless back-end. It helps address common development features for mobile and web apps.

The feature I’ll talk about is our Cloud DB, where you store and query user data. When we started to design Cloud DB, we asked ourselves how different apps store and query user data.

We looked at our company’s mobile apps [portfolio](https://oursky.com/works/) for inspiration. Our company does everything from consumer apps to e-commerce apps. So we grouped them into “shoe-box” and “social” apps.

Shoe-box apps store personal data that the user wants to keep private. For example, our side project [Spentable](https://itunes.apple.com/app/spentable-track-your-daily-expense-and-savings/id500630565?mt=8) helps a user track of their daily spending. Data stored in the app is meant to be private, in a shoe-box.

But, there is stuff that we want to share publicly or with friends. That also means the user needs to be in control of who can read their data. These two kinds of apps present a challenge in how we designed Skygear’s Cloud DB. We wanted to make storing data in Cloud DB as easy as possible. For shoe-box apps, all the developers need is a database where each user can only see the data that they are putting in. Yet, in social apps, developers need features such as ACL (access control). How can we make things simple for developers of both kinds of apps?

### Having our cake and eating it too

We decided to solve this problem by introducing the concept of multiple databases in the [Cloud DB](https://docs.skygear.io/guides/cloud-db/basics/ios/): private DB and public DB. Each user has a private DB to put data in, and that data is only available to the same user. The app also has one public DB that is shared among all users.

A shoe-box app developer is able to focus on saving and fetching the data without worrying about permissions because data in the private DB is always private.

But, private DB does not work at all for social apps. Developers for social apps should put data in the public DB because data in social apps are meant to be shared.



![](https://cdn-images-1.medium.com/max/1600/1*0HS1xeqA7s-UU79TGYrhEw.png)



Before we added support for [ACL](https://docs.skygear.io/guides/cloud-db/acl/ios/), this simple distinction for public and private data served us(and our users very well. Everything in private DB is truly private while everything is public DB is truly public.

“Everything is public” is not good enough. Most social apps have use cases that data is only shared among a group of friends.

ACL is another difficult and interesting topic that should be it’s own article.

### We couldn’t have the best of both databases

Separating the DB into private and public ones was a good idea. We thought they supported the use case for majority of apps.

But early adopters found our private and public options confusing.

Our early users gave us invaluable feedback. We also paid attention to the support questions we received. This is what we learned from developer feedback when they used our Cloud DB:

1.  It’s not obvious to developers what they’re building at first  
    While it may be obvious which kind of app developer made by looking at the product retroactively, it is not obvious from the get-go. Forcing the developer to decide whether they are making a shoe-box or social app at the beginning is difficult, if not impossible.
2.  Developers just want to get started quickly  
    We want the developers to learn the basics as quickly as possible. Having to learn one more concept to choose which DB to use before they can actually save and retrieve data is too much to ask for new users.
3.  The decision for public or private DB, once made, isn’t easy to reverse  
    Suppose that a developer started with a shoe-box app idea and they put everything in the private DB. Later they may realize that they should make the app a social one instead. It is not easy to migrate data once they are put into a particular DB.
4.  Permissions are usually an after thought  
    Data security a priority in our company. But data security is not the first thing that comes to the mind of a developer. Especially when they’re just doing a proof-of-concept prototype. They want to focus on the functionality first, and take care of the security later on.

### Our takeaways

We are always thinking about how we could make our products better. We could do better in terms of software architecture, user documentation and ease-of-use. We sometimes brainstorm what we would do if we could rewind the clock two years to start over. But here is what we would tell our former selves:

1.  If developers are already familiar with an existing concept, adopt it  
    Most developers are familiar with the concept of a database. It is a container of some sort where developers can save content. They can also retrieve data and support the CRUD (Create, Read, Update, and Delete ) property.   
    Because developers are already familiar with the concept of a database, they would find a single database on Cloud DB straight-forward to use.
2.  Introduce new concepts when developers are prepared for them  
    This idea is actually an other way of saying that we should make the learning curve as easy as possible. Skygear was a prototype in its own way. We just launched V[1.0](https://skygear.io/)!.  
    You never want to make life for your early adopters difficult. Having to learn everything before developers can do anything does not work well from a product perspective. Until developers need to think about data permission, they should not need to know about the difference between a private DB and public DB. We should let our users get started with the common concepts first to familiarize themselves with a new platform.  
    Only after they’re comfortable should we introduce new concepts to provide more options. In this case, there’s no harm for a developer to discover they need ACL so the new concept is a natural next step after they have learned how to use Cloud DB.

### What we learned

When we began working on Skygear two years ago, we wanted to build a kick-ass product with 2–4 of our senior developers. We had ready testers from our own in-house developers, who gave lots of critical feedback. We thought we were using our experience in web and mobile app development to make better decisions on how to design tools for other developers.

But our experience also created assumptions about what to expect our users to know before using our product.

The good thing about getting user feedback on Cloud DB as we went was that we learned that our assumptions were incorrect. Our most valuable lesson was the humbling reminder of a basic startup principle. No matter our experience, we often don’t know exactly what we’re building.

Of course, that doesn’t stop us from trying to build that philosopher’s stone to make lives easier for our fellow developers anyway. As my co-founder, Ben, said one of his most productive days was when he tossed 1000 lines of code away.

I would like to credit my colleague [cheungpat](https://medium.com/u/cdd8a0d1e292) who worked on the Cloud DB with me and helped write this piece.

My team would love to hear your critical feedback for [Skygear](https://skygear.io/). Also check out our [documentation](https://docs.skygear.io/) and [GitHub repos](https://github.com/SkygearIO/features) to see how we discuss Skygear features.








