---
author: Juan Vega
authorTwitter: https://twitter.com/juanvega878
authorFacebook: none
title: "Client-side vs. server-side rendering: why it’s not all black and white"
subTitle: "Since the dawn of time, the conventional method for getting your HTML up onto a screen was by using server-side rendering. It was the onl..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*ezyfYx8OjGnPbxDTlzV9Kg.jpeg
url: https://medium.freecodecamp.org/what-exactly-is-client-side-rendering-and-hows-it-different-from-server-side-rendering-bd5c786b340d
id: what-exactly-is-client-side-rendering-and-hows-it-different-from-server-side-rendering-bd5c786b340d
date: 2017-02-28T21:34:12.196Z
tags: [
  "JavaScript",
  "React",
  "Vuejs",
  "Web Development",
  "Programming"
]
---
# Client-side vs. server-side rendering: why it’s not all black and white







![](https://cdn-images-1.medium.com/max/2000/1*ezyfYx8OjGnPbxDTlzV9Kg.jpeg)







Since the dawn of time, the conventional method for getting your HTML up onto a screen was by using server-side rendering. It was the only way. You loaded up your .html pages on your server, then your server went and turned them into useful documents on your users’ browsers.

Server-side rendering worked great at the time too, since most webpages were mostly just for displaying static images and text, with little in the way of interactivity.

Fast-forward to today and that’s no longer the case. You could argue that websites these days are more like applications pretending to be websites. You can use them to send messages, update online information, shop, and so much more. The web is just a whole lot more advanced than it used to be.

So it makes sense that server-side rendering is slowly beginning to take a backseat to the ever-growing method of rendering webpages on the client side.

So which method is the better option? As with most things in development, it really depends on what you’re planning on doing with your website. You need to understand the pros and cons, then decide for yourself which route is best for you.

### **How server-side rendering works**

Server-side rendering is the most common method for displaying information onto the screen. It works by converting HTML files in the server into usable information for the browser.

Whenever you visit a website, your browser makes a request to the server that contains the contents of the website. The request usually only takes a few milliseconds, but that ultimately depends on a multitude of factors:

*   Your internet speed
*   the location of the server
*   how many users are trying to access the site
*   and how optimized the website is, to name a few

Once the request is done processing, your browser gets back the fully rendered HTML and displays it on the screen. If you then decide to visit a different page on the website, your browser will once again make another request for the new information. This will occur each and every time you visit a page that your browser does not have a cached version of.

It doesn’t matter if the new page only has a few items that are different than the current page, the browser will ask for the entire new page and will re-render everything from the ground up.

Take for example this HTML document that has been placed in an imaginary server with an HTTP address of `example.testsite.com`.

<pre name="e099" id="e099" class="graf graf--pre graf-after--p"><!DOCTYPE html>  
<html>  
  <head>  
    <meta charset="utf-8">  
    <title>Example Website</title>  
  </head>  
  <body>  
    <h1>My Website</h1>  
    <p>This is an example of my new website</p>  
    Link  
  </body>  
</html></pre>

If you were to type the address of the example website into the URL of your imaginary browser, your imaginary browser would make a request to the server being used by that URL and expect a response of some text to render onto the browser. In this case, what you would visually see would be the title, the paragraph content and the link.

Now, assume that you wanted to click on the link from the rendered page which contains the following code.

<pre name="450d" id="450d" class="graf graf--pre graf-after--p"><!DOCTYPE html>  
<html>  
  <head>  
    <meta charset="utf-8">  
    <title>Example Website</title>  
  </head>  
  <body>  
    <h1>My Website</h1>  
    <p>This is an example of my new website</p>  
    <p>This is some more content from the other.html</p>  
  </body>  
</html></pre>

The only difference between the previous page and this one is that this page does not have a link and instead has another paragraph. Logic would dictate that only the new content should be rendered and the rest should be left alone. Alas, that isn’t how server-side rendering works. What would actually happen would be that the entire new page would be rendered, and not just the new content.

While it might not seem like a big deal for these two examples, most websites are not this simple. Modern websites have hundreds of lines of code and are much more complex. Now imagine browsing a webpage and having to wait for each and every page to render when navigating the site. If you have ever visited a WordPress site, you have seen how slow they can be. This is one of the reasons why.

On the bright side, server-side rendering is great for SEO. Your content is present before you get it, so search engines are able to index it and crawl it just fine. Something that is not so with client-side rendering. At least not simply.

### **How client-side rendering works**

When developers talk about client-side rendering, they’re talking about rendering content in the browser using JavaScript. So instead of getting all of the content from the HTML document itself, you are getting a bare-bones HTML document with a JavaScript file that will render the rest of the site using the browser.

This is a relatively new approach to rendering websites, and it didn't really become popular until JavaScript libraries started incorporating it into their style of development. Some notable examples are Vue.js and React.js, which I’ve [written more about here](https://medium.freecodecamp.com/reacts-jsx-vs-vue-s-templates-a-showdown-on-the-front-end-b00a70470409#.ycvoyji7a).

Going back to the previous website, `example.testsite.com`, assume that you now have an index.html file with the following lines of code.

<pre name="5896" id="5896" class="graf graf--pre graf-after--p"><!DOCTYPE html>  
<html>  
<head>  
  <meta charset="utf-8">  
  <title>Example Website</title>  
</head>  
<body>  
    
    </app>  
    
  <script src="[https://vuejs.](https://linktovuejslibary.com)org"type="text/javascript"></script>  
  <script src="location/of/app.js"type="text/javascript"></script>  
</body>  
</html></pre>

You can see right away that there are some major changes to the way the index.hmtl works when rendering using the client.

For starters, instead of having the content inside the HTML file, you have a container div with an id of root. You also have two script elements right above the closing body tag. One that will load the Vue.js JavaScript library and one that will load a file called app.js.

This is radically different than using server-side rendering because the server is now only responsible for loading the bare minus of the website. The main boilerplate. Everything else is handled by a client-side JavaScript library, in this case, Vue.js, and custom JavaScript code.

If you were to make a request to the URL with only the code above, you would get a blank screen. There is nothing to load since the actual content needs to be rendered using JavaScript.

To fix that, you would place the following lines of code into the app.js file.

<pre name="4d01" id="4d01" class="graf graf--pre graf-after--p">var data = {  
        title:"My Website",  
        message:"This is an example of my new website"  
      }  
  Vue.component('app', {  
    template:  
    `  
    {{title}}</h1>  
    <p id="moreContent">{{message}}</p>  
    Link  
      
    `,  
    data: function() {  
      return data;  
    },  
    methods:{  
      newContent: function(){  
        var node = document.createElement('p');  
        var textNode = document.createTextNode('This is some more content from the other.html');  
        node.appendChild(textNode);  
        document.getElementById('moreContent').appendChild(node);  
      }  
    }  
  })  
  new Vue({  
    el: '#root',  
  });</pre>

Now if you visit the URL, you would see the same content as you did the server-side example. The key difference is that if you were to click on the link the page to load more content, the browser will not make another request to the server. You are rendering items with the browser, so it will instead use JavaScript to load the new content and Vue.js will make sure that only the new content is rendered. Everything else will be left alone.

This is much faster since you are only loading a very small section of the page to fetch the new content, instead of loading the entire page.

There are some trade offs with using client-side rendering, though. Since the content is not rendered until the page is loaded on the browser, SEO for the website will take a hit. There are ways to get around this, but it’s not as easy as it is with server-side rendering.

Another thing to keep in mind is that your website/application won’t be able to load until ALL of the JavaScript is downloaded to the browser. Which makes sense, since it contains all the content that will be needed. If your users are using slow internet connection, it could make their initial loading time a bit long.

### The pros and cons of each approach

So there you have it. Those are the main differences between server-side and client-side rendering. Only you the developer can decide which option is best for your website or application.

Below is a quick breakdown of the pros and cons for each approach:

#### Server-side pros:

1.  Search engines can crawl the site for better SEO.
2.  The initial page load is faster.
3.  Great for static sites.

#### Server-side cons:

1.  Frequent server requests.
2.  An overall slow page rendering.
3.  Full page reloads.
4.  Non-rich site interactions.

#### Client-side pros:

1.  Rich site interactions
2.  Fast website rendering after the initial load.
3.  Great for web applications.
4.  Robust selection of JavaScript libraries.

#### Client-side cons:

1.  Low SEO if not implemented correctly.
2.  Initial load might require more time.
3.  In most cases, requires an external library.











* * *







If you want to learn more about Vue.js, check out [VueReactor.com](https://vuereactor.com/). You can also visit [juanmvega.com](https://juanmvega.com) to stay up to date with my latest stories.








