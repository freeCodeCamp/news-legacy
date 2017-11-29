---
author: James Y Rauhut
authorTwitter: https://twitter.com/seejamescode
authorFacebook: none
title: "How to crank your progressive web app’s Google Lighthouse score up to 100"
subTitle: "If there’s one message the Chrome Dev Team wants to drive home to developers, it’s this: performance matters...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*wc20QBMHUo9cXW22eJOP3g.png
url: https://medium.freecodecamp.org/how-to-crank-your-progressive-web-apps-google-lighthouse-score-up-to-100-cfc053eb7661
id: how-to-crank-your-progressive-web-apps-google-lighthouse-score-up-to-100-cfc053eb7661
date: 2016-12-27T07:51:42.262Z
tags: [
  "Web Development",
  "JavaScript",
  "Design",
  "Startup",
  "UX"
]
---
# How to crank your progressive web app’s Google Lighthouse score up to 100







![](https://cdn-images-1.medium.com/max/2000/1*wc20QBMHUo9cXW22eJOP3g.png)







If there’s one message the Chrome Dev Team wants to drive home to developers, it’s this: **performance matters**.

Speed was the centerpiece of their recent Chrome Developers Summit. They made it abundantly clear that users have little patience, and mobile networks have high latency.

If you can max out your web app’s speed, Google will give you preferential ranking in its search engine results. And better ranking means a lot more users. And happier users, too.







![](https://cdn-images-1.medium.com/max/2000/1*cqUr9nB4KRxgXkcFC6lyLw.png)







Google even built a [Command Line Interface and Chrome plugin tool called Lighthouse](https://github.com/GoogleChrome/lighthouse/) to guide you toward high performance.

Lighthouse simulates many different situations that could affect your user’s experience. It then returns a 1–100 grade of how your progressive web app handles them.

Now you may be thinking, “Why should I let Google boss me around about how I structure my website?” Or maybe you’re thinking, “Well, Google doesn’t know about all the other project requirements I have besides speed.”

Well, I don’t believe Google is trying to be an authority in this field, or to define what your top priorities should be. Instead, I think Google built Lighthouse to gamify the process of reaching performance metrics that they think users demand.

So you should weight each Lighthouse criteria against your existing priorities, then decide for yourself what bottlenecks are worth tackling.

When I first discovered the Lighthouse plugin, I tested my [unapologetically 90s portfolio website](https://www.seejamescode.com/). I had thrown this web app together earlier this year, after I got tired of manually updating my work.

Using Node, Webpack, and React, my website — [seejamescode.com](https://www.seejamescode.com/) — responds to requests by fetching my recent activity from many different APIs. I was pretty satisfied with the app.

That was until I ran Lighthouse, and it gave me a score of 63/100\. But instead of being all sore about it, I took their score as a challenge to learn new things during my free time.

Whenever I learned a technique to help raise my personal website’s score, I would then go back to company projects and improve them as needed in this order:

1.  Improve the first meaningful “paint” (user interface rendering)
2.  Improve the perceptual speed index
3.  Add a manifest file for directories
4.  Add HTTPS and redirect to it
5.  Add service workers for offline-capability
6.  Make sure that users with JavaScript turned off still received the same information as JavaScript-enabled users.

Let’s take a more in-depth look at what each of these optimizations entails.

### The first meaningful paint

First meaningful paint is something web developers have always tracked, but with a slight twist. We’ve always been concerned with how long it takes for a user to see some content on the page (first paint). The first _meaningful_ paint asks us to time how long it takes for the user to see primary content instead of just a nav bar.

Interestingly, this can be solved the same way that many of us already tackle performance: by ensuring the app sends as little data as possible.

For example, a commenter once inspected my site. They found that I was requesting image sizes around 1200px wide! I was glad they discovered this because it was the first step toward reducing my site’s load time. These images took a lot of time for a user to load, despite the fact that my CSS wouldn’t display images any wider than 500px.

By requesting images as small as 500px, I was able to halve the size of these image requests.

Another trick for decreasing my first meaningful paint was being smarter about my Webpack bundle. If you use Webpack, be sure to look at the [many optimizations](https://medium.lucaskatayama.com/reducing-bundle-js-size-from-webpack-8a9c3adbdad4#.sk6gtlcqj) you can make for production. The biggest thing you can do is be smart about your dependencies.

[Inspect your bundle](https://www.npmjs.com/package/webpack-bundle-analyzer) and determine whether there’s third-party code that you can do without. After my own bundle inspection, I realized I didn’t really need Moment.js. While this library adds a lot of value in it, removing it as a dependency shaved 60kb from my bundle.

The quickest way your Node app’s load can be reduced is by ensuring that everything sent is compressed. Check out the [Node.js compression middleware](https://www.npmjs.com/package/compression#expressconnect). If you’re using Express, you need only require this middleware, which will then handles the rest for you. I’ve seen this middleware reduce app load sizes well over half!







![](https://cdn-images-1.medium.com/max/2000/1*q8jybu6-2e6mIdqfmet3Kg.png)

If you would like to keep track of your Webpack bundle’s dependencies during development, checkout [Webpack Dashboard](https://github.com/FormidableLabs/webpack-dashboard) from the infamous [Ken Wheeler](https://twitter.com/ken_wheeler/). “Now when you run your dev server, you basically work at NASA.”







### Perceptual Speed Index 👀

Perceptual speed index is a great statistic because of its integration with user experience. How fast does your user perceive your app to be? Do they see jitters while content is loading? Are they confident in knowing that the page is done loading?

“Content jumps” are one of the biggest causes of a bad perceptual speed index. These happen for two reasons:

1.  Your user starts looking for their desired content as soon as possible, meaning they will scroll down before your page is done loading.
2.  Your containing elements don’t have pre-defined heights in CSS.

The tricky part about fixing this is that you have to either know the physical space that your content will take on a screen, or fake it as best as possible.

Many developers saw a solution in Facebook’s mobile app, called “skeleton placeholders.” While Facebook’s mobile app fetches data, it fill posts with grey bars that simulate title, image, and paragraph spacing.

A simpler fix is to specify the minimum height for your containing elements. This will reduce the likelihood of users encountering violent content jumps.

### Help the Web with a Manifest File



![](https://cdn-images-1.medium.com/max/1600/1*FUIQymp6cRG9TSTk0Uu5ww.png)

You will not find any results for “Flipkart” on the Apple App Store. However, that is no problem with their progressive web app!



This is mostly a political issue. Google and Microsoft want to dethrone Apple’s App Store with your web apps. Companies use the meta info in your manifest to categorize and file your web app in their directories. It also helps browsers create pleasant icon tiles when your user saves your app to their home screen.

As a web developer, there isn’t a strong reason to be up in arms about this criteria. Of all the issues I mention in this article, this one is the easiest to solve. Create a [manifest.json file](https://github.com/seejamescode/see-james-code/blob/master/public/manifest.json) and refer to it to an [HTML link tag](https://github.com/seejamescode/see-james-code/blob/master/index.html#L8).

### HTTPSecure the Fort

Making your site secure with HTTPS isn’t usually the first thing on an entry-level developers’ mind. After all, your website can get by without it.

But [browsers are making a push](https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https) for every website to have an SSL certificate. This ensures that third parties don’t mess with the code reaching your users.

So say goodbye to the risk of injected ads! You can get free SSL certificates from [Let’s Encrypt](https://letsencrypt.org/). And every major hosting platform seems to have a tutorial on how to get started with Let’s Encrypt on their platform. For example, I found this helpful article when I searched for “[Let’s Encrypt and Bluemix](https://www.ibm.com/blogs/bluemix/2016/08/securing-custom-domains-lets-encrypt/).”

Lighthouse expects you to go one step further though. Not only should you should have an SSL certificate so that a “https://…” URLs work for your site. Lighthouse also wants you to redirect any users that try to go to “http://…” over to the https version of your site.

This is a proactive step to help move your users over to a secure destination.

Luckily, this is all it took for me to comply with this requirement using Node and Express:

<pre name="9340" id="9340" class="graf graf--pre graf-after--p">// Avoid redirect if on localhost developing  
if (NODE_ENV === 'production') {  
  // Redirect http to https  
  app.enable('trust proxy');  
  app.use (function (req, res, next) {  
    if (req.secure) {  
      next();  
    } else {  
      res.redirect('[https://'](https://%27) + req.headers.host + req.url);  
    }  
  });  
}</pre>

<pre name="de8b" id="de8b" class="graf graf--pre graf-after--pre">// I swear this came from StackOverflow like half of my code</pre>

### Become Offline Friendly

[Service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) help you specify which files users’ browsers should save locally. You can think of it as smarter caching to ensure that a user can access information, even when in airplane mode.

This will also speed up your website’s load time when your users return to it in the future.

I was stuck on implementing service workers for a long time because I did not know where to start. Then I found the most [magical git diff](https://github.com/jeffposnick/create-react-pwa/compare/c-r-a-0.6.0...c-r-pwa-0.6.0) from [Jeffrey Posnick](https://twitter.com/jeffposnick) demonstrating three simple file changes that help Create-React-App support service workers. I love this example because it shows precisely the parts that help you implement it, instead of just pointing you toward an entire boilerplate.

In the future, I plan to explore using [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) to store the API data that a user receives from their first visit, for even faster return visits.

### No JavaScript, No Problem

The cherry-on-top piece is making sure a user can receive information even if they’ve disabled JavaScript in their browser. Why would people disable JavaScript in their browser? There are [multiple odd use-cases](http://softwareengineering.stackexchange.com/questions/26179/why-do-people-disable-javascript). But the bottom line is: we care about the user! How do we support them?



![](https://cdn-images-1.medium.com/max/1600/1*KboT_mI5kjjlEt4_QfU2EQ.png)

A screenshot of what users see when they visit my website without JavaScript enabled. I do want to provide more information to non-JavaScript users soon, but for the meantime this is the bare essentials. Server-side rendering would be a great solution to this.



We support browsers with JavaScript disabled by kickin’ it old school with the [<noscript> tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript). Anything within this html tag will display as long as the user has JavaScript disabled. If you want to give these users the full experience, you can add server-side rendering.

### Getting Lighthouse to 💯

You can see [all of the commits](https://github.com/seejamescode/see-james-code/commits/master) from November 14th to December 18th.

Even though my commits all fall within a about one month, it actually took me quite a bit longer to reach a perfect score on Lighthouse. This is because each criteria on Lighthouse is a helpful bit that you can go off and learn alone. None of the bits require one another, but all will help the overall user experience of your app.

Each time I learn how to implement a new bit on my portfolio, I then easily implement it to my work projects.

I’m sure there will eventually be an update to Lighthouse that brings my score down. That’s not a problem though! The plugin is still in beta, and will continue to provide me with new subjects to learn.

My hope is that you will take on this challenge yourself, and do whatever it takes to help improve the experience of your users.

Please share in the comments or [tweet me](https://twitter.com/seejamescode) some cool ways you improved your Lighthouse score! I will try to share all of them. I also highly recommend [Addy Osmani](https://twitter.com/addyosmani)’s series on [PWAs with React.js](https://medium.com/@addyosmani/progressive-web-apps-with-react-js-part-i-introduction-50679aef2b12#.dhyo6dmuj)!

You can also contact me by leaving a comment, [emailing me](mailto:james@seejamescode.com), or tweeting to [@seejamescode](https://twitter.com/seejamescode). I work in ATX for IBM Design, and always love conversations with the web design community.

Also, thanks to [David Connor](https://twitter.com/Dave_Conner) and [Jason Lengstorf](https://twitter.com/jlengstorf) for peer reviewing this article!








