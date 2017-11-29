---
author: Fabio Hiroki
authorTwitter: https://twitter.com/fabiohiroki
authorFacebook: none
title: "Let’s explore the benefits of Cycle.js and Model-View-Intent"
subTitle: "In the current software development ecosystem, it's not surprising that Model-View-Controller (MVC) architecture doesn’t have a great rep..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*r980RzYbz7ShlZEYsd089A.jpeg
url: https://medium.freecodecamp.org/exploring-cycle-js-and-model-view-intent-ada5ed82da22
id: exploring-cycle-js-and-model-view-intent-ada5ed82da22
date: 2017-05-14T18:50:02.715Z
tags: [
  "JavaScript",
  "Web Development",
  "Programming",
  "Tech",
  "Startup"
]
---
# Let’s explore the benefits of Cycle.js and Model-View-Intent

In the current software development ecosystem, it's not surprising that Model-View-Controller (MVC) architecture doesn’t have a great reputation. Common alternatives have been gaining popularity, such as Model-View-Presenter (MVP) and Model-View-ViewModel (MVVM).

As a mobile developer, I tried the MVP architecture. And in fact, I had a better experience because of the separation of concerns and improved testability provided by this architecture. But it doesn't propose a pattern for data flow (like Flux or Redux), and I felt somehow dissatisfied by this. I wondered if there’s a way to minimize the bugs and provide a better developer experience.

### Model-View-Intent (MVI)

The first concept that caught my attention was the Model-View-Intent (MVI) implementation on Android proposed by the [Mosby](https://github.com/sockeqwe/mosby) library. I decided to read its code and try to understand its principles.

Mosby looked like a great library, especially because its creator thoroughly documented its motivation and published examples on his [blog](http://hannesdorfmann.com/mosby/). But unfortunately Mosby seemed too complex. It had a steep learning curve and wasn’t exactly what I was trying to find — and represented only a small incremental improvement from MVP.

The MVI concept wasn’t first introduced by Mosby, but rather by a web framework called [Cycle.js](https://cycle.js.org/). So I decided to learn the basics. To my surprise, Cycle.js made me like the MVI idea and want to give it a try. Mostly because the framework is very small and simple.

These are the basic principles of MVI, and why they have great value:

*   **Purely reactive:** this makes it much easier to coordinate asynchronous tasks, and brings all the [benefits](https://tylermcginnis.com/imperative-vs-declarative-programming/) from declarative programming. In the case of Cycle.js, it makes your **view**testable. As we're going to see below, the view becomes just a common **observable**_._
*   **Unidirectional data flow:** in MVI, the data follows a straight path of **intent**, **model**, and **view**.I will discuss this in detail in the next section. But for now, this means that you as a developer must learn how to organize your code to use this pattern. Once you overcome the learning curve, your application becomes easier to understand. Every feature on your app follows the same recipe.
*   **Theview layer is represented by a single object, the model**: the entire **view** state is represented by an unique source of truth, including the **loading** and **error** states. This means that you have to look at and manipulate one place in order to display the viewcorrectly.

More details about MVI design and advantages are described in [this article](http://futurice.com/blog/reactive-mvc-and-the-virtual-dom) by Cycle.js’ creator and also in [this article](https://medium.com/@fkrautwald/plug-and-play-all-your-observable-streams-with-cycle-js-e543fc287872). I recommend that you read both to have a better understanding even if you don’t have a background in web development.

### MVI in a real application



![](https://cdn-images-1.medium.com/max/1600/1*4QMxyPx-nR6QFsvbAjKAew.gif)

The application I've built using Cycle.js



After I gained a brief understanding of MVI, I decided to build an application using Cycle.js to verify its benefits in a practical way. The app I built provides an initial list of characters and then performs search requests on [Star Wars API](https://swapi.co/) when you type something in the input text. You can see the code in this [repository](https://github.com/fabiothiroki/cyclejs-starwars).

The main structure of a Cycle.js application is an abstraction of the concept of a human-computer interaction. This is represented by a single function where any external interaction is passed as a function parameter (usually called "sources"), and the "human" output is the object returned by the function (usually called "sinks").

In our application, this is represented by the "App" method in the "app.js" file. The code placed between the input and the output will transform the "sources" into an **intent observable**_,_ which is transformed into a **model****observable.**The latter is then transformed into a **view observable** which is returned inside the "sinks" object.

<pre name="b92d" id="b92d" class="graf graf--pre graf-after--p">export function App (sources) {</pre>

<pre name="2894" id="2894" class="graf graf--pre graf-after--pre">  // ...</pre>

<pre name="78ff" id="78ff" class="graf graf--pre graf-after--pre">  return sinks;  
}</pre>

We will build each layer incrementally in the same order as the data should flow.

### Intent

The intent object contains **observables** generated from the "sources" object. It represents the user’s intent when interacting with the application. In our application, a user can do two things:

*   Enter a search term by typing on the input text
*   Receive characters’ data from the API

<pre name="669e" id="669e" class="graf graf--pre graf-after--li">const intents = {  
  receiveCharacterList: **sources**.HTTP.select(‘api’).flatten(),</pre>

<pre name="772c" id="772c" class="graf graf--pre graf-after--pre">  changeSearchTerm: **sources**.DOM.select(‘#search.form-control’)  
    .events(“input”)  
    .map(ev => ev.target.value)  
    .startWith(‘’)  
}</pre>

You don't need to worry if you don’t understand the receiveCharacterList property of the **intents** object. For now, to understand the MVI concept, you just need to understand this: the changeSearchTermreceives a new **observable** whenever the user types something in the input that has an id of "search.form-control." By default it started with an empty string.

### Model

The **model**, as I've mentioned above, is the representation of the current **view** state. It depends only on the **intents** object.

<pre name="5c00" id="5c00" class="graf graf--pre graf-after--p">const model = Observable.combineLatest(  
  **intents**.receiveCharacterList,   
  **intents**.changeSearchTerm)  
  .map((combined) => {</pre>

<pre name="5387" id="5387" class="graf graf--pre graf-after--pre">    const [response, searchTerm] = combined</pre>

<pre name="a911" id="a911" class="graf graf--pre graf-after--pre">    return {  
      characters: response.body.results,  
      searchTerm: searchTerm  
    };  
 })  
 .startWith({  
   characters: [{name: ‘Loading…’}],  
   searchTerm: ‘’  
 });</pre>

Here we are combining the observablecontaining the API response with the observablecontaining the **string**typed. The result is a new observable containing the list of characters and the search term.

### View

The **view**in Cycle.js isn't represented by HTML or by a controllerlayer, as we commonly see in mobile applications. The default Cycle.js configuration uses a library called [Cycle DOM](https://cycle.js.org/api/dom.html), which can generate an observable from a Virtual DOM [abstraction](https://github.com/snabbdom/snabbdom).

<pre name="71ae" id="71ae" class="graf graf--pre graf-after--p">const view = **model**.map((state) => {</pre>

<pre name="b69c" id="b69c" class="graf graf--pre graf-after--pre">  const list = state.characters.map( character => {  
    return tr(td(character.name));  
  });</pre>

<pre name="388e" id="388e" class="graf graf--pre graf-after--pre">  return div(“.card”, [  
    div(‘.card-header’, [  
      h4(‘.title’, ‘Star Wars Character Search’),  
      input(‘#search.form-control’, {props: {type: “text”, placeholder: “Type to search”, value: state.searchTerm}})  
    ]),  
    div(‘.card-content .table-responsive’,[  
      table(‘.table’, [  
        thead(tr(th(h5(‘Name’)))),  
        tbody(list)  
      ])  
    ])  
  ]);  
});</pre>

As I mentioned above, viewdepends only on **model.**It generates an HTML table for listing the characters and it fills the **input**with the typed string.

At the end of our “App” function, the view is part of the returned “sinks” object. The “sinks” should also contain the configuration of the HTTP request to the API:

<pre name="1619" id="1619" class="graf graf--pre graf-after--p">return {  
  DOM: **view**,  
  HTTP: **intents**.changeSearchTerm.map( searchTerm => {  
    return {  
      url: ‘[https://swapi.co/api/people/?search='](https://swapi.co/api/people/?search=%27) + searchTerm,  
      category: ‘api’,  
    }  
  })  
};</pre>

### Unit testing the view

Given that the viewrepresentation is just a function of the model_,_ we can easily write unit tests for it. First, I’ve extracted the viewcreation into method and moved it to a separate file. This allowed me to use it in the application and in the tests. Then I’ve used the [chai-virtual-dom](https://github.com/staltz/chai-virtual-dom) package to compare two views_._

The tests I’ve implemented follow this basic structure:

1.  Create a **mock**model of the state we want to test.
2.  Use the **view**function passing the created mockto generate its view.
3.  Assert if the created viewis equal to the expected view.

In this application I’ve created two simple test cases:

*   When the application is loading the API data, the viewshould display a **loading**state:

<pre name="8aa1" id="8aa1" class="graf graf--pre graf-after--li">const model = Observable.of({  
 characters: [{name: ‘Loading…’}],  
 searchTerm: ‘’  
});</pre>

<pre name="2fcb" id="2fcb" class="graf graf--pre graf-after--pre">const view = view(model);</pre>

<pre name="320e" id="320e" class="graf graf--pre graf-after--pre">const expected = div(".card", [  
  div('.card-header', [  
    h4('.title', 'Star Wars Character Search'),  
    input('#search.form-control', {props: {type: "text", placeholder: "Type to search"}})  
  ]),  
  div('.card-content .table-responsive',[  
    table('.table', [  
      thead(tr(th(h5('Name')))),  
        tbody([  
          tr(td('Darth Vader')),  
          tr(td('Darth Maul')),  
        ])  
      ])  
    ])  
  ]);</pre>

<pre name="1bbc" id="1bbc" class="graf graf--pre graf-after--pre">expect(view).to.look.exactly.like(expected);</pre>

*   When the application has received the characters’ data from the API, the viewshould display it:

<pre name="7c0a" id="7c0a" class="graf graf--pre graf-after--li">const model = Observable.of({  
  characters: [{name: 'Darth Vader'}, {name: 'Darth Maul'}],  
  searchTerm: 'darth'  
});</pre>

<pre name="cac1" id="cac1" class="graf graf--pre graf-after--pre">const view = view(model);</pre>

<pre name="affd" id="affd" class="graf graf--pre graf-after--pre">const expected$ = div(".card", [  
  div('.card-header', [  
    h4('.title', 'Star Wars Character Search'),  
    input('#search.form-control', {props: {type: "text", placeholder: "Type to search"}})  
  ]),  
  div('.card-content .table-responsive',[  
    table('.table', [  
      thead(tr(th(h5('Name')))),  
        tbody([  
          tr(td('Darth Vader')),  
          tr(td('Darth Maul')),  
        ])  
      ])  
    ])  
  ]);</pre>

<pre name="552b" id="552b" class="graf graf--pre graf-after--pre">expect(view).to.look.exactly.like(expected);</pre>

### Conclusion

I got a great first impression of the Model-View-Intent architecture. Code looks more organized and is easier to understand, so it provides a nicer developer experience. The communication between an object and its responsibilities are already predefined, so you don’t have to make too many decisions when programming.

In the end, MVI doesn’t take a lot of effort to learn and seems to be a better choice when comparing it to MVP.

What about Cycle.js? I’m not yet 100% confident that I can start building a production application using Cycle.js. I think I need to explore the framework further to assess its real capabilities, like creating routes or an authentication system.

Did you enjoy this article? If so, please give me some claps so more people see it. Thank you!








