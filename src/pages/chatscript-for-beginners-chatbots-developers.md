---
author: Giorgio Robino
authorTwitter: none
authorFacebook: none
title: "How to build your first chatbot using ChatScript"
subTitle: "Chatbots can help you get things done right inside chat tools like Facebook Messenger, Telegram Messenger, Slack, etc, etc. Just say the ..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*tC6objBcZbzBQwS1wrSyYA.png
url: https://medium.freecodecamp.org/chatscript-for-beginners-chatbots-developers-c58bb591da8
id: chatscript-for-beginners-chatbots-developers-c58bb591da8
date: 2016-08-02T17:49:00.071Z
tags: [
  "Programming",
  "Chatbots",
  "Web Development",
  "Chatscript",
  "Machine Learning"
]
---
# How to build your first chatbot using ChatScript

Chatbots can help you get things done right inside chat tools like Facebook Messenger, Telegram Messenger, Slack, etc, etc. Just say the word and your chatbot will deploy your latest build, or order you a pizza.

And there’s a special tool for building chatbots that’s been around for quite some time. It’s called ChatScript. And like Slack, it started out as just a small part of a video game.

Back in 2009, [Bruce Wilcox](http://brilligunderstanding.com/aboutus.html) was working as a game developer and artificial intelligence researcher. His wife, [Sue Wilcox](http://brilligunderstanding.com/aboutus.html), wanted to model virtual characters for her interactive fiction games. Together, they built what ultimately became ChatScript.



![](https://cdn-images-1.medium.com/max/1600/1*tC6objBcZbzBQwS1wrSyYA.png)

Sue Wilcox (source: [http://brilligunderstanding.com/aboutus.html](http://brilligunderstanding.com/aboutus.html))



This natural language processing engine + dialog flow scripting platform helped Bruce win the [Loebner AI Prize](http://www.loebner.net/Prizef/loebner-prize.html) three times.



![](https://cdn-images-1.medium.com/max/1600/1*iLgwlJ18CFWNh27cjZOwQA.jpeg)

[Watch a talk by Bruce Wilcox](http://www.fundacionareces.tv/watch/50a63327c31997630a020000)



Bruce still develops and maintains the project today. It’s written in C and C++, and is open source. In fact, version 6.8 [just came out a few weeks ago](https://github.com/bwilcox-1234/ChatScript/).

**ChatScript is one of few OPENSOURCE chatbots NLProc engines!**

Let’s dive into the basics of [ChatScript](https://github.com/bwilcox-1234/ChatScript) and meet a chatbot named Harry.

### Installing ChatScript

Some of these steps may be a bit different depending on what operating system you’re using. **I’m using Linux**. You don’t actually have to go through these steps to enjoy this article if you don’t want to. Just read along.

#### Step 1: Install the system components on your local computer

First of all clone the ChatScript GitHub repository:

<pre name="b289" id="b289" class="graf graf--pre graf-after--p">$ git clone [https://github.com/bwilcox-1234/ChatScript](https://github.com/bwilcox-1234/ChatScript)</pre>

This will create a ChatScript directory, which will contain these subdirectories:

<pre name="22d5" id="22d5" class="graf graf--pre graf-after--p">$ cd ChatScript/  
$ ls -d1 */</pre>

<pre name="79d9" id="79d9" class="graf graf--pre graf-after--pre">**BINARIES/**  
DICT/  
**DOCUMENTATION/** LINUX/  
LIVEDATA/  
LOEBNERVS2010/  
**LOGS/** MAC/  
**RAWDATA/** REGRESS/  
SERVER BATCH FILES/  
**SRC/** SUBLIME TEXT EDITOR/  
TMP/  
TOPIC/  
USERS/  
VERIFY/  
VS2010/  
VS2015/  
WEBINTERFACE/</pre>

*   DOCUMENTATION contains [wiki documentation files](https://github.com/bwilcox-1234/ChatScript/blob/master/WIKI/README.md).

> BTW, I personally contributed to update all the original documentation in markdown format to be read online and from command line when developing.❤

*   RAWDATA contains a subdirectory for each bot. By default, the platform comes with a default bot named Harry, who is located at RAWDATA/HARRY.

BTW, please remember to set LinuxChatScript64 executable:

    $ chmod +x ChatScript/BINARIES/LinuxChatScript64

> Note: obviously here above I’ considering the Linux OS environment.   
> More info about Linux, MacOS or Windows installation [here](https://github.com/bwilcox-1234/ChatScript#getting-started).

#### Step 2: To run CS engine in standalone mode:

    $ BINARIES/LinuxChatScript64 local

Running the engine will launch Harry, with whom we can then talk:

<pre name="b023" id="b023" class="graf graf--pre graf-after--p">ChatScript EVSERVER Version 6.8  64 bit LINUX compiled Aug 16 2016 17:35:43 host=local  
Params:   dict:720895 fact:800000 text:70000kb hash:50000  
          buffer:22x80kb cache:1x5000kb userfacts:100  
WordNet: dict=201350  fact=85710  stext=12703744 Jul26'16-21:58:46  
Build0:  dict=67726  fact=130289  stext=1145656 Jul31'16-13:45:49 0  
Build1:  dict=167  fact=15  stext=211304 Jul31'16-13:45:44 harry  
Used 53MB: dict 269,244 (23693kb) hashdepth 18/1 fact 216,014 (8640kb) text 14183kb  
           buffer (1760kb) cache (5000kb) POS: 918 (29kb)  
Free 79MB: dict 451,651 hash 924 fact 583,986 text 55,816KB</pre>

<pre name="1504" id="1504" class="graf graf--pre graf-after--pre">Enter user name: giorgio</pre>

<pre name="9152" id="9152" class="graf graf--pre graf-after--pre">_HARRY:  Welcome back  
giorgio: > what is your name ?  
HARRY:  My name is Harry.  
giorgio: > who is Bruce Wilcox?  
HARRY:  Bruce Wilcox (born 1951) is an artificial intelligence programmer.  
giorgio: > ok, I have to go  
HARRY:  Indeed.  
giorgio: >_ :quit  
Exiting ChatScript via Quit  
$</pre>

#### Step 3: Code and debug your chatbot scripts

Standalone mode makes for an excellent ChatScript development environment. It allows you to run interactive conversations, then interact with them using **:commands**. This is a special set of interactive command tools for testing and debugging your dialogs during the development and debug phase.

Here are a few example commands:

<pre name="617f" id="617f" class="graf graf--pre graf-after--p"># recompile the bot Harry and reset the status of conversations with user giorgio</pre>

<pre name="6f43" id="6f43" class="graf graf--pre graf-after--pre">giorgio: >:build Harry   
giorgio: >:reset</pre>

<pre name="7c86" id="7c86" class="graf graf--pre graf-after--pre"># request statistics about topic **~**pets</pre>

<pre name="2e0c" id="2e0c" class="graf graf--pre graf-after--pre">giorgio: > :topicstats ~pets  
    ~pets     gambits 2 responders 2 rejoinders 5 empties 0  
Concepts 1860 Topics 1 rules 9 empties 0  
  gambits 2  responders 2 (?: 2 s: 0  u: 0) rejoinders 5</pre>

<pre name="600c" id="600c" class="graf graf--pre graf-after--pre"># conversation ...</pre>

<pre name="ef4c" id="ef4c" class="graf graf--pre graf-after--pre">_giorgio: > do you like snakes?  
HARRY:  I love pythons except ^"Python" (the programming language)_</pre>

<pre name="124c" id="124c" class="graf graf--pre graf-after--pre"># ask the reason why a rule fired</pre>

<pre name="30f9" id="30f9" class="graf graf--pre graf-after--pre">giorgio: > :why  
~pets.2.0.5.9.0  ?:  ( << you like snake >> ) I love pythons except Python ( the programming language )  
 via ~control.5.9.0  u:  ( ) $currenttopic = %topic ^if 00m( %response  0 ) 00I{ ^nofail ( TOPIC ^rejoinder ( ) ...</pre>

Note that you can run **:commands** to show the full list of available commands.

Topics are contained in specific files. For example, the **_~_**_pets_ topic code is contained in _pets.top_ file, which looks like this:

<pre name="3eae" id="3eae" class="graf graf--pre graf-after--p">topic: ~pets (dog cat pet animal bird fish snake)</pre>

<pre name="eabb" id="eabb" class="graf graf--pre graf-after--pre">?: ( << you like snake >> )  
 I love pythons except ^"Python" (the programming language)</pre>

<pre name="d12c" id="d12c" class="graf graf--pre graf-after--pre">?: ( << you ~like ~animals >> )   
 I love all animals.</pre>

<pre name="1431" id="1431" class="graf graf--pre graf-after--pre">t: Do you have any pets?  
 #! yes  
 a: ( ~yes ) Great. You like animals.</pre>

<pre name="4eab" id="4eab" class="graf graf--pre graf-after--pre">#! no  
 a: ( ~no ) You don’t like animals?</pre>

<pre name="942f" id="942f" class="graf graf--pre graf-after--pre">#! I have two parrots  
 a: ( parrots ) Birds are nice.</pre>

<pre name="2e4e" id="2e4e" class="graf graf--pre graf-after--pre">#! I have a cat  
 a: ( cat ) I prefer dogs</pre>

<pre name="46f1" id="46f1" class="graf graf--pre graf-after--pre">#! I have a canary  
 a: ( [parrot bird canary finch swallow] ) Birds are nice.</pre>

<pre name="3f0d" id="3f0d" class="graf graf--pre graf-after--pre">t: I have a dog.</pre>

ChatScript is a rule-based engine, where rules are created by humans writers in program scripts through a process called dialog flow scripting. These use a scripting metalanguage (simply called a “script”) as their source code.

Here what a ChatScript script file looks like:

<pre name="e1f4" id="e1f4" class="graf graf--pre graf-after--p">#  
# file: food.top  
#</pre>

<pre name="5421" id="5421" class="graf graf--pre graf-after--pre">topic: ~food []</pre>

<pre name="5772" id="5772" class="graf graf--pre graf-after--pre">#! I like spinachs  
s: ( I like spinach )   
   Are you a fan of the Popeye cartoons?</pre>

<pre name="9624" id="9624" class="graf graf--pre graf-after--pre">a: ( ~yes )   
       I used to watch him as a child. Did you lust after Olive Oyl?  
     b: ( ~no ) Me neither. She was too skinny.  
     b: ( ~yes ) You probably like skinny models.</pre>

<pre name="bb42" id="bb42" class="graf graf--pre graf-after--pre">a: ( ~no ) What cartoons do you watch?  
     b: ( none ) You lead a deprived life.  
     b: ( Mickey Mouse ) The Disney icon.</pre>

<pre name="a74a" id="a74a" class="graf graf--pre graf-after--pre">#! I often eat chicken  
u: ( ![ not never rarely ] I * ~ingest * ~meat )   
   You eat meat.</pre>

<pre name="ccc1" id="ccc1" class="graf graf--pre graf-after--pre">u: ( !~negativeWords I * ~like * ~meat ) You like meat.</pre>

<pre name="50e7" id="50e7" class="graf graf--pre graf-after--pre">?: (do you eat _ [ ham eggs bacon])   
   I eat ‘_0</pre>

<pre name="4286" id="4286" class="graf graf--pre graf-after--pre">?: (do you like _* or _*)   
   I don’t like ‘_0 so I guess that means I prefer ‘_1.</pre>

<pre name="3789" id="3789" class="graf graf--pre graf-after--pre">s: ( ~like ~fruit ![~animal _bear] )   
   Vegan, you too...</pre>

<pre name="9bda" id="9bda" class="graf graf--pre graf-after--pre">?: (do you eat _~meat)   
   No, I hate _0.</pre>

<pre name="d031" id="d031" class="graf graf--pre graf-after--pre">s: ( I eat _*1 >)   
  $food = ‘_0   
  I eat oysters.</pre>

You can define your bot’s dialog flows with a script stored as a normal text file. This is much simpler than methods that other chatbot tools use, which often involve browser-based user interfaces, JSON, or XML.

Writing your scripts as a text files gives you full control over your dialog flows. You a can easily process and upgrade your conversational code with back-end scripts and tools.

For example, you could automatically update ChatScript dialog rules based on records in your database.

You could even use machine learning tools to mine conversations logs. This could reveal all kinds of opportunities for you to improve your dialog flows.

But these are topics for a future ChatScript article. I’ll leave you to go play with ChatScript on your own.

> **Please contribute to its open source codebase,**

> **and star it on GitHub!**🌟🌟🌟🌟🌟

🌟[**bwilcox-1234/ChatScript**  
_ChatScript - Natural Language tool/dialog manager_github.com](https://github.com/bwilcox-1234/ChatScript "https://github.com/bwilcox-1234/ChatScript")[](https://github.com/bwilcox-1234/ChatScript)



![](https://cdn-images-1.medium.com/max/1600/1*udZBUTECQaNAJvSXpZmBNQ.gif)

**Please tap or click “︎**❤” to help to promote this piece to others.










