---
author: Konstantin Tarkus
authorTwitter: https://twitter.com/koistya
authorFacebook: https://facebook.com/10152885190272868
title: "You might not need React Router"
subTitle: "If you happened to work with Facebook’s React.js library for a while, you might notice a few misconceptions floating in the React communi..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*TKvlTeNqtkp1s-eVB5Hrvg@2x.png
url: https://medium.freecodecamp.org/you-might-not-need-react-router-38673620f3d
id: you-might-not-need-react-router-38673620f3d
date: 2016-07-11T02:48:53.893Z
tags: [
  "JavaScript",
  "React",
  "Nodejs",
  "Programming",
  "Web Development"
]
---
# You might not need React Router



![](https://cdn-images-1.medium.com/max/1600/1*TKvlTeNqtkp1s-eVB5Hrvg@2x.png)



If you happened to work with Facebook’s React.js library for a while, you might notice a few misconceptions floating in the React community. One of them is the affirmation that React is just V from MVC architecture and needs to be mixed with a bunch of other libraries before it can be used as a framework for developing web applications.

In practice, you rarely see a React developer using controllers and models from MVC. Component-based UI architecture is steadily taking over in the front-end community and fewer and fewer people are using MVC pattern nowadays.

Another misconception is that React Router library (RR) is the official routing solution from Facebook. In reality, the majority of projects at Facebook don’t even use it.

Speaking of the routing, the great multitude of web application projects and use cases can do pretty well with a tiny custom router. Before you classify this notion as a complete heresy, please let me show you how to implement a fully featured routing solution with under 50 lines of code.

#### Navigation

First of all, it not necessary to combine routing and client-side navigation within the same component as it’s done in RR. This way your router can be truly universal — work in exactly the same way, with the same API in both client- and server-side environments. There is a great npm module called **history** that can handle the navigation part (FYI, it’s sort of a wrapper for HTML5 History API and is also used internally by RR). You just create history.js file in your project where you initialize this component (class) and use it as a singleton in your app:

<pre name="dd5e" id="dd5e" class="graf graf--pre graf-after--p">import createHistory from 'history/lib/createBrowserHistory';  
import useQueries from 'history/lib/useQueries';</pre>

<pre name="e59b" id="e59b" class="graf graf--pre graf-after--pre">export default useQueries(createHistory)();</pre>

From now on, you can just reference this file and call history.push(‘/new-page’) whenever you need to redirect a user to a new location (URL) without refreshing the whole page. In the main application file (bootstrap code) you can subscribe to all the URL changes as follows:

<pre name="431e" id="431e" class="graf graf--pre graf-after--p">import history from './history';</pre>

<pre name="19e8" id="19e8" class="graf graf--pre graf-after--pre">function render(location) { /* Render React app, read on */ }</pre>

<pre name="c97a" id="c97a" class="graf graf--pre graf-after--pre">render(history.getCurrentLocation()); // render the current URL  
history.listen(render);               // render subsequent URLs</pre>

A React component with links working client-side may look like this:

<pre name="9353" id="9353" class="graf graf--pre graf-after--p">import React from 'react';  
import history from '../history';</pre>

<pre name="8c66" id="8c66" class="graf graf--pre graf-after--pre">class App extends React.Component {</pre>

<pre name="9ca6" id="9ca6" class="graf graf--pre graf-after--pre">  transition = event => {  
    event.preventDefault();  
    history.push({  
      pathname: event.currentTarget.pathname,  
      search: event.currentTarget.search  
    });  
  };</pre>

<pre name="a41a" id="a41a" class="graf graf--pre graf-after--pre">  render() {  
    return (  
      <ul>  
        <li>Home</li>  
        <li>One</li>  
        <li>Two</li>  
      </ul>  
    );  
  }</pre>

<pre name="1024" id="1024" class="graf graf--pre graf-after--pre">}</pre>

Though, in practice you may want to extract this “transition” functionality into a stand-alone React component. See [Link](https://github.com/kriasoft/react-static-boilerplate/blob/master/components/Link/Link.js) component in [React Static Boilerplate](https://github.com/kriasoft/react-static-boilerplate) (RSB). So you could write client-side only links like this: <Link to=”/some-page”>Click</Link>.

Need to display a confirmation message before user leaves a page? Just register history.listenBefore(..) event handler in your component’s componentDidMount() method as described in history module’s [docs](https://github.com/ReactJSTraining/history/blob/master/docs/ConfirmingNavigation.md). The same approach can be used to animate transitions between pages ([demo](https://jsfiddle.net/frenzzy/4ota5fag/2/)).

#### Routing

You can describe the list of routes and each route in particular via plain JavaScript objects, no need to use JSX here. For example:

<pre name="f29e" id="f29e" class="graf graf--pre graf-after--p">const routes = [  
  { path: '/', action: () => <HomePage /> },  
  { path: '/tasks', action: () => <TaskList /> },  
  { path: '/tasks/:id', action: () => <TaskDetails /> }  
];</pre>

_By the way, if someone knows why so many folks prefer using JSX for something not related to UI rendering, please leave a comment._

You can write your route handlers by using ES2015+ async/await syntax, there is no need to use callbacks as it’s done in RR. For example:

<pre name="40d5" id="40d5" class="graf graf--pre graf-after--p">{  
  path: '/tasks/:id(\\d+)',  
  async action({ params }) {  
    const resp = await fetch(`/api/tasks/${params.id}`);  
    const data = await resp.json();  
    return data && <TaskDetails {...data} />;  
  }  
}</pre>

In the majority of use cases I’m familiar with, there is no need in using nested routes as it’s done in RR. Using nested routes makes things more complicated than they should be and leads to an overly complex hariy routing implementation that is harder to maintain. As far as I know, even at Facebook they don’t use nested routes on the client given the scale of their apps (at least not in all of their projects).

Instead of nesting routes, you can nest React components, for example:

<pre name="aa05" id="aa05" class="graf graf--pre graf-after--p">import React from 'react';  
import Layout from '../components/Layout';</pre>

<pre name="d6f9" id="d6f9" class="graf graf--pre graf-after--pre">class AboutPage extends React.Component {  
  render() {  
    return (  
      <Layout title="About Us" breadcrumbs="Home > About">  
        <h1>Welcome!</h1>  
        <p>Here your can learn more about our product.</p>  
      </Layout>  
    );  
  }  
}</pre>

<pre name="4d84" id="4d84" class="graf graf--pre graf-after--pre">export default AboutPage;</pre>

This approach is way simpler in implementation than nested routes and at the same time more flexible, intuitive and unlocks more use cases (notice how you can pass a breadcrumbs component into the Layout).

The router itself can be written as a pair of two functions — matchURI(), an internal (private) function that helps to compare a parametrized path string with the actual URL; and resolve() function that traverses the list of routes, finds the route that matches to the given location, executes route handler function and returns result to the caller. Here is how it may look like (router.js):

<pre name="1f8e" id="1f8e" class="graf graf--pre graf-after--p">import toRegex from 'path-to-regexp';</pre>

<pre name="3452" id="3452" class="graf graf--pre graf-after--pre">function matchURI(path, uri) {  
  const keys = [];  
  const pattern = toRegex(path, keys); // TODO: Use caching  
  const match = pattern.exec(uri);  
  if (!match) return null;  
  const params = Object.create(null);  
  for (let i = 1; i < match.length; i++) {  
    params[keys[i - 1].name] =  
      match[i] !== undefined ? match[i] : undefined;  
  }  
  return params;  
}</pre>

<pre name="76ce" id="76ce" class="graf graf--pre graf-after--pre">async function resolve(routes, context) {  
  for (const route of routes) {  
    const uri = context.error ? '/error' : context.pathname;  
    const params = matchURI(route.path, uri);  
    if (!params) continue;  
    const result = await route.action({ ...context, params });  
    if (result) return result;  
  }  
  const error = new Error('Not found');  
  error.status = 404;  
  throw error;  
}</pre>

<pre name="cbc1" id="cbc1" class="graf graf--pre graf-after--pre">export default { resolve };</pre>

Check out the documentation to the [path-to-regexp](https://github.com/pillarjs/path-to-regexp) library. This library is awesome! For example you can use the same library to convert parametrized path strings into URLs:

<pre name="3d57" id="3d57" class="graf graf--pre graf-after--p">const toUrlPath = pathToRegexp.compile('/tasks/:id(\\d+)')  

toUrlPath({ id: 123 }) //=> "/user/123"  
toUrlPath({ id: 'abc' }) /=> error, doesn't match the \d+ constraint</pre>

Now you can update the main application file (entry point) to use this router:

<pre name="af72" id="af72" class="graf graf--pre graf-after--p">import ReactDOM from 'react-dom';  
import history from './history';  
import router from './router';  
import routes from './routes';</pre>

<pre name="0f78" id="0f78" class="graf graf--pre graf-after--pre">const container = document.getElementById('root');</pre>

<pre name="a5a8" id="a5a8" class="graf graf--pre graf-after--pre">function renderComponent(component) {  
  ReactDOM.render(component, container);  
}</pre>

<pre name="d696" id="d696" class="graf graf--pre graf-after--pre">function render(location) {  
  router.resolve(routes, location)  
    .then(renderComponent)  
    .catch(error => router.resolve(routes, { ...location, error })  
    .then(renderComponent));  
}</pre>

<pre name="6f58" id="6f58" class="graf graf--pre graf-after--pre">render(history.getCurrentLocation()); // render the current URL  
history.listen(render);               // render subsequent URLs</pre>

That’s it! You may also want to check out my React boilerplate projects that are featuring this routing approach:

[Universal Router](https://github.com/kriasoft/universal-router) — a simple middleware style routing solution  
[React Starter Kit ](https://github.com/kriasoft/react-starter-kit)— isomorphic web app boilerplate (Node.js, GraphQL, React)  
[React Static Boilerplate ](https://github.com/kriasoft/react-static-boilerplate)— serverless web app (React, Redux, Firebase)  
[ASP.NET Core Starter Kit](https://github.com/kriasoft/aspnet-starter-kit) — single-page app (ASP.NET Core, C#, React)

These boilerplates are quite popular and successfully used in many real-world projects around the globe. Definitely worth checking out :)

**P.S.**: Fan of declarative routes? Find a declarative flavor of this routing approach > [here](https://github.com/kriasoft/react-static-boilerplate/blob/master/docs/routing-and-navigation.md) <. Check out comments to this article on > [Reddit](https://www.reddit.com/r/reactjs/comments/4s8ulw/you_might_not_need_react_router/) <.

**Next**: You might not need React Router — Part 2 (coming soon)








