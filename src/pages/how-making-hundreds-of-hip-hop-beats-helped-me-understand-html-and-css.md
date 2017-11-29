---
author: Lawrence Yeo
authorTwitter: https://twitter.com/TreblesandBlues
authorFacebook: https://facebook.com/10104567350000806
title: "How making hundreds of hip hop beats helped me understand HTML and CSS"
subTitle: "It was 2 AM on a Saturday night, and I was up late working on a new project...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*-u_QOIWkyyDc1JH_jgbjhQ.jpeg
url: https://medium.freecodecamp.org/how-making-hundreds-of-hip-hop-beats-helped-me-understand-html-and-css-cb7c61e847cf
id: how-making-hundreds-of-hip-hop-beats-helped-me-understand-html-and-css-cb7c61e847cf
date: 2017-01-26T02:06:49.296Z
tags: [
  "Web Development",
  "Music",
  "Programming",
  "Web Design",
  "Design"
]
---
# How making hundreds of hip hop beats helped me understand HTML and CSS







![](https://cdn-images-1.medium.com/max/2000/1*-u_QOIWkyyDc1JH_jgbjhQ.jpeg)







It was 2 AM on a Saturday night, and I was up late working on a new project.

As a beatmaker, you would think that my screen would look something like this:







![](https://cdn-images-1.medium.com/max/2000/1*_Q951Pa8WpK0apoyxfmP-Q.jpeg)

[Image credit](https://www.propellerheads.se/support/user/reason/mac-troubleshooting/how-can-i-change-themes-in-reason-9/)







But instead, it looked like this:







![](https://cdn-images-1.medium.com/max/2000/1*X_8Dn0zFXkecif09Do4g5A.png)

Source: My Screen @ 2 AM that Saturday Night







Rather than programming kicks and snares, I was trying to build out a sticky navigation bar on my website. Yeah, it’s not quite machine learning or AI, but for me, this was a pretty big deal.

You see, I never once considered myself to be a web developer. I have a couple of friends who did it for a living. But every time they opened up their code editors to show me what they were working on, it would just look like one of those GIFs that eternally loops into itself.



![](https://cdn-images-1.medium.com/max/1600/1*ycVPPGiQSTVAYH2TwgfW7g.gif)

Kind of like this, but with way less mustache.



Naturally, I would get up and think, _Thank goodness I don’t have to do that. I’m just a guy making a ton of beats all day!_

Well… that thought was short-lived.

Soundcloud, Spotify, and Bandcamp have made it infinitely easier for musicians to get their work out to the public. But music is now scattered across so many platforms that it’s hard for listeners to find exactly what they want.

It was clear to me that I needed a website to act as a central hub for my work. Just like my favorite musicians, I wanted a webpage featuring a nice navigation bar and a large hero image of myself _not_ looking into the camera.







![](https://cdn-images-1.medium.com/max/2000/1*tYWgHdE6K7HFvYL1wsUUXA.png)

An homage to my heroes.







I originally tried using Squarespace, but I didn’t like how I had to start with a template, then work within the confines of pre-determined blocks.

And the themes were too commonplace. You would click on _your-favorite-artist.com_, only to land on the same Squarespace template that you’ve seen hundreds of times already.

I wanted to build something from the ground-up — even if I was armed with no prior knowledge of HTML and CSS.

I wanted to challenge myself.

So I purchased a [Udemy course](https://www.udemy.com/design-and-develop-a-killer-website-with-html5-and-css3/learn/v4/), downloaded Brackets, and started the lessons.

And… wow. I was _immediately_ hooked.

Just a month or two later, [my website was live](https://www.treblesandbluesmusic.com/), and it was done entirely from scratch.

[**Trebles and Blues**  
_Trebles and Blues is a Los Angeles-based beatmaker that takes influence from a multitude of creative outlets._www.treblesandbluesmusic.com](https://www.treblesandbluesmusic.com "https://www.treblesandbluesmusic.com")[](https://www.treblesandbluesmusic.com)

_So… what made me love the experience so much?_

Here are some of the things I found particularly cool:

*   **The “turn a turd into a diamond” philosophy**: the ability to build out raw content in HTML (no matter how crappy it would look), and then beautify it in CSS
*   **The re-contextualization of existing resources**: take images, icon fonts, etc. from anywhere and manipulate them to fit your narrative
*   **The usage of external tools**: the availability of jQuery plug-ins I could use to enhance the page

After stepping back and thinking about it for a bit, it made sense as to why I enjoyed it so much.

**These same elements are firmly embedded into the beatmaking process as well!**

It might seem unlikely, but it became very clear to me that there was a strong link between web development and music production. Let’s take some time to explore this connection further.

### An Outline of the Beatmaking Process

For those of you that are unfamiliar with hip hop production, I am going to simplify the process down to the following three steps:

1.  **Drums**
2.  **Sampling**
3.  **Instrumentation**

For purposes of this exercise, I will deconstruct the following beat, titled “Clear Skies Ahead” (taken from my [Soundcloud page](https://soundcloud.com/treblesandblues)):





<iframe data-width="800" data-height="166" width="700" height="145" src="https://medium.freecodecamp.org/media/61e989e0674e8433eb7bc4c6a8741c7c?postId=cb7c61e847cf" data-media-id="61e989e0674e8433eb7bc4c6a8741c7c" data-thumbnail="https://i.embed.ly/1/image?url=http%3A%2F%2Fi1.sndcdn.com%2Fartworks-000075789161-oh26mw-t500x500.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





I chose it because it’s fairly simple in structure, the source files are still intact, and… it’s a pretty chill beat 😀.

I will walk through each of the steps using this song, and detail how **HTML and CSS is more hip hop than you could have ever imagined.**

### Exploring the Connections

#### Similarity #1: Making the drums is just like building out content in HTML and styling it later in CSS.



![](https://cdn-images-1.medium.com/max/1600/1*CPxLQCcQ7J4OYH1TN0Bwyg.jpeg)

Photo Credit: [Nam Bui](http://nambuidesign.com/)



I want to highlight two key characteristics of HTML:

1.  **HTML provides structure.** HTML provides the architecture for the page. In a typical HTML document, we have `<html>`, `<head>`, `<body>`, `<footer>` tags that clearly delineate each section, along with calls to any necessary CSS files and jQuery plug-ins.
2.  **HTML houses the content that will be styled later.** Although HTML is responsible for a page’s _content_, we code everything in a way that makes it easy for us to _style later_. The initial preview may look really crappy now, but we’re setting it up for **future beautification** via CSS.

The drums of a beat also have very similar characteristics:

1.  **Drums provide structure.** They’re the foundation of the song. They form the groove that will carry the listener.
2.  **Drums house sounds that will be styled later.** They generally lack character at first. It’s usually when the proper effects are applied that they truly come to life.

Let’s take a listen to the **initial drums** for the reference beat, “Clear Skies Ahead.” The raw pattern consists of kicks, snares, and a looped drum break:





<iframe data-width="800" data-height="166" width="700" height="145" src="https://medium.freecodecamp.org/media/770364144f1ed5e44af4609e572f8684?postId=cb7c61e847cf" data-media-id="770364144f1ed5e44af4609e572f8684" data-thumbnail="https://i.embed.ly/1/image?url=http%3A%2F%2Fi1.sndcdn.com%2Fartworks-000203765326-qf92up-t500x500.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





It sounds… _okay_. The structure is there, the groove is there, but it lacks character. The kick sounds jarring. The snare sounds hollow. And the drum break is hiding in the background.

**So we must stylize and beautify it!**







![](https://cdn-images-1.medium.com/max/2000/1*bn4mgoCEyHZHRFy6SKXCUQ.jpeg)







To beef up the low-end on the kick, I applied an _equalizer_ on it. This effect allows me to adjust the different frequencies on a sound. To give the snare more life, I added a _reverb_ effect so it would echo out. To give the sampled break presence, I used an effect called a _stereo imager_ to widen it across the beat.

This can be the equivalent of assigning a div element with classes “equalizer”, “reverb”, and “stereo-imager” to the various sections in HTML:

<pre name="d9ae" id="d9ae" class="graf graf--pre graf-after--p">  
  <h2>Kicks</h2>  
    <p>The “boom”</p>  
</pre>

<pre name="f96c" id="f96c" class="graf graf--pre graf-after--pre">  
  <h2>Snare</h2>  
    <p>The “bap”</p>  
</pre>

<pre name="03af" id="03af" class="graf graf--pre graf-after--pre">  
  <h2>Drum Break</h2>  
    <p>”Boom-bap”</p>  
</pre>

Then we can adjust the styles of the classes accordingly in CSS:

<pre name="3262" id="3262" class="graf graf--pre graf-after--p">.equalizer {  
  font-weight: bolder;  
}</pre>

<pre name="d1dd" id="d1dd" class="graf graf--pre graf-after--pre">.reverb {  
  text-shadow: 1px 1px blue;  
}</pre>

<pre name="573a" id="573a" class="graf graf--pre graf-after--pre">.stereo-imager {  
  letter-spacing: 1px;  
}</pre>

Here’s the sonic equivalent of styling the drums (with the processed effects):





<iframe data-width="800" data-height="166" width="700" height="145" src="https://medium.freecodecamp.org/media/2f2685394cc4d42a8fc1dfac6fe7bce5?postId=cb7c61e847cf" data-media-id="2f2685394cc4d42a8fc1dfac6fe7bce5" data-thumbnail="https://i.embed.ly/1/image?url=http%3A%2F%2Fi1.sndcdn.com%2Fartworks-000203765178-0eo4lb-t500x500.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





As you can hear, the drums truly come to life once the appropriate effects have been applied. Similarly, the content in your webpage can only be presented after it has been properly styled in CSS.

#### Similarity #2: Sampling a song is just like re-contextualizing images and icon fonts to fit a new narrative.



![](https://cdn-images-1.medium.com/max/1600/1*nqqTp4CqKI8kacvz-FSggw.jpeg)



Regardless of what your views on sampling may be, it’s a staple in hip hop culture. I absolutely love it, and find it to be an amazing way to breathe new life into pre-existing works of art.

There’s a technique in hip hop called “chopping,” in which you take an older song, slice it up into small pieces, and replay them in a new sequence to create a whole new song.

Using “Clear Skies Ahead” as an example, the below clip details the 3-step process:

1.  Identify the song to be sampled (“dig” for the sample) — starts at 0:00
2.  Arrange a new sequence with the chopped slices — starts at 0:13
3.  Add any necessary effects and incorporate into the beat — starts at 0:24





<iframe data-width="800" data-height="166" width="700" height="145" src="https://medium.freecodecamp.org/media/433605a9f0aea4ea35792dc1d1ea454b?postId=cb7c61e847cf" data-media-id="433605a9f0aea4ea35792dc1d1ea454b" data-thumbnail="https://i.embed.ly/1/image?url=http%3A%2F%2Fi1.sndcdn.com%2Fartworks-000203765073-pcr8jq-t500x500.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Building a webpage follows the same philosophy.

Let’s say you’re building a very simple page of four centered images that changes opacity when you hover over them. The same 3-step process applies here as well:

1.  **Identify the images to be used**

You can use [Unsplash](https://unsplash.com/) or any of these beautiful [stock photo sites](https://medium.com/the-mission/these-41-epic-sites-have-breathtaking-stock-photos-you-can-use-for-free-30407b175f45#.3dvz0lazf) to find images you’d like.

2. **Arrange the images in HTML in a sequence that fits a narrative**

<pre name="104d" id="104d" class="graf graf--pre graf-after--p">  
  <img src=”spring.jpg” alt=”spring”>  
  <img src=”summer.jpg” alt=”summer”>  
  <img src=”fall.jpg” alt=”fall”>  
  <img src=”winter.jpg” alt=”winter”>  
</pre>

3. **Add the necessary effects in CSS to finish up the page**

<pre name="19a4" id="19a4" class="graf graf--pre graf-after--p">.box img {</pre>

<pre name="b4d5" id="b4d5" class="graf graf--pre graf-after--pre">  /* Resize images */    
  width: 50%;  
  height: auto;</pre>

<pre name="056d" id="056d" class="graf graf--pre graf-after--pre">  /* Center images */  
  display: block;  
  margin-left: auto;  
  margin-right: auto;</pre>

<pre name="e6e4" id="e6e4" class="graf graf--pre graf-after--pre">   /* Space out images */  
  margin-bottom: 30px;</pre>

<pre name="25c8" id="25c8" class="graf graf--pre graf-after--pre">}</pre>

<pre name="1caf" id="1caf" class="graf graf--pre graf-after--pre">img:hover {</pre>

<pre name="26de" id="26de" class="graf graf--pre graf-after--pre">  opacity: 0.5;  
  transition: 0.3s;</pre>

<pre name="90e0" id="90e0" class="graf graf--pre graf-after--pre">}</pre>

This process of actively digging for resources, rearranging them, and styling them according to your preferences is universal in both hip hop and web development.

#### Similarity #3: Adding a virtual instrument is just like adding a jQuery plug-in to enhance the page.



![](https://cdn-images-1.medium.com/max/1600/1*wYTOKF2WHDLvlQbkI_xqJg.jpeg)



To finalize this beat, I want to add a low, sub bass sound that will bring everything together. It will act as the glue that rounds out the low frequencies in the beat and fills it out.

_“But what do I do if I don’t have a bass guitar? And even if I did have one, I wouldn’t know how to play it!”_

And that’s where virtual instruments come in. They come in the form of stock sounds or third-party plug-ins, and they allow you to access sounds that would otherwise be difficult to obtain. They allow you to create a synth sound without an actual synthesizer module, a violin sound without actual stringed instruments, and so on.

For “Clear Skies Ahead”, I added the virtual instrument that contained the sub bass, recorded it, and applied it to the existing beat:





<iframe data-width="800" data-height="166" width="700" height="145" src="https://medium.freecodecamp.org/media/f67068e7671b63483c098916dab68c84?postId=cb7c61e847cf" data-media-id="f67068e7671b63483c098916dab68c84" data-thumbnail="https://i.embed.ly/1/image?url=http%3A%2F%2Fi1.sndcdn.com%2Fartworks-000203764877-9lqupi-t500x500.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





This philosophy of using an external instrument is just like using a great jQuery plug-in for your site. They both allow you to easily access a feature that would otherwise be difficult to craft on your own.

To illustrate this on my webpage, let’s insert an image gallery that can display the four seasonal images in my earlier example. Instead of building one from scratch, let’s leverage jQuery and use a great-looking plug-in. I will use [Swipebox](http://brutaldesign.github.io/swipebox/):





<iframe data-width="600" data-height="400" width="600" height="400" src="https://medium.freecodecamp.org/media/09e6b20a9ccbbe910a92ba63b9eb5610?postId=cb7c61e847cf" data-media-id="09e6b20a9ccbbe910a92ba63b9eb5610" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fwww.gravatar.com%2Favatar%2F4f0f176aeddf4f2a1e7dd6119238e7db%2F%3Fdefault%3D%26s%3D80&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





_For mobile readers, view my JSFiddle_ [_here_](https://jsfiddle.net/treblesandblues/tq36zd2L/)_._

In both scenarios, I used external resources that were seamlessly integrated into each platform. Both were easily accessible and allowed for richer experiences for the visitor and listener.

### **Concluding thoughts**

Although I’ve only been coding for a few months, I’ve made hundreds and hundreds of beats over the last six years. When I became aware of the strong similarities between the two, I was able to leverage my experience as a musician to become a better web developer.

And that leads me to my final thought:

**To create a fun learning experience, find how an existing passion connects to the new topic you’re studying.**



![](https://cdn-images-1.medium.com/max/1600/1*J71MDM7wuUBScHlgzIDX3Q.jpeg)



It makes the concepts easier to understand, and it also reaches into the pot of excitement that you already have for your existing passions or hobbies.

In my case, understanding the link between HTML/CSS and music production greatly accelerated my learning curve and made for a really fun experience. When I was building my site, I entered flow states that were reminiscent of what I would feel during my beatmaking sessions.

How do your existing passions line up with a new skill set you’re learning? They might seem wildly different at first, but take the time to look a little deeper.

If seemingly unrelated skills like making beats and writing code can pair well together, you should be able to find a similarly strong connection between your various interests as well!











* * *









![](https://cdn-images-1.medium.com/max/1600/1*XuQNLBnCGZdBJvGFKZU3LQ.jpeg)



_Hey there, I’m Lawrence, and I make beats under the name_ [_Trebles and Blues_](https://twitter.com/treblesandblues)_. I just released a new EP, Set It Off, which is_ [**_out now_**](https://treblesandblues.bandcamp.com/album/set-it-off)_. For more music, feel free to check out my_ [**_Soundcloud page_**](https://www.soundcloud.com/treblesandblues)_._








