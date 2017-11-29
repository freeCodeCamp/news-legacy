---
author: Léna Faure
authorTwitter: https://twitter.com/lenafaure
authorFacebook: none
title: "The developer’s workflow in practice — how we built our MVP in 30 days"
subTitle: "As a web developer, I often get to start projects from scratch and make decisions for a bunch of elements, from the technical stack to th..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*oYtXYYF7F0cBuv2SWm78xA.jpeg
url: https://medium.freecodecamp.org/the-developers-workflow-in-practice-how-we-built-our-mvp-in-30-days-c60d804695a8
id: the-developers-workflow-in-practice-how-we-built-our-mvp-in-30-days-c60d804695a8
date: 2017-10-24T21:05:32.511Z
tags: [
	"Tech",
	"Programming",
	"JavaScript",
	"Development",
	"Startup"
]
---
# The developer’s workflow in practice — how we built our MVP in 30 days











![](https://cdn-images-1.medium.com/max/2000/1*oYtXYYF7F0cBuv2SWm78xA.jpeg)






Photo by [Michał Grosicki](https://unsplash.com/photos/zPfn8ap8hTY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)







As a web developer, I often get to start projects from scratch and make decisions for a bunch of elements, from the technical stack to the final look & feel of the app.

Especially when the stakes behind a project are high, this process can be overwhelming.

I want to share our experience of one month into the City of Paris Startups Program, and the steps our team took to achieve a first operating version of the app.

Some context first: AlloAnim is a web app designed to help the City of Paris find available after-school staff instantly.
















Our current Homepage for the first Sprint — Inspired from AirBnb while working on a new UI — Credit Sophie Robichon / Mairie de Paris







The goal is to have after-school employees create and update their profile and availabilities as often as possible. This will allow the City of Paris to have direct access to a real-time updated database of available staff.

Our team is made of two people. One is Product Owner, Christian Bockarie. Christian was the person who identified the pain-point while working as a City of Paris school librarian. He also happens to have a degree in Computer Science.

The other is a developer (yours truly), responsible for building the full-stack app within a 5 months period.

Our headquarters are at the open innovation community lab [La Paillasse](https://medium.com/@Lapaillasse). We work alongside the Startup _ViteUnLieu_, that helps organizations easily find conference rooms in Paris, with [Jean Karinthi](https://medium.com/@jeankarinthi_4879) as Product Owner and [Christophe Robillard](https://medium.com/@krichtof) as Lead Developer.

The stack we chose is Ruby on Rails for the back end and ‘vanilla’ (plain, no frameworks) JavaScript on the front end.

We want to integrate React as soon as possible, but for the prototyping phase we are sticking with good old JavaScript.

So how did we create a working product from scratch in one month? Here are the main steps we took to ship this first version successfully.

### 1\. Embrace the Agile Spirit

We worked with a coach for two days to learn the basics of [Agile development](https://en.wikipedia.org/wiki/Agile_software_development).

The main take-away of Agile is that you have to work in very close collaboration with your final users. The goal is to iterate over every version of your app based on the feedback they provide.












Christophe Robillard (ViteUnLieu, Developer), Isabelle Lezaud (Agile Coach), Christian Bockarie (AlloAnim, Product Owner), Jean Karinthi (ViteUnLieu, Product Owner)



This way you are less likely to build something that people don’t need, don’t like, or don’t know how to use.

### 2\. Quickly meet with users in real-life

Christian managed to quickly get us a decisive meeting with the head of after-school staff in an elementary school.

We engaged in a meaningful conversation about how she currently handled her staffing problem. We learned what functionality she would absolutely need to have in our upcoming web tool.












Credit Sophie Robichon / Mairie de Paris



The pain-point and need for our product proved to be definitely real. This was enough to get us started on a Minimum Viable Product (MVP). This is a product version with the necessary functionalities to be the first usable version of our product.

### 3\. Write User Stories

User stories are a way for a non-technical Product Owner and a Developer to perfectly understand each other on what needs to happen for the app to fill its purpose.

They are written on the model: “As a < type of user >, I can < some goal > (so that < some reason >).”

So an example of one of our simple user stories was: “As a member of after-school staff, I can create a profile with my personal information”.

User stories fit together to form a Story Map, which is the global visual plan for building the app over time.














The development cycle of the product is then sliced into sprints.

Each sprint contains a given number of user stories that will be coded into functionalities.

Our first sprint typically contains all the user stories that are needed for a usable Minimum Viable Product.

The Story Map and the content of the sprints are free to change at each iteration of the product. This usually coincides with a feedback session with users.

As users give feedback on the developed functionalities, the User Stories evolve and adapt to match the actual use of the app.

### 4\. Set up an Agile workflow

I was lucky enough to work alongside the other startup’s talented developer [Christophe Robillard](https://medium.com/@krichtof), who gained an impressive experience with Agile workflows and developer productivity from his previous experience in [Government Startups Program](https://beta.gouv.fr/).

#### Daily Stand-Up Meetings

Taken from the Scrum methodology, the daily stand-up is a standing meeting held on each day of a sprint. We talk to each other every beginning of the day for 5–15 minutes. We stand if we are physically together, or talk on the phone if we work remotely.

It helps set the context for the coming day’s work and commit to the tasks that have to be tackled next.

#### Dev Backlog

The sprint backlog gets visible by putting it on atask board, where each row on the board is a user story. Smaller, individual tasks are written on ‘cards’.

Team members update the task board continuously throughout the sprint by writing new cards or moving the cards. For example, a card could be moved from column “To do”to column “Doing”.












Our task board for the first sprint



You can easily recreate this task board on the [Gitlab issue board](https://about.gitlab.com/features/issueboard/) or on [Waffle.io](https://waffle.io/) for a digital alternative.

#### Bi-weekly meetings between Startups

To make the meeting efficient and to-the-point, the strategy Christophe shared with us is the following:

*   Set a maximum time for the meeting (30 minutes to 1 hour)
*   Write a sticky note for each subject that will be discussed and talk about only one sticky note subject at a time
*   Set a 5 minute timer for each sticky note discussion  
    If the discussion exceeds 5 minutes, decide between the team if it is worth resetting the timer for an additional 5 minutes.












Christophe provided us with some timeless knowledge on Agile, Lean Startup and Clean Code



### 5\. Get inspiration from well-designed websites and share a moodboard

This is one of my favorite parts at the beginning of a project — seeking inspiration for UX and UI from other web apps, some of which I use very often.

I am always amazed at the creativity and cleverness of the teams behind some of the tools I use. For example, I was inspired by the onboarding process of [breaz.io](https://hired.com/signup?utm_source=breaz&utm_medium=referral). I also admired the way [drivy.com](https://www.drivy.com/) allows users to select a bunch of cars first, then send one message to every owner once the selection is made.

Here, I’ll present some of the tools that usually help me get started and visualize the app’s interfaces.

#### Dribbble

The search functionality on [Dribbble](https://dribbble.com/) lets you pick the creative brain of great designers who showcase their work.














#### Moodboard

[Moodboard](http://www.gomoodboard.com/) lets you collect, share and comment on designs with your team. This lets everyone get a taste of the inspiration for the website’s interface:














#### Adobe Color

[Adobe Color](https://color.adobe.com) is the perfect source of inspiration for harmonious palettes. The ‘Explore’ feature lets you browse thousands of inspiring color themes:














### 6\. Create the first Rails version of the App

We set up our models and database with Ruby on Rails and SQLite. We used the ‘Devise’ gem for the authentication system.

I usually develop the front end and back end at the same time. This means I try to work on the design and responsiveness of each functionality as soon as it is born.

This never fails to produce some kind of ‘wow!’ effect when presenting the first demos. This first impression can be a decisive factor when users are adopting a product.

Some developers prefer to focus on the back end first. Once they get everything in working order, they go back over it for cosmetics further along. However, I find it easier to work on both simultaneously.














In our app, the main object is the user. We have quite a road ahead of us to refine the onboarding system and find incentives for the user to return to the app often.

For now, the sign up process is basic and simply has the key information for the MVP to work.

Below are some screenshots of the MVP in action!

**Signing up:**












Signing Up



**Looking for staff:**
















Looking for available staff







The app requires a weekly calendar for the after-school staff to fill in their available time slots. However, I couldn’t find a Rails gem or JavaScript plugin that matched the particular requirements of the MVP.

So I set out to build a full Javascript weekly availability scheduler, and then integrate it in the Rails app. [You can find the JavaScript code here if you are interested](https://github.com/lenafaure/javascript-weekly-scheduler).

**Version 0 (Display weeks):**














**Version 1 (Add specific time-slots and responsive behavior):**














**Version 2 (Integrate in the Rails App — Profile page):**














### 7\. Deploy the Live App

The final step is to make the app live. I found [**Heroku**](https://www.heroku.com/)made hosting it a breeze. Deployment is free, and directions are very simple and available directly on the platform.












Heroku deployment instructions



### 8\. Iterate

Finally, it is time to meet the users again, and present them the work you have done during the sprint.

We usually have 3-week sprints. This gives us time to actually code enough functionalities to have something of substance to discuss. It also lets our club of users breathe between meetings.

During the meeting, we listen to the users’ feedback and discuss the app’s functionalities with them.

Then, we go back to the task board to plan the next sprint… Until next time!

### Conclusion

Sticky notes are life. Nothing good in the world would happen without them.














That’s it for now! We are well into our second sprint and moving sticky notes with stupendous agility.

Any tools you use for your own process and would care to share with us are most welcome!

The [#**startupdeville**](https://twitter.com/hashtag/startupdeville?src=hash) program is a City of Paris initiative, powered by public agents who have identified a clear pain point while working on the field.

After a selection process and a one-month acceleration, a two-person team (Product Owner + Developer) builds a web app to validate the need for this new service and its adoption by the target users.
















Left to right — Team ViteUnLieu: [Jean Karinthi](https://medium.com/@jeankarinthi_4879) (PO), [Christophe Robillard](https://medium.com/@krichtof) (Dev) / Isabelle Lezaud (Agile Coach) / Team AlloAnim: Christian Bockarie (PO) and myself (Dev)







This article was first published in French: [find it here](https://medium.com/@lenafaure/8-%C3%A9tapes-pour-passer-de-lid%C3%A9e-au-produit-en-un-mois-startupdeville-9ecc48b0521c).

If you enjoyed this piece, please show your love and clap so others can find it! Feel free to [follow me on Twitter](https://twitter.com/lenafaure), as well as the awesome [#startupdeville](https://twitter.com/hashtag/startupdeville?src=hash) team members, [Christian Bockarie](https://twitter.com/BockarieChrist), [Jean Karinthi](https://twitter.com/JeanKarinthi) and [Christophe Robillard](https://twitter.com/krichtof)

— Léna Faure








