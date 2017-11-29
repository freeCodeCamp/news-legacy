---
author: Sonya Moisset
authorTwitter: https://twitter.com/SonyaMoisset
authorFacebook: https://facebook.com/10156763599105494
title: "Three ways you can find the largest number in an array using JavaScript"
subTitle: "In this article, I’m going to explain how to solve Free Code Camp’s “Return Largest Numbers in Arrays” challenge. This involves returning..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*LSH8HhFM40_2KWWOzhqPhg.jpeg
url: https://medium.freecodecamp.org/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1
id: three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1
date: 2016-10-17T18:00:48.520Z
tags: [
  "JavaScript",
  "Programming",
  "Learning",
  "Algorithms",
  "Technology"
]
---
# Three ways you can find the largest number in an array using JavaScript







![](https://cdn-images-1.medium.com/max/2000/1*LSH8HhFM40_2KWWOzhqPhg.jpeg)







In this article, I’m going to explain how to solve Free Code Camp’s “[Return Largest Numbers in Arrays](https://www.freecodecamp.com/challenges/return-largest-numbers-in-arrays)_”_ challenge. This involves returning an array with the largest numbers from each of the sub arrays.

There are the three approaches I’ll cover:

1.  with a FOR loop
2.  using the reduce() method
3.  using Math.max()

#### The Algorithm Challenge Description

> Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

> Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a67c031e154ef023833e9d89c3684e92?postId=5d977baa80a1" data-media-id="a67c031e154ef023833e9d89c3684e92" allowfullscreen="" frameborder="0"></iframe>





#### Provided test cases

<pre name="c61c" id="c61c" class="graf graf--pre graf-after--h4">_largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])_ should return an array.</pre>

<pre name="e47c" id="e47c" class="graf graf--pre graf-after--pre">_largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])_ should return [27,5,39,1001].</pre>

<pre name="ed34" id="ed34" class="graf graf--pre graf-after--pre">_largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])_ should return [9, 35, 97, 1000000].</pre>

### **Approach #1: Return the Largest Numbers in a Array With a For Loop**

Here’s my solution, with embedded comments to help you understand it:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2b2dd1e7c996a53d7c0e29e8bef62af4?postId=5d977baa80a1" data-media-id="2b2dd1e7c996a53d7c0e29e8bef62af4" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F13507232%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





And here it is without my comments:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b2bf96e01d604d737dcb9b2682e7f207?postId=5d977baa80a1" data-media-id="b2bf96e01d604d737dcb9b2682e7f207" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F13507232%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>















* * *







### Approach #2: Return the Largest Numbers in a Array With Built-In Functions — with map() and reduce()

For this solution, you’ll use two methods: the Array.prototype.map() method and the Array.prototype.reduce() method.

*   The **map()** method creates a new array with the results of calling a provided function on every element in this array. Using map will call a provided callback function once for each element in an array, in order, and constructs a new array from the results.
*   The **reduce()** method applies a function against an accumulator and each value of the array to reduce it to a single value.

The **ternary operator** is the only JavaScript operator that takes three operands. This operator is used as a shortcut for the if statement.

<pre name="74a5" id="74a5" class="graf graf--pre graf-after--p">(currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber;</pre>

This can also be read as:

<pre name="9d03" id="9d03" class="graf graf--pre graf-after--p">if (currentLargestNumber > previousLargestNumber == true) {  
    return currentLargestNumber;  
} else {  
    return previousLargestNumber;  
}</pre>

Here’s my solution, with embedded comments:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a803b3e7840f490e26df873c29df29c0?postId=5d977baa80a1" data-media-id="a803b3e7840f490e26df873c29df29c0" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F13507232%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





And here it is without comments:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a4433c01190a5e8a3a6c26f6891c3db9?postId=5d977baa80a1" data-media-id="a4433c01190a5e8a3a6c26f6891c3db9" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F13507232%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>















* * *







### Approach #3: Return the Largest Numbers in a Array With Built-In Functions — with map() and apply()

For this solution, you’ll use two methods: the Array.prototype.map() method and the Function.prototype.apply() method.

*   The **apply()** method calls a function with a given this value and arguments provided as an array (or an array-like object).

You can pass an array of arguments to a function by using the **apply()** method and the function will execute the items in the array.

Such functions are known as **variadic functions**, and they can accept any number of arguments instead of a fixed one.

The **Math.max()** function returns the largest of zero or more numbers, and we can pass any number of arguments.

<pre name="8e0e" id="8e0e" class="graf graf--pre graf-after--p">console.log(Math.max(4,5,1,3)); // logs 5</pre>

But you can’t pass an array of numbers to the method like this​:

<pre name="a7eb" id="a7eb" class="graf graf--pre graf-after--p">var num = [4,5,1,3];  
console.log(Math.max(num)); // logs NaN</pre>

This is where the **apply()** method turns out to be useful:

<pre name="044d" id="044d" class="graf graf--pre graf-after--p">var num = [4,5,1,3];  
console.log(Math.max.apply(null, num)); // logs 5</pre>

Note that the first argument to **apply()** sets the value of ‘**this**’, not used in this method, so you pass **null**.

Now that you have a method to return the largest number in a array, you can loop through each sub-arrays with the **map()** method and return all largest numbers.

Here’s my solution, with embedded comments:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/e14534ed240b4ed30f693b5a78353bbf?postId=5d977baa80a1" data-media-id="e14534ed240b4ed30f693b5a78353bbf" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F13507232%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





And without comments:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/737f51aee5690dbb3c052f90415421a5?postId=5d977baa80a1" data-media-id="737f51aee5690dbb3c052f90415421a5" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F13507232%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>















* * *







I hope you found this helpful. This is part of my “How to Solve FCC Algorithms” series of articles on the Free Code Camp Algorithm Challenges, where I propose several solutions and explain step-by-step what happens under the hood.

[**Three ways to repeat a string in JavaScript**  
_In this article, I’ll explain how to solve freeCodeCamp’s “Repeat a string repeat a string” challenge. This involves…_medium.freecodecamp.com](https://medium.freecodecamp.com/three-ways-to-repeat-a-string-in-javascript-2a9053b93a2d "https://medium.freecodecamp.com/three-ways-to-repeat-a-string-in-javascript-2a9053b93a2d")[](https://medium.freecodecamp.com/three-ways-to-repeat-a-string-in-javascript-2a9053b93a2d)

[**Two ways to confirm the ending of a String in JavaScript**  
_In this article, I’ll explain how to solve freeCodeCamp’s “Confirm the Ending” challenge._medium.freecodecamp.com](https://medium.freecodecamp.com/two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac "https://medium.freecodecamp.com/two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac")[](https://medium.freecodecamp.com/two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac)

[**Three Ways to Reverse a String in JavaScript**  
_This article is based on Free Code Camp Basic Algorithm Scripting “Reverse a String”_medium.freecodecamp.com](https://medium.freecodecamp.com/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb "https://medium.freecodecamp.com/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb")[](https://medium.freecodecamp.com/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb)

[**Three Ways to Factorialize a Number in JavaScript**  
_This article is based on Free Code Camp Basic Algorithm Scripting “Factorialize a Number”_medium.freecodecamp.com](https://medium.freecodecamp.com/how-to-factorialize-a-number-in-javascript-9263c89a4b38 "https://medium.freecodecamp.com/how-to-factorialize-a-number-in-javascript-9263c89a4b38")[](https://medium.freecodecamp.com/how-to-factorialize-a-number-in-javascript-9263c89a4b38)

[**Two Ways to Check for Palindromes in JavaScript**  
_This article is based on Free Code Camp Basic Algorithm Scripting “Check for Palindromes”._medium.freecodecamp.com](https://medium.freecodecamp.com/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7 "https://medium.freecodecamp.com/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7")[](https://medium.freecodecamp.com/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7)

[**Three Ways to Find the Longest Word in a String in JavaScript**  
_This article is based on Free Code Camp Basic Algorithm Scripting “Find the Longest Word in a String”._medium.freecodecamp.com](https://medium.freecodecamp.com/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c "https://medium.freecodecamp.com/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c")[](https://medium.freecodecamp.com/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c)

[**Three Ways to Title Case a Sentence in JavaScript**  
_This article is based on Free Code Camp Basic Algorithm Scripting “Title Case a Sentence”._medium.freecodecamp.com](https://medium.freecodecamp.com/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27 "https://medium.freecodecamp.com/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27")[](https://medium.freecodecamp.com/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27)

If you have your own solution or any suggestions, share them below in the comments.

Or you can follow me on [**Medium**](https://medium.com/@sonya.moisset)**,** [**Twitter**](https://twitter.com/SonyaMoisset)**,** [**Github**](https://github.com/SonyaMoisset) and [**LinkedIn**](https://www.linkedin.com/in/sonyamoisset), right after you click the green heart below ;-)

‪#‎StayCurious‬, ‪#‎KeepOnHacking‬ & ‪#‎MakeItHappen‬!











* * *







### Additional Resources

*   [for — MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for)
*   [array.length — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
*   [map() method — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
*   [reduce() method — MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
*   [Ternary Operator — MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
*   [apply() method — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
*   [Math.max() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
*   [this — MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this)








