---
author: Michal Bialas
authorTwitter: https://twitter.com/mmbialas
authorFacebook: https://facebook.com/1144673055599593
title: "The 30 Coolest Android Libraries from Spring 2017"
subTitle: "These are my 30 favorite new Android libraries that have come out since March 2017. Some of them aren’t production ready yet, but you may..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*3FVOI0HJNamEVvcnmRPqSg.jpeg
url: https://medium.freecodecamp.org/30-new-android-libraries-released-in-the-spring-of-2017-which-deserve-your-attention-faea359a1915
id: 30-new-android-libraries-released-in-the-spring-of-2017-which-deserve-your-attention-faea359a1915
date: 2017-05-15T07:59:55.439Z
tags: [
	"Android",
	"Productivity",
	"Android App Development",
	"Programming",
	"Mobile"
]
---
# The 30 Coolest Android Libraries from Spring 2017











![](https://cdn-images-1.medium.com/max/2000/1*3FVOI0HJNamEVvcnmRPqSg.jpeg)












These are my 30 favorite new Android libraries that have come out since March 2017\. Some of them aren’t production ready yet, but you may have **lots of fun** using them. I hope you enjoy these.

Here they are in no particular order:

#### 1\. [Matisse](https://github.com/zhihu/Matisse)

This is a beautiful local images and videos selector. Main functionalities:

*   Selecting images including JPEG, PNG, GIF and videos including MPEG, MP4,
*   applying custom themes, including two built-in ones,
*   different image loaders,
*   defining custom filter rules,
*   fully operational within `Activities` and `Fragments`.

You can find more in the lib’s [wiki](https://github.com/zhihu/Matisse/wiki).














[**zhihu/Matisse**  
_Matisse - :fireworks: A well-designed local image and video selector for Android_github.com](https://github.com/zhihu/Matisse "https://github.com/zhihu/Matisse")[](https://github.com/zhihu/Matisse)

#### 2\. [Spruce Android Animation Library](https://github.com/willowtreeapps/spruce-android)

> Spruce is a lightweight animation library that helps choreograph the animations on the screen. With so many different animation libraries out there, developers need to make sure that each view is animating at the appropriate time. Spruce can help designers request complex multi-view animations and not have the developers cringe at the prototype.














[**willowtreeapps/spruce-android**  
_spruce-android - Spruce Animation Library_github.com](https://github.com/willowtreeapps/spruce-android "https://github.com/willowtreeapps/spruce-android")[](https://github.com/willowtreeapps/spruce-android)

#### 3\. [MaterialChipsInput](https://github.com/pchmn/MaterialChipsInput)

Chips were presented in Material Design. They

> represent complex entities in small blocks, such as a contact. A chip may contain entities such as a photo, text, rules, an icon, or a contact.

MaterialChipsInput is an implementation of that component for Android. The library provides two views : `[ChipsInput](https://github.com/pchmn/MaterialChipsInput#chipsinput)` and `[ChipView](https://github.com/pchmn/MaterialChipsInput#chipview)`.














[**pchmn/MaterialChipsInput**  
_MaterialChipsInput - Implementation of Material Design Chips component for Android_github.com](https://github.com/pchmn/MaterialChipsInput "https://github.com/pchmn/MaterialChipsInput")[](https://github.com/pchmn/MaterialChipsInput)

#### 4\. [Grav](https://github.com/glomadrian/Grav)

This library allows to create multiple animations based on points. Take a look — how smooth and beautiful animations you can make quite easily. _README_ contains a lot of examples so you might check it [here](https://github.com/glomadrian/Grav).














[**glomadrian/Grav**  
_Grav - Configurable animations based on points_github.com](https://github.com/glomadrian/Grav "https://github.com/glomadrian/Grav")[](https://github.com/glomadrian/Grav)

#### 5\. [Litho](https://github.com/facebook/litho)

Litho is not a library, it is a framework. A really powerful framework to build UI in a declarative way. It was developed by Facebook devs, so even if you do not want to try it, still it is worthy to observe and follow a development process.














Main features include:

*   using a declarative API to define UI components. You simply describe the layout for your UI based on a set of immutable inputs and the framework takes care of the rest.
*   Asynchronous layout: Litho can measure and layout your UI ahead of time without blocking the UI thread.
*   View flattening: Litho uses [Yoga](https://facebook.github.io/yoga/) for layout and automatically reduces the number of ViewGroups that your UI contains.
*   Fine-grained recycling: Any component such as a text or image can be recycled and reused anywhere in the UI.

[**facebook/litho**  
_litho - A declarative framework for building efficient UIs on Android._github.com](https://github.com/facebook/litho "https://github.com/facebook/litho")[](https://github.com/facebook/litho)

#### 6\. [Adaptable Bottom Navigation](https://github.com/bufferapp/AdaptableBottomNavigation)

Some time ago Google updated Material Design guideline, and introduced bottom navigation bars, as one of several good UI patters to follow in our apps. They also added the implementation to the Design Support Library.














Adaptable Bottom Navigation can easily replace `BottomNavigationView` from Support Library. It is implemented in the way how `ViewPager` and `TabLayout` work. This is a short explanation from Buffer team:

> As mentioned, when using the Bottom Navigation View from the Android Support Library, there can be a lot of boilerplate code for the switching of views. Because of this, we took inspiration from the TabLayout setupWithViewPager() method and created a custom ViewSwapper component that can be attached to a Bottom Navigation View to simplify the management of view display.

You can read more on Github. There is a quite comprehensive documentation and explanation why it was implemented (tip: clean architecture 🚀 ).














[**bufferapp/AdaptableBottomNavigation**  
_AdaptableBottomNavigation - A simpler way for implementing the Bottom Navigation View on Android_github.com](https://github.com/bufferapp/AdaptableBottomNavigation "https://github.com/bufferapp/AdaptableBottomNavigation")[](https://github.com/bufferapp/AdaptableBottomNavigation)

#### 7\. [PatternLockView](https://github.com/aritraroy/PatternLockView)

> This library allows you to implement pattern locking mechanism in your app easily and quickly. It is very easy to use and there are plenty of customization options available to change the functionality and look-and-feel of this view to match your needs.

> It also supports RxJava 2 view bindings, so if you are a fan of reactive programming (just like me), you can get a stream of updates as the user draws the pattern.

The _README_ is full of examples, so it is easy to start with the library.














[**aritraroy/PatternLockView**  
_PatternLockView - An easy-to-use, customizable and Material Design ready Pattern Lock view for Android_github.com](https://github.com/aritraroy/PatternLockView "https://github.com/aritraroy/PatternLockView")[](https://github.com/aritraroy/PatternLockView)

#### 8\. [Isometric](https://github.com/FabianTerhorst/Isometric)

This is a library which helps to draw isometric shapes. In my opinion, it is one of the coolest libraries in that list, as it reminds me of [Monument Valley](https://play.google.com/store/apps/details?id=com.ustwo.monumentvalley) game.   
The library supports drawing multiple shapes, paths and complex structures, like the example below.














[**FabianTerhorst/Isometric**  
_Isometric drawing library for Android_github.com](https://github.com/FabianTerhorst/Isometric "https://github.com/FabianTerhorst/Isometric")[](https://github.com/FabianTerhorst/Isometric)

#### 9\. [UltraViewPager](https://github.com/alibaba/UltraViewPager)

We can treat this library as a `ViewPager` extension that encapsulates many features, mainly to provide a unified solution for multi-page switching scenarios.














#### UltraViewPager supports:

*   horizontal scrolling and vertical scrolling,
*   multi views in one `ViewPager`
*   switching views circularly. For example, if there are 3 views to display in a `ViewPager`, it should switch back to the first view after the third view,
*   auto-scrolling feature (implemented timer using `Handler`),
*   setting max-height and max-width,
*   setting the aspect ratio,
*   indicating the view we are currently (circle and icon),
*   built-in two kinds of page transition animations.

This library has a good documentation as well.

[**alibaba/UltraViewPager**  
_UltraViewPager is an extension for ViewPager to provide multiple features in a single ViewPager._github.com](https://github.com/alibaba/UltraViewPager "https://github.com/alibaba/UltraViewPager")[](https://github.com/alibaba/UltraViewPager)

#### 10\. [InfiniteCards](https://github.com/BakerJQ/Android-InfiniteCards)

This library helps to implement UI cards and then switch them with a nice animation.














[**BakerJQ/Android-InfiniteCards**  
_Android-InfiniteCards - An infinite card switching UI for Android, support custom animation 可自定义动效的卡片切换视图_github.com](https://github.com/BakerJQ/Android-InfiniteCards "https://github.com/BakerJQ/Android-InfiniteCards")[](https://github.com/BakerJQ/Android-InfiniteCards)

#### 11\. [SlidingRootNav](https://github.com/yarolegovich/SlidingRootNav)

This is a library which we can consider as a DrawerLayout-like `ViewGroup`, where a _drawer_ is hidden under the content view, and then can be shifted to make the drawer visible. _REAMDE_ is quite comprehensive and it is worthy to check for sure.














[**yarolegovich/SlidingRootNav**  
_SlidingRootNav - DrawerLayout-like ViewGroup, where a "drawer" is hidden under the content view, which can be shifted…_github.com](https://github.com/yarolegovich/SlidingRootNav "https://github.com/yarolegovich/SlidingRootNav")[](https://github.com/yarolegovich/SlidingRootNav)

#### 12\. [PasscodeView](https://github.com/hanks-zyh/PasscodeView)

It is just a view where you can type your password. But fancy one!














[**hanks-zyh/PasscodeView**  
_Material Design PasscodeView for Android._github.com](https://github.com/hanks-zyh/PasscodeView "https://github.com/hanks-zyh/PasscodeView")[](https://github.com/hanks-zyh/PasscodeView)

#### 13\. [MusicWave](https://github.com/akshay2211/MusicWave)

This library allows to represent sound as a gradient colored visualisation.














[**akshay2211/MusicWave**  
_With MusicWave represent your Sound in a gradient colored Visualization_github.com](https://github.com/akshay2211/MusicWave "https://github.com/akshay2211/MusicWave")[](https://github.com/akshay2211/MusicWave)

#### 14\. [ShadowImageView](https://github.com/yingLanNull/ShadowImageView)

This library helps you to add more meaningful shadow to your images. According to _README_, it is

> More exquisite shadow effect, used in some special scene to enhance the user experience.

Also, it is easy to use.














[**yingLanNull/ShadowImageView**  
_ShadowImageView - 🔥可以根据图片内容变阴影颜色，更加细腻的阴影效果 It can change color according to the picture, more delicate shadow effect_github.com](https://github.com/yingLanNull/ShadowImageView "https://github.com/yingLanNull/ShadowImageView")[](https://github.com/yingLanNull/ShadowImageView)

#### 15\. [PolygonDrawingUtil](https://github.com/stkent/PolygonDrawingUtil)

This is an efficient Android utility class for drawing regular polygons on a `[Canvas](https://developer.android.com/reference/android/graphics/Canvas.html)`. We can specify:

*   Number of sides (≥ 3),
*   center coordinates,
*   outer radius (center to vertex),
*   corner rounding radius,
*   polygon rotation,
*   fill/stroke `[Paint](https://developer.android.com/reference/android/graphics/Paint.html)`.














[**stkent/PolygonDrawingUtil**  
_PolygonDrawingUtil - An efficient Android utility class for drawing regular polygons on a Canvas._github.com](https://github.com/stkent/PolygonDrawingUtil "https://github.com/stkent/PolygonDrawingUtil")[](https://github.com/stkent/PolygonDrawingUtil)

#### 16\. [Tiny](https://github.com/Sunzxyong/Tiny)

This is a second framework on that list. It is responsible for image compression and it is quite powerful. Also, it

> uses asynchronous thread pool to compress image, and will hand out the result in the main thread when compression is completed.












Effects of compression



[**Sunzxyong/Tiny**  
_Tiny - an image compression framework._github.com](https://github.com/Sunzxyong/Tiny "https://github.com/Sunzxyong/Tiny")[](https://github.com/Sunzxyong/Tiny)

#### 17\. [ParticleTextView](https://github.com/Yasic/ParticleTextView)

This library provides a custom `TextView` widget, which can create text from particles using a variety of animation effects and configuration properties.














[**Yasic/ParticleTextView**  
_ParticleTextView - 一个用粒子动画显示文字的 Android 自定义 View_github.com](https://github.com/Yasic/ParticleTextView "https://github.com/Yasic/ParticleTextView")[](https://github.com/Yasic/ParticleTextView)

#### 18\. [CropIwa](https://github.com/steelkiwi/cropiwa)

This is a highly configurable widget for image cropping. The library has a modular architecture, which makes it highly configurable. For the info on how to configure `CropIwaView`refer to the [wiki on Github](https://github.com/steelkiwi/cropiwa).














[**steelkiwi/cropiwa**  
_cropiwa - 📐 Configurable Custom Crop widget for Android_github.com](https://github.com/steelkiwi/cropiwa "https://github.com/steelkiwi/cropiwa")[](https://github.com/steelkiwi/cropiwa)

#### 19\. [Project Condom](https://github.com/oasisfeng/condom)

> This is a thin library to wrap the naked `Context` in your Android project before passing it to the 3rd-party SDK. **It is designed to prevent the 3rd-party SDK from common unwanted behaviors which may harm the user experience of your app.**

And here is the explanation:

> Massive launch of processes in other apps (common in 3rd-party push SDKs), causing slow app starting and notable lagging on low to middle-end devices. This behavior has **chain reaction** effects among apps with similar SDKs, greatly aggravating the overall device performance.

[**oasisfeng/condom**  
_condom - 一个超轻超薄的Android工具库，阻止三方SDK中常见的有害行为，而不影响应用自身的功能。（例如严重影响用户体验的『链式唤醒』）_github.com](https://github.com/oasisfeng/condom "https://github.com/oasisfeng/condom")[](https://github.com/oasisfeng/condom)

#### 20\. [AppMethodOrder](https://github.com/zjw-swun/AppMethodOrder)

This library allows you to trace all functions calls order. The project is well documented and you can find detailed manuals how to use it. The only constraint is that, it is written in Chinese, but you can always click _Translate to English_ in your browser and enjoy this great project.














[**zjw-swun/AppMethodOrder**  
_AppMethodOrder - 一个能让你了解所有函数调用顺序以及函数耗时的Android库（无需侵入式代码）_github.com](https://github.com/zjw-swun/AppMethodOrder "https://github.com/zjw-swun/AppMethodOrder")[](https://github.com/zjw-swun/AppMethodOrder)

#### 21\. [Android DebugKit](https://github.com/hulab/debugkit)

This is an interesting library. It allows you to create and use special hovering debug tool, to trigger actions defined by you in an application. These actions can be obviously triggered in runtime, so it may be used for instance during feedback writing or testing a phone screen.   
The library uses Builder pattern. It is easy to use and in _README,_ there is one example of the usage.














[**hulab/debugkit**  
_debugkit - Ever hid debug functions in your UI? Here is now a clean way to do it!_github.com](https://github.com/hulab/debugkit "https://github.com/hulab/debugkit")[](https://github.com/hulab/debugkit)

#### 22\. [Aesthetic](https://github.com/afollestad/aesthetic)

This a fresh library and still in beta, but it does a really cool thing — it changes your theme dynamically with Rx support! According to the author, this is

> A fast and easy to use plug-and-play dynamic theme engine. Powered by Rx, for Android apps.

The documentation is really good, comprehensive and definitely worthy to check out.














[**afollestad/aesthetic**  
_aesthetic - [BETA] A fast and easy to use plug-and-play dynamic theme engine. Powered by Rx, for Android apps._github.com](https://github.com/afollestad/aesthetic "https://github.com/afollestad/aesthetic")[](https://github.com/afollestad/aesthetic)

#### 23\. [EasyCalendar](https://github.com/shichaohui/EasyCalendar)

This is an easy custom calendar widget. Main features include:

*   Custom layout for title,
*   custom layout for date,
*   show or hide divider for date,
*   show or hide overflow date,
*   listen to date’s view be clicked.

The documentation is comprehensive and the library is easy to use.














[**shichaohui/EasyCalendar**  
_Quickly customize the calendar UI. You can use EasyCalendar to quickly get the calendar style UI._github.com](https://github.com/shichaohui/EasyCalendar "https://github.com/shichaohui/EasyCalendar")[](https://github.com/shichaohui/EasyCalendar)

#### 24\. [SimpleRatingBar](https://github.com/ome450901/SimpleRatingBar)

This library provides two rating bars:

*   BaseRatingBar — without any animation,
*   ScaleRatingBar — with a progressive and scale animation.

You can see them in a gif below:














[**ome450901/SimpleRatingBar**  
_SimpleRatingBar - A simple RatingBar with scale animation_github.com](https://github.com/ome450901/SimpleRatingBar "https://github.com/ome450901/SimpleRatingBar")[](https://github.com/ome450901/SimpleRatingBar)

#### 25\. [Magellan](https://github.com/wealthfront/magellan)

This library is advertised as the simplest navigation library for Android, but you need to check if it is worthy for you to use it.   
Main features:

*   Navigation is as simple as calling `goTo(screen)` method,
*   you get full control of the backstack,
*   transitions are automatically handled for you.

It has comprehensive [wiki](https://github.com/wealthfront/magellan/wiki) with all explanations needed.














[**wealthfront/magellan**  
_magellan - The simplest navigation library for Android._github.com](https://github.com/wealthfront/magellan "https://github.com/wealthfront/magellan")[](https://github.com/wealthfront/magellan)

#### 26\. [ViewPagerAnimator](https://github.com/StylingAndroid/ViewPagerAnimator)

> _ViewPagerAnimator_ is a new lightweight, yet powerful _ViewPager_ animation library for Android. it is designed to animate arbitrary values as the user navigates between pages within a _ViewPager_, and will precisely follow the motion of h[is|er] finger. Although the library itself may be of use to some, the main purpose of publishing this library is to demonstrate some wonderful API subtleties which really come to the fore when using Java 8 extensions which are coming our way soon. Sample projects for both Java 7 and Java 8 are provided.

It is written by [Mark Allison](https://medium.com/@MarkIAllison) and you can get more info on his [Styling Android blog](https://blog.stylingandroid.com/viewpageranimator-the-basics/).














[**StylingAndroid/ViewPagerAnimator**  
_ViewPagerAnimator - A lightweight, yet powerful ViewPager animation library for Android_github.com](https://github.com/StylingAndroid/ViewPagerAnimator "https://github.com/StylingAndroid/ViewPagerAnimator")[](https://github.com/StylingAndroid/ViewPagerAnimator)

#### [27\. BlockCanaryEx](https://github.com/seiginonakama/BlockCanaryEx)

This is a library, which facilitates finding heavy methods in your code when your app blocked. It is based on [BlockCanary](https://github.com/markzhai/AndroidPerformanceMonitor).














[**seiginonakama/BlockCanaryEx**  
_BlockCanaryEx — make performance bottleneck detection easily when app blocked_github.com](https://github.com/seiginonakama/BlockCanaryEx "https://github.com/seiginonakama/BlockCanaryEx")[](https://github.com/seiginonakama/BlockCanaryEx)

#### 28\. [PaletteImageView](https://github.com/DingMouRen/PaletteImageView)

This is quite cool library. It adds a shadows to your images, but the color of shadow is in a dominant image color.














Documentation is quite poor but I think the code is self-explanatory.

[**DingMouRen/PaletteImageView**  
_PaletteImageView - 为图片添加阴影，阴影颜色来源于图片的主色_github.com](https://github.com/DingMouRen/PaletteImageView "https://github.com/DingMouRen/PaletteImageView")[](https://github.com/DingMouRen/PaletteImageView)

#### 29\. [RecyclerRefreshLayout](https://github.com/dinuscxj/ShootRefreshView)

This is a refresh animation that opens a camera shutter. In my opinion it is really worthy to check, especially in _README_ there is a mathematical analysis, how to achieve this effect!














[**dinuscxj/ShootRefreshView**  
_ShootRefreshView - It's an refresh animation that opens the shutter_github.com](https://github.com/dinuscxj/ShootRefreshView "https://github.com/dinuscxj/ShootRefreshView")[](https://github.com/dinuscxj/ShootRefreshView)

#### 30\. [SlimAdapter](https://github.com/MEiDIK/SlimAdapter)

This is an approach to write an Adapter without `ViewHolder`. Key features include:

*   No `ViewHolders`,
*   no reflection,
*   fluent & simple API,
*   multi-typeable adapter,
*   Kotlin support,
*   Simple `DiffUtil` support.














[**MEiDIK/SlimAdapter**  
_SlimAdapter - A slim & clean & typeable Adapter without# VIEWHOLDER_github.com](https://github.com/MEiDIK/SlimAdapter "https://github.com/MEiDIK/SlimAdapter")[](https://github.com/MEiDIK/SlimAdapter)











* * *







That’s it. I hope you enjoyed the article! If I didn’t mention any other great libraries released in this Spring, please let me know in the comments below. Let’s keep that list bigger together!











* * *







If you like my article, please don’t forget to click ❤ to recommend it to others.

Also, to be notified about my new articles and stories, follow me on [Medium](https://medium.com/@mmbialas) and [Twitter](https://twitter.com/mmbialas). You can find me on [LinkedIn](https://www.linkedin.com/in/mmbialas) as well. Cheers!








