---
author: Andrey Pokrovskiy
authorTwitter: none
authorFacebook: none
title: "How to build React apps on top of the WordPress REST API"
subTitle: "UPDATE 06/16/2017:
I updated the project to use ReactRouter 4 and Webpack 2. Some parts were refactored and simplified. Included links to..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*10rDJAvtCHTZz-NdIMpGLQ.jpeg
url: https://medium.freecodecamp.org/how-to-build-react-apps-on-top-of-the-wordpress-rest-api-bcc632808025
id: how-to-build-react-apps-on-top-of-the-wordpress-rest-api-bcc632808025
date: 2017-03-03T07:47:43.573Z
tags: [
  "JavaScript",
  "React",
  "WordPress",
  "Web Development",
  "Web Design"
]
---
# How to build React apps on top of the WordPress REST API







![](https://cdn-images-1.medium.com/max/2000/1*10rDJAvtCHTZz-NdIMpGLQ.jpeg)







**UPDATE 06/16/2017:  
_I updated the project to use ReactRouter 4 and Webpack 2\. Some parts were refactored and simplified. Included links to the frontend React demo and Wordpress backend demo._**

WordPress is a powerful content management tool. But when it comes to developing on top of it, can be quite frustrating. WordPress’s crazy mixture of HTML and PHP loops can often prove unintuitive to grasp and hard to maintain.

There’s a light at the end of the tunnel, though! Starting with version 4.7, WordPress comes with a built-in REST API, and plugins are no longer required. This makes it easier to use WordPress strictly as a backend data storage or CMS, while allowing for a totally custom front end solution of your choice.

You no longer need to have a local WordPress installation and deal with setting up vhosts. Your local development process can be limited to building the front end that is connected with a WordPress installation hosted on a remote server.

In this article I’m going to use [ReactJS](https://facebook.github.io/react/) to build the front end part of the application, [React Router](https://github.com/ReactTraining/react-router) for routing, and [Webpack](https://webpack.js.org/) for bundling it all together. I’ll also show you how to integrate Advanced Custom Fields, for those of us who have come to rely on it as a tool to create an intuitive solution for our clients.

The stack looks like this:  
**- ReactJs  
- React Router v4  
- Alt (for Flux implementation)  
- Webpack v2**

**GitHub repo**: [https://github.com/DreySkee/wp-api-react](https://github.com/DreySkee/wp-api-react)  
**React frontend demo url**: [http://wp-api-react.surge.sh/](http://wp-api-react.surge.sh/)  
**Wordpress backend demo url**: [http://andreypokrovskiy.com/projects/wp-api-react/wp-admin](http://andreypokrovskiy.com/projects/wp-api-react/wp-admin)  
**User**: demo  
**Pass**: wp-react-demo

### Project setup

Let’s name the project “wp-api-react”. To follow along, first thing you need to do is include this in your package.json and run `npm install`:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c0d497a2d69684ff7f598041f9469952?postId=bcc632808025" data-media-id="c0d497a2d69684ff7f598041f9469952" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F12819752%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Install webpack and webpack-dev-server globally as well if you have not done this already:

`npm i webpack webpack-dev-server -g`

Now in the project folder create `wepack.dev.js` for development configuration and `webpack.production.js` with configuration for building the project for production.

Paste this in `webpack.dev.config.js`:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/cc668be20c99d2af739efec5de192b2b?postId=bcc632808025" data-media-id="cc668be20c99d2af739efec5de192b2b" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F12819752%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





And this in `webpack.production.config.js`:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/df62ef296aef2cda77eef290294f2313?postId=bcc632808025" data-media-id="df62ef296aef2cda77eef290294f2313" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F12819752%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Create “src” folder in the project root and create `index.html` inside of it. The `index.html` file will include this chunk of code:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9a84f281ac59c20c3537512c19d360c9?postId=bcc632808025" data-media-id="9a84f281ac59c20c3537512c19d360c9" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F12819752%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Now let’s add a few more folders to the project. Inside of the “src” folder create “scripts” folder and inside of “scripts” create “components”, “flux” and `index.js` file. This structure will help to keep files organized.

By now the folder structure should look like this:

**wp-api-react/**  — **node_modules/**  — **src/**  — — **scripts/  
 **— — — **components/**  — — — **flux/**  — — — **index.js**  — — **index.html  
 **— **package.json  
 **— **webpack.config.js**

`index.js` is the entry point for Webpack and it will hold all routes for the project. Let’s include React, React Router and basic routing structure in the file:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/4716cd9528f8c3fce752968373c31224?postId=bcc632808025" data-media-id="4716cd9528f8c3fce752968373c31224" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F12819752%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





`index.js` is referencing Home component in imports. We need to create it in the “components” folder. `Home.js` will be the template component for the homepage. Include this in the file:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/3fcf4622dac183c728e6ec526d877d87?postId=bcc632808025" data-media-id="3fcf4622dac183c728e6ec526d877d87" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F12819752%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





If you run `npm start` in the terminal inside of the project folder and open [http://localhost:8080/](http://localhost:8080/) in the browser you should see a “Hello world!” message. If you start changing files Webpack will hot-reload the page for you.

### Flux with Alt

Now it’s time to implement [flux](https://facebook.github.io/flux/) using [Alt](http://alt.js.org/guide/). You will need to create three new folders inside of the “flux” folder: “alt”, “stores” and “actions”:

**wp-api/  
 **— **node_modules/  
 **— **src/**  — — **scripts/**  
 — — — **flux/  
 **— — — — **alt/**  — — — — **actions/**  — — — — **stores/**  — — — **components/  
 **— — — — **Home.js**  — — — **index.js**  — — **index.html**  — **package.json**  — **webpack.config.js**

Create `Alt.js` inside of the “alt” folder and paste this in the file:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b8274cfc1823406c6f5a7de8cf7019b0?postId=bcc632808025" data-media-id="b8274cfc1823406c6f5a7de8cf7019b0" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F12819752%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





All this file is doing is exporting the Alt instance that we will use in stores and actions.

Create `DataActions.js` in the “actions” folder. This file will have all the logic for getting the data from the WordPress REST API endpoints. For talking to the API we’ll use [axios](https://github.com/mzabriskie/axios). Include this in `DataActions.js`:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/4f42682bed2656316d1147288162dc5f?postId=bcc632808025" data-media-id="4f42682bed2656316d1147288162dc5f" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F12819752%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Don’t forget to replace the WordPress installation example URL with yours.

Create `DataStore.js` in “stores” folder. This file will be listening to DataActions.js’ `getSuccess()` method that returns data from the WordPress API. It will then store and manipulate the data. Paste this in `DataStore.js`:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/19f3bcfbb62413845a2f9b79453b8696?postId=bcc632808025" data-media-id="19f3bcfbb62413845a2f9b79453b8696" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F12819752%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





To get data from the WordPress API and make it available for the app you need to include `DataActions.js` in `index.js` and wrap the render function in `DataActions.getPages()`. The returned response will later be used to dynamically create routes:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/766ded690ade0bb5ee80a8de8a51e0b6?postId=bcc632808025" data-media-id="766ded690ade0bb5ee80a8de8a51e0b6" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F12819752%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Now every time the app gets initiated `DataActions.getPages()` calls the WordPress API endpoint and stores returned data in `DataStore.js`.

To access it simply include the `DataStore.js` in any component and call the appropriate method. For example let’s get all the data inside the `Home.js` file and `console.log` it:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ae516ac2f1fb26a91ca6c8a495c0b544?postId=bcc632808025" data-media-id="ae516ac2f1fb26a91ca6c8a495c0b544" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F12819752%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





After Webpack refreshes the page you should see the returned data object in the console:

<pre name="5340" id="5340" class="graf graf--pre graf-after--p">Object {pages: Array[1], posts: Array[1]}</pre>

### Dynamic Routes

Right now there are no routes set in the app other than the index route. If you have a few pages created in WordPress backend, chances are you want them to be available for the front end. To dynamically add routes to React Router we need to add another method in `index.js`, let’s call it `buildRoutes()`:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/09378ed9e01d51f679e438095114b400?postId=bcc632808025" data-media-id="09378ed9e01d51f679e438095114b400" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F12819752%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Include `{this.buildRoutes(response)}` inside of React Router right after `<Route path=”/” component={ Home } exact />`. The method simply loops through all pages returned by the WordPress API and returns new routes. Notice how for each route it adds the “Home” component. This means that the “Home” component will be used for every route.

Let’s say in WordPress you have a page with a slug “about**”**. If you go to the route for that page “/about” it will load but you will still see the same “Hello World” message. In the case that you only need one template for every page, you can leave it as is and get page specific data by calling `DataStore.getPageBySlug(slug)` and providing the current page slug.

In most cases, though, you would need to have multiple templates for different pages.

### Page Templates

In order to use page templates we need to let React know what template to use with any given page. We can use the page slug that gets returned by the API to map templates to different routes.

Let’s assume we have two pages with slugs “home” and “about”. We need to create an object that maps page slugs to React component paths. Let’s name the object templates and include it in `index.js`:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a69d28963a96e33c53a8d56d05fd8309?postId=bcc632808025" data-media-id="a69d28963a96e33c53a8d56d05fd8309" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F12819752%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





We also made updates to the `buildRoutes()` method to require the right component. Don’t forget to create the `About.js` component to map the “about” slug.

In order to get page-specific data, all you need to do is call the `DataStore.getPageBySlug(slug)` method and provide the current page slug:

<pre name="6dd8" id="6dd8" class="graf graf--pre graf-after--p">render() {  
    let page = DataStore.getPageBySlug(‘about’);</pre>

<pre name="d236" id="d236" class="graf graf--pre graf-after--pre">return (  
        {page.title.rendered}</h1>  
          
    );  
}</pre>

### Dynamic Navigation

Now we’re going to add a global navigation that will reflect all WordPress backend page links. First create a `Header.js` component in the “components” folder:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a6cd9efe44d7bee65199f6498c7f0c35?postId=bcc632808025" data-media-id="a6cd9efe44d7bee65199f6498c7f0c35" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F12819752%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





We get all pages from WordPress using `DataStore.getAllPages()`, then we’re sorting them by “menu_order” with lodash and looping through them to spit out the React Router’s `<Link />`. Note that the homepage route is being excluded from the allPages array and included as a separate link.

Include the `Header.js` component into `index.js` and you’ll see the dynamic nav included on every page:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/f9e77e3c2d067abd2e70cd1a610fc3b1?postId=bcc632808025" data-media-id="f9e77e3c2d067abd2e70cd1a610fc3b1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F12819752%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





### Advanced Custom Fields

Most WordPress developers are familiar with [Advanced Custom Fields](https://www.advancedcustomfields.com/) plugin. It makes the WordPress CMS fully customizable and user friendly. Fortunately, it’s very easy to access ACF data by utilizing WordPress API.

To get ACF data from API endpoints we need to install another plugin called [ACF to REST API](https://wordpress.org/plugins/acf-to-rest-api/). This will include an acf property in the object returned by the WordPress API. You can access the acf fields like so:

<pre name="4f65" id="4f65" class="graf graf--pre graf-after--p">render() {  
    let page = DataStore.getPageBySlug(‘about’);  
    let acf = page.acf; // Advanced Custom Fields data</pre>

<pre name="2702" id="2702" class="graf graf--pre graf-after--pre">return (  
        {acf.yourCustomFieldName}</h1>  
          
    );  
}</pre>

### Next Steps

All right, we’ve covered the most common use case for leveraging the WordPress CMS admin, along with a React front-end.

Some next steps might be to add styling for the project in Less or Sass. Or maybe extending the `DataAction.js` file by adding additional API endpoint calls to pull more data like comments, categories, and taxonomies.

I strongly recommend checking out the official [WordPress REST API handbook](https://developer.wordpress.org/rest-api/), where the API functionality is well documented. There you’ll find information about CRUD, pagination, authentication, querying, creating custom endpoints, and more. These resources will help extend what we’ve built here.

_by_ **_Andrey Pokrovskiy _**— _Senior Developer__at_[**_Gigareef_**](http://gigareef.com/)

_If you got this far, you might be the kind of developer who would be a great fit at Gigareef. We are currently looking for talented developers to work on projects involving ReactJS/MEAN Stack/Handlebars/Node projects._

_Send an email to_ [_jobs@gigareef.com_](mailto:jobs@gigareef.com) _and tell us a little bit about yourself._

[_Gigareef_](http://gigareef.com)_, where technology flourishes_








