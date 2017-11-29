---
author: Julia Geist
authorTwitter: none
authorFacebook: none
title: "The Trie Data Structure (Prefix Tree)"
subTitle: "A trie (pronounced try) gets its name from retrieval — its structure makes it a stellar matching algorithm...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*vuZ47z2Ff_EyAuRi087ICQ.gif
url: https://medium.freecodecamp.org/trie-prefix-tree-algorithm-ee7ab3fe3413
id: trie-prefix-tree-algorithm-ee7ab3fe3413
date: 2016-11-07T04:09:23.932Z
tags: [
  "Programming",
  "Python",
  "Algorithms",
  "Data Structures",
  "Computer Science"
]
---
# The Trie Data Structure (Prefix Tree)

> A `Trie`, (also known as a prefix tree) is a special type of tree used to store associative data structures

A trie (pronounced try) gets its name from re**trie**val — its structure makes it a stellar matching algorithm.

### Context

<pre name="1add" id="1add" class="graf graf--pre graf-after--h3">Write your own shuffle method to randomly shuffle characters in a string. </pre>

<pre name="1d24" id="1d24" class="graf graf--pre graf-after--pre">Use the words text file, located at /usr/share/dict/words, and your shuffle method to create an anagram generator that only produces real words.</pre>

<pre name="780c" id="780c" class="graf graf--pre graf-after--pre">Given a string as a command line argument, print one of its anagrams. </pre>

I was presented with this challenge this week at [Make School’s Product Academy](https://www.makeschool.com/product-academy).

The words in the text file are separated by new lines. Its formatting makes it a lot easier to put the words into a data structure. For now, I’m storing them in a list — each element being a single word from the file.

One approach to this challenge is to:

*   randomly shuffle the characters in the string
*   then, check it against all words that were in _/usr/share/dict/words_ to verify that it’s a real word.

However, this approach requires that I check that the randomly shuffled characters in the new string matches one of 235,887 words in that file — that means **235,887 operations** **for _each_ string** that I want to verify as a real word.

This was an unacceptable solution for me. I first looked up libraries that had already been implemented to check if words exist in a language, and found [pyenchant](https://github.com/rfk/pyenchant). I first completed the challenge using the library, in a few lines of code.

<pre name="bf58" id="bf58" class="graf graf--pre graf-after--p">def generateAnagram(string, language="en_US"):  
   languageDict = enchant.Dict(language)   
   numOfPossibleCombinationsForString = math.factorial(len(string))  
   for i in range(0, numOfPossibleCombinationsForString):  
       wordWithShuffledCharacters = shuffleCharactersOf(string)</pre>

<pre name="ea48" id="ea48" class="graf graf--pre graf-after--pre">       if languageDict.check(wordWithShuffledCharacters):  
            return wordWithShuffledCharacters  

    return "There is no anagram in %s for %s." % (language, string)</pre>

Using a couple of library functions in my code was a quick and easy solution. However, I didn’t learn much by finding a library to solve the problem for me.

I was positive that the library wasn’t using the approach I mentioned earlier. I was curious and dug through the source code — I found a trie.

### Trie

A trie stores data in “steps”. Each step is a node in the trie.

Storing words is a perfect use case for this kind of tree, since there are a finite amount of letters that can be put together to make a string.

Each step, or node, in a language trie will represent one letter of a word. The steps begin to branch off when the order of the letters diverge from the other words in the trie, or when a word ends.

I created a trie out of directories on my Desktop to **_visualize_** stepping down through nodes. This is a trie that contains two words: apple and app.







![](https://cdn-images-1.medium.com/max/2000/1*vuZ47z2Ff_EyAuRi087ICQ.gif)

You can visualize stepping down through nodes in a trie as changing directories.







Note that the end of a word is denoted with a ‘$’. I’m using ‘$’ because it is a unique character that will not be present in any word in any language.

If I were to add the word ‘aperture’ to this trie, I would loop over the letters in the word ‘aperture’ while simultaneously stepping down the nodes in the trie. If the letter exists as a child of the current node, step down into it. If the letter does not exist as a child of the current node, create it and then step down into it. To visualize these steps using my directories:







![](https://cdn-images-1.medium.com/max/2000/1*zX2hBSdXJTGI0jMzYS3HfA.gif)







While stepping down the trie, the first two letters of ‘aperture’ are already present in the trie, so I step down into those nodes.

The third letter, ‘e’, however, is not a child of the ‘p’ node. A new node is created to represent the letter ‘e’, branching off from the other words in the trie. New nodes for the letters that follow are created as well.











* * *







To generate a trie from a words file, this process will happen for each word, until all combinations for every word are stored.

You might be thinking: “Wait, won’t it take really long to generate the trie from that text file with 235,887 words in it? What’s the point of looping over _every single character_ in every single word?”

Yes, iterating over each character of every word to generate a trie does take some time. However, the time taken to create the trie is _well worth it _— because to check if a word exists in the text file, it takes at most, as many operations as the _length of the word itself_. _Much better_ than the 235,887 operations it was going to take before.

I wrote the simplest version of a trie, using nested dictionaries. This isn’t the most efficient way to implement one, but it is a good exercise to understand the logic behind a trie.

<pre name="68e1" id="68e1" class="graf graf--pre graf-after--p">endOfWord = "$"</pre>

<pre name="6f80" id="6f80" class="graf graf--pre graf-after--pre">def generateTrieFromWordsArray(words):  
   root = {}  
   for word in words:  
      currentDict = root  
      for letter in word:  
         currentDict = currentDict.setdefault(letter, {})  
      currentDict[endOfWord] = endOfWord  
   return root</pre>

<pre name="490d" id="490d" class="graf graf--pre graf-after--pre">def isWordPresentInTrie(trie, word):  
   currentDict = trie  
   for letter in word:  
      if letter in currentDict:  
         currentDict = currentDict[letter]  
      else:   
         return False  
   return endOfWord in currentDict</pre>

You can see my [solution](https://github.com/juliascript/Python-Challenges/blob/master/accurateAnagram.py) for the anagram generator on my Github. Since exploring this algorithm, I’ve decided to make this blog post one of many — each post covering one algorithm or data structure. The code is available on my [Algorithms and Data Structures](https://github.com/juliascript/Algorithms-and-Data-Structures) repo — star it to stay updated!

### Next Steps

I suggest checking out Ray Wenderlich’s [trie repo](https://github.com/raywenderlich/swift-algorithm-club/tree/master/Trie). Although written in Swift, it’s a valuable source for explanations of various algorithms.

Similar to the trie (but more memory efficient) is a suffix tree, or radix. In short, instead of storing single characters at every node, the end of a word, its suffix, is stored and the paths are created relatively.

However, a radix is more complicated to implement than a trie. I suggest taking a look at Ray Wenderlich’s [radix repo](https://github.com/raywenderlich/swift-algorithm-club/tree/master/Radix%20Tree) if you’re interested.











* * *







This is the first post of my algorithm and data structures series. In each post, I’ll present a problem that can be better solved with an algorithm or data structure to illustrate the algorithm/data structure itself.

Star my [algorithms repo](https://github.com/juliascript/Algorithms) on Github and follow me on [Twitter](https://twitter.com/JuliaGeist) if you’d like to follow along!











* * *







Did you gain value by reading this article? [Click here](http://ctt.ec/X041V) to share it on Twitter! If you’d like to see content like this more often, follow me on Medium and subscribe to my once-a-month newsletter below.





<iframe data-width="800" data-height="400" width="700" height="350" src="https://medium.freecodecamp.org/media/3e2714046a76a3932d10982175eeeb01?postId=ee7ab3fe3413" data-media-id="3e2714046a76a3932d10982175eeeb01" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fupscri.be%2Fmedia%2Fform.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>












