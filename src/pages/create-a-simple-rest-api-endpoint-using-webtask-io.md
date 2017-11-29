---
author: ismapro
authorTwitter: https://twitter.com/ismapro
authorFacebook: none
title: "Create a simple REST API endpoint using Webtask.io"
subTitle: "Webtask.io is a service by Auth0 that allows you to run single pieces of code in the cloud through HTTP calls...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*NeGT5gT1GaOUWOC-ZSRlag.jpeg
url: https://medium.freecodecamp.org/create-a-simple-rest-api-endpoint-using-webtask-io-d9607fc00c17
id: create-a-simple-rest-api-endpoint-using-webtask-io-d9607fc00c17
date: 2016-08-01T09:18:04.051Z
tags: [
  "Node",
  "JavaScript",
  "API",
  "Web Development",
  "Programming"
]
---
# Create a simple REST API endpoint using Webtask.io



![](https://cdn-images-1.medium.com/max/1600/1*NeGT5gT1GaOUWOC-ZSRlag.jpeg)



Webtask.io is a service by Auth0 that allows you to run single pieces of code in the cloud through HTTP calls.

Each deployed piece will run under a sandbox with some limitations:

*   limited processor time
*   a limited amount of libraries available per task
*   limited storage

But these limitations serve to present an environment where you can expose your application through _HTTP_, in easy and scalable way, without getting into the nitty-gritty of server administration or environment configurations.

There are many other features available like token validation to control access, secret data, and metadata. If you want to know more of how Webtask works, [their documentation](https://webtask.io/docs/how) has examples of what you can do with this technology.

#### Let’s start to code the basic REST API

To create a webtask, you’ll need to use the _webtask-cli._ This is a command line application that allows you to manage your webtasks.

So first install it in your enviroment:

<pre name="43c4" id="43c4" class="graf graf--pre graf-after--p">npm install wt-cli -g</pre>

Then initialize your session, using this emaillogin process:

<pre name="b8dd" id="b8dd" class="graf graf--pre graf-after--p">wt init your_email@something.com</pre>

Once you do so, you should receive a code to activate your account.

Now you can proceed to create the file that will be logic of our webtask. You can name it whatever you want, but remember that it will be part of the URL the service will later provide. Let’s name it:

<pre name="1de4" id="1de4" class="graf graf--pre graf-after--p">basic-rest.js</pre>

and lets add the following code to it:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/6b878404a9914950a8925572839cd454?postId=d9607fc00c17" data-media-id="6b878404a9914950a8925572839cd454" allowfullscreen="" frameborder="0"></iframe>





Navigate from the command line to the location where you saved the file and run this command:

<pre name="9631" id="9631" class="graf graf--pre graf-after--p">wt create basic-rest.js</pre>

You will receive a URL that you can use to check your webtask, similar to this:

<pre name="6969" id="6969" class="graf graf--pre graf-after--p">https://webtask.it.auth0.com/api/run/wt-myemail-gmail_com-0/basic-rest?webtask_no_cache=1</pre>

From your browser navigate to the your url and you will see the response of your application:

<pre name="5c5b" id="5c5b" class="graf graf--pre graf-after--p">{"error":"GET method not implemented"}</pre>

Which is the response we expected from our code. Now you can add any logic you want to each one of the methods. You can then test the other methods (POST, DELETE, PUT) using postman or curl.

And that’s it. You have deployed a service without any additional configuration or administration. The great thing about this service is the ability to integrate webhooks from external APIs and interact with the data or query using other backends.

There are many features and options I didn’t explored but you can check their [webpage](https://webtask.io) and now more about them.

_Hope you liked, let me know what you think in the comments sections. Happy coding!_








