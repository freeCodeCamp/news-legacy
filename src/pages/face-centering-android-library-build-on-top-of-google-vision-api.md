---
author: Rohit Arya
authorTwitter: https://twitter.com/arya_rohit07
authorFacebook: https://facebook.com/1138915946171030
title: "Face centering Android library build on top of Google Vision API"
subTitle: "In our Android apps, when we crop photos to display them, we often encounter the problem of positioning faces properly...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*9MTjfLoGfWIRXjlhMaTucw.png
url: https://medium.freecodecamp.org/face-centering-android-library-build-on-top-of-google-vision-api-f88661b97959
id: face-centering-android-library-build-on-top-of-google-vision-api-f88661b97959
date: 2016-07-20T11:15:42.277Z
tags: [
	"Android",
	"Android App Development",
	"Open Source",
	"Technology",
	"Design"
]
---
# Face centering Android library build on top of Google Vision API







![](https://cdn-images-1.medium.com/max/1600/1*9MTjfLoGfWIRXjlhMaTucw.png)






Results after cropping



In our Android apps, when we crop photos to display them, we often encounter the problem of positioning faces properly.

This inspired me to create a tool that will locate faces and in an image (if there are any) and center the cropped image around them.

Here’s how I did it.

I started with [Face Detection API](https://developers.google.com/vision/face-detection-concepts) of Google’s mobile vision. This API provides:

*   Face detection (not face recognition)
*   Face tracking (extends face detection to video sequences)
*   A **landmark** — a point of interest within a face (like eyes, nose, etc)
*   Classification of a face to determine if the face is smiling, eyes are open or closed, and other features

Since I just wanted the position of the face, I only used the face detection component. To start with that, I created the face detector:

<pre name="f33c" id="f33c" class="graf graf--pre graf-after--p">FaceDetector detector = new FaceDetector.Builder(context)  
    .setTrackingEnabled(false)  
    .build();</pre>

Now given a bitmap, I created a frame instance from the bitmap to supply to the detector:

<pre name="466a" id="466a" class="graf graf--pre graf-after--p">Frame frame = new Frame.Builder().setBitmap(bitmap).build();</pre>

Now, I tried to detect faces synchronously in the frame:

<pre name="3dfe" id="3dfe" class="graf graf--pre graf-after--p">SparseArray<Face> faces = detector.detect(frame);</pre>

Once I got faces, I chose one face (for now) to crop the image around, keeping that face in the center.

Now to begin cropping the image:

*   I created a scaled new bitmap to fit the target view (ImageView).
*   I then recalculated the position of the face in the new bitmap.
*   Keeping the face in the center, I cropped the original bitmap to get a new bitmap.
*   If no face is detected, then I fallback to CENTER CROP.

_You can find the full code in_ [_my GitHub repositories_](https://github.com/aryarohit07) _below._

Here are some results of it:












Original image to be cropped.














Results after cropping














Original image














Results after cropping














Original Image














Results after cropping














Original Image














Results after cropping



I finally exported this as a library, which you can find below.

For [Glide](https://github.com/bumptech/glide):

[**aryarohit07/GlideFaceDetectionTransformation**  
_GlideFaceDetectionTransformation - An Android image transformation library providing cropping above Face Detection…_github.com](https://github.com/aryarohit07/GlideFaceDetectionTransformation "https://github.com/aryarohit07/GlideFaceDetectionTransformation")[](https://github.com/aryarohit07/GlideFaceDetectionTransformation)

For [Picasso](https://github.com/square/picasso):

[**aryarohit07/PicassoFaceDetectionTransformation**  
_PicassoFaceDetectionTransformation - An Android image transformation library providing cropping above Face Detection…_github.com](https://github.com/aryarohit07/PicassoFaceDetectionTransformation "https://github.com/aryarohit07/PicassoFaceDetectionTransformation")[](https://github.com/aryarohit07/PicassoFaceDetectionTransformation)

I am planning to release it for [Fresco](https://github.com/facebook/fresco) too.

Feel free to make use of this tool, and help me improve it over on GitHub.

> _If you enjoyed reading this article, it would mean a lot if you recommend it using the ❤ icon and share with your colleagues and friends. Thanks!_








