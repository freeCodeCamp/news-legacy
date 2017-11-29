---
author: Terren Peterson
authorTwitter: https://twitter.com/Terren_in_VA
authorFacebook: https://facebook.com/10154025468377615
title: "How to design and code Alexa skills for Amazon’s Echo Show"
subTitle: "I’m an Amazon Alexa Developer Champion, and have published more than a dozen skills on the Alexa platform. This includes award winning sk..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*KRRLBF8gmJJgSI2OuvSNRQ.jpeg
url: https://medium.freecodecamp.org/how-to-design-and-code-alexa-skills-for-amazons-echo-show-c5716da8fee5
id: how-to-design-and-code-alexa-skills-for-amazons-echo-show-c5716da8fee5
date: 2017-07-03T04:46:54.099Z
tags: [
  "Technology",
  "Amazon Echo",
  "Programming",
  "Startup",
  "Design"
]
---
# How to design and code Alexa skills for Amazon’s Echo Show







![](https://cdn-images-1.medium.com/max/2000/1*KRRLBF8gmJJgSI2OuvSNRQ.jpeg)

Photo by [Scott Webb](http://unsplash.com/photos/DJ_kOgH5u0o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)







I’m an [Amazon Alexa Developer Champion](https://developer.amazon.com/alexa/champions/terren-peterson), and have published more than a dozen skills on the Alexa platform. This includes award winning skills like [Hurricane Center](https://read.acloud.guru/amazon-alexa-analytics-2355c359933b), [Scavenger Hunt](https://devpost.com/software/scavenger-hunt-ebvrck), and [Robot Roxie](https://www.hackster.io/contests/alexa-raspberry-pi).

The latest device added to the Amazon Echo family features a screen that complements its audio experience. It’s called the Echo Show, and [here are the hardware specifications](https://www.amazon.com/dp/B01J24C0TI#tech). It features a 7" touchscreen display, a 5 Mega-pixel camera, and dual 2 inch stereo speakers.

In this article, I’ll show you how to design and code a new Alexa skill that takes advantage of this new hardware.

### Major Upgrades to the Software Platform

These hardware improvements required an upgrade to the underlying software running the platform. The Alexa Skills Kit (ASK) introduced a major release to power the added screen features. This is the largest set of enhancements to the ASK since the platform launched.

#### Background on Skill Building

If you’re not familiar with developing Alexa applications — called “Skills” — here’s a brief overview.



![](https://cdn-images-1.medium.com/max/1600/1*l8Rl3UtrzvTagkgOYJZnEw.png)



*   A custom voice application interfaces with the natural language processing engine. This interprets audio commands provided by the user. Each application includes a customized intent model to direct the skills messages. A set of sample utterances train the voice recognition models which intent in the model to use.
*   A unique API receives all messages for the custom skill. Alexa requires a RESTful interface to be specified in the custom voice application. The skill author writes the API, and chooses the hosting platform. The preferred hosting platform is the AWS service Lambda. This is due to the slick compatibility of the security model across Amazon and low hosting costs. The API call contains a standard set of attributes relating the call made by the device. This contains data around the current invocation of the skill.

Here is an example of a request to the Hurricane Center skill API:

<pre name="27dd" id="27dd" class="graf graf--pre graf-after--p">{  
  "session": {  
    "sessionId": "SessionId.5725be2d-99f8-4afd-909f-1f1d3882067a",  
    "application": {  
      "applicationId": "amzn1.echo-sdk-ams.app.709xxx"  
    },  
    "attributes": {},  
    "user": {  
      "userId": "amzn1.ask.account.AFP3xxx"  
    },  
    "new": true  
  },  
  "request": {  
    "type": "LaunchRequest",  
    "requestId": "EdwRequestId.260fd856-668f-4dd2-af9d-60d80e4cc8e0",  
    "locale": "en-US",  
    "timestamp": "2017-07-02T00:54:57Z"  
  },  
  "version": "1.0"  
}</pre>

The API for the custom skill processes the request, and responds with values for the Alexa device. The message model returned is a standard set of attributes, and written in JSON. The Alexa voice on the device reads the outputSpeech attribute.

Here is an example the corresponds to the call made to Hurricane Center skill above:

<pre name="b8b4" id="b8b4" class="graf graf--pre graf-after--p">{  
 “version”: “1.0”,  
 “sessionAttributes”: {}  
 “response”: {  
     “outputSpeech”: {  
         “type”: “PlainText”,  
         “text”: “Welcome to the Hurricane Center, the best source for information related to tropical storms, past or present. There are no active tropical storms right now, but if you would like to learn more about storms, please say something like tell me a storm fact.”  
     },  
     “card”: {  
         “content”: “No Current Storms in either the Atlantic or Pacific Ocean.”,  
         “title”: “Welcome to Hurricane Center”,  
         “type”: “Simple”  
     },  
     “reprompt”: {  
         “outputSpeech”: {  
             “type”: “PlainText”,  
             “text”: “Please tell me how I can help you by saying phrases like, list storm names or storm history for 2013.”  
         }  
     },  
 },  
 “shouldEndSession”: false  
 }  
}</pre>

### What Changed for the Echo Show?

To leverage the new visual features of the Show, the model for the response expanded. The model now includes new attributes to use the new hardware features. The custom written API for the skill includes these attributes in its response.

New templates supporting different use cases for the screen are central to it. These templates enable the Show to augment the voice experience. Full detail on these changes is available on the [Amazon Developer website](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/display-interface-reference).



![](https://cdn-images-1.medium.com/max/1600/1*HXEEbWxI_dUUCM3JoTDUAA.jpeg)



#### Six visual templates to choose from

There are six templates available with the initial launch of the new ASK. Each template provides the ability to leverage the touch screen on the Echo Show. There are two types of templates. Four of them provide basic usage of the screen, the other two templates add the ability to manage lists of data. The skill developer selects which template is most applicable for each use case.

#### Echo Show supports basic HTML tagging

The Alexa platform already has a visual option before these changes. This is within the mobile application on your device pairs with — named the companion app. This performed initial setup and configuration by pairing with the device. Some skills use it to complement the voice first user experience. Here is what it looks like for Hurricane Center.



![](https://cdn-images-1.medium.com/max/1600/1*AZ5Cu5hXnLC3wLgo2K030Q.png)



The companion application has limits in how it can render information. All words on the screen are plain text. It does not support HTML, including changing the font type, font size, underlining, etc.

An optional small image displays on the screen that changes with each voice response. Usability on the app is poor when rendering a large amount of data given the clear text constraint. Usability is also poor when rendering lists of data which may be important to the narrative of the skill.

Within the templates of the new ASK, both simple text and basic HTML syntax are now supported. Pairing this with the list template provides a whole new level of user experience.

#### New intents to handle touch events

The screen on the Echo Show does more than act as a display, it also has touch sensors. Interacting with the screen creates events along with audible utterances. These include, back-button, right, left, etc. as the user can gesture with text and lists on the screen.

The device handles most of the new standard intents. They can be incorporated into your skill when rendering lists.

### Existing Skills work on the new Device

All 15,000 existing skills on the platform work with the Echo Show. They will use information that is currently rendered on the companion application. Here is an example with the Hurricane Center skill.





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/f1999617f6456cc6dbd0b5fc9549cc07?postId=c5716da8fee5" data-media-id="f1999617f6456cc6dbd0b5fc9549cc07" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FWsMZiIo6xlw%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





The skill works, but the usability of the screen is poor as the font is too large. The screen shows the same information that shared with the companion application. Without changes, it isn’t using a template, so there is no scrolling enabled in case the user wants to read the full text.

### Extreme Makeover — Echo Show Edition

Here are the steps required to take advantage of the new features in the ASK. These changes will leverage the hardware capabilities for users with an Echo Show.

#### Step 1 — Activate template feature for the skill

Activating it for a skill requires selecting a radio button on a new or existing skill. There is a new indicator to “Render Template”. Once it is set, the skill can now leverage the extra abilities of the Echo Show.



![](https://cdn-images-1.medium.com/max/1600/1*IocU0ynDy34VsyFyEXZq0Q.png)



#### Step 2 — Select a template, then add attributes to the API response

The ASK now contains templates outlining the visual patterns supported by the Echo Show. These map to different UI patterns, including displaying images and lists. There is good [reference documentation](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/display-interface-reference) on the Amazon developer website.

For my Hurricane Center skill, I’ve chosen to use the “BodyTemplate1” for the main display. This takes advantage of the ability to display a background image on the Show. It also renders an improved user experience for the textual response. Here are the new attributes to include to the existing JSON response.

<pre name="1920" id="1920" class="graf graf--pre graf-after--p">directives: [  
 {  
   type: “Display.RenderTemplate”,  
   template: {  
       type: “BodyTemplate1”,  
       token: “T123”,  
       backButton: “HIDDEN”,  
       backgroundImage: {  
           contentDescription: “StormPhoto”,  
           sources: [  
               {  
                  url: “[https://s3.amazonaws.com/hurricane-data/hurricaneBackground.png](https://s3.amazonaws.com/hurricane-data/hurricaneBackground.png)”  
               }  
           ]  
      },  
      title: “Hurricane Center”,  
      textContent: {  
          primaryText: {  
              text: cardInfo,  
              type: “PlainText”  
          }  
      }  
  }  
}],</pre>

The background image used matches the dimensions of the Echo Show — 1024 x 600 pixels. Hosting images follows the same pattern as with the companion application. The image object needs to be accessible from the internet without any authentication.

#### Step 3 — Publish a new version of the skill

Rendering templates changes the skill, requiring to go through the certification process again. It doesn’t need publishing a separate skill for the new device. This means all the prior ratings and users that have enabled it on their accounts will carry forward. Test the skill on other devices to make sure that nothing broke.

### New Version of the Skill

Here is what the hurricane skill looks like after the work described above.





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/c52a43612acd0dda32b27790836df7f9?postId=c5716da8fee5" data-media-id="c52a43612acd0dda32b27790836df7f9" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FRoI9Z1TZ6hU%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





The photo now appears as a background image rather than the default canvas. The text intended for the companion application renders on the Echo Show screen. The font size is appropriate, in a readable format. This is a major improvement in usability, with not a significant effort in coding.

### Backwards Compatibility for all Devices

We want the skill to continue to work for existing devices given that the Echo Show is new. That requires a little extra logic when formatting the response in the API. The interface contract requires the API provide only attributes readable by the device. This means extra attributes intended for the Echo Show creates errors when sent to an earlier Echo.

Stopping this error requires interpreting the context section of the native request object. This section provides information about the device, including if it contains a display. This attribute is only present with an Echo Show. If this attribute is not present, the API excludes the directives attribute. Here is a sample of a request from the Hurricane Center skill generated by an Echo Show.

<pre name="ba17" id="ba17" class="graf graf--pre graf--startsWithDoubleQuote graf-after--p">“context”: {   
    “AudioPlayer”: {   
        “playerActivity”: “STOPPED”   
    },   
    “Display”: {   
        “token”: “T123”   
    },   
    “System”: {   
        “application”: {   
            “applicationId”: “amzn1.echo-sdk-ams.app.709xxx”   
        },   
        “user”: { “userId”: “amzn1.ask.account.AFP3xxx” },   
        “device”: {   
            “deviceId”: “amzn1.ask.device.AFAQxxx”,  
            “supportedInterfaces”: {   
                “AudioPlayer”: {},   
                “Display”: {   
                    “templateVersion”: “1.0”,   
                    “markupVersion”: “1.0”   
                },   
            “VideoApp”: {}   
        }   
    },  
}</pre>

In the example above, the System.device.supportedInterfaces.Display attribute exists, indicating that the request is originated by an Echo Show. Here is the request from the same skill generated by an Echo Dot.

<pre name="e80a" id="e80a" class="graf graf--pre graf--startsWithDoubleQuote graf-after--p">“context”: {   
    “AudioPlayer”: {  
        “playerActivity”: “IDLE”   
    },   
    “System”: {   
        “application”: {  
            “applicationId”: “amzn1.echo-sdk-ams.app.709xxx”   
        },   
        “user”: { “userId”: “amzn1.ask.account.AFP3xxx” },   
        “device”: {   
            “deviceId”: “amzn1.ask.device.AFAQxxx”,   
            “supportedInterfaces”: {   
                “AudioPlayer”: {}   
            }   
        },   
        “apiEndpoint”: “https://api.amazonalexa.com”   
    }   
}</pre>

In the second example, there are no display attributes. That’s easy to recognize, and now reflected in my skill.

### What’s Next?

It’s amazing the speed at which the platform is growing. There are now 15,000 custom skills available for users to try out. The hardware options are enabling even deeper user experiences. I will be spending the next few months porting over my skills to the new platform. Hope this helps updating yours!








