---
author: Nader Dabit
authorTwitter: https://twitter.com/dabit3
authorFacebook: none
title: "Beginner’s Guide to React Router"
subTitle: "Or what I wish I knew when starting with React Router...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*GH8GqFmDl0rTKfxn5xeZuQ.jpeg
url: https://medium.freecodecamp.org/beginner-s-guide-to-react-router-53094349669
id: beginner-s-guide-to-react-router-53094349669
date: 2016-04-05T19:20:35.309Z
tags: [
  "React",
  "JavaScript",
  "Web Development",
  "Programming",
  "Software Development"
]
---
# Beginner’s Guide to React Router

Or what I wish I knew when starting with React Router.

> Click [here](https://github.com/dabit3/beginners-guide-to-react-router) to go to the Github repo

> This tutorial uses React Router version 2.0.1 and Babel version 6.7.4

React Router is the standard routing library for React. From the docs:

> “React Router keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in. Make the URL your first thought, not an after-thought.”

### Step 1\. Getting Started

To get started you can either [clone the starter repo](https://github.com/dabit3/beginners-guide-to-react-router) and jump to step two, or follow along the next steps and set up your project manually.

#### **Manual Setup**

First, let’s get our environment set up with React, Babel, and webpack. First create a folder and cd into it. Then run npm init -y:

<pre name="a623" id="a623" class="graf graf--pre graf-after--p">npm init -y</pre>

*   -y just answers yes to all of the questions

Next, install react, react-router, and react-dom and save them as dependencies:

<pre name="b04e" id="b04e" class="graf graf--pre graf-after--p">npm i react react-dom react-router@2.0.1 --save</pre>

Next, install our dev dependencies. These will be webpack, webpack-dev-server, babel-core, babel-loader, babel-preset-es2015, and babel-preset-react

<pre name="a169" id="a169" class="graf graf--pre graf-after--p">npm i webpack webpack-dev-server babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev</pre>

Now, let’s create the configuration files for webpack and babel:

<pre name="a6f5" id="a6f5" class="graf graf--pre graf-after--p">touch .babelrc webpack.config.js</pre>

Next, let’s create a folder for our code. We’ll call this folder app:

<pre name="1b38" id="1b38" class="graf graf--pre graf-after--p">mkdir app</pre>

In the app directory create three files: index.html app.js main.js

<pre name="74c8" id="74c8" class="graf graf--pre graf-after--p">cd app  
touch index.html app.js main.js</pre>

Our file structure should now look like this:



![](https://cdn-images-1.medium.com/max/1600/1*GH8GqFmDl0rTKfxn5xeZuQ.jpeg)



Now, open the .babelrc file and add the presets for react and ES2015:

<pre name="9ed3" id="9ed3" class="graf graf--pre graf-after--p">{  
 "presets": [  
  "es2015",  
  "react"  
 ]  
}</pre>

In webpack.config.js, add the following configuration to get us started:

<pre name="eaee" id="eaee" class="graf graf--pre graf-after--p">module.exports = {  
  entry: './app/main.js',  
  output: {  
    path: './app',  
    filename: 'bundle.js'  
  },  
  devServer: {  
    inline: true,  
    contentBase: './app',  
    port: 8100  
  },  
  module: {  
    loaders: [  
      {  
        test: /\.js$/,  
        exclude: /node_modules/,  
        loader: 'babel'  
      }  
    ]  
  }  
}</pre>

> If you would like to learn more about webpack and babel, [check out my tutorial on beginning webpack.](https://medium.com/@dabit3/beginner-s-guide-to-webpack-b1f1a3638460#.5tirb1odd)

Now that webpack and babel are set up. Let’s create a shortcut for webpack-dev-server. Open package.json and insert the following script in the “scripts” key:

<pre name="ed80" id="ed80" class="graf graf--pre graf-after--p">"scripts": {  
  "start": "webpack-dev-server"  
}</pre>

Now, we can just run npm start to start our project.

Let’s now set up our HTML and React. Open index.html and create a base html page. Then, add a div with the id of root, and a script tag referencing bundle.js:

<pre name="19e6" id="19e6" class="graf graf--pre graf-after--p"><!DOCTYPE html>  
  <html lang="en">  
  <head>  
    <meta charset="UTF-8">  
    <title>React Router</title>  
  </head>  
  <body>  
      
    <script src="./bundle.js"></script>  
  </body>  
</html></pre>

Now, let’s go into our main.js and set up an entry point for our app. Type this into your main.js file:

<pre name="f700" id="f700" class="graf graf--pre graf-after--p">import React from 'react'  
import ReactDOM from 'react-dom'  
import App from './app'  
ReactDOM.render(<App />, document.getElementById('root'))</pre>

Now, let’s go into app.js and create our app component. Open app.js and type the following:

<pre name="d370" id="d370" class="graf graf--pre graf-after--p">import React, { Component } from 'react'  
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'</pre>

<pre name="d19d" id="d19d" class="graf graf--pre graf-after--pre">const App = () => <h1>Hello World!</h1></pre>

<pre name="a990" id="a990" class="graf graf--pre graf-after--pre">export default App  

</pre>

We are not using Component or any of the Router / react-router components yet, but we are bringing them in so we can get started in step two.

Now, if you run the project and navigate to [http://localhost:8100/](http://localhost:8100/) you should get ‘Hello World!!!!!!’ on your screen:

<pre name="1a5e" id="1a5e" class="graf graf--pre graf-after--p">npm start</pre>



![](https://cdn-images-1.medium.com/max/1600/1*A_5Rlof4WbwLCDjwRRND5g.jpeg)

Hello World



### Step 2\. Basic Routing

Let’s set up a basic route. We will replace the App component with a React class, which will return a Router component. Router will wrap all of the routes we are going to define.

Each route will be identified in a <Route> component. The <Route> component will take two properties: path and component. When a path matches the path given to the <Route> component, it will return the component specified.

In app.js, refactor the App component to look like this:

<pre name="924e" id="924e" class="graf graf--pre graf-after--p">import React, { Component } from 'react'  
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'</pre>

<pre name="6e05" id="6e05" class="graf graf--pre graf-after--pre">class App extends Component {  
  render() {  
    return (  
      <Router history={hashHistory}>  
        <Route path='/' component={Home} />  
        <Route path='/address' component={Address} />  
      </Router>  
    )  
  }  
}</pre>

<pre name="528d" id="528d" class="graf graf--pre graf-after--pre">const Home = () => <h1>Hello from Home!</h1>  
const Address = () => <h1>We are located at 555 Jackson St.</h1></pre>

<pre name="9301" id="9301" class="graf graf--pre graf-after--pre">export default App</pre>

Now, if you navigate to [http://localhost:8100/](http://localhost:8100/) you should see our Home component, and if you navigate to [http://localhost:8100/#/address](http://localhost:8100/#/address) you should see our Address component.

You will notice that there are random strings after the hash in your address bar:

> When using hash history, you’ll see an extra item in your query string that looks something like _k=123abc. This is a key that history uses to look up persistent state data in window.sessionStorage between page loads. [Read more here.](https://github.com/mjackson/history/blob/master/docs/HashHistoryCaveats.md)

If you would like a cleaner address, or you are using this in production, you may want to look into browserHistory vs hashHistory. When using browserHistory you must have a server that will always return your server at any route, for example if using nodejs, a configuration like the following (from the docs) would work:

<pre name="ea34" id="ea34" class="graf graf--pre graf-after--p">const express = require('express')  
const path = require('path')  
const port = process.env.PORT || 8080  
const app = express()  

// serve static assets normally  
app.use(express.static(__dirname + '/public'))  

// handle every other route with index.html, which will contain  
// a script tag to your application's JavaScript file(s).  
app.get('*', function (request, response){  
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))  
})  

app.listen(port)  
console.log("server started on port " + port)</pre>

To learn more about browserHistory, check out [this link.](https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md#browserhistory)

For the rest of this tutorial, we will be using hashHistory.

### Step 3\. 404 route

Now, what happens if we hit a route that is not defined? Let’s set up a 404 route and component that will return if the route is not found:

<pre name="e9d3" id="e9d3" class="graf graf--pre graf-after--p">const NotFound = () => (  
  <h1>404.. This page is not found!</h1>)</pre>

Now, _below_ our ‘/address’ route, create the following route:

<pre name="0153" id="0153" class="graf graf--pre graf-after--p"><Route path='*' component={NotFound} /></pre>

Now, if we navigate to some route that has not been defined ([http://localhost:8100/#/asdfasdf](http://localhost:8100/#/asdfasdf)) , we should see our 404 route.

### Step 4\. IndexRoute and Links

Now, let’s add navigation to get us between pages.

To do this, we will be using the <Link> component. <Link> is similar to using an html anchor tag.

From the docs:

> The primary way to allow users to navigate around your application. <Link> will render a fully accessible anchor tag with the proper href.

To do this, let’s first create a Nav component. Our Nav component will contain <Link> components, and will look like this:

<pre name="4d0f" id="4d0f" class="graf graf--pre graf-after--p">const Nav = () => (  
  Home</Link>   
    <Link to='/address'>Address</Link>  
    
)</pre>

_Now we need a way to make our Nav component persistent across all pages._ To do this, we will wrap our child routes in a main <Route> component. We will also need to update our Home component, and create a new component called Container:

Container:

<pre name="2a26" id="2a26" class="graf graf--pre graf-after--p">const Container = (props) =>   
  {props.children}  
</pre>

`{props.children}` will allow any routes wrapped within this route to be rendered in this component.

Now, let’s rewrite our App component to look like this. We are wrapping our HomePage, Address and NotFound routes inside the new Container route. We are also setting HomePage to be our IndexRoute. That means that when we hit [http://localhost:8100](http://localhost:8100/#/), our Home component will render, as it is specified as the index:

<pre name="6dce" id="6dce" class="graf graf--pre graf-after--p">class App extends Component {  
  render () {  
    return (  
      <Router history={hashHistory}>  
        <Route path='/' component={Container}>  
          <IndexRoute component={Home} />  
          <Route path='/address' component={Address} />  
          <Route path='*' component={NotFound} />  
        </Route>  
      </Router>  
    )  
  }  
}</pre>

For reference, our full app.js code should look like [this](https://gist.github.com/dabit3/3d0d47c4a8bfccadfd5d15c58cfb1424).

Now, when we navigate to [http://localhost:8100](http://localhost:8100/), we should see our Home Component rendered, along with our Nav <Link> components!

### Step 5\. Multiple child / IndexRoutes

Now, let’s say we want to nest a twitter feed and an Instagram feed in our address component. Let’s create that functionality.

First, let’s rewrite our address route to take two new components: InstagramFeed and TwitterFeed:

<pre name="3f84" id="3f84" class="graf graf--pre graf-after--p">class App extends Component {  
  render () {  
    return (  
      <Router history={hashHistory}>  
        <Route path='/' component={Container}>  
          <IndexRoute component={Home} />  
          <Route path='address' component={Address}>  
            <IndexRoute component={TwitterFeed} />  
            <Route path='instagram' component={Instagram} />  
          </Route>  
          <Route path='*' component={NotFound} />  
        </Route>  
      </Router>  
    )  
  }  
}</pre>

We’ve set the IndexRoute of address to be TwitterFeed, and have added the Instagram route there as well.

Now, let’s create our InstagramFeed and TwitterFeed components. These will be very basic just so we know we’ve hit the correct routes:

<pre name="a200" id="a200" class="graf graf--pre graf-after--p">const Instagram = () => <h3>Instagram Feed</h3>  
const TwitterFeed = () => <h3>Twitter Feed</h3></pre>

Finally, go into the Address component, and add the Links to the new components as well as props.children, so the components will be rendered:

<pre name="e691" id="e691" class="graf graf--pre graf-after--p">const Address = (props) =>   
  <Link to='/address'>Twitter Feed</Link>   
  <Link to='/address/instagram'>Instagram Feed</Link>  
  <h1>We are located at 555 Jackson St.</h1>  
  {props.children}  
</pre>

Now, when we navigate to [http://localhost:8100/#/address](http://localhost:8100/#/address), the address component should be rendered as well as the TwitterFeed component:



![](https://cdn-images-1.medium.com/max/1600/1*YIIIV0smc9WQOAVmy5eosA.jpeg)



For reference, the code up to now should look like [this](https://gist.github.com/dabit3/0c2014b421f2bf98cd95d176f0b29bad).

### Step 6\. activeStyle / activeClassName and IndexLink

We will now look at how to style to a Link based on whether the route is active. There are two main ways to do this, either adding style directly or through a class.

From the docs:

> <Link> can know when the route it links to is active and automatically apply an activeClassName and/or activeStyle when given either prop. The <Link> will be active if the current route is either the linked route or any descendant of the linked route. **To have the link be active only on the exact linked route, use** [**<IndexLink>**](https://github.com/reactjs/react-router/blob/5e483bff96859aa23f42e79aa979632ddcbfd2bc/docs/API.md#indexlink) **instead or set theonlyActiveOnIndex prop.**

First, let’s look at activeStyle. To apply activeStyle, you simply add activeStyle as a property to a <Link> and pass in the styling you would like the <Link> to have:

<pre name="a773" id="a773" class="graf graf--pre graf-after--p"><Link activeStyle={{color:'#53acff'}} to=''>Home</Link></pre>

Let’s update our Nav component to implement this:

<pre name="c92d" id="c92d" class="graf graf--pre graf-after--p">const Nav = () => (  
  Home</Link>   
    <Link activeStyle={{color:'#53acff'}} to='/address'>Address</Link>   
    <Link activeStyle={{color:'#53acff'}} to='/about'>About</Link>  
    
)</pre>

Now, let’s take a look at how this looks in our browser. You may notice that when you click on address, that Home is still highlighted:



![](https://cdn-images-1.medium.com/max/1600/1*ztTAy4yd6dZjBlvWsTZPCA.jpeg)



This is because when using <Link> along with activeStyle, the <Link> will be active if the current route is either the linked route _or any descendant of the linked route._

This means that because Address is a descendent of Home, it stays highlighted. To fix this, we can pass the onlyActiveOnIndex property to our Link component:

<pre name="6023" id="6023" class="graf graf--pre graf-after--p"><Link onlyActiveOnIndex activeStyle={{color:'#53acff'}} to='/'>Home</Link></pre>

Now, when we look at our browser, the link will only be highlighted if we are on the exact link:



![](https://cdn-images-1.medium.com/max/1600/1*HZgDqOpSs-5cOH_k5dH5jw.jpeg)



There is also a sibling component of <Link> called <IndexLink>. <IndexLink> that is only active when the current route is exactly the linked route.

From the docs:

> An <IndexLink> is like a [<Link>](https://github.com/reactjs/react-router/blob/5e483bff96859aa23f42e79aa979632ddcbfd2bc/docs/API.md#link), except it is only active when the current route is exactly the linked route. It is equivalent to<Link> with the onlyActiveOnIndex prop set.

To implement this, first bring in <IndexLink> from react-router:

<pre name="e92b" id="e92b" class="graf graf--pre graf-after--p">import { ..., IndexLink } from 'react-router'</pre>

Now, simply replace the <Link> components in nav with <IndexLink> components:

<pre name="f81c" id="f81c" class="graf graf--pre graf-after--p">const Nav = () => (  
  Home</IndexLink>   
    <IndexLink activeStyle={{color:'#53acff'}} to='/address'>Address</IndexLink>   
    <IndexLink activeStyle={{color:'#53acff'}} to='/about'>About</IndexLink>  
    
)</pre>

Now, how about adding classes vs styles? To do this, we can use activeClassName. Let’s set up an active style in our index.html:

<pre name="aa9a" id="aa9a" class="graf graf--pre graf-after--p"><style>  
  .active {  
   color:#53acff  
  }  
</style></pre>

Now, we’ll replace activeStyle with activeClassName in our Nav component:

<pre name="ed6b" id="ed6b" class="graf graf--pre graf-after--p">const Nav = () => (  
  Home</IndexLink>   
    <IndexLink activeClassName='active' to='/address'>Address</IndexLink>   
    <IndexLink activeClassName='active' to='/about'>About</IndexLink>  
    
)</pre>

For reference, our code should now look like [this](https://gist.github.com/dabit3/ae4eeea9906c26e5643145664d540d0d).

### Step 7\. Named Components

Using Named Components, we can specify component as props to a <Route>.

From the docs:

> When a route has one or more named components, the child elements are available by name on this.props. In this case this.props.children will be undefined. All route components can participate in the nesting.

Let’s now dig into the code and see how this would actually look.

First, let’s create a new Component that will be rendering our Named Components. These components will be available as props:

<pre name="4793" id="4793" class="graf graf--pre graf-after--p">const NamedComponents = (props) => (  
    
    {props.subTitle}  
    
)</pre>

Next, let’s create two new components called Title and Subtitle:

<pre name="f8f4" id="f8f4" class="graf graf--pre graf-after--p">const Title = () => (  
  <h1>Hello from Title Component</h1>  
)  
const SubTitle = () => (  
  <h1>Hello from SubTitle Component</h1>  
)</pre>

Now, let’s create a new route for our NamedComponents component, and define the Title and Subtitle components in the IndexRoute:

<pre name="849e" id="849e" class="graf graf--pre graf-after--p"><Route path='/namedComponent' component={NamedComponents}>  
  <IndexRoute components={{ title: Title, subTitle: SubTitle }} />  
</Route></pre>

Finally, let’s add a link to our nav to navigate to this component:

<pre name="7434" id="7434" class="graf graf--pre graf-after--p"><IndexLink activeClassName='active' to='/namedComponent'>Named Components</IndexLink></pre>

Now, we should see our new Named Components link when we look at our browser, and when clicking on the link we should see our Title and SubTitle components rendering on the screen:



![](https://cdn-images-1.medium.com/max/1600/1*PkEi-B9wXXssxP81vw2GkQ.jpeg)



For reference, our code should now look like [this](https://gist.github.com/dabit3/5a75ecdba89dc2a45c1aaaf2727ddad1).

### Step 8\. Route Parameters

An essential part of many applications is the ability to read route parameters from a url.

To implement this, let’s revisit our About component. First, let’s rewrite the path in our Router to take an optional parameter, we’ll call it name:

<pre name="f418" id="f418" class="graf graf--pre graf-after--p"><Route path='/about/:name' component={About} /></pre>

Now, let’s rewrite our About component to use this name variable:

<pre name="b440" id="b440" class="graf graf--pre graf-after--p">const About = (props) => (  
  Welcome to the About Page</h3>  
    <h2>{props.params.name}</h2>  
    
)</pre>

Now, if we visit [http://localhost:8100/#/about/nader](http://localhost:8100/#/about/nader) we will see my name displayed below “Welcome to the About Page”.

The only issue here is that if we revisit [http://localhost:8100/#/about](http://localhost:8100/#/about), we get a 404 because there is no name parameter. To fix this, we can make the parameter optional by wrapping it in parenthesis:

<pre name="1c68" id="1c68" class="graf graf--pre graf-after--p"><Route path='/about(/:name)' component={About} /></pre>

Now, if we visit [http://localhost:8100/#/about](http://localhost:8100/#/about) we no longer get a 404, and can still access the name variable.

We can also take this one step further by checking to see if props.name is available and displaying some content:

<pre name="848f" id="848f" class="graf graf--pre graf-after--p">{ props.params.name && <h2>Hello, {props.params.name}</h2>}</pre>

Now, the content will only be shown if there is a name parameter available.

For reference, our code should now look like [this](https://gist.github.com/dabit3/a31358742f837cf4826d55828931543f).

### Step 9\. Query String Parameters

You can also pass in query strings as props to any component that will be rendered at a specific route, and access these parameters as props.location.query.

To see how this works, let’s create a new component called Query, and render a property called props.location.query.message:

<pre name="5587" id="5587" class="graf graf--pre graf-after--p">const Query = (props) => (  
  <h2>{props.location.query.message}</h2>  
)</pre>

Now, let’s set up our new Query Route within the address route we already have created:

<pre name="9d00" id="9d00" class="graf graf--pre graf-after--p">...  
<Route path='/address' component={Address}>  
  <IndexRoute component={TwitterFeed} />  
  <Route path='instagram' component={Instagram} />  
  <Route path='query' component={Query} />  
</Route>  
...</pre>

Finally, let’s link to this route by creating a new Link component, and passing in a query string called message and giving it a value. This is done in the ‘to’ property that we have already used.

Instead of passing a link to ‘to’, we instead pass in an object the the pathname and query properties defined:

<pre name="b51b" id="b51b" class="graf graf--pre graf-after--p"><IndexLink   
  activeClassName='active'   
  to={{   
    pathname: '/address/query',   
    query: { message: 'Hello from Route Query' }   
  }}>Route Query</IndexLink></pre>

Now, if we click on our Route Query link, we should see our message rendered on the screen:



![](https://cdn-images-1.medium.com/max/1600/1*4mktQ1mOZNzQjZcMEItfBA.jpeg)



For reference, our code should now look like [this](https://gist.github.com/dabit3/651f2dae058ff99810eb771c2817d622).

That covers many basic use cases for getting started with React Router.

> My Name is [Nader Dabit ](https://twitter.com/dabit3). I am a developer at [School Status](https://www.schoolstatus.com/) where we help educators make smart instructional decisions by providing all their data in one place. Check us out [@schoolstatusapp.](https://twitter.com/schoolstatusapp)

> If you like React and React Native, checkout out our podcast — [React Native Radio](https://devchat.tv/react-native-radio) on [Devchat.tv](http://devchat.tv/)

> If you enjoyed this article, please recommend and share it! Thanks for your time








