---
author: Daniel Burka
authorTwitter: https://twitter.com/dburka
authorFacebook: none
title: "Stop the overuse of overflow menus"
subTitle: "You know those obscure menu buttons on apps and websites that reveal even more menu options? They usually have an ellipsis “…” or an arro..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*k1W39Q1VAKgU9rm2F3aLMw.jpeg
url: https://medium.freecodecamp.org/stop-the-overuse-of-overflow-menus-5caa4b54e843
id: stop-the-overuse-of-overflow-menus-5caa4b54e843
date: 2016-07-22T17:30:05.857Z
tags: [
  "UX",
  "Design",
  "Usability",
  "User Interface",
  "Google"
]
---
# Stop the overuse of overflow menus

You know those obscure menu buttons on apps and websites that reveal even more menu options? They usually have an ellipsis “**…**” or an arrow ▼ icon on them and sometimes they’ll even have a **More** label. Or, better yet, a **More** with a ▼! These are called overflow menus. Overflow menus are a scourge that should be rooted out, crushed underfoot, and drowned in a sea of toxic sludge.







![](https://cdn-images-1.medium.com/max/2000/1*kB96HxPFOgXb47btuck3Pw.png)

Gmail has no fewer than 4 overflow menus when viewing an email!!!! You’re damned right I used a bunch of exclamation marks!!!!!!







Overflow menus are really enticing to user interface designers. It’s been drilled into designers’ heads for years that the pinnacle of achievement is a “clean” user interface. Designers blindly stumble over each other to heed the old adage:

> …perfection is finally attained not when there is no longer anything to add, but when there is no longer anything to take away. — _Antoine de Saint-Exupery_

Overflow menus seem like the perfect solution. Designers can “take away” complexity and leave just the really important bits. You can quickly and easily create a clean looking user interface. The trouble with overflow menus is that you didn’t actually take anything away, you just obnoxiously obfuscated it.

The crux of the issue is that overflow menus let designers, engineers, and product people off the hook from making tough choices. Instead of prioritizing, we just sweep complexity under the rug and pretend that it doesn’t exist. Software with overflow menus is often still hard to use, even if the complexity is now beneath the surface. In fact, because users can’t discern all of the available options, overflow menus frequently make interfaces even more difficult to use.







![](https://cdn-images-1.medium.com/max/2000/1*zoQ5v3RMQDGsq2lpi6xCJg.jpeg)

Google Image search is crushing it with side-by-side overflow menus. The poor puppy on the right wants off this train wreck.







Just look at Google Image search. Instead of choosing whether to have a very simple interface or to have a set of powerful tools, the team split the difference. You can just imagine someone making the compelling argument:

> Hey guys, I’ve got the ultimate solution. By hiding the advanced options using an overflow menu called **_Search tools_**, Google Image search will be both powerful and easy-to-use! Also, people feel overwhelmed by all of our search options, so we’ll intelligently hide the Books, Flights, and Apps ones under a **_More_**▼ menu. A perfect compromise.

Sounds great. In reality, after years of daily use, I still can’t reliably choose the correct option. I just want to filter my images for big file sizes, and I know that there is a menu hidden away here somewhere, but I constantly click **More** when I guess I should click **Search tools**. Argghhh!



![](https://cdn-images-1.medium.com/max/1200/1*csKjX16Wv1bfOz3MNmJfvA.png)



Android embraced overflow menus so deeply that it’s a default user interface element in the action bar. On any given screen of an app, you’re likely to get a different grab bag of menu options. Some things like **Settings** or **About** might appear in the overflow menu on _every_ screen of an app. And, others like **Delete post** will be context specific to the screen that you’re looking at. They are all mixed together in a noxious potpourri: it’s a total mess.

I’m mostly snarking on Google’s implementation of overflow menus because I work at [an arm of the company](http://gv.com). I know many of Google’s designers are excellent and it’s safer to pick on your friends than to trash strangers. Of course, overflow menus are spread like a plague in apps designed by all kinds of teams, not just at Google. And, it’s not like I have never made compromise decisions that I later regretted, but sometimes it’s good idea to throw stones in glass houses. And, tellingly, some of the default apps on Android have recently moved away from using overflow menus. The Play Store, for instance, used to have zillions of them and I recently opened the app only to notice that the overflows have been nixed in favor of a more intuitive and streamlined interface. Nice.

So, if Google has some talented designers why have overflow menus often still run amok even here? Let’s look at how bad things happen to good teams and how to avoid it happening to your team:

**Obfuscation ≠ Simplification** Designers frequently confuse obfuscation with simplification. Simply hiding features seems like you’re creating a “cleaner” and more easy-to-use interface. Sure, your new UI may pass the _squint test_ of simplicity but you’re not dealing with the core complexity of your app.

Instead using obfuscation or sleight of hand, our job as designers is to structure complexity so it’s easily understood. The problem with overflow menus is that there is no information scent — anything from a juicy steak to a gross licorice could be hiding under that menu. Instead of adding an overflow, consider these options:

1.  Remove the feature. If 0.001% of people will find it in an overflow, did you really need it?
2.  Add the feature for real. Don’t dither. Put it on the page. Scrolling is the easiest mode of navigation.
3.  Structure the complexity, don’t just hide it. Use a meaningful icon or clear label to indicate a group of features is available. Seriously though, “More” or “Menu” or “…” are not clear labels.

**Acknowledge that you’re using a crutch** Admitting you have a problem is the first step to solving it. Many teams don’t acknowledge that using an overflow is a crutch, a way to avoid making a tough choice. I’m sure sometimes you will consciously choose to use an overflow menu (I’ll even grudgingly admit to having used one before) but don’t let the choice become an easy out.

**Force yourself and your team to make tough choices** This is really the point. Instead of pretending to make your product simpler, actually make the tough call to include or not include menu options. If something is important enough to include, show it to customers. One of the best parts of designing mobile-first is that you’re constantly forced to make tough choices about what to include and what to leave out (this is particularly true on iOS, which doesn’t have a built-in overflow menu in its toolkit). Take this as a challenge instead of a hampering constraint.



![](https://cdn-images-1.medium.com/max/1200/1*mlgyhVBWNwRTIF2ETaoL_Q.jpeg)



**Be contextual** Overflow menus are most egregious when they lack context. In Gmail, for instance, the **Print**function could live under either of two overflow menus. In Android, the persistent overflow menu in the top right of the action bar can contain global or local menu options. In Google Images, two side-by-side, unrelated overflow menus conflict with each other. Overflow menus _can_ work when used really contextually. Consider the example from the Android alarm clock app, left. The overflow menu in the top right lacks context (it could be about anything) but the overflow menus on each individual row gives some indication about what you might find under the surface because it’s contextual to a specific alarm.

**Research keeps you honest** One excellent way to stem the tide of overflow menus is to do user research. In the confines of our design studios, solutions like overflow menus seem perfect. Putting your product in the hands of regular human beings and watching them struggle through the interface you designed is the ultimate sobering gut check. Your “clean” user interface likely confuses the hell out of your users. Unless you and your team are a bunch of cold-hearted SOBs, empathizing with your users’ struggles should convince you to find better solutions.

**Consider information foraging** If my bombast above is obnoxious to you, consider a more academic perspective on why overflow menus are, uh, suboptimal. There is a popular theory called Information Foraging that is often used to describe why some interfaces are better than others. You can read a thorough and useful explanation of Information Foraging at the Information Design Organization [here](https://www.interaction-design.org/literature/book/the-glossary-of-human-computer-interaction/information-foraging-theory), but the basic gist is:

> Information foraging theory is based on the analogy of an animal deciding what to eat, where it can be found, the best way to obtain it and how much “energy” (how filling) the meal will (be) provide… Imagine a predator, such as a bird of prey, that faces the recurrent problem of deciding what to eat, and we assume that its fitness, in terms of reproductive success, is dependent on energy intake. Energy flows into the environment and comes to be stored in different forms. For the bird of prey, different types of habitat and prey will yield different amounts of net energy (energetic profitability) if included in the diet. [_http://bit.ly/InformationForaging_](http://bit.ly/InformationForaging)

In a gross over-simplification, according to this Information Foraging theory, something either has to be damn worth the effort of seeking it out (high value) if it’s going to be hard to find. Or, if the thing has lower value it has to be presented in a context that makes it easier to locate.

In a concrete example, consider the hidden options in Google Image Search. I have been using this interface for years to filter for “large” images in search results and yet I have neither learned the interface nor have I given up and used a different image search. Both the frustration and my continued use of Google Image Search can be explained by the Information Foraging theory. On the one hand, the **Search tools** link is not presented with any real context, so I find it hard to locate and confusing — heck it’s right next to a **More** link that serves a completely different purpose! On the other hand, I am not so frustrated with the complexity that I give up. I come back and stub my toe at the door time and time again. That’s because the food is so damn tasty. It’s a good search tool and the filter for “large” images is super useful for my work. I wish it didn’t taste so good or, better yet, I wish the tasty food was right at the surface.

**You said _never_ use overflow menus? Like never ever?**  
Like just about anything, overflow menus have a time and a place where they don’t totally suck. But, the appropriate place for an overflow menu is probably not your project and probably not the spot you’re thinking about. So, think long and hard before you resort to using one.








