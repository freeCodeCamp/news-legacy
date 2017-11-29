---
author: Felipe Hoffa
authorTwitter: https://twitter.com/felipehoffa
authorFacebook: none
title: "Want people to actually answer your Stack Overflow question? Add a question mark."
subTitle: "Last week, my team at Google announced that we’d be hosting all of Stack Overflow’s Q&A data on BigQuery...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*bsIhDEEHdsa47enj6HOkMw.png
url: https://medium.freecodecamp.org/always-end-your-questions-with-a-stack-overflow-bigquery-and-other-stories-2470ebcda7f
id: always-end-your-questions-with-a-stack-overflow-bigquery-and-other-stories-2470ebcda7f
date: 2016-12-20T17:20:46.575Z
tags: [
  "Big Data",
  "Stackoverflow",
  "Google Cloud Platform",
  "Data Science",
  "Programming"
]
---
# Want people to actually answer your Stack Overflow question? Add a question mark.







![](https://cdn-images-1.medium.com/max/2000/1*bsIhDEEHdsa47enj6HOkMw.png)







Last week, my team at Google announced that we’d be hosting all of [Stack Overflow’s Q&A data on BigQuery](https://cloud.google.com/blog/big-data/2016/12/google-bigquery-public-datasets-now-include-stack-overflow-q-a).

Here are some of the most interesting insights about Stack Overflow that we’ve uncovered so far.

### Setting up the data dump

Nick Craver at Stack Overflow announced a new dataset dump on Friday:





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/67679b600f1aad80763892c6e38c3701?postId=2470ebcda7f" data-media-id="67679b600f1aad80763892c6e38c3701" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FCzvCPZzWIAA0nAn.jpg%3Alarge&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





We quickly loaded the full data dump into BigQuery:



![](https://cdn-images-1.medium.com/max/1600/1*onk9dwc_Asm07w6OMm-Idw.png)

Stack Overflow in BigQuery updated to 2016–12–11



### If you want an answer, use a question mark

[Sara Robinson](https://medium.com/@srobtweets) discovered that only 22% of Stack Overflow questions end with a question mark.





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/61439dd151688706e8739c7bb59c4ede?postId=2470ebcda7f" data-media-id="61439dd151688706e8739c7bb59c4ede" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FC0DcdrqWIAAmdbr.jpg%3Alarge&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





So I thought — hm… that’s interesting. But does adding a “?” actually help you get answers?

So I did an analysis of how many questions got an “accepted answer.” I then grouped them by whether or not they ended with a question mark.



![](https://cdn-images-1.medium.com/max/1600/1*qvVojKa45zfcVkV16w0tNQ.png)



It turns out that in 2016, 78% of questions ending in “?” got an accepted answer versus only only 73% of questions that didn’t end in “?”. And this pattern remains consistent if you look back through the years.

So if you want people to actually answer your Stack Overflow questions, end them with a question mark.

What about the number of answers a given question gets? Do questions that end with a “?” get more replies?

Yes, they do:



![](https://cdn-images-1.medium.com/max/1600/1*BCSCEVof4tU6UYMPfMqnHA.png)



Using a question mark in 2015 and 2016 gave questions at least 7% more answers. This is even more noticeable in 2008 and 2009, during which questions with a “?” have received 23% more answers than questions without one.

Here’s the query I ran to get these results:

<pre name="fedb" id="fedb" class="graf graf--pre graf-after--p">#standardSQL  
SELECT   
  EXTRACT(YEAR FROM creation_date) year,   
  IF(title LIKE '%?', 'ends with ?', 'does not') ends_with_question,  
  ROUND(COUNT(accepted_answer_id )* 100/COUNT(*), 2) as answered ,  
  ROUND(AVG(answer_count), 3) as avg_answers   
FROM `bigquery-public-data.stackoverflow.posts_questions`  
WHERE creation_date < (SELECT TIMESTAMP_SUB(MAX(creation_date), INTERVAL 24*90 HOUR)  
FROM `bigquery-public-data.stackoverflow.posts_questions` )  
GROUP BY 1,2  
ORDER BY 1,2</pre>

I built the above visualizations using [re:dash](https://redash.io/).

Here’s a bonus visualization I did of how long it takes to get an answer depending on which programming language you’re asking about — and the total volume of questions and answers for each language:





<iframe data-width="700" data-height="440" width="700" height="440" src="https://medium.freecodecamp.org/media/6ef867d51bab4abc0ba5a4ca92bccc57?postId=2470ebcda7f" data-media-id="6ef867d51bab4abc0ba5a4ca92bccc57" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fexploratory.io%2Fviz%2Ffelipehoffa%2F8173308739241814%2Fthumbnail.png%3Fcb%3D1482229002683&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Here’s an [interactive version](https://public.tableau.com/profile/publish/StackOverflowdataonBigQuery/Sheet1#!/publish-confirm).

And here’s the query I ran to get these results:

<pre name="80af" id="80af" class="graf graf--pre graf-after--p">  
#standardSQL  
SELECT tag, COUNT(*) c, COUNT(DISTINCT b.owner_user_id) answerers, AVG(TIMESTAMP_DIFF(b.creation_date,a.creation_date, MINUTE)) time_to_answer  
FROM (  
  SELECT *  
  FROM (  
    SELECT id, EXTRACT(YEAR FROM creation_date) year, SPLIT(tags, '|') tags, accepted_answer_id, creation_date   
    FROM `bigquery-public-data.stackoverflow.posts_questions`    
  ), UNNEST(tags) tag  
  WHERE accepted_answer_id IS NOT null  
) a  
LEFT JOIN `bigquery-public-data.stackoverflow.posts_answers` b  
ON a.accepted_answer_id=b.id  
GROUP BY 1  
HAVING c>300  
ORDER BY 2 DESC  
LIMIT 1000</pre>

Here’s Stack Overflow’s CEO announcing the fully query-able dataset:





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/1475134645d67ca217bb661a84d66fdb?postId=2470ebcda7f" data-media-id="1475134645d67ca217bb661a84d66fdb" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F451185078073171968%2FT4QKBj-E_bigger.jpeg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





One final interesting study: [Graham Polley](http://twitter.com/polleyg) wrote a great post showing how to take Stack Overflow comments from BigQuery, run a sentiment analysis process on them with our [Natural Language API](https://cloud.google.com/natural-language/) and [Dataflow](https://cloud.google.com/dataflow), then bring them back to BigQuery to discover the most positive/negative communities.

His conclusion:

> “Well, it turns out that Python developers post the lowest percent of negative comments overall, followed by Java, and then it’s JavaScript developers that are the (**according to the NL-API**) most unwelcoming to new users on Stack Overflow.” — Graham Polley





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/63bca5e355aa534bae224cc8d2ef9066?postId=2470ebcda7f" data-media-id="63bca5e355aa534bae224cc8d2ef9066" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F711856089558425600%2F4ied3FWt_bigger.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





### Want to learn more?

Check the GCP Big Data blog post, which includes queries on [how to JOIN Stack Overflow’s data with other datasets like Hacker News and GitHub](https://cloud.google.com/blog/big-data/2016/12/google-bigquery-public-datasets-now-include-stack-overflow-q-a).

Want more stories? Check my [medium](http://medium.com/@hoffa/), [follow me on twitter](http://twitter.com/felipehoffa), and subscribe to [reddit.com/r/bigquery](https://reddit.com/r/bigquery). And [try BigQuery ](https://www.reddit.com/r/bigquery/comments/3dg9le/analyzing_50_billion_wikipedia_pageviews_in_5/)— every month you get a full terabyte of analysis for free.

[**What countries have more open source developers per capita than the US?**  
_We are going to use GitHub Archive, GHTorrent, population statistics and BigQuery to find the answer._medium.com](https://medium.com/@hoffa/github-top-countries-201608-13f642493773 "https://medium.com/@hoffa/github-top-countries-201608-13f642493773")[](https://medium.com/@hoffa/github-top-countries-201608-13f642493773)

Also, here’s:

*   Infoworld’s report: [Google BigQuery provides insight into Stack Overflow discussion data](http://www.infoworld.com/article/3151159/developer/google-bigquery-provides-insight-into-stack-overflow-discussion-data.html)
*   Comments from the [Hacker News discussion](https://news.ycombinator.com/item?id=13188988)
*   [Kaitlin Pike](https://medium.com/@kcpike)’s announcement on the [Stack Overflow official blog](http://stackoverflow.blog/2016/12/You-Can-Now-Play-With-Stack-Overflow-Data-on-Googles-BigQuery/).








