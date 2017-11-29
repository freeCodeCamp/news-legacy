---
author: Michael Sargent
authorTwitter: https://twitter.com/michaelksarge
authorFacebook: https://facebook.com/1345038775589072
title: "An Introduction to the Redux-First Routing Model"
subTitle: "A routing library is a key component of any complex, single-page application. If you develop web apps with React and Redux, you’ve probab..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*YjH6ffLqFDSht8owkh27Vg.png
url: https://medium.freecodecamp.org/an-introduction-to-the-redux-first-routing-model-98926ebf53cb
id: an-introduction-to-the-redux-first-routing-model-98926ebf53cb
date: 2017-06-21T18:11:26.114Z
tags: [
	"React",
	"Redux",
	"React Router",
	"JavaScript",
	"Web Development"
]
---
# An Introduction to the Redux-First Routing Model











![](https://cdn-images-1.medium.com/max/2000/1*YjH6ffLqFDSht8owkh27Vg.png)












A routing library is a key component of any complex, single-page application. If you develop web apps with React and Redux, you’ve probably used, or at least heard of [React Router](https://github.com/ReactTraining/react-router). It’s a well-known routing library for React, and a great solution for many use cases.

But React Router isn’t the only viable solution in the React/Redux ecosystem. In fact, there are tons of routing solutions built [for React](https://github.com/brillout/awesome-react-components#router) and [for Redux](https://github.com/markerikson/redux-ecosystem-links/blob/master/routing.md), each with different APIs, features and goals — and the list is only growing. Needless to say, client-side routing isn’t going away anytime soon, and there’s still a lot of space for design in the routing libraries of tomorrow.

Today, I want to bring your attention to the subject of routing in Redux. I’ll present and make a case for **Redux-first routing** — a paradigm that makes Redux the _star_ of the routing model, and the common thread among many Redux routing solutions. I’ll demonstrate how to put together the core, framework-agnostic API in under 100 lines of code, before exploring options for real-world usage with React and other front-end frameworks.











* * *







### A Little History














In the browser, the **location** (URL information) and **session history** (a stack of locations visited by the current browser tab) are stored in the global `window` object. They are accessible via:

*   `window.location` ([Location API](https://developer.mozilla.org/en-US/docs/Web/API/Location))
*   `window.history` ([History API](https://developer.mozilla.org/en-US/docs/Web/API/History)).

The History API offers the following **history navigation methods**, notable for their ability to update the browser’s history and location _without necessitating a page reload_:

*   `pushState(href)` — pushes a new location onto the history stack
*   `replaceState(href)` — overwrites the current location on the stack
*   `back()` — navigates to the previous location on the stack
*   `forward()` — navigates to the next location on the stack
*   `go(index)` — navigates to a location on the stack, in either direction.

Together, the History and Location APIs enable the modern client-side routing paradigm known as **pushState routing** — the first protagonist of our story.

Now, it’s almost a crime to mention the History and Location APIs without mentioning a modern **wrapper library** like `[history](https://github.com/ReactTraining/history)`.

[**ReactTraining/history**  
_Manage session history with JavaScript_github.com](https://github.com/ReactTraining/history "https://github.com/ReactTraining/history")[](https://github.com/ReactTraining/history)

`history` provides a simple yet powerful API for interfacing with the browser history and location, while covering inconsistencies between different browser implementations. It’s used as a peer or internal dependency in many modern routing libraries, and I’ll make multiple references to it throughout this article.

### Redux and pushState Routing














The second protagonist of our story is **Redux**. It’s 2017, so I’ll spare you the introduction and get right to the point:

_By using plain pushState routing in a Redux application, we split the application state across two domains: browser history and the Redux store._

Here’s what that looks like with React Router, which [instantiates and wraps](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/modules/BrowserRouter.js#L18-L21) `history`:

<pre name="9cac" id="9cac" class="graf graf--pre graf-after--p">history → React Router ↘  
                        view  
                 Redux ↗</pre>

Now, we know that [not all data has to reside in the store](http://redux.js.org/docs/faq/OrganizingState.html#do-i-have-to-put-all-my-state-into-redux-should-i-ever-use-reacts-setstate). For example, local component state is often a suitable place to store data that’s specific to a single component.

But location data isn’t trivial. It’s a dynamic and important part of the application state — the kind of data that belongs in the store. Holding it in the store enables Redux luxuries like time-travel debugging, and easy access from any store-connected component.

**So how do we move the location into the store?**

There’s no getting around the fact that the browser reads and stores history and location information in the `window`, but what we _can_ do is keep a _copy_ of the location data in the store, and keep it in sync with the browser.

**Isn’t that what** `[**react-router-redux**](https://github.com/reactjs/react-router-redux)` **does for React Router?**

Yes, but only to enable the time-travel capabilities of the Redux DevTools. The application still depends on location data held in React Router:

<pre name="d0bf" id="d0bf" class="graf graf--pre graf-after--p">history → React Router ↘  
                   ↕    view  
                 Redux ↗</pre>

Using `react-router-redux` to read location data from the store instead of React Router is [discouraged](https://github.com/reactjs/react-router-redux#how-do-i-access-router-state-in-a-container-component) (due to potentially conflicting sources of truth).

**Can we do better?**

Can we build an alternative routing model — one that’s built from the ground up to play well with Redux, allowing us to read and update the location _the Redux way_ — with `store.getState()` and `store.dispatch()`?

We absolutely can, and it’s called _Redux-first routing_.

### Redux-First Routing














Redux-first routing is a variation on pushState routingthat makes Redux the star of the routing model.

**A Redux-first routing solution satisfies the following criteria**:

*   The location is held in the Redux store.
*   The location is changed by dispatching Redux actions.
*   The application reads location data solely from the store.
*   The store and browser history are kept in sync behind the scenes.

Here’s a basic idea of what that looks like:

<pre name="f5f1" id="f5f1" class="graf graf--pre graf-after--p">history  
   ↕  
 Redux → router → view</pre>

**Wait, aren’t there still two sources of location data?**

Yes, but if we can trust that the browser history and Redux store are in sync, we can build our applications to _only ever read location data from the store_. Then, from the application’s point of view, there’s only one source of truth — the store.

**How do we accomplish Redux-first routing?**

We can start by creating a conceptual model, by merging the foundational elements of the client-side routing and Redux data lifecycle models.

### Revisiting the Client-Side Routing Model






















Client-side routing is a multi-step process that starts with _navigation_ and ends with _rendering_ — _routing_ itself is only one step in that process! Let’s review the details:

*   **Navigation** — Everything starts with a change in location. There are 2 types of navigation: _internal_ and _external_. Internal navigation is accomplished from within the app (eg. via the History API), while external navigation occurs when the user interacts with the browser’s navigation bar or enters the application from an external site.
*   **Responding to navigation** — When the location changes, the application responds by passing the new location to the router. Older routing techniques relied on polling `window.location` to accomplish this, but nowadays we have the handy `[history.listen](https://github.com/ReactTraining/history#listening)` utility.
*   **Routing** — Next, the new location is matched to its corresponding page content. The code that handles this step is called a _router_, and it generally takes an input parameter of matching routes and pages called a _route configuration._
*   **Rendering** — Finally, the content is rendered on the client. This step may, of course, be handled by a front-end framework/library like React.

Note that routing libraries don’t have to handle _every_ part of the routing model.

Some libraries, like React Router and [Vue Router](https://github.com/vuejs/vue-router), _do_ — while others, like [Universal Router](https://github.com/kriasoft/universal-router), are concerned solely with a single aspect (like _routing)_, thus providing flexibility in the other aspects:












Routing libraries may have different scopes of responsibility. (Click to enlarge)



### Revisiting the Redux Data Lifecycle Model






















Redux boasts a one-way data flow/lifecycle model that likely needs no introduction — but here’s a brief overview for good measure:

*   **Action** — Any change in state starts by dispatching a Redux action (a plain object containing a `type` and optional payload).
*   **Middleware** — The action passes through the store’s chain of middlewares, where actions may be intercepted and additional behaviour may be executed. Middlewares are commonly used to handle side-effects in Redux applications.
*   **Reducer** — The action then reaches the root reducer, which calculates the store’s next state as a pure function of the previous state and the received action. The root reducer may be composed of individual reducers that each handle a slice of the store’s state.
*   **New state **— The store saves the new state returned by the reducer, and notifies its [subscribers](http://redux.js.org/docs/api/Store.html#subscribe) of the change (in React, via `[connect](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options)`).
*   **Rendering** — Finally, the store-connected view may re-render in accordance with the new state.

### Building a Redux-First Routing Model






















The unidirectional nature of the client-side routing and Redux data lifecycle models lend themselves well to a merged model that satisfies the criteria we laid out for Redux-first routing.

In this model, the router is subscribed to the store, navigation is accomplished via Redux actions, and updates to the browser history are handled by a custom middleware. Let’s examine the details of this model:

*   **Internal navigation via Redux actions** — Instead of using the History API directly, internal navigation is achieved by dispatching one of 5 _navigation actions_ that mirror the history navigation methods.
*   **Updating the browser history via middleware** — A middleware is used to intercept the navigation actions and handle the side-effect of updating the browser history. Since the new location isn’t necessarily or easily known without first consulting the browser history (eg. in the case of a `go` action), the navigation actions are prevented from reaching the reducer.
*   **Responding to navigation** — The flow of execution continues with a `history` listener that responds to navigation (from both the middleware _and_ external navigation) by dispatching a _second action_ that _does_ contain the new location.
*   **Location Reducer** — The action dispatched by the listener then reaches the location reducer, which adds the location to the store. The location reducer also determines the _shape_ of the location state.
*   **Connected routing** — The store-connected router can then reactively determine the new page content when notified of a change in location in the store.
*   **Rendering** — Finally, the page may be re-rendered with the new content.

Note that this isn’t the _only_ way to accomplish Redux-first routing — some [variations](https://github.com/mksarge/redux-first-routing#credits) feature the use of a store enhancer and/or additional logic in the middleware — but it’s a simple model that covers all of the bases.

### A Basic Implementation














Following the model we just looked at, let’s implement the core API — the actions, middleware, listener, and reducer.

We’ll use the `history` package as an internal dependency, and build the solution incrementally. If you’d rather follow along with the final result, you may view it [here](https://gist.github.com/mksarge/d02e8d14a5496dc98d4dde60dbebbf3c).

#### Actions

We’ll start by defining the 5 navigation actions that mirror the history navigation methods:

<pre name="070b" id="070b" class="graf graf--pre graf-after--p">**// constants.js**  
export const PUSH = 'ROUTER/PUSH';  
export const REPLACE = 'ROUTER/REPLACE';  
export const GO = 'ROUTER/GO';  
export const GO_BACK = 'ROUTER/GO_BACK';  
export const GO_FORWARD = 'ROUTER/GO_FORWARD';</pre>

<pre name="a756" id="a756" class="graf graf--pre graf-after--pre">**// actions.js**  
export const push = (href) => ({  
  type: PUSH,  
  payload: href,  
});</pre>

<pre name="bb7f" id="bb7f" class="graf graf--pre graf-after--pre">export const replace = (href) => ({  
  type: REPLACE,  
  payload: href,  
});</pre>

<pre name="ef28" id="ef28" class="graf graf--pre graf-after--pre">export const go = (index) => ({  
  type: GO,  
  payload: index,  
});</pre>

<pre name="a8c3" id="a8c3" class="graf graf--pre graf-after--pre">export const goBack = () => ({  
  type: GO_BACK,  
});</pre>

<pre name="6a12" id="6a12" class="graf graf--pre graf-after--pre">export const goForward = () => ({  
  type: GO_FORWARD,  
});</pre>

#### Middleware

Next, let’s define the middleware. It should intercept the navigation actions, call the corresponding `history` navigation methods, then stop the action from reaching the reducer — but leave all other actions undisturbed:

<pre name="7a82" id="7a82" class="graf graf--pre graf-after--p">**// middleware.js**  
export const routerMiddleware = (history) => () => (next) => (action) => {  
  switch (action.type) {  
    case PUSH:  
      history.push(action.payload);  
      break;  
    case REPLACE:  
      history.replace(action.payload);  
      break;  
    case GO:  
      history.go(action.payload);  
      break;  
    case GO_BACK:  
      history.goBack();  
      break;  
    case GO_FORWARD:  
      history.goForward();  
      break;  
    default:  
      return next(action);  
  }  
};</pre>

If you haven’t had the chance to write or examine the internals of a Redux middleware before, check out [this introduction](http://redux.js.org/docs/advanced/Middleware.html).

#### History Listener

Next, we’ll need a `history` listener that responds to navigation by dispatching a _new_ action containing the new location information.

First, let’s add the new action type and creator. The interesting parts of the location are the `pathname`, `search`, and `hash` — so that’s what we’ll include in the payload:

<pre name="e4e5" id="e4e5" class="graf graf--pre graf-after--p">**// constants.js**  
export const LOCATION_CHANGE = 'ROUTER/LOCATION_CHANGE';</pre>

<pre name="8a57" id="8a57" class="graf graf--pre graf-after--pre">**// actions.js** export const locationChange = ({ pathname, search, hash }) => ({  
  type: LOCATION_CHANGE,  
  payload: {  
    pathname,  
    search,  
    hash,  
  },  
});</pre>

Then let’s write the listener function:

<pre name="f3b3" id="f3b3" class="graf graf--pre graf-after--p">**// listener.js** export function startListener(history, store) {  
  history.listen((location) => {  
    store.dispatch(locationChange({  
      pathname: location.pathname,  
      search: location.search,  
      hash: location.hash,  
    }));  
  });  
}</pre>

We’ll make one small addition — an initial `locationChange` dispatch, to account for the initial entry into the application (which doesn’t get picked up by the history listener):

<pre name="8d0c" id="8d0c" class="graf graf--pre graf-after--p">**// listener.js** export function startListener(history, store) {  
  store.dispatch(locationChange({  
    pathname: history.location.pathname,  
    search: history.location.search,  
    hash: history.location.hash,  
  }));</pre>

<pre name="b8c1" id="b8c1" class="graf graf--pre graf-after--pre">  history.listen((location) => {  
    store.dispatch(locationChange({  
      pathname: location.pathname,  
      search: location.search,  
      hash: location.hash,  
    }));  
  });  
}</pre>

#### Reducer

Next, let’s define the location reducer. We’ll use a simple state shape, and do minimal work in the reducer:

<pre name="1a38" id="1a38" class="graf graf--pre graf-after--p">**// reducer.js**  
const initialState = {  
  pathname: '/',  
  search: '',  
  hash: '',  
};</pre>

<pre name="34ca" id="34ca" class="graf graf--pre graf-after--pre">export const routerReducer = (state = initialState, action) => {  
  switch (action.type) {  
    case LOCATION_CHANGE:  
      return {  
        ...state,  
        ...action.payload,  
      };  
    default:  
      return state;  
  }  
};</pre>

#### Application Code

Finally, let’s hook up our API into the application code:

<pre name="f676" id="f676" class="graf graf--pre graf-after--p">**// index.js**  
import { combineReducers, applyMiddleware, createStore } from 'redux'  
import { createBrowserHistory } from 'history'  
import { routerReducer } from './reducer'  
import { routerMiddleware } from './middleware'  
import { startListener } from './listener'  
import { push } from './actions'</pre>

<pre name="f65a" id="f65a" class="graf graf--pre graf-after--pre">**// Create the history object**  
const history = createBrowserHistory()</pre>

<pre name="d5bb" id="d5bb" class="graf graf--pre graf-after--pre">**// Build the root reducer**  
const rootReducer = combineReducers({  
  // ...otherReducers,  
  router: routerReducer,  
})  

**// Build the middleware** const middleware = routerMiddleware(history)</pre>

<pre name="7d95" id="7d95" class="graf graf--pre graf-after--pre">**// Create the store**  
const store = createStore(rootReducer, {}, applyMiddleware(middleware))</pre>

<pre name="04a6" id="04a6" class="graf graf--pre graf-after--pre">**// Start the history listener**  
startListener(history, store)</pre>

<pre name="21b0" id="21b0" class="graf graf--pre graf-after--pre">**// Now you can read location data from the store!**  
let currentLocation = store.getState().router.pathname</pre>

<pre name="da42" id="da42" class="graf graf--pre graf-after--pre">**// You can also subscribe to changes in the location!**  
let unsubscribe = store.subscribe(() => {  
  let previousLocation = currentLocation  
  currentLocation = store.getState().router.pathname</pre>

<pre name="ff1a" id="ff1a" class="graf graf--pre graf-after--pre">  if (previousLocation !== currentLocation) {  
    **// You can render your application reactively here!**  
  }  
})</pre>

<pre name="7770" id="7770" class="graf graf--pre graf-after--pre">**// And you can dispatch navigation actions from anywhere!**  
store.dispatch(push('/about'))</pre>

And that’s all there is to it! Using our tiny (under 100 lines of code) API, we’ve met all of the criteria for Redux-first routing:

*   The location is held in the Redux store. ✔
*   The location is changed by dispatching Redux actions. ✔
*   The application reads location data solely from the store. ✔
*   The store and browser history are kept in sync behind the scenes. ✔

[View all the files together here](https://gist.github.com/mksarge/d02e8d14a5496dc98d4dde60dbebbf3c) — feel free to import them into your project, or use it as a starting point to develop your own implementation.

#### The redux-first-routing package

I’ve also put the API together into the `[redux-first-routing](https://github.com/mksarge/redux-first-routing)` package, which you may `npm install` and use in the same way.

[**mksarge/redux-first-routing**  
_redux-first-routing — A minimal, framework-agnostic base for accomplishing Redux-first routing._github.com](https://github.com/mksarge/redux-first-routing "https://github.com/mksarge/redux-first-routing")[](https://github.com/mksarge/redux-first-routing)

It includes an implementation similar to the one we built here, but with the notable addition of query parsing via the `[query-string](https://github.com/sindresorhus/query-string)` package.

**Wait — what about the actual routing component?**

You may have noticed that `redux-first-routing` is only concerned with the navigational aspect of the routing model:














By decoupling the navigational aspect from the other aspects of our routing model, we’ve gained some flexibility — `redux-first-routing` is both _router-agnostic_, and _framework-agnostic_.

You can therefore pair it with a library like Universal Router to create a complete Redux-first routing solution for any front-end framework:












[Click here to get started with redux-first-routing + universal-router](https://github.com/kriasoft/universal-router/issues/99).



Or, you could build opinionated bindings for your framework of choice — and that’s what we’ll do for React in the next and final section of this article.

### Usage with React














Let’s finish our exploration by looking at how we might build store-connected components for declarative navigation and routing in React.

#### Declarative Navigation

For navigation, we can use a store-connected `<Link/>` component similar to [the one in React Router](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/modules/Link.js) and [other React routing solutions](https://github.com/kriasoft/react-static-boilerplate/blob/master/components/Link/Link.js).

It simply overrides the default behaviour of anchor element `` and dispatches a `push` action when clicked:

<pre name="6b09" id="6b09" class="graf graf--pre graf-after--p">**// Link.js** import React from 'react';  
import { connect } from 'react-redux';  
import { push as pushAction, replace as replaceAction } from './actions';</pre>

<pre name="76ea" id="76ea" class="graf graf--pre graf-after--pre">const Link = (props) => {  
  const { to, replace, children, dispatch, ...other } = props;</pre>

<pre name="4cac" id="4cac" class="graf graf--pre graf-after--pre">  const handleClick = (event) => {  
    // Ignore any click other than a left click  
    if ((event.button && event.button !== 0)  
      || event.metaKey  
      || event.altKey  
      || event.ctrlKey  
      || event.shiftKey  
      || event.defaultPrevented === true) {  
      return;  
    }  

    // Prevent the default behaviour (page reload, etc.)  
    event.preventDefault();</pre>

<pre name="21ce" id="21ce" class="graf graf--pre graf-after--pre">    // Dispatch the appropriate navigation action  
    if (replace) {  
      dispatch(replaceAction(to));  
    } else {  
      dispatch(pushAction(to));  
    }  
  };</pre>

<pre name="d173" id="d173" class="graf graf--pre graf-after--pre">  return (  
      
      {children}  
    );  
};</pre>

<pre name="2c60" id="2c60" class="graf graf--pre graf-after--pre">export default connect()(Link);</pre>

You may find a more complete implementation [here](https://gist.github.com/mksarge/a22c809cdd5698aeb4f57c009a3a4933).

#### Declarative Routing

While there’s not much to a navigational component, there are countless ways to design a routing component — making it the most interesting part of any routing solution.

**What _is_ a router, anyway?**

You can generally view a router as a function or black box with two inputs and one output:

<pre name="8fbe" id="8fbe" class="graf graf--pre graf-after--p">route configuration ↘  
                      matched content  
  current location  ↗</pre>

Though the routing and subsequent rendering may occur in separate steps, React makes it easy and intuitive to bundle them together into a declarative routing API. Let’s look at two strategies for accomplishing this.

**Strategy 1: A monolithic** `**<Router/>**` **component**

We can use a monolithic, store-connected `<Router/>` component that:

*   accepts a route configuration object via props
*   reads the location data from the Redux store
*   calculates the new content whenever the location changes
*   renders/re-renders the content as appropriate.

The route configuration may be a plain JavaScript object that contains all of the matching paths and pages (a _centralized_ route configuration).

Here’s how this might look:

<pre name="79b6" id="79b6" class="graf graf--pre graf-after--p">const routes = [  
  {  
    path: '/',  
    page: './pages/Home',  
  },  
  {  
    path: '/about',  
    page: './pages/About',  
  },  
  {  
    path: '*',  
    page: './pages/Error',  
  },  
]</pre>

<pre name="0b8b" id="0b8b" class="graf graf--pre graf-after--pre">React.render(  
  <Provider store={store}>  
    <Router routes={routes}>  
  </Provider>,  
  document.getElementById('app'))</pre>

Pretty simple, right? No need for nested JSX routes — just a single route configuration object, and a single router component.

If this strategy is appealing to you, check out my more complete implementation in the `[redux-json-router](https://github.com/mksarge/redux-json-router)` library. It wraps `redux-first-routing` and provides React bindings for declarative navigation and routing using the strategies we’ve examined so far.

[**mksarge/redux-json-router**  
_redux-json-router - Declarative, Redux-first routing for React/Redux browser applications._github.com](https://github.com/mksarge/redux-json-router "https://github.com/mksarge/redux-json-router")[](https://github.com/mksarge/redux-json-router)

**Strategy 2: Composable** `**<Route/>**` **components**

While a monolithic component may be a _simple_ way to achieve declarative routing in React, it’s definitely not the _only_ way.

The composable nature of React allows another interesting possibility: using JSX to define routes in a _decentralized_ manner. Of course, the prime example is React Router’s `<Route/>` API:

<pre name="b1d2" id="b1d2" class="graf graf--pre graf-after--p">React.render(  
  <BrowserRouter>  
    <Route path='/' component={Home}/>  
    <Route path='/about component={About}/>  
    ...  
  </BrowserRouter></pre>

[Other routing libraries](https://github.com/FormidableLabs/redux-little-router#fragment) explore this idea too. While I haven’t had the chance do it, I don’t see any reason why a similar API couldn’t be implemented on top of the `redux-first-routing` package.

Instead of relying on location data provided by `<BrowserRouter/>`, the `<Route/>` component could simply `connect` to the store:

<pre name="757c" id="757c" class="graf graf--pre graf-after--p">React.render(  
  <Provider store={store}>  
    <Route path='/' component={Home}/>  
    <Route path='/about component={About}/>  
    ...  
  </Provider></pre>

If that’s something that you’re interested in building or using, let me know in the comments! To learn more about different route configuration strategies, check out [this](https://reacttraining.com/react-router/web/guides/philosophy) introduction on React Router’s website.











* * *







### Conclusion

I hope this exploration has helped deepen your knowledge about client-side routing and has shown you how simple it is to accomplish it the Redux way.

If you’re looking for a complete Redux routing solution, you can use the `[redux-first-routing](https://github.com/mksarge/redux-first-routing)` package with a compatible router listed in the readme. And if you find yourself needing to develop a tailored solution, hopefully this post has given you a good starting point for doing so.

If you’d like to learn more about client-side routing in React and Redux, check out the following articles — they were instrumental in helping me better understand the topics I covered here:

*   [**Let The URL Do The Talking**](https://formidable.com/blog/2016/07/11/let-the-url-do-the-talking-part-1-the-pain-of-react-router-in-redux/) by Tyler Thompson
*   [**You Might Not Need React Router**](https://medium.freecodecamp.com/you-might-not-need-react-router-38673620f3d) by Konstantin Tarkus
*   [**Do I Even Need a Routing Library?**](http://jamesknelson.com/even-need-routing-library/) by James K. Nelson
*   and countless informative discussions in the `[react-router-redux](https://github.com/reactjs/react-router-redux)` issues.

Client-side routing is a space with endless design possibilities, and I’m sure some of you have played with ideas similar to the ones I’ve shared here. If you’d like to continue the conversation, I’ll be glad to connect with you in the comments or via [Twitter](https://twitter.com/michaelksarge). Thanks for reading!











* * *







_Edit 22/06/17: Also check out_ [_this article_](https://medium.com/faceyspacey/pre-release-redux-first-router-a-step-beyond-redux-little-router-cd2716576aea)on `_redux-first-router_`_, a separate project that uses intelligent action types to achieve powerful routing capabilities._








