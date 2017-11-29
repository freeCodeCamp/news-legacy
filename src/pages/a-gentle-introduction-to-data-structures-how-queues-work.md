---
author: Michael Olorunnisola
authorTwitter: https://twitter.com/MikeOlor
authorFacebook: none
title: "A Gentle Introduction to Data Structures: How Queues Work"
subTitle: "Black Friday’s right around the corner, and the new Microsoft Surface Studio out in stores (I’m a loyal windows guy 😄). So let’s talk ab..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*vQPzNuz_TAOwQAkBfuaC6A.jpeg
url: https://medium.freecodecamp.org/a-gentle-introduction-to-data-structures-how-queues-work-f8b871938e64
id: a-gentle-introduction-to-data-structures-how-queues-work-f8b871938e64
date: 2016-11-06T04:38:49.698Z
tags: [
  "Programming",
  "Data Structures",
  "Queue",
  "Stacks",
  "Software Engineering"
]
---
# A Gentle Introduction to Data Structures: How Queues Work







![](https://cdn-images-1.medium.com/max/2000/1*vQPzNuz_TAOwQAkBfuaC6A.jpeg)

source: marketwatch.com







Black Friday’s right around the corner, and the new Microsoft Surface Studio out in stores (I’m a loyal windows guy 😄). So let’s talk about everyone’s favorite shopping past-time: waiting in line. And that age-old data structure, the queue.

Feel free to share this post with your friends who’ll be heading out to get the latest and greatest. But be warned — people have been known to forget how queues work on Black Friday.

### Queues

A queue is a line (yep, the same one from kindergarten…no cutting still!)

Additions (**enqueues**) always add to the back of the line

Removals (**dequeues**) always remove from the front of the line

Queues follow the pattern of **F**irst item **I**n is the **F**irst item **O**ut (FIFO).



![](https://cdn-images-1.medium.com/max/1600/0*SFoM_gyGXk8MIfl4.png)



#### **Example use cases**

*   Resolving simultaneous server requests from multiple users, such as 3 people buying the last ticket for a plane at almost the same time
*   Queuing up data during a [breadth-first search](https://en.wikipedia.org/wiki/Breadth-first_search).

Let’s tackle the first use case by helping Microsoft create a queue data structure to manage all their requests for the new Surface Studio. I’m too busy coding and writing these posts to go get one myself, so if you’re a Microsoft representative reading this, please feel free to ship one my way. 😄

Before we get started, a quick note on JavaScript arrays. Similar to [stacks](https://medium.freecodecamp.com/data-structures-stacks-on-stacks-c25f2633c529#.cj82kpcg8), JavaScript arrays naturally have the functionality of a queue built in.

### How to represent queues using JavaScript arrays

**Enqueue** adds to the back of the array:

<pre name="934e" id="934e" class="graf graf--pre graf-after--p">Array.**push(**someVal**)**</pre>

**Dequeue** removes and returns first item in array:

<pre name="e9b8" id="e9b8" class="graf graf--pre graf-after--p">Array**.shift()** </pre>

If for some reason you’re feeling rebellious (what coder doesn’t 😈) you could add to the front of the array, then remove from the back.

**Enqueue** adds item to the front of the array:

<pre name="4527" id="4527" class="graf graf--pre graf-after--p">Array.**unshift(**someVal**)** </pre>

**Dequeue** removes item from the back of the array:

<pre name="9c18" id="9c18" class="graf graf--pre graf-after--p">Array.**pop()**</pre>

That said, for the sake of being thorough, you’re going to rebuild it using a JavaScript Object.

So first thing you need to do for Microsoft is to create the actual Queue where you’re going to hold the individual members who click the buy button on their website.

<pre name="2c7a" id="2c7a" class="graf graf--pre graf-after--p">class Queue{  
  constructor(){  
    this._storage = {};  
    this._start = -1; //replicating 0 index used for arrays  
    this._end = -1; //replicating 0 index used for arrays  
  }  

  size(){  
   return this._end - this._start;  
  }  
}</pre>

<pre name="9061" id="9061" class="graf graf--pre graf-after--pre">let appleQueue = new Queue();</pre>

As a quick reminder the _ just means this is a private variable, and shouldn’t be accessed directly.

Unlike the [stack data structure](https://medium.freecodecamp.com/data-structures-stacks-on-stacks-c25f2633c529#.cj82kpcg8), where additions and removals happen on the same side, the nature of the queue requires us to keep track of both ends. Because of that, you create the start variable to always track the front of the queue, and the end variable to track the end of the queue.

Lastly, the easiest way to keep track of a queue’s size (without creating an unnecessary counter variable) is to keep track of the difference between your start and end points.

First, you should create a way for people who click buy to be added to the queue. You can do this via the enqueue method:

<pre name="ea81" id="ea81" class="graf graf--pre graf-after--p">class Queue{  
  constructor(){  
    this._storage = {};  
    this._start = -1; //replicating 0 index used for arrays  
    this._end = -1; //replicating 0 index used for arrays  
  }  

  enqueue(val){  
    this._storage[++this._end] = val;   

    //++this._end just means increment the end variable first  
    //It's equivalent to  
    //this._end++   //->  
    //this._storage[this._end] = val;  
  }  

  size(){  
   return this._end - this._start;  
  }  
}</pre>

<pre name="e7c5" id="e7c5" class="graf graf--pre graf-after--pre">let microsoftQueue = new Queue();</pre>

<pre name="d023" id="d023" class="graf graf--pre graf-after--pre">microsoftQueue.enqueue("{user: ILoveWindows@gmail.com}")  
microsoftQueue.enqueue("{user: cortanaIsMyBestFriend@hotmail.com}")  
microsoftQueue.enqueue("{user: InternetExplorer8Fan@outlook.com}")  
microsoftQueue.enqueue("{user: IThrowApplesOutMyWindow@yahoo.com}")</pre>

Great! Now your microsoftQueue storage is going to look a little something like this:

<pre name="245b" id="245b" class="graf graf--pre graf-after--p">{</pre>

<pre name="34ca" id="34ca" class="graf graf--pre graf-after--pre">  0: "{email: ILoveWindows@gmail.com}"</pre>

<pre name="6c64" id="6c64" class="graf graf--pre graf-after--pre">  1: "{email: cortanaIsMyBestFriend@hotmail.com}"</pre>

<pre name="7864" id="7864" class="graf graf--pre graf-after--pre">  2: "{email: InternetExplorer8Fan@outlook.com}"</pre>

<pre name="fad5" id="fad5" class="graf graf--pre graf-after--pre">  3: "{email: IThrowApplesOutMyWindow@yahoo.com}"</pre>

<pre name="bf87" id="bf87" class="graf graf--pre graf-after--pre">}</pre>

So a quick note on the way users are being represented above ({user: …}).

When a user clicks the buy button on the client side, they’re sending all their relevant information to the server, which will handle the request. When data is often exchanged between systems, such as the client and server side, it’s most commonly sent as [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) (**J**ava**S**cript **O**bject **N**otation), via [Ajax](http://www.w3schools.com/xml/ajax_intro.asp).

This is similar to JavaScript objects, in that it’s just a stringified version of key-value pairs. For those not familiar with JavaScript, it’s similar to a dictionary or hash table (which we’ll get to later in this series). For more information about this , there’s a great post [here](http://stackoverflow.com/questions/383692/what-is-json-and-why-would-i-use-it) on StackOverflow by Andreas Grech.

Now back to your queue.

Thanks to the queue you created, Microsoft now has an efficient way of tracking all of the people who have purchased the Surface Studio, and in chronological order in which they purchased it. To make sure these people are served in the correct order, you need to create an accurate dequeue method that keeps track of the order of the buyers, and removes them from the queue once they’ve been served.

<pre name="c79a" id="c79a" class="graf graf--pre graf-after--p">class Queue{  
  constructor(){  
    this._storage = {};  
    this._start = -1; //replicating 0 index used for arrays  
    this._end = -1; //replicating 0 index used for arrays  
  }  

  enqueue(val){  
    this._storage[++this._end] = val;   
  }</pre>

<pre name="16a2" id="16a2" class="graf graf--pre graf-after--pre">  dequeue(){  
    if(this._end > this._start){ //check if there are values  
      let nextUp = this._storage[++this._start];  
      delete this._storage[this._start];  
      return nextUp;  
    }  
  }    

  size(){  
   return this._end - this._start;  
  }  
}</pre>

<pre name="d971" id="d971" class="graf graf--pre graf-after--pre">let microsoftQueue = new Queue();</pre>

<pre name="9e55" id="9e55" class="graf graf--pre graf-after--pre">microsoftQueue.enqueue("{user: ILoveWindows@gmail.com}")  
microsoftQueue.enqueue("{user: cortanaIsMyBestFriend@hotmail.com}")  
microsoftQueue.enqueue("{user: InternetExplorer8Fan@outlook.com}")  
microsoftQueue.enqueue("{user: IThrowApplesOutMyWindow@yahoo.com}")</pre>

<pre name="bce0" id="bce0" class="graf graf--pre graf-after--pre">//Function to send everyone their Surface Studio!  
let sendSurface = recepient => {  
   sendTo(recepient);  
}</pre>

<pre name="768d" id="768d" class="graf graf--pre graf-after--pre">//When your server is ready to handle this queue, execute this:</pre>

<pre name="c64d" id="c64d" class="graf graf--pre graf-after--pre">while(microsoftQueue.size() > 0){  
  sendSurface(microsoftQueue.dequeue());  
}</pre>

And there it is folks! Everyone who was waiting in the microsoftQueue now gets their awesome new Surface Studio thanks to you.

To be thorough, there are definitely some quick optimizations that can make code work more logically.

1.  You can reset your start and end values to 0 once everyone in the queue has been served. It’s unlikely that your queue would ever hit the [“max” JavaScript number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER), but it’s better to be safe than sorry.
2.  You can switch out the “ end > start check ” with the size method, thanks to 0 being evaluated as “false” due to JavaScript type coercion. Read all about it [here](https://developer.mozilla.org/en-US/docs/Glossary/Falsy).

<pre name="c289" id="c289" class="graf graf--pre graf-after--li">dequeue(){  
    if(this.size()){ //0 is a falsey value...coerced to return false  
      let nextUp = this._storage[++this._start];  
      delete this._storage[this._start];</pre>

<pre name="23c6" id="23c6" class="graf graf--pre graf-after--pre">      if(!this.size()){ //Recheck after incrementing (!0 == true)  
        this._start = -1;  
        this._end = -1;   
      }  

      return nextUp;  
    }  
}</pre>

And there you go, you’ve finished writing your basic Queue!

### A [time complexity analysis](http://bigocheatsheet.com/) on the queue methods

Here’s the code again:

<pre name="b844" id="b844" class="graf graf--pre graf-after--p">class Queue{  
  constructor(){  
    this._storage = {};  
    this._start = -1; //replicating 0 index used for arrays  
    this._end = -1; //replicating 0 index used for arrays  
  }  

  enqueue(val){  
    this._storage[++this._end] = val;   
  }</pre>

<pre name="f492" id="f492" class="graf graf--pre graf-after--pre">  dequeue(){  
    if(this.size()){ /  
      let nextUp = this._storage[++this._start];  
      delete this._storage[this._start];</pre>

<pre name="5424" id="5424" class="graf graf--pre graf-after--pre">      if(!this.size()){   
        this._start = -1;  
        this._end = -1;   
      }  

      return nextUp;  
    }  
  }  

  size(){  
   return this._end - this._start;  
  }  
}</pre>

The same logic for stacks also applies here:

**Enqueue** (addition) is **O(1)**. Since you’ll always know where the end of the queue is (thanks to your end variable), you don’t have to iterate to add an item.

**Dequeue** (removal) is **O(1)**. No iteration is necessary for removal since you always have the current start position.

**Size** is **O(1)**. The size is always known thanks to your start and end variables.

One really important thing to note here is that queues aren’t meant to be infinite, although our queue class and JavaScript array will allow you to keep on adding items until the system runs out of memory.

One way to optimize is by making a space-limited array to create a circular queue. Damian Gordon provides a really good [video walk-through](https://www.youtube.com/watch?v=ia__kyuwGag) on YouTube. This will also be handy for when we get to hash tables in future articles!

### Time for a quick recap

Queues:

1.  Follow a First In First Out (FIFO) pattern
2.  Have a start and end property to track the front and back of your queue
3.  Have an enqueue (add) and dequeue (remove) method to manage the contents of your queue
4.  Have a size property that allows you to track how large your queue is

### **Here’s a quick challenge**

Using what you now know about Stacks and what you learned today about Queues, try re-implementing a Queue using just stacks.

As a quick hint, you’ll only need two stacks.

Thanks to Jason Holtkamp for coming up with this quick challenge!

### **Further reading**

[Wikipedia](https://en.wikipedia.org/wiki/Queue_%28abstract_data_type%29) as always 😄

[This Wikipedia article](https://en.wikipedia.org/wiki/Priority_queue) on priority queue. We’ll come back to this in future articles.

A nice [demo](https://www.khanacademy.org/computer-programming/queue-structure/6427851233820672) by Larry Serflaten on Khan Academy, where he uses push and pull in place of enqueue and dequeue.

And here’s the [Answer](http://stackoverflow.com/questions/69192/how-to-implement-a-queue-using-two-stacks) for the quick challenge. Only look at this after trying it out for a bit yourself. You can also check out [Levent Divilioglu](http://stackoverflow.com/users/3128926/levent-divilioglu)’s answer for a fantastic graphical representation.








