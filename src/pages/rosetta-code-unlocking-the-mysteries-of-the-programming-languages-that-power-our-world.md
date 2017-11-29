---
author: Peter Gleeson
authorTwitter: none
authorFacebook: none
title: "Rosetta Code — unlocking the mysteries of the programming languages that power our world"
subTitle: "It’s no secret that the tech world is dominated by a relatively small pool of programming languages. While exact figures are difficult to..."
coverSrc: https://cdn-images-1.medium.com/max/2000/0*oGjtK-TZgIukiWt4.jpg
url: https://medium.freecodecamp.org/rosetta-code-unlocking-the-mysteries-of-the-programming-languages-that-power-our-world-300b787d8401
id: rosetta-code-unlocking-the-mysteries-of-the-programming-languages-that-power-our-world-300b787d8401
date: 2017-02-20T21:53:26.396Z
tags: [
  "Programming",
  "Tech",
  "Technology",
  "Computer Science",
  "History"
]
---
# Rosetta Code — unlocking the mysteries of the programming languages that power our world







![](https://cdn-images-1.medium.com/max/2000/0*oGjtK-TZgIukiWt4.jpg)

The original Rosetta Stone, via [History.com](http://www.history.com/s3static/video-thumbnails/AETN-History_VMS/21/206/tdih-jul19-HD.jpg)







It’s no secret that the tech world is dominated by a relatively small pool of programming languages. While exact figures are difficult to obtain (and no doubt vary over time), you could probably name a handful of languages which comprise the vast majority of all programming output over a given period of time.

Two interesting sites I visited while researching this article let you visualize programming languages by popularity. [IEEE Spectrum](http://spectrum.ieee.org/static/interactive-the-top-programming-languages-2016) lets you interactively adjust the weightings of various metrics, whereas [PYPL](http://pypl.github.io/PYPL.html) serves up a neat table giving actual % share figures based on Google Trends data over the last 12 months.

Now, I refuse to be drawn into any debates over exactly what the best metric of programming language popularity may or may not be (and whether or not that’s an important statistic anyhow). What follows is just a hasty analysis to illustrate a point (any excuse really to use [R-Fiddle](http://www.r-fiddle.org/)!)

Using the data from PYPL, we can see a couple of clear trends:



![](https://cdn-images-1.medium.com/max/1600/1*AuU47Zr4yGL-qWscdTKTbQ.png)

Graph produced at [R-Fiddle.org;](http://www.r-fiddle.org/) data from[ PYPL](http://pypl.github.io/PYPL.html)



#### 1) — The top 10 languages account for almost a 90% share of Google Trends data

In order, these are: Java, Python, PHP, C#, JavaScript, C, C++, Objective-C, R and Swift. Combined, they have a Google Trends share of 87.1%.

#### 2) —Language popularity follows a power-law distribution

Using my favorite R package, ‘[igraph](http://igraph.org/r/)’, for its trusty power.law.fit() function, I found that the popularity of programming languages follows a power-law distribution:

<pre name="14da" id="14da" class="graf graf--pre graf-after--p">> pL = power.law.fit(shares)  
> pL$KS.p  

$KS.p  
[1] 0.9873141</pre>

That `$KS.p` value of 0.987 is the p-value associated with a Kolmogorov-Smirnov test statistic, which tells us that we can be pretty damn sure the distribution of popularity (as defined by PYPL) does follow a power-law distribution.

Like [many other phenomena](https://en.wikipedia.org/wiki/Pareto_distribution#Applications), the relative popularity of programming languages is unevenly distributed. This can usually be explained by a positive feedback (or ‘snowball-effect’) mechanism — a simplistic version might go that the more popular a language is, the more jobs are available in it, so more people are incentivised to learn it, thus increasing its popularity.

#### So what’s new?

It’s not really a surprise that some programming languages are waaaay more popular than others. Everyone already knows that Java, C, C++, C#, Python _et al._ are by far the most used languages.

What’s _more_ interesting, in my opinion, is the observation that for every behemoth programming language, there must be dozens of smaller, more niche languages out there in the wilderness.

Sheer curiosity aside, there are good reasons to be interested by this. Anyone who’s dabbled in more than a handful of programming languages knows that different languages suit different purposes. JavaScript is for web development, PHP for server-side programming, R for statistics, Matlab for full-on mathematics. With programming languages, variety is a good thing. Out there, there might just be a language ideally suited for solving that problem you didn’t even know existed.

But where to find them? One place to look is Rosetta Code.

### A Programming Safari

I can’t remember exactly how I came across Rosetta Code, but once I found it, I was hooked. It describes itself as a [programming chrestomathy](http://en.wikipedia.org/wiki/Chrestomathy "wp:Chrestomathy") site, and features an impressive 647 programming languages in its archives. Go and [check it out.](http://rosettacode.org/wiki/Rosetta_Code)

The truly awesome thing is that Rosetta Code goes beyond just giving a generic “Hello World!” example for each language. No, instead, it has a collection of over 800 assorted programming tasks, from some as simple as “Odd or Even”, through to more advanced problems, such as maze-solving and web-scraping. Each task page describes the problem to be solved, then gives solutions in a range of programming languages.

Here, reputation doesn’t matter. As well as C, C++, Java etc., you will find solutions in languages you’ve never heard of before. Some are retro, some are modern; some look familiar, while others are esoteric beyond belief. You could spend longer than you’d care to admit browsing through all the examples — but to help you get started, I’ve compiled a list of some of the lesser-known and/or more interesting languages which caught my attention. Activate nerd-mode, and dive in!

### Blast From The Past

Some languages last forever, or so it seems. As well as C, languages descended from Lisp and Fortran have been around for decades, and others such as BASIC and Pascal may have fallen out of fashion but live on in popular memory.

Time has been less kind to others, though. Here’s a list of some languages with code samples on Rosetta which, to put it one way, are unlikely to get you hired any time soon.

#### **EDSAC Order Code**

EDSAC is a famous early computer, designed and built by [Maurice Wilkes](https://en.wikipedia.org/wiki/Maurice_Wilkes)’ team at the University of Cambridge in the late 1940’s. The construction of EDSAC saw David Wheeler earn the first ever PhD in Computer Science in 1951\. Whilst he was at it, he also invented the ‘Wheeler jump’, or _closed subroutine_ — which we commonly refer to today as ‘functions’.

Despite its unshakeable place in history, EDSAC has been out of action since 1958, so don’t rush to learn its custom programming language. Here’s an [example](https://rosettacode.org/wiki/Empty_program#EDSAC_order_code) from Rosetta Code. It’s the ‘empty program’, or the shortest legitimate program. It doesn’t do very much at all.

<pre name="1552" id="1552" class="graf graf--pre graf-after--p">T64K  [ set load point ]  
GK    [ set base address ]  
ZF    [ stop ]  
EZPF  [ begin at load point ]</pre>

#### GEORGE

This language, invented in 1957, is one that would have been entered via punched tape into a machine the size of a room. Nevertheless, it was full of features, including loops, conditional statements, subroutines, and matrix data structures. It even reads a little like a more modern language.

Sixty years on though, GEORGE is no longer with us. Here’s how it would have been use to calculate the [sum of a series](https://rosettacode.org/wiki/Sum_of_a_series#GEORGE):

<pre name="6040" id="6040" class="graf graf--pre graf-after--p">0 (s)  
1, 1000 rep (i)  
   s 1 i dup × / + (s) ;  
]  
P</pre>

#### BCPL

‘Basic Combined Programming Language’, or BCPL, is worthy of its place in computing history. As well as apparently giving rise to the tradition of “Hello World!”, BCPL had a profound influence on the design of B, which was itself the forerunner of C. BCPL was the first language to introduce braces “{“ as a way of defining blocks of code — a convention still used in many of today’s most prominent languages. Decent, as legacies go.

[Here’s](https://rosettacode.org/wiki/Hello_world/Text#BCPL) a “Hello World” program written in BCPL:

<pre name="ea70" id="ea70" class="graf graf--pre graf-after--p">GET "libhdr"  

LET start() = VALOF  
{ writef("Hello world!")  
  RESULTIS 0  
}</pre>

#### PL/I

Developed by IBM in the early 1960’s PL/I (Programming Language One) was widely used in its heyday, but never quite displaced its competitors Fortran and COBOL. PL/I was primarily a mainframe language, and with the advent of the PC and the rising popularity of languages such as C++ and Java, PL/I slipped out of favor.

There are [many examples](https://rosettacode.org/wiki/Category:PL/I) of PL/I on Rosetta Code; here it is generating a Fibonacci sequence:

<pre name="6754" id="6754" class="graf graf--pre graf-after--p">**_/* Form the n-th Fibonacci number, n > 1\. */_**  
**get** **list(**n**)**;  
f1 = **0**; f2 = **1**;  
**do** i = **2** **to** n;  
   f3 = f1 + f2;  
   **put** **skip** **edit(**'fibo(',i,')=',f3**)(**a,f**(5)**,a,f**(5))**;  
   f1 = f2;  
   f2 = f3;  
**end**;</pre>

#### SNOBOL4

SNOBOL was developed in the early 1960’s and became a popular teaching language in the following decade. However, it ran out of steam throughout the 1980’s and 90's, but not before it was able to influence the design of Lua, which makes a top-20 appearance in the PYPL rankings we saw earlier.

Here’s a SNOBOL4 program that outputs the length of a string:

<pre name="5557" id="5557" class="graf graf--pre graf-after--p">         output = "Byte length: " size(trim(input))  
end</pre>

#### FOCAL

FOCAL (‘Formulating On-Line Calculations in Algebraic Language’, since you asked) was introduced in 1968, and was an efficient language that could run on very memory-limited systems. One particular quirk of the language was its apparent phobia of strings. Inputting the string “HELLO” would be interpreted as asking the computer to calculate `8 ^ "LLO”` , which FOCAL struggled to work out before spitting out a massive numerical answer.

Despite its eccentricities, FOCAL was used widely enough during the 70’s and 80’s. Coca-Cola even used their own version, which they imaginatively called COKE.

[This example](http://rosettacode.org/wiki/Temperature_conversion#FOCAL) from Rosetta Code shows a FOCAL program that converts temperatures between different units:

<pre name="72f8" id="72f8" class="graf graf--pre graf-after--p">01.10 ASK "TEMPERATURE IN KELVIN", K  
01.20 TYPE "K ", %6.02, K, !  
01.30 TYPE "C ", %6.02, K - 273.15, !  
01.40 TYPE "F ", %6.02, K * 1.8 - 459.67, !  
01.50 TYPE "R ", %6.02, K * 1.8, !</pre>

#### SETL

SETL was invented in the late 1960’s and was based heavily on [set theory](https://en.wikipedia.org/wiki/Set_theory), the branch of mathematics that concerns collections of objects. The most recent stable release was back in 2005, but despite its decline from use, SETL has a couple of claims to fame.

The first compiler of Ada, which was developed by the US Department of Defense, was written in SETL. Also, it is said to have influenced ABC — the language which went on to inspire the design of Python.

Here’s how SETL calculates the [greatest common divisor](https://rosettacode.org/wiki/Greatest_common_divisor#SETL) of two integers. See any resemblance to Python?

<pre name="c4c1" id="c4c1" class="graf graf--pre graf-after--p">proc gcd (u, v);  
  return if v = 0 then abs u else gcd (v, u mod v) end;  
end;</pre>

#### MUMPS

This unfortunately named language has been around since 1966, and is also referred to as M. A key feature is the built in database system, which allows for super-efficient access to stored data.

Although no longer in common use, MUMPS lives on the form of GT.M and InterSystems_Cache — which have a niche in hospitals and financial database systems. The European Space Agency has also used InterSystems_Cache for its recent [Gaia mission](https://en.wikipedia.org/wiki/Gaia_%28spacecraft%29#Data_processing).

This is how MUMPS can be used to [reverse a string](https://rosettacode.org/wiki/Reverse_a_string#MUMPS):

<pre name="9293" id="9293" class="graf graf--pre graf-after--p">REVERSE  
 ;Take in a string and reverse it using the built in function $REVERSE  
 NEW S  
 READ:30 "Enter a string: ",S  
 WRITE !,$REVERSE(S)  
 QUIT</pre>

### Deliberately Confusing

What are the hallmarks of a successful programming language? Speed? Versatility? Readability? Nah, forget all that — let’s look at a branch of programming languages out there that are intentionally difficult and/or unintuitive to use.

Esoteric languages, or ‘esolangs’, are programming languages used sometimes for experimentation, sometimes for a challenge, and sometimes just as the ultimate nerdy in-joke. If you don’t quite get it, that’s ok — in fact, that’s usually the point.

Better-known examples include [Brainf***](https://rosettacode.org/wiki/Category:Brainf***), [Befunge](https://rosettacode.org/wiki/Category:Befunge) and the particularly migraine-inducing [Malbolge](https://rosettacode.org/wiki/Hello_world/Text#Malbolge). Here’s a list of a few others, ranging from the amusing to the interesting, to the outright obtuse. Include these on your CV/Resume at your own risk.

#### INTERCAL

The original esoteric programming language was invented in 1972, making it as old as C. It was introduced as a parody of programming practices prevalent at the time, but its continued survival to this day suggests it is still as relevant as ever.

On top of an obtuse syntax, INTERCAL confuses its users even further by requiring them to use the keyword `PLEASE` every so often, else the program refuses to run. However, being overly polite backfires — saying ‘please’ too frequently will also result in an error. Of course, this eccentricity was not officially documented, because that’d just be too helpful.

Here’s an [infinite loop](https://rosettacode.org/wiki/Loops/Infinite#Intercal), written in INTERCAL:

<pre name="7c2e" id="7c2e" class="graf graf--pre graf-after--p">NOTE THIS IS INTERCAL  
       **PLEASE** ,1 <- #5  
       **DO** ,1 SUB #1 <- #54  
       **DO** ,1 SUB #2 <- #192  
       **DO** ,1 SUB #3 <- #136  
       **PLEASE** ,1 SUB #4 <- #208  
       **DO** ,1 SUB #5 <- #98  
       **DO** **COME** **FROM** **(**1**)**  
       **DO** **READ** **OUT** ,1  
**(**2**)**    **DO** ,1 SUB #1 <- #134  
**(**1**)**    **PLEASE** **ABSTAIN** **FROM** **(**2**)**</pre>

#### Beeswax

This is a conceptually interesting language, which takes the movement of bees around honeycomb as inspiration for the movement of pointers across instructions.

Beeswax is capable of arithmetic, reading/writing files, and even modifying its own source code. Below is a program that calculates [n-factorial](https://rosettacode.org/wiki/Factorial#beeswax) (n!) of a user-input integer.

<pre name="ea65" id="ea65" class="graf graf--pre graf-after--p">       p      <  
_1FT"pF>M"p~.~d  
     >Pd  >~{;</pre>

#### Chef

This is perhaps my favorite of the languages I found on Rosetta Code. I’d previously read about it elsewhere, but hadn’t seen anything like the range of examples provided here.

Unlike most programming languages, Chef reads almost completely naturally, as each program is formatted much like a recipe (hence the name!). For completeness, it also refers to variables, instructions and data structures with cooking-related names, such as “mixing bowl”, “refrigerator”, “mix”, “chop” etc. Why not?

Here’s a sample program that calculates the [sum and product](https://rosettacode.org/wiki/Sum_and_product_of_an_array#Chef) of an array of numbers.

<pre name="f6b8" id="f6b8" class="graf graf--pre graf-after--p">Sum and Product of Numbers as a Piece of Cake.  

This recipe sums N given numbers.  

Ingredients.  
1 N  
0 sum  
1 product  
1 number  

Method.  
Put sum into 1st mixing bowl.  
Put product into 2nd mixing bowl.  
Take N from refrigerator.  
Chop N.  
Take number from refrigerator.  
Add number into 1st mixing bowl.  
Combine number into 2nd mixing bowl.  
Chop N until choped.  
Pour contents of 2nd mixing bowl into the baking dish.  
Pour contents of 1st mixing bowl into the baking dish.  

Serves 1.</pre>

#### Golfscript

Familiar to fans of [code golf](http://codegolf.stackexchange.com/) (a fantastically geeky hobby in which participants try to solve programming puzzles in as few bytes of code as possible), Golfscript is a language designed to do a lot with a little.

It certainly achieves this goal, and allows its users to solve complex puzzles very concisely. Its [website](http://www.golfscript.com/golfscript/index.html) tells us this brevity is attained through ‘using single symbols to represent high level operations’.

Would you use it in a production setting? Maybe, if you were a seasoned code golfer _and_ had no regard for the sanity of any successor to your project. Otherwise… probably not.

Rosetta Code has several nice examples of Golfscript, and since it manages to be so damn concise, I’ve included three of them here:

<pre name="fac6" id="fac6" class="graf graf--pre graf-after--p">[2 4 3 1 2]$   #[Sort an integer array](https://rosettacode.org/wiki/Sort_an_integer_array#Golfscript)</pre>

<pre name="106f" id="106f" class="graf graf--pre graf-after--pre">[296,{3/)}%-1%["No more"]+[" bottles":b]294*[b-1<]2*+[b]+[" of beer on the wall\n".8<"\nTake one down, pass it around\n"+1$n+]99*]zip    [#99 Green Bottles Lyrics](https://rosettacode.org/wiki/99_Bottles_of_Beer#Golfscript)</pre>

<pre name="693d" id="693d" class="graf graf--pre graf-after--pre">[{"close"}100*]:d;  
10,{)2?(.d<\["open"]\)d>++:d;}/  
[100,{)"door "\+" is"+}%d]zip  
{" "*puts}/    [#100 Doors Challenge](https://rosettacode.org/wiki/100_doors)</pre>

#### Hoon

Hoon is fascinating in that, although some would class it as an esolang, it does actually serve a practical purpose. It can be used to program web services on Urbit, which describes itself as a ‘secure peer-to-peer network of personal servers’.

Take a look at the [‘greatest element’ example](https://rosettacode.org/wiki/Greatest_element_of_a_list#Hoon) below.

Hoon is described as Lisp-y, and note the two-character symbols at the start of each line. These ‘runes’ are used in place of reserved keywords, which is a great concept, but does impact readability for those unfamiliar with its logic, and probably qualifies Hoon as somewhat esoteric.

<pre name="73a2" id="73a2" class="graf graf--pre graf-after--p">:-  %say  
|=  [^ [a=(list ,@) ~] ~]  
:-  %noun  
  (snag 0 (sort a gte))</pre>

<pre name="cf6d" id="cf6d" class="graf graf--pre graf-after--pre">> +max [1 2 3 ~]  
3</pre>

#### Piet

By far the most unique language I came across was [Piet](http://www.dangermouse.net/esoteric/piet.html), named after the 20th Century Dutch artist, Piet Mondrian.

It follows one highly unusual design principle: Program code should be in the form of abstract art. How is this achieved? The solution is nothing short of genius.

Integers are represented by the number of ‘codels’ in a contiguous block of color. The pointer starts in the top-left corner, and moves around the image. Every time it encounters a color change, an instruction is executed. The exact instruction is specified by the changes in both hue and brightness.

Mind = Blown.



![](https://cdn-images-1.medium.com/max/1600/0*oBQeLzGzr6_B8iNx.gif)

“Hello World” via [Rosetta Code](http://rosettacode.org/wiki/Factorial#Piet)



### Playing With Arrays

One thing that caught my attention was the number of array-based languages there are out there. [Array-based programming](https://en.wikipedia.org/wiki/Array_programming) has been around since the early 1960’s, with the invention of APL, and although they’re not exactly mainstream, there are plenty of offshoots still used to various extents today. These languages all have a lot in common, so I’ll spare you too much detail, but they’re interesting in just how concise they can be.

#### J

J was invented by Kenneth Iverson, who was also the inventor of APL. J is a very terse language, letting you get a lot done with very few lines of code.

Below is a [K-means clustering algorithm](http://rosettacode.org/wiki/K-means%2B%2B_clustering). For comparison, the same example in C runs to 184 lines.

<pre name="d3ed" id="d3ed" class="graf graf--pre graf-after--p">_NB.  Selection of initial centroids, per K-means++_  
   initialCentroids     =:  (] , randomCentroid)^:(<:@:]`(,:@:seedCentroid@:[))~  
     seedCentroid       =:  {~ ?@#  
     randomCentroid     =:  [ {~ [: wghtProb [: <./ distance/~  
       distance         =:  +/&.:*:@:-"**1**  _NB.  Extra credit #3 (N-dimensional is the same as 2-dimensional in J)_  
       wghtProb         =:  **1**&$: : ((%{:)@:(+/\)@:] I. [ ?@$ 0:)"**0** **1** _NB.  Due to Roger Hui http://j.mp/lj5Pnt_  

   _NB.  Having selected the initial centroids, the standard K-means algo follows_  
   centroids            =:  ([ mean/.~ closestCentroid)^:(]`_:`initialCentroids)  
     closestCentroid    =:  [: (i.<./)"**1** distance/  
     mean               =:  +/ % #</pre>

#### K, q

These two languages were both developed commercially by [Kx Systems](https://kx.com/). Both are APL-like, array-based languages that have applications in finance and big data. q is wrapped around K, and provides enhanced readability.

I’ve included a couple of examples of each below. These are super-concise languages, and would no doubt be good for a round of code golf, if that’s what you’re into.

<pre name="abfc" id="abfc" class="graf graf--pre graf-after--p">[/ 1-D Cellular automata in K](http://rosettacode.org/wiki/One-dimensional_cellular_automata)  
f:{2=+/(0,x,0)@(!#x)+/:!3}</pre>

<pre name="77ef" id="77ef" class="graf graf--pre graf-after--pre">[/ Anagrams in K](http://rosettacode.org/wiki/Anagrams#K)  
{x@&a=|/a:#:'x}{x g@&1<#:'g:={x@<x}'x}0::`unixdict.txt</pre>

<pre name="7492" id="7492" class="graf graf--pre graf-after--pre">[/ Pascal's Triangle in q](http://rosettacode.org/wiki/Pascal%27s_triangle#q)  
pascal:**{(**x-**1){0**+':x,**0}**\**1}**</pre>

<pre name="fa7c" id="fa7c" class="graf graf--pre graf-after--pre">[/ 100 Doors Challenge in q](http://rosettacode.org/wiki/100_doors#Q)  
`closed`open **(1**+**til** **100)** **in** `int$xexp**[**;2**]** **1**+**til** **10**</pre>

#### Klong

Klong is similar to K and q, but its [website](http://t3x.org/klong/index.html) claims it is less ambiguous. Judge for yourself — below is a [“Middle Three Digits”](http://rosettacode.org/wiki/Middle_three_digits) solution written in Klong.

<pre name="8b53" id="8b53" class="graf graf--pre graf-after--p">items::[123 12345 1234567 987654321 10001 -10001 -123 -100 100 -12345 1 2 -1 -10 2002 -2002 0]  

mid3::{[d k];:[3>k::#$#x;"small":|0=k!2;"even";(-d)_(d::_(k%2)-1)_$#x]}  
.p(mid3'items)</pre>

#### IDL

One more array-based language for you. IDL (Interactive Data Language), around since 1977, has been used by organizations including NASA and ESA. In fact, IDL found itself something of a niche in space research, and it was once used to help technicians repair the Hubble Space Telescope.

A more down-to-earth application is this function which generates a [Sierpinski triangle](http://rosettacode.org/wiki/Sierpinski_triangle).

<pre name="d247" id="d247" class="graf graf--pre graf-after--p">pro sierp,n  
  s = **(**t = bytarr**(3**+**2**^**(**n+**1))**+32b**)**  
  t**[2**^n+**1]** = 42b    
  for lines = **1**,**2**^n do begin  
        print,**string(** **(**s = t**)** **)**  
        for i=**1**,n_elements**(**t**)**-**2** do if s**[**i-**1]** eq s**[**i+**1]** then t**[**i**]**=32b else t**[**i**]**=42b  
  end  
end</pre>

### Up-and-Coming?

Of course, some languages don’t see much use simply due to the fact they haven’t been around very long. Whether or not they catch on depends on a variety of factors, and the reality is that the vast majority won’t see widespread adoption. But you’ve gotta start somewhere, right?

Here are a selection of languages from Rosetta’s archives that are all relative newcomers to the show.

#### Crystal

[This project](https://crystal-lang.org/) is still in alpha-testing, so don’t switch over to it just yet — but keep an eye out. Influenced by the writing efficiency of Ruby and the running efficiency of C, Crystal’s authors seem set on producing an all-round best-of-both-worlds language. Time will tell if they’re successful at doing so.

Below is a ‘[quick-sort](http://rosettacode.org/wiki/Sorting_algorithms/Quicksort#Crystal)’ algorithm written in Crystal — why not have a go [running it yourself](https://play.crystal-lang.org/#/cr)?

<pre name="1250" id="1250" class="graf graf--pre graf-after--p">**def** quick_sort**(**a : **Array(**Int32**))** : **Array(**Int32**)**  
  **return** a **if** a.**size** <= **1**  
  **p** = a**[0]**  
  lt, rt = a**[1** .. -**1]**.**partition** **{** |x| x < **p** **}**  
  **return** quick_sort**(**lt**)** + **[p]** + quick_sort**(**rt**)**  
**end**  

a = **[7**, **6**, **5**, **9**, **8**, **4**, **3**, **1**, **2**, **0]**  
**puts** quick_sort**(**a**)**</pre>

#### Frege

Functional programming is the new big thing, and Frege is a purely functional language first introduced in 2011\. It’s been described as “Haskell for the Java Virtual Machine”. Named after the mathematical logician Gottlob Frege, this language compiles to Java, and is also available to [try out online](http://try.frege-lang.org/).

Below is a solution the [“99 Bottles” challenge](http://rosettacode.org/wiki/99_Bottles_of_Beer#Frege). It is virtually identical to the same solution in Haskell, which is to be expected.

<pre name="0b15" id="0b15" class="graf graf--pre graf-after--p">module Beer where  

main = mapM_ (putStrLn . beer) [99, 98 .. 0]  
beer 1 = "1 bottle of beer on the wall\n1 bottle of beer\nTake one down, pass it around"  
beer 0 = "better go to the store and buy some more."  
beer v = show v ++ " bottles of beer on the wall\n"  
                ++ show v  
                ++ " bottles of beer\nTake one down, pass it around\n"  
                ++ head (lines $ beer $ v-1) ++ "\n"</pre>

#### Futhark

Although suffering from a lack of comprehensive documentation, the Futhark project nevertheless seems like a [promising line of research](https://futhark-lang.org/). The aim is to compile to high-performance Graphical Processing Unit (GPU) code — but not for producing graphical output.

Instead, Futhark’s goal is to harness the power of the GPU to carry out computationally-intensive procedures that would ordinarily take much longer using a more conventional language. Below is an example of a function used to calculate a [geometric mean](http://rosettacode.org/wiki/Arithmetic-geometric_mean#Futhark).

<pre name="2530" id="2530" class="graf graf--pre graf-after--p">include futlib.numeric</pre>

<pre name="bcbd" id="bcbd" class="graf graf--pre graf-after--pre">fun agm(a: f64, g: f64): f64 =  
  let eps = 1.0E-16  
  loop ((a,g)) = while abs(a-g) > eps do  
    ((a+g) / 2.0,  
     F64.sqrt (a*g))  
  in a</pre>

#### Sidef

Sidef is approaching its fourth year of active development, having started out as a project in March 2013\. It seems well advanced and [very well documented](https://trizen.gitbooks.io/sidef-lang/content/), and has over 600 examples of coding solutions on Rosetta Code.

Sidef is mostly used for research purposes, and looks to explore both OOP and functional programming. Personally, I really like the look of it. The example below shows it in action finding the [intersection of two lines](http://rosettacode.org/wiki/Find_the_intersection_of_two_lines#Sidef).

<pre name="447c" id="447c" class="graf graf--pre graf-after--p">func det**(**a, b, c, d**)** **{** a*d - b*c **}**  

func intersection**(**ax, ay, bx, by,  
                  cx, cy, dx, dy**)** **{**  

    var detAB = det**(**ax,ay, bx,by**)**  
    var detCD = det**(**cx,cy, dx,dy**)**  

    var ΔxAB = **(**ax - bx**)**  
    var ΔyAB = **(**ay - by**)**  
    var ΔxCD = **(**cx - dx**)**  
    var ΔyCD = **(**cy - dy**)**  

    var x_numerator = det**(**detAB, ΔxAB, detCD, ΔxCD**)**  
    var y_numerator = det**(**detAB, ΔyAB, detCD, ΔyCD**)**  
    var denominator = det**(** ΔxAB, ΔyAB,  ΔxCD, ΔyCD**)**  

    denominator == **0** && **return** 'lines are parallel'  
    **[**x_numerator / denominator, y_numerator / denominator**]**  
**}**</pre>

<pre name="fcdb" id="fcdb" class="graf graf--pre graf-after--pre">say **(**'Intersection point: ', intersection**(4**,**0**, **6**,**10**, **0**,**3**, **10**,**7))**</pre>

<pre name="db70" id="db70" class="graf graf--pre graf-after--pre">**>** Intersection point: [5, 5]</pre>

#### Sparkling

Like Sidef, this language started out in 2013\. Its design has been inspired by features of C, Python and Lua — and a disdain for several features of JavaScript.

It aims to be a lightweight and extensible scripting language that runs pretty much anywhere. Below is a [number guessing game](http://rosettacode.org/wiki/Guess_the_number/With_feedback#Sparkling), which you can try and get working in your browser [here](https://h2co3.github.io/).

<pre name="4b59" id="4b59" class="graf graf--pre graf-after--p">printf("Lower bound: ");  
let lowerBound = toint(getline());  

printf("Upper bound: ");  
let upperBound = toint(getline());  

assert(upperBound > lowerBound, "upper bound must be greater than lower bound");  

seed(time());  
let n = floor(random() * (upperBound - lowerBound) + lowerBound);  
var guess;  

print();  

while true {  
    printf("Your guess: ");  
    guess = toint(getline());  

    if guess < n {  
        print("too low");  
    } else if guess > n {  
        print("too high");  
    } else {  
        print("You guessed it!");  
        break;  
    }  
}</pre>

### Noah’s Ark

One more category for you — there were loads of potential languages and I couldn’t possibly get through them all to pick out every interesting example. If you spot any I may have missed, please leave a response below!

One thing I did notice was that a lot of languages were named after animals. Is there an explanation for this?!

I won’t go into detail, but here’s a quick run-through to finish up with:

#### Cat, Kitten

Cat is described as a functional language, but appears to be no longer in existence. However, Kitten seems to be currently [under development](http://kittenlang.org/), and calls itself a successor to Cat. Influenced heavily by Haskell, but aims to be more accessible.

<pre name="47e8" id="47e8" class="graf graf--pre graf-after--p">"Hello world!" writeln    //[Cat](http://rosettacode.org/wiki/Category:Cat)</pre>

<pre name="8add" id="8add" class="graf graf--pre graf-after--pre">"Hello world!" say     //[Kitten](http://rosettacode.org/wiki/Hello_world/Text#Kitten)</pre>

#### Cobra

OOP language, influenced by Python, C#, Eiffel and Objective-C.

<pre name="e1ef" id="e1ef" class="graf graf--pre graf-after--p">class Hello  
    def main  
        print 'Hello world!'</pre>

#### ><> (“Fish”)

Another multidimensional esolang, if you’re into that kind of thing.

<pre name="7f89" id="7f89" class="graf graf--pre graf-after--p">!v"Hello world!"r!  
 >l?!;o</pre>

#### Heron

Inspired by C++, Python and Pascal, but no commits since 2012, so appears to be no longer under active development. Its only sample on Rosetta is a lengthy solution to the [N-queens problem](http://rosettacode.org/wiki/N-queens_problem). For brevity, I’ve inferred a simple “Hello world!” program to show here instead.

<pre name="157e" id="157e" class="graf graf--pre graf-after--p">Main() {  
   WriteLine("Hello world!");  
}</pre>

#### Lobster

A game programming language that aims to be readily portable across platforms. Appears to be under [active development](http://strlen.com/lobster).

<pre name="83a4" id="83a4" class="graf graf--pre graf-after--p">print "Hello world!"</pre>

#### Panda

The [website](http://pandalang.org/) states that Panda aims to be simple enough that a Panda could program it. I’ve no idea how good Panda’s are at coding, though, so I’m still in the dark about that one…

<pre name="9078" id="9078" class="graf graf--pre graf-after--p">say("Hello world!")</pre>

#### Pony

With influences ranging from C++ to Erlang, Pony looks to be an interesting project with [thorough tutorial](https://tutorial.ponylang.org/).

<pre name="b54b" id="b54b" class="graf graf--pre graf-after--p">actor Main  
  new create(env: Env) =>  
    env.out.print("Hello world!")</pre>

#### Salmon

[Salmon](http://rosettacode.org/wiki/Category:Salmon) aims to intermix the writing of both low-level and high-level code.

<pre name="7aa2" id="7aa2" class="graf graf--pre graf-after--p">"Hello world!"!</pre>

<pre name="b3dc" id="b3dc" class="graf graf--pre graf-after--pre">print("Hello world!\n");</pre>

<pre name="6202" id="6202" class="graf graf--pre graf-after--pre">standard_output.print("Hello world!\n");</pre>

#### Squirrel

[Squirrel](http://squirrel-lang.org/) is a lightweight scripting language that has been embedded in games like _Left 4 Dead 2_, _Portal 2_ and _CS:GO_.

<pre name="34e2" id="34e2" class="graf graf--pre graf-after--p">print("Hello world!");</pre>

### Phew!

That was a whistle-stop tour! If you’ve made it this far and enjoyed the ride (or spotted a glaring, glaring error), leave a response underneath — I’ll try and reply asap! Thanks for reading!

#### If you want to dive deeper:

*   [Rosetta Code](http://rosettacode.org/wiki/Rosetta_Code)
*   [PYPL](http://pypl.github.io/PYPL.html)
*   [R-Fiddle](http://www.r-fiddle.org/)

Thank you for reading!








