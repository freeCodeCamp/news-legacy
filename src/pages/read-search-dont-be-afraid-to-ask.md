---
author: Beth Qiang
authorTwitter: https://twitter.com/BethQiang
authorFacebook: none
title: "Read, Search, (Don’t Be Afraid to) Ask"
subTitle: "Coding is a journey into ambiguity...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*WHsS88_D5RYVlYc5VUvNbQ.jpeg
url: https://medium.freecodecamp.org/read-search-dont-be-afraid-to-ask-743a23c411b4
id: read-search-dont-be-afraid-to-ask-743a23c411b4
date: 2016-10-24T23:41:20.535Z
tags: [
  "Programming",
  "Web Development",
  "Life Lessons",
  "Learning",
  "Tech"
]
---
# Read, Search, (Don’t Be Afraid to) Ask







![](https://cdn-images-1.medium.com/max/2000/1*WHsS88_D5RYVlYc5VUvNbQ.jpeg)







> “As engineers and as developers, we’re paid to be frustrated…at the same time, we’re always in school. We’re always learning.”

> — Carlos Lazos, [Episode 1 of the CodeNewbie Podcast](http://www.codenewbie.org/podcast/ep-1-bootcamps-water-coolers-and-hiring-devs)

Coding is a journey into ambiguity.

Whether you’re designing a RESTful API, scaling an app to thousands of users, or just trying to position something properly with CSS, there will always be things that you don’t know.

The next time you’re stuck and don’t know how to move forward, try using Free Code Camp’s “Read-Search-Ask” method. As its name name implies, you:

1.  **read** the documentation or error
2.  **search** Google
3.  **ask** for help — without being afraid to ask!

Let’s dive deeper into each of these.

### Read

If you know you need to use a certain method, but don’t know how to implement it, the documentation is a great place to start. If you’re not sure what method you need, you can often discover a solution just by clicking around in the documentation.

If you’re getting errors, read the error! Try to figure out what it’s trying to say. If you’re not getting an error, but don’t really know what’s happening, you can try to debug via the console.log() method.

When I was building out my Free Code Camp apps and not getting the results I expected, I’d console log the results of almost everything: if statements, function return statements, click methods, and timing methods.

One helpful tool for this is your browser’s console. If you’re working in CodePen, it also contains a console.

If you follow any specific blogs (CSS Tricks is one I consult often for CSS), go to the blog and see if it has articles to help with concepts you’re struggling with.

If you’re still stuck, it may be time to turn to Google.

### Search

Google will quickly become your best friend, if it isn’t already. But Google can sometimes become that annoying friend that you have to poke and prod a bit to get useful answers out of. To get the most out of this friendship, there are a few things to keep in mind.

One of these is that a lot of the time — especially once you start building out apps — you won’t get exactly the answer you need to magically solve all of your problems. You’ll usually have to take what you’ve learned, then apply it to your current situation.

#### Be Specific, Be Concise

Another thing to keep in mind is how to structure your searches so that you’re able to efficiently find solutions to your specific problems.

For example, attempting to replace a single character at a specific position in a string is a problem that a lot of new coders run into. To solve this problem, you could Google numerous things.

“I want to change a thing in a string” results in a myriad of results.



![](https://cdn-images-1.medium.com/max/1600/1*J7LFVMRp4O7k05ScBbvGjg.png)



You get everything from substrings to R to “10 cool ways to get more from Word’s Find and Replace” (which, as a result of this search, I ended up bookmarking to read later). Not exactly what we’re looking for, though.

When Googling — especially when it comes to programming problems — the convention that a lot of programmers tend to follow is:

> [programming language] [verb] [keywords]

Let’s try that on our issue. If we enter “javascript replace character in string”, we get the following.



![](https://cdn-images-1.medium.com/max/1600/1*SqJewcOrIucPnQCljQdTJw.png)



That seems a lot closer to what we’re looking for!

At this point, I’ll click through the first few entries to see if they’ll be helpful or not. If not, I’ll try to parse them for extra keywords that may help.

So, in our example, we just want to replace a character at a specific position, we don’t necessarily need regular expressions.

The fourth search result is “How do I replace a character at a particular index in JavaScript,” so I’d click on that, then discover that strings are immutable, and that you can’t change just one character!

If I still have questions after that, I might add “at an index” to my search, and try doing another one.

#### Stack Overflow

Stack Overflow results may comprise of a decent chunk of your Google search. It’s a fantastic resource that contains answers to an enormous variety of programming questions. Usually, the question-asker will have already selected the answer that worked best for them, and then that answer will show up at the top of the results with a green check mark.

What I’ll almost always do, though, is go through all of the answers that have been posted, including the comments. These sometimes have some interesting discussions, and other times have people outright saying, “this is wrong” or “this is a bad practice.”

Once I know my options and the pros and cons of each, I’ll go about trying to implement them.

### (Don’t Be Afraid to) Ask

When you’ve been searching in circles for a while and haven’t come up with anything that works, it might be time to ask a real human being.

Real human beings can come in all sorts of forms:

*   your friends (if you have friends who code)
*   meetup groups (if you go to meetups)
*   fellow campers on the Free Code Camp Gitter channels and forums
*   any Slack or Facebook groups you may be a part of, among others

Before you ask, though, you should attempt to structure your question to optimize for both your time and the time of the person you’re asking for help.

“My app is broken, what do I do?” or “I can’t get this feature to work, what do I do?” aren’t very helpful to anyone.

Understand the problem that you’re experiencing. Explain what you expect your code to do, then compare it with what it’s actually doing. Explain what you’ve tried so far, and include code snippets if you think they will help. (Most of the time, they will.)

When I first started the curriculum, I was afraid to ask questions in the forums or chat rooms, for two reasons:

One boiled down to pride: I felt like I _should_ be able to figure out why my code was doing what it was doing. (“I’m a smart and capable human being. I’m going to figure this out!”)

The second reason was insecurity. I was nervous that people wouldn’t respond, or that no one would want to help me, or that their explanation would go over my head, or I didn’t want to ask for clarification and take even more time out of their day, or … [insert every excuse ever here].

I’m glad to say that I was most definitely wrong about every excuse I could think of. Free Code Camp’s community is composed of people who are very friendly, knowledgeable, and patient.

Once, someone spent a couple of hours with me while I was trying to simultaneously understand a concept and figure out a bug. He was patient throughout it all.

I’ve never had someone talk down to me or think I’m dumb or incapable. I’ve never had someone not answer one of my questions, however simple it may have seemed.

Chances are, if someone is answering questions on the forums or in the chat room, they’re specifically doing so because they want to help other people out!

As a bonus, sometimes clearly articulating what your issue is allows you to see what’s wrong. There have been multiple times when I’ve asked a question, only to immediately recognize what I needed to do next. (I then thank the person, and they respond back, “Well, I didn’t _actually_ do anything…”)

### In Summary

The Read, Search, Ask method is all about optimizing for your own time and the time of time of those people who would help you. It encourages you to learn and to find solutions to problems on your own before consulting others. If you tried doing it on your own, and haven’t gotten anywhere, though — don’t be afraid to ask for help!

### Helpful Links:

[How to Start When you’re Stuck](http://forum.freecodecamp.com/t/how-to-start-when-you-are-stuck/19427/4)

[Mozilla’s JavaScript documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[jQuery’s Documentation](http://api.jquery.com/)

[An introduction to debugging JavaScript](http://www.w3schools.com/js/js_debugging.asp)

The [main Free Code Camp Gitter chat room](https://gitter.im/FreeCodeCamp/FreeCodeCamp) (there are other rooms with more specific purposes, such as getting help with front-end projects, or finding someone to pair program with, as well)

[Free Code Camp’s Forum](http://forum.freecodecamp.com/)

In addition to online channels, Free Code Camp has [meetups and Facebook groups in most major cities](http://forum.freecodecamp.com/t/free-code-camp-city-based-local-groups/19574/34). I’m involved in a couple in my city. Through them, I’ve been able to meet people, code with them, and find people to go to other meetups with!








