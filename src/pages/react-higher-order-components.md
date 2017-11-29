---
author: Adam Recvlohe
authorTwitter: https://twitter.com/adamrecvlohe
authorFacebook: none
title: "How to use React’s higher-order components"
subTitle: "When React first hit the scene, it brought with it a new way of developing front-end architectures. It was regarded as the “View” in Mode..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*jnqXL4Q-iW0qxodFDTxyFQ.jpeg
url: https://medium.freecodecamp.org/react-higher-order-components-635d0bc38b6c
id: react-higher-order-components-635d0bc38b6c
date: 2016-11-09T03:51:22.308Z
tags: [
  "React",
  "JavaScript",
  "Redux",
  "Programming",
  "Web Development"
]
---
# How to use React’s higher-order components



![](https://cdn-images-1.medium.com/max/1600/1*jnqXL4Q-iW0qxodFDTxyFQ.jpeg)

Image credit: [https://facebook.github.io/react/img/logo.svg](https://facebook.github.io/react/img/logo.svg)



When React first hit the scene, it brought with it a new way of developing front-end architectures. It was regarded as the “View” in Model-View-Controller.

Over time, core contributors to the React ecosystem have latched onto the container/presentational pattern.

In this post, you’ll learn more about the container/presentational pattern and how you can use it to create React components.

Before I go any further, let’s clarify some of the jargon:

*   A container is a component that fetches and/or transforms data.
*   A presentational component presents/displays the data it’s passed through its props. Nothing else.
*   A container acts as a higher-order component. Composing higher-order components together allows you to separate those two layers. This prevents you from mudding your presentational layer with unnecessary logic.

If you want, you can follow along using ESNextbin.

After navigating to that page, at the top you should see three tabs: **CODE**, **HTML**, and **PACKAGE**. Click on **PACKAGE**. After navigating to that tab add _react_ and _react-dom_ as _dependencies_.

<pre name="7de5" id="7de5" class="graf graf--pre graf-after--p">{  
 “name”: “esnextbin-sketch”,  
 “version”: “0.0.0”,  
 “dependencies”: {  
   “react” : “latest”,  
   “react-dom”: “latest”  
 }  
}</pre>

Now click on the **CODE** tab and then import _react_ and **render** from _react-dom_.

<pre name="5b20" id="5b20" class="graf graf--pre graf-after--p">import { default as React } from ‘react’  
import { render } from ‘react-dom’</pre>

Now let’s create a stateless functional component that renders ‘Hello, world!’

<pre name="91c3" id="91c3" class="graf graf--pre graf-after--p">const Presentational = () => </pre>

After, you just need to mount that component to the DOM using _render_.

<pre name="eeca" id="eeca" class="graf graf--pre graf-after--p">render(<Presentational />, document.querySelector(‘#root’))</pre>

You still haven’t created the **root** element in the **HTML**, so let’s do that now. All you are doing is adding a _div_ with the _id_ of **root**.

<pre name="a689" id="a689" class="graf graf--pre graf-after--p"><!doctype html>  
<html>  
<head>  
 <meta charset=”utf-8">  
 <title>ESNextbin Sketch</title>  
 <! — put additional styles and scripts here →  
</head>  
<body>  
 // Notice something different  
   
</body>  
</html></pre>

Now for the moment of truth. Click **EXECUTE** in the top right corner of the page. You should see _Hello, world!_ on the screen.

You now have a presentational component. But you also need a container component to fetch your data.

Let’s create a container component above the presentational one. To create the container you will be using React’s class component. For this reason, you will need to import it at the top of the page.

<pre name="231c" id="231c" class="graf graf--pre graf-after--p">import { default as React, Component } from ‘react’</pre>

At this point you can get busy with creating the container component.

<pre name="f314" id="f314" class="graf graf--pre graf-after--p">class Container extends Component {  

 state = {  
   data: []  
 }  

 componentDidMount() {  
   fetch(‘[https://fcctop100.herokuapp.com/api/fccusers/top/alltime'](https://fcctop100.herokuapp.com/api/fccusers/top/alltime%27))  
   .then(response => response.json())  
   .then(data => this.setState({ data }))  
 }  

 render() {  
   return <Presentational data={this.state.data} />  
 }  
}</pre>

At the top, you have the state that is an empty array. You are using a lifecycle method called _componentDidMount_ where you will fetch the data.

When the response returns you then update the state with the data. The data is then passed as a prop to the presentational component. This means you will need to update your presentational component as well.

<pre name="3e68" id="3e68" class="graf graf--pre graf-after--p">const Presentational = ({ data }) =>   
  </pre>

Here I am using destructuring to pluck **data** off the props object. Otherwise it would look like this:

<pre name="6285" id="6285" class="graf graf--pre graf-after--p">const Presentational = props =>   
  </pre>

These changes force you to update which component gets mounted. You now need to render the container component.

<pre name="f6d9" id="f6d9" class="graf graf--pre graf-after--p">render(<Container />, document.querySelector(‘#root’))</pre>

When you click on **EXECUTE** you should see a hole heap of data overflowing on your screen. Oh my!

What you have done here is abstract away the container component and everything it does. But it’s not flexible. You have to place your presentational component inside the container. Is there another way of doing it that’s more flexible? Enter the higher-order component.

A higher-order component is a function that takes a component and returns a new component. How would that look in practice. Let’s create a function that takes a component and returns a new component with the data from the FCC API. You will be updating the container component to do this.

<pre name="4db2" id="4db2" class="graf graf--pre graf-after--p">const container = Presentational =>   
 class extends Component {  

 state = {  
   data: []  
 }  

 componentDidMount() {  
   fetch(‘[https://fcctop100.herokuapp.com/api/fccusers/top/alltime'](https://fcctop100.herokuapp.com/api/fccusers/top/alltime%27))  
   .then(response => response.json())  
   .then(data => this.setState({ data }))  
 }  

 render() {  
   return <Presentational data={this.state.data} />  
 }  
}</pre>

Nothing too different here. There is, however, one extra step you have to perform. You need to compose this container and presentational component together. I am just calling container with the presentational component as an argument. This is added just below your presentational component.

<pre name="1877" id="1877" class="graf graf--pre graf-after--p">const HigherOrderComponent = container(Presentational)</pre>

Now all you have to do is render the higher-order component.

<pre name="40c7" id="40c7" class="graf graf--pre graf-after--p">render(<HigherOrderComponent />, document.querySelector(‘#root’))</pre>

You see what you did there? Now you can use the container with any component, not just the presentational component!

Let’s take this one step further though. Let’s call another function that tells the container component what data to fetch. I think that would make the container even more flexible.

The new container will look something like this:

<pre name="143c" id="143c" class="graf graf--pre graf-after--p">const container = endpoint => Presentational =>   
 class extends Component {  

 state = {  
   data: []  
 }  

 componentDidMount() {  
   fetch(endpoint)  
     .then(response => response.json())  
     .then(data => this.setState({ data }))  
 }  

 render() {  
   return <Presentational data={this.state.data} />  
 }  
}</pre>

Now you will need to update the higher-order component to handle the new call to the endpoint.

<pre name="8417" id="8417" class="graf graf--pre graf-after--p">const HigherOrderComponent = container(  
  ‘[https://fcctop100.herokuapp.com/api/fccusers/top/alltime'  
)(Presentational)](https://fcctop100.herokuapp.com/api/fccusers/top/alltime%27%29%28Presentational%29)</pre>

If that looks a little off to you then you have good eye. What if you could abstract that out even further? Enter _recompose_!

Let’s pause for a moment now and cover what the idea of compose is. To understand compose you need to understand mapping.

Mapping in computer programming is when you take a value and transform it into another value. Which is basically every function ever created! Let me give you an example for good measure.

<pre name="b715" id="b715" class="graf graf--pre graf-after--p">function double(x) {   
  return x * 2  
}</pre>

<pre name="bbbe" id="bbbe" class="graf graf--pre graf-after--pre">const doubled = double(2)</pre>

Now let’s say I want to make another transformation, for example triple. How would I do that?

<pre name="b10a" id="b10a" class="graf graf--pre graf-after--p">function triple(x) {   
  return x * 3   
}</pre>

<pre name="6351" id="6351" class="graf graf--pre graf-after--pre">function double(x) {   
  return x * 2  
}</pre>

<pre name="2e3a" id="2e3a" class="graf graf--pre graf-after--pre">const messedAroundAndGotATripleDouble = triple(double(2))</pre>

Simple enough, right? What if I wanted to make another transformation, and another, and another. It would get quite long. With the help of a compose function you can make the code not only more readable but more composable.

<pre name="62ba" id="62ba" class="graf graf--pre graf-after--p">function compose(f, g) {   
  return function(x) {   
    return f(g(x))  
  }  
}</pre>

<pre name="2960" id="2960" class="graf graf--pre graf-after--pre">function triple(x) {   
  return x * 3   
}</pre>

<pre name="6f98" id="6f98" class="graf graf--pre graf-after--pre">function double(x) {   
  return x * 2  
}</pre>

<pre name="fa0e" id="fa0e" class="graf graf--pre graf-after--pre">const tripleThenDouble = compose(triple, double)</pre>

<pre name="78e5" id="78e5" class="graf graf--pre graf-after--pre">const messedAroundAndGotATripleDouble = tripleThenDouble(2)</pre>

This is a simple example, but it shows how you can make many transformations on the same initial value.

Now imagine the initial value is the presentational component while the container is one of the functions that transforms the initial value. Mind blown!

To start using _recompose_ you need to pull in the _recompose_ library. Under **PACKAGES** let’s add the _recompose_ library.

<pre name="5f02" id="5f02" class="graf graf--pre graf-after--p">{  
 “name”: “esnextbin-sketch”,  
 “version”: “0.0.0”,  
 “dependencies”: {  
   “react”: “15.3.2”,  
   “react-dom”: “15.3.2”,  
   “recompose”: “latest”,  
   “babel-runtime”: “6.11.6”  
 }  
}</pre>

Going back to the **CODE** let’s import **compose** from _recompose_.

<pre name="ce5c" id="ce5c" class="graf graf--pre graf-after--p">import { compose } from ‘recompose’</pre>

Then you can use compose to further abstract the higher-order component.

<pre name="3c9e" id="3c9e" class="graf graf--pre graf-after--p">const HigherOrderComponent = compose(  
 container(  
  ‘[https://fcctop100.herokuapp.com/api/fccusers/top/alltime'](https://fcctop100.herokuapp.com/api/fccusers/top/alltime%27)  
 )  
)</pre>

And you can be more declarative about what the entire component is doing.

<pre name="e7d8" id="e7d8" class="graf graf--pre graf-after--p">const FetchAndDisplayFCCData = HigherOrderComponent(Presentational)</pre>

<pre name="a3df" id="a3df" class="graf graf--pre graf-after--pre">render(<FetchAndDisplayFCCData />, document.querySelector(‘#root’))</pre>

This has finally allowed you to create components that are versatile and flexible. You can even test your presentational components separately from higher-order components. Higher-order components FTW!

For kicks, Let’s update the presentational component to render a list of items instead of a big blob of data.

<pre name="5332" id="5332" class="graf graf--pre graf-after--p">const Presentational = ({ data }) =>   
 <ul>  
   {data.map((v, k) =>   
     <li key={k}>  
       {v.username}  
     </li>  
   )}  
 </ul></pre>

Whew! That was a lot. If you want to see the finished product take a look at the gist I created [here](https://gist.github.com/arecvlohe/c5005643ea4fcb9637ccd9f60b98d305).

For more information visit Andrew Clark’s great React utility library called _recompose_ to learn more!

[**acdlite/recompose**  
_recompose - A React utility belt for function components and higher-order components._github.com](https://github.com/acdlite/recompose "https://github.com/acdlite/recompose")[](https://github.com/acdlite/recompose)








