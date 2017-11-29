---
author: Jose Aguinaga
authorTwitter: https://twitter.com/jjperezaguinaga
authorFacebook: none
title: "Which languages got the most GitHub stars in 2016?"
subTitle: "A few weeks ago I decided to build an application to find which programming languages I star the most in GitHub...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*-hRBr9wXEoFe_3TuTpuDVA.jpeg
url: https://medium.freecodecamp.org/data-visualization-what-languages-got-the-most-github-stars-in-2016-a4e3908a9532
id: data-visualization-what-languages-got-the-most-github-stars-in-2016-a4e3908a9532
date: 2017-01-16T17:29:09.601Z
tags: [
  "JavaScript",
  "Python",
  "Data Visualization",
  "Data Science",
  "Tech"
]
---
# Which languages got the most GitHub stars in 2016?







![](https://cdn-images-1.medium.com/max/2000/1*-hRBr9wXEoFe_3TuTpuDVA.jpeg)

Staring patterns, by Jose Aguinaga. An overlapping of multiple starring GitHub events from various users.







A few weeks ago I decided to build an application to find which programming languages I star the most in GitHub.

Why? Because lately I had been starring projects about **Machine Learning, Data Science,** and **Artificial Intelligence.** I wanted to see whether my increased interest would show up in my starred projects timeline in any way. And what better way to discover this by using a little bit of Data Science on its own?

The experiment consisted in obtaining the information from GitHub, cleaning it up, and displaying it in a visualization. To try it yourself, go to the following webpage.

[**What languages got the most GitHub stars in 2016?**  
_A streamgraph of github starred languages on 2016._starred.jjperezaguinaga.com](https://starred.jjperezaguinaga.com/ "https://starred.jjperezaguinaga.com/")[](https://starred.jjperezaguinaga.com/)

After trying it yourself, give me a moment to explain how it works and show you some interesting examples.

### Retrieving and analyzing the data

For better or worse, GitHub doesn’t provide an easy way to consume this information. You need to go through all your starred projects on [github.com](https://github.com/jjperezaguinaga?tab=stars), then click through many pages to find them all. Depending in how many repositories you have starred, it would take you a few minutes before you can see all the projects across a specific timespan.

The good news are that GitHub has a [starring activity API](https://developer.github.com/v3/activity/starring/), which I then used to write a JavaScript utility to fetch all my starred projects through the year. GitHub allows you to pass a flag to see the date when you first starred a project, which let me get only the projects I starred in 2016.

With the data retrieved, I proceeded to filter it based on the language GitHub has assigned to them. [Ramda](http://ramdajs.com/) was particularly useful to map and reduce this data.

Then, to visualize this information, I decided to display the frequency of each repository programming language through a chart known as a [_streamgraph_](https://en.wikipedia.org/wiki/Streamgraph)_._ Aggregating each language instance per month, I could see the increase and decrease of interest over time.



![](https://cdn-images-1.medium.com/max/1600/1*WQ3fepXIwBi5NUvJviTHng.png)

A streamgraph of my starred projects in 2016 aggregated by language and distributed per month. GitHub sometimes will be unable to decide over a specific language for a project, and will give **_null _**_instead_.



As we can see in the graph, I starred **142 projects** in 2016\. There were more than 15 languages across my starred repositories, but I’m only displaying the top 7, as the frequency per language drops after this number. The top language is JavaScript, which doesn’t surprise me, as I work as a Front-End Engineer on a daily basis.

The second and third programming languages are **Python** and **Go,** which most likely relate to projects about artificial intelligence / deep learning I mentioned earlier. Python made sense, since it was recently considered [the most popular language for Machine Learning](https://www.ibm.com/developerworks/community/blogs/jfp/entry/What_Language_Is_Best_For_Machine_Learning_And_Data_Science?lang=en).

### Everyone gets a graph.

As part of the development of the tool, I tested the application with other developers. This produced a series of interesting graphs.

The following is a list of a few famous developers, grouped by the languages they’ve starred the most.

#### Javascript Developers







![](https://cdn-images-1.medium.com/max/2000/1*GwVhSylW7DbtDk97b47ytQ.png)

[Addy Osmani](https://medium.com/@addyosmani) — Google Web Platform Engineer





![](https://cdn-images-1.medium.com/max/2000/1*TnPkFM7m4uALb6kdN74Nmw.png)

[Paul Irish](https://medium.com/@paul_irish) — Chrome Dev Tools Engineer





![](https://cdn-images-1.medium.com/max/2000/1*kdermlGYoH9h71IpB3nOAQ.png)

[Eric Elliott](https://medium.com/@_ericelliott) — Javascript Developer





![](https://cdn-images-1.medium.com/max/2000/1*XBfJLcDIGlIB9brjCy05vg.png)

[Sindre Sorhus](https://medium.com/@sindresorhus) — Disguised unicorn





![](https://cdn-images-1.medium.com/max/2000/1*OCd5_UCvg22QFjxxbAb8Pg.png)

[John Resig](https://medium.com/@jeresig) — Staff Engineer at Khan Academy and creator of jQuery





![](https://cdn-images-1.medium.com/max/2000/1*PUIfvXD1EtfUEHGk-XV-OQ.png)

[Dan Abramov](https://medium.com/@dan_abramov) —Facebook Engineer, Co-author of Redux, Create React App and React.js





![](https://cdn-images-1.medium.com/max/2000/1*8TFEv0D9dVTSxHz8r73Bzw.png)

[Ben Alpert](https://github.com/spicyj) — Facebook Engineer, React.js Contributor







#### Golang Developers







![](https://cdn-images-1.medium.com/max/2000/1*XrfpirNF-way8_Z7Lxr4mw.png)

[TJ Holowaychuk](https://medium.com/@tjholowaychuk) — Founder of Apex.sh, Javascript and Golang Developer





![](https://cdn-images-1.medium.com/max/2000/1*woyoilqXgiJXEiID8-lG4A.png)

[Jessie Frazzelle](https://twitter.com/jessfraz) — Everything containers





![](https://cdn-images-1.medium.com/max/2000/1*MaO29q08C02m9OuBAEsZhw.png)

[Josh Baker](https://medium.com/@tidwall) — Makes a killer goulash





![](https://cdn-images-1.medium.com/max/2000/1*j1WQJ8trywsIXE20PKU51w.png)

[aarti](https://github.com/aarti) — Exercism.io contributor







#### Python Developers







![](https://cdn-images-1.medium.com/max/2000/1*1eoCU1uNMmXnQHx-1eZBGA.png)

[Thaddee Tyl](https://medium.com/@espadrine) — He saw some code





![](https://cdn-images-1.medium.com/max/2000/1*KP-2hDdl3QY5-mN2qbTR7g.png)

[John Washam](https://medium.com/@StartupNextDoor) — Future Google Engineer





![](https://cdn-images-1.medium.com/max/2000/1*BE7PmdkT2qXr35xPztwWLQ.png)

[Geimfari](https://medium.com/@likid.geimfari) — Pythonista, Erlanger, Cosmonaut





![](https://cdn-images-1.medium.com/max/2000/1*hmuiymwPqIL9-UCjLjIilg.png)

[Nam Vu](https://medium.com/@zuzoovn) — Future Machine Learning Engineer







#### Swift,R







![](https://cdn-images-1.medium.com/max/2000/1*CWoIfaVrbMqpvKnZAK-uHw.png)

[Luke Zhao](https://github.com/lkzhao) — iOS Developer





![](https://cdn-images-1.medium.com/max/2000/1*Z9gdOx1N18ULSyOdZoQ58A.png)

[Jennifer Bryan](https://github.com/jennybc) — Professor at UBC







### The thing about data

I had a lot of fun from this experiment, and learned two important lessons:

*   **Data can be beautiful**. Not everything needs to have a deep meaning in order to be interesting. For instance, the cover for this article is the product of overlapping a series of _streamgraphs_ from various datasets. I liked it so much I even [copyrighted](https://blockai.com/c/e1jLAq) it.
*   **Our data identify us.** Given enough starred projects, the chances of having two individuals with the exact same starred repositories at the exact same time are negligible*. Thus, if we analyze the starring patterns on a developer, we could identify them by seeing their data. This is an example of [Behavioral Analytics](http://dl.acm.org/citation.cfm?id=2971707&dl=ACM&coll=DL&CFID=716696458&CFTOKEN=32651178), used in the past to [identify users by mobile app usage](http://dl.acm.org/citation.cfm?id=2971707&dl=ACM&coll=DL&CFID=716696458&CFTOKEN=32651178).

By the end of this experiment, I’m was more interested in exploring the usages of Data Visualization and Machine Learning than before**. I’ll continue to expand my knowledge in the area to create more experiments like this in the future.

### Please do try this at home

If you’re curious about the code, you can see it on Github.

[**jjperezaguinaga/github-patterns**  
_github-patterns - 📈 What languages got the most GitHub stars in 2016?_github.com](https://github.com/jjperezaguinaga/github-patterns "https://github.com/jjperezaguinaga/github-patterns")[](https://github.com/jjperezaguinaga/github-patterns)

Bear in mind the code is very dirty, so errors might occur (for example, the GitHub rate limit timeout error isn’t caught), so don’t take it as a reference for any real production projects. Feel free to [change, expand or fork the code](https://github.com/jjperezaguinaga/github-patterns) as you wish.











* * *







_*Not negligible, but very unlikely. A person would need to star the same project at the same second to share the same pattern. There are 31557600 seconds in an astronomical year and are around_ [_20M_](https://octoverse.github.com/) _repositories in GitHub by the end of 2016, and around 5.8M active users in GitHub. You tell me what are the odds of two people with 10 starred projects to have the same pattern._

_**Udacity released this weekend_ [_a new nanodegree about Deep Learning foundations_](https://www.udacity.com/course/deep-learning-nanodegree-foundation--nd101)_. I’ve enrolled myself and will post an overview after I finish it._








