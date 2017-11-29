---
author: Shalvah A.
authorTwitter: https://twitter.com/theshalvah
authorFacebook: https://facebook.com/1768257200092722
title: "How to build a math expression tokenizer using JavaScript (or any other language)"
subTitle: "Some time ago, I got inspired to build an app for solving specific kinds of math problems. I discovered I had to parse the expression int..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*cgIB8FPxdoWvQtgm9JazIA.png
url: https://medium.freecodecamp.org/how-to-build-a-math-expression-tokenizer-using-javascript-3638d4e5fbe9
id: how-to-build-a-math-expression-tokenizer-using-javascript-3638d4e5fbe9
date: 2017-04-12T16:38:19.806Z
tags: [
  "JavaScript",
  "Programming",
  "Mathematics",
  "Tech",
  "Technology"
]
---
# How to build a math expression tokenizer using JavaScript (or any other language)



![](https://cdn-images-1.medium.com/max/1600/1*cgIB8FPxdoWvQtgm9JazIA.png)

Source: Wikimedia Commons



Some time ago, I got inspired to build an app for solving specific kinds of math problems. I discovered I had to parse the expression into an [abstract syntax tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree), so I decided to build a prototype in Javascript. While working on the parser, I realized the tokenizer had to be built first. I’ll walk you through how to do one yourself. (Warning: its easier than it looks at first.)

### What is a Tokenizer?

A [tokenizer](https://en.wikipedia.org/wiki/Lexical_analysis#Tokenization) is a program that breaks up an expression into units called **tokens**. For instance, if we have an expression like “I’m a big fat developer”, we could tokenize it in different ways, such as:

Using words as tokens,

<pre name="926a" id="926a" class="graf graf--pre graf-after--p">0 => I’m  
1 => a  
2 => big  
3 => fat  
4 => developer</pre>

Using non-whitespace characters as tokens,

<pre name="36e6" id="36e6" class="graf graf--pre graf-after--p">0 => I  
1 => ‘  
2 => m  
3 => a  
4 => b  
…  
16 => p  
17 => e  
18 => r</pre>

We could also consider all characters as tokens, to get

<pre name="d39b" id="d39b" class="graf graf--pre graf-after--p">0 => I  
1 => ‘  
2 => m  
3 => (space)  
4 => a  
5 => (space)  
6 => b  
…  
20 => p  
21 => e  
22 => r</pre>

You get the idea, right?

[Tokenizers](https://en.wikipedia.org/wiki/Lexical_analysis#Tokenization) (also called lexers) are used in the development of compilers for programming languages. They help the compiler make structural sense out of what you are trying to say. In this case, though, we’re building one for math expressions.

### Tokens

A valid math expression consists of mathematically valid tokens, which for the purposes of this project could be **Literals**, **Variables**, **Operators, Functions _or_ Function Argument Separators**.  
A few notes on the above:

*   A Literal is a fancy name for a number (in this case). We’ll allow numbers in whole or decimal form only.
*   A Variable is the kind you’re used to in math: a,b,c,x,y,z. For this project, all variables are restricted to one-letter names (so nothing like _var1_ or _price_). This is so we can tokenize an expression like _ma_ as the product of the variables _m_ and _a_, and not one single variable _ma_.
*   Operators act on Literals and Variables and the results of functions. We’ll permit operators +, -, *, /, and ^.
*   Functions are “more advanced” operations. They include things like sin(), cos(), tan(), min(), max() etc
*   A Function Argument Separator is just a fancy name for a comma, used in a context like this: _max(4, 5)_ (the maximum one of the two values). We call it a Function Argument Separator because it, well, separates function arguments (for functions that take two or more arguments, such as _max_ and _min_).

We’ll also add two tokens that aren’t usually considered tokens, but will help us with clarity: **Left** and **Right Parentheses**. You know what those are.

### A Few Considerations

#### Implicit Multiplication

Implicit multiplication simply means allowing the user to write “shorthand” multiplications, such as _5x_, instead of _5*x_. Taking it a step further, it also allows doing that with functions (_5sin(x)_ = _5*sin(x)_).

Even further, it allows for 5(x) and 5(sin(x)). We have the option of allowing it or not. Tradeoffs? Not allowing it would actually make tokenizing easier and would allow for multi-letter variable names (names like`price`). Allowing it makes the platform more intuitive to the user, and well, provides an added challenge to overcome. I chose to allow it.

#### Syntax

While we aren’t creating a programming language, we need to have some rules about what makes a valid expression, so users know what to enter and we know what to plan for. In precise terms, _math tokens must be combined according to these syntax rules for the expression to be valid._ Here are my rules:

1.  Tokens can be separated by 0 or more whitespace characters

<pre name="05bb" id="05bb" class="graf graf--pre graf-after--li">2+3, 2 +3, 2 + 3, 2 + 3 are all OK   
5 x - 22, 5x-22, 5x- 22 are all OK</pre>

In other words, **spacing doesn’t matter** (except within a multi-character token like the Literal 22).

2\. **Function arguments have to be in parentheses** (_sin(y)_, _cos(45)_, not _sin y_, _cos 45_). (Why? We’ll be removing all spaces from the string, so we want to know where a function starts and ends without having to do some “gymnastics”.)

3\. Implicit multiplication is allowed only between **Literals and Variables**, or **Literals and Functions**, in that order (that is, Literals always come first), and can be with or without parentheses. This means:

*   _a(4)_ will be treated as a function call rather than _a*4_
*   _a4_ is not allowed
*   _4a_ and _4(a)_ are OK

Now, let’s get to work.

### Data Modelling

It helps to have a sample expression in your head to test this on. We’ll start with something basic: _2y + 1_

What we expect is an array that lists the different tokens in the expression, along with their types and values. So for this case, we expect:

<pre name="ad78" id="ad78" class="graf graf--pre graf-after--p">0 => Literal (2)  
1 => Variable (y)  
2 => Operator (+)  
3 => Literal (1)</pre>

First, we’ll define a Token class to make things easier:

<pre name="a45a" id="a45a" class="graf graf--pre graf-after--p">function Token(type, value) {  
   this.type = type;  
   this.value = value  
}</pre>

### Algorithm

Next, let’s build the skeleton of our tokenizer function.

Our tokenizer will go through each character of the `str` array and build tokens based on the value it finds.

_[Note that we’re assuming the user gives us a valid expression, so we’ll skip any form of validation throughout this project.]_

<pre name="c6b7" id="c6b7" class="graf graf--pre graf-after--p">function tokenize(str) {  
  var result=[]; //array of tokens  

  // remove spaces; remember they don't matter?  
  str.replace(/\s+/g, "");</pre>

<pre name="6403" id="6403" class="graf graf--pre graf-after--pre">  // convert to array of characters  
  str=str.split("");</pre>

<pre name="43fd" id="43fd" class="graf graf--pre graf-after--pre">str.forEach(function (char, idx) {  
    if(isDigit(char)) {  
      result.push(new Token("Literal", char));  
    } else if (isLetter(char)) {  
      result.push(new Token("Variable", char));  
    } else if (isOperator(char)) {  
      result.push(new Token("Operator", char));  
    } else if (isLeftParenthesis(char)) {  
      result.push(new Token("Left Parenthesis", char));  
    } else if (isRightParenthesis(char)) {  
      result.push(new Token("Right Parenthesis", char));  
    } else if (isComma(char)) {  
      result.push(new Token("Function Argument Separator", char));  
    }  
  });</pre>

<pre name="194d" id="194d" class="graf graf--pre graf-after--pre">  return result;  
}</pre>

The code above is fairly basic. For reference, the helpers `isDigit()` , `isLetter()`, `isOperator()`, `isLeftParenthesis()`, and `isRightParenthesis()`are defined as follows (don’t be scared by the symbols — it’s called [regex](http://www.regular-expressions.info/), and it’s really awesome):

<pre name="5d6e" id="5d6e" class="graf graf--pre graf-after--p">function isComma(ch) {  
 return (ch === ",");  
}</pre>

<pre name="b484" id="b484" class="graf graf--pre graf-after--pre">function isDigit(ch) {  
 return /\d/.test(ch);  
}</pre>

<pre name="13ac" id="13ac" class="graf graf--pre graf-after--pre">function isLetter(ch) {  
 return /[a-z]/i.test(ch);  
}</pre>

<pre name="de26" id="de26" class="graf graf--pre graf-after--pre">function isOperator(ch) {  
 return /\+|-|\*|\/|\^/.test(ch);  
}</pre>

<pre name="f0c9" id="f0c9" class="graf graf--pre graf-after--pre">function isLeftParenthesis(ch) {  
 return (ch === "(");  
}</pre>

<pre name="0c30" id="0c30" class="graf graf--pre graf-after--pre">function isRightParenthesis(ch) {  
 return (ch == ")");  
}</pre>

_[Note that there are no_ isFunction()_,_ isLiteral() _or_ isVariable() _functions, because we testing characters individually.]_

So now our parser actually works. Try it out on these expressions: 2 + 3, 4a + 1, 5x+ (2y), 11 + sin(20.4).

All good?

Not quite.

You’ll observe that for the last expression, 11 is reported as _two_ Literal tokens instead of one. Also `sin` gets reported as _three_ tokens instead of one. Why is this?

Let’s pause for a moment and think about this. We tokenized the array character by character, but actually, some of our tokens can contain multiple characters. For example, Literals can be 5, 7.9, .5\. Functions can be sin, cos etc. Variables are only single-characters, but can occur together in implicit multiplication. How do we solve this?

#### Buffers

We can fix this by implementing a buffer. Two, actually. We’ll use one buffer to hold Literal characters (numbers and decimal point), and one for letters (which covers both variables and functions).

How do the buffers work? When the tokenizer encounters a number/decimal point or letter, it pushes it into the appropriate buffer, and keeps doing so until it enters a different kind of operator. Its actions will vary based on the operator.

For instance, in the expression _456.7xy + 6sin(7.04x) — min(a, 7)_, it should go along these lines:

<pre name="441f" id="441f" class="graf graf--pre graf-after--p">read 4 => numberBuffer  
 read 5 => numberBuffer  
 read 6 => numberBuffer  
 read . => numberBuffer  
 read 7 => numberBuffer  
 x is a letter, so put all the contents of numberbuffer together as a Literal 456.7 => result  
 read x => letterBuffer  
 read y => letterBuffer  
 + is an Operator, so remove all the contents of letterbuffer separately as Variables x => result, y => result  
 + => result  
 read 6 => numberBuffer  
 s is a letter, so put all the contents of numberbuffer together as a Literal 6 => result  
 read s => letterBuffer  
 read i => letterBuffer  
 read n => letterBuffer  
 ( is a Left Parenthesis, so put all the contents of letterbuffer together as a function sin => result  
 read 7 => numberBuffer  
 read . => numberBuffer  
 read 0 => numberBuffer  
 read 4 => numberBuffer  
 x is a letter, so put all the contents of numberbuffer together as a Literal 7.04 => result  
 read x => letterBuffer  
 ) is a Right Parenthesis, so remove all the contents of letterbuffer separately as Variables x => result  
 - is an Operator, but both buffers are empty, so there's nothing to remove  
 read m => letterBuffer  
 read i => letterBuffer  
 read n => letterBuffer  
 ( is a Left Parenthesis, so put all the contents of letterbuffer together as a function min => result  
 read a=> letterBuffer  
 , is a comma, so put all the contents of letterbuffer together as a Variable a => result, then push , as a Function Arg Separator => result  
 read 7=> numberBuffer  
 ) is a Right Parenthesis, so put all the contents of numberbuffer together as a Literal 7 => result</pre>

Complete. You get the hang of it now, right?

We’re getting there, just a few more cases to handle.

This is the point where you sit down and think deeply about your algorithm and data modeling. What happens if my current character is an operator, and the numberBuffer is non-empty? Can both buffers ever simultaneously be non-empty?

Putting it all together, here’s what we come up with (the values to the left of the arrow depict our current character (ch) type, NB=numberbuffer, LB=letterbuffer, LP=left parenthesis, RP=right parenthesis

<pre name="0784" id="0784" class="graf graf--pre graf-after--p">loop through the array:  
  what type is ch?</pre>

<pre name="a9b1" id="a9b1" class="graf graf--pre graf-after--pre">digit => push ch to NB  
  decimal point => push ch to NB  
  letter => join NB contents as one Literal and push to result, then push ch to LB  
  operator => join NB contents as one Literal and push to result OR push LB contents separately as Variables, then push ch to result  
  LP => join LB contents as one Function and push to result OR (join NB contents as one Literal and push to result, push Operator * to result), then push ch to result  
  RP => join NB contents as one Literal and push to result, push LB contents separately as Variables, then push ch to result  
  comma => join NB contents as one Literal and push to result, push LB contents separately as Variables, then push ch to result</pre>

<pre name="317f" id="317f" class="graf graf--pre graf-after--pre">end loop</pre>

<pre name="9b45" id="9b45" class="graf graf--pre graf-after--pre">join NB contents as one Literal and push to result, push LB contents separately as Variables,</pre>

Two things to note.

1.  Notice where I added “push Operator * to result”? That’s us converting the implicit multiplication to explicit. Also, when emptying the contents of LB separately as Variables, we need to remember to insert the multiplication Operator in between them.
2.  At the end of the function’s loop, we need to remember to empty whatever we have left in the buffers.

### Translating It to Code

Putting it all together, your tokenize function should look like this now:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a915539eda0879267f4dc1a0149278d1?postId=3638d4e5fbe9" data-media-id="a915539eda0879267f4dc1a0149278d1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F14361073%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





We can run a little demo:

<pre name="a93d" id="a93d" class="graf graf--pre graf-after--p">var tokens = tokenize("89sin(45) + 2.2x/7");  
tokens.forEach(function(token, index) {  
  console.log(index + "=> " + token.type + "(" + token.value + ")":  
});</pre>



![](https://cdn-images-1.medium.com/max/1600/1*dRLwtjvcAXiO8OekLuxpgg.png)

Yeah! Note the added *s for the implicit multiplications



### Wrapping It Up

This is the point where you analyze your function and measure what it does versus what you want it to do. Ask yourself questions like, “Does the function work as intended?” and “Have I covered all edge cases?”

Edge cases for this could include negative numbers and the like. You also run tests on the function. If at the end you are satisfied, you may then begin to seek out how you can improve it.

Thanks for reading. Please click the little heart to recommend this article, and share if you enjoyed it! And if you have tried another approach for building a math tokenizer, do let me know in the comments.








