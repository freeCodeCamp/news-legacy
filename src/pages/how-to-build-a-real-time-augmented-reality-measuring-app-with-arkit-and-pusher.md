---
author: Esteban Herrera
authorTwitter: https://twitter.com/eh3rrera
authorFacebook: none
title: "How to Build a Real-Time Augmented Reality Measuring App with ARKit and Pusher"
subTitle: "Augmented reality (AR) is all about modifying our perception of the real world...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*eQNtaPKg3c2ZoXcdquRgJg.jpeg
url: https://medium.freecodecamp.org/how-to-build-a-real-time-augmented-reality-measuring-app-with-arkit-and-pusher-41da426dedf9
id: how-to-build-a-real-time-augmented-reality-measuring-app-with-arkit-and-pusher-41da426dedf9
date: 2017-09-04T18:36:54.082Z
tags: [
  "iOS",
  "Swift",
  "Augmented Reality",
  "Tech",
  "Programming"
]
---
# How to Build a Real-Time Augmented Reality Measuring App with ARKit and Pusher



![](https://cdn-images-1.medium.com/max/1600/1*eQNtaPKg3c2ZoXcdquRgJg.jpeg)



Augmented reality (AR) is all about modifying our perception of the real world.

Information about our environment and surrounding objects can be overlaid to enhance your current perception of reality. This information can presented to the user in real-time, like in the case of a news feed in a live event.

But the flow of information can also go the other way around. We can send the information resulting from the interaction with the augmented reality experience. In both cases, Pusher can help you with sending and receiving data in real-time.

In this tutorial, we’re going to build an ARKit app to make simple measurements. While measuring, the app will create a 3D box with a width equal to the measured size:





<iframe data-width="640" data-height="480" width="640" height="480" src="https://medium.freecodecamp.org/media/ef1a64e760e493e719d149391fad180a?postId=41da426dedf9" data-media-id="ef1a64e760e493e719d149391fad180a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fosby8WfvPQA%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





It will also send the measurements in real-time to Pusher:





<iframe data-width="640" data-height="480" width="640" height="480" src="https://medium.freecodecamp.org/media/529805f246ec8b4e588c650849f966f8?postId=41da426dedf9" data-media-id="529805f246ec8b4e588c650849f966f8" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FgRX3sHiV9Hg%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





One note of caution. The measurements are based on the plane detection’s capabilities of ARKit. They are not perfect in some situations, such as in low lighting or when a surface is not entirely flat. The results won’t be completely accurate all the time. They’re close, but they can vary.

For this tutorial, you’ll need:

*   A device with an A9 or later processor (iPhone 6s or better, iPhone SE, any iPad Pro, or the 2017 iPad)
*   [iOS 11 beta 5](https://9to5mac.com/2017/06/26/how-to-install-ios-11-public-beta-on-your-eligible-iphone-ipad-or-ipod-touch/)
*   [Xcode 9 beta 5](https://developer.apple.com/download/) (or superior)
*   A free [Pusher](https://pusher.com/) account

For reference, you can find the source code of this project on [Git](https://github.com/eh3rrera/ARKitAnimation)[Hub](https://github.com/eh3rrera/MeasureARKitPusher).

Let’s get started.

### Setting up the Xcode project

Open Xcode and create a new **Single View App**:



![](https://cdn-images-1.medium.com/max/1600/1*4RAguNwZTCeOUirUbQau-w.png)



We choose this option because we are going to manually set up an AR view along with other controls.

Enter the project information, choosing **Swift** as the language:



![](https://cdn-images-1.medium.com/max/1600/1*qbOQVk-dMp1jSyn61g27CQ.png)



Create the project and close it. We’re going to use [CocoaPods](https://cocoapods.org/) to install the project’s dependencies. Open a terminal window and go to the root directory of your project. If you don’t have CocoaPods installed, execute:

<pre name="9b63" id="9b63" class="graf graf--pre graf-after--p">sudo gem install cocoapods</pre>

Once installed, create the file `Podfile` with the command:

    pod init

Edit this file to set the platform to iOS 11 and add the project dependencies:

    # Uncomment the next line to define a global platform for your project

    platform :ios, '11.0'

    target 'MeasureARPusher' do

    # Comment the next line if you're not using Swift # and don't want to use dynamic frameworks

    use_frameworks!

    # Pods for MeasureARPusher

    pod 'PusherSwift', :git => 'https://github.com/pusher/pusher-websocket-swift.git', :branch => 'swift-3.2'

    end

At the time of this writing, [Pusher’s Swift library](https://github.com/pusher/pusher-websocket-swift) for Xcode 9 and Swift 3.2/4 is still in [development](https://github.com/pusher/pusher-websocket-swift/pull/145). The current version throws some errors, so we have to pull the version for Swift 3.2 from the branch `swift-3.2`.

Once you edit `Podfile`, execute the following command to install the dependencies:

    pod install

Now open the Xcode workspace instead of the project file:

    open MeasureARPusher.xcworkspace

We need to change the version of Swift from 4.0 (the default) to Swift 3.2 so Pusher can compile without errors. In the project navigator, select **Pods**. In the **Targets** section select **PusherSwift**. In the **Build Settings** tab look for the option **Swift Language Version**. Change it to Swift 3.2:



![](https://cdn-images-1.medium.com/max/1600/1*WtjhYNU06qtBuBs2voOEZg.png)



If you build your project at this point, the operation should be successful.

Select the **Information Property List**. add a row of type **Privacy — Camera Usage Description** (`NSCameraUsageDescription`) and give it a description. This is so ARKit can access the camera:



![](https://cdn-images-1.medium.com/max/1600/1*gC9DNj85bGQR12GKrAF_uA.png)



Finally, configure a team so you can run the app on your device:



![](https://cdn-images-1.medium.com/max/1600/1*chrOmMGpjZVjdTgPbtkHXw.png)



Now let’s start by building the user interface.

### Building the user interface

Go to `Main.storyboard` and drag an _ARKit SceneKit View_ to the view:



![](https://cdn-images-1.medium.com/max/1600/1*pevseQO488OwrK9daZvGtA.png)



Next, add constraints to all sides of this view so that it fills the entire screen. You do this by pressing the `ctrl` key while dragging a line to each side and choosing leading, top, trailing, and bottom to the superview, with a value of `0`:





<iframe data-width="640" data-height="480" width="640" height="480" src="https://medium.freecodecamp.org/media/193a050a16ea0cc0fb7ef398322dbfd2?postId=41da426dedf9" data-media-id="193a050a16ea0cc0fb7ef398322dbfd2" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FqTpjmRjlriI%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Add a button. Change its type to **Add Contact** in the **Attributes inspector**. Give it a white color **Tint**, and add a vertical and a horizontal constraint to center it in the middle of the screen:



![](https://cdn-images-1.medium.com/max/1600/1*nUaOTrdCDgeG-SLq1dcNXA.png)



Let’s add a switch to control when the app is in measure mode. Set its initial state to Off in the Attributes inspector. Add a bottom and trailing constraint with a value of `-20` to place the control in the bottom-right part of the screen. You may want to place it in the bottom-center or another part of the screen if you prefer:



![](https://cdn-images-1.medium.com/max/1600/1*HAgfKwrsGm1ZUmrZ5sUc7Q.png)



Now add a text view. Disable its **Editable** and **Selectable** behaviors in the Attributes inspector_._ Change its background color. I chose a white color with 50% opacity.

Add a height constraint with a value of 90\. Add leading, top, and trailing constraints with the value 0 so it remains fixed to the top of the screen:



![](https://cdn-images-1.medium.com/max/1600/1*JbDlm-LQrK3-T97wILiQvg.png)



In `ViewController.swift`, import the SceneKit and ARKit libraries:

    import SceneKit

    import ARKit

Then, create two `IBOutlets`, one to the scene view and another one to the text view:



![](https://cdn-images-1.medium.com/max/1600/1*Y0JGX6NshNNYHj8_mQJpPQ.png)



Finally, an action on the switch control for the `changeValue` event:



![](https://cdn-images-1.medium.com/max/1600/1*6uUKy6VvTqKIQCIIGqDHoQ.png)



And now we’re ready to start coding the app.

### Building a measurement app

Let’s start by making `ViewController.swift` implement `ARSCNViewDelegate` and defining the variables we’re going to need:

    class ViewController: UIViewController, ARSCNViewDelegate {

      ...

      var box: Box!

      var status: String!

      var startPosition: SCNVector3!

      var distance: Float!

      var trackingState: ARCamera.TrackingState!

      enum Mode {

        case waitingForMeasuring

        case measuring

      }

      ...

    }

Where:

*   `box` represents the 3D box that is going to get drawn when measuring. We’ll review this class later on. For now, create it to eliminate the error.
*   `status` is a text that tells us if the app is ready or not to take measurements (whether the app has detected planes or not).
*   `startPosition` represents the measurement’s start position.
*   `distance` is the calculated distance from the start to the current position (the measurement itself).
*   `trackingState` holds the current tracking state of the camera.
*   `Mode` is an enumeration to indicate the possible states of the app.

Let’s add another property to keep track of the state of the app, and do a few things depending on the set value:

    var mode: Mode = .waitingForMeasuring {

      didSet {

        switch mode {

          case .waitingForMeasuring:

            status = "NOT READY"

          case .measuring:

            box.update(          minExtents: SCNVector3Zero, maxExtents: SCNVector3Zero)

            box.isHidden = false

            startPosition = nil

            distance = 0.0

            setStatusText()

        }

      }

    }

If `waitingForMeasuring` is set, we’ll assume that the app is not ready. Don’t worry, if it is, the status will change immediately. If the mode is set to measuring, we’ll reset the size of the box. We’ll review the method update later. We’ll show if the box is hidden, reset the `startPosition` and `distancevariables`, and call the method that displays the value of those variables.

This is the definition of the method `setStatusText()`:

    func setStatusText() {

      var text = "Status: \(status!)\n"

      text += "Tracking: \(getTrackigDescription())\n"

      text += "Distance: \(String(format:"%.2f cm", distance! * 100.0))"

      statusTextView.text = text

    }

    func getTrackigDescription() -> String {

      var description = ""

      if let t = trackingState {

        switch(t) {

          case .notAvailable:

            description = "TRACKING UNAVAILABLE"

          case .normal:

            description = "TRACKING NORMAL"

          case .limited(let reason):

            switch reason {

              case .excessiveMotion:

                description =               "TRACKING LIMITED - Too much camera movement"

              case .insufficientFeatures:

                description =               "TRACKING LIMITED - Not enough surface detail"

              case .initializing:

                description = "INITIALIZING"

            }

        }

      }

      return description

    }

This method sets the text of the text view to the measure status of READY or NOT READY_._ It showsa description of the tracking status of the AR camera with the help of the method `getTrackingDescription()`. And the (last) calculated distance in centimeters. Notice we have to multiply the value by `100.0`.

Next, we have the method `viewDidLoad()`, where we set initial values, among other things:

    override func viewDidLoad() {

      super.viewDidLoad()

      // Set the view's delegate

      sceneView.delegate = self

      // Set a padding in the text view

      statusTextView.textContainerInset =       UIEdgeInsetsMake(20.0, 10.0, 10.0, 0.0)

      // Instantiate the box and add it to the scene

      box = Box()

      box.isHidden = true;

      sceneView.scene.rootNode.addChildNode(box)

      // Set the initial mode

      mode = .waitingForMeasuring

      // Set the initial distance

      distance = 0.0

      // Display the initial status

      setStatusText()

    }

In the method `viewWillAppear`, create and run a [session](https://developer.apple.com/documentation/arkit/arsession) with [plane detection](https://developer.apple.com/documentation/arkit/arworldtrackingsessionconfiguration.planedetection). This is important because the points of the plane will be the elements we’ll use to measure things:

    override func viewWillAppear(_ animated: Bool) {

      super.viewWillAppear(animated)

      // Create a session configuration with plane detection

      let configuration = 

      configuration.planeDetection = .horizontal

      // Run the view's session

      sceneView.session.run(configuration)

    }

Also, override the method `viewWillDisappear` to pause the session when necessary:

    override func viewWillDisappear(_ animated: Bool) {

      super.viewWillDisappear(animated)

      // Pause the view's session

      sceneView.session.pause()

    }

Use the following method to know when the camera’s tracking state has changed. Save a reference to that state:

    func session(_ session: ARSession, cameraDidChangeTrackingState camera: ARCamera) {

      trackingState = camera.trackingState

    }

These methods are part of the callbacks that come with the protocol [ARSCNViewDelegate](https://developer.apple.com/documentation/arkit/arscnviewdelegate).

Now, here comes the interesting part.

The method:

    (void)renderer:(id <SCNSceneRenderer>)renderer updateAtTime:(NSTimeInterval)time

It’s called exactly once per frame, like `60` times per second. So we are going to call another method to use hit-testing to detect a plane we can interact with. When that happens, we’ll change the state from NOT READY to READY.

The implementation looks like this:

    func renderer(_ renderer: SCNSceneRenderer, updateAtTime time: TimeInterval) {

      // Call the method asynchronously to perform

      //  this heavy task without slowing down the UI

      DispatchQueue.main.async {

        self.measure()

      }

    }

    func measure() {

      let screenCenter : CGPoint = CGPoint(      x: self.sceneView.bounds.midX, y: self.sceneView.bounds.midY)

      let planeTestResults = sceneView.hitTest(      screenCenter, types: [.existingPlaneUsingExtent])

      if let result = planeTestResults.first {

        status = "READY"

      } else {

        status = "NOT READY"

      }

      ...

    }

The reference point will always be the center of the screen. That’s why we place that button with the plus sign. We’ll get the screen center coordinates to hit-test against an existing plane. If there’s a result, it means we can start measuring.

There are [four types of objects](https://developer.apple.com/documentation/arkit/arhittestresult.resulttype) we can find in a search:

*   [featurePoints](https://developer.apple.com/documentation/arkit/arhittestresult.resulttype/2875708-featurepoint)  
     A point automatically identified by ARKit as part of a continuous surface, but without a corresponding anchor.
*   [estimatedHorizontalPlane](https://developer.apple.com/documentation/arkit/arhittestresult.resulttype/2887460-estimatedhorizontalplane)  
    A real-world planar surface detected by the search and without a corresponding anchor. The orientation is perpendicular to gravity.
*   [existingPlane](https://developer.apple.com/documentation/arkit/arhittestresult.resulttype/2875738-existingplane)  
    A plane anchor already in the scene, without considering the plane’s size.
*   [existingPlaneUsingExtent](https://developer.apple.com/documentation/arkit/arhittestresult.resulttype/2887459-existingplaneusingextent)  
    A plane anchor already in the scene, respecting the plane’s limited size.

The easiest option would be to use feature points. They represent notable features detected in the camera image. They are detected quicker than planes and there are more of them.

But, this will give us very unstable results. Feature points are intermediate results of the scene analysis that ARKit uses to perform world tracking. So it’s recommended to do a hit test against existing plane anchors first.

If there’s a hit and the mode is measuring, we need to change the status to _MEASURING._ And extract the position as a vector of three elements (x, y, z) from the transformation matrix of the result:

    func measure() {

      ...

      if let result = planeTestResults.first {

        status = "READY"

        if mode == .measuring {

          status = "MEASURING"

          let worldPosition = SCNVector3Make(        result.worldTransform.columns.3.x,              result.worldTransform.columns.3.y,        result.worldTransform.columns.3.z      )

          ...

        }

      } ...

    }

If `startPosition` is `nil` (the first measure), we use `worldPosition` to set its value as well as the box position:

    func measure() {

      ...

      if let result = planeTestResults.first {

        status = "READY"

        if mode == .measuring {

          ...

          let worldPosition = SCNVector3Make(        result.worldTransform.columns.3.x,         result.worldTransform.columns.3.y,         result.worldTransform.columns.3.z      )

          if startPosition == nil {

            startPosition = worldPosition

            box.position = worldPosition

          }

          ...

        }

      } ...

    }

We can calculate the distance between `startPosition` and `worldPosition` (the actual position) in a 3D space using the [Pythagorean theorem](https://math.stackexchange.com/questions/42640/calculate-distance-in-3d-space) and resize the box accordingly:

    func measure() {

      ...

      if let result = planeTestResults.first {

        status = "READY"

        if mode == .measuring {

          ...

          distance = calculateDistance(          from: startPosition!, to: worldPosition      )

          box.resizeTo(extent: distance)

          ...

        }

      } ...

    }

    func calculateDistance(from: SCNVector3, to: SCNVector3) -> Float {

      let x = from.x - to.x

      let y = from.y - to.y

      let z = from.z - to.z

      return sqrtf( (x * x) + (y * y) + (z * z))

    }

But the math is not done yet. We won’t be measuring straight lines all the time. To take measures in all directions and have the 3D box to follow, we need to take into account the rotation in the Y-axis.

We can get the angle (in radians) between two vectors using [atan2](https://en.wikipedia.org/wiki/Atan2) in this way:

    func measure() {

      ...

      if let result = planeTestResults.first {

        status = "READY"

        if mode == .measuring {

          ...

          let angleInRadians = calculateAngleInRadians(          from: startPosition!, to: worldPosition      )

          box.rotation = SCNVector4(x: 0, y: 1, z: 0,           w: -(angleInRadians + Float.pi)      )

        }

      } ...

    }

    ...

    func calculateAngleInRadians(from: SCNVector3, to: SCNVector3) -> Float {

      let x = from.x - to.x

      let z = from.z - to.z

      return atan2(z, x)

    }

However, the `atan2` function returns an angle from 0º to +/- 180º. Since we’re dealing with radians, we have to add the value of PI for normalization (PI in radians equals to 180º).

Also, notice that the rotation property of the 3D box takes a vector of four elements. The three first components are the axis (we need to rotate on the Y-axis). The fourth one is the rotation in radians.

Let’s not forget the action for the switch control. It just changes the mode according to its state:

    @IBAction func switchChanged(_ sender: UISwitch) {

      if sender.isOn {

        mode = .measuring

      } else {

        mode = .waitingForMeasuring

      }

    }

For the 3D box, if you haven’t already, create the class extending from [SCNNode](https://developer.apple.com/documentation/scenekit/scnnode):

    import SceneKit

    class Box: SCNNode {

    }

Let’s also define two static functions outside the class that will help us add and subtract two vectors:

    class Box: SCNNode {

    }

    func + (left: SCNVector3, right: SCNVector3) -> SCNVector3 {

      return SCNVector3Make(      left.x + right.x, left.y + right.y, left.z + right.z  )

    }

    func - (left: SCNVector3, right: SCNVector3) -> SCNVector3 {

      return SCNVector3Make(      left.x - right.x, left.y - right.y, left.z - right.z  )

    }

Add the required constructors:

    class Box: SCNNode {

      override init() {

        super.init()

      }

      required init?(coder aDecoder: NSCoder) {

        fatalError("init(coder:) has not been implemented")

      }

    }

Let’s add a lazy variable so it’s initialized until the first time it is used. It will hold a reference to the 3D box ([SCNBox](https://developer.apple.com/documentation/scenekit/scnbox)) inside a node of type [SCNNode](https://developer.apple.com/documentation/scenekit/scnnode):

    class Box: SCNNode {

      lazy var box: SCNNode = makeBox()

      ...

      func makeBox() -> SCNNode {

        let box = SCNBox(        width: 0.01, height: 0.01, length: 0.01, chamferRadius: 0    )

        return convertToNode(geometry: box)

      }

      func convertToNode(geometry: SCNGeometry) -> SCNNode {

        for material in geometry.materials {

          material.lightingModel = .constant

          material.diffuse.contents = UIColor.white

          material.isDoubleSided = false

        }

        let node = SCNNode(geometry: geometry)

          self.addChildNode(node)

          return node

        }

    }

In theory, we could use any primitive shape derived from [SCNGeometry](https://developer.apple.com/documentation/scenekit/scngeometry). But in practice, SCNBox is easier to use because we can define its X, Y, and Z-axis dimensions by setting its width, height, and length properties. In this case, we use small values so the box is shown with a good size.

Also, notice we’re assigning a uniform white color to the box. You can use textures or configure the material in other ways to give it a more polished look.

In the `resizeTo` method, we get elements of the bounding box of the node and set the X-axis to the distance provided:

    func resizeTo(extent: Float) {

      var (min, max) = boundingBox

      max.x = extent

      update(minExtents: min, maxExtents: max)

    }

The `update` method takes the `min` and the modified `max` element to update the width of the box and the position of the node:

    func update(minExtents: SCNVector3, maxExtents: SCNVector3) {

      guard let scnBox = box.geometry as? SCNBox else {

        fatalError("Geometry is not SCNBox")

      }

      // Normalize the bounds so that min is always < max

      let absMin = SCNVector3(      x: min(minExtents.x, maxExtents.x),       y: min(minExtents.y, maxExtents.y),       z: min(minExtents.z, maxExtents.z)  )

      let absMax = SCNVector3(      x: max(minExtents.x, maxExtents.x),       y: max(minExtents.y, maxExtents.y),       z: max(minExtents.z, maxExtents.z)  )

      // Set the new bounding box

      boundingBox = (absMin, absMax)

      // Calculate the size vector

      let size = absMax - absMin

      // Take the absolute distance

      let absDistance = CGFloat(abs(size.x))

      // The new width of the box is the absolute distance

      scnBox.width = absDistance

      // Give it a offset of half the new size so they box remains fixed

      let offset = size.x * 0.5

      // Create a new vector with the min position   // of the new bounding box

      let vector = SCNVector3(x: absMin.x, y: absMin.y, z: absMin.z)

      // And set the new position of the node with the offset

      box.position = vector + SCNVector3(x: offset, y: 0, z: 0)

    }

At this point, you’ll have a working AR measurement app. But let’s add the Pusher library to publish those measurements in real-time.

### Sending out the measured data with Pusher

If you haven’t already, create a free account at [Pusher](https://pusher.com/). Go to your Dashboard and create an app. Choosing a name, the cluster closest to you location, and _iOS_ as your front-end technology:



![](https://cdn-images-1.medium.com/max/1600/1*W4vC1sJShhacn_MK4JMqQw.png)



This will give you some sample code to get started:



![](https://cdn-images-1.medium.com/max/1600/1*4itzMt0FciChOXrM5KuU6A.png)



Save your key, secret and cluster values, as we’ll need them later.

Finally, go to the **App Setting** tab, check the option **Enable client events** and click on **Update**:



![](https://cdn-images-1.medium.com/max/1600/1*CTXdVhCb2_dtcaoORNsjLA.png)



What we are going to do is publish a client [event](https://pusher.com/docs/client_api_guide/client_events) to send the calculated measure in real-time.

Events are the primary way of packaging messages in Pusher. Not all these events need to go to a web server for validation or persistence when using Pusher.

In some cases, like in this app, events can be sent directly from the client to Pusher, and from there, to all the other clients connected to the channel. However, there are [some things we need to take into account](https://pusher.com/docs/client_api_guide/client_events#trigger-events):

*   Client events must be enabled for the application (like we did).
*   The user must be subscribed to the channel that the event is being triggered on.
*   Client events can only be triggered on [private](https://pusher.com/docs/private_channels) and [presence](https://pusher.com/docs/presence) channels because they require authentication
*   Client events must be prefixed by `client-`.
*   Don’t publish more than [10 messages per second per client (connection)](https://pusher.com/docs/client_api_guide/client_events#rate_limit). Any events triggered above this rate limit will be rejected.

In `ViewController`, let’s import the Pusher library and instantiate the object. We’ll define a variable for the channel and another variable to control the rate of the triggered events:

    ...

    import PusherSwift

    class ViewController: UIViewController, ARSCNViewDelegate {

      ...

      let pusher = Pusher(

        key: "<YOUR_PUSHER_APP_KEY>",

        options: PusherClientOptions(

          authMethod: .inline(secret: "<YOUR_PUSHER_APP_SECRET>"),

          host: .cluster("YOUR_PUSHER_APP_CLUSTER")

        )

      )

      var channel: PusherChannel!

      var sendingTime : TimeInterval = 0

      ...

    }

We have to use a private authenticated channel for client events. The Pusher Swift library provides the following methods of authentication with the `authMethod` option:

*   `endpoint(authEndpoint:String)` The client will make a POST request to the endpoint you specify.
*   `authRequestBuilder(authRequestBuilder:AuthRequestBuilderProtocol)` You specify an object that conforms to the [AuthRequestBuilderProtocol](https://github.com/pusher/pusher-websocket-swift/blob/master/Source/AuthRequestBuilderProtocol.swift).
*   `inline(secret:String)` Your app’s secret so that authentication requests do not need to be made to your authentication endpoint. Instead subscriptions can be authenticated directly inside the library and used for development.
*   `authorizer(authorizer:Authorizer)`   
    You specify an object that conforms to the [Authorizer](https://github.com/pusher/pusher-websocket-swift/blob/master/Source/Authorizer.swift) protocol to provide the appropriate auth information.
*   `noMethod`   
    If you do not need to set an authentication method, this is the default value.

You can learn how to create an [authentication endpoint on this page](https://pusher.com/docs/authenticating_users#implementing_endpoints). For simplicity, we are using the `inline` option that doesn’t require a server for authentication.

In the method `viewDidLoad`, subscribe to a private channel. Remember to use the `private-` prefix and connect to Pusher:

    override func viewDidLoad() {

      ...

      // subscribe to channel and connect

      channel = pusher.subscribe("private-channel")

      pusher.connect()

    }

Let’s also add to the class a function to send a client event. Remember to use the `client-` prefix:

    func sendPusherEvent() {

      channel.trigger(eventName: "client-new-measurement",       data: String(format: "%.2f cm", distance * 100.0)  )

    }

Remember that the method `renderer` and the `measure` function is executed once per frame. Ideally, this is 60 times per second. To limit the number of client events sent to Pusher, we are going to use the `TimeInterval` parameter of the `renderer` method. This tells us the time at which the scene is updated.

Modify the method `measure` to pass the parameter as its argument:

    func renderer(_ renderer: SCNSceneRenderer, updateAtTime time: TimeInterval) {

      // Call the method asynchronously to perform

      //  this heavy task without slowing down the UI

      DispatchQueue.main.async {

        self.measure(time: time)

      }

    }

    func measure(time: TimeInterval) {

      ...

    }

Now add the following `if`block after setting the box rotation:

    func measure(time: TimeInterval) {

      ...

      if let result = planeTestResults.first {

        status = "READY"

        if mode == .measuring {

          ...

          box.rotation = SCNVector4(x: 0, y: 1, z: 0,           w: -(angleInRadians + Float.pi)      )

          // Only send the Pusher event after the specified interval

          if time > sendingTime {

            sendPusherEvent();

            sendingTime = time + TimeInterval(0.2)

          }

        }

      } ...

    }

At first run, time will be greater than `sendingTime.` But then, we add `0.2` seconds (or 200 milliseconds) to time to set the new value of `sendingTime`. This way, we can be sure that the Pusher event will be executed at most 5 times per second.

However, due to this time difference, the last measure probably won’t be sent. So we can call the `sendPusherEvent` method when the user finishes measuring:

    @IBAction func switchChanged(_ sender: UISwitch) {

      if sender.isOn {

        mode = .measuring

      } else {

        mode = .waitingForMeasuring

        sendPusherEvent()

      }

    }

Of course, we could just send the last measure to Pusher to avoid the issue. But what will be the fun of sending only one value?

### Testing the app

Launch the app:



![](https://cdn-images-1.medium.com/max/1600/1*iV0MR66U1aIb5JRdK5bMCg.png)



It may take several seconds to initialize and find a plane so the status can change to _READY_, move around your device slowly and watch for the tracking state of the camera to speed up the process a little bit.

Once it’s _READY_, you will be able to take measurements and see them in real-time on your device:





<iframe data-width="640" data-height="480" width="640" height="480" src="https://medium.freecodecamp.org/media/ef1a64e760e493e719d149391fad180a?postId=41da426dedf9" data-media-id="ef1a64e760e493e719d149391fad180a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fosby8WfvPQA%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





And on the Debug console of your Pusher [dashboard](https://dashboard.pusher.com):



![](https://cdn-images-1.medium.com/max/1600/1*sVWT74fO78OLswbSAgf04A.png)



### Conclusion

In this tutorial, you have learned how to create a basic measurement app with ARKit and how to use Pusher to send client events from an _iOS_ app.

Tracking the features of the real world is an important part of an augmented reality experience. However, sometimes the results are not accurate because the environment can be difficult to measure. In the [ARKit documentation](https://developer.apple.com/documentation/arkit/understanding_augmented_reality), you can find some tips to improve the AR experience.

Remember that you can find the complete project on [this GitHub repository](https://github.com/eh3rrera/MeasureARKitPusher).








