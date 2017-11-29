---
author: Kevin Kononenko
authorTwitter: https://twitter.com/devmanual
authorFacebook: https://facebook.com/10203738544564981
title: "How JavaScript variable scoping is just like multiple levels of government"
subTitle: "Have you ever smashed your keyboard in frustration after getting an undefined value over and over again while trying to find the value of..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*oTySOUhld2PJyrp83Pblog.jpeg
url: https://medium.freecodecamp.org/how-javascript-variable-scoping-is-just-like-multiple-levels-of-government-d7ddabc49bf1
id: how-javascript-variable-scoping-is-just-like-multiple-levels-of-government-d7ddabc49bf1
date: 2017-11-22T11:51:42.492Z
tags: [
	"JavaScript",
	"Tech",
	"Programming",
	"Web Development",
	"Technology"
]
---
# How JavaScript variable scoping is just like multiple levels of government

Have you ever smashed your keyboard in frustration after getting an **undefined**value over and over again while trying to find the value of a variable?

Or, have you named two variables the same thing after hours and hours of coding, only to discover your mistake later?

Both of these issues can be related to the scope of your variable. **Scope** defines where your variables will be accessible throughout your script.

When you correctly scope your variables, you will find that your code is easier to read and debug for any viewer.

#### The problem

Before the ES6 update to JavaScript, you could only declare variables with**var**_._ Since **var** does not limit the scope of the variable, you would be forced to guess whether the variable had a global scope or local scope.

Now, JavaScript allows you to declare variables with **const** and **let**_._ They may add some complexity, but they make your code much easier to understand.

Unfortunately, most tutorials describe these scopes as either boxes within boxes or one-way glass. I don’t know about you, but I don’t spend much time packing boxes within boxes or looking through layers of one-way glass!

I think I have a better way. Scope can be explained by looking at the ways that international laws, national laws, and local laws work together. So, you only need to understand that different levels of government exist to learn about the different levels of scope. Here’s a quick preview, and then we’ll get into it!












Drinking laws are annoying but hopefully not too controversial



I am going to try and avoid any laws that relate to current political issues.

### Global scope (United Nations)

Variables that are defined at the top-level of your script are globally scoped. They are available to all functions. These are called **global** variables.

These are similar to international laws. Keep in mind that it is pretty tough to pass laws that all 193 members of the United Nations will agree to. So, these laws should only cover the most fundamental human rights. The United Nations does not get involved in drug policy or religious laws that might concern individual countries. Two examples might be:

“Slavery is prohibited.”

“Chemical weapons are prohibited.”

This means that these laws will be valid for any country that is part of the United Nations, as well as for any state or province within those countries.

Here is the pre-ES6 version of these laws.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F8312841%3Fs%3D400%26v%3D4&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/60ca44f9321a47bc08ca08ff1ff5d7e3?postId=d7ddabc49bf1" data-media-id="60ca44f9321a47bc08ca08ff1ff5d7e3" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F8312841%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








In ES6, we can now declare variables with **const** and **let**. **Const** will make the value of the variable immutable — it will not be able to be changed.**Let**will not. I think these two fundamental human rights should definitely be unchangeable! So it should be:





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F8312841%3Fs%3D400%26v%3D4&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/1ea35e7af65d2de2b5cb25ab3193b796?postId=d7ddabc49bf1" data-media-id="1ea35e7af65d2de2b5cb25ab3193b796" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F8312841%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








You don’t want to create too many global variables. ‘Polluting’ the global scope means that you define too many variables that are globally accessible. From a programming perspective, you make it difficult to debug and maintain code when you use global variables.

In this analogy, there are no international laws on the age that individuals are allowed to drink alcohol. Each individual country must define these rules. The UN would never be able to exist if it tried to regulate drinking ages!














### Function scope (United States)

Since the laws above are globally defined, they are accessible anywhere in our script. And, since they are defined with **const**_,_ they are unchangeable.

So what about laws that only apply in the United States? One example is the drinking age, the enemy of college students everywhere. You must be 21 years old to buy alcohol in the United States.

Should this age be immutable or unchangeable? No. In fact, there was [no universal law on drinking age in the US until 1984](https://en.wikipedia.org/wiki/Legal_drinking_age). It could change again in the future.

We will use **let** to define this one.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F8312841%3Fs%3D400%26v%3D4&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/2efd593343f198fe108a6b05f189dc9d?postId=d7ddabc49bf1" data-media-id="2efd593343f198fe108a6b05f189dc9d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F8312841%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








If we try to access the value of **drinkingAge** outside of the **unitedStates** function, we will get an error since it only exists within the **function scope**.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F8312841%3Fs%3D400%26v%3D4&key=4fce0568f2ce49e8b54624ef71a8a5bd&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/8a0e446de18e31883e37a15d9c81df55?postId=d7ddabc49bf1" data-media-id="8a0e446de18e31883e37a15d9c81df55" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F8312841%3Fs%3D400%26v%3D4&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








Just remember — the UN’s laws are still valid in the United States.

The brackets are like the borders of the country, in this case. Laws are only valid within the borders of that country. So, if you wanted to create a **mexico** function, you could define drinkingAge **again** as 18.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F8312841%3Fs%3D400%26v%3D4&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/78162badbf93a2da670bad8c9ca6fe6f?postId=d7ddabc49bf1" data-media-id="78162badbf93a2da670bad8c9ca6fe6f" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F8312841%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








Here is that code in diagram form.






















### Block scope (Massachusetts)

I live in Massachusetts, so I decided to pick on my own state for this one. There is one other level of scope: **block scope**. Block scope and function scope are both examples of **local scope,** since they create local limits for the definition of variables.

Block scope means that a variable can be local to a set of brackets {}, like an **if** statement or **for** loop. Much like function scope, the variable is only valid within those brackets.

In Massachusetts, all bars must stop serving at 2AM. I know, I know — if you live in Europe, this probably sounds outrageous. This law actually varies by state. In New York, they can serve until 4AM.

Anyway, in order to make this work in code, we need to defineif statements within the unitedStates function. We will again define the variable with **let**, because these laws can certainly change.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F8312841%3Fs%3D400%26v%3D4&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/5c08945ea4d96802dad1e8f1c2bdff7b?postId=d7ddabc49bf1" data-media-id="5c08945ea4d96802dad1e8f1c2bdff7b" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F8312841%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








The **closingTime** variable is only valid within the **if** block, while drinkingAge is valid anywhere in the unitedStates function.

If we want to define a separate closing time for New York, we can do that as well due to **block scope**.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F8312841%3Fs%3D400%26v%3D4&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/9ecb1b182feb70ad94e2e927070b4f7c?postId=d7ddabc49bf1" data-media-id="9ecb1b182feb70ad94e2e927070b4f7c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F8312841%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








If you wanted to take action based on the closingTime variable, you could now do something within each if block.

Here is a diagram that covers all this.






















### Modifying a variable (passing a new law)

Last part. Let’s say you want to pass a law to change the drinking age in the United States. You need to create a function that will be able to modify the drinkingAge variable. Let’s call it **passDrinkingLaw**.

You will need to create the passDrinkingLaw function within the unitedStates function, because it is only relevant to the US. There are no global drinking laws.

It will also need to access the drinkingAge variable, which defined the original age. Imagine that you wanted to change the drinking age to 18\. Here is how you would do that.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F8312841%3Fs%3D400%26v%3D4&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/94cb8449752d33fc6f469d43e558961a?postId=d7ddabc49bf1" data-media-id="94cb8449752d33fc6f469d43e558961a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F8312841%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








This is why it is important to define the variable within the entire unitedStates scope. You would want the changes to take effect for any future use of drinkingAge. And, if you wanted to create a universal passDrinkingLaw function, it would not work with this structure.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F8312841%3Fs%3D400%26v%3D4&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/d32c8c58965acff8216023bd3d502734?postId=d7ddabc49bf1" data-media-id="d32c8c58965acff8216023bd3d502734" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F8312841%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








drinkingAge is **local** to the unitedStates funtion. Here is a diagram version.






















#### Call To Action

Did you enjoy this? Give it a clap so others can discover it as well. And, if you want to get notified when I release future tutorials that use analogies, sign up here:





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Fe.enpose.co%2F%3Fkey%3DdRXnS9Gplk%26w%3D700%26h%3D425%26url%3Dhttps%253A%252F%252Fupscri.be%252F97999b%252F%253Fenpose&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe data-width="800" data-height="400" width="700" height="350" data-src="https://medium.freecodecamp.org/media/614143bb18105e1285ae4a1df769c191?postId=d7ddabc49bf1" data-media-id="614143bb18105e1285ae4a1df769c191" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fe.enpose.co%2F%3Fkey%3DdRXnS9Gplk%26w%3D700%26h%3D425%26url%3Dhttps%253A%252F%252Fupscri.be%252F97999b%252F%253Fenpose&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>















