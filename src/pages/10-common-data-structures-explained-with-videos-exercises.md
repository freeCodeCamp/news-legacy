---
author: Beau Carnes
authorTwitter: https://twitter.com/CarnesBeau
authorFacebook: none
title: "10 Common Data Structures Explained with Videos + Exercises"
subTitle: "Data structures are a critical part of software development, and one of the most common topics for developer job interview questions...."
coverSrc: https://cdn-images-1.medium.com/max/2000/0*I5vtdhUqmRJ1zI1e.jpg
url: https://medium.freecodecamp.org/10-common-data-structures-explained-with-videos-exercises-aaff6c06fb2b
id: 10-common-data-structures-explained-with-videos-exercises-aaff6c06fb2b
date: 2017-07-05T21:04:06.054Z
tags: [
  "Programming",
  "JavaScript",
  "Self Improvement",
  "Productivity",
  "Technology"
]
---
# 10 Common Data Structures Explained with Videos + Exercises







![](https://cdn-images-1.medium.com/max/2000/0*I5vtdhUqmRJ1zI1e.jpg)







> “Bad programmers worry about the code. Good programmers worry about data structures and their relationships.” — Linus Torvalds, creator of Linux

> ****Update**** _My new video course about Algorithms is now live! Check out_ [_Algorithms in Motion from Manning Publications_](https://www.manning.com/livevideo/algorithms-in-motion?a_aid=algmotion&a_bid=9022d293)_. Get 39% off my course by using code ‘_**_39carnes_**_’!_

Data structures are a critical part of software development, and one of the most common topics for developer job interview questions.

The good news is that they’re basically just specialized formats for organizing and storing data.

I’m going to teach you 10 of the most common data structures — right here in this short article.

I’ve embedded videos that I created for each of these data structures. I’ve also linked to code examples for each of them, which show how to implement these in JavaScript.

And to give you some practice, I’ve linked to some brand new challenges from the forthcoming [freeCodeCamp beta curriculum](https://beta.freecodecamp.com/map).

Note that some of these data structures include time complexity in Big O notation. This isn’t included for all of them since the time complexity is sometimes based on how it’s implemented. If you want to learn more about Big O Notation, check out [this video](https://www.youtube.com/watch?v=KSNx22U4uWE&index=39&list=PLWKjhJtqVAbmfoj2Th9fvxhHIeqFO7wOy) by [Briana Marie](https://medium.com/@brianamarie132).

Also note that even though I show how to implement these data structures in JavaScript, for most of them you would never need to implement them yourself, unless you were using a low-level language like C.

JavaScript (like most high-level languages) has built-in implementations of many of these data structures.

Still, knowing how to implement these data structures will give you a huge edge in your developer job search, and may come in handy when you’re trying to write high-performance code.

### Linked Lists

A linked list is one of the most basic data structures. It is often compared to an array since many other data structures can be implemented with either an array or a linked list. They each have advantages and disadvantages.



![](https://cdn-images-1.medium.com/max/1600/0*I2krMHdnjzUqidwf.png)

Linked list representation



A linked list consists of a group of nodes which together represent a sequence. Each node contains two things: the actual data being stored (which can be basically any type of data) and a pointer (or link) to the next node in the sequence. There are also doubly linked lists where each node has a pointer to both the next item and the previous item in the list.

The most basic operations in a linked list are adding an item to the list, deleting an item from the list, and searching the list for an item.

[See the code for a linked list in JavaScript here.](https://codepen.io/beaucarnes/pen/ybOvBq?editors=0012)

<pre name="d98b" id="d98b" class="graf graf--pre graf-after--p">Linked list time complexity  
╔═══════════╦═════════╦════════════╗  
║ Algorithm ║ Average ║ Worst Case ║  
╠═══════════╬═════════╬════════════╣  
║ Space     ║ O(n)    ║ O(n)       ║  
║ Search    ║ O(n)    ║ O(n)       ║  
║ Insert    ║ O(1)    ║ O(1)       ║  
║ Delete    ║ O(1)    ║ O(1)       ║  
╚═══════════╩═════════╩════════════╝</pre>





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/fd566712493f7238cbb1883ad42e9746?postId=aaff6c06fb2b" data-media-id="fd566712493f7238cbb1883ad42e9746" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F9YddVVsdG5A%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





#### freeCodeCamp challenges

*   [Work with Nodes in a Linked List](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/work-with-nodes-in-a-linked-list)
*   [Create a Linked List Class](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/create-a-linked-list-class)
*   [Remove Elements from a Linked List](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/remove-elements-from-a-linked-list)
*   [Search within a Linked List](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/search-within-a-linked-list)
*   [Remove Elements from a Linked List by Index](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/remove-elements-from-a-linked-list-by-index)
*   [Add Elements at a Specific Index in a Linked List](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/add-elements-at-a-specific-index-in-a-linked-list)
*   [Create a Doubly Linked List](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/create-a-doubly-linked-list)
*   [Reverse a Doubly Linked List](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/reverse-a-doubly-linked-list)

### Stacks

A stack is a basic data structure where you can only insert or delete items at the top of the stack. It is kind of similar to a stack of books. If you want to look at a book in the middle of the stack you must take all of the books above it off first.

The stack is considered LIFO (Last In First Out) — meaning the last item you put in the stack is the first item that comes out of the stack



![](https://cdn-images-1.medium.com/max/1600/0*kAUG_JFNvKLpPs-7.png)

Stack representation



There are three main operations that can be performed on stacks: inserting an item into a stack (called ‘push’), deleting an item from the stack (called ‘pop’), and displaying the contents of the stack (sometimes called ‘pip’).

[See the code for a stack in JavaScript here.](http://codepen.io/beaucarnes/pen/yMBGbR?editors=0012)

<pre name="b93f" id="b93f" class="graf graf--pre graf-after--p">Stack time complexity  
╔═══════════╦═════════╦════════════╗  
║ Algorithm ║ Average ║ Worst Case ║  
╠═══════════╬═════════╬════════════╣  
║ Space     ║ O(n)    ║ O(n)       ║  
║ Search    ║ O(n)    ║ O(n)       ║  
║ Insert    ║ O(1)    ║ O(1)       ║  
║ Delete    ║ O(1)    ║ O(1)       ║  
╚═══════════╩═════════╩════════════╝</pre>





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/4477249ad88e3e93ae8f2c919cdf5aba?postId=aaff6c06fb2b" data-media-id="4477249ad88e3e93ae8f2c919cdf5aba" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FGj5qBheGOEo%2Fhqdefault.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





#### freeCodeCamp challenges

*   [Learn how a Stack Works](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/learn-how-a-stack-works)
*   [Create a Stack Class](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/create-a-stack-class)

### Queues

You can think of a queue as a line of people at a grocery store. The first one in the line is the first one to be served. Just like a queue.



![](https://cdn-images-1.medium.com/max/1600/0*INQFkmoG8FWYuNCG.png)

Queue representation



A queue is considered FIFO (First In First Out) to demonstrate the way it accesses data. This means that once a new element is added, all elements that were added before have to be removed before the new element can be removed.

A queue has just two main operations: enqueue and dequeue. Enqueue means to insert an item into the back of the queue and dequeue means removing the front item.

[See the code for a queue in JavaScript here.](http://codepen.io/beaucarnes/pen/QpaQRG?editors=0012)

<pre name="aadf" id="aadf" class="graf graf--pre graf-after--p">Queue time complexity  
╔═══════════╦═════════╦════════════╗  
║ Algorithm ║ Average ║ Worst Case ║  
╠═══════════╬═════════╬════════════╣  
║ Space     ║ O(n)    ║ O(n)       ║  
║ Search    ║ O(n)    ║ O(n)       ║  
║ Insert    ║ O(1)    ║ O(1)       ║  
║ Delete    ║ O(1)    ║ O(1)       ║  
╚═══════════╩═════════╩════════════╝</pre>





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/f164c0e36d7a1add96d5dff7623cdca0?postId=aaff6c06fb2b" data-media-id="f164c0e36d7a1add96d5dff7623cdca0" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FbK7I79hcm08%2Fhqdefault.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





#### freeCodeCamp challenges

*   [Create a Queue Class](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/create-a-queue-class)
*   [Create a Priority Queue Class](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/create-a-priority-queue-class)
*   [Create a Circular Queue](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/create-a-circular-queue)

### Sets



![](https://cdn-images-1.medium.com/max/1600/1*R0EJij5oyOxP8gJ2jXm5Jw.png)

Set representation



The set data structure stores values without any particular order and with no repeated values. Besides being able to add and remove elements to a set, there are a few other important set functions that work with two sets at once.

*   Union — This combines all the items from two different sets and returns this as a new set (with no duplicates).
*   Intersection — Given two sets, this function returns another set that has all items that are part of both sets.
*   Difference — This returns a list of items that are in one set but NOT in a different set.
*   Subset — This returns a boolean value that shows if all the elements in one set are included in a different set.

[View the code to implement a set in JavaScript here.](http://codepen.io/beaucarnes/pen/dvGeeq?editors=0012)





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/e496892d2b9847db9c47c4d2db5312da?postId=aaff6c06fb2b" data-media-id="e496892d2b9847db9c47c4d2db5312da" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fwl8u02IdVxo%2Fhqdefault.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





#### freeCodeCamp challenges

*   [Create a Set Class](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/create-a-set-class)
*   [Remove from a Set](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/remove-from-a-set)
*   [Size of the Set](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/size-of-the-set)
*   [Perform a Union on Two Sets](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/perform-a-union-on-two-sets)
*   [Perform an Intersection on Two Sets of Data](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/perform-an-intersection-on-two-sets-of-data)
*   [Perform a Difference on Two Sets of Data](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/perform-a-difference-on-two-sets-of-data)
*   [Perform a Subset Check on Two Sets of Data](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/perform-a-subset-check-on-two-sets-of-data)
*   [Create and Add to Sets in ES6](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/create-and-add-to-sets-in-es6)
*   [Remove items from a set in ES6](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/remove-items-from-a-set-in-es6)
*   [Use .has and .size on an ES6 Set](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/use-has-and-size-on-an-es6-set)
*   [Use Spread and Notes for ES5 Set() Integration](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/use-spread-and-notes-for-es5-set-integration)

### Maps

A map is a data structure that stores data in key / value pairs where every key is unique. A map is sometimes called an associative array or dictionary. It is often used for fast look-ups of data. Maps allow the following things:



![](https://cdn-images-1.medium.com/max/1600/1*gu_lK-CJmho9llQAVD01Kw.png)

Map representation



*   the addition of a pair to the collection
*   the removal of a pair from the collection
*   the modification of an existing pair
*   the lookup of a value associated with a particular key

[View the code to implement a map in JavaScript here.](https://codepen.io/beaucarnes/pen/jBjobG?editors=0012)





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/a9130e9d3453c27f95bdf79fe2114b93?postId=aaff6c06fb2b" data-media-id="a9130e9d3453c27f95bdf79fe2114b93" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F_1BPrCHcjhs%2Fhqdefault.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





#### freeCodeCamp challenges

*   [Create a Map Data Structure](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/create-a-map-data-structure)
*   [Create an ES6 JavaScript Map](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/create-an-es6-javascript-map)

### Hash Tables



![](https://cdn-images-1.medium.com/max/1600/1*Ic9dWfQsehh74OidwUZgkA.png)

Hash table and hash function representation



A hash table is a map data structure that contains key / value pairs. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

The hash function usually takes a string as input and it outputs an numerical value. The hash function should always give the same output number for the same input. When two inputs hash to the same numerical output, this is called a collision. The goal is to have few collisions.

So when you input a key / value pair into a hash table, the key is run through the hash function and turned into a number. This numerical value is then used as the actual key that the value is stored by. When you try to access the same key again, the hashing function will process the key and return the same numerical result. The number will then be used to look up the associated value. This provides very efficient O(1) lookup time on average.

[View the code for a hash table here.](https://codepen.io/beaucarnes/pen/VbYGMb?editors=0012)

<pre name="bb0d" id="bb0d" class="graf graf--pre graf-after--p">Hash table time complexity  
╔═══════════╦═════════╦════════════╗  
║ Algorithm ║ Average ║ Worst Case ║  
╠═══════════╬═════════╬════════════╣  
║ Space     ║ O(n)    ║ O(n)       ║  
║ Search    ║ O(1)    ║ O(n)       ║  
║ Insert    ║ O(1)    ║ O(n)       ║  
║ Delete    ║ O(1)    ║ O(n)       ║  
╚═══════════╩═════════╩════════════╝</pre>





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/8779964a8cad317707868943fbb7b04f?postId=aaff6c06fb2b" data-media-id="8779964a8cad317707868943fbb7b04f" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FF95z5Wxd9ks%2Fhqdefault.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





#### freeCodeCamp challenges

*   [Create a Hash Table](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/create-a-hash-table)

### Binary Search Tree



![](https://cdn-images-1.medium.com/max/1600/0*x5o1G1UpM1RfLpyx.png)

Binary search tree



A tree is a data structure composed of nodes It has the following characteristics:

1.  Each tree has a root node (at the top).
2.  The root node has zero or more child nodes.
3.  Each child node has zero or more child nodes, and so on.

A _binary_ _search_ tree adds these two characteristics:

1.  Each node has up to two children.
2.  For each node, its left descendents are less than the current node, which is less than the right descendents.

Binary search trees allow fast lookup, addition and removal of items. The way that they are set up means that, on average, each comparison allows the operations to skip about half of the tree, so that each lookup, insertion or deletion takes time proportional to the logarithm of the number of items stored in the tree.

[View the code for a binary search tree in JavaScript here](https://codepen.io/beaucarnes/pen/ryKvEQ?editors=0011).

<pre name="6778" id="6778" class="graf graf--pre graf-after--p">Binary search time complexity  
╔═══════════╦══════════╦════════════╗  
║ Algorithm ║ Average  ║ Worst Case ║  
╠═══════════╬══════════╬════════════╣  
║ Space     ║ O(n)     ║ O(n)       ║  
║ Search    ║ O(log n) ║ O(n)       ║  
║ Insert    ║ O(log n) ║ O(n)       ║  
║ Delete    ║ O(log n) ║ O(n)       ║  
╚═══════════╩══════════╩════════════╝</pre>





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/7a632a27171bef716622ef0727634de4?postId=aaff6c06fb2b" data-media-id="7a632a27171bef716622ef0727634de4" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F5cU1ILGy6dM%2Fhqdefault.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>









<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/841826c5540866317667f605ca997272?postId=aaff6c06fb2b" data-media-id="841826c5540866317667f605ca997272" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FAagf3RyK3Lw%2Fhqdefault.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





#### freeCodeCamp challenges

*   [Find the Minimum and Maximum Value in a Binary Search Tree](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/find-the-minimum-and-maximum-value-in-a-binary-search-tree)
*   [Add a New Element to a Binary Search Tree](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/add-a-new-element-to-a-binary-search-tree)
*   [Check if an Element is Present in a Binary Search Tree](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/check-if-an-element-is-present-in-a-binary-search-tree)
*   [Find the Minimum and Maximum Height of a Binary Search Tree](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/find-the-minimum-and-maximum-height-of-a-binary-search-tree)
*   [Use Depth First Search in a Binary Search Tree](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/use-depth-first-search-in-a-binary-search-tree)
*   [Use Breadth First Search in a Binary Search Tree](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/use-breadth-first-search-in-a-binary-search-tree)
*   [Delete a Leaf Node in a Binary Search Tree](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/delete-a-leaf-node-in-a-binary-search-tree)
*   [Delete a Node with One Child in a Binary Search Tree](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/delete-a-node-with-one-child-in-a-binary-search-tree)
*   [Delete a Node with Two Children in a Binary Search Tree](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/delete-a-node-with-two-children-in-a-binary-search-tree)
*   [Invert a Binary Tree](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/invert-a-binary-tree)

### Trie

The trie (pronounced ‘try’), or prefix tree, is a kind of search tree. A trie stores data in steps where each step is a node in the trie. Tries are often used to store words for quick lookup, such as a word auto-complete feature.



![](https://cdn-images-1.medium.com/max/1600/0*lqKJ7WnpvZ4fbUYd.png)

Trie representation



Each node in a language trie contains one letter of a word. You follow the branches of a trie to spell a word, one letter at a time. The steps begin to branch off when the order of the letters diverge from the other words in the trie, or when a word ends. Each node contains a letter (data) and a boolean that indicates whether the node is the last node in a word.

Look at the image and you can form words. Always start at the root node at the top and work down. The trie shown here contains the word ball, bat, doll, do, dork, dorm, send, sense.

[View the code for a trie in JavaScript here.](https://codepen.io/beaucarnes/pen/mmBNBd?editors=0011)





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/26c206b1369ca6c33ef4faf4c9b77b5c?postId=aaff6c06fb2b" data-media-id="26c206b1369ca6c33ef4faf4c9b77b5c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F7XmS8McW_1U%2Fhqdefault.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





#### freeCodeCamp challenges

*   [Create a Trie Search Tree](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/create-a-trie-search-tree)

### Binary Heap

A binary heap is another type of tree data structure. Every node has at most two children. Also, it is a complete tree. This means that all levels are completely filled until the last level and the last level is filled from left to right.



![](https://cdn-images-1.medium.com/max/1600/1*Lu5E1YaakS3JFcCqOsiniw.png)

Min and max heap representations



A binary heap can be either a min heap or a max heap. In a max heap, the keys of parent nodes are always greater than or equal to those of the children. In a min heap, the keys of parent nodes are less than or equal to those of the children.

The order between levels is important but the order of nodes on the same level is not important. In the image, you can see that the third level of the min heap has values 10, 6, and 12\. Those numbers are not in order.

[View the code for a heap in JavaScript here.](https://codepen.io/beaucarnes/pen/JNvENQ?editors=0011)

<pre name="9509" id="9509" class="graf graf--pre graf-after--p">Binary heap time complexity  
╔═══════════╦══════════╦════════════╗  
║ Algorithm ║ Average  ║ Worst Case ║  
╠═══════════╬══════════╬════════════╣  
║ Space     ║ O(n)     ║ O(n)       ║  
║ Search    ║ O(n)     ║ O(n)       ║  
║ Insert    ║ O(1)     ║ O(log n)   ║  
║ Delete    ║ O(log n) ║ O(log n)   ║  
║ Peek      ║ O(1)     ║ O(1)       ║  
╚═══════════╩══════════╩════════════╝</pre>





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/9d209b599c35e2c123d9ef597b7bcbdd?postId=aaff6c06fb2b" data-media-id="9d209b599c35e2c123d9ef597b7bcbdd" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FdM_JHpfFITs%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





#### freeCodeCamp challenges

*   [Insert an Element into a Max Heap](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/insert-an-element-into-a-max-heap)
*   [Remove an Element from a Max Heap](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/remove-an-element-from-a-max-heap)
*   [Implement Heap Sort with a Min Heap](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/implement-heap-sort-with-a-min-heap)

### Graph

Graphs are collections of nodes (also called vertices) and the connections (called edges) between them. Graphs are also known as networks.

One example of graphs is a social network. The nodes are people and the edges are friendship.



![](https://cdn-images-1.medium.com/max/1600/1*fYG3B8hi4O2kk6aHvFB5mg.png)



There are two major types of graphs: directed and undirected. Undirected graphs are graphs without any direction on the edges between nodes. Directed graphs, in contrast, are graphs with a direction in its edges.

Two common ways to represent a graph are an adjacency list and an adjacency matrix.



![](https://cdn-images-1.medium.com/max/1600/1*01PEzMXTsl9UOnqiGpfnWw.png)

Adjacency matrix graph



An adjacency list can be represented as a list where the left side is the node and the right side lists all the other nodes it’s connected to.

An adjacency matrix is a grid of numbers, where each row or column represents a different node in the graph. At the intersection of a row and a column is a number that indicates the relationship. Zeros mean there is no edge or relationship. Ones mean there is a relationship. Numbers higher than one can be used to show different weights.

Traversal algorithms are algorithms to traverse or visit nodes in a graph. The main types of traversal algorithms are breadth-first search and depth-first search. One of the uses is to determine how close nodes are to a root node. See how to implement breadth-first search in JavaScript in the video below.

[See the code for breadth-first search on an adjacency matrix graph in JavaScript.](https://codepen.io/beaucarnes/pen/XgrXvw?editors=0011)

<pre name="fece" id="fece" class="graf graf--pre graf-after--p">Adjacency list (graph) time complexity  
╔═══════════════╦════════════╗  
║   Algorithm   ║    Time    ║  
╠═══════════════╬════════════╣  
║ Storage       ║ O(|V|+|E|) ║  
║ Add Vertex    ║ O(1)       ║  
║ Add Edge      ║ O(1)       ║  
║ Remove Vertex ║ O(|V|+|E|) ║  
║ Remove Edge   ║ O(|E|)     ║  
║ Query         ║ O(|V|)     ║  
╚═══════════════╩════════════╝</pre>





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/3d1d78730f300c5d6da2a3b4c9f5ee12?postId=aaff6c06fb2b" data-media-id="3d1d78730f300c5d6da2a3b4c9f5ee12" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDBRW8nwZV-g%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>









<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/ed48de2f5016ccf7ea23935e6ba18e09?postId=aaff6c06fb2b" data-media-id="ed48de2f5016ccf7ea23935e6ba18e09" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fwu0ckYkltus%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





#### freeCodeCamp challenges

*   [Introduction to Graphs](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/introduction-to-graphs)
*   [Adjacency List](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/adjacency-list)
*   [Adjacency Matrix](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/adjacency-matrix)
*   [Incidence Matrix](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/incidence-matrix)
*   [Breadth-First Search](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/breadthfirst-search)
*   [Depth-First Search](http://beta.freecodecamp.com/challenges/coding-interview-data-structure-questions/depthfirst-search)

### More

The book _Grokking Algorithms_ is the best book on the topic if you are new to data structures/algorithms and don’t have a computer science background. It uses easy-to-understand explanations and fun, hand-drawn illustrations (by the author who is a lead developer at Etsy) to explain some of the data structures featured in this article.

[**Grokking Algorithms: An illustrated guide for programmers and other curious people**  
_Summary Grokking Algorithms is a fully illustrated, friendly guide that teaches you how to apply common algorithms to…_www.amazon.com](https://www.amazon.com/gp/product/1617292230/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=bcar08-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1617292230&linkId=83471c93327ff24766dd812f9799f95a "https://www.amazon.com/gp/product/1617292230/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=bcar08-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1617292230&linkId=83471c93327ff24766dd812f9799f95a")[](https://www.amazon.com/gp/product/1617292230/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=bcar08-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1617292230&linkId=83471c93327ff24766dd812f9799f95a)








