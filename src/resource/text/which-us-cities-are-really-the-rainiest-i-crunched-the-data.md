---
author: Felipe Hoffa
authorTwitter: https://twitter.com/felipehoffa
authorFacebook: none
title: "Which US cities are really the rainiest? I crunched the data."
subTitle: "Sam Ramji was surprised: His flight to Seattle was delayed because of rain...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*KD1QN5ziBZv1Z_X60obKZw.jpeg
url: https://medium.freecodecamp.org/which-us-cities-are-really-the-rainiest-i-crunched-the-data-5ca00c2848d9
id: which-us-cities-are-really-the-rainiest-i-crunched-the-data-5ca00c2848d9
date: 2017-01-21T06:35:26.990Z
tags: [
  "Bigquery",
  "Big Data",
  "Data Visualization",
  "Weather",
  "Google Cloud Platform"
]
---
# Which US cities are really the rainiest? I crunched the data.







![](https://cdn-images-1.medium.com/max/2000/1*KD1QN5ziBZv1Z_X60obKZw.jpeg)







[Sam Ramji](https://medium.com/@sramji) was surprised: His flight to Seattle was delayed because of rain.





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/845ea37f81b44159862c9e6edc0d081c?postId=5ca00c2848d9" data-media-id="845ea37f81b44159862c9e6edc0d081c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F2803210971%2F0779a7084707fe34bcd21d4ccbe1b6bd_bigger.png&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Seattle is famous for being a rainy city, so how could their airport not be prepared to deal with rain?

Well, let’s take a look at Seattle’s historical rainfall data to see whether this day was indeed unusual. And while we’re at it, let’s see which cities in the US are the rainiest.

First check: How much has it rained? [NOAA](http://www.wrh.noaa.gov/sew/get.php?wfo=sew&pil=rrm&sid=sew) tells us they’ve seen 1.64 inches of rain in the last 24 hours, and most of it in the last 12:



![](https://cdn-images-1.medium.com/max/1600/1*okur_Odz3lJUulmr6aBI1Q.png)



Is that a lot? A quick check with BigQuery can show us:



![](https://cdn-images-1.medium.com/max/1600/1*DhYtqdVq8_QKANMPWSuK9g.png)



In the last 17 years, it only rained more than this on 1 to 3 days per year. And years like 2000, 2002, 2014, and 2016, it never rained this much.

So yes, that’s a lot of rain for only 12 hours.

### The rainiest US cities

Usually people rank the wettest cities by the amount of rain they get in a year. Not me. I want to know how many days of rain each city had. Was Seattle the worst?

These are the top 60 weather stations, by number of rainy days during the past 17 years:









<iframe data-width="700" data-height="440" width="980" height="616" src="https://medium.freecodecamp.org/media/d559c883daadbced790ba8a7d786fb52?postId=5ca00c2848d9" data-media-id="d559c883daadbced790ba8a7d786fb52" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fexploratory.io%2Fmedia%2Flogo600x600.png&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



The the top 60 stations, by number of rainy days during the last 17 years











<iframe data-width="700" data-height="440" width="700" height="440" src="https://medium.freecodecamp.org/media/9672c1c6ae55f958d115e30cf17fc959?postId=5ca00c2848d9" data-media-id="9672c1c6ae55f958d115e30cf17fc959" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fexploratory.io%2Fmedia%2Flogo600x600.png&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



The the top 60 stations, by number of rainy days during the last 17 years



Alaska and Hawaii show up the top with the most rainy days: The Hilo international aiport in Hawaii saw 4,715 rainy days in the last 17 years, while the Cold Bay airport in Alaska saw 4,515\. With an average temperature of 73°F (versus 39°F), you know where I would rather be. 😀

The Seattle-Tacoma airport in this ranking shows up #37, with 2,851 rainy days. So not the rainiest places in the US, but definitely in the top 60\. Pittsburgh had it worse, with 2,960 (#40). Portland lives up to its reputation: 3,126 days (#26).

So if you are [only happy when it rains](https://www.youtube.com/watch?v=GpBFOJ3R0M4), now you know where to go.

### How I did all this

#### Getting the wettest days for Seattle:

<pre name="5e3b" id="5e3b" class="graf graf--pre graf-after--h4">#standardSQL  
SELECT year, MAX(prcp) max_year, COUNTIF(prcp>1.64) days_over_164, name   
FROM `bigquery-public-data.noaa_gsod.gsod20*` a  
JOIN (  
  SELECT name, CAST(usaf AS STRING) usaf, CAST(wban AS STRING) wban  
  FROM `bigquery-public-data.noaa_gsod.stations`  
  WHERE name LIKE 'SEATTLE-TACOMA%'  
  AND state='WA'  
)  b  
ON a.wban=b.wban AND b.usaf=a.stn   
WHERE prcp!=99.99  
GROUP BY year, name  
ORDER BY year</pre>

Some notes:

*   I had to CAST() some keys before doing the JOIN. We’ll fix [the underlying datasets](https://cloud.google.com/bigquery/public-data/#noaa-gsod)! Anyway, BigQuery can handle JOINs over arbitrary keys, so that wasn’t a big problem.
*   When NOAA doesn’t have the real data for a point, they replace it with a “99.99”. I filtered those rows out, and you should do the same before running any AVG() or similar operations.
*   4.6 inches of rain in 2003? Surely that’s a lot! In fact, it [broke all records](http://www.seattleweatherblog.com/weather-records/seattles-rainiest-day/) for Seattle’s rainiest days. This was after they had the [driest summer on record](http://www.historylink.org/File/5630).

#### Getting the rainiest US cities, by number of rainy days:

<pre name="c38b" id="c38b" class="graf graf--pre graf-after--h4">#standardSQL  
SELECT name, country, state, COUNTIF(prcp>0) rainy_days_17_years, COUNT(DISTINCT year) years, lat, lon  
FROM `bigquery-public-data.noaa_gsod.gsod20*` a  
JOIN (  
  SELECT name, CAST(usaf AS STRING) usaf, CAST(wban AS STRING) wban, country, state, lat, lon  
  FROM `bigquery-public-data.noaa_gsod.stations`  
  WHERE country='US'  
)  b  
ON a.wban=b.wban AND b.usaf=a.stn   
WHERE prcp!=99.99   
GROUP BY name, country, state, lat, lon  
HAVING years=17  
ORDER BY rainy_days_17_years DESC  
LIMIT 60</pre>

### Want to learn more?

Check [Reto Meier](https://medium.com/@retomeier)’s post on our GCP big data blog, where he shows off a lot of the [open datasets we’ve published for the city of NY.](https://cloud.google.com/blog/big-data/2017/01/new-york-city-public-datasets-now-available-on-google-bigquery) For even more fun, find out how to [forecast demand with Google BigQuery, public datasets and TensorFlow](https://cloud.google.com/blog/big-data/2016/05/how-to-forecast-demand-with-google-bigquery-public-datasets-and-tensorflow.html), thanks to [Lakshmanan V](https://medium.com/@lakshmanok).

Want more stories? Check my [Medium](http://medium.com/@hoffa/), [follow me on twitter](http://twitter.com/felipehoffa), and subscribe to [reddit.com/r/bigquery](https://reddit.com/r/bigquery). And [try BigQuery ](https://www.reddit.com/r/bigquery/comments/3dg9le/analyzing_50_billion_wikipedia_pageviews_in_5/)— every month you get a full terabyte of analysis for free.

Here are some other stories I’ve written that make extensive use of BigQuery:

[**400,000 GitHub repositories, 1 billion files, 14 terabytes of code: Spaces or Tabs?**  
_Tabs or spaces. We are going to parse a billion files among 14 programming languages to decide which one is on top._medium.com](https://medium.com/@hoffa/400-000-github-repositories-1-billion-files-14-terabytes-of-code-spaces-or-tabs-7cfe0b5dd7fd "https://medium.com/@hoffa/400-000-github-repositories-1-billion-files-14-terabytes-of-code-spaces-or-tabs-7cfe0b5dd7fd")[](https://medium.com/@hoffa/400-000-github-repositories-1-billion-files-14-terabytes-of-code-spaces-or-tabs-7cfe0b5dd7fd)

[**What countries have more open source developers per capita than the US?**  
_We are going to use GitHub Archive, GHTorrent, population statistics and BigQuery to find the answer._medium.com](https://medium.com/@hoffa/github-top-countries-201608-13f642493773 "https://medium.com/@hoffa/github-top-countries-201608-13f642493773")[](https://medium.com/@hoffa/github-top-countries-201608-13f642493773)








