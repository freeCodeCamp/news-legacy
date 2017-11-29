---
author: Shubhi Asthana
authorTwitter: none
authorFacebook: none
title: "Series and DataFrame in Python"
subTitle: "A couple of months ago, I took the online course “Using Python for Research” offered by Harvard University on edX. While taking the cours..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*QH4RGlNwXUFnJSytytvb6A.jpeg
url: https://medium.freecodecamp.org/series-and-dataframe-in-python-a800b098f68
id: series-and-dataframe-in-python-a800b098f68
date: 2017-08-10T20:03:08.194Z
tags: [
  "Data Science",
  "Python",
  "Data",
  "Technology",
  "Women In Tech"
]
---
# Series and DataFrame in Python







![](https://cdn-images-1.medium.com/max/2000/1*QH4RGlNwXUFnJSytytvb6A.jpeg)







A couple of months ago, I took the online course “Using Python for Research” offered by Harvard University on edX. While taking the course, I learned many concepts of Python, NumPy, Matplotlib, and PyPlot. I also had an opportunity to work on case studies during this course and was able to use my knowledge on actual datasets. For more information about this program, check out [here](https://courses.edx.org/courses/course-v1:HarvardX+PH526x+3T2016/4bdcc373b7a944f8861a3f190c10edca/).

I learned two important concepts in this course — Series and DataFrame. I want to introduce these to you through a short tutorial.

To start with the tutorial, lets get the latest source code of Python from the official website [here](https://www.python.org/).

Once you’ve installed Python is installed, you’ll use a graphical user interface called [IDLE](https://www.python.org/downloads/) to work with Python.

Let’s import Pandas to our workspace. [Pandas](https://pandas.pydata.org/pandas-docs/stable/install.html) is a Python library that provides data structures and data analysis tools for different functions.

### **Series**

A Series is a one-dimensional object that can hold any data type such as integers, floats and strings. Let’s take a list of items as an input argument and create a Series object for that list.

<pre name="cba3" id="cba3" class="graf graf--pre graf-after--p">>>> import pandas as pd</pre>

<pre name="b1b1" id="b1b1" class="graf graf--pre graf-after--pre">>>> x = pd.Series([6,3,4,6])</pre>

<pre name="ad05" id="ad05" class="graf graf--pre graf-after--pre">>>> x</pre>

<pre name="cc0e" id="cc0e" class="graf graf--pre graf-after--pre">0 6</pre>

<pre name="7e9c" id="7e9c" class="graf graf--pre graf-after--pre">1 3</pre>

<pre name="38cc" id="38cc" class="graf graf--pre graf-after--pre">2 4</pre>

<pre name="4450" id="4450" class="graf graf--pre graf-after--pre">3 6</pre>

<pre name="3c3d" id="3c3d" class="graf graf--pre graf-after--pre">dtype: int64</pre>

The axis labels for the data as referred to as the index. The length of index must be the same as the length of data. Since we have not passed any index in the code above, the default index will be created with values `[0, 1, … len(data) -1]`

Lets go ahead and define indexes for the data.

<pre name="975c" id="975c" class="graf graf--pre graf-after--p">>>> x = pd.Series([6,3,4,6], index=[‘a’, ‘b’, ‘c’, ‘d’])</pre>

<pre name="5c3d" id="5c3d" class="graf graf--pre graf-after--pre">>>> x</pre>

<pre name="8991" id="8991" class="graf graf--pre graf-after--pre">a 6</pre>

<pre name="9a93" id="9a93" class="graf graf--pre graf-after--pre">b 3</pre>

<pre name="9e11" id="9e11" class="graf graf--pre graf-after--pre">c 4</pre>

<pre name="63be" id="63be" class="graf graf--pre graf-after--pre">d 6</pre>

<pre name="1886" id="1886" class="graf graf--pre graf-after--pre">dtype: int64</pre>

The index in left most column now refers to data in the right column.

We can lookup the data by referring to its index:

<pre name="f778" id="f778" class="graf graf--pre graf-after--p">>>> x[“c”]</pre>

<pre name="65fa" id="65fa" class="graf graf--pre graf-after--pre">4</pre>

Python gives us the relevant data for the index.

One example of a data type is the dictionary defined below. The index and values correlate to keys and values. We can use the index to get the values of data corresponding to the labels in the index.

<pre name="2ada" id="2ada" class="graf graf--pre graf-after--p">>>> data = {‘abc’: 1, ‘def’: 2, ‘xyz’: 3}</pre>

<pre name="d2cb" id="d2cb" class="graf graf--pre graf-after--pre">>>> pd.Series(data)</pre>

<pre name="a08c" id="a08c" class="graf graf--pre graf-after--pre">abc 1</pre>

<pre name="0e8c" id="0e8c" class="graf graf--pre graf-after--pre">def 2</pre>

<pre name="f29e" id="f29e" class="graf graf--pre graf-after--pre">xyz 3</pre>

<pre name="ebb9" id="ebb9" class="graf graf--pre graf-after--pre">dtype: int64</pre>

Another interesting feature in Series is having data as a scalar value. In that case, the data value gets repeated for each of the indexes defined.

<pre name="8a99" id="8a99" class="graf graf--pre graf-after--p">>>> x = pd.Series(3, index=[‘a’, ‘b’, ‘c’, ‘d’])</pre>

<pre name="e8f0" id="e8f0" class="graf graf--pre graf-after--pre">>>> x</pre>

<pre name="22e4" id="22e4" class="graf graf--pre graf-after--pre">a 3</pre>

<pre name="1a85" id="1a85" class="graf graf--pre graf-after--pre">b 3</pre>

<pre name="dcac" id="dcac" class="graf graf--pre graf-after--pre">c 3</pre>

<pre name="a2e9" id="a2e9" class="graf graf--pre graf-after--pre">d 3</pre>

<pre name="5cdb" id="5cdb" class="graf graf--pre graf-after--pre">dtype: int64</pre>

### **DataFrame**

A DataFrame is a two dimensional object that can have columns with potential different types. Different kind of inputs include dictionaries, lists, series, and even another DataFrame.

It is the most commonly used pandas object.

Lets go ahead and create a DataFrame by passing a NumPy array with datetime as indexes and labeled columns:

<pre name="0d8f" id="0d8f" class="graf graf--pre graf-after--p">>>> import numpy as np</pre>

<pre name="d9f4" id="d9f4" class="graf graf--pre graf-after--pre">>>> dates = pd.date_range(‘20170505’, periods = 8)</pre>

<pre name="85ea" id="85ea" class="graf graf--pre graf-after--pre">>>> dates</pre>

<pre name="8d38" id="8d38" class="graf graf--pre graf-after--pre">DatetimeIndex([‘2017–05–05’, ‘2017–05–06’, ‘2017–05–07’, ‘2017–05–08’,</pre>

<pre name="86c5" id="86c5" class="graf graf--pre graf--startsWithSingleQuote graf-after--pre">‘2017–05–09’, ‘2017–05–10’, ‘2017–05–11’, ‘2017–05–12’],</pre>

<pre name="c376" id="c376" class="graf graf--pre graf-after--pre">dtype=’datetime64[ns]’, freq=’D’)</pre>

<pre name="e90a" id="e90a" class="graf graf--pre graf-after--pre">>>> df = pd.DataFrame(np.random.randn(8,3), index=dates, columns=list(‘ABC’))</pre>

<pre name="9dc4" id="9dc4" class="graf graf--pre graf-after--pre">>>> df</pre>

<pre name="1071" id="1071" class="graf graf--pre graf-after--pre">A B C</pre>

<pre name="3221" id="3221" class="graf graf--pre graf-after--pre">2017–05–05 -0.301877 1.508536 -2.065571</pre>

<pre name="5c8b" id="5c8b" class="graf graf--pre graf-after--pre">2017–05–06 0.613538 -0.052423 -1.206090</pre>

<pre name="2718" id="2718" class="graf graf--pre graf-after--pre">2017–05–07 0.772951 0.835798 0.345913</pre>

<pre name="af65" id="af65" class="graf graf--pre graf-after--pre">2017–05–08 1.339559 0.900384 -1.037658</pre>

<pre name="8b96" id="8b96" class="graf graf--pre graf-after--pre">2017–05–09 -0.695919 1.372793 0.539752</pre>

<pre name="4465" id="4465" class="graf graf--pre graf-after--pre">2017–05–10 0.275916 -0.420183 1.744796</pre>

<pre name="5669" id="5669" class="graf graf--pre graf-after--pre">2017–05–11 -0.206065 0.910706 -0.028646</pre>

<pre name="03b7" id="03b7" class="graf graf--pre graf-after--pre">2017–05–12 1.178219 0.783122 0.829979</pre>

A DataFrame with a datetime range of 8 days gets created as shown above. We can view the top and bottom rows of the frame using `df.head` and `df.tail`:

<pre name="7bc3" id="7bc3" class="graf graf--pre graf-after--p">>>> df.head()</pre>

<pre name="7c9c" id="7c9c" class="graf graf--pre graf-after--pre">A B C</pre>

<pre name="d7b8" id="d7b8" class="graf graf--pre graf-after--pre">2017–05–05 -0.301877 1.508536 -2.065571</pre>

<pre name="b140" id="b140" class="graf graf--pre graf-after--pre">2017–05–06 0.613538 -0.052423 -1.206090</pre>

<pre name="936a" id="936a" class="graf graf--pre graf-after--pre">2017–05–07 0.772951 0.835798 0.345913</pre>

<pre name="2925" id="2925" class="graf graf--pre graf-after--pre">2017–05–08 1.339559 0.900384 -1.037658</pre>

<pre name="8038" id="8038" class="graf graf--pre graf-after--pre">2017–05–09 -0.695919 1.372793 0.539752</pre>

<pre name="b517" id="b517" class="graf graf--pre graf-after--pre">>>> df.tail()</pre>

<pre name="1a79" id="1a79" class="graf graf--pre graf-after--pre">A B C</pre>

<pre name="738e" id="738e" class="graf graf--pre graf-after--pre">2017–05–08 1.339559 0.900384 -1.037658</pre>

<pre name="2ef7" id="2ef7" class="graf graf--pre graf-after--pre">2017–05–09 -0.695919 1.372793 0.539752</pre>

<pre name="ba95" id="ba95" class="graf graf--pre graf-after--pre">2017–05–10 0.275916 -0.420183 1.744796</pre>

<pre name="6cdb" id="6cdb" class="graf graf--pre graf-after--pre">2017–05–11 -0.206065 0.910706 -0.028646</pre>

<pre name="2163" id="2163" class="graf graf--pre graf-after--pre">2017–05–12 1.178219 0.783122 0.829979</pre>

We can observe a quick statistic summary of our data too:

<pre name="57b8" id="57b8" class="graf graf--pre graf-after--p">>>> df.describe()</pre>

<pre name="e753" id="e753" class="graf graf--pre graf-after--pre">A B C</pre>

<pre name="de84" id="de84" class="graf graf--pre graf-after--pre">count 8.000000 8.000000 8.000000</pre>

<pre name="3362" id="3362" class="graf graf--pre graf-after--pre">mean 0.372040 0.729842 -0.109691</pre>

<pre name="d48a" id="d48a" class="graf graf--pre graf-after--pre">std 0.731262 0.657931 1.244801</pre>

<pre name="52e4" id="52e4" class="graf graf--pre graf-after--pre">min -0.695919 -0.420183 -2.065571</pre>

<pre name="8953" id="8953" class="graf graf--pre graf-after--pre">25% -0.230018 0.574236 -1.079766</pre>

<pre name="0e10" id="0e10" class="graf graf--pre graf-after--pre">50% 0.444727 0.868091 0.158633</pre>

<pre name="3829" id="3829" class="graf graf--pre graf-after--pre">75% 0.874268 1.026228 0.612309</pre>

<pre name="7c75" id="7c75" class="graf graf--pre graf-after--pre">max 1.339559 1.508536 1.744796</pre>

We can also apply functions to the data like cumulative sum, view histograms, merging DataFrames, concatenating and reshaping DataFrames.

<pre name="347e" id="347e" class="graf graf--pre graf-after--p">>>> df.apply(np.cumsum)</pre>

<pre name="75cc" id="75cc" class="graf graf--pre graf-after--pre">A B C</pre>

<pre name="40f1" id="40f1" class="graf graf--pre graf-after--pre">2017–05–05 -0.301877 1.508536 -2.065571</pre>

<pre name="0386" id="0386" class="graf graf--pre graf-after--pre">2017–05–06 0.311661 1.456113 -3.271661</pre>

<pre name="511f" id="511f" class="graf graf--pre graf-after--pre">2017–05–07 1.084612 2.291911 -2.925748</pre>

<pre name="6451" id="6451" class="graf graf--pre graf-after--pre">2017–05–08 2.424171 3.192296 -3.963406</pre>

<pre name="796d" id="796d" class="graf graf--pre graf-after--pre">2017–05–09 1.728252 4.565088 -3.423654</pre>

<pre name="cc42" id="cc42" class="graf graf--pre graf-after--pre">2017–05–10 2.004169 4.144905 -1.678858</pre>

<pre name="2b12" id="2b12" class="graf graf--pre graf-after--pre">2017–05–11 1.798104 5.055611 -1.707504</pre>

<pre name="25d0" id="25d0" class="graf graf--pre graf-after--pre">2017–05–12 2.976322 5.838734 -0.877526</pre>

You can read more details about these data structures [here](http://pandas.pydata.org/pandas-docs/stable/dsintro.html).








