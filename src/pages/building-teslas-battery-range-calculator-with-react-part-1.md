---
author: Matthew Choi
authorTwitter: https://twitter.com/MatthewChoi7
authorFacebook: none
title: "Building Tesla’s Battery Range Calculator with React (Part 1)"
subTitle: "In this series of articles, I will walk you through the process of building Tesla’s battery range calculator with React...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*8hlNoLDBy5XWZct5tAtPoA.png
url: https://medium.freecodecamp.org/building-teslas-battery-range-calculator-with-react-part-1-2cb7abd8c1ee
id: building-teslas-battery-range-calculator-with-react-part-1-2cb7abd8c1ee
date: 2017-03-21T00:25:23.363Z
tags: [
	"React",
	"JavaScript",
	"Web Development",
	"Programming",
	"CSS"
]
---
# Building Tesla’s Battery Range Calculator with React (Part 1)











![](https://cdn-images-1.medium.com/max/2000/1*8hlNoLDBy5XWZct5tAtPoA.png)












In this series of articles, I will walk you through the process of building Tesla’s battery range calculator with React.

In this tutorial, we’ll build the React version of Todd Motto’s [Building Tesla’s battery range calculator with Angular 2 reactive forms](https://toddmotto.com/building-tesla-range-calculator-angular-2-reactive-forms).

So this post will reuse some materials (data, images, and css style). We will focus on rebuilding it in **React way**.

This is the final GIF image of our application.














🚀 Check out the [live version](http://react-tesla-charge-calculator.surge.sh/) before we get started.

💻 You can also check out the [source code](https://github.com/gyver98/part1-react-tesla-battery-range-calculator-tutorial).

Now let’s create the application step by step.

Note that you may need some basic React knowledge to follow this tutorial. See the following resources:

*   [React Official Documentation](https://facebook.github.io/react/docs/hello-world.html)
*   [React: Getting Started and Concepts](https://scotch.io/tutorials/learning-react-getting-started-and-concepts)

### 1\. Project Setup and create-react-app

### 1.1 Requirements

The tools and versions I used during the implementation of this app:

    node v7.3.0npm v3.10.10

### 1.2 create-react-app

[**creat-react-app**](https://github.com/facebookincubator/create-react-app) is a new tool open-sourced by Facebook for fast react application development, which allows you to easily start React applications without complex setups. You can easily install our project `react-tesla-range-calculator` and start the application right away with the following command:

*   npm install -g create-react-app
*   create-react-app react-tesla-range-calculator
*   cd react-tesla-range-calculator
*   npm start














Create a new application through `creat-react-app` and open `http://localhost:3000/` to check the generated application.

If you see the screen below, the project has been successfully set up.














Before we start the project, we need to touch the project source structure. Just leave the files we need for the project and delete the rest. (Delete App.test.js, logo.svg)

Now our src directory should look like this:

    src - App.css - App.js - index.css - index.js

Here is project source structure :














### 1.3 Project Entry Point

First we need to set the entry point to start our Tesla app. Thankfully it’s already created by `create-react-app`.

`src/App.js` is the entry point for our app.

First up, change your `App.js` to this:

    import React, { Component } from 'react';import './App.css';

    class App extends Component {  render() {    return (      Let's get started</h2>          );  }}

    export default App;

When you save the file, it will be automatically compiled and you can see the updated screen.

### 1.4 Project images/assets

All images required for this project can be downloaded from:

*   images [Download](https://toddmotto.com/static/assets.zip)
*   favicon.ico [Download](https://toddmotto.com/static/favicon.ico)

Unpack `assets.zip` and place all images in the `src/assets` directory and place the downloaded `favicon.ico` in the source root.

    react-tesla-range-calculator/src/assets

> Any time you feel like if you’ve missed something or unsure if you’re doing right, you can refer to the [source code](https://github.com/gyver98/part1-react-tesla-battery-range-calculator-tutorial) as a reference.

### 1.5 Data service

The data you can get from Tesla site is hard-coded and very large, so we’ll use Todd’s new version of the data to make it easier to use. [link](https://github.com/toddmotto/angular-tesla-range-calculator/blob/master/src/app/tesla-battery/tesla-battery.service.ts)

We do not use the `Injectable decorator` used in Angular2, so we will copy only the `export` part, just save it in `src/services/BatteryService.js` for now. Later, we will use `import` it in `TeslaBattery` container.

We will revisit this data service later.

### 2\. Breaking Down the UI

Almost all React application UIs consist of a composition of components. For example, a weather app consists of a component that displays a local name, a component that displays the current temperature, and a graph component that represents a five-day forecast. For this reason, it is a good idea to decompose the UI into component units before developing the React app.

> See [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html) for an approach to looking at an application as a combination of components.

The layout of this application is shown below






















The UI is represented by a component tree as follows.

    <App> -- Application entry point <Header></Header>  <TeslaBattery> -- Container 	<TeslaCar />     -- Presentational Component 	<TeslaStats />   -- Presentational Component  	<TeslaCounter /> -- Presentational Component 	<TeslaClimate /> -- Presentational Component 	<TeslaWheels />  -- Presentational Component 	<TeslaNotice />  -- Presentational Component  </TeslaBattery></App>

### 2.1 Container and Presentational Components

In the above mentioned component tree, we can see that it is classified as `Container Component` and `Presentational Component`.

This is a useful pattern that can be used when developing an application with React. It is easier to reuse by dividing components into two categories.

    * Container Component (stateful component): - Are concerned with how things work. - In general, except for some wrapping divs, they do not have their   own DOM markup and have no style. - Provide data and actions to presentational or other container components. - Are often stateful, as they tend to serve as data sources.

    * Presentational Component (stateless component): - Are concerned with how things look. - Usually have some DOM markup and styles of their own. - Receive data and callbacks exclusively via props. - Rarely have their own state (when they do, it’s UI state rather than data).

What are the benefits of using these patterns?

*   Better separation of concerns
*   Better reusability
*   Extract layout components to prevent duplication

> For more details, see [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.mbwo09sds)

### 3\. Header component

Let’s create our first React component, `Header`. The `Header` component is simply a black bar with the Tesla logo and text.

Create the `src/components/Header` directory, create a `Header.js` file in it, and enter the following code:

    import React from 'react';import './Header.css';import logoUrl from '../../assets/logo.svg';

    const Header = () => (      <img src={logoUrl} alt="Tesla" />  )

    export default Header;

> Here, the component is in the form of a function (`ES6 Arrow Function`). A component declared in this form is called a `functional component`. If there is no `state` and the `lifecycle`method is not needed, it is a good pattern to declare it as a function type. Functional components are suitable for `Presentational Component` because they have no state and they depend only on the `props` that is received from higher components.

### 3.1 Header Component Style

Create a `Header.css` file in the `src/components/Header` directory and type the following style:

    .header {  padding: 25px 0;  text-align: center;  background: #222;}

    .header img {  width: 100px;  height: 13px;}

> There are a number of ways to apply styles to components, but here we will create each component directory in the `src/components` directory and pair `js` and `css` files each time we create a component.

### 3.2 Import Header component in App Container

Now that you’ve created the `Header` component, let’s use `import` in the entry point `App.js`.

    import React, { Component } from 'react';import './App.css';import Header from './components/Header/Header';

    class App extends Component {  render() {    return (              <Header />              );  }}

    export default App;

When you save all the modified files, they will be updated automatically and you should see the Tesla logo as follows:














### 4\. TeslaBattery Container

In our app, the `TeslaBattery` component is responsible for creating and managing data and state as `Container Component`, passing it to other `Presentational Components`, performing a callback function and changing its state.

By inheriting `React.Component`, `TeslaBattery` must have a `render` method, optionally it can initialize its state through the `constructor`, and implement other methods such as [lifecycle](https://facebook.github.io/react/docs/react-component.html) callbacks.

`lifecycle callbacks` are useful when you want to render or update components, or to receive notifications at different stages of `lifecycle`.

Create the `src/containers` directory, create a `TeslaBattery.js` file in it, and enter the following code:

    import React from 'react';import './TeslaBattery.css';

    class TeslaBattery extends React.Component {  render() {    return (      <form className="tesla-battery">        <h1>Range Per Charge</h1>      </form>    )  }}

    export default TeslaBattery;

### 4.1 TeslaBattery Container Style

`TeslaBattery.css` only holds a minimal style.

    .tesla-battery {  width: 1050px;  margin: 0 auto;}

    .tesla-battery h1 {  font-family: 'RobotoNormal';  font-weight: 100;  font-size: 38px;  text-align: center;  letter-spacing: 3px;}

The components to be created in the future will be configured in the `TeslaBattery` container sequentially.

### 5\. TeslaNotice Component

Let’s create a static text part with a `TeslaNotice` component.

Create the `src/components/TeslaNotice` directory, create a `TeslaNotice.js` file in it, and enter the following code:

    import React from 'react';import './TeslaNotice.css';

    const TeslaNotice = () => (      <p>      The actual amount of range that you experience will vary based      on your particular use conditions. See how particular use conditions      may affect your range in our simulation model.    </p>    <p>      Vehicle range may vary depending on the vehicle configuration,      battery age and condition, driving style and operating, environmental      and climate conditions.    </p>  )

    export default TeslaNotice;

### 5.1 TeslaNotice Component Style

Next up, create `src/components/TeslaNotice` directory, create `TeslaNotice.css`in it and add these styles to your `TeslaNotice.css` file:

    .tesla-battery__notice {    margin: 20px 0;    font-size: 15px;    color: #666;    line-height: 20px;}

### 5.2 Import TeslaNotice component in TeslaBattery Container

Next, import `TeslaNotice` component in `TeslaBattery.js`:

    ...import TeslaNotice from '../components/TeslaNotice/TeslaNotice';

    class TeslaBattery extends React.Component {  render() {    return (      <form className="tesla-battery">        <h1>Range Per Charge</h1>        <TeslaNotice />      </form>    )  }}...

> We will continue in such a way that components are created in this pattern and imported from the `TeslaBattery` container.

### 6\. TeslaCar Component

Now let’s render a nice Tesla car image with wheel animation.

Create the `src/components/TeslaCar` directory, create a `TeslaCar.js` file in it, and inside your `TeslaCar.js` file :

    import React from 'react';import './TeslaCar.css';

    const TeslaCar = (props) => (                        );

    TeslaCar.propTypes = {  wheelsize: React.PropTypes.number}

    export default TeslaCar;

Here we specify `propTypes` using the React built-in typechecking. In development mode, React checks `props` passed to the component. (Only in development mode for performance reasons)

For each `props` attribute, React attempts to find it in the component’s `propType` object to determine whether (1) prop is expected (2) prop is the correct type. In this case, the `TeslaCar` component expects the `props` attribute `wheelsize` and specifies that it is a `number` type. If the wrong value is provided, a warning appears in the JavaScript console, which is useful for fixing potential bugs in early stage.

> More information on `React.PropTypes` can be found [here](https://facebook.github.io/react/docs/typechecking-with-proptypes.html)











* * *







> Update: New Deprecation Warnings in React 15.5

> In 15.5, instead of accessing `PropTypes` from the main `React` object, install the `prop-types`package and import them from there:

https://facebook.github.io/react/blog/2017/04/07/react-v15.5.0.html#migrating-from-react.proptypes

<pre name="22c7" id="22c7" class="graf graf--pre graf-after--p">// **Before (15.4 and below)** import React from 'react';</pre>

    import React from 'react';import './TeslaCar.css';

<pre name="db41" id="db41" class="graf graf--pre graf-after--pre">.........................</pre>

    TeslaCar.propTypes = {  wheelsize: React.PropTypes.number}

    export default TeslaCar;

<pre name="1e73" id="1e73" class="graf graf--pre graf-after--pre">// **After (15.5)**   
import React from 'react';   
**import PropTypes from 'prop-types';**  
`import './TeslaCar.css';`</pre>

<pre name="44cc" id="44cc" class="graf graf--pre graf-after--pre">...........................</pre>

<pre name="4530" id="4530" class="graf graf--pre graf-after--pre">TeslaCar.propTypes = {   
  wheelsize: **PropTypes.number**  
}  

export default TeslaCar;</pre>

### 6.1 TeslaCar Component Style

Next, create a `TeslaCar.css` file in the `src/components/TeslaCar` directory and give it the following style. Since the code is long and omitted here, let’s check the [source code](https://github.com/gyver98/part1-react-tesla-battery-range-calculator-tutorial/blob/master/src/components/TeslaCar/TeslaCar.css).

    .tesla-car {  width: 100%;  min-height: 350px;  background: #fff url(../../assets/tesla.jpg) no-repeat top center;  background-size: contain; }

    .tesla-wheels {  height: 247px;  width: 555px;  position: relative;  margin: 0 auto; }

    ...

This gives us our animations and the component base for the car, which is displayed as background images.

### 6.2 Import TeslaCar component in TeslaBattery Container

Next, we need to add this component to our container again. Import `TeslaNotice` component in `TeslaBattery.js`:

    ...import TeslaCar from '../components/TeslaCar/TeslaCar';

    class TeslaBattery extends React.Component {  render() {    return (      <form className="tesla-battery">        <h1>Range Per Charge</h1>        <TeslaCar />        <TeslaNotice />      </form>    )  }}...

Here’s what you should be seeing:














### 7\. Props and React Developer Tools

Wow! It’s nice but something is missing. The wheels are not shown. Let’s look for the cause. According to the source code, `TeslaCar` should be passed to `props` and class name changed based on `props.wheelsize`.

In other words, you need to receive some data (in this case, wheelsize) from the parent component and render it properly, and there must be a communication method that can receive the data.

React is composed of a component tree, which consists of a container for delivering data and state, and a component for passively receiving data and state from a container. The tool that delivers this state to the subcomponents is a single object, `props`.

You can easily understand this by checking the component tree using [React Developer Tools](https://www.google.com.au/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwi10rn7soTSAhVJp5QKHYPcC5YQFggbMAA&url=https%3A%2F%2Fchrome.google.com%2Fwebstore%2Fdetail%2Freact-developer-tools%2Ffmkadmapgofadopljbjfkapdkoienihi%3Fhl%3Den&usg=AFQjCNEv0udXgBoaukzJa59I_vufhScUbQ&sig2=wTA5bB3JG2ZQ6wbSiDgq8g) in Chrome.














`props` is a JavaScript single object, in this case an empty object. This is because we did not pass `props` in the parent component `TeslaBattery`.

### 8\. State of Application

We need to think about what `state` is required to be managed in our app. If you look at the final app GIF image at the top of this article, the state values ​​are:

*   **carstats (object array)** : An array of battery numerical value objects ​​by car model according to the currently selected condition value (speed, temperature, climate, wheel)
*   **config (object)**: Currently selected conditions object (speed: 55, temperature: 20, climate: aricon on, wheel: 19)
















state of application







That is the single source of truth for our app. Now we will add the constructor method to the `TeslaBattery` container and set the initial value so that we can manage this state value and pass it to the subcomponent. The `TeslaCar` component accepts the `wheelsize` input through `props` and renders the Tesla car image and spins the wheels.

> Both the parent component and the child component do not know whether a particular component is stateful or stateless and do not care whether it is defined as a `function` or a `class`. This is why the state is often called local or encapsulated. This state can not be accessed by components other than the component that owns and sets the state. So this state value can be passed to the sub-component as `props`. This is commonly referred to as a “top-down” or “unidirectional” data flow. Every state is always owned by a particular component, and any data or UI derived from that state only affects the “downward” component of the tree.

    ...class TeslaBattery extends React.Component {  constructor(props) {    super(props);

        this.state = {      carstats: [],      config: {        speed: 55,        temperature: 20,        climate: true,        wheels: 19      }    }  }    render() {    // ES6 Object destructuring Syntax,    // takes out required values and create references to them    const { config } = this.state;    return (      <form className="tesla-battery">        <h1>Range Per Charge</h1>        <TeslaCar wheelsize={config.wheels}/>        <TeslaNotice />      </form>    )  }}...

In `render()`, the code in the form `const {a, b} = c` is `ES6 Object Destructuring`. It takes the required value out of the object and makes a reference to it.

> Conceptually, the React component is like a JavaScript function and receives an arbitrary input called **‘props’** and returns a React element that describes what should be shown.

In a word, this concept can be expressed by the following formula.

> **fn(d) = V**

A function that receives data as input and returns a view.

If you save files, you can see that the rendered Tesla car and wheel animation work well on the updated screen. You can also see that `props` is passed well in the component tree.
















TeslaCar props







> Some functions are called “pure” in the sense that they always return the same output value if they have the same input value without changing the input value. (`Pure function`) One important React strict rule here is that all React components should behave like pure functions with respect to props. `props` must be read-only.

### 9\. TeslaStats Component

Now we are going to build the `TeslaStats` component. Create the `src/components/TeslaStats` directory, create a `TeslaStats.js` file in it, and enter the following code:

    import React from 'react';import './TeslaStats.css';

    const TeslaStats = (props) => {  const listItems = props.carstats.map((stat) => (    <li key={stat.model}>            <p>{stat.miles}</p>    </li>  ));  return (        <ul>      {listItems}      </ul>    )};

    TeslaStats.propTypes = {  carstats: React.PropTypes.array}

    export default TeslaStats;

`TeslaStats` is also a `presentational component` that receives state, and it takes a list of arrays containing model values ​​by `props` and renders them.

First, let’s consider how to transform a list in JavaScript. The following code uses the `map()` function to take a `numbers` array and return a double value.

This code prints `[2, 4, 6, 8, 10]` to the console.

    const numbers = [1, 2, 3, 4, 5];const doubled = numbers.map((number) => number * 2);console.log(doubled);

Converting an array to a list in React is almost identical. Here we use the JavaScript `map` function to iterate through the `props.carstats` array.

For each iteration, it returns a `<li>` element containing the `model` and a `<li>`element surrounding the `<p>` tag containing `miles`.

Finally, it returns the `listItems` array in the `<ul>` element.

### 9.1 TeslaStats Component Style

Next, create a `TeslaStats.css` file in the `src/components/TeslaStats` directory and type the following style. Since the code is long and omitted here, let’s check the [source code](https://github.com/gyver98/part1-react-tesla-battery-range-calculator-tutorial/blob/master/src/components/TeslaStats/TeslaStats.css)

    ....tesla-stats {  margin: -70px 0 30px; }.tesla-stats ul {  text-align: center; }...

The task that this component performs is to iterate through the `props.carstats`array and bind a particular class to an element based on `stat.model`. You can then replace the background image to display the Tesla model.

### 9.2 Import TeslaStats component in TeslaBattery Container

Then add following `import` to use the `TeslaStats` component in `TeslaBattery.js`.

    ...import TeslaStats from '../components/TeslaStats/TeslaStats';...render() {  const { config, carstats } = this.state;  return (    <form className="tesla-battery">      <h1>Range Per Charge</h1>      <TeslaCar wheelsize={config.wheels}/>      <TeslaStats carstats={carstats}/>      <TeslaNotice />    </form>  )}...

We need to pass the `carstats` array to `props`, so let’s set the value using `BatteryService` we’ve already implemented.

### 9.3 CalculateStats and setState

Add import `getModelData` first.

After the component is mounted via `componentDidMount()`, it calls the `statsUpdate()` function. When `calculateStats()` function that receives `carModels` and the current state value as the input is executed, the object with the matching `model` and `miles` values ​​is returned, and the return value is passed through the `setState()` and then state object is updated.

    ...import { getModelData } from '../services/BatteryService';...

    calculateStats = (models, value) => {  const dataModels = getModelData();  return models.map(model => {    // ES6 Object destructuring Syntax,    // takes out required values and create references to them    const { speed, temperature, climate, wheels } = value;    const miles = dataModels[model][wheels][climate ? 'on' : 'off'].speed[speed][temperature];    return {      model,      miles    };  });}  statsUpdate() {  const carModels = ['60', '60D', '75', '75D', '90D', 'P100D'];  // Fetch model info from BatteryService and calculate then update state  this.setState({    carstats: this.calculateStats(carModels, this.state.config)  })  }  componentDidMount() {  this.statsUpdate(); }...

One caveat is that explicit binding in the `TeslaBattery` constructor function is required to access `this` in the class.

    ...this.calculateStats = this.calculateStats.bind(this);this.statsUpdate = this.statsUpdate.bind(this);...

### 9.4 Add Additional Style

Additional styling is required for a nice layout here.

First open the `src/index.css` file and delete all existing code and add the following:

    @font-face {  font-family: 'RobotoNormal';  src: url('./assets/fonts/Roboto-Regular-webfont.eot');  src: url('./assets/fonts/Roboto-Regular-webfont.eot?#iefix') format('embedded-opentype'),       url('./assets/fonts/Roboto-Regular-webfont.woff') format('woff'),       url('./assets/fonts/Roboto-Regular-webfont.ttf') format('truetype'),       url('./assets/fonts/Roboto-Regular-webfont.svg#RobotoRegular') format('svg');  font-weight: normal;  font-style: normal;}

    *, *:before, *:after {  box-sizing: border-box;  margin: 0;  padding: 0;  font: 300 14px/1.4 'Helvetica Neue', Helvetica, Arial, sans-serif;  -webkit-font-smoothing: antialiased;}

    .cf:before,.cf:after {    content: '';    display: table;}.cf:after {    clear: both;}.cf {  *zoom: 1;}

Next, open the `src/App.css` file and delete all existing code and add the following:

    .wrapper {  margin: 100px 0 150px;}

The work result screen so far is as follows.














### 10\. Reusable TeslaCounter Component

Tesla’s speed and external temperature controls should be reusable components, so I’ll make them a generic Counter component that allows for other metadata such as step, minimum, maximum, and title and units (mph / degrees).

Also, unlike the components we have created so far, we need an action to change the state value in response to user input (button click, checkbox selection, etc.). Let’s look at how to handle events that occur in a subcomponent.

Create the `src/components/TeslaCounter` directory as before, create a `TeslaCounter.js` file in it, and enter the following code:

    import React from 'react';import './TeslaCounter.css';

    const TeslaCounter = (props) => (      <p className="tesla-counter__title">{props.initValues.title}</p>                  <p className="tesla-counter__number">          { props.currentValue }                  </p>                  <button             onClick={(e) => props.increment(e, props.initValues.title)}             disabled={props.currentValue >= props.initValues.max}           >          </button>          <button             onClick={(e) => props.decrement(e, props.initValues.title)}             disabled={props.currentValue <= props.initValues.min}           >          </button>                      );

    TeslaCounter.propTypes = {  currentValue: React.PropTypes.number,  increment: React.PropTypes.func,  decrement: React.PropTypes.func,  initValues: React.PropTypes.object}

    export default TeslaCounter;

Let’s think about what we want here. Each time you click and change the speed and temperature, you must update the state so that the value is reflected between the maximum and minimum values.

Since the component only needs to update its own state, `TeslaBattery` passes the callback (`increment`, `decrement`) to the `TeslaCounter` each time it needs to update its state. You can use the `onClick` event on a button to notify the event. The callback passed by `TeslaBattery` calls `setState()` and the app is updated.

We will implement a callback that will be passed by `TeslaBattery` in a few moments.

### 10.1 TeslaCounter Component Style

Let’s implement the style first. Create a `TeslaCounter.css` file in the `src/components/TeslaCounter` directory and specify the following styles. Since the code is long and omitted here, let’s check the [source code](https://github.com/gyver98/part1-react-tesla-battery-range-calculator-tutorial/blob/master/src/components/TeslaCounter/TeslaCounter.css)

    .tesla-counter {  float: left;  width: 230px; }.tesla-counter__title {  letter-spacing: 2px;  font-size: 16px; }...

### 10.2 Import TeslaCounter Component in TeslaBattery Container

Now, we will implement `callback` in `TeslaBattery` and pass it to the `TeslaCounter` component.

First, add `import` to use the `TeslaCounter` component in `TeslaBattery.js`.

We also implement the callback functions `increment()` and `decrement()`, and the internal function `updateCounterState()` and bind it in the `constructor`. Then pass the `callback` function to the `TeslaCounter` component with `props`.

    ...constructor(props) {    super(props);

        this.calculateStats = this.calculateStats.bind(this);    this.statsUpdate = this.statsUpdate.bind(this);    this.increment = this.increment.bind(this);    this.decrement = this.decrement.bind(this);    this.updateCounterState = this.updateCounterState.bind(this);

        this.state = {      carstats: [],      config: {        speed: 55,        temperature: 20,        climate: true,        wheels: 19      }    }  }...updateCounterState(title, newValue) {    const config = { ...this.state.config };    // update config state with new value    title === 'Speed' ? config['speed'] = newValue : config['temperature'] = newValue;    // update our state    this.setState({ config });  }

      increment(e, title) {    e.preventDefault();    let currentValue, maxValue, step;    const { speed, temperature } = this.props.counterDefaultVal;    if (title === 'Speed') {      currentValue = this.state.config.speed;      maxValue = speed.max;      step = speed.step;    } else {      currentValue = this.state.config.temperature;      maxValue = temperature.max;      step = temperature.step;    }

        if (currentValue < maxValue) {      const newValue = currentValue + step;      this.updateCounterState(title, newValue);    }  }

      decrement(e, title) {    e.preventDefault();    let currentValue, minValue, step;    const { speed, temperature } = this.props.counterDefaultVal;    if (title === 'Speed') {      currentValue = this.state.config.speed;      minValue = speed.min;      step = speed.step;    } else {      currentValue = this.state.config.temperature;      minValue = temperature.min;      step = temperature.step;    }

        if (currentValue > minValue) {      const newValue = currentValue - step;      this.updateCounterState(title, newValue);    }  }  ...render() {		return (      <form className="tesla-battery">        <h1>Range Per Charge</h1>        <TeslaCar wheelsize={config.wheels} />        <TeslaStats carstats={carstats} />                  <TeslaCounter            currentValue={this.state.config.speed}            initValues={this.props.counterDefaultVal.speed}            increment={this.increment}            decrement={this.decrement}          />                      <TeslaCounter              currentValue={this.state.config.temperature}              initValues={this.props.counterDefaultVal.temperature}              increment={this.increment}              decrement={this.decrement}            />                          <TeslaNotice />    </form>  )}

### 10.3 TeslaBattery Container Style

An additional style is required for `TeslaBattery` as soon as the `TeslaCounter` component is added. Open the `TeslaBattery.css` file and add the following:

    .tesla-climate-container {  float: left;  width: 420px;  padding: 0 40px;  margin: 0 40px 0 0;  border-left: 1px solid #ccc;  border-right: 1px solid #ccc;}.tesla-controls {  display: block;  width: 100%;}

### 10.4 Default Value Props

Here, `initValues` passed to `TeslaCounter` is a constant value and is passed from `App` which is a parent component of `TeslaBattery`.

Open `App.js` and pass the `counterDefaultVal` object to the `TeslaBattery` component as follows:

    import React, { Component } from 'react';import './App.css';import Header from './components/Header/Header';import TeslaBattery from './containers/TeslaBattery';

    const counterDefaultVal = {  speed: {    title: "Speed",    unit: "mph",    step: 5,    min: 45,    max: 70  },  temperature: {    title: "Outside Temperature",    unit: "°",    step: 10,    min: -10,    max: 40  }};

    class App extends Component {  render() {    return (              <Header />        <TeslaBattery counterDefaultVal={counterDefaultVal}/>          );  }}

    export default App;

Now, when you click Speed ​​and Temperature, you can see that the changed values ​​are updated and re-rendered in the state object through the `React Developer Tool`.














### 10.5 Virtual DOM

What a single-page application can give us is a seamless user experience and smooth interaction.

In our app, car model values ​​are updated without having to reload the entire page every time the user changes speed or temperature. Even if you need to connect to the server to get the data. To provide this user experience, you need to know which part of the `DOM` you need to update when changes or interactions occur.

Each JavaScript framework uses a different strategy: `Ember` uses `data-binding`, `Angular1` uses [dirty checking](https://docs.angularjs.org/guide/scope), and `React` uses [Virtual DOM](https://facebook.github.io/react/docs/rendering-elements.html).

In React, the first time the component’s rendering method is called, it prints a `virtual DOM` model, rather than the actual `DOM` element itself. The `virtual DOM` is a JavaScript data structure that represents the appearance of `DOM`. React then takes this model and creates the actual `DOM` element.

Then, whenever the component’s state changes (eg, `setState` is called), the rendering method of the component is called and a new `virtual DOM` is created, and this new `virtual DOM` is compared with the previous `virtual DOM`. The result of this comparison is to show the actual `DOM` changes and the `DOM` will be ‘patched’ with the changes and the screen will change.

> The car model information does not change yet as the speed and temperature change. This will eventually be implemented later.

### 11\. Aircon and Heating Controls

We monitor the temperature and change the `heating` to `aircon` when it is more than 20 degrees, and `heating` when it is below 20 degrees.

First create a directory `src/components/TeslaClimate`, create a `TeslaClimate.js`file in it, and enter the following code:

    import React from 'react';import './TeslaClimate.css';

    const TeslaClimate = (props) => (      <label      className={`tesla-climate__item ${props.value ? 'tesla-climate__item--active' : '' }  ${!props.limit ? 'tesla-heat':''}`}    >      <p>{props.limit ? 'ac' : 'heat'} {props.value ? 'on' : 'off'}</p>      <i className="tesla-climate__icon"></i>      <input        type="checkbox"        name="climate"        checked={props.value}        onChange={() => {props.handleChangeClimate()}}      />    </label>  );

    TeslaClimate.propTypes = {  value: React.PropTypes.bool,  limit: React.PropTypes.bool,  handleChangeClimate: React.PropTypes.func}

    export default TeslaClimate;

This component changes the style class according to the `props.value` passed in, and changes the text according to `props.limit`.

`TeslaBattery` passes callback(`handleChangeClimate` in this case) to `TeslaClimate`, which is executed whenever the state needs to be updated. `onChange`event can be used to notify the event. The `callback` passed by `TeslaBattery` is called with `setState()` to update its state and re-render.

### 11.1 TeslaClimate Component Style

Create a `TeslaClimate.css` file in the `src/components/TeslaClimate` directory and specify the following styles. Since the code is long and omitted here, let’s check the [source code](https://github.com/gyver98/part1-react-tesla-battery-range-calculator-tutorial/blob/master/src/components/TeslaClimate/TeslaClimate.css).

    .tesla-climate {	  float: left;   }  .tesla-climate__item {    cursor: pointer;    display: block;    width: 100px;    height: 100px;    border: 6px solid #f7f7f7;    border-radius: 50%;    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);    color: #666;    background: #fff;   }  ...

### 11.2 Import TeslaClimate Component in TeslaBattery Container

Now we will implement `callback` in `TeslaBattery` and pass it to the `TeslaClimate`component.

First, add `import` to use the `TeslaClimate` component in `TeslaBattery.js`. We implement callback function `handleChangeClimate()` and bind it in `constructor()`. Then pass the callback function to the `TeslaClimate` component as `props`.

    ...import TeslaClimate from '../components/TeslaClimate/TeslaClimate';...constructor(props) {  super(props);  ...  this.handleChangeClimate = this.handleChangeClimate.bind(this);  ...}// handle aircon & heating click event handlerhandleChangeClimate() {  const config = {...this.state.config};  config['climate'] = !this.state.config.climate;  this.setState({ config });}

    ...<TeslaClimate  value={this.state.config.climate}  limit={this.state.config.temperature > 10}  handleChangeClimate={this.handleChangeClimate}/>  ...

Now the state value changes according to the temperature change, and when the changed value is passed to the `TeslaClimate` component, the style class and text are changed according to the value.














### 12\. TeslaWheels Component

Finally, let’s make the final component `TeslaWheels`. As always, create a directory `src/components/TeslaWheels`, create a `TeslaWheels` file in it, and enter the following code.

    import React from 'react';import './TeslaWheels.css';

    const LabelLists = (props) => {  const value = props.wheels.value;  const changeHandler = props.wheels.handleChangeWheels;  const sizes = [19, 21];  const LabelItems = sizes.map(size => (    <label key={size} className={`tesla-wheels__item tesla-wheels__item--${size} ${value === size ? 'tesla-wheels__item--active' : '' }`}>      <input        type="radio"        name="wheelsize"        value={size}        checked={value === size}         onChange={() => {changeHandler(size)}} />      <p>        {size}"      </p>    </label>     )  );  return (      );}const TeslaWheels = (props) => (      <p className="tesla-wheels__title">Wheels</p>          <LabelLists wheels={props}/>      );TeslaWheels.propTypes = {  value: React.PropTypes.number,  handleChangeWheels: React.PropTypes.func}export default TeslaWheels;

Our implementation here is similar to the conversion of the `props` array object to a list in the `TeslaStats` component. Repeat the `props.sizes` array using the `javascript map()` function.

For each iteration, it returns the `<label>` elements containing `size`. Finally, the `LabelItems` list is built into the `TeslaWheels` component and rendered.

In the `<label>` element, the effect of wheel animation is shown by changing the class according to the transmitted wheel size.

### 12.1 TeslaWheels Component Style

Create a `TeslaWheels.css` file in the `src/components/TeslaWheels` directory and specify the following styles. Since the code is long and omitted here, let’s check the [source code](https://github.com/gyver98/part1-react-tesla-battery-range-calculator-tutorial/blob/master/src/components/TeslaWheels/TeslaWheels.css).

    .tesla-wheels__component {  float: left;  width: 355px;}.tesla-wheels__title {  letter-spacing: 2px;  font-size: 16px;}...

### 12.2 Import TeslaWheels Component in TeslaBattery Container

Finally, implement `callback` in `TeslaBattery` and pass it to the `TeslaWheels` component.

Add `import` to use the `TeslaWheels` component in `TeslaBattery.js`. We then implement callback function `handleChangeWheels()` and bind it in `constructor`. Then pass the callback function to the `TeslaWheels` component as `props`.

    ...import TeslaWheels from '../components/TeslaWheels';...constructor(props) {    super(props);    this.calculateStats = this.calculateStats.bind(this);    this.increment = this.increment.bind(this);    this.decrement = this.decrement.bind(this);    this.handleChangeClimate = this.handleChangeClimate.bind(this);    this.handleChangeWheels = this.handleChangeWheels.bind(this);    this.statsUpdate = this.statsUpdate.bind(this);...handleChangeWheels(size) {  const config = {...this.state.config};  config['wheels'] = size;  this.setState({ config });}...<TeslaWheels  value={this.state.config.wheels}  handleChangeWheels={this.handleChangeWheels}/>...

The result of the completion of the wheels animation is as follows.














### 13\. State Update

Are we finally done? Even if the user changes several condition values, the difference value of the vehicle model does not change properly.

So far, we’ve only updated a part of our app’s status each time an event occurs.

    this.setState({ config });

Now let’s change the `carstats` state whenever the config state value changes.

    statsUpdate() {  const carModels = ['60', '60D', '75', '75D', '90D', 'P100D'];  // Fetch model info from BatteryService and calculate then update state  this.setState({  carstats: this.calculateStats(carModels, this.state.config)  })}

Now we create a function that take the `carModels` and the current state value as inputs and reflects the changed `carStats` in the app state and pass it to `this.setState` as a callback.

By doing this, it is possible to update the `config` object first in `setState()`, which operates asynchronous method, and to render the changed `stats` on the screen based on this.

    this.setState({ config }, () => {this.statsUpdate()});

This completes all the puzzles. The complete code for TeslaBattery is:

    import React from 'react';import './TeslaBattery.css';import TeslaNotice from '../components/TeslaNotice/TeslaNotice';import TeslaCar from '../components/TeslaCar/TeslaCar';import TeslaStats from '../components/TeslaStats/TeslaStats';import TeslaCounter from '../components/TeslaCounter/TeslaCounter';import TeslaClimate from '../components/TeslaClimate/TeslaClimate';import TeslaWheels from '../components/TeslaWheels/TeslaWheels';import { getModelData } from '../services/BatteryService';

    class TeslaBattery extends React.Component {  constructor(props) {    super(props);

        this.calculateStats = this.calculateStats.bind(this);    this.statsUpdate = this.statsUpdate.bind(this);    this.increment = this.increment.bind(this);    this.decrement = this.decrement.bind(this);    this.updateCounterState = this.updateCounterState.bind(this);    this.handleChangeClimate = this.handleChangeClimate.bind(this);    this.handleChangeWheels = this.handleChangeWheels.bind(this);

        this.state = {      carstats: [],      config: {        speed: 55,        temperature: 20,        climate: true,        wheels: 19      }    }  }

      calculateStats = (models, value) => {    const dataModels = getModelData();    return models.map(model => {      const { speed, temperature, climate, wheels } = value;      const miles = dataModels[model][wheels][climate ? 'on' : 'off'].speed[speed][temperature];      return {        model,        miles      };    });  }

      statsUpdate() {    const carModels = ['60', '60D', '75', '75D', '90D', 'P100D'];    // Fetch model info from BatteryService and calculate then update state    this.setState({      carstats: this.calculateStats(carModels, this.state.config)    })  }

      componentDidMount() {    this.statsUpdate();  }

      updateCounterState(title, newValue) {    const config = { ...this.state.config };    // update config state with new value    title === 'Speed' ? config['speed'] = newValue : config['temperature'] = newValue;    // update our state    this.setState({ config }, () => {this.statsUpdate()});  }

      increment(e, title) {    e.preventDefault();    let currentValue, maxValue, step;    const { speed, temperature } = this.props.counterDefaultVal;    if (title === 'Speed') {      currentValue = this.state.config.speed;      maxValue = speed.max;      step = speed.step;    } else {      currentValue = this.state.config.temperature;      maxValue = temperature.max;      step = temperature.step;    }

        if (currentValue < maxValue) {      const newValue = currentValue + step;      this.updateCounterState(title, newValue);    }  }

      decrement(e, title) {    e.preventDefault();    let currentValue, minValue, step;    const { speed, temperature } = this.props.counterDefaultVal;    if (title === 'Speed') {      currentValue = this.state.config.speed;      minValue = speed.min;      step = speed.step;    } else {      currentValue = this.state.config.temperature;      minValue = temperature.min;      step = temperature.step;    }

        if (currentValue > minValue) {      const newValue = currentValue - step;      this.updateCounterState(title, newValue);    }  }

      // handle aircon & heating click event handler  handleChangeClimate() {    const config = {...this.state.config};    config['climate'] = !this.state.config.climate;    this.setState({ config }, () => {this.statsUpdate()});  }

      // handle Wheels click event handler  handleChangeWheels(size) {    const config = {...this.state.config};    config['wheels'] = size;    this.setState({ config }, () => {this.statsUpdate()});  }  

      render() {        const { config, carstats } = this.state;    return (      <form className="tesla-battery">        <h1>Range Per Charge</h1>        <TeslaCar wheelsize={config.wheels} />        <TeslaStats carstats={carstats} />                  <TeslaCounter            currentValue={this.state.config.speed}            initValues={this.props.counterDefaultVal.speed}            increment={this.increment}            decrement={this.decrement}          />                      <TeslaCounter              currentValue={this.state.config.temperature}              initValues={this.props.counterDefaultVal.temperature}              increment={this.increment}              decrement={this.decrement}            />            <TeslaClimate              value={this.state.config.climate}              limit={this.state.config.temperature > 10}              handleChangeClimate={this.handleChangeClimate}            />                    <TeslaWheels            value={this.state.config.wheels}            handleChangeWheels={this.handleChangeWheels}          />                <TeslaNotice />      </form>    )  }}

    export default TeslaBattery;

> Check out [final project code](https://github.com/gyver98/part1-react-tesla-battery-range-calculator-tutorial)

### 14\. Build

It’s time to build our app.

    npm run build

If the build succeeds, the build folder will be created in our project directory and the following message will be displayed.














Now our build is ready to be deployed.

### 15\. Deploy

With tools like [Surge](http://surge.sh/), we can really easily deploy our built app.

`Surge` is simple, single-command web publishing. It publishes HTML, CSS, and JS for free, without leaving the command line.

First, install the tool with `npm` and run the `surge` command in the `build` directory.

    $ npm install -global surge$ cd build$ surge

If this is your first time running, you will need to enter your email and password to register a new account.

The deployment is finished in an instant.














Let’s connect to our deployed project.

> [react-tesla-charge-calculator.surge.sh](http://react-tesla-charge-calculator.surge.sh/)














### Conclusion

In this post, we learned some points of creating React components and composing them to create a front-end app through rebuilding `Tesla's Battery Range Calculator`. If you’ve followed along until now, then congratulations on getting a React app up and running.

In the next installment, we’ll explore how to improve our state management with the `Redux` library. In the meantime, if you have any comments, suggestions, or corrections, please feel free to post them in the comments section.

Thanks for your feedback in advance.








