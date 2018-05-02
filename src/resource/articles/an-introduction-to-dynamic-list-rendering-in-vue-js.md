---
original: >-
  https://medium.freecodecamp.org/an-introduction-to-dynamic-list-rendering-in-vue-js-a70eea3e321?source=rss----336d898217ee---4
title: An introduction to dynamic list rendering in Vue.js
pubDate: '2018-05-01T15:32:32.000Z'
author:
  avatar: 'https://cdn-images-1.medium.com/fit/c/120/120/1*j1DCVIWfgHKhaVxI15lDGQ.png'
  name: Hassan Djirdeh
  bio: author @ fullstack.io/vue // developer @ Shopify
  profileLink: 'https://medium.freecodecamp.org/@hassan.djirdeh?source=post_header_lockup'
  social:
    twitter: 'https://twitter.com/djirdehh'
  slug: hassan-djirdeh
slug: an-introduction-to-dynamic-list-rendering-in-vue-js
---
* * *

An introduction to dynamic list rendering in Vue.js
===================================================

![](https://cdn-images-1.medium.com/max/2000/1*smV1EYFRTT4wGha020XFIA.png)

List rendering is one of the most commonly used practices in front-end web development. Dynamic list rendering is often used to present a series of similarly grouped information in a concise and friendly format to the user. In almost every web application we use, we can see **lists** of content in numerous areas of the app.

In this article we’ll gather an understanding of Vue’s `v-for` directive in generating dynamic lists. We’ll also go through some examples of why the `key` attribute should be used when doing so.

Since we’ll be explaining things thoroughly as we start to write code, this article assumes you’ll have no or very little knowledge with Vue (and/or other JavaScript frameworks).

### Case Study: Twitter

We’re going to use [Twitter](https://twitter.com/) as the case study for this article.

When logged in and in the main index route of Twitter, we’re presented with a view similar to this:

![](https://cdn-images-1.medium.com/max/2000/0*yAgKZT2NuFjBWWbC.png)

On the homepage, we’ve become accustomed to seeing a list of trends, a list of tweets, a list of potential followers, and so on. The content displayed in these lists depends on a multitude of factors — our Twitter history, whom we follow, our likes, and so on. As a result, we can say all this data is **dynamic**.

Though this data is dynamically obtained, the **way** this data is shown remains the same. This is in part due to using **reusable web components**.

For example, we can see the list of tweets as a list of single `tweet-component` items. We can think of `tweet-component` as a shell that takes data of sorts, such as the username, handle, tweet, and avatar, among other pieces, and simply displays those pieces in a consistent markup.

![](https://cdn-images-1.medium.com/max/2000/0*BdB3OeyWDWHuMNiN.png)

Let’s say we wanted to render a list of components (like a list of `tweet-component` items) based on a large data source obtained from a server. In Vue, the first thing that should come to mind to accomplish this is the `**v-for**` directive.

### The v-for directive

The `v-for` directive is used to render a list of items based on a data source. The directive can be used on a template element and requires a specific syntax along the lines of:

![](https://cdn-images-1.medium.com/max/2000/0*Z1iUt5OO46Ari1uK.png)

Let’s see an example of this in practice. First, we’ll assume we’ve already obtained a collection of tweet data:

const tweets = \[  
  {  
    id: 1,  
    name: 'James',  
    handle: '[@jokerjames](http://twitter.com/jokerjames "Twitter profile for @jokerjames")',  
    img: '[https://semantic-ui.com/images/avatar2/large/matthew.png'](https://semantic-ui.com/images/avatar2/large/matthew.png%27),  
    tweet: "If you don't succeed, dust yourself off and try again.",  
    likes: 10,  
  },  
  {   
    id: 2,  
    name: 'Fatima',  
    handle: '[@fantasticfatima](http://twitter.com/fantasticfatima "Twitter profile for @fantasticfatima")',  
    img: '[https://semantic-ui.com/images/avatar2/large/molly.png'](https://semantic-ui.com/images/avatar2/large/molly.png%27),  
    tweet: 'Better late than never but never late is better.',  
    likes: 12,  
  },  
  {  
    id: 3,  
    name: 'Xin',  
    handle: '[@xeroxin](http://twitter.com/xeroxin "Twitter profile for @xeroxin")',  
    img: '[https://semantic-ui.com/images/avatar2/large/elyse.png'](https://semantic-ui.com/images/avatar2/large/elyse.png%27),  
    tweet: 'Beauty in the struggle, ugliness in the success.',  
    likes: 18,  
  }  
\]

`tweets` is a collection of `tweet` objects with each `tweet` containing details of that particular tweet—a unique identifier, the name/handle of the account, tweet message, and so on. Let’s now attempt to use the `v-for` directive to render a list of tweet components based on this data.

First and foremost, we’ll create the Vue instance — the heart of the Vue application. We’ll mount/attach our instance to a DOM element of id `app`and assign the `tweets` collection as part of the instance’s data object.

new Vue({  
  el: '#app',  
  data: {  
    tweets  
  }  
});

We’ll now go ahead and create a `tweet-component` that our `v-for`directive will use to render a list. We’ll use the global `Vue.component`constructor to create a component named `tweet-component`:

Vue.component('tweet-component', {  
  template: `    
    <div class="tweet">  
      <div class="box">  
        <article class="media">  
          <div class="media-left">  
            <figure class="image is-64x64">  
              <img :src="tweet.img" alt="Image">  
            </figure>  
          </div>  
          <div class="media-content">  
            <div class="content">  
              <p>  
                <strong>{{tweet.name}}</strong> <small>{{tweet.handle}}</small>  
                <br>  
                {{tweet.tweet}}  
              </p>  
            </div>  
              <div class="level-left">  
                <a class="level-item">  
                  <span class="icon is-small"><i class="fas fa-heart"></i></span>  
                  <span class="likes">{{tweet.likes}}</span>  
                </a>  
              </div>  
          </div>  
        </article>  
      </div>  
    </div>    
  `,  
  props: {  
    tweet: Object  
  }  
});

A few interesting things to note here:

1.  The `tweet-component` expects a `tweet` object prop as seen in the prop validation requirement (`props: {tweet: Object}`). If the component is rendered with a `tweet` prop that is **not an object**, Vue will emit warnings.
2.  We’re binding the properties of the tweet object prop on to the component template with the help of the Mustache syntax: `{{ }}`.
3.  The component markup adapts [Bulma’s Box element](https://bulma.io/documentation/elements/box/) as it represents a good resemblance to a tweet.

In the HTML template, we’ll need to create the markup where our Vue app will be mounted (i.e. the element with the id of `app`). Within this markup, we’ll use the `v-for` directive to render a list of tweets.

Since `tweets` is the data collection we’ll be iterating over, `tweet` will be an appropriate alias to use in the directive. In each rendered `tweet-component`, we’ll **also**  pass in the iterated `tweet` object as props for it to be accessed in the component.

<div id="app" class="columns">  
  <div class="column">  
    <tweet-component v-for="tweet in tweets" :tweet="tweet"/>  
  </div>  
</div>

Regardless of **how** many more tweet objects would be introduced to the collection, or how they’ll change over time — our set up will always render all the tweets in the collection in the same markup we expect.

With the help of some custom CSS, our app will look something like this:

Though everything works as expected, we may be prompted with a Vue tip in our browser console:

\[Vue tip\]: <tweet-component v-for="tweet in tweets">: component lists rendered with v-for should have explicit keys...

**Note:** You may not be able to see the warning in the browser console when running the code through CodePen.

Why is Vue telling us to specify explicit keys in our list when everything works as expected?

### The key attribute

It’s common practice to specify a key attribute for every iterated element within a rendered `v-for` list. This is because Vue uses the `key` attribute to create **unique bindings for each node’s identity**.

Let’s explain this some more — if there were any dynamic UI changes to our list (for example, order of list items gets shuffled), Vue will opt towards changing data within each element **instead** of moving the DOM elements accordingly. This won’t be an issue in most cases. However, in certain instances where our `v-for` list depends on DOM state and/or child component state, this can cause some unintended behavior.

Let’s see an example of this. What if our simple tweet component now contained an input field that will allow the user to directly respond to the tweet message? We’ll ignore how this response could be submitted and simply address the new input field itself:

![](https://cdn-images-1.medium.com/max/2000/0*X3dVBOFq76PJQFGC.png)

We’ll include this new input field on to the template of `tweet-component`:

Vue.component('tweet-component', {  
  template: `  
    <div class="tweet">  
      <div class="box">  
        // ...  
      </div>  
 **<div class="control has-icons-left has-icons-right">  
        <input class="input is-small" placeholder="Tweet your reply..." />  
        <span class="icon is-small is-left">  
          <i class="fas fa-envelope"></i>  
        </span>  
      </div>**  
    </div>  
  `,  
  props: {  
    tweet: Object  
  }  
});

Assume we wanted to introduce another new feature into our app. This feature would involve allowing the user to shuffle a list of tweets randomly.

To do this, we can first include a “Shuffle!” button in our HTML template:

<div id="app" class="columns">  
  <div class="column">  
 **<button class="is-primary button" @click="shuffle">  
      Shuffle!  
    </button>**  
    <tweet-component v-for="tweet in tweets" :tweet="tweet"/>  
  </div>  
</div>

We’ve attached a click event listener on the button element to call a `shuffle` method when triggered. In our Vue instance, we’ll create the `shuffle` method responsible for randomly shuffling the `tweets` collection in the instance. We’ll use lodash’s [_shuffle](https://lodash.com/docs/4.17.5#shuffle) method to achieve this:

new Vue({  
  el: '#app',  
  data: {  
    tweets  
  },  
 **methods: {  
    shuffle() {  
      this.tweets = _.shuffle(this.tweets)  
    }  
  }**  
});

Let’s try it out! If we click shuffle a few times, we’ll notice our tweet elements get randomly assorted with each click.

However, if we type some information in the input of each component and **then** click shuffle, we’ll notice something peculiar happening:

![](https://cdn-images-1.medium.com/max/2000/1*1PN7mevBsMNhS03dt6-7qA.gif)

Since we haven’t opted to use the `**key**` attribute, Vue has not created unique bindings to each tweet node. As a result, when we’re aiming to reorder the tweets, Vue takes the more performant saving approach to simply **change**  **(or patch)** data in each element. Since the temporary DOM state (that is, the inputted text) remains in place, we experience this unintended mismatch.

Here’s a diagram that shows us the data that gets patched on to each element and the DOM state that remains in place:

![](https://cdn-images-1.medium.com/max/2000/1*IKwgNEwHYMwzRq8nOiBjog.png)

To avoid this; we’ll have to assign a unique **key** to every `tweet-component`rendered in the list.

We’ll use the `id` of a `tweet` to be the unique identifier since we should safely say a tweet’s `id` shouldn’t be equal to that of another. Because we’re using dynamic values, we’ll use the `v-bind` directive to bind our key to the `tweet.id`:

<div id="app" class="columns">  
  <div class="column">  
    <button class="is-primary button" @click="shuffle">  
      Shuffle!  
    </button>  
    <tweet-component  
      v-for="tweet in tweets"  
      :tweet="tweet"  
      **:key="tweet.id"**  
    />  
  </div>  
</div>

Now, Vue recognizes each tweet’s node identity, so it’ll **reorder**  the components when we intend on shuffling the list.

![](https://cdn-images-1.medium.com/max/2000/1*GXx_K3xLDHF8PZRTILoW_Q.gif)

### Transitions

Since each tweet component is now being moved accordingly, we can take this a step further and use Vue’s `transition-group` to **show** how the elements are being reordered.

To do this, we’ll add the `[transition-group](https://vuejs.org/v2/guide/transitions.html#List-Transitions)` element as a wrapper to the `v-for` list. We'll specify a transition name of `tweets` and declare that the transition group should be rendered as a `div` element.

<div id="app" class="columns">  
  <div class="column">  
    <button class="is-primary button" @click="shuffle">  
      Shuffle!  
    </button>  
    **<transition-group name="tweets" tag="div">**  
      <tweet-component  
         v-for="tweet in tweets"  
         :tweet="tweet"  
         :key="tweet.id"  
      />  
    **</transition-group>**  
  </div>  
</div>

Based on the name of the transition, Vue will automatically recognize if any CSS transitions/animations have been specified. Since we aim to invoke a transition for the **movement** of items in the list, Vue will look for a specified CSS transition along the lines of `tweets-move` (where `tweets` is the name given to our transition group).

As a result, we'll manually introduce a `.tweets-move` class that has a specified type and time of transition:

#app .tweets-move {  
  transition: transform 1s;  
}

**Note:** This is a very brief look into applying list transitions. Be sure to check out the [Vue docs](https://vuejs.org/v2/guide/transitions.html) for detailed information on all the different types of transitions that can be applied!

Our `tweet-component` elements will now **transition** appropriately between locations when a shuffle is invoked. Give it a try! Type some information in the input fields and click “Shuffle!” a few times.

Pretty cool, right? Without the `key` attribute, **the transition-group element can’t be used to create list transitions** since the elements are **patched in place** instead of being reordered.

Should the `key` attribute always be used? **It’s recommended**. The [Vue docs](https://vuejs.org/v2/guide/list.html#key) specify that the key attribute should only be omitted if:

*   We intentionally want the default manner of patching elements in place for performance reasons.
*   The DOM content is simple enough.

### Conclusion

And there we have it! Hopefully this short article portrayed how useful the `v-for` directive is as well as provided a little more context to why the `key` attribute is often used. Let me know if you may have any questions/thoughts whatsoever!

If you liked my style of writing and are potentially interested in learning how to build real world apps with Vue, you may like the book **Fullstack Vue: The Complete Guide to Vue.js** that I helped publish! The book covers numerous facets of Vue including routing, simple state management, form handling, Vuex, server persistence, and testing, among other topics. If you’re interested and/or would like to try a sample chapter, you can get more information from our website [**https://fullstack.io/vue**](https://www.fullstack.io/vue/)**!**

If you have any questions/thoughts/opinions, you’re more than welcome to reach out to me anytime [@djirdehh](https://twitter.com/djirdehh)!
