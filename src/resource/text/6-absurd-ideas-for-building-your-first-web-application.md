---
author: Kevin Kononenko
authorTwitter: https://twitter.com/devmanual
authorFacebook: https://facebook.com/10203738544564981
title: "6 Absurd Ideas For Building Your First Web App"
subTitle: "Okay, you have already learned front-end web development, and now you are looking to flex your developer muscles on the next big challeng..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*lRWsjJFXlX7UDSeP0GiduQ.png
url: https://medium.freecodecamp.org/6-absurd-ideas-for-building-your-first-web-application-24afca35e519
id: 6-absurd-ideas-for-building-your-first-web-application-24afca35e519
date: 2016-05-18T14:02:58.889Z
tags: [
  "Web Development",
  "Front End Development",
  "Web Design",
  "Technology",
  "Design"
]
---
# 6 Absurd Ideas For Building Your First Web App



![](https://cdn-images-1.medium.com/max/1600/1*lRWsjJFXlX7UDSeP0GiduQ.png)



#### Need a few ideas for building a simple web app? These 6 examples will help you practice all the key skills and have fun doing it!

Okay, you have already learned front-end web development, and now you are looking to flex your developer muscles on the next big challenge: full-stack web apps. You probably have many ambitious project ideas rolling around in your head. But how can you determine which are reasonable with your current skill set?

Here are 6 unusual ideas for your first web app, which will help you gain experience with all the basic concepts of full-stack web development. At the end, you will have a distinctive project that you can include in your portfolio. It will help you stand out compared to all the boring projects that everybody else is building.

_Note: if you are still learning HTML/CSS/JS, I put together_ [_8 ideas_](https://medium.com/@kevink/8-crazy-ideas-for-building-a-web-site-a25b3f69c517#.3fp6yvrcw) _to practice front-end only._



![](https://cdn-images-1.medium.com/max/1600/1*XY2qe5fjP-v7uVYng6gcUw.png)



### 1\. FastFood Guru

**The Idea:** [Yelp](http://www.yelp.com/) is a pretty popular source of restaurant reviews. However, most people use it to learn about restaurants they have never heard about before. What about massive fast-food chains like McDonald’s and Burger King? Plenty of people go to these, but somehow, they are not a popular review candidate.

Yes, you might tell me that every menu is pretty much the same, and the food always tastes the same as well. However, if you visited many of these chain “restaurants”, you know there are a few things that differ wildly.

Which one has the most luxurious bathroom? Which ones mark up their menu prices? Which ones have funny drunks at 1AM in the morning? This would be a review site for those fast-food chains that are supposedly consistent.

**Type of Site:** Reviews

**Key Functions:**

*   Ability to create an account with a picture, username and location
*   Use Google Maps to let a user pick out a specific restaurant, either through searching a location on the map or through typing in a name and choosing from a list (typeahead)
*   Allow the user to write a review
*   Allow user to rate the following fast-food specific topics on 1–5 scale: Bathroom Quality, Staff, Cleanliness, Drive-thru Sassy Level, Delivery Speed
*   Ability to add pictures to the review
*   Responsive design down to mobile

**Key Feature Decisions:**

*   Is this a serious website, or is it really about the funny things that can happen at a fast-food joint?
*   Who will be using this site? People on roadtrips trying to choose a lunch place? Frequent fast-food visitors looking to share their experience?
*   Should this be a community where people frequently check the site for funny stories and participate? Or more one-time, infrequent use?
*   What social media integration might help spread stories/reviews?

**What You Will Learn:** User systems and picture storage are two major challenges. This will be a good chance to implement a basic version of each. Also, if you choose to make this a humor-oriented site, how can your design influence an appropriate level of humor that is not nasty? If you want to gain a following, this will be a good test to see where you might be able to source current fast food reviews to seed your database and create immediate content.



![](https://cdn-images-1.medium.com/max/1600/1*pTWEfkY_XHOEGENsu0BkaQ.png)



### 2\. GrillBer

**The Idea:** Yep, you guessed it. Uber for grills. If you live in a city, you may not have the space for a grill or a safe place to lock it up. For example, if you live on the 20th floor of an apartment building, where can you put your grill?

Problem solved with GrillBer, a delivery service for grill rentals. This will allow customers to put on a cookout with none of the logistics. In fact, you might want to include a roll of turf and chairs so your customers can create a [pop-up park](http://inhabitat.com/parking-day-2014-the-most-amazing-pop-up-parks-from-san-francisco-and-beyond/) in a parking space!

**Type of Site:** Delivery/Logistics

**Key Functions:**

*   Form that allows a user to book a grill for a certain number of hours at a certain hourly rate, and stores that in a database. User must input their name, address etc.
*   Calendar that shows different times that grills are available. Check out [Zipcar](http://www.zipcar.com/) for an example of this.
*   Product details page that shows the grill and tells you more about the different add-ons, like chairs and turf.
*   Social media integration with Instagram that shows all the awesome cookouts people have held with GrillBer.
*   A checkout process and payments system with [Stripe](https://stripe.com/) so users can complete the process.

**Key Feature Decisions:**

*   This does not need to be visually stimulating like Uber. But does it even need a cool interactive calendar? Or can you get away with a basic form like an e-commerce site?
*   How many pains in the grilling process will you offer to address? Do you expect the user to clean the grill? Are these the cheaper but slower charcoal grills, or more expensive gas grills?
*   Cookouts are meant to be a low-stress experience. If people have to hurry to cook their food, it will not be a great experience. How can you use copy and microcopy to clearly state how this will not be a stressful process?
*   What logic do you need to have on your back-end for the booking system? Do you need to allow a half-hour before and after for grill delivery?

**What You Will Learn:** How to coordinate the front-end and back-end of a booking system. Think about how many sites do this. Restaurant booking sites. Conference room booking sites. There are many more. This is a very common pattern, and a great accomplishment to have on your resume for discussion.



![](https://cdn-images-1.medium.com/max/1600/1*gJZ9hrQsEYZUpPBliT2OYA.png)



### 3\. NetworkTap

**The Idea:** Social media is an increasingly popular advertisement strategy. Companies use Twitter, Facebook, LinkedIn and Pinterest to reach customers in the middle of browsing. However, there is one untapped space: the user’s actual post.

Advertisers love word of mouth marketing, and having users post the actual ads themselves would be a great way to confuse others in their newsfeed!

This site would allow users that want to make a little extra cash to volunteer information on themselves, and advertisers to briefly hijack a post with an ad. Users get paid on a per-view basis or another method. Now, ads can reach eyeballs in new and innovative ways!

**Type of Site:** Marketplace

**Key Functions:**

*   Individual users must be able to create an account with info like: location, age, interests, and family status so advertisers can pick who they want to post about their product
*   Advertisers must be able to create an account and post about their brand identity, and who they are looking to reach.
*   Each user must be able to reach out to an advertiser to talk about their interest in doing a post.
*   Each advertiser must be able to search all users by criteria like age, gender etc. and send a mass message to their chosen demographic about interest in doing an ad.
*   Users and advertisers must agree on a payment method: pay-per-like, pay-per-view, pay-per-click or other.

**Key Feature Decisions:**

*   Search functionality will be a big deal for the advertisers. How do you represent each search result? May want to use data visualization like Google Analytics.
*   How can you get the most info out of users? Integrating with a social media account? Perhaps paying them more based on how much info they offer?
*   What power dynamics are there between advertisers and users? Do users get input on the ad text and picture? Or do advertisers make all the decisions on what gets shown?
*   People will not want $10 a week out of this. They will probably want more like $100 at minimum. How can you balance this with the number of ads they will likely need to show to get there? Nobody wants to completely pollute their news feed.
*   How sly do you want the ads to be? Should it be obvious, or should it feel more like an authentic post?

**What You Will Learn:** Marketplaces are another very popular type of site. This one will let you create two types of accounts, which is a common structure. Messaging within a site will be a good skill to learn with this one. Check out [Fiverr](http://www.fiverrr.com) for an example.



![](https://cdn-images-1.medium.com/max/1600/1*8x1RBwi9lRMqmZqVT0wn2Q.png)



### **4\. Repair My ‘Ship**

**The Idea:** This is short for “Repair My Relationship”. It is a forum where users can post about their relationship issues, and others can chime in with advice on how to fix their problems.

If you have experienced the fine communities on sites like 4chan, Reddit or Bodybuilding.com, then you know that there are plenty of people willing to donate a few minutes of time to help out.

**Type of Site:** Forum

**Key Functions:**

*   A post/comment system similar to Reddit or Quora.
*   An upvote system for both posts and comments
*   An opportunity for the user to post what they actually tried with their significant other, and what results ensued
*   A badges or karma system to reward frequently upvoted users
*   A user account system for those that want to comment or post, similar to Reddit

**Key Feature Decisions:**

*   Should this be more anonymized like Reddit, or tied to a social media account like Quora for credibility?
*   There will be plenty of trolls on this site. How do you deal with it?
*   Should this strictly relate to romantic relationships? Or friendships as well?
*   How can you use the badge system to motivate especially good commenters to come back?

**What You Will Learn:** How to build a forum! Also, there are plenty of people out there that are willing to donate a few minutes of their time to help Internet strangers in need. Seriously. Your main challenge is making sure these helpful users feel rewarded for their efforts, because that will motivate them to come back.



![](https://cdn-images-1.medium.com/max/1600/1*RClLUbjcjAmW4jLwVYMz9g.png)



### 5\. CatBattles

**The Idea:** Cat videos are… incredibly popular. One particularly distinctive form of cat video is the amateur battle, where two cats duke it out with minimal consequences, but plenty of meowing and wrestling.

This site would allow users to post videos of their cats wrestling, and allow viewers to offer funny comments. This site would also NOT allow professional cat battles, or fights with gruesome ends. It is strictly for casual entertainment, not animal rights violations.

**Type of Site:** Video Content

**Key Functions:**

*   Anybody can upload a cat video
*   Users can create an anonymous account and add comments.
*   A screenshot of each cat that the user clicks on to guess the victor before the fight starts
*   Upvotes for best videos and best comments
*   The ability to report malicious videos, or ones that seem to be staged

**Key Feature Decisions:**

*   Why would somebody post their cat fight video here rather than Reddit or YouTube? You need to add a couple features to distinguish it from these sites.
*   How can you make this site popular within the cat-lovers community? Cat lovers do not enjoy violence, but they do enjoy cat humor.
*   Should this site duplicate the dynamics of [Hot or Not](https://en.wikipedia.org/wiki/Hot_or_Not)? How can you create a unique viewing experience for the viewer that goes beyond YouTube? Perhaps a play-by-play of the fight that gets recorded as users post?

**What You Will Learn:** Storing videos in a database is a good skill to learn. Also, replicating the dynamics of YouTube will be good practice that others will clearly understand. Getting the tone of humor right on the site would also be a good challenge.



![](https://cdn-images-1.medium.com/max/1600/1*6OJKK8DQN5z-vQeAuYiv-Q.png)



### 6\. CouponBank

**The Idea:** There are plenty of sites out there that allow people to exchange coupons on a one-for-one basis. But what about the “[long tail](https://en.wikipedia.org/wiki/Long_tail)” of coupons? In other words, rare or obscure coupons that might not be popular on a more mainstream coupon site. And what if the other person does not have a coupon you desire? Coupons are basically money, anyway.

You need a bank to handle this mismatch in the marketplace. This bank would ask for an initial deposit of $20, let’s say. Then, every coupon that you ask for will get debited from your account. Any coupon that you are able to successfully give away will be credited.

**Type of Site:** Peer to Peer Lending

**Key Functions:**

*   Users must be able to create an account, and then deposit $20 in escrow which can be taken out any time. This is collateral. You can use Stripe to process this transaction.
*   Users can upload a photo of a coupon. The site must then automatically determine the product, and the amount of the coupon. It must prompt the user if it cannot figure it out. Google’s [Cloud Vision API](https://cloud.google.com/vision/) should help with this.
*   When a user requests a coupon, the original poster must mail it to them. The amount of the coupon is credited to the original poster’s account, and debited from the requester’s account.
*   Once somebody’s account hits $0, they cannot request any more coupons until they trade some themselves, or add more money.
*   The site generates revenue by taking a small percentage of every transaction.

**Key Feature Decisions:**

*   How can you make this as easy as possible to upload a massive number of coupons? The Cloud Vision API would be a big deal for this.
*   How can you make this as easy as possible for people to send the coupons? The user would be exhausted if he/she needs to send many coupons via mail.
*   How can you make the search process as easy as possible? What if somebody could upload a receipt, and you can check if there are any coupons available for the items on the list?

**What You Will Learn:** This one encompasses a few key concepts of peer to peer lending, albeit with a much lower risk profile. This is a great test of your attention to user experience. There are millions of people across the US that have time to spare, and are looking for an easy way to make a few extra bucks. How can you make your site an excellent option for this?

#### Get creative

Don’t feel obligated to build the same projects as everybody else. It’s extremely hard to gain a competitive edge on the rest of the market when you are imitating.

Even if one of these suggestions does not help you, you should consider building projects that can create a little personality and distinguish yourself from all the others.

As Seth Godin says, “In a crowded marketplace, fitting in is a failure. In a busy marketplace, not standing out is the same as being invisible.”

**Did you enjoy this? Give it a like and let me know in the comments!**








