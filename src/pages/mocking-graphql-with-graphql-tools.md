---
author: Jeff Lowery
authorTwitter: https://twitter.com/jmlowery
authorFacebook: https://facebook.com/10209080625586279
title: "Mocking GraphQL with graphql-tools+"
subTitle: "How to mock up your GraphQL API with realistic values"
coverSrc: https://cdn-images-1.medium.com/max/1600/1*azdwk8IHQOLOI3UR2_DLPQ.jpeg
url: https://medium.freecodecamp.org/mocking-graphql-with-graphql-tools-42c2dd9d0364
id: mocking-graphql-with-graphql-tools-42c2dd9d0364
date: 2017-09-03T23:15:48.591Z
tags: [
  "GraphQL",
  "Mocking",
  "Apollo",
  "JavaScript",
  "Testing"
]
---
# Mocking GraphQL with graphql-tools+

## How to mock up your GraphQL API with realistic values



![](https://cdn-images-1.medium.com/max/1600/1*azdwk8IHQOLOI3UR2_DLPQ.jpeg)



In [my last article,](https://medium.com/@jefflowery/declarative-graphql-with-graphql-tools-cd1645f94fc) I took the original Apollo LaunchPad [Posts and Authors API](https://launchpad.graphql.com/1jzxrj179) and broke it down into domains and components. I wanted to illustrate how one could organize a large GraphQL project using [graphql-tools](https://github.com/apollographql/graphql-tools).

Now I’d like the API to return mock data when I query it. How?

### The original source

In the original Apollo Launchpad example, we used static data structures and simple mapping resolvers to provide output for queries.

For instance, given this query:

<pre name="d0ec" id="d0ec" class="graf graf--pre graf-after--p"># Welcome to GraphiQL</pre>

<pre name="c640" id="c640" class="graf graf--pre graf-after--pre">query PostsForAuthor {  
  author(id: 1) {  
    firstName  
    posts {  
      title  
      votes  
    }  
  }  
}</pre>

The output would be:

<pre name="8f8e" id="8f8e" class="graf graf--pre graf-after--p">{  
  "data": {  
    "author": {  
      "firstName": "Tom",  
      "posts": [  
        {  
          "title": "Introduction to GraphQL",  
          "votes": 2  
        }  
      ]  
    }  
  }  
}</pre>

The resolvers object has functions that take care of mapping authors to posts and visa-versa. It’s not truly a mock, though.

The problem is that the more relationships and the more complex the entities become, the more code needs to go into the resolvers. Then more data needs to be provided.

When it comes to testing, tests are likely to sometimes reveal problems in the data or in the resolvers. You really want focus testing of the API itself.

### Using mocks

There are three Node.js modules that make mocking an API quick and easy. The first is part of the `graphql-tools`module. Using this module, a beginning step is to require or import the method `addMockFunctionsToSchema`from the module into the root `schema.js` file:

<pre name="93a8" id="93a8" class="graf graf--pre graf-after--p">import {  
    makeExecutableSchema,  
    **addMockFunctionsToSchema**  
} from 'graphql-tools';</pre>

Then, after creating an executable `schema` by calling `createExecutableSchema`,you add your mocks like so:

<pre name="c564" id="c564" class="graf graf--pre graf-after--p">    addMockFunctionsToSchema({  
        schema: executableSchema,  
    })</pre>

Here’s a full listing of the root `schema.j`s:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/bb26f06f97a4724e4ee2b4eef386c492?postId=42c2dd9d0364" data-media-id="bb26f06f97a4724e4ee2b4eef386c492" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F3497069%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





So what’s the output? Executing the same query as before yields:

<pre name="ff0e" id="ff0e" class="graf graf--pre graf-after--p">{  
  "data": {  
    "author": {  
      "firstName": "Hello World",  
      "posts": [  
        {  
          "title": "Hello World",  
          "votes": -70  
        },  
        {  
          "title": "Hello World",  
          "votes": -77  
        }  
      ]  
    }  
  }  
}</pre>

Well, that’s kind of dumb. Every string is “Hello World”, votes are negative, and there will always be exactly two posts per author. We’ll fix that, but first…

#### Why use mocks?

Mocks are often used in unit tests to separate the functionality being tested from the dependencies that those functions rely on. You want to test the function (the unit), not a whole complex of functions.

At this early stage of development, mocks serve another purpose: to test the tests. In a basic test, you want to ensure first that the test is calling the API correctly, and that the results returned have the expected structure, properties, and types. I think the cool kids call this “shape”.

This offers more limited testing than a queryable data structure, because reference semantics are not enforced. `id` is meaningless. Nonetheless, mocks offer something to structure your tests around

### Realistic mocking

There’s a module called [casual](https://github.com/boo1ean/casual) that I really like. It provides reasonable and variable values for a lot of common data types. If you are demonstrating your new API in front of jaded colleagues, it actually looks like you’ve done something special.

Here’s a wish list for mock values to display:

1.  Author’s first name should be **first-name-like**
2.  Post titles should be variable **lorem ipsum** text of limited length
3.  votes should be positive or zero
4.  the number of posts should vary between 1 and 7

First thing is to create a folder called `mocks`. Next, we’ll add an `index.js` file to that folder with the mock methods. Finally, the custom mocks will be added to the generated executable schema.

The **casual** library can generate values by data type (`String, ID, Int, …`) or by property name. Also, graphql-tools MockList object will be used to vary the number of items in a list — in this case `posts`. So let’s start.

`Import` both casual and MockList into `/mocks/index.js`:

<pre name="8610" id="8610" class="graf graf--pre graf-after--p">import casual from 'casual';  
import {  
    MockList  
} from 'graphql-tools';</pre>

Now let create a default export with the following properties:

<pre name="56ed" id="56ed" class="graf graf--pre graf-after--p">export default {  
    Int: () => casual.integer(0),</pre>

<pre name="fd86" id="fd86" class="graf graf--pre graf-after--pre">    Author: () => ({  
        firstName: casual.first_name,  
        posts: () => new MockList([1, 7])  
    }),</pre>

<pre name="226f" id="226f" class="graf graf--pre graf-after--pre">    Post: () => ({  
        title: casual.title  
    })  
}</pre>

The `Int` declaration takes care of all integer types appearing in our schema and it will ensure that `Post.votes` will be positive or zero.

Next, `Author.firstName` will be a reasonable first name. MockList is used to ensure the number of posts associated with each Author will be between 1 and 7\. Finally, casual will generate a **lorem ipsum** `title` for each `Post`.

Now the generated output varies each time the query is executed. And it looks credible:

<pre name="e208" id="e208" class="graf graf--pre graf-after--p">{  
  "data": {  
    "author": {  
      "firstName": "Eldon",  
      "posts": [  
        {  
          "title": "Voluptatum quae laudantium",  
          "votes": 581  
        },  
        {  
          "title": "Vero quos",  
          "votes": 85  
        },  
        {  
          "title": "Doloribus labore corrupti",  
          "votes": 771  
        },  
        {  
          "title": "Qui nulla qui",  
          "votes": 285  
        }  
      ]  
    }  
  }  
}</pre>

### Generating custom values

I just scratched the surface of what casual can do, but it is well-documented and there’s nothing much to add.

Sometimes, though, there are values that have to conform to a standard format. I would like to introduce one more module: [randexp](https://www.npmjs.com/package/randexp).

randexp allows you to generate values conforming to the regexp expression you provide it. For instance, ISBN numbers have the format:

**/ISBN-\d-\d{3}-\d{5}-\d/**

Now I can add Books to the schema, add books to Author, and generate ISBN and title for each `Book`:

<pre name="14bf" id="14bf" class="graf graf--pre graf-after--p">// book.js  
export default `  
  type Book {  
    ISBN: String  
    title: String  
}</pre>

mocks.js:

<pre name="1d99" id="1d99" class="graf graf--pre graf-after--p">import casual from 'casual';  
**import RandExp from 'randexp';**  
import {  
    MockList  
} from 'graphql-tools';  
**import {  
    startCase  
} from 'lodash';**</pre>

<pre name="3277" id="3277" class="graf graf--pre graf-after--pre">export default {  
    Int: () => casual.integer(0),</pre>

<pre name="a5d5" id="a5d5" class="graf graf--pre graf-after--pre">Author: () => ({  
        firstName: casual.first_name,  
        posts: () => new MockList([1, 7]),  
 **books: () => new MockList([0, 5])**  
    }),</pre>

<pre name="dabb" id="dabb" class="graf graf--pre graf-after--pre">Post: () => ({  
        title: casual.title  
    }),</pre>

<pre name="5f79" id="5f79" class="graf graf--pre graf-after--pre">**Book: () => ({  
        ISBN: new RandExp(/ISBN-\d-\d{3}-\d{5}-\d/)  
            .gen(),  
        title: startCase(casual.title)  
    })**  
}</pre>

And here’s a new query:

<pre name="16ee" id="16ee" class="graf graf--pre graf-after--p">query PostsForAuthor {  
  author(id: 1) {  
    firstName  
    posts {  
      title  
      votes  
    }  
    books {  
      title  
      ISBN  
    }  
  }  
}</pre>

Sample response:

<pre name="8886" id="8886" class="graf graf--pre graf-after--p">{  
  "data": {  
    "author": {  
      "firstName": "Rosemarie",  
      "posts": [  
        {  
          "title": "Et ipsum quo",  
          "votes": 248  
        },  
        {  
          "title": "Deleniti nihil",  
          "votes": 789  
        },  
        {  
          "title": "Aut aut reprehenderit",  
          "votes": 220  
        },  
        {  
          "title": "Nesciunt debitis mollitia",  
          "votes": 181  
        }  
      ],  
      "books": [  
        {  
          "title": "Consequatur Veniam Voluptas",  
          "ISBN": "ISBN-0-843-74186-9"  
        },  
        {  
          "title": "Totam Et Iusto",  
          "ISBN": "ISBN-6-532-70557-3"  
        },  
        {  
          "title": "Voluptatem Est Sunt",  
          "ISBN": "ISBN-2-323-13918-2"  
        }  
      ]  
    }  
  }  
}</pre>

So that’s the basics of mocking using graphql-tools plus a couple of other useful modules .

**Note**: I use snippets throughout this post. If you want to follow along in a broader context, sample code is [here](https://github.com/JeffML/graphql_authors_mock).

The [Full source](https://github.com/JeffML/graphql_authors_mock) is on GitHub for your perusal.

Give me a hand if you found this article informative.








