---
author: Déborah Mesquita
authorTwitter: https://twitter.com/dehhmesquita
authorFacebook: none
title: "Big Picture Machine Learning: Classifying Text with Neural Networks and TensorFlow"
subTitle: "Developers often say that if you want to get started with machine learning, you should first learn how the algorithms work. But my experi..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*W2vzGrXR1ua5KN-X0m9oMw.jpeg
url: https://medium.freecodecamp.org/big-picture-machine-learning-classifying-text-with-neural-networks-and-tensorflow-d94036ac2274
id: big-picture-machine-learning-classifying-text-with-neural-networks-and-tensorflow-d94036ac2274
date: 2017-04-09T21:49:41.494Z
tags: [
  "Machine Learning",
  "Data Science",
  "Artificial Intelligence",
  "TensorFlow",
  "Technology"
]
---
# Big Picture Machine Learning: Classifying Text with Neural Networks and TensorFlow







![](https://cdn-images-1.medium.com/max/2000/1*W2vzGrXR1ua5KN-X0m9oMw.jpeg)







Developers often say that if you want to get started with machine learning, you should first learn how the algorithms work. But my experience shows otherwise.

I say you should first be able to see the big picture: **how the applications work**. Once you understand this, it becomes much easier to dive in deep and explore the inner workings of the algorithms.

So how do you [develop an intuition](https://www.quora.com/How-does-one-develop-intuitive-learning-And-what-are-the-key-differences-between-intuition-based-learning-and-learning-by-proof-And-which-one-do-you-prefer) and achieve this big-picture understanding of machine learning? A good way to do this is by **creating machine learning models**.

Assuming you still don’t know how to create all these algorithms from scratch, you’ll want to use a library that has all these algorithms already implemented for you. And that library is **TensorFlow**.

In this article, we’ll create a machine learning model to classify texts into categories. We’ll cover the following topics:

1.  **How TensorFlow works**
2.  **What is a machine learning model**
3.  **What is a Neural Network**
4.  **How the Neural Network learns**
5.  **How to manipulate data and pass it to the Neural Network inputs**
6.  **How to run the model and get the prediction results**

You will probably learn a lot of new things, so let’s start! 😀

### TensorFlow

[TensorFlow](https://www.tensorflow.org/) is an open-source library for machine learning, first created by Google. The name of the library help us understand how we work with it: tensors are multidimensional arrays that flow through the nodes of a graph.

#### tf.Graph

Every computation in TensorFlow is represented as a dataflow graph. This graph has two elements:

*   a set of `tf.Operation`, that represents units of computation
*   a set of `tf.Tensor`, that represents units of data

To see how all this works you will create this dataflow graph:



![](https://cdn-images-1.medium.com/max/1600/1*HGU9P-k0xNhvLdmDhxTPrg.png)

A graph that computes x+y



You’ll define `x = [1,3,6]` and `y = [1,1,1]`. As the graph works with `tf.Tensor` to represent units of data, you will create constant tensors:

    import tensorflow as tf

<pre name="5d68" id="5d68" class="graf graf--pre graf-after--pre">**x = tf.constant([1,3,6])   
y = tf.constant([1,1,1])**</pre>

Now you’ll define the operation unit:

    import tensorflow as tf

<pre name="89d6" id="89d6" class="graf graf--pre graf-after--pre">x = tf.constant([1,3,6])   
y = tf.constant([1,1,1])</pre>

<pre name="742a" id="742a" class="graf graf--pre graf-after--pre">**op = tf.add(x,y)**</pre>

You have all the graph elements. Now you need to build the graph:

    import tensorflow as tf

<pre name="c154" id="c154" class="graf graf--pre graf-after--pre">**my_graph = tf.Graph()**</pre>

<pre name="6f16" id="6f16" class="graf graf--pre graf-after--pre">**with my_graph.as_default():**  
    x = tf.constant([1,3,6])   
    y = tf.constant([1,1,1])</pre>

<pre name="2fd2" id="2fd2" class="graf graf--pre graf-after--pre">    op = tf.add(x,y)</pre>

This is how the TensorFlow workflow works: you first create a graph, and only then can you make the computations (really ‘running’ the graph nodes with operations). To run the graph you’ll need to create a `tf.Session`.

#### tf.Session

A `tf.Session` object encapsulates the environment in which `Operation` objects are executed, and `Tensor` objects are evaluated (from [the docs](https://www.tensorflow.org/api_docs/python/tf/Session)). To do that, we need to define which graph will be used in the Session:

    import tensorflow as tf

<pre name="4292" id="4292" class="graf graf--pre graf-after--pre">my_graph = tf.Graph()</pre>

<pre name="17e2" id="17e2" class="graf graf--pre graf-after--pre">with **tf.Session(graph=my_graph)** as sess:  
    x = tf.constant([1,3,6])   
    y = tf.constant([1,1,1])</pre>

<pre name="4fe6" id="4fe6" class="graf graf--pre graf-after--pre">    op = tf.add(x,y)</pre>

To execute the operations, you’ll use the method `tf.Session.run()`. This method executes one ‘step’ of the TensorFlow computation, by running the necessary graph fragment to execute every `Operation` objects and evaluate every `Tensor` passed in the argument `fetches`. In your case you will run a step of the sum operations:

    import tensorflow as tf

<pre name="2274" id="2274" class="graf graf--pre graf-after--pre">my_graph = tf.Graph()</pre>

<pre name="de64" id="de64" class="graf graf--pre graf-after--pre">with tf.Session(graph=my_graph) as sess:  
    x = tf.constant([1,3,6])   
    y = tf.constant([1,1,1])</pre>

<pre name="3725" id="3725" class="graf graf--pre graf-after--pre">    op = tf.add(x,y)  
    **result = sess.run(fetches=op)**  
    **print(result)**</pre>

<pre name="5da5" id="5da5" class="graf graf--pre graf-after--pre graf--trailing">>>> **[2 4 7]**</pre>











* * *







### A Predictive Model

Now that you know how TensorFlow works, you have to learn how to create a predictive model. In short,

**Machine learning algorithm** + **data** = **predictive model**

The process to construct a model is like this:



![](https://cdn-images-1.medium.com/max/1600/1*4Zimlh2nuwSN08CviHw3Hw.png)

The process to create a predictive model



As you can see, the model consists of a machine learning algorithm ‘trained’ with data. When you have the model you will get results like this:



![](https://cdn-images-1.medium.com/max/1600/1*KNVHdIDa3-JnQXnrYwFnEw.png)

Prediction workflow



The goal of the model you will create is to classify texts in categories, we define that:

**input**: text, **result**: category

We have a training dataset with all the texts labeled (every text has a label indicating to which category it belongs). In machine learning this type of task is denominated **Supervised learning**.

> “We know the correct answers. The algorithm iteratively makes predictions on the training data and is corrected by the teacher.” —[ Jason Brownlee](http://machinelearningmastery.com/supervised-and-unsupervised-machine-learning-algorithms/)

You’ll classify data into categories, so it’s also a **Classification** task.

To create the model, we’re going to use Neural Networks.











* * *







### Neural Networks

A neural network is a computational model (a way to describe a system using mathematical language and mathematical concepts). These systems are self-learning and trained, rather than explicitly programmed.

Neural networks are inspired by our central nervous system. They have connected nodes that are similar to our neurons.



![](https://cdn-images-1.medium.com/max/1600/1*52Jlj1IJw0ebbLsbWTevUg.png)

A neural network



The Perceptron was the first neural network algorithm. [This article](https://appliedgo.net/perceptron/) explains really well the inner working of a perceptron (the “Inside an artificial neuron” animation is fantastic).

To understand how a neural network works we will actually build a neural network architecture with TensorFlow. This architecture was used by [Aymeric Damien](https://github.com/aymericdamien) in [this example](https://github.com/aymericdamien/TensorFlow-Examples/blob/master/notebooks/3_NeuralNetworks/multilayer_perceptron.ipynb).

#### Neural Network architecture

The neural network will have 2 hidden layers ([you have to choose](http://stats.stackexchange.com/questions/181/how-to-choose-the-number-of-hidden-layers-and-nodes-in-a-feedforward-neural-netw) how many hidden layers the network will have, is part of the architecture design). The job of each hidden layer is to [transform the inputs into something that the output layer can use](http://stats.stackexchange.com/questions/63152/what-does-the-hidden-layer-in-a-neural-network-compute).

**Hidden layer 1**



![](https://cdn-images-1.medium.com/max/1600/1*8suxr4MaCileJNicID6V4g.png)

Input layer and 1st hidden layer



You also need to define how many nodes the 1st hidden layer will have. These nodes are also called features or neurons, and in the image above they are represented by each circle.

In the input layer every node corresponds to a word of the dataset (we will see how this works later).

As explained [here](https://appliedgo.net/perceptron/), each node (neuron) is multiplied by a weight. Every node has a weight value, and during the training phase the neural network adjusts these values in order to produce a correct output (wait, we will learn more about this in a minute).

In addition to multiplying each input node by a weight, the network also adds a bias ([role of bias in neural networks](http://stackoverflow.com/questions/2480650/role-of-bias-in-neural-networks)).

In your architecture after multiplying the inputs by the weights and sum the values to the bias, the data also pass by an **activation function**. This activation function defines the final output of each node. An analogy: imagine that each node is a lamp, the activation function tells if the lamp will light or not.

There are [many types of activation functions](https://en.wikipedia.org/wiki/Activation_function). You will use the rectified linear unit (ReLu). This function is defined this way:

_f(x)_ = _max(0,x)_ [the output is x or 0 (zero), whichever is larger]

Examples: if**_x_ = -1,** then **_f(x) = 0_**_(zero); if_ **_x = 0.7_**_, then_ **_f(x) = 0.7_**.

**Hidden layer 2**

The 2nd hidden layer does exactly what the 1st hidden layer does, but now the input of the 2nd hidden layer is the output of the 1st one.



![](https://cdn-images-1.medium.com/max/1600/1*dN3Acc-OHpD_jXMEu6T0Uw.png)

1st and 2nd hidden layers



**Output layer**

And we finally got to the last layer, the output layer. You will use the [one-hot encoding](https://en.wikipedia.org/wiki/One-hot) to get the results of this layer. In this encoding only one bit has the value 1 and all the other ones got a zero value. For example, if we want to encode three categories (sports, space and computer graphics):

<pre name="098f" id="098f" class="graf graf--pre graf-after--p">+-------------------+-----------+  
|    category       |   value   |  
+-------------------|-----------+  
|      sports       |    001    |  
|      space        |    010    |  
| computer graphics |    100    |  
|-------------------|-----------|</pre>

So the number of output nodes is the number of classes of the input dataset.

The output layer values are also multiplied by the weights and we also add the bias, but now the activation function is different.

You want to label each text with a category, and these categories are mutually exclusive (a text doesn’t belong to two categories at the same time). To consider this, instead of using the ReLu activation function you will use the [Softmax](https://en.wikipedia.org/wiki/Softmax_function) function. This function transforms the output of each unity to a value between 0 and 1 and also makes sure that the sum of all units equals 1\. This way the output will tell us the probability of each text for each category.

<pre name="fc6a" id="fc6a" class="graf graf--pre graf-after--p">| 1.2                    0.46|  
| 0.9   -> [softmax] ->  0.34|  
| 0.4                    0.20|</pre>

And now you have the data flow graph of your neural network. Translating everything we saw so far into code, the result is:

<pre name="1b61" id="1b61" class="graf graf--pre graf-after--p"># Network Parameters  
n_hidden_1 = 10        # 1st layer number of features  
n_hidden_2 = 5         # 2nd layer number of features  
n_input = total_words  # Words in vocab  
n_classes = 3          # Categories: graphics, space and baseball</pre>

<pre name="f8ee" id="f8ee" class="graf graf--pre graf-after--pre">def multilayer_perceptron(**input_tensor**, **weights**, **biases**):  
    **layer_1_multiplication** = tf.matmul(input_tensor, weights['h1'])  
    **layer_1_addition** = tf.add(layer_1_multiplication, biases['b1'])  
    **layer_1_activation** = tf.nn.relu(layer_1_addition)</pre>

<pre name="be02" id="be02" class="graf graf--pre graf-after--pre"># Hidden layer with RELU activation  
    **layer_2_multiplication** = tf.matmul(layer_1_activation, weights['h2'])  
    **layer_2_addition** = tf.add(layer_2_multiplication, biases['b2'])  
    **layer_2_activation** = tf.nn.relu(layer_2_addition)</pre>

<pre name="074e" id="074e" class="graf graf--pre graf-after--pre"># Output layer with linear activation  
    **out_layer_multiplication** = tf.matmul(layer_2_activation, weights['out'])  
    **out_layer_addition** = out_layer_multiplication + biases['out']</pre>

<pre name="f26e" id="f26e" class="graf graf--pre graf-after--pre">return out_layer_addition</pre>

(We’ll talk about the code for the output layer activation function later.)

### How the neural network learns

As we saw earlier the weight values are updated while the network is trained. Now we will see how this happens in the TensorFlow environment.

#### tf.Variable

The weights and biases are stored in variables (`tf.Variable`). These variables maintain state in the graph across calls to `run()`. In machine learning we usually start the weight and bias values through a [normal distribution](https://en.wikipedia.org/wiki/Normal_distribution).

<pre name="bf0c" id="bf0c" class="graf graf--pre graf-after--p">weights = {  
    'h1': tf.Variable(tf.random_normal([n_input, n_hidden_1])),  
    'h2': tf.Variable(tf.random_normal([n_hidden_1, n_hidden_2])),  
    'out': tf.Variable(tf.random_normal([n_hidden_2, n_classes]))  
}  
biases = {  
    'b1': tf.Variable(tf.random_normal([n_hidden_1])),  
    'b2': tf.Variable(tf.random_normal([n_hidden_2])),  
    'out': tf.Variable(tf.random_normal([n_classes]))  
}</pre>

When we run the network for the first time (that is, the weight values are the ones defined by the normal distribution):

<pre name="d001" id="d001" class="graf graf--pre graf-after--p">input values: x  
weights: w  
bias: b  
output values: z</pre>

<pre name="f344" id="f344" class="graf graf--pre graf-after--pre">expected values: expected</pre>

To know if the network is learning or not, you need to compare the output values (_z_) with the expected values (_expected_). And how do we compute this difference (loss)? There are many methods to do that. Because we are working with a classification task, the best measure for the loss is the [cross-entropy error](https://en.wikipedia.org/wiki/Cross_entropy).

[James D. McCaffrey](https://jamesmccaffrey.wordpress.com/) wrote [a brilliant explanation](https://jamesmccaffrey.wordpress.com/2013/11/05/why-you-should-use-cross-entropy-error-instead-of-classification-error-or-mean-squared-error-for-neural-network-classifier-training/) about why this is the best method for this kind of task.

With TensorFlow you will compute the cross-entropy error using the `tf.nn.softmax_cross_entropy_with_logits()` method (here is the softmax activation function) and calculate the mean error (`tf.reduce_mean()`).

<pre name="b994" id="b994" class="graf graf--pre graf-after--p"># Construct model  
prediction = multilayer_perceptron(input_tensor, weights, biases)</pre>

<pre name="5365" id="5365" class="graf graf--pre graf-after--pre"># Define loss  
entropy_loss = **tf.nn.softmax_cross_entropy_with_logits(logits=prediction, labels=output_tensor)**  
loss = **tf.reduce_mean(entropy_loss)**</pre>

You want to find the best values for the weights and biases in order to minimize the output error (the difference between the value we got and the correct value). To do that you will use the gradient [descent method](https://en.wikipedia.org/wiki/Gradient_descent). To be more specific, you will use the [stochastic gradient descent](https://en.wikipedia.org/wiki/Stochastic_gradient_descent).



![](https://cdn-images-1.medium.com/max/1600/1*hMSQL5SVIArvKYnvUAebyA.png)

Gradient descent. Source: [https://sebastianraschka.com/faq/docs/closed-form-vs-gd.html](https://sebastianraschka.com/faq/docs/closed-form-vs-gd.html)



There are also many algorithms to compute the gradient descent, you will use the [Adaptive Moment Estimation (Adam)](http://sebastianruder.com/optimizing-gradient-descent/index.html#adam). To use this algorithm in TensorFlow you need to pass the learning_rate value, that determines the incremental steps of the values to find the best weight values.

The method `tf.train.AdamOptimizer(learning_rate)**.minimize(loss)**` is a [syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar) that does two things:

1.  **compute_gradients**(loss, <list of variables>)
2.  **apply_gradients**(<list of variables>)

The method updates all the `tf.Variables` with the new values, so we don’t need to pass the list of variables. And now you have the code to train the network:

<pre name="e39d" id="e39d" class="graf graf--pre graf-after--p">learning_rate = 0.001</pre>

<pre name="ef8a" id="ef8a" class="graf graf--pre graf-after--pre"># Construct model  
prediction = multilayer_perceptron(input_tensor, weights, biases)</pre>

<pre name="667c" id="667c" class="graf graf--pre graf-after--pre"># Define loss  
entropy_loss = tf.nn.softmax_cross_entropy_with_logits(logits=prediction, labels=output_tensor)  
**loss = tf.reduce_mean(entropy_loss)**</pre>

<pre name="b894" id="b894" class="graf graf--pre graf-after--pre graf--trailing">optimizer = **tf.train.AdamOptimizer(learning_rate=learning_rate).minimize(loss)**</pre>











* * *







### Data manipulation

The dataset you will use has many texts in English and we need to manipulate this data to pass it to the neural network. To do that you will do two things:

1.  Create an index for each word
2.  Create a matrix for each text, where the values are 1 if a word is in the text and 0 if not

Let’s see the code to understand this process:

<pre name="b9c9" id="b9c9" class="graf graf--pre graf-after--p">import numpy as np    #numpy is a package for scientific computing  
from collections import Counter</pre>

<pre name="9eae" id="9eae" class="graf graf--pre graf-after--pre">vocab = Counter()</pre>

<pre name="fc0d" id="fc0d" class="graf graf--pre graf-after--pre">**text = "Hi from Brazil"**</pre>

<pre name="57f0" id="57f0" class="graf graf--pre graf-after--pre">#Get all words  
for word in text.split(' '):  
    vocab[word]+=1  

#Convert words to indexes  
def get_word_2_index(vocab):  
    word2index = {}  
    for i,word in enumerate(vocab):  
        word2index[word] = i  

    return word2index</pre>

<pre name="6217" id="6217" class="graf graf--pre graf-after--pre">#Now we have an index  
word2index = get_word_2_index(vocab)</pre>

<pre name="4b56" id="4b56" class="graf graf--pre graf-after--pre">total_words = len(vocab)</pre>

<pre name="c09a" id="c09a" class="graf graf--pre graf-after--pre">#This is how we create a numpy array (our matrix)  
matrix = np.zeros((total_words),dtype=float)</pre>

<pre name="894e" id="894e" class="graf graf--pre graf-after--pre">#Now we fill the values  
for word in text.split():  
    matrix[word2index[word]] += 1</pre>

<pre name="1310" id="1310" class="graf graf--pre graf-after--pre">print(matrix)</pre>

<pre name="6e29" id="6e29" class="graf graf--pre graf-after--pre">>>> **[ 1\.  1\.  1.]**</pre>

In the example above the text was ‘Hi from Brazil’ and the matrix was **[ 1\. 1\. 1.]**. What if the text was only ‘Hi’?

<pre name="6783" id="6783" class="graf graf--pre graf-after--p">matrix = np.zeros((total_words),dtype=float)</pre>

<pre name="216c" id="216c" class="graf graf--pre graf-after--pre">**text = "Hi"**</pre>

<pre name="ea51" id="ea51" class="graf graf--pre graf-after--pre">for word in text.split():  
    matrix[word2index[word.lower()]] += 1</pre>

<pre name="22b3" id="22b3" class="graf graf--pre graf-after--pre">print(matrix)</pre>

<pre name="0887" id="0887" class="graf graf--pre graf-after--pre">>>> **[ 1\.  0\.  0.]**</pre>

You will to the same with the labels (categories of the texts), but now you will use the one-hot encoding:

<pre name="e684" id="e684" class="graf graf--pre graf-after--p">y = np.zeros((3),dtype=float)</pre>

<pre name="a768" id="a768" class="graf graf--pre graf-after--pre graf--trailing">if category == 0:  
    y[0] = 1\.        # **[ 1\.  0\.  0.]**  
elif category == 1:  
    y[1] = 1\.        # **[ 0\.  1\.  0.]**  
else:  
     y[2] = 1\.       # **[ 0\.  0\.  1.]**</pre>











* * *







### Running the graph and getting the results

Now comes the best part: getting the results from the model. First let’s take a closer look at the input dataset.

#### The dataset

You will use the [20 Newsgroups](http://qwone.com/~jason/20Newsgroups/), a dataset with 18.000 posts about 20 topics. To load this dataset you will use the [scikit-learn](http://scikit-learn.org/stable/index.html) library. We will use only 3 categories: **comp.graphics**, **sci.space** and **rec.sport.baseball**. The scikit-learn has two subsets: one for training and one for testing. The recommendation is that **you should never look at the test data**, because this can interfere in your choices while creating the model. You don’t want to create a model to predict this specific test data, you want to create a model with a good **generalization**.

This is how you will load the datasets:

<pre name="fc9e" id="fc9e" class="graf graf--pre graf-after--p">from sklearn.datasets import fetch_20newsgroups</pre>

<pre name="2d30" id="2d30" class="graf graf--pre graf-after--pre">categories = ["comp.graphics","sci.space","rec.sport.baseball"]</pre>

<pre name="2fb1" id="2fb1" class="graf graf--pre graf-after--pre">**newsgroups_train** = fetch_20newsgroups(subset='train', categories=categories)  
**newsgroups_test** = fetch_20newsgroups(subset='test', categories=categories)</pre>

#### Training the model

In the [neural network terminology](http://stackoverflow.com/questions/4752626/epoch-vs-iteration-when-training-neural-networks), one epoch = one forward pass (getting the output values) and one backward pass (updating the weights) of _all_ the training examples.

Remember the `tf.Session.run()` method? Let’s take a closer look at it:

`tf.Session.run(fetches, feed_dict=None, options=None, run_metadata=None)`

In the dataflow graph of the beginning of this article you used the sum operation, but we can also pass a list of things to run. In this neural network run you will pass two things: the loss calculation and the optimization step.

The `feed_dict` parameter is where we pass the data for each run step. To pass this data we need to define `tf.placeholders` (to feed the `feed_dict`).

As the TensorFlow documentation says:

> “A placeholder exists solely to serve as the target of feeds. It is not initialized and contains no data.” — [Source](https://www.tensorflow.org/programmers_guide/reading_data)

So you will define your placeholders like this:

<pre name="18df" id="18df" class="graf graf--pre graf-after--p">n_input = total_words # Words in vocab  
n_classes = 3         # Categories: graphics, sci.space and baseball</pre>

<pre name="57ad" id="57ad" class="graf graf--pre graf-after--pre">input_tensor = **tf.placeholder(tf.float32,[None, n_input],name="input")**  
output_tensor = **tf.placeholder(tf.float32,[None, n_classes],name="output")**</pre>

You will separate the training data in batches:

> “If you use placeholders for **feeding input**, you can specify a **variable batch dimension** by creating the placeholder with tf.placeholder(…, shape=[**None**, …]). The None element of the shape corresponds to a variable-sized dimension.” — [Source](https://www.tensorflow.org/versions/r0.11/resources/faq)

We will feed the dict with a larger batch while testing the model, that’s why you need to the define a variable batch dimension.

The `get_batches()` function gives us the number of texts with the size of the batch. And now we can run the model:

<pre name="c656" id="c656" class="graf graf--pre graf-after--p">training_epochs = 10</pre>

<pre name="90f0" id="90f0" class="graf graf--pre graf-after--pre"># Launch the graph  
with tf.Session() as sess:  
    sess.run(init) #inits the variables (normal distribution, remember?)</pre>

<pre name="6f62" id="6f62" class="graf graf--pre graf-after--pre">    # Training cycle  
    for epoch in range(training_epochs):  
        avg_cost = 0.  
        total_batch = int(len(newsgroups_train.data)/batch_size)  
        # Loop over all batches  
        for i in range(total_batch):  
            batch_x,batch_y = **get_batch(newsgroups_train,i,batch_size)**  
            # Run optimization op (backprop) and cost op (to get loss value)  
            c,_ = **sess.run([loss,optimizer], feed_dict={input_tensor: batch_x, output_tensor:batch_y})**</pre>

Now you have the model, trained. To test it, you’ll also need to create graph elements. We’ll measure the accuracy of the model, so you need to get the index of the predicted value and the index of the correct value (because we are using the one-hot encoding), check is they are equal and calculate the mean to all the test dataset:

<pre name="16f7" id="16f7" class="graf graf--pre graf-after--p">    # Test model  
    index_prediction = **tf.argmax(prediction, 1)**  
    index_correct = **tf.argmax(output_tensor, 1)**  
    correct_prediction = **tf.equal(index_prediction, index_correct)**</pre>

<pre name="b50f" id="b50f" class="graf graf--pre graf-after--pre">    # Calculate accuracy  
    accuracy = **tf.reduce_mean(tf.cast(correct_prediction, "float"))**  
    total_test_data = len(newsgroups_test.target)  
    batch_x_test,batch_y_test = **get_batch(newsgroups_test,0,total_test_data)**  
    print("Accuracy:", accuracy.eval({input_tensor: batch_x_test, output_tensor: batch_y_test}))</pre>

<pre name="2504" id="2504" class="graf graf--pre graf-after--pre">>>> Epoch: 0001 loss= 1133.908114347  
    Epoch: 0002 loss= 329.093700409  
    Epoch: 0003 loss= 111.876660109  
    Epoch: 0004 loss= 72.552971845  
    Epoch: 0005 loss= 16.673050320  
    Epoch: 0006 loss= 16.481995190  
    Epoch: 0007 loss= 4.848220565  
    Epoch: 0008 loss= 0.759822878  
    Epoch: 0009 loss= 0.000000000  
    Epoch: 0010 loss= 0.079848485  
    Optimization Finished!</pre>

<pre name="88eb" id="88eb" class="graf graf--pre graf-after--pre">    Accuracy: 0.75</pre>

And that’s it! You created a model using a neural network to classify texts into categories. Congratulations! 😄

You can see the notebook with the **final code** [here](https://github.com/dmesquita/understanding_tensorflow_nn).

Tip: modify the values we defined to see how the changes affect the training time and the model accuracy.

Any questions or suggestions? Leave them in the comments. Oh, and thank’s for reading! 😄 ✌🏽

_If you found this article helpful, it would mean a lot if you click the 💚 and share with friends. Follow me for more articles about Data Science and Machine Learning._








