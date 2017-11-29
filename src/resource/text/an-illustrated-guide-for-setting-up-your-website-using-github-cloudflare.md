---
author: Karan Thakkar
authorTwitter: https://twitter.com/geekykaran
authorFacebook: https://facebook.com/10152434175419004
title: "An illustrated guide to setting up your website using GitHub and Cloudflare"
subTitle: "You should read this if…..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*TW_xtI15RW9vMZh4u2szIQ.png
url: https://medium.freecodecamp.org/an-illustrated-guide-for-setting-up-your-website-using-github-cloudflare-5a7a11ca9465
id: an-illustrated-guide-for-setting-up-your-website-using-github-cloudflare-5a7a11ca9465
date: 2017-04-25T18:20:21.509Z
tags: [
  "Cloudflare",
  "Github",
  "Programming",
  "Startup",
  "Web Development"
]
---
# An illustrated guide to setting up your website using GitHub and Cloudflare







![](https://cdn-images-1.medium.com/max/2000/1*TW_xtI15RW9vMZh4u2szIQ.png)







You should read this if…

1.  You want to setup custom redirects or other server configuration **for free**
2.  You want to get your site on HTTPS but don’t know where to start
3.  You’re overwhelmed with the amount of choices out there (like [Netlify](https://www.netlify.com), [Surge](https://surge.sh), [BitBalloon](https://www.bitballoon.com/), [Now](https://zeit.co/now))

### **Why Github?**

1.  Easy to setup and get started with Github Pages
2.  Instant deploys on pushing new code

### **Why Cloudflare?**

1.  It’s free
2.  It comes with out-of-the-box support for SSL (HTTPS). ([Here’s why HTTPS matters](https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https).)
3.  Super simple DNS management
4.  Ability to set [browser cache expiration](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) for assets
5.  Auto minify your static assets
6.  Custom page rules for setting up redirects, always HTTPS, etc.
7.  [HTTP2](https://hpbn.co/http2/)/[SPDY](http://googlecode.blogspot.in/2012/01/making-web-speedier-and-safer-with-spdy.html) for supported browsers
8.  Allows for setting up [HSTS](https://www.owasp.org/index.php/HTTP_Strict_Transport_Security_Cheat_Sheet) (HTTP Strict Transport Security)

### Before we get started you will need a few things:

1.  A [Github account](https://github.com/join)
2.  A [Cloudflare account](https://www.cloudflare.com/a/sign-up)
3.  Access to a custom domain. You can buy it from any Domain Name Registrar like: [Namecheap](https://www.namecheap.com/), [GoDaddy](http://www.godaddy.com), [BigRock](https://www.bigrock.in), etc.

If all this piqued your interest, then let’s get started!

### **Step 1**: Create Github repo with your code



![](https://cdn-images-1.medium.com/max/1600/1*_BXRTDn89kV_hfQO7G1UaQ.png)

Select the option **Project Site** to get started



*   Go to [https://pages.github.com](https://pages.github.com/)
*   Select the option **Project Site** to find the instructions on how to create a basic page from scratch or a custom theme

### Step 2\. Setup Github Pages for the repository



![](https://cdn-images-1.medium.com/max/1600/1*9sL36t_SqRrfZwa6StiIZA.png)

Go to **Settings** for your repository





![](https://cdn-images-1.medium.com/max/1600/1*EZ5fM87x5WnRMglm81xyBw.png)

Choose to serve your website from the **master** branch



Go to **Settings** for your repository. In the **Github Pages** section, choose the **master** branch to serve your website from. Once you’ve done that, you can go to [**https://_<yourgithubusername>_.github.io/_r_epository**](https://%3Cyourgithubusername%3E.github.io/repository)to see your website in action as shown below.



![](https://cdn-images-1.medium.com/max/1600/1*-mun3W_GqKWlQn8x9Saavg.png)



### Step 3\. Add custom domain



![](https://cdn-images-1.medium.com/max/1600/1*6ZrORfhvcTrJHj15nBbT_Q.png)

Add a custom domain for your website



Add the custom domain that you have bought and save it. Your website is now ready with your own custom domain 👯 WOOT! ✨

So, we have everything setup on Github. We’ll start with setting up [Cloudflare](https://www.cloudflare.com) to jazz up your website with all the powerful features I mentioned at the beginning of this post.

### Step 4: Setup your domain on Cloudflare



![](https://cdn-images-1.medium.com/max/1600/1*zdsm49bdZlouVF2Jle8JHQ.png)



Login to [Cloudflare](https://www.cloudflare.com). If you are using it for the first time, you should see a screen like the image shown above. If you have used it before, you can click on the **Add Site** option in the navigation bar on the top right to add a new domain. Enter the domain you want to manage and click on **Begin Scan**.

### Step 5: Setup DNS Records for your domain







![](https://cdn-images-1.medium.com/max/1200/1*vOtzKJ_BbUxDuUGO6IYVFg.png)





![](https://cdn-images-1.medium.com/max/1200/1*-Y32xYZ1C_OmNchkWdf2rw.png)

**Left**: Setup DNS records for apex domain. It is denoted by @. **Right**: Final DNS record list







In this step, we inform Cloudflare to point our domain to the [Github Pages server](https://help.github.com/articles/setting-up-an-apex-domain/#configuring-a-records-with-your-dns-provider) using two **A Record** DNS entries:   
1\. 192.30.252.153  
2\. 192.30.252.154

Once you have set this up, all requests to your custom domain i.e. _yourcustomdomain.com_ will be routed to your website on Github on [**Step 3**](#3b17).

There’s one more step involved before we move on to the next stage. Oftentimes, you would want to use a subdomain like **www** for your website, i.e. _www.yourcustomdomain.com_ For this, you will need to add a **CNAME record** DNS entry which will point your subdomain(www) to your apex domain(@).

Once you have set this up, all requests to your custom subdomain i.e. www._yourcustomdomain.com_ will be routed to your website on Github on [**Step 3**](#3b17).

**NOTE: Don’t try to go access your custom domain right away. It won’t work. We have only done the Cloudflare to Github setup. We still have to do the DNS Registrar -> Cloudflare setup. This will come up in** [**Step 7**](#fa13)**.**

Click **Continue** to go to the next step.

### Step 6: Choose the Free Cloudflare plan



![](https://cdn-images-1.medium.com/max/1600/1*Nsec2BMzvuf7FyLc0bLcaQ.png)



The Free plan for Cloudflare provides a lot of sophisticated options as discussed in the [Why Cloudflare?](#2847) section at the beginning.

Click **Continue** to go to the next step.

### Step 7: Update Nameservers on your DNS Registrar



![](https://cdn-images-1.medium.com/max/1600/1*7Y0kZmP1e3jI5Fl27X9sLQ.png)

Copy these two highlighted nameservers to your DNS registrar’s name server settings



Once you’re on this page, keep it open in one tab and open your DNS Registrar’s (the place from where your bought your domain) site in another. If you’re using one of the following registrar’s then the links to understand how to change Nameserver are:

1.  [Bigrock](http://manage.bigrock.in/kb/servlet/KBServlet/faq455.html)
2.  [Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/767/10/how-can-i-change-the-nameservers-for-my-domain)
3.  [GoDaddy](https://godaddy.com/help/set-custom-nameservers-for-domains-registered-with-godaddy-12317)

You need to replace the existing Nameservers in your Domain settings with the one’s on the Cloudflare page that is open in the other tab.







![](https://cdn-images-1.medium.com/max/1200/1*fW2PBt2iXK9Hkjkp5CFgpQ.png)





![](https://cdn-images-1.medium.com/max/1200/1*t9VqTRw8O3UhIRXuBMT20Q.png)

An example of how it would look like after you’ve updated your Nameserver settings in your DNS registrar







YASSS! You’ve successfully setup your custom domain to use Cloudflare as a DNS provider. You can go to the **Overview** option on the top and you will find that it is still waiting for your Nameserver change to be processed.







![](https://cdn-images-1.medium.com/max/1200/1*my_6rgx2P9bPjWxEsatw_w.png)





![](https://cdn-images-1.medium.com/max/1200/1*pRRZOO77rNJpcaAHhzeMOg.png)

**Left**: Nameserver change is still being processed. **Right**: Nameserver change is processed!!







Once the **Overview** tab says **Status: Active**,you can now try to visit your site using your custom domain, **AND IT SHOULD JUST WORK**! 🔥💫

### Step 8: Configure Minification







![](https://cdn-images-1.medium.com/max/2000/1*IprXjgnN4aDrAWmEjRSLkg.png)







In the **Speed** setttings, in the **Auto Minify** section, choose the option to auto-minify everything: Javascript, CSS, HTML. This will be done by Cloudflare on-the-fly once and then cached. Whenever any of your assets change, Cloudflare will do this again for you.

The advantage of minification is that the size of the file delivered to your browser is a lot less since it strips off unwanted spaces and comments.

### Step 9: Configure Browser Cache Expiration







![](https://cdn-images-1.medium.com/max/2000/1*BgoECbAu-ZZflod6bbLidA.png)

Cache Expiration set to 1 month







If you scroll down on the same page as **Auto Minify**, you will find the **Browser Cache Expiration** section. It should be set to 30 days/1 month, ideally, for [WebpageTest](https://www.webpagetest.org) to not give you a warning. What this time indicates is that, once your site is loaded in any browser, then the browser will not request any assets for a second time until the Browser Cache time period expires for those assets.







![](https://cdn-images-1.medium.com/max/2000/1*E-uqkvTlbkYoow2CA4fyCA.png)

Example: The **iphone.png** image loads from your server for the first time (22.3KB in 349ms) All subsequent requests to fetch that resource are served from disk cache which means it is [almost](http://www.softwaretestingclub.com/forum/topics/what-is-the-difference-between-disk-cache-memory-cache-browser?commentId=751045%3AComment%3A304464) [instantaneously](https://www.reddit.com/r/explainlikeimfive/comments/3660ig/eli5what_is_the_difference_between_disk_caching/crb1c3i/) available (in 5ms)







Before we move on to the next step, please check the **Crypto** settings on Cloudflare. It should say **Active Certificate** in the **SSL** section. (_Note: Try reloading the page. Sometimes it doesn’t update_). In the next two steps, we are going to make your site serve via HTTPS _always._ For that to work without any problems, it is important that you have an active certificate on Cloudflare.







![](https://cdn-images-1.medium.com/max/1200/1*2y3oPUgp2N2eT_7NsswoUg.png)





![](https://cdn-images-1.medium.com/max/1200/1*MEI3p9-5m-CJPFtca7NTQQ.png)

The SSL section shows **Authorizing Certificate** after your Nameserver changes have been processed. Once an SSL certificate for you has been issued, this message will change to **Active Certificate**.













* * *







### Step 10: Configure Page Rules

In this step, we are going to do two things:

1.  Redirect all requests for **www.yourcustomdomain.com** to **yourcustomdomain.com**
2.  Redirect all requests for **http://yourcustomdomain.com** to **https://yourcustomdomain.com**

Go to the **Page Rules** setting and click on **Create Page Rule.**



![](https://cdn-images-1.medium.com/max/1600/1*VqVbTt7mTlRPyLoqt_5PIw.png)



For handling the[**www.yourcustomdomain.com**](http://www.yourcustomdomain.com) to **yourcustomdomain.com** redirect, replace **tweetify.io** with **yourcustomdomain.com** name. Click **Save and Deploy**.



![](https://cdn-images-1.medium.com/max/1600/1*fdR0cfq3CHNRxyz5z-DyvA.png)



For handling the[**http://yourcustomdomain.com**](http://yourcustomdomain.com) to [**https://yourcustomdomain.com**](https://yourcustomdomain.com) redirect, replace **tweetify.io** with **yourcustomdomain.com** name. Click **Save and Deploy**.



![](https://cdn-images-1.medium.com/max/1600/1*Pbo1cgJia4FFsOQKsdlZcg.png)



### Step 11: Configure [HSTS](https://www.owasp.org/index.php/HTTP_Strict_Transport_Security_Cheat_Sheet)







![](https://cdn-images-1.medium.com/max/2000/1*CNY1Enfc7rX0sfLql1qO-w.png)







Go to the **Crypto** settings and scroll down to the **HTTP Strict Transport Security (HSTS)** section. Click on **Enable HSTS**. This will ask you to acknowledge that you know what you are doing. Before you select **I understand**, let me tell you why we need to enable this setting:

> If a user has opened your website in the past, from then onwards whenever the user tries to access your website, they will always be taken to the HTTPS version of your site. This makes your site load a little faster on subsequent visits because the HTTP to HTTPS redirect happens on the client and not via the Cloudflare Page Rule that we added in [Step 10](#8841).

Once you go to the next step, you should enable all the settings as shown below. You can read more details about these options [here](https://tools.ietf.org/html/rfc6797#section-6.1.1) and [here](https://www.owasp.org/index.php/Security_Headers)



![](https://cdn-images-1.medium.com/max/1600/1*eQkl-RH22uCxd5amoqBaoA.png)

Screenshot of HSTS settings in Cloudflare









![](https://cdn-images-1.medium.com/max/2000/1*IXuUXsofV9VNQCLVRhpSLw.png)

Headers that are added by Cloudflare to requests for your domain after you setup HSTS [as shown above](#a96c)







That’s it. You’re all set to show off your website to the world! 🚀🚀 If you found this useful, please ❤️ it and share it.











* * *









![](https://cdn-images-1.medium.com/max/1600/1*B0kImvxSz0umpJ5DOQgiVg.png)



[Karan Thakkar](https://twitter.com/geekykaran) is the Frontend Lead at [Crowdfire](https://medium.com/@Crowdfire) - _Your super-smart marketing sidekick_. His [article](https://bit.ly/hackingtwitter) has been previously [featured](https://bit.ly/geekyonhuffpo) on [The Huffington Post](https://medium.com/@HuffingtonPost). He likes trying out new technologies in his spare time and has built [Tweetify](https://karanjthakkar.com/projects/tweetify) (using React Native) and [Show My PR’s](https://showmyprs.com) (using Golang).

Other articles written by him:

[**How I grew from 300 to 5k followers in just 3 weeks**  
_#GrowthHacking my Twitter account for @Crowdfire Twitter Premier League_blog.markgrowth.com](https://blog.markgrowth.com/how-i-grew-from-300-to-5k-followers-in-just-3-weeks-2436528da845 "https://blog.markgrowth.com/how-i-grew-from-300-to-5k-followers-in-just-3-weeks-2436528da845")[](https://blog.markgrowth.com/how-i-grew-from-300-to-5k-followers-in-just-3-weeks-2436528da845)

[**Using the Let’s Encrypt Certbot to get HTTPS on your Amazon EC2 NGINX box**  
_Let’s Encrypt is a new Certificate Authority which provides free SSL certificates (up to a certain limit per week). It…_medium.freecodecamp.com](https://medium.freecodecamp.com/going-https-on-amazon-ec2-ubuntu-14-04-with-lets-encrypt-certbot-on-nginx-696770649e76 "https://medium.freecodecamp.com/going-https-on-amazon-ec2-ubuntu-14-04-with-lets-encrypt-certbot-on-nginx-696770649e76")[](https://medium.freecodecamp.com/going-https-on-amazon-ec2-ubuntu-14-04-with-lets-encrypt-certbot-on-nginx-696770649e76)








