---
author: Matt Rothenberg
authorTwitter: https://twitter.com/mattrothenberg
authorFacebook: none
title: "A Vue.js introduction for people who know just enough jQuery to get by"
subTitle: "I’ve had a love-hate relationship with JavaScript for years...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*-8AAdexfOAK9R-AIha_PBQ.png
url: https://medium.freecodecamp.org/vue-js-introduction-for-people-who-know-just-enough-jquery-to-get-by-eab5aa193d77
id: vue-js-introduction-for-people-who-know-just-enough-jquery-to-get-by-eab5aa193d77
date: 2017-04-10T23:30:41.851Z
tags: [
  "JavaScript",
  "Vuejs",
  "Jquery",
  "Web Development",
  "Design"
]
---
# A Vue.js introduction for people who know just enough jQuery to get by







![](https://cdn-images-1.medium.com/max/2000/1*-8AAdexfOAK9R-AIha_PBQ.png)

The logo for Vue.js







I’ve had a love-hate relationship with JavaScript for years.

I got to know the language by way of the design and development community’s favorite whipping boy, [jQuery](https://jquery.com/). You see, at the time I began learning JavaScript, as a “Designer who codes,” working with jQuery was a magical experience. I could make modals `fadeIn` and `fadeOut`. With a third-party library, I could add parallax scrolling to my portfolio with just a single function call. Nearly everything I could have possibly dreamed of was encapsulated in a [single, ~100kb file](https://code.jquery.com/jquery-3.2.1.min.js)…

And then [Angular](https://angularjs.org/) came out. I had _no_ _choice_ but to redo my entire portfolio with the framework. And then [React](https://facebook.github.io/react/) came out. I had _no_ _choice_ but to redo my entire portfolio with the library. And then [Vue.js](http://vuejs.org) came out. I had _no_ _choice_ but to redo my entire portfolio with the library… You see where this is going.

All jokes aside, I have greatly enjoyed honing my JavaScript chops through building things here and there with these different frameworks and libraries. I have read countless articles and tutorials in the process, but none has stuck with me more than Shu Uesugi’s piece, “[React.js Introduction For People Who Know Just Enough jQuery To Get By](http://chibicode.com/react-js-introduction-for-people-who-know-just-enough-jquery-to-get-by/).”





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/389f1de783e622ff4953bc8c0f01db80?postId=eab5aa193d77" data-media-id="389f1de783e622ff4953bc8c0f01db80" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FCE0Jp9_WMAI6eZB.png%3Alarge&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Shu takes readers — who are presumed to have some level of proficiency with JavaScript fundamentals and jQuery — on a journey through the world of React as they build a clone of Twitter’s “compose tweet” component.

This conceptual frame was quite helpful to me as someone who learns best by doing. Indeed, any time a new JavaScript library comes out, I find myself going back to the example from this article to test the waters. And so, I would like to borrow this frame as I step you all through my recent experience of learning Vue.

Before you begin the steps below, I highly encourage you to read Shu’s article. He does a fantastic job of walking you through the jQuery code you might write in order to implement some of these features. Thus, and so as to mitigate the risk of redundancy, I will focus on showing you the ins-and-outs of Vue.

### What We’re Building

Most of us tweet (some more prolifically than others). So we are probably familiar with the User Interface component in the screenshot below.



![](https://cdn-images-1.medium.com/max/1600/1*U74cvvl2oY5Yf4Kq0AMMYA.png)

Twitter’s “Compose Tweet” box



Believe it or not, this UI component is a great example of how Vue (and React, as per Shu) might improve your life as a JavaScript/jQuery developer. The elements of this component that we will focus on building today are:

*   The `<textarea>` where users can enter their tweet
*   The `<button>` that is enabled/disabled as a function of how long the tweet is
*   A counter that indicates how many characters (out of 140) remain, and changes color to warn the user of this limit
*   A camera icon that, when clicked, allows users to attach photos to their tweet
*   A list of photos that have been attached
*   A button (per each photo) to remove it from the tweet

#### If You’re Stuck

If at any point you come across something that is confusing or poorly explained, don’t hesitate to tweet me at [@mattrothenberg](https://twitter.com/mattrothenberg). Keep in mind as you read this article: it’s not you, it’s definitely me.

Let’s get started.

#### How We’re Building It

Today, we will be using [CodePen](https://codepen.io) to build our “Compose Tweet” component. For the uninitiated, CodePen is an online HTML/CSS/JavaScript editor akin to [JSBin](http://jsbin.com/) or [JSFiddle](http://jsfiddle.net). For each step, I’ll embed a CodePen with the relevant code.

### Step 1: Scaffold The Project





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/6b401fcace352cbb308f14f80814bf1a?postId=eab5aa193d77" data-media-id="6b401fcace352cbb308f14f80814bf1a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fi.cdpn.io%2F135907.GmKKog.small.d2acefc5-f64d-4c4d-9a09-40663197353d.png&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





The first thing we need to do, before writing any JavaScript, is to write the markup for our “Compose Tweet” component. Today we will be using [Tachyons](http://tachyons.io/) for almost all of our stylistic needs (so that we don’t have to write extraneous CSS, and can focus on the markup and JavaScript).

I am running with the assumption that you are pretty CSS savvy, so I will not spend time walking you through the Tachyons approach to styling (tl;dr so style, much classes, very functional).

In this CodePen I have also gone ahead and pulled in Vue via CDN. Indeed, one of the main selling points of Vue is the simplicity by which it can be integrated into a new or existing codebase.

With everything in place, let us get started on some feature work.

### Step 2: Implement the First Feature — Tweet Button Should Initially Be Disabled





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/dfe4798234c13ead8ca831afe3859af6?postId=eab5aa193d77" data-media-id="dfe4798234c13ead8ca831afe3859af6" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fi.cdpn.io%2F135907.PmYYbZ.small.01a112d9-bb25-437e-88ec-b360058cb3d8.png&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



To Disable or Not To Disable, that is the question



**Feature Description**: Disable the blue Tweet button until a user has entered at least one character in the `textarea` .

First things first, let us set up our Vue instance. As mentioned above, Vue has won the hearts and minds of Developers by its simplicity of installation and ease of use. We can construct a Vue instance with the following code.

<pre name="74f7" id="74f7" class="graf graf--pre graf-after--p">new Vue({  
  **el**: '#twitterVue',  
  **data:** {  
    tweet: ''  
  },  
  **computed:** {  
    tweetIsEmpty: function() {  
      return this.tweet.length === 0;  
    }  
  }  
})</pre>

Let me explain what is going on here —

*   `el` refers to the DOM element to which we are attaching our Vue instance. This should feel similar to instantiating a jQuery plugin by passing in a given selector, be it a class name or ID.
*   `data` is an object that describe’s our instance’s data model, or state. We can access the attributes specified within this model both in our HTML — via a special curly brace syntax `{{tweet}}`— and within the instance itself (hint, look at the body of the `tweetIsEmpty` function)
*   `computed` is an object that describes, as you might guess, computed properties based on our data model. Instead of adding logic to our HTML, it is recommended to encapsulate this kind of state (or any derived value, for that matter) via functions defined on the `computed` key of our Vue instance.

Turning our attention now to the HTML, you will see that our markup has changed ever so slightly from the first CodePen. Specifically, we have made three changes.

1.  We added the id `twitterVue` to the outermost `div` so that we could construct our Vue instance.

<pre name="3022" id="3022" class="graf graf--pre graf-after--li">...</pre>

2\. We added the `**v-model**` directive to our `textarea`, thereby creating a [two-way binding](https://vuejs.org/v2/guide/forms.html) between user input and our instance’s data model. Now, any time a user types in the `textarea`, the `**tweet**` attribute on our instance’s data model is automagically updated.

<pre name="6b86" id="6b86" class="graf graf--pre graf-after--p"><textarea **v-model="tweet"**></textarea></pre>

3\. We added the `**:disabled**` attribute to our `button`. The colon preceding `disabled` denotes that we would like to _evaluate_ the content inside the quotes as a JavaScript expression. If we were to omit the colon, the content would be treated as a string. You’ll also note that we’ve added a few lines of CSS to give the disabled button a distinct visual styling.

<pre name="ffd0" id="ffd0" class="graf graf--pre graf-after--p"><button **:disabled="tweetIsEmpty"**>Tweet</button></pre>

<pre name="0277" id="0277" class="graf graf--pre graf-after--pre">...</pre>

    button[disabled] {  cursor: not-allowed;  opacity: .5;}

4\. We also added a computed property on our instance called `**tweetIsEmpty**`. Note that this property is actually a _function_ that returns a boolean value based on the length of our data model’s `tweet` attribute. Vue makes it dead simple to access your data model both in the HTML (as shown above) and in the instance itself. Thanks to the magic of two-way data binding, this function is evaluated when the value of `tweet` is updated. When the function evaluates to _true_, our button is disabled, and vice-versa.

<pre name="2f12" id="2f12" class="graf graf--pre graf-after--p">**tweetIsEmpty:** function() {  
  return this.tweet.length === 0;  
}</pre>

Admittedly, this felt like smoke and mirrors when I first got started with Vue. What helped me was to literally _see_ what was happening to our data model under the hood as I interacted with the component. Since we can easily access our data model in our HTML via the aforementioned curly brace syntax, we can build a quick, visual feedback loop. Score!

<pre name="2be5" id="2be5" class="graf graf--pre graf-after--p"><p>The value of is: **{{tweet}}** </p>  
<p>The value of is: **{{ tweetIsEmpty}}**</p></pre>





<iframe data-width="582" data-height="278" width="582" height="278" src="https://medium.freecodecamp.org/media/aaa753c6b7cb3485cac5f99aa0f8669e?postId=eab5aa193d77" data-media-id="aaa753c6b7cb3485cac5f99aa0f8669e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fthumbs.gfycat.com%2FFlimsyWindyAndeancat-size_restricted.gif&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



Visual Learning



Please feel free to repeat this step if anything along the way was confusing (either due to my poor writing or coding abilities, or due to Vue itself). Send a tweet or leave a comment if you have any particular questions.

### Step 3: Implement the Second Feature — Show The Number of Characters Remaining





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/3f8e871f5917d67feaa8bcb4ad6c5994?postId=eab5aa193d77" data-media-id="3f8e871f5917d67feaa8bcb4ad6c5994" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fi.cdpn.io%2F135907.OmLxLJ.small.ecad92ba-d1ed-4419-823f-b6c104494cba.png&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



140 Characters or Bust!



**Feature Description**: As a user types, show the number of characters remaining (out of 140) in the tweet. If a user has entered more than 140 characters, disable the blue Tweet button.

So far we have learned about two-way data binding and computed properties, concepts that are at the very core of Vue. It is our lucky day, because we can leverage these concepts to build our next feature: showing the users how many characters (out of 140) remain, and disabling the button if this limit is eclipsed.

Once again, I will step you through both the JavaScript and HTML changes required to implement this feature.

In our JavaScript, we have done a few things.

1.  As a housekeeping measure, we enumerated the max length of a tweet (140 characters) as a constant, `**MAX_TWEET_LENGTH**`.

<pre name="3c2a" id="3c2a" class="graf graf--pre graf-after--li">const **MAX_TWEET_LENGTH** = 140;</pre>

2\. We added another computed property, `**charactersRemaining**`, which dynamically returns the difference between 140 and the length of the user-entered tweet.

<pre name="6388" id="6388" class="graf graf--pre graf-after--p">**charactersRemaining**: function() {  
  return MAX_TWEET_LENGTH - this.tweet.length;  
}</pre>

3\. We renamed the old `**tweetIsEmpty**`property to `**tweetIsOutOfRange**`and updated the function’s logic accordingly. Note how we are using the computed `**charactersRemaining**`property to derive _this_ value. Hooray for code reuse!

<pre name="d5e9" id="d5e9" class="graf graf--pre graf-after--p">**tweetIsOutOfRange**: function() {  
  return this.charactersRemaining == MAX_TWEET_LENGTH   
      || this.charactersRemaining < 0;  
 }</pre>

On the HTML side of things, we only have to make a few changes, thanks to the power of Vue’s two-way data binding.

<pre name="e51b" id="e51b" class="graf graf--pre graf-after--p">  
  **{{ charactersRemaining }}**  
  <button **:disabled="tweetIsOutOfRange"** class="button-reset bg-blue bn white f6 fw5 pv2 ph3 br2 dim">Tweet</button>  
</pre>

For the visual learners out there, watch the magic:





<iframe data-width="1156" data-height="684" width="700" height="414" src="https://medium.freecodecamp.org/media/70cb43b559fdb6e7be4fc5f975743d52?postId=eab5aa193d77" data-media-id="70cb43b559fdb6e7be4fc5f975743d52" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fthumbs.gfycat.com%2FReliablePlainAruanas-size_restricted.gif&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





### Step 4: Implement the Third Feature: Conditional Styling of “Characters Remaining” indicator





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/8ca745a897998a8fd72d0d69f0871508?postId=eab5aa193d77" data-media-id="8ca745a897998a8fd72d0d69f0871508" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fi.cdpn.io%2F135907.JNPpOx.small.7ac66ebc-9cd3-4e55-95d3-8b03d0188719.png&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





**Feature Description:** When composing a Tweet, the color of the “characters remaining” indicator should change to dark red when only twenty characters remain, and light red when ten or fewer remain.





<iframe data-width="588" data-height="162" width="588" height="162" src="https://medium.freecodecamp.org/media/203b32b94b8d564426c9e2e909eca402?postId=eab5aa193d77" data-media-id="203b32b94b8d564426c9e2e909eca402" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fthumbs.gfycat.com%2FPertinentKindheartedGoral-size_restricted.gif&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Manipulating an element’s style or class can be cumbersome with jQuery, and Vue offers a much cleaner way of doing so. Vue’s approach feels more declarative, in that you describe _how_ you want something’s style to change (based, for example, on a given state) and you let Vue do the heavy lifting.

In the context of this feature, our “characters remaining” indicator has two such states, and a corresponding CSS class for each.

1.  When between ten and twenty characters remain, the indicator should have the `dark-red` class
2.  When fewer than ten characters remain, the indicator should have the `light-red` class

By now your Vue brain should be shouting “COMPUTED PROPERTIES!” So, let us oblige this brain and wire up those properties.

<pre name="d71c" id="d71c" class="graf graf--pre graf-after--p">**underTwentyMark**: function() {  
  return this.charactersRemaining <= 20   
    && this.charactersRemaining > 10;  
  },  
**underTenMark:** function() {  
  return this.charactersRemaining <= 10;  
}</pre>

With our logic in place, let us take a look at one of the ways in which Vue handles conditional styling: the `v-bind:class` directive. This directive expects an object whose keys are CSS classes, and whose values are the corresponding computed properties.

<pre name="4f82" id="4f82" class="graf graf--pre graf-after--p">{ 'dark-red': underTwentyMark, 'light-red': underTenMark }</pre>

By adding the directive to the `span` tag that encloses our “characters remaining” indicator, we have completed our feature.

<pre name="49c5" id="49c5" class="graf graf--pre graf-after--p">  
  {{ charactersRemaining }}  
</pre>

Under the hood, and thanks to two-way data binding, Vue will handle the addition and removal of these classes as a function of the specified computed properties.





<iframe data-width="764" data-height="188" width="700" height="172" src="https://medium.freecodecamp.org/media/7cb9dce8458385c07de95a4a5a1453ac?postId=eab5aa193d77" data-media-id="7cb9dce8458385c07de95a4a5a1453ac" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fthumbs.gfycat.com%2FOptimisticGorgeousAmericanindianhorse-size_restricted.gif&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



Goodbye, `addClass()` and `removeClass()`



### Step 5: Implement the Fourth Feature: “Attach Photo” UX





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/29cbd6616d9a815b96f0b08a058d92a3?postId=eab5aa193d77" data-media-id="29cbd6616d9a815b96f0b08a058d92a3" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fi.cdpn.io%2F135907.vmBRjZ.small.e618a234-0af6-4bb8-808d-a57808a7bb9e.png&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





**Feature Description:** Allow users to attach a single photo to their tweet via a file picker dialog. When the photo has been uploaded, show it beneath the `textarea`, and allow users to delete the attachment by clicking the image

Fair warning: there is _a lot_ going on in this section. The beauty is, despite this feature adding considerable functionality, we will not have to write that much code. So, let us start by breaking down the interaction design into steps.

1.  User clicks the “Add Photo” button
2.  User sees a file picker dialog and can select **one** **photo** to upload
3.  Upon selecting the photo, a box appears underneath the `textarea` with the selected photo inside
4.  User clicks the circular **X** button to remove the photo
5.  User sees initial state from step 1

Up to this point, we have not yet done any event handling (listening to button clicks, input changes, etc). As you might expect, Vue makes it easy to handle such events by affording us the `v-on` directive (@ for short). By passing a method as a value of this directive, we can effectively listen to DOM events and run JavaScript when they are triggered.

Before diving into our feature work, some rapid-fire practice.











* * *











<iframe data-width="822" data-height="668" width="700" height="569" src="https://medium.freecodecamp.org/media/9dfcbd67e1489d2cb56d4de199c226ef?postId=eab5aa193d77" data-media-id="9dfcbd67e1489d2cb56d4de199c226ef" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fthumbs.gfycat.com%2FWarlikeObeseAzurevasesponge-size_restricted.gif&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



I did it for the lulz







<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/5688d8b0852195209c629c764cb83ba0?postId=eab5aa193d77" data-media-id="5688d8b0852195209c629c764cb83ba0" allowfullscreen="" frameborder="0"></iframe>



CodePen from GIF above. Check your console



Event handling is as easy as adding the `@click` directive to a given button and adding a corresponding method to the `methods` key on our Vue instance.

<pre name="4b6a" id="4b6a" class="graf graf--pre graf-after--p graf--trailing"><button [**@click**](http://twitter.com/click "Twitter profile for @click")**="logNameToConsole"**>Log User's Name</button> **...** methods: {  
  **logNameToConsole**: function() {  
    if( this.name !== 'Donald Trump' ) {  
      console.log(this.name);   
    } else {  
      console.warn('Sorry, I do not understand');  
    }  
  },  
}</pre>











* * *







Back to our feature work… In this step, our markup and JavaScript have changed in the following ways:

1.  We added a `button` with an `**@click**` directive. When a user clicks this button, the `**triggerFileUpload**` method will get called.

<pre name="5a58" id="5a58" class="graf graf--pre graf-after--li"><button [**@click**](http://twitter.com/click "Twitter profile for @click")**="triggerFileUpload"**>...</button></pre>

So, in our JavaScript, let us add a `methods` key to our Vue instance with said method inside, as well as a data attribute for our photo.

<pre name="951f" id="951f" class="graf graf--pre graf-after--p">**data: {  
 photo: null  
}_,_** _computed: {},_ **methods:** {  
  **triggerFileUpload:** function() {  
    this.$refs.photoUpload.click(); // LOLWUT?  
  },  
}</pre>

2\. It is notoriously difficult to [style HTML5 file inputs](http://stackoverflow.com/questions/572768/styling-an-input-type-file-button). One workaround involves putting an `input` in the DOM and hiding it with CSS. In order for the browser to open the native file picker, this `input` _must_ be clicked. How it gets clicked, and how the client handles what the user uploads, though, is a different matter.

In our markup, we’ve added one such `input` and hidden it with a special `hide` class. We have also added a few other attributes worth calling out:

<pre name="59c9" id="59c9" class="graf graf--pre graf-after--p"><input **ref="photoUpload"** [**@change**](http://twitter.com/change "Twitter profile for @change")**="handlePhotoUpload"** type="file" class="hide"></pre>

*   The `ref` attribute is used to register a _reference_ to a given DOM element. Given this reference, we can access the DOM element in our JavaScript code with `**this.$refs.photoUpload**`. Which means we can programmatically trigger a `click()` event on this element, thereby circumventing the challenge described above.
*   Clicking on the input is one thing; handling the file that the user uploads is another. Luckily, Vue allows us to attach a handler to the input’s change event via the `@change` directive. The method that we pass to this directive will be invoked after a user selects a file from the file picker. That method, `**handlePhotoUploa**d`, is fairly straightforward

<pre name="cacc" id="cacc" class="graf graf--pre graf-after--li">**handlePhotoUpload**: function(e) {  
  var self = this;  
  var reader = new FileReader();  

  reader.onload = function(e) {  
    // Set that base 64 string to our data model's 'photo' key  
    **self.photo = (e.target.result);**  
  }  
  // Read upload file as base 64  string  
  **reader.readAsDataURL(e.target.files[0]);**  
 }</pre>





<iframe data-width="884" data-height="716" width="700" height="567" src="https://medium.freecodecamp.org/media/ca4fec7edcd9ac0fb01e439b9f4d312d?postId=eab5aa193d77" data-media-id="ca4fec7edcd9ac0fb01e439b9f4d312d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fthumbs.gfycat.com%2FAgedIdolizedJerboa-size_restricted.gif&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



Saving the uploaded file to our data model as a base64 encoded string



Take a deep breath, because we are almost done with this feature!

Once a user has uploaded a photo, we need to show a box underneath the `textarea` with the selected photo inside. Just as the conditional styling of elements is a breeze with Vue, so too is the conditional _rendering_, or display of elements. You’ll note that in our HTML, we have added the following markup underneath the `textarea`.

<pre name="9c23" id="9c23" class="graf graf--pre graf-after--p">  
    
      ...  
    </button>  
    <img **v-bind:src="photo"**>  
    
</pre>

Vue offers a handful of template helpers (`v-if`, `v-show,` `v-else` , etc) to help you show and hide content conditionally. When the JavaScript expression passed to this directive evaluates to true, the element is rendered, and vice-versa.

In our case, we added a `**v-if**` statement that evaluates the computed property `**photoHasBeenUploaded**` .

<pre name="b53e" id="b53e" class="graf graf--pre graf-after--p">**photoHasBeenUploaded:** function() {  
  return this.photo !== null;  
}</pre>

When that function evaluates to true — when the photo key of our data model is not equal to null — the entire `div` gets rendered. Voilà!

And inside that `div` we render two elements:

1.  The image that was attached, by passing the contents of our data model’s `photo` key to Vue’s `v-bind:src` directive
2.  A delete button that features another example of the`@click` handler, this particular one invoking a function that “removes” the photo by setting our data model’s `photo` key to null.

<pre name="59c1" id="59c1" class="graf graf--pre graf-after--li">**removePhoto:** function() {  
  this.photo = null;  
}</pre>

We are almost there.

### Step 6: Correction, user can attach “**_photos_**”

So, we can effectively handle a user attaching _one_ photo to the Tweet, but what if she would like to upload many photos?





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/c783b11dc8c035258e74e1b8fc0db98f?postId=eab5aa193d77" data-media-id="c783b11dc8c035258e74e1b8fc0db98f" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fi.cdpn.io%2F135907.JNjGWN.small.0c058e79-3683-4603-98a8-9f743488ff15.png&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





By now, you should be thinking something to the effect of: “I guess the only significant change here is being able to show _multiple_ images in that box that appears conditionally beneath the textarea, considering we have already wired up our event handlers…” And you are correct! Let us take a look at the steps we need to follow

1.  We need to update our data model by changing `photo` to `photos`, the new key being an _array_ of base64 strings (not a single base64 string)

<pre name="2878" id="2878" class="graf graf--pre graf-after--li">data: {  
  **photos: []**  
},</pre>

2\. We need to update our computed property `photoHasBeenUploaded` to check against the length of our new `photos` key, which is now an array.

<pre name="6985" id="6985" class="graf graf--pre graf-after--p">photoHasBeenUploaded: function() {  
  **return this.photos.length > 0;**  
}</pre>

3\. We need to update our input `@change` handler to _loop_ over the uploaded files and push them onto our `photos` key.

<pre name="d206" id="d206" class="graf graf--pre graf-after--p">handlePhotoUpload: function(e) {  
  var self = this;  
  var files = e.target.files;</pre>

<pre name="710d" id="710d" class="graf graf--pre graf-after--pre">  for(let i = 0; i < files.length; i++) {  
    let reader = new FileReader();</pre>

<pre name="24a2" id="24a2" class="graf graf--pre graf-after--pre">    reader.onloadend = function(evt) {  
 **self.photos.push(evt.target.result);**  
    }</pre>

<pre name="30f9" id="30f9" class="graf graf--pre graf-after--pre"> **reader.readAsDataURL(files[i]);**  
  }  
},</pre>

On the HTML side, however, we must embark into new territory. Iterating over data and rendering content with jQuery can be cumbersome.

<pre name="a92b" id="a92b" class="graf graf--pre graf-after--p">var array = [1, 2, 3, 4, 5];  
var newHTML = [];  
for (var i = 0; i < array.length; i++) {  
 **console.log('UGHHHHHH');**  
    newHTML.push('');  
}  
$(".element").html(newHTML.join(""));</pre>

Thankfully, Vue offers an abstraction over this procedure by way of the `v-for` directive. This directive expects you to [provide an expression in the form of](https://vuejs.org/v2/guide/list.html) `(thing, index) in collectionOfThings`, where `collectionOfThings` is the source array, `thing` is an alias for the array element being iterated on, and `index` is, well, the index of that element.

A prototypical example might look like this:





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/258080a8c7d62cc416e7fac48c1a023e?postId=eab5aa193d77" data-media-id="258080a8c7d62cc416e7fac48c1a023e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fm.cdpn.io%2Fscreenshot-coming-soon-small.png&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Where before we had a singular `figure` element for the user-uploaded photo, we will now have _N_ `figure` tags corresponding to the length of the `photos` source array.

Lucky for us, our markup doesn’t have to change too drastically since the overall structure of the design is still the same.

<pre name="363a" id="363a" class="graf graf--pre graf-after--p">  
  <button [**@click**](http://twitter.com/click "Twitter profile for @click")**="removePhoto(index)"**>  
    ...  
  </button>  
  <img **v-bind:src="photo"** class="h3 w3">  
</pre>

The one change that we need to make revolves around the `removePhoto` method which, before, set the singular `photo` key on our data model to `null`. Now, since we have _N_ number of photos, we must pass the element’s index to the `removePhoto` method and pull that element out of the array.

<pre name="cc1c" id="cc1c" class="graf graf--pre graf-after--p">removePhoto: function(index) {  
  **this.photos.splice(index, 1);**  
}</pre>

### Step 7: Animation + Extra Credit





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/716d19470f636cee2ac72b081d566a7b?postId=eab5aa193d77" data-media-id="716d19470f636cee2ac72b081d566a7b" allowfullscreen="" frameborder="0"></iframe>





In Twitter’s UI, the “Compose Tweet” component opens in a modal. For our grand finale, I would like to apply all of the Vue techniques we have learned so far and introduce one more: [transitions](https://vuejs.org/v2/guide/transitions.html).



![](https://cdn-images-1.medium.com/max/1600/1*yjSu85EKvxBdwRKqIwJtVA.png)

Transition Lifecycle



A word of caution, transitions are a _vast_ subject in Vue land. We are going to examine and implement a thin slice of this functionality, namely integrating a 3rd party animation library, [Velocity JS](http://velocityjs.org/), with Vue.

In a nutshell, Vue provides a `transition` component that allows you to add enter/leave animations for the element contained within, provided the element is set to be displayed conditionally via, for example, a `v-if` or `v-show` directive.

<pre name="b4b0" id="b4b0" class="graf graf--pre graf-after--p"><transition   
  **name="modal-transition"**  
  **v-on:enter="modalEnter"**   
  **v-on:leave="modalLeave"**>  
       
      <!-- Our modal contents goes here ! -->  
      
</transition></pre>

In our example, we have attached two methods that correspond with two events in the transition lifecycle: `v-on:enter` and `v-on:leave`. We have thusly added these method definitions to our Vue instance, deferring to Velocity JS to `fade` our modal in and out.

<pre name="ec89" id="ec89" class="graf graf--pre graf-after--p">methods: {  
  **modalEnter:** function(el, done) {  
    Velocity(el, 'fadeIn', { duration: 300, complete: done, display: 'flex' })  
  },  
  **modalLeave:** function(el, done) {  
    Velocity(el, 'fadeOut', { duration: 300, complete: done })  
  }  
}</pre>

As mentioned above, the `transition` will fire when the element contained within is conditionally set to display. So, on the inner `div` of our `transition` component, we have added a `v-if` declaration whose value is a boolean `modalShowing`. Let us update our instance’s data model accordingly.

<pre name="0b73" id="0b73" class="graf graf--pre graf-after--p">data: {  
  **modalShowing: false**  
}</pre>

Now, when we want to show the modal, all we have to do is set that boolean to true!

<pre name="425c" id="425c" class="graf graf--pre graf-after--p"><button [**@click**](http://twitter.com/click "Twitter profile for @click")**="showModal"**>Compose Tweet</button></pre>

And write a method to match.

<pre name="931f" id="931f" class="graf graf--pre graf-after--p">hideModal: function() {  
  this.modalShowing = false;  
},  
**showModal:** function() {  
  this.modalShowing = true;  
},</pre>

With some CSS trickery, we have also attached a `click` event handler to the backdrop, so users can hide the modal. Score!

<pre name="6af8" id="6af8" class="graf graf--pre graf-after--p">  
</pre>

### Conclusion

Well, I hope that was not too painful (and that you learned a thing or two along the way). We only took a look at a small sliver of what Vue has to offer, though, as mentioned above, these concepts are crucial to unlocking the potential of Vue.

I admit, it is unfair to compare Vue to jQuery. They are products of different times, with quite different use cases. However, for those who have struggled their way to learn DOM manipulation and event handling through jQuery, I hope these concepts are a breath of fresh air that you can apply to your workflow.








