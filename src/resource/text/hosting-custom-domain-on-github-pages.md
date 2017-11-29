---
author: Taurus Omejia
authorTwitter: https://twitter.com/TaurusO
authorFacebook: https://facebook.com/10153277283506872
title: "Host your Static Website on your own Domain through Github Pages"
subTitle: "Did you know that Github will allow anyone to host their static webpages for free? The best part is that you can even use your own custom..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*FFYtzf28XKPFBdknfXf-jg.jpeg
url: https://medium.freecodecamp.org/hosting-custom-domain-on-github-pages-8c598248d2bc
id: hosting-custom-domain-on-github-pages-8c598248d2bc
date: 2015-10-22T19:23:28.056Z
tags: [
  "Github",
  "Coding",
  "Programming",
  "Self Improvement",
  "Productivity"
]
---
# Host your Static Website on your own Domain through Github Pages

Did you know that Github will allow anyone to host their static webpages for free? The best part is that you can even use your own custom domain. Let’s do this!











* * *







#### Step 1: Create your website

If you already have a website, than you can move on to step 2.

If not then today is good day to start.

I suggest starting a blog. A blog is a great way to establish a more meaningful presence online. You can leverage it to build your own [personal online brand](http://www.forbes.com/sites/shamahyder/2014/08/18/7-things-you-can-do-to-build-an-awesome-personal-brand/).

Don’t know where to start? I got you covered. John Sommez of [Simpleprogrammer.com](http://simpleprogrammer.com/?__s=e9nxoo3daippuegoyzyj&utm_campaign=lesson-5-do-you-know-how-to-get-traffic-for-your-blog&utm_medium=email&utm_source=how-to-create-a-blog-that-boosts-your-career-course) has an excellent email course called: [How To Build A Blog That Will Boost Your Career](http://t.dripemail2.net/c/eyJhY2NvdW50X2lkIjoiOTUyNDk2NiIsImRlbGl2ZXJ5X2lkIjoiMjQ3MzM4MTciLCJ1cmwiOiJodHRwOi8vZGV2Y2FyZWVyYm9vc3QuY29tL2Jsb2ctY291cnNlLz9fX3M9ZTlueG9vM2RhaXBwdWVnb3l6eWpcdTAwMjZ1dG1fY2FtcGFpZ249bGVzc29uLTUtZG8teW91LWtub3ctaG93LXRvLWdldC10cmFmZmljLWZvci15b3VyLWJsb2dcdTAwMjZ1dG1fbWVkaXVtPWVtYWlsXHUwMDI2dXRtX3NvdXJjZT1ob3ctdG8tY3JlYXRlLWEtYmxvZy10aGF0LWJvb3N0cy15b3VyLWNhcmVlci1jb3Vyc2UifQ). It’s a great course that walks you through the process.

So you decided to start a blog. Now what? There are many ways you could go, such as Wordpress, Tumblr, or even Blogger.

But that would defeat the purpose of this article. We want to use Github Pages to host a static page for free. So I recommend using a static blog generator.

I personally use [Jekyll](http://jekyllrb.com/) for my blog. Buts there are many others out there. Here’s a list of some of the more popular ones: [Static Blog Generators](http://www.sitepoint.com/6-static-blog-generators-arent-jekyll/). Choose one, read the instructions, and get your blog set up!











* * *







#### Step 2: Add your site to Git Version Control

Great you made it to step 2\. Now that your blog is ready, let’s put it under version control using [Git](http://git-scm.com/). This Article assumes you have [Git installed](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git), you have a github account and can [push to it](http://guides.railsgirls.com/github/).

*   This step is very important: create a simple .txt file and name it “CNAME”. Open the file and type your custom domain name in it. Save it.



![](https://cdn-images-1.medium.com/max/1600/0*ooJqWG_qyn-Qlmr-.png)

Create a simple .txt file and name it CNAME



OK! Crank up your terminal and navigate to the directory your site lives in. Its time to initialize version control by entering the command.

<pre name="add4" id="add4" class="graf graf--pre graf-after--p">$ git init</pre>

Now to add the entire project under git tracking. Enter:

<pre name="bf13" id="bf13" class="graf graf--pre graf-after--p">$ git add .</pre>

Let’s commit it:

<pre name="fb8b" id="fb8b" class="graf graf--pre graf-after--p">$ git commit -m “first commit”</pre>

Your site is now under version control. Now the fun begins.











* * *







#### Step 3: Push your site to Github

We are finally ready to push to GitHub and see our site automatically running live online for free!

1.  Launch [github.com](https://github.com/) and sign in.
2.  On your home page click the big green button that says “+ New repository.”
3.  For your page to automatically be hosted, you must follow a specific naming convention. Name your repository “[your-username].github.io”, leave everything else as is, and press “Create Repository”.



![](https://cdn-images-1.medium.com/max/1600/0*1RJpGhJ1eFNwlCAy.png)

Name your repository, don’t do anything else, hit ‘Create Repository’



Now follow GitHub’s instruction to push your blog to your new repository.

That’s it! Your new page should be up at http://your-username.github.io.

If you don’t see it right away, give it a few minutes, ten at the most.

That’s it! For most people this is all you need to do. However for those of you that would like to use your own custom domain continue to the final step.











* * *







#### Step 4: Assign your custom domain to your new GitHub pages website

This will vary depending where you registered your domain. I have GoDaddy, so these instructions are specific to that. But the steps should be similar with other domain providers. Here is how I did it:

1.  I signed into my GoDaddy account and selected “manage domains”. I selected the domain I wanted to use and clicked “Manage Connection”.
2.  On the “Domain Details” page I clicked the “DNS ZONE FILE” tab.
3.  Edit “A-Host” and point it to 192.30.252.153
4.  Now edit the www potion of “CName (Alias)” and point it to [your-username].github.io.
5.  Make sure to save everything. Once you save this, it could take up to an hour to update completely.
6.  Now “[your-custom-domain].com” should point to [your-username].github.io. But what if your user types “www.[your-custom-domain].com” instead? Let’s fix it so that the www subdomain will point to [your-username].github.io as well.
7.  Select your domain and press “Manage Connections”, then select the “Settings” tab.
8.  Under Forwarding -> Domain, click “manage”.
9.  Click on “Update Forwarding”.
10.  In “Forward to:” type www.[your-custom-domain].com
11.  Make sure 301 (Permanent) is selected, then save your work.
12.  That’s it. Allow it about 1 hour for everything to update.

Let me be the first to congratulate you. You have a website up and running, under version control, with your own domain name — all hosted free of charge!











* * *







_Originally published at_ [_www.tauruso.com._](http://www.tauruso.com/guide,/beginner,/tutorial/2015/04/17/Github-pages/) _To view this article in all its glory and more from_ [_Taurus Omejia_](https://medium.com/@taurusomejia)_, go_ [_HERE!_](http://www.tauruso.com)








