---
author: Trey Huffine
authorTwitter: https://twitter.com/TreyHuffine
authorFacebook: none
title: "What is technical debt? And why does almost every startup have it?"
subTitle: "Technical debt is any code added now that will take more work to fix at a later time — typically with the purpose of achieving rapid gain..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*BefRx92AZqpvYnK8qbQekw.jpeg
url: https://medium.freecodecamp.org/what-is-technical-debt-and-why-do-most-startups-have-it-9a54458daabf
id: what-is-technical-debt-and-why-do-most-startups-have-it-9a54458daabf
date: 2017-10-16T06:49:12.511Z
tags: [
  "Tech",
  "Startup",
  "Life Lessons",
  "Entrepreneurship",
  "Technology"
]
---
# What is technical debt? And why does almost every startup have it?







![](https://cdn-images-1.medium.com/max/2000/1*BefRx92AZqpvYnK8qbQekw.jpeg)







Technical debt is any code added now that will take more work to fix at a later time — typically with the purpose of achieving rapid gains.

But what does that mean?



![](https://cdn-images-1.medium.com/max/1600/1*mOkmsSxjdGpDd1EHQqdB8Q.jpeg)



Technical debt is like any other kind of debt. Let’s compare it to buying a house. Most people don’t have hundreds of thousands of dollars in the bank to buy a house. Thus, people take out a mortgage. Buyers have to repay it over the next 15 to 30 years with interest added. If buyers don’t pay their mortgage on time, then they lose their houses.

Technical debt is no different. It allows companies to create software faster, with the understanding that they will slow down software development in the future. Companies will eventually be forced to spend more time fixing the debt than the amount of time it took them to produce the best solution at the beginning.

The optimal solution to any software engineering problem typically requires a large investment up front. It takes more time to write code without getting results, and it is done before the robust and scalable results are actually realized.

Technical debt can create a grueling experience for developers and inhibit long-term scalability. But nearly all startups incur technical debt. Many use it as a catalyst for short-term growth. So technical debt isn’t always a bad thing.

### How can you tell if something is in technical debt

Technical debt isn’t just some abstract concept. It can be explained in concrete terms and depicted graphically. A great analogy (don’t hate me for this one) is [Big O algorithmic complexity](https://stackoverflow.com/questions/487258/what-is-a-plain-english-explanation-of-big-o-notation). As the size of a code base increases, we can measure the effort required to add new features and/or code.



![](https://cdn-images-1.medium.com/max/1600/1*6U_NG4w6g6YYyxPyG9Io_g.png)



Anything above the blue linear O(n) line is technical debt, and anything below it is not. This means technical debt makes writing code increasingly difficult because more code is added.

The scalable solutions below the blue line are typically abstractions, libraries, and tools that make building software easier. Examples of this can range from building application-specific features like internal dashboards to utilizing libraries and tools like React or Docker (imagine how painful it would be to rebuild them for every project). The right tools and abstractions can impact multipliers, while technical debt is an impact divider.

As the graph depicts, technical debt can initially be the optimal path, but it needs to be refactored quickly if the application feature is to be successful. This supports the startup concept of launching ideas quickly as an MVP, and then rapidly iterating and improving them.

First figure out which ideas gained traction, and then iteratively build them in a way that they can become scalable. A feature can launch by imposing `O(n²)` complexity on the code base (technical debt), but can be refactored to `O(n)` and `O(log n)` over time. The `O(log n)` allows one person or a small team of people to produce the same output as a larger team building in a brute force manner.

After reaching a sufficient company and code base size, you’ve reached a point that I’ve defined as the scalability threshold. At this point, the tools you have built versus the reward that it yields requires less effort than the linear approach. You should no longer build on top of the linear approach after crossing this threshold. Instead, invest in code that will allow you to produce more results while requiring fewer people and less effort.

Theoretically, the linear `O(n)` solution is not technical debt. For every additional man hour you add, you will receive an equivalent payoff. However, this doesn’t always work in practice. Time, money, and human willpower are all limited resources. You will eventually hit a limit to the number of people you can hire. And workers burning out on repetitive tasks is a real concern. Software solutions that appear to scale linearly become technical debt when it requires people to build them.

### A real world example

Imagine you’re building a revolutionary new service, called Citybrook, that create profiles for cities. Identify five key markets that interests you, let’s say San Francisco, Seattle, Austin, New York, and Nashville. Build some simple webpages using plain HTML and CSS, and then find a fit for the product in the market.

Assume that users love the content. All cities in the U.S. are begging you to build pages built for them. You also realize your Amazon Web Services (AWS) bill is going to sky rocket because of all the traffic you are receiving. So you start placing ads on each webpage by pasting links for different merchants for the different cities. You quickly realize that the simple HTML solution isn’t going to scale. It’s an `O(n²)` complexity because you can’t feasibly build and maintain an HTML page with unique content for every city.

To solve this problem, you use [React](https://reactjs.org/) to template your pages and to render dynamic content. At this point, you’ve reduced the technical debt and made it more feasible to scale your company. You can now allocate time to generate content as opposed to building a unique page for every city.

You work long hours with your team, with the goal to create a profile for each city within a few months. However, you’ve become a victim of your own success. Competitors in other countries start to launch their websites, but you don’t have the capacity to expand.

Instead you try to hire quickly, but you can’t keep up. Some cities are requesting that their content be changed, but advertisers can’t afford your fees with the increased traffic, so their advertisements need to be swapped out. Manually creating and updating the profile for every city no longer makes sense. There just isn’t enough manpower to keep up with the scale.

Thus, you decide to build a dashboard to allow cities to create and update their own pages. The total number of profiles on the site temporarily stops growing during development, but based on your popularity, you’re not losing any customers. Once completed, it requires only minimal effort to add a new city. Instead of spending many hours writing content, your team only needs to maintain and build the tool to empower your clients.

The larger your team grows, the more ability (and obligation) you have to write bulletproof code and pay back the techical debt that allowed you to scale to the size that you have achieved.

Technical debt multiplies other technical debt. Building on technical debt and/or adding more debt typically causes an exponential growth in bad code. This means adding more features makes it increasingly hard to pay back the debt.

### When is tech debt acceptable?





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/4614288fcd85ac94ad5b7ac4a49c5b89?postId=9a54458daabf" data-media-id="4614288fcd85ac94ad5b7ac4a49c5b89" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1824002576%2Fpg-railsconf_400x400.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Customers don’t care what your code looks like. They just want your product. A single perfect feature that was never released and failed is worth nothing compared to a scrappy startup that has a handful of features that users gravitate towards.

This thriving startup can then iterate on the features that gain traction and refine them to become more scalable. Once the scrappy startup finds success, they can then build their engineering team and pay back the technical debt. This will position them for future success.

The return from the technical debt must be higher than the debt itself. That is, whatever it is that you’re able to achieve by acquiring the debt, it must have a greater impact than the debt itself.

Technical debt is not an excuse to be lazy. It should be used tactically with a long-term vision in mind. Startups should move quickly and test their ideas in the marketplace. Once they validate an idea, they should seek to understand the problem and the proper abstractions to scale it. Companies should then pay back their technical debt.

Contrary to popular belief, acquiring technical debt may actually be the optimal decision in many instances. Facebook’s motto for a number of years was “move fast and break things.”

[Acquiring technical debt](https://www.reddit.com/r/programming/comments/3r90iy/facebooks_code_quality_problem/) is a huge factor in Facebook becoming the juggernaut that it is today. But it also poses a problem in that Facebook is difficult to be maintained at its scale. The reason that it worked is that they were able to scale more quickly than the debt that they acquired.

Don’t take on technical debt for the sake of doing so. It takes experience, mistakes, and communication to keep the technical debt on track. However, understand that managing it correctly can be a powerful catalyst for growth. Many times, technical debt is the best path forward. Until it’s not.

At that point it can become the biggest impediment to progress.

Understand it, control it, and use it as a tool, and it will help you build your startup.











* * *







_If you find this article helpful, please tap_ 👏_._ [_Follow me_](https://medium.com/@treyhuffine) _for more articles on React, Node.js, JavaScript, and open source software. You can also find me on_ [_Twitter_](https://twitter.com/treyhuffine) _or_ [_gitconnected_](https://gitconnected.com/treyhuffine)_._

[**gitconnected - The community for developers and software engineers**  
_Join the only network built for developers. Display your portfolio, engage in discussions, and post trending news._gitconnected.com](https://gitconnected.com "https://gitconnected.com")[](https://gitconnected.com)








