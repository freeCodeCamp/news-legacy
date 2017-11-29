---
author: Kevin Kononenko
authorTwitter: https://twitter.com/devmanual
authorFacebook: https://facebook.com/10203738544564981
title: "CSS Selectors Explained By Going Car Shopping"
subTitle: "If you have ever seen a car dealership, then you can understand CSS selectors."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*EQ87S6jXZiyDzCVQMJ6mPw.jpeg
url: https://medium.freecodecamp.org/css-selectors-explained-by-going-car-shopping-51a383f6eb4b
id: css-selectors-explained-by-going-car-shopping-51a383f6eb4b
date: 2016-11-21T06:07:05.844Z
tags: [
  "CSS",
  "Web Development",
  "Design",
  "Programming",
  "Learning To Code"
]
---
# CSS Selectors Explained By Going Car Shopping

## If you have ever seen a car dealership, then you can understand CSS selectors.

When you step onto the lot of a car dealership, you’re instantly surrounded by different cars, colors, and years.

And of course there’s that aggressive salesperson. But let’s leave them out this simulation.

Cars — and car features — can be categorized using the same system as CSS selectors. So if you can understand the different ways to segment cars in a dealership lot, he market, then you can understand CSS selectors.



![](https://cdn-images-1.medium.com/max/1600/1*lwrVtbNNgHdeYnat-UtaKg.png)



Let’s start off by imaging a car dealership, using HTML:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/172960fc032ad241ee5b37a890c48378?postId=51a383f6eb4b" data-media-id="172960fc032ad241ee5b37a890c48378" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F8312841%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Now we’re going to cover four different ways of styling your HTML elements:

1.  By the type of element i.e.  is really a car of some sort. It could be a sedan, truck, or a convertible. But those are just variations of cars.

If we wanted to add styling to every car, we would have to think about the things that every car on this lot has in common.

Here’s some example CSS:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/f2ccab586f1cb2218654397a700a5131?postId=51a383f6eb4b" data-media-id="f2ccab586f1cb2218654397a700a5131" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F8312841%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





All right, I’m making this basic to start, OK? And yes, I made up some CSS properties to make this work.

Anyway, it would be fair to say that every car in this lot is made of steel, has 4 wheels, and has a maximum height of 9 feet. So every time we add a 



<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/6214d6ddcef1cf83a69b5586166c80b4?postId=51a383f6eb4b" data-media-id="6214d6ddcef1cf83a69b5586166c80b4" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F8312841%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





What are some properties that the seats and windows might have? They must be shared by all windows and seats! We’ll do a deep dive on this later in this article.

#### Using Class

Check out our first HTML snippet, which covers all of the cars on the lot. You can see that each car 



<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/e98c58d87d4b06dcf6ac8f49eea93f15?postId=51a383f6eb4b" data-media-id="e98c58d87d4b06dcf6ac8f49eea93f15" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F8312841%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





What if we have the class “crewCab”? Trucks with crew cabs have 2 rows of seats, with 5 seats total. So, we might want to assign this class specifically to trucks. We can combine classes by stringing them together.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c2f4e449ab4d3ff8721886f98b18780b?postId=51a383f6eb4b" data-media-id="c2f4e449ab4d3ff8721886f98b18780b" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F8312841%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Classes are a more specific way to reference HTML elements. So, let’s say that all vehicles are made of steel, by default. But you want some vehicles to be made of aluminum. You can create an “aluminum” class that will override the material property of all members of the class.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/86447ed1e55f34567e1ba7d06ab96b2e?postId=51a383f6eb4b" data-media-id="86447ed1e55f34567e1ba7d06ab96b2e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F8312841%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





#### Using ID

HTML elements can have an ID. This is the most specific way to reference a single element, and it overrides all other styles. This unique identifier is kind of like the element’s license plate.



![](https://cdn-images-1.medium.com/max/1600/1*U76THFEJoQcBTmFzX7MYUA.png)



So let’s say you have one car and it has the license plate “123 XYZ”. This car has a unique purple color, because for some reason the owner demanded it. Here is that one element in CSS.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/1182e9a7f28b9cf038b63ae2f3cf782a?postId=51a383f6eb4b" data-media-id="1182e9a7f28b9cf038b63ae2f3cf782a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F8312841%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Elements have a 1-to-1 relationship with IDs. Just like with cars and license plates, no two cars can have the same license plate. This is also the most powerful way to identify an element, so you can create unique exceptions to all other rules that an element should be obeying.





<iframe data-width="800" data-height="400" width="700" height="350" src="https://medium.freecodecamp.org/media/49d3eea55442a7cdcaff56ecc0af5a9e?postId=51a383f6eb4b" data-media-id="49d3eea55442a7cdcaff56ecc0af5a9e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fupscri.be%2Fmedia%2Fform.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





#### Relationships Between Elements

Let’s say you want to make sure that cars with the “leatherSeats” class have seats made out of leather. Check out the second HTML snippet from the “Type of Element” section.



![](https://cdn-images-1.medium.com/max/1600/1*jcGxiBfdyRy1t7mr4mlrOg.png)



You could have also given each  and its children.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ab211feed50a318d51cd397f17b89dd5?postId=51a383f6eb4b" data-media-id="ab211feed50a318d51cd397f17b89dd5" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F8312841%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





The CSS above will select all elements with class “seat” within a “leatherSeats” container.

Now let’s say you want to make sure that the front passenger seat has seat warmers. You can use the “~” selector, which is known as the sibling selector. It allows you to assign styles to elements relative to their neighbors.

So you can say:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/14ba458a04abce23b46703fa3959d8c2?postId=51a383f6eb4b" data-media-id="14ba458a04abce23b46703fa3959d8c2" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F8312841%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Here’s one last example. Let’s say one particular make and model had a bizarre, random feature. For example, a 2008 Chevy truck might have had DVD players in the back seats.

Here’s how you would turn that into CSS:

1.  You need to start with multiple classes, since this is a highly specific type of car. This might be “div.truck.chevy.year2008”.
2.  Then, think about how you will be able to select the back seats, specifically. You could give the row an extra class, like “.backRow”. Or, you could use the [:last-child selector](http://www.w3schools.com/cssref/css_selectors.asp).
3.  Finally, you need to select the seats themselves.

Answer:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/1621ab8542f0c9cb0e3da1275169b5cf?postId=51a383f6eb4b" data-media-id="1621ab8542f0c9cb0e3da1275169b5cf" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F8312841%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>















* * *







If you enjoyed this post, you may also enjoy my [other explanations](https://www.rtfmanual.io/guides/) of challenging CSS and JavaScript topics, such as positioning, Model-View-Controller, and callbacks.

And if you think this might help other people in the same position as you, give it a “heart”!








