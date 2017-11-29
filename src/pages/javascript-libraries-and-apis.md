---
author: Adam Recvlohe
authorTwitter: https://twitter.com/adamrecvlohe
authorFacebook: none
title: "APIs are like a box of chocolates"
subTitle: "If you have written JavaScript for the DOM before, then you probably know how unwieldy it can get. I mean getElementById is seven syllabl..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*Co2qNTU1Es6kAf3b9MSOqw.jpeg
url: https://medium.freecodecamp.org/javascript-libraries-and-apis-e9d674dc5690
id: javascript-libraries-and-apis-e9d674dc5690
date: 2016-04-07T14:27:39.379Z
tags: [
  "JavaScript",
  "Learning",
  "Technology",
  "API",
  "Design"
]
---
# APIs are like a box of chocolates







![](https://cdn-images-1.medium.com/max/2000/1*Co2qNTU1Es6kAf3b9MSOqw.jpeg)







If you have written JavaScript for the DOM before, then you probably know how unwieldy it can get. I mean _getElementById_ is seven syllables and 14 characters long for goodness sake. Isn’t there an easier way?

Enter jQuery goodness. jQuery is a JavaScript library.

Library? Like the ones where I can check out books and rent 90s movies for free? No. A library in the programming sense is a codebase that simplifies coding logic and is freely available for anyone to use. No late fees!

That may not have made sense to you but I have examples.

Hypothetically speaking, let’s say that I want to change the background of a _div_ to red. I gave that _div_ an _id_ of ’red’ for simplicity sake. In JavaScript I would write something like this:

<pre name="26f1" id="26f1" class="graf graf--pre graf-after--p">document.body.getElementById(‘red’).style.backgroundColor = ‘red’;</pre>

It works and gets the job done, which is all we really need. But now let’s take a look at that same functionality in jQuery.

<pre name="5f9e" id="5f9e" class="graf graf--pre graf-after--p">$(‘#red’).css(‘background-color’, ‘red’);</pre>

Wow, that’s pretty! It’s everything programmers strive for: a terse and concise solution.

Now you clearly see the benefits of jQuery. It’s intended to make programming in JavaScript easier.

But there are some drawbacks. You might think that jQuery can do everything, and that programming in jQuery is the same as in JavaScript. **Both of those notions are wrong.**

From my perspective, working with jQuery is like using Rails, the web development framework half of Ruby on Rails. You can get pretty far with using Rails without having to dive deep into learning Ruby.

However, my contention is, you can’t truly understand or appreciate JavaScript unless you predominantly use it to run your programs. That being said, there are some really great benefits to using jQuery for you to explore. The benefit we will discuss today is using jQuery to make API calls.

API huh? API stands for Application Programming Interface. That’s a big fancy acronym for ‘rules of engagement’.

Many software applications have a set of rules that govern how they interact with other programs. I am sure that made total sense to you, but I will give you some examples for good measure.

For example, if you want to add a paragraph to the body of an HTML page, you might write something like this:

<pre name="c050" id="c050" class="graf graf--pre graf-after--p">var paragraph = document.body.createElement(‘P’);  
paragraph.textContent = ‘I am using an API, woohoo!’;  
document.body.appendChild(paragraph);</pre>

In the example above I used the following rules:

<pre name="7d35" id="7d35" class="graf graf--pre graf-after--p">1\. document.body to access the body object   
2\. createElement method to create an element  
3\. textContent method to insert text into that element  
4\. appendChild method to append that paragraph to the body</pre>

Here we would be using the DOM API. DOM stands for Document Object Model, and it’s the organization of HTML elements on a page.

In laymen’s terms, the DOM API “provides a structured representation” of a website. This becomes the entry point that allows programming languages to _interact_ with the HTML of a page.

The DOM API is what provides the methods such as _createElement_ and _textContent_ so that you can use your fancy pants JavaScript to manipulate the DOM.

Did you notice I said **programming languages?** You can actually interact using any language, but you probably want to go with the de facto language of the web — JavaScript. I’m just saying.

Now that you have some context, let’s get into making a Giphy search app.

This will be fun! And I really mean it this time.

We’ll start out by looking at a _response_ object. A _response_ object is the data returned after a request has been made to an API.

Okay, let me break that down. When you type a URL into your search bar — such as eyeluvkats.com — and hit enter, a request is sent across the internet to a server that hosts the domain eyeluvkats.com.

Afterward, a response is sent back to the user with the contents of the website: HTML, CSS, JavaScript, images, videos, etc.

Now, instead of requesting eyeluvkats.com, we will put in a request to the Giphy API that will return a data object. That request will be:

[http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cat](http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cat)

Your first API call! Woohoo!

The call here was made to the Giphy API and in the parameters of the URL, we requested a particular type of gif:

gifs/**random**?api_key=dc6zaTOxFJmzC&**tag=cat**.

We requested a random cat gif using the random parameter, and the tag parameter of cat. I am such a millennial, sorry! What you should now see in your browser is a JSON object with data related to a random cat gif.

JSON stands for JavaScript Object Notation. It’s how JavaScript sends data across the web and is routinely used as the go-to response object for large sets of API data. Have you ever created a JSON object before? No? Let’s do that now so you know how objects work in JavaScript.

To create a JavaScript object, also known as an object literal, you can declare a variable to equal a pair of curly braces. For instance:

<pre name="9b8e" id="9b8e" class="graf graf--pre graf-after--p">var object = {};</pre>

These objects are typically used to store data, so let’s go ahead and put your bio in there. Data in objects are stored as key/value pairs, i.e. _firstName: ‘Adam’_, separated with commas.

Go through now and add your other details like your birthday, social security number, and credit card number. When you’re done, send that object to adam@youjustgotscammed.com.

For me, my information would look like this:

<pre name="6f1b" id="6f1b" class="graf graf--pre graf-after--p">var me = {  
    firstName: ‘Adam’,  
    middleName: ‘Elliott’,  
    lastName: ‘Recvlohe’,  
    favoriteFood: ‘Chipotle’,  
    favoriteDrink: ‘Kombucha: Gingerade’,  
    race: ‘Human’,  
    favoriteVideo: '[https://www.youtube.com/watch?v=dQw4w9WgXcQ](https://www.youtube.com/watch?v=dQw4w9WgXcQ)'  
}</pre>

That’s all well and good, but how do we access that information? Well, there are a couple ways of doing it. One way is with “dot notation” and the other is using “bracket notation”.

<pre name="d944" id="d944" class="graf graf--pre graf-after--p">var me = {  
    firstName: ‘Adam’,  
    middleName: ‘Elliott’,  
    lastName: ‘Recvlohe’,  
    favoriteFood: ‘Mexican’,  
    favoriteDrink: ‘Kombucha’,  
    race: ‘Human’  
}  

// Dot Notation  
var myFirstName = me.firstName;  

// Bracket Notation  
var myLastName = me[‘lastName’];</pre>

Remember, as the object becomes more nested the more dots or brackets you will need.

<pre name="a749" id="a749" class="graf graf--pre graf-after--p">var data = {  
    address: {  
        city: ‘Tampa’,  
        state: ‘Florida’  
    }  
}  

var myCity = data.address.city  
var myState = data[‘address’][‘state’];</pre>

_Sidenote: The JSON standard requires object properties and values to be in double quotes. I showed you JavaScript object literals because the way that you access data from each is the same with the syntax of JSON being only slightly different._

Now that we have that out of the way, we can start handling the data in the JSON object, which we got back from hitting the Giphy API. The object is quite large, but all I really want is the URL to the random cat gif. How would I assign that URL to a variable? Since you’re still here I will show you how I would do it:

<pre name="13a3" id="13a3" class="graf graf--pre graf-after--p">var gifURL = object.data.url;</pre>

This doesn’t do anything right now, but what I wanted to show you first is how we would handle the data to then manipulate it later.

We now have the basics down of handling a response object. Let’s move on to the real stuff of creating a function to call this data for us, and then manipulate that data on the screen.

Up to this point, we haven’t really needed CodePen, but we need it now. If you want to continue to follow along I suggest opening a [codepen.io](http://codepen.io) account and creating a new pen.

With your pen open, we need to do a couple things first to set the scene. We need to add the jQuery library to our pen. In the JavaScript tab, on the left of **JavaScript**, you should see a gear icon. That is the settings button. Click there and what should open next are your JavaScript settings. Underneath **Add External JavaScript** there is a drop-down bar called **Quick-add**. Select jQuery. Okay, now we are good to go.

When do we want to execute this call to the Giphy API? Well, by convention this is usually done when the document is ready. You probably would never have guessed that we will use the _ready_ method in jQuery. It looks a little something like this:

<pre name="fa99" id="fa99" class="graf graf--pre graf-after--p">$(document).ready(function() {})</pre>

In JavaScript, there are a few different stages in regards to content loading. There are _interactive_, _complete_, and a few others. All this is saying is that when the DOM is ready this function will be executed.

Try it! Refresh the browser with something unique, in the _ready_ callback function like console.log(‘Hello, World!’).

<pre name="84a2" id="84a2" class="graf graf--pre graf-after--p">$(document).ready(function() {  
    console.log(‘Hello, World!’);  
})</pre>

If you look in your console, you should see printed _Hello, World!_.

_At the bottom of your codepen window you should see the word_ **_console._** _Click on that button and you should see the console open._

jQuery comes with a lot of other handy functions. The next one we will need is the _getJSON_ method. What this will do is return a response to us in JSON and give us a callback function to then do something with that data. That probably sounds a little arbitrary. Let me give you a concrete example.

<pre name="9a80" id="9a80" class="graf graf--pre graf-after--p">$(document).ready(function() {  
  var url = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cat';  

  $.getJSON(url, function(object) {  
    console.log(object);  
  });  
});</pre>

I bet you can’t guess what this does? Okay, you proved me wrong. Of course, you know the method _getJSON_ is sending a request to _url_ and being returned data that is then logged in the console. You sly devil you!

That’s nice and all but we can do one better. We can take that object and use the _url_ property to place a gif in the DOM. Mind…Blown…Boom!

We are going to stick with using jQuery and create an image dynamically. To create an image in jQuery we can pass the image tag as a string with all necessary information like so:

<pre name="9dea" id="9dea" class="graf graf--pre graf-after--p">var imageSource = object.data.image_original_url;  
var image = $('<img src=' + imageSource + ' />');</pre>

Now all we have to do is append that to the body of the DOM and we are good. Houston, all systems go!

<pre name="e3a1" id="e3a1" class="graf graf--pre graf-after--p">$(document).ready(function() {  
  var url = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cat';  

  $.getJSON(url, function(object) {  
    var imageSource = object.data.image_original_url;  
    var image = $('<img src=' + imageSource + ' />');  
    image.appendTo($('body'));  
  });  
});</pre>

Here it is on codepen:





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/4f05a8c820ff7d8730acaf4511e0fcbc?postId=e9d674dc5690" data-media-id="4f05a8c820ff7d8730acaf4511e0fcbc" allowfullscreen="" frameborder="0"></iframe>





> My Momma always said, “Life was like a Giphy app. You never know what you’re gonna get.” — JS Gump

Now every time you refresh the page you should get a new cat gif. You’re welcome!

We can add a bit more functionality to this. Instead of getting only a random cat every time, we can instead search for the gifs we want and display some on the page. That sounds way cooler.

Before we can do this we will need an input field. The input field will take your search term and add it as a parameter to the request that is sent to the Giphy API. In your HTML add an input field.

<pre name="7e40" id="7e40" class="graf graf--pre graf-after--p"><input type=‘text’ /></pre>

Up to this point, we have been making calls to the “random” API. This time, we want to search. I wonder what API that is? Oh I see, it’s called ‘search’. On Giphy’s home page we have a nice example URL:

[http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC](http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC)

That’s a litter box worth of data! By default Giphy will return 25 results. As you can see in the URL the way these items are searched is using the _q_ parameter, which in this case equals _funny+cats_. If we want to search for some other set of terms then all we would have to do is capture the input from the user and when they hit enter a new request is sent to the API. Let’s do that now.

To capture the input from the user we need to use the jQuery _val_ method on the input.

<pre name="9a99" id="9a99" class="graf graf--pre graf-after--p">$(document).ready(function() {   
  var value = $('input').val();  
});</pre>

But how do we actually get that value? We need to add an event listener so that when the user hits enter we can capture that value and send it off to the _getJSON_ method. In jQuery, event listeners are also shorter. We will listen for the _keypress_ event but only for the enter key, which is designated as 13\. Remember that event listeners provide a callback function that passes in the event from the DOM. There is one little hiccup, though. The value that we get returned will be a string, meaning it won’t have the ‘+’ operator between each word. Because jQuery is written in JavaScript this allows us to use vanilla JavaScript methods in our script. I will use the _replace_ method to change out spaces with the ‘+’ operator.

<pre name="519a" id="519a" class="graf graf--pre graf-after--p">$(document).ready(function() {  
  $(’input’).keypress(function(event) {  
    if(event.which == 13) {  
      var value = $(’input’).val();  
      value = value.trim().replace(/\s+/g, '+’);  
      console.log(value);  
      event.preventDefault();  
    }         
  });   
});</pre>

The _replace_ method that is built into JavaScript takes two parameters: a regular expression and what you want a match to be replaced with. In my regular expression, I am using a special character, _\s_. This represents white space. I added a ‘+’ operator on the end to signify that I want to capture any number of white spaces in a string, _\s+_. My thinking is a user may put more than one space between words and I want to correct that mistake if it happens.

This is a very primitive solution but for our purposes it works. If you look in your console, you should see your string text combined with ‘+’ operators. Good, we got that down. Now we can compose a URL of the search API and the value we are searching for.

<pre name="3039" id="3039" class="graf graf--pre graf-after--p">$(document).ready(function() {  
  $(’input’).keypress(function(event) {  
    if(event.which == 13) {  
      var value = $(’input’).val();  
      value = value.trim().replace(/\s+/g, '+’);  
      var url = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + value;  
      console.log(url);  
      event.preventDefault();  
    }         
  });   
});</pre>

In your console, you should see the new URL we are sending out to the Giphy API. Next, we can actually send out our call using _getJSON_.

<pre name="a8eb" id="a8eb" class="graf graf--pre graf-after--p">$(document).ready(function() {  
  $(’input’).keypress(function(event) {  
    if(event.which == 13) {  
      var value = $(’input’).val();  
      value = value.trim().replace(/\s+/g, '+’);  
      var url = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + value;  
      $.getJSON(url, function(object) {  
        console.log(object);  
      });  
    event.preventDefault();  
    }         
  });   
});</pre>

_The JSON response object will be quite large and you won’t be able to see it using the CodePen console. Instead, in the top right where it says_ **_Change View,_** _click and scroll down to_ **_Debug Mode_**_. A new window will open. Right-click on the new window and scroll down to_ **_Inspect_**_. A panel on the right or bottom of the screen should show. Now, click on the tab that says_ **_console_**_. If you refresh the browser, put some words into the input field and click enter, you should see the response object show in the log._

Now if you type in some words in the input you should get back a hairball size of an object with an array of 25 objects. Okay, we have our data but it still is not displaying on the screen. What we need to do is iterate over the array, get every image URL and then create an _img_ tag for each of them and append each one to the DOM. Pretty easy huh? Okay, let’s walk through it.

<pre name="5f65" id="5f65" class="graf graf--pre graf-after--p">object.data.forEach(function(gif) {  
  var url = gif.images.original.url;  
  var image = $('<img src=' + url + ' />');  
  image.appendTo($('body'));  
});</pre>

The _forEach_ method, a vanilla JavaScript method, will iterate through all the arrays and we are assigning each array object to the _gif_ variable. Within each of the _gif_ objects is the _images.original.url_ property that is the URL we need to set the _src_ attribute of each image tag.

After we have that data we can now create the _img_ tag, assigning the URL to the _src_ attribute. We then append that image to the DOM.

Bada bing, bada boom, you now have an endless supply of gif bliss at your fingertips.

The completed projected now looks something likes this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a32625898118504b974736dc70a8b766?postId=e9d674dc5690" data-media-id="a32625898118504b974736dc70a8b766" allowfullscreen="" frameborder="0"></iframe>





And here it is on CodePen:





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/06d8d4c81918806a5f4bb323715b40b6?postId=e9d674dc5690" data-media-id="06d8d4c81918806a5f4bb323715b40b6" allowfullscreen="" frameborder="0"></iframe>





You probably didn’t think that accessing and using APIs was so easy. But as you can see, from just a kitty size line of code, you were able to dynamically change your site from just a nice random cat image app to a much more powerful Giphy search app.

As you can also tell, the styles look sad. Make use of what you have learned in web development so far to make this into an awesome app with your additional styles. Be creative with it but more importantly have fun!

_Sidenote: The API key we used was intended for development purposes only, not for production. That means you can’t go wild and make a million calls to the Giphy API. They will shut you down._

I hope you had another great time learning about the wonderful world of JavaScript. Until next time, may you and APIs go together like peas and carrots!








