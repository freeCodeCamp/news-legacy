---
author: Andrea Zanin
authorTwitter: none
authorFacebook: none
title: "How to set up a database if you’re a front-end developer"
subTitle: "Someone recently asked me what’s the easiest way for a front-end developer to save users’ data. So I am going to explain how to do just t..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*d_hx4BxGZ9qYODhnTn-Bjg.jpeg
url: https://medium.freecodecamp.org/how-to-set-up-a-database-if-youre-a-front-end-developer-3ed945221219
id: how-to-set-up-a-database-if-youre-a-front-end-developer-3ed945221219
date: 2017-11-07T15:12:15.275Z
tags: [
  "Programming",
  "Web Development",
  "Tech",
  "Startup",
  "Design"
]
---
# How to set up a database if you’re a front-end developer







![](https://cdn-images-1.medium.com/max/2000/1*d_hx4BxGZ9qYODhnTn-Bjg.jpeg)







Someone recently asked me what’s the easiest way for a front-end developer to save users’ data. So I am going to explain how to do just that.

### Setting up the database

The first thing we will need is an actual database. You can head to [mlab](https://mlab.com) for a free one. Once you’ve signed up, click **create new**in the MongoDB Deployments tab. The sandbox database is free of charge, so that’s the one we are going to use.

Once we’ve created the database, we need to create an account so that we can authenticate ourselves. Click on the database name, then **users,**and **add database user**. Write down the username and password you chose since we will need them later.

On top of the database’s page, you should see a MongoDB URI. This is the web address of our database. The URI of your database is like the URL for a web page. By convention, the MongoDB URI is as follows:

    mongodb://<dbuser>:<dbpassword>@<host>:<port>/<dbname>

Mine, for example, is:

<pre name="5973" id="5973" class="graf graf--pre graf-after--p">mongodb://admin:superSecretPassword@ds111885.mlab.com:11885/medium</pre>

### Setting up the server

We are going to use Node in our back end. To avoid having to set it up, you can clone my project on Glitch by clicking [here](https://glitch.com/edit/#!/remix/amusing-timbale)

Have a look at the starting `server.js` file I provided:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/120d9320e89c873b4b437272779ff401?postId=3ed945221219" data-media-id="120d9320e89c873b4b437272779ff401" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F22430306%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





We start by importing `express` — it’s the library we will use to handle requests to our server.

We need `use(require(cors))` to allow cross-domain requests. Those are requests from a website hosted on a domain to a server on another domain.  
`app.use(require('body-parser').json())` automatically parses the request to JSON for us.

Then we pass to the `get` method the route we want to handle and the callback that will handle it. This means that whenever someone opens the page `/` of our website, the request will be handled by that callback. The base domain is implicit, so if your domain is http://shiny-koala.glitch.com,the route `/about` will be http://shiny-koala.glitch.com/about_._

To be precise, when I say “open the page,” I mean it makes a request using the `GET` method to our server. Http methods are just types of requests you can make to a server. We will only use the following:

*   `GET` This method is used to fetch resources from a server. For example, when you open Facebook, it loads the HTML, CSS, and JavaScript needed.
*   `POST` This method is used to create resources on a server. For example, when you post something on Facebook, the information that you wrote in that post is sent to Facebook’s servers in a `POST` request.
*   `PUT` This method is used to update resources on a server. For example, when you edit a post, your edits are sent to Facebook’s server in a `PUT` request.

The `app.post` and `app.put` work exactly like `app.get` , but handle the POST and PUT method instead of GET quite reasonably.

### Routing

While you develop the server, you will need to do some tests. To run HTTP requests, you can use the handy site [REST test test](https://resttesttest.com/) or the [Insomnia](https://insomnia.rest/) application.

To check the URL of your Glitch app click the **show** button.

So far, we have been using only the route `/` . But we want to store different information about different users, so we need a different route for each user.  
For example: `/ZaninAndrea` and `/JohnGreen`

Now we have a problem: we can’t possibly code every single route since it’s not a very scalable approach. What we need are **route parameters.** We will only code one route: `/:user`

The colon is telling Express to catch any route starting with `/` and then only alphanumeric characters.

Some examples:

*   `/ZaninAndrea` will be caught
*   `/Johnny45` will be caught
*   `/alex/score` will **not** be caught

We can then retrieve the value of `user` in the variable `request.params.user`





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/8b97d9444e45cb9268a1ead513b92c99?postId=3ed945221219" data-media-id="8b97d9444e45cb9268a1ead513b92c99" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F22430306%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Our server now responds to every query echoing back the username.

### Adding data to the database

We know who the user is, and now we want to be able to store some info about him.

To query the database, we will use the `mongodb` library. You can install it one of two ways:

<pre name="a171" id="a171" class="graf graf--pre graf-after--p">npm install mongodb --save</pre>

or if you are using Glitch, go to the `package.json` file and click the button **Add package**.

Let’s load the library and store the MongoDB URI in a variable:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c1954f5271a615f37c5b371aa39c0e43?postId=3ed945221219" data-media-id="c1954f5271a615f37c5b371aa39c0e43" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F22430306%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





The URI is very sensitive information — it’s all that’s needed to access your database. It’s best to put it in a `.env` file that will not be visible to others.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/dca964c777c480c62d9259f163d62992?postId=3ed945221219" data-media-id="dca964c777c480c62d9259f163d62992" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F22430306%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Glitch will automatically load the variables from the `.env` file to the `process.env` variable.

The connection to the database is an asynchronous operation, so we need to wrap all the server setup in a callback like this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/5ae0dcf93db2b861b7a99a9b5dee0d9b?postId=3ed945221219" data-media-id="5ae0dcf93db2b861b7a99a9b5dee0d9b" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F22430306%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Databases are organized in collections, and collections contain documents (basically JSON files). So let’s connect to the `user` collection (it will be created the first time we access it).





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/57ab931c9b8f5397e1fec0f5a4de3666?postId=3ed945221219" data-media-id="57ab931c9b8f5397e1fec0f5a4de3666" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F22430306%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





First, we are going to handle the `POST` route. That is the one we will use when we add data about a user for the first time. Then we will use the `PUT` route to update it.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/451c93ca71ffa687cc408ce874853205?postId=3ed945221219" data-media-id="451c93ca71ffa687cc408ce874853205" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F22430306%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





The `collection.insertOne` method adds a new document to the collection. In our case, every user will have its own document.

`{ ...request.body, user : request.params.user }` leverages the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator) to merge the data provided through the body of the request and the user provided through the URL.

The result is the document that will be stored in the collection.

The second argument is a callback, and simply notifies the user about the result of the operation.

### Getting data from the database

Now that we have some data on the server, we want to be able to read it. We use the `GET` method to do this.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/4fef8ec644420ba1a05bbf7eca5a46d3?postId=3ed945221219" data-media-id="4fef8ec644420ba1a05bbf7eca5a46d3" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F22430306%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





This time, the first argument is a filter telling the database to only send us the documents with the correct user property.

The docs are returned to the user in an array, because there could theoretically be more than one document with that user property. It’s up to us to ensure that this doesn’t happen.

### Updating data on the database

Last but not least is the `PUT` method that we use to update an already existing user.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/f39819a0415e2ca51cae2f282027893d?postId=3ed945221219" data-media-id="f39819a0415e2ca51cae2f282027893d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F22430306%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





The first argument is a filter, like the one we used in the `GET` method.

The second argument is an update document — you can read more about them [here](https://docs.mongodb.com/manual/reference/method/db.collection.update/#update-parameter). In our case, we are telling the database to merge the data passed by the user with the already existing data.

Be careful though, because nested parameters will be replaced and not merged.

### Farewell

This is far from being a complete guide on databases and back-end programming, but it’s enough to get you started and to power personal projects.

I will probably write about authentication in a future article. Until then, do not use this to store sensitive data.

You can tinker with the complete project [here](https://glitch.com/edit/#!/remix/bush-vegetable), you will need your own database tough, if you didn’t create one yet, go back to the section **Setting up the database**.

If you enjoyed this article, please give it some claps so more people see it. Thank you!








