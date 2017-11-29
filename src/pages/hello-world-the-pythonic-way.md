---
author: Thomas Noe
authorTwitter: none
authorFacebook: none
title: "Hello World! The Pythonic way"
subTitle: "The first program developers are often introduced to is the infamous Hello World. It doesn’t matter what language you’re using, you have ..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*FkG7dPq9aReiWXbrcmL_1g.png
url: https://medium.freecodecamp.org/hello-world-the-pythonic-way-ea006c56038c
id: hello-world-the-pythonic-way-ea006c56038c
date: 2016-04-06T07:26:11.625Z
tags: [
  "Programming",
  "Python",
  "Learning To Code",
  "Technology",
  "Learning"
]
---
# Hello World! The Pythonic way







![](https://cdn-images-1.medium.com/max/2000/1*FkG7dPq9aReiWXbrcmL_1g.png)

IRC bot in Python







### Hello world

The first program developers are often introduced to is the infamous Hello World. It doesn’t matter what language you’re using, you have probably seen one. If not in a tutorial, than out in the wild.

#### The why

This post is to celebrate [Free Code Camp](https://www.freecodecamp.com) expanding towards supporting Python, among other cool languages. Check out the [announcement](https://medium.freecodecamp.com/java-ruby-and-go-oh-my-6b5577ba2bc2) for yourself.

Note that this post isn’t meant to be a tutorial for brand new programmers. I have included links to help readers get started with Python.











* * *







### Show me some code

Enough talk. Let’s check out the way you would write Hello World in Python. Deep breath now. And off we go.

#### Python3

<pre name="042b" id="042b" class="graf graf--pre graf-after--h4">print('Hello World!');</pre>

Fascinating right? Those of you who are used to JavaScript might not be very impressed. The JS Hello World example wouldn’t be much different.

#### JavaScript

<pre name="28c4" id="28c4" class="graf graf--pre graf-after--h4">console.log('Hello World!');</pre>

#### Ruby

Ruby’s is in the same ballpark

<pre name="fa9b" id="fa9b" class="graf graf--pre graf-after--p">puts "Hello World!"</pre>

To put the simplicity of these into context let’s look at another two examples.

#### C

<pre name="5049" id="5049" class="graf graf--pre graf-after--h4">#include <stdio.h></pre>

<pre name="3d66" id="3d66" class="graf graf--pre graf-after--pre">int main(int argc, char* argv[])  
{  
    printf("Hello World!\n");  
    return 0;  
}</pre>

#### Java

<pre name="966c" id="966c" class="graf graf--pre graf-after--h4">public class HelloWorld {  
    public static void main(String[] args) {  
        System.out.prinln("Hello World!");  
    }  
}</pre>

There has been a shift in the last few years where the programming community has started to lean towards the prior three languages as introductory languages over the latter two. Perhaps these Hello World’s give you a small taste of why. What do you think?

Okay, back to Python.

### What about this Pythonic thing?

I will use this last section to skim the surface of what the word Pythonic is and we will look at a Pythonic Hello World.

#### What the hell is Pythonic?

When people think about this question, they may think of Python’s famous

<pre name="d24c" id="d24c" class="graf graf--pre graf-after--p">import this</pre>

example. Which when ran will give you this:

<pre name="890b" id="890b" class="graf graf--pre graf-after--p">Beautiful is better than ugly.  
Explicit is better than implicit.  
Simple is better than complex.  
Complex is better than complicated.  
Flat is better than nested.  
Sparse is better than dense.  
Readability counts.  
Special cases aren't special enough to break the rules.  
Although practicality beats purity.  
Errors should never pass silently.  
Unless explicitly silenced.  
In the face of ambiguity, refuse the temptation to guess.  
There should be one-- and preferably only one --obvious way to do it.  
Although that way may not be obvious at first unless you're Dutch.  
Now is better than never.  
Although never is often better than *right* now.  
If the implementation is hard to explain, it's a bad idea.  
If the implementation is easy to explain, it may be a good idea.  
Namespaces are one honking great idea -- let's do more of those!</pre>

Take from that what you will. Let’s focus on one line from the text.

> There should be one-- and preferably only one --obvious way to do it.

To me this line describes the mentality behind the word Pythonic and idiomatic Python.

If you’re falling asleep at the keyboard, at least [add this to your reading list](http://python.net/~goodger/projects/pycon/2007/idiomatic/handout.html).

#### Shouldn’t there always be ‘one way to do it?’

That’s up to you. Despite what language you use. Let’s look at an example from the Perl community (which Ruby has inherited.)

> **There’s more than one way to do it** (**TMTOWTDI** or **TIMTOWTDI**, pronounced _Tim Toady_)

[**There's more than one way to do it - Wikipedia, the free encyclopedia**  
_There's more than one way to do it ( TMTOWTDI or TIMTOWTDI, pronounced Tim Toady) is a Perl programming motto. The…_en.wikipedia.org](https://en.wikipedia.org/wiki/There%27s_more_than_one_way_to_do_it "https://en.wikipedia.org/wiki/There's_more_than_one_way_to_do_it")[](https://en.wikipedia.org/wiki/There%27s_more_than_one_way_to_do_it)

(TIL there’s a pronunciation!)

#### Back to the code

Let’s skip the rest of the philosophy lesson and dive into the Pythonic Hello World code example. I’m going to include a very basic function (_oh my!_) so it’s not so confusing when we look at the lines.

# is how you start a Python comment

<pre name="549a" id="549a" class="graf graf--pre graf-after--p"># section one  
def main():  
  print("Hello World!")</pre>

<pre name="0675" id="0675" class="graf graf--pre graf-after--pre"># section two</pre>

<pre name="f7ae" id="f7ae" class="graf graf--pre graf-after--pre">if __name__ == "__main__":  
  main()</pre>

Okay?

#### Tear it down

**Section one**

<pre name="b2f0" id="b2f0" class="graf graf--pre graf-after--p">def main():  
  print("Hello World!")</pre>

define a function that takes no arguments and doesn’t return any value named main

print Hello World! to the console when main is called

**Section two**

<pre name="0d19" id="0d19" class="graf graf--pre graf-after--p">if __name__ == "__main__":  
  main()</pre>

__name__ is assigned to the calling module…

In short:

*   if the module is imported __name__ will be the set to the importing module
*   if the file is directly ran then execute the if statement

Let’s look at one more modified example before we wrap this up

<pre name="b24e" id="b24e" class="graf graf--pre graf-after--p"># fcc-greet.py</pre>

<pre name="cff5" id="cff5" class="graf graf--pre graf-after--pre">def greet(name):  
  print("Hello {}, welcome to Free Code Camp!".format(name))</pre>

<pre name="4ac9" id="4ac9" class="graf graf--pre graf-after--pre">if __name__ == "__main__":  
  from sys import argv  
  greet(argv[1]) # first command argument</pre>

The print statement and the last line may be a little much for some newer users. Instead of explaining them I’m going to show you two different ways to use our new Python program.

The first is through the terminal/command prompt:

<pre name="d300" id="d300" class="graf graf--pre graf-after--p">$ python fcc-greet.py t3h2mas</pre>

which prints this to the console

> Hello t3h2mas, welcome to Free Code Camp!

Using `fcc-greet.py` as a module:

<pre name="3487" id="3487" class="graf graf--pre graf-after--p"># my-program.py</pre>

<pre name="64b5" id="64b5" class="graf graf--pre graf-after--pre">import fcc-greet</pre>

<pre name="0ee9" id="0ee9" class="graf graf--pre graf-after--pre">users = ["t3h2mas", "BoilingOil", "mamptecnocrata"]  
map(fcc-greet.greet, users)</pre>

_thank you to the above users for their permission to use their username :+1:_

which would output

> Hello t3h2mas, welcome to Free Code Camp!

> Hello BoilingOil, welcome to Free Code Camp!

> Hello mamptecnocrata, welcome to Free Code Camp!

That last example might have a little much going on. Just focus on the output!

That completes our example program using Pythonic idioms. We finished with a program that can be called from the prompt with a supplied argument as well being used as a module easily from different programs.

### wrap up

This concludes our small taste of idiomatic Python. This post was intended to be supplementary reading rather than a full scope tutorial. The Python community sure knows what it likes. See

_pep8 Python style guide_

[**Welcome to Python.org**  
_This document gives coding conventions for the Python code comprising the standard library in the main Python…_www.python.org](https://www.python.org/dev/peps/pep-0008/ "https://www.python.org/dev/peps/pep-0008/")[](https://www.python.org/dev/peps/pep-0008/)

_pep257_

[**Welcome to Python.org**  
_The aim of this PEP is to standardize the high-level structure of docstrings: what they should contain, and how to say…_www.python.org](https://www.python.org/dev/peps/pep-0257/ "https://www.python.org/dev/peps/pep-0257/")[](https://www.python.org/dev/peps/pep-0257/)

for more on Pythonic guides.

#### new to Python?

This looks like a good starting point

[**Getting started with python - The Python Guru**  
_Python is a general purpose programming language created by Guido Van Rossum. Python is most praised for its elegant…_thepythonguru.com](http://thepythonguru.com/getting-started-with-python/ "http://thepythonguru.com/getting-started-with-python/")[](http://thepythonguru.com/getting-started-with-python/)

Here’s a great list of tutorials…

For programmers:

[**BeginnersGuide/Programmers - Python Wiki**  
_Because this is a Wiki page, users can edit it. You are therefore free to add details of material that other Python…_wiki.python.org](https://wiki.python.org/moin/BeginnersGuide/Programmers "https://wiki.python.org/moin/BeginnersGuide/Programmers")[](https://wiki.python.org/moin/BeginnersGuide/Programmers)

For beginners

[**BeginnersGuide/NonProgrammers - Python Wiki**  
_If you've never programmed before, the tutorials on this page are recommended for you; they don't assume that you have…_wiki.python.org](https://wiki.python.org/moin/BeginnersGuide/NonProgrammers "https://wiki.python.org/moin/BeginnersGuide/NonProgrammers")[](https://wiki.python.org/moin/BeginnersGuide/NonProgrammers)

#### Python Communities

**Reddit:**

[**Python Education * /r/learnpython**  
_Subreddit for posting content, questions, and asking for general advice about learning the Python programming language._reddit.com](http://reddit.com/r/learnpython "http://reddit.com/r/learnpython")[](http://reddit.com/r/learnpython)

[**Python * /r/Python**  
_news about the dynamic, interpreted, interactive, object-oriented, extensible programming language Python_reddit.com](http://reddit.com/r/python "http://reddit.com/r/python")[](http://reddit.com/r/python)

[**learn programming * /r/learnprogramming**  
_A subreddit for all questions related to programming in any language._reddit.com](http://reddit.com/r/learnprogramming "http://reddit.com/r/learnprogramming")[](http://reddit.com/r/learnprogramming)

**Gitter:**

[**FreeCodeCamp/FreeCodeCamp**  
_Welcome to our main chat room. We have many official chat rooms for hanging out and getting help. Here's the list…_gitter.im](http://gitter.im/FreeCodeCamp/FreeCodeCamp "http://gitter.im/FreeCodeCamp/FreeCodeCamp")[](http://gitter.im/FreeCodeCamp/FreeCodeCamp)

[**FreeCodeCamp/python**  
_This is the best place to discuss Python and get help with it. Be sure to check out https://github.com/freecodecamp…_gitter.im](http://gitter.im/FreeCodeCamp/Python "http://gitter.im/FreeCodeCamp/Python")[](http://gitter.im/FreeCodeCamp/Python)

IRC:

[**Python.org -IRCGuide**  
_The official home of the Python Programming Language_www.python.org](https://www.python.org/community/irc/ "https://www.python.org/community/irc/")[](https://www.python.org/community/irc/)








