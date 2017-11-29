---
author: Mateusz Sokola
authorTwitter: none
authorFacebook: none
title: "How to make your life easier using functional programming in TypeScript"
subTitle: "Over the last two years, the JavaScript community has been talking about functional programming. Functional programming allows us to buil..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*HMvoDO2f0kCl49CLCdzMEQ.jpeg
url: https://medium.freecodecamp.org/how-to-make-your-life-easier-using-functional-programming-in-typescript-a2def76c468b
id: how-to-make-your-life-easier-using-functional-programming-in-typescript-a2def76c468b
date: 2017-11-22T11:21:02.471Z
tags: [
	"JavaScript",
	"Software Development",
	"Tech",
	"Web Development",
	"Programming"
]
---
# How to make your life easier using functional programming in TypeScript

Over the last two years, the JavaScript community has been talking about functional programming. Functional programming allows us to build better software without designing complex class trees. Today, I will explain how to use function composition in [Typescript](https://www.typescriptlang.org/) and [Lodash](https://lodash.com/).

The code can be [found on Github](https://github.com/mateuszsokola/function-composition-typescript).







![](https://cdn-images-1.medium.com/max/1600/1*HMvoDO2f0kCl49CLCdzMEQ.jpeg)








#### What is function composition?

Function composition involves combining two or more functions to create a more complex one. Feeling confused? No worries, the following example will make it clear:

<pre name="3213" id="3213" class="graf graf--pre graf-after--p">const f = function (a) { return a + 1 };  
const g = function (b) { return b * b };</pre>

<pre name="1248" id="1248" class="graf graf--pre graf-after--pre">const x = 2;  
const result = f(g(x)); // => 5</pre>

I combined two functions here — function _f_ and function _g._ Function f adds 1 to the _a_ parameter, and function _g_ multiplies the _b_ parameter by _b_. The result is 5.

Let’s reverse-engineer it:

1.  constant _x_ equals 2
2.  constant _x_ becomes an argument of function _g_
3.  function _g_ returns 4
4.  function _g_ output (4)becomes an argument of function _f_
5.  function _f_ returns 5

It’s not rocket science, but it doesn’t look particularly useful. Actually, it looks even more complex than keeping it within one function. That may be true, but let’s consider some realistic use cases.

### The real-world example: money formatting

I was building a simple job posting for developers. One of the requirements was to display salary ranges next to every offer. All salaries were stored as cents and needed to look like this:

<pre name="e540" id="e540" class="graf graf--pre graf-after--p">from: 6000000   
to:   60,000.00 USD</pre>

It looks easy, but working with text is hard. Almost every developer hates it.

We all spend hours writing regular expressions and dealing with unicode. When I need to format text, I am always trying to Google the solution. After cutting off all libraries (way too much for my needs) and all the code snippets that suck, there’s not so much left.

I decided I needed to build it on my own formatter.

#### **How do we build it?**

Before we start to write code, let’s dig into an idea I found:

1.  Split dollars and cents.
2.  Format dollars — adding thousand separators is not so easy.
3.  Format cents — dealing with cents is easy, almost out-of-the-box.
4.  Connect together dollars and cents with the separator.

Now it looks clear. The last thing we need to consider is how to add thousand separators to the dollars. Let’s consider the following algorithm:

1.  Reverse string.
2.  Split string every 3 characters to array.
3.  Join all array elements together, by adding the thousand separator between them.
4.  Reverse string.

All these steps can be translated into the following pseudo code:

<pre name="7517" id="7517" class="graf graf--pre graf-after--p">1\. "60000"        => "00006"  
2\. "00006"        => ["000", "06"]  
3\. ["000", "06"]  => "000.06"  
4\. "000.06"       => "60.000"</pre>

And this is how this algorithm is translated into composed functions:





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F215923%3Fs%3D400%26v%3D4&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/10022694f055c47521f8e3048fb4e040?postId=a2def76c468b" data-media-id="10022694f055c47521f8e3048fb4e040" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F215923%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>






Thousand Separator Factory



In the first line, you’ll notice that I used the [Lodash](https://lodash.com/docs/) library. Lodash contains lots of utilities that make functional programming easier. Let’s analyze the code from line 22:

<pre name="0fa9" id="0fa9" class="graf graf--pre graf-after--p">return flow([  
  reverse,  
  splitCurry(match),  
  joinCurry(separator),  
  reverse  
]);</pre>

The [flow](https://lodash.com/docs/4.17.4#flow) function is a function composer. It pipelines the result of the _reverse_ function to the input of _splitCurry_, and so on. This creates an entirely new function. Remember the thousand separation algorithm from above? That’s it!

You can see that I postfixed split and join functions with “Curry” and invoked them. This technique is called currying.

#### What is Currying?

[Currying](https://lodash.com/docs/4.17.4#curry) is the process of translating a many argument function into a single argument function. The single argument function returns another function if any arguments are still needed.

Sounds tough? Consider the following example:





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F215923%3Fs%3D400%26v%3D4&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/7337a5395c411bb1632045eb4b40887d?postId=a2def76c468b" data-media-id="7337a5395c411bb1632045eb4b40887d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F215923%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








The _split_ function needs two arguments — a string and separation pattern. The function needs to know how to split the text. In this case, we can’t compose this function as it needs different arguments than the others. Here’s where currying comes in.

<pre name="9761" id="9761" class="graf graf--pre graf-after--p">import { curry } from "lodash";  
import split from "./split";</pre>

<pre name="9be2" id="9be2" class="graf graf--pre graf-after--pre">const splitCurry = curry(split);</pre>

<pre name="2f47" id="2f47" class="graf graf--pre graf-after--pre">splitCurry("000001")(/[0-9]{1,3}/g); // => ["000", "001"]</pre>

Now the _splitCurry_ function is consistent with the _reverse_ function. Both of them need one argument. Unfortunately, we didn’t invoke the _splitCurry_ function with a separation pattern yet. It’s not gonna work this way.

What if we reverse the argument order in our curry?

<pre name="9083" id="9083" class="graf graf--pre graf-after--p">import { curryRight } from "lodash";  
import split from "./split";</pre>

<pre name="4fa5" id="4fa5" class="graf graf--pre graf-after--pre">const splitCurry = curry(split);</pre>

<pre name="1559" id="1559" class="graf graf--pre graf-after--pre">splitCurry(/[0-9]{1,3}/g)("000001"); // => ["000", "001"]</pre>

Now our code may work as we can use curries as factory functions. Let’s see the code again:

<pre name="0170" id="0170" class="graf graf--pre graf-after--p">return flow([  
  reverse,  
  splitCurry(match),  
  joinCurry(separator),  
  reverse  
]);</pre>

All these functions take a single argument (string), so we can compose them together. And then use them as a standalone function. Wait a minute…

#### What are factory functions?

Factory functions are functions that create a new object. In our case, a function. Let’s consider our thousand separator again. In theory, we can use the same function all the time. Unfortunately, some countries separate thousands with commas, others with dots. Of course I could parametrize the separator, but I decided to use the factory function.

<pre name="c9ae" id="c9ae" class="graf graf--pre graf-after--p">const formatUS = thousandSeparator(',');  
const formatEU = thousandSeparator('.');</pre>

<pre name="83d7" id="83d7" class="graf graf--pre graf-after--pre">formatUS(10000); // 10,000  
formatEU(10000); // 10.000</pre>

### Summary

Last year I spent time refreshing my knowledge from previous studies so I could apply it in my daily business. In this article, I didn’t dig into monad law or monoids — I didn’t want to make it confusing. The subject is broad and deeply rooted in computer science. I wanted to give you an idea about how to approach functional thinking while describing all terms as briefly as possible.

I decided to keep [**all the code on my Github**](https://github.com/mateuszsokola/function-composition-typescript), so the article is easier to read.

**If you have any problems or suggestions, please write a comment.**

—

PS. I started [**a YouTube channel on programming**](https://www.youtube.com/user/sookol18). Please check it out and subscribe:)








