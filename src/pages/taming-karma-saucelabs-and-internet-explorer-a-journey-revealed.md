---
author: Gregory Beaver
authorTwitter: https://twitter.com/GregCello
authorFacebook: https://facebook.com/10154117179538854
title: "Taming Karma, SauceLabs and Internet Explorer: a journey revealed"
subTitle: "It seemed simple enough...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*Ex9axm71QoSG-erRQQBWuw.jpeg
url: https://medium.freecodecamp.org/taming-karma-saucelabs-and-internet-explorer-a-journey-revealed-548275ed04b4
id: taming-karma-saucelabs-and-internet-explorer-a-journey-revealed-548275ed04b4
date: 2016-06-16T03:49:08.866Z
tags: [
  "JavaScript",
  "React",
  "Testing",
  "Open Source",
  "Web Development"
]
---
# Taming Karma, SauceLabs and Internet Explorer: a journey revealed







![](https://cdn-images-1.medium.com/max/2000/1*Ex9axm71QoSG-erRQQBWuw.jpeg)

Success! All the browsers are belong to us







It seemed simple enough.

Just set up karma with [TravisCI](http://travis-ci.org) to run tests on [SauceLabs](https://saucelabs.com) so I can be certain my code doesn’t break the internet when Granny wipes off the cobwebs and fires up Internet Explorer to browse to a site that uses my code.

At first, it seemed like the hardest challenge would be to set up karma.conf.js. My project, [react-selection-hoc](http://cellog.github.io/react-selection/), is a React component that allows any list of things to become selectable using [Higher Order Components](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750#.pliuiqo22). Long story short, I want to make sure that it works on every browser it could work on.

The project is written in ES6 and JSX, so for karma to work, I needed to somehow package up the code in a way that babel could convert it to es5\. This turned out to be much harder than I expected. Eventually, I found the solution in the way that [react-big-calendar](http://intljusticemission.github.io/react-big-calendar/examples/index.html) handles it, by packaging up the tests with the karma-webpack plugin. This worked with the local Chrome browser fabulously. Done!





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/551065d1de1da9b38419ecf31a49e177?postId=548275ed04b4" data-media-id="551065d1de1da9b38419ecf31a49e177" allowfullscreen="" frameborder="0"></iframe>















* * *







Next step: get SauceLabs set up. Note: I did consider using [BrowserStack](https://browserstack.com), which is oh-so-sexy and the best thing ever for manual testing, but the automated tests have some limitations that meant the test suite ran about 10–15 minutes slower than SauceLabs. Some of it was the limited free account, some of it is design, but ultimately SauceLabs works better for my needs. If I was closed source with mega-bucks, I would probably go with BrowserStack, but that’s neither here nor there.

Setting up SauceLabs is hard. Not because it is hard, but because the documentation is scattered all over the universe. The configurator for SauceLabs is out of date, but by triangulating with the platform list, it is possible to create an array of browsers that will work.

In addition, I wanted to be able to quickly develop a test locally, using karma’s autowatch feature, sort of a Hot Module Reload for testing. The way I solved this initially was to use a separate command for local testing, which passes an environment variable into karma that causes it to use only the local Chrome browser with singleRun set to false. Disable the QUICKTEST environment variable, and it connects to saucelab. Of course, I have to remember to start the [saucelabs connect tunnel](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy) and you shouldn’t forget this when running your own setup.

Long story short, here is the first working setup I used! All seemed well until…





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/670181d458563bc67a66f8870d3a6e86?postId=548275ed04b4" data-media-id="670181d458563bc67a66f8870d3a6e86" allowfullscreen="" frameborder="0"></iframe>





#### Purgatory begins

Part of my goal with the unit tests for react-selection-hoc is to ensure that browser quirks are tested and accounted for so that any contributions have a test framework to ensure they aren’t breaking anyone else’s install. The code only uses a couple of DOM-specific measurement functions to determine whether a click/tap or mouse/finger drag is over a selectable element or not. It should be simple to test these right?

In order to test these simple things in all browsers authentically, to truly verify the correctness of the code, it means modifying the DOM and then querying it. Because of how Karma works, this means the actual testing environment is modified, which is where we enter purgatory in this story.

> Because of how Karma works, this means the actual testing environment is modified, which is where we enter purgatory in this story.

At first, things seemed cool. I found edge cases that didn’t work in iOS and Internet Explorer, fixed them, and moved on to other things. Then, I started to notice tests failing randomly that had been working before.

But the worst part was when I ran the IE tests in isolation, which is to say only on Internet Explorer and Edge, they all passed. Every. single. time.

So, to rectify this, I first tried putting the DOM manipulation code in their own describe blocks, with before/after code to set up the manipulation. No improvement. Then, I tried setting useIframes to false, which tells Karma to run the tests in a separate window. This worked great for Internet Explorer, but broke every single mobile browser, and left me in a puddle of despair.

#### The solution, or nirvana appears

The moment of enlightenment finally came today. On a whim, I decided to see what would happen if I ran 2 sequential runs of karma with the same build ID for saucelabs. To my delight, SauceLabs obediently grouped all the tests together. So, I refactored all of my karma configuration files, did away with the environment variable-based solution, and ended up with this perfect, working solution:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/46297ddbc394bb393b3ec4be9cc9fef7?postId=548275ed04b4" data-media-id="46297ddbc394bb393b3ec4be9cc9fef7" allowfullscreen="" frameborder="0"></iframe>





In my package.json, all I need to run all tests is:

<pre name="c0f4" id="c0f4" class="graf graf--pre graf-after--p">**"test"**: **"karma start karma.noie.conf.js && karma start karma.ie.conf.js"**,</pre>

I hope this solves someone else’s conundrum. Karma + SauceLabs is a fantastic way to test both high-level code and very low-level assumptions about how browsers work to ensure that your issue tracker won’t fill up with annoying should-have-tested-that bugs.

Happy testing!








