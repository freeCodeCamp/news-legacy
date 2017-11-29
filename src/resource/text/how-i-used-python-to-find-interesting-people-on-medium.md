---
author: Radu Raicea
authorTwitter: https://twitter.com/radu_raicea
authorFacebook: none
title: "How I used Python to find interesting people to follow on Medium"
subTitle: "Medium has a large amount of content, a large number of users, and an almost overwhelming number of posts. When you try to find interesti..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*9rLeOFD7rvImTlcXQUe-mw.png
url: https://medium.freecodecamp.org/how-i-used-python-to-find-interesting-people-on-medium-be9261b924b0
id: how-i-used-python-to-find-interesting-people-on-medium-be9261b924b0
date: 2017-10-11T11:31:24.120Z
tags: [
  "Python",
  "Web Development",
  "Medium",
  "Startup",
  "Technology"
]
---
# How I used Python to find interesting people to follow on Medium



![](https://cdn-images-1.medium.com/max/1600/1*9rLeOFD7rvImTlcXQUe-mw.png)

Image credit: [Old Medium logo](https://icons8.com/icon/21634/medium)



Medium has a large amount of content, a large number of users, and an almost overwhelming number of posts. When you try to find interesting users to interact with, you’re flooded with visual noise.

I define an interesting user as someone who is from your network, who is active, and who writes responses that are generally appreciated by the Medium community.

I was looking through the latest posts from users I follow to see who had responded to those users. I figured that if they responded to someone I’m following, they must have similar interests to mine.

The process was tedious. And that’s when I remembered the most valuable lesson I learned during my last internship:

**Any tedious task can and should be automated.**

I wanted my automation to do the following things:

1.  Get all the **users** from my “Followings” list
2.  Get the latest **posts** of each user
3.  Get all the **responses** to each post
4.  Filter out responses that are older than 30 days
5.  Filter out responses that have less than a minimum number of recommendations
6.  Get the **username** of the author of each response

### Let’s start pokin’

I initially looked at [Medium’s API](https://github.com/Medium/medium-api-docs), but found it limiting. It didn’t give me much to work with. I could only get information about my account, not on other users.

On top of that, the last change to Medium’s API was over a year ago. There was no sign of recent development.

I realized that I would have to rely on HTTP requests to get my data, so I started to poke around using my [**Chrome DevTools**](https://developer.chrome.com/devtools).

The first goal was to get my list of Followings.

I opened up my DevTools and went on the Network tab. I filtered out everything but [XHR](https://en.wikipedia.org/wiki/XMLHttpRequest) to see where Medium gets my list of Followings from. I hit the reload button on my profile page and got nothing interesting.

What if I clicked the Followings button on my profile? Bingo.







![](https://cdn-images-1.medium.com/max/2000/1*JupqRL6NMgJRVu0vrQr3_Q.png)

Finding the link that lists a user’s followings







Inside the link, I found a very big [JSON](https://en.wikipedia.org/wiki/JSON) response. It was a well-formatted JSON, except for a string of characters at the beginning of the response: `])}while(1);</x>`

I wrote a function to clean that up and turn the JSON into a Python dictionary.

<pre name="6a42" id="6a42" class="graf graf--pre graf-after--p">import json</pre>

<pre name="ed24" id="ed24" class="graf graf--pre graf-after--pre">def clean_json_response(response):  
    return json.loads(response.text.split('])}while(1);</x>')[1])</pre>

I had found an entry point. Let the coding begin.

### Getting all the users from my Followings list

To query that endpoint, I needed my User ID (I know that I already had it, but this is for educational purposes).

While looking for a way to get a user’s ID, I [found out](https://medium.com/statuscode/building-a-basic-web-service-to-display-your-medium-blog-posts-on-your-website-using-aws-api-48597b1771c5) that you can add `?format=json` to most Medium URLs to get a JSON response from that page. I tried that out on my profile page.

Oh look, there’s the user ID.

<pre name="78d6" id="78d6" class="graf graf--pre graf-after--p">])}while(1);</x>{"success":true,"payload":{"user":{**"userId":"d540942266d0"**,"name":"Radu Raicea","username":"Radu_Raicea",  
...</pre>

I wrote a function to pull the user ID from a given username. Again, I had to use `clean_json_response` to remove the unwanted characters at the beginning of the response.

I also made a constant called `MEDIUM` that contains the base for all the Medium URLs.

<pre name="f30a" id="f30a" class="graf graf--pre graf-after--p">import requests</pre>

<pre name="0098" id="0098" class="graf graf--pre graf-after--pre">MEDIUM = 'https://medium.com'</pre>

<pre name="d21d" id="d21d" class="graf graf--pre graf-after--pre">def get_user_id(username):</pre>

<pre name="35ae" id="35ae" class="graf graf--pre graf-after--pre">    print('Retrieving user ID...')</pre>

<pre name="9a5a" id="9a5a" class="graf graf--pre graf-after--pre">    url = MEDIUM + '/@' + username + '?format=json'  
    response = requests.get(url)  
    response_dict = clean_json_response(response)  
    return response_dict['payload']['user']['userId']</pre>

With the User ID, I queried the `/_/api/users/<user_id>/following` endpoint and got the list of usernames from my Followings list.

When I did it in DevTools, I noticed that the JSON response only had eight usernames. Weird.

After I clicked on “Show more people,” I saw what was missing. Medium uses [**pagination**](https://developer.twitter.com/en/docs/ads/general/guides/pagination) for the list of Followings.







![](https://cdn-images-1.medium.com/max/2000/1*WgYlp-dmUC9kdQ0iSNUtdg.png)

Medium uses pagination for Followings list







Pagination works by specifying a `limit` (elements per page) and `to` (first element of the next page). I had to find a way to get the ID of that next element.

At the end of the JSON response from `/_/api/users/<user_id>/following`, I saw an interesting key.

<pre name="e226" id="e226" class="graf graf--pre graf-after--p">...  
"paging":{"path":"/_/api/users/d540942266d0/followers","next":{"limit":8,**"to":"49260b62a26c"**}}},"v":3,"b":"31039-15ed0e5"}</pre>

From here, writing a loop to get all the usernames from my Followings list was easy.

<pre name="2bc0" id="2bc0" class="graf graf--pre graf-after--p">def get_list_of_followings(user_id):</pre>

<pre name="2e45" id="2e45" class="graf graf--pre graf-after--pre">    print('Retrieving users from Followings...')  

    next_id = False  
    followings = []</pre>

<pre name="4e3c" id="4e3c" class="graf graf--pre graf-after--pre">    while True:</pre>

<pre name="99db" id="99db" class="graf graf--pre graf-after--pre">        if next_id:  
            # If this is not the first page of the followings list  
            url = MEDIUM + '/_/api/users/' + user_id  
                  + '/following?limit=8&to=' + next_id  
        else:  
            # If this is the first page of the followings list  
            url = MEDIUM + '/_/api/users/' + user_id + '/following'</pre>

<pre name="5a5a" id="5a5a" class="graf graf--pre graf-after--pre">        response = requests.get(url)  
        response_dict = clean_json_response(response)  
        payload = response_dict['payload']</pre>

<pre name="6925" id="6925" class="graf graf--pre graf-after--pre">        for user in payload['value']:  
            followings.append(user['username'])</pre>

<pre name="8bdf" id="8bdf" class="graf graf--pre graf-after--pre">        try:  
            # If the "to" key is missing, we've reached the end  
            # of the list and an exception is thrown  
            next_id = payload['paging']['next']['to']  
        except:  
            break</pre>

<pre name="77e1" id="77e1" class="graf graf--pre graf-after--pre">    return followings</pre>

### Getting the latest posts from each user

Once I had the list of users I follow, I wanted to get their latest posts. I could do that with a request to `[https://medium.com/@<username>/latest?format=json](https://medium.com/@username/latest?format=json)`

I wrote a function that takes a list of usernames and returns a list of post IDs for the latest posts from all the usernames on the input list.

<pre name="8f2a" id="8f2a" class="graf graf--pre graf-after--p">def get_list_of_latest_posts_ids(usernames):</pre>

<pre name="5faa" id="5faa" class="graf graf--pre graf-after--pre">    print('Retrieving the latest posts...')</pre>

<pre name="6a34" id="6a34" class="graf graf--pre graf-after--pre">    post_ids = []</pre>

<pre name="8e4f" id="8e4f" class="graf graf--pre graf-after--pre">    for username in usernames:  
        url = MEDIUM + '/@' + username + '/latest?format=json'  
        response = requests.get(url)  
        response_dict = clean_json_response(response)</pre>

<pre name="d797" id="d797" class="graf graf--pre graf-after--pre">        try:  
            posts = response_dict['payload']['references']['Post']  
        except:  
            posts = []</pre>

<pre name="21df" id="21df" class="graf graf--pre graf-after--pre">        if posts:  
            for key in posts.keys():  
                post_ids.append(posts[key]['id'])</pre>

<pre name="008c" id="008c" class="graf graf--pre graf-after--pre">    return post_ids</pre>

### Getting all the responses from each post

With the list of posts, I extracted all the responses using `https://medium.com/_/api/posts/<post_id>/responses`

This function takes a list of post IDs and returns a list of responses.

<pre name="3ed5" id="3ed5" class="graf graf--pre graf-after--p">def get_post_responses(posts):</pre>

<pre name="304d" id="304d" class="graf graf--pre graf-after--pre">    print('Retrieving the post responses...')</pre>

<pre name="5511" id="5511" class="graf graf--pre graf-after--pre">    responses = []</pre>

<pre name="923e" id="923e" class="graf graf--pre graf-after--pre">    for post in posts:  
        url = MEDIUM + '/_/api/posts/' + post + '/responses'  
        response = requests.get(url)  
        response_dict = clean_json_response(response)  
        responses += response_dict['payload']['value']</pre>

<pre name="a825" id="a825" class="graf graf--pre graf-after--pre">    return responses</pre>

#### Filtering the responses

At first, I wanted responses that had gotten a minimum number of claps. But I realized that this might not be a good representation of the community’s appreciation of the response: a user can give more than one clap for the same article.

Instead, I filtered by the number of recommendations. It measures the same thing as claps, but it doesn’t take duplicates into account.

I wanted the minimum to be dynamic, so I passed a variable named `recommend_min` around.

The following function takes a response and the `recommend_min` variable. It checks if the response meets that minimum.

<pre name="80eb" id="80eb" class="graf graf--pre graf-after--p">def check_if_high_recommends(response, recommend_min):  
    if response['virtuals']['recommends'] >= recommend_min:  
        return True</pre>

I also wanted recent responses. I filtered out responses that were older than 30 days using this function.

<pre name="824f" id="824f" class="graf graf--pre graf-after--p">from datetime import datetime, timedelta</pre>

<pre name="0b6c" id="0b6c" class="graf graf--pre graf-after--pre">def check_if_recent(response):  
    limit_date = datetime.now() - timedelta(days=30)  
    creation_epoch_time = response['createdAt'] / 1000  
    creation_date = datetime.fromtimestamp(creation_epoch_time)</pre>

<pre name="59a3" id="59a3" class="graf graf--pre graf-after--pre">    if creation_date >= limit_date:  
        return True</pre>

### Getting the username of the author of each response

Once I had all the filtered responses, I grabbed all the authors’ user IDs using the following function.

<pre name="590d" id="590d" class="graf graf--pre graf-after--p">def get_user_ids_from_responses(responses, recommend_min):</pre>

<pre name="7ef2" id="7ef2" class="graf graf--pre graf-after--pre">    print('Retrieving user IDs from the responses...')</pre>

<pre name="2e7c" id="2e7c" class="graf graf--pre graf-after--pre">    user_ids = []</pre>

<pre name="f1ee" id="f1ee" class="graf graf--pre graf-after--pre">    for response in responses:  
        recent = check_if_recent(response)  
        high = check_if_high_recommends(response, recommend_min)</pre>

<pre name="3c60" id="3c60" class="graf graf--pre graf-after--pre">        if recent and high:  
            user_ids.append(response['creatorId'])</pre>

<pre name="e4da" id="e4da" class="graf graf--pre graf-after--pre">    return user_ids</pre>

User IDs are useless when you’re trying to access someone’s profile. I made this next function query the `/_/api/users/<user_id>` endpoint to get the usernames.

<pre name="5f86" id="5f86" class="graf graf--pre graf-after--p">def get_usernames(user_ids):</pre>

<pre name="bb6f" id="bb6f" class="graf graf--pre graf-after--pre">    print('Retrieving usernames of interesting users...')</pre>

<pre name="5c16" id="5c16" class="graf graf--pre graf-after--pre">    usernames = []</pre>

<pre name="e87d" id="e87d" class="graf graf--pre graf-after--pre">    for user_id in user_ids:  
        url = MEDIUM + '/_/api/users/' + user_id  
        response = requests.get(url)  
        response_dict = clean_json_response(response)  
        payload = response_dict['payload']</pre>

<pre name="31e8" id="31e8" class="graf graf--pre graf-after--pre">        usernames.append(payload['value']['username'])</pre>

<pre name="b72c" id="b72c" class="graf graf--pre graf-after--pre">    return usernames</pre>

### Putting it all together

After I finished all the functions, I created a [pipeline](https://en.wikipedia.org/wiki/Pipeline_%28software%29) to get my list of recommended users.

<pre name="0941" id="0941" class="graf graf--pre graf-after--p">def get_interesting_users(username, recommend_min):</pre>

<pre name="925a" id="925a" class="graf graf--pre graf-after--pre">    print('Looking for interesting users for %s...' % username)</pre>

<pre name="6e21" id="6e21" class="graf graf--pre graf-after--pre">    user_id = get_user_id(username)</pre>

<pre name="a9d0" id="a9d0" class="graf graf--pre graf-after--pre">    usernames = get_list_of_followings(user_id)</pre>

<pre name="f2ae" id="f2ae" class="graf graf--pre graf-after--pre">    posts = get_list_of_latest_posts_ids(usernames)</pre>

<pre name="8890" id="8890" class="graf graf--pre graf-after--pre">    responses = get_post_responses(posts)</pre>

<pre name="798b" id="798b" class="graf graf--pre graf-after--pre">    users = get_user_ids_from_responses(responses, recommend_min)</pre>

<pre name="13de" id="13de" class="graf graf--pre graf-after--pre">    return get_usernames(users)</pre>

The script was finally ready! To run it, you have to call the pipeline.

<pre name="119b" id="119b" class="graf graf--pre graf-after--p">interesting_users = get_interesting_users('Radu_Raicea', 10)  
print(interesting_users)</pre>



![](https://cdn-images-1.medium.com/max/1600/1*e19LB9EslgNyp73O6YFV-Q.png)

Image credit: [Know Your Meme](http://knowyourmeme.com/photos/185885-success-kid-i-hate-sandcastles)



Finally, I added an option to append the results to a CSV with a timestamp.

<pre name="19c2" id="19c2" class="graf graf--pre graf-after--p">import csv</pre>

<pre name="aef3" id="aef3" class="graf graf--pre graf-after--pre">def list_to_csv(interesting_users_list):  
    with open('recommended_users.csv', 'a') as file:  
        writer = csv.writer(file)</pre>

<pre name="9a6d" id="9a6d" class="graf graf--pre graf-after--pre">        now = datetime.now().strftime('%Y-%m-%d %H:%M:%S')  
        interesting_users_list.insert(0, now)  

        writer.writerow(interesting_users_list)</pre>

<pre name="6d42" id="6d42" class="graf graf--pre graf-after--pre">interesting_users = get_interesting_users('Radu_Raicea', 10)  
list_to_csv(interesting_users)</pre>

The project’s source code is on [GitHub](https://github.com/Radu-Raicea/Interesting-People-On-Medium).

If you don’t know Python, go read [TK](https://medium.com/@leandrotk_)’s [Learning Python: From Zero to Hero](https://medium.freecodecamp.org/learning-python-from-zero-to-hero-120ea540b567).

If you have suggestions on other criteria that make users interesting, please **write them below!**

### In summary…

*   I made a [**Python script for Medium**](https://github.com/Radu-Raicea/Interesting-People-On-Medium).
*   The script returns a list of interesting users that are **active** and **post interesting responses** on the latest posts of people you are following.
*   You can take users from the list and run the script with their username instead of yours.

**Check out my** [**primer**](https://medium.freecodecamp.org/how-open-source-licenses-work-and-how-to-add-them-to-your-projects-34310c3cf94) **on open source licenses and how to add them to your projects!**

For more updates, follow me on [Twitter](https://twitter.com/radu_raicea).








