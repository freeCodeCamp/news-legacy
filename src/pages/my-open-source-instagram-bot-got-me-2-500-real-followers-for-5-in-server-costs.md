---
author: TimG
authorTwitter: https://twitter.com/timigrossmann
authorFacebook: https://facebook.com/1295212793843915
title: "My open source Instagram bot got me 2,500 real followers for $5 in server costs"
subTitle: "A few months ago, I started a side project to learn Python and Selenium WebDriver at the same time. I just wanted to see whether I could ..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*XyXU1OYFgKVspDix879E_w.png
url: https://medium.freecodecamp.org/my-open-source-instagram-bot-got-me-2-500-real-followers-for-5-in-server-costs-e40491358340
id: my-open-source-instagram-bot-got-me-2-500-real-followers-for-5-in-server-costs-e40491358340
date: 2017-04-04T05:14:38.342Z
tags: [
  "Python",
  "Instagram",
  "JavaScript",
  "Social Media",
  "Tech"
]
---
# My open source Instagram bot got me 2,500 real followers for $5 in server costs







![](https://cdn-images-1.medium.com/max/2000/1*XyXU1OYFgKVspDix879E_w.png)







> If you want to learn python, there currently is a humble book bundle with awesome books to get you started!

> [https://www.humblebundle.com/books/python-book-bundle](https://www.humblebundle.com/books/python-book-bundle)

A few months ago, I started a side project to learn Python and Selenium WebDriver at the same time. I just wanted to see whether I could get a few Instagram followers. But when I first ran the script, I was amazed by how effective even my rough first version was.

By just liking a few images of some given tags, I got likes, comments, and even a few followers.

When I added commenting and following functionality, the numbers went up like crazy.

At first I ran my script on my laptop. But this was pretty annoying, since I had to keep my terminal open all the time.

I started with 180 followers, and when I reached 350, I modified my script to periodically run on a server. That’s when things got even sweeter.

Before I get into the story behind my library, [InstaPy](https://github.com/timgrossmann/InstaPy), I want to point out that it’s:

*   free
*   open source
*   easy to use
*   inexpensive to host

If you want to give it a try, all the code you need to use it is up [on GitHub](https://github.com/timgrossmann/InstaPy).

### The first month (357 -> 757 followers)

I started doing some simple data analysis (including a linear regression to predict the next day’s growth) to find the best tags and parameters.







![](https://cdn-images-1.medium.com/max/2000/1*SBU7cL9qBxdFvA3Wl985qA.jpeg)

First month follower growth







Using this data to run a simple linear regression, I could pretty accurately predict how many followers I would reach 9 days later. But on the 10th day, there was quite a big gap again.

<pre name="4dbd" id="4dbd" class="graf graf--pre graf-after--p">                          Followers Number  
                        Predicted  |  Actual  
                       ----------------------  
                           762     |   766  
                           775     |   767  
                           788     |   773  
                           801     |   805  
                           814     |   827  
                           827     |   836  
                           840     |   856  
                           853     |   879  
                           866     |   874  
                           879     |   904</pre>

I did this so I could later check back to see whether the growth was exponential or just linear.

In the first month, about 13 new accounts followed me every day. What’s pretty interesting here is that on some days, I even lost some followers. A lot of them were accounts like “MillionaireMentor” and some other accounts with millions of followers.







![](https://cdn-images-1.medium.com/max/2000/1*4qJ6KDOwcQuTNaVMp2QDeQ.jpeg)

First month new follower per day







When looking at the daily growth even closer by looking at each “run” of the script separately, we really can see that **Instagram really has a lot of bot driven accounts.**







![](https://cdn-images-1.medium.com/max/2000/1*drEcuDaKxdAe5altYXGljw.png)







Note: 0 new Followers doesn’t mean there were no new… The unfollowing ones just cancelled out the new ones.

If we take a look at the tall negative bars, we can see that over a period of 8 hours, I lost 8 followers. I only netted 3 new followers (the mean number for each session) 11 people unfollowed me.



![](https://cdn-images-1.medium.com/max/1600/1*OWtGIsQeSh8VSIpvlx_QUg.png)

Left: 10min after script run / Right: 25min before script run



The above picture shows the standard growth 10min after the script ran and 25min before the next session started. This is how it looked all the time. Even on the days that I lost followers.

The idea behind the tactic of following and unfollowing came from something my friend said to me: “I almost feel like I owe you something for following me.”

Most of these followers seem to be real. Not like the followers you buy that are just empty Instagram accounts with no activity at all.



![](https://cdn-images-1.medium.com/max/1600/1*4ubtpXdJSrEY014eO74xsQ.png)

Followercheck result at 443 follower / Pages like luxlifepage will be recognized as fake because of the spammy character



As you can see in the image below, the newly won followers are actively contributing to my content. They aren’t just inactive accounts.





<iframe data-width="640" data-height="571" width="640" height="571" src="https://medium.freecodecamp.org/media/7d9d3b4af59fd5b3b74742c37a2580d1?postId=e40491358340" data-media-id="7d9d3b4af59fd5b3b74742c37a2580d1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fscontent.cdninstagram.com%2Ft51.2885-15%2Fs640x640%2Fsh0.08%2Fe35%2F14099445_575990149256285_1612949171_n.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



My most liked, most-commented post so far



Compared to the average monthly growth for an Instagram user (in 2016) [16%](http://expandedramblings.com/index.php/important-instagram-stats/)**,** I reached ~112% growth in one month (growing from 357 to 757).

### The second month (757 -> 1472 followers)

The second month went even better. I managed another 94% growth.

I started looking for the right tags to reach enough people. This was extremely important, since the more posts there are, the more people use that tag.

You can see tags and their number of posts when you’re about to post.



![](https://cdn-images-1.medium.com/max/1600/1*OgXeq_p7Srmqs3Py62nFzw.png)

Tags with number of posts



With these 3 tags, I already reach a large base of potential followers.So here are my tags in a word cloud, where the size represents the amount of usage:







![](https://cdn-images-1.medium.com/max/2000/1*_odSGfGjVl36PnL4S5NXRA.png)

Most used tags in posts







To analyze my used likes, comments and tags per post, I wrote a [small script](https://github.com/timgrossmann/instagram-profilecrawl)which extracts all this information from the given profile and saves it as JSON for easy processing.

> Tip: it’s best to use positive tags, tags which will be associated with positive feelings and situations.



![](https://cdn-images-1.medium.com/max/1600/1*z2KScda9RkV4BIla8GTwhw.png)

Mean number of likes per tag



If we take a closer look at the graph above, we see that for a posts with the tag “tasty”I get an average of 390 likes.

I also recommend sticking with 2 or 3 categories, rather than posting images of everything.

I concentrated on 2 big categories and 1–2 smaller ones. The two big categories were “vegan food” and “vacation / goodlife”. The smaller category was “nature” (this is the nature of my home country, Germany).







![](https://cdn-images-1.medium.com/max/2000/1*hERAYsZy4zzgvLet-BEp4A.png)

Tag clusters







To really see the impact of the script on not just my number of followers, but also the real activity of that new followers, I decided to get the likes and comments from each post. Plotting these, I got the following graphs:







![](https://cdn-images-1.medium.com/max/2000/1*aY5yy5GrCEI55VvBpfvWbA.png)

Likes and Comments per post







In the graphs above, I plotted a vertical line for when I started running the script on a server. If you compare the complete red line with the dotted red line and the numbers in the legend, you can see that the numbers more than doubled.







![](https://cdn-images-1.medium.com/max/2000/1*ttfjzc8b_LQVTP3sEY30tA.png)

Number of followers per day in the second month







Then I added the follow/unfollow functionality to my [InstaPy](https://github.com/timgrossmann/InstaPy) script. I was pretty surprised by how much of an impact this had.

Here’s a screenshot I took shortly after waking up and not checking Instagram for ~7 hours:



![](https://cdn-images-1.medium.com/max/1600/1*x3MkH5-SfWaWWy3OwtVfjw.png)

After wake up Instagram check









![](https://cdn-images-1.medium.com/max/2000/1*EHY7DYsd-q5MMfdstScucA.jpeg)

Follower growth per day in the second month







If we compare the ~23 new followers per day in the second month with the ~13 new followers per day in the first month, we can get definitely make the guess, that **the more followers you have, the faster you attract even more followers.**

I was even more impressed at how strong the impact of the follow/unfollow tactic was. I grew the new followers pay day from ~23 to ~32by just following some of the accounts I liked the posts of, and then unfollowing them again on the next run.

Based on my estimations, an account that already has ~5k followers could gain 70 to 100 new followers each day with this script.

### The third month (1472 -> 2084 followers)

To be honest, there weren’t any real big changes in the third month. The growth, sadly, was lower than in the second month.

I had some smaller problems with the server, and Instagram changed their site layout a little bit, which led to my script not working properly anymore. So I had to fix this problem, which lead to days where the script wasn’t running.

I also got a **direct message** from an account which read something like:

> “Why do you keep following and unfollowing me all the time?”

That was a problem I haven’t thought of before, but was pretty obvious. I fixed that problem pretty quickly, because I thought that it could be an **indication of automated accounts**.

My solution to keep a dictionary of accounts I had already followed, and I can define a **maximum number of times I want each account to be followed**.











* * *







Since I hit 2,000 followers this month, I hosted a small **giveaway**. This not only gave me a little follower boost, but it also made my Instagram account seem more legit.





<iframe data-width="640" data-height="640" width="640" height="640" src="https://medium.freecodecamp.org/media/beac822feb7eefe02e3d15fc6c49e8f5?postId=e40491358340" data-media-id="beac822feb7eefe02e3d15fc6c49e8f5" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fscontent.cdninstagram.com%2Ft51.2885-15%2Fs640x640%2Fsh0.08%2Fe35%2F16908779_1061604300612315_997964642254848000_n.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



Giveaway of two coconut bowls



> When thinking about it now, it probably would’ve even be better to indicate the giveaway in the picture directly instead of just writing it in the description.







![](https://cdn-images-1.medium.com/max/2000/1*HfvocRbYJdtqQx0PxJLvAg.png)

Follower growth per day in the third month







If we take a look at the graph above, we can see that the mean number of new followers dropped from ~32 to ~20\. On days where my script had problems, I got fewer followers. Some of the days even were really good with ~40 new followers per day.

If we compare the number of new followers before and after the start of the giveaway, we can see that it gave a little boost with ~28 new followers per day.

Upon posting a new image or video, by now, I normally reach ~100 Likes in the first hour.



![](https://cdn-images-1.medium.com/max/1600/1*vAv7-RRZQkfii1ypGWJAlw.gif)

Capture of likes after posting



#### **Technical Issues**

The Problem with using a GUI-Testing tool like Selenium is that if the site (in my case Instagram) changes something with their HTML layout, I have to change it in my script and update the elements selected from the page.

That was exactly, what I had to learn this month.

If you’re interested in how the script works, keep reading from here. Otherwise, you can just skip to the fourth month.

Of course you could just check out the code in the repository on [GitHub](https://github.com/timgrossmann/InstaPy), but reading a short description is some times way more comfortable. So here we go.

It’s actually really simple, Selenium starts a browser window and acts like a real person.

<pre name="f2e7" id="f2e7" class="graf graf--pre graf-after--p">browser = selenium.webdriver('Chrome')</pre>

You can then head to any page using the _get_ method.

<pre name="2c20" id="2c20" class="graf graf--pre graf-after--p">browser.get('instagram.com/grossertim') </pre>

Once your at the page you can get the elements of the page e.g. by their tag name. So let’s pretend the Follow-Button would look like this in HTML

`<button onclick=”” class=”_follow”>Follow</button>`

We can now just use our browser to get the button element with e.g. the class.

<pre name="0f3e" id="0f3e" class="graf graf--pre graf-after--p">follow_button = browser.find_elementy_by_class_name('_follow')</pre>

This is were the problem with changing HTML comes into play. If Instagram now changes the class from “_follow” to something like “_follow_button” the script needs adjustment. It’s just a small change, but it would be nicer to only have to do this once.

Once we have our follow-button, we just need to call:

<pre name="d9a2" id="d9a2" class="graf graf--pre graf-after--p">follow_button.click()</pre>

Now we are already following that user on Instagram.

The biggest task for such tool is finding the right paths to the elements by analyzing the HTML of the page (in my case instagram.com).

Broken down to the smallest parts, the whole script does nothing more than looking for the needed elements on each page and clicking them or extracting their text.

### The fourth month (2,084 -> 2,706 followers)

In the fourth month, the growth, sadly, again was just ~620 new followers.

After 4 months of running the script, this is how my average post looks like:







![](https://cdn-images-1.medium.com/max/2000/1*f7S5GQ0FqV-tHl59N5a5iw.png)

Likes and comments at 2,7k followers







Here, again, we can really see what an impact the script had. Even on the older posts, which have been there, before the script started.

#### Getting called out as immoral

Right at the start of the fourth month, I posted the link to my [GitHub repo](https://github.com/timgrossmann/InstaPy) on Reddit to spread the word a bit more and maybe get some developers helping me test it and report bugs.

What I got was [this issue](https://github.com/timgrossmann/InstaPy/issues/9):



![](https://cdn-images-1.medium.com/max/1600/1*X_GcyT_XyvSICKgM82Yi3A.png)

Screen of the “Immoral Projct” Issue



After stating my point of view on this topic, the exact same guy wrote me this E-Mail:

> _I’m the guy with the cheeky github issue on InstaPy_

> _I founded a platform for influencers on Instagram called ******. We’re the biggest influencer platform in Europe (or at least one of the top three). We’re doing well on the business side and we have an great product team in Iceland._

> _I was impressed with your InstaPy project. I’m a Python developer myself and our backend is a Flask/PostgreSQL/AWS stack. We’re moving to a mono-repo to have more flexibilty and the ability to break our backend down into smaller services._

> _Are you looking for a job in the near term? Interested to hear what your plans are in the future._

What really impressed me was that even with such a quick and dirty automation script, I managed to get their attention.

Since I’m, at the time of writing this part, an Intern at Bosch Engineering, I couldn’t consider joining their team. But with its beautiful nature and nice people, I’d love to work in Iceland one day, .





<iframe data-width="640" data-height="425" width="640" height="425" src="https://medium.freecodecamp.org/media/98b2d44027a1d7942229578568d7f256?postId=e40491358340" data-media-id="98b2d44027a1d7942229578568d7f256" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fscontent.cdninstagram.com%2Ft51.2885-15%2Fs640x640%2Fsh0.08%2Fe35%2F14134598_983647255079085_1397856919_n.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



Me in Iceland



#### Moving from DigitalOcean to a 35$ RaspberryPi 3

Since I wanted to be able to keep this experiment running for some more time, I thought about a way to pay once, then keep the service running basically forever.

A RaspberryPi3seemed like the perfect fit for it. It was small, powerful enough and cheap enough.

For ~35$ you can get a small unix computer upon which, with some tinkering, you can run Google Chrome.

With this guide: [How to run Google Chrome on RaspberryPi](https://eltechs.com/run-google-chrome-on-raspberry-pi/) andsome time, I was able to install [InstaPy](https://github.com/timgrossmann/InstaPy) on my RaspberryPi and get it up and running.

This has more than just the advantage of cheaper service. When checking for bots, most services have a **list of IP’s** of data centers. [DigitalOcean](https://www.digitalocean.com) and other Infrastructure as a Service providers have dedicated IP’s which can be traced back to every datacenter.

A small computer like a the RaspberryPi runs in your home network, and has the same IP address as your computer or smartphone.

#### The infamous robots.txt

At the moment of wrapping this whole article up, I thought about not publishing it, because “automating” a site against it’s robot.txt — the document that tells bots what parts of the website the website owners would prefer they not scan.

For example, Facebook’s _robot.txt_ starts with the following lines:

<pre name="43e9" id="43e9" class="graf graf--pre graf-after--p"># Notice: Crawling Facebook is prohibited unless you have express written permission. See: http://www.facebook.com/apps/site_scraping_tos_terms.php</pre>

A whole bunch of sites have them:

*   [Google](https://www.google.de/robots.txt)
*   [Amazon](https://www.amazon.de/robots.txt)
*   Even a local branch office of the [Volksbank](https://www.vbhnr.de/robots.txt)

Interestingly, [Instagram doesn’t have one](https://www.instagram.com/robots.txt/) at all.

This is may contribute to my observation that there are a _lot_ of bots on Instagram. Instagram itself doesn’t mind so much, since more bots mean more activity in the whole system.

**Edit:** Some pointed out, that Instagram in fact **does** have a robots.txt. You can [check it out here](https://www.instagram.com/robots.txt).

### Conclusion

As of writing this, I have ~2,800 followers. I plan to keep running my script until I either get banned from Instagram or rise to the highest heights.

No, seriously. I’m really interested seeing how far this can go.

Of course I’ll get back to you if there are some great breakthroughs or findings.

Up to now, I’ve only spent only $5 on renting a server. With the $50 coupon from GitHub’s “Student Backpack” I could let this run for another 5 months without investing a penny more. With the $35 RapsberryPi 3 probably forever.

If you’re into RaspberryPi’s, you could also just get one of the Model3’s and install all the necessary tools to let it run there for a one time cost of ~$35\. That is what I did in the fourth month. If you’re interested check out [How to run Google Chrome on RaspberryPi](https://eltechs.com/run-google-chrome-on-raspberry-pi/).

Also, I spend around $16 for the shipping of a giveaway I did when reaching 2,000 Followers.

So, without all the extra stuff, it would be only $5.If we’d include all the costs (including the ones I didn’t pay) I would’ve payed ~$100 to run it essentially forever.

> Note: If you want to get started with automation with python, definitely check out [“Automate the Boring Stuff”](https://automatetheboringstuff.com)!

### Who can use it?

Everyone. I’m serious. Even if you don’t want to bother with getting it up and running on a server, you can easily download the script and run it manually.

There are a lot of professional services that do exactly the same stuff that my script does. The only real difference is that they cost quite a lot of money (like FollowLiker for $100). Mine’s free.

I also added a quick start file in which you only have to enter some easy information.

<pre name="3bc8" id="3bc8" class="graf graf--pre graf-after--p">InstaPy(username='test', password='test')\  
  .login()\  
  .set_do_comment(True, percentage=10)\  
  .set_comments(['Cool!', 'Awesome!', 'Nice!'])\  
  .set_dont_include(['friend1', 'friend2', 'friend3'])\  
  .set_dont_like(['food', 'girl', 'hot'])\  
  .set_ignore_if_contains(['pizza'])\  
  .like_by_tags(['dog', '#cat'], amount=100)\  
  .end()</pre>

If you’re curious about what each line does, check out the [documentation on GitHub](https://github.com/timgrossmann/InstaPy).

And if you invest some more time, you can checkout my step-by-step guide on [how to setup a server for selenium automation](https://medium.com/@hoppy/how-to-test-or-scrape-javascript-rendered-websites-with-python-selenium-a-beginner-step-by-c137892216aa#.orbi45g0z).

If you like what I did, consider following me on

[GitHub](https://github.com/timgrossmann), [Instagram](https://www.instagram.com/grossertim/), [YouTube](https://www.youtube.com/channel/UC9_Bk9247GgJ3k9O7yxctFg) and [Twitter](https://twitter.com/@timigrossmann). [Be sure to star it on GitHub](https://github.com/timgrossmann) :P

Thank you for reading. I’m curious about what you think so hit me with some comments.   
You can also get in touch me directly [through email](mailto:contact.timgrossmann@gmail.com).











* * *







> I’ll be in Palo Alto for an internship starting in September and would love to **meet as many of You as possible**! If you’re interested, [hit me up on my Email](mailto:contact.timgrossmann@gmail.com), I’d be happy to get in touch!








