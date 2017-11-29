---
author: Carol-Theodor Pelu
authorTwitter: https://twitter.com/pelu_carol
authorFacebook: https://facebook.com/1239892399366594
title: "How to Build Your First Desktop App with JavaScript Using Electron"
subTitle: "Have you ever wondered if you can build cross-platform desktop apps with HTML, CSS, and JavaScript?..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*aBsgPiEeOE5lLoippRm7BA.png
url: https://medium.freecodecamp.org/how-to-build-your-first-app-with-electron-41ebdb796930
id: how-to-build-your-first-app-with-electron-41ebdb796930
date: 2017-06-06T16:34:39.348Z
tags: [
	"JavaScript",
	"Programming",
	"Tech",
	"Technology",
	"Startup"
]
---
# How to Build Your First Desktop App with JavaScript Using Electron











![](https://cdn-images-1.medium.com/max/2000/1*aBsgPiEeOE5lLoippRm7BA.png)












Have you ever wondered if you can build cross-platform desktop apps with HTML, CSS, and JavaScript?

It is possible with Electron.

This article will help you understand some core concepts of Electron.

By the end of this post, you’ll know the process of creating cross-platform desktop apps with Electron, HTML, and CSS.

Before we get started you can check out in advance the app we’re going to build in this tutorial.

_Hear Me Type_ will have a simple but straightforward functionality. Every key pressed on the keyboard will play a specific sound. So if I press the “A” button, the app will play the specific sound for the letter A.

There are two versions available for download. The [source code for this tutorial](https://github.com/Tynael/Hear-Me-Type-Tutorial), and an [advanced version](https://github.com/Tynael/Hear-Me-Type) of the app, recommended for more experienced Electron users.

The code will change since I’m adding new features and enhancements. Be sure to check back to see what’s new.

Without further ado, let’s find out more about Electron and create our first app!

### What is Electron?

Electron is a framework for cross-platform desktop applications using Chromium and Node.js.

It’s easy to build cross-platform apps using HTML, CSS, and JavaScript. Your app will be compatible with Mac, Windows, and Linux operating systems right out of the box.

Other in-built features are:

*   **Automatic updates** — enable apps to automatically update themselves
*   **Native menus and notifications** — creates native application menus and context menus
*   **App crash reporting** — you can submit crash reports to a remote server
*   **Debugging and profiling** — Chromium’s content module finds performance bottlenecks and slow operations. You can also use your favorite Chrome Developer Tools within your app.
*   **Windows installer** — you can create install packages. Fast and simple.

If you’re happy with what Electron offers, let’s dive deeper and create a simple Electron app.

Before we get our hands dirty, you will need to install [Node.js](https://nodejs.org/en/download/). You also should have a [GitHub](https://github.com/join?source=header) account to store and update your app. Although an account isn’t necessary, it’s highly recommended. GitHub is an industry standard and it’s important to know how to use it.

We will be using GitHub in this tutorial.

### Getting Started

When you’re set up, open a Terminal window for your operating system.

Follow the instructions below to [clone](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) the Electron Quick Start Git repository to your computer.

We’re gonna build our software upon Electron Quick Start.

<pre name="d9e2" id="d9e2" class="graf graf--pre graf-after--p"># Clone the Quick Start repository  
git clone [https://github.com/electron/electron-quick-start](https://github.com/electron/electron-quick-start)  
# Go into the repository  
cd electron-quick-start  
# Install the dependencies and run  
npm install && npm start</pre>

When the steps listed above are complete you should see the app open in what looks like a browser window. And it is indeed a browser window!

The window style changes depending on the Operating System. I chose to use the classic look of Windows. Groovy!












The main window of our Quick-Start Electron app.



Like I was saying earlier, you can use Chrome’s Developer Tools inside your app. What you can do with your browser’s Developer Tools, you can also do inside the app. Outstanding!

### Electron Application Architecture

Let’s have a look at the source code and the file structure of our app. Open up the project in your favorite text editor or IDE. I’m going to use [Atom](https://atom.io/) which is built on… you guessed it… Electron!












Folder and files structure of our newly created app.



We have a basic file structure:

`electron-quick-start`

`- index.html`  
`- main.js`  
`- package.json`  
`- render.js`

The file structure is similar to the one we use when creating web pages.

We have:

*   `index.html` which is an HTML5 web page serving one big purpose: our canvas
*   `main.js` creates windows and handles system events
*   `package.json` is the startup script for our app. It will run in the main process and it contains information about our app
*   `render.js` handles the app’s render processes

You may have a few questions about the main process and render process thingies. What the heck are they and how can I get along with them?

Glad you asked. Hang on to your hat ’cause this may be new territory if you’re coming from browser JavaScript realm!

### What is a process?

When you see “process”, think of an operating system level process. It’s an instance of a computer program that is running in the system.

If I start my Electron app and check the Windows Task Manager or Activity Monitor for macOS, I can see the processes associated with my app.














Each of these processes run in parallel. But the memory and resources allocated for each process are isolated from the others.

Say I want to create a `for loop` that increments something in a render process.

<pre name="937e" id="937e" class="graf graf--pre graf-after--p">var a = 1;</pre>

<pre name="9c62" id="9c62" class="graf graf--pre graf-after--pre">for ( a = 1; a < 10; a ++) {  
 console.log('This is a for loop');  
}</pre>

The increments are only available in the render process. It doesn’t affect the main process at all. The `This is a for loop` message will appear only on the rendered module.

### Main Process

The main process controls the life of the application. It has the full Node.js API built in and it opens dialogs, and creates render processes. It also handles other operating system interactions and starts and quits the app.

By convention, this process is in a file named `main.js`. But it can have whatever name you’d like.

You can also change the main process file by modifying it in `package.json` file.

For testing purpose, open `package.json` and change:

`“main”: “main.js”,`

to

`“main”: “mainTest.js”,`

Start your app and see if it still works.

Bear in mind that there can be only **one** main process.

### Render Process

The render process is a browser window in your app. Unlike the main process, there can be many render processes and each is independent.

Because every render process is separate, a crash in one won’t affect another. This is thanks to Chromium’s multi-process architecture.

These browser windows can also be hidden and customized because they’re like HTML files.  

But in Electron we also have the full Node.js API. This means we can open dialogs and other operating system interactions.

Think of it like this:












[Source: Kristian [Poslek](https://medium.com/developers-writing/building-a-desktop-application-with-electron-204203eeb658)]



One question remains. Can they be linked somehow?

These processes run concurrently and independently. But they still need to communicate somehow. Especially since they’re responsible for different tasks.

For this, there’s an interprocess communication system or IPC. You can use IPC to pass messages between main and render processes. For a more in-depth explanation of this system read Christian Engvall’s [article](https://www.christianengvall.se/ipcmain-and-ipcrenderer/).

These are the basics of processes for developing an Electron application.

Now let’s get back to our code!

### Make It Personal

Let’s give our app’s folder a proper name.

Change the folder name from `electron-quick-start` to `hear-me-type-tutorial`.

Reopen the folder with your favorite text editor or IDE. Let’s further customize our app’s identity by opening up the `package.json` file.

`package.json` contains vital information about our app. This is where you define the name, version, main file, author, license and so much more.

Let’s get a little bit of pride and put you as author of the app.

Find the “author” parameter and change the value to your name. It should look like this:

`“author”: “Carol Pelu”,`

We also need to change the rest of the parameters. Find the `name` and `description` below and change them in your package.json file:














Awesome! Now our app has a new name and a short but straight to the point description.

Remember, you can always run `npm start` in your terminal to execute the app and see the changes you’ve made.

Let’s move forward and add the expected functionality of our app. We want to play a specific sound for every keyboard key that we press.

### Oh, the Fun-ctionalitee!

What is an app without fun-ctionality? Nothing much…

Now we must take care of it and give our app the functionality it desires.

To make the app react to our input, we must first define an element to hook upon and then trigger the desired action.

To do that we will create `audio` elements with specific `id`s for the keyboard keys that we want. Then we will create a `switch` statement to find out which keyboard key was pressed. Then we’ll play a specific sound assigned to that key.

If this seems a little complex to you now, have no fear. I will guide you through every step.

Download this [archive](https://neutrondev.com/wp-content/uploads/2017/05/sounds.zip?x77671) containing all the sound files we’ll be using. We’ll soon make use of them!

Open up the `index.html` file and let’s create the `` elements to embed the sound content in our app.

Inside the `<body>` element, create a `div` element with the audio `class` tag.

Inside the created `div` element, create an `` element with an `id` of “A”, the `source` tag of “sounds/A.mp3” and with a `preload` attribute of “auto”.

We’ll use `preload=”auto”` to tell the app that it should load the entire audio file when the page loads. `index.html` is the main file of the app, and all our sound files will load when the app executes.

The code should look like this:

<pre name="ef34" id="ef34" class="graf graf--pre graf-after--p"></pre>

<pre name="a235" id="a235" class="graf graf--pre graf-after--pre"></audio></pre>

<pre name="8465" id="8465" class="graf graf--pre graf-after--pre"></pre>












Your index.html file should look like this.



Now the `` is pointing to an unknown source file. Let’s create a folder called `sounds` and unzip all the sound files inside the folder.

Great! The only important thing that’s missing right now is the JavaScript code.

Create a new file called `functions.js`. Let’s require it within the `index.html` file so that the JS code is ready for use when the app is running.

Following the example of `require(./renderer.js')`, add this line of code right under it:

`require('./functions.js')`

Your project should look like this:














Outstanding! Now that we have everything stitched up, it’s time for the moment of truth.

Open up the `functions.js` file and add the following JavaScript code into the file. I’ll explain how it works in just a moment.

<pre name="43e6" id="43e6" class="graf graf--pre graf-after--p">document.onkeydown = function(e) {  
    switch (e.keyCode) {  
        case 65:  
            document.getElementById('A').play();  
            break;  
        default:  
            console.log("Key is not found!");  
    }  
};</pre>

The code should look like this:














Open your bash or Terminal window. Be sure you’re in your project’s folder and type `npm start` to run the app.

Tune up the volume of your speakers and press the **A** button on your keyboard.

#MindBlown














The JS code is pretty simple and straightforward.

We use the `onkeydown` event on the `document` object to find out which HTML element is being accessed. Remember, the `document` object is our app’s main window.

Within the anonymous function, we use a `switch` statement. Its purpose is to identify the Unicode value of the pressed keyboard key.

If the Unicode value of the pressed keyboard key is correct, the sound is played. Otherwise a “not found” is error is thrown. Look for the message in the console.

What a ride!

You may have noticed that we have sound files to cover A-Z and 0–9 keys. Let’s use them too so they don’t feel the bitter taste of loneliness.

Head over to `index.html` and create an `` element for every key that we have a sound file for.

The code should look like this:














Yeah, of course you can copy-paste:

<pre name="7dd6" id="7dd6" class="graf graf--pre graf-after--p"></audio>  
</audio>  
</audio>  
</audio>  
</audio>  
</audio>  
</audio>  
</audio>  
</audio>  
</audio>  
</audio>  
</audio>  
</audio>  
</audio>  
</audio>  
</audio>  
</audio>  
</audio>  
</audio>  
</audio>  
</audio>  
</audio>  
</audio>  
</audio>  
</audio>  
</audio>  
</audio>  
</audio>  
</audio>  
</audio>  
</audio>  
</audio>  
</audio>  
</audio>  
</audio></pre>

Awesome! Now let’s do the same thing for the JS code within `functions.js`.

You can find the char codes (key codes) on this [website](https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes).

But yeah, you can copy-paste this too:

<pre name="063b" id="063b" class="graf graf--pre graf-after--p">document.onkeydown = function(e) {  
    switch (e.keyCode) {  
        case 48:  
            document.getElementById('0').play();  
            break;  
        case 49:  
            document.getElementById('1').play();  
            break;  
        case 50:  
            document.getElementById('2').play();  
            break;  
        case 51:  
            document.getElementById('3').play();  
            break;  
        case 52:  
            document.getElementById('4').play();  
            break;  
        case 53:  
            document.getElementById('5').play();  
            break;  
        case 54:  
            document.getElementById('6').play();  
            break;  
        case 55:  
            document.getElementById('7').play();  
            break;  
        case 56:  
            document.getElementById('8').play();  
            break;  
        case 57:  
            document.getElementById('9').play();  
            break;  
        case 65:  
            document.getElementById('A').play();  
            break;  
        case 66:  
            document.getElementById('B').play();  
            break;  
        case 67:  
            document.getElementById('C').play();  
            break;  
        case 68:  
            document.getElementById('D').play();  
            break;  
        case 69:  
            document.getElementById('E').play();  
            break;  
        case 70:  
            document.getElementById('F').play();  
            break;  
        case 71:  
            document.getElementById('G').play();  
            break;  
        case 72:  
            document.getElementById('H').play();  
            break;  
        case 73:  
            document.getElementById('I').play();  
            break;  
        case 74:  
            document.getElementById('J').play();  
            break;  
        case 75:  
            document.getElementById('K').play();  
            break;  
        case 76:  
            document.getElementById('L').play();  
            break;  
        case 77:  
            document.getElementById('M').play();  
            break;  
        case 78:  
            document.getElementById('N').play();  
            break;  
        case 79:  
            document.getElementById('O').play();  
            break;  
        case 80:  
            document.getElementById('P').play();  
            break;  
        case 81:  
            document.getElementById('Q').play();  
            break;  
        case 82:  
            document.getElementById('R').play();  
            break;  
        case 83:  
            document.getElementById('S').play();  
            break;  
        case 84:  
            document.getElementById('T').play();  
            break;  
        case 85:  
            document.getElementById('U').play();  
            break;  
        case 86:  
            document.getElementById('V').play();  
            break;  
        case 87:  
            document.getElementById('W').play();  
            break;  
        case 88:  
            document.getElementById('X').play();  
            break;  
        case 89:  
            document.getElementById('Y').play();  
            break;  
        case 90:  
            document.getElementById('Z').play();  
            break;  
        default:  
            console.log("Key is not found!");      
    }  
};</pre>

Our app is now complete! Congrats!














The main functionality of the app is finished, but there is still work to be done!

### Polska ja! (Polish me!)

Even though the app is functional it still lacks some things here and there.

For example, within the`index.html` file, you can change the app’s title and the content for the main window.

Moreover, the app has no design, no beautiful colors, and no pictures of either cats or dogs.

Free your imagination and find ways to improve the app’s design.

The code isn’t perfect either. We have lots of identical code which can be optimized and improved. This will result in fewer lines of code and it’ll be less painful for the eyes.

Duplicate code is bad practice!

### Test It! Just Test It!

Good software must be thoroughly tested.

I suggest you begin by pressing every keyboard key to see what’s happening.

The best scenario is you will hear the audio for every keyboard key you have specified in the code. But what will happen when you press many keys in a row as fast as you can? What about keys that are not even supposed to be pressed like the Home and NumLock buttons?

What if you minimize the app and try to press a key? Do you hear a sound? And what happens when you don’t have the app window selected and you press a keyboard key, do you still hear any sounds?

The answer is unfortunately no.

This behavior is because of the architecture upon which Electron was built. It allows you to get global keys like you can do with the C# language, but you can’t register individual keystrokes. This is outside of the realm of normal use-cases for an electron application.

Run through the code line by line and try to break it. See what is happening and what kind of errors Electron is throwing. This exercise will help you become better at debugging. If you know the flaws of your app you then know how to fix them and make the app better.

In the `functions.js` file, I have intentionally used a deprecated JavaScript event. Can you spot it?

Once you find it I would like you to think about how you can replace it without changing the app functionality.

Using deprecated code is bad practice and can lead to serious bugs you might not even know exist. Stay current with the documentation of the language to see what might have changed. Always stay up to date.

### Conclusion

I would like to thank and congratulate you for reaching this point!

You now have the knowledge to create a simple cross-platform Electron app.

If you want to dive deeper into Electron and see what I am working on check out [Hear Me Type](https://github.com/Tynael/Hear-Me-Type) and [my profile](https://github.com/Tynael) on GitHub.

Feel free to clone, fork, star and contribute to any of my public projects.

Please come back and read again this article from time to time. I will modify it to keep current with Electron updates.











* * *







Thank you so much for taking the time out of your day to read my article.

This article was originally posted on [NeutronDev.com](https://www.NeutronDev.com).

If you’d enjoy more detailed articles/tutorials about Electron, click the 💚 below. Feel free to leave a comment.








