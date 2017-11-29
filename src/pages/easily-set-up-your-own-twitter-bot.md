---
author: Scott Spence
authorTwitter: https://twitter.com/ScottDevTweets
authorFacebook: none
title: "Why you should have your own Twitter bot, and how to build one in less than 30 minutes"
subTitle: "Twitter bots can do a heck of a lot more than just spam trending hashtags and relentlessly follow users...."
coverSrc: https://cdn-images-1.medium.com/max/2000/0*TZYrBalMX5If2Jj3.jpg
url: https://medium.freecodecamp.org/easily-set-up-your-own-twitter-bot-4aeed5e61f7f
id: easily-set-up-your-own-twitter-bot-4aeed5e61f7f
date: 2017-01-28T00:00:00.000Z
tags: [
	"Twitter",
	"JavaScript",
	"Bots",
	"Social Media",
	"Tech"
]
---
# Why you should have your own Twitter bot, and how to build one in less than 30 minutes











![](https://cdn-images-1.medium.com/max/2000/0*TZYrBalMX5If2Jj3.jpg)












> **UPDATE 20171102:** Since this story was originally posted back in January 2017 there have been a few things that have changed with the repository on GitHub, if you are going to be following along I’d suggest using the repository `[README.md](https://github.com/spences10/twitter-bot-bootstrap/#twitter-bot-bootstrap)` in conjunction with this story to save any confusion.

Twitter bots can do a heck of a lot more than just spam trending hashtags and relentlessly follow users.

Take the [Twisst ISS alerts](https://twitter.com/twisst) bot, which sends you a direct message whenever the international space station (ISS) will be visible at your location.

Or public service bots like the [Earthquake Robot](https://twitter.com/earthquakeBot), which tweets about any earthquake greater than 5.0 on the Richter Scale as it happens.

And of course a robot that tweets poetry, [poem.exe](https://twitter.com/poem_exe), along with one that will retweet your tweets that also happen to be an [Accidental Haiku](https://twitter.com/accidental575).

I personally use a bot to enhance my [@ScottDevTweets](https://twitter.com/ScottDevTweets) account by liking and re-tweeting subjects I have an interest in.

The [#100DaysOfCode](https://twitter.com/search?q=%23100DaysOfCode&src=savs) community challenge will congratulate you on starting the #100DaysOfCode challenge, and again when you reach specific milestones.












Bot user congratulate



It will also reply with encouragement if it detects negative sentiment (frustration) in a tweet that has the #100DaysOfCode hashtag in it.












Bot sentiment detection



One question I’m asked in job interviews quite often is “what do you get out of working with technology?” I always answer that “I like to automate repetitive tasks to save me time so I can concentrate on other stuff. I like the the feeling of accomplishment that comes with having saved myself some time.”

In the case of my @ScottDevTweets bot, it’s usually an opener for a conversation with another person who follows me. So the bot can initiate the conversation, then I can carry on from where the bot left off.

Bearing this in mind, a bot is only as ethical as the person who programmed it.

If you have any doubts about the ethics of the bot you’re building, check out [botwiki](https://botwiki.org/bot-ethics)’s ethics section.

So, ready to get started? OK. Let’s do this!

### How to build a Twitter Bot in 30 minutes

You’re going to use the `twit` library to build a Twitter bot. It will like and re-tweet whatever you specify. It will also reply to your followers with a selection of canned responses.

Before starting the clock you’ll need to set up some accounts set up if you don’t have them already.

### What you’ll need

*   [Twitter](https://twitter.com/signup)
*   [Cloud9 IDE](https://c9.io/signup)
*   [Heroku](https://signup.heroku.com/)

### Step #1: Set up a Twitter application

Either create a new Twitter account or use your own to [create a new Twitter application](https://apps.twitter.com/app/new).

As an example, I’ll configure my old [@DroidScott](https://twitter.com/droidscott) twitter account so you can follow along.

Be sure to add your phone number to your Twitter account before clicking the **Create your Twitter application** button.






















You should now be in the ‘Application Management’ section, where you will need to take a note of your keys. You should have your ‘Consumer Key (API Key)’ and ‘Consumer Secret (API Secret)’ already available.

You’ll need to scroll to the bottom of the page and click the **Create my access token** to get the ‘Access Token’ and ‘Access Token Secret’ take note of all four of them you’ll need them when setting up the bot.

### Step #2: Set up your development environment

For this I’m just going to say use [Cloud9](https://c9.io/) as you can be up and running in minutes with one of the pre-made Node.js environments.

Note that if you choose to use Heroku and/or Cloud9 IDE in building this (like I do in this guide) in some regions you will be prompted to give a credit card number to create these accounts.






















### Set up the bot

In the project tree delete the example project files of `client`, `package.json`, `README.md` and `server.js` you’ll not need them, you can leave them there if you desire.

In your new Node.js c9 environment go to the terminal and enter:

    git clone https://github.com/spences10/twitter-bot-bootstrap

#### Project structure

The environment project tree should look something like this:














### Node dependencies

Before configuring the bot we’ll need to install the dependencies, cd into the project folder with `cd tw*` this will move you to `:~/workspace/twitter-bot-bootstrap (master) 












The `SENTIMENT_KEY` you can get a new API key at [https://market.mashape.com/vivekn/sentiment-3](https://market.mashape.com/vivekn/sentiment-3) your key is in the `REQUEST EXAMPLE`

Take a look at the gif, click the link, sign up for or sign into `mashape`, click on `node` in the right hand panel and select out your API key, it will be in the space highlighted `<required>` in the gif.














Add your API key to the `.env` file along with your Twitter API keys 🔑

Here you should add your Twitter account name, and how often you want the bot to run the retweet and favorite functions in minutes.

> _NOTE none of the _`_.env_` _items have quotes_ `_''_` _round them._

    CONSUMER_KEY=Fw***********P9CONSUMER_SECRET=TD************CqACCESS_TOKEN=31**************UCACCESS_TOKEN_SECRET=r0************S2SENTIMENT_KEY=Gj************lFTWITTER_USERNAME=DroidScottTWITTER_RETWEET_RATE=5TWITTER_FAVORITE_RATE=5

You can then add some keywords into the `strings.js` file for what you want to search for as well as sub-queries.












_add query and sub-query strings_ _you can also update blocked strings to block more stuff_



When adding sub-query strings make sure you leave a space at the beginning of the string so `' handy tip'` gets concatenated onto `'node.js'` as `node.js handy tip` and not `node.jshandy tip`.

That should be it, go to the terminal and enter `npm start` you should get some output:






















Check the Twitter account:














### Step #3: Setting up Heroku

Cool, now we have a bot that we can test on our dev environment but we can’t leave it there, we’ll need to deploy it to Heroku.

If you haven’t done so already set up a [Heroku account](https://signup.heroku.com/) then select **Create a new app** from the dropdown box top right of your dashboard, in the next screen name the app it if you want, then click **Create App**.














You’ll be presented with your app dashboard and instructions for the deployment method.














Your app name should be displayed on the top of your dashboard, you’ll need this when logging in with the Heroku command line interface, which we’ll use to deploy your app.














### Heroku CLI

We’re going to deploy initially via the Heroku Command Line Interface (_CLI_).

On your c9 environment terminal, log into Heroku [it should be installed by default]

    heroku login

Enter your credentials:

    cd twitter-bot-bootstrap git init heroku git:remote -a your-heroku-app-name

Deploy your application:

    git add . git commit -am 'make it better' git push heroku master

You should get build output in the terminal:














Then check the output with:

    heroku logs -t

All good? Cool! 😎

#### Configuring Heroku variables

Now that we have our bot on Heroku we need to add environment variables to store our Twitter keys. This is because the `.env` file where we stored our keys is listed in the `.gitignore` file, which tells git not to upload that file to Heroku. It also makes it so if in the future we want to add our code to GitHub we don't have to worry about the `.env` file making our keys public, because the file will automatically be ignored.

All you need to do is go to the console of your Heroku app and select the ‘Settings’ sections and add in your Twitter keys from the `.env` file. Click the 'Reveal Config Vars' button and add in the variables with their corresponding values:

    CONSUMER_KEYCONSUMER_SECRETACCESS_TOKENACCESS_TOKEN_SECRETSENTIMENT_KEY

Once you have the Heroku vars set up, take a look at the `config.js` file of this project. You are going to delete this line:

    require('dotenv').config();

You’re now ready to deploy to Heroku again. Your console commands should look something like this:

    $ git add .$ git commit -m 'add environment variables'$ git push heroku master

Then you can check the Heroku logs again with:

    $ heroku logs -t

You should now have a bot you can leave to do its thing forever more, or until you decide you want to change the search criteria 😄

#### Heroku deployment via GitHub

You can also deploy your app by connecting to GitHub and deploy automatically to Heroku each time your master branch is updated on GitHub, this is straight forward enough.

Go to the ‘Deploy’ dashboard on Heroku, select GitHub as the deployment method if you have connected your GitHub account to your Heroku account then you can search for the repository so if you forked this repo then you can just enter `twitter-bot-bootstrap` and **Search** you can then click the **Connect** button, you can then auto deploy from GitHub.














### Heroku troubleshooting

What do you mean it crashed!?






















Ok, I found that sometimes the `worker` is set as `web` and it crashes out, try setting the `worker` again with:

    heroku ps:scale worker=0 heroku ps:scale worker=1

If that still crashes out then try setting the `Resources` on the Heroku dashboard, I found if you toggle between the `web`, `heroku` and `worker` it usually settles down. Basically you need to be set to the `worker` Dyno this is what causes the `Error R10 (Boot timeout)` crashes because it's trying to use one of the other resources when it should be using the `worker` Dyno.














Other useful Heroku commands I use:

    heroku restart

By default you can only push your master branch if you are working on a development branch i.e. `dev` branch. If you want to test on Heroku, then you can use:

    git push heroku dev:master

### Handy tip

If you want to add this to your own GitHub repo and don’t want to share your API keys 🔑 with the world then you should turn off tracking on the `.env` file. From the terminal enter this git command:

    $ git update-index --assume-unchanged .env

I have added my most used git command I use in this [gist](https://gist.github.com/spences10/5c492e197e95158809a83650ff97fc3a)

### Wrapping up

Your Twitter bot should now be live. You can tinker with it and further configure it.

Here’s my [repository](https://github.com/spences10/twitter-bot-bootstrap) if you’d like to fork it and contribute back using pull requests. Any contributions large or small — major features, bug-fixes, integration tests — are welcome, but will be thoroughly reviewed and discussed.

### Acknowledgements

Credit for the inspiration for this should go to [@amanhimself](https://twitter.com/amanhimself) and his posts on creating your own twitter bot.

[create-a-simple-twitter-bot-with-node-js](https://hackernoon.com/create-a-simple-twitter-bot-with-node-js-5b14eb006c08#.flysreo60)

[how-to-make-a-twitter-bot-with-nodejs](https://chatbotslife.com/how-to-make-a-twitter-bot-with-nodejs-d5cb04fdbf97#.h5ah8dq5n)

[twitter-mctwitbot](https://medium.com/@spences10/twitter-mctwitbot-4d15cd005dc0#.dp9q5f427)

[awesome-twitter-bots](https://github.com/amandeepmittal/awesome-twitter-bots)

Other posts detailing useful Twitter bots.

[www.brit.co/twitter-bots-to-follow](http://www.brit.co/twitter-bots-to-follow/)

[www.hongkiat.com/using-twitter-bots](http://www.hongkiat.com/blog/using-twitter-bots/)

Made it this far? Wow, thanks for reading! If you liked this story, please don’t forget to recommend it by clicking the ❤ button on the side, and by sharing it with your friends through social media.











* * *







If you want to learn more about me, visit my [blog](http://spences10.github.io), my [Github](https://github.com/spences10), or tweet me [@ScottDevTweets](https://twitter.com/ScottDevTweets).

_I originally published this at_ [_spences10.github.io_](https://spences10.github.io/2017/01/28/twitter-bot-bootstrap.html)_._








