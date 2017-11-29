---
author: Drew Firment
authorTwitter: https://twitter.com/drewfirment
authorFacebook: none
title: "How we brought an award-winning tech podcast to life on Alexa, and what we learned along the way"
subTitle: "Podcasts are even better when controlled by a voice-first interface."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*RVhVxj_vPrV5qeH7WUrwcA.png
url: https://medium.freecodecamp.org/how-we-brought-an-award-winning-tech-podcast-to-life-on-alexa-and-what-we-learned-along-the-way-201ab40dda28
id: how-we-brought-an-award-winning-tech-podcast-to-life-on-alexa-and-what-we-learned-along-the-way-201ab40dda28
date: 2017-10-04T20:55:33.647Z
tags: [
  "Tech",
  "Podcast",
  "AWS",
  "Startup",
  "Technology"
]
---
# How we brought an award-winning tech podcast to life on Alexa, and what we learned along the way

## Podcasts are even better when controlled by a voice-first interface.

Every month, 67 million Americans listen to podcasts, with the average podcast fan listening to 5 shows per week.

Audio podcasts are popular for good reason. Within a 30 minute span of the average podcast, a listener can be inspired and educated by influential content — without interference from screens.

While listening to an episode, you can catch-up on emails, exercise, commute, or relax on the deck. The pure auditory experience of a podcast frees your other senses—offering listeners an opportunity to multi-task.

In a recent article, Forbes highlighted _screen exhaustion_ as one of the key contributors to the rise of podcast popularity driving the 11 percent growth in listeners over the past year.

> “Exciting at first, screens have become exhausting for many users, and podcasts represent a refreshing alternative. Rather than using your eyes, you use your ears; there are silences, pauses, and genuine human voices rather than words and images on a screen.”

Unfortunately, the full benefits of a podcast experience are often cut-short by the friction of graphical interfaces. To consume the auditory content, a listener must click controls and navigate screens on their devices.

Podcasts are best served without a screen — using a voice-first interface to control the experience that eliminates the interference and exhaustion. Rather than navigating screens to find past episodes, control playback, or adjust the volume — just _ask Alexa_.

> Alexa, play The Cloudcast.   
> Alexa, skip ahead.  
> Alexa, pause.

This is precisely why so many top podcasts are creating custom skills designed specifically for Alexa. By simply asking Alexa, listeners can now digest of 325 podcasts streamed from popular shows such as NPR or TED Talks.

And now, tech savvy listeners can enjoy an award winning podcast on all things cloud computing. Since 2011, Aaron Delp and Brian Gracely have produced over 300 episodes of [The Cloudcast](https://acloud.guru/cloudcast) from their studios in Raleigh, North Carolina — amassing an astonishing 1M listens run-rate in 2017.







[![](https://cdn-images-1.medium.com/max/2000/1*Cu8zelMXhcweK1fHAe_vZg.png)](https://www.amazon.com/Cloud-Guru-Presents-Cloudcast/dp/B073BB34BH)







#### So what does it take to publish a podcast on Alexa?

A common place to start is one of the [several podcast templates](https://github.com/search?q=alexa+podcast&type=) available for developers on github — all of which use Amazon’s [AudioPlayer Interface](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/custom-audioplayer-interface-reference#valid-response-types-4). Many of the templates require that each episode is manually uploaded to an S3 bucket, while other templates rely on a podcast’s RSS feed.

To develop a high quality podcast skill for The Cloudcast, we partnered with a new startup that specializes in Alexa podcasts — [Fourthcast](https://www.fourthcast.com/). Our team learned about their unique _Podcast as a Service_ from an article about [lessons using AWS Lambda to host Alexa skills](https://read.acloud.guru/lambda-for-alexa-skills-7-tips-from-the-trenches-684c963e6ad1).

While partnering with Fourthcast, we had a chance to explore what it takes to develop a hosting solution for an Alexa podcast skill that delivers a million listens. Here’s a few of the insights from our experience.

#### **_Podcasts are moving targets._**

As new episodes are published, a skill needs to automatically detect updates so it’s immediately available to listeners. For The Cloudcast skill, a distinct Lambda function is used to frequently check the availability of new episodes. The results of the function are cached in S3 — where a separate Lambda function examines the status. This approach ensures we’ve always got the latest episodes available to listeners.



![](https://cdn-images-1.medium.com/max/1600/0*-QbOo9hUx3qloa_F.)



#### **_Performance_**

To avoid latency issues with streaming audio, listeners often rely on a _podcatcher_ app — such as the Apple iTunes client. These apps are used to subscribe to podcasts and automatically download new episodes for local storage and playback.

Unlike traditional devices, an Amazon Echo doesn’t have the capability to locally cache episodes — relying exclusively on real-time streaming. As a result, the quality of an Alexa podcast stream to an Echo device is heavily dependent on the quality of the hosting solution.

For many podcasts, their current hosting solution just isn’t fast enough to support Alexa’s real-time streaming requirements. In these cases, Fourthcast uses an S3 bucket as the _podcatcher_ to download and cache the current content. To improve the streaming performance of large MP3 files, the recordings are automatically re-encoded to smaller streaming quality files using [Elastic Transcoder](https://aws.amazon.com/elastictranscoder/).

#### **_The HTTPS Protocol_**

Most podcast RSS feeds use an HTTP URL to reference an episode — whereas Alexa podcast skills require using HTTPS. Fortunately, the majority of podcast services support HTTPS — which means you can get away with simply modifying the referenced URL to the HTTPS protocol.

In the few cases where this doesn’t work, simply create a CloudFront proxy that uses HTTPS on the requesting side and HTTP on the origin side.



![](https://cdn-images-1.medium.com/max/1600/0*fYu6iAjNsCFgCjhh.)



#### A Database

_Any podcast skill worth its salt is going to need a database_. This is essential for a couple of key reasons — tracking the user’s progress 1) _across episodes_ and _2) within episodes._ By using a database, a podcast session can be resumed at the precise spot of an unfinished episode. DynamoDB is the natural choice for this job — due to it’s low-latency connection to Lambda.

Pulling all these elements together results in an higher-quality podcasting experience — and with new features like the [Notifications API](https://developer.amazon.com/blogs/alexa/post/8cc45487-d5fb-413b-b6c7-eeea4794d10c/amazon-announces-notifications-for-alexa-feature-is-coming-soon-sign-up-to-stay-tuned), we can’t wait to integrate more elements that’ll make podcasts on Alexa even better.

[**The Cloudcast, presented by A Cloud Guru**  
_An award winning podcast on cloud computing, presented by A Cloud Guru._acloud.guru](https://acloud.guru/cloudcast "https://acloud.guru/cloudcast")[](https://acloud.guru/cloudcast)

Now that you learned what it takes to bring a podcast to life on Alexa, we hope you enjoy the latest episode of [A Cloud Guru Presents The Cloudcast](https://acloud.guru/cloudcast)!








