---
original: >-
  https://medium.freecodecamp.org/environment-settings-in-javascript-apps-c5f9744282b6?source=rss----336d898217ee---4
title: How to handle environment-specific settings in your JavaScript apps
pubDate: '2018-04-03T23:56:52.000Z'
author:
  avatar: 'https://cdn-images-1.medium.com/fit/c/120/120/1*xB4CuCviTqfarnzs7QQESw.jpeg'
  name: Cory House
  bio: >-
    Pluralsight Author, Principal at reactjsconsulting.com, Software Architect,
    Microsoft MVP, Speaker, Clean Coder, Aspiring Outlier.
  profileLink: 'https://medium.freecodecamp.org/@housecor?source=post_header_lockup'
  social:
    twitter: 'https://twitter.com/housecor'
  slug: cory-house
slug: how-to-handle-environment-specific-settings-in-your-javascript-apps
---
* * *

How to handle environment-specific settings in your JavaScript apps
===================================================================

![](https://cdn-images-1.medium.com/max/2000/1*sS6KcsjhHDEI1T0ka164Wg.jpeg)

Modern web apps have gotten…complicated.

Today many web apps are built using React, Angular, Vue, Ember, and others. These modern client-side rendered apps often call web APIs that are hosted on separate servers. This creates a problem: how do you configure your app to call the right API URL in each environment?

For example, during development, you may host the API locally at localhost:3000. In production, the API may be be hosted on some other server at api.mycompany.com. So you need your app to call localhost:3000 in development and api.mycompany.com in production. But how?

And the base URL is just one example of settings that may change per environment. You might choose to tweak other settings per environment for performance, security, or logging purposes. Some of the approaches below are applicable for these general environment-specific configurations as well. But for simplicity**,** this post focuses on techniques for configuring base URLs per environment.

I posted a poll on Twitter with a couple options:

Turns out, there are many ways to handle this. I received many insightful replies in the tweet thread. I’ve summarized eight options below. I’ve ordered these options (loosely) in the order that they should be considered. So, if you’re in a hurry, the options to consider first are at the top. 😀

### Option 1: Host the API with the app

Simple. Just host the app and API from the same webserver, so relative URLs work everywhere. This avoids both the base URL issue as well as cross-origin problems.

#### **When to consider it**:

*   Your API is consumed by a single app.
*   You don’t need to scale your API and app separately, so hosting on the same server is practical.

### Option 2: Environment-Specific Build

This approach honors the compile-time maxim:

> “Never do at runtime what you can handle at compile time.”

With this approach, you typically use a continuous integration (CI) server to generate and deploy custom builds for each environment. This is a powerful, secure, and versatile approach, but it requires each developer to create and maintain a .env file on their machine. [Here’s a great post with some tricks for making this pretty painless](https://medium.com/@rafaelvidaurre/managing-environment-variables-in-node-js-2cb45a55195f).

#### **When to consider it:**

*   You’re comfortable configuring a CI server to automate the build and deployment process to assure reliability.
*   You want to significantly alter the code deployed to production, such as removing code that is only used in non-production environments for performance or security reasons.
*   You’re comfortable with the risk that comes along with deploying different code to production than the code you ran during development and QA.

### Option 3: Runtime Configuration

With this approach, you configure your app for each environment by referencing the relevant configuration data upon startup (as opposed to upon build as discussed above). So **unlike the approach above, with this approach the same code is deployed to all environments**. The configuration data you pass in on startup customizes the app’s behavior.

There are a couple potential ways to pass environment configuration data in:

1.  **Command line config** — Pass the config in when starting the app.
2.  **Environment config file** — Populate a .env file in each environment and read from it upon startup. [Here’s an example from the create-react-app docs](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables), but the approach applies to any JavaScript app.

But how does your app get this info? There are a couple ways to do that, too:

1.  **Config file** — Write the config data to a separate JavaScript file on app startup. Your app can import and read this file on startup.
2.  **Global in index.html **— Write the config data to a global in index.html using your build tool. Again, [here’s an example from the create-react-app docs](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#injecting-data-from-the-server-into-the-page), but the approach applies to any JavaScript app.

Admittedly, these approaches slightly change your code on startup based on the runtime configuration provided. But they’re different than option #2 above, because the same code is deployed to all environments.

#### **When to consider it:**

*   You prefer to deploy the same code to all environments.

### Option 4: Reverse Proxy

With this approach, you call the same relative URL in all environments. How does that work? Well, it’s the front-end web server’s responsibility to forward calls to the relevant API for each environment. There are multiple benefits to this approach:

1.  Your URLs in all your API calls are clean, relative URLs. For example /user.
2.  You can configure your front-end web server as a caching layer for added performance.
3.  This approach supports switching back-end systems by simply re-configuring the proxy.

#### **When to consider it:**

*   You have the ability to configure the web server in all environments
*   You’re interested in implementing a caching layer between your UI and your API.
*   Your front-end web server can forward calls to your API server reliably and quickly. There is a performance cost to this approach, since your web server must pass requests on to another server.

#### **Side note**:

While we’re talking about proxies, another proxy approach worth mentioning is proxy middleware (this is a totally different approach than the reverse proxy discussed above).

With proxy middleware running on your local machine, requests are forwarded to a specified URL during development. For instance, if you’re a React developer, [create-react-app has proxy support built in](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#proxying-api-requests-in-development). It uses Webpack’s proxy middleware.

Here’s a [solid overview of the proxy approach](https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0) using React and Express.

**However**: Proxy middleware only solves the base URL problem in development. So use one of the other techniques in this post to handle other environments such as QA and production.

### Option 5: Docker

With Docker you can deploy the UI and API as separate containers, but create a “LAN” that allows the containers to communicate as though they’re on the same network. This way, the base URLs don’t change in each environment. The containers run identically in all environments. And you can pass relevant environment variables into the containers in each environment. Look into Kubernetes or Docker Swarm for this approach.

#### **When to consider it:**

*   You’re already invested in the Docker ecosystem.

### Option 6: Environment Sniffing

With this approach, you use code to “sniff” 👃🏻 the current environment, typically by looking at the URL. For example, if the URL is http://localhost, you know you’re in development.

The benefit of this approach is simplicity. Developers don’t need to configure anything on their machine and you don’t need to monkey with CI server or web server configurations either.

#### **When to consider it**:

*   You have a simple app that calls a small number of APIs.
*   You don’t have a CI-server.
*   Your company politics make it painful or impractical to implement the other options above.
*   You’re not concerned about people potentially finding the URLs to your non-production environment. (For security, your non-production environment shouldn’t be accessible outside your corporate LAN/VPN anyway).

### Option 7: Custom HTTP header

Configure the front-end web server to provide a custom HTTP header that contains the relevant client URL for the environment. The downside of this approach is your app has to make an HTTP call to this API first to determine what the relevant base URLs are for all environments.

#### **When to consider it:**

*   I don’t recommend this approach, since it requires your app to make a round trip HTTP call before it can actually begin fetching data. I prefer one of the other approaches above.

### Option 8: App Config Endpoint

With this approach, your app calls the same “app config” API at the same URL, for all environments. Your app calls this API first. The API call returns the relevant base URL in each environment (as well as potentially including other environment-specific settings). With this approach, you can potentially pass along with other relevant environment-specific config data.

#### **When to consider it**:

*   I don’t recommend this approach either. It impacts load time, because the initial HTTP call to retrieve config data must complete before the app can actually get started retrieving desired data. Consider one of the other options above instead.

### Summary

Create a build per environment via a CI server if you need true per-environment customization (#2 above). If you prefer deploying the same code to each environment, consider runtime configuration (#3 above) or a reverse proxy (#4 above).

Happy coding! ⌨️

Have other ways you handle this? Please chime in via the comments.

* * *

[Cory House](https://twitter.com/housecor) is the author of [multiple courses on JavaScript, React, clean code, .NET, and more on Pluralsight](http://pluralsight.com/author/cory-house). He is principal consultant at [reactjsconsulting.com](http://www.reactjsconsulting.com), a Software Architect, Microsoft MVP, and trains software developers internationally on front-end development practices. Cory tweets about JavaScript and front-end development on Twitter as [@housecor](http://www.twitter.com/housecor).
