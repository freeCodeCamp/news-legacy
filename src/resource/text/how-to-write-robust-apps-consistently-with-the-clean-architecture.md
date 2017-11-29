---
author: Daniel Oliveira
authorTwitter: https://twitter.com/Valbrand
authorFacebook: https://facebook.com/665552986846981
title: "How to write robust apps every time, using “The Clean Architecture”"
subTitle: "As developers, we can’t keep from using external libraries and frameworks in our systems. The community’s hands build marvelous tools, an..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*olJUeL2ziDvUPnXBBbPCYA.jpeg
url: https://medium.freecodecamp.org/how-to-write-robust-apps-consistently-with-the-clean-architecture-9bdca93e17b
id: how-to-write-robust-apps-consistently-with-the-clean-architecture-9bdca93e17b
date: 2017-09-04T19:48:55.713Z
tags: [
  "JavaScript",
  "Web Development",
  "Programming",
  "Technology",
  "Startup"
]
---
# How to write robust apps every time, using “The Clean Architecture”







![](https://cdn-images-1.medium.com/max/2000/1*olJUeL2ziDvUPnXBBbPCYA.jpeg)







As developers, we can’t keep from using external libraries and frameworks in our systems. The community’s hands build marvelous tools, and using them is only natural. However, everything has a downside.

Careless teams and individuals can get in a dangerous situation by structuring their systems around the tools they use. Business rules get mixed up with implementation details. This can result in a brittle system, hard to extend and maintain. What should be a quick change in the GUI ends up turning into a bug hunt that lasts for hours. **But it does not have to be like this.**

Software Architecture proposes models and rules to determine the structures (like classes, interfaces, and structs) in a system and how they relate to each other. These rules promote reusability and the separation of concerns for these elements. This makes it easy to change implementation details such as the DBMS or front-end library. Refactors and bug fixes affect as little parts of the system as possible. And adding new features becomes a breeze.

In this article, I will explain an [architecture model proposed in 2012](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html) by Robert C. Martin, [Uncle Bob](https://twitter.com/unclebobmartin). He is the author of classics like [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/ref=sr_1_1?ie=UTF8&qid=1501969656&sr=8-1&keywords=clean+code) and [The Clean Coder.](https://www.amazon.com/Clean-Coder-Conduct-Professional-Programmers/dp/0137081073/ref=sr_1_2?ie=UTF8&qid=1501969656&sr=8-2&keywords=clean+code) In October of this year, he’ll launch another book, [Clean Architecture](https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164/ref=pd_sim_14_2?_encoding=UTF8&pd_rd_i=0134494164&pd_rd_r=BJG6B8A17K06QHXKKWEJ&pd_rd_w=MqqNH&pd_rd_wg=G8bDT&psc=1&refRID=BJG6B8A17K06QHXKKWEJ).

The model has the same name as the book, and it’s built on simple concepts:







![](https://cdn-images-1.medium.com/max/2000/1*biSmg94qPg58-ppug82-Ng.jpeg)







Divide the system’s composition into layers with distinct and well-defined roles. And restrain the relationships between entities in different layers. There’s nothing new in splitting your application in layers. But I chose this approach as it was the one that was the simplest to grasp and execute. And it makes testing use cases dead simple.

We just have to make sure the **Interactors** work properly, and we’re good to go. Don’t worry if the word “Interactors” seemed alien to you, we will learn about them soon.

From inside out, we are going to explore each of the layers a bit further. We’ll use a sample application that’s quite familiar to us: counters. It takes no time to understand, so we can focus on this article’s subject.

You can find a demo of the app [here](http://www.dvalbrand.com/counter-clean-architecture/), and the code samples will be in TypeScript. Some of the code gists below use React and Redux. Some knowledge about these solutions can help in understanding them. Yet, Clean Architecture’s concepts are much more universal. You will be able to understand it even without previous knowledge of the mentioned tools.

#### Entities

Entities are in the diagram as Enterprise Business Rules. Entities include business rules that are universal to a company. They represent entities that are basic to its area of operation. They are the components with the highest level of abstraction.

In our counters sample, there’s a very obvious Entity: the `Counter` itself.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/39b3a934b6f9c8aa110f254f65fa410c?postId=9bdca93e17b" data-media-id="39b3a934b6f9c8aa110f254f65fa410c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F3356696%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



I’ve encapsulated the number that represents the counter in the Counter type. That’s to allow us to change it in the future with as little impact as possible on the rest of the system.



#### Use Cases

Use Cases are pointed out as Application Business Rules. They represent each of the use cases of a single application.Each element of this layer provides an interface to the outer layer and act as a hub that communicates with other parts of the system. They’re responsible for the complete execution of the use cases and are commonly called Interactors.

In our sample, we have a Use Case for `incrementing` or `decrementing` our `counter`:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/398ecf4335f1c642856ce18b9355c740?postId=9bdca93e17b" data-media-id="398ecf4335f1c642856ce18b9355c740" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F3356696%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Note that the factory function for `ChangeCounterInteractor` receives a parameter of the type `CounterGateway`. We will discuss the existence of this type will later in the article. But we can say that Gateways are what stands between Use Cases and the next layer.

#### Interface Adapters

This layer consists of the boundary between the system’s business rules and the tools that allow it to interact with the external world, like databases and graphical interfaces. Elements in this layer act as mediators, receiving data from one layer and passing it forward to the other, adapting the data as needed.

In our sample, we have several Interface Adapters. One of them is the React component that presents the `counter` and its controls to `incremen`t and `decrement`:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b0bde76b5698d53c0075c37f840c8a93?postId=9bdca93e17b" data-media-id="b0bde76b5698d53c0075c37f840c8a93" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F3356696%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Note that the component does not use a `Counter` instance to present its value, but an instance of `CounterViewData` instead. We’ve made this change to **decouple presenting logic from business data**. An example of this is the logic of exhibition of the counter based on the view mode (Roman or Hindu-Arabic numerals). An implementation of `CounterViewData` follows below:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/f8905857103836c115ebcc0aa4b24527?postId=9bdca93e17b" data-media-id="f8905857103836c115ebcc0aa4b24527" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F3356696%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



Note how CounterViewData holds the presentational logic inside itself.



Another example of an Interface Adapter would be our application’s Redux implementation. Modules responsible for requests to a server and the use of local storage would also live inside this layer.

#### Frameworks and Drivers

The tools your system uses to communicate with the external world compose the outermost layer. We don’t usually write code in this layer, that includes libraries such as React/Redux, browser APIs, etc.

#### The Dependency Rule

This division into layers has two main goals. One of them is to make clear the responsibilities of each part of the system. The other is to make sure that each of them fills their roles as independently from each other as possible. For this to happen, there’s a rule that states how the elements should depend on each other:

**An element must not depend on any element belonging to a layer outside its own.**

For example, an element in the Use Cases layer can’t have any knowledge about any class or module related to GUI or data persistence. Likewise, an Entity can’t know which Use Cases make use of it.

This rule may have raised questions in your head. Take a Use Case, for example. It’s triggered as result of user interaction with the UI. Its execution involves the update in some persistent data storage such as a database. How can the Interactor make the relevant calls to the update routines without depending on an Interface Adapter that’s responsible for data persistence?







![](https://cdn-images-1.medium.com/max/2000/1*gPL-gKEX2D406BonMpA_NA.jpeg)







The answer lies in an element that we’ve mentioned before: **Gateways**. They’re responsible for establishing the interface needed by the Use Cases to do their jobs. Once they’ve established this interface, it’s up to the Interface Adapters to fulfill their side of the contract, as shown in the diagram above. We have the `CounterGateway` interface and a concrete implementation using Redux below:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/8ccc418e36a9920287f843c098eff90a?postId=9bdca93e17b" data-media-id="8ccc418e36a9920287f843c098eff90a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F3356696%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>









<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/90c3b99e893c45a0c6b1e8888618873d?postId=9bdca93e17b" data-media-id="90c3b99e893c45a0c6b1e8888618873d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F3356696%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





#### You may not need it

Of course, this sample application was somewhat over complicated for an increment/decrement counter app. And I’d like to make clear that you do not need all this for a small project or prototype. But trust me, as your application gets bigger you’ll want to maximize reusability and maintainability. Good software architecture makes projects resistant to the passing of time.

#### Okay… So what?

With this article, we discovered an approach to decouple our systems’ entities. This makes them easier to maintain and extend. For example, to build the same application using Vue.js, we would only have to rewrite `CounterPage` and `CounterWidget` components. The source code of the sample application is in the link below:

[**Valbrand/counter-clean-architecture**  
_Contribute to counter-clean-architecture development by creating an account on GitHub._github.com](https://github.com/Valbrand/counter-clean-architecture "https://github.com/Valbrand/counter-clean-architecture")[](https://github.com/Valbrand/counter-clean-architecture)

This story was translated to Portuguese by me! It is available [here](https://medium.com/@Valbrand/você-não-é-o-seu-framework-d95f81c28ae9).

What pros and cons do you see in this approach? Have you used something similar in production? Share your experiences in the responses. If you like the article, please clap for me!








