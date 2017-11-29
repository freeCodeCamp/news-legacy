---
author: Bruno Krebs
authorTwitter: https://twitter.com/brunoskrebs
authorFacebook: none
title: "Let’s Build a Serverless REST API with Angular, Persistence, and Security"
subTitle: "In this post I’ll show you how you can quickly build a serverless full stack app with static file hosting, a secure REST API, and a robus..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*A3cp3Q48OLI3FxfafhbbvQ.png
url: https://medium.freecodecamp.org/serverless-rest-api-with-angular-persistence-and-security-ff274f04e3d0
id: serverless-rest-api-with-angular-persistence-and-security-ff274f04e3d0
date: 2017-03-02T15:49:06.961Z
tags: [
  "JavaScript",
  "Serverless",
  "Angularjs",
  "Programming",
  "Web Development"
]
---
# Let’s Build a Serverless REST API with Angular, Persistence, and Security







![](https://cdn-images-1.medium.com/max/2000/1*A3cp3Q48OLI3FxfafhbbvQ.png)







In this post I’ll show you how you can quickly build a **serverless full stack** app with static file hosting, a secure REST API, and a robust persistence layer.

Here’s how we’ll manage all the moving parts:

*   **Identity management and security** supported by [Auth0](https://auth0.com/?utm_source=freecodecamp&utm_medium=gp&utm_campaign=serverless_angular_app) and JSON Web Tokens (JWT)
*   **Serverless REST API** provided by an [Express](https://expressjs.com/) app with [Webtask](https://webtask.io/)
*   **Persistence layer** with a [MongoDB database](https://www.mongodb.com/) hosted by [mLab](https://mlab.com/)
*   **Static file hosting** via deployment to [GitHub Pages](https://pages.github.com/)

Since this app is quite simple in terms of features, it won’t be necessary to run MongoDB in your local environment. We’ll use mLab during development as well as in production. The only tools that you’ll need to install are [NodeJS and NPM](https://docs.npmjs.com/getting-started/installing-node).

Our application will have the following features:

*   Sign in and sign out
*   List that shows tasks from a user
*   Form that allows users to add new tasks
*   A button for each task, to enable users to remove these tasks

### Creating a New Angular App

We are going to create our new Angular app with [Angular CLI](https://github.com/angular/angular-cli). Actually, we will be using this tool during the whole process to create components/services and build our app for production.

Here is a list of a few commands that we will have to issue to install Angular CLI and to create our app skeleton:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/33e799079eca37311dfe05e5fd3a7893?postId=ff274f04e3d0" data-media-id="33e799079eca37311dfe05e5fd3a7893" allowfullscreen="" frameborder="0"></iframe>





The last command is responsible for packaging our application with the development profile, and for serving it locally with [Webpack Development Server](https://webpack.github.io/docs/webpack-dev-server.html). After executing all these commands, navigate to `http://localhost:4200/` to see it up and running.



![](https://cdn-images-1.medium.com/max/1600/0*evRKp0WZYFxlS5Rw.png)



### Securing Angular with Auth0

The first thing that we are going to take care of in our application is security. Security must be a first priority in any application that handles sensitive, third party data like the task list that we are about to develop.

To start, [sign up for a free Auth0 account](https://auth0.com/?utm_source=freecodecamp&utm_medium=gp&utm_campaign=serverless_angular_app) and take note of `Client ID` and `Domain`. Both values are going to be used to configure [Lock](https://auth0.com/docs/libraries/lock): an embeddable login system.

**Important**: Auth0 requires a list of _Allowed Callback URLs_. This list contains all the URLs to which Auth0 can redirect a user to after issuing a JWT. Therefore we must configure at least two URLs: `http://localhost:4200/` and the URL where our app will be exposed, something like: `https://brunokrebs.github.io/task-list/`. This URL will be defined when we release to GitHub Pages.



![](https://cdn-images-1.medium.com/max/1600/0*_7yJK5iZyVOCmOw2.png)



To use Lock, we must install two libraries in our application: `auth0-lock` and `angular2-jwt`. Since we are using TypeScript with Angular, we will also install the `@types/auth0-lock` library, which provides TypeScript definitions for Lock. Also, since we want to provide our users a good looking interface, we are going to install [Angular Material](https://github.com/angular/material2). These dependencies are installed with the following commands:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/e48dc1301711a34ba96d36a8c0234fe7?postId=ff274f04e3d0" data-media-id="e48dc1301711a34ba96d36a8c0234fe7" allowfullscreen="" frameborder="0"></iframe>





Let’s use Angular CLI to create a `NavBarComponent`. This component will have _Sign in_ and _Sign out_ buttons. We will also create a `AuthService` that will be responsible for `sign in`, `sign out` and to validate if the user is `authenticated` or not.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/18f4a2a3b71748e476c9ba79083d6e8e?postId=ff274f04e3d0" data-media-id="18f4a2a3b71748e476c9ba79083d6e8e" allowfullscreen="" frameborder="0"></iframe>





After executing these commands, Angular CLI will have created the following file structure:

    src  |-app    |-nav-bar      |-nav-bar.component.ts      |-nav-bar.component.html      |-nav-bar.component.css    |-auth.service.ts

> _Actually two extra files were created:_ `_src/app/auth.service.spec.ts_` _and_ `_src/app/nav-bar/nav-bar.component.spec.ts_`_. We would use these files to write tests for both the component and the service. However, for the sake of simplicity, we won't address testing in this post. You can check the following references to read about testing in Angular:_ [_Angular 2 Testing In Depth: Services_](https://auth0.com/blog/angular-2-testing-in-depth-services/)_;_ [_Angular Testing_](https://angular.io/docs/ts/latest/guide/testing.html)_;_ [_Testing Components in Angular 2 with Jasmine_](https://semaphoreci.com/community/tutorials/testing-components-in-angular-2-with-jasmine)

To integrate with Lock, let’s first implement `src/app/auth.service.ts` with the following code:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/03e6b7c0c63ef8179557869e145ac0d1?postId=ff274f04e3d0" data-media-id="03e6b7c0c63ef8179557869e145ac0d1" allowfullscreen="" frameborder="0"></iframe>





In the code above, there are three things that worth mentioning. First, we must replace `AUTH0_CLIENT_ID` and `AUTH0_DOMAIN` with the values that we noted previously. Second, the `ID_TOKEN` references the key were the JWT will be saved (on the user's browser `localStorage`). And third, the constructor of this service adds a callback listener to the `authenticated` event on Lock. This callback saves the token issued by Auth0 in `localStorage`. To sign out a user, it is just a matter of removing this token from `localStorage`.

Our `AuthService` class is good to go, but unlike `components`, Angular CLI does not add `services` to our `@NgModule` definition by default. To do this, open the `src/app/app.module.ts` file, add this `service` as a `provider` and add Angular Material in the `imports` array:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ab412454d9e00ac64d97f005915a0e6b?postId=ff274f04e3d0" data-media-id="ab412454d9e00ac64d97f005915a0e6b" allowfullscreen="" frameborder="0"></iframe>





We can now focus on implementing our `NavBarComponent`. First, we will inject `AuthService` and add three public methods that will be used by our HTML interface. Then we will implement the interface and add some CSS rules to improve it.

Let’s open the `src/app/nav-bar/nav-bar.component.ts` file and implement the following code:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/76bd91fef01c7e689a350b4fcb5fe598?postId=ff274f04e3d0" data-media-id="76bd91fef01c7e689a350b4fcb5fe598" allowfullscreen="" frameborder="0"></iframe>





This component simply gets `AuthService` injected and nothing else. Injecting a service like this allows the user interface to call its methods, as we will see. Now, let's open `src/app/nav-bar/nav-bar.component.html` and implement it as follows:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/dfdbcb487288869963a74a8390a82f05?postId=ff274f04e3d0" data-media-id="dfdbcb487288869963a74a8390a82f05" allowfullscreen="" frameborder="0"></iframe>





Our `NavBar` exposes our application's title along with two buttons. At any given time, only one button is truly visible to the user. The _Sign In_ button is going to be visible when the user is not yet `authenticated` and the _Sign Out_ will be visible otherwise. To make our interface look better, we have also added a `span.fill-space` element. This element will be responsible to push both buttons to the right border. To accomplish this, we need to add the CSS rule that follows to the `src/app/nav-bar/nav-bar.component.css` file:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/e800118f0297de5902fe8a2ac2d4feb6?postId=ff274f04e3d0" data-media-id="e800118f0297de5902fe8a2ac2d4feb6" allowfullscreen="" frameborder="0"></iframe>





Good, we now have both the `NavBarComponent` and the `AuthService` fully implemented and integrated. But we still need to add this component to our `src/app/app.component.html` file, otherwise it will never get rendered. To do this, just replace the content of this file with the following line of code:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/967479681f2fe33eef7b6fdd4d0150aa?postId=ff274f04e3d0" data-media-id="967479681f2fe33eef7b6fdd4d0150aa" allowfullscreen="" frameborder="0"></iframe>





If we run our application now, it wouldn’t look neat because most major browsers come with an `8px` margin on `body` elements and because we haven't configured any [Angular Material Theme](https://github.com/angular/material2/blob/master/guides/theming.md). We will fix both issues by updating our `src/styles.css` file to look like:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/8dcc0f967d5d710320c249dd9cd2a181?postId=ff274f04e3d0" data-media-id="8dcc0f967d5d710320c249dd9cd2a181" allowfullscreen="" frameborder="0"></iframe>





We are now good to go, so let’s start our development server, by issuing `ng serve`, and head to `http://localhost:4200` to look how things are. You can even _sign in_ and _sign out_, although there won't be much to see.



![](https://cdn-images-1.medium.com/max/1600/0*aLUpSGtTvWlx1ut-.png)



### Adding a Welcome Message to Visitors

To make our application a friendly place, let’s add a welcoming message. To do that, first we will add two methods and inject `AuthService` in the `src/app/app.component.ts` file, making it look like this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/fdd38e691e14f40bd855a86f8ed2542b?postId=ff274f04e3d0" data-media-id="fdd38e691e14f40bd855a86f8ed2542b" allowfullscreen="" frameborder="0"></iframe>





After that we are going to add the message, as a `md-card` component from [Angular Material](https://material.angular.io/components/component/card), to `src/app/app.component.html`:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/222eca580a53960b8410b174f670396c?postId=ff274f04e3d0" data-media-id="222eca580a53960b8410b174f670396c" allowfullscreen="" frameborder="0"></iframe>





And last, we are going to make a fix to the interface by adding a rule to `src/app/app.component.css`:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/189e203cdcf205b41cc56802db3abca1?postId=ff274f04e3d0" data-media-id="189e203cdcf205b41cc56802db3abca1" allowfullscreen="" frameborder="0"></iframe>





Heading to our app, `http://localhost:4200/`, we can see our new welcome message (if we are not authenticated).



![](https://cdn-images-1.medium.com/max/1600/0*6QrGe-la8oqzP1eQ.png)



### Implementing Serverless REST API

Now that we have our application integrated with Auth0, which allows our users to sign in and sign out, let’s create our serverless REST API. This API will handle `POST` requests (to persist new tasks), `GET` requests (to retrieve tasks from a user) and `DELETE` requests (to remove tasks).

We will first create a file called `tasks.js` in a new folder called `webtask`, and then we will add the following code to it:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/338cfb92181c4c9755a697866122d243?postId=ff274f04e3d0" data-media-id="338cfb92181c4c9755a697866122d243" allowfullscreen="" frameborder="0"></iframe>





The code is quite simple and easy to understand, but an overall explanation might come in handy. The main purpose of this file is to export an [Express app](https://expressjs.com/en/starter/hello-world.html) that handles three HTTP methods for a single route, the main `/` route. These three methods, as explained before, allow users to create, retrieve and delete tasks from collections on a MongoDB database.

Every user will have their own collection — not the best approach, since [MongoDB can handle a maximum of 24,000 collections](https://docs.mongodb.com/manual/reference/limits/#namespaces), but good enough to start. This collection is based on the `sub` claim, [which identifies user](https://tools.ietf.org/html/rfc7519#section-4.1.2), present in the JWT issued by Auth0.

The last function definition in the `tasks.js` file, `loadUserCollection`, is actually responsible for two things: security and MongoDB connection. When a user issues any request to our API, the function verifies if the `authorization`header sent was actually signed by Auth0\. If none is sent, a non-user-friendly error is generated. This is done through the `jwt.verify` function with the help if `AUTH0_SECRET` key. The second responsibility, connecting to MongoDB, is handled by the `mongojs` module and depends on three configuration variables: `MONGO_USER`, `MONGO_PASSWORD`, `MONGO_URL`.

All these configuration variables — three to connect to MongoDB and one to verify Auth0 tokens — are passed to Webtask when creating the serverless function. We will see how this is done soon.

This is the **whole REST API implementation**, with this code we are ready to handle users requests that will be sent by the components that we are about to create on our Angular app. But there are a few more steps that we need to perform.

### Creating a MongoDB Database

To make our lives easier and to avoid heaving to install and support MongoDB by ourselves, we are going to use [mLab](https://mlab.com/), a cloud-hosted MongoDB. The first thing that we have to do is to [head to their website](https://mlab.com/) and sign up for a free account. After verifying our email address, we have to [create a new deployment](https://mlab.com/create). Since we are just starting our app and we won’t get too much traffic, let’s choose the **_Single Node_** plan and the **_Sandbox_** type, which provides us 500 MB of DB storage for free. You will also need to type a database name, choose something like `task-list`.

The last thing that we will have to do is to create a user to connect to this database. If you choose `task-list` as the name of your database, [this is the link to create users](https://mlab.com/databases/task-list#users).



![](https://cdn-images-1.medium.com/max/1600/0*f2RlcfJs2OzL0Hr5.png)



### Configuring Webtask Account

We will also need to create a [Webtask account](https://webtask.io/), but this as easy as it can be. Webtask, being a product of Auth0, relies on Lock and enables us to create an account with one of the following identity providers (IdP): Facebook, GitHub, Google or Microsoft. It is just a matter of hitting a button to create an account.

After choosing an IdP, we are presented with a succinct, three-step process demonstrating how to create a _Hello World_ serverless function. We already have a Webtask to deploy, so let’s follow only the first two steps in order to configure the CLI tool in our computer:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/533c59007de8f0cdf5908c7077986cb7?postId=ff274f04e3d0" data-media-id="533c59007de8f0cdf5908c7077986cb7" allowfullscreen="" frameborder="0"></iframe>





You will be asked to enter the verification code that was sent to your email address. This is the final step in the Webtask account configuration.

### Deploying Our Serverless REST API

With mLab and Webtask accounts created and having Webtask CLI tool correctly configured, we can now deploy our serverless REST API to production. This is done with the following code:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a64ac6015a906c6bf512c665e0bb6fba?postId=ff274f04e3d0" data-media-id="a64ac6015a906c6bf512c665e0bb6fba" allowfullscreen="" frameborder="0"></iframe>





The first option passed to the `wt` tool specifies that we want to `create` a Webtask based on our `webtask/tasks.js` file. The second parameter identifies our code as being an Express app, which needs to be pre-compiled by Webtask with the help of `webtask-tools/express` tool. The following four parameters are the `secrets` that we use in our Webtask (`-s` prefix denotes them as `secrets`). The last parameter creates our Webtask in `production` mode, which makes it faster.

Be aware that the values above have to be replaced with values that come from our Auth0 account and from our mLab account. `AUTH0_SECRET` value can be found at the same place of `Client ID` and `Domain`. And the last three values, related to MongoDB, can be found at mLab's dashboard.

Having successfully issued the Webtask creation command, we can now focus on working on the main feature of our Angular application, the task list component.



![](https://cdn-images-1.medium.com/max/1600/0*9uq7DErARs8qBz7d.png)



### Building our Angular Interface

There are two components that we will need to create to allow users to interact with their task lists. We will create a `TaskListComponent`, to expose the task list, and a `TaskFormComponent`, that will allow the user to create new tasks. Besides these components, we will create a `TaskListService` that will handle all AJAX requests. We will use Angular CLI to create them to us:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9ce1853bbc6e593e5fe5f05feae45698?postId=ff274f04e3d0" data-media-id="9ce1853bbc6e593e5fe5f05feae45698" allowfullscreen="" frameborder="0"></iframe>





### Integrating Angular with Serverless REST API

Both `TaskListComponent` and `TaskFormComponent` will depend on `TaskListService` to communicate with our serverless REST API, so let's handle the service implementation first.

Open the recently created service file, `src/app/task-list/task-list.service.ts`, and insert the following code:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/25bea33dd0a21ca4878e04e19b36b16c?postId=ff274f04e3d0" data-media-id="25bea33dd0a21ca4878e04e19b36b16c" allowfullscreen="" frameborder="0"></iframe>





There are three important things to note in this code. First, the `TASKS_ENDPOINT`constant. This constant must reference the _URL_ returned by the `wt create`command above.

Second, this class is not using `Http` from `@angular/http`. It is using `AuthHttp`, which is provided by `angular2-jwt` and which integrates gracefully with `auth0-lock`. Instances of this class automatically send an `authorization`header with whatever content it finds on `id_token` key on the user browser `localStorage`. As you may have noted, this is the same place where we stored tokens when configuring `AuthService`.

Third, all methods in `TaskListService` return `Observables`, leaving the caller to decide what to do with the response sent by our serverless REST API.

To inject `TaskListService` in our components, we need to make a few changes in our main `@NgModule`, located in `src/app/app.module.ts`:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/543e8c62fe4d8b611d7cad4788ccb6e0?postId=ff274f04e3d0" data-media-id="543e8c62fe4d8b611d7cad4788ccb6e0" allowfullscreen="" frameborder="0"></iframe>





The first change that we made to our module was to add `TaskListService` as a provider, just like we did before with `AuthService`. The second change also added a provider, but in a more complex form.

The `AuthHttp` provider needed help from a factory - declared as `authHttpFactory` - to be created. This factory has `Http` and `RequestOptions`as dependencies, so we needed to define the provider as a literal object, passing this dependencies explicitly.

### Listing Tasks with Angular

Our `TaskListComponent` can now be implemented. We will now open the `src/app/task-list/task-list.component.ts` file and apply the code below:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/f39cfa952d8d45fefa33acb9d493d509?postId=ff274f04e3d0" data-media-id="f39cfa952d8d45fefa33acb9d493d509" allowfullscreen="" frameborder="0"></iframe>





This class gets `TaskListService` injected and add a few callback methods to the `Observables` responses. Both `taskAdded



<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/8c7dd5450bd9c27395e7b922bc4fb56a?postId=ff274f04e3d0" data-media-id="8c7dd5450bd9c27395e7b922bc4fb56a" allowfullscreen="" frameborder="0"></iframe>





Here we added a `md-list` component, [provided by Angular Material](https://material.angular.io/components/component/list), that iterates through the `tasks`, showing their creation date and their description. Also, each task got a `button` that enables users to delete them.

To make our interface better, let’s add two CSS rules to the `src/app/task-list/task-list.component.css` file:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/4ab34e088899933918634762ab63d30c?postId=ff274f04e3d0" data-media-id="4ab34e088899933918634762ab63d30c" allowfullscreen="" frameborder="0"></iframe>





This will make different tasks distinguishable with a gray background color, and push the delete button to the right, aligning it vertically to the task.

Now our interface is ready to list tasks, so we need to make it visible by adding it to the `src/app/app.component.html` file. Open it and the `TaskListComponent`as follows:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/4f21f8d0cf256775dd144dc9482aff65?postId=ff274f04e3d0" data-media-id="4f21f8d0cf256775dd144dc9482aff65" allowfullscreen="" frameborder="0"></iframe>





If we open our application in a browser, by accessing `http://localhost:4200`, we would see the following screen.



![](https://cdn-images-1.medium.com/max/1600/0*4y2oA65Iy07IW6ET.png)



Our app’s completion now depends on implementing the last component, `TaskFormComponent`, to allow users to add tasks to their lists.

### Adding Tasks with Angular

To enable a user to add tasks, we need to open the `src/app/task-list/task-form/task-form.component.ts` file and implement it as follows:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/21969da0f099f8a9a2eaa40a040b0cb0?postId=ff274f04e3d0" data-media-id="21969da0f099f8a9a2eaa40a040b0cb0" allowfullscreen="" frameborder="0"></iframe>





This component accepts a user’s task input and emits a `taskAdded` event with the data. This component's HTML, located in the `src/app/task-list/task-form/task-form.component.html` file, is also really simple:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/72ecf1bdaa93878b3fe2fac7b752cfb3?postId=ff274f04e3d0" data-media-id="72ecf1bdaa93878b3fe2fac7b752cfb3" allowfullscreen="" frameborder="0"></iframe>





When clicked, the _Add_ button triggers the `addTask` method in the component. This method then triggers the `taskAdded` event emitter. `TaskListComponent` is the component that will listen to these events. We already implemented a method, called `taskAdded`, that can handle such events. We just need to update this component's HTML to add `TaskFormComponent` and register the event handler.

To do that, let’s open `src/app/task-list/task-list.component.html` and add the `app-task-form` tag just before our list, as follows:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/1572e1f4fbb92399fc67b340680025d1?postId=ff274f04e3d0" data-media-id="1572e1f4fbb92399fc67b340680025d1" allowfullscreen="" frameborder="0"></iframe>





And here we go. Our app is now fully implemented and ready to go to production.



![](https://cdn-images-1.medium.com/max/1600/0*NnU0RUSzJkBgmtHX.png)



Or is it? If we play a little with the application we will see that under some conditions the user experience is not that good. The app takes a while to update the task list when a new task is added or an existing one gets deleted. So there is room for improvement.

### Adding an AJAX Loading Indicator

To solve this issue let’s use a small module called [Angular 2 Slim Loading Bar](https://github.com/akserg/ng2-slim-loading-bar). To install it run `npm install --save ng2-slim-loading-bar` and then open the `src/app/app.module.ts` file to import it:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/0ced5c9ab3995765707ed21f66261997?postId=ff274f04e3d0" data-media-id="0ced5c9ab3995765707ed21f66261997" allowfullscreen="" frameborder="0"></iframe>





We will also import its CSS rules by adding the following line to the top of our `src/styles.css` file:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/cfb4a3758c4cb019ff5148ad9b4bbb57?postId=ff274f04e3d0" data-media-id="cfb4a3758c4cb019ff5148ad9b4bbb57" allowfullscreen="" frameborder="0"></iframe>





After that we need to make our `AppComponent` use `SlimLoadingBarService`. To do that let's open `src/app/app.component.ts` and edit as follows:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/4ab7814af56f1cd177660e8285b1c677?postId=ff274f04e3d0" data-media-id="4ab7814af56f1cd177660e8285b1c677" allowfullscreen="" frameborder="0"></iframe>





`SlimLoadingBarService` contains two methods that we will use: `start`, which starts the loading bar; and `complete`, which ends the loading indicator. These methods will be registered as event listeners on `TaskListComponent`. We still didn't create event emitters in this component, but we can configure the listeners in advance. Let's open `src/app/app.component.html` and edit like this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/dcbcd11722eb8b261ab178579ee65b4e?postId=ff274f04e3d0" data-media-id="dcbcd11722eb8b261ab178579ee65b4e" allowfullscreen="" frameborder="0"></iframe>





The last thing we will have to do is edit the `src/app/task-list/task-list.component.ts` file to create and use both `startAjaxRequest` and `completeAjaxRequest` event emitters on `TaskListComponent`:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/5798681b918a7c6eae78f844137b3e61?postId=ff274f04e3d0" data-media-id="5798681b918a7c6eae78f844137b3e61" allowfullscreen="" frameborder="0"></iframe>





Here we have create both event emitters and have added them to the three methods that depend on AJAX request. Whenever one of these methods gets called we emit an event, through `this.startAjaxRequest.emit()`, to make the _Slim Loading Bar_ start running the loading bar indicator. After getting a response back from the AJAX requests sent by the `loadTasks` method, that updates the task list, we tell _Slim Loading Bar_ to complete its progress through `this.completeAjaxRequest.emit()`.

If we run our development server by issuing `ng serve` and heading to `http://localhost:4200/`, we will see our application with a better user experience:



![](https://cdn-images-1.medium.com/max/1600/0*-AfS8WmTmcgGrgPZ.png)



### Going Live with GitHub Pages

Our application is ready to be deployed to production. We have a persistence layer that saves all users’ tasks. We have a serverless REST API that accepts `GET`, `POST` and `DELETE` requests to manipulate tasks. We have security, provided by Auth0\. And we have a good looking Angular single page application interface. The only thing that is missing is a place to host our static (HTML, CSS and JavaScript) files.

That is exactly what [GitHub Pages provides](https://pages.github.com/). To use it is simple. We just need to create a repository and push our work to a branch called `gh-pages`. This branch should contain only our production bundles.

To create a GitHub repository go to [GitHub](https://github.com/), sign in (or sign up if you don’t have an account) and choose the _Create a New Repository_ option. Create your new repository naming it as _task-list_. Note that if you choose another name, you will have to adjust the `base-href` parament of the `ng build` command that we will run later.



![](https://cdn-images-1.medium.com/max/1600/0*920F4HsTnQBsRlvi.png)



Now we have to add this repository as a remote to our application. When we created our project with Angular CLI, it already came with [Git](https://git-scm.com/). We just have to add this remote, commit all our changes and push to its master:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ad7aa9f6eb990a54e76e25908e3a09cb?postId=ff274f04e3d0" data-media-id="ad7aa9f6eb990a54e76e25908e3a09cb" allowfullscreen="" frameborder="0"></iframe>





Having our code safe, we can now work on the _going live_ task. Two steps are needed here. The first one is to prepare our code for production and package it. Again Angular CLI comes in handy. To do that we just have to issue `ng build --prod --base-href=/task-list/`. Note that we have to set `base-href` to the exact same name of our GitHub repository, otherwise our application won't be able to load all the resources and it won't work.

The second step used to be handled by Angular CLI, but [this command has been removed in the latest release](https://github.com/angular/angular-cli/pull/4385), so we will need a third party tool to help us here. Fortunately, there is one that is very easy to use called `angular-cli-ghpages`. To install it issue `npm install -g angular-cli-ghpages`. After that we just have to execute `angular-cli-ghpages` (yep, without any parameters) and voilà. Our app is up and running on GitHub Pages.

**Important**: do not forget to update the _Allowed Callback URLs_ on your Auth0 account. The list of allowed URLs must have the URL where our app was exposed. This should be something like `[https://brunokrebs.github.io/task-list/](https://brunokrebs.github.io/task-list/.)`[.](https://brunokrebs.github.io/task-list/.)



![](https://cdn-images-1.medium.com/max/1600/0*0Z-c16AXocwouEsI.png)



### Conclusion

As we could see, when we choose the right tools, it gets easy to achieve great accomplishments. We started with nothing, just an idea to develop a task list application, and managed to create and release it to the internet with not that much effort.

We didn’t even have to worry about building, supporting and securing servers to host our web application or our database. If we had to manage these tasks by ourselves, we would take much more time and wouldn’t be as confident about our app’s security, fault tolerance and scalability.

And this is just the beginning. Freeing ourselves from all these issues enables us to focus 100% on our ideas and on what makes our applications unique.

> I love reading and writing about development, mainly JavaScript and Java. If you want to share something with me, or want to stay tuned, you can reach me on [Twitter](https://twitter.com/brunoskrebs/). Also, feel free to add any comments here or in any of my articles.








