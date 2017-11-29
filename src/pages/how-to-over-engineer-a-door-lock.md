---
author: Steven Chan
authorTwitter: none
authorFacebook: https://facebook.com/10212315072376826
title: "How to over-engineer a door lock"
subTitle: "My company’s Internet of Things (IoT) side project began when we couldn’t reset the door lock that we inherited from a previous tenant. I..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*TP9VbFU7DwDvY78ApjObtg.jpeg
url: https://medium.freecodecamp.org/how-to-over-engineer-a-door-lock-863b5d58dd0d
id: how-to-over-engineer-a-door-lock-863b5d58dd0d
date: 2017-06-13T20:26:38.119Z
tags: [
  "Raspberry Pi",
  "Programming",
  "IoT",
  "Iot Portal",
  "Cloud Solutions"
]
---
# How to over-engineer a door lock







![](https://cdn-images-1.medium.com/max/2000/1*TP9VbFU7DwDvY78ApjObtg.jpeg)

Image by Antonina Bukowska via [Unsplash](https://unsplash.com/photos/PpwqEpJ9UaQ)







My company’s Internet of Things (IoT) side project began when we couldn’t reset the door lock that we inherited from a previous tenant. It was one of those minor details we learned about after moving in to our new last-minute office.

Normally, people just pay for a new one. But our team was too cheap to replace the lock and no one ever wanted to get the door bell. Plus, we’re engineers and we wanted to fiddle with some hardware.

Our goal was to open the door with a phone or wearable technology. We had several options for how to approach the problem. In theory, we could use an app, an integration into another platform, or anything that could send a signal to trigger the door lock.



![](https://cdn-images-1.medium.com/max/1600/1*ZMY8DHIrRVUYDOEm25cW-Q.jpeg)

Chima Open Door on Pebble and iOS



So far in our door lock experiment, we’ve developed solutions for a Slack integration, native iOS and Android apps, the Apple Watch, and Pebble. I’ll focus on the architecture of the mobile apps. I admit the final product is a bit over-engineered, but we just love it!

### **_iOS and Android architecture_**







![](https://cdn-images-1.medium.com/max/2000/1*_a0ivz5iXmx8CLBTWspoXg.png)

_Our IoT door lock project’s architecture_







What exactly happens when you press the button in our iOS / Android app? An HTTP request is sent to the cloud server, which then triggers a message to the door lock daemon via the client server, which then tells a relay board to open the door lock.   

Traditionally, the door lock is opened with a button beside the door. But with modern technology, the possibilities extend beyond a direct, physical button. In addition to the physical button that triggers the `Doorlock Daemon` in the diagram, we added two other triggers: a cloud-based trigger, and a Bluetooth Low Energy (BLE) trigger, thanks to our choice of hardware.  

This article focuses on the cloud-based trigger, which is what our door lock app depends on.

### Starting from pressing the button to a record saved on Skygear server.



![](https://cdn-images-1.medium.com/max/1600/1*Y_5ir6hlMnHyXWrMwLA3Vg.png)



When a user presses the open door button on the mobile app, the app accesses the cloud server.   

Two things happen in the cloud server. The first is that a record is saved to our choice of server, [Skygear Cloud Database](https://docs.skygear.io/guides/), which allows you to synchronize your data to the cloud. The server will log when the door access is being requested.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c12ba42b8333b58d93a971bb85af8b35?postId=863b5d58dd0d" data-media-id="c12ba42b8333b58d93a971bb85af8b35" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F7130966%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Once a record is saved, it would trigger an `after_save` function provided by [Skygear Cloud Functions](https://docs.skygear.io/guides/), which runs our code in the cloud without bothering server deployment.  

The `after_save` function is triggered after a record is saved. `def after_open_door_save(record, original_record, db):` is triggered asynchronously when a record of type `'OpenDoor'` is saved. The function publishes a message to the channel `'xxx-channel'`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/15fd7de354cc524d5d5af59c4b7ab4e7?postId=863b5d58dd0d" data-media-id="15fd7de354cc524d5d5af59c4b7ab4e7" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F7130966%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





### The Node Client and Clojure Server on Raspberry Pi

The next step is to create a listener for the request. This is where the Node client and a Clojure server on Raspberry Pi come in. The Node client listens to the message in the specified channel on the Skygear server. The Clojure server is the only one with the right to access the Raspberry Pi 3 circuit. Then the Node client issues a request to the Clojure server once it hears any message.   

Here is the script for the Node client, which includes code related to our specific configuration for Skygear. The endpoint and the API Key are for accessing the main server on Skygear. `skygear.on('xxx-channel', onReceiveOpenDoor)` means to subscribe the function callback (`onReceiveOpenDoor`) on receiving a message on the `'xxx-channel'` channel.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/56f4742aac19c6e92ccc8eb5f3602789?postId=863b5d58dd0d" data-media-id="56f4742aac19c6e92ccc8eb5f3602789" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F7130966%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





The Clojure server directly controls General Purpose Input/Output (GPIO) on a Raspberry Pi. GPIO are the pins on the Raspberry Pi 3\. The GPIO connects to the external circuit that is connected with the door magnet.



![](https://cdn-images-1.medium.com/max/1600/1*d80-lFQeMHleoRI30NzgTA.png)



Here is the Clojure code showing how the Raspberry Pi opens the door. Once the Clojure server receives the request from Node client, it will open the door and set it open for 3 seconds. However, if there is a new request coming in during that 3 seconds, the door will reset the timer to another 3 seconds. When the count down time is up, the door will lock again.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/f89be1484ea652ca8bfb7512647398ca?postId=863b5d58dd0d" data-media-id="f89be1484ea652ca8bfb7512647398ca" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F7130966%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





A random side note: Skygear is using AWS in America, while the door and the Raspberry Pi is in Hong Kong. Effectively, our ‘芝麻開門’ (Chima Open Door) request travels around the world before it reaches the door.

### Why Raspberry Pi?

Now, you may be wondering why we specifically chose Raspberry Pi. We considered using Arduino boards because we had them in the office. The reason we couldn’t use our specific Arduino model was because we wanted to synchronize data via Skygear JS SDK and this specific Arduino can’t set up the Node server.  

 What’s more, Raspberry Pi is Bluetooth Low Energy ready (which means we could access the door lock using a third method, Bluetooth).



![](https://cdn-images-1.medium.com/max/1600/1*2SCzzCP-Xf2OrwKvw4Zh1A.jpeg)

Linus-based Raspberry Pi is compatible with Oursky’s open-source serverless platform, Skygear





![](https://cdn-images-1.medium.com/max/1600/1*c47bsti5RIuXdrNrm1YbIA.jpeg)



### Additional integrations

Considering the app is internal-use only, we started a [Slack](http://www.slack.com/) customized command `/chima-open-door` to open the door since every Ourskyer has access to [Slack](http://www.slack.com/).

Later some other Oursky colleagues got involved in this project and helped write the WatchOS app and Android app published on the internal platform. Apart from pressing the button inside the app, we also provide alternatives such as iOS 3D touch, Today extension, Android widget and even a Pebble integration because some of our developers use it.











* * *







That’s it! Before you dive in, there are two other main factors to consider: the reverse electricity flow (in this case for the Raspberry Pi) and the security of each of your integrations. For example, we also integrated Bluetooth app access with Bluetooth Low Energy (BLE), which has a self-implemented 2FA-like authentication. Other integrations you can include are notifications when the door is open (bell, LED).  

 If you want to learn about any of the above, feel free to get in touch!

**Link to Repo / files**  
Doorlock: [https://github.com/oursky/doorlock](https://github.com/oursky/doorlock)











* * *







I would like to credit my colleagues [David Ng](https://medium.com/@iamdavidng), Boris ([akiroz](https://medium.com/@akiroz)), Brian ([b壹貳參肆零零](https://medium.com/@b123400)), and [May Yeung](https://medium.com/@mayyuen318) for working on the Android application, the circuit implementation & Clojure, Pebble application, and this blog piece respectively. Here’s to teamwork!

At Oursky we’re all about helping brands and entrepreneurs make their ideas happen, as well as fellow developers — our latest project Skygear ([https://skygear.io](https://skygear.io)), an open source ([https://github.com/skygeario](https://github.com/skygeario)) serverless platform for mobile, web & IoT apps — helps you build better apps faster. 😻








