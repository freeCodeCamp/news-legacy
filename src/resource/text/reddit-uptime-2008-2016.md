---
author: Felipe Hoffa
authorTwitter: https://twitter.com/felipehoffa
authorFacebook: none
title: "Visualizing reddit’s activity and uptime over the past 8 years"
subTitle: "How hard would it be to visualize reddit’s uptime from 2008 to 2016? Let’s do it here, while going through most of its history...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*MMexVh-UJB1Pj16uTmFA9g.png
url: https://medium.freecodecamp.org/reddit-uptime-2008-2016-b3d7b11046e0
id: reddit-uptime-2008-2016-b3d7b11046e0
date: 2016-08-17T13:20:46.593Z
tags: [
  "Bigquery",
  "Data Visualization",
  "Data Science",
  "Startup",
  "Tech"
]
---
# Visualizing reddit’s activity and uptime over the past 8 years



![](https://cdn-images-1.medium.com/max/1600/1*AS7IaJ9RWnRhOdgxN1GM_g.png)



How hard would it be to visualize reddit’s uptime from 2008 to 2016? Let’s do it here, while going through most of its history.

We’ll be looking at the number of comments per minute that reddit gets. From 1 in 2008 to more than 2300 comments per minute in 2016.

It’s pretty tight, as there are a lot of minutes during these 9 years. My favorite thing to look at are the dashes of white space (when reddit was down), plus how it keeps growing steadily and rhythmically.

### 2008 — getting started

I don’t know if reddit was up or down, but I can take a look at how many comments were posted per minute during that year (thanks /u/stuck_in_the_matrix for collecting these comments!).

Let’s look at how many comments were posted per minute during 2008 (all times are UTC):







![](https://cdn-images-1.medium.com/max/2000/1*MMexVh-UJB1Pj16uTmFA9g.png)







(_How cool is that?)_

*   The “peak rate” of comments during 2008 was above 40 per minute.
*   The white pixels show minutes when reddit got zero comments. The longer the line, the longer reddit was down — with the longest period being around 5 hours!
*   2008 trivia: reddit got its first sub-reddits in January.
*   Minutes _down_: 1586.

Many of the white dots during night might not be reddit being down, but just having very few users at that time. Let’s see how this changes through time:

### 2009: reddit is growing







![](https://cdn-images-1.medium.com/max/2000/1*HPKGgXYlGp7x29BBrS3OUA.png)







*   Peak rate is going up — from more than 40 comments/minute in 2008 to more than 105 comments/minute in 2009.
*   The longest period of downtime we can see here is more than 7 hours during May.
*   Can you notice the chart getting brighter towards the bottom? That’s reddit growing, and getting more comments every minute.
*   2009 trivia: /r/IAmA is created in January. October marks [Alexis Ohanian](https://en.wikipedia.org/wiki/Alexis_Ohanian "Alexis Ohanian") and [Steve Huffman](https://en.wikipedia.org/wiki/Steve_Huffman "Steve Huffman") departure.
*   Minutes _down_: 1079.

### 2010: The downtime is too high







![](https://cdn-images-1.medium.com/max/2000/1*hQoNTL5BFG9zqdFHCVfIOw.png)







*   Reddit is growing, more than doubling the rate of comments per minute every year — but also showing a lot of growing pains.
*   This was the year that reddit migrated their servers to AWS. Here they explain why [reddit was down 71 minutes in March](http://archive.is/wjPCC).
*   2010 trivia: Reddit gold was created in July.
*   Minutes _down_: 3004.

### 2011: reddit keeps growing, despite downtime







![](https://cdn-images-1.medium.com/max/2000/1*bn1_AI7mO4v59zXTB46nhg.png)







*   Reddit looks unstoppable — this year the comment rate per minute continues going up, more than doubling 2010 records.
*   In March reddit was down for [more than 6 hours](https://www.reddit.com/r/blog/comments/g66f0/why_reddit_was_down_for_6_of_the_last_24_hours/). The post-mortem is not on the internet anymore, but the comments show many redditors being skeptic of ‘the cloud’.
*   Worse days were coming ahead, as in April [AWS took down many websites for more than 24 hours](http://money.cnn.com/2011/04/21/technology/amazon_server_outage/) — including reddit.
*   2011 trivia: Reddit becomes operationally [independent of Condé Nast](https://en.wikipedia.org/wiki/Timeline_of_Reddit).
*   Minutes _down_: 4966.

### 2012: better uptime and growing up







![](https://cdn-images-1.medium.com/max/2000/1*XEUDdjdYCoZDXHbOodGZOg.png)







*   Most downtime periods seem to be planned now: At the middle of the night, when comment rates is at the lowest.
*   That ugly 12 hour downtime period during January? Totally planned: reddit and other [major websites joined forces to stop SOPA](http://www.theverge.com/2012/1/18/2715300/sopa-blackout-wikipedia-reddit-mozilla-google-protest).
*   Periods of unplanned downtime seem surrounded by periods of very low commenting rate — probably users were facing lots of errors before and after total shutdown.
*   2012 trivia: Yishan Wong becomes CEO in March. President [Obama dropped by /r/IAmA](https://www.reddit.com/r/IAmA/comments/z1c9z/i_am_barack_obama_president_of_the_united_states/) during August (try to spot in the chart how reddit behaved).
*   Minutes _down_: 1681 - 720 (SOPA) = 961.

### 2013: sweet stable growth







![](https://cdn-images-1.medium.com/max/2000/1*0t769lr3P0eqZFVWEI0_fw.png)







*   2013 looks pretty, though reddit stopped doubling its growth rate.
*   In April reddit went [through a severe DDoS attack](https://www.reddit.com/r/redditTraffic/comments/1cq6q0/20130419_graph_of_the_ddos_event/), while many redditors where busy trying to identify the Boston bomber.
*   Minutes _down_: 247.

### 2014: the year of uptime







![](https://cdn-images-1.medium.com/max/2000/1*XS_vupWv-Nz4DODojnbacg.png)







*   More of that stable growth: Not a lot downtime visible, while growth rate stays up (but not doubling as in the earlier years).
*   2014 trivia: Ellen Pao becomes reddit’s CEO in November. Alexis Ohanian returns.
*   Minutes _down_: 71.

### 2015: turbulent waters, nice uptime







![](https://cdn-images-1.medium.com/max/2000/1*qD9HuTueH8v6UWcXlHn8tg.png)







*   Reddit starts getting consistently more than 2000 comments per minute.
*   In early June reddit’s [Victoria is fired](http://www.businessinsider.com/reddit-in-chaos-hundreds-subreddits-go-private-after-victoria-leaves-iama-2015-7), and redditors unite in protest turning many subredddits off. The commenting rate stayed visibly up that night.
*   2015 trivia: Steve Huffman returns as CEO. Reddit [comments loaded into BigQuery](https://www.reddit.com/r/bigquery/comments/3cej2b/17_billion_reddit_comments_loaded_on_bigquery/) that July.
*   Minutes _down_: 231.

### 2016: present, future, and beyond







![](https://cdn-images-1.medium.com/max/2000/1*BFxucuhoVX1GO-3Zli2K1w.png)







*   Reddit stays on its “slower” growth curve, and shows some nice stable uptime.
*   Reddit [goes down for 90 minutes](https://www.reddit.com/r/announcements/comments/4y0m56/why_reddit_was_down_on_aug_11/) in August and they publish a post about it. Said post inspires me to write this one :).
*   Minutes “down”: 198 (and counting).

### Everything together

Get the full picture at [http://imgur.com/a/qejIw](http://imgur.com/a/qejIw).





<iframe data-width="550" data-height="550" width="550" height="550" src="https://medium.freecodecamp.org/media/1b563bf9e9543dbf22ea8ae7ea453c57?postId=b3d7b11046e0" data-media-id="1b563bf9e9543dbf22ea8ae7ea453c57" allowfullscreen="" frameborder="0"></iframe>





### How-to:

#### BigQuery queries

2008–2014 are archived in one table per year in BigQuery:

<pre name="4e10" id="4e10" class="graf graf--pre graf-after--p">SELECT INTEGER(created_utc/(60*60*24)) day, INTEGER(created_utc/60)-INTEGER(created_utc/(60*60*24))*60*24 minute, COUNT(*) c  
FROM [fh-bigquery:reddit_comments.%s]   
GROUP BY 1,2  
ORDER BY 1,2</pre>

For 2016 I mixed the monthly tables, and the live realtime posts that /u/Stuck_in_the_Matrix maintains:

<pre name="68ad" id="68ad" class="graf graf--pre graf-after--p">SELECT INTEGER(created_utc/(60*60*24)) day, INTEGER(created_utc/60)-INTEGER(created_utc/(60*60*24))*60*24 minute, COUNT(*) c  
FROM TABLE_QUERY([fh-bigquery:reddit_comments], "table_id CONTAINS '2016' AND LENGTH(table_id)<8"), (  
  SELECT TIMESTAMP_TO_SEC(created_utc) created_utc  
  FROM [pushshift:rt_reddit.comments]  
  WHERE YEAR(created_utc)=2016  
  AND MONTH(created_utc)>5  
)    
GROUP BY 1,2  
ORDER BY 1,2</pre>

#### Charting

Python, pandas, and matplotlib magic:

<pre name="69f0" id="69f0" class="graf graf--pre graf-after--p">def mymap(year):  
  pivoted=df[year].pivot('day', 'minute', 'c').clip(0,df[year].c.quantile(0.999))  
  fig, ax = plt.subplots(figsize=(26,26))  
  ax.grid(False)  
  plt.imshow(pivoted, origin='upper').set_cmap('copper')  
  ax.set_xticklabels(['%02i:%02i' % divmod(x, 60)  for x in ax.get_xticks()])  
  ax.set_yticklabels([(datetime.datetime(year, 1, 1) + datetime.timedelta(x)).strftime('%m-%d')  for x in ax.get_yticks()])  
  ax.set_title('reddit uptime: comments per minute %s        by [@felipehoffa](http://twitter.com/felipehoffa "Twitter profile for @felipehoffa")      reddit.com/r/bigquery' % year)</pre>

<pre name="68e7" id="68e7" class="graf graf--pre graf-after--pre">plt.colorbar(fraction=0.0125, pad=0.001, label='comments per minute')  
  plt.show()</pre>

#### Counting downtime

(If you have a better way, please share)

<pre name="04e7" id="04e7" class="graf graf--pre graf-after--p">for year in range(2008,2017):  
  down=df[year].pivot('day', 'minute', 'c').isnull().sum().sum()  
  print '%s %s' %( year ,down)</pre>

### More?

Want more stories? Check [my medium](http://medium.com/@hoffa/), [add me on twitter](http://twitter.com/felipehoffa), and subscribe to [reddit.com/r/bigquery](https://reddit.com/r/bigquery).

Thanks for your likes, favs, and comments!

[**Reddit’s presidential race: Candidate mentions in comments**  
_Update: Reddit’s Upvoted made a full feature on this chart with added commentaries: https://upvoted.com/2015/11/14…_medium.com](https://medium.com/google-cloud/reddit-s-presidential-race-candidate-mentions-in-comment-1f9fd6a7985a "https://medium.com/google-cloud/reddit-s-presidential-race-candidate-mentions-in-comment-1f9fd6a7985a")[](https://medium.com/google-cloud/reddit-s-presidential-race-candidate-mentions-in-comment-1f9fd6a7985a)

[**Big data stories in seconds: Hacker News and BigQuery**  
_After having a lot of fun with reddit’s data on BigQuery(collected by @jasonbaumgart, see the announcement and Max…_medium.com](https://medium.com/google-cloud/big-data-stories-in-seconds-hacker-news-abe52bc5caad "https://medium.com/google-cloud/big-data-stories-in-seconds-hacker-news-abe52bc5caad")[](https://medium.com/google-cloud/big-data-stories-in-seconds-hacker-news-abe52bc5caad)





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/f10a870a54f6b381b6cfb822bc800b0c?postId=b3d7b11046e0" data-media-id="f10a870a54f6b381b6cfb822bc800b0c" allowfullscreen="" frameborder="0"></iframe>












