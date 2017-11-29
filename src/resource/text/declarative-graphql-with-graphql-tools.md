---
author: Jeff Lowery
authorTwitter: https://twitter.com/jmlowery
authorFacebook: https://facebook.com/10209080625586279
title: "Declarative GraphQL: write less code and get more done with graphql-tools"
subTitle: "I’ve been working with GraphQL for a few months now, but only recently began using Apollo’s graphql-tools library. After learning a few i..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*-AdNar_hX9-ougYftbv3qg.jpeg
url: https://medium.freecodecamp.org/declarative-graphql-with-graphql-tools-cd1645f94fc
id: declarative-graphql-with-graphql-tools-cd1645f94fc
date: 2017-08-21T05:50:31.631Z
tags: [
  "GraphQL",
  "JavaScript",
  "Web Development",
  "Programming",
  "Software Development"
]
---
# Declarative GraphQL: write less code and get more done with graphql-tools







![](https://cdn-images-1.medium.com/max/2000/1*-AdNar_hX9-ougYftbv3qg.jpeg)







I’ve been working with GraphQL for a few months now, but only recently began using Apollo’s graphql-tools library. After learning a few idioms, I am able to mock up a functional API quickly. This is largely due to its low-code, declarative approach to type definitions.

### Starting with their example

Apollo has an interactive [LaunchPad](https://launchpad.graphql.com/) web site, like the ones covered in my [Swagger series](https://medium.com/@jefflowery/staggered-by-swagger-82acf85f3c3b). There are several example schemas you can use, and for this article I will use their [Post and Authors schema](https://launchpad.graphql.com/1jzxrj179). You can download or fork the code.

I will be rearranging the project folders. For this post I’ll download and store it in Github, so I can branch and modify the code through each step. Along the way, I’ll link the branches to this post.

#### The basics

*   **declaring schema types**

In the Launchpad, you’ll see a `typeDefs` template literal:

<pre name="8a64" id="8a64" class="graf graf--pre graf-after--p">const typeDefs = `  
  type Author {  
    id: Int!  
    firstName: String  
    lastName: String  
    posts: [Post] # the list of Posts by this author  
  }</pre>

<pre name="559d" id="559d" class="graf graf--pre graf-after--pre">type Post {  
    id: Int!  
    title: String  
    author: Author  
    votes: Int  
  }</pre>

<pre name="59c4" id="59c4" class="graf graf--pre graf-after--pre"># the schema allows the following query:  
  type Query {  
    posts: [Post]  
    author(id: Int!): Author  
  }</pre>

<pre name="68b5" id="68b5" class="graf graf--pre graf-after--pre"># this schema allows the following mutation:  
  type Mutation {  
    upvotePost (  
      postId: Int!  
    ): Post  
  }  
`;</pre>

There are two **entities** defined, `Author` and `Post`. In addition, there are two “magic” **types**: `Query` and `Mutation`. The Query type defines the root `accessors`. In this case, there’s an accessor to fetch all `Posts`, and another to fetch a single `Author` by `ID`.

Note there is no way to directly query for a list of authors or for a single post. It is possible to add such queries later.

*   **declaring resolvers**

Resolvers provide the necessary logic to support the schema. They are written as a JavaScript object with keys that match the types defined in the schema. The `resolver` shown below operates against static data, which I’ll cover in a moment.

<pre name="29ed" id="29ed" class="graf graf--pre graf-after--p">const resolvers = {  
  Query: {  
    posts: () => posts,  
    author: (_, { id }) => find(authors, { id: id }),  
  },  
  Mutation: {  
    upvotePost: (_, { postId }) => {  
      const post = find(posts, { id: postId });  
      if (!post) {  
        throw new Error(`Couldn't find post with id ${postId}`);  
      }  
      post.votes += 1;  
      return post;  
    },  
  },  
  Author: {  
    posts: (author) => filter(posts, { authorId: author.id }),  
  },  
  Post: {  
    author: (post) => find(authors, { id: post.authorId }),  
  },  
};</pre>

To link `schema` and `resolver` together, we’ll create an executable schema instance:

<pre name="1376" id="1376" class="graf graf--pre graf-after--p">export const schema = makeExecutableSchema({  
  typeDefs,  
  resolvers,  
});</pre>

*   **the data source**

For this simple example, the data comes from two arrays of objects defined as constants: `**authors**`and `**posts**`:

<pre name="cdce" id="cdce" class="graf graf--pre graf-after--p">const authors = [  
  { id: 1, firstName: 'Tom', lastName: 'Coleman' },  
  { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },  
  { id: 3, firstName: 'Mikhail', lastName: 'Novikov' },  
];</pre>

<pre name="8421" id="8421" class="graf graf--pre graf-after--pre">const posts = [  
  { id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },  
  { id: 2, authorId: 2, title: 'Welcome to Meteor', votes: 3 },  
  { id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },  
  { id: 4, authorId: 3, title: 'Launchpad is Cool', votes: 7 },  
];</pre>

*   **the server**

You can serve up the executable schema through **graphql_express**, **apollo_graphql_express**, or **graphql-server-express.** We see that in this example.

The important bits are:

<pre name="1bf1" id="1bf1" class="graf graf--pre graf-after--p">**import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';**  
import { schema, rootValue, context } from './schema';</pre>

<pre name="3cf2" id="3cf2" class="graf graf--pre graf-after--pre">const PORT = 3000;  
const server = express();</pre>

<pre name="10fd" id="10fd" class="graf graf--pre graf-after--pre">server.use('/graphql', bodyParser.json(), **graphqlExpress**(request => ({  
  schema,  
  rootValue,  
  context: context(request.headers, process.env),  
})));</pre>

<pre name="705f" id="705f" class="graf graf--pre graf-after--pre">server.use('/graphiql', **graphiqlExpress**({  
  endpointURL: '/graphql',  
}));</pre>

<pre name="9201" id="9201" class="graf graf--pre graf-after--pre">server.listen(PORT, () => {  
  console.log(`GraphQL Server is now running on [http://localhost:${PORT}/graphql`](http://localhost:$%7BPORT%7D/graphql`));  
  console.log(`View GraphiQL at [http://localhost:${PORT}/graphiql`](http://localhost:$%7BPORT%7D/graphiql`));  
});</pre>

Note that there are two pieces of GraphQL middleware in use:

*   **graphqlExpress** the GraphQL server that handles queries and responses
*   **graphiqlExpress** the interactive GraphQL web service that allows interactive queries through an HTML UI

### Reorganizing

> For large apps, we suggest splitting your GraphQL server code into 4 components: Schema, Resolvers, Models, and Connectors, which each handle a specific part of the work. ([http://dev.apollodata.com/tools/graphql-tools/](http://dev.apollodata.com/tools/graphql-tools/))

Putting each type of component in its own file makes sense. I’ll go one better and put each set of components in a its own “domain” folder.

#### Why domains?

Domains are a convenient way to split up a large system into areas of operation. Within each domain there may be subdomains. In general, subdomains have a bounded context. Within a bounded context the entity names, properties, and processes have precise meaning.

I find bounded contexts to be helpful during analysis, especially when talking to domain experts.

The fly in the ointment is that GraphQL types occupy a single namespace, so naming conflicts can exist. More on that later.



![](https://cdn-images-1.medium.com/max/1200/1*1nxilNJ_g7fiIOf2T_o_9w.png)



I’ll call this domain **authorposts**, and put the related components in the `authorpostsfolder`. Within that, I’ll create a file each for `datasource`, `resolvers`, and schema. Let’s also toss in an `index.js` file to simplify importing. The original schema and server files will remain in the root folder, but the `schema.js` code will be skeletal. The `**find**`and `**filter**` methods imported from **lodash** will be removed in favor of synonymous native ES6 methods. The resulting source is [here](https://github.com/JeffML/graphql_authors/tree/reorg).

The main schema file has become simpler. It provides skeletal structure for further extension by schemas in our domains.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/557ff856bda659de749d3b04061dfd84?postId=cd1645f94fc" data-media-id="557ff856bda659de749d3b04061dfd84" allowfullscreen="" frameborder="0"></iframe>





A `domain` schema is imported on lines 7–8, and the `base` schema on lines 11–23\. You’ll note there is a **domain** property. This is arbitrary but GraphQL, or graphql-tools, insists that one property be defined.

The complete schema is constructed on line 26, and an `executableSchema` instance is created given the `schema` and `resolvers` defined so far on lines 28–33\. This is what is imported by the **server.js** code, which is largely unchanged from the original.

There is a trick to splitting up a schema this way. Let’s take a look:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2d1912e6a7544358ac56356697a5f21a?postId=cd1645f94fc" data-media-id="2d1912e6a7544358ac56356697a5f21a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F3497069%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





The first listing, `authorpostResolvers.js`, is pretty much a cut’n’paste job from the original `schema.js` source from Apollo’s example. Yet in the `authorpostSchema.js` code, we **extend** the `Query` and `Mutator` definitions that are declared in the the base schema. If you don’t use the **extend** keyword, the executable schema builder will complain about two **Query** definitions.

#### Continuing…

This is a good start for organizing several schemas, one for each domain of interest (so long as you're mindful of the global namespace for types), but a complete schema, even for a single domain, can get huge. Fortunately, you can break down each schema even further, right down to the [entity level](https://github.com/JeffML/graphql_authors/tree/reorg2), if necessary.

Here’s a modified directory structure, and listings of the new contents:



![](https://cdn-images-1.medium.com/max/1600/1*b4rGOYcGju6U50IzxDUf9g.png)







<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b991c91399557374c859891d22fd9821?postId=cd1645f94fc" data-media-id="b991c91399557374c859891d22fd9821" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F3497069%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





We can achieve granularity by defining two component files, then importing them into a domain schema.

You don’t have to do one component per file. But you do want to be sure that the schema exports those components along with the schema itself as shown on line 20 of **schema.js**. Otherwise you’ll likely wind up missing a dependency further down the inclusion chain.

#### Multiple schemas and resolvers

Adding a new schema for a new domain is simple. Create a new domain folder and add dataSource, resolvers, schema, and index.js files. You can also add an optional component folder with component type definitions.



![](https://cdn-images-1.medium.com/max/1600/1*57--cwAN6mBbUxUFfXkSpA.png)







<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/95ef14b0554146b96ce4cbd63bc05b11?postId=cd1645f94fc" data-media-id="95ef14b0554146b96ce4cbd63bc05b11" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F3497069%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Finally, the root schema.js file must combine the schemas and resolvers from both domains:

<pre name="0501" id="0501" class="graf graf--pre graf-after--p">//...  
import {  
    schema as myLittleTypoSchema,  
    resolvers as myLittleTypeResolvers  
} from './myLittleDomain';</pre>

<pre name="fbfd" id="fbfd" class="graf graf--pre graf-after--pre">import {  
    merge  
} from 'lodash';  
//...  
const schema = [...baseSchema, ...authorpostsSchema, ...myLittleTypoSchema]</pre>

<pre name="f94f" id="f94f" class="graf graf--pre graf-after--pre">const options = {  
    typeDefs: schema,  
    resolvers: merge(authorpostsResolvers, myLittleTypeResolvers)  
}</pre>

Note that I had to include `**lodash**` **merge** here because of the need for a deep merge of the two **resolvers**imports.

### Dealing with Namespace Collisions

If you are on a large project, you will encounter type name collisions. You might think that Account in one domain would mean the same as Account in another. Yet even if they do mean more or less similar things, chances are the properties and relationships will be different. So technically they are not the same type.

At the time of this writing, GraphQL uses a single namespace for types.

How to work around this? Facebook apparently uses a [naming convention](https://github.com/facebook/graphql/issues/163#issuecomment-241607229) for their 10,000 types. As awkward as that seems, it works for them.

The Apollo graphql-tools stack appears to catch type name duplications. So you should be good there.

There is an ongoing discussion on [whether](https://github.com/facebook/graphql/issues/163#issuecomment-230163416) to include namespaces in GraphQL. It isn’t a simple decision . I remember the complexities caused by the introduction of [XML Namespaces](https://www.w3.org/TR/REC-xml-names/) 10 years ago.

### Where to go from here?

This post only scratches the surface of how one might organize a large set of GraphQL schemas. The next post will be about mocking GraphQL resolvers, and how it’s possible to mix both real and mocked values in query responses.








