---
author: Flavio H. Freitas
authorTwitter: https://twitter.com/flavio_hf
authorFacebook: https://facebook.com/10212276726016265
title: "ES8: What’s new in the JavaScript language in 2017"
subTitle: "ES8 is live! Released earlier this summer, ES8 (also called ES2017) offers new ways of coding with JavaScript. Let's explore them...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*9yuM4oWXT1Wfo0Cx5jkMwA.png
url: https://medium.freecodecamp.org/es8-the-new-features-of-javascript-7506210a1a22
id: es8-the-new-features-of-javascript-7506210a1a22
date: 2017-07-15T08:54:55.674Z
tags: [
  "JavaScript",
  "Es8",
  "Web Development",
  "Software Development",
  "Programming"
]
---
# ES8: What’s new in the JavaScript language in 2017







![](https://cdn-images-1.medium.com/max/2000/1*9yuM4oWXT1Wfo0Cx5jkMwA.png)

What's new?







ES8 is live! Released earlier this summer, ES8 (also called ES2017) offers new ways of coding with JavaScript. Let's explore them.

If you have the latest version of Chrome, open the console and let's code together.



![](https://cdn-images-1.medium.com/max/1600/1*mItHEHQ-_zeDalK3hWR1jw.png)

How to access the JavaScript console in Chrome: View > Developer > JavaScript Console



### Object.values()

Access all the values of our object without any complication. Here’s an example:

<pre name="02da" id="02da" class="graf graf--pre graf-after--p">const countries = {  
    BR: 'Brazil',  
    DE: 'Germany',  
    RO: 'Romania',  
    US: 'United States of America'  
};</pre>

<pre name="d546" id="d546" class="graf graf--pre graf-after--pre">Object.values(countries); // ['Brazil', 'Germany', 'Romania', 'United States of America']</pre>

### Object.entries

Turn your **object** attribute in an **array** of attributes:

<pre name="be83" id="be83" class="graf graf--pre graf-after--p">const countries = {  
    BR: 'Brazil',  
    DE: 'Germany',  
    RO: 'Romania',  
    US: 'United States of America'  
};</pre>

<pre name="ea6a" id="ea6a" class="graf graf--pre graf-after--pre">Object.entries(countries); </pre>

<pre name="903b" id="903b" class="graf graf--pre graf-after--pre">// [['BR', 'Brazil'], ['DE', 'Germany'], ['RO', 'Romania'], ['US','United States of America']]  

</pre>

### String padding (padStart and padEnd)

This returns the passed string adding the pad and the beginning or in the end of it. The function definition is:

<pre name="ef9a" id="ef9a" class="graf graf--pre graf-after--p">'string'.padStart(targetLength, padString)</pre>

<pre name="9a9b" id="9a9b" class="graf graf--pre graf-after--pre">'string'.padEnd(targetLength, padString)</pre>

We can make:

<pre name="4acf" id="4acf" class="graf graf--pre graf-after--p">'0.10'.padStart(10); // it return a string of length 10, padding empty spaces in the beginning</pre>

<pre name="4af1" id="4af1" class="graf graf--pre graf-after--pre">'hi'.padStart(1);            // 'hi'  
'hi'.padStart(5);            // '   hi'  
'hi'.padStart(5, 'abcd');    // 'abchi'  
'hi'.padStart(10, 'abcd');   // 'abcdabcdhi'</pre>

<pre name="8d8d" id="8d8d" class="graf graf--pre graf-after--pre">'loading'.padEnd(10, '.');   // 'loading...'</pre>

<pre name="4600" id="4600" class="graf graf--pre graf-after--pre">// useful example making things easier to read  
'0.10'.padStart(12);         // '       0.10'  
'23.10'.padStart(12);        // '      23.10'  
'12,330.10'.padStart(12);    // '  12,330.10'</pre>

### Object.getOwnPropertyDescriptors()

It returns all own (non-inherited) property descriptors of an object. The attributes of the return object can be: `value`, `writable`, `get`, `set`, `configurable` and `enumerable`.

<pre name="44b1" id="44b1" class="graf graf--pre graf-after--p">const obj = {  
    name: 'Pablo',  
    get foo() { return 42; }  
};</pre>

<pre name="a626" id="a626" class="graf graf--pre graf-after--pre">Object.getOwnPropertyDescriptors(obj);  
//  
// {  
//  "name": {  
//     "value": "Pablo",  
//     "writable":true,  
//     "enumerable":true,  
//     "configurable":true  
//  },  
//  "foo":{  
//     "enumerable":true,  
//     "configurable":true,  
//     "get": function foo()  
//     "set": undefined  
//  }  
// }</pre>

One practical example is: JavaScript has a method to copy properties `Object.assign()`. It copies the property whose key is `key`. Like this:

    const value = source[key]; // gettarget[key] = value;       // set

And in some cases it fails because it doesn't properly copy the properties with non-default attributes such as getters, setters and non-writable properties.

For example:

<pre name="e835" id="e835" class="graf graf--pre graf-after--p">const objTarget = {};  
const objSource = {  
    set greet(name) { console.log('hey, ' + name); }  
};  
Object.assign(objTarget, objSource);</pre>

<pre name="e16d" id="e16d" class="graf graf--pre graf-after--pre">objTarget.greet = 'love';     // trying to set fails, sets greet = 'love'</pre>

Solving:

<pre name="ba99" id="ba99" class="graf graf--pre graf-after--p">const objTarget = {};  
const objSource = {  
    set greet(name) { console.log('hey, ' + name); }  
};  
Object.defineProperties(objTarget,            
           Object.`getOwnPropertyDescriptors(`objSource`));`</pre>

<pre name="ebc2" id="ebc2" class="graf graf--pre graf-after--pre">objTarget.greet = 'love'; // prints 'hey, love'</pre>

### Trailing commas in function parameter lists and calls

This is a syntax change. It allows us to write a valid function declaration with comma in the end.

<pre name="5be8" id="5be8" class="graf graf--pre graf-after--p">getDescription(name, age,) { ... }</pre>

### Async functions (async and await)

This makes it much easier to work with asynchronous functions:

<pre name="8895" id="8895" class="graf graf--pre graf-after--p">function loadExternalContent() {  
    return new Promise((resolve, reject) => {  
        setTimeout(() => {  
            resolve('hello');  
        }, 3000);  
    });  
}</pre>

<pre name="47a4" id="47a4" class="graf graf--pre graf-after--pre">**async** function getContent() {  
    const text = **await** loadExternalContent();  
    console.log(text);  
}</pre>

<pre name="f80d" id="f80d" class="graf graf--pre graf-after--pre">console.log('it will call function');  
getContent();  
console.log('it called function');</pre>

<pre name="d06d" id="d06d" class="graf graf--pre graf-after--pre">// it prints:</pre>

<pre name="daa6" id="daa6" class="graf graf--pre graf-after--pre">'it will call function' // synchronous  
'it called function'    // synchronous  
'hello'                 // asynchronous (after 3 seconds)</pre>

### Shared memory and atomics

According to the [specification](https://tc39.github.io/ecmascript_sharedmem/shmem.html):

> "Shared memory is being exposed in the form of a new SharedArrayBuffer type; The new global Atomics object provides atomic operations on shared memory locations, including operations that can be used to create blocking synchronization primitives."

This means:

Shared memory: we can allow multiple threads read and write the same data with the new `SharedArrayBuffer` constructor.

Atomics: We can use the `Atomics` object to make sure nothing that is being written or read will be interrupted in the middle of the process. So the operations are finished before a the next one starts.

If you enjoyed this article, be sure to like it give me a lot of claps — it means the world to the writer 😘 And follow me if you want to read more articles about Culture, Technology and Startups.











* * *







**Flávio H. Freitas** is an Entrepreneur, Full Stack Engineer, Tech lover, Dreamer and Traveler. Worked as **CTO** in several startups in **Silicon Valley**, **Europe** and **Brazil**.








