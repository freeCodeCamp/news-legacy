---
author: Anup Cowkur
authorTwitter: https://twitter.com/anupcowkur
authorFacebook: https://facebook.com/1250513434963795
title: "How to design APIs that don’t suck"
subTitle: "Other developers actually have to use the APIs you design. So don’t let those APIs suck. If you don’t want hordes of angry programmers to..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*wSKrrW74dUcgu42OqwA1BQ.png
url: https://medium.freecodecamp.org/how-to-design-apis-that-dont-suck-922d864365c9
id: how-to-design-apis-that-dont-suck-922d864365c9
date: 2016-10-23T13:27:45.336Z
tags: [
  "Programming",
  "Software Development",
  "Design",
  "API",
  "Web Development"
]
---
# How to design APIs that don’t suck







![](https://cdn-images-1.medium.com/max/2000/1*wSKrrW74dUcgu42OqwA1BQ.png)







Other developers actually have to use the APIs you design. So don’t let those APIs suck. If you don’t want hordes of angry programmers to descend on your home in the middle the night with torches and pitchforks, you need to design them right.

Here are some design tips I’ve picked up from colleagues over the years. They apply to all kinds of APIs: open source libraries, internal SDKs, modules or even a single class.

### Be explicit



![](https://cdn-images-1.medium.com/max/1600/1*EnoOMV8mvzfOzaPef80-6g.jpeg)



This is perhaps the most important tip. If you have a method called `getUser` and it causes some side effect without being explicit about it, that can lead to a lot of problems.

Do not modify shared mutable state without being explicit about it. If I call `getUser`, I expect it to just return a user, Not increment the `user_id` by `1` along the way. You might consider using [immutable data structures](https://speakerdeck.com/anupcowkur/the-mutable-state-monster-and-how-to-defeat-it) as well.

Encode as much behavior as you can in the method/class/module name within reasonable limits. Don’t expect users to go source diving to uncover hidden behavior that the name doesn’t reveal. You’ll save yourself a lot of pain down the line.

### Keep your API surface area small



![](https://cdn-images-1.medium.com/max/1600/1*gR-LuBZlldQcw5jNUDUrZg.jpeg)



No one likes bloated programs. The fewer APIs you can expose to get the job done, the better the experience for everyone.

Is someone really asking for this new API that you want to write? You can probably defer it until it’s actually a problem that someone wants solved.

In some programming environments like Android, there are hard limits on the number of total methods apps can have so it might be something you have to keep in mind if you target those platforms.

Anticipatory implementation is responsible for shameful amounts of wasted programming hours. Practice [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it).

### Reduce boilerplate



![](https://cdn-images-1.medium.com/max/1600/1*oOq7C7sFpg5Ra87J-DvMCQ.jpeg)



Handle as many implementation details as possible internally to reduce burden on clients. The lesser the consumer has to do, the lesser the possible number of bugs you’ll have to deal with.

There’s also the question of aesthetics. Having to write boilerplate can ruin an otherwise perfectly good API and make consumer code ugly. We all like clean code, right? Make it easy on your consumers to keep code terse and clean code when using your API.

### Reduce dependencies



![](https://cdn-images-1.medium.com/max/1600/1*zxCrJ3wPfViuREZIlWPEgA.jpeg)



Try to keep your code as self contained as possible. The more dependencies you have, the more potential problems it can cause in downstream consumer code.

If you really want that nice piece of functionality from another module, Make an attempt to extract it out and only include that which you need.

It’s always a fine balancing act between code re-use and tight coupling. You’ll have to make that judgement call. If that functionality is small, it might be worth reimplementing it yourself.

### Return meaningful error states



![](https://cdn-images-1.medium.com/max/1600/1*TslMuaTA5zE2AVfzkx0ynw.jpeg)



I could rant all day about how `null` is a useless construct in many cases. It literally means _nothing_.

“Hey module, give me a user”

“Nope. Here’s _nothing_ instead”

This gives me zero information about what went wrong and what I can do ameliorate the situation. If we instead have a documented way to express expected error states within our problem domain such as `Error.USER_NOT_CREATED` or `Error.USER_DELETED,` That give me much more actionable data and helps me debug the problem.

Error messages should also follow the same guidelines. _You need to login before proceeding_ is much better than _LOL! Something went wrong._

### Save exceptions for truly exceptional cases



![](https://cdn-images-1.medium.com/max/1600/1*Q3XrbUVoS4o4YKpNvvmO0A.gif)



If your language does not have exceptions, rejoice! `Either` types and their cohorts found in functional languages are much better at providing meaningful error states anyway.

Exceptions tend to get heavily abused in Java land. Exceptions are for handling _truly exceptional_ cases. Do you really not expect that `getUser` might not find a user? Don’t throw a `UserNotFoundException`. Return a proper error state instead.

If there is a genuine failure however, then it’s always better to fail fast.

As [Jake Wharton](https://medium.com/@jakewharton) says:

> _“The only thing worse than a crashing program is one that doesn’t crash and continues in an indeterminate state.”_

### Document all the things



![](https://cdn-images-1.medium.com/max/1600/1*g72iSukKuZONgs1Ou_GpOw.jpeg)



Documentation is boring. And like many boring things, it’s essential. Good documentation will save your sanity. You’ll avoid constant questions from consumers of your API, and that alone is worth it’s weight in gold.

Good documentation should consist of:

1.  A high level overview of the whole module and how it works
2.  Javadocs, Heredocs, Rdocs or whatever of its public methods and protocols
3.  Sample code showing how to use it

Not all abstractions require the same level of documentation. A small class doesn’t need sample code for instance.

Documentation must also be evolutionary. If you get a lot of questions asking the same thing, you can add it to the docs for future consumers.

Too much documentation is also a waste of time, since it’s another asset that you have to keep up to date. It has no value if no one uses it.

Focused and adequate documentation, however, is always helpful.

### Write tests



![](https://cdn-images-1.medium.com/max/1600/1*aknI_ZBdSIdfbeBoxsUb-Q.jpeg)



Tests are proof of correctness, documentation and sample code all rolled into one. They provide immense value when refactoring and allow you to move fast with confidence when changing things.

Consumers who wanna dig deeper into your implementation can always read tests to understand more about the intent and internal behavior of your code. Documentation cannot capture everything, and this is where tests help.

“Why write documentation at all then if I have tests?” you might ask. At the risk of using a tenuous analogy, If documentation is the _user manual_ to your API_,_ Then tests are the x_86_ _opcode instruction reference._

### Make it testable



![](https://cdn-images-1.medium.com/max/1600/1*36ZJIP52-odSsPpS-LZrhQ.png)



Testing your own code is one thing. Writing APIs that enable those who use them to test their code easily is another. Developers who care about tests will be put off by APIs that make it hard to mock/stub them in test cases.

You can use configuration options for debug and productions versions where applicable. Things often need to behave a little differently in Continuous Integration/Continuous Deployment environments than they do in production. Account for this.

### Allow user choice



![](https://cdn-images-1.medium.com/max/1600/1*EALLHmTPcQjWwhR1m6K05g.jpeg)



Not every consumer will want to consume your APIs in the same way. Some may want it synchronous. Others may prefer async callbacks, futures, promises, or Rx observables.

Allow consumers the ability to choose what they want as far as possible. The more your API can easily integrate into their existing programming and system environment, the more likely people will use it.

### Don’t allow too much user choice



![](https://cdn-images-1.medium.com/max/1600/1*ovH8q7__2YFqrMQW2PTf0g.jpeg)



Don’t give consumers so much choice that they end up with analysis paralysis. Always strive to provide sensible defaults. Most of the time, your API will be used a certain way. Make the defaults behave that way.

APIs should encourage canonical behavior. Don’t let consumers modify some random state in your module if that isn’t part of the API contract. If you expose some weird unintentional behavior, you can rest assured it will be used one day, spawning unforeseen consequences.

Be opinionated. Don’t lose focus by giving too many options. Balancing the right amount of opinion against the right amount of flexibility takes practice and experience. When in doubt, err on the side of less choice.

### Conclusion

Designing APIs is an art. Hopefully, the tips outlined here should help you write better code. I’ve probably missed out many other things but these have served me well. Live and learn.











* * *







_If you liked this, click the 👏 below. I notice each one and I’m grateful for every one of them._

_For more musings about programming, follow me so you’ll get notified when I write new posts._








