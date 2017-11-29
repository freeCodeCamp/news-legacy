---
author: Write Software
authorTwitter: https://twitter.com/writesoftware
authorFacebook: none
title: "How to debug Progressive Web Apps using Browser Developer Tools"
subTitle: "This tutorial explains what tools the Chrome and Firefox Dev Tools display that help you debug a Progressive Web App...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*U3wBg7ofxcz0JPLMjjMd7A.png
url: https://medium.freecodecamp.org/how-to-debug-progressive-web-apps-using-browser-developer-tools-bad1cd3db784
id: how-to-debug-progressive-web-apps-using-browser-developer-tools-bad1cd3db784
date: 2017-10-22T09:48:11.219Z
tags: [
  "Web Development",
  "Programming",
  "Tech",
  "Startup",
  "Technology"
]
---
# How to debug Progressive Web Apps using Browser Developer Tools







![](https://cdn-images-1.medium.com/max/2000/1*U3wBg7ofxcz0JPLMjjMd7A.png)







This tutorial explains what tools the Chrome and Firefox Dev Tools display that help you debug a Progressive Web App.

### What is a Progressive Web App?

First things first. A [Progressive Web App](https://www.writesoftware.org/course/progressive-web-apps) (PWA) is an app that can provide **extra features** based on the device support, such as:

*   The ability to work offline
*   Push notifications
*   An almost native app look and speed
*   Local caching of resources

But it still works fine as a normal website on devices that do not support the latest tech.

### A brief Chrome Developer Tools overview

Let’s start with Chrome. Once you [open the DevTools](https://developer.chrome.com/devtools#access), you see several panels. You might be familiar with many of those panels, like Console, Elements or Network. You use these daily when building web sites or web applications.

The **Application** panel is recent, but contains some familiar tools. In summer 2016, the Resources tab was renamed “Application.” This grouped all the features together that usually distinguish web applications from web pages. We’ll examine it in detail soon.







![](https://cdn-images-1.medium.com/max/2000/1*tr0ZQyEqO7fG28BvQpCr_w.png)







### A real world example

This tutorial walks through an exploration of the Progressive Web App available at [https://events.google.com/io2016/](https://events.google.com/io2016/). You can open Chrome and do the exact same steps detailed here, without having to setup anything locally.

### Simulate a device

Let’s first enable the Chrome DevTools **Device Mode**. This gives you the option to emulate a device in your browser. We choose an Android device, because currently PWAs only show their full potential on Android. [Safari beginning work on supporting Service Workers](https://webkit.org/status/#?search=service) seems a step in the right direction for iOS and Safari Desktop support.







![](https://cdn-images-1.medium.com/max/2000/1*o5eJrDzzlJR-7Z_CU-XUtw.png)







### The Application panel in details

The Application Panel groups many elements which are key to Progressive Web Apps.

#### Manifest

The manifest unlocks the ability to offer users the **Add to home screen** option. It provides a series of details about how the app should behave once installed on the device. If there’s anything wrong with how you defined the manifest, it will report the issue.







![](https://cdn-images-1.medium.com/max/2000/1*6JLM-uAPeNxCsYPz_VQ8SA.png)







There you see the name of the App, a short name for the home screen, icons preview, and some details about the presentation:

*   **Start URL**: the URL that the device will load when the user launches the web app from the home screen. You can add a campaign identifier to segment the PWA accesses in the analytics.
*   **Theme color**: indicates a theme for your site. Chrome uses it to color some browser UI elements, such as the address bar. This can be customized per-page using the meta tag `<meta name="theme-color">`, but specifying it in the manifest provides a site-wide theme color when the app is launched from the home screen.



![](https://cdn-images-1.medium.com/max/1600/1*I0PigcAPJCH5Kx0nXKL8rQ.png)

Example usage of the theme color option in the manifest to change the browser UI colors



*   **Background color**: specifying the background color of your web app in the manifest allows the browser to show this color in the loading screen before the CSS is even available. This produces a nicer experience for the user. As soon as the CSS is available, this value is overwritten by the actual web app styling.
*   **Orientation**: specifies the default orientation, and can be any value in `any` , `natural` , `landscape` , `portrait` and other options detailed in the [Screen Orientation API Working Draft](https://www.w3.org/TR/screen-orientation/#orientationlocktype-enum).
*   **Display**: defines how the app is presented. Valid values are `fullscreen` which open the app in the entire display size. `standalone` shows the device standard status bar and the system back button. `minimal-ui` provides the user at least the back, forward, and reload buttons. And `browser` shows the normal browser UI which includes the address bar.

At the top of the Manifest tab, clicking the `manifest.json` link brings us to the **Sources panel**, with the full source of the manifest.



![](https://cdn-images-1.medium.com/max/1600/1*Nudt3GUsB7n-_D1AcBNeWQ.png)

The manifest.json file source code



The Manifest allows you to define many other fields. I suggest looking at the [Web App Manifest Working Draft](https://www.w3.org/TR/appmanifest) directly to know more.

The last thing on this screen, which is quite important, is the **Add to home screen** link. On the Chrome Desktop, it triggers the browser to add the app to the shelf. On mobile, it prompts to install the app (add the icon to the home screen):



![](https://cdn-images-1.medium.com/max/1600/1*2lgMsmiX78Nf-cc8a2FczA.png)



#### Service Workers

Next up in the list there’s the Service Workers tab. [Service Workers](https://www.writesoftware.org/topic/service-workers) are the technology that enables a PWA to work offline. They allow you to intercept network requests and to use the Cache API to store resources locally.







![](https://cdn-images-1.medium.com/max/2000/1*stpfg98lmfYblEgCFxvPYQ.png)







From this screen you can **force offline mode** in the tab by enabling the **Offline** checkbox:



![](https://cdn-images-1.medium.com/max/1600/1*GmL64YDSXV5YiSxuuTuBMg.png)

Forced offline mode, reflected in the app



Offline can also be forced in the Device Mode screen, in addition to **network throttling**.

**Update on reload** is very useful when debugging. Service Workers are installedon the device when they are first loaded. They are not updated until the Service Worker code changes, so they are not like regular resources.

Buteven if you update the service worker, it won’t be used by the web page until the old service worker can be removed — that is, until the user closes all the tabs that point to the web app. This checkbox forces the update.

**Bypass for network** allows you to completely turn off the caching enabled by the Service Worker. This prevents the app from using cached resources when you want a direct access from the network. Again, very useful when debugging.

**Show all** is an option that enables quick access to **all** the Service Workers installed on the device.

Each Service Worker is listed with a status indicator which you can stop and restart. By clicking the filename, you can inspect the source and hook into it using the built-in JavaScript debugger:







![](https://cdn-images-1.medium.com/max/2000/1*vL9qGSXS5M42Ts-UkdbQZA.png)







The thing you’ll likely use the most is the Service Worker Lifecycle Events simulation. You can force the following events:

*   **Update** will force an update of the Service Worker
*   **Push** emulates a push event
*   **Sync** emulates a background sync event, which allows the user to perform actions offline and communicate them to the server once online
*   **Unregister** unregisters the Service Worker, so you can start with a clean state

#### Clear storage

The Clear storage tab shows you the total storage size used by your web app, how much storage you have left, and allows you to cherry-pick which storage to clear.







![](https://cdn-images-1.medium.com/max/2000/1*QnEH7WncNlB5Uz4FpjrV6w.png)







#### Storage

The Storage tab contains tools to interact with the usualstorage options like **Local/Session Storage**, **IndexedDB** and **Cookies**. It is not unique to Service Workers, so I won’t get into the details of it here.



![](https://cdn-images-1.medium.com/max/1600/1*9IE4Ph_o1MkiCIlqKBSPjg.png)



#### Cache

Ignoring the Application Cache tab — which is a deprecated tech — the **Cache Storage** tab is key to Service Workers. It shows the content of resources stored using the Cache API, part of the Service Workers spec. It’s not limited to use by Service Workers.

The [Google Chrome Cache Storage Demo](https://googlechrome.github.io/devtools-samples/whatsnew/m62/cache.html) is a good way to see what happens when you add an item to the cache.



![](https://cdn-images-1.medium.com/max/1600/1*MM6Q50CE85MZ58pEV3MImA.png)



At first, the cache is not used at all:



![](https://cdn-images-1.medium.com/max/1600/1*wEolnV17J5FJGZTfFDdK_g.png)



Pressing the **Create WNDT62** cachebutton triggers the creation of the cache:



![](https://cdn-images-1.medium.com/max/1600/1*LdM9h1CCanaXMecxh_aiSA.png)



Then **Create RESOURCE_A** in WNDT62 adds an item into the cache:



![](https://cdn-images-1.medium.com/max/1600/1*G_kfzr0i2MlRlUZOFenbbQ.png)



Pressing **Update RESOURCE_A**increments the body value, which we can inspect using:

<pre name="3217" id="3217" class="graf graf--pre graf-after--p">caches.open('WNDT62').then(function(cache) {  
  return cache.match('RESOURCE_A').then((res) => {  
    res.text().then(body => console.log(body));  
  })  
})</pre>

Every time you press Update RESOURCE_A, the value returned is incremented.

Pressing Delete WNDT62removes the cache, frees the space that was taken by the resources, and restores the initial state of the app.

When loading resources cached by Service Workers using the Cache API, the Network Panel of the DevTools shows it as coming from Service Workers:







![](https://cdn-images-1.medium.com/max/2000/1*rc8j3KskWz8NBPniDvCqAA.png)







### What about Firefox?

Firefox has great support for Progressive Web Apps as well as Service Workers. But its developer tools do not display them as prominently as the Chrome dev tools do. Still, they are there, under the `Tools |> Web Developer |> Service Workers` menu.







![](https://cdn-images-1.medium.com/max/2000/1*-bmDLIP9Ujm3UA1Q0tykhA.png)







From here you can unregister any Service Worker, and open the worker code in the debugger for any kind of worker (Web Workers as well). You can also trigger a Push API `push` event to debug Push events.

You cannot simulate events or force updating or bypassing Service Workers like in Chrome. I hope this will be possible in Firefox soon for an easier testing experience.

Like in Chrome, when a resource is cached by Service Workers in the Network panel of the Developer Tools using the [Cache API](https://www.writesoftware.org/topic/cache-api), it lists `service worker` under the Transferred column:







![](https://cdn-images-1.medium.com/max/2000/1*C99J14t3O-pN3lYsXlBVDw.png)







### Wrapping up

Progressive Web Apps are one of the turning points for making the Web better on Mobile and providing users with a good experience outside native apps.

Browsers, especially Chrome, provide good tooling around them.

Google also provides [Lighthouse](https://developers.google.com/web/tools/lighthouse/) as part of its browser tooling, which can be installed separately in the Chrome DevTools. It provides automatic checks to ensure that your web app is optimally built, and includes support for Service Workers. An incredibly useful tool, don’t miss it.

If you’ve enjoyed this article, please give me some claps so more people see it. Thanks!











* * *







There’s lots to learn about this topic and the new browser APIs. We published a [**free ebook** about front-end development, modern JavaScript, Progressive Web Apps and React on **writesoftware.org**](https://www.writesoftware.org/ebook) . Don’t miss it!








