---
author: Stephen Scott
authorTwitter: https://twitter.com/suchipi
authorFacebook: none
title: "The Right Way to Test React Components"
subTitle: "There’s a lot of confusion right now about the “right” way to test your React components. Should you write all your tests by hand, or onl..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*Ef724ZqepSMHk8AhRCCM7A.jpeg
url: https://medium.freecodecamp.org/the-right-way-to-test-react-components-548a4736ab22
id: the-right-way-to-test-react-components-548a4736ab22
date: 2017-02-04T22:41:36.083Z
tags: [
  "JavaScript",
  "React",
  "Testing",
  "Software Testing",
  "Web Development"
]
---
# The Right Way to Test React Components







![](https://cdn-images-1.medium.com/max/2000/1*Ef724ZqepSMHk8AhRCCM7A.jpeg)







There’s a lot of confusion right now about the “right” way to test your React components. Should you write all your tests by hand, or only use snapshots, or some of both? Should you test props? State? Styles/Layout?

I don’t think there’s one “right” way, but I’ve found a few patterns and tips that work really well for me that I’d like to share.

### Background: The App We’ll Test

Suppose you want to test a `LockScreen` component, which behaves like a phone’s lock screen. It:

*   Shows the current time
*   Can show a user-defined message
*   Can show a user-defined background image
*   Has a slide-to-unlock widget at the bottom

It looks something like this:



![](https://cdn-images-1.medium.com/max/1600/1*z_dRikEoV22y7d87sBU_Ww.gif)



You can try it out [here](https://suchipi.github.io/react-testing-example-lockscreen), and view the code [on GitHub](https://github.com/suchipi/react-testing-example-lockscreen).

Here’s the code for the top-level `App` component:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/6af5cb69966f7e801e7b70adfe81905d?postId=548a4736ab22" data-media-id="6af5cb69966f7e801e7b70adfe81905d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F1341513%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





As you can see, `LockScreen` receives three props: `wallpaperPath`, `userInfoMessage`, and `onUnlocked`.

Here’s the code for `LockScreen`:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/36a233c5d515548bfe32b4dae72ad323?postId=548a4736ab22" data-media-id="36a233c5d515548bfe32b4dae72ad323" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F1341513%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





`LockScreen` pulls in a few other components, but since we’re only testing `LockScreen`, let’s focus on it right now.

### Component Contracts

In order to test `LockScreen`, you must first understand what its **Contract** is. Understanding a component’s contract is the most important part of testing a React component. A contract defines the expected behavior of your component and what assumptions are reasonable to have about its usage. Without a clear contract, your component may be hard to understand. Writing tests is a great way to formally define your component’s contract.

Every React component has at least one thing that contributes to the definition of its contract:

*   **What it renders** (which may be nothing)

Additionally, most component contracts are affected by these things as well:

*   The **props the component receives**
*   The **state the component holds** (if any)
*   What the component does when the **user interacts with it** (via clicking, dragging, keyboard input, etc)

Some less common things that affect component contracts are:

*   The **context the component is rendered in**
*   What the component does when you call **methods on its instance** (public ref interface)
*   **Side effects** that occur as part of the component lifecycle (componentDidMount, componentWillUnmount, etc)

To find your component’s contract, ask yourself questions like:

*   What does my component render?
*   Does my component render different things under different circumstances?
*   When I pass a function as a prop, what does my component use it for?Does it call it, or just give it to another component? If it calls it, what does it call it with?
*   When the user interacts with my component, what happens?

### Finding LockScreen's Contract

Let’s go through `LockScreen`’s `render` method and add comments at places where its behavior can differ. You’ll look for ternaries, if statements, and switch statements as our clues. This will help us find variations in its contract.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/1e0611dc2a97d7706186c67efde0d563?postId=548a4736ab22" data-media-id="1e0611dc2a97d7706186c67efde0d563" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F1341513%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





We’ve learned three constraints that describe `LockScreen`'s contract:

*   If a `wallpaperPath` prop is passed, the outermost wrapping `div` that the component renders should have a `background-image` CSS property in its inline styles, set to whatever the value of `wallpaperPath` was, wrapped within `url(...)`.
*   If a `userInfoMessage` prop is passed, it should be passed as children to a `TopOverlay`, which should be rendered with a particular set of inline styles.
*   If a `userInfoMessage` prop is _not_ passed, _no_ `TopOverlay` should be rendered.

You can also find some constraints of the contract that are always true:

*   A `div` is always rendered, which contains everything else. It has a particular set of inline styles.
*   A `ClockDisplay` is always rendered. It does not receive any props.
*   A `SlideToUnlock` is always rendered. It receives the value of the passed `onUnlocked` prop as its `onSlide` prop, regardless of if it was defined or not.

The component’s `propTypes` are also a good place to look for clues about its contract. Here’s some more constraints I notice:

*   `wallpaperPath` is expected to be a string, and is optional.
*   `userInfoMessage` is expected to be a string, and is optional.
*   `onUnlocked` is expected to be a function, and is optional.

This is a good starting point for our component contract. There may be more constraints within this component’s contract, and in production code you will want to find as many as you can, but for the purposes of this example, let’s just work with these. You can always add tests later if you discover additional constraints.

### What’s Worth Testing?

Let’s look over the contract we found:

*   `wallpaperPath` is expected to be a string, and is optional.
*   `userInfoMessage` is expected to be a string, and is optional.
*   `onUnlocked` is expected to be a function, and is optional.
*   A `div` is always rendered, which contains everything else. It has a particular set of inline styles.
*   A `ClockDisplay` is always rendered. It does not receive any props.
*   A `SlideToUnlock` is always rendered. It receives the value of the passed `onUnlocked` prop as its `onSlide` prop, regardless of if it was defined or not.
*   If a `wallpaperPath` prop is passed, the outermost wrapping div that the component renders should have a `background-image` css property in its inline styles, set to whatever the value of `wallpaperPath` was, wrapped within `url(...)`.
*   If a `userInfoMessage` prop is passed, it should be passed as children to a `TopOverlay`, which should be rendered with a particular set of inline styles.
*   If a `userInfoMessage` prop is _not_ passed, _no_ `TopOverlay` should be rendered.

Some of these constraints are worth testing, and others are not. Here are three rules of thumb I use to determine that something is **not worth testing**:

1.  Will the test have to **duplicate _exactly_ the application code**? This will make it brittle.
2.  Will making assertions in the test duplicate any behavior that is **already covered by (and the responsibility of) library code**?
3.  From an outsider’s perspective, **is this detail important, or is it only an internal concern**? Can the effect of this internal detail be described using only the component’s public API?

These are only rules of thumb, so be careful not to use them to justify not testing something just because it’s hard. **Often, things that seem hard to test are the most important to test**, because the code under test is making many assumptions about the rest of the application.

Let’s go through our constraints and use these rules of thumb to determine which need to be tested. Here’s the first three:

*   `wallpaperPath` is expected to be a string, and is optional.
*   `userInfoMessage` is expected to be a string, and is optional.
*   `onUnlocked` is expected to be a function, and is optional.

These constraints are a concern of React’s `PropTypes` mechanism, and so writing tests around prop types fails rule #2 (already covered by library code). As such, **I don’t test prop types**. Because tests often double as documentation, I might decide to test something that failed rule #2 if the application code didn’t document the expected types very well, but `propTypes` are already nice and human-readable.

Here’s the next constraint:

*   A `div` is always rendered, which contains everything else. It has a particular set of inline styles.

This can be broken down into three constraints:

*   A `div` is always rendered.
*   The rendered `div` contains everything else that gets rendered.
*   The rendered `div` has a particular set of inline styles.

The first two constraints that we broke this down into do not fail any of our rules of thumb, so **we will test them**. However, let’s look at the third one.

Ignoring the background-image property that is covered by another constraint, the wrapping `div` has these styles:

<pre name="8159" id="8159" class="graf graf--pre graf-after--p">height: "100%",  
display: "flex",  
justifyContent: "space-between",  
flexDirection: "column",  
backgroundColor: "black",  
backgroundPosition: "center",  
backgroundSize: "cover",</pre>

If we wrote a test that these styles were on the div, we would have to test the value of each style _exactly_ in order to make useful assertions. So our assertions might be something like:

*   The wrapping div should have a height style property of 100%
*   The wrapping div should have a display style property of flex
*   …And so on for each style property

Even if we used something like `[toMatchObjec](https://facebook.github.io/jest/docs/expect.html#tomatchobjectobject)t` to keep this test succinct, this would duplicate the same styles in the application code, and be brittle. If we added another style, we would have to put the exact same code in our test. If we tweaked a style, we would have to tweak it in our test, even though the component’s behavior may not have changed. Therefore, this constraint fails rule #1 (duplicates application code; brittle). For this reason, **I don’t test inline styles, unless they can change at runtime.**

Often, if you are writing a test that amounts to “it does what it does”, or “it does exactly this, which happens to be duplicated in the application code”, then the test is either unnecessary or too broad.

Here’s the next two constraints:

*   A `ClockDisplay` is always rendered. It does not receive any props.
*   A `SlideToUnlock` is always rendered. It receives the value of the passed `onUnlocked` prop as its `onSlide` prop, regardless of if it was defined or not.

These can be broken down into:

*   A `ClockDisplay` is always rendered.
*   The rendered `ClockDisplay` does not receive any props.
*   A `SlideToUnlock` is always rendered.
*   When the passed `onUnlocked` prop is defined, the rendered `SlideToUnlock` receives that prop’s value as its `onSlide` prop.
*   When the passed `onUnlocked` prop is `undefined`, the rendered `SlideToUnlock`'s `onSlide` prop should also be set to `undefined`.

These constraints fall into two categories: “Some composite component is rendered”, and “the rendered component receives these props”. **Both are very important to test**, as they describe how your component interacts with other components. We will test all of these constraints.

The next constraint is:

*   If a `wallpaperPath` prop is passed, the outermost wrapping div that the component renders should have a `background-image` css property in its inline styles, set to whatever the value of `wallpaperPath` was, wrapped within `url(...)`.

You may think that, because this is an inline style, we do not need to test it. However, **because the value of** `**background-image**` **can change based on the** `**wallpaperPath prop**`**, it needs to be tested.** If we did not test it, then there would be no test around the effect of the `wallpaperPath` prop, which is part of the public interface of this component. You should always test your public interface.

The final two constraints are:

*   If a `userInfoMessage` prop is passed, it should be passed as children to a `TopOverlay`, which should be rendered with a particular set of inline styles.
*   If a `userInfoMessage` prop is _not_ passed, _no_ `TopOverlay` should be rendered.

These can be broken down into:

*   If a `userInfoMessage` prop is passed, a `TopOverlay` should be rendered.
*   If a `userInfoMessage` prop is passed, its value should be passed as children to the rendered `TopOverlay.`
*   If a `userInfoMessage` prop is passed, the rendered `TopOverlay` should be rendered with a particular set of inline styles.
*   If a `userInfoMessage` prop is _not_ passed, _no_ `TopOverlay` should be rendered.

The first and fourth constraints (a `TopOverlay` should/should not be rendered) **describe what we render, so we will test them.**

The second constraint verifies that the `TopOverlay` receives a particular prop based on the value of `userInfoMessage`. **It is important to write tests around the props that rendered components receive, so we will test it.**

The third constraint verifies that `TopOverlay` receives a particular prop, so you might think that we should test it. However, this prop is just some inline styles. Asserting that props are passed is important, but making assertions about inline styles is brittle and duplicates application code (fails rule #1). Because it’s important to test passed props, it’s not clear whether this should be tested just by looking at rule #1 alone; luckily, that’s why I have rule #3\. As a reminder, it’s:

> From an outsider’s perspective, **is this detail important, or is it only an internal concern**? Can the effect of this internal detail be described using only the component’s public API?

When I write component tests, I **only test the public API of the component** (including side effects that API has on the application) where possible. **The exact layout of this component is not impacted by this component’s public API; it is a concern of the CSS engine.** Because of this, this constraint fails rule #3\. Because it fails rule #1 and rule #3, **we will not test this constraint**, even though it verifies that `TopOverlay` receives a prop, which is normally important.

It was hard to determine whether that final constraint should be tested or not. Ultimately, it is up to you to decide which parts are important to test; these rules of thumb I use are only guidelines.

Now we’ve gone through all of our constraints, and know which ones we are going to write tests for. Here they are:

*   A `div` is always rendered.
*   The rendered `div` contains everything else that gets rendered.
*   A `ClockDisplay` is always rendered.
*   The rendered `ClockDisplay` does not receive any props.
*   A `SlideToUnlock` is always rendered.
*   When the passed `onUnlocked` prop is defined, the rendered `SlideToUnlock` receives that prop’s value as its `onSlide` prop.
*   When the passed `onUnlocked` prop is `undefined`, the rendered `SlideToUnlock`'s `onSlide` prop should also be set to `undefined`.
*   If a `wallpaperPath` prop is passed, the outermost wrapping div that the component renders should have a `background-image` css property in its inline styles, set to whatever the value of `wallpaperPath` was, wrapped within `url(...)`.
*   If a `userInfoMessage` prop is passed, a `TopOverlay` should be rendered.
*   If a `userInfoMessage` prop is passed, its value should be passed as children to the rendered `TopOverlay.`
*   If a `userInfoMessage` prop is _not_ passed, _no_ `TopOverlay` should be rendered.

By examining our constraints and putting them to scrutiny, we broke many of them down into multiple, smaller constraints. **This is great!** This will make it easier to write our test code.

### Setting Up Some Test Boilerplate

Let’s start scaffolding out a test for this component. I will be using [Jest](https://facebook.github.io/jest/) with [enzyme](http://airbnb.io/enzyme/) in my tests. Jest [works great with React](https://facebook.github.io/jest/docs/tutorial-react.html) and is also the test runner included in apps created with [create-react-app](https://github.com/facebookincubator/create-react-app), so you may already be set up to use it. Enzyme is a mature React testing library that works in both node and the browser.

Even though I’m using Jest and enzyme in my tests, you can apply the concepts here to almost any test configuration.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/691a8b26ae44f7590fc55fb5cece7f72?postId=548a4736ab22" data-media-id="691a8b26ae44f7590fc55fb5cece7f72" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F1341513%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





This is a lot of boilerplate. Let me explain what I’ve set up here:

*   I create `let` bindings for `props` and `mountedLockScreen`, so that those variables will be available to everything within the `describe` function.
*   I create a `**lockScreen**` **function** that is available anywhere within the `describe` function, that uses the `mountedLockScreen` variable to either `mount` a `LockScreen` with the current `props` or return the one that has already been mounted. This function returns an enzyme `[ReactWrapper](http://airbnb.io/enzyme/docs/api/mount.html)`. **We will use it in every test.**
*   I set up a `beforeEach` that resets the `props` and `mountedLockScreen` variables before every test. Otherwise, state from one test would leak into another. By setting `mountedLockScreen` to `undefined` here, when the next test runs, if it calls `lockScreen`, a new `LockScreen` will be mounted with the current `props`.

This boilerplate may seem like a lot just to test a component, but it lets us build up our props incrementally before we mount our component, which will help keep our tests dry. I use it for all of my component tests, and I hope you will find it useful; its utility will become more apparent as we write the test cases.

### Writing the Tests!

Let’s go through our list of constraints and add a test for each. Every test will be written such that it can be inserted at the `// All tests will go here` comment in the boilerplate.

*   A `div` is always rendered.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c71008284c02e6cb56e07c10cf6b4dd5?postId=548a4736ab22" data-media-id="c71008284c02e6cb56e07c10cf6b4dd5" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F1341513%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





*   The rendered `div` contains everything else that gets rendered.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/0fe7a586108ce6b5d32b344100cc952c?postId=548a4736ab22" data-media-id="0fe7a586108ce6b5d32b344100cc952c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F1341513%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





*   A `ClockDisplay` is always rendered.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a16ba541f49275f18c3ad128a4cec2b2?postId=548a4736ab22" data-media-id="a16ba541f49275f18c3ad128a4cec2b2" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F1341513%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





*   The rendered `ClockDisplay` does not receive any props.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2a2ec725199f819336009e493f905e03?postId=548a4736ab22" data-media-id="2a2ec725199f819336009e493f905e03" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F1341513%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





*   A `SlideToUnlock` is always rendered.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a942c9b9b169dc4bb99746ebfbb75410?postId=548a4736ab22" data-media-id="a942c9b9b169dc4bb99746ebfbb75410" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F1341513%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





All of the constraints thus far have been things that are _always_ true, so their tests were relatively simple to write. However, the remaining constraints begin with words like “If” and “When”. These are clues that they are _conditionally_ true, and so we will pair `describe` with `beforeEach` to test them. This is where all that testing boilerplate we wrote earlier comes in handy.

*   When the passed `onUnlocked` prop is defined, the rendered `SlideToUnlock` receives that prop’s value as its `onSlide` prop.
*   When the passed `onUnlocked` prop is `undefined`, the rendered `SlideToUnlock`'s `onSlide` prop should also be set to `undefined`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9dd3ec95f8fb8c750ea7fd643a2f9aaa?postId=548a4736ab22" data-media-id="9dd3ec95f8fb8c750ea7fd643a2f9aaa" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F1341513%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





When we need to describe behavior that only occurs within a certain condition, we can `describe` that condition, and then use `beforeEach` within that `describe` to set that condition up.

*   If a `wallpaperPath` prop is passed, the outermost wrapping div that the component renders should have a `background-image` CSS property in its inline styles, set to whatever the value of `wallpaperPath` was, wrapped within `url(...)`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ce9a1e15338c9eee24fb91bc5bb20b49?postId=548a4736ab22" data-media-id="ce9a1e15338c9eee24fb91bc5bb20b49" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F1341513%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





*   If a `userInfoMessage` prop is passed, a `TopOverlay` should be rendered.
*   If a `userInfoMessage` prop is passed, its value should be passed as children to the rendered `TopOverlay.`





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/24085e9e2b6c464d8e00c2387c456ee0?postId=548a4736ab22" data-media-id="24085e9e2b6c464d8e00c2387c456ee0" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F1341513%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





*   If a `userInfoMessage` prop is _not_ passed, _no_ `TopOverlay` should be rendered.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/4e33b74424dc3e51c65a1b6215b86f00?postId=548a4736ab22" data-media-id="4e33b74424dc3e51c65a1b6215b86f00" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F1341513%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





That’s all of our constraints! You can view the final test file [here](https://gist.github.com/suchipi/8f8d7de60e8e4ae48153db0c36133e63).

### “Not My Job”

When looking at the animated gif at the beginning of the article, you may have expected our test cases to end up as something like:

*   When the user drags the slide-to-unlock handle all the way to the right, the unlock callback is called
*   If the user drags the slide-to-unlock handle partway to the right and then releases it, the handle is animated back to its original position
*   The clock at the top of the screen should always show the current time

This intuition is natural. From an application perspective, these are some of the most noticeable features.

However, we didn’t end up writing tests for any of that functionality. Why? They were **not the concern of** `**LockScreen**`.

Because React components are reusable units, unit tests are a natural fit for them. And when unit testing, **you should only test what your actual unit cares about**. It is better to see the trees than the forest when writing React component tests.

Here is a handy cheat sheet that outlines **the concerns of most React components:**

*   What do I do with the props I receive?
*   What components do I render? What do I pass to those components?
*   Do I ever keep anything in state? If so, do I invalidate it when receiving new props? When do I update state?
*   If a user interacts with me or a child component calls a callback I passed to it, what do I do?
*   Does anything happen when I’m mounted? When I’m unmounted?

The features described above are the concerns of `SlideToUnlock` and `ClockDisplay`, so tests around those features would go in the tests for those components, not here.











* * *







### Summary

I hope these methods will help you write your own React component tests. To summarize:

*   **Find your Component Contract first**
*   Decide which constraints are worth testing and which aren’t
*   Prop types are not worth testing
*   Inline styles are usually not worth testing
*   The components you render and what props you give them are important to test
*   Don’t test things that are not the concern of your component

If you disagree or found this post helpful, I’d love to hear from you [on twitter](https://twitter.com/suchipi). Let’s all learn how to test React components together!

_Stephen Scott is a developer at_ [_Nexia_](http://www.nexiahome.com/) _working on a unified Smart Home Automation System. Nexia is hiring! Ping Stephen_ [_on Twitter_](https://twitter.com/suchipi) _if you want to join our close-knit team of developers in-office in Broomfield, CO._











* * *







_Although this article is licensed all rights reserved, all code samples in this article are available under the MIT license, as found in their source repository_ [_on GitHub_](https://github.com/suchipi/react-testing-example-lockscreen)_._








