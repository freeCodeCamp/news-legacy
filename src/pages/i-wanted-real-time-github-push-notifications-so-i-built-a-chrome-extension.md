---
author: Stacy Goh
authorTwitter: none
authorFacebook: https://facebook.com/10206668550983315
title: "I wanted real time GitHub push notifications. So I built a Chrome extension."
subTitle: "I’ve been using GitHub for more than two years now. A few days ago, I was wondering why there were no push notifications for GitHub. I al..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*p-7zngSNmXj8KOCM6MW5iw.png
url: https://medium.freecodecamp.org/i-wanted-real-time-github-push-notifications-so-i-built-a-chrome-extension-7e6be0611e4
id: i-wanted-real-time-github-push-notifications-so-i-built-a-chrome-extension-7e6be0611e4
date: 2017-09-06T22:29:04.473Z
tags: [
  "Web Development",
  "Tech",
  "Technology",
  "Startup",
  "Self Improvement"
]
---
# I wanted real time GitHub push notifications. So I built a Chrome extension.







![](https://cdn-images-1.medium.com/max/2000/1*p-7zngSNmXj8KOCM6MW5iw.png)







I’ve been using GitHub for more than two years now. A few days ago, I was wondering why there were no push notifications for GitHub. I already receive email notifications when someone creates a pull request/issue on my repositories, but there are no notifications for stars/forks.

Also, email notifications keep piling on top of the 12,253 emails already in my inbox. This is just not cool >.<



![](https://cdn-images-1.medium.com/max/1600/1*JIyCk2It6QbYiRxyarpZzA.png)

See, I’m not kidding! Credit: My own inbox



Being a developer, I decided to take things into my own hands. I decided to build a Chrome extension that pushes real-time notifications whenever someone interacts with one or more of my GitHub repositories. It’s on the Google Chrome store as [**GitHub Notifier**](https://chrome.google.com/webstore/detail/github-notifier/hoapibhhppbolnldjengllkcdbpbbgih). You can also find out more about it [**here**](https://stacygohyunsi.github.io)**.**







![](https://cdn-images-1.medium.com/max/1200/1*xwbQuk-F9KChbf9Ep-hDQg.png)





![](https://cdn-images-1.medium.com/max/1200/1*BDN9ukpG__udKy8EfJm05Q.png)

Real-time Chrome notifications







You’ll see one of the above notifications whenever someone does any of the following:

*   Creates an issue or comments on an issue
*   Creates a pull request
*   Forks your repository
*   Stars your repository
*   Pushes code to your repository

### How I built it

Initially, I thought it would be really simple to build. I thought I could get it up in one day since I had experience building Chrome apps.

But as always, the devil is in the details. Here are the tools, frameworks, and whatever else I used to get it up and running:

*   GitHub Apps
*   Express and NodeJS
*   Firebase
*   Google Cloud Messaging
*   Chrome extension

### GitHub Apps

To send notifications to a user in real time, we need to use a webhook to ping them whenever there is any user interaction. The payload will contain information, such as the person who interacted with your repository, the action taken (was it a star or a fork), and the name of the repository.

To do that, register for a GitHub App. It will allow you to choose what webhook events your GitHub App will detect.



![](https://cdn-images-1.medium.com/max/1600/1*6KCZwxhffTh0V-Bl2wkx-A.png)

Permissions for GitHub apps



Fill in your webhook URL, which I will cover later.

_Further reading:_ [_GitHub Apps_](https://developer.github.com/apps/)

### Express and NodeJS

After defining the events the webhook triggers, you need a server to receive and process the payload. Since standalone Chrome extensions cannot launch a server, we will need to create a separate project for this.

Create a POST endpoint in your Express and NodeJS project, which will handle the webhook.

<pre name="57ca" id="57ca" class="graf graf--pre graf-after--p">app.post(‘/watch’, function(req, res, next) {</pre>

<pre name="7a77" id="7a77" class="graf graf--pre graf-after--pre">.....</pre>

<pre name="9d8f" id="9d8f" class="graf graf--pre graf-after--pre">});</pre>

For webhooks, I love to use `[ngrok](https://ngrok.com/)` — a free tool (with a cap of 30 users), which creates a publicly accessible URL to configure the webhook service.

Once you have `ngrok` installed, you can use it to tunnel to an application running on, say, port 3000\. It is as easy as typing

<pre name="8156" id="8156" class="graf graf--pre graf-after--p">ngrok http 3000</pre>

`ngrok` then generates a url in both `http` and `https` . You can use these to fill in your webhook url in GitHub Apps temporarily until you host them.

_Further reading:_ [_ngrok_](https://ngrok.com/)

### **The Chrome extension**

Next, create a separate project for your Chrome extension. A Chrome extension by itself is easy to build. First, create a `manifest.json` file that contains properties like the extension's name, description, version number, and so on.

We will also need a `popup.html` file, which shows a popup when someone downloads and clicks on your Chrome extension. The popup prompts users to fill in their GitHub username, as shown below:



![](https://cdn-images-1.medium.com/max/1600/1*74bTu7rxVI91zYPCdj_77A.png)

popup.html



After you save your GitHub username, connect your GitHub username to a computer that will receive the notifications.

We do that with both Google Cloud Messaging and Firebase.

_Further reading:_ [_Getting Started: Building a Chrome Extension_](https://developer.chrome.com/extensions/getstarted)

### Google Cloud Messaging and Firebase

[Google Cloud Messaging](https://developers.google.com/cloud-messaging/gcm) (GCM) is a mobile notification service that enables developers to send messages between servers and client apps.

[Firebase](https://firebase.google.com/docs/database/) is a real-time, cloud-hosted database developed by Google. I chose Firebase for this case because it’s easy and quick to setup.

In your Chrome extension, create a `popup.js` file. This will make use of both GCM and Firebase. After you save your username in the popup, use GCM to generate a registrationID to identify your browser. Think of registrationID as an ID to differentiate your computer from other users.

The registrationID and the GitHub username will be saved as an entry in Firebase.

_Further reading:_ [_Firebase_](https://firebase.google.com/docs/database/) _and_ [_Google Cloud Messaging_](https://developers.google.com/cloud-messaging/gcm)

### How does it all work?







![](https://cdn-images-1.medium.com/max/2000/1*Hg7eTKIeGViovyRiASzdCw.png)

Summary diagram of how the Github Notifier is built







To summarize the illustration above, whenever someone interacts with the GitHub repository, the following happens:

*   A payload will be sent from GitHub Apps to your Express and NodeJS server.
*   The server receives the payload and extracts the GitHub username from the payload.
*   Query Firebase for the associated registrationID from the GitHub username.
*   Google Cloud Messaging is used to send a message from the server to the Chrome extension based on the registrationID.
*   Once the Chrome extension receives the message from Google Cloud Messaging, it creates a Chrome notification and pushes it to the user.

And ta-dah! You have received a real-time Chrome notification from GitHub!

I hope I didn’t lose you there. Once again, install [**GitHub Notifier**](https://chrome.google.com/webstore/detail/github-notifier/hoapibhhppbolnldjengllkcdbpbbgih) if you are as excited about receiving real-time GitHub push notifications as I am. Drop me a message if you need further clarification.

If you have any suggestions for improvements or know of a simpler way to build a GitHub Chrome Notifier, message me at [**hello@imstacy.com**](mailto:hello@imstacy.com) and let’s discuss.

Or if you enjoyed my article, follow me at [**github.com/stacygohyunsi**](http://github.com/stacygohyunsi) or message me at [**imstacy.com**](http://imstacy.com)**.**








