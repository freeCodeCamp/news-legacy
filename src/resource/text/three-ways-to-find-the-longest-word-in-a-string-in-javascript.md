---
author: Sonya Moisset
authorTwitter: https://twitter.com/SonyaMoisset
authorFacebook: https://facebook.com/10156763599105494
title: "Three Ways to Find the Longest Word in a String in JavaScript"
subTitle: "This article is based on Free Code Camp Basic Algorithm Scripting “Find the Longest Word in a String”...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*k2RZZ3j1e-_r9Av7SgzFDw.jpeg
url: https://medium.freecodecamp.org/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c
id: three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c
date: 2016-03-30T13:06:33.410Z
tags: [
  "JavaScript",
  "Programming",
  "Web Development",
  "Design",
  "Algorithms"
]
---
# Three Ways to Find the Longest Word in a String in JavaScript







![](https://cdn-images-1.medium.com/max/2000/1*k2RZZ3j1e-_r9Av7SgzFDw.jpeg)

Camille Kimberly | unsplash.com







_This article is based on Free Code Camp Basic Algorithm Scripting “_[Find the Longest Word in a String](https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string)_”._

**In this algorithm**, we want to look at each individual word and count how many letters are in each. Then, compare the counts to determine which word has the most characters and return the length of the longest word.

In this article, I’m going to explain three approaches. First with a FOR loop, second using the sort() method, and third using the reduce() method.











* * *







#### Algorithm Challenge

> Return the length of the longest word in the provided sentence.

> Your response should be a number.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b7f359a5f0028062439ced7db3f6b756?postId=a2fb04c9757c" data-media-id="b7f359a5f0028062439ced7db3f6b756" allowfullscreen="" frameborder="0"></iframe>





#### **_Provided test cases_**

*   **_findLongestWord(“The quick brown fox jumped over the lazy dog”)_** should return a number
*   **_findLongestWord(“The quick brown fox jumped over the lazy dog”)_** should return 6
*   **_findLongestWord(“May the force be with you”)_** should return 5
*   **_findLongestWord(“Google do a barrel roll”)_** should return 6
*   **_findLongestWord(“What is the average airspeed velocity of an unladen swallow”)_** should return 8
*   **_findLongestWord(“What if we try a super-long word such as otorhinolaryngology”)_**should return 19











* * *







### 1\. Find the Longest Word With a FOR Loop

For this solution, we will use the String.prototype.split() method

*   The **split()** method splits a String object into an array of strings by separating the string into sub strings.

We will need to add an empty space between the parenthesis of the **split()** method,

<pre name="d540" id="d540" class="graf graf--pre graf-after--p">var strSplit = “The quick brown fox jumped over the lazy dog”.split(‘ ‘);</pre>

which will output an array of separated words:

<pre name="dbad" id="dbad" class="graf graf--pre graf-after--p">var strSplit = [“The”, “quick”, “brown”, “fox”, “jumped”, “over”, “the”, “lazy”, “dog”];</pre>

If you don’t add the space in the parenthesis, you will have this output:

<pre name="3fc9" id="3fc9" class="graf graf--pre graf-after--p">var strSplit =   
[“T”, “h”, “e”, “ “, “q”, “u”, “i”, “c”, “k”, “ “, “b”, “r”, “o”, “w”, “n”, “ “, “f”, “o”, “x”, “ “, “j”, “u”, “m”, “p”, “e”, “d”, “ “, “o”, “v”, “e”, “r”, “ “, “t”, “h”, “e”, “ “, “l”, “a”, “z”, “y”, “ “, “d”, “o”, “g”];</pre>





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/02dc048d200a7d599711b40dbb12d4df?postId=a2fb04c9757c" data-media-id="02dc048d200a7d599711b40dbb12d4df" allowfullscreen="" frameborder="0"></iframe>





#### Without comments:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2ea73b6a07ca46a70dfd2163dc55f6fb?postId=a2fb04c9757c" data-media-id="2ea73b6a07ca46a70dfd2163dc55f6fb" allowfullscreen="" frameborder="0"></iframe>















* * *







### 2\. Find the Longest Word With the sort() Method

For this solution, we will use the Array.prototype.sort() method to sort the array by some ordering criterion and then return the length of the first element of this array.

*   The **sort()** method sorts the elements of an array in place and returns the array.

In our case, if we just sort the array

<pre name="23d6" id="23d6" class="graf graf--pre graf-after--p">var sortArray = [“The”, “quick”, “brown”, “fox”, “jumped”, “over”, “the”, “lazy”, “dog”].sort();</pre>

we will have this output:

<pre name="acc2" id="acc2" class="graf graf--pre graf-after--p">var sortArray = [“The”, “brown”, “dog”, “fox”, “jumped”, “lazy”, “over”, “quick”, “the”];</pre>

In Unicode, numbers come before upper case letters, which come before lower case letters.

We need to sort the elements by some ordering criterion,

<pre name="9dcb" id="9dcb" class="graf graf--pre graf-after--p">[].sort(function(firstElement, secondElement) {   
    return secondElement.length — firstElement.length;   
})</pre>

where the length of the second element is compared to the length of the first element in the array.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/14220e4356a1d917770a1dfeccf1ae5c?postId=a2fb04c9757c" data-media-id="14220e4356a1d917770a1dfeccf1ae5c" allowfullscreen="" frameborder="0"></iframe>





#### Without comments:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2aec961dc84b01dc4b80222a97f32583?postId=a2fb04c9757c" data-media-id="2aec961dc84b01dc4b80222a97f32583" allowfullscreen="" frameborder="0"></iframe>















* * *







### 3\. Find the Longest Word With the reduce() Method

For this solution, we will use the Array.prototype.reduce().

*   The **reduce()** method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.

reduce() executes a callback function once for each element present in the array.

You can provide an initial value as the second argument to reduce, here we will add an empty string “”.

<pre name="ee0c" id="ee0c" class="graf graf--pre graf-after--p">[].reduce(function(previousValue, currentValue) {...}, **“”**);</pre>





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9db6e9609ba6049120359b7e862f20f1?postId=a2fb04c9757c" data-media-id="9db6e9609ba6049120359b7e862f20f1" allowfullscreen="" frameborder="0"></iframe>





#### Without comments:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/32a1d2529a0b0d1d8a5319a7cf4e422c?postId=a2fb04c9757c" data-media-id="32a1d2529a0b0d1d8a5319a7cf4e422c" allowfullscreen="" frameborder="0"></iframe>















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

[**Three Ways to Title Case a Sentence in JavaScript**  
_This article is based on Free Code Camp Basic Algorithm Scripting “Title Case a Sentence”._medium.freecodecamp.com](https://medium.freecodecamp.com/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27 "https://medium.freecodecamp.com/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27")[](https://medium.freecodecamp.com/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27)

[**Three ways you can find the largest number in an array using JavaScript**  
_In this article, I’m going to explain how to solve Free Code Camp’s “Return Largest Numbers in Arrays” challenge. This…_medium.freecodecamp.com](https://medium.freecodecamp.com/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1 "https://medium.freecodecamp.com/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1")[](https://medium.freecodecamp.com/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1)

If you have your own solution or any suggestions, share them below in the comments.

Or you can follow me on [**Medium**](https://medium.com/@sonya.moisset)**,** [**Twitter**](https://twitter.com/SonyaMoisset)**,** [**Github**](https://github.com/SonyaMoisset) and [**LinkedIn**](https://www.linkedin.com/in/sonyamoisset), right after you click the green heart below ;-)

‪#‎StayCurious‬, ‪#‎KeepOnHacking‬ & ‪#‎MakeItHappen‬!











* * *







### Resources

*   [split() method — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
*   [sort() method — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
*   [reduce() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
*   [String.length — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)
*   [for — MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for)








