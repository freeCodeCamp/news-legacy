---
author: Kevin Kononenko
authorTwitter: https://twitter.com/devmanual
authorFacebook: https://facebook.com/10203738544564981
title: "Model-View-Controller (MVC) Explained Through Ordering Drinks At The Bar"
subTitle: "Model-view-controller (MVC) frameworks are a crucial part of building modern web applications. Walk into a room of web developers, and yo..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*VRDZ0Xh-gOEJlAm1h7UMOg.jpeg
url: https://medium.freecodecamp.org/model-view-controller-mvc-explained-through-ordering-drinks-at-the-bar-efcba6255053
id: model-view-controller-mvc-explained-through-ordering-drinks-at-the-bar-efcba6255053
date: 2016-05-02T14:32:25.673Z
tags: [
  "Web Development",
  "Learning To Code",
  "Tech",
  "Programming",
  "Technology"
]
---
# Model-View-Controller (MVC) Explained Through Ordering Drinks At The Bar







![](https://cdn-images-1.medium.com/max/2000/1*VRDZ0Xh-gOEJlAm1h7UMOg.jpeg)







#### If you have been to a bar, then MVC ain’t that hard.

Model-view-controller (MVC) frameworks are a crucial part of building modern web applications. Walk into a room of web developers, and you will likely be bombarded with mentions of Ruby on Rails, Angular or Django.

More generally, MVC logic can be used to describe almost any web development process that uses a language like PHP, Ruby, Python or JavaScript.

#### Never the less…

Many web developers navigate this mysterious world by hacking through the weeds with a smile on their face. When a senior developer or teammate needs to look at the code from one of these developers, they will give an immediate yelp, followed by a swift lecture on common coding practices.

This is no way to go through life! In fact, the MVC pattern in modern web development can be easily explained by ordering a drink from a bartender. And yes, that means if you have been to a bar, then you can understand the major structural pattern shared by all web apps.



![](https://cdn-images-1.medium.com/max/1600/1*f0mX-pFfwmoQKGdIUQoXEQ.jpeg)



_Bravely hacking through the obstacles until reality hits_

**What is the MVC Pattern?**

*   **Model**: Structures your data in a reliable form and prepares it based on controller’s instructions
*   **View**: Displays data to user in easy-to-understand format, based on the user’s actions
*   **Controller**: Takes in user commands, sends commands to the model for data updates, sends instructions to view to update interface.

Or, in diagram form:



![](https://cdn-images-1.medium.com/max/1600/1*4SxbmCrI5YVp1Uyj1Jstsg.png)

Image Cred: Real Python



That was boring. Onto the bar.

#### A beginner web developer enters a bar…

You enter a bar on a Friday night, and approach the bartender. Since the bar is already crowded, you push through a crowd until you finally catch the bartender’s attention, and you blurt out, “One Manhattan, please!”

You are the **user**, and your drink order is the **user request**. To you, the Manhattan is just your favorite drink, and you pretty reliably know that this will be a sweet and delicious drink.

The bartender gives you a quick nod. To the bartender, the Manhattan is not a tasty drink, it is merely a series of steps:

1.  Grab glass
2.  Add whiskey
3.  Add vermouth
4.  Add bitters
5.  Stir drink
6.  Add cherry
7.  Ask for credit card and charge.



![](https://cdn-images-1.medium.com/max/1600/1*AMWKKh4SxqNrcM5dNnSsfQ.jpeg)

Image Credit: Wikipedia



The bartender’s brain is the **controller**. As soon as you say the word “Manhattan” in a language that they understand, the work begins. This work is similar in nature to making a margarita or strawberry daiquiri, but uses distinct ingredients that will never be confused. The bartender can only use the tools and resources that are behind the bar. This limited tool set is the **model,** and includes the following:

*   Bartender’s hands
*   Shakers/mixing equipment
*   Liquors
*   Mixes
*   Glasses
*   Garnishes

Perhaps at a fancier bar, they might have a robot assistant! Or an automatic drink mixer. It does not matter to your particular bartender, who can only use the available resources.

Finally, the finished drink that you can see and consume is the **view.** The view is built out of the limited options from the model, and arranged and transmitted via the controller (that is, the bartender’s brain).

### **Lessons Learned**

*   Want another drink? Shouting at your empty glass, the view, will do you absolutely no good. You must talk to the bartender.
*   The time spent between the bartender hearing the request and starting to create the drink should be absolutely minimal. This is sometimes known as a “skinny controller”- in other words, the controller should contain a minimal amount of logic, and delegate as much as possible to the model. A great bartender will not only have recipes memorized, but will also prepare the ingredients and tools in a reliable manner every night so that a minimal amount of searching and arranging is needed once the customers start ordering.
*   Could the bartender pour all the ingredients directly in the customers mouth and expect the customer to swish it around and mix the drink? Yes, possibly I suppose. You want to keep as much of your logic within the model as possible as opposed to within the view. In other words, making the drink behind the bar is preferable to mixing it within the customer’s mouth.



![](https://cdn-images-1.medium.com/max/1600/1*fpP-3F2rQUApiAx5Hm3H7w.png)

Image Credit: Xperience



*   If you order a beer, the bartender will hardly need to do anything. Perhaps they will simply remove the cap and hand you the drink. That being said, you still must request the bartender. The beer will not magically appear in front of you.





<iframe data-width="800" data-height="400" width="700" height="350" src="https://medium.freecodecamp.org/media/49d3eea55442a7cdcaff56ecc0af5a9e?postId=efcba6255053" data-media-id="49d3eea55442a7cdcaff56ecc0af5a9e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fupscri.be%2Fmedia%2Fform.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





### Tying It Back To Web Development

Here is how the same process plays out in a modern web app:

*   The user makes a **request** along a route, let’s say /home.
*   The **controller** receives this request and gives a specific set of orders that are related to that route. These instructions could either be for the **view** to update or serve a certain page, or for the **model** to perform specific logic. Let’s assume this request has some logic associated with it.
*   The model carries out the logic, pulls from a database and sends back a consistent response based on the controller’s instructions.
*   The controller then passes this data to the view to update the user interface.

Whenever a request comes in, it first must go to the controller before it can be converted into instructions for the view or model. The [Ruby on Rails wikipedia article](https://en.wikipedia.org/wiki/Ruby_on_Rails#Technical_overview) contains a further overview if you are looking for more.

Any time you need to learn a new web development framework, you will come across this consistent MVC pattern. And if a particular framework differs from this, you can be sure that the authors will explain their new pattern with references to MVC.

This should make learning a heck of a lot easier- once you develop with MVC once, every new framework can fit within your comfort zone.

**Did you enjoy this guide? Let me know in the comments!**








