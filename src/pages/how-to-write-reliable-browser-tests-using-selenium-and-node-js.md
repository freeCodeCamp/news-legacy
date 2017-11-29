---
author: Todd Chaffee
authorTwitter: none
authorFacebook: https://facebook.com/10154009118138217
title: "How to write reliable browser tests using Selenium and Node.js"
subTitle: "There are many good articles on how to get started with automated browser testing using the NodeJS version of Selenium...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*fCq0yqM563bKV4MFu8xufQ.png
url: https://medium.freecodecamp.org/how-to-write-reliable-browser-tests-using-selenium-and-node-js-c3fdafdca2a9
id: how-to-write-reliable-browser-tests-using-selenium-and-node-js-c3fdafdca2a9
date: 2017-09-23T20:45:43.458Z
tags: [
  "JavaScript",
  "Nodejs",
  "Technology",
  "Testing",
  "Programming"
]
---
# How to write reliable browser tests using Selenium and Node.js







![](https://cdn-images-1.medium.com/max/2000/1*fCq0yqM563bKV4MFu8xufQ.png)







There are many good articles on how to get started with automated browser testing using the NodeJS version of Selenium.

Some wrap the tests in Mocha or Jasmine, and some automate everything with npm or Grunt or Gulp. All of them describe how to install what you need, along with giving a basic working code example. This is very helpful because getting all the different pieces working for the first time can be a challenge.

But they fall short of digging into the details of the many gotchas and best practice of automating your browser testing when using Selenium.

This article continues where those other articles leave off, and will help you to write automated browser tests that are far more reliable and maintainable with the NodeJS Selenium API.

### Avoid sleeping

The Selenium `driver.sleep` method is your worst enemy. And everyone uses it. This may be because the documentation for the Node.js version of [Selenium](http://seleniumhq.github.io/selenium/docs/api/javascript/) is terse and only covers the syntax of API. It lacks real life examples.

Or it may be because a lot of example code in blog articles and on Q&A sites like StackOverflow make use of it.

Let’s say an panel animates from a size of zero, to full size. Let’s look.



![](https://cdn-images-1.medium.com/max/1600/1*gytLwY3SpcZWGRD1mVtz8g.gif)



It happens so quickly you may not notice that the buttons and controls inside the panel are constantly changing size and position.

Here’s a slowed down version. Pay attention to the green close button and you can see the changing size and position of the panel.



![](https://cdn-images-1.medium.com/max/1600/1*_X83WMafi5ST_XaPhn4aQA.gif)



This is hardly ever a problem for real users because the animation happens so fast. If it were slow enough, like in the second video, and you tried to manually click on the close button while this was happening, you might click the wrong button, or miss the button altogether.

But these animations usually happen so quickly, you never have a chance to do that. Humans just wait for the animation to complete. Not true with Selenium. It’s so quick that it can try to click on elements that are still being animated, and you might get an error message like:

    System.InvalidOperationException : Element is not clickable at point (326, 792.5)

This is when many programmers will say “Aha! I’ve got to wait for the animation to finish so I’ll just use `driver.sleep(1000)` to wait for the panel to be usable.”

#### So what’s the problem?

The `driver.sleep(1000)` statement does what it looks like. It stops execution of your program for 1000 milliseconds, and allows the browser to continue working. Doing layout, fading in or animating elements, loading the page, or whatever.

Using the example from above, if the panel faded in over a period of 800 milliseconds the `driver.sleep(1000)`would **usually** accomplish what you want. So why not use it?

The most important reason is that it is not [deterministic](https://en.wikipedia.org/wiki/Deterministic_algorithm#What_makes_algorithms_non-deterministic.3F). Meaning it will only work some of the time. Since it works only some of the time, we end up with fragile tests that break under certain conditions. This gives automated browser testing a bad name.

Why does it work only some of the time? In other words, why isn’t it deterministic?

What you notice with your eyes isn’t often the only thing that happening on a website. An element fade-in or animation is a perfect example. We are not supposed to notice these things if they are done well.

If you tell Selenium to first find an element and then click it, there might only be a few milliseconds between those two operations. Selenium can be far faster than a human.

When a human uses the website, we wait for the element to fade in before clicking on it. And when that fade-in takes less than a second, we probably don’t even notice we are doing that “waiting”. Selenium is not only faster and less forgiving, your automated tests have to deal with all sorts of other unpredictable factors:

1.  The designer of your web page might change the animation time from 800 milliseconds to 1200 milliseconds. _Your test just broke._
2.  Browsers don’t always do exactly what you ask for. Due to system load the animation might actually stall and take longer than 800 milliseconds, maybe even longer than your sleep of 1000 milliseconds. _Your test just broke_.
3.  Different browsers have different layout engines and prioritize the layout operations differently. Add a new browser to your test suite and _your tests just broke_.
4.  Browsers and the JavaScript that controls a page are asynchronous by nature. If the animation in our example changes functionality that needs information from the back-end, the programmer might add an AJAX call and wait for the result before firing the animation.  
    We are now dealing with network latency and zero guarantee of how long it will take for the panel to display. _Your test just broke_.
5.  There are surely other reasons I don’t know of.  
    Even **one** browser on its own is a complex beast and all of them have bugs. So we are talking about trying to make the same thing work over severaldifferent browsers, several different browser versions, several different operating systems, and several different operating system versions.  
    At some point _your tests just break_ if they are not deterministic. No wonder programmers give up on automated browser testing and complain about how fragile the tests are.

What do programmers typically do to fix things when any of the above happens? They trace things back to timing problems so the obvious answer is to increase the time in the driver.sleep statement. Then cross their fingers that it covers all possible future scenarios of system load, layout engine differences, and so on. It’s **not deterministic** and **it breaks**, so don’t do this!

If you’re not convinced yet, here’s one more reason: your tests will run much faster. The animation from our example only takes 800 milliseconds, we hope. To deal with the “we hope” and make the tests work under all conditions you’ll probably see something like `driver.sleep(2000)` in the real world.

That’s more than one full second lost**for just one step** of your automated tests. Over many steps, it adds up fast. A recently refactored test for one of our web pages that took several minutes due to overuse of driver.sleep now takes less than fifteen seconds.

Most of the rest of this article gives specific examples on how you can make your tests fully deterministic, and avoid the use of `driver.sleep.`

### A note about promises

The JavaScript API for Selenium makes heavy use of promises, and it also does a good job of hiding that by using a built-in promise manager. This is changing and [will be deprecated](https://github.com/SeleniumHQ/selenium/issues/2969).

In the future you will either need to learn how to use promise chaining yourself, or use the new JavaScript async functions like `await`.

In this article, the examples still make use of the traditional built-in Selenium promise manager and take advantage of promise chaining. The code examples here will make more sense if you understand how promises work. But you can still get a lot out of this article if you want to skip learning promises for the moment.

### Let’s get started

Continuing with our example of a button that we want to click on a panel that animates, let’s look at several specific gotchas that could break our tests.

How about an element that is dynamically added to the page and does not even exist yet after the page is finished loading?

#### Waiting for an element to be present in the DOM

The following code would not work if an element with a CSS id of ‘my-button’ was added to the DOM after page load:

<pre name="20fb" id="20fb" class="graf graf--pre graf-after--p">// Selenium initialization code left out for clarity</pre>

<pre name="43bc" id="43bc" class="graf graf--pre graf-after--pre">// Load the page.  
driver.get('https:/foobar.baz');</pre>

<pre name="7144" id="7144" class="graf graf--pre graf-after--pre">// Find the element.  
const button = driver.findElement(By.id('my-button'));</pre>

<pre name="1e82" id="1e82" class="graf graf--pre graf-after--pre">button.click();</pre>

The `driver.findElement` method expects the element to already be present in the DOM. It will error out if the element cannot be found immediately. In this case, immediately means “after page load is complete” due to the prior `driver.get statement`.

Remember that the current version of JavaScript Selenium manages the promises for you. So each statement will fully complete before moving on to the next statement.

**Note:** The above behavior isn’t always undesirable. `driver.findElement` on its own might be actually be handy if you are sure the element should already be there.

First let’s look at the wrong way of fixing this. Having been told it might take a few seconds for the element to be added to the DOM:

<pre name="03ac" id="03ac" class="graf graf--pre graf-after--p">driver.get('https:/foobar.baz');</pre>

<pre name="d7c4" id="d7c4" class="graf graf--pre graf-after--pre">// Page has been loaded, now go to sleep for a few seconds.  
driver.sleep(3000);</pre>

<pre name="1df3" id="1df3" class="graf graf--pre graf-after--pre">// Pray that three seconds is enough and find the element.  
const button = driver.findElement(By.id('my-button'));</pre>

<pre name="a790" id="a790" class="graf graf--pre graf-after--pre">button.click();</pre>

For all the reasons mentioned earlier, this can break, and probably will. We need to learn how to wait for an element to be located. This is fairly easy, and you’ll see this often in examples from around the web. In the example below, we use the [well documented](http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/ie_exports_Driver.html#wait) `driver.wait` method to wait for up to twenty seconds for the element to be found in the DOM:

    const button = driver.wait(  until.elementLocated(By.id('my-button')),   20000);

    button.click();

There are immediate advantages to this. For example, if the element is added to the DOM in one second, the driver.wait method will complete in one second. It will not wait the full twenty seconds specified.

Because of this behavior, we can put loads of padding in our timeout without worrying about the timeout slowing down our tests. Unlike the `driver.sleep` which will always wait the entire time specified.

This works in a lot of cases. But one case it doesn’t work in is trying to click an element that is present in the DOM, but is not yet visible.

Selenium is smart enough to not click an element that is not visible. This is good, because users cannot click invisible elements, but it does make us work harder at creating reliable automated tests.

#### Waiting until an element is visible

We will build on the above example because it makes sense to wait for an element to be located before it becomes visible.

You’ll also find our first use of promise chaining below:

    const button = driver.wait(  until.elementLocated(By.id('my-button')),   20000).then(element =>

    button.click();

We could almost stop here and you would already be far better off. With the code above, you will eliminate loads of test cases that would otherwise break because an element is not immediately present in the DOM. Or because it is not immediately visible due to things like animation. Or even for both reasons.

Now that you understand the technique, there should never be a reason to write Selenium code that is not deterministic. That’s not to say this is always easy.

When things become more difficult, developers often give up again and resort to `driver.sleep`. I hope by giving even more examples, I can encourage you to make your tests deterministic.

#### Writing your own conditions

Thanks to the `until` method, the JavaScript Selenium API already has a [handful of convenience methods](http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/until.html) you can use with `driver.wait`. You can also wait until an element no longer exists, for an element that contains specific text, for an alert to be present, or many other conditions.

If you can’t find what you need in the supplied convenience methods you will need to write your own conditions. This is actually pretty easy, but it’s hard to find examples. And there is one gotcha — which we will get to.

[According to the documentation](http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebDriver.html#wait), you can provide `driver.wait` with a function that returns `true` or `false`.

Let’s say we wanted to wait for an element to be full opacity:

<pre name="f920" id="f920" class="graf graf--pre graf-after--p">// Get the element.  
const element = driver.wait(  
  until.elementLocated(By.id('some-id')),  
  20000  
);</pre>

<pre name="887f" id="887f" class="graf graf--pre graf-after--pre">// driver.wait just needs a function that returns true of false.  
driver.wait(() => {   
  return element.getCssValue('opacity')        
    .then(opacity => opacity === '1');  
});</pre>

That seems useful and reusable, so let’s put it in a function:

<pre name="a5b6" id="a5b6" class="graf graf--pre graf-after--p">const waitForOpacity = function(element) {  
  return driver.wait(element => element.getCssValue('opacity')        
    .then(opacity => opacity === '1');  
  );  
};</pre>

And then we can use our function:

<pre name="0162" id="0162" class="graf graf--pre graf-after--p">driver.wait(  
  until.elementLocated(By.id('some-id')),  
  20000  
)  
.then(waitForOpacity);</pre>

Here comes the gotcha. What if we want to click the element after it reaches full opacity? If we try to assign the value returned by the above, we would not get what we want:

<pre name="aef1" id="aef1" class="graf graf--pre graf-after--p">const element = driver.wait(  
  until.elementLocated(By.id('some-id')),  
  20000  
)  
.then(waitForOpacity);</pre>

<pre name="16bb" id="16bb" class="graf graf--pre graf-after--pre">// Oops, element is true or false, not an element.  
element.click();</pre>

We cannot use promise chaining either, for the same reason.

<pre name="c4e2" id="c4e2" class="graf graf--pre graf-after--p">const element = driver.wait(  
  until.elementLocated(By.id('some-id')),  
  20000  
)  
.then(waitForOpacity)  
.then(element => {  
  // Nope, element is a boolean here too.  
  element.click();  
}); </pre>

This is easy to fix. Here is our improved method:

<pre name="8277" id="8277" class="graf graf--pre graf-after--p">const waitForOpacity = function(element) {  
  return driver.wait(element => element.getCssValue('opacity')        
    .then(opacity => {  
      if (opacity === '1') {  
        **return element;**  
      } else {  
        return false;  
    });  
  );  
};</pre>

The above pattern, which **returns the element when the condition is true**, and returns false otherwise, is a reusable pattern you can use when writing your own conditions.

Here is how we can use it with promise chaining:

<pre name="11cd" id="11cd" class="graf graf--pre graf-after--p">driver.wait(  
  until.elementLocated(By.id('some-id')),  
  20000  
)  
.then(waitForOpacity)  
.then(element => element.click());</pre>

Or even:

<pre name="7002" id="7002" class="graf graf--pre graf-after--p">const element = driver.wait(  
  until.elementLocated(By.id('some-id')),  
  20000  
)  
.then(waitForOpacity);</pre>

<pre name="241a" id="241a" class="graf graf--pre graf-after--pre">element.click();</pre>

By writing your own simple conditions, you can expand your options for making your tests deterministic. But that’s not always enough.

### Go negative

That’s right, sometimes you need to be negative instead of positive. What I mean by this is to test for something to no longer exist or for something to not be visible anymore.

Let’s say an element exists in the DOM already, but you shouldn’t interact with it until some data is loaded via AJAX. The element could be covered with a “loading…” panel.

If you paid close attention to the conditions offered by the `until` method, you might have noticed methods like `elementIsNotVisible` or `elementIsDisabled` or the not so obvious `stalenessOfElement`.

You could test for a “loading…” panel to no longer be visible:

<pre name="6150" id="6150" class="graf graf--pre graf-after--p">// Already added to the DOM, so this will return immediately.  
const desiredElement = driver.wait(  
  until.elementLocated(By.id('some-id')),  
  20000  
);</pre>

<pre name="0302" id="0302" class="graf graf--pre graf-after--pre">// But the element isn't really ready until the loading panel  
// is gone.  
driver.wait(  
  until.elementIsNotVisible(By.id('loading-panel')),  
  20000  
);</pre>

<pre name="6093" id="6093" class="graf graf--pre graf-after--pre">// Loading panel is no longer visible, safe to interact now.  
desiredElement.click();</pre>

I find the `stalenessOfElement` to be particularly useful. It waits until an element has been removed from the DOM, which could also happen from page refresh.

Here is an example of waiting for the contents of an `iframe` to refresh before continuing:

<pre name="7951" id="7951" class="graf graf--pre graf-after--p">let **iframeElem** = driver.wait(  
  until.elementLocated(By.className('result-iframe')),  
  20000    
);</pre>

<pre name="8e96" id="8e96" class="graf graf--pre graf-after--pre">// Now we do something that causes the iframe to refresh.  
someElement.click();</pre>

<pre name="1680" id="1680" class="graf graf--pre graf-after--pre">// Wait for the previous iframe to no longer exist:  
driver.wait(  
  until.stalenessOf(**iframeElem**),  
  20000  
);</pre>

<pre name="eecf" id="eecf" class="graf graf--pre graf-after--pre">// Switch to the new iframe.   
driver.wait(  
  until.ableToSwitchToFrame(By.className('result-iframe')),  
  20000  
);</pre>

<pre name="f4f6" id="f4f6" class="graf graf--pre graf-after--pre">// Any following code will be relative to the new iframe.</pre>

### Always be deterministic, and don’t sleep

I hope these examples have helped you better understand how to make your Selenium tests deterministic. Do not rely on `driver.sleep` with an arbitrary guess.

If you have questions or your own techniques for making Selenium testing deterministic, please leave a comment.








