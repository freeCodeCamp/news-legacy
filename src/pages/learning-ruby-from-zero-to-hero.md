---
author: TK
authorTwitter: https://twitter.com/LeandroTk_
authorFacebook: https://facebook.com/952511121459825
title: "Learning Ruby: From Zero to Hero"
subTitle: "Why learn Ruby?..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*sZSVVtdP9TE3mUoGh4GoYA.png
url: https://medium.freecodecamp.org/learning-ruby-from-zero-to-hero-90ad4eecc82d
id: learning-ruby-from-zero-to-hero-90ad4eecc82d
date: 2017-09-12T22:26:52.078Z
tags: [
  "Programming",
  "Ruby",
  "Tech",
  "Startup",
  "Technology"
]
---
# Learning Ruby: From Zero to Hero



![](https://cdn-images-1.medium.com/max/1600/1*sZSVVtdP9TE3mUoGh4GoYA.png)



> “Ruby is simple in appearance, but is very complex inside, just like our human body.” — [Matz](https://twitter.com/yukihiro_matz), creator of the Ruby programming language

Why learn Ruby?

For me, the first reason is that it’s a beautiful language. It’s natural to code and it always expresses my thoughts.

The second — and main — reason is _Rails_: the same framework that Twitter, Basecamp, Airbnb, Github, and so many companies use.

### Introduction/History

Ruby is “A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.” — [ruby-lang.org](https://www.ruby-lang.org/)

Let’s get started with some basics!

### Variables

You can think about a variable as a word that stores a value. Simple as that.

In Ruby it’s easy to define a variable and set a value to it. Imagine you want to store the number 1 in a variable called one. Let’s do it!





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/bb6a79ad4b11959499d226c6d295bf5c?postId=90ad4eecc82d" data-media-id="bb6a79ad4b11959499d226c6d295bf5c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





How simple was that? You just assigned the value 1 to a variable called one.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/0fe6048bed14d0cb7c3e3fbc1223d795?postId=90ad4eecc82d" data-media-id="0fe6048bed14d0cb7c3e3fbc1223d795" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





You can assign a value to whatever variable you want. In the example above, a _two_ variable stores an integer of 2 and _some_number_ stores 10,000.

Besides integers, we can also use booleans (true/false), strings, [symbols](http://rubylearning.com/satishtalim/ruby_symbols.html), float, and other data types.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c212274b24d10e047efa93b2701ba8d0?postId=90ad4eecc82d" data-media-id="c212274b24d10e047efa93b2701ba8d0" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





### Conditional Statements: Control Flow

Conditional statements evaluate true or false. If something is true, it executes what’s inside the statement. For example:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/3523c44ff4d78f1ddaa329fa4dfc10b1?postId=90ad4eecc82d" data-media-id="3523c44ff4d78f1ddaa329fa4dfc10b1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





2 is greater than 1, so the _puts_ code is executed.

This else statement will be executed when the if expression is false:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/eef6a7a0f2e68bc302329352be76f565?postId=90ad4eecc82d" data-media-id="eef6a7a0f2e68bc302329352be76f565" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





1 is not greater than 2, so the code inside the else statement will be executed.

There’s also the elsif statement. You can use it like this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/f1c689f1cf078bd5bc162bc36cdd40d0?postId=90ad4eecc82d" data-media-id="f1c689f1cf078bd5bc162bc36cdd40d0" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





One way I really like to write Ruby is to use an if statement after the code to be executed:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b6db16ba62119dc1ae22de2dcde97c2c?postId=90ad4eecc82d" data-media-id="b6db16ba62119dc1ae22de2dcde97c2c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





It is so beautiful and natural. It is idiomatic Ruby.

### Looping/Iterator

In Ruby we can iterate in so many different forms. I’ll talk about three iterators: while, for and each.

While looping: As long as the statement is true, the code inside the block will be executed. So this code will print the number from 1 to 10:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2c3214a393ab93c093f3ef3fa1867d1d?postId=90ad4eecc82d" data-media-id="2c3214a393ab93c093f3ef3fa1867d1d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





For looping: You pass the variable num to the block and the for statement will iterate it for you. This code will print the same as while code: from 1 to 10:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ff6e154586e0aaae44c8c7e315b1b091?postId=90ad4eecc82d" data-media-id="ff6e154586e0aaae44c8c7e315b1b091" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Each iterator: I really like the each iterator. For an array of values, it’ll iterate one by one, passing the variable to the block:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/4f4c2aa48b13877ac5b4965d34b49bf8?postId=90ad4eecc82d" data-media-id="4f4c2aa48b13877ac5b4965d34b49bf8" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





You may be asking what the difference is between the each iterator and for looping. The main difference is that the each iterator only maintains the variable inside the iteration block, whereas for looping allows the variable to live on outside the block.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b77137d46ea0655be9b962dcaf3cfc12?postId=90ad4eecc82d" data-media-id="b77137d46ea0655be9b962dcaf3cfc12" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





### Array: Collection/List/Data Structure

Imagine you want to store the integer 1 in a variable. But maybe now you want to store 2\. And 3, 4, 5 …

Do I have a way to store all the integers that I want, but not in millions of variables? Ruby has an answer!

Array is a collection that can be used to store a list of values (like these integers). So let’s use it!





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/97da0b7f1719b87667ef8a77f55d42f4?postId=90ad4eecc82d" data-media-id="97da0b7f1719b87667ef8a77f55d42f4" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





It is really simple. We created an array and stored it in _my_integer_.

You may be asking, “How can I get a value from this array?” Great question. Arrays have a concept called index. The first element gets the index 0 (zero). The second gets 1, and so on. You get the idea!



![](https://cdn-images-1.medium.com/max/1600/1*HmGUFmEI1w7ClqD6YCSmJQ.png)



Using the Ruby syntax, it’s simple to understand:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/0ef48b2826c0efa9c33021d4f2f590b7?postId=90ad4eecc82d" data-media-id="0ef48b2826c0efa9c33021d4f2f590b7" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Imagine you want to store strings instead of integers, like a list of your relatives’ names. Mine would be something like this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b114ba03036a9d3f2eab26c7725c9277?postId=90ad4eecc82d" data-media-id="b114ba03036a9d3f2eab26c7725c9277" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Works the same way as integers. Nice!

We just learned how array indices works. Now let’s add elements to the array data structure (items to the list).

The most common methods to add a new value to an array are push and <<.

Push is super simple! You just need to pass the element (The Effective Engineer) as the push parameter:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/495470abf04554e08e226475be1e5eab?postId=90ad4eecc82d" data-media-id="495470abf04554e08e226475be1e5eab" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





The << method is just slightly different:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/857ba664a6fdeaf48b69709bd9bc69e8?postId=90ad4eecc82d" data-media-id="857ba664a6fdeaf48b69709bd9bc69e8" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





You may ask, “But it doesn’t use the dot notation like other methods do. How could it be a method?” Nice question! Writing this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a6ffd841bdbc929f12a30f04a50cf5c2?postId=90ad4eecc82d" data-media-id="a6ffd841bdbc929f12a30f04a50cf5c2" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





…is similar to writing this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/5c78da0a5e0c47e37c99e5c4244467c3?postId=90ad4eecc82d" data-media-id="5c78da0a5e0c47e37c99e5c4244467c3" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Ruby is so great, huh?

Well, enough arrays. Let’s talk about another data structure.

### Hash: Key-Value Data Structure/Dictionary Collection

We know that arrays are indexed with numbers. But what if we don’t want to use numbers as indices? Some data structures can use numeric, string, or other types of indices. The hash data structure is one of them.

Hash is a collection of key-value pairs. It looks like this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/347992e003fd861f05753792715ddfeb?postId=90ad4eecc82d" data-media-id="347992e003fd861f05753792715ddfeb" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





The key is the index pointing to the value. How do we access the hash value? Using the key!

Here’s a hash about me. My name, nickname, and nationality are the hash’s keys.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/72f973638af83f7f3e5c0f9dad733671?postId=90ad4eecc82d" data-media-id="72f973638af83f7f3e5c0f9dad733671" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





In the above example I printed a phrase about me using all the values stored in the hash.

Another cool thing about hashes is that we can use anything as the value. I’ll add the key “age” and my real integer age (24).





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c44e876c9a42324bee35efba98a0ca1e?postId=90ad4eecc82d" data-media-id="c44e876c9a42324bee35efba98a0ca1e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Let’s learn how to add elements to a hash. The key pointing to a value is a big part of what hash is — and the same goes for when we want to add elements to it.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/761a00921b914f8d8f2cf08d9918b30d?postId=90ad4eecc82d" data-media-id="761a00921b914f8d8f2cf08d9918b30d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





We just need to assign a value to a hash key. Nothing complicated here, right?

### Iteration: Looping Through Data Structures

The array iteration is very simple. Ruby developers commonly use the each iterator. Let’s do it:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/477f5a35ab880c316d31fc53d39e4718?postId=90ad4eecc82d" data-media-id="477f5a35ab880c316d31fc53d39e4718" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





The each iterator works by passing array elements as parameters in the block. In the above example, we print each element.

For hash data structure, we can also use the each iterator by passing two parameters to the block: the key and the value. Here’s an example:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c6ba1aab845c670a652fe892d2631692?postId=90ad4eecc82d" data-media-id="c6ba1aab845c670a652fe892d2631692" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





We named the two parameters as key and value, but it’s not necessary. We can name them anything:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/04487ca1a8c9bc04381790b63a205f2c?postId=90ad4eecc82d" data-media-id="04487ca1a8c9bc04381790b63a205f2c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





You can see we used attribute as a parameter for the hash key and it works properly. Great!

### Classes & Objects

As an object oriented programming language, Ruby uses the concepts of class and object.

“Class” is a way to define objects. In the real world there are many objects of the same type. Like vehicles, dogs, bikes. Each vehicle has similar components (wheels, doors, engine).

“Objects” have two main characteristics: data and behavior. Vehicles have data like number of wheels and number of doors. They also have behavior like accelerating and stopping.

In object oriented programming we call data “attributes” and behavior “methods.”

Data = Attributes  
Behavior = Methods

### Ruby Object Oriented Programming Mode: On

Let’s understand Ruby syntax for classes:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/7f64685394da65aa0fba02dee198a037?postId=90ad4eecc82d" data-media-id="7f64685394da65aa0fba02dee198a037" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





We define Vehicle with class statement and finish with end. Easy!

And objects are instances of a class. We create an instance by calling the .new method.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ca89c76eb74964f11181e16fa9107885?postId=90ad4eecc82d" data-media-id="ca89c76eb74964f11181e16fa9107885" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Here _vehicle_ is an object (or instance) of the class Vehicle.

Our vehicle class will have 4 attributes: Wheels, type of tank, seating capacity, and maximum velocity.

Let’s define our class Vehicle to receive data and instantiate it.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d8708f5c700ee658eb61e4b1160bb884?postId=90ad4eecc82d" data-media-id="d8708f5c700ee658eb61e4b1160bb884" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





We use the initialize method. We call it a constructor method so when we create the vehicle object, we can define its attributes.

Imagine that you love the Tesla Model S and want to create this kind of object. It has 4 wheels. Its tank type is electric energy. It has space for 5 seats and a maximum velocity is 250km/hour (155 mph). Let’s create the object tesla_model_s! :)





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/271f107e2c7c0f146eba7c85e9bf5ebb?postId=90ad4eecc82d" data-media-id="271f107e2c7c0f146eba7c85e9bf5ebb" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





4 wheels + electric tank + 5 seats + 250km/hour maximum speed = tesla_model_s.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/6e062e229336eb8b3b6f17f029db391d?postId=90ad4eecc82d" data-media-id="6e062e229336eb8b3b6f17f029db391d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





We’ve set the Tesla’s attributes. But how do we access them?

We send a message to the object asking about them. We call it a method. It’s the object’s behavior. Let’s implement it!





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/398f17f9f6af666a1e3d02917bee7cbe?postId=90ad4eecc82d" data-media-id="398f17f9f6af666a1e3d02917bee7cbe" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





This is an implementation of two methods: number_of_wheels and set_number_of_wheels. We call it “getter” and “setter.” First we get the attribute value, and second, we set a value for the attribute.

In Ruby, we can do that without methods using attr_reader, attr_writer and attr_accessor. Let’s see it with code!

*   attr_reader: implements the getter method





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9fd9e5f318de5c7ed64d2f339909b290?postId=90ad4eecc82d" data-media-id="9fd9e5f318de5c7ed64d2f339909b290" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





*   attr_writer: implements the setter method





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/8b270a25e83965616522477b79262116?postId=90ad4eecc82d" data-media-id="8b270a25e83965616522477b79262116" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





*   attr_accessor: implements both methods





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9b6b1482ac679ad484faca6816409113?postId=90ad4eecc82d" data-media-id="9b6b1482ac679ad484faca6816409113" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





So now we’ve learned how to get attribute values, implement the getter and setter methods, and use attr (reader, writer, and accessor).

We can also use methods to do other things — like a “make_noise” method. Let’s see it!





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d66e86703eaec1525f35c1bba1fd955b?postId=90ad4eecc82d" data-media-id="d66e86703eaec1525f35c1bba1fd955b" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





When we call this method, it just returns a string “VRRRRUUUUM”.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/87e1317dd3dcdeed69ea769b5705b877?postId=90ad4eecc82d" data-media-id="87e1317dd3dcdeed69ea769b5705b877" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





### Encapsulation: Hiding Information

Encapsulation is a way to restrict direct access to objects’ data and methods. At the same time it facilitates operation on that data (objects’ methods).

> Encapsulation can be used to hide data members and members function…Encapsulation means that the internal representation of an object is generally hidden from view outside of the object’s definition.   
>  — [Wikipedia](https://en.wikipedia.org/wiki/Encapsulation_%28computer_programming%29)

So all internal representation of an object is hidden from the outside, only the object can interact with its internal data.

In Ruby we use methods to directly access data. Let’s see an example:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/874077a787be380dd8aff24dfb521e9c?postId=90ad4eecc82d" data-media-id="874077a787be380dd8aff24dfb521e9c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





We just implemented this Person class. And as we’ve learned, to create the object person, we use the new method and pass the parameters.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/7666a88cf78cf9e3470c10b7e291d7d2?postId=90ad4eecc82d" data-media-id="7666a88cf78cf9e3470c10b7e291d7d2" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





So I created me! :) The [_tk_](https://medium.com/@leandrotk_/) object! Passing my name and my age. But how can I access this information? My first attempt is to call the name and age methods.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/1d336530ed7e839e31d7c88c4926b136?postId=90ad4eecc82d" data-media-id="1d336530ed7e839e31d7c88c4926b136" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





We can’t do it! We didn’t implement the name (and the age) method.

Remember when I said “In Ruby we use methods to directly access data?” To access the tk name and age we need to implement those methods on our Person class.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/0dd8076a15d46f5bcde4c009631b429b?postId=90ad4eecc82d" data-media-id="0dd8076a15d46f5bcde4c009631b429b" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Now we can directly access this information. With encapsulation we can ensure that the object (tk in this case) is only allowed to access name and age. The internal representation of the object is hidden from the outside.

### Inheritance: behaviors and characteristics

Certain objects have something in common. Behavior and characteristics.

For example, I inherited some characteristics and behaviors from my father — like his eyes and hair. And behaviors like impatience and introversion.

In object oriented programming, classes can inherit common characteristics (data) and behavior (methods) from another class.

Let’s see another example and implement it in Ruby.

Imagine a car. Number of wheels, seating capacity and maximum velocity are all attributes of a car.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b7afaee19d2e22dd2cf2cbd2977c676e?postId=90ad4eecc82d" data-media-id="b7afaee19d2e22dd2cf2cbd2977c676e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Our Car class implemented! :)





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/af79bab24da8edbc479a3e54cfcbb225?postId=90ad4eecc82d" data-media-id="af79bab24da8edbc479a3e54cfcbb225" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Instantiated, we can use all methods created! Nice!

In Ruby, we use the < operator to show a class inherits from another. An ElectricCar class can inherit from our Car class.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/56abc6282ee01f02ad52ca3c7be8c720?postId=90ad4eecc82d" data-media-id="56abc6282ee01f02ad52ca3c7be8c720" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Simple as that! We don’t need to implement the initialize method and any other method, because this class already has it (inherited from the Car class). Let’s prove it!





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/be31c8fcaccc177510c60343b5788aab?postId=90ad4eecc82d" data-media-id="be31c8fcaccc177510c60343b5788aab" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Beautiful!

### Module: A Toolbox

We can think of a module as a toolbox that contains a set of constants and methods.

An example of a Ruby module is Math. We can access the constant PI:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/f5cb5ebb528a1024211c5f71f0f7824c?postId=90ad4eecc82d" data-media-id="f5cb5ebb528a1024211c5f71f0f7824c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





And the .sqrt method:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/bae233234bd448dc51d9d47e2b2f15d5?postId=90ad4eecc82d" data-media-id="bae233234bd448dc51d9d47e2b2f15d5" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





And we can implement our own module and use it in classes. We have a RunnerAthlete class:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/471a7e73b64142eda70d0d463cfdbd3c?postId=90ad4eecc82d" data-media-id="471a7e73b64142eda70d0d463cfdbd3c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





And implement a module Skill to have the average_speed method.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/007ab80adfd7e85939ef305d82880c61?postId=90ad4eecc82d" data-media-id="007ab80adfd7e85939ef305d82880c61" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





How do we add the module to our classes so it has this behavior (average_speed method)? We just include it!





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/aecb34f238b9fafe446455711d76ebd5?postId=90ad4eecc82d" data-media-id="aecb34f238b9fafe446455711d76ebd5" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





See the “include Skill”! And now we can use this method in our instance of RunnerAthlete class.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d592b5c499bb7afe448018f84d7b8785?postId=90ad4eecc82d" data-media-id="d592b5c499bb7afe448018f84d7b8785" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Yay! To finish modules, we need to understand the following:

*   A module can have no instances.
*   A module can have no subclasses.
*   A module is defined by module…end.

### Wrapping Up!

We learned A LOT of things here!

*   How Ruby variables work
*   How Ruby conditional statements work
*   How Ruby looping & iterators work
*   Array: Collection | List
*   Hash: Key-Value Collection
*   How we can iterate through this data structures
*   Objects & Classes
*   Attributes as objects’ data
*   Methods as objects’ behavior
*   Using Ruby getters and setters
*   Encapsulation: hiding information
*   Inheritance: behaviors and characteristics
*   Modules: a toolbox











* * *







Congrats! You completed this dense piece of content about Ruby!

Have fun, keep learning, and always coding! If you have thoughts on this, be sure to leave a comment.








