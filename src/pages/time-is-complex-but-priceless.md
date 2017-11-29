---
author: Michael Olorunnisola
authorTwitter: https://twitter.com/MikeOlor
authorFacebook: none
title: "Algorithms in plain English: time complexity and Big-O notation"
subTitle: "Every good developer has time on their mind. They want to give their users more of it, so they can do all those things they enjoy. They d..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*1-5hf_o6j3szhVe33L104A.jpeg
url: https://medium.freecodecamp.org/time-is-complex-but-priceless-f0abd015063c
id: time-is-complex-but-priceless-f0abd015063c
date: 2016-09-18T18:43:30.475Z
tags: [
  "Programming",
  "Web Development",
  "JavaScript",
  "Tech",
  "Algorithms"
]
---
# Algorithms in plain English: time complexity and Big-O notation







![](https://cdn-images-1.medium.com/max/2000/1*1-5hf_o6j3szhVe33L104A.jpeg)







Every good developer has time on their mind. They want to give their users more of it, so they can do all those things they enjoy. They do this by minimizing **time complexity**.

Before you can understand time complexity in programming, you have to understand where it’s most commonly applied: in the design of **algorithms**.

### So what’s an algorithm, anyway?

Simply put, an algorithm is a series of contained steps, which you follow in order to achieve some goal, or to produce some output. Let’s take for example your grandma’s recipe for baking a cake. Wait, does that count as an algorithm? Sure it does!

<pre name="a5d6" id="a5d6" class="graf graf--pre graf-after--p">function BakeCake(flavor, icing){  
"  
 1\. Heat Oven to 350 F  
 2\. Mix flour, baking powder, salt  
 3\. Beat butter and sugar until fluffy  
 4\. Add eggs.  
 5\. Mix in flour, baking powder, salt  
 6\. Add milk and " + flavor + "  
 7\. Mix further  
 8\. Put in pan  
 9\. Bake for 30 minutes  
10." + if(icing === true) return 'add icing' + "  
10\. Stuff your face  
"  
}</pre>

<pre name="ab9b" id="ab9b" class="graf graf--pre graf-after--pre">BakeCake('vanilla', true) => deliciousness</pre>

Algorithms are useful in our examination of time complexity because they come in all shapes and sizes.

In the same way you can slice a pie a 100 different ways, you can solve a single problem with many different algorithms. Some solutions are just more efficient, taking less time and requiring less space than others.

So the main question is: how do we go about analyzing which solutions are most efficient?

Math to the rescue! Time complexity analysis in programming is just an extremely simplified mathematical way of analyzing how long an algorithm with a given number of inputs (n) will take to complete it’s task. It’s usually defined using **Big-O notation**.

### What’s Big O notation, you ask?

If you promise you won’t give up and stop reading, I will tell you.

Big-O notation is a way of converting the overall steps of an algorithm into algebraic terms, then excluding lower order constants and coefficients that don’t have that big an impact on the overall complexity of the problem.

Mathematicians will probably cringe a bit at my “overall impact” assumption there, but for developers to save time, it’s easier to simplify things this way:

<pre name="401e" id="401e" class="graf graf--pre graf-after--p">Regular       Big-O</pre>

<pre name="17b5" id="17b5" class="graf graf--pre graf-after--pre">2             O(1)   --> It's just a constant number</pre>

<pre name="e22e" id="e22e" class="graf graf--pre graf-after--pre">2n + 10       O(n)   --> n has the largest effect</pre>

<pre name="a4fa" id="a4fa" class="graf graf--pre graf-after--pre">5n^2          O(n^2) --> n^2 has the largest effect</pre>

In short, all this example is saying is: we only look at the factor in our expression that has the potential greatest impact on the value that our expression will return. (This changes as the constant gets extremely large and n gets small, but let’s not worry about that for now).

Below are some common time complexities with simple definitions. Feel free to check out [Wikipedia](https://en.wikipedia.org/wiki/Time_complexity), though, for more in-depth definitions.

*   O(1) — Constant Time: Given an input of size n, it only takes a single step for the algorithm to accomplish the task.
*   O(log n) — Logarithmic time: given an input of size n, the number of steps it takes to accomplish the task are decreased by some factor with each step.
*   O(n) — Linear Time: Given an input of size n, the number of of steps required is directly related (1 to 1)
*   O(n²) — Quadratic Time: Given an input of size n, the number of steps it takes to accomplish a task is square of n.
*   O(C^n) — Exponential Time: Given an input of size n, the number of steps it takes to accomplish a task is a constant to the n power (pretty large number).

With this knowledge in hand, lets see the number of steps that each of these time complexities entails:

<pre name="45a6" id="45a6" class="graf graf--pre graf-after--p">let n = 16;</pre>

<pre name="a9fb" id="a9fb" class="graf graf--pre graf-after--pre">O (1) = 1 step "(awesome!)"</pre>

<pre name="e1d6" id="e1d6" class="graf graf--pre graf-after--pre">O (log n) = 4 steps  "(awesome!)" -- assumed base 2</pre>

<pre name="3faf" id="3faf" class="graf graf--pre graf-after--pre">O (n) = 16 steps "(pretty good!)"</pre>

<pre name="a235" id="a235" class="graf graf--pre graf-after--pre">O(n^2) = 256 steps "(uhh..we can work with this?)"</pre>

<pre name="da72" id="da72" class="graf graf--pre graf-after--pre">O(2^n) = 65,536 steps "(...)"</pre>

As you can see, things can easily become orders of magnitude more complex depending on the complexity of your algorithm. Luckily, computers are powerful enough to still handle really large complexities relatively quickly.

So how do we go about analyzing our code with Big-O notation?

Well here are some quick and simple examples of how you can apply this knowledge to algorithms you might encounter in the wild or code up yourself.

We’ll use the data structures below for our examples:

<pre name="9407" id="9407" class="graf graf--pre graf-after--p">var friends = {  
 'Mark' : true,  
 'Amy' : true,  
 'Carl' : false,  
 'Ray' :  true,  
'Laura' : false,  
}  
var sortedAges = [22, 24, 27, 29, 31]</pre>

#### **O(1) — Constant Time**

Value look ups when you know the key (objects) or the index (arrays) always take one step, and are thus constant time.

<pre name="679c" id="679c" class="graf graf--pre graf-after--p">//If I know the persons name, I only have to take one step to check:</pre>

<pre name="685a" id="685a" class="graf graf--pre graf-after--pre">function isFriend(name){ //similar to knowing the index in an Array   
  return friends[name];   
};</pre>

<pre name="e222" id="e222" class="graf graf--pre graf-after--pre">isFriend('Mark') // returns True and only took one step</pre>

<pre name="5579" id="5579" class="graf graf--pre graf-after--pre">function add(num1,num2){ // I have two numbers, takes one step to return the value  
 return num1 + num2  
}</pre>

#### **O(log n) — Logarithmic Time**

If you know which side of the array to look on for an item, you save time by cutting out the other half.

<pre name="3acd" id="3acd" class="graf graf--pre graf-after--p">//You decrease the amount of work you have to do with each step</pre>

<pre name="09b1" id="09b1" class="graf graf--pre graf-after--pre">function thisOld(num, array){  
  var midPoint = Math.floor( array.length /2 );  
  if( array[midPoint] === num) return true;  
  if( array[midPoint] < num ) --> only look at second half of the array  
  if( array[midpoint] > num ) --> only look at first half of the array  
  //recursively repeat until you arrive at your solution  

}</pre>

<pre name="9d07" id="9d07" class="graf graf--pre graf-after--pre">thisOld(29, sortedAges) // returns true </pre>

<pre name="7e0c" id="7e0c" class="graf graf--pre graf-after--pre">//Notes  
 //There are a bunch of other checks that should go into this example for it to be truly functional, but not necessary for this explanation.  
 //This solution works because our Array is sorted  
 //Recursive solutions are often logarithmic  
 //We'll get into recursion in another post!</pre>

#### **O(n) — Linear Time**

You have to look at every item in the array or list to accomplish the task. Single **for loops** are almost always linear time. Also array methods like **indexOf** are also linear time. You’re just abstracted away from the looping process.

<pre name="8f22" id="8f22" class="graf graf--pre graf-after--p">//The number of steps you take is directly correlated to the your input size</pre>

<pre name="58ce" id="58ce" class="graf graf--pre graf-after--pre">function addAges(array){  
  var sum = 0;  
  for (let i=0 ; i < array.length; i++){  //has to go through each value  
    sum += array[i]  
  }  
 return sum;  
}</pre>

<pre name="7d24" id="7d24" class="graf graf--pre graf-after--pre">addAges(sortedAges) //133</pre>

#### **O(n²) — Quadratic Time**

Nested **for loops** are quadratic time, because you’re running a linear operation within another linear operation (or n*n = n²).

<pre name="2929" id="2929" class="graf graf--pre graf-after--p">//The number of steps you take is your input size squared</pre>

<pre name="9b09" id="9b09" class="graf graf--pre graf-after--pre">function addedAges(array){  
  var addedAge = [];  
    for (let i=0 ; i < array.length; i++){ //has to go through each value  
      for(let j=i+1 ; j < array.length ; j++){ //and go through them again  
        addedAge.push(array[i] + array[j]);  
      }  
    }  
  return addedAge;  
}</pre>

<pre name="b584" id="b584" class="graf graf--pre graf-after--pre">addedAges(sortedAges); //[ 46, 49, 51, 53, 51, 53, 55, 56, 58, 60 ]</pre>

<pre name="c9ea" id="c9ea" class="graf graf--pre graf-after--pre">//Notes  
 //Nested for loops. If one for loop is linear time (n)  
 //Then two nested for loops are (n * n) or (n^2) Quadratic!</pre>

#### **O(2^n) — Exponential Time**

Exponential time is usually for situations where you don’t know that much, and you have to try every possible combination or permutation.

<pre name="d724" id="d724" class="graf graf--pre graf-after--p">//The number of steps it takes to accomplish a task is a constant to the n power</pre>

<pre name="ae6c" id="ae6c" class="graf graf--pre graf-after--pre">//Thought example  
 //Trying to find every combination of letters for a password of length n</pre>

You should do time complexity analysis anytime you write code that has to run fast.

When you have various routes to solve a problem, it is definitely wiser to create a solution that just works first. But in the long run, you’ll want a solution that runs as quickly and efficiently as possible.

To help you with the problem solving process, here are some simple questions to ask:

> 1\. Does this solve the problem? **Yes** =>

> 2\. Do you have time to work on this

> **Yes** => go to step 3

> **No** => Come back to it later and go to step 6 for now.

> 3\. Does it cover all edge cases? **Yes** =>

> 4\. Are my complexities as low as possible ?

> **No** => rewrite or modify into a new solution –>go back to step 1

> **Yes** => go to step 5

> 5\. Is my code D.R.Y ? **Yes** =>

> 6\. Rejoice!

> **No** => Make it D.R.Y, then rejoice!

Analyze time complexity any and all times you are trying to solve a problem. It’ll make you a better developer in the log run. Your teammates and users will love you for it.

Again, most problems you will face as programmer — whether algorithmic or programmatic — will have tens if not hundreds of ways of solving it. They may vary in how they solve the problem, but they all still solve that problem.

You could be making decisions between whether to use sets or graphs to store data. You could be deciding whether or not to use Angular, React, or Backbone for a team project. All of these solutions solve the same problem in a different way.

Given this, it’s hard to say there is a single “right” or “best” answer to these problems. But it is possible to say there are “better” or “worse” answers to a given problem.

Using one of our previous examples, it might be better to use React for a team project if half your team has experience with it, so it’ll take less time to get up and running.

The ability to describe a better solution usually springs from some semblance of time complexity analysis.

In short, if you’re going to solve a problem, solve it well. And use some Big-O to help you figure out how.

Here’s a final recap:

*   **O(1) — **Constant Time: it only takes a single step for the algorithm to accomplish the task.
*   **O(log n) — **Logarithmic Time: The number of steps it takes to accomplish a task are decreased by some factor with each step.
*   **O(n) — **Linear Time: The number of of steps required are directly related (1 to 1).
*   **O(n²) — **Quadratic Time: The number of steps it takes to accomplish a task is square of n.
*   **O(C^n) — **Exponential: The number of steps it takes to accomplish a task is a constant to the n power (pretty large number).

And here are some helpful resources to learn more:

*   [Wikipedia](https://en.wikipedia.org/wiki/Time_complexity)
*   The [Big O Cheat Sheet](http://bigocheatsheet.com/) is a great resource with common algorithmic time complexities and a graphical representation. Check it out!








