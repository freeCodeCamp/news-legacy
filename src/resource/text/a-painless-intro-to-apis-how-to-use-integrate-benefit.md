---
author: Maxime LaBoissonniere
authorTwitter: https://twitter.com/maxlaboisson
authorFacebook: none
title: "A painless intro to working with APIs"
subTitle: "If you work anywhere near the web development industry, you’re sure to hear these three infamous letters: A. P. I...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*2Bqyqu2iVYwmq0x21ocrGg.png
url: https://medium.freecodecamp.org/a-painless-intro-to-apis-how-to-use-integrate-benefit-d240fc88a00c
id: a-painless-intro-to-apis-how-to-use-integrate-benefit-d240fc88a00c
date: 2017-10-24T00:31:55.317Z
tags: [
  "API",
  "Web Development",
  "Programming",
  "Tech"
]
---
# A painless intro to working with APIs



![](https://cdn-images-1.medium.com/max/1600/1*2Bqyqu2iVYwmq0x21ocrGg.png)

Typical API call



If you work anywhere near the web development industry, you’re sure to hear these three infamous letters: **A. P. I.**

They get thrown around by beginners and experts alike:

“Why do I have to make an API _call_? Does it have a number?”

“A simple call to this third party API will do the trick here.”

“We’ll build you a RESTful API; making sure your new system plays well with other services.”

**While APIs may first seem intimidating, they can literally change your life as a developer.**

Why? Well, learning to use APIs properly can simplify, accelerate, and strengthen your development workflow. Building or integrating APIs brings benefits for both clients and yourself.

As developers, you often hear the advice: “don’t re-invent the wheel”.





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/6c50510852080375324f2a094164026d?postId=d240fc88a00c" data-media-id="6c50510852080375324f2a094164026d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F477397164453527552%2Fuh2w1u1o_400x400.jpeg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Jokes aside, APIs play a significant role in you not re-inventing the wheel. Understanding the basics of APIs is a crucial skill for modern web developers. In this post, I’ll help you do just that. We’ll cover:

*   The benefits of using an API
*   What an API really is
*   What types of APIs there are
*   Practical use cases

Let’s dive into it, shall we?

### Why use APIs?



![](https://cdn-images-1.medium.com/max/1600/0*-2_gCBWUlxNa0xbT.gif)

Level up your dev skills with APIs



One of the first big milestones in my programming career was understanding APIs properly. I still use them every single day.

Before stepping into the nitty-gritty, let me first convince you that understanding APIs is well worth your time. How so?

**Because learning to use APIs dramatically increases your development effectiveness.**

First, it allows you to leverage pre-existing logic you don’t have to write. Some stuff you might just not be able to code yourself! To save precious time as a developer, it is important to have an idea what the API landscape looks like.

Second, many development problems you’ll encounter have already been solved by someone before you.

These existing solutions could be [FaaS](https://snipcart.com/blog/webtask-baas-serverless-tutorial), libraries, web services, SDKs, [content APIs](https://snipcart.com/blog/intro-api-first-headless-cms-directus). Whatever shape they take, you’ll most likely need an API to interact with them.

### What are APIs, exactly?



![](https://cdn-images-1.medium.com/max/1600/0*0Ff0Z5q0hbknEnb9.png)

_Web APIs, image_ [_from MS_](https://blogs.msdn.microsoft.com/martinkearn/2015/01/05/introduction-to-rest-and-net-web-api/)



The official (daunting) definition goes like this:

> In computer programming, an application programming interface (API) is a set of subroutine definitions, protocols, and tools for building application software. In general terms, it is a set of clearly defined methods of communication between various software components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer.

A bit heavy, huh? Let’s take the academic prose down a notch. Here’s a friendlier, home-cooked API definition:

Simply put, an API declares an interface for you to interact with its logic without needing to know what happens under the hood. This definition applies to whatever language, protocol, or environment you’re in. The only requirement is that it happens on the programmatic level. More on that below.

To shed an even better light on APIs, let’s list what they are NOT:

*   **An API is not necessarily an external service**. For instance, you can include libraries directly in your solution OR use them through an API.
*   **An API is not just an interface**. It’s both the specification/format and the implementation.
*   **An API is not a GUI (graphical user interface).** An API doesn’t do interactions on the graphical level. It solely operates on the programmatic layer. This can be either through a programming language, or a communication protocol.

### Different types of APIs

All APIs aren’t created equal.

Even though they mostly share the same goal, some achieve it way better than others. Since this is to be a smooth intro, I won’t dive into what makes an API better than others.

Keep in mind that people have really different approaches to building APIs. If that subject interests you, Google around “API design patterns” and “API paradigms.” Or just start with [this neat entry-level article](https://blog.cloudobjects.io/api-design/2017/04/10/api-design-paradigms/). :)

### Endpoints

The goal of APIs is to make your life as a developer easier. How do they do that?

By aggregating features/functions set together and exposing these functionalities through **endpoints**. These are typically URL patterns used to communicate with the API.

These endpoints are the only way you can interact with any API. Each endpoint will have a specified format for both its **requests and responses.**You will usually find this format defined in the API’s documentation.

Endpoints can be simple functions. Or, they can be composed of many functions, which may call other APIs and so on.

The crucial point here is that the underlying logic of those functions is entirely abstracted. You don’t need anyknowledge of what’s happening inside them to use them.

As long as you use the proper format, you will be able to **consume** them. Here, “consume” is a fancy way of saying “using parts of them for your application”.

The bottom line is this: an API is just like any interface.

As a comparison, a light switch will turn on a light, whether you know how electric currents work or not. (As a young adult, I also learned you need to pay the electricity bill to make it work… but that’s a different story…)

### How to use APIs: practical examples

Let’s swap theory for some easy practice now.

#### Reading API documentation

I don’t want to overextend conceptual explanations too much. Instead, let’s analyze a really straightforward API. We will see how it works in a real-life scenario. We’ll use the native JavaScript Math object to do this. You can read its [documentation here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math).

The docs explain how each function of the Math object describes what the input format should be. For example, it could be a number, or an array of numbers.

The docs also describe the format of the output.

Notice how nothing is mentioned about the logic used to run these functions.

For instance, if you [fire up your browser console](https://www.wickedlysmart.com/hfjsconsole/) and type `Math.sqrt` (without executing the function), you will see something like:

`ƒ sqrt() { [native code] }`

That’s the spirit of an API. Whether you’re calling one of your Operating System’s APIs or a web-based API, these principles will stay.

#### Basic examples of API use cases

There’s a ton of stuff that can be done with popular API providers out there.

The [Google Maps API](https://developers.google.com/maps/) is often used to build better user experiences with data based on real-time mapping and traffic signals. The [Twitter API](https://developer.twitter.com/en/docs) can be used to filter and display targeted Tweets in real-time.

Now, I suspect many of you are more interested in web-based APIs than anything else. So let’s dive into specific use cases.

We’ll be using **Postman** in our examples. This Rest Client is bound to a web environment, but such tools usually exist in other environments also. It’s worth having a look around the tools provided for a given environment before starting to play with them. This can save you lots of time.

If you want to follow along, you’ll need to [download the Postman client](https://www.getpostman.com/).

#### Consuming a public API to fetch data

Our first example is going to be quite simple, but still more interesting than the Math one.

We will be using the **Dog API**!

Not only is it a funny API, but it also doesn’t require any authentication.

Plus, it’s a HTTP REST API. This means it’s a web-based API. Since it’s bound to this environment, it requires us to conform to some of the protocol specificity.

In this case, this means using [HTTP Verbs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) like GET, PUT, POST, DELETE.

For our example, we’ll keep things simple and only use the GET verb. The API doesn’t support anything else anyway. Most public APIs only allow you to consume data and not post any.

Let’s fire up Postman and see how its UI looks.



![](https://cdn-images-1.medium.com/max/1600/0*KWYuWDr2aLRkXkBZ.png)

My UI uses the dark theme, so it might slightly differ from yours.



There might be a lot of information to digest at first here, so let’s just start with the VERB and URL.

The default verb should be GET. If so, you can keep it this way and enter the following URL: [https://dog.ceo/api/breeds/list/all](https://dog.ceo/api/breeds/list/all)

Hit “Send” and bang! You should receive a response with the appropriate data. Voilà! **You’ve just made your first API call**.

Now, for this example, we won’t be using any of the data received. But you get the idea. You could show different dog breeds to your user, and display an image of a given breed if they click on it.

You can play with the different routes in their documentation to familiarize yourself with the environment.

Cool fact: this little project is also open source, so you can have a look under the hood [here](https://github.com/ElliottLandsborough/dog-ceo-api).

#### Handling authentication with a private API

Hopefully, you now better understand how different pieces work together when it comes to APIs. Let’s do a more complex tutorial that includes authentication. I’m going to use one of “my” own applications’ API here.

Here we’ll only use code to interact with [Snipcart’s API](https://docs.snipcart.com/api-reference/introduction). You can close Postman, but keep it handy. It’s good to use such a tool when starting out with an API.

The goal will be to create a simple command line interface (CLI) tool to create 1-time usage discounts for shoppers. These discounts will be generated via an API. All this will happen entirely on your computer.

Create a new folder for this project. Use `npm init` in the folder and boot up your text editor.

Now create a `index.js` file, then open the `package.json`file. In it, add the following lines in the top level object:

    "bin": { "discounts": "./index.js" }

We will also need the commander package to parse inputs from the client. Run `npm install --save commander` in the current folder.

We will also use a small lib to create IDs. You can install it with `npm install --save shortid`.

While we’re at it, let’s also run `npm install --save request` lib. This will make it easier for us to make HTTP calls. Hop back in your `index.js` file and paste this code:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/daf2669c08c5f725eb5fa702b4749c63?postId=d240fc88a00c" data-media-id="daf2669c08c5f725eb5fa702b4749c63" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F10501855%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Let’s just focus on the `request` function here.

This is where we make the external API call to Snipcart. You can see we pass the `method: "POST"` to the method. This is because we want to POST data to Snipcart's API. By specifying this method, the API will map the action correctly. This lets it read the body of the request where the discount data lies.

An exciting API feature we’ve not used yet is authentication.

Our other examples were all on public APIs. These require no authentication.

But in real life, most APIs you’ll use will probably require some authentication. It’s a standard “pattern” in the API world. Our customers wouldn’t be happy if we allowed anyone to create discounts on their shop! ;)

For our purpose, we pass the [API key](https://en.wikipedia.org/wiki/Application_programming_interface_key) directly in the request.

Hooray — the server recognizes us! It can then execute the request scoped only to our account.

If you want to test our little app, you can run `npm install -g` in the project directory. Then, simply run `discounts x` to create discounts x number of times.

You can go in your Snipcart dashboard ([forever free accounts](https://app.snipcart.com/register) in Test mode) and see for yourself that the discounts have been created properly.

You can imagine how powerful this can be. If you had to create 200 of those discounts, this would require wayyy too much time to do this via our UI.

When you’re familiar with how APIs work, this can be done in a matter of minutes. The code is also reusable, so if you need to do so the same thing a month from now, well… you’re already set!

### Closing thoughts

I genuinely hope this primer helped you better understand what APIs are, and how you can leverage them in your development workflow.

A few takeaways:

*   APIs will accelerate your velocity and widen your development scope. Use them!
*   APIs are NOT necessarily bound to the web ecosystem. You’ll see them everywhere.
*   Always double check the documentation of the API you want to use.
*   Always search for existing tools (APIs or otherwise) in your ecosystem before starting to code.

Our last example isn’t really “production” ready. But it gives you a good idea of how things could look in a real life use case.

There are a lot of things we could have improved. For example:

*   Letting the user choose the discount type
*   We could also send the created codes via email directly in the same function, instead of merely logging them.
*   If we had advanced needs for our discounts tools, we could have written an API ourselves. From there, we could even create a UI that interacts with our API if we wanted to. Anyway, I hope you get the idea now.! :)

So what’s the next step? Like almost anything in the development sphere, you’ll need to code, code, code, and code some more! That’s how you’ll familiarize yourself API management and integration.

After a while, you’ll become _efficient_ with them.

And that’s where the real fun begins.

_If you’ve enjoyed this post, please take a second to clap &_ [_share it on Twitter_](https://twitter.com/home?status=A%20Painless%20Intro%20to%20APIs%3A%20How%20to%20Use,%20Integrate,%20%26%20Benefit%20https%3A//buff.ly/2yBrftE%20via%20%40snipcart%20by%20%40maxlaboisson%20%23API%20%23webdev)_. Got comments, questions? Hit the section below!_

I originally published this on [the Snipcart Blog](https://snipcart.com/blog/apis-integration-usage-benefits) and shared it in our [newsletter](http://eepurl.com/cDZnQ9).








