---
author: Anup Cowkur
authorTwitter: https://twitter.com/anupcowkur
authorFacebook: https://facebook.com/1250513434963795
title: "So a product manager asks you to fix a bug…"
subTitle: "You’ve been here before...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*BB7rhYkn_Nk1DRMICcC-Qw.jpeg
url: https://medium.freecodecamp.org/youre-asked-to-make-a-fix-e156b802ad92
id: youre-asked-to-make-a-fix-e156b802ad92
date: 2016-08-29T15:27:21.732Z
tags: [
  "Programming",
  "Tech",
  "Life Lessons",
  "Web Development",
  "Startup"
]
---
# So a product manager asks you to fix a bug…



![](https://cdn-images-1.medium.com/max/1600/1*BB7rhYkn_Nk1DRMICcC-Qw.jpeg)



You’ve been here before.

Your code is elegant.

You have the just right amount of abstractions.

Your modules are modular.

Your system deals with the outside world through thoughtful interfaces, and has no direct dependencies on external systems.

Your tests are green. Your code coverage report takes an entire minute to load. 97% it says…

Life is good.

And then it happens.

A product manager runs in and tells you there’s a bug in the update you shipped last week. Whenever a user adds an item to their shopping cart, the counter that’s supposed to show the number of items in their cart takes a few seconds to update. It used to update instantly.

The PM tells you that complaints are flooding in from users. He asks you: Can you please take a look?

Of course you can take a look. After all, you built the thing. It’s probably somebody else’s fault. But you’re gonna fix it. That’s just the kind of stand-up employee you are.

You pull the Git hash from the latest release’s commit and dig into the change log. You’ve upgraded the HTTP request library to the latest version in the last release. It was pending for a long time. You can remember the exact commit that made it happen. That was a good day.

You switch to that commit, then simulate the request that updates the shopping cart. Good thing you have such a clean separation of concerns. You can easily test against staging and production servers with the flick of a build flag.

You’ve found the culprit. It seems that HTTP library you updated has a regression. For certain types of requests, it takes a bit too long to parse the incoming JSON payload. Your app can only update the shopping cart counter UI once the request payload is parsed. The infrastructure isn’t set up to handle eventual consistency yet and adding that in would be a whole project in itself. You can’t just update the counter locally and sync later.

You knew it was somebody else’s fault. Such is life.

You tell the PM what’s happening. He gives you a pat on the back. He knew he could count on you. Do you know how to fix it?

Obviously.

You’ve considered your options.

You can’t rollback the changes. A bunch of new code and bug fixes are depending on the new lib version. You’d lose all of those too if you were to just revert everything.

Simply forking the lib and maintaining your own copy doesn’t seem smart either. The original project maintainers have a giant test infrastructure that will test your fix against thousands of devices. You have 3 devices of which 2 have outdated OS versions. It’s best to get their feedback as well. It’s their library after all and they’ll have insight about its innards that you don’t.

So you’re gonna:

*   Fork the lib
*   Implement the fix
*   Send a pull request to the original repo
*   Have a bit of back and forth between you and the maintainers
*   Finally convince them that your idea is the best solution
*   Merge upstream
*   Wait for a patch release of the lib
*   Update the lib in your code
*   Push out a new release

Easy peasy.

“Great,” the PM says. “How long do you think it’ll take?”

You know the answer. People say engineers can’t estimate. You’re not one those engineers.

“2 weeks,” you say without blinking. “Depends on how fast the PR gets accepted and the maintainers put out a new build.”

The color drains from the PM’s face. “2 weeks? 2 weeks?!” He keeps repeating the phrase like it’s gonna change something. But you stay calm. PMs are known to fly off the handle. Nothing to worry about.

“Our users are dropping off! They’re not buying anything because they can’t see their carts being updated! We’re an e-commerce company! This is unacceptable!”

You watch him go through the 5 stages of grief. You’re waiting for acceptance to come any moment. It doesn’t. He seems to be stuck in bargaining mode.

“Isn’t there any way you can fix it faster? Something temporary? Come on! This is important!”

“Fine,” you say, sinking into your swivel chair. “Let me see.”

You’ll humor him for a bit. Maybe then he’ll leave you alone. You’ve got other stuff to do, you know.

You dive back into the source. You’re in your element. Your fingers navigate the IDE shortcuts like Poseidon himself riding the waves of the ocean.

Aha! You’ve found it. There’s an undocumented way to hook into the JSON parsing code and replace it with your own implementation!

But wait. This looks ugly. It’s a non-public API. Possibly a mistake to expose it like this. You don’t want to depend on this. What if they remove it in the next release? You’ll have to do this all over again. Who wants to do that? This is quicker than maintaining your own untested fork of the lib though. But it’s still ugly.

No.

You won’t let misguided business decisions ruin your temple of purity. You are the guardian of all that is holy against the ignorant masses. That’s why they pay you the big bucks. It is your duty to refuse.

You storm into the PM’s cabin. “The answer is no. There is no clean way to do it, and I don’t believe in ugly hacks. I’m sorry.”

He reacts as expected.

“You’re telling me there’s a way to do it, but you won’t do it because it’s not _clean_? Our users are literally yelling at us and threatening to switch to our competitor, and you won’t fix it because it’s not _clean_?!”

You lose it.

What does this guy know about engineering? You’ve built fantastical worlds out of nothing but bits. Highly scalable systems that can withstand DDoS attacks from all the black hats the former soviet bloc can throw at you. You are an artist and silicon is your canvas. You’ve read _Clean Code_ so many times that you know it better than you know your own GitHub password.

“Yes!” you shout. “I won’t defile our codebase with this crap! I’ve spent months building this thing! Every single line of code is a product of my sweat and blood! The only reason anything works at all is not because of you — it’s in spite of you! It’s people like me who keep this software running, and it’s people like me who’ll have to clean up this mess long after you and your “business features” are gone!”

You storm out of there. You need a drink. Guys like this are the bane of our industry. They think their fancy MBAs give them some insight into building great software that us developers have somehow overlooked. Screw them all.

You strut out to the cafeteria. The one where you get gourmet catered meals everyday. And coffee. Unlimited, delicious, soul nourishing coffee. You deserve this because you’re a _knowledge worker_.

You grab a cup of java and look for a place to sit.

That’s when you notice _him_.

The most senior engineer in your company.

This guy is a dyed-in-the-wool, hardcore, I-can-write-a-compiler-on-my-toilet-break type of engineer. He was a hacker before there were hackers. You want to be this guy. He’s kinda like Gandalf. Respected and feared by everyone at the same time. But he’s kind and always helps out the children. He’d love to hear how you put this PM in his place. After all, he’s one of your people.

So you sit down next to him. He’s nursing his coffee and reading something about Abstract Data Types in Haskell.

Yup. Just the guy to talk to.

You tell him your grand tale. He listens patiently. He nods and asks questions at several points. His body language is laid back. He’s been here before. You can see it in his eyes.

You’re finally done.

That was exhausting.

Your shoulders feel lighter.

He looks deep in thought, like he’s choosing his words carefully.

You wait for the big laugh. He’ll exclaim “That’s my boy!” and then you’ll grab another coffee together. He’ll regale you with a story of a similar smack-down that he doled out on a clueless PM back in the day.

You’ve dreamt of this day. You’ll pound your coffee mugs together like men do after victory is achieved in battle. At least, that’s what they do in the movies. Of course, then it’s usually ale, not coffee.

It’s the sentiment that counts though.

You wait…

And wait some more…

He looks you straight into the eyes. They pierce your soul. All those years of wrangling with machines has turned his gaze hard. But he wields an enchanting power. You can’t look away.

He says only one thing.

“Our job is not to drink coffee and crap out code. Our job is to make software that works.”

Then he walks away.

You take a minute. There’s a feeling in the pit of your stomach. An empty, loathsome sensation. You start to recognize this sensation. You’re feeling shame.

You’ve let down the people that you owe the most. Your customers.

So you go back to your desk. You bang out the hack, then push out a new release.

You apologize to the PM. Things got a little out of hand. He says it’s okay. All’s well that ends well.

You also fork the lib, implement the correct fix, and send out an upstream PR. When the new release of the lib comes out with the proper solution, [you can always refactor](https://medium.com/@anupcowkur/leave-it-a-little-better-than-you-found-it-isnt-good-enough-652d4be673cb#.taxjttayy).











* * *







_If you liked this, click the 👏 below. I notice each one and I’m grateful for every one of them._

_For more musings about programming, follow me so you’ll get notified when I write new posts._








