---
author: Sanket Meghani
authorTwitter: none
authorFacebook: none
title: "ES6 Generators"
subTitle: "Generators are one of the key features introduced in ES6. Contrary to normal functions which can only be entered at the beginning of the ..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*tBXQMulrsKL21K66SVQ5jA.png
url: https://medium.freecodecamp.org/es6-generators-47a9c5290569
id: es6-generators-47a9c5290569
date: 2016-11-27T13:01:22.435Z
tags: [
  "JavaScript",
  "ES6",
  "Web Development",
  "Programming",
  "Software Development"
]
---
# ES6 Generators

Generators are one of the key features introduced in ES6\. Contrary to normal functions which can only be entered at the beginning of the function, Generators are functions which can be exited and re-entered later with their context (variable bindings) saved across re-entrances. In other words, Generator function could return a value midway and resume it’s execution from midway later on.

A generator can be defined using a function keyword followed by an asterisk.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/0d6745352610b119972b7aafd60c9a55?postId=47a9c5290569" data-media-id="0d6745352610b119972b7aafd60c9a55" allowfullscreen="" frameborder="0"></iframe>





The difference between calling a normal function and an iterator function is that calling a generator function does not execute the generator function immediately. It returns an iterator object for the generator instead. To execute the generator body we need to call next() method on the returned iterator.

<pre name="9a26" id="9a26" class="graf graf--pre graf-after--p">let generator = myFirstGenerator(5);  
let output = generator.next();</pre>

When the iterator’s next() method is called, the generator function's body is executed until the first yield expression. Yield expression specifies the value to be returned. In the example above, calling generator.next() would execute the first console.log() statement and return output of (a + 5). The next() method returns an object in following structure.

<pre name="2daa" id="2daa" class="graf graf--pre graf-after--p">{  
    value: 10, //Return value of yield expression. I.e 5 + 5  
    done: false //Weather generator has yielded it's last value  
}</pre>

We can print the returned yielded value using value property of the returned object.

<pre name="ae92" id="ae92" class="graf graf--pre graf-after--p">let generator = myFirstGenerator(5);  
let output = generator.next(); //output = {value: 10, done: false}</pre>

<pre name="fe55" id="fe55" class="graf graf--pre graf-after--pre">console.log('Output is: ', output.value); //Output is: 10</pre>

Calling next() again on the iterator would continue execution of generator from last yield expression until next yield expression or a return statement is encountered.

<pre name="d2da" id="d2da" class="graf graf--pre graf-after--p">output = generator.next(10); //output = {value: 15, done: true}</pre>

In our example, calling generator.next(10) would resume generator execution from line 4 with last yield expression value being 10 (i.e value passed to next()). Hence line 4 would be evaluated as b = 5 + 10 resulting into b = 15\. On line 7 it returns the value of b and since this is the last return statement (i.e: no more yields left), done is set to true.

Calling the next() method with an argument will resume the generator function execution, replacing the yield statement where execution was paused with the argument from next().

<pre name="4564" id="4564" class="graf graf--pre graf-after--p">output = generator.next(15); //output = {value: 20, done: true}</pre>

Calling generator.next(15) would resume generator execution from line 4 with last yield expression value replaced by 15\. Hence line 4 would be evaluated as b = 5 + 15 resulting into b = 20.

We can use yield* to delegate to another generator function.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d76c585d9f65ec3ff469dfa5bf034781?postId=47a9c5290569" data-media-id="d76c585d9f65ec3ff469dfa5bf034781" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F7963375%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





### **Postface**

It is quite intriguing to know how this new feature could be used in practice. [Redux-saga](http://yelouafi.github.io/redux-saga/) uses generator functions to make it easy to write asynchronous flows. We’ve just scratched the surface and there’s a lot more to them. I would love to hear your comments, suggestions or questions around ES6 generators and it’s use cases :).








