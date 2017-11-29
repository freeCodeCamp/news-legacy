---
author: Casper Beyer
authorTwitter: https://twitter.com/caspervonb
authorFacebook: https://facebook.com/1903859976521588
title: "How I Visualized Sorting Algorithms and Brought Them to Life with Sound"
subTitle: "The making of “Tone of Sorting”"
coverSrc: https://cdn-images-1.medium.com/max/2000/1*cjeGNVuxeEebX8kTCZX-Yg.jpeg
url: https://medium.freecodecamp.org/how-i-visualized-the-sorting-algorithms-and-brought-them-to-life-with-sound-ce7c5c6cb6ef
id: how-i-visualized-the-sorting-algorithms-and-brought-them-to-life-with-sound-ce7c5c6cb6ef
date: 2017-11-20T16:59:44.121Z
tags: [
  "Programming",
  "Data Visualization",
  "Startup",
  "Technology",
  "Web Development"
]
---
# How I Visualized Sorting Algorithms and Brought Them to Life with Sound

## The making of “Tone of Sorting”







![](https://cdn-images-1.medium.com/max/2000/1*cjeGNVuxeEebX8kTCZX-Yg.jpeg)







Once a week, usually on Sundays I try to set aside time to make something random, usually it is the result of a “what if” shower thought.

A few weeks ago I started wondering what sorting algorithms would sound like, and if [auralizing](https://en.wikipedia.org/wiki/Auralization) an algorithm would aid in visualizing it. I am still not sure if it helps but it sure sounds neat!





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/f59d4f6c6ff09b201d45fd71bd7b60d8?postId=ce7c5c6cb6ef" data-media-id="f59d4f6c6ff09b201d45fd71bd7b60d8" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FO1Tokt4Zvik%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



[Tone of Sorting ](https://caspervonb.github.io/toneofsorting/)— Quick Sort with 100 Elements



I also wanted it to be very accessible. Putting it on the web was the most obvious choice, but that comes with a caveat. We cannot write sorting algorithms as synchronous code. Even if we were to block and just record the actions taken most browsers would already suggest that the page is not responding and kill it.

### Asynchronous Algorithms

So the immediate solution that came to mind was to make them asynchronous. For example, bubble sort could be implemented as something like the following snippet

<pre name="1f58" id="1f58" class="graf graf--pre graf-after--p">**function** test(array, i, j) {  
  **return** array[i] - array[j];  
}</pre>

<pre name="ccf3" id="ccf3" class="graf graf--pre graf-after--pre">**function** swap(array, i, j) {  
  var a = array[i];  
  var b = array[j];</pre>

<pre name="c424" id="c424" class="graf graf--pre graf-after--pre">array[i] = b;  
  array[j] = a;  
}</pre>

<pre name="ef45" id="ef45" class="graf graf--pre graf-after--pre">**function** bubbleSort(callback, array) {  
  setTimeout(**function** step(i, j, length) {  
    **if** (test(array, j, j + 1) > 0) {  
      swap(array, j, j + 1);  
    }</pre>

<pre name="1dfd" id="1dfd" class="graf graf--pre graf-after--pre">**if** (j > length) {  
      window.setTimeout(step, 0, ++i, 0, n);  
    } **else** **if** (i < length) {  
      window.setTimeout(step, 0, i, ++j, n);    
    } else {  
      callback(array);  
    }  
  }, 0, 0, 0, array.length);  
}</pre>

There is a problem with this approach though. It is not that it’s convoluted even though it is fairly tedious to write the algorithms this way. It is that it directly ties iteration to the main loop, so doing more than one step per interval gets even more tedious.

### Synchronous Algorithms

A much more manageable solution is to have the algorithms be synchronous. The main thread cannot be blocked. However, we can get around this by moving the sorting algorithms to a worker thread and posting messages back to the main thread.

<pre name="6fca" id="6fca" class="graf graf--pre graf-after--p">**function** test(array, i, j) {  
  self.postMessage(['test', i, j]);</pre>

<pre name="5055" id="5055" class="graf graf--pre graf-after--pre">**return** array[i] - array[j];  
}</pre>

<pre name="77bc" id="77bc" class="graf graf--pre graf-after--pre">**function** swap(array, i, j) {  
  self.postMessage(['swap', i, j]);</pre>

<pre name="3dbe" id="3dbe" class="graf graf--pre graf-after--pre">var temp = array[i];  
  array[i] = array[j];  
  array[j] = temp;  
}</pre>

<pre name="15b9" id="15b9" class="graf graf--pre graf-after--pre">**function** bubbleSort(array) {  
  **var** length = array.length;  
  **for** (**var** i = 0; i < length; i++) {  
    **var** sorted = true;  
    **for** (**var** j = 0; j < (length - i) - 1; j++) {  
      **if** (test(a, j + 1, j) < 0) {  
        sorted = false;  
        swap(a, j, j + 1);  
      }  
    }</pre>

<pre name="2ed9" id="2ed9" class="graf graf--pre graf-after--pre">**if** (sorted) {  
      **return**;  
    }  
  }  
}</pre>

<pre name="4b37" id="4b37" class="graf graf--pre graf-after--pre">self.onmessage = **function**(event) {  
  **var** fn = eval(event.data[0]);  
  fn(event.data[1], event.data[2]);  
};</pre>

Then by having the main thread queue the messages, they can easily be read in any order or rate desired. Playing tones, animating the document and so on becomes straight forward in a _request Animation Frame_ callback.

<pre name="3a84" id="3a84" class="graf graf--pre graf-after--p">**var** queue = [];  
**var** worker = new Worker('quicksort.js');  
worker.postMessage(['quickSort', /* ... */]);  
worker.onmessage = **function**(event) {  
  queue.push(event.data);  
};</pre>

<pre name="8e1c" id="8e1c" class="graf graf--pre graf-after--pre">**var** then = null;  
requestAnimationFrame(**function** tick(now) {  
  **var** delta = now - then;  
  **if** (delta < 1000) {  
    **return** window.requestAnimationFrame(tick, now);  
  }  

  // ...  

  then = now;  
  requestAnimationFrame(tick, now);  
}, window);</pre>

This is the way [Tone of Sorting](https://caspervonb.github.io/toneofsorting/) currently does its computations but there is still a problem with it, with heavy workloads it will still freeze the tab.

Additionally, there is a somewhat special algorithm called “Bogo Sort”, otherwise known as Stupid Sort or Monkey Sort, it is unlikely to ever solve. If we need to wait for the worker thread to finish then we cannot visualize it.

Now the worker approach could be improved upon, batching messages together et cetera but I think there is a better way.

### Cooperative Algorithms

Using coroutines, the algorithms can be partially evaluated on demand. It just so happens that JavaScript does support coroutines, called generators.

Defining the algorithm as a generator means it can _yield_ steps for the renderer to take. For example, bubble sort becomes a generator that looks something like the following

<pre name="0ec0" id="0ec0" class="graf graf--pre graf-after--p">**function** test(array, i, j) {  
  **return** array[i] - array[j];  
}</pre>

<pre name="5729" id="5729" class="graf graf--pre graf-after--pre">**function** swap(array, i, j) {  
  **var** temp = array[i];  
  array[i] = array[j];  
  array[j] = temp;  
}</pre>

<pre name="34de" id="34de" class="graf graf--pre graf-after--pre">**function*** bubbleSort(array) {  
  **var** length = array.length;  
  **for** (var i = 0; i < length; i++) {  
    **var** sorted = true;  
    **for** (var j = 0; j < (length - i) - 1; j++) {  
      **yield** ['test', j + 1, j];</pre>

<pre name="569f" id="569f" class="graf graf--pre graf-after--pre">**if** (test(a, j + 1, j) > 0) {  
        sorted = false;  
        swap(a, j, j + 1);</pre>

<pre name="0b98" id="0b98" class="graf graf--pre graf-after--pre">**yield** ['swap', j, j + 1];  
      }  
    }</pre>

<pre name="1d6e" id="1d6e" class="graf graf--pre graf-after--pre">**if** (sorted) {  
      **return**;  
    }  
  }  
}</pre>

This is still blocking. However, calling it only a few steps at a time from an asynchronous callback like requestAnimationFrame means it is asynchronous and, since it is generated on demand, algorithms like “Bogo Sort” would work.

<pre name="9101" id="9101" class="graf graf--pre graf-after--p">**var** array = **new** Array(100);  
**var** algorithm = bubbleSort(array);</pre>

<pre name="4cb5" id="4cb5" class="graf graf--pre graf-after--pre">requestAnimationFrame(**function** tick(now) {  
  _// ..._  
  **var** step = algorithm.next();  
  _// ..._  
}, window);</pre>

### Try It For Yourself

You can try out [Tone of Sorting here](https://caspervonb.github.io/toneofsorting/), the animations are really only visible with around 20 elements or so. There is also a [GitHub Repository](https://github.com/caspervonb/toneofsorting/) but the source is more or less as-is if you inspect the source in your web browser.

But more importantly, I want to encourage you to try to visualize other types algorithms as it is loads of fun!

I also recommend checking out [Introduction to Algorithms](http://amzn.to/2il5Njw) if you are looking for a book to on the subject to sit down with.








