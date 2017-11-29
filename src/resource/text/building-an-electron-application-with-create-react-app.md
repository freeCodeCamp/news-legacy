---
author: Christian Sepulveda
authorTwitter: https://twitter.com/csepulv
authorFacebook: none
title: "How to build an Electron app using create-react-app. No webpack configuration or “ejecting” necessary."
subTitle: "I recently built an Electron app using create-react-app. I didn’t need to muck about with Webpack, or “eject” my app, either. I’ll walk y..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*PQwgjFvq8KcaNOyjZqC5ig.jpeg
url: https://medium.freecodecamp.org/building-an-electron-application-with-create-react-app-97945861647c
id: building-an-electron-application-with-create-react-app-97945861647c
date: 2017-01-12T00:43:43.000Z
tags: [
  "JavaScript",
  "React",
  "Electron",
  "Software Development",
  "Programming"
]
---
# How to build an Electron app using create-react-app. No webpack configuration or “ejecting” necessary.







![](https://cdn-images-1.medium.com/max/2000/1*PQwgjFvq8KcaNOyjZqC5ig.jpeg)







I recently built an [Electron](http://electron.atom.io/) app using [create-react-app](https://github.com/facebookincubator/create-react-app)_._ I didn’t need to muck about with Webpack, or “eject” my app, either. I’ll walk you through how I accomplished this.

I was drawn to the idea of using [create-react-app](https://github.com/facebookincubator/create-react-app) because it hides the webpack configuration details. But my search for existing guides for using Electron and create-react-app together didn’t bear any fruit, so I just dove in and figured it out myself.

If you’re feeling impatient, you can dive right in and look at my code. Here’s the [GitHub repo](https://github.com/csepulv/electron-with-create-react-app) for my app.

Before we get started, let me tell you about Electron and React, and why create-react-app is such a great tool.

### Electron and React

React is Facebook’s JavaScript view framework.

[**_A JavaScript library for building user interfaces_ - React**  
A JavaScript library for building user interfacesfacebook.github.io](https://facebook.github.io/react/ "https://facebook.github.io/react/")[](https://facebook.github.io/react/)

And Electron is GitHub’s framework for building cross-platform desktop apps in JavaScript.

[**Electron**  
_Build cross platform desktop apps with JavaScript, HTML, and CSS._electron.atom.io](http://electron.atom.io/ "http://electron.atom.io/")[](http://electron.atom.io/)

Most use [webpack](https://webpack.github.io/) for the configuration necessary for React development. webpack is a configuration and build tool that most of the React community has adopted over alternatives like [Gulp](http://gulpjs.com/) and [Grunt](http://gruntjs.com).

The configuration overhead varies (more on this later), and there are many boilerplate and application generators available, but in July 2016 [Facebook Incubator](https://github.com/facebookincubator) released a tool,[create-react-app](https://github.com/facebookincubator/create-react-app)_._ It hides most of the configuration and lets the developer use simple commands, such as `npm start` and `npm run build` to run and build their apps.

#### What is ejecting, and why do you want to avoid it?

create-react-app makes certain assumptions about a typical React setup. If these assumptions aren’t for you, there is an option to [**eject**](https://github.com/facebookincubator/create-react-app#converting-to-a-custom-setup) an application (`npm run eject`). Ejecting an application copies all the encapsulated configuration of create-react-app to the your project, providing a boilerplate configuration that you can change as you wish.

But this is a _one way_ trip. You can’t undo ejecting and go back. There have been 49 releases (as of this post) of create-react-app, each making improvements. But for an ejected application, you would have to either forgo these improvements or figure out how to apply them.

An ejected configuration is over 550 lines spanning 7 files (as of this post). I don’t understand it all (well, most of it, actually) and I don’t want to.

#### Goals

My goals are simple:

*   avoid ejecting the React app
*   minimize glue to get React and Electron working together
*   preserve the defaults, assumptions and conventions made by Electron and create-react-app/React. (This can make it easier to use other tools that assume/require such conventions.)

#### Basic Recipe

1.  run `create-react-app` to generate a basic React application
2.  run `npm install --save-dev electron`
3.  add `main.js` from `[electron-quick-start](https://github.com/electron/electron-quick-start)` (we’ll rename it to `electron-starter.js`, for clarity)
4.  modify call to `mainWindow.loadURL` (in `electron-starter.js`) to use `localhost:3000` (webpack-dev-server)
5.  add a main entry to `package.json` for `electron-starter.js`
6.  add a run target to start Electron to `package.json`
7.  `npm start` followed by `npm run electron`

Steps 1 and 2 are pretty straightforward. Here’s the code for steps 3 and 4:

<pre name="8f37" id="8f37" class="graf graf--pre graf-after--p">const electron = require('electron');  
// Module to control application life.  
const app = electron.app;  
// Module to create native browser window.  
const BrowserWindow = electron.BrowserWindow;  

const path = require('path');  
const url = require('url');  

// Keep a global reference of the window object, if you don't, the window will  
// be closed automatically when the JavaScript object is garbage collected.  
let mainWindow;  

function createWindow() {  
    // Create the browser window.  
    mainWindow = new BrowserWindow({width: 800, height: 600});  

    // and load the index.html of the app.  
    mainWindow.loadURL('http://localhost:3000');  

    // Open the DevTools.  
    mainWindow.webContents.openDevTools();  

    // Emitted when the window is closed.  
    mainWindow.on('closed', function () {  
        // Dereference the window object, usually you would store windows  
        // in an array if your app supports multi windows, this is the time  
        // when you should delete the corresponding element.  
        mainWindow = null  
    })  
}  

// This method will be called when Electron has finished  
// initialization and is ready to create browser windows.  
// Some APIs can only be used after this event occurs.  
app.on('ready', createWindow);  

// Quit when all windows are closed.  
app.on('window-all-closed', function () {  
    // On OS X it is common for applications and their menu bar  
    // to stay active until the user quits explicitly with Cmd + Q  
    if (process.platform !== 'darwin') {  
        app.quit()  
    }  
});  

app.on('activate', function () {  
    // On OS X it's common to re-create a window in the app when the  
    // dock icon is clicked and there are no other windows open.  
    if (mainWindow === null) {  
        createWindow()  
    }  
});  

// In this file you can include the rest of your app's specific main process  
// code. You can also put them in separate files and require them here.</pre>

([Gist](https://gist.github.com/csepulv/d4a97eaf9438cb4f7f102a1b2d075b93#file-electron-starter-js))

And for steps 5 and 6:

<pre name="6577" id="6577" class="graf graf--pre graf-after--p">{  
  "name": "electron-with-create-react-app",  
  "version": "0.1.0",  
  "private": true,  
  "devDependencies": {  
    "electron": "^1.4.14",  
    "react-scripts": "0.8.5"  
  },  
  "dependencies": {  
    "react": "^15.4.2",  
    "react-dom": "^15.4.2"  
  },  
  "main": "src/electron-starter.js",  
  "scripts": {  
    "start": "react-scripts start",  
    "build": "react-scripts build",  
    "test": "react-scripts test --env=jsdom",  
    "eject": "react-scripts eject",  
    "electron": "electron ."  
  }  
}</pre>

([Gist](https://gist.github.com/csepulv/d4a97eaf9438cb4f7f102a1b2d075b93#file-package-json))

When you run the npm commands in step 7, you should see this:



![](https://cdn-images-1.medium.com/max/1600/0*PNS67yAdZyPsLP_R.jpg)



You can make live changes to the React code and you should see them reflected in the running Electron app.



![](https://cdn-images-1.medium.com/max/1600/0*9Ik8yJdxoyPBWKZs.jpg)



This works okay for development, but has two shortcomings:

*   production won’t use `webpack-dev-server`. It needs to use the static file from building the React project
*   (small) nuisance to run both npm commands

#### Specifying the loadURL in Production and Dev

In development, an environment variable can specify the url for `mainWindow.loadURL` (in `electron-starter.js`). If the env var exists, we’ll use it; else we’ll use the production static HTML file.

We’ll add a npm run target (to `package.json`) as follows:

<pre name="3cc0" id="3cc0" class="graf graf--pre graf-after--p">"electron-dev": "ELECTRON_START_URL=http://localhost:3000 electron ."</pre>

Update: Windows users will need to do the following: (thanks to [@bfarmilo](http://twitter.com/bfarmilo "Twitter profile for @bfarmilo"))

<pre name="6bd7" id="6bd7" class="graf graf--pre graf--startsWithDoubleQuote graf-after--p">”electron-dev”: "set ELECTRON_START_URL=http://localhost:3000 && electron .”</pre>

In `electron-starter.js`, we’ll modify the `mainWindow.loadURL` call as follows:

<pre name="1e15" id="1e15" class="graf graf--pre graf-after--p">const startUrl = process.env.ELECTRON_START_URL || url.format({  
            pathname: path.join(__dirname, '/../build/index.html'),  
            protocol: 'file:',  
            slashes: true  
        });  
    mainWindow.loadURL(startUrl);</pre>

([Gist](https://gist.github.com/csepulv/d4a97eaf9438cb4f7f102a1b2d075b93#file-electron-starter-use-env-var-js))

There is a problem with this: `create-react-app` (by default) builds an `index.html` that uses absolute paths. This will fail when loading it in Electron. Thankfully, there is a config option to change this: set a `homepage` property in `package.json`. (Facebook documentation on the property is [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#building-for-relative-paths).)

So we can set this property to the current directory and `npm run build` will use it as a relative path.

<pre name="f9e8" id="f9e8" class="graf graf--pre graf-after--p">"homepage": "./",</pre>

#### Using Foreman to Manage React and Electron Processes

For convenience, I prefer to not

1.  launch/manage both React dev server and Electron processes (I’d rather deal with one)
2.  wait for the React dev server to start and then launch Electron

[Foremen](https://github.com/strongloop/node-foreman) is a good process management tool. We can add it,

<pre name="5bba" id="5bba" class="graf graf--pre graf-after--p">npm install --save-dev foreman</pre>

and add the following `Procfile`

<pre name="5a33" id="5a33" class="graf graf--pre graf-after--p">react: npm start  
electron: npm run electron</pre>

([Gist](https://gist.github.com/csepulv/d4a97eaf9438cb4f7f102a1b2d075b93#file-procfile-initial-js))

That deals with (1). For (2), we can add a simple node script (`electron-wait-react.js`) that waits for the React dev server to start, then starts Electron.

<pre name="c5b9" id="c5b9" class="graf graf--pre graf-after--p">const net = require('net');  
const port = process.env.PORT ? (process.env.PORT - 100) : 3000;  

process.env.ELECTRON_START_URL = `http://localhost:${port}`;  

const client = new net.Socket();  

let startedElectron = false;  
const tryConnection = () => client.connect({port: port}, () => {  
        client.end();  
        if(!startedElectron) {  
            console.log('starting electron');  
            startedElectron = true;  
            const exec = require('child_process').exec;  
            exec('npm run electron');  
        }  
    }  
);  

tryConnection();  

client.on('error', (error) => {  
    setTimeout(tryConnection, 1000);  
});</pre>

([Gist](https://gist.github.com/csepulv/d4a97eaf9438cb4f7f102a1b2d075b93#file-electron-wait-react-js))

> NOTE: Foreman will offset the port number by 100 for processes of different types. (See [here](https://github.com/strongloop/node-foreman#advanced-usage).) So, `electron-wait-react.js` subtracts 100 to set the port number of the React dev server correctly.

Now modify the `Procfile`

<pre name="e618" id="e618" class="graf graf--pre graf-after--p">react: npm start  
electron: node src/electron-wait-react</pre>

([Gist](https://gist.github.com/csepulv/d4a97eaf9438cb4f7f102a1b2d075b93#file-profile-final-js))

Finally, we’ll change the run targets in `package.json` to replace `electron-dev` with:

<pre name="49f9" id="49f9" class="graf graf--pre graf-after--p">"dev" : "nf start"</pre>

And now, we can execute:

<pre name="81ea" id="81ea" class="graf graf--pre graf-after--p">npm run dev</pre>

> UPDATE (1/25/17) : I‘ve added the following section in response to some user comments ([here](https://medium.com/@luke_schmuke/hey-there-a84bcaf41f17#.szbo7b33n) and [here](https://medium.com/@bfarmilo/hi-again-christian-f2601fb40e03#.5sj6cpnih)). They need access to Electron from within the react app and a simple require or import throws an error. I note one solution below.

#### Accessing Electron from the React App

An Electron app has two main processes: the Electron host/wrapper and your app. In some cases, you’d like access to Electron from within your application. For example, you might want to access the local file system or use Electron’s `[ipcRenderer](http://electron.atom.io/docs/api/ipc-renderer/)`. But if you do the following, you’ll get an error

<pre name="cc14" id="cc14" class="graf graf--pre graf-after--p">const electron = require('electron')  
//or  
import electron from 'electron';</pre>

There is some discussion about this error in various GitHub and Stack Overflow issues, such as this [one](https://github.com/electron/electron/issues/7300). Most solutions propose webpack config changes, but this would require ejecting the application.

However, there is a simple workaround/hack.

<pre name="e23c" id="e23c" class="graf graf--pre graf-after--p">const electron = window.require('electron');</pre>

<pre name="a83b" id="a83b" class="graf graf--pre graf-after--pre">const fs = electron.remote.require('fs');  
const ipcRenderer  = electron.ipcRenderer;</pre>

#### Wrapping Up

For convenience, here is a [GitHub repo](https://github.com/csepulv/electron-with-create-react-app) that has all the changes above, with tags for each step. But, there it isn’t much work to bootstrap an Electron application that uses create-react-app. (This post is much longer than the code and changes you would need to integrate the two.)

And if you are using create-react-app, you might want to check out my post, [Debugging tests in WebStorm and create-react-app](https://medium.com/justideas-io/debugging-tests-in-webstorm-and-create-react-app-b38f389ae7c8#.4qb90t1f1).

Thanks for reading. You can check out more of my posts at [justideas.io](https://justideas.io)

> UPDATE (2/2/17). A reader, [Carl Vitullo](https://github.com/vcarl), suggested to use `npm start` instead of `npm run dev` and submitted a pull request with the changes, on GitHub. These tweaks are available in this [branch](https://github.com/csepulv/electron-with-create-react-app/tree/npm-start).








