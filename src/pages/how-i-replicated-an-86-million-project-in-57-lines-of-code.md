---
author: Tait Brown
authorTwitter: https://twitter.com/taitems
authorFacebook: https://facebook.com/10154127788394680
title: "How I replicated an $86 million project in 57 lines of code"
subTitle: "When an experiment with existing open source technology does a “good enough” job"
coverSrc: https://cdn-images-1.medium.com/max/1600/1*xU8VOotxa_HpI908SBACAQ.jpeg
url: https://medium.freecodecamp.org/how-i-replicated-an-86-million-project-in-57-lines-of-code-277031330ee9
id: how-i-replicated-an-86-million-project-in-57-lines-of-code-277031330ee9
date: 2017-08-28T23:25:59.144Z
tags: [
  "Open Source",
  "JavaScript",
  "Hackathons",
  "Cloud Computing",
  "Tech"
]
---
# **How I replicated an $86 million project in 57 lines of code**

## When an experiment with existing open source technology does a “good enough” job



![](https://cdn-images-1.medium.com/max/1600/1*xU8VOotxa_HpI908SBACAQ.jpeg)



Victoria Police is the primary law enforcement agency of Victoria, Australia. With over 16,000 vehicles stolen in Victoria this past year — at a cost of about $170 million — the police department is experimenting with a variety of technology-driven solutions to crackdown on car theft.

To help prevent fraudulent sales of stolen vehicles, there is already a VicRoads [web-based service](https://www.vicroads.vic.gov.au/registration/buy-sell-or-transfer-a-vehicle/buy-a-vehicle/check-vehicle-registration/vehicle-registration-enquiry) for checking the status of vehicle registrations. The department has also invested in a stationary license plate scanner — a fixed tripod camera which scans passing traffic to automatically identify stolen vehicles.

Don’t ask me why, but one afternoon I had the desire to prototype a vehicle-mounted license plate scanner that would automatically notify you if a vehicle had been stolen or was unregistered. Understanding that these individual components existed, I wondered how difficult it would be to wire them together.

But it was after a bit of googling that I discovered Victoria Police had recently undergone a trial of a similar device, and the estimated cost of roll out was somewhere in the vicinity of $86,000,000\. One astute commenter pointed out that the $86M cost to fit out 220 vehicles comes in at a rather thirsty **$390,909 per vehicle**.

Surely we can do a bit better than that.



![](https://cdn-images-1.medium.com/max/1600/1*6AfjJMn_bKbNBEX5sWUVOg.png)

Existing stationary license plate recognition systems













* * *







#### The Success Criteria

Before getting started, I outlined a few key requirements for product design.

**_The image processing must be performed locally_** Streaming live video to a central processing warehouse seemed the least efficient approach to solving this problem. Besides the whopping bill for data traffic, you’re also introducing network latency into a process which may already be quite slow.

Although a centralized machine learning algorithm is only going to get more accurate over time, I wanted to learn if an local on-device implementation would be “good enough”.

**_It must work with low quality images_** Since I don’t have a Raspberry Pi camera or USB webcam, so I’ll be using dashcam footage — it’s readily available and an ideal source of sample data. As an added bonus, dashcam video represents the overall quality of footage you’d expect from vehicle mounted cameras.

**_It needs to be built using open source technology_** Relying upon a proprietary software means you’ll get stung every time you request a change or enhancement — and the stinging will continue for every request made thereafter. Using open source technology is a no-brainer.











* * *







### **Solution**

At a high level, my solution takes an image from a dashcam video, pumps it through an open source license plate recognition system installed locally on the device, queries the registration check service, and then returns the results for display.

The data returned to the device installed in the law enforcement vehicle includes the vehicles make and model (to verify if _only_ the plates have been stolen), the registration status, and notification if the vehicle is reported stolen.

If that sounds rather simple, it’s because it really is. For example, the image processing can all be handled by the _openalpr_ library. This is really all that’s involved to recognize the characters on a license plate:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/0a513d9e24b2bcd6a8360e6208552ce2?postId=277031330ee9" data-media-id="0a513d9e24b2bcd6a8360e6208552ce2" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F234593%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





> **A Minor Caveat**  
> Public access to the VicRoads APIs is not available, so license plate checks occur via web scraping for this prototype. While generally frowned upon — this is a proof of concept and I’m not slamming anyone’s servers.

Here’s what the dirtiness of my proof-of-concept scraping looks like:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d51e47cc7dac10fb4665293a277ab9ad?postId=277031330ee9" data-media-id="d51e47cc7dac10fb4665293a277ab9ad" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F234593%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>















* * *







### Results

I must say I was pleasantly surprised.

I expected the open source license plate recognition to be pretty rubbish. Additionally, the image recognition algorithms are probably not optimised for Australian license plates.

The solution was able to recognise license plates in a wide field of view.



![](https://cdn-images-1.medium.com/max/1600/1*BU46LufhEIhxIt_BUyPaRQ.jpeg)

Annotations added for effect. Number plate identified despite reflections and lens distortion.



Although, the solution would occasionally have issues with particular letters.



![](https://cdn-images-1.medium.com/max/1600/1*yZYByyp5YlgqnSPjQsDW6A.jpeg)

Incorrect reading of plate, mistook the M for an H



But … the solution would eventually get them correct.



![](https://cdn-images-1.medium.com/max/1600/1*yIx5li10Tin7t0ZAZWVq5w.jpeg)

A few frames later, the M is correctly identified and at a higher confidence rating



As you can see in the above two images, processing the image a couple of frames later jumped from a confidence rating of 87% to a hair over 91%.

I’m confident, pardon the pun, that the accuracy could be improved by increasing the sample rate, and then sorting by the highest confidence rating. Alternatively a threshold could be set that only accepts a confidence of greater than 90% before going on to validate the registration number.

Those are very straight forward code-first fixes, and don’t preclude the training of the license plate recognition software with a local data set.

#### The $86,000,000 Question

To be fair, I have absolutely no clue what the $86M figure includes — nor can I speak to the accuracy of an open source tool with no localized training vs. the pilot BlueNet system.

I would expect part of that budget includes the replacement of several legacy databases and software applications to support the high frequency, low latency querying of license plates several times per second, per vehicle.

On the other hand, the cost of ~$391k per vehicle seems pretty rich — especially if the BlueNet isn’t particularly accurate and there are no large scale IT projects to decommission or upgrade dependent systems.

#### Future Applications

While it’s easy to get caught up in the Orwellian nature of an “always on” network of license plate snitchers, there are many positive applications of this technology. Imagine a passive system scanning fellow motorists for an abductors car that automatically alerts authorities and family members to their current location and direction.

The Teslas vehicles are already brimming with cameras and sensors with the ability to receive OTA updates — imagine turning them into a virtual fleet of good samaritans. Ubers and Lyft drivers could also be outfitted with these devices to dramatically increase the coverage area.

Using open source technology and existing components, it seems possible to offer a solution that provides a much higher rate of return — for an investment much less than $86M.











* * *







**Part 2** — I’ve published an update, in which I test with my own footage and catch an unregistered vehicle, over here:

[**Remember that $86 million license plate scanner I replicated? Here’s what happened next.**  
_Successes, failures, and catching one very naughty driver_medium.freecodecamp.org](https://medium.freecodecamp.org/remember-that-86-million-license-plate-scanner-i-replicated-heres-what-happened-next-9f3c64e8f22b "https://medium.freecodecamp.org/remember-that-86-million-license-plate-scanner-i-replicated-heres-what-happened-next-9f3c64e8f22b")[](https://medium.freecodecamp.org/remember-that-86-million-license-plate-scanner-i-replicated-heres-what-happened-next-9f3c64e8f22b)








