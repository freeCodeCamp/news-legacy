---
author: Evaristo Caraballo
authorTwitter: none
authorFacebook: none
title: "One year in the Free Code Camp Data Science Room"
subTitle: "I joined Free Code Camp’s community 18 months ago as a data scientist who was curious about web development. I quickly discovered that no..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*ef3sgKjwAFm2tAnfgL7_hg.jpeg
url: https://medium.freecodecamp.org/one-year-experience-in-the-free-code-camp-data-science-room-c97eb905af1f
id: one-year-experience-in-the-free-code-camp-data-science-room-c97eb905af1f
date: 2016-08-21T23:38:06.569Z
tags: [
  "Freecodecamp",
  "Social Media Analytics",
  "Open Data",
  "Data Science",
  "D3"
]
---
# One year in the Free Code Camp Data Science Room







![](https://cdn-images-1.medium.com/max/2000/1*ef3sgKjwAFm2tAnfgL7_hg.jpeg)







I joined Free Code Camp’s community 18 months ago as a data scientist who was curious about web development. I quickly discovered that not only did they take data science seriously — they already had plans to release their datasets to the public as open data.

After some discussion, [Quincy Larson](https://medium.com/@quincylarson) promoted me to Free Code Camp’s core team and gave me the green light to create the [Data Science Room](https://gitter.im/FreeCodeCamp/DataScience). This would serve as an official chat room for discussing data science, data visualization, and open data.

All of this happened at the end of July 2015 — just over one year ago.

Since that time, my experience in the Data Science Room has been rich and motivating. As of August 2016, the Data Science Room is composed of more than 700 moderately active users. Its logs contains a wealth of useful resources. And many of its participants have built projects involving real Free Code Camp data.

This article is a brief overview of some of the more interesting developments over the past year in our Data Science Room.

### The Open Data Vision

The first message in our Data Science Room came from [Quincy Larson](https://medium.com/@quincylarson), who summarized Free Code Camp’s interest in Open Data as natural extension of the Open Source movement:

> “Our near-term plans are to open up our entire anonymized dataset for academic study.” - [Quincy Larson](https://medium.com/@quincylarson) in July 2015

Six month later, Free Code Camp conducted its first open data experiment by releasing a large open dataset containing the progress of more than 100,000 campers who’d opted in, on Christmas Eve:

[**Free Code Camp Christmas Special: Giving the Gift of Open Data**  
_To the countless researchers and data scientists who have politely asked for our data over the past few months: Merry…_medium.freecodecamp.com](https://medium.freecodecamp.com/free-code-camp-christmas-special-giving-the-gift-of-data-6ecbf0313d62 "https://medium.freecodecamp.com/free-code-camp-christmas-special-giving-the-gift-of-data-6ecbf0313d62")[](https://medium.freecodecamp.com/free-code-camp-christmas-special-giving-the-gift-of-data-6ecbf0313d62)

Then a few months later, the Data Science Room released survey results from the 2016 New Coder Survey. This included data from 15,000 respondents, each of whom answered up to 48 questions:

[**We asked 15,000 people who they are, and how they’re learning to code**  
_More than 15,000 people responded to the 2016 New Coder Survey, granting researchers an unprecedented glimpse into how…_medium.freecodecamp.com](https://medium.freecodecamp.com/we-asked-15-000-people-who-they-are-and-how-theyre-learning-to-code-4104e29b2781 "https://medium.freecodecamp.com/we-asked-15-000-people-who-they-are-and-how-theyre-learning-to-code-4104e29b2781")[](https://medium.freecodecamp.com/we-asked-15-000-people-who-they-are-and-how-theyre-learning-to-code-4104e29b2781)

The results of the survey are currently one of the most popular datasets on [Kaggle](https://www.kaggle.com/forums/f/1318/2016-new-coder-survey), and are also available in raw and normalized form on [GitHub](https://github.com/FreeCodeCamp/2016-new-coder-survey).

Members of our Data Science Room have also joined in on the data analysis, focusing their energies on datasets generated from the many platforms used by the Free Code Camp community.

### Gitter chat rooms

Gitter has been a core social hub for Free Code Camp since the beginning, barring a short “Slack interlude”:

[**So Yeah We Tried Slack… and We Deeply Regretted It**  
_Back in April, all was well with our community of busy adults learning to code. We were communicating using Gitter.im…_medium.freecodecamp.com](https://medium.freecodecamp.com/so-yeah-we-tried-slack-and-we-deeply-regretted-it-391bcc714c81 "https://medium.freecodecamp.com/so-yeah-we-tried-slack-and-we-deeply-regretted-it-391bcc714c81")[](https://medium.freecodecamp.com/so-yeah-we-tried-slack-and-we-deeply-regretted-it-391bcc714c81)

Gitter chat rooms have been the main venue for welcoming new campers, asking for programming help, and coordinating contributions to open source projects. And Gitter has become quite popular.

> There were close to 2,000,000 messages posted in the Free Code Camp main chat room alone between January 1, 2015 and May 31, 2016.

Between all the Free Code Camp chat rooms, the main one ([FreeCodeCamp/FreeCodeCamp](https://www.gitter.im/freecodecamp/freecodecamp)) is the most popular. It bottoms out at around 1 message per minute, and jumps to _6–9 messages per minute_ during peak time.





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/55677914568923dd65ea6eb771b12457?postId=c97eb905af1f" data-media-id="55677914568923dd65ea6eb771b12457" allowfullscreen="" frameborder="0"></iframe>



Real Time data visualization of calling other users in the main chat room. This social network representation uses d3.js, node.js, and sockets, and was built by [Koustuv Sinha](https://github.com/koustuvsinha) and myself.



### A community-driven effort to help newcomers.

Since Free Code Camp is a volunteer-driven open source community, a big part of its success depends upon campers who are willing to share their time and expertise. Our community is designed to keep that engine of helpfulness always running.





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/7cb26d21d0cb11b7470e6a1afa34484c?postId=c97eb905af1f" data-media-id="7cb26d21d0cb11b7470e6a1afa34484c" allowfullscreen="" frameborder="0"></iframe>



Generational replacement of campers at work: a billboard of the users' top10, and other data about the Free Code Camp main chat room, built in python and d3.js by myself.



Every month, hundreds of campers are able to land their first developer jobs, and as a result become less active in chat. But new generations of campers rise up to fill the gap they leave behind. That’s how the community sustains itself.

When one camper helps another, they are rewarded by “brownie points” within Free Code Camp’s platform. Want to see which campers have been the most helpful lately? Check out the unofficial Free Code Camp [top 100 leaderboard](https://fcctop100.herokuapp.com/) (built by [Roel Verbunt](https://github.com/roelver) using in React, MongoDB, and node.js).

### Local study groups



![](https://cdn-images-1.medium.com/max/1600/1*p6poZi8CySNa-m8wFT75sA.jpeg)

Free Code Camp Mexico City.



Campers also meet in-person through Free Code Camp’s 1,500+ local [**study groups**](https://medium.freecodecamp.com/free-code-camps-1-000-study-groups-are-now-fully-autonomous-d40a3660e292#.vidk0bnns).





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/87fc683b05bff32acf484f29b963c9e2?postId=c97eb905af1f" data-media-id="87fc683b05bff32acf484f29b963c9e2" allowfullscreen="" frameborder="0"></iframe>



A world map of Free Code Camp study groups using d3.js by [Alice Jiang](https://github.com/alicejiang1). You can zoom in and click on individual dots to bring up their Facebook groups.



These groups organize events through Facebook groups. The average group has 40 campers, and major cities like San Francisco, London, Toronto, and Delhi have more than 1,000 members each.

[Alice Jiang](https://github.com/alicejiang1), [Aleksandar B](https://github.com/samosale), and myself ran an analysis and found that around 45% of registered study groups had future events scheduled.

Here are some other community statistics:

*   By July 2016 there were at least 430 people who have made at least one commit to Free Code Camps’ [core open source repository](https://github.com/freecodecamp/freecodecamp)
*   Free Code Camp has the [13th most popular](http://toppub.xyz/) publication on Medium
*   Our [YouTube](https://www.youtube.com/freecodecamp) channel has more than 40,000 followers
*   We recently introduced a forum, which now has more than 30,000 users and 1,000 visitors per day.

I also analyzed the words in Free Code Camp’s 222 most recent tweets:

> (‘code’, 44),  
>  (‘freecodecamp’, 40),  
>  (‘time’, 35),  
>  (‘design’, 28),  
>  (‘make’, 24),  
>  (‘medium’, 24),  
>  (‘trying’, 21),  
>  (‘write’, 20),  
>  (‘browser’, 20),  
>  (‘history’, 19),  
>  (‘future’, 19),  
>  (‘developer’, 18),  
>  (‘inspiration’, 17),  
>  (‘programming’, 16),  
>  (‘read’, 16),  
>  (‘javascript’, 16),  
>  (‘stories’, 13),  
>  (‘coding’, 13),  
>  (‘learn’, 12),  
>  (‘spend’, 12),  
>  (‘declarative’, 11),  
>  (‘imperative’, 11),  
>  (‘work’, 11),  
>  (‘people’, 11),  
>  (‘using’, 11),  
>  (‘become’, 11),  
>  (‘perfect’, 10),  
>  (‘finding’, 10),  
>  (‘better’, 10)

In short — coding, learning, and hard work.

A huge thanks to everyone in the [Data Science Room](https://gitter.im/freecodecamp/datascience) who helped with the data analysis and visualization necessary to create this article.

Until next time, stay social! And happy coding!








