---
author: Ayo Isaiah
authorTwitter: https://twitter.com/AyIsaiah
authorFacebook: none
title: "Building a Weather App with Geolocation and APIs"
subTitle: "Last week I tackled Free Code Camp’s Show the Local Weather project, which involved building an app that displayed the weather wherever t..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*59ubn1l9M0KjGGe2Bd9Sxw.jpeg
url: https://medium.freecodecamp.org/building-a-weather-app-a3cec42b11fa
id: building-a-weather-app-a3cec42b11fa
date: 2016-03-29T20:28:43.513Z
tags: [
  "JavaScript",
  "API",
  "Learning To Code",
  "Technology",
  "Design"
]
---
# Building a Weather App with Geolocation and APIs







![](https://cdn-images-1.medium.com/max/2000/1*59ubn1l9M0KjGGe2Bd9Sxw.jpeg)







Last week I tackled Free Code Camp’s [Show the Local Weather](https://www.freecodecamp.com/challenges/show-the-local-weather) project, which involved building an app that displayed the weather wherever the user happened to be.

I had to implement the following user stories:

*   User can view the weather in his/her current location.
*   User can toggle the temperature unit (Celsius or Fahrenheit).
*   Weather icon or background image will change depending on weather conditions.

I decided to take it a bit further by adding one more user story

*   User can search for weather information of other places.

#### Design

I had a bunch of ideas for the design of this app and I did look at a few completed projects (without checking their code, of course) from the community to see what other folks were displaying in their app and how it looked.

Coming up with a final layout was a bit tricky but I found it helpful to decide the elements I wanted to display for the user and build from there.

Keeping things simple was the aim here. I decided to show only the temperature and weather description in addition to the local time.

I also liked the animated weather icon in the [example project](http://codepen.io/FreeCodeCamp/full/bELRjV) and felt that was a better representation of the current weather than a background image so I wanted to implement that into my app.

As usual, I put everything down in my [Workflowy](https://workflowy.com/invite/2dbe7482.lnx).



![](https://cdn-images-1.medium.com/max/1600/0*pXrIhfKeyy9-l38u.png)



Setting everything up was pretty straight forward except finding a suitable animated icon set. I had to search a bit before I found [Skycons](https://darkskyapp.github.io/skycons/) which is what I ended up using.

The other thing I struggled with was finding a good colour scheme for the app, and this is something I almost always struggle with. I experimented with different combinations before landing the final product.







![](https://cdn-images-1.medium.com/max/2000/0*e-_dbhFTqw7WMHwg.png)







#### Logic

After looking at an example API response from [Open Weather](http://openweathermap.org/current#geo), I figured I’ll need to get the longitude and latitude of the user to be able to serve weather information on page load.

The easiest way to do this was to use the HTML5 Geolocation API which was pretty straightforward it had already been covered it in the JSON and APIs section of the curriculum.

I stored the returned values in already declared variables and used them to make the AJAX request.

<pre name="a0f0" id="a0f0" class="graf graf--pre graf-after--p">if (navigator.geolocation) {</pre>

<pre name="80e9" id="80e9" class="graf graf--pre graf-after--pre">    //Return the user's longitude and latitude on page load using HTML5 geolocation API</pre>

<pre name="0b94" id="0b94" class="graf graf--pre graf-after--pre">    window.onload = function () {  
    var currentPosition;  
    function getCurrentLocation (position) {  
        currentPosition = position;  
        latitude = currentPosition.coords.latitude;  
        longitude = currentPosition.coords.longitude;</pre>

<pre name="0d9c" id="0d9c" class="graf graf--pre graf-after--pre">        //AJAX request</pre>

<pre name="2420" id="2420" class="graf graf--pre graf-after--pre">        $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=******************", function (data) {  
            var rawJson = JSON.stringify(data);  
            var json = JSON.parse(rawJson);  
            updateWeather(json); //Update Weather parameters  
        });  
    }</pre>

<pre name="67f4" id="67f4" class="graf graf--pre graf-after--pre">    navigator.geolocation.getCurrentPosition(getCurrentLocation);</pre>

<pre name="87ce" id="87ce" class="graf graf--pre graf-after--pre">    };</pre>

The Open Weather API gave me a way to update the location, temperature and weather description but I still needed to find a way to update the local time. After a bit of searching I found another API at [Geonames.org](http://geonames.org/) which took care of this.

<pre name="573d" id="573d" class="graf graf--pre graf-after--p">$.getJSON('http://api.geonames.org/timezoneJSON?lat=' + latitude + '&lng=' + longitude + '&username=ayoisaiah', function(timezone) {  
            var rawTimeZone = JSON.stringify(timezone);  
            var parsedTimeZone = JSON.parse(rawTimeZone);  
            var dateTime = parsedTimeZone.time;  
            timeFull = dateTime.substr(11);  
            $(".local-time").html(timeFull); //Update local time  
            timeHour = dateTime.substr(-5, 2);  
    });</pre>

The last thing I did was to update the weather icon on the conditions in the user’s location or city of interest. I decided a good way to do this was to check the weather description and change the icon based on that.

So I considered a few possible scenarios such as clear sky, cloud, snow, sunny, rain e.t.c and wrote a bunch of conditional statements to check if the weather description contained one of keywords and then update the weather icon.

<pre name="cc89" id="cc89" class="graf graf--pre graf-after--p">//Update Weather animation based on the returned weather description</pre>

<pre name="88f7" id="88f7" class="graf graf--pre graf-after--pre">    var weather = json.weather[0].description;</pre>

<pre name="dc35" id="dc35" class="graf graf--pre graf-after--pre">    if(weather.indexOf("rain") >= 0) {  
        skycons.set("animated-icon", Skycons.RAIN);  
    }</pre>

<pre name="7b3b" id="7b3b" class="graf graf--pre graf-after--pre">    else if (weather.indexOf("sunny") >= 0) {  
        skycons.set("animated-icon", Skycons.CLEAR_DAY);  
    }</pre>

I have discovered, through various tests, that this method is not 100% foolproof but it worked well enough for me to stick with it.

You can checkout the full code and effects on [Codepen](http://codepen.io/ayoisaiah/full/LNLzgx/).

#### Key takeaway

My major takeaway from this project is that I learnt how to access each part of the returned JSON data from the API response and use it in different ways. Although my methodology needs some refining, it’s bound to get better with more practice.

#### What’s next…

The next project for me is the [Wikipedia Viewer app](https://www.freecodecamp.com/challenges/build-a-wikipedia-viewer). I’m halfway through already as I write this article so it should be completed by Thursday at the latest.











* * *







_If you want to reach out or connect with me, you can find me on_ [_Twitter_](https://twitter.com/ayisaiah) _or_ [_email me_](mailto:ayisaiah@gmail.com)_. Thanks for reading._








