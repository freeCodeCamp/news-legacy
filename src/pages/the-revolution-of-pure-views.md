---
author: Puppybits
authorTwitter: https://twitter.com/puppybits
authorFacebook: none
title: "Functional Programming is taking over UIs with Pure Views."
subTitle: "The last couple years have seen a huge improvement in how UIs are developed by using Purely Functional Views. In functional programming a..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*iqyzwSonyQR8eBQRduP3cg.jpeg
url: https://medium.freecodecamp.org/the-revolution-of-pure-views-aed339db7da4
id: the-revolution-of-pure-views-aed339db7da4
date: 2015-12-29T18:05:47.458Z
tags: [
  "JavaScript",
  "React",
  "Functional Programming",
  "Tech",
  "Web Development"
]
---
# Functional Programming is taking over UIs with **Pure Views.**

The last couple years have seen a huge improvement in how UIs are developed by using Purely Functional Views. In functional programming a “pure function” is one that when run, returns a value but does not change anything outside its scope (also known as side-effect free function). This greatly reduces the cognitive load and permutations in applications so that they have a massive reduction in bugs ([see case study](https://medium.com/@puppybits/react-without-flux-a76236d1e1d)), easy to understand, compose together and incredibly stable.

David Nolen has one of the best explanations for this type of pattern of UI development **ƒ(d)=V**. It’s a function that receives data as its input and returns a view. No scoping, binding, subclassing, external access to variables or any side effects. This makes it very predictable with drastically less regard to the context that a Pure View is run in. In the JavaScript world you could say, Given any JSON will ALWAYS create the same HTML, CSS and event listeners.

#### Why are Pure Views different than other UI patterns?

In order to fully understand this we need to understand what we’ve been implicitly doing for years in our code. Code is written as a series of complex permutations. Each function we call changes something outside it’s private scope. We then call another function that changes something else. If the data or order of these functions calls deviate in any way bugs occur in unexpected ways. Think about the times you fixed a bug that was caused by something seemingly unrelated in the other class or server somewhere. These are large permutation issues.

Take a look at the chart below. This is how we internally think about our applications.



![](https://cdn-images-1.medium.com/max/1600/1*_HGWb7cZuJs72uPFT19PzA.png)

How we “think” our app works.



Super clear, right? Call `login()`, then `getUser()` then `getCart()`. In reality our application flow includes error paths, unexpected values, network and thread operations. If they return in a slightly different order or the data is slightly different or the data is mutated by multiple classes in our applications these will cause bugs. This is a more accurate model of possible branches:



![](https://cdn-images-1.medium.com/max/1600/1*LaWtFnAP8QAMu7mYFzE2-g.png)

How our apps really work.



If anything doesn’t travel on an expected path at the expected time we get bugs. OOP Classes are supposed encapsulated data, events and transformations inside its boundaries to make this work without bugs. Obviously we all have bugs. Systems are hard because they are complex and those complexities cause bugs.

#### Simple Made Easy

For anyone who has learned the about Gang of Four and Object-Oriented Patterns but not seen Rich Hickey’s talk “Simple Made Easy” [go watch it now](https://www.infoq.com/presentations/Simple-Made-Easy). The core concept Hickey talks about is how too many externalities is a major reason why we don’t fully understand what our code is doing when we read it. It’s not easy because too many plates are spinning at once. Object Oriented languages have patterns attempt to reduce that complexity by being heavily weighted towards using encapsulation. Functional languages, by converse, are heavily weighted towards composability as the key feature to reducing complexity. A better mixture of both is needed to get better control over our UIs.

Pure Views bring some of the benefits of functional languages to the OO world most developers live in. In functional languages, a pure function only does one thing and has no side-effects (side-effect meaning that it can’t affect anything, only return a new value). Multiple simple functions can be composed in different ways to produce many types of outputs. To paraphrase Rich Hickey; Simple means doing one thing. Easy means something we’re able to understand the extent of. In the case of Pure Views, looking the render function we should be able understand all the potential outputs. It reduces the need to understand the entire code base to know how it can effect a single function.

This is how functional, Pure Views process would work:



![](https://cdn-images-1.medium.com/max/1600/1*bf7BFe_mAaJaYNoxUTnEmw.png)

Pure Views are simple transforms with no side-effects.



This is an incredibly powerful concept. Instead of having to propagate through functions, events and network stacks and mutations everywhere, just take a snapshot of the data and render to a view. The view will have all the layout, event handlers and access points for the user to interact with the underlying data. This means to get to any location in the application, the only dependency is a static data model. Generally these Pure Views are coupled with lifecycle methods to better understand when, why and how the data changes. For example, take a look at some actual code of a Pure View:

<pre name="68a3" id="68a3" class="graf graf--pre graf-after--p">createView({
  getDefaultProps(){
    return {
      selectedIds: [1, 10],
      banks: [/* bank data here */]
    };
  }
  render(){
    let selectedBanks = this.props.banks.filter(function(bank){
      return this.props.selectedIds.indexOf(bank.id) > -1;
    });
    let bankItems = [];
    for (let i=0; i < selectedBanks.length; i++){
      bankItems.push(
        el("BankItem", {key:i, bank:selectedBanks[i]})
      );
    }
    return el("div", null,
             el("h1", null, "Selected Banks"),
             bankItems,
             el("a", {href:"/install", "Next")
           );
  }
})</pre>

This view encapsulates properties that are passed in by it’s parent. When the render function is called, it doesn’t require anything outside of the view’s own scope. Everything that can affect the output is all in a single function. Until the render function is finished the props and state can not be changed either. This makes it easy to reason about what will happen on each run. Whenever the parent send it new data, it will trigger the render function to run again.

#### Expanding capabilities without adding complexity

Because Pure Views do only one thing and don’t effect anything out their own scope, it makes it extremely flexible without introducing extra complexities. There’s a few cases that really show the power of Pure Views.

The first is called **Hot Module Replacement**. If you’re thinking this is just like Live Reloading in the browser, you’re way off. The instant you save a file in your editor, only the updated code can be sent to your app, replaces the old code, the render function for that view is ran and only the HTML that differs is changed. The entire data layer of the app is unaffected. This works with layouts, view hierarchies and event handlers. The data in the app doesn’t change so you’re view is updated in real time. There are libraries to support this in browsers, iOS, Android, Windows and Mac app. When the iteration time between making a change in the code and seeing the output is near 0, it completely changes your coding workflow.

The next is **Time Travel Debugging**. It’s really amazing as it sounds. Without Pure Views, storing every event propagation and it’s affects on the view is an impossible load for most systems. With Pure Views all that’s needed is to have an array and push a new copy of the data each time it’s changed. If you understand how persistent data structures work, it’s even less work to save every change in your app. When debugging, just scrub back and forth just like a VCR. (Yeah 80’s UI technology and most UI frameworks don’t have it in their debug toolkit today). Application state can even be serialized and saved on the server in production to get full repo steps of just about every bug in your app.

The last major capability is **Resiliency Over Rigidity**. The data is not tied to the UI. It’s clear separation of concerns. The data layer of your application can focus in terms of functions, data transforms and caching without having to think about all the concerns a user might have. On the vast majority of projects the business logic hardly changes; code for an comm shopping cart pretty much has the same requirements. But on the View layer, designers are always finding new ways to explain or clarify the interface or increase sales. Unit and integration tests can focus on testing the application flow in pure, simple data. Since the View is just a simple transform and a reflection of the data at any given state it’s much less susceptible to having complexities or bugs. This also means when the designer or business director asks for changes to the view, it can be done without affecting the functionality of the data flow.

#### Back to the real-world

The movement of Pure Views is growing. There’s few, if any benefits traditional view layers have over Pure Views. Framework that are more open like Backbone you could swap out string templating systems for Pure Views. More and more framework authors are seeing the advantages and moving to Pure Views. A few notable frameworks that are really championing this approach are Elm, Ember 2, Om Next, ReactJS.

To take advantage of some of the extended capabilities Pure Views offer there are some out-of-the-box tools that make it easier to integrate. For Hot Module Replacement, Webpack and React have a great setup. I maintain a starter kit called [Megatome](https://bit.ly/megatome) that should get you up and running on a new project in 2 minutes. For Time Travel Debugging [look to Redux](https://github.com/rackt/redux) with is a data layer built to work with React.

On last note is for all those who get stuck scrutinizing syntax (like Lisps or JSX): don’t judge a book by it’s cover. If you don’t look deeper, you can completely ignore the possibilities and power that can come from something different. Look again at the code above for a real-world Pure View above. It’s all valid code with no need for transpilation, package managers or any additional build steps. The only thing that’s missing is the top 3 lines:

<pre name="82e0" id="82e0" class="graf graf--pre graf-after--p">let el = React.createElement;
let createView = React.createClass;</pre>

_More details on our architecture are at_ [_bit.ly/fluxless_](http://bit.ly/fluxless) _&_ [_bit.ly/triforce-of-power_](http://bit.ly/triforce-of-power)_._








