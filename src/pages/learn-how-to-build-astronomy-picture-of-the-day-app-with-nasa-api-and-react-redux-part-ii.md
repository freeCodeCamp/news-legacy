---
author: Indrek Lasn
authorTwitter: https://twitter.com/lasnindrek
authorFacebook: none
title: "Learn how to build an Astronomy Picture of the Day App with the NASA API and React + Redux (Part II)"
subTitle: "Aha! So you’re back! Good! We will be dedicating this whole chapter to Redux...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*h8UwBRQySOtTklrMnTy8Dw.png
url: https://medium.freecodecamp.org/learn-how-to-build-astronomy-picture-of-the-day-app-with-nasa-api-and-react-redux-part-ii-83f15970d0e3
id: learn-how-to-build-astronomy-picture-of-the-day-app-with-nasa-api-and-react-redux-part-ii-83f15970d0e3
date: 2017-08-17T11:36:33.942Z
tags: [
  "Redux",
  "JavaScript",
  "React",
  "Web Development",
  "NASA"
]
---
# **Learn how to build an Astronomy Picture of the Day App with the NASA API and React + Redux (Part II)**



![](https://cdn-images-1.medium.com/max/1600/1*h8UwBRQySOtTklrMnTy8Dw.png)



Aha! So you’re back! Good! We will be dedicating this whole chapter to [Redux](http://redux.js.org/).

[Here’s part I of this tutorial](https://codeburst.io/learn-how-to-build-astronomy-picture-of-the-day-app-with-nasa-api-and-react-redux-e462ef0c806c?source=user_profile---------3-----------).

Our plan is to refactor our React app to React+Redux. Currently React handles our state and we would like Redux to manage it instead.

What the buzz is Redux anyway? And why is it so important? As always, good question! From the docs:

> Redux is a predictable state container for JavaScript apps.

We let Redux to manage the s`tate` of our app and React to handle the presentation UI (User Interface). It decouples `state` responsibilities from React.

How does this work? Well follow me!







![](https://cdn-images-1.medium.com/max/2000/1*Or0o-_dFsZe1ahMAC2yLZQ.png)

**React + Redux diagram (**[**Image taken from here**](https://onsen.io/blog/content/images/2016/Jun/react_redux.png)**)**







### **Installing**

First, let’s install two dependencies.

**redux:**  
The actual Redux library which contains all the functionality.

**react-redux:**  
The glue for React and Redux.



![](https://cdn-images-1.medium.com/max/1600/1*a8ufrDCY9Z87hdsP_YSwig.png)



Great! Now we need to hook up our React app with Redux. We will be importing the `Provider` from `react-redux` and wrap our application inside the `Provider` tag. 😊



![](https://cdn-images-1.medium.com/max/1600/1*A2HzmhZ_MghyJCyoivgOaw.png)

**src/index.js**



### Creating the store

What is a store anyway? It’s a big part of the Redux terminology. A store is a big object`{}` which holds the state of our application. The store brings our `actions` and `reducers` together.

From the docs:

The store has the following responsibilities:

*   Holds application state;
*   Allows access to state via `[getState()](http://redux.js.org/docs/api/Store.html#getState)`;
*   Allows state to be updated via `[dispatch(action)](http://redux.js.org/docs/api/Store.html#dispatch)`;
*   Registers listeners via `[subscribe(listener)](http://redux.js.org/docs/api/Store.html#subscribe)`;
*   Handles unregistering of listeners via the function returned by `[subscribe(listener)](http://redux.js.org/docs/api/Store.html#subscribe)`.

The `Provider` expects exactly one prop. The `store` property. Let’s create our `Store.js` inside `src/` with the following code.

We import the `createStore` method from `redux` and pass our `rootReducer` as an argument.



![](https://cdn-images-1.medium.com/max/1600/1*PeZLoMuGJDL5k1CEvFc1lQ.png)

**src/Store.js**



Then we import it to our `src/index.js` file and add the prop to the `Provider` tag.



![](https://cdn-images-1.medium.com/max/1600/1*29nEE_jET70ZFtJXmIvGaw.png)

**src/index.js**



Then we Import the `Store` and pass it to the `Provider` as an prop.

Now if we look inside our browser we see will see a big red error. This is completely normal! Don’t be discouraged!

We haven’t made our `rootReducer` yet!







![](https://cdn-images-1.medium.com/max/2000/1*27JJN7wVk_X2f-3VCEtziQ.png)







### Reducers!

Reducers? What are those?

Reducers handle the logic that will happen to the `state`. Let’s say a user clicks a button, what happens next are the following steps:

1.  An `action type` called `"BUTTON_CLICKED"` launches off an `action` with the payload. The `action` returns a plain object.

2\. All `reducers` will be invoked. The `reducer` with the type `"BUTTON_CLICKED"` will be further invoked to return the new `state`. The payload is passed by the `action` . All reducers by default return the `state`.

3\. The `store` listens for any changes in the `reducers` and holds the new `state.`

4\. The `store` passes the **new** `**state**`to our React views.

5\. React updates the view.

Woah! A lot of jargon. It’s easier to understand it in action.

We made our `store` (number 3) and now we’re going for `reducers` (number 2).

You might ask, “Is this all necessary?”

No, it’s not necessary. You might even feel overwhelmed. But do not be discouraged. Redux is not as hard as you think once you understand all the jargon to it.

Shall we finish the Reducers part? Our `store` is desperately crying for it!

We are going to make a dedicated directory for the reducers called `src/reducers`. Inside the `reducers` directory make an `index.js` file.







![](https://cdn-images-1.medium.com/max/2000/1*z6xHzj_flXVTZ6iwHLhOUQ.png)

**src/reducers/index.js**







Inside the `src/reducers/index.js` we import `combineReducers` from Redux. `combineReducers` melts all of our reducers into one reducer.

Why do we need just one reducer? The `Store` counterpart accepts only one reducer as an argument, the `rootReducer.`

Now we have a constant called `rootReducer` which we export.

The `Store` accepts the `rootReducer` which we just exported. We’re good to go!



![](https://cdn-images-1.medium.com/max/1600/1*rNNTANO6mQiDXwNDvBpeEw.png)

**src/Store.js**



Do you wonder what our browser is saying now?







![](https://cdn-images-1.medium.com/max/2000/1*HYszGkyvONnj8o9-HbiBag.png)







**Another big red error!** Don’t be alarmed!

It’s just Redux trying to help you! If we read carefully, we see that we’re missing a reducer inside our `combineReducers` function.

Makes perfect sense. 😊

Let’s make our first real reducer now.



![](https://cdn-images-1.medium.com/max/1600/1*EfnGMN_Qiqptd6MigbsADQ.png)



Reducers have two arguments,

1.  The current `state` which we initially set to an empty `Object {}`
2.  An `action`

The reducer will always return the state.

Let’s import our `app_reducer.js` and pass it as an argument to the `combineReducer`.

As you probably know, we can [pass objects](https://stackoverflow.com/questions/7764536/pass-object-to-javascript-function) as arguments to a function.

Right now our state is called `astronomy.` Once we’ve called `mapStateToProps` our data will be inside `this.props.astronomy` in our “connected” components.



![](https://cdn-images-1.medium.com/max/1600/1*l2bLwDVFuAZPqQyx0l71oA.png)









![](https://cdn-images-1.medium.com/max/2000/1*hksIX6nYhuOeDMrEqYwa1w.png)







Yay! Our browser stopped showing red. We must be doing something right! You made it this far!

We have created our `store` and our `reducer` . Now we must create our `action` and finally wire it up with our React component.

It’s always important to see what problem we’re trying to solve, which is fetching the astronomy data from the NASA API.

We’re slowly but surely decoupling our state from React and letting Redux handle the state.

Next up: **Actions!**

If you’re interested on reading more about [Reducers](http://redux.js.org/docs/basics/Reducers.html).

#### Creating our actions!

The documentation has a great way explaining actions:

> **_Actions_** _are payloads of information that send data from your application to your store. They are the only source of information for the store._

As we did with reducers. Start off by making a new directory inside `src` called `actions.`

Inside the `actions` directory we’re going to have an file called `fetch_data.js`







![](https://cdn-images-1.medium.com/max/2000/1*UFNDTfZY1KMSDwxShNXZFg.png)







From top to bottom:

We import axios to fetch out data.

We have a function called `fetchData` which we export.

Inside the function we declared couple constants for our endpoints as we did earlier.

The action will return a plain object which contains the following:

1.  **Action type**  
    it’s for the reducer to recognize our action.
2.  **Payload**  
    in this case the data we fetched from the endpoint.

Now we need to wire it up with our React component. We can call the `action` as `this.props.fetchData()` and get our desired data.

I know this is a lot of hassle just to make a `GET` request. But learning Redux will make our applications much easier to reason about.

Now we need to install a dependency to resolve our `promise`.

Redux doesn’t know how to deal with [asynchronous](https://en.wikipedia.org/wiki/Asynchrony)actions . So we need to install [middleware](http://redux.js.org/docs/advanced/Middleware.html).

<pre name="23f9" id="23f9" class="graf graf--pre graf-after--p">$ yarn add redux-promise</pre>

The `store` accepts `middleware` and middleware enchants our app in the background.

### Applying Redux middleware







![](https://cdn-images-1.medium.com/max/2000/1*5m6I4918xCysl8IYWDWPSg.png)







Here we do three things:

1.  Import `applyMiddleware` from `'redux'.`
2.  Import `promise` from `'redux-promise'.`
3.  Pass a second argument inside our `createStore()` function.  
    The argument is called `applyMiddleware()` and it accepts any middleware. We pass our `promise` middleware inside the `applyMiddleware()` function.

### Back to Reducers for a jiffy!

We declared our action but our reducer knows nothing about it. Let’s fix that!

We’re going to add a `switch()` statement which checks what actions were fired off and act accordingly.







![](https://cdn-images-1.medium.com/max/2000/1*RjN_u0WZm7xC_6M5zz1GVA.png)







Actions and Reducers connect as default by Redux. We don’t need to glue them together.

Remember we had an action which returned an object with props?

One of those props was `type: ‘FETCH_DATA’.` In the reducer we are checking if the action fired off was indeed the type. If it is — we return a **new** `state`.

We are using the spread operator … . We pass our state inside a new array with the `action.payload` which is the request data.

**Remember**, we don’t mutate the state, mutating the state is anti pattern! Always return a newly made state.

Simple example:

### Bad (mutating the initial state)

<pre name="b265" id="b265" class="graf graf--pre graf-after--h3">case('FETCH_DATA'):  
  state = action.payload.data  
  return **state**;</pre>

Why bad? Because we’re assigning our existing `state` to a new **value**.

### Good (not mutating the initial state)

<pre name="354c" id="354c" class="graf graf--pre graf-after--h3">case 'FETCH_DATA':  
   const newState = Object.assign({}, ...state, action.payload.data)  
   return **newState**;</pre>

Why good? Because we’re making a new **object** containing the new `state` and the data.

For more on `[Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign).`

Our next step is the final step. We can wire it up with our React component! Yay! 😊

### Wiring Redux with our React views!

Okay you made it this far. There is a small push until we’re done.

Shall we clean our `AstronomyContainer.js`?



![](https://cdn-images-1.medium.com/max/1600/1*frWmjlS8GWk3IHTa0niMTA.png)

**src/components/AstronomyContainer.js**



Notice we cleaned up all the `state` inside our component? There is no `this.state` anymore!

This is exactly what you would want in a Redux application.

With the help of a special function called `connect()` we can literally connect (pun intended) **React** with **Redux**.







![](https://cdn-images-1.medium.com/max/2000/1*Bdk0cFLrAh1ICANDxHUp4A.png)

**src/components/AstronomyContainer.js**







Import the `connect` method from `react-redux` and at the bottom export the method. `Connect()` accepts two arguments, `mapStateToProps` and `mapDispatchToProps`

**mapStateToProps**   
Does exactly what it says. It maps the redux state to react props.

**mapDispatchToProps** Converts our redux actions into react props.

Why is our first argument inside the `connect` a `null`?

The `connect` method expects a `mapStateToProps` function to be passed. But we haven’t written it yet. So we pass a **temporary** `null.`

#### mapStateToProps

`mapStateToProps` is a special function which maps Redux state to React props. In this case we fetch the data and from the container and pass it down to a child via `props`.

#### mapDispatchToProps

`mapDispatchToProps` lets us map our actions to `props`. In this case it is fetching our data.







![](https://cdn-images-1.medium.com/max/2000/1*_GvGRQTNM-5EQikqHh0tNw.png)

Implementing mapStateToProps







This function returns an object. It takes the current `state` as an argument and maps the prop to `astronomy` from our reducer.

Inside **src/reducers/index.js** we had the `astronomy` reducer. We’re just mapping our props to it.

<pre name="485f" id="485f" class="graf graf--pre graf-after--p">const rootReducer = combineReducers({  
 astronomy: AppReducer  
})</pre>

Let’s test if it our `this.props.astronomy` works. It should show an empty object.







![](https://cdn-images-1.medium.com/max/1200/1*sESn0Evno9T4-NUN96XBeg.png)





![](https://cdn-images-1.medium.com/max/1200/1*66suIGD_yz82uQkou_jjLg.png)

Console logging our **this.props.astronomy**







Can’t remember why it’s an empty object? No problem, Redux is pretty overwhelming at the beginning.

It’s pretty simple actually. Remember in our reducer we had to set a default `state` which we set to an empty object? It’s exactly returning this empty object since we haven’t made an action yet. In this case it is fetching the data.

<pre name="c378" id="c378" class="graf graf--pre graf-after--p">export default function(state = {}, action) {  
 return state;  
}</pre>

### Final step! Implementing actions (fetching our data)

Last step! Don’t give up, you can do this! Implementing actions is rather quite straight-forward.

**Quick reminder**: Our action is located in `src/actions/fetch_data.js`— Inside the file is a function called `fetchData()` which does a `GET` request.

Here’s three things we need to do to call our `action` and finally get our data.

1.  Import the action from `src/actions/fetch_data.js.`
2.  Pass our action as an argument inside the `connect` function.
3.  Call the action inside a React `lifecycle` method. In this case it is `ComponentWillMount()`.

Alright, let’s get cracking!







![](https://cdn-images-1.medium.com/max/1200/1*oXYuna2EH_ppDvzKSIBWLw.png)





![](https://cdn-images-1.medium.com/max/1200/1*ayBnIxd_bgfMTKCGXqYtcA.png)







Phew! That’s it! You made it! Take a look at your browser now!







![](https://cdn-images-1.medium.com/max/2000/1*cxST-7LL4ld-o8Jhv3Ol-w.png)





![](https://cdn-images-1.medium.com/max/2000/1*uTvdobUnM-O_lkj02SCERw.png)







It works! Well done! You successfully managed to refactor your app to using Redux.

Notice how there’s no `this.state` inside our React? We let Redux handle our state!

Thanks for making it to the end! You learned about Redux, Reducers, `Actions`, `Store,` `Provider`, `Middleware`, `mapStateToProps()`, `mapDispatchToProps()` and `connect()`while building a cool astronomy app. Truly well done!

Here’s the[source code](https://github.com/wesharehoodies/nasa-react-redux/tree/chapter-2).  
And for more on [Actions](http://redux.js.org/docs/basics/Actions.html)!

Thank you very much!

_Indrek_








