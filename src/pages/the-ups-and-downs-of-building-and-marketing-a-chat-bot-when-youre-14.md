---
author: Alec Jones
authorTwitter: https://twitter.com/AlecOfJones
authorFacebook: none
title: "What it’s like to build and market a chatbot when you’re only 14 years old"
subTitle: "I’m going to tell you everything I learned while coding a popular Facebook Messenger bot, and my crazy first week of marketing it (which ..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*_GOaInCDqke1b_hpbQTflQ.jpeg
url: https://medium.freecodecamp.org/the-ups-and-downs-of-building-and-marketing-a-chat-bot-when-youre-14-8a072830b43c
id: the-ups-and-downs-of-building-and-marketing-a-chat-bot-when-youre-14-8a072830b43c
date: 2017-02-26T05:08:14.702Z
tags: [
  "Bots",
  "Startup",
  "Entrepreneurship",
  "Teens",
  "Tech"
]
---
# What it’s like to build and market a chatbot when you’re only 14 years old







![](https://cdn-images-1.medium.com/max/2000/1*_GOaInCDqke1b_hpbQTflQ.jpeg)







I’m going to tell you everything I learned while coding a popular Facebook Messenger bot, and my crazy first week of marketing it (which involved a tweet from one of the **Jonas Brothers**, a viral Facebook post in **Thailand**,andan interview with the **BBC**).

### It turns out that building something useful is way tougher than it sounds

Like many software developers, my mission to create something useful started with a decision to [**solve my own problem**](https://gettingreal.37signals.com/ch02_Whats_Your_Problem.php)_._

My problem: I was always forgetting what homework I had to finish at night.

In grade 8, there were plenty of mornings when I’d have to get to school really early to get it done.

I knew that wasn’t going to work for my remaining 4 years of high school because there’s no way I could handle showing up at school at 6:30 am on a regular basis to finish math homework. ☹️

So I decided to build a chatbot that would prompt me at the end of every class, asking me to tell it what homework I’d been assigned. I hoped that lots of other students struggled with the same problem.

Why a chatbot? Sure, there’s a lot of buzz around bots right now, but mainly because **students are never far from their smartphones** (especially in class)… and they’re already familiar with texting. 😎

I started out building a chatbot using SMS, but I quickly learned that there’s a cost to sending text messages from a US-based SMS service (like Twilio). And even if I used a Canadian phone number, it would be really expensive for people to use my bot in other countries.

But Facebook Messenger was free.

In grades 6 and 7, I’d learned a fair amount of PHP, and I created a few simple web applications. But building a chatbot using Facebook Messenger was entirely new, and I thought it would be a great opportunity to learn Ruby on Rails.

I also had to learn Facebook Messenger’s API and how to create a behind-the-login website to manage students’ classes and times. These two things alone involved a **steep learning curve**, but I figured there’s nothing more exciting and satisfying than turning an idea into something that students around the world can use.

### “It’s a boy!”

Nearly 9 months after I began working on my chatbot, [Christopher Bot](https://www.christopherbot.co/) was born.

It’s not like I worked on building him full time. Between summer vacation (no laptops allowed), _school_, soccer, _school_, and several depressing “start again from scratch moments”, there weren’t that many stretches of **uninterrupted coding time**.

Even with sporadic bursts of dev time, CB (as I like to call him) turned out just the way I had hoped. He’s a reliable but slightly cheeky Facebook Messenger bot who’s dedicated to helping students.

Here’s how he works…

After you send CB an initial message and set up your class schedule, he’ll text you near the end of every class, asking whether or not you have homework. At the end of each day, CB will **send you a tidy list of homework** that you need to finish.

Simple and useful.

I think he works so well because he eliminates the need for students to remember to write stuff down. CB remembers for them.

When you go on vacation, you can pause CB and he’ll ask you to choose a date for resuming the messages. If you forget to tell him about homework right after class, you can catch him up later.

There aren’t a bunch of complicated commands. And since so many students have their phone in their pocket all day, Christopher Bot is always with them.

**Fun fact:** Christopher is the name Alan Turing gave to his machine in WWII that cracked the [Enigma code](https://en.wikipedia.org/wiki/Enigma_machine), and it’s the reason I named my bot _Christopher_.

### Designing a user-friendly bot is even harder than coming up with the original idea

To me, the most important part of CB is his perfect “memory”. He remembers to text the student and not the other way around.

Simple questions with simple answers makes the conversation go faster. Christopher Bot may not be the smartest bot out there, but he knows how to get to the point. 😎

In order for CB to do most of the work, he needs to have info about a student’s classes. And getting that information **requires a web form**.

I figured that if users had to type the same thing over and over again for each day of classes, they might get bored or distracted (or both) and leave. So to move things along more quickly, I decided to **create an auto-filling form**, based on the class data that a student enters on the previous day.

So a user enters their classes for Monday, and then when they proceed to create those same classes for Tuesday, the data is already there in the form — ready to be accepted as-is or tweaked. For most students, entering class data will take less than 30 seconds. 👍



![](https://cdn-images-1.medium.com/max/1600/0*3OI4DZRUAFYiWiPH.png)



I also wanted the conversations with Christopher Bot to move along quickly because there’s not much time between classes.

[Bitmojis](https://www.bitmoji.com/) and GIFs may be cool, but I wanted the conversation to be crisp and clean, so students wouldn’t have to spend much time talking to Christopher Bot.

So my next major design decision was to add Messenger **“quick-replies”**.

These are little buttons that sit just above the keyboard, so a user doesn’t have to type a full response. Using canned responses for “Yes” and “No” saves the user time, and it also **controls the set of responses**, so I don’t have to worry about people answering with ya, yup, na, nope, etc. 🎉



![](https://cdn-images-1.medium.com/max/1600/0*VQT3jwM9QEiGcKSr.png)



Finally, I wanted Christopher Bot to feel “human like” but not pretend to _be human_. To accomplish that, I added a typing delay for most auto responses, mimicking how a real conversation goes.

If CB responds in less than 1 ms, some users might not even realize that a new message has been delivered… it happens just too fast.

Typing delays are a nice add-on feature of Facebook Messenger — one of several smart tools to help bots feel more human, but **without trying to fake people out**.

### Seriously, how many time zones are there?

One of my biggest challenges developing Christopher Bot was **handling time zones** around the world. I grasped the concept well enough, but sorting out the timing of classes and texts in 24+ time zones required a deeper understanding.

Class times are all stored in the user’s local time zone, and every time CB texts a user, it’s based on that same, local timezone.

Simple enough, but Christopher Bot (i.e., the server) “lives” in a single time zone.

So when CB checks the database to decide whether or not to send a text at that moment, he has to first check to see if the server time matches the class ending time _in the user’s time zone_.

I found the best way to handle the messy situation was to convert all times to [**Universal Coordinated Time**](https://www.timeanddate.com/time/aboututc.html) **(UTC)**. Then all I had to do was store the UTC offset (UTC +/-) alongside the students’ class ending times, to make sure everything lined up.

### Homepage templates are the best invention ever (once you get to know them)

When users visit [https://www.christopherbot.co/](https://www.christopherbot.co/) they’re welcomed by a nice-looking home page. It wasn’t designed by me, though.

I’m no HTML/CSS wizard, so I decided to **purchase a Bootstrap template** to incorporate into my app.

I thought getting it set up would happen in 3 simple steps:

1.  Buy a template
2.  Add the various pieces to my directory
3.  Relax knowing I have a **sexy website**

I was WRONG. _So_ wrong!

The application that “powers” Christopher Bot is built on Ruby on Rails.

The problem was that my Bootstrap template didn’t know I was using Ruby on Rails.

So I spent days learning about how Rails uses Javascript files, references images, etc. And about a week later, I finally got it all working. The images were loading, and everything looked beautiful.

But I began to notice a few problems. The Javascript icon animations were too much.

The navigation bar was broken.

And most problematic, the browser’s **scroll functionality had been altered**, making the page scroll too quickly on Chrome — and not at all on Safari and Firefox!

Frustrated by the variations between browsers… to the point of wanting to throw my monitor out my bedroom window… I decided it’d be better to tackle the problem than to explain to my parents how my monitor suddenly went “missing”.

It was clear that the Javascript was my biggest problem, and I tried an extreme approach to solving it.

**I removed every bit of Javascript** in the template from my app. Expecting things to break all over the place, I was shocked to see that the opposite had happened.

Not only were the scroll speed and cross-browser issues fixed, but so was the navigation, and the annoying visual effects were gone.

I couldn’t believe that I’d managed to fix everything by trying to break it.

Trying to ruin your app isn’t a good solution to tackling coding problems. But I realized that **some outcomes are totally unexpected**. I tried something that felt like a long shot, and it taught me that you should try everything before giving up.

### One user and counting… 😢

How do you grow a chatbot from 1 user to many, many users? Ideally through word of mouth. Maybe even _viral word of mouth_.

People are always curious about new things their friends are using. I hoped that students would see their friends using Christopher Bot and ask what it is. It’s organic, and it’s also free marketing (perfect, since I have no money for PPC ads!).

I built a **share button** in CB to help move things along. After 1 week of of use, Christopher Bot politely asks users to share Christopher Bot on Facebook. All a user has to do is click the link, and they can easily share CB with their friends.

But with only a handful of friends using Christopher Bot at the beginning of February, I needed to find a way to get more exposure.

### Welcome to the front page of the internet

Before trying to market CB in a big way, I needed to get some additional feedback from my target audience.

Where do high school and college students hang out online? Turns out it’s pretty tough to find large communities of high school students on the web, but [**Reddit**](https://www.reddit.com/) **is a great place to find college students**.

I posted to a few sub-reddits for specific universities, starting with a couple in my home province, British Columbia — asking for feedback on the general concept and whether Christopher Bot could work for college students.

Reddit users were pretty helpful overall, sharing their opinions and offering useful feedback about the differences in “homework” between high school and college.

But there was also a bunch of skeptics who insisted that I wasn’t a 14-year-old…

Here’s a comment from a **true skeptic:**

_“Being a ‘little kid entrepreneur’ is a great marketing tactic. This 14-year-old? He’s actually an older male, but he’s disguising himself as a young boy to appeal to everyone. Seeing a little kid be able to do so much is beautiful, attractive and everyone feels an incentive to support that little kid simply because he’s well… little.”_

And another from someone who thinks **I’m some desperate marketer:**

_“This definitely was not made by this kid and is certainly being driven and marketed by someone who has had a lot of experience. Like they even had the foresight to do put a ‘ref=reddit’ marker in the URL. They are spamming for their analytics.”_

So someone who’s 14 can’t figure out how to create a simple URL parameter? Boo.

### Hitting the big time: Product Hunt and Kevin Jonas

My #1 goal for February was to launch on [Product Hunt](https://www.producthunt.com/), and after my dad posted a message to his Facebook account about Christopher Bot, I heard from Andrew Wilkinson of [Metalab](http://metalab.co/) (and Dribbble and Designer News)… who kindly offered to “hunt” CB on February 16th (thanks Andrew). Andrew also lives in Victoria!

Andrew posted CB to Product Hunt shortly after midnight, while I was fast asleep (not _really_).

Unfortunately for me, brand new products from Google and Facebook were also posted that day. 😱

Even with the stiff competition, **CB still managed to get 300+ upvotes**, tons of encouraging comments, and finished in 6th place overall for the day. 🎉



![](https://cdn-images-1.medium.com/max/1600/0*j4WPcpNyENa3_Wxh.png)



It was a ton of fun watching CB on Product Hunt, and it taught me a lot about the world of entrepreneurship — including the importance of just getting something out there in front of people.

People like Kevin Jonas. 😉

It was probably in part due to my age, but I think Kevin Jonas tweeted about CB that day (**to his 5.1M followers!**) because he saw that it was going to be useful for other students.



![](https://cdn-images-1.medium.com/max/1600/1*pQrFPfq7PNw_hdbAOzF3sQ.png)



Someone else noticed CB on Product Hunt… [BBC News](http://www.bbc.com/news) journalist, Dave Lee.

### My exciting, slightly scary interview with BBC News

On Thursday — Product Hunt launch day — Dave Lee from BBC News reached out to me about writing an article on CB:



![](https://cdn-images-1.medium.com/max/1600/0*3hjnenlVyVNN7okY.png)



On Friday afternoon, my dad and I joined Dave via Skype and I shared my whole story. I was super nervous before the call, but Dave put me at ease (_thanks, Dave_).

Dave told us that he’d be working on the article well into the evening on Friday, but it wasn’t live when I went to bed at midnight. But first thing the next morning, I checked the Christopher Bot signups… and there were more than 1,000 new accounts created overnight.

[**The article was live.**](http://www.bbc.com/news/technology-39013950)

And with 1,000 new accounts came a bunch of bug reports and dozens of new feature requests. I had to leave marketing mode and **enter full-scale support mode**.

Just 72 hours later, Dave Lee emailed my dad:

“Alec asked me how many readers our articles tend to get, [and] I told him we consider 500,000 uniques a successful piece. I’m pleased to say the piece on Christopher Bot has had 1,000,000 unique views since going up on Saturday.”

### Boom! Going viral… in Thailand

According to Facebook analytics, a ton of new accounts were coming from Great Britain (which makes sense, given the BBC article).

But one country was overtaking the UK for new accounts: **Thailand**.

Wha?!?!

Then one of CB’s new users emailed me this:



![](https://cdn-images-1.medium.com/max/1600/0*RXNzZzHjicJa5Eci.png)



Someone had posted a blurb about Christopher Bot to Facebook in Thailand.

And yes, that’s **11,000 likes**… 3,800 shares… and 205 comments (none of which I could understand — even _with_ Google Translate).

### What’s next for Christopher Bot

Building Christopher Bot was a great experience for me to learn about bots and how to make a bot’s interactions **work well for its users**.

In addition to tweaking how classes are scheduled (a common request from new users), my goal moving forward is to improve CB’s conversational skills.

I want him to be able to “understand” more so he can be even more helpful for students. I want him to be able to understand more variations in responses as well as recognize misspellings like “textbok work” or “stdy for my quiz”.

Christopher Bot can always be made smarter.

A new feature I’m considering building is “homework analytics” — for example, to track which classes have the most homework assigned. Christopher Bot collects a lot of data every day (individually and in aggregate), and it would be cool to share what he’s learning with users.

I’ve had a ton of fun creating and marketing Christopher Bot — and there’ve been **many more ups than downs** in the journey.

I hope he takes me to even more interesting places in the future.

If you made it this far and liked my story, I would sincerely appreciate a click on the **Recommend button**. 💚








