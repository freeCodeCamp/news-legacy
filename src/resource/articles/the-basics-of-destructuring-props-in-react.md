---
original: >-
  https://medium.freecodecamp.org/the-basics-of-destructuring-props-in-react-a196696f5477?source=rss----336d898217ee---4
title: The basics of destructuring props in React
pubDate: '2018-05-01T23:46:40.000Z'
author:
  avatar: 'https://cdn-images-1.medium.com/fit/c/120/120/0*zQs7RNxgpV_Ornyp.'
  name: Evelyn Chan
  bio: "I enjoy avocado toast occasionally. \U0001F951"
  profileLink: 'https://medium.freecodecamp.org/@evcchan?source=post_header_lockup'
  social:
    twitter: null
  slug: evelyn-chan
slug: the-basics-of-destructuring-props-in-react
---
* * *

The basics of destructuring props in React
==========================================

![](https://cdn-images-1.medium.com/max/2000/1*WUKuIELNzTHKfAeHLNlsqQ.jpeg)

When I first learned about ES6, I was hesitant to start using it. I’d heard a lot of great things about the improvements but at the same time, I’d just gotten used to the good ol’ original way of doing things and here was a new syntax thrown at me to learn.

I avoided it for a while under the premise of “if it ain’t broke don’t fix it,” but I’ve recently grown fond of its simplicity and the fact that it’s becoming the norm in JavaScript.

With React, which fully embraces the ES6 syntax, destructuring adds a slew of benefits to improving your code. This article will go over the basics of destructuring objects and how it applies to props in React.

### Reasons to destructure

#### **Improves readability**

This is a huge upside in React when you’re passing down props. Once you take the time to destructure your props, you can get rid of `props / this.props` in front of each prop.

If you’re abstracting your components into different files, you’ll also have a handy place to quickly reference what props you’re passing down without having to switch tabs. This double check helps you catch errors such as passing down excess props or typos.

You can go a step further by adding in `propType` validation, which allows you to define the type of each prop you pass in. When you’re in a development environment, this triggers React to log a warning if the type is different from the one defined.

Props can be difficult to keep track of in complex apps, so clearly defining your props as you pass them down is immensely helpful for anyone reading your code.

#### **Shorter lines of code**

See the following before ES6:

var object = { one: 1, two: 2, three: 3 }

var one = object.one;  
var two = object.two;  
var three = object.three

console.log(one, two, three) // prints 1, 2, 3

It’s long, clunky, and takes way too many lines of code. With destructuring, your code becomes much more clear.

In the example below, we’ve effectively cut down the number of lines to two:

let object = { one: 1, two: 2, three: 3 }

let { one, two, three } = object;

console.log(one, two, three) // prints 1, 2, 3

#### **Syntactic sugar**

It makes code look nicer, more succinct, and like someone who knows what they’re doing wrote it. I’m somewhat reiterating the first point here, but then again if it improves readability, why wouldn’t you do it?

### Functional vs. Class Components

Destructuring in React is useful for both functional and class components but is achieved just a tad bit differently.

Let’s consider a parent component in our application:

import React, { Component } from 'react';

class Properties extends Component {  
  constructor() {  
    super();  
    this.properties = \[  
      {  
        title: 'Modern Loft',  
        type: 'Studio',  
        location: {  
          city: 'San Francisco',  
          state: 'CA',  
          country: 'USA'  
        }  
      },  
      {  
        title: 'Spacious 2 Bedroom',  
        type: 'Condo',  
        location: {  
          city: 'Los Angeles',  
          state: 'CA',  
          country: 'USA'  
        }  
      },  
    \];  
  }

render() {  
    return (  
      <div>  
        <Listing listing={this.properties\[0\]} />  
        <Listing listing={this.properties\[1\]} />  
      </div>  
    );  
  }  
}

#### Functional Components

In this example, we want to pass down a `listing` object from our array of properties for the child component to render.

Here’s how a functional component would look:

const Listing = (props) => (  
  <div>  
    <p>Title: {props.listing.title}</p>  
    <p>Type: {props.listing.type}</p>  
    <p>  
      Location: {props.listing.location.city},  
      {props.listing.location.state},  
      {props.listing.location.country}  
    </p>  
  </div>  
);

This block of code is fully functional but looks terrible! By the time we get to this `Listing` child component, we already know we’re referencing a listing, so `props.listing` looks and feels redundant. This block of code can be made to look much cleaner through destructuring.

We can achieve this in the function parameter as we pass in the props argument:

const Listing = ({ listing }) => (  
  <div>  
    <p>Title: {listing.title}</p>  
    <p>Type: {listing.type}</p>  
    <p>  
      Location: {listing.location.city},  
      {listing.location.state},  
      {listing.location.country}  
    </p>  
  </div>  
);

Even better, we can further destructure nested objects like below:

const Listing = ({  
  listing: {  
    title,  
    type,  
    location: {  
      city,  
      state,  
      country  
    }  
  }  
}) =\> (  
  <div>  
    <p>Title: {title}</p>  
    <p>Type: {type}</p>  
    <p>Location: {city}, {state}, {country}</p>  
  </div>  
);

Can you see how much easier this is to read? In this example, we’ve destructured both `listings` and the keys inside `listing`.

A common gotcha is destructuring only the keys like we do below and trying to access the object:

{ location: { city, state, country } }

In this scenario, we wouldn’t be able to access the `location` object through a variable named location.

In order to do so, we’d have to define it first with a simple fix like so:

{ location, location: { city, state, country } }

This wasn’t glaringly obvious to me at first, and I’d occasionally run into problems if I wanted to pass an object like `location` as a prop after destructuring its contents. Now you’re equipped to avoid the same mistakes I made!

#### Class Components

The idea is very much the same in class components, but the execution is a little different.

Take a look below:

import React, { Component } from 'react';

class Listing extends Component {  
  render() {  
    const {  
      listing: {  
        title,  
        type,  
        location: {  
          city,  
          state,  
          country  
        }  
      }  
    } = this.props;

return (  
      <div>  
        <p>Title: {title}</p>  
        <p>Type: {type}</p>  
        <p>  
          Location: {city}, {state}, {country}  
        </p>  
      </div>  
    )  
  }  
}

You may have noticed in the parent example that we can destructure the `Component` object as we import `React` in class components. This isn’t necessary for functional components as we won’t be extending the `Component` class for those.

Next, instead of destructuring in the argument, we destructure wherever the variables are being called. For example, if we take the same `Listing` child component and refactor it into a class, we would destructure in the `render` function where the props are being referenced.

The downside to destructuring in class components is that you’ll end up destructuring the same props each time you use it in a method. Although this can be repetitive, I’d argue that a positive is it clearly outlines which props are being used in each method.

In addition, you won’t have to worry about side effects such as accidentally changing a variable reference. This method keeps your methods separate and clean, which can be a huge advantage for other operations during your projects such as debugging or writing tests.

Thanks for reading! If this helped you, please clap and/or share this article so it can help others too! :)
