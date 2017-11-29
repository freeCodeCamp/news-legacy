---
author: Howon Song
authorTwitter: none
authorFacebook: https://facebook.com/10206356106044766
title: "How to use GraphQL in your Redux app"
subTitle: "Fetching and managing data in Redux requires too much work. As Sashko Stubailo points out:..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*ItpcYJftmpYtiCk1GxO8bQ.png
url: https://medium.freecodecamp.org/tutorial-how-to-use-graphql-in-your-redux-app-9bf8ebbeb362
id: tutorial-how-to-use-graphql-in-your-redux-app-9bf8ebbeb362
date: 2016-07-22T06:17:24.782Z
tags: [
  "React",
  "GraphQL",
  "Nodejs",
  "Redux",
  "Web Development"
]
---
# How to use GraphQL in your Redux app



![](https://cdn-images-1.medium.com/max/1600/1*ItpcYJftmpYtiCk1GxO8bQ.png)

([image credit](https://marufsarker.github.io/))



Fetching and managing data in Redux requires too much work. As [Sashko Stubailo](https://medium.com/@stubailo) [points out](https://medium.com/apollo-stack/apollo-client-graphql-with-react-and-redux-49b35d0f2641#.mf2w6kh2j):

> Unfortunately the patterns for asynchronously loading server data in a Redux app aren’t as well established, and often involve using external helper libraries, like [redux-saga](https://github.com/yelouafi/redux-saga). You need to write custom code to call your server endpoints, interpret the data, normalize it, and insert it into the store — all while keeping track of various error and loading states.

By the end of this tutorial, you will have learned how to solve this problem by letting the Apollo Client fetch and manage data for you. You will no longer have to write multiple action dispatchers, reducers, and normalizers to fetch and sync data between your front end and your back end.

But before starting the tutorial, make sure that:

*   You know the basics of GraphQL queries — if you’re entirely new to GraphQL, you should come back after doing this [tutorial](https://learngraphql.com/).
*   You have some experience working with React/Redux — if not, you should come back after doing [react tutorial](https://facebook.github.io/react/docs/getting-started.html) and [redux tutorial](http://redux.js.org/docs/introduction/Motivation.html).











* * *







In this tutorial, we will go through 6 sections together.

1.  Setting up server environment (quick)
2.  Setting up redux boilerplate app
3.  Adding GraphQL client (Apollo Client)
4.  Fetching data with GraphQL query
5.  Fetching even more data
6.  Next steps

#### 1\. Setting up server environment

First, we need a GraphQL server. The easiest way to have a running server is completing this awesome [tutorial](https://medium.com/apollo-stack/tutorial-building-a-graphql-server-cddaa023c035#.9f3v0r5ix).

If you are feeling lazy, you can just clone my [repo](https://github.com/woniesong92/apollo-starter-kit.git), which is almost the same server you’d get if you did the tutorial yourself. The server supports GraphQL queries to fetch data from a SQLite DB.

Let’s run it and see if it’s working correctly:

<pre name="15b4" id="15b4" class="graf graf--pre graf-after--p">$ git clone [https://github.com/woniesong92/apollo-starter-kit](https://github.com/woniesong92/apollo-starter-kit)  
$ cd apollo-starter-kit  
$ npm install  
$ npm start</pre>

The server should be running at [http://localhost:8080/graphql](http://localhost:8080/graphql). Navigate to that page and see if you get a working GraphiQL interface with results like this:



![](https://cdn-images-1.medium.com/max/1600/1*yz_rORus415DumBYE0Axtg.png)



GraphiQL lets you test different queries and immediately see what response you get from the server. If we don’t want an author’s last name and a fortune cookie message in a response, we can update the query like below:



![](https://cdn-images-1.medium.com/max/1600/1*i23cvtmU-mtAQLDdccSo0A.png)



And that’s exactly how we like it. We confirmed that our server is running fine and returning good responses, so let’s start building the client.

#### 2\. Setting up redux boilerplate app

For simplicity, we will use a [redux boilerplate](https://github.com/davezuko/react-redux-starter-kit) so we can get all the setup (e.g. Babel, webpack, CSS, etc.) for free. I like this boilerplate because its setup is easy to follow and is client-side only — which makes it perfect for this tutorial.

<pre name="3f4c" id="3f4c" class="graf graf--pre graf-after--p">$ git clone [https://github.com/woniesong92/react-redux-starter-kit.git](https://github.com/woniesong92/react-redux-starter-kit.git)  
$ cd react-redux-starter-kit  
$ npm install  
$ npm start</pre>

Let’s navigate to [http://localhost:3000/](http://localhost:3000/) to see if the client server is running.



![](https://cdn-images-1.medium.com/max/1600/1*_aHEECd1gdmOxHEUh0Kozw.png)



Yay! The client is running. It’s time for us to start adding a GraphQL client. Again, our goal is to easily fetch data from the server and render it in the landing page (HomeView) without much effort by using GraphQL queries.

#### 3\. Adding GraphQL client (Apollo Client)

Install the packages apollo-client, react-apollo, and graphql-tag.

<pre name="4d69" id="4d69" class="graf graf--pre graf-after--p">$ npm install apollo-client react-apollo graphql-tag --save</pre>

Then, open the file src/containers/AppContainer.js, the root of our Redux app. This is where we pass down the redux store to child components, using the Provider from react-redux.

<pre name="8fe7" id="8fe7" class="graf graf--pre graf-after--p">import React, { PropTypes } from 'react'  
import { Router } from 'react-router'  
import { Provider } from 'react-redux'</pre>

<pre name="d1ef" id="d1ef" class="graf graf--pre graf-after--pre">class AppContainer extends React.Component {  
  static propTypes = {  
    history: PropTypes.object.isRequired,  
    routes: PropTypes.object.isRequired,  
    routerKey: PropTypes.number,  
    store: PropTypes.object.isRequired  
  }</pre>

<pre name="49b1" id="49b1" class="graf graf--pre graf-after--pre">render () {  
    const { history, routes, routerKey, store } = this.props</pre>

<pre name="c56b" id="c56b" class="graf graf--pre graf-after--pre">return (  
      <Provider store={store}>  
          
          
      </Provider>  
    )  
  }  
}</pre>

<pre name="bd25" id="bd25" class="graf graf--pre graf-after--pre">export default AppContainer</pre>

We have to initialize an ApolloClient and replace the Provider from react-redux with ApolloProvider from react-apollo.

<pre name="4d05" id="4d05" class="graf graf--pre graf-after--p">import React, { Component, PropTypes } from 'react'  
import { Router } from 'react-router'  
import ApolloClient, { createNetworkInterface, addTypename } from 'apollo-client'  
import { ApolloProvider } from 'react-apollo'</pre>

<pre name="ffa8" id="ffa8" class="graf graf--pre graf-after--pre">const client = new ApolloClient({  
  networkInterface: createNetworkInterface('[http://localhost:8080/graphql'](http://localhost:8080/graphql%27)),  
  queryTransformer: addTypename,  
})</pre>

<pre name="b69a" id="b69a" class="graf graf--pre graf-after--pre">class AppContainer extends Component {  
  static propTypes = {  
    history: PropTypes.object.isRequired,  
    routes: PropTypes.object.isRequired,  
    store: PropTypes.object.isRequired  
  }</pre>

<pre name="2dd0" id="2dd0" class="graf graf--pre graf-after--pre">render () {  
    const { history, routes } = this.props</pre>

<pre name="20d0" id="20d0" class="graf graf--pre graf-after--pre">return (  
      <ApolloProvider client={client}>  
          
          
      </ApolloProvider>  
    )  
  }  
}</pre>

<pre name="e2db" id="e2db" class="graf graf--pre graf-after--pre">export default AppContainer</pre>

That’s it! We just added a GraphQL client to a plain Redux app that easily.

Let’s go ahead and try our first GraphQL query.

#### 4\. Fetching data with GraphQL queries

Open src/views/HomeView.js

<pre name="6776" id="6776" class="graf graf--pre graf-after--p">import React from 'react'  
import { connect } from 'react-redux'  
import { bindActionCreators } from 'redux'</pre>

<pre name="775b" id="775b" class="graf graf--pre graf-after--pre">export class HomeView extends React.Component {  
  constructor(props) {  
    super(props)  
  }</pre>

<pre name="68e0" id="68e0" class="graf graf--pre graf-after--pre">render () {  
    return (  
        
        <h1>Hello World</h1>  
        
    )  
  }  
}</pre>

<pre name="d684" id="d684" class="graf graf--pre graf-after--pre">// This is where you usually retrieve the data stored in the redux store (e.g posts: state.posts.data)  
const mapStateToProps = (state, { params }) => ({</pre>

<pre name="90b5" id="90b5" class="graf graf--pre graf-after--pre">})</pre>

<pre name="eed8" id="eed8" class="graf graf--pre graf-after--pre">// This is where you usually bind dispatch to actions that are used to request data from the backend. You will call the dispatcher in componentDidMount.  
const mapDispatchToProps = (dispatch) => {  
  const actions = {}</pre>

<pre name="5b5a" id="5b5a" class="graf graf--pre graf-after--pre">  return {  
    actions: bindActionCreators(actions, dispatch)  
  }  
}</pre>

<pre name="2436" id="2436" class="graf graf--pre graf-after--pre">export default connect(  
  mapStateToProps,  
  mapDispatchToProps  
)(HomeView)</pre>

HomeView is a conventional Redux container (smart component). To use GraphQL queries instead of action dispatchers to fetch data, we will make some changes together.

1.  Remove mapDispatchToProps() and mapStateToProps() completely.

<pre name="1988" id="1988" class="graf graf--pre graf-after--li">import React from 'react'  
import { connect } from 'react-redux'  
import { bindActionCreators } from 'redux'</pre>

<pre name="3c70" id="3c70" class="graf graf--pre graf-after--pre">export class HomeView extends React.Component {  
  constructor(props) {  
    super(props)  
  }</pre>

<pre name="85c3" id="85c3" class="graf graf--pre graf-after--pre">  render () {  
    return (  
        
        <h1>Hello World</h1>  
        
    )  
  }  
}</pre>

<pre name="626d" id="626d" class="graf graf--pre graf-after--pre">export default connect({</pre>

<pre name="d3d7" id="d3d7" class="graf graf--pre graf-after--pre">})(HomeView)</pre>

2\. Add mapQueriesToProps() and define a GraphQL query that will fetch the author information. Notice how this is the exactly the same query that we tested in the beginning using the GraphIQL interface on the server.

<pre name="e6eb" id="e6eb" class="graf graf--pre graf-after--p">import React from 'react'  
import { connect } from 'react-redux'  
import { bindActionCreators } from 'redux'</pre>

<pre name="ff2d" id="ff2d" class="graf graf--pre graf-after--pre">export class HomeView extends React.Component {  
  constructor(props) {  
    super(props)  
  }</pre>

<pre name="bc00" id="bc00" class="graf graf--pre graf-after--pre">  render () {  
    return (  
        
        <h1>Hello World</h1>  
        
    )  
  }  
}</pre>

<pre name="0546" id="0546" class="graf graf--pre graf-after--pre">// NOTE: This will be automatically fired when the component is rendered, sending this exact GraphQL query to the backend.  
const mapQueriesToProps = ({ ownProps, state }) => {  
  return {  
    data: {  
      query: gql`  
        query {  
          author(firstName:"Edmond", lastName: "Jones"){  
            firstName  
            posts {  
              title  
            }  
          }  
        }  
      `  
    }  
  }  
}</pre>

<pre name="51bc" id="51bc" class="graf graf--pre graf-after--pre">export default connect({</pre>

<pre name="1485" id="1485" class="graf graf--pre graf-after--pre">})(HomeView)</pre>

3\. Replace connect from react-redux with connect from react-apollo and pass mapQueriesToProps as argument. Once mapQueriesToProps is connected to ApolloClient, the query will automatically fetch the data from the backend when HomeView is rendered, and pass the data down through props.

<pre name="9bcd" id="9bcd" class="graf graf--pre graf-after--p">import React from 'react'  
import { connect } from 'react-apollo' // NOTE: different connect!  
import gql from 'graphql-tag' // NOTE: lets us define GraphQL queries in a template language</pre>

<pre name="b9e0" id="b9e0" class="graf graf--pre graf-after--pre">export class HomeView extends React.Component {  
  constructor(props) {  
    super(props)  
  }</pre>

<pre name="59b0" id="59b0" class="graf graf--pre graf-after--pre">render () {  
    return (  
        
        <h1>Hello World</h1>  
        
    )  
  }  
}</pre>

<pre name="0cc0" id="0cc0" class="graf graf--pre graf-after--pre">const mapQueriesToProps = ({ ownProps, state }) => {  
  return {  
    data: {  
      query: gql`  
        query {  
          author(firstName:"Edmond", lastName: "Jones"){  
            firstName  
            posts {  
              title  
            }  
          }  
        }  
      `  
    }  
  }  
}</pre>

<pre name="d4f3" id="d4f3" class="graf graf--pre graf-after--pre">export default connect({  
  mapQueriesToProps  
})(HomeView)</pre>

4\. Render the data that’s passed down from the props:

<pre name="696f" id="696f" class="graf graf--pre graf-after--p">import React from 'react'  
import { connect } from 'react-apollo' // NOTE: different connect!  
import gql from 'graphql-tag' // NOTE: lets us define GraphQL queries in a template language</pre>

<pre name="2611" id="2611" class="graf graf--pre graf-after--pre">export class HomeView extends React.Component {  
  constructor(props) {  
    super(props)  
  }</pre>

<pre name="4d87" id="4d87" class="graf graf--pre graf-after--pre">  render () {  
    const author = this.props.data.author  
    if (!author) {  
      return <h1>Loading</h1>  
    }</pre>

<pre name="152c" id="152c" class="graf graf--pre graf-after--pre">    return (  
      {author.firstName}'s posts</h1>  
        {author.posts && author.posts.map((post, idx) => (  
          <li key={idx}>{post.title}</li>  
        ))}  
        
    )  
  }  
}</pre>

<pre name="174e" id="174e" class="graf graf--pre graf-after--pre">const mapQueriesToProps = ({ ownProps, state }) => {  
  return {  
    data: {  
      query: gql`  
        query {  
          author(firstName:"Edmond", lastName: "Jones"){  
            firstName  
            posts {  
              title  
            }  
          }  
        }  
      `  
    }  
  }  
}</pre>

<pre name="cf21" id="cf21" class="graf graf--pre graf-after--pre">export default connect({  
  mapQueriesToProps  
})(HomeView)</pre>

If all went well, your rendered HomeView should look like below:



![](https://cdn-images-1.medium.com/max/1600/1*Fz_dy4MaDrID_O-3i6VDzQ.png)



To fetch and render the data we wanted, we didn’t have to write any action dispatcher, reducer, or normalizer. All we had to do on the client was to write a single GraphQL query!

We successfully achieved our initial goal. But that query was quite simple. What if we wanted to display all authors instead of just one author?

#### 5\. Fetching even more data

In order to fetch and display all authors, we have to update our GraphQL query and render method:

<pre name="9f91" id="9f91" class="graf graf--pre graf-after--p">import React from 'react'  
import { connect } from 'react-apollo' // NOTE: different connect!  
import gql from 'graphql-tag' // NOTE: lets us define GraphQL queries in a template language</pre>

<pre name="a7f7" id="a7f7" class="graf graf--pre graf-after--pre">export class HomeView extends React.Component {  
  constructor(props) {  
    super(props)  
  }</pre>

<pre name="7cb4" id="7cb4" class="graf graf--pre graf-after--pre">render () {  
    const authors = this.props.data.authors  
    if (!authors) {  
      return <h1>Loading</h1>  
    }</pre>

<pre name="0150" id="0150" class="graf graf--pre graf-after--pre">    return (  
       (  
            
            <h1>{author.firstName}'s posts</h1>  
            {author.posts && author.posts.map((post, idx) => (  
              <li key={idx}>{post.title}</li>  
            ))}  
            
        ))}  
        
    )  
  }  
}</pre>

<pre name="e887" id="e887" class="graf graf--pre graf-after--pre">const mapQueriesToProps = ({ ownProps, state }) => {  
  return {  
    data: {  
      query: gql`  
        query {  
          authors {  
            firstName  
            posts {  
              title  
            }  
          }  
        }  
      `  
    }  
  }  
}</pre>

<pre name="12f0" id="12f0" class="graf graf--pre graf-after--pre">export default connect({  
  mapQueriesToProps  
})(HomeView)</pre>

However, once you refresh your browser HomeView page, you will notice that you have an error in your console:

_ApolloError {graphQLErrors: Array[1], networkError: undefined, message: “GraphQL error: Cannot query field “authors” on type “Query”. Did you mean “author”?”}_

Ah, right! In our GraphQL server, we didn’t really define how to fetch _authors_.

Let’s go back to our server and see what we have. Open the file apollo-starter-kit/data/resolvers.js

<pre name="417f" id="417f" class="graf graf--pre graf-after--p">import { Author, FortuneCookie } from './connectors';</pre>

<pre name="ac49" id="ac49" class="graf graf--pre graf-after--pre">const resolvers = {  
  Query: {  
    author(_, args) {  
      return Author.find({ where: args });  
    },  
    getFortuneCookie() {  
      return FortuneCookie.getOne()  
    }  
  },  
  Author: {  
    posts(author) {  
      return author.getPosts();  
    },  
  },  
  Post: {  
    author(post) {  
      return post.getAuthor();  
    },  
  },  
};</pre>

<pre name="339c" id="339c" class="graf graf--pre graf-after--pre">export default resolvers;</pre>

Looking at Query resolver, we notice that our GraphQL server only understands _author_ and _getFortuneCookie_ queries now. We should teach it how to “resolve” the query _authors._

<pre name="5c88" id="5c88" class="graf graf--pre graf-after--p">import { Author, FortuneCookie } from './connectors';</pre>

<pre name="67ed" id="67ed" class="graf graf--pre graf-after--pre">const resolvers = {  
  Query: {  
    author(_, args) {  
      return Author.find({ where: args });  
    },  
    getFortuneCookie() {  
      return FortuneCookie.getOne()  
    },  
    authors() { // the query "authors" means returning all authors!  
      return Author.findAll({})  
    }  
  },  
  ...  
};</pre>

<pre name="14e5" id="14e5" class="graf graf--pre graf-after--pre">export default resolvers;</pre>

We are not done yet. Open the file apollo-starter-kit/data/schema.js

<pre name="cfc6" id="cfc6" class="graf graf--pre graf-after--p">const typeDefinitions = `  
...</pre>

<pre name="4f77" id="4f77" class="graf graf--pre graf-after--pre">type Query {  
  author(firstName: String, lastName: String): Author  
  getFortuneCookie: String  
}  
schema {  
  query: Query  
}  
`;</pre>

<pre name="ba89" id="ba89" class="graf graf--pre graf-after--pre">export default [typeDefinitions];</pre>

This Schema makes it clear what kind of queries the server should expect. It doesn’t expect _authors_ query yet so let’s update it.

<pre name="d37c" id="d37c" class="graf graf--pre graf-after--p">const typeDefinitions = `  
...</pre>

<pre name="34fe" id="34fe" class="graf graf--pre graf-after--pre">type Query {  
  author(firstName: String, lastName: String): Author  
  getFortuneCookie: String,  
  authors: [Author] // 'authors' query should return an array of   
                    // Author  
}  
schema {  
  query: Query  
}  
`;</pre>

<pre name="b551" id="b551" class="graf graf--pre graf-after--pre">export default [typeDefinitions];</pre>

Now that our GraphQL server knows what the “authors” query means, let’s go back to our client. We already updated our query so we don’t have to touch anything.

<pre name="61a9" id="61a9" class="graf graf--pre graf-after--p">export class HomeView extends React.Component {</pre>

<pre name="ac8f" id="ac8f" class="graf graf--pre graf-after--pre">...</pre>

<pre name="24c0" id="24c0" class="graf graf--pre graf-after--pre">const mapQueriesToProps = ({ ownProps, state }) => {  
  return {  
    data: {  
      query: gql`  
        query {  
          authors {  
            firstName  
            posts {  
              title  
            }  
          }  
        }  
      `  
    }  
  }  
}</pre>

<pre name="48f0" id="48f0" class="graf graf--pre graf-after--pre">export default connect({  
  mapQueriesToProps  
})(HomeView)</pre>

With this query we expect to get all authors with their first names and posts. Go ahead and refresh the browser to see if we are getting the right data.



![](https://cdn-images-1.medium.com/max/1600/1*IoxvyvcwxhMjbZ6_JzTCHA.png)



If everything went well, your HomeView page will look like above.

#### 6\. Next steps

This tutorial only explores a small part of GraphQL and leaves out a lot of concepts such as updating data on the server or using a different backend server (e.g. Rails).

While I work to introduce these in subsequent tutorials, you can read Sashko’s [post](https://medium.com/apollo-stack/apollo-client-graphql-with-react-and-redux-49b35d0f2641#.iqsgdstls) or the [Apollo Client Doc](http://docs.apollostack.com/apollo-client/) to better understand what’s going on under the hood (for example, what happened when we replaced Provider with ApolloProvider?).

Digging into the source code of [GitHunt](https://github.com/apollostack/GitHunt), a full-stack Apollo Client and Server example app, also seems a great way to learn.

If you have feedback, please leave it in the comment. I will try my best to be helpful :)








