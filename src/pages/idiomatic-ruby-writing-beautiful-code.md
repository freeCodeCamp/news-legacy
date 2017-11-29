---
author: TK
authorTwitter: https://twitter.com/LeandroTk_
authorFacebook: https://facebook.com/952511121459825
title: "Idiomatic Ruby: writing beautiful code"
subTitle: "Ruby is a beautiful programming language...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*9hd_8qR0CMZ8L0pVbFLjDw.png
url: https://medium.freecodecamp.org/idiomatic-ruby-writing-beautiful-code-6845c830c664
id: idiomatic-ruby-writing-beautiful-code-6845c830c664
date: 2017-09-28T21:07:27.597Z
tags: [
  "Ruby",
  "Programming",
  "Coding",
  "Startup",
  "Tech"
]
---
# Idiomatic Ruby: writing beautiful code



![](https://cdn-images-1.medium.com/max/1600/1*9hd_8qR0CMZ8L0pVbFLjDw.png)



Ruby is a beautiful programming language.

According to [Ruby](http://www.ruby-lang.org/en/)’s official web page, Ruby is a:

> **“**_dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.”_

Ruby was created by [Yukihiro Matsumoto](https://twitter.com/yukihiro_matz), a Japanese software engineer. Since 2011, he has been the chief designer & software engineer for Ruby at [Heroku](https://www.heroku.com/).

Matsumoto has often said that he tries **to make Ruby natural, not simple**, in a way that mirrors life.

> “Ruby is simple in appearance, but is very complex inside, just like our human body” — Yukihiro Matsumoto

I feel the same way about Ruby. It is a complex but very natural programming language, with a beautiful and intuitive syntax.

With more intuitive and faster code, we are able to build better software. In this post, I will show you how I express my thoughts (aka code) with Ruby, by using snippets of code.

### Expressing my thoughts with array methods

#### Map

Use the **map** method to simplify your code and get what you want.

The method **map** returns a new array with the results of running a block once for every element in enum.

Let’s try it:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/3afe341cdd9c9af63af15f94b06188f8?postId=6845c830c664" data-media-id="3afe341cdd9c9af63af15f94b06188f8" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Simple as that.

But when you begin coding with Ruby, it is easy to always use the **each** iterator.

The **each** iterator as shown below





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/df06911fb7020dc831f25c9e4ef4280d?postId=6845c830c664" data-media-id="df06911fb7020dc831f25c9e4ef4280d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Can be simplified with **map** in a single beautiful line of code:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/615bf65785c2baf9a27106ad36e182b9?postId=6845c830c664" data-media-id="615bf65785c2baf9a27106ad36e182b9" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Or even better (and faster):





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/5cafee85249196fa946e192b2ee5a2d3?postId=6845c830c664" data-media-id="5cafee85249196fa946e192b2ee5a2d3" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





#### Select

And when you’re used to coding with **map**, sometimes your code can be like this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/3261346447d4945b5823de34a840640a?postId=6845c830c664" data-media-id="3261346447d4945b5823de34a840640a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Using **map** to select only the even numbers will return the**nil** object as well. Use the **compact** method to remove all **nil** objects.

And ta-da, you’ve selected all the even numbers.

Mission accomplished.

Come on, we can do better than this! Did you hear about the **select** method from enumerable module?





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/efff6c3edc49abe0c58250f3098eb9d9?postId=6845c830c664" data-media-id="efff6c3edc49abe0c58250f3098eb9d9" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Just one line. Simple code. Easy to understand.

#### **Bonus**





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/604667ebbd51e6e94b183a2f02413017?postId=6845c830c664" data-media-id="604667ebbd51e6e94b183a2f02413017" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





#### Sample

Imagine that you need to get a random element from an array. You just started learning Ruby, so your first thought will be, “Let’s use the **random** method,” and that’s what happens:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/744e9e0bec328f276d406b0258a57f7d?postId=6845c830c664" data-media-id="744e9e0bec328f276d406b0258a57f7d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Well, we can understand the code, but I’m not sure if it is good enough. And what if we use the **shuffle** method?





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/921bb7fefa3e7dccd371830228144376?postId=6845c830c664" data-media-id="921bb7fefa3e7dccd371830228144376" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Hmm. I actually prefer to use **shuffle** over **rand**. But when I discovered the **sample** method, it made so much more sense:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/0b52f94b948c080de736ae955dfea1fc?postId=6845c830c664" data-media-id="0b52f94b948c080de736ae955dfea1fc" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Really, really simple.

Pretty natural and intuitive. We ask a **sample** from an array and the method returns it. Now I’m happy.

What about you?

### Expressing my thoughts with Ruby syntax

As I mentioned before, I love the way Ruby lets me code. It’s really natural for me. I’ll show parts of the beautiful Ruby syntax.

#### Implicit return

Any statement in Ruby returns the value of the last evaluated expression. A simple example is the **getter** method. We call a method and expect some value in return.

Let’s see:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/53cd3ec9fd077e4e57dd51aff72631fb?postId=6845c830c664" data-media-id="53cd3ec9fd077e4e57dd51aff72631fb" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





But as we know, Ruby always returns the last evaluated expression. Why use the **return** statement?





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/4eb7d998dd2425eb73499022a0c45e54?postId=6845c830c664" data-media-id="4eb7d998dd2425eb73499022a0c45e54" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





After using Ruby for 3 years, I feel great using almost every method without the **return** statement.

#### Multiple assignments

Ruby allows me to assign multiple variables at the same time. When you begin, you may be coding like this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/64679fb5ad814fef3de0872d6fe0be1c?postId=6845c830c664" data-media-id="64679fb5ad814fef3de0872d6fe0be1c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





But why not assign multiple variables at the same time?





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/389049824556595721736b586d16051d?postId=6845c830c664" data-media-id="389049824556595721736b586d16051d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Pretty awesome.

#### Methods that ask questions (also called predicates)

One feature that caught my attention when I was learning Ruby was the **question mark (?)** method, also called the **predicates** methods. It was weird to see at first, but now it makes so much sense. You can write code like this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/206f014452cc90215f0deba4185b6b0f?postId=6845c830c664" data-media-id="206f014452cc90215f0deba4185b6b0f" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Ok… nothing wrong with that. But let’s use the question mark:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/f62050481557b66305000617ae1b1140?postId=6845c830c664" data-media-id="f62050481557b66305000617ae1b1140" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





This code is much more expressive, and I expect the method’s answer to return either a **true** or **false** value.

A method that I commonly use is **any?** It’s like asking an array if it has **any**thing inside it.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/333b21dc92c89fe4d32149735132d431?postId=6845c830c664" data-media-id="333b21dc92c89fe4d32149735132d431" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





#### Interpolation

For me string interpolation is more intuitive than string concatenation. Period. Let’s see it in action.

An example of a string concatenation:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/251894e3ea41f181a29d3d966d0fda65?postId=6845c830c664" data-media-id="251894e3ea41f181a29d3d966d0fda65" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





An example of a string interpolation:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c91d6f70f7ed3b0dab32ebdcbe182656?postId=6845c830c664" data-media-id="c91d6f70f7ed3b0dab32ebdcbe182656" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





I prefer string interpolation.

What do you think?

#### The if statement

I like to use the **if** statement:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b6db16ba62119dc1ae22de2dcde97c2c?postId=6845c830c664" data-media-id="b6db16ba62119dc1ae22de2dcde97c2c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Pretty nice to code like that.

Feels really natural.

#### The try method (with Rails mode on)

The **try** method invokes the method identified by the symbol, passing it any arguments and/or the block specified. This is similar to Ruby’s **Object#send.** Unlike that method, **nil** will be returned if the receiving object is a **nil** object or **NilClass.**

Using **if and unless** condition statement:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/213c01fc1250d0c8751ec777c3c0c716?postId=6845c830c664" data-media-id="213c01fc1250d0c8751ec777c3c0c716" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Using the **try** method:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d9d986cde20a03185f8ba77ba10e7daa?postId=6845c830c664" data-media-id="d9d986cde20a03185f8ba77ba10e7daa" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Since Ruby 2.3, we can use Ruby’s safe navigation operator **(&.)** instead of Rails **try** method.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/73330027a0ae72bc3032acc072084747?postId=6845c830c664" data-media-id="73330027a0ae72bc3032acc072084747" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





#### Double pipe equals (**||=)** / memoization

This feature is so C-O-O-L. It’s like caching a value in a variable.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/76b300adf847c6bec0f4d4c8f3dfe665?postId=6845c830c664" data-media-id="76b300adf847c6bec0f4d4c8f3dfe665" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





You don’t need to use the **if** statement ever. Just use double pipe equals **(||=)** and it’s done.

Simple and easy.

#### Class static method

One way I like to write Ruby classes is to define a **static** method (class method).





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/fe6787ca1ad9561a5fde9f8dfa8267ae?postId=6845c830c664" data-media-id="fe6787ca1ad9561a5fde9f8dfa8267ae" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Simple. Beautiful. Intuitive.

What happens in the background?





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/7833c6d37329332e4fc5737aa91668cb?postId=6845c830c664" data-media-id="7833c6d37329332e4fc5737aa91668cb" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





The **self.call** method initializes an instance, and this object calls the **call** method. [**Interactor design pattern**](https://github.com/collectiveidea/interactor) uses it.

#### Getters and setters

For the same **GetSearchResult** class, if we want to use the params, we can use the @params





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2d0404580e20c81b86647ad57bfbe6c6?postId=6845c830c664" data-media-id="2d0404580e20c81b86647ad57bfbe6c6" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





We define a **setter** and **getter:**





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/dd04e145d12eb5da75ca58c902a96749?postId=6845c830c664" data-media-id="dd04e145d12eb5da75ca58c902a96749" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Or we can define **attr_reader**, **attr_writer,** or **attr_accessor**





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/7ac3fc5e345534d6a2b6b451ef64f8a9?postId=6845c830c664" data-media-id="7ac3fc5e345534d6a2b6b451ef64f8a9" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Nice.

We don’t need to define the **getter** and **setter** methods. The code just became simpler, just what we want.

#### Tap

Imagine you want to define a **create_user** method. This method will instantiate, set the parameters, and save and return the user.

Let’s do it.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/64fbf2af3c433a75078fe390299235ec?postId=6845c830c664" data-media-id="64fbf2af3c433a75078fe390299235ec" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Simple. Nothing wrong here.

So now let’s implement it with the **tap** method





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/921280ee919416a4e0cc7503b44e8d0a?postId=6845c830c664" data-media-id="921280ee919416a4e0cc7503b44e8d0a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5835798%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





You just need to worry about the user parameters, and the **tap** method will return the user object for you.











* * *







### That’s it

We learned I write idiomatic Ruby by coding with

*   array methods
*   syntax

We also learned how Ruby is beautiful and intuitive, and runs even faster.

And that’s it, guys! I will be updating and including more details to my [blog](https://medium.com/@leandrotk_/). The idea is to share great content, and the community helps to improve this post! ☺

I hope you guys appreciate the content and learned how to program beautiful code (and better software).











* * *







This post appeared first [**here**](https://medium.com/the-renaissance-developer/idiomatic-ruby-1b5fa1445098) on my [**Renaissance Developer publication**](https://medium.com/the-renaissance-developer).











* * *







Have fun, keep learning, and always keep coding!

My [Instagram](https://www.instagram.com/renaissance_dev/), [Twitter](https://twitter.com/LeandroTk_), [Github](https://github.com/LeandroTk) & [LinkedIn](http://br.linkedin.com/in/leandrotk/). ☺








