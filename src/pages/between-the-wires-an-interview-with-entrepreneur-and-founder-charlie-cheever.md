---
author: Vivian Cromwell
authorTwitter: https://twitter.com/viviancromwell
authorFacebook: none
title: "Between the Wires: An interview with Quora co-founder Charlie Cheever"
subTitle: "I interviewed Charlie Cheever, who is the founder of expo.io. Expo’s mission is to let web developers build truly native apps that work a..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*PA7ePsyQTz1f64RL9Xm47w.png
url: https://medium.freecodecamp.org/between-the-wires-an-interview-with-entrepreneur-and-founder-charlie-cheever-4c95d45f4384
id: between-the-wires-an-interview-with-entrepreneur-and-founder-charlie-cheever-4c95d45f4384
date: 2017-05-31T03:53:58.000Z
tags: [
  "React",
  "Startup",
  "Entrepreneurship",
  "JavaScript",
  "Design"
]
---
# Between the Wires: An interview with Quora co-founder Charlie Cheever



![](https://cdn-images-1.medium.com/max/1600/1*PA7ePsyQTz1f64RL9Xm47w.png)

Charlie Cheever, taken by Vivian Cromwell



_I interviewed Charlie Cheever, who is the founder of_ [_expo.io_](https://expo.io/)_. Expo’s mission is to let web developers build truly native apps that work across both iOS and Android by writing them once in just JavaScript. It’s_ [_open source_](https://blog.expo.io/open-sourcing-the-exponent-client-9b37634c13d7)_,_ [_free_](https://blog.expo.io/exponent-is-free-as-in-and-as-in-1d6d948a60dc) _and uses React Native._

_Previously, Charlie co-founded_ [_Quora_](https://www.quora.com/)_, and worked at Facebook on the platform team._

#### **Tell us a little bit about your childhood, and where you grew up.**

I grew up in Pittsburgh, Pennsylvania. I always liked computer games. One day my dad took me to the library when I was in 3rd grade, I grabbed a book named _How to Make Your Own Computer Games_. The first page said you have to know how to program in BASIC so, I went back and got another book about programming BASIC. I would go to school and type in the programs from the book on Apple II, slowly I started to make little changes to them.

When I was in high school, I went to this summer program at Carnegie Mellon called [Andrew’s Leap](http://www.cs.cmu.edu/~./leap/). It’s a free summer program that teaches you basic complexity theory and some programming. It was really fun. I really liked making things with computers or calculators, and sharing them with people. It was pretty easy for me to know what I wanted to do with my life.

Eventually, I went to Harvard and studied Computer Science. Then, I went to work at Amazon, one day I got a recruiting email from Facebook because I’d been a teaching assistant for a course that the founders had taken. I ran into two friends from school, David Fetterman and [Andrew Bosworth](https://twitter.com/boztank?lang=en), they told me they were leaving Microsoft to go work at Facebook. I thought if they were doing it, maybe it was a good idea. So, I emailed their recruiter, I got the job and started work in 2006 as a software engineer. At the time, Facebook was only about 10–12 engineers. I started the Facebook developer platform, which was a pretty successful gaming platform in a lot of ways.

I ended up leaving Facebook to start work at [Quora](https://www.quora.com/). I really wanted to start a company. Even though Facebook was super fun and a great place to work, it felt like the moment was right for me to start something on my own.

Then, I started [Expo](https://expo.io/) about two years ago.

#### **What’s Expo?**



![](https://cdn-images-1.medium.com/max/1600/0*HPWSbNED3NuSi8QR.jpg)

Expo logo



Expo is a [free](https://blog.expo.io/exponent-is-free-as-in-and-as-in-1d6d948a60dc) [open source](https://blog.expo.io/open-sourcing-the-exponent-client-9b37634c13d7) platform that enables web and mobile developers to quickly build and iterate on high quality native apps that work across both iOS and Android. Expo’s core is built around [React Native](https://facebook.github.io/react-native/), a technology invented at Facebook and used in parts of the main Facebook app, Instagram, and many more. React Native is also trusted by other large companies like Airbnb, Walmart, and Tesla.

With Expo you can write JavaScript for components and APIs that are available on iOS and Android with native performance. [Expo SDK](https://docs.expo.io/versions/v17.0.0/sdk/index.html#expo-sdk) includes runtime, React Native APIs, and additional components such as audio, video, authentication, notifications and more. This means you can spend more time writing only JavaScript because of more code sharing between iOS and Android.

[XDE](https://expo.io/tools) (Expo Development Environment) takes care of React Native releases for you. You can stay on an old version if you like, or upgrade to a new one without worrying about breaking changes or rebuilding your app binary.

You can share an app you’re building with a simple URL, which can be opened from the Expo client app. When you’re ready to ship to the app store, just compile your app into binaries and deploy. You can also update your app in seconds “over the air” (yes, this is allowed by Apple!)

Expo also provides a browser based tool called [Snack](http://snack.getexpo.io/), which is similar to JSFiddle but for React Native apps. You can go to [snack.expo.io](https://snack.expo.io/), and start prototyping. You can preview it in your browser or open on the phone. When you are ready, share with your friends and coworkers with a simple URL.

All of this is possible through the Expo client because the app built with Expo uses the same native runtime. Most of the time, you won’t need to install Xcode or Android Studio on your machine to use Expo. But, when you need to extend it with your own native libraries, you can always [detach to ExpoKit](https://docs.expo.io/versions/v17.0.0/guides/detach.html) and open your project in either iDE.



![](https://cdn-images-1.medium.com/max/1600/0*q76U5WvgSo6-JQip.png)

Expo project lifecycle.



We are passionate about making mobile development easier and accessible for everyone. You can find out more at [expo.io](https://expo.io/).

#### **What motivated you to create Expo?**

Our mission, at a high level, is to basically shorten the distance between the vision in someone’s head and their completed product.

When I was working at Quora on mobile apps, it took nine to ten months to complete an app even when we had great developers and designers working on them. We had to use webview to make everything cross platform, but they always felt a bit off. You can’t quite get the performance ace, and you can’t quite do the cool animations that native apps can do. That felt fundamentally backwards after doing web development for almost my entire life. Somebody had to fix that. So, I took some time off and started working with [James Ide](https://twitter.com/JI) to explore ways we could make it better.

We started with HTML5 and web technologies, but it was inherently limited — we didn’t think it was good enough. But we believed deeply in the web paradigm, which was a big step forward in terms of productivity. We built this whole system called “Ion”, which was a stupid name because there was already [Ionic](https://ionicframework.com/) framework.

But we didn’t launch Ion, we just used it to make a few apps. Then React Native came out and it was almost exactly the same except further along and with a team of 20 behind it instead of two. We basically decided to stop working on Ion and started working on everything else we wanted to build off of React Native.

#### **Often one of the most rewarding moments for a startup founder is when your product is used in an unexpected or innovative way. Does that happen with Expo?**

If you go to the Expo client app, there is a new project tab and it shows you the last ten items that

someone hit the “publish” button on. It’s really cool, now that there are enough people using it you’ll usually see at least 1–2 interesting projects. It is exciting to find stuff that I had no idea people were building with Expo, like an electronics store in Thailand.

#### **Walk us through a day in the life of building expo.io as the founder.**

If you count me, we have ten people now. Most of them are in the Bay area except [Brent](https://twitter.com/notbrent) up in Vancouver and [Ben](https://twitter.com/terribleben) in Seattle. They come down to visit every couple weeks. They like where they are, and we like them, so we make it work.

Slack is the center of gravity for our team because we are distributed. We also ended up working a bit closer with people who are developers on our platform, some of them are contractors on specific projects. For example, [Satyajit](https://twitter.com/satya164) who lives in Bangalore, helped us out on Sketch. This means we have a lot of flexibility. Everyone works different hours and makes a lot of local decisions without having to consult a product manager.

#### **Why is it difficult to make money with developer products? How does Expo approach this?**

There are a few reasons why it’s hard to make money with developer products. One is that there are a lot of people motivated to make development processes or tools better. It’s similar to content, which is also hard to make money from, because a lot of people are willing to write it for other reasons like branding or reputation.

Developer tools often fall into that category. There are a lot of people who like to make them or make them in the open source way, perhaps some of them want to make open source tools to make a platform more popular or for recruiting reasons.

What makes sense for us is not to make money from the platform itself. It is really important that the tools are open source because the kinds of developers that we want to attract, and the kinds of tools that we want to use, are open source. You can figure out what’s going on in them and you can send patches if there are problems. You can do a security audit if you are worried. It would be weird to charge for any of that.

Part of our mission is to open up mobile software development to kids. Sometimes I think that if I were 13 or 14 right now, and my friends and I were all sitting around on our phones, I’d be thinking about ways I could build some cool stuff for us to play with. But if you’re charging money for that, you’re excluding kids who are eager to learn. They don’t have credit cards, and their parents are unlikely to give them money for something they may not understand.

In that way it makes sense for me, it’s a business model similar to Twitch and YouTube. YouTube doesn’t charge people to upload videos, and Twitch doesn’t charge people to stream. But if they help you make money, they can take a cut of it.

So, I hope if we can help developers monetize, then there will be a way for us to take a small cut. But for the most part I want it to be free and open source forever. If we can help people build sustainable businesses on top of our platform, then there are plenty of ways that we can sustain ourselves.

#### **Can you talk about one or two really difficult periods you had to go through as you were building Expo?**

I feel like there will be really difficult times ahead, but we are passionate about our mission so it just hasn’t felt that difficult so far. I knew this was gonna take a long time and there were going to be lots of challenges ahead, but over the last few months we have executed very well, and put out some good pieces of the puzzle that made our messaging more clear.

Part of this is because there are a lot of ways that developers get into different states, so we have answers to a lot of those questions, but then, it’s hard to explain everything we do. If you started a project with React Native, you get this like IOS and this Android folder with all of your JavaScript source, if you didn’t write any native IOS or Android code, and you just have JavaScript, we have a convergence script. It’s a little rickety because there are so many different ways you can make changes to your project.

Our big focus now is to help new people come on board.

We have a great team and we work together pretty well, so it has been fun. A lot of the people on our team are active contributors to React Native open source project, and working at Expo is a way to just be able to work in that space completely. The kind of people that work in the React Native repo, are the kind that care about how mobile apps get built, and the mobile development. It resonates with them when Expo’s vision is to make building mobile software easier, faster, and more accessible. They are often the most thoughtful ones about the way they do development.

#### **What’s next for Expo?**

We are going to work really hard to become the most standard, straightforward, and best way to start any new React Native project. We also want to add more native module capabilities.

I posted [10 reasons to use Expo](https://www.facebook.com/groups/react.native.community/permalink/945445875590991/) in the React Native community group and one of them was that Expo is just regular React Native, plus some other stuff. For example, one of the biggest challenges for React Native developers is not only doing regular upgrades themselves, but a lot of the third party modules don’t get updated and stick on an older version, such as some really custom bluetooth or background locations. Because the React Native library actually puts out new releases every few weeks, it has been difficult for a lot of native libraries to keep up with the pace of the changes.

Another focus for us over the next year is to give people the building blocks they need for mobile. One thing I don’t love about the web, perhaps it’s because the web started as a way to make documents, is essentially text that flows, and maybe some images in there, plus rectangles to lay it out, and the forms. That’s great, but it was what the world needed in 1994.

If you think about what people love to do on their phones, it’s a lot of images, videos, streaming, swiping, likes, and playing sound. It’s a much more tactile and multimedia type of experience. We try and be the right building blocks for people who want to make mobile software. We may not have all of the answers today, but that is the direction we’re aiming for this upcoming year.

#### **What are some of your hobbies or interests outside of your startup?**

Literally, I’ve been listening to a lot of [Ryan Adams](https://en.wikipedia.org/wiki/Ryan_Adams) non-stop for the past two years, and I think I’ve been getting a little more politically involved than I have in the past, just because it feels important this year in a way it hasn’t for most of my life.

I grew up in Pittsburgh, so I l am a [Penguins](https://en.wikipedia.org/wiki/Pittsburgh_Penguins), [Steelers](http://www.steelers.com/), [Pirates](https://www.mlb.com/pirates) fan. Penguins won the Stanley cup last year in San Jose and I got to see it happen, it was cool.



![](https://cdn-images-1.medium.com/max/1600/0*bfU6sACh7uVZN2Yu.png)

Pittsburgh Penguins













* * *











<iframe data-width="800" data-height="400" width="700" height="350" src="https://medium.freecodecamp.org/media/b3df5dcd0dc099c1ca67ceeaee248475?postId=4c95d45f4384" data-media-id="b3df5dcd0dc099c1ca67ceeaee248475" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fupscri.be%2Fmedia%2Fform.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





[Donate to support this project](https://opencollective.com/betweenthewires).

This project is made possible with sponsorships from [frontendmasters.com](https://frontendmasters.com/), [egghead.io](https://egghead.io/), [Microsoft Edge](https://www.microsoft.com/en-us/windows/microsoft-edge) and [Google Developers](https://developers.google.com/).



![](https://cdn-images-1.medium.com/max/1600/0*bMdgkbz1ZwgKR-Wp.png)

Our sponsors.



To suggest a maker you’d like to hear from, please fill out this [form](https://goo.gl/forms/XhR1IyLXJHNMljcp1).

You can also send feedback to [betweenthewires](https://twitter.com/betweenthewires) on Twitter.








