---
author: Jeff Lowery
authorTwitter: https://twitter.com/jmlowery
authorFacebook: https://facebook.com/10209080625586279
title: "The road to Redux and back"
subTitle: "Why I decided to go back to vanilla React"
coverSrc: https://cdn-images-1.medium.com/max/1600/1*6nDsYMnrssuV8maqVFMvvQ.png
url: https://medium.freecodecamp.org/the-road-to-redux-and-back-d9987c7bb894
id: the-road-to-redux-and-back-d9987c7bb894
date: 2017-08-05T21:48:28.595Z
tags: [
  "React",
  "Redux",
  "JavaScript",
  "Web Development",
  "Technology"
]
---
# The road to Redux and back

## _Why I decided to go back to vanilla React_



![](https://cdn-images-1.medium.com/max/1600/1*6nDsYMnrssuV8maqVFMvvQ.png)



I’ve done some prototype work to demonstrate the benefits of a data access layer between client logic and persistence. Along the way, I’ve become a big fan of GraphQL. Though I like React, it was not the low(er)-code approach I had hoped it would be (though, hey: no jQuery!). I tried mixing in Redux to simplify coding further, but there were disappointments there as well.

React is conceptually simple: a component may contain _state_ and receive _props_. React will monitor changes in state and will re-render that component and _any child components_ that might be affected by the state change. State is passed to children though props (element attributes). Some built-in React component methods are called in the process, each of which may be overridden as needed (to avoid, say, unnecessary re-renders).

One of the first resources I turned to when learning React was [Bucky Robert’s series](https://www.youtube.com/watch?v=4ZAEBxGipoA). Bucky does a good job in explaining concepts simply and informally. You get the gist of how React works, which is what you need when getting started.

Thus forearmed, I wrote some React code. At first this went very well. Yet as my hierarchy of components grew more complex, tracking the relationship hierarchy of each component, along with all the props being passed, became confusing.



![](https://cdn-images-1.medium.com/max/1600/1*1GNf7b6-Sxfplj_Rs1wovw.png)

Are  in the same container? What about <nav>?



When learning React, it helps to make a clear distinction between **presentational components** and **container components**_._ Presentational components are the elements shown on the page. Container components are the components that maintain state for their child components. Container Components may be presentational, container, or both. Containers are smart and have state logic. Presentation components are dumb and are mostly templated HTML that handle the presentation of passed-in props.

At first, it can be hard to see what components influence each other and share state and thus need to belong in the same container. You will need to shuffle around state and redo the property passing, as it becomes clearer what components are to work together. This is what is what is referred to as “[refactoring](http://erikaybar.name/refactoring-react-extracting-layout-components/)”.

### Props, props, and more props

All changes go through properties. Most tutorials show this by passing each prop by name from the root container component on down through all the children, where each child component picks the properties it wants and ignores the rest.

Let’s take an example from React’s own docs:

<pre name="57a8" id="57a8" class="graf graf--pre graf-after--p">function Welcome(props) {  
  return <h1>Hello, {props.name}</h1>;  
}</pre>

<pre name="6901" id="6901" class="graf graf--pre graf-after--pre">function App() {  
  return (  
      
      <Welcome name="Cahal" />  
      <Welcome name="Edite" />  
      
  );  
}</pre>

The **Welcome** component takes a set of properties or props. It uses the prop called **name** to display a personalized welcome message. The containing component is an anonymous function Welcome(props) {  
  return Hello, {props.first_name} {props.last_name}</h1>  
     <ul>  
       <li> email: {props.email} </li>  
       <li> phone: {props.phone} </li>  
       <li> address: /* mercifully omitted */ </li>  
     </ul>  
  ;  
}</pre>

<pre name="4bf9" id="4bf9" class="graf graf--pre graf-after--pre">function App() {  
  return (  
      
      <Welcome first_name="Cahal" last_name="Murthi" email="...", phone="...", address={/*address object*/}/>  
      <Welcome first_name="Edite" last_name="Franco" email="...", phone="...", address={/*address object*/}/>  
      
  );  
}</pre>

Explicitly passing props is noisy. What’s more, if the Welcome component is a composite of several other components, each with their own set of needed properties, you have to pass those to the Welcome component, too.

Props are not only data, but methods as well. Props are **immutable** by convention.

If any child wants to change a property, it should be done via a passed-in set method from some container that holds state. The child calls the state set method, updates the state and generates new prop values. Then each child is notified of the property changes. The child that’s doing the state mutation doesn’t know which container holds the state, but doesn’t need to. It calls the set method it is given from some anonymous parent container.

Here’s another example from the React docs:

<pre name="b7c0" id="b7c0" class="graf graf--pre graf-after--p">class Toggle extends React.Component {  
  constructor(props) {  
    super(props);  
    this.state = {isToggleOn: true};</pre>

<pre name="282b" id="282b" class="graf graf--pre graf-after--pre">// This binding is necessary to make `this` work in the callback  
    this.handleClick = this.handleClick.bind(this);  
  }</pre>

<pre name="4106" id="4106" class="graf graf--pre graf-after--pre">handleClick() {  
    this.setState(prevState => ({  
      isToggleOn: !prevState.isToggleOn  
    }));  
  }</pre>

<pre name="fb72" id="fb72" class="graf graf--pre graf-after--pre">render() {  
    return (  
      <button onClick={this.handleClick}>  
        {this.state.isToggleOn ? 'ON' : 'OFF'}  
      </button>  
    );  
  }  
}</pre>

<pre name="86c5" id="86c5" class="graf graf--pre graf-after--pre">ReactDOM.render(  
  <Toggle />,  
  document.getElementById('root')  
);</pre>

Although in this case the button has direct access to the state, the common case is that state is passed as properties to child Button presentational component, with an additional set method to change isToggleOn in this component’s state.

<pre name="de89" id="de89" class="graf graf--pre graf-after--p">handleClick() {  
    this.setState(prevState => ({  
      isToggleOn: !prevState.isToggleOn  
    }));  
  }</pre>

<pre name="7324" id="7324" class="graf graf--pre graf-after--pre">render() => <Button   
onclick=handleClick.bind(this)  
isToggleOn=this.state.isToggleOn />;</pre>

<pre name="3901" id="3901" class="graf graf--pre graf-after--pre">ReactDOM.render(  
  <Toggle />,  
  document.getElementById('root')  
);</pre>

### Arrggh, refactoring

So you do all this property propagation through all the child components and everything is beautiful. Then you add one more component, and realize that it relies on some state that is not in the container you want to put the new component in.

Let’s start with a simple List and Details application:



![](https://cdn-images-1.medium.com/max/1600/1*2Xa8B1CLDHUJJu9hXbJYrQ.png)

As I choose items in the List, it updates Details (I am not a Web Designer)



As items are chosen in the List, notification is sent to the Container via a mutator that was sent as a prop, and the Container’s state is changed. This causes both List and Details to re-render. Details get notified of the item selected in the List as part of that re-render operation, and updates with new item information.

Now we later decide that we want to add a Filter to the List. We add a new container to manage the Filter state such as a radio control. When a Filter is changed, it updates the Subcontainer’s state, which causes the List to re-render. The outermost container now contains the Subcontainer instead of the List. It still contains the Details component, but the state management of the selected List item remains the same. The Container knows nothing of Filter.



![](https://cdn-images-1.medium.com/max/1600/1*GZhhXvU_53CYIf-Bx5EupA.png)

Adding a Filter and new Subcontainer



Nothing much as changed. The Container now has a Subcontainer rather than a List, but the same props are passed to the new child component. Each container has its own state that it manages.

However… later on we realize that knowing which Filter is applied will affect what Details we display, but because Filter is a sibling to Details, Details will have no access to the state of the Filter. So now the choice is:

1.  have the List items contain information about what they are filtered by
2.  push the Filter state up from the Subcontainer to the Container

This is the React refactoring. Anything that shares state has to be in the same container (at some level). There’s nothing wrong with the concept, but you never get it right the first time. Nor do components stay in one place for very long as the application evolves.

#### Carrying Water

Containers are facilitators, passing knowledge between child components. When the facts change, the components get redrawn. But they are nosey as well as noisy facilitators. They know everything about what their children are interested in, but that doesn’t make them good parents. [I’ve written about this before](https://medium.com/@jefflowery/carrying-water-4dee1ddb7eae), where such knowledge is not always a good thing.

### Solution 1: Redux

One solution is to not have so many states. Why not just have one? Well, if you recall, every change in state will notify children that some property has changed. It’s up to the child component to know if that property affects what they are displaying. But the notification is sent regardless.

Rather than the container assuming it knows about which properties are passed to children, why not have an inversion-of-control where children say which properties they’re interested in, and so subscribe to those state changes and those state changes only.

#### One state to rule them all

So that’s where Redux comes in. It provides all components with only one state, maintained independently of, but accessible by, all React components.

Redux introduces several new pieces. First is the state container, called the Store. The Store is connected to your app via a Provider. These two are “set and forget”. Once a few lines of code is written, you never touch it again.

<pre name="36a7" id="36a7" class="graf graf--pre graf-after--p">import React from 'react'  
import ReactDOM from 'react-dom'  
import { createStore } from 'redux'  
import { Provider } from 'react-redux'  
import RootReducer from './app/reducers'  
import App from './app/app'</pre>

<pre name="8f5a" id="8f5a" class="graf graf--pre graf-after--pre">const store = createStore(RootReducer)</pre>

<pre name="52c3" id="52c3" class="graf graf--pre graf-after--pre">ReactDOM.render(  
  <Provider store={store}>  
    <App />  
  </Provider>,  
  document.getElementById('root')  
)</pre>

The other two parts are a little more involved: Actions and Reducers. An event such as a keystroke or database query result creates an Action. The Action is then dispatched to be handled by some Resolver, based on the Action type. If you read [my previous series](https://medium.freecodecamp.org/follow-the-rules-with-seneca-b3cf3d08fe5d) on Seneca microservices, you will notice how Redux Actions are similar to Seneca patterns, and Reducers are similar to Seneca Actions.

Reducers, once triggered, will modify Redux State according to data in the Action message. So a component can kickoff an Action which might invoke a database query or file fetch or whatever, the results of which are attached to the Action as payload and then dispatched to the cloud of Reducers, one of which will (hopefully) pick up where the Action left off and modify part of the State so that components listening to parts of it have the opportunity to be re-rendered.

There is no passing of props from containers to children, but props are still involved.

<pre name="69a9" id="69a9" class="graf graf--pre graf-after--p">import { connect } from 'react-redux'  
import { setVisibility } from '../actions'  
import Popup from '../components/Popup'  
const mapStateToProps = (state, ownProps) => {  
  return {  
    active: ownProps.toggle === state.visibilityToggle  
  }  
}  
const mapDispatchToProps = (dispatch, ownProps) => {  
  return {  
    onClick: () => {  
      dispatch(setVisibility(ownProps.toggle))  
    }  
  }  
}  
const Toggle = connect(  
  mapStateToProps,  
  mapDispatchToProps  
)(Popup)  
export default Toggle</pre>

In the above, a Popup component is tied to State via property mappings using Redux API methods mapDispatchToProps and mapStateToProps. This code would most likely be included in a container of the Popup component. More on that later.

The traditional way this is organized is that you have Actions in an **/actions** folder. Usually an index.js is in that folder which imports all the actions so that they can be imported in one line in the dependents that need them. Reducers are in a **/reducers** folder. Components are in a **/components** folder or split between “presentational” **/components** and **/containers.** And the app will be in the root folder.

#### All this wiring, though

So you wind up with action files with constants that identify the Actions in the file, and Reducers that use those constants to receive and handle Action types. Every component dealing with state is wired to fire those actions, along with properties that are affected by state change.

That’s all very well and good, until you start building components and things don’t work right and you wonder stuff like:

*   Did I remember to define the action?
*   Did I remember to export the action?
*   Did I define the reducer?
*   Did I include the action constant in my component?
*   Did I import it into my reducer?
*   Did I make a typo?
*   What was the name of that file that had that thing that I forgot now?

Yeesh! You wind up doing a lot of grepping through your code, assuming you can remember what it is you’re grepping for. One solution to the problem [is to make Actions and Reducers co-local](https://medium.com/@TuckerConnelly/simplifying-redux-architecture-cd50426c941a). They are codependent, so defining both in a common file makes sense.

### Solution 2: Back to React with ES6

As I started to get a handle on Redux, I noticed others using some techniques that, had I thought of them at the time, would have made dealing with vanilla React a lot easier. So, with Redux being no less low-code than React alone (remember, I’m just working on a simple prototype), I dump Redux.

#### Spread and rest

In [Carrying Water,](https://medium.com/@jefflowery/carrying-water-4dee1ddb7eae) I mention the difference between active and passive carrying of data-in-transit. The former is bad, but the latter is acceptable, because it avoids tight coupling. Data is merely passed-through to the intended recipient. It’s the difference between the Post Office opening a package and re-packaging everything in it in their own packages, versus just sending the one package on its way.

[By using the object spread operator](https://zhenyong.github.io/react/docs/transferring-props.html), it is possible to pass properties along to children without explicit reference to the properties themselves. While this still “carries water” from container to subcomponents, it does so in an implicit way. All the container knows is it has props to send down. If it has state, it sends those down, too.

It should be mentioned, though, that the spread operator for objects is not yet an official part of ECMAScript. The Babel transpiler supports it, if it is configured to do so.

<pre name="4b3d" id="4b3d" class="graf graf--pre graf-after--p">{  
 "presets": [  
  "latest",  
  "react"  
 ],  
 "plugins": ["transform-object-rest-spread", "syntax-object-rest-spread"]  
}</pre>

#### Picking off properties

One concern is that of passing too much information down to child components. One way to avoid that is for higher-up containers and components to “pick off” the properties they are interested in, and only pass down the rest. This can be done through object destructuring:

<pre name="b65c" id="b65c" class="graf graf--pre graf-after--p">var { checked, ...other } = props;</pre>

Here, the prop checked is pulled from the other props, and then other is passed down (without the checked prop [example from [the link](https://zhenyong.github.io/react/docs/transferring-props.html) above]):

<pre name="4f2f" id="4f2f" class="graf graf--pre graf-after--p">function FancyCheckbox(props) {  
  var { checked, ...other } = props;  
  var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';  
  // `other` contains { onClick: console.log } but not the checked property  
  return (  
      
  );  
}  

</pre>

### React or Redux?

When building a prototype to demonstrate some concept or feature, simpler is better. React is conceptually easier to deal with. Redux has a lot going on under the hood, and it has been noted how fine-grained the actions can become. Need to show a spinner? Fire off an action!).

Tooling surrounding Redux [is improving](http://dev.apollodata.com/react/redux.html), and [will simplify](https://github.com/anshulsahni/simplify-redux) the overhead of maintaining actions, reducers, mapStateToProps, and matchDispatchToProps, by using [more declarative](https://github.com/nstraub/simple-react-redux) stitching together of the pieces and using implicit rules for mundane wiring.








