---
author: Tyler McGinnis
authorTwitter: https://twitter.com/tylermcginnis
authorFacebook: https://facebook.com/10153707086226430
title: "How to Install the Facebook SDK into a React Native Android or iOS App"
subTitle: "So I made this snarky tweet at 4 a.m. This is my peace offering...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*fl4tucJ-Si-whDlB9ihVCw.jpeg
url: https://medium.freecodecamp.org/installing-the-facebook-sdk-into-a-react-native-android-and-ios-app-69439bd97a99
id: installing-the-facebook-sdk-into-a-react-native-android-and-ios-app-69439bd97a99
date: 2016-08-11T16:28:46.001Z
tags: [
  "React Native",
  "React",
  "JavaScript",
  "Web Development",
  "Mobile"
]
---
# How to Install the Facebook SDK into a React Native Android or iOS App







![](https://cdn-images-1.medium.com/max/2000/1*fl4tucJ-Si-whDlB9ihVCw.jpeg)







So I made this snarky tweet at 4 a.m. This is my peace offering.





<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/56da17a76b6689b9d4562dc345124fcf?postId=69439bd97a99" data-media-id="56da17a76b6689b9d4562dc345124fcf" allowfullscreen="" frameborder="0"></iframe>





If you’re a native Android or iOS developer and are already familiar with their respective ecosystems, this blog post probably won’t do you much good.

But if you’re a JavaScript developer who doesn’t know what an Info.plist or a strings.xml file is — and you’d sooner wait 45 minutes for _npm install_ to finish than open up Xcode — this guide is for you.

Note that this is a just an excerpt from my much more comprehensive [React.js Program](http://reactjsprogram.com)’s [React Native](http://courses.reactjsprogram.com/courses/reactnative) course.

Let’s assume you’re reading this because you’re more concerned with “how” than “why.” So, unlike my typical posts, this one will be heavy on implementation details and light on understanding the abstractions.

I’m also assuming you’re using React Native .29 or above. If you’re using e version older than that, well, you have bigger problems than getting this tutorial to work.

We’re going to use Facebook’s “[react-native-fbsdk](https://github.com/facebook/react-native-fbsdk)” library, which is just a wrapper around the Facebook SDKs for Android and iOS. It will give us access to Facebook login, sharing, graph requests, and app events.

In your terminal run:

<pre name="45c6" id="45c6" class="graf graf--pre graf-after--p">npm install --save react-native-fbsdk</pre>

Next up, we need to do some linking.

Again, in your terminal run:

<pre name="600d" id="600d" class="graf graf--pre graf-after--p">react-native link</pre>

Now let’s register a new app with Facebook.

Header over to [Facebook’s developers site](https://developers.facebook.com/apps) and “Add a New App”.

When you see this screen select iOS…



![](https://cdn-images-1.medium.com/max/1600/1*4FvJS-mWhJJPftIQ32r5eQ.png)

Creating a new Facebook iOS app



…type in the name of your project, then hit the main submit button which at the time of this writing says “Create new Facebook App Id.” Be sure to enter in a contact email address and select a Category.

If you’re lucky, at this point you’ll get a fun little game about matching Tigers or watches. Facebook is just full of fun micro experiences 🙃.

Once at this view, you’re going to do exactly what is says, and download the SDK to your _~/Documents folder_.



![](https://cdn-images-1.medium.com/max/1600/1*FVKb0kaaMcpiIdpQGXQSqg.png)



Coming from the web, this is going to feel super strange. But it’s the only way I could get the SDK tied up properly without having to resort to using Pods.

At this point you should have successfully installed “react-native-fbsdk” and created a new iOS Facebook app. The FacebookSDK should be located in the ~/Documents folder of your computer.

Now for the moment we’ve been training for.

Go to your project and double click on _YourAppName.xcodeproj_ project to open it up in Xcode.

Once you have your project opened in Xcode, right click on your project’s name in the left sidebar and select “_New Group_” and type in “_Frameworks_”.



![](https://cdn-images-1.medium.com/max/1600/1*u_VxnYfkmFwMqfsIRHYzZA.png)



Then open up your _~Documents/FacebookSDK_ folder from earlier and drag _FBSDKCoreKit.Framework_, _FBSDKLoginKit.Framework_, _FBSDKShareKit.Framework_ into the _Frameworks_ group you just created. The end result should look like this,



![](https://cdn-images-1.medium.com/max/1600/1*jjYoKYB9IRARqgieq8IdbQ.png)

Creating Frameworks group in Xcode for React Native



Now, _click on the “Build Settings” tag_ (pictured below) then search for “_Framework Search Paths_”. Once you find it add “_~/Documents/FacebookSDK_”. (To get the little popup box double click on the highlighted line right below the word “Spero” then click the + button to add the text).



![](https://cdn-images-1.medium.com/max/1600/1*B1id2NBIE7oe3tgkzAvbyQ.png)

Add source to Facebook SDK to your Framework Search Paths



Now we need to dive into our Info.plist. For this step we’ll need our Facebook App ID number. To get this, head back over to your Facebook developer dashboard and it will be on the home screen under “App ID”.



![](https://cdn-images-1.medium.com/max/1600/1*UJ5XDtQXNojJSaJhoJvmFQ.png)

Getting your Facebook App ID



Now open up your app in your preferred IDE and then open up the “_Info.plist_” file located in “_ios/YourAppName_”

Now, right below this strange line

<pre name="c1c3" id="c1c3" class="graf graf--pre graf-after--p"><string>????</string></pre>

add this code,

<pre name="81dd" id="81dd" class="graf graf--pre graf-after--p"><key>CFBundleURLTypes</key>  
   
  <dict>  
   <key>CFBundleURLSchemes</key>  
     
    <string>fbYOUR-APP-ID</string>  
   </array>  
  </dict>  
 </array>  
 <key>FacebookAppID</key>  
 <string>YOUR-APP-ID</string>  
 <key>FacebookDisplayName</key>  
 <string>YOUR-FACEBOOK-DISPLAY-NAME</string>  
 <key>LSApplicationQueriesSchemes</key>  
   
  <string>fbapi</string>  
  <string>fb-messenger-api</string>  
  <string>fbauth2</string>  
  <string>fbshareextension</string>  
 </array></pre>

Be sure to swap out “_YOUR-APP-ID_” with your Facebook APP Id and “_YOUR-FACEBOOK-DISPLAY-NAME_” with, well, your Facebook app display name.

Now head back to Xcode and grab your “_Bundle Identifier_” number located in the “_General_” tab.



![](https://cdn-images-1.medium.com/max/1600/1*ZyvGrlmQiDvNmWSUMrGttA.png)

Getting your Bundle Identifier for a React Native app



Once you have that, copy it to your clipboard.

Now head over to your Facebook Developer dashboard again and click on “_Settings_” -> “_Basic_” -> “_+Add Platform_” and select “_iOS_”.



![](https://cdn-images-1.medium.com/max/1600/1*qwrrlHYGuNSBKx4L8E9JNQ.png)



Once you select iOS you’ll see a place to enter in your “_Bundle ID_” you just got from Xcode. Do that and be sure to select “_Save Changes_”.

Now head back to your text editor and open up “_ios/PROJECT-NAME/AppDelegate.m_”

Right above “_@implementation AppDelegate_” you need to import FBSDKCoreKit. Go ahead and add

<pre name="5867" id="5867" class="graf graf--pre graf-after--p">#import <FBSDKCoreKit/FBSDKCoreKit.h></pre>

Now right above the “_@end_” line (and after the didFinishLaunchingWithOptions block) add this code,

<pre name="2650" id="2650" class="graf graf--pre graf-after--p">- (void)applicationDidBecomeActive:(UIApplication *)application {  
  [FBSDKAppEvents activateApp];  
}</pre>

<pre name="aaaf" id="aaaf" class="graf graf--pre graf-after--pre">- (BOOL)application:(UIApplication *)application  
            openURL:(NSURL *)url  
  sourceApplication:(NSString *)sourceApplication  
         annotation:(id)annotation {  
  return [[FBSDKApplicationDelegate sharedInstance] application:application  
                                                         openURL:url  
                                               sourceApplication:sourceApplication  
                                                      annotation:annotation];  
}</pre>

So your final AppDelegate.m file will look something like this (changes in **bold**),

<pre name="9a88" id="9a88" class="graf graf--pre graf-after--p">#import "AppDelegate.h"</pre>

<pre name="5107" id="5107" class="graf graf--pre graf-after--pre">#import "RCTBundleURLProvider.h"  
#import "RCTRootView.h"</pre>

<pre name="7826" id="7826" class="graf graf--pre graf-after--pre">**#import <FBSDKCoreKit/FBSDKCoreKit.h>**</pre>

<pre name="75f4" id="75f4" class="graf graf--pre graf-after--pre">@implementation AppDelegate</pre>

<pre name="2a38" id="2a38" class="graf graf--pre graf-after--pre">- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions  
{  
  NSURL *jsCodeLocation;</pre>

<pre name="c808" id="c808" class="graf graf--pre graf-after--pre">jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];</pre>

<pre name="b057" id="b057" class="graf graf--pre graf-after--pre">RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation  
                                                      moduleName:@"Spero"  
                                               initialProperties:nil  
                                                   launchOptions:launchOptions];  
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];</pre>

<pre name="36e1" id="36e1" class="graf graf--pre graf-after--pre">self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];  
  UIViewController *rootViewController = [UIViewController new];  
  rootViewController.view = rootView;  
  self.window.rootViewController = rootViewController;  
  [self.window makeKeyAndVisible];  
  return YES;  
}</pre>

<pre name="c553" id="c553" class="graf graf--pre graf-after--pre">**- (void)applicationDidBecomeActive:(UIApplication *)application {  
  [FBSDKAppEvents activateApp];  
}**</pre>

<pre name="ebea" id="ebea" class="graf graf--pre graf-after--pre">**- (BOOL)application:(UIApplication *)application  
            openURL:(NSURL *)url  
  sourceApplication:(NSString *)sourceApplication  
         annotation:(id)annotation {  
  return [[FBSDKApplicationDelegate sharedInstance] application:application  
                                                         openURL:url  
                                               sourceApplication:sourceApplication  
                                                      annotation:annotation];  
}**</pre>

<pre name="9245" id="9245" class="graf graf--pre graf-after--pre"> @end</pre>

Good news is that’s all you need to do for iOS. If you’re not building an Android app as well, you’re all set. However, if you are (or if you ever plan on) building an Android app as well, continue on.

**Update: If at this point you’re still getting an error, it may be due to some recent changes in iOS 10 and Xcode 8\. Head over to the “Capabilities” section in Xcode and enable “Keychain Sharing”.



![](https://cdn-images-1.medium.com/max/1600/1*bhEKd5j4nub5ZjIgGiY9Yw.png)



**Now onto Android.

Now in your text editor head over to your “_MainApplication.java_” file located at “_android/app/src/main/java/com/<project name>/_”

After all of the other imports in _MainApplication.java_, add the following imports.

<pre name="94c6" id="94c6" class="graf graf--pre graf-after--p">import com.facebook.CallbackManager;  
import com.facebook.FacebookSdk;  
import com.facebook.reactnative.androidsdk.FBSDKPackage;</pre>

Now inside the MainApplication class, add the following properties,

<pre name="6cf3" id="6cf3" class="graf graf--pre graf-after--p">private static CallbackManager mCallbackManager = CallbackManager.Factory.create();</pre>

<pre name="04d3" id="04d3" class="graf graf--pre graf-after--pre">protected static CallbackManager getCallbackManager() {  
    return mCallbackManager;  
}</pre>



![](https://cdn-images-1.medium.com/max/1600/1*BFSO72Bmtg-Nsji1lvzU1w.png)

After adding the imports and the properties, your MainApplication class should resemble this



Now go ahead and head to the bottom of your MainApplication class and add this Override to the class.

<pre name="94bd" id="94bd" class="graf graf--pre graf-after--p">@Override  
public void onCreate() {  
  super.onCreate();  
  FacebookSdk.sdkInitialize(getApplicationContext());  
}</pre>

Now the last step in this file is you need to include the FBSDKPackage to your Array of React packages. Find the code that looks like this,

<pre name="bfec" id="bfec" class="graf graf--pre graf-after--p">@Override  
protected List<ReactPackage> getPackages() {  
   return Arrays.<ReactPackage>asList(  
    new MainReactPackage()  
   );  
}</pre>

and go ahead and add “_new FBSDKPackage(mCallbackManager)”_ as a new list item on that array.

Once you’re finished, your code should look similar to this (changes are bold)

<pre name="aba4" id="aba4" class="graf graf--pre graf-after--p">package com.spero;</pre>

<pre name="7516" id="7516" class="graf graf--pre graf-after--pre">import android.app.Application;  
import android.util.Log;</pre>

<pre name="1718" id="1718" class="graf graf--pre graf-after--pre">import com.facebook.react.ReactApplication;  
import com.oblador.vectoricons.VectorIconsPackage;  
import com.facebook.reactnative.androidsdk.FBSDKPackage;  
import com.facebook.react.ReactInstanceManager;  
import com.facebook.react.ReactNativeHost;  
import com.facebook.react.ReactPackage;  
import com.facebook.react.shell.MainReactPackage;</pre>

<pre name="2fae" id="2fae" class="graf graf--pre graf-after--pre">import java.util.Arrays;  
import java.util.List;</pre>

<pre name="3144" id="3144" class="graf graf--pre graf-after--pre">**import com.facebook.CallbackManager;  
import com.facebook.FacebookSdk;  
import com.facebook.reactnative.androidsdk.FBSDKPackage;**</pre>

<pre name="95b3" id="95b3" class="graf graf--pre graf-after--pre">public class MainApplication extends Application implements ReactApplication {</pre>

<pre name="73f1" id="73f1" class="graf graf--pre graf-after--pre">**private static CallbackManager mCallbackManager = CallbackManager.Factory.create();**</pre>

<pre name="3f3a" id="3f3a" class="graf graf--pre graf-after--pre">**protected static CallbackManager getCallbackManager() {  
    return mCallbackManager;  
  }**</pre>

<pre name="9b56" id="9b56" class="graf graf--pre graf-after--pre">private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {  
    @Override  
    protected boolean getUseDeveloperSupport() {  
      return BuildConfig.DEBUG;  
    }</pre>

<pre name="6015" id="6015" class="graf graf--pre graf-after--pre">@Override  
    protected List<ReactPackage> getPackages() {  
      return Arrays.<ReactPackage>asList(  
          new MainReactPackage(),  
          **new FBSDKPackage(mCallbackManager)**  
      );  
    }  
  };</pre>

<pre name="a77e" id="a77e" class="graf graf--pre graf-after--pre">@Override  
  public ReactNativeHost getReactNativeHost() {  
      return mReactNativeHost;  
  }</pre>

<pre name="5bee" id="5bee" class="graf graf--pre graf-after--pre">**@Override  
  public void onCreate() {  
    super.onCreate();  
    FacebookSdk.sdkInitialize(getApplicationContext());  
  }**  
}</pre>

Alright we’re really close. Now head over to _MainActivity.java (located at “android/_app/src/main/java/com/<project name>/” and do the following,

First import android.content.Intent;

<pre name="fc53" id="fc53" class="graf graf--pre graf-after--p">import android.content.Intent;</pre>

next, add this Override to your MainActivity class

<pre name="a5be" id="a5be" class="graf graf--pre graf-after--p">@Override  
public void onActivityResult(int requestCode, int resultCode, Intent data) {  
        super.onActivityResult(requestCode, resultCode, data);  
        MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);  
    }</pre>

Your final code will look like this (changes in bold)

<pre name="6644" id="6644" class="graf graf--pre graf-after--p">package com.spero;</pre>

<pre name="cfbc" id="cfbc" class="graf graf--pre graf-after--pre">import com.facebook.react.ReactActivity;</pre>

<pre name="2da8" id="2da8" class="graf graf--pre graf-after--pre">**import android.content.Intent;**</pre>

<pre name="7e9b" id="7e9b" class="graf graf--pre graf-after--pre">public class MainActivity extends ReactActivity {</pre>

<pre name="4c89" id="4c89" class="graf graf--pre graf-after--pre"> **@Override  
    public void onActivityResult(int requestCode, int resultCode, Intent data) {  
        super.onActivityResult(requestCode, resultCode, data);  
        MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);  
    }**</pre>

<pre name="4a72" id="4a72" class="graf graf--pre graf-after--pre">    @Override  
    protected String getMainComponentName() {  
        return "Spero";  
    }  
}</pre>

Take a few deep breaths. We’re just a few changes away from Valhalla.

Head over to “_strings.xml_” located at “_android/app/src/main/res/values/strings.xml”_ and add a new string with your facebook app id.

<pre name="d30e" id="d30e" class="graf graf--pre graf-after--p"><string name="facebook_app_id">YOUR_APP_ID</string></pre>

Your strings.xml file will now look similar to this,

<pre name="c357" id="c357" class="graf graf--pre graf-after--p"><resources>  
    <string name="app_name">NameOfYourApp</string>  
    **<string name="facebook_app_id">YOUR-FACEBOOK-ID</string>**  
</resources></pre>

One. More. File. To. Go.

Head over to _AndroidManifest.xml_ located at “_android/app/src/main_” and add the following code right before **</application>**

<pre name="7636" id="7636" class="graf graf--pre graf-after--p"></pre>

<pre name="996f" id="996f" class="graf graf--pre graf-after--pre"><meta-data android:name="com.facebook.sdk.ApplicationId" android:value="[@string/facebook_app_id](http://twitter.com/string/facebook_app_id "Twitter profile for @string/facebook_app_id")"/></pre>

And with those 48 easy, fool proofs steps, you’re good to go!

To see all these changes in a real project, dive into the changes files above [in this project.](https://github.com/ReactjsProgram/React-Native/tree/progress)

Originally published at [tylermcginnis.com](https://tylermcginnis.com/installing-the-facebook-sdk-into-a-react-native-android-and-ios-app/).











* * *









[![](https://cdn-images-1.medium.com/max/1600/1*8UopbYKdnMsxMwgcn_P0jQ.png)](http://reactjsprogram.com)

If you want to dive deeper into React Native (or any of ^), check out my biggest contribution to the world.













* * *









[![](https://cdn-images-1.medium.com/max/1600/1*cjDzDgxQ-gGppyTzYk-nGg.png)](http://twitter.com/tylermcginnis33)










