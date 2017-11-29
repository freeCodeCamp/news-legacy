---
author: Evaristo Caraballo
authorTwitter: none
authorFacebook: none
title: "Algorithms: The Good, The Bad and The Ugly"
subTitle: "Who has been in Free Code Camp without having the experience of spending hours trying to solve Algorithms?..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*IPP7m_tu5VwSLAr2XIwaiA.jpeg
url: https://medium.freecodecamp.org/algorithms-the-good-the-bad-and-the-ugly-e63db0a9cfb3
id: algorithms-the-good-the-bad-and-the-ugly-e63db0a9cfb3
date: 2016-03-23T03:45:46.993Z
tags: [
  "Web Development",
  "Programming",
  "Data",
  "Algorithms",
  "Technology"
]
---
# Algorithms: The Good, The Bad and The Ugly







![](https://cdn-images-1.medium.com/max/2000/1*IPP7m_tu5VwSLAr2XIwaiA.jpeg)

Photo credit: the Harvard Business Review







Who has been in Free Code Camp without having the experience of spending hours trying to solve **Algorithms**?

At Free Code Camp, we wanted to know why that was the case, and what more we could do to help you a bit.

We made two different analyses to have a better idea of what was going on. Data were collected between Nov 2014 to Dec 2015.

One of those analyses consisted of tracking the number of times people pasted their code to be checked by others in relevant Gitter chatrooms. We got data from the Gitter API. After some clean-up we tried to get the names of the functions of each challenge from posted messages at the Help chatroom. Although the data are not precise, it’s a good approximation of what could be happening.





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/4628e83e8a47c2081a69ab400f815e71?postId=e63db0a9cfb3" data-media-id="4628e83e8a47c2081a69ab400f815e71" allowfullscreen="" frameborder="0"></iframe>





The chart above speaks clearly on its own: algorithms like palindromes, title case, seek and destroy, longest word, reverse string, mutation or chunky monkey are those where many people ask for assistance.

Another analysis we made was to take the average time per page that each camper spent on each challenge, using Google Analytics data.





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/dfa5b822f09830cbe9233fcd8e950dbe?postId=e63db0a9cfb3" data-media-id="dfa5b822f09830cbe9233fcd8e950dbe" allowfullscreen="" frameborder="0"></iframe>





Again, the ugly ones are challenges like palindromes, but there are other ones that also look ugly (let’s say 1/4 of the average time per level over the same average time) **specially for basic and intermediate levels**, like Spinal Tap Case, Pig Latin, Search and Replace, Common Multiple, Sum All Primes, Steamroller, Friendly Date Range, Pairwise, and others.

Looking at the results, _can we suggest the factors that are affecting the performance of campers with the algorithms_?

The most apparent reasons, given in a tentative ordering, are:

*   Campers are finding hard to deal specially with _strings_, and **_Regex_** is a bad word, no matter the level!
*   There are some numeric challenges that are making camper’s life difficult, particularly _those which are suitable for recursive calls_.
*   Another common problem is dealing with _nested collections of arrays/objects_.
*   _Difficulty with concepts and definitions_ is usual. For example, the concept of “symmetric difference” (with a Free Code Camp algorithm with the same name) is usually troubling because many campers don’t understand the concept properly, despite the inclusion of a widely accepted mathematical definition.

Similarly, looking at the last chart you may be wondering _why the time per page seems not to reflect the difficulty of the problem_? One explanation could be that the basic and intermediate algorithms are been taken by campers who are just learning to code or seeing JavaScript for the first time. However this is a tentative explanation and may require more analyses.











* * *







If you are reading this and you have already suffered with some of the algorithms, you will realize that you are not alone. For those who are starting with algorithms, I would recommend the following:

*   Try to see if you can solve the easiest first: you might find some practice solving those that could help you to deal with the more difficult ones later…
*   Try to understand the problem! Start by asking what the problem is about.
*   Research. Check b0oks, references, and other online courses. And Share. We are offering a lot of help with likely a similar problem like yours. Ask in the chatroom. Send a message to CamperBot. Look at the Wiki. Try pair programming. Visit a Campsite and code with other campers in person. In one of the CodePens I made for this article, I also included links to the Free Code Camp wiki, so you can have a first overview of the problem and how it is normally solved.
*   You may already know that the problem is difficult: now the next step is trying to understand _why_ and _what_ make it so hard. This approach is key for algorithmic problem solving, and programming in general. Study, ask, and try again.
*   The data we used for these analyses were for last year: this year [SaintPeter](http://gitter.im/saintpeter) and friends have been working hard in modify the curriculum, so you may notice a difference in your performance if you work through the improved Basic JavaScript section. If you haven’t done the updated curriculum it may be helpful to revisit that section.
*   My bonus advice? Yes, try really hard yourself but… read other peoples’ code, too. When you read a book about JavaScript to learn programming, that is exactly what you are doing. Learn to reverse engineer existing code and to modify it to suit your needs. Why? First, no point in re-inventing the wheel. Second, you learn a lot by understanding the work of those who already solved the problem. Remember: you will find that most of the time you will be reusing modified snippets of a previous code into a new one. So no shame in reading other’s codes. That is part of the nature of Open Source, by the way…

Happy Coding!











* * *







I’m also working on related visualizations at [bl.ocks.org/evaristoc](http://bl.ocks.org/evaristoc).

This analysis just scratches the surface of what we can learn from [Free Code Camp’s open data](https://medium.freecodecamp.com/free-code-camp-christmas-special-giving-the-gift-of-data-6ecbf0313d62#.79rr68eop). Join our [Data Science chat room](http://gitter.im/freecodecamp/datascience) and help us make sense of all these data.








