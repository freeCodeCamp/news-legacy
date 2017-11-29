---
author: Stefan Tilkov
authorTwitter: https://twitter.com/stilkov
authorFacebook: none
title: "Why I hate your Single Page App"
subTitle: "Okay, now that I have your attention, let me say that I don’t really hate your single page app. I just find it highly annoying, unless it..."
coverSrc: placeholder
url: https://medium.freecodecamp.org/why-i-hate-your-single-page-app-f08bb4ff9134
id: why-i-hate-your-single-page-app-f08bb4ff9134
date: 2016-01-13T19:33:51.946Z
tags: [
  "JavaScript",
  "Web Development",
  "Technology",
  "Tech",
  "Design"
]
---
# Why I hate your Single Page App

Okay, now that I have your attention, let me say that I don’t really hate your single page app. I just find it highly annoying, unless it is one of the very, very few exceptional cases that actually merit being developed in this style. As those are few and far between, it’s a fair assumption yours doesn’t qualify.

Maybe your single page app is different, but the ones that I know break most of my browser’s features, such as the back and forward buttons, page refresh, bookmarking, sending a link, or opening a link in a new window or tab. They offer no way to link to something that I look at. (Oh, I know there are exceptions to this rule, but they typically require effort — a lot more than many developers are prepared to invest). They are bloated and slow to load, even though the actual information they display and the interaction they offer is very simple.

Am I just an old, grumpy guy? Yes, but that’s beside the point. My point is that from an architectural perspective, most single page apps are the result of making the wrong choices and missing important opportunities.

My main beef with single page apps, or SPAs for short, is that they’re not “on the web”. In that regard, they are very similar to a SOAP web service. They have a URI, but only for the whole thing, not for all of those valuable things that are inside of it. (Again, I know you can build your SPA differently, but most people don’t.) I believe that if you build a web application, it should have a web UI that merits the name, similarly to a web service that should have something to do with the web.

If this all seems very abstract to you, think about what makes the web the web. The single most important feature of the web is that you can link to individual things. Every important concept within your application should be a possible entry point. This enables anyone, anywhere, to use it as the target of a link. The fact that a user can move forwards and backwards through the history of the things they have visited is not a bug, it’s an essential feature. It is crucial that each of those targets returns a response quickly, because any overhead you create will have to be paid for multiple times. The back and forward buttons are not supposed to navigate between applications.

I can almost hear you say: “But I don’t care about the web. I’m building an application, not a website.” To which I say: Go ahead then, build an application, using your desktop’s or mobile operating systems native toolkit, or build an applet, or a Flash or Silverlight application. That’s all fine by me. I don’t even object to you building the same thing using the browser as an application runtime. Just be aware that when you do things this way, your application is on the web just as much as if you had built it as a Java applet. Be aware of what you’re sacrificing.

This is where I believe people’s wrong choices come in. It seems as if for many people, building an SPA has become synonymous with building a modern web application. Anybody who criticizes this architectural approach has obviously not made the move to the modern world. I couldn’t disagree more. People choose an SPA without being aware of the downsides, including such things as frameworks that go out of maintenance, almost unmanageable complexity in client-side code, as well as performance and accessibility issues.

But more importantly, they miss out on the benefits of not choosing an SPA. They’re not aware of the benefits of the alternative. What is this alternative, then? It is to build a classic web application, including rendering server-side HTML, and use JavaScript only sparingly, to enhance browser functionality where possible. In this architectural approach, it is absolutely clear that the responsibility for actual business logic resides completely on the server. This includes the server-side state machine that governs the transitions between pages. And again, this is not a bug, but a feature: It is what enables a quick change on the server side to take effect immediately, everywhere — including the other kinds of clients that you might end up building in addition to your web UI. Business logic does not belong in the client, unless you like having to redundantly maintain the same logic in every kind of client you support (in addition to maintaining it on the server, of course — remember that you can never trust any client). From a server-side viewpoint, the best architecture you can have is the one you could (and should) have built a decade ago: following REST principles, including stateless communication and identification of resources.

Some people object to this because they believe that SPA gives you a better architecture. I disagree: With an SPA, your architecture typically is the one suggested by your framework because from a web perspective, your SPA is a single thing the web is concerned with. With a non-SPA approach (which I’m going to call [ROCA](http://roca-style.org) from now on), the architecture governing your applications is the one of the web itself. Again, the fact that your server takes on the boring task of rendering HTML is an asset, not a burden. I, for one, don’t have a lot of trust in the stability and long-term maintainability of any of the currently existing, client-side JavaScript frameworks.

A fantastic example of the problems created by the SPA approach is parallelization of work. If you have a team of multiple people, or God forbid, multiple teams working on the same SPA, you need to come up with a good way to support this. Instead, you can just have each of those teams build their own web application. Each of those applications can be connected to every other one built at the same time by the same organization (as well as to every other web application residing anywhere, if you want to) — in fact relying on the core strength of the web.

In terms of accessibility, rendering semantic HTML on the server-side provides an out-of-the-box support. There is only a limited set of things that you can do with HTML, and again this is a feature, not a bug.

You can address some of those problems within an SPA, too. But it takes effort. With the ROCA approach, you have a well-known, extremely mature, proven architecture to rely on.

Of course, this does not at all suggest you do not use JavaScript and Ajax. I am completely aware that you cannot build a modern user interface without JavaScript to enable some in-page modification. But that is an optional enhancement, not the driving factor of your architecture. (Even from a REST perspective, using JavaScript is perfectly fine: It is actually mentioned as an optional constraint in the REST dissertation as “code on demand”. But its intended purpose is to serve as a means to extend the browser to support content it does not support natively.) In almost every case I’m aware of, your SPA has zero benefit for the user, and there are only positive sides to embracing browser features instead. You might believe there are benefits for the developer, but first of all, you should put those behind the interest of the user, and secondly, they’re mostly make-believe, especially in the long run.

So build your SPAs, I don’t mind, as long as I don’t have to use them. Just be aware of what it is you’re giving up.








