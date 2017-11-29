---
author: Maxime LaBoissonniere
authorTwitter: https://twitter.com/maxlaboisson
authorFacebook: none
title: "How to build a pre-rendered, SEO-friendly Vue.js app"
subTitle: "“I can’t take it anymore. Our in-house reporting panel sucks!”..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*b_tBoyGnN0G_BYDEJVCWrw.jpeg
url: https://medium.freecodecamp.org/vue-js-tutorial-a-prerendered-seo-friendly-example-live-demo-771e974e909c
id: vue-js-tutorial-a-prerendered-seo-friendly-example-live-demo-771e974e909c
date: 2017-04-05T18:40:29.547Z
tags: [
  "Vuejs",
  "Vue",
  "JavaScript",
  "Web Development",
  "Front End Development"
]
---
# How to build a pre-rendered, SEO-friendly Vue.js app



![](https://cdn-images-1.medium.com/max/1600/1*b_tBoyGnN0G_BYDEJVCWrw.jpeg)

[David Ragusa](https://www.davideragusa.com/), [Unsplash](https://unsplash.com/)



“I can’t take it anymore. Our in-house reporting panel sucks!”

Our product manager was pissed. The crumbling app he was trying to pull data from was… disastrous.

“Max, we _need_ better reporting. Can you fix it?”

“Honestly, I’d much rather build a brand new app,” I answered, grinning.

“Sure, go ahead. _Carte blanche_, buddy.”

I rubbed my hands, grinning still. FINALLY, an occasion to use the JS framework everyone’s been raving about: [Vue.js](https://vuejs.org/).

I’ve just finished coding that app, and I **loved** it.

Inspired by my recent experience, I took some time to craft a Vue.js tutorial for our community. Now, I’ll be covering mostly two topics in here:

1.  How to build a lean web app with Vue.js
2.  How to handle Vue.js SEO & prerendering with `[prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin)`

More specifically, I’ll walk you through creating a small shop with SEO-friendly product pages.

I’ve slightly touched on Vue in [my latest headless CMS post](https://snipcart.com/blog/intro-api-first-headless-cms-directus), but this one will go much deeper, so I’m excited.

### GitHub repo and live Vue demo







![](https://cdn-images-1.medium.com/max/2000/0*nFwQlP5q8nUKkqMD.png)







Before we get started, everything we’ll discuss here is open source, and I have a live example up as well.

[See GitHub code repo](https://github.com/snipcart/vue-prerender-snipcart)

[See live Vue.js demo](https://vue-snipcart.netlify.com/)

### What is Vue.js exactly?

Let’s start by dropping a little knowledge for those not familiar with the progressive framework.



![](https://cdn-images-1.medium.com/max/1600/0*oqRmtmP0uE87G44T.png)



**Vue is a lightweight, progressive JavaScript framework that helps you create web interfaces**.

Don’t be fooled by the “JS framework” part of the definition just yet. For Vue is quite different from its trendy counterparts — React.js & Angular.js. For starters, it’s not an open source by-product of commercial tech giants like Google and Facebook.

[Evan You](https://twitter.com/youyuxi) first released it in 2014, with the intention of creating an “incrementally adoptable,” modern JS library. That’s one of the most powerful features of Vue: creating pluggable components you can add to any project without undergoing major refactors. Any developer can try out Vue in a project without jeopardizing or burdening its existing code base.

Pattern terminology apart, I feel like the premises of Vue are:

**1\. You can’t know the entire state architecture of your app from the start.**

**2\. Your data will surely change on the runtime.**

It’s around these constraints that the library shapes itself: it’s incremental, component-based, and reactive. The granular architecture of the components lets you easily separate your logic concerns while maintaining reusability for them. On top of that, it natively binds your data to the views so they magically update when necessary (through watchers). Although the same definition could be said of many reactive front-end frameworks, I found Vue just achieved it more elegantly, and, for the majority of my use cases, in a better way.

Vue also has a softer learning curve than, say, React, which requires JSX templating knowledge. One could even say Vue is React minus the awkward parts.

_For more in-depth comparisons with other JS frameworks — React, Angular, Ember, Knockout, Polymer, Riot — _[_check out the official docs_](https://vuejs.org/v2/guide/comparison.html) _on the subject._

Last but not least, the performance & insightful dev tools Vue offers make for a great coding experience. No wonder [its adoption is skyrocketing](https://www.quora.com/How-popular-is-VueJS-in-the-industry/answer/Evan-You-3).



![](https://cdn-images-1.medium.com/max/1600/0*vwoIhSwecQ3_DSdI.png)



From open source projects like [Laravel](https://laravel.com/) & [PageKit](https://snipcart.com/blog/pagekit-cms-ecommerce-demo) to enterprise ones like [Gitlab](https://about.gitlab.com/2016/10/20/why-we-chose-vue/) & [Codeship](http://codeship.com/) (not to mention the Alibaba & Baidu giants), _lots_ of organizations are using Vue.

Now, however, it’s time to see how **you**’re going to use it here.

### Our Vue.js example: a quick, SEO-friendly e-commerce app

In this section, I’ll show you how to build a small e-commerce app using Vue 2.0 & Snipcart, our HTML/JS cart platform for devs. You’ll also see how to make sure product pages are properly “crawlable” for search engine bots.

### Pre-requisites

*   Minimal knowledge of Vue.js — [start here](https://www.slideshare.net/paddylock/an-introduction-to-vuejs).
*   Basic understanding of `[vuex](https://vuex.vuejs.org/en/intro.html)` & `[vue-router](https://router.vuejs.org/en/)`.
*   A Snipcart account (forever free in Test mode).

If you want to dive deeper into all things Vue 2.0, Laracasts’ got you covered with [this series](https://laracasts.com/series/learn-vue-2-step-by-step).

### 1\. Setting up the environment

First, use the vue-cli to scaffold a basic Vue app. In your favorite terminal, input:

    npm install -g vue-cli vue init webpack-simple vue-snipcart

This will create a new vue-snipcart folder containing a basic configuration using vue-loader. It will also enable you to write a single file component (template/js/css in the same .vue file).

I want this demo to feel as real as possible, so let’s add two more modules widely used in Vue SPA for large applications: `vuex` and `vue-router`.

*   `vuex` is a flux-like state manager—really light yet very powerful. It's strongly influenced by Redux, on which you can learn more [here](https://egghead.io/courses/getting-started-with-redux).
*   `vue-router` lets you define routes to dynamically handle components of your app.

To install these, go in your new vue-snipcart project folder and run the following commands:

    npm install --save vue-router npm intsall --save vuex

Another thing to install now is the `prerender-spa-plugin`, which will allow you to prerender crawlable routes:

    npm install --save prerender-spa-plugin

Almost there. The last four packages are:

*   `pug`—for templates, I prefer that to HTML.
*   `vuex-router-sync`—to inject some of your router information directly in the vuex state.
*   `copy-webpack-plugin`—to make it easier to include static files in the dist folder.
*   `babel-polyfill`—to run Vue inside PhantomJS (used by the prerender plugin).

Run these:

    npm install --save pug npm install --save vuex-router-sync npm install --save copy-webpack-plugin npm install --save babel-polyfill

### 2\. Assembling the architecture

Installs: check. Time to set everything so it can handle the store’s data.

Let’s start with vuex store. You’ll use this to store/access our products info.

For this demo, I’ll use static data, although this would still work if you were to fetch it instead.

**_Note_**_: with Snipcart, we inject the cart with_ [_a basic JS snippet_](https://docs.snipcart.com/getting-started/installation)_, and define products in the markup with_ [_simple HTML attributes_](https://docs.snipcart.com/configuration/product-definition)_._

### 2.1 Building the store

Create a store folder in the `src` one, along with 3 files:

*   `state.js` to define static products
*   `getters.js` to define a get function to retrieve products by ID
*   `index.js` to bundle the first two together





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/f904d469817870584dbfd5b428645647?postId=771e974e909c" data-media-id="f904d469817870584dbfd5b428645647" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F9772644%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





### 2.2 Building the router

Let’s keep the store basic: a homepage listing products + a details page for each product. You’ll need to register two routes in the router to handle these:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/21ea2825a9d919a6fac1b085b1f99c69?postId=771e974e909c" data-media-id="21ea2825a9d919a6fac1b085b1f99c69" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F9772644%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





These components haven’t been created yet, but no worries, they’re coming later. ;)

Note that I employed `mode: 'history'` in my `VueRouter` declaration. This is important, as the prerender plugin won't work otherwise. The difference is that the router will use the history API instead of hashbangs to navigate.

### 2.3 Linking everything together

Now that you have both your store and your router, you’ll need to register them in the app. Hop in your `src/main.js` file and update it as follows:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/91964fdef69ec2d1123d531e835f11d7?postId=771e974e909c" data-media-id="91964fdef69ec2d1123d531e835f11d7" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F9772644%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Quite simple, right? As mentioned earlier, the sync method from the `vuex-router-sync` package injects some of the current route information in the store state. It’ll be helpful later on.

### 3\. Crafting the Vue components

Having data feels awesome, but showing it is even better. You can use three components to achieve that:

*   `Home` to show a products listing
*   `Product` to be used for each product by the Home component
*   `ProductDetails` for the individual product pages

Each of them will be in the `src/components` folder.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/0388279e53fd893b1ee8d710869f2c20?postId=771e974e909c" data-media-id="0388279e53fd893b1ee8d710869f2c20" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F9772644%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Above, the store state is used to get products and iterate on them to render a product component for each one.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ac2c36aa89ec121358748e1bb9bdcc48?postId=771e974e909c" data-media-id="ac2c36aa89ec121358748e1bb9bdcc48" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F9772644%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





You link to each page, handled by your router, which brings us to your last component.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/5086d358c5ee78feeac6433e31ec2f8b?postId=771e974e909c" data-media-id="5086d358c5ee78feeac6433e31ec2f8b" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F9772644%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





This one has a **little** more logic than the others. You get the current ID from the route and then get the associated product from the getter previously created.

### 4\. Creating the app

Let’s use your new components, yeah?

Open the `App.vue` file. Content in there is still the default one generated from the `vue init webpack-simple` scaffolding.

Swap everything to this instead:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/12797a82cadd3b6e2b1aca5197c323f8?postId=771e974e909c" data-media-id="12797a82cadd3b6e2b1aca5197c323f8" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F9772644%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





The `TopContext` component isn't really important: it acts only as a header. The key part is the `router-view` one: it will be determined dynamically by `VueRouter`, and the associated component defined earlier will be injected instead.

The last view to update is the `index.html`. For this use case, let’s create a new static folder in the `src` one. There, you'll move the index file, and update as follows:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2f5dfcab36a046e21645a04b0548d831?postId=771e974e909c" data-media-id="2f5dfcab36a046e21645a04b0548d831" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F9772644%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





You can see I added Snipcart’s necessary scripts in the default view. A small component granularly including them could have been cleaner, but since all the views need them, I did it this way.

### 5\. Handling Vue.js SEO with the Prerender plugin



![](https://cdn-images-1.medium.com/max/1600/0*QDOOhLRbA766liSK.png)



Everything in the app is rendered dynamically with JS, which isn’t super for SEO: the asynchronous content of pages can’t be optimally crawled by search engine bots. It wouldn’t be smart to have an e-commerce website missing out on all that organic traffic opportunity!

Let’s use **prerendering** to bring more SEO opportunities to your Vue.js app.

Compared to Vue SSR (Server-Side Rendering), prerendering is much easier to set up. And quite frankly, the former is [often overkill](https://github.com/chrisvfritz/prerender-spa-plugin#prerendering-vs-server-side-rendering-ssr), unless you’re dealing with _lots_ of routes. Plus, both achieve quite similar results on an SEO level.

Prerendering will allow you to keep your front end as a fast, light static site that’s easily crawlable.

Let’s see how you can use it. Go to your webpack file and add the following declaration to your top level export:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/69ab08ac4a1268c1d14908d2d88bc568?postId=771e974e909c" data-media-id="69ab08ac4a1268c1d14908d2d88bc568" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F9772644%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Okay, so how does this work?

The `CopyWebpackPlugin` will copy your static folder (only containing the view referencing our Vue App) to your dist folder. Then, the `PrerenderSpaPlugin` will use PhantomJS to load the content of your pages and use the results as static assets.

And voilà! You’ve now got prerendered, SEO-friendly product pages for a Vue app.

You can test it yourself with the following command:

    npm run build

This will generate a dist folder containing everything needed for production.

### Other important SEO considerations

1.  Consider adding appropriate meta tags & a sitemap for your app pages. You can learn more about meta tags in the “postProcessHtml” function [here](https://www.npmjs.com/package/prerender-spa-plugin#webpack-advanced).
2.  [Great content](https://moz.com/blog/the-ten-types-of-content-that-work-best-for-seo-whiteboard-friday) plays a huge role in modern SEO. I’d advise making sure content on your app is easy to create, edit, and optimize. To empower content editors, consider throwing a headless CMS into the mix and building a true [JAMstack](https://snipcart.com/blog/jamstack-clients-static-site-cms).
3.  An HTTPS connexion is now officially a ranking factor for Google. I’m hosting this demo on [Netlify](https://www.netlify.com/), which provides free SSL certificates with all plans.
4.  [Mobile-first indexing](http://searchengineland.com/faq-google-mobile-first-index-262751) & [mobile-friendliness](http://searchengineland.com/library/google/google-mobile-friendly-update) as a ranking factor are, well, real. Make sure your mobile experience is as fast and complete as the desktop one!

### Conclusion

Since I had worked with Vue before, crafting this tutorial went rather smoothly. I must’ve spent an hour on the demo. I struggled a bit to get `CopyWebpackPlugin` to work, but eventually found answers in their docs.

I hope this post encourages developers to start using Vue in some projects. Like I said, you can start slowly, by developing a tiny part of an existing project with it. I think it’s definitely worth a try. Our lead developer is coding our latest merchant dashboard feature with Vue as I’m writing this, and he loves it. Plus, when set up right, a Vue app can drive good SEO results.

If you feel like getting inspired first, check out [the Vue.js Awesome list](https://github.com/vuejs/awesome-vue), which curates loads of Vue examples & projects.

**And if you end up really digging Vue,** [**cop some swag**](https://vue.threadless.com/) **or** [**support the creator**](https://www.patreon.com/evanyou)**!**

_If you found this post valuable, take a second to_ [_share it on Twitter_](https://twitter.com/home?status=A%20%40vuejs%202.0%20Tutorial%3A%20Build%20%26%20Prerender%20an%20SEO-Friendly%20E-Commerce%20Web%20App%20%5BLive%20Demo%5D%20http%3A//buff.ly/2oCCBWh%20%23vueJS%20%23SEO%20%23JAMstack)_. Found something I missed? Got thoughts on Vue, other frameworks, or handling SEO with them? Comments are all yours!_











* * *







I originally published this on [the Snipcart Blog](https://snipcart.com/blog/vuejs-tutorial-seo-example) and shared it in our [newsletter](http://eepurl.com/cDZnQ9).








