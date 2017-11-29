---
author: Samer Buna
authorTwitter: https://twitter.com/samerbuna
authorFacebook: https://facebook.com/568190226682058
title: "REST APIs are REST-in-Peace APIs. Long Live GraphQL."
subTitle: "After years of dealing with REST APIs, when I first learned about GraphQL and the problems it’s attempting to solve, I could not resist t..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*fSaxvhFkiXvr8FoFZZjF0g.png
url: https://medium.freecodecamp.org/rest-apis-are-rest-in-peace-apis-long-live-graphql-d412e559d8e4
id: rest-apis-are-rest-in-peace-apis-long-live-graphql-d412e559d8e4
date: 2017-07-24T15:57:37.358Z
tags: [
  "GraphQL",
  "JavaScript",
  "Web Development",
  "Technology",
  "Programming"
]
---
# REST APIs are REST-in-Peace APIs. Long Live GraphQL.

After years of dealing with REST APIs, when I first learned about GraphQL and the problems it’s attempting to solve, I could not resist tweeting the exact title of this article.





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/a826767102a9f91047a5f8e2d4df5b64?postId=d412e559d8e4" data-media-id="a826767102a9f91047a5f8e2d4df5b64" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F2489584954%2Fsyaw8utdaudzc4b00zci_bigger.jpeg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Of course, back then, it was just an attempt by me at being funny, but today I believe that the funny prediction is actually happening.

Please don’t interpret this wrong. I am not going to accuse GraphQL of “killing” REST or anything like that. REST will probably never die, just like XML never did. I simply think GraphQL will do to REST what JSON did to XML.

This article is not actually 100% in favor of GraphQL. There is a very important section about the cost of GraphQL’s flexibility. With great flexibility comes great cost.

I am a big fan of “Always [Start with WHY](https://startwithwhy.com/)”, so let’s do that.

### In Summary: Why GraphQL?

The 3 most important problems that GraphQL solves beautifully are:

*   **The need to do multiple round trips to fetch data required by a view**: With GraphQL, you can always fetch all the initial data required by a view with a _single_ round-trip to the server. To do the same with a REST API, we need to introduce unstructured parameters and conditions that are hard to manage and scale.
*   **Clients dependency on servers**: With GraphQL, the client speaks a request language which: 1) eliminates the need for the server to hardcode the shape or size of the data, and 2) decouples clients from servers. This means we can maintain and improve clients separately from servers.
*   **The bad front-end developer experience**: With GraphQL, developers express the data requirements of their user interfaces using a declarative language. They express _what_ they need, not _how_ to make it available. There is a tight relationship between what data is needed by the UI and the way a developer can express a description of that data in GraphQL .

This article will explain in detail how GraphQL solves all these problems.

Before we begin, for those of you not yet acquainted with GraphQL, let’s start with simple definitions.

### What is GraphQL?

GraphQL is a _language_. If we teach GraphQL to a software application, that application will be able to _declaratively_ communicate any data requirements to a backend data service that also speaks GraphQL.

> Just like a child can quickly learn a new language — while a grown-up will have a harder time picking it up — starting a new application from scratch using GraphQL will be a lot easier than introducing GraphQL to a mature application.

To teach a data service to speak GraphQL, we need to implement a _runtime_ layer and expose it to the clients who want to communicate with the service. Think of this layer on the server side as simply a translator of the GraphQL language, or a GraphQL-speaking agent who represents the data service. GraphQL is not a storage engine, so it can’t be a solution on its own. This is why we can’t have a server that speaks just GraphQL and we need to implement a translating runtime instead.

This layer, which can be written in any language, defines a generic graph-based schema to publish the _capabilities_ of the data service it represents. Client applications who speak GraphQL can query that schema within its capabilities. This approach decouples clients from servers and allows both of them to evolve and scale independently.

A GraphQL request can be either a **query** (read operation) or a **mutation** (write operation). For both cases, the request is a simple string that a GraphQL service can interpret, execute, and resolve with data in a specified format. The popular response format that is usually used for mobile and web applications is _JSON_.

### What is GraphQL? (The Explain-it-like-I’m-5 version)

GraphQL is all about data communication. You have a client and a server and both of them need to talk with each other. The client needs to tell the server what data it needs, and the server needs to fulfill this client’s data requirement with actual data. GraphQL steps into the middle of this communication.



![](https://cdn-images-1.medium.com/max/1600/1*fSaxvhFkiXvr8FoFZZjF0g.png)

Screenshot captured from my Pluralsight course — Building Scalable APIs with GraphQL



Why can’t the client just communicate directly with the server, you ask? It sure can.

There are a few reasons to consider a GraphQL layer between clients and servers. One of those reasons, and perhaps the most popular one, is _efficiency_. The client usually needs to ask the server about _multiple_ resources, and the server usually understands how to reply with a single resource. So the client ends up doing multiple round-trips to the server to gather all the data it needs.

With GraphQL, we can basically shift this multi-request complexity to the server-side and have the GraphQL layer deal with it. The client asks the GraphQL layer a single question and gets a single response that has exactly what the client needs.

There are a lot more benefits to using a GraphQL layer. For example, one other big benefit is communicating with multiple services. When you have multiple clients requesting data from multiple services, a GraphQL layer in the middle can simplify and standardize this communication. Although this is not really a point against REST APIs — as it is easy to accomplish the same there — a GraphQL runtime offers a structured and standardized way of doing it.



![](https://cdn-images-1.medium.com/max/1600/1*2mTYU2RCJHagQrqQokYpww.png)

Screenshot captured from my Pluralsight course — Building Scalable APIs with GraphQL



Instead of a client going to the two different data services directly (in the slide above), we can have that client communicate with the GraphQL layer. Then the GraphQL layer will do the communication with the two different data services. This is how GraphQL first isolates the clients from needing to communicate in multiple languages and also translates a single request into multiple requests to multiple services using different languages.

> Imagine that you have three people who speak three different languages and have different types of knowledge. Then imagine that you have a question that can only be answered by combining the knowledge of all three people together. If you have a translator who speaks all three languages, the task of putting together an answer to your question becomes easy. This is exactly what a GraphQL runtime does.

Computers aren’t smart enough to answer just any questions (at least not yet), so they have to follow an algorithm somewhere. This is why we need to define a schema on the GraphQL runtime and that schema gets used by the clients.

The schema is basically a capabilities document that has a list of all the questions which the client can ask the GraphQL layer. There is some flexibility in how to use the schema because we’re talking about a graph of nodes here. The schema mostly represents the limits of what can be answered by the GraphQL layer.

Still not clear? Let’s call GraphQL what it really and simply is: _A replacement for REST APIs._ So let me answer the question that you’re most likely asking now.

### What’s wrong with REST APIs?

The biggest problem with REST APIs is the nature of multiple endpoints. These require clients to do multiple round-trips to get their data.

REST APIs are usually a collection of endpoints, where each endpoint represents a resource. So when a client needs data from multiple resources, it needs to perform multiple round-trips to a REST API to put together the data it needs.

In a REST API, there is no client request language. Clients do not have control over what data the server will return. There is no language through which they can do so. More accurately, the language available for clients is very limited.

For example, the _READ_ REST API endpoints are either:

*   GET `/ResouceName` - to get a list of all the records from that resource, or
*   GET `/ResourceName/ResourceID` - to get the single record identified by that ID.

A client can’t, for example, specify which _fields_ to select for a record in that resource. That information is in the REST API service itself and the REST API service will always return all of the fields regardless of which ones the client actually needs. GraphQL’s term for this problem is _over-fetching_ of information that’s not needed. It’s a waste of network and memory resources for both the client and server.

One other big problem with REST APIs is versioning. If you need to support multiple versions, that usually means new endpoints. This leads to more problems while using and maintaining those endpoints and it might be the cause of code duplication on the server.

The REST APIs problems mentioned above are the ones specific to what GraphQL is trying to solve. They are certainly not all of the problems of REST APIs, and I don’t want to get into what a REST API is and is not. I am mostly talking about the popular resource-based-HTTP-endpoint APIs. Every one of those APIs eventually turns into a mix that has regular REST endpoints + custom ad-hoc endpoints crafted for performance reasons. This is where GraphQL offers a much better alternative.

### How does GraphQL do its magic?

There are a lot of concepts and design decisions behind GraphQL, but probably the most important ones are:

*   A GraphQL schema is a strongly typed schema. To create a GraphQL schema, we define _fields_ that have _types_. Those types can be primitive or custom and everything else in the schema requires a type. This rich type system allows for rich features like having an introspective API and being able to build powerful tools for both clients and servers.
*   GraphQL speaks to the data as a Graph, and data is naturally a graph. If you need to represent any data, the right structure is a graph. The GraphQL runtime allows us to represent our data with a graph API that matches the natural graph shape of that data.
*   GraphQL has a declarative nature for expressing data requirements. GraphQL provides clients with a declarative language for them to express their data needs. This declarative nature creates a mental model around using the GraphQL language that’s close to the way we think about data requirements in English and it makes working with a GraphQL API a lot easier than the alternatives.

The last concept is why I personally believe GraphQL is a game changer.

Those are all high-level concepts. Let’s get into some more details.

To solve the multiple round-trip problem, GraphQL makes the responding server just a single endpoint. Basically, GraphQL takes the custom endpoint idea to an extreme and just makes the whole server a single custom endpoint that can reply to all data questions.

The other big concept that goes with this single endpoint concept is the rich client request language that is needed to work with that custom single endpoint. Without a client request language, a single endpoint is useless. It needs a language to process a custom request and respond with data for that custom request.

Having a client request language means that the clients will be in control. They can ask for exactly what they need and the server will reply with exactly what that they’re asking for. This solves the over-fetching problem.

When it comes to versioning, GraphQL has an interesting take on that. Versioning can be avoided all together. Basically, we can just add new _fields_ without removing the old ones, because we have a graph and we can flexibly grow the graph by adding more nodes. So we can leave paths on the graph for old APIs and introduce new ones without labeling them as new versions. The API just grows.

This is especially important for mobile clients because we can’t control the version of the API they’re using. Once installed, a mobile app might continue to use that same old version of the API for years. On the web, it’s easy to control the version of the API because we just push new code. For mobile apps, that’s a lot harder to do.

_Not totally convinced yet?_ How about we do a one-to-one comparison between GraphQL and REST with an actual example?

### RESTful APIs vs GraphQL APIs — Example

Let’s imagine that we are the developers responsible for building a shiny new user interface to represent the Star Wars films and characters.

The first UI we’ve been tasked to build is simple: a view to show information about a single Star Wars person. For example, Darth Vader, and all the films this person appeared in. This view should display the person’s name, birth year, planet name, and the titles of all the films in which they appeared.

As simple as that sounds, we’re actually dealing with 3 different resources here: Person, Planet, and Film. The relationship between these resources is simple and anyone can guess the shape of the data here. A person object belongs to one planet object and it will have one or more films objects.

The JSON data for this UI could be something like:

<pre name="0874" id="0874" class="graf graf--pre graf-after--p">{  
  "data": {  
    "person": {  
      "name": "Darth Vader",  
      "birthYear": "41.9BBY",  
      "planet": {  
        "name": "Tatooine"  
      },  
      "films": [  
        { "title": "A New Hope" },  
        { "title": "The Empire Strikes Back" },  
        { "title": "Return of the Jedi" },  
        { "title": "Revenge of the Sith" }  
      ]  
    }  
  }  
}</pre>

Assuming a data service gave us this exact structure for the data, here’s one possible way to represent its view with React.js:

<pre name="57d7" id="57d7" class="graf graf--pre graf-after--p">// The Container Component:  
<PersonProfile person={data.person} ></PersonProfile></pre>

<pre name="c7e1" id="c7e1" class="graf graf--pre graf-after--pre">// The PersonProfile Component:  
Name: {person.name}  
Birth Year: {person.birthYear}  
Planet: {person.planet.name}  
Films: {person.films.map(film => film.title)}</pre>

This is a simple example, and while our experience with Star Wars might have helped us here a bit, the relationship between the UI and the data is very clear. The UI used all the “keys” from the JSON data object we imagined.

Let’s now see how we can ask for this data using a RESTful API.

We need a single person’s information, and assuming that we know the ID of that person, a RESTful API is expected to expose that information as:

<pre name="c6e0" id="c6e0" class="graf graf--pre graf-after--p">GET - /people/{id}</pre>

This request will give us the name, birthYear, and other information about the person. A good RESTful API will also give us the ID of this person’s planet and an array of IDs for all the films this person appeared in.

The JSON response for this request could be something like:

<pre name="d6a8" id="d6a8" class="graf graf--pre graf-after--p">{  
  "name": "Darth Vader",  
  "birthYear": "41.9BBY",  
  "planetId": 1  
  "filmIds": [1, 2, 3, 6],  
  *** other information we do not need ***  
}</pre>

Then to read the planet’s name, we ask:

<pre name="0efa" id="0efa" class="graf graf--pre graf-after--p">GET - /planets/1</pre>

And to read the films titles, we ask:

<pre name="cfb5" id="cfb5" class="graf graf--pre graf-after--p">GET - /films/1  
GET - /films/2  
GET - /films/3  
GET - /films/6</pre>

Once we have all 6 responses from the server, we can combine them to satisfy the data needed by our view.

Besides the fact that we had to do 6 round-trips to satisfy a simple data need for a simple UI, our approach here was imperative. We gave instructions for _how_ to fetch the data and _how_ to process it to make it ready for the view.

You can try this yourself if you want to see what I mean. The Star Wars data has a RESTful API currently hosted at [http://swapi.co/](http://swapi.co/). Go ahead and try to construct our data person object there. The keys might be a bit different, but the API endpoints will be the same. You will need to do exactly 6 API calls. Furthermore, you will have to over-fetch information that the view does not need.

Of course, this is just one implementation of a RESTful API for this data. There could be better implementations that will make this view easier to implement. For example, if the API server implemented nested resources and understood the relationship between a person and a film, we could read the films data with:

<pre name="7934" id="7934" class="graf graf--pre graf-after--p">GET - /people/{id}/films</pre>

However, a pure RESTful API server would most likely not implement that, and we would need to ask our backend engineers to create this custom endpoint for us. That’s the reality of scaling a RESTful API — we just add custom endpoints to efficiently satisfy the growing clients needs. Managing custom endpoints like these is hard.

Let’s now look at the GraphQL approach. GraphQL on the server embraces the custom endpoints idea and takes it to its extreme. The server will be just a single endpoint and the channel does not matter. If we’re doing this over HTTP, the HTTP method certainly wouldn’t matter either. Let’s assume we have a single GraphQL endpoint exposed over HTTP at `/graphql`.

Since we want to ask for the data we need in a single round-trip, we’ll need a way to express our complete data needs for the server. We do this with a GraphQL query:

<pre name="cd67" id="cd67" class="graf graf--pre graf-after--p">GET or POST - /graphql?query={...}</pre>

A GraphQL query is just a string, but it will have to include all the pieces of the data that we need. This is where the declarative power comes in.

In English, here’s how we declare our data requirement: _we need a person’s name, birth year, planet’s name, and the titles of all their films_. In GraphQL, this translates to:

<pre name="3dfe" id="3dfe" class="graf graf--pre graf-after--p">{  
  person(ID: ...) {  
    name,  
    birthYear,  
    planet {  
      name  
    },  
    films {  
      title  
    }  
  }  
}</pre>

Read the English-expressed requirements one more time and compare it to the GraphQL query. It’s as close as it can get. Now, compare this GraphQL query with the original JSON data that we started with. The GraphQL query is the exact structure of the JSON data, except without all the “values” parts. If we think of this in terms of a question-answer relation, the question is the answer statement without the answer part.

If the answer statement is:

> _The closest planet to the Sun is Mercury._

A good representation of the question is the same statement without the answer part:

> _(What is) the closest planet to the Sun?_

The same relationship applies to a GraphQL query. Take a JSON response, remove all the “answer” parts (which are the values), and you end up with a GraphQL query very suitable to represent a question about that JSON response.

Now, compare the GraphQL query with the declarative React UI we defined for the data. Everything in the GraphQL query is used in the UI, and everything used in the UI appears in the GraphQL query.

This is the great mental model of GraphQL. The UI knows the exact data it needs and extracting that requirement is fairly easy. Coming up with a GraphQL query is simply the task of extracting what’s used as variables directly from the UI.

If we invert this model, it would still hold the power. If we have a GraphQL query, we know exactly how to use its response in the UI because the query will be the same “structure” as the response. We don’t need to inspect the response to know how to use it and we don’t need any documentation about the API. It’s all built-in.

Star Wars data has a GraphQL API hosted at [https://github.com/graphql/swapi-graphql](https://github.com/graphql/swapi-graphql). Go ahead and try to construct our data person object there. There are a few minor differences that we’ll explain later, but here’s the official query you can use against this API to read our data requirement for the view (with Darth Vader as an example):

<pre name="0301" id="0301" class="graf graf--pre graf-after--p">{  
  person(personID: 4) {  
    name,  
    birthYear,  
    homeworld {  
      name  
    },  
    filmConnection {  
      films {  
        title  
      }  
    }  
  }  
}</pre>

This request gives us a response structure very close to what our view used, and remember, we’re getting all of this data in a single round-trip.

### The Cost of GraphQL’s Flexibility

Perfect solutions are fairy tales. With the flexibility GraphQL introduces, a door opens on some clear problems and concerns.

One important threat that GraphQL makes easier is resource exhaustion attacks (AKA Denial of Service attacks). A GraphQL server can be attacked with overly complex queries that will consume all the resources of the server. It’s very simple to query for deep nested relationships (user -> friends -> friends …), or use field aliases to ask for the same field many times. Resource exhaustion attacks are not specific to GraphQL, but when working with GraphQL we have to be extra careful about them.

There are some mitigations we can do here. We can do cost analysis on the query in advance and enforce some kind of limits on the amount of data one can consume. We can also implement a time-out to kill requests that take too long to resolve. Also, since GraphQL is just a resolving layer, we can handle the rate limits enforcement at a lower level under GraphQL.

If the GraphQL API endpoint we’re trying to protect is not public and is meant for internal consumption of our own clients (web or mobile), we can use a whitelist approach and pre-approve queries that the server can execute. Clients can just ask the servers to execute pre-approved queries using a query unique identifier. Facebook seems to be using this approach.

Authentication and authorization are other concerns that we need to think about when working with GraphQL. Do we handle them before, after, or during a GraphQL resolve process?

To answer this question, think of GraphQL as a DSL (domain specific language) on top of your own backend data fetching logic. It’s just one layer that we could put between the clients and our actual data service (or multiple services).

Think of authentication and authorization as another layer. GraphQL will not help with the actual implementation of the authentication or authorization logic. It’s not meant for that. But if we want to put these layers behind GraphQL, we can use GraphQL to communicate the access tokens between the clients and the enforcing logic. This is very similar to the way we do authentication and authorization with RESTful APIs.

One other task that GraphQL makes a bit more challenging is client data caching. RESTful APIs are easier to cache because of their dictionary nature. This location gives that data. We can use the location itself as the cache key.

With GraphQL, we can adopt a similar basic approach and use the query text as a key to cache its response. But this approach is limited, not very efficient, and can cause problems with data consistency. The results of multiple GraphQL queries can easily overlap, and this basic caching approach would not account for the overlap.

There is a brilliant solution to this problem though. A Graph Query means a _Graph Cache_. If we normalize a GraphQL query response into a flat collection of records, giving each record a global unique ID, we can cache those records instead of caching the full responses.

This is not a simple process though. There will be records referencing other records and we will be managing a cyclic graph there. Populating and reading the cache will need query traversal. We need to code a layer to handle the cache logic. But this method will overall be a lot more efficient than response-based caching. [Relay.js](https://facebook.github.io/relay/) is one framework that adopts this caching strategy and auto-manages it internally.

Possibly the most important problem that we should be concerned about with GraphQL is the problem that’s commonly referred to as N+1 SQL queries. GraphQL query fields are designed to be stand-alone functions and resolving those fields with data from a database might result in a new database request per resolved field.

For a simple RESTful API endpoint logic, it’s easy to analyze, detect, and solve N+1 issues by enhancing the constructed SQL queries. For GraphQL dynamically resolved fields, it’s not that simple. Luckily Facebook is pioneering one possible solution to this problem: [DataLoader](https://github.com/facebook/dataloader).

As the name implies, DataLoader is a utility one can use to read data from databases and make it available to GraphQL resolver functions. We can use DataLoader instead of reading the data directly from databases with SQL queries, and DataLoader will act as our agent to reduce the actual SQL queries we send to the database.

DataLoader uses a combination of batching and caching to accomplish that. If the same client request resulted in a need to ask the database about multiple things, DataLoader can be used to consolidate these questions and batch-load their answers from the database. DataLoader will also cache the answers and make them available for subsequent questions about the same resources.











* * *







Thanks for reading. If you found this article helpful, please click the💚 below. Follow me for more articles on Node.js and JavaScript.

I create **online courses** for [Pluralsight](https://app.pluralsight.com/profile/author/samer-buna) and [Lynda](https://www.lynda.com/Samer-Buna/7060467-1.html). My most recent courses are [Advanced React.js](https://www.pluralsight.com/courses/reactjs-advanced), [Advanced Node.js](https://www.pluralsight.com/courses/nodejs-advanced), and [Learning Full-stack JavaScript](https://www.lynda.com/Express-js-tutorials/Learning-Full-Stack-JavaScript-Development-MongoDB-Node-React/533304-2.html).

I also do **online and onsite training** for groups covering beginner to advanced levels in JavaScript, Node.js, React.js, and GraphQL. [Drop me a line](mailto:samer@jscomplete.com) if you’re looking for a trainer. If you have any questions about this article or any other article I wrote, find me on [this **slack** account](https://slack.jscomplete.com/) (you can invite yourself) and ask in the #questions room.








