---
author: Jonathan Solórzano-Hamilton
authorTwitter: https://twitter.com/jhsolor
authorFacebook: none
title: "How to run a successful development process (even if you’re not technical)"
subTitle: "Laurence Peter formulated the principle that “managers rise to the level of their incompetence” in 1969. In particular, non-technical lea..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*SbbrnjE8bpHcyPXXx-9iKw.png
url: https://medium.freecodecamp.org/how-to-run-a-successful-development-process-even-if-youre-not-technical-185d0558c89a
id: how-to-run-a-successful-development-process-even-if-youre-not-technical-185d0558c89a
date: 2017-10-12T14:54:04.997Z
tags: [
  "Tech",
  "Software Development",
  "Agile",
  "Management",
  "Business"
]
---
# How to run a successful development process (even if you’re not technical)







![](https://cdn-images-1.medium.com/max/2000/1*SbbrnjE8bpHcyPXXx-9iKw.png)

Wouldn’t that be greeeeeat… (Office Space, 1999)







Laurence Peter formulated the principle that “[managers rise to the level of their incompetence](https://en.wikipedia.org/wiki/Peter_principle)” in 1969\. In particular, non-technical leaders have earned a poor reputation with software developers.

Office Space depicts the non-technical manager in Bill Lumbergh, pictured above. Dilbert provides the classic “Pointy-Haired Boss.”

This article is for anyone who wants to effectively orchestrate a development process without becoming the butt of your team’s water-cooler jokes. I’ll share what I’ve learned over the years managing development and release processes as a manager and software architect at UCLA and Stanford University.

The biggest lesson I’ve learned is that the key to sustaining successful software releases is **completely non-technical**.

It’s about **process**.

Some aspects of a development process benefit from technical know-how, but it’s not required. Successfully releasing software into production is much more a question of robust process architecture than design or code alone.

For the purpose of this article, we’ll assume you’ve already agreed to start building something. The product approval pipeline is a different process. Today we’re focusing on getting the agreed-upon product from concept to production.

#### What to build

Your team needs to assemble a clear roadmap for their code. Architects and manufacturers use blueprints. You should too.



![](https://cdn-images-1.medium.com/max/1600/1*SVV-3UmH0oTg-8RZAc-aow.jpeg)

Should I use these plans or just wing it? Hmm… ([source](http://www.energepic.com/manager-processing-his-new-project/))



Your roadmap should include a set of schematics which each fulfill a different purpose. These schematics differ for individual applications. A user-interface mock-up, application architecture diagram, and business process model are common. More detailed component diagrams such as [Unified Modeling Language (UML) diagrams](https://en.wikipedia.org/wiki/Unified_Modeling_Language) and flow models are often useful as well.

Technical expertise lets you use these schematics to critique your team’s architecture and ensure they’re on the right track. Even without technical skill, these schematics will be critical.

You can use them to drive productive conversations about product completion. No more will you have to draw a “% complete” out of thin air or best-guess from the development team. You can track the status of each item on the diagram to determine how close the app is to completion. You can also project future velocity based on how quickly the team completed prior components.

There is no “right” amount of pre-development documentation, but there is one wrong amount: none. Work out with your team what constitutes an acceptable roadmap before they start coding. The **first checkpoint** in your development process will be to review this documentation and ensure they’ve met this agreement.

#### What not to build

Your team can’t build everything. Nor should they. You need to ensure that your developers have a laser focus on what they actually need to build.

Why are you building this app in the first place? Define the key differentiation from existing products. 80% of your team’s time should go toward supporting that differentiation.

The schematics you should now have will be helpful here. Does your application include a logging component? A sign-up and login process? There are already excellent free, open-source software (FOSS) frameworks in most languages for these components. Some are available under extremely permissive licenses.

Tesla provides a great illustration of this concept. Their first key differentiator was to use a lithium-ion battery to make electric cars competitive with gas. Lithium-ion achieved this by reducing battery weight and increasing range.



![](https://cdn-images-1.medium.com/max/1600/1*E1_FcZisPh6RgKNb0-sgwQ.jpeg)

Eventually Tesla moved on to building out whole infrastructures to support their cars, like this “Supercharger” station… but not before they perfected their differentiating initial product ([source](https://pixabay.com/en/tesla-supercharger-battery-eco-1724773/))



The first Tesla prototype simply converted a pre-existing electric sports car from lead-acid to lithium batteries. Their first production run was mostly a Lotus Elise roadster (a pre-existing sports car) that had a Tesla battery and motor.

The lesson for your team is to **use what already exists** wherever possible. If you can use or adapt a FOSS package, do it. Even if you need to license for-pay code from somewhere else, it’s almost always worth it.

Get all the scaffolding in place quickly so you can test **your** “lithium-ion battery.” Then you can iterate through and replace whatever will help further differentiate your product without stressing about delaying production-readiness.

The **second checkpoint** of your development process is to review the planned architecture with your team and identify what very limited part they intend to build from scratch.

If it sounds like something that already exists, and it’s not the core focus of your product, challenge your team to see why they believe they need to re-do it.

#### Don’t just throw it over the wall



![](https://cdn-images-1.medium.com/max/1600/1*hVlFP0f2N_2Gpd96H3n1pw.jpeg)

Too often, development teams “throw the release over the wall” when their work is done and walk away. Post-release bugs are for the support team to deal with. ([source](https://pixabay.com/en/brick-wall-clinker-bricks-1747314/))



Once you have identified what pre-built technologies you’ll use, make sure to review these with your production support group.

Database and server administrators will need to plan for installing and supporting any new technologies. This is the **third checkpoint** in your development process: operations readiness.

Keeping the production support team in the loop early is 90% of the secret sauce known as “[DevOps](https://en.wikipedia.org/wiki/DevOps).” If you haven’t heard of this, DevOps is the idea that software development and production operations teams should unify under common goals.

The proposed benefits include much quicker releases, more reliable code, and more time spent developing due to automation. These are all great boons, but they follow from a strong communication process. Automation follows, not replaces, collaboration.

#### Implementation and Testing

Now your team writes the code. Collaborate with your implementation team to devise a process for dividing the work among themselves. There’s no one-size-fits-all approach, and this is where the “soft skills” of leadership dramatically outweigh any technical skill.

Some developers will want to hog all the “interesting” work and ignore any drudge work. They may believe that they’re the smartest person in the room and should get their pick of assignments. Others may resist change and only want to do the same kind of work they’ve done before.

Lead your team into an equitable distribution of work. Challenge everyone to grow appropriately and to share and collaborate.

One more technical aspect of the implementation is that the code must include sufficient automated tests. These are code-defined tests that a test system can execute.



![](https://cdn-images-1.medium.com/max/1600/1*InN1fj_L0x5rCqLbQUcE6w.jpeg)

If the code’s going to crash, don’t you want these guys’ resumes to be on the line instead of your own? (public domain: US Government photo)



Manual “test scripts” where a human interacts with the code to see if it works are insufficient and reflect [technical debt](https://guide.freecodecamp.org/agile/technical-debt). Your technical team should at least include [unit tests](https://guide.freecodecamp.org/software-engineering/unit-tests/). [Test-driven development](https://guide.freecodecamp.org/agile/test-driven-development/) is a popular approach for ensuring that critical code is always tested.

You can drive a non-technical conversation with your team about their “test coverage” (the portion of the code that is tested). It’s pretty simple: ask them to list their assumptions. Then ask where and how they test these assumptions.

The **checkpoint** at which the code is believed complete by the developers is referred to in my shop as dev-complete**.** It means the primary development (dev) process is over, but additional code may be written to address issues that come up in the review process.

In an [agile](https://guide.freecodecamp.org/agile) development process, you will typically divide the implementation process into multiple checkpoints instead of one all-or-nothing deadline. These are typically called iterations.

Refer to the roadmap you defined in the first step. Before starting new component(s), ensure that what you’ve already started is at least dev-complete. This provides you with an accurate view of the speed of development and reduces risk.

As you complete the iterations, you can push the code to an environment for “acceptance testing.” This involves pilot or test users (or an internal team playing that role) who interact with the partial product. They test to ensure it meets the design expectations and provide feedback on how it could be better.

Acceptance testing is not a substitute for the unit testing mentioned earlier. It serves a different purpose. Letting your development team lean on acceptance testing to catch basic functional bugs is a recipe for disaster.

Feedback from the acceptance testers can be incorporated into the next iteration. This is another good reason not to bite off a big chunk of the product all at once. You want to leave room to change course once people start playing with the product.

Once you’ve accumulated enough tested code to constitute a sufficient product release, you’re ready to begin the release management process.

#### Looking for bugs in all the right places



![](https://cdn-images-1.medium.com/max/1600/1*yHBuv15Bk40zSKxZmglH-g.jpeg)

The bug has to be in here somewhere… ([source](https://pixabay.com/en/manuscript-magnify-glass-glass-1614234/))



Your developer or team has reached a point where they believe the code is done. Acceptance testers are satisfied with the way the product is working. The **next checkpoint** in the process is to validate the belief that you have code ready to become a product. Let’s start reviewing the code!

You may not be comfortable or have sufficient technical know-how to review the team’s code yourself. That’s ok! You don’t have to. Your process has to.

Work with your team to identify a process for code review that works for them. If you have more than one developer, peer code review works great. If you don’t, are there other developers in your organization outside of your team? Work across team boundaries to establish a peer code review program.

If there really is only one developer, then sit down with them and have them walk you through the code. Use your schematics as a reference point, and ask them to tell you how the code accomplishes the schematic’s goals.

At the conclusion of the code review process, the developer and reviewer(s) should feel comfortable with being held accountable for the code.

The code review is also a good time for reviewing two other critical points: documentation and security.

I’ve [already written about a sustainable documentation architecture](https://medium.freecodecamp.org/our-team-broke-up-with-instant-legacy-releases-and-you-can-too-d129d7ae96bb) — check it out if you’re interested!

Security review should be a part of any code review. In general, this involves taking a second look at the code to spot weaknesses where an attacker could exploit it to reveal private data or gain control of the server. It must be done by a technical person.

The Open Web Application Security Project (OWASP) publishes a [free comprehensive guide](https://www.owasp.org/images/2/2e/OWASP_Code_Review_Guide-V1_1.pdf) to security review.

Your developer can do this if they’re the only one on the team, even if they just run an automated security code analysis tool. There are free tools for helping with this process which are [linked through the OWASP wiki](https://www.owasp.org/index.php/Static_Code_Analysis).

#### Eject, eject, eject!

The code has passed the review process. It’s ready to become a product. But that doesn’t mean it’s ready for production.

The **last checkpoint** to clear is deployment readiness. Is your code in a state where it’s easy to deploy to production? This should involve as few manual steps as possible.

It also means you need to have a plan for reverting the change in case the code doesn’t work as planned. This is called a “rollback plan.”



![](https://cdn-images-1.medium.com/max/1600/1*WZQwvdS85BVrCX9xhpLalg.jpeg)

Not all production code stays in production… ([source](https://en.wikipedia.org/wiki/Lockheed_S-3_Viking#/media/File:S-3A_escape_sys_China_Lake_NAN1-72jpg.jpg))



If you have a separate software operations team, this is where they come back into the picture. They should review the deployment and rollback documentation and let you know if it’s sufficient.

If you don’t have these personnel you can perform this step yourself. Make sure that there are clear, simple instructions for deploying the product. There should be very few manual steps, as each manual step introduces a chance for human error.

There should be a clear, sufficient plan for returning to the prior state of affairs if the deployment doesn’t succeed. This may be as simple as restoring a backup, or it may involve customer communication or data conversion.

Whether the plan is sufficient depends on how thoroughly your team tested the code, and how widely the product is being released. Consider also any risks associated with the product or with this particular release.

Once you’ve passed this checkpoint, push that code into production!

#### Post-release

Succeed or fail, it’s important to circle back and review how the process went.

Did your team accurately estimate the effort required to release a product? Did the testing adequately model the production scenario? Revisit the implementation and testing checkpoints, and review how well the team performed.

How is the product running in production? It’s a good idea to visit the operations staff and obtain their feedback. This further creates trust between the development and operations teams, and will lead to more DevOps benefits down the road.

Where are the remaining gaps in your product? If they’re in third-party code, now’s the time to consider whether to customize your packages or re-implement from scratch. Otherwise, you now have input on what to build for the next release.

Above all, hold yourself and your team accountable for the results of your effort.

Accountability facilitates independence and promotes individual growth. As your team grows accustomed to being held accountable for each step in this process, they’ll adjust their performance accordingly.

#### Conclusion

You don’t have to be the least bit technical to run a successful software release process. Technical skill can help, but it can also become a crutch.

The key to successful software release is a well-documented, well-understood process for moving software through the pipeline from idea to product. You now have a starting point for drafting your own software release process.

What’s most important is that you participate with your team in filling in the blanks and creating a repeatable process that works for all of you.

It doesn’t have to be perfect for anyone, but it does have to be understood by everyone.

You also need to ensure that the velocity of your product through these checkpoints matches the demand for the product. None of these items need to be multi-day show-stoppers. It could be a simple one-page checklist. You need to define a process that fits your environment.

As with any process, you should also iterate. Just like with the code, your first, untested draft isn’t likely to be perfect. Tune the process on each run-through and you’ll end up with a smooth, predictable software release path.

And remember to brush your hair. You don’t want it looking…pointy.

If you liked this article and would like to read more like it, please 👏 to let me know! If there’s more you want to know about enterprise application development processes, please respond below. I’m happy to share what I’ve learned on my team’s journey!











* * *







You may also enjoy my other articles on the business process of software development:

*   [What you’re missing by skipping the checklist](https://medium.freecodecamp.org/what-you-missed-because-you-were-too-cocky-to-use-a-checklist-c30c3ad663c2)
*   [How we re-organized ourselves into a more professional development shop when we lost our lone wolf guru](https://medium.com/@peachpie/life-after-rick-our-team-reborn-after-the-fiery-departure-of-our-misanthropic-guru-b1fbaf3b8621)











* * *







Jonathan is the Assistant Director of Architecture and Operations at UCLA’s department of Research Information Systems. He earned a Physics degree from Stanford University and has since spent over 10 years working in information systems architecture, data-driven business process improvement, and organizational management.








