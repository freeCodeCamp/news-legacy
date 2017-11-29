---
author: Francesco Pallotta
authorTwitter: https://twitter.com/FranPallotta
authorFacebook: https://facebook.com/10213290420845212
title: "Hello, Kitty! How to make an augmented reality app using ARKit and Unity."
subTitle: "We’ve all heard of Augmented Reality (AR), but at this point there are few opportunities to see this technology in action. We know that A..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*sybYCmTLY_r_rmRrim2AgA.jpeg
url: https://medium.freecodecamp.org/how-to-make-an-augmented-reality-app-using-arkit-and-unity-ba16515a32fa
id: how-to-make-an-augmented-reality-app-using-arkit-and-unity-ba16515a32fa
date: 2017-11-07T16:57:37.705Z
tags: [
  "Virtual Reality",
  "Tech",
  "Programming",
  "Apple",
  "Technology"
]
---
# Hello, Kitty! How to make an augmented reality app using ARKit and Unity.



![](https://cdn-images-1.medium.com/max/1600/1*sybYCmTLY_r_rmRrim2AgA.jpeg)



We’ve all heard of Augmented Reality (AR), but at this point there are few opportunities to see this technology in action. We know that AR allows us to see virtual elements fused with the real world around us. For example, with AR we can see a virtual sofa in our room. Apple now lets us see new items added to the real world using the cameras in our phones.

Apple introduced ARKit, the framework for creating experiences in Augmented Reality, in iOS11\. ARKit uses Visual Inertial Odometry (VIO) to map the surrounding environment. VIO blends the data provided by the camera sensor with Core Motion data. Core Motion data are collected through the accelerometer, gyroscope, pedometer, magnetometer, and barometer.

All these inputs allow the device to understand its movement within a room. With ARKit, the iPhone and iPad can analyze a scene and find the horizontal planes of a room. ARKit can locate tables and floors, and can trace and position objects at precise points.

ARKit also uses the room sensor to measure ambient light and apply the correct amount of light to virtual objects. ARKit is compatible with Apple’s A9, A10, and A11 processors. To develop with ARKit you can use Metal, Scenekit, and third-party tools such as Unity and Unreal Engine.

Let’s now see how to create an AR application using ARKit.

### Development environment

To get started we need:

*   The release version of [Unity 2017.1.0](https://unity3d.com/get-unity/download?thank-you=update&download_nid=47505&os=Mac) or later. ARKit is also compatible with the [Experimental VR build](http://beta.unity3d.com/download/c92f68c59a22/public_download.html) used for macOS VR content creation and Unity 5.x versions of [Unity 5.6.2](https://unity3d.com/get-unity/download?thank-you=update&download_nid=47271&os=Mac) or later.
*   iOS 11 or later
*   XCode 9 beta or later, with iOS SDK that includes ARKit Framework
*   iOS that supports ARKit (iPhone 6S or later, iPad 2017 or later)

### Procedure

Start Unity. The project window will open.

At this point, we have to create a new, empty project:

1.  In the window, click on **New** for a new project.
2.  Write “ARKitty” in the **Project name** text box.
3.  On the same window, press the **Create project** button.



![](https://cdn-images-1.medium.com/max/1600/1*bA4I0lnMGQeNJOJB3l3sMQ.png)



We have created our AR project!

Open the **Asset Store** by clicking on that tab.



![](https://cdn-images-1.medium.com/max/1600/1*M27Cvn-q9LT5ihs3Ue4tDA.png)



Next, search within the store: write “ARKit” in the text box and click on the magnifying glass icon.



![](https://cdn-images-1.medium.com/max/1600/1*Tx44H1h35r166e552nzLKw.png)



Scroll through the Asset Store window until you find “Unity ARKit Plugin.” This is the plugin that integrates ARKit within Unity.



![](https://cdn-images-1.medium.com/max/1600/0*uk87mkA8rHUP_Lcq.png)



Click on Unity ARKit Plugin and scroll down to the **import** button and press it. Press import again to import the same project, and import once more on the plugin element window.

Now go back to the Asset store, press the **Home** symbol, and write “Cute Kitten” in the search text field. Press the search symbol and import the Cute Kitten model as you just did with the ARKit plug-in.



![](https://cdn-images-1.medium.com/max/1600/0*ghwgXn4-isL8Eqd8.png)



Scroll with the cursor to the import button and press it. Press import again on the plug-in element window.

Search the “UnityARKitScene” scene in the UnityARKitScene folder under “Asset/Examples.”



![](https://cdn-images-1.medium.com/max/1600/1*ZMRD69z37L17Kk7inyHEdQ.png)



Drag the scene “UnityARKitScene” under Hierarchy.

Go to the assets and find Kitten.

Go under **Model** and drag “kitten” under “Hierarchy-> HitCubeParent”.



![](https://cdn-images-1.medium.com/max/1600/0*_4Zd0hg2Zun7zyoN.png)



Remove HitCube and RandomCube from the scene by right-clicking and then hitting **Delete**. Select GeneratePlanes, ARKitControl, and click on the inspector and uncheck **Tag**.



![](https://cdn-images-1.medium.com/max/1600/0*9h5UqsdDgKxbRFKJ.png)



Go to **Main Camera** under CameraParent and, in Inspector, set **Near** to 0.01.



![](https://cdn-images-1.medium.com/max/1600/0*Ms5CohAnYnk_b5Ce.png)



Click the **Scene** tab. Click on the kitten in **Hierarchy** to select it. Now we see our kitten in the Scene view in three-dimensional space. Go to the asset “UnityARKitPlugin-> Plugins-> Helpers” and take the UnityARHitTestExample.cs script. Drag the script into the kitten inspector.



![](https://cdn-images-1.medium.com/max/1600/0*3ZKr9R10-rGC8vTe.png)



Drag the kitten in the **Hit transform** field of the “UnityARHitTestExample.cs” script.

Save the scene by selecting “File-> Save Scenes” and call it “ARKittyTest”.

Finished! It’s time to try the new application in Augmented Reality.

Go to the **File** menu and choose **Build Settings**. In the window that opens, under **Platform**, choose IOS.

Press the **Player Settings** button and scroll down until you find **Bundle Identifier**. Here, write an identifier of the type: “com. <Your name> .arkittytest”.



![](https://cdn-images-1.medium.com/max/1600/0*FslQzB0A7GIYuC9G.png)



Click the Build button in the Build Settings window and save the project to iOS as “ARKittyTest”.

At the end of the process, find the XCode project in the Finder named “Unity-iPhone.xcodeproj”. Double-click to open the project with XCode. In XCode, click Unity-iPhone and go to **General**. In the identity field, write the same Bundle Identifier inserted in Unity’s Build Settings.



![](https://cdn-images-1.medium.com/max/1600/1*eA4vOjDQ05994iL9pWHceA.png)



Under **Signing** in the **Team** pull-down menu, select the registered team name.

Select the device (iPhone / iPad) before connecting to the Mac as the target device.

Press the XCode arrow key to “Build and Run the Current Scheme.”

In the end, when we frame a surface near us and tap on the phone screen, we can see our Kitten live in front of us.



![](https://cdn-images-1.medium.com/max/1600/0*g9WcAK0FTjQiM1F0.png)



Mission accomplished! The following video shows the complete procedure.





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/74bb46a65b5ebd2a52c5f9cd674d8ee1?postId=ba16515a32fa" data-media-id="74bb46a65b5ebd2a52c5f9cd674d8ee1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FzLEKDrmgYhI%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





**Francesco Pallotta** is a senior software engineer expert in software design and development. He works in the field of Space and Defense and deals with application development techniques for virtual reality and augmented reality_._











* * *







Do you want to read more about Virtual Reality, Augmented Reality and Mixed Reality? **Follow me** on [Medium](https://medium.com/@pallotta.francesco) and [Twitter](https://twitter.com/FranPallotta).

Did you enjoy this post? **Recommend it**, by give it some claps. Thanks!








