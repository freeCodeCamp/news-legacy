---
author: JS
authorTwitter: https://twitter.com/j_speda
authorFacebook: none
title: "A practical guide to fetch(), reduce() and formatting data from an external API"
subTitle: "JavaScript has built-in methods that make it easy to get and manipulate data from an external API. I’ll walk through a practical example ..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*nROAmzDLiFCLQ9z7pMx8Wg.jpeg
url: https://medium.freecodecamp.org/a-practical-guide-to-fetch-reduce-and-formatting-data-from-an-external-api-283ddd9bfdcb
id: a-practical-guide-to-fetch-reduce-and-formatting-data-from-an-external-api-283ddd9bfdcb
date: 2017-05-15T00:54:04.515Z
tags: [
  "JavaScript",
  "Functional Programming",
  "Tech",
  "API",
  "Programming"
]
---
# A practical guide to fetch(), reduce() and formatting data from an external API







![](https://cdn-images-1.medium.com/max/2000/1*nROAmzDLiFCLQ9z7pMx8Wg.jpeg)

Photo credit — Alexander Dummer







JavaScript has built-in methods that make it easy to get and manipulate data from an external API. I’ll walk through a practical example from one of my current projects that you can use as a template when starting something of your own.

For this exercise, we will look at current job posting data for New York City agencies. New York City is great about publishing [all sorts of datasets](https://opendata.cityofnewyork.us/), but I chose this particular one because it doesn’t require dealing with API keys — the endpoint is a publicly accessible URL.

First, we’ll get the data from New York City’s servers by using JavaScript’s Fetch API. It’s is a good way to start working with [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). I’ll go over the very bare basics here, but I recommend Mariko Kosaka’s excellent illustrated blog [_The Promise of a Burger Party_](http://kosamari.com/notes/the-promise-of-a-burger-party) for a more thorough (and delicious) primer.

If you’ve ever used `$.getJSON()` in jQuery, you’re mostly there conceptually. Take a look at the code below:

<pre name="8b88" id="8b88" class="graf graf--pre graf-after--p">const cityJobsData =   fetch('[https://data.cityofnewyork.us/resource/swhp-yxa4.json'](https://data.cityofnewyork.us/resource/swhp-yxa4.json%27));</pre>

We declare a variable, `cityJobsData,` and set its value to `fetch(the URL that contains the data we want)` which returns something called a promise. For now, just think of a promise as the the data we will _eventually_ get back from the URL when the request is complete. We can access and manipulate this data once it loads by subsequently calling `then()` on `cityJobsData`. To perform multiple operations, we can keep chaining `then()` together, making sure we 1) always pass in our data as an argument to the callback, and 2) return a value.

<pre name="e237" id="e237" class="graf graf--pre graf-after--p">const cityJobsData = fetch('[https://data.cityofnewyork.us/resource/swhp-yxa4.json'](https://data.cityofnewyork.us/resource/swhp-yxa4.json%27));</pre>

<pre name="b582" id="b582" class="graf graf--pre graf-after--pre">cityJobsData  
  .then(data => data.json())</pre>

In the above snippet, we’re telling the computer to execute everything contained inside `then()` _once the data is retrieved from the URL_. This is what we call ‘asynchronous’ code. In this case,`.then(data => data.json())` returns the data in JSON format, which will allow us to operate on it.

A quick aside for wrangling huge amounts of JSON: If you go in your web browser to the [URL that contains the data we want](https://data.cityofnewyork.us/resource/swhp-yxa4.json), you’ll see an enormous, unformatted block of text that is very hard to read. However, you can copy and paste that text into something like [jsonviewer.stack.hu](http://jsonviewer.stack.hu/). It will show you an organized and hierarchical overview of the contents.

Let’s say we want to see how many postings there are for each city agency. If we look at our JSON schema in this viewer, we can see that it’s an array of objects. Each object contains all the data that makes up a single job posting.







![](https://cdn-images-1.medium.com/max/2000/1*RoXGqr-4JSiGhkfeZvMa0w.png)

screenshot of formatted JSON from jsonviewer.stack.hu







Note that each object contains a key, `agency`, whose value is the name of the city agency that has a job available.

Therefore, if we can somehow keep track of how many times each agency is mentioned throughout this array of objects, we’ll be able to know how many jobs are currently available per agency.

One way to count the jobs per agency is to use `reduce()`. [From MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=example), “The `reduce()` method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.” If this sounds like a bunch of nonsense to you, don’t worry! It’s more clear with an example.

Most introductions to `reduce()` involve simple addition, which is a fine starting point. Let’s walk through this example together:

<pre name="24a0" id="24a0" class="graf graf--pre graf-after--p">const arr = [1, 2, 4, 6];  
const added = arr.reduce((accumulator, item) => {  
 return accumulator + item;  
}, 0);</pre>

<pre name="5828" id="5828" class="graf graf--pre graf-after--pre">console.log(added); // 13</pre>

Here’s how it works: the `reduce()` function loops through the array, `arr`, and adds each `item` to an accumulator. The accumulator has an initial value of `0` that’s set with `reduce()`'s second argument, after the callback function. The accumulator’s current value is returned at the end of every loop, which is how the adding happens. Thus, the final value of `added` is 13.

If you’re having trouble visualizing this, try adding a `console.log()` statement before your return that outputs the current values of the accumulator and the item. This way, you’ll be able to see the looping that’s happening behind the scenes. Here’s a set of log statements for the above example:

<pre name="9b04" id="9b04" class="graf graf--pre graf-after--p">adding 1 to accumulator: 0  
adding 2 to accumulator: 1  
adding 4 to accumulator: 3  
adding 6 to accumulator: 7</pre>

This is all well and good, and it’s fun to do some addition with *~`*functional programming*`~*, but did you know `reduce()` can do more than simply count things? And that the accumulator can be something other than a number?

You can do all sorts of cool stuff with `reduce()` — it’s like a Swiss Army Knife. In our case, we’ll use it to find out how many current job postings there are per New York City agency. This might seem like a big leap from simply adding numbers together, but the core concepts of looping and accumulating are the same.

This time, instead of reducing an array of four numbers, we want to reduce our JSON blob of job posting data. And instead of reducing to a single number, we’re going to reduce to a single _object_. Yes, an object! Once the function is completed, the accumulator object’s keys will be the names of the city agencies and the keys’ values will be the number of postings they have, like this: `{"name of agency": number of job postings}`. Here’s the whole program:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b1e72921523f47377e20a382c3f7079f?postId=283ddd9bfdcb" data-media-id="b1e72921523f47377e20a382c3f7079f" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F19232348%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





How does this work, exactly? Let’s break it down. Each time around the loop, we’re looking at a specific `value`, i.e., one object in `data`, our aforementioned array of objects. We’re checking to see if a key with the name of the current agency (`value.agency`) already exists within our accumulator object. If not, we add it to the accumulator object and set its value to 1\. If a key with the name of the current agency _already exists within the accumulator object_, we add 1 to its existing value. We return the accumulator object when we’re done and get this nice set of data:

<pre name="8787" id="8787" class="graf graf--pre graf-after--p">{ 'FIRE DEPARTMENT': 17,  
  'DEPT OF ENVIRONMENT PROTECTION': 134,  
  'DEPARTMENT OF INVESTIGATION': 22,  
  'DEPARTMENT OF SANITATION': 14,  
  'DEPT OF HEALTH/MENTAL HYGIENE': 247,  
  'OFFICE OF THE COMPTROLLER': 14,  
  'ADMIN FOR CHILDREN\'S SVCS': 43,  
  'DEPT OF DESIGN & CONSTRUCTION': 48,  
  'ADMIN TRIALS AND HEARINGS': 16,  
  'DEPT OF PARKS & RECREATION': 34,  
  'HUMAN RIGHTS COMMISSION': 4,  
  'POLICE DEPARTMENT': 36,  
  'DEPT OF INFO TECH & TELECOMM': 50,  
  'DISTRICT ATTORNEY KINGS COUNTY': 4,  
  'TAXI & LIMOUSINE COMMISSION': 11,  
  'HOUSING PRESERVATION & DVLPMNT': 21,  
  'DEPARTMENT OF BUSINESS SERV.': 18,  
  'HRA/DEPT OF SOCIAL SERVICES': 31,  
  'DEPARTMENT OF PROBATION': 3,  
  'TAX COMMISSION': 4,  
  'NYC EMPLOYEES RETIREMENT SYS': 6,  
  'OFFICE OF COLLECTIVE BARGAININ': 2,  
  'DEPARTMENT OF BUILDINGS': 9,  
  'DEPARTMENT OF FINANCE': 29,  
  'LAW DEPARTMENT': 21,  
  'DEPARTMENT OF CORRECTION': 12,  
  'DEPARTMENT OF TRANSPORTATION': 67,  
  'DEPT OF YOUTH & COMM DEV SRVS': 5,  
  'FINANCIAL INFO SVCS AGENCY': 7,  
  'CULTURAL AFFAIRS': 1,  
  'OFFICE OF EMERGENCY MANAGEMENT': 12,  
  'DEPARTMENT OF CITY PLANNING': 5,  
  'DEPT OF CITYWIDE ADMIN SVCS': 15,  
  'DEPT. OF HOMELESS SERVICES': 3,  
  'DEPARTMENT FOR THE AGING': 2,  
  'CONSUMER AFFAIRS': 7,  
  'MAYORS OFFICE OF CONTRACT SVCS': 7,  
  'DISTRICT ATTORNEY RICHMOND COU': 3,  
  'NYC HOUSING AUTHORITY': 9,  
  'CIVILIAN COMPLAINT REVIEW BD': 5,  
  'OFF OF PAYROLL ADMINISTRATION': 1,  
  'EQUAL EMPLOY PRACTICES COMM': 1 }</pre>

_Et Voila_! We now know that if we want to work for New York City’s government, we should check out the Department of Health and Mental Hygiene’s 247 openings!

We can do a bunch of useful things with this data — personally, I want to dip my toes into data visualization, so I’ll be using it to make a simple chart. I hope you’ll be able to use this example as a jumping-off point for your own projects.

If you enjoyed this article, please reach out to me on [Twitter](http://twitter.com/j_speda)!

Thanks to [Jim O’Brien](http://twitter.com/jimcodes) for editing.








