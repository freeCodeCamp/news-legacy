---
author: David Celis
authorTwitter: https://twitter.com/davidcelis
authorFacebook: none
title: "Give it a REST: use GraphQL for your APIs"
subTitle: "In the world of API architecture, REST has been the reigning ruler for a decade or more. Chances are that you use software built on a RES..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*IvCDlfi3vQfgyKO1eFv4jA.png
url: https://medium.freecodecamp.org/give-it-a-rest-use-graphql-for-your-apis-40a2761e6336
id: give-it-a-rest-use-graphql-for-your-apis-40a2761e6336
date: 2017-01-05T22:44:13.844Z
tags: [
  "GraphQL",
  "Programming",
  "Tech",
  "Technology",
  "API"
]
---
# Give it a REST: use GraphQL for your APIs



![](https://cdn-images-1.medium.com/max/1600/1*IvCDlfi3vQfgyKO1eFv4jA.png)



In the world of API architecture, REST has been the reigning ruler for a decade or more. Chances are that you use software built on a REST API multiple times per day on your phone, computer, or some other device. Maybe you’ve even worked on a REST API or written one yourself! Despite REST’s popularity, however, it has a few glaring flaws.

### What is REST?

In REST APIs, the server defines a specific set of resources that a client can request, and these resources are defined by unique URLs. For example, in the API for a generic microblogging platform, the URL `/users/1`may denote the first user in the system, `/users/1/posts` could return a collection of all posts that user has written, and `/users/1/posts/327` could return a single post. REST has many nuances and a well-documented specification for behavior, but URL-based resources cover the basic idea. What is ultimately important is that the _server_ defines the structure of the data that the client can request.

### What’s wrong with REST?

Imagine you work for the aforementioned Generic Microblogginator™ company as a mobile app developer. You’re given the task of writing the mobile view for a user’s profile, which needs to show information about the user and list their posts. This isn’t too difficult; just hit the `/users/{id}` endpoint to get the former, and `/users/{id}/posts` to get the latter.

You ship the mobile view and wait to be ✨dazzled✨ by all of the customer feedback and app reviews. Next week, once all of the reviews have poured in, you get a new requirement. That Other Microblogger™ shows a couple of comments on each post in their profile view. Why don’t we do that, too? Luckily, your API already has an endpoint to get a blog post’s comments: `/users/{id}/posts/{id}/comments`. You change the view to hit that endpoint for each post you show on a user’s profile page, and you’re done.

But now your app is slow, and this leads us to one of the major problems with REST APIs:

### Too many HTTP requests

Let’s face it: client applications rarely stay simple. More often than not, each client has a fairly specific set of requirements that reflect what data they need from your system. If you provide only one absolute way to request data, you’ll get clients trying to ram a rhomboid peg into a diamond-shaped hole.

In our previous example, our mobile app will become slower and slower with each post a user writes. If a user has twenty posts listed on their profile, we’re issuing _22 API requests_. One for information on the user, one for their list of posts, and then twenty requests to get each post’s comments.

As you add more components to your mobile app’s interface, this problem will get worse. With each new UI component comes a new API call or a new customization to existing API endpoints. You can nest objects within each other to avoid extra API calls, but as your view becomes more complex, you’ll inevitably start nesting irrelevant data. You’ll end up with endpoints that don’t describe a single resource but, instead, a view of multiple resources. Now your API doesn’t seem so RESTful anymore.

Even worse, you’ll need to support any old endpoints as long as there are old versions of clients in the wild lest you risk breaking those clients. This leads to another major problem with REST:

### “Versioning” REST APIs is a pain

The structure of responses from REST APIs is important. Clients build themselves around the knowledge that each resource has a specific structure. When Generic Microblogginator™ first released their API, this is what the response for getting a single post looked like:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/334bb64c27e7adb8310b556aa5ca67af?postId=40a2761e6336" data-media-id="334bb64c27e7adb8310b556aa5ca67af" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F36873%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





After some time has passed, you decide there are a couple things you want to improve about a post’s structure in the API. Posts are about to get categories, so you’ll need to add those as a new field. You’ve also received feedback that the format for `published_at` isn’t very friendly. JavaScript clients can parse it okay, but you’d rather any tool be able to parse your timestamps easily, so you decide to change it to an ISO-8601 format. When all is said and done, you want the new structure to look like this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ccc3000831ec89e74d42a134e2118fe8?postId=40a2761e6336" data-media-id="ccc3000831ec89e74d42a134e2118fe8" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F36873%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Looking good! Unfortunately, one of your changes will break all of your existing clients. Every client expects `published_at` to be the less-friendly format, so that’s how they’ll try to parse it. If you want to update a field or remove a field, you have to version your API (whether it’s via the URL or an HTTP header) and try to get clients to upgrade. It’s unlikely you’d get every client to upgrade, so you have two choices:

1.  Be okay with breaking old versions of clients (including your own app)
2.  Support old versions of your API until the day your company decides to [announce a new chapter in their incredible journey](https://ourincrediblejourney.tumblr.com).

The easiest thing to do is simply leave your old code alone, which means piling more and more versions of your API versions on top of the old ones.

### A challenger approaches

Enter GraphQL, a technology written by Facebook. Facebook was facing major problems with the data pipeline for their mobile applications. Their mobile apps used to be wrappers around web views and, as the mobile apps increased in complexity, they began to suffer performance problems and frequent crashes. Facebook turned to writing native applications and found themselves needing a new API to retrieve data for their native views. They evaluated REST and other options but, given problems like those described above, ultimately took the opportunity to produce something truly new.

#### What is GraphQL?

GraphQL is, as the name might suggest, a query language. It’s also perfect for APIs. It allows you to define your data using a fully-fledged type system, forming a schema that is self-documenting. It also gives clients full control over the data they request.

#### Too many HTTP requests? How about one HTTP request?

With GraphQL, clients can get all of the data they need to render a view using only one request. With our previous profile page example, a client would need to issue one request to get a user’s information, one request to get that user’s posts, and then another request for each post to get a few comments. With GraphQL, that client could get all of the above data with one request:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/4e2dc8fcdedc7db5fb0219b2f73ea80f?postId=40a2761e6336" data-media-id="4e2dc8fcdedc7db5fb0219b2f73ea80f" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F36873%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Boom! 💥 There are other benefits to this aside from the fact that we went from 22 HTTP requests to one. For instance, your User may have other information attached to it. Maybe you expose the timestamp of when a user signed up. Maybe another client doesn’t care about a post’s categories. If a client doesn’t need to query for a piece of data, _neither does your server_. So when a client saves, you can save too by simplifying your own database queries.

#### Versioning? Just deprecate!

As with (most) REST APIs, you can add fields to GraphQL types without fear. To remove functionality, GraphQL includes deprecation as a feature. Instead of fully removing a field and breaking clients, you can declare a field as deprecated and hide it from tools as it ages.

#### Documentation: you’ll barely need to worry about it

Let me be real for a second here: I can count the number of times I’ve used a well-documented API on one hand. Many times, APIs remain undocumented or poorly documented. With GraphQL, your schema is practically self-documenting. All you have to do is give your types and fields descriptions when necessary, and this happens in the code itself. Clients can issue special GraphQL queries to introspect on your application’s schema and know, in one query, all of the data they can request, what it’s called, and what it describes. Developers can also use tools that are built on this introspection like [GraphiQL](https://github.com/graphql/graphiql), which allows clients to test their queries with live syntax highlighting and error detection.

### Get started with GraphQL

Are you sold enough to try out GraphQL? There are plenty of resources to help you get started on your journey:

*   Check out GraphQL’s [official website](http://graphql.org) for documentation and examples
*   Play around with an example, the [Star Wars GraphQL API](http://graphql-swapi.parseapp.com/?query=%7B%0A%20%20film%28id%3A%20%22ZmlsbXM6MQ%3D%3D%22%29%20%7B%0A%20%20%20%20title%0A%20%20%20%20releaseDate%0A%20%20%7D%0A%7D)
*   The working [GraphQL Specification](http://facebook.github.io/graphql/) if you’re into the nitty gritty

I’ll also be following this post up with one more, in which we’ll create a little GraphQL API together, so stay tuned! I’ve had the immense pleasure of working with GraphQL at GitHub and my experience leads me to believe wholeheartedly that it’s the API tool of the future.








