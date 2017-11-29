---
author: Marty Laurita
authorTwitter: none
authorFacebook: none
title: "For more realistic FramerJS prototypes, just add data"
subTitle: "Most interaction prototypes today serve one purpose: to convince your user that this prototype is what the “real thing” will look like an..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*uTJpHuWyI1Ly0QxpN31zng.jpeg
url: https://medium.freecodecamp.org/i-tried-framer-and-i-loved-it-part-2-31fdef35a1e2
id: i-tried-framer-and-i-loved-it-part-2-31fdef35a1e2
date: 2016-08-17T02:01:09.857Z
tags: [
  "Tech",
  "Design",
  "UX",
  "Web Development",
  "Prototyping"
]
---
# For more realistic FramerJS prototypes, just add data







![](https://cdn-images-1.medium.com/max/2000/1*uTJpHuWyI1Ly0QxpN31zng.jpeg)







> _“Data! Data! Data! I can’t make bricks without clay!”  
>  — _Sir Arthur Conan Doyle

Most interaction prototypes today serve one purpose: to convince your user that this prototype is what the “real thing” will look like and feel like.

In the past, designers have achieved this with fancy user interfaces, animations, and fluid transitions.

But those don’t quite cut it anymore. Users have become jaded to these tricks. They lived through the iPhone era, and now expect a fluid UI to come standard.

So what’s the next frontier then? How can we convince people that a prototype is “real”?

By using real data.



![](https://cdn-images-1.medium.com/max/1600/1*fB_mOGZmJkwGuH8FKlaLEg.png)

Time to go down the rabbit-hole…



[FramerJS](http://framerjs.com/) is a powerful code-based framework for building prototypes for your web apps and mobile apps. In this article, I’ll show you how you can use it to build a realistic prototype that features real data.



![](https://cdn-images-1.medium.com/max/1600/1*wF2EU3omgx3fjto1dg_DaQ.png)

Framer’s Interface, Framerjs.com



As a rider of the Massachusetts Bay Transportation Authority (MBTA), I have the distinct pleasure of riding a transit system that is over 100 years old.

As you can imagine, the trains aren’t always on time.

I’ve become relatively familiar with Framer, and as such, I decided to try and design an app to solve this problem.

As a designer who has only a whisper of an understanding of code, this was daunting to say the least.

I called up my brother, a talented computer science major at Tufts, and we got down to business.



![](https://cdn-images-1.medium.com/max/1600/1*tW5yLcMD5PaItUXRX42atA.png)

[come hither]



### Locating our users

The first thing to do was find the user’s location in realtime.

Today’s mobile browsers have this feature built-in.

With two functions, you can get the latitude and longitude of your user.

Then, you can just stick those coordinates into what’s called a [hash table of key value pairs](https://www.google.com/search?q=define+hash+table&oq=define+hash+table&aqs=chrome..69i57j69i60j69i65j69i61j69i60j69i61.2328j0j1&sourceid=chrome&ie=UTF-8). In this table of data, the key might be “dog_breed” and the value might be “Pomeranian.” So now, you can call on that key whenever you need it, and it will return its corresponding value.

Here’s what we ended up with:

<pre name="5190" id="5190" class="graf graf--pre graf-after--p">#get location  
getLocation = () ->  
 print “INSIDE GET LOC”  
 navigator.geolocation.getCurrentPosition(showPosition);</pre>

<pre name="3a65" id="3a65" class="graf graf--pre graf-after--pre">showPosition = (position) ->  
 print “INSIDE SHOW POS”  
 gpsCoords = {  
 “client_lat”: “#{position.coords.latitude}”,  
 “client_lon”: “#{position.coords.longitude}”  
 }</pre>

Now that we have the user’s exact location, it’s time for phase II.

### Locating our trains



![](https://cdn-images-1.medium.com/max/1600/1*5amOvRRisonvOElk5FEBIg.png)

Where’s that train….Mr. Andersonnnnn?



Getting the user’s location was the easy part. Now, we need to find and parse the API data from the MBTA.

Unfortunately, this organization is about as organized as any other under-funded government operation.

So, their code was — how should I put this — a little janky. Here’s what it looks like:



![](https://cdn-images-1.medium.com/max/1600/1*dCq_ElttyZtLMMttM2NN-w.png)

Kiiind of a jumbled mess.



The data was nested in a combination of arrays and key value pairs. Some of them were data tables with just one entry. It took some time to understand how to pull out the data we needed.

Regardless, once we understood the structure, the idea was to grab the location data from the user’s browser and insert that into the API call to the MBTA. Then the MBTA API would return all data closest to that location.

The first piece of data we wanted was the closest station to the current location:

<pre name="fe40" id="fe40" class="graf graf--pre graf-after--p">#grab MBTA station data  
data = JSON.parse Utils.domLoadDataSync “[http://realtime.mbta.com/developer/api/v2/stopsbylocation?api_key=De_WCTE-gkyYSitBw82YSw&lat=#](http://realtime.mbta.com/developer/api/v2/stopsbylocation?api_key=De_WCTE-gkyYSitBw82YSw&lat=#){gpsCoords["client_lat"]}&lon=#{gpsCoords["client_lon"]}&format=json"  

 stops = data[“stop”]  

 stationText.html = null  

 for i in stops   
 if i[“parent_station_name”] != “”  
 stationText.html = “The closest station to you is “ + i[“parent_station_name”] + “.”</pre>

Once we had the data, we then parsed it into something humans can read. We created a string (an English sentence) that said “The closest station to you is” and then tacked the station name on at the end. And Voila! The first step!



![](https://cdn-images-1.medium.com/max/1600/1*ozf2Sc1dMH0r997KqD0owA.png)



It worked like a charm!

Except not in Google Chrome.

We quickly learned that for some strange reason, Google had decided to disable location APIs. Really Google? You don’t have enough billions to give some location data to the little guy?

But anyway, the prototype works great in Safari.



![](https://cdn-images-1.medium.com/max/1600/1*0drrFbT4cHXESfQNDWjizg.png)



After celebrating our initial success, we decided to make our lives hard again.

What if we wanted to know not only the nearest station, but also how far the closest train was, where it was coming from, and how many minutes away it was?

Oh boy.



![](https://cdn-images-1.medium.com/max/1600/1*PcK8FpAi0-cgX4NpIIDrZA.png)

That “uh-oh” moment.



### More Crazy Data

Now that we had a handle on how the MBTA data jives, we dove into a second API that provides (mostly) accurate train data.

After some finagling, we had something like this:

<pre name="7e32" id="7e32" class="graf graf--pre graf-after--p">#grab nearest train data  
 data2 = JSON.parse Utils.domLoadDataSync “[http://realtime.mbta.com/developer/api/v2/predictionsbystop?api_key=De_WCTE-gkyYSitBw82YSw&stop=#](http://realtime.mbta.com/developer/api/v2/predictionsbystop?api_key=De_WCTE-gkyYSitBw82YSw&stop=#){i["stop_id"]}&format=json"  
 routes = data2[“”]  
 timeAway = data2[“mode”][0][“route”][0][“direction”][0][“trip”][0][“pre_away”]  
 trainDir = data2[“mode”][0][“route”][0][“direction”][0][“direction_name”]  
 trainLine = data2[“mode”][0][“route”][0][“route_name”]  
 timeAwayRound = Utils.round timeAway/60, 0  
 stationText2.html = “The next “ + trainDir + “ “ + trainLine + “ train is “ + timeAwayRound + “ mins away.”</pre>

This grabs the “stop_id” (the nearest subway stop) from the first API, and plugs it into the request for the second API.

Then, we just have to wade through the data to extract what we need.

“timeAway” gives us how far the nearest train is away, in seconds.

“trainDir” gives us the direction the train is headed.

And “trainLine” tells us which service line the train is on.

Then we created a quick formula to turn seconds into minutes, and dumped all of that data into a string that made sense.

And voila! A little bit of quick UI, some fancy animation, and we had it!



![](https://cdn-images-1.medium.com/max/1600/1*jlFNkhFLPUAbm6YrL7yxew.gif)

You can try out the prototype for yourself here: [http://share.framerjs.com/7ygqcpa64f67/](http://share.framerjs.com/7ygqcpa64f67/)













* * *









![](https://cdn-images-1.medium.com/max/1600/1*MQPxJwCIZjAh0Un5li7J7Q.png)

“Like…Whoa…”



### Takeaways

I learned so much in building this. Working with real data is so liberating once you figure it out.

I cannot over-emphasize: if you haven’t gotten practice with reading API documentation yet, it can be quite frustrating. Be patient. It may take several hours to figure these out and get them working.

The syntax has to be perfect. And I mean _perfect_.

But if you do get it, you’ll be standing there, playing with it and watching the numbers change with a smile on your face.

And you’ll feel like, all of a sudden…you know kung fu.



![](https://cdn-images-1.medium.com/max/1600/1*NKuDaIRul2WuhCbq2LoMtQ.gif)













* * *







Thanks for reading. [Give the prototype a try](http://share.framerjs.com/7ygqcpa64f67/). I would love your feedback!

Also, be sure to check out [my first article](https://blog.prototypr.io/designing-with-framer-part-1-faking-it-vs-making-it-ce74e1ca980) about prototyping with FramerJS.

_If you liked this, click the💚 below so other people will see this here on Medium._








