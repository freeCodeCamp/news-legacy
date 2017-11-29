---
author: Scott Domes
authorTwitter: https://twitter.com/scottdomes
authorFacebook: https://facebook.com/504870381
title: "Everything You Should Know About React: The Basics You Need to Start Building"
subTitle: "Are you curious about React and haven’t had the chance to learn it? Or maybe you’ve tried tutorials in the past, but struggled to master ..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*Ayz9rmofYhMCCC1KVuST3w.png
url: https://medium.freecodecamp.org/everything-you-need-to-know-about-react-eaedf53238c4
id: everything-you-need-to-know-about-react-eaedf53238c4
date: 2017-11-12T22:40:59.859Z
tags: [
  "JavaScript",
  "React",
  "Web Development",
  "Programming",
  "Tech"
]
---
# Everything You Should Know About React: The Basics You Need to Start Building







![](https://cdn-images-1.medium.com/max/2000/1*Ayz9rmofYhMCCC1KVuST3w.png)







Are you curious about React and haven’t had the chance to learn it? Or maybe you’ve tried tutorials in the past, but struggled to master the core concepts? Or maybe you’ve learned the basics, but want to consolidate your knowledge? Either way, this article is for you.

We’re going to build a simple React music player, layering on new React concepts as we go.

Here’s what we’ll cover:

*   What is a React component?
*   ReactDOM rendering
*   Class vs functional components
*   JSX
*   State
*   Event handling
*   Asynchronous setState
*   Props
*   Refs

That’s just about everything you need to build and maintain a React application. But we’re going to introduce it piece-by-piece.

### Setup

Here’s the situation: a small start-up has reached out to you for your help. They’ve created a page for users to upload music and have it visualized in glowing colour. But they need you to do the hard part—AKA to make it work.

To get going, make a new project directory and add [the following three files](https://gist.github.com/scottdomes/aae01cce0fdb69cea49aa5b3b75f3313).





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d0dbebf4e1ad2399383f2ba84f0891de?postId=eaedf53238c4" data-media-id="d0dbebf4e1ad2399383f2ba84f0891de" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F13612785%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





**Make sure you’re using an up-to-date version of** [**Chrome**](https://www.google.com/intl/en/chrome/browser/desktop/index.html) **with this tutorial, otherwise the animations in the code above won’t work.**

Thanks to [Steven Fabre](https://twitter.com/stevenfabre) for the play button CSS and [Justin Windle](https://codepen.io/soulwire/) for visualization code ([you can view the original here](https://codepen.io/soulwire/pen/Dscga)).

Open up `index.html` in both a code editor and your browser, and let’s get started!

### What is React?

React is a way to build user interfaces. It is only concerned with what you see on the front-end. React makes user interfaces very easy to build by cutting each page into pieces. We call these pieces _components._

Here is an example of cutting a page into components:



![](https://cdn-images-1.medium.com/max/1600/1*bvQNHjZOXcl-ds9A4AWYVg.png)



Each section highlighted above is considered a component. But what does this mean for a developer?

### What is a React Component?

A React component is a bit of code that represents a piece of the page. Each component is a JavaScript function that returns a piece of code that represents a piece of a web page.

To build a page, we call these functions in a certain order, put together the result, and show it to the user.

Let’s write a component inside the `<script>` tag in `index.html` with the `type` of `“text/babel”`:

<pre name="8390" id="8390" class="graf graf--pre graf-after--p"><script type="text/babel">  
  function OurFirstComponent() {  
    return (  
      // Code that represents the UI element goes here  
    );  
  }  
</script></pre>

When we call the `OurFirstcomponent()` function, we will get back a piece of the page.

You can also write functions like this:

<pre name="3105" id="3105" class="graf graf--pre graf-after--p">const OurFirstComponent = () => {  
  return (  
    // Stuff to make this component goes here  
  );  
}</pre>

React uses a language called JSX that looks like HTML but works inside JavaScript, which HTML usually doesn’t do.

You can add plain HTML to this section to make it appear on the UI:

<pre name="2dfa" id="2dfa" class="graf graf--pre graf-after--p"><script type="text/babel">  
  function OurFirstComponent() {  
    return (  
      <h1>Hello, I am a React Component!</h1>  
    );  
  }  
</script></pre>

When we call the `OurFirstComponent()` function, we get back a bit of JSX. We can use something called [ReactDOM](https://www.npmjs.com/package/react-dom) to put it on the page.

<pre name="ef28" id="ef28" class="graf graf--pre graf-after--p"><script type="text/babel">  
  function OurFirstComponent() {  
    return (  
      <h1>Hello, I am a React Component!</h1>  
    );  
  }</pre>

<pre name="5f26" id="5f26" class="graf graf--pre graf-after--pre"> **const placeWeWantToPutComponent = document.getElementById('hook');  
  ReactDOM.render(OurFirstComponent(), placeWeWantToPutComponent);**  
</script></pre>

Now our `<h1>` tag will be put inside the element with the ID of `hook.` It should look like this when you refresh your browser:



![](https://cdn-images-1.medium.com/max/1600/1*X3sGgAtXyBDFEcgtbR3tOw.png)



We can also write our component in JSX like so:

<pre name="e9fe" id="e9fe" class="graf graf--pre graf-after--p">ReactDOM.render(<OurFirstComponent />, placeWeWantToPutComponent);</pre>

This is standard — invoke your components like you are writing HTML.

### Putting Components Together

We can put React components inside other components.

<pre name="5e78" id="5e78" class="graf graf--pre graf-after--p"><script type="text/babel">  
  function OurFirstComponent() {  
    return (  
      **<h1>I am the child!</h1>**  
    );  
  }</pre>

<pre name="fdc9" id="fdc9" class="graf graf--pre graf-after--pre"> **function Container() {  
    return (  
      I am the parent!</h1>  
        <OurFirstComponent />  
        
    );  
  }**</pre>

<pre name="c4c7" id="c4c7" class="graf graf--pre graf-after--pre">  const placeWeWantToPutComponent = document.getElementById('hook');  
  ReactDOM.render(**<Container />**, placeWeWantToPutComponent);  
</script></pre>



![](https://cdn-images-1.medium.com/max/1600/1*p8ZNTE0_mnYkt-5Zq2fRtA.png)



This is how we build our page out of pieces of React — by nesting components inside of each other.

### Class Components

So far, we’ve been writing components as functions. These are called _functional components._

But you can write components another way, as JavaScript classes. These are called class components.

<pre name="a104" id="a104" class="graf graf--pre graf-after--p">class Container extends React.Component {  
  render() {  
    return (  
      I am the parent!</h1>  
        <OurFirstComponent />  
        
    );  
  }  
}</pre>

<pre name="7256" id="7256" class="graf graf--pre graf-after--pre">const placeWeWantToPutComponent = document.getElementById('hook');  
ReactDOM.render(<Container />, placeWeWantToPutComponent);</pre>

Class components must have a function called `render()`_._ The render function returns the JSX of the component. They can be used the same way as functional components, like this:`<AClassComponent />`.

You should use functional components over class components because they’re easier to read, unless you need component _state_ (more on that soon).

### JavaScript in JSX

You can put JavaScript variables inside of your JSX like this:

<pre name="3685" id="3685" class="graf graf--pre graf-after--p">class Container extends React.Component {  
  render() {  
    **const greeting = 'I am a string!';**  
    return (  
      { greeting }</h1>**  
        <OurFirstComponent />  
        
    );  
  }  
}</pre>

Now the ‘I am a string!’ will be inside the `h1`.

You can also do more difficult stuff, like call a function:

<pre name="acca" id="acca" class="graf graf--pre graf-after--p">class Container extends React.Component {  
  render() {  
    **const addNumbers = (num1, num2) => {  
      return num1 + num2;  
    };**  
    return (  
      The sum is: { addNumbers(1, 2) }</h1>**  
        <OurFirstComponent />  
        
    );  
  }  
}</pre>



![](https://cdn-images-1.medium.com/max/1600/1*ZwlZclRrqtIriczWzPP9-g.png)



### JSX Gotchas

Rename `OurFirstComponent()` to `PlayButton`. We want it to return the following:

<pre name="3127" id="3127" class="graf graf--pre graf-after--p"></pre>

But there’s a problem: `class` is a keyword in JavaScript, so we can’t use it. So how do we give our `<script type="text/babel">  
 **function PlayButton() {  
    return ;  
  }**</pre>

<pre name="fcdf" id="fcdf" class="graf graf--pre graf-after--pre">  class Container extends React.Component {  
    render() {  
      return (  
        **  
          
      );  
    }  
  }</pre>

<pre name="fa08" id="fa08" class="graf graf--pre graf-after--pre">  const placeWeWantToPutComponent = document.getElementById('hook');  
  ReactDOM.render(<Container />, placeWeWantToPutComponent);  
</script></pre>

### What Is This Component Doing?

Class components can store information about their current situation. This information is called `state`, which is stored in a JavaScript object.

In the code below, we have an object representing our components state. It has a `key` of `isMusicPlaying` which has a `value` of `false`. This object is assigned to `this.state` in the `constructor` method, which is called when the class is first used.

<pre name="7330" id="7330" class="graf graf--pre graf-after--p">class Container extends React.Component {  
  **constructor(props) {  
    super(props);  
    this.state = { isMusicPlaying: false };  
  }**  

  render() {  
    return (  
        
        
    );  
  }  
}</pre>

A `constructor` method of a React component always needs to call `super(props)` before anything else.

Okay, so what do we do with `state`? Why does it exist?

### Changing Our React Component Based On State

State is way to update our UI based on _events_.

In this tutorial, we will use state to change the play button from _paused_ to _playing_ based on the user clicking the play button.

When the user clicks on the button, the state will update, which will then update the UI.

Here’s how we get started. We can look at the component state with `this.state`. In the following code, we look at the state and use it to decide what text to present to the user.

<pre name="c9fa" id="c9fa" class="graf graf--pre graf-after--p">class Container extends React.Component {  
  constructor(props) {  
    super(props);  
    this.state = { isMusicPlaying: false };  
  }</pre>

<pre name="08b2" id="08b2" class="graf graf--pre graf-after--pre">  render() {  
    **const status = this.state.isMusicPlaying ? 'Playing' : 'Not playing';**  
    return (  
      { status }</h1>**  
        <PlayButton />  
        
    );  
  }  
}</pre>

In the render function, `this` is always referring to the component it is within.



![](https://cdn-images-1.medium.com/max/1600/1*eKhrsYzeEH-eoJbDtrVNpA.png)



But that’s not very useful unless we have a way to change `this.state.isMusicPlaying`.

### When Stuff Happens to Our Component

The user can interact with our components by clicking on the play button. We want to react (ha… ha…) to those events.

We do that through functions that take care of events. We call these _event handlers_.

<pre name="09d0" id="09d0" class="graf graf--pre graf-after--p">class Container extends React.Component {  
  constructor(props) {  
    super(props);  
    this.state = { isMusicPlaying: false };  
  }</pre>

<pre name="03bb" id="03bb" class="graf graf--pre graf-after--pre"> **handleClick(event) {  
    // Do something about the click  
  };**</pre>

<pre name="ccbf" id="ccbf" class="graf graf--pre graf-after--pre">  render() {  
    let status = this.state.isMusicPlaying   
    ? 'Playing :)'   
    : 'Not playing :(';  
    return (  
      { status }</h1>  
        <PlayButton />  
        
    );  
  }  
}</pre>

When the user clicks on the `h1`, our component will make the `handleClick` function run. The function gets the event object as the argument, which means it can use it if it wanted to.

We use the `.bind` method on `handleClick` to make sure `this` refers to the whole component, rather than just the `h1`.

### What This Component Should Be Doing

When we change the state of our component, it will call the render function again.

We can change state with `this.setState()`, if we give it a new object representing the new state.

Our component on the page will always represent its current state. React does that for us.

<pre name="23e1" id="23e1" class="graf graf--pre graf-after--p">handleClick() {  
    **if (this.state.isMusicPlaying) {  
      this.setState({ isMusicPlaying: false });  
    } else {  
      this.setState({ isMusicPlaying: true });  
    }**  
  };</pre>

But clicking an `h1` isn’t as good as clicking our actual play button. Let’s make that work.

### Talking Between Components

Your components can talk to each other. Let’s try it.

We can tell `PlayButton` whether or not the music is playing using something called `props`. Props are information shared from a parent component to a child component.

Props in JSX look the same as HTML properties.

We give `PlayButton` a prop called `isMusicPlaying`, which is the same as the `isMusicPlaying` in `this.state`.

<pre name="d580" id="d580" class="graf graf--pre graf-after--p">class Container extends React.Component {  
  constructor(props) {  
    super(props);  
    this.state = { isMusicPlaying: false };  
  }</pre>

<pre name="3ba4" id="3ba4" class="graf graf--pre graf-after--pre">  handleClick() {  
    if (this.state.isMusicPlaying) {  
      this.setState({ isMusicPlaying: false });  
    } else {  
      this.setState({ isMusicPlaying: true });  
    }  
  };</pre>

<pre name="eded" id="eded" class="graf graf--pre graf-after--pre">  render() {  
    return (  
      **        
    );  
  }  
}</pre>

When the state of `Container` changes, `PlayButton` prop will change too, and the `PlayButton` function will be called again. That means our component will update on the screen.

Inside `PlayButton`, we can react to the change, because `PlayButton` gets the props as an argument:

<pre name="bac0" id="bac0" class="graf graf--pre graf-after--p">function PlayButton(**props**) {  
 **const className = props.isMusicPlaying ? 'play active' : 'play';**  return ;  
}</pre>

If we change our state to `this.state = { isMusicPlaying: true };` and reload the page, you should see the pause button:



![](https://cdn-images-1.medium.com/max/1600/1*TmAo51JtJI-5pUiqUoQyVA.png)



### Events as Props

Your props don’t have to be just information. They can be functions.

<pre name="36c5" id="36c5" class="graf graf--pre graf-after--p">function PlayButton(props) {  
  const className = props.isMusicPlaying ? 'play active' : 'play';  
  return ;  
}</pre>

<pre name="b756" id="b756" class="graf graf--pre graf-after--pre">class Container extends React.Component {  
  constructor(props) {  
    super(props);  
    this.state = { isMusicPlaying: false };  
  }</pre>

<pre name="ca18" id="ca18" class="graf graf--pre graf-after--pre">  handleClick() {  
    if (this.state.isMusicPlaying) {  
      this.setState({ isMusicPlaying: false });  
    } else {  
      this.setState({ isMusicPlaying: true });  
    }  
  };</pre>

<pre name="564c" id="564c" class="graf graf--pre graf-after--pre">  render() {  
    return (  
        
        
    );  
  }  
}</pre>

Now, when we click on the `PlayButton`, it’ll change the state of `Container`, which will change the `props` of `PlayButton`, which will cause it to update on the page.

### The Bad Thing About setState

`setState` is bad because it doesn’t do stuff right away. React waits a bit to see if there are more changes to make, then it does the state changes.

That means you don’t know for sure what your state will be when you call `setState`.

So you shouldn’t do this:

<pre name="6057" id="6057" class="graf graf--pre graf-after--p">handleClick() {  
  this.setState({ isMusicPlaying: !this.state.isMusicPlaying });  
};</pre>

If you are changing your state based on the old state, you need to do things differently.

You need to give `setState` a function, not an object. This function gets the old state as an argument, and returns an object that is the new state.

It looks like this:

<pre name="d9ed" id="d9ed" class="graf graf--pre graf-after--p">handleClick() {  
  this.setState(prevState => {  
    return {   
      isMusicPlaying: !prevState.isMusicPlaying     
    };  
  });  
};</pre>

It is more difficult, but only needed when you are using the old state to make the new state. If not, you can just give `setState` an object.

### What Are Refs?

Let’s make some music happen.

First, we add an `` tag:

<pre name="466d" id="466d" class="graf graf--pre graf-after--p">class Container extends React.Component {  
  constructor(props) {  
    super(props);  
    this.state = { isMusicPlaying: false };  
  }</pre>

<pre name="aa90" id="aa90" class="graf graf--pre graf-after--pre">  handleClick() {  
    this.setState(prevState => {  
      return {   
        isMusicPlaying: !prevState.isMusicPlaying     
      };  
    });  
  };</pre>

<pre name="7eeb" id="7eeb" class="graf graf--pre graf-after--pre">  render() {  
    return (  
        
 ****        
    );  
  }  
}</pre>

We need a way to get that `` tag and call either `play()` or `pause()` on it. We could do it with `document.getElementById('audio').play()` but there’s a better React way.

We give it a prop called `ref`, which gets called with the `` element as the first argument. It takes that `` element and assigns it to `this.audio`.

<pre name="24a3" id="24a3" class="graf graf--pre graf-after--p"> { this.audio = audioTag }}** /></pre>

This function will be called every time the `Container` renders, which means `this.audio` will always be up to date, and equal the `` tag.

We then can play and pause the music:

<pre name="e3dd" id="e3dd" class="graf graf--pre graf-after--p">handleClick() {  
  **if (this.state.isMusicPlaying) {  
    this.audio.pause();  
  } else {  
    this.audio.play();  
  }**  
  this.setState(prevState => {  
    return {   
      isMusicPlaying: !prevState.isMusicPlaying     
    };  
  });  
};</pre>

Upload a music file (preferably an mp3 file) using the `Choose files` button and hit play, and watch it go!

### Moving Outside of Index.html

As you might have guessed, our React shouldn’t live forever inside a `<script>`tag.

React takes a lot of build configuration. Fortunately, tools like [Create React App](https://github.com/facebookincubator/create-react-app) take care of all that for you.

Install it to create your own React project. Follow their brief tutorial and start editing the JavaScript inside the `src` directory, applying all the React knowledge you learned here!

### Congratulations!

You can now make React things.

Next, check out a couple of articles for more information. One is about [React best practices](https://engineering.musefind.com/our-best-practices-for-writing-react-components-dec3eb5c3fc8), the other about a useful part of React called [lifecycle methods](https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1)**.**

If you learned something from this article, please click those clappin’ hands, and share it with your friends.

You can also follow me on [Medium](https://medium.com/@scottdomes) and [Twitter](https://twitter.com/scottdomes).








