---
author: Kande Bonfim
authorTwitter: https://twitter.com/kandebonfim
authorFacebook: https://facebook.com/1064642990215895
title: "I crunched the data from every episode of Netflix’s Ultimate Beastmaster"
subTitle: "There’s a new show on Netflix called Ultimate Beastmaster. It’s basically a clone of American Ninja Warrior: strong people running throug..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*pa3ZXPlXVGBZok_qoexcIQ.jpeg
url: https://medium.freecodecamp.org/i-crunched-the-data-from-every-episode-of-netflixs-ultimate-beastmaster-71e91e471574
id: i-crunched-the-data-from-every-episode-of-netflixs-ultimate-beastmaster-71e91e471574
date: 2017-03-29T04:59:58.594Z
tags: [
  "Startup",
  "Tech",
  "Data Science",
  "Life Lessons",
  "Sports"
]
---
# I crunched the data from every episode of Netflix’s Ultimate Beastmaster







![](https://cdn-images-1.medium.com/max/2000/1*pa3ZXPlXVGBZok_qoexcIQ.jpeg)







There’s a new show on Netflix called Ultimate Beastmaster. It’s basically a clone of American Ninja Warrior: strong people running through crazy hard obstacle courses.

I decided to dive in and give the show the full data science treatment. Fair warning if you haven’t watched the show yet — **there are spoilers here**.

Here we go.

### The participants

There are **10 episodes**. **9** of them presenting **12 new participants each**. **108 people** jumping like crazy trying to be the next **Ultimate Beastmaster** while you eat a family-sized Cheetos**.**

The following graph gives a big picture of what happened in the show. **I’m excluding the final here, because we’ll talk about it separately later in this article.**







![](https://cdn-images-1.medium.com/max/2000/1*tqD97HY8p4rsMM9CU6XQuA.png)

The Ultimate Scatterplot







Now let's get dive into the data.

#### Gender

Unfortunately, there's still a huge difference in the number of men and women in the _Ultimate Beastmaster_. Only **22 women** faced the beast. **That's 20.4% percent of the competitors.**

It gets even worse: All the women were eliminated in the first (81%) and second level (13%). The only exception was the young student 🇩🇪 **Silke Sollfrank** (18 yrs) that got eliminated on Level 3\. That's it. **No woman in the finals**. 😩



![](https://cdn-images-1.medium.com/max/1600/1*4eXYHHEyjKRcM3VRWUuFdg.jpeg)

🇺🇸 **Mimi Bonny** was one of the **5 woman eliminated on Throat Erosion** where competitors must use an industrial trampoline to jump and grab a lever releasing a climbing wall. **This obstacle eliminated just women.**



That made me think about how the show should handle with some advantages the average male body has over the female’s in this competition. **Some obstacles were way too hard to beat if you are shorter than average**.



![](https://cdn-images-1.medium.com/max/1600/1*PlBc3C7YbYgHLHRpP4Yzhg.png)

This is not a music wave. It's a histogram.



#### Age

The age of the participants varies **from 18 to 40 years** (29.1 Avg.). The five youngest ones are German (no clue why).

The Beastmasters — the winners of each episode — are aged **20 to 35 year sold** (28.1 on average). Being too young or too old doesn't help.



![](https://cdn-images-1.medium.com/max/1600/1*EJJkLLJDd1dpP2kesXYPpg.png)

Yeah, no Japanese in the finals… 🇯🇵😞



#### The finals

🇺🇸 USA brought 3 beastmasters. 🇩🇪 Germany and 🇰🇷 South Korea, 2\. But it only took one 🇧🇷 Brazilian to win the Ultimate Beastmaster prize.

Yes, I'm Brazilian too, and now I feel better about the **7x1** we took from Germany in the World Cup.

### Points







![](https://cdn-images-1.medium.com/max/1200/1*wNcw9hpkBj1K25bjMi1-7A.png)





![](https://cdn-images-1.medium.com/max/1200/1*7T1DASwBZB9fV_ctHw2WIg.png)

Points acquired by each competitor along the tv show.







Note that there's a **soft tendency of dropping your score once you’re older**.

> Correlation of age and points: **-0.24**











* * *







### **Competition Funnel**



![](https://cdn-images-1.medium.com/max/1600/1*k8Co4ihSBA0YTgmUG5LPnQ.png)

**🔴 Eliminated — **🔵 **Classified**













* * *







### The Levels

Let's take a deeper look into each level of the competition and their main causes of failing.

### Level 1



![](https://cdn-images-1.medium.com/max/1600/1*kObiDVQLtgeZsvtvM7de3g.png)

Main causes of failing ordered by position in level 1.



Only **5** **(4.6%)** participants were able to accomplish the first level. The most difficult parts of the track are:

1.  **Energy Coils** 30.6%
2.  **Mag Wall** 27.8%
3.  **Faceplant** 22.2%

**Brandon Douglass 🇺🇸** is the ONLY ONE that failed in _Brain Matter_. He is the tiny red line in the chart.

The average time spent on this track is **2'54** and for accomplishing it is **5'29**. 🇧🇷 **Felipe Camargo** is the fastest to finish it: **5'10 👏.** And the quickest to fail is a Brazilian competitor too: **🇧🇷 Karine Abrahim** failed in **0'18**.

**39.3** is the average points per person in this track and it varies **from 10 to 70** points. **Nobody got all the 80 points available in this level**.

### Level 2



![](https://cdn-images-1.medium.com/max/1600/1*TYWPXRRsFdbBG8Bkl-FYOQ.png)

Main causes of failing ordered by position in level 2.



**🇰🇷 Taeho Kwon** was the only one to complete the second level (he made it in **4'28**).

Main causes of failing:

1.  **Dreadmills** 27.8%
2.  **Spinal Ascent** 22.2%
3.  **Stomach Churn** 19.4%

**Points**: from **20 to 220** (**109.1 in average**).

**Time:** from **1'01 to 9'53** (**4'08 in average**).

### **Level 3**



![](https://cdn-images-1.medium.com/max/1600/1*dCxi9-VXXtyQkRb9kdHk9g.png)

Main causes of failing ordered by position in level 3.



🇰🇷 **Heeyong Park** was the only one to accomplish this level (he made it in **6'19**).

Main causes of failing:

1.  **Ejector ⚠️** 40%
2.  **Bungee Beds** 20%
3.  **The Extractor** 13.3%

**Points**: from **90 to 340** (**186.6 in average**).

**Time:** from **0'03 to 12'48** (**2'17 in average**).











* * *







### Which country won?

What if the Ultimate Beastmaster were a competition between the countries instead of individuals? Which country performed the better result?

Taking the average score by country, we can get the result: 🇰🇷 **South Korea won the Ultimate Beastmaster!**

<pre name="6b80" id="6b80" class="graf graf--pre graf-after--p graf--trailing">+-----------------+-------------+----------+  
|    Country      | Avg. Points | Position |  
+-----------------+-------------+----------+  
| 🇰🇷South Korea   |       117.2 | 1st      |  
| 🇩🇪Germany       |         110 | 2nd      |  
| 🇺🇸United States |       105.5 | 3rd      |  
| 🇲🇽Mexico        |       100.5 | 4th      |  
| 🇧🇷Brazil        |        96.1 | 5th      |  
| 🇯🇵Japan         |        69.4 | 6th      |  
+-----------------+-------------+----------+</pre>











* * *







### **The Finalists**

<pre name="a6ee" id="a6ee" class="graf graf--pre graf-after--h3">+------------------+-----+--------------------------+---------+  
|       name       | age |           job            | country |  
+------------------+-----+--------------------------+---------+  
| Felipe Camargo   |  24 | Professional Climber     | Brazil  |  
| David Manthei    |  20 | Architecture Student     | Germany |  
| Philip Meyer     |  23 | Soldier                  | Germany |  
| Roberto Perez    |  25 | Student                  | Mexico  |  
| Heeyong Park     |  34 | Ice Climber              | Korea   |  
| Hyunho Kim       |  30 | Crossfit Coach           | Korea   |  
| Steven Tucker    |  29 | Rock Climbing Instructor | EUA     |  
| Jonathan Collins |  33 | Track Coach and Model    | EUA     |  
| Ken Corigliano   |  35 | Air Force Major          | EUA     |  
+------------------+-----+--------------------------+---------+</pre>

We can clearly see why the finalists got the Beastmaster title. Their average of points is **265** against **88.7** of the other competitors.











* * *







### The dataset

This article is based on the data gathered by me, and it’s available for further expansion if you want to help or just try some analysis. Also, the dataset is available on [Kaggle](https://www.kaggle.com/kandebonfim/ultimate-beastmaster).

**Discovered something new?** My twitter is [@kandebonfim](https://twitter.com/kandebonfim).








