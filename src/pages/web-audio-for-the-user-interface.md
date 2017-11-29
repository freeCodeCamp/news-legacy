---
author: Nick Frazier
authorTwitter: https://twitter.com/nrf
authorFacebook: https://facebook.com/10207644822391305
title: "Jazz up your user interface with web audio"
subTitle: "When people my age hear the phrase “web audio”, they probably think of Geocities sites of the 90’s with irritating sound loops playing in..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*gP_PX-doi7ZB6_UDKkNwtg.jpeg
url: https://medium.freecodecamp.org/web-audio-for-the-user-interface-1592687f898c
id: web-audio-for-the-user-interface-1592687f898c
date: 2016-08-14T00:00:00.000Z
tags: [
  "JavaScript",
  "Web Development",
  "Web Audio Api",
  "UI",
  "UX"
]
---
# Jazz up your user interface with web audio







![](https://cdn-images-1.medium.com/max/2000/1*gP_PX-doi7ZB6_UDKkNwtg.jpeg)







When people my age hear the phrase “web audio”, they probably think of Geocities sites of the 90’s with irritating sound loops playing in the background.

The possibilities then were limited, and sound was quickly abandoned as a component of most web experiences. Other than the occasional “experimental” site or band page, sound on the web since then has been the exception rather than the rule.

Web audio has come a long way since then, though. With these advances we now have the opportunity to start looking at sound as a real possibility for the web.

And not just for media-heavy sites. Video game designers have for years understood the value of sound design in even the most mundane menus and user interface interactions. See for example the rich sound design of the [Destiny character menus](https://www.youtube.com/watch?v=W17KKFf9GRE).

While web interactions are not quite the same, with the continued emphasis on the user experience there is every reason to consider engaging the auditory sense as part of the package.

That doesn’t mean we should start adding firework blasts and blaring trumpets to our landing page just because we can. [Unexpected and unwanted sound is a deal-breaker](http://webpropelled.com/2012/5-reasons-your-website-should-never-autoplay-sound/).

So the first question to ask may well be, “Do my users expect sound?” In the case of a game, music, or similar site, they probably do. If so, adding sound to your user interface could be a welcome area of development. (You still probably want to add a master mute button, though.)

It is with this frame of mind that I began to explore the addition of subtle sound design into some of my web user interfaces. I had a few goals:

*   The ability to play a sound on an event (e.g. rollover, click)
*   Good performance, low latency
*   Good browser coverage
*   Few to no distracting side effects or annoyances (to avoid Geocities syndrome)

What follows is an overview of the best practices I’ve come across during my experimentation, based on the current state of the web.

Keep in mind that audio on the web is still a relatively unexplored territory, so there is still much to create and discover in the field.











* * *







#### The HTML Audio Element

Up until the advent of HTML5, audio on the web was best described as “primitive.” The only way to incorporate sound into a site was with a plug-in like Flash.

HTML5 brought with it the __ tag — a modest but important step up. This tag was designed to allow developers to easily stream sounds and music right from the page with one line of code. Simple controls could be embedded by [adding one attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio):

<pre name="a6a9" id="a6a9" class="graf graf--pre graf-after--p"></audio></pre>

The result:





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/14e7b94c84cda3eac03d33dfdc9615cc?postId=1592687f898c" data-media-id="14e7b94c84cda3eac03d33dfdc9615cc" allowfullscreen="" frameborder="0"></iframe>





By itself, the usefulness of this tag is limited. But HTML5 also introduced a JavaScript API, [HTMLAudioElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement), that provides the ability to programmatically play sounds.

Adding sounds to events using this interface looks like this:

<pre name="46a7" id="46a7" class="graf graf--pre graf-after--p">function playSound () {   
  document.getElementById(“snare”).play();   
}</pre>

This allows you to trigger a sound using JavaScript.

Here’s an example of this in use:





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/5804c7f9cd44ba22002764092b3617aa?postId=1592687f898c" data-media-id="5804c7f9cd44ba22002764092b3617aa" allowfullscreen="" frameborder="0"></iframe>





Try clicking twice, though, and you will immediately experience one of the major drawbacks to HTML audio.

With HTML audio, playing a sound more than once is tricky. If you used only the _play()_ function and one source, the browser will wait until it finishes playing the sound before it allows you to trigger another sound. In fact, even with multiple sources, HTML audio has limited ability to play several sounds at once.

One trick I found to enable faster triggering (using only one source) is to always stop the sound before playing it. Note the API doesn’t include a “stop” function, but reloading the file does the trick:

<pre name="9fe9" id="9fe9" class="graf graf--pre graf-after--p">function playSound () {   
  document.getElementById(“snare”).load();  
  document.getElementById(“snare”).play();  
}</pre>

Now we should be able to hit those rapid fire snares like the next 9th Wonder:





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/f0a6665375785177955ad903cec210bb?postId=1592687f898c" data-media-id="f0a6665375785177955ad903cec210bb" allowfullscreen="" frameborder="0"></iframe>





Choosing the best audio format for web use was once a tricky task. Cross-browser compatibility of formats was all over the place. You usually had to have multiple versions of the same files, with different extensions, at the ready to be prepared for whatever browser your site might encounter.

Now it’s simpler: use MP3s.



![](https://cdn-images-1.medium.com/max/1600/0*WdCSk691xrcoiVab.jpg)

Current browser coverage for the mp3 format, from [caniuse.com](http://caniuse.com/#feat=mp3)



Other than Internet Explorer 8 (which is all but dead) and Opera Mini (which doesn’t support audio anyways), MP3 files should work just about anywhere.

They’re also compact. If all you have are wav files or some other format, go ahead and use a conversion utility (I use [MH Audio Converter](http://www.mediahuman.com/audio-converter/)) and get everything standardized to mp3.











* * *







#### Web Audio API: A Giant Leap

HTML audio provides a passable solution to sound. Particularly, I found that using it through a JavaScript library called [Buzz](http://buzz.jaysalvat.com/) made it a flexible and simple option.

But there are still numerous drawbacks:

*   Playing multiple sounds in quick succession is a subpar experience
*   The ability to manipulate the sound is limited
*   Syncing sounds is a pain

Enter the [Web Audio API.](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) Web Audio is the proper successor to HTML Audio, and solves some of the problems of the latter while also adding a vast amount of flexibility.

With Web Audio, developers now have a robust set of tools to create sound engines on the level of platform games and pro software synthesizers.

Using Web Audio instead of HTML Audio, we can create a button click sound that layers on top of itself rather than clipping, as this visualization demonstrates:





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/b333257058a84f16f3668d96d4f07cfd?postId=1592687f898c" data-media-id="b333257058a84f16f3668d96d4f07cfd" allowfullscreen="" frameborder="0"></iframe>





There are a couple catches, though, one of which I ran up against immediately: Web Audio is complicated. If you crack open one of the many excellent API tutorials online (I recommend Boris Smus’s book [Web Audio API](http://chimera.labs.oreilly.com/books/1234000001552), the entire text of which is available for free on the O’Reilly site), the first thing you’ll notice is that merely playing a single sound can require a couple dozen lines of code.

The solution I found to this is [SoundJS](http://www.createjs.com/soundjs). SoundJS, part of the CreateJS suite of tools, is a powerful sound library with a gentle learning curve. Part of its power is in abstracting away many of the details of the lower level audio APIs, such that the same code can be run on HTML Audio, Web Audio, or even Flash audio, depending on what the user’s browser supports.

But I’ve found that where it really excels is in its handling of Web Audio. Now instead of writing a page of code to play a sound, you can write this:

<pre name="6d52" id="6d52" class="graf graf--pre graf-after--p">function loadSound () {   
  createjs.Sound.registerSound(“snare-2.mp3”, soundID);   
} </pre>

<pre name="bd40" id="bd40" class="graf graf--pre graf-after--pre">function playSound () {   
  createjs.Sound.play(soundID);   
}</pre>

Try it out and listen to the difference (and sonic improvement):





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/2831e5f0cf122f8a053ee359b5950671?postId=1592687f898c" data-media-id="2831e5f0cf122f8a053ee359b5950671" allowfullscreen="" frameborder="0"></iframe>





The other major catch is that the Web Audio standard is still in flux — it’s currently a working draft, and there is no support in Internet Explorer.



![](https://cdn-images-1.medium.com/max/1600/0*X_2zqf2P5wZ1Rp-w.jpg)

Current browser coverage for the Web Audio API, from [caniuse.com](http://caniuse.com/#feat=audio-api)



At a finer grain, there are currently some additional limitations to audio in general, most notably on mobile devices:

*   With iOS devices, sound is initially locked and will not play until a user-initiated event occurs. This is apparently a measure to reduce bandwidth.
*   With Android devices, there is no control over audio volume, and you can only play audio as part of a user-initiated event.

These limitations may not matter as much with the click events, like I’ve demonstrated so far, but they may come into play once more sophisticated UI sound design is employed. Which brings us to our last step.











* * *







#### Going Further with Web Audio

When I started thinking about “UI Sound Design,” my first thought was click events. But once that was solved, I wondered about other possibilities. What about rollover events? Or scroll events? Or something completely different? With Web Audio, I’ve found that there are a world of possibilities.

Web Audio allows you to add several different types of pro-level effects to your audio chain. For example:

*   [BiquadFilterNodes](https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode) can be used as highpass/lowpass/notch filters
*   [ConvolverNodes](https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode) can be used for reverb
*   [DelayNodes](https://developer.mozilla.org/en-US/docs/Web/API/DelayNode) can be used for delay effects
*   [StereoPannerNodes](https://developer.mozilla.org/en-US/docs/Web/API/StereoPannerNode) allow for panning left and right
*   [AnalyserNodes](https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode) enable data analysis and visualization

What if, I thought, you used a BiquadFilterNode in conjunction with an event handler that tracks mouse proximity to a button? You could change a sound based on how close to the button your mouse pointer is. [Moog-style filter sweeps](https://www.youtube.com/watch?v=HieClHTxid0) in your UI — how cool would that be?

It turns out that SoundJS makes this, too, relatively easy (although tweaking the library’s Web Audio context is not as well documented as the rest of the API). Using some of the more [advanced](http://createjs.com/docs/soundjs/classes/WebAudioPlugin.html) parts of the API, I found that you can “insert” a filter into SoundJS’s Web Audio setup, and fiddle to your heart’s content. Adjust the filter based on mouse movements, and voila, a proximity filter:





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/80d3a97c2ca6a26b46cd1d7e8e731662?postId=1592687f898c" data-media-id="80d3a97c2ca6a26b46cd1d7e8e731662" allowfullscreen="" frameborder="0"></iframe>





If you want to experiment yourself, check out the SoundJS code in the [above pen](http://codepen.io/fraziern/pen/oLVvdg). The proximity algorithm is based on [this](https://css-tricks.com/snippets/jquery/calculate-distance-between-mouse-and-element/) CSS-Tricks snippet from Chris Coyier.











* * *







#### The Sky’s the Limit

With Web Audio, web developers seem to finally have a deep and powerful toolbox for designing and manipulating audio. It’s also ripe for developing new ideas and techniques, as it’s really just beginning to be incorporated into modern web user experiences.

My own explorations scratch the surface. I’m continuing to search for new ways to engage others with sound, and I look forward to seeing where things go next.











* * *







#### Additional Resources

[SoundJS Visualizer Demo](http://createjs.com/demos/soundjs/webaudionodeinsertion): The source code for this demo is the best resource if you want to start pulling apart the SoundJS Web Audio graph

[Designing Sound](http://designingsound.org/): Sound design inspiration from the masters.

[Chrome Experiments](https://www.chromeexperiments.com/): Another amazing collection of design (both visual and auditory) inspiration.











* * *







_A version of this story was originally published at_ [_fraziern.github.io_](https://fraziern.github.io/javascript/audio/ui/2016/08/14/js-sound-libraries.html) _on August 14, 2016._








