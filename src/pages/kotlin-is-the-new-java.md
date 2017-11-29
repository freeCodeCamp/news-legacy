---
author: Adam Arold
authorTwitter: https://twitter.com/addamsson
authorFacebook: https://facebook.com/859159754113614
title: "Kotlin is the new Java"
subTitle: "If you read the docs you can see a bunch of stuff going for it:..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*YK5PLgDKciZ0J66Ilvb9wQ.png
url: https://medium.freecodecamp.org/kotlin-is-the-new-java-16b35c5f54a2
id: kotlin-is-the-new-java-16b35c5f54a2
date: 2017-05-19T00:00:00.000Z
tags: [
  "Kotlin",
  "Java",
  "Startup",
  "Programming",
  "Android"
]
---
# Kotlin is the new Java



![](https://cdn-images-1.medium.com/max/1600/1*YK5PLgDKciZ0J66Ilvb9wQ.png)



> _If you have been a Java developer for a while now you might be wondering what to learn next. There are a bunch of languages out there which worth a look, like_ [_Clojure_](https://clojure.org/)_,_ [_Rust_](https://www.rust-lang.org/en-US/) _or_ [_Haskell_](https://www.haskell.org/)_. But what if you want to learn something with which you can pay the bills but it is not a pain to use? Kotlin is in the sweet spot just where Java used to be and in this article my goal is to explain why._

### So what is Kotlin?

*   A home-grown programming language by [JetBrains](https://www.jetbrains.com/) who are the masterminds behind the acclaimed [IDEA](https://www.jetbrains.com/idea/) IDE and a bunch of other stuff.
*   A simple and flexible alternative to Java
*   Which interoperates well with existing Java code
*   Compiles to Java bytecode
*   Runs on the JVM
*   And also compiles to javascript

If you read the docs you can see a bunch of stuff going for it:

*   It lets you achieve more with less code
*   Solve a lot of problems in Java
*   Helps you keep using the Java ecosystem
*   Lets you write front-end and back-end code in the same language
*   Gives you 100% Java interoperability
*   It does well compared to the alternatives (Clojure, Scala)
*   Adds only a thin layer of complexity over Java

Sounds cool, right? Let’s just not drink the Kool-Aid too soon and see some examples how well it fares compared to Java.

### Value objects vs data classes

What you see here is a POJO with all the boilerplate:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/5e2f697a805718dfd815e52426b1bf1d?postId=16b35c5f54a2" data-media-id="5e2f697a805718dfd815e52426b1bf1d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Creating value objects is really cumbersome even with the usage of libraries like Lombok. (Lombok needs you to install a plugin into your IDE in order for it to work which might not be an option for all IDEs. It can be worked around with tools like Delombok but it is a hack at best. Read more [here](https://projectlombok.org/features/delombok)) At least IDEA (or Eclipse) gives you a little help with generating a lot of these methods but adding a field and forgetting to modify the `equals` method will lead to nasty surprises. Let’s look at the Kotlin equivalent:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/55ad7ff3d6a86b762e3011cf40533d89?postId=16b35c5f54a2" data-media-id="55ad7ff3d6a86b762e3011cf40533d89" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Whoa! That’s quite less typing compared to the Java version. Data classes in Kotlin give you

*   `equals` + `hashCode` and
*   `toString` in addition to
*   getters and setters. You can also `copy` them which effectively creates a new object with some fields overwritten. See [here](https://kotlinlang.org/docs/reference/data-classes.html) for more information on this topic.

### String interpolation

String manipulation in Java is painful. It can be alleviated by using `String.format` but it will still remain ugly.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/fd3f25d87762530b5c262edd5270cc42?postId=16b35c5f54a2" data-media-id="fd3f25d87762530b5c262edd5270cc42" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Kotlin works around this by adding [String interpolation](https://stackoverflow.com/questions/37442198/how-does-string-interpolation-work-in-kotlin) to the mix with which it is a bit simpler to use variables in String literals. You can even call methods from one!





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/7f90e2b4ae45169bd88874e4f1931c0d?postId=16b35c5f54a2" data-media-id="7f90e2b4ae45169bd88874e4f1931c0d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





### Extension functions

Writing decorators in Java can be tricky and they are not perfect. If you want to write a decorator which can be used with all classes implementing `List` you can’t simply use it in your decorator because it would need you to implement a lot of other methods so you have to extend `AbstractList`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/0dacc673c48e2fa1af77615d758f46ed?postId=16b35c5f54a2" data-media-id="0dacc673c48e2fa1af77615d758f46ed" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





If you need to decorate something which does not provide useful base classes like `AbstractList` or is a `final` class then you are out of luck. Extension methods come to the rescue!





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a27e3e7f5669837666dc6c5325a5f0f1?postId=16b35c5f54a2" data-media-id="a27e3e7f5669837666dc6c5325a5f0f1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





This method acts as a decorator for all `List`s. Compared to the Java alternative this one-liner is much simpler and it will also work for `final` classes. Just try not to [abuse](https://www.philosophicalhacker.com/post/how-to-abuse-kotlin-extension-functions/) them.

### Null safety

Checking for `null` values involves a lot of boolean expressions and a lot of boilerplate. With the advent of Java 8 you can finally work around this with the `Optional` class but what if the reference to an `Optional` is `null`? Yes, you’ll get a `NullPointerException` and after 20 years of Java we still don’t know **what** was null. Take the following example:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/f55cbb154a68fcf30ff562e4a8759c4d?postId=16b35c5f54a2" data-media-id="f55cbb154a68fcf30ff562e4a8759c4d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





With Kotlin you have several options. If you have to interop with Java projects you can use the null safety operator (`?`):





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/61f78e0dcf6dd66a7a77f2da3da74984?postId=16b35c5f54a2" data-media-id="61f78e0dcf6dd66a7a77f2da3da74984" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





The code will only run after a `?` if its left operand is not `null`. The `let` function creates a local binding for the object it was called upon so here `it` will point to `it.city`. If you don’t have to interop with Java I would suggest doing away with `null`s completely:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/36b0baae310a7e502da0d84c3acbeb56?postId=16b35c5f54a2" data-media-id="36b0baae310a7e502da0d84c3acbeb56" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





If there are no `null`s involved (no `?`s present) it all becomes a lot more simpler.



![](https://cdn-images-1.medium.com/max/1600/0*1HKBs5QC7tzqos9N.jpg)



### Type Inference

Kotlin supports type inference which means that it can derive types from the context in which they are present. This is like the Java diamond notation `<>` but on steroids! Take the following example:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2d9b993d3035191e279493ce21f4461c?postId=16b35c5f54a2" data-media-id="2d9b993d3035191e279493ce21f4461c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





This looks almost the same in Kotlin:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/cc095481bc632190b9c3c600657ccb80?postId=16b35c5f54a2" data-media-id="cc095481bc632190b9c3c600657ccb80" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Until you let Kotlin figure out the types of your variables:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/297ad6c492d98023c8c231ba0e0dfb6e?postId=16b35c5f54a2" data-media-id="297ad6c492d98023c8c231ba0e0dfb6e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





or even methods:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9c51082be868d7016d866812ad6ffd5f?postId=16b35c5f54a2" data-media-id="9c51082be868d7016d866812ad6ffd5f" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





### No checked exceptions

You must have seen this piece of code at least a million times:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/e32f265df1b96513c72bccd0b71d1583?postId=16b35c5f54a2" data-media-id="e32f265df1b96513c72bccd0b71d1583" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Old school IO in Java. Note the try with resources block! The same would look like this in Kotlin:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9737acbb14fd169a328ad77ed242d975?postId=16b35c5f54a2" data-media-id="9737acbb14fd169a328ad77ed242d975" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





There are a couple of things going on here. First Kotlin does away with checked exceptions. Secondly Kotlin adds `use` to any `Closeable` object which basically:

> _Executes the given [block] function on this resource and then closes it down correctly whether an exception is thrown or not. (Taken from Kotlin’s documentation)_

What you can also see here is that an extension function (`readLines`) is added to the `File` class. This pattern is visible throughout Kotlin’s rather small standard library. If you have ever used Guava, Apache Commons or something similar, chances are that you will see common functionality from them added to a JDK class as an extension function. Needless to say this will be good for your health (nerves at least).

### Lambda support

Let’s look at the lambda support in Java:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/67035cc5e3b99d30bee073085c667da3?postId=16b35c5f54a2" data-media-id="67035cc5e3b99d30bee073085c667da3" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Since there is no syntax for method parameter types we have to create an interface for it. Note that we could use `Function<String, Boolean>` here but it only works for functions with one parameter! There are some interfaces in the JDK to solve this problem but if someone looks at the code they might be puzzled what a `BiFunction` is useful for? Kotlin improves on this a bit:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/497c4c94599b34639968df8ace607c96?postId=16b35c5f54a2" data-media-id="497c4c94599b34639968df8ace607c96" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Kotlin adds a syntax for passing functions as parameters: `(ParamType1, ...ParamTypeN) -> ReturnType`. And with Kotlin you have method and field references and you can also refer to a method from a concrete object! Using the example above I can refer to the `filterBy` function on a concrete instance like this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d5e71ad74c7ba85fc3070253b5300952?postId=16b35c5f54a2" data-media-id="d5e71ad74c7ba85fc3070253b5300952" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





### Functional programming

Functional programming is all the buzz nowadays and with Java 8 they have released Oracle’s take on the topic: the Stream API. It works like this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/12840e53099d27ab85b22fa89a34c282?postId=16b35c5f54a2" data-media-id="12840e53099d27ab85b22fa89a34c282" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





The Kotlin equivalent is rather similar, but subtly different:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/56c0a7767d39cff626bce45b9a59ebda?postId=16b35c5f54a2" data-media-id="56c0a7767d39cff626bce45b9a59ebda" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





There is no explicit conversion to streams since all Kotlin collections support it out of the box. Not having to pass a lambda to `flatMap` here is a direct consequence of this. Collecting the result is also automatic (no need for `Collectors.to*` method calls). We only had to use `toSet` here because we want to return a `Set`. Otherwise `.toSet()` can be omitted.

### Kotlin-java interoperation

Well this can be a dealbreaker for most people but JetBrains got this right:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/fc7533ea9dab4ccb1341e3869dd34f23?postId=16b35c5f54a2" data-media-id="fc7533ea9dab4ccb1341e3869dd34f23" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>









<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/1135202d3b411475860e8f57b3f4fcf5?postId=16b35c5f54a2" data-media-id="1135202d3b411475860e8f57b3f4fcf5" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1253248%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





The interop is seamless and painless. Java and Kotlin can live together in the same project and Kotlin supplies a set of annotations (like `@JvmStatic` here) so Kotlin code can be called from Java without any fuss. Check [here](https://kotlinlang.org/docs/reference/java-interop.html) for further information on this topic.

As you might have seen from these examples Kotlin takes the good ideas from Java, improves upon them and tries to keep the WTF/minute counter to a minimum. The recent news about Google making Kotlin one of the supported languages on Android also underpins this.

### Things to tell your boss

So if you want to give it a try here are some pointers which will help you when negotiating with your boss and teammates:

*   Kotlin comes from industry, not academia. It solves problems faced by working programmers today.
*   It is free and Open Source
*   It comes with a useful Java to Kotlin converter tool
*   You can mix Kotlin and Java with **zero** **effort**
*   You can use _all_ existing java tools/frameworks
*   Kotlin is supported by the best IDE on the market (with a free version)
*   It is easy to read, even non-Kotlin programmers can review your code
*   **You don’t need to commit** your project to Kotlin: _you can start by writing your tests in it_
*   JetBrains is not likely to abandon Kotlin because it drives their sales
*   Kotlin has a vibrant community and even you can easily contribute to Kotlin and suggest new features using [KEEP](https://github.com/Kotlin/KEEP)

So does it live up to the hype? Only you can tell. Here are a few pointers where you can start:

*   [Kotlin Tutorials](https://kotlinlang.org/docs/tutorials/)
*   [The Kotlin Reddit](https://www.reddit.com/r/Kotlin/)
*   [Kotlin Koans](https://kotlinlang.org/docs/tutorials/koans.html)
*   [Kotlin Blog](https://blog.jetbrains.com/kotlin/) <– this will keep you up to date
*   [Awesome Kotlin](https://kotlin.link/) <– Curated list of Kotlin resources and libraries
*   You can also check the source of the examples presented in this article [here](https://github.com/AppCraft-Projects/java-to-kotlin-examples).











* * *







_Originally published at_ [_the-cogitator.com_](http://the-cogitator.com/2017/05/19/kotlin-is-the-new-java.html) _on May 19, 2017._








