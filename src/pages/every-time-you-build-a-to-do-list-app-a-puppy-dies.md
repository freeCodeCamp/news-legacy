---
author: Hrishi Mittal
authorTwitter: https://twitter.com/hrishio
authorFacebook: none
title: "✅ Every time you build a to-do list app, a puppy 🐕 dies 😢"
subTitle: "You know when you’re trying to learn something new, but get reeeeeeallly bored of building the default example app?..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*g6c8GzN-fkt4wi1liJGdhA.jpeg
url: https://medium.freecodecamp.org/every-time-you-build-a-to-do-list-app-a-puppy-dies-505b54637a5d
id: every-time-you-build-a-to-do-list-app-a-puppy-dies-505b54637a5d
date: 2017-01-24T15:42:51.280Z
tags: [
	"React",
	"JavaScript",
	"Ruby on Rails",
	"Web Development",
	"Programming"
]
---
# _✅ Every time you build a to-do list app, a puppy_ 🐕 _dies 😢_











![](https://cdn-images-1.medium.com/max/2000/1*g6c8GzN-fkt4wi1liJGdhA.jpeg)






[photo credit](http://sfcitizen.com/blog/wp-content/uploads/2010/03/321232241_f71a4313f9_o.jpg)







You know when you’re trying to learn something new, but get reeeeeeallly bored of building the default example app?

That’s the №1 motivation KILLER.

I don’t want my students to get demotivated and give up.

So I made this gigantic list of 28 fun app ideas you can build while [learning to use React with Ruby on Rails](https://learnetto.com/users/hrishio/courses/the-free-react-on-rails-5-course?utm_source=fcc_medium&utm_campaign=blog_post_ideas_for_react_rails_apps&utm_medium=blog_post_ideas_for_react_rails_apps).

This list will assume that you’re already comfortable with Ruby on Rails (or some other web development framework). So the backend bit may be a bit complex for beginners, but the front end React bit should be relatively simple.














### Project #1: A Calendar app for making appointments (like Google calendar)
















[A simple calendar appointments app](https://github.com/learnetto/calreact)







This can start off as a simple app which you can gradually improve by adding more features and UX improvements.

It will help you practice using nested components (like a day component, nested inside a week component, or a nested inside a month component).

I use this as an example app in my [Free React on Rails course](https://learnetto.com/users/hrishio/courses/the-free-react-on-rails-5-course?utm_source=fcc_medium&utm_campaign=blog_post_ideas_for_react_rails_apps&utm_medium=blog_post_ideas_for_react_rails_apps) and [Complete React on Rails course](https://learnetto.com/users/hrishio/courses/the-complete-react-on-rails-5-course?utm_source=fcc_medium&utm_campaign=blog_post_ideas_for_react_rails_apps&utm_medium=blog_post_ideas_for_react_rails_apps). So check them out if you want to try this out.

You can see the full step-by-step code here:

[**learnetto/calreact**  
_calreact - React and Rails 5 calendar appointment app_github.com](https://github.com/learnetto/calreact "https://github.com/learnetto/calreact")[](https://github.com/learnetto/calreact)

### Project #2: A Github explorer app for finding interesting code repositories
















[https://github.algolia.com](https://github.algolia.com)







You can build the search part purely on the client side, but you can make it more fun by storing the searches in a database using Rails and show the most popular searches.

You will practice using an external API and handling the JSON response. You could experiment with pre-rendering the component on the server.

See this browser plugin by [Algolia](https://medium.com/@algolia) to get your idea juices flowing:

[**algolia/github-awesome-autocomplete**  
_github-awesome-autocomplete - :octocat: Add instant search capabilities to GitHub's search bar_github.com](https://github.com/algolia/github-awesome-autocomplete "https://github.com/algolia/github-awesome-autocomplete")[](https://github.com/algolia/github-awesome-autocomplete)

### Project #3: A note-taking app












Simplenote



You could see the power of React handling a lot of state changes, say, by enabling auto-save. Check out [Simplenote](https://simplenote.com/) for a good example of a simple but powerful notes app.

If that’s too hard as a first app, you could first try out using an [external text editor component](https://facebook.github.io/draft-js/) to learn how it works, and then implement your own:

[**facebook/draft-js**  
_draft-js - A React framework for building text editors._github.com](https://github.com/facebook/draft-js "https://github.com/facebook/draft-js")[](https://github.com/facebook/draft-js)

### Project #4: Add a Slack chat widget to your site














Use the [react-slack-chat](https://www.npmjs.com/package/react-slack-chat) component to add a chat widget to your existing Rails site. The component does most of the heavy lifting but you can have fun by making your own bot in Rails and customizing the widget in React.

The code for the component is on Github:

[**5punk/react-slack-chat**  
_react-slack-chat - A Beautiful Gooey / Material Design Slack Chat Web Integrating Widget._github.com](https://github.com/5punk/react-slack-chat "https://github.com/5punk/react-slack-chat")[](https://github.com/5punk/react-slack-chat)

### Project #5: Meme generator














Rails can handle storing and serving an image library and existing memes. Use React for rendering and handling the form for making the meme.

You could generate the meme on the server using ImageMagick or in the browser using canvas. See [this repo](https://github.com/tranhungt/meme-maker) by [Hung Tran](https://medium.com/@tranhungt):

[**tranhungt/meme-maker**  
_meme-maker - Make your favorite memes and send them to your friend!_github.com](https://github.com/tranhungt/meme-maker "https://github.com/tranhungt/meme-maker")[](https://github.com/tranhungt/meme-maker)

### Project #6: Realtime Free Image search app












Help Medium bloggers find their inner [hispter](https://unsplash.com/collections/397770/coffee-house?photo=d0QWndxSR38)



Use the [Unsplash](https://medium.com/@unsplash) [API](https://unsplash.com/developers) for the high quality free photos:

[**unsplash/unsplash_rb**  
_unsplash_rb - Ruby wrapper for the Unsplash API._github.com](https://github.com/unsplash/unsplash_rb "https://github.com/unsplash/unsplash_rb")[](https://github.com/unsplash/unsplash_rb)

Add cool animations using the [React Animation Add-Ons](https://facebook.github.io/react/docs/animation.html).

Allow users to bookmark their favorite images. You could even experiment with making the backend just a Rails API app and make a separate React app for the front end.

### Project #7: Book club
















Goodreads is a great site to copy for this project







A simple app where you and your friends can share your favorite books and discuss them (like [Goodreads](https://www.goodreads.com)). The backend could be a simple Rails CRUD app, but you could make the front end a single page React app and play with React router and Redux.

### Project #8: Twitter web client for multiple accounts (like Tweetdeck)












I use [Tweetdeck](https://tweetdeck.twitter.com) for running my personal and business Twitter accounts from one place



A Twitter web client app in which you can connect more than one Twitter account (using OAuth) and then add multiple columns to the UI — for things like the feed, notifications, search, direct messages.

Use the Twitter gem by [Erik Michaels-Ober](https://medium.com/@sferik):

[**sferik/twitter**  
_twitter - A Ruby interface to the Twitter API._github.com](https://github.com/sferik/twitter "https://github.com/sferik/twitter")[](https://github.com/sferik/twitter)

This will give you the unparalleled joy of dealing with the ridiculous API rate limits from the most developer-friendly company in the world.

You could add Tweetdeck-style automatic fetching of new tweets and notifications using polling or Action Cable.

Lots of nested components and you can try out some simple animations in React.

It might be best to start off with building just reading capabilities. Once you have that, you can add the ability to post, like and retweet.

### Project #9: OpenStreetMap Custom UI












My hometown Pune (India) on [OpenStreetMap](http://www.openstreetmap.org/node/16174445#map=10/18.5564/73.9243) :)



Did you know the [OpenStreetMap website](http://www.openstreetmap.org) is a Rails app?

You can [get the repo here](https://github.com/openstreetmap/openstreetmap-website/), [set it up](https://github.com/openstreetmap/openstreetmap-website/blob/master/INSTALL.md) on your own machine and then tinker with adding React to the front end!

[**openstreetmap/openstreetmap-website**  
_openstreetmap-website - Mirror of the Rails application powering http://www.openstreetmap.org (hosted at git://git…_github.com](https://github.com/openstreetmap/openstreetmap-website/ "https://github.com/openstreetmap/openstreetmap-website/")[](https://github.com/openstreetmap/openstreetmap-website/)

### Project #10: Team lunch roulette












Check out [http://whatsforlunchshoreditch.com](http://whatsforlunchshoreditch.com/) built by [NEVERBLAND](https://medium.com/@NEVERBLAND)



A website for helping you decide where to go for lunch with your team. The Rails backend just needs to be a simple CRUD app which lets team members enter place suggestions. You could use the [Foursquare API](https://medium.com/@FoursquareAPI) for search and auto complete.

And use React for some ridiculous animations!

If you’re not into lunch, do coffee or cocktails or something else more exciting.

### Project #11: Super Procrastinator












[http://reader.one/](http://reader.one/)



A single website you can go to avoid work — read Reddit, Hacker News, [Product Hunt](https://medium.com/@producthunt), Medium, Slashdot and more in one place.

Use the Rails backend for saving user accounts and preferences, and talking to the different APIs. You could also fetch data from the APIs directly from the client side.

> _Want to build these apps with me? Come, check out my_ [_Complete React on Rails Course_](https://learnetto.com/users/hrishio/courses/the-complete-react-on-rails-5-course?utm_source=fcc_medium&utm_campaign=blog_post_ideas_for_react_rails_apps&utm_medium=blog_post_ideas_for_react_rails_apps)_, where I will teach you how to be a pro at_ [_using React with Rails_](https://learnetto.com/users/hrishio/courses/the-complete-react-on-rails-5-course?utm_source=fcc_medium&utm_campaign=blog_post_ideas_for_react_rails_apps&utm_medium=blog_post_ideas_for_react_rails_apps)_, while building some fun stuff._

### Project #12: Chatroom with Action Cable












Remember [AIM](https://www.flickr.com/photos/katemo/2372403984/in/photostream/)?



In addition to learning React, this would make a great little project to try out [Action Cable](http://guides.rubyonrails.org/action_cable_overview.html), a cool new Rails 5 feature which adds WebSocket support to Rails. See [these examples](https://github.com/rails/actioncable-examples) to get started:

[**rails/actioncable-examples**  
_actioncable-examples - Action Cable Examples_github.com](https://github.com/rails/actioncable-examples "https://github.com/rails/actioncable-examples")[](https://github.com/rails/actioncable-examples)

### Project #13: Extra Small (A [Medium](https://medium.com/@Medium) clone)












Because extra small is extra beautiful!



Check out [this series of blog posts](http://fancypixel.github.io/blog/2015/01/28/react-plus-flux-backed-by-rails-api/) by [Andrea Mazzini](https://medium.com/@theandreamazz), in which he describes in detail how he built a Medium clone with a Rails API app, React and Flux.

[**FancyPixel/small-rails**  
_small-rails - Small, a tiny clone of Medium. Rails API_github.com](https://github.com/FancyPixel/small-rails "https://github.com/FancyPixel/small-rails")[](https://github.com/FancyPixel/small-rails)

[**FancyPixel/small-frontend**  
_small-frontend - Small, a tiny clone of Medium. React + Flux frontend_github.com](https://github.com/FancyPixel/small-frontend "https://github.com/FancyPixel/small-frontend")[](https://github.com/FancyPixel/small-frontend)

You can build it without using Flux, but it might be worth a try if you’re up for the challenge.

### Project #14: Face tagger












D to da A to da V to da I to da D to da C



An app where you can upload photos and tag people (like on Facebook). Use the [OpenCV Ruby gem](https://github.com/ruby-opencv/ruby-opencv) for automatic face detection:

[**ruby-opencv/ruby-opencv**  
_ruby-opencv - Versioned fork of the OpenCV gem for Ruby_github.com](https://github.com/ruby-opencv/ruby-opencv "https://github.com/ruby-opencv/ruby-opencv")[](https://github.com/ruby-opencv/ruby-opencv)

### Project #15: ActiveAdmin on steroids












[ActiveAdmin](http://activeadmin.info/) default UI



You’ve probably used [ActiveAdmin](http://activeadmin.info/) for managing your app records. But the UI is not exactly inspiring. You can change that by taking one view at a time and turning it into a nicely styled React component.

Look into the ActiveAdmin code here:

[**activeadmin/activeadmin**  
_activeadmin - The administration framework for Ruby on Rails applications._github.com](https://github.com/activeadmin/activeadmin "https://github.com/activeadmin/activeadmin")[](https://github.com/activeadmin/activeadmin)

### Project #16: An Ecommerce Store
















Sunlit uplands as a service







Jam, beer, England flags, curry, all served by React on Rails. If you don’t want to build up the store features in Rails, just use [Spree](https://spreecommerce.com/) and focus on practicing React components for the front end.

[**spree/spree**  
_spree - Spree is a complete open source e-commerce solution for Ruby on Rails._github.com](https://github.com/spree/spree "https://github.com/spree/spree")[](https://github.com/spree/spree)

#### Guess what? I’m building this online store idea in a series of tutorials. The first one will be published right here on the freeCodeCamp blog! Make sure you follow me on Medium and [sign up on Learnetto](https://learnetto.com/tutorials) to get it in your inbox.

### Project #17: Just Mail No Chimp
















I have a love-hate relationship with Mailchimp







An email newsletter app with a good UI that doesn’t make you want to tear your hair out. And no cute monkey nonsense 😡

You can still use the [Mailchimp API](https://developer.mailchimp.com/) or use [Sendgrid](https://sendgrid.com/). If you’ve used Mailchimp, you know there are a ton of features you can try building — viewing/filtering/managing subscribers, designing forms, creating campaigns, and more.

Just pick one feature and try to build it. Most features will involve some kind of form, so it should be good practice for dividing your UI into React components that will handle state and some stateless functional components.

### Project #18: Gmail on Rails












[LeBron James’ Inbox (2012)](http://mashable.com/2012/07/24/lebron-james-email-hacked/#Jq6nK.otogqq)



Gmail has a pretty complex UI but you could start off by just building the UI for listing and reading emails. Or maybe search could be more fun?

Use the [google-api-client gem](https://developers.google.com/gmail/api/quickstart/ruby) and check out this awesome React tutorial and code repo by [Mark Brown ☕](https://medium.com/@markbrown4) to get started:

[**markbrown4/gmail-react**  
_gmail-react - A React.js tutorial - Gmail_github.com](https://github.com/markbrown4/gmail-react "https://github.com/markbrown4/gmail-react")[](https://github.com/markbrown4/gmail-react)

### Project #19: DJ Spotify














A DJ’ing app built on top of [Spotify](https://medium.com/@Spotify). Get recommendations, create and mix playlists and even allow others to add songs to your playlists.

Use a [Ruby wrapper](https://github.com/guilhermesad/rspotify) gem for the Spotify API:

[**guilhermesad/rspotify**  
_rspotify - A ruby wrapper for the Spotify Web API_github.com](https://github.com/guilhermesad/rspotify "https://github.com/guilhermesad/rspotify")[](https://github.com/guilhermesad/rspotify)

I’ve built a [tiny little app](http://songshaker.herokuapp.com/) with it before and it’s quite easy to use. Spotify only allows the music itself to be played with their own apps, so you have to keep the app running alongside.

### Project #20: Heroku dashboard














As a Rails developer, you’re probably very familiar with [Heroku](https://heroku.com). It’s an awesome service for quickly deploying and hosting Rails apps — perfect when you’re making lots of little things for learning

Build a simple dashboard which lists your apps and lets you quickly view key information about each of them. You can add editing capabilities as a second step.

Use this gem to access the Heroku API:

[**heroku/platform-api**  
_platform-api - Ruby HTTP client for the Heroku API_github.com](https://github.com/heroku/platform-api "https://github.com/heroku/platform-api")[](https://github.com/heroku/platform-api)

### Project #21: AWS S3 client
















UI design ‘95







Build a nice modern UI for managing your AWS S3 account. Use the [Ruby gem](https://github.com/aws/aws-sdk-ruby) and start off by building a simple file browser component. Then add a form component to upload files.

[**aws/aws-sdk-ruby**  
_aws-sdk-ruby - The official AWS SDK for Ruby._github.com](https://github.com/aws/aws-sdk-ruby "https://github.com/aws/aws-sdk-ruby")[](https://github.com/aws/aws-sdk-ruby)

### Project #22: Stripe analytics dashboard
















Check out [Baremetrics](https://medium.com/@Baremetrics) for some inspiration — [https://demo.baremetrics.com/](https://demo.baremetrics.com/)







A dashboard for showing some statistics and charts based on [Stripe](https://medium.com/@stripe) data. The API is [very well documented](https://stripe.com/docs/api/ruby) and this is a great chance to try using D3 with React (look at [this](http://www.reactd3.org/) and [this](https://github.com/QubitProducts/d3-react-sparkline)).

### Project #23: Google analytics dashboard












Look at the GA iPad app for inspiration (it’s much nicer than the website)



The default Google analytics web dashboard is cluttered and confusing. You could build a simpler one which just shows the most important information.

Another chance to use D3 or you could try [another library](https://github.com/reactjs/react-chartjs).

You can access the GA API with [this gem](https://developers.google.com/api-client-library/ruby/apis/analytics/v3).

### Project #24: Habit Tracker












The [Loop Habit Tracker](https://github.com/iSoron/uhabits) has a nice simple UI



Build an app for tracking your daily and weekly habits — morning routines, gym sessions, running, cooking, meditation, guitar practice, tea ceremonies?

For inspiration, check out the [Loop Habit Tracker](https://github.com/iSoron/uhabits) or [Coach](https://www.coach.me/habit-tracker).

Make it mobile-friendly so that you can use it on the go. Once you’re comfortable with React, you could even build a mobile app using React Native.

### Project #25: Fitness dashboard












Check out [Exist](https://exist.io/) for inspiration (built by [Josh Sharp](https://medium.com/@joshsharp) and [Belle Beth Cooper](https://medium.com/@bellebcooper))



Build a dashboard for all your personal fitness data, that pulls in data from different apps and presents some useful statistics in a nice UI.

Depending on what you, your family and friends use, you could easily pull in data from a number of APIs — [Fitbit](https://github.com/whazzmaster/fitgem), [Google Fit](https://developers.google.com/api-client-library/ruby/apis/fitness/v1), [Moves](https://dev.moves-app.com/docs/guide), [Runkeeper](https://runkeeper.com/developer/healthgraph/overview), [Strava](https://github.com/jaredholdcroft/strava-api-v3), [Withings](http://oauth.withings.com/api) and lots more!

You could even allow the user to manually enter data for simple things like weight tracking and exercise routines.

You could start off by just showing reports and then enhance it with new features like adding notes and sharing.

I’ve built a simple dashboard for Fitbit data. See the code here:

[**learnetto/reactfit**  
_reactfit - A fitness dashboard app built using Rails 5.1 and React.js_github.com](https://github.com/learnetto/reactfit "https://github.com/learnetto/reactfit")[](https://github.com/learnetto/reactfit)

### Project #26: Guess My Sketch (game)
















[Google Quick Draw](https://quickdraw.withgoogle.com/)







Make a drawing app in which you can draw with a mouse, and a friend has to guess what you drew. You can use canvas for drawing. See [react-sketchpad](https://github.com/svrcekmichal/react-sketchpad) by [Michal Svrček](https://medium.com/@svrcekmichal) for some ideas on how to start:

[**svrcekmichal/react-sketchpad**  
_react-sketchpad - Sketch pad created with canvas_github.com](https://github.com/svrcekmichal/react-sketchpad "https://github.com/svrcekmichal/react-sketchpad")[](https://github.com/svrcekmichal/react-sketchpad)

Use Rails to upload and save the drawing and show it to someone on another computer.

As an advanced exercise in fun, add [machine learning](https://gist.github.com/gbuesing/865b814d312f46775cda) and make the computer guess 😉

### Project #27: You Write Like
















Always good to know who inspires famous internet people







Make a text classifier app which matches your writing style to a famous author — just like [I Write Like](https://iwl.me/) (made by [Dmitry Chestnykh](https://medium.com/@dchest)).

Use [classifier-reborn](https://github.com/jekyll/classifier-reborn) for classifying the text and React for handling the form. This app is mostly backend-heavy, so experiment with some [UI animations](https://facebook.github.io/react/docs/animation.html). See [this repo](https://github.com/FormidableLabs/react-animations) for some cool ideas:

[**FormidableLabs/react-animations**  
_react-animations - A collection of animations for inline style libraries_github.com](https://github.com/FormidableLabs/react-animations "https://github.com/FormidableLabs/react-animations")[](https://github.com/FormidableLabs/react-animations)

### Project #28: Idea Board



 [


](https://learnetto.com/tutorials/rails-5-api-and-react-js-tutorial-how-to-make-an-idea-board-app) 

An Idea Board app with idea tiles



Build an Idea board app using a [Rails 5.1 API app and a separate React app](https://learnetto.com/tutorials/rails-5-api-and-react-js-tutorial-how-to-make-an-idea-board-app) built using Create React App. The Idea board is a simple board which displays ideas in the form of square tiles. You can add ideas, edit existing ideas and delete ideas.

I’ve already built this one! Check out these two video tutorials which will show you how to build this step-by-step:

Part 1:

[**_Rails 5 API and React.js tutorial - How to make an Idea board app | Learnetto_**  
Rails 5 API and React.js tutorial - How to make an Idea board app | Learnettolearnetto.com](https://learnetto.com/tutorials/rails-5-api-and-react-js-tutorial-how-to-make-an-idea-board-app "https://learnetto.com/tutorials/rails-5-api-and-react-js-tutorial-how-to-make-an-idea-board-app")[](https://learnetto.com/tutorials/rails-5-api-and-react-js-tutorial-how-to-make-an-idea-board-app)

Part 2:

[**_How to animate a component using React Transition Group | Learnetto_**  
How to animate a component using React Transition Group | Learnettolearnetto.com](https://learnetto.com/tutorials/how-to-animate-a-component-using-react-transition-group "https://learnetto.com/tutorials/how-to-animate-a-component-using-react-transition-group")[](https://learnetto.com/tutorials/how-to-animate-a-component-using-react-transition-group)

These tutorials cover many practical concepts including stateless functional components, class-based components, use of axios for making API calls, immutability-helper and more.











* * *


















So many ideas!



Now that’s a whole lot of interesting ideas for you to kickstart your React on Rails journey!

_Want to build these apps with me? Come, check out my_ [_Complete React on Rails Course_](https://learnetto.com/users/hrishio/courses/the-complete-react-on-rails-5-course?utm_source=fcc_medium&utm_campaign=blog_post_ideas_for_react_rails_apps&utm_medium=blog_post_ideas_for_react_rails_apps)_, where I will teach you how to be a pro at_ [_using React with Rails_](https://learnetto.com/users/hrishio/courses/the-complete-react-on-rails-5-course?utm_source=fcc_medium&utm_campaign=blog_post_ideas_for_react_rails_apps&utm_medium=blog_post_ideas_for_react_rails_apps)_, while building some fun stuff. You can_ [_get started for free here_](https://learnetto.com/users/hrishio/courses/the-free-react-on-rails-5-course?utm_source=fcc_medium&utm_campaign=blog_post_ideas_for_react_rails_apps&utm_medium=blog_post_ideas_for_react_rails_apps)_._

Got any other ideas? Share them in a response below.

**Please** 💚 **recommend/clap 👏 and share this article!**








