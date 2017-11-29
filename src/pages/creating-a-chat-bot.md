---
author: Rob Ellis
authorTwitter: https://twitter.com/rob_ellis
authorFacebook: none
title: "Creating a Chat Bot"
subTitle: "Human interaction has always fascinated me: social awkwardness, communication style, how knowledge is transferred, how relationships are ..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*eKThzb_Z8ve2O_NSH2WuoA.jpeg
url: https://medium.freecodecamp.org/creating-a-chat-bot-42861e6a2acd
id: creating-a-chat-bot-42861e6a2acd
date: 2014-10-14T16:26:11.505Z
tags: [
  "Programming",
  "Chatbots",
  "Tech",
  "Startup",
  "Design"
]
---
# Creating a Chat Bot

Human interaction has always fascinated me: social awkwardness, communication style, how knowledge is transferred, how relationships are built around trust, story telling and knowledge exchange.

What if a machine invoked an emotional response?

#### First the back story

I want to write about a project I have been working on, and how it has engulfed the last few years of my life, but ultimately, this post is about creating a _real_ chat bot.

Work to date has been an extension of the work done in NLP (natural language process), currently a collection of tools now forming the foundation of [Node/Natural](https://github.com/NaturalNode/natural).

My initial goal was to build a [IBM Watson](http://www.ibm.com/smarterplanet/us/en/ibmwatson/) type clone; something that could parse input in some form and sort out candidates from a data source. Initially I looked at [DBPedia](http://dbpedia.org/About) and [YAGO](http://en.wikipedia.org/wiki/YAGO_%28database%29).

I realized quickly that creating a Watson was only a secondary goal. I wanted to create something that seemed much more real - a system one could interact with, on a much more human level. Technically speaking, something that was [Turing complete](http://en.wikipedia.org/wiki/Turing_completeness).

In 2013 I did some research in language and how communication is affected by B[ig Five Personality Traits](http://en.wikipedia.org/wiki/Big_Five_personality_traits). For example people who are tired, or introverted tend to give shorter answers when conversing. I spent a fair amount of time thinking about how this would play into a Chat Bot.

I also created a project that would create a full back story for a virtual persona including;

*   day-to-day activities
*   schools attended
*   friends
*   holidays
*   places where they worked, lived, and have traveled.

The above is ideal information for generating fake accounts on social media, but it misses the human aspect — demeanour, tone, personality in writing. It drove me to think what makes two people different, what motivates us within a conversation, and how can this be programmed into a Chat Bot.

#### Where is the state of the art?

There are many types of Chat Bots, all with varying levels of complexity and strategies for tricking a human that they are not speaking to a computer.

[ELIZA](http://en.wikipedia.org/wiki/ELIZA) being the first and most well known created in 1966, would play the part of a doctor and continue to push back the conversation to the user by asking how previous responses would make one feel by trying to dig deeper to the root of the problem. It was clever and also simple.

[CleverBot](http://www.cleverbot.com/) was brought online in 1997\. It was designed to reply with input from some point from the past. Today, there are several million replies across many topics and domains. The input is sometimes on topic and relevant, and other times wildly way off topic. This approach is much like search results and without knowing the reason for asking the question in the first place, is it hard to provide accurate results.

[Eugene Goostman](http://en.wikipedia.org/wiki/Eugene_Goostman) made the news a few months back as being ‘turing complete’ which created controversy. This bot employs several tricks such as pretending to be a 13-year-old boy who’s english is his second language.

After reviewing the current landscape, it lead me to believe that fooling a human into thinking a bot is real was not because the bot was great, rather it employing silly tactics like deliberating using broken english, typos and deflection.

#### Creating a Chat Bot

In 2014 I started to focus on the [Loebner Prize](http://www.loebner.net/Prizef/loebner-prize.html), an annual competition in artificial intelligence that awards prizes to the chatterbot considered by the judges to be the most human-like.

I felt this contest was in the right vein and captured the spirit of the software I wanted to create. But unlike some past contestants, I didn’t want to fake it, the bot had to be real. No tricks.

To qualify for the Loebner Prize I need to easily pass the screener questions. Here they are for reference:

<pre name="49a4" id="49a4" class="graf graf--pre graf-after--p">My name is Bill. What is your name?  
How many letters are there in the name Bill?  
How many letters are there in my name?  
Which is larger, an apple or a watermelon?  
How much is 3 + 2?  
How much is three plus two?  
What is my name?  
If John is taller than Mary, who is the shorter?  
If it were 3:15 AM now, what time would it be in 60 minutes?  
My friend John likes to fish for trout. What does John like to fish for?  
What number comes after seventeen?  
What is the name of my friend who fishes for trout?  
What whould I use to put a nail into a wall?  
What is the 3rd letter in the alphabet?  
What time is it now?</pre>

Chat bots have to be great at answering questions, this is usually how they are challenged, and IBM’s Watson is probably the best question and answer system. However unlike Watson, we don’t need to be 100% accurate when it comes to answering questions. This is because our bot is an emotional, believable persona, not a cold, flawlessly accurate machine. We can significantly reduce the knowledge base that drives the bot, after all, nobody likes a no-it-all.



![](https://cdn-images-1.medium.com/max/1200/1*kY-05LumktLio3Z46O9T8w.jpeg)



Our chat bot needed to have a sound dialogue system as well - something that handle canned responses when we are not able to reason a reply logically. The dialogue systems would also handle other functions such as topic resolution and information flow.

### High level Architecture

When the system received input, it would try to make sense of it. If it could be reasoned with a reply would be generated, however if there was a scripted reply, I would also lean on that for the final output.

I like to imagine the bot internalizes the input, allowing time to think about it, just like a human. It may have something clever to say, but chooses to bite its tongue, and take a scripted reply over a reasoned reply.

For a completely natural chat bot the goal is to reduce the amount of scripted dialog to just a few hundred entries. This puts significant more responsibility in the reason system. Let’s break these components down a little more.

### Input Resolution

When you communicate with the bot, whether it is part of an app, game dialogue engine, or just through the command line, sentences are parsed. Each one is chunked and broken into separate message objects for the bot to interpret. Initially sentences parts are broken into separate message objects.



![](https://cdn-images-1.medium.com/max/1600/1*A8nxeDhYADSZrbg5j7XtAg.png)



The chat bot’s replies back what is buffered and streamed in one reply. I also pass the reply into the same system that generates a message object and save that data to memory for later use.

#### Message Object

This is where all the input is cleaned, normalized, parsed and analyzed. The system keeps several representations of the input for various sub-systems.

<pre name="27cd" id="27cd" class="graf graf--pre graf-after--p">>> My name is Bill.</pre>

<pre name="858f" id="858f" class="graf graf--pre graf-after--pre">I burst the punctuation, and it becomes...  
raw: "My name is Bill ."</pre>

<pre name="4db8" id="4db8" class="graf graf--pre graf-after--pre">Then break it down into individual words...  
words: ['My' 'name' 'is' 'Bill']</pre>

<pre name="be1c" id="be1c" class="graf graf--pre graf-after--pre">Then tag each word with a Parts of Speech tagger.  
taggedWords:   
  [  
    ['My','PRP/pre>], // Personal pronoun  
    ['name','NN'], // Noun  
    ['is','VBZ'],  // Verb present  
    ['Bill','NNP]  // Proper noun  
  ]  
I actually pull out the individual parts and keep them separate as well.  
nouns: ['name','bill']  
verbs: ['be']  
pronouns: ['my']  
adjectives: []  
adverbs: []</pre>

<pre name="2d9b" id="2d9b" class="graf graf--pre graf-after--pre">I also extract named entities, dates and numbers.  
names: ['Bill']  
date: null  
numbers: []</pre>

<pre name="0fc7" id="0fc7" class="graf graf--pre graf-after--pre">I check to see if it is a question, and what type.  
isQuestion: false</pre>

<pre name="8fbd" id="8fbd" class="graf graf--pre graf-after--pre">And the message sentiment, is it positive, negative or neutral?  
sentiment: 0 // neutral</pre>

The message object dissects the input and parses it a variety of ways, this is aided by other libraries such as pos.js, Normalizer, and Qtypes.

#### Normalizer

When input is received from the user it needs to be cleaned and pre-processed, and run though a library called [normalizer](https://github.com/silentrob/normalizer) . This library will convert British and Canadian spelled words to US English also expand abbreviations and contractions, and fix over 4000 mis-spelled words.

For example we expand abbreviations:

<pre name="48d6" id="48d6" class="graf graf--pre graf-after--p">Nov 1st I weighed 90 kgs. total   
November 1st I weighed 90 kilograms total</pre>

We expand contractions:

<pre name="7a46" id="7a46" class="graf graf--pre graf-after--p">I’ll listen to y’all  
I will listen to you all</pre>

We convert 1700 Canadian / British words to US words:

<pre name="1424" id="1424" class="graf graf--pre graf-after--p">armour axe coloured gold  
armor ax colored gold</pre>

We can fix up to 4000 common mis-spelled words:

<pre name="79f7" id="79f7" class="graf graf--pre graf-after--p">are we sceduled thrsday for teh restraunt  
are we scheduled Thursday for the restaurant</pre>

It is at this stage extra spacing and numbers are edited and presented in input and a other bursting related artifacts.

Once the input is cleaned it is then passed onto another library to gain more insight into the question type.

#### QTypes

After the input is normalized, we check to see if it contains a question. This has been pulled out into its own library called [qtypes](https://github.com/silentrob/qtypes). The library was inspired by work done from one team at the [TREC QA Conference](http://trec.nist.gov/data/qa.html). There are over 40 sub-classifications of how the question should be answered. Here is the [full list](http://cogcomp.cs.illinois.edu/Data/QA/QC/definition.html) for reference.

While qType tells us what kind of reply the user expects, qSubType well tell us what the question format is, this is one of: CH, WH, YN and TG:

*   CH: Choice or Alternate Question. The question is asking you to pick between two or more things. For example: Is the water **hot** or **cold**?
*   WH: Question are the most common, they come in the form of **who**, **what**, **where**, **when** or **why**.
*   YN: Yes/No Question are fairly self explanation. For example: Do you have a pencil?
*   TG: Tag Question are not really questions, but are ways of asking questions to keep the conversation open. They are statements that usually end in a pronoun, and add a positive or negative ending, for example: It’s beautiful, isn’t it? or Sally went to the store, didn’t she?

Let’s look at another message object with a question.

<pre name="6c70" id="6c70" class="graf graf--pre graf-after--p">>> What time did the train leave London?</pre>

<pre name="2fe8" id="2fe8" class="graf graf--pre graf-after--pre">isQuestion**:** **true**  
qtype**:** 'NUM:date'  
qSubType**:** 'WH'</pre>

### Reasoning System

#### Information Retrieval and History Lookup.

Once we have a message object, we try to reason about a reply starting first with questions. It is run though all 40 question types and tries to answer the question.

Given:

<pre name="2c78" id="2c78" class="graf graf--pre graf-after--p">>> My name is Bill, what is my name?</pre>

The qType is “HUM:ind” meaning Human Individual and the qSubType is “WH”.



![](https://cdn-images-1.medium.com/max/1600/1*PEZpgU7oWiTJrKulz2e1-g.png)



However in each example it is not known if the answer is in the current message object, or if it is something from the past. If there is no name present in the existing object, we are able to walk though the last 20 messages from the users history and find a likely candidate. This approach is used for all 40 question types.

#### Logic based reasoning

Some of the sample questions provided by previous Loebner contest lean on logic and expression based reasoning. Our chat bot should be able to handle these without much of a fuss.

The Message Object is able to automatically parse numeric expressions or half expressions, for example.

<pre name="8f59" id="8f59" class="graf graf--pre graf-after--p">>> What is 5 + 10? — Full expression.  
<< I think it is 15.  
>> Plus 15 more? — Half expression.  
<< It is now 30.</pre>

I always cache the previous answer if it was an expression.

The chat bot can also handle roman numeral, binary and hex decimal conversions, and pattern recognition for both linear and arithmetic or geometric sequences.

We are also able to compare simple and complex expressions:

<pre name="c6db" id="c6db" class="graf graf--pre graf-after--p">>> Which is larger, an **apple** or a **watermelon**?  
>> **John** is older than **Mary**, and **Mary** is older than **Sarah**. Which of them is the youngest?</pre>

These types of questions need to know about real world items and objects, and opposite and inverse terms, which brings us to the next section…

#### Common Sense Knowledge

I have toyed with many databases of facts and still struggle with finding the right balance. Do we want to run this software on a phone offline or plug into Googles Freebase API? Should we use a Graph Database or a more traditional RDBMS?

As of right now, this chat bot uses a [modified version of ConceptNet4 DB](https://github.com/silentrob/conceptnet) and supports over 610,000 facts and roughly 168MB. This allows us to easily resolve facts like:

<pre name="dd69" id="dd69" class="graf graf--pre graf-after--p">>> What color is the red sea?  
<< It is blue.</pre>

Along with ConceptNet, we also use scripted facts tuples that are layered in to add more depth to specific domains, this data is called upon when we need to see if two words are opposite as in “ x is older then y, who is the youngest”.

#### Natural Learning

The chat bot will learn the same way people learn- by forming trust bonds. When presented with a question to which it does not know the answer, it will ask someone it trusts to find truth similar to a child asking a parent. This conversation is usually saved and thrown back into the conversation loop with other trusted users.

#### Auto Reconciliation

When the chat bot is asked about something tangible, it may know something about it, and it may not. However rather then starting from knowledge scratch it will try to make sense of the item and see if it needs it. Given:

<pre name="4643" id="4643" class="graf graf--pre graf-after--p">>> Do you have a bike?</pre>

The chat bot will check its memory for any reference to bike, and if it does not have one, then it will ask itself if it should acquire one before answering. Should the bot acquire a bike it might also come up with a back story, or what motivated the decision.

<pre name="5dc2" id="5dc2" class="graf graf--pre graf-after--p"><< I do have a bike, I use it to get to work.</pre>

#### Relationship Management

Ideally, I would like to get to a point where the relationship with the user matures over time. For example:

<pre name="696b" id="696b" class="graf graf--pre graf-after--p">>> What are you up to tonight?  
<< Why do you want to know?</pre>

Some time passes…

<pre name="8b6d" id="8b6d" class="graf graf--pre graf-after--p">>> What are you up to tonight?  
<< I have dinner plans with my parents.</pre>

This would be implemented like a weighted reply with a relationship score or some metric that defines the current state the user / bot share.

### Scripting Engine

The scripting engine handles all dialogue that is not reasoned, otherwise known as canned responses. If input is seen to look like x, reply with y. This engine also handles changing topics, other communication flow, and knowledge exchange.



![](https://cdn-images-1.medium.com/max/1600/1*P5h_lwzUy4Pncjdu9ryj9g.jpeg)

Conversation Model — [http://vimeo.com/43677920](http://vimeo.com/43677920)



At its core, the dialogue engine is responsible for defining the topics the bot is allowed to talk about, and keep conversation guided somewhat within certain domains. While the reasoning system can handle most types of questions, the dialogue engine will manage general statements.

When conversation hits a lull, the chat bot will be able to detect it and re-engage. Knowing when someone is choosing not to answering a question, or taking an exceptionally long time to answer it is a challenge all on its own.

The dialogue engine is a mashup between some existing open source libraries, primary RiveScript and ChatScript. The goal here is to be able to create expressive triggers — phrases that match input, and deliver a meaningful reply.

For example

<pre name="c9dc" id="c9dc" class="graf graf--pre graf-after--p">+ i like you  
- aww, I like you as well.</pre>

This will only match those three words in that order. “i like you”. To be more expressive you could add some optional words.

<pre name="eb28" id="eb28" class="graf graf--pre graf-after--p">+ i (like|love) you  
- I think the world of you too.</pre>

We can also take the word they choose and pass it back to the user.

<pre name="2613" id="2613" class="graf graf--pre graf-after--p">+ i (like|love) you  
- I <cap> you too!</pre>

Now we reply with the same word they choose. We call it captured input and we can expand this furture by using WordNet synonyms.

<pre name="efae" id="efae" class="graf graf--pre graf-after--p">i ~like you  
I <cap> you too. </pre>

WordNet resolves ~like to (cotton|prefer|care for|love|please). By using this syntax you can build up more complex expressions and reduce the overall amount of scripting required to effectively communicate your message.

If you’re interested in other types of supported Syntax [here is a link.](https://gist.github.com/silentrob/3914f9544d118c64f138)

#### Plugins

This chat bot is not single purpose. It can be customized for different scenarios, and with the help of plugins you can have direct access to the message object and the user object. Here is an example of that:

<pre name="3b11" id="3b11" class="graf graf--pre graf-after--p">+ i ~like you  
+ ^doILikeUser(<cap>)</pre>

We have a plugin called “doILikeUser” in our plugin folder.

<pre name="e0da" id="e0da" class="graf graf--pre graf-after--p">exports.doILikeUser = function(cap, cb) {  
  var reply = (this.UserObj.name !== "bill") ?   
    "Well I don't" + cap + "you!" : "Yes I" + cap + "you too!";  
  cb(null, reply);  
}</pre>

In this fun example, we reply with “Yes I love you too!” only if the user’s name is Bill. Otherwise the reply is “Well I don’t love you!”

This is really the tip of what can be done with Plugins.

### Conclusion

Interacting with software at a human level is becoming more mainstream from services like Google Now, Siri, to digital switch boards and non-player characters in video games. Soon people will not be able to tell the difference between human and machine.

#### What about the Loebner Prize?

Unfortunately, I missed the cut off for 2014 as I needed to write a self-contained windows client to submit for judging. This was not going to happen given time constraints, and the current state of the scripting engine. Instead, the world gets this lovely post.

I have started open sourcing some project parts and will continue to open up more over the next few months. Please feel free to leave feedback on here, [Twitter](http://twitter.com/@rob_ellis), [HN](https://news.ycombinator.com/item?id=8454270).

#### Quick Links to projects mentioned above.

*   [Normalizer on Github](https://github.com/silentrob/normalizer)
*   [QTypes on Github](https://github.com/silentrob/qtypes)
*   [ConceptNet Interface on Github](https://github.com/silentrob/conceptnet)








