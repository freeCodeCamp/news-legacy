---
author: Per Harald Borgen
authorTwitter: https://twitter.com/perborgen
authorFacebook: https://facebook.com/10156392389390183
title: "Vue.js components: an interactive guide"
subTitle: "In my previous tutorial we learned the basics of Vue.js: the Vue instance, the template syntax, data object, directives, methods and more..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*ieROYZuCX-w0p9V7UswJbQ.png
url: https://medium.freecodecamp.org/vue-js-components-an-interactive-guide-1b8149ecc254
id: vue-js-components-an-interactive-guide-1b8149ecc254
date: 2017-08-17T21:46:52.830Z
tags: [
  "JavaScript",
  "Vuejs",
  "Web Development",
  "Tech",
  "Startup"
]
---
# Vue.js components: an interactive guide



![](https://cdn-images-1.medium.com/max/1600/1*ieROYZuCX-w0p9V7UswJbQ.png)



In [my previous tutorial](https://medium.freecodecamp.org/learn-basic-vue-js-crash-course-guide-vue-tutorial-e3da361c635) we learned the basics of Vue.js: the Vue instance, the template syntax, data object, directives, methods and more. This was enough to get started creating with very basic Vue examples.

> **Note:** check out [this playlist](https://scrimba.com/playlist/playlist-38) if you’re interested in watching all my Vue screencasts.

But if you want to build proper apps with Vue, you’ll need to learn about components. It’s one of the most powerful features of the library.







![](https://cdn-images-1.medium.com/max/2000/1*bLOCCi8EPfCO9-b8skIBoQ.png)







Components makes your code more reusable and your markup more readable.

They’ll let you create custom HTML elements, which will behave exactly how you want them to. To create a Vue.js component, do the following:

<pre name="b338" id="b338" class="graf graf--pre graf-after--p">Vue.component('my-component', {  
  template: ''  
})</pre>

<pre name="306e" id="306e" class="graf graf--pre graf-after--pre">new Vue({  
    el: '#app'  
})</pre>

The `template key` is where you write your markup for that component. In the same object you’ll later add more functionalities. You create an **instance** of your component through adding `<my-component></my-component>` in the HTML:

<pre name="d140" id="d140" class="graf graf--pre graf-after--p">  
      <my-component></my-component>  
</pre>

This will result in the following being rendered on the page:



![](https://cdn-images-1.medium.com/max/1600/1*F5KvcbAc0YIN64iMUV62pw.png)



Here is a [Scrimba screencast](https://scrimba.com/casts/crNKWHd) explaining the same concept. It’s interactive, so you can pause the screencast and edit the code whenever you want.







[![](https://cdn-images-1.medium.com/max/2000/1*qz9lQc06lN7QFhdgVifRdA.png)](https://scrimba.com/casts/crNKWHd)







### Props

The component above doesn’t do much. To make it a bit more usable, let’s add props to it:

<pre name="1583" id="1583" class="graf graf--pre graf-after--p">Vue.component('my-component', {  
  props: ['message'],  
  template: ``,  
})</pre>

Props will enable you to pass data into a component instance from the outside of that component. Or more correctly, pass the data down from a parent.

The `my-component` has one prop called `message`, which it’ll render out. The value of `message` will be defined when we create new instances of this component in the DOM. We can create as many `my-component`’s as we want, and give each of them different props. Thus we’ll be able to re-use our code.

To pass data down as the `message` prop, simply do the following:

<pre name="6490" id="6490" class="graf graf--pre graf-after--p">  
      <my-component message="Hello from Vue.js!"></my-component>  
</pre>

Now, **Hello from Vue.js!** will be rendered on the page.

But this is still a very static solution, as we’ve hard coded the value of the prop in the HTML. A better solution would be to bind this value to a data source. Then we can change it how we want later on, like based upon user interactions or responses from API’s.

Let’s bind it to the data object on our Vue instance. First we’ll create the data object.

<pre name="8e0d" id="8e0d" class="graf graf--pre graf-after--p">var app = new Vue({  
    el: '#app',  
    data: {  
      msg: 'Hello from the Vue instance'  
    }  
})</pre>

To bind the prop in `my-component` to the `msg` in our Vue instance, we’ll use the `v-bind` directive we learned in the previous article:

<pre name="29b3" id="29b3" class="graf graf--pre graf-after--p">  
      <my-component v-bind:message="msg"></my-component>  
</pre>

Now, we can change the data through `app.msg = 'Some new data'` and Vue will take care of updating the DOM with the new data.

> **_Tip:_** _You can remove the_ `_v-bind_` _from_ `_v-bind:message_` _and rather use the _`_:message_` _shorthand._

Here is a [Scrimba screencast](https://scrimba.com/casts/caPgLTP) explaining the concept:







[![](https://cdn-images-1.medium.com/max/2000/1*T-6z4ty_ZbeFikNjecUnig.png)](https://scrimba.com/casts/caPgLTP)







But what if you want your component to be able to change its `message`? This can’t happen as long as `message` is a prop, as you should never mutate a prop inside a component. If you try to, Vue will give you a warning in the console.

### Data

So we’ll need another way of handling data inside the component. This is where the `data` function comes into play. It will allow your components to handle internal state, which you can change how you wants to.

Component `data` fills the same role as the `data` object in the Vue instance. They’re both places where you’ll hold mutable data. But, component `data` is a **function** and not an **object**.

Let’s jump into the code, to make it less abstract.

<pre name="4a02" id="4a02" class="graf graf--pre graf-after--p">Vue.component('my-component', {  
  template: '',  
  data: function() {  
    return {  
      message: 'Hello from Vue data!'  
    }  
  }  
})</pre>

Here is a [Scrimba screencast](https://scrimba.com/casts/c2LmGU2) which explains the concept.







[![](https://cdn-images-1.medium.com/max/2000/1*wrV62Fl-8dqQWKjbqDruKg.png)](https://scrimba.com/casts/c2LmGU2)







And that’s about it! There are of course many more things to learn about Vue components. But this should be enough for you to start playing around with it on your own.

If you learn something new about Vue, I’d recommend you to pass that knowledge on to others as well. That’s one of the best ways to learn, and the reason that communities like [freeCodeCamp](https://www.freecodecamp.com/) thrive.

So go ahead and write an article (or create a [Scrimba](http://scrimba.com) screencast) about your what you’ve learned!








