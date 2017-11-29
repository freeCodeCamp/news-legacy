---
author: Teo Yu Siang
authorTwitter: none
authorFacebook: https://facebook.com/100002462870902
title: "Material Design and the Mystery Meat Navigation Problem"
subTitle: "In March 2016, Google updated Material Design to add bottom navigation bars to its UI library. This new bar is positioned at the bottom o..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*zWh3_7qHGS1sWYzzEnhaXw.png
url: https://medium.freecodecamp.org/material-design-and-the-mystery-meat-navigation-problem-65425fb5b52e
id: material-design-and-the-mystery-meat-navigation-problem-65425fb5b52e
date: 2017-01-27T04:20:09.020Z
tags: [
	"Design",
	"UX",
	"Material Design",
	"UX Design",
	"Mobile"
]
---
# Material Design and the Mystery Meat Navigation Problem











![](https://cdn-images-1.medium.com/max/2000/1*zWh3_7qHGS1sWYzzEnhaXw.png)












In March 2016, Google [updated](http://www.androidauthority.com/bottom-navigation-material-design-guidelines-680207/) Material Design to add bottom navigation bars to its UI library. This new bar is positioned at the bottom of an app, and contains 3 to 5 icons that allow users to navigate between top-level views in an app.

Sound familiar? That’s because bottom navigation bars have been a part of [iOS’s UI library](https://developer.apple.com/ios/human-interface-guidelines/ui-bars/tab-bars/) for years (they’re called tab bars in iOS).



![](https://cdn-images-1.medium.com/max/1600/1*5gS98wUNmOdz-KJLSe3HTw.jpeg)

Left: Material Design’s bottom navigation bar | Right: iOS’s tab bar



Bottom navigation bars are [a better alternative](http://www.lukew.com/ff/entry.asp?1945) to the hamburger menu, so their addition into Material Design should be good news. But Google’s version of bottom navigation bars has a serious problem: **mystery meat navigation**.

Whether you’re an Android user, designer, or developer, this should trouble you.

### What’s mystery meat navigation, and why’s it so bad?

Mystery meat navigation is a term coined in 1998 by Vincent Flanders of the famous website [Web Pages That Suck](http://www.webpagesthatsuck.com/). It refers to buttons or links that don’t explain to you what they do. Instead, you have to click on them to find out.

(The term “mystery meat” originates from the meat served in American public school cafeterias that were so processed that the type of animal they came from is no longer discernible.)



![](https://cdn-images-1.medium.com/max/1600/1*adqZ7X-Kw4K1oYXuaWQk7Q.png)

An example of mystery meat navigation | [Source](http://gigi.nullneuron.net/gigilabs/on-mystery-meat-navigation-and-unusability/)



**Mystery meat navigation is the hallmark of designs that prioritize form over function.** It’s bad UX design, because it emphasizes aesthetics at the cost of user experience. It adds cognitive load to navigational tasks, since users have to guess what the button does. And if your users need to guess, you’re doing it wrong.

You wouldn’t want to eat mystery meat—similarly, users wouldn’t want to click on mystery buttons.

### Strike 1: Android Lollipop’s Navigation Bar

Material Design’s first major mystery meat navigation problem happened in 2014 with Android Lollipop.

Android Lollipop was introduced in the same conference that debuted Material Design, and sports a redesigned UI to match Google’s new design language.



![](https://cdn-images-1.medium.com/max/1600/1*2DkRmybmtHnZo7v_jj9u5Q.png)

Navigation bar in earlier versions of Android



One of the UI elements that got redesigned was the navigation bar, the persistent bar at the bottom of Android OS that provides navigation control for phones without hardware buttons for Back, Home and Menu.

In Android Lollipop, the navigation bar was redesigned to this:



![](https://cdn-images-1.medium.com/max/1600/1*H05A1-UhQKA9g9QiRP0ZbQ.png)

Navigation bar, Android Lollipop and up



See the problem?

While the previous design is less aesthetically appealing, it’s more or less straightforward. The Back and Home icons can be understood without the need for text labels. The 3rd icon is a bit of a mystery meat, but on the whole, the UX of the old navigation bar wasn’t too bad.

The new bar, on the other hand, is _extremely_ pretty. The equilateral triangle, circle, and square are symbols of geometric perfection. But it’s also _extremely_ user-unfriendly. It’s abstract—and navigation controls should never be abstract. It’s full-blown mystery meat navigation.

The triangle icon might resemble a “Back” arrow, but what does a circle and a square mean in relation to navigation control?












Making sense of the navigation bar icons



### Strike 2: Floating Action Buttons

Floating action buttons are special buttons that appear above other UI elements in an app. Ideally, they’re used to promote the primary action of the app.












Specs for the floating action button | [Source](https://material.io/guidelines/components/buttons-floating-action-button.html#buttons-floating-action-button-floating-action-button)



Floating action buttons also suffer from the mystery meat navigation problem. By design, the floating action button is a circle containing an icon. It’s a pure-icon button, with no room for text labels.

The truth is that [**icons are incredibly hard to understand**](http://uxmyths.com/post/715009009/myth-icons-enhance-usability) because they’re so open to interpretation. Our culture and past experiences inform how we interpret icons. Unfortunately, designers (especially, it seems, Material designers) have a hard time facing this truth.

Need proof that icon-only buttons are a bad idea? Let’s play a guessing game.

Below is a list of what—according to Material Design’s [guidelines](https://material.io/guidelines/components/buttons-floating-action-button.html)—are acceptable icons for floating action buttons. Can you guess what each button does?












Mystery button 1



Ok, that’s a simple one to warm you up. It represents “Directions”.












Mystery button 2



What about this? If you’re an iOS or Mac user, you might say “Safari.” It actually represents “Explore.”












Mystery button 3



Things are getting fun (or frustrating) now! Could this be “Open in contacts”? “Help, there’s someone following me”? Perhaps this is a button for your “Phone a friend” lifeline.












Mystery button 4



Hang on, _this_ is the button for “Open in contacts.” Right? Or is this “Gossip about a friend” since the person is inside a speech bubble?

Ready for the final round? Here’s the worst (and most used) icon:












Mystery button 5



You might think the “+” button is rather simple to understand—it’s obviously a button for the “Add” action. But add _what_?

_Add what:_ that’s the problem right there. If a user needs to ask that question, your button is officially mystery meat. Sadly, developers and designers of Material Design apps seem to be in love with the “+” floating action button.

Precisely because the “+” button _seems_ so easy to understand, it ends up being the most abused icon for floating action buttons. Consider how Google’s own Inbox app displays _additional_ buttons when you tap the “+” floating button, which is not what a user would expect:





























The “+” button opens up a menu of… more buttons?







What makes things worse is how the same icons have different meanings in different apps. Google used the pencil icon to represent “Compose” in Inbox and Gmail, but used it to represent “Edit” in its photo app Snapseed.










































Same icon, different meanings: “Compose” in the Gmail and Inbox apps, “Edit” in the Snapseed app







The floating action button was intended to be a great way for users to access a primary action. Except it isn’t, because icon-only buttons tend to be mystery meat.

More on floating action buttons:

[**Material Design:  
Why the Floating Action Button is bad UX design**  
_Material Design is a design language introduced by Google a year ago, and represents the company’s bold attempt at…_medium.com](https://medium.com/tech-in-asia/material-design-why-the-floating-action-button-is-bad-ux-design-acd5b32c5ef "https://medium.com/tech-in-asia/material-design-why-the-floating-action-button-is-bad-ux-design-acd5b32c5ef")[](https://medium.com/tech-in-asia/material-design-why-the-floating-action-button-is-bad-ux-design-acd5b32c5ef)

### Strike 3: The New Bottom Navigation Bar

This brings us to the bottom navigation bar, introduced in March 2016.

For bottom navigation bars with 3 views, Google’s guidelines specify that both icons and text labels must be displayed. So far, so good: no mystery meat here.












Bottom navigation bar with 3 views: so far, so good



But for bottom navigation bars with 4 or 5 views, Google specifies that inactive views be displayed as _icons only_.












Bottom navigation bar with 4 views: mystery meat



Remember how hard it was to guess what the floating action button icons mean? Now try guessing a row of icons used to navigate an app.

This is just bad UX design. In fact, the Nielsen Norman Group [argues](https://www.nngroup.com/articles/icon-usability/) that icons _need_ a text label, especially navigation icons (emphasis theirs):

> “To help overcome the ambiguity that almost all icons face, a **text label must be present alongside an icon** to clarify its meaning in that particular context.… For navigation icons, labels are particularly critical.”

That Material Design’s newest UI component condones mystery meat navigation is not only frustrating, but also weird. Why should text labels be shown when there are 3 views, but be hidden when there are 4–5 views?

An obvious answer would be space constraints.

Except tab bars in iOS manage to contain 5 icons, and still display the icon and text label for each of them. So space constraint isn’t a valid reason.










































iOS tab bar in the App Store, Clock and Music apps: 5 icons, all with text labels







Google either decided that icons can sufficiently represent navigational actions (which is bad), or they decided that aesthetic neatness is more important than usability (which is worse). Either way, their decision worsened the UX of millions of Android users.

### Material Design and Form over Function

When Material Design was launched in 2014, it was to much fanfare. It’s bold, and rides on (and one-ups) the flat design trend. The pairing of vibrant colours and animations make it pretty to look at.












“Make it pretty!” — Material Design designer | [Source](https://www.youtube.com/watch?v=Q8TXgCzxEnw)



But perhaps it’s a little _too_ pretty. Perhaps while working on Material Design, the designers got a little carried away.

Time and again, Google’s guidelines for important buttons and bars seem to prioritise form over function. Geometric prettiness was chosen over recognisability in Android’s navigation bar. Aesthetic simplicity was championed in floating action buttons, turning them into riddles in the process. Finally, visual neatness was deemed more important than meaningful labels in bottom navigation bars.

That’s not to say that mystery meat navigation is a Google-only problem. Sure, you can find mystery meat in iOS apps too. But they don’t usually appear in critical navigational controls and promoted buttons. They also aren’t spelt out specifically in design guidelines to be mystery meat.












Speed graph showing the correct (blue) acceleration for animations



If Google designers could devote time and effort into creating speed graphs for animations, perhaps they could spend a little time to make sure their designs aren’t mystery meat.

After all, an animated mystery button is still less delightful than a static but clearly labelled button.








