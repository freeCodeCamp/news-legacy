---
author: Quincy Larson
authorTwitter: https://twitter.com/ossia
authorFacebook: https://facebook.com/10100956570023241
title: "Free Code Camp Christmas Special: Giving the Gift of Open Data"
subTitle: "To the countless researchers and data scientists who have politely asked for our data over the past few months: Merry Christmas!..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*qp-tyBPC63nmozLLlTpKDg.jpeg
url: https://medium.freecodecamp.org/free-code-camp-christmas-special-giving-the-gift-of-data-6ecbf0313d62
id: free-code-camp-christmas-special-giving-the-gift-of-data-6ecbf0313d62
date: 2015-12-26T05:41:08.518Z
tags: [
  "Design",
  "Data",
  "Data Science",
  "Technology",
  "Education"
]
---
# Free Code Camp Christmas Special: Giving the Gift of Open Data







![](https://cdn-images-1.medium.com/max/2000/1*qp-tyBPC63nmozLLlTpKDg.jpeg)







To the countless researchers and data scientists who have politely asked for our data over the past few months: Merry Christmas!

Releasing these data to the public has been a goal of ours since we launched our open source community 14 months ago.

Today, we’re thrilled to announce that we’ve opened up one of the largest chunks of our data — our campers’ progress and solutions.

#### The Data

Here’s what this dataset looks like:

<pre name="ba1f" id="ba1f" class="graf graf--pre graf-after--p">[  
  {  
    “name”: “Waypoint: Say Hello to HTML Elements”,  
    “completedDate”: 1445854025698,  
    “solution”: “<h1>Hello World</h1>\n”  
  }  
]</pre>

It’s one big JSON array.

Inside that array are more than 100,000 subarrays — one for each camper who’s completed at least one challenge since we overhauled our schema a few months ago.

Each subarray contains an individual camper’s completed challenges as a series of JavaScript objects.

Each of these objects has the name of the challenge, the date the camper first completed it (as a Unix timestamp, in milliseconds), and their solution, which will either be a string of code or a URL leading to a live demo on CodePen, Heroku or GitHub.

While it is possible to identify individual campers based on their solutions, all of this information is already publicly available on campers’ code portfolios. We haven’t included any private information here—we’ve just made this public information easier to work with.

We take privacy seriously, and recently added the ability for campers to make all of their solutions private. Since doing so prevents our community (and employers) from being able to code-review these campers’ work, we disable their certifications. Fortunately, only about 1,000 campers have chosen to make their solutions private. Still, we were careful not to include these solutions in this dataset.

#### Insights ahoy!

As developers, most of us are still newcomers to the deep and evolving field of data science. But even with our limited understanding of what’s possible, we’ve still been able to come up with a few insights you could glean from this dataset:

*   Can our campers be broken down into cohort groups based on challenge completion behavior?
*   Is there a challenge completion tempo that typifies high-achieving campers? One that typifies slow-and-steady campers?
*   Many campers will leave Free Code Camp for several months due to burnout, or life getting in the way, then return a few months later. Are there any meaningful patterns here?
*   What proportion of campers complete challenges mostly in order, as opposed to skipping around?
*   What proportion of campers dive directly into harder challenges, then work backward until they’re able to start successfully completing challenges?
*   Are there any challenges that seem excessively hard, and require significantly more time investment than adjacent challenges?
*   Are there any challenges that are disproportionately popular, considering their later position within [our curriculum](http://www.freecodecamp.com/map)?
*   Which challenges support the most diverse solutions?
*   Are campers more likely to use Object Oriented Programming solutions or Functional Programming solutions?

#### Getting the data

You can download the dataset (a 344 megabyte tar.gz file) using BitTorrent with our magnet link on [Academic Torrents](http://academictorrents.com/details/030b10dad0846b5aecc3905692890fb02404adbf).

Note that this dataset licensed under the [Open Database Commons Open Database License (ODbL)](http://opendatacommons.org/licenses/odbl/summary/).



![](https://cdn-images-1.medium.com/max/1600/1*Rus5F3hWZeT0sEllCld1Hw.jpeg)



We plan to update this dataset every quarter or so. And going forward, we plan to make as much of our data open as possible.

We welcome feedback from anyone interested in studying our data. If you have ideas for other data we could share, or how we can make analyzing it easier, please leave a comment.

_If you liked this, click the💚 below. Follow me and Free Code Camp for more articles on technology._



![](https://cdn-images-1.medium.com/max/1600/1*31StU5CNIHk8VDkSHWO6nA.gif)










