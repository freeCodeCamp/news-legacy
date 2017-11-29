---
author: Adam Arold
authorTwitter: https://twitter.com/addamsson
authorFacebook: https://facebook.com/859159754113614
title: "Data Explorer: A hidden treasure chest for IT professionals"
subTitle: "Do you ever wonder what technology professionals use in the IT industry? Which tools are trending?..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*tLIXa6jWWjxfB-6AYjm2Hg.jpeg
url: https://medium.freecodecamp.org/data-explorer-a-hidden-treasure-chest-for-it-professionals-cd85bcf4795a
id: data-explorer-a-hidden-treasure-chest-for-it-professionals-cd85bcf4795a
date: 2017-10-21T00:00:00.000Z
tags: [
  "Programming",
  "Data Science",
  "Tech",
  "Startup",
  "Data"
]
---
# Data Explorer: A hidden treasure chest for IT professionals







![](https://cdn-images-1.medium.com/max/2000/1*tLIXa6jWWjxfB-6AYjm2Hg.jpeg)







Do you ever wonder what technology professionals use in the IT industry? Which tools are trending?

There are many resources that you can read to answer these questions, like [Google Trends](https://trends.google.com/trends/) or [ITJobswatch](https://www.itjobswatch.co.uk/).

But what if you want more insight?

Enter the [Stack Exchange Data Explorer](https://data.stackexchange.com/) (SEDE), where you can find fine-grained information about **all** Stack Exchange users.

### So what is Stack Exchange?

> Launched in 2010, the Stack Exchange network consists of 133 Q&A communities including Stack Overflow, the largest, most trusted online community for developers to learn, share their knowledge, and build their careers.

> — from [Stack Exchange](https://stackexchange.com/about)

The SEDE is a meta-site where you can write queries against **all** publicly available data in any of the Stack Exchange sites. In this article, we’ll be working with the data from [Stack Overflow](https://en.wikipedia.org/wiki/Stack_overflow).

### Why is this useful to me?

If you look at the [queries](https://data.stackexchange.com/stackoverflow/queries) posted on [data.stackexchange.com](https://data.stackexchange.com/stackoverflow/queries), you can see many questions. Most are related to Stack Overflow, for example:

“How many up-votes do I have for each tag?”

“Jon Skeet comparison.”

These don’t seem to be useful out of the context of the site itself, but you can define your own queries by navigating to the [compose query](https://data.stackexchange.com/stackoverflow/query/new) page.

### A practical example

Let’s say that you just moved to city `x` , and you want to connect with people in that area who are using the same technology that you are. Stack Overflow group users who are enthusiastic about their craft, so let’s write a query that will help us find them.

> Note that Data Explorer comes with a [tutorial](https://data.stackexchange.com/tutorial) that you can [check out](https://data.stackexchange.com/tutorial) if you are not familiar with the concepts detailed here.

If you navigate to the [compose query](https://data.stackexchange.com/stackoverflow/query/new) page, you’ll be presented with something like this:



![](https://cdn-images-1.medium.com/max/1600/0*HAz81GSuqFd4le0V.png)



Here you can write SQL queries against the Stack Overflow database. On the right side of the screen are the tables that you can query. On the left side of the screen, you can write the query.

So let’s write one:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/33a3195f500ec156d509e557a3d265cb?postId=cd85bcf4795a" data-media-id="33a3195f500ec156d509e557a3d265cb" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





This will show us Stack Overflow users who live in **Connecticut.** The results will order the users by their reputation. If you don’t want to have to modify a query by hand every time you change the Location, you can add a **parameter**.

As shown in this query, to refer to a parameter, surround its name with double pound signs:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/6766ddb5a74e2412cc28ff3124bf1e7f?postId=cd85bcf4795a" data-media-id="6766ddb5a74e2412cc28ff3124bf1e7f" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





When you run this, SEDE will ask you to specify a Location. I suggest you use a city name, and only supply more information (for example Connecticut, USA) if there are multiple cities that you want to use.

Now SEDE comes with another useful feature: it can enter links into the results. To do so, use the syntax `[* Link]`, like this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c68b394de8d1c6781055ca8f0c2d659e?postId=cd85bcf4795a" data-media-id="c68b394de8d1c6781055ca8f0c2d659e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





If you do this, you will see that the `Id` s of the users are now links in their profile page.

So far so good.

But you only want to see users who have provided contact information on their profile, right?

It is easy to add this to our existing query:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/51be20fa3a56b50793f9f919be01e9dc?postId=cd85bcf4795a" data-media-id="51be20fa3a56b50793f9f919be01e9dc" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





We can also apply filters so that we are searching for users who:

*   were active last month
*   have already contributed to Stack Overflow
*   have their reputation above 1000.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a12b3040e741ee1acc7d97b6d1540070?postId=cd85bcf4795a" data-media-id="a12b3040e741ee1acc7d97b6d1540070" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





This is nice, but we have not yet filtered for technology.

Users on Stack Overflow have **Posts,** and **Posts** can have **Tags.** Let’s add a parameter that will filter for **Tags**:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/7fcb36d115ce4e9dd5d56b1ee8312cf1?postId=cd85bcf4795a" data-media-id="7fcb36d115ce4e9dd5d56b1ee8312cf1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





And that’s it!

Now you can search for:

*   users who live in the city you specified
*   posts that have the tag you specified

Here is an example:



![](https://cdn-images-1.medium.com/max/1600/0*gcU0ST6VypnVMD3z.png)



### What if I don’t want to write SQL?

If you are a recruiter, for example, and you don’t want to (or can’t) write SQL but just want quick answers, don’t fret. There is a solution to your problem.

SEDE comes with an useful search function that provides prepared queries for your searches.

Let’s see what we find if we search for:

*   users who live in the city you specified
*   posts that have the tag you specified



![](https://cdn-images-1.medium.com/max/1600/0*YFOMvpe8dwnfFinP.png)



Most of these do not work outside of the box, so you will have to try them. But you’ll get there.

### Conclusion

In this article, we explored how SEDE works and how you can extract useful information from it. I encourage you to try it out for yourself.

I’m interested to know what you think about SEDE, so please share your insights in the comments section.











* * *







Thanks for reading.

You can read more of my articles on [my blog](http://the-cogitator.com/).








