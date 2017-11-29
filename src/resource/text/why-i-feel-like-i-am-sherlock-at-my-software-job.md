---
author: DHARA DOSHI
authorTwitter: https://twitter.com/dharadoshi
authorFacebook: none
title: "I feel like Sherlock, if he were a developer"
subTitle: "It’s a normal day at work. My boss assigned me an issue that I know nothing about. And I’m supposed to solve it as fast as possible...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*-CNoGje_a2x2Nziq0pru-w.jpeg
url: https://medium.freecodecamp.org/why-i-feel-like-i-am-sherlock-at-my-software-job-4a303ebdaf63
id: why-i-feel-like-i-am-sherlock-at-my-software-job-4a303ebdaf63
date: 2016-10-30T08:16:07.593Z
tags: [
  "Programming",
  "Life Lessons",
  "Software Development",
  "Tech",
  "Technology"
]
---
# I feel like Sherlock, if he were a developer



![](https://cdn-images-1.medium.com/max/1600/1*-CNoGje_a2x2Nziq0pru-w.jpeg)



It’s a normal day at work. My boss assigned me an issue that I know nothing about. And I’m supposed to solve it as fast as possible.

Somewhere in a massive project is a piece of code that keeps crashing. To me, it feels as electrifying as a murder mystery.

Luckily for me, debugging and investigation go hand in hand.

Welcome to the crime scene!





<iframe data-width="435" data-height="200" width="435" height="200" src="https://medium.freecodecamp.org/media/d49f7e7f82fb504f911f10253cac4e2b?postId=4a303ebdaf63" data-media-id="d49f7e7f82fb504f911f10253cac4e2b" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2Ffv8KclrYGp5dK%2Fgiphy.gif&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





There are clues. Some obvious suspicions. Some finger prints.

But nothing definite.

I track down the usual suspects, but they lead me nowhere.

> “There is nothing more deceptive than an obvious fact.”   
> ― [**Arthur Conan Doyle**](https://www.goodreads.com/author/show/2448.Arthur_Conan_Doyle) **in** [**The Boscombe Valley Mystery**](https://www.goodreads.com/work/quotes/1214700)

I call for the help of my equivalent of a Dr. Watson: my [IDE](https://en.wikipedia.org/wiki/Integrated_development_environment).





<iframe data-width="435" data-height="424" width="435" height="424" src="https://medium.freecodecamp.org/media/9bd74957a63573ed8dc98f0355516963?postId=4a303ebdaf63" data-media-id="9bd74957a63573ed8dc98f0355516963" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F104VkDPOhII4I8%2Fgiphy.gif&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





I place a few breakpoints. I add a few watches.

I brainstorm a little more.

I play back the crime scene again and again, investigating the facts.

Skimming the stack trace, I get a flash of insight that helps me narrow my search.

I feel a shot of elation as I go into a function, and add a specific breakpoint.

And a few moments later, I emerge from my state of concentration, having solved the bug.





<iframe data-width="435" data-height="435" width="435" height="435" src="https://medium.freecodecamp.org/media/a924dcca4a78dea877738803f92afddb?postId=4a303ebdaf63" data-media-id="a924dcca4a78dea877738803f92afddb" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F3oz8xrLEjLlVUmRJwk%2Fgiphy.gif&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





You want to know what the problem was?

If you know some basic C, take a look at this block of code, and see if you can find a clue as to what went wrong:

    FILE *fd;char *filename="models/";strcat(filename,"bullet");strcat(filename,".h3d");if( (fd = fopen(filename,"r"))==NULL ){    printf("\nFile or Directory not found");    return;}





<iframe data-width="435" data-height="328" width="435" height="328" src="https://medium.freecodecamp.org/media/1069d6465c908bb4097fad394e1e22d9?postId=4a303ebdaf63" data-media-id="1069d6465c908bb4097fad394e1e22d9" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2Fl2JegpA7RUbGPcnug%2Fgiphy.gif&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





All right, drum roll… here’s the cause of the problem:

It was a [segmentation fault](https://en.wikipedia.org/wiki/Segmentation_fault). Plain and simple.

    char *filename="models/"; // This is a string literal stored in read-only memory

<pre name="edc7" id="edc7" class="graf graf--pre graf-after--pre">When we use strcat to append to "filename", it is undefined behavior because we aren't allowed to write to that read-only memory.</pre>

So how did I solve it?

I allocated a memory buffer big enough to store the full path of the file.

    char filename[256]; // Alternatively you can allocate dynamically strcpy(filename, "models/");strcat(filename,"bullet");strcat(filename,".h3d");





<iframe data-width="435" data-height="245" width="435" height="245" src="https://medium.freecodecamp.org/media/fda0f24547470bcdcdbcc6c6c19ec690?postId=4a303ebdaf63" data-media-id="fda0f24547470bcdcdbcc6c6c19ec690" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FAsxHvzNMGOakM%2Fgiphy.gif&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Now you see how I can’t help being Sherlock-ed now.

Stay tuned for the next mystery!





<iframe data-width="435" data-height="204" width="435" height="204" src="https://medium.freecodecamp.org/media/47f28b722ecc5e4805808f5c24072609?postId=4a303ebdaf63" data-media-id="47f28b722ecc5e4805808f5c24072609" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FauvhGRnnZRU6A%2Fgiphy.gif&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





[**Subscribe to my Medium posts**  
_Enter your email to receive updates from me._powered.by.rabbut.com](https://powered.by.rabbut.com/p/Ntce?c=0 "https://powered.by.rabbut.com/p/Ntce?c=0")[](https://powered.by.rabbut.com/p/Ntce?c=0)








