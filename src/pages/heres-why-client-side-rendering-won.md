---
author: Cory House
authorTwitter: https://twitter.com/housecor
authorFacebook: none
title: "Here’s Why Client-side Rendering Won"
subTitle: "A decade ago, nearly everyone was rendering their web applications on the server using technologies like ASP.NET, Ruby on Rails, Java, an..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*w7wu8p5kO8mYGGedd-zOZg.png
url: https://medium.freecodecamp.org/heres-why-client-side-rendering-won-46a349fadb52
id: heres-why-client-side-rendering-won-46a349fadb52
date: 2016-12-12T05:45:25.260Z
tags: [
  "JavaScript",
  "Web Development",
  "React",
  "Angularjs",
  "Programming"
]
---
# Here’s Why Client-side Rendering Won







![](https://cdn-images-1.medium.com/max/2000/1*w7wu8p5kO8mYGGedd-zOZg.png)







A decade ago, nearly everyone was rendering their web applications on the server using technologies like ASP.NET, Ruby on Rails, Java, and PHP.

Then handy libraries like jQuery showed up, and suddenly server-side rendering everything didn’t necessarily make sense anymore. jQuery was followed by a long list of client-side libraries like Backbone, Knockout, Angular, Ember, and React. With each iteration, client-side rendering grew easier and more powerful.

This style goes by many names: Single page apps, SPAs, [JAM stack](https://jamstack.org)…call it what you will. The point is, today, client-side rendering has become the de-facto way to build rich web applications…But why?

#### Hey Everyone, Let’s Do It The Hard Way

There’s no denying that client-side rendering is harder to do _well_. You have to think about bundling, transpiling, linting, cache busting, [and so much more](http://bit.ly/jsdevenv). Doing client-side right is so hard that I walk through over 40 decisions you need to make to get all this right in [my new Pluralsight course](http://bit.ly/jsdevenv).



[![](https://cdn-images-1.medium.com/max/1600/1*gh1iUc_CnNkJQYPxA-q54Q.png)](http://bit.ly/jsdevenv)

Just a few reasons client-side development is challenging.



So why are we subjecting ourselves to such pain? Because client-side rendering offers a long list of benefits that server-side rendering just can’t touch.

Here’s why client-side rendering won.

#### No Full Page Reload Required

With traditional server-side rendering, the server responds by generating and returning a completely new page for every interaction. This often slows load time, uses more bandwidth, and creates a less responsive user experience.

Client-side rendering avoids making unnecessary requests for a full page when only a portion of the page has changed. This is especially helpful in a world that’s increasingly browsing via mobile networks with high latency.

#### Lazy Loading

Client-side rendering supports lazy loading sections of your application to save bandwidth & speed initial load. For example, you can load additional records, images, and ads as the user scrolls down, or as the user changes their search parameters, all without performing a full postback.



![](https://cdn-images-1.medium.com/max/1600/1*JuR88JoXHRSiGne-7k2XkQ.jpeg)



#### Rich Interactions

Client-side rendering supports rich, animated interactions, transformations, and transitions. Fade a row out on delete, or fade a dialog into view. Sure, you can sprinkle such goodness into a server-rendered application, but this often leads to maintaining the same template on both the client and the server, or managing the complexity of weaving JavaScript interactions in with a server-side framework.

#### Cheap Hosting

Hosting static files is typically cheaper than hosting traditional server-side technologies like ASP.NET, PHP, or Ruby. You don’t need much horsepower to serve a static file. Serving static files is so cheap in fact, that a variety of solid free options exist including [Surge](http://surge.sh), [Firebase](https://firebase.google.com), and [Netlify](https://www.netlify.com).

#### Use a CDN

A static front-end can be hosted via a content delivery network (CDN). CDNs deliver improved performance by globally distributing assets as well as improved scalability by removing load from your webserver. The aforementioned static hosts utilize a CDN.

#### Easy Deployments

Static files are easy to deploy. You don’t necessarily need to perform a monolithic build to generate new binaries when a small change occurs. And with some of the aforementioned services like Surge and Netlify, you can easily create automated deployments via their provided CLIs. When you do so, you don’t risk breaking any of your back-end - it’s handled completely separately.



![](https://cdn-images-1.medium.com/max/1600/1*C1P0N253ts3T6vfiNlr5Pw.jpeg)

Easy automated deployments? Yes please.



#### Enforced Separation of Concerns

Many teams struggle with keeping data access and business logic out of the user interface. With client-side rendering, separation of concerns is programatically enforced. There’s no way to directly hit the database. You have to make a call to a separate service. This helps foster a service-oriented mindset on development teams since there’s no way to make a short-cut and call the database directly from the UI.

#### Learn Once, Write Everywhere

Imagine you’re a new graduate. What is the only language that will allow you to build web applications, APIs, mobile applications, and desktop apps? JavaScript. Increasingly, that’s precisely what new grads are reaching for. Why should a new grad learn a dedicated server-side technology when JavaScript runs everywhere?

This is why it will continue to swallow the world.

JavaScript is like Visa. It’s everywhere you want to be.



![](https://cdn-images-1.medium.com/max/1600/1*2did013Zv3BW5CBhFxjpXg.png)



#### Same UI Technology for Web, Native Mobile, and Desktop

Imagine you want to build a SPA-style web application, a native mobile app, and a desktop app. Today’s modern JavaScript frameworks allow you to use the same UI technology for all three scenarios.

For instance, you can use Angular, Ionic, and Electron, to work in Angular for all three targets. Or, you can use React, React Native, and Electron to work in React for all three targets. And the resulting applications will run on iOS, Android, Windows, and macOS. Sure beats learning Objective-C, Swift, Java, C#, WPF and more to support all these platforms!



![](https://cdn-images-1.medium.com/max/1600/1*UwfohjFF5hZSUzDptGoTIQ.jpeg)

I’m pretty sure these umbrellas spell JS. Somewhere.



**Edit** — I had a point here about Progressive Web App support but was incorrect. You don’t need to do client-side rendering to build a PWA.

#### So. Much. Free.

JavaScript moves so fast that the hardest part of client-side rendering is choosing how you’re going to get it done. The number of free options is simply overwhelming and growing fast.



[![](https://cdn-images-1.medium.com/max/1600/1*32wa76FqCIhUif5qPIxAOw.png)](https://app.pluralsight.com/library/courses/javascript-development-environment/table-of-contents)

#firstworldproblems



Yeah, it’s a great problem. And there’s no need to pay for the libraries, frameworks and editors your team needs. I walk through and set up dozens of useful free tools in “[Building a JavaScript Development Environment](http://bit.ly/jsdevenv)”. ([free trial](https://www.pluralsight.com/pricing))

### Does Server-Side Rendering Make Sense Anymore?

Sure. But in far fewer situations than before.

If you need interactivity and can’t rely on JavaScript, then obviously client-side rendering is out.

If you’re building a mostly static site, server-side rendering might be easier. Though awesome tools like [Jekyll](https://jekyllrb.com), [Gitbook](https://www.gitbook.com), [Gatsby](https://github.com/gatsbyjs/gatsby), and [countless alternatives](https://www.staticgen.com) are encroaching on this area too. And since tools like these just generate static HTML, you don’t have to worry about SEO impacts either.

SEO is a common selling point for server-side rendering, but the advent of isomorphic/universal rendering in libraries like React has addressed this concern as well. Universal rendering used to be hard, but modern tools like [Zeit’s next.js](https://github.com/zeit/next.js) finally make this trivial as well!

Given all the advantages above, I struggle to find good reasons to do traditional server-side rendering anymore.

Sure it’s still hard to do well. But for all the reasons above, client-side rendering won.











* * *







[Cory House](https://twitter.com/housecor) is the author of [multiple courses on JavaScript, React, clean code, .NET, and more on Pluralsight](http://pluralsight.com/author/cory-house). He is principal consultant at [reactjsconsulting.com](http://www.reactjsconsulting.com), a Software Architect at VinSolutions, a Microsoft MVP, and trains software developers internationally on software practices like front-end development and clean coding. Cory tweets about JavaScript and front-end development on Twitter as [@housecor](http://www.twitter.com/housecor).








