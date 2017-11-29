---
author: Kevin Kononenko
authorTwitter: https://twitter.com/devmanual
authorFacebook: https://facebook.com/10203738544564981
title: "JavaScript Arrays and Objects Are Just Like Books and Newspapers"
subTitle: "If you have read books and newspapers, then you can understand the difference between arrays and objects in JavaScript."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*weFuKf53lfxyJLOK_hJa7A.jpeg
url: https://medium.freecodecamp.org/javascript-arrays-and-objects-are-just-like-books-and-newspapers-6e1cbd8a1746
id: javascript-arrays-and-objects-are-just-like-books-and-newspapers-6e1cbd8a1746
date: 2017-04-29T18:56:01.007Z
tags: [
  "JavaScript",
  "Programming",
  "Learning To Code",
  "Technology",
  "Tech"
]
---
# JavaScript Arrays and Objects Are Just Like Books and Newspapers

## If you have read books and newspapers, then you can understand the difference between arrays and objects in JavaScript.

When you’re just getting started with JavaScript, it is easy to get confused on the best way to organize and store data.

On one hand, you are probably familiar with arrays from learning “for” loops. But, once you start jamming as much data as possible into arrays, you will create an unscalable mess that will be impossible to understand when you review your code.

Choosing between an object and an array gets much easier when you can quickly determine the purpose of each structure. Arrays closely fit the way that books store information. And objects fit the way that newspapers store information.

Let’s jump into it!

#### Arrays: Order of Data is Most Important

Here are the sections of a super short book, in array form.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/f1d4b685a093c79dd671b92e7d24939e?postId=6e1cbd8a1746" data-media-id="f1d4b685a093c79dd671b92e7d24939e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F8312841%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Okay I’ll admit it, those are the first three chapters of the [first Harry Potter book](http://harrypotter.wikia.com/wiki/Harry_Potter_and_the_Philosopher%27s_Stone). Here is that array in visual form.







![](https://cdn-images-1.medium.com/max/2000/1*FQ6CJaawGTIB_oa8M-Z7GQ.png)







You want to use arrays when **order is the most important factor for organizing the information**. Nobody (I hope) looks at the chapter titles of a Harry Potter book and goes, “Hmmm, that looks like an interesting one, let me skip to that!” The order of the chapters tells you which one to read next.

When you retrieve information from the array, you use the **index** of each element. Arrays are [0-indexed](https://en.wikipedia.org/wiki/Zero-based_numbering), which means they start counting at 0 rather than 1.

This means if you wanted to access index 0 of the books array, you would use:

<pre name="1e41" id="1e41" class="graf graf--pre graf-after--p">books[0]</pre>

And you would get:

<pre name="c69f" id="c69f" class="graf graf--pre graf--startsWithSingleQuote graf-after--p">‘foreword’</pre>

If you wanted to figure out the name of the third section of the book, you would use:

<pre name="5792" id="5792" class="graf graf--pre graf-after--p">books[2]</pre>

You choose which sections to read next based on order in the book, not based on the title of the chapter.

#### Objects: Data Label is Most Important

Here is what a newspaper might look like, in object form.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/4ce76c77bb42b687e97858f81e4da799?postId=6e1cbd8a1746" data-media-id="4ce76c77bb42b687e97858f81e4da799" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F8312841%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Here is that same data in visual form.







![](https://cdn-images-1.medium.com/max/2000/1*0C2W6JHq_TKG6anfblBiqg.png)







Objects are best when you want to **organize based on data labels.** When you read a newspaper, you likely do not read it front to back, page by page. You flip to a certain section based on the section’s name. No matter where that section is located in the newspaper, you can flip to it immediately and have the appropriate context. This is unlike a book, where the order of the chapters/sections matters.

Objects organize this information via **key/value pairs**. It looks like this:

<pre name="1528" id="1528" class="graf graf--pre graf-after--p">key: value</pre>

If you wanted to access the Business section of this newspaper, you would use the **key** like so:

<pre name="922d" id="922d" class="graf graf--pre graf-after--p">newspaper[‘business’]</pre>

or:

<pre name="2e6b" id="2e6b" class="graf graf--pre graf-after--p">newspaper.business</pre>

This would return the **value** _‘GE Stock Dips Again’_. So, when it is easiest to access data based on a label (the **key**), you want to store it in an object.

#### Combining Objects and Arrays

So far, we have just stored strings in our arrays and objects. You can also store other basic data types like numbers and booleans, as well as:

1.  Arrays within objects
2.  Objects within arrays.
3.  Arrays within arrays
4.  Objects within objects

This is where it starts to get complex. But, you will almost always need a combination of the two to store your data in a scalable way. You want to understand the code a week later when you need to revisit it.

Let’s look at the book example again. What if we wanted to also store the number of pages in each chapter? It might be best to now fill our array with objects. Like this:

<pre name="97b2" id="97b2" class="graf graf--pre graf-after--p">var book =[  
  [‘foreword’, 14],  
  [‘boywholived’, 18]  
]</pre>





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/cf69c5780e567f4750009163424e9de3?postId=6e1cbd8a1746" data-media-id="cf69c5780e567f4750009163424e9de3" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F8312841%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





We have maintained the order of our chapters, and now we have the ability to name specific properties of each chapter. So, if we wanted to know the page count of the second section, we would use:

<pre name="9d2d" id="9d2d" class="graf graf--pre graf-after--p">book[1][‘pageCount’]</pre>

This would give a **value** of 18.

Now let’s say you wanted to see a ranking of the top writers for each section of your local newspaper, based on seniority. You could express that in an array within the newspaper object, like this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/453322e031c2dd18938c4cb24c43b0c5?postId=6e1cbd8a1746" data-media-id="453322e031c2dd18938c4cb24c43b0c5" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F8312841%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





An array fits well to store the writers because order matters. You know the earlier writers are ranked higher than the later writers in each array. The writer at index 0 is the top-ranked writer.

You could probably optimize this object by just creating objects within the newspaper object. For example, a _sports_ object with a title and list of writers. But I will let you try that out!





<iframe data-width="800" data-height="400" width="700" height="350" src="https://medium.freecodecamp.org/media/62b3f6269a0b688631d19edfc8bb3c76?postId=6e1cbd8a1746" data-media-id="62b3f6269a0b688631d19edfc8bb3c76" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fupscri.be%2Fmedia%2Fform.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





#### Some quick challenges for you

1.  Let’s say your web app has a quiz portion, where users fill out a number of questions and then get a score at the end. You want to store a user’s answer to every question, and then efficiently check them at the end. Which structure would you use to store all the user’s answers before checking? Why?
2.  Let’s say you allow users to create a new profile on your site, with a first name, last name, email and password. You want to store that data before sending it to the back end. Which structure would you use to store all the new user’s info? Why?
3.  Let’s say you are building a forum site, where you need to rank comments based on the number of votes. Which structure might make most sense, when you need to track both the text of the comment itself AND number of votes? Hint: combo of the two of some sort.











* * *







If you enjoyed this post, you may also enjoy my [other explanations](http://www.rtfmanual.io) of challenging CSS, JavaScript and SQL topics, such as positioning, Model-View-Controller, and callbacks.

And if you think this might help other people in the same position as you, give it a “heart”!








