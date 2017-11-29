---
author: Vanco Stojkov
authorTwitter: https://twitter.com/van100j
authorFacebook: https://facebook.com/10152772451372443
title: "What does it take to build a chatbot? Let’s find out."
subTitle: "Without any delay, the image below shows what we are building:..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*7EKSA6aQvAYaT6eoV7zEsw.jpeg
url: https://medium.freecodecamp.org/what-does-it-take-to-build-a-chatbot-lets-find-out-b4d009ea8cfd
id: what-does-it-take-to-build-a-chatbot-lets-find-out-b4d009ea8cfd
date: 2017-08-28T13:15:30.316Z
tags: [
  "Tech",
  "Web Development",
  "Startup",
  "Chatbots",
  "Artificial Intelligence"
]
---
# What does it take to build a chatbot? Let’s find out.







![](https://cdn-images-1.medium.com/max/2000/1*7EKSA6aQvAYaT6eoV7zEsw.jpeg)

Image by [Scott Lynch](https://www.flickr.com/photos/scottlynchnyc/ "Go to Scott Lynch's photostream")







Without any delay, the image below shows what we are building:



![](https://cdn-images-1.medium.com/max/1600/1*tdRn6YIXgnilQWSJrZ5k2w.gif)

An image of nothing.



To answer the question in the title, “What does it take to build a chatbot?” the answer is not much.

I’m a web developer. It has been my desire to dig into this thrilling field for a long time. Unfortunately, I can’t say I have the knowledge in Natural Language Understanding (NLU) required to build a chatbot without help. The good news is that such help is available today.

Google’s [Cloud Natural Language API](https://cloud.google.com/natural-language/), Microsoft’s [Cognitive Services APIs](https://azure.microsoft.com/en-us/services/cognitive-services/language-understanding-intelligent-service/), and IBM’s [Watson Conversation](https://www.ibm.com/watson/developercloud/conversation.html) provide commercial NLU services, with generous free tiers. There are also completely free ones, at least for the moment. This includes [API.AI](https://api.ai/), which has recently been acquired by Google, and [Wit.ai](https://wit.ai/), which Facebook owns.

From a web developer’s point of view, that’s all the help we need — an API which will remove the complexity for us.

### Let’s start with the fun part

If you are eager to see the example live, here is the [demo available on Heroku](https://ti-bot.herokuapp.com/). The entire code for this example [is available on GitHub](https://github.com/van100j/tibot).

For the purpose of this article, we’ll create a chatbot called TiBot to answer our questions about the date and time. We’ll use [API.A](https://api.ai/)I’s API to process these questions. I believe API.AP is more intuitive and easier to work with than [Wit.ai](https://wit.ai/).

At the back end, a simple Node.js server will handle requests sent from the front-end app via WebSockets. We’ll then fetch a response from the language processing API. Finally, we’ll send the answer back via WebSockets.

At the front end, we have a messenger-like app built on a single [Angular](https://angular.io/) component. [Angular](https://angular.io/) is built-in [TypeScript](https://www.typescriptlang.org/) (a typed superset of JavaScript). If you are not familiar with either of them, you still should be able to understand the code.

I chose [Angular](https://angular.io/) because it inherently uses [RxJS](http://reactivex.io/rxjs/) (the ReactiveX library for JavaScript). RxJS handles asynchronous data streams in an amazingly powerful yet simple manner.

### API.AI setup

API.AI has a neat [Docs section](https://api.ai/docs/getting-started/basics). First, we need to become familiar with some of the basic terms and concepts related to the APIs, and to know NLU in general.

Once we [create an account](https://console.api.ai/api-client/#/login) at API.AI, we need to create an [agent](https://api.ai/docs/agents) to start our project. With each agent, we get API keys — client and developer access tokens. We use the client access token to access the API.

Agents are like projects or NLU modules. The important parts of an agent are [intents](https://api.ai/docs/intents), [entities](https://api.ai/docs/entities), and [actions and parameters](https://api.ai/docs/actions-and-parameters).

[Intents](https://api.ai/docs/intents) are the responses the API returns or, according to API.AI, “a mapping between what a user says and what action should be taken by your software.” For example, if a user says, “I want to book a flight,” the result we receive should look like the following:

`{ ... "action": "book_flight" ... }`

[Entities](https://api.ai/docs/entities) help extract data from what the user says. If a user says, “I want to book a flight to Paris,” we want to get the information about Paris in. We need that data passed to our logic so that we can book a flight to Paris for our user. The result should look like this:

<pre name="e1e1" id="e1e1" class="graf graf--pre graf-after--p">{  
  ...  
  "action": "book_flight",   
  "parameters": {  
    "destination": "Paris"  
  }  
  ...  
}</pre>

Entities are parameters values, like data types. There are [system-defined entities](https://api.ai/docs/reference/system-entities) by the API.AI platform. Examples of these include `@sys.date`, `@sys.color`, `@sys.number`. More complicated ones include `@sys.phone-number`, `@sys.date-period`, `@sys.unit-length-name`.

We can also define our own entities, or pass them on the fly with each request. A good example of passing entities on the fly is that of users listening to their playlists. Users have a playlist entity in their request or a user session with all of the songs in the playlist. We would be able to respond to “Play Daydreaming” if the user is currently listening to Radiohead’s _A Moon Shaped Pool_ playlist.

Actions and parameters send requests to the API so that they result in an action. But they may also result in something our chatbot doesn’t understand. We may choose to fall back to a default response in that case.

Parameters are the companion of actions. They complement and complete the action. In some cases, we don’t need parameters. But there are cases where actions only make sense with parameters. An example is booking a flight without knowing the destination. That is something we need to think about before we even start creating the intents.

Finally, the following code is how the API’s response should appear for a resolved intent:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/e2b591ea5c3463e5f66a0d9bf11028cf?postId=b4d009ea8cfd" data-media-id="e2b591ea5c3463e5f66a0d9bf11028cf" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F408278%3Fv%3D4%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





The most important part of the JSON is the `“result”` object with the `“action”` and `“parameters”` properties discussed above. The confidence for the resolved query (in the range of 0 to 1) is indicated with `“score”`. If `“score”` is zero, our query hasn’t been understood.

It’s worth noting that the `“context”` array contains information about unresolved intents that may need a follow-up response. For example, if a user says, “I want to book a flight,” we’d process the `book_flight”` action (the context). But to get the required `“destination”` , we may respond with, “Ok, where would you like to go?” and process the `“destination”` within the following request.

### The back end

We are building a chat app. The communication between the client and the server will go through WebSockets. For that purpose, we’ll use [a Node.js WebSocket library](https://github.com/websockets/ws) on the server. Our WebSockets module looks like this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/1de6e28a20a2a0c2fc11456df0ae501f?postId=b4d009ea8cfd" data-media-id="1de6e28a20a2a0c2fc11456df0ae501f" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F408278%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





The format of the WebSockets messages is a string encoded JSON with `“type”` and `“msg”` properties.

The string `“type”` refers to one of the following:

`“bot”`, which answers to the user.

`“user”`, which the user asks the bot.

`“sessionId”`, which issues a unique session ID.

Our chatbot’s answer is contained in `“msg”`. It is sent back to the user, the question of the user, or the sessionId.

The `processRequest(msg)` represents the core of our server’s functionality. It first makes a request to the API:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/088ddafeb25148864608581cb39b3f6b?postId=b4d009ea8cfd" data-media-id="088ddafeb25148864608581cb39b3f6b" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F408278%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Then, it executes with`doIntent()` — the specific action for the user’s intent, based on the response from the API:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ed6f5ace3b6b48f5c856548dee13771a?postId=b4d009ea8cfd" data-media-id="ed6f5ace3b6b48f5c856548dee13771a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F408278%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





`doIntent()` checks to see if there is a function to handle the action in the response. It then calls that function with the parameters of the response. If there is no function for the action, or the response is not resolved, it checks for a fallback from the API. Or it calls `handleUnknownAnswer()`.

The action handlers are in our intents module:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/4c7f90b4bcba22745a9b38e9459f7365?postId=b4d009ea8cfd" data-media-id="4c7f90b4bcba22745a9b38e9459f7365" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F408278%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





To each handler function, we pass the parameters from the API response. We also pass the user’s time zone that we receive from the client side. Because we are dealing with the date and time, it turns out that the time zone plays an important role in our logic. It has nothing to do with the API, or NLU in general, but only with our specific business logic.

For example, if a user in London on Friday at 8:50 pm asks our bot, “What day is it today?” the answer should be, “It’s Friday.”

But if that same user asks, “What day is it in Sydney?” the answer should be, “It’s Saturday in Sydney.”

Location is important to our business logic too. We want to detect where the question is coming from (in the case of Sydney), so that we can get the time zone for its location. We would combine Google Maps [Geocoding API](https://developers.google.com/maps/documentation/geocoding/start) and [Time Zone API](https://developers.google.com/maps/documentation/timezone/start) for that.

#### The front end

Our app is a single Angular component. The most important functionality is within the `ngOnInit()` method of the component:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b061787d2f713271991aac35eb122492?postId=b4d009ea8cfd" data-media-id="b061787d2f713271991aac35eb122492" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F408278%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





We first create the WebSocket (WS) connection to our server with a WS Observable. We then subscribe a couple of observers to it.

The first observer gets the `sessionId` when it connects to the WebSocket server. Immediately, the `take(1)` operator is unsubscribed:

The second subscription is the fun one:

<pre name="4d9f" id="4d9f" class="graf graf--pre graf-after--p">this.ws$.takeUntil(this.ngUnsubscribe$)  
  .filter(r => r.type === 'bot')  
  .retryWhen(err$ =>  
    Observable.zip(err$, Observable.range(1, 3), (e, n) => n)  
      .mergeMap(retryCount => Observable.timer(1000 * retryCount))  
  )  
  .delayWhen(inp => Observable.interval(100 + inp.msg.length * 10))  
  .subscribe(  
    (msg) => this.pushMsg(msg)  
  );</pre>

Here we want to take out the messages only from the bot, hence the `filter(r => r.type === ‘bot’)` operator. The `retryWhen(err$ => …)` operator automatically re-connects to the WebSocket after it has been disconnected.

The purpose of the `delayWhen()` operator is to achieve “the bot is typing” effect that the messengers use. To do this, we delay the data for `100 + MSG_CHARACTERS_LENGTH * 10` milliseconds.

When the message gets through all the operators, we push it into our array of messages `(msg) => this.pushMsg(msg)`.

We use the component’s private `pushMsg()` method to add a message and to show it in the chat:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/427b5d33204bf4d275474cde7f481212?postId=b4d009ea8cfd" data-media-id="427b5d33204bf4d275474cde7f481212" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F408278%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





If the message is from the user (the `clearUserMsg` flag), we clear the input box. We use `this.botIsTyping` to control “the bot is typing” effect. So here we set it to `false`.

We handle the user input with the `onSubmit()` method when the user hits Enter:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/8c9969f21ae09b42e1b6b75abc1cd8fd?postId=b4d009ea8cfd" data-media-id="8c9969f21ae09b42e1b6b75abc1cd8fd" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F408278%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Along with the user’s message, we send the user’s sessionId and time zone. These are indicated in `this.ws$.next(JSON.stringify(input))`. To show the bot is typing effect, we also set `this.botIsTyping` to `true`.

The Angular’s component template we use as the UI of our app, consists of the following code:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/71f91f7f6ddaf3f1adac98b7ff71c361?postId=b4d009ea8cfd" data-media-id="71f91f7f6ddaf3f1adac98b7ff71c361" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F408278%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





This is all we need for our app on the front end.

It’s amazing to see how elegant and clean this code turned out. Thanks to RxJS. When using WebSockets, things tend to get complicated. Here we’ve done it with a single line of code.

And having features like auto re-connecting — well, that’s a story on its own. But with RxJS, we handled that in a simple manner.











* * *







To conclude, I hope you understandable why I said, “It doesn’t take much” to answer the question, “What does it take to build a chatbot?”

This doesn’t mean that building a chatbot is an easy task. These NLU services, as intelligent as they are, won’t solve all our problems. We still need to take care of our own business logic.

A couple of years ago, it was impossible for me to build something similar to this. But services like API.AI now makes that power available to everyone.

API.AI also provides integrations with Facebook Messenger, Twitter, Viber, and Slack. But for this article, I thought it would be best to use their API to better understand how everything works.

I hope you’ve enjoyed this article and find it helpful to build your own chatbot.








