---
author: Suhas Chatekar
authorTwitter: https://twitter.com/suhas_chatekar
authorFacebook: https://facebook.com/10153883931987033
title: "How to balance chunkiness against chattiness when designing your REST API"
subTitle: "One of the challenges of building any API is that you don’t know who will use your API, or how they will use it...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*LPqttE_5_wbbElPa8J6nxQ.jpeg
url: https://medium.freecodecamp.org/three-ways-to-balance-between-chunkiness-and-chattiness-of-your-rest-api-67e60b7bcca7
id: three-ways-to-balance-between-chunkiness-and-chattiness-of-your-rest-api-67e60b7bcca7
date: 2017-02-27T21:39:58.662Z
tags: [
  "GraphQL",
  "API",
  "Programming",
  "Tech",
  "Startup"
]
---
# How to balance chunkiness against chattiness when designing your REST API







![](https://cdn-images-1.medium.com/max/2000/1*LPqttE_5_wbbElPa8J6nxQ.jpeg)







One of the challenges of building any API is that you don’t know who will use your API, or how they will use it.

You may have an internal consumer who calls your API over a LAN connection. This consumer would not mind making massive API responses (chunky), or making several API calls to get all the different chunks of data that they want (chatty).

Or you may have an external consumer connecting over the internet. This consumer would like to make a small number of network calls. Such consumers also want the API to return just enough data.



![](https://cdn-images-1.medium.com/max/1600/1*UXNH96dwNg_hj-txjStXVQ.png)



Consumers connecting from a mobile network are particular about network calls. For them, network calls result in carrier charges for their users. Large amount data returned by APIs is not ideal for them as it may lead to a lot of battery usage while processing it.

As an API developer, you do not get to decide whether your API should be chatty or chunky or none. Consumers of your API want to decide that. Truth is, most APIs have consumers from both the camps. So how do you deal with these demands? The easy answer is by giving more power to the consumers of your APIs. Let the consumers be in the driving seat and let them tell your API what do they want.

In this article, I am going to talk about three techniques that let you do that.

### Technique #1: Use Lazy Get to control the size of your payload

Most Object Relational Mapper(ORM) tools have a feature called Lazy Loading. ORMs use this feature to return only the top level entity when they execute a SQL script. Any associated entities are not loaded completely but only their identifiers are loaded. When the application tries to access the associated entity, the ORM kicks in. It loads that entity using its identifier which it had loaded earlier. This is smart because ORM is not guessing when the application needs what. Instead, it is giving the application an ability to fetch on demand what’s needed when.

Lazy Get is similar. With Lazy Get, you do do not return a linked resource by default. Instead, you return a shallow version with only top level attributes populated. The API consumer can

1.  Instruct the server to return the linked resources in the same response
2.  Retrieve the linked resources at a later time using the link returned in the original response

This is best explained with an example. Let’s say we are building a meetup platform. People can create interest group and host meetups using our platform. Members of the platform can

1.  Join the groups they like
2.  Connect with other members of the platform
3.  RSVP for the events hosted by various groups

This is a set of basic features any meetup platform can have.

This platform is API enabled and we have got an API method to retrieve a `member` resource which looks like below.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/3bb66f4baf62d37f1b1ef092ab4226df?postId=67e60b7bcca7" data-media-id="3bb66f4baf62d37f1b1ef092ab4226df" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F998799%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





For brevity, the above code does not show the full representation of `memberships`, `rsvps` and `friends` resources. In reality, these resources will have more attributes than what I am showing here. They could even have their own linked resources.

A consumer of this API may not need all of this data all the time. A consumer connecting over LAN would happily accept a lot of data returned. But a mobile app developer connecting over a slow internet connection would not want this. Guess what? You can implement Lazy Get on this API method and let the consumer decide what data they want to be returned. You do this by supporting a new query parameter named `expand`. This parameter accepts comma separated names of the linked resources that the consumer wants the server to return. So for example, if the URL for retrieving the above member resource was

`[https://myapi.com/v1/member/34234](https://myapi.com/v1/member/34234)`

If a consumer wants only memberships information returned then they can send a request to the following URL

<pre name="a0d5" id="a0d5" class="graf graf--pre graf-after--p">[https://myapi.com/v1/member/34234?expand=memberships](https://myapi.com/v1/member/34234?expand=memberships)</pre>

This is good. Now the consumer has a control over what data server returns. But what happens to other resources i.e. `rsvps` and `friends`? Is server just going to exclude them from the response? If server excludes them how does the consumer get those resources when it needs them?

Instead, what server does is exactly same as what any ORM does with its lazy loading feature. The server returns an identifier of the resource in the place of the full resource.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b543af784e1af6d8ad7c9ce7e1d5da67?postId=67e60b7bcca7" data-media-id="b543af784e1af6d8ad7c9ce7e1d5da67" allowfullscreen="" frameborder="0"></iframe>





That way, if the consumer decides to fetch `rsvps` or `friends` resources, all they need to do is issue a GET request on the corresponding URLs.

#### Using hypermedia to make this little better

In the previous example, how would a client fetch a `friend` resource with id 5678? Where would it get the actual URL to fetch this resource from?We can use [hypermedia](https://en.wikipedia.org/wiki/HATEOAS) to help us here. If you have used hypermedia before then you may have guessed what I am talking about.

You can use one of the hypermedia specifications like [Siren](https://github.com/kevinswiber/siren), [HAL](https://tools.ietf.org/html/draft-kelly-json-hal-08) or [Collection+JSON](http://amundsen.com/media-types/collection/) to return actual URL for the resource instead of just the id. If you are still at [Richardson Maturity Model — Level 2 or below](https://martinfowler.com/articles/richardsonMaturityModel.html), don’t worry. You can do what we have done in such cases. We do not return the identifier of the linked resource. For out clients, it does not mean anything. We instead return an attributed `href`. This attribute contains the URL on which the clients can send a GET request to fetch that resource. The below is how our `member` resource looks with `href` attribute returned.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/5b85190009c239b1edec93243c7222e5?postId=67e60b7bcca7" data-media-id="5b85190009c239b1edec93243c7222e5" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F998799%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





And we return this attribute by default for all our resources.

### Technique #2: Use a hash API Method to become less chatty

Lazy Get is good for controlling the payload size of the response. Would it not be good to not have to make that API call again and again? It is, if the consumer caches the response it received.

An obvious shortcoming of caching is you would not know when your cache becomes out of date. The server can return cache expiry information in the response headers. The consumer can bust the cache based on this information. But all you are doing here is moving the problem from client to server. The server is still guessing what is the latest time by which the cache must expire. Even worse is that most implementations would set this to a default value.

Hash API Method offers an alternative for the applications that

1.  Cannot rely on caching as they always need to work on fresh copy of the data
2.  Cannot make frequent and heavy API calls due to the environment they operate in i.e. mobile apps.

A Hash API Method implementation will have the following

1.  Every resource that needs to support a Hash API Method must include a hash attribute
2.  The value is of this attribute is the hash of the string (JSON/XML)representation of the resource
3.  Server recalculates the hash every time the resource state changes.
4.  A new API method to return the latest hash value for each resource

Let’s say we want to support hash API method for the member resource from our previous example. So first we add a hash attribute as below





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/f0aa88635ec6f6b6e08980570bb78d90?postId=67e60b7bcca7" data-media-id="f0aa88635ec6f6b6e08980570bb78d90" allowfullscreen="" frameborder="0"></iframe>





The server uses a mechanism of its own choice to calculate the value of the hash attribute. It could also be a random string. The server must update its value every time the resource state changes.

Next, we add the following new API method that returns the latest hash value for member resource

<pre name="6ac6" id="6ac6" class="graf graf--pre graf-after--p">[https://myapi.com/v1/member/{memberid}/hash](https://myapi.com/v1/member/%7Bmemberid%7D/hash)</pre>

This API method returns a response with the status of `200 OK`. The response body contains the value of the hash attribute of the member resource. The key here is to make this API as fast as possible. The server can cache a map of resource id and hash value to reduce the response time.

All that a bandwidth-conscious consumer has to do now is to make a call on the Hash API Method. It can then compare the returned hash value with the hash value it has from the previous retrieval of the resource. If the hash values are the same, then it is safe to assume that the resource has not changed since the consumer last retrieved it. If the hash values are different then it’s time to fetch the latest value of the resource.

#### Keeping the hash updated all the times

As more and more consumers start using hash API Method, it becomes important to ensure that hashes are always kept updated. This needs proper thinking and optimal design. Consider the following situations

1.  When a resource gets partially/fully updated, the hash must be updated
2.  If you hash includes the linked resources, the every time a resource gets updated, all the other resources that link this resource must update their hash.
3.  When a resource gets deleted, the the hash method for that resource must return a `404 Not Found` and every consumer application should handle this response to delete their cached copy of the resource

If you decide to use Hash API Method, think of about these situations from day 1\. Handling these situations as an afterthought can be expensive.

### Technique #3: Use GraphQL to fetch just what you need

GraphQL is a Facebook Open Source project. It started as an idea some years ago but has progressed into a well-defined specification now. There are a handful of libraries for major programming platform that supports GraphQL. As per [GraphQL’s website](http://graphql.org/):

> “GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.”

This looks similar to Lazy Get, but in reality, it is even more powerful than that. We will see in a bit how. GraphQL also makes it easy to support Hash API Method without having to add a special endpoint. Before we go into these details, let’s look into a quick example of what GraphQL offers.

If an API consumer needs a shallow copy of member resource without any linked resources then it should send the below GraphQL query





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c5fcd0e254f0f89880f558e21a522289?postId=67e60b7bcca7" data-media-id="c5fcd0e254f0f89880f558e21a522289" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F998799%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Let’s ignore some details like the destination URL for this query and handling of the query on the server. This query returns the specified attributes of the member resource having id 34342.

If another consumer wants only `firstname` and `lastname` then they specify those two attributes in their query. The server will return those attributes. You see how powerful this can be. With Lazy Get, you get all linked resources fully hydrated or none. But it was not possible to strip off some attributes.

GraphQL’s ability to specify exactly which attributes we want to be returned, lets us support Hash API Method out of the box. A consumer wanting to get the latest value of hash of member resource in the above example would just send the below query





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/17f75ddff3b585c5cef988dd2254d4ba?postId=67e60b7bcca7" data-media-id="17f75ddff3b585c5cef988dd2254d4ba" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F998799%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Remember, it is still the same API endpoint on the server that is handling these queries. This gives very granular control to the consumers of the API. Consumers can balance between chunky responses and chatty API calls all by themselves.

**One thing worth mentioning is the performance of the Hash API Method using GraphQL**. A core premise of Hash API Method is that it needs to return as fast as possible. If we have our own implementation of Hash API Method then we have total control to do any fine tuning we need. With GraphQL, we are limited by what the GraphQL library we use offers. If you use GraphQL version of Hash API Method then make sure it is performance tuned for the use case.

#### GraphQL is all about giving control to the consumers of your API

I have shown two simple examples of what’s possible with GraphQL. But GraphQL is not limited to simple queries. You can do

1.  Specify additional filters on attributes like first 10, last 30 or contains
2.  Specify filters on more than one attribute
3.  Group commonly returned attributes in [fragments](http://facebook.github.io/graphql/#sec-Language.Fragments)
4.  [Query validation](http://facebook.github.io/graphql/#sec-Validation)
5.  [Parameterize queries](http://facebook.github.io/graphql/#sec-Language.Variables) using variables
6.  Dynamically changing query behavior using [directives](http://facebook.github.io/graphql/#sec-Language.Directives)
7.  [Data mutations after fetch](http://facebook.github.io/graphql/#OperationType)

An API that fully supports GraphQL, gives its consumer total control over what data they fetch at what point.

### `Happy API consumer == Happy API developer == Great API`





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/e8e5e1c90092ccd880df7aa0db0c09eb?postId=67e60b7bcca7" data-media-id="e8e5e1c90092ccd880df7aa0db0c09eb" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F565904650595889153%2FwV8wR37J_bigger.jpeg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





One of the ways of providing good developer experience is to give them some control over the APIs that they interact with. Lazy Get, Hash API Method, and GraphQL provide a mechanism by which API developers can give that control to their consumers.











* * *







_☞ If you like my article, please_ **_don’t forget to click ❤ to recommend_** _it to others._

_Also, to be notified about my new articles and stories, follow me on_ [_Medium_](https://medium.com/@suhas_chatekar) _and_ [_Twitter_](https://twitter.com/suhas_chatekar)_. You can find me on_ [_LinkedIn_](https://www.linkedin.com/in/chatekar) _as well. Cheers!_











* * *







[**Why should you use standard HTTP methods while designing REST APIs?**  
_One of the characteristics of a good REST API is that it uses the standard HTTP methods in a way they are supposed to…_medium.com](https://medium.com/@suhas_chatekar/why-you-should-use-the-recommended-http-methods-in-your-rest-apis-981359828bf7 "https://medium.com/@suhas_chatekar/why-you-should-use-the-recommended-http-methods-in-your-rest-apis-981359828bf7")[](https://medium.com/@suhas_chatekar/why-you-should-use-the-recommended-http-methods-in-your-rest-apis-981359828bf7)

[**Visualising complex APIs using API Map**  
_A picture is worth a thousand words…_medium.com](https://medium.com/@suhas_chatekar/visualising-complex-apis-using-api-map-f09f617acb32 "https://medium.com/@suhas_chatekar/visualising-complex-apis-using-api-map-f09f617acb32")[](https://medium.com/@suhas_chatekar/visualising-complex-apis-using-api-map-f09f617acb32)








