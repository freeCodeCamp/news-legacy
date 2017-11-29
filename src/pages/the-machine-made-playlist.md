---
author: Sina Habibian
authorTwitter: https://twitter.com/sinahab
authorFacebook: none
title: "How I designed an algorithm that mixes playlists of bands coming to your town"
subTitle: "This is a retrospective on funkavinci.com, a web project I worked on last summer. It was a series of weekly computer-generated playlists ..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*T_4UZtxr2sGPwDS6FuSO6w.jpeg
url: https://medium.freecodecamp.org/the-machine-made-playlist-faec2c8bc7ba
id: the-machine-made-playlist-faec2c8bc7ba
date: 2017-01-05T15:15:57.715Z
tags: [
  "Software Development",
  "Programming",
  "Music",
  "Design",
  "Startup"
]
---
# How I designed an algorithm that mixes playlists of bands coming to your town







![](https://cdn-images-1.medium.com/max/2000/1*T_4UZtxr2sGPwDS6FuSO6w.jpeg)







This is a retrospective on [funkavinci.com](http://www.funkavinci.com), a web project I worked on last summer. It was a series of weekly computer-generated playlists showcasing the best upcoming concerts in town.

Inspired by Spotify’s Discover Weekly, Funkavinci used an algorithm to generate a weekly playlist with 20 tracks. Each track corresponded to an artist who would be playing live during the following week. If a listener liked a track, they knew the artist was going to be in town and could purchase tickets to see them perform.

I recently ended support for Funkavinci after a few months of running it on the side. I’m writing this post to describe my process in building it and share some takeaways.

### Motivation

I was discovering a lot of new music last summer. There were many acts I wanted to see live and who I knew would be performing in San Francisco sooner or later. I also wondered if a tool for music discovery could be built by monitoring artists who were touring through the city.

Services like Bands in Town and Songkick were partially addressing these ideas but had shortcomings. They sent daily notifications mentioning names of bands who were in town, but I had trouble recognizing [the names](https://www.youtube.com/watch?v=W_IzYUJANfk). I was missing shows that I would have gone to. Doing some research, I found that this was a common problem. A more effective approach would be to shift the attention from the artist’s name to their songs and let the music speak for itself.

I also learned that concerts were becoming more important within the overall music industry. Musicians today depend on live music, instead of recorded music, for the [majority of their income](http://www.nytimes.com/2015/08/23/magazine/the-creative-apocalypse-that-wasnt.html). Yet most concerts do not sell out. Building a service which outlined the best concerts in town would not only help fans discover music; it would also help musicians sell tickets.

I decided to build an app that would generate a new playlist every week with 20 tracks representing 20 upcoming concerts and deliver it to my email.

### Prototyping a Solution

After checking out a few APIs, I decided to use [Seatgeek](http://platform.seatgeek.com/) as a source for up-to-date concert listings. They have a relatively complete database of events, provide a JSON API, and allow commercial use of their API.

To generate a playlist with the best concerts, I devised the following algorithm:

1.  Query the [Seatgeek API](http://platform.seatgeek.com/) for all upcoming concerts in San Francisco for the following week. This would usually return around 100 events.
2.  Extract the primary performer for each event and query the [Spotify Search API](https://developer.spotify.com/web-api/search-item/) for that artist.
3.  Query the [Spotify top tracks API](https://developer.spotify.com/web-api/get-artists-top-tracks/) for the most popular track by each artist.
4.  Filter the resulting list to the top 20 tracks as ordered by popularity and add them to a Spotify playlist for listening. This was a list of the 20 best artists in town the following week, at least as decided by the popularity of their most popular track on Spotify.

I was pleasantly surprised by the outcome. The playlist format had put the music front and center. No longer intimidated by eccentric band names, I listened and fell in love with a couple of artists. Better yet, they were all touring through San Francisco so I saw them live in less than a week. I shared the playlist with a few friends who had similar results.



![](https://cdn-images-1.medium.com/max/1600/1*HczXN7mbQCx13a4UT4U5Nw.png)

The first Funkavinci playlist



### Building a Product

I quickly realized that adding 20 popular tracks to a playlist does not make for a smooth listening experience. There were electronic, hip hop, and rock tunes showing up in sequence. Moreover, the Seatgeek and Spotify search data were not always perfect. There were occasionally artists who were not performing in town but had similar names to ones who were.

I modified the algorithm to add the top 50 tracks to a private playlist. I would personally listen to these and prune to keep a top 20\. I made sure that the artists were all performing in the city and that the music flowed through the playlist as a whole.

I built a Rails app to manage the various playlists, shows, artists, and tracks. I added an admin UI that would allow me to visualize, add, or remove these various entities.







![](https://cdn-images-1.medium.com/max/2000/1*TaOkiwtsMfX8RrxACSStEA.png)

The Admin UI







There was a clean underlying structure linking artists to playlists and playlists to the city. This meant that in the future, I could add an abstraction layer to the backend to generate playlists for other cities as well.

I then moved onto the user facing site. I used a card-based layout to showcase the concerts and complement the playlist. This layout would also allow for easy experimentation and re-ordering if I ever decided to personalize the playlists for the logged in user.



![](https://cdn-images-1.medium.com/max/1600/1*eM0bYQYr_dbqlFQcKhe74w.png)

Using cards to display concert information



### Into the Wild

I pushed the site live in August. A group of friends signed up at first and the reach grew organically over the following weeks.

The Funkavinci playlist was delivered as a weekly newsletter every Sunday morning at 10am. The email provided a morsel of value and built a sense of expectation around it’s weekly arrival. Users were able to simply forward the email to friends, creating an organic pathway for growth.

Another growth hack was to use the Spotify social feed to spread awareness. The playlists had names like “[Funkavinci.com | 12/29–01/05](http://www.funkavinci.com/playlists/24)”. If someone found a friend listening to the playlist and wanted to find out more, they could simply visit the website.



![](https://cdn-images-1.medium.com/max/1600/1*uZx6-OK7BRiagXSyY5W0Hw.png)

Funkavinci.com on the Spotify social feed



The process of putting together the weekly playlist was automated and took an hour of time per week. I would listen to 50 tracks and write a conversational blurb announcing the new playlist. This was included on the site and the newsletter.



![](https://cdn-images-1.medium.com/max/1600/1*VANvPqiDOx7OjyWGybKUIg.png)

I had fun writing these weekly blurbs.



### My Takeaways

As I close Funkavinci and move onto other things, some of my notes for myself are:

#### **Understand the pros and cons of using external APIs**

At one point, I entertained the idea of growing Funkavinci into a business. I was hearing regular accounts of friends purchasing tickets and going to concerts because of the service. I wondered if it could scale into something larger.

I ultimately decided against this due to a number of reasons, one of which was that Funkavinci was in a low-leverage position. It owned neither the content (i.e. the music) nor the data (i.e. listening metrics on Spotify or purchasing metrics on ticketing sites).

Building a consumer app requires deep insight into user behavior and I didn’t have access to important data points. A potential solution would have been to curb the reliance on Spotify (or it’s alternative Soundcloud) by independently hosting music and providing a media player. Sites like [8tracks](http://8tracks.com/) or [Resident Advisor](https://www.residentadvisor.net/) follow this approach. This entails added complications, including the handling of music rights, and did not seem worthwhile given the limited upside.

APIs allow us to leverage existing platforms and build solutions that would not have been possible otherwise. They can also put one in a low leverage position where one depends on an external platform for mere existence or for access to crucial data.

#### **Kick off projects with a push for publicity**

With Funkavinci, I fell into a classic engineer trap of shying away from publicity. Holding high standards for the product and still harboring traces of old perfectionist tendencies, I thought the app was not ready for prime time. I therefore did not make a real effort at marketing and only shared it in a few online forums.

I’ve now learned that publicizing a project early on can be very helpful. It will help create an early community of users who inform your decisions. Moreover, and perhaps more importantly in the early days, it will provide you with a sense of increased accountability and motivation.

#### **Pick names that are easy to pronounce and to spell**

As the saying goes: “there are only two hard things in Computer Science: cache invalidation and naming things.” The same applies to products. I picked the name Funkavinci as it brought to mind an image of a funky DaVinci and because it was edgy. Watching multiple people struggle with pronouncing or spelling it taught me a valuable lesson.

With that, I bid farewell to a fun project, and move onto the next.

_Want to say hi? Ping me on_ [_Twitter_](https://twitter.com/sinahab)_._








