---
author: Romain Thalineau
authorTwitter: none
authorFacebook: none
title: "Monitoring the French Presidential Election on Twitter with Python"
subTitle: "A while ago I read this nice article from Laurent Luce where he explained how he implemented a system that collected the tweets related t..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*Gm6Q_bRGS6yJWRuESpPx5w.png
url: https://medium.freecodecamp.org/monitoring-the-french-presidential-election-on-twitter-with-python-6a2a9310e6f4
id: monitoring-the-french-presidential-election-on-twitter-with-python-6a2a9310e6f4
date: 2017-02-12T09:19:26.787Z
tags: [
  "Neo4j",
  "Python",
  "Tech",
  "Politics",
  "Web Development"
]
---
# Monitoring the French Presidential Election on Twitter with Python







![](https://cdn-images-1.medium.com/max/2000/1*Gm6Q_bRGS6yJWRuESpPx5w.png)

The 16 French Presidential candidates. Photos from Reuters.







A while ago I read [this nice article](http://www.laurentluce.com/posts/python-twitter-statistics-and-the-2012-french-presidential-election/) from Laurent Luce where he explained how he implemented a system that collected the tweets related to the 2012 French presidential election. The article is very well written, and I highly recommend reading it.

This gave me the idea to implement something similar for the 2017 election. But I wanted to add some features:

*   Instead of using a SQL database for storing the data, I wanted to use a Graph database. The main reason was to experiment with such a system, but it’s fairly easy to see how this is a good fit for social media data.
*   I wanted to be able to monitor the data in real time. Practically speaking, this means that the data need to be processed as they arrive. This would also involve serving the analyzed data to a web site with data visualizations.
*   Ideally I wanted to run a sentiment analysis on the tweets. I would train a learning algorithm and implement it along the data pipeline to serve its results in real time.







![](https://cdn-images-1.medium.com/max/2000/1*y9G8AIt2rJnWwhjdv_Zn0w.png)

[Time Series Analysis](https://www.auguratech.com/#/twitter/time_series)







Well, I managed to build all of this. You can go to see how it looks like on [my personal website](https://www.auguratech.com/#/twitter). So far, there are two simple analyses:

*   [The first one](https://www.auguratech.com/#/twitter/time_series) is a time series analysis, which shows the numbers of tweets per candidates as a function of the date. Besides being able to select the starting/ending date and the period, you can also display just the candidates you would like to see by clicking on their names in the visualization.
*   [The second analysis](https://www.auguratech.com/#/twitter/geospatial) displays the geolocation of the tweets. The options are relatively similar to the first analysis.







![](https://cdn-images-1.medium.com/max/2000/1*G8iD7P81--DVJf1NTDTmbA.png)

[Tweet geolocation analysis](https://www.auguratech.com/#/twitter/geospatial)







For collecting the data from Twitter, I used an approach similar to Laurent Luce. Instead of focusing on the similarities, I’ll show you the approaches I took that were different.

#### Storing the tweets in a graph database

As I said, I wanted to store the data in a graph database. I chose to use [Neo4J](https://neo4j.com/). In a graph database, data are modeled using a combination of nodes, edges, and properties structures.



![](https://cdn-images-1.medium.com/max/1600/1*XlHtECBpilVo7Jk7ujcCbA.png)

[Image credit](http://network.graphdemos.com/)



In our case, nodes can represent a tweet, a user or even a hashtag. They can be distinguished by using a label. The relationship between nodes is handled by connecting them through edges. For example, a user node can be connected to a tweet node via a POSTS relationship.

The relationships are directional. A tweet can’t POST a user, but it can MENTION a user.

Finally both nodes and edges (relationships) can hold properties. For example, a user has a name and a tweet has text.

When interacting with a graph database, Object Graph Mapper (OGM) are particularly useful. In this project, I’ve been using [Neomodel](https://github.com/robinedwards/neomodel). It exposes an API relatively similar to the Django models API. You define your models like:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/7906b7c0e733a716edaa283e2b09c137?postId=6a2a9310e6f4" data-media-id="7906b7c0e733a716edaa283e2b09c137" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F9165318%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





As you can see, both the property and the relationships are defined. I invite you checking the models file in [my github repo](https://github.com/romaintha/twitter/blob/master/twitter/models.py) to see the full data model definition.

Neo4J being a NoSQL database, it uses a non-SQL query language called Cypher. It’s a pretty straightforward language. For instance, the following query will return all the tweets posted by a user that contain the word “fillon” (one of the candidates):

<pre name="8173" id="8173" class="graf graf--pre graf-after--p">MATCH (u:User)-[:POSTS]->(t:Tweet) WHERE t.text contains "fillon" return t</pre>

Neomodel being an OGM, it provides an API so you don’t have to write very many queries manually. You can obtained the same results as above by running:

<pre name="b430" id="b430" class="graf graf--pre graf-after--p">Tweet.nodes.filter(text__contains="fillon")</pre>

#### Streaming from Twitter

Twitter provides two ways to get their data. The first one is through a standard REST API. Each endpoint access is limited, so it isn’t the preferred solution in our case.

Luckily, Twitter also provides a streaming API. By setting a filter, we can receive all the tweets that pass this filter (with a limit of 1% of the global amount of tweets published at instant t). The library [Tweepy](https://github.com/tweepy/tweepy) facilitates this process.

As you can see in [my repo](https://github.com/romaintha/twitter/blob/master/twitter/streaming_api.py), you need to define a Listener class, which will trigger some actions while streaming. For instance, the method “on_status” is called any time a tweet is streamed.

In addition, I defined a Streaming class whose responsibilities are to authenticate to Twitter, to instantiate a Tweepy stream with the above Listener, and to expose a method to start streaming. The “start_streaming” method accepts a “to_track” argument, which is a list of words on which you want to filter.

You have to instantiate the Streaming class with a bunch of arguments. Aside from the Twitter API credentials, you need “pipeline” and “batch_size” arguments. The latter is a number specifying the amount of tweets that are processed at once.

Since processing a tweet involves saving it to Neo4J, doing it one by one is a very costly operation. Saving them by batches of 100 (or even more in some cases) improves performance considerably.

The “pipeline” argument must be a reference to a function, which will receive the batch of tweets. Inside of this, you are free to do whatever you want. I provided an example of it in the [utils.py](https://github.com/romaintha/twitter/blob/master/twitter/utils.py) module.

As you can see, this function makes a call to an asynchronous Celery task defined in the [tasks.py](https://github.com/romaintha/twitter/blob/master/twitter/tasks.py) module. [Celery](http://www.celeryproject.org/) is a Python distributed task queue library. I used it with [RabbitMQ](https://www.rabbitmq.com/) as a message broker. So how does it work? Let us get back to the “streaming_pipeline” function in the [utils.py](https://github.com/romaintha/twitter/blob/master/twitter/utils.py) module, and focus on this line:

<pre name="20e1" id="20e1" class="graf graf--pre graf-after--p">bulk_parsing.delay(users_attributes, tweets_attributes)</pre>

When this line is processed, instead of processing the “bulk_parsing” function synchronously, a message will be published to a broker (here RabbitMQ). It allows for consumers (workers) to retrieve these messages, and therefore to process the “bulk_parsing” task asynchronously and in parallel. Why’s that? Because it enables horizontal scaling of tweet processing. If the messages accumulate faster than you can process them, you can add more workers to help consume them.

One final remark. I wanted the process to be as versatile as possible, in the sense that if the processing needed to be change — or if something needed to be added — it must be easy to do so. In this case, I can just change the “streaming_pipeline” function and add some asynchronous tasks. It’s quick and easy to modify.

Thanks for reading!

*   Be sure to check out the code [in my Github repo](https://github.com/romaintha/twitter).
*   You can see all this in action [on my site](http://network.graphdemos.com/), where I used this to feed some analysis.








