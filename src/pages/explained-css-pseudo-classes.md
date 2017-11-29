---
author: Nash Vail
authorTwitter: https://twitter.com/NashVail
authorFacebook: none
title: "How CSS pseudo-classes work, explained with code and lots of diagrams"
subTitle: "Let’s be honest — there are times when CSS can really hurt your brain. It’s hard enough to center an element inside its parents...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*FypLaInuQOolvpO95NtBIQ.png
url: https://medium.freecodecamp.org/explained-css-pseudo-classes-cef3c3177361
id: explained-css-pseudo-classes-cef3c3177361
date: 2016-11-06T06:24:33.269Z
tags: [
	"CSS",
	"Web Development",
	"Web Design",
	"Design",
	"Programming"
]
---
# How CSS pseudo-classes work, explained with code and lots of diagrams







![](https://cdn-images-1.medium.com/max/1600/1*FypLaInuQOolvpO95NtBIQ.png)








Let’s be honest — there are times when CSS can really hurt your brain. It’s hard enough to center an element inside its parents.

Today, we’re going to make sense of an even more challenging aspect of CSS: pseudo-classes.







![](https://cdn-images-1.medium.com/max/1600/1*ZPlE0Td0GCO2mt3Ivrmp5g.gif)






Obligatory Family Guy CSS gif



The pseudo-classes I’ll cover here come in two flavors.

*   *-of-type selectors
*   *-child selectors

You may be thinking, “But I’m here to learn pseudo-classes. Why are we talking about selectors?” Well, these are basically the same thing, and I will use these terms interchangeably.

Pseudo-classes are sometimes hard to grasp, mainly because they’re presented in an abstract way. So I’ll take a different approach here and help you understand these by drawing a DOM tree.

#### The Markup and The Tree

First, take a look at this block of HTML. I’ll use this code in all my examples.

<pre name="abfc" id="abfc" class="graf graf--pre graf-after--p"><body>  
    
     Inner Link 1  
     Inner Link 2  
     <ul>  
       Inner Inner Link 1  
       <li>  
         List Item 1  
       </li>  
       <li>  
         List Item 2  
       </li>  
     </ul>  
     Inner Link 3  
    
  Outer Link 1  
  Outer Link 2  
</body></pre>

Now I’m going to convert this code into something more visual and more intuitive: a tree.

The following body element has 3 children, _.main_ and two _anchor_ elements.

<pre name="db1f" id="db1f" class="graf graf--pre graf-after--p"><body>  
    
   ...  
    
  Outer Link 1  
  Outer Link 2  
</body></pre>

Here’s what the relation between _body_ and its three children looks like when you is represent it as a tree:












Fig. 1



One thing to keep in mind is that the order in which children are placed in the tree is important. Children located top to bottom in code are placed left to right in the tree.

Next, let’s look at the _.main_ div:

<pre name="9d15" id="9d15" class="graf graf--pre graf-after--p">  
   Inner Link 1  
   Inner Link 2  
   <ul>  
     ...  
   </ul>  
   Inner Link 3  
</pre>

.main has 4 children. The first two are _anchor_ elements then an _ul_ and then again an anchor elements.












Fig . 2



Similarly, we step down each level of nesting and draw the complete tree out of the HTML code.












Fig. 3 — Tree representation of the HTML code



In order for this article to bear any fruit for you, it’s important that you understand this tree.

“Ha ha nice pun there!” “Thanks!” Increment the pun counter to 1, and let’s move to our very first pseudo-class.

### Pseudo-class #1 :only-of-type

All pseudo-classes follow the same format:

<pre name="c610" id="c610" class="graf graf--pre graf-after--p">what-you-want-to-select:filter { /* styles */ }</pre>

_what-you-want-to-select_ can be used to select anything that exists as a collection in the DOM. Here, allow me to go ahead and show you an example:

<pre name="8a06" id="8a06" class="graf graf--pre graf-after--p">a:only-of-type {   
  border: 2px solid black;  
}</pre>

In the code snippet shown above, _what-you-want-to-select_ are anchor elements (the _a_ tag), and the _filter_ is _only-of-type._ We’ll see in a moment what this selector does.

First, I’ve setup a [codepen](http://codepen.io/nashvail/pen/VKkXLB) for if you’re too lazy to create a tester project. You’re welcome, friend!

You can follow along, see the changes, get confused, then come back to this article for the explanation. You do your part, I’ll do mine.

Here’s me doing my part, explaining the code shown above. We’ll start by selecting everything that there is, and then eventually filter down.












Fig. 4 — selecting everything



Notice how the selection has been done? Each section in the tree (numbered 1 to 5) has elements with a common parent. The parent of Section 1 is _body_, the parent of Section 2 is ._main,_ and so on. **Once again, notice that each section corresponds to a level deeper in code nesting**.

Next, since anchor elements are _what-you-want-to-selec_t, we’ll do just that:












Fig. 5 — selecting just the anchor elements



We’ve selected all the anchor element in each of the sections and numbered them consecutively left to right. And I mentioned, the order — left to right — is important.

This is where _what-you-want-to-select_ partends and the filtering begins.












Fig. 6 — Selecting only-of-type anchor elements.



_only-of type t_raverses each section and selects only those anchor elements that are the only anchor element in their respective section. Notice how sections 3, 4, and 5 are the only sections with anchor elements? As figure 6 shows, these are the ones that get selected and declared when a style gets applied.

### Pseudo-class #2 :first-of-type

Let’s fast forward to the part where we end selecting all the “_what-you-want-to-select_”s (anchor elements in our case).












Fig. 7 — Selecting just the anchor elements.



The filter _first-of-type_ translates to selecting in each of the sections only the first occurrence of the anchor element.












Fig. 8 — Selecting first-of-type anchor elements.



Here’s what the code that accomplishes this looks like:

<pre name="fae4" id="fae4" class="graf graf--pre graf-after--p">a:first-of-type {   
  border: 2px solid black;  
}</pre>

In case you forgot the hard work I did for you setting up the CodePen, here’s the [link](http://codepen.io/nashvail/pen/VKkXLB) again to check out what the code renders in a browser.

### Pseudo-class #3 :last-of-type

If you can’t tell by the name, _last-of-type_ is the exact opposite of _first-of-type._ Which therefore means in each section of the tree, instead of selecting the first occurrence, select the last ones.












Fig. 9 — :last-of-type selections



“What about the sections with just one anchor element?”, not very glad you asked that question. It’s quite simple to see if a section has just one anchor element, it obviously passes the _only-of-type_ filter, but not only that. Since there are no anchor elements preceding or following that particular tag it passes both _first-of-type_ and _last-of-type_ filters as well (e.g _a_ tags Section 4 and 5).

### Pseudo-class #4 :nth-of-type(number/an + b/even/odd)

And now we finally bite into the juicy part of the article, there’s simple CSS with some fifth grade Math toppings, hope you enjoy savouring it.

Let’s declare the following style to begin with.

<pre name="c216" id="c216" class="graf graf--pre graf-after--p">a:nth-of-type(1) {   
  border: 2px solid black;  
}</pre>

It looks a little cryptic but is quite simple really. To read the selector simply take the number from the parentheses and replace _nth_ in the selector name with that number’s **ordinal** form. That’s another fancy English word for you, to be honest though…





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F745987781436989440%2FKIacsdeB_bigger.jpg&key=4fce0568f2ce49e8b54624ef71a8a5bd&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/40fbccfd489ffc3b8b05ae2ebf8a6619?postId=cef3c3177361" data-media-id="40fbccfd489ffc3b8b05ae2ebf8a6619" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F745987781436989440%2FKIacsdeB_bigger.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








Alright coming back, _a:nth-of-type(1)_ can be therefore read as _a:first-of-type_ and no surprise it works exactly like _a:first-of-type_ and results in the elements getting selected as shown below; just the anchor elements which are first of their types in their respective section.












Fig. 10 — Do people even read these?



Well that is fine and dandy, but let’s try something different here.

<pre name="6043" id="6043" class="graf graf--pre graf-after--p">a:nth-of-type(0) {   
  border: 2px solid black;  
}</pre>

If you guessed it right, which I am sure you didn’t, no anchor elements get selected in this case. As the numbering of types (and children as we’ll see) in each section starts from 1 and not 0, there is no “0” anchor elements in any of the sections and therefore _a:zeroth-of-type_ selects nothing. And so will be the case for _a:nth-of-type(5)_ or _a:nth-of-type(6/7/8)_ because there are no _a:fifth-of-type_ or _a:sixth/seventh/eighth-of-type_ in any of the sections_._

But if we went ahead and used…

<pre name="39cf" id="39cf" class="graf graf--pre graf-after--p">a:nth-of-type(2) {   
  border: 2px solid black;  
}</pre>

… quite clearly sections 1 and 2 have a _second-of-type_ anchor elements and hence those are the ones that get selected.












Fig. 11 — :nth-of-type(2) or read as :second-of-type



Similarly, just to reinforce the point here, if we went ahead and declared the following style,

<pre name="ead5" id="ead5" class="graf graf--pre graf-after--p">a:nth-of-type(3) {   
  border: 2px solid black;  
}</pre>

it will select the third anchor elements in the second section as section 2is the only section with a :_third-of-type_ anchor element.












Fig. 12 — :nth-of-type(3) or read as :third-of-type



Quite simple isn’t it? But numbers aren’t the only thing that you can pass into _:nth-of-type(…),_ this bloke is more powerful that that, you can also pass in formulas of form _(a*n) + b_ (or for brevity _an + b_)_._ Where _a_ and _b_ are constants and _n_ is a value >= 0\. How did you like the Math topping sir? don’t worry it’ll all make sense in a second.

Consider the following style

<pre name="8e84" id="8e84" class="graf graf--pre graf-after--p">a:nth-of-type(n) {  border: 2px solid black; }</pre>

The formula that’s passed in the selector above is _(1 * n) + 0 [= n] _, _a_ is 1, bis 0 and _n_ is well, n. What happens next is, starting from 0 the numerical value of _n_ is incrementally plugged into the formula and selection is made. Therefore _a:nth-of-type(n)_ basically translates to

<pre name="a546" id="a546" class="graf graf--pre graf-after--p">a:nth-of-type(0) {  border: 2px solid black; } // n = 0  
a:nth-of-type(1) {  border: 2px solid black; } // n = 1  
a:nth-of-type(2) {  border: 2px solid black; } // n = 2  
a:nth-of-type(3) {  border: 2px solid black; } // n = 3  
a:nth-of-type(4) {  border: 2px solid black; } // n = 4</pre>

<pre name="4a65" id="4a65" class="graf graf--pre graf-after--pre">...</pre>

Hence this results in all the anchor elements getting selected.

Let’s consider one more example

<pre name="b6d6" id="b6d6" class="graf graf--pre graf-after--p">a:nth-of-type(2n + 1) {  border: 2px solid black; }</pre>

Starting from 0 and incrementally plugging values of _n_ in the formula generates the following selectors.

<pre name="b777" id="b777" class="graf graf--pre graf-after--p">// n = 0 implies (2 * 0) + 1 = 1  
a:nth-of-type(1) { border: 2px solid black; }</pre>

<pre name="7167" id="7167" class="graf graf--pre graf-after--pre">// n = 1 implies (2 * 1) + 1 = 3  
a:nth-of-type(3) { border: 2px solid black; }</pre>

<pre name="e1b9" id="e1b9" class="graf graf--pre graf-after--pre">// n = 2 implies (2 * 2) + 1 = 5 - No selections since no fifth-of-type present in any of the sections  
a:nth-of-type(5) { border: 2px solid black; }...</pre>












Fig 13 — nth-of-type(2n+1) selections



Other than numbers and formulas that generate numbers_,_ you can pass in either _even_ or _odd_ strings_. even_ selects all the even occurrences of an element of particular type in a section i.e _:second-of-type_ _:fourth-of-type_ _:sixth-of-type_ e.t.c and on the other hand obviously _:nth-of-type(odd)_ selects all the odd occurrences i.e _:first-of-type, :third-of-type, :fifth-of-type_ e.t.c

### Pseudo-class #5 :nth-last-of-type(number/an + b/even/odd)

This selector functions exactly like the previous one, but with one little difference. See for yourself…

<pre name="a28b" id="a28b" class="graf graf--pre graf-after--p">a:nth-last-of-type(1) {  border: 2px solid black; }</pre>












Fig. 14 — nth-last-of-type(1)



Notice how in each level numbering of anchor types is done from right to left instead of normal left to right. That is the only difference. _last-of-type_ accepts numbers and formulas and even/odd just like _nth-of-type_ except when selection is made the last type is treated as first, second last as second, third last as third and so on…











* * *







With that we come to an end of *_-of-type_ selectors. Hope it was a fun ride for you, we started with _only-of-type_ then moved to _first-of-type_, _last-of-type_ and took a huge dip into _nth-of-type(…)_ and _nth-last-of-type(..)._ If in case somewhere in the middle you lost your grip and fell off I encourage you play around with this pen and re read the explanation.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fi.cdpn.io%2F296304.VKkXLB.small.143ddc2c-1f6e-43d0-b5c5-11620f69cafe.png&key=4fce0568f2ce49e8b54624ef71a8a5bd&width=40)


<iframe data-width="800" data-height="600" width="700" height="525" data-src="https://medium.freecodecamp.org/media/f224bd71092de99f3ec8ac17ce628840?postId=cef3c3177361" data-media-id="f224bd71092de99f3ec8ac17ce628840" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fi.cdpn.io%2F296304.VKkXLB.small.143ddc2c-1f6e-43d0-b5c5-11620f69cafe.png&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>


















* * *







Alright, time to hop on to the next one in this less visited corner of the CSS theme park. Another category of pseudo selectors/classes we’re going to delve into are *_-child_ classes. With a clear understanding of how *_-of-type_ selectors work grasping the concept behind *_-child_ selectors should be a cinch for you. “Cinch? What’s that? Is it a unit of measurement?” No ya dumbass, it means an extremely easy task. Anyways, let’s start with our very first _*-child selector,_ :_only-child_.

### Child pseudo-class #1 :only-child

Consider the following style.

<pre name="687b" id="687b" class="graf graf--pre graf-after--p">a:only-child {   
  border: 2px solid black;  
}</pre>

Now that’s the very definition of self explanatory and straightforward. The selector says to select all the anchor elements, given that the anchor element should be the only child of its parent, or, to put in other words select all the anchor elements whose parent has just one child and that one child is an anchor element.












Fig. 15 — a:only-child selections



I had a friend who was never his mother’s favorite, and he was an only child. Just wanted to plug that in there, anyways, notice that in contrast with _*-of-type_ selectors we are no longer numbering types, but children, starting of course from 1 (and not 0). When compared with _only-of-type,_ theanchor element in section 3 is not selected as its parent (_ul_) has 3 children therefore even though it (the anchor element in level 3) is an _only child of type ‘a’_ of its parent, its not the only child, there are 2 _li_s as well.

### Child pseudo-class #2 :first-child

Consider the following style declaration.

<pre name="947b" id="947b" class="graf graf--pre graf-after--p">a:first-child {   
  border: 2px solid black;  
}</pre>

It simply says, select all the anchor element, but with one condition in mind, the anchor element should be the first child of its parent. That’s it, no further explanation needed.












Fig. 16 — a:first-child selections



For if you are a little confused as of why the _a_ in section 1 wasn’t selected it’s because the first child in section 1 (whose parent is _body_) is _.main_, the first _a_ in section 1 is the second child and couldn’t pass the _first-child_ filter, that is the exact reason why the poor bloke ended up not being selected and was given a big hashtag fuck off. Let’s continue to the next one.

### Child pseudo-class #3 :last-child

This is the part where selectors should start to get self explanatory and you should start thinking I am dumb trying to explain them to you. [But my name is not blurryface and I don’t care what you think](http://genius.com/6273352). “Nice twenty one pilots reference there” yeah I know, thanks. Now, look at the following style declaration.

<pre name="6e48" id="6e48" class="graf graf--pre graf-after--p">a:last-child {   
  border: 2px solid black;  
}</pre>

_what-you-want-to-select_ ? “Anchor elements.” And the _filter_ you want to use? _last-child._ That quite simply translates to select those anchor elements which are the last child of their parent. Or, in other words select anchor elements whose parent finally decided it wasn’t fun anymore and stopped after that bloke was born. Below is what the tree looks like with _:last-child_ selections.












Fig. 16 — :last-child selections.



### Child pseudo-class #4 :nth-child(number/an+b/even/odd)

I hope you were able to digest the Math topping you got served last time, because it’s about to happen again only this time on a slightly different crust.

Now, I would like you to take all your attention and laser point it to the following example.

<pre name="a8c4" id="a8c4" class="graf graf--pre graf-after--p">a:nth-child(1) {  border: 2px solid black; }</pre>

It’s all the same as _:nth-of-type,_ I would have linked to that section of the article here but Medium policies don’t allow that, if you want a refresher, you will have to scroll up to that section. Leaving Medium policies aside which might change in future, what hasn’t changed is the process of decrypting _nth-selectors ._

Just like with _:nth-of-type,_ in the selector name take the number in parentheses and replace “_nth”_ with that number’s ordinal form. Therefore the selector shown in example is equivalent to _a:first-child_ and works exactly the same; i.e selects all the anchor elements, given that they are the first child of their parent.

That should nail the similarity between the two _nth-selectors (nth-of-type_ and _nth-child),_ but we will anyways go ahead and take a look at another example.

<pre name="385c" id="385c" class="graf graf--pre graf-after--p">a:nth-child(2n - 1) {  border: 2px solid black; }</pre>

We begin by incrementally plugging in values of _n_ starting from 0 into the formula, which makes us realize that the selector shown above is basically equivalent to the ones shown below.

<pre name="2d74" id="2d74" class="graf graf--pre graf-after--p">// n = 0 implies (2 * 0) - 1 = 0 - 1 = **-1**  
a:nth-child(-1) { border: 2px solid black; }  | No selections</pre>

<pre name="b024" id="b024" class="graf graf--pre graf-after--pre">// n = 1 implies (2 * 1) - 1 = 2 - 1 = **1**  
a:nth-child(1) { border: 2px solid black; }</pre>

<pre name="d422" id="d422" class="graf graf--pre graf-after--pre">// n = 2 implies (2 * 2) - 1 = 4 - 1 = **3**  
a:nth-child(3) { border: 2px solid black; }</pre>

<pre name="b0ee" id="b0ee" class="graf graf--pre graf-after--pre">// n = 3 implies (2 * 3) - 1 = 6 - 1 = **5**  
a:nth-child(5) { border: 2px solid black; } | No selections further  
...</pre>

As it is, if the selector gets numbers out of bounds (like -1, 5, 6… in the case above) fed into it, it just ignores them. Following is how the tree looks with _a:nth-child(2n-1)_ applied.












Fig. 17 — :nth-child(2n-1) selections.



Folks at CSS Tricks have a very informative article called [Useful :nth-child Recipes](https://css-tricks.com/useful-nth-child-recipies/) you should check it out and put your knowledge of :_nth-child_ to test_._ I challenge you m8.

With that we will move to the last selector of this article which punningly is _:nth-last-child._ Holy shit! why is “punningly” a word even?

### Child pseudo-class #5 :nth-last-child(number/an + b/even/odd)

This selector works exactly like _:nth-child_ except that it starts selecting elements from the opposite direction just like that annoying high school teacher who would ask questions to the class starting from the peaceful folks seated at the last benches. God I hated him. If you look at the trees drawn so far, the children are numbered left to right in each section, but this selector bloke sees the tree like so












Fig. 18



The children in each section are numbered right to left. So if we go ahead and apply the following style

<pre name="4438" id="4438" class="graf graf--pre graf-after--p">a:nth-last-child(1) {  border: 2px solid black; }</pre>

the anchor elements will get selected as shown below.














Quite straightforward isn’t it? This selector also very comfortably accepts formulas (of form an + b) and _even/odd_ strings, the selections though, are made from the opposite end.











* * *







OK, this is where our journey together ends. You can pay for your ticket by tweeting this article to your developer buddies.

I hope you enjoyed reading this and learned something new, including some shiny new English words.

This is Nash signing off. I’ll see you in the next article. Follow me on [Twitter](http://twitter.com/NashVail) to keep in touch. I tweet about dev-related stuff. A lot.








