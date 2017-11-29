---
author: Siddharth Kshetrapal
authorTwitter: https://twitter.com/siddharthkp
authorFacebook: none
title: "npm cache: the unsung hero"
subTitle: "I love npm and believe that this package manager is the single biggest reason for JavaScript’s massive success these past few years...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*UmRnW6YyI9ygq81OaL8Y-Q.png
url: https://medium.freecodecamp.org/npm-cache-the-unsung-hero-11e646c09791
id: npm-cache-the-unsung-hero-11e646c09791
date: 2017-01-22T21:41:06.326Z
tags: [
  "JavaScript",
  "NPM",
  "Web Development",
  "Programming",
  "Startup"
]
---
# npm cache: the unsung hero







![](https://cdn-images-1.medium.com/max/2000/1*UmRnW6YyI9ygq81OaL8Y-Q.png)







I love npm and believe that this package manager is the single biggest reason for JavaScript’s massive success these past few years.

There was a lot of excitement in the JavaScript community when facebook released yarn. And for good reason. Yarn’s install speeds are amazing. Subsequent installs are even faster because yarn caches installed modules on your machine.



![](https://cdn-images-1.medium.com/max/1600/1*9qOyX2gYnSySYMDngXQ9aw.png)

Install speeds @ 12Mbps. Yarn = 🚀



But there’s an npm feature that does not get nearly the attention it deserves.

Like Yarn, npm also has a built-in caching mechanism that can make subsequent installs super fast.

Here are some benchmarks:



![](https://cdn-images-1.medium.com/max/1600/1*ZmPMfANBS6UkvJDgAt4NCg.png)

npm + cache is as fast as yarn + cache (if not faster)



That’s crazy, right? And guess what: this feature has been available to you this whole time, but it’s disabled by default.

### How to enable npm cache

<pre name="df9f" id="df9f" class="graf graf--pre graf-after--h3">npm config set cache-min `9999999`</pre>

That’s it.

Now install your packages as usual:

<pre name="764c" id="764c" class="graf graf--pre graf-after--p">npm install express</pre>

You can try out these benchmarks for yourself using [this repository](https://github.com/siddharthkp/npm-cache-benchmark):

[**siddharthkp/npm-cache-benchmark**  
_npm-cache-benchmark - Benchmark npm cache vs yarn_github.com](https://github.com/siddharthkp/npm-cache-benchmark "https://github.com/siddharthkp/npm-cache-benchmark")[](https://github.com/siddharthkp/npm-cache-benchmark)

Note that Yarn is not just about speed — it has [other features](https://yarnpkg.com/blog/2016/10/11/introducing-yarn) like consistent installs, which set it apart.

But, if speed is an important consideration for you — as it sure is for me — you should give npm another try, this time with cache.











* * *







Thanks to [ashley williams](https://medium.com/@ag_dubs) for reviewing this and to [npm,](https://medium.com/@npmjs) for being awesome.

P.S. You should totally [follow me on twitter](https://twitter.com/siddharthkp).








