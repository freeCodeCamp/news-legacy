---
author: Ofir Chakon
authorTwitter: https://twitter.com/OfirChakon
authorFacebook: https://facebook.com/1195079090603676
title: "When is the best time to stream on Facebook Live? I analyzed 5,000 Facebook posts to find out."
subTitle: "Streaming on Facebook Live can be a powerful marketing strategy for startups and businesses. They can share knowledge, provide value, get..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*Mrg0GKl9ZPW_mQv2iy0DHw.png
url: https://medium.freecodecamp.org/the-best-time-to-stream-on-facebook-live-my-analysis-5-000-facebook-posts-c8346b732d0f
id: the-best-time-to-stream-on-facebook-live-my-analysis-5-000-facebook-posts-c8346b732d0f
date: 2017-10-04T20:42:29.215Z
tags: [
  "Startup",
  "Entrepreneurship",
  "Data Science",
  "Marketing",
  "Facebook"
]
---
# **When is the best time to stream on Facebook Live? I analyzed 5,000 Facebook posts to find out.**







![](https://cdn-images-1.medium.com/max/2000/1*Mrg0GKl9ZPW_mQv2iy0DHw.png)







Streaming on Facebook Live can be a powerful marketing strategy for startups and businesses. They can share knowledge, provide value, get exposure and collect high-quality leads.

Prepare your Facebook Live session upfront. Researching about your target audience and build a detailed agenda. The session can boost your business dramatically.

I was Chief of Product and Technology of my previous startup dealing with fraud detection. I decided to try Facebook Live as a new marketing strategy.

It was still fairly new at the time. Once a Facebook Live session was up, relevant people got Facebook notifications to join the session. This increased the exposure even more.

There are many posts talking about how to better build your Facebook live session. They discuss which topics to cover, building an agenda, camera angles, session duration, and more.



![](https://cdn-images-1.medium.com/max/1600/0*o_cbyEk29AxNKtTv.jpg)



But there is one piece of the puzzle that business owners and marketers often tend to forget or do not pay attention to: **When is the best time to stream your Facebook Live session?**

You can answer this question using an educated guess based on your familiarity with the target audience.

For example:

*   Pregnant moms are ready to consume your Live session on Monday afternoon.
*   Teenagers at the ages of 18–22 are in the right mindset on Saturday morning.

But there is so much data around us that we can use with a few clicks of a button. You actually stay behind if you don’t make a proper usage of some of the data available.

Almost every marketing platform or social network opens API services. You, as a technological entrepreneur, can easily consume these. This data can provide valuable conclusions that can drive your business objectives beyond your competitors.

This approach is often called **Data-driven decisions**.

Once you start justifying any or at least most of your business decisions using data you own or data you can collect from different resources, you can stop guessing and start making data-driven decisions.

I like to think of data-driven decisions as crowd-sourcing. Lior Zoref was on [this TED talk](https://www.youtube.com/watch?v=din2UVvRnGU) . He invited an ox to the stage and asked the audience to guess its’ weight. If you watched this, you were probably overwhelmed by how accurate the crowd’s average was compared to the real weight of the ox: 1,792 pounds or 1795 pounds!







![](https://cdn-images-1.medium.com/max/2000/0*pZMDKzRFKgEGErnu.jpg)







When you’re making guesses about your business objectives as individuals, you’re not different than any individual sitting in the crowd and trying to evaluate the ox’s weight. You can even be the one who guessed 300 pounds or 8000 pounds, which may cost your business a lot of unnecessary expenses.

But, if you’re using the wisdom of the crowd to make data-driven decisions, you’ll most likely be ahead of every other individual. In business terms, you’ll be ahead of your competitors.

I’m not a pure marketer. But with basic data analysis skills I can push my business forward in all aspects, including marketing.

I’m going to walk you through a practical step-by-step guide about how to access Facebook data. Then how to analyze it based on our needs about the optimized time to broadcast on Facebook Live.

To follow this guide you need:

*   A Facebook account
*   A Facebook group you would like to analyze  
    If it’s a private group then you need to be a group member
*   Python 2.7 installed
*   Jupyter notebook installed
*   [Facebook graph API Python library](https://facebook-sdk.readthedocs.io/en/latest/api.html) installed

A Jupyter notebook is a recommended tool for data analysis in Python. It has a lot of highlights. It enables you to run snippets of code and save the results in memory. So you won’t run all your scripts over and over again every time you implement a minor change. This is crucial when doing data analysis because some tasks can take a lot of execution time.

Although it’s not essential, I recommend working inside a Python virtual environment. [Here is a post I wrote](https://codingstartups.com/3-best-practices-better-setting-django-project/) about the advantages of a virtual environment when using Python.

I recommend working in an [Ubuntu environment](https://codingstartups.com/moved-windows-linux-lessons-learned/) when doing data-analysis using Jupyter notebooks.

### Step 1 — Getting the Facebook group ID

To get data from Facebook API, we need to specify the ID of the entity we want to get data from, in our case, a Facebook group.

[Lookup-id.com](https://lookup-id.com/#) is a nice tool you can use to find the ID of a group based on its URL. Copy the URL of your group and paste it in the search bar.



![](https://cdn-images-1.medium.com/max/1600/0*9XX0AbtkIO9ZUCvR.png)



In this article, we will use the group: [Web Design and Development](https://www.facebook.com/groups/websworld/).

ID: **319479604815804**

### Step 2 — Getting to know the Graph API Explorer

To get the most out of Facebook API besides [documentation](https://developers.facebook.com/docs/), Facebook has developed a playground for developers called the [Graph API Explorer](https://developers.facebook.com/tools/explorer/).

The Graph API Explorer enables us to get a temporary access token and start examining the capabilities that Facebook API has to offer.

Click on **Get Token.** Don’t select any permission. Click **Get Access Token** .







![](https://cdn-images-1.medium.com/max/2000/0*s5cVGfvTYTidrryB.png)







Facebook API has many endpoints you can use. In this guide, we are going to use two main endpoints:

*   The [group endpoint](https://developers.facebook.com/docs/graph-api/reference/v2.10/group/)
*   The [reactions endpoint](https://developers.facebook.com/docs/graph-api/reference/v2.10/object/reactions)

To figure out the structure of the response you’re expecting to get, specify the endpoint URL and click **Submit**.

Let’s examine the URL endpoint for grabbing the last posts from the group’s feed. Type this URL in the Graph API Explorer:

<pre name="e680" id="e680" class="graf graf--pre graf-after--p">319479604815804/feed</pre>

and hit **Submit**.



![](https://cdn-images-1.medium.com/max/1600/0*uupOHHw7qbOn0Lr8.png)



You should now see the last posts from the group’s feed in a JSON structure. It contains the post’s content, its id and the updated time. By clicking on one of the id’s and adding to the end of the URL:

<pre name="d2e9" id="d2e9" class="graf graf--pre graf-after--p">319479604815804_1468216989942054/reactions?summary=total_count</pre>

You should see a list of the reactions for the specific post, and a summary of the total count of reactions.

This way you can play around with all the features the Facebook API has to offer.

Another tool for examining API endpoints of APIs which don’t offer a playground is [Postman](https://codingstartups.com/8-top-must-use-tools-boost-web-development-workflow/). You can read more about this tool and essential tools for [web developers.](https://codingstartups.com/8-top-must-use-tools-boost-web-development-workflow/)

### Step 3 — Our plan and assumptions

Our goal is to find the best time to have a Facebook Live session in the group that contains our target audience. To do that, we assume that the more activity there is in the group at a specific time, the most likely our Facebook Live session will gain more traction.

So our goal now is to figure out when there is a peak in the group’s activity over time. And by when I mean a specific weekday and time.

To do that, we are going to grab the last 5,000 posts from the group’s feed. Then we’ll plot the distribution of the times they were updated.

We assume that longer posts indicate more activity in the group because members spend more time in the group writing them. So, our next step will be to take into consideration the length of each post in the distribution.

Reaction on Facebook is probably a great indication of people engaging with a specific post. Thus, our last step will be to collect the total number of `reactions` for each post. Then take that into account in the distribution of activity over weekdays and hours.

Because `reactions` may come after the post, we should be cautious using this data analysis approach.

### Step 4 — Let’s analyze some data!

To start a Jupyter notebook, you should execute:

<pre name="7a22" id="7a22" class="graf graf--pre graf-after--p">ipython notebook</pre>

and then choose New → Python 2.



![](https://cdn-images-1.medium.com/max/1600/0*6P7GWlo3Ns2NpASy.png)



To analyze and plot the data, we are going to use the `numpy` and `matplotlib` libraries. These are very popular Python libraries you should use to better analyze your data.

Let’s import all the libraries we need:

<pre name="b6ef" id="b6ef" class="graf graf--pre graf-after--p">import matplotlib.pyplot as plt  
import numpy as np  
import facebook  
import urlparse  
import datetime  
import requests</pre>

and specify our access token and group id:

<pre name="2aaa" id="2aaa" class="graf graf--pre graf-after--p">ACCESS_TOKEN = 'INSERT_ACCESS_TOKEN_HERE'  
GROUP_ID = '319479604815804' # Web Design and Development group</pre>

Then, let’s initialize the API object with our access token:

<pre name="0db9" id="0db9" class="graf graf--pre graf-after--p">graph = facebook.GraphAPI(ACCESS_TOKEN)</pre>

Now we want to grab the posts from the group’s feed. To avoid errors during the API calls, we will limit each API call to 50 posts and iterate over 100 API calls:

<pre name="a1e3" id="a1e3" class="graf graf--pre graf-after--p">posts = []  
url = "{}/feed?limit=50".format(GROUP_ID)  
until = None  
for i in xrange(100):  
    if until is not None:  
        url += "&until={}".format(until)  
    response = graph.request(url)  
    data = response.get('data')  
    if not data:  
        break  
    posts = posts + data  
    next_url = response.get("paging").get("next")  
    parsed_url = urlparse.urlparse(next_url)  
    until = urlparse.parse_qs(parsed_url.query)["until"][0]</pre>

<pre name="ab62" id="ab62" class="graf graf--pre graf-after--pre">In each API call, we specify the until parameter to get older posts.</pre>

<pre name="9077" id="9077" class="graf graf--pre graf-after--pre">Now, let’s organize the posts into weekdays and hours of the day:</pre>

<pre name="52ab" id="52ab" class="graf graf--pre graf-after--pre">weekdays = {i: 0 for i in xrange(7)}</pre>

<pre name="390f" id="390f" class="graf graf--pre graf-after--pre">hours_of_day = {i: 0 for i in xrange(24)}</pre>

<pre name="20fa" id="20fa" class="graf graf--pre graf-after--pre">hours_of_week = np.zeros((7,24), dtype=np.int)  
for post in posts:  
    updated = datetime.datetime.strptime(post.get("updated_time"), "%Y-%m-%dT%H:%M:%S+0000")  
    weekday = updated.weekday()  
    hour_of_day = updated.hour  
    weekdays[weekday] += 1  
    hours_of_day[hour_of_day] += 1  
    hours_of_week[weekday][hour_of_day] += 1</pre>

and then, plot the results using `matplotlib` bar charts:

<pre name="9508" id="9508" class="graf graf--pre graf-after--p">plt.bar(weekdays.keys(), weekdays.values(), color='g')  
plt.show()</pre>



![](https://cdn-images-1.medium.com/max/1600/0*7EBuTS63BVl4XxCu.png)

0 represents Monday



<pre name="6c7f" id="6c7f" class="graf graf--pre graf-after--figure">plt.bar(hours_of_day.keys(), hours_of_day.values(), color='r')  
plt.show()</pre>



![](https://cdn-images-1.medium.com/max/1600/0*MHyBwZYypHQuDJD5.png)

All times specified in IST



With only this basic analysis, we can already learn a lot about better or worse time slots for broadcasting to this group. But it does not seem informative enough. Maybe because the data is divided into 2 graphs and missing some critical information.

Let’s try to present a heat map of the data, that enables us to see 3D information:

<pre name="085d" id="085d" class="graf graf--pre graf-after--p">plt.imshow(hours_of_week, cmap='hot')  
plt.show()</pre>



![](https://cdn-images-1.medium.com/max/1600/0*yXVACIVJjnf5RJlL.png)



Well, this is much better! We can see that the group is very active on Monday to Friday between 6:00 am and 10:00 am.

Now let’s take into consideration to post length and see how it affects the results:

<pre name="4e0d" id="4e0d" class="graf graf--pre graf-after--p">weekdays_content = {i: 0 for i in xrange(7)}  
hours_of_day_content = {i: 0 for i in xrange(24)}  
hours_of_week_content = np.zeros((7,24), dtype=np.int)  
for post in posts:  
    updated = datetime.datetime.strptime(post.get("updated_time"), "%Y-%m-%dT%H:%M:%S+0000")  
    weekday = updated.weekday()  
    hour_of_day = updated.hour  
    content_length = len(post["message"]) if "message" in post else 1  
    weekdays_content[weekday] += content_length  
    hours_of_day_content[hour_of_day] += content_length  
    hours_of_week_content[weekday][hour_of_day] += content_length</pre>

The heatmap we get:



![](https://cdn-images-1.medium.com/max/1600/0*6pGyIouyTC9DEMKa.png)



This is nice but should be treated with caution. On one hand, we can see a very specific time that is the optimized time slot to have our Facebook Live session. But, it might be an outlier of a super long post.

I’ll leave it to you to figure it out in your next data analysis project. Take a larger amount of posts or grab an older batch of 5000 posts from the group’s feed.

To take `reactions` into account when analyzing the data, we need to make another API call for each post.

This is because it’s a different API endpoint:

<pre name="2085" id="2085" class="graf graf--pre graf-after--p">weekdays_reactions = {i: 0 for i in xrange(7)}  
hours_of_day_reactions = {i: 0 for i in xrange(24)}  
hours_of_week_reactions = np.zeros((7,24), dtype=np.int)  
for i, post in enumerate(posts):  
    url = "https://graph.facebook.com/v2.10/{id}/reactions?access_token={token}&summary=total_count".format(  
    id=post["id"],  
        token=ACCESS_TOKEN  
    )</pre>

<pre name="0bcd" id="0bcd" class="graf graf--pre graf-after--pre">headers = {  
        "Host": "graph.facebook.com"  
    }</pre>

<pre name="f264" id="f264" class="graf graf--pre graf-after--pre">response = requests.get(url, headers=headers)</pre>

<pre name="4dec" id="4dec" class="graf graf--pre graf-after--pre">try:  
        total_reactions = 1 + response.json().get("summary").get("total_count")  
    except:  
        total_reactions = 1</pre>

<pre name="a3dd" id="a3dd" class="graf graf--pre graf-after--pre">updated = datetime.datetime.strptime(post.get("updated_time"), "%Y-%m-%dT%H:%M:%S+0000")  
    weekday = updated.weekday()  
    hour_of_day = updated.hour  
    weekdays_reactions[weekday] += total_reactions  
    hours_of_day_reactions[hour_of_day] += total_reactions  
    hours_of_week_reactions[weekday][hour_of_day] += total_reactions</pre>

We used a low-level approach by specifying the exact HTTP request and did not use the Facebook Python library. This is because that library doesn’t support the last version of the Facebook API required when querying the `reactions` endpoint.

The heat map generated from this data:



![](https://cdn-images-1.medium.com/max/1600/0*wYrM99vFQyrlEYf7.png)



We can conclude that the three approaches we used agree on Monday and Wednesday, 6:00 am to 7:00 am.

### Conclusions

Data analysis can be challenging and often requires creativity. But it also exciting and very rewarding.

After choosing our time to broadcast on Facebook Live based on the analysis presented here, we had a huge success and a lot of traction during our Live session.

I encourage you to try and use data analysis to make data-driven decisions in your next business move. And start thinking in terms of data-driven decisions.

You can find the Github repository [here](https://github.com/CodingStartups/facebook-live-data).

I originally published this on [CodingStartups](https://codingstartups.com/).








