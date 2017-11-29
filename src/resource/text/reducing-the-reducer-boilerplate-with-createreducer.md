---
author: Bhuvan Malik
authorTwitter: none
authorFacebook: https://facebook.com/10211466824409328
title: "Reducing the Reducer Boilerplate With createReducer()"
subTitle: "First, a quick recap of what reducers in Redux are:..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*qBvXcdtU2MeWhsdD9Cpu0g.png
url: https://medium.freecodecamp.org/reducing-the-reducer-boilerplate-with-createreducer-86c46a47f3e2
id: reducing-the-reducer-boilerplate-with-createreducer-86c46a47f3e2
date: 2017-08-14T20:09:16.637Z
tags: [
  "Redux",
  "JavaScript",
  "React",
  "Functional Programming",
  "Web Development"
]
---
# Reducing the Reducer Boilerplate With createReducer()



![](https://cdn-images-1.medium.com/max/1600/1*qBvXcdtU2MeWhsdD9Cpu0g.png)

This article is a short and simple walk-through for reducing the reducer boilerplate by using a more functional approach.



First, a quick recap of what reducers in Redux are:

**Reducers are nothing but pure functions that take in the previous state and an action and return the new state.**

Two things to keep in mind are that they are **pure** and therefore **don’t mutate the state**.

With that out of the way, let’s get down to business.

When we start with redux, this is how we write a reducer:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/15635e800f52327b7737e40dffeb6f19?postId=86c46a47f3e2" data-media-id="15635e800f52327b7737e40dffeb6f19" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F11019194%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





We have a search reducer which updates the state on the basis of different actions like setting the search results, updating the search string or changing state of a loader/spinner. Let’s assume it to be a [slice reducer](http://redux.js.org/docs/recipes/reducers/SplittingReducerLogic.html), which we can combine later using the `combineReducers(reducers)` function.

Now, if you’re like me, you may not fancy switch statements 😋

They come with too much boilerplate of their own. A reducer handling many action types using switch cases would be lengthy. And that wouldn’t look good now, would it?! The idea is to ditch the switch and move towards a more functional approach.

### **Let’s rethink this a little**

What we can do is abstract all our switch case logic into “case functions” and create an object that maps action types to their corresponding case functions. We’ll call this object ‘actionHandlers’.  
Below is the object:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2e703e561a5ece58d9fedf1c388c1c62?postId=86c46a47f3e2" data-media-id="2e703e561a5ece58d9fedf1c388c1c62" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F11019194%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





As you can see, we now have a mapping from action types to case functions.

> _Case functions are like small reducer functions that take state and incoming action as arguments and return a new slice of the state tree._

Now we must create a “reducer creator” function to make use of our `**actionHandlers**` . This function will return another function which will actually be our reducer passed to `combineReducers()`. Behold:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d9423304b40c49ba4513d0c80a4894ef?postId=86c46a47f3e2" data-media-id="d9423304b40c49ba4513d0c80a4894ef" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F11019194%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





As you can see, `createReducer()` is a closure returning another function. This returned function satisfies the form `(previousState, action) => newState` and is therefore going to be our actual slice reducer.

The returned reducer function can access both `actionHandlers` and `initialState` arguments of it’s enclosing function because of the closure. The `initialState` is used as the default argument for `state` . Inside the reducer function, we check if our `actionHandlers` has a property matching the incoming action type. If so, we execute that case function inside `actionHandlers`, passing in state and action. If the action type is not a property inside `actionHandlers`, we return the previous state.

You can find `createReducer()` in the [official Redux docs](http://redux.js.org/docs/recipes/ReducingBoilerplate.html) as well.

This create reducer function can now be imported in different reducer files to create all our slice reducers!

The above function is verbose right now for explanation point of view. Let’s spice things up a bit! Below is the new and improved create reducer file. 😎





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/51a9ab352e9ff60e0a5f45ced26d6549?postId=86c46a47f3e2" data-media-id="51a9ab352e9ff60e0a5f45ced26d6549" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F11019194%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





I’ve shortened everything using lambdas and Ramda library’s ‘[propOr](http://ramdajs.com/docs/#propOr)’ function. What the propOr function does is take the 2nd argument (a key) to check inside the 3rd argument (an object), and returns its value if found. Otherwise, it returns the default supplied from the 1st argument. The 1st argument, ‘[identity](http://ramdajs.com/docs/#identity)’, is a function that just returns the parameter supplied to it.

So, a function is returned if found in `actionHandlers` which is executed using `(state, action`. In case the action is not found, propOr returns identity, which is executed with the same `(state, action)` arguments and returns the first argument supplied, which is `state`(the previous state in this case).

You can create your own ‘propOr’ and ‘identity’ functions, Ramda is just what I use.

Let me show the new search reducer file for you to get the overall picture of how we use our `createReducer` function with the `actionHandlers`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b217d265989e00aa90ad60c915091daa?postId=86c46a47f3e2" data-media-id="b217d265989e00aa90ad60c915091daa" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F11019194%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





The `createReducer` function is partially applied and returns our final slice reducer and is exported to a file where we use the `combineReducers` function.

Well, there you go, a good way for creating reducers and reducing the overall boilerplate. I hope this benefits you in some way :)



![](https://cdn-images-1.medium.com/max/1600/1*AhRFvNgwGHEH_Zzm-3MI_w.gif)



Here are some links to my previous articles:

[**JavaScript ES6 Functions: The Good Parts**  
_ES6 offers some cool new functional features that make programming in JavaScript much more flexible. Let’s talk about…_medium.freecodecamp.com](https://medium.freecodecamp.com/es6-functions-9f61c72b1e86 "https://medium.freecodecamp.com/es6-functions-9f61c72b1e86")[](https://medium.freecodecamp.com/es6-functions-9f61c72b1e86)

[**A guide to JavaScript variable hoisting 🚩 with let and const**  
_New JavaScript developers often have a hard time understanding the unique behaviour of variable/function hoisting._medium.freecodecamp.com](https://medium.freecodecamp.com/what-is-variable-hoisting-differentiating-between-var-let-and-const-in-es6-f1a70bb43d "https://medium.freecodecamp.com/what-is-variable-hoisting-differentiating-between-var-let-and-const-in-es6-f1a70bb43d")[](https://medium.freecodecamp.com/what-is-variable-hoisting-differentiating-between-var-let-and-const-in-es6-f1a70bb43d)

Peace ✌️








