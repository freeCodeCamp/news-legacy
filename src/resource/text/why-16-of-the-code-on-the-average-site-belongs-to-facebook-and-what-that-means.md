---
author: Ben Regenspan
authorTwitter: https://twitter.com/BenRegenspan
authorFacebook: none
title: "Why Facebook Like buttons account for 16% of an average website’s code"
subTitle: "According to data collected by BuiltWith.com, 6% of the top 10,000 most high-traffic sites load content from Facebook’s servers. For the ..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*bXVdCbBw1GKOsI7s8ko7_Q.png
url: https://medium.freecodecamp.org/why-16-of-the-code-on-the-average-site-belongs-to-facebook-and-what-that-means-68956cd731be
id: why-16-of-the-code-on-the-average-site-belongs-to-facebook-and-what-that-means-68956cd731be
date: 2017-09-03T23:39:08.511Z
tags: [
  "Web Development",
  "JavaScript",
  "Facebook",
  "Tech",
  "Startup"
]
---
# Why Facebook Like buttons account for 16% of an average website’s code

According to [data collected by BuiltWith.com](https://trends.builtwith.com/cdn/Facebook-CDN), 6% of the top 10,000 most high-traffic sites load content from Facebook’s servers. For the vast majority of them, that content is likely Facebook’s Javascript SDK, a huge block of code that is needed to display such features as the Like button (as seen on many media sites) and Facebook comments widgets (also used on many big media sites, Buzzfeed among them).

This SDK code is so big that it represents about 16% of the total size of all JavaScript on the [average web page](http://httparchive.org/trends.php#bytesJS&reqJS).



![](https://cdn-images-1.medium.com/max/1600/1*bXVdCbBw1GKOsI7s8ko7_Q.png)

One of the culprits behind modern websites taking so long to download



As a sizable and widely-used software library, the Facebook SDK is a nice way of illustrating some of the answers to the questions: just why is the average site today so big? And how much does size actually matter?

### Why so big?

The Facebook SDK is very full-featured, duplicating many of the tools the average site is likely to already include for its own developers’ use: methods for retrieving data from other sites, for determining which browser and device the user is using so as to target specific features to them, and for displaying UI elements (like confirmation dialogs and buttons). If we [categorize all of the pieces](https://docs.google.com/spreadsheets/d/1vdRzi-wlYNQOoAt4bGOseDMt7vgmpv9BoSfy4yM1SYY/edit?usp=sharing) of the SDK, the breakdown looks like this:



![](https://cdn-images-1.medium.com/max/1600/1*g5yhxuOULPFhBiosX03MVA.png)

The amount that each set of features in the SDK contributes to total filesize. (Note that this is the size of the file before it has been compressed; the final package will be smaller.) [[Source data, methodology, and more screen-reader-compatible data table](https://docs.google.com/spreadsheets/d/1vdRzi-wlYNQOoAt4bGOseDMt7vgmpv9BoSfy4yM1SYY/edit#gid=873242422)]



Of the sets of features, three stand out the most:



![](https://cdn-images-1.medium.com/max/1600/1*QjJV_g9EJvefrgwQyIZRIA.png)

The three sets of features in the SDK that are completely irrelevant to the vast majority of users on most sites. Eliminating them — if it were possible to do so — would shave off roughly 20% of the SDK filesize. [[Source data, methodology, and more screen-reader-compatible data table](https://docs.google.com/spreadsheets/d/1vdRzi-wlYNQOoAt4bGOseDMt7vgmpv9BoSfy4yM1SYY/edit#gid=873242422)]



“Canvas” is Facebook’s system for apps that are intended to be loaded within Facebook (Facebook made a major push in the past to encourage developers to build apps that lived within Facebook; I’m not entirely sure how widely such apps are used today, but either way, a regular website does not use any of the Canvas-related features.) The cost of including them in the SDK is pretty marginal: only 1.5% of total size.

After that, we have legacy feature support. This reflects the fact that an API will accumulate multiple interfaces for handling the same features over time. For example, developers can write code that calls either **FB.getLoginStatus()** (the legacy approach to requesting the user’s current Facebook login status) or **Auth.getLoginStatus()** (the new, encouraged approach). The way to get around needing to include both sets of methods is releasing them in separate versions of the SDK, but Facebook opted not to do this, likely to simplify the experience for developers and to maximize the number of sites using the exact same file (to increase the likelihood that the average user already has it downloaded). This decision comes at a small cost: roughly 3.5% of the SDK code is for handling features that are explicitly marked as “legacy” (and it’s quite possible that there are many more “legacy” features that just aren’t explicitly marked as such).

Most significantly, the SDK includes a number of polyfills and polyfill-like utilities, which make up over 15% of its code. Polyfills are used to supply features that are found in newer browsers to older browsers, and sometimes also to supply newer features that are upcoming but haven’t been added to any browsers yet. Most of the polyfills included by the Facebook SDK are for features that are already included in browsers used by the vast majority of internet users. They serve only to make the SDK work for the [< 1%](http://gs.statcounter.com/browser-version-market-share) of global internet users who are using old browsers like Internet Explorer 8, which many (if not the vast majority of) major sites have given up on supporting.

Of the remaining ~80% of the SDK, it’s a bit more difficult to untangle which features are needed for which purpose. This is because it is written such that, to use a simple feature like the Like button, one must also include code that is used only for comments, video embeds, login buttons, and other unrelated features. Facebook could have opted to distribute much smaller files for including only single features such as Like buttons, but has a business goal of encouraging sites to use as many FB-provided features as possible.

### Does size matter?

Due to the widespread use of Facebook’s SDK, and the fact that it changes [relatively infrequently](https://github.com/nfriedly/facebook-js-sdk), many users are likely to have already downloaded it before they load a site. In fact, this is a big part of the rationale for why Facebook would distribute such a huge file, rather than smaller ones for specific features such as Like buttons. And on most users’ network connections — at least those in developed countries — the time it takes to download the file is marginal.

But regardless of whether the user’s browser already has the SDK downloaded, there is still overhead involved in running a large block of Javascript, especially on mobile devices. On the relatively new MacBook Pro I’m writing this on, Facebook’s SDK takes around 50ms (1/20th of a second), to run on a site like Buzzfeed. Not bad — especially when taken in context with the rest of the JS code, including ad-related code that takes far longer to execute — but still a non-trivial cost for something that is only used to display comments on the very bottom of the page.







![](https://cdn-images-1.medium.com/max/2000/1*b4Cz3JKmwgg5qIlYKAwmsg.png)

Script evaluation in Chrome on a recent MacBook Pro







On a very new smartphone (Google Pixel), the JS execution time is doubled, now taking over 1/10th of a second:







![](https://cdn-images-1.medium.com/max/2000/1*YrHFWabESezXSeFmt_Co-Q.png)

Script evaluation on a Google Pixel smartphone







When looked at in context, this is a tiny fraction of the total code execution time on the page. But it adds to the amount of time during which scrolling or otherwise interacting with the page can be a choppy and unpleasant experience. And this gets at an important point: this particular SDK has a marginal cost, but modern websites — especially media sites — often include similar code from a large number of third parties ([this example I captured from Gawker before it was killed by a billionaire vampire](http://ben.regenspan.com/your-script-loader-is-killing-you/#/4/4) shows just how many such requests there can be).

Even setting aside the privacy impact of sending some user information to each of these third parties, the cost of all these features adds up quickly. Each third-party script that a site adds comes at a cost, both in terms of performance and in helping to rationalize the addition of the next “relatively harmless” chunk of third-party code later on. Besides the immediate performance impact of the additive cost of all of this code, this impacts developer morale: imagine working for days to shave off 10% of your own code’s load time, only to see a giant block of third-party code added that dwarfs the impact of that painstaking effort. And then (if you work for a media site), seeing this same pattern repeat itself over and over again every few months.

### Should you include it?

If you need to use a feature like Facebook Comments, there’s no getting around the need to load the Facebook SDK. But depending on how your site is structured, you may be able to limit the SDK’s performance impact by only loading it when needed (e.g. once the user has scrolled down to the point where comments should become visible).

If you want to use the Like button, stop and reconsider. Facebook no longer displays Likes of a page prominently (or, in most cases, at all) on user timelines. It’s better to [use a simple custom Share button or link](https://jonsuh.com/blog/social-share-links/#use-share-urls), and as a side benefit, doing so will prevent Facebook from tracking all visits to your page and interfering with the privacy of your users. Sites that have eliminated the Like button have failed to identify any negative impact of doing so when it comes to Facebook traffic referrals.











* * *







_CORRECTION to title: Originally I titled this “Why 16% of the code on the average site belongs to Facebook, and what that means”. As some rightly pointed out, this implies that a full 16% of the Javascript on all sites on the Internet (or at least of all the top sites), consists of the Facebook Javascript SDK. This was not my intent and I can see how it came across as overly sensationalist._

_Hopefully the new title makes clearer that the Facebook SDK measures up at 16% of the size of the average site’s Javascript, and no longer implies that it represents 16% of total site Javascript across the internet. As_ [_David Gilbertson notes here_](https://medium.com/@david.gilbertson/maybe-i-missed-something-but-isnt-your-article-s-title-100-false-d2dcc51fc9ed)_, the actual global number would be much smaller — 0.96%. He also raises a good point re: caching: the Facebook Javascript SDK is not cached optimally at all, it only gets cached in the most ideal fashion for up to 20 minutes, after which the user’s browser checks back with Facebook’s servers to verify that it already has the latest version._








