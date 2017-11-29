---
author: Ashwin Hariharan
authorTwitter: https://twitter.com/booleanhunter
authorFacebook: https://facebook.com/10201378713505824
title: "How to build your own Uber-for-X application part 2"
subTitle: "Welcome to part 2 of this series Building your own Uber-for-X App. In part 1, you used an example of a citizen-cop app and learned how to..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*aiyeGF-OQIMiZMdy57EJ_w.png
url: https://medium.freecodecamp.org/how-to-build-your-own-uber-for-x-app-part-2-8ba6ffa2573d
id: how-to-build-your-own-uber-for-x-app-part-2-8ba6ffa2573d
date: 2017-01-29T01:20:05.499Z
tags: [
	"JavaScript",
	"Startup",
	"Tech",
	"Web Development",
	"Programming"
]
---
# How to build your own Uber-for-X application part 2











![](https://cdn-images-1.medium.com/max/2000/1*aiyeGF-OQIMiZMdy57EJ_w.png)












> Also featured in [Mybridge](https://medium.mybridge.co/)’s [Top Ten NodeJS articles from Jan-Feb 2017](https://medium.mybridge.co/node-js-top-10-articles-for-the-past-month-v-feb-2017-9a9240c0db8c#.nq45mjr1cr)

Welcome to part 2 of this series **_Building your own Uber-for-X App_**. In part 1, you used an example of a citizen-cop app and learned how to fetch cops located near a given pair of latitude and longitude coordinates. In this part, you’ll continue building the same app and learn to implement these features:

*   Exchanging data between cops and citizens in real time using web sockets
*   Using maps to show location details of the citizen and the cop
*   Visualizing crime data

Be sure to [read part 1](https://medium.freecodecamp.com/how-to-build-your-own-uber-for-x-app-33237955e253) thoroughly and try out the examples before proceeding with the rest of this tutorial.

### Project Set-up and folder organization














Let’s analyze the project files that we currently have, from the previous part:

*   _app.js_ contains your server set-up and database configs. Every time you need to start the server you’ll use this file by typing _node app.js_ in your terminal.
*   _routes.js_ — you’ll use this file to write end-points and handlers
*   _db-operations_ — where you’ll write database operations
*   _views_ will contain your HTML pages
*   _public_ will contain sub-folders for storing JavaScripts, stylesheets and images

If you’ve used Uber before, you’re aware that there’s the driver-facing app, and a rider facing app. Let’s try implementing the same — _citizen.html_ will show the citizen facing side of the app and _cop.html_ will show the cop facing app. You’ll save these files inside the _views_ folder. Open _citizen.html_ in your text editor and add this:

<pre name="56dc" id="56dc" class="graf graf--pre graf-after--p"><!DOCTYPE html>  
<html lang = "en">  
<head>  
    <meta charset="utf-8"/>  
    <title>Citizen <%= userId %> </title>  
</head>  
<body data-userId="<%= userId %>">  
    <h1>Hello Citizen <%= userId %></h1></pre>

<pre name="7735" id="7735" class="graf graf--pre graf-after--pre">    <h4 id="notification">   
        <!-- Some info will be displayed here-->  
    </h4></pre>

<pre name="0b21" id="0b21" class="graf graf--pre graf-after--pre">       
        <!-- We will load a map here later-->  
    </pre>

<pre name="842e" id="842e" class="graf graf--pre graf-after--pre">    <!--Load JavaScripts -->  
</body>  
</html></pre>

Repeat this step for _cop.html_ as well, but replace the word _Citizen_ with _Cop_.

The _data-userId_ is an attribute that begins with the prefix _data-,_ which you can use to store some information as strings, that doesn’t necessarily need to have a visual representation. `<%= userId %>`would appear to be a strange looking syntax, but don’t worry —y our template engine understands that anything that’s between `_<%=_` and `%>` is a variable, and it will substitute the variable _userId_ for actual value on the server side before the page is served. You’ll understand this better as you progress.

If you recall in the earlier part, you had these lines in _app.js :_

<pre name="2666" id="2666" class="graf graf--pre graf-after--p">app.set('views', 'views');   
app.use(express.static('./public'));  
app.set('view engine','html');  
app.engine('html',consolidate.underscore);</pre>

The first line tells your app to look for HTML files inside the _views_ folder whenever it gets a request for a particular page. The second line sets the folder from which static assets like stylesheets and JavaScripts will be served when a page loads on the browser. The next two lines tell our application to use the _underscore_ template engine to parse our html files.

Now that the directory structure is set-up and the views are ready, it’s time to start implementing features! Before continuing, it’ll be helpful to keep the following points in mind:

*   Write JS code inside the _script_ tag in the HTML document. You may choose to write it inside a _.js_ file, in which case you should save the JS file(s) inside _/public/js_ folder and load it in your page. Make sure that you load the libraries and other dependencies first!
*   It’ll be helpful if you keep the developer console open in your browser to check for error messages in case something doesn’t seem to be working. Keep a watch on the terminal output too.
*   The words _event_ and _signal_ will be used interchangeably in this tutorial — both mean the same thing.

Let’s start hacking!

### Serving Citizen and Cop Pages

Let’s render the citizen page on going to [_http://localhost:8000/citizen.html,_](http://localhost:8000/police.html,)and the cop page on going to [_http://localhost:8000/cop.html_](http://localhost:8000/police.html,). To do this, open _app.js_ and add these lines inside the callback function of _mongoClient.connect_:

<pre name="fac6" id="fac6" class="graf graf--pre graf-after--p">app.get('/citizen.html', function(req, res){  
    res.render('citizen.html',{  
        userId: req.query.userId  
    });  
});</pre>

<pre name="03e9" id="03e9" class="graf graf--pre graf-after--pre">app.get('/cop.html', function(req, res){  
    res.render('cop.html', {  
        userId: req.query.userId  
    });  
});</pre>

Save your files, re-start your server and load the citizen and cop pages_._ You should see **Hello Citizen** on the page. If you pass _userId_ as query parameters in the URL, for example — [_http://localhost:8000/citizen.html?userId=YOURNAME_](http://localhost:8000/citizen.html?userId=YOURNAME)then you’ll see **Hello Citizen YOURNAME**. That’s because your template engine substituted the variable _userId_ with the value that you passed from the query parameters, and served the page back.

### Why do you need web sockets, and how do they work?

Event or signal based communication has always been an intuitive way to pass messages ever since historic times. The earliest techniques were quite rudimentary — like using fire signals for various purposes, mostly to warn of danger to people.














Over the centuries, newer and better forms of communication have emerged. The advent of computers and the internet sparked something really innovative — and with the development of the OSI model, socket programming and the smart-phone revolution, one-on-one communication has become quite sophisticated. The basic principles remain the same, but now much more interesting than setting something on fire and throwing it.

Using Sockets, you can send and receive information via _events,_ or in other words _signals_. There can be different types of such signals, and if the parties involved know what kind of signal to ‘listen’ to, then there can be an exchange of information.

#### But why not simply use HTTP requests?

I read a very nice article on the [difference between HTTP requests and web-sockets](https://www.pubnub.com/blog/2015-01-05-websockets-vs-rest-api-understanding-the-difference/). It’s a short one, so you can read it to understand the concept of web-sockets better.

But briefly put, traditional HTTP requests like GET and POST initiate a new connection request and later close the connection after the server sends back the response. If you were to attempt building a real time app using HTTP, the client would have to initiate requests at regular intervals to check for new information (which may or may not be available). This is because of the fact that the server itself is unable to **push** information on its own.

And this is highly inefficient — the client would waste resources in constantly interrupting the server and saying “_Hi, I’m XYZ - let’s shake hands. Do you have something new for me?_”, and the server will be like — _“Hi (shaking hands). No I don’t. Good-bye!”_ over and over again, which means even the server is wasting resources!

Web-sockets however, create a persistent connection between a client and the server. So this way the client need not keep asking the server, the server can **push** information when it needs to. This method is much more efficient for building real time applications.

[Web-sockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) have support in all major browsers, but for few browsers that don’t — there are other fallback options/techniques to rely on, like Long Polling. These fallback techniques and the Web Sockets APIs are bundled together within Socket.IO, so you wouldn’t have to worry about browser compatibility. Here is an [excellent answer](http://stackoverflow.com/a/12855533/3989925) on Stack Overflow that compares lots of those options.

### Integrating Socket.IO

Let’s start by integrating Socket.io with the express server and also load socket.io’s client-side library in the html pages. You’ll also use jQuery — it isn’t needed for socket.io to work, but your app will need it for making AJAX requests and tons of other stuff. So go ahead, write this in both the pages:

<pre name="5671" id="5671" class="graf graf--pre graf-after--p"><!-- Load socket.io client library -->  
<script src="/socket.io/socket.io.js"></script></pre>

<pre name="d7a6" id="d7a6" class="graf graf--pre graf-after--pre"><!-- Load JQuery from a CDN -->  
<script type="text/javascript" src="[https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js](https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js)"></script></pre>

<pre name="e27d" id="e27d" class="graf graf--pre graf-after--pre"><!-- load libraries before your JS code  
Write rest of your JS code here --></pre>

<pre name="0bf2" id="0bf2" class="graf graf--pre graf-after--pre"><script type="text/javascript">  
    var socket = io();</pre>

<pre name="b384" id="b384" class="graf graf--pre graf-after--pre">    //Fetch userId from the data-atribute of the body tag  
    var userId = document.body.getAttribute("data-userId");</pre>

<pre name="0585" id="0585" class="graf graf--pre graf-after--pre">    /*Fire a 'join' event and send your userId to the server, to join a room - room-name will be the userId itself!  
*/   
    socket.emit('join', {userId: userId});</pre>

<pre name="6699" id="6699" class="graf graf--pre graf-after--pre">//Declare variables, this will be used later  
    var requestDetails = {};  
    var copDetails = {};  
    var map, marker;</pre>

<pre name="2e77" id="2e77" class="graf graf--pre graf-after--pre"></script></pre>

The first _script_ tag loads Socket.IO’s client library (once we serve the page using socket.io server), which exposes a global _io_ object. Your app will make use of this object to emit events/signals to the server and listen to events from the server.

Now you have to change _app.js_ to use socket.io:





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F8454658%3Fv%3D3%26s%3D400&key=4fce0568f2ce49e8b54624ef71a8a5bd&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/13086a9d57958b1089014f64bf6f9626?postId=8ba6ffa2573d" data-media-id="13086a9d57958b1089014f64bf6f9626" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F8454658%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








Make sure to change the **_initialize_**function in _routes.js_ to accept **four** parameters instead of two, like this — _function initialize(app, db,_ **_socket_**_,_ **_io_**_)_.

If you restart the server and refresh your pages, you’ll see the message _A user just connected_ in your terminal. The server will also create a new room once it receives a _join_ event from the connected clients, so you’ll see another message printed — _User joined room._ Try it with [http://localhost:8000/cop.html?userId=02](http://localhost:8000/citizen.html?userId=tyrion), you should get a similar output.

Perfect — now that you have integrated socket.io, you can begin building the rest of your application.

### Citizen-cop communication:

The entire process can be broadly divided into two sets of features:

1.  Requesting for help and notifying nearby cops
2.  Accepting the request and notifying the citizen

Let’s try to understand how to implement each of these features in detail.

#### Requesting for help and notifying nearby cops:














*   First create an end-point _/cops/info_ inside _routes.js,_ that will call a function to fetch a cop’s profile info, and return the results in the form of JSON to the client —

<pre name="80a0" id="80a0" class="graf graf--pre graf-after--li">// GET request to '/cops/info?userId=02'  
app.get('/cops/info', function(req, res){  
    var userId = req.query.userId //extract userId from query params  
    dbOperations.fetchCopDetails(db, userId, function(results){  
        res.json({  
            copDetails: results //return results to client  
        });  
    });  
});</pre>

*   Next, you’ll write the function _fetchCopDetails_ in _db-operations.js,_ that accepts an instance of _db,_ the cop’s _userId_ and a callback function. This function will use MongoDB’s [_findOne_](https://docs.mongodb.com/v3.2/reference/method/db.collection.findOne/)query to fetch a cop’s info with a given _userId_ from the database, and then return the result to the callback:

<pre name="edde" id="edde" class="graf graf--pre graf-after--li">function fetchCopDetails(db, userId, callback) {  
    db.collection("policeData").findOne({  
        userId: userId  
    }, function(err, results) {  
        if (err) {  
            console.log(err);  
        } else {  
            callback({  
                copId: results.userId,  
                displayName: results.displayName,  
                phone: results.phone,  
                location: results.location  
            });  
        }  
    });  
}  
exports.fetchCopDetails = fetchCopDetails;</pre>

*   **Inside _cop.html _:**

Now that you’ve created the endpoint, you can call it using JQuery’s AJAX function to fetch the cop’s profile info and display it inside an empty _div id=”copDetails”_. You’ll also configure the cop page to begin listening to any help requests:

<pre name="9120" id="9120" class="graf graf--pre graf-after--p">//First send a GET request using JQuery AJAX and get the cop's details and save it  
$.ajax({  
    url: "/cops/info?userId="+userId,  
    type: "GET",  
    dataType: "json",  
    success: function(data){ //Once response is successful  
        copDetails = data.copDetails; //Save the cop details  
        copDetails.location = {  
            address: copDetails.location.address,  
            longitude: copDetails.location.coordinates[0],  
            latitude: copDetails.location.coordinates[1]   
        };  
        document.getElementById("copDetails").innerHTML = JSON.stringify(data.copDetails);  
    },  
    error: function(httpRequest, status, error){  
        console.log(error);  
    }  
});</pre>

<pre name="6f04" id="6f04" class="graf graf--pre graf-after--pre">//Listen for a "request-for-help" event  
socket.on("request-for-help", function(eventData){  
    //Once request is received, do this:</pre>

<pre name="dcbd" id="dcbd" class="graf graf--pre graf-after--pre">    //Save request details  
    requestDetails = eventData; //Contains info of citizen</pre>

<pre name="2f5c" id="2f5c" class="graf graf--pre graf-after--pre">    //display the data received from the event  
    document.getElementById("notification").innerHTML = "Someone's being attacked by a wildling! \n" + JSON.stringify(requestDetails);  
});</pre>

If you restart the server and go to [_http://localhost:8000/cop.html?userId=02_,](http://localhost:8000/cop.html?userId=02,) (passing userId of a saved cop in the query params) you’ll find the cop’s info displayed on the page. Your cop page has also begun to listen to any _request-for-help_ events.

#### **Inside _citizen.html_**

The next step is to create a button for the citizen that can be clicked in case of emergency. Once clicked, it will fire a _request-for-help_ signal and the signal can carry back information of the citizen back to the server:

<pre name="ea9f" id="ea9f" class="graf graf--pre graf-after--p"><button onclick="requestForHelp()">  
    Request for help  
</button></pre>

Write the handler for generating the event in the _script_ tag:

<pre name="38c5" id="38c5" class="graf graf--pre graf-after--p">//Citizen's info  
requestDetails = {  
    citizenId: userId,  
    location: {  
        address: "Indiranagar, Bengaluru, Karnataka 560038, India",  
        latitude: 12.9718915,  
        longitude: 77.64115449999997  
    }  
}</pre>

<pre name="244b" id="244b" class="graf graf--pre graf-after--pre">//When button is clicked, fire request-for-help and send citizen's userId and location  
function requestForHelp(){  
    socket.emit("request-for-help", requestDetails);  
}</pre>

*   Finally, the server needs to handle this event, as shown in the illustration. Go to _db-operations.js_ and create a new function that can be used to save the request details in a new table _requestsData_:

<pre name="d813" id="d813" class="graf graf--pre graf-after--li">//Saves details like citizen’s location, time  
function saveRequest(db, issueId, requestTime, location, citizenId, status, callback){</pre>

<pre name="2b24" id="2b24" class="graf graf--pre graf-after--pre">    db.collection('requestsData').insert({  
        "_id": issueId,  
        "requestTime": requestTime,  
        "location": location,  
        "citizenId": citizenId,  
        "status": status  
    }, function(err, results){  
           if(err) {  
               console.log(err);  
           }else{  
               callback(results);  
           }  
    });  
}  
exports.saveRequest = saveRequest;</pre>

The _status_ field will tell whether a cop has responded to the request or not. Finally, in _routes.js,_ add this inside the _initialize_ function:





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F8454658%3Fv%3D3%26s%3D400&key=4fce0568f2ce49e8b54624ef71a8a5bd&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/0afd75b8bcff9810ee6fa0c60295dec6?postId=8ba6ffa2573d" data-media-id="0afd75b8bcff9810ee6fa0c60295dec6" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F8454658%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








That’s it, you’ve built the first set of features! Re-start the server and test this out by opening 4 tabs, one for a citizen and cop pages [01](http://localhost:8000/cop.html?userId=01), [02](http://localhost:8000/cop.html?userId=02) and [03](http://localhost:8000/cop.html?userId=03).

Once you press the help button, you’ll notice that **cop 01** does not get the request because that cop is far away from the citizen’s location. However **cop 02** and **cop 03** pages show the help request.











* * *







Awesome, you managed to send a request from a citizen and notify all nearby cops! Now, for the second set of features — this involves notifying the citizen once a cop accepts the request.

#### Accepting the request and notifying the citizen














#### **Inside _cop.html_**

The cop should be able to click a button to inform the citizen that the request has been accepted. When clicked, this button will fire a _request-accepted_ event and also send back the cop’s info to the server:

<pre name="0c11" id="0c11" class="graf graf--pre graf-after--p"><button onclick="helpCitizen()">  
    Help Citizen  
</button></pre>

and the event handler will look like this:

<pre name="1bbb" id="1bbb" class="graf graf--pre graf-after--p">function helpCitizen(){  
    //Fire a "request-accepted" event/signal and send relevant info back to server  
    socket.emit("request-accepted", {  
        requestDetails: requestDetails,  
        copDetails: copDetails  
    });  
 }</pre>

#### **Inside _citizen.html_**

The citizen page will start listening to any _request-accepted_ events from the server. Once it receives the signal, you can display the cop info inside an empty _div_:

<pre name="545a" id="545a" class="graf graf--pre graf-after--p">//Listen for a "request-accepted" event  
socket.on("request-accepted", function(eventData){  
    copDetails = data; //Save cop details</pre>

<pre name="d1aa" id="d1aa" class="graf graf--pre graf-after--pre">   //Display Cop details  
    document.getElementById("notification").innerHTML = "A cop is coming to your rescue! \n" + JSON.stringify(copDetails);  
});</pre>

Now the server needs to handle the _request-accepted_ event as shown in the illustration. First you’ll write a function in _db-operations.js_ that will update the request in the database with the cop’s _userId_ and change the _status_ field from _waiting_ to _engaged_:

<pre name="0bd2" id="0bd2" class="graf graf--pre graf-after--p">function updateRequest(db, requestId, copId, status, callback) {  
    db.collection('requestsData').update({  
        "_id": requestId //Perform update for the given requestId  
    }, {  
        $set: {  
            "status": status, //Update status to 'engaged'  
            "copId": copId  //save cop's userId  
        }  
    }, function(err, results) {  
        if (err) {  
            console.log(err);  
        } else {  
            callback("Issue updated")  
        }  
    });  
}  
exports.updateRequest = updateRequest;</pre>

When the server listens to a _request-accepted_ event, it’ll use the above function to save the request details and then emit a _request-accepted_ event to the citizen. So go ahead, write this in your _routes.js_ file:

<pre name="2376" id="2376" class="graf graf--pre graf-after--p">//Listen to a 'request-accepted' event from connected cops  
socket.on('request-accepted', function(eventData){  

    //Convert string to MongoDb's ObjectId data-type  
    var ObjectID = require('mongodb').ObjectID;  
    var requestId = new ObjectID(eventData.requestDetails.requestId);</pre>

<pre name="97b9" id="97b9" class="graf graf--pre graf-after--pre">    //For the request with requestId, update request details  
    dbOperations.updateRequest(db, requestId, eventData.copDetails.copId, 'engaged’, function(results){</pre>

<pre name="1479" id="1479" class="graf graf--pre graf-after--pre">       //Fire a 'request-accepted' event to the citizen and send cop details  
    io.sockets.in(eventData.requestDetails.citizenId).emit('request-accepted', eventData.copDetails);  
       });  

 });</pre>

Great, you’ve built finished building the second set of features! Re-start your server, refresh your pages, and try it out!














#### What’s next?

By now it might have become obvious to you — the citizen page sends a hard-coded value of location every-time the button for help is clicked. Similarly the location info for all your sample cops have already been fed into the database earlier and are fixed values.

However in the real world, both the citizen and the cop don’t have a fixed location because they keep moving around — and therefore you’ll need a way to test this behavior out!

### Enter Maps

There are lot of mapping options out there. Google Maps API are very robust and feature rich. I personally love Mapbox too, it uses OpenStreetMap protocols under the hood, and here is the best part — it’s open source and hugely customizable! So let’s use that for building the rest of your app.

#### Using Mapbox API

*   In order to begin using these APIs, you need to first create an account on MapBox and get the authentication key [here](https://www.mapbox.com/studio/)_._ Depending on your needs, Mapbox offers different [pricing plans](https://www.mapbox.com/pricing/) to use these APIs in your apps — for now the free starter plan is sufficient.
*   Next, you’ll load [_mapbox.js_](https://www.mapbox.com/mapbox.js/api/v2.4.0/)library (current version 2.4.0) in both the pages using a script tag. It’s built on top of [Leaflet](http://leafletjs.com/) (another JavaScript library).

<pre name="6eb0" id="6eb0" class="graf graf--pre graf-after--li"><script src="[https://api.mapbox.com/mapbox.js/v2.4.0/mapbox.js](https://api.mapbox.com/mapbox.js/v2.4.0/mapbox.js%27)"></script></pre>

You’ll also load the stylesheet used by mapbox.js inside the _head_ tag of your HTML:

<pre name="88b3" id="88b3" class="graf graf--pre graf-after--p"><link href="[https://api.mapbox.com/mapbox.js/v2.4.0/mapbox.css](https://api.mapbox.com/mapbox.js/v2.4.0/mapbox.css%27)" rel="stylesheet" /></pre>

Once you’ve done this, it’s time for you to start writing the logic —

*   First, load the map and set it to show some location as default
*   Display a marker on the map
*   Use the autocomplete feature offered by Mapbox geocoder api. This allows you to input for a place and choose from the autocomplete suggestions.  
    After choosing the place, you can extract the place information and do whatever you want with it.

Leaflet exposes all it’s APIs inside a global variable _L._ Since _mapbox.js_ is built on top of Leaflet, the APIs that you’re gonna use will also be exposed in a global _L_ variable.

*   **In _citizen.html _**_— _write this in your JavaScript

<pre name="8467" id="8467" class="graf graf--pre graf-after--li">L.mapbox.accessToken = "YOUR_API_KEY";</pre>

<pre name="b094" id="b094" class="graf graf--pre graf-after--pre">//Load the map and give it a default style  
map = L.mapbox.map("map", "mapbox.streets");</pre>

<pre name="dc8e" id="dc8e" class="graf graf--pre graf-after--pre">//set it to a given lat-lng and zoom level  
map.setView([12.9718915, 77.64115449999997], 9);</pre>

<pre name="9778" id="9778" class="graf graf--pre graf-after--pre">//Display a default marker  
marker = L.marker([12.9718915, 77.64115449999997]).addTo(map);</pre>

<pre name="1edb" id="1edb" class="graf graf--pre graf-after--pre">//This will display an input box  
map.addControl(L.mapbox.geocoderControl("mapbox.places", {  
    autocomplete: true, //will suggest for places as you type  
}).on("select", function(data){  
    //This function runs when a place is selected</pre>

<pre name="0942" id="0942" class="graf graf--pre graf-after--pre">    //data contains the geocoding results  
    console.log(data);</pre>

<pre name="a7f7" id="a7f7" class="graf graf--pre graf-after--pre">    //Do something with the results</pre>

<pre name="e36d" id="e36d" class="graf graf--pre graf-after--pre">    //Extract address and coordinates from the results and save it  
    requestDetails.location = {  
        address: data.feature["place_name"],  
        latitude: data.feature.center[1],  
        longitude: data.feature.center[0]  
    };</pre>

<pre name="1563" id="1563" class="graf graf--pre graf-after--pre">    //Set the marker to new location  
    marker.setLatLng( [data.feature.center[1], data.feature.center[0]]);  
}));</pre>

The above code extracts the place information once you select a place and updates the location details, so the next time you click the _help_ button, you’ll send the new location along with your request.

Once a cop accepts the request, you can show the location of the cop using a custom marker. First save [this image](https://github.com/booleanhunter/code-samples/blob/master/blog-posts/how-to-build-your-own-uber-for-x-app/public/images/police.png) inside _/public/images_, then write this code inside the event-handler of the _request-accepted_ event:

<pre name="b405" id="b405" class="graf graf--pre graf-after--p">//Show cop location on the map  
L.marker([  
    copDetails.location.latitude,  
    copDetails.location.longitude  
],{  
    icon: L.icon({  
        iconUrl: "/images/police.png", //image path  
        iconSize: [60, 28] //in pixels  
    })  
}).addTo(map);</pre>

That’s it! Now let’s repeat the same for the cop page as well inside _cop.html_.

Your cop’s page fetches the cop’s location info from the server using AJAX, so all you need to do is set the map and the marker to point to it. Let’s write this code inside the _success_ callback of your AJAX function:

<pre name="dd8a" id="dd8a" class="graf graf--pre graf-after--p">L.mapbox.accessToken = "YOUR_API_KEY";</pre>

<pre name="3695" id="3695" class="graf graf--pre graf-after--pre">//Load the map and give it a default style  
map = L.mapbox.map("map", "mapbox.streets");</pre>

<pre name="401e" id="401e" class="graf graf--pre graf-after--pre">//set it to a cop's lat-lng and zoom level  
map.setView( [copDetails.location.latitude, copDetails.location.longitude ], 9);</pre>

<pre name="3f32" id="3f32" class="graf graf--pre graf-after--pre">//Display a default marker  
marker = L.marker([copDetails.location.latitude, copDetails.location.longitude]).addTo(map);</pre>

<pre name="24e4" id="24e4" class="graf graf--pre graf-after--pre">//This will display an input box  
map.addControl(L.mapbox.geocoderControl("mapbox.places", {  
    autocomplete: true, //will suggest for places as you type  
}).on("select", function(data){  
    //This function runs when a place is selected</pre>

<pre name="dd7a" id="dd7a" class="graf graf--pre graf-after--pre">    //data contains the geocoding results  
    console.log(data);</pre>

<pre name="5a30" id="5a30" class="graf graf--pre graf-after--pre">    //Do something with the results</pre>

<pre name="5b0b" id="5b0b" class="graf graf--pre graf-after--pre">    //Set the marker to new location  
    marker.setLatLng([  
        data.feature.center[1],  
        data.feature.center[0]  
    ]);  
}));</pre>

Once a cop gets a request, you can use a custom marker to display the citizen’s location. [Download](https://github.com/booleanhunter/code-samples/blob/master/blog-posts/how-to-build-your-own-uber-for-x-app/public/images/citizen.png) the marker image and save it in _/public/images._ Next, let’s write the logic inside the event handler of your _request-for-help_ event:

<pre name="6a85" id="6a85" class="graf graf--pre graf-after--p">//Show citizen location on the map  
L.marker([  
    requestDetails.location.latitude,  
    requestDetails.location.longitude  
],{  
    icon: L.icon({  
       iconUrl: "/images/citizen.png",  
       iconSize: [50,50]  
    })  
}).addTo(map);</pre>

Cool, let’s try this out — open cop pages [04](http://localhost:8000/cop.html?userId=04), [05](http://localhost:8000/cop.html?userId=05) and [06](http://localhost:8000/cop.html?userId=06). In the citizen page, type “_the forum bengaluru”,_ select the first result and watch the app in action when you ask for help!














### Data Visualization

> A Picture is worth a thousand words

People love visualizing data. It helps you understand a certain topic better. For example in the metric system, I didn’t quite realize just how large a Gigameter really is, but I understood it better after I saw this picture:












[htwins.net/scale2/](http://htwins.net/scale2/)



Unlike computers, humans don’t understand numbers laid out on spreadsheets very easily — the larger the data-set, the harder it becomes for us to identify any meaningful patterns in it. Lot’s of meaningful information could go undetected, simply because the human brain is not trained to pour over large number of tables filled with text and numbers.

It’s much easier to process information and identify patterns if the data can be visualized. There are many ways to do that, in the form of graphs, charts etc. and there are several libraries that allows you to do those things in a screen.

At this point, I’m assuming that you probably have played around with your app a little bit, and saved help requests in MongoDB. If not, you can [download](https://raw.githubusercontent.com/booleanhunter/code-samples/master/blog-posts/how-to-build-your-own-uber-for-x-app/crime-data.json) the data-set and then import it to your database by typing this in your terminal:

<pre name="4d84" id="4d84" class="graf graf--pre graf-after--p">mongoimport --db myUberApp --collection requestsData --drop --file ./path/to/jsonfile.json</pre>

As you already know, the saved requests contain useful information like the _location_ details, the _status_ field which indicates whether a citizen has received help or not, and so forth. Perfect for using this information to visualize crime data on a heat-map! Here’s an [example](https://www.mapbox.com/mapbox-gl-js/example/heatmap/) from Mapbox.

I’m gonna use [MapBox GL JS](https://www.mapbox.com/mapbox-gl-js/api/) — it’s a library that uses WebGL to help visualize data inside maps and make them very interactive. It’s extremely customizable — with features like colors, transitions and lighting. Feel free to try your own styles later!

For the heat-map feature, the library accepts data-sets in the GeoJSON format, and then plots data-points on the map. **GeoJSON** is a format for encoding a variety of geographic data structures. Hence you need to convert your saved data to adhere to this format.

So, here are the following steps:

1.  An endpoint to serve your visualization page _data.html._
2.  Next, have an endpoint — _/requests/info_ that fetches your requests from MongoDB, converts them to the GeoJSON format and returns them to the client.
3.  Create a page _data.html_ that loads the visualization library and stylesheet.
4.  Using AJAX, fetch the data-set from MongoDB and create a heatmap!

#### Step 1:

Open _app.js,_ and write this code to serve the visualization page:

<pre name="127a" id="127a" class="graf graf--pre graf-after--p">app.get('/data.html', function(req, res) {  
    res.render('data.html');  
});</pre>

#### Step 2:

Let’s write a function in _db-operations.js_ that fetches all results from your _requestsData_ table:

<pre name="7d88" id="7d88" class="graf graf--pre graf-after--p">function fetchRequests(db, callback) {  
    var collection = db.collection('requestsData');  
    //Using stream to process potentially huge records  
    var stream = collection.find({}, {  
        requestTime: true,  
        status: true,  
        location: true  
    }).stream();</pre>

<pre name="4099" id="4099" class="graf graf--pre graf-after--pre">    var requestsData = [];</pre>

<pre name="01f4" id="01f4" class="graf graf--pre graf-after--pre">    stream.on('data', function(request) {  
        requestsData.push(request);  
    });</pre>

<pre name="8298" id="8298" class="graf graf--pre graf-after--pre">    //Runs after results are fetched  
    stream.on('end', function() {  
        callback(requestsData);  
    });  
}  
exports.fetchRequests = fetchRequests;</pre>

In the above code, you query the _requestsData_ table to return all documents. You can specify which fields to include and exclude from the results using boolean values — _true_ to include the field and _false_ to exclude the field. The results are then returned back to a callback function.

**How does GeoJSON look like?**

Information stored in GeoJSON has the following format:

<pre name="e380" id="e380" class="graf graf--pre graf-after--p">{  
    type: "FeatureCollection",  
    features: [  
        {  
             type: "Feature",  
             geometry: {  
                 type: "Point",  
                 coordinates: [<longitude>, <latitude>]  
             },  
             properties: {  
                 <field1>: <value1>,  
                 <field2>: <value2>,  
                        ...  
             }  
        }  
        ...  
    ]  
}</pre>

You’ll need to convert each object returned by your function into feature objects. The _properties_ field can hold optional meta-data like _status, requestTime, address_ etc. You’ll write the handle in _routes.js_ that will call the function, convert it to GeoJSON and then return it back:

<pre name="8455" id="8455" class="graf graf--pre graf-after--p">app.get('/requests/info', function(req, res){  
    dbOperations.fetchRequests(db, function(results){  
        var features = [];</pre>

<pre name="9ef0" id="9ef0" class="graf graf--pre graf-after--pre">        for(var i=0; i<results.length; i++){  
            features.push({  
                type: 'Feature',  
                geometry: {  
                    type: 'Point',  
                    coordinates: results[i].location.coordinates  
                },  
                properties: {  
                    status: results[i].status,  
                    requestTime: results[i].requestTime,  
                    address: results[i].location.address  
                }  
            });  
        }  
        var geoJsonData = {  
            type: 'FeatureCollection',  
            features: features  
        }</pre>

<pre name="c8e8" id="c8e8" class="graf graf--pre graf-after--pre">        res.json(geoJsonData);  
    });  
});</pre>

#### Step 3:

Create a page _data.html_ in your _views_ folder, and load the stylesheet and library for the visualization:

<pre name="52a9" id="52a9" class="graf graf--pre graf-after--p"><!DOCTYPE html>  
<html lang="en"></pre>

<pre name="c17e" id="c17e" class="graf graf--pre graf-after--pre"><head>  
    <meta charset="utf-8" />  
    <title>Visualize Data</title>  
    <link href="[https://api.tiles.mapbox.com/mapbox-gl-js/v0.26.0/mapbox-gl.css](https://api.tiles.mapbox.com/mapbox-gl-js/v0.26.0/mapbox-gl.css%27)" rel="stylesheet" />  
</head></pre>

<pre name="9f7a" id="9f7a" class="graf graf--pre graf-after--pre"><body></pre>

<pre name="6f25" id="6f25" class="graf graf--pre graf-after--pre">       
        <!--Load the map here -->  
    </pre>

<pre name="d59c" id="d59c" class="graf graf--pre graf-after--pre">    <!-- Load socket.io client library -->  
    <script src="/socket.io/socket.io.js"></script></pre>

<pre name="5761" id="5761" class="graf graf--pre graf-after--pre">    <!-- Load JQuery from a CDN -->  
    <script type="text/javascript" src="[https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js](https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js)"></script></pre>

<pre name="72b8" id="72b8" class="graf graf--pre graf-after--pre">    <!-- Load Mapbox GL Library -->  
    <script src="[https://api.tiles.mapbox.com/mapbox-gl-js/v0.26.0/mapbox-gl.js](https://api.tiles.mapbox.com/mapbox-gl-js/v0.26.0/mapbox-gl.js%27)"></script></pre>

<pre name="c5d8" id="c5d8" class="graf graf--pre graf-after--pre">    <!-- load libraries before your JS code  
    Write rest of your JS code here --></pre>

<pre name="2a53" id="2a53" class="graf graf--pre graf-after--pre">    <script type="text/javascript">  
        var socket = io();  
        var map, marker;  
        mapboxgl.accessToken = "YOUR_ACCESS_TOKEN";  
    </script>  
</body>  
</html></pre>

Now you’ll use AJAX to call your endpoint and fetch the GeoJSON data:

<pre name="da2c" id="da2c" class="graf graf--pre graf-after--p">$.ajax({  
    url: "/requests/info",  
    type: "GET",  
    dataType: "json",</pre>

<pre name="a9cc" id="a9cc" class="graf graf--pre graf-after--pre">    success: function(data) {  
        console.log(data);  
    }  
    error: function(httpRequest, status, error) {  
        console.log(error);  
    }  
});</pre>

Cool — save your code, re-start your server and point your browser to [_http://localhost:8000/data.html_](http://localhost:8000/data.html)_._ You’ll see the results of your AJAX call in the console.

Now, let’s use it to generate a heat-map. Write this inside the _success_ callback of your AJAX call:

<pre name="4e3e" id="4e3e" class="graf graf--pre graf-after--p">var map = new mapboxgl.Map({  
    container: "map",  
    style: "mapbox://styles/mapbox/dark-v9",  
    center: [77.64115449999997, 12.9718915],  
    zoom: 10  
});</pre>

<pre name="5e8e" id="5e8e" class="graf graf--pre graf-after--pre">map.on("load", function() {</pre>

<pre name="0602" id="0602" class="graf graf--pre graf-after--pre">    //Add a new source from our GeoJSON data  
    map.addSource("help-requests", {  
       type: "geojson",  
       data: data  
    });</pre>

<pre name="cfe9" id="cfe9" class="graf graf--pre graf-after--pre">//we can specify different color and styling formats by adding different layers</pre>

<pre name="f4dd" id="f4dd" class="graf graf--pre graf-after--pre">    map.addLayer({  
        "id": "help-requests",  
        "type": "circle",  
        "source": "help-requests",  
        "paint": {  
        //Apply a different color to different status fields  
            "circle-color": {  
                property: "status",  
                type: "categorical",  
                stops: [  
                    //For waiting, show in red  
                    ["waiting", "rgba(255,0,0,0.5)"],</pre>

<pre name="ab21" id="ab21" class="graf graf--pre graf-after--pre">                    //For engaged, show in green  
                    ["engaged", "rgba(0,255,0,0.5)"]  
                ]  
            },  
            "circle-radius": 20, //Radius of the circle  
            "circle-blur": 1 //Amount of blur  
        }  
    });  
});</pre>

Refresh your page to see a cool looking heatmap generated from your data-set!














### Conclusion

If you made it this far, congratulations! Hopefully this tutorial series gave you an insight on how to build a real time web application with ease — all you now need is the next big idea!

I’m sure you’re aware that there are still plenty of places to improve upon in the app that you just built. You can try adding more features to it and make it more ‘intelligent’, for example:

*   Mimic a moving cop and a moving citizen that continuously send location updates to each other in real time, and update the marker icons on the map.
*   Set the _status_ field to _closed_ once the cop has helped the citizen out. Then, you can assign a different color to visualize closed issues on a heat-map. That way you’ll have an understanding of how efficient cops are in a given area.
*   Build a rating system with which a citizen and a cop can rate each other. This way, neither citizen nor cop will misuse the system, and cops can get performance reports.
*   Have a cool looking user interface, like Material UI.
*   Lastly, have a sign-up and login mechanism!

Using a library like React or a framework like Angular might help you implement features in a robust and scalable manner. You could also experiment with charting libraries like D3.js to visualize information in the forma of bar-charts, pie-charts, line-charts etc.

At some point you could deploy your app on a cloud hosting service provider — like Amazon Web Services or Google Cloud Platform, to show people what you made and have them test out features. It’ll be a nice way to get feedback and ideas, and who knows — your app might turn out to be a life saver some day!














### Thank you for reading.

Do recommend this if it helped you. In-case you have questions on any aspect of this tutorial series or need my help in understanding something, feel free to [tweet](https://twitter.com/booleanhunter) or leave a comment below. I’d love to hear about your **Uber-for-X** ideas! You can read more such articles in my [personal blog](http://blog.booleanhunter.com) too.

#### And here’s what you’ve been waiting for, the full [source code](https://github.com/booleanhunter/code-samples/tree/master/blog-posts/how-to-build-your-own-uber-for-x-app)!








