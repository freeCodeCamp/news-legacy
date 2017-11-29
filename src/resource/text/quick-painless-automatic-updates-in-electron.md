---
author: Andrea Zanin
authorTwitter: none
authorFacebook: none
title: "Quick and painless automatic updates in Electron"
subTitle: "Let’s face it: most users won’t go back to your site and download the updates for your brand new Electron app. Instead, you should put in..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*afd_KNE6oIHoqycO5GlDXA.jpeg
url: https://medium.freecodecamp.org/quick-painless-automatic-updates-in-electron-d993d5408b3a
id: quick-painless-automatic-updates-in-electron-d993d5408b3a
date: 2017-10-28T16:43:32.734Z
tags: [
  "JavaScript",
  "Tech",
  "Development",
  "Front End Development",
  "Software Development"
]
---
# Quick and painless automatic updates in Electron







![](https://cdn-images-1.medium.com/max/2000/1*afd_KNE6oIHoqycO5GlDXA.jpeg)







Let’s face it: most users won’t go back to your site and download the updates for your brand new Electron app. Instead, you should put in place some kind of automatic update system.

Unfortunately, the online documentation for this is neither very easy to find nor follow. Here, I will guide you through a quick process to setup an auto-updater, using GitHub as a host.

### Setting up the repository

To publish on your behalf, electron-builder needs a GitHub access token. If you don’t know what these are or how to create one, check out GitHub’s [quick guide](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/).

Electron-builder needs a token with access to the repo scope. Create one as described in the link, and copy it somewhere safe (you will only be shown the token once!).

### Setting up the library

We are going to use [electron-builder](https://github.com/electron-userland/electron-builder) to package our app, so let’s start by installing it:

<pre name="59c2" id="59c2" class="graf graf--pre graf-after--p">npm install electron-builder --save-dev</pre>

Let’s also install [electron-updater](https://github.com/electron-userland/electron-builder/tree/master/packages/electron-updater) to handle the automatic updates:

<pre name="21ec" id="21ec" class="graf graf--pre graf-after--p">npm install electron-updater --save</pre>

Then, we need to configure our build. In the `package.json` add this snippet:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2c0547008b8ad2c0dde155e24e2d18ec?postId=d993d5408b3a" data-media-id="2c0547008b8ad2c0dde155e24e2d18ec" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F22430306%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Let’s analyze this bit by bit:

*   The `repository` link is pretty self explanatory — just remember to replace it with yours!
*   The `build` script will build your app locally, without publishing.
*   The `ship` script will build and publish your app.

**Note for React developers**: electron-builder and create-react-app have some conflicts by default. I created a generator that sets up an electron+react+electron-builder app with zero configuration needed. You can find it [here](https://www.npmjs.com/package/generator-react-electron).

Now create a file called`electron-builder.yml` with the following content:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/35930ff391d529eda6989956decbbe9a?postId=d993d5408b3a" data-media-id="35930ff391d529eda6989956decbbe9a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F22430306%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





*   The `appId` is the name of your application in the Operating System register. You can choose it freely.
*   The `provider` is the platform that will store your application’s installer.
*   The `token` is the GitHub access token. Substitute it with the one you created earlier.

Remember to add this file to the `.gitignore` so that you don’t share your token with the whole world! ;)

### Handling the update logic

Now we need to configure the update logic in our Electron app. Integrate this in your entry file (usually `index.js` or `electron.js`). If you are creating a brand new app, then you can simply copy-paste the code below:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/64d7b8df3f3cba47c411a2c392ffa022?postId=d993d5408b3a" data-media-id="64d7b8df3f3cba47c411a2c392ffa022" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F22430306%3Fv%3D4%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





IPC modules are the standard way to send messages between processes in Electron. You can learn more about them [here](https://github.com/electron/electron/blob/master/docs/api/ipc-main.md).

The code is pretty self-explanatory and handles the Electron side of the update. Now we have to notify the user.

Here is an example of a HTML page. It displays a button whose caption is either “no updates ready” or “new version ready!”. When the button is clicked, a method is called which tells Electron to quit and install the new updates.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d3dd37e5562165e5f2e4efe2e02554b3?postId=d993d5408b3a" data-media-id="d3dd37e5562165e5f2e4efe2e02554b3" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F22430306%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





### And finally, ship

When you are ready to publish, edit the `version` field in the `package.json`and run the following command:

<pre name="3bf4" id="3bf4" class="graf graf--pre graf-after--p">npm run ship</pre>

Go to your repository’s GitHub page and click ‘releases’ (it’s on the same line as ‘commits’and ‘branch’). There, you will find a draft release. Click ‘edit’and then ‘publish release’.

Don’t panic if the button shows “no updates ready” when you start the app. This will only change after it has finished downloading the new version.

If you want to use a functioning project to learn more and get started, you can clone [this example repository](https://github.com/ZaninAndrea/electron-autoupdate-example).

If you found this article helpful, be sure to clap 👏.








