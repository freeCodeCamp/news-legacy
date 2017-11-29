---
author: Vikash Singh
authorTwitter: https://twitter.com/vi3k6i5
authorFacebook: https://facebook.com/1041689419214801
title: "Regex was taking 5 days to run. So I built a tool that did it in 15 minutes."
subTitle: "When developers work with text, they often need to clean it up first. Sometimes it’s by replacing keywords. Like replacing “Javascript” w..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*QvHXLlSAuPZsQTycvcv9bQ.jpeg
url: https://medium.freecodecamp.org/regex-was-taking-5-days-flashtext-does-it-in-15-minutes-55f04411025f
id: regex-was-taking-5-days-flashtext-does-it-in-15-minutes-55f04411025f
date: 2017-11-08T19:40:48.467Z
tags: [
  "Data Science",
  "Machine Learning",
  "Python",
  "Programming",
  "Open Source"
]
---
# Regex was taking 5 days to run. So I built a tool that did it in 15 minutes.







![](https://cdn-images-1.medium.com/max/2000/1*QvHXLlSAuPZsQTycvcv9bQ.jpeg)

[dia057](https://unsplash.com/@dia057) | [Unsplash](http://unsplash.com/)







When developers work with text, they often need to clean it up first. Sometimes it’s by replacing keywords. Like replacing “Javascript” with “JavaScript”. Other times, we just want to find out whether “JavaScript” was mentioned in a document.

Data cleaning tasks like these are standard for most Data Science projects dealing with text.

### **Data Science starts with data cleaning.**

I had a very similar task to work on recently. I work as a Data Scientist at [Belong.co](https://belong.co/) and Natural Language Processing is half of my work.

When I trained a [Word2Vec](https://en.wikipedia.org/wiki/Word2vec) model on our document corpus, it started giving synonyms as similar terms. “Javascripting” was coming as a similar term to “JavaScript”.

To resolve this, I wrote a regular expression (Regex) to replace all known synonyms with standardized names. The Regex replaced “Javascripting”with “JavaScript”, which solved 1 problem but created another.

> Some people, when confronted with a problem, think   
> “I know, I’ll use regular expressions.” Now they have two problems.

The above quote is from this [stack-exchange question](https://softwareengineering.stackexchange.com/questions/223634/what-is-meant-by-now-you-have-two-problems) and it came true for me.

It turns out that Regex is fast if the number of keywords to be searched and replaced is in the 100s. But my corpus had over 20K keywords and 3 Million documents.

When I benchmarked my Regex code, I found it was going to take **5** **days** to complete one run.



![](https://cdn-images-1.medium.com/max/1600/1*GpNMd7fBtrH4TvVZRglfNg.jpeg)

oh the horror



The natural solution was to run it in parallel. But that won’t help when we reach 10s of millions of documents and 100s of thousands of keywords. **There had to be a better way!** And I started looking for it…

I asked around in my office and on Stack Overflow — a couple of suggestions came up. [Vinay Pandey](https://www.linkedin.com/in/vinay-pande-54810813/), [Suresh Lakshmanan](https://www.linkedin.com/in/suresh-lakshmanan/) and [Stack Overflow](https://stackoverflow.com/questions/44178449/regex-replace-is-taking-time-for-millions-of-documents-how-to-make-it-faster) pointed towards the beautiful algorithm called [Aho-Corasick algorithm](https://en.wikipedia.org/wiki/Aho%E2%80%93Corasick_algorithm) and the [Trie Data Structure](https://en.wikipedia.org/wiki/Trie) approach. I looked for existing solutions but couldn’t find much.

So I wrote my own implementation and [FlashText](https://github.com/vi3k6i5/flashtext) was born.

Before we get into what is FlashText and how it works, let’s have a look at how it performs for search:



![](https://cdn-images-1.medium.com/max/1600/1*WMgrVJmoke7ZIyYSuReEjw.png)

Red Line at the bottom is time taken by FlashText for Search



The chart shown above is a comparison of Complied Regex against FlashText for 1 document. As the number of keywords increase, the time taken by Regex grows almost linearly. Yet with FlashText it doesn’t matter.

#### **FlashText reduced our run time from 5 days to 15 minutes!!**



![](https://cdn-images-1.medium.com/max/1600/1*ZfRhHGtxhbEB0dS-3BHOAw.png)

we are good now :)



This is FlashText timing for replace:



![](https://cdn-images-1.medium.com/max/1600/1*doXUZk_bYVVvNf7O3JIQSw.png)

Red Line at the bottom is time taken by FlashText for Replace



Code used for the benchmark shown above is linked [here](https://gist.github.com/vi3k6i5/dc3335ee46ab9f650b19885e8ade6c7a), and results are linked [here](https://goo.gl/wWCyyw).

### **So what is FlashText?**

FlashText is a Python library that I open sourced on [GitHub](https://github.com/vi3k6i5). It is efficient at both extracting keywords and replacing them.

To use FlashText first you have to pass it a list of keywords. This list will be used internally to build a Trie dictionary. Then you pass a string to it and tell if you want to perform replace or search.

For `**replace**` it will create a new string with replaced keywords. For `**search**` it will return a list of keywords found in the string. This will all happen in one pass over the input string.

Here is what one happy user had to say about the library:





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/ee3ccc8f84e06b857c0db001c200a203?postId=55f04411025f" data-media-id="ee3ccc8f84e06b857c0db001c200a203" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F430457427444506624%2FBGtVG44p_400x400.jpeg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



[@RadimRehurek](https://twitter.com/RadimRehurek) is the creator of [@gensim_py](http://twitter.com/gensim_py "Twitter profile for @gensim_py").



### Why is FlashText so fast ?

Let’s try and understand this part with an example. Say we have a sentence which has 3 words `I like Python`, and a corpus which has 4 words `{Python, Java, J2ee, Ruby}`.

If we take each word from the corpus, and check if it is present in sentence, it will take 4 tries.

    is 'Python' in sentence? is 'Java' in sentence?

If the corpus had `n` words it would have taken `n` loops. Also each search step `is <word> in sentence?` will take its own time. This is kind of what happens in Regex match.

There is another approach which is reverse of the first one. For each word in the sentence, check if it is present in corpus.

    is 'I' in corpus?is 'like' in corpus?is 'python' in corpus?

If the sentence had `m` words it would have taken `m` loops. In this case the time it takes is only dependent on the number of words in sentence. And this step, `is <word> in corpus?` can be made fast using a dictionary lookup.

FlashText algorithm is based on the second approach. It is inspired by the Aho-Corasick algorithm and Trie data structure.

The way it works is:  
First a Trie dictionary is created with the corpus. It will look somewhat like this:



![](https://cdn-images-1.medium.com/max/1600/1*N09Y_XEQFhFMxVpgEeqExQ.png)

Trie dictionary of the corpus.



Start and EOT (End Of Term) represent word boundaries like `space`, `period` and `new_line`. A keyword will only match if it has word boundaries on both sides of it. This will prevent matching apple in pineapple.

Next we will take an input string `I like Python` and search it character by character.

<pre name="6a60" id="6a60" class="graf graf--pre graf-after--p">Step 1: is <start>I<EOT> in dictionary? No  
Step 2: is <start>like<EOT> in dictionary? No  
Step 3: is <start>Python<EOT> in dictionary? Yes</pre>



![](https://cdn-images-1.medium.com/max/1600/1*noWWci3fCrbcbrj40B4UaA.png)

<Start> Python <EOT> is present in dictionary.



Since this is a character by character match, we could easily skip `<start>like<EOT>` at `<start>l` because `l` is not connected to `start`. This makes skipping missing words really fast.

The FlashText algorithm only went over each character of the input string ‘I like Python’. The dictionary could have very well had a million keywords, with no impact on the runtime. This is the true power of FlashText algorithm.

### So when should you use FlashText?

Simple Answer: When Number of keywords > 500



![](https://cdn-images-1.medium.com/max/1600/1*_wjTfRdsnLKGnbr4VJ4Xqw.png)

For search FlashText starts outperforming Regex after ~ 500 keywords.



Complicated Answer:Regex can search for keywords based special characters like `^,$,*,\d,.` which are not supported in FlashText.

So it’s no good if you want to match partial words like ``word\dvec``. But it is excellent for extracting complete words like ``word2vec``.

### FlashText for finding keywords





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/606710959e67fc221f40ef3e01f44f77?postId=55f04411025f" data-media-id="606710959e67fc221f40ef3e01f44f77" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3116482%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



Simple extract example with FlashText



### **FlashText for replacing keywords**

Instead of extracting keywords you can also replace keywords in sentences. We use this as a data cleaning step in our data processing pipeline.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9f3f986634798e40ede57237355de5d1?postId=55f04411025f" data-media-id="9f3f986634798e40ede57237355de5d1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3116482%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



Simple replace example with FlashText



If you know someone who works with text data, Entity recognition, natural language processing, or Word2vec, please consider sharing this blog with them.

This library has been really useful for us, and I am sure it would be useful for others too.

So long, and thanks for all the claps 😊








