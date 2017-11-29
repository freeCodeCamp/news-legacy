---
author: Kevin Kononenko
authorTwitter: https://twitter.com/devmanual
authorFacebook: https://facebook.com/10203738544564981
title: "React Props/State Explained Through Darth Vader’s Hunt for the Rebels"
subTitle: "If you’ve seen Star Wars, then you can understand props and state."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*i4gLjg40GYrR12oVI5NsZw.png
url: https://medium.freecodecamp.org/react-props-state-explained-through-darth-vaders-hunt-for-the-rebels-8ee486576492
id: react-props-state-explained-through-darth-vaders-hunt-for-the-rebels-8ee486576492
date: 2016-10-04T05:26:17.913Z
tags: [
  "Star Wars",
  "JavaScript",
  "React",
  "Programming",
  "Web Development"
]
---
# React Props/State Explained Through Darth Vader’s Hunt for the Rebels

## If you’ve seen Star Wars, then you can understand props and state.

Props and state are essential to writing readable React code. But they’re hard concepts to grasp, because they’re based around an entirely different paradigm than Angular or jQuery (if you have used either of those).

But don’t worry — I’m going to clear everything up with a Star Wars analogy.

That’s right. If you’ve seen the original Star Wars series, you can understand props and state.

Here’s a spoiler-free refresher of the basic premise of episodes 4–6:

1.  Darth Vader hunts the rebels relentlessly, as they are the last resistance against the Galactic Empire.
2.  The rebels, led by Princess Leia and Luke Skywalker, must fight back and exploit vulnerabilities within the Empire.
3.  Darth Vader uses a variety of tactics to try and discover the movements of the rebels, including an army of Stormtroopers, a fleet of starships, and a variety of scouts.

The entire plan for the Empire’s resources depends upon Vader’s leadership.

If you are used to using jQuery, you may think about creating one event handler (like a click() handler), then explicitly changing different parts of the user interface line-by-line.

But in React, the idea is that when **state** is modified, the changes will **automatically trickle down** to all child components via **props**. So you only need to write the code to change one thing — the **state **—and watch as your UI updates.

This is similar to the way that Darth Vader commands the three wings of his army. Once word gets back to him of the rebel location, his resources will automatically mobilize to launch an attack.

Let’s get into it. This tutorial will require a basic knowledge of JSX, which you can learn more about [here](https://facebook.github.io/react/docs/thinking-in-react.html).

### A Summary of The Galactic Empire

Here are the three wings of the Galactic Empire.



![](https://cdn-images-1.medium.com/max/1600/1*NBQvDruVqf4qCPT-BDuADA.png)



**The Imperial Army** is composed of Stormtroopers, AT-ATs, AT-STs and others.



![](https://cdn-images-1.medium.com/max/1600/1*0CHW4ZMIqxwVBIou8vnXkA.png)



**The Imperial Navy** is composed of star destroyers, TIE fighters and others.







![](https://cdn-images-1.medium.com/max/2000/1*pJpvQ3IJjJZEIAHSgOPx6w.png)







**Military Intelligence** is composed of bounty hunters like Boba Fett, probe droids, and any other specialized scouts.

Here is a quick org chart that will give some direction on how we will write our components.



![](https://cdn-images-1.medium.com/max/1600/1*Wb5PjkC4-AY-K8J494S4ng.png)



A reminder: Vader’s first goal is to find the location of the rebels. Those at the bottom of the org chart are the actual functional units that can accomplish this. If one of them finds a rebel base, their instructions would be to return to Vader so that he could execute his battle plans.

React is all about **dynamic user interface**. When a user completes a specific action, how does **state** change? In this case, Darth Vader would have a **state** called _rebelLocation_. Since that is the key dynamic variable, the three wings of the Empire would mobilize due to a change in the _rebelLocation_ **state**.

Stormtrooper encounters rebel base → Return to Darth Vader with location

User clicks certain element → Update the state of some parent component

Here are the basics in code, which follows the org chart above:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/1d8b396217d2edda04e3a570fec78159?postId=8ee486576492" data-media-id="1d8b396217d2edda04e3a570fec78159" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F8312841%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





### State Explained

**State** allows you to dynamically change many elements at once based on one variable. **State** encompasses the key parts of your UI that change basic on user input.

With less things to keep track of in state, you will be able to write components with more clarity and fewer opportunities for bugs. When state changes, many components may change in accordance based on the one variable.

jQuery approaches this by asking you to write one line for every element that must be changed. It is not explicitly based on the parent-child relationship like **state** is.

Let’s say Stormtroopers encounter the rebels. Vader has ordered them to report to him as soon as possible. Once they return with a rebel location, Vader can carry out the rest of his orders, which were contingent on the rebel location. Here is a modified diagram that charts the path through the components listed above.



![](https://cdn-images-1.medium.com/max/1600/1*go7yyXmlbrzVJg7QDRJmjQ.png)



Orders are already passed down to every member at the bottom of the chart. Once they run into rebels, they know to return to Lord Vader. The _rebelLocation_ state will then be updated with the planet, be it “Endor”, “Hoth”, or somewhere else.

This is the same concept as receiving user input then updating state in a parent component. Many React practitioners choose to write components with a singular function, so the component that actually listens for the user input will almost always be different than the component that holds state.

**Above:** Stormtrooper nested within ImperialArmy nested within vadersEmpire

**In a real app:** User input nested within parent div nested within parent div

#### What happens when state changes?

This is the beauty of React. Rather than writing complicated event handlers (like in jQuery), everything is contingent upon changes in state. You can clearly trace changes in the UI to these state changes.

In this case, once the _rebelLocation_ is discovered, the **state** would change to that planet. But that is only half the story. Darth Vader would have plans in mind to mobilize different assets based on this state change. He can prepare them in advance for this possibility. As in, “When we find their planet, travel there immediately and prepare for an assault!”

Once state changes, the changes are automatically shared with all 3 wings of the Empire. Similarly, when the state of a parent component changes, the child components automatically inherit the new state.



![](https://cdn-images-1.medium.com/max/1600/1*3-O1sL-whbHAa8prrqeCDQ.png)



Every component can also have its own state. For example, the _ImperialArmy_ component might have a _troopsCount_ state which counts the members of the army. We will not modify that in this example, but you can imagine that a battle might affect _troopsCount_.

Notice how this state does not depend on _rebelLocation_. If it did, we would not want to explicitly declare another state. We would want it to automatically update based on a change in _rebelLocation_ state.

Since it is independent, here is what the code looks like:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ee50224bd4565447804250d06725bddb?postId=8ee486576492" data-media-id="ee50224bd4565447804250d06725bddb" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F8312841%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Wait, so how does this state get communicated between the different components? That brings us to… props!

### Props Explained

With our Darth Vader case, we actually need two sets of instructions when it comes to commanding the Stormtroopers and other units on the bottom of our chart.

**Question 1:** What should the Stormtroopers do if they encounter the rebels?

**Answer:** Report back to Darth Vader.

**Question 2:** Where should the Stormtroopers travel?

**Answer:** _if_the rebels have not been found, search the galaxy at random. _Else_, go to the rebel location to attack them.

**Props** allow us to continuously monitor the _rebelLocation_ state, and order a troop movement if the state changes. _rebelLocation_ is a string. But what about the orders that must happen when they initially find the rebels?

We can actually pass a function as **props** as well! That means that we can pass a callback down to each Stormtrooper that will execute if that trooper discovers the target. In the following picture, you can follow the path outlined by “Orders” to trace the **props**.



![](https://cdn-images-1.medium.com/max/1600/1*go7yyXmlbrzVJg7QDRJmjQ.png)



In a typical user interface, let’s say that a user clicks a button, and you want to update the state of a parent component. You must also pass a callback from that parent component that will be triggered on the user’s click. That callback can then update the state **because it originated with the same parent that set the state**.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ab881341947c12cb254a02a80f8207a4?postId=8ee486576492" data-media-id="ab881341947c12cb254a02a80f8207a4" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F8312841%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





This is important, so let’s explore this code line-by-line:

**Line 8:** We create the command for the Stormtroopers that they should return with the rebel location immediately when they find it.

**Line 19**: We pass the command to the entire army via the updateLocation **props**.

**Line 32**: The Imperial Army passes this command to every Stormtrooper with an identical updateLocation **props**.

**Line 42**: We create a discoverLocation function so we can pass the value of the input into the updateLocation() callback when it is triggered.

**Line 53**: When a Stormtrooper finds the location, it triggers the discoverLocation() function so we can return the location via updateLocation(). This updates the **state** in the _vadersArmy_ parent component.

**Other Notes:** We passed the rebelLocation all the way down to each Stormtrooper as well. In this tutorial, we will not do anything with that information, but in the future, you can imagine that might be used to shift the location of all troopers towards the rebel base.





<iframe data-width="800" data-height="400" width="700" height="350" src="https://medium.freecodecamp.org/media/49d3eea55442a7cdcaff56ecc0af5a9e?postId=8ee486576492" data-media-id="49d3eea55442a7cdcaff56ecc0af5a9e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fupscri.be%2Fmedia%2Fform.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





### A Final Recap

1.  Darth Vader gives every member of the Galactic Empire an order: If you find the rebels, report back to me immediately. In code, this is a function in the parent _vadersArmy_ component that is then passed to every child via **props**.
2.  The Army, Navy and Military Intel (three divisions of the Empire) pass this instruction to every single troop, again via **props**.
3.  Each member of the Empire has the instructions. When they encounter the rebels, they will use a callback to pass the location all the way back up to Darth Vader, who will update the entire Empire with the news simultaneously and prepare for battle. This simulates a dynamic user input that changes the **state** of the parent component.

If you enjoyed this post, you may also enjoy my [other explanations](https://www.rtfmanual.io/guides/) of challenging CSS and JavaScript topics, such as positioning, Model-View-Controller, and callbacks.

And if you think this might help other people in the same position as you, give it a “heart”!








