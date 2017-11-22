---
author: Zach Cmiel
authorTwitter: https://twitter.com/zach_cmiel
authorFacebook: https://facebook.com/100007316774016
title: "How a 15-year-old designed, developed, and launched an iPhone App in two months"
subTitle: "This is the story of the development, design, and marketing process of Soundtrack, my new iOS app. Soundtrack helps you discover new musi..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*BZsbbFCPzan6qZBHxiM8Uw.png
url: https://medium.freecodecamp.org/how-i-created-marketed-and-launched-an-ios-app-in-two-months-65ab7b5e9e0c
id: how-i-created-marketed-and-launched-an-ios-app-in-two-months-65ab7b5e9e0c
date: 2016-06-13T22:51:21.687Z
tags: [
  "Music",
  "Spotify",
  "Development",
  "Marketing",
  "Design"
]
---
# How a 15-year-old designed, developed, and launched an iPhone App in two months



![](https://cdn-images-1.medium.com/max/1600/1*BZsbbFCPzan6qZBHxiM8Uw.png)



This is the story of the development, design, and marketing process of Soundtrack, my new iOS app. Soundtrack helps you discover new music on Spotify by giving you song and artist recommendations based on specific songs that you have in your music library, or that you search for. You can download it yourself in the [Apple App Store](https://appsto.re/us/qjrJcb.i). You can also get daily music recommendations here: [https://medium.com/soundtrack-daily](https://medium.com/soundtrack-daily).

Around two months ago I started developing an iOS app. I wanted to develop an app because I wanted to enhance the discovery process of Spotify.

I loved the idea of Discover Weekly and song radios, but I needed to discover more music in between each Monday. I thought about the idea of daily Discover Weekly’s but that just seemed like too much music to listen to.

I was in an odd place. I wanted to have more music, but at the same time didn’t want to be overwhelmed by it.

I thought: what if you could get music suggestions based on specific songs? What if you could find related songs based on a song that you regularly listen to? That way you can make sure that the songs that are so-called “related” may actually sound like something you would like to hear.

My goal was to reduce the concern people feel when they’re first listening to new music — are they going to like that music or will it just feel like a waste of time?

This kicked off my design process. Design is not just doing mockups and wire frames. Design starts immediately when you first brainstorm ideas for your product. You start to _design_ this idea in your head, and ultimately will come out with an idea that you can start to develop. Once I got down some initial brainstorming ideas of what this product could actually be, I set out to build what would become Soundtrack.

#### V. 1.0

My initial thought of how to tackle this problem and implement my initial ideas was to create an app that allowed you to listen to your whole music library and also recommend song — a Spotify Version 2.0.

I got started on some of the initial sketches that would eventually become the high fidelity screenshots shown below in Sketch. This Spotify V. 2.0 would be a full media player where you could skip ahead or go to previous songs in your playlists. You could put it on shuffle, repeat, and all the other settings that Spotify is already capable of. It would be the ultimate discovery machine.

Three tabs at the bottom would give you song, artist, and album recommendations based on the current song, artist, and album playing.



![](https://cdn-images-1.medium.com/max/1600/1*t6ZSJwyWK_83WiSl4eUQjw.png)

initial screenshots of how it would look



As I developed the idea in Sketch, I realized that this would be an enormous task, and it would require me to re-create the already awesome Spotify user experience.

This was the first obstacle in my design process. I thought to myself, wait, why should I re-create Spotify? That’s not what I want to do. I don’t want to compete with them. I wanted to create an app that would compliment Spotify and enhance it.

Discover Weekly, a very early concept, already had millions and millions of subscribers. It is by and large a success. I like it (although I still think it can be improved upon). I look forward to every Monday’s personalized playlist.

But throughout the week I felt myself listening and repeating the same songs over and over. I didn’t want that. I wanted to continue to improve my music library and expand it. The idea of a convenient and efficient way of discovering songs kept on nagging at me. Then came Version 2.0 of Soundtrack.

#### V. 2.0

While working on version 1.0, I had actually already started to develop it in Xcode. I had coded quite a bit of the app, actually to the point where you could listen to music from your playlists. You were able to skip ahead, go to previous songs, shuffle, and just plain listen in the background.

But the UX was off. I kept on tweaking the design and the code. I kept looking at Spotify’s API to see if something could be simplified, or if more features could be added. At the time, I thought the main thing my app was missing was the fact that I couldn’t follow my friends like I could on Spotify.

Even though I was happy with my progress so far, I had the nagging feeling that the product I was developing wasn’t 100% up to the standard that Spotify had already set made me second guess myself.

You may hear that second guessing yourself isn’t the best idea, which is often true. You should be confident in your decisions and always believe in yourself 100%. But there will be times — especially in the design and development process — when your designer / developer / entrepreneur / whatever you want to label it, instinct kicks in, you know that something is off. And that’s what happened with me. I had to simplify. So I quickly fired up Sketch and around a month ago, I planned out a completely different app.



![](https://cdn-images-1.medium.com/max/1600/1*O69rRUxXPWH-LHDSya-oVQ.png)



I realized that while Version 1.0 gave you more specific song recommendations, it actually made the discovery process more complex. This was the main factor I took into consideration as I went back to Sketch to design version 2.0.

In this app, you would be able to browse your playlists and listen to 30-second previews of your songs. This way, if you forgot how a song sounds, you would be able to listen to the gist of it. Then, based on the specific song you chose, a card would slide up with song and artist recommendations. You could press the song recommendations and hear the 30 second preview of that song to get the gist of that song.

This way the discovery process would be quicker because you don’t have to spend time skipping around in a song. You listen to 30 seconds or less and decide whether or not you like it. You could then either save the song or add the song to a playlist. You could also press an artist and get a final card that slides up that shows you the artists top songs. You could listen to those songs’ 30 second previews and then add or save those.

A final touch added in the last week was if you wanted to find a song not in your library, you could also search for a song and get that same discovery experience. This became the essence of my app.

I’ve talked quite a bit about my design process, but not the development. Although Spotify’s API wasn’t ideal, it was easy enough to work with, and the support on Github was pretty quick.

The main issue I encountered was deciding whether using the beta iOS SDK was better than the Web API and HTTP requests with Alamofire. I ended up using the Web API for mostly everything except for the authorization flow, which lead me to the only other problem I encountered. But with the help of Jorden Kreps and a couple of other developers including [David McGraw](https://medium.com/@xmcgraw), I was able to figure out the issue.

I used a bunch of cool libraries from Github in my app including, [Alamofire](https://github.com/Alamofire/Alamofire) (HTTP requests), [SwiftyJSON](https://github.com/SwiftyJSON/SwiftyJSON) (JSON from the Web API), [Bond](https://github.com/SwiftBond/Bond) (highly recommended for Swift binding), [Kingfisher](https://github.com/onevcat/Kingfisher) (getting images from the Spotify API), and [Instructions](https://github.com/ephread/Instructions) (in app tutorials). This pretty much concluded my development process at the end of May, and all I had to do was put the finishing touches on the app.



![](https://cdn-images-1.medium.com/max/1600/1*eJQOkSJhfQXQuQN_04a6ZQ.gif)



So, I released the beta and started an Instagram channel @discoverjams for marketing. I created three posts a day: lyric of the day, song of the day, and artist of the day. That gained 20 followers. Not many, but not bad.

Then the next week I submitted the app to Apple’s app store. The app was rejected! It was because I had album artwork in my screenshots. After a quick call with Apple, I got the revised screenshots approved, and they approved the app shortly afterward.

This brings us to today. With the help of [Ryan Hoover](https://medium.com/@rrhoover) and [jsneedles](https://medium.com/@jsneedles), I launched on [Product Hunt](https://medium.com/@producthunt). If the app does well, I’ll post updates! I hope I can post some updates!

#### Takeaways:

1.  Cut out all unnecessary features
2.  Say no more than yes
3.  Start marketing once you have a good idea of what your product will be
4.  Network with everybody
5.  Don’t be afraid to ask for help, everybody is here to help you

### Product Hunt

[https://www.producthunt.com/tech/soundtrack-discover-the-best-music-on-spotify](https://www.producthunt.com/tech/soundtrack-discover-the-best-music-on-spotify)

### App Store

[https://appsto.re/us/qjrJcb.i](https://appsto.re/us/qjrJcb.i)

Feedback, suggestions? Leave a comment or email me at [zachary.cmiel@gmail.com](http://zachary.cmiel@gmail.com)

#### Special Thanks:

*   Jeff Needles — [jsneedles](https://medium.com/@jsneedles) (hunted Soundtrack on Product Hunt)
*   David McGraw — [David McGraw](https://medium.com/@xmcgraw) (Spotify Login)
*   Jorden Kreps (Spotify Login)
*   Blake Jamieson — [Blake Jamieson](https://medium.com/@blakejamieson) (Inspiration with 90DaysToMoMA and Some Good Book Recommendations)
*   Justin Kan — [Justin Kan](https://medium.com/@justinkan) (Inspiration on Snapchat)
*   Ryan Hoover — [Ryan Hoover](https://medium.com/@rrhoover) (Product Hunt)
*   Gary Vaynerchuk — [Gary Vaynerchuk](https://medium.com/@garyvee) (A ton of inspiration, motivation, and marketing tips through #AskGaryVee (show and book), DailyVee, The Thank You Economy, and Jab, Jab, Jab, Right Hook)
*   David Rock — [DRock](https://medium.com/@DavidRockNyc) (inspiration from the story of him starting to work for GaryVee)
*   Kiran Panesar — [Kiran Panesar](https://medium.com/@k_panesar)and Nick McEvily — [Nick McEvily](https://medium.com/@nickmcevily) (design and development feedback, beta testing)
*   Zach Latta — [Zach Latta](https://medium.com/@zrl) (beta testing)
*   Nick Babich — [Nick Babich](https://medium.com/@101) (design inspiration)
*   Dave Verwer — [Dave Verwer](https://medium.com/@daveverwer) (iOS links from [iOS Dev Weekly](https://iosdevweekly.com))
*   Stuart Hall — [Stuart Hall](https://medium.com/@stuartkhall) (his [Medium article on his 7 Minute Workout app](https://medium.com/@stuartkhall/how-i-got-2-3m-app-downloads-without-spending-a-cent-on-marketing-f4823b6bc779#.ip7nk5sn2) is phenomenal)
*   Jordan Gonen — [jordangonen](https://medium.com/@jordangonen) (his Medium publication is great)








