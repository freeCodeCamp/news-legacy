---
author: Bhuvan Malik
authorTwitter: none
authorFacebook: https://facebook.com/10211466824409328
title: "A guide to JavaScript variable hoisting 🚩 with let and const"
subTitle: "New JavaScript developers often have a hard time understanding the unique behaviour of variable/function hoisting...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*0hfm3TfurQboq6KlJrG56g.jpeg
url: https://medium.freecodecamp.org/what-is-variable-hoisting-differentiating-between-var-let-and-const-in-es6-f1a70bb43d
id: what-is-variable-hoisting-differentiating-between-var-let-and-const-in-es6-f1a70bb43d
date: 2017-02-19T17:28:14.763Z
tags: [
  "JavaScript",
  "Programming",
  "ES6",
  "Web Development",
  "Software Development"
]
---
# A guide to JavaScript variable hoisting 🚩 with let and const



![](https://cdn-images-1.medium.com/max/1600/1*0hfm3TfurQboq6KlJrG56g.jpeg)



New JavaScript developers often have a hard time understanding the unique behaviour of variable/function _hoisting_.

Since we’re going to be talking about `var`, `let` and `const` declarations later on, it’s important to understand _variable hoisting_ rather than _function hoisting_. Let’s dive in!



![](https://cdn-images-1.medium.com/max/1600/1*OCkBhCR8R8V605XTM1tCnw.gif)



### **What is variable hoisting?**

The JavaScript engine treats all variable declarations using “`_var_`” as if they are declared at the top of a functional scope(if declared inside a function) or global scope(if declared outside of a function) regardless of where the actual declaration occurs. This essentially is “_hoisting_”.

So variables might actually be available before their declaration.



![](https://cdn-images-1.medium.com/max/1600/1*q7BPDmcgkh2Sblc5EW2M8A.gif)



Let’s see it in action..

<pre name="04b5" id="04b5" class="graf graf--pre graf-after--p">// OUTPUT : undefined  
console.log(shape);</pre>

<pre name="3f32" id="3f32" class="graf graf--pre graf-after--pre">var shape = "square";</pre>

<pre name="2508" id="2508" class="graf graf--pre graf-after--pre">// OUTPUT : "square"  
console.log(shape);</pre>

If you’re coming from C-based languages, you’d expect an error to be thrown when the first `console.log`is called since the variable `shape`hadn’t been defined at that point. But the JavaScript interpreter looks ahead and “hoists” all variable declarations to the top, and the initialization remains in the same spot.

Here’s what is happening behind the scenes:

<pre name="a4b5" id="a4b5" class="graf graf--pre graf-after--p">//declaration getting hoisted at the top  
var shape;</pre>

<pre name="b616" id="b616" class="graf graf--pre graf-after--pre">// OUTPUT : undefined  
console.log(shape);</pre>

<pre name="9b14" id="9b14" class="graf graf--pre graf-after--pre">shape = "square";</pre>

<pre name="39df" id="39df" class="graf graf--pre graf-after--pre">// OUTPUT : "square"  
console.log(shape);</pre>

Here is another example this time in a functional scope to make things more clear:

<pre name="95ae" id="95ae" class="graf graf--pre graf-after--p">function getShape(condition) {  
    // shape exists here with a value of undefined</pre>

<pre name="7ee5" id="7ee5" class="graf graf--pre graf-after--pre">    // OUTPUT : undefined  
    console.log(shape);</pre>

<pre name="6ccc" id="6ccc" class="graf graf--pre graf-after--pre">    if (condition) {  
        var shape = "square";  
        // some other code  
        return shape;  
    } else {  
        // shape exists here with a value of undefined  
        return false;  
    }  
}</pre>

You can see in the above example how `shape`’s declaration is hoisted at the top of `getShape()` function. This is because if/else blocks don’t create a local scope as seen in other languages. A local scope is essentially function scope in JavaScript. Therefore, shape is accessible everywhere outside the `if`block and within the function with an ‘_undefined’_ value.

This default behaviour of JavaScript has its fair share of advantages and disadvantages. Not fully understanding these can lead to subtle but dangerous bugs in our code.

### **Enter Block-Level Declarations!**



![](https://cdn-images-1.medium.com/max/1600/1*wNxUqEaF9ZB10WkgOrGtZw.gif)



ES6 introduced block-level scoping options to provide developers with more control and flexibility over a variable’s lifecycle.

Block-level declarations are made in block/lexical scopes that are created inside a block “{ }”.

#### let Declarations

This syntax is similar to `var`, just replace `var` with `let` to declare a variable with its scope being only that code block.

Place your `let` declarations at the top in a block so they’ll be available within that entire block.

For example:

<pre name="aad3" id="aad3" class="graf graf--pre graf-after--p">function getShape(condition) {  
// **shape doesn't exist here**</pre>

<pre name="16e1" id="16e1" class="graf graf--pre graf-after--pre">// console.log(shape); => **ReferenceError: shape is not defined**</pre>

<pre name="6fdd" id="6fdd" class="graf graf--pre graf-after--pre">if (condition) {  
        let shape = "square";  
        // some other code  
        return shape;  
    } else {  
        // **shape doesn't exist here as well**  
        return false;  
    }  
}</pre>

Notice how shape exists only inside the `if` block, and throws an error when accessed outside of it instead of outputting `undefined` like our previous case with `var` declarations.

**NOTE** : If an identifier has already been defined inside a scope with `var`, using that same identifier in a `let` declaration inside the same scope throws an error.  
Also, no error is thrown if a `let` declaration creates a variable with the same name as that of a variable in it’s outer scope. (This case is same with `const` declarations which we’ll talk about shortly.)

For example:

<pre name="0100" id="0100" class="graf graf--pre graf-after--p">var shape = "square";  

let shape = "rectangle";</pre>

<pre name="6475" id="6475" class="graf graf--pre graf-after--pre">// SyntaxError: Identifier 'shape' has already been declared</pre>

and:

<pre name="7c7d" id="7c7d" class="graf graf--pre graf-after--p">var shape = "square";  
if (condition) {  
    // doesn't throw an error  
    let shape = "rectangle";  
    // more code   
}  
// No error</pre>

### const Declarations

The declaration syntax is similar to `let` & `var` , lifecycle is the same as `let`. But you have to follow some rules.

Bindings declared using `const` are treated as **constants**, andtherefore **their values cannot be changed once defined**. Due to this, every `const` declaration **must be initialized** at the time of declaration.

For example:

<pre name="5816" id="5816" class="graf graf--pre graf-after--p">// valid   
const shape = "triangle";</pre>

<pre name="3460" id="3460" class="graf graf--pre graf-after--pre">// syntax error: missing initialization  
const color;</pre>

<pre name="3e62" id="3e62" class="graf graf--pre graf-after--pre">// TypeError: Assignment to constant variable  
shape = "square"</pre>

**However**, the rule is a little different when it comes to objects. An object’s value can be modified!

<pre name="61a6" id="61a6" class="graf graf--pre graf-after--p">const shape = {  
    name: "triangle",  
    sides: 3  
}</pre>

<pre name="471b" id="471b" class="graf graf--pre graf-after--pre">// WORKS  
shape.name = "square";  
shape.sides = 4;</pre>

<pre name="3928" id="3928" class="graf graf--pre graf-after--pre">// SyntaxError: Invalid shorthand property initializer  
shape = {  
    name: "hexagon",  
    sides: 6  
}</pre>

In the above example we can see that only the properties of the `shape` object could be changed because we are only changing what `shape` contains, not what it’s bound to.

We can summarize by saying that `const` prevents modification of the binding as a whole — not the value that it’s bound to.

Note: properties can be mutated. So for true immutability, use Immutable.js or Mori.

### The Temporal Dead Zone

We now know that accessing `let` or `const` variables before they’re declared will throw a `ReferenceError`. This period between entering scope and being declared where they cannot be accessed is called the Temporal Dead Zone.

Note that “Temporal Dead Zone” isn’t formally mentioned in the ECMAScript specification. It’s just a popular term amongst programmers.



![](https://cdn-images-1.medium.com/max/1600/1*HLUGknnpXXGSFNsQ_dzmsg.gif)



I personally recommend you always use `const`, as it leads to fewer bugs. I have yet to encounter a situation where I needed to use `var`.

As a general rule, use `let` only for loop counters or only if you really need reassignment. Everywhere else, use `const`. Personally I’ve ditched loops for filter(), map() & reduce(). You should too.

Click [here](https://medium.com/@bhuvanmalik/es6-functions-9f61c72b1e86) for my article on some of the useful new features in ES6 related to functions.

I hope this helps you! See you next time. Peace! ✌️️








