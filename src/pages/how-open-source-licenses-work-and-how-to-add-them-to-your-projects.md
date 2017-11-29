---
author: Radu Raicea
authorTwitter: https://twitter.com/radu_raicea
authorFacebook: none
title: "How open source licenses work and how to add them to your projects"
subTitle: "Recently, there was some exciting news for developers around the world. Facebook changed the license of multiple libraries they develop. ..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*FFYtzf28XKPFBdknfXf-jg.jpeg
url: https://medium.freecodecamp.org/how-open-source-licenses-work-and-how-to-add-them-to-your-projects-34310c3cf94
id: how-open-source-licenses-work-and-how-to-add-them-to-your-projects-34310c3cf94
date: 2017-10-17T07:40:05.944Z
tags: [
  "Programming",
  "Web Development",
  "Tech",
  "Startup",
  "Technology"
]
---
# How open source licenses work and how to add them to your projects







![](https://cdn-images-1.medium.com/max/2000/1*FFYtzf28XKPFBdknfXf-jg.jpeg)

Image credit: GitHub







Recently, there was some exciting news for developers around the world. Facebook changed the license of multiple libraries they develop. They switched from **BSD-3+patents** to a **MIT**.





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/4bced36118b0ff8efe3b3c6f1afa39ad?postId=34310c3cf94" data-media-id="4bced36118b0ff8efe3b3c6f1afa39ad" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F446356636710363136%2FOYIaJ1KK_400x400.png&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





That seems good, but what does it mean? What are the implications of different open source licenses?

This article will give you a quick understanding of the popular licenses. It will also teach you how to apply them to your open source projects on GitHub.

### The Authority

The most popular open source licenses have an important aspect in common. The [Open Source Initiative](https://opensource.org/) (OSI) has approved them.

OSI formed in 1998 with the goal of promoting open source software. It has created the [Open Source Definition](https://opensource.org/osd) (OSD) to define what an open source software means.

This is how they describe themselves:

> The Open Source Initiative (OSI) is a non-profit corporation with global scope formed to educate about and advocate for the benefits of open source and to build bridges among different constituencies in the open source community.

### The Licenses

Most open source licenses include the following statements:

1.  Software can be modified, used commercially, and distributed.
2.  Software can be modified and used in private.
3.  A license and copyright notice must be included in the software.
4.  Software authors provide no warranty with the software and are not liable for anything.

We will go through the most popular licenses, in order from the most restrictive to the most permissive (from a user’s perspective).

#### GNU General Public License, version 3 (GPLv3)

[GPLv3](https://www.gnu.org/licenses/gpl-3.0.html) is one of the most restrictive licenses. It offers high protection for the author of the software.

*   The source code must be made **public** whenever a distribution of the software is made.
*   Modifications of the software must be released under the **same license**.
*   Changes made to the source code **must be documented**.
*   If patented material was used in the creation of the software, it grants the right for users to use it. If the user sues anyone over the use of the patented material, they lose the right to use the software.

[**GPLv2**](https://www.gnu.org/licenses/gpl-2.0.html) is also very popular. The main difference from GPLv3 is the clause on patent grants.

That clause was added in version 3 to prevent companies from [charging users for the use of their patents](http://www.nytimes.com/2006/11/22/technology/22soft.html).

Popular projects using GPLv3 are [**Bash**](https://www.gnu.org/software/bash/) and [**GIMP**](https://www.gimp.org). [**Linux**](https://github.com/torvalds/linux) uses GPLv2.

[Ezequiel Foncubierta](https://medium.com/@ezequiel) pointed something important for GPL licenses:

> The license of your source code must be compatible with the license of the open source code you are linking to. For instance, if your code is proprietary, you won’t be allowed to use a library under the GPL license. This is where people tends to make more mistakes.

#### Apache License 2.0

[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) offers more flexibility to the users.

*   The source code **doesn’t need to be public** when a distribution of the software is made.
*   Modifications to the software can be release under **any license**.
*   Changes made to the source code **must** be documented.
*   It offers the same patent usage protection as GPLv3.
*   It explicitly prohibits the use of trademarked names found in the project.

Popular projects using Apache License 2.0 are [**Android**](https://github.com/aosp-mirror/platform_system_core/blob/master/NOTICE), [**Apache**](https://httpd.apache.org), and [**Swift**](https://github.com/apple/swift).

#### Berkeley Software Distribution (BSD)

BSD has two main versions: [2-clause](https://opensource.org/licenses/BSD-2-Clause) and [3-clause](https://opensource.org/licenses/BSD-3-Clause). They both offer more flexibility to the users than the Apache License 2.0.

*   The source code **doesn’t need to be public** when a distribution of the software is made.
*   Modifications to the software can be release under **any license**.
*   Changes made to the source code **may** **not** be documented.
*   It offers no explicit position on patent usage.
*   The license and copyright notice must be included in the documentation of the **compiled version** of the source code (as opposed to only in the source code).
*   The BSD 3-clause states that the names of the author and contributors can’t be used to promote products derived from the software without permission.

Popular projects using BSD license are [**Go**](https://github.com/golang/go) (3-clause), [**Pure.css**](https://github.com/yahoo/pure) (3-clause), and [**Sentry**](https://github.com/getsentry/sentry) (3-clause).

#### MIT License

[MIT](https://mit-license.org) is one of the most permissive licenses. It is also the most popular one. It offers very low protection for the author of the software.

*   The source code **doesn’t need to be public** when a distribution of the software is made.
*   Modifications to the software can be release under **any license**.
*   Changes made to the source code **may** **not** be documented.
*   It offers no explicit position on patent usage.

Popular projects using MIT are [**Angular.js**](https://github.com/angular/angular.js), [**jQuery**](https://github.com/jquery/jquery), [**Rails**](https://github.com/rails/rails), [**Bootstrap**](https://github.com/twbs/bootstrap), and many more.

Facebook’s [**React.js**](https://github.com/facebook/react) had a BSD-3+patents license up until September 25th. It combined the BSD-3 license with an extra clause on patents usage.

In a nutshell, if you sue Facebook or any of its subsidiaries, you lose the right to use React (or any other software under the same license).

React is now MIT licensed. You are now able to sue Facebook and still use React. What a relief!

### Applying a license to your open source projects

Licensing your projects is easy. You need to add a `LICENSE`, `LICENSE.txt` or `LICENSE.md` in the root directory of your repository.

GitHub makes it even easier:

1.  Open your GitHub repository in a browser.
2.  In the root directory, click on `**Create new file**`.
3.  Name the file “LICENSE”.
4.  Click on `**Choose a license template**`.
5.  Pick one of the licenses (all the ones mentioned in this article are there).
6.  Once chosen, click on `**Review and submit**`.
7.  `**Commit**` the file.

### In summary…

*   One of the most restrictive licenses is **GPL**.
*   One of the most permissive licenses is **MIT**.
*   Other popular licenses are **Apache License 2.0** and **BSD**.
*   To apply a license on your GitHub project, you need to create a `LICENSE` file using GitHub’s license templates.

**Check out my** [**explanation**](https://medium.freecodecamp.org/how-i-used-python-to-find-interesting-people-on-medium-be9261b924b0) **of how I used Python to find interesting people to follow on Medium!**

For more updates, follow me on [Twitter](https://twitter.com/radu_raicea).








