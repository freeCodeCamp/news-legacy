---
author: Marius Espejo
authorTwitter: none
authorFacebook: none
title: "How to navigate the React.js ecosystem without getting lost"
subTitle: "In the world of software development it’s often hard to find one direct path for learning something new. Should you read a book? Follow a..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*aD0tWP4vXjrs1FTFlgkKAg.jpeg
url: https://medium.freecodecamp.org/how-to-navigate-the-react-js-ecosystem-without-getting-lost-43db14b00e08
id: how-to-navigate-the-react-js-ecosystem-without-getting-lost-43db14b00e08
date: 2017-07-26T21:11:07.151Z
tags: [
  "React",
  "Web Development",
  "Technology",
  "Tech",
  "Programming"
]
---
# How to navigate the React.js ecosystem without getting lost







![](https://cdn-images-1.medium.com/max/2000/1*aD0tWP4vXjrs1FTFlgkKAg.jpeg)

[Photo by Garrett Parker](https://unsplash.com/photos/2jyxADdd2t4)







In the world of software development it’s often hard to find one direct path for learning something new. Should you read a book? Follow a tutorial? Watch a video? Ask for advice?

With so many possible paths and options to take, getting lost is _easy._

Learning React.js is actually straightforward, all it takes is knowing which path to take.

### **Prerequisites**

Here are some things I recommend you get a solid grasp on before you start learning React.



![](https://cdn-images-1.medium.com/max/1600/1*JEaQ6urCMv9CWzrew__dTg.jpeg)

[Photo by Alice Donovan Rouse](https://unsplash.com/@alicekat?photo=z9F_yK4Nmf8)



#### Make sure you have some understanding of HTML and CSS

Pretty much every web development is going to require some form of knowledge of these two. If you’re an absolute beginner in this space, I would recommend checking out [Travis Neilson](https://medium.com/@travisneilson)’s videos like [HTML5 Basics](https://www.youtube.com/playlist?list=PLqGj3iMvMa4KlJn1pMYPVV3eYzxJlWcON) and [CSS Basics](https://www.youtube.com/playlist?list=PLqGj3iMvMa4IOmy04kDxh_hqODMqoeeCy). Then jump over to [freeCodeCamp.org](https://www.freecodecamp.org) or [codeacademy.com](https://www.codecademy.com/learn/learn-html-css) for some practice.

Your ultimate goal should be to take a basic design or structure for a web page, turn it into code, and visually see what you were hoping it would look like. Ideally, it will look very similar to your design.

#### Have a good grasp of JavaScript itself

I don’t recommend trying to learn frameworks and libraries before you’ve spent some time learning the JavaScript language first. There is a tremendous amount of resources out there to learn JavaScript depending on your experience.

For an absolute beginner, [freeCodeCamp](https://medium.freecodecamp.org/) has an awesome set of resources, including a [video playlist](https://www.youtube.com/playlist?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5) of all the JavaScript basics and an interactive place to learn and practice right [right on their website](https://www.freecodecamp.com).

The best way to learn code is to write code!

If you’ve already used JavaScript in the past and need a refresher checkout this [re-introduction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript).

If you’re not sure if you do know JavaScript, then I bet [You Don’t Know JS](https://github.com/getify/You-Dont-Know-JS). That’s actually a popular book series that is helpful for those of you who are looking to get a better understanding of the language.

> “When you strive to comprehend your code, you create better work and become better at what you do. The code isn’t just your job anymore, it’s your craft.”

> — Jenn Lukas

#### Beyond learning basic JavaScript, you’ll also need to get a decent understanding of some ECMAScript 2015 (ES6) features

Specifically, focus on understanding the following:

*   Modules (import/export)
*   let and const
*   Arrow functions
*   Classes
*   Destructuring
*   Rest/Spread

These are guaranteed to show up in your React code and having some understanding of them will allow you to consume documentation much easier.

To get a quick start on these, I would recommend LearnCode.academy’s [ES6 Cheatsheet](https://www.youtube.com/playlist?list=PLoYCgNOIyGACDQLaThEEKBAlgs4OIUGif) or one of [Babel’s resources](https://babeljs.io/learn-es2015/).

#### Learn how to use the Node Package Manager (npm)

[Install Node.js](https://nodejs.org/en/) and it will come with npm packaged with it. At the moment npm is one of the best ways to download JavaScript development dependencies.

For example, this simple command will allow you to install and download React for a project:

<pre name="2339" id="2339" class="graf graf--pre graf-after--p">npm install --save react</pre>

Most of what you need to know initially is how to install packages. This alone will open you up to an extensive set of tools and libraries that will allow you to get more done in less time.

#### (Optional) Learn the basics of functional programming

Although it is not required to learn React, understanding basic functional programming concepts will come in handy many times in your React development.

I would recommend understanding function composition, purity, and higher-order functions. The goal here is not to be an expert about the subject, but to be at least exposed to it. For a quick introduction, here’s an awesome talk from a great [speaker](https://www.youtube.com/watch?v=e-5obm1G_FY). Or you can learn right from your [inbox](https://medium.freecodecamp.com/learning-the-fundamentals-of-functional-programming-425c9fd901c6) if you want to.



![](https://cdn-images-1.medium.com/max/1600/1*Tc2fPHyukVN0I5UOEt_nGg.jpeg)

[Photo by Luke Pamer](https://unsplash.com/search/hiking?photo=KBpnPk44tOA)



> “Every mountain top is within reach if you just keep climbing.”

> — **Barry Finlay**

Depending on your development experience, you can learn React basics within **a few hours to a few days**. Beyond that it just takes a bit more experience and you’ll be able to create applications in no time.

How is that possible? Well…

### First of all, don’t learn Redux or other libraries yet

The biggest mistake a lot of people make when learning React for the first time is search for a starter template or a tutorial that already includes Redux and a bunch of other libraries in it.

People often ask me what’s the best way to learn React. For some reason it never occurs to them that the [official documentation](https://facebook.github.io/react/docs/hello-world.html) is actually a great place to start because it focuses on teaching you _just_ React.

Forget about Redux for now. You might not even [need it](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367).

Forget about other libraries and boilerplates.

> “Learning React by copying boilerplates is like learning to cook by eating food in fancy restaurants. It doesn’t work. You need to start with basics and ignore the fear of missing out.” — [Dan Abramov](https://medium.com/@dan_abramov)

#### **Focus on React and React alone.**

I would recommend this for the same reason that you might not want to learn Calculus before becoming comfortable with Algebra. Or you might not even need Calculus to solve a simple math problem.

Figure out what problems React can and can’t solve for you on its own. That will give you a basic guide to know when it’s time to pull in more libraries, and ultimately more things to learn, into your project.

### Here’s the easiest way to get started

Start with [create-react-app](https://github.com/facebookincubator/create-react-app). It will give you everything you need to start small without being held back by boilerplate and configuration.

It allows you the freedom to focus on learning React on its own without having to worry about learning and setting up Webpack, Babel, and various other configuration.

<pre name="f399" id="f399" class="graf graf--pre graf-after--p">npm install -g create-react-app   
create-react-app my-app  </pre>

<pre name="0d67" id="0d67" class="graf graf--pre graf-after--pre">cd my-app   
npm start</pre>

Those four simple commands will get you everything you need to get a project started. It includes tooling that will refresh your browser when you change your code.

It also offers a build command which will compile your code to a few static assets that you can easily deploy anywhere and an awesome [user guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) that will guide you through that process.

I think of create-react-app as sort of like hiking boots. You don’t necessarily need hiking boots to climb a mountain, but they sure will help and might even make it easier to climb certain surfaces. And if you realize you don’t need them, you can always “[eject](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-run-eject)” them from your feet!

With tooling out of the way, let’s get back on the path of learning React.

### Master the fundamentals of React

Check out this great post on the main [concepts of React](https://medium.freecodecamp.com/the-5-things-you-need-to-know-to-understand-react-a1dbd5d114a3). There actually aren’t a lot of stuff you need to learn.

In general you should get an understanding of the following:

*   JSX: [what it is](https://facebook.github.io/react/docs/introducing-jsx.html), how it differs from traditional HTML, and how to declaratively set it up to handle dynamic changes

<pre name="0854" id="0854" class="graf graf--pre graf-after--li">/* Notice how you have to use className instead of class   
    And how the expression inside the curly braces allow it to  
    dynamically handle any name passed in via props */</pre>

<pre name="6e1f" id="6e1f" class="graf graf--pre graf-after--pre"><h1 className="greeting">Hello, {this.props.name}</h1></pre>

*   Learn how to write functional stateless components. [Here’s why](https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc).

<pre name="793e" id="793e" class="graf graf--pre graf-after--li">// These are really just simple functions which return JSX  
function MyComponent(props) {     
   return <h1 className="greeting">Hello, {props.name}</h1>;   
}</pre>

<pre name="cb57" id="cb57" class="graf graf--pre graf-after--pre">// Alternatively write them using arrow functions  
const MyComponent = (props) => (<h1 className="greeting">Hello, {props.name}</h1>);</pre>

*   Learn how to write components using the ES6 class syntax. It allows you to write more complex components with access to lifecycle hooks and [local state](https://facebook.github.io/react/docs/state-and-lifecycle.html#adding-local-state-to-a-class)

<pre name="6740" id="6740" class="graf graf--pre graf-after--li">class MyComponent extends React.Component {     
   render() {       
     return <h1 className="greeting">Hello, {this.props.name}</h1>;     
   }   
}</pre>

*   Make sure you have a good understanding of [state](https://facebook.github.io/react/docs/state-and-lifecycle.html#using-state-correctly) and how to properly use it. Understanding the pros and cons of using a component’s local state will give you the mental building blocks for when, and when not to, use a different state management solution
*   Learn how to write and use the [component lifecycle hooks](https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle) and when each one may be useful

<pre name="bbc9" id="bbc9" class="graf graf--pre graf-after--li">class MyComponent extends React.Component {  
   // A couple examples of hooks that I've had to use a lot:</pre>

<pre name="e02c" id="e02c" class="graf graf--pre graf-after--pre">   componentDidMount() {   
     /* useful for initializing or triggering events after the  
          component renders to the DOM */                                  
   }      

   `shouldComponentUpdate`() {  
     /* useful for performance purposes and preventing redundant   
          re-rendering */  
   }  

   `componentWillReceiveProps() {` /* useful for when you need to trigger changes when new props     
          come in */ `}`     
   render() {       
     return <h1 className="greeting">Hello, {this.props.name}</h1>;     
   }   
}</pre>

*   Learn how to use [PropTypes](https://facebook.github.io/react/docs/typechecking-with-proptypes.html). It’s an easy way to get some basic type checking added to your components

<pre name="8549" id="8549" class="graf graf--pre graf-after--li">import PropTypes from 'prop-types';  </pre>

<pre name="b6d9" id="b6d9" class="graf graf--pre graf-after--pre">class MyComponent extends React.Component {     
   render() {       
     return <h1 className="greeting">Hello, {this.props.name}</h1>;     
   }   
}  
Greeting.propTypes = {   
   name: PropTypes.string   
};</pre>

### Learn how to structure your code

Once you have the fundamentals down you’ll want to start thinking about how your code is structured.

Look into the concept of Container and Presentational [components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0). Doing so will help you to understand how to better separate concerns within your React code.

If you decide to incorporate a state management solution in the future, such as Redux, then Container components will help with that transition. You’ll know that most of the data passed around your application are coming from containers.

If you haven’t already, also think about your folder structure. As your codebase starts to grow, consider how well your folder structure scales.

Are files easy to find?

If you’re working with a team, are they able to intuitively know where specific components are?

Note that you don’t have to have your code in a specific structure immediately. Try to get into the habit of **refactoring** and improving your code as you learn each of these concepts.

> “I’m not a great programmer; I’m just a good programmer with great habits.”

> — Kent Beck

### Build an application that solves a real problem

The best and true way to deeply understand React is by building something with it.

Try to build something that will actually motivate you to work on it and avoid creating things that you probably already know the solution to.

*   Try to incorporate some sort of external data (maybe make an api call) and figure out how to get that data to properly flow throughout your application, taking full advantage of state and props
*   Consider integrating [react-router](https://reacttraining.com/react-router/) once you have the need to have multiple pages to your application
*   Use some component libraries to get up and running quickly with a basic look and feel. Know that this amazing JavaScript ecosystem that we have with npm and Github allows you to easily incorporate ready-to-use components into your application
*   Deploy your application somewhere. There are so many different ways that you can deploy your code for free. Try one out. There is nothing cooler than seeing your work be deployed out to the internet and being able to share that link to someone else



![](https://cdn-images-1.medium.com/max/1600/1*fdt1z1Z4aPjxLHu_PLrjFA.jpeg)

[Photo by Kalen Emsley](https://unsplash.com/@kalenemsley?photo=mgJSkgIo_JI)



If you have gotten this far, that’s awesome! Look back at your progress and be proud of it.

Hungry for more? Here’s a couple tips.

### Test your code!

Make sure you learn how to test your code as early as possible. Use [Jest](https://facebook.github.io/jest/) (or your favorite test runner) and [Enzyme](http://airbnb.io/enzyme/).

Jest and Enzyme are fairly easy to learn and can actually help you to understand how your components work in isolation.

On top of that, tests make your code safer to refactor and improve, while also serving as dynamic documentation for your components.

### Use advanced state management

Does it feel like your state management with `setState` is becoming too complex? Are you constantly passing props down to multiple levels of descendant components?

Time to learn Redux or another flavor of Flux! You’ll need to understand what benefits a state management system brings to the table, and when or when not to use it.

### Don’t repeat yourself

If you find yourself writing the same code in multiple places, see if you can instead leverage other strategies for reusing logic. Learn how to create and use [Higher-Order Components](https://facebook.github.io/react/docs/higher-order-components.html). This is an advanced technique for reusing component logic. It will improve your knowledge when it comes to component composition.



![](https://cdn-images-1.medium.com/max/1600/1*0C5l3f6I6Wv9BEDzK9DeHA.jpeg)

[Photo by Justin Luebke](https://unsplash.com/@jluebke?photo=Gcl6jcB1r9g)



### Leveling up

In reality, the list never ends.

There are constantly new things that you can learn to improve and add to your applications and skillset.

If you focus on the basics and do most of the above, I believe that you’ll already be on a good path not only with React, but also front-end and JavaScript development in general.

The JavaScript ecosystem is constantly changing. Keep yourself in the mindset of **continuously learning**. Keep trying things and find out what works best for you.

Going forward, your experience will help guide you on what to do next.

Thanks for reading! **If you found this post useful, drop some 👏🏻 👏🏻👏🏻 on this post so others can find it!**








