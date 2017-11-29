---
author: Natac13
authorTwitter: https://twitter.com/natac1311
authorFacebook: https://facebook.com/10102445334377681
title: "Building a Vegan Recipe App with React, Redux and Firebase"
subTitle: "While working on my vegan recipe application, I came to the point where I needed to persist the recipes data. I built the vegan recipe ap..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*Yv0PsnG3z_RuGoVo1GPcOw.png
url: https://medium.freecodecamp.org/redux-and-firebase-6906a1b4ca6f
id: redux-and-firebase-6906a1b4ca6f
date: 2016-01-31T23:36:12.000Z
tags: [
  "JavaScript",
  "React",
  "Redux",
  "Design",
  "Learning To Code"
]
---
# Building a Vegan Recipe App with React, Redux and Firebase







![](https://cdn-images-1.medium.com/max/2000/1*Yv0PsnG3z_RuGoVo1GPcOw.png)







While working on my vegan recipe application, I came to the point where I needed to persist the recipes data. I built the vegan recipe app using [React](https://facebook.github.io/react/%22) and [Redux](https://redux.js.org/%22). My choice for database Firebase. After completing [Build Your First React.js App](https://egghead.io/series/build-your-first-react-js-application) by [Tyler McGinnis](https://medium.com/@tylermcginnis), which used React and Firebase, I felt confident I had learned enough to use it on my own.

#### About Firebase

The ability to set rules for [read and write](https://www.firebase.com/docs/security/guide/securing-data.html#section-types) on the data endpoints, plus the [authentication](https://www.firebase.com/docs/web/guide/user-auth.html#section-providers) made Firebase a great choice for my application. I can allow only [administrative users](https://www.firebase.com/docs/security/guide/user-security.html#section-variable) to make modifications to the data, such as deleting and updating recipes, while at the same time allowing any user to add new recipes to the database.

In the future I will be adding in validation to the recipe inputs. This is to help with the attempt to avoid entries which contain meat, dairy and egg ingredients. My thought on this solution is a regex searching for those values.

I want to admit that, I have heard of [GraphQL](https://graphql.org/%22) and [Relay](https://facebook.github.io/relay/%22)[realy] which seem to handle fetching data. I have watched a few talks but have not dove into the tools yet, as time is a limiting factor to us all. They seem really cool and I look forward to exploring them in the near future.

#### The App

I started out building my application to use [Redux](https://redux.js.org/%22) for the local state and then use [Firebase](https://www.firebase.com/%22) to persist the data for the long haul. [Redux-thunk](https://github.com/gaearon/redux-thunk%22) was my first solution to fetching the data. [Redux-thunk](https://github.com/gaearon/redux-thunk%22) is a Middleware which you apply to the store via [store enhancers](https://github.com/rackt/redux/blob/master/src/applyMiddleware.js). After applying the middleware I could dispatch ActionCreators which returned a function instead of the plain action object. This returned function then would make a dispatch call with the actual action object after doing “whatever” asynchronous tasks.

#### Sidenote

A thunk is a function that merely wraps the calling of another function with the purpose to delay the calling of the wrapped function. Therefore what redux-thunk does is delay the dispatching of the action object.

To add recipes to the list I had to wrap my simple actionCreator of addRecipe in a function which I called addRecipeFirebase. Lame I know… This would fetch the data from Firebase using [Fireproof](https://github.com/casetext/fireproof), a promised base library wrapping around the actual Firebase API. Therefore when the promise resolved I then would dispatch the simple addRecipe action.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/34cdcb1adf73a87264a17d7de86d53b7?postId=6906a1b4ca6f" data-media-id="34cdcb1adf73a87264a17d7de86d53b7" allowfullscreen="" frameborder="0"></iframe>





The getRecipesFirebase function worked with the same concept. Once the promise resolved I would just dispatch an action object to add the fetched list to populate the state locally.

#### Performance issue

The local updates did not happen until after Firebase added the data. This was not a problem right now but I could foresee there being a delay. Plus I simply did not like the ordering of events. Which is the user waits on the database interaction. A no no from my understanding.

#### Custom Middleware

_Thanks Dan!_

I set out to rectify the mess above. Goal was to add recipes without having to wait for the success of the database. This does open it up for silent failures which I will have to find a different solution to later. The situation would be adding a recipe and Firebase failing, however the recipe is added to the store. When the user goes to check the list for the new recipe it would appear up until a refresh on the page.

I then ran a search on npm for a pre-built library connecting [Redux](https://redux.js.org/%22) and [Firebase](https://www.firebase.com/%22). Found two, however I wanted to see if I could do something on my own for once. Moving forward I decided to try and contact the creator of [Redux](https://redux.js.org/%22). Next thing I had a message typed to send over twitter to [Dan Abramov](https://medium.com/@dan_abramov). I got a response back in no time letting me know that it would be best for me to write a custom Middleware function to handle my use case.

#### Redux Docs

Now while reading through the [Redux](https://redux.js.org/%22) documentation I was not able to get a understanding of middlewares the first time. Not until I just started writing my own and console logging the curried function arguments, did I finally figure them out.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/edbba385780891506d7db9a618c40d53?postId=6906a1b4ca6f" data-media-id="edbba385780891506d7db9a618c40d53" allowfullscreen="" frameborder="0"></iframe>





Then going back and forth between my trial and error and the docs I was able to get a feel for how to build my custom Middleware.

Taking inspiration from [Redux-Promise](https://github.com/acdlite/redux-promise%22) I set up my Middleware to “intercept” the actions by if statements on their action.type. action.types such as ADD_RECIPE.

This allowed me to immediately dispatch the simple actionCreators to the store by returning next (action). Changes to Firebase will now happen in the background.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d0079c763271477064660cb4162b553e?postId=6906a1b4ca6f" data-media-id="d0079c763271477064660cb4162b553e" allowfullscreen="" frameborder="0"></iframe>





If you liked this check out my other sample projects at:

[**Sean Campbell**  
_About Me As a self taught JavaScript application developer, I am currently searching for a challenging workplace…_www.seancampbellnatac.com](http://www.seancampbellnatac.com/ "http://www.seancampbellnatac.com/")[](http://www.seancampbellnatac.com/)

Follow me on twitter at:

[**Sean Campbell (@natac1311) | Twitter**  
_The latest Tweets from Sean Campbell (@natac1311). Currently an electrical apprentice is grinding through material and…_twitter.com](https://twitter.com/natac1311 "https://twitter.com/natac1311")[](https://twitter.com/natac1311)

### Related

[**_A JavaScript library for building user interfaces_ | React**  
A JavaScript library for building user interfacesfacebook.github.io](https://facebook.github.io/react/ "https://facebook.github.io/react/")[](https://facebook.github.io/react/)

[**rackt/redux**  
_redux - Predictable state container for JavaScript apps_github.com](https://github.com/rackt/redux "https://github.com/rackt/redux")[](https://github.com/rackt/redux)

[**Build Extraordinary Apps - Firebase**  
_Firebase is a complete platform for building mobile and web applications. Firebase provides a realtime JSON database…_www.firebase.com](https://www.firebase.com/ "https://www.firebase.com/")[](https://www.firebase.com/)











* * *







_Originally published at_ [_natacseanc.wordpress.com_](https://natacseanc.wordpress.com/2016/01/31/redux-and-firebase/) _on January 31, 2016._








