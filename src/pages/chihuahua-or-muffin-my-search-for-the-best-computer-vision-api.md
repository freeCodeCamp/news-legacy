---
author: Mariya Yao
authorTwitter: https://twitter.com/thinkmariya
authorFacebook: none
title: "Chihuahua or muffin? My search for the best computer vision API"
subTitle: "This popular internet meme demonstrates the alarming resemblance shared between chihuahuas and muffins. These images are commonly shared ..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*bt-E2YcPafjiPbZFDMMmNQ.jpeg
url: https://medium.freecodecamp.org/chihuahua-or-muffin-my-search-for-the-best-computer-vision-api-cbda4d6b425d
id: chihuahua-or-muffin-my-search-for-the-best-computer-vision-api-cbda4d6b425d
date: 2017-10-12T22:50:09.057Z
tags: [
  "Machine Learning",
  "Artificial Intelligence",
  "Computer Vision",
  "Tech",
  "Startup"
]
---
# Chihuahua or muffin? My search for the best computer vision API



![](https://cdn-images-1.medium.com/max/1600/1*bt-E2YcPafjiPbZFDMMmNQ.jpeg)



This popular internet meme demonstrates the alarming resemblance shared between chihuahuas and muffins. These images are commonly shared in presentations in the Artificial Intelligence (AI) industry (myself included).

But one question I haven’t seen anyone answer is **just how good IS modern AI at removing the uncertainty of an image that could resemble a chihuahua or a muffin?** For your entertainment and education, I’ll be investigating this question today.



![](https://cdn-images-1.medium.com/max/1600/1*SVeDXiWfTR5_1X2ct5THVA.jpeg)



Binary classification has been possible since the [perceptron algorithm](https://en.wikipedia.org/wiki/Perceptron) was invented in 1957\. If you think AI is hyped now, the _New York Times_ reported in 1958 that the invention was the beginning of a computer that would “be able to walk, talk, see, write, reproduce itself and be conscious of its existence.” While perceptron machines, like the [Mark 1](https://blog.knoldus.com/2017/09/12/introduction-to-perceptron-neural-network/), were designed for image recognition, in reality they can only discern patterns that are linearly separable. This prevents them from learning the complex patterns found in most visual media.

No wonder the world was disillusioned and an [AI winter](https://en.wikipedia.org/wiki/AI_winter) ensued. Since then, [multi-layer perceptions](https://en.wikipedia.org/wiki/Multilayer_perceptron) (popular in the 1980s) and [convolutional neural networks](https://en.wikipedia.org/wiki/Convolutional_neural_network) (pioneered by [Yann LeCun](http://yann.lecun.com/) in 1998) have greatly outperformed [single-layer perceptions](http://lcn.epfl.ch/tutorial/english/perceptron/html/intro.html) in image recognition tasks.

With large labelled data sets like [ImageNet](http://www.image-net.org/) and powerful [GPU](https://en.wikipedia.org/wiki/Graphics_processing_unit) computing, more advanced neural network architectures like [AlexNet](https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks.pdfhttps://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks.pdf), [VGG](https://arxiv.org/pdf/1409.1556.pdf), [Inception](https://www.cv-foundation.org/openaccess/content_cvpr_2015/papers/Szegedy_Going_Deeper_With_2015_CVPR_paper.pdf), and [ResNet](https://arxiv.org/pdf/1512.03385.pdf) have achieved state-of-the-art performance in computer vision.

#### Computer vision and image recognition APIs

If you’re a machine learning engineer, it’s easy to experiment with and fine-tune these models by using pre-trained models and weights in either [Keras/Tensorflow](https://keras.io/applications/) or [PyTorch](http://pytorch.org/). If you’re not comfortable tweaking neural networks on your own, you’re in luck. Virtually all the leading technology giants and promising startups claim to “democratize AI” by offering easy-to-use computer vision APIs.

Which one is the best? To answer this question, you’d have to clearly define your business goals, product use cases, test data sets, and metrics of success before you can compare the solutions against each other.

In lieu of a serious inquiry, we can at least get a high-level sense of the different behaviors of each platform by testing them with our toy problem of differentiating a chihuahua from a muffin.

#### Conducting the test

To do this, I split the canonical meme into 16 test images. Then I use [open source code](https://github.com/goberoi/cloudy_visionhttps://github.com/goberoi/cloudy_vision) written by engineer [Gaurav Oberoi](https://goberoi.com/) to consolidate results from the different APIs. Each image is pushed through the six APIs listed above, which return high confidence labels as their predictions. The exceptions are Microsoft, which returns both labels and a caption, and [Cloudsight](https://cloudsight.ai/), which uses human-AI hybrid technology to return only a single caption. This is why Cloudsight can return eerily accurate captions for complex images, but takes 10–20 times longer to process.

Below is an example of the output. To see the results of all 16 chihuahua versus muffin images, [click here](http://www.topbots.com/downloads/code/vision/chihuahua_vs_muffin/).



![](https://cdn-images-1.medium.com/max/1600/1*4KMZj5fCCDTjE3-XEK_kAQ.jpeg)



How well did the APIs do? Other than [Microsoft](https://www.microsoft.com/en-ca), which confused this muffin for a stuffed animal, every other API recognized that the image was food. But there wasn’t an agreement about whether the food was bread, cake, cookies, or muffins. Google was the only API to successfully identify muffin as the label that is most probable.

Let’s look at a chihuahua example.



![](https://cdn-images-1.medium.com/max/1600/1*YsW4O__m5exZzCcCX-nEVw.jpeg)



Again, the APIs did rather well. All of them realized that the image is a dog, although a few of them missed the exact breed.

There were definite failures, though. Microsoft returned a blatantly wrong caption three separate times, describing the muffin as either a stuffed animal or a teddy bear.



![](https://cdn-images-1.medium.com/max/1600/1*rDdnFnS0TO8pzjQfqrJphw.jpeg)



Google was the ultimate muffin identifier, returning “muffin” as its highest confidence label for 6 out of the 7 muffin images in the test set. The other APIs did not return “muffin” as the first label for any muffin picture, but instead returned less relevant labels like “bread”, “cookie”, or “cupcake.”

However, despite its string of successes, Google did fail on this specific muffin image, returning “snout” and “dog breed group” as predictions.



![](https://cdn-images-1.medium.com/max/1600/1*cWSxK4jgzl7II7aPa_3u4g.jpeg)



Even the world’s most advanced machine learning platforms are tripped up by our facetious chihuahua versus muffin challenge. A human toddler beats deep learning when it comes to figuring out what’s food and what’s Fido.

#### Testing with real-world images

I’d like to know how well the APIs perform on real-world images of chihuahuas and muffins, and not just on ones where they are carefully curated to resemble each other. [ImageNet](http://www.image-net.org/) happens to have [1750 images of chihuahuas](http://image-net.org/synset?wnid=n02085620) and [1335 images of various types of muffins](http://image-net.org/synset?wnid=n07690273).

Some of the images were pretty easy for our APIs to recognize because the chihuahuas exhibit very distinct class features, such as bulging eyes and pointy ears. Such is the case of this chihuahua.



![](https://cdn-images-1.medium.com/max/1600/1*inlQhAtv0aGTatibkJys3w.jpeg)



On the other hand, some images proved tricky. APIs often misidentify objects if there are multiple subjects within the same photo or if the subject is costumed or obstructed.



![](https://cdn-images-1.medium.com/max/1600/1*PGFmvzlCVqnvU_KXXfy5dA.jpeg)



In the above image, the costume on the dog may have prevented the APIs (and likely many human classifiers) from correctly identifying the breed. [IBM Watson](https://www.ibm.com/watson/) manages to tag the hats but not the dog or the person wearing them.

#### Handling noisy labels

With unstructured real-world data, including images, human-tagged labels are not always “ground truth.” Labels can be incorrect or “noisy.” Here’s an example of an image that was included in the “[muffin” category](http://image-net.org/synset?wnid=n07690273) on ImageNet.



![](https://cdn-images-1.medium.com/max/1600/1*KzP_wbIJRIR-KjXll_N7iw.jpeg)



Humans would likely identify this “muffin in disguise” more accurately as a “cupcake.” Fortunately, many of our APIs did return “cake”, “cupcake”, or “cookie” as predictions that are more relevant than the ImageNet category. Cloudsight’s human labelling produced the most accurate result of “cookie monster cupcake,” which is indeed a strange human invention for machines to interpret.

Using multiple models and APIs could be one interesting way to assess the “noisiness of labels.” In the case of ImageNet’s “muffin” category, the muffin varieties (eg., bran, corn, and popover) can appear visually distinct. Many are actually mislabelled as cupcakes or other non-muffin types of baked goods.



![](https://cdn-images-1.medium.com/max/1600/1*_tZUcPuKzEWxlG8Emw6YhA.jpeg)



Running a large number of images through different image recognition APIs, and tracking the common overlaps and divergent one-offs can help you systematically flag images which might have noisy or incorrect labels.

**Weird side note:** In searching for different muffin categories on ImageNet, I came across an unexpected category called “muffin man,” which ImageNet defines as “formerly an itinerant peddler of muffins.” If you’re ever looking for photos of dudes presenting muffins, now you know where to go.



![](https://cdn-images-1.medium.com/max/1600/1*A1Cba4mQBNBJqTGR_pEs7A.jpeg)



#### Playing trickster

Just for fun, I tried to fool the APIs with tricky photos that contained:

*   both a chihuahua AND a muffin
*   dog-shaped cupcakes

Here’s how the APIs did on one of the photos featuring both a chihuahua AND a muffin:



![](https://cdn-images-1.medium.com/max/1600/1*8Aicj34wLtt-xX8I_L_70w.jpeg)



IBM and Cloudsight were the only two APIs that acknowledged any food was present in the image. IBM, however, was creative with its guesses of “takoyaki”, “gyoza”, and “cannoli.”

There was also confusion caused by the dog-shaped cupcakes:



![](https://cdn-images-1.medium.com/max/1600/1*zUc2ZmajsJyZ_QjC02gsnQ.jpeg)



In typical fashion, Microsoft captioned the image as “a bunch of stuffed animals.” Google predicted that the photo was probably a “dog-like mammal” (0.89) than a “cake” (0.79). [Clarifai](https://www.clarifai.com/) thought with high confidence that the image contained both “food” (0.99) and a “mammal” (0.96).

In these complex or unusual cases, Cloudsight’s human captioning demonstrated superior results. Cloudsight tagged the last image as “12-piece West Highland White Terrier cupcakes.” And it recognized the former image as a popular meme.

#### Which computer vision API is the best?

While we can’t determine conclusively that one API is better than another by using these joke examples, you can definitely observe qualitative differences by how they perform.

#### **Amazon Rekognition**

Amazon’s [Rekognition](https://aws.amazon.com/rekognition/) is not just good at identifying the primary object but also the many objects around it. For example, a human, bird, or piece of furniture when it is also in the image. Rekognition also includes qualitative judgements, such as “cute” or “adorable.” There’s a nice balance of objective and subjective labels in its top predictions.

#### **Google and IBM**

[Google’s Vision API](https://cloud.google.com/vision/) and [IBM Watson Vision](https://www.ibm.com/watson/) are both very literal. They never seem to return labels other than straightforward, descriptive labels. The performance seems comparable between the two, with IBM typically returning slightly more labels on average for any given photo.

#### **Microsoft**

Microsoft’s tags were usually too high level. For example, “dog”, “canine”, and “mammal” were never once specified as a “chihuahua” or “muffin.” This a surprise. Microsoft also seemed to be very trigger happy with identifying muffins as “stuffed animals” in its auto-generated captions. You’d think the company behind ResNet would perform better, but this may be a quirk of this dataset, so I encourage you to do more robust testing on your own.

#### **Cloudsight**

[Cloudsight](https://cloudsight.ai/) is a hybrid between human tagging and machine labelling. This API is much slower than the others, as you can see from the speed stats below. That said, for difficult or strange photos, Cloudsight’s description tends to be the most accurate, for example “12-piece West Highland White Terrier cupcakes.”

#### **Clarifai**

[Clarifai](https://www.clarifai.com/) returns, by far, the most tags (at 20). Yet not once did it correctly identify the breed of the dog as a “chihuahua.” Instead it resorted to more generic tags like “dog”, “mammal”, or “animal.” What Clarifai does do well is add qualitative and subjective labels, such as “cute”, “funny”, “adorable”, and “delicious.” It also returns abstract concepts like “facial expression” or “no person.” These can be useful if you’re looking for a richer description of images to be used in advertising or other consumer-facing purposes.

#### **Other considerations**

As stated before, to assess these APIs, you need to define clear business and product goals, an appropriate test data set, and metrics for success. You’d also need to consider factors such as cost, speed, and number of tags returned.

Here’s the summary for these additional metrics based on the 16 images from the classic chihuahua versus muffin meme. Amazon Rekognition regularly performs slightly faster than the other fully automated APIs. Cloudsight, as expected, is slower because of the human/AI hybrid structure, and only returns a single caption. Clarifai returns 20 labels by default.



![](https://cdn-images-1.medium.com/max/1600/1*kvrsx3zNNes1Eb8scY-WsQ.jpeg)



Pricing for all of the APIs can be found on their pricing pages, which are linked below. Most of the APIs offer a free tier and then charge based on a monthly processing volume. At the time of the writing of this article, the approximate starting prices are as listed below, based on a per image rate. Prices are constantly in flux, so check for updates before you commit to any platform.

*   [Amazon](https://aws.amazon.com/rekognition/pricing/) — $0.001
*   [Microsoft](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/computer-vision/) — $0.001
*   [IBM Watson](https://www.ibm.com/watson/services/visual-recognition/) — $0.002
*   [Google Cloud](https://cloud.google.com/vision/pricing) — $0.0015
*   [Cloudsight](https://cloudsight.ai/pricing) — $0.02
*   [Clarifai](https://www.clarifai.com/developer/pricing/) — $0.0015

Many of the APIs charge between $0.001 and $0.002 per image if you purchase a few million images. Cloudsight is notably more expensive at $0.02 an image, with pricing based on 30,000 images per month. Its lower volume package can charge up to $0.07 an image!

#### Further research

If you would like to conduct your own unscientific, yet wildly entertaining, research into image recognition APIs, it may be helpful to know that the chihuahua versus muffin meme originator, [Karen Zack](https://twitter.com/teenybiscuit), made a ton of “food versus animal” comparisons that are ripe for API benchmarking!

These are some of my favorites:



![](https://cdn-images-1.medium.com/max/1600/1*wXhOHOFPb2-mqnDu0ofrNQ.jpeg)



Have fun & let me know your results in the comments below!











* * *







If you enjoyed reading this article, join the [TOPBOTS](http://www.topbots.com/bot-news-pro-newsletter/?utm_medium=article&utm_source=medium&utm_campaign=newsletter) community to get the best bot news and exclusive industry content.








