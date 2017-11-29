---
author: Cristian Medina
authorTwitter: https://twitter.com/tryexceptpass
authorFacebook: none
title: "How to Turn a Web App Into a Desktop App, Using Chromium and PyInstaller"
subTitle: "Packaging and distributing your app sounds simple in principle. It’s just software. But in practice, it’s quite challenging...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*lmD7FIkUL4t5P-swMEPH7Q.jpeg
url: https://medium.freecodecamp.org/the-python-desktop-application-3a66b4a128d3
id: the-python-desktop-application-3a66b4a128d3
date: 2017-04-27T23:23:18.670Z
tags: [
  "Python",
  "Web Development",
  "Programming",
  "JavaScript",
  "Software Development"
]
---
# How to Turn a Web App Into a Desktop App, Using Chromium and PyInstaller







![](https://cdn-images-1.medium.com/max/2000/1*lmD7FIkUL4t5P-swMEPH7Q.jpeg)







Packaging and distributing your app sounds simple in principle. It’s just software. But in practice, it’s quite challenging.

I’ve been working on a Python module called [Sofi](https://github.com/tryexceptpass/sofi) that generates user interfaces. It can deliver a desktop feel while using standard single-page web technologies. For flexibility, I designed it to work through two methods of distribution: in-browser and executable.

Running in the browser, it functions much like a normal webpage. You can load it by opening a file, or launch it from your shell. I also built an executable that runs as a packaged app, independent and without external requirements.

Over time, as I hacked at code in Atom — my editor of choice these days — I remembered that Atom is actually a browser. It uses Node.js as a back end, and the Electron framework for its user interface. This inspired me to start poking at Electron’s internals, hoping to find examples and best practices on how they solved desktop packaging.

It didn’t take long for me to discover that it’s all built on top of free and open sourced technologies: the Chromium browser and the [Chromium Embedded Framework](https://bitbucket.org/chromiumembedded/cef). This featured easy-to-integrate example customizations that were capable of fulfilling my requirements.

With all this in hand, I got to work.

#### The Chromium Embedded Framework

Chromium is the base code that feeds Google’s Chrome browser. It brings together all the elements that render an interface, process user input, and script its functions.

The Chromium Embedded Framework (CEF) is a group of C functions that that can control that browser. It also provides scripts that help simplify the process of building and compiling it.

Visual Studio Code, Slack, Mattermost, Curse, Postman, and Kitematic are all examples of desktop apps that use Electron. These systems all qualify as websites that exploit the browser underneath with CEF.

If you’re thinking that Python can bind with C and take advantage of these features as well, then you’re right. Look no further than the [pycef](https://github.com/cztomczak/pycef) project to call the CEF wrapper functions directly. However, it does come with the Chromium binary as an added dependency. So if you’re worried about managing complicated support statements, think before you jump.

In my particular situation, the Sofi project manages all interactions through a websocket, providing a consistent interface across different types of platforms (web, desktop, mobile, etc.). This means I don’t need to manually commanding or drive the browser. I only wish to interact with the DOM that the browser displays through standard web technologies.

My goal is to customize the UI elements that make a browser look like a browser. I need to remove the menus, toolbars, and status bars. In doing so, I’ll make it appear that we’re in fullscreen mode — but inside an application window.

Given my simple requirements, I felt that pycef — or any other lower-level bindings — was too much. Instead I took advantage of a pre-built sample from the CEF project: _cefsimple_. This browser hides all the visual elements I want, so if I use its CLI to open a webpage, the user has no idea that they’re actually inside a browser. It looks like a regular window from any application.

Building _cefsimple_ wasn’t too complicated once I went through the documentation. But it takes an enormous amount of time if you also build Chromium along with it. To avoid this, the project itself provides pre-built binaries that you can customize and compile into cefsimple. I found it best to take advantage of these.

The steps are as follows:

1.  Have a quick look through [how to build](https://bitbucket.org/chromiumembedded/cef/wiki/GeneralUsage#markdown-header-using-a-binary-distribution) with CEF from binaries.
2.  Grab one of the [binary distributions](http://opensource.spotify.com/cefbuilds/index.html) from the repo. Be sure to read the tooltips before selecting one, since not all packages contain the same files. I was specifically looking for one with `cefsimple`.
3.  Look through the `CMakeLists.txt` file and make sure you install the necessary build tools. This is platform specific.
4.  Perform the build. This is explained in the same file as the previous step and is also platform specific, but it tends to follow the process of: make and cd into build directory, run cmake for your compilation tools and architecture while pointing at the parent directory. Since I used the OSX Ninja tools on a 64-bit platform, the command looked like `cmake -G "Ninja" -DPROJECT_ARCH="x86_64" ..`
5.  The build directory will now contain the output files. The structure can be a little confusing, but it’s described in the main `README`. As a reference, the previous step resulted in an app bundle under `build/tests/cefsimple/Release/cefsimple.app`.
6.  Don’t forget you’ll have to do this to create the binaries you need for every platform and OS architecture that your supporting.

Now that you have an executable, run it from command line with `--url` set to the webpage you want to open. This means that incorporating it into a Python script is easily done through the `subprocess` module.

While not required, if you’re interested in compiling Chromium itself, have a look at the CEF documentation. It will point you in the right direction. But be warned, it takes a lot of time to download, build and compile. Good old fashioned processing horsepower will definitely help get faster results.

#### Packaging

Now that we can deliver a desktop experience, we have to consider how to distribute that to our users. Traditional Python package distribution is accomplished through the Python Package Index (PyPI). However, it requires our users to install the Python interpreter and some form of packaging tool like `easy_install` or `pip`.

While this isn’t particularly hard, you should consider the wider range of users. Managing an install process with separate manual steps gets fairly complicated. Especially with non-technical audiences — some of whom don’t know that Python is anything other than a large snake. While others may at least know the air speed velocity of a European unladen swallow.

If they do know the language, most already have their own version installed. This is where package dependencies, different operating systems, browsers you’ve never heard of (or thought were dead by now) come into play, along with users’ varying skills in setting up virtual environments. This tends to translate into a large amount of time spent supporting mismatched software.

To avoid such a large mess, there are tools that can embed all your dependencies into OS-specific executable files. After careful consideration, the one I chose for my endeavors is [PyInstaller](https://github.com/pyinstaller/pyinstaller). It seems to provide the most flexibility in supported platforms and formats.

A brief excerpt from their GitHub repository sums things up nicely:

> PyInstaller reads a Python script written by you. It analyzes your code to discover every other module and library your script needs in order to execute. Then it collects copies of all those files — including the active Python interpreter! — and puts them with your script in a single folder, or optionally in a single executable file.

The tool delivered on its promise. I pointed it to the Python file for my sample application and it bundles it in a directory easily enough with: `pyinstaller sample.py`. When I want an executable instead, just add the `--onefile` parameter.

It gets a bit trickier when you need to add non-Python data to your bundle. This is the case with the html and js files that form the basis of Sofi, and the _cefsimple_ browser that presents the application interface from earlier. The PyInstaller utility provides `--add-data` to do just that, allowing a mapping to the path within your bundle where the data file (or directory) will reside. However, it took me a while to figure out how to properly access those directories from within my code. Luckily the documentation pointed me in the right direction.

As it turns out, when running a PyInstaller bundled application, you can’t rely on `__file__` and similar mechanisms to determine paths. Instead, the PyInstaller bootloader stores the absolute path to the bundle in `sys._MEIPASS` and adds a `frozen` attribute to let you know that you’re running inside a bundle. If `sys.frozen` is `True` then load your files based on `sys._MEIPASS`, otherwise use normal path functions to determine where things are.

I was able to successfully create both an OSX bundled app and an executable Linux binary of the same Python script. I verified I can do the same with a Windows executable, but haven’t had time to put together a Windows version of the _cefsimple_ browser to test the bundle path yet.

#### The Final Product

For an example of the browser-based user interface packaged with the system described here, have a look at my presentation at PyCaribbean 2017.





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/07e1ddbe778930e60dd2e5db30c12002?postId=3a66b4a128d3" data-media-id="07e1ddbe778930e60dd2e5db30c12002" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FTcx8kwmGWA0%2Fhqdefault.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





The demo relevant to CEF and packaging is of an image gallery and it appears around 18:15.

For additional reading on how I made Sofi, have a look at the [A Python Ate My GUI](https://medium.com/@tryexceptpass/a-python-ate-my-gui-971f2326ce59) series.











* * *









[![](https://cdn-images-1.medium.com/max/1600/1*_04PhhMqHB3qXQnOQNP5ag.png)](https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw&region=follow_link&screen_name=tryexceptpass&tw_p=followbutton)



If you liked this article and want to keep up with what I’m working on, please click the heart below to recommend it, and [follow me on Twitter](https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw&region=follow_link&screen_name=tryexceptpass&tw_p=followbutton).








