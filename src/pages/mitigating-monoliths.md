---
author: Ian Belcher
authorTwitter: none
authorFacebook: none
title: "Mitigating Monoliths"
subTitle: "This article documents the problems we experienced with monolithic architecture, our transition to a new service-based system, and the re..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*Eap9PGXC5R-cx5Pd0Yvnww.png
url: https://medium.freecodecamp.org/mitigating-monoliths-2a8dcb8603a9
id: mitigating-monoliths-2a8dcb8603a9
date: 2016-08-05T05:03:40.168Z
tags: [
  "Web Development",
  "Software Development",
  "DevOps",
  "Tech",
  "Microservices"
]
---
# How we pivoted our tech stack to a service-based, developer experience-focused design

This article documents the problems we experienced with monolithic architecture, our transition to a new service-based system, and the results we have seen from its implementation so far.











* * *







### The problem

In 2015 we launched a minimum viable product — a [monolith](https://en.wikipedia.org/wiki/Monolithic_application), built on top of a CMS running within a LAMP stack. The CMS in question is respected but has reached a point of decline in its lifecycle, arguably from poor management.

The costs relating to the development and delivery of our project had begun to exponentially increase:

*   Our only feasible option was to scale vertically and it was a lot harder to implement high availability or redundant systems. Continual upgrades to our main host server were met with increases to our resource unit costs.
*   We were exclusively locked into a language and its performance. PHP is great for certain tasks, but not _every task_. In fact, it fails considerably for certain things where other languages shine.



![](https://cdn-images-1.medium.com/max/1600/1*dAF5sXVGIYb-OF6kvheqfQ.png)



*   The internal design of the CMS performed terribly by today’s standards. Some core hacks improved this by orders of magnitude, but the site still performed poorly due to a number of suboptimal, upstream design decisions.
*   As we continued to grow the project from its roots as a minimum viable product, we reached a complexity point where more additions or changes to functionality were met with a constantly increasing cost factor.
*   Due to increasing complexity, the developer experience sucked. Many developers will attest that once a project grows beyond a certain level of complexity, good, quality development drops off due to changes in one area having unforeseen consequences in other seemingly unrelated areas.
*   Using a CMS meant that our product was almost fully dependent on the quality of a team of [upstream developers](https://en.wikipedia.org/wiki/Upstream_%28software_development%29) from a small, privately owned company. The decisions they made impacted us. In effect, we were outsourcing many important tasks to this company, such as our security.
*   The tight coupling within the core CMS system prevented us from trying out new technology. For example, direct interaction with the database could be found in nearly _every_ part of the code-base, removing our ability to change or update the database technology.

We reached two important conclusions: Our monolith tech stack would continue to impede us from achieving our short-term goals, and our long-term goals would quickly become impossible from a product perspective and a human capital perspective.

Like any good, learning organization, we weren’t going to make these mistakes again. After many hours of further consideration we arrived at this hypothesis:

> Monolith design facilitates, imposes and in some regards is itself, an anti-pattern.

Good development is about clear separation of concerns. Good development is about high classification and well-designed encapsulation of data and functionality.

The [God class](https://en.wikipedia.org/wiki/God_object) anti-pattern and the [Law of Demeter](https://en.wikipedia.org/wiki/Law_of_Demeter) tell us that we should limit knowledge in any specific area to only that which is required. So why are these principles often only implemented at a language level?



![](https://cdn-images-1.medium.com/max/1600/1*VW7BXkFhQScn0JzwLhvphA.png)



In an _abstract_ way, monolith systems are a ‘God class’. They function as a single, heavy controller— aglobal object that is injected upon instantiation with all of your system’s dependencies. They impose constraints such as operating system or language choices, where certain tasks are much better suited to other configurations.

By definition, a monolith has full knowledge of the entire system. Therefore, in most cases, a developer working on a monolith also requires full knowledge to work on that project efficiently and effectively.

The developer needs this knowledge to make correct decisions that relate to the clear-cut separation of responsibilities between different areas of the code-base. When all of your classes are running ‘alongside each other,’ it is easy to make the wrong decision as to what should be done and where.







![](https://cdn-images-1.medium.com/max/2000/1*q4Yqv1ZGAPYVWz5oAuUgMQ.jpeg)







### Our solution

Based on our hypothesis, we concluded that the current system was unsalvageable, and that a full rebuild under a service design pattern would produce a system that avoided the various issues we identified.

We created a matrix outlining what we wanted to achieve with the new system:



![](https://cdn-images-1.medium.com/max/1600/1*-Zp0-BsSvBmr7dui3TXXIA.png)



**Developer Experience (DX)** defines the first half of our matrix. The desired calibre of developers we want are those looking for an opportunity to work on things they enjoy and are challenged by. To create a great DX, our code base needed to provide an ecosystem that talented developers would find engaging, while avoiding the pitfalls we had experienced in monolith design.

**Product Delivery** shapes the second half of our matrix. The phrase _‘content is king’_ still holds true, but the performance of a website has also become a major factor from both a user perspective and search engine perspective. Fostering great DX was important, but it was _imperative_ that the new website performed better for our users.

Here is a breakdown of the four main components of the matrix and what we aimed to achieve.

#### Agility

> Complexity kills. Complexity sucks the life out of users, developers and IT. Complexity makes products difficult to plan, build, test and use. Complexity introduces security challenges. Complexity causes administrator frustration. And as time goes on and as software products mature — even with the best of intent — complexity is inescapable. **— **[**Ray Ozzie**](https://en.wikipedia.org/wiki/Ray_Ozzie)

> Solution: Reduce Complexity = lower financial cost, greater DX, lower learning curves.

Complexity within a system behaves like a virus. The more complexity that is present, the more it grows. Reducing and segregating complex parts of the system stops more complexity from growing in other areas.

Service-based design can quarantine the virus. A monolith facilitates the spreading of complexity. (During the initial development of the new system, [Conway’s Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) served as a good reminder of this fact).

When the code is simple, it is easier to make it efficient and effective at what it does and more enjoyable to work on. The ‘art’ of the developing becomes the output, not the code itself.



![](https://cdn-images-1.medium.com/max/1600/1*n8T59HUYOr7pTyGppZkFZQ.png)



Separating out areas of concern into system level boundaries (which services do) means developers no longer need full knowledge of the entire system to work on it effectively. They are given a defined interface (for example, a HTTP API, socket or AMQP message) at a _system level_, not a language level, and can be assigned actual responsibility for that service.

This separation means a developer who is given responsibility for a service can effectively change the underlying technology (such as what language, OS or persistence technology is used) without other team members knowing. This allows for performance trials and deep dives and prevents the need to up-skill the whole team to account for changes.

The reduction of complexity and segregation that results from service design creates a code-base with a high agility factor. New developers can be committing on their first day, because reading and understanding the entire code base at a service level typically involves a few hundred lines of code.

#### Stability

> Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves. **— **[**Alan Kay**](https://en.wikipedia.org/wiki/Alan_Kay)

> Solution: Minimize and mitigate dependencies = lower exposure to industry volatility and breakages, increased management ability and greater DX

The volatility and rate of change in the software industry surpasses most other industries, yet most people in the software industry choose to accept these risks rather than mitigate them.

A number of wide scale breakages resulting from a lack of mitigation of upstream changes have already occurred this year (see [here](https://medium.com/@azerbike/i-ve-just-liberated-my-modules-9045c06be67c) and [here](https://medium.com/@xzyfer/why-node-sass-broke-your-code-and-semver-1b3e409c57b9)).

Service design fosters greater separation, specificity, and the appropriate use of dependencies. This allows planned integration of upstream changes— not just when your CI breaks.

Using third party code (especially with standard package workflows such as npm et. al.) is the same as giving developers outside of your team write access to your code-base without the normal vesting such as PR’s or reviews. The inclusion of third party code needs to be given good cause, carefully chosen and then committed to. Better managing dependencies means that your team can focus more on building, not retrofitting.

#### Scalability

At a sysops level, it is well known that service design enables more manageable scalability compared with monoliths. It is common for teams to migrate from monolith design for this reason.

What isn’t so apparent before this transition is the resource unit cost reduction that occurs with service design, even on systems that don’t need to scale with demand.

Many hosts have greater resource unit costs for larger machines (i.e. $80 will buy 8GB 4 cores 80GB if buying one instance, or 8GB 8 cores 240GB if buying eight $10 instances).



![](https://cdn-images-1.medium.com/max/1600/1*YvwZvdlYnYXedDvOlyDc0g.png)



This cost reduction comes with the benefit of higher reliability, because service design offers better scope for state management. For example, if a service crashes, your entire system doesn’t go offline— everything continues and that service is restarted and re-added to your cluster.

#### Site Speed

A very common mistake was made on our previous monolith site. Our view layer was split across two different technologies : Server-side PHP templates and front end JavaScript. Under these circumstances there were multiple rendering processes that had to take place on both the client side and server side for every page view.

This added a ton of complexity for developers and also slowed the site considerably.

> Solution: Implement classical client-server software design, make the client self sufficient and use the server only for persistence.

From a model-view-controller perspective, implementing classical client-server software design means your view layer is very well defined and encapsulated into a single area of concern.

Great front end frameworks have become available in recent years which enable this to be done simply and easily.

On most websites, almost everything required to display a page is delivered repeatedly (HTML structure, CSS, JavaScript) and the server typically acts as the part that populates the data within the HTML structure. It is more logical to deliver the static requirements once, then let the client populate the HTML with the data.











* * *







### What we’ve learnt so far

Internally we believe we have delivered exceptionally well on the four components of our matrix. **In future posts I will be exploring each one separately in more detail and sharing some metrics**. In the meantime, here are a few key points we’ve taken away from the process:

#### Build a circus, not an orchestra

A monolith requires your entire team to be working in the same code space at the same time in a coordinated fashion. Picture an orchestra: A mistake by any member will affect the performance of the entire team.



![](https://cdn-images-1.medium.com/max/1600/1*ASUYbubS4gA0zd0kFMNEjg.png)



Instead, make your tech production about giving your developers the space they need to do what they do best. Service design allows you to create a set of well performed, isolated ‘acts’.

#### Think like a bank broker, not a bower bird

Upstream dependencies, third party code and tooling can have quick returns but always come with a multitude of implied risks while writing your own ‘fit for purpose’ code will give you more efficiency and lower levels of risk. Continually picking up and collecting dependencies like a bower bird increases your exposure to these risks.

Instead, think like a bank broker and only choose the safest ‘stocks’ with good ‘returns’ to limit and mitigate your exposure wherever possible.

#### Services act the same as well defined classes

The behaviour of a service is synonymous with a class within a monolith code-base. They have a public interface, they are constructed with their required dependencies and encapsulate their own data and control its access.

However unlike classes that run along side each other, it is more difficult for a developer to simply change the design of an interface to suit their needs in a given context. This constraint fosters stronger, interface-centric design which in turn leads to more predictable, higher quality code.

#### Server-side rendering is the inverse of typical software development practice

Like applications that run on your computer, gaming console or devices, servers act as a central persistence layer, not the renderer. Rendering the view on the server-side is a throw back to the earlier days of the internet where servers delivered static files. This practice has propagated to today’s web due to the server-only language preferences of web developers.

The web browser is a smart, powerful, perfectly scalable and free-to-use resource. Make use of its full potential by producing ‘native’ web pages that run in the browser, not on your server.











* * *







### Postscript

If you enjoyed this article, please hit the **heart button** below to promote further conversation.

I am CTO at [Deckee](https://deckee.com) — we help the boating communityfind, share and discuss the things they love.

Deckee is an affirmative action employer and we are always on the lookout for likeminded, audacious developers. Please ‘**inspect**’ our site for more details.








