---
author: Edd Yerburgh
authorTwitter: https://twitter.com/EddYerburgh
authorFacebook: none
title: "The Front-End Test Pyramid: How to Rethink Your Testing"
subTitle: "If you’re testing front end apps, you should know about the front-end test pyramid...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*6A85taNWuTlwoqas2ei4aQ.jpeg
url: https://medium.freecodecamp.org/the-front-end-test-pyramid-rethink-your-testing-3b343c2bca51
id: the-front-end-test-pyramid-rethink-your-testing-3b343c2bca51
date: 2017-11-08T17:21:32.880Z
tags: [
  "Web Development",
  "Testing",
  "Programming",
  "Design",
  "UX"
]
---
# The Front-End Test Pyramid: How to Rethink Your Testing







![](https://cdn-images-1.medium.com/max/2000/1*6A85taNWuTlwoqas2ei4aQ.jpeg)







If you’re testing front end apps, you should know about **the front-end test pyramid**.

In this article we’ll look at what the front-end test pyramid is, and how to use it to create comprehensive test suites.

### The front-end test pyramid

The front-end test pyramid is a representation of how a front end test suite should be structured.

The ideal test suite is comprised of unit tests, some snapshot tests, and a few end to end (e2e) tests.



![](https://cdn-images-1.medium.com/max/1600/1*7nCVY7iqAiILcnRLDBIPcg.png)

The front-end test pyramid



This is a revamped version of the [test pyramid](https://martinfowler.com/bliki/TestPyramid.html), that’s specific to testing front-end applications.

In this article we’ll go through what each of these test types looks like. To do that, we’ll create a test suite for an example app.

### The app

To learn about the front-end test pyramid in detail, we’ll look at how to test a web app.

The app is a simple modal app. Clicking a button opens a modal, and clicking an OK button on the modal closes the modal.



![](https://cdn-images-1.medium.com/max/1600/1*p6I2sreZZ9GEzgJoHy4efQ.gif)

The finished app



We’ll build the app from a component based framework. Don’t worry about the specifics—we’re going to keep this high-level.

The app is made from three components — a `Button` component, a `Modal` component and a `App` component.

The first tests we’ll write are unit tests. In the front-end test pyramid, the bulk of our tests are unit tests.

### Unit tests

Unit tests test units of a codebase.

They call functions — or units — directly and make sure they return the correct result.

In our app, our components are units. So we’ll write unit tests for Button and Modal. There’s no need to write tests for our `App` component because there isn’t any logic in it.

The unit tests will **shallow render** components and assert that they behave correctly when we interact with them.

[Shallow rendering](https://reactjs.org/docs/shallow-renderer.html) means we render the component one level deep. This way we can make sure we’re only testing the component, our unit, and not a child component several levels down.

In our tests we’ll trigger actions on the components and check that the components behave as expected.

We won’t look at the code. But the specifications for our components look like this:

*   Modal has class is-active when displayModal is true
*   Modal does not have class is-active when displayModal is false
*   Modal calls toggleModal when success button is clicked
*   Modal calls toggleModal when delete button is clicked
*   Button calls toggleModal when button is clicked

Our tests will shallow render the components and then check each of the specifications works.

There are a few reasons why unit tests should make up the bulk of our test suite:

#### Unit tests are fast.

A suite of hundreds of unit tests runs in a few seconds.

This makes unit tests useful for development. When refactoring code, we can change the code, and run the unit tests to check the changes didn’t break the component. We’ll know within a few seconds if we broke anything, because one of the tests will fail.

#### Unit tests are granular

In other words, they’re very specific.

If a unit test is failing, the broken test will tell us how and why it’s failing.

Unit tests are good to check the fine details of how our application works. They’re the best tool to use when developing, especially if you follow test driven development.

But they can’t test everything.

To make sure we’re rendering the correct style, we need to use snapshot tests.

### Snapshot tests

Snapshot tests are tests that take a picture of your rendered component and compare it with a previous picture of your component.

The best way to write snapshot tests in JavaScript is with [Jest](https://facebook.github.io/jest/).

Instead of taking a picture of the rendered component, Jest takes a snapshot of the rendered component markup. This makes Jest snapshot tests much faster than traditional snapshot tests.

To register a snapshot test in Jest, you need to add something like the code below:

<pre name="7072" id="7072" class="graf graf--pre graf-after--p">const renderedMarkup = renderToString(ModalComponent)  
expect(renderedMarkup).toMatchSnapshot()</pre>

Once you register a snapshot, Jest takes care of everything else. Each time the unit tests are run it regenerates a snapshot and compares it against the previous snapshot.

If the code changes, Jest throws an error and warns that the markup has changed. The developer can then check manually that no class has been deleted by accident.

In the test below, somebody has deleted the `modal-card-foot` class from the `<footer>`.



![](https://cdn-images-1.medium.com/max/1600/1*RteTRRsAMThQ9sjCG9e-Pw.png)

A failing snapshot test



Snapshot tests are a way of checking nothing has changed about the style or markup of a component.

If the snapshot tests pass, we know our code change didn’t affect the display of our components.

If the tests fail, then we know that we **did** affect the render of the components and can check manually that the style is still correct.

You should have at least 1 snapshot tests per component. A typical snapshot test renders the component with some state to check it renders correctly.

Now we have unit tests and snapshot tests, it’s time to look at end to end (e2e) tests.

### End to end tests

End to end (e2e) tests are high-level tests.

They perform the same actions as we would if we tested an App manually.

In our app we have a user journey. When the user clicks on the button the modal will open, when they click the button in the modal the modal closes.

We can write an end to end test that runs through this journey. The test will open the browser, navigate to the webpage, and run through each action to make sure the app is behaving correctly.

These tests tell us that our units are working together correctly. It gives us high confidence that the main functionality of the app is working.

There are a few ways to write end to end tests for JavaScript applications. There are programs like test cafe that record you performing actions in a browser and replay them as tests.

There are also projects like nightwatch that let you write the tests in JavaScript. I would recommend using a library like nightwatch. It’s easy to pick up, and the tests run faster than recorded tests.

That said, nightwatch tests are still relatively slow. A suite of 200 unit tests takes seconds to run, a suite of 200 end to end tests takes minutes to run.

The other problem with end to end tests is that they are difficult to debug. When a test fails, it’s hard to find out why it failed, because the tests cover a lot of functionality.

### Conclusion

To test front-end component based web apps effectively, you need to three types of tests. Unit tests, snapshot tests, and e2e tests.

You should have multiple unit tests for each component, one or two snapshot tests per component, and one or two end to end tests that test multiple components connected together.

Overall unit test will make up the bulk of your tests, you’ll have some snapshot tests, and a few e2e tests.

If you follow the front-end testing pyramid, you’ll create maintainable web apps with killer test suites.

_You can see an_ [_example repository of the app with snapshot tests, unit tests, and end to end tests on GitHub_](https://github.com/eddyerburgh/example-front-end-test-pyramid-app)_._








