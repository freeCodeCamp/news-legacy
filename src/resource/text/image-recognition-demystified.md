---
author: gk_
authorTwitter: https://twitter.com/gk_
authorFacebook: https://facebook.com/10154238595463041
title: "Image Recognition Demystified"
subTitle: "Nothing in machine learning captivates the imagination quite like the ability to recognize images. Identifying imagery must connote “inte..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*W0QURB5AK4NvOX62yYPLwg.jpeg
url: https://medium.freecodecamp.org/image-recognition-demystified-fc9c89b894ce
id: image-recognition-demystified-fc9c89b894ce
date: 2017-03-23T14:00:28.960Z
tags: [
  "Machine Learning",
  "Data Science",
  "Artificial Intelligence",
  "AI",
  "Tech"
]
---
# Image Recognition Demystified



![](https://cdn-images-1.medium.com/max/1600/1*W0QURB5AK4NvOX62yYPLwg.jpeg)



Nothing in machine learning captivates the imagination quite like _the ability to recognize images._ Identifying imagery must connote “intelligence,” right? Let’s demystify.

The ability to “see,” when it comes to software, begins with the ability to classify. Classification is pattern matching with data. Images are data in the form of 2-dimensional matrices.

Image recognition is classifying data into one bucket out of many. This is useful work: you can classify an entire image or things within an image.



![](https://cdn-images-1.medium.com/max/1600/1*peDK8ySk0NHBRJMxSEzu8w.jpeg)



One of the classic and quite useful applications for image classification is optical character recognition ([OCR](https://en.wikipedia.org/wiki/Optical_character_recognition)): _going from images of written language to structured text_.

This can be done for any alphabet and a wide variety of writing styles.

### Steps in the process

We’ll build code to recognize numerical digits in images and show how this works. This will take 3 steps:

1.  gather and organize **data** to work with (85% of the effort)
2.  build and test a **predictive model** (10% of the effort)
3.  use the model to **recognize** images (5% of the effort)

Preparing the data is by far the largest part of our work, _this is true of most data science work_. There’s a reason it’s called DATA science!

The building of our predictive model and its use in predicting values _is all math_. We’re using software to iterate through data, [to iteratively forge “weights” within mathematical equations](https://medium.com/p/how-neural-networks-work-ff4c7ad371f7), and to work with data structures. The software isn’t “intelligent”, it works mathematical equations to do the narrow knowledge work, in this case: recognizing images of digits.

In practice, most of what people label “AI” is really just software [performing knowledge work](https://medium.com/intuitionmachine/the-ai-label-is-bullshit-559b171867ff).

### Our predictive model and data

We’ll be using one of the simplest predictive models: the “k-nearest neighbors” or “kNN” regression, first published by E. Fix, J.L. Hodges in 1952.

A simple explanation of this algorithm is [here](https://www.analyticsvidhya.com/blog/2014/10/introduction-k-neighbours-algorithm-clustering/) and a video of its math [here](https://www.youtube.com/watch?v=4ObVzTuFivY). And also [here](http://machinelearningmastery.com/tutorial-to-implement-k-nearest-neighbors-in-python-from-scratch/) for those that want to build the algorithm from scratch.

Here’s how it works: imagine a graph of data points and circles capturing k points, with each value of k validated against your data.



![](https://cdn-images-1.medium.com/max/1600/1*rmdr7RsUPOWranwOuuIl7w.png)

credit: [http://bdewilde.github.io](http://bdewilde.github.io/about-me/)



The validation error for k in your data has a minimum which can be determined.



![](https://cdn-images-1.medium.com/max/1600/1*WUjVS8di8GVnTise0pRUOw.png)

credit: [https://www.analyticsvidhya.com](https://www.analyticsvidhya.com)



Given the ‘best’ value for k you can classify other points with some measure of precision.

We’ll use [scikit learn’s kNN algorithm](http://scikit-learn.org/stable/modules/neighbors.html) to avoid building the math ourselves. Conveniently this library will also provides us our [images data](http://scikit-learn.org/stable/auto_examples/classification/plot_digits_classification.html#sphx-glr-auto-examples-classification-plot-digits-classification-py).



![](https://cdn-images-1.medium.com/max/1600/1*Z0-GGUh1Z9O2J4jlDFgyrg.png)

credit: [http://scikit-learn.org](http://scikit-learn.org)



Let’s begin.

The code is [here](https://github.com/ugik/notebooks/blob/master/Digits%20Classification.ipynb), we’re using [iPython notebook](https://ipython.org/notebook.html) which is a productive way of working on data science projects. The code syntax is Python and our example is borrowed [from sk-learn](http://scikit-learn.org/stable/auto_examples/classification/plot_digits_classification.html).

Start by importing the necessary libraries:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/df4cdcd7bf0e4b3d2bc652bddbca78cf?postId=fc9c89b894ce" data-media-id="df4cdcd7bf0e4b3d2bc652bddbca78cf" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F1076402%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Next we organize our data:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ea8549e1a772919fe05cd5f35b5c8b0d?postId=fc9c89b894ce" data-media-id="ea8549e1a772919fe05cd5f35b5c8b0d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F1076402%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





<pre name="cb3e" id="cb3e" class="graf graf--pre graf-after--figure">training images: 1527, test images: 269</pre>

You can manipulate the fraction and have more or less test data, we’ll see shortly how this impacts our model’s accuracy.

By now you’re probably wondering: how are the digit images organized? They are arrays of values, one for each pixel in an 8x8 image. Let’s inspect one.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b3fca9dd3a069ff2556568f1d5e03adf?postId=fc9c89b894ce" data-media-id="b3fca9dd3a069ff2556568f1d5e03adf" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F1076402%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





<pre name="5d75" id="5d75" class="graf graf--pre graf-after--figure"># one-dimension  
[  0\.   1\.  13\.  16\.  15\.   5\.   0\.   0\.   0\.   4\.  16\.   7\.  14\.  12\.   0\.   0\.   0\.   3\.  12\.   2\.  11\.  10\.   0\.   0\.   0\.   0\.   0\.   0\.  14\.   8\.   0\.   0\.   0\.   0\.   0\.   3\.  16\.   4\.   0\.   0\.   0\.   0\.   1\.  11\.  13\.   0\.   0\.   0\.   0\.   0\.   9\.  16\.  14\.  16\.   7\.   0\.   0\.   1\.  16\.  16\.  15\.  12\.   5\.   0.]</pre>

<pre name="e82e" id="e82e" class="graf graf--pre graf-after--pre"># two-dimensions  
[[  0\.   1\.  13\.  16\.  15\.   5\.   0\.   0.]  
 [  0\.   4\.  16\.   7\.  14\.  12\.   0\.   0.]  
 [  0\.   3\.  12\.   2\.  11\.  10\.   0\.   0.]  
 [  0\.   0\.   0\.   0\.  14\.   8\.   0\.   0.]  
 [  0\.   0\.   0\.   3\.  16\.   4\.   0\.   0.]  
 [  0\.   0\.   1\.  11\.  13\.   0\.   0\.   0.]  
 [  0\.   0\.   9\.  16\.  14\.  16\.   7\.   0.]  
 [  0\.   1\.  16\.  16\.  15\.  12\.   5\.   0.]]</pre>

The same image data is shown as a flat (one-dimensional) array and again as an 8x8 array in an array (two-dimensional). Think of each row of the image as an array of 8 pixels, there are 8 rows. We could ignore the gray-scale (the values) and work with 0’s and 1’s, that would simplify the math a bit.

We can ‘plot’ this to see this array in its ‘pixelated’ form.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9b5578f92b274afc1a71ee5824e8bf8d?postId=fc9c89b894ce" data-media-id="9b5578f92b274afc1a71ee5824e8bf8d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F1076402%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>







![](https://cdn-images-1.medium.com/max/1600/1*kuMXKLWP30lCcinFeFmlwg.png)



What digit is this? Let’s ask our model, but first we need to build it.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/cd28b2eabe812dff0c9f2724ffb1a24a?postId=fc9c89b894ce" data-media-id="cd28b2eabe812dff0c9f2724ffb1a24a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F1076402%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





<pre name="9de4" id="9de4" class="graf graf--pre graf-after--figure">KNN score: 0.951852</pre>

Against our test data our nearest-neighbor model had an accuracy score of 95%, not bad. Go back and change the ‘fraction’ value to see how this impacts the score.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ca32ee6ba80d311f8200a8dbabd58d10?postId=fc9c89b894ce" data-media-id="ca32ee6ba80d311f8200a8dbabd58d10" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F1076402%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





<pre name="310f" id="310f" class="graf graf--pre graf-after--figure">array([2])</pre>

The model predicts that the array shown above is a ‘**2**’, which looks correct.

Let’s try a few more, remember _these are digits from our test data_, we did not use these images to build our model (very important).





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/7e93abc5169946eb12bb5985f97fd1d0?postId=fc9c89b894ce" data-media-id="7e93abc5169946eb12bb5985f97fd1d0" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F1076402%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>







![](https://cdn-images-1.medium.com/max/1600/1*7_tI-pWkoL_TGnznn03XSQ.png)







<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/0d14358fd16293a8e691ec1501801412?postId=fc9c89b894ce" data-media-id="0d14358fd16293a8e691ec1501801412" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F1076402%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>







![](https://cdn-images-1.medium.com/max/1600/1*i_66ipCudPzXp_7xybbduQ.png)



Not bad.

We can create a fictional digit and see what our model thinks about it.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b3d5289c4409001e1e6e63b2ae99845c?postId=fc9c89b894ce" data-media-id="b3d5289c4409001e1e6e63b2ae99845c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F1076402%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>







![](https://cdn-images-1.medium.com/max/1600/1*qbRTa4wnIY2dzrzTMjPMBA.png)



If we had a collection of nonsensical digit images we could add those to our training with a non-numeric label — just another classification.

### So how does image recognition work?

*   **image data is organized**: both training and test, with labels (X, y)

Training data is kept separate from test data, which also means we remove duplicates (or near-duplicates) between them.

*   **a model is built** using one of several mathematical models ([kNN](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm), [logistic regression](https://en.wikipedia.org/wiki/Logistic_regression), [convolutional neural network](https://en.wikipedia.org/wiki/Convolutional_neural_network), etc.)

Which type of model you choose depends on your data and the type and complexity of the classification work.

*   new data is put into the model to **generate a prediction**

This is lighting fast: the result of a single mathematical calculation.



![](https://cdn-images-1.medium.com/max/1600/1*BWwtxuFc-EwBhAj3-FMXUQ.jpeg)



If you have a collection of pictures with _and without_ cats, you can build a model to classify if a picture contains a cat. Notice you need training images that are devoid of any cats for this to work.

Of course you can apply multiple models to a picture and identify several things.

### Large Data

A significant challenge in all of this is _the size of each image_ since 8x8 is not a reasonable image size for anything but small digits, it’s not uncommon to be dealing with 500x500 pixel images, or larger. That’s 250,000 pixels per image, so 10,000 images of training means _doing math on 2.5Billion values_ to build a model. And the math isn’t just addition or multiplication: we’re multiplying matrices, multiplying by floating-point weights, calculating derivatives. This is why processing power (and memory) is key in certain machine learning applications.

There are strategies to deal with this image size problem:

*   use hardware graphic processor units ([GPUs](https://en.wikipedia.org/wiki/Graphics_processing_unit)) to speed up the math
*   reduce images to smaller dimensions, without losing clarity
*   reduce colors to gray-scale and gradients (you can still _see_ the cat)



![](https://cdn-images-1.medium.com/max/1600/1*hcsGFgx20IiVrKaw5tSaHw.png)



*   look at sections of an image to find what you’re looking for

The good news is once a model is built, no matter how laborious that was, the prediction is fast. Image processing is used in applications ranging from facial recognition to OCR to self-driving cars.

Now you understand the basics of how this works.








