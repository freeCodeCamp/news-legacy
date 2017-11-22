---
author: Arun Sasidharan
authorTwitter: https://twitter.com/_arunsasi
authorFacebook: https://facebook.com/10159388811075366
title: "Hard-Earned Android Programming Experiences"
subTitle: "This post, like Kent Beck says in his book Implementation Patterns, “…is based on a rather fragile premise that good code matters…”. But ..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*5v2uWjgpnjKka7rhTyxzmA.png
url: https://medium.freecodecamp.org/hard-earned-android-programming-experiences-361fbaaecd07
id: hard-earned-android-programming-experiences-361fbaaecd07
date: 2016-07-07T15:42:18.797Z
tags: [
  "Android",
  "Startups",
  "Android App Development",
  "AndroidDev",
  "Programming"
]
---
# Hard-Earned Android Programming Experiences



![](https://cdn-images-1.medium.com/max/1600/1*5v2uWjgpnjKka7rhTyxzmA.png)



This post, like Kent Beck says in his book**Implementation Patterns**_, “…is based on a rather fragile premise that good code matters…”._ But we all know that clean code matters as we’ve had to deal for so long with its lack. And so does Kent.



![](https://cdn-images-1.medium.com/max/1600/1*cGK1gUt9z9jIZ3X4-pZULw.jpeg)

Kent Beck



#### The Total Cost of Owning a Mess

A few years ago, like every naive Android developer working in an early-stage startup in India, I tried to “_hack”_ real world problems, to “_disrupt the industry”_ and to _put a “dent in the universe”_. Without a care in the world about good software design or architecture, I started writing code to build an Android app that would one day become one of the biggest consumer heath-care apps in India.

Sprint after sprint, hack after hack, features were built in a mad rush. _Build. Measure. Learn_. _Time-to-market_ was important and every day mattered. Time flew by, we were growing at the rate of 1 team member every 6 months and the app had hit the million downloads mark.



![](https://cdn-images-1.medium.com/max/1600/1*JWtkG_oWpFf2MS5iIz2LkQ.png)

Our app’s Google Play store downloads and rating.



By this time, the app had stopped being trivial and it had become a _multi-tenant_ client, if that’s even a thing. Features that would take hours when we started now took days, sometimes weeks. Every Activity was 1000+ lines of spaghetti code as Android inherently doesn’t worry too much about the separation of concerns. **The total cost of owning a mess had significantly slowed us down.**

#### The Android Conundrum

The code looked ugly, _Activities_ managed everything:

*   _Threading_
*   _I/O_
*   _Computation_
*   _Layouts_
*   _Config changes_
*   _What not_

After all, _Activities_ are _Controllers_, right? Or are they _Views_? I didn’t know anymore.



![](https://cdn-images-1.medium.com/max/1600/1*X-jAE-30RWqFlncTljrFkA.png)

MVC



#### The Grand Redesign In The Sky

We needed to design the app in a way that changing a line of code somewhere did not break something somewhere else. The app had to be, as Uncle Bob says, _“robust but not rigid, flexible but not fragile”_.



![](https://cdn-images-1.medium.com/max/1600/1*rFHTWb88mgbfpExji_7Zdw.jpeg)

Robert “Uncle Bob” Martin



This was when my mentor and friend [Kashif Razzaqui](https://medium.com/@kashifrazzaqui) joined the team to help us alleviate the mess. The grand redesign never happened, but we refactored the hell out of our code:

*   We added a “_service”_ layer and moved all the non-UI code into them, one service at a time.
*   We chucked _AsyncTasks_ and moved to _ListenableFutures_ using _Guava_.
*   We dumped _AsyncHttpClient_ for _OkHttp._
*   But more importantly, we started reading a lot: Clean Code, Clean Architecture, SOLID, DRY, The Pragmatic Programmer, Java Concurrency In Practice, Domain Driven Design, etc.

Soon we started seeing the benefits of our efforts. Productivity increased, we were writing things faster, everyone was happy.

This was until we unified our apps and all hell broke lose. Just having an additional _service_ layer didn’t cut it.

#### The Art of Clean Code

After watching Uncle Bob’s videos on [Clean Architecture](https://www.youtube.com/results?search_query=clean+architecture&page=&utm_source=opensearch) multiple times and reading a lot on Android app architecture, I decided to experiment with the [MVP design pattern and RxJava](https://github.com/esoxjem/MovieGuide).

A few days into the experimentation, we decided to switch to _RxJava_ and implement _MVP using Clean Architecture_. We made sure we encapsulated all layers behind interfaces and separated concerns well.

*   _The View,_ usually implemented by a Fragment, contains a reference to the presenter. The only thing that the view will do is to call a method from the Presenter every time there is an interface action.
*   _The Presenter_ is responsible to act as the middle man between _View_ and _Model_. It retrieves data from the Model and returns it formatted to the View. But unlike the typical MVC, it also decides what happens when you interact with the View.
*   _The Model_ is only the gateway to the _domain_ _layer_ or _business logic._
*   _The Interactor_ deals with I/O and is the provider of data to be displayed in the _View_.

Now it’s much easier to switch out one layer with a completely new implementation. Redesigning the UI, a part and parcel of Android app development, has become much easier. Things can finally move fast without breaking.

#### The Boy Scout Rule

It’s not enough to write code well, the code has to be **kept clean** over time. The fact of life is that software has a tendency for _entropy_. We’ve all seen code rot and degrade over time so we borrowed the simple boy scouts rule: “_Leave the campground cleaner than you found it.”_

If we all checked-in our code a little cleaner than when we checked it out, the code simply could not rot. The cleanup doesn’t have to be something big. Change one variable name for the better, break up one function that’s a little too large, eliminate one small bit of duplication, clean up one composite if statement.

#### Conclusion

Our way of building a scalable app might not be “_correct_” and you might not agree with this post. After all, not all martial artists agree about the best martial art, or the best technique within one ;)

There are many different approaches towards MVP and a lot of interesting solutions to adapt it to Android. The one fact that we can’t deny is that _Clean Code_ matters and you just can’t sweep it under a rug.











* * *







This post borrows heavily from Uncle Bob’s **Clean Code** and steals the title from [_Kashif’s Droidcon talk_](https://www.youtube.com/watch?v=dauMw_Bns0w)from 2011.

If _Clean Code_ matters to you, let’s chat :)   
_Twitter:_ [_@_arunsasi_](http://twitter.com/_arunsasi) _LinkedIn:_ [https://www.linkedin.com/in/arunsasidharan](https://www.linkedin.com/in/arunsasidharan)

### If you liked this post, please hit the little heart! ❤








