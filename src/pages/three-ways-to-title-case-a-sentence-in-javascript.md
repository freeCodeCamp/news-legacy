---
author: Sonya Moisset
authorTwitter: https://twitter.com/SonyaMoisset
authorFacebook: https://facebook.com/10156763599105494
title: "Three Ways to Title Case a Sentence in JavaScript"
subTitle: "This article is based on Free Code Camp Basic Algorithm Scripting “Title Case a Sentence”...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*YPdTg5Gx1FX66jSc_uwwlQ.jpeg
url: https://medium.freecodecamp.org/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27
id: three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27
date: 2016-04-07T14:08:35.350Z
tags: [
  "JavaScript",
  "Programming",
  "Learning",
  "Algorithms",
  "Technology"
]
---
# Three Ways to Title Case a Sentence in JavaScript







![](https://cdn-images-1.medium.com/max/2000/1*YPdTg5Gx1FX66jSc_uwwlQ.jpeg)

Anthony DELANOIX | unsplah.com







_This article is based on Free Code Camp Basic Algorithm Scripting “_[Title Case a Sentence](https://www.freecodecamp.com/challenges/title-case-a-sentence)_”._

**In this algorithm**, we want to change a string of text so that it always has a capital letter at the start of every word.

In this article, I’m going to explain three approaches. First with a FOR loop, second using the map() method, and third using the replace() method.











* * *







#### Algorithm Challenge

> Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

> For the purpose of this exercise, you should also capitalize connecting words like “the” and “of”.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/658ddc5ea646c3a5de346c7a7f10e254?postId=676a9175eb27" data-media-id="658ddc5ea646c3a5de346c7a7f10e254" allowfullscreen="" frameborder="0"></iframe>





#### Provided test cases

*   **_titleCase(“I’m a little tea pot”)_** should return a string.
*   **_titleCase(“I’m a little tea pot”)_** should return “I’m A Little Tea Pot”.
*   **_titleCase(“sHoRt AnD sToUt”)_** should return “Short And Stout”.
*   **_titleCase(“HERE IS MY HANDLE HERE IS MY SPOUT”)_** should return “Here Is My Handle Here Is My Spout”.











* * *







### 1\. Title Case a Sentence With a FOR Loop

For this solution, we will use the String.prototype.toLowerCase() method, the String.prototype.split() method, the String.prototype.charAt() method, the String.prototype.slice() method and the Array.prototype.join() method.

*   The **toLowerCase()** method returns the calling string value converted to lowercase
*   The **split()** method splits a String object into an array of strings by separating the string into substrings.
*   The **charAt()** method returns the specified character from a string.
*   The **slice()** method extracts a section of a string and returns a new string.
*   The **join()** method joins all elements of an array into a string.

We will need to add an empty space between the parenthesis of the **split()**method,

<pre name="d540" id="d540" class="graf graf--pre graf-after--p">var strSplit = "I'm a little tea pot".split(' ');</pre>

which will output an array of separated words:

<pre name="dbad" id="dbad" class="graf graf--pre graf-after--p">var strSplit = ["I'm", "a", "little", "tea", "pot"];</pre>

If you don’t add the space in the parenthesis, you will have this output:

<pre name="3fc9" id="3fc9" class="graf graf--pre graf-after--p">var strSplit =   
["I", "'", "m", " ", "a", " ", "l", "i", "t", "t", "l", "e", " ", "t", "e", "a", " ", "p", "o", "t"];</pre>

We will concatenate

<pre name="e24b" id="e24b" class="graf graf--pre graf-after--p">str[i].charAt(0).toUpperCase()</pre>

— which will uppercase the index 0 character of the current string in the FOR loop —

and

<pre name="6592" id="6592" class="graf graf--pre graf-after--p">str[i].slice(1)</pre>

— which will extract from index 1 to the end of the string.

We will set the whole string to lower case for normalization purposes.

#### With comments:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2b141f29adcf0fb64629c3a4ad0ad087?postId=676a9175eb27" data-media-id="2b141f29adcf0fb64629c3a4ad0ad087" allowfullscreen="" frameborder="0"></iframe>





#### Without comments:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/1620f25ac40f3626ddf4ae4cfd7848b2?postId=676a9175eb27" data-media-id="1620f25ac40f3626ddf4ae4cfd7848b2" allowfullscreen="" frameborder="0"></iframe>















* * *







### 2\. Title Case a Sentence With the map() Method

For this solution, we will use the Array.prototype.map() method.

*   The **map()** method creates a new array with the results of calling a provided function on every element in this array. Using map will call a provided callback function once for each element in an array, in order, and constructs a new array from the results.

We will lowercase and split the string as seen in the previous example before applying the map() method.

Instead of using a FOR loop, we will apply the map() method as the condition on the same concatenation from the previous example.

<pre name="be51" id="be51" class="graf graf--pre graf-after--p">(word.charAt(0).toUpperCase() + word.slice(1));</pre>

#### With comments:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/1fa454a5c5a2af82e613266b03024013?postId=676a9175eb27" data-media-id="1fa454a5c5a2af82e613266b03024013" allowfullscreen="" frameborder="0"></iframe>





#### Without comments:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/de059d7c4ee6af313c63a9e333908cc5?postId=676a9175eb27" data-media-id="de059d7c4ee6af313c63a9e333908cc5" allowfullscreen="" frameborder="0"></iframe>















* * *







### 3\. Title Case a Sentence With the map() and the replace() Methods

For this solution, we will keep using the Array.prototype.map() method and add the String.prototype.replace() method.

*   The **replace()** method returns a new string with some or all matches of a pattern replaced by a replacement.

In our case, the pattern for the replace() method will be a String to be replaced by a new replacement and will be treated as a verbatim string. We can also use a **regular expression** as the pattern to solve this algorithm.

We will lowercase and split the string as seen in the first example before applying the map() method.

#### With comments:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/e3e4c6ae9a0c2b607a62569608096a95?postId=676a9175eb27" data-media-id="e3e4c6ae9a0c2b607a62569608096a95" allowfullscreen="" frameborder="0"></iframe>





#### Without comments:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c528aefc2c2689dc927644af030c0c8e?postId=676a9175eb27" data-media-id="c528aefc2c2689dc927644af030c0c8e" allowfullscreen="" frameborder="0"></iframe>















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

[**Three ways you can find the largest number in an array using JavaScript**  
_In this article, I’m going to explain how to solve Free Code Camp’s “Return Largest Numbers in Arrays” challenge. This…_medium.freecodecamp.com](https://medium.freecodecamp.com/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1 "https://medium.freecodecamp.com/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1")[](https://medium.freecodecamp.com/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1)

If you have your own solution or any suggestions, share them below in the comments.

Or you can follow me on [**Medium**](https://medium.com/@sonya.moisset)**,** [**Twitter**](https://twitter.com/SonyaMoisset)**,** [**Github**](https://github.com/SonyaMoisset) and [**LinkedIn**](https://www.linkedin.com/in/sonyamoisset), right after you click the green heart below ;-)

‪#‎StayCurious‬, ‪#‎KeepOnHacking‬ & ‪#‎MakeItHappen‬!











* * *







### Resources

*   [toLowerCase() method — MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
*   [toUpperCase() method — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
*   [charAt() method — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
*   [slice() method — MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
*   [split() method — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
*   [join() method — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
*   [for — MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for)
*   [map() method — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
*   [replace() method — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)








