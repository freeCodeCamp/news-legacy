---
author: Austen Allred
authorTwitter: https://twitter.com/AustenAllred
authorFacebook: https://facebook.com/585096069
title: "If I Ran Product at Twitter"
subTitle: "I think about Twitter a lot. Probably more than someone who doesn’t have any monetary incentive to do so ever should. I’m not an investor..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*69IwUfCLRSi6l966dXRixA.png
url: https://medium.freecodecamp.org/if-i-ran-product-at-twitter-b8dc1e3458cd
id: if-i-ran-product-at-twitter-b8dc1e3458cd
date: 2016-01-20T13:27:13.940Z
tags: [
  "Twitter",
  "Social Media",
  "Product Management",
  "Design",
  "Startup"
]
---
# If I Ran Product at Twitter

I think about Twitter a lot. Probably more than someone who doesn’t have any monetary incentive to do so ever should. I’m not an investor (even in the public market), I don’t have a relationship with anyone who works there, and I have no power whatsoever to enact any changes, but I do deeply love the product, not to mention what it’s done for my life.

This post originally started with me hammering out some stuff on an airplane as a bit of a thought experiment, and ended up as me thinking about the product as if it were my own.

I came at this from the perspective of a startup founder: How could an engineering team get the most bang for their buck? I’m sure Twitter is spread very thin, so partially as a challenge and partially because that’s the way I’m used to thinking, I tried to reuse as many existing elements and design patterns as possible to make the hypothetical changes relatively simple ones.

But first, before we jump in, we need to understand a bit about where Twitter is at and why.

### Twitter’s Troubles

It’s no secret that Twitter has hit a few bumps on the road. User growth has slowed, the stock price is [lower than ever](http://techcrunch.com/2016/01/19/the-fail-whale-returns-twitter-went-down-across-many-regions-today/), Wall Street ran out of patience with Jack as a CEO about 12 hours after he started, and every now and then I catch wind of talent abandoning ship — not an ideal place to be as a public company.

But that having been said, I’m still long on Twitter. Even as VCs [speculate](https://twitter.com/sama/status/688800885783199744) as to whether or not Twitter could be replaced in three years, I believe it’s too good of a product with too strong of a network to just fade away. I’m of the opinion that all of these problems can and will be fixed.

In short, I’m long on Twitter.

### Dissecting Tweets

Before we dive too heavily into the changes I would make at Twitter, it’s helpful to develop an understanding of what I consider to be the fundamental elements of a tweet and home Twitter feed. When we do so seeing where other features and fixes should fit in becomes much easier.

A tweet can be divided into four basic elements:

1.  The tweet text. The 140 chars. (red).
2.  Where the tweet came from. Was it a retweet? Is it from moments? (green).
3.  Attachments. These include photos, videos, vines, periscope, links, and now even other tweets. (blue).
4.  Metadata. Who tweeted, timestamp. (black).



![](https://cdn-images-1.medium.com/max/1600/1*dYwdn3UVFCjGy0472853hw.png)



### 140 Chars (Replacing the Screenshot)





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/31edb76511cd8f201319c912e22b4ee2?postId=b8dc1e3458cd" data-media-id="31edb76511cd8f201319c912e22b4ee2" allowfullscreen="" frameborder="0"></iframe>





As a result of the SMS constraints Jack mentions in the tweet above, one of the great accidental features of Twitter is its forced brevity. I’m sure you know, but just as a refresher, each tweet has to be less than (or equal to) 140 characters.

Many people think that this is great because it limits the vertical space tweets take up in your feed. While this is true, the positive aspects of a limited number of characters are much deeper than tweets not being very tall. (If screen real estate were the only problem there would be an easy fix — only show the first 140 characters and have a “show more” button or something equivalent.) But that’s not the point.

The important aspect of the 140 chars is the cognitive load required to fill up 140 chars. Jack once described it using this metaphor: Imagine yourself in front of a mural which is to be your canvas; something 20 feet wide by 8 feet tall. You are forced to think and plan and know exactly what you should do with every inch of white space.

Now compare that to a Post-it Note. With a Post-it you just jot something down and move on.

Twitter right now is the equivalent of a Post-it note. That’s fantastic for many use cases, and it has generated an absurdly high amount of content from a wide variety of sources.

But some thoughts just don’t fit on Post-its. Users have used screenshots, tweetstorms, and even external sites like twitlonger to get around the 140 character constraint. It’s obviously something Twitter should support natively — why send everyone away and give up those clicks and eyeballs?

If nothing else, it seems a little bit ridiculous that the best way the former CEO of Twitter can communicate is by taking screenshots of his iOS Notes app.





<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/a690a9bd0a70a3c9e95968e5fb03199d?postId=b8dc1e3458cd" data-media-id="a690a9bd0a70a3c9e95968e5fb03199d" allowfullscreen="" frameborder="0"></iframe>





So the challenge is solving the need for longer tweets without eliminating the benefits of the constraints. How do you stop making users jump through hoops or use hacky workarounds to make the product do what they want?

Now that we understand the anatomy of a tweet, it’s really quite simple.

#### The Post

There are several attachment types supported natively within Twitter. Some you add from within the app (photos, videos and polls), some are parsed from the body of the tweet (links and links to tweets), and some come from external apps (Vine and Periscope).

The attachments one can tweet from within the app are available at the bottom of each “compose Tweet” screen.

All that Twitter needs to do to overcome the 140 character dilemma is to add a larger canvas as a new attachment type. I’d call it, simply enough, the “post.”

You could lay it out this way (forgive me, I’m not a designer).

Place a button to the right of the poll button, and you get:



![](https://cdn-images-1.medium.com/max/1600/1*AD8CxaxNo5iaPeetIeH4yg.png)



Tap that button, and you’re on to:



![](https://cdn-images-1.medium.com/max/1600/1*hBmCNkABUajOIv0uBcatkQ.png)

Yes, this is a Medium ripoff



It’s just like attaching a photo, except instead of selecting a photo to attach you’re adding text to a post. As simple as a screenshot, but with much more utility.

The text editor itself doesn’t have to be as fancy as pictured above; it could literally be plain text and people would use it like crazy.

The way you display that in a timeline has also already been solved: it’s just one more form of attachment, the same way a photo or quoted tweet is:



![](https://cdn-images-1.medium.com/max/1600/1*RxLZbV1yYMof11qbiJVfWA.png)



You could start with a very simple editing and reading experience, and end up with something similar to Medium, but built natively within Twitter itself.

That’s where things get real interesting. Instead of Twitter being a microblogging platform, it could actually become… a blogging platform.

#### The Tweetstorm

But a post is somewhat different than a tweetstorm. A post is a long blurb of text, where a tweetstorm is a collection of tweets as individual units; each one can be retweeted, replied to, and interacted with within its own context. I don’t think you want to (or would) lose tweetstorms as a result of having a post. So I think of tweetstorms separately, yet again as a type of attachment.



![](https://cdn-images-1.medium.com/max/1600/1*phOyf1goql-u4g5vF7XbJQ.png)

Adding a tweetstorm button is straight-forward





![](https://cdn-images-1.medium.com/max/1600/1*Ld_jWeFOE0CWpfOF6IqPVg.png)

As is actually implementing the tweetstorm compose functionality



You could even use something very similar to the create poll screen, except instead of adding a lot of poll options you’re adding additional tweets. (You’d probably use several text areas instead of text fields, of course, but the principle of the matter remains).



![](https://cdn-images-1.medium.com/max/1600/1*gIzGwHt7k-kE6h5BhbK_Kg.png)



And how would you display a tweetstorm? Display the first tweet as normal, and the rest as an attachment: “_n_ more tweets.” Tapping on it would open it up in a separate timeline that would actually allow you to read the tweets in proper sequence.

### Fixing Follows

At the core of Twitter’s Wall Street woes is the slowing growth. Spending a few minutes with people who don’t use Twitter (or who have signed up and haven’t found enough value to continue) the reason is obvious.





<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/582227dd33c2941bfd39ba6d1aa2962a?postId=b8dc1e3458cd" data-media-id="582227dd33c2941bfd39ba6d1aa2962a" allowfullscreen="" frameborder="0"></iframe>





Put simply, Twitter increases in value along with the quality of your feed. This means that the people who put more time and effort into Twitter get more out of it.

But putting together your feed is _very_ difficult, especially for new users who have nothing to go off of and have never intentionally created a similar feed before.

To better explain what that means I’d like to take the liberty of looking at Twitter from the perspective of my grandma.

#### My Grandma

My Grandma, outside of occasionally using passwords like “p@ssw0rd,” is technically savvy. She used to work for Novell, she blogs and emails, and certainly knows her way around a computer.

Does my grandma use Facebook? Of course. Does she use Twitter? Nope.

It’s easy to write that off as “well that’s not our target market,” but at a certain point, in order to justify the $x0 Billion market cap, Twitter needs to start attracting the “late majority” of users.



![](https://cdn-images-1.medium.com/max/1600/1*9_eTA52XG4hx3WSFQUp0uQ.jpeg)



My grandma is a prototypical late adopter. She started using Facebook on recommendation of one of her grandchildren a couple of years ago, accepting his friend request as her first. Immediately the rest of the family saw that she had joined, and we all started adding her as a friend. She, of course, accepted the requests.

Before she knew it, and without doing much at all, she had recreated much of her in-real-life social graph on Facebook. Now every time she logs onto Facebook she sees photos, videos, and posts from her family. Importantly, _she didn’t even have to think to make that happen_.

I’m not sure there’s a stickier experience anywhere on the Internet.

Facebook has two major advantages over a network like Twitter:

1.  Facebook’s connections are bidirectional (sometimes I call it “lazy”); if I add you and you accept, you unwittingly added me to your social graph. On Twitter every user has to create his or her own graph manually instead of merely reacting to others.
2.  Facebook is recreating an _existing_ social graph, merely transposing “people I know in life” to “people I know on Facebook.” The great (and difficult) thing about using Twitter is that you’re creating a graph _that didn’t previously exist_ from scratch. Especially for non-early-adopters, that’s a very tall order.

The unidirectional graph is both my favorite thing about Twitter and the thing that causes Twitter’s growth to be slow. As they say, Facebook is the people you know, Twitter is the people you wish you knew.

Twitter’s problem is sometimes people don’t know who they wish they knew. Facebook wins because everyone knows who they know.

Most Twitter users I know spend an inordinate amount of time pruning and discovering who to follow— constantly adding to and removing from their feed. I’d go as far as to say that the value one receives from using Twitter is directly correlated to the amount of time he or she spends adjusting whom he or she follows.

#### The Importance of the Graph

The initial social graph is such a fundamental metric for Facebook that the (now legendary) growth team focused _solely_ on getting each new member to have seven connections. They found that was the point at which people would stick around. They knew you would be hooked at that point.

My hunch is that a similar number is true for Twitter — at some level creating enough of a quality social graph makes Twitter sticky.

The problem Twitter is running into is that creating that graph from nothing on Twitter is an order of magnitude more difficult than recreating a graph (perhaps even accidentally) on Facebook.

This is true for both existing users and new users, but we’ll focus on new users first.

#### Onboarding: Bootstrapping the Graph

Twitter seems to be well aware of what computer scientists would call the [cold start](https://en.wikipedia.org/wiki/Cold_start) problem: In short, they know nothing about a new user, and it’s hard to make predictions (let alone construct a social graph) when you don’t know anything. They’ve tried several ways to solve it for newly registering users, from the current “survey” to the previous “logged out homepage,” but these pretty clearly miss the mark.

After having run through the onboarding process several times, I honestly believe it would be better if it didn’t exist at all in its current state. It’s broken enough that I can’t imagine it _not_ ruining the experience of anyone signing up for the first time.

I went through the onboarding process and created a new account three more times this morning (onboarding multiple times on various platform is a weird hobby of mine). I did it once trying to match exactly what I would say personally, once using only contacts from my gmail account, and a final time using only my mobile contacts.

This is all specific to me, so it may be difficult to ascertain whether or not there’s value, but I think the issues will be obvious.

For the first round I said I like tech/science in Twitter’s survey, and didn’t give any further context or contacts. This is who Twitter recommended I follow:



![](https://cdn-images-1.medium.com/max/1600/1*_R_fxZhOZVwuVmCAoqvFMQ.png)



Inside Science & Tech, an account I’ve never heard of, but it seems science and techy so I suppose that makes sense. Then TechCrunch, an account I currently don’t follow because I’m not a huge fan of the writing, but fair enough, I said tech, here’s TechCrunch.

It also included several leaders of the LDS Church. I don’t know where that came from, but I’m in Utah so it could be something location-based. Whatever. I just followed and everyone Twitter recommended.

To my surprise, when I looked at the feed that this onboarding populated it was 99% CNN, ESPN and Utah Jazz. Apparently further down the list were some very non-tech accounts I didn’t pay attention to (I assume a lot of users similarly wouldn’t), and these huge, constantly-tweeting and completely irrelevant accounts were completely dominating my feed.

If I were a first-time user I would have left and never come back. But maybe that was a fluke.

I then tried with a new account, only importing my gmail contact list. This is who Twitter recommended I follow based on my emails:



![](https://cdn-images-1.medium.com/max/1600/1*CNFhWxOuo5_26V6na0mnhw.png)



Maybe I have an email from the Mormon Newsroom somewhere, but they’re certainly not one of my “contacts.” I have no idea how Drake got on there, or the White House, but this is again obviously broken. My feed was a mess of brands, most of whom were trying to promote content.

But maybe it’s because I’m on desktop and no one uses desktop anymore; let’s try on mobile. This time I’m going to use my mobile contact list _only_.

To my surprise, again Twitter injected a large number other accounts for me. From Barack Obama and Bill Clinton to news sites and all sorts of random celebrities, interspersed with the people I actually know and care about.



![](https://cdn-images-1.medium.com/max/1600/1*kL08qv_C7voZP2grGB1cZw.png)



When I got to my home screen, the tweets were from (in this order):

Time, MarketWatch, Entrepreneur, Time, ESPN, CNN, The Economist, Forbes, Wall Street Journal.

I had to scroll _57_ tweets before I saw something from somebody I knew.

#### I didn’t come here to follow brands

Maybe this is just me, but I would guess that step one for fixing the social graph problem is to stop fetishizing the popular and branded accounts — especially those that tweet seven times an hour. It seems like Twitter is pushing those across the board. Maybe I’m an atypical user, but in my opinion they are some of the worst accounts to follow: They mostly tweet press releases and links to articles.

If a new user is truly interested in tech, why not have them follow Elon Musk and Jeff Bezos instead of TechCrunch and CNN?

Maybe they have some special deal with Twitter and Twitter is making a bunch of money from that; I don’t fully understand the onboarding process, but whatever it is it’s completely destroying the user experience. If nothing else I’d probably get the most value out of just following a dozen people I actually know (my address books at this point is mostly related to the stuff I’m interested anyway), and let a graph grow from there.

But the need to find people to follow expands well beyond new account creation. Finding and following is one of the most important aspects of Twitter. There are a few things I would do to make Twitter better at finding people to follow, as well as a few things that don’t involve following _people_ at all.

### Finding People to Follow

I think about how to find new people to follow all the time, and as a result have developed a few methods of doing so manually that work quite well.

I would be fascinated to know how these would work if Twitter productized them, bearing in mind that every good follow increases the value of Twitter.

Generally I will use the API to follow a few new people, and if I like what they tweet I’ll transfer them from my feed (which I’m a little bit loose with) to my lists (which are sacred). Of course, the flow for the average user would need to be quite different, with much more discretion being applied (they would want to follow everyone manually), but that process could be made simple by providing a page of “who to follow” with some basic information (bio, photo, who follows them and a few of their last tweets). Basically the profile page, but compacted, with several users on the same page, and with specific methods for discoverability.

You could even build these into a Tinder-like “discover” experience, but I won’t dwell too much on the specifics of UI in this instance. What I want to focus on are the methods for finding people to follow.

#### How I Find People to Follow

1.  I like to find people who tweet the same links that I do. This means that generally they are interested in the same topics or reading the same stuff. It almost becomes a reverse Nuzzel.
2.  Sometimes I’ll go through the tweets that I retweeted and follow everyone who also retweeted them.
3.  Occasionally I’ll use a tool like [Electoralhq](https://www.electoralhq.com/) to create a list of all of the people someone else follows, essentially recreating that person’s feed. I then can use that person’s feed on occasion to find new people. (This actually used to be a Twitter feature).
4.  I love to create lists of the people that are followed by the people I follow, but who are not followed by me. I’ve found some of my favorite accounts that way.

As you can see, these are not things that most users would do, but they have increased the value of Twitter for me so greatly I think it would be neat to see those tools be widespread. (I’ve actually toyed with building some of them in the past, but the API calls limitation made it impossible.)

This is relatively trivial, but given that the building of a social graph is the single most important aspect of Twitter it would be nice to have some additional tools to be able to find people.

### Following More than People

A potentially even more obvious way to solve the social graph problem is to let me follow more than people.

What if you could follow _events?_

What if you could follow _topics?_

That’s pretty clearly what Twitter was trying to solve with Moments, but Moments doesn’t solve the problem.

#### Fixing Moments

The problem with moments isn’t the design or the position of the button or the layout; that was all executed very well (serious hats off to the Moments team for that).

The problem with moments is _the content_. Moments essentially recreated a portion of the Yahoo homepage within Twitter.

I, and most people I know who use Twitter, go to Twitter to find the stuff that’s _not_ on the Yahoo home page.

This isn’t necessarily the fault of the Moments editorial team either; the problem is the editorial team is tasked with an impossible job: Find content that all Twitter users will want to click on. Mark my words, that will never happen.

The problem that Moments set out to solve is that _curation is hard_. An event is happening, and sure, you could follow the hashtag, but there’s way too much firehose to drink from. I would be willing to bet the thought process was something like this:

> “It is really hard for people to curate their feeds enough to make Twitter valuable during big events like [Ferguson]. How can we solve that?”

> “Well let’s just hire some people to find the best stuff and do that for them.”

Tie that together with some brainstorming about how to get those tweets into a feed, Twitter Moments is born. I think they were on the right track.

But I also think Twitter missed an _enormous_ opportunity, specifically because it doesn’t scale very well.





<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/a9482c41f93030e15e458b0072df9bf4?postId=b8dc1e3458cd" data-media-id="a9482c41f93030e15e458b0072df9bf4" allowfullscreen="" frameborder="0"></iframe>



Forgive me if I was too critical in this tweet; it’s a trait I’m trying to work on



There may be some people who are interested in the above topics, but I don’t know who they are. And I bet Twitter would admit that they don’t either.

The opportunity missed, in my mind, is that there _are_ people who are willing to curate for others on Twitter, even on a tweet-by-tweet basis.

Maybe it’s only 1%. Maybe it’s only 10%. But why sit there and curate tweets on 10 topics when you could open it up and allow _everyone_ to curate tweets on _any_ topic?

Doing so would open it up for everyone, and let every event ever be covered by someone. It could still be embeddable and linkable and shareable; you could even “follow” a moment and let those links populate your timeline, but it would be on _every_ topic.

#### Opening Moments

To understand how Moments works, let’s again break it down into anatomical pieces.



![](https://cdn-images-1.medium.com/max/1600/1*rPEzeNgGWbGlgGXIEdCX9Q.png)



It’s actually remarkably simple. I’ve never seen the backend of Moments, but I would imagine it’s four “title” fields and then a bunch of fields to drop links to tweets.

I know for a fact that you can get ordinary people to fill in those fields, because we’ve been using almost exactly the same fields at Grasswire for almost two years (except we have “tag” instead of “topic”, and “links” instead of “tweets”).

So why not open that up? Expose the backend, allow me to create some moments that will live at twitter.com/austenallred/moments, and display it the same way. The hard work is done.

Then the question comes down to “Moments Discovery.”

A pretty rudimentary analysis of my tweets by Klout (I know, I know) reveals the topics that I’m interested in:



![](https://cdn-images-1.medium.com/max/1600/1*_mhBuiBTloSuokQ_NJQ6kA.png)



This is pretty spot on; with a couple of exceptions I would love to see Moments about any of that stuff. Twitter has all that data; it knows what I tweet about, it would take some finesse but there’s no reason Twitter shouldn’t be able to show me Moments about those things. Doing so would make Moments incredibly valuable for me.

If Moments had content about these things, I would probably check the Moments tab several times per day. People would create and embed them, news companies would create stories that way; you would almost have an easier-to-use Storify built into the product directly, but importantly it would be _scalable_ and _personalized._

But what if what I want to follow isn’t an _event_?

#### Collections

Moments is geared toward events with a particular stop-and-start time. But what about topics?

Twitter Collections technically exist, but they do so in such a format that I didn’t even know they were a thing until a few days ago. Collections is a really, really good idea. But there are a couple of problems:

1.  I have to use a special tool called “curator” to create them.
2.  Viewing a collection is difficult, because it’s somewhat hidden away.

Both of these have fairly obvious solutions.

Creating a collection should be as simple as creating a list, except this time instead of gathering _people_ we’re gathering _individual tweets_.



![](https://cdn-images-1.medium.com/max/1600/1*gmgJyuBUcmXCuTNWo7wE5Q.png)



Simple enough: add another list item to the profile photo dropdown, and everything has a home.

It’s not hard to figure out how one should be able to add a tweet to a collection, either.



![](https://cdn-images-1.medium.com/max/1600/1*pU3THrOdgzCV2AX85mPKAQ.png)



These small details are important, because this way there’s no need to build out a separate product with search functionality, discovery, a new way to display timelines, etc. If done right it would actually be simpler to build new features into the existing product. A few API changes, a few UI changes, and you’re good to go. (Granted, coming from a startup background I’m sure I’m underestimating the difficulty of this, but theoretically it shouldn’t be complex.)

But what makes collections _really_ interesting to me is how you could follow them.

It’s no secret that the vast majority of Twitter use is in a user’s home feed. The reason lists haven’t taken off is because people simply use their home feed. Were I the all-powerful person over product at Twitter, I would let people follow a collection, thereafter injecting any tweets that are added to them into my home feed. (Checking for collisions and duplications would be more difficult, but we’ll disregard that for now).

How would it look when injected into my feed? The same way any other tweet does, except going back to our dissection of tweets, we’d now have “from @user/collection-name” in green instead of “retweeted by [full name].” (I’ll drop it below again to make things easier.) Add some sort of Collections icon, and you just made it possible to follow a topic (or event) curated by another user in an ongoing fashion.



![](https://cdn-images-1.medium.com/max/1600/1*dYwdn3UVFCjGy0472853hw.png)



Implemented in this way, I can let someone else do the curation for me on a tweet-by-tweet basis. There’s really no way on Twitter right now you can follow a _thing_. You can follow _people_ who are likely to tweet about a _thing_, but they can tweet about whatever they want, and you’re stuck with it.

At some level, following topics would actually be much easier than following people. The curators would be rewarded knowing that their tastemaking is appreciated by _n_ people, and new users would be able to jump directly into what they’re interested in topically instead of having to sort out what people they’re interested in.

Once this becomes more established, you can create “group collections” where a user can invite other people to add to a collection along with him or her. But that’s expert mode, and we’re still on amateur.

### The Firehose

Probably the best way to describe what I would do were I over product at Twitter is solve the “firehose” problem. Twitter’s problem is that there’s _too much good stuff._ That is a crazy dream to the vast majority of startups and products, but that’s not the world that Twitter lives in.

Twitter’s biggest problem overall is discovery, as a result of manually created social graphs, and I think these would go a way to solving that problem.

Again, these are just random thoughts, mostly written on a long airplane flight, and I have neither insider information nor power to enact any of these changes, so when all was said and done it was just a long brainstorm for a product I love.

To recap:

*   Add a new attachment type that is a text post
*   Native tweetstorm integration
*   Take the cruft out of new user onboarding
*   Open up moments
*   Create follow-able “collections”

Here’s to Twitter in 2016.





<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/1eb81208fa7946eba6fa722ae729c206?postId=b8dc1e3458cd" data-media-id="1eb81208fa7946eba6fa722ae729c206" allowfullscreen="" frameborder="0"></iframe>












