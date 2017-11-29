---
author: Alberto Varela
authorTwitter: https://twitter.com/artberri
authorFacebook: none
title: "So I benchmarked Yarn against the 4 most popular CI tools."
subTitle: "Yarn is a recently launched alternative for npm as Node.js dependency manager. It claims to be much faster and reliable than its predeces..."
coverSrc: https://cdn-images-1.medium.com/max/1600/0*e6JtRXnqMpMRnpAu.png
url: https://medium.freecodecamp.org/npm-vs-yarn-benchmark-9b456de4aa96
id: npm-vs-yarn-benchmark-9b456de4aa96
date: 2016-10-17T08:18:06.919Z
tags: [
  "JavaScript",
  "Nodejs",
  "Web Development",
  "Programming",
  "Software Development"
]
---
# So I benchmarked Yarn against the 4 most popular CI tools.



![](https://cdn-images-1.medium.com/max/1600/0*e6JtRXnqMpMRnpAu.png)



Yarn is a recently launched alternative for npm as Node.js dependency manager. It claims to be much faster and reliable than its predecessor. Let see if it’s true.

If you’re a Javascript developer — and especially if you work with Node.js — you’ve probably heard some buzz around [Yarn](https://yarnpkg.com/) in the past few days. Engineers from Facebook Exponent, Google, and Tilde [have been working together](https://code.facebook.com/posts/1840075619545360) [to build](http://yehudakatz.com/2016/10/11/im-excited-to-work-on-yarn-the-new-js-package-manager-2/) this alternative for the well known [npm](https://www.npmjs.com/), the built-in package manager of Node.js.

Over the last few years, developers around the world have started to complain about how slow npm is. The other thing they want is a dependency system that’s able to avoid inconsistencies between environments. So Yarn bills itself as exactly what we’ve wanted all along: “Fast, Reliable, and Secure Dependency Management.”

It’s clear that the introduction of the [yarn.lock](https://yarnpkg.com/en/docs/yarn-lock) file and the checksum verification adds consistency and integrity to our packages between environments, but… what about speed? Yarn [claims that it’s ultra fast](https://yarnpkg.com/en/compare). So I set to work benchmarking it against npm in a variety of environments.

### The Method

The tool I’ve used to measure the speed of both package managers is the humble Linux command `time`. I wrote a little Bash script — based on [this gist](https://gist.github.com/peterjmit/3864743) made by Peter Mitchell.

The script runs multiple installations for [Angular](https://angular.io/), [Ember](http://emberjs.com/), and [React](https://facebook.github.io/react/) using both npm and Yarn. It measures the amount of time each installation takes. Then, at the end, it displays the average metrics, sorted by package manager and framework. It will also perform installations with pre-cached packages and with empty cache to see the difference between both situations.

You can see the script used here: [https://github.com/artberri/npm-yarn-benchmark](https://github.com/artberri/npm-yarn-benchmark)

### The Environment

Once I’d chosen the benchmarking tool, it was time to run the script.

I started by running it on my own computer. Then, In order to achieve more standard metrics, I ran the script again using the following Continuous Integration (CI) tools: Travis, Snap CI, Semaphore, and Circle CI.

Because of the large amount of installing that’s done during each test run, the script took a while to finish. In order to avoid timeouts in these CI tools, I calculated the timing averages will be calculated over three runs.

### The Results

In my own computer:

<pre name="18de" id="18de" class="graf graf--pre graf-after--p">--------------------------------------------------------------------  
-------------------------- RESULTS (seconds) -----------------------  
--------------------------------------------------------------------  
|                       |     angular2 |        ember |        react |  npm_with_empty_cache |       15.687 |       56.993 |       93.650 |   npm_with_all_cached |        9.380 |       52.380 |       81.213 | yarn_with_empty_cache |        9.477 |       30.757 |       37.497 |  yarn_with_all_cached |        4.650 |       15.090 |       17.730 --------------------------------------------------------------------</pre>

In [Travis](https://travis-ci.org/artberri/npm-yarn-benchmark):

<pre name="7d3f" id="7d3f" class="graf graf--pre graf-after--p">--------------------------------------------------------------------  
----------------------- RESULTS (seconds) --------------------------  
--------------------------------------------------------------------  
|                      |     angular2 |        ember |        react   
| npm_with_empty_cache |       19.720 |       55.090 |       76.233   
|  npm_with_all_cached |       14.640 |       40.203 |       56.467   
|yarn_with_empty_cache |       13.193 |       34.037 |       43.663   
| yarn_with_all_cached |        5.830 |       15.923 |       40.420   
--------------------------------------------------------------------</pre>

In [Snap CI](https://snap-ci.com/artberri/npm-yarn-benchmark/):

<pre name="db38" id="db38" class="graf graf--pre graf-after--p">--------------------------------------------------------------------  
------------------------- RESULTS (seconds) ------------------------  
--------------------------------------------------------------------  
|                      |     angular2 |        ember |        react   
| npm_with_empty_cache |       20.640 |       57.030 |      120.470   
|  npm_with_all_cached |       15.753 |       45.273 |       62.597   
|yarn_with_empty_cache |       12.227 |       41.997 |       51.863   
| yarn_with_all_cached |        7.693 |       23.607 |       24.490   
--------------------------------------------------------------------</pre>

In [Semaphore](https://semaphoreci.com/artberri/npm-yarn-benchmark/):

<pre name="b308" id="b308" class="graf graf--pre graf-after--p">--------------------------------------------------------------------  
----------------------- RESULTS (seconds) --------------------------  
--------------------------------------------------------------------  
|                      |     angular2 |        ember |        react   
| npm_with_empty_cache |       11.057 |       35.287 |       54.203   
|  npm_with_all_cached |        7.107 |       24.797 |       31.300   
|yarn_with_empty_cache |        6.273 |       17.407 |       22.777   
| yarn_with_all_cached |        2.790 |        8.150 |        9.380   
--------------------------------------------------------------------</pre>

In [CircleCI](https://circleci.com/gh/artberri/npm-yarn-benchmark):

<pre name="ec00" id="ec00" class="graf graf--pre graf-after--p">--------------------------------------------------------------------  
----------------------- RESULTS (seconds) --------------------------  
--------------------------------------------------------------------  
|                      |     angular2 |        ember |        react   
| npm_with_empty_cache |       42.940 |      100.287 |      163.550   
|  npm_with_all_cached |       16.990 |       50.083 |       67.000   
|yarn_with_empty_cache |       15.907 |       45.547 |       58.113   
| yarn_with_all_cached |        7.547 |       26.763 |       27.130   
--------------------------------------------------------------------</pre>

### The Conclusion

Yarn is Ultra Fast, between 2 and 3 times faster than npm.

The Yarn creators are telling the truth. It’s awesome to see that Yarn is faster, even when we compare the npm cached test with an un-cached Yarn test.

Based on this, I’d say that Yarn is poised to become the standard dependency manager for Node.js within just a few months.

On a side note, the aim of this comparison was not to benchmark CI tools, but it’s worth mentioning that Semaphore performed favorably compared with the rest of tools I used in this example.

I’ve been testing Yarn since day one, and this is something I’ve wanted for a long time.

I’m currently using [Puppet](https://puppet.com/) for software provisioning in most of my projects. Because of this, I’ve created a Puppet module for installing Yarn that you can [try out here](https://forge.puppetlabs.com/artberri/yarn).

Thanks for reading, and happy installing!











* * *







_Originally published at_ [_www.berriart.com_](https://www.berriart.com/blog/2016/10/npm-yarn-benchmark/)_._








