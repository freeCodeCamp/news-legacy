---
author: Gil Fewster
authorTwitter: https://twitter.com/AGuyCalledGil
authorFacebook: https://facebook.com/10206483536386855
title: "The mind-blowing AI announcement from Google that you probably missed."
subTitle: "Disclaimer: I’m not an expert in neural networks or machine learning. Since originally writing this article, many people with far more ex..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*EhHUu6QJ1KbUDyW9a9ZEog.jpeg
url: https://medium.freecodecamp.org/the-mind-blowing-ai-announcement-from-google-that-you-probably-missed-2ffd31334805
id: the-mind-blowing-ai-announcement-from-google-that-you-probably-missed-2ffd31334805
date: 2017-01-06T05:38:53.988Z
tags: [
  "Machine Learning",
  "Technology",
  "Tech",
  "Artificial Intelligence",
  "Google"
]
---
# _The mind-blowing AI announcement from Google that you probably missed._







![](https://cdn-images-1.medium.com/max/2000/1*EhHUu6QJ1KbUDyW9a9ZEog.jpeg)

_The Tower of Babel (Marten van Valckenborch [Public domain], via_ [_Wikimedia Commons_](https://commons.wikimedia.org/wiki/File%3AMarten_van_Valckenborch_the_Elder_-_The_Tower_of_Babel_-_Google_Art_Project.jpg)_)_







**_Disclaimer_**_: I’m not an expert in neural networks or machine learning. Since originally writing this article, many people with far more expertise in these fields than myself have indicated that, while impressive, what Google have achieved is evolutionary, not revolutionary. In the very least, it’s fair to say that I’m guilty of anthropomorphising in parts of the text._

_I’ve left the article’s content unchanged, because I think it’s interesting to compare the gut reaction I had with the subsequent comments of experts in the field. I strongly encourage readers to browse the comments after reading the article for some perspectives more sober and informed than my own._











* * *







In the closing weeks of 2016, Google published an article that quietly sailed under most people’s radars. Which is a shame, because it may just be the most astonishing article about machine learning that I read last year.

Don’t feel bad if you missed it. Not only was the article competing with the pre-Christmas rush that most of us were navigating — it was also tucked away on Google’s Research Blog, beneath the geektastic headline [_Zero-Shot Translation with Google’s Multilingual Neural Machine Translation System_](https://research.googleblog.com/2016/11/zero-shot-translation-with-googles.html)_._

This doesn’t exactly scream _must read_, does it? Especially when you’ve got projects to wind up, gifts to buy, and family feuds to be resolved — all while the advent calendar relentlessly counts down the days until Christmas like some kind of chocolate-filled Yuletide doomsday clock.

Luckily, I’m here to bring you up to speed. Here’s the deal.

Up until September of last year, Google Translate used phrase-based translation. It basically did the same thing you and I do when we look up key words and phrases in our Lonely Planet language guides. It’s effective enough, and blisteringly fast compared to awkwardly thumbing your way through a bunch of pages looking for the French equivalent of “please bring me all of your cheese and don’t stop until I fall over.” But it lacks nuance.

Phrase-based translation is a blunt instrument. It does the job well enough to get by. But mapping roughly equivalent words and phrases without an understanding of linguistic structures can only produce crude results.

This approach is also limited by the extent of an available vocabulary. Phrase-based translation has no capacity to make educated guesses at words it doesn’t recognize, and can’t learn from new input.

All that changed in September, when Google gave their translation tool a new engine: the Google Neural Machine Translation system (GNMT). This new engine comes fully loaded with all the hot 2016 buzzwords, like _neural network_ and _machine learning_.

The short version is that Google Translate got smart. It developed the ability to learn from the people who used it. It learned how to make educated guesses about the content, tone, and meaning of phrases based on the context of other words and phrases around them. And — here’s the bit that should make your brain explode — it got creative.

Google Translate **invented its own language** to help it translate more effectively.

What’s more, nobody told it to. It didn’t develop a language (or [interlingua](https://en.wikipedia.org/wiki/Interlingua), as Google call it) because it was coded to. It developed a new language because the software determined over time that this was the most efficient way to solve the problem of translation.

Stop and think about that for a moment. Let it sink in. A neural computing system designed to translate content from one human language into another developed its own internal language to make the task more efficient. Without being told to do so. In a matter of weeks. _(I’ve added a correction/retraction of this paragraph in the notes)_

To understand what’s going on, we need to understand what zero-shot translation capability is. Here’s Google’s Mike Schuster, Nikhil Thorat, and Melvin Johnson from the original blog post:

> Let’s say we train a multilingual system with Japanese⇄English and Korean⇄English examples. Our multilingual system, with the same size as a single GNMT system, shares its parameters to translate between these four different language pairs. This sharing enables the system to transfer the “translation knowledge” from one language pair to the others. This transfer learning and the need to translate between multiple languages forces the system to better use its modeling power.

> This inspired us to ask the following question: Can we translate between a language pair which the system has never seen before? An example of this would be translations between Korean and Japanese where Korean⇄Japanese examples were not shown to the system. Impressively, the answer is yes — it can generate reasonable Korean⇄Japanese translations, even though it has never been taught to do so.

Here you can see an advantage of Google’s new neural machine over the old phrase-based approach. The GMNT is able to learn how to translate between two languages without being explicitly taught. This wouldn’t be possible in a phrase-based model, where translation is dependent upon an explicit dictionary to map words and phrases between each pair of languages being translated.

And this leads the Google engineers onto that truly astonishing discovery of creation:

> The success of the zero-shot translation raises another important question: Is the system learning a common representation in which sentences with the same meaning are represented in similar ways regardless of language — i.e. an “interlingua”? Using a 3-dimensional representation of internal network data, we were able to take a peek into the system as it translates a set of sentences between all possible pairs of the Japanese, Korean, and English languages.

> Within a single group, we see a sentence with the same meaning but from three different languages. This means the network must be encoding something about the semantics of the sentence rather than simply memorizing phrase-to-phrase translations. We interpret this as a sign of existence of an interlingua in the network.

So there you have it. In the last weeks of 2016, as journos around the world started penning their “was this the worst year in living memory” thinkpieces, Google engineers were quietly documenting a genuinely astonishing breakthrough in software engineering and linguistics.

I just thought maybe you’d want to know.











* * *







Ok, to _really_ understand what’s going on we probably need multiple computer science and linguistics degrees. I’m just barely scraping the surface here. If you’ve got time to get a few degrees (or if you’ve already got them) please drop me a line and explain it all me to. Slowly.

**_Update 1_**_: in my excitement, it’s fair to say that I’ve exaggerated the idea of this as an ‘intelligent’ system — at least so far as we would think about human intelligence and decision making. Make sure you read_ [_Chris McDonald’s comment_](https://medium.com/@chrismcdonald_94568/ok-slow-down-516f93f83ac8?source=linkShare-36020d726097-1483872852) _after the article for a more sober perspective._

**_Update 2_**_:_ [_Nafrondel’s excellent, detailed reply_](https://medium.com/@nafrondel/you-requested-someone-with-a-degree-in-this-holds-up-hand-d4bf18e96ff?source=linkShare-36020d726097-1483995348) _is also a must read for an expert explanation of how neural networks function._








