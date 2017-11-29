---
author: Nicholas Walsh
authorTwitter: https://twitter.com/TheNickWalsh
authorFacebook: none
title: "How to convert blog posts into Facebook Instant Articles — no coding required"
subTitle: "A friend of mine asked me to help convert articles that were previously posted to their site into Facebook Instant Articles. Afterwards, ..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*KILZRpvD0Ew9jU3NuZ_FnQ.png
url: https://medium.freecodecamp.org/how-to-convert-blog-posts-into-facebook-instant-articles-no-coding-required-fefea28c8701
id: how-to-convert-blog-posts-into-facebook-instant-articles-no-coding-required-fefea28c8701
date: 2017-07-29T14:20:30.732Z
tags: [
  "Writing",
  "Tech",
  "Startup",
  "Facebook",
  "Social Media"
]
---
# How to convert blog posts into Facebook Instant Articles — no coding required







![](https://cdn-images-1.medium.com/max/2000/1*KILZRpvD0Ew9jU3NuZ_FnQ.png)







A friend of mine asked me to help convert articles that were previously posted to their site into Facebook Instant Articles. Afterwards, I decided to compile a guide to help nontechnical people convert their old articles, blog posts, or online content.

Even if you don’t know what Facebook Instant Articles are, you may already be using them. According to Facebook IA’s [FAQ](https://developers.facebook.com/docs/instant-articles/faq#FAQ-basics) page:

> “Instant Articles is a mobile publishing format that enables news publishers to distribute articles to Facebook’s app that load and display as much as 10 times faster than the standard mobile web.”

IA’s dictate a content publishing standard that results in both a pleasing design, and optimized performance for articles opened from within the Facebook mobile app. You can read more about the [benefits](https://contently.com/strategist/2015/05/13/7-things-you-need-to-know-about-facebook-instant-articles/) of IA’s.



![](https://cdn-images-1.medium.com/max/1600/1*6YgOYg7b5kWoEAHSlmxT1Q.jpeg)



Facebook offers a plethora of ways to fast-track IA production and conversion. Yet it seems the current guides are for developers or larger enterprises that have a more complex publishing ecosystem.



![](https://cdn-images-1.medium.com/max/1600/1*SNzwqk3Mi1jyvycLcKutUA.jpeg)



It is hard to find guides for converting previously posted articles that don’t involve using the Facebook IA API, PHP SDK, or the WordPress [plugin](https://media.fb.com/2016/03/07/instant-articles-wordpress-plugin/). For non-developers, most of these tools require too much technical experience. Even when one tries to find the WordPress plugin tutorial, one has to dig into the documentation in Facebook’s developer portal . This is not ideal for non-developers who become dissuaded before they can ever find this page.

Let’s work together to convert any article already published on the web into a Facebook Instant Article! For our tutorial, we’ll be using the article about a celebrity dog from the movie ‘[Anchorman](https://www.theatlantic.com/entertainment/archive/2013/12/15-minutes-life-celebrity-dog-baxter-anchorman/356235/)’.

### Let’s Groove!

**Step 0: Prep**

We won’t need to install any plugins or integrations, but we will need a text editor to work with the HTML source code. There are a lot of different code-oriented text editors, but for the sake of this example, I recommend [**Sublime**](https://www.sublimetext.com/). It has all the features we’ll need, and is easy to use out of the box with a fresh install.

Once you install Sublime, we’re going to want to download the code [template](https://gist.github.com/nmwalsh/e67c8474b038a5286c95d15e2ad82285#file-template-html) that we’ll be using from GitHubGist.



![](https://cdn-images-1.medium.com/max/1600/1*Dv4DscHL7Tj7lPseAyHTAQ.png)



<pre name="a59e" id="a59e" class="graf graf--pre graf-after--figure">**On the right side of the screen:**   
1\. Right click the "Raw" button  
2\. Click "Save link as..." By default, it should save as an HTML file with the name "template".</pre>

Now we’ve got the code editor and the template code that we’ll be editing!

<pre name="d9e7" id="d9e7" class="graf graf--pre graf-after--p">**For the last step of setup:**  
1\. Boot up Sublime  
2\. Open the template file we downloaded</pre>

#### Step 1: Getting the Banner Image

Hop back over to your internet browser and find the article you wish to convert on its’ live site. We’re going to first grab the **banner image**, which we’ll use at the top of the Facebook Instant Article.

To do this, right click the image, and select _“_Copy image address_”._



![](https://cdn-images-1.medium.com/max/1600/1*28BtD-UWNCtTxNGvtjnoTw.png)



Switch back to the template that we have open in Sublime. Search for the Highlight the original URL located between quotes on line 36, and replace it by pasting the image address that we copied from the banner image. Make sure there are double quotes on each side of the URL to preserve the format. And make sure to not delete the “ />” at the end of the line.</pre>

<pre name="486a" id="486a" class="graf graf--pre graf-after--pre">Edit the text inside of  with the caption that you will want to appear below the image. This is often where the image attribution goes.</pre>





<iframe data-width="1280" data-height="720" width="700" height="394" src="https://medium.freecodecamp.org/media/1474e358401b83fe548a43a7aa80f5a4?postId=fefea28c8701" data-media-id="1474e358401b83fe548a43a7aa80f5a4" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fthumbs.gfycat.com%2FActiveScratchyHartebeest-size_restricted.gif&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



Changing banner image URL (line 36) and banner caption (line 37)



Notice how we’re careful not to change any of the formatting of the code. Messing around with the tags themselves will cause errors later on when we try to render the website. Sublime colorizes our code, which helps us recognize mistakes or mismatching HTML tags.

Pay extra close attention to how we replaced the text for the figure caption. We’re going to be editing lots of other values in exactly the same way.

#### Step 2: Retrieving the Metadata

There’s a bit of info we’ll need to collect now. Since most of this data should be retrievable without digging through the source code, manually copying this info works well. We’ll need this source code later though, so there’s no harm in opening it now.

*   Original Article URL
*   Article Title
*   Article Subtitle
*   Article Author(s)
*   Date & Time article was originally published
*   Date & Time article was last updated

If it’s difficult to get this info, we can use the source code from the website. How you access this data will depend on which browser you’re using.

<pre name="5e14" id="5e14" class="graf graf--pre graf-after--p">**Chrome:** CTRL + U, or Right Click → **View Page Source**  
**Firefox:** Right Click → **View Page Source**  
**Safari:** Safari menu → Preferences → Advanced, Enable "Show Develop menu in menu bar", then Develop menu → **Show Page Source**</pre>



![](https://cdn-images-1.medium.com/max/1600/1*mgIdjQwtEYQTFGYMCXwApQ.png)

The source code should resemble this



Now that we’ve got the source code and original website up, let’s start looking for our info.

**Title:** Copy the title of the article, and use it to replace “Article Title” within the <h1> </h1> tags on line 14of the template. In the source code, this is usually within the <title> </title> tags. For example,

<pre name="a867" id="a867" class="graf graf--pre graf-after--p"><h1>Article Title</h1></pre>

<pre name="0d0c" id="0d0c" class="graf graf--pre graf-after--pre">becomes</pre>

<pre name="1631" id="1631" class="graf graf--pre graf-after--pre"><h1>15 Minutes in the Life of Celebrity Dog Baxter from 'Anchorman'</h1></pre>

**Subtitle:** Same as above, but with the subtitle. Use this to replace “Article Subtitle” within the <h2> </h2> tags on line 15of the template**.**

**URL:** Copy the URL of the live website’s article. Use this to replace the URL that appears on line 7 of the template. For example:

<pre name="3c23" id="3c23" class="graf graf--pre graf-after--p"><link rel="canonical" href="[http://example.com/article.html](http://example.com/article.html)"></pre>

<pre name="e425" id="e425" class="graf graf--pre graf-after--pre">becomes...</pre>

<pre name="5246" id="5246" class="graf graf--pre graf-after--pre"><link rel="canonical" href="[https://www.theatlantic.com/entertainment/archive/2013/12/15-minutes-life-celebrity-dog-baxter-anchorman/356235/](https://www.theatlantic.com/entertainment/archive/2013/12/15-minutes-life-celebrity-dog-baxter-anchorman/356235/)"></pre>

**Publication Time:** On line 18 of the template, you can name the date and time the article was originally published. Be mindful that the “datetime” parameter takes a very specific format. The data inside of **datetime=**_” ”_determines metadata (not displayed), whereas the text between the “**> </time>**” tags will dictate what date is shown (can be in any format here).

<pre name="aa62" id="aa62" class="graf graf--pre graf-after--p">**For example,**   
<time class="op-published" datetime="2014-11-11T04:44:16Z">November 11th, 4:44 PM</time></pre>

<pre name="2fc7" id="2fc7" class="graf graf--pre graf-after--pre">Displays as: **November 11th, 4:44 PM**  
Let's change it to: **July 24th, 2017\. 6:30 PM**</pre>

<pre name="37f6" id="37f6" class="graf graf--pre graf-after--pre"><time class="op-published" datetime="2017-7-24T06:30:16Z">July 24th, 2017\. 6:30 PM</time></pre>

<pre name="9641" id="9641" class="graf graf--pre graf-after--pre">**Last Update Time:** Same plan as above, but on **line 21** of the template.</pre>

**Author(s):** Lines 24–27 of the template represent an author whose name links to somewhere on the web. Lines 28–31 represent an author whose name is not linked. You can copy the entire block of code for that respective author, and paste it consecutive to the prior block, then edited as needed. You can also do this for multiple authors. See the example below for multiple authors with simple name + captions.





<iframe data-width="1920" data-height="1080" width="700" height="394" src="https://medium.freecodecamp.org/media/4ce3d983eac88f5ad7e1a3ebc6dcd6fa?postId=fefea28c8701" data-media-id="4ce3d983eac88f5ad7e1a3ebc6dcd6fa" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fthumbs.gfycat.com%2FWeeklyTheseFawn-size_restricted.gif&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



Editing Author Names and Captions



#### Step 3: Copying the Body Content

Now we’ll retrieve the article content that we want converted. There’s a large range of content types, such as mixed media, fancy JavaScript, embedded content. With more complicated content, the chance is higher that things won’t work without troubleshooting, so your mileage may vary.

I’m going to explain how to work with text, images (static or gifs), and video, since those are the basis for most Instant Articles that I’ve seen.

The source code is likely hundreds (or even thousands) of lines. An easy to trick for finding the start of the body content is to do a “Find” for the first few words of the article’s body text. We’ll want to copy from the <p> tag at the start of our body text until (and including) the </p> tag that follows the closing words of the article.





<iframe data-width="1920" data-height="1080" width="700" height="394" src="https://medium.freecodecamp.org/media/cf25c058dc3f5f390989d289520375d2?postId=fefea28c8701" data-media-id="cf25c058dc3f5f390989d289520375d2" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fthumbs.gfycat.com%2FJitterySimilarGoldenmantledgroundsquirrel-size_restricted.gif&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



Retrieving the body content from the live site



Next, we’re going to need to dump this into our template. Near Line 58 in the template, there should be a line with the following:

<pre name="3e5e" id="3e5e" class="graf graf--pre graf-after--p"><p> Article content </p></pre>

Highlight this entire line, and paste over the body content that we copied from the live article source code. Note: we copied the opening <p> and closing </p> from the source code, which is why we’re pasting over them in the template here. There is some code within another set of <p></p> tags following the body text, but it’s styling — be careful not to copy this with your body text.





<iframe data-width="1920" data-height="1080" width="700" height="394" src="https://medium.freecodecamp.org/media/1dc310972a101ed3e926ab475864cccb?postId=fefea28c8701" data-media-id="1dc310972a101ed3e926ab475864cccb" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fthumbs.gfycat.com%2FBleakAfraidInchworm-size_restricted.gif&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



Pasting the body content into our template



*Have a video you’d like to incorporate in your IA? Change the URL between the <video> and </video> tags beginning around line 64, like we did with the Banner Image URL back in Step 1.

**Legal Notes:** Line 84\. This text will be very small, and at the very end of your article.

#### Step 4: Bells and Whistles (Ads, Analytics Trackers, and more)

**I recommend skipping this step for now.** If you’d like to confirm what we’ve done so far works, or if you don’t have custom ads or trackers, skip ahead to Step 5.

One of the best things about Facebook Instant Articles, compared to other proprietary article conversion tools, is that you can keep the custom analytics trackers and advertisements that you already use on your own site.

Every custom integration will be different, and will likely vary in difficulty. For this example, we’ll be using [ChartBeat](https://chartbeat.com/), a traffic analytics and tracking tool. We can use a quick Google search for “ChartBeat Documentation”, to find the [Getting Started Guide](http://support.chartbeat.com/docs/).

Some companies’ documentation page may be geared towards developers. If that doesn’t work for you, search for a tutorial instead.

ChartBeat gives us all the code and instructions for how to add their integration.

In the guide, it tells us the following, so that’s what we’ll do:

<pre name="1023" id="1023" class="graf graf--pre graf-after--p">Insert this script right before the closing </body> tag:</pre>





<iframe data-width="1920" data-height="1080" width="700" height="394" src="https://medium.freecodecamp.org/media/a35b7391fa6d334fd0788c2e0a3a30ad?postId=fefea28c8701" data-media-id="a35b7391fa6d334fd0788c2e0a3a30ad" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fthumbs.gfycat.com%2FSereneSingleHorse-size_restricted.gif&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



Adding the ChartBeat Tracker to the template



Now that we’ve add our ChartBeat tracker, we’ll need to make a few quick edits so that the tracker knows how to sync to our ChartBeat account.



![](https://cdn-images-1.medium.com/max/1600/1*Il0_cROfPT6hQZtBbdmkdQ.png)

Code from the ChartBeat snippet that we’ll need to customize



Each highlighted line (except the “.useCanonical” one) will need an edit so that it can log the data.

<pre name="6d1d" id="6d1d" class="graf graf--pre graf-after--p">**CHANGES (to the right of the "=")**  
**.uid** - The unique ID for your ChartBeat account  
**.domain** - The full domain of the original article  
**.sections** - The name of the 'section/genre/tags' your article belongs to  
**.authors** - The name of the author to associate with this piece</pre>

Bingo! You’ve added the tracker and it will associate the data it’s sending with your unique ChartBeat account. Save your edited template file, and let’s get ready to publish.

#### Step 5: Deploying your Instant Article

On Facebook, go to the dashboard for the page you manage that you wish to post from. Navigate to Publishing Tools, and to the list of articles. Click the blue “+Create” button on the top right.



![](https://cdn-images-1.medium.com/max/1600/1*2b43jAg0QkdNaoyRMMqwwA.png)

IA Dashboard



You should now be prompted to paste the code for your new article.

Select all the code from the template that we’ve been editing, and paste it in here. Hit save! You can publish that draft when you see fit, or schedule it to post at a predetermined time using the dashboard.

#### Congrats, you’re done! I can’t wait to read the awesome articles you’re about to publish.



![](https://cdn-images-1.medium.com/max/1200/0*0dsNUILlWp9u8hCF.gif)



Hey, I’m [**Nick Walsh**](http://twitter.com/thenickwalsh).

I’m a Technical Evangelist for [Wolfram Research](http://wolfram.com) and a Hackathon Coach for [Major League Hacking](http://mlh.io), with a passion for technology, eSports, and empowering student developers.








