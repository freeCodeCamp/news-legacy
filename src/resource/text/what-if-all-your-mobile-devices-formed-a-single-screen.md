---
author: TimG
authorTwitter: https://twitter.com/timigrossmann
authorFacebook: https://facebook.com/1295212793843915
title: "What if all your mobile devices formed a single screen?"
subTitle: "The Story of Swip.js"
coverSrc: https://cdn-images-1.medium.com/max/2000/1*eIQx-sLpotbpIrRnhPLPMA.png
url: https://medium.freecodecamp.org/what-if-all-your-mobile-devices-formed-a-single-screen-9c6ff01ed0c3
id: what-if-all-your-mobile-devices-formed-a-single-screen-9c6ff01ed0c3
date: 2017-06-20T18:51:28.439Z
tags: [
	"Tech",
	"JavaScript",
	"Design",
	"Startup",
	"Technology"
]
---
# What if all your mobile devices formed a single screen?

## The Story of Swip.js











![](https://cdn-images-1.medium.com/max/2000/1*eIQx-sLpotbpIrRnhPLPMA.png)












What if all your mobile devices were a single screen? This probably isn’t the most common question to ask yourself.

But, just for a second, actually think about it. Think about all the possibilities of being able to combine any kind of mobile device, independent of its operating system. That’s what Swip.js does.







![](https://cdn-images-1.medium.com/max/1600/1*S1DIXIJzt6WZVysqorz2ug.png)






Swip.js logo



The idea is quite simple: place several devices of any size next to each other and “swip” (pinch) your fingers on their edges to combine the separate screens into one big screen.












Just pinch the screens together



With Swip.js, you can build complicated multi-device experiences like this:









![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FZE0gxa-p8HY%2Fhqdefault.jpg&key=4fce0568f2ce49e8b54624ef71a8a5bd&width=40)


<iframe data-width="854" data-height="480" width="980" height="551" data-src="https://medium.freecodecamp.org/media/03ecad1ac9d0973a51e6a7114e9cb3d3?postId=9c6ff01ed0c3" data-media-id="03ecad1ac9d0973a51e6a7114e9cb3d3" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FZE0gxa-p8HY%2Fhqdefault.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>






“Golf”-Demo







### Origins of the idea

When we were searching for an idea to develop at a Hackathon, Paul remembered this gimmick he saw quite a while ago:












Siftables — [Check out the talk on YouTube](https://www.youtube.com/watch?v=JP0w9lZoLwU)



We both liked the idea of having separate “dumb” things, which we could combine to create a working system. We thought about building something similar with a RaspberryPi.

But since we weren’t hardware people, we weren’t able to build something like that. That’s when we realized that nearly everyone has **a small computer (with a web browser) in their pocket.** A computer powerful enough to handle even complex tasks.

We knew our language of choice would be **JavaScript**, since it’s completely platform independent, and works on any device with a browser.



![](https://cdn-images-1.medium.com/max/1600/1*mwRvmAs9lyRUpsVwQy456w.jpeg)



### Prototyping at the Inno{Hacks}-Hackathon

The first idea, actually, was to build a physics demo where phones could “throw” like cubes into a bigger device (like an iPad) which would contain the physical environment.

The ideas quickly escalated and after some tinkering and coding, and we decided to decrease the complexity a bit. By the end of the Hackathon we had a working demo.

Our next idea was to build a game where you had an iPad lying on the table and you had to interact with it using your phone.
















Concept of the idea







If you take a look at the concept, you can see that the tablet should serve as the “board game” and with the phones you extended the board to beat the level. The idea was to have different path pieces on your phone from which you could choose one. The ball would move, constantly getting faster and the goal to either survive longer than the other players or reach the goal position.

After a while we also threw that idea overboard (because we couldn’t get a tablet) and decided to make the fusion of displays the main feature of our pitch, instead of some gimmicky game that would quickly get boring.

That’s when we decided to go for 2 simple examples: the classic **Pong** gameand, to showcase that it’s not just about fun with games, a little **photo sharing** app.

#### So here’s the result of ~20h hacking at the Hackathon:





























Demos of the Hackathon







#### What kind of sorcery is this?

Believe it or not, it’s just JavaScript, Canvas, and a technology called [WebSockets](https://www.html5rocks.com/en/tutorials/websockets/basics/).

Libraries are always a good thing for Hackathons, so you won’t need to handle bare JavaScript. Therefore we used [Socket.IO](https://socket.io) to give us a nicer API to handle the websockets in Swip.

> Go for it, take a look at [how websockets work](https://www.html5rocks.com/en/tutorials/websockets/basics/) and try out [Socket.IO](https://socket.io)! You will be blown away how powerful and easy to use they are.

Basically, you can imagine a websocket connection to work line a tunnel that connects a client and a server with a persistent, bidirectional real-time connection. Both parties can then simply send and receive and respond to messages.

#### **A quick example using Socket.IO**

Let’s first start with the server. Since we want to keep it easy and quick, we’ll use Express to quickly setup a server.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F16529337%3Fv%3D3%26s%3D400&key=4fce0568f2ce49e8b54624ef71a8a5bd&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/4c2a5461244785e6bd5612a5944ac90a?postId=9c6ff01ed0c3" data-media-id="4c2a5461244785e6bd5612a5944ac90a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F16529337%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








This is all you need on the server-side to start.

Now open the browser and head to `localhost:3000` and ask yourself why it’s not logging anything to the console. You need to do one more thing. You’ll need to also start the websocket connection on the client-side. This will be the `index.html` you can see in the `app.get` function on the server-side.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F16529337%3Fv%3D3%26s%3D400&key=4fce0568f2ce49e8b54624ef71a8a5bd&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/705fdd3c38d04b26eeb1cec2429a9851?postId=9c6ff01ed0c3" data-media-id="705fdd3c38d04b26eeb1cec2429a9851" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F16529337%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








If you now head over to `localhost:3000` and take a look at the terminal, where you started the server in, you’ll see `a user connected` there.

The **socket** is the part you want to focus on now. In `index.html` we do `socket.emit('message', 'Hello')`. We are **emitting** a new message with the **name** `message` and the **data** `Hello`and want to react on that message on at the server. To do this, we need to work with the socket we get when calling `io.on('connection', (**socket**) => ...)`. Therefore we simply add the following lines.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F16529337%3Fv%3D3%26s%3D400&key=4fce0568f2ce49e8b54624ef71a8a5bd&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/69781e5d22190289b8affa113d8f556c?postId=9c6ff01ed0c3" data-media-id="69781e5d22190289b8affa113d8f556c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F16529337%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








You will now see `Hello` printed to the console whenever a new client joins the server. By now that’s not too special. But we can also send data from the server to the client, over the same socket and even use whole objects instead of just Strings. The client simply has to react on the emitted event with `socket.on('messageBack', (data) => ...)` and can then use the sent data.

If you want to learn more about Socket.IO, check out their [ChatApp tutorial](https://socket.io/get-started/chat/), where you quickly build a basic Slack clone.

Since you now know a little bit about the tech behind it, you can probably already guess how it basically worked.

We were just sending the position data of the elements all the time and render e.g. the pong-ball on each client.

This really is not performant at scale. But we learned that when prototyping at a Hackathon **you really shouldn’t worry about performance**.

The people there were pretty impressed and puzzled how this might work and [we ended up winning the Technology Innovation prize](https://devpost.com/software/swip). They even asked us if we think about working on this further.

> Take away: If you don’t want to build something with the given tools of the hackathon, don’t. Experiment, play around, and — most importantly — have fun!



![](https://cdn-images-1.medium.com/max/1600/1*mwRvmAs9lyRUpsVwQy456w.jpeg)



### Spreading the word and getting the first 1,000 GitHub Stars

When we finished our first usable version of [Swip.js](https://github.com/paulsonnentag/swip), we were pretty proud that it turned out to be such an entertaining project.

We wanted to show it to more people, get some feedback and (of course) get some GitHub stars to improve our audience. The tech-news source of our choice was [HackerNews](https://news.ycombinator.com). It has a special section to showcase your work.

Paul sent me a message around half an hour after [posting the link](https://news.ycombinator.com/item?id=12735665), telling me that we already hit more than 100 GitHub stars. From this moment, I checked back at the comments on [HackerNews](https://news.ycombinator.com) like every minute. We both couldn’t believe how fast this took off.

I started to spam every possible blogger, JavaScript guru, and Subreddit I could think of with a link to the repo. We got some really awesome feedback. One person who noticed was [Quincy Larson](https://medium.com/@quincylarson):





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F378800000147359764%2F54dc9a5c34e912f34db8662d53d16a39_400x400.png&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe data-width="500" data-height="185" width="500" height="185" data-src="https://medium.freecodecamp.org/media/4c6447ac4ae0b3836dc9b12394983ffd?postId=9c6ff01ed0c3" data-media-id="4c6447ac4ae0b3836dc9b12394983ffd" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F378800000147359764%2F54dc9a5c34e912f34db8662d53d16a39_400x400.png&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








[Pauls Twitter got flooded with notifications](https://twitter.com/search?q=swip.js&src=typd) and we even got featured in a [Japanese blog](http://gigazine.net/news/20161029-swip-js/?utm_content=buffer822e3&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer).

This was just awesome!

[**paulsonnentag/swip**  
_swip - a library to create multi device experiments_github.com](https://github.com/paulsonnentag/swip "https://github.com/paulsonnentag/swip")[](https://github.com/paulsonnentag/swip)

> Take away: Nobody will see your project unless you show it to them. Use popular channels to spread the word!



![](https://cdn-images-1.medium.com/max/1600/1*mwRvmAs9lyRUpsVwQy456w.jpeg)



### About building a JavaScript library

After we heard the incredible feedback from all of the competitors and judges, we discussed whether we should work on this a bit more. We decided to put **2 more days** into it to build a library.

Well, we ended up **investing 2 whole weeks** into the project, because we extremely underestimated the workload. We had to start from scratch, because our codebase was nearly unusable.

While working on it, we came across quite a few challenges. One of the biggest challenges was **how do we do this with more than 2 devices?** While working on it at the hackathon we only had 2 phones with us, so we never thought of the problems we’d face in adding more.

### Getting quite technical

If you’re not into the technical aspects of the project, feel free to skip this part and watch the demos we built with the library.

Taking a rough and dirty prototype and turning it into a working and actually usable library comes with a whole lot of challenges we’d never thought of when building the prototype.

#### How big is a physical pixel?

For a first proof of concept we build a small test where we would display a static image and expand it across two devices once they were ‘swiped together.’

After we got it running, we realized that there was something off: the pictures didn’t quite match up and the scaling wasn’t right. The problem is that depending on the size and resolution of a device 100px might be slightly bigger or smaller than on another device.












Example of the right alignment but wrong size



We measured several smartphones and tablets and simply took the average of all the measurements. For Swip.js we therefore determined that 60 pixels should be equivalent to 1 centimeter, and scaled the canvas according to that.

This was key if we wanted to create the impression of a large continuous game world, in which you can take a look into with your smartphones.

Without standardized dimensions, the rendered particles had different sizes on different screens.

Unfortunately we didn’t figure out a way to calculate this scaling factor automatically, so on the first start of the application, we prompt the user to enter the diagonal length of the device.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F16529337%3Fv%3D3%26s%3D400&key=4fce0568f2ce49e8b54624ef71a8a5bd&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/6a2247b052603eebc9df387a00f108e3?postId=9c6ff01ed0c3" data-media-id="6a2247b052603eebc9df387a00f108e3" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F16529337%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








### State handling

Syncing state across multiple devices in realtime is a hard problem. There is no global time because the internal clock of each device might be set to time a few hundred milliseconds in the future or a few milliseconds in the past. The network isn’t always reliable and messages might be delayed or completely lost. We didn’t tackle all these problems in detail but instead aimed for a solution thats good enough to test out our idea.

The logic of the application lives on the server and the smartphones are just dumb clients. The client sends an event to the server if the user triggers an action like touching the screen. The server reacts to that change computes the next game state and sends that update to the clients. That way the clients all get the same changes and won’t become out of sync after a while. It’s not a perfect solution and becomes laggy if the latency of the network increases but its easy to implement and works fine.

We used redux to implement this pattern if you’re interested in the technical details you can [read more about it here!](http://redux.js.org)












Redux pattern in swip.js














Two clusters for two not yet connected devices



Initially, every device has it’s own cluster. The developer can specify what should happen when two devices are swiped and therefore combined. This all happens on the server side. In this example we simply want to merge all the balls in the scene.












The merged clusters



#### What did the canvas world actually look like?

You can think of the “environment” as an infinitely long and wide area. Every device simple renders the content that would be visible in it’s windowed area.

Once device will start off as the origin. With a “swip”, a simple pinch gesture, you define two reference points which are used to calculate the offsets taking into account the height and width of the device, as well as the physical X and Y translation of the new device.












Concept of how the canvas world looks



All right, since we’re now done with the nerdy stuff, here’s another demo to show off what the Swif.js library could do. Enjoy!









![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FqXOwT0ieOgw%2Fhqdefault.jpg&key=4fce0568f2ce49e8b54624ef71a8a5bd&width=40)


<iframe data-width="854" data-height="480" width="980" height="551" data-src="https://medium.freecodecamp.org/media/862f537893f9c725755e6f01eb368027?postId=9c6ff01ed0c3" data-media-id="862f537893f9c725755e6f01eb368027" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FqXOwT0ieOgw%2Fhqdefault.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>






“Blob”-Demo







> Take away: Don’t underestimate the work needed to take a quick and dirty concept to a real project!



![](https://cdn-images-1.medium.com/max/1600/1*mwRvmAs9lyRUpsVwQy456w.jpeg)



### Who we are

#### Paul Sonnentag

Lead Developer, Idea-Initiator and Mastermind of this project

> Check him out on [**GitHub**](https://github.com/paulsonnentag) or [**Twitter**](https://twitter.com/paulsonnentag)












Paul Sonnentag



> A passionate developer, studying computer science. At home on the web. Building things with JavaScript, Elm and Clojure.











* * *







#### Tim Großmann

Developer, Idea-Shaper, Word-Spreader and Writer

> Check me out on [**GitHub**](https://github.com/timgrossmann)**,** [**YouTube**](https://www.youtube.com/channel/UC9_Bk9247GgJ3k9O7yxctFg)**,** [**Twitter**](https://twitter.com/timigrossmann)**,** [**Facebook**](https://www.facebook.com/profile.php?id=100000656212416)












Tim Großmann



> Passionate learner and developer. Studying computer science at the Media University. Looking forward to work with ingenious teams on challenging projects.











* * *







#### Thank you for reading, we’d love to hear **Your** thoughts and opinion on this so feel free to comment or directly hit [me](mailto:contact.timgrossmann@gmail.com) or [Paul](mailto:paul.sonnentag@gmail.com) with an [email](mailto:contact.timgrossmann@gmail.com).



![](https://cdn-images-1.medium.com/max/1600/1*mwRvmAs9lyRUpsVwQy456w.jpeg)



Also be sure to follow us on [YouTube](https://www.youtube.com/channel/UC9_Bk9247GgJ3k9O7yxctFg) and to [star Swip.js on GitHub](https://github.com/paulsonnentag/swip).

We are always looking for new opportunities. Are you from a top tech company and search for interns or an organizer of a JS conference? [Please contact us](mailto:contact.timgrossmann@gmail.com). We’d love to get in touch!











* * *







> I’ll be in Palo Alto for an internship starting in September and would love to **meet as many of You as possible**! If you’re interested, [hit me up on my Email](mailto:contact.timgrossmann@gmail.com), I’d be happy to get in touch!








