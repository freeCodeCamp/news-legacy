---
author: Megan Dell
authorTwitter: https://twitter.com/megandell
authorFacebook: https://facebook.com/10154250994573625
title: "How we ran a diary study from within our product"
subTitle: "At 99designs, we get a lot of customer feedback. But, like most businesses, most of it comes from customers AFTER they use our product (w..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*s6pEaY3LreZPFjvmVrz0Mw.jpeg
url: https://medium.freecodecamp.org/how-we-ran-a-diary-study-from-within-our-product-708da97d8b98
id: how-we-ran-a-diary-study-from-within-our-product-708da97d8b98
date: 2016-07-30T01:00:44.000Z
tags: [
  "UX",
  "Design",
  "User Experience",
  "Entrepreneurship",
  "UX Design"
]
---
# How we ran a diary study from within our product







![](https://cdn-images-1.medium.com/max/2000/1*s6pEaY3LreZPFjvmVrz0Mw.jpeg)







At 99designs, we get a lot of customer feedback. But, like most businesses, most of it comes from customers AFTER they use our product (we survey them). Or, it is relayed second-hand from our support team. This feedback is valuable, but it doesn’t give us a fly-on-the-wall perspective of the customer’s experience as it unfolds.



![](https://cdn-images-1.medium.com/max/1600/0*LQmFBqbpnfzrocwA.)



You see, our product isn’t a one-time experience. In case you’re unfamiliar, this is how it works:

*   Write a design brief, outlining what you need designed
*   Share your brief with our global community of designers
*   Wait for design concepts to come in
*   As designs comes in, provide feedback to designers
*   Select a handful of designers to take through to the final round, where you collaborate and refine your design
*   Select the winning design(s)
*   Receive your final design files from the designer.

A customer’s relationship with 99designs can last up to 4 weeks from the brief writing stage, through to final design files being delivered.

#### Why run a diary study?

Since our product is so multi-faceted it can be a bit overwhelming for customers with little experience working with designers. As a UX team, our goal for the quarter is to improve the experience of our first-time customers.



![](https://cdn-images-1.medium.com/max/1600/0*t2qK9pXSL63n4mPJ.)



To start, we decided to focus on the early stages of the design process. In this stage, customers receive multiple design submissions from multiple designers, all requesting feedback on their hard work. We thought if we could better understand this, we could better streamline and organize the feedback process for our customers, which would lead to a much better experience.

We reached into our research methodology toolkit and selected a diary study as the right approach for the job.

> Diary studies in user research are a longitudinal technique used in anthropology, psychology, and user experience research, primarily to capture data from participants as they live through certain experiences.

> – Read more about [Diary Studies on Wikipedia](https://en.wikipedia.org/wiki/Diary_studies)

By running a diary study, we are able to monitor how our customers are feeling every time they interact with our product. It allows us to experience the highs and lows right there with them, as well as their thoughts, feelings, questions, frustrations, the list goes on.



![](https://cdn-images-1.medium.com/max/1600/0*hBiTMwWExNsFeBg9.)

_design by_ [_fiegue_](https://99designs.com.au/illustrations/contests/create-designs-next-iconic-community-t-shirt-216521/entries) _for 99designs_













* * *







### Deciding on the right diary study tool

I have personally run many diary studies in the past using various tools: physical diaries, SMS, voicemail messages, postcards, emails, Google forms, etc. Success level varied with each method. All of them came with ridiculous amounts of data.

From my past experiences, I was able to identify a few requirements:

*   Since we’re going to get a TON of data, it must be completely digital, to help with analysis and general admin.
*   We know our customers use our product many times a day, so we need a tool that is available instantaneously at any time.
*   We already get a lot of customer insights;the purpose of the diary study is to bring us closer to our customers true experience. We want this to be done in a non-invasive way, so that it won’t interrupt their experience with our product.
*   Implementation should require little engineering effort as possible.

#### The decision

After weighing up my list of tools previous used, and looking into several other research tools on the market, I found that [Intercom.io](http://www.intercom.io) met all of my requirements.



![](https://cdn-images-1.medium.com/max/1200/0*Jc4iM452gqeG63yP.)

The intercom messaging interface



Intercom works by displaying a small chat icon in the bottom corner of our website prompting selected users for feedback. When the customer clicks it, it pops up a chat window where they can enter as much or as little information as they like. It’s available instantaneously no matter where they are on our site, doesn’t get in the way and is simple to use.

In other words, Intercom delivers a good experience. It doesn’t look like something built in the early 90’s (which is saying a lot compared to some of the other more traditional market research tools out there). AND as a bonus for us at 99designs, I discovered we had tinkered with this for customer support a few years ago, so there was already some knowledge within the company about it. Score.

Through talking with our engineering team, we were able to link up our customer data from [Segment](https://segment.com) through to Intercom pretty easily. This gave me instant visibility of things like:

*   Date signed up, and time last seen on our platform
*   Days since they launched a contest on 99designs.com
*   Location (so I could target US-based people)
*   Browser language
*   Their user profile on our system
*   Other interesting (but perhaps less helpful for my purposes) information, such as operating system, browser version, etc.



![](https://cdn-images-1.medium.com/max/1600/0*phMiRhkEZQJQlm8H.)

I created a filter to easily get a view of users that I could potentially recruit for the diary study.



#### But isn’t Intercom for customer support?

Yep. Intercom is usually used as a customer support tool, where customers can ask questions to the support or sales team in real-time. And it works really well for this purpose through it’s great interface and flexibility.

We didn’t want to give our customers the impression that this was a customer support tool — we already have a form of live chat on our site, and provide phone and email help through our talented customer support team. We wanted to keep this as ‘pure’ to the concept of a diary study as possible, with the customers talking and the research team listening intently. If a customer needed support, they would need to contact our support team in the same way as every other customer.











* * *







### Intercom hacks for a diary study

With a few little hacks we were able to shoehorn Intercom into a diary study tool. If you wanted to emulate our process, these would be the key things to do.

#### Adjust Intercom to feel less human

To start we created an Admin account and gave it our company name, 99designs.

Rather than follow the Intercom customer support norm of having a smiling photo of a team member to chat with, we uploaded our company logo. This made messages from this account feel more bot-like because users weren’t seeing one of our smiling faces in the chat window. Doing this is helps prevent social bias from creeping in, and makes diary study participants feel more comfortable giving their true opinions. With a bot, they’re not afraid of hurting someone’s feelings, and aren’t waiting for a response from each of their messages.



![](https://cdn-images-1.medium.com/max/1600/0*EO02t-DxUq0kkn9v.)

The company logo used as the avatar



#### Set up a campaign

Technically speaking, we are using the ‘Engage’ tool from within Intercom. Intercom’s Engage tool is designed for marketing campaigns, instead we used it for recruitment messages and as the mechanism to display a message each day for the diary study.

We initially send a recruitment message to customers that we would like to invite to the diary study. Once a customer responds ‘yes’ to our recruitment message, they’re put into the campaign (or in our case, the diary study). This is done by manually tagging them within Intercom with ‘diarystudy’ which was set up to automatically add them to the campaign. Our campaign is set to send them a message every day prompting them to record their diary entry.



![](https://cdn-images-1.medium.com/max/1600/0*ZfkE-o9sbT_q0yW7.)

Our diary study ‘campaign’



#### Manage customer expectations

One or two customers did ask a question about our product through the diary study, which prompted us to make an ‘auto-reply’ style message (this was a message that was sent manually when a customer started asking for help through Intercom).

This message explained it was an automatic messaging service designed for research, and prompted the customer to seek out support from the usual channels we provided as we wanted to keep the experience of these customers are ‘normal’ as possible for our diary study.











* * *







### Running the diary study

Using Intercom for our diary study has been a continually evolving process, as we uncover more ways to refine our approach to get the most out of it.

#### Using Slack to share feedback

With multiple entries coming in every day, we enabled a Slack integration so that each message is directly broadcast to our UX channel, so everyone has instant access to the responses straight away and the entire company is engaged.

This has also helped remove some of the burdensome and admin-heavy work that usually comes with running diary study, such as collating all the data, and ensuring users are providing feedback regularly (and nudging them if they aren’t), as well as continually communicating outwards to colleagues about the research and trends emerging.

Through integrating our diary study feedback with slack, we have been able to analyse all of the feedback on the fly, rather than waiting until the research has ended, which is a nice change from traditional research approaches.



![](https://cdn-images-1.medium.com/max/1600/0*X-pV0NfK9ecQEJoC.)

Slack integration for our diary entries



#### Asking follow up questions

If we wanted to send something a little more targeted to a particular user, or to ask a follow up question, we have been able to tailor the prompt they receive to include a more pointed question. When we did this, the next time they logged in, they may have received a slightly different welcome message to their diary entry.



![](https://cdn-images-1.medium.com/max/1600/0*mXCKGuyqzW_lVVzh.)

One of our generic messages, compared with a tailored message



Using Intercom has also allowed us to to experiment with our question phrasing in order to encourage more and more feedback — not something easily done using other diary study methods. Iteration and continuous improvement FTW!











* * *







### Would we recommend it?

Our diary study is still running, but so far so good. There is room for improvement (and it would be awesome if Intercom was tailored more for this purpose), but this has been a great first run for us.



![](https://cdn-images-1.medium.com/max/1200/0*o-DSAKX6LNkEpyz_.)

_design by_ [_PANG3STU_](https://99designs.com.au/t-shirt-design/contests/create-fun-cute-tee-518807) _for Yewy_



So far, we have heard first-hand the types of things customers are looking for help with, and what questions arise. (One customer fell in love with a design and wanted to fast-forward things to the point where they have their final design files ready to use straight away.)

We also learned about the ways customers are interacting with our product even when they’re away from our product. For example, a customer spoke of waiting for a board of directors meeting before being able to move ahead with their final design selection.

These insights provide us with a richer view of our customers experience, and tells us things that we wouldn’t usually uncover in a survey or customer support call.

I’ll write another article once we have completed our diary study to provide more detail of how the analysis goes, and what we would change next time.

If you try using Intercom or a similar tool for a diary study and have some success, I’d love to hear about it!











* * *







_Originally published at_ [_99designs.com_](https://99designs.com/blog/inside-99designs/diary-study-from-within-product-using-intercom/) _on July 30, 2016._








