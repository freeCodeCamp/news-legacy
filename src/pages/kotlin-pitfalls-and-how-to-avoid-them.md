---
author: Adam Arold
authorTwitter: https://twitter.com/addamsson
authorFacebook: https://facebook.com/859159754113614
title: "Kotlin pitfalls and how to avoid them"
subTitle: "Kotlin is all the rage lately. And while I do agree that the language is well thought out, it does have — as with everything else — its f..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*TazxK-3XFZ_SbDXsFh3rew.jpeg
url: https://medium.freecodecamp.org/kotlin-pitfalls-and-how-to-avoid-them-7b0d3a2109ad
id: kotlin-pitfalls-and-how-to-avoid-them-7b0d3a2109ad
date: 2017-10-08T16:59:55.206Z
tags: [
  "Kotlin",
  "Java",
  "Programming",
  "Android",
  "Mobile App Development"
]
---
# Kotlin pitfalls and how to avoid them







![](https://cdn-images-1.medium.com/max/2000/1*TazxK-3XFZ_SbDXsFh3rew.jpeg)







Kotlin is all the rage lately. And while I do agree that the language is well thought out, it does have — as with everything else — its flaws.

In this article I’ll explain some of the pitfalls I encountered and try to help you avoid them.

### The mystery `null`

In Kotlin you can write your code as if `null` never existed and this can make you forget that `null` is omnipresent but it hides. Let's look at this simple and seemingly innocent class:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ba955da292b39c4df69a3b441dd18243?postId=7b0d3a2109ad" data-media-id="ba955da292b39c4df69a3b441dd18243" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





If you try to instantiate this, you’ll get a `NullPointerException` because `bar` tried to access the `length` of `c` before it was initialized.

Of course the application logic was flawed here, but you still got an `Exception`. The worst part of this is that your IDE won't complain about this.

The takeaway here is that Kotlin _will help_ you in a lot of cases (nearly all) to avoid `null`, but you can't forget about it and from time to time you'll encounter things like this.

### Handling `null`s from the JDK

Kotlin’s standard library handles `null`s fine. But if you use classes from the JDK, you will have to handle possible `null` pointers from library functions by hand.

Most of the time the Kotlin classes are enough, but sometimes you have to use something like the `ConcurrentHashMap`:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/296adfcba29285376f264e09cf6dfde9?postId=7b0d3a2109ad" data-media-id="296adfcba29285376f264e09cf6dfde9" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





In this case, you have to use the `!!` operator. But in other cases the `null` safety operator (`?`) can also work. Nevertheless, if you use Java libraries extensively you'll have to litter your code with `!!`s and `?`s or write adapters for Java classes. This is something you can't really avoid.

There’s another more hideous problem you might bump into. When using methods on JDK classes, they can return `null` and don’t have syntactic sugar like the `Map` access above.

Consider the following example:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/f79e42038e5c9a64842fd496821675be?postId=7b0d3a2109ad" data-media-id="f79e42038e5c9a64842fd496821675be" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





In this case, you use `peek` which in fact can return `null`. But the Kotlin compiler won't complain so you can get a `NullPointerException` if your `Queue` was empty.

The problem here is that we used `Queue` which is a JDK interface and if you look at the implementation of `peek`:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/8cc8358234ba81c16a4cb74bd0e12e90?postId=7b0d3a2109ad" data-media-id="8cc8358234ba81c16a4cb74bd0e12e90" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





It says that `peek` will return `E` which will lead Kotlin to believe that `E` is not nullable. This might be worked around in a future version of Kotlin, but right now it _is important to keep this in mind_ in your projects and use interfaces like this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/83b5c7f156c181bdc7a332c1fcd00e9d?postId=7b0d3a2109ad" data-media-id="83b5c7f156c181bdc7a332c1fcd00e9d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





### The inner `it`

When a lambda has a single parameter you can omit it from your code and can use `it` instead:

> _“it: implicit name of a single parameter One other helpful convention is that if a function literal has only one parameter, its declaration may be omitted (along with the ->), and its name will be it.” — Kotlin docs_

The problem with this is when you have nested functions like in this example:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/bcca3da277bf934e3cbedc98e73d6d8a?postId=7b0d3a2109ad" data-media-id="bcca3da277bf934e3cbedc98e73d6d8a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





It only takes a few `it`s to lose track which is which. The solution to this problem is to name the parameters explicitly:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/5e71232d9f5923acbdae21275b521c83?postId=7b0d3a2109ad" data-media-id="5e71232d9f5923acbdae21275b521c83" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Much better!

### The insidious `copy`

Take a look at this `data class`:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/102d74d95a5be86e68a3e860fd777f2c?postId=7b0d3a2109ad" data-media-id="102d74d95a5be86e68a3e860fd777f2c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Data classes give you a bunch of functions and you can also make a `copy` of them. Guess what this will print out:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/95299af57e4c3d2992f10e196e8f20fe?postId=7b0d3a2109ad" data-media-id="95299af57e4c3d2992f10e196e8f20fe" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





This will print `foobar, wombar, oops`. The problem is that while the name indicates that `copy` will make an _actual copy_ in fact it will only copy the references in your object. This can be insidious if you forget to write an unit test and you pass your `data class`es around as if they were immutable [value object](https://martinfowler.com/bliki/ValueObject.html)s.

The solution to this problem is to pay attention to your `data class`es and if they should be value objects make them one:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/3eb899e72b483c6cd16dc7a5636f65f7?postId=7b0d3a2109ad" data-media-id="3eb899e72b483c6cd16dc7a5636f65f7" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





> _There is an other problem with_ `_data class_`_es: you can't tell Kotlin which fields you want to put in your_ `_equals_` _/_ `_hashCode_`_, you can only_ `_override_` _both and write them by hand. Keep this in mind._

### Internal leakage

Take a look at this example:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9cd193f97540373e29321a89e1485c1e?postId=7b0d3a2109ad" data-media-id="9cd193f97540373e29321a89e1485c1e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





If you use classes like this from other Kotlin projects the `internal` keyword will be respected. If you look at this from a Java project however `hiddenOperation` will be `public`! To avoid this I'd suggest using `interface`s to hide implementation details:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/286c81c2e496661bbdca9318c11c2238?postId=7b0d3a2109ad" data-media-id="286c81c2e496661bbdca9318c11c2238" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





### Non-generic global extensions

The utility of extension functions is unquestionably high, but with great power comes great responsibility. You can — for example — write extension functions to JDK classes which will be visible for the whole project. This can be problematic when they are non-generic and represent operations which only make sense in a local context:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b16282870cc3e64c32d9051d93849534?postId=7b0d3a2109ad" data-media-id="b16282870cc3e64c32d9051d93849534" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Now everybody on your project will scratch their heads when they bump into this. So I think it is good if you think twice before you write extension functions but they can be really powerful. here are some examples which might be useful:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/21214846078f66ba2f626f1f7d689d30?postId=7b0d3a2109ad" data-media-id="21214846078f66ba2f626f1f7d689d30" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





### Unit returning lambdas vs Java SAM conversion

When you have functions which accept lambdas you can omit the `return` keyword if the lambda's return type is `Unit`:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/423293c5657be65f4a8176fc990f52d5?postId=7b0d3a2109ad" data-media-id="423293c5657be65f4a8176fc990f52d5" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





This is fine but if you call this from Java you’ll face the awkward problem of needing to return `Unit`:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/e641464ca616a43ff98c09bfde9a682a?postId=7b0d3a2109ad" data-media-id="e641464ca616a43ff98c09bfde9a682a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





This is very clunky from the Java side. If you try to make this work from Java you can define an `interface`:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/5635d6b35b28099ad1e5bcdb546ce6ae?postId=7b0d3a2109ad" data-media-id="5635d6b35b28099ad1e5bcdb546ce6ae" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





then you can use Java’s SAM conversion to make this very simple:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/5f00a44c7faa2385f0f6b5f89197cda1?postId=7b0d3a2109ad" data-media-id="5f00a44c7faa2385f0f6b5f89197cda1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





but then from the Kotlin side it becomes a mess:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9020a9f4591ce68cfeeb40b2a3bbfb0e?postId=7b0d3a2109ad" data-media-id="9020a9f4591ce68cfeeb40b2a3bbfb0e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





The problem is that Kotlin does not support SAM conversion for Kotlin classes and it only works with Java classes. My suggestion is that for simple cases just use Java’s built in SAM interfaces like `Consumer`:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/6d147740d8df6e4721fc8f48973afcf5?postId=7b0d3a2109ad" data-media-id="6d147740d8df6e4721fc8f48973afcf5" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





### Java interop with unmodifiable Collections

Kotlin gives you immutable variants of the JDK’s collection classes:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/8edf2259d78a2afc8123c53f00608ce1?postId=7b0d3a2109ad" data-media-id="8edf2259d78a2afc8123c53f00608ce1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





This is a very nice addition but if you look at this from the Java side you’ll see the JDK’s `Set` api:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/12f09e666adbbffc75a68ac43822da5b?postId=7b0d3a2109ad" data-media-id="12f09e666adbbffc75a68ac43822da5b" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





If you try to modify this `Set` the same will happen as if you have used Java's `Collections.unmodifiableSet()` method. I don't know whether this can be (or should be) worked around but this is something you can keep in mind when working with Kotlin's immutable versions of Java collections.

### No overloads in interfaces

This is only an issue from an interop perspective, but Kotlin does not support the `@JvmOverloads` annotation in an `interface`and you can't use it on `override`s either:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/1c8f31deff9e9cdc96e6421f2e3ebb8c?postId=7b0d3a2109ad" data-media-id="1c8f31deff9e9cdc96e6421f2e3ebb8c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Currently the only thing you can do to have overloads is to define them by hand:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/62387b288f4619029c002f764f49ab6c?postId=7b0d3a2109ad" data-media-id="62387b288f4619029c002f764f49ab6c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Keep it in mind though that you can suggest improvements to Kotlin itself using [KEEP](https://github.com/Kotlin/KEEP) (Kotlin Evolution and Enhancement Process). KEEP is something like JEP in Java, but of course KEEP has much less red tape compared to JEP.

### Conclusion

Kotlin is a very popular language right now and I do agree that it is a _Turbo_ Java, but you should take any hype with a grain of salt. As we have seen above Kotlin has its own pitfalls which you should be aware of if you plan to use it.

All in all I think that the problems mentioned above can either be worked around easily or not critical and they don’t limit the usability of the language itself.











* * *







Thanks for reading! You can read more of my articles on my blog on [my blog](http://the-cogitator.com/).








