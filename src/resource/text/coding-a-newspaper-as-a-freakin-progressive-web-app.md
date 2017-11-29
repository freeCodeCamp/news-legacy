---
author: James Y Rauhut
authorTwitter: https://twitter.com/seejamescode
authorFacebook: none
title: "How to Code a Progressive Web App News Website"
subTitle: "For the last two weeks, I worked on a personal project called The Global Upvote. The Global Upvote aggregates top voted stories from acro..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*UIn33AVqRy28zwx7SIojaw.png
url: https://medium.freecodecamp.org/coding-a-newspaper-as-a-freakin-progressive-web-app-e456d4a2b9cd
id: coding-a-newspaper-as-a-freakin-progressive-web-app-e456d4a2b9cd
date: 2017-09-15T19:06:46.015Z
tags: [
	"Web Development",
	"JavaScript",
	"Tech",
	"React",
	"Startup"
]
---
# How to Code a Progressive Web App News Website











![](https://cdn-images-1.medium.com/max/2000/1*UIn33AVqRy28zwx7SIojaw.png)












For the last two weeks, I worked on a personal project called The Global Upvote. The Global Upvote aggregates top voted stories from across the web, summarized and updated every sixty seconds.

This article focuses on how I was able to implement The Global Upvote for aspiring developers. I wrote a separate article about [design process behind this](https://medium.com/@seejamescode/designing-a-newspaper-as-a-freakin-progressive-web-app-22acf4eb5a68). These two stories may seem completely separate. But the design and development process was deeply intertwined in real life.

Note that I’ve written a sister article about how to design this Progressive Web App news website [here](https://medium.freecodecamp.org/designing-a-newspaper-as-a-freakin-progressive-web-app-22acf4eb5a68).

### Finding the Data

In design, there is a concept of content-first. Content-First Design says you need to design around the content. For me to do that, I needed to ensure I could grab the correct data. Before I started on any of the actual front-end work, I worked with the Reddit API and my Node server.

I knew there were two parts of content I wanted to capture from Reddit:

1.  The top posts of r/WorldNews for their headlines
2.  A bot user’s comment that summarized the story












These objects were sweet, sweet Reddit data.



Luckily, there was a great Node wrapper for the API called [Snoowrap](https://github.com/not-an-aardvark/snoowrap). It was easy to use and had me [getting content](https://github.com/seejamescode/global-upvote/blob/master/server.js#L33-L92) in no time.

One big thing I learned on this project was request management. In the past, I had used my Node server as a API requester every time a user would visit my app. But, I had an obvious epiphany.

I could hold on to the small amount of data (stories) on my server and update it once a minute with a simple `setInterval`. This stopped pushing the risk of abusing my Reddit API limits and shortened story load times because I would not have to ping the Reddit API every time.

### Keeping It Progressive

Wanna know the cheap, dirty secret about making a progressive web app in React? Just use [Create-React-App](https://github.com/facebookincubator/create-react-app). The contributors on that project have done a wonderful job of adding service workers for near-instant loads and a manifest file for your meta data, and optimizing the Webpack bundling the best they can. In the past, I had to do a lot of work for PWAs ( Progressive Web Apps) and even wrote a [tutorial](https://medium.freecodecamp.org/how-to-crank-your-progressive-web-apps-google-lighthouse-score-up-to-100-cfc053eb7661) on perfecting them.

This was the first time I worked on an offline-friendly mode for Chrome and Firefox to do stuff like read articles before my computer connected to wifi.

The first half was to do things whenever the [internet connection](https://github.com/seejamescode/global-upvote/blob/master/src/App.js#L156-L157) changed using event listeners. That way, a new connection to the internet could trigger fetching stories, and a lost connection could notify the user they are offline.

The second half of offline-mode was saving new stories to the user’s device every time they were fetched. This was my first time using [LocalStorage](https://github.com/seejamescode/global-upvote/blob/master/src/App.js#L192-L194), and I was pleasantly surprised by how easy it was.














A last bit of the PWA to get done was improving the perceptual speed index. You can see this user-centric metric by opening Chrome DevTools and running an [audit](https://medium.com/design-ibm/the-quick-new-way-designers-can-test-user-centric-metrics-37e78daf48df). To improve this score, I made skeletons that would appear when my app’s state was [fetching](https://github.com/seejamescode/global-upvote/blob/master/src/Placeholder.js#L8).

### Plugging a Plugin

I had determined that I wanted the user to be able to save the experience as their new tab for Chrome and Firefox. The browsers natively support setting a home page. But that does not give you control of the URL bar immediately. This was an important detail because a user does not want to have to click the URL bar every time they open a new tab.














I feared that I was about to dive into the deep-end of browser extension development. This was something I was not familiar with besides a grid checker to help my visual skills. Once again, this solution ended up being handed to me on a silver platter. Google includes a similar extension in their [sample downloads.](https://developer.chrome.com/extensions/samples) I was working in no time with the [Global Upvote Tab Extension](https://github.com/seejamescode/global-upvote-tab). No changes were even needed for the submission to Firefox’s store!

### The Final Outcome

From a development standpoint, I loved all the different solutions I could put together for [The Global Upvote](https://www.globalupvote.com/). These solutions tell me that the web community is getting better at working together to make development experience less frustrating. Acing the Chrome DevTools Audit, formerly the Google Lighthouse Extension has also gotten the easiest it has ever been.














[All source code](https://github.com/seejamescode/global-upvote) has been open-sourced in case you want to dig around or make it work for you.

Several quick things to note:

*   Where are the CSS files?!   
    There are none. I use [Styled Components](https://www.styled-components.com/) to attach styles directly to their component!  

    Check out this talk I gave at IBM about why CSS-in-JS is insanely good: [https://vimeo.com/230614037](https://vimeo.com/230614037)
*   Where is the source code for your tab extension?   
    Check it out in the separate repo for [Global Upvote Tab](https://github.com/seejamescode/global-upvote-tab).
*   How do I get started running this locally?  
    Check out the documentation for [Create-React-App](https://github.com/facebookincubator/create-react-app#getting-started) if you haven’t already.  
    Much wow. You also need a file called `keys.json` in the root directory with your information for [Snoowrap](https://github.com/not-an-aardvark/snoowrap). It should look like this:

<pre name="beae" id="beae" class="graf graf--pre graf-after--li">{  
  "userAgent": "random-term",  
  "clientId": "FromYourRedditAPISettings",  
  "clientSecret": "FromYourRedditAPISettings",  
  "username": "YourRedditUsername",  
  "password": "YourRedditPassword"  
}</pre>

I hope you enjoyed this case write-up!

Again, I’ve written a sister article about how to design this Progressive Web App news website [here](https://medium.freecodecamp.org/designing-a-newspaper-as-a-freakin-progressive-web-app-22acf4eb5a68).

For further information: Feel free to contact me by the comments, [email](mailto:james@seejamescode.com), or [@seejamescode](https://twitter.com/seejamescode). I work in ATX for IBM Design and always love conversation with the web design community. Leave any questions you may have and I will try to answer them for you!








