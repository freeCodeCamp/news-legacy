---
author: Carl Tashian
authorTwitter: https://twitter.com/tashian
authorFacebook: https://facebook.com/639395244
title: "How Multi-User Dungeons taught me to program"
subTitle: "“Mom, what do you want me to write? Just tell me and I’ll write a program for you.” That was me at 9, urgently tugging at my mom’s pant l..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*DeiKjabeUsFcTYtUfH-SlQ.jpeg
url: https://medium.freecodecamp.org/how-i-learned-to-program-f196a5a8bfd3
id: how-i-learned-to-program-f196a5a8bfd3
date: 2016-05-31T22:20:03.327Z
tags: [
  "Programming",
  "Game Development",
  "Tech",
  "Technology",
  "Games"
]
---
# How Multi-User Dungeons taught me to program



![](https://cdn-images-1.medium.com/max/1600/1*DeiKjabeUsFcTYtUfH-SlQ.jpeg)

Little Carl



“Mom, what do you want me to write? Just tell me and I’ll write a program for you.” That was me at 9, urgently tugging at my mom’s pant leg.

I don’t remember what, if anything, I ended up writing in BASIC on our Timex Sinclair computer, but I do remember wanting to be taken seriously — wanting to make something that would be useful to someone. I think my dad bought that computer on a whim out of a mail order catalog, which was surprising as he’s not much of a gadget guy. We hooked it up to an old 8" black and white portable TV we had. And my mom wrote a program that printed my name across the screen in an infinite loop.



![](https://cdn-images-1.medium.com/max/1600/1*0n2SM2Q8i4ftZ2QRhkao5g.gif)



The computer was calling to me. My brother and I wrote some things in BASIC on that computer, and we were even able to load and save our programs using a cassette player attached to the audio jack of the computer. We tried playing the software cassette on a regular tape player and it sounded like screeching cicadas.

It wasn’t until later, at 14, that I really got excited about programming. I became addicted to an online adventure game — a free Multi-User Dungeon (MUD) called HexOnyx. Hex was a popular virtual world with at least a hundred people playing at any given time. Though today’s MMPORGs host millions at a time, back then a few hundred people in one virtual space seemed like a lot. I made great friends there, and each night we’d battle vicious snarling wargs and Demons of Decay together in the dungeons and dark woods. The game was entirely text-based, so imagination was mandatory. Nearly 20 years later, I still have pictures in my head of some of the old stomping grounds in the game.

Every day after school was a new adventure in the MUD, until the family dinner bell pulled me back into the physical world. “I’ll be right there!” I’d shout, only to slink into the dining room much later, midway through the meal. There’s never an easy stopping point when you’re facing a four-legged lamia beast who wants your head for _her_ next meal.

For months, me and my online friends battled these computer-generated creatures obsessively. I eventually advanced my character to the point of immortality, which is the effective endpoint of the game.* Immortals can no longer battle — their role was be helpful to new players, resolve disputes, file bugs, and so on.

As I made friends with Hex’s administrators and developers, I started looking at the MUD’s design, trying to understand how it was able to trigger such a deeply immersive experience, and wondering how we might make it even better.

There were hundreds of MUDS at the time, and each one tried to differentiate itself. To differentiate Hex, the developers had created a custom, in-game world builder. Where other MUDs had to edit a flat text file with a confusing proprietary format, the in-game builder made writing worlds enjoyable and it allowed players to get involved easily. Yaz, Hex’s caretaker, had this to say:

> “The object of the game from our POV at that time was to create an environment that could be maintained from within the world. i.e.: no one would really need to run the game from the outside. We got close with the world builder.”

With the world builder, you could write a new door and a new room in the game, then step through the door into the room and see how it felt. This triggered a development boom, with many new worlds under construction, waiting to be finished and connected up with the main map of the game. These unfinished worlds were eerie places accessible only to admins and filled with bloodthirsty monsters that wandered around alone day and night.

I had no interest in building worlds; even with the world builder, it seemed like too much work. Instead I wanted to understand the mechanics of the software and make structural changes.

Unlike modern MMPORGs, most MUDs, including HexOnyx, were effectively open source. I downloaded HexOnyx’s ancestor [CircleMUD](http://www.circlemud.org/), written by Jeremy Elson, and ran it on my home computer. I’d programmed a few things in BASIC before, but CircleMUD was written in C — a whole new world for me. Just getting it to compile was a project. But gradually I figured out how to make small changes, and it was thrilling to `make` the MUD and see the impact of my changes locally.

Typically CS concepts are taught in some contrived, boring business scenario: Customers, Orders, Products, Teachers, Courses, etc. But CircleMUD was a real, working, and fairly complex piece of software that lived in the context of a great mythical world. I was learning the fundamentals of computer science by example, tweaking functions like this:

<pre name="091b" id="091b" class="graf graf--pre graf-after--p">/*  
 * Function: find_guard  
 *  
 * Returns the pointer to a guard on duty.  
 * Used by Peter, the Captain of the Royal Guard  
 */  
struct char_data *find_guard(struct char_data *chAtChar)  
{  
  struct char_data *ch;  

  for (ch = world[IN_ROOM(chAtChar)].people; ch; ch = ch->next_in_room)  
    if (!FIGHTING(ch) && member_of_royal_guard(ch))  
      return (ch);  

  return (NULL);  
}</pre>

In one short function, we invoke looping, conditionals, pointers, a linked list, an array, preprocessor macros, and structs. And Peter, the Captain of the Royal Guard.

By today’s standards, parts of Circle’s code would be judged smelly and inelegant. It had no tests, as prevention-oriented software testing hadn’t caught on yet. But to me Circle was quite beautiful. It was an example of something larger than I had ever written or even conceived of writing before. Itself a fork of the MUD project DikuMUD, written in 1990 by a few people at the University of Copenhagen, Circle had the rugged appeal of a great C program: It engaged intimately with the OS’s system calls, it was highly optimized and event-driven, and it did a lot of heavy lifting that is nowadays hidden away in libraries. It managed its own TCP sockets and I/O buffers from the ground up, defined its own game file formats, and so on.

What would be considered bare metal today was, back then, the top of the stack. Circle’s creators did not lament the lack of dynamic typing or other higher-level luxuries — they reveled in the conveniences of flying above assembly language and of leaning into the operating system for all kinds of important tasks.

As a result, Circle is a workhorse, and in production, Hex could run smoothly with 200+ concurrent users in under 20MB of RAM on a 486\. The game runs in one big 100ms event loop which never blocks; it just services all of the currently connected users, steps the world forward by one tick, then sleeps for the rest of the cycle. I remember doing some long-running thing inside this loop and learning the hard way that it halts the game for everyone. An early lesson in optimization.

After weeks of poring over the code, and after much trial and error, I was delighted to send in a little patch that changed the style of the command prompt in the game. In a mid-90s-style pull request, I dashed off an e-mail to the Hex administrators with my patch and eagerly awaited a reply.



![](https://cdn-images-1.medium.com/max/1600/1*PJquEuajH58MnJDwC-p6kA.jpeg)

The ASCII intro art for HexOnyx



They accepted my patch. They applied it. And it was magical to see my small change incorporated into a game that so many people played every day. The developers — mostly college-age Computer Science students — gave me feedback on my patch, as did the players.

I kept working and I sent in more small patches. Eventually Yaz got tired of playing middleman and said, “Why don’t you just made edits directly to our code.” and he created an account on the server for me.

Implementor status on Hex was by far the most personal responsibility I’d ever felt. I started releasing new changes almost every night, receiving immediate feedback from other players. Not only was I designing and building features that I, as a veteran player, wanted to see in the game — more importantly, I was iterating inside a tight feedback loop with other users.

The feedback loop drove my work. It kept me going, through bugs that seemed unfixable and problems that seemed intractable. There was no schedule — just endless small steps every day toward a better game. I was hooked on the deep satisfaction that came with enhancing something people loved to use, and I’d reached an incredible flow state.

I think this is a great way to learn programming: rather than saying “I want to learn to program”, start with a desire to improve something that already exists. Something people use. Expect that you will hit roadblocks and challenges, and let feedback from users and collaborators be your encouragement to persevere through those. Plenty of open source projects make this opportunity available, but I think there’s something special about the gaming environment.

Over the following months, I learned about data structures and memory allocation. I learned about sane ways to structure procedural software. I learned about sockets, data serialization, timers and interrupts. I didn’t know the vocabulary for these things beyond what I was able to read in code’s comments and in manual pages for system calls. But I was hooked. Coding for the MUD was all I thought about at school each day, and all I did at home each night.

I added a host of new features over the next year or two. I expanded the MUDs internal economy, building a housing system (virtual storage lockers, really) and a real estate market for them. I introduced scarcity of goods into the game’s economy, writing an algorithm that limited the rate at which the best equipment would be introduced into the world. I was the invisible hand, making the game more fun and challenging for people, and it was a blast.

The fun of being a developer pushed me to learn more and strive to build more things that people wanted. I’m an engineer today because of that experience. I’m grateful that CircleMUD was malleable open source code, and that Yaz took a leap of faith in handing the keys over to me at just 14 years old.

I love a medium where you can approach as a consumer and smoothly transition into a producer. The most popular multiplayer games of today are largely immutable to players. And that’s frustrating: Because popular games like WoW are not open source, there’s no opportunity to take the leap into the role of developer. (EDIT: As [Thorsten Taplik](https://medium.com/@tapulator) pointed out in the comments, Minecraft does allow for some modifications in a simple, constrained environment and is a good gateway to get into programming!)

I’d love for the next generation of programmers to have as much fun learning to program as I did. Changing the game is a lot more interesting than playing it.











* * *







_Originally published on my personal website. Thanks to Siobhán K Cronin for proofreading._

#### If you made it this far, you should [join my mailing list](http://tashian.com/superstack) about technology and humanity.








