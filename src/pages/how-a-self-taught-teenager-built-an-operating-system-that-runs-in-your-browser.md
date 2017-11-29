---
author: Peter Gleeson
authorTwitter: none
authorFacebook: none
title: "How a self-taught teenager built an operating system that runs in your browser"
subTitle: "Arizona teenager Aaron Adams built and maintains this awe-inspiring solo project. Developed entirely in the cloud using c9.io’s online de..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*3GSXtqHjyCFn-zqJncrhOA.png
url: https://medium.freecodecamp.org/how-a-self-taught-teenager-built-an-operating-system-that-runs-in-your-browser-47da735ac919
id: how-a-self-taught-teenager-built-an-operating-system-that-runs-in-your-browser-47da735ac919
date: 2017-08-21T04:31:46.565Z
tags: [
  "Web Development",
  "JavaScript",
  "Self Improvement",
  "Life Lessons",
  "Startup"
]
---
# How a self-taught teenager built an operating system that runs in your browser



![](https://cdn-images-1.medium.com/max/1600/1*3GSXtqHjyCFn-zqJncrhOA.png)



Arizona teenager Aaron Adams built and maintains [this awe-inspiring solo project](https://aaron-os-mineandcraft12.c9.io/). Developed entirely in the cloud using [c9.io](https://c9.io/)’s online development environment, aOS (short for AaronOS) is an impressive tool, packed with a whole bunch of features and opportunities for customization.

To list only a few of these features:

*   Fancy an OSX-inspired UI? Check. Prefer a classic Windows XP themed UI? Check. Or feel like designing your own? Go ahead!
*   Make sure to try out the NORAA virtual assistant’s speech recognition capability
*   Test out commands in the bash-style terminal window
*   Have a go using some of the in-built “apps” such as Text Editor, Function Grapher, and Music Visualizer
*   Why not write your own custom app using App Maker?

Even more impressive is the story behind this young programmer and how he maintains this ongoing project.

So I got in touch with Aaron, and he kindly agreed to answer a few questions. You can read his answers below.

**Me: Hi Aaron, thanks for agreeing to answer a few questions about aOS. Let’s start by hearing a little more about you, and how you began your programming journey. Were there any key figures or events that inspired you?**

Aaron: Thanks for your interest in aOS! About me? I’m just an average Arizona teen fresh out of high school. I’m currently working at a branch of AMC Theatres and also in a grocery store. My first programming experience came about by an ironic twist of fate, actually. When I signed up for high school classes in my freshman year, I was (and still am today) very interested in photography, so I requested Film Production as one of my classes.

Apparently though, that class was full, so I was instead placed in GenYes — a class that focuses on educating my generation about important computer-related skills. Things like troubleshooting and fixing computers, using common programs, and of course — programming. If I had been accepted for the Film Production class, I likely never would have found programming, let alone let it envelop my life the way it has! My GenYes teacher really helped me out, and I retook the class again in my last year of high school. That class alone is what allowed my programming journey to take off at all.

**That sure was a lucky twist of fate! Tell me more how aOS began? What was the initial idea, or scope of the project?**

This is a tricky question! My first experiences in programming were spent making dozens of tiny little projects; such as calculators, string manipulators, etc. One of these projects was an “Operating System”, or at least something which looked a bit like one. You can see that project [here](https://www.codecademy.com/MineAndCraft12/codebits/o4qKD).

At the time, I was so proud of it — but I thought to myself, why stop at a simple joke app? What if I tried to actually make a legitimate program with an actual purpose? aOS is where I went with that initial desire. Note that aOS and the first “operating system” project are two completely different builds. I started over and gave up many times in the early periods of aOS, usually with the excuse of “I am in way over my head.”

**I’m sure a lot of beginner developers go through a similar experience. How did you work through those initial doubts?**

The main way that I worked around these early doubts is that after all these unsuccessful attempts, I decided to actually finish my programming course on JavaScript to learn that bit more, so I could come back and try again.

The approach I took at the next attempt was, rather than focusing on “building an entire operating system”, I would focus instead on “creating a desktop”, and then “creating a window”, and then “making the window move” — with each as separate, self-contained tasks. This change of focus meant the project no longer felt like an immense task that would never be completed. Instead, it now felt like a collection of (supposedly) easier tasks, and each time I completed one, it motivated me to move on to another. This continued, and here we are today — I’m proud to say aOS now almost feels like a ‘real’ desktop.

**Could you clarify for everyone reading this exactly what aOS is? To what extent does it emulate a ‘real-world’ operating system?**

OK, so aOS actually does not in any way interact with the hardware of the machine. The closest to the machine that aOS gets is reading the battery level, and perhaps reading the state of the network. The browser handles all the low-level memory management, and aOS cannot work on its own, say, installed in boot code or running in native code. In that sense, aOS is truly closer to a desktop environment than to an operating system.

**Sure — as an exercise in UI and systems design though, it is a remarkable feat. What inspiration did you take from any existing projects?**

I’ve taken inspiration from many sources. Looking back as far as I can remember, the only real operating systems I used were Windows (at home) and Chrome OS (at school). In the oldest surviving version of aOS available, there are a couple of Windows-inspired artefacts present. One is that Notepad is, of course, named after its Windows counterpart.

The Files and Internet apps took some subtle cues from the Chrome browser in their design; mostly with the tab bar at the top sticking above the content than anything else. More recently, inspiration from other sources can be very easily found in different places of the OS. The WindowBlur effect is very reminiscent of the Aero look from Windows. The taskbar is very similar to that of Windows. I’ve included a simulated bash console, which is obviously inspired by Linux. Another Linux feature is the ability to fold windows with the button on the left side of the title bar. The ‘Settings’ menu is very much inspired by the Windows 10 settings menu.

There are a few different Dashboard modes that are inspired by those of Windows 7, Android, and Linux’s XFCE Whiskermenu. I’m sure you can spot many other features where I’ve drawn inspiration from those sources!

**Overall, what have been your favorite parts of the project so far? And what have been the biggest challenges you’ve faced?**

My favorite part of the project? Oh boy, again with the hard questions! I’m really not sure if I could point to a specific moment, but I remember that getting the window movement and resizing features working correctly alongside the WindowBlur effect was one of the best “I did it!” moments. I’d say those moments of toiling away over something for more than a week before finally finishing and perfecting it — those are my favorite moments in aOS development.

As for challenging parts of development, I can immediately think of two: working with the security restrictions enforced by the browser, and performance issues caused by the browser. In fact, I’ve had to rewrite major parts of the OS several times because performance was too bad.

For example, when it was first unveiled, WindowBlur was _horrible_ on the framerate, even on more powerful machines. I was forced to redo it, and even more recently just dial it down a bit, for the sake of performance.

As for security, ensuring that everyone is viewing the page in https was very difficult. Without https, Chrome would ask for a permission prompt _every single time_ I tried to access the microphone (for the NORAA virtual assistant) or camera (for the Camera app). Using https, the site is more secure, and Chrome only asks _one time_ about all this, and remembers each user’s preference.

Also, now that I think about it, perhaps the absolute worst problem I faced in the development of aOS was Chrome’s cache. Chrome would cache my script and stylesheet, which would make updates next to impossible to push. I’ve since worked around this feature, by placing the millisecond of the GET request in the URL parameters of the script file. That was a hard roadblock to figure out!

**Are you part of a wider developer community?**

Until recently, I have worked alone on this project. However, I have since had some contributions in the form of icons, graphics, and ideas from the public, and I am open to contributions from anyone — as long as I’m able to review and implement the changes myself.

**Much of your source code is publicly available, and is unconventional in that most of the logic is contained within a single 12,000-plus line file. Does this affect your workflow, and if so, do you plan to refactor your code at some point?**

While the very large singular file may seem like a caveat, I’ve actually kept it this way for a reason. When the script files are called upon separately — say each app in its own script file — then Chrome will load each file asynchronously and run them all as soon as they load, with the result being they are almost always run out of order!

In aOS, system apps initializing in the wrong order, or certain bits of boot code running in the wrong order, can break the system. In one large file, all of this timing issue is avoided, and each module loads one by one, in perfect order. I’ve since made more steps towards getting more of a modular setup into the source, but for now, one big file is still the way I’m going.

**You used Cloud9 to develop and host AaronOS. Do you do all your dev work online, or do you work locally as well? What is your current development setup like?**

Originally AaronOS was developed on Codecademy’s codebit program. This was back in V0.9 and earlier, and the codebit version was very limited as I could only use three files — one HTML, one CSS, and one JavaScript. No PHP, or outside linking (besides images).

All my dev work is done online, and the Cloud9 IDE is very good in terms of its continuity — I can be writing code on one computer, run out of battery abruptly, and pick up on another computer with the IDE in the _exact same state it was in when I ran out of battery._ The file is scrolled to the same place, terminal sessions persist, tabs persist, everything persists. Even the cursor remains in the same place! I literally log in on any computer and just get to work, which is amazing.

My main hardware setup is an HP 350 G1 machine running an i3 processor with integrated graphics, and, more recently, 16GB RAM. It’s my main gaming machine as well, and has surprised me with its ability to run 60FPS in many games.

I use Windows 10 for gaming, but I mainly run Linux Mint with the XFCE desktop. I’ve got AeroGlass and Classic Shell installed, which make it look much like Windows 7\. Personally, I’m not a fan of the Windows 10 UI — little details really bug me, such as Command Prompt occasionally opening with the Windows 98-themed window borders, or the way that running programs in compatibility mode for Windows XP makes them use the Windows 7 Basic window borders. Make up your mind, Windows!

**You’ve clearly got a keen eye for consistent UX! What frameworks or tools did you use to build the UI and backend logic? And do you have a favorite language to work with?**

One of my goals with aOS was to use no third-party JavaScript libraries. All code was written by scratch myself — no jQuery, Angular, Underscore, etc. — it’s all 100% pure “vanilla” JavaScript. The UI is presented completely in HTML and CSS, and all client-side code is JavaScript. Server-side code is written in PHP.

My favorite language would have to be JavaScript, though TI-BASIC comes in as a close second. For anyone who doesn’t know, TI-BASIC is the language used on TI-8* calculators, and means a lot to me because it was the only way I could program during other classes! Plus, the other kids at school appreciated the video games I put onto their calculators for them.

**The NORAA virtual assistant is a really cool feature — how did that come about?**

NORAA was invented one night when I was re-watching War Games, (a movie with a computer called JOSHUA which tricked everyone into thinking there was a global thermonuclear war). NORAA is inspired in part by Windows’ Cortana, and in part by JOSHUA _(edit: Aaron, please don’t start WW3…)_.

JOSHUA is where the terminal-like appearance for NORAA comes from. I’ve coded in the ability for NORAA to adapt his or her responses based on his or her attitude towards you. Sadly, this feature has gotten little implementation besides a few testing commands. Currently, NORAA is more focused on performing tasks than looking things up on the Internet. In case you were wondering, NORAA is my own name, spelled backwards!

**In terms of the future, what are your plans and ambitions? What’s up next for AaronOS? And how about cloud-based systems and desktops in general?**

At this point, I have no specific plans for AaronOS; by which I mean that AaronOS has no real point at which it will be “finished”. Much like the game Minecraft, it will be continually updated and improved upon until I am physically unable to keep working on it, or if I ever run out of money… whichever comes first!

That said, the next big step for aOS is the release of the Beta version. The Beta is not finished and is still under development, but it will be marked by some big upgrades, perhaps by the introduction of an Extension Market where you can download apps, scripts, and stylesheets made by other users. Only time will tell.

While there are few cloud-based desktops available, the only two I can think of off the top of my head that are still in active development are my own aOS and another called [OS.js](https://www.os-js.org/), which is an amazing project.

I hope that aOS, OS.js, and other projects like them will stand as proof that with programming (and enough free time), you can make almost anything you want come true.

**Aaron, thanks for taking the time to answer some questions! Once again, congrats on a truly impressive project — I look forward to seeing what comes next!**

My pleasure — thank you for this wonderful opportunity to talk about aOS! I look forward to reading it when it comes out.








