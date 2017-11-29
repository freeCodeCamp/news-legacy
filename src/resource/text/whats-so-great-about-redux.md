---
author: Justin Falcone
authorTwitter: https://twitter.com/modernserf
authorFacebook: none
title: "What’s So Great About Redux?"
subTitle: "Redux elegantly handles complex state interactions that are hard to express with React’s component state. It is essentially a message-pas..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*BpaqVMW2RjQAg9cFHcX1pw.png
url: https://medium.freecodecamp.org/whats-so-great-about-redux-ac16f1cc0f8b
id: whats-so-great-about-redux-ac16f1cc0f8b
date: 2017-07-13T17:58:43.720Z
tags: [
  "React",
  "Redux",
  "Functional Programming",
  "JavaScript",
  "Web Development"
]
---
# What’s So Great About Redux?



![](https://cdn-images-1.medium.com/max/1600/1*BpaqVMW2RjQAg9cFHcX1pw.png)



Redux elegantly handles complex state interactions that are hard to express with React’s component state. It is essentially a message-passing system, like the kind seen in Object-Oriented programming, but implemented as a library instead of in the language itself[¹](#535d). As in OOP, Redux inverts the responsibility of control from caller to receiver — the UI doesn’t directly manipulate the state but rather sends it a message for the state to interpret.

Through this lens, a Redux store is an object, reducers are method handlers, and actions are messages. `store.dispatch({ type: "foo", payload: "bar" })` is equivalent to Ruby's `store.send(:foo, "bar")`. Middleware are used in much the same way Aspect-Oriented Programming (e.g. Rails' `before_action`) and React-Redux's `connect` is dependency injection.

#### Why is this desirable?

*   The inversion of control described above ensures that the UI doesn’t need to be updated if the implementation of state transitions changes. Adding complex features like logging, undo or even time travel debugging are almost trivial. Integration tests are just a matter of testing that the right action is dispatched; the rest can be unit-tested.
*   React’s component state is pretty clunky for state that touches multiple parts of your app, such as user info and notifications. Redux gives you a state tree thats independent of your UI to handle these cross cutting concerns. Furthermore, having your state live outside of the UI makes things like persistence easier — you only need to deal with serializing to localStorage or URLs in a single place.
*   Redux’s titular “reducers” provide incredible flexibility for handling actions — composition, multiple dispatch, even `method_missing`-style parsing.

#### These are all unusual cases. What about the common cases?

Well, there’s the problem.

*   An action _could_ be interpreted as a complex state transition, but most of them set a single value. Redux apps tend to end up with a bunch of actions that set a single value; there’s a distinct reminder of manually writing setter functions in Java.
*   A fragment of state _could_ be used all over your app, but most state maps 1:1 with a single part of the UI. Putting that state in Redux instead of component state just adds _indirection_ without _abstraction_.
*   A reducer function _could_ do all sorts of metaprogramming weirdness, but in most cases it’s just single-dispatch on the action’s type field. This is fine in languages like Elm and Erlang, where pattern matching is terse and highly expressive, but rather clunky in JavaScript with `switch` statements.

But the really insidious thing is that when you spend all your time doing the boilerplate for common cases, you forget that better solutions for the special cases _even exist_. You encounter a complex state transition and solve it with a function that dispatches a dozen different value-setting actions. You duplicate state in the reducer rather than distributing a single state slice across the app. You copy and paste switch cases across multiple reducers instead of abstracting it into shared functions.

It’s easy to dismiss this as mere “Operator Error” — they didn’t RTFM, A Poor Craftsman Blames His Tools — but the frequency of these problems should raise some concerns. What does it say about a tool if most people are using it wrong?

#### So should I just avoid Redux for the common cases and save it for the special ones?

That’s the advice the Redux team will give you — and that’s the advice I give to my own team members: I tell them to avoid it until using setState becomes truly untenable. But I can’t bring myself to follow my own rules, ’cause there’s always _some_ reason you want to use Redux. You might have a bunch of `set_$foo` actions, but setting any value _also_ updates the URL, or resets some more transient value. Maybe you have a clear 1:1 mapping of state to UI, but you _also_ want to have logging or undo.

The truth is that I don’t know how to write, much less _teach_, “good Redux.” Every app I’ve worked on is full of these Redux antipatterns, either because I couldn’t think of a better solution myself or because I couldn’t convince my teammates to change it. If the code of a Redux “expert” is mediocre, what hope does a novice have? If anything, I’m just trying to counterbalance the prevailing “Redux all the things!” approach in the hope that they will be able to understand Redux on their own terms.

#### So what do I do in that case?

Fortunately, Redux is flexible enough that third-party libraries can integrate with it to handle the common cases — [Jumpstate](https://github.com/jumpsuit/jumpstate) for example. And to be clear, I don’t think it’s wrong for Redux to focus on the low-level stuff. But outsourcing these basic features to third parties creates an additional cognitive load and opportunity for bikeshedding — each user needs to essentially build their own framework from these parts.

#### Some people are into that sort of thing.

And I’m one of ‘em! But not everybody is. I personally love Redux and use it for just about everything that I do, but I _also_ love trying out new Webpack configurations. I am not representative of the general population. I’m _empowered_ by the flexibility to write my own abstractions on top of Redux, but how empowered am I by the abstractions written by some senior engineer who never documented them and quit six months ago?

It’s quite possible to _never_ encounter the hard problems that Redux is particularly good at handling, particularly if you’re a junior on a team where those tickets go to the more senior engineers. Your experience of Redux is “that weird library everyone uses where you have to write everything three times.” Redux is simple enough that you _can_ use it mechanically, without deep understanding, but that’s a joyless and unrewarding experience.

This brings me back to a question I raised earlier: what does it say about a tool if most people are using it wrong? A quality hand tool isn’t just useful and durable — it feels good to use. The most comfortable place to hold it is the correct place to hold it. It is designed not just for its task but also its user. A quality tool reflects the toolsmith’s empathy for the crafter.





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/c3a424f8ffd1a9e26394373bdee8354a?postId=ac16f1cc0f8b" data-media-id="c3a424f8ffd1a9e26394373bdee8354a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F838749413711323137%2FWQ15CHS0_400x400.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Where is our empathy? Why is “you’re doing it wrong” our reaction, and not “we could make this easier to use”?

There’s a related phenomenon in functional programming circles I like to call the _Curse of the Monad Tutorial_: explaining how they work is trivial, but explaining why they are valuable is surprisingly difficult.

#### Are you seriously dropping a monad tutorial in the middle of this post?

Monads are a common pattern in Haskell that’s used for working with a wide range of computation — lists, error handling, state, time, IO. There’s syntactic sugar, in the form of `do` notation, that allows you to represent sequences of monadic operations in a way that looks kind of like imperative code, much like how generators in javascript can make asynchronous code look synchronous.

The first problem is that describing monads in terms of what they’re used for is inaccurate. [Monads were introduced to Haskell to handle side effects and sequential computation](http://homepages.inf.ed.ac.uk/wadler/papers/marktoberdorf/baastad.pdf), but monads as an abstract concept have nothing to do with side effects or sequences; they’re a set of rules for how a pair of functions should interact and have no inherent meaning. The concept of associativity _applies to_ arithmetic and set operations and list concatenation and null propagation but it exists fully independent of them.

The second problem is that any bite-sized example of a monadic approach to X is more verbose — and therefore at least _visually_ more complex — than the imperative approach. Explicit option types a la `Maybe` are safer than checking for implicit `null` but result in more, uglier code. Error handling with `Either` types is often simpler to follow than code that can `throw` from anywhere, but throwing is certainly more concise than manually propagating values. And side effects — state, IO, etc. — are trivial in an imperative language. Functional programming enthusiasts (myself included) would argue that side effects are _too easy_ in these languages but convincing someone that any kind of programming is too easy is a hard sell.

The real value is only visible at the macro scale — not just that any one of these use cases follows the monad laws, but that all of them follow the _same_ laws. A set of operations that works in one case can work in _every_ case: zipping a pair of lists into a list of pairs is “the same thing” as merging a pair of promises into a single promise that completes with a pair of results.

#### Is this going somewhere?

The point is that Redux has the same problem — it’s difficult to teach not because it’s difficult but rather because it’s so _simple_. Understanding is not a matter of having knowledge so much as trusting the core idea in such a way that we can derive everything else through induction.

It’s hard to share this understanding because the core ideas are banal truisms (avoid side effects) or abstract to the point of meaninglessness (`(prevState, action) => nextState`). Any single concrete example doesn't help; they showcase Redux's verbosity without demonstrating its expressivity.

Once we are ✨enlightened✨ a lot of us immediately forget what it felt like beforehand. We forget that our enlightenment came only through our own repeated failures and misunderstandings.

#### So what do you propose?

I would like us to admit we have a problem. Redux is [simple, but it is not easy](https://www.infoq.com/presentations/Simple-Made-Easy). This is a valid design choice, but it is nevertheless a tradeoff. Many people would benefit from a tool that traded some of the simplicity for ease-of-use. But large chunks of the community won’t even acknowledge that a tradeoff has been made!

I think it’s interesting to contrast React and Redux because while React is a vastly more complicated piece of software and has a significantly larger API surface, it somehow feels easier to use and understand. The only absolutely necessary API features of react are `React.createElement` and `ReactDOM.render` — state, component lifecycle, even DOM events could have been handled elsewhere. Building these features into React made it more complicated, but they also made it _better_.

“Atomic state” is an abstract concept that can inform your work once you understand it, but `setState` is a method you can call on a React component that does atomic state management on your behalf, whether you understand it or not. It’s not a perfect solution — it’s less efficient than replacing state outright or mutating and forcing an update, and it has some footguns when it’s called asynchronously — but React is vastly better with `setState` as a callable method rather than a vocabulary term.

Both the Redux team and the community are [strongly opposed to expanding Redux’s API surface area](https://github.com/reactjs/redux/issues/2295), but the current approach of gluing a bunch of tiny libraries together is tedious even for experts and incomprehensible for beginners. If Redux cannot expand to have built-in support for the common cases, it needs a “blessed” framework to take that place. [Jumpsuit](https://github.com/jumpsuit/jumpsuit) could be a good start — it reifies the concepts of “actions” and “state” into callable functions while still preserving their many-to-many nature — but the actual library doesn’t matter as much as the act of blessing itself.

The irony in all this is that Redux’s _raison d’etre_ is “Developer Experience”: Dan built Redux because he wanted to understand and recreate Elm’s time-traveling debugger. But as it developed its own identity — as it grew into the React ecosystem’s de facto OOP runtime — it gave up some of that focus on DX in exchange for configurability. This allowed the Redux ecosystem to bloom, but there’s a conspicuous absence where a humane, curated framework should be. Are we, the Redux community, ready to create it?











* * *







_Thanks to_ [_Matthew McVickar_](https://medium.com/@matthewmcvickar)_,_ [_a pile of moss_](https://medium.com/@whale_eat_squid)_,_ [_Eric Wood_](https://medium.com/@eric_b_wood)_,_ [_Matt DuLeone_](https://twitter.com/Crimyon)_, and_ [_Patrick Thomson_](https://twitter.com/importantshock) _for review._

_Footnotes:_

**[1] Why do you make a distinction between react / JS and object oriented programming? JavaScript IS object oriented, just not class-based.**

Object-Oriented programming, like functional programming, is a methodology, not a language feature. Some languages _support_ this style better than others, or have a standard library that’s designed for the style, but if you’re sufficiently dedicated to the task, you can write in an object-oriented style in any language.

JavaScript has a data structure it calls an Object, and _most_ values in the language can be treated like objects, in the sense that there are methods you can call on every value except for `null` and `undefined`. But before Proxies came in ES6, every "method" call on an object was a dictionary lookup; `foo.bar` is always going to find a property named "bar" on foo or its prototype chain. Contrast this with a language like Ruby, where `foo.bar` sends the message `:bar` to foo -- this message can be _intercepted_ and _interpreted_, it doesn't have to be a dictionary lookup.

Redux is essentially a slower but more sophisticated object system on top of JavaScript’s existing one, where reducers and middleware act as interpreters and interceptors around the JavaScript object that actually holds the state. [[back](#6a79)]








