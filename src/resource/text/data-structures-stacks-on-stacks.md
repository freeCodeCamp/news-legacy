---
author: Michael Olorunnisola
authorTwitter: https://twitter.com/MikeOlor
authorFacebook: none
title: "A Gentle Introduction to Data Structures: How Stacks Work"
subTitle: "Anyone who’s applied for a developer job at a large tech company — and spent days practicing common algorithm interview questions — has p..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*3kenGRftkBau3t6MozALpw.jpeg
url: https://medium.freecodecamp.org/data-structures-stacks-on-stacks-c25f2633c529
id: data-structures-stacks-on-stacks-c25f2633c529
date: 2016-10-25T19:25:15.057Z
tags: [
  "Programming",
  "Life Lessons",
  "Tech",
  "Web Development",
  "Algorithms"
]
---
# A Gentle Introduction to Data Structures: How Stacks Work







![](https://cdn-images-1.medium.com/max/2000/1*3kenGRftkBau3t6MozALpw.jpeg)







Anyone who’s applied for a developer job at a large tech company — and spent days practicing common algorithm interview questions — has probably concluded:

> “Wow. I really gotta know data structures cold.”

What are data structures? And why are they so important? Wikipedia provides a succinct and accurate answer:

> _A data structure is a particular way of organizing data in a computer so that it can be used efficiently._

The key word here is _efficiently,_ a word you’ll hear early and often as you analyze different data structures.

These structures provide scaffolding for data to be stored in ways that allow searches, inserts, removals, and updates to take place quickly and dynamically.

As powerful as computers are, they’re still just machines that require direction to accomplish any useful task (at least until general AI comes along). Until then, you have to give them the clearest, most efficient commands you can.

Now the same way you can build a home in 50 different ways, you can structure data in 50 different ways. Luckily for you, lots of really smart people have built great scaffolds that have stood the test of time. All you have to do is learn what they are, how they work, and how to best use them.

The following is a list of a few of the most common data structures. I’ll cover each of these individually in future articles — this one is focused 100% on stacks. Although there is often overlap, each of these structures has nuances that make them best suited for certain situations:

*   Stacks
*   Queues
*   Linked Lists
*   Sets
*   Trees
*   Graphs
*   Hash Tables

You’ll also encounter variations on these data structures, such as doubly-linked lists, b-trees, and priority queues. But once you understand these core implementations, understanding these variations should be much easier.

So let’s begin part one of our data structures dive with an analysis of Stacks!

### **Stacks**

*   Literally a stack of data (like a stack of pancakes)
*   Additions (push) — always add to the top of the stack
*   Removals (pop) — always remove from the top of the stack
*   **Pattern type:** **L**ast item **I**n is the **F**irst item **O**ut (LIFO)



![](https://cdn-images-1.medium.com/max/1600/0*S3Kr9Cpm16ZmCEad.png)



*   **Example use case**: Using the back and forward buttons in your browser

In many programming languages, arrays have the functionality of a stack built in. But for the sake of being thorough, you’ll rebuild it here using a JavaScript object.

The first thing you need is to create a stack for you to store each site you visit, and a method on your stack to keep track of your current position:

<pre name="02db" id="02db" class="graf graf--pre graf-after--p">class Stack {  
  constructor(){  
    this._storage = {};    
    this._position = -1; // 0 indexed when we add items!  
  }  
  top(){  
    return this._position;  
  }  
}</pre>

<pre name="cf09" id="cf09" class="graf graf--pre graf-after--pre">let browserHistory = new Stack();</pre>

Note that the underscore before the variable names signifies to other developers these variables are private, and shouldn’t be manipulated externally — only by the methods on the class. For example, I shouldn’t execute something like:

<pre name="d7f1" id="d7f1" class="graf graf--pre graf-after--p">browserHistory._position = 2.</pre>

This is why I created the **top()** method to return the current position of the stack.

In this example, each site you visit will be stored in your browserHistory stack. To help you keep track of where it is in the stack, you can use the position as the key for each website, then increment it on each new addition. I’ll do this via the push method:

<pre name="e470" id="e470" class="graf graf--pre graf-after--p">class Stack {</pre>

<pre name="2b7c" id="2b7c" class="graf graf--pre graf-after--pre">  constructor(){  
    this._storage = {};   
    this._position = -1;  
  }</pre>

<pre name="61b9" id="61b9" class="graf graf--pre graf-after--pre">  push(value){  
    this._position++;   
    this._storage[this._position] = value   
  }</pre>

<pre name="1aa4" id="1aa4" class="graf graf--pre graf-after--pre">  top(){  
    return this._position;  
  }</pre>

<pre name="dc59" id="dc59" class="graf graf--pre graf-after--pre">}</pre>

<pre name="dd09" id="dd09" class="graf graf--pre graf-after--pre">let browserHistory = new Stack();</pre>

<pre name="eeb0" id="eeb0" class="graf graf--pre graf-after--pre">browserHistory.push("google.com"); //navigating to Medium  
browserHistory.push("medium.com"); // navigating to Free Code Camp  
browserHistory.push("freecodecamp.com"); // navigating to Netflix  
browserHistory.push("netflix.com"); // current site</pre>

After the above code is executed, your storage object will look a like this:

<pre name="b38b" id="b38b" class="graf graf--pre graf-after--p">{</pre>

<pre name="34ca" id="34ca" class="graf graf--pre graf-after--pre">  0: “google.com”</pre>

<pre name="6c64" id="6c64" class="graf graf--pre graf-after--pre">  1: “medium.com”</pre>

<pre name="7864" id="7864" class="graf graf--pre graf-after--pre">  2: “freecodecamp.com”</pre>

<pre name="fad5" id="fad5" class="graf graf--pre graf-after--pre">  3: “netflix.com”</pre>

<pre name="bf87" id="bf87" class="graf graf--pre graf-after--pre">}</pre>

So imagine you’re currently on Netflix, but feel guilty for not finishing that difficult recursion problem on Free Code Camp. You decide to hit the back button to go knock it out.

How is that action represented in your stack? With pop:

<pre name="ea2c" id="ea2c" class="graf graf--pre graf-after--p">class Stack {  

  constructor(){  
    this._storage = {};  
    this._position = -1;  
  }  

  push(value){  
    this._position++;   
    this._storage[this._position] = value;   
  }  

  pop(){  
    if(this._position > -1){  
      let val = this._storage[this._position];   
      delete this._storage[this._position];   
      this._position--;  
      return val;  
    }  
  }</pre>

<pre name="55ba" id="55ba" class="graf graf--pre graf-after--pre">  top(){  
    return this._position;  
  }  
}</pre>

<pre name="0a54" id="0a54" class="graf graf--pre graf-after--pre">let browserHistory = new Stack();</pre>

<pre name="4f1b" id="4f1b" class="graf graf--pre graf-after--pre">browserHistory.push("google.com"); //navigating to Medium  
browserHistory.push("medium.com"); // navigating to Free Code Camp  
browserHistory.push("freecodecamp.com"); // navigating to Netflix  
browserHistory.push("netflix.com"); //current site</pre>

<pre name="4f50" id="4f50" class="graf graf--pre graf-after--pre">browserHistory.pop(); //Returns netflix.com</pre>

<pre name="474b" id="474b" class="graf graf--pre graf-after--pre">//Free Code Camp is now our current site</pre>

By hitting the back button, you remove the most recent site added to your browser History and view the one on top of your stack. You also decrement the position variable so you have an accurate representation of where in the history you are. All of this should only occur if there’s actually something in your stack of course.

This looks good so far, but what’s the last piece that’s missing?

When you finish crushing the problem, you decide to reward yourself by going back to Netflix, by hitting the forward button. But where’s Netflix in your stack? You technically deleted it to save space, so you don’t have access to it anymore in your browserHistory.

Luckily, the pop function did return it, so maybe you can store it somewhere for later when you need it. How about in another stack!

You can create a “forward” stack to store each site that’s popped off of your browserHistory. So when you want to return to them, you just pop them off the forward stack, and push them back onto your browserHistory stack:

<pre name="719a" id="719a" class="graf graf--pre graf-after--p">class Stack {  

  constructor(){  
    this._storage = {};  
    this._position = -1;  
  }  

  push(value){  
    this._position++;   
    this._storage[this._position] = value;   
  }  

  pop(){  
    if(this._position > -1){  
      let val = this._storage[this._position];   
      delete this._storage[this._position];   
      this._position--;  
      return val;  
    }  
  }</pre>

<pre name="903e" id="903e" class="graf graf--pre graf-after--pre">top(){  
    return this._position;  
  }  
}</pre>

<pre name="264f" id="264f" class="graf graf--pre graf-after--pre">let browserHistory = new Stack();  
let forward = new Stack() //Our new forward stack!</pre>

<pre name="cbc9" id="cbc9" class="graf graf--pre graf-after--pre">browserHistory.push("google.com");  
browserHistory.push("medium.com");  
browserHistory.push("freecodecamp.com");  
browserHistory.push("netflix.com");</pre>

<pre name="73c8" id="73c8" class="graf graf--pre graf-after--pre">//hit the back button</pre>

<pre name="2e5c" id="2e5c" class="graf graf--pre graf-after--pre">forward.push(browserHistory.pop()); // forward stack holds Netflix</pre>

<pre name="ff26" id="ff26" class="graf graf--pre graf-after--pre">// ...We crush the Free Code Camp problem here, then hit forward!</pre>

<pre name="11f1" id="11f1" class="graf graf--pre graf-after--pre">  browserHistory.push(forward.pop());</pre>

<pre name="8e26" id="8e26" class="graf graf--pre graf-after--pre">//Netflix is now our current site</pre>

And there you go! You’ve used a data structure to re-implement basic browser back and forward navigation!

Now to be completely thorough, let’s say you went to a completely new site from Free Code Camp, like LeetCode to get more practice. You technically would still have Netflix in your forward stack, which really doesn’t make sense.

Luckily, you can implement a simple while loop to get rid of Netflix and any other sites quickly:

<pre name="b6bc" id="b6bc" class="graf graf--pre graf-after--p">//When I manually navigate to a new site, make forward stack empty</pre>

<pre name="154a" id="154a" class="graf graf--pre graf-after--pre">while(forward.top() > -1){  
  forward.pop();  
}</pre>

Great! Now your navigation should work the way it’s supposed to.

Time for a quick recap. Stacks:

1.  Follow a Last In First Out (LIFO) pattern
2.  Have a push (add) and pop (remove) method that manage the contents of the stack
3.  Have a top property that allows us to track how large your stack is and the current top position.

At the end of each post in this series, I’ll do a brief [time complexity analysis](http://bigocheatsheet.com/) on the methods of each data structure to get some extra practice.

Here’s the code again:

<pre name="6b92" id="6b92" class="graf graf--pre graf-after--p">push(value){  
    this._position++;   
    this._storage[this._position] = value;   
  }  

  pop(){  
    if(this._position > -1){  
      let val = this._storage[this._position];   
      delete this._storage[this._position];   
      this._position--;  
      return val;  
    }  
  }  

  top(){  
    return this._position;  
  }</pre>

**Push** (addition) is **O(1)**. Since you’ll always know the current position (thanks to your position variable), you don’t have to iterate to add an item.

**Pop** (removal) is **O(1)**. No iteration is necessary for removal since you always have the current top position.

**Top** is **O(1)**. The current position is always known.

There isn’t a native search method on stacks, but if you were to add one, what time complexity do you think it would be?

**Find** (search) would be **O(n)**. You would technically have to iterate over your storage until you found the value you were looking for. This is essentially the indexOf method on Arrays.

### Further reading

[Wikipedia](https://en.wikipedia.org/wiki/List_of_data_structures) has an in-depth list of abstract data types.

I didn’t get a chance to get into the topic of a stack overflow, but if you’ve read my post on [recursion](https://medium.freecodecamp.com/recursion-recursion-recursion-4db8890a674d#.pxck4rh8k) you might have a good idea on why they occur. To beef up that knowledge, there is a great post about it on [StackOverflow](http://stackoverflow.com/questions/26158/how-does-a-stack-overflow-occur-and-how-do-you-prevent-it) (_see what I did there?_)

In my next post, I’ll jump right into queues.








