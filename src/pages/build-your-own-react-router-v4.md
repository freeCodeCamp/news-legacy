---
author: Tyler McGinnis
authorTwitter: https://twitter.com/tylermcginnis
authorFacebook: https://facebook.com/10153707086226430
title: "How to build your own React Router v4"
subTitle: "I still remember the feelings when I first started learning about routing in client side applications. At the time I was just a wee lad s..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*ZfJZWrWuEcZ6IV9r674Hyg.jpeg
url: https://medium.freecodecamp.org/build-your-own-react-router-v4-a9815f7d5e42
id: build-your-own-react-router-v4-a9815f7d5e42
date: 2017-03-06T12:12:03.284Z
tags: [
  "React",
  "JavaScript",
  "Web Development",
  "Software Development",
  "Programming"
]
---
# How to build your own React Router v4



![](https://cdn-images-1.medium.com/max/1600/1*ZfJZWrWuEcZ6IV9r674Hyg.jpeg)



I still remember the feelings when I first started learning about routing in client side applications. At the time I was just a wee lad still getting my feet wet with this whole “Single Page Application” thing and I’d be lying if I said it didn’t take a poop all over my brain. From the beginning it’s as if my brain treated my application code and my router code as two unique and distinct ideas. They were like step brothers who didn’t like each other but were forced to live together anyway.

Over the last few years I have, probably at this point against your approval, been fortunate enough to be able to teach this idea of routing to other developers. Unfortunately, it turns out that most of our brains seem to be wired similarly to mine. I think there’s a few reasons for this. First, routing in general is pretty complex. This makes, for those library authors, finding the right abstraction over routing even more complex. Second, because of this complexity, consumers of routing libraries tend to blindly trust the abstraction without really understanding what’s going on under the hood.

In this tutorial, we’ll dive into solving both problems. First the later by recreating our own simplified version of React Router v4 which will then shed some light on the former, that is, whether or not RRv4 is a reasonable abstraction.

Here’s our app code we’ll be using to test our ~React Router implementation once we’ve built it. You can play around with the final example [here](http://codepen.io/anon/pen/MpexLL)

<pre name="fb76" id="fb76" class="graf graf--pre graf-after--p">const Home = () => (  
  <h2>Home</h2>  
)</pre>

<pre name="128c" id="128c" class="graf graf--pre graf-after--pre">const About = () => (  
  <h2>About</h2>  
)</pre>

<pre name="b808" id="b808" class="graf graf--pre graf-after--pre">const Topic = ({ topicId }) => (  
  <h3>{topicId}</h3>  
)</pre>

<pre name="84c7" id="84c7" class="graf graf--pre graf-after--pre">const Topics = ({ match }) => {  
  const items = [  
    { name: 'Rendering with React', slug: 'rendering' },  
    { name: 'Components', slug: 'components' },  
    { name: 'Props v. State', slug: 'props-v-state' },  
  ]</pre>

<pre name="583e" id="583e" class="graf graf--pre graf-after--pre">  return (  
    Topics</h2>  
      <ul>  
        {items.map(({ name, slug }) => (  
          <li key={name}>  
            <Link to={`${match.url}/${slug}`}>{name}</Link>  
          </li>  
        ))}  
      </ul>  
      {items.map(({ name, slug }) => (  
        <Route   
          key={name}   
          path={`${match.path}/${slug}`}   
          render={() => (  
            <Topic topicId={name} />  
        )} />  
      ))}  
      <Route exact path={match.url} render={() => (  
        <h3>Please select a topic.</h3>  
      )}/>  
      
  )  
}</pre>

<pre name="8044" id="8044" class="graf graf--pre graf-after--pre">const App = () => (  
    
      <li><Link to="/">Home</Link></li>  
      <li><Link to="/about">About</Link></li>  
      <li><Link to="/topics">Topics</Link></li>  
    </ul></pre>

<pre name="0dd3" id="0dd3" class="graf graf--pre graf-after--pre">    <hr/></pre>

<pre name="ec57" id="ec57" class="graf graf--pre graf-after--pre">    <Route exact path="/" component={Home}/>  
    <Route path="/about" component={About}/>  
    <Route path="/topics" component={Topics} />  
    
)</pre>

If you’re unfamiliar with React Router v4, here’s the basic premise. `Route`s render some UI when a URL matches a location you specify in the Route’s `path` prop. `Link`s provide a declarative, accessible way to navigate around your app. In other words, the `Link` component allows you to update the URL, and the `Route` component changes your UI based on that new URL. _The focus of this tutorial isn’t actually on teaching the basics of RRV4, so if the code above is still confusing, head over to_ [_the official docs_](https://reacttraining.com/react-router)_, play around with the examples, and once you’re more comfortable, come back._

The first thing you should notice is that we’ve introduced two components that were given to us by the router into our app, `Link` and `Route`. My favorite aspect of React Router v4 is that the API is “Just Components™”. What this means is that if you’re already familiar with React, the same intuition you have about components and how to compose them, will continue to hold true in regards to your routing code. And even more convenient for our use case here, because we’re already familiar with how to create components, creating our own React Router will be nothing more than doing what we’re already familiar with, creating more components.

We’re going to start off by creating our `Route` component. Before we dive into the code, let’s go ahead and check out the API (which conveniently is just which props it takes).

In our example above, you’ll notice that `<Route>` can take in three props. `exact`, `path`, and `component`. This means the `propTypes` for our `Route` component currently look like this,

<pre name="34e8" id="34e8" class="graf graf--pre graf-after--p">static propTypes = {  
  exact: PropTypes.bool,  
  path: PropTypes.string,  
  component: PropTypes.func,  
}</pre>

There’s a few subtleties here. First, the reason `path` isn’t required is because if a `Route` isn’t given a path, it will automatically be rendered. Second, the reason `component` isn’t marked as required either is because there are actually a few different ways to tell React Router the UI you want to render if the path matches. One way that isn’t in our example above is with the `render` prop. It looks like this,

<pre name="32c6" id="32c6" class="graf graf--pre graf-after--p"><Route path='/settings' render={({ match }) => {  
  return <Settings authed={isAuthed} match={match} />  
}} /></pre>

`render` allows you to conveniently inline a function which returns some UI rather than creating a separate component. So we’ll add that to our propTypes as well,

<pre name="e615" id="e615" class="graf graf--pre graf-after--p">static propTypes = {  
  exact: PropTypes.bool,  
  path: PropTypes.string,  
  component: PropTypes.func,  
  render: PropTypes.func,  
}</pre>

Now we know what props `Route` receives, let’s talk again about what it actually does. Route “renders some UI when the URL matches a location you specify in the Route’s `path` prop”. Based off of that definition, we know that `<Route>` is going to need some functionality which checks if the current URL matches the component’s `path` prop. If it does, we’ll render some UI. If it doesn’t, we’ll do nothing by returning null.

Let’s see what this looks like in code, trusting that we’ll build out the matching function, which we’ll call `matchPath`, later.

<pre name="a071" id="a071" class="graf graf--pre graf-after--p">class Route extends Component {  
  static propTypes = {  
    exact: PropTypes.bool,  
    path: PropTypes.string,  
    component: PropTypes.func,  
    render: PropTypes.func,  
  }</pre>

<pre name="c202" id="c202" class="graf graf--pre graf-after--pre">  render () {  
    const {  
      path,  
      exact,  
      component,  
      render,  
    } = this.props</pre>

<pre name="2b3e" id="2b3e" class="graf graf--pre graf-after--pre">    const match = matchPath(  
      location.pathname, // global DOM variable  
      { path, exact }  
    )</pre>

<pre name="a434" id="a434" class="graf graf--pre graf-after--pre">    if (!match) {  
      // Do nothing because the current  
      // location doesn't match the path prop.</pre>

<pre name="328c" id="328c" class="graf graf--pre graf-after--pre">      return null  
    }</pre>

<pre name="ecd0" id="ecd0" class="graf graf--pre graf-after--pre">    if (component) {  
      // The component prop takes precedent over the  
      // render method. If the current location matches  
      // the path prop, create a new element passing in  
      // match as the prop.</pre>

<pre name="a50a" id="a50a" class="graf graf--pre graf-after--pre">      return React.createElement(component, { match })  
    }</pre>

<pre name="6f6e" id="6f6e" class="graf graf--pre graf-after--pre">    if (render) {  
      // If there's a match but component  
      // was undefined, invoke the render  
      // prop passing in match as an argument.</pre>

<pre name="8182" id="8182" class="graf graf--pre graf-after--pre">      return render({ match })  
    }</pre>

<pre name="467e" id="467e" class="graf graf--pre graf-after--pre">    return null  
  }  
}</pre>

Now `Route` is looking pretty solid. If the current location matches the `path` prop that was passed in, we render some UI, if not, we don’t do anything.

Let’s take a step back for a moment and talk about routing in general. In a client side application, there are really only two ways for the user to update the URL. The first way is clicking on an anchor tag and the second is by clicking the back/forward button. Foundationally, our router needs to be aware of the current URL and render UI based on it. What this also means is that our router needs to be aware of when the URL changes, so that it can figure out which new UI to display based on that new URL. If we know that the only way to update a URL is through an anchor tag or the forward/back button, we can plan for and react to those changes. We’ll get into anchor tags a little later when we build out our `<Link>` component, but for now, I want to focus on the back/forward buttons. React Router uses [History](https://github.com/ReactTraining/history)’s `.listen` method to listen to changes for the current URL, but to avoid bringing in another library, we’ll use HTML5’s `popstate` event. `popstate`, which will be fired whenever the user clicks on the forward or back button, is exactly what we need. Because it’s the `Route`s that are rendering the UI based off the current URL, it makes sense to also give `Route`s the ability to listen for and re-render whenever a `popstate` event occurs. By re-rendering, each `Route` will re-check to see if they match with the new URL. If they do, they’ll render UI, if not, they’ll do nothing. Let’s see what this looks like now,

<pre name="ae85" id="ae85" class="graf graf--pre graf-after--p">class Route extends Component {  
  static propTypes: {  
    path: PropTypes.string,  
    exact: PropTypes.bool,  
    component: PropTypes.func,  
    render: PropTypes.func,  
  }</pre>

<pre name="4893" id="4893" class="graf graf--pre graf-after--pre">  componentWillMount() {  
    addEventListener("popstate", this.handlePop)  
  }</pre>

<pre name="1c6a" id="1c6a" class="graf graf--pre graf-after--pre">  componentWillUnmount() {  
    removeEventListener("popstate", this.handlePop)  
  }</pre>

<pre name="cbfd" id="cbfd" class="graf graf--pre graf-after--pre">  handlePop = () => {  
    this.forceUpdate()  
  }</pre>

<pre name="3a58" id="3a58" class="graf graf--pre graf-after--pre">  render() {  
    const {  
      path,  
      exact,  
      component,  
      render,  
    } = this.props</pre>

<pre name="a25c" id="a25c" class="graf graf--pre graf-after--pre">    const match = matchPath(location.pathname, { path, exact })</pre>

<pre name="e31f" id="e31f" class="graf graf--pre graf-after--pre">    if (!match)  
      return null</pre>

<pre name="b9b1" id="b9b1" class="graf graf--pre graf-after--pre">    if (component)  
      return React.createElement(component, { match })</pre>

<pre name="2b4f" id="2b4f" class="graf graf--pre graf-after--pre">    if (render)  
      return render({ match })</pre>

<pre name="4510" id="4510" class="graf graf--pre graf-after--pre">    return null  
  }  
}</pre>

You should notice that all we’ve done is add a `popstate` listener when the component mounts, and when the `popstate` event is fired, we call `forceUpdate` which will kick off a re-render.

Now, no matter how many `<Route>`s we’re rendering, each of them will listen for, re-match, and re-render based on the forward/back buttons.

One thing we’ve been “hand waving” over up until this point has been our `matchPath` function. This function is pivotal to our router because it’s the function which is going to decide if a current URL matches the path of a `<Route>` component as we talked about above. One nuance to `matchPath` is we need to make sure that we take into account `<Route>`s `exact` prop. If you’re not familiar with what `exact` does, here’s an explanation straight from the docs

> _When_ `_true_`_, will only match if the path matches the_ `_location.pathname_`exactly_._



![](https://cdn-images-1.medium.com/max/1600/1*IkNKW2MdImYn392pk47D5Q.png)



Now, let’s dive into the implementation of our `matchPath` function. If you look back at our `Route` component, you’ll see that the signature for `matchPatch` looks like this,

<pre name="be97" id="be97" class="graf graf--pre graf-after--p">const match = matchPath(location.pathname, { path, exact })</pre>

Where `match` is either an object or null depending on if there was a match. Based on that signature, we can build out the first part of `matchPath` like this,

<pre name="afa0" id="afa0" class="graf graf--pre graf-after--p">const matchPatch = (pathname, options) => {  
  const { exact = false, path } = options  
}</pre>

Here we’re using some ES6 magic. We’re saying “create a variable called exact which equates to options.exact, unless that’s undefined, then set it to false. Also create a variable called path which eqautes to options.path”.

Earlier I mentioned “the reason `path` isn’t required is because if a `Route` isn’t given a path, it will automatically be rendered”. Well since it’s indirectly our `matchPath` function which decides if something is rendered or not (by whether there’s a match), let’s add that functionality now.

<pre name="9700" id="9700" class="graf graf--pre graf-after--p">const matchPatch = (pathname, options) => {  
  const { exact = false, path } = options</pre>

<pre name="1cda" id="1cda" class="graf graf--pre graf-after--pre">  if (!path) {  
    return {  
      path: null,  
      url: pathname,  
      isExact: true,  
    }  
  }  
}</pre>

Now comes the matching part. React Router uses [pathToRegex](https://github.com/pillarjs/path-to-regexp) for this, we’ll simplify things and just use a simple Regex.

<pre name="eda3" id="eda3" class="graf graf--pre graf-after--p">const matchPatch = (pathname, options) => {  
  const { exact = false, path } = options</pre>

<pre name="e8b3" id="e8b3" class="graf graf--pre graf-after--pre">  if (!path) {  
    return {  
      path: null,  
      url: pathname,  
      isExact: true,  
    }  
  }</pre>

<pre name="10d1" id="10d1" class="graf graf--pre graf-after--pre">  const match = new RegExp(`^${path}`).exec(pathname)</pre>

<pre name="fc86" id="fc86" class="graf graf--pre graf-after--pre">}</pre>

If you’re not familiar with `.exec`, it’s going to return an array containing the matched text if it finds a match, otherwise it returns null.

Here is every `match` when our example app routes to `/topics/components



![](https://cdn-images-1.medium.com/max/1600/1*rf1T5mboeUDzi_T1XicHdw.png)



> _Notice that we’re getting a_ `_match_` _for every_ `_<Route>_` _that’s in our app. That’s because, well, each_ `_<Route>_` _calls_ `_matchPath_` _in its render method._

Now that we know what the `match` that `.exec` is returning, all we need to do now is figure out if there’s a match.

<pre name="4c83" id="4c83" class="graf graf--pre graf-after--p">const matchPatch = (pathname, options) => {  
  const { exact = false, path } = options</pre>

<pre name="6ef8" id="6ef8" class="graf graf--pre graf-after--pre">  if (!path) {  
    return {  
      path: null,  
      url: pathname,  
      isExact: true,  
    }  
  }</pre>

<pre name="3349" id="3349" class="graf graf--pre graf-after--pre">  const match = new RegExp(`^${path}`).exec(pathname)</pre>

<pre name="663c" id="663c" class="graf graf--pre graf-after--pre">  if (!match) {  
    // There wasn't a match.  
    return null  
  }</pre>

<pre name="7764" id="7764" class="graf graf--pre graf-after--pre">  const url = match[0]  
  const isExact = pathname === url</pre>

<pre name="1002" id="1002" class="graf graf--pre graf-after--pre">  if (exact && !isExact) {  
    // There was a match, but it wasn't  
    // an exact match as specified by  
    // the exact prop.</pre>

<pre name="e2dd" id="e2dd" class="graf graf--pre graf-after--pre">    return null  
  }</pre>

<pre name="3a00" id="3a00" class="graf graf--pre graf-after--pre">  return {  
    path,  
    url,  
    isExact,  
  }  
}</pre>

Earlier I mentioned how there’s really just two ways to update the URL if you’re the user, via the back/forward buttons, or clicking on an achor tag. We’ve taken care of re-rendering on back/forward clicks via the `popstate` event listener in our `Route`, now let’s take care of the anchor tag by building our our `Link` component.

The API for `Link` looks like this,

<pre name="a7e7" id="a7e7" class="graf graf--pre graf-after--p"><Link to='/some-path' replace={false} /></pre>

Where `to` is a string and is the location to link to and `replace` is a boolean which when true, clicking the link will replace the current entry in the history stack instead of adding a new one.

Adding those propTypes to our Link component, we get this,

<pre name="5fef" id="5fef" class="graf graf--pre graf-after--p">class Link extends Component {  
  static propTypes = {  
    to: PropTypes.string.isRequired,  
    replace: PropTypes.bool,  
  }  
}</pre>

Now we know that the render method in our `Link` component needs to return an anchor tag, but we obviously don’t want to cause a full page refresh every time we switch routes, so we’ll hijack the anchor tag by adding a `onClick` handler to it

<pre name="bfae" id="bfae" class="graf graf--pre graf-after--p">class Link extends Component {  
  static propTypes = {  
    to: PropTypes.string.isRequired,  
    replace: PropTypes.bool,  
  }</pre>

<pre name="768b" id="768b" class="graf graf--pre graf-after--pre">  handleClick = (event) => {  
    const { replace, to } = this.props  
    event.preventDefault()</pre>

<pre name="10f4" id="10f4" class="graf graf--pre graf-after--pre">    // route here.  
  }</pre>

<pre name="903f" id="903f" class="graf graf--pre graf-after--pre">  render() {  
    const { to, children} = this.props</pre>

<pre name="744b" id="744b" class="graf graf--pre graf-after--pre">    return (  
        
        {children}  
        
    )  
  }  
}</pre>

Now all that’s lacking is actually changing the current location. To do this React Router uses [History](https://github.com/reacttraining/history)’s `push` and `replace` methods, but we’ll use HTML5’s [pushState](https://developer.mozilla.org/en-US/docs/Web/API/History_API#The_pushState%28%29_method) and [replaceState](https://developer.mozilla.org/en-US/docs/Web/API/History_API#The_replaceState%28%29_method) methods to avoid adding in a dependency.

> _We’re hand waving over the History library in this post as a way to avoid external dependencies but it’s crucial for the real React Router code as it normalizes the differences in managing session history in various browser environments._

Both `pushState` and `replaceState` take in three arguments. The first is an object which is associated with the new history entry - we don’t need this functionality so we’ll just pass in an empty object. The second is a title, which we also don’t need so we’ll pass in null. The third, and the one we’ll actually use, is a relative URL.

<pre name="280b" id="280b" class="graf graf--pre graf-after--p">const historyPush = (path) => {  
  history.pushState({}, null, path)  
}</pre>

<pre name="7586" id="7586" class="graf graf--pre graf-after--pre">const historyReplace = (path) => {  
  history.replaceState({}, null, path)  
}</pre>

Now inside of our `Link` component, we’ll invoke `historyPush` or `historyReplace` depending on the `replace` prop,

<pre name="5436" id="5436" class="graf graf--pre graf-after--p">class Link extends Component {  
  static propTypes = {  
    to: PropTypes.string.isRequired,  
    replace: PropTypes.bool,  
  }  
  handleClick = (event) => {  
    const { replace, to } = this.props  
    event.preventDefault()</pre>

<pre name="35cd" id="35cd" class="graf graf--pre graf-after--pre">    replace ? historyReplace(to) : historyPush(to)  
  }</pre>

<pre name="b330" id="b330" class="graf graf--pre graf-after--pre">  render() {  
    const { to, children} = this.props</pre>

<pre name="fddb" id="fddb" class="graf graf--pre graf-after--pre">    return (  
        
        {children}  
        
    )  
  }  
}</pre>

Now there’s just one more, albeit crucial addition we need to make. If you were to play around with our example app with our current router code, you’d notice a pretty big problem. When you navigate around, the URL would update, but the UI would stay exactly the same. This is because even though we’re changing the location with our `historyReplace` or `historyPush` functions, our `<Route>`s are unaware of that change and don’t know that they should re-render and re-match. To solve this problem, we need to keep track of which `<Route>`s have been rendered and call `forceUpdate` on them whenever a route changes.

> _React Router gets around this problem by having using a combination of setState, context, and history.listen inside of a_ [_Router_](https://github.com/ReactTraining/react-router/blob/v4/packages/react-router/modules/Router.js#L53) _component you wrap your code with._

To keep our router simple, we’ll keep track of which `<Route>`s have been rendered by pushing their instances to an array, then whenever a location change occurs, we can loop through that array and call forceUpdate on all the instances.

<pre name="cce3" id="cce3" class="graf graf--pre graf-after--p">let instances = []</pre>

<pre name="5b31" id="5b31" class="graf graf--pre graf-after--pre">const register = (comp) => instances.push(comp)  
const unregister = (comp) => instances.splice(instances.indexOf(comp), 1)</pre>

Notice we’ve created two functions. We’ll call `register` whenever a `<Route>` is mounted and call `unregister` whenever it unmounts. Then, whenever we call `historyPush` or `historyReplace` (which we will every time a user clicks on a `<Link>`), we can loop through those instances and `forceUpdate`.

Let’s update our `<Route>` component first,

<pre name="0891" id="0891" class="graf graf--pre graf-after--p">class Route extends Component {  
  static propTypes: {  
    path: PropTypes.string,  
    exact: PropTypes.bool,  
    component: PropTypes.func,  
    render: PropTypes.func,  
  }</pre>

<pre name="54ed" id="54ed" class="graf graf--pre graf-after--pre">  componentWillMount() {  
    addEventListener("popstate", this.handlePop)  
    register(this)  
  }</pre>

<pre name="ee12" id="ee12" class="graf graf--pre graf-after--pre">  componentWillUnmount() {  
    unregister(this)  
    removeEventListener("popstate", this.handlePop)  
  }</pre>

<pre name="611c" id="611c" class="graf graf--pre graf-after--pre">...  
}</pre>

Now, let’s update `historyPush` and `historyReplace`

<pre name="6933" id="6933" class="graf graf--pre graf-after--p">const historyPush = (path) => {  
  history.pushState({}, null, path)  
  instances.forEach(instance => instance.forceUpdate())  
}</pre>

<pre name="b8c7" id="b8c7" class="graf graf--pre graf-after--pre">const historyReplace = (path) => {  
  history.replaceState({}, null, path)  
  instances.forEach(instance => instance.forceUpdate())  
}</pre>

🎉 now whenever a `<Link>` is clicked and the location changes, each `<Route>` will be aware of that and re-match and re-render.

Now, our full router code looks like this code below, and our example app above works perfectly with it.

<pre name="3716" id="3716" class="graf graf--pre graf-after--p">import React, { PropTypes, Component } from 'react'</pre>

<pre name="f01b" id="f01b" class="graf graf--pre graf-after--pre">let instances = []</pre>

<pre name="d71f" id="d71f" class="graf graf--pre graf-after--pre">const register = (comp) => instances.push(comp)</pre>

<pre name="b2e7" id="b2e7" class="graf graf--pre graf-after--pre">const unregister = (comp) =>      instances.splice(instances.indexOf(comp), 1)</pre>

<pre name="6bf0" id="6bf0" class="graf graf--pre graf-after--pre">const historyPush = (path) => {  
  history.pushState({}, null, path)  
  instances.forEach(instance => instance.forceUpdate())  
}</pre>

<pre name="7b83" id="7b83" class="graf graf--pre graf-after--pre">const historyReplace = (path) => {  
  history.replaceState({}, null, path)  
  instances.forEach(instance => instance.forceUpdate())  
}</pre>

<pre name="e335" id="e335" class="graf graf--pre graf-after--pre">const matchPath = (pathname, options) => {  
  const { exact = false, path } = options</pre>

<pre name="9587" id="9587" class="graf graf--pre graf-after--pre">  if (!path) {  
    return {  
      path: null,  
      url: pathname,  
      isExact: true  
    }  
  }</pre>

<pre name="daa3" id="daa3" class="graf graf--pre graf-after--pre">  const match = new RegExp(`^${path}`).exec(pathname)</pre>

<pre name="7672" id="7672" class="graf graf--pre graf-after--pre">  if (!match)  
    return null</pre>

<pre name="9c39" id="9c39" class="graf graf--pre graf-after--pre">  const url = match[0]  
  const isExact = pathname === url</pre>

<pre name="54f8" id="54f8" class="graf graf--pre graf-after--pre">  if (exact && !isExact)  
    return null</pre>

<pre name="7009" id="7009" class="graf graf--pre graf-after--pre">  return {  
    path,  
    url,  
    isExact,  
  }  
}</pre>

<pre name="c25f" id="c25f" class="graf graf--pre graf-after--pre">class Route extends Component {  
  static propTypes: {  
    path: PropTypes.string,  
    exact: PropTypes.bool,  
    component: PropTypes.func,  
    render: PropTypes.func,  
  }</pre>

<pre name="ffca" id="ffca" class="graf graf--pre graf-after--pre">  componentWillMount() {  
    addEventListener("popstate", this.handlePop)  
    register(this)  
  }</pre>

<pre name="56f7" id="56f7" class="graf graf--pre graf-after--pre">  componentWillUnmount() {  
    unregister(this)  
    removeEventListener("popstate", this.handlePop)  
  }</pre>

<pre name="8587" id="8587" class="graf graf--pre graf-after--pre">  handlePop = () => {  
    this.forceUpdate()  
  }</pre>

<pre name="8510" id="8510" class="graf graf--pre graf-after--pre">  render() {  
    const {  
      path,  
      exact,  
      component,  
      render,  
    } = this.props</pre>

<pre name="57f0" id="57f0" class="graf graf--pre graf-after--pre">    const match = matchPath(location.pathname, { path, exact })</pre>

<pre name="6429" id="6429" class="graf graf--pre graf-after--pre">    if (!match)  
      return null</pre>

<pre name="53d3" id="53d3" class="graf graf--pre graf-after--pre">    if (component)  
      return React.createElement(component, { match })</pre>

<pre name="3c80" id="3c80" class="graf graf--pre graf-after--pre">    if (render)  
      return render({ match })</pre>

<pre name="cbc7" id="cbc7" class="graf graf--pre graf-after--pre">    return null  
  }  
}</pre>

<pre name="97f9" id="97f9" class="graf graf--pre graf-after--pre">class Link extends Component {  
  static propTypes = {  
    to: PropTypes.string.isRequired,  
    replace: PropTypes.bool,  
  }  
  handleClick = (event) => {  
    const { replace, to } = this.props</pre>

<pre name="4ebb" id="4ebb" class="graf graf--pre graf-after--pre">    event.preventDefault()  
    replace ? historyReplace(to) : historyPush(to)  
  }</pre>

<pre name="6e89" id="6e89" class="graf graf--pre graf-after--pre">  render() {  
    const { to, children} = this.props</pre>

<pre name="76a2" id="76a2" class="graf graf--pre graf-after--pre">    return (  
        
        {children}  
        
    )  
  }  
}</pre>

Bonus: The React Router API also comes with a `<Redirect>` component. Using the code we’ve previously written, creating this component is pretty straight forward

<pre name="9c79" id="9c79" class="graf graf--pre graf-after--p">class Redirect extends Component {  
  static defaultProps = {  
    push: false  
  }</pre>

<pre name="338c" id="338c" class="graf graf--pre graf-after--pre">  static propTypes = {  
    to: PropTypes.string.isRequired,  
    push: PropTypes.bool.isRequired,  
  }</pre>

<pre name="f614" id="f614" class="graf graf--pre graf-after--pre">  componentDidMount() {  
    const { to, push } = this.props</pre>

<pre name="56b4" id="56b4" class="graf graf--pre graf-after--pre">    push ? historyPush(to) : historyReplace(to)  
  }</pre>

<pre name="0fb1" id="0fb1" class="graf graf--pre graf-after--pre">  render() {  
    return null  
  }  
}</pre>

Notice this component isn’t actually rendering any UI, instead, it’s acting purely as a route director, hence the name.

I hope this has helped you create a better mental model of what’s happening in React Router while also helping you to gain an appreciation for React Router’s elegance and “Just Components” API. I’ve always said that React will make you a better JavaScript developer. I now also believe that React Router will make you a better React developer. Because everything is just components, if you know React, you know React Router.

P.S. Shoutout to [Ryan](https://twitter.com/ryanflorence), who created the first implementation of the mini router and helped me with this post.











* * *







[Follow me on Twitter](https://twitter.com/tylermcginnis33) and read more of my work [on my blog](https://tylermcginnis.com/).








