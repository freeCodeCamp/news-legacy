---
author: Alex Moldovan
authorTwitter: https://twitter.com/alexnmoldovan
authorFacebook: https://facebook.com/1152981894719728
title: "Scaling your Redux App with ducks"
subTitle: "How does your front-end application scale? How do you make sure that the code you’re writing is maintainable 6 months from now?..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*uceu9f-p_A2H2-2xD-6MiQ.jpeg
url: https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be
id: scaling-your-redux-app-with-ducks-6115955638be
date: 2017-01-23T06:48:21.124Z
tags: [
  "React",
  "Redux",
  "JavaScript",
  "Programming",
  "Web Development"
]
---
# Scaling your Redux App with ducks







![](https://cdn-images-1.medium.com/max/2000/1*uceu9f-p_A2H2-2xD-6MiQ.jpeg)







How does your front-end application scale? How do you make sure that the code you’re writing is maintainable 6 months from now?

[Redux](http://redux.js.org/) took the world of front-end development by storm in 2015 and established itself as a standard — even beyond the scope of React.

At the company where I work, we recently finished refactoring a fairly large React codebase, adding redux instead of [reflux](https://github.com/reflux/refluxjs).

We did it because moving forward would have been impossible without a well structured application and a good set of rules.

The codebase is more than two years old, and _reflux_ was there from the beginning. We had to change code that wasn’t touched in more than a year and was pretty tangled with the React components.

Based on the work we did on the project, I put together [this repo](https://github.com/alexnm/re-ducks), explaining our approach in organizing our redux code.











* * *







When you learn about redux and the roles of actions and reducers, you start with very simple examples. Most tutorials available today don’t go to the next level. But if you’re building something with Redux that’s more complicated than a todo list, you’ll need a smarter way of scaling your codebase over time.

Someone once said that _naming things_ is one of the hardest jobs in computer science. I couldn’t agree more. But structuring folders and organizing files is a close second.

Let’s explore how we approached code organization in the past.

### Function vs Feature

There are two established approaches of structuring applications: _function-first_ and _feature-first_.

One the left below you can see a function-first folder structure. On the right you can see a feature-first approach.



![](https://cdn-images-1.medium.com/max/1600/1*HM8M2Agd_TBfU4Zm1_lEJA.png)



Function-first means that your top-level directories are named after the purpose of the files inside. So you have: _containers_, _components_, _actions_, _reducers_, etc.

This doesn’t scale at all. As your app grows and you add more features, you add files into the same folders. So you end up with having to scroll inside a single folder to find your file.

The problem is also about coupling the folders together. A single flow through your app will probably require files from all folders.

One advantage of this approach is that it isolates — in our case — React from redux. So if you want to change the state management library, you know which folders you need to touch. If you change the view library, you can keep your redux folders intact.

Feature-first means that the top-level directories are named after the main features of the app: _product_, _cart_, _session_.

This approach scales much better, because each new feature comes with a new folder. But, you have no separation between the React components and redux. Changing one of them on the long run is a very tricky job.

Additionally you have files that do not belong to any feature. You end up with a folder _common_ or _shared,_ because you want to reuse code across many features in your app.

### The best of two worlds

Although not in the scope of this article, I want to touch this single idea: **always separate State Management files from UI files.**

Think about your application on the long run. Imagine what happens with the codebase when you switch from _React_ to another library. Or think how your codebase would use _ReactNative_ in parallel with the web version.

[Our approach](https://github.com/FortechRomania/react-redux-complete-example) starts from the need to isolate the React code into a single folder — called views — and the redux code into a separate folder — called redux.

This first level split gives us the flexibility to organize the two separate parts of the app completely different.

Inside the views folder, we prefer a function-first approach in structuring files. This feels very natural in the context of React: _pages_, _layouts_, _components, enhancers_ etc.

To not go crazy with the number of files in a folder, we may have a feature based split inside each of these folders.

Then, inside the redux folder…

### Enter re-ducks

Each feature of the application should map to separate actions and reducers, so it makes sense to go for a feature-first approach.

The original [ducks modular approach](https://github.com/erikras/ducks-modular-redux) is a nice simplification for redux and offers a structured way of adding each new feature in your app.

Yet, we wanted to explore a bit what happens when the app scales. We realized that a single file for a feature becomes too cluttered and hard to maintain on the long run.

This is how [_re-ducks_ was born](https://github.com/alexnm/re-ducks). The solution was to split each feature into a _duck_ folder.

    duck/├── actions.js├── index.js├── operations.js├── reducers.js├── selectors.js├── tests.js├── types.js├── utils.js

A duck folder MUST:

*   contain the entire logic for handling only ONE concept in your app, ex: _product_, _cart_, _session_, etc.
*   have an `index.js` file that exports according to the original duck rules.
*   keep code with similar purpose in the same file, such as _reducers_, _selectors_, and _actions_
*   contain the _tests_ related to the duck.

For this example, we haven’t used any abstraction built on top of redux. When building software, it’s important to start with the least amount of abstractions. This way, you make sure that the cost of your abstractions doesn’t outweigh the benefits.

If you need to convince yourself that abstractions can be bad, watch this [awesome talk by Cheng Lou](https://www.youtube.com/watch?v=mVVNJKv9esE).

Let’s see what goes into each file.

#### Types

The _types_ file contains the names of the actions that you are dispatching in your application. As a good practice, you should try to scope the names based on the feature they belong to. This helps when debugging more complex applications.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a52c8722602c05cdfb503e30d46506d1?postId=6115955638be" data-media-id="a52c8722602c05cdfb503e30d46506d1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F9945366%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





#### Actions

This file contains all the action creator functions.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/3f90a1809546223f6ab7468ccd916f74?postId=6115955638be" data-media-id="3f90a1809546223f6ab7468ccd916f74" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F9945366%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Notice how all the actions are represented by functions, even if they are not parametrized. A consistent approach is more than needed in a large codebase.

#### Operations

To represent chained operations you need a redux _middleware_ to enhance the dispatch function. Some popular examples are: [redux-thunk](https://github.com/gaearon/redux-thunk), [redux-saga](https://github.com/redux-saga/redux-saga) or [redux-observable](https://github.com/redux-observable/redux-observable).

In our case, we use _redux-thunk_. We want to separate the thunks from the action creators, even with the cost of writing extra code. So we define an operation as a wrapper over actions.

If the operation only dispatches a single action — doesn’t actually use redux-thunk — we forward the action creator function. If the operation uses a thunk, it can dispatch many actions and chain them with promises.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9ca8027767e9b9664c0a6a60a61b1ad2?postId=6115955638be" data-media-id="9ca8027767e9b9664c0a6a60a61b1ad2" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F9945366%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Call them operations, thunks, sagas, epics, it’s your choice. Just find a naming convention and stick with it.

At the end, when we discuss the _index_, we’ll see that the operations are part of the public interface of the duck. Actions are encapsulated, operations are exposed.

#### Reducers

If a feature has more facets, you should definitely use multiple reducers to handle different parts of the state shape. Additionally, don’t be afraid to use _combineReducers_ as much as needed. This gives you a lot of flexibility when working with a complex state shape.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a881e27aba92093662797ef842eb4f0e?postId=6115955638be" data-media-id="a881e27aba92093662797ef842eb4f0e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F9945366%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





In a large scale application, your state tree will be at least 3 level deep. Reducer functions should be as small as possible and handle only simple data constructs. The _combineReducers_ utility function is all you need to build a flexible and maintainable state shape.

Check out the [complete example project](https://github.com/FortechRomania/react-redux-complete-example) and look how _combineReducers_ is used. Once in the _reducers.js_ files and then in the _store.js_ file, where we put together the entire state tree.

#### Selectors

Together with the operations, the selectors are part of the public interface of a duck. The split between operations and selectors resembles the [CQRS pattern](https://martinfowler.com/bliki/CQRS.html).

Selector functions take a slice of the application state and return some data based on that. They never introduce any changes to the application state.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/8ecd0037bb466a0046edf5819aa1c49d?postId=6115955638be" data-media-id="8ecd0037bb466a0046edf5819aa1c49d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F9945366%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





#### Index

This file specifies what gets exported from the duck folder. It will:

*   export as default the reducer function of the duck.
*   export as named exports the selectors and the operations.
*   export the types if they are needed in other ducks.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/cff9ae9b195ea5d62ec14e2a12274597?postId=6115955638be" data-media-id="cff9ae9b195ea5d62ec14e2a12274597" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F9945366%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





#### Tests

A benefit of using Redux and the ducks structure is that you can write your tests next to the code you are testing.

Testing your Redux code is fairly straight-forward:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/fe362f6ecc40b9948488307743e248a7?postId=6115955638be" data-media-id="fe362f6ecc40b9948488307743e248a7" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F9945366%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Inside this file you can write tests for reducers, operations, selectors, etc.

I could write a whole different article about the benefits of testing your code, there are so many of them. Just do it!

### So there it is

The nice part about re-ducks is that you get to use the same pattern for all your redux code.

The feature-based split for the redux code is much more flexible and scalable as your application codebase grows. And the function-based split for views works when you build small components that are shared across the application.

You can check out a full react-redux-example codebase [here](https://github.com/FortechRomania/react-redux-complete-example). Just keep in mind that the repo is still under active development.











* * *







How do you structure your redux apps? I’m looking forward to hearing some feedback on this approach I’ve presented.

If you found this article useful, click on the green heart below and I will know my efforts are not in vain.








