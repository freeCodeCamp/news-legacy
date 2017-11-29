---
author: Jake Soenneker
authorTwitter: https://twitter.com/soenneker
authorFacebook: none
title: "How to get your users to actually update your app"
subTitle: "The software development cycle is accelerating, and the web supports it beautifully. There’s no need to send new binaries to your users. ..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*94NdJI6DWSeplX9gibc2hA.png
url: https://medium.freecodecamp.org/the-architecture-of-an-intelligent-application-update-system-3fc2f27a4a2
id: the-architecture-of-an-intelligent-application-update-system-3fc2f27a4a2
date: 2017-01-29T17:24:49.025Z
tags: [
  "Tech",
  "Technology",
  "Software Development",
  "Software",
  "Startup"
]
---
# How to get your users to actually update your app



![](https://cdn-images-1.medium.com/max/1600/1*94NdJI6DWSeplX9gibc2hA.png)

Image credit: [XKCD](https://xkcd.com/1197/)



The software development cycle is accelerating, and the web supports it beautifully. There’s no need to send new binaries to your users. They just visit your site and presto — they instantly have the latest and greatest version of your code.

But there are situations where your app can’t be served over the web. And sometimes your users need your app to run even when they don’t have internet access. And let’s face it — in 2017 there are still a lot of apps that are too resource-intensive to run in a browser. So desktop applications aren’t going anywhere.

This said, desktop app users still want to be “on edge” with your latest version. They want to be using that cool new feature they read about on your development blog.

“No problem,” the developer says. “I’ll Compile the code, insert the binaries into the installer, and publish a new version to my site. Then users can download my latest version. I’ll just tweet out a link, or include it in next week’s email blast to let them know.”

This is the traditional way to go about updating a client. And it’s OK for 98% of native desktop applications. It’s business-as-usual for your users. It’s error resistant, and doesn’t require a whole lot of work from developers. Developers can even put a “check for updates” item in their context menus. Your app can ping your website for a latest version number, then redirect your users to the file.

Well, it’s become clear that this traditional way isn’t good enough. Here’s why:

*   Announcements are critical for getting users on your next version.
*   If your app accesses network services, developers need to make them backward compatible.
*   Users have to manually update the software. This is means time, energy, and focus lost.
*   Customer support doesn’t want to address issues with outdated versions.
*   Users often retrieve their software other than from the source. It takes time for a new version to propagate, and it will never be up-to-date everywhere.
*   For some apps and games, it’s critical that every user runs the exact same version.

Automatic updating is hard. Companies feel the burn all the time when something goes wrong.

For example, as a user, I don’t know what Slack is doing when it’s updating. All I know is that when it finishes, it often tells me that it’s _still_ not up to date. Chrome fails all the time and doesn’t even tell me why. Windows Update is getting better.

Well, as a developer, I have sympathy for the products and the teams who maintain them, because there are many reasons why updates are so difficult.



![](https://cdn-images-1.medium.com/max/1600/1*LoCTcQ0OKUiqrKb4amjGGg.png)

Image credit: [XKCD](https://xkcd.com/1328/)



*   Users run a massive array of operating systems and environment combinations these days.
*   The underlying frameworks may need to be updated from one version to the next, too.
*   Users continue to tweak security and permissions.
*   Users may neglect to install updates to their operating system or to your application itself.
*   What if the update system itself needs updating?
*   With deploys getting more automated, and with teams shipping code faster, bugs and security issues evolve faster as well.

#### **More applications need better update systems.**

These update systems add enormous value by giving users the best experience your organization has to offer.

There are oodles of update frameworks available. One popular framework is [Squirrel](https://github.com/Squirrel/Squirrel.Windows).

If you’re grappling with update issues, I would urge you to do your homework before recommending anything to your team. It’s worth noting that a large percentage of the existing systems in production today are custom-built. This is because these systems gives developers the most control to their code.

#### There are several features to an intelligent and flexible update system:

*   The ability to download “deltas” — the differences between the current installation and the new. There’s no need to download a file if the user already has it.
*   The system can update and repair itself, and it can recover from issues as they arise.
*   The system can detect existing frameworks on the operating system. It can download and install new frameworks without the user having to fetch them themselves.

Some architectures depend on services. I’m looking at you, Google and Adobe. Well, developers shouldn’t rely on these resource-intensive always-running background processes if they can avoid them.

The architecture I’m going to describe is only one type, but most of them are a variation and follow the same general principles. Going forward, I’ll be more Windows-specific, but these fundamentals apply to other operating systems, too. I’ll cover the basic concepts behind the update system’s components.



![](https://cdn-images-1.medium.com/max/1600/1*-0LDYjUTkv2DE8ls4GvVqg.png)

The update system components



### The Installer

This is the initial entry point for the user, and it’s where the whole process begins. This isn’t a typical ClickOnce or Wix instalIer. It’s a single executable. It does several important things, and it may come as a surprise that it doesn’t contain the main application. What does it do then?

1.  First it checks for OS compatibility. Will this computer be able to run the application at all?
2.  It has a very low framework requirement. For example, on Windows this would be .NET 2.0 or 3.0\. This means users can open the installer with ease if they’re behind on updates.
3.  The Installer’s executable has the Updater embedded inside it. Not including the target application makes the executable small in file size. This is great for distribution. The less time there is between the moment the user clicked the download button and the moment they open the installer, the better.
4.  The Installer downloads and installs any necessary frameworks for the Updater. This means going out to Microsoft’s site, retrieving the .NET installer, and using silent parameters to install it.
5.  It creates the initial directories where the entire application environment will stay. Where is that exactly? On Windows, it’s:

<pre name="0759" id="0759" class="graf graf--pre graf-after--li">C:\Users\<Username>\AppData\Local\ </pre>

Why? You don’t need Administrator privileges to install there. This in turn makes the user experience even better, and allows users that don’t have privileges to still use your software. **Unless there’s an excellent reason for doing so, don’t prompt the UAC and require privilege escalation.**

6\. The Updater is extracted into AppData and if shortcuts need creating, they will point to the Updater.

7\. Once that’s done, it starts the Updater.

### The Updater

The Updater is the most important part of the entire system, hence the name. It serves as a hub for the rest of the update system.

1.  First, the Updater takes inventory of the files residing in the folder where it lives. It hashes (MD5, SHA, etc.) each of the files, and stores the values in a dictionary.
2.  The Updater will send the current framework version it’s dependent on to the Update Server. This is so the Update Server can instruct the Updater to grab a new framework version if it’s needed.
3.  The Updater will send the dictionary of files/hashes, and the Update Server will determine if the user needs an update. If it doesn’t, the client can move on to the Application.
4.  If there is an update available, the Updater will download a compressed file from the Update Server. It will extract the contents in a new folder. If this is the first time the user has opened the Updater, they will receive a package that contains the Application. **If the user has downloaded an older installer, this method ensures that there’s no need to download the application twice.**
5.  The Updater starts the Extractor.

### The Extractor

The point of the Extractor is so that the Updater itself can update. The Extractor doesn’t even need an interface.

1.  The Extractor performs any cleanup necessary.
2.  It moves the files from the extracted contents folder back into where the Application lives.
3.  The Extractor starts the Updater.

### The Update Server

Why not host the binaries on a web server instead of building a dedicated update server application? Well it’s not possible to do things like client framework checking with a web server, and it won’t be able to build delta update packages. It also helps with things like determining if a repair is necessary or not. There can also be unique version migration situations that may need handling.

1.  On the server, all of the components of the update system live in a folder it has access to. When it starts, it builds it’s own hash dictionary of each of these files.
2.  The necessary dependent framework version is set as a configuration setting on the Update Server. If the message sent from the Updater is less than the version, it will instruct the Updater to download and install the new framework.
3.  When the development team is ready to deploy a new version, they replace the files the Update Server has inventoried. They refresh the hash dictionary.
4.  Remember when the Updater sent that hash dictionary? Well the Update Server compares the two dictionaries and determines the client’s outdated files. This is how it builds delta packages.
5.  It compresses the package, and the Update Server will send a message for the Updater to begin its download.

The following is a diagram of the process moving through the update procedure:



![](https://cdn-images-1.medium.com/max/1600/1*M9MTF_PMrgkhHvQJskWvrw.png)



### Last words

In this design, the Updater is the entry point to the application. That doesn’t need to be the case though. Some questions to ask when building an update system:

*   Do you ask if the user wants to update, do you make it required, or do you hide the process?
*   Does the Updater need to be its own separate component? It may be able to live in the application itself.
*   Is updating necessary before the application begins? Perhaps it can update as the application is running.

These are types of questions the developer should consider before jumping into a design. Automated application updating is becoming more popular, and for good reason. It’s easier on the user, and it gets the developer’s code into their hands quicker. **As an engineer, strive to make your updating process better for you and your users.**

Thanks for reading!








