---
author: Tiffany White
authorTwitter: https://twitter.com/TiffanyW_412
authorFacebook: none
title: "Putting Scope in Perspective"
subTitle: "In JavaScript, lexical scope deals with where your variables are defined, and how they will be accessible — or not accessible — to the re..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*bagtQodHCv1PGtuEX5fMNA.jpeg
url: https://medium.freecodecamp.org/putting-scope-in-perspective-c9a16974c3be
id: putting-scope-in-perspective-c9a16974c3be
date: 2015-11-04T08:31:56.301Z
tags: [
  "JavaScript",
  "Programming",
  "Women In Tech",
  "Learning",
  "Self Improvement"
]
---
# Putting Scope in Perspective

In JavaScript, _lexical scope_ deals with where your variables are defined, and how they will be accessible — or not accessible — to the rest of your code.

There are two terms to think about when talking about scope: local and global. These two terms are important to understand, because one can be more dangerous than the other when declaring variables and executing your code.







![](https://cdn-images-1.medium.com/max/2000/1*_9SDjff_XSe6Kl_LSJrsKg.jpeg)







#### Global Scope

A variable is globally scoped if you declare it outside of all of your functions. For example:

<pre name="2394" id="2394" class="graf graf--pre graf-after--p">//global variable, i.e. global scope  
var a = "foo";</pre>

<pre name="0522" id="0522" class="graf graf--pre graf-after--pre">function myFunction() {  
  var b = "bar";  
  console.log(a+b);  
}</pre>

<pre name="e953" id="e953" class="graf graf--pre graf-after--pre">myFunction();</pre>

When a variable is in the global scope, it can be accessed by all the code in the same JavaScript file. In this example, I’m accessing the variable _a_ in my console.log statement, inside the _myFunction_ function.







![](https://cdn-images-1.medium.com/max/2000/1*QmksMiei1KJbztSbeb6cCA.jpeg)







#### Local Scope

Local variables only exist inside functions. They are scoped to that individual function.

You can think of local variables as as any variables that fall between an opening and closing curly brace.

These local variables can’t be accessed by code outside of the function to which they belong.

Take a look at this code:

<pre name="6dbf" id="6dbf" class="graf graf--pre graf-after--p">//global variable, i.e. global scope  
var a = "foo";</pre>

<pre name="eee1" id="eee1" class="graf graf--pre graf-after--pre">function myFunction() {  
  //local variable, or local scope  
  var b = "bar";  
  console.log(a+b);  
}</pre>

<pre name="902d" id="902d" class="graf graf--pre graf-after--pre">function yourFunction() {  
  var c = "JavaScript is fun!";  
  return c;  
  console.log(c);  
}</pre>

<pre name="35ea" id="35ea" class="graf graf--pre graf-after--pre">myFunction();  
yourFunction();</pre>

Notice how the variables are each declared inside separate functions. They are both local variables, in local scope, and can’t be accessed by one other.

For instance, I can’t return _b_ in _yourFunction,_ because _b_ belongs to _myFunction._ _b_ can’t be accessed by _yourFunction,_ and vice versa.

If I were to try to return the value of _b_ when calling _yourFunction_, I’d get “_error: b is not defined._” Why? Because _b_ doesn’t belong to _yourFunction. b_ is outside of _yourFunction_’s scope.

When adding nested conditionals, scope gets even more hairy. But I’ll leave that for another time.

But for now, remember the difference between global scope and local scope. And the next time you get a “_is not defined_” error, check the variable’s scope.











* * *







_This post also appears at_ [_https://twhite96.github.io_](https://twhite96.github.io)








