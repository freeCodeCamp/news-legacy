---
author: Gilbert
authorTwitter: https://twitter.com/gilbertginsberg
authorFacebook: none
title: "How to use spaced repetition with Anki to learn to code faster"
subTitle: "Imagine you could speed up your learning and better remember programming fundamentals, techniques, and commands...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*Nhu0oiFBy4jJLlpJpRWGtA.jpeg
url: https://medium.freecodecamp.org/use-spaced-repetition-with-anki-to-learn-to-code-faster-7c334d448c3c
id: use-spaced-repetition-with-anki-to-learn-to-code-faster-7c334d448c3c
date: 2017-01-18T23:57:01.848Z
tags: [
  "Web Development",
  "Programming",
  "Life Lessons",
  "Productivity",
  "Self Improvement"
]
---
# How to use spaced repetition with Anki to learn to code faster







![](https://cdn-images-1.medium.com/max/2000/1*Nhu0oiFBy4jJLlpJpRWGtA.jpeg)

[https://unsplash.com/search/photos/clock?photo=0gdHUhYkXDc](https://unsplash.com/search/photos/clock?photo=0gdHUhYkXDc)







Imagine you could speed up your learning and better remember programming fundamentals, techniques, and commands.

Today I tell you how to do just that, using **spaced repetition** and a free open source tool called **Anki**.

Many have attested to the benefits of spaced repetition:

*   Jeopardy! champion [Robert Craig](https://en.wikipedia.org/wiki/Roger_Craig_%28Jeopardy!_contestant%29) says he owes some of his success to using Anki for memorizing trivia.
*   [Googley as Heck](https://medium.com/@googleyasheck), who studied full-time for 8 months for a [Google interview](https://medium.freecodecamp.com/why-i-studied-full-time-for-8-months-for-a-google-interview-cc662ce9bb13#.3d9qfnhq5), says “_Spaced repetition is the key to memorization…You become an expert by revisiting and reviewing over time. If you do so, you’ll get to the point where [you] can’t forget details_.”
*   And [Derek Sivers](https://sivers.org/), founder of CDBaby, [writes](https://sivers.org/srs) that spaced repetition is “_the most helpful learning technique I’ve found in 14 years of computer programming_.”

For me personally, Anki has been an indispensable part of my effort to learn to code. I use it to remember important ideas from HTML, CSS, JavaScript, and commands from Git and Bash.

I’m currently in deferral at UC-Berkeley Law School, and Anki will 100% be part of my strategy to master the law.

In this article, I’ll cover:

*   What spaced repetition is
*   How Anki helps with spaced repetition
*   And how these can speed up your learning and improve your retention of programming concepts.

### What is Spaced Repetition?

[Spaced repetition](https://en.wikipedia.org/wiki/Spaced_repetition) seeks to solve the [problem of forgetting](https://www.supermemo.com/english/princip.htm#optimal_intervals). It holds that the ideal moment to remember a new piece of information is _at the moment_ you are about to forget it.

For example, suppose you don’t know the capital of [Colombia](https://en.wikipedia.org/wiki/Colombia). And suppose right now I tell you what the capital of Colombia is.

_The capital of Colombia is Bogotá_.

Let’s assume your memory is such that you’ll remember this new fact—that the capital of Colombia is Bogotá—after your very first exposure to it, for a clean **20 minutes**. After which you’ll forget.

But, if at **19 minutes and 59 seconds**, while we’re having a cup of coffee, I _remind_ you…

_The capital of Colombia is Bogotá_.

…spaced repetition theory says you’ll be able to remember Bogotá is the capital of Colombia for now say **40 minutes**. After which you’ll forget.

But, if I remind you again **39 minutes and 59 seconds later** that…

_The capital of Colombia is Bogotá_.

…you’ll be able to retain this piece of geographic trivia in memory for an even longer period, let’s say up to **one hour.**

And if we continue to proceed in this manner, where I keep reminding you the capital of Colombia is Bogotá _precisely_ at the moment you’re about to forget, the time in between memory lapses _grows_ exponentially from hours to days, then to months, then to years.

And eventually, as the theory goes, the knowledge — that Bogotá is the capital of Colombia — will be more or less permanently lodged in your memory.

This notion of a decline in memory over time is known as the [forgetting curve](https://en.wikipedia.org/wiki/Forgetting_curve), and it wasdeveloped by [Herman Ebbinghau](https://en.wikipedia.org/wiki/Hermann_Ebbinghaus)s in 1885.



![](https://cdn-images-1.medium.com/max/1600/1*c3w0iz7p9DWpQSj7XqmY1A.jpeg)

Stahl et al 2010; CNS Spectr



And this idea — that it’s more efficient and effective to space out learning over time as opposed to cramming — is known as the [spacing effect](https://en.wikipedia.org/wiki/Spacing_effect).

Together, the forgetting curve and the spacing effect are the fundamental concepts behind spaced repetition.

Depending on your forgetting curve, you determine the [optimal interval](http://www.lac.ane.pl/pdf/5409.pdf) to remind yourself of a memory item (meaning any piece of information), and you space out reinforcement of the memory item accordingly. Piotr Woźniak, a pioneer in memory research, [sums up](https://www.supermemo.com/english/princip.htm#optimal_intervals) these ideas:

> Optimum intervals are calculated on the basis of two contradictory criteria:

> 1\. Intervals should be as long as possible to obtain the minimum frequency of repetitions, and to make the best use of the so-called spacing effect, which says that longer inter-repetition intervals, up to a certain limit, produce stronger memories

> 2\. Intervals should be short enough to ensure that the knowledge is still remembered

At this point, you might be asking, “but how do you know _precisely_ the moment you’re about to forget that the capital of Colombia is Bogotá? How do you know what your optimal interval is?”

Of course it’d be quite difficult to know down to the second without much painstaking trial-and-error and a Charles Darwin-level attention to detail. But fortunately we don’t need such diligence because a familiar friend can help us: **software**.

(You can also use a non-automated system called the [Leitner system](https://en.wikipedia.org/wiki/Leitner_system).)

Software, built on a mountain of memory research, can help you determine the optimal time to reinforce memorization. And specifically **Spaced Repetition Software**.

### What is Anki?

[Anki](https://apps.ankiweb.net/) is an [open source](https://github.com/dae/anki) Spaced Repetition Softwaretool developed and maintained by [Damien Elmes](https://github.com/dae/).You can think of it as a kind of “smart flashcard program” that leverages spaced repetition and makes memorization more efficient.

Anki is built on top of the premise that you best remember knowledge with periodic and strategically-timed reminders. Which means it’s built on top of the powers of spaced repetition.



![](https://cdn-images-1.medium.com/max/1600/1*l6mAoZYJLYcLwM5668Gj9g.jpeg)

[Image credit](https://www.wired.com/2008/04/ff-wozniak/)



You can use Anki to remember virtually anything that needs remembering.

Note, however, Anki is not a replacement for _learning_. You must first understand the material you’re learning, and then commit it to Anki, which will brilliantly help you retain the knowledge you’ve acquired. Meaning Anki is a part of the learning process that comes after understanding.



![](https://cdn-images-1.medium.com/max/1600/1*LfVvr853umx3hAWSUcpl0w.png)

[Image credit](https://www.gwern.net/Spaced%20repetition)



There’s other space repetition software in the world such as [SuperMemo](https://www.supermemo.com/english/smintro.htm), created by the aforementioned Piotr Woźniak. Anki in fact implements a version of the [algorithm](https://en.wikipedia.org/wiki/Anki_%28software%29) that powers SuperMemo.

I focus here on Anki because it’s what I’ve become accustomed to, it works well, and it’s open source and free. If you’ve used SuperMemo or another SRS tool, let us know about your experience in the comments.

If you end up deciding to use Anki too, I nonetheless encourage you to [read up](https://www.wired.com/2008/04/ff-wozniak/?currentPage=all) on Woźniak and what he’s had to say about memory and learning and [creativity](https://www.supermemo.com/articles/genius.htm) because it’s highly insightful.

As far as devices go, Anki comes in a desktop version which, if you haven’t used Anki before, is recommended you start with. There’s also:

*   A free companion web app, [AnkiWeb](https://apps.ankiweb.net/).
*   A free companion Android app [AnkiDroid](https://play.google.com/store/apps/details?id=com.ichi2.anki&hl=en), fully compatible and synchronizable with Anki desktop/web.
*   And for iPhone users, a $24.99 companion app [AnkiMobile](https://itunes.apple.com/us/app/ankimobile-flashcards/id373493387?mt=8) in the AppStore.

### How Anki works

Know that you can go [deep](https://apps.ankiweb.net/docs/manual.html) into how you use and configure Anki. I only give you a high-level overview so you get the gist.

1.  You create “**_decks_**,” which are a group of cards representing a broad category. For example, “JavaScript” or “Capitals” might be a deck.

Here’s an example of an Anki deck in the desktop app. (Don’t worry about the “New,” “Learning,” “To Review” for now. I’ll come back to these in a moment):



![](https://cdn-images-1.medium.com/max/1600/1*G6dFjJv4C-aebJG0bqfR5g.png)

Example Anki deck



2\. You add “**_cards_**” to your decks, which are customizable with HTML and CSS.

A card might be a standard front-and-back flashcard, where you’re first presented with the front. Here’s an example from a deck on “Capitals”:



![](https://cdn-images-1.medium.com/max/1600/1*xMUqaWGK7vWigULSD002zQ.png)

Example Anki card — front of Basic type



And when you’re ready for the answer, you hit **Show Answer** to reveal the answer on the back of the card:



![](https://cdn-images-1.medium.com/max/1600/1*gHD_2_ZdVnW_MTEa38bSRA.png)

Anki card — front and back of Basic type



ProTip: there are other card types, besides the front-and-back flashcard type, like [cloze deletion](https://en.wikipedia.org/wiki/Cloze_test) you’ll want to become familiar with. Cloze deletion is a particularly useful card type I use all the time (in fact most of my cards use cloze deletion) because it’s simple and effective at organizing information.

ProTip: creating Anki cards is an art. And the more you practice, the better you’ll get. As a rule-of-thumb, you’ll want to try to follow the [minimum information principle](https://www.supermemo.com/en/articles/20rules), which essentially means:

KISS — Keep it Simple Stupid. You want to keep your cards as simple as possible because simple is easier to remember.

3\. Once you’re done adding cards, you Anki (practice).

Let’s look back at the Colombia-Bogotá card to see how the process works.



![](https://cdn-images-1.medium.com/max/1600/1*-rlXcih01yCoCUFwEt7TVw.png)

Choose when you’d like to be reminded again



After you click **Show Answer** and you’re brought to the back of the card, you ask yourself:

_How difficult was it to come up with the answer?_

*   If you didn’t know the answer, you might choose **Again**, which will expose you to the card again in **less than a minute**.
*   If you came up with the answer after pausing and digging into your memory bank, you might select **Good**, which will show you the card again in **less than 10 minutes**.
*   And if the answer was easy, you choose **Easy** and you won’t see the card again for **four days**.

Anki’s program then keeps track of the state of your progress: which cards to review and when. Which means Anki is doing the tedious work of tracking your forgetting curve for each and every card.

This is the power of automating spaced repetition with software.

I should point out that you can change some of the variables of Anki’s spaced repetition algorithm. You do so by going into your deck options and customizing what you want to customize, such as the number of reviewable cards per day, the time interval options, among other variables.



![](https://cdn-images-1.medium.com/max/1600/1*TXq65nhVlTlh9w23St4ajw.png)

Customizing your deck options



In the beginning, though, perhaps you might want to leave these settings alone and just use the defaults. And as you become more comfortable with Anki, you can start to be creative with the deck options.

To re-visit our JavaScript deck:



![](https://cdn-images-1.medium.com/max/1600/1*G6dFjJv4C-aebJG0bqfR5g.png)

Example Anki deck



*   **New** means you’ve added 4 new cards to your JavaScript deck and they’re ready to be reviewed
*   **Learning** means, if you’re in the middle of working through a deck and you chose, say, **Good <10m**, Anki will store that card in the learning queue and show it to you again in 10 minutes. See [here](https://apps.ankiweb.net/docs/manual.html#learning) for more details.
*   **To Review** means the number of cards outstanding for review.

And all this will become much clearer the more and more you use Anki.

### How to get started with Anki

Regarding tutorials and how to use Anki, the [docs](https://apps.ankiweb.net/docs/manual.html) on the website are phenomenal and will probably answer most of your questions. And there are also a few helpful [video tutorials](https://www.youtube.com/channel/UCFt1oYUNiwkMaJTSZiFEodQ).

In the meantime I give you a checklist on how to get started with Anki because [checklists](https://www.amazon.com/Checklist-Manifesto-How-Things-Right/dp/0312430000) can be helpful.

1\. Read Derek Siver’s [article](https://sivers.org/srs) on spaced repetition because it reinforces much of what I talked about.

2\. Read this Wired [interview](https://www.wired.com/2008/04/ff-wozniak/) with Piotr Woźniak because it gives you a holistic overview of spaced repetition, learning, and memory research.

3\. Read [Effective learning: Twenty rules of formulating knowledge](https://www.supermemo.com/en/articles/20rules) by Piotr Woźniak because it gives you techniques for how to formulate and structure your Anki cards.

Notably, remember that spaced repetition is not a substitute for learning. It is critical you first understand the material before you commit it to spaced repetition. First understand and then reinforce with Anki. Remember to use the KISS method to create cards, and to use imagery in your cards when possible.

4\. Create your own decks.

5\. Remember to keep your decks broad and general. For example, if you’re learning JavaScript, don’t create one deck called “Closures” and another called “Prototypal inheritance.” Instead create one “JavaScript” deck. Refer to [Using Decks Appropriately](https://apps.ankiweb.net/docs/manual.html#manydecks) in the documentation for more details.

6\. Become one with [cloze deletion](https://www.youtube.com/watch?v=FnrigOzpJQo) because it’ll help your learning tremendously.

7\. Understand the downsides.

There are a few downsides to space repetition. Interference in recall is one.

For instance, you can imagine experiencing interference in recall with, say, the capitals of Martinique, Marituania, and Mauritius because they’re all similarly named.

Some interference is hard to escape, and you might want to implement other memory hacks in such cases. But you can limit the downside by keeping your cards simple.

Learn more about the downsides [here](https://www.gwern.net/Spaced%20repetition) (scroll down to downsides) and [here](https://www.supermemo.com/en/articles/20rules) (scroll down to combat interference).

9\. Remember to keep your cards and decks synced. Choose one “home base” like the desktop version and then sync with AnkiWeb and one of the mobile apps each time you make a change. You put in effort to create your cards and decks. Avoid the headache of having to redo your work.

9\. Make Anki a habit. In order to see the fruits of Anki’s magic, you must make a decision and commit to going through your cards every day they’re due. Associate Anki with a cup of coffee. Or the morning. Or lunch time. Or something positive. Find ways to make Anki a habit.











* * *







#### **To review:**

*   Spaced repetition is the idea that you most effectively remember a piece of information if you’re exposed to it at the moment of forgetting.
*   Anki automates spaced repetition. This makes for an incredibly efficient and useful memorization tool.
*   Anki can help you build up your knowledge base of computer programming fundamentals, techniques, and best practices.
*   In addition to computer programming knowledge, you can use Anki to remember anything else you want to add to your memory.
*   Remember: Anki is a part of the learning process, not a replacement. You must first understand. And then use Anki.

If you have questions, you can tweet me at [@gilbertginsberg](https://twitter.com/gilbertginsberg) or find me at [GilbertIndex](https://goo.gl/DgxjEj).

#### **Further reading:**

*   [Spaced repetition](https://en.wikipedia.org/wiki/Spaced_repetition), Wikipedia
*   [Forgetting curve](https://en.wikipedia.org/wiki/Forgetting_curve), Wikipedia
*   [Spacing effect](https://en.wikipedia.org/wiki/Spacing_effect), Wikipedia
*   [Hermann Ebbinghaus](https://en.wikipedia.org/wiki/Hermann_Ebbinghaus), Wikipedia
*   [Leitner system](https://en.wikipedia.org/wiki/Leitner_system), Wikipedia
*   [Damien Elmes](https://github.com/dae/anki), creator of Anki
*   [Anki docs](https://apps.ankiweb.net/docs/manual.html)
*   [General principles of SuperMemo](https://www.supermemo.com/english/princip.htm) by Piotr Woźniak
*   [The roots of creativity and genius](https://www.supermemo.com/articles/genius.htm) by Piotr Woźniak
*   [Optimization of repetition spacing in the practice of learning](http://www.lac.ane.pl/pdf/5409.pdf) by Piotr Woźniak and Edward J. Gorzelanczyk
*   [Want to Remember Everything You’ll Ever Learn? Surrender to This Algorithm](https://www.wired.com/2008/04/ff-wozniak/?currentPage=all) by Gary Wolf in Wired
*   [Memorizing a programming language using spaced repetition software](https://sivers.org/srs) by Derek Sivers
*   [Using spaced repetition systems to learn and retain technical knowledge.](https://www.jackkinsella.ie/articles/janki-method) by Jack Kinsella
*   [Spaced repetition](https://www.gwern.net/Spaced%20repetition) by [@gwern](https://twitter.com/gwern)








