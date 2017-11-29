---
author: Sonya Moisset
authorTwitter: https://twitter.com/SonyaMoisset
authorFacebook: https://facebook.com/10156763599105494
title: "Three Ways to Factorialize a Number in JavaScript"
subTitle: "This article is based on Free Code Camp Basic Algorithm Scripting “Factorialize a Number”..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*uKMWUxeIBoqzbgBNRHiyjQ.jpeg
url: https://medium.freecodecamp.org/how-to-factorialize-a-number-in-javascript-9263c89a4b38
id: how-to-factorialize-a-number-in-javascript-9263c89a4b38
date: 2016-03-16T11:51:48.078Z
tags: [
  "JavaScript",
  "Programming",
  "Web Development",
  "Technology",
  "Algorithms"
]
---
# Three Ways to Factorialize a Number in JavaScript







![](https://cdn-images-1.medium.com/max/2000/1*uKMWUxeIBoqzbgBNRHiyjQ.jpeg)

Buildings | Matthew Wiebe | unsplash.com







_This article is based on Free Code Camp Basic Algorithm Scripting “_[_Factorialize a Number_](https://www.freecodecamp.com/challenges/factorialize-a-number)_”_

**In mathematics**, the factorial of a non-negative integer _n_ can be a tricky algorithm. In this article, I’m going to explain three approaches, first with the recursive function, second using a while loop and third using a for loop.

We have already seen a recursion approach on a String in the previous article, [**How to Reverse a String in JavaScript in 3 Different Ways ?**](https://medium.com/@sonya.moisset/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb#.ekpftot4d) This time we will apply the same concept on a number.











* * *







#### Algorithm Challenge

> Return the factorial of the provided integer.

> If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

> Factorials are often represented with the shorthand notation **n!**

> For example: **5! = 1 * 2 * 3 * 4 * 5 = 120**





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c0d2369a84672c17d8c7979cb77fd4d1?postId=9263c89a4b38" data-media-id="c0d2369a84672c17d8c7979cb77fd4d1" allowfullscreen="" frameborder="0"></iframe>





#### _Provided test cases_

*   **_factorialize(0)_** should return 1
*   **_factorialize(5)_** should return 120
*   **_factorialize(10)_** should return 3628800
*   **_factorialize(20)_** should return 2432902008176640000











* * *







### What is factorializing a number all about?

When you factorialize a number, you are multiplying that number by each consecutive number minus one.

If your number is 5, you would have:

<pre name="961c" id="961c" class="graf graf--pre graf-after--p">5! = 5 * 4 * 3 * 2 * 1</pre>

The pattern would be:

<pre name="34b5" id="34b5" class="graf graf--pre graf-after--p graf--trailing">0! = 1  
1! = 1  
2! = 2 * 1  
3! = 3 * 2 * 1  
4! = 4 * 3 * 2 * 1  
5! = 5 * 4 * 3 * 2 * 1</pre>











* * *







### 1\. Factorialize a Number With Recursion





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/94d370855eb49f7fb799e14f7eedbd85?postId=9263c89a4b38" data-media-id="94d370855eb49f7fb799e14f7eedbd85" allowfullscreen="" frameborder="0"></iframe>





#### Without comments:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/983dc29ec0b5a6d0e5c2963b77d91417?postId=9263c89a4b38" data-media-id="983dc29ec0b5a6d0e5c2963b77d91417" allowfullscreen="" frameborder="0"></iframe>















* * *







### 2\. Factorialize a Number with a WHILE loop





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/51a043979fbc8f223323427c9b41330e?postId=9263c89a4b38" data-media-id="51a043979fbc8f223323427c9b41330e" allowfullscreen="" frameborder="0"></iframe>





#### Without comments:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/37ac6691b741d5468c386ab161fe3d7a?postId=9263c89a4b38" data-media-id="37ac6691b741d5468c386ab161fe3d7a" allowfullscreen="" frameborder="0"></iframe>















* * *







### 3\. Factorialize a Number with a FOR loop





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/303e338c8a9242b4bf64cf5631eef887?postId=9263c89a4b38" data-media-id="303e338c8a9242b4bf64cf5631eef887" allowfullscreen="" frameborder="0"></iframe>





#### Without comments:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/fa4c44521618a6dffbda28e8ff3b50d5?postId=9263c89a4b38" data-media-id="fa4c44521618a6dffbda28e8ff3b50d5" allowfullscreen="" frameborder="0"></iframe>















* * *







I hope you found this helpful. This is part of my “How to Solve FCC Algorithms” series of articles on the Free Code Camp Algorithm Challenges, where I propose several solutions and explain step-by-step what happens under the hood.

[**Three ways to repeat a string in JavaScript**  
_In this article, I’ll explain how to solve freeCodeCamp’s “Repeat a string repeat a string” challenge. This involves…_medium.freecodecamp.com](https://medium.freecodecamp.com/three-ways-to-repeat-a-string-in-javascript-2a9053b93a2d "https://medium.freecodecamp.com/three-ways-to-repeat-a-string-in-javascript-2a9053b93a2d")[](https://medium.freecodecamp.com/three-ways-to-repeat-a-string-in-javascript-2a9053b93a2d)

[**Two ways to confirm the ending of a String in JavaScript**  
_In this article, I’ll explain how to solve freeCodeCamp’s “Confirm the Ending” challenge._medium.freecodecamp.com](https://medium.freecodecamp.com/two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac "https://medium.freecodecamp.com/two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac")[](https://medium.freecodecamp.com/two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac)

[**Three Ways to Reverse a String in JavaScript**  
_This article is based on Free Code Camp Basic Algorithm Scripting “Reverse a String”_medium.freecodecamp.com](https://medium.freecodecamp.com/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb "https://medium.freecodecamp.com/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb")[](https://medium.freecodecamp.com/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb)

[**Two Ways to Check for Palindromes in JavaScript**  
_This article is based on Free Code Camp Basic Algorithm Scripting “Check for Palindromes”._medium.freecodecamp.com](https://medium.freecodecamp.com/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7 "https://medium.freecodecamp.com/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7")[](https://medium.freecodecamp.com/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7)

[**Three Ways to Find the Longest Word in a String in JavaScript**  
_This article is based on Free Code Camp Basic Algorithm Scripting “Find the Longest Word in a String”._medium.freecodecamp.com](https://medium.freecodecamp.com/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c "https://medium.freecodecamp.com/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c")[](https://medium.freecodecamp.com/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c)

[**Three Ways to Title Case a Sentence in JavaScript**  
_This article is based on Free Code Camp Basic Algorithm Scripting “Title Case a Sentence”._medium.freecodecamp.com](https://medium.freecodecamp.com/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27 "https://medium.freecodecamp.com/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27")[](https://medium.freecodecamp.com/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27)

[**Three ways you can find the largest number in an array using JavaScript**  
_In this article, I’m going to explain how to solve Free Code Camp’s “Return Largest Numbers in Arrays” challenge. This…_medium.freecodecamp.com](https://medium.freecodecamp.com/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1 "https://medium.freecodecamp.com/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1")[](https://medium.freecodecamp.com/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1)

If you have your own solution or any suggestions, share them below in the comments.

Or you can follow me on [**Medium**](https://medium.com/@sonya.moisset)**,** [**Twitter**](https://twitter.com/SonyaMoisset)**,** [**Github**](https://github.com/SonyaMoisset) and [**LinkedIn**](https://www.linkedin.com/in/sonyamoisset), right after you click the green heart below ;-)

‪#‎StayCurious‬, ‪#‎KeepOnHacking‬ & ‪#‎MakeItHappen‬!








