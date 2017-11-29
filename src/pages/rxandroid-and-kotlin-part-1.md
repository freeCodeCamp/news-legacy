---
author: Ahmed Rizwan
authorTwitter: https://twitter.com/sudo_rizwan
authorFacebook: none
title: "RxAndroid and Kotlin (Part 1)"
subTitle: "When I first started using RxAndroid, I didn’t really get it. I mean, I grasped abstract concept. But I didn’t understand where I should ..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*bTttcFdSLyvWIPg91OaNEw.png
url: https://medium.freecodecamp.org/rxandroid-and-kotlin-part-1-f0382dc26ed8
id: rxandroid-and-kotlin-part-1-f0382dc26ed8
date: 2015-06-27T11:16:11.508Z
tags: [
  "Android",
  "Android App Development",
  "Programming",
  "Kotlin",
  "Mobile"
]
---
# RxAndroid and Kotlin (Part 1)

When I first started using [RxAndroid](https://github.com/ReactiveX/RxAndroid), I didn’t really get it. I mean, I grasped abstract concept. But I didn’t understand where I should be using it.

But then I went through a few examples and read a few really good articles (recommend reading list at the bottom of this article.) I just got it! And my reaction was pretty much:



![](https://cdn-images-1.medium.com/max/1600/1*rjlr5GxQIx8o28U5nhtDxg.gif)

Such Rx. Much Reactive. Wow!



In short, you can use Rx almost everywhere. But **you shouldn’t**. You should intelligently figure out where it should go. Because in some cases, using Rx can be a 100 times more productive than normal imperative programming. And in other cases, it just isn’t necessary.

I’ll demonstrate a few examples in both **Kotlin** and **Java,** so that you get an idea of what Rx is, as well as a comparison of the two languages.

Now if you aren’t yet familiar with Kotlin, it’s an awesometacular alternative to Java, that works amazingly well on Android. And oh, it’s developed by JetBrains!

P.S. There are no semicolons in Kotlin. *_*

If you want to read more, check out:

[Official Kotlin Website](http://kotlinlang.org)

[Getting Started on Android](http://kotlinlang.org/docs/tutorials/kotlin-android.html)

[Jake Wharton’s Paper on Kotlin](https://docs.google.com/document/d/1ReS3ep-hjxWA8kZi0YqDbEhCqTt29hG8P44aA9W0DM8/edit?usp=sharing)

[My Blog](https://medium.com/@ahmedrizwan/android-programming-with-kotlin-6ce3f9b0cbe6) ;)

Now let’s get back to Rx.

If you already have a good concept of Rx, then you can skip this topic. Otherwise, read on.

Ok so what is Rx? Well, it’s “reactive programming.” Reactive programming is, in easy words, a programming pattern closely related to the **Observer** **Pattern,** in which, Subscribers “react” to the events emitted by these Observables.

Here’s a diagram:



![](https://cdn-images-1.medium.com/max/1600/1*Oa7zxVaeyF4TO6Mres4E5w.png)



Rx is also a subset of **Functional Programming**. Hence often referred to as Functional Reactive Programming. As the subscribers receive data, they can apply a sequence of **transformations** on them, similar to what we can do with Streams in Java 8.

Here’s another helpful diagram:



![](https://cdn-images-1.medium.com/max/1600/1*ATqZ5sek2uAPfZMdmsWHSg.png)

Transformations as the subscriber receives data from observable.



We can even merge streams into one another. It’s that flexible! So for now, just remember that there are tons of different things we can do with the data we (the subscribers) receive from observables, on the fly.

Now that the concept is somewhat clear, lets get back to RxJava.

In Rx, the **subscriber** implements three methods to interact with **observable**:

1.  onNext(Data): Receives the data from the observable
2.  onError(Exception): Gets called if an exception is thrown
3.  onCompleted(): Gets called when the data stream ends

This can be compared to the **Iterables** in Java. The difference is that iterables are **pull-based**, and Rx observables are **push-based**. The observable pushes out data to its subscribers.

Here’s the comparison table:



![](https://cdn-images-1.medium.com/max/1600/1*6xrzAdP_wa6aR80UrNxiIw.png)



Another thing to note is that Rx is **synchronous** in nature, meaning you'll have to specify if you want it to be asynchronous. You can do that by calling the **observeOn** and **subscribeOn** methods.

So observables push out **streams of data** to their subscribers, and subscribers can consume those streams with the help of the methods listed above**.** We can understand “streams” a bit better with the help of [Marble Diagrams](http://rxmarbles.com):



![](https://cdn-images-1.medium.com/max/1600/1*2-sTf0tHsmDlent1HLIhrg.png)

A marble diagram representing two different streams.



The circles on these streams represent **data objects**. And the arrows represent that the data is flowing in one direction in an orderly fashion.

Have a look at this marble diagram:



![](https://cdn-images-1.medium.com/max/1600/1*ju5YD8bRZhdCGmptRQdmlw.png)

A mapping of a stream.



Like I mentioned before, we can **transform** the data (as well as streams) using [**operators**](https://github.com/ReactiveX/RxJava/wiki/Alphabetical-List-of-Observable-Operators) like map, filter, and zip. The image above represents a simple mapping. So after this transformation, the subscriber to this stream will get the transformed version of the stream. Cool, right?

You should now have a good concept of how things work in Rx, so lets get to the actual implementation.



![](https://cdn-images-1.medium.com/max/1600/1*-nTq2bHQbJZctDZZoPnBYQ.png)



### Implementing Observables

The first thing we have to do is meditate.



![](https://cdn-images-1.medium.com/max/1600/1*I6aMRP_WrXdse197zfBh1Q.jpeg)



After that, creating an observable isn’t all that difficult.

There are a number of ways we can [create observables](https://github.com/ReactiveX/RxJava/wiki/Creating-Observables). I’ll list three here:

1.  **Observable.from()** creates an observable from an Iterable, a Future, or an Array.

<pre name="1e6c" id="1e6c" class="graf graf--pre graf-after--li">//Kotlin  
Observable.from(_listOf_(1, 2, 3, 4, 5))  
//Java  
Observable._from_(Arrays._asList_(1, 2, 3, 4, 5));</pre>

<pre name="901d" id="901d" class="graf graf--pre graf-after--pre">//It will emit these numbers in order : 1 - 2 - 3 - 4 - 5   
//Which should be pretty obvious I guess.</pre>

2\. **Observable.just()** creates observable from an object or several objects:

<pre name="c1fe" id="c1fe" class="graf graf--pre graf-after--p">Observable.just("Hello World!")   
//this will emit "Hello World!" to all its subscribers</pre>

3\. **Observable.create()** creates an observable from scratch by means of a function. We just implement the OnSubscribe interface, then tell the observable what it should send to its subscribers:

<pre name="d0eb" id="d0eb" class="graf graf--pre graf-after--p">//Kotlin  
Observable.create(object : Observable.OnSubscribe<Int> {  
    override fun call(subscriber: Subscriber<in Int>) {  
        for(i in 1 .. 5)  
            subscriber.onNext(i)  

        subscriber.onCompleted()  
    }  
})</pre>

And here’s the Java version of the same code:

<pre name="75d6" id="75d6" class="graf graf--pre graf-after--p">//Java  
Observable._create_(new Observable.OnSubscribe<Integer>() {  
    @Override  
    public void call(final Subscriber<? super Integer>   
subscriber) {  
        for (int i = 1; i <= 5; i++)  
            subscriber.onNext(i);  

        subscriber.onCompleted();  
    }  
});</pre>

<pre name="1f3c" id="1f3c" class="graf graf--pre graf-after--pre">//Using the implementation above, we're telling the observer what //it should do when a subscriber subscribes to it. Hence the name //"onSubscribe".</pre>

The code I’ve written above is equivalent to the example I wrote for **Observable.from()** but as you can see, we have full control as to what should be emitted and when the stream should end. I can also send caught exceptions with the use of **subscriber.onError(e)**.

Now we just need some subscribers.

### Implementing Subscribers

For Android, to subscribe to an observable, we first tell the observable about the threads on which we plan to subscribe to and observe. RxAndroid gives us [**Schedulers**](https://github.com/ReactiveX/RxJava/wiki/The-RxJava-Android-Module), through which we can specify the threads.

So let’s take a simple “Hello World” observable for example. Here we’ll do the subscription on a **worker thread**, and the observation on the **main thread**:

<pre name="dda5" id="dda5" class="graf graf--pre graf-after--p">//Kotlin  
Observable.just("Hello World")  
          .**subscribeOn(Schedulers.newThread())**   
          //each subscription is going to be on a new thread.  
          .**observeOn(AndroidSchedulers.mainThread()))**   
          //observation on the main thread  
          //Now our subscriber!  
          .**subscribe**(object:Subscriber<String>(){  
            override fun onCompleted() {  
             //Completed  
            }  

            override fun onError(e: Throwable?) {  
             //_TODO : Handle error here_ }  

            override fun onNext(t: String?) {  
             Log.e("Output",t);  
            }  
           })</pre>

<pre name="9134" id="9134" class="graf graf--pre graf-after--pre">//Java   
Observable._just_("Hello World")  
        .**subscribeOn(Schedulers._newThread_())**  
        .**observeOn(AndroidSchedulers._mainThread_())**  
        .**subscribe**(new Subscriber<String>() {  
            @Override  
            public void onCompleted() {  
                //Completion  
            }  

            @Override  
            public void onError(final Throwable e) {  
                //_TODO : Handle error here_ }  

            @Override  
            public void onNext(final String s) {  
                Log._e_("Output",s);  
            }  
        });</pre>

<pre name="4199" id="4199" class="graf graf--pre graf-after--pre">//You can get more info about schedulers and threading [here](https://github.com/ReactiveX/RxJava/wiki/The-RxJava-Android-Module).  

</pre>

So… What does this do?

When you run this code — it displays a log message:

<pre name="906f" id="906f" class="graf graf--pre graf-after--p">Output: Hello World!</pre>

And that’s it! This is how simple “subscription” is. You can get more details about subscribe [here](http://reactivex.io/documentation/operators/subscribe.html).

### A Practical Example: Debounce

So now you have an idea of how you can create some simple observables, right? So let’s implement one of my favorite RxExamples. I want to implement this:



![](https://cdn-images-1.medium.com/max/1600/1*lyOcKYAvTjDnArAN4rEDNw.gif)



In this example, I enter text into an **EditText**. This automatically triggers a response in which I print out the text.

Now the response could be a call to an API. So making this API call ever time I type a character would be wasteful, since I only need a response for the last character. So I should trigger a call only when I stop typing — let’s say one second after I finish typing.

So how do we do this in non-reactive programming? Well, it ain’t pretty!

#### **A Non-Reactive Debounce**

I use a Timer, and schedule it to call the **run()** method after a 1000 milliseconds of delay in the **afterTextChanged()** method. Oh, and don’t forget to add **runOnUiThread()** in there as well.

Conceptually it’s not that difficult, but the code becomes cluttered. Even more so in Java!

Java version:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/5864b879e65c2d2286cfa769f3ee2cb8?postId=f0382dc26ed8" data-media-id="5864b879e65c2d2286cfa769f3ee2cb8" allowfullscreen="" frameborder="0"></iframe>





Kotlin version:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/bb413aed24fd76d19835573ba8e400d8?postId=f0382dc26ed8" data-media-id="bb413aed24fd76d19835573ba8e400d8" allowfullscreen="" frameborder="0"></iframe>





#### **Reactive Solution**

A Reactive solution is much more boilerplate-free. And there are only 3 steps to it.

1.  Create an observable
2.  Add the Debounce operator set to a 1000 milliseconds (1 second) delay
3.  Subscribe to it

First the Java code:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2ae9d26470d6dc2c95122143ed39a5e4?postId=f0382dc26ed8" data-media-id="2ae9d26470d6dc2c95122143ed39a5e4" allowfullscreen="" frameborder="0"></iframe>





Now the Kotlin ❤





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/4f4ced93636309ec177917b923672f58?postId=f0382dc26ed8" data-media-id="4f4ced93636309ec177917b923672f58" allowfullscreen="" frameborder="0"></iframe>





#### For even less boilerplate, use RxBindings.

Now for almost no boilerplate, we can use [**RxBindings**](https://github.com/JakeWharton/RxBinding)which has many super-awesome bindings for UI widgets. And it works on both Java and Kotlin! Using bindings, the code becomes:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/dae8003f7b704e685ce7a8694d3b6469?postId=f0382dc26ed8" data-media-id="dae8003f7b704e685ce7a8694d3b6469" allowfullscreen="" frameborder="0"></iframe>





As you can see, there’s very little boilerplate, and the code is much more to-the-point. If I were to go back to this code in a few months, it would hardly take me a minute to figure out what’s going on. And that is priceless!











* * *







Here are some awesome resources for Rx that I recommend. Do check these out!

[Official Rx Page](http://reactivex.io)

[Grokking RxJava Series by Dan Lew](http://blog.danlew.net/2014/09/15/grokking-rxjava-part-1/)

[Android Rx, and Kotlin : A case study](http://beust.com/weblog/2015/03/23/android-rx-and-kotlin-a-case-study/)

[Replace AsyncTasks with Rx](http://stablekernel.com/blog/replace-asynctask-asynctaskloader-rx-observable-rxjava-android-patterns/)

[PhilosophicalHacker Blog on Rx](http://www.philosophicalhacker.com/2015/06/12/an-introduction-to-rxjava-for-android/)

[Implementing EventBus in Rx](http://nerds.weddingpartyapp.com/tech/2014/12/24/implementing-an-event-bus-with-rxjava-rxbus/)

[RxKotlin](https://github.com/ReactiveX/RxKotlin)








