---
author: Darryl Pargeter
authorTwitter: https://twitter.com/darrylpargeter
authorFacebook: https://facebook.com/10154912015883998
title: "How to get the most out of the JavaScript console"
subTitle: "One of the most basic debugging tools in JavaScript is console.log(). The console comes with several other useful methods that can add to..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*mM2AMk0TRENA2zF2RMEebA.jpeg
url: https://medium.freecodecamp.org/how-to-get-the-most-out-of-the-javascript-console-b57ca9db3e6d
id: how-to-get-the-most-out-of-the-javascript-console-b57ca9db3e6d
date: 2017-06-05T16:29:17.998Z
tags: [
  "JavaScript",
  "Tech",
  "Console",
  "Technology",
  "Coding"
]
---
# How to get the most out of the JavaScript console







![](https://cdn-images-1.medium.com/max/2000/1*mM2AMk0TRENA2zF2RMEebA.jpeg)







One of the most basic debugging tools in JavaScript is `console.log()`. The `console` comes with several other useful methods that can add to a developer’s debugging toolkit.

You can use the `console` to perform some of the following tasks:

*   Output a timer to help with simple benchmarking
*   Output a table to display an array or object in an easy-to-read format
*   Apply color and other styling options to the output with CSS

### The Console Object

The `console` object gives you access to the browser’s console. It lets you output strings, arrays, and objects that help debug your code. The `console` is part of the `window` object, and is supplied by the [Browser Object Model (BOM)](https://www.w3schools.com/js/js_window.asp).

We can get access to the `console` in one of two ways:

1.  `window.console.log('This works')`
2.  `console.log('So does this')`

The second option is basically a reference to the former, so we’ll use the latter to save keystrokes.

One quick note about the BOM: it does not have a set standard, so each browser implements it in slightly different ways. I tested all of my examples in both Chrome and Firefox, but your output may appear differently depending on your browser.

### Outputting text



![](https://cdn-images-1.medium.com/max/1600/1*eEnUT7quS8oCeOsoGn1Kxw.png)

Logging text to the console



The most common element of the `console` object is `console.log`. For most scenarios, you’ll use it to get the job done.

There are four different ways of outputting a message to the console:

1.  `log`
2.  `info`
3.  `warn`
4.  `error`

All four work the same way. All you do is pass one or more arguments to the selected method. It then displays a different icon to indicate its logging level. In the examples below, you can see the difference between an info-level log and a warning/error-level log.



![](https://cdn-images-1.medium.com/max/1600/1*AKbeddGNDqLYaJOMQlrrMw.png)

Simple and easy to read output





![](https://cdn-images-1.medium.com/max/1600/1*3yKUiYLyju8f9gE71w1Sxw.png)

With many things going on this can become hard to read



You may have noticed the error log message - it’s more showy than the others. It displays both a red background and a [stack trace](https://en.wikipedia.org/wiki/Stack_trace), where `info` and `warn` do not. Though `warn` does have a yellow background in Chrome.

These visual differences help when you need to identify any errors or warnings in the console at a quick glance. You would want to make sure that they are removed for production-ready apps, unless they are there to warn other developers that they are doing something wrong with your code.

### String Substitutions

This technique uses a placeholder in a string that is replaced by the other argument(s) you pass to the method. For example:

**Input**: `console.log('string %s', 'substitutions')`

**Output**: `string substitutions`

The `%s` is the placeholder for the second argument `'substitutions'` that comes after the comma. Any strings, integers, or arrays will be converted to a string and will replace the `%s`. If you pass an object, it will display `[object Object]`.

If you want to pass an object, you need to use `%o` or `%O` instead of `%s`.

`console.log('this is an object %o', { obj: { obj2: 'hello' }})`



![](https://cdn-images-1.medium.com/max/1600/1*WhqTGnch8S2kAIQYxXOLhw.png)



#### Numbers

String substitution can be used with integers and floating-point values by using:

*   `%i` or `%d` for integers,
*   `%f` for floating-points.

**Input**: `console.log('int: %d, floating-point: %f', 1, 1.5)`

**Output**: `int: 1, floating-point: 1.500000`

Floats can be formatted to display only one digit after the decimal point by using `%.1f`. You can do `%.nf` to display n amount of digits after the decimal.

If we formatted the above example to display one digit after the decimal point for the floating-point number, it would look like this:

**Input**: `console.log('int: %d, floating-point: %.1f', 1, 1.5)`

**Output**:`int: 1, floating-point: 1.5`

#### Formatting specifiers

1.  `%s` | replaces an element with a string
2.  `%(d|i)`| replaces an element with an integer
3.  `%f` | replaces an element with a float
4.  `%(o|O)` | element is displayed as an object.
5.  `%c` | Applies the provided CSS

#### String Templates

With the advent of ES6, template literals are an alternative to substitutions or concatenation. They use backticks (``) instead of quotation marks, and variables go inside `${}`:

<pre name="9143" id="9143" class="graf graf--pre graf-after--p">const a = 'substitutions';</pre>

<pre name="60e6" id="60e6" class="graf graf--pre graf-after--pre">console.log(`bear: ${a}`);</pre>

<pre name="8ecc" id="8ecc" class="graf graf--pre graf-after--pre">// bear: substitutions</pre>

Objects display as `[object Object]` in template literals, so you’ll need to use substitution with `%o` or `%O` to see the details, or log it separately by itself.

Using substitutions or templates creates code that’s easier to read compared to using string concatenation: `console.log('hello' + str + '!');`.

#### Pretty color interlude!

Now it is time for something a bit more fun and colorful!

It is time to make our `console` pop with different colors with string substitutions.

I will be using a mocked Ajax example that give us both a success (in green) and failure (in red) to display. Here’s the output and code:



![](https://cdn-images-1.medium.com/max/1600/1*BRAhnRn9GpZgrUf_SQfi3A.png)

Successful bears and failing bats



<pre name="abb6" id="abb6" class="graf graf--pre graf-after--figure">const success = [  
 'background: green',  
 'color: white',  
 'display: block',  
 'text-align: center'  
].join(';');</pre>

<pre name="6621" id="6621" class="graf graf--pre graf-after--pre">const failure = [  
 'background: red',  
 'color: white',  
 'display: block',  
 'text-align: center'  
].join(';');</pre>

<pre name="aaba" id="aaba" class="graf graf--pre graf-after--pre">console.info('%c /dancing/bears was Successful!', success);  
console.log({data: {  
 name: 'Bob',  
 age: 'unknown'  
}}); // "mocked" data response</pre>

<pre name="36de" id="36de" class="graf graf--pre graf-after--pre">console.error('%c /dancing/bats failed!', failure);  
console.log('/dancing/bats Does not exist');</pre>

You apply CSS rules in the string substitution with the `%c` placeholder.

<pre name="6484" id="6484" class="graf graf--pre graf-after--p">console.error('%c /dancing/bats failed!', failure);</pre>

Then place your CSS elements as a string argument and you can have CSS-styled logs. You can add more than one `%c` into the string as well.

<pre name="415f" id="415f" class="graf graf--pre graf-after--p">console.log('%cred %cblue %cwhite','color:red;','color:blue;', 'color: white;')</pre>

This will output the words ‘red’, ‘blue’ and ‘white’ in their respected colors.

There are quite a few CSS properties supported by the console. I would recommend experimenting to see what works and what doesn’t. Again, your results may vary depending on your browser.

### Other available methods

Here are a few other available `console` methods. Note that some items below have not had their APIs standardized, so there may be incompatibilities between the browsers. The examples were created with Firefox 51.0.1.

#### Assert()

`Assert` takes two arguments — if the first argument evaluates to a falsy value, then it displays the second argument.

<pre name="86a7" id="86a7" class="graf graf--pre graf-after--p">let isTrue = false;</pre>

<pre name="a19a" id="a19a" class="graf graf--pre graf-after--pre">console.assert(isTrue, 'This will display');</pre>

<pre name="62f8" id="62f8" class="graf graf--pre graf-after--pre">isTrue = true;</pre>

<pre name="a669" id="a669" class="graf graf--pre graf-after--pre">console.assert(isTrue, 'This will not');</pre>

If the assertion is false, it outputs to the console. It’s displayed as an error-level log as mentioned above, giving you both a red error message and a stack trace.

#### Dir()

The `dir` method displays an interactive list of the object passed to it.

<pre name="96d0" id="96d0" class="graf graf--pre graf-after--p">console.dir(document.body);</pre>



![](https://cdn-images-1.medium.com/max/1600/1*4Zj5EuPTHcQH5-K0NWHb7g.png)

Chrome displays dir differently



Ultimately, `dir` only saves one or two clicks. If you need to inspect an object from an API response, then displaying it in this structured way can save you some time.

#### Table()

The `table` method displays an array or object as a table.

<pre name="ee70" id="ee70" class="graf graf--pre graf-after--p">console.table(['Javascript', 'PHP', 'Perl', 'C++']);</pre>



![](https://cdn-images-1.medium.com/max/1600/1*nza7ZWxYG-_X47VJ54FtZg.png)

Output for an array



The array’s indices or object property names come under the left-hand index column. Then the values are displayed in the right-hand column.

<pre name="034c" id="034c" class="graf graf--pre graf-after--p">const superhero = {   
    firstname: 'Peter',  
    lastname: 'Parker',  
}  
console.table(superhero);</pre>



![](https://cdn-images-1.medium.com/max/1600/1*BXhY3PzulYFzzcW-Qwga8Q.png)

Output for an object



**Note for Chrome users:** This was brought to my attention by a co-worker but the above examples of the `table` method don’t seem to work in Chrome. You can work around this issue by placing any items into an array of arrays or an array of objects:

<pre name="a277" id="a277" class="graf graf--pre graf-after--p">console.table([['Javascript', 'PHP', 'Perl', 'C++']]);</pre>

<pre name="548a" id="548a" class="graf graf--pre graf-after--pre">const superhero = {   
    firstname: 'Peter',  
    lastname: 'Parker',  
}  
console.table([superhero]); </pre>

#### Group()

`console.group()` is made up of at least a minimum of three `console` calls, and is probably the method that requires the most typing to use. But it’s also one of the most useful (especially for developers using [Redux Logger](https://github.com/evgenyrodionov/redux-logger)).

A somewhat basic call looks like this:

<pre name="ada3" id="ada3" class="graf graf--pre graf-after--p">console.group();  
console.log('I will output');  
console.group();  
console.log('more indents')  
console.groupEnd();  
console.log('ohh look a bear');  
console.groupEnd();</pre>

This will output multiple levels and will display differently depending on your browser.

Firefox shows an indented list:



![](https://cdn-images-1.medium.com/max/1600/1*xFU0AtDqgwLJVUwE4Yo9_w.png)



Chrome shows them in the style of an object:



![](https://cdn-images-1.medium.com/max/1600/1*9hJkBrf4uEXaC1PYe8bomQ.png)



Each call to `console.group()` will start a new group, or create a new level if it’s called inside a group. Each time you call `console.groupEnd()` it will end the current group or level and move back up one level.

I find the Chrome output style is easier to read since it looks more like a collapsible object.

You can pass `group` a header argument that will be displayed over `console.group`:

<pre name="5975" id="5975" class="graf graf--pre graf-after--p">console.group('Header');</pre>

You can display the group as collapsed from the outset if you call `console.groupCollapsed()`. Based on my experience, this seems to work only in Chrome.

#### Time()

The `time` method, like the `group` method above, comes in two parts.

A method to start the timer and a method to end it.

Once the timer has finished, it will output the total runtime in milliseconds.

To start the timer, you use `console.time('id for timer')` and to end the timer you use `console.timeEnd('id for timer')` . You can have up to 10,000 timers running simultaneously.

The output will look a bit like this `timer: 0.57ms`

It is very useful when you need to do a quick bit of benchmarking.

### Conclusion

There we have it, a bit of a deeper look into the console object and some of the other methods that come with it. These methods are great tools to have available when you need to debug code.

There are a couple of methods that I have not talked about as their API is still changing. You can read more about them or the console in general on the [MDN Web API page](https://developer.mozilla.org/en/docs/Web/API/console) and its [living spec page](https://console.spec.whatwg.org/).



![](https://cdn-images-1.medium.com/max/1600/1*0SNCJfem2WVKSJIDzConxg.png)

[https://developer.mozilla.org/en/docs/Web/API/console](https://developer.mozilla.org/en/docs/Web/API/console)










