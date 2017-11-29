---
author: Codemzy
authorTwitter: https://twitter.com/codemzy
authorFacebook: none
title: "Client-side web scraping with JavaScript using jQuery and Regex"
subTitle: "When I was building my first open-source project, codeBadges, I thought it would be easy to get user profile data from all the main code ..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*osMYA6WEFDoZdZOUTRJXkQ.jpeg
url: https://medium.freecodecamp.org/client-side-web-scraping-with-javascript-using-jquery-and-regex-5b57a271cb86
id: client-side-web-scraping-with-javascript-using-jquery-and-regex-5b57a271cb86
date: 2017-08-10T20:15:31.871Z
tags: [
  "JavaScript",
  "Web Development",
  "Programming",
  "Tech",
  "Startup"
]
---
# Client-side web scraping with JavaScript using jQuery and Regex







![](https://cdn-images-1.medium.com/max/2000/1*osMYA6WEFDoZdZOUTRJXkQ.jpeg)







When I was building my first open-source project, codeBadges, I thought it would be easy to get user profile data from all the main code learning websites.

I was familiar with API calls and get requests. I thought I could just use jQuery to fetch the data from the various API’s and use it.

<pre name="a44d" id="a44d" class="graf graf--pre graf-after--p">var name = 'codemzy';                $.get('https://api.github.com/users/' + name, function(response) {                      
  var followers = response.followers;  
});</pre>

Well, that was easy. But it turns out that not every website has a public API that you can just grab the data you want from.







![](https://cdn-images-1.medium.com/max/2000/1*izjyDU3_9iS0_cQLzp1GSg.jpeg)

404: API not found







But just because there is no public API doesn’t mean you need to give up! You can use web scraping to grab the data, with only **a little extra work**.

Let’s see how we can use client-side web scraping with JavaScript.

For an example, I will grab my user information from my public freeCodeCamp profile. But you can use these steps on any public HTML page.

The first step in scraping the data is to grab the full page html using a jQuery `.get` request.

<pre name="71e7" id="71e7" class="graf graf--pre graf-after--p">var name = "codemzy";  
$.get('[https://www.freecodecamp.com/'](https://www.freecodecamp.com/%27) + name, function(response) {  
  console.log(response);  
});</pre>

Awesome, the whole page source code just logged to the console.

Note: If you get an error at this stage along the lines of `No ‘Access-Control-Allow-Origin’ header is present on the requested resource`don’t fret. Scroll down to the **Don’t Let CORS Stop You** section of this post.

That was easy. Using JavaScript and jQuery, the above code requests a page from [www.freecodecamp.org](http://www.freecodecamp.org), like a browser would. And freeCodeCamp responds with the page. Instead of a browser running the code to display the page, we get the HTML code.

And that’s what web scraping is, extracting data from websites.

Ok, the response is not exactly as neat as the data we get back from an API.



![](https://cdn-images-1.medium.com/max/1600/1*AlNTHews7vJrwdGnEOgPfQ.gif)



But… we have the data, in there somewhere.

Once we have the source code the information we need is in there, we just have to grab the data we need!

We can search through the response to find the elements we need.

Let’s say we want to know how many challenges the user has completed, from the user profile response we got back.

At the time of writing, a camper’s completed challenges completed are organized in tables on the user profile. So to get the total number of challenges completed, we can count the number of rows.

One way is to wrap the whole response in a jQuery object, so that we can use jQuery methods like `.find()` to get the data.

<pre name="0b2d" id="0b2d" class="graf graf--pre graf-after--p">// number of challenges completed  
var challenges = $(response).find('tbody tr').length;</pre>

This works fine — we get the right result. But its is **not a good way** to get the result we are after. Turning the response into a jQuery object actually loads the whole page, including all the external scripts, fonts and stylesheets from that page…Uh oh!

We need a few bits of data. We really don’t need the page the load, and certainly not all the external resources that come with it.

We could strip out the script tags and then run the rest of the response through jQuery. To do this, we could use Regex to look for script patterns in the text and remove them.

Or better still, why not use Regex to find what we are looking for in the first place?

<pre name="ad55" id="ad55" class="graf graf--pre graf-after--p">// number of challenges completed  
var challenges = response.replace(/<thead>[\s|\S]*?<**\/**thead>/g).match(/<tr>/g).length;</pre>

And it works! By using the Regex code above, we strip out the table head rows (that did not contain any challenges), and then match all table rows to count the number of challenges completed.

It’s even easier if the data you want is just there in the response in plain text. At the time of writing the user points were in the html like `<h1 class=”flat-top text-primary”>[ 1498 ]</h1>` just waiting to be scraped.

<pre name="9e92" id="9e92" class="graf graf--pre graf-after--p">var points = response.match(/<h1 class="flat-top text-primary">**\[** ([\d]*?) **\]**<**\/**h1>/)[1];</pre>

In the above Regex pattern we match the h1 element we are looking for including the `[ ]` that surrounds the points, and group any number inside with `([\d]*?).` We get an array back, the first `[0]` element is the entire match and the second `[1]` is our group match (our points).

Regex is useful for matching all sorts of patterns in strings, and it is great for searching through our response to get the data we need.

You can use the same 3 step process to scrape profile data from a variety of websites:

1.  Use client-side JavaScript
2.  Use jQuery to scrape the data
3.  Use Regex to filter the data for the relevant information

Until I hit a problem, CORS.







![](https://cdn-images-1.medium.com/max/2000/1*iZ_19IayjjQ6OL__lHowEA.jpeg)

CORS: Access Denied







### Don’t Let CORS Stop You!

CORS or Cross-Origin Resource Sharing, can be a real problem with client-side web scraping.

For security reasons, browsers restrict cross-origin HTTP requests initiated from within scripts. And because we are using client-side Javascript on the front end for web scraping, CORS errors can occur.

Here’s an example trying to scrape profile data from CodeWars…

<pre name="3910" id="3910" class="graf graf--pre graf-after--p">var name = "codemzy";  
$.get('[https://www.codewars.com/users/'](https://www.codewars.com/users/%27) + name, function(response) {  
  console.log(response);  
});</pre>

At the time of writing, running the above code gives you a CORS related error.

If there is no`Access-Control-Allow-Origin` header from the place you’re scraping, you can run into problems.

The bad news is, you need to run these sorts of requests server-side to get around this issue.

Whaaaaaaaat, this is supposed to be client-side web scraping?!

The good news is, thanks to lots of other wonderful developers that have run into the same issues, you don’t have to touch the back end yourself.

Staying firmly within our front end script, we can use cross-domain tools such as [Any Origin](http://anyorigin.com/), [Whatever Origin](http://www.whateverorigin.org/), [All Origins](http://multiverso.me/AllOrigins/), [crossorigin](https://crossorigin.me/) and probably a lot more. I have found that you often need to test a few of these to find the one that will work on the site you are trying to scrape.

Back to our CodeWars example, we can send our request via a cross-domain tool to bypass the CORS issue.

<pre name="1e17" id="1e17" class="graf graf--pre graf-after--p">var name = "codemzy";  
var url = "http://anyorigin.com/go?url=" + encodeURIComponent("[https://www.codewars.com/users/](https://www.codewars.com/users/)") + name + "&callback=?";  
$.get(url, function(response) {  
  console.log(response);  
});</pre>

And just like magic, we have our response.



![](https://cdn-images-1.medium.com/max/1600/1*5B1y0udOe2JOAuhBj3Hliw.gif)










