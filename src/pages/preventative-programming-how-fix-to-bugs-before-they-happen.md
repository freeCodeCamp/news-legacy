---
author: Kurt
authorTwitter: none
authorFacebook: none
title: "Sherlock Holmes would have been a brilliant programmer"
subTitle: "It is quite normal to spend more time debugging than you spend writing actual code. If you are learning to program and you absolutely hat..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*qoss_sK2XC5p-p90DfZxZw.jpeg
url: https://medium.freecodecamp.org/preventative-programming-how-fix-to-bugs-before-they-happen-9df82cf215c5
id: preventative-programming-how-fix-to-bugs-before-they-happen-9df82cf215c5
date: 2016-02-19T22:22:28.856Z
tags: [
  "Programming",
  "JavaScript",
  "Coding",
  "Tech",
  "Technology"
]
---
# Sherlock Holmes would have been a brilliant programmer



![](https://cdn-images-1.medium.com/max/1600/1*qoss_sK2XC5p-p90DfZxZw.jpeg)



#### Bugs are inevitable.

It is quite normal to spend more time debugging than you spend writing actual code. If you are learning to program and you absolutely hate debugging your own code, **stop now**.

Find a new hobby or trade that you enjoy. Otherwise, you will soon discover the true definition of insanity: debugging another programmer’s legacy code, wondering what on earth they were thinking.

Alternatively, you could simply change your mindset and stop hating bugs.

#### Here are some of the reasons why I enjoy debugging…

1.  **It’s a challenge**. To me, a bug is a puzzle to solve. I love puzzles, so it’s like the app is giving me an hour to play Sudoku.
2.  **It makes me a better programmer**. Debugging code is undeniably one of the best methods of learning.
3.  **Sometimes it makes me laugh**. To be a programmer, you need to have a good sense of humor. You also need to be able to laugh your own stupidity, or the humor of the situation.
4.  **It is the best insight I can get into my users’ thoughts**. Beyond your initial tests, _you should never test your own applications — _nor should another programmer. This is because you will never break your app the way your users will. The best tester I ever had was my boss’s 5-year-old son, who tested all of our iPad apps. If he couldn’t use the app, our users wouldn’t be able to either. The question when debugging doesn’t end at _“How did the user do it?”_ but also expands to _“Why did the user do it?”_

I found this pie chart on the [ProgrammerHumor subreddit](https://www.reddit.com/r/ProgrammerHumor/) that perfectly sums up my average day:



![](https://cdn-images-1.medium.com/max/1600/1*FwxngU46SX61NLTTjcb2CQ.jpeg)



Note that the majority of time is spent implementing safeguards. This is the definition of preventative programming.

If your graph is the same, great. Maybe we can exchange tips. But if you’re probably like most of us, and spend the majority of you time wondering what the hell your user did to make a fixed variable [_undefined_](https://developer.mozilla.org/en-US/docs/Glossary/Undefined) or turn a _string_ into an _integer._

Then this post may be particularly helpful to you.











* * *







#### Why Sherlock Holmes would have been an excellent programmer

The first Sherlock Holmes book was written way back in 1887, long before computers were invented. All of these books are packed full of lessons that you can apply to programming.

If this comes as a surprise to you, remember that data has existed as long as the written word has, and that the reason computers where invented was to handle data.

Sherlock Holmes is most famous for using his _“method of deduction”_:

> When you have eliminated the impossible, whatever remains, however improbable, must be the truth. — Sherlock Holmes in _The Sign of Four_

If I had to apply this thinking to a function it would be something like…

> When you have prevented everything a function shouldn’t do, it can only do what it should.

Let’s dive into some simple habits that can help you save countless hours of debugging by applying this theory.











* * *







### How fix to bugs before they happen

Take a look at the below function that searches an array and returns the value if found either _as is_ or _as_ _the result of a callback function:_

<pre name="c60c" id="c60c" class="graf graf--pre graf-after--p">function arraySearch(value, array, callback) {  
  callback = callback || false;  
  for (var i = 0; i < array.length; i++) {  
    if (array[i] == value) {  
      if (callback) {  
        return callback(value);  
      } else {  
        return value;  
      }  
    }  
  }  
}  
var result = arraySearch(4,[1,2,3,4],function(val){return val+val;});</pre>

At first glance it seems perfectly fine.

But let’s take a step back and use a _preventative approach_ and focus instead on _what the function shouldn’t do_.

#### **There are four points that we want to address in this exercise**

1.  **It shouldn’t break easily**. If at all possible we want to prevent it from stopping on _error_. Instead it should _return_.

2\. **It should never return** [**undefined**](https://developer.mozilla.org/en-US/docs/Glossary/Undefined)**.** We want it to return _false_ instead.

3\. **It must never make implicit or “loose” match**.

4\. **When we must** [**throw**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw) **an error it should not be a generic error**. We want something readable for both ourselves and the poor programmer who needs to work on this code after us.

#### Getting Started

Point 1 seems like it’s asking a lot but in essence we just want it to fail gracefully and _return a predictable value_ like **_false_** instead of stopping the bus.

First off, it absolutely must have an _inputted value_ and _array_ to run. So lets modify the function with this in mind.

<pre name="eb3a" id="eb3a" class="graf graf--pre graf-after--p">function arraySearch(value, array, callback) {  
  if (value === undefined || array === undefined) {  
    return false;  
  }  
  callback = callback || false;  
  for (var i = 0; i < array.length; i++) {  
    if (array[i] == value) {  
      if (callback) {  
        return callback(value);  
      }  
      else {  
        return value;  
      }  
    }  
  }  
}</pre>

Great, that’s sorted. By checking if the arguments are [_undefined_](https://developer.mozilla.org/en-US/docs/Glossary/Undefined)we are ensuring that values have been passed to them.

Our callback already has a _default_ value, so that is taken care of. But what if our _array is not an array?_ Or in the same breath what if our _callback is not a function?_

Let’s take care of this next…

<pre name="1cdb" id="1cdb" class="graf graf--pre graf-after--p">function arraySearch(value, array, callback) {  
  if (value === undefined || array === undefined || (array instanceof Array) === false) {  
    return false;  
  }  
  callback = callback || false;  
  if (callback !== false && typeof callback !== 'function') {  
    throw 'Callback to arraySearch is not a function';  
    return false;  
  }  
  for (var i = 0; i < array.length; i++) {  
    if (array[i] == value) {  
      if (callback) {  
        return callback(value);  
      }  
      else {  
        return value;  
      }  
    }  
  }  
}</pre>

Awesome. Now by checking the [**_typeof_**](https://developer.mozilla.org/en-US/docs/Glossary/Null) the _callback_ we are sure that the callback is a valid _function_ and by checking that the array is an [**_instanceof_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)the _Array object_ we are also sure that the array is an _Array_.

So let’s move onto point 2 — _“It should never return undefined”_.

Well for starters our _function_ does not have a _default return value_ for when there is no match. Equally important, is the fact that we have no way of knowing what the callback function will return.

We can fix this by making the function _return a variable_ so that we only need to check if it is [_undefined_](https://developer.mozilla.org/en-US/docs/Glossary/Undefined) or [_null_](https://developer.mozilla.org/en-US/docs/Glossary/Null) once.

<pre name="428d" id="428d" class="graf graf--pre graf-after--p">function arraySearch(value, array, callback) {  
  if (value === undefined || array === undefined || (array instanceof Array) === false) {  
    return false;  
  }  
  callback = callback || false;  
  var result = null;  
  if (callback !== false && typeof callback !== 'function') {  
    throw 'Callback to arraySearch is not a function';  
    return false;  
  }  
  for (var i = 0; i < array.length; i++) {  
    if (array[i] == value) {  
      if (callback) {  
        result = callback(value);  
      }  
      else {  
        result = value;  
      }  
    }  
  }  
  return result || false;  
}</pre>

Sorted. Setting the value of _result_ to either the _match_ or to the result of the _callback function_ allows us to return either the _result_ or false, should the _result_ be [_undefined_](https://developer.mozilla.org/en-US/docs/Glossary/Undefined) or [_null_](https://developer.mozilla.org/en-US/docs/Glossary/Null).

Point 3\. An _implicit_ or _loose_ match can be described as being _relatively equal_ i.e. false == 0 or ‘4’ == 4 etc.

We want to avoid this. What if we are searching for _false_ in an Array containing Zero?

We can fix this by changing the below line:

<pre name="c54d" id="c54d" class="graf graf--pre graf-after--p">  if (array[i] == value) {  
//must change to  
  if (array[i] === value) {</pre>

[“**===**”](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) means**_exactly equal to_**. Always do an explicit match when checking values. This habit will save you countless hours of time in the long run because _you won’t be trying to debug statement that is evaluating as true_.

Now for the last point.

When throwing an error we want it to be friendly. This functionality is already demonstrated when passing an _invalid callback function_, but _what if a valid callback function throws an error_?

[Anonymous functions](https://developer.mozilla.org/en-US/docs/Glossary/Function) can be a pain to debug, so let’s try and make debugging a little less painful:

<pre name="cbed" id="cbed" class="graf graf--pre graf-after--p">function arraySearch(value, array, callback) {  
  if (value === undefined || array === undefined || (array instanceof Array) === false) {  
    return false;  
  }  
  callback = callback || false;  
  var result = null;  
  if (callback !== false && typeof callback !== 'function') {  
    throw 'Callback to arraySearch is not a function';  
    return false;  
  }  
  for (var i = 0; i < array.length; i++) {  
    if (array[i] === value) {  
      if (callback) {  
        try{  
          result = callback(value);  
        }catch(e){  
          throw 'Callback function in arraySearch threw the error : '+e.message;  
        }  
      }  
      else {  
        result = value;  
      }  
    }  
  }  
  return result || false;  
}</pre>

There we have it.

To solve the issue we use a simple [**_try / catch_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) statement and then[_re-throw_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw) _the error_ with a _custom message._ Now if a callback function fails we will immediately know that it was the _callback function_ that failed and not our _arraySearch_ function.











* * *







#### Summary

All in all, we now have a function that should give us minimal hassles in the future. And if it does have an issue, it should be fast and easy to correct.

The basics of my tips on preventative programming can be summed up in 6 points…

1.  **Check that your input values exist** and set default values where necessary.
2.  Always **make sure your input is of the same type as you are looking for**. Never assume that an _Array_ will be an _Array_ or that an _Integer_ will be an _Integer_.
3.  **Always do an explicit match** when comparing values (**===**).
4.  **Write functions that return predictable values** i.e. return _false_ when failed or _false_ or return the expected result when _true_.
5.  **Try to write pure functions**. A pure function is a function that always returns an expected value, and does not modify the original variables passed to it in any way.
6.  [**Throw**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw) **custom errors where needed especially when executing callbacks and anonymous functions**. You won’t remember exactly what your code does in 8 month’s time, so do yourself a favor and throw a clear error message while you still know what your code does.











* * *







### I’ll leave you with some great quotes from Sherlock Holmes

#### Moral : Do not make assumptions before collecting data

> It is a capital mistake to theorize before you have all the evidence. It biases the judgment. — A Study in Scarlet

> It is a capital mistake to theorize before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts. -A Scandal in Bohemia

> Still, it is an error to argue in front of your data. You can find yourself insensibly twisting them round to suit your theories. -The Adventure of Wisteria Lodge

> Let me run over the principal steps. We approached the case, you remember, with an absolutely blank mind, which is always an advantage. We had formed no theories. We were simply there to observe and to draw inferences from our observations. -The Adventure of the Cardboard Box

> “Data! Data! Data!” he cried impatiently. “I can’t make bricks without clay. -The Adventure of the Copper Beeches

#### Moral : Don’t let your emotions override logic

> Detection is, or ought to be, an exact science, and should be treated in the same cold and unemotional manner.-The Sign of Four

> The emotional qualities are antagonistic to clear reasoning. -The Sign of Four

#### Moral : Focus on core feature’s and use-cases

> It is of the highest importance in the art of detection to be able to recognize, out of a number of facts, which are incidental and which vital. Otherwise your energy and attention must be dissipated instead of being concentrated. -The Reigate Puzzle

#### And a few more that you can take your own lesson from

> Nothing clears up a case so much as stating it to another person. -Silver Blaze

> I have already explained to you that what is out of the common is usually a guide rather” than a hindrance. -A Study in Scarlet

> ‘The more outre’ and grotesque an incident is the more carefully it deserves to be examined, and the very point which appears to complicate a case is, when duly considered and scientifically handled, the one which is most likely to elucidate it. -The Hound of the Baskervilles

> Any truth is better than indefinite doubt. -The Yellow Face

> I never guess. It is a shocking habit — destructive to the logical faculty -The Sign of Four











* * *







That’s all I have for this post. If you enjoyed reading it and would like to read another technical post take a look at:

[**How to write a jQuery like library in 71 lines of code — Learn about the DOM**  
_JavaScript frameworks are all the rage. Chances are that any JavaScript related news feed you open will be littered…_medium.com](https://medium.com/p/e9fb99dbc8d2 "https://medium.com/p/e9fb99dbc8d2")[](https://medium.com/p/e9fb99dbc8d2)

Alternatively if the code hurt your brain and made you tired here’s some non-technical posts that I’ve written…

[**5 Things to Remember When You’re Learning to Program**  
_Learning to program is challenging. Aside from choosing a language or setting up a development environment that you…_medium.com](https://medium.com/p/1ed8e734b04f "https://medium.com/p/1ed8e734b04f")[](https://medium.com/p/1ed8e734b04f)

[**Turning code to cash — How to make money as a Web Developer and live to tell the tale.**  
_So you just learnt to code. You’re eager and anyone who can’t code thinks you’re a genius, word gets out and all of a…_medium.com](https://medium.com/p/f5eedc557b3e "https://medium.com/p/f5eedc557b3e")[](https://medium.com/p/f5eedc557b3e)

[**How I Became a Programmer. And When I Started Calling Myself One**  
_I’ve wanted to start blogging about programming for months now and like so many others before me I set off full of…_medium.com](https://medium.com/p/54a0533c4335 "https://medium.com/p/54a0533c4335")[](https://medium.com/p/54a0533c4335)

[**Making it rain code — Matrix Style**  
_An introduction to HTML 5 canvas animations_medium.com](https://medium.com/p/ec6e1386084e "https://medium.com/p/ec6e1386084e")[](https://medium.com/p/ec6e1386084e)








