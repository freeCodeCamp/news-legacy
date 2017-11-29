---
author: Terren Peterson
authorTwitter: https://twitter.com/Terren_in_VA
authorFacebook: https://facebook.com/10154025468377615
title: "I needed a guitar teacher. So I turned my Alexa into one."
subTitle: "Learning how to play guitar takes practice. A lot of practice. One of my self-improvement goals is to get better playing the guitar...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*-vVeRVJfQZb2IgpH2RBJyQ.jpeg
url: https://medium.freecodecamp.org/who-can-teach-you-the-guitar-better-youtube-or-alexa-96e8cef77470
id: who-can-teach-you-the-guitar-better-youtube-or-alexa-96e8cef77470
date: 2017-04-03T21:18:41.515Z
tags: [
  "Music",
  "Technology",
  "Tech",
  "Self Improvement",
  "Amazon Echo"
]
---
# I needed a guitar teacher. So I turned my Alexa into one.







![](https://cdn-images-1.medium.com/max/2000/1*-vVeRVJfQZb2IgpH2RBJyQ.jpeg)







Learning how to play guitar takes practice. A lot of practice. One of my self-improvement goals is to get better playing the guitar.

An area I’m working on now is finger positioning on the fretboard. This requires memorization of different patterns of where to touch the strings. Improvement takes frequent practice and coaching, but is quite rewarding.

Researching what’s available on the internet showed me many musicians lending a hand. A popular medium where they are sharing is YouTube. The video below has more than five million views, demonstrating the broad usage. The instructor steps through the basics of finger positioning and notes.





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/8ead75a94a431fe1203c9e5addfa58f3?postId=96e8cef77470" data-media-id="8ead75a94a431fe1203c9e5addfa58f3" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FvSakoBvdIvU%2Fhqdefault.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





These videos are great for getting started, but what gets lost is how to focus completely on the music. Focusing my attention on finger placement and note recognition is how I move forward.

I tried different YouTube artists in an attempt to find the perfect coach. The limitation I continue to run into is not the artist or the audio quality of the device. Rather the limitation is the medium itself of a video playing on my phone or laptop. When practicing, I never get any exercise correct in the first attempt. Given the interface of YouTube, it’s difficult to playback sections given that my hands are on my guitar.

### **So I built the Alexa Guitar Teacher Skill**

This highlights where interactive voice applications are better than traditional mobile platforms. A voice application doesn’t need use of your hands. Playback of a section requires my voice, and my hands stay on the guitar. For learners like me that need to repeat lessons to get them correct, being hands-free is a huge asset.

I tried out what was available in the skill store, but found skills that were very simplistic . Some didn’t even feature the sound of a guitar, rather a monotone voice giving instructions. So I did what any software engineer would do, and came up with one myself called “[Guitar Teacher](https://www.amazon.com/Drawrz-com-Guitar-Teacher/dp/B01N805N3E/ref=sr_1_1?s=digital-skills&ie=UTF8&qid=1489286872&sr=1-1&keywords=guitar+teacher)”.



![](https://cdn-images-1.medium.com/max/1600/1*ZjxeaGi4Js4i5UqxCh6KTQ.png)



The Alexa platform has the ability to interact with someone using only their voice. This frees up fingers to focus on playing the strings. Here’s a quick demonstration of the skill with some of the core features.





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/cf866de85685a8707f64268b83641f0d?postId=96e8cef77470" data-media-id="cf866de85685a8707f64268b83641f0d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FzQRTl1DxHb4%2Fhqdefault.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





### How does it work?

Despite what you see with most skills on the platform, Alexa can do more than speak words. More complex voice applications use a syntax known as SSML. This mixes together the machine voice with sounds that recorded to a Mp3 file.

Here’s the syntax required that uses Alexa to explain how to position your fingers to play a standard chord. This section of the code plays sound of the chord to reinforce what comes out of an actual guitar.

<pre name="ba4f" id="ba4f" class="graf graf--pre graf-after--p">{“outputSpeech”:   
{“type”: “SSML”,  
“ssml”:  
“<speak>  
Okay, let’s get started on how to play the chord C Major.  
  
<break time=\”1s\”/>  
Here are the finger positions. Your index finger will be on string 2 pressing down on fret 1.  
<break time=\”2s\”/>  
Your middle finger will be on string 4 pressing down on fret 2.<break time=\”2s\”/>  
Finally, your ring finger will be on string 5 pressing down on fret 3.  
<break time=\”2s\”/>  
Now go ahead and play the chord C Major.  
<break time=\”1s\”/>  
  
One more time.  
<break time=\”1s\”/>  
  
<break time=\”2s\”/>  
If you’re ready for another chord to learn, please ask for it now.  
For example, say Teach me how to play A Major.  
</speak>”  
}  
}</pre>

### Using visuals to complement the audio experience

A well written skill shares visuals by pushing cards to the companion app on the users phone or tablet. These visuals reinforce the audio delivered, and complement the content.

Below is an example of a card that displays how to position each finger on the guitar when playing a chord. The audio provides explicit details using voice instructions to the user. The visual reinforces the message using another medium. The diagram included is a standard notation used by guitar players.



![](https://cdn-images-1.medium.com/max/1600/1*XczNUsPCWSQHtJzPARL9zA.png)



There are also cards showing the location on the fretboard of different notes. Once again, this reinforces what is being described through the audio of the skill.



![](https://cdn-images-1.medium.com/max/1600/1*uG-tfMa6PvjSrDwT0yo6zQ.png)



These cards contain similar content to graphics embedded in YouTube videos.

One advantage is that these cards display salient information without using your hands. Rewinding the skill with to play back a previous session also replays the cards. Your voice completely drives the narration. No buttons, hand gestures, or mouse clicks hit the back button or similar actions. Fingers focus on plucking and pressing down strings to create music.

### What feature is Alexa missing?

It’s still early in the adoption of voice platforms. I’d expect to see more applications like mine that take advantage of the voice interface. Gaps exist where apps exclusive to a mobile device are superior.

One feature for Alexa is enabling the raw sound data from the microphones to the application. Today Alexa translates every sound directly to text. This limits the ability for the platform to listen to tones when I play the instrument. Helpful mobile apps validate the sounds played, and let the user know the correct tones.

### Feedback Welcome

If you’re an aspiring musician like me and have an Alexa device, please give the skill a try. Like all Alexa skills, it’s free to enable. It would be great to have some feedback on what’s useful and other features to add. I’m still learning the instrument, so I also welcome any advice on what’s missing from the skill.








