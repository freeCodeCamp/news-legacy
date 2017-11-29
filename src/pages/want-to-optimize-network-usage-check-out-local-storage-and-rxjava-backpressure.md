---
author: Nikita Kozlov
authorTwitter: https://twitter.com/Nikita_E_Kozlov
authorFacebook: none
title: "Want to optimize network usage? Check out local storage and RxJava backpressure"
subTitle: "Users love fast, responsive apps. They don’t want to hear how API calls take time. They want to see updates immediately. Right now. Once ..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*acDn76XOMsf80_bNbtHnAQ.jpeg
url: https://medium.freecodecamp.org/want-to-optimize-network-usage-check-out-local-storage-and-rxjava-backpressure-8b91b1db298a
id: want-to-optimize-network-usage-check-out-local-storage-and-rxjava-backpressure-8b91b1db298a
date: 2017-10-03T14:32:18.669Z
tags: [
  "UX",
  "Android",
  "Tech",
  "Web Development",
  "Programming"
]
---
# Want to optimize network usage? Check out local storage and RxJava backpressure







![](https://cdn-images-1.medium.com/max/2000/1*acDn76XOMsf80_bNbtHnAQ.jpeg)







Users love fast, responsive apps. They don’t want to hear how API calls take time. They want to see updates immediately. Right **now**. Once you meet that expectation, users start interacting with the app more and more. It’s so easy for them, since the app responds immediately.

With all this positive impact on the business comes increased usage of the network and the battery. So it’s in everyone’s best interest to minimize the number of network calls.

In this article, I’ll share how one such case was solved using RxJava.

To make it more interesting, I’ve added an optional challenge along with the solution. [One of the branches](https://github.com/NikitaKozlov/Switchman/tree/challenge) in the repo has only a few base classes and a set of acceptance tests. Before reading the solution, you can try to solve the problem on your own by making those tests pass. You’ll find more information in the “Challenge” section below.

### The Problem

The task is to develop a feature that allows users to add and remove items from a certain list. The list is stored on the back end. Many apps face this problem in one way or another: marking an e-mail as important in Gmail, adding a song to your favorites on Spotify, or recommending an article here, on Medium (😉).







![](https://cdn-images-1.medium.com/max/2000/1*xYpu_fK_B6LgK6q_XpZdGw.jpeg)







The problem sounds simple, but it gets trickier when things like connection latency and network errors are taken into account.

Implementation must fulfil the following requirements:

*   **The user interface reacts immediately to the user’s actions.** Users want to see the results of their actions immediately. If we can’t synchronize those changes, we should notify our users, and roll back to the previous state.
*   **Interaction from multiple devices is supported.** This doesn’t mean that we need to support changes in real time — but we do need to fetch the whole collection from time to time. Plus, our back end provides us with API endpoints for additions and removals, which we must use to support better synchronization.
*   **Integrity of the data is guaranteed.** Whenever a synchronization call fails, our app should recover gracefully from that error.

The architectural decisions are discussed in a separate article: “[How to leverage Local Storage to build lightning-fast apps](https://medium.freecodecamp.com/how-leverage-local-storage-to-build-lightning-fast-apps-4e8218134e0c)”. This article is focused on optimizing the number of calls to the backend by using RxJava.

#### Formal definition

We need to develop the following interface:

<pre name="58e6" id="58e6" class="graf graf--pre graf-after--p">interface ItemRepository {  
    Single<List<? extends Item<ItemId>>> getItemList();</pre>

<pre name="ec18" id="ec18" class="graf graf--pre graf-after--pre">    Single<Response> addItem(ItemId id);</pre>

<pre name="41dc" id="41dc" class="graf graf--pre graf-after--pre">    Single<Response> removeItem(ItemId id);</pre>

<pre name="d978" id="d978" class="graf graf--pre graf-after--pre">    Observable<Integer> getCounter();</pre>

<pre name="5580" id="5580" class="graf graf--pre graf-after--pre">    boolean hasItem(ItemId id);  
}</pre>

The methods `addItem()` and `removeItem()` can be called in any order with any arguments. To avoid passing unnecessary information, both methods need only `ItemId`, while `getItemList()` returns complete items.

Please take into account that `getCounter()` returns an `Observable` that emits an amount of items in the collection any time a change happens to the `ItemRepository`. This means that, for example, we increase the counter every time a new item is added, even though synchronization with the back end is not yet finished.

Back end API is the following:

<pre name="ab46" id="ab46" class="graf graf--pre graf-after--p">public interface Api {  
    Single<List<? extends Item<ItemId>>> getItemList();</pre>

<pre name="c4ca" id="c4ca" class="graf graf--pre graf-after--pre">    Single<ApiResponse> addItem(ItemId id);</pre>

<pre name="a3cd" id="a3cd" class="graf graf--pre graf-after--pre">    Single<ApiResponse> removeItem(ItemId id);  
}</pre>

We can add or remove items by their IDs and fetch the whole collection.

### Challenge

In order to make it more interesting, here is the promised challenge. It is, of course, optional, so you can go directly to the “Solution” section if you prefer.

Inspired by the article [“Practical Challenges For RxJava Learners”](https://medium.com/proandroiddev/practical-challenges-for-rxjava-learners-1821c454de9) by Sergii Zhuk, I decided to create a separate [branch](https://github.com/NikitaKozlov/Switchman/tree/challenge) with only basic classes and acceptance tests. You can make them pass by yourself and then compare your solution with mine. In total, there are 29 tests. They are split into four parts according to the functionality covered:

1.  **Fetching:** Fetching the list from API and checking what it contains.
2.  **Adding and removing:** Checking that proper API methods are called and state of the repository is changed accordingly.
3.  **Counter changes:** Some screens display the total amount of items in the list. That functionality is tested in this part.
4.  **Backend calls optimization:** Even though the user might add/remove a single item as many times as they want, the network should not be overworked.

There is more than one way to optimize backend calls. So in case you’re not sure about tests, check out the “Optimization Strategy” section.

### Solution

To solve this problem I decided to build the `ItemRepository` in the following way:







![](https://cdn-images-1.medium.com/max/2000/1*9lAeafTyXVoDx_-YwqQQ5g.jpeg)







Along with a local copy of the main list, local storage has two extra lists: one for ongoing additions, and one for ongoing removals. They help it recover from negative cases. To read more about it, please check the following article: [How to leverage Local Storage to build lightning-fast apps](https://medium.freecodecamp.com/how-leverage-local-storage-to-build-lightning-fast-apps-4e8218134e0c).

#### Optimization Strategy

We should not launch all the requests to the backend at once. For example, if you add and remove the same item simultaneously, the result is unpredictable. We don’t know which request would be the first to finish. So, operations on a single item should be queued and launched one by one. Requests that deal with different items can go in parallel without problems.







![](https://cdn-images-1.medium.com/max/2000/1*N1wPQLD6kwD9FmTcvGaYLQ.jpeg)

Grouping events into queues by ID. Events within a single queue should be processed consequently. Different queues can be processed in parallel.







Queues are executed in parallel. Each queue consists of requests for adding and removing a particular item. Let’s take a look at one of them.







![](https://cdn-images-1.medium.com/max/2000/1*lVwJj6yje110MmUb793eFg.jpeg)

Events in the middle don’t affect the result state, so we can skip them.







The most important requests are the latest to come and the last request that was launched. If they are the same — for example, they’re both “add” — then we can skip the whole queue and do nothing. If they are different, then once the current request has finished, you can launch the latest one and skip everything in the middle.

Also, `ItemRepository` should start syncing with the back end, without any artificial delays, as soon as it has new data. Buffering and batching can be used to further improve this solution, but it is out of the scope of this article. I'm mentioning it here so you won't be surprised by the solution’s behavior.

#### Here comes RxJava

RxJava provides powerful mechanisms to manipulate data streams. Let’s use them to our advantage.

First, let’s create events that represent user intention: `Add` and `Remove`. Now, using `Subject` or `[Relay](https://github.com/JakeWharton/RxRelay)` , we can create an input stream of those events.

Second, we’ll implement queues by splitting this stream into multiple sub-streams of events grouped by the same `itemId`. To do this, we can use the `groupBy` operator that returns an `Observable` of `GroupedObservable`. Each `GroupedObservable` is a queue from the optimization strategy.



![](https://cdn-images-1.medium.com/max/1600/1*rMWYkMeQAYqCgzJKv54EAg.png)

Marble diagram of the “`_groupBy" operator. "ItemId" is represented as the shape of each marble._`



We don’t want any of those sub-streams to complete. But if something unexpected happens, we want to be sure that data will continue to flow no matter what. And `groupBy` operator can help us with that. If any of the `GroupedObservable` are terminated, perhaps because of an error, a new one is created when an event with a matching `itemId` is in the stream.

After this stage, we have a set of sub-streams that we are going to optimize independently.

#### Optimization

The third and final step is optimization. Before we start, let’s check the optimization strategy once more. It says that we need to keep the most recent event along with the last one that actually caused a network call. We can drop all the events in the middle! They just **don't matter**.

Unfortunately, we don't know how long each back-end request takes or how often a new event is emitted. This means that we can't use `window`, `buffer`, `throttle`, or `debounce` to implement the required behavior. To use these, we need to know timing beforehand.

We need each `GroupedObservable` to emit a new event only when an ongoing call is finished. In other words, once the call is finished, we need to ask `GroupedObservable` to emit a new item. That can be done by using reactive pull backpressure. So we need to create the operator `onBackpressureLatest(Subscriber)`. It drops all events except the last one that is emitted only when the `Subscriber.request()` method is called.







![](https://cdn-images-1.medium.com/max/2000/1*gEFqpGv6ZjLaeyuf5fZHJw.png)

On each “request(1)” call, the last item is emitted. That is exactly what we need.







Now let’s do the back-end call in the `Subscriber` so it knows when to call `request()`. It can also handle the comparison between events. If they are the same, then it skips the last one. Otherwise, it launches a call to the back end. The result is posted to the output stream.

Methods `ItemRepository.addItem()` and `ItemRepository.removeItem()` return `Single`, so we need to filter this stream to deliver proper responses to each of the callers of our API.

### The third state of the request

Independently of skipping requests or making them, consumers of `ItemRepository` expect to get responses. This means that even if some requests are skipped, we still need to return as many responses as calls for `addItem()` and `removeItem()` are made. There are two ways to deal with this.

First, we could hide all optimizations from the consumer and act as if all the requests have been executed. This is good for encapsulation, because after performing optimizations, you don’t need to change consumers’ code.

But in some cases that means more complexity. For example, if we show a snackbar for each response, and the end-user clicked multiple times to add and remove the same item, we will spam him with notifications. To resolve this issue, we have to implement some logic for dealing with such cases.

Or we could go for the second approach. We could be honest with consumers of our API and add a third, “skipped,” state of the response. From my experience, I can say that it makes things simpler. In the example above, we just wouldn’t show notifications for all skipped requests.

### Coding time

In pseudo-code, it looks simpler than it sounds:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b0229bc3c487488d2c8119625eb88b03?postId=8b91b1db298a" data-media-id="b0229bc3c487488d2c8119625eb88b03" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F8263254%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Let’s go through most important parts:

*   Line 1: We grouped `inputStream` by ID and got our sub-streams.
*   Line 3: We applied Backpressure. Everything but the last event is dropped at this stage.
*   Line 6: Depending on the event, we either skip it and return the skipped response, or launch a network call and save it for future comparison.

Please note that code above won’t compile. You can find the actual code and a small Android app to play with in [the repo](https://github.com/NikitaKozlov/Switchman).

### Conclusion

Even a routine task like removing and adding items to a collection becomes a challenge when it comes to optimization, synchronization, and excellent user experience. Good tools, like RxJava, can help us keep code concise and expressive.

You can find my solution [here](https://github.com/NikitaKozlov/Switchman) in the module `switchman`. Along with it, in the module `app` , you can find an example application to play with. If you are interested in a challenge, check out the branch “challenge” — the tests are in the module `switchman`. For more information, check the section “Show me the code” in README.

[**Nikita Kozlov (@Nikita_E_Kozlov) | Twitter**  
_The latest Tweets from Nikita Kozlov (@Nikita_E_Kozlov): “https://t.co/wmGSJ7snW1"_twitter.com](https://twitter.com/Nikita_E_Kozlov "https://twitter.com/Nikita_E_Kozlov")[](https://twitter.com/Nikita_E_Kozlov)

_Thank you for you time reading this article. If you like it, don’t forget to click the_ 👏 _below._








