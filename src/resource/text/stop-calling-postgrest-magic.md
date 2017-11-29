---
author: Ruslan Talpă
authorTwitter: none
authorFacebook: none
title: "Stop calling PostgREST “MAGIC”!"
subTitle: "While it’s flattering for developers to have “magic” associated with their work, it might be damaging to the adoption of PostgREST. Magic..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*yj04j1w-TajB2vgwbWBHnQ.png
url: https://medium.freecodecamp.org/stop-calling-postgrest-magic-8f3e1d5e5dd1
id: stop-calling-postgrest-magic-8f3e1d5e5dd1
date: 2017-08-18T20:01:07.096Z
tags: [
  "Programming",
  "Open Source",
  "Database",
  "Technology",
  "Web Development"
]
---
# Stop calling PostgREST “MAGIC”!



![](https://cdn-images-1.medium.com/max/1600/1*yj04j1w-TajB2vgwbWBHnQ.png)

Doug Henning



While it’s flattering for developers to have “magic” associated with their work, it might be damaging to the adoption of [PostgREST](https://github.com/begriffs/postgrest). Magic means unknown and people fear the unknown. Let’s take 10 minutes to understand how it works internally.

I [started contributing](https://github.com/begriffs/postgrest/graphs/contributors?from=2015-08-22&to=2017-06-27&type=a) to the PostgREST core 2 years ago. Since then, I’ve been checking into what people are saying about it . There are two camps. The die hard fans who call it “magic” and are ready to gang up on the non-believers. And then you have the skeptics.

This narrative addresses the skeptics camp. It stems from the fact that people don’t understand how PostgREST works!

It’s all simple, and beautiful.

### What’s in a (REST) URL 🌹

Let’s take this example

<pre name="5bed" id="5bed" class="graf graf--pre graf-after--p">GET /items/1</pre>

If you strip everything away, like authentication and authorization, the essence that remains is this

<pre name="4d49" id="4d49" class="graf graf--pre graf-after--p">SELECT * FROM items WHERE id=1</pre>

PostgREST takes a HTTP request, looks at it, translates it to SQL and executes it. That’s almost all there is to it. It’s one big pure function. I hope I don’t get crucified by Haskell people for abusing the notation and ignoring there’s actually IO going on.

<pre name="ddad" id="ddad" class="graf graf--pre graf-after--p">postgrest :: Schema -> HTTP -> SQL</pre>

Here’s a slightly more complicated example:

<pre name="4056" id="4056" class="graf graf--pre graf-after--p">GET /items?select=id,name&id=gt.10&order=name</pre>

gets translated to

<pre name="9196" id="9196" class="graf graf--pre graf-after--p">SELECT id, name FROM items WHERE id > 10 ORDER BY name</pre>

### The three magic ingredients ✨

There are thee core concepts on which PostgREST is built, everything around them is just bells and whistles. If you understand them, you understand PostgREST.

#### JSON encoding

The first brilliant idea that [Joe Nelson](https://github.com/begriffs) had was to recognize that PostgreSQL can JSON encode the response. Now you might be thinking “Why would one want to do that, put more load on the component that is the hardest to scale?”

Well, here are the reasons.

PostgreSQL JSON encoder is fast, it’s C fast. The bigger your response is, the bigger the gain. It can be 2x/10x faster than [ActiveRecord](https://dockyard.com/blog/2014/05/27/avoid-rails-when-generating-json-responses-with-postgresql) or even 160x for large responses.

Let’s think for a minute. What are the implications of having the database return the final response, aside from making it do more work?

Whatever is sitting in front of the database no longer has to deserialize the response coming from the database, and turn that into internal representation of the language for that data. Then, after the data is in the memory, it does not need to serialize back to JSON. This means on the way out, your code does not need to do anything, just pass along whatever it gets from the database.

We shifted some of the load to the database from the application code. This is nothing for the mighty PostgreSQL, it’s not where the heavy lifting happpens. If we look at the entire system, we’ve reduced the total amount of work that needs to be done by removing one serialize/deserialize step. This is one of the secrets of why PostgREST is so fast. It lets the big guy do it’s thing.

Let’s look at what that actually looks like in SQL. This query is like the ones PostgREST generates.

<pre name="5750" id="5750" class="graf graf--pre graf-after--p">WITH essence AS (  
  SELECT id, name FROM items WHERE id > 10 ORDER BY name  
)  
SELECT   
  coalesce(  
    array_to_json(array_agg(row_to_json(response))),  
    '[]'  
  )::character varying AS BODY  
FROM (SELECT * FROM essence) response</pre>

We’ve wrapped the `essence` query. On the other end, we get our result as a single row with one column called `BODY` which contains the JSON response. Easy!

#### Authentication / Authorization

This is the part that most newcomers have troubles with when first encountering PostgREST. They have the (perfectly natural) question: “How does PostgREST implement authentication/authorization?”.

The short answer is, **it doesn’t**.

Again, one of Joe’s brilliant ideas, and I’d even say it’s more fundamental then the JSON encoding.

PostgreSQL has a rich [role system](https://www.postgresql.org/docs/current/static/user-manag.html). In conjunction with such features as views and [Row Level Security](https://www.postgresql.org/docs/9.6/static/ddl-rowsecurity.html) (RLS), you can have fine grained control over access to your data down to an individual cell. Yet, People treat their databases as “dumb data stores”. And what’s even worse, they connect to them using roles with admin privileges.

What would be the point of a SQL injection attack if the role with which the application is connecting to the database has privileges only to specific tables and rows? At worst, the attacker would be deleting his own data. But i am digressing …

When first PostgREST connects to the database, it connects to it using a role that we usually call `authenticator`. That role has no privileges attached to it aside from the ability to login.

Whenever an authenticated request comes in, and there is an`Authorization` header that contains a JWT token, PostgREST will decode the token, verify that it’s valid using the secret key, and look at it’s payload for a particular field called `role.` Let’s say that `role` has the value of `alice`.

This means that this request needs to be executed with the privileges of `alice`. To do this we use one PostgreSQL neat little trick. You can **switch** the current user, sort of like doing `sudo alice.` And even nicer, you can do that in the context of a transaction so there is no chance of one request interfering with another. We are not creating a new database connection, this happens in the same connection. And although `alice`is a database role, it does not have login privileges.

Here is the order of how things happen:

<pre name="389d" id="389d" class="graf graf--pre graf-after--p">BEGIN;  
SET LOCAL role TO 'alice';  
-- the main query goes here  
COMMIT;</pre>

This does not mean that PostgREST switches to whatever it likes. For this to work, you have to explicitly say that the `authenticator` role has the right to assume the `alice` role by:

<pre name="bd3f" id="bd3f" class="graf graf--pre graf-after--p">GRANT alice TO authenticator;</pre>

So just like that, PostgREST gained the ability to do authorization by leveraging the underlying database role system. The implications and advantages of this approach are huge.

The PostgREST codebase remains small and simple. You get to declare the privileges for each user using SQL with no ugly imperative code all over the place. And, no matter what future code accesses the database, the rules are consistently applied.

There is also one other big advantage that is not immediately obvious.

In the traditional way of building APIs, when a request comes in you start checking if the current user has the right to access that information. That means extra queries. Those types of queries have a big part to play in the request overall latency, and the load on the database. This gives the impression that the databases are slow and don’t scale very well.

By giving PostgreSQL the full picture of who is issuing the query (role), what are his privileges (grants) and his restrictions (RLS), the query planner can do a much better job, utilize all the indexes and even get faster over time.

The first objection raised is that one would need to have a database role for each application user and that is not a very good design. They would be right, but that is not what PostgREST is asking you to do. You can use database roles to set user groups (admin, employee, customer) and then use RLS to specify [user rules](https://blog.2ndquadrant.com/application-users-vs-row-level-security/) based on their username, id or email.

#### Resource Embedding

You might have the impression that although PostgREST has a nice solution for authentication and exposing REST endpoints, it’s just your basic CRUD capabilities. And that is not enough for a modern API. After all, that’s why we have things like GraphQL.

You are right, if all it did was basic CRUD then it would be a nice tool for prototyping or simple projects. But PostgREST has one last trick up it’s sleeve, and I’m proud to call this my biggest [contribution](https://github.com/begriffs/postgrest/issues/218). The trick is the`&select=` parameter. It not only allows you to specify what columns you want returned from your table, but you can also ask for related resources:

<pre name="ca36" id="ca36" class="graf graf--pre graf-after--p">GET /items?select=id,name,subitems(id,name)</pre>

If you replace `()` with `{}` and squint your eyes a bit, you can almost see GraphQL. PostgREST interface is comparable in expressive powers to GraphQL when it comes to fetching data from your database.

It took us a complete core [rewrite](https://github.com/begriffs/postgrest/pull/295) and then a year of making the interface uniform for all paths. But we finally got there.

So how does this work?

At first boot time, PostgREST runs a bunch of [queries](https://github.com/begriffs/postgrest/blob/master/src/PostgREST/DbStructure.hs) on your database. This is to understand what entities live there and the relations between them, based on the foreign keys you have defined. After this, whenever you say`subitems(...)` it knows the table `items` is related to table `subitems` through a foreign key called `item_id`. Based on that information it knows how to generate the correct join query. This works similarly for parent relations and many-to-many.

A simplified (essence) query of that looks like this

<pre name="01c1" id="01c1" class="graf graf--pre graf-after--p">SELECT  
    items.id, items.name,  
    COALESCE(  
         (  
            SELECT array_to_json(array_agg(row_to_json(subitems)))  
            FROM (  
                SELECT subitems.id, subitems.name  
                FROM subitems  
                WHERE subitems.item_id = items.id   
            ) subitems  
         ),   
        '[]'  
    ) AS subitems  
FROM items</pre>

On first look one might think this is very inefficient since it seems to do a sub-select for every item row but we are using PostgreSQL and it’s awesome query planner, it knows what you are actually asking for and it’s got your back. Don’t be afraid of joins and sub-select.

Once, after showing this query and explaining the query planner knows how to correctly handle it, I’ve received a response like

_“Ha-ha, yeah, you are relying on a query optimizer’s mercy.”_

I’ll take that any day, thank you very much!

I’ll rely on a software developed over a [20 years](https://en.wikipedia.org/wiki/PostgreSQL#History) span by people with [PHD’s](https://www.postgresql.org/community/contributors/). I don’t have the arrogance to think that somehow my `for` loop is superior technology to the PostgreSQL query [optimizer](https://momjian.us/main/writings/pgsql/optimizer.pdf).

### But why (do we need PostgREST)? 😕

Now if you followed along and understand how things come together, you might be thinking:

> _“All PostgREST does is generate one SQL query, wrap it in a transaction with some context and execute it. Why don’t I just skip the middle man, write a script that takes raw SQL as input and does the same thing?”_

You could do that. Indeed no one would be able to access the data they are not supposed to and things will be fine for a while. And then, one night you’ll wake up to an alert that your database is down. After some investigation, you’ll find as a culprit, this query:

<pre name="b2ef" id="b2ef" class="graf graf--pre graf-after--p">SELECT   
  crypt(  
    encode(digest(gen_random_bytes(1024), 'sha512'), 'base64'),     
    gen_salt('bf', 20)  
  )  
FROM   generate_series(1, 1000000)</pre>

WT#!

What’s worse, I don’t need any privileges to any tables to run this query!

For all it’s might, PostgreSQL was not built to deflect denial-of-service (DoS) attacks. This is where PostgREST saves you. It strikes a balance between exposing a lot of SQL flexibility to the clients to be useful, but limits that power to prevent malicious queries. It will not allow **at will** joins, only the ones defined by foreign keys which should have the proper indexes on them.

### Do one thing well 🏆

So you are sold! You’ve downloaded the binary, pointed it to your database and BAM! You have a REST API! Things are moving along great. Most of your API needs are covered. Then you get to a few last bits to implement and suddenly you stop!

“How do I actually send an email with this thing? How do I make a call to this 3rd party API when a user logs in? How do I write my tests?

Damn it, I knew this was a bad idea! Hey PostgREST devs, can you help me out and implement this functionality?”

And the answer you’ll most likely get is “You Aren’t Gonna Need It” (YAGNI). That’s not because we are d#$%#. It’s because PostgREST is a component of your stack, it’s not “the stack”. It has one single job and it tries to do it well. On it’s own, it will not completely replace your favorite backend MVC framework. But with some help from friends like PostgreSQL, OpenResty, RabbitMQ, it will do that for you and with great results. Take a look at the [Starter Kit](https://github.com/subzerocloud/postgrest-starter-kit) to see how it fits into the stack.

You’ll no longer write APIs, you’ll be defining and configuring them.

### Beyond REST 🚀

Lately the front-end community has been taken over by the React & GraphQL craze, and for a good reason. It might seems like REST will soon be left behind, taking PostgREST along with it. Yet the ideas here transcend REST, it’s the protocol you use to talk to PostgREST.

You might’ve heard of [PostGraphQL](https://github.com/postgraphql/postgraphql). It’s based on the same ideas with a completely different implementation. The [author](https://github.com/calebmer) is also one of the top PostgREST contributors. Inspired by PostgREST and discussions about GraphQL within PostgREST community, he decided to put his own spin on it.

I decided to take a different route. I used PostgREST and built GraphQL on top of it, instead of re-implementing the same logic in another language. After all, this was my goal from the very [beginning](https://github.com/begriffs/postgrest/issues/218). Build up PostgREST capabilities to a point where it can support GraphQL.

It’s been a long journey developing my original idea for [subZero](https://subzero.cloud/), a GraphQL & REST API for your database. But I learned a lot along the way.

Take subZero for a spin. I hope the additional [software](https://github.com/subzerocloud) we developed along the way is useful to you.

Enjoy!

If you have any PostgREST or subZero questions, you can always reach me using [email](https://github.com/ruslantalpa) or [slack](https://slack.subzero.cloud/).








