---
author: Willson Mock
authorTwitter: https://twitter.com/fay_jai
authorFacebook: https://facebook.com/10101613102047365
title: "Making sense of Redux"
subTitle: "When I first started learning React, I remember reading lots of articles about the different technologies associated with it...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*BpaqVMW2RjQAg9cFHcX1pw.png
url: https://medium.freecodecamp.org/why-redux-makes-sense-to-me-and-how-i-conceptualize-it-c8a3a9db15ca
id: why-redux-makes-sense-to-me-and-how-i-conceptualize-it-c8a3a9db15ca
date: 2016-08-09T21:55:14.115Z
tags: [
  "React",
  "Redux",
  "JavaScript",
  "Tech",
  "Web Development"
]
---
# Making sense of Redux

When I first started learning React, I remember reading lots of articles about the different technologies associated with it.

In particular, this [one article](https://github.com/petehunt/react-howto) stood out. It mentions how confusing the ecosystem is, and how developers often feel they have to know ALL of the ecosystem before using React.

And as someone who’s used React daily for the past 8 months or so, I can definitely say that I’m still barely scratching the surface in terms of understanding how the entire ecosystem works!

But my time spent using React has given me some insight into when and why it might be appropriate to use another technology — Redux (a variant of the Flux architecture).

> You’ll know when you need Flux. If you aren’t sure if you need it, you don’t need it.

This quote comes from the [same article](https://github.com/petehunt/react-howto#learning-flux) I mentioned above, and it pretty much summarizes how I feel about Redux.

I definitely didn’t see the need for Flux initially, and I feel that you can create productive applications just using React. But I’m starting to see the benefits of Redux.

In this blog post, I’ll discuss why I think Redux makes sense and provide a visual analogy for internalizing the different parts of Redux better.

### **Why I think Redux makes sense**

Here’s how I would describe my React usage during the past 8 months:

1.  As much as possible, focus on writing stateless functional components, since these components are **pure** (i.e. given the same input prop values, will always return the same UI representation). Pure components are easier to reason about and test.
2.  Whenever I needed to incorporate state into my components, I carefully asked myself which component should actually manage this state. Should it be the immediate parent of a particular stateless component? Or should it be higher up in the hierarchy since other stateless components might need it too?
3.  Answering the above question is a **very important** step in developing React applications — in fact, even if you use Redux (or some other Flux variant), you’ll still need to know the answer to this question because it’ll determine which components get promoted to Redux containers (such as smart components).
4.  As my application grew larger, I noticed that there were lots of components that managed their own state sprinkled all throughout the application. I also noticed that I needed to refactor every so often because multiple components would need to access the same state. The typical pattern I saw was that I’d have to move the state up the component hierarchy so that the parent of those stateful components now managed that particular state.
5.  As I encountered this pattern more and more, I started asking whether it’d be better to move all of the component’s state to the **top** of the component hierarchy, and then just pass a particular piece of the state to whichever downstream component needed it. The reason I thought this would be useful is because, aside from the top most component, every other downstream component could be **stateless** _(caveat here: more often than not, you’ll probably still want to have some UI state managed by the particular component instead)_.

### Drumroll please — introducing Redux

At the end of the day, what I was trying to achieve above was better **separation of concerns**.

React is a UI library. It should only deal with rendering the UI given a particular set of data. If the data changes, it should re-render to form a new UI.

However, as my application grew, I started sprinkling state and business logic all over the place. This made it more difficult to reuse components and started making my components really **thick**.

Redux tries to separate the application data and business logic into its own container so that React can manage just the view. This makes your software more flexible because you can potentially swap out React for some other view library.

### I’m no Redux expert but here’s how I visualize its different parts

When you’re first learning Redux, there are several key concepts to understand: **store, actions / action creators, and reducer functions**. The [official documentation](http://redux.js.org/) is great, and I highly recommend reading through it and playing with the code. My examples below will make much more sense if you’ve read the docs first!

I’m a visual learner so here’s how I explained the concepts to myself:



![](https://cdn-images-1.medium.com/max/1600/1*ELf2a1L1gSkDbX6wlW3CyA.jpeg)

Redux Actions, Reducers, and Store — explained via basketball analogy



#### Store — a basketball hoop

In Redux, your entire application state is managed by a single store. You can think of the store as basically a JavaScript object where each key is a particular slice of the application state you want to keep track of and each value is the corresponding value for that particular slice of state.

You might be asking what a store has to do with a basketball hoop? Well, if you allow me some flexibility in my analogy, just like how you can only score points in a basketball game by shooting a ball through the hoop, the only way you can modify your application state in Redux is by having Actions (see below) _pass through_ the Store.

If we’re using more technical jargon here, the only way to modify state in Redux is to have actions _dispatched_ to the store.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/09b585724d02cb685fc1818960d960f5?postId=c8a3a9db15ca" data-media-id="09b585724d02cb685fc1818960d960f5" allowfullscreen="" frameborder="0"></iframe>





#### Actions — a basketball

We mentioned Actions above without explaining what they were yet but they’re simply POJOs (plain old JavaScript objects). Here’s a code example of how they might look:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/e5382724974e43ac9affd600cb7c99a7?postId=c8a3a9db15ca" data-media-id="e5382724974e43ac9affd600cb7c99a7" allowfullscreen="" frameborder="0"></iframe>





When thinking about your application as a whole, you want to come up with all the different actions your application can take.

It’s important to note that actions are **declarative** — they describe what you can do in your app but not how to do it. Actions are purely data!

To reiterate, in order for your application to change its state, you have to “shoot” your action “through” the store :)





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/426a79acba02b9fedce8b8e95b26e4e0?postId=c8a3a9db15ca" data-media-id="426a79acba02b9fedce8b8e95b26e4e0" allowfullscreen="" frameborder="0"></iframe>





#### Reducers — the coach and the players on team

In the above section, we said that actions **describe** the different things your application can do. They don’t, however, describe HOW actions modify your application state. This is where reducers come into play.

A reducer is a pure function that takes the current state and an action as its two inputs, then outputs the next state.

It’s important that reducers are pure and without side effects. Every time you provide the same inputs, you should always get the same output. What’s cool about this is that — given an initial state and a list of actions — you’ll know exactly how the resulting state should look after every action.

While its possible to have a single reducer function manage the entire state transformation for every action, Redux emphasizes using **reducer composition.** This is just a fancy term for breaking down your one large reducer function into lots of smaller reducer functions that handle a particular slice of the overall application state.

Following my analogy, you can think of the overall combined reducer as the coach, and the smaller reducer functions as the players. Once the action is “shot through” the store, the combined reducer “catches” the action and “passes” the **same** action to each of the smaller reducer functions. Each smaller reducer function then examines the action and determines whether it wants to modify that part of the application state that it’s responsible for. And if it does, it’ll produce the new state.

Here’s some code:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2d4db877a49060a4d88df1289832fbf5?postId=c8a3a9db15ca" data-media-id="2d4db877a49060a4d88df1289832fbf5" allowfullscreen="" frameborder="0"></iframe>





### Tying up loose ends

At this point, you might have a reasonable question: what happens after each sub reducer function produces it’s next state?

After each sub reducer function produces its corresponding next state, an updated application state object is produced and saved in the store. Remember that the store is the **single source of truth for the application state**, so after each action is run through the reducers, a new state is produced and saved in the store.

You might also be wondering how we start the process — how exactly are actions initially created?

Redux introduces another concept called Action Creators, which are functions that produce and return actions. These action creators are hooked up to React components so that when a user interacts with the UI, the action creators are invoked and create new actions that get dispatched to the store.

### Conclusion

The goal of this post is not to teach you the ins and outs of Redux, but rather to help more visual learners enjoy seeing how the different parts of Redux interact with each other. Hopefully this post was able to shed some more light on that!

**Note:** I recently came across [this video by Dan Abramov](https://egghead.io/lessons/javascript-redux-extracting-container-components-filterlink) where he mentions one of the struggles I noticed when just using React without Redux. You essentially pass down lots of props from intermediate to child components, even when those intermediate components don’t need them. It’s a great video explaining the motivation behind Redux and higher order components in React!








