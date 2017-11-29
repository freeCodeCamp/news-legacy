---
author: TK
authorTwitter: https://twitter.com/LeandroTk_
authorFacebook: https://facebook.com/952511121459825
title: "Learning Python: From Zero to Hero"
subTitle: "First of all, what is Python? According to its creator, Guido van Rossum, Python is a:..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*ueWmI48uuShON-hX7LwI0w.png
url: https://medium.freecodecamp.org/learning-python-from-zero-to-hero-120ea540b567
id: learning-python-from-zero-to-hero-120ea540b567
date: 2017-09-30T20:48:17.730Z
tags: [
  "Python",
  "Programming",
  "Coding",
  "Web Development",
  "Software Development"
]
---
# Learning Python: From Zero to Hero







![](https://cdn-images-1.medium.com/max/2000/1*ueWmI48uuShON-hX7LwI0w.png)







First of all, what is Python? According to its creator, Guido van Rossum, Python is a:

> “high-level programming language, and its core design philosophy is all about code readability and a syntax which allows programmers to express concepts in a few lines of code.”

For me, the first reason to learn Python was that it is, in fact, a beautifulprogramming language. It was really natural to code in it and express my thoughts.

Another reason was that we can use coding in Python in multiple ways: data science, web development, and machine learning all shine here. Quora, Pinterest and Spotify all use Python for their backend web development. So let’s learn a bit about it.

### The Basics

#### 1\. Variables

You can think about variables as words that store a value. Simple as that.

In Python, it is really easy to define a variable and set a value to it. Imagine you want to store number 1 in a variable called “one.” Let’s do it:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c921e7aaef4471513b444391de4ac1e0?postId=120ea540b567" data-media-id="c921e7aaef4471513b444391de4ac1e0" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





How simple was that? You just assigned the value 1 to the variable “one.”





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b2a2391142a1e0dd5b80f4f772ef75bd?postId=120ea540b567" data-media-id="b2a2391142a1e0dd5b80f4f772ef75bd" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





And you can assign any other **value** to whatever other **variables** you want. As you see in the table above, the variable “**two**” stores the integer **2**, and “**some_number**” stores **10,000**.

Besides integers, we can also use booleans (True / False), strings, float, and so many other data types.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ef7690e897e2498d3ef02b23e8c5e4c7?postId=120ea540b567" data-media-id="ef7690e897e2498d3ef02b23e8c5e4c7" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





#### 2\. Control Flow: conditional statements

“**If**” uses an expression to evaluate whether a statement is True or False. If it is True, it executes what is inside the “if” statement. For example:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/4dd2996bf0b7a7f1fe5b600ae2466dcc?postId=120ea540b567" data-media-id="4dd2996bf0b7a7f1fe5b600ae2466dcc" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





**2** is greater than **1**, so the “**print**” code is executed.

The “**else**” statement will be executed if the “**if**” expression is **false**.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9862206af6404782adbf21e8e95bcf5d?postId=120ea540b567" data-media-id="9862206af6404782adbf21e8e95bcf5d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





**1** is not greater than **2**, so the code inside the “**else**” statement will be executed.

You can also use an “**elif**” statement:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/26e4095c80922321f6236f5d39e8b379?postId=120ea540b567" data-media-id="26e4095c80922321f6236f5d39e8b379" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





#### 3\. Looping / Iterator

In Python, we can iterate in different forms. I’ll talk about two: **while**and **for**.

**While** Looping: while the statement is True, the code inside the block will be executed. So, this code will print the number from **1** to **10**.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d3f00f81eb92814e777f6d4d440cf086?postId=120ea540b567" data-media-id="d3f00f81eb92814e777f6d4d440cf086" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





The **while** loop needs a “**loop condition.**” If it stays True, it continues iterating. In this example, when `num` is `11` the **loop condition** equals `False`.

Another basic bit of code to better understand it:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/633fe079c8f85248ad1d7e2644804433?postId=120ea540b567" data-media-id="633fe079c8f85248ad1d7e2644804433" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





The **loop condition** is `True` so it keeps iterating — until we set it to `False`.

**For Looping**: you apply the variable “**num**” to the block, and the “**for**” statement will iterate it for you. This code will print the same as **while** code: from **1** to **10**.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/14d281dd982af1d77d9bf4ea9b71d912?postId=120ea540b567" data-media-id="14d281dd982af1d77d9bf4ea9b71d912" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





See? It is so simple. The range starts with `1` and goes until the `11`th element (`10` is the `10`th element).

### List: Collection | Array | Data Structure

Imagine you want to store the integer 1 in a variable. But maybe now you want to store 2\. And 3, 4, 5 …

Do I have another way to store all the integers that I want, but not in **millions of variables**? You guessed it — there is indeed another way to store them.

`List` is a collection that can be used to store a list of values (like these integers that you want). So let’s use it:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b66ff21fb947a4456fc0fadbb12081de?postId=120ea540b567" data-media-id="b66ff21fb947a4456fc0fadbb12081de" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





It is really simple. We created an array and stored it on **my_integer**.

But maybe you are asking: “How can I get a value from this array?”

Great question. `List` has a concept called **index**. The first element gets the index 0 (zero). The second gets 1, and so on. You get the idea.

To make it clearer, we can represent the array and each element with its index. I can draw it:



![](https://cdn-images-1.medium.com/max/1600/1*ReMk6NgghLII20vPD6uNEA.jpeg)



Using the Python syntax, it’s also simple to understand:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c9cca0f7306db18db8b9d6c5eab7e2ed?postId=120ea540b567" data-media-id="c9cca0f7306db18db8b9d6c5eab7e2ed" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Imagine that you don’t want to store integers. You just want to store strings, like a list of your relatives’ names. Mine would look something like this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/34342f0ef152b82e7ce33c2c63503cb9?postId=120ea540b567" data-media-id="34342f0ef152b82e7ce33c2c63503cb9" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





It works the same way as integers. Nice.

We just learned how `Lists` indices work. But I still need to show you how we can add an element to the `List` data structure (an item to a list).

The most common method to add a new value to a `List` is `append`. Let’s see how it works:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c55bbcee5e611a3562bc3d6840f720a9?postId=120ea540b567" data-media-id="c55bbcee5e611a3562bc3d6840f720a9" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





`append` is super simple. You just need to apply the element (eg. “**The Effective Engineer**”) as the `append` parameter.

Well, enough about `Lists`**_._** Let’s talk about another data structure.

### Dictionary: Key-Value Data Structure

Now we know that `Lists` are indexed with integer numbers. But what if we don’t want to use integer numbers as indices? Some data structures that we can use are numeric, string, or other types of indices.

Let’s learn about the `Dictionary` data structure. `Dictionary` is a collection of key-value pairs. Here’s what it looks like:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ca070295beefcedab9777847bf99664e?postId=120ea540b567" data-media-id="ca070295beefcedab9777847bf99664e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





The **key** is the index pointing to the**value**. How do we access the `Dictionary` **value**? You guessed it — using the **key**. Let’s try it:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/82894cd297682720e22d995b2d0398d7?postId=120ea540b567" data-media-id="82894cd297682720e22d995b2d0398d7" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





I created a `Dictionary` about me. My name, nickname, and nationality. Those attributes are the `Dictionary` **keys**.

As we learned how to access the `List` using index, we also use indices (**keys** in the `Dictionary` context) to access the **value** stored in the `Dictionary`.

In the example, I printed a phrase about me using all the values stored in the `Dictionary`. Pretty simple, right?

Another cool thing about `Dictionary` is that we can use anything as the value. In the `Dictionary`I created, I want to add the **key** “age” and my real integer age in it:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/6997f6fb0ae67087f67ae339e071a0ae?postId=120ea540b567" data-media-id="6997f6fb0ae67087f67ae339e071a0ae" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Here we have a **key** (age) **value** (24) pair using string as the **key** and integer as the **value**.

As we did with `Lists`, let’s learn how to add elements to a `Dictionary`. The **key**pointing to a**value** is a big part of what `Dictionary` is. This is also true when we are talking about adding elements to it:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9f526a77030b63e3c431f8ea5465498f?postId=120ea540b567" data-media-id="9f526a77030b63e3c431f8ea5465498f" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





We just need to assign a **value** to a `Dictionary`**key**. Nothing complicated here, right?

### Iteration: Looping Through Data Structures

As we learned in the [**Python Basics**](https://medium.com/the-renaissance-developer/python-101-the-basics-441136fb7cc3), the `List` iteration is very simple. We `Python`developers commonly use `For` looping. Let’s do it:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/0f28c915bf7fdf1bd898691a04731d04?postId=120ea540b567" data-media-id="0f28c915bf7fdf1bd898691a04731d04" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





So for each book in the bookshelf, we (**can do everything with it**) print it. Pretty simple and intuitive. That’s Python.

For a hash data structure, we can also use the `for` loop, but we apply the `key` :





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d49402e195671309c87c7adf7a4cc4c3?postId=120ea540b567" data-media-id="d49402e195671309c87c7adf7a4cc4c3" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





This is an example how to use it. For each `key` in the `dictionary` , we `print` the `key` and its corresponding `value`.

Another way to do it is to use the `iteritems` method.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c146d618d971e893e81dc776c9381b99?postId=120ea540b567" data-media-id="c146d618d971e893e81dc776c9381b99" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





We did name the two parameters as `key` and `value`, but it is not necessary. We can name them anything. Let’s see it:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/fe665ca42dac4023bc6c36327a45cad5?postId=120ea540b567" data-media-id="fe665ca42dac4023bc6c36327a45cad5" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





We can see we used attribute as a parameter for the `Dictionary` `key`, and it works properly. Great!

### Classes & Objects

#### A little bit of theory:

**Objects** are a representation of real world objects like cars, dogs, or bikes. The objects share two main characteristics: **data** and **behavior**.

Cars have **data,** like number of wheels, number of doors, and seating capacity They also exhibit **behavior**: they can accelerate, stop, show how much fuel is left, and so many other things.

We identify **data** as **attributes** and **behavior** as **methods** in object-oriented programming. Again:

Data → Attributes and Behavior → Methods

And a **Class** is the blueprint from which individual objects are created. In the real world, we often find many objects with the same type. Like cars. All the same make and model (and all have an engine, wheels, doors, and so on). Each car was built from the same set of blueprints and has the same components.

#### Python Object-Oriented Programming mode: ON

Python, as an Object-Oriented programming language, has these concepts: **class** and **object**.

A class is a blueprint, a model for its objects.

So again, a class it is just a model, or a way to define **attributes** and **behavior** (as we talked about in the theory section). As an example, a vehicle **class** has its own **attributes** that define what **objects** are vehicles. The number of wheels, type of tank, seating capacity, and maximum velocity are all attributes of a vehicle.

With this in mind, let’s look at Python syntax for **classes**:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/45528bd8e9e2f5b093f101fbd7bf60b1?postId=120ea540b567" data-media-id="45528bd8e9e2f5b093f101fbd7bf60b1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





We define classes with a **class statement — **and that’s it. Easy, isn’t it?

**Objects** are instances of a **class**. We create an instance by naming the class.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/dc44d286269b03b697f1f54d10e0b7bc?postId=120ea540b567" data-media-id="dc44d286269b03b697f1f54d10e0b7bc" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Here `car` is an **object** (or instance) of the **class** `Vehicle`.

Remember that our vehicle **class** has four **attributes**: number of wheels, type of tank, seating capacity, and maximum velocity. We set all these **attributes** when creating a vehicle **object**. So here, we define our **class** to receive data when it initiates it:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/686af7ee5c449971ba4e00c553ac619c?postId=120ea540b567" data-media-id="686af7ee5c449971ba4e00c553ac619c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





We use the `init` **method**. We call it a constructor method. So when we create the vehicle **object**, we can define these **attributes**. Imagine that we love the **Tesla Model S,** and we want to create this kind of **object**. It has four wheels, runs on electric energy, has space for five seats, and the maximum velocity is 250km/hour (155 mph). Let’s create this **object:**





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9ca0f1c86fda8e864205d460aa60c96e?postId=120ea540b567" data-media-id="9ca0f1c86fda8e864205d460aa60c96e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Four wheels + electric “tank type” + five seats + 250km/hour maximum speed.

All attributes are set. But how can we access these attributes’ values? We **send a message to the object asking about them**. We call it a **method**. It’s the **object’s behavior**. Let’s implement it:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/078ec29902fc03a0c37079a1476fb774?postId=120ea540b567" data-media-id="078ec29902fc03a0c37079a1476fb774" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





This is an implementation of two methods: **number_of_wheels** and **set_number_of_wheels**. We call it `getter` & `setter`. Because the first gets the attribute value, and the second sets a new value for the attribute.

In Python, we can do that using `@property` (`decorators`) to define `getters` and `setters`. Let’s see it with code:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/5164561c3931ef826d0648af0c8dbc52?postId=120ea540b567" data-media-id="5164561c3931ef826d0648af0c8dbc52" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





And we can use these methods as attributes:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/3a2afe0bb4eb97a7a97564fc1ad8359a?postId=120ea540b567" data-media-id="3a2afe0bb4eb97a7a97564fc1ad8359a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





This is slightly different than defining methods. The methods work as attributes. For example, when we set the new number of wheels, we don’t apply two as a parameter, but set the value 2 to `number_of_wheels`. This is one way to write `pythonic` `getter` and `setter` code.

But we can also use methods for other things, like the “**make_noise**” method. Let’s see it:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/86b005c8075fea4714f7a0421dfa49ad?postId=120ea540b567" data-media-id="86b005c8075fea4714f7a0421dfa49ad" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





When we call this method, it just returns a string **_“_VRRRRUUUUM._”_**





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d3ee7c0ee048748acaf6d86aed4a661f?postId=120ea540b567" data-media-id="d3ee7c0ee048748acaf6d86aed4a661f" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





### Encapsulation: Hiding Information

Encapsulation is a mechanism that restricts direct access to objects’ data and methods. But at the same time, it facilitates operation on that data (objects’ methods).

> “Encapsulation can be used to hide data members and members function. Under this definition, encapsulation means that the internal representation of an [object](https://en.wikipedia.org/wiki/Object_%28computer_science%29 "Object (computer science)") is generally hidden from view outside of the object’s definition.” — Wikipedia

All internal representation of an object is hidden from the outside. Only the object can interact with its internal data.

First, we need to understand how `public` and `non-public` instance variables and methods work.

#### Public Instance Variables

For a Python class, we can initialize a `public instance variable` within our constructor method. Let’s see this:

Within the constructor method:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d25de854b3f10f1d38043d1980b9d4c0?postId=120ea540b567" data-media-id="d25de854b3f10f1d38043d1980b9d4c0" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Here we apply the `first_name` value as an argument to the `public instance variable`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/42acba08d786976f46f7c94c609e0751?postId=120ea540b567" data-media-id="42acba08d786976f46f7c94c609e0751" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Within the class:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/5e2ae251034940f518b90ac65326c847?postId=120ea540b567" data-media-id="5e2ae251034940f518b90ac65326c847" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Here, we do not need to apply the `first_name` as an argument, and all instance objects will have a `class attribute` initialized with `TK`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/775c068ba6cdddb717c7e268b6c3ccaf?postId=120ea540b567" data-media-id="775c068ba6cdddb717c7e268b6c3ccaf" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Cool. We have now learned that we can use `public instance variables` and `class attributes`. Another interesting thing about the `public` part is that we can manage the variable value. What do I mean by that? Our `object` can manage its variable value: `Get` and `Set` variable values.

Keeping the `Person` class in mind, we want to set another value to its `first_name` variable:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/438ee52aa7e08b485897aa166c15c351?postId=120ea540b567" data-media-id="438ee52aa7e08b485897aa166c15c351" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





There we go. We just set another value (`kaio`) to the `first_name` instance variable and it updated the value. Simple as that. Since it’s a `public` variable, we can do that.

#### Non-public Instance Variable

> We don’t use the term “private” here, since no attribute is really private in Python (without a generally unnecessary amount of work). — [PEP 8](https://www.python.org/dev/peps/pep-0008/#designing-for-inheritance)

As the `public instance variable` , we can define the `non-public instance variable` both within the constructor method or within the class. The syntax difference is: for `non-public instance variables` , use an underscore (`_`) before the `variable` name.

> “‘Private’ instance variables that cannot be accessed except from inside an object don’t exist in Python. However, there is a convention that is followed by most Python code: a name prefixed with an underscore (e.g. `_spam`) should be treated as a non-public part of the API (whether it is a function, a method or a data member)” — [Python Software Foundation](https://docs.python.org/2/tutorial/classes.html#private-variables-and-class-local-references)

Here’s an example:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/07bd96cb9147758a489e2b49120f3a88?postId=120ea540b567" data-media-id="07bd96cb9147758a489e2b49120f3a88" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Did you see the `email` variable? This is how we define a `non-public variable` :





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/926ca447d0efd9b2377dcf8e4a3c47c1?postId=120ea540b567" data-media-id="926ca447d0efd9b2377dcf8e4a3c47c1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





> We can access and update it. `Non-public variables` are just a convention and should be treated as a non-public part of the API.

So we use a method that allows us to do it inside our class definition. Let’s implement two methods (`email` and `update_email`) to understand it:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/87fc55c276acb9423da57a2b58706876?postId=120ea540b567" data-media-id="87fc55c276acb9423da57a2b58706876" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Now we can update and access `non-public variables` using those methods. Let’s see:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/7da3b5de1c01d60a7deb4aef0e8cf679?postId=120ea540b567" data-media-id="7da3b5de1c01d60a7deb4aef0e8cf679" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





1.  We initiated a new object with `first_name` TK and `email` tk@mail.com
2.  Printed the email by accessing the `non-public variable` with a method
3.  Tried to set a new `email` out of our class
4.  We need to treat `non-public variable` as `non-public` part of the API
5.  Updated the `non-public variable` with our instance method
6.  Success! We can update it inside our class with the helper method

#### Public Method

With `public methods`, we can also use them out of our class:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9aa65d297f30dc9d07dd0447a035c301?postId=120ea540b567" data-media-id="9aa65d297f30dc9d07dd0447a035c301" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Let’s test it:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/82ff560e3160e2a9a78a255c7e72d70b?postId=120ea540b567" data-media-id="82ff560e3160e2a9a78a255c7e72d70b" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Great — we can use it without any problem.

#### Non-public Method

But with `non-public methods` we aren’t able to do it. Let’s implement the same `Person` class, but now with a `show_age` `non-public method` using an underscore (`_`).





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/fd08994303980074c04b7b17ce51d1d3?postId=120ea540b567" data-media-id="fd08994303980074c04b7b17ce51d1d3" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





And now, we’ll try to call this `non-public method` with our object:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/993456840fe3204d6e7b70a2d34c2e9e?postId=120ea540b567" data-media-id="993456840fe3204d6e7b70a2d34c2e9e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





> We can access and update it. `Non-public methods` are just a convention and should be treated as a non-public part of the API.

Here’s an example for how we can use it:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/022c04bf0aed47f618b24b7af3daa853?postId=120ea540b567" data-media-id="022c04bf0aed47f618b24b7af3daa853" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Here we have a `_get_age` `non-public method` and a `show_age` `public method`. The `show_age` can be used by our object (out of our class) and the `_get_age` only used inside our class definition (inside `show_age` method). But again: as a matter of convention.

#### Encapsulation Summary

With encapsulation we can ensure that the internal representation of the object is hidden from the outside.

### Inheritance: behaviors and characteristics

Certain objects have some things in common: their behavior and characteristics.

For example, I inherited some characteristics and behaviors from my father. I inherited his eyes and hair as characteristics, and his impatience and introversion as behaviors.

In object-oriented programming, classes can inherit common characteristics (data) and behavior (methods) from another class.

Let’s see another example and implement it in Python.

Imagine a car. Number of wheels, seating capacity and maximum velocity are all attributes of a car. We can say that an**ElectricCar** class inherits these same attributes from the regular **Car** class.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d8c96fa38c00544eddac8f8a07723763?postId=120ea540b567" data-media-id="d8c96fa38c00544eddac8f8a07723763" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Our **Car** class implemented:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/03691782d8dfad996e277e0ee346b2f4?postId=120ea540b567" data-media-id="03691782d8dfad996e277e0ee346b2f4" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Once initiated, we can use all `instance variables` created. Nice.

In Python, we apply a `parent class` to the `child class` as a parameter. An **ElectricCar** class can inherit from our **Car** class.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d2c121285adc388fcf8c273a239989fe?postId=120ea540b567" data-media-id="d2c121285adc388fcf8c273a239989fe" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Simple as that. We don’t need to implement any other method, because this class already has it (inherited from **Car** class). Let’s prove it:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/f907bb15bdd8e9fd839d57f513b7c613?postId=120ea540b567" data-media-id="f907bb15bdd8e9fd839d57f513b7c613" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F5835798%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Beautiful.

### That’s it!

We learned a lot of things about Python basics:

*   How Python variables work
*   How Python conditional statements work
*   How Python looping (while & for) works
*   How to use Lists: Collection | Array
*   Dictionary Key-Value Collection
*   How we can iterate through these data structures
*   Objects and Classes
*   Attributes as objects’ data
*   Methods as objects’ behavior
*   Using Python getters and setters & property decorator
*   Encapsulation: hiding information
*   Inheritance: behaviors and characteristics

Congrats! You completed this dense piece of content about Python.

From more stories and posts about my journey learning & mastering programming, follow my publication [**The Renaissance Developer**](https://medium.com/the-renaissance-developer).

Have fun, keep learning, and always keep coding.

My [Instagram](https://www.instagram.com/renaissance_dev/), [Twitter](https://twitter.com/LeandroTk_), [Github](https://github.com/LeandroTk) & [LinkedIn](http://br.linkedin.com/in/leandrotk/). ☺








