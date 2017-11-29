---
author: rajaraodv
authorTwitter: https://twitter.com/rajaraodv
authorFacebook: none
title: "Functional Programming In JavaScript — With Practical Examples (Part 2)"
subTitle: "In Part 1, we talked through: Functional Programming basics, Currying, Pure Functions, “Fantasy-land” specs, “Functors”, “Monads”, “Maybe..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*U1TQD4tsM3JLZ-MfBH-vJA.jpeg
url: https://medium.freecodecamp.org/functional-programming-in-js-with-practical-examples-part-2-429d2e8ccc9e
id: functional-programming-in-js-with-practical-examples-part-2-429d2e8ccc9e
date: 2016-11-16T18:13:04.093Z
tags: [
  "JavaScript",
  "React",
  "Functional Programming",
  "Programming",
  "Tech"
]
---
# Functional Programming In JavaScript — With Practical Examples (Part 2)







![](https://cdn-images-1.medium.com/max/2000/1*U1TQD4tsM3JLZ-MfBH-vJA.jpeg)







[**In Part 1**](https://medium.com/@rajaraodv/functional-programming-in-js-with-practical-examples-part-1-87c2b0dbc276#.8dao66cag), we talked through: Functional Programming basics, Currying, Pure Functions, “Fantasy-land” specs,“Functors”, “Monads”, “Maybe Monads” and “Either Monads” via couple of examples.

**In this part, we’ll cover: Applicative, curryN function and “Validation Applicative”.**

> Thanks to FP gurus [Brian Lonsdorf](https://medium.com/@drboolean), [keithalexander](https://medium.com/@keithalexander) and others for reviewing _🙏🏼_

### Example 3— Assigning Values To Potentially Null Objects

**_FP Concepts Used: “Applicative”_**

**Use Case:** Let’s say we want to give discount to the user if the user is logged in and if we are running promotion (i.e. discount exists).



![](https://cdn-images-1.medium.com/max/1600/1*qqkZuYVXrxIsyuJ5xTa_Yw.png)



Let’s say we are using the **applyDiscount** method below. As you can imagine, applyDiscount might throw null errors if either the user (the left-hand side or the discount (the right-hand side) is null.

<pre name="53cd" id="53cd" class="graf graf--pre graf-after--p">//Adds discount to the user object if BOTH user and discount exists.  
//Throws null errors if either user or discount is null</pre>

<pre name="6d2e" id="6d2e" class="graf graf--pre graf-after--pre">const applyDiscount = (user, discount) => {</pre>

<pre name="c690" id="c690" class="graf graf--pre graf-after--pre">    let userClone = clone(user);// use some lib to make a copy    
   ** userClone.discount = discount.code;**</pre>

<pre name="fe56" id="fe56" class="graf graf--pre graf-after--pre">   return userClone;  
}</pre>

Let’s see how we can solve this using “applicative”.

**Applicative:**

Any Class that have a method “ap” and implements the Applicative spec is called an Applicative. Applicatives can be used in functions that are dealing with null values on both left-hand-side(user) and right-hand-side(discount) of the equation.

It turns out “Maybe” Monads (and every Monads) also implement “ap” spec and hence are also “Applicatives” and not just Monads. So we can use “Maybe” Monads to deal with null at function level.

Let’s see how we can solve make applyDiscount work using Maybe used as an “applicative”.

#### **Step 1:** wrap our potential null values in Maybe Monads

<pre name="6651" id="6651" class="graf graf--pre graf-after--h4">const maybeUser = Maybe(user);  
const maybeDiscount = Maybe(discount);</pre>

#### **Step 2:** Rewrite the function and curry it so we can pass one param at a time.

<pre name="9a65" id="9a65" class="graf graf--pre graf-after--h4">//Rewrite the function and curry it so we can   
//pass one param at a time  
var applyDiscount = curry(function(user, discount) {       
       user.discount = discount.code;       
       return user;   
});</pre>

#### **Step 3:** let’s pass the first argument(maybeUser) to applyDiscount via “map”.

<pre name="22fb" id="22fb" class="graf graf--pre graf-after--h4">//pass the first argument to applyDiscount via "map"  
**const maybeApplyDiscountFunc = maybeUser.map(applyDiscount);**</pre>

<pre name="57ee" id="57ee" class="graf graf--pre graf-after--pre">//Note, since applyDiscount is "curried", and "map" will only pass 1 parameter, the return result (**maybeApplyDiscountFunc**) will be a Maybe wrapped "applyDiscount" function that now has maybeUser(1st param) in it's closure.</pre>

<pre name="de87" id="de87" class="graf graf--pre graf-after--pre">**In other words, we now have a function wrapped in a Monad!**</pre>

#### **Step 4: Deal With** maybeApplyDiscountFunc

At this stage maybeApplyDiscountFunc can be:  
1\. If user actually exists, then maybeApplyDiscountFunc is a function wrapped inside a Maybe.  
2\. If the user does not exist, then maybeApplyDiscountFunc will be “Nothing” (subclass of Maybe)

If user doesn’t exist, then “Nothing” is returned and any further interaction with this are ignore completely. So if we pass 2nd argument, nothing happens. And also no Null errors are thrown.

But in the case where the user actually exists, we can try to pass the 2nd argument to maybeApplyDiscountFunc via “map” to execute the function like below:

<pre name="241a" id="241a" class="graf graf--pre graf-after--p">maybeDiscount.map(maybeApplyDiscountFunc)! // PROBLEM!</pre>

**Uh oh! “map” doesn’t know how to run function(**maybeApplyDiscountFunc) **when the function itself is inside a MayBe!**

That’s why we need a different interface to deal with this scenario. It turns out that’s “ap”!

**Step5:** Let’s recap “ap” function. “ap” method takes another Maybe monad and passes/applies the function it’s currently storing to that Maybe.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/adee80a237fbaf7e1f72d9455ebc865a?postId=429d2e8ccc9e" data-media-id="adee80a237fbaf7e1f72d9455ebc865a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F626337%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





So we can simply apply (“ap”) maybeApplyDiscountFunc to maybeDiscount instead of using “map” like below and it’ll work like a charm!

<pre name="4daa" id="4daa" class="graf graf--pre graf-after--p">maybeApplyDiscountFunc.**ap**(maybeDiscount)</pre>

<pre name="25bc" id="25bc" class="graf graf--pre graf-after--pre">//Internally it is doing the following because applyDiscount is store in the this.val of maybeApplyDiscountFunc wrapper:  
maybeDiscount.map(applyDiscount)</pre>

<pre name="7405" id="7405" class="graf graf--pre graf-after--pre">//Now, if maybeDiscount actually has the discount, then the function is is run.If maybeDiscount is Null, then nothing happens.</pre>

> FYI: Apparently there is a change in the FL spec, The old version has (eg): `Just(f).ap(Just(x))` (where `f` is a function and `x` is a value) but the new version would have you write `Just(x).ap(Just(f))`But the implementations mostly haven’t changed yet. Thanks [keithalexander](https://medium.com/@keithalexander)

To summarize, if you have a function that deals with multiple parameters that might all be null, you curry it first, then put it inside a Maybe. Further, also put all params in a Maybe and then use “ap” to run the function.

### curryN function

We are familiar with “curry”. It simply converts a function that takes multiple arguments to take them one-by-one.

<pre name="7eb6" id="7eb6" class="graf graf--pre graf-after--p">**//Curry Example:**  
const add = (a, b) =>a+b;</pre>

<pre name="e640" id="e640" class="graf graf--pre graf-after--pre">const curriedAdd = R.curry(add);</pre>

<pre name="a897" id="a897" class="graf graf--pre graf-after--pre">const add10 = curriedAdd(10);//pass the 1st argument. Returns a function that takes 2nd (b) parameter.</pre>

<pre name="236f" id="236f" class="graf graf--pre graf-after--pre">//run function by passing 2nd argument  
add10(2) // -> 12 //internally runs "add" with 10 and 2.</pre>

But instead of adding just two numbers, what if the **add** function can sum up all the numbers passed to it as an argument?

<pre name="e4c7" id="e4c7" class="graf graf--pre graf-after--p">const add = (...args) => R.sum(args); //sum all the numbers in args</pre>

We can still curry it by limiting number of args using **curryN** like below:

<pre name="3f7d" id="3f7d" class="graf graf--pre graf-after--p">**//curryN example**  
const add = (...args) => R.sum(args);</pre>

<pre name="9187" id="9187" class="graf graf--pre graf-after--pre">//CurryN Example:  
const add = (...args) => R.sum(args);</pre>

<pre name="6ede" id="6ede" class="graf graf--pre graf-after--pre">const add3Numbers = R.**curryN**(3, add);  
const add5Numbers = R.**curryN**(5, add);  
const add10Numbers = R.**curryN**(10, add);</pre>

<pre name="99aa" id="99aa" class="graf graf--pre graf-after--pre">add3Numbers(1,2,3) // 6  
add3Numbers(1) // returns a function that takes 2 more params.  
add3Numbers(1, 2) // returns a function that take 1 more param.</pre>

#### Using “curryN” to wait for number of function calls

Let’s say we want to write a function that only logs if we call it 3 times (and ignore the 1st and 2nd call). Something like below:

<pre name="413c" id="413c" class="graf graf--pre graf-after--p">//impure  
let counter = 0;  
const logAfter3Calls = () => {  
 if(++counter == 3)  
   console.log('called me 3 times');  
}</pre>

<pre name="fd60" id="fd60" class="graf graf--pre graf-after--pre">logAfter3Calls() // Nothing happens  
logAfter3Calls() // Nothing happens  
logAfter3Calls() // 'called me 3 times'</pre>

We can simulate that using curryN like below.

<pre name="e0c7" id="e0c7" class="graf graf--pre graf-after--p">//Pure  
const log = () => {  
   console.log('called me 3 times');  
}</pre>

<pre name="b320" id="b320" class="graf graf--pre graf-after--pre">**const logAfter3Calls = R.curryN(3, log);**</pre>

<pre name="689b" id="689b" class="graf graf--pre graf-after--pre">//call  
**logAfter3Calls('')('')('')**//'called me 3 times'</pre>

<pre name="a087" id="a087" class="graf graf--pre graf-after--pre">//Note: We are passing '' to satisfy CurryN that we are passing some parameter.</pre>

> **Note: We’ll be using this technique in the Applicative validation.**

### Example 4— Collecting And Displaying Multiple Errors

Topics covered: **Validation (aka “Validation Functor”, “Validation Applicative”, “Validation Monad”)**.

> **Validations** are commonly referred as **Validation Applicative** because it is commonly used for validation using it’s “ap”(apply) function.

**Validations** are similar to **Either Monads** and used to work with composing multiple error-throwing functions. But unlike with Either Monad, where we typically use its “chain” method to compose, in Validation Monads, we typically use “ap” method to compose. And unlike either’s “chain” method, where we only collect the 1st error, **“ap” method, especially in Validation Monads allows us to collect all the errors in an Array**.

They are typically used in form validation where we may want to show all the errors at the same time.

**Use case:** We have a sign up form that validates username, password and email using 3 functions(isUsernameValid, isPwdLengthCorrect and ieEmailValid. We need to show all 1, 2 or 3 errors if they all occur at the same time.



![](https://cdn-images-1.medium.com/max/1600/1*qru9EDCwqmj-o2FgtVqAQg.png)

In order to show multiple errors, use “Validation” Functor



OK, let’s see how to implement it using “Validation Applicative”.

> We’ll use data.validation lib from [folktalejs](https://github.com/folktale/data.validation) because ramda-fantasy doesn’t implement it yet.

Similar to “Either” Monad, it has two constructors: **Success** and **Failure**. These are like subclasses that each implement Either’s specs.

**Step1:** In order to use Validation, all we need to do is to wrap valid values and errors inside **Success** and **Failure** constructors (i.e. create instances of those classes).

<pre name="fbf2" id="fbf2" class="graf graf--pre graf-after--p">const Validation = require('data.validation') //from [folktalejs](https://github.com/folktale/data.validation)  
const Success = Validation.Success  
const Failure = Validation.Failure  
const R = require('ramda');</pre>

<pre name="6ba8" id="6ba8" class="graf graf--pre graf-after--pre">**//Instead Of:** function isUsernameValid(a) {  
    return /^(0|[1-9][0-9]*)$/.test(a) ?   
           ["Username can't be a number"] : a  
}</pre>

<pre name="8e63" id="8e63" class="graf graf--pre graf-after--pre">**//Use:**  
function isUsernameValid(a) {  
    return /^(0|[1-9][0-9]*)$/.test(a) ?   
         **Failure**(["Username can't be a number"]) : **Success**(a)  
}</pre>

> **Repeat the process for ALL error throwing validation functions.**

**Step 2:** Create a dummy function to hold validation success.

<pre name="992e" id="992e" class="graf graf--pre graf-after--p">const returnSuccess = () => 'success';//simply returns success</pre>

**Step 3: Use curryN to repeatedly apply “ap”**

The problem with “ap” is that the left-hand side should be a functor (or a monad) containing **function**.

For example, let’s say we want to repeatedly apply “ap” like below. It will only work if monad1 contains a function. And the result of monad1.ap(monad2) i.e. **resultingMonad** is also a monad with a function so that we can “ap” to monad3.

<pre name="d192" id="d192" class="graf graf--pre graf-after--p">**let finalResult = monad1.ap(monad2).ap(monad3)**</pre>

<pre name="423b" id="423b" class="graf graf--pre graf-after--pre">//Can be rewritten as:  
let resultingMonad = monad1.ap(monad2)  
let **finalResult** = resultingMonad.ap(monad3)</pre>

<pre name="8e71" id="8e71" class="graf graf--pre graf-after--pre">**//will only work if: monad1 has a function and monad1.ap(monad2) results in another monad (resultingMonad) with a function**</pre>

> Generally speaking, we need 2 monads that has functions in order to apply “ap” twice.

In our case, we have 3 functions that we need to apply.

Let’s say we did something like below.

<pre name="89ba" id="89ba" class="graf graf--pre graf-after--p">         Success(returnSuccess)  
        .ap(isUsernameValid(username)) //works  
        .ap(isPwdLengthCorrect(pwd))//wont work  
        .ap(ieEmailValid(email))//wont work</pre>

The above won’t work because Success(returnSuccess).ap(isUsernameValid(username)) will result in a value. And we can no longer continue to do “ap” on 2nd and 3rd function.

Enter curryN.

We can use curryN to keep returning function until it is called “N” number of times.

So we can simply do:

<pre name="ac8a" id="ac8a" class="graf graf--pre graf-after--p">//3 coz we are calling "ap" 3 times.  
let success = R.curryN(3, returnSuccess);</pre>

Now, the curried **success keeps returning function 3 times.**

<pre name="0f9f" id="0f9f" class="graf graf--pre graf-after--p">function validateForm(username, pwd, email) {  
    //3 coz we are calling "ap" 3 times.  
    let success = R.curryN(3, returnSuccess);</pre>

<pre name="7106" id="7106" class="graf graf--pre graf-after--pre">    return Success(success)// default; used for 3 "ap"s  
        .ap(isUsernameValid(username))  
        .ap(isPwdLengthCorrect(pwd))  
        .ap(ieEmailValid(email))  
}</pre>

Putting it all together:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/22da21e848fe11194131f263ed452378?postId=429d2e8ccc9e" data-media-id="22da21e848fe11194131f263ed452378" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F626337%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





**If you liked the post by clicking on the 💚 it below and sharing it on Twitter! Thanks for reading!** 🙏🏼

### My Other Posts

#### Functional Programming

1.  [_JavaScript Is Turing Complete — Explained_](https://medium.com/@rajaraodv/javascript-is-turing-complete-explained-41a34287d263#.6t0b2w66p)
2.  [_Functional Programming In JS — With Practical Examples (Part 1)_](https://medium.com/@rajaraodv/functional-programming-in-js-with-practical-examples-part-1-87c2b0dbc276#.fbgrmoa7g)
3.  [_Functional Programming In JS — With Practical Examples (Part 2)_](https://medium.com/@rajaraodv/functional-programming-in-js-with-practical-examples-part-2-429d2e8ccc9e#.mmpv20wsv)

#### ES6

1.  [_5 JavaScript “Bad” Parts That Are Fixed In ES6_](https://medium.com/@rajaraodv/5-javascript-bad-parts-that-are-fixed-in-es6-c7c45d44fd81#.7e2s6cghy)
2.  [_Is “Class” In ES6 The New “Bad” Part?_](https://medium.com/@rajaraodv/is-class-in-es6-the-new-bad-part-6c4e6fe1ee65#.4hqgpj2uv)

#### WebPack

1.  [_Webpack — The Confusing Parts_](https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9#.6ot6deo2b)
2.  [_Webpack & Hot Module Replacement [HMR]_](https://medium.com/@rajaraodv/webpack-hot-module-replacement-hmr-e756a726a07#.y667mx4lg) _(under-the-hood)_
3.  [_Webpack’s HMR And React-Hot-Loader — The Missing Manual_](https://medium.com/@rajaraodv/webpacks-hmr-react-hot-loader-the-missing-manual-232336dc0d96#.fbb1e7ehl)

#### Draft.js

1.  [_Why Draft.js And Why You Should Contribute_](https://medium.com/@rajaraodv/why-draft-js-and-why-you-should-contribute-460c4a69e6c8#.jp1tsvsqc)
2.  [_How Draft.js Represents Rich Text Data_](https://medium.com/@rajaraodv/how-draft-js-represents-rich-text-data-eeabb5f25cf2#.hh0ue85lo)

#### React And Redux :

1.  [_Step by Step Guide To Building React Redux Apps_](https://medium.com/@rajaraodv/step-by-step-guide-to-building-react-redux-apps-using-mocks-48ca0f47f9a#.s7zsgq3u1)
2.  [_A Guide For Building A React Redux CRUD App_](https://medium.com/@rajaraodv/a-guide-for-building-a-react-redux-crud-app-7fe0b8943d0f#.g99gruhdz) _(3-page app)_
3.  [_Using Middlewares In React Redux Apps_](https://medium.com/@rajaraodv/using-middlewares-in-react-redux-apps-f7c9652610c6#.oentrjqpj)
4.  [_Adding A Robust Form Validation To React Redux Apps_](https://medium.com/@rajaraodv/adding-a-robust-form-validation-to-react-redux-apps-616ca240c124#.jq013tkr1)
5.  [_Securing React Redux Apps With JWT Tokens_](https://medium.com/@rajaraodv/securing-react-redux-apps-with-jwt-tokens-fcfe81356ea0#.xci6o9s6w)
6.  [_Handling Transactional Emails In React Redux Apps_](https://medium.com/@rajaraodv/handling-transactional-emails-in-react-redux-apps-8b1134748f76#.a24nenmnt)
7.  [_The Anatomy Of A React Redux App_](https://medium.com/@rajaraodv/the-anatomy-of-a-react-redux-app-759282368c5a#.7wwjs8eqo)

#### Salesforce

1.  [_Developing React Redux Apps In Salesforce’s Visualforce_](https://medium.com/@rajaraodv/developing-react-redux-apps-in-salesforce-s-visualforce-3ad7be560d1c#.f6bao6mtu)








