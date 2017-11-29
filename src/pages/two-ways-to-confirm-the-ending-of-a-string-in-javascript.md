---
author: Sonya Moisset
authorTwitter: https://twitter.com/SonyaMoisset
authorFacebook: https://facebook.com/10156763599105494
title: "Two ways to confirm the ending of a String in JavaScript"
subTitle: "In this article, I’ll explain how to solve freeCodeCamp’s “Confirm the Ending” challenge. This involves checking whether a string ends wi..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*bvdSF4jzFsH7foKJYEoNaA.jpeg
url: https://medium.freecodecamp.org/two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac
id: two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac
date: 2017-02-06T13:18:27.543Z
tags: [
  "Programming",
  "JavaScript",
  "Learning",
  "Algorithms",
  "Technology"
]
---
# Two ways to confirm the ending of a String in JavaScript







![](https://cdn-images-1.medium.com/max/2000/1*bvdSF4jzFsH7foKJYEoNaA.jpeg)







In this article, I’ll explain how to solve freeCodeCamp’s “[Confirm the Ending](https://www.freecodecamp.com/challenges/confirm-the-ending)_”_ challenge. This involves checking whether a string ends with specific sequence of characters.

There are the two approaches I’ll cover:

1.  using the substr() method
2.  using endsWith() method

### The Algorithm Challenge Description

> _Check if a string (first argument,_ `_str_`_) ends with the given target string (second argument,_ `_target_`_)._

> _This challenge can be solved with the _`_.endsWith()_` _method, which was introduced in ES2015\. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead._





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a8b1f0328a001a739da94681780038a2?postId=62b4677034ac" data-media-id="a8b1f0328a001a739da94681780038a2" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F13507232%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





### Provided test cases

    confirmEnding("Bastian", "n")

    confirmEnding("Connor", "n")

    confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")

<pre name="ed34" id="ed34" class="graf graf--pre graf-after--pre">_largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])_ should return [9, 35, 97, 1000000].  
`confirmEnding("He has to give me a new name", "name")`should return true.</pre>

    confirmEnding("Open sesame", "same")

    confirmEnding("Open sesame", "pen")

    confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")

<pre name="fe2f" id="fe2f" class="graf graf--pre graf-after--pre">Do not use the built-in method `.endsWith()` to solve the challenge.</pre>

### Approach #1: Confirm the Ending of a String With Built-In Functions — with substr()

For this solution, you’ll use the String.prototype.substr() method:

*   The `**substr()**` method returns the characters in a string beginning at the specified location through the specified number of characters.

Why are you using `string.substr(-target.length)`?

If the target.length is negative, the substr() method will start the counting from the end of the string, which is what you want in this code challenge.

You don’t want to use `string.substr(-1)` to get the last element of the string, because if the target is longer than one letter:

    confirmEnding("Open sesame", "same")

…the target won’t return at all.

So here `string.substr(-target.length)` will get the last index of the string ‘Bastian’ which is ‘n’.

Then you check whether `string.substr(-target.length)` equals the target (true or false).





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/86a2e5efbba7d78d7fb93af752fdf7d2?postId=62b4677034ac" data-media-id="86a2e5efbba7d78d7fb93af752fdf7d2" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F13507232%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Without comments:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2f13080d70139bfd17f9709369580f33?postId=62b4677034ac" data-media-id="2f13080d70139bfd17f9709369580f33" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F13507232%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





You can use a **ternary operator** as a shortcut for the if statement:

<pre name="74a5" id="74a5" class="graf graf--pre graf-after--p">(string.substr(-target.length) === target) ? true : false;</pre>

This can be read as:

<pre name="9d03" id="9d03" class="graf graf--pre graf-after--p">if (string.substr(-target.length) === target) {  
    return true;  
} else {  
    return false;  
}</pre>

You then return the ternary operator in your function:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/73f4db1786e115df51475fd51c9d158c?postId=62b4677034ac" data-media-id="73f4db1786e115df51475fd51c9d158c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F13507232%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





You can also refactor your code to make it more succinct by just returning the condition:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/1b18e7ebc140470f1445e98f0b8ec39a?postId=62b4677034ac" data-media-id="1b18e7ebc140470f1445e98f0b8ec39a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F13507232%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>















* * *







### Approach #2: Confirm the Ending of a String With Built-In Functions — with endsWith()

For this solution, you’ll use the String.prototype.endsWith() method:

*   The `endsWith()` method determines whether a string ends with the characters of another string, returning `true` or `false` as appropriate. This method is case-sensitive.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/537a6c94c179cc103a04ee321a9511a4?postId=62b4677034ac" data-media-id="537a6c94c179cc103a04ee321a9511a4" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F13507232%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>















* * *







I hope you found this helpful. This is part of my “How to Solve FCC Algorithms” series of articles on the freeCodeCamp Algorithm Challenges, where I propose several solutions and explain step-by-step what happens under the hood.

[**Three ways to repeat a string in JavaScript**  
_In this article, I’ll explain how to solve freeCodeCamp’s “Repeat a string repeat a string” challenge. This involves…_medium.freecodecamp.com](https://medium.freecodecamp.com/three-ways-to-repeat-a-string-in-javascript-2a9053b93a2d "https://medium.freecodecamp.com/three-ways-to-repeat-a-string-in-javascript-2a9053b93a2d")[](https://medium.freecodecamp.com/three-ways-to-repeat-a-string-in-javascript-2a9053b93a2d)

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

*   [substr() method — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr)
*   [endsWith() method — MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)
*   [Ternary Operator — MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)








