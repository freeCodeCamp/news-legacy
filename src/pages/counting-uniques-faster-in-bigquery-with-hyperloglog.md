---
author: Felipe Hoffa
authorTwitter: https://twitter.com/felipehoffa
authorFacebook: none
title: "Counting uniques faster in BigQuery with HyperLogLog++"
subTitle: "As a data exploration task, counting unique users is usually slow and resource intensive. This is because your database needs to keep tra..."
coverSrc: https://cdn-images-1.medium.com/max/1600/0*O9YyYvp_YIUgniaG.png
url: https://medium.freecodecamp.org/counting-uniques-faster-in-bigquery-with-hyperloglog-5d3764493a5a
id: counting-uniques-faster-in-bigquery-with-hyperloglog-5d3764493a5a
date: 2017-07-06T02:26:00.059Z
tags: [
  "Bigquery",
  "Big Data",
  "Algorithms",
  "Google Cloud Platform",
  "Analytics"
]
---
# Counting uniques faster in BigQuery with HyperLogLog++

As a data exploration task, counting unique users is usually slow and resource intensive. This is because your database needs to keep track of every unique ID it has ever seen, which can consume a lot of RAM.

Let’s try it with BigQuery: How many unique users did GitHub have in 2016?

    #standardSQL SELECT COUNT(DISTINCT actor.login) exact_cnt FROM `githubarchive.year.2016`

<pre name="a9a4" id="a9a4" class="graf graf--pre graf-after--pre">_6,610,026 (4.1s elapsed, 3.39 GB processed, 320,825,029 rows scanned)_</pre>

4.1 seconds to process 320 million rows with 3.39GB of data, for a total of ~6.6M unique IDs. Not too bad. But we can go faster, if we’re willing to get approximate results:

    #standardSQL SELECT APPROX_COUNT_DISTINCT(actor.login) approx_cnt FROM `githubarchive.year.2016`

<pre name="6fce" id="6fce" class="graf graf--pre graf-after--pre">_6,643,627 (2.6s elapsed, 3.39 GB processed, 320,825,029 rows scanned)_</pre>

This time we got an approximate count (with an error rate of ~0.5%), but in only 2.6 seconds!

In this post, I’ll explain how BigQuery uses HyperLogLog++, Google’s internal implementation of the [HyperLogLog algorithm](https://en.wikipedia.org/wiki/HyperLogLog) for cardinality estimation, to pull off this feat.

### Exact counts versus approximate ones

In the paper [“HyperLogLog in Practice: Algorithmic Engineering of a State of The Art Cardinality Estimation Algorithm”](https://research.google.com/pubs/pub40671.html) (2013), the authors present the Google improvements reflected in HyperLogLog++. Quoting [Mosha Pasumansky](https://stackoverflow.com/users/4490873/mosha-pasumansky), some of these improvements are:

1.  Better accuracy for very large cardinalities: Standard HLL starts having too many hash collisions around 1 billion unique values. Google had to deal with this problem as it does have several businesses with [more than 1 billion users](http://www.popsci.com/google-has-7-products-with-1-billion-users) (across Android, Chrome, Youtube, and more). There are also more things to count uniques for (other than users). For example, in IoT, we may expect billions of sensors.
2.  Better accuracy for small cardinalities: HLL++ uses bias correction to reduce the error in small cardinalities.
3.  More scalable with better memory usage: HLL++ uses special sparse representation of sketch. In standard HLL, memory usage is constant and determined by the specified precision, but sparse representation allows memory usage to be smaller for lower cardinalities, and adaptively grow for higher ones, but never exceeds the dense representation.

Let me demonstrate. First, let’s see how BigQuery performed the exact count for the query above:



![](https://cdn-images-1.medium.com/max/1600/0*imxO2rF309ImKCoX.png)

_Computing an exact count on BigQuery — 3 steps_



Stage 1 went through ~320M rows, and had an output of ~229M rows.

The most interesting part here is that the output was “shuffled by hash.” Several nodes read the underlying data in parallel and transmitted it to a second layer of nodes while shuffling it by hash. This step assures the next layer of nodes that there are no duplicate IDs being counted on other nodes. Thus Stage 2 is able to reduce these ~229M rows to 132 (one count for each “node” in this layer), and Stage 3 only needs to add these 132 numbers to produce the exact final result.

Most databases would avoid doing a shuffle because it’s so resource intensive. In contrast, BigQuery can pull that off extremely quickly.

For the approximate results below, only two stages were required and no shuffle was involved:



![](https://cdn-images-1.medium.com/max/1600/0*O9YyYvp_YIUgniaG.png)

_Computing an approximate count on BigQuery — 2 steps_



Stage 1 went through ~320M rows and had an output of 1,323 rows. We can infer that 1,323 nodes scanned these rows in parallel, and each one computed a partial result. Stage 2 takes these 1,323 partial results and combines it into the final result.

This is the first time we see some hints of HyperLogLog++: Stage 1 did an `HLL_COUNT.INIT()`, while Stage 2 combined these results with `HLL_COUNT.MERGE()`. What’s remarkable here is that we can get a total unique count by merging partial results — thereby showcasing the highly distributed nature of HyperLogLog++.

Next, let’s explore some benefits of this approach.

### Counting with bigger numbers

BigQuery can choose from a variety of algorithms to run an `APPROX_COUNT_DISTINCT()`. In the case above, we see strong hints that it used the underlying HyperLogLog++ functions, but that won’t necessarily always be the case.

For testing purposes, let’s go larger this time: How many unique users did GitHub have _each year since 2011_?

    #StandardSQL SELECT CONCAT('20', _TABLE_SUFFIX) year,  APPROX_COUNT_DISTINCT(actor.login) approx_cnt FROM `githubarchive.year.20*` GROUP BY year ORDER BY year

<pre name="0cc8" id="0cc8" class="graf graf--pre graf-after--pre">_3.8s elapsed, 8.37 GB processed_</pre>

Notice that you can use * to match multiple tables, and then identify each one with the pseudo-column `_TABLE_SUFFIX`.



![](https://cdn-images-1.medium.com/max/1600/0*QSETKQ4l82m0sMtv.png)



The results reveal some nice GitHub growth, but here’s an interesting follow-on question: _Can you determine the total number of unique users on GitHub for the whole period 2011–2016, only by looking at each year’s unique count?_

The answer to that question, of course, is “No.” It would be naive to add all these numbers and then say that GitHub had ~18M unique users between 2011 and 2016\. (Unfortunately, this false premise is all too common.) Instead, we need to account for unique users who are present in more than 1 year.

To get the total number of unique users through these 6 years, we would need to remember the IDs of each user seen each year to account for the repeating ones. That’s possible, but HyperLogLog++ provides an interesting and more efficient alternative: We can get a “sketch” that summarizes all the unique IDs in a much smaller space. It looks like this:

    #StandardSQL SELECT CONCAT('20', _TABLE_SUFFIX) year ,  APPROX_COUNT_DISTINCT(actor.login) approx_cnt,  HLL_COUNT.INIT(actor.login) sketch FROM `githubarchive.year.20*` GROUP BY year ORDER BY year



![](https://cdn-images-1.medium.com/max/1600/0*KQJra2WDKtb3e3K2.png)



What’s interesting here is that those `hll_sketch` values represent a summary of all unique IDs seen, in less than 32KiB (adjustable) — and they're combinable. We only need these sketches to get an approximate count of all GitHub unique users from 2011–2016 (if I had saved the previous results in a temp table):

    #standardSQL SELECT HLL_COUNT.MERGE(sketch) FROM `fh-bigquery.temp.github_year_sketches`

<pre name="2216" id="2216" class="graf graf--pre graf-after--pre">_11,334,294, 2.7s elapsed, 192 KB processed_</pre>

So, GitHub had ~11.3M unique users between 2011–2016\. This value is only 0.3% away from the exact count. To get this result, I only needed to store a 32KiB sketch for each year of unique counts, instead of the 166MB that storing all the unique IDs per year would require.

### Other interesting properties

**Parallelization**

The ability to run independent HyperLogLog++ counts and combine them later allows BigQuery to efficiently distribute the counting of uniques load between several nodes — without the need to shuffle results. As explained previously, this approach also allows you to save the intermediate results for combining later. Outside BigQuery, it also allows systems to [keep running counts of uniques](https://redditblog.com/2017/05/24/view-counting-at-reddit/) with minimum RAM requirements.

**Merging with individual sketches**

Let’s say I create a sketch that represents all the unique logins on GitHub that start with the letter “a”:

    #standardSQL SELECT HLL_COUNT.MERGE(sketch) approx_cnt FROM (   SELECT HLL_COUNT.INIT(actor.login) sketch   FROM `githubarchive.month.201601`   WHERE SUBSTR(actor.login, 0, 1) = 'a' )

<pre name="59d0" id="59d0" class="graf graf--pre graf-after--pre">_83,899_</pre>

That sketch represents ~83,899 unique users (exact number: 83,619). What happens when we merge this sketch with another sketch that represents only one element?

The following query creates one sketch for each GitHub login that starts with “b.” We then merge each of these sketches with the sketch that represents all of the users that start with “a.”

With these results, we can see how the count changes when we add a single element that’s not represented in a sketch:

<pre name="7feb" id="7feb" class="graf graf--pre graf-after--p">#standardSQL  
SELECT approx, COUNT(*) ids_with_b_that_merge_this_count  
FROM (  
 SELECT login, HLL_COUNT.MERGE(sketch)  approx  
 FROM (  
   SELECT actor.login,  
     [  
       HLL_COUNT.INIT(actor.login),  
       (  
         SELECT HLL_COUNT.INIT(actor.login) sketch  
         FROM `githubarchive.month.201601`  
         **WHERE SUBSTR(actor.login, 0, 1) = 'a'**  
     )] sketch_pair  
   FROM `githubarchive.month.201601`  
   **WHERE SUBSTR(actor.login, 0, 1) = 'b'**  
   GROUP BY login  
 ), UNNEST(sketch_pair) sketch  
 GROUP BY login  
)  
GROUP BY approx  
ORDER BY approx</pre>



![](https://cdn-images-1.medium.com/max/1600/0*CRprujiLWDa8eQle.png)

Merging the sketch for an id that starts with ‘b’, with the sketch of all IDs that start with ‘a’ — and then counting them by resulting approximate result.



What these results say:

*   When merging 33,397 IDs that start with “b,” the HyperLogLog++ count of uniques doesn’t change at all.
*   For the other 12,398 IDs that start with “b,” the count of uniques went up by between 1 and 11.
*   It seems easy to find a large list of elements that we could add to a collection without changing the number of uniques that HyperLogLog guesses. Meanwhile adding a single element could also make this count go up by between 1 and 11.

### Testing with more than a billion IDs

In case you’re wondering how to test HyperLogLog++ with more than 1 billion elements, let’s use more than 3 billion Reddit comments stored in BigQuery:

    #standardSQL SELECT COUNT(DISTINCT id) exact FROM `fh-bigquery.reddit_comments.20*`

<pre name="bc0b" id="bc0b" class="graf graf--pre graf-after--pre">_3,168,770,564, 27.9s elapsed, 27.2 GB processed_</pre>

<pre name="08e1" id="08e1" class="graf graf--pre graf-after--pre">  
#standardSQL  
SELECT HLL_COUNT.MERGE(sketch) **approx**  
FROM (  
 SELECT HLL_COUNT.INIT(id) sketch  
 FROM `fh-bigquery.reddit_comments.20*`  
)</pre>

<pre name="2e96" id="2e96" class="graf graf--pre graf-after--pre">_3,161,955,636, 5.7s elapsed, 27.2 GB processed_</pre>

BigQuery was able to exactly count 3 billion uniques in 28 seconds (not bad at all), but with HyperLogLog++, it did the same in only 5.7 seconds — with a result that is only 0.2% off from the exact unique count.

### Next steps

To learn more about HyperLogLog specifically and BigQuery internals generally, explore:

*   [How HyperLogLog works](http://blog.notdot.net/2012/09/Dam-Cool-Algorithms-Cardinality-Estimation), by Nick Johnson
*   “[Advanced BigQuery features](https://www.youtube.com/watch?v=UueWySREWvk),” a video in which Jordan Tigani goes deep into some other advanced BigQuery features
*   [HyperLogLog++ on BigQuery](https://cloud.google.com/bigquery/docs/reference/standard-sql/functions-and-operators#hll_countinit) docs

Want more stories? Check my [Medium](http://medium.com/@hoffa/), [follow me on twitter](http://twitter.com/felipehoffa), and subscribe to [reddit.com/r/bigquery](https://reddit.com/r/bigquery). And [try BigQuery](https://www.reddit.com/r/bigquery/comments/3dg9le/analyzing_50_billion_wikipedia_pageviews_in_5/)— every month you get a full terabyte of analysis for [free](https://cloud.google.com/blog/big-data/2017/01/how-to-run-a-terabyte-of-google-bigquery-queries-each-month-without-a-credit-card).

_I originally published this on the_ [_Google Cloud Big Data and Machine Learning Blog_](https://cloud.google.com/blog/big-data/2017/07/counting-uniques-faster-in-bigquery-with-hyperloglog)_._








