---
author: Ricardo Sousa
authorTwitter: https://twitter.com/rikmms
authorFacebook: https://facebook.com/1553234211353367
title: "How to take advantage of JavaScript’s default parameters for Dependency Injection"
subTitle: "These days it’s quite common to use Dependency Injection, which allows a projects’ modules to be loosely coupled. But as projects grow in..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*FbjjCStVtHqlJdO4vpLLtQ.png
url: https://medium.freecodecamp.org/how-to-take-advantage-of-javascripts-default-parameters-for-dependency-injection-98fc423328e1
id: how-to-take-advantage-of-javascripts-default-parameters-for-dependency-injection-98fc423328e1
date: 2017-10-22T10:46:41.374Z
tags: [
  "JavaScript",
  "Programming",
  "Software Development",
  "Web Development",
  "Tech"
]
---
# How to take advantage of JavaScript’s default parameters for Dependency Injection







![](https://cdn-images-1.medium.com/max/2000/1*FbjjCStVtHqlJdO4vpLLtQ.png)







These days it’s quite common to use [Dependency Injection](https://en.wikipedia.org/wiki/Dependency_injection), which allows a projects’ modules to be loosely coupled. But as projects grow in complexity, we have an astronomical number of dependencies to control.

To work around this problem, we often turn to dependency injection containers. But is it necessary in every situation?

In this post, I’ll cover how [JavaScript’s default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) can help us with this question. To do this, we will implement a simple application in Node.JS. It will have the functionalities of creating and reading users’ information using three different approaches:

1.  Without Dependency Injection
2.  With Dependency Injection
3.  With Dependency Injection and default parameters

### Project structure

We will structure our example project [by feature](https://blog.risingstack.com/node-hero-node-js-project-structure-tutorial/) (by the way — don’t structure your files around roles). So, the structure will be something like this:

    ├── users/│   ├── users-repository.js│   ├── users.js│   ├── users.spec.js│   ├── index.js├── app.js

**Note**: For the purpose of this example, we will save the users’ information in memory.

### Without Dependency Injection





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/27f4379d950edb00f8bd7c2ff88bc027?postId=98fc423328e1" data-media-id="27f4379d950edb00f8bd7c2ff88bc027" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F1322893%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Analyzing the previous code, we verify that we are limited by the statement: `const usersRepo = require('./users-repository')` in **users**. The **users** module, with this approach, is strongly coupled to the **users-repository.**

This limits us to using the implementation of another repository without changing the **require** statement. When the **require** is used, we create a static dependency to the required module. With that, we can’t use another repository in the app model besides the one defined by the **users-repository** module.

Besides that, we are also bound to the **users-repository** in the **users-spec** because of the static dependency mentioned previously. These unit tests are for testing only the **users** module and nothing more. Imagine if the repository was connected to an external database. We would have to interact with the database in order to be able to test.

### With Dependency Injection





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2e0a35e2157586e63d1cb0ae88f4a6a8?postId=98fc423328e1" data-media-id="2e0a35e2157586e63d1cb0ae88f4a6a8" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F1322893%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





With Dependency Injection, the **users** module is no longer coupled to the **users-repository** module.

The main difference from the previous approach is that now we don’t have the static dependency in the **users** module (we don’t have the statement: `const usersRepo = require('./users-repository')`). Instead of that, the **users** module exports a [factory function](https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1) with a parameter for the repository. This allows us to pass any repository to the module at a higher level.

An alternative to the factory function is to add a parameter for the repository’s argument in the functions **create** and **read**. But if the two functions are dependent on the same repository, we can encapsulate them with a function and take advantage of the [JavaScript’s closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures).

Now, in the **app** module, we have the freedom to define which repository we want to use. Also, look at the unit tests. We can now test the **users** module without worrying about the repository. Just [mock it](https://en.wikipedia.org/wiki/Mock_object)!

However, let’s be honest — how often do we define dependencies that change throughout the application’s lifecycle? Normally, we try to avoid static dependencies because it makes testing harder. But now, since we want testability, we have to pass an instance of the repository to the **users** module every time we want to use it.

You know what would be really awesome? If we were able to use the module without having to give it a repository every time. We can do this in JavaScript with the default parameters.

### With Dependency Injection and default parameters





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/88bc72fc6f38f137cf0fecb4fedf94a9?postId=98fc423328e1" data-media-id="88bc72fc6f38f137cf0fecb4fedf94a9" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F1322893%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





With this strategy, in addition to the Dependency Injection we’ve seen in the previous approach, the parameter defined in the factory function exported by the **users** module is now a default parameter: `usersRepo = defaultUsersRepo`.

With the default parameter, if we don’t pass an argument, the value of the default parameter is used by the function. Otherwise, the argument’s value is used. This is the same as using the Dependency Injection technique defined in the previous approach.

Now, we have the static dependency again in the **users** module. However, this static dependency is only to define the value used in the default parameter if no argument is passed to the factory function.

With this approach, we are not obligated to pass the repository in the **app** module when requiring the **users** module. Still, we can do it. We can also verify that unit tests can continue to use the mock repository, because we are able to pass it instead of using the default parameter’s value.

### Conclusion

The [default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) are a simple JavaScript feature, yet a powerful one. With them, we can implement better solutions.

Feel free to ask me anything.

### More Resources

GitHub repository with the examples: [here](https://github.com/rikmms/js-default-params-and-di).

[Mattias Petter Johansson](https://medium.com/@mpjme) has a great Dependency Injection explanation video:





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/41ffd2fdfd35682ff2c0d862ef64bb3f?postId=98fc423328e1" data-media-id="41ffd2fdfd35682ff2c0d862ef64bb3f" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F6YBV1cKRqzU%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





If you enjoyed this article, please give me some claps so more people see it. Thank you!








