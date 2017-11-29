---
author: Sihui Huang
authorTwitter: https://twitter.com/sihui_io
authorFacebook: none
title: "The Observer Design Pattern is kind of like a podcast"
subTitle: "If you listen to podcasts, you are already familiar with the Observer pattern. In fact, you are an “observer”...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*_lV71Wek7B9MUmsOjS76gQ.png
url: https://medium.freecodecamp.org/the-observer-design-pattern-is-kind-of-like-a-podcast-cdee5ef9f074
id: the-observer-design-pattern-is-kind-of-like-a-podcast-cdee5ef9f074
date: 2017-11-25T03:55:11.036Z
tags: [
	"Ruby",
	"Design Patterns",
	"Programming",
	"Web Development",
	"Learning To Code"
]
---
# The Observer Design Pattern is kind of like a podcast











![](https://cdn-images-1.medium.com/max/2000/1*_lV71Wek7B9MUmsOjS76gQ.png)












If you listen to podcasts, you are already familiar with the Observer pattern. In fact, you are an “observer”.

Here’s the definition for the Observer pattern:

> The Observer Pattern defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.

### Let’s look at the definition as related to podcasts.

I found an interesting podcast named `developer tea`.














After clicking the `SUBSCRIBE` button, I’m now on their subscriber list.














When `developer tea` releases a new episode, the app will notify me and other subscribers. It downloads the new episode for us.














That’s exactly the definition of the Observer pattern!

> The Observer Pattern defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.

There is a one-to-many relationship between the `developer tea` podcast and `subscribers`.

When `developer tea` changes state, such as releasing a new episode, all of `developer tea`‘s `subscribers` are notified and updated.

### Let’s implement it in Ruby.

Start with a simple version.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F3139206%3Fv%3D4%26s%3D400&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/f2bed67c5468dbfbe7a08b3359afd0ef?postId=cdee5ef9f074" data-media-id="f2bed67c5468dbfbe7a08b3359afd0ef" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F3139206%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








The `Podcast` class holds a list of episodes and has a method to `add_episode` to the list.

Then we can create the `developer_tea` podcast and add episode #1 to it like this:














I want to get a notification whenever a new episode is released.

We can update me after adding a new episode to the list:





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F3139206%3Fv%3D4%26s%3D400&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/9897ad37bbf6ed5a583401bda0b9fb8d?postId=cdee5ef9f074" data-media-id="9897ad37bbf6ed5a583401bda0b9fb8d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F3139206%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








And whenever I get an update from `developer_tea`, I can go ahead and download the latest episode.

I enjoy listening to `developer_tea` so much that I recommend it to my friend, Amber. Now, Amber wants to subscribe to it as well.














We need to make sure Amber also gets a notification whenever a new episode is released:





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F3139206%3Fv%3D4%26s%3D400&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/b3d73893b052682093e7576723cfde56?postId=cdee5ef9f074" data-media-id="b3d73893b052682093e7576723cfde56" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F3139206%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








Hmmm, this code does what we want.

But there is a problem.

Each time we want to add a subscriber, we have to redefine the class.

Is there a way to update the subscriber list without having to redefine the class?🤔🤔🤔

### 💡💡We can keep a subscriber list!💡💡





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F3139206%3Fv%3D4%26s%3D400&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/17178a47640456a1ef3e548f82334618?postId=cdee5ef9f074" data-media-id="17178a47640456a1ef3e548f82334618" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F3139206%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








The new `Podcast` class keeps a subscriber list with the help of two new methods: one for adding subscribers and one for removing subscribers. When an episode is released, we update each subscriber.














Unfortunately, Amber doesn’t enjoy the podcast as much as I do and decides to unsubscribe. We use the `remove_subscriber` method to remove her from the subscriber list.














**🎉🎉Yay! You just learned the Observer pattern!🎉🎉**

### Design Principle behind the Observer pattern.

The Observer pattern utilizes the Loose Coupling design principle:

> Strive for loosely coupled designs between objects that interact.

The `Podcast` class doesn’t know much about its subscribers. It only knows each subscriber has an update method.

This loose coupling minimizes the dependency between Podcast and its subscribers. It also maximizes flexibility. As long as it has an update method, a subscriber can be anything: a human, a group of people, an animal, or even a car.

**Takeaways**:

1.  The Observer Pattern defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.
2.  Loose Coupling design principle: strive for loosely coupled designs between objects that interact.

Thanks for reading. Are there any other real-life examples of the Observer pattern you can think of? 🙃











* * *







I publish to [sihui.io](http://www.sihui.io/) weekly.

Subscribe so you won’t miss the next article from the series.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Fupscri.be%2Fmedia%2Fform.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe data-width="800" data-height="400" width="700" height="350" data-src="https://medium.freecodecamp.org/media/85649cc8b67966057c7c8dde81ece26d?postId=cdee5ef9f074" data-media-id="85649cc8b67966057c7c8dde81ece26d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fupscri.be%2Fmedia%2Fform.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>


















* * *







Next time we will talk about…



![](https://cdn-images-1.medium.com/max/1600/1*dIc3a1EKWwu3dwB1sPtvRw.png)










