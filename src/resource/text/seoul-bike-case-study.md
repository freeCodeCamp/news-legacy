---
author: Martin Totev
authorTwitter: https://twitter.com/martintotev89
authorFacebook: https://facebook.com/10212029728887688
title: "Seoul Bike: How I redesigned Seoul City’s public bicycle system"
subTitle: "Frustration with the current app drove me to create my first UX case study."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*Ks-DGwKBq0Sm847-Xlmp2w.jpeg
url: https://medium.freecodecamp.org/seoul-bike-case-study-6ac4172f7188
id: seoul-bike-case-study-6ac4172f7188
date: 2017-10-14T11:44:17.247Z
tags: [
  "Design",
  "UX",
  "Tech",
  "Startup",
  "Travel"
]
---
# Seoul Bike: How I redesigned Seoul City’s public bicycle system

## Frustration with the current app drove me to create my first UX case study.

As a beginner in UX design, a great way to learn something new is through practice. This case study was an amazing opportunity to start my journey. With this as my objective, I contacted a senior from my university with a lot of work experience in the field and asked for his assistance and mentoring.

We met on a Sunday in a coffee-shop somewhere in Seoul and started working. I brought my old Samsung laptop (eventually replaced with a Macbook) and a small notebook to our first meet-up.

For a few weeks I sketched and sketched, trying to understand the app and how the service was designed. I found problems that stem from the service itself, others from the app design. But let’s not steer away from the point of this post.

### What is “Seoul Bike”?







![](https://cdn-images-1.medium.com/max/2000/1*DGZxAIKXRUkUXoLaTLhxjQ.jpeg)

1st generation(left) and a 2nd generation Seoul Bike(right), a [gift from the Dutch embassy to Seoul City](https://www.dutchcycling.nl/news/140-dutch-prime-minister-donates-bikes-to-seoul).







[Seoul Bike](https://www.bikeseoul.com/) or 따릉이 Ttareungi) is an un-manned, bicycle rental system. As the title says in Korean — 서울자전거 따릉이 — 무인대여시스템, it’s a very cheap public bicycles system covering Seoul. The coverage of the system and the ability to return a bicycle at a different location than the one you rent it from, is its biggest advantage over the competition. Seoul Bike is currently experiencing a very fast growing user base.

There are 3 generations of bicycles that look very similar and are very hard to distinguish. They are usually donated by a large corporation, but information on who and how many donated, has not been updated for quite some time. Samsung donated 3,000 bicycles and installed 300 racks last year. Some of the bicycles are donated by Naver, Kakao, Woori Bank, and even the embassy of the Netherlands.

The bicycle is fairly simple. It has 3 gears and a retracting seat specially made to only fit these bicycles — bicycle seat theft is still a thing for some reason. There is a touch screen user interface with a single button and a speaker. There’s also a locking mechanism for locking the bike to a Seoul Bike rack, or temporarily locking it to a pole when you have to leave it for a while. In the middle of a ride you can check how much time you have used the bike for, what distance you have travelled, and how many calories you have burned.



![](https://cdn-images-1.medium.com/max/1600/1*s-FIJSEBYtzI5xE4i16hpw.jpeg)

On-bicycle touch screen interface.



The service utilises multi-use “_tickets”_ which expire after a certain amount of time. These “_tickets”_ are divided into Short term and Long term ones. A short term ticket is a single day ticket that costs _1,000 won and_ expires in 24 hours after purchase. The long term tickets include _7 days (3,000 won)_, _30 days (5,000 won)_, _180 days (15,000 won)_ and a _365 days (30,000 won)_.

To prevent bicycle hoarding the default amount of time that a user is allowed to rent for is 1 hour (normal ticket) or 2 hours (premium ticket). If you go over 1 hour (or 2 hours if premium ticket) there is a penalty of 1,000 won for every hour. And upon return of the bike the user must pay his penalty first before renting again. This hoarding prevention scheme is quite effective.

As I mentioned, a ticket is multi-use — so a user could always return a bike to a rack and rent it again. Thus bike hoarding is still possible, as long there is a rack nearby and you are in the mood of going up and down.



![](https://cdn-images-1.medium.com/max/1600/1*4SybxOnpDP5aSvabSKAQVg.png)

Solid Line: in-app; Dashed Line: on-bicycle interface.



The renting process is only done through a mobile app that until recently was Android only. And here comes a handful of problems — the app is over- complicated, and the whole user-flow is off, riddled with misplaced assets. For instance, why is there a back button on the main screen? Go back to where? And why does the app have missing essential notifications and information?



![](https://cdn-images-1.medium.com/max/1600/1*ci_9JdfilWb16MUzHL4aBQ.png)

The first screen you see when you open the app.



Let’s start with the main page. The page that welcomes you when you first start the app is pretty basic. You have a _Login button_, a _Station button_ which takes you to the map that marks the locations of the racks and how many bikes are available. Renting isn’t possible from this page. Then there’s a _Ticket Purchase button_ and a _My Page button_ which contains information about your rides. There’s also a _Call Centre button_ for when you need to ask for help.

One thing that you might have noticed is the _back button_ on the top left of the screen. A button that leads you nowhere. And a _hamburger menu button_ on the right that forces the menu to pop out from the left of the screen. Why?

### Login

The current design requires a user to log in and proceed with the service. It has the option of remembering your username and password. But upon closing the app the user is logged out, creating this mandatory _Login Page_ tap — that could be bothersome, especially if you are in a hurry. The Login screen should be a one time experience for a mobile app. After all a mobile phone is a personal device that is rarely left unattended.

The app itself does not store credit card information and other sensitive data that must be protected with a mandatory automatic log out. With the redesigned experience, such sensitive data will be protected with a password prompt. This will add an extra layer of protection from undesired 3rd parties.



![](https://cdn-images-1.medium.com/max/1600/1*kKJpfmgx5Mr9PuSoFwKOwg.png)

Once logged in on a device, the profile is stored in the device (e.g. Facebook, Daum, Twitter etc.)



### Main

**Seoul Bike** is a service that offers rentals of transportation vehicles. Hence, the first thing a user should see is a map with locations around him from where he could rent. With a single glance of the screen, the user should see the currently selected rack and the other racks in the vicinity. The available and unavailable ones should be easily distinguishable. Car rental apps like [**_Socar_**](https://www.socar.kr/) and [**_Green Car_**](http://www.greencar.co.kr/) show the user a map with locations near you.

A major problem I noticed when using the service for a whole year is that a number of users tend to rent a bicycle that is too far away from them. This prevents people at the rack from using the service. Currently if you rent a bicycle and not unlock it from the rack within 5 minutes, the rent is automatically cancelled. For a casual leisure ride, waiting for 5 minutes is not that big of a problem ( nobody likes waiting in the current fast paced lifestyle). But for someone that starts his or her morning commute to work, waiting for 5 minutes is not an option.

To prevent such occurrences, I designed the service to make use of the mobile devices location tracking. This will see if the user is within 100 meters of the rack he intends to rent from. A normal GPS in a modern mobile device has accuracy of around 50 meters — and 100 meters is, in my opinion, a safer distance for a GPS. A distance of 100 meters means the user could see the rack if nothing is in the way, and need just few seconds to approach it.

The GPS data could be used to improve the service by analysing how users move with the bikes, when are the peak hours and which areas need to be managed at what times. Currently there is no such data and it is not analysed, and some areas where the bicycles are part of the morning commute are not managed properly.

This data could be a great source of information for the city government itself. It could prove to be essential for an ever growing city with overpopulation and traffic problems. An affordable and reliable network of bicycles could ease the other means of public transportation, something that Seoul City needs to concentrate on.



![](https://cdn-images-1.medium.com/max/1600/1*PJEpwbFgfPfuOAOkSP8pfw.png)

The main screen contains other rent option wit just a click of a button.



There are manual options currently used in the app, such as manual search and QR code scan. They are quite useful in the event of GPS error or if the location of the user is unavailable. The user could always search for a rack by it’s unique number or name, or scan a QR code attached to the rack to use the service. These modes are switched with just a single tap from the top bar. Search screen also contains your favourite locations personalised by the user.



![](https://cdn-images-1.medium.com/max/1600/1*7MqhSqcm_E9EiAUsK8WtUw.png)



### Notifications

Usually when I am in a hurry, I get a very unwanted surprise every now and then. A message “You do not have a ticket, purchase one first and try again” comes out of the speaker attached on the bike. Sometimes when I need a bicycle the most, there is none at rack near my house. Not a surprise I enjoy, but a surprise nonetheless.

To prevent such incidents, some essential information should be displayed through non-intrusive push notifications. For instance — the current number of bicycles at a favourite rack, the time remaining of your current ride, and an imminent expiration of a ticket. The user is required to select a certain time frame for the features to work. This is needed to reduce the load on the servers from the constant update requests and mobile data usage.

Let’s imagine a person called Zoe. Zoe lives in an area where there is no direct bus to the subway station where she goes daily. The walking distance is around 14 minutes, but with a Seoul Bike she can go there in 5\. With the increased popularity of the bikes she is often forced to walk in a hurry, because there are no bikes on the rack.

With this feature, she adds the nearest bicycle rack to her favourites. Next, from the app settings she turns on _notifications_ for the _rack status._ From 08:00 to 08:20 she gets updates on how many bikes are available there. This will help her plan in advance if she needs walk to the subway station and leave a bit early.



![](https://cdn-images-1.medium.com/max/1600/1*6iDzfX0gEy2m_ezkiSSx9w.png)



### Hamburger Menu

The “hamburger” menu is like the map of the app, it takes a person from point A to point B with ease. By grouping features the user can easily remember their locations on the screen. As the central crossroad of the app, it can be used to inform the user with essential information.

One of the most uncomfortable aspects of the current app is the difficulty of finding how much time is left on your current ticket. This is something that should be displayed in a proxy location, that takes a user from point A to point B of the app. In my design this location is the “Hamburger” menu to the side. It includes a real time information on the status of the current ticket, and does not require the user to enter a special page to view it.



![](https://cdn-images-1.medium.com/max/1600/1*UgokfghkphCyQeBe_XusUA.png)

English language support for foreign visitors and expats who do not speak Korean.



### Payment

Another frustrating aspect of the app is the ticket payment stage. Korea, and especially government operated online services, are obsessed with security. Most of them use a process of payment that is rage-infusing. There’s Active X, mobile phone authentication (sometimes several times) and a ton of other steps, just to spend 5,000 won on something.

I can’t count the times I gave up buying something online because the payment stage left me speechless. A payment process should be secure yet quick, thus the “Ticket Purchase” pages required a new model. [**_Kakao Pay_**](http://www.kakao.com/kakaopay/) or [**_Naver Pay_**](http://www.kakao.com/kakaopay/) are brilliant payment services made to be easy and fast, and this app is in need of such.



![](https://cdn-images-1.medium.com/max/1600/1*DtuqTzHWlsXUqPQzpKLQvg.png)

Less complication was the main target when designing this page.



With the collaboration of [**_Kakao Pay_**](http://www.kakao.com/kakaopay/) or [**_Naver Pay_**](http://www.kakao.com/kakaopay/) the whole payment process could be significantly simplified. It would become a more enjoyable experience, instead of an intimidating one that drives users away from the service, and which sometimes does not allow foreigners to pay at all. It did get better to be honest, but there are still limitations.

### Problem Report

Maintaining a growing garage of bicycles would require a very large workforce that could be out of budget for a local government. Instead of a large workforce, problematic bicycles could be engaged through user reports.

Currently the app has only a call-centre where you could ask for help or report a problem with your bike or any other bike. Because of the scale of the service and how it’s built, there is no way to track when the bicycle broke down. If a bicycle breaks down while I was using it, I could just return it to a rack and leave it broken. The next user could report it but there is no benefit of going through the trouble of reporting it. Designing a reward based system is what Seoul Bike needs.

Unfortunately, I couldn’t find any usage statistics. But the service has an ever-growing user base, and I have noticed a lot more problematic bicycles on my daily commutes.



![](https://cdn-images-1.medium.com/max/1600/1*CLA0PtYy4ISWew1FkhkBKA.png)



Categorisation of the most frequent problems simplifies the page. Not only is it easy for the end user, it is also easier to log and for the engineers to prioritise tasks. Under every major category there are more detailed options just a tap away, such as punctured tire, bent wheel or spikes and so on. If the problem is not part of these categories or if there is something extra that you want to explain to the engineers, there is a message option under the “Other” tab.

### P.S. Why from Green to Blue and Red?



![](https://cdn-images-1.medium.com/max/1600/1*EtVTx5ndJvMRikM3JKwsZQ.jpeg)

I will Seoul You!



Seoul City had a very controversial [re-branding](https://brandinginasia.com/i-seoul-you-the-confusing-new-slogan-for-seoul/) last year. But there is a lack of unification between the services that the city government provides and the branding. I get it why the current colour on the app and the logo is Green — bicycle = Eco-friendly, Eco-friendly = Green. I believe that we should stop the over-use of the green colour when something is branded as eco-friendly.

Seoul invested a lot of money in re-branding itself, and there needs to be consistency in the branding of their services. So I chose to use a derivation of the two colours used in “**I** •**SEOUL** • **U”**. Slightly tweaked blue and red from the city brand creates a nice contrast — with white and black and almost all shades of grey. Thus it becomes easier to create a hierarchy with the colours, even for colour blind people.

Usability was my main focus, and these two colours were the best fit for this design while still maintaining consistency with the Seoul brand.



![](https://cdn-images-1.medium.com/max/1600/1*pS79P6m1AgTbf29t8VRUsg.png)

The logo that set the Korean design community on fire.





![](https://cdn-images-1.medium.com/max/1600/1*whdm9IsByMf1kqQNm1b6aA.png)

Brand consistency is something that should be enforced throughout all Seoul City services.



### Free UI Kit

After working on this project in my spare time I got inspired by two people to release the file as a UI kit. Other people now can use the assets for their own designs. One of the people I was inspired by is a university friend of mine, who worked for 2 years on creating a Korean font (Busan Bada/부산바다체) and released it for free.

Another inspiration was the creator of [_Open Color_](https://yeun.github.io/open-color/) and her interview on the [_Design Table podcast_](http://itun.es/kr/i6TOib.c) (lang: Korean). Her views on Open Source projects were really inspirational.

Moreover, a few weeks ago the team at Bohemian Coding released Sketch v47 and the _Libraries_ function — which takes symbols to a whole new level. So by sharing my Sketch file with the world, I hope I can help someone with some of the assets I made.

This project was designed for an Android device, thus all the assets are inspired by Google’s Material Design. But in the future, I plan to update the file with an iOS cantered design (can’t promise that it will be done!). The symbols and buttons I put together are free to use. So feel free to include them in your Sketch Libraries!

### Download the free UI Kit [here](https://martintotev.github.io/ui-kit/index.html).

For previews of some of the symbols in the file click [here](https://www.dropbox.com/sh/ttw5sz8nkr4cwol/AADZWctUBhCCRQ84S8VowrkAa?dl=0).

This UI Kit is free for personal and commercial use. If you use this kit as part of your work, mentioning it is greatly appreciated.

**The UI design itself is copyrighted, so please do not upload it on Dribble or Behance and claim it as your own. That would be really uncool. Like reeeaaaaally uncool…**

### Cheers and keep on creating!

You can find me at [martintotev.github.io](http://martintotev.github.io) _(under construction)_, or follow me on twitter [@martintotev89](https://twitter.com/martintotev89) or shoot me an email at martintotev89@gmail.com

Special thanks to _Sang Hyeon Park_ for becoming my mentor and guiding me into UX Design.








