---
author: Abhinav Suri
authorTwitter: https://twitter.com/abhisuri97
authorFacebook: https://facebook.com/560187284137663
title: "Making the web more accessible with AI"
subTitle: "Most people see the Internet as a place full of text, images, and videos. But the Internet is something completely different for people w..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*tnrnBXhvdS4242CppvDIfQ.jpeg
url: https://medium.freecodecamp.org/making-the-web-more-accessible-with-ai-84598eebabdb
id: making-the-web-more-accessible-with-ai-84598eebabdb
date: 2017-08-28T12:59:40.044Z
tags: [
  "AWS",
  "Accessibility",
  "Web Development",
  "Machine Learning",
  "Technology"
]
---
# Making the web more accessible with AI







![](https://cdn-images-1.medium.com/max/2000/1*tnrnBXhvdS4242CppvDIfQ.jpeg)

A wine bottle covered in Braille







Most people see the Internet as a place full of text, images, and videos. But the Internet is something completely different for people who are visually impaired.

Screen readers, tools that read text and metadata on a web page, are limited. They only show one aspect of a web page — namely, the text on a website. Some developers do add descriptive captions to their images, but the vast majority do not.

According to the [World Health Organization](http://www.who.int/mediacentre/factsheets/fs282/en/), about 285 million people are visually impaired in the world. In the United States alone, 8.1 million people who use the internet are visually impaired.

So, I made a tool to help the visually impaired “see” the Internet, with the power of AI. I named it Auto Alt Text. It is a Chrome extension where users just right click on the image to get a description of the image. This is the first extension of it’s kind.

Check out the video below to see how it works.

You can also try the Auto Alt Text by downloading [it here](http://www.abhinavsuri.com/aat/).









<iframe data-width="854" data-height="480" width="980" height="551" src="https://medium.freecodecamp.org/media/18e3e0380a076799225aeb8a7f813b52?postId=84598eebabdb" data-media-id="18e3e0380a076799225aeb8a7f813b52" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fc1S4iB360m8%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



Demo of the chrome extension in action







### Why I made Auto Alt Text

I used to be one of those developers who didn’t add descriptions to web images. Accessibility was always a second thought for me. That was until I received the following email regarding [one of my projects](https://github.com/hack4impact/flask-base).







![](https://cdn-images-1.medium.com/max/2000/1*uYx_pi9vAI17mQ20D81ykw.png)

Email Text: “Hi Abhinav, I found your flask-base project and think it is definitely going to be a great fit for my next project. Thanks for working on it. I also just wanted to let you know that you should put some alt descriptions on your readme images. I’m legally blind and had a tough time making out what was in them :/ From REDACTED”







Before that time, I had put accessibility at the bottom of my to-do list. It was an after thought. But this email was a wake-up call for me. There are many individuals who need accessibility features to use the web, apps, projects, and more.

> “The web is replete with images that have missing, incorrect, or poor alternative text” — WebAIM (Center for Persons with Disabilities at Utah State University)

### Artificial Intelligence to the rescue

There are many ways to put captions on images. However, most share these disadvantages:

*   They are not responsive and take a long time to return a caption.
*   They are semi-automated. They rely on humans to manually place captions on images.
*   They are expensive to create and maintain.

By creating a neural network, these problems can be solved.

I recently started diving into machine learning and AI. That was when I came across Tensorflow. TensorFlow is an open-source library that helps with machine learning. Tensorflow allow developers to build robust models that can complete a variety of tasks, from object detection to image recognition.

I came across a paper Vinyals, [Toshev](https://arxiv.org/find/cs/1/au:+Toshev_A/0/1/0/all/0/1), [Bengio](https://arxiv.org/find/cs/1/au:+Bengio_S/0/1/0/all/0/1), and [Erhan](https://arxiv.org/find/cs/1/au:+Erhan_D/0/1/0/all/0/1) (2016) called “[Show and Tell: Lessons learned from the 2015 MSCOCO Image Captioning Challenge](https://arxiv.org/abs/1609.06647)”. These researchers created a neural network to describe the content of images in a semantic manner.







![](https://cdn-images-1.medium.com/max/2000/1*mSvmjcvUbpgB3izigcEi4w.png)

Examples of images and their resulting alt text descriptions — im2txt in action — from the [im2txt Github Repository](https://github.com/tensorflow/models/tree/master/im2txt)







### Technical details of im2txt

The mechanics of the model are detailed. But it is basically an encoder-decoder scheme. First, the image is put through a deep convoluted neural network called Inception v3, which classifies images.

Next, the encoded image is fed through an LSTM (long short-term memory), which is a type of neural network that specializes in modeling sequences/time-sensitive information.

The LSTM then works through a set vocabulary and creates a sentence to describe the image. It does this by calculating the likelihood that each word from a set of vocabulary will appear in the sentence. It then calculates the probability of the second word, based on the first word. This goes on until the most likely character is a period. This indicates the end of the caption.



![](https://cdn-images-1.medium.com/max/1600/1*CW6YVV_zEriaGrxMzN4quA.png)

An overview of the structure of the neural network (from the [im2txt Github repository](https://github.com/tensorflow/models/tree/master/im2txt))



According to the Github Repository, it takes one to two weeks to train for this neural network on a Tesla k20m GPU (its probably much more for a standard CPU on a laptop). Thankfully, a member of the Tensorflow community provided a trained model for public download.

### Problems out of the box + Lambda

When I ran the model, I managed to get it to work with Bazel. Bazel is a tool that pre-packages Tensorflow models into scripts (among other purposes). However, it took 15 seconds to get the result for one image. And this was when I ran it on the command line! The only way to solve this issue is to keep the Tensorflow graph in the memory. This, however, requires the app to run run 24/7.

I wanted to put this model on AWS Elastic Beanstalk, where processing time is distributed to the hour, but keeping an app up all the time was not ideal (point #3 in the list of disadvantages for captioning software). So, I decided to switch over to AWS Lamdba.

AWS Lambda is a service that provides serverless computing at an incredibly low cost. It charges by the second when it is being used.

AWS Lambda works like this: your app gets a request from a user, then AWS Lambda activates an image of your application. Then it serves a response and deactivates that image. If you have multiple requests at the same time, it upgrades itself to manage multiple requests.

Also, it keeps your app activated as long as there are multiple requests within the hour. This service was a great fit for my use case.



![](https://cdn-images-1.medium.com/max/1600/1*Q4EaQYos3s-67OkhhKzDkg.png)

AWS API Gateway + AWS = heart ([src](https://cdn-images-1.medium.com/max/700/1*SzOPXTf_YQNtFejG0e4HPg.png))



The problem with AWS Lambda was that I had to create an API for the im2txt model. AWS Lamdba has a memory constraint on the application that can be loaded as a function. When you upload a .zip file that contains your application code and dependencies, the file cannot be more than 250 MB. This limit was a problem because my im2txt model was over 180 MB. And the dependencies that enable it to run was over 350 MB. The total storage limit on AWS Lambda is 512 MB. My application was over this limit. It was around 530 MB.

To reduce the size of my project, I reconfigured im2txt to accept a pared down model. This reduced the size to 120 MB. I then discovered [Lambda-packs](https://github.com/ryfeus/lambda-packs) which contained a minimized version of all the dependencies, but with an earlier version of Python and Tensorflow. After downgrading Python 3.6 syntax and Tensorflow 1.2 code, I finally had a package that was 480 MB, just below the 512 MB limit.

To keep response time quick, I created a CloudWatch function to keep the AWS Lambda instance hot and the application active. I added a few helper functions to manipulate images that were not in JPG format. I finally had a working API. These reductions led to a blazing fast response time. It was less than five seconds in most cases.







![](https://cdn-images-1.medium.com/max/2000/1*e5awvS8Z3k5V9qaxzMadQw.png)

Image with likely probabilities of what is in the image according to the API







Moreover, AWS Lambda is incredibly cheap. Currently, I can analyze 60,952 images for free each month. And each additional image costs $0.0001094 (which is approximately $6.67 for the **next** 60,952 images).

For more details about the API, please click [here](https://github.com/abhisuri97/auto-alt-text-lambda-api).

All that was left was packing it into a Chrome extension for ease of use for the end user. This was not too challenging. It involved a simple AJAX request to my API endpoint.



![](https://cdn-images-1.medium.com/max/1600/1*SXf884JCTh_Ze-0XcXsxiw.gif)

Auto Alt Text Chrome Extension in action



### Results

Im2txt performs well on images that contain people, scenery, and any object that is present in the Common Objects in Context (COCO) dataset. A sample of the images in COCO are shown in the illustration below.







![](https://cdn-images-1.medium.com/max/2000/1*NE9GCZliWRPy9km6Kmaarw.png)

Categories of images in the COCO dataset







The above model limits the scope of what can be captioned. But it does cover the majority of images seen on social media sites such as Facebook and Reddit.

However, it often fails to caption images that contain text. This is because the COCO dataset does not contain such pictures. I tried using Tesseract to do this task, but the results were not accurate and took too long (upwards of 10 seconds per image). I am currently trying to carry out, in Tensorflow, the ideas discussed in [Wang, Wu, Coates, and Nget’s paper](http://ai.stanford.edu/~ang/papers/ICPR12-TextRecognitionConvNeuralNets.pdf) to capture images that contain text.

### Takeaways

A new story is being written about the wonders of AI each week. But it is important to see how those tools can be used outside of research so that they can help people. Overall, I loved diving into Tensorflow with im2txt, and applying what I learned to help solve a real-world problem. Hopefully, this tool will be the first of many that will help visually impaired individuals see a better Internet.

### Links

*   Follow me. I mostly publish on [Medium](https://medium.com/@abhisuri97). If you like this post, I’d appreciate it if you follow me. :) In the upcoming months, I’ll be publishing more “how to” guides to use AI/Tensorflow to solve real-world problems. I’ll also be posting JavaScript tutorials in the near future.
*   To view the Chrome extension, [click here](http://abhinavsuri.com/aat).
*   To view the Auto Alt Text Lambda API Github repository, [click here](http://github.com/abhisuri97/auto-alt-text-lambda-api).








