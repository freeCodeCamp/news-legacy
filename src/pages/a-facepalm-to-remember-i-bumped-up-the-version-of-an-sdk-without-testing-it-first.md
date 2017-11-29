---
author: Rahul Chowdhury
authorTwitter: https://twitter.com/chowdhuryrahul
authorFacebook: https://facebook.com/344774899005236
title: "A Facepalm to Remember: I bumped up the version of an SDK without testing it first."
subTitle: "It all started when Google made its App Shortcuts API available for developers on Android. I was super excited to add this to my hash tag..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*-hj6FOiWHQDYIWJgCmbeZQ.jpeg
url: https://medium.freecodecamp.org/a-facepalm-to-remember-i-bumped-up-the-version-of-an-sdk-without-testing-it-first-acb16da33d41
id: a-facepalm-to-remember-i-bumped-up-the-version-of-an-sdk-without-testing-it-first-acb16da33d41
date: 2017-01-16T06:08:31.048Z
tags: [
  "Android",
  "Android App Development",
  "Life Lessons",
  "Startup",
  "Programming"
]
---
# A Facepalm to Remember: I bumped up the version of an SDK without testing it first.







![](https://cdn-images-1.medium.com/max/2000/1*-hj6FOiWHQDYIWJgCmbeZQ.jpeg)

Image credit: [Valeriy Khan](https://unsplash.com/@valeriydmi)







It all started when Google made its App Shortcuts API available for developers on Android. I was super excited to add this to my hash tagging Android app, [Magnify](https://play.google.com/store/apps/details?id=com.upcurve.magnify). So I started digging through [their documentation](https://developer.android.com/guide/topics/ui/shortcuts.html) for steps to implement it.

The first thing I noticed was the required API version for Android `targetSdkVersion` was higher than what I was using. “No big deal,” I thought. And I bumped it up to a newer version.

### The “Mistake”

Bumping up my SDK version wasn’t a mistake. The mistake was that I didn’t test the app extensively on the latest version of Android. I just added the shortcut feature, tested that out thoroughly, then pushed my changes — without realizing that a major API change had been made to this new version of the SDK.

Android Nougat enforces a check on the scope of files shared across apps in the system. If you try to share a file that is saved within the scope of your app with some external app using the traditional `file://` approach, your app will hit a `FileUriExposedException`, causing your app to bring up that ugly crash dialog that no developer — and certainly no user — wants to ever see.

How I fixed this exception is beyond the scope of this article. Instead let me share how this one silly mistake affected my app.

### The “Problem”

Before, when I targeted Android Marshmallow users, my app always managed to sneak out through that hidden door known as “compatibility mode” when running on Nougat. So I was totally chilled out knowing that my app ran fine on the latest version of the OS.

<pre name="a736" id="a736" class="graf graf--pre graf-after--p">android {   
    defaultConfig {   
        minSdkVersion 18   
        targetSdkVersion 23 //Targeting Marshmallow  
    }  
}</pre>

But now things were slightly different for my poor little app. Since it said that it was targeting the latest version of Android, the OS assumed that it had been tested well for all new API updates, and should be punished for any violations. In my case, this was `FileUriExposedException`, as I was sharing photos using the traditional `file://` approach instead of upgrading to a safe and robust solution.

<pre name="ae26" id="ae26" class="graf graf--pre graf-after--p">android {   
    defaultConfig {   
        minSdkVersion 18   
        targetSdkVersion 25 //Targeting Nougat 7.1  
    }  
}</pre>

The ultimate penalty? “_Unfortunately, Magnify has stopped working._”





<iframe data-width="435" data-height="355" width="435" height="355" src="https://medium.freecodecamp.org/media/3a7419365191106610517cce05cdaee3?postId=acb16da33d41" data-media-id="3a7419365191106610517cce05cdaee3" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F8ykJ4yAnwgK2I%2Fgiphy.gif&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





### The “Bigger Problem”

Though the crash was a serious problem itself, I had yet to discover an even bigger problem. Since Android Nougat was only available to around 0.6% Android phone users at that time — and to around 2–3% of people using my app — this was a crash that could have been hidden for weeks.

Fortunately, one of my app users had a Google Pixel running Nougat, and it was she who brought to my attention that the app was broken. I patched it up and rolled out another update with the fix to this crash, which thankfully most users were unaware of, as I was notified of the issue within a day or two.

Phew! That was really really close.





<iframe data-width="435" data-height="258" width="435" height="258" src="https://medium.freecodecamp.org/media/7f9f08a4301020e60376f06b79085c1a?postId=acb16da33d41" data-media-id="7f9f08a4301020e60376f06b79085c1a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F1guRIRFV5gN4ikrUakg%2F200.gif&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





### How did I solve it?

Yeah yeah, I said that I won’t be getting deep into solving the problem, but it’s kind of hard for me to watch a fellow developer struggle on the same problem I had, knowing that I could have helped and added some happy moments to their life.

Here’s how I did it:

[**file:// scheme is now not allowed to be attached with Intent on targetSdkVersion 24 (Android Nougat…**  
_Android Nougat is almost be publicly released. And as an Android developer, we need to prepare ourself to adjust…_inthecheesefactory.com](https://inthecheesefactory.com/blog/how-to-share-access-to-file-with-fileprovider-on-android-nougat/en "https://inthecheesefactory.com/blog/how-to-share-access-to-file-with-fileprovider-on-android-nougat/en")[](https://inthecheesefactory.com/blog/how-to-share-access-to-file-with-fileprovider-on-android-nougat/en)

### Moral of the story

Never ever — and I repeat never ever — roll out an update to your software without very, very extensive testing when you have bumped up the version of your SDK. Chances are there are some API changes you were unaware of — some of which might break your software for good.





<iframe data-width="435" data-height="329" width="435" height="329" src="https://medium.freecodecamp.org/media/b6e31eebd3e82800c2d34d858400de7e?postId=acb16da33d41" data-media-id="b6e31eebd3e82800c2d34d858400de7e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FSleBZRB44y9H2%2Fgiphy.gif&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Make sure you ship your updates only after proper testing. A little time spent testing can save a lot of time getting back the trust of your users.

Oh, and:

> There are no mistakes, save one: the failure to learn from a mistake. — Robert Fripp

Because you don’t end a dope article without a kickass quote. 😉 ✌️

If you enjoyed this story, please do recommend it to other people by hitting the 💚 button on this page, and follow me for more stories about programming.








