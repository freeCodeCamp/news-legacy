---
author: Roman Gaponov
authorTwitter: https://twitter.com/djangostars
authorFacebook: none
title: "Python List Comprehensions VS Generator Expressions"
subTitle: "Do you know the difference between the following syntax?..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*jAHtog6Bg1U7J78fRgMrHg.png
url: https://medium.freecodecamp.org/python-list-comprehensions-vs-generator-expressions-cef70ccb49db
id: python-list-comprehensions-vs-generator-expressions-cef70ccb49db
date: 2017-06-29T01:54:59.401Z
tags: [
  "Programming",
  "Python",
  "Software Development",
  "Functional Programming",
  "Learning To Code"
]
---
# Python List Comprehensions VS Generator Expressions







![](https://cdn-images-1.medium.com/max/2000/1*jAHtog6Bg1U7J78fRgMrHg.png)







Do you know the difference between the following syntax?

`[x for x in range(5)]`

`(x for x in range(5))`

`tuple(range(5))`

This article will teach you about the distinctions here.

### **5 Facts About the Lists**

First off, a short review of lists (which are usually called “arrays” in other programming languages):

*   a list is a type of data that can be represented as a collection of elements. A simple list looks like this: `[0, 1, 2, 3, 4, 5]`
*   Lists take all possible types of data and combinations of data as their components:

    >>> a = 12>>> b = "this is text">>> my_list = [0, b, ['element', 'another element'], (1, 2, 3), a]>>> print(my_list)[0, 'this is text', ['element', 'another element'], (1, 2, 3), 12]

*   Lists can be indexed. You can get access to any individual element or group of elements using the following syntax:

    >>> a = ['red', 'green', 'blue']>>> print(a[0])red

*   Unlike strings, lists are mutable in Python. This means you can replace, add or remove elements.
*   You can create a list using a for loop and a **range()** function.

    >>> my_list = []>>> for x in range(10):...     my_list.append(x * 2)... >>> print(my_list)[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

### **OK — so what is List Comprehension?**

Often seen as a part of functional programming in Python, list comprehensions allow you to create lists with a for loop with less code.

Look at the implementation of the previous example using a list comprehension:

    >>> comp_list = [x * 2 for x in range(10)] >>> print(comp_list)[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

The above example is oversimplified to give you an idea of syntax. The same result may be achieved using a much simpler `list(range(0, 19, 2))` function.

You can also use a more complex modifier in the first part of a comprehension, or add a condition that will filter the list. Something like this:

    >>> comp_list = [x ** 2 for x in range(7) if x % 2 == 0] >>> print(comp_list)[4, 16, 36]

Another available option is to use list comprehension to combine several lists and create a list of lists. At first glance, the syntax seems to be complicated. It may help to think of lists as an outer and inner sequences.

It’s time to show the power of list comprehensions when you want to create a list of lists by combining two existing lists:

    >>> nums = [1, 2, 3, 4, 5]>>> letters = ['A', 'B', 'C', 'D', 'E']>>> nums_letters = [[n, l] for n in nums for l in letters]#the comprehensions list combines two simple lists in a complex list of lists.>>> print(nums_letters)>>> print(nums_letters)[[1, 'A'], [1, 'B'], [1, 'C'], [1, 'D'], [1, 'E'], [2, 'A'], [2, 'B'], [2, 'C'], [2, 'D'], [2, 'E'], [3, 'A'], [3, 'B'], [3, 'C'], [3, 'D'], [3, 'E'], [4, 'A'], [4, 'B'], [4, 'C'], [4, 'D'], [4, 'E'], [5, 'A'], [5, 'B'], [5, 'C'], [5, 'D'], [5, 'E']]>>>

Let’s try it with text or it’s correct to say string object.

    >>> iter_string = "some text">>> comp_list = [x for x in iter_string if x !=" "]>>> print(comp_list)['s', 'o', 'm', 'e', 't', 'e', 'x', 't']

The comprehensions are not limited to lists. You can create dicts and sets comprehensions as well.

    >>> dict_comp = {x:chr(65+x) for x in range(1, 11)}>>> type(dict_comp)<class 'dict'>  >>> print(dict_comp){1: 'B', 2: 'C', 3: 'D', 4: 'E', 5: 'F', 6: 'G', 7: 'H', 8: 'I', 9: 'J', 10: 'K'}>>> set_comp = {x ** 3 for x in range(10) if x % 2 == 0}>>> type(set_comp)<class 'set'>  >>> print(set_comp){0, 8, 64, 512, 216}

### The Difference Between Iterable and Iterator

It will be easier to understand the concept of generators if you get the idea of iterables and iterators.

Iterable is a “sequence” of data, you can iterate over using a loop. The easiest visible example of iterable can be a list of integers - `[1, 2, 3, 4, 5, 6, 7]`. It’s possible to iterate over other types of data like strings, dicts, tuples, sets, etc.

Basically, any object that has `iter()` method can be used as an iterable. You can check it using `hasattr()` function in the interpreter.

    >>> hasattr(str, '__iter__')True  >>> hasattr(bool, '__iter__')False

Iterator protocol is implemented whenever you iterate over a sequence of data. For example, when you use a for loop the following is happening on a background:

*   first `iter()` method is called on the object to converts it to an iterator object.
*   the`next()` method is called on the iterator object to get the next element of the sequence.
*   A `StopIteration` exception is raised when there are no elements left to call.

    >>> simple_list = [1, 2, 3]>>> my_iterator = iter(simple_list)>>> print(my_iterator)<list_iterator object at 0x7f66b6288630>  >>> next(my_iterator)1  >>> next(my_iterator)2  >>> next(my_iterator)3  >>> next(my_iterator)Traceback (most recent call last):    File "<stdin>", line 1, in <module>StopIteration

### Generator Expressions

In Python, generators provide a convenient way to implement the iterator protocol. Generator is an iterable created using a function with a yield statement.

The main feature of generator is evaluating the elements on demand. When you call a normal function with a return statement the function is terminated whenever it encounters a return statement.

In a function with a yield statement the state of the function is “saved” from the last call and can be picked up the next time you call a generator function.

    >>> def my_gen():...     for x in range(5):...             yield x

Generator expressions allow the creation of a generator on-the-fly without a yield keyword. But they don’t share the full power of generator created with a yield function.

The syntax and concept are similar to that of a list comprehension:

    >>> gen_exp = (x ** 2 for x in range(10) if x % 2 == 0) >>> for x in gen_exp:...     print(x)0  4  16  36  64

In terms of syntax, the only difference is that you use parenthesis instead of square brackets.

The type of data returned by list comprehensions and generator expressions differs.

    >>> list_comp = [x ** 2 for x in range(10) if x % 2 == 0]>>> gen_exp = (x ** 2 for x in range(10) if x % 2 == 0)>>> print(list_comp)[0, 4, 16, 36, 64]>>> print(gen_exp)<generator object <genexpr> at 0x7f600131c410>

The main advantage of generator over a list is that it take much less memory. We can check how much memory is taken by both types using `sys.getsizeof()` method.

Note: in Python 2 using a `range()` function can't actually reflect the advantage in term of size, as it still keeps the whole list of elements in memory. In Python 3, though, this example is viable since the `range()` returns a range object.

    >>> from sys import getsizeof>>> my_comp = [x * 5 for x in range(1000)]>>> my_gen = (x * 5 for x in range(1000))>>> getsizeof(my_comp)9024  >>> getsizeof(my_gen)88

The generator yields one item at a time — thus it is more memory efficient than a list.

For example, when you want to iterate over a list, Python reserves memory for the whole list. A generator won’t keep the whole sequence in memory, and will only “generate” the next element of the sequence on demand.

### Final Thoughts

The very first thing that might scare or discourage a newbie programmer is the scale of educational material. The trick here is to treat each concept as an option offered by language, you’re not expected to learn all the language concepts and modules all at once.

There are always different ways to solve the same task. Take it as one more tool to get the job done.

### If you found this post useful, please tap ❤ button below :)



![](https://cdn-images-1.medium.com/max/1600/1*VNKYLLBduHePzO3dpA_1sQ.gif)







<iframe data-width="800" data-height="400" width="700" height="350" src="https://medium.freecodecamp.org/media/892180a4a6e17efcebba6b88430bb493?postId=cef70ccb49db" data-media-id="892180a4a6e17efcebba6b88430bb493" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fupscri.be%2Fmedia%2Fform.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





This article originally published in [Django Stars Blog](http://djangostars.com/blog/list-comprehensions-and-generator-expressions/?utm_source=medium&utm_medium=frecodecamp&utm_campaign=botom)








