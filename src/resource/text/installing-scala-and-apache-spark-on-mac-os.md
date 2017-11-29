---
author: Jose Marcial Portilla
authorTwitter: none
authorFacebook: none
title: "How to Install Scala and Apache Spark on MacOS"
subTitle: "Here is a Step by Step guide to installing Scala and Apache Spark on MacOS...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*Pa7PO1v7bANI7C-eHMS_PQ.png
url: https://medium.freecodecamp.org/installing-scala-and-apache-spark-on-mac-os-837ae57d283f
id: installing-scala-and-apache-spark-on-mac-os-837ae57d283f
date: 2016-11-10T20:41:57.756Z
tags: [
  "Spark",
  "Scala",
  "Big Data",
  "Data Science",
  "Machine Learning"
]
---
# How to Install Scala and Apache Spark on MacOS

Here is a Step by Step guide to installing Scala and Apache Spark on MacOS.

#### Step 1: Get Homebrew

Homebrew makes your life a lot easier when it comes to installing applications and languages on a Mac OS. You can get Homebrew by following the instructions on it’s [website](http://brew.sh/).

Which basically just tells you to open your terminal and type:

    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

There are more detailed instructions on installing on the project’s [GitHub page.](https://github.com/Homebrew/brew/blob/master/docs/Installation.md#installation) Installing everything through Homebrew should automatically add all the appropriate PATH settings to your profile.

#### Step 2: Installing xcode-select

In order to install Java, Scala, and Spark through the command line we will probably need to install xcode-select and command line developer tools. Go to you terminal and type:

<pre name="6de2" id="6de2" class="graf graf--pre graf-after--p">xcode-select --install</pre>

You will get a prompt that looks something like this:



![](https://cdn-images-1.medium.com/max/1600/1*1-LZGva5ZZ58YASOhKX_-g.png)



Go ahead and select install.

#### Step 3: Use Homebrew to install Java

Scala is dependent on Java, you may or may not need to install it. The easiest way to install it is to just use HomeBrew:

In your terminal type:

<pre name="296e" id="296e" class="graf graf--pre graf-after--p">brew cask install java</pre>

You may need to enter your password at some point to complete the java installation. After running this Homebrew should have taken care of the Java install. Now we can move on to Scala.

#### Step 4: Use Homebrew to install Scala

Now with Homebrew installed go to your terminal and type:

<pre name="3cf4" id="3cf4" class="graf graf--pre graf-after--p">brew install scala</pre>

#### Step 5: Use Homebrew to install Apache Spark

Now with Scala installed go to your terminal and type:

<pre name="35fa" id="35fa" class="graf graf--pre graf-after--p">brew install apache-spark</pre>

Homebrew will now download and install Apache Spark, it may take some time depending on your internet connection.

#### Step 5: Start the Spark Shell

Now try this command:

<pre name="acc1" id="acc1" class="graf graf--pre graf-after--p">spark-shell</pre>

You should see a flood of text and warnings but eventually see something like this:

<pre name="1662" id="1662" class="graf graf--pre graf-after--p">Welcome to  
      ____              __  
     / __/__  ___ _____/ /__  
    _\ \/ _ \/ _ `/ __/  '_/  
   /___/ .__/\_,_/_/ /_/\_\   version 2.0.1  
      /_/</pre>

<pre name="81bc" id="81bc" class="graf graf--pre graf-after--pre">Using Scala version 2.11.8 (Java HotSpot(TM) 64-Bit Server VM, Java 1.8.0_102)  
Type in expressions to have them evaluated.  
Type :help for more information.</pre>

<pre name="3c00" id="3c00" class="graf graf--pre graf-after--pre">scala></pre>

You can confirm that it is working by typing the scala code:

<pre name="bed3" id="bed3" class="graf graf--pre graf-after--p">val s = "hello world"</pre>

Congratulations! You’re all set up!

_Common Issue: Setting PATH in bash._

Homebrew should have taken care of all of this, but in case you need to add spark to your PATH, you’ll want to use:

<pre name="e3cc" id="e3cc" class="graf graf--pre graf-after--p">export SPARK_HOME=/usr/local/Cellar/apache-spark/2.0.1/libexec  
export PYTHONPATH=/usr/local/Cellar/apache-spark/2.0.1/libexec/python/:$PYTHONP$</pre>

Just type that straight into your terminal.











* * *







I’m Jose Portilla, and I teach over 200,000 students about programming, data science, and machine learning on Udemy. You can check out all my courses [here](https://www.udemy.com/user/joseporitlla/).

If you’re interested in learning Python for Data Science and Machine learning, [check out my course here](https://www.udemy.com/python-for-data-science-and-machine-learning-bootcamp/?couponCode=2017PYTHONDSML15). (I also teach [Full Stack Web Development with Django!](https://www.udemy.com/python-and-django-full-stack-web-developer-bootcamp/?couponCode=2017DJANGO15))








