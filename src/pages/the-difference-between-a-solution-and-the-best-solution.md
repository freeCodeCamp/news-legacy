---
author: Sam Galizia
authorTwitter: none
authorFacebook: https://facebook.com/10153311401986732
title: "Any Solution Versus the Best Solution"
subTitle: "A couple of months ago, I was searching for resources to help me improve my coding skills. It didn’t take long before I stumbled upon Fre..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*wdzErOdqjTzh-ot9MTuEig.jpeg
url: https://medium.freecodecamp.org/the-difference-between-a-solution-and-the-best-solution-c5ff0cd573e3
id: the-difference-between-a-solution-and-the-best-solution-c5ff0cd573e3
date: 2016-01-25T03:06:47.269Z
tags: [
  "Web Development",
  "Education",
  "Teaching",
  "Design",
  "Programming"
]
---
# Any Solution Versus the Best Solution







![](https://cdn-images-1.medium.com/max/2000/1*wdzErOdqjTzh-ot9MTuEig.jpeg)







A couple of months ago, I was searching for resources to help me improve my coding skills. It didn’t take long before I stumbled upon [Free Code Camp](http://www.freecodecamp.com).

This open source community hosts a website dedicated to helping people learn how to code, with a focus on web development. Students can sign up for free and learn HTML, CSS, JavaScript, data visualization, and even back end technologies like Node.js.

The ultimate goal is to give people coding practice by building projects, and ultimately get real world experience by working with nonprofit organizations.

When I started their program, I flew through a lot of the HTML and CSS lessons, as I already had a little bit of experience with these technologies.

Once I got to the sections on JavaScript, though, I slowed down and took my time. Then I hit the Basic Algorithm Scripting section.

Now, I’ve been programming for a number of years, using a couple different languages, and I honestly thought that this was going to be a breeze.

I found out the hard way that these challenges are a little tougher than they appear on the surface. They not only tax your brain for the solutions, but also encourage you to use different features of the JavaScript language.

I spent some time working through a couple of the basic challenges, but inevitably, I got stuck.

#### A Light in the Dark

When we get stuck on problems, usually our first thought is to look up some resources and try and figure out what we are doing wrong.

Luckily, Free Code Camp has provided an amazing resource to help you out when you get stuck, like the [Free Code Camp Wiki](https://github.com/FreeCodeCamp/freecodecamp/wiki). I like to refer to this resource as a “light in the dark” because, just when you feel like giving up and throwing in the towel, this bright torch suddenly lights up the darkness around you!

The Free Code Camp wiki is an invaluable resource as you work your way through the front end project challenges. Each wiki article contains an explanation of the challenge, and even hints and several possible solutions.

Many times when I found myself stuck, I would visit the wiki and just read a hint or two to make sure that I was on the right track. I never really looked at the solutions until after I had solved the problems. I wanted to conquer the challenges on my own!

Along this path, I also discovered Free Code Camp’s large network of chat rooms where you can hang out with other campers (Free Code Camp students) and discuss what’s going wrong with your code.

Among the many people I encountered in the rooms, one person turned out to be an invaluable resource to me. [Justin Richardsson](http://gitter.im/hallaathrad) helped me with one of the challenges I was struggling on and, unbeknownst to him, started me down the path to realizing the missing step in my learning process.

#### Watch Your Step! Something is Missing!

Justin was explaining an error in my code, and he started talking about a better way to tackle the problem. He walked me through the process by asking me questions, guiding me toward discovering the steps for myself as we went along.

Eventually, I understood what he was talking about, and I had a realization. I had been solving the challenges and coming up with a solution, but was my solution the best solution?

It turned out that I was not taking full advantage of best practices and core concepts. This discovery lead me to believe that my solutions were in fact not the best way to solve the challenges, and that somewhere along the way I had missed a step.



![](https://cdn-images-1.medium.com/max/1600/1*Vh0V9wTj7wMm9HMX40FAzQ.jpeg)

The missing step.



The idea of this missing step boils down to doing one thing:

> Once you have found a working solution to the problem, you need to reevaluate your code and determine whether it can be improved.

The improvement could be as simple as using fewer temporary variables, or fewer loops. JavaScript has many useful features that — when truly understood — can be powerful tools for more efficient problem solving. Let me give you an example of what I mean.

One challenge involves a function taking in a string, and you must reverse the string and return it.

This first solution shows how many beginners attempt to solve this challenge. The first solution is not wrong, and it is okay to do this while you figure out the flow of what needs to happen. Let’s take a look at the first solution now:

<pre name="9ae5" id="9ae5" class="graf graf--pre graf-after--p">function reverseString(str) {  
  var splitString = str.split('');  
  var reversedString = splitString.reverse();  
  var finalString = reversedString.join('');  

  return finalString;  
}</pre>

Now looking at the above code, there is nothing inherently wrong with it. This solution to the challenge is technically valid, as it passes the required checks, but at this point we need to evaluate whether or not this is really the best way to solve this.

The first way I notice I can improve my code is by removing all of the unnecessary variables.

One thing that I feel many students forget while learning JavaScript is that you don’t need to create a new variable for every modification to an existing variable.

When you write an expression, the right side of the expressions is calculated before it executes. This is an important concept to understand, because it means that we can do this instead:

<pre name="c63a" id="c63a" class="graf graf--pre graf-after--p">function reverseString(str) {  
  str = str.split('');  
  str = str.reverse();  
  str = str.join('');  
  return str;  
}</pre>

Look at that! By leveraging the built in language features, we have already improved the readability of our code and removed all the unnecessary variables.

There is still more that we can do to improve this function though. We have utilized expressions and assignment, but lets take this one step further. I am going to make one more change to this function:

<pre name="7425" id="7425" class="graf graf--pre graf-after--p">function reverseString(str) {  
  return str.split('').reverse().join('');  
}</pre>

In this third solution, we have removed the multiple assignments to _str_ and have used a very important feature, **_function chaining_**.

It seems that many students while learning, forget some of these important features that honestly make our code so much more readable, and produce more correct solutions.

All three of the above solutions are technically correct, but most developers would probably consider the third solution to be the best for this problem. This is because we aren’t using any more resources than are necessary. Therefore the function can be run quickly, and not waste CPU cycles or other resources. Granted, when we are talking about it being faster to execute, we are talking relative to other functions being processed.

Now I can already hear the critics saying that a best solution is subjective, and that other people might think another solution is the best. I am not claiming that there is only one way to solve these challenges.

Clearly, there are many different ways to solve the challenges, but once we’ve come up with a solution, we need to make sure we are doing it _efficiently_. The difference between the first solution and the third solution is very clear. In terms of using this particular strategy to solve the challenge, the third solution is clearly better than the first.

#### What is Our Best Solution?

Justin recommended I help by contributing my new-found knowledge to the Free Code Camp wiki. I was very excited to help contribute, and that very night I worked on my first contribution.

I had realized that some of the articles in the wiki showed how to solve a challenge, but not necessarily the best way(s) to solve them. I made it my goal to try and contribute the best I could, so that I could help teach others this missing step when they looked for help. Somewhere along the line of our teaching process, we forgot that it is not just about solving a problem, but also teaching the best practices along the way.

I sincerely feel that when we help people with challenges on FreeCodeCamp, we should not only focus on teaching the basic concepts. When people come to those of us with more experience, we should help guide them toward adopting best practices.

It’s important to teach concepts and not just code. By helping people to understand concepts, many times they will figure out on their own that there is a better way to solve a problem.

One such experience I had involved a gentleman looking for help with a challenge. After examining his code, I could tell he knew what he wanted to do, but he was struggling to get there effectively.

Typically, the more code we have in a function, the more complicated it gets. Sometimes we end up making things way too complicated, like this camper had.

I proceeded to offer some help in the form of two hints. I explained two concepts to him, that he most likely forgot about, using very small snippets of code that weren’t relevant to the actual solution.

Upon reading the second hint I gave him, he excitedly asked me to hold on a minute as he thought he knew what to do. After a minute or two, he ecstatically posted that he had solved the challenge and posted his code!

This camper was so excited that he had finally figured it out, and I felt great knowing I had helped him solidify those core concepts. He then proceeded to tell me he wanted to go back and rework his other solutions before moving on, because he now knew a better way to solve them.

That right there shows exactly why it is so important to teach concepts and best practices. I am confident that the camper will remember those concepts and hopefully pass them on to someone else in need!

So what is our best next step? To teach people learning to code how to do it correctly and efficiently using best practices and core concepts. Only when we can confidently say that we are teaching the best ways to code, and instilling the best practices in students, can we say that we have solved the issue of the missing step in the learning process.








