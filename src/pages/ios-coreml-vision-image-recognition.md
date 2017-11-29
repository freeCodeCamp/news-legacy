---
author: Mark Mansur
authorTwitter: https://twitter.com/MarkMansur2
authorFacebook: none
title: "How to build an image recognition iOS app with Apple’s CoreML and Vision APIs"
subTitle: "With the release of CoreML and new Vision APIs at this year’s Apple World Wide Developers Conference, machine learning has never been eas..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*OrtTLF6edfdsuP2C7uGKkw.png
url: https://medium.freecodecamp.org/ios-coreml-vision-image-recognition-3619cf319d0b
id: ios-coreml-vision-image-recognition-3619cf319d0b
date: 2017-09-01T18:54:19.346Z
tags: [
  "iOS",
  "Machine Learning",
  "Image Recognition",
  "Mobile App Development",
  "Tech"
]
---
# How to build an image recognition iOS app with Apple’s CoreML and Vision APIs







![](https://cdn-images-1.medium.com/max/2000/1*OrtTLF6edfdsuP2C7uGKkw.png)







With the release of [CoreML](https://developer.apple.com/documentation/coreml) and new Vision APIs at this year’s Apple World Wide Developers Conference, machine learning has never been easier to get into. Today I’m going to show you how to build a simple image recognition app.

We will learn how to gain access to the iPhone’s camera and how to pass what the camera is seeing into a machine learning model for analysis. We’ll do all this programmatically, without the use of storyboards! Crazy, I know.

Here is a look at what we are going to accomplish today:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/cfb9dba4a673c934d4b8eae2dbf954f3?postId=3619cf319d0b" data-media-id="cfb9dba4a673c934d4b8eae2dbf954f3" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F22357646%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





### 🙌🏻 Step 1: Create a new project.

Fire up Xcode and create a new single view application. Give it a name, perhaps “ImageRecognition.” Choose swift as the main language and save your new project.

### 👋 Step 2 : Say goodbye to the storyboard.

For this tutorial, we are going to do everything programmatically, without the need for the storyboard. Maybe I’ll explain why in another article.

Delete `main.storyboard`.

Navigate to `info.plist`and scroll down to Deployment Info. We need to tell Xcode we are no longer using the storyboard.

Delete the main interface.



![](https://cdn-images-1.medium.com/max/1600/1*W-p1_py_aMgNrnBh4ljJOg.png)



Without the storyboard we need to manually create the app window and root view controller.

Add the following to the `application()` function in `AppDelegate.swift`:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/7062db25138674f9228579f48f45a896?postId=3619cf319d0b" data-media-id="7062db25138674f9228579f48f45a896" allowfullscreen="" frameborder="0"></iframe>





We manually create the app window with `UIWindow()`,create our view controller, and tell the window to use it as its root view controller.

The app should now build and run without the storyboard 😎

### ⚙️ Step 3: Set up AVCaptureSession.

Before we start, import UIKit, AVFoundation and Vision. The AVCaptureSession object handles capture activity and manages the flow of data between input devices (such as the rear camera) and outputs.

We are going to start by creating a function to setup our capture session.

Create `setupCaptureSession()` inside `ViewController.swift`and instantiate a new `AVCaptureSession`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/069f51fd6fec5a83a298d51874a65c6d?postId=3619cf319d0b" data-media-id="069f51fd6fec5a83a298d51874a65c6d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F22357646%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Don’t forget to call this new function from `ViewDidLoad()`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/94a11b6ff4b89510d80ce961fd733b3b?postId=3619cf319d0b" data-media-id="94a11b6ff4b89510d80ce961fd733b3b" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F22357646%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Next, we are going to need a reference to the rear view camera. We can use a `DiscoverySession`to query available capture devices based on our search criteria.

Add the following code:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/55588bd673f5fe0f2e92e4ec289b49e1?postId=3619cf319d0b" data-media-id="55588bd673f5fe0f2e92e4ec289b49e1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F22357646%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





`AvailableDevices`now contains a list of available devices matching our search criteria.

We now need to gain access to our `captureDevice` and add it as an input to our `captureSession`.

Add an input to the capture session.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/8192d1f12164b35a1844e2e77f0872f2?postId=3619cf319d0b" data-media-id="8192d1f12164b35a1844e2e77f0872f2" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F22357646%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





The first available device will be the rear facing camera. We create a new `AVCaptureDeviceInput`using our capture device and add it to the capture session.

Now that we have our input setup, we can get started on how to output what the camera is capturing.

Add a video output to our capture session.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/0e619f297e14c95708346342da2bceca?postId=3619cf319d0b" data-media-id="0e619f297e14c95708346342da2bceca" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F22357646%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





`AVCaptureVideoDataOutput` is an output that captures video. It also provides us access to the frames being captured for processing with a delegate method we will see later.

Next, we need to add the capture session’s output as a sublayer to our view.

Add capture session output as a sublayer to the view controllers’ view.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/179a6bf4cdb7f691ee07031ff06487af?postId=3619cf319d0b" data-media-id="179a6bf4cdb7f691ee07031ff06487af" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F22357646%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





We create a layer based on our capture session and add this layer as a sublayer to our view. `CaptureSession.startRunning()` starts the flow from inputs to the outputs that we connected earlier.

### 📷 Step 4: Permission to use the camera? Permission granted.

Nearly everyone has opened an app for the first time and has been prompted to allow the app to use the camera. Starting in iOS 10, our app will crash if we don’t prompt the user before attempting to access the camera.

Navigate to `info.plist`and add a new key named `NSCameraUsageDescription`. In the value column, simply explain to the user why your app needs camera access.

Now, when the user launches the app for the first time they will be prompted to allow access to the camera.

### 📊 Step 5: Getting the model.

The heart of this project is most likely the machine learning model. The model must be able to take in an image and give us back a prediction of what the image is. You can find free trained models [here](https://developer.apple.com/machine-learning/). The one I chose is ResNet50.

Once you obtain your model, drag and drop it into Xcode. It will automatically generate the necessary classes, providing you an interface to interact with your model.

### 🏞 Step 6: Image analysis.

To analyze what the camera is seeing, we need to somehow gain access to the frames being captured by the camera.

Conforming to the `AVCaptureVideoDataOutputSampleBufferDelegate`gives us an interface to interact with and be notified every time a frame is captured by the camera.

Conform `ViewController` to the `AVCaptureVideoDataOutputSampleBufferDelegate`.

We need to tell our Video output that ViewController is its sample buffer delegate.

Add the following line in `SetupCaptureSession()`:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/34e7e58bce5f1483a6dea9853e0888de?postId=3619cf319d0b" data-media-id="34e7e58bce5f1483a6dea9853e0888de" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F22357646%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Add the following function:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/597c7d5d411e40c14a3941f164bc0dcd?postId=3619cf319d0b" data-media-id="597c7d5d411e40c14a3941f164bc0dcd" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F22357646%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Each time a frame is captured, the delegate is notified by calling `captureOutput()`. This is a perfect place to do our image analysis with CoreML.

First, we create a `VNCoreMLModel`which is essentially a CoreML model used with the vision framework. We create it with a Resnet50 Model.

Next, we create our vision request. In the completion handler, we update the onscreen UILabel with the identifier returned by the model. We then convert the frame passed to us from a `CMSampleBuffer` to a `CVPixelBuffer`. Which is the format our model needs for analysis.

Lastly, we perform the Vision request with a `VNImageRequestHandler`.

### 🗒 Step 7: Create a label.

The last step is to create a `UILabel` containing the model’s prediction.

Create a new `UILabel`and position it using constraints.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/64bc67737ab67fd16c36702aa13c5768?postId=3619cf319d0b" data-media-id="64bc67737ab67fd16c36702aa13c5768" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F22357646%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Don’t forget to add the label as a subview and call `setupLabel()` from within `ViewDidLoad()`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9ed4c9f5f26cb72fc2b23a9d495fd82f?postId=3619cf319d0b" data-media-id="9ed4c9f5f26cb72fc2b23a9d495fd82f" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F22357646%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





You can download the completed project from [GitHub here](https://github.com/markmansur/CoreML-Vision-demo).

Like what you see? Give this post a thumbs up 👍, follow me on [Twitter](https://twitter.com/MarkMansur2), [GitHub](https://github.com/markmansur), or check out [my personal page](http://markmansur.me).








