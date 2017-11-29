---
author: Amber Thomas
authorTwitter: https://twitter.com/ProQuesAsker
authorFacebook: none
title: "Women only said 27% of the words in 2016’s biggest movies."
subTitle: "Movie trailers in 2016 promised viewers so many strong female characters. Jyn Erso. Dory. Harley Quinn. Judy Hopps. Wonder Woman. I felt ..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*92SrZzQkJAqwJoHu1xPneQ.jpeg
url: https://medium.freecodecamp.org/women-only-said-27-of-the-words-in-2016s-biggest-movies-955cb480c3c4
id: women-only-said-27-of-the-words-in-2016s-biggest-movies-955cb480c3c4
date: 2017-01-12T13:56:31.888Z
tags: [
  "Movies",
  "Women In Tech",
  "Data Science",
  "Feminism",
  "Web Development"
]
---
# Women only said 27% of the words in 2016’s biggest movies.







![](https://cdn-images-1.medium.com/max/2000/1*92SrZzQkJAqwJoHu1xPneQ.jpeg)

Image by: [Animoplex](http://animoplex.com/)







Movie trailers in 2016 promised viewers so many strong female characters. Jyn Erso. Dory. Harley Quinn. Judy Hopps. Wonder Woman. I felt like this could be the year for gender equality in Hollywood’s biggest films.

I was wrong.

And I don’t make this statement lightly.

As a scientist, I turn to data to answer questions I have about the world. And I’ve got the data to back up my claim. In fact, you can have the data, code, and resulting [data visualization](https://proquestionasker.github.io/projects/MovieDialogueInteractive/) that I made trying to better understand this topic. But first, let me tell you how I became so interested.

It all started when I went to see Rogue One: A Star Wars Story. All promotional materials for the movie indicated that Jyn Erso (played by Felicity Jones) was the main character. I mean, just look at the poster.



![](https://cdn-images-1.medium.com/max/1600/1*wEaxUjOocqR_ObtsKJaz0w.jpeg)



When your picture is several times larger than everyone else’s, you’re probably the main character.

What I didn’t notice at first was that Jyn is the only woman on that poster.

I went into the movie theater expecting to see men and women fighting side by side. I left feeling certain that I could count every female character from the movie on one hand. While Jyn _was_ the main character, I was profoundly aware that she was often the only woman in any scene.

It felt strangely familiar to have a lead female character be so outnumbered. Then I realized that Jyn and Princess Leia suffered the same inequality 39 years apart. I was overwhelmed with a need to know exactly how female representation in Star Wars movies has changed. But it seemed unfair to compare movies made today with movies made decades ago.

So instead, I decided to look for female equality across the Top 10 Worldwide [Highest Grossing Films](http://www.the-numbers.com/movie/records/worldwide/2016) of 2016\. They were:

*   [Captain America: Civil War](http://www.imdb.com/title/tt3498820/?ref_=nv_sr_1)
*   [Finding Dory](http://www.imdb.com/title/tt2277860/?ref_=nv_sr_1)
*   [Zootopia](http://www.imdb.com/title/tt2948356/?ref_=nv_sr_1)
*   [The Jungle Book](http://www.imdb.com/title/tt3040964/?ref_=nv_sr_1)
*   [The Secret Life of Pets](http://www.imdb.com/title/tt2709768/?ref_=nv_sr_1)
*   [Batman V. Superman: Dawn of Justice](http://www.imdb.com/title/tt2975590/?ref_=nv_sr_1)
*   [Rogue One: A Star Wars Story](http://www.imdb.com/title/tt3748528/?ref_=nv_sr_2)
*   [Deadpool](http://www.imdb.com/title/tt1431045/?ref_=nv_sr_1)
*   [Fantastic Beasts and Where to Find Them](http://www.imdb.com/title/tt3183660/?ref_=nv_sr_1)
*   [Suicide Squad](http://www.imdb.com/title/tt1386697/?ref_=nv_sr_1)

With so many powerful women in these films, some of them must be gender-equal, right?

### **The Data**

Now that I decided what I wanted to investigate, I needed to figure out how to do it. Similar data exploration projects have focused on [dialogue](http://polygraph.cool/films/) or [screen-time](https://seejane.org/research-informs-empowers/data/) equality. Both seemed like good options, but I wanted the ability to report on equality at the movie and character level.

In the end, I decided to explore the movies’ dialogue. This choice gave me the ability to focus on characters with an active role in the story and to cut non-speaking characters from my analysis.

Luckily for me, dedicated movie fans often transcribe a movie’s dialogue and make it freely available online. If I couldn’t find a transcript, I used closed-caption files instead. For those, I re-watched the movie and manually assigned characters to their spoken lines.

This process was a labor of love. It was time consuming, but I have no regrets.

### Analysis

Once I had all of the transcripts, I just needed to read the .txt files into [R](https://cran.r-project.org/) and separate the characters from their lines. For the Rogue One transcript, that process looked like this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/f0b0abf710a22cdf2836cff8e396278a?postId=955cb480c3c4" data-media-id="f0b0abf710a22cdf2836cff8e396278a" allowfullscreen="" frameborder="0"></iframe>





Now that I had a data frame with both Character and Words columns, I had to assign genders to each Character. To remain consistent with my categorizations, I came up with a few simple rules:

1.  When possible, assign gender according to the pronouns that other characters use. For example, if a character is referred to by others as “he” or “him”, then he is categorized as “male”.
2.  If there is no pronoun used throughout the movie but the character is named or credited (on [IMDB](http://www.imdb.com/)), use the gender of the actor or actress. Note that the gender of an actor or actress was assumed based on publicly available information as of January 2017.
3.  If no pronoun is used for the character and the character is not named or credited, refer to the closed captions. Sometimes they will identify the character that spoke.
4.  If all else fails, make an educated guess based on the character’s voice.

I’ll be the first to say that these methods are not perfect. In fact, here are some caveats:

1.  If a male character was voiced by a female actress (or vice versa) and the character was never addressed by other characters using pronouns, he may be incorrectly labelled. (I don’t think this happened, but anything is possible.)
2.  Voices that are not associated with a physical embodiment of a character (e.g., the voice of a computer) were categorized according to the gender of their voice actor/actress.
3.  I can never _really_ know the gender of any character, but I’m using the cues and information that I have at my disposal.

Again, I am far from infallible, so if you caught a mistake on my part, please [let me know](https://proquestionasker.github.io/contact/).

So now I just needed to count the number of words spoken by each character. Again, I was able to do this in R using the `dplyr` and `stringi` packages.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/dd6fe3efd2f63f9b45b863d5ff8d344e?postId=955cb480c3c4" data-media-id="dd6fe3efd2f63f9b45b863d5ff8d344e" allowfullscreen="" frameborder="0"></iframe>





It’s worth noting that I included every speaking character in this analysis. So yes, every stormtrooper who shouts a simple “Wait, stop!” before getting shot is included.



![](https://cdn-images-1.medium.com/max/1600/1*Nix-DNJovl_3XwRVmJPc8Q.jpeg)

Spoiler Alert: The stormtroopers in Rogue One are all voiced by men.



### Data Visualization

I had my data. Unfortunately, tables upon tables of word counts and character names don’t give anyone much insight. Like any good data exploration project, it was time to visualize my results. I had to work through a few iterations before I found the best one.

Scatterplots and bar charts both masked characters with small roles.







![](https://cdn-images-1.medium.com/max/2000/1*79391ccZ2PRJ3bUjdtzOHA.jpeg)







A simple bubble chart was better but it became difficult to identify individual characters. It was also challenging to understand movie-level statistics.



![](https://cdn-images-1.medium.com/max/1600/1*ztI4yRBsYS7iKaJqe6D8PA.jpeg)

Which bubble is which?!



In the end, I decided to learn enough d3.js to make [an interactive graphic](https://proquestionasker.github.io/projects/MovieDialogueInteractive/). Here, each bubble represents a character, and the bubble’s area is scaled based on the number of words spoken. Female and male bubbles can be separated for better insight. The stacked bars below indicate movie-level information.



![](https://cdn-images-1.medium.com/max/1600/1*MH6WhQJc64Sy_ASXfSi9pA.gif)

Full interactive version [here](https://proquestionasker.github.io/projects/MovieDialogueInteractive/)



Go ahead, check out the [full interactive version](https://proquestionasker.github.io/projects/MovieDialogueInteractive/).

Interested in exploring the raw word-count data for yourself? I’ve made all of the data and code used to generate these visualizations open source. It’s available [here](https://github.com/ProQuestionAsker/2016MovieDialogue):

[**ProQuestionAsker/2016MovieDialogue**  
_Contribute to 2016MovieDialogue development by creating an account on GitHub._github.com](https://github.com/ProQuestionAsker/2016MovieDialogue "https://github.com/ProQuestionAsker/2016MovieDialogue")[](https://github.com/ProQuestionAsker/2016MovieDialogue)

### Takeaways

Ok, so the analysis is done. I’ve got a fancy (and fun-to-play-with) visualization. What did I find?

I recommend taking a quick second to look at something “a-Dory-ble” before going on, because this post is about to get real depressing real fast.







![](https://cdn-images-1.medium.com/max/2000/1*MHd8U2CfQdn4uO32Kz7jbA.jpeg)







Aw, so cute. Feeling good?

All right, here we go.

This is a static version of what the visualization for all 10 movies looks like:

_(If you’d like to check out the interactive visualization, go_ [_here_](https://proquestionasker.github.io/projects/MovieDialogueInteractive/)_.)_







![](https://cdn-images-1.medium.com/max/2000/1*8KRKoDWaCXmD2Vc8CTR2Hg.jpeg)

The interactive version of this visualization can be found [here](https://proquestionasker.github.io/projects/MovieDialogueInteractive/).







There are a couple of things here that I need to point out:

**Not one of the top 10 movies of 2016 had a 50% speaking, female cast.**

Finding Dory was the closest to this level of equality with 43% female characters. To be equal, the movie would have needed 8 more speaking, female roles.

Rogue One was the worst. Only 9% of its speaking characters were female. Of those 10 characters, 1 was a computer voice, 1 appeared on screen for no more than 5 seconds, and 1 was a CGI cameo that said 1 word.

**Only 1 of 2016’s top 10 movies had 50% dialogue by a female character.**

Finding Dory comes out on top here too with 53% female dialogue. But, 76% of that dialogue came from Dory alone.

Trailing at the end was The Jungle Book with only 10% of its dialogue spoken by a female character. Keep in mind, this is _after_ casting Scarlett Johansson as the voice of the historically-male snake, Kaa.



![](https://cdn-images-1.medium.com/max/1600/1*6ntt5aIdPDh-w-gpxh71AA.png)

We’re gender equal….Trusssssssst in me….



Here’s a few more:

*   Finding Dory and Zootopia were the only 2 movies in 2016’s top 10 in which a female character had the most dialogue.
*   Female characters were outnumbered in Captain America: Civil War’s final battle 5:1\. Throughout the movie, they only contributed 16% of the dialogue.
*   Batman spoke 2.4 times more than Superman and 6 times more than Wonder Woman in Batman V. Superman.
*   78% of the female-spoken lines in Rogue One came from Jyn Erso.
*   While Harley Quinn was a highly advertised character in Suicide Squad, she only spoke 42% as many words as Floyd/Deadshot (played by Will Smith). Notably, Amanda Waller (played by Viola Davis) spoke frequently, totaling just 222 words (16%) short of Deadshot’s word count.

I started this project because I had a feeling that Rogue One’s cast and dialogue were not equally divided between male and female characters. I was shocked (and saddened) to find that almost none of the top 10 movies from last year were gender equal.

We can do better.











* * *







_Added_: If you’re looking for more studies and data explorations like this, check out:

*   [Inequality in 800 popular films from 2007–2015](http://annenberg.usc.edu/sitecore/shell/Controls/Rich%20Text%20Editor/~/media/10575E37F34248C585602A69C18F2CBE.ashx) (includes gender, race/ethnicity, sexual orientation, and disability)
*   [This exploration](http://polygraph.cool/films/) of 2000 randomly selected movie scripts from 1980’s — 2010's
*   [This research](https://seejane.org/research-informs-empowers/data/) on 200 biggest movies from 2014 & 2015
*   [Female representations in 2014’s biggest movies](http://womenintvfilm.sdsu.edu/files/2014_Its_a_Mans_World_Report.pdf)
*   [This Twitter thread](https://twitter.com/haleshannon/status/811669382065590272) about gender equality in 2016’s animated films

TL;DR Version: Women represent (on average) 30–35% of speaking roles across each of these investigations.











* * *







_Added_: Have questions or comments about my methodology or conclusions? Check out my follow-up article featuring the most frequently asked questions.

[**I analyzed the dialogue in 2016’s biggest movies and it started a lot of conversations.**  
_A few weeks ago I published a story about my analysis of the dialogue in 2016’s 10 Highest Grossing Films. I am so…_medium.com](https://medium.com/@ProQuesAsker/i-analyzed-the-dialogue-in-2016s-biggest-movies-and-it-started-a-lot-of-conversations-b9c815f24313 "https://medium.com/@ProQuesAsker/i-analyzed-the-dialogue-in-2016s-biggest-movies-and-it-started-a-lot-of-conversations-b9c815f24313")[](https://medium.com/@ProQuesAsker/i-analyzed-the-dialogue-in-2016s-biggest-movies-and-it-started-a-lot-of-conversations-b9c815f24313)











* * *







**If you liked this article and want to see more like it, please click the green heart below and share away on your social media network of choice.**

I am currently spending my time working on personal projects and data visualizations like this while I look for a data science job. So, if you have a fun project idea (or a job inquiry) you’d like to discuss with me, please reach out to me on [Twitter](https://twitter.com/ProQuesAsker) or by [email](mailto:amberthomasmsc@gmail.com).

Thank you!








