---
author: Edd Yerburgh
authorTwitter: https://twitter.com/EddYerburgh
authorFacebook: none
title: "Vue Test Utils and Jest: how to write simple unit tests for your front end"
subTitle: "In this tutorial I’m going to show you how to test Vue components...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*KlrR7EWfaDgtcW5hJGFjHQ.jpeg
url: https://medium.freecodecamp.org/simple-unit-tests-with-vue-test-utils-and-jest-c384d7abc321
id: simple-unit-tests-with-vue-test-utils-and-jest-c384d7abc321
date: 2017-09-08T13:24:32.439Z
tags: [
  "JavaScript",
  "Vue",
  "Programming",
  "Web Development",
  "Front End Development"
]
---
# Vue Test Utils and Jest: how to write simple unit tests for your front end







![](https://cdn-images-1.medium.com/max/2000/1*KlrR7EWfaDgtcW5hJGFjHQ.jpeg)







In this tutorial I’m going to show you how to test Vue components.

We’re going to write unit tests and snapshot tests with Jest and Vue Test Utils. All without Webpack.

This tutorial is for users familiar with unit testing. If you’re new to unit testing check out my article on [unit testing Vue components for beginners](https://eddyerburgh.me/unit-test-vue-components-beginners).

### Setup

I’ve made [a simple starter project](https://github.com/eddyerburgh/vue-unit-test-starter/). Git clone it into a directory:

<pre name="b5e5" id="b5e5" class="graf graf--pre graf-after--p">git clone https://github.com/eddyerburgh/vue-unit-test-starter.git</pre>

cd into it and install the dependencies:

<pre name="c7f9" id="c7f9" class="graf graf--pre graf-after--p">cd jest-vue-starter && npm install</pre>

When the dependencies are installed, run the development server:

<pre name="71db" id="71db" class="graf graf--pre graf-after--p">npm run dev</pre>

Now we can get back to the code.

One thing to talk about is aliases. Aliases are a way to use shorthand notation to import files. Instead of long import statements like the one below:

<pre name="b69d" id="b69d" class="graf graf--pre graf-after--p">import someModule from '../../../../../src/components/someModule'</pre>

You can use a shorthand notation, or alias. a common alias is the `@` symbol, which resolves to the `src` directory:

<pre name="6344" id="6344" class="graf graf--pre graf-after--p">import someModule from '@/components/someModule'</pre>

Note: You can set any alias you want, but the vue-cli projects use `@` to refer to the `src` directory.

In vue-cli projects, [Webpack is used to add the functionality](https://github.com/eddyerburgh/jest-vue-starter/blob/master/build/webpack.base.conf.js#L25). This is great, but we aren’t using Webpack to run our tests. We need another way to resolve aliases.

That’s where babel comes in. There’s a plugin — babel-plugin-module-resolver — that resolves aliases in babel. You can see it in the `.babelrc`. It’s only used in the test environment, because when you run the dev or production build, Webpack does the alias resolving.

Check out this file:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/af5891488edf200128e43f4e9cf5db21?postId=c384d7abc321" data-media-id="af5891488edf200128e43f4e9cf5db21" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F13196123%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Ok, now you’ve got an overview of the project, it’s time to add Jest.

### Jest

Jest is a test framework. It’s one of [the fastest testing frameworks for Vue single file components](https://github.com/eddyerburgh/vue-unit-test-perf-comparison) (SFCs).

As well as running tests, Jest comes with a load of other features out the box, like mocks, code coverage and snapshot testing.

First thing to do is install Jest:

<pre name="517a" id="517a" class="graf graf--pre graf-after--p">npm install --save-dev jest</pre>

To test SFCs, you need to compile them into JavaScript before you run the tests. If you try and run an uncompiled SFC, you’ll get a syntax error.

Jest doesn’t compile `.vue` files out the box. You need to tell it to compile them. You do this by adding a `jest` field to the `package.json`.

Add the code below to your `package.json`.

<pre name="a5a9" id="a5a9" class="graf graf--pre graf-after--p">"jest": {  
    "moduleFileExtensions": [  
      "js",  
      "json",  
      "vue"  
    ],  
    "transform": {  
      "^.+\\.js$": "<rootDir>/node_modules/babel-jest",  
      ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"  
    }  
  }</pre>

You’ll see a `moduleFileExtensions` field. This tells Jest to run files with a `.vue` extension, as well as `.js` and .`json`.

There’s also a `transform` field. This tells Jest how to compile files before running them. It matches all `.js` files, and compiles with babel-jest. All .vue files are compiled with vue-jest.

These are custom transforms built for Jest. babel-jest, compiles JavaScript. vue-jest takes `.vue` files and compiles them into JavaScript.

You need to install both packages:

<pre name="a10e" id="a10e" class="graf graf--pre graf-after--p">npm install --save-dev babel-jest vue-jest</pre>

Ok cool, now you should add a smoke test, to make sure everything’s working.

In `src/components` create a `__tests__` directory. Add a `MessageToggle.spec.js` file. So the full file path will be `src/components/__tests__/MessageToggle.spec.js`.

Copy the code below into the file:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/743393b744dc33fc3f3fdbcd10f420aa?postId=c384d7abc321" data-media-id="743393b744dc33fc3f3fdbcd10f420aa" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F13196123%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Jest runs all `.js` files in `__tests__` directory automatically. It even adds a test environment variable, so all your test script does is run Jest.

In the `scripts` field of your `package.json` add the `unit` script:

<pre name="8440" id="8440" class="graf graf--pre graf-after--p">"unit": "jest"</pre>

Now run the script:

<pre name="a94f" id="a94f" class="graf graf--pre graf-after--p">npm run unit</pre>

Great, first passing test 👌.

Now you’re going to write more complicated tests using Vue Test Utils.

### Vue Test Utils

[Vue Test Utils](https://github.com/vuejs/vue-test-utils/) is in beta at the moment, but you can use it now without a problem. The API is pretty much finalized.

Install it:

<pre name="5f55" id="5f55" class="graf graf--pre graf-after--p">npm install --save-dev vue-test-utils</pre>

Now you’re going to replace the test in `MessageToggle.spec.js` with tests using Vue Test Utils.

Copy the code below into `src/components/__tests__/MessageToggle.spec.js`





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c8a325834ab964813499683cd0ad3614?postId=c384d7abc321" data-media-id="c8a325834ab964813499683cd0ad3614" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F13196123%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Here, we can use the `[mount](https://github.com/vuejs/vue-test-utils/blob/dev/docs/en/api/mount.md)` function to return a wrapper object. the wrapper contains some helper methods, like `text`, that help assert components. You can see a full list in [the docs](https://github.com/vuejs/vue-test-utils/tree/dev/docs/en/api/wrapper).

Ok, let’s add a more complicated test that performs an action on the `Messagetoggle` component. Copy the code below into `MessageToggle.spec.js`:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/84cf2da1c1f38a55d62265be75684675?postId=c384d7abc321" data-media-id="84cf2da1c1f38a55d62265be75684675" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F13196123%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





This time, we’re clicking a button (`#toggle-message`) in `MessageToggle` and checking that the `<p>` tag text has changed correctly.

Now run the test script:

<pre name="6606" id="6606" class="graf graf--pre graf-after--p">npm run unit</pre>

Woop, passing tests! 🙌

Vue Test Utils abstracts away the Vue internals. So all you need to do is learn the Vue Test Utils API.

Now you’re going to write a test for the List component. The List component takes props, luckily Vue Test Utils gives us a way to pass props when mounting the component.

Create a file `/src/components/__tests__/List.spec.js`, and paste in the code below





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/fe834f540ab6c6a1487449ca863b0e0b?postId=c384d7abc321" data-media-id="fe834f540ab6c6a1487449ca863b0e0b" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F13196123%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





This time you’ll notice we use the `shallow` function. This is the same as `mount`, except it only renders the component one level deep. Generally, it’s best to use shallow.

Now you’ve written some unit tests, it’s time to look at snapshot testing.

### Snapshot testing

Jest has this great feature called snapshot testing.

Snapshot testing basically takes a copy of your component tree as a string, and then compares against it each time you run your tests. If the rendered component HTML changes, the test fails.

Let’s add a snapshot test to `Messag.spec.js`.

You need to render the component to a string using the vue-server-renderer. The string returned isn’t very pretty, so you should add jest-serializer-vue to prettify your snapshots.

    npm install --save-dev 

You also need to tell Jest to use the serializer. Add a `snapshotSerializers` field inside the `jest` field in your`package.json`:

<pre name="2d78" id="2d78" class="graf graf--pre graf-after--p">"snapshotSerializers": [  
    "<rootDir>/node_modules/jest-serializer-vue"  
]</pre>

Now update List.spec.js to include a snapshot test:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/3b18fc089eda92a46ba70dfd816c755e?postId=c384d7abc321" data-media-id="3b18fc089eda92a46ba70dfd816c755e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F13196123%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





This test shallow mounts the component, and renders it to an HTML string with vue-server-renderer.

Now run your tests:

<pre name="800e" id="800e" class="graf graf--pre graf-after--p">npm run unit</pre>

You’ll see some new output about a snapshot being saved. go have a look in `src/components/__tests__/__snapshots__/List.spec.js.snap`:

<pre name="8d1e" id="8d1e" class="graf graf--pre graf-after--p">// Jest Snapshot v1, [https://goo.gl/fbAQLP](https://goo.gl/fbAQLP)</pre>

<pre name="1750" id="1750" class="graf graf--pre graf-after--pre">exports[`List.vue has same HTML structure 1`] = `  
<ul>  
    <li>  
        list item one  
    </li>  
    <li>  
        list item two  
    </li>  
</ul>  
`;</pre>

Cool, a snapshot. 📸

Now if the markup of `List.vue` changes, Jest will warn you the snapshot changed when you run your tests.

### Conclusion

Now you’ve set up unit tests and snapshot tests with Jest and Vue Test Utils.

I skipped over a few concepts. You can look at the [finished repository on GitHub](https://github.com/eddyerburgh/jest-vue-example) if your project didn’t work correctly.

Jest has [loads more features](https://facebook.github.io/jest/) to make testing easier.

Vue Test Utils also has a lot more methods — [check out the docs](https://github.com/vuejs/vue-test-utils/tree/dev/docs/en).

Unit testing Vue components has never been easier, so get out there and write some tests!

If you learned something from this article, share and give a 👏 to get the word out!








