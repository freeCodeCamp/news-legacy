---
author: Sofia Godovykh
authorTwitter: none
authorFacebook: https://facebook.com/1189268917795676
title: "How I used machine learning to explore the differences between British and American literature"
subTitle: "As I delved further into English literature to further my own language gains, my interest was piqued: how do American and British English..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*qjL1gt3ru64goK8PYlTjVw.jpeg
url: https://medium.freecodecamp.org/how-to-differentiate-between-british-and-american-literature-being-a-machine-learning-engineer-ac842662da1c
id: how-to-differentiate-between-british-and-american-literature-being-a-machine-learning-engineer-ac842662da1c
date: 2017-01-13T13:58:43.455Z
tags: [
  "Data Science",
  "Machine Learning",
  "Books",
  "Writing",
  "Technology"
]
---
# How I used machine learning to explore the differences between British and American literature







![](https://cdn-images-1.medium.com/max/2000/1*qjL1gt3ru64goK8PYlTjVw.jpeg)







As I delved further into English literature to further my own language gains, my interest was piqued: how do American and British English differ?

With this question framed in my mind, the next steps were to apply natural language processing and machine learning techniques to find concrete examples. I was curious to know whether it would be possible to train a classifier, which would distinguish literary texts.

It is quite easy to distinguish texts written in different languages since the cardinality of the intersection of words (features, in terms of machine learning) was relatively small. Text classification by category (such as science, atheism, computer graphics, etc.) is a well-known “hello world” when it comes to tasks related with working with text classification. I faced a more difficult task when I tried to compare two dialects of the same language, as texts have no common theme.

The most time consuming stage of machine learning deals with the retrieval of data. For the training sample, I used texts from Project Gutenberg, which can be freely downloaded. As for the list of American and British authors, I used names of authors I found in the Wikipedia.

One of the challenges I encountered was finding the name of the author of a text that matched the Wikipedia page. A good search by name was implemented on the site, but since the site doesn’t allow the parsing of data, I instead proposed to use files that contained metadata. This meant that I needed to solve a non-trivial task of matching names (Sir Arthur Ignatius Conan Doyle and Doyle, C. is the same person, but Doyle, M.E. is a different person) — and I had to do so with a very high level of accuracy.

Instead, I chose to sacrifice the sample size for the sake of attaining high accuracy, as well as saving some time. I chose, as a unique identifier, an author’s Wikipedia link, which was included in some of the metadata files. With these files, I was able to acquire about 1,600 British and 2,500 American texts and use them to begin training my classifier.

For this project I used sklearn package. The first step after the data collection and analysis stage is pre-processing, in which I utilized a CountVectorizer. A CountVecrorizer takes a text data as input and returns a vector of features as output. Next, I needed to calculate the **tf-idf** (term frequency — inverted document frequency). A brief explanation why I needed to use it and how:

For example, take the word “the” and count the number of occurrences of the word in a given text, A. Let’s suppose that we have 100 occurrences, and the total number of words in a document is 1000.

Thus,

`tf(“the”) = 100/1000 = 0.1`

Next, take the word “sepal”, which has occurred 50 times:

`tf(“sepal”) = 50/1000 = 0.05`

To calculate the inverted document frequency for these words, we need to take the logarithm of the ratio of the number of texts from which there is at least one occurrence of the word, to the total number of texts. If there are all 10,000 texts, and in each, there is the word “the”:

`idf(“the”) = log(10000/10000) = 0` and

`tf-idf(“the”) = idf(“the”) * tf(“the”) = 0 * 0.1 = 0`

The word “sepal” is way more rare, and was found only in the 5 texts. Therefore:

`idf(“sepal”) = log(10000/5) and tf-idf(“sepal”) = 7.6 * 0.05 = 0.38`

Thus, the most frequently occurring words carry less weight, and specific rarer ones carry more weight. If there are many occurrences of the word “sepal”, we can assume that this is a botanical text. We can not feed a classifier with words, we will use tf-idf measure instead.

After I had presented the data as a set of features, I needed to train the classifier. I was working with text data, which is presented as sparse data, so the best option is to use a linear classifier, which works well with large amounts of features.

First, I ran the CountVectorizer, TF-IDFTransformer and SGDClassifier using the default parameters. By analyzing the plot of the accuracy of the sample size — where accuracy fluctuated from 0.6 to 0.85 — I discovered that the classifier was very much dependent on the particular sample used, and therefore not very effective.

After receiving a list of the classifier weights, I noticed a part of the problem: the classifier had been fed with words like “of” and “he”, which we should have treated as a noise. I could easily solve this problem by removing these words from the features by setting the `stop_words` parameter to the CountVectorizer: `stop_words = ‘english’` (or your own custom list of stop words).

With the default stop words removed, I got an accuracy of 0.85\. After that, I launched the automatic selection of parameters using GridSearchCV and achieved a final accuracy of 0.89\. I may be able to improve this result with a larger training sample, but for now I stuck with this classifier.

Now on to what interests me most: which words point to the origin of the text? Here’s a list of words, sorted in descending order of weight in the classifier:

**American:** dollars, new, york, girl, gray, american, carvel, color, city, ain, long, just, parlor, boston, honor, washington, home, labor, got, finally, maybe, hodder, forever, dorothy, dr

**British:** round, sir, lady, london, quite, mr, shall, lord, grey, dear, honour, having, philip, poor, pounds, scrooge, soames, things, sea, man, end, come, colour, illustration, english, learnt

While having fun with the classifier, I was able to single-out the most “American” British authors and the most “British” American authors (a tricky way to see how bad my classifier could work).

**The most “British” Americans:**

*   Frances Hodgson Burnett (born in England, moved to the USA at age of 17, so I treat her as an American writer)
*   Henry James (born in the USA, moved to England at age of 33)
*   Owen Wister (yes, the father of Western fiction)
*   Mary Roberts Rinehart (was called the American Agatha Christie for a reason)
*   William McFee (another writer moved to America at a young age)

**The most “American” British:**

*   Rudyard Kipling (he lived in America several years, also, he wrote “American Notes”)
*   Anthony Trollope (the author of “North America”)
*   Frederick Marryat (A veteran of Anglo-American War of 1812, thanks to his “Narrative of the Travels and Adventures of Monsieur Violet in California, Sonara, and Western Texas” which made him fall into the american category)
*   Arnold Bennett (the author of “Your United States: Impressions of a first visit”) one more gentleman wrote travel notes
*   E. Phillips Oppenheim

And also the most “British” British and “American” American authors (because the classifier still works well):

**Americans:**

*   Francis Hopkinson Smith
*   Hamlin Garland
*   George Ade
*   Charles Dudley Warner
*   Mark Twain

**British:**

*   George Meredith
*   Samuel Richardson
*   John Galsworthy
*   Gilbert Keith Chesterton
*   Anthony Trollope (oh, hi)

I was inspired to do this work by @TragicAllyHere tweet:





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/0e95c84b9ed878fb3a3f701f59fe6cdb?postId=ac842662da1c" data-media-id="0e95c84b9ed878fb3a3f701f59fe6cdb" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F813401352164384773%2F_Gp8OvvD_bigger.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Well, wourds really matter, as I realised.








