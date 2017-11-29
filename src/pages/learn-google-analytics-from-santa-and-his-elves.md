---
author: Christian-Peter Heimbach
authorTwitter: https://twitter.com/cpheimbach
authorFacebook: none
title: "Learn Google Analytics from Santa and his Elves"
subTitle: "The holidays are here! It’s time to grab some egg nog, kick back by a fire place, and toast to all the coding you crammed into 2016...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*ejm2tkSklF3ReBlktCIzIw.jpeg
url: https://medium.freecodecamp.org/learn-google-analytics-from-santa-and-his-elves-59ea82fbd99a
id: learn-google-analytics-from-santa-and-his-elves-59ea82fbd99a
date: 2016-12-20T18:41:46.006Z
tags: [
  "Marketing",
  "Google Analytics",
  "Christmas",
  "Tech",
  "Startup"
]
---
# Learn Google Analytics from Santa and his Elves







![](https://cdn-images-1.medium.com/max/2000/1*ejm2tkSklF3ReBlktCIzIw.jpeg)

Santa studying data ([Image credit](http://www.pexels.com))







The holidays are here! It’s time to grab some egg nog, kick back by a fire place, and toast to all the coding you crammed into 2016.

But wait! Before you sink into a carbohydrate-induced hibernation, let me tell you about a project that’s taking the North Pole by storm.

Rumor has it that Santa spent his summer break reading up on data and analytics. You didn’t think his global distribution empire ran purely on magic, did you?

Some tech savvy elves are indulging Santa by setting up Google Analytics in time for the big night.

You see, Santa, his elves, and children everywhere have a secret shared website that they all use to register and review wishes. I’m sworn not to reveal the actual URL, so we’ll just call it www.wish.io.

On this site, children can:

1.  See the benefits of wish.io
2.  Have an opportunity to register as a good kid
3.  Choose a present they wish to receive
4.  Review their choice
5.  Submit their wish

As you can imagine, Santa and the elves can learn a lot from Google Analytics as to how they can further improve wish.io. Here’s how they’re putting it to work.

### Setting Up Google Analytics for Santa

To get Santa’s secret page ready for tracking, the elves need a Google Analytics tracking code. This is a Javascript code snippet (also often referred to as ‘pixel’ or ‘tracking snippet’) that you get after [signing up](https://www.google.com/analytics/analytics/) for Google Analytics.

You can set up as many as 100 **accounts**, which can all contain multiple **properties**. These properties in turn can contain multiple **views**. This can seem confusing at first (especially if you’re an elf) but it’s not so bad if tackled one step at a time.

The elves will accomplish this in the admin area of Google Analytics. Let’s take a look.







![](https://cdn-images-1.medium.com/max/2000/1*vqMfScjfVqvJhQRiXGnnaQ.png)

A screenshot of the Admin area of Google Analytics







Account properties describe websites, mobile apps, or other systems, each represented by a tracking code and unique ID — called a UA code. Here you can set up the property “Santa’s wish.io”. If Santa later decides to build subdomains or separate-but-related pages — like Santa’s naughtylist.io — he can set up an additional property here to avoid mixing data about good and naughty children.

You can define your user management for each level, but permissions are inherited per detail (account > property > views).

The elves have to think carefully about who should be able to see and modify what. It only takes one little green user who doesn’t know what they’re doing to mess up the settings and data.

So Santa makes sure that all the elves read the [Google Analytics permission guide](https://support.google.com/analytics/answer/2884495?hl=en) before they can add users.

Google Analytics offers several views that the elves can use for a variety of purposes.

First, they can apply **filters**. This is useful because the elves generate a lot of internal traffic that needs removed, so that Santa can instead focus on the session data from children who are visiting the site.

Second, the elves can define **goals** and **segments** at the view level, so that each team can access the data that’s most interesting for them. After all, the logistics elves want a different sort of information than the front-end elves.

You can configure much more here, such as automatic reports and custom calculated metrics. But that’s a job for next summer.

### Elf Best Practices in Setting Up Views

Next, the elves have to set up three standard views: www wish.io (Master), www wish.io (Test), and www wish.io (Raw).

These three views are essential due to the way Google Analytics operates: it applies filters between the steps of data collection and data processing.

This means that if the elves have a faulty filter, their data will vanish. For this reason, they need to set up a Raw view and never touch it so they have a fallback for emergencies. Every elf knows that the test view is for testing, and the master one is there to work with from day to day.



![](https://cdn-images-1.medium.com/max/1600/1*_9zpmKMppf8byQ4j6czkgg.png)

A screenshot of adding new view with Google Analytics



### How the Elves Track Kids

With the backend of Google Analytics in place, the elves add a tracking snippet e of wish.io.

Yes, this is a gross violation of [COPPA](https://en.wikipedia.org/wiki/Children%27s_Online_Privacy_Protection_Act). But Santa doesn’t care about our laws. Heck, he doesn’t even care about the laws of physics.

They find the tracking code in the property section of the admin panel, then paste it into their website’s layout code.

The elves also take the vital step of ensuring that the script is located just before the `</head>` closing tag. Usually, developers don’t want any render-blocking scripts here, but this is a special exception. The Google Analytics script is asynchronous, and ultimately the elves want to catch all traffic. They can’t risk missing the information of children who might leave a page before all scripts are loaded.

The **bounce rate** — which tracks the proportion of visitors who drop out of a page without engaging with any of the content — is an important metric. It might show the QA and front-end elves that something is wrong with the page. It also helps the marketing elves check whether a certain activity was poorly targeted.



![](https://cdn-images-1.medium.com/max/1600/1*zt0sz8pIBhIFAUCcgPhgJw.png)

A screenshot of the Google Analytics tracking code section



### Navigating Google Analytics

With tracking integrated, the elves were set to look at the initial data. Even though Google Analytics starts collecting real time data immediately, the elves decide to give it at least 24 hours so it can gather a meaningful amount of data.

Now the elves have to get familiar with Google Analytics, its various menus and data it displays.







![](https://cdn-images-1.medium.com/max/2000/1*ZO_XNfpd2qcI_pMyhvYHjQ.png)

Screenshot: Google Analytics Reporting Overview (Wish.io renamed Demo Account)







The left navigation menu shows the main sections the elves can use to look at a website’s data. The most important elements are Audience, Acquisition, Behavior, and Conversions.

This menu is also home to the Realtime and Intelligence Events view. Intelligence Events will cease to exist in Google Analytics soon, so Santa and the elves decided not to bother with it. The Realtime view is nice to show on flat-screens in Wish Operations HQ and boost moral among the elves. But meaningful decisions demand a longer-term view.

So the elves head back to Google Analytics main sections to check out what other tools it offers.

### Audience Overview

When the elves open a new property’s view, they see the Audience Overview by default. Fortunately, the overview pages are all similar, making the learning process a little smoother for elf and human alike.



![](https://cdn-images-1.medium.com/max/1600/1*Hk0VE1STP3MDHIv3za9Cbw.png)



In the area marked “1” (above), the elves get the most important information about their audience. How many users came to their page, how long they spent on it, and pages they saw per session etc. All this is nicely presented in graphs, so the elves can spot peaks, lows, and overall trends.

Looking at annotation (2), you’ll see that it’s possible to segment these overviews. This is true for all the main sections in Analytics. Now Santa can see whether kids browsing wish.io on the mobile phones they received last year behave differently to other users. The creation of segments is an advanced topic, but can be very rewarding. Segments can unearth context from the data which is otherwise only presented in rough averages. Note: You can use [Google’s in-depth guide on segments](https://support.google.com/analytics/topic/3123779?hl=en&ref_topic=6175347) or check the Gallery to import popular community-made segments.

Below the summary values (3), the elves have quick access to more detailed information each category offers. For example, they can see more demographics by country, or the technical context of users.

Even more detailed insights are available in the sub-categories of the left navigation bar (4).

One aspect of the detailed audience data added fuel to an already hot debate the elves were having over summer: the big question of which version of Internet Explorer wish.io should be backwards compatible with.

You can no doubt imagine how heated _that_ became. Thankfully, Google Analytics has replaced the bickering with data driven decisions. Just use the left navigation and check out: Audience > Technology > Browser/OS and click on “Internet Explorer” for version details.



![](https://cdn-images-1.medium.com/max/1600/1*jzP6fkimMEz_AWFTY07xsA.png)

Screenshot: Internet Explorer Sessions and Visitors per Browser Version



Luckily, Google Analytics records details of a browser’s specific version. Santa and the elves are pleased that 95% of Internet Explorer visitors use version 11\. They also assuming that the good kids (who are the main audience for wish.io, of course) are diligent enough to either update Internet Explorer regularly, or to just use a better browser. Of course, the browser share for visitors to the upcoming naughtylist.io site will need to be evaluated separately.

There are lots of more great things the elves can learn here. For example, Google can show the kids’ Gender and Interest data (activated in the property settings under the admin panel — make sure you comply with your local laws, unlike Santa). It also allows them to delve much deeper into acquisition data and benchmark audience behavior based on the different channels visitors arrived from.

### Acquisition

To learn more about where visitors came from to access wish.io, Santa can look at the Acquisition Overview.







![](https://cdn-images-1.medium.com/max/2000/1*xO5YqzC9kzUZ7u7P1kYneQ.png)

Screenshot: Acquisition View showing visitors by traffic source







This view focuses on sources of traffic.

Google defines nine main channels in which it aggregates these sources:

**Direct:** Usually people typing the URL or using a bookmark.

**Organic Search:** People using Google or Bing, and clicking an organic search result link.

**Referral:** Someone following a link on another website or blog.

**Social:** Visitors originating from sites listed as social (click the ‘Social’ link to see the list).

**Email:** All visits coming straight from emails.

**Paid Search:** People accessing pages via paid links on Google and partner sites.

**Display:** People that clicked paid advertising banners.

**Affiliates:** Traffic received from affiliate partners that promote wish.io

**Others:** A summary of advertising traffic classed as “special.” For example, traffic bought on a cost per action rate.

It’s important to understand that these groupings are the result of a set of default rules stating which medium counts for which traffic group.

The elves can fabricate links for social or advertising purposes — so-called UTM links — which are also summed up in these groups. This way they can judge how successful an ad or blog post was.

For convenience, they use [Google’s Link Builder tool](https://ga-dev-tools.appspot.com/campaign-url-builder/). To prevent false counting, they need to be aware of the [grouping rules](https://support.google.com/analytics/answer/3297892?hl=en&ref_topic=3125765) and set ‘utm_medium’ correctly.

Once everything is up and running, the elves can discover lots of interesting details about their channels. They can see which social channels contributed most to wish.io, or which campaigns were most successful. They can even optimize their AdWords’ investments and see which landing pages kids usually arrive on from various sources.

The next logical step for Santa is to gain — and act upon — a deeper understanding of exactly how visitors to his sites behave.

### Tracking kids’ behavior on wish.io

For Santa and his elves, it’s always been hard to keep up with the many millions of different wishes kids might come up with. So it’s important for them to understand trends, popular choices, evergreens, and also potential errors across their millions of pages.







![](https://cdn-images-1.medium.com/max/2000/1*GgBDMfLkazLN1L4-Ps_kxQ.png)

Screenshot: Behavior View showing visitors by page







Each elf department has its own information that is of interest.

The front-end and QA elves should always keep a close eye on bounce rates, average time on page, and the speed score of their most important pages.

Every front-end elf hates the lengthy SEO meetings triggered by wish.io’s loading times getting out of hand. So it’s helpful for them to explore the Site Speed subcategory. Google delivers great insights by browser, country, and page — as well as suggestions on how to improve.

UX elves can get an insight into priority pages in the Behavior section. They can also look at the flow of where people enter Santa’s page, their journey, and where they exit.

But the most exciting topic for them is building content experiments. Basically, they can ask the front-end elves to build alternative versions of the same page, then automatically test these versions against measurable objectives.

For example, it might be of interest to find a page variant where kids stay longer or submit wishes at a better rate. They can set up initial experiments with the analytics tool, which has a [simple guide](https://support.google.com/analytics/topic/1745146?hl=en&ref_topic=1120718). For advanced use cases, elves can carry out content experiments via the [well-documented analytics.js API](https://developers.google.com/analytics/devguides/collection/analyticsjs/experiments).

Finally, the Behavior tab also offers event tracking, which the marketing elves _love_. Events can be sent back to Google Analytics whenever kids initiate an important action that doesn’t trigger a new pageview.

For example, when kids click download buttons, submit their “I have been a good kid” forms, amend a wish, and more. Events are straightforward function calls to the analytics API. Elves add them to their Javascript event listeners and callbacks that control the interactivity of their page. All of this is described over at [Google’s event tracking guide](https://developers.google.com/analytics/devguides/collection/analyticsjs/events).

Marketing elves love event tracking because it puts them in a better position to configure the all-important Conversions element of Google Analytics.

### Conversions

Setting up the Conversion section in the admin panel took some effort from Santa and his team, but it was worth it. Conversions will help the elves to understand the “business” effects of all formerly looked at insights. This closes the loop between having a lot of data and understanding how it leads to the ultimate goal: happy kids.







![](https://cdn-images-1.medium.com/max/2000/1*kU84m1qJD6ilp3EwO_IBWQ.png)

Screenshot: Conversions showing goal completion by location







Goals are not set by default in Google Analytics. Users need to define them in the admin panel. Goals are defined by the underlying type of interaction. This could be either the viewing of a certain page (e.g. thankyou.html), a behavior (minimum duration on site, amount of pages per session), or when an event is recorded. You can even define a series of destinations to show as a single goal.



![](https://cdn-images-1.medium.com/max/1600/1*L3owaKRoWhaWPJJFm2ODAQ.png)



This is important when you want to track how many children have gone through a whole conversion “funnel.” For example, they enter the registered kids’ area, browse through the wish options, and successfully submit a wish.

With this funnel goal tracked, the visualization shows how children go through every step. It also reveals to what extent (and when) they drop out, and where they go from there.



![](https://cdn-images-1.medium.com/max/1600/1*cr59vM5jG-TPlgHe_z0GeA.png)



It’s important to note that goals should be defined in a way that they don’t overlap each other. If one event generates the counting of two goals, your conversion rates can be too high.

In addition to using Goals, it’s possible to wire the entire Santa ecommerce system into Google Analytics. But that’s a job for the new year. Once that deep integration is up and running though, Santa & Co. will gain insights down to a per-wish “order” level, and will even be able to track wish returns.

Another useful Google Analytics view was the Multi Channel Funnels sub-category. Before Google Analytics, the marketing elves often argued over budget allocation, and who contributed the most overall wishes submitted.

The brand advertising elves complained that their work not only impacted direct traffic, but search and social as well. They figured some children initially came via their social media posts, but returned later to submit wishes by typing the wish.io URL.

So why should the last elf involved take all the credit? They shouldn’t. Which is why every marketing meeting in the North Pole now includes a look at the Assisted Conversions and Top Conversion Paths. Here the elves can see not only their direct conversion value, but also the value of conversions they helped to close.







![](https://cdn-images-1.medium.com/max/2000/1*nB345KXAMPBdQcHe0YypYw.png)

Screenshot: Assisted Conversions per traffic source







### A job well done

Thanks to his Google Analytics project, Santa has dubbed 2016 as “the year of data driven decisions.” He’s happy his elves have turned once-heated discussions into data competitions and experiments.

From now on, he’ll be using the power of data to encourage his team’s scientific spirit — and to find ever-optimized processes for boosting happiness.

Now all that remains is for me to wish you and your loved ones’ happy holidays. I hope that this little tale from the North Pole has inspired you to make your 2017 even more successful, and data driven.

Now, let’s all slip into our [ugly holiday sweaters](https://medium.freecodecamp.com/the-geekiest-ugly-sweater-ever-34a2e591483f) and embrace the holiday spirit.

Special Thanks to Craig Rennie of [Draft Punk](https://www.draft-punk.com) and Quincy at [Free Code Camp](https://www.freecodecamp.com/) for all their editing efforts. May your holidays be extra happy!

**Disclaimer:** _This story is written in a holiday theme for entertainment purposes only. Despite the above report about Santa, elves, and children it is important to note that Google Analytics doesn’t track or share audience information of anyone under 18._

_All data and images are courtesy of Google. The data shown here is available for every analytics account via accessing the_ [_Google Analytics Demo Account_](https://support.google.com/analytics/answer/6367342?hl=en)








