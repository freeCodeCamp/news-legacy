---
author: Marcelo Lotif
authorTwitter: none
authorFacebook: https://facebook.com/10207848413790579
title: "Real integration tests with React, Redux and Router"
subTitle: "After being bitten a couple of times by bad refactoring and a broken app — even with all my tests green — I started to research about int..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*Vv0HNvRhU0ihKVaBIpDUww.jpeg
url: https://medium.freecodecamp.org/real-integration-tests-with-react-redux-and-react-router-417125212638
id: real-integration-tests-with-react-redux-and-react-router-417125212638
date: 2017-06-19T21:52:21.555Z
tags: [
  "React",
  "Redux",
  "Front End Development",
  "Testing",
  "JavaScript"
]
---
# Real integration tests with React, Redux and Router



![](https://cdn-images-1.medium.com/max/1600/1*Vv0HNvRhU0ihKVaBIpDUww.jpeg)



After being bitten a couple of times by bad refactoring and a broken app — even with all my tests green — I started to research about integration tests in React. Possibly also with Redux and React Router.

To my absolute shock, I couldn’t find any good material out there. The ones I found either were doing incomplete integration tests or simply doing it the wrong way.

So here we’re going to build an integration test that initializes a React component, fires a simulated user interaction and assert that our component changes the way we expect it to change.

What this is **not** about: unit testing. I’m not going to dive into this right now, but there is a very good reason we at [Wave](http://waveapps.com) ([we’re hiring](https://www.waveapps.com/about-us/jobs/), by the way!) are slowing down on our unit tests and switching to integration tests. Scroll to the bottom if you’re interested in that.

Disclosure: I wouldn’t have had those tests working as smoothly as they are now if it wasn’t for the great front end folks at Wave, especially the amazing [Tommy Li](https://github.com/tommyzli) who figured out how to connect the router, so thank you!

### Setting up

For this project, we are going to use [React](https://facebook.github.io/react/), [Redux](https://github.com/reactjs/react-redux), [React](https://github.com/ReactTraining/react-router)/[Redux Router](https://github.com/acdlite/redux-router) (optional) and [Thunk](https://github.com/gaearon/redux-thunk) (optional) to run the app, [Jest](https://facebook.github.io/jest/) and [Enzyme](https://github.com/airbnb/enzyme) for testing.

I’ll skip the setup of all those since there are many great tutorials out there about that.

To set up the basics of my integration test, I’m gonna cheat a little bit and create an util function with some boilerplate code:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/310a6f5da33d3f375ef3396977930fcf?postId=417125212638" data-media-id="310a6f5da33d3f375ef3396977930fcf" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F11467898%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





### Testing

In your test file, you will first need to import some dependencies, your reducer and your component:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9b74315eb816ddbdafc31ae29f0aee68?postId=417125212638" data-media-id="9b74315eb816ddbdafc31ae29f0aee68" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F11467898%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Then, on the _beforeEach_ function, set up your integration test variables using that util function:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/da3174ba739dcddd291c76ff383079b1?postId=417125212638" data-media-id="da3174ba739dcddd291c76ff383079b1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F11467898%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





(If you don’t use React Router or Thunk, you can just remove their references here and on the util function and it’s going to work the same way.)

Now you’re all set to mount your component and test it. Let’s imagine this component renders a _div_, which displays a text coming from the reducer. When clicking on it, the text should change to another string, let’s say ‘new text’. To test that interaction, you can simply do:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/391b92548af3cc5214b425018de8a90b?postId=417125212638" data-media-id="391b92548af3cc5214b425018de8a90b" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F11467898%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





That’s it ☺ With this very simple code you’re testing the _div_ calling an action producer on click, that dispatches an action to the reducer, that changes the data, triggering a re-render on the component, that is expected to change the way you want it to change. If any of those steps fail, your test goes red and you know that functionality of your app is not working.

You can try to go deeper in this chain and assert some other things:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/62e9afb38239be8735abc9f35fc142ba?postId=417125212638" data-media-id="62e9afb38239be8735abc9f35fc142ba" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F11467898%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





### Testing API calls

In the real world you’ll probably need to call some APIs to fetch data for your app, and that is the part you need to mock in order to test things effectively. We’ll use Jest here, which is not the best way to mock http requests, but I’ll do it for the convenience.

Assuming you use a hypothetical http client to call an endpoint through its _get_ function when you click on the _div_, then set the return of this call into the reducer that gets displayed back in the _div_:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ff286a02a5a57283d7cc64c69da5572f?postId=417125212638" data-media-id="ff286a02a5a57283d7cc64c69da5572f" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F11467898%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





In an even more real world application, that _get_ function will return you a Promise object. Things become a little complicated from here because the simulated click function is unaware of that promise and there is no way of executing its _then_ function. The reference to the object has been lost.

We will need to somehow wait for that promise to resolve before executing the assertions. We work around this by doing a little hack in an util function:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/db9cb057ac028b65eb9bd7ac928c5105?postId=417125212638" data-media-id="db9cb057ac028b65eb9bd7ac928c5105" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F11467898%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





And our test is now going to look like this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2f67ed76a3c10f99d5295bb6330a1bdd?postId=417125212638" data-media-id="2f67ed76a3c10f99d5295bb6330a1bdd" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F11467898%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





With the _async … await_ statement , available since ES7, our test is going to wait until all promises have been resolved so it can make its assertions. Jest currently has no solution for this, but this hack works pretty well in real life.

If you have more complicated action producers with other promises being called in the _resolve_ or _reject_ of that first promise, I suggest you unit test those calls and also test the final results of all cases in integration tests.

### More Testing

In case you need to set an initial state to your component , you can dispatch actions manually until you reach the desired state:

<pre name="f44b" id="f44b" class="graf graf--pre graf-after--p">store.dispatch({ payload: 'data', type: 'SOME_ACTION' });</pre>

You can also go crazy on those assertions and test every little thing, or keep it simple knowing the test coverage is going to be the same as if you have added unit tests on each of the layers of this app, but with a lot less code. In addition, you are also testing how those layers connect with each other and how your app responds to user input and data store changes.

Please leave your opinion in the comments section, there is a lot of improvements to be made here and I’m happy to modify this according to your suggestions. Thanks!











* * *







### Y U NO UNIT TEST?!?

We at [Wave](http://waveapps.com) (did I mention [we’re hiring](https://www.waveapps.com/about-us/jobs/)?) have done a ton of front end unit tests before and, to be honest, the majority of them have been somewhat useless. Sure, they are at the core of TDD, but some reducers and action producers unit tests are just boilerplate code and don’t add much value to the code or the TDD process.

You can actually do really good TDD with integration tests only, and they are going to be useful in the future to spot broken links between your app layers and ultimately to check if your app is behaving as expected, which is what automated tests are for.

Don’t get me wrong, we still unit test edge cases that are too complicated or annoying to reproduce on integration tests, but the majority of our unit tests became useless as soon as we added integration tests like the above. In the end, it means the time we now spend thinking about, developing and fixing tests is a lot lower than it was before and they are much more effective in spotting problems in the app. So, win win ☺

One problem you might find is with deep mounting, instead of shallow rendering. You might think some component trees are too complicated to mount, but I’ll say another advantage of mounting the root component is to test if the child components are being instantiated correctly. If you have connected child components, you can test them separately if you prefer. I haven’t tried shallow rendering a connected component to see if this integration test setup still works, but you can try. If you don’t like to mount and don’t have connected child components, another possibility I haven’t explored is shallow render and then manually connecting them. The important thing here is to feel comfortable with the amount and the quality of the tests you’re writing, making sure they actually help in automatically doing some regression testing and discovering hidden issues for you.








