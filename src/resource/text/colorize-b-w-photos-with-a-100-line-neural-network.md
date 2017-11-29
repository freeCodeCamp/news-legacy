---
author: Emil Wallnér
authorTwitter: https://twitter.com/EmilWallner
authorFacebook: https://facebook.com/10153194951565379
title: "How to colorize black &amp; white photos with just 100 lines of neural network code"
subTitle: "Earlier this year, Amir Avni used neural networks to troll the subreddit/r/Colorization — a community where people colorize historical bl..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*Wk43GNwKLB4kYjQt5i8ntQ.png
url: https://medium.freecodecamp.org/colorize-b-w-photos-with-a-100-line-neural-network-53d9b4449f8d
id: colorize-b-w-photos-with-a-100-line-neural-network-53d9b4449f8d
date: 2017-10-29T15:02:49.447Z
tags: [
  "Machine Learning",
  "Tech",
  "Data Science",
  "Programming",
  "Startup"
]
---
# How to colorize black & white photos with just 100 lines of neural network code

Earlier this year, Amir Avni used neural networks to [troll the subreddit](http://www.whatimade.today/our-frst-reddit-bot-coloring-b-2/)[/r/Colorization](https://www.reddit.com/r/Colorization/) — a community where people colorize historical black and white images manually using Photoshop.

They were astonished with Amir’s deep learning bot. What could take up to a month of manual labour could now be done in just a few seconds.

I was fascinated by Amir’s neural network, so I reproduced it and documented the process. First off, let’s look at some of the results/failures from my experiments (scroll to the bottom for the final result).



![](https://cdn-images-1.medium.com/max/1600/1*Wk43GNwKLB4kYjQt5i8ntQ.png)

The original b&w images are from Unsplash



Today, colorization is usually done by hand in Photoshop. To appreciate all the hard work behind this process, take a peek at this gorgeous colorization memory lane video:





<iframe data-width="854" data-height="480" width="700" height="393" src="https://medium.freecodecamp.org/media/5262de6e215aca6ab020904c0794ad6f?postId=53d9b4449f8d" data-media-id="5262de6e215aca6ab020904c0794ad6f" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FvubuBrcAwtY%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





In short, a picture can take up to one month to colorize. It requires extensive research. A face alone needs up to 20 layers of pink, green and blue shades to get it just right.

This article is for beginners. Yet, if you’re new to deep learning terminology, you can read my previous two posts [here](https://blog.floydhub.com/my-first-weekend-of-deep-learning/) and [here](https://blog.floydhub.com/coding-the-history-of-deep-learning/), and watch Andrej Karpathy’s [lecture](https://www.youtube.com/watch?v=LxfUGhug-iQ) for more background.

I’ll show you how to build your own colorization neural net in three steps.

The first section breaks down the core logic. We’ll build a bare-bones 40-line neural network as an “alpha” colorization bot. There’s not a lot of magic in this code snippet. This well help us become familiar with the syntax.

The next step is to create a neural network that can generalize — our “beta” version. We’ll be able to color images the bot has not seen before.

For our “final” version, we’ll combine our neural network with a classifier. We’ll use an [Inception Resnet V2](https://research.googleblog.com/2016/08/improving-inception-and-image.html) that has been trained on 1.2 million images. To make the coloring pop, we’ll train our neural network on portraits from [Unsplash](https://unsplash.com/).

If you want to look ahead, here’s a [Jupyter Notebook](https://www.floydhub.com/emilwallner/projects/color/43/code/Alpha-version/alpha_version.ipynb) with the Alpha version of our bot. You can also check out the three versions on [FloydHub](https://www.floydhub.com/emilwallner/projects/color/43/code) and [GitHub](https://github.com/emilwallner/Coloring-greyscale-images-in-Keras), along with code for [all the experiments](https://www.floydhub.com/emilwallner/projects/color/jobs) I ran on FloydHub’s cloud GPUs.

### Core logic

In this section, I’ll outline how to render an image, the basics of digital colors, and the main logic for our neural network.

Black and white images can be represented in grids of pixels. Each pixel has a value that corresponds to its brightness. The values span from 0–255, from black to white.



![](https://cdn-images-1.medium.com/max/1600/1*QVT2380CUU_h7ZCSvR7T0Q.png)



Color images consist of three layers: a red layer, a green layer, and a blue layer. This might be counter-intuitive to you. Imagine splitting a green leaf on a white background into the three channels. Intuitively, you might think that the plant is only present in the green layer.

But, as you see below, the leaf is present in all three channels. The layers not only determine color, but also brightness.



![](https://cdn-images-1.medium.com/max/1600/1*eLVP_ujVoM9pXRNpAT3bOA.png)



To achieve the color white, for example, you need an equal distribution of all colors. By adding an equal amount of red and blue, it makes the green brighter. Thus, a color image encodes the color and the contrast using three layers:



![](https://cdn-images-1.medium.com/max/1600/1*n8Dux1lL5P3y8Njv1anoAA.png)



Just like black and white images, each layer in a color image has a value from 0–255\. The value 0 means that it has no color in this layer. If the value is 0 for all color channels, then the image pixel is black.

As you may know, a neural network creates a relationship between an input value and output value. To be more precise with our colorization task, the network needs to find the traits that link grayscale images with colored ones.

In sum, we are searching for the features that link a grid of grayscale values to the three color grids.



![](https://cdn-images-1.medium.com/max/1600/1*W23SQ2oEdE_PsK-HmP4cow.png)

f() is the neural network, [B&W] is our input, and [R],[G],[B] is our output.



### Alpha version

We’ll start by making a simple version of our neural network to color an image of a woman’s face. This way, you can get familiar with the core syntax of our model as we add features to it.

With just 40 lines of code, we can make the following transition. The middle picture is done with our neural network and the picture to the right is the original color photo. The network is trained and tested on the same image — we’ll get back to this during the beta-version.



![](https://cdn-images-1.medium.com/max/1600/1*Vd4u8Q34bZ4hAFpyJYlKPw.png)

Photo by Camila Cordeiro



#### Color space

First, we’ll use an algorithm to change the color channels, from RGB to Lab. **_L_** stands for lightness, and **_a_** and **_b_** for the color spectra green–red and blue–yellow.

As you can see below, a Lab encoded image has one layer for grayscale, and has packed three color layers into two. This means that we can use the original grayscale image in our final prediction. Also, we only have two channels to predict.



![](https://cdn-images-1.medium.com/max/1600/1*OX9DWIK6bOHKwTAp4Q92pQ.png)



Science fact — 94% of the cells in our eyes determine brightness. That leaves only 6% of our receptors to act as sensors for colors. As you can see in the above image, the grayscale image is a lot sharper than the color layers. This is another reason to keep the grayscale image in our final prediction.

#### From B&W to color

Our final prediction looks like this. We have a grayscale layer for input, and we want to predict two color layers, the **ab** in **Lab**. To create the final color image we’ll include the **L**/grayscale image we used for the input. The result will be creating a **Lab** image.



![](https://cdn-images-1.medium.com/max/1600/1*pZcnvgEuiTUywDgeMF_R3Q.png)



To turn one layer into two layers, we use convolutional filters. Think of them as the blue/red filters in 3D glasses. Each filter determines what we see in a picture. They can highlight or remove something to extract information out of the picture. The network can either create a new image from a filter or combine several filters into one image.

For a convolutional neural network, each filter is automatically adjusted to help with the intended outcome. We’ll start by stacking hundreds of filters and narrow them down into two layers, the **a** and **b** layers.

Before we get into detail into how it works, let’s run the code.

#### Deploying the code on FloydHub

If you are new to FloydHub, you can run their [2-min installation](https://www.floydhub.com/), watch my [5-min video tutorial](https://www.youtube.com/watch?v=byLQ9kgjTdQ&t=6s) or check out my [step-to-step guide](https://blog.floydhub.com/my-first-weekend-of-deep-learning/). It’s the best (and easiest) way to train deep learning models on cloud GPUs.

#### Alpha version

Once FloydHub is installed, use the following commands:

    git clone https://github.com/emilwallner/Coloring-greyscale-images-in-Keras

Open the folder and initiate FloydHub.

    cd Coloring-greyscale-images-in-Keras/floydhubfloyd init colornet

The FloydHub web dashboard will open in your browser. You will be prompted to create a new FloydHub project called `colornet`. Once that's done, go back to your terminal and run the same `init`command.

    floyd init colornet

Okay, let’s run our job:

    floyd run --data emilwallner/datasets/colornet/2:data --mode jupyter --tensorboard

Some quick notes about our job:

*   We mounted a public dataset on FloydHub (which I’ve already uploaded) at the `data`directory with the below line:

    --dataemilwallner/datasets/colornet/2:data

You can explore and use this dataset (and many other public datasets) by viewing it on [FloydHub](https://www.floydhub.com/emilwallner/datasets/cifar-10/1)

*   We enabled Tensorboard with `--tensorboard`
*   We ran the job in Jupyter Notebook mode with `--mode jupyter`
*   If you have GPU credit, you can also add the GPU flag `--gpu`to your command. This will make it approximately 50x faster

Go to the Jupyter notebook. Under the Jobs tab on the FloydHub website, click on the Jupyter Notebook link and navigate to this file:

    floydhub/Alpha version/working_floyd_pink_light_full.ipynb

Open it and click Shift+Enter on all the cells.

Gradually increase the epoch value to get a feel for how the neural network learns.

    model.fit(x=X, y=Y, batch_size=1, epochs=1)

Start with an epoch value of 1 and the increase it to 10, 100, 500, 1000 and 3000\. The epoch value indicates how many times the neural network learns from the image. You will find the image `img_result.png`in the main folder once you’ve trained your neural network.

    # Get imagesimage = img_to_array(load_img('woman.png'))image = np.array(image, dtype=float)

    # Import map images into the lab colorspaceX = rgb2lab(1.0/255*image)[:,:,0]Y = rgb2lab(1.0/255*image)[:,:,1:]Y = Y / 128X = X.reshape(1, 400, 400, 1)Y = Y.reshape(1, 400, 400, 2)

    # Building the neural networkmodel = Sequential()model.add(InputLayer(input_shape=(None, None, 1)))model.add(Conv2D(8, (3, 3), activation='relu', padding='same', strides=2))model.add(Conv2D(8, (3, 3), activation='relu', padding='same'))model.add(Conv2D(16, (3, 3), activation='relu', padding='same'))model.add(Conv2D(16, (3, 3), activation='relu', padding='same', strides=2))model.add(Conv2D(32, (3, 3), activation='relu', padding='same'))model.add(Conv2D(32, (3, 3), activation='relu', padding='same', strides=2))model.add(UpSampling2D((2, 2)))model.add(Conv2D(32, (3, 3), activation='relu', padding='same'))model.add(UpSampling2D((2, 2)))model.add(Conv2D(16, (3, 3), activation='relu', padding='same'))model.add(UpSampling2D((2, 2)))model.add(Conv2D(2, (3, 3), activation='tanh', padding='same'))

    # Finish modelmodel.compile(optimizer='rmsprop',loss='mse')

    #Train the neural networkmodel.fit(x=X, y=Y, batch_size=1, epochs=3000)print(model.evaluate(X, Y, batch_size=1))

    # Output colorizationsoutput = model.predict(X)output = output * 128canvas = np.zeros((400, 400, 3))canvas[:,:,0] = X[0][:,:,0]canvas[:,:,1:] = output[0]imsave("img_result.png", lab2rgb(canvas))imsave("img_gray_scale.png", rgb2gray(lab2rgb(canvas)))

FloydHub command to run this network:

    floyd run --data emilwallner/datasets/colornet/2:data --mode jupyter --tensorboard

#### Technical explanation

To recap, the input is a grid representing a black and white image. It outputs two grids with color values. Between the input and output values, we create filters to link them together. This is a convolutional neural network.

When we train the network, we use colored images. We convert RGB colors to the Lab color space. The black and white layer is our input and the two colored layers are the output.



![](https://cdn-images-1.medium.com/max/1600/0*arOhHOAQLE_SFv3D.png)



To the left side, we have the B&W input, our filters, and the prediction from our neural network.

We map the predicted values and the real values within the same interval. This way, we can compare the values. The interval ranges from -1 to 1\. To map the predicted values, we use a tanh activation function. For any value you give the [tanh function](http://mathworld.wolfram.com/HyperbolicTangent.html), it will return -1 to 1.

The true color values range between -128 and 128\. This is the default interval in the Lab color space. By dividing them by 128, they too fall within the -1 to 1 interval. This “normalization” enables us to compare the error from our prediction.

After calculating the final error, the network updates the filters to reduce the total error. The network continues in this loop until the error is as low as possible.

Let’s clarify some syntax in the code snippet.

    X = rgb2lab(1.0/255*image)[:,:,0]Y = rgb2lab(1.0/255*image)[:,:,1:]

**1.0/255** indicates that we are using a 24-bit RGB color space. It means that we are using numbers between 0–255 for each color channel. This results in 16.7 million color combinations.

Since humans can only perceive 2–10 million colors, it does not make much sense to use a larger color space.

    Y = Y / 128

The Lab color space has a different range in comparison to RGB. The color spectrum **ab** in Lab ranges from -128 to 128\. By dividing all values in the output layer by 128, we bound the range between -1 and 1.

We match it with our neural network, which also returns values between -1 and 1.

After converting the color space using the function `rgb2lab()` we select the grayscale layer with: `**[ : , : , 0].**` This is our input for the neural network. `[ : , : , 1: ]` selects the two color layers, green–red and blue–yellow.

After training the neural network, we make a final prediction which we convert into a picture.

    output = model.predict(X)output = output * 128

Here, we use a grayscale image as input and run it through our trained neural network. We take all the output values between -1 and 1 and multiply it by 128\. This gives us the correct color in the Lab color spectrum.

    canvas = np.zeros((400, 400, 3))canvas[:,:,0] = X[0][:,:,0]canvas[:,:,1:] = output[0]

Lastly, we create a black RGB canvas by filling it with three layers of 0s. Then we copy the grayscale layer from our test image. Then we add our two color layers to the RGB canvas. This array of pixel values is then converted into a picture.

#### Takeaways from the Alpha version

*   **Reading research papers is challenging**. Once I summarized the core characteristics of each paper, it became easier to skim papers. It also allowed me to put the details into a context.
*   **Starting simple is key**. Most of the implementations I could find online were 2–10K lines long. That made it hard to get an overview of the core logic of the problem. Once I had a barebones version, it became easier to read both the code implementation, and also the research papers.
*   **Explore public projects.** To get a rough idea for what to code, I skimmed 50–100 projects on colorization on Github.
*   **Things won’t always work as expected.** In the beginning, it could only create red and yellow colors. At first, I had a Relu activation function for the final activation. Since it only maps numbers into positive digits, it could not create negative values, the blue and green spectrums. Adding a tanh activation function and mapping the Y values fixed this.
*   **Understanding > Speed.** Many of the implementations I saw were fast but hard to work with. I chose to optimize for innovation speed instead of code speed.

### Beta version

To understand the weakness of the alpha version, try coloring an image it has not been trained on. If you try it, you’ll see that it makes a poor attempt. It’s because the network has memorized the information. It has not learned how to color an image it hasn’t seen before. But this is what we’ll do in the beta version. We’ll teach our network to generalize.

Below is the result of coloring the validation images with our beta version.

Instead of using Imagenet, I created [a public dataset on FloydHub](https://www.floydhub.com/emilwallner/datasets/colornet) with higher quality images. The images are from [Unsplash](https://unsplash.com/) — creative commons pictures by professional photographers. It includes 9,500 training images and 500 validation images.



![](https://cdn-images-1.medium.com/max/1600/1*M-R9SWSz1UHlbOoZUpSVIA.png)



#### The feature extractor

Our neural network finds characteristics that link grayscale images with their colored versions.

Imagine you had to color black and white images — but with restriction that you can only see nine pixels at a time. You could scan each image from the top left to bottom right and try to predict which color each pixel should be.



![](https://cdn-images-1.medium.com/max/1600/1*l6cKjgG6wPG5FfX4xJSv0w.png)



For example, these nine pixels are the edge of the nostril from the woman just above. As you can imagine, it’d be next to impossible to make a good colorization, so you break it down into steps.

First, you look for simple patterns: a diagonal line, all black pixels, and so on. You look for the same exact pattern in each square and remove the pixels that don’t match. You generate 64 new images from your 64 mini filters.



![](https://cdn-images-1.medium.com/max/1600/1*M0Rk1C0ziWhkhNzONGZfYg.png)

The number of filtered images for each step



If you scan the images again, you’d see the same small patterns you’ve already detected. To gain a higher level understanding of the image, you decrease the image size in half.



![](https://cdn-images-1.medium.com/max/1600/1*xEj4c-CGzXe2Zh3BM1IdZQ.png)

We decrease the size in three steps



You still only have a 3x3 filter to scan each image. But by combining your new nine pixels with your lower level filters, you can detect more complex patterns. One pixel combination might form a half circle, a small dot, or a line. Again, you repeatedly extract the same pattern from the image. This time, you generate 128 new filtered images.

After a couple of steps the filtered images you produce might look something like these:



![](https://cdn-images-1.medium.com/max/1600/1*h2A5tZSPK6HUSfXK2BNK9Q.png)

From Keras layer tutorial



As mentioned, you start with low-level features, such as an edge. Layers closer to the output are combined into patterns. Then, they are combined into details, and eventually transformed into a face. This [video tutorial](https://www.youtube.com/watch?v=AgkfIQ4IGaM) provides a further explanation.

The process is similar to that of most neural networks that deal with vision. The type of network here is known as a convolutional neural network. In these networks, you combine several filtered images to understand the context in the image.

#### From feature extraction to color

The neural network operates in a trial and error manner. It first makes a random prediction for each pixel. Based on the error for each pixel, it works backward through the network to improve the feature extraction.

It starts adjusting for the situations that generate the largest errors. In this case, the adjustments are: whether to color or not, and how to locate different objects.

The network starts by coloring all the objects brown. It’s the color that is most similar to all other colors, thus producing the smallest error.

Because most of the training data is quite similar, the network struggles to differentiate between different objects. It will fail to generate more nuanced colors. That’s what we’ll explore in the full version.

Below is the code for the beta version, followed by a technical explanation of the code.

    # Get imagesX = []for filename in os.listdir('../Train/'):    X.append(img_to_array(load_img('../Train/'+filename)))X = np.array(X, dtype=float)

    # Set up training and test datasplit = int(0.95*len(X))Xtrain = X[:split]Xtrain = 1.0/255*Xtrain

    #Design the neural networkmodel = Sequential()model.add(InputLayer(input_shape=(256, 256, 1)))model.add(Conv2D(64, (3, 3), activation='relu', padding='same'))model.add(Conv2D(64, (3, 3), activation='relu', padding='same', strides=2))model.add(Conv2D(128, (3, 3), activation='relu', padding='same'))model.add(Conv2D(128, (3, 3), activation='relu', padding='same', strides=2))model.add(Conv2D(256, (3, 3), activation='relu', padding='same'))model.add(Conv2D(256, (3, 3), activation='relu', padding='same', strides=2))model.add(Conv2D(512, (3, 3), activation='relu', padding='same'))model.add(Conv2D(256, (3, 3), activation='relu', padding='same'))model.add(Conv2D(128, (3, 3), activation='relu', padding='same'))model.add(UpSampling2D((2, 2)))model.add(Conv2D(64, (3, 3), activation='relu', padding='same'))model.add(UpSampling2D((2, 2)))model.add(Conv2D(32, (3, 3), activation='relu', padding='same'))model.add(Conv2D(2, (3, 3), activation='tanh', padding='same'))model.add(UpSampling2D((2, 2)))

    # Finish modelmodel.compile(optimizer='rmsprop', loss='mse')

    # Image transformerdatagen = ImageDataGenerator(        shear_range=0.2,        zoom_range=0.2,        rotation_range=20,        horizontal_flip=True)

    # Generate training databatch_size = 50def image_a_b_gen(batch_size):    for batch in datagen.flow(Xtrain, batch_size=batch_size):        lab_batch = rgb2lab(batch)        X_batch = lab_batch[:,:,:,0]        Y_batch = lab_batch[:,:,:,1:] / 128        yield (X_batch.reshape(X_batch.shape+(1,)), Y_batch)

    # Train modelTensorBoard(log_dir='/output')model.fit_generator(image_a_b_gen(batch_size), steps_per_epoch=10000, epochs=1)# Test imagesXtest = rgb2lab(1.0/255*X[split:])[:,:,:,0]Xtest = Xtest.reshape(Xtest.shape+(1,))Ytest = rgb2lab(1.0/255*X[split:])[:,:,:,1:]Ytest = Ytest / 128print model.evaluate(Xtest, Ytest, batch_size=batch_size)

    # Load black and white imagescolor_me = []for filename in os.listdir('../Test/'):        color_me.append(img_to_array(load_img('../Test/'+filename)))color_me = np.array(color_me, dtype=float)color_me = rgb2lab(1.0/255*color_me)[:,:,:,0]color_me = color_me.reshape(color_me.shape+(1,))

    # Test modeloutput = model.predict(color_me)output = output * 128

    # Output colorizationsfor i in range(len(output)):        cur = np.zeros((256, 256, 3))        cur[:,:,0] = color_me[i][:,:,0]        cur[:,:,1:] = output[i]        imsave("result/img_"+str(i)+".png", lab2rgb(cur))

Here’s the FloydHub command to run the Beta neural network:

    floyd run --data emilwallner/datasets/colornet/2:data --mode jupyter --tensorboard

#### Technical explanation

The main difference from other visual neural networks is the importance of pixel location. In coloring networks, the image size or ratio stays the same throughout the network. In other types of network, the image gets distorted the closer it gets to the final layer.

The max-pooling layers in classification networks increase the information density, but also distort the image. It only values the information, but not the layout of an image. In coloring networks we instead use a stride of 2, to decrease the width and height by half. This also increases information density but does not distort the image.



![](https://cdn-images-1.medium.com/max/1600/1*b_lKunpTECvQBPMUxi5hWA.png)



Two further differences are: upsampling layers and maintaining the image ratio. Classification networks only care about the final classification. Therefore, they keep decreasing the image size and quality as it moves through the network.

Coloring networks keep the image ratio constant. This is done by adding white padding like the visualization above. Otherwise, each convolutional layer cuts the images. It’s done with the `*padding='same'*`parameter.

To double the size of the image, the coloring network uses [an upsampling layer](https://keras.io/layers/convolutional/#upsampling2d).

    for filename in os.listdir('/Color_300/Train/'):    X.append(img_to_array(load_img('/Color_300/Test'+filename)))

This for-loop first counts all the file names in the directory. Then, it iterates through the image directory and converts the images into an array of pixels. Finally, it combines them into a giant vector.

    datagen = ImageDataGenerator(        shear_range=0.2,        zoom_range=0.2,        rotation_range=20,        horizontal_flip=True)

With `[ImageDataGenerator](https://keras.io/preprocessing/image/)`, we adjust the setting for our image generator. This way, each image will never be the same, thus improving the learning rate. The `shear_range`tilts the image to the left or right, and the other settings are zoom, rotation and horizontal-flip.

    batch_size = 50def image_a_b_gen(batch_size):    for batch in datagen.flow(Xtrain, batch_size=batch_size):        lab_batch = rgb2lab(batch)        X_batch = lab_batch[:,:,:,0]        Y_batch = lab_batch[:,:,:,1:] / 128        yield (X_batch.reshape(X_batch.shape+(1,)), Y_batch)

We use the images from our folder, Xtrain, to generate images based on the settings above. Then, we extract the black and white layer for the `X_batch` and the two colors for the two color layers.

    model.fit_generator(image_a_b_gen(batch_size), steps_per_epoch=1, epochs=1000)

The stronger the GPU you have, the more images you can fit into it. With this setup, you can use 50–100 images. `steps_per_epoch` is calculated by dividing the number of training images with your batch size.

For example: 100 images with a batch size of 50 gives 2 steps per epoch. The number of epochs determines how many times you want to train all images. 10K images with 21 epochs will take about 11 hours on a Tesla K80 GPU.

#### Takeaways

*   **Run a lot of experiments in smaller batches before you make larger runs.** Even after 20–30 experiments, I still found mistakes. Just because it’s running doesn’t mean it’s working. Bugs in a neural network are often more nuanced than traditional programming errors. One of the more bizarre ones was [my Adam hiccup](https://twitter.com/EmilWallner/status/916309564966006784).
*   **A more diverse dataset makes the pictures brownish.** If you have [very similar images](https://github.com/2014mchidamb/DeepColorization/tree/master/face_images), you can get a decent result without needing a more complex architecture. The trade-off is the network becomes worse at generalizing.
*   **Shapes, shapes, and shapes.** The size of each image has to be exact and remain proportional throughout the network. In the beginning, I used an image size of 300\. Halving this three times gives sizes of 150, 75, and 35.5\. The result is losing half a pixel! This led to many “hacks” until I realized it’s better to use a power of two: 2, 8, 16, 32, 64, 256 and so on.
*   **Creating datasets:** a)[Disable](http://osxdaily.com/2010/02/03/how-to-prevent-ds_store-file-creation/) the .DS_Store file, it drove me crazy. b) Be creative. I ended up with a Chrome [console script](https://github.com/emilwallner/useful-scripts/blob/master/auto_scroll_browser_window_console) and [an extension](https://chrome.google.com/webstore/detail/imagespark-ultimate-image/hooaoionkjogngfhjjniefmenehnopag) to download the files. c) Make a copy of the raw files you scrape and structure your [cleaning scripts](https://github.com/emilwallner/useful-scripts).

### Full-version

Our final version of the colorization neural network has four components. We split the network we had before into an encoder and a decoder. Between them, we’ll use a fusion layer. If you are new to classification networks, I’d recommend having a look at [this tutorial](http://cs231n.github.io/classification/).

In parallel to the encoder, the input images also run through one of today’s most powerful classifiers — the [Inception ResNet v2 ](https://research.googleblog.com/2016/08/improving-inception-and-image.html). This is a neural network trained on 1.2M images. We extract the classification layer and merge it with the output from the encoder.



![](https://cdn-images-1.medium.com/max/1600/1*KRXxAAxlBz1psRvB1ak04Q.png)



Here is a more [detailed visual](https://github.com/baldassarreFe/deep-koalarization) from the original paper.

By transferring the learning from the classifier to the coloring network, the network can get a sense of what’s in the picture. Thus, enabling the network to match an object representation with a coloring scheme.

Here are some of the validation images, using only 20 images to train the network on.



![](https://cdn-images-1.medium.com/max/1600/1*frA53gIp67fljqJ_yQy7Yg.png)



Most of the images turned out poor. But I was able to find a few decent ones because of a large validation set (2,500 images). Training it on more images gave a more consistent result, but most of them turned out brownish. Here is a full list of the [experiments I ran](https://www.floydhub.com/emilwallner/projects/color) including the validation images.

Here are the most common architectures from previous research, with links:

*   Manually adding small dots of color in a picture to guide the neural network ([link](http://www.cs.huji.ac.il/~yweiss/Colorization/))
*   Find a matching image and transfer the coloring (learn more [here](https://dl.acm.org/citation.cfm?id=2393402) and [here](https://arxiv.org/abs/1505.05192))
*   Residual encoder and merging classification layers ([link](http://tinyclouds.org/colorize/))
*   Merging hypercolumns from a classifying network (more detail [here](https://arxiv.org/pdf/1603.08511.pdf) and [here](https://arxiv.org/pdf/1603.06668.pdf))
*   Merging the final classification between the encoder and decoder (details [here](http://hi.cs.waseda.ac.jp/~iizuka/projects/colorization/data/colorization_sig2016.pdf) and [here](https://github.com/baldassarreFe/deep-koalarization/blob/master/report.pdf))

**Colorspaces:** Lab, YUV, HSV, and LUV (more detail [here](http://cs231n.stanford.edu/reports/2016/pdfs/219_Report.pdf) and [here](https://arxiv.org/abs/1605.00075))

**Loss:** Mean square error, classification, weighted classification ([link](https://arxiv.org/pdf/1603.06668.pdf))

I chose the ‘fusion layer’ architecture (the fifth one in the list above).

This was because it produces some of the best results. It is also easier to understand and reproduce in [Keras](https://keras.io/). Although it’s not the strongest colorization network design, it is a good place to start. It’s a great architecture to understand the dynamics of the coloring problem.

I used the neural network design from [this paper](https://github.com/baldassarreFe/deep-koalarization/blob/master/report.pdf) by Federico Baldassarre and collaborators. I proceeded with my own interpretation in Keras.

Note: in the below code I switch from Keras’ sequential model to their functional API. [[Documentation](https://keras.io/getting-started/functional-api-guide/)]

    # Get imagesX = []for filename in os.listdir('/data/images/Train/'):    X.append(img_to_array(load_img('/data/images/Train/'+filename)))X = np.array(X, dtype=float)Xtrain = 1.0/255*X

    #Load weightsinception = InceptionResNetV2(weights=None, include_top=True)inception.load_weights('/data/inception_resnet_v2_weights_tf_dim_ordering_tf_kernels.h5')inception.graph = tf.get_default_graph()

    embed_input = Input(shape=(1000,))

    #Encoderencoder_input = Input(shape=(256, 256, 1,))encoder_output = Conv2D(64, (3,3), activation='relu', padding='same', strides=2)(encoder_input)encoder_output = Conv2D(128, (3,3), activation='relu', padding='same')(encoder_output)encoder_output = Conv2D(128, (3,3), activation='relu', padding='same', strides=2)(encoder_output)encoder_output = Conv2D(256, (3,3), activation='relu', padding='same')(encoder_output)encoder_output = Conv2D(256, (3,3), activation='relu', padding='same', strides=2)(encoder_output)encoder_output = Conv2D(512, (3,3), activation='relu', padding='same')(encoder_output)encoder_output = Conv2D(512, (3,3), activation='relu', padding='same')(encoder_output)encoder_output = Conv2D(256, (3,3), activation='relu', padding='same')(encoder_output)

    #Fusionfusion_output = RepeatVector(32 * 32)(embed_input) fusion_output = Reshape(([32, 32, 1000]))(fusion_output)fusion_output = concatenate([encoder_output, fusion_output], axis=3) fusion_output = Conv2D(256, (1, 1), activation='relu', padding='same')(fusion_output)

    #Decoderdecoder_output = Conv2D(128, (3,3), activation='relu', padding='same')(fusion_output)decoder_output = UpSampling2D((2, 2))(decoder_output)decoder_output = Conv2D(64, (3,3), activation='relu', padding='same')(decoder_output)decoder_output = UpSampling2D((2, 2))(decoder_output)decoder_output = Conv2D(32, (3,3), activation='relu', padding='same')(decoder_output)decoder_output = Conv2D(16, (3,3), activation='relu', padding='same')(decoder_output)decoder_output = Conv2D(2, (3, 3), activation='tanh', padding='same')(decoder_output)decoder_output = UpSampling2D((2, 2))(decoder_output)

    model = Model(inputs=[encoder_input, embed_input], outputs=decoder_output)

    #Create embeddingdef create_inception_embedding(grayscaled_rgb):    grayscaled_rgb_resized = []    for i in grayscaled_rgb:        i = resize(i, (299, 299, 3), mode='constant')        grayscaled_rgb_resized.append(i)    grayscaled_rgb_resized = np.array(grayscaled_rgb_resized)    grayscaled_rgb_resized = preprocess_input(grayscaled_rgb_resized)    with inception.graph.as_default():        embed = inception.predict(grayscaled_rgb_resized)    return embed

    # Image transformerdatagen = ImageDataGenerator(        shear_range=0.4,        zoom_range=0.4,        rotation_range=40,        horizontal_flip=True)

    #Generate training databatch_size = 20

    def image_a_b_gen(batch_size):    for batch in datagen.flow(Xtrain, batch_size=batch_size):        grayscaled_rgb = gray2rgb(rgb2gray(batch))        embed = create_inception_embedding(grayscaled_rgb)        lab_batch = rgb2lab(batch)        X_batch = lab_batch[:,:,:,0]        X_batch = X_batch.reshape(X_batch.shape+(1,))        Y_batch = lab_batch[:,:,:,1:] / 128        yield ([X_batch, create_inception_embedding(grayscaled_rgb)], Y_batch)

    #Train model      tensorboard = TensorBoard(log_dir="/output")model.compile(optimizer='adam', loss='mse')model.fit_generator(image_a_b_gen(batch_size), callbacks=[tensorboard], epochs=1000, steps_per_epoch=20)

    #Make a prediction on the unseen imagescolor_me = []for filename in os.listdir('../Test/'):    color_me.append(img_to_array(load_img('../Test/'+filename)))color_me = np.array(color_me, dtype=float)color_me = 1.0/255*color_mecolor_me = gray2rgb(rgb2gray(color_me))color_me_embed = create_inception_embedding(color_me)color_me = rgb2lab(color_me)[:,:,:,0]color_me = color_me.reshape(color_me.shape+(1,))

    # Test modeloutput = model.predict([color_me, color_me_embed])output = output * 128

    # Output colorizationsfor i in range(len(output)):    cur = np.zeros((256, 256, 3))    cur[:,:,0] = color_me[i][:,:,0]    cur[:,:,1:] = output[i]    imsave("result/img_"+str(i)+".png", lab2rgb(cur))

Here’s the FloydHub command to run the full neural network:

    floyd run --data emilwallner/datasets/colornet/2:data --mode jupyter --tensorboard

#### Technical Explanation

[Keras’ functional API](https://keras.io/getting-started/functional-api-guide/) is ideal when we are concatenating or merging several models.



![](https://cdn-images-1.medium.com/max/1600/0*naXHqRyIdBtCE7Ty.png)



First, we download the [Inception ResNet v2](https://research.googleblog.com/2016/08/improving-inception-and-image.html) neural network and load the weights. Since we will be using two models in parallel, we need to specify which model we are using. This is done in [Tensorflow](https://www.tensorflow.org/), the backend for Keras.

    inception = InceptionResNetV2(weights=None, include_top=True)inception.load_weights('/data/inception_resnet_v2_weights_tf_dim_ordering_tf_kernels.h5')inception.graph = tf.get_default_graph()

To create our batch, we use the tweaked images. We conver them to black and white and run them through the Inception ResNet model.

    grayscaled_rgb = gray2rgb(rgb2gray(batch))embed = create_inception_embedding(grayscaled_rgb)

First, we have to resize the image to fit into the Inception model. Then we use the preprocessor to format the pixel and color values according to the model. In the final step, we run it through the Inception network and extract the final layer of the model.

    def create_inception_embedding(grayscaled_rgb):    grayscaled_rgb_resized = []    for i in grayscaled_rgb:        i = resize(i, (299, 299, 3), mode='constant')        grayscaled_rgb_resized.append(i)    grayscaled_rgb_resized = np.array(grayscaled_rgb_resized)    grayscaled_rgb_resized = preprocess_input(grayscaled_rgb_resized)    with inception.graph.as_default():        embed = inception.predict(grayscaled_rgb_resized)    return embed

Let’s go back to the generator. For each batch, we generate 20 images in the below format. It takes about an hour on a Tesla K80 GPU. It can do up to 50 images at a time with this model without having memory problems.

    yield ([X_batch, create_inception_embedding(grayscaled_rgb)], Y_batch)

This matches with our colornet model format.

    model = Model(inputs=[encoder_input, embed_input], outputs=decoder_output)

`encoder_input`is fed into our Encoder model, the output of the Encoder model is then fused with the `embed_input`in the fusion layer; the output of the fusion is then used as input in our Decoder model, which then returns the final output, `decoder_output`.

    fusion_output = RepeatVector(32 * 32)(embed_input) fusion_output = Reshape(([32, 32, 1000]))(fusion_output)fusion_output = concatenate([fusion_output, encoder_output], axis=3) fusion_output = Conv2D(256, (1, 1), activation='relu')(fusion_output)

In the fusion layer, we first multiply the 1000 category layer by 1024 (32 * 32). This way, we get 1024 rows with the final layer from the Inception model.

This is then reshaped from 2D to 3D, a 32 x 32 grid with the 1000 category pillars. These are then linked together with the output from the encoder model. We apply a 254 filtered convolutional network with a 1X1 kernel, the final output of the fusion layer.

#### Takeaways

*   **The research terminology was daunting.** I spent three days googling for ways to implement the “fusion model” in Keras. Because it sounded complex, I didn’t want to face the problem. Instead, I tricked myself into searching for short cuts.
*   **I asked questions online.** I didn’t have a single comment in the Keras slack channel and Stack Overflow deleted my questions. But, by publicly breaking down the problem to make it simple to answer, it forced me to isolate the error, taking me closer to a solution.
*   **Email people.** Although forums can be cold, people care if you connect with them directly. Discussing color spaces over Skype with a researcher is inspiring!
*   **After delaying on the fusion problem, I decided to build all the components before I stitched them together.** Here are a [few experiments](https://www.floydhub.com/emilwallner/projects/color/24/code/Experiments/transfer-learning-examples) I used to break down the fusion layer.
*   **Once I had something I thought would work, I was hesitant to run it.** Although I knew the core logic was okay, I didn’t believe it would work. After a cup of lemon tea and a long walk — I ran it. It produced an error after the first line in my model. But after four days, several hundred bugs and several thousand Google searches, “Epoch 1/22” appeared under my model.

### Next steps

Colorizing images is a deeply fascinating problem. It is as much as a scientific problem as artistic one. I wrote this article so you can get up to speed in coloring and continue where I left off. Here are some suggestions to get started:

*   Implement it with another pre-trained model
*   Try a different dataset
*   Increase the network’s accuracy by using more pictures
*   Build an amplifier within the RGB color space. Create a similar model to the coloring network, that takes a saturated colored image as input and the correct colored image as output.
*   Implement a weighted classification
*   Apply it to video. Don’t worry too much about the colorization, but make the switch between images consistent. You could also do something similar for larger images, by tiling smaller ones.

**You can also easily colorize your own black and white images with my three versions of the colorization neural network using FloydHub.**

*   For the alpha version, simply replace the `woman.jpg`file with your file with the same name (image size 400x400 pixels).
*   For the beta and the full version, add your images to the `Test`folder before you run the FloydHub command. You can also upload them directly in the Notebook to the Test folder while the notebook is running. Note that these images need to be exactly 256x256 pixels. Also, you can upload all test images in color because it will automatically convert them into B&W.

If you build something or get stuck, ping me on twitter: [emilwallner](https://twitter.com/EmilWallner). I’d love to see what you are building.

**Huge thanks to** Federico Baldassarre, for answering my questions and their previous work on colorization. Also thanks to Muthu Chidambaram, who influenced the core implementation in Keras, and the Unsplash community for providing the pictures. Thanks also to Marine Haziza, Valdemaras Repsys, Qingping Hou, Charlie Harrington, Sai Soundararaj, Jannes Klaas, Claudio Cabral, Alain Demenet, and Ignacio Tonoli for reading drafts of this.

#### About Emil Wallner

This the third part in a multi-part blog series from Emil as he learns deep learning. Emil has spent a decade exploring human learning. He’s worked for Oxford’s business school, invested in education startups, and built an education technology business. Last year, he enrolled at [Ecole 42](https://twitter.com/paulg/status/847844863727087616) to apply his knowledge of human learning to machine learning.

You can follow along with Emil on [Twitter](https://twitter.com/EmilWallner) and [Medium](https://medium.com/@emilwallner).

This was first published as a community post on [Floydhub’s](https://blog.floydhub.com/colorizing-b&w-photos-with-neural-networks/) blog.








