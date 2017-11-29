---
author: Ugo Cupcic
authorTwitter: https://twitter.com/ugocupcic
authorFacebook: none
title: "What it's Like to be a Robot in 2017..."
subTitle: "What will a state-of-the-art robot be able to do in 2017? There are many different types of robots out there, from humanoid robots to ind..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*1wfeIn-huOS_O8YkE2D2BA.png
url: https://medium.freecodecamp.org/what-its-like-to-be-a-robot-in-2017-dc41368894a0
id: what-its-like-to-be-a-robot-in-2017-dc41368894a0
date: 2017-01-05T07:00:38.134Z
tags: [
  "Robotics",
  "Artificial Intelligence",
  "Programming",
  "Tech",
  "Technology"
]
---
# For a grasping / manipulating robot

Hardware-wise, a grasping or manipulating robot needs an arm, a hand, and a 3d sensor. The arm usually has about 6 degrees of freedom (for reference, the human arm has 7). This makes it possible to get to any given point in a workspace.

On top of a good position control — being able to drive each joint towards its given target quickly and reliably — the arm and hand also need a reliable torque control. This means that you’re able to apply a given torque with a given joint.

An advanced hand will also have tactile sensing, which makes it possible to manipulate the objects.



![](https://cdn-images-1.medium.com/max/1600/1*pZkMp3nu7Vy2AWrczT-Axw.png)

[A 3d scene](http://www.ros.org/news/assets_c/2015/06/pallet-thumb-480x375-1206.png) acquired from a Kinect.



For a modern robot, understanding its environment is essential. You can’t grasp or use an object if you can’t see it.

The pipeline that’s used the most often for this task is the following:

*   First, the vision pipeline will run a **segmentation algorithm** to isolate the different objects in the incoming scene, for example, a 3d point cloud.
*   Then it will run through some **recognition steps**. The goal is to identify the objects if possible, and align some known mesh of the object.

The diagrams below are quite simple compared to the real use-case above. Recent advances in deep learning are [showing great promises](https://devblogs.nvidia.com/parallelforall/image-segmentation-using-digits-5/) in this domain.







![](https://cdn-images-1.medium.com/max/800/1*aMZGwM0S39X80ClgQB-Knw.jpeg)





![](https://cdn-images-1.medium.com/max/800/1*t0dA_wNPVGTj-Q_bElvr8Q.jpeg)





![](https://cdn-images-1.medium.com/max/800/1*YqSI_SYz4xIeFcsEd7g8Gw.jpeg)

Full scene / segmented results: each object is a different color / each object is recognised, the model is aligned in blue.







Now that the robot has a rough understanding of where things are in the scene, it needs to be able to navigate the environment, avoiding the obstacles. This is the field of **motion planning**. There are [plenty of](https://medium.com/@ugocupcic/how-to-make-your-robot-go-from-a-to-b-without-hitting-things-1063a8890947) different [algorithms](https://medium.com/@ugocupcic/how-to-make-your-robot-go-from-a-to-b-without-hitting-things-9b86a758a3ae) that deal with motion planning.

Now that the robot has a way of reaching the object you want it to grasp, you need to know how to close the hand around the object. There are different ways to address this issue, but two main approaches used most often are **grasp planning** and **teaching by demonstration**.

In the grasp planning approach, the algorithm uses some heuristics to compute different grasps and evaluate the grasps using a [grasp quality measurement](https://medium.com/@ugocupcic/how-to-tell-if-my-robots-grasp-is-stable-7811fa3d16b8). In the teaching by demonstration approach, a human shows the robot how to do the action. The algorithm then takes care of extracting the information to make the action work reliably on the robot.







![](https://cdn-images-1.medium.com/max/800/1*mzLe2WPFYwYjyNtpmX2aiw.jpeg)





![](https://cdn-images-1.medium.com/max/800/1*D3tG6I1zahdxowE1MXOebw.jpeg)





![](https://cdn-images-1.medium.com/max/800/1*ppexSOcsGhqdCQ-C8KSGPA.jpeg)

Teaching by demonstration — opening a bottle at [Bielefled university](https://ni.www.techfak.uni-bielefeld.de/robotics/manual_action_representation).







Finally, it’s possible to close the loop using the different sensors available in the robot to accomplish an action, such as stabilizing a grasp when detecting slippage, or moving a finger on an object without letting go of it. Running a tight **control loop**, then using its data to modify a robot’s next command is a one of the most challenging aspect of robotics.





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/5a5cc0c88ff24e6792f667b9efc8b047?postId=dc41368894a0" data-media-id="5a5cc0c88ff24e6792f667b9efc8b047" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FV8JGWT473hM%2Fhqdefault.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



Following a surface with a fingertip during the GSC project — joint work with Hongbin Liu from King’s College London.



### How can we move forward

It will take a lot of work to develop all of these capabilities and get them to work in all environments. Each individual and each robotics department will have its own specific area of expertise. For example, my area of expertise is in grasping and manipulation, while other people focus more on humanoid robots, mobile platforms and vision.

We all face the same challenge, though: solving complex problems with unreliable data.

Advanced robots are still too often reserved for specialists. They’re hard to program, and you need a lot of knowledge to get them to accomplish new things. But often, what you want your robot to do can be described easily. This is a task that you could do yourself.

To solve this issue, more and more companies are turning to visual programming interfaces in robotics: [NAO’s Choregraphe](https://www.youtube.com/watch?v=q2ihy_mVpY8), [Robot Blockly](http://wiki.ros.org/blockly) (used at Shadow and Erle Robotics), and [Franka’s Desk](https://www.franka.de/#chapter2).



![](https://cdn-images-1.medium.com/max/1600/1*j-MZPZWl4KzmLNBWitthrg.png)

Shadow Robot’s Blockly interface.



But to be able to program advanced robots intuitively through these interfaces, you need advanced — and robust — capabilities.

I’m personally convinced that the way forward is to build more and more intelligence inside the tools themselves. This way, each capability can be implemented by experts.

This black-box approach makes it easier to combine different high-level capabilities, reusing the various state-of-the-art techniques developed by different experts. The boxes don’t need to be black, but the result should be that end users be able to just focus on that box’s functionality — its inputs and its outputs — instead of being distracted by how that functionality should be implemented.

As roboticists, if we want advanced robots to be useful to non-specialists, we need to simplify the interface. But in order do that, we first need to implement more and more advanced capabilities, then wrap them up inside the tools themselves.











* * *







If you enjoyed this article, how about liking and sharing it? Also, If you want to discuss robotics, let’s [connect on Twitter](http://twitter.com/ugocupcic).



![](https://cdn-images-1.medium.com/max/1600/1*bYWLCSD5yxrMMlBV-nNaDA.gif)










