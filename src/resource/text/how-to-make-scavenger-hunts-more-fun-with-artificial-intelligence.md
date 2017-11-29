---
author: Terren Peterson
authorTwitter: https://twitter.com/Terren_in_VA
authorFacebook: https://facebook.com/10154025468377615
title: "How to Make Scavenger Hunts More Fun with Artificial Intelligence"
subTitle: "Scavenger hunts have existed for generations. The traditional game goes something like this:..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*sM91z7-6k4OUh646nX8Pwg.jpeg
url: https://medium.freecodecamp.org/how-to-make-scavenger-hunts-more-fun-with-artificial-intelligence-74a184f3db33
id: how-to-make-scavenger-hunts-more-fun-with-artificial-intelligence-74a184f3db33
date: 2017-04-17T15:53:47.074Z
tags: [
  "Technology",
  "Artificial Intelligence",
  "Startup",
  "Game Development",
  "AWS"
]
---
# How to Make Scavenger Hunts More Fun with Artificial Intelligence







![](https://cdn-images-1.medium.com/max/2000/1*sM91z7-6k4OUh646nX8Pwg.jpeg)







Scavenger hunts have existed for generations. The traditional game goes something like this:

*   a leader writes down a list of objects on a scrap of paper.
*   the teams then spend the afternoon searching the surrounding area — either outdoors or indoors — for those objects.
*   They cross items off the list as they find them, then continue until the list is complete.

Simple rules. But plenty of fun.

#### Modernizing the game with AI

I’ve written an app for Amazon’s Alexa platform that modernizes scavenger hunts. It leverages the latest available technology — including artificial intelligence tools like image and voice recognition.

The premise of the game doesn’t change: find ten random items located in your home — or around your neighborhood — within an hour. Except that it is Alexa who facilitates the game play.

My app is free to enable if you’re one of the millions of people who own an Amazon Alexa. The writeup below describes how each of the AI tools are leveraged, including new AWS services — Rekognition and Polly. The skill is called [Scavenger Hunt](https://www.amazon.com/Drawrz-com-Scavenger-Hunt/dp/B06ZZ6F91T/). Here’s a preview of how it works:





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/2b417d13b003a48e473356b92b2f7ae2?postId=74a184f3db33" data-media-id="2b417d13b003a48e473356b92b2f7ae2" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FzYkfrJ9udHg%2Fhqdefault.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





### Artificial Intelligence #1 — Alexa

Initiating the game starts by invoking the Alexa skill. Anyone with a device states the following request.

> Alexa, ask Scavenger Hunt to start a new game.

Any of the millions of Alexa owners can use their voice to make this request. Language is subtle. Word selection differs when this intent is made by different genders, age groups, ethnic and social demographics. It’s the power of Artificial Intelligence that deciphers these subtle differences of word choices and dialect into the simple request to begin the game.

#### How does the Game Work?

Play begins with your Alexa executing a variety of different technologies. Here’s the architecture of the various services and interfaces used:



![](https://cdn-images-1.medium.com/max/1600/1*vT25AhbVVvW6mJOXwHFZng.jpeg)



The Alexa platform handles the language processing, translating voice intent into tex. The [Lambda service](https://aws.amazon.com/lambda/) hosts the processing logic and the code is written in NodeJS. Tracking the game on the platform is through an unique, four digit game code given back to the user. The skill identifies which items to discover, and stores it in a record on a DynamoDB table.

The logic in Lambda also records the timestamp for when the game began. This acts as a virtual stopwatch counting down the sixty minutes to play the game in. At any time, the user can go back and ask Alexa for a score update. Alexa responds with the time remaining, and a current ledger of items being sought after.

### Artificial Intelligence #2 — Polly

I enjoy building a great voice user experience into my Alexa applications. Quality now differentiates games on this growing platform. This is critical given that there are now more than 10k Alexa skills to choose from.

Developing excellent voice user interfaces is like producing a radio broadcast. A great one generates more excitement than using a singular voice. It includes jingles, and sounds that simulate action. Writing these applications requires writing both code and an interesting story narrative.

Good stories are not monologues. This approach requires advanced coding to include more than one character. This is where I used the [Polly service](https://aws.amazon.com/polly/), complementing the standard Alexa voice. Here is what the “script” looks like for the introductory message. This plays when starting a new game, and shows how the components play off of one another.



![](https://cdn-images-1.medium.com/max/1600/1*4WXpanxtzbRhsHs7BbqtJQ.png)



Bringing in music requires recording short Mp3 clips that contain sounds and jingles. I record music on my desktop, then upload it into an S3 bucket. Next is how to have many voices within the skill, as Alexa has one. To create this audio experience, it’s a hybrid of techniques. Polly has the ability to generate 47 different voices in 24 different languages. It’s easy to use, and a short recording takes a few minutes. Start by going into the console and bring up the Polly service.



![](https://cdn-images-1.medium.com/max/1600/1*4so0tIiQ-VpLw0zi-8eFXQ.png)



There are many voices within the English language to choose from. I selected English, UK in the dropdown, and clicked the radio button for a Female voice named Amy. Next, I typed my script into the text box, and Polly converted this into speech. The option in the bottom right saves the recording into an Mp3 file. I staged the file into an S3 bucket where it is accessible to the Alexa skill.

#### Integrating Voices using SSML

The prior section described how to create the individual parts for the script. Now it’s time to pull them together. The Alexa platform requires that each skill has an API that conforms to a standard message model. In this model different attributes represent the characteristics of the user interaction. The audioOutput attribute of the response object is what Alexa reads back to the user.

To create the attribute with all four parts, you’ll need to create markup that looks like this:

<pre name="0fa8" id="0fa8" class="graf graf--pre graf-after--p"><speak>  
    
    
  Using natural Alexa voice requires no markup  
    
</speak></pre>

The markup points to each mp3 file staged in a publicly available location on the internet. This is also how a browser assembles images and text using HTML into a single pane of glass. Alexa does the same assembly of audio using SSML.

### Artificial Intelligence #3 — Rekognition

The game requires a scorekeeper, so another service plays this role. The brains behind our modern official is the [AWS Rekognition service](https://aws.amazon.com/rekognition/). This scans images, identifying all items that are visible, and tracking it for the game. Here are specifics on the supporting technology.

#### Event Driven Image Processing

Images upload to an S3 bucket via the scavengerskill.com website. The bucket is setup to trigger an event for each new object added. This event executes a Lambda function, calling the Rekognition API to scan the image. The response from the API call contains the detected items. The function writes the detail to a DynamoDB table, making it available to the Alexa skill.



![](https://cdn-images-1.medium.com/max/1600/1*vhHY-KONpFYYCroJjTXC-Q.png)



For example, here is a photo from a game and the corresponding response from the Rekognition API.



![](https://cdn-images-1.medium.com/max/1600/1*LXw2RttveXJpxWz_EIhE3A.jpeg)



<pre name="6014" id="6014" class="graf graf--pre graf-after--figure">{  
 “captureDt”: “2017–04–16”,  
 “captureTm”: “21:45:40”,  
 “gameId”: “9180”,  
 “imageId”: “9180/upload_13277b04a3c001948f3e570580f377c4.JPG”,  
 “labels”: [  
   { “Confidence”: 98.8132629395, “Name”: “Couch” },  
   { “Confidence”: 98.8132629395, “Name”: “Furniture” },  
   { “Confidence”: 85.2093963623, “Name”: “Lamp” },  
   { “Confidence”: 85.2093963623, “Name”: “Table Lamp” },  
   { “Confidence”: 83.6216506958, “Name”: “Coffee Table" },  
   { “Confidence”: 83.6216506958, “Name”: “Table" },  
   { “Confidence”: 66.3723068237, “Name”: “Dining Table” },  
   { “Confidence”: 54.6450958252, “Name”: “Hardwood” },  
   { “Confidence”: 54.6450958252, “Name”: “Wood” },  
   { “Confidence”: 52.6244163513, “Name”: “Beverage” },  
   { “Confidence”: 52.6244163513, “Name”: “Drink” },  
   { “Confidence”: 52.0414428711, “Name”: “Lampshade” },  
   { “Confidence”: 50.595413208, “Name”: “Dining Room” },  
   { “Confidence”: 50.595413208, “Name”: “Indoors” },  
   { “Confidence”: 50.595413208, “Name”: “Room” }  
 ]  
}</pre>

The response contains an array of labels applicable to the photo, and a confidence interval for each. In this game I was looking for a “Lamp” and the service identified it being in the photo with 85% certainty. The scorekeeper credited me for finding it!

#### Amazon Commoditizes Image Processing

The value of the Rekognition service is its simplicity. Amazon has already trained the machine learning models to recognize many objects. All I need to do to use the service is to call the API with the address of the object I want scanned. That’s making a very powerful service simple, and inexpensive. If I scan 1,000 images, it costs me $1\. This enables me to focus on creating the user experience, including exciting gameplay.

### Conclusion

I enjoy playing this modern version of scavenger hunter with my family. It’s fun to run around the yard taking pictures of things in the house and neighborhood, then checking back in with Alexa on what items it matches. Please give it a try and let me know what you think!

> “Oh, the places you’ll go! There is fun to be done!  
> There are points to be scored. There are games to be won.  
> And the magical things you can do with that ball  
> will make you the winning-est winner of all.”

> — **Dr. Seuss**, **Oh, The Places You’ll Go!**








