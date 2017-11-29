---
author: Adriana Vecchioli
authorTwitter: none
authorFacebook: none
title: "Here’s how you can make a 360 VR app in 10 minutes with Unity"
subTitle: "Virtual Reality (VR) is exciting. It’s also the New Frontier of app development...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*US4qmns1r1F0BKMxBpeYcg.png
url: https://medium.freecodecamp.org/heres-how-you-can-make-a-360-vr-app-in-10-minutes-with-unity-51cbe41ad8f1
id: heres-how-you-can-make-a-360-vr-app-in-10-minutes-with-unity-51cbe41ad8f1
date: 2017-05-23T03:54:34.722Z
tags: [
  "Virtual Reality",
  "Unity",
  "Tech",
  "Technology",
  "Programming"
]
---
# Here’s how you can make a 360 VR app in 10 minutes with Unity







![](https://cdn-images-1.medium.com/max/2000/1*US4qmns1r1F0BKMxBpeYcg.png)

Image credits: yours truly







Virtual Reality (VR) is exciting. It’s also the New Frontier of app development.

VR is poised to give birth to new forms of storytelling and emotionally powerful experiences. Yet making VR is perceived as intimidating: it’s expensive and requires both special hardware and skills.

But that’s changing, as intuitive tools and affordable hardware are making VR development accessible. This tutorial will show you how to build a 360 video app on Android and Google Cardboard in just a few minutes. And barely any coding required ;)

VR development should not be a barrier to bringing your ideas to life. Let’s get started:









<iframe data-width="854" data-height="480" width="980" height="551" src="https://medium.freecodecamp.org/media/708f1430b11e10909df02cab98847567?postId=51cbe41ad8f1" data-media-id="708f1430b11e10909df02cab98847567" allowfullscreen="" frameborder="0"></iframe>



[https://youtu.be/2HwX02YuFtk](https://youtu.be/2HwX02YuFtk)







### **What you need**

Here’s our grocery list:

📱 An [**Android phone**](https://www.amazon.com/gp/product/B01MU9RKP2/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01MU9RKP2&linkCode=as2&tag=vrtiginous-20&linkId=445c8c7a351006a6f5239b3667c29fc3)with a gyroscope to sense head movements, running on KitKat or newer OS.

👓 A **Cardboard headset**. If you don’t own one, you can find many on Amazon for less than 10 dollars. [This one](https://www.amazon.com/gp/product/B06X6B9YVG/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B06X6B9YVG&linkCode=as2&tag=vrtiginous-20&linkId=86c04570070ba858568f715166805857) is my favorite.

🎮 [**Unity3D**](https://unity3d.com/fr/get-unity/download), a cross-platform game engine, that you need to install on your computer, version 5.6 or newer. We will use this software to build our whole project.

📦 The[**GoogleVR SDK for Unity**](https://developers.google.com/vr/unity/download), which you can download beforehand.

📹 A **360 video**. Shoot one with a 360 camera ([here’s one you can plug into your phone](https://www.amazon.com/gp/product/B06Y5YTQGV/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B06Y5YTQGV&linkCode=as2&tag=vrtiginous-20&linkId=0660c5b49b36c9b42e46c759c7629008)) or find one online.

### **How are we building this app?**

Unlike regular video that has a rectangular frame, 360 video has the shape of a sphere. So, we first need to create a spherical screen to project our 360 video onto. The player (or viewer) will be located inside this sphere and will be able to watch the video in any direction.

The steps below should make you feel empowered to make your own changes, by explaining how it all works under the hood. For step-by-step instructions, refer to the video

### **Step 1: Build a Sphere 🌐**



![](https://cdn-images-1.medium.com/max/1600/1*jvbDMcNGQU9l9lnNSFij5w.png)



First, let’s open a new Unity Project if you are starting from scratch (or a new Scene if you want to integrate the 360 video player in an existing project.) Think of a Scene as one level of a video game, and a Project as a full game.

Afterwards, add a sphere object in the Scene, placed at its center (_Position = 0, 0, 0_), with a radius of 50 (_Scale = 50, 50, 50_). The Camera’s position should also be set to 0, 0, 0\. The Camera is the player/viewer’s eyes so we want it at the center of the Sphere. Placing it elsewhere would make the video look distorted.

Once the Camera is placed inside the Sphere, the latter is no longer visible in the Scene. Don’t worry, there is an explanation for that! Indeed, most game engines do not, by default, render by default the inner side of 3D objects. This is because we rarely need to see them, it would be a waste of resource to render them. We’ll fix that next.

### **Step 2: Flip the Sphere’s Normals 🔄**



![](https://cdn-images-1.medium.com/max/1600/1*NXKLWLDirFigK2Zx9L8IoQ.png)



In our case, we do need to see our Sphere from the inside. That’s the whole point of the app, so we are going to turn it inside-out.

In Unity, spheres are not actually spheres (what? We’ve been lied to all along!), they are polygons made with thousands of teeny, tiny facets. The external sides of the facets are visible, but not the internal ones. For that reason, we are going to make a program to flip these little facets like pancakes.

In 3D geometry, we call this transformation « reversing normals » or « flipping normals ».

We’ll use a program called a _Shader_, that we’ll apply to the _Material_ of the Sphere. Materials control the appearance of objects in Unity. Shaders are small scripts that calculate the color of each pixel rendered, based on lighting and information pulled from their Materials.

Hence create a new Material for the Sphere, then a new Shader applied to this Material. We need to write custom code for the Shader… but have no fear, you can copy-paste the code below:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/e056bcf98041f96fb63f322a1cdd9dd9?postId=51cbe41ad8f1" data-media-id="e056bcf98041f96fb63f322a1cdd9dd9" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F6166964%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



[www.vrtiginous.com/flippingnormals](http://www.vrtiginous.com/flippingnormals)



This little Shader is going to turn each pixel of the sphere inside out. Now our Sphere appears like a big white ball, viewed from inside, within our Scene. The next step is to turn this white sphere into a video player.

### Step 3: Project your 360 video inside the Sphere 📽

Here you need to have a 360 mp4 video on hand. Import it in the project, then drag it onto the Sphere. And that’s when the magic happens: a ‘Video Player’ component appears and boom, the video is ready to play.

You can play with the settings like loops and audio. It also supports streaming!

### Step 4: Set up Google Cardboard 📦



![](https://cdn-images-1.medium.com/max/1600/1*nLFO9-K8swJjfRYTByT15g.png)



In this step, we’ll make the experience _really_ feel immersive. That’s why we want to view it in a VR headset, here a Google Cardboard.

We are going to create a “stereoscopic” view (the screen will be split in two, with some fisheye effects on both sides — one side for each eye), using the GoogleVR SDK. The fisheye effect on each eye, combined with the distortion of the Cardboard’s plastic lenses, is what gives you the illusion of depth and immersion.

To add the [GoogleVR SDK](https://developers.google.com/vr/unity/download) to our project, download and import the plugin, then we’ll adjust a bunch of Android settings:

*   Go to _top bar menu > File > Build Settings_. Add your open scene if it isn’t already added, then select Android in the list of supported platforms.
*   Click on _Switch Platform_. It should take a little while the first time you make the switch.
*   Click on _Player Settings_. Components appear in the Instructor panel.

In the Player Settings’ Instructor, under the ‘Other Settings’ section:

*   Check _Virtual Reality Supported_. Under _Virtual Reality SDKs_, select the + icon, then select _Cardboard_ to add it to the list.
*   Enter a package name into the _Bundle Identifier_ field (for example, _com.yourdomain.demo360_). It has to be unique and is used to distinguish our app from others in the Google Play store.
*   Set the _Minimum API Level_ drop-down menu to “_Android 4.4 ‘Kit Kat’ (API level 19)_”.

Afterwards, take the ‘_GvrViewerMain_’ element from the _GoogleVR\Prefabs_ folder in the Project Browser, and drag it into the scene. In the Inspector, give it the same _Position_ as the center of the Sphere — (_0, 0, 0_).

The _GvrViewerMain_ prefab controls all VR Mode settings, such as adapting the screen to the Cardboard’s lenses. It also communicates with your phone’s gyroscope to track your head movements. When you turn your head, the Camera and what you see also turn inside the 360 video player.

Now you can look in all directions when the video is on and the screen is split in two, to accommodate both lenses of the Cardboard.

### **Step 5: Run the app on Android 📲**



![](https://cdn-images-1.medium.com/max/1600/1*6ZeCWw1dEKNNT7iLtXfndQ.png)



For our final step, we’ll run the app on an Android phone and share it with friends!

There are two ways to do that:

*   Go back to _File > Build Settings_. You can plug an Android phone with a USB cable to your computer and click on _Build & Run_. This installs the app straight to your phone.
*   The other option is to click on _Build only_. This does not install it on a phone, but instead generates an APK file. You can share the APK by email with anyone who wants to try the masterpiece you just built. They have to double-tap on the APK attachment to install it on their phones.

During the build process, you may be asked to select the root Android SDK folder. If that’s the case, download the [Android SDK](https://developer.android.com/studio/index.html#downloads) then select its folder location.

Launch the app, pop your phone into a Cardboard headset, you’re good to go! You can replace the video with anything in 360 format and experience VR 360 immersion at home.

### **Going further**

Congratulations, you made a _360_ video app, and you are one step away from creating a _VR_ video app! While the terms are often used alike, 360 and VR define two different experiences:

*   360 video is recorded from all angles, with a special camera or an assembly of multiple ones. The user can watch in any direction desired, but there’s no interactivity to the experience.
*   VR usually refers to a computer-generated environment in which the user is immersed. It is an interactive experience: the player can move around and control objects, in addition to looking in all directions.

Your new app can serve as a starting point to build a richer VR experience. Unity has plenty of features you can leverage, such as adding 3D elements or cool particle effects ✨ to overlay and enhance your video, or throwing in some interactive elements.

You can also place a full 3D environment inside the 360 video player and use the latter as a skybox. The user can navigate in the scenery, using this nifty [walking script](https://github.com/JuppOtto/Google-Cardboard/blob/master/Autowalk.cs).

Let your imagination run wild and show me your creations: tweet me [@AdrianaVecc](http://twitter.com/adrianavecc) or leave a comment.

Crafting beautiful VR stories is hard. Building them shouldn’t be.



![](https://cdn-images-1.medium.com/max/1600/1*9iyrdtDJfikdkJBKpmWzPQ.png)



**_If you liked this article, please press the_ 💚 _below so other people will see it._**

_Adriana is an artist & product designer who makes VR experiences that build empathy. If you want to bring your VR ideas to life, shoot us an email: hello@vrtiginous.com 💫_








