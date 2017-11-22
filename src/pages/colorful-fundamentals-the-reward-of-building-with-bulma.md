---
author: Henrik Ståhl
authorTwitter: https://twitter.com/H_Stahl
authorFacebook: https://facebook.com/10154956111991164
title: "My Journey into the Bulma CSS Framework"
subTitle: "I recently decided to try out a CSS framework. As a journalist, I’ve been taught to work from the ground up, do things thoroughly, and ne..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*_NUWv4R8wXKkd2SO9OYzyw.jpeg
url: https://medium.freecodecamp.org/colorful-fundamentals-the-reward-of-building-with-bulma-7b14883317bd
id: colorful-fundamentals-the-reward-of-building-with-bulma-7b14883317bd
date: 2017-07-25T20:31:44.906Z
tags: [
  "Web Development",
  "Bulma",
  "CSS",
  "Tech",
  "Web Design"
]
---
# My Journey into the Bulma CSS Framework







![](https://cdn-images-1.medium.com/max/2000/1*_NUWv4R8wXKkd2SO9OYzyw.jpeg)

Photo by [Alice Achterhof](http://unsplash.com/photos/FwF_fKj5tBo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)







I recently decided to try out a CSS framework. As a journalist, I’ve been taught to work from the ground up, do things thoroughly, and never “borrow” stuff from others (in the news industry, that’s considered plagiarism). Therefore I’ve been kind of reluctant to use frameworks since starting my [coding journey](https://news.maythecode.com). Simply because I felt that it would be like cheating, if you know what I mean.

I couldn’t have been more wrong.

First things first. After experimenting a little bit on my own with video as fullscreen background — a very fun and interesting challenge, by the way — I wanted more actual content to work with before diving head first into [Bulma](http://bulma.io), a modern framework based on Flexbox created by [Jeremy Thomas](https://medium.com/@jgthms).

That’s why I eventually decided _not_ to experiment with Bulma on my [May The Code](http://maythecode.com) website.

Instead, I chose to redesign a website I created for my now defunct Swedish rock band [Evangeliet](http://play.spotify.com/album/2bXUzHUmEZpXpTc6mNbQgH) (we’ve been on a hiatus since 2014).

In this story, I will tell you why I felt bullied by PHP, how I failed and failed again despite reading through the documentation over and over, and what I finally learned by screwing everything up.

### The New Front Page

I had already implemented a first iteration of a front page with fullscreen video as background and a simple nav bar, so the first thing I did was to replace my somewhat ugly navigation bar with a Bulma navigation.

Adding the nav wasn’t particularly hard. At least not after reading the [documentation](http://bulma.io/documentation/components/navbar/) a bunch of times. But the fullscreen video as background was a bit trickier. After some fruitless experimentations with different Bulma layout elements, such as `.hero` and `.container is-fluid`, I created a custom CSS to handle the fullscreen background:







![](https://cdn-images-1.medium.com/max/2000/1*mV2F76M5DzpY_ZTdJmgJzA.jpeg)

My custom CSS.







It worked! At least on desktop. As soon as I grabbed my phone to check it out on a smaller viewport, I quickly found out that I had been brutally punished by my outdated desktop-first approach:







![](https://cdn-images-1.medium.com/max/2000/1*Vuihwav1Ku21bejuj0Q6yg.png)

The GIF image I made didn’t override the video on mobile.







And as you can see, I accidentally put the nav bar and the fullscreen background video in separate `sections` in the HTML document, resulting in the former being detached from the latter.

I was nevertheless motivated to move forward, so I left it the way it was for the time being.

### The Audio Page

Next, I wanted to create a neat audio page. The page itself is pretty straightforward: it’s [composed of](https://medium.com/backchannel/meet-the-ultimate-wikignome-10508842caad) three album “blocks” with Spotify lists. First, I created a `fluid container` with an image:

<pre name="805d" id="805d" class="graf graf--pre graf-after--p">  
    
    <img src="[/smoke.jpeg](http://evangelietband.se/smoke.jpeg)" alt="Evangeliet">  
    
</pre>

Then, I scanned the Bulma [documentation](http://bulma.io/documentation/components/card/) in the hopes of finding a component that would fit my need. I eventually settled on a `card`:

<pre name="d1de" id="d1de" class="graf graf--pre graf-after--p">  
            
              
              <img src="[/Konturen.jpeg](http://evangelietband.se/Konturen.jpeg)" alt="Konturen av en dröm">  
              
            
            
              
                
                
                
                <p class="title is-4">Konturen av en dröm</p>  
                <p class="subtitle is-6">2013</p>  
                
            </pre>

I then nestled a `.card-content` class inside the `card` component:

<pre name="9b10" id="9b10" class="graf graf--pre graf-after--p">  
              <iframe src="[https://open.spotify.com/embed?uri=spotify:album:2bXUzHUmEZpXpTc6mNbQgH&theme=white](https://open.spotify.com/embed?uri=spotify:album:2bXUzHUmEZpXpTc6mNbQgH&theme=white)" width="100%" height="380" frameborder="0" allowtransparency="true"></iframe>  
              <br>  
              <small> 0885014300335</small>  
              <small> RU 27130</small>  
              <br>  
              <small> 18 Dec 2013</small>  
              
            
        </pre>

To get a nice [Spotify player](https://developer.spotify.com/technologies/widgets/spotify-play-button/), I fetched an embed code from the [Spotify Developer](https://developer.spotify.com) docs. (I changed the width from `300px` to `100%`, and the theme from default black to white, which suits my design better.)

I created three cards, added some album info, and bundled them with `column` elements. The result was pleasing:



![](https://cdn-images-1.medium.com/max/1600/1*kLB2DmPhGNFWJcwlQ-73lQ.gif)



### The Image Grid

After that, I wanted to create some sort of page containing pictures of the band. I wanted something more challenging than a standard “band member biographies” page, which wouldn’t have differed all that much from the audio page.

I scanned the [documentation](http://bulma.io/documentation/grid/tiles/) once again and decided to do something with the `tiles` element. This element is

> “[a] **single tile** element to build 2-dimensional Metro-like, Pinterest-like, or whatever-you-like grids.”

I read and contemplated the docs over and over, and reached a conclusion: since I still consider myself a markup beginner, I needed to do some hands-on experimentation in order to wrap my head around the Bulma tiles. Because reading… well, it didn’t get me anywhere.

So I basically copy-pasted one of the examples from the docs and altered the content. I flipped stuff around, effectively breaking _everything_. Learning by screwing up, right? :)

After messing around with the different classes, I opted for a 3 column grid structure, composed of various tile elements. Here’s an example of the markup:

<pre name="87a9" id="87a9" class="graf graf--pre graf-after--p">  
          
            
              
              Molotov Studios 2010\. Inspelningen rattades av Martin Karlsson.  
                
              
          </article>  
          
          
            
            <p class="title">Stadsmissionen</p>  
            <p class="subtitle">2009</p>  
              
              Evangeliet fortfarande en duo.  
                <br>  
                FOTO: Noelia Ivars Rico  
                
              
          </article>  
          
          
            
              
                
              
          </article>  
          
      </pre>

The example above is the **three top images** on the webpage. The structure of the `tile boxes` on the page are more or less the same as in the docs, except for the fact that I added images in all boxes except one. Also, I inserted `column elements` and added three images in one of the boxes.

Which required a bit of patience, given the fact that:

1.  I still get dizzy quite easily by all the tags and end tags when nesting stuff, and
2.  I wasn’t aware of the visual feature in [Atom](http://atom.io) highlighting opening and closing HTML tags. 🤷🏽‍

I could have gone for either of the different structures I tested during the experimental phase, but I considered the layout provided in the Bulma docs the best fit. Why fix something that isn’t broken?

And honestly, I like the fact that the mobile users see a few images _before_ getting to the text chunk. That’s why I switched back to the current structure after initially mirroring the 2nd column and placing its five boxes in the top of the page, effectively positioning the tall vertical box in the top left corner on desktop.



![](https://cdn-images-1.medium.com/max/1600/1*dj4KqtJZ0PGAL3PJ-TCFUQ.gif)



### The Contact Page

Last but not least, I wanted a contact page. With an email form and everything.

Again, the [documentation](http://bulma.io/documentation/elements/form/) provided everything I needed in terms of markup. A no-brainer. Fortunately, I had already tried to learn just a tiny bit of PHP with the sole purpose of creating an online form (for a different website though).

And I had failed. Hard.

I don’t know why other people seem to hate PHP, I guess it’s for various reasons. But I do know that personally, I dislike PHP because I felt bullied by it.

It felt like I’d tried _everything._ I read a bunch of blog posts and worked through the entire [W3Schools](https://www.w3schools.com/pHp/default.asp) tutorial. But I still didn’t grasp a fraction of PHP.

Anyway, during my short stint as a PHP marauder, I stumbled upon [Formspree](https://github.com/formspree/formspree), an online form service created by [Rohit Datta](https://medium.com/@RohitDatta).

As I had previously used Formspree both on the [May The Code](http://maythecode.com) website _and_ the[Check Your Facts](http://checkyourfacts.eu) website with great results, I knew that it would work for my band’s website as well.

I added the `field` and `label` classes needed, as well as the required `form action=”https://formspree.io/xx@xx.se" method=”POST"` class — and that was it!

After submitting the form and confirming my email, everything worked like a charm.



![](https://cdn-images-1.medium.com/max/1600/1*n1mwqpE8ZOXaMTfqUupSyA.gif)



I fixed the size of the form on desktop with a few lines of CSS in my custom stylesheet, but not until way later. The form was up and running and I was happy.

#### What about the 🍔?

Now I was left with just one challenge: how can I make the hamburger menu on mobile actually work? 🤔

The Bulma documentation provided markup only. The functionality itself was up to me to fix.

Since then, Jeremy has updated the docs and replaced the old `nav` component with the new `navbar` component. Here’s an example of the old one:

<pre name="d0a3" id="d0a3" class="graf graf--pre graf-after--p"><!-- This "nav-toggle" hamburger menu is only visible on mobile -->  
  <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->  
    
      
      
      
    

  <!-- This "nav-menu" is hidden on mobile -->  
  <!-- Add the modifier "is-active" to display it on mobile -->  
    
      
      Home  
      
      
      Documentation  
      
      
      Blog  
    </pre>

I’ve gained a lot of ground in the few months, but I’m not yet comfortable enough with HTML and CSS to make the leap to real programming, so I really wanted to make this work without diving into the vast sea of JavaScript.

I had no idea how.

That’s why I opted for a horizontal menu bar all the way down to the smallest viewports, after what felt like hours of investigations. All I needed to do was add the `is-mobile` modifier to the `nav-item` class:

<pre name="55e8" id="55e8" class="graf graf--pre graf-after--p"><nav class="nav has-shadow">  
      
        
        Hem  
        Musik  
        Bandet  
        Kontakt  
        
  </nav></pre>

I could do this because my menu consisted of just four components: front page, audio page, band page, and contact page. Because of this, everything was visible — and accessible — even in smaller viewports.

A week or so later, I stumbled upon [this great thread](https://github.com/jgthms/bulma/issues/238) on GitHub. The user [rudedogg](https://github.com/rudedogg) had the exact same problem as I did. Many different solutions are provided in the thread, such as

> Yeah you simply need a JS event to handle the click and “add” or “remove” the ‘.is-active’-class on ‘#nav-menu’.

and

> React snippet (w/o jQuery) on an element with `className="nav-toggle" onClick={() => { let toggle = document.querySelector(".nav-toggle"); let menu = document.querySelector(".nav-menu"); toggle.classList.toggle("is-active"); menu.classList.toggle("is-active"); }}`

Nothing seemed to completely fill my need. Until I scrolled down and found this incredibly humble, short, and brilliant comment by [shaneturner](https://github.com/shaneturner):

> A bit more succinct on the nav item itself: ``

I’m in no position to determine if this is the best solution, neither if it’s actually better than any other suggestion in the GitHub thread. But I tried it out and it worked immediately, right out of the box.



![](https://cdn-images-1.medium.com/max/1600/1*sTXSRrS9KQks5yCstH3oHg.jpeg)

Photo by [Mike Wilson](https://unsplash.com/@mkwlsn?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge) on [Unsplash](https://unsplash.com/photos/vAqmcvSMWMU).



### Iterations

I was done. Mission complete.

It felt so good! Not only had I been able to build an entire website using Bulma — I had also learned a great deal about HTML and CSS scanning through the documentation and experimenting with the different elements.

What had first felt like a mountain to climb turned into a medium-sized hill, and here I was standing at the top.

I wasn’t fully satisfied though. Now I knew howto use Bulma to build a website, but the website I’d built wasn’t anyway near perfect. Next, I wanted to climb the next hill, the higher one, and come just a little bit closer to perfection. In other words: using Bulma to build a website I’m actually proud of.

And I did.

But that’s another story.











* * *







_Henrik Ståhl is a journalist with more than 15 years of experience, recently turned Product Owner at Bonnier News, working with the digital development of_ [_Dagens industri_](http://beta.di.se) _and_ [_Dagens Nyheter_](http://dn.se)_. He’s also co-founder of the podcast_ [_Check Your Facts_](https://medium.com/check-your-facts)_. On his spare time, he’s trying to learn programming. If you like this story, please hit the like button, and visit the Medium publication_ [_May The Code Be With Me_](https://medium.com/may-the-code-be-with-me)_!_








