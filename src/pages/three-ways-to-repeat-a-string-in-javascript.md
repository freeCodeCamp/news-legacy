---
author: Sonya Moisset
authorTwitter: https://twitter.com/SonyaMoisset
authorFacebook: https://facebook.com/10156763599105494
title: "Three ways to repeat a string in JavaScript"
subTitle: "In this article, I’ll explain how to solve freeCodeCamp’s “Repeat a string repeat a string” challenge. This involves repeating a string a..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*5xZaBnyrMAe9JkgajD3NbA.jpeg
url: https://medium.freecodecamp.org/three-ways-to-repeat-a-string-in-javascript-2a9053b93a2d
id: three-ways-to-repeat-a-string-in-javascript-2a9053b93a2d
date: 2017-02-13T19:45:18.656Z
tags: [
  "JavaScript",
  "Programming",
  "Web Development",
  "Technology",
  "Algorithms"
]
---
# Three ways to repeat a string in JavaScript







![](https://cdn-images-1.medium.com/max/2000/1*5xZaBnyrMAe9JkgajD3NbA.jpeg)







In this article, I’ll explain how to solve freeCodeCamp’s “[Repeat a string repeat a string](https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string)_”_ challenge. This involves repeating a string a certain number of times.

There are the three approaches I’ll cover:

1.  using a while loop
2.  using recursion
3.  using ES6 repeat() method

### The Algorithm Challenge Description

> _Repeat a given string (first argument)_ `_num_` _times (second argument). Return an empty string if_ `_num_` _is not a positive number._





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/1eef593f158d8d958c3f1f74df713490?postId=2a9053b93a2d" data-media-id="1eef593f158d8d958c3f1f74df713490" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F13507232%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





### Provided test cases

    repeatStringNumTimes("*", 3)

    repeatStringNumTimes("abc", 3)

    repeatStringNumTimes("abc", 4)

    repeatStringNumTimes("abc", 1)

    repeatStringNumTimes("*", 8)

    repeatStringNumTimes("abc", -2)











* * *







### Approach #1: Repeat a String with a While Loop

A while statement executes its statement as long as a specified condition evaluates to true.

A while statement looks like this:

<pre name="3704" id="3704" class="graf graf--pre graf-after--p">while (_condition_)  
  _statement_</pre>

with a condition which is evaluated before each pass through the loop. If the condition is true, the statement is executed. If the condition is false, the execution continues with any statement after the while loop.

The statement is executed as long as the condition is true. Here’s the solution:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/13ee11a63e05732b695c35a5eb352e35?postId=2a9053b93a2d" data-media-id="13ee11a63e05732b695c35a5eb352e35" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F13507232%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





And again, without comments:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/55ae02568c70035d3c905ccfe3f0e2f5?postId=2a9053b93a2d" data-media-id="55ae02568c70035d3c905ccfe3f0e2f5" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F13507232%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>















* * *







### Approach #2: Repeat a String using a Conditional and Recursion

Recursion is a technique for iterating over an operation by having a function call itself repeatedly until it arrives at a result. There are a few key features of recursion that must be included in order for it to work properly.

*   The first is a **_base case_**: this is a statement, usually within a conditional clause like `if`, that stops the recursion.
*   The second is a **_recursive case_**: this is the statement where the recursive function is called on itself.

Here’s the solution:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a40c1ce1cdbfaff2905338bf17e027e1?postId=2a9053b93a2d" data-media-id="a40c1ce1cdbfaff2905338bf17e027e1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F13507232%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





And again, without comments:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/0b02a88f1a5e90045e5d05148e621837?postId=2a9053b93a2d" data-media-id="0b02a88f1a5e90045e5d05148e621837" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F13507232%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>















* * *







### Approach #3: Repeat a String using ES6 repeat() method

For this solution, you’ll use the String.prototype.repeat() method:

*   The `**repeat()**` method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

Here’s the solution:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/8a7440cab480d0d46874a218701ee4a0?postId=2a9053b93a2d" data-media-id="8a7440cab480d0d46874a218701ee4a0" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F13507232%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





And again, without comments:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/577c9098b8ea4ad56d00f10ddffe3147?postId=2a9053b93a2d" data-media-id="577c9098b8ea4ad56d00f10ddffe3147" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F13507232%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





You can use a **ternary operator** as a shortcut for the if/else statement, like this:

<pre name="74a5" id="74a5" class="graf graf--pre graf-after--p">times > 0 ? string.repeat(times) : "";</pre>

This can be read as:

<pre name="9d03" id="9d03" class="graf graf--pre graf-after--p">if (times > 0) {      
    return string.repeat(times);  
} else {  
    return "";  
}</pre>

You can then return the ternary operator in your function:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c3266c76e85e4a0ce9e6c4b884124f21?postId=2a9053b93a2d" data-media-id="c3266c76e85e4a0ce9e6c4b884124f21" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F13507232%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>















* * *







I hope you found this helpful. This is part of my “How to Solve FCC Algorithms” series of articles on the freeCodeCamp Algorithm Challenges, where I propose several solutions and explain step-by-step what happens under the hood.

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

*   [while loop — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
*   [repeat() method — MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
*   [recursion — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion)
*   [Ternary Operator — MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)








