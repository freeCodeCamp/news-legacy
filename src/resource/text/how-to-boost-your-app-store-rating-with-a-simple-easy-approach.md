---
author: Max Stein
authorTwitter: none
authorFacebook: none
title: "How to boost your App Store rating with a simple, easy approach"
subTitle: "Users love to see high app ratings when deciding which apps to download. If two apps do the same thing, but one has a higher rating than ..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*9Ue8oEZUuEQoB0GNhf_n-Q@2x.jpeg
url: https://medium.freecodecamp.org/how-to-boost-your-app-store-rating-with-a-simple-easy-approach-ba54651182c8
id: how-to-boost-your-app-store-rating-with-a-simple-easy-approach-ba54651182c8
date: 2017-10-31T09:12:49.584Z
tags: [
  "Startup",
  "Tech",
  "Apple",
  "Web Development",
  "Programming"
]
---
# How to boost your App Store rating with a simple, easy approach

Users love to see high app ratings when deciding which apps to download. If two apps do the same thing, but one has a higher rating than the other, which one do you think most users would choose?

Several of the most popular apps in the App Store have seen their ratings jump from the 3.5–4.5 range up to 4.8–5.0\. At the same time, they’re also seeing their review count jump from 5,000–15,000 reviewers into the 100,000–1,000,000 range!

For example, let’s have a look at Instagram:



![](https://cdn-images-1.medium.com/max/1600/1*i02PCqhXkBqXtW6SD6AsAQ@2x.png)

Instagram on the iOS 11 App Store



4.8 stars from over 580,000 reviewers. But Instagram is a huge app, so it’s not hard to see why so many people would have rated it.

Let’s take a look at any even larger app than Instagram — Facebook:



![](https://cdn-images-1.medium.com/max/1600/1*j4L1pZkMvbhFwutCI8f3Iw@2x.png)

Facebook on the iOS 11 App Store



Facebook has a 3.0 star rating from only 14,500 users. How did Instagram get 40 times more users to rate its app when Facebook has [so many more users](https://techcrunch.com/2017/06/27/facebook-2-billion-users/) than Instagram?

### Apple’s rating prompt

The answer is the strategic placement of [Apple’s native rating prompt](https://developer.apple.com/documentation/storekit/skstorereviewcontroller):



![](https://cdn-images-1.medium.com/max/1600/1*lNJn2lo_TOL9VwdGhDX2nQ@2x.jpeg)



Before this native solution existed, developers had to take users to the App Store to rate their Apps. Now with Apple’s solution, users can tap the rating they want, tap submit, and they’re done!

It’s available for iOS 10.3 and above — so your iOS 10 users won’t get left behind.

The prompt is very easy to add and only takes a couple lines of code:

    // Add this near the top of your fileimport StoreKit

    // Put this where you want the review prompt to appear

#### Making good use of the prompt

Before you jump in and paste this anywhere in your app, you need to consider your customer base. Where in your app can you show this prompt that will allow users to engage with it in a positive way?

There’s no one right answer to this question, but here are some ideas:

*   For shopping apps — after one or more successful transactions.
*   For content consumption apps — after a certain period of time. Or, after X number of songs/videos/books have finished.
*   For social networking apps — after a user creates content. Or, when a user engages with X number of other peoples’ content.

#### Things to keep in mind

“Because this method may or may not present an alert, it’s not appropriate to call it in response to a button tap or other user action.”  
[https://developer.apple.com/documentation/storekit/skstorereviewcontroller/2851536-requestreview](https://developer.apple.com/documentation/storekit/skstorereviewcontroller/2851536-requestreview)

`requestReview()` will return a prompt based on App Store policy governed by Apple. You should not present an alert beforehand asking customers if they’re enjoying your app. If you do there’s a possibility they won’t see a rating prompt resulting in a bad user experience.

“You can prompt for ratings up to three times in a 365-day period.”  
 — [https://developer.apple.com/app-store/ratings-and-reviews/](https://developer.apple.com/app-store/ratings-and-reviews/)

The rating prompt will only appear to a user up to three times a year, even if they update your app.

This isn’t as much of a problem as it was in previous versions of iOS. Starting with iOS 11, Apple changed the way ratings are reset on the App Store.

In the past, every time you submitted a new build to the App Store, your ratings would get reset. Now you have the option to keep your rating history. So if you’re happy with your rating, you can keep it!

Getting a high rating on the App Store is one of the most effective ways to increase your downloads. Apple now provides an easy, native, and efficient way to boost your app’s rating. Take advantage of it in a clever way and you’ll definitely see results.

**If you liked this story I would love it if you’d click the 👏 button below so more people can find out about it. Feel free to share in the responses as well if you used this prompt in your app!**








