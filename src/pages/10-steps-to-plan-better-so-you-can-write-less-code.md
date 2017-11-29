---
author: freeCodeCamp
authorTwitter: https://twitter.com/freeCodeCamp
authorFacebook: none
title: "10 Steps to Plan Better so you can Write Less Code"
subTitle: "An ounce of preparation is worth a pound of cure. That’s true in medicine, and that’s definitely true in software development...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*lO6S-555VY0QioGFss2SQw.jpeg
url: https://medium.freecodecamp.org/10-steps-to-plan-better-so-you-can-write-less-code-ece655e03608
id: 10-steps-to-plan-better-so-you-can-write-less-code-ece655e03608
date: 2015-06-03T00:00:00.000Z
tags: [
  "Web Development",
  "Design",
  "Productivity",
  "Personal Development",
  "Business"
]
---
# 10 Steps to Plan Better so you can Write Less Code



![](https://cdn-images-1.medium.com/max/1600/1*lO6S-555VY0QioGFss2SQw.jpeg)



An ounce of preparation is worth a pound of cure. That’s true in medicine, and that’s definitely true in software development.

Here’s a structured 10-step workflow that will guide you through the app planning process, with the goal of saving you from writing a lot of unnecessary code.

Together, we’ll plan out a simple “To-do” single-page web app. We’ll also plan for an API backend for a future mobile app.  

Here are the steps we’ll take in planning out this project:

#### 1) Create our Trello board

[Trello](http://trello.com/) is a fun, free way to break your planning and development process into small tasks that can be tracked.



![](https://cdn-images-1.medium.com/max/1600/1*U__BPzBi5pLsulZZXxnZsA.png)



*   To Do — what is left to do
*   In progress — tasks that people are currently working on
*   Done — tasks that are done and ready for testing

#### 2) Create our agile user stories

Here are some example user stories. These will guide how we think about our app’s features and functionality. Note that they all follow a similar structure: as a <person> I can <do something>.

*   as a logged-in user I can see the list of my to-do’s.
*   as a logged-in user I can add a new to-do.
*   as a logged-in user I can delete a to-do (only my to-do’s — not other users’).
*   as a logged-in user I can complete a to-do (only my to-do’s — not other users’).
*   as an anonymous user, I can register for a new account, recover my password, or log in to the app with an existing account.

#### 3) Create our use case model

Our use case model will visualize our user stories, and add suggestions for how we can implement them.



![](https://cdn-images-1.medium.com/max/1600/0*Y2sQ8pcY1V4bS__w.)





![](https://cdn-images-1.medium.com/max/1600/0*8vNsghIvAKpeF6Pv.)



#### 4) Create our activity diagram

Our activity diagram will show the different paths our users can take through our app.



![](https://cdn-images-1.medium.com/max/1600/0*o2dH3EQRpUEZfdh5.)



*   A user accesses our to-do application.
*   If the user is not logged in she will see our login page.
*   If she already has an account, she can log in.
*   If she has an account, but she forgot her password, she can recover her password.
*   If she doesn’t have an account, she can create one.
*   Both “create an account” and “recover my password” will require email validation. A user can log in to our application only after she has confirmed her email address.
*   If she is logged in, she will see her todo list (this can be empty if she hasn’t added any to-dos yet).
*   is able to see her tasks list
*   is able to mark a task from her list as completed
*   is able to search within her task list
*   is able to delete a task from her list
*   The user can exit the application at any time.

#### 5) Create our mockups

Our mockups show what our app should look like. It’s much faster to iterate on a mockup than it is to do so on working code.



![](https://cdn-images-1.medium.com/max/1600/0*0Sqp2wF75fe2LCXl.)



#### 6) Choose the right technologies for our project

Because this is a single page app, we’ll rely heavily — or in this case exclusively — on JavaScript. Let’s use one of the most popular JavaScript stacks: the [MEAN](http://meanjs.org/) stack. One big benefit of the MEAN stack is that all of its components are free and open-source. There are also tons of resources available for learning the MEAN stack, and for debugging it when you inevitably encounter errors.

You can have a [MEAN stack development environment](http://www.freecodecamp.com/challenges/waypoint-get-set-for-basejumps) up and running in the cloud in less than an hour, for free.

Here are the components we’ll use:

1.  [MongoDB](http://mongodb.org/) for our database
2.  [Node.js](http://nodejs.org/) and [Express.js](http://expressjs.com/) for implementing our API
3.  [AngularJS](http://angularjs.org/), along with HTML and CSS (and Bootstrap) for our client-side application
4.  [Mongoose](http://mongoosejs.com/) to connect our application to MongoDB

#### 7) Design our database schema

It’s worth the effort to design a database schema, even for our simple application.

We’ll have two collections: our “Users” collection will house our user data, and our “ToDo” collection will house our tasks that need to be done. One user can have zero, one, or many tasks in her todo list, so we will have a one-to-many (1:m) relationship between our two collections.



![](https://cdn-images-1.medium.com/max/1600/0*6TjyDpsRXJ6l4KfD.)



#### **8) Define our use cases**

1.  What happens to the todos related to a user that deletes her account? When the user deletes her account the todos related to that user should also be deleted.
2.  No todo can be added without being attached to a confirmed user.
3.  A todo can only be deleted by its owner.
4.  No user can be added with an empty username or password.
5.  No todo can be added with an empty task.

Things to keep in mind:

1.  Use the Mongoose middleware to remove dependent documents like todos when a user deletes her account.
2.  Use Mongoose validation rules on models to prevent empty fields from being added to our database.

#### 9) Design and test our API

I recommend you create an account and start playing with it. If you link your [GitHub](http://github.com/) account with Apiary, you can ensure your documentation always stays up to date. You’ll also be able to test your data visually without the need for actually hitting your API endpoints. If you prefer to test your API from the command line, [here’s an example of how to do this](http://docs.agendor.apiary.io/).

Later, once you’ve implemented your API with Node.js and Express.js, you’ll just need to set your URL in Apiary. Then you can start testing your calls. Our current host url ([http://fcctodoapp.apiblueprint.org/](http://fcctodoapp.apiblueprint.org/)) will be replaced by your API’s URL.



![](https://cdn-images-1.medium.com/max/1600/0*xO5pioP4hCYJ38Bu.)



#### 10) Start writing code!

This is the fun part, and it will take up most of your project’s time. If you need help with this, join us and [learn to code](http://freecodecamp.com/).

[_Bianca Mihal_](https://twitter.com/intent/user?screen_name=bubuslubu)_originally published this__on our now-defunct blog in June 2015._








