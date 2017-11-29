---
author: Guido Schmitz
authorTwitter: https://twitter.com/guidsen
authorFacebook: https://facebook.com/1289567887722714
title: "Higher Order Functions: Using Filter, Map and Reduce for More Maintainable Code"
subTitle: "Higher order functions can help you to step up your JavaScript game by making your code more declarative. That is, short, simple, and rea..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*1uudsYisszFlHUxPiMMpbw.jpeg
url: https://medium.freecodecamp.org/higher-order-functions-in-javascript-d9101f9cf528
id: higher-order-functions-in-javascript-d9101f9cf528
date: 2017-08-18T15:31:55.603Z
tags: [
  "Functional Programming",
  "JavaScript",
  "Programming",
  "Technology",
  "Tech"
]
---
# Higher Order Functions: Using Filter, Map and Reduce for More Maintainable Code







![](https://cdn-images-1.medium.com/max/2000/1*1uudsYisszFlHUxPiMMpbw.jpeg)

Source: [Unsplash](http://www.unsplash.com)







Higher order functions can help you to step up your JavaScript game by making your code more declarative. That is, short, simple, and readable.

Knowing when and how to use these functions is essential. They make your code easier to understand and maintain. It also makes it easy to combine functions with each other. This is called composition, and I will not go in much detail here. In this article I will cover the three most used higher order functions in JavaScript. These are `.filter()`, `.map()` and `.reduce()`.

#### Filter

Imagine writing a piece of code that accepts a list of people where you want to filter out the people that are equal or above the age of 18.

Our list looks like the one below:

<pre name="56fd" id="56fd" class="graf graf--pre graf-after--p">const people = [  
 { name: ‘John Doe’, age: 16 },  
 { name: ‘Thomas Calls’, age: 19 },  
 { name: ‘Liam Smith’, age: 20 },  
 { name: ‘Jessy Pinkman’, age: 18 },  
];</pre>

Let’s look at an example of a first order function which select people that are above the age of 18\. I’m using an [arrow function](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions) that is part of the ECMAScript standard or ES6 for short. It’s just a shorter way of defining a function and allows you to skip typing function and return, as well as some parentheses, braces, and a semicolon.

<pre name="3719" id="3719" class="graf graf--pre graf-after--p">const peopleAbove18 = (collection) => {  
  const results = [];  

  for (let i = 0; i < collection.length; i++) {  
    const person = collection[i];  

    if (person.age >= 18) {  
      results.push(person);  
    }  
  }</pre>

<pre name="456a" id="456a" class="graf graf--pre graf-after--pre">  return results;  
};</pre>

Now what if we want to select all the people who are between 18 and 20? We could create another function.

<pre name="ba9e" id="ba9e" class="graf graf--pre graf-after--p">const peopleBetween18And20 = (collection) => {  
  const results = [];  

  for (let i = 0; i < collection.length; i++) {  
    const person = collection[i];  

    if (person.age >= 18 && person.age <= 20) {  
      results.push(person);  
    }  
  }</pre>

<pre name="8fb6" id="8fb6" class="graf graf--pre graf-after--pre">  return results;  
};</pre>

You may already recognize a lot of repeating code here. This could be abstracted into a more generalized solution. These two functions have something in common. They both iterate over a list and filter it on a given condition.

> “A higher order function is a function that takes one or more functions as arguments.”_—_ [_Closurebridge_](https://clojurebridge.github.io/community-docs/docs/clojure/higher-order-function/)

We can improve our previous function by using a more declarative approach, `.filter()`.

<pre name="aa2d" id="aa2d" class="graf graf--pre graf-after--p">const peopleAbove18 = (collection) => {  
  return collection  
    .filter((person) => person.age >= 18);  
}</pre>

That’s it! We can reduce a lot of extra code by using this higher order function. It also make our code better to read. We don’t care how things are being filtered, we just want it to filter. I will go into combining functions later in this article.

#### Map

Let’s take the same list of people and an array of names that tells if the person loves to drink coffee.

<pre name="4212" id="4212" class="graf graf--pre graf-after--p">const coffeeLovers = [‘John Doe’, ‘Liam Smith’, ‘Jessy Pinkman’];</pre>

The imperative way will be like:

<pre name="17d6" id="17d6" class="graf graf--pre graf-after--p">const addCoffeeLoverValue = (collection) => {  
  const results = [];  

  for (let i = 0; i < collection.length; i++) {  
    const person = collection[i];</pre>

<pre name="6cdf" id="6cdf" class="graf graf--pre graf-after--pre">    if (coffeeLovers.includes(person.name)) {  
      person.coffeeLover = true;  
    } else {  
      person.coffeeLover = false;  
    }  

    results.push(person);  
  }  

  return results;  
};</pre>

We could use `.map()` to make this more declarative.

<pre name="9f8d" id="9f8d" class="graf graf--pre graf-after--p">const incrementAge = (collection) => {  
  return collection.map((person) => {  
    person.coffeeLover = coffeeLovers.includes(person.name);  

    return person;  
  });  
};</pre>

Again, `.map()` is a high-order function. It allows a function to be passed as an argument.

#### Reduce

I bet you will like this function when you know when and how to use it.  
The cool thing about `.reduce()` is that most of the functions above can be made with it.

Let’s take a simple example first. We want to sum up all the people’s ages. Again, we’ll look how this can be done using the imperative approach. It’s basically looping through the collection and increment a variable with the age.

<pre name="d5fd" id="d5fd" class="graf graf--pre graf-after--p">const sumAge = (collection) => {  
  let num = 0;  

  collection.forEach((person) => {  
    num += person.age;  
  });  

  return num;  
}</pre>

And the declarative approach using `.reduce()`.

<pre name="0765" id="0765" class="graf graf--pre graf-after--p">const sumAge = (collection) => collection.reduce((sum, person) => {  
 return sum + person.age;  
}, 0);</pre>

We can even use `.reduce()` to create our own implementation of `.map()` and `.filter()` .

<pre name="45d9" id="45d9" class="graf graf--pre graf-after--p">const map = (collection, fn) => {  
  return collection.reduce((acc, item) => {  
    return acc.concat(fn(item));  
  }, []);  
}</pre>

<pre name="ea14" id="ea14" class="graf graf--pre graf-after--pre">const filter = (collection, fn) => {  
  return collection.reduce((acc, item) => {  
    if (fn(item)) {  
      return acc.concat(item);  
    }  

    return acc;  
  }, []);  
}</pre>

This might be hard to understand at first. But what `.reduce()` basically does is start with a collection and a variable with an initial value. You then iterate over the collection and append (or add) the values to the variable.

#### Combining map, filter and reduce

Great, that these functions exist. But the good part is that they exist on the Array prototype in JavaScript. This means these functions can be used together! This makes it easy to create reusable functions and reduce the amount of code that is required to write certain functionality.

So we talked about using `.filter()` to filter out the people that are equal or below the age of 18. `.map()` to add the `coffeeLover` property, and `.reduce()` to finally create a sum of the age of everyone combined.  
Lets write some code that actually combines these three steps.

<pre name="e637" id="e637" class="graf graf--pre graf-after--p">const people = [  
 { name: ‘John Doe’, age: 16 },  
 { name: ‘Thomas Calls’, age: 19 },  
 { name: ‘Liam Smith’, age: 20 },  
 { name: ‘Jessy Pinkman’, age: 18 },  
];</pre>

<pre name="13eb" id="13eb" class="graf graf--pre graf-after--pre">const coffeeLovers = [‘John Doe’, ‘Liam Smith’, ‘Jessy Pinkman’];</pre>

<pre name="0d8c" id="0d8c" class="graf graf--pre graf-after--pre">const ageAbove18 = (person) => person.age >= 18;  
const addCoffeeLoverProperty = (person) => {  
 person.coffeeLover = coffeeLovers.includes(person.name);  

 return person;  
}</pre>

<pre name="e5d1" id="e5d1" class="graf graf--pre graf-after--pre">const ageReducer = (sum, person) => {  
 return sum + person.age;  
}, 0);</pre>

<pre name="e934" id="e934" class="graf graf--pre graf-after--pre">const coffeeLoversAbove18 = people  
 .filter(ageAbove18)  
 .map(addCoffeeLoverProperty);</pre>

<pre name="5191" id="5191" class="graf graf--pre graf-after--pre">const totalAgeOfCoffeeLoversAbove18 = coffeeLoversAbove18  
 .reduce(ageReducer);</pre>

<pre name="f73d" id="f73d" class="graf graf--pre graf-after--pre">const totalAge = people  
 .reduce(ageReducer);</pre>

If you do it the imperative way, you will end up writing a lot of repeating code.

The mindset of creating functions with `.map()` ,`.reduce()` and `.filter()` will improve the quality of the code you’ll write. But it also adds a lot of readability. You don’t have to think about what’s going on inside a function. It’s easy to understand.

### Where to go next?

Now that you’ve learned something about higher order functions, you might find that these articles below may be interesting to you.

[**Write safer and cleaner code by leveraging the power of “Immutability”**  
_Immutability is one of the building blocks of functional programming. It allows you to write safer and cleaner code. I…_medium.freecodecamp.com](https://medium.freecodecamp.com/write-safer-and-cleaner-code-by-leveraging-the-power-of-immutability-7862df04b7b6 "https://medium.freecodecamp.com/write-safer-and-cleaner-code-by-leveraging-the-power-of-immutability-7862df04b7b6")[](https://medium.freecodecamp.com/write-safer-and-cleaner-code-by-leveraging-the-power-of-immutability-7862df04b7b6)

[**Reduce (Composing Software)**  
_Note: This is part of the “Composing Software” series on learning functional programming and compositional software…_medium.com](https://medium.com/javascript-scene/reduce-composing-software-fe22f0c39a1d "https://medium.com/javascript-scene/reduce-composing-software-fe22f0c39a1d")[](https://medium.com/javascript-scene/reduce-composing-software-fe22f0c39a1d)

[**Imperative vs Declarative Programming**  
_At this point you’ve undoubtedly heard about imperative programming vs declarative programming. You might have even…_medium.freecodecamp.com](https://medium.freecodecamp.com/imperative-vs-declarative-programming-283e96bf8aea "https://medium.freecodecamp.com/imperative-vs-declarative-programming-283e96bf8aea")[](https://medium.freecodecamp.com/imperative-vs-declarative-programming-283e96bf8aea)

[**Master the JavaScript Interview: What is Function Composition?**  
_“Master the JavaScript Interview” is a series of posts designed to prepare candidates for common questions they are…_medium.com](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-function-composition-20dfb109a1a0 "https://medium.com/javascript-scene/master-the-javascript-interview-what-is-function-composition-20dfb109a1a0")[](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-function-composition-20dfb109a1a0)

Thanks for reading! :)

If you enjoyed this article, hit that heart button below ❤. It would mean a lot to me and it helps other people see the story.

Say hello on [Twitter](https://twitter.com/guidsen)








