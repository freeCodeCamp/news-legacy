---
author: Iris Nevins
authorTwitter: https://twitter.com/cosmosiris
authorFacebook: https://facebook.com/10155822628618000
title: "How Reddit builds features at scale: an interview with its VP of Engineering"
subTitle: "Reddit’s VP of Engineering, Nick Caldwell, recently sat down with the Breaking Into Startups Crew to talk about leadership, company cultu..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*_RcsvyMHhZmrnS0MAzrQig.jpeg
url: https://medium.freecodecamp.org/how-reddit-builds-features-at-scale-an-interview-with-the-vp-of-engineering-f92b67974fd6
id: how-reddit-builds-features-at-scale-an-interview-with-the-vp-of-engineering-f92b67974fd6
date: 2017-10-24T22:44:07.116Z
tags: [
  "Startup",
  "Tech",
  "Self Improvement",
  "Life Lessons",
  "Leadership"
]
---
# **How Reddit builds features at scale: an interview with its** VP of Engineering







[![](https://cdn-images-1.medium.com/max/2000/1*_RcsvyMHhZmrnS0MAzrQig.jpeg)](https://breakingintostartups.com/68-nick-caldwell-vp-engineering-reddit)

**Nick Caldwell, VP of Engineering at Reddit**







Reddit’s VP of Engineering, [Nick Caldwell](https://breakingintostartups.com/68-nick-caldwell-vp-engineering-reddit), recently sat down with the [Breaking Into Startups Crew](https://breakingintostartups.com/) to talk about leadership, company culture, machine learning, time management, and more.

For those who don’t know how awesome [Reddit](https://www.reddit.com/) is, it’s an online forum with 1.1 million active communities. These communities consist of discussion boards on just about every topic imaginable from [“old ladies baking pies](https://www.reddit.com/r/OldLadiesBakingPies/)” and “[animals being jerks](https://www.reddit.com/r/AnimalsBeingJerks/)” to “[everything science](https://www.reddit.com/r/EverythingScience/)” and “[fashion](https://www.reddit.com/r/fashion/)”.

Reddit is the 4th most popular website in the United States and the 7th most popular website in the world. Most notably, Reddit has users in the hundreds of millions which means that its software problems are pretty unique.







[![](https://cdn-images-1.medium.com/max/2000/1*6KTRJMUZbJWMZxt4txSo7A.png)](https://www.facebook.com/BreakingIntoStartups/videos/508857829458678/)

👉🏾 Watch the [Full Video Tour of Reddit’s HQ in San Francisco](https://www.facebook.com/BreakingIntoStartups/videos/508857829458678/) 📺







For example, Reddit recently attempted to “better communicate the scale of Reddit” to their users by [building a system](https://redditblog.com/2017/05/24/view-counting-at-reddit/) that shows the number of views a post received rather than just the upvotes.

Some posts receive views in the millions, which means accurately counting views is really tricky. Reddit has to not only maintain an exact count in real time, but also keep track of whether or not a specific user has visited the post before.

For posts with views in the millions it would be very taxing on memory and CPU to store millions of user IDs in a set, then check this set every time there’s a new view. Reddit engineers were able to determine that a [HyperLogLog](http://algo.inria.fr/flajolet/Publications/FlFuGaMe07.pdf) (HLL)-based counting approach would require 0.15% of the memory that storing millions of user IDs would require.

These are the interesting types of problems that Reddit engineers face as the business and its platform continues to grow.







![](https://cdn-images-1.medium.com/max/2000/1*UzZ9H6W1zd1VJVqQP3Rveg.png)

Legacy user profile display (left) and new profile page (right), for u/Kn0thing.







Here’s another example of the role Reddit’s size plays in the work that its engineers do. Reddit recently created profile pages using a new frontend stack. They decided that during their beta period users would be able to opt into the new profile experience. This meant figuring out how to route requests across different stacks, allowing some users to be routed to the original profile page and others to be routed to the new profile page.

Reddit’s engineers discovered that using custom [VCL in Fastly](https://docs.fastly.com/guides/vcl/guide-to-vcl) allowed them to make this happen. As of August 2017 they were able to [“dynamically route 75,000 profiles of users”](https://redditblog.com/2017/08/04/dynamically-routing-requests-across-different-stacks-with-vcl/) during the beta (learn more about Reddit’s new front-end stack [here](https://redditblog.com/2017/06/30/why-we-chose-typescript/)).

### Meet Nick, developer turned VP of Engineering



[![](https://cdn-images-1.medium.com/max/1600/1*yeTj0hov7S3b0IMiykleMw.png)](https://soundcloud.com/breakingintostartups/nick-caldwell-vp-of-engineering-at-reddit)

Nick Caldwell’s [Full Interview with Breaking Into Startups Podcast](https://soundcloud.com/breakingintostartups/nick-caldwell-vp-of-engineering-at-reddit) 🎧



Nick Caldwell manages one hundred engineers who solve complex problems like these every day. So how did Nick become VP of Engineering at Reddit? His story starts in childhood.

Nick’s parents, a public defender and a schoolteacher, exposed Nick to ideas, books, and computer technology, but most interestingly — the knowledge that there were more possibilities out there than what he could see in his immediate environment.

When Nick developed an interest in computers, his dad got him a book called _C++ In 12 Easy Lessons._ But it took much more than that book to learn C++.

Nick had a strong interest in computers, a goal-oriented nature, and a desire to attend a well-resourced school. This led him to a magnet program for science and technology. After that he studied machine learning at MIT in the 90s, landing his first computer science job during his freshman year.







[![](https://cdn-images-1.medium.com/max/2000/1*hrnlgwSfOg6uPWLZ4crsHA.png)](https://breakingintostartups.com/68-nick-caldwell-vp-engineering-reddit)







Nick notes that for those of us in the early stages of being a software engineer, the most important thing is to pick an area we are passionate about (his machine learning specialty strongly contributed to his ability to find work).

Once we have chosen a specialty we’ve got to “refine our craft”, and “spend a lot of time wrestling with complex coding challenges.”

If we decide we want to take a management track the next step is to become an engineering manager, where one does “a little less day-to-day coding” in order to focus more on the “people” aspect of a team.

From there we can become a director, which means managing multiple engineering managers and coordinating resources. After that is VP of engineering which means managing multiple directors while focusing on business strategy and the direction of a company.

Throughout the [interview](https://breakingintostartups.com/68-nick-caldwell-vp-engineering-reddit) Nick mentions some of the specific challenges of managing engineers, such as deciding who is going to lead a certain project or deciding which potential projects best align with the mission of the company. He deals with things like “technical debt”, sudden periods of high traffic, and complex operations systems.

It took Nick 13 years to climb the leadership ladder and his self-discipline has played a large role. Nick eats one large meal a day because this gives him more time to do other things. He also prioritizes goal setting and even keeps a document that tracks all of his goals from the past decade or so.

Rising to Nick’s level of management means trading in time spent coding for an influence on business decisions, company culture, and hiring processes.

Nick talks about “snoos day”, a great addition to Reddit’s company culture. Two days per quarter engineers across the company are able to work on passion projects and sometimes they produce [projects](https://redditblog.com/2017/08/10/snoos-day-a-reddit-tradition/) that positively impact the entire company. Managers and executives have the power to implement things like this. To set the tone. To shift the environment.

I have often wondered whether or not I’ll take a management path. Would I rather develop my technical skills until I retire or become a leader who builds and mentors programmers into their greatness — a leader who positively impacts the direction of an entire company?

I’m not sure which path I will take but Nick makes leadership sound pretty meaningful and fulfilling.

[The Breaking Into Startups interview](https://breakingintostartups.com/68-nick-caldwell-vp-engineering-reddit) is jam-packed with way more than what I’ve covered here so you should definitely check out Nick’s interview, and when you’re done, let Breaking Into Startups know what you think.



[![](https://cdn-images-1.medium.com/max/1600/1*yeTj0hov7S3b0IMiykleMw.png)](https://soundcloud.com/breakingintostartups/nick-caldwell-vp-of-engineering-at-reddit)

Nick Caldwell’s [Full Interview with Breaking Into Startups Podcast](https://soundcloud.com/breakingintostartups/nick-caldwell-vp-of-engineering-at-reddit) 🎧













* * *







I’m Iris Nevins, a self-taught software engineer. If you like my article, please share it and send some claps my way. =)

You can follow my stories [here](https://medium.com/@cosmosiris). And feel free to [email me](mailto:nevinsiris@gmail.com).








