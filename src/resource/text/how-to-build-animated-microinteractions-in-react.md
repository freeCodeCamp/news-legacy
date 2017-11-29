---
author: Christian Sepulveda
authorTwitter: https://twitter.com/csepulv
authorFacebook: none
title: "How to build animated microinteractions in React"
subTitle: "Microinteractions guide a user through your application. They reinforce your user experience and provide delight...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*qCAbHl_L47s5NrPZnlF6Kw.jpeg
url: https://medium.freecodecamp.org/how-to-build-animated-microinteractions-in-react-aab1cb9fe7c8
id: how-to-build-animated-microinteractions-in-react-aab1cb9fe7c8
date: 2017-02-16T22:22:44.760Z
tags: [
  "React",
  "Animation",
  "JavaScript",
  "Web Development",
  "Design"
]
---
# How to build animated microinteractions in React







![](https://cdn-images-1.medium.com/max/2000/1*qCAbHl_L47s5NrPZnlF6Kw.jpeg)







Microinteractions guide a user through your application. They reinforce your user experience and provide delight.

You may have seen some of the slick examples of microinteractions on [Dribble](https://dribbble.com/search?q=microinteraction) or [CodePen](https://codepen.io/search/pens?q=microinteraction&limit=all&type=type-pens). But do you know how to build your own library of similar UI widgets?

In this article, I’ll focus on animated microinteractions using [React](https://facebook.github.io/react/), Facebook’s popular, component-oriented UI framework. I’ll build three interactions for a searchbox:

*   open and close the text box
*   move to the top of the screen
*   shake (indicating an error)



![](https://cdn-images-1.medium.com/max/1600/1*0-KYFDfKdOLgitTJZR4Qtg.gif)



I’ll use a few different implementations:

*   [CSS transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
*   [react-motion](https://github.com/chenglou/react-motion)
*   [react-animations](https://github.com/FormidableLabs/react-animations)

Here’s a [live demo](https://search-animation.firebaseapp.com) and [the code that powers it](https://github.com/csepulv/search-box-animation).

> This is one of several posts about Higher Order (HOC) and Stateless Functional Components. The first [post](https://hackernoon.com/code-reuse-using-higher-order-hoc-and-stateless-functional-components-in-react-and-react-native-6eeb503c665) is about code reuse in React and React Native, via these techniques.

### What is a Microinteraction?

[Dan Saffer](https://medium.com/u/534e55e898c0) (who wrote the book) gives us this [definition](http://microinteractions.com/what-is-a-microinteraction/): “Microinteractions are contained product moments that revolve around a single use case — they have one main task.”

Examples might be clearer. Some microinteractions are everywhere, such as a cursor change when hovering over a link or the vibration of your phone when you switch to silent mode. Others, such as an item being added to a shopping cart, aren’t so common (yet).

#### Why should I care about Microinteractions?

Microinteractions can provide feedback and make your application memorable. When users have so many app choices, better microinteractions might be the clichéd better mousetrap you should build.

But I am not a UX designer. So I suggest reading [Nick Babich](https://medium.com/@101)’s [post](https://uxplanet.org/microinteractions-the-secret-to-great-app-design-4cfe70fbaccf#.iz58yil08) about microinteractions.

### Getting Started

I’ll use [create-react-app](https://github.com/facebookincubator/create-react-app) to bootstrap a React application, but any React setup method will work. Also, I like [Material-UI](http://www.material-ui.com/#/), so I’ll import that too. (This choice is arbitrary — you could use another widget library or manually style your elements.)

<pre name="a94d" id="a94d" class="graf graf--pre graf-after--p">create-react-app search-box-animation  
cd search-box-animation  
npm install --save material-ui react-tap-event-plugin</pre>

#### The Component: a Simple Search Box

I’ll create a simple search box. It will comprise two elements: a search icon button and a text box. I’ll create a stateless functional component for the search box. (Stateless functional components are functions that render React components and do not maintain state, i.e. use `setState`. You can learn more in this [tutorial](https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.673o1dbcj) or my previous [post](https://hackernoon.com/code-reuse-using-higher-order-hoc-and-stateless-functional-components-in-react-and-react-native-6eeb503c665#c825).)

`SearchBox.js`





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/f981b50003f9a871711362be898524e4?postId=aab1cb9fe7c8" data-media-id="f981b50003f9a871711362be898524e4" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F4239020%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





(I’ll use the `onClick` callback later.)

The `isOpen` prop sets the `SearchBox` open or closed rendering.



![](https://cdn-images-1.medium.com/max/1600/1*uvCLwecuYCfNiwY6WMBdxA.jpeg)

isOpen=true / isOpen=false



### Using Higher Order Components to Separate Concerns

I could change `SearchBox` to a regular component and add code that would open and close the text box when clicked, for example.

But I prefer to separate the animation from the core purpose of the search box. The search box shows/captures a query value and submits this query to some other controller. This is a subjective design decision, but it has practical benefits: I can reuse the microinteraction logic with another user input component.

[Higher Order Components](https://facebook.github.io/react/docs/higher-order-components.html) (HOC) are functions that return a new component. This component wraps a component(s) and adds functionality. I will create an HOC to add the open/close behavior to the `SearchBox`.

Create `expanding-animation.js`





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/903830b61dac2aa679616669339dbcd0?postId=aab1cb9fe7c8" data-media-id="903830b61dac2aa679616669339dbcd0" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F4239020%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Update `App.js` as follows:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/88c7171b37f9803bed6e059452349239?postId=aab1cb9fe7c8" data-media-id="88c7171b37f9803bed6e059452349239" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F4239020%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





If you run `npm start`, you’ll have a search icon that you can click to open and close the text box.

It works, but the opening and closing is jarring. An animation can smooth the effect.

### Animations

There are three general approaches to animations.

1.  CSS transitions
2.  CSS animations
3.  rapid and repeated rendering of an element to simulate motion (manual key framing)

[CSS transitions](http://www.w3schools.com/css/css3_transitions.asp) change a property value (like width) over some time duration. The change doesn’t have to be linear; you can specify functions for changing the values.

[CSS animations](http://www.w3schools.com/css/css3_animations.asp) change the style for an element (like size, color, and position). Each incremental style is a keyframe. You create a keyframe series to achieve a desired effect.

Both CSS tactics repeatedly render elements to simulate motion. You can do the calculations yourself, i.e. option (3). Several Javascript animation frameworks use this approach, managing the calculations. (I’ll use react-motion in a later example.)

I will use all these techniques in the examples below, but I’ll start with CSS transitions.

#### Expanding the Search Box

The expanding text box animation needs one CSS property: `transition`

Change `expanding-animation.js` as follows,





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2bf61ce21f82fe823914fb855f9a3140?postId=aab1cb9fe7c8" data-media-id="2bf61ce21f82fe823914fb855f9a3140" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F4239020%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Looking at the change in line 21, `additionalStyles`, `SearchBox` will merge this style with it’s existing styles in line 29 and 31 below. (I’ll return to the transition CSS property in line 2 in a moment.)

Update `SearchBox.js`





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/86774f8cb34e7ce19e678cc4c3d687bc?postId=aab1cb9fe7c8" data-media-id="86774f8cb34e7ce19e678cc4c3d687bc" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F4239020%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





With the styles merged, the animation will take effect.



![](https://cdn-images-1.medium.com/max/1600/1*gsFXjFeZy3498zCscGfExA.gif)

CSS transition: width



The result is a smooth expansion of the text box width, giving the appearance it opens. The CSS `transition` property controls this (from line 2 in `expanding-animation.js`).

<pre name="cdc7" id="cdc7" class="graf graf--pre graf-after--p">transition: 'width 0.75s cubic-bezier(0.000, 0.795, 0.000, 1.000)'</pre>

I encourage you to read the [documentation](http://www.w3schools.com/css/css3_transitions.asp) for the CSS transition property, as there are a variety of options. In the example, there are three parameters:

1.  property to change: `width`
2.  duration of transition: `0.75s`
3.  function to control timing: `cubic-bezier(0.000, 0.795, 0.000, 1.000)’`

While I chose `cubic-bezier` as the function, `linear` or `ease` are among other options. There are interactive tools that help you select these values, such as this [cubic-bezier builder](http://cubic-bezier.com/).

#### Moving the Search Box

Check out the following concept animation I found on Dribble:



![](https://cdn-images-1.medium.com/max/1600/1*btJbaLfcZEZKfxKKuvlUIw.gif)

[https://dribbble.com/shots/2751256-Google-Search](https://dribbble.com/shots/2751256-Google-Search)



There are multiple elements in the interaction; but I’d like to focus on the movement of the search box to the top of the screen.

I can move my humble search box with a CSS transition. Create a new HOC, `move-up-animation.js`





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2801ee824bec900ab8b40d106730da3e?postId=aab1cb9fe7c8" data-media-id="2801ee824bec900ab8b40d106730da3e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F4239020%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





This is like the `makeExpanding` HOC function, except does a translation (move up). Also, the animation style applies only to the outer frame (`div`).

Update `App.js`,





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/e731abf265d75de755737cc7614478cc?postId=aab1cb9fe7c8" data-media-id="e731abf265d75de755737cc7614478cc" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F4239020%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





and you should see



![](https://cdn-images-1.medium.com/max/1600/1*YHh2NZM3xxySnqeQhMn9Bw.gif)

CSS transition. transform: translateY



Perhaps you want a bouncy effect. You could use [react-motion](https://github.com/chenglou/react-motion). It is a popular React library which uses spring dynamics to control animations. (A good introduction, by [Nash Vail](https://medium.com/@nashvail), is [here](https://medium.com/@nashvail/a-gentle-introduction-to-react-motion-dc50dd9f2459#.8hkkdl9pi).)

<pre name="7c12" id="7c12" class="graf graf--pre graf-after--p">npm install --save react-motion</pre>

Create `spring-up-animation.js`





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/bb0722e78e2c631ba606e95f38357439?postId=aab1cb9fe7c8" data-media-id="bb0722e78e2c631ba606e95f38357439" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F4239020%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





As this isn’t a react-motion tutorial, I will briefly summarize how this works. React-motion wraps the animated component, `Target`, with its own component, `Motion`. (There are other react-motion components, such as `[TransitionMotion](https://github.com/chenglou/react-motion#transitionmotion-)` and `[Staggered Motion](https://github.com/chenglou/react-motion#staggeredmotion-)`.)

React-motion interpolates, using spring dynamics, a series of interim values. It provides the values to the animated component as a style. This style determines the visual transition in the animation.

The image below shows the result (with a wobbly spring to highlight the effect).



![](https://cdn-images-1.medium.com/max/1600/1*F1qG6GBKRkq2biwrPtC7Uw.gif)

react-motion spring dynamics



You could use react-motion for a range of effects. For example, you could change the text box to expand like a spring.

(`spring-up-animation.js` and `move-up-animation.js` have the same `onClick` state logic, so I refactored the common parts. Details are [here](https://github.com/csepulv/search-box-animation/blob/master/src/move-up-animations.js).)

#### Shaking the Search Box

I want to provide feedback to the user about erroneous queries. You could use error messages, but I’d like to do something more whimsical: shake the search box.

I could use react-motion, but I’d like to look at another technique: keyframe animation.

[React-animations](https://github.com/FormidableLabs/react-animations/) is a React library for keyframe animations. It injects CSS keyframes into a DOM style sheet. (The other examples have only used inline styles.)

<pre name="6a47" id="6a47" class="graf graf--pre graf-after--p">npm install --save react-animations</pre>

I also need a library, like [Radium](https://github.com/FormidableLabs/radium) or [Aphrodite](https://github.com/Khan/aphrodite), to handle the CSS style sheet injection. I’ve chosen Aphrodite, as I’ve used it before.

<pre name="1b60" id="1b60" class="graf graf--pre graf-after--p">npm install --save aphrodite</pre>

Create another HOC, `shake-animation.js`





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/1914e548cbb8229bc21ba7498ce1dac5?postId=aab1cb9fe7c8" data-media-id="1914e548cbb8229bc21ba7498ce1dac5" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F4239020%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





There are a few key sections. Line 4 uses Aphrodite to create the style sheet for the react-animations effect, `head-shake`. Line 29 sets the CSS class for the animation on `Target`. (This requires a tweak to `SearchBox` to use the CSS class. Look at the use of `frameClass` in the [source](https://github.com/csepulv/search-box-animation/blob/master/src/SearchBox.js) of `SearchBox.js`.) The `onClick` handler on line 17 is more complicated.

#### Restarting an Animation

I’d like to do the ‘head shake’ on _each_ validation error (or whatever trigger is used). But since the animation is a CSS class, I can’t simply set the same class again; it would have no effect. This CSS Tricks [post](https://css-tricks.com/restart-css-animation/) outlines a few options. The simplest is a timeout that removes the CSS animation class. When you add it again (for a new event), you’ll see the ‘head shake’.



![](https://cdn-images-1.medium.com/max/1600/1*-p9e0boST6ad6kNIbRDhsQ.gif)

react-animations (uses keyframes, CSS animation)



### Putting It Together: Composing a Complex Component

I’ve created several HOCs for different animations. But you can also chain the HOCs to create a compound component. It will open the text box when clicked and shake on erroneous input.

First, you’ll need to make a few changes to`SearchBox`





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/92330d0053bd7985ff4f4dc7ba590138?postId=aab1cb9fe7c8" data-media-id="92330d0053bd7985ff4f4dc7ba590138" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F4239020%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





`SearchBox` is now a [controlled component](https://facebook.github.io/react/docs/forms.html) (fancy term for using React to manage the text box’s input value). It also provides a callback, `onSubmit`, for submitting the search query (when a user presses the _Enter_ key).

You also need to change `shake-animation.js`. Clicking the search icon should not cause the shake. Instead, I want another component to determine when to ‘shake’. This separates the validation logic from code that controls the animation.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9be8f98c0da38a3aedcb5f07ad0bc4d1?postId=aab1cb9fe7c8" data-media-id="9be8f98c0da38a3aedcb5f07ad0bc4d1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F4239020%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





`startShake` is a flag to reset the animation. But this is an implementation detail. It should be encapsulated, as internal state, in the `makeShakeAnimation` HOC.

`startShake` is dependent on `shouldShake`. I can use [componentWillReceiveProps](https://facebook.github.io/react/docs/react-component.html#componentwillreceiveprops) to respond to prop changes. (It’s parent, the validation component, provides these props.) So I moved the previous `onClick` logic to `componentWillReceiveProps`.

The change in line 27, `{...this.props}`, passes all props to the wrapped component, `Target`. (I need to similarly change the `render` method in `expanding-animation.js`. The details are [here](https://github.com/csepulv/search-box-animation/blob/master/src/expanding-animation.js).)

I can now add a component that will control when to shake.

Create `search-box-controller.js`





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/e00abcef5149779c5b27e6246a370345?postId=aab1cb9fe7c8" data-media-id="e00abcef5149779c5b27e6246a370345" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F4239020%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





This is another HOC. It does not have visual elements, but it controls the logical behavior of the wrapped component. ([Dan Abramov](https://medium.com/@dan_abramov) has a good [post](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.2660qau6m) explaining such separation.) In this case, all queries as erroneous, but in a real application, I’d validate queries and connect to APIs.

Lastly, I want to highlight that `makeAnimatedValidationSearchBox` is an HOC that chains two other HOCs.

<pre name="d5f9" id="d5f9" class="graf graf--pre graf-after--p">const WrappedComponent =makeShakingAnimation(makeExpanding(Target));</pre>

Another small update to`App.js`





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/bc9271321226d75c283f38f4f3ef95e6?postId=aab1cb9fe7c8" data-media-id="bc9271321226d75c283f38f4f3ef95e6" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F4239020%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





(Line 12 uses the new HOC)

and execute `run npm start`



![](https://cdn-images-1.medium.com/max/1600/1*zPo5y32mztgcFZZVSw1yMg.gif)

a compound component, made from chaining three HOCs



I’ve created a compound component that uses multiple microinteractions. They are reusable and discrete.

### Wrapping Up

I’ve sampled each of the approaches: CSS transitions, react-motion and react-animations. I wish you could pick one approach, but it’s hard to contort a single approach for all use cases. Thankfully, you can mix-and-match libraries and techniques. And you can encapsulate the details in reusable HOCs.

You might want to check out libraries such [recompose](https://github.com/acdlite/recompose), that make HOC creation easier.

The GitHub repo for this project is [here](https://github.com/csepulv/search-box-animation).

Please ♡ this post and follow me for future stories. Thanks for reading.








