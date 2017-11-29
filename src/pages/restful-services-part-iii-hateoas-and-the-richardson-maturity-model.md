---
author: Sanchit Gera
authorTwitter: none
authorFacebook: none
title: "RESTful Services Part III : HATEOAS and The Richardson Maturity Model"
subTitle: "In Part I of this series, you learned the very basics of HTTP. We went over common HTTP constructs such as headers, URLs and the differen..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*aIZeZdKxowEWVX-rNXsmGQ.jpeg
url: https://medium.freecodecamp.org/restful-services-part-iii-hateoas-and-the-richardson-maturity-model-48d4e4c79b8d
id: restful-services-part-iii-hateoas-and-the-richardson-maturity-model-48d4e4c79b8d
date: 2016-10-27T06:58:55.228Z
tags: [
  "Web Development",
  "Tech",
  "Startup",
  "Programming",
  "Technology"
]
---
# RESTful Services Part III : HATEOAS and The Richardson Maturity Model







![](https://cdn-images-1.medium.com/max/2000/1*aIZeZdKxowEWVX-rNXsmGQ.jpeg)







In [Part I](https://medium.freecodecamp.com/restful-services-part-i-http-in-a-nutshell-aab3bfedd131#.kd3ovzqtg) of this series, you learned the very basics of HTTP. We went over common HTTP constructs such as headers, URLs and the different status codes available. We also looked at how each of these constructs could be useful when building resource-oriented web services.

In [Part II](https://medium.freecodecamp.com/restful-services-part-ii-constraints-and-goals-530b8f6298b9#.5g54mnfzl), you learned about the different constraints you need to comply with in order to build scalable, high-performance RESTful systems.

This post will provide you with the third and final piece of the puzzle. As noted before, REST is not a standard, but rather an abstract concept. This makes it hard to quantify exactly how “RESTful” a service is or isn’t.

While the constraints discussed in the previous part are helpful when creating a service, they aren’t as good at solving this problem. What if you chose to follow exactly one of those constraints? Two? Three? At what point does your service stop being _partially_ RESTful and cross over into the magical land of _complete_ RESTful-ness?

This is exactly the problem that the Richardson Maturity Model (RMM) helps you solve. But before we dive further into the nitty gritty of RMM, there’s one final topic that will prove to be useful in your understanding of REST.

### The Principle of HATEOAS

**H**ypermedia **A**s **T**he **E**ngine **O**f **A**pplication **S**tate, shortened to HATEOAS, builds on one of the constraints of REST (the _Uniform Interface_). I am still trying to determine how to pronounce it. I usually alternate between Hate-ee-ose and Hate-ose. Feel free to choose either, or come up with your own. But anyway, I digress.

The overarching goal behind HATEOAS is to provide a consistent way for machines to understand APIs and navigate them without having any information about them beforehand, identical to a user visiting a website for the first time.

Assume you were visiting Medium for the first time to write a post. What steps would you take? In all likelihood, you would visit Medium’s homepage, head over to the _Stories_ section, and begin writing your masterpiece. You aren’t really concerned with the URL that _Stories_ section lives on. You don’t have it memorized, but you know that you will be able to get there when you need to.

Or imagine you were ordering something on Amazon. You go in, search for different items, add them to the cart, and checkout. The location of each of these components within the system is inconsequential to you as a user. If the URL required to get to the cart, there is a strong chance you wouldn’t even find out. And yet, your experience remains unhampered.

In both cases, you only need a single piece of information, that is the entry point to the website. Everything else from that point on is completely discoverable and usable by navigating relevant links (aka _hypermedia)._ This is how the web is designed to work and indeed how most users experience it today.

HATEOAS extends this idea of discoverability to APIs and web services as well. What if, given a single point of access to the service, I could make use of everything that it has to offer? Luckily, this can be achieved by exploiting the resource oriented nature of our data that we have been working so hard on!

We know that since everything being returned by our service is essentially a resource, there are only a handful of things that our service consumer can do _with_ that resource. Further, each action corresponds to a well defined RESTful route within our system (think GET, POST, PUT etc.). This means that we could easily embed all potential interactions with a given resource in the form of actionable URLs within the response. Let’s see an example!

Let’s return to our previous example of writing a story on Medium. Imagine if instead of a user-facing website, it was instead purely a web service. Under the HATEOAS model, the only piece of information to navigate the service I need would be the hostname: **medium.com**

I begin my interaction by making a GET request to the host. Medium promptly responds with a list of all the resources it has to offer, along with where I can find them.

<pre name="5e82" id="5e82" class="graf graf--pre graf-after--p">GET medium.com</pre>

<pre name="ebd6" id="ebd6" class="graf graf--pre graf-after--pre">links : [  
  {  
    rel : "bookmarks",  
    href : "/bookmarks"  
  },   
  {  
    rel : "stories",   
    href: "/stories"  
  }  
]</pre>

In this simplified version of Medium, I’m told that there are two resources being offered: _stories_ and _bookmarks._ I’m also told where each of those resources lives on the system.

Next, I need to figure out how to create a new story. From our previous discussions, I already know that this is going to be a POST request, but as a client I still don’t know what kind of data the service is expecting for this request. This is exactly where an OPTIONS request comes in handy. So lets do just that!

<pre name="67c6" id="67c6" class="graf graf--pre graf-after--p">OPTIONS medium.com/stories</pre>

<pre name="a756" id="a756" class="graf graf--pre graf-after--pre">Allow GET, POST  
{  
  name : "Stories",  
  description: "Ideas and opinions from around the world",   
  actions: [  
    {  
      POST: {  
        title: "string",  
        body: "string"  
      }  
    }  
  ]  
}</pre>

Aha! Looks like we need parameters named _title_ and _body_ corresponding to our new post. This gives us all the information that we need. We can now go ahead and start POSTing to the service and creating new articles on the service.

Now let’s say that following this approach, I land on an existing story. What would an individual story look like?

<pre name="6b90" id="6b90" class="graf graf--pre graf-after--p">GET medium.com/stories/3</pre>

<pre name="2c9c" id="2c9c" class="graf graf--pre graf-after--pre">{  
  "id": 3,  
  "title": "An Introduction to Microservices",  
  "body": "...",  
  "created_at": "2016-10-25T20:52:12.804Z",  
  "links": [  
  {  
    "rel": "self",  
    "href": "/stories/1"  
  },   
  {  
    "rel": "author",  
    "href": "/authors/3"  
  },   
  {  
    "rel": "comments",  
    "href": "/stories/3/comments"  
  }],  
}</pre>

Now I not only have information about the story, but I also have a means of getting information about the author and the comments.

Of course, this is overly simplistic. There are tons of other things going on such as authentication and authorization that need to be taken care of. And a lot of work needs to be done to design systems that are decomposable into resources this easily. But it serves well to understand the idea behind HATEOAS.

This eliminates the need for you as a developer to maintain documentation for your service. Everything a client could possibly need to know about using your service is already in there.

Similarly, as a client, I do not need to keep track of the URLs associated with each of these resources. I look for the object corresponding to the resource, and navigate to it. If it changes, I don’t care.

With this in mind, let’s now shift our focus to the Richardson Maturity Model (RMM).

### The Richardson Maturity Model

As mentioned previously, RMM is a tool to help you evaluate how RESTful a service is. This system of classification — first described by Leonard Richardson — provides a neat way to think about your web services from the perspective of an end user, then make judgments accordingly.

Richardson describes four distinct levels in the spectrum of RESTful-ness.

#### Level 0

This is rock bottom when it comes to a service being RESTful. Services in this category follow the “one URL, one method” principle. That means, the service only exposes a single URL to the outside world and accepts only one type of request (usually POST) at that location.

This is typical for SOAP services for example. A typical request to a SOAP service looks something like this:

<pre name="4921" id="4921" class="graf graf--pre graf-after--p">POST /Quotation HTTP/1.0  
Host: www.xyz.org  
Content-Type: text/xml; charset=utf-8  
Content-Length: nnn  

<?xml version="1.0"?>  
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://www.w3.org/2001/12/soap-envelope" SOAP-ENV:encodingStyle="http://www.w3.org/2001/12/soap-encoding" >  

   <SOAP-ENV:Body xmlns:m="http://www.xyz.org/quotations" >  

      <m:GetQuotation>  
         <m:QuotationsName>MiscroSoft</m:QuotationsName>  
      </m:GetQuotation>  

   </SOAP-ENV:Body>  

</SOAP-ENV:Envelope></pre>

Everything is described in the body of the request, including the action (getQuotation) and the parameters for that request (Microsoft). Clearly, the service does not make use of any of the REST principles we have discussed thus far, not to mention the cost of having a whole other additional data format on top of HTTP.

#### Level 1: Resources

The next step on our path to complete RESTful-ness is introducing resources based abstractions. This is the equivalent of breaking up the application into distinct resource specific URLs. It’s characterized by Richardson as the “Multiple URLs, One Method” implementation.

Here, there are several different URLs in the system working together to provide the desired functionality. But each accepts only one type of requests (again, usually POST).

So for example, continuing our previous example, we can proceed to first retrieve a list of all companies from our application:

<pre name="ebc2" id="ebc2" class="graf graf--pre graf-after--p">POST /companies  
[  
  {  
    "name" : "Microsoft",  
    "id" : 3  
  },   
  {  
    "name" : "Apple",  
    "id" : 4  
  }  
]</pre>

…and then get a quotation for a single company:

<pre name="95ae" id="95ae" class="graf graf--pre graf-after--p">POST /quotations/3</pre>

<pre name="a93c" id="a93c" class="graf graf--pre graf-after--pre">{  
  quotation: {}  
}</pre>

This is definitely a step up from before. In fact, this is how a lot of applications had been written until REST gained popularity. But again, we aren’t utilizing the strengths of HTTP. We can do better!

#### Level 2: Verbs

Now we throw the concept of action verbs into the mix. In addition to having well defined resources, the actions that can be performed on a resource must strictly follow HTTP conventions.

A GET MUST not modify the resource state, a POST MUST only be used for resource creation, and so on. It is characterized as, of course, the “Many URLs, Many Actions” system.

This brings us to the services most of us are familiar with and use on a day to day basis. These are also the kind of services that we usually consider RESTful. However, there is one more level that services must conform to in order to achieve the coveted status of complete RESTfulness.

#### Level 3: HATEOAS

This is where most services fall short. The vast majority of APIs and web services that you encounter as a developer, or likely ones that you will work on likely don’t follow the principle of HATEOAS.

Most service providers still prefer to document their services traditionally, by providing developers with a list of available endpoints along with some information on how to interact with that endpoint. Here’s the [Twitter REST API](https://dev.twitter.com/rest/public), for example. (Interestingly, the PayPal API [strongly pushes](https://developer.paypal.com/docs/integration/direct/paypal-rest-payment-hateoas-links/) for Hypermedia Controls.)

This isn’t necessarily bad. There are some good arguments to be made both in favor of and against utilizing HATEOAS. While on the one hand it makes APIs easy to discover and use, that usually comes at the cost of more development time and effort.

In fact, if all you need to do is make a single call to the API, introducing HATEOAS may actually make things _more_ difficult for you as a consumer.

### Conclusion

At the end of the day, these measures aren’t something you need to be swear by. REST, along with all it’s constraints, is merely a tool in your tool belt when building web services and applications. It’s entirely up to you to take from it what best fits your needs.

I hope you learned a lot of useful concepts from this series. If you’re looking to create a RESTful web service to supplement your next project, or looking to work with an existing one, you should now have a good understanding of some of the rationales behind them.

Here are the links to the previous parts, in case you missed them:

[RESTful Services Part I: HTTP in a Nutshell](https://medium.freecodecamp.com/restful-services-part-i-http-in-a-nutshell-aab3bfedd131#.kd3ovzqtg)

[RESTful Services Part II: Constraints and Goals](https://medium.freecodecamp.com/restful-services-part-ii-constraints-and-goals-530b8f6298b9#.5g54mnfzl)

Let me know what you thought of this post in the comments, or contact me via [LinkedIn](https://www.linkedin.com/in/sanchitgera).

**Don’t forget to hit the 💙 if you enjoyed this article.**

Cheers and happy learning!











* * *







**_More Resources_**

*   [Martin Fowler’s Blog](http://martinfowler.com/articles/richardsonMaturityModel.html)
*   [Leonard Richardson’s presentation](https://www.crummy.com/writing/speaking/2008-QCon/act3.html)
*   SOAP example borrowed from [TutorialsPoint](https://www.tutorialspoint.com/soap/soap_examples.htm)








