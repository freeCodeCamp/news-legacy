---
author: Evaristo Caraballo
authorTwitter: none
authorFacebook: none
title: "English, Population, Connectivity and Campsites"
subTitle: "Free Code Camp offers a coding education that’s open source, free, and accessible. Sounds ideal, right?..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*wOQNiJVfv1weV_KLotsnyA.jpeg
url: https://medium.freecodecamp.org/english-size-connectivity-and-campsites-factors-driving-the-use-of-free-code-camp-worldwide-3c9d4e2b8c17
id: english-size-connectivity-and-campsites-factors-driving-the-use-of-free-code-camp-worldwide-3c9d4e2b8c17
date: 2016-01-20T08:02:19.191Z
tags: [
  "Education",
  "Technology",
  "Data Science",
  "Social Media",
  "Data"
]
---
# English, Population, Connectivity and Campsites







![](https://cdn-images-1.medium.com/max/2000/1*wOQNiJVfv1weV_KLotsnyA.jpeg)







#### Factors driving the use of Free Code Camp worldwide

Free Code Camp offers a coding education that’s open source, free, and accessible. Sounds ideal, right?

Actually, there are several areas where it can improve significantly — especially for people outside of the United States.

I recent analyzed Free Code Camp’s open data and found that worldwide adoption of Free Code Camp is affected by several factors. To be fair, these seem to be the same factors that are affecting other end-to-end online programs, and online courses (MOOCs) as well. These factors include the learners’ home country’s wealth, connectivity, population size, English proficiency, and — although less documented — the existence of active offline communities.

You can tell from reading social media posts by campers — Free Code Camp’s community members — that English proficiency and socialization affect how useful Free Code Camp is to a given camper. This article will explore these, along with less obvious factors.

To get an approximation of how geography affects the usefulness of Free Code Camp, I looked for differences in the **_numbers of sessions_** (from Google Analytics) for regions and countries, basing the comparison on relevant demographics.

I started by broadly comparing _absolute_ number of sessions between sub-continental regions. It only takes a glance at this map to realize that the adoption of the Free Code Camp in Africa, Central Asia, and the smallest Pacific Islands is very much behind the rest of the regions.







![](https://cdn-images-1.medium.com/max/2000/1*J8ILk6IET7PbHh7chTkWEg.png)

Map of the prevalence of the Free Code Camp sessions (in percentages) by sub-continents around the world (continents blank map from [boragetaqs.es.tl](http://boragetaqs.es.tl/continents-map-blank.htm))







This is a sign that having a **_healthy economy_** or belonging to its periphery _could be_ one relevant factor affecting the adoption of the program. In fact, country wealth could be strongly related to program adoption, as we can see by exploring some demographics of the Top 20 countries, sessions-wise.

The table below also includes some of the wealthiest nations, containing 16 out of the 79 countries with over-average GDP per capita (World GDP per capita (2015) = Int’l $14,982, [wikipedia at Jan 2016](https://en.wikipedia.org/wiki/List_of_countries_by_GDP_%28PPP%29_per_capita)).



![](https://cdn-images-1.medium.com/max/1600/1*R1tRk7yV3te39uLNSafB9Q.png)



Still, having a healthy economy is not enough to explain the table. A closer look suggests that the **_size of the internet population_** is a determinant factor of influence: The list represents the 60% of the total population of the world, but more importantly, it represents the **_68%_**of the **_world_** _internet_ population.

OK, so far we’ve found some evidence that economic wealth and (internet) population size affect a given person’s likelihood of joining the Free Code Camp community. What are some other factors?

One factor seems to be English proficiency. The other seems to be the presence of campsites — city-based chapters of Free Code Camp where campers meet up and code together.

To find out, we must look at the data **_in relative terms_** and get rid of exceptional records in order to unveil their impact.

For this step, I filtered out large countries like the United States, Canada, the United Kingdom, India and China as well as compared only countries with complete data.

I also recalculated the number of sessions and number of campsites _as controlled by_ internet population size, so they show a relative trend.

Instead of a simple table I relied on a scatter plot of the modified numbers of campsites and sessions, with a couple of additional features:

*   the **size** of the point represented the comparable **size of the internet population** at each country (large if over average, small if under average)
*   the **color** of the point indicates **English proficiency** (based on Education First’s [_English Proficiency Index_](http://www.ef.nl/epi/)) for each selected country — purple if above average, green if below average



![](https://cdn-images-1.medium.com/max/1600/1*q0xrVWW1Tix3Heo5H7MMmg.png)

Scatter Plot campsites vs sessions: relations between relative number of sessions vs campsites or English proficiency are suggested (non-standardized residuals after transforming into log10 and controlling both variables for internet population; points were translated)



The chart above reveals several insights simultaneously:

1.  The higher the number of campsites, the higher the relative amount of sessions. This effect is particularly glaring between countries with larger internet populations
2.  Countries with higher English proficiency (purple dots) could be considered as more active in _relative terms_ than those countries with lower English proficiency (green dots), no matter the size of the internet population of the country

So, not only is a given country’s wealth and internet population size important — **English proficiency** and an **active offline community** also seem to affect the diffusion of Free Code Camp in a given country.

In summary:

1.  At a _high level_, richer regions are those which are having the most of the sessions; our campers are largely coming from countries from those regions, such as the US, Canada or several European countries.
2.  However, by comparing countries _independently_ we can affirm that the existence of large internet population is actually very relevant when we talk about absolute numbers. Some examples of this are India, Brazil, Russia, the Philippines and probably China (we capture only a fraction of sessions there since The Great Firewall blocks Google Analytics for all non-VPN traffic).
3.  Countries with a high English proficiency more widely adopt Free Code Camp, although to see this we needed to _control by_ internet population size.
4.  Finally, if you control for internet population size, you can see that the number of campsites seems to be related to the number of sessions, suggesting that coding together in person increases campers’ activity on Free Code Camp’s website.

#### So what is Free Code Camp doing about all of this?

Even before this analysis, our community has been taking actions to reduce linguistic barriers to adoption. A small army of campers have been voluntarily translating Free Code Camp’s open source curriculum, wiki, and other instructional resources into different world languages.

Vladimir Tamara, a core team member in Bogotá, Colombia, has already overseen the curriculum’s translation into Spanish. He’s now coordinating the translation effort for other world languages, and helping write the code that will handle language options.

In an effort to reduce the impact of poor connectivity and the large number of campers who use smart phones as their primary — or only — internet device, Free Code Camp is continually improving the mobile experience. We’re also working on an offline mode for campers who lack stable internet access and electricity.

One interesting trend that emerged from my analysis is the relationship between number of sessions and number of campsites in a given country. These in-person groups my serve to attract and involve campers who would otherwise not have the initiative to stick with a challenging program like Free Code Camp.

Justin Richardsson, a visual designer in Toronto, Canada, recently joined our core team to focus on campsites. He has already organized many coding events through the Toronto campsite. His goal is to learn from other campsite leaders and distribute their knowledge to campsites worldwide.











* * *







I’m also working on related visualizations at [bl.ocks.org/evaristoc](http://bl.ocks.org/evaristoc).

This analysis just scratches the surface of what we can learn from [Free Code Camp’s open data](https://medium.freecodecamp.com/free-code-camp-christmas-special-giving-the-gift-of-data-6ecbf0313d62#.79rr68eop). Join our [Data Science chat room](http://gitter.im/freecodecamp/datascience) and help us make sense of all these data.








