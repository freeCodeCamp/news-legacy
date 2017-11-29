---
author: Ayo Isaiah
authorTwitter: https://twitter.com/AyIsaiah
authorFacebook: none
title: "Building a TwitchTV Status App"
subTitle: "Last week, I tackled the last of the Intermediate Front-End Projects which involved building a TwitchTv App using the Twitch API to displ..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*9j9Qs6T6aOVoclHT5bKILw.jpeg
url: https://medium.freecodecamp.org/building-a-twitchtv-app-project-8824d61fe7a5
id: building-a-twitchtv-app-project-8824d61fe7a5
date: 2016-04-21T22:48:31.955Z
tags: [
  "JavaScript",
  "Learning To Code",
  "Front End Development",
  "Programming",
  "Technology"
]
---
# Building a TwitchTV Status App



![](https://cdn-images-1.medium.com/max/1600/1*9j9Qs6T6aOVoclHT5bKILw.jpeg)



Last week, I tackled the last of the Intermediate Front-End Projects which involved building a [TwitchTv App](https://www.freecodecamp.com/challenges/use-the-twitchtv-json-api) using the Twitch API to display the status of a set of Twitch Streamers.

These were the user stories for this project:

1.  ​Users can see whether Free Code Camp is currently streaming on Twitch.tv.
2.  ​Users can click the status output and be sent directly to the Free Code Camp’s Twitch.tv channel.
3.  ​If a Twitch streamer is currently streaming, Users can see additional details about what they are streaming.
4.  ​Users will see a placeholder notification if a streamer has closed their Twitch account (or the account never existed).

#### Design

The design of my app is quite similar to the [example app](https://codepen.io/FreeCodeCamp/full/Myvqmo/) given in the project description.

The only major difference is the search input at the top of the page which I put there for the fifth user story (more on this below).

I used [Skeleton](http://getskeleton.com/) to help with basic styling and responsiveness so everything looks good on desktop and mobile.

For the profile pictures, I used background images instead of <img> tags. This is because simply by setting the background-size to cover, it allows the image to scale to the size of it’s container no matter the dimensions.

This is something I learnt while working on the [Random Quote Generator project](http://ayoisaiah.com/random-quote-generator/) and it was nice to put it to practice again here.







![](https://cdn-images-1.medium.com/max/2000/0*F4_Js3354c9E6moX.png)







### Thought Process

First, I made an array of Twitch Streamers and used a for loop to iterate through the array and make consecutive AJAX requests so that I could fetch the data for each streamer.

<pre name="48e3" id="48e3" class="graf graf--pre graf-after--p">var twitchStreamers = ["dreamhackcs", "skyzhar", "freecodecamp", "faceittv", "comster404", "brunofin", "terakilobyte", "robotcaleb", "sheevergaming", "esl_sc2", "ogamingsc2", "jacksofamerica"];</pre>

<pre name="41e4" id="41e4" class="graf graf--pre graf-after--pre">...</pre>

<pre name="66ee" id="66ee" class="graf graf--pre graf-after--pre">for (var i = 0; i < twitchStreamers.length; i++) {  
        ajax();  
}</pre>

<pre name="c555" id="c555" class="graf graf--pre graf-after--pre">...</pre>

<pre name="27ec" id="27ec" class="graf graf--pre graf-after--pre">function ajax () {  
        $.ajax({  
            url: "https://api.twitch.tv/kraken/streams/" + twitchStreamers[i] + "?callback=?",  
            dataType: "jsonp",  
            data: {  
                format: "json"  
            },</pre>

<pre name="f335" id="f335" class="graf graf--pre graf-after--pre">            success: function (data) {  
                fetchData(data);  
            },</pre>

<pre name="5246" id="5246" class="graf graf--pre graf-after--pre">            error: function () {  
                console.log("unable to access json");  
            }  
        });  
    }</pre>

If the AJAX request is successful, it calls another function _fetchData()_ which simply fetches the required data from the JSON output such as the username, status, url and display picture for each channel and calls the _updateHTML()_ function which simply takes the data and updates the DOM.

<pre name="7844" id="7844" class="graf graf--pre graf-after--p">function fetchData (data) {</pre>

<pre name="941c" id="941c" class="graf graf--pre graf-after--pre">        if (data.stream === null) {  
            url = data._links.channel.substr(38);  
            updateOfflineUsers();  
        }</pre>

<pre name="fe9e" id="fe9e" class="graf graf--pre graf-after--pre">        else if (data.status == 422 || data.status == 404) {  
            status = data.message;  
            updateHTML(".unavailable");  
        }</pre>

<pre name="c5ef" id="c5ef" class="graf graf--pre graf-after--pre">        else {  
            if (data.stream.channel.logo !== null) {  
                picture = 'url("' + data.stream.channel.logo + '")';  
            }</pre>

<pre name="3d45" id="3d45" class="graf graf--pre graf-after--pre">            else {  
                picture = 'url("https://cdn.rawgit.com/ayoisaiah/freeCodeCamp/master/twitch/images/placeholder-2.jpg")';  
            }  
            url = data._links.channel.substr(38);  
            status = "" + data.stream.channel.display_name +  "" + " is currently streaming " + data.stream.game;  
            updateHTML(".online");  
        }  
    }</pre>

For offline streamers, there was an extra step. I had to make another API call using [https://api.twitch.tv/kraken/channels/](https://api.twitch.tv/kraken/channels/) to fetch data for each channel because the first call (using [https://api.twitch.tv/kraken/streams/)](https://api.twitch.tv/kraken/streams/%29) provided no info about the offline streamers except the fact that they were not active at that moment.

<pre name="e1e1" id="e1e1" class="graf graf--pre graf-after--p">function updateOfflineUsers () { //If users are offline, make new ajax request to find user info  
        $.ajax({  
            url: "https://api.twitch.tv/kraken/channels/" + url,  
            dataType: "jsonp",  
            data: {format: "json"},  
            success: function (json) {  
                status = "Channel " + "'" + json.display_name + "'" + " is currently offline";  
                if (json.logo !== null) {  
                    picture = 'url("' + json.logo + '")';  
                }  
                else {  
                    picture = 'url("https://cdn.rawgit.com/ayoisaiah/freeCodeCamp/master/twitch/images/placeholder-2.jpg")';  
                }  
                updateHTML(".offline");  
            }  
        });  
    }</pre>

Once I had those in place, the four user stories were completed and I was ready to go. At this point, I marked the project as completed, but soon after, I thought it would be really cool to extend the functionality of the app a little bit.

This was when I added a fifth user story:

*   Users can search for TwitchTv Streamers and view whether they are online or not.

So I made a search function that takes the input of the user and uses it to make the API call:

<pre name="6dc7" id="6dc7" class="graf graf--pre graf-after--p">function search () {  
        $(".online, .offline, .unavailable").empty();  
        showAll();    
        var searchQuery = $(".search-twitch").val();  
        var user = searchQuery.replace(/[^A-Z0-9_]/ig, "");  
        $.ajax({  
            url: "https://api.twitch.tv/kraken/streams/" + user,  
            dataType: "jsonp",  
            data: {  
                format: "json"  
            },</pre>

<pre name="c03d" id="c03d" class="graf graf--pre graf-after--pre">            success: function (data) {  
                fetchData(data);                      
            }  
        });  
    }</pre>

I used a bit of regex to remove special characters and spaces from the users query leaving only numbers, letters and underscores. I think this is important because Twitch does not allow special characters (such as $, &, e.t.c) or spaces in the usernames, so it was necessary to filter those out.

It also helps so that if a user searches for something like “free code camp” (separating whole words with spaces) instead of “freecodecamp”, it still returns the expected relevant result.







![](https://cdn-images-1.medium.com/max/2000/0*yeGvdOIbRVvRkawQ.png)







So that was pretty much it for this project. You can view the [final version](http://codepen.io/ayoisaiah/full/MyGjpz/) on Codepen.

#### Key Takeaway

Even as I write this blog post, several ways to improve the user experience on my app continue to pop into my head so my key takeaway from this project is:

**Software is never finished.** [It is a process and it is always evolving](http://scripting.com/davenet/1995/09/03/wemakeshittysoftware.html).

#### What’s next

Right now, I’m pushing hard to finish the [Intermediate Algorithm Scripting](https://www.freecodecamp.com/map-aside#nested-collapseIntermediateAlgorithmScripting) section on FCC in the next couple of days so that I can quickly move on to the Advanced Algorithm section.

My (short-term) goal remains claiming the [Front-End Certification](http://www.freecodecamp.com/challenges/claim-your-front-end-development-certificate) by the end of May and if all goes well, I should be able to get it by then. Wish me luck.











* * *







_If you want to reach out or connect with me, you can find me on_ [_Twitter_](https://twitter.com/ayisaiah) _or_ [_email me_](mailto:ayisaiah@gmail.com)_. A version of this post was publish on my_ [_personal blog_](http://www.ayoisaiah.com/twitch-tv-project/)_._








