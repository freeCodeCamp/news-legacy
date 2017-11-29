---
author: TK
authorTwitter: https://twitter.com/LeandroTk_
authorFacebook: https://facebook.com/952511121459825
title: "Everything you need to know about tree data structures"
subTitle: "When you first learn to code, it’s common to learn arrays as the “main data structure.”..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*WeWOBZy6N7cXkq4inS7FVA.jpeg
url: https://medium.freecodecamp.org/all-you-need-to-know-about-tree-data-structures-bceacb85490c
id: all-you-need-to-know-about-tree-data-structures-bceacb85490c
date: 2017-11-05T20:58:27.664Z
tags: [
  "Programming",
  "Algorithms",
  "Coding",
  "Python",
  "Technology"
]
---
# Everything you need to know about tree data structures







![](https://cdn-images-1.medium.com/max/2000/1*WeWOBZy6N7cXkq4inS7FVA.jpeg)

Trees are so beautiful. A drawing I made when I was a young boy.







When you first learn to code, it’s common to learn arrays as the “main data structure.”

Eventually, you will learn about `hash tables` too. If you are pursuing a Computer Science degree, you have to take a class on data structure. You will also learn about `linked lists`, `queues`, and `stacks`. Those data structures are called “linear” data structures because they all have a logical start and a logical end.

When we start learning about `trees` and `graphs`, it can get really confusing. We don’t store data in a linear way. Both data structures store data in a specific way.

This post is to help you better understand the Tree Data Structure and to clarify any confusion you may have about it.

In this article, we will learn:

*   What is a tree
*   Examples of trees
*   Its terminology and how it works
*   How to implement tree structures in code.

Let’s start this learning journey. :)

### Definition

When starting out programming, it is common to understand better the linear data structures than data structures, like trees and graphs.

Trees are well-known as a non-linear data structure. They don’t store data in a linear way. They organize data hierarchically.

### Let’s dive into real life examples!

What do I mean when I say in a hierarchical way?

Imagine a family tree with relationships from all generation: grandparents, parents, children, siblings, etc. We commonly organize family trees hierarchically.



![](https://cdn-images-1.medium.com/max/1600/1*MasdC5DmucEU2abIXQe45Q.jpeg)

My family tree



The above drawing is is my family tree. `Tossico, Akikazu, Hitomi,` and `Takemi` are my grandparents.

`Toshiaki` and `Juliana` are my parents.

`TK, Yuji, Bruno`, and `Kaio` are the children of my parents (me and my brothers).

An organization’s structure is another example of a hierarchy.



![](https://cdn-images-1.medium.com/max/1600/1*GsBCmW5E1GuJ3MpH3Zz0Ew.jpeg)

A company’s structure is an example of a hierarchy



In HTML, the Document Object Model (DOM) works as a tree.



![](https://cdn-images-1.medium.com/max/1600/1*dLXUdR4NuIZG8GJdu_Cinw.jpeg)

Document Object Model (DOM)



The `HTML` tag contains other tags. We have a `head` tag and a `body` tag. Those tags contains specific elements. The `head` tag has `meta` and `title` tags. The `body` tag has elements that show in the user interface, for example, `h1`, `a`, `li`, etc.

### A technical definition

A `tree` is a collection of entities called `nodes`. Nodes are connected by `edges`. Each `node` contains a `value` or `data`, and it may or may not have a `child node` .



![](https://cdn-images-1.medium.com/max/1600/1*3WN7tIQ-kNBQmY9MgvTuOA.jpeg)



The `first node` of the `tree` is called the `root`. If this `root node` is connected by another `node`, the `root` is then a `parent node` and the connected `node` is a `child`.



![](https://cdn-images-1.medium.com/max/1600/1*9AtR3bhhlMJxQlaUVEQgrw.jpeg)



All `Tree nodes` are connected by links called `edges`. It’s an important part of `trees`, because it’s manages the relationship between `nodes`.



![](https://cdn-images-1.medium.com/max/1600/1*j5qKwIxKcEjoxy88EOc1Rg.jpeg)



`Leaves` are the last `nodes` on a `tree.` They are nodes without children. Like real trees, we have the `root`, `branches`, and finally the `leaves`.



![](https://cdn-images-1.medium.com/max/1600/1*c9_5uMUsIy4Q3OA7Q8bJiw.jpeg)



Other important concepts to understand are `height` and `depth`.

The `height` of a `tree` is the length of the longest path to a `leaf`.

The `depth` of a `node` is the length of the path to its `root`.

### Terminology summary

*   **Root** is the topmost `node` of the `tree`
*   **Edge** is the link between two `nodes`
*   **Child** is a `node` that has a `parent node`
*   **Parent** is a `node` that has an `edge` to a `child node`
*   **Leaf** is a `node` that does not have a `child node` in the `tree`
*   **Height** is the length of the longest path to a `leaf`
*   **Depth** is the length of the path to its `root`

### Binary trees

Now we will discuss a specific type of `tree`. We call it the`binary tree`.

> “In computer science, a binary tree is a tree data structure in which each node has at the most two children, which are referred to as the left child and the right child.” — [Wikipedia](https://en.wikipedia.org/wiki/Binary_tree)

So let’s look at an example of a `binary tree`.



![](https://cdn-images-1.medium.com/max/1600/1*ofbwuz4inpf2OlB-l9gtHw.jpeg)



### Let’s code a binary tree

The first thing we need to keep in mind when we implement a `binary tree` is that it is a collection of `nodes`. Each `node` has three attributes: `value`, `left_child`, and `right_child`.

How do we implement a simple `binary tree` that initializes with these three properties?

Let’s take a look.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9fa39a99eceb3437202a3ae72ebc2550?postId=bceacb85490c" data-media-id="9fa39a99eceb3437202a3ae72ebc2550" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Here it is. Our `binary tree` class.

When we instantiate an object, we pass the `value` (the data of the node) as a parameter. Look at the `left_child` and the `right_child`. Both are set to `None`.

Why?

Because when we create our `node`, it doesn’t have any children. We just have the `node data`.

Let’s test it:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/733305ff815b91f2023ba5045bb0d0a3?postId=bceacb85490c" data-media-id="733305ff815b91f2023ba5045bb0d0a3" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





That’s it.

We can pass the `string` ‘`a`’ as the `value` to our `Binary Tree node`. If we print the `value`, `left_child`, and `right_child`, we can see the values.

Let’s go to the insertion part. What do we need to do here?

We will implement a method to insert a new `node` to the `right` and to the `left`.

Here are the rules:

*   If the current `node` doesn’t have a `left child`, we just create a new `node`and set it to the current node’s `left_child`.
*   If it does have the `left child`, we create a new node and put it in the current `left child`’s place. Allocate this `left child node` to the new node’s `left child`.

Let’s draw it out. :)



![](https://cdn-images-1.medium.com/max/1600/1*ofbwuz4inpf2OlB-l9gtHw.jpeg)



Here’s the code:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/0163fc1aeff32b1f1838876391d5a32b?postId=bceacb85490c" data-media-id="0163fc1aeff32b1f1838876391d5a32b" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Again, if the current node doesn’t have a `left child`, we just create a new node and set it to the current node’s `left_child`. Or else we create a new node and put it in the current `left child`’s place. Allocate this `left child node` to the new node’s `left child`.

And we do the same thing to insert a `right child node`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b722fd684b3716665dcfe0569e378232?postId=bceacb85490c" data-media-id="b722fd684b3716665dcfe0569e378232" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Done. :)

But not entirely. We still need to test it.

Let’s build the following`tree`:



![](https://cdn-images-1.medium.com/max/1600/1*V_EUgNXVc8Wy9H1-JoqT3g.jpeg)



To summarize the illustration of this tree:

*   `a` `node` will be the `root` of our `binary Tree`
*   `a` `left child` is `b` `node`
*   `a` `right child` is `c` `node`
*   `b` `right child` is `d` `node` (`b` `node` doesn’t have a `left child`)
*   `c` `left child` is `e` `node`
*   `c` `right child` is `f` `node`
*   both `e` and `f` `nodes` do not have children

So here is the code for the `tree`:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/5a13b4ac473626cd52bf04749c69ca8a?postId=bceacb85490c" data-media-id="5a13b4ac473626cd52bf04749c69ca8a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Insertion is done.

Now we have to think about `tree` traversal.

We have **two options** here: **Depth-First Search (DFS)** and **Breadth-First Search (BFS)**.

*   **DFS** “is an algorithm for traversing or searching tree data structure. One starts at the root and explores as far as possible along each branch before backtracking.”_ — _[_Wikipedia_](https://en.wikipedia.org/wiki/Depth-first_search)
*   **BFS** “is an algorithm for traversing or searching tree data structure. It starts at the tree root and explores the neighbor nodes first, before moving to the next level neighbors.”_ — _[_Wikipedia_](https://en.wikipedia.org/wiki/Breadth-first_search)

So let’s dive into each tree traversal type.

#### Depth-First Search (DFS)

**DFS** explores a path all the way to a leaf before **backtracking** and exploring another path. Let’s take a look at an example with this type of traversal.



![](https://cdn-images-1.medium.com/max/1600/1*-sCuUx3R9e1ougu2pGdThg.jpeg)



The result for this algorithm will be 1–2–3–4–5–6–7.

Why?

Let’s break it down.

1.  Start at the `root` (1). Print it.

2\. Go to the `left child` (2). Print it.

3\. Then go to the `left child` (3). Print it. (This `node` doesn’t have any children)

4\. Backtrack and go the `right child` (4). Print it. (This `node` doesn’t have any children)

5\. Backtrack to the `root` `node` and go to the `right child` (5). Print it.

6\. Go to the `left child` (6). Print it. (This `node` doesn’t have any children)

7\. Backtrack and go to the `right child` (7). Print it. (This `node` doesn’t have any children)

8\. Done.

When we go deep to the leaf and backtrack, this is called **DFS** algorithm.

Now that we are familiar with this traversal algorithm, we will discuss types of **DFS**: `pre-order`, `in-order`, and `post-order`.

#### Pre-order

This is exactly what we did in the above example.

1.  Print the value of the `node`.
2.  Go to the `left child` and print it. This is if, and only if, it has a `left child`.
3.  Go to the `right child` and print it. This is if, and only if, it has a `right child`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/413dad41f8e94d38c61bac299cd23b52?postId=bceacb85490c" data-media-id="413dad41f8e94d38c61bac299cd23b52" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





#### In-order



![](https://cdn-images-1.medium.com/max/1600/1*-sCuUx3R9e1ougu2pGdThg.jpeg)



The result of the in-order algorithm for this `tree` example is 3–2–4–1–6–5–7.

The left first, the middle second, and the right last.

Now let’s code it.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/72c9d64d89fcf46488ce6f6359fdad59?postId=bceacb85490c" data-media-id="72c9d64d89fcf46488ce6f6359fdad59" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





1.  Go to the `left child` and print it. This is if, and only if, it has a `left child`.
2.  Print the `node`’s value
3.  Go to the `right child` and print it. This is if, and only if, it has a `right child`.

#### Post-order



![](https://cdn-images-1.medium.com/max/1600/1*-sCuUx3R9e1ougu2pGdThg.jpeg)



The result of the `post order` algorithm for this `tree` example is 3–4–2–6–7–5–1.

The left first, the right second, and the middle last.

Let’s code this.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/12fbf35a8bc46bb5c3d1748518ea2988?postId=bceacb85490c" data-media-id="12fbf35a8bc46bb5c3d1748518ea2988" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





1.  Go to the `left child` and print it. This is if, and only if, it has a `left child`.
2.  Go to the `right child` and print it. This is if, and only if, it has a `right child`.
3.  Print the `node`’s value

#### Breadth-First Search (BFS)

**BFS** algorithm traverses the `tree` level by level and depth by depth.



![](https://cdn-images-1.medium.com/max/1600/1*ZNxp_NkRZLCeak85rreebA.jpeg)



Here is an example that helps to better explain this algorithm:



![](https://cdn-images-1.medium.com/max/1600/1*-sCuUx3R9e1ougu2pGdThg.jpeg)



So we traverse level by level. In this example, the result is 1–2–5–3–4–6–7.

*   Level/Depth 0: only `node` with value 1
*   Level/Depth 1: `nodes` with values 2 and 5
*   Level/Depth 2: `nodes` with values 3, 4, 6, and 7

Now let’s code it.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d1230585e59286a4db1dec8a58e0bd8d?postId=bceacb85490c" data-media-id="d1230585e59286a4db1dec8a58e0bd8d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





To implement a **BFS** algorithm, we use the `queue` data structure to help.

How does it work?

Here’s the explanation.



![](https://cdn-images-1.medium.com/max/1600/1*A4yGfEoiqcZ-COvAfr2CWQ.jpeg)



1.  First add the `root` `node` into the `queue` with the `put` method.
2.  Iterate while the `queue` is not empty.
3.  Get the first `node` in the `queue`, and then print its value.
4.  Add both `left` and `right` `children` into the `queue` (if the current `node`has `children`).
5.  Done. We will print the value of each `node,` level by level, with our `queue`helper.

### Binary Search tree

> “A Binary Search Tree is sometimes called ordered or sorted binary trees, and it keeps its values in sorted order, so that lookup and other operations can use the principle of binary search” — [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_tree)

An important property of a `Binary Search Tree` is that the value of a `Binary Search Tree` `node`is larger than the value of the offspring of its `left child`, but smaller than the value of the offspring of its `right child.`”



![](https://cdn-images-1.medium.com/max/1600/1*mslH9VtVUN9Hs983XxUN5A.jpeg)



Here is a breakdown of the above illustration:

*   **A** is inverted. The `subtree` 7–5–8–6 needs to be on the right side, and the `subtree` 2–1–3 needs to be on the left.
*   **B** is the only correct option. It satisfies the `Binary Search Tree` property.
*   **C** has one problem: the `node` with the value 4\. It needs to be on the left side of the `root` because it is smaller than 5.

### Let’s code a Binary Search Tree!

Now it’s time to code!

What will we see here? We will insert new nodes, search for a value, delete nodes, and the balance of the `tree`.

Let’s start.

#### Insertion: adding new nodes to our tree

Imagine that we have an empty `tree` and we want to add new `nodes` with the following values in this order: 50, 76, 21, 4, 32, 100, 64, 52.

The first thing we need to know is if 50 is the `root` of our tree.



![](https://cdn-images-1.medium.com/max/1600/1*fxSlTwgQSN_DlzfEmcxqQg.jpeg)



We can now start inserting `node` by `node`.

*   76 is greater than 50, so insert 76 on the right side.
*   21 is smaller than 50, so insert 21 on the left side.
*   4 is smaller than 50\. `Node` with value 50 has a `left child` 21\. Since 4 is smaller than 21, insert it on the left side of this `node`.
*   32 is smaller than 50\. `Node` with value 50 has a `left child` 21\. Since 32 is greater than 21, insert 32 on the right side of this `node`.
*   100 is greater than 50\. `Node` with value 50 has a `right child` 76\. Since 100 is greater than 76, insert 100 on the right side of this `node`.
*   64 is greater than 50\. `Node` with value 50 has a `right child` 76\. Since 64 is smaller than 76, insert 64 on the left side of this `node`.
*   52 is greater than 50\. `Node` with value 50 has a `right child` 76\. Since 52 is smaller than 76, `node` with value 76 has a `left child` 64\. 52 is smaller than 64, so insert 54 on the left side of this `node`.



![](https://cdn-images-1.medium.com/max/1600/1*LlLDNx7wgJfH6VAGnyAbIQ.jpeg)



Do you notice a pattern here?

Let’s break it down.

1.  Is the new `node` value greater or smaller than the current `node`?
2.  If the value of the new `node` is greater than the current `node,` go to the right `subtree`. If the current `node` doesn’t have a `right child`, insert it there, or else backtrack to step #1.
3.  If the value of the new `node` is smaller than the current `node`, go to the left `subtree`. If the current `node` doesn’t have a `left child`, insert it there, or else backtrack to step #1.
4.  We did not handle special cases here. When the value of a new `node` is equal to the current value of the `node,` use rule number 3\. Consider inserting equal values to the left side of the `subtree`.

Now let’s code it.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/50a2cf2c538b05b89c9f49e8265d97f4?postId=bceacb85490c" data-media-id="50a2cf2c538b05b89c9f49e8265d97f4" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





It seems very simple.

The powerful part of this algorithm is the recursion part, which is on line 9 and line 13\. Both lines of code call the `insert_node` method, and use it for its `left` and `right` `children`, respectively. Lines `11` and `15` are the ones that do the insertion for each `child`.

#### Let’s search for the node value… Or not…

The algorithm that we will build now is about doing searches. For a given value (integer number), we will say if our `Binary Search Tree` does or does not have that value.

An important item to note is how we defined the tree **insertion algorithm**. First we have our `root` `node`. All the left `subtree` `nodes` will have smaller values than the `root` `node`. And all the right `subtree` `nodes` will have values greater than the `root` `node`.

Let’s take a look at an example.

Imagine that we have this `tree`.



![](https://cdn-images-1.medium.com/max/1600/1*LlLDNx7wgJfH6VAGnyAbIQ.jpeg)



Now we want to know if we have a node based on value 52.



![](https://cdn-images-1.medium.com/max/1600/1*NwvTrpKiJWb1u2yAY-nnAA.jpeg)



Let’s break it down.

1.  We start with the `root` `node` as our current `node`. Is the given value smaller than the current `node` value? If yes, then we will search for it on the left `subtree`.
2.  Is the given value greater than the current `node` value? If yes, then we will search for it on the right `subtree`.
3.  If rules #1 and #2 are both false, we can compare the current `node` value and the given value if they are equal. If the comparison returns `true`, then we can say, “Yeah! Our `tree` has the given value,” otherwise, we say, “Nooo, it hasn’t.”

Now let’s code it.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/bb126cc4bf2d2e26a70b0730421a7400?postId=bceacb85490c" data-media-id="bb126cc4bf2d2e26a70b0730421a7400" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Let’s beak down the code:

*   Lines 8 and 9 fall under rule #1.
*   Lines 10 and 11 fall under rule #2.
*   Line 13 falls under rule #3.

How do we test it?

Let’s create our `Binary Search Tree` by initializing the `root` `node` with the value 15.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/bdced89d204ddbfb0323b5dd26745e7c?postId=bceacb85490c" data-media-id="bdced89d204ddbfb0323b5dd26745e7c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





And now we will insert many new `nodes`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/65ec0fd19aa801b2a7219eed4d5514df?postId=bceacb85490c" data-media-id="65ec0fd19aa801b2a7219eed4d5514df" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





For each inserted `node` , we will test if our `find_node` method really works.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/bfb26379693c8fb89a717d7bfb2d770c?postId=bceacb85490c" data-media-id="bfb26379693c8fb89a717d7bfb2d770c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Yeah, it works for these given values! Let’s test for a value that doesn’t exist in our `Binary Search Tree`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/f37184b1bfde4f01b71bc77dcecfc4f5?postId=bceacb85490c" data-media-id="f37184b1bfde4f01b71bc77dcecfc4f5" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Oh yeah.

Our search is done.

#### Deletion: removing and organizing

Deletion is a more complex algorithm because we need to handle different cases. For a given value, we need to remove the `node` with this value. Imagine the following scenarios for this `node` : it has no `children`, has a single `child`, or has two `children`.

*   **Scenario #1**: A `node` with no `children` (`leaf` `node`).





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/df916beeefbefd89d3eb017db061f57f?postId=bceacb85490c" data-media-id="df916beeefbefd89d3eb017db061f57f" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





If the `node` we want to delete has no children, we simply delete it. The algorithm doesn’t need to reorganize the `tree`.

*   **Scenario #2**: A `node` with just one child (`left` or `right` child).





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/390bc8ef43a11957abab8726d3712f41?postId=bceacb85490c" data-media-id="390bc8ef43a11957abab8726d3712f41" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





In this case, our algorithm needs to make the parent of the `node` point to the `child` node. If the `node` is the `left child`, we make the parent of the `left child` point to the `child`. If the `node` is the `right child` of its parent, we make the parent of the `right child` point to the `child`.

*   **Scenario #3**: A `node` with two children.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a7d3f69f5f7c45dbfb4227bac06e6ff4?postId=bceacb85490c" data-media-id="a7d3f69f5f7c45dbfb4227bac06e6ff4" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





When the `node` has 2 children, we need to find the `node` with the minimum value, starting from the `node`’s`right child`. We will put this `node` with minimum value in the place of the `node` we want to remove.

It’s time to code.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ac38b3bdb1b1f0b8d3c402d9287524d7?postId=bceacb85490c" data-media-id="ac38b3bdb1b1f0b8d3c402d9287524d7" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





1.  **First**: Note the parameters `value` and `parent`. We want to find the `node`that has this `value` , and the `node`’s parent is important to the removal of the `node`.
2.  **Second**: Note the returning value. Our algorithm will return a boolean value. It returns `True` if it finds the `node` and removes it. Otherwise it will return `False`.
3.  **From line 2 to line 9**: We start searching for the `node` that has the `value`that we are looking for. If the `value` is smaller than the `current nodevalue` , we go to the `left subtree`, recursively (if, and only if, the `current node` has a `left child`). If the `value` is greater, go to the `right subtree`, recursively.
4.  **Line 10**: We start to think about the `remove` algorithm.
5.  **From line 11 to line 13**: We cover the `node` with no `children` , and it is the `left child` from its `parent`. We remove the `node` by setting the `parent`’s `left child` to `None`.
6.  **Lines 14 and 15**: We cover the `node` with no `children` , and it is the `right child` from it’s `parent`. We remove the `node` by setting the `parent`’s `right child` to `None`.
7.  **Clear node method**: I will show the `clear_node` code below. It sets the nodes `left child , right child`, and its `value` to `None`.
8.  **From line 16 to line 18**: We cover the `node` with just one `child` (`left child`), and it is the `left child` from it’s `parent`. We set the `parent`'s `left child` to the `node`’s `left child` (the only child it has).
9.  **From line 19 to line 21**: We cover the `node` with just one `child` (`left child`), and it is the `right child` from its `parent`. We set the `parent`'s `right child` to the `node`’s `left child` (the only child it has).
10.  **From line 22 to line 24**: We cover the `node` with just one `child` (`right child`), and it is the `left child` from its `parent`. We set the `parent`'s `left child` to the `node`’s `right child` (the only child it has).
11.  **From line 25 to line 27**: We cover the `node` with just one `child` (`right child`) , and it is the `right child` from its `parent`. We set the `parent`'s `right child` to the `node`’s `right child` (the only child it has).
12.  **From line 28 to line 30**: We cover the `node` with both `left` and `right`children. We get the `node` with the smallest `value` (the code is shown below) and set it to the `value` of the `current node` . Finish it by removing the smallest `node`.
13.  **Line 32**: If we find the `node` we are looking for, it needs to return `True`. From line 11 to line 31, we handle this case. So just return `True` and that’s it.

*   To use the `clear_node` method: set the `None` value to all three attributes — (`value`, `left_child`, and `right_child`)





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/0e8170087c29ead741d7a16ae8348e4f?postId=bceacb85490c" data-media-id="0e8170087c29ead741d7a16ae8348e4f" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





*   To use the `find_minimum_value` method: go way down to the left. If we can’t find anymore nodes, we found the smallest one.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/962ec9e479414b52d733717a5b36eb46?postId=bceacb85490c" data-media-id="962ec9e479414b52d733717a5b36eb46" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Now let’s test it.

We will use this `tree` to test our `remove_node` algorithm.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2e01bc5ae0e80f7309495b38825f3c68?postId=bceacb85490c" data-media-id="2e01bc5ae0e80f7309495b38825f3c68" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Let’s remove the `node` with the `value` 8\. It’s a `node` with no child.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/e7e329958864acc6583a8fab6dc13cb6?postId=bceacb85490c" data-media-id="e7e329958864acc6583a8fab6dc13cb6" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Now let’s remove the `node` with the `value` 17\. It’s a `node` with just one child.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/1da826603d836a6877211556ff30fa3f?postId=bceacb85490c" data-media-id="1da826603d836a6877211556ff30fa3f" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Finally, we will remove a `node` with two children. This is the `root` of our `tree`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/4636fc226a651a7893011ab9d3fe570e?postId=bceacb85490c" data-media-id="4636fc226a651a7893011ab9d3fe570e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





The tests are now done. :)

### That’s all for now!

We learned a lot here.

Congrats on finishing this dense content. It’s really tough to understand a concept that we do not know. But you did it. :)

This is one more step forward in my journey to learning and mastering algorithms and data structures. You can see the documentation of my complete journey here on my [**Renaissance Developer publication**](https://medium.com/the-renaissance-developer).

Have fun, keep learning and coding.

Here are my [Instagram](https://www.instagram.com/renaissance_dev/), [Twitter](https://twitter.com/LeandroTk_), [GitHub](https://github.com/LeandroTk), and [LinkedIn](http://br.linkedin.com/in/leandrotk/) accounts.☺

### Additional resources

*   [Introduction to Tree Data Structure by **mycodeschool**](https://www.youtube.com/watch?v=qH6yxkw0u78&index=25&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P)
*   [Tree by **Wikipedia**](https://en.wikipedia.org/wiki/Tree_%28data_structure%29)
*   [How To Not Be Stumped By Trees by the talented Vaidehi Joshi](https://medium.com/basecs/how-to-not-be-stumped-by-trees-5f36208f68a7)
*   [Intro to Trees, Lecture by Professor **Jonathan Cohen**](http://www.cs.jhu.edu/~cohen/CS226/Lectures/Trees.pdf)
*   [Intro to Trees, Lecture by Professor **David Schmidt**](http://people.cs.ksu.edu/~schmidt/300s05/Lectures/Week7b.html)
*   [Intro to Trees, Lecture by Professor **Victor Adamchik**](http://www.cs.cmu.edu/~clo/www/CMU/DataStructures/Lessons/lesson4_1.htm)
*   [Trees with **Gayle Laakmann McDowell**](https://www.youtube.com/watch?v=oSWTXtMglKE)
*   [Binary Tree Implementation](https://github.com/LeandroTk/algorithms/blob/master/data_structures/binary_tree/binary_tree.py) and [Tests](https://github.com/LeandroTk/algorithms/blob/master/data_structures/binary_tree/test_binary_tree.py) by [**TK**](https://medium.com/@leandrotk_)
*   [Coursera Course: Data Structures by **University of California, San Diego**](https://www.coursera.org/learn/data-structures)
*   [Coursera Course: Data Structures and Performance by **University of California, San Diego**](https://www.coursera.org/learn/data-structures-optimizing-performance)
*   [Binary Search Tree concepts and Implementation by **Paul Programming**](https://www.youtube.com/playlist?list=PLTxllHdfUq4d-DE16EDkpeb8Z68DU7Z_Q)
*   [Binary Search Tree Implementation](https://github.com/LeandroTk/algorithms/blob/master/data_structures/binary_search_tree_without_node/binary_search_tree.py) and [Tests](https://github.com/LeandroTk/algorithms/blob/master/data_structures/binary_search_tree_without_node/test_binary_search_tree.py) by [**TK**](https://medium.com/@leandrotk_)
*   [Tree Traversal by **Wikipedia**](https://en.wikipedia.org/wiki/Tree_traversal)
*   [Binary Search Tree Remove Node Algorithm by **GeeksforGeeks**](http://www.geeksforgeeks.org/binary-search-tree-set-2-delete/)
*   [Binary Search Tree](http://www.algolist.net/Data_structures/Binary_search_tree/Removal) [R](http://www.geeksforgeeks.org/binary-search-tree-set-2-delete/)[emove](http://www.algolist.net/Data_structures/Binary_search_tree/Removal) [N](http://www.geeksforgeeks.org/binary-search-tree-set-2-delete/)[ode](http://www.algolist.net/Data_structures/Binary_search_tree/Removal) [A](http://www.geeksforgeeks.org/binary-search-tree-set-2-delete/)[lgorithm by **Algolist**](http://www.algolist.net/Data_structures/Binary_search_tree/Removal)
*   [Learning Python From Zero to Hero](https://medium.freecodecamp.org/learning-python-from-zero-to-hero-120ea540b567)








