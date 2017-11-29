---
author: Kurt
authorTwitter: none
authorFacebook: none
title: "How to write a jQuery like library in 71 lines of code — Learn about the DOM"
subTitle: "JavaScript frameworks are all the rage. Chances are that any JavaScript related news feed you open will be littered with references to to..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*FLAKTYk8B7EpCYlMqtAFkw.jpeg
url: https://medium.freecodecamp.org/how-to-write-a-jquery-like-library-in-71-lines-of-code-learn-about-the-dom-e9fb99dbc8d2
id: how-to-write-a-jquery-like-library-in-71-lines-of-code-learn-about-the-dom-e9fb99dbc8d2
date: 2016-02-11T02:07:57.966Z
tags: [
  "JavaScript",
  "Web Development",
  "Programming",
  "Design",
  "Learning To Code"
]
---
# How to write a jQuery like library in 71 lines of code — Learn about the DOM







![](https://cdn-images-1.medium.com/max/2000/1*FLAKTYk8B7EpCYlMqtAFkw.jpeg)







JavaScript frameworks are all the rage. Chances are that any JavaScript related news feed you open will be littered with references to tools like ReactJS, AngularJS, Meteor, RiotJS, BackboneJS, jQuery, and beyond.

Anyone learning to code (and even experienced developers) will feel an enormous pressure to learn these new tools. Hype creates demand. If you’re not up to date with what’s in demand, it can feel like your services are not in demand.

I’ve noticed a trend where people are diving headfirst into learning these tools without actually knowing **_what they do,_** let alone **_how they do it._** This ultimately makes debugging and conceptualizing the said tool exceptionally hard. There are thousands of cases of misuse where entire projects are being created simply for two way data binding, or for an animation effect, or even just to display an image slider.

#### Developers are neglecting learning the DOM itself

The DOM, or [Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model), is the heart and soul of you web browser . You’re looking at it right now. To clarify, the DOM is not a feature of JavaScript — its not even written in JavaScript — it is a programming interface, a API between language and browser. Language controls calculations etc, browser controls display and events.

I am going to demonstrate below how to create a simple jQuery-like DOM manipulation library. This will be able to target elements using the famous $ selector, create new elements, add html, and control event binding.

### Getting Started

We need to create our base object. Let’s call it _domElement_. This object will act as a wrapper for elements being targeted.

<pre name="9996" id="9996" class="graf graf--pre graf-after--p">var domElement = function(selector) {  
 this.selector = selector || null; //The selector being targeted  
 this.element = null; //The actual DOM element  
};</pre>

#### Now we can start adding functionality.

The jQuery methods we will replicate are the selector/creator**_$() .on(), .off(), .val(), .append, .prepend()_** _and _**_.html()_**

Lets dive into event binding first. This is by far the most complicated method we will create as well as the most useful. This is the glue in a two-way data binding model. (The model updates its subscribers when an event such as update is triggered, and the subscribers do likewise.)

We will be using a [Publish/Subscribe design pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript).

When** _.on(event, callback)_** is called we **_subscribe_** to the event and similarly when **_.off(event)_** is called we **_unsubscribe_**from the event.

The event handler will be its own object.

Let’s start by creating a base object and extending the prototype of **_domElement_** with it.

<pre name="a388" id="a388" class="graf graf--pre graf-after--p">domElement.prototype.eventHandler = {  
 events: [] //Array of events & callbacks the element is subscribed to.  
}</pre>

Great, now let’s create our subscriber method. We’ll call it **_bindEvent_** since it is binding an event listener to our DOM element.

<pre name="92e7" id="92e7" class="graf graf--pre graf-after--p">domElement.prototype.eventHandler = {  
 events: [], //Array of events the element is subscribed to.</pre>

<pre name="dee4" id="dee4" class="graf graf--pre graf-after--pre">bindEvent: function(event, callback, targetElement) {  
    //remove any duplicate event   
    this.unbindEvent(event,targetElement);  

    //bind event listener to DOM element  
    targetElement.addEventListener(event, callback, false);</pre>

<pre name="babc" id="babc" class="graf graf--pre graf-after--pre">    this.events.push({  
      type: event,  
      event: callback,  
      target: targetElement  
    }); //push the new event into our events array.  
  }</pre>

<pre name="bd30" id="bd30" class="graf graf--pre graf-after--pre">}</pre>

#### That’s it! Lets break the function down quickly

1.  We remove any existing events on the element that have the the type that is being bound. This is purely a matter of personal preference. I prefer to keep singular event handlers, since they’re easier to manage and debug. Removing the line will allow multiple handlers of the same type. We will create the **_unbindEvent_** function a little later.
2.  We bind the event to the DOM Element, making it live.
3.  We push the event and all its info into the events array so the element can keep track of our listeners.

Now, before we can remove an event, we will need a method to find and return it from the events array, if it exists. Lets create a quick method to find and return an event by its type, using the built in [**_array filter_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method.

<pre name="27c4" id="27c4" class="graf graf--pre graf-after--p">domElement.prototype.eventHandler = {  
 events: [], //Array of events the element is subscribed to.</pre>

<pre name="0b3f" id="0b3f" class="graf graf--pre graf-after--pre">bindEvent: function(event, callback, targetElement) {  
    //remove any duplicate event   
    this.unbindEvent(event,targetElement);  

    //bind event listener to DOM element  
    targetElement.addEventListener(event, callback, false);</pre>

<pre name="f74f" id="f74f" class="graf graf--pre graf-after--pre">    this.events.push({  
      type: event,  
      event: callback,  
      target: targetElement  
    }); //push the new event into our events array.  
  },</pre>

<pre name="8ca8" id="8ca8" class="graf graf--pre graf-after--pre">  findEvent: function(event) {  
    return this.events.filter(function(evt) {  
      return (evt.type === event); //if event type is a match return  
    }, event)[0];  
  }  
}</pre>

#### Now we can add our **_unbindEvent_** method.

<pre name="1100" id="1100" class="graf graf--pre graf-after--h4">domElement.prototype.eventHandler = {  
 events: [], //Array of events the element is subscribed to.</pre>

<pre name="3995" id="3995" class="graf graf--pre graf-after--pre">bindEvent: function(event, callback, targetElement) {  
    //remove any duplicate event   
    this.unbindEvent(event,targetElement);  

    //bind event listener to DOM element  
    targetElement.addEventListener(event, callback, false);</pre>

<pre name="d8e3" id="d8e3" class="graf graf--pre graf-after--pre">this.events.push({  
      type: event,  
      event: callback,  
      target: targetElement  
    }); //push the new event into our events array.  
  },</pre>

<pre name="429d" id="429d" class="graf graf--pre graf-after--pre">findEvent: function(event) {  
    return this.events.filter(function(evt) {  
      return (evt.type === event); //if event type is a match return  
    }, event)[0];  
  },</pre>

<pre name="cb5b" id="cb5b" class="graf graf--pre graf-after--pre">unbindEvent: function(event, targetElement) {  
    //search events  
    var foundEvent = this.findEvent(event);</pre>

<pre name="cf1f" id="cf1f" class="graf graf--pre graf-after--pre">    //remove event listener if found  
    if (foundEvent !== undefined) {  
      targetElement.removeEventListener(event, foundEvent.event, false);  
    }</pre>

<pre name="cfc4" id="cfc4" class="graf graf--pre graf-after--pre">    //update the events array  
    this.events = this.events.filter(function(evt) {  
      return (evt.type !== event);  
    }, event);  
  }  
};</pre>

#### And that’s our event handler! Try it out below…





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/cd4aa20f2ec87075065d8226df885026?postId=e9fb99dbc8d2" data-media-id="cd4aa20f2ec87075065d8226df885026" allowfullscreen="" frameborder="0"></iframe>





Now that’s quite a useful little utility, but your probably wondering what this has to do with jQuery, and why the methods for the event handler aren't named “on” and “off.”

This is what we will do next. Since we require the event handler to be an object, and we don’t want to call **_$(‘element’).eventHandler.on(..)_** our methods will simply point to the correct functions.

Here’s the code for the **_on_** and **_off_** methods:

<pre name="41ac" id="41ac" class="graf graf--pre graf-after--p">domElement.prototype.on = function(event, callback) {  
   this.eventHandler.bindEvent(event, callback, this.element);  
}  
domElement.prototype.off = function(event) {  
   this.eventHandler.unbindEvent(event, this.element);  
}</pre>

See how that works? Now lets add in our other utility functions…

<pre name="9627" id="9627" class="graf graf--pre graf-after--p">domElement.prototype.val = function(newVal) {  
 return (newVal !== undefined ? this.element.value = newVal : this.element.value);  
};  
domElement.prototype.append = function(html) {  
 this.element.innerHTML = this.element.innerHTML + html;  
};  
domElement.prototype.prepend = function(html) {  
 this.element.innerHTML = html + this.element.innerHTML;  
};  
domElement.prototype.html = function(html) {  
 if(html === undefined){  
 return this.element.innerHTML;  
 }  
 this.element.innerHTML = html;  
};</pre>

These are all pretty straight forward. The only one to pay attention to is**_ .html()._** This method can be invoked in two ways if it is called with no argument it will return the **_innerHTML_** for the element but if it is called with an argument it sets the **_HTML_** for the element. This is commonly refereed to as a **_getter / setter_** function.

### Initialization

#### On initialization we need to do one of two things…

1.  If the selector starts with an open bracket ‘<’ we will _create_ a new element.
2.  Otherwise we will use the **_document.querySelector_** to select an _existing_ element.

For the purpose of simplicity, I am only doing the bare minimum in regards to validating the HTML in the case of creating an element and when selecting an element I am using **_document.querySelector_** meaning that it will only return a single element (the first match) regardless of the amount of matches.

This can be changed without too much effort to select all matching elements by using **_document.querySelectorAll_** and refactoring the methods to work with an element array.

<pre name="49f2" id="49f2" class="graf graf--pre graf-after--p">domElement.prototype.init = function() {  
 switch(this.selector[0]){  
 case ‘<’ :  
 //create element  
 var matches = this.selector.match(/<([\w-]*)>/);  
 if(matches === null || matches === undefined){  
 throw ‘Invalid Selector / Node’;  
 return false;  
 }  
 var nodeName = matches[0].replace(‘<’,’’).replace(‘>’,’’);  
 this.element = document.createElement(nodeName);  
 break;  
 default :  
 this.element = document.querySelector(this.selector);  
 }  
};</pre>

#### Lets walk through the above code.

1.  We use a **_switch_** statement, and pass the first character of our selector as the argument.
2.  If it begins with a bracket, we do a quick **_Regex_** match to find the text between the the open and close brackets. If this fails we throw an error that the selector is invalid.
3.  If a match is made, we strip out the brackets and pass the text to **_document.createElement_** to create a new element.
4.  Alternatively, we look for a match using **_document.querySelector_** this returns null if there is no match found.
5.  Lastly, we set the element property on our **_domElement_** to the matched / created element.

### Using $ to reference **_domElement_**

#### Lastly we will assign the **_$_** symbol to initialize a new **_domElement_**.

<pre name="2762" id="2762" class="graf graf--pre graf-after--h4">$ = function(selector){  
 var el = new domElement(selector); // new domElement  
 el.init(); // initialize the domElement  
 return el; //return the domELement  
}</pre>

The **_$_** symbol is just a variable! That’s our completed jQuery-like library, and all in 71 lines of readable, well spaced code.

#### Here’s a pen running the complete library…use your console.





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/77161258604ced84c7ec3dc275004db0?postId=e9fb99dbc8d2" data-media-id="77161258604ced84c7ec3dc275004db0" allowfullscreen="" frameborder="0"></iframe>





### What to do next?

1.  Why not try to replicate your favorite utility functions?
2.  Dive into the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
3.  Use event listeners to bind two-way data.

### Important Notes

A special thanks to [Quincy Larson](https://medium.com/@quincylarson) for humanizing this post by fixing my butchery of the English language, visual tweaks and the great header image.

This code was written as a simple example to illustrate how JavaScript libraries interact with — and modify — the DOM. It should be treated as such.

I used simple, clear statements to help readers understand and follow the examples, and lightly skirted around — or completely ignored — points of failure and validation.

The returned element will only have the created methods bound to the wrapper. You can access the actual DOM element and its methods by calling **_$(‘selector’).element._** This is to avoid extending the DOM, which is a sensitive topic requiring its own post.

If you followed the steps correctly, you should have a completed file like below:

<pre name="2d68" id="2d68" class="graf graf--pre graf-after--p">var domElement = function(selector) {  
 this.selector = selector || null;  
 this.element = null;  
};  
domElement.prototype.init = function() {  
 switch (this.selector[0]) {  
 case ‘<’:  
 var matches = this.selector.match(/<([\w-]*)>/);  
 if (matches === null || matches === undefined) {  
 throw ‘Invalid Selector / Node’;  
 return false;  
 }  
 var nodeName = matches[0].replace(‘<’, ‘’).replace(‘>’, ‘’);  
 this.element = document.createElement(nodeName);  
 break;  
 default:  
 this.element = document.querySelector(this.selector);  
 }  
};  
domElement.prototype.on = function(event, callback) {  
 var evt = this.eventHandler.bindEvent(event, callback, this.element);  
}  
domElement.prototype.off = function(event) {  
 var evt = this.eventHandler.unbindEvent(event, this.element);  
}  
domElement.prototype.val = function(newVal) {  
 return (newVal !== undefined ? this.element.value = newVal : this.element.value);  
};  
domElement.prototype.append = function(html) {  
 this.element.innerHTML = this.element.innerHTML + html;  
};  
domElement.prototype.prepend = function(html) {  
 this.element.innerHTML = html + this.element.innerHTML;  
};  
domElement.prototype.html = function(html) {  
 if (html === undefined) {  
 return this.element.innerHTML;  
 }  
 this.element.innerHTML = html;  
};  
domElement.prototype.eventHandler = {  
 events: [],  
 bindEvent: function(event, callback, targetElement) {  
 this.unbindEvent(event, targetElement);  
 targetElement.addEventListener(event, callback, false);  
 this.events.push({  
 type: event,  
 event: callback,  
 target: targetElement  
 });  
 },  
 findEvent: function(event) {  
 return this.events.filter(function(evt) {  
 return (evt.type === event);  
 }, event)[0];  
 },  
 unbindEvent: function(event, targetElement) {  
 var foundEvent = this.findEvent(event);  
 if (foundEvent !== undefined) {  
 targetElement.removeEventListener(event, foundEvent.event, false);  
 }  
 this.events = this.events.filter(function(evt) {  
 return (evt.type !== event);  
 }, event);  
 }  
};  
$ = function(selector) {  
 var el = new domElement(selector);  
 el.init();  
 return el;  
}</pre>

If you enjoyed this post take a look at some other stuff I’ve written.

[**Preventative Programming — how fix to bugs before they happen**  
_…and why Sherlock Holmes would have been a brilliant programmer_medium.com](https://medium.com/p/9df82cf215c5 "https://medium.com/p/9df82cf215c5")[](https://medium.com/p/9df82cf215c5)

[**5 Things to Remember When You’re Learning to Program**  
_Learning to program is challenging. Aside from choosing a language or setting up a development environment that you…_medium.com](https://medium.com/p/1ed8e734b04f "https://medium.com/p/1ed8e734b04f")[](https://medium.com/p/1ed8e734b04f)

[**How I Became a Programmer. And When I Started Calling Myself One**  
_I’ve wanted to start blogging about programming for months now and like so many others before me I set off full of…_medium.com](https://medium.com/p/54a0533c4335 "https://medium.com/p/54a0533c4335")[](https://medium.com/p/54a0533c4335)

[**Making it rain code — Matrix Style**  
_An introduction to HTML 5 canvas animations_medium.com](https://medium.com/p/ec6e1386084e "https://medium.com/p/ec6e1386084e")[](https://medium.com/p/ec6e1386084e)

[**Turning code to cash — How to make money as a Web Developer and live to tell the tale.**  
_So you just learnt to code. You’re eager and anyone who can’t code thinks you’re a genius, word gets out and all of a…_medium.com](https://medium.com/p/f5eedc557b3e "https://medium.com/p/f5eedc557b3e")[](https://medium.com/p/f5eedc557b3e)








