---
author: Justice Mba
authorTwitter: https://twitter.com/Daajust
authorFacebook: none
title: "Functional setState is the future of React"
subTitle: "Update: I gave a follow up talk on this topic at React Rally. While this post is more about the “functional setState” pattern, the talk i..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*K8A3aXts5rTCHYRcdHIR6g.jpeg
url: https://medium.freecodecamp.org/functional-setstate-is-the-future-of-react-374f30401b6b
id: functional-setstate-is-the-future-of-react-374f30401b6b
date: 2017-03-03T07:00:16.267Z
tags: [
  "React",
  "JavaScript",
  "Functional Programming",
  "Software Development",
  "Web Development"
]
---
# Functional setState is the future of React







![](https://cdn-images-1.medium.com/max/2000/1*K8A3aXts5rTCHYRcdHIR6g.jpeg)







Update: I gave a follow up talk on this topic at React Rally. While this post is more about the “functional setState” pattern, the talk is more about understanding setState **deeply**





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/28250583913bc649202d1967fce84740?postId=374f30401b6b" data-media-id="28250583913bc649202d1967fce84740" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2Ff4iiyy28VL4%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



My setState talk at React Rally



React has popularized functional programming in JavaScript. This has led to giant frameworks adopting the Component-based UI pattern that React uses. And now functional fever is spilling over into the web development ecosystem at large.





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/fae8a74efae8754b2209b0e45a975dc6?postId=374f30401b6b" data-media-id="fae8a74efae8754b2209b0e45a975dc6" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F568183848706379776%2F-WvGr4jS_bigger.jpeg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



How React is changing the game



But the React team is far from relenting. They continue to dig deeper, discovering even more functional gems hidden in the legendary library.

So today I reveal to you a new functional gold buried in React, best kept React secret — **Functional setState!**

Okay, I just made up that name… and it’s not _entirely_ new or a secret. No, not exactly. See, it’s a pattern built into React, that’s only known by few developers who’ve really dug in deep. And it never had a name. But now it does — **Functional setState!**

Going by [Dan Abramov](https://medium.com/@dan_abramov)’s words in describing this pattern, **Functional setState** is a pattern where you

> “Declare state changes separately from the component classes.”

Huh?

### Okay… what you already know

React is a component based UI library. A component is basically a function that accept some properties and return a UI element.

<pre name="2c2c" id="2c2c" class="graf graf--pre graf-after--p">function User(props) {  
  return (  
      
  );  
}</pre>

A component might need to have and manage its state. In that case, you usually write the component as a class. Then you have its state live in the class `constructor` function:

<pre name="f134" id="f134" class="graf graf--pre graf-after--p">class User {  
  constructor () {  
    **this.state = {  
      score : 0  
    };**  
  }</pre>

<pre name="3120" id="3120" class="graf graf--pre graf-after--pre">  render () {  
    return (  
        
    );  
  }  
}</pre>

To manage the state, React provides a special method called `setState()`. You use it like this:

<pre name="475b" id="475b" class="graf graf--pre graf-after--p">class User {  
  ... </pre>

<pre name="eb82" id="eb82" class="graf graf--pre graf-after--pre">  increaseScore () {  
    **this.setState({score : this.state.score + 1});**  
  }</pre>

<pre name="3649" id="3649" class="graf graf--pre graf-after--pre">  ...  
}</pre>

Note how `setState()` works. You pass it **_an object_** containing part(s) of the state you want to update. In other words, the object you pass would have keys corresponding to the keys in the component state, then `setState()` updates or _sets_ the state by merging the object to the state. Thus, “set-State”.

### What you probably didn’t know

Remember how we said `setState()` works? Well, what if I told you that instead of passing an object, you could pass **_a function_**?

Yes. `setState()` also accepts a function. The function accepts the _previous_ state and _current_ props of the component which it uses to calculate and return the next state. See it below:

<pre name="da1e" id="da1e" class="graf graf--pre graf-after--p">this.setState(**function (state, props) {  
 return {  
  score: state.score - 1  
 }  
}**);</pre>

Note that `setState()` is a function, and we are passing another function to it(functional programming… **functional setState**) . At first glance, this might seem ugly, too many steps just to set-state. Why will you ever want to do this?

### Why pass a function to `setState?`

The thing is, [state updates may be asynchronous](https://facebook.github.io/react/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous).

Think about [what happens when](https://facebook.github.io/react/docs/reconciliation.html) `[setState](https://facebook.github.io/react/docs/reconciliation.html)()` [is called](https://facebook.github.io/react/docs/reconciliation.html). React will first merge the object you passed to `setState()` into the current state. Then it will start that _reconciliation_ thing. It will create a new React Element tree (an object representation of your UI), diff the new tree against the old tree, figure out what has changed based on the object you passed to `setState()` , then finally update the DOM.

Whew! So much work! In fact, this is even an overly simplified summary. But trust in React!

> React does not simply “set-state”.

Because of the amount of work involved, calling `setState()` might not _immediately_ update your state.

> React may batch multiple `setState()` calls into a single update for performance.

What does React mean by this?

First, “_multiple_ `_setState()_` _calls”_ could mean calling `setState()` inside a single function more than once, like this:

<pre name="03bd" id="03bd" class="graf graf--pre graf-after--p">...</pre>

<pre name="e03b" id="e03b" class="graf graf--pre graf-after--pre">state = {score : 0};</pre>

<pre name="4590" id="4590" class="graf graf--pre graf-after--pre">_// multiple_ `_setState()_` _calls_  
increaseScoreBy3 () {  
 **this.setState({score : this.state.score + 1});  
 this.setState({score : this.state.score + 1});  
 this.setState({score : this.state.score + 1});** }</pre>

<pre name="322e" id="322e" class="graf graf--pre graf-after--pre">...</pre>

Now when React, encounters “_multiple_ `_setState()_` _calls”,_ instead of doing that “set-state” **three whole times**, React will avoid that huge amount of work I described above and smartly say to itself: “No! I’m not going to climb this mountain three times, carrying and updating some slice of state on every single trip. No, I’d rather get a container, pack all these slices together, and do this update just once.” And that, my friends, is**batching**!

Remember that what you pass to `setState()` is a plain object. Now, assume anytime React encounters “_multiple_ `_setState()_` _calls”,_ it does the batching thing by extracting all the objects passed to each `setState()` call, merges them together to form a single object, then uses that single object to do `setState()` .

In JavaScript merging objects might look something like this:

<pre name="4a5e" id="4a5e" class="graf graf--pre graf-after--p">const singleObject = Object.assign(  
  {},   
  objectFromSetState1,   
  objectFromSetState2,   
  objectFromSetState3  
);</pre>

This pattern is known as **object composition.**

In JavaScript, the way “merging” or **composing** objects works is: if the three objects have the same keys, the value of the key of the _last object_ passed to `Object.assign()` wins. For example:

<pre name="3d9a" id="3d9a" class="graf graf--pre graf-after--p">const me  = {name : "Justice"},   
      you = {name : "Your name"},  
      we  = Object.assign({}, me, you);</pre>

<pre name="5666" id="5666" class="graf graf--pre graf-after--pre">we.name === "Your name"; //true</pre>

<pre name="5582" id="5582" class="graf graf--pre graf-after--pre">console.log(we); // {name : "Your name"}</pre>

Because `you` are the last object merged into `we`, the value of `name` in the `you` object — “Your name” — overrides the value of `name` in the `me` object. So “Your name” makes it into the `we` object… `you` win! :)

Thus, if you call `setState()` with an object multiple times — passing an object each time — React will **merge**. Or in other words, it will **compose** a new object out of the multiple objects we passed it. And if any of the objects contains the same key, the value of the key of the _last_ object with same key is stored. Right?

That means that, given our `increaseScoreBy3` function above, the final result of the function will just be 1 instead of 3, because React did not _immediately_ update the state in the order we called `setState()` . But first, React composed all the objects together, which results to this: `{score : this.state.score + 1}` , then only did “set-state” once — with the newly composed object. Something like this: `User.setState({score : this.state.score + 1}`.

To be super clear, passing object to `setState()` is not the problem here. The real problem is passing object to `setState()` when you want to calculate the next state from the previous state. So stop doing this. It’s not safe!

> Because `_this.props_` and `_this.state_` may be updated asynchronously, you should not rely on their values for calculating the next state.

Here is a pen by [Sophia Shoemaker](https://medium.com/@shopsifter) that demos this problem. Play with it, and pay attention to both the bad and the good solutions in this pen:





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/ead563dd6a4455dd58e698f9b9b55e56?postId=374f30401b6b" data-media-id="ead563dd6a4455dd58e698f9b9b55e56" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fi.cdpn.io%2F1007453.JEoEgN.small.67d79bc2-7865-4ca4-b746-3b31bf5467de.png&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



pay attention to the bad and the good solution in this pen…



### Functional setState to the rescue

If you’ve not spent time playing with the pen above, I strongly recommend that you do, as it will help you grasp the core concept of this post.

While you were playing with the pen above, you no doubt saw that **functional setState** fixed our problem. But how, exactly?

Let’s consult the Oprah of React — Dan.





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/14415fdfa30d81fb774b9519692fbe8a?postId=374f30401b6b" data-media-id="14415fdfa30d81fb774b9519692fbe8a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FC3CIuXYWIAActNI.jpg%3Alarge&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Note the answer he gave. When you do functional setState…

> Updates will be queued and later executed in the order they were called.

So, when React encounters “_multiple_ `_functional setState()_` _calls” ,_ instead of merging objects together, (of course there are no objects to merge) React _queues_ the functions “_in the order they were called.”_

After that, React goes on updating the state by calling each functions in the “queue”, passing them the _previous_ state — that is, the state as it was _before_ the first functional `setState()` call (if it’s the first functional setState() currently executing) or the state with the _latest_ update from the _previous_ functional `setState()` call in the queue.

Again, I think seeing some code would be great. This time though, we’re gonna fake everything. Know that this is not the real thing, but is instead just here to give you an _idea_ of what React is doing.

Also, to make it less verbose, we’ll use ES6\. You can always write the ES5 version later if you want.

First, let’s create a component class. Then, inside it, we’ll create a _fake_ `setState()` method. Also, our component would have a `increaseScoreBy3()`method_,_ which will do a multiple functional setState. Finally, we’ll instantiate the class, just as React would do.

<pre name="8f40" id="8f40" class="graf graf--pre graf-after--p">class User{  
  state = {score : 0};</pre>

<pre name="48a6" id="48a6" class="graf graf--pre graf-after--pre">  //let's fake setState  
  setState(state, callback) {  
    this.state = Object.assign({}, this.state, state);  
    if (callback) callback();  
  }</pre>

<pre name="21e3" id="21e3" class="graf graf--pre graf-after--pre">  // multiple functional setState call  
  increaseScoreBy3 () {  
    this.setState( (state) => ({score : state.score + 1}) ),  
    this.setState( (state) => ({score : state.score + 1}) ),  
    this.setState( (state) => ({score : state.score + 1}) )}  
}</pre>

<pre name="f8a9" id="f8a9" class="graf graf--pre graf-after--pre">const Justice = new User();</pre>

Note that setState also accepts an optional second parameter — a callback function. If it’s present React calls it after updating the state.

Now when a user triggers `increaseScoreBy3()`, React queues up the multiple functional setState. We won’t fake that logic here, as our focus is on **what actually makes functional setState safe_._** But you can think of the result of that “queuing” process to be an array of functions, like this:

<pre name="ab13" id="ab13" class="graf graf--pre graf-after--p">const updateQueue = [  
  (state) => ({score : state.score + 1}),  
  (state) => ({score : state.score + 1}),  
  (state) => ({score : state.score + 1})  
];</pre>

Finally, let’s fake the updating process:

<pre name="4298" id="4298" class="graf graf--pre graf-after--p">// recursively update state in the order  
function updateState(component, updateQueue) {  
  if (updateQueue.length === 1) {  
    return component.setState(updateQueue[0](component.state));  
  }</pre>

<pre name="277c" id="277c" class="graf graf--pre graf-after--pre">return component.setState(  
    updateQueue[0](component.state),   
    () =>  
     updateState( component, updateQueue.slice(1))   
  );  
}</pre>

<pre name="91fd" id="91fd" class="graf graf--pre graf-after--pre">updateState(Justice, updateQueue);</pre>

True, this is not as so sexy a code. I trust you could do better. But the key focus here is that every time React executes the functions from your **functional setState,** React updates your state by passing it a _fresh_ copy of the updated state. That makes it possible for **functional setState** to **set state based on the previous state**.

Here I made a bin with the complete code. Tinker around it (possibly make it look sexier), just to get more sense of it.

[**FunctionalSetStateInAction**  
_A Play with the code in this bin will be fun. Remember! we’re just faking React to get the idea..._jsbin.com](http://jsbin.com/najewe/edit?js,console "http://jsbin.com/najewe/edit?js,console")[](http://jsbin.com/najewe/edit?js,console)

Play with it to grasp it fully. When you come back we’re gonna see what makes functional setState truly golden.

### The best-kept React secret

So far, we’ve deeply explored why it’s safe to do multiple functional setStates in React. But we haven’t actually fulfilled the _complete_ definition of functional setState: “Declare state changes separately from the component classes.”

Over the years, the logic of setting-state — that is, the functions or objects we pass to `setState()` — have always lived _inside_ the component classes. This is more imperative than declarative.

Well today, I present you with newly unearthed treasure — the **best-kept React secret:**





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/1c4129e6d55a4cee7d1883e97f2d207e?postId=374f30401b6b" data-media-id="1c4129e6d55a4cee7d1883e97f2d207e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FC3CH9gYXEAUKYyA.jpg%3Alarge&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Thanks to [Dan Abramov](https://medium.com/@dan_abramov)!

That is the power of functional setState. Declare your state update logic _outside_ your component class. Then call it _inside_ your component class.

<pre name="59ac" id="59ac" class="graf graf--pre graf-after--p">**// outside your component class  
function increaseScore (state, props) {  
  return {score : state.score + 1}  
}**</pre>

<pre name="f6f7" id="f6f7" class="graf graf--pre graf-after--pre">class User{  
  ...</pre>

<pre name="46dd" id="46dd" class="graf graf--pre graf-after--pre">// _inside_ your component class  
  handleIncreaseScore () {  
    this.setState( **increaseScore**)}</pre>

<pre name="d6d0" id="d6d0" class="graf graf--pre graf-after--pre">  ...  
}</pre>

This is declarative! Your component class no longer cares _how_ the state updates. It simply _declares_ the _type_ of update it desires.

To deeply appreciate this, think about those complex components that would usually have many state slices, updating each slice on different actions. And sometimes, each update function would require many lines of code. All of this logic would live _inside_ your component. But not anymore!

Also, if you’re like me, I like keeping every module as short as possible, but now you feel like your module is getting too long. Now you have the power to extract all your state change logic to a different module, then import and use it in your component.

<pre name="97f2" id="97f2" class="graf graf--pre graf-after--p">**import {increaseScore} from "../stateChanges";**</pre>

<pre name="1c3c" id="1c3c" class="graf graf--pre graf-after--pre">class User{  
  ...</pre>

<pre name="5082" id="5082" class="graf graf--pre graf-after--pre">  // _inside_ your component class  
  handleIncreaseScore () {  
    this.setState( **increaseScore**)}</pre>

<pre name="e7df" id="e7df" class="graf graf--pre graf-after--pre">  ...  
}</pre>

Now you can even reuse the increaseScore function in a _different_ component. Just import it.

What else can you do with functional setState?

Make testing easy!





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/a88652e93be61b95a4398076abb67134?postId=374f30401b6b" data-media-id="a88652e93be61b95a4398076abb67134" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FC3CJywQXgAQ-LRI.jpg%3Alarge&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





You can also pass **extra** arguments to calculate the next state (this one blew my mind… #funfunFunction).





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/9d1a990f5b196684d044bc0a945aaa27?postId=374f30401b6b" data-media-id="9d1a990f5b196684d044bc0a945aaa27" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FC3CNX49XAAA8wJZ.jpg%3Alarge&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Expect even more in…

### [The Future of React](https://github.com/reactjs/react-future/tree/master/07%20-%20Returning%20State)



![](https://cdn-images-1.medium.com/max/1600/0*uInBa_PPwz5aLo0j.jpg)



For years now, the react team has been experimenting with how to best implement [stateful functions](https://github.com/reactjs/react-future/blob/master/07%20-%20Returning%20State/01%20-%20Stateful%20Functions.js).

Functional setState seems to be just the right answer to that (probably).

Hey, Dan! Any last words?





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/20b56059c49b2f1a2c4fbd0460758700?postId=374f30401b6b" data-media-id="20b56059c49b2f1a2c4fbd0460758700" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F553711083064541184%2F9VsY9i09_bigger.jpeg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





If you’ve made it this far, you’re probably as excited as I am. Start experimenting with this **functional setState**today!

If you feel like I’ve done any nice job, or that others deserve a chance to see this, kindly click on the green heart below to help spread a better understanding of React in our community.

If you have a question that hasn’t been answered or you don’t agree with some of the points here feel free to drop in comments here or via [Twitter](https://twitter.com/Daajust).

Happy Coding!








