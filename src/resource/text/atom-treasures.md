---
author: Dennis Bruijn / @0x1ad2
authorTwitter: https://twitter.com/0x1ad2
authorFacebook: none
title: "Atom treasures"
subTitle: "a list of Atom plugins I can’t live without"
coverSrc: https://cdn-images-1.medium.com/max/2000/1*9J_ThYFo9O3jUELY1RiEjQ.jpeg
url: https://medium.freecodecamp.org/atom-treasures-82a64ac391c
id: atom-treasures-82a64ac391c
date: 2016-07-06T22:02:21.885Z
tags: [
	"Web Development",
	"Productivity",
	"Tech",
	"Coding",
	"Programming"
]
---
# Atom treasures

## a list of Atom plugins I can’t live without

I recently switched from [Sublime Text 3](https://www.sublimetext.com/) to [Atom Editor](https://atom.io/), and I must say it sped up my development process especially the part of producing flawless front-end code.

### What’s Atom Editor?

**As stated on their homepage:** Atom is a text editor that’s modern, approachable, yet hackable to the core — a tool you can customize to do anything but also use productively without ever touching a config file














### What made me switch to Atom Editor?

First of all, it’s backed by [Github](https://github.com/). Github is a successful company that focuses on developers needs regarding version control and product development.

> _Github has a lot of resources to put in the process of developing an application. It has the ability to create a stable product fast and improve it over time._

Second, it’s hackable to the core this allows us (developers) to build new packages for everything from theming and synchronization to the way we write characters on screen.

It’s also inspectable by the chrome inspector because it’s made with [Electron](http://electron.atom.io/) a cross-platform framework to create desktop apps with JavaScript, HTML, and CSS also by Github














### The list

#### [Minimap](https://atom.io/packages/minimap)

Minimap provides you with a preview of the full source code; this is nice to gain an overview of the file you are editing.














#### [Minimap cursor line](https://atom.io/packages/minimap-cursorline)

It’s good to know where you are in your file, cursor line allows you to see where in your file you are. It moves with you if you move lines.














#### [Pigments](https://atom.io/packages/pigments)

Pigments will scan source files in your project directories looking for colors and will build a palette with all of them. It also highlights the colors within the file for example a stylesheet to make using colors a breeze.














#### [Emmet](https://atom.io/packages/emmet)

Emmet allows you to easily generate HTML based on the Emmet syntax. For example you want to create an unordered list with three list items that each have a paragraph inside.














#### [Double tag](https://atom.io/packages/double-tag)

Double tag allows you to edit both the start and end HTML tags at the same time. This is extremely useful when editing big files with a lot of HTML.














#### [Linter](https://atom.io/packages/linter)

Linter allows you to lint your code, linters will generate warnings and errors based on real-time code analysis. You can install different Linters almost each language has one HTML, CSS, SCSS, JavaScript, TypeScript even some frameworks like Twitter Bootstrap.














#### [Beautify](https://atom.io/packages/atom-beautify)

Beautify allows you to beautify your HTML, CSS, JavaScript, PHP, Python, Ruby, Java, C, C++, C#, Objective-C, CoffeeScript, TypeScript, Coldfusion, and SQL with one shortcut **Ctrl-Alt-B** or **Cmd-Alt-B**














#### [Auto close HTML](https://atom.io/packages/autoclose-html)

Auto close gives you the ability to auto close your HTML tags. This will also come in handy when editing big files with a lot of HTML.

**_Note:_** _You don’t both Emmet and Auto close HTML, it’s already included in Emmet feature._














#### [Fuzzy finder](https://github.com/atom/fuzzy-finder)

Fuzzy finder allows you to find and open files quickly with one shortcut**Ctrl-T** or **Cmd-T**












_Fuzzy finder is included by default you don’t have to install it_



#### [Color picker](https://atom.io/packages/color-picker)

Color picker allows you to pick colors within your SCSS, LESS and CSS It currently reads the following color formats HEX, HEXa, RGB, RGBa, HSL, HSLa, HSV, HSVa, VEC3 and VEC4.














#### [Highlight selected](https://atom.io/packages/highlight-selected)

Highlight selected allows you to highlight your selected words throughout the file that you are editing. You can use **Ctrl-U** or **Cmd-U** to multi selected the words














#### [GIT diff](https://atom.io/packages/git-diff)

GIT diff marks lines in the editor gutter that have been added, edited, or deleted since the last commit.












_GIT diff is included by default you don’t have to install it_



#### [Sort lines](https://atom.io/packages/sort-lines)

Sort your lines in alphabetic order














#### [Last cursor position](https://atom.io/packages/last-cursor-position)

Last cursor positions keeps a history of past cursor position to travel back to using **Alt-minus(-)**














#### [Code peek](https://atom.io/packages/code-peek)

Code peek allows you to quickly peek and edit functions contained in other files instead of having to open the file separately.














#### [Package sync](https://atom.io/packages/package-sync)

Package sync lets you synchronize packages installed between computers. This comes in handy if you are working on different working environments.












You can sync your snippets, keymap and other settings



Here is my [packages.json](https://gist.githubusercontent.com/0x1ad2/3dcc76bd77334753c9993f2be38ebac3/raw/05b0eac18ae85b9ae346c45b3c0e74ff287db808/packages.json) file, copy it for quickly installing the packages mentioned above (and more).

[Matthew Leonard](https://medium.com/@matt1222?source=responses---------0-) was wondering how to use it so here’s a little guide

*   Installing the [plugin](https://github.com/atom-community/sync-settings) trough package management
*   Creating a Github token with the right access
*   Create a Gist file
*   Set the tokens and last part of the URL from the Gist file in the package settings
*   Use Ctrl-Shift-P (or Cmd-Shift-P) and type sync to back-up and restore the packages

#### [WakaTime](https://atom.io/packages/wakatime)

Because who don’t want to track their time per project? ☺️

WakaTime allows you to track your time per project, your programming languages used, logged in time and much more. All you have to do install the plugin and grab a API key from [https://wakatime.com/](https://wakatime.com/)














> A big thanks to all the package developers who make my life a lot easier!

### JavaScript Development

#### [Atom TypeScript](https://atom.io/packages/atom-typescript)

For everyone who’s using TypeScript for JavaScript development, I recommend installing Atom TypeScript. The only TypeScript plugin you will ever need _❤_

some of the features are

*   Autocomplete
*   Live error analysis
*   Type information on hover
*   Compile on save

#### [Atom TernJS](https://atom.io/packages/atom-ternjs)

TernJS provides JavaScript code intelligence for atom with Tern. Adds support for ES5, ES6 (JavaScript 2015), Node.js, jQuery & Angular. Extendable via plugins. Uses suggestion provider by autocomplete-plus.














### Extra’s

Here are some packages that I use for fun or doesn’t fit in the list

#### [Activate power mode](https://atom.io/packages/activate-power-mode)

Activate **POWER MODE** to write your code in style.














#### [Seti UI](https://atom.io/themes/seti-ui)

A dark colored UI theme for Atom with custom file icons. I ❤ seti!



























#### [linter-write-good](https://atom.io/packages/linter-write-good)

Naive linter for English prose for developers who can’t write good and wanna learn to do other stuff good too 😉
























* * *







Thank you for taking the time to reading this story! If you enjoyed reading this story, clap for me by clicking the 👏🏻 below so other people will see this here on [Medium](https://medium.com/@Medium).

You can follow me on Twitter [@0x1ad2](http://twitter.com/0x1ad2 "Twitter profile for @0x1ad2") and feel free to tweet me anything!

Also, I work at Wehkamp.nl one of the biggest e-commerce companies of 🇳🇱  
We do have a [Tech blog](https://medium.com/wehkamp-techblog), check it out and subscribe if you want to read more stories like this one. Or look at our [job offers](http://www.werkenbijwehkamp.nl) if you are looking for a great job!








