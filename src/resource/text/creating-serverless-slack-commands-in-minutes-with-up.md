---
author: TJ Holowaychuk
authorTwitter: https://twitter.com/tjholowaychuk
authorFacebook: none
title: "Creating serverless Slack commands in minutes with Go &amp; Up"
subTitle: "This post walks through the creation of a serverless Slack command written in Golang, and deployed to AWS Lambda in seconds with Up...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*uFEp4Ubz5TOzlfo0-FE5Qw.png
url: https://medium.freecodecamp.org/creating-serverless-slack-commands-in-minutes-with-up-f04ce0cfd52c
id: creating-serverless-slack-commands-in-minutes-with-up-f04ce0cfd52c
date: 2017-09-11T00:39:48.281Z
tags: [
  "Golang",
  "Serverless",
  "Slack",
  "Productivity",
  "Web Development"
]
---
# Creating serverless Slack commands in minutes with Go & Up







![](https://cdn-images-1.medium.com/max/2000/1*uFEp4Ubz5TOzlfo0-FE5Qw.png)







This post walks through the creation of a serverless Slack command written in Golang, and deployed to AWS Lambda in seconds with [Up](https://github.com/apex/up).

You’ll be creating a `/time <url>` command used to check how long a website takes to respond. Up uses your own AWS account. You can host a large number of custom apps for free while still utilizing the AWS free tier (1 million requests/m).

Check out the [installation instructions](https://apex.github.io/up/#installation) as well if you’re new to Up.

### Registering the Slack command

The first step is to create a Slack app, allowing you to register commands, among other things.



![](https://cdn-images-1.medium.com/max/1600/1*dE4mvNpvma_IM0UHxlC4qQ.png)



Once created, click “Slash commands” in the menu on the left, and register the `/time` command. You’ll need to keep this page open for a minute since we need a **Request URL** so Slack knows where to send requests.



![](https://cdn-images-1.medium.com/max/1600/1*9Ot1sxpiFdpxDYe4xZMOGg.png)



#### Creating the Slack command

In your project’s directory create a file named `up.json`. Make sure to replace `PROFILE` with your AWS profile name ([read more](https://apex.github.io/up/#aws_credentials)).

<pre name="9f2c" id="9f2c" class="graf graf--pre graf-after--p">{  
  "name": "slack-cmd-test",  
  "profile": "PROFILE"  
}</pre>

Now we need a little HTTP server to process the Slack command POST request. Create a `main.go` file with the following net/http server.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/8ad87e59255c59b1a9784529ab559b46?postId=f04ce0cfd52c" data-media-id="8ad87e59255c59b1a9784529ab559b46" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F25254%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Deploy it with `up` .

> **NOTE** : The first deploy may take roughly 60s to set up resources.







![](https://cdn-images-1.medium.com/max/2000/1*QuKc-ue1qJuwg9xt-NOlqQ.png)







Now you need to grab the URL and paste it into the Slack command page so Slack knows where to send requests. Copy the command’s URL to the clipboard using:

<pre name="ba20" id="ba20" class="graf graf--pre graf-after--p">$ up url -c  
Copied to the clipboard!</pre>

Paste it in the **Request URL** field, then you’re good to give it a test run:



![](https://cdn-images-1.medium.com/max/1600/1*Ht5Cs6Wcfqezwk0ChfC84g.png)



With any luck, you’ll see a Hello World response!



![](https://cdn-images-1.medium.com/max/1600/1*fFywF9gQ3XNKRe-QYxRHLw.png)



#### Performing the request

Slack sends a POST request with form inputs, otherwise known as `application/x-www-form-urlencoded` (a tragically named mime type, turned standard-ish).

To access the form values, parse the form with the ParseForm() method. In this case all we need is the “text” field from r.Form, the parsed form.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b7b914c0b86459ee72571abdf6aa74b2?postId=f04ce0cfd52c" data-media-id="b7b914c0b86459ee72571abdf6aa74b2" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F25254%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Now that the request is portion is complete, import the `time` package and wrap the request with `time.Now()` and `time.Since()` to record the request duration.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ef9d20b31bf2ee48738cc0fac70cdd42?postId=f04ce0cfd52c" data-media-id="ef9d20b31bf2ee48738cc0fac70cdd42" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F25254%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Deploy again with `up` and immediately after the deploy you’re ready to test out the real version:



![](https://cdn-images-1.medium.com/max/1600/1*WTFhC_dOxL3iqNTsQf6x3w.png)



Two files and a few commands later, you’re done! Repeat for as many Slack commands as you need.

### Testing locally

One of Up’s strengths is deploying traditional “vanilla” HTTP servers. This means there is nothing new to learn when testing on your machine, develop the app as you always would.

Here’s an example of this application tested via `curl` :

<pre name="3288" id="3288" class="graf graf--pre graf-after--p">$ PORT=3000 go run main.go  
$ curl -d 'text=https://apex.sh' http://localhost:3000/</pre>

<pre name="2876" id="2876" class="graf graf--pre graf-after--pre graf--trailing">https://apex.sh took 19.33542m</pre>











* * *







Hope that was helpful! Check out the [documentation](https://apex.github.io/up/) for more help, and follow on [Twitter](https://twitter.com/tjholowaychuk) for updates and various software rants.








