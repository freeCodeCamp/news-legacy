---
author: Guido Schmitz
authorTwitter: https://twitter.com/guidsen
authorFacebook: https://facebook.com/1289567887722714
title: "4 Reasons you should try out GraphQL today"
subTitle: "Even though I’ve been developing (RESTful) APIs for some years now, I’ve started to become a big fan of GraphQL...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*9Lp6ioBWW7wD2EZTZ7Mh9w.png
url: https://medium.freecodecamp.org/introduction-to-graphql-1d8011b80159
id: introduction-to-graphql-1d8011b80159
date: 2016-05-23T21:30:40.508Z
tags: [
  "API",
  "GraphQL",
  "Programming",
  "Database",
  "Data"
]
---
# 4 Reasons you should try out GraphQL today



![](https://cdn-images-1.medium.com/max/1600/1*9Lp6ioBWW7wD2EZTZ7Mh9w.png)

My version of the GraphQL logo that adds some love to it



Even though I’ve been developing (RESTful) APIs for some years now, I’ve started to become a big fan of GraphQL.

In this post I’ll introduce you to GraphQL and what kind of advantages you will have over REST. Let’s get started.

> GraphQL is a data query language and runtime designed and used at Facebook to request and deliver data to mobile and web apps since 2012.

#### **Why GraphQL?**

*   One endpoint to access your data
*   Retrieve only the data your client needs in a single request (flexibility)
*   No need to tailor endpoints for your views
*   No versioning

Imagine having a mobile application that has a news feed.

Often, your data will change over time, and you’ll need to introduce new versions of your API while maintaining older versions as well. This is necessary because other users still rely on older versions, where those new data changes have not yet been implemented.

One of the advantages of GraphQL is that it enables flexibility in your data model by using the [Type System](http://graphql.org/docs/typesystem/). The Type System is a description of which types of objects your server can return.

Let’s describe a Person type, using the JavaScript implementation of GraphQL:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/adc463a0e5992c0893b2ac84e1f6f318?postId=1d8011b80159" data-media-id="adc463a0e5992c0893b2ac84e1f6f318" allowfullscreen="" frameborder="0"></iframe>



The code that describes our Person type



#### **The Introspection system**

One of the other cool things about GraphQL is its [introspection system](http://graphql.org/docs/introspection/). This allows us to ask our server about which queries it supports. Compare this to built-in documentation. If you don’t know what types are available, you can easily ask GraphQL with this simple query:

<pre name="64b1" id="64b1" class="graf graf--pre graf-after--p">{  
  __schema {  
    types {  
      name  
    }  
  }  
}</pre>

So when a new iOS developer comes in that has to retrieve data from your API, you can easily refer to this as documentation. As your schema evolves, this will always be up to date because of the type system. Cool right?

> To make it even better, there is an in-browser IDE library available to explore your API called [**GraphiQL**](https://github.com/graphql/graphiql).

#### **Querying data from the GraphQL server**

After defining your data models using the type system, you can execute queries on your GraphQL server. Before you can execute queries on the server, you’ll have to define a root query type:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/aac59e8a852e1237c9f1d4b11f9dbbd1?postId=1d8011b80159" data-media-id="aac59e8a852e1237c9f1d4b11f9dbbd1" allowfullscreen="" frameborder="0"></iframe>



The code that defines our root query type



Now you can actually execute the query on our server:

<pre name="2999" id="2999" class="graf graf--pre graf-after--p">query PersonQuery {  
  person {  
    firstName  
    lastName  
    friends {  
      firstName  
    }  
  }  
}</pre>

So you ask the server for the Person type and his related friends. No endpoint that returns an array of resources containing all fields and some   
kind of **?include** query parameter. **_Just the data our client needs_**.

Let’s say you also have a News type. In GraphQL, you can retrieve multiple types at once. This means you can get different resources with only one single request:

<pre name="bb21" id="bb21" class="graf graf--pre graf-after--p">query HomepageQuery {  
  person {  
    firstName  
    lastName  
  }  
  news(limit: 10) {  
    title  
    excerpt  
    createdAt  
    person {  
      firstName  
      lastName  
    }  
  }  
}</pre>

If you want your server to support this query, you have to extend your root query type a bit (Note: If you’re using this code, don’t forget to define the news type 😉):





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c16b5a8b6e97ac917ceefe5aded98992?postId=1d8011b80159" data-media-id="c16b5a8b6e97ac917ceefe5aded98992" allowfullscreen="" frameborder="0"></iframe>



The code that describes our extended root query type



After we’ve created our root query type, we have to add it to our schema:

<pre name="e86d" id="e86d" class="graf graf--pre graf-after--p">new GraphQLSchema({ query: Query });</pre>

#### **Mutating data to the GraphQL server**

So with the **query** type, we can retrieve data from the server. We can also add, update or delete data with GraphQL. We can do this by executing a **mutation** on the server and let the server return the values of the mutation we executed. Take a look at this example:

<pre name="3067" id="3067" class="graf graf--pre graf-after--p">mutation addPerson {  
  createPerson(  
    firstName: 'John',  
    lastName: 'Doe'  
  ) {  
    firstName  
    lastName  
  }  
}</pre>

Defining a mutation is just like defining a root query type. The only thing we need to do is to add it to our schema. So, our updated schema looks like below:

<pre name="d91a" id="d91a" class="graf graf--pre graf-after--p">new GraphQLSchema({ query: Query, mutation: Mutation });</pre>

> More information on query formatting can be found at the official [documentation](http://graphql.org/docs/queries/).

I hope I gave you a basic understanding of GraphQL. If you have any questions, feel free to tweet me [**@guidsen**](https://twitter.com/guidsen).











* * *







I also send out weekly issues to my subscribers about JavaScript & ReactJS.  
[**Subscribe here to gain JavaScript knowledge**](https://www.getrevue.co/profile/guidsen)**.**

Oh, and click the 💚 below so other people will see this article here on Medium. Thanks for reading.



![](https://cdn-images-1.medium.com/max/1600/1*prif7-04oPf8Dqo1gvSDsQ.gif)










