---
author: Alaina Kafkes
authorTwitter: https://twitter.com/alainakafkes
authorFacebook: none
title: "Demystifying Dynamic Programming"
subTitle: "How to construct &amp; code dynamic programming algorithms"
coverSrc: https://cdn-images-1.medium.com/max/2000/1*7QbvB25maQRxi7LGYOAfYw.png
url: https://medium.freecodecamp.org/demystifying-dynamic-programming-3efafb8d4296
id: demystifying-dynamic-programming-3efafb8d4296
date: 2017-07-31T18:40:40.143Z
tags: [
  "Programming",
  "Dynamic Programming",
  "Computer Science",
  "Python",
  "Technology"
]
---
# Demystifying Dynamic Programming

## How to construct & code dynamic programming algorithms







![](https://cdn-images-1.medium.com/max/2000/1*7QbvB25maQRxi7LGYOAfYw.png)







Maybe you’ve heard about it in preparing for coding interviews. Maybe you’ve struggled through it in an algorithms course. Maybe you’re trying to learn how to code on your own, and were told somewhere along the way that it’s important to understand dynamic programming. Using dynamic programming (DP) to write algorithms is as essential as it is feared.

And who can blame those who shrink away from it? Dynamic programming seems intimidating because it is ill-taught. Many tutorials focus on the outcome — _explaining_ the algorithm, instead of the process — _finding_ the algorithm . This encourages memorization, not understanding.

During my algorithms class this year, I pieced together my own process for solving problems that require dynamic programming. Parts of it come from [my algorithms professor](https://sites.northwestern.edu/hartline/) (to whom much credit is due!), and parts from my own dissection of dynamic programming algorithms.

But before I share my process, let’s start with the basics. What is dynamic programming, anyway?

### Dynamic Programming Defined

Dynamic programming amounts to **breaking down an optimization problem** into simpler sub-problems, and **storing the solution to each sub-problem** so that each sub-problem is only solved once.





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/4243ff767afc7df2bacb2772a7f8e002?postId=3efafb8d4296" data-media-id="4243ff767afc7df2bacb2772a7f8e002" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FDAwSwWnUIAANx9w.jpg%3Alarge&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



History lesson! This is why dynamic programming has its name.



To be honest, this definition may not make total sense until you see an example of a sub-problem. That’s okay, it’s coming up in the next section.

What I hope to convey is that DP is a useful technique for optimization problems, those problems that seek the maximum or minimum solution given certain constraints, because it looks through all possible sub-problems and never recomputes the solution to any sub-problem. This guarantees correctness and efficiency, which we cannot say of most techniques used to solve or approximate algorithms. This alone makes DP special.

In the next two sections, I’ll explain what a **sub-problem** is, and then motivate why storing solutions — a technique known as **memoization** — matters in dynamic programming.

### Sub-problems on Sub-problems on Sub-problems

Sub-problems are smaller versions of the original problem. In fact, sub-problems often look like a reworded version of the original problem. If formulated correctly, sub-problems build on each other in order to obtain the solution to the original problem.

To give you a better idea of how this works, let’s find the sub-problem in an example dynamic programming problem.

Pretend you’re back in the 1950s working on an IBM-650 computer. You know what this means — punchcards! Your job is to man, or woman, the IBM-650 for a day. You’re given a natural number _n_ punchcards to run. Each punchcard _i_ must be run at some predetermined start time _s_i_ and stop running at some predetermined finish time _f_i_. Only one punchcard can run on the IBM-650 at once. Each punchcard also has an associated value _v_i_ based on how important it is to your company.

**Problem**: As the person in charge of the IBM-650, you must determine the optimal schedule of punchcards that maximizes the total value of all punchcards run.

Because I’ll go through this example in great detail throughout this article, I’ll only tease you with its sub-problem for now:

**Sub-problem**: The maximum value schedule for punchcards _i_ through _n_ such that the punchcards are sorted by start time.

Notice how the sub-problem breaks down the original problem into components that build up the solution. With the sub-problem, you can find the maximum value schedule for punchcards _n-1_ through _n_, and then for punchcards _n-2_ through _n_, and so on. By finding the solutions for every single sub-problem, you can then tackle the original problem itself: the maximum value schedule for punchcards 1 through _n_. Since the sub-problem looks like the original problem, sub-problems can be used to solve the original problem.

In dynamic programming, after you solve each sub-problem, you must memoize, or store it. Let’s find out why in the following section.

### Motivating Memoization with Fibonacci Numbers

When told to implement an algorithm that calculates the [Fibonacci value](https://www.mathsisfun.com/numbers/fibonacci-sequence.html) for any given number, what would you do? Most people I know would opt for a [recursive algorithm](https://softwareengineering.stackexchange.com/questions/25052/in-plain-english-what-is-recursion) that looks something like this in Python:

<pre name="0249" id="0249" class="graf graf--pre graf-after--p">def fibonacciVal(n):  
  if n == 0:  
    return 0  
  elif n == 1:  
    return 1  
  else:  
    return fibonacciVal(n-1) + fibonacciVal(n-2)</pre>

This algorithm accomplishes its purpose, but at a _huge_ cost. For example, let’s look at what this algorithm must calculate in order to solve for n = 5 (abbreviated as F(5)):

<pre name="a054" id="a054" class="graf graf--pre graf-after--p">F(5)    
                    /      \                    
                   /        \  
                  /          \  
               F(4)          F(3)  
            /       \        /   \  
          F(3)     F(2)     F(2)  F(1)  
         /   \     /  \     /   \  
       F(2) F(1) F(1) F(0) F(1) F(0)  
       /  \  
     F(1) F(0)</pre>

The tree above represents each computation that must be made in order to find the Fibonacci value for n = 5\. Notice how the sub-problem for n = 2 is solved **thrice.** For a relatively small example (n = 5), that’s a lot of repeated , and wasted, computation!

What if, instead of calculating the Fibonacci value for n = 2 three times, we created an algorithm that calculates it once, stores its value, and accesses the stored Fibonacci value for every subsequent occurrence of n = 2? That’s _exactly_ what memoization does.

With this in mind, I’ve written a dynamic programming solution to the Fibonacci value problem:

<pre name="0d21" id="0d21" class="graf graf--pre graf-after--p">def fibonacciVal(n):  
  memo = [0] * (n+1)  
  memo[0], memo[1] = 0, 1  
  for i in range(2, n+1):  
    memo[i] = memo[i-1] + memo[i-2]  
  return memo[n]</pre>

Notice how the solution of the return value comes from the memoization array memo[ ], which is iteratively filled in by the for loop. By “iteratively,” I mean that memo[2] is calculated and stored before memo[3], memo[4], …, and memo[_n_]. Because memo[ ] is filled in this order, the solution for each sub-problem (n = 3) can be solved by the solutions to its preceding sub-problems (n = 2 and n = 1) because these values were already stored in memo[ ] at an earlier time.

Memoization means no re-computation, which makes for a more efficient algorithm. Thus, memoization ensures that dynamic programming is efficient, but it is choosing the right sub-problem that guarantees that a dynamic program goes through all possibilities in order to find the best one.

Now that we’ve addressed memoization and sub-problems, it’s time to learn the dynamic programming process. Buckle in.

### My Dynamic Programming Process

#### Step 1: Identify the sub-problem in words.

Too often, programmers will turn to writing code _before_ thinking critically about the problem at hand. Not good. One strategy for firing up your brain before you touch the keyboard is using words, English or otherwise, to describe the sub-problem that you have identified within the original problem.

If you’re solving a problem that requires dynamic programming, grab a piece of paper and think about the information that you need to solve this problem. Write out the sub-problem with this in mind.

For example, in the punchcard problem, I stated that the sub-problem can be written as “the maximum value schedule for punchcards _i_ through _n_ such that the punchcards are sorted by start time.” I found this sub-problem by realizing that, in order to determine the maximum value schedule for punchcards 1 through _n_ such that the punchcards are sorted by start time, I would need to find the answer to the following sub-problems:

*   The maximum value schedule for punchcards _n-1_ through _n_ such that the punchcards are sorted by start time
*   The maximum value schedule for punchcards _n-2_ through _n_ such that the punchcards are sorted by start time
*   The maximum value schedule for punchcards _n-3_ through _n_ such that the punchcards are sorted by start time
*   (Et cetera)
*   The maximum value schedule for punchcards 2 through _n_ such that the punchcards are sorted by start time

If you can identify a sub-problem that builds upon previous sub-problems to solve the problem at hand, then you’re on the right track.

#### Step 2: Write out the sub-problem as a recurring mathematical decision.

Once you’ve identified a sub-problem in words, it’s time to write it out mathematically. Why? Well, the mathematical **recurrence,** or repeated decision, that you find will eventually be what you put into your code. Besides, writing out the sub-problem mathematically vets your sub-problem in words from Step 1\. If it is difficult to encode your sub-problem from Step 1 in math, then it may be the wrong sub-problem!

There are two questions that I ask myself every time I try to find a recurrence:

*   What decision do I make at every step?
*   If my algorithm is at step _i_, what information would it need to decide what to do in step _i+1_? (And sometimes: If my algorithm is at step _i_, what information did it need to decide what to do in step _i-1_?)

Let’s return to the punchcard problem and ask these questions.

**What decision do I make at every step?** Assume that the punchcards are sorted by start time, as mentioned previously. For each punchcard that is compatible with the schedule so far (its start time is after the finish time of the punchcard that is currently running), the algorithm must choose between two options: to run, or not to run the punchcard.



![](https://cdn-images-1.medium.com/max/1600/1*b69mBGpwu6bGJrIlodV6Jw.jpeg)

This dynamic program chooses between two options at each step, just like our dear friend Hamlet!



**If my algorithm is at step** **_i_, what information would it need to decide what to do in step** **_i+1_?** To decide between the two options, the algorithm needs to know the next compatible punchcard in the order.

**If my algorithm is at step** **_i_, what information did it need to decide what to do in step** **_i-1_?** The algorithm needs to know about future decisions: the ones made for punchcards _i_ through _n_ in order to decide to run or not to run punchcard _i-1_.

Now that we’ve answered these questions, perhaps you’ve started to form a recurring mathematical decision in your mind. If not, that’s also okay, it becomes easier to write recurrences as you get exposed to more dynamic programming problems.

Without further ado, here’s our recurrence:

<pre name="d88a" id="d88a" class="graf graf--pre graf-after--p">OPT(i) = max(v_i + OPT(next[i]), OPT(i+1))</pre>

This mathematical recurrence requires some explaining, especially for those who haven’t written one before. I use OPT(_i_) to represent the maximum value schedule for punchcards _i_ through _n_ such that the punchcards are sorted by start time. Sounds familiar, right? OPT(•) is our sub-problem from Step 1.

In order to determine the value of OPT(_i_), we consider two options, and we want to take the _maximum_ of these options in order to meet our goal: the _maximum_ value schedule for all punchcards. Once we choose the option that gives the maximum result at step _i_, we memoize its value as OPT(_i_).

The two options — to run or not to run punchcard _i_ — are represented mathematically as follows:

<pre name="5eaf" id="5eaf" class="graf graf--pre graf-after--p">v_i + OPT(next[i])</pre>

This clause represents the decision to run punchcard _i_. It adds the value gained from running punchcard _i_ to OPT(next[_i_]), where next[_i_] represents the next compatible punchcard following punchcard _i_. OPT(next[_i_]) gives the maximum value schedule for punchcards next[_i_] through _n_ such that the punchcards are sorted by start time. Adding these two values together produces maximum value schedule for punchcards _i_ through _n_ such that the punchcards are sorted by start time if punchcard _i_ is run.

<pre name="dd13" id="dd13" class="graf graf--pre graf-after--p">OPT(i+1)</pre>

Conversely, this clause represents the decision to not run punchcard _i_. If punchcard _i_ is not run, its value is not gained. OPT(_i+1_) gives the maximum value schedule for punchcards _i+1_ through _n_ such that the punchcards are sorted by start time. So, OPT(_i+1_) gives the maximum value schedule for punchcards _i_ through _n_ such that the punchcards are sorted by start time if punchcard _i_ is not run.

In this way, the decision made at each step of the punchcard problems is encoded mathematically to reflect the sub-problem in Step 1.

#### Step 3: Solve the original problem using Steps 1 and 2.

In Step 1, we wrote down the sub-problem for the punchcard problem in words. In Step 2, we wrote down a recurring mathematical decision that corresponds to these sub-problems. How can we solve the original problem with this information?

<pre name="b018" id="b018" class="graf graf--pre graf-after--p">OPT(1)</pre>

It’s that simple. Since the sub-problem we found in Step 1 is the maximum value schedule for punchcards _i_ through _n_ such that the punchcards are sorted by start time, we can write out the solution to the original problem as the maximum value schedule for punchcards 1 through _n_ such that the punchcards are sorted by start time. Since Steps 1 and 2 go hand in hand, the original problem can also be written as OPT(1).

#### Step 4: Determine the dimensions of the memoization array and the direction in which it should be filled.

Did you find Step 3 deceptively simple? It sure seems that way. You may be thinking, how can OPT(1) be the solution to our dynamic program if it relies on OPT(2), OPT(next[1]), and so on?

You’re correct to notice that OPT(1) relies on the solution to OPT(2). This follows directly from Step 2:

<pre name="1975" id="1975" class="graf graf--pre graf-after--p">OPT(1) = max(v_1 + OPT(next[1]), OPT(2))</pre>

But this is not a crushing issue. Think back to Fibonacci memoization example. To find the Fibonacci value for _n_ = 5, the algorithm relies on the fact that the Fibonacci values for _n_ = 4, _n_ = 3, _n_ = 2, _n_ = 1, and _n_ = 0 were already memoized. If we fill in our memoization table in the correct order, the reliance of OPT(1) on other sub-problems is no big deal.

How can we identify the correct direction to fill the memoization table? In the punchcard problem, since we know OPT(1) relies on the solutions to OPT(2) and OPT(next[1]), and that punchcards 2 and next[1] have start times after punchcard 1 due to sorting, we can infer that we need to fill our memoization table from OPT(_n_) to OPT(1).

How do we determine the dimensions of this memoization array? Here’s a trick: the dimensions of the array are equal to the number and size of the variables on which OPT(•) relies. In the punchcard problem, we have OPT(_i_), which means that OPT(•) only relies on variable _i_, which represents the punchcard number. This suggest that our memoization array will be one-dimensional and that its size will be _n_ since there are _n_ total punchcards.

If we know that _n_ = 5, then our memoization array might look like this:

<pre name="c9b2" id="c9b2" class="graf graf--pre graf-after--p">memo = [OPT(1), OPT(2), OPT(3), OPT(4), OPT(5)]</pre>

However, because many programming languages [start indexing arrays at 0](https://en.wikipedia.org/wiki/Zero-based_numbering), it may be more convenient to create this memoization array so that its indices align with punchcard numbers:

<pre name="7dca" id="7dca" class="graf graf--pre graf-after--p">memo = [0, OPT(1), OPT(2), OPT(3), OPT(4), OPT(5)]</pre>

#### Step 5: Code it!

To code our dynamic program, we put together Steps 2–4\. The only new piece of information that you’ll need to write a dynamic program is a base case, which you can find as you tinker with your algorithm.

A dynamic program for the punchcard problem will look something like this:

<pre name="12ea" id="12ea" class="graf graf--pre graf-after--p">def punchcardSchedule(n, values, next):  
 # Initialize memoization array - Step 4  
  memo = [0] * (n+1)  

 # Set base case  
  memo[n] = values[n]  

 # Build memoization table from n to 1 - Step 2  
  for i in range(n-1, 0, -1):  
    memo[i] = max(v_i + memo[next[i]], next[i+1])  

 # Return solution to original problem OPT(1) - Step 3  
  return memo[1]</pre>

Congrats on writing your first dynamic program! Now that you’ve wet your feet, I’ll walk you through a different type of dynamic program.

### Paradox of Choice: Multiple Options DP Example



![](https://cdn-images-1.medium.com/max/1600/1*ZOy2VkYyok5a5YoBEUGMtg.jpeg)

Unrelated to DP, but an accurate depiction of how harrowing multi-option decisions can be.



Although the previous dynamic programming example had a two-option decision — to run or not to run a punchcard — some problems require that multiple options be considered before a decision can be made at each step.

Time for a new example.

Pretend you’re selling the friendship bracelets to _n_ customers, and the value of that product increases monotonically. This means that the product has prices {_p_1_, …, _p_n_} such that _p_i ≤ p_j_ if customer _j_ comes after customer _i_. These _n_ customers have values {_v_1_, …, _v_n_}. A given customer _i_ will buy a friendship bracelet at price _p_i_ if and only if _p_i_ ≤ _v_i_; otherwise the revenue obtained from that customer is 0\. Assume prices are natural numbers.

**Problem**: You must find the set of prices that ensure you the maximum possible revenue from selling your friendship bracelets.

Take a second to think about how you might address this problem before looking at my solutions to Steps 1 and 2.

#### Step 1: Identify the sub-problem in words.

**Sub-problem**: The maximum revenue obtained from customers _i_ through _n_ such that the price for customer _i-1_ was set at _q_.

I found this sub-problem by realizing that to determine the maximum revenue for customers 1 through _n_, I would need to find the answer to the following sub-problems:

*   The maximum revenue obtained from customers _n-1_ through _n_ such that the price for customer _n-2_ was set at _q_.
*   The maximum revenue obtained from customers _n-2_ through _n_ such that the price for customer _n-3_ was set at _q_.
*   (Et cetera)

Notice that I introduced a second variable _q_ into the sub-problem. I did this because, in order to solve each sub-problem, I need to know the price I set for the customer _before_ that sub-problem. Variable _q_ ensures the monotonic nature of the set of prices, and variable _i_ keeps track of the current customer.

#### Step 2: Write out the sub-problem as a recurring mathematical decision.

There are two questions that I ask myself every time I try to find a recurrence:

*   What decision do I make at every step?
*   If my algorithm is at step _i_, what information would it need to decide what to do in step _i+1_? (And sometimes: If my algorithm is at step _i_, what information would it need to decide what to do in step _i-1_?)

Let’s return to the friendship bracelet problem and ask these questions.

**What decision do I make at every step?** I decide at which price to sell my friendship bracelet to the current customer. Since prices must be natural numbers, I know that I should set my price for customer _i_ in the range from _q — _the price set for customer _i-1 — _to _v_i _— the maximum price at which customer _i_ will buy a friendship bracelet.

**If my algorithm is at step** **_i_, what information would it need to decide what to do in step** **_i+1_?** My algorithm needs to know the price set for customer _i_ and the value of customer _i+1_ in order to decide at what natural number to set the price for customer _i+1_.

With this knowledge, I can mathematically write out the recurrence:

<pre name="2497" id="2497" class="graf graf--pre graf-after--p">OPT(i,q) = max~([Revenue(v_i, a) + OPT(i+1, a)])</pre>

<pre name="5e2e" id="5e2e" class="graf graf--pre graf-after--pre">such that max~ finds the maximum over all a in the range q ≤ a ≤ v_i</pre>

Once again, this mathematical recurrence requires some explaining. Since the price for customer _i-1_ is _q_, for customer _i_, the price _a_ either stays at integer _q_ or it changes to be some integer between _q+1_ and _v_i_. To find the total revenue, we add the revenue from customer _i_ to the maximum revenue obtained from customers _i+1_ through _n_ such that the price for customer _i_ was set at _a_.

In other words, to maximize the total revenue, the algorithm must find the optimal price for customer _i_ by checking all possible prices between _q_ and _v_i_. If _v_i_ ≤ _q_, then the price _a_ must remain at _q_.

#### What about the other steps?

Working through Steps 1 and 2 is the most difficult part of dynamic programming. As an exercise, I suggest you work through Steps 3, 4, and 5 on your own to check your understanding.

### Runtime Analysis of Dynamic Programs

Now for the fun part of writing algorithms: runtime analysis. I’ll be using big-O notation throughout this discussion . If you’re not yet familiar with big-O, I suggest you read up on it [here](https://www.interviewcake.com/article/java/big-o-notation-time-and-space-complexity).

Generally, a dynamic program’s runtime is composed of the following features:

*   Pre-processing
*   How many times the for loop runs
*   How much time it takes the recurrence to run in one for loop iteration
*   Post-processing

Overall, runtime takes the following form:

<pre name="925a" id="925a" class="graf graf--pre graf-after--p">Pre-processing + Loop * Recurrence + Post-processing</pre>

Let’s perform a runtime analysis of the punchcard problem to get familiar with big-O for dynamic programs. Here is the punchcard problem dynamic program:

<pre name="645a" id="645a" class="graf graf--pre graf-after--p">def punchcardSchedule(n, values, next):  
 # Initialize memoization array - Step 4  
  memo = [0] * (n+1)  

 # Set base case  
  memo[n] = values[n]  

 # Build memoization table from n to 1 - Step 2  
  for i in range(n-1, 0, -1):  
    memo[i] = max(v_i + memo[next[i]], next[i+1])  

 # Return solution to original problem OPT(1) - Step 3  
  return memo[1]</pre>

Let’s break down its runtime:

*   Pre-processing: Here, this means building the the memoization array. O(_n_).
*   How many times the for loop runs: O(_n_).
*   How much time it takes the recurrence to run in one for loop iteration: The recurrence takes constant time to run because it makes a decision between two options in each iteration. O(1).
*   Post-processing: None here! O(1).

The overall runtime of the punchcard problem dynamic program is O(_n_) O(_n_) * O(1) + O(1), or, in simplified form, O(_n_).

### You Did It!

Well, that’s it — you’re one step closer to becoming a dynamic programming wizard!



![](https://cdn-images-1.medium.com/max/1600/1*iFMwuyC5ym3f_Ep6L_GEEA.jpeg)

Margaret Hamilton: one of the many programming wizards in our history!



One final piece of wisdom: **keep practicing dynamic programming**. No matter how frustrating these algorithms may seem, repeatedly writing dynamic programs will make the sub-problems and recurrences come to you more naturally. Here’s a crowdsourced list of [classic dynamic programming problems](https://www.quora.com/What-are-the-top-10-most-popular-dynamic-programming-problems-among-interviewers) for you to try.

So get out there and take your interviews, classes, and **life** (of course) with your newfound dynamic programming knowledge!











* * *







Many thanks to [Steven Bennett](https://stebenn.wordpress.com/), [Claire Durand](https://medium.com/@eeclaire), and [Prithaj Nath](https://medium.com/@prithajnath) for proofreading this post. Thank you to [Professor Hartline](https://sites.northwestern.edu/hartline/) for getting me so excited about dynamic programming that I wrote about it at length.

Enjoy what you read? Spread the love by liking and sharing this piece. Have thoughts or questions? Reach out to me on [Twitter](https://twitter.com/alainakafkes) or in the comments below.








