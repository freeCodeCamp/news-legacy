---
author: Nicolas Cuillery
authorTwitter: https://twitter.com/ncuillery
authorFacebook: none
title: "What I learned at React Europe 2017"
subTitle: "Few days ago, the 3rd edition of the biggest React conference in Europe took place in Paris. No heatwave or transportation strike this ye..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*LI8kcoWrhCJUoAXdqz6vaQ.jpeg
url: https://medium.freecodecamp.org/what-ive-learned-from-react-europe-2017-c433468890d6
id: what-ive-learned-from-react-europe-2017-c433468890d6
date: 2017-05-23T13:56:01.281Z
tags: [
  "React",
  "React Native",
  "JavaScript",
  "Tech",
  "Technology"
]
---
# What I learned at React Europe 2017







![](https://cdn-images-1.medium.com/max/2000/1*LI8kcoWrhCJUoAXdqz6vaQ.jpeg)







Few days ago, the 3rd edition of the biggest React conference in Europe took place in Paris. No heatwave or transportation strike this year — only great talks and interesting people.

Here is my feedback from my most appreciated talks of this edition.

Speaking of interesting people, I’d like to warmly thank [Griffith](https://medium.com/@griffithtp) Tchen Pan, just met among the audience, for his review of this article, as well as my team mates at [M6 Web](http://tech.m6web.fr/).

### Keynote

Those who came especially to hear news and updates about React could be satisfied: [Andrew Clark](https://medium.com/@acdlite) opened the conference with the roadmap for React. All these updates can be resumed in a single name: React Fiber.

Andrew illustrated React Fiber with a performance analysis of the video streaming in the newsfeed. They had to deal with poor performance caused by other tasks blocking the main JS thread. It was a scheduling problem, solved by splitting the execution of the tasks: the main thread is able to process chunks as they arrive so videos are no longer interrupted. The idea behind React Fiber is to schedule these tasks at the component level via the async rendering.

Coming in React 16, the revamp will also include fragments (group of sibling component, no more div wrapper, just return an array in the render function). Also a better error handling will be shipped with error boundaries (i.e. try/catch for component) and distinction of critical errors from the others. In case of critical error, the component will unmount to avoid degraded UI, corrupted datas…

React 16 is already in production, ready to install with the _next_ tag:

`yarn add react@next`

Beyond React 16, the enhanced render scheduling allows rendering to be prioritized, depending on the viewport position: this allows offscreen or hidden elements to render last without delaying rendering of “immediately-visible” components. It could also improve the user experience when using code-splitting within the current screen. Code-splitting could cause a smoothless cascading rendering of the screen. To avoid this side-effect, React 16 introduces a “commit phase” which consists to delay all the DOM updates at the end of the rendering phase to avoid inconsistent DOM.

Introducing React Fiber was a great way to open the conference. Its new features are highly anticipated by the community. To learn more about React Fiber: [https://github.com/acdlite/react-fiber-architecture](https://github.com/acdlite/react-fiber-architecture)

### What I learned benchmarking React

[Dominic Gannaway](https://medium.com/@trueadm) from Facebook presented the recent optimizations on the React package. Inspired by the design of lightweight clones of React like Inferno (created by him) & Preact, he works to make the React package lighter and faster to load.

Thanks to a new build system backed by [Rollup](https://github.com/rollup/rollup), the React package gains 10% weight and is 9% faster to load.

> Webpack is for apps, Rollup is for libraries

They also externalize the `PropTypes` support as well as deprecated code like `React.createClass` (see [here](https://facebook.github.io/react/blog/2017/04/07/react-v15.5.0.html#new-deprecation-warnings)).

Dominic pointed out the importance of using a powerful and consistent benchmark tool when trying to optimize the React package. He showed an interesting “snapshot benchmarking” tool comparing current metrics versus the previous one (package size, initial load time, time to interactive) that runs on [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/).

This tool was a great help to get confidence when moving the React codebase. It is a prerequisite to make React smaller and faster.

To know more about Dominic’s work:  
New build system: [https://github.com/facebook/react/pull/9327](https://github.com/facebook/react/pull/9327)  
Benchmark: [https://github.com/facebook/react/pull/9465](https://github.com/facebook/react/pull/9465)

### High quality JavaScript tools

As an early adopter of Jest, I can tell that using Jest two years ago was like crossing the desert. I also lived the mutation of Jest which is nowadays a great and widely-used tool. That’s why I was very pleased to hear [Christoph Pojer](https://medium.com/@cpojer) telling that story.



![](https://cdn-images-1.medium.com/max/1600/1*RGql2QYssW6i_RPldPED_A.jpeg)

Sad jester (“Stańczyk” by [Jan Matejko](https://en.wikipedia.org/wiki/Jan_Matejko "Jan Matejko"))



That story is: how Jest has turned from a tool into a “product”. A product is focused on performance and features which bring adoptability, and in case of a test runner, 2 experiences must be delightful: running tests and writing tests.

The performance has been improved by implementing parallel test runs, using all the CPUs, and measuring the execution times to schedule them better for the next runs.

Christoph and the community made a great job to bring interesting features into Jest, like relevant output (useful diff instead of pointless error stacktrace), immersive watchmode (interactive CLI, navigation among the list of test cases to rerun them).

Christoph mentioned the snapshot testing: in addition to conventional testing (it’s not a replacement !), it’s a great way to visualize the comprehensive output of a component (current vs expected).

Jest 20 will come with the multi-project runner. By using the option `--projects` Jest is able to run multiple test suites and consolidate tests result in a single terminal window. Useful for using the watch-mode on a multi-repo codebase.

Jest has been moved to a multi-package architecture and some of them are used on several projects at Facebook: jest-haste-map, jest-snapshot, jest-validate (an CLI options parser like [Commander](https://github.com/tj/commander.js)). It has been useful internally to consolidate their infrastructures and share best practices.

Worth to mention: Jest is now maintained by 2 core developers + the community. We are strongly encouraged to contribute, Jest project is approchable and easy to contribute.

Blog post about Jest 20: [https://facebook.github.io/jest/blog/2017/05/06/jest-20-delightful-testing-multi-project-runner.html](https://facebook.github.io/jest/blog/2017/05/06/jest-20-delightful-testing-multi-project-runner.html)

### Worse is better: the upside of JavaScript fatigue

The point of this talk is that the JavaScript fatigue is a good thing, healthy for the ecosystem. [Kevin Lacker](https://medium.com/@lacker) started by remind us what the [JavaScript fatigue](http://thefullstack.xyz/javascript-fatigue/) is.

Hundreds of new librairies are announced each month on [Hackernews](https://news.ycombinator.com/). It’s impossible to take a look to everything. The good news is that you don’t have to: just pick **the right thing**.

From a principle conceived by Richard P. Gabriel in the eighties, the right thing has 4 golden characteristics:

*   Simplicity
*   Correctness
*   Consistency
*   Completeness

But history shows that the right thing is sometimes… not the right thing. Actually, only the simplicity matters.

> Simple things are easier to integrate.

The concept of **worse is better** is born. We could bear a lack of correctness, consistency or completeness if the thing is simple to handle!

At this point came the parallel with the raise of React: Simplicity above all other characteristics.

Simplicity leads to popularity which leads to contributors. Today we can enjoy all that React was missing at its launch : state management, routing, getting started tools (create-react-app).

Speaking of create-react-app, it really gathers all the best things brought by the community since 3 years and it is far better that it could have been at React launch.

The JavaScript fatigue, then, is simply the consequence of the huge number of open-source contributors.





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/f58579891763afc6fa09f24801746b86?postId=c433468890d6" data-media-id="f58579891763afc6fa09f24801746b86" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fext_tw_video_thumb%2F720529583527890944%2Fpu%2Fimg%2FvjxT2cc8C2VPy3iZ.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





In conclusion, launch something simple, make it popular (documented, battle-tested), then fill the holes.

I found Kevin has made an interesting analogy between the modern JavaScript ecosystem and the _worse is better vs the right thing_ theory.

Excellent article about the Richard P. Gabriel theory: [https://en.wikipedia.org/wiki/Worse_is_better](https://en.wikipedia.org/wiki/Worse_is_better)

### Wabi Sabi

This Japanese word designates the art of “beauty into imperfection”. [Cheng Lou](https://medium.com/@chenglou) made a philosophic and very inspirational talk ([for the second year in a row](https://www.youtube.com/watch?v=mVVNJKv9esE)) about trade-offs.

Trade-offs are a big part of our job as software engineer because we don’t have unlimited time and money. So we use pieces of software which imperfectly covers our needs. Let’s say 80% of our needs: it corresponds to the **sweet spot** on the Pareto curve, a.k.a. the 80/20 rule. It means that a reasonable amount of time (about 20%) is sufficient to cover 80% of our needs.

Our IT world is full of 80% systems. For example, image compression: if you get 80% of the original image for 20% of its size, that’s a good trade-off.

About React, the trade-off may be the communication with sibling components which is far harder than parent/child components… The cause is the tree model, convenient for 80% of the case. The 100% approach would be a graph model.

Flux is a 80% system too. Some tasks are difficult, like managing side-effects or external sources of changes. Redux is generally great but the unlucky programmers in the 20% area need dirty workarounds. It reminds me the [dead drop pattern](https://medium.com/@erikras/redux-dead-drop-1b9573705bec) for example.

> Some things are not meant to be optimized.

It’s important to point out that, sometime, the trade-off is intentional because we are in the sweet spot, we don’t want to move. Let’s come back to the React example above, if React moved to a graph model handling 100% of the use cases, the whole library would be more complex which is not a good thing.

Being in a 80% system give us wiggle room, it boosts our creativity and adaptability. I work for few months with [redux-observable](https://redux-observable.js.org/) which I can now describe as “a trade-off for the 20% of the cases Redux doesn’t cover”.



![](https://cdn-images-1.medium.com/max/1600/1*DBGdHlkB6DVjBy62d3TANQ.gif)

And redux-observable is also a 80% system!



There are disadvantages in the 80% approach. First of all: the 20% obviously. it may not be chosen to build foundations. Moreover, the 80% design generally makes composing a nightmare (mutations, side-effects, …).

Some stuff belong to the 100% world. For example, types checking with Flow: a great strength of Flow is the ability to incrementally typing your code base. It’s okay to add Flow file by file but you can’t add Flow partially within a file because you wouldn’t be able to say “Ok, this part of my app is strongly type-checked, I trust it”. You would loose the benefit of the type-checking (the confidence).

It’s interesting to mention that 80% and 100% systems can be complementary: you can use a 80% tool because you have a compiler behind the scene (100%, the compiler never bails on you).

Reading documentation is a 80% action, reading source code is 100%.

In conclusion, Cheng mentioned a publication of Leslie Lamport as a source of inspiration for his talk. He says that the credibility of the 80% approach varies with the domain of science, from 0% in Math to 100% in sociology/psychology.

Again, Cheng has the awesome skill to look at the bigger picture with hindsight. I found his talk very instructive and… kind of refreshing in such a technical conference.





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/32c3edb05abbab695b650c57347cd5c2?postId=c433468890d6" data-media-id="32c3edb05abbab695b650c57347cd5c2" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F755525099697025024%2FqDXvdTS__400x400.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Leslie Lamport’s publication: [http://lamport.azurewebsites.net/pubs/future-of-computing.pdf](http://lamport.azurewebsites.net/pubs/future-of-computing.pdf)

### How streaming can supercharge React

[Sasha Aickin](https://medium.com/@aickin) introduced his talk with some metrics about the initial render time (+1s page load time on a commercial website leads to -20% conversion rate), making the point that SSR (Server Side Rendering) is vital.

But SSR comes with an other problem: It causes a delay between the first render (the browser paints the server-side-rendered markup immediately) and the “time-to-interactive” (the browser has loaded the bundle and the SPA is on). This duration is called in a funny way by [Paul Lewis](https://medium.com/@aerotwist) the “uncanny valley”.

Moreover, the SSR doesn’t scale well: the more your page is complex, the more it takes to render on the server-side. And it’s difficult to tell to your PO: “No, no, no, I can’t do that, it will make the whole page slower !”

Multiples things happen when a page is rendered on the server-side:

*   The browser sends a request to the server,
*   The server fetches the data from the API,
*   The server renders the markup,
*   The server returns the page with the markup.
*   The browser paints the markup and sends requests for the CSS and JS files. We have entered into the uncanny valley.
*   The server answers the requested files.
*   The browser loads and executes the bundle.
*   We’ve finally reached the end of the uncanny valley.

The problem is that all these tasks happen sequentially. What if we can parallelize things ?

Instead of a huge monolithic SSR, the server could process the render of the page fragment by fragment. Let’s consider a page made of a title, a main content and comments for example, Sasha showed that the server could returns a “chunk”, i.e. all pieces necessary to render a portion of the page (HTML + CSS + JS + JSON) for each part of the page.

With this approach (SCR or Server Chunk Rendering), both initial render time and uncanny valley duration are reduced (especially on mobile) because the SSR is more of a “stream” now, it could be parallelized:

*   The browser sends a request to the server,
*   The server processes and returns the first chunk (the title)
*   While the browser paints and loads it, the server starts to process the 2nd chunk (the main content) and can even ask the API the data of the 3rd chunk (the comments) at the same time too.
*   The server returns the 2nd chunk
*   And so on…

An other benefit is: if one of the multiple calls to the API falls into a black hole, it doesn’t take the whole page down, but only the area concerned by the chunk.

I had a lot of interrogation in mind after the talk: how to define the chunks within each page of the app ? does it imply the return of the good old HTML templates ? (I guess I have to take a look at Sasha’s lib [react-dom-stream](https://github.com/aickin/react-dom-stream)), but, yes, it seems we had a glimpse of what the future of the SSR will be:

> Rename ReactServer -> ReactDOMServerStream This file is going to be the replacement for ReactDOMServer.

Recent pull requests show that something is coming in the official React repo: [https://github.com/facebook/react/pull/9710](https://github.com/facebook/react/pull/9710)

Blog post about the uncanny valley: [https://aerotwist.com/blog/when-everything-is-important-nothing-is/](https://aerotwist.com/blog/when-everything-is-important-nothing-is/)

### Lightning talks (day 1)

#### return null; by Joshua Comeau

[Joshua Comeau](https://medium.com/@joshuawcomeau) spoke about “renderless” components. Those components don’t render anything but enjoy the React lifecycle though.

He presented a dead simple `Log` component which prints its child in the console, every time it changes, thanks to the React lifecycle.

Then, a more serious example: a component wrapping the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) that read out loud the content of a text input. The component is able to interrupt the current speech before reading the new content: since the new content is a prop, that could be easily implemented in a `componentWillReceiveProps`.

Joshua has gathered great explanations (as well as slides and examples) in his Github repository: [https://github.com/joshwcomeau/return-null](https://github.com/joshwcomeau/return-null)

#### Detox: Graybox End-to-End Tests and Automation Library for React Native

Even people who have never heard about Detox knew that something was coming when the audience applauded before the talk began, just when the title appeared on the screens!

In the mobile development world, manual QA is time consuming, up to 10 full days for the Wix app. So [Tal Kol](https://medium.com/@talkol) and people at Wix put effort in automated tests and used the number 1 framework: [Appium](http://appium.io/). It didn’t give satisfaction because tests have to run on real devices, they are very slow, complicated to write and flaky (they end up with _sleep()_ everywhere). So they decided to create a new tool: Detox!

While Appium is a blackbox, Detox is more of a “greybox”: everything on the device (or simulator) is monitored (network, JS thread, etc.), kept controlled and synchronized to avoid flakiness.

The talk ended up with a video showing a very fast test suite execution.

We encountered the exact same problems with Appium in my client company [M6 Web](http://tech.m6web.fr/). Due to the lightning talk format, it was impossible to explain in detail the internal of Detox so we still have a lot of questions (does it work with brownfield app ?), but we’ll definitely try Detox by ourselves!

Repo: [https://github.com/wix/detox](https://github.com/wix/detox)

#### Serious graphics on React Native

Great way to close Day 1: a visual lightning talk full of cool stuff like video games, image filters, data viz, ... by [James Ide](https://medium.com/@ji) from Expo.

James presented the GLView component of Expo which is able to display OpenGL GPU-accelerated graphics on a mobile device.

GLView component architecture is a bit different from other React Native component. It used the ability of JavaScriptCore (the mobile JavaScript execution environment) to call the C native API without using the main bridge. So the graphics are not affected by the occupation on the bridge.

Then James showed some graphic interfaces like effects on the video stream from the camera, video-games and an example of a 3D view created with the existing library [gl-react](https://github.com/gre/gl-react) that is compatible with React Native.

GLView documentation: [https://docs.expo.io/versions/v17.0.0/sdk/gl-view.html](https://docs.expo.io/versions/v17.0.0/sdk/gl-view.html)

### Composition: a superpower explained

I found that Functional Programming is generally incredibly useful, concise and elegant, but we shouldn’t fall in the trap of doing FP… for doing FP, when code becomes less readable and understandable than before. [Nik Graf](https://medium.com/@nikgraf) didn’t fall in that trap when he presented his talk about composition, inspired by his work on the color API of [polish](https://github.com/styled-components/polished).

To illustrate the original problem, Nik presented an example of imperative code using [Lodash](https://lodash.com) (since the live video has been temporary removed from YouTube, I’ve rewritten similar code snippets):





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/e8fbabf45b3227bbf49666eb0a4bf418?postId=c433468890d6" data-media-id="e8fbabf45b3227bbf49666eb0a4bf418" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F4425455%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





That code full of temporary variables could be improved with the chain API:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/8849a772fbf314dcd13f1f33b6554b54?postId=c433468890d6" data-media-id="8849a772fbf314dcd13f1f33b6554b54" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F4425455%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





That is more concise but still not perfect, there are still the `chain` and `value` operator (seriously, who have never forgotten `.value()` at the end of an explicit Lodash chain?). Moreover, the chain API kills the ability to partially import Lodash (see [this excellent article](https://medium.com/making-internets/why-using-chain-is-a-mistake-9bc1f80d51ba)).

Real composition allows to define a pipe with [Ramda](http://ramdajs.com/), [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide):





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/994c9893ca42ef4cda96461ec36cbf88?postId=c433468890d6" data-media-id="994c9893ca42ef4cda96461ec36cbf88" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F4425455%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





We can find a similar ugly syntax in React with the HoC (High-Order Component) pattern and, again, composition could improve the readability:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/559d8513e11fcc188c2675db41b2660a?postId=c433468890d6" data-media-id="559d8513e11fcc188c2675db41b2660a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F4425455%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



This example comes straight from the [official React documentation](https://facebook.github.io/react/docs/higher-order-components.html)



The `compose` function from either Ramda, lodash/fp, recompose or react-apollo can be used here (oh, I’ve already put the mind-blown gif in this article, right ?). So it seems there is a real pattern here.

That was a source of inspiration when Nik created the color API of polish: a color could be a composition of tint, light and saturation! They made a cool api like Ramda or Lodash/fp, composable but also usable in the imperative style thanks to currying.

Back to React, Nik showed that we can write our own HoC function to avoid repetition. For example, when we have a bunch of component that need a boolean prop to be true to display content:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/e66b4ce978d39b6a3e1fa9c38d5acb7d?postId=c433468890d6" data-media-id="e66b4ce978d39b6a3e1fa9c38d5acb7d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F4425455%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





We can do the same with a HoC function `withErrorMessage` that decorate a text input with an error message for example.

Nik closed the talk with a React VR screen showing planets rotation, the rotation is implemented with a syntax similar to React Native Animated. He explains how the animation is contained in a reusable HoC function `withRotation`.

This talk provided relevant examples to illustrate FP concepts like currying, Higher-order-Function and how they could be applied to React (Higher-order-Component). I’m definitely looking forward to analyze the `withRotation` HoC and see if I could transpose that on my React Native projects.

React doc about composition & HoC: [https://facebook.github.io/react/docs/higher-order-components.html](https://facebook.github.io/react/docs/higher-order-components.html)

### React as a Platform

It’s a well-known fact that Airbnb makes an extensive use of React and React Native. [Leland Richardson](https://medium.com/@intelligibabble) pointed out that it was a big step forward:

Instead of writing Airbnb 3 times (for Web, iOS and Android) by 3 different teams (JavaScript / Java / Swift), React and React Native allows a 2-time writing (Web and native) by the same team (Javascript). But now, the engineer writes twice the almost identical code. Couldn’t it be better if they write it only once ?

> Write one, run anywhere ?

Leland thinks we can achieve that. React Native was an eye-opener: React can address multiple platforms. Then, [React Native for Web](https://github.com/necolas/react-native-web) had come, followed by Windows, Ubuntu, VR, …

The biggest obstacle of component sharing between platforms is the import of the platform implementation, for example with React Native:

<pre name="56ef" id="56ef" class="graf graf--pre graf-after--p">import { View } from 'react-native';</pre>

Note that a React DOM component doesn’t have such an import for legacy reason but shouldn’t it be for sake of consistency ?

<pre name="054b" id="054b" class="graf graf--pre graf-after--p">import { Div } from 'react-dom'; //To discuss only, don't do that ;)</pre>

Based from the experience of the Airbnb’s library of React Native components, only 7 React Native APIs are widely used. Lots of the 70+ APIs are composition of these 7 primaries.

Leland came with a proposal: these 7 APIs wrapped in an NPM package named react-primitives.

*   `View`
*   `Image`
*   `Text`
*   `Animated`
*   `Touchable`
*   `Platform`
*   `StyleSheet`

Leland is aware that it isn’t perfect: the presence of `Animated` is questionnable. In the opposite, `TextInput` is not included despite it can’t be a composition of the 7 primitives.

But maybe an optional platform extension is the answer (inspired by the React Native ability to define platform-specific implementations by adding a suffix at the end of the file name).

Take the checkbox example: _Checkbox.js_ could contain a composition of primitives to design a checkbox on every platform where the checkbox doesn’t exist. And, as an optimization, _Checkbox.web.js_ could contain only the input component from react-dom.

<pre name="42f1" id="42f1" class="graf graf--pre graf-after--p"><input type="checkbox"></pre>

As if that were not enough convincing, Leland closed his talk with [react-sketchapp](https://github.com/airbnb/react-sketchapp), showing how they treated the design tool [Sketch](https://www.sketchapp.com/) as an additional platform without modifications in the code base thanks to primitives. Airbnb designers can design storyboards using the real library of React Native components.





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/a843c7b5b3c58149bc26d96968cc1460?postId=c433468890d6" data-media-id="a843c7b5b3c58149bc26d96968cc1460" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F467925031486763008%2FQ0_ncLBr_400x400.jpeg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





react-primitives: [https://github.com/lelandrichardson/react-primitives](https://github.com/lelandrichardson/react-primitives)

### Lightning talks (day 2)

#### Expo Snack

In addition to making a great intro for each speaker during these 2 days, [Brent Vatne](https://medium.com/@notbrent) presented Snack for the Expo app in a lightning talk.

Snack is the replacement of the former React Native playground ([rnplay-web](https://github.com/rnplay/rnplay-web)). The problem with rnplay-web was a very slow feedback loop. Code changes were sent to the server which had to run the React Native packager and sent back the output to the browser.

With Snack, the code changes from the web editor are sent to the device and reexecuted directly.

Snack also includes a QR code generation to get your code running in the Expo app on your own device.

Examples of the official React Native documentation has moved to Snack. For example: [http://facebook.github.io/react-native/releases/next/docs/text.html](http://facebook.github.io/react-native/releases/next/docs/text.html)

To play with the QR code generation, drag’n drop of Expo’s bridged components running on your own device in no time: [https://snack.expo.io/](https://snack.expo.io/)

#### Smarter code-splitting and preloading for React applications

In his lightning talk, [Brandon Dail](https://medium.com/@aweary) spoke about code-splitting with react-loadable and its ability to preload a component using the static method `preload()`.

There are 2 approaches regarding the preloading. The “passive” preloading is based on user’s **intent**. For example, a list page could preload the detail page because there are pretty good chances that the user want to open the detail page. This approach should be based on the analytics to avoid wasteful preloading.

On the opposite, the “active” approach consists in a preload based on user’s **action**, like a mouse approaching a button (`onMouseEnter` event). For that case, Brandon created the library react-perimeter which define boundaries around a component and call a callback when they are breached (similar to a `onMouseEnter` event): useful to call the preload method.

react-loadable: [https://github.com/thejameskyle/react-loadable](https://github.com/thejameskyle/react-loadable)  
react-perimeter: [https://github.com/aweary/react-perimeter](https://github.com/aweary/react-perimeter)











* * *







Only 2 days after the conference, videos of the talks started be published on the conference YouTube channel, stay tuned on [https://www.youtube.com/channel/UCorlLn2oZfgOJ-FUcF2eZ1A/videos](https://www.youtube.com/channel/UCorlLn2oZfgOJ-FUcF2eZ1A/videos) !








