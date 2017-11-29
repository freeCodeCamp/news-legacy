---
author: Tom Coleman
authorTwitter: https://twitter.com/tmeasday
authorFacebook: none
title: "Understanding Higher Order Components"
subTitle: "Making sense of the rapidly changing React best practice."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*w4MV4Ufnk2WWY4LgX9ZhPA.jpeg
url: https://medium.freecodecamp.org/understanding-higher-order-components-6ce359d761b
id: understanding-higher-order-components-6ce359d761b
date: 2017-06-01T04:45:45.936Z
tags: [
  "React",
  "JavaScript",
  "Web Development",
  "Technology",
  "Programming"
]
---
# Understanding Higher Order Components

## _Making sense of the rapidly changing React best practice._







[![](https://cdn-images-1.medium.com/max/2000/1*w4MV4Ufnk2WWY4LgX9ZhPA.jpeg)](http://jamesturrell.com/work/type/skyspace/)







If you’re new to React, you may have heard about “Higher Order Components” and “Container” components. If so, you may be wondering what all the fuss is about. Or you may have even used an API for a library that provides one, and been a little confused about the terminology.

As a maintainer of [Apollo’s React integration](http://dev.apollodata.com/react/) — a popular open source library that makes heavy use of High Order Components — and the author of much of its documentation, I’ve spent a bit of time getting my head around the concept myself.

I hope this post can help shed some light on the subject for you too.

### **A React re-primer**

This post assumes that you are familiar with React — if not there’s a lot of great content out there. For instance Sacha Greif’s [5 React Concepts post](https://medium.freecodecamp.com/the-5-things-you-need-to-know-to-understand-react-a1dbd5d114a3) is a good place to start. Still, let’s just go over a couple of things to get our story straight.

A React Application consists of a set of **components**. A component is passed a set of input properties (**props**) and produces some HTML which is rendered to the screen. When the component’s props change, it re-renders and the HTML may change.

When the user of the application interacts with that HTML, via some kind of event (such as a mouse click), the component handles it either by triggering a **callback** prop, or changing some internal **state**. Changing internal state also causes it and its children to re-render.

This leads to a component **lifecycle**, as a component is rendered for the first time, attached to the DOM, passed new props, etc.

A component’s render function returns one or instances of other components. The resultant **view tree** is a good mental model to keep in mind for how the components of the app interact. In general they interact only by passing props to their children or triggering callbacks passed by their parents.



![](https://cdn-images-1.medium.com/max/1600/1*NS6TPKPJuCgsK2M45tPIGw.gif)

Data flow in a React view tree



### **React UI vs statefulness**

It seems almost dated now, but there was a time where everything was described in terms of the distinction between Models, Views and Controllers (or View Models, or Presenters, etc). In this classification, a View’s task is to **render** and deal with user interaction, and a Controller’s is to **prepare data**.

A recent trend in React is towards **functional stateless components**. These simplest “pure” components only ever transform their props into HTML and call callback props on user interaction:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ba86f935041c86c4baef10fbd4cf0b11?postId=6ce359d761b" data-media-id="ba86f935041c86c4baef10fbd4cf0b11" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F132554%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





They are functional because you can really think of them as functions. If your entire view tree consisted of them you are really talking about one big function to produce HTML composed of calls to many smaller ones.

A nice property of functional stateless components is that they are super-easy to test, and simple to understand. This means they are easier to develop and quicker to debug.

But you can’t always get away with this. UI does need state. For instance, your menu may need to open when the user hovers over it (ugh, I hope not!)—and the way to do this in React is certainly by using state. To use state, you use class-based components.

Where things get complicated is wiring the “global state” of your UI into the view tree.

### Global State

Global state in your UI is the state that isn’t directly and uniquely relevant to a single component. It typically consists of two main types of things:

1\. The **data** in your application that has come from some server. Typically the data is used in multiple places and so is not unique to a single component.

2\. **Global UI state**, (like the URL, and thus which page the user is looking at).

One approach to global state is to attach it to the highest “root” component in your app and pass it down the tree to all the components that need it. You then pass all changes to that state back up the tree via a chain of callbacks.



![](https://cdn-images-1.medium.com/max/1600/1*-RDYOXCu7BBOTnkFsE3yFg.gif)

Data flow from the store into a view tree, with a single container



This approach gets unwieldy pretty quickly, though. It means the root component needs to understand the requirements of its entire tree, and likewise for every parent of every subtree in the entire tree. That’s where this next concept comes in.

### **Containers and Presentational Components**

This problem is typically solved by allowing components to access global state anywhere in the view tree (some restraint is typically called for).

In this world, components can be classified into those that access the global state, and those that don’t.

The “pure” components that do not are the easiest to test and understand (especially if they are functional stateless components). A soon as a component is “impure” it’s tainted and harder to deal with.

For this reason, [a pattern](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) has emerged to separate each “impure” component into **two** components:

*   The **container** component that does the “dirty” global state work
*   The **presentational** component that does not.

We can now treat the presentational component just like we treated our simple components above, and isolate the dirty, complex data handling work in the container.



![](https://cdn-images-1.medium.com/max/1600/1*tIdBW-TqotpALD3b2xk3SA.gif)

Data flow with multiple containers



### The container

Once you’re on board with the presentational/container component split, writing container components becomes interesting.

One thing you notice is they often don’t look a lot like a component at all. They might:

*   Fetch and pass one piece of global state (say from Redux) into their child.
*   Run one data-accessing (say GraphQL) query and pass the results into their child.

Also, if we follow a good separation of concerns, our containers will **only ever render a single child component**. The container is necessarily tied to the child, because the child is hardwired in the render function. Or is it?

### Generalizing containers

For any “type” of container component (for instance one that access Redux’s store), the implementation looks the same, differing only in the details: which child component they render, and what exact data they are fetching.

For example, in the world of Redux (if we didn’t have `react-redux`'s `connect` HOC) a container might look like:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/e5deebb1556c501f3daa13ceb12e80f5?postId=6ce359d761b" data-media-id="e5deebb1556c501f3daa13ceb12e80f5" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F132554%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Even though this container doesn’t do most of what a true Redux container would do, you can already see that apart from the implementation of `mapStateToProps` and the specific `MyComponent` that we are wrapping, there is a lot of boilerplate that we would have to write **every single time we write a Redux-accessing container**.

### Generating Containers

In fact, it might be simpler just to write a function that **generates** the container component based on the pertinent information (in this case the child component and the `mapStateToProps` function).





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c534a88f87ebcefadef7b00c89f293e3?postId=6ce359d761b" data-media-id="c534a88f87ebcefadef7b00c89f293e3" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F132554%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





This is a **Higher Order Component** (HOC), which is a **function** that takes a child component and some options, then builds a container for that child.

It’s “higher order” in the same way as a “higher order function” — a function that builds a function. In fact you can think of React Components as functions that produce UI. This works especially well for functional stateless components, but if you squint, it works for pure stateful presentational components as well. A HOC is exactly a higher order function.

### **Examples of HOCs**

There are many, but some notable ones:

*   The most common is probably [Redux’s](http://redux.js.org) `connect` function, which our `buildReduxContainer` function above is just a shabby version of.
*   [React Router’s](https://github.com/ReactTraining/react-router) `withRouter` function which simply grabs the router off the context and makes it a prop for the child.
*   `[react-apollo](http://dev.apollodata.com/react/)`'s main interface is the `graphql` HOC, which, given a component and a GraphQL query, provides the results of that query to the child.
*   [Recompose](https://github.com/acdlite/recompose) is a library that’s full of HOCs that do a variety of small tasks you may want to abstract away from your components.

### **Custom HOCs**

Should you write new HOCs in your app? Sure, if you have component patterns that could be generalized.

> Beyond simply sharing utility libraries and simple composition, HOCs are the best way to share behavior between React Components.

Writing a HOC is as simple as a function that returns a Class, like we saw with our `buildReduxContainer` function above. If you want to read more about what you can do when you build HOCs, I suggest you read Fran Guijarro’s [extremely comprehensive post](https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e#.pvnx42kku) on the subject.

### Conclusion

Higher order components are at heart a codification of a separation of concerns in components in a **functional** way. Early versions of React used classes and mixins to achieve code reuse, but all signs point to this more functional approach driving the future design of React.

If your eyes typically glaze over when you hear about functional programming techniques, don’t worry! The React team has done a great job of taking the best simplifying parts of these approaches to lead us all toward writing more modular, componentized UIs.

If you want to learn more about building applications in a modern, component-oriented fashion, check my [series of posts](https://blog.hichroma.com/ui-components/home) at [Chroma](http://hichroma.com), and if you like this article, please consider 💚ing and sharing it!








