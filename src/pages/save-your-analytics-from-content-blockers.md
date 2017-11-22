---
author: Nikita Savchenko
authorTwitter: https://twitter.com/MeZitRo
authorFacebook: https://facebook.com/1264555316937640
title: "How to prevent your analytics data from being blocked by ad blockers"
subTitle: "When your product is just getting started out, every single user matters. So does the data about how they interact with your product...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*ZKUrBpg1NORp8sGn7OrIjw.jpeg
url: https://medium.freecodecamp.org/save-your-analytics-from-content-blockers-7ee08c6ec7ee
id: save-your-analytics-from-content-blockers-7ee08c6ec7ee
date: 2017-04-28T22:45:56.235Z
tags: [
  "Analytics",
  "JavaScript",
  "Web Development",
  "Startup",
  "Big Data"
]
---
# How to prevent your analytics data from being blocked by ad blockers







![](https://cdn-images-1.medium.com/max/2000/1*ZKUrBpg1NORp8sGn7OrIjw.jpeg)







When your product is just getting started out, every single user matters. So does the data about how they interact with your product.

If you’ve tried using analytics solutions like [Google Analytics](https://www.google.com/analytics/), you may have faced an issue where your analytics collection was blocked by ad blockers.

According to [PageFair](https://pagefair.com/), [up to 30%](https://pagefair.com/blog/2017/adblockreport/) of Internet users use ad blockers in 2017, and this number is constantly growing.

This article will explain some technical approaches you can take to prevent ad blockers from also blocking your analytics. We’ll use [Google Analytics](https://www.google.com/analytics/) in this article, though much of this could be applied to other analytics tools.



![](https://cdn-images-1.medium.com/max/1600/1*CJIt1phORTWK7Br0m1TizA.png)



### Some ways you can bypass ad blockers

Almost all ad blockers work through the same methods: they disallow some http(s) browser requests for content at URLs that match a certain mask from their filtering base.

Most ad blockers blacklist [www.google-analytics.com](http://www.google-analytics.com) by default, and block any attempts by the [Google Analytics JavaScript library](https://developers.google.com/analytics/devguides/collection/analyticsjs/) to send or retrieve the data from its analytics servers.

Luckily for developers, ad blockers don’t block requests to _our own domain names_ by default, because doing this may hurt the web application’s functionality. This gap reveals a way to avoid analytics blocking until your web service become well-known enough for some of its URLs appear in ad blocker filters.

In fact, even after some URLs appear in the content filtering base, you can start playing with ad blockers by inventing terrible things, such as hourly changing analytics URLs (though this is beyond the scope of this article). Such approaches are already held by a couple of services like [Adtoniq](https://goo.gl/PtYKYm), which offer to protect your analytics data from ad blockers by doing the minimal install.

### A high-level explanation of what we’re going to do

In this article, we’ll assume that we have no permission restrictions on the server side. We will write the demo solution (a few lines of code) for the Node.js platform. Once you understand how this works, you should be able to port this solution to any programming language or platform.

The solution I’ll describe is pretty minimal, and if you’re an experienced web developer, it may only take you a few minutes to put it in place.

We’re going to use a simple proxying approach without the need to diving into the [Google Analytics measurement protocol](https://developers.google.com/analytics/devguides/collection/protocol/v1/). In short, the solution looks as following:

1.  First, [download](https://www.google-analytics.com/analytics.js) the Google Analytics JavaScript library itself and host it on your server.
2.  Then alter the code in the downloaded library to change the target host from _www.google-analytics.com_ to your own domain name using find-replace.
3.  Replace the link from the default Google Analytics script in your codebase to modified one.
4.  Create a [proxy](https://en.wikipedia.org/wiki/Proxy_server) endpoint to Google Analytics servers on your back end. One important step here is to additionally detect the client’s IP address and write it explicitly in requests to Google Analytics servers to preserve correct location detection.
5.  Test the results. You’re done!

### The full technical implementation walkthrough

All the code and described steps below are available [on GitHub](https://github.com/ZitRos/save-analytics-from-content-blockers). The description below explains the method basics, and of course the suggested approach can be improved to be even more “anti-blocking.”

In Google Analytics, you start by [acquiring a unique tracking ID](https://support.google.com/analytics/answer/1042508?hl=en) for your property (web service). We will use _UA-98253329–1 tracking ID_ in this article for the demonstration. Don’t forget to replace the tracking code to your one.

Google suggests adding this minified code to your web services to enable analytics:

<pre name="5fdd" id="5fdd" class="graf graf--pre graf-after--p"><script>  
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){  
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)  
  })(window,document,'script',  
'[https://www.google-analytics.com/analytics.js','ga'](https://www.google-analytics.com/analytics.js%27,%27ga%27));  
  ga('create', 'UA-98253329-1', 'auto');  
  ga('send', 'pageview');  
</script></pre>

In a few words, this code loads the Google Analytics JavaScript library if it wasn’t loaded before by inserting the script tag to the document. This library includes all the logic of analytics collection, and it is the only thing we need to proceed.

#### **Step 1: Download and patch Google’s analytics library**

Download the script directly from [_https://www.google-analytics.com/analytics.js_](https://www.google-analytics.com/analytics.js%27,%27ga%27), open it with any text editor and replace all occurrences of:

<pre name="03f3" id="03f3" class="graf graf--pre graf-after--p">www.google-analytics.com</pre>

with this exact string:

<pre name="10cc" id="10cc" class="graf graf--pre graf-after--p">"+location.host+"/analytics</pre>

By patching the analytics library in this way, it will start making requests to the local host (_my.domain.com/analytics)_ endpoints instead of _www.google-analytics.com_. Place this patched _analytics.js_ file on your server after the replacement.

#### **Step 2: Replace the analytics script with the patched one**

Let’s modify the Google Analytics embedding code in that way so it use our patched library instead of default one:

<pre name="53a4" id="53a4" class="graf graf--pre graf-after--p"><script>  
(function(i,s,o,r){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){  
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date()})(window,document,'script'[,'ga'](https://www.google-analytics.com/analytics.js%27,%27ga%27));  
  ga('create', 'UA-98253329-1', 'auto');  
  ga('send', 'pageview');  
</script>  
<script src="/_analytics.js_" async></script></pre>

Note that here browser will search for the patched analytics script in the document root of your server, in this case, _my.domain.com/analytics.js._ Check whether you put the script in the document root or changed the path in script tag above. You can also check the results by running a test on your local server (see the [readme](https://github.com/ZitRos/save-analytics-from-content-blockers#readme) for how to run the GitHub example).

You should see something like this [in browser’s developer tools](https://developer.chrome.com/devtools):



![](https://cdn-images-1.medium.com/max/1600/1*fBQ10ukeI0N07D7QLYyG8Q.png)



Ultimately we want the act of downloading your patched _analytics.js_ to return a successful response — a 200 (OK) or a 304 (not modified) status. But at this point, the request to _my.domain.com/analytics/collect_ should respond with 404 status, since we haven’t implemented the proxy server yet.

#### **Step 3: Implementing the Simplest Proxy Server**

Now we’re going to code a bit. Our goal is to implement [the proxy server](https://en.wikipedia.org/wiki/Proxy_server), which will transport our analytics requests from our server to the real Google Analytics server. We can do this in many ways, but as an example, let’s use [Node.js](http://nodejs.org) and [Express.js](http://expressjs.com) with the [express-http-proxy](https://www.npmjs.com/package/express-http-proxy) package.

Gathering all the files in the example together ([see GitHub](https://github.com/ZitRos/save-analytics-from-content-blockers)), we should end up with the following JavaScript server code:

<pre name="f045" id="f045" class="graf graf--pre graf-after--p">**var** express = require("express"),   
    proxy = require("express-http-proxy"), app = express();  

app.use(express.static(__dirname)); // serve static files from cwd  

**function** getIpFromReq (req) { // get the client's IP address  
    **var** bareIP = ":" + ((req.connection.socket && req.connection.socket.remoteAddress)  
        || req.headers["x-forwarded-for"] || req.connection.remoteAddress || "");  
    **return** (bareIP.match(/:([^:]+)$/) || [])[1] || "127.0.0.1";  
}  

// proxying requests from /analytics to www.google-analytics.com.  
app.use("/analytics", proxy("www.google-analytics.com", {  
    proxyReqPathResolver: **function** (req) {  
        **return** req.url + (req.url.indexOf("?") === -1 ? "?" : "&")  
            + "uip=" + encodeURIComponent(getIpFromReq(req));  
    }  
}));  

app.listen(1280);  
console.log("Web application ready on http://localhost:1280");</pre>

A few last lines here do the proxying. The only trick we do here is instead of just proxying, we detect and append the client’s IP address explicitly in a form of a [measurement protocol URL parameter](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#uip). This is required to collect precise location data, because all the requests to Google Analytic originally come from our server’s IP address, which remains constant.

After setting up our server proxy, we can check whether the request to our _/collect_ endpoint now successfully returns a 200 OK HTTP status:



![](https://cdn-images-1.medium.com/max/1600/1*L_GAfnfI3qefiInDzC6KoQ.png)



We can use, for example, an anonymous connection to verify that location is also picked up correctly.



![](https://cdn-images-1.medium.com/max/1600/1*PODbWgzKVNj9EynE2wcZfw.png)



This “proxy server” approach is a fast workaround for analytics that enables your services to avoid ad blockers. But this method relies on the browser side, and if the browser script for some reason does not send analytics information to our servers, we get nothing.











* * *







The last possible step if you want to implement a solid solution is to send analytics directly from the server by using server-side libraries available for different languages ([NodeJS](http://github.com/peaksandpies/universal-analytics), [Python](http://github.com/mirumee/google-measurement-protocol), [Ruby](https://github.com/tpitale/staccato), [PHP](https://github.com/theiconic/php-ga-measurement-protocol)). This approach will definitely avoid any content blockers, as every request to analytics servers comes directly from our servers.

Again, the demo application is available [on GitHub](https://github.com/ZitRos/save-analytics-from-content-blockers), feel free to test it! Let me know if you have any feedback or interesting experiences using this approach.

Thanks for reading!








