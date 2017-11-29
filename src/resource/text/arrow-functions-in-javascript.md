---
author: Tyler McGinnis
authorTwitter: https://twitter.com/tylermcginnis
authorFacebook: https://facebook.com/10153707086226430
title: "How you can use ES6 Arrow Functions to make your JavaScript easier to read"
subTitle: "Arrow functions are the new fundamental building blocks of building modern web applications...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*ZKh4YYKYnIF12esNKFkhQg.png
url: https://medium.freecodecamp.org/arrow-functions-in-javascript-2f8bf7df5077
id: arrow-functions-in-javascript-2f8bf7df5077
date: 2017-10-12T06:14:05.284Z
tags: [
  "JavaScript",
  "ES6",
  "Web Development",
  "Programming",
  "Tech"
]
---
# How you can use ES6 Arrow Functions to make your JavaScript easier to read







![](https://cdn-images-1.medium.com/max/2000/1*ZKh4YYKYnIF12esNKFkhQg.png)







Arrow functions are the new fundamental building blocks of building modern web applications.

In this post, you’ll learn how Arrow Functions both make your code more concise, while also making the “this” keyword more manageable. You’ll also learn about implicit returns, logging with arrow functions, and combining implicit returns with objects.

If you prefer to learn by video instead of text, here’s the video format:





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/5641cfc4237fc00bc472a90d55c534c0?postId=2f8bf7df5077" data-media-id="5641cfc4237fc00bc472a90d55c534c0" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FdB1KA-yz65s%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Arrow functions provide two main benefits over regular functions. First, they’re more terse. Second, they make managing the “this” keyword a little easier.

What I’ve seen with new developers learning about Arrow Functions is that it’s not really the concept itself that’s difficult to grasp. Odds are you’re already familiar with functions, their benefits, use cases, etc. But for some reason, it’s the actual syntax that throws your brain for a loop when you’re first exposed to them. Because of this, we’re going to take things slow and first just introduce how the syntax compares with typical functions you’re used to.

Here we have a basic function declaration and a function expression:

<pre name="c481" id="c481" class="graf graf--pre graf-after--p">// fn declaration  
function add (x,y) {  
  return x + y;  
}</pre>

<pre name="8971" id="8971" class="graf graf--pre graf-after--pre">// fn expression  
var add = function (x,y) {  
  return x + y;  
}</pre>

Now, if we wanted to change that function expression to an arrow function, we’d do it like this:

<pre name="358d" id="358d" class="graf graf--pre graf-after--p">var add = function (x,y) {  
  return x + y;  
}</pre>

<pre name="45b3" id="45b3" class="graf graf--pre graf-after--pre">var add = (x,y) => {  
  return x + y;  
}</pre>

Again, the most difficult part about getting started with arrow functions is just getting used to the syntax. Once you’re cool with it, move on and we’ll dive deeper.

At this point you may be wondering what all the hype is about with arrow functions. Truthfully, the example above doesn’t really lend well to their strengths. What I’ve found is that arrow functions really thrive when you’re using anonymous functions. We can warm our brain up a little more to the syntax by looking at another basic example of this is using `.map`.

<pre name="2b3e" id="2b3e" class="graf graf--pre graf-after--p">users.map(function () {</pre>

<pre name="c09b" id="c09b" class="graf graf--pre graf-after--pre">})</pre>

<pre name="944f" id="944f" class="graf graf--pre graf-after--pre">users.map(() => {</pre>

<pre name="941f" id="941f" class="graf graf--pre graf-after--pre">})</pre>

All right — enough with the warm up. Let’s dive into it.

Let’s say we had a `getTweets` function that took in a user id and, after hitting a poorly designed API, returned us all of the user’s Tweets with over 50 stars and retweets. Using promise chaining, that function may look something like this,

<pre name="1929" id="1929" class="graf graf--pre graf-after--p">function getTweets (uid) {  
  return fetch('[https://api.users.com/'](https://api.users.com/%27) + uid)  
    .then(function (response) {  
      return response.json()  
    })  
    .then(function (response) {  
      return response.data  
    }).then(function (tweets) {  
      return tweets.filter(function (tweet) {  
        return tweet.stars > 50  
      })  
    }).then(function (tweets) {  
      return tweets.filter(function (tweet) {  
        return tweet.rts > 50  
      })  
    })  
}</pre>

Well, it works. But it’s not the prettiest function in the world 🤷‍♀️. Even though this specific implementation is kind of dense, the idea is all too common. Let’s take a look at how what we know about arrow functions thus far, can improve our `getTweets` function.

<pre name="109e" id="109e" class="graf graf--pre graf-after--p">function getTweets (uid) {  
  return fetch('[https://api.users.com/'](https://api.users.com/%27) + uid)  
    .then((response) => {  
      return response.json()  
    })  
    .then((response) => {  
      return response.data  
    }).then((tweets) => {  
      return tweets.filter((tweet) => {  
        return tweet.stars > 50  
      })  
    }).then((tweets) => {  
      return tweets.filter((tweet) => {  
        return tweet.rts > 50  
      })  
    })  
}</pre>

OK, cool. It looks basically the same we just didn’t have to type `function`. Beneficial, but nothing worth Tweeting about. Let’s look at the next benefit of arrow functions, “implicit returns”.

With arrow functions, if your function has a “concise body” (a fancy way for saying one line function), then you can omit the “return” keyword and the value will be returned automatically (or implicitly).

So the `add` example from earlier can be updated to look like this:

<pre name="9ebc" id="9ebc" class="graf graf--pre graf-after--p">var add = function (x,y) {  
  return x + y;  
}</pre>

<pre name="d812" id="d812" class="graf graf--pre graf-after--pre">var add = (x,y) => x + y;</pre>

and more importantly, the `getTweets` example can be update to look like this:

<pre name="b33c" id="b33c" class="graf graf--pre graf-after--p">function getTweets (uid) {  
  return fetch('[https://api.users.com/'](https://api.users.com/%27) + uid)  
    .then((response) => response.json())  
    .then((response) => response.data)  
    .then((tweets) => tweets.filter((tweet) => tweet.stars > 50))  
    .then((tweets) => tweets.filter((tweet) => tweet.rts > 50))  
}</pre>

Now we’re talking 📈. That code is not only much easier to write, but more importantly, it’s much easier to read.

Now, one further change we can make is that if the arrow function only has one parameter, you can omit the `()` around it. With that in mind, `getTweets` now looks like this:

<pre name="2d48" id="2d48" class="graf graf--pre graf-after--p">function getTweets (uid) {  
  return fetch('[https://api.users.com/'](https://api.users.com/%27) + uid)  
    .then(response => response.json())  
    .then(response => response.data)  
    .then(tweets => tweets.filter(tweet => tweet.stars > 50))  
    .then(tweets => tweets.filter(tweet => tweet.rts > 50))  
}</pre>

Overall, I’d say that’s a huge improvement in just about every category.

The next benefit of arrow functions is how they manage the “this” keyword. If you’re not familiar with the “this” keyword, I recommend watching [WTF is this](https://tylermcginnis.com/videos/wtf-is-this/).

Let’s take a look at some typical React code using ES5.

<pre name="b10f" id="b10f" class="graf graf--pre graf-after--p">class Popular extends React.Component {  
  constructor(props) {  
    super();  
    this.state = {  
      repos: null,  
    };</pre>

<pre name="f7bc" id="f7bc" class="graf graf--pre graf-after--pre">this.updateLanguage = this.updateLanguage.bind(this);  
  }  
  componentDidMount () {  
    this.updateLanguage('javascript')  
  }  
  updateLanguage(lang) {  
    api.fetchPopularRepos(lang)  
      .then(function (repos) {  
        this.setState(function () {  
          return {  
            repos: repos  
          }  
        });  
      });  
  }  
  render() {  
    // Stuff  
  }  
}</pre>

When the component mounts, it’s making an API request (to the Github API) to fetch JavaScript’s most popular repositories. When it gets the repositories, it takes them and updates the component’s local state, or at least that’s what we want it to do. Unfortunately, it doesn’t do that. Instead, we get an error. Can you spot the bug?

The error the code above is going to throw is “cannot read setState of undefined”. Now, **why** that’s happening is outside the scope of this post (again, watch [WTF is this](https://tylermcginnis.com/videos/wtf-is-this/) if you need it) but a typical ES5 solution uses `.bind` and looks something like this:

<pre name="75fc" id="75fc" class="graf graf--pre graf-after--p">class Popular extends React.Component {  
  constructor(props) {  
    super();  
    this.state = {  
      repos: null,  
    };</pre>

<pre name="0c5d" id="0c5d" class="graf graf--pre graf-after--pre">this.updateLanguage = this.updateLanguage.bind(this);  
  }  
  componentDidMount () {  
    this.updateLanguage('javascript')  
  }  
  updateLanguage(lang) {  
    api.fetchPopularRepos(lang)  
      .then(function (repos) {  
        this.setState(function () {  
          return {  
            repos: repos  
          }  
        });  
      }.bind(this));  
  }  
  render() {  
    // Stuff  
  }  
}</pre>

This is the second major benefit as to why arrow functions are great, they don’t create their own context. What that means is that typically the `this` keyword Just Works™ without you having to worry about what context a specific function is going to be invoked in. So by using arrow functions in the `updateLanguage` method, we don’t have to worry about `this` which means we don’t have to call `.bind` anymore.

<pre name="a6f6" id="a6f6" class="graf graf--pre graf-after--p">updateLanguage(lang) {  
  api.fetchPopularRepos(lang)  
    .then((repos) => {  
      this.setState(() => {  
        return {  
          repos: repos  
        }  
      });  
    });  
}</pre>

📈📈📈

### Nice to knows

At this point, we’ve covered all of the “need to knows” about arrow functions. There are, however, two different “nice to knows” that I think are worth mentioning.

Looking at the `updateLanguage` method again, if we wanted to implicitly return the object inside of the setState callback, how would we do that? Your first intuition would be to remove the return statement and just return an object.

<pre name="5170" id="5170" class="graf graf--pre graf-after--p">api.fetchPopularRepos(lang)  
  .then((repos) => {  
    this.setState(() => {  
      repos: repos  
    });  
  });</pre>

The problem with this, as you probably guessed, is that that syntax is the exact same as creating a function body. JavaScript can’t magically tell the difference between when you want to create a function body and when you want to return an object so it’ll throw an error. To fix this, we can wrap the object inside of `()`.

<pre name="40a6" id="40a6" class="graf graf--pre graf-after--p">api.fetchPopularRepos(lang)  
  .then((repos) => {  
    this.setState(() => ({  
      repos: repos  
    }));  
  });</pre>

Now, with that syntax, we can use an arrow function to implicitly return an object.

Next tip. Say we wanted to examine the previous state of the component inside of setState by logging it. If this was your setState function, how would you approach logging `nextState`?

<pre name="9dd3" id="9dd3" class="graf graf--pre graf-after--p">this.setState((nextState) => ({  
  repos: repos  
}));</pre>

The obvious move would be to change your implicit return to an explicit return, create a function body, then log inside of that body.

<pre name="17d3" id="17d3" class="graf graf--pre graf-after--p">this.setState((nextState) => {  
  console.log(nextState)  
  return {  
    repos: repos  
  }  
});</pre>

Well, that’s pretty annoying. There is a better way though and it’s done using the `||` operator. Instead of messing with all of your code, you can do something like this

<pre name="6649" id="6649" class="graf graf--pre graf-after--p">this.setState((nextState) => console.log(nextState) || ({  
  repos: repos  
}));</pre>

So clever 👩‍🎤











* * *







I originally posted this on [tylermcginnis.com](https://tylermcginnis.com/arrow-functions/) as part of my “[Modern JavaScript](https://tylermcginnis.com/courses/modern-javascript/)” course.

You can follow me on Twitter at [@tylermcginnis](https://twitter.com/tylermcginnis).








