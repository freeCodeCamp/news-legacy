---
author: Stefanos Vardalos
authorTwitter: none
authorFacebook: none
title: "The best static website generators, and when you should choose them over a CMS"
subTitle: "Back in the day, web pages were static sites, with only HTML and CSS (and later some JavaScript). Try to remember what that actually mean..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*-fH92NH9bTNk086efq-K7w.png
url: https://medium.freecodecamp.org/static-sites-are-back-24d01a01f11a
id: static-sites-are-back-24d01a01f11a
date: 2017-08-21T08:39:26.491Z
tags: [
  "Web Development",
  "Tech",
  "Startup",
  "Entrepreneurship",
  "Design"
]
---
# The best static website generators, and when you should choose them over a CMS



![](https://cdn-images-1.medium.com/max/1600/1*-fH92NH9bTNk086efq-K7w.png)



Back in the day, web pages were static sites, with only HTML and CSS (and later some JavaScript). Try to remember what that actually means.

There was no server code or database. Your browser downloaded and displayed an HTML file hosted somewhere. Development was done directly in the text files, or through programs like Dreamweaver.

Web development finally gained pace and, up to now, it hasn’t stopped speeding up. At some point, the notion of the Content Management System (CMS) emerged. Then, new ways of developing portals, blogs and marketing sites grew and prospered. They still do, with WordPress being the leading CMS choice right now.

A CMS can solve many problems, both from the point of view of the developer or the administrator. But there are some reasons _not_ to use one of them and return to an old, old friend.

Selecting a CMS for a specific project will need tight specifications and dependencies. A typical WordPress installation will need a web server like Apache, PHP with various extensions and MySQL database. All these must be updated and maintained. But, in certain situations, these procedures can even cause more problems.

One of the most important factors for web development today is security. That, unfortunately, is one of the most important downsides of CMS’s. Using a CMS is like making yourself vulnerable to cyber attacks. The number of vulnerabilities you open yourself to increases with the plugins you install and use. (Plugins being the real reason to use a CMS in the first place.)

Apart from security, another important factor of a modern project is performance. A CMS generates the page the user requested from scratch or uses a built-in or installable plugin. The cache system ensures the reuse of a pre-generated page whenever possible. Using some type of cache system can help a lot, but it may add quite some overhead.



![](https://cdn-images-1.medium.com/max/1600/1*SNnK1-ts3IwtixbYy6aSZQ.jpeg)

A screenshot of the nice graphic user interface that CMS tools offer nontechnical users.



So by creating a static site, these problems become obsolete. A static site consists only of, as the name suggests, static files. Like some HTML and CSS files, and little bit of JavaScript.

There are no specific requirements for the type of the machine that will host the page, no back-end language restriction and no need for a database. As static files served to the browser, there are no actual vulnerabilities.

The actual pages are already generated and maybe minified. From performance point of view, they seem to be a lot better than any CMS-cached solution.

More so, modern static site generators typically read from flat-type files, like Markdown. The post content resides in files, instead of a database, so you can put them under your Git workflow.

But static sites have some disadvantages, too. You are basically ditching the back-end of the web. Most importantly, you lose interactivity with the user — things like user profiles, favorites, and suggested reads. There are ways to add a couple of these features — like commenting through the Disqus platform — but these are not optimal.

The biggest feature missing from these generators is the lack of an administrative UI. (Although it’s a fair guess that there will be a solution for this at some point.) Some more technical people might not find it as difficult to create new files in proper folders and link assets as images. But for the most part, nontechnical content creators may find the lack of an admin UI to be a living hell.

This is primarily a project planning decision based on its requirements. For many websites, a CMS is definitely overkill.

Considering the above points, you should be able to answer whether a static website is enough for a specific project. But another problem would be the large amount of choices required and the accompanying initial setup time.

In the CMS world, there are countless options, but also a winner. WordPress, as a choice, will do the job for any project. On the Static Site Generators world, there are too many options — [459](https://staticsitegenerators.net/) to be precise.

But there is no clear winner or some way to differentiate them. It seems like it might change from now on, but it remains to be seen. Some of them have gained extensive popularity and are worth noting.







![](https://cdn-images-1.medium.com/max/2000/1*xbivs4c7SBkMAHnNFIUHuA.png)

Stats through [StackShare](https://stackshare.io/stackups/gatsby-vs-wintersmith-vs-hugo-vs-hexo-vs-jekyll)







[**Jekyll**](https://jekyllrb.com/) is by far the most popular one of those generators. It’s built with Ruby and integrated into GitHub Pages. So, it’s quite popular for personal projects and/or documentation. It has a huge user base and a big directory of plugins.

[**Hugo**](https://gohugo.io/) is quite like Jekyll. It’s built on Go and its main point against Jekyll is its blazing fast speed. Jekyll can be quite slow when the actual site is being generated , especially when the number of posts/pages goes up.   
But Hugo generates the site in a matter of seconds. There are other abstractions that make Hugo more user-friendly and easier to start with. It does not need as much configuration to create something from scratch.

[**Hexo**](https://hexo.io/) is a newer addition and created with NodeJS. Advertised, and mostly used as a blog platform, it combines the extensibility of Jekyll with the speed of Hugo. (actually faster than Hugo)

[**Wintersmith**](http://wintersmith.io/) is another one built on top of NodeJS. This one is different as it is quite minimalistic. It basically is a platform that you can customize through some plugins to your needs. It definitely requires some tweaking to make it work, but leaves more space for customization.

The last option is the newest and the most interesting one.

[**Gatsby**](https://www.gatsbyjs.org/) is the one framework that brings the static pages to stacks nowadays. It uses React.js and Webpack to create a SPA ( Single Page Application ) with your content. It promises to remove much of the configuration needed for such an application. Doing so, it provides the developer with an easy to use solution that will, in the end, produce a modern and high-end application.   
The truth is that Gatsby can be used for many other things than just a blog. Its true limit hasn’t been found yet.(As it only reached its first stable release earlier this month.)

The fact that it uses React helps a lot as more developers are using React right now or plan to soon.

### Summary



![](https://cdn-images-1.medium.com/max/1600/1*Sj3MViNvQvqm1PaofTbu0g.png)

Downloads in the past 6 Months



Looking at the downloads from the last six months, we can see that Gatsby might be a winner in the making. Those numbers might not be 100% true.   
Gatsby can also be used for more complex things than markdown-to-HTML conversion. But, as its user base expands fast, we may have found the WordPress for static site generators.








