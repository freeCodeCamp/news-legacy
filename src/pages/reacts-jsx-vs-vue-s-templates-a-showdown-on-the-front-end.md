---
author: Juan Vega
authorTwitter: https://twitter.com/juanvega878
authorFacebook: none
title: "React’s JSX vs Vue’s templates: a showdown on the front end"
subTitle: "React.js and Vue.js are two of the most popular JavaScript libraries on the planet. They're both powerful and relatively easy to pick up ..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*QH4RGlNwXUFnJSytytvb6A.jpeg
url: https://medium.freecodecamp.org/reacts-jsx-vs-vue-s-templates-a-showdown-on-the-front-end-b00a70470409
id: reacts-jsx-vs-vue-s-templates-a-showdown-on-the-front-end-b00a70470409
date: 2017-02-18T16:43:18.611Z
tags: [
  "JavaScript",
  "React",
  "Vuejs",
  "Web Development",
  "Programming"
]
---
# React’s JSX vs Vue’s templates: a showdown on the front end







![](https://cdn-images-1.medium.com/max/2000/1*QH4RGlNwXUFnJSytytvb6A.jpeg)







React.js and Vue.js are two of the most popular JavaScript libraries on the planet. They're both powerful and relatively easy to pick up and use.

Both React and Vue:

*   use a virtual DOM
*   provide reactive view components
*   maintain a focus on one aspect of development. In this case, the view.

With so many similarities, you might assume that they’re both different versions of the same thing.

Well there’s one major difference between these two libraries: how they empower you the developer to create your view components, and in turn, your application.

React uses JSX, a term coined by the React team, to render content onto the DOM. So what is JSX? Basically, JSX is a JavaScript render function that helps you insert your HTML right into your JavaScript code.

Vue takes a different approach and uses HTML-like templates. Using Vue templates is like using JSX in that they’re both created using JavaScript. The main difference is that JSX functions are never used in the actual HTML file, while Vue templates are.

### **React JSX**

Let’s take a deeper look into how JSX works. Assume that you have a list of names that you want to display onto the DOM. A list of new hires that your company recently made.

If you were using plain HTML, you would first need to create an index.html file. Then you would add the following lines of code.

<pre name="32ac" id="32ac" class="graf graf--pre graf-after--p"><ul></pre>

<pre name="2fad" id="2fad" class="graf graf--pre graf-after--pre">  <li> John </li></pre>

<pre name="d4bc" id="d4bc" class="graf graf--pre graf-after--pre">  <li> Sarah </li></pre>

<pre name="3336" id="3336" class="graf graf--pre graf-after--pre">  <li> Kevin </li></pre>

<pre name="7a93" id="7a93" class="graf graf--pre graf-after--pre">  <li> Alice </li></pre>

<pre name="8419" id="8419" class="graf graf--pre graf-after--pre"><ul></pre>

Nothing spectacular here, just plain HTML code.

So how would you do the same thing using JSX? The first step would be to create another index.html file. But instead of adding the full HTML like you did before, you’ll only add a simple `div` element. This `div` will be the container element where all your React code will be rendered.

The `div` will need to have a unique ID so that React knows where to find it. Facebook tends to favor the root keyword, so let’s stick with that.

<pre name="212a" id="212a" class="graf graf--pre graf-after--p"></pre>

Now, onto the most important step. Creating the JavaScript file that will hold all the React code. Call this one app.js.

So now that you have all that out of the way, onto the main event. Displaying all the new hires to the Dom using JSX

You would first need to create an array with the names of the new hires.

<pre name="60a4" id="60a4" class="graf graf--pre graf-after--p">const names = [‘John’, ‘Sarah’, ‘Kevin’, ‘Alice’];</pre>

From there you would need to create a React element that will dynamically render the entire list of names. This without you having to manually display each one.

<pre name="f94b" id="f94b" class="graf graf--pre graf-after--p">const displayNewHires = (</pre>

<pre name="dea8" id="dea8" class="graf graf--pre graf-after--pre">  <ul></pre>

<pre name="52fa" id="52fa" class="graf graf--pre graf-after--pre">    {names.map(name => <li>{name}</li> )}</pre>

<pre name="ef2e" id="ef2e" class="graf graf--pre graf-after--pre">  </ul></pre>

<pre name="7912" id="7912" class="graf graf--pre graf-after--pre">);</pre>

The key thing to note here is that you are not having to create individual `<li>` elements. You only need describe how you want them to look once and React will handle the rest. That is quite a powerful thing. While you only have a few names, imagine having a list of hundreds of thousands! You can see how this would be a much better approach. Especially if the `<li>` elements are more complex than the ones used here.

The last bit of code that is needed to render the content to the screen is the main ReactDom render function.

<pre name="4c81" id="4c81" class="graf graf--pre graf-after--p">ReactDOM.render(</pre>

<pre name="47e7" id="47e7" class="graf graf--pre graf-after--pre">  displayNewHires,</pre>

<pre name="4e94" id="4e94" class="graf graf--pre graf-after--pre">  document.getElementById(‘root’)</pre>

<pre name="41e7" id="41e7" class="graf graf--pre graf-after--pre">);</pre>

Here you are telling React to render the content of `displayNewHires` inside the `div` with an element of root.

This is what your final React code should look like:

<pre name="5fdb" id="5fdb" class="graf graf--pre graf-after--p">const names = [‘John’, ‘Sarah’, ‘Kevin’, ‘Alice’];</pre>

<pre name="8d50" id="8d50" class="graf graf--pre graf-after--pre">const displayNewHires = (</pre>

<pre name="b75a" id="b75a" class="graf graf--pre graf-after--pre">  <ul></pre>

<pre name="5b24" id="5b24" class="graf graf--pre graf-after--pre">    {names.map(name => <li>{name}</li> )}</pre>

<pre name="2adb" id="2adb" class="graf graf--pre graf-after--pre">  </ul></pre>

<pre name="0b0a" id="0b0a" class="graf graf--pre graf-after--pre">);</pre>

<pre name="e5bf" id="e5bf" class="graf graf--pre graf-after--pre">ReactDOM.render(</pre>

<pre name="4e1b" id="4e1b" class="graf graf--pre graf-after--pre">  displayNewHires,</pre>

<pre name="5351" id="5351" class="graf graf--pre graf-after--pre">  document.getElementById(‘root’)</pre>

<pre name="269c" id="269c" class="graf graf--pre graf-after--pre">);</pre>

One key thing to keep in mind here is that this is all React code. This means that it will all compile down to plain old JavaScript. Here’s what it would ultimately look like:

<pre name="6249" id="6249" class="graf graf--pre graf--startsWithSingleQuote graf-after--p">‘use strict’;</pre>

<pre name="72ea" id="72ea" class="graf graf--pre graf-after--pre">var names = [‘John’, ‘Sarah’, ‘Kevin’, ‘Alice’];</pre>

<pre name="61e6" id="61e6" class="graf graf--pre graf-after--pre">var displayNewHires = React.createElement(</pre>

<pre name="0497" id="0497" class="graf graf--pre graf-after--pre">  ‘ul’,</pre>

<pre name="829a" id="829a" class="graf graf--pre graf-after--pre">  null,</pre>

<pre name="88f0" id="88f0" class="graf graf--pre graf-after--pre">  names.map(function (name) {</pre>

<pre name="fc6b" id="fc6b" class="graf graf--pre graf-after--pre">    return React.createElement(</pre>

<pre name="c2f3" id="c2f3" class="graf graf--pre graf-after--pre">      ‘li’,</pre>

<pre name="2002" id="2002" class="graf graf--pre graf-after--pre">      null,</pre>

<pre name="46ff" id="46ff" class="graf graf--pre graf-after--pre">      name</pre>

<pre name="be36" id="be36" class="graf graf--pre graf-after--pre">    );</pre>

<pre name="2da9" id="2da9" class="graf graf--pre graf-after--pre">  })</pre>

<pre name="12c8" id="12c8" class="graf graf--pre graf-after--pre">);</pre>

<pre name="7201" id="7201" class="graf graf--pre graf-after--pre">ReactDOM.render(displayNewHires, document.getElementById(‘root’));</pre>

That’s all there is to it. You now have a simple React application that will display a list of names. Nothing to write home about, but it should give you a glimpse of what React is capable of.

### **Vue.js Templates**

In keeping with the last example, you will once again create a simple application that will display a list of names onto the browser.

The first thing that you need to do is create another empty index.html file. Inside that file, you will then create another empty `div` with an id of root. Keep in mind though, that root is only a personal preference. You can call the id whatever you like. You only need to make sure that it matches up later on when you sync the html to your JavaScript code.

This div will function like it does in React. It will tell the JavaScript library, in this case Vue, where to look in the DOM when it wants to start making changes.

Once that’s done, you’re going to create a JavaScript file that will house all the Vue code. Call it app.js, to stay consistent.

So now that you have your files ready to go, let’s get into how Vue displays element onto the browser.

Vue uses a template-like approach when it comes to manipulating the DOM. This means that your HTML file will not only have an empty `div`, like in React. You’re actually going to write a good part of your code in your HTML file.

To give you a better idea, think back on what it takes to create a list of name using plain HTML. A `<ul>`element with some `<li>` elements inside. In Vue, you are going to do almost the exact same thing, with only a few changes added in.

Create a `<ul>` element.

<pre name="2890" id="2890" class="graf graf--pre graf-after--p"><ul></pre>

<pre name="f9f2" id="f9f2" class="graf graf--pre graf-after--pre"></ul></pre>

Now add one empty `<li>` element inside the `<ul>` element.

<pre name="2161" id="2161" class="graf graf--pre graf-after--p"><ul></pre>

<pre name="2804" id="2804" class="graf graf--pre graf-after--pre">  <li></pre>

<pre name="ae92" id="ae92" class="graf graf--pre graf-after--pre">  </li></pre>

<pre name="b207" id="b207" class="graf graf--pre graf-after--pre"></ul></pre>

Nothing new yet. Change that by adding a directive, a custom Vue attribute, to your `<li>`element.

<pre name="1e25" id="1e25" class="graf graf--pre graf-after--p"><ul></pre>

<pre name="289e" id="289e" class="graf graf--pre graf-after--pre">  <li v-for=’name in listOfNames’></pre>

<pre name="9c1b" id="9c1b" class="graf graf--pre graf-after--pre">  </li></pre>

<pre name="36df" id="36df" class="graf graf--pre graf-after--pre"></ul></pre>

A directive is Vue’s way of adding JavaScript functionality straight into the HTML. They all start with v- and are followed by descriptive names that give you an idea of what they are doing. In this case, it’s a for loop. For every name in your list of names, `listOfNames`, you want to copy this `<li>`element and replace it with a new `<li>` element with a name from your list.

Now, the code only needs one final touch. Currently, it will display an `<li>` element for every name in your list, but you have not actually told it to display the actual name onto the browser. To fix that, you are going to insert some mustache like syntax inside your `<li>`element. Something you might have seen in some other JavaScript libraries.

<pre name="679f" id="679f" class="graf graf--pre graf-after--p"><ul></pre>

<pre name="45f0" id="45f0" class="graf graf--pre graf-after--pre">  <li v-for=’name in listOfNames’></pre>

<pre name="5650" id="5650" class="graf graf--pre graf-after--pre">    {{name}}</pre>

<pre name="f011" id="f011" class="graf graf--pre graf-after--pre">  </li></pre>

<pre name="2cc4" id="2cc4" class="graf graf--pre graf-after--pre"></ul></pre>

Now the `<li>`element is complete. It will now display each item inside a list called listOfNames. Keep in mind that the word **name** is arbitrary. You could have called it **item** and it would have served the same purpose. All the keyword does is serve as a placeholder that will be used to iterate over the list.

The last thing that you need to do is create the data set and actually initialize Vue in your application.

To do so, you will need to create a new Vue instance. Instantiate it by assigning it to a variable called app.

<pre name="7faa" id="7faa" class="graf graf--pre graf-after--p">let app = new Vue({</pre>

<pre name="15c0" id="15c0" class="graf graf--pre graf-after--pre">});</pre>

Now, the object is going to take in a few parameters. The first one being the most important, the `el` (element) parameter that tells Vue where to start adding things to the DOM. Just like you did with your React example.

<pre name="77a9" id="77a9" class="graf graf--pre graf-after--p">let app = new Vue({</pre>

<pre name="31b9" id="31b9" class="graf graf--pre graf-after--pre">  el:’#root’,</pre>

<pre name="db11" id="db11" class="graf graf--pre graf-after--pre">});</pre>

The final step is to add the data to the Vue application. In Vue, all the data passed into the application will be done so as a parameter to the Vue instance. Also, each Vue instance can only have one parameter of each kind. While there are quite a few, you only need to focus on two for this example, `el` and `data`.

<pre name="42b5" id="42b5" class="graf graf--pre graf-after--p">let app = new Vue({</pre>

<pre name="7b88" id="7b88" class="graf graf--pre graf-after--pre">  el:’#root’,</pre>

<pre name="5020" id="5020" class="graf graf--pre graf-after--pre">  data: {</pre>

<pre name="91c7" id="91c7" class="graf graf--pre graf-after--pre">    listOfNames: [‘Kevin’, ‘John’, ‘Sarah’, ‘Alice’]</pre>

<pre name="96ba" id="96ba" class="graf graf--pre graf-after--pre">  }</pre>

<pre name="4f66" id="4f66" class="graf graf--pre graf-after--pre">});</pre>

The data object will accept an array called `listOfNames`. Now whenever you want to use that dataset in your application, you only need to call it using a directive. Simple, right?

Here’s the final application:

#### **HTML**

<pre name="d48a" id="d48a" class="graf graf--pre graf-after--h4"></pre>

<pre name="91ee" id="91ee" class="graf graf--pre graf-after--pre">  <ul></pre>

<pre name="a683" id="a683" class="graf graf--pre graf-after--pre">    <li v-for=’name in listOfNames’></pre>

<pre name="e99c" id="e99c" class="graf graf--pre graf-after--pre">      {{name}}</pre>

<pre name="037b" id="037b" class="graf graf--pre graf-after--pre">    </li></pre>

<pre name="7ef1" id="7ef1" class="graf graf--pre graf-after--pre">  </ul></pre>

<pre name="0357" id="0357" class="graf graf--pre graf-after--pre"></pre>

#### **JavaScript**

<pre name="4895" id="4895" class="graf graf--pre graf-after--h4">new Vue({</pre>

<pre name="848d" id="848d" class="graf graf--pre graf-after--pre">  el:”#root”,</pre>

<pre name="251f" id="251f" class="graf graf--pre graf-after--pre">  data: {</pre>

<pre name="893b" id="893b" class="graf graf--pre graf-after--pre">    listOfNames: [‘Kevin’, ‘John’, ‘Sarah’, ‘Alice’]</pre>

<pre name="2c23" id="2c23" class="graf graf--pre graf-after--pre">  }</pre>

<pre name="2cef" id="2cef" class="graf graf--pre graf-after--pre">});</pre>

### **Conclusion**

You know now how to create two simple applications using both React and Vue. They both offer a robust amount of features, though Vue tends to be the easier to use. Also, keep in mind that Vue allows the use of JSX, though it is not the preferred method of implementation.

Either way, these are two powerful libraries and you can’t go wrong using either one.











* * *







If you found this article helpful, give me some claps 👏.

And you can [follow me on Twitter here](https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fjuanmvega.com%2F&ref_src=twsrc%5Etfw&region=follow_link&screen_name=juanvega878&tw_p=followbutton)!








