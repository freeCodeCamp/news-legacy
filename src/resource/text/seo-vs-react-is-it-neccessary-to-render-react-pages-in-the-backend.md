---
author: Patrick Hund
authorTwitter: https://twitter.com/wiekatz
authorFacebook: none
title: "SEO vs. React: Web Crawlers are Smarter Than You Think"
subTitle: "Many people still worry that if you build a websites using tools like React, Angular, or Ember, it will hurt your search engine ranking...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*T1b83o47E1AI0lTpwzHVvA.png
url: https://medium.freecodecamp.org/seo-vs-react-is-it-neccessary-to-render-react-pages-in-the-backend-74ce5015c0c9
id: seo-vs-react-is-it-neccessary-to-render-react-pages-in-the-backend-74ce5015c0c9
date: 2016-10-19T16:26:13.806Z
tags: [
  "JavaScript",
  "Web Development",
  "React",
  "SEO",
  "Tech"
]
---
# SEO vs. React: Web Crawlers are Smarter Than You Think



![](https://cdn-images-1.medium.com/max/1600/1*T1b83o47E1AI0lTpwzHVvA.png)



Many people still worry that if you build a websites using tools like React, Angular, or Ember, it will hurt your search engine ranking.

The thinking goes something like this: the web crawlers that search engines use won’t be able crawl a page properly unless it’s completely rendered in the user’s browser. Instead, they’ll only see the HTML code delivered from the backend.

If that HTML code contains nothing more than a couple of meta tags and script tags, the search engine will assume your page is basically blank and rank you poorly.

I commonly see Search Engine Optimization (SEO) consultants recommend that you render your page on the backend, so that web crawlers can see a lot of nice HTML code that they can then index.

To me, this advice seems unreasonable and unrealistic. It’s 2016\. Users expect pages to be dynamic and provide them with a snappy user experience. They don’t want to wait for a new HTML page to load every time they click on something.

So is the statement “client-side rendering hurts your page rank” still valid?

### Doing The Research



![](https://cdn-images-1.medium.com/max/1600/1*WjGkGUHaw5k-LRVPXPdmdw.gif)



First, a disclaimer: I’m by no means an SEO expert. But I did read up on the topic a bit, and here’s what I found.

Here’s an [announcement](https://webmasters.googleblog.com/2015/10/deprecating-our-ajax-crawling-scheme.html) from Google on their webmaster blog from October 2015:

> Today, as long as you’re not blocking Googlebot from crawling your JavaScript or CSS files, we are generally able to [render and understand your web pages like modern browsers](http://googlewebmastercentral.blogspot.com/2014/05/understanding-web-pages-better.html). To reflect this improvement, we recently [updated our technical Webmaster Guidelines](http://googlewebmastercentral.blogspot.com/2014/10/updating-our-technical-webmaster.html) to recommend against disallowing Googlebot from crawling your site’s CSS or JS files.

Here’s a Search Engine Land [article](http://searchengineland.com/tested-googlebot-crawls-javascript-heres-learned-220157) from in May of 2015:

> We ran a series of tests that verified Google is able to execute and index JavaScript with a multitude of implementations. We also confirmed Google is able to render the entire page and read the DOM, thereby indexing dynamically generated content.

> SEO signals in the DOM (page titles, meta descriptions, canonical tags, meta robots tags, etc.) are respected. Content dynamically inserted in the DOM is also crawlable and indexable. Furthermore, in certain cases, the DOM signals may even take precedence over contradictory statements in HTML source code. This will need more work, but was the case for several of our tests.

These two sources suggest that it is, indeed, safe to use client-side rendered layout.

### The Preactjs.com Test

I recently tweeted a lament about SEO consultants nitpicking about my beloved React. To be precise, I’m in the process of migrating to [Preact](http://www.preactjs.com/), a light-weight alternative to Facebook’s React. I got this reply from [Jason Miller](https://twitter.com/_developit), one of the developers working on Preact:





<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/955d2ba28194547a63d59534631dc0c5?postId=74ce5015c0c9" data-media-id="955d2ba28194547a63d59534631dc0c5" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F572202555908710400%2Fx_cLOj41_bigger.jpeg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Aside from the blog article from Search Engine Land that I’ve quoted above, Jason tweeted a link to a Google search for the [Preact home page](http://www.preactjs.com), which looks like this:



![](https://cdn-images-1.medium.com/max/1600/1*BmlCGUpoCeo-M-mJh4SEmQ.png)



This page is rendered entirely client-side, using Preact, as a look at its source code proves:

<pre name="5679" id="5679" class="graf graf--pre graf-after--p"><!DOCTYPE html><html><head></pre>

<pre name="3a53" id="3a53" class="graf graf--pre graf-after--pre"><meta charset="utf-8"></pre>

<pre name="1758" id="1758" class="graf graf--pre graf-after--pre"><title>Preact: Fast 3kb React alternative with the same ES6 API. Components &amp; Virtual DOM.</title></pre>

<pre name="0c0c" id="0c0c" class="graf graf--pre graf-after--pre"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimal-ui"></pre>

<pre name="8296" id="8296" class="graf graf--pre graf-after--pre"><meta name="mobile-web-app-capable" content="yes"></pre>

<pre name="655e" id="655e" class="graf graf--pre graf-after--pre"><meta name="apple-mobile-web-app-capable" content="yes"></pre>

<pre name="b3a7" id="b3a7" class="graf graf--pre graf-after--pre"><meta name="format-detection" content="telephone=no"></pre>

<pre name="6b36" id="6b36" class="graf graf--pre graf-after--pre"><meta name="theme-color" content="#673AB8"></pre>

<pre name="9ec6" id="9ec6" class="graf graf--pre graf-after--pre"><link rel="manifest" href="/manifest.json"></pre>

<pre name="c871" id="c871" class="graf graf--pre graf-after--pre"><link rel="icon" type="image/png" href="/assets/app-icon-192.png" sizes="192x192"></pre>

<pre name="cd6a" id="cd6a" class="graf graf--pre graf-after--pre"><script>(function(url){window['_boostrap_'+url]=fetch(url);})('/content'+location.pathname.replace(/^\/(repl)?\/?$/, '/index')+'.md');</script></pre>

<pre name="5394" id="5394" class="graf graf--pre graf-after--pre"><link rel="shortcut icon" href="/favicon.ico"></pre>

<pre name="6c9d" id="6c9d" class="graf graf--pre graf-after--pre"><link href="/style.6bae35e4ff9d687cb418.css" rel="stylesheet"></pre>

<pre name="b587" id="b587" class="graf graf--pre graf-after--pre"></head><body></pre>

<pre name="f3a2" id="f3a2" class="graf graf--pre graf-after--pre"><script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-6031694-20', 'auto');ga('send', 'pageview');</script></pre>

<pre name="4ec7" id="4ec7" class="graf graf--pre graf-after--pre"><script type="text/javascript" src="/bundle.a0afd09fd48712ed0f26.js"></script></pre>

<pre name="1e05" id="1e05" class="graf graf--pre graf-after--pre"></body></html></pre>

If the Googlebot were not able to read the HTML code rendered by Preact, it wouldn’t show more than the contents of the meta tags.

And yet, here’s what the Google results look like when searching for _site:preactjs.com_:



![](https://cdn-images-1.medium.com/max/1600/1*nBjY1kfpImRn2lsPdSdkGg.png)



Another [article](http://andrewhfarmer.com/react-seo/) by [Andrew Farmer](https://twitter.com/ahfarmer) from March 2016 warns about lacking JavaScript support by search engines other than Google:

> In my research I couldn’t find any evidence that Yahoo, Bing, or Baidu support JavaScript in their crawlers. If SEO on these search engines is important to you, you’ll need to use server-side rendering, which I’ll discuss in a future article.

So I decided to try out Jason’s test with other search engines:

### ✅ Bing

Andrew’s warning regarding Bing seems insubstantial. Here are the [Bing results](http://www.bing.com/search?q=site%3Apreactjs.com) when searching for _site:preactjs.com_:



![](https://cdn-images-1.medium.com/max/1600/1*bCcM0TRVImaOF_hVs8HPtg.png)



### ✅ Yahoo

And the [Yahoo results](https://de.search.yahoo.com/search?p=site%3Apreactjs.com&fr=yfp-t-911) when searching for _site:preactjs.com_:



![](https://cdn-images-1.medium.com/max/1600/1*TYNb6bd-o3jQG-sPMGVEIA.png)



### ✅ Duck Duck Go

And the [Duck Duck Go results](https://duckduckgo.com/?q=site%3Apreactjs.com&t=h_&ia=web) when searching for _site:preactjs.com_:



![](https://cdn-images-1.medium.com/max/1600/1*WjfXMyYZz_0W1q_1std4QA.png)



### ⚠️ Baidu

Chinese search engine Baidu does have problems with preactjs.com. Here are [its results](http://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=site%3Apreactjs.com&rsv_pq=95cb9d6800010ec6&rsv_t=6911YYLRspihOnU5UaDpw8Yo%2FPGDwlfONvdplHywgiMlqY198%2BLvxU6yzwI&rqlang=cn&rsv_enter=1&rsv_sug3=17&rsv_sug2=0&inputT=37643&rsv_sug4=37643) when searching for _site:preactjs.com_:



![](https://cdn-images-1.medium.com/max/1600/1*LNI0cw0ZM42y-0uoYRosCQ.png)



So it would seem that unless ranking high in what is essentially a China-only search engine is a priority for you, there’s nothing wrong with rendering your web pages on the client-side using JavaScript, as long as you follow some basic rules (quoted from [Andrew Farmer’s blog post](http://andrewhfarmer.com/react-seo/)):

*   Render your components before doing anything asynchronous.
*   Test each of your pages with _Fetch as Google_ to ensure that the Googlebot is finding your content

Thanks for reading!

### Update 25th October 2016

[Andrew Ingram](https://medium.com/@andrewingram) ran the same tests that I ran an came to a different conclusion.

Quote from Andrew:

> Here’s how many pages various search engines have indexed using the query “site:preactjs.com”

> Google: 17 Bing: 6 Yahoo: 6 Baidu: 1

> One of the Google results is an error page, but it presumably can’t be de-indexed automatically due to there not yet being a way of declaring a 404-equivalent in SPAs.

> I’ve also read (I can’t recall where) that Google has a latency of a few days when it comes to indexing SPAs compared to server-rendered apps. This may not be a problem for you, but it’s worth knowing about.

His working hypothesis is that search engine robots other than Google are able to **index** client-side rendered pages, but not **crawl** them, i.e. follow links and index other pages of a website.

→ [Follow the discussion on Hacker News](https://t.co/IzQFvr11fL)

### Acknowlegements

Thanks to Adam Audette ([Search Engine Land](http://searchengineland.com/)) and [Andrew Farmer](http://andrewhfarmer.com/) for their excellent blog articles from which I quoted, [Jason Miller](https://twitter.com/_developit) for his input and inspiration, my colleagues from the [eBay Classifieds Group](http://www.ebayclassifiedsgroup.com/) for their support and Quincy Larson of [Free Code Camp](https://medium.freecodecamp.com/) for publishing this article!








