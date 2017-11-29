---
author: Jackson Bates
authorTwitter: https://twitter.com/JacksonBates
authorFacebook: https://facebook.com/10156746137960434
title: "What I learned from writing six functions that all did the same thing"
subTitle: "A couple weeks ago, a camper started an unofficial algorithm competition on Free Code Camp’s Forum...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*BM1TcQvHNMc09jc4GxG-7w.jpeg
url: https://medium.freecodecamp.org/what-i-learned-from-writing-six-functions-that-all-did-the-same-thing-b38fd48f0d55
id: what-i-learned-from-writing-six-functions-that-all-did-the-same-thing-b38fd48f0d55
date: 2016-10-30T08:59:34.559Z
tags: [
  "JavaScript",
  "Programming",
  "Tech",
  "Life Lessons",
  "Web Development"
]
---
# _What I learned from writing six functions that all did the same thing_



![](https://cdn-images-1.medium.com/max/1600/1*BM1TcQvHNMc09jc4GxG-7w.jpeg)



A couple weeks ago, a camper started an unofficial algorithm competition on [Free Code Camp’s Forum](http://forum.freecodecamp.com/t/javascript-algorithm-challenge-october-9-through-16/44096?u=jacksonbates).

The challenge seemed simple enough: return the sum of all multiples of 3 or 5 that are below a number N, where N is an input parameter to the function.

But instead of just finding any solution, [P1xt](https://medium.com/@P1xt)’s competition required you to focus on efficiency. It encouraged you to write your own tests, and to benchmark the performance of your solutions.

This is a breakdown of every function I tried and tested, including my tests and benchmark scripts. At the end, I’ll show the function that blew all of my own out of the water, and taught me a valuable lesson.





<iframe data-width="435" data-height="399" width="435" height="399" src="https://medium.freecodecamp.org/media/87f358cbeb388e68b9aa3a5d373d86ba?postId=b38fd48f0d55" data-media-id="87f358cbeb388e68b9aa3a5d373d86ba" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FqhY3EfioLSshO%2Fgiphy.gif&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



Adding testing to your code rarely hurts…Source: The Simpsons, via [Giphy](http://gph.is/1szb6yu)



### Function #1: Array, push, increment

<pre name="36e7" id="36e7" class="graf graf--pre graf-after--h3">function arrayPushAndIncrement(n) {  
  var array = [];  
  var result = 0;  
  for (var i = 1; i < n; i ++) {  
    if (i % 3 == 0 || i % 5 == 0) {  
      array.push(i);  
    }  
  }  
  for (var num of array) {  
    result += num;  
  }  
  return result;  
}</pre>

<pre name="2a3c" id="2a3c" class="graf graf--pre graf-after--pre">module.exports = arrayPushAndIncrement; // this is necessary for testing</pre>

For problems like this, my brain defaults to: build an array, then do something to that array.

This function creates an array and pushes any numbers that meet our condition (divisible by 3 or 5) into it. It then loops through that array, adding all the values together.

### Setting up testing

Here are the automated tests for this function, which use Mocha and Chai, running on NodeJS.

If you want more information about installing Mocha and Chai, I’ve written [a detailed guide](http://forum.freecodecamp.com/t/testing-your-own-code-using-mocha-and-chai-simple-example/44149?u=jacksonbates) on Free Code Camp’s forum.

I wrote a simple testing script using the values [P1xt](https://medium.com/@P1xt) provided. Notice that in the script below, the function is included as a module:

<pre name="bb45" id="bb45" class="graf graf--pre graf-after--p">// testMult.js</pre>

<pre name="8b67" id="8b67" class="graf graf--pre graf-after--pre">var should = require( 'chai' ).should();  
var arrayPushAndIncrement = require( './arrayPushAndIncrement' );</pre>

<pre name="a206" id="a206" class="graf graf--pre graf-after--pre">describe('arrayPushAndIncrement', function() {  
  it('should return 23 when passed 10', function() {  
    arrayPushAndIncrement(10).should.equal(23);  
  })  
  it('should return 78 when passed 20', function() {  
    arrayPushAndIncrement(20).should.equal(78);  
  })  
  it('should return 2318 when passed 100', function() {  
    arrayPushAndIncrement(100).should.equal(2318);  
  })  
  it('should return 23331668 when passed 10000', function() {  
    arrayPushAndIncrement(10000).should.equal(23331668);  
  })  
  it('should return 486804150 when passed 45678', function() {  
    arrayPushAndIncrement(45678).should.equal(486804150);  
  })  
})</pre>

When I ran the test using `mocha testMult.js` it returned the following:



![](https://cdn-images-1.medium.com/max/1600/1*tmJwwmFxPQevv_kEKOWPRw.png)



For all future functions in this article, assume they passed all tests. For your own code, add tests for each new function you try.

### Function #2: Array, push, reduce

<pre name="f76f" id="f76f" class="graf graf--pre graf-after--h3">function arrayPushAndReduce(n) {  
  var array = [];  
  for (var i = 1; i < n; i ++) {  
    if (i % 3 == 0 || i % 5 == 0) {  
      array.push(i);  
    }  
  }  
  return array.reduce(function(prev, current) {  
    return prev + current;  
  });  
}</pre>

<pre name="d817" id="d817" class="graf graf--pre graf-after--pre">module.exports = arrayPushAndReduce;</pre>

So this function uses a similar approach to my previous one, but instead of using a `for` loop to construct the final sum, it uses the fancier `reduce` method.

### Setting up performance benchmark testing

Now that we have two functions, we can compare their efficiency. Again, thanks to [P1xt](https://medium.com/@P1xt) for providing this script in a previous forum thread.

<pre name="05df" id="05df" class="graf graf--pre graf-after--p">// performance.js</pre>

<pre name="a20e" id="a20e" class="graf graf--pre graf-after--pre">var Benchmark = require( 'benchmark' );  
var suite = new Benchmark.Suite;</pre>

<pre name="eacb" id="eacb" class="graf graf--pre graf-after--pre">var arrayPushAndIncrement = require( './arrayPushAndIncrement' );  
var arrayPushAndReduce = require( './arrayPushAndReduce' );</pre>

<pre name="9d89" id="9d89" class="graf graf--pre graf-after--pre">// add tests  
suite.add( 'arrayPushAndIncrement', function() {  
  arrayPushAndIncrement(45678)  
})  
.add( 'arrayPushAndReduce', function() {  
  arrayPushAndReduce(45678)  
})  
// add listeners  
.on( 'cycle', function( event ) {  
    console.log( String( event.target ));  
})  
.on( 'complete', function() {  
    console.log( 'Fastest is ' + this.filter( 'fastest' ).map( 'name' ));  
})  
// run async  
.run({ 'async': true });</pre>

If you run this with `node performance.js` you’ll see the following terminal output:

<pre name="2991" id="2991" class="graf graf--pre graf-after--p">arrayPushAndIncrement x 270 ops/sec ±1.18% (81 runs sampled)  
arrayPushAndReduce x 1,524 ops/sec ±0.79% (89 runs sampled)  
Fastest is arrayPushAndReduce</pre>





<iframe data-width="435" data-height="244" width="435" height="244" src="https://medium.freecodecamp.org/media/72248669eded0a816ef8038b0fc4ef62?postId=b38fd48f0d55" data-media-id="72248669eded0a816ef8038b0fc4ef62" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F3oGRFKJ8Ea3hKkLRyE%2Fgiphy.gif&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



Now that’s fast! Source [Giphy](http://gph.is/1UXFu1x)



So using the `reduce` method gave us a function that was **5 times faster**!

If that isn’t encouraging enough to continue with more functions and testing, I don’t know what is!

### Function#3: While, Array, Reduce

Now since I always reach for the trusty `for` loop, I figured I would test a `while` loop alternative:

<pre name="a613" id="a613" class="graf graf--pre graf-after--p">function whileLoopArrayReduce(n) {  
  var array = [];  
  while (n >= 1) {  
    n--;  
    if (n%3==0||n%5==0) {  
      array.push(n);  
    }  
  }  
  return array.reduce(function(prev, current) {  
    return prev + current;  
  });  
}</pre>

<pre name="ef92" id="ef92" class="graf graf--pre graf-after--pre">module.exports = whileLoopArrayReduce;</pre>

And the result? A tiny bit slower:

<pre name="6234" id="6234" class="graf graf--pre graf-after--p">whileLoopArrayReduce x 1,504 ops/sec ±0.65% (88 runs sampled)</pre>

### Function#4: While, sum, no arrays

So, finding that the type of loop didn’t make a huge difference, I wondered what would happen if I used a method that avoided arrays altogether:

<pre name="e467" id="e467" class="graf graf--pre graf-after--p">function whileSum(n) {  
  var sum = 0;  
  while (n >= 1) {  
    n--;  
    if (n%3==0||n%5==0) {  
      sum += n;  
    }  
  }  
  return sum;  
}</pre>

<pre name="2dd1" id="2dd1" class="graf graf--pre graf-after--pre">module.exports = whileSum;</pre>

As soon as I started thinking down this track, it made me realize how wrong I was for _always_ reaching for arrays first…

<pre name="49b2" id="49b2" class="graf graf--pre graf-after--p">whileSum x 7,311 ops/sec ±1.26% (91 runs sampled)</pre>

Another massive improvement: nearly **5 times faster** again, and **27 times faster** than my original function!

### **Function#5: For, sum**

Of course, we already know that a for loop should be a little faster:

<pre name="9ed3" id="9ed3" class="graf graf--pre graf-after--p">function forSum(n) {  
  n = n-1;  
  var sum = 0;  
  for (n; n >= 1 ;n--) {  
    (n%3==0||n%5==0) ? sum += n : null;  
  }  
  return sum;  
}</pre>

This uses the ternary operator to do the condition checking, but my testing showed that a non-ternary version of this is the same, performance-wise.

<pre name="9189" id="9189" class="graf graf--pre graf-after--p">forSum x 8,256 ops/sec ±0.24% (91 runs sampled)</pre>

So, a little faster again.

My final function ended up being **28 times faster** than my original.

I felt like a champion.

I was over the moon.

I rested on my laurels.

### Enter Maths





<iframe data-width="435" data-height="244" width="435" height="244" src="https://medium.freecodecamp.org/media/75e0e3c811d3936d80c19c859ed81810?postId=b38fd48f0d55" data-media-id="75e0e3c811d3936d80c19c859ed81810" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FTf4pP3z2EqowM%2Fgiphy.gif&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



Learn to love maths: Source [Giphy](http://gph.is/292GnFR) (Originally, [this music video](https://www.youtube.com/watch?v=vpOau9ZxQNY&t=116s))



The week passed and the final solutions from everyone were posted, tested, and collated. The function that performed the fastest avoided loops altogether and used an algebraic formula to crunch the numbers:

<pre name="da34" id="da34" class="graf graf--pre graf-after--p">function multSilgarth(N) {  
  var threes = Math.floor(--N / 3);  
  var fives = Math.floor(N / 5);  
  var fifteen = Math.floor(N / 15);  

  return (3 * threes * (threes + 1) + 5 * fives * (fives + 1) - 15 * fifteen * (fifteen + 1)) / 2;  
}</pre>

<pre name="6a9e" id="6a9e" class="graf graf--pre graf-after--pre">module.exports = multSilgarth;</pre>

Wait for it…

<pre name="1528" id="1528" class="graf graf--pre graf-after--p">arrayPushAndIncrement x 279 ops/sec ±0.80% (83 runs sampled)  
forSum x 8,256 ops/sec ±0.24% (91 runs sampled)  
maths x 79,998,859 ops/sec ±0.81% (88 runs sampled)  
Fastest is maths</pre>

### Fastest is maths

So the winning function was roughly **9,690 times faster** than my best effort, and **275,858 times faster** than my initial effort.

If you need me, I’ll be over at Khan Academy studying math.











* * *







Thanks to everyone that participated and shared their solutions in the spirit of helping other campers learn new methods.

If you’re curious, here is [P1xt](https://medium.com/@P1xt)’s write up of the competition, and all of the testing and benchmark data:

[**P1xt/algo-oct-17**  
_algo-oct-17 - JavaScript Algorithm Challenge - October 9 through 16_github.com](https://github.com/P1xt/algo-oct-17 "https://github.com/P1xt/algo-oct-17")[](https://github.com/P1xt/algo-oct-17)








