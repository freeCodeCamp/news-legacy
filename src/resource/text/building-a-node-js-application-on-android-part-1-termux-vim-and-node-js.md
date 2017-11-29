---
author: Aurélien Giraud
authorTwitter: https://twitter.com/aurerua
authorFacebook: none
title: "Building a Node.js application on Android - Part 1: Termux, Vim and Node.js"
subTitle: "If you are excited about Node.js and own an Android device, no doubt you’ll enjoy running Node.js on it. Thanks to Termux, a terminal emu..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*vBw9_VPFiEcxgxDx-Oghzw.png
url: https://medium.freecodecamp.org/building-a-node-js-application-on-android-part-1-termux-vim-and-node-js-dfa90c28958f
id: building-a-node-js-application-on-android-part-1-termux-vim-and-node-js-dfa90c28958f
date: 2016-02-21T00:24:17.308Z
tags: [
  "Linux",
  "Nodejs",
  "Android",
  "Design",
  "Tech"
]
---
# Building a Node.js application on Android - Part 1: Termux, Vim and Node.js

If you are excited about Node.js and own an Android device, no doubt you’ll enjoy running Node.js on it. Thanks to Termux, a terminal emulator and Linux environment for Android, the fun of developping Node.js web applications is just a few ‘npm install’s away!

### What we are going to do

I will show how to get started with Node.js using Termux on Android. We are also going to use Express and see how to store our app’s data in NeDB, a lightweight JavaScript database, whose API is a subset of MongoDB’s.

In this first post, we will limit ourselves to setting up our Node.js development environment, that is:

1.  **Install and configure Termux.**
2.  **Install and see how to use Vim as a text editor.** (This section can be skipped if you already know Vim.)
3.  **Install and run Node.js.**

### 1\. Termux



![](https://cdn-images-1.medium.com/max/1600/1*wYX0neSQDAo5NSNdozrovw.jpeg)

The Termux CLI



[Termux](https://termux.com/) combines terminal emulation with a Linux package collection. It comes as a free app that can be installed directly from the [Play Store](https://play.google.com/store/apps/details?id=com.termux).

#### Configuration

When you open Termux, you are greeted by a [Command Line Interface](https://en.wikipedia.org/wiki/Shell_%28computing%29) (CLI). Right after installing Termux, it is recommended to check for updates, and upgrade if need be. So type the following commands at the prompt — that is, after the ‘$’ sign — and press <Enter>:

<pre name="bad2" id="bad2" class="graf graf--pre graf-after--p">$ apt update && apt upgrade</pre>

Termux comes with a minimal base system, so you should also install ‘coreutils’ for the full-fledged variants of [base CLI utilities such as ‘mv’, ‘ls’, etc.](https://devdactic.com/10-basic-bash-commands/)

<pre name="b338" id="b338" class="graf graf--pre graf-after--p">$ apt install coreutils</pre>

#### Storage

There are three main types of [storage in Termux](https://termux.com/storage.html):

1.  **App-private storage**: This is right where you are when you start Termux.
2.  **Shared internal storage**: Storage in the device available to all apps.
3.  **External storage**: Storage on external SD cards.

Although the environment setup in Termux is similar to that of a modern Linux distribution, running on Android implies differences and so far I have only managed to run Node.js fully while storing my data in Termux’s private storage (option 1 above).

So let’s create a directory for our app and change to this directory:

<pre name="a697" id="a697" class="graf graf--pre graf-after--p">$ mkdir test-node && cd test-node</pre>

#### Keyboard

I have only been using a soft keyboard so far and I encountered some issues with the default touch keyboard while using [the volume up key](https://termux.com/touch-keyboard.html) as a replacement for <Esc>, <Tab> or the Arrow keys.

To circumvent these issues, I installed [Hacker’s Keyboard](https://play.google.com/store/apps/details?id=org.pocketworkstation.pckeyboard) from the Play Store and I really like it. It is a touch keyboard that can be used instead of the default one and has all the keys needed for writing code and using the terminal.

You can find useful information about using a touch or hardware keyboard with Termux directly on [the Help page](https://termux.com/help.html).



![](https://cdn-images-1.medium.com/max/1600/1*4f2hjcG-q9zh_xn6dDOFNg.jpeg)

The Hacker’s keyboard



#### Using multiple sessions

One more thing I would like to mention about Termux: if you swipe the screen left to right from its left edge, it opens a menu that enables to start or switch between multiple Termux sessions.

#### Accessing Help in Termux

In Termux, you can access the help documentation, which contains all the necessary information, by long pressing the screen, and clicking first on ‘More’, then on ‘Help’. Note though, that this help documentation cannot be accessed when your device isn’t connected to the internet.

### 2\. Vim

Vim is a text editor that can be used right in the Command Line Interface and it is available as a package in Termux. So let’s install it:

<pre name="c492" id="c492" class="graf graf--pre graf-after--p">$ apt install vim</pre>

Vim’s interface is not based on menus or icons but on commands given in a text user interface. In case you are new to it I’m going to guide you through the very basics of Vim.

First, create the file ‘server.js’:

<pre name="cbcc" id="cbcc" class="graf graf--pre graf-after--p">$ touch server.js </pre>

To edit this file with Vim, simply type:

<pre name="64ea" id="64ea" class="graf graf--pre graf-after--p">$ vim server.js</pre>



![](https://cdn-images-1.medium.com/max/1600/1*iMAqPtrYe5nBk5PsBEEILQ.png)

Vim displaying the content of the empty file server.js



#### Using the different modes

Vim behaves differently, depending on which mode you are in. At start, you are in what is called _command mode_. You should see a cursor on the first line, tildes (~) on the other lines and the name of the file at the very bottom.

Tilde lines are here to indicate that these lines are not part of the content of the file.

To start writing into the file, you need to switch to _writing mode._ So just type the letter “i”. At the very bottom, you should now see something like this:



![](https://cdn-images-1.medium.com/max/1600/1*lIx7lVL_ijhNrd9Nc2w0pQ.jpeg)

Vim is now in writing _mode_



So now go on. Write something.

Done? So here is how you can save your changes/quit Vim. First you need to come back to the _command mode_ by pressing <Esc> and then you have the choice:

1.  Type **:w** and press <Enter>to save (write) the changes.
2.  Type **:wq** and press <Enter> to save the changes and quit.
3.  Type **:q!** and press <Enter> to quit without saving the changes.

And that is about it for our very short introduction to Vim.

#### Not getting lost and learning more about Vim

If you are lost, you can press <Esc> and type **:help** followed by <Enter>. This will open Vim help documentation.

Something like this simple [Vim Reference](https://simpletutorials.com/c/1238/Simple+Vim+Reference) might be useful if you are new to Vim. Alternatively, you can type ‘vimtutor’ in the terminal for a 30 minutes tutorial, play a learning game at [http://vim-adventures.com/](http://vim-adventures.com/) or follow the interactive tutorial at [http://www.openvim.com/](http://www.openvim.com/).

### 3\. Node.js

Installing [Node.js](https://nodejs.org/en/) is very simple:

<pre name="0b56" id="0b56" class="graf graf--pre graf-after--p">$ apt install nodejs</pre>

If you haven’t done it yet, create a folder for the application, move into it and type:

<pre name="aa2e" id="aa2e" class="graf graf--pre graf-after--p">$ npm init</pre>

This will ask you a bunch of questions, and then write a ‘package.json’ file for you. (You can just press <Enter> for each question asked.)

Now let us check that everything is working all right. Open server.js

<pre name="659b" id="659b" class="graf graf--pre graf-after--p">$ vim server.js</pre>

and type in it

<pre name="2f33" id="2f33" class="graf graf--pre graf-after--p">console.log('This is Node.js running on Android.')</pre>

Save the changes and quit Vim.

Now we have everything in place and we can finally run node:

<pre name="9ec8" id="9ec8" class="graf graf--pre graf-after--p">$ node server.js</pre>

This should print the text “This is Node.js running on Android.” in the terminal.



![](https://cdn-images-1.medium.com/max/1600/1*XqfRST9jFzNJQPzdWrBITw.jpeg)



### In a nutshell

As a recap, here is the whole process again (with minor differences as it is all done directly from the command line).

<pre name="f947" id="f947" class="graf graf--pre graf-after--p">Update and upgrade Termux:  
  $ apt update && apt upgrade</pre>

<pre name="7663" id="7663" class="graf graf--pre graf-after--pre">Install some core utilities, Vim and Node.js:  
  $ apt install coreutils  
  $ apt install vim  
  $ apt install nodejs</pre>

<pre name="4365" id="4365" class="graf graf--pre graf-after--pre">Create a directory called test-node and move into it:  
  $ mkdir test-node && cd test-node</pre>

<pre name="f0c4" id="f0c4" class="graf graf--pre graf-after--pre">Create an empty file called server.js:  
  $ touch server.js</pre>

<pre name="4c7e" id="4c7e" class="graf graf--pre graf-after--pre">Interactively create a package.json file:  
  $ npm init</pre>

<pre name="911d" id="911d" class="graf graf--pre graf-after--pre">Add some content to server.js:  
  $ echo “console.log(‘This is Node.js running on Android.’)” > server.js</pre>

<pre name="d5e1" id="d5e1" class="graf graf--pre graf-after--pre">Run node:  
  $ node server.js</pre>

### Wrapping it up

We have seen how to use Termux on Android, how to edit files with Vim and how to run Node.js.

In [the next post](https://medium.freecodecamp.com/building-a-node-js-application-on-android-part-2-express-and-nedb-ced04caea7bb) we are going to build a basic Node.js application using the [Express](http://expressjs.com/) web framework and a lightweight JavaScript database called [NeDB](https://github.com/louischatriot/nedb) which uses [MongoDB](https://www.mongodb.org/)’s API and can be used to develop and run a web application in Termux.

In the meantime, happy coding!








