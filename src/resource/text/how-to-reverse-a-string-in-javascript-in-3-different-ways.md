---
author: Sonya Moisset
authorTwitter: https://twitter.com/SonyaMoisset
authorFacebook: https://facebook.com/10156763599105494
title: "Three Ways to Reverse a String in JavaScript"
subTitle: "This article is based on Free Code Camp Basic Algorithm Scripting “Reverse a String”..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*aFrHLdCeSRv4z-hsfCA6hw.jpeg
url: https://medium.freecodecamp.org/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb
id: how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb
date: 2016-03-14T13:20:50.175Z
tags: [
  "JavaScript",
  "Programming",
  "Algorithms",
  "Coding",
  "Learning"
]
---
# Three Ways to Reverse a String in JavaScript







![](https://cdn-images-1.medium.com/max/2000/1*aFrHLdCeSRv4z-hsfCA6hw.jpeg)

Arc de Triomphe, Paris, France | Noah Rosenfield | unsplash.com







_This article is based on Free Code Camp Basic Algorithm Scripting “_[_Reverse a String_](https://www.freecodecamp.com/challenges/reverse-a-string)_”_

**Reversing a string** is one of the most frequently asked JavaScript question in the technical round of interview. Interviewers may ask you to write different ways to reverse a string, or they may ask you to reverse a string without using in-built methods, or they may even ask you to reverse a string using recursion.

There are potentially tens of different ways to do it, excluding the built-in **reverse** function, as JavaScript does not have one.

Below are my three most interesting ways to solve the problem of reversing a string in JavaScript.











* * *







#### Algorithm Challenge

> Reverse the provided string.

> You may need to turn the string into an array before you can reverse it.

> Your result must be a string.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/cefd94d3c5236f5d013980b018a5f942?postId=75e4763c68cb" data-media-id="cefd94d3c5236f5d013980b018a5f942" allowfullscreen="" frameborder="0"></iframe>





#### Provided test cases

*   **_reverseString(“hello”)_** should become “olleh”
*   **_reverseString(“Howdy”)_** should become “ydwoH”
*   **_reverseString(“Greetings from Earth”)_** should return”htraE morf sgniteerG”











* * *







### 1\. Reverse a String With Built-In Functions

For this solution, we will use three methods: the String.prototype.split() method, the Array.prototype.reverse() method and the Array.prototype.join() method.

*   The split() method splits a String object into an array of string by separating the string into sub strings.
*   The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
*   The join() method joins all elements of an array into a string.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/cea48bafe008a2e6e315632b0f1c2f5f?postId=75e4763c68cb" data-media-id="cea48bafe008a2e6e315632b0f1c2f5f" allowfullscreen="" frameborder="0"></iframe>





#### Chaining the three methods together:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d16ecbfa6c872dd4eafd944e28953e38?postId=75e4763c68cb" data-media-id="d16ecbfa6c872dd4eafd944e28953e38" allowfullscreen="" frameborder="0"></iframe>















* * *







### 2\. Reverse a String With a Decrementing For Loop





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/3eedcc5e490d21e2af565716505990e9?postId=75e4763c68cb" data-media-id="3eedcc5e490d21e2af565716505990e9" allowfullscreen="" frameborder="0"></iframe>





#### Without comments:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/f9989f7c966ac6974380c42400e59f9f?postId=75e4763c68cb" data-media-id="f9989f7c966ac6974380c42400e59f9f" allowfullscreen="" frameborder="0"></iframe>















* * *







### 3\. Reverse a String With Recursion

For this solution, we will use two methods: the String.prototype.substr() method and the String.prototype.charAt() method.

*   The substr() method returns the characters in a string beginning at the specified location through the specified number of characters.

<pre name="ad3d" id="ad3d" class="graf graf--pre graf-after--li">"hello".substr(1); // "ello"</pre>

*   The charAt() method returns the specified character from a string.

<pre name="22e1" id="22e1" class="graf graf--pre graf-after--li">"hello".charAt(0); // "h"</pre>





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/0ea8727d7ee8e788cad7f82bbf7d9ea3?postId=75e4763c68cb" data-media-id="0ea8727d7ee8e788cad7f82bbf7d9ea3" allowfullscreen="" frameborder="0"></iframe>





The depth of the recursion is equal to the length of the String. This solution is not the best one and will be really slow if the String is very long and the stack size is of major concern.

#### Without comments:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2ee543e5373d56a84163c8b3677bcaca?postId=75e4763c68cb" data-media-id="2ee543e5373d56a84163c8b3677bcaca" allowfullscreen="" frameborder="0"></iframe>





#### Conditional (Ternary) Operator:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9e2dcb9788009ddd60ecc4f92757e5fc?postId=75e4763c68cb" data-media-id="9e2dcb9788009ddd60ecc4f92757e5fc" allowfullscreen="" frameborder="0"></iframe>















* * *







**Reversing a String in JavaScript** is a small and simple algorithm that can be asked on a technical phone screening or a technical interview. You could take the short route in solving this problem, or take the approach by solving it with recursion or even more complex solutions.











* * *







I hope you found this helpful. This is part of my “How to Solve FCC Algorithms” series of articles on the Free Code Camp Algorithm Challenges, where I propose several solutions and explain step-by-step what happens under the hood.

[**Three ways to repeat a string in JavaScript**  
_In this article, I’ll explain how to solve freeCodeCamp’s “Repeat a string repeat a string” challenge. This involves…_medium.freecodecamp.com](https://medium.freecodecamp.com/three-ways-to-repeat-a-string-in-javascript-2a9053b93a2d "https://medium.freecodecamp.com/three-ways-to-repeat-a-string-in-javascript-2a9053b93a2d")[](https://medium.freecodecamp.com/three-ways-to-repeat-a-string-in-javascript-2a9053b93a2d)

[**Two ways to confirm the ending of a String in JavaScript**  
_In this article, I’ll explain how to solve freeCodeCamp’s “Confirm the Ending” challenge._medium.freecodecamp.com](https://medium.freecodecamp.com/two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac "https://medium.freecodecamp.com/two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac")[](https://medium.freecodecamp.com/two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac)

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







### Resources

*   [split() method — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
*   [reverse() method — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
*   [join() method — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
*   [String.length — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)
*   [substr() method — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr)
*   [charAt() method — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)








