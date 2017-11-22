---
author: Divyanshu Maithani
authorTwitter: https://twitter.com/divyanshu013
authorFacebook: https://facebook.com/727660917382021
title: "How to use Memoize to cache JavaScript function results and speed up your code"
subTitle: "Functions are an integral part of programming. They help add modularity and reusability to our code...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*UPyVG04cujAGglMNgF1bTA.jpeg
url: https://medium.freecodecamp.org/understanding-memoize-in-javascript-51d07d19430e
id: understanding-memoize-in-javascript-51d07d19430e
date: 2017-06-29T05:53:11.004Z
tags: [
  "JavaScript",
  "ES6",
  "Programming",
  "Web Development",
  "Software Development"
]
---
# How to use Memoize to cache JavaScript function results and speed up your code







![](https://cdn-images-1.medium.com/max/2000/1*UPyVG04cujAGglMNgF1bTA.jpeg)

[Image](https://unsplash.com/search/computer?photo=1iVKwElWrPA) by [Patrick Lindenberg](https://unsplash.com/@heapdump)







Functions are an integral part of programming. They help add **modularity** and **reusability** to our code.

It’s quite common to divide our program into chunks using functions which we can call later to perform some useful action.

Sometimes, a function can become expensive to call multiple times (say, a function to calculate the [factorial](https://en.wikipedia.org/wiki/Factorial) of a number). But there’s a way we can optimize such functions and make them execute much faster: **caching**.

For example, let’s say we have a `function` to return the factorial of a number:

<pre name="4687" id="4687" class="graf graf--pre graf-after--p">function factorial(n) {  
    // Calculations: n * (n-1) * (n-2) * ... (2) * (1)  
    return factorial  
}</pre>

Great, now let’s find `factorial(50)`. The computer will perform calculations and return us the final answer, sweet!

When that’s done, let’s find `factorial(51)`. The computer again performs a number of calculations and gets us the result, but you might have noticed that we’re already repeating a number of steps that could have been avoided. An optimized way would be:

<pre name="97c5" id="97c5" class="graf graf--pre graf-after--p">factorial(51) = factorial(50) * 51</pre>

But our `function` performs the calculations from scratch every time it’s called:

<pre name="dfba" id="dfba" class="graf graf--pre graf-after--p">factorial(51) = 51 * 50 * 49 * ... * 2 * 1</pre>

Wouldn’t it be cool if somehow our `factorial` function could remember the values from its previous calculations and use them to speed up the execution?

In comes **memoization**, a way for our `function` to remember (cache) the results. Now that you’ve a basic understanding of what we’re trying to achieve, here’s a formal definition:

> [**Memoization**](https://en.wikipedia.org/wiki/Memoization) is an optimization technique used primarily to speed up computer programs by **storing the results of expensive function calls** and returning the cached result when the same inputs occur again

**Memoizing** in simple terms means **memorizing** or storing in memory. A memoized function is usually faster because if the function is called subsequently with the previous value(s), then instead of executing the function, we would be fetching the result from the cache.

Here’s what a simple memoized function might look like _(and here’s a_ [_CodePen_](https://codepen.io/divyanshu013/pen/xdQPvp?editors=0011) _in case you want to interact with it)_:

<pre name="c1ee" id="c1ee" class="graf graf--pre graf-after--p">// a simple function to add something  
const add = (n) => (n + 10);  
add(9);</pre>

<pre name="a839" id="a839" class="graf graf--pre graf-after--pre">// a simple memoized function to add something  
const memoizedAdd = () => {  
  let cache = {};  
  return (n) => {  
    if (n in cache) {  
      console.log('Fetching from cache');  
      return cache[n];  
    }  
    else {  
      console.log('Calculating result');  
      let result = n + 10;  
      cache[n] = result;  
      return result;  
    }  
  }  
}</pre>

<pre name="9012" id="9012" class="graf graf--pre graf-after--pre">// returned function from memoizedAdd  
const newAdd = memoizedAdd();  
console.log(newAdd(9)); // calculated  
console.log(newAdd(9)); // cached</pre>

### Memoization takeaways

Some takeaways from the above code are:

*   `memoizedAdd` returns a `function` which is invoked later. This is possible because in JavaScript, functions are first class objects which lets us use them as [higher order functions](http://eloquentjavascript.net/05_higher_order.html#h_xxCc98lOBK) and return another function.
*   `cache` can remember its _values_ since the returned function has a [closure](https://developer.mozilla.org/en/docs/Web/JavaScript/Closures) over it.
*   It’s essential that the memoized function is [pure](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976). A pure function will return the same output for a particular input no mater how many times it’s called, which makes the `cache` work as expected.

### Writing your own `memoize` function

The previous code works fine but what if we wanted to turn any function into a memoized function?

Here’s how to write your own memoize function ([codepen](https://codepen.io/divyanshu013/pen/zwMPdK?editors=0011#code-area)):

<pre name="d7e9" id="d7e9" class="graf graf--pre graf-after--p">// a simple pure function to get a value adding 10  
const add = (n) => (n + 10);  
console.log('Simple call', add(3));</pre>

<pre name="1cc2" id="1cc2" class="graf graf--pre graf-after--pre">// a simple memoize function that takes in a function  
// and returns a memoized function  
const memoize = (fn) => {  
  let cache = {};  
  return (...args) => {  
    let n = args[0];  // just taking one argument here  
    if (n in cache) {  
      console.log('Fetching from cache');  
      return cache[n];  
    }  
    else {  
      console.log('Calculating result');  
      let result = fn(n);  
      cache[n] = result;  
      return result;  
    }  
  }  
}</pre>

<pre name="8f67" id="8f67" class="graf graf--pre graf-after--pre">// creating a memoized function for the 'add' pure function  
const memoizedAdd = memoize(add);  
console.log(memoizedAdd(3));  // calculated  
console.log(memoizedAdd(3));  // cached  
console.log(memoizedAdd(4));  // calculated  
console.log(memoizedAdd(4));  // cached</pre>

Now that’s great! This simple `memoize` function will wrap any simple `function` into a memoized equivalent. The code works fine for simple functions and it can be easily tweaked to handle any number of `arguments` as per your needs. Another alternative is to make use of some de-facto libraries such as:

*   [Lodash](https://lodash.com/docs/4.17.4#memoize)’s `_.memoize(func, [resolver])`
*   ES7 `@memoize` [decorators](https://babeljs.io/docs/plugins/transform-decorators/) from [decko](https://github.com/developit/decko#memoize)

### Memoizing recursive functions

If you try passing in a recursive function to the `memoize` function above or `_.memoize` from Lodash, the results won’t be as expected since the recursive function on its subsequent calls will end up calling itself instead of the memoized function thereby making no use of the `cache`.

Just make sure that your recursive function is calling the memoized function. Here’s how you can tweak a textbook [factorial](https://en.wikipedia.org/wiki/Factorial) example ([codepen](https://codepen.io/divyanshu013/pen/JNevOm)):

<pre name="0737" id="0737" class="graf graf--pre graf-after--p">// same memoize function from before  
const memoize = (fn) => {  
  let cache = {};  
  return (...args) => {  
    let n = args[0];  
    if (n in cache) {  
      console.log('Fetching from cache', n);  
      return cache[n];  
    }  
    else {  
      console.log('Calculating result', n);  
      let result = fn(n);  
      cache[n] = result;  
      return result;  
    }  
  }  
}</pre>

<pre name="2edf" id="2edf" class="graf graf--pre graf-after--pre">const factorial = memoize(  
  (x) => {  
    if (x === 0) {  
      return 1;  
    }  
    else {  
      return x * factorial(x - 1);  
    }  
  }  
);</pre>

<pre name="c8fe" id="c8fe" class="graf graf--pre graf-after--pre">console.log(factorial(5)); // calculated  
console.log(factorial(6)); // calculated for 6 and cached for 5</pre>

A few points to note from this code:

*   The `factorial` function is recursively calling a memoized version of itself.
*   The memoized function is caching the values of previous factorials which significantly improves calculations since they can be reused `factorial(6) = 6 * factorial(5)`

### Is memoization same as caching?

Yes, kind of. Memoization is actually a specific type of caching. While caching can refer in general to any storing technique (like [HTTP caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)) for future use, memoizing specifically involves _caching_ the return values of a `function`.

### When to memoize your functions

Although it might look like memoization can be used with all functions, it actually has limited use cases:

*   In order to memoize a function, it should be pure so that return values are the same for same inputs every time
*   Memoizing is a trade-off between added space and added speed and thus only significant for functions having a limited input range so that cached values can be made use of more frequently
*   It might look like you should memoize your API calls however it isn’t necessary because the browser automatically caches them for you. See [HTTP caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching) for more detail
*   The best use case I found for memoized functions is **for heavy computational functions** which can significantly improve performance (factorial and fibonacci are not really good real world examples)
*   If you’re into React/Redux you can check out [reselect](https://github.com/reactjs/reselect#creating-a-memoized-selector) which uses a _memoized selector_ to ensure that calculations only happen when a change happens in a related part of the state tree.

#### Further reading

The following links can be useful if you would like to know more about some of the topics from this article in more detail:

*   [Higher order functions](http://eloquentjavascript.net/05_higher_order.html#h_xxCc98lOBK) in JavaScript
*   [Closures](https://developer.mozilla.org/en/docs/Web/JavaScript/Closures) in JavaScript
*   [Pure functions](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)
*   Lodash’s `_.memoize` [docs](https://lodash.com/docs/4.17.4#memoize) and [source code](https://github.com/lodash/lodash/blob/4.17.4/lodash.js#L10554-L10572)
*   More memoization examples [here](https://www.sitepoint.com/implementing-memoization-in-javascript/) and [here](http://inlehmansterms.net/2015/03/01/javascript-memoization/)
*   [reactjs/reselect](https://github.com/reactjs/reselect)











* * *







I hope this article was useful for you, and you’ve gained a better understanding of memoization in JavaScript :)








