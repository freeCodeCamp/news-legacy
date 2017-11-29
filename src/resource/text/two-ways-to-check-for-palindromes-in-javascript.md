---
author: Sonya Moisset
authorTwitter: https://twitter.com/SonyaMoisset
authorFacebook: https://facebook.com/10156763599105494
title: "Two Ways to Check for Palindromes in JavaScript"
subTitle: "This article is based on Free Code Camp Basic Algorithm Scripting “Check for Palindromes”...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*gaAkSMf6J7cMTJCgQVX2Kg.jpeg
url: https://medium.freecodecamp.org/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7
id: two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7
date: 2016-03-22T11:23:37.110Z
tags: [
  "JavaScript",
  "Programming",
  "Web Development",
  "Algorithms",
  "Design"
]
---
# Two Ways to Check for Palindromes in JavaScript







![](https://cdn-images-1.medium.com/max/2000/1*gaAkSMf6J7cMTJCgQVX2Kg.jpeg)

Samuel Zeller | unsplash.com







_This article is based on Free Code Camp Basic Algorithm Scripting “_[_Check for Palindromes_](https://www.freecodecamp.com/challenges/check-for-palindromes)_”._

**A palindrome** is a word, phrase, number, or other sequence of characters which reads the same backward or forward. The word “palindrome” was first coined by the English playwright [Ben Jonson](https://en.wikipedia.org/wiki/Ben_Jonson "Ben Jonson") in the 17th century, from the Greek roots _palin_ (“again”) and _dromos_ (“way, direction”). — _src. Wikipedia_

In this article, I’m going to explain two approaches, first with built-in functions and second using a for loop.











* * *







#### Algorithm Challenge

> Return true if the given string is a palindrome. Otherwise, return false.

> A palindrome is a word or sentence that’s spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

> **Note.** You’ll need to remove **all non-alphanumeric characters** (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

> We’ll pass strings with varying formats, such as “racecar”, “RaceCar”, and “race CAR” among others.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/92010722a099d01f115c910a86d7d0fa?postId=64fea8191fd7" data-media-id="92010722a099d01f115c910a86d7d0fa" allowfullscreen="" frameborder="0"></iframe>





#### _Provided test cases_

*   **_palindrome(“race car”)_** should return true
*   **_palindrome(“not a palindrome”)_**should return false
*   **_palindrome(“A man, a plan, a canal. Panama”)_** should return true
*   **_palindrome(“never odd or even”)_** should return true
*   **_palindrome(“nope”)_** should return false
*   **_palindrome(“almostomla”)_** should return false
*   **_palindrome(“My age is 0, 0 si ega ym.”)_** should return true
*   **_palindrome(“1 eye for of 1 eye.”)_** should return false
*   **_palindrome(“0_0 (: /-\ :) 0–0”)_** should return true











* * *







### Which **Regular Expression** will we need to pass the last test case?

Regular expressions are patterns used to match character combinations in strings.

When the search for a match requires something more than a direct match, the pattern includes special characters.

<pre name="bd18" id="bd18" class="graf graf--pre graf-after--p">To pass the last test case, we can use two Regular Expressions:</pre>

<pre name="82d5" id="82d5" class="graf graf--pre graf-after--pre">**_/[^A-Za-z0–9]/g_** or</pre>

<pre name="ccbc" id="ccbc" class="graf graf--pre graf-after--pre">**_/[\W_]/g_**</pre>

**\W** removes **all non-alphanumeric characters**:

*   **\W** matches any non-word character
*   **\W** is equivalent to [^A-Za-z0–9_]
*   **\W** matches anything that is not enclosed in the brackets

What does that mean?

<pre name="22dd" id="22dd" class="graf graf--pre graf-after--p">[^A-Z] matches anything that is not enclosed between A and Z</pre>

<pre name="c470" id="c470" class="graf graf--pre graf-after--pre">[^a-z] matches anything that is not enclosed between a and z</pre>

<pre name="30eb" id="30eb" class="graf graf--pre graf-after--pre">[^0-9] matches anything that is not enclosed between 0 and 9</pre>

<pre name="fbe6" id="fbe6" class="graf graf--pre graf-after--pre">[^_] matches anything that does not enclose _</pre>

But in our test case, we need palindrome(“**0_0 (: /-\ :) 0–0**”) to return **true**, which means “**_(: /-\ :)–**” has to be matched.

We will need to add “**_**” to pass this specific test case.

<pre name="50cd" id="50cd" class="graf graf--pre graf-after--p">We now have “**\W_**”</pre>

We will also need to add the **g** flag for global search.

<pre name="a9ff" id="a9ff" class="graf graf--pre graf-after--p">We finally have “**/[\W_]/g**”</pre>

> **_/[\W_]/g_** _was used for pure demonstrative purpose to show how RegExp works._ **_/[^A-Za-z0–9]/g_** _is the easiest RegExp to choose_**_._**











* * *







### 1\. Check for Palindromes With Built-In Functions

For this solution, we will use several methods:

*   The **toLowerCase()** method to return the calling string value converted to lowercase.
*   The **replace()** method to return a new string with some or all matches of a pattern replaced by a replacement. We will use one of the RegExp we just created earlier.
*   The **split()** method splits a String object into an array of strings by separating the string into sub strings.
*   The **reverse()** method reverses an array in place. The first array element becomes the last and the last becomes the first.
*   The **join()** method joins all elements of an array into a string.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/35e9a76020ef7148ba7860c499062ae5?postId=64fea8191fd7" data-media-id="35e9a76020ef7148ba7860c499062ae5" allowfullscreen="" frameborder="0"></iframe>





#### Without comments:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/1c341b0f9d46fb97fb500944ff611b7e?postId=64fea8191fd7" data-media-id="1c341b0f9d46fb97fb500944ff611b7e" allowfullscreen="" frameborder="0"></iframe>















* * *







### 2\. Check for Palindromes With a FOR loop

Half-indexing (len/2) has benefits when processing large strings. We check the end from each part and divide the number of iterations inside the FOR loop by two.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/4ee99dbaaa358bcf42e2b8c1a96f6265?postId=64fea8191fd7" data-media-id="4ee99dbaaa358bcf42e2b8c1a96f6265" allowfullscreen="" frameborder="0"></iframe>





#### Without comments:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/6bfefde65da4f872fcf1d3763728de6b?postId=64fea8191fd7" data-media-id="6bfefde65da4f872fcf1d3763728de6b" allowfullscreen="" frameborder="0"></iframe>















* * *







I hope you found this helpful. This is part of my “How to Solve FCC Algorithms” series of articles on the Free Code Camp Algorithm Challenges, where I propose several solutions and explain step-by-step what happens under the hood.

[**Two ways to confirm the ending of a String in JavaScript**  
_In this article, I’ll explain how to solve freeCodeCamp’s “Confirm the Ending” challenge._medium.freecodecamp.com](https://medium.freecodecamp.com/two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac "https://medium.freecodecamp.com/two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac")[](https://medium.freecodecamp.com/two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac)

[**Three Ways to Reverse a String in JavaScript**  
_This article is based on Free Code Camp Basic Algorithm Scripting “Reverse a String”_medium.freecodecamp.com](https://medium.freecodecamp.com/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb "https://medium.freecodecamp.com/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb")[](https://medium.freecodecamp.com/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb)

[**Three Ways to Factorialize a Number in JavaScript**  
_This article is based on Free Code Camp Basic Algorithm Scripting “Factorialize a Number”_medium.freecodecamp.com](https://medium.freecodecamp.com/how-to-factorialize-a-number-in-javascript-9263c89a4b38 "https://medium.freecodecamp.com/how-to-factorialize-a-number-in-javascript-9263c89a4b38")[](https://medium.freecodecamp.com/how-to-factorialize-a-number-in-javascript-9263c89a4b38)

[**Three Ways to Find the Longest Word in a String in JavaScript**  
_This article is based on Free Code Camp Basic Algorithm Scripting “Find the Longest Word in a String”._medium.freecodecamp.com](https://medium.freecodecamp.com/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c "https://medium.freecodecamp.com/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c")[](https://medium.freecodecamp.com/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c)

[**Three Ways to Title Case a Sentence in JavaScript**  
_This article is based on Free Code Camp Basic Algorithm Scripting “Title Case a Sentence”._medium.freecodecamp.com](https://medium.freecodecamp.com/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27 "https://medium.freecodecamp.com/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27")[](https://medium.freecodecamp.com/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27)

[**Three ways you can find the largest number in an array using JavaScript**  
_In this article, I’m going to explain how to solve Free Code Camp’s “Return Largest Numbers in Arrays” challenge. This…_medium.freecodecamp.com](https://medium.freecodecamp.com/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1 "https://medium.freecodecamp.com/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1")[](https://medium.freecodecamp.com/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1)

If you have your own solution or any suggestions, share them below in the comments.

Or you can follow me on [**Medium**](https://medium.com/@sonya.moisset)**,** [**Twitter**](https://twitter.com/SonyaMoisset)**,** [**Github**](https://github.com/SonyaMoisset) and [**LinkedIn**](https://www.linkedin.com/in/sonyamoisset), right after you click the green heart below ;-)

‪#‎StayCurious‬, ‪#‎KeepOnHacking‬ & ‪#‎MakeItHappen‬!











* * *







### Resources

*   [Regular Expressions — MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions)
*   [toLowerCase() method — MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
*   [replace() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
*   [split() method — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
*   [reverse() method — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
*   [join() method — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
*   [String.length — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)
*   [for — MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for)








