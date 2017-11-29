---
author: Bhuvan Malik
authorTwitter: none
authorFacebook: https://facebook.com/10211466824409328
title: "JavaScript ES6 Functions: The Good Parts"
subTitle: "ES6 offers some cool new functional features that make programming in JavaScript much more flexible. Let’s talk about some of them — spec..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*nND_xhKn-rWHi8nBShTH-Q.jpeg
url: https://medium.freecodecamp.org/es6-functions-9f61c72b1e86
id: es6-functions-9f61c72b1e86
date: 2017-03-20T17:54:26.943Z
tags: [
  "JavaScript",
  "ES6",
  "Programming",
  "Software Development",
  "Web Development"
]
---
# JavaScript ES6 Functions: The Good Parts



![](https://cdn-images-1.medium.com/max/1600/1*nND_xhKn-rWHi8nBShTH-Q.jpeg)



ES6 offers some cool new functional features that make programming in JavaScript much more flexible. Let’s talk about some of them — specifically, default parameters, rest parameters, and arrow functions.

**Fun tip**: you can copy and paste any of these examples/code into [Babel REPL](https://babeljs.io/repl/)and you can see how ES6 code transpiles to ES5.



![](https://cdn-images-1.medium.com/max/1600/1*Io0bwrj6Dxaj_TG6gqdVBA.gif)



### **Default Parameter Values**

JavaScript functions have a unique feature that allows for you to pass any number of parameters during function call (actual parameters) regardless of the number of parameters present in the function definition (formal parameters). So you need to include default parameters just in case someone forgets to pass one of the parameter.

#### **How default parameters would be implemented in ES5**





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/892f1c2222afb0ee00b86e2cef152610?postId=9f61c72b1e86" data-media-id="892f1c2222afb0ee00b86e2cef152610" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F11019194%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





The above seems fine when we run it. `number2` wasn’t passed and we checked this using the ‘`||`’ operator to return the second operand if the first is falsy. Thus, ‘10’ was assigned as a default value since `number2` is undefined.

There’s just one problem though. What if someone passes ‘0’ as the second argument? ⚠

The above approach would fail because our default value ‘10’ would be assigned instead of the passed value, such as ‘0’. Why? Because ‘0’ is evaluated as falsy!

Let’s improve the above code, shall we?





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/be34ba286b8fef44df84f4d9b31f9c6c?postId=9f61c72b1e86" data-media-id="be34ba286b8fef44df84f4d9b31f9c6c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F11019194%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Agh! That’s too much code. Not cool at all. Let’s see how ES6 does it.

#### **Default parameters in ES6**

<pre name="d850" id="d850" class="graf graf--pre graf-after--h4">function counts(**number1 = 5**, **number2 = 10**) {  
  // do anything here  
}</pre>

`number1` and `number2` are assigned default values of ‘5’ and ‘10’ respectively.  
Well yeah, this is pretty much it. Short and sweet. No extra code to check for a missing parameter. This makes the body of the function nice and short. 🙃

NOTE: When a value of `undefined` is passed for a parameter with default argument, as expected the value passed is **invalid** and the **default parameter value is assigned**. But if `null` is passed, it is considered **valid** and the **default parameter is not used** and null is assigned to that parameter.

A nice feature of default parameters is that the default parameter doesn’t necessarily have to be a primitive value, and we can also execute a function to retrieve the default parameter value. Here’s an example:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/23459da53af322313ce7a67a4204bd3e?postId=9f61c72b1e86" data-media-id="23459da53af322313ce7a67a4204bd3e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F11019194%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Previous parameters can also be default parameters for the parameters that come after them like so:

<pre name="73c0" id="73c0" class="graf graf--pre graf-after--p">function multiply(first, second = first) {  
  // do something here  
}</pre>

But the inverse will throw an error. That is, if second parameter is assigned as the default value for the first parameter, it results in an error because the second parameter is not yet defined while being assigned to the first parameter.

<pre name="75bb" id="75bb" class="graf graf--pre graf-after--p">function add(first = second, second) {  
  return first + second;  
}  
console.log(add(undefined, 1)); //throws an error</pre>

### Rest Parameters

> A _rest_ parameter is simply a named parameter which is preceded by three dots(…). This named parameter becomes an array which contains rest of the parameters(i.e apart from the named parameters) passed during function call.

Just keep in mind that there can only be one _rest_ parameter, and it has to be the last parameter. We can’t have a named parameter after a rest parameter.  
Here’s an example:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/67f382f6f399cb7de3862168399a6734?postId=9f61c72b1e86" data-media-id="67f382f6f399cb7de3862168399a6734" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F11019194%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





As you can see we’ve used the rest parameter to get all the keys/properties to be extracted from the passed object, which is the first parameter.

The difference between a rest parameter and the ‘arguments object’ is that the latter contains all the actual parameters passed during the function call, while the ‘rest parameter’ contains only the parameters that are not named parameters and are passed during the function call.

### Arrow Functions ➡



![](https://cdn-images-1.medium.com/max/1600/1*UevUlm8aVqev2axt8iQWJw.jpeg)



Arrow Functions, or “fat arrow functions,” introduce a new syntax for defining functions that is very concise. We can avoid typing keywords like `function`, `return` and even curly brackets `{ }` and parentheses `()`.

#### Syntax

The syntax comes in different flavors, depending on our usage. All the variations have one thing in **common**, i.e they begin with the **arguments**, followed by **the** **arrow** (`=>`), followed by the **function body**.

The arguments and the body can take different forms. Here’s the most basic example:

<pre name="40de" id="40de" class="graf graf--pre graf-after--p">let mirror = value => value;</pre>

<pre name="5594" id="5594" class="graf graf--pre graf-after--pre">// equivalent to:</pre>

<pre name="9048" id="9048" class="graf graf--pre graf-after--pre">let mirror = function(value) {  
  return value;  
};</pre>

The above example takes a single argument “value” (before the arrow) and simply returns that argument(`=> value;`). As you can see, t**here’s just the return value, so no need for return keyword or curly braces** to wrap up the function body.

Since there is only **one argument**, there’s **no need for parentheses** “( )” as well.

Here’s an example with more than one argument to help you understand this:

<pre name="ee63" id="ee63" class="graf graf--pre graf-after--p">let add = (no1, no2) => no1 + no2;</pre>

<pre name="b03b" id="b03b" class="graf graf--pre graf-after--pre">// equivalent to:</pre>

<pre name="399b" id="399b" class="graf graf--pre graf-after--pre">let add = function(no1, no2) {  
  return no1 + no2;  
};</pre>

If there are no arguments at all, you must include empty parentheses like below:

<pre name="9d4e" id="9d4e" class="graf graf--pre graf-after--p">let getMessage = () => 'Hello World';</pre>

<pre name="8af7" id="8af7" class="graf graf--pre graf-after--pre">// equivalent to:</pre>

<pre name="0a1d" id="0a1d" class="graf graf--pre graf-after--pre">let getMessage = function() {  
  return 'Hello World';  
}</pre>

For a function body with just a return statement, curly braces are **optional**.  
For a function body having more than just a return statement, you need to wrap the body in curly braces just like traditional functions.

Here’s a simple calculate function with two operations — add and subtract. Its body must be wrapped in curly braces:

<pre name="56c7" id="56c7" class="graf graf--pre graf-after--p">let calculate = (no1, no2, operation) => {  
    let result;  
    switch (operation) {  
        case 'add':  
            result = no1 + no2;  
            break;  
        case 'subtract':  
            result = no1 - no2;  
            break;  
    }  
    return result;  
};</pre>

Now what if we want a function that simply returns an object? The compiler will get confused whether the curly braces are of the object (`()=>**{**id: number**}**` ) or curly braces of the function body.

The solution is to wrap the object in parentheses. Here’s how:

<pre name="0ff5" id="0ff5" class="graf graf--pre graf-after--p">let getTempItem = number => **(**{ id: number}**)**;</pre>

<pre name="0d6e" id="0d6e" class="graf graf--pre graf-after--pre">// effectively equivalent to:</pre>

<pre name="a934" id="a934" class="graf graf--pre graf-after--pre">let getTempItem = function(number) {  
    return {  
        id: number  
    };  
};</pre>

Let’s have a look at the final example. In this we’ll use filter function on a sample array of numbers to return all numbers greater than 5,000:

<pre name="7348" id="7348" class="graf graf--pre graf-after--p">// with arrow function  
let result = sampleArray.filter(element => element > 5000);</pre>

<pre name="1daa" id="1daa" class="graf graf--pre graf-after--pre">// without arrow function  
let result = sampleArray.filter(function(element) {  
  return element > 5000;  
});</pre>

We can see how much less code is necessary compared to the traditional functions.

A few things about arrow functions to keep in mind though:

*   They can’t be called with _new_, can’t be used as constructors (and therefore lack prototype as well)
*   Arrow functions have their own scope, but there’s no ‘_this’_ of their own.
*   No _arguments_ object is available. You **can use** rest parameters however.

Since JavaScript treats functions as first-class, arrow functions make writing functional code like lambda expressions and currying much easier.

> “Arrow functions were like rocket fuel for the functional programming explosion in JavaScript.” — Eric Elliott











* * *







Well, there you go! Perhaps it’s time for you to start using these features.

ES6 features like these are a breath of fresh air, and developers just love using them.



![](https://cdn-images-1.medium.com/max/1600/1*BMHcup4PUdCGWFQ0hjtcFw.gif)



Here’s the [link](https://medium.com/@bhuvanmalik/what-is-variable-hoisting-differentiating-between-var-let-and-const-in-es6-f1a70bb43d) to my previous post on variable declarations and hoisting!  
I hope this motivates you to take ES6 head on if you haven’t already!

Peace ✌️️








