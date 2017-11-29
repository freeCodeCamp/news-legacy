---
author: Sam Corcos
authorTwitter: https://twitter.com/SamCorcos
authorFacebook: https://facebook.com/10156115947080004
title: "Where to Hold React Component Data: state, store, static, and this"
subTitle: "With the advent of React and Redux, a common question has emerged:..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*kt9otqHk14BZIMNruiG0BA.png
url: https://medium.freecodecamp.org/where-do-i-belong-a-guide-to-saving-react-component-data-in-state-store-static-and-this-c49b335e2a00
id: where-do-i-belong-a-guide-to-saving-react-component-data-in-state-store-static-and-this-c49b335e2a00
date: 2016-08-13T07:33:11.979Z
tags: [
  "React",
  "Redux",
  "JavaScript",
  "Web Development",
  "Programming"
]
---
# Where to Hold React Component Data: state, store, static, and this

With the advent of [React](https://facebook.github.io/react/) and [Redux](https://github.com/reactjs/redux), a common question has emerged:

> What should I hold in the Redux **store,** and what should I save in local **state**?

But this question is actually too simplistic, because there are also two other ways you can store data for use in a component: **static** and **this**.

Let’s go over what each of these, and when you should use them.

### Local state

When React was first introduced, we were presented with local **state**. The important thing to know about local **state** is that when a **state** value changes, it triggers a re-render.

This state can be passed down to children as **props**, which allows you to separate your components between smart data-components and dumb presentational-components if you chose.

Here’s a basic counter app using local **state**:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/184e5b8ad9ac13cbb92d8ef39612ff15?postId=c49b335e2a00" data-media-id="184e5b8ad9ac13cbb92d8ef39612ff15" allowfullscreen="" frameborder="0"></iframe>





Your data (the value of the counter) is stored within the **App** component, and can be passed down its children.

#### Use cases

Assuming your counter is important to your app, and is storing data that would be useful to other components, you would not want to use local **state** to keep this value.

The current best practice is to use local **state** to handle the state of your user interface (UI) state rather than data. For example, using a [controlled component](https://facebook.github.io/react/docs/forms.html#controlled-components) to fill out a form is a perfectly valid use of local **state**.

Another example of UI data that you could store in local **state** would be the currently selected tab from a list of options.

A good way to think about when to use local **state** is to consider whether the value you’re storing will be used by another component. If a value is specific to only a single component (or perhaps a single child of that component), then it’s safe to keep that value in local **state**.

**Takeaway:** keep UI state and transitory data (such as form inputs) in local **state**.

### Redux store

Then after some time had elapsed and everyone started getting comfortable with the idea of [unidirectional data flow](https://www.youtube.com/watch?v=i__969noyAM), we got Redux.

With Redux, we get a global **store**. This store lives at the highest level of your app and passes data down to all children. You connect to the global **store** with the [**connect** wrapper and a **mapStateToProps** function](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options).



![](https://cdn-images-1.medium.com/max/1600/1*jXzqMnnrXfePvfVglIYm5Q.jpeg)



At first, people put everything in the Redux **store**. Users, modals, forms, sockets… you name it.

Below is the same counter app, but using Redux. The important thing to note is that **counter** now comes from **this.props.counter** after being mapped from **mapStateToProps** in the **connect** function, which takes the **counter** value from the global **store** and maps it to the current component’s **props**.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/4a8f49e682fa8ab286609b4e924c4de7?postId=c49b335e2a00" data-media-id="4a8f49e682fa8ab286609b4e924c4de7" allowfullscreen="" frameborder="0"></iframe>





Now when you click on the button, an action is dispatched and the global **store** is updated. The data is handled outside of our local component and is passed down.

It’s worth noting that when **props** are updated, it also triggers a re-render—just like when you update **state**.

#### Use cases

The Redux **store** is great for keeping application state rather than UI state. A perfect example is a user’s login status. Many of your components will need access to this information, and as soon as the login status changes, all of those components (the ones that are rendered, at least) will need to be re-rendered with the updated information.

Redux is also useful for triggering events for which you need access on multiple components or across multiple routes. An example of this would be a login modal, which can be triggered by a multitude of buttons all across your app. Rather than conditionally rendering a modal in a dozen places, you can conditionally render it at the top-level of your app and use a Redux action to trigger it by changing a value in the **store**.

**Takeaway**: keep data that you intend to share across components in **store**.

### this.<something>

One of the least utilized features when working with React is **this**. People often forget that React is just JavaScript with ES2015 syntax. Anything you can do in JavaScript, you can also do in React.

The example below is a functional counter app, similar to the two examples above.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2b84ff5f767e0e67f6e09599c91d2ffc?postId=c49b335e2a00" data-media-id="2b84ff5f767e0e67f6e09599c91d2ffc" allowfullscreen="" frameborder="0"></iframe>





We’re storing the **counter** value in the component and using [forceUpdate()](https://facebook.github.io/react/docs/component-api.html#forceupdate) to re-render when the value changes. _This is because changes to anything other than_ **_state_** _and_ **_props_** _does not trigger a re-render_.

This is actually an example of how you should _not_ use **this**. If you find yourself using **forceUpdate()**, you’re probably doing something wrong. For values for which a change should trigger a re-render, you should use local **state** or **props/**Redux **store**.

#### Use cases

The use case for **this** is to store values for which a change should not trigger a re-render. For example, sockets are a perfect thing to store on **this**.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2564f61921fe65b93d10564be5b3e75f?postId=c49b335e2a00" data-media-id="2564f61921fe65b93d10564be5b3e75f" allowfullscreen="" frameborder="0"></iframe>





Also, many people don’t realize they’re already using **this** all the time in their function definitions. When you define **render()**, you’re really defining **this.prototype.render = function()**, but it’s hidden behind ES2015 class syntax.

**Takeaway:** use **this** to store things that shouldn’t trigger a re-render.

### Static

[**Static** methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static) and properties are perhaps the least known aspect of ES2015 classes _(calm down, yes, I know they aren’t really classes under the hood)_, mostly because they aren’t used all that frequently. But they actually aren’t especially complicated. If you’ve used [**PropTypes**](https://facebook.github.io/react/docs/reusable-components.html#prop-validation), you’ve already defined a **static** property.

The following two code blocks are identical. The first is how most people define PropTypes. The second is how you can define them with **static**.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c0bdc0f7ac66d745a196ef9c28290f17?postId=c49b335e2a00" data-media-id="c0bdc0f7ac66d745a196ef9c28290f17" allowfullscreen="" frameborder="0"></iframe>









<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ea97c7d8d45f2c99ee9b880202a9b517?postId=c49b335e2a00" data-media-id="ea97c7d8d45f2c99ee9b880202a9b517" allowfullscreen="" frameborder="0"></iframe>





As you can see, **static** is not all that complicated. It’s just another way to assign a value to a class. _The main difference between_ **_static_** _and_ **_this_** _is that you do not need to instantiate the class to access the value._





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/0766467a96872cc05f642ec486d63807?postId=c49b335e2a00" data-media-id="0766467a96872cc05f642ec486d63807" allowfullscreen="" frameborder="0"></iframe>





In the example above, you can see that to get the **staticProperty** value, we could just call it straight from the class without instantiating it, but to get **prototypeProperty**, we had to instantiate it with **new App()**.

#### Use cases

Static methods and properties are rarely used, and should be used for utility functions that all components of a particular type would need.

**PropTypes** are an example of a utility function where you would attach to something like a Button component, since every button you render will need those same values.

Another use case is if you’re concerned about over-fetching data. If you’re using GraphQL or Falcor, you can specify which data you want back from your server. This way you don’t end up receiving a lot more data than you actually need for your component.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/65cf7f739329387ba74e99ff928d08ab?postId=c49b335e2a00" data-media-id="65cf7f739329387ba74e99ff928d08ab" allowfullscreen="" frameborder="0"></iframe>





So in the example component above, before requesting the data for a particular component, you could quickly get an array of required values for your query with **App.requiredData.** This allows you to make a request without over-fetching.

**Takeaway:** you’re probably never going to use **static**.

### That other option…

There is actually another option, which I intentionally left out of the title because you should use it sparingly: you can store things in a module-scoped **variable**.

There are specific situations in which it makes sense, but for the most part you just shouldn’t do it.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b256352ffb15a5fa7834301891718720?postId=c49b335e2a00" data-media-id="b256352ffb15a5fa7834301891718720" allowfullscreen="" frameborder="0"></iframe>





You can see this is almost the same as using **this,** except that we’re storing the value outside of our component, which could cause problems if you have more than one component per file. You might want to use this for setting default values if the values are not tied to your **store**, otherwise using a **static** for default props would be better.

If you need to share data across components and want to keep data available to everything the module, it’s almost always better to use your Redux **store**.

**Takeaway:** don’t use module-scoped variables if you can avoid it.











* * *







_Sam Corcos is the lead developer and co-founder of_ [_Sightline Maps_](http://sightlinemaps.com)_, the most intuitive platform for 3D printing topographical maps, as well as_ [_LearnPhoenix.io_](http://learnphoenix.io)_, an intermediate-advanced tutorial site for building scalable production apps with Phoenix and React. Get $20 off of LearnPhoenix with the coupon code:_ **_free_code_camp_**








