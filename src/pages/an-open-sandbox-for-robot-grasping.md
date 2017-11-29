---
author: Ugo Cupcic
authorTwitter: https://twitter.com/ugocupcic
authorFacebook: none
title: "We built an open sandbox for training robotic hands to grasp things"
subTitle: "Getting started with robotics is probably a lot easier than you think. Here’s a simulation sandbox that’s cross-platform and provides a s..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*z4z_pGa-kSvjO-kgvwOetA.jpeg
url: https://medium.freecodecamp.org/an-open-sandbox-for-robot-grasping-cee467a3fabb
id: an-open-sandbox-for-robot-grasping-cee467a3fabb
date: 2017-03-29T04:34:23.381Z
tags: [
  "Docker",
  "Machine Learning",
  "Robotics",
  "Programming",
  "Tech"
]
---
# We built an open sandbox for training robotic hands to grasp things







![](https://cdn-images-1.medium.com/max/2000/1*z4z_pGa-kSvjO-kgvwOetA.jpeg)

Credit: [WallpaperSafari](http://wallpapersafari.com/w/j2PNXG/)







Getting started with robotics is probably a lot easier than you think. Here’s a simulation sandbox that’s cross-platform and provides a simple high level API. It should help you get started experimenting with robot grasping tasks.

As the Chief Technical Architect at the [Shadow Robot Company](http://www.shadowrobot.com/), I spend a lot of time playing with different algorithms to see how they’d fit our robots. Controlling a complex robot to make it behave the way you’d want in a complex environment is… complex!

An important part of our roadmap relies on **machine learning**. I don’t want to have to specify every aspect of a problem — I’d rather the system learn the best way to approach a given problem itself.

Setting up the environment to easily try different machine learning algorithms — for example for refining grasps — is not trivial. Here were my requirements:

*   **a** **good simulation** scene to get started: a robot, a 3d sensor, some objects to interact with, some furniture to plan around and use
*   **a** **variety of tools** and libraries to get started quickly with playing with the robot: robotic framework ([ROS](http://www.ros.org)), simulator ([Gazebo](http://gazebosim.org/)), planning libraries ([MoveIt!](http://moveit.ros.org))
*   **a way to run it** **headless** while being able to visualize the data
*   **easily** **deployable**, well documented… all the usuals!

If you don’t want to read through the specifics but just want to get your hands on the sandbox you can head over to the [github repository](https://github.com/shadow-robot/smart_grasping_sandbox) which contains the instruction for a quick start. For using the sandbox in the cloud you can also visit the [ROS Development Studio](http://rds.theconstructsim.com/) where it’s deployed.

### The simulation





<iframe data-width="640" data-height="480" width="640" height="480" src="https://medium.freecodecamp.org/media/5713681036b539743a2ff7efa7758c35?postId=cee467a3fabb" data-media-id="5713681036b539743a2ff7efa7758c35" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FQjrrIr6oSgw%2Fhqdefault.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



Smart Grasping Sandbox simulated scene



The Smart Grasping Sandbox will be running on the [Robotic Operating System](http://www.ros.org) — **ROS**. As a long time ROS user and contributor I’m very partial to using that framework. It’s the _de facto_ open source framework designed for robotics. It takes the hassle of connecting the different components of a robotic system with a modular approach. This makes it possible to swap a given component easily. On top of that it’s driven by a thriving community, so you can always find the latest algorithm or driver.

In order to teach a robot, it’s a good idea to start with a simulator. Running the algorithms on the actual hardware is not only more expensive but often less convenient: it’s harder to reset the environment in real life than in simulation. It’s also often harder to characterize the impact of the robot on the scene: did the ball get picked up? Was the grasp stable? All of this information is available out of the box in a simulator.

The simulator we’ll use is [**Gazebo**](http://gazebosim.org); this is a physics simulator for robotics and is also tightly integrated with the ROS framework. Plenty of robot models are available in the simulator, from arms and grippers to quadcopters! In the Smart Grasping Sandbox, the robot I’m providing is a [UR10 from Universal Robot](https://www.universal-robots.com/products/ur10-robot/?ads_cmpid=38441226&ads_adid=36523128894&ads_matchtype=b&ads_network=g&ads_creative=166486296408&utm_term=ur10&ads_targetid=kwd-951605358&utm_campaign=&utm_source=adwords&utm_medium=ppc&ttv=2&gclid=CNCC_p_c_dECFbcK0wodyCED_w) with Shadow’s [Smart Grasping System](https://www.shadowrobot.com/shadow-smart-grasping-system/). The scene only contains two useful objects for now: a cricket ball and a drill. This is just a starting point. The scene will evolve with time. The 3d Vision sensor in the simulation is a [Microsoft Kinect](https://en.wikipedia.org/wiki/Kinect) as it’s often used in robotics (yes, the very same Kinect you used to play _Just Dance_ on your Xbox).

### Docker container

Setting up the different frameworks and libraries is not trivial and takes time. To simplify the deployment, I’m automatically building a [Docker](https://www.docker.com/) image. If you’re not familiar with Docker, I won’t go into the specifics as it’s out of scope for this article, but let’s say it’s a super lightweight Virtual Machine like environment: you can spawn images very quickly while exploiting your computer’s full potential.

Deploying the image with Docker also makes it OS agnostic — ROS and Gazebo are more Linux friendly. It’s also a great way to test things on your laptop, then once you’re ready to start a longer experiment, simply spawn in in the cloud. Since I included a web interface to the simulator, you can even visualize what’s happening in simulation by connecting through your browser. To ease the development process, I included a [Jupyter notebook](http://jupyter.org/) which you can access through your browser.

### Libraries and tools

In order to speed up your development process, I’ve developed a simple high level library — boldly called the _SmartGrasper_. This library makes it possible to interact directly with the simulated sandbox sending commands such as pick the ball, open the hand, move above the ball… For the path planning, it relies on ROS’ planning library: [MoveIt!](http://moveit.ros.org), so that you can [safely move the robot from A to B without hitting things](https://medium.com/@ugocupcic/how-to-make-your-robot-go-from-a-to-b-without-hitting-things-1063a8890947).







![](https://cdn-images-1.medium.com/max/2000/1*TfmzfFUkM-krMzLyFfumnQ.png)

iPython notebook







The sandbox comes with an example iPython notebook that shows how to pick up the ball using the SmartGrasper library. You can use this example as a base to do your own development.

### Final words

So I spent some time preparing that sandbox and now that it’s ready, [I’m sharing it with you](https://github.com/shadow-robot/smart_grasping_sandbox)! Head over to the [shadow-robot/smart-grasping-sandbox github repository](https://github.com/shadow-robot/smart_grasping_sandbox) to get started. Feel free to play with it, [submit issues](https://github.com/shadow-robot/smart_grasping_sandbox/issues), pull requests...

There’s still a lot more to be done: adding [OpenRave](http://www.openrave.org) for grasp planning, adding more complexity to the scene to be able to learn different actions, adding some vision algorithms for recognizing the different objects… But this is just the first release of the Smart Grasping Sandbox!







![](https://cdn-images-1.medium.com/max/2000/1*98Bu_qcmt975ADGwoKQYJA.png)

The Smart Grasping Sandbox in the Construct







I’m also working with the amazing team at The Construct to make the Smart Grasping Sandbox available on the [ROS Development Studio](http://rds.theconstructsim.com) for an even quicker way to test your ideas.

_If you’re doing something cool with the Smart Grasping Sandbox, or have any questions, let’s connect on_ [_Twitter_](http://twitter.com/ugocupcic)_! If you enjoyed this article, how about liking and sharing it?_



![](https://cdn-images-1.medium.com/max/1600/1*bYWLCSD5yxrMMlBV-nNaDA.gif)










