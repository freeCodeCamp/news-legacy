---
author: Khawaja Farooq
authorTwitter: https://twitter.com/khfarooq
authorFacebook: https://facebook.com/10155169220518913
title: "How to use Visual Studio Team Services for iOS native apps"
subTitle: "Visual Studio Team Services (VSTS) provides an easy way to share code, automate builds, run unit tests, and ship software. Developers fro..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*Mm3f1tm-X0dpyjNbiubucw.gif
url: https://medium.freecodecamp.org/devops-for-ios-native-apps-with-visual-studio-team-services-1d792ae997f1
id: devops-for-ios-native-apps-with-visual-studio-team-services-1d792ae997f1
date: 2017-04-11T09:18:21.815Z
tags: [
  "Continuous Integration",
  "DevOps",
  "Tech",
  "iOS",
  "iOS App Development"
]
---
# How to use Visual Studio Team Services for iOS native apps



![](https://cdn-images-1.medium.com/max/1600/1*Mm3f1tm-X0dpyjNbiubucw.gif)













* * *







[Visual Studio Team Services](https://www.visualstudio.com/team-services/) (VSTS) provides an easy way to share code, automate builds, run unit tests, and ship software. Developers from a wide range of platforms rely on it. It promotes continuous integration, which can accelerate the process from concept to delivery.

Microsoft has done a substantial amount of work to improve DevOps for Mobile and other platforms. However, there are no specifics for the iOS native platform. Here’s a guide on how to set up VSTS for an iOS project, so you can leverage its continuous integration capabilities.

Here are the pre-requisites to get started:

1.  Buildable Xcode project on GitHub / TFS
2.  VSTS Account

### Create a VSTS Project

Create a new team project → _Settings > Overview > New team project_



![](https://cdn-images-1.medium.com/max/1600/1*vF6vC1jpn0588Z3HixoVNA.png)



The next step is to import your existing repository. For now, we are using GitHub. Click _import a repository_.



![](https://cdn-images-1.medium.com/max/1600/1*kESu5Dk0XPNsTXQn3LCBDg.png)



Now you have your own copy of the repository that you should be able to see!

### Install the iOS Build Agent

VSTS doesn’t have any preinstalled agent for building an Xcode project. This part is crucial.

Fortunately, the configuration is covered by [James Montemagno for Xamarin iOS](https://blog.xamarin.com/continuous-integration-for-ios-apps-with-visual-studio-team-services/). For convenience, I’m quoting some of the steps here.

You’ll need to install the following items to prepare your Mac:

1.  [Homebrew OS X](https://brew.sh/)
2.  [.NET Core](https://www.microsoft.com/net/core#macos)
3.  Install npm using command: **brew install npm**
4.  Create a [Personal Access Token](https://www.visualstudio.com/en-us/docs/setup-admin/team-services/use-personal-access-tokens-to-authenticate) (PAT) and for the scope: _Agent Pools (read, manage)_

#### Agent Queue

1.  Create new agent queue “OSX” → _Settings > Agent queues_
2.  Download and configure the build agent for OS X.



![](https://cdn-images-1.medium.com/max/1600/1*Xcf3nLy6HMysbw6TCD50ag.png)



Once the configuration is done, run the build agent with the following command:

<pre name="d0cf" id="d0cf" class="graf graf--pre graf-after--p">./run.sh</pre>

Well done! You have an on-premise build agent running.

### Create the Xcode Build Definition

Once you have installed the build agent, it’s time to create a build definition. These steps will create a build definition for Xcode iOS instead of Xamarin. Go to → _Build & Release > New Definition > Xcode_



![](https://cdn-images-1.medium.com/max/1600/1*yWePIaxdLZRnOWRzF7XLLw.png)



Don’t forget to select your agent pool that you just created.



![](https://cdn-images-1.medium.com/max/1600/1*u6N7mDEmc76fJ90mMbU_jg.png)



Xcode build definition may look like the following:



![](https://cdn-images-1.medium.com/max/1600/1*YHjDJ47jjL0K8YA7kEHMvg.png)



_Workspace path_ varies whether you are using an Xcode workspace or just a project.

In case you are using an Xcode workspace:

<pre name="c077" id="c077" class="graf graf--pre graf-after--p">*.xcodeproj/project.xcworkspace</pre>

For an Xcode project:

<pre name="2be1" id="2be1" class="graf graf--pre graf-after--p">*.xcodeproj</pre>

You can also use some utilities to [copy and publish your build artifacts](https://www.visualstudio.com/en-us/docs/build/steps/utility/copy-and-publish-build-artifacts).

Next, save the build definition and queue a new build…



![](https://cdn-images-1.medium.com/max/1600/1*pQRrEd79yIN6hVBlSwwHiA.png)



You should get a build error. We need to make one change to the Xcode project configuration.

### Configure the Xcode project/workspace

VSTS needs a shared project scheme in order to build the project. Make sure to enable it. _Xcode_ → _Product > Schemes > Manage schemes_











* * *









![](https://cdn-images-1.medium.com/max/1600/1*WtH6wwiULoNWZ_5kXWTu-w.png)



Now push the changes to your source control and build again.



![](https://cdn-images-1.medium.com/max/1600/1*v3qsNXXWyR5mHoLyK8p0SQ.png)



### Deploy to HockeyApp

HockeyApp helps testers for beta app testing. It’s easy to install [the VSTS Extension](https://marketplace.visualstudio.com/items?itemName=ms.hockeyapp) from the marketplace. This enables the app to be uploaded after it builds successfully.



![](https://cdn-images-1.medium.com/max/1600/1*59oj5mA1fH-Ij0mn8ui7hg.png)













* * *







[**_Download & import sample build definition_**](https://github.com/khawajafarooq/XcodeBuildDefinition)

Visual Studio Team Services provides continuous integration for iOS developers. By automating a lot of repetitious tasks, it saves you time.

Another option is [MacinCloud](http://www.macincloud.com/), a cloud solution for building iOS native apps. For now, we have reviewed on-premise build capabilities as _Azure_ doesn’t provide VM support for Mac OS X. Give VSTS a try and leave any feedback in the comments or get in touch on twitter [@khfarooq](https://twitter.com/khfarooq), that’s what keeps me going. Thanks for reading! 🤹








