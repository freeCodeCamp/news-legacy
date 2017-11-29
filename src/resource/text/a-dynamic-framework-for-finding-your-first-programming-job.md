---
author: Jon Deng
authorTwitter: https://twitter.com/jondeng
authorFacebook: https://facebook.com/10204837055582034
title: "I just got a developer job at Snapchat. Here’s what I learned and how it can help you with your job search."
subTitle: "About a year ago, while deployed to Iraq as an Army officer, I started coding for fun. (You can read the whole story here.) Well, after a..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*6u5CNLL0yg9gmSwtRs1aNg.jpeg
url: https://medium.freecodecamp.org/a-dynamic-framework-for-finding-your-first-programming-job-b4eb0605b4f3
id: a-dynamic-framework-for-finding-your-first-programming-job-b4eb0605b4f3
date: 2017-02-16T19:34:24.583Z
tags: [
  "JavaScript",
  "Tech",
  "Life Lessons",
  "Startup",
  "Self Improvement"
]
---
# I just got a developer job at Snapchat. Here’s what I learned and how it can help you with your job search.







![](https://cdn-images-1.medium.com/max/2000/1*6u5CNLL0yg9gmSwtRs1aNg.jpeg)

Photo courtesy of Lee Campbell on Unsplash







About a year ago, while deployed to Iraq as an Army officer, I started coding for fun. (You can read the whole story [here](https://medium.com/operation-code/fueling-the-how-i-learned-to-code-while-deployed-to-iraq-ef71d597fcaf#.olpp0lvoy).) Well, after a lot of studying, I landed my first job as a software engineer at Snapchat ([Snap](https://www.snapchat.com/)) in Venice Beach.

The job search wasn’t easy. I faced a lot of rejections, false leads, and moments of doubt. But the experience helped me develop a mental framework for approaching activities that have a high probability of success over the long term, but a small probability of success on any given day — activities like searching for a first job as a software engineer.

Because finding my _particular job_ was mostly due to a lot of luck (good timing, a fortuitous connection, a good year of funding for startups in Los Angeles), outlining the specific steps I took wouldn’t be super useful to you. That’s because I did the same things that everyone tells you to do:

*   build side projects
*   solve practice problems
*   build your network
*   and apply for a ton of jobs

The actions that _you_ take, and the emphasis _you_ put on each one, will differ greatly depending on _your_ personality and specific circumstances. This said, the mental framework I arrived at during my job search can help you, regardless of your circumstances.

So I’m going to share the thought process that ultimately lead to my mental framework, while giving you a quick introduction to [dynamic programmin](https://en.wikipedia.org/wiki/Dynamic_programming)g at the same time. I hope you find this useful 😸!

### How a typical developer job search works

While searching for my first programming job, I read quite a few personal accounts of how other self-taught programmers and bootcamp grads found their first jobs. From their stories, the job search seemed like a very sequential model:

1.  learn to code
2.  sharpen your skills
3.  do some networking
4.  work on practice problems
5.  apply to jobs
6.  interview
7.  get job offers

In data structure terms, I pictured it as traversing through nodes of a Linked List.



![](https://cdn-images-1.medium.com/max/1600/1*MsTAD-OxQRLsrotQ0zudNA.png)

On to the next one! Image courtesy of [crunchify](http://crunchify.com/how-to-iterate-through-linkedlist-instance-in-java/)



I think a common flaw when people recount their memories (especially if they’ve been working as an engineer for a little while), is that they place too much emphasis on cause-effect relationships between the specific actions they took and the outcome that occurred:

> _I did A, then B occurred. Therefore, A caused B._

Because they have the benefit of hindsight, their outcome _seems_ deterministic. **If you only just follow the same steps, you will find a good job.**

**Yes. And no.** From my experience, in the _long term_, if you’re really committed to programming and constantly pushing yourself to get better, you will eventually find a job worthy of your skills (regardless of whether you have a Computer Science degree from a certain school in Palo Alto). The demand for software engineers is real and only growing. But in the _short term_, the process is super random, and is based on lots of variables that you have no visibility on or control over: company hiring needs, market trends, what hip technologies companies are currently hiring for.

When I started searching for jobs in Los Angeles, I sent out a ton of applications, trying to find something —_anything._ I would have coded in exchange for free food and t-shirts if the anyone had offered me the opportunity. Here are some of the early responses I got:

> _You write nice clean Javascript code. And you were super friendly and we enjoyed talking to you. However, we didn’t see you coding as productively as we needed._ **_To move forward with junior candidates, we need to see an exceptional strong point, and we didn’t see enough of such a strength with you_** _at this point. This means that we can’t work with you._

> _We all think very highly of you and each enjoyed interviewing you, with the strong belief that your drive, work ethic, and natural curiosity are exactly what we seek in a candidate. Unfortunately, given the timeline of where we are logistically,_ **_we are looking for someone with more current experience in front-end development._**

> _Sorry for all the delays. This process is more complicated than I had anticipated._ **_I’ll update you sometime next week_** _as we get closer to making a decision._

Then **[silence]** for many weeks.

Well that was bananas. I did a coding challenge that took me 6 hours and the company can’t even send me a reply email?

Getting each of these emails (and the numerous non-responses too) was a very painful experience for me. But **never waste an opportunity to learn something useful from hardship**. By showing you the thought process that my job search inspired, hopefully this article will give you a tool to optimize the choices you make during the job search, and give you inspiration to continue pushing toward your goal.

> “Pain is inevitable, suffering is optional” -Haruki Murakami

### The Knapsack Problem

Let me illustrate the steps I took to get to my mental framework, using a variation of a common Computer Science interview question: [the Knapsack problem](https://www.wikiwand.com/en/Knapsack_problem).

**UPDATE: I put my code in a [GitHub repo](https://github.com/dengjonathan/jobSearch) with a small test suite, allowing you to play around with the code and develop a solution yourself.**

Here is the problem:

You have a set of activities that you can choose to do to increase your chances of finding a job. Each activity takes a certain amount of time, but provides some amount of experience. We only have limited time to prepare for the job search, so we can’t do everything. Our goal is to maximize the amount of experience points by choosing the optimal set of activities.

How do you write a function that will choose the optimal set of activities from a list of available activities and a limited amount of time?





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/162e2f84b53436783bcfef29baced7da?postId=b4eb0605b4f3" data-media-id="162e2f84b53436783bcfef29baced7da" allowfullscreen="" frameborder="0"></iframe>





### Solution 1: Brute Force

Restating the problem, you want to choose the set of activities that:

1.  Takes an amount of time to accomplish that is less than or equal to the total time you have available
2.  Maximizes experience points (XP) returned

The most intuitive way is to use the same algorithm we would utilize in daily life. We would try out various combinations of activities, checking to see if it met our constraint of fitting within a limited amount of time. We would keep searching through all possible combinations and choose the one that maximizes XP.

Here is the code for this algorithm:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/38ec4bd487a3b85fa2a7bef7a464f6e6?postId=b4eb0605b4f3" data-media-id="38ec4bd487a3b85fa2a7bef7a464f6e6" allowfullscreen="" frameborder="0"></iframe>





The problem is that this approach is really _complex_ with respect to time, meaning as the size of our input (number of activities we could possibly choose) increases, the amount of time it takes to calculate a solution increases at a much faster rate.

If we have 6 possible activities, we start by creating every possible combination with a single activity, giving us 6 combinations that contain one activity.

Then we have to create all possible combinations with 2 activities. For each of the original 6 combinations, we have to create a combination with each of the 5 remaining activities (you can only do each activity once).

Then to create all possible combinations with 3 activities, we have to take each of our combinations containing 2 activities and create a combination with each of the 4 remaining activities.

Eventually we’ll have something that looks like (6 * 5 * 4 *3 * 2 * 1), which is _O(n!)_. Also, because we sum all the items in each combination every time to calculate the total time and XP, our end time complexity is _O(n! * n)_.

Imagine that instead of running this algorithm on a computer that can execute trillions of operations a second, you have to run it on your limited brain, which actually takes 10 hours (in a _very_ optimistic world) to do a side project to learn a new JavaScript MV* framework.

And also instead of a choice of 6 activities, you have thousands of possible things you could be doing to prepare for job search. (Just look up “how to code” on Google).

**It is completely impractical to try every possible combination of activities to prepare yourself for job search.** The lesson from this example is there is an almost infinite amount of things you could be doing that will increase your chances of finding a job, but you can’t try all of them. You need a better method to determine your optimal set of activities.

### **Backtracking**

Obviously, as programmers (and hackers 😜), we’re going to want to optimize our current solution somehow.

Let’s try the **BUD** approach from [Cracking the Coding Interview by Gayle McDowell](https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/098478280X) (an awesome prep resource, even if your job interviewers never ask algorithmic questions).

1.  What **Bottlenecks** does our brute force solution have?

When looking for the bottleneck, we’re usually trying to identify the most complex part of the process, i.e. the _n!_ part of of our _O(n! * n)_ algorithm.

The **bottleneck**, or most complex part of our job search problem is the fact that we have to dynamically create many different combinations and try them out. Every time we add another option, we have many more possible combinations to try out.

Now I have to admit I kind of led you down a false road. My job search problem, as a variation on the Knapsack Problem, is part of a set of problems called [NP-Hard](https://www.wikiwand.com/en/NP-hardness). In short, problems are NP-Hard when there is no known efficient way to solve the problem, or verify that that a solution to a problem is correct. So unless you’re a world changing computer scientist, you’re probably not going to figure out an objectively _efficient_ way to combine all the activities.

But that’s ok!!! **Sometimes, in interviews and job search, we follow false leads. As long as we learn something from the process, we haven’t really wasted time. Even if we can’t find an overall efficient way to solve the problem, we can still find a _more_ efficient way that we’re currently using.**

So let’s move on.

2\. Is my algorithm doing **Unnecessary work** or **Duplicated Work**?

This is where we can make major gains on our solution.

One thing we should change is that for every possible combination, we have to iterate through all the activities in the set to calculate the total _XP_ and total _time_ from that set of activities. This is **duplicated work**, because we’re adding up the same values over and over.

If we just saved the total _XP_ and _time_ of the combination in a variable, we could just add the _XP_ and _time_ of each new activity we add to to the total. This would take our solution from _O(n! * n)_ to _O(n!)._

This is helpful, but doesn’t fundamentally make our problem too much faster to run.

What other optimization could we do?

We’re also calculating a lot of combinations that could not possibly lead to a valid solution. This is **unnecessary work**.

For reference here is the list of activities again:

<pre name="7cca" id="7cca" class="graf graf--pre graf-after--p">const ACTIVITIES = [  
  {name: 'side-project', time: 10, xp: 12},  
  {name: 'algorithms', time: 3, xp: 7},  
  {name: 'networking', time: 1, xp: 0.5},  
  {name: 'exercise', time: 2, xp: 1.5},  
  {name: 'systems design', time: 4, xp: 4},  
  {name: 'making CSS codepens', time: 3, xp: 4}  
];</pre>

Let’s say we have 8 hours total to prepare for our job search. How would our brute force algorithm check combinations?

Based on the order of the _ACTIVITIES_ array, we would first consider a set just including the _side-project_ object. There is no valid solution containing the _side-project_ activity because it takes 10 hours to do and we only have 8 hours total.

But our brute force algorithm (being brute force) doesn’t know that, and will then check every possible combination we can create with _side-project_.

So it will check if _[side-project, algorithms]_ is a valid solution. It is not.

And it will check if _[side-project, algorithms, networking]_ is valid. It is not.

And it will check if _[side-project, algorithms, networking, exercise]_ is valid. It is not.

See how much unnecessary work we’re doing?

What if we could give our algorithm a little bit of intelligence, so it can check if our current state (the activities we currently have selected) can lead to a valid solution? If the activities we currently have selected can lead to a valid solution (specifically, if our selected set of activities takes less or equal time than the total time we have as a parameter to the function) then we keep selecting new activities and checking if they’re valid.

If not, we stop and unselect the last activity we selected.

For example, if we have 8 hours total, we will first check to see if a combination containing just _side-projects_ can possibly lead to a valid solution. As we determined before, it cannot, because it takes up more time than we currently have.

So we unselect _side-projects,_ and try out different combinations starting with _algorithms._ By checking to see if our current selected activities could lead to a valid solution, we’re avoiding having to check any of the combinations containing _side-projects_, because they could not possible lead to a valid solution.

This approach is called **backtracking.** We check to see if where we are could lead to a valid solution, if not, we go back one step and try to make a different choice.

Here is the code:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/7363aa3df688d4922b712e3721156d35?postId=b4eb0605b4f3" data-media-id="7363aa3df688d4922b712e3721156d35" allowfullscreen="" frameborder="0"></iframe>





This solution implements the two optimizations that we discussed earlier:

1.  Keeping track of total XP and time so we can calculate it in O(1) instead of summing the entire set every time in O(n)
2.  Checking whether our current set will lead to a valid solution before we recursively add a new item

While backtracking saves a lot of work it doesn’t really reduce the overall runtime complexity of our algorithm. It’s still O(n!), because we’re still recursively checking most possible combinations.

But implementing the backtracking algorithm has probably given you a clue on how to continue working on the problem. In the brute force solution, we had to assemble and check the entire combination for each possible combination. With backtracking, we get to check if the path we’re on will lead to a valid solution, before we assemble the entire combination.

Hmmmmm…..

**Is there a way to consider only whether or not we should add another activity to our set?** This would be a much easier problem than trying to create the entire combination at once. It would allow us to break up our hard problem (finding the optimal combination) to a series of smaller problems (deciding whether or not to add a single activity).

### Dynamic Programming

Dynamic programming is a method where we can divide our big **optimization** problem (what combination of activities should I choose?) into a series of manageable **decision** problems (should I include this activity in my optimal solution or not?). We divide and conquer.

Dynamic programming is a common way to solve NP-Hard problems like the Knapsack problem, and coincidentally also a good way to think about job search. It’s hard to determine what combination of activities will make you ready for job search. There’s no efficient way to find the optimal combination or to check if your current choice is optimal.

But it’s a lot easier to break your time period down into individual days and weeks, and try to figure out which activities you should be doing for each small period of time.

To solve our job search problem using dynamic programming, we break the problem up into a series of smaller problems (how do I optimize a smaller period of time?) and then take the solution from each of the smaller problems and combine them into a larger solution.

Sounds confusing? Let’s walk through it:

<pre name="3131" id="3131" class="graf graf--pre graf-after--p">const ACTIVITIES = [  
  {name: 'side-project', time: 10, xp: 12},  
  {name: 'algorithms', time: 3, xp: 7},  
  {name: 'networking', time: 1, xp: 0.5},  
  {name: 'exercise', time: 2, xp: 1.5},  
  {name: 'systems design', time: 4, xp: 4},  
  {name: 'making CSS codepens', time: 3, xp: 4}  
];</pre>

**What’s the optimal solution if we have a total time of t=0 (zero) to prepare?**

If we have zero time, we can’t do any activities, so return an empty set, _[]_.

**Ok, now what’s the optimal solution is we have a total time of t=1?**

First, let’s see what activities are possible to do: we can’t do a side-project (time t=10) or study algorithms (time t=3). The only thing we can do is networking (time t=1).

So we need to **decide** if adding networking to the optimal solution for time t=0 will lead to an optimal solution.

If we add networking, we come out with a total XP of 0.5, not bad.

If we don’t add networking, we can’t really do anything else, so we come out with a total XP of 0.

0.5 is still better than 0, so if we only have a total time of t=1, we should do networking. The optimal solution for time t=1 is _[networking]_

**What’s the optimal solution for time t=2?**

What activities are possible with time t=2, that we haven’t already considered? Just _exercise._

If we choose to add exercise, which takes time t=2, we no longer have any time to do anything else, so our solution is _[exercise],_ which leads to 1.5 XP.

We compare the optimal solution including exercise (which leads to 1.5XP) and the optimal solution not including exercise (which leads to 0.5XP). Since the solution containing exercise is better, we choose that one (In real life, I also feel that with very limited time, some self-care is always more useful than more prep 😀).

Now here is where it gets really interesting: **What’s** **the optimal solution for time t=3?**

Again, what activities are possible for time t=3?

We have the option to choose from _[algorithms, exercise, networking]._

If we choose _algorithms_ which takes time t=3, we have no time to do anything else, so one possible solution is _[algorithms]_.

If we choose _exercise_ which takes time t=2, we have t=1 time left to do something else? How do we know what to choose for the remaining time?

We know the optimal solution for time t=1, is _[networking],_ **so we don’t have to calculate it again. We know we can’t do better than the optimal solution for time t=1**.

So one possible solution is _[exercise, networking]._

Again we compare all the possible solutions and see that the best we can do is _[algorithms]._

This is the basic structure of a dynamic programming solution: at each amount of time, we test the **decision** of whether or not to add a specific activity. We compare all possible solutions, and figure out the optimal one.

Solutions for greater amounts of time build upon the optimal solutions for the same problem with a smaller amount of time. This allows us to call the dynamic programming function recursively.

For my example I chose to sort the array of activities by the time it takes to complete them (least to greatest). This allows us the quickly determine which items are possible in the given time because they are sorted by time.

Below is the code:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a30eece7ec06fbc59390e334268ce274?postId=b4eb0605b4f3" data-media-id="a30eece7ec06fbc59390e334268ce274" allowfullscreen="" frameborder="0"></iframe>





Wooooo! If you made it through that example the first time, then you’re a way faster learner than I am. I hope it was an interesting in finding alternate ways to solve hard algorithmic questions!

Finally, what is the purpose of this series of three examples you might ask?

Not only did I stealthily give you some practice working on a question very similar to the ones you might be asked in technical interviews, I showed you the steps that I took to come to my mental framework.

There are an almost infinite combinations of activities you could be doing, and there’s no efficient way to determine the optimal set of activities you should do. A lot of paths don’t lead to a valid solution, just like a lot of job applications and interviews won’t lead to a job.

You could try every possible combination of job search activities (brute force), but since we are human beings with finite time, this isn’t an efficient way to arrive at our goal.

We could optimize our approach by evaluating at each step whether or not our approach will lead to our goal (backtracking). For example, if we are constantly reaching out to third-party recruiters to help us find job leads, and the recruiters haven’t been very helpful in generating interviews, maybe we should backtrack and consider a different activity.

Lastly, since job search is not a one day affair, we could try to optimize each day and combine days together (dynamic programming). This way we have a manageable problem to deal with (should I study algorithms today?) versus a really hard one (what should I do for the next month to prepare myself for job search?).

Finally, I just want to point out that with all 3 approaches, even though they were not objectively efficient, we did _eventually_ reach a solution. While in the middle of job search, it’s really important to remember that in the long term, you _will_ achieve your goal, and to keep pushing forward each day.

### My advice for handling your developer job search

I’m going to succumb to my temptation to give you two pieces of advice from my experience.

1.  It’s super hard to judge your own performance during interviews and coding challenges — so just focus on the process. You won’t know during the interview or immediately afterward whether you’re doing well or poorly.
2.  Success or failure are fleeting and shouldn’t determine your happiness.

If you’re looking for your first programming job, I hope reading this was useful or at least inspirational for you — look, [a talentless duffer](https://www.reddit.com/r/funny/comments/4uc5od/despite_a_reputation_for_stupidity_the_shoebill/) like me found a great job! Good luck out there and I’d like to close by sharing the best piece of advice given to me during my job search:

> “Don’t worry about whether you’re good enough, worry about whether you like programming and whether you’re willing to work hard enough. If you do those two things, you’ll make it.” — paraphrased from Edgar Pabon on the [Breaking Into Startups podcast](http://breakingintostartups.com/edgar-pabon/)

Thanks for reading, and good luck with your job search!








