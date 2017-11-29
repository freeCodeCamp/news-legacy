---
author: Per Harald Borgen
authorTwitter: https://twitter.com/perborgen
authorFacebook: https://facebook.com/10156392389390183
title: "Vue.js: a 3-minute interactive introduction"
subTitle: "Vue.js is a JavaScript library for building user interfaces. Last year it started to become quite popular among web developers. It’s ligh..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*S9ztlTg2A3gvRxPfUg3jTQ.png
url: https://medium.freecodecamp.org/learn-basic-vue-js-crash-course-guide-vue-tutorial-e3da361c635
id: learn-basic-vue-js-crash-course-guide-vue-tutorial-e3da361c635
date: 2017-06-19T01:41:12.558Z
tags: [
  "JavaScript",
  "Web Development",
  "Programming",
  "Web Design",
  "Open Source"
]
---
# Vue.js: a 3-minute interactive introduction







![](https://cdn-images-1.medium.com/max/2000/1*S9ztlTg2A3gvRxPfUg3jTQ.png)







Vue.js is a JavaScript library for building user interfaces. Last year it started to become quite popular among web developers. It’s light weight, relatively easy to learn, and powerful.

In the three minutes Medium says it will take you to read this article, you’ll get equipped with some start building basic Vue apps. With each segment, I’ve also included an interactive [Scrimba](http://scrimba.com) screencast, where you can watch me explain the concepts and play around with the code yourself.

Let’s jump into it.

### Template syntax and data

At the core of Vue.js is a straightforward template syntax which looks like this:

<pre name="9fad" id="9fad" class="graf graf--pre graf-after--p">  
    {{ message }}  
</pre>

Pair that with the following JavaScript snippet:

<pre name="afbc" id="afbc" class="graf graf--pre graf-after--p">var myApp = new Vue({  
   el: '#myApp',  
   data: {  
       message: 'Hello world!'  
   }  
})</pre>

And it’ll result in _Hello world!_ being rendered on the page.



![](https://cdn-images-1.medium.com/max/1600/1*8H9M0L0bYLUo8j0GqbwFFA.png)



The `el: #myApp` part tells Vue to render the app inside the DOM element with the id of _myApp._ The `data` object is where you place you the data you want to use in your app. We’ve added only one key here, `message`, which we’re referencing to in our HTML like this: `{{ message }}`.

Vue takes care of linking the `data` object to the DOM, so if the data changes, the page will be updated as well.

This is called declarative rendering. You simply specify _what_ you want to update, and Vue takes care of _how_ to do it.

You can change the data can by doing this:

    myApp.message = 'Some new value';

Here is a screencast which explains this exact concept:





<iframe data-width="800" data-height="450" width="700" height="394" src="https://medium.freecodecamp.org/media/ad68e366844aa7947584d7efbea1d666?postId=e3da361c635" data-media-id="ad68e366844aa7947584d7efbea1d666" allowfullscreen="" frameborder="0"></iframe>





### Directives

The next concept you’ll need to learn is directives. Directives are HTML attributes that are prefixed with `v-`, which indicates that they apply reactive behavior to the rendered DOM.

Let’s say we only want to render something if a condition is true, and hide it if it’s false. Then we’ll use `v-if`.

In the HTML, it looks like this.

<pre name="eab1" id="eab1" class="graf graf--pre graf-after--p">  
    <p v-if="seen">Now you see me</p>  
</pre>

And some JavaScript:

<pre name="9b11" id="9b11" class="graf graf--pre graf-after--p">var app = new Vue({  
    el: '#app',  
    data: {  
        seen: true  
    }  
})</pre>

This will result in rendering out the _Now you see me_ paragraph if `seen` in `data` is **true.** To hide the paragraph, you can set `seen` to **false,** like this:

<pre name="be8f" id="be8f" class="graf graf--pre graf-after--p">app.seen = false;</pre>

Here is a screencast explaining the same concept:





<iframe data-width="800" data-height="450" width="700" height="394" src="https://medium.freecodecamp.org/media/08c87dac184d39a836deea3d493a7a48?postId=e3da361c635" data-media-id="08c87dac184d39a836deea3d493a7a48" allowfullscreen="" frameborder="0"></iframe>





There are many other directives, like `v-for`, `v-on,` `v-bind` and `v-model`.

### Handling user input

Another core directive you need to learn is `v-on`. It will hook up an event listener to the DOM element, so that you can handle user input. You specify the type of event after the colon. So `v-on:click` will listen for clicks.

<pre name="07ef" id="07ef" class="graf graf--pre graf-after--p">  
    <button v-on:click="myClickHandler">Click me!</button>  
</pre>

`myClickHandler` refers to the key with the same name in the `methods` object. Needless to say, that’s the object where you place your app’s methods. You can have as many methods as you want.

<pre name="6b7d" id="6b7d" class="graf graf--pre graf-after--p">var app = new Vue({  
    el: '#app',  
    methods: {  
        myClickHandler: function () {  
            console.log('button clicked!');  
        }  
    }  
})</pre>

This will result in _button clicked_ being logged to the console when clicking the button.

Here is a screencast explaining the concept:





<iframe data-width="800" data-height="450" width="700" height="394" src="https://medium.freecodecamp.org/media/d3720fb13375dad55175a0e4dc0f894c?postId=e3da361c635" data-media-id="d3720fb13375dad55175a0e4dc0f894c" allowfullscreen="" frameborder="0"></iframe>





### Tying it all together

Now let’s create an example where we’re using both `data` and `methods`, tying together what we’ve learned up until now.

<pre name="7755" id="7755" class="graf graf--pre graf-after--p">  
    <p>{{ message }}</p>  
    <button v-on:click="changeMessage">Click me!</button>  
</pre>

And the JavaScript:

<pre name="4542" id="4542" class="graf graf--pre graf-after--p">var app = new Vue({  
    el: '#app',  
    data: {  
        message: 'Start message'  
    },  
    methods: {  
        changeMessage: function () {  
            this.message = 'The message has changed!'  
        }  
    }  
})</pre>

Initially, it’ll display out _Start message_ on the page_,_ however after the click it’ll display _This message has changed_ instead_._

The `this`keyword refers to the Vue instance, the one we’ve called `app`. It is on this instance that our data lives, so we can refer to the `message` data through `this.message`.

Here is a screencast explaining the concept:





<iframe data-width="800" data-height="450" width="700" height="394" src="https://medium.freecodecamp.org/media/c508861482b8a339b659741376c991e4?postId=e3da361c635" data-media-id="c508861482b8a339b659741376c991e4" allowfullscreen="" frameborder="0"></iframe>





And by that you should know enough Vue.js to get started creating simple apps.

In the next tutorial, you’ll learn how to create Vue components. So be sure to follow this publication if you liked this article.








