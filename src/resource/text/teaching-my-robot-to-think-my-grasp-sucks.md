---
author: Ugo Cupcic
authorTwitter: https://twitter.com/ugocupcic
authorFacebook: none
title: "How I taught my robot to realize how bad it was at holding things"
subTitle: "As the Chief Technical Architect of the Shadow Robot Company, I spend a lot of time thinking about grasping things with our robots. This ..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*14ZzW3BGzORaYeo_xHvFWA.jpeg
url: https://medium.freecodecamp.org/teaching-my-robot-to-think-my-grasp-sucks-5e3d5a908745
id: teaching-my-robot-to-think-my-grasp-sucks-5e3d5a908745
date: 2017-09-04T20:12:33.462Z
tags: [
  "Machine Learning",
  "Deep Learning",
  "Artificial Intelligence",
  "Robotics",
  "Data Science"
]
---
# How I taught my robot to realize how bad it was at holding things







![](https://cdn-images-1.medium.com/max/2000/1*14ZzW3BGzORaYeo_xHvFWA.jpeg)

My daughter Alicia doing her best to hold on to the paper towel







As the Chief Technical Architect of the [Shadow Robot Company](https://www.shadowrobot.com/), I spend a lot of time thinking about grasping things with [our robots](https://www.shadowrobot.com/products/). This story is a quick delve into the world of grasp robustness prediction using machine learning.

First of all, why focus on this? There are currently much more exciting projects using deep learning for robotics. For example, the work done by Ken Goldberg and his team at UC Berkeley on [DexNet](https://berkeleyautomation.github.io/dex-net/) is very impressive. They manage to reliably grasp 99% of their test set using deep learning. But when we work on delivering a “Hand that Grasps” as a product, we have to focus on delivering smaller robust iterations first. Being able to predict whether a grasp is stable or not, dynamically, is an interesting topic for the industry. For example, if you can determine that a grasp has a high chance of failing before it actually does, you can save a lot of time by re-grasping.

The goal isn’t to give you the best solution for grasp quality using machine learning, but rather to give a gentle introduction to using machine learning in robotics for a directly useful purpose which is hard to solve [with existing standard algorithms](https://medium.com/@ugocupcic/how-to-tell-if-my-robots-grasp-is-stable-7811fa3d16b8).

If you want to skip the explanations and get your hands dirty with the open source dataset and code, [head on over to Kaggle](https://www.kaggle.com/ugocupcic/grasping-dataset).

### Gathering the dataset

Using the [Smart Grasping Sandbox](https://medium.freecodecamp.org/an-open-sandbox-for-robot-grasping-cee467a3fabb), we gathered a large dataset for our purpose. Since our goal is to classify whether a grasp is stable or not, we need to gather a dataset containing both stable and unstable grasps. We also needed to quantify the stability of a grasp automatically in order to annotate our data easily — instead of annotating it manually.

Which data should we record? We get plenty of data from the simulation. To simplify things, we’ll be looking at the state of the joints only. This state contains — for each joint — the position, the torque and the velocity. Since we want a grasp quality that’s object-agnostic, we won’t be using the joint position: the shape of the hand is purely object specific. So we’ll be recording each joint velocity and torque.

Our dataset will look like this:







![](https://cdn-images-1.medium.com/max/2000/1*C5BDb5q3GBZ20G3DPHMVzw.png)

Dataset overview







#### An objective grasp stability measurement

In simulation, there’s an easy way to check whether a grasp is stable or not. Once the object is grasped — if the grasp is stable — then the object shouldn’t move in the hand. This means that the distance between the object and the palm shouldn’t change when shaking the object. Lucky for us, this measure is very easy to get in simulation!







![](https://cdn-images-1.medium.com/max/800/1*RWxTUMlwHQyTVIZ9g1Sx2g.jpeg)





![](https://cdn-images-1.medium.com/max/800/1*l9qyPBafqs6h5-n2aHkDyg.gif)





![](https://cdn-images-1.medium.com/max/800/1*UWO-hJVxzJF8lBL0YwVKnA.jpeg)

1\. first grasp 2\. then shake, whilst 3\. measuring the distance between the palm and the object







#### Let’s record some data

Now that we know what we’re doing, we’ll be using the Sandbox to record a large dataset. You can have a look at the code I use to do this [over here](https://github.com/shadow-robot/smart_grasping_sandbox/blob/master/smart_grasping_sandbox/nodes/grasp_quality.py). Since the Sandbox is running on Docker, it’s very easy to spawn multiple instances in parallel on a server and let them run in parallel for a while.

Since I don’t trust simulations to run for too long — call it a strong belief based on personal experience, same as the demo effect — I also only run 100 grasp iterations before restarting the Docker container with a pristine environment.





<iframe data-width="640" data-height="480" width="640" height="480" src="https://medium.freecodecamp.org/media/52336e6e778fe8401f35cc1ae577dbed?postId=5e3d5a908745" data-media-id="52336e6e778fe8401f35cc1ae577dbed" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FYTxWfz0DSiU%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



Recording grasps in the Smart Grasping Sandbox



In order to get a relevant dataset, I randomise the grasp pose around a good grasp — which I found empirically: we want enough bad grasps in there. I’m also using different approach distances. This gives me — roughly — a 50/50 ratio of stable and unstable grasps — with plenty of grasps in between.

For your convenience, I’ve made this dataset public and you can find it on [Kaggle](https://www.kaggle.com/ugocupcic/grasping-dataset).

### Let’s learn!

Now that we have gathered a good enough learning set, we want to teach a Neural Net in order to predict whether a grasp is stable or not, based on the current joint state.

#### What’s a Neural Net?

With all the current hype around Deep Learning, it’s easy to imagine a computer with a brain learning new things auto-magically. Let’s demystify the Neural Net quickly.



![](https://cdn-images-1.medium.com/max/1600/1*Ou2uG2WHO0adhX6GORTwQQ.jpeg)



As shown above, a Neural Net takes as an input a vector — in our case the torque and velocity for each fingers. Then this vector is transformed a few times — as many times as there are layers — and a final vector is the output of the Neural Net: the classification of the data that was given. In our case the output we want is whether the grasp is robust or not — so it’s a vector of size 1.

During the learning process, we will feed the network values we’ve gathered in the dataset. Since we know whether those joint values are for stable or unstable grasps — our dataset is annotated — the training process adjusts the parameters of the different transitions between the layers.

The art of machine learning consists of choosing the network topography — how many layers and neurones, plus which transition functions to use in our network — as well as gathering a good dataset. If we have all this, then we can train a network that will generalise well to cases that haven’t been seen during the training.

#### Training the network

The goal of this exercise isn’t to create the perfect grasp quality prediction algorithm, but rather to simply show how it’s possible to use the smart grasping sandbox for machine learning. I chose a very simple topology for the network: I’m using one single hidden layer between the input and output layer. For more details, refer to the [iPython notebook](https://www.kaggle.com/ugocupcic/grasp-quality-prediction).

For simplicity’s sake, I’m using the excellent [Keras library](https://keras.io/). If you can’t wait and want to see the actual code, go to [Kaggle](https://www.kaggle.com/ugocupcic/grasping-dataset). Otherwise, read on!

After loading the dataset in memory, I split it between the training set and the test set. Validation will be run on part of the training set, and I’ll use the test set to see whether it generalizes well.

Since my network is small, training is relatively fast, even on my laptop. When I train deeper networks, I spawn the docker image on a beefy machine in the cloud, using NVidia’s GPUs to speed up training.

After training my network, I get an accuracy of 78.87%.

### Testing my trained network on live data

Now that we trained our Neural Net we can use it to predict the grasp quality in real time on the simulation. As you can see in the video below the prediction is working nicely most of the time.





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/2eacfceb42e3fcbca0a7ca097aa4fe6d?postId=5e3d5a908745" data-media-id="2eacfceb42e3fcbca0a7ca097aa4fe6d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FpuaYbOsHnF8%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



Showing first a stable grasp, then an unstable one. Live prediction is the blue plot on the left.



As you can see in this video, the live prediction of the grasp — the blue plot on the left — is higher than 0.5 when grasping the ball the first time. This results in a very stable grasp. On the contrary, during the second grasp, the metrics stays under 0.2, rightfully predicting that the grasp will fail.

### Final words

I hope this story piqued your interest. If you want to try to train your own algorithm on this dataset, the easiest thing to do is to [go to Kaggle.com](https://www.kaggle.com/ugocupcic/grasping-dataset) where it’s already set up for you.

Obviously, there’s much more that should be done to deploy this method in production. The first thing to tackle is to have a better simulation in order to pick up a wide variety of objects. I’ll also be looking at having a live objective grasp quality — the one that’s used to annotate our dataset — in order to be able to use time-series prediction instead of one shot prediction. And the final challenge will be transferring that learning to the real robot.

There are so many interesting topics to explore machine learning with in robotics: grasp quality, slippage detection, amongst others.

I hope that you can’t wait to test your ideas on the sandbox. If you do, [let me know on Twitter](http://twitter.com/ugocupcic)!








