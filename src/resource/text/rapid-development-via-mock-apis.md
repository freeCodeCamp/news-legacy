---
author: Cory House
authorTwitter: https://twitter.com/housecor
authorFacebook: none
title: "No API? No Problem! Rapid Development via Mock APIs"
subTitle: "Create a realistic mock API with Node.js in three quick steps"
coverSrc: https://cdn-images-1.medium.com/max/2000/1*Subl5K29BEplXnabKvek-A.jpeg
url: https://medium.freecodecamp.org/rapid-development-via-mock-apis-e559087be066
id: rapid-development-via-mock-apis-e559087be066
date: 2016-11-16T13:41:52.816Z
tags: [
  "JavaScript",
  "Software Development",
  "Web Development",
  "Mobile App Development",
  "Programming"
]
---
# No API? No Problem! Rapid Development via Mock APIs

## Create a realistic mock API with Node.js in three quick steps







![](https://cdn-images-1.medium.com/max/2000/1*Subl5K29BEplXnabKvek-A.jpeg)

A mock API **seems** real on the surface, and that’s what matters.







In this era of service-oriented development, you need to get JSON to and from the server to make your front-end come alive. So an API is a necessity.

But, great news: You don’t need to create real web services to get started. Instead, just set up a mock API.

**Note:** I’m saying API for brevity. Related terms include Web API, Web service, JSON API, and RESTful API.

#### Why a Mock API?

Here are four reasons to use a mock API:

1.  **No API yet **— Maybe you haven’t created an API yet. A mock API allows you to begin development without waiting for the API team to build the services you need. And if you haven’t decided how to design your web services, mocking allows you to rapidly prototype different potential response shapes to see how they work with your app.
2.  **Slow or unreliable API** — Are the existing APIs in your dev or QA environment slow, unreliable, or expensive to call? If so, a mock API offers consistent, instantaneous responses for rapid feedback development. And if your existing web services go down, a mock API allows you to keep working.
3.  **Eliminate inter-team dependencies** — Is a separate team creating your app’s web services? A mock API means you can start coding immediately and switch to the real web services when they’re ready. Just agree on the API’s proposed design and mock it accordingly.
4.  **Work offline** — Finally, maybe you need to work on a plane, on the road, or in other places where connectivity is poor. Mocking allows you to work offline because your calls remain local.

### Let’s Create a Mock API

The simplest way I’ve found to get this done uses Node.js. Here is my three step process to create a realistic mock API:

1.  Declare the schema
2.  Generate random data
3.  Serve random data

Let’s walk through the three steps.

#### **Step 1 — Declare the Schema**

First, let’s declare the schema for our mock API using [JSON Schema Faker](https://github.com/json-schema-faker/json-schema-faker). This will allow us to declare what our fake API should look like. We’ll declare the objects and properties it will expose including the datatypes. There’s a [handy online REPL](http://json-schema-faker.js.org/) that makes it easy to learn.

JSON Schema faker supports generating realistic random data via three open source libraries. [Faker.js](https://github.com/marak/Faker.js/), [chance.js](http://chancejs.com/), and [randexp.js](https://fent.github.io/randexp.js/). Faker and chance are very similar. Both offer a wide variety of functions for generating random data including realistic names, address, phone numbers, emails, and much more. Randexp creates random data based on regular expressions. JSON Schema faker allows us to use faker, chance, and randexp within our schema definitions. This way, you can declare exactly how each property in your mock API should be generated.

Here’s an example schema for generating realistic, randomized user data. I save this file as mockDataSchema.js:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/75264369735091a7426f65f2d00c2bf5?postId=e559087be066" data-media-id="75264369735091a7426f65f2d00c2bf5" allowfullscreen="" frameborder="0"></iframe>





This schema uses faker.js to generate an array of users with realistic names and emails.

#### **Step 2 — Generate Random Data**

Once we’ve defined our schema, it’s time to generate random data. To automate build tasks, I prefer to use npm scripts instead of Gulp and Grunt. [Here’s why](https://medium.freecodecamp.com/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.2cqrvlxhf).

I create an npm script in package.json that calls a separate Node script:

<pre name="1ba4" id="1ba4" class="graf graf--pre graf-after--p">"generate-mock-data": "node buildScripts/generateMockData"</pre>

The script above is calling a Node script called generateMockData. Here’s what’s inside generateMockData.js:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/885ec6c887017550548e75d8a8d5f1f5?postId=e559087be066" data-media-id="885ec6c887017550548e75d8a8d5f1f5" allowfullscreen="" frameborder="0"></iframe>





I’m calling [json-schema-faker](https://www.npmjs.com/package/json-schema-faker) on line 11, and passing it the mock data schema we set up in step 1\. This ultimately writes JSON to db.json, as specified on line 13 above.

#### **Step 3 — Serve Random Data**

Now that we have written randomized, realistic data to db.json, let’s serve it up! [JSON server](https://github.com/typicode/json-server) creates a realistic API using the static JSON file we created. So let’s point JSON server at the mock dataset that we dynamically generated in step 2.

<pre name="003e" id="003e" class="graf graf--pre graf-after--p">"start-mockapi": "json-server --watch src/api/db.json --port 3001"</pre>

This starts json-server and serves up the data in db.json on port 3001\. Each top-level object is exposed on an HTTP endpoint.

Here’s the awesome part: JSON Server simulates a real database by saving the changes to the db.json file we created in step 2.

> **The beauty of JSON server: it handles create, reads, updates, and deletes, so it feels totally real.**

**The mock API operates just like a real API, but without having to make an actual HTTP call or stand up a real database!** Slick.

This means we can do development without creating a real API first. We just need to agree on the calls and data shape, then the UI team can move ahead without having to wait on the service team to create the associated services.

In summary, to make all this come together, you need 3 lines in package.json:

<pre name="9652" id="9652" class="graf graf--pre graf-after--p">"generate-mock-data": "node buildScripts/generateMockData",  
"prestart-mockapi": "npm run generate-mock-data",  
"start-mockapi": "json-server --watch src/api/db.json --port 3001"</pre>

The start-mockapi script runs json-server and tells it to watch the db.json we generated in step 2\. Before the mock API is started, mock data is generated. The prestart-mockapi script is called before start-mockapi because it’s prefixed by “pre”. This is npm script convention. With this setup, every time we start the app, new realistic mock data is generated!

Alright, we’re ready to roll.

Type this:

<pre name="ed26" id="ed26" class="graf graf--pre graf-after--p">npm run start-mockapi</pre>

And load this:

[http://localhost:3001/users](http://localhost:3001/users).

You should see a list of users returned as JSON. Success!

To see how this all comes together, [here’s a working demo of this setup on GitHub](https://github.com/coryhouse/mock-api-example).

Also, my new “[Building a JavaScript Development Environment](https://app.pluralsight.com/library/courses/javascript-development-environment)” course builds this and much more from scratch. ([free trial](https://billing.pluralsight.com/individual/checkout))



[![](https://cdn-images-1.medium.com/max/1600/1*buNt_4s0mdYgZVU9ojz6Ew.png)](https://app.pluralsight.com/library/courses/javascript-development-environment)



#### The Tip of An Iceberg…

This article discusses just one of over 40 decisions you need to make to create a new JavaScript development environment from scratch:



![](https://cdn-images-1.medium.com/max/1600/1*zFePRtYWlugmbOxrzOYivQ.png)

Overwhelmed yet?



I walk through all of these decisions and build a rich JavaScript development environment from scratch [here](https://app.pluralsight.com/library/courses/javascript-development-environment/table-of-contents).

Are you generating mock APIs today? Have an alternative set up to share? I’d love to hear about your experiences in the comments.











* * *







[Cory House](https://twitter.com/housecor) is the author of [many courses on Pluralsight](http://pluralsight.com/author/cory-house), and principal consultant at [reactjsconsulting.com](http://www.reactjsconsulting.com). He is a Software Architect at VinSolutions, Microsoft MVP, and trains software developers internationally on software practices like front-end development and clean coding.








