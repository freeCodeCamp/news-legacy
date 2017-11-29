---
author: Liz Rice
authorTwitter: https://twitter.com/lizrice
authorFacebook: none
title: "How to claw your way out of AWS Lambda function hell using the power of Docker"
subTitle: "When you’re building Lambda functions, it’s easy to get trapped in an “Invalid ELF header” nightmare. The problem is that your binaries a..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*HlfWIN7pNtK3ffZ-ll1cZQ.png
url: https://medium.freecodecamp.org/escaping-lambda-function-hell-using-docker-40b187ec1e48
id: escaping-lambda-function-hell-using-docker-40b187ec1e48
date: 2017-02-17T21:58:27.998Z
tags: [
  "Docker",
  "AWS",
  "Alexa",
  "Lambda",
  "Python"
]
---
# How to claw your way out of AWS Lambda function hell using the power of Docker







![](https://cdn-images-1.medium.com/max/2000/1*HlfWIN7pNtK3ffZ-ll1cZQ.png)

_Photo credit:_ [_Inferno_](https://flic.kr/p/76rbCN) _by_[_Ken_](https://www.flickr.com/photos/fractal_ken/)







When you’re building Lambda functions, it’s easy to get trapped in an “Invalid ELF header” nightmare. The problem is that your binaries are built for the wrong platform. Here’s what’s going on, and how you can fix it easily using Docker.

When most people get started with Lambda functions, they’ll use the online editor in the console to input their code. This is fine for your first example or two, but pretty soon you’ll want to do something wild and crazy like, y’know, import a library.

Over the past few weekends I’ve been working on [my first Alexa skill for an Amazon Echo](https://hackernoon.com/my-first-alexa-custom-skill-6a198d385c84#.qfxjk23ov) and I’ve reached that point where I want to use some third party code to add some additional functionality.



![](https://cdn-images-1.medium.com/max/1600/1*HyllRxG4b3qR6A5_Ed8qzg.png)

Your options for supplying the code for your Lambda function, as seen in the AWS Console



The online editor simply lets you edit a single file. If you want to refer to other files — including imported libraries — you can upload them in a ZIP file (Amazon call this a [deployment package](http://docs.aws.amazon.com/lambda/latest/dg/lambda-python-how-to-create-deployment-package.html)). But if you‘re working on a Mac or a Windows computer, there’s a catch.

When you use pip to install Python libraries on your laptop, it gives you binaries (.so files) that are built to run on your machine. But when the Lambda function runs in the AWS cloud it is going to be running on Linux — and binaries built for Mac (these are often called ‘darwin’ builds) or Windows won’t run on Linux (and vice versa).

If you upload the Mac version, you’ll see “invalid ELF header” logs when you try to test your Lambda function.



![](https://cdn-images-1.medium.com/max/1600/1*JWGr2DJqeATxGn2PQ-n3xQ.png)

Invalid ELF header indicates it’s the wrong binary format for the platform



So you’re going to need Linux versions of those library files. But what if you don’t have a Linux box to hand?

You could grab yourself an EC2 instance from Amazon (or a droplet on Digital Ocean, or any Linux VM of your preference) but to my mind that’s quite a performance, and could even cost you a little bit of money (especially if you forget to take the EC2 box down again when you don’t need it).

I think the easiest solution is to use Docker.

### The Docker approach

With [Docker](http://docker.com) you can very easily can run a Linux container locally on your Mac, install the Python libraries within the container so they are automatically in the right Linux format, and zip up the files ready to upload to AWS. You’ll need [Docker for Mac (or Windows)](https://www.docker.com/products/docker) installed first.

Spin up an Ubuntu container that can see the Lambda code you want to upload.

<pre name="175f" id="175f" class="graf graf--pre graf-after--p">docker run -v <directory with your code>:/working -it --rm ubuntu</pre>

*   The `-v`flag makes your code directory available inside the container in a directory called “working”.
*   The `-it`flag means you get to interact with this container.
*   The `--rm` flag means Docker will remove the container when you’re finished.
*   `ubuntu` is the name of an official container image containing, you guessed it, Ubuntu. If this container image isn’t already on your machine, Docker will download it for you.

You should now be inside the container at a shell prompt looking something like this:

<pre name="daac" id="daac" class="graf graf--pre graf-after--p">root@c1996f32a397:/#</pre>

Install pip and zip:

<pre name="c96a" id="c96a" class="graf graf--pre graf-after--p">$ apt-get update  
$ apt-get install python-pip  
$ apt-get install zip</pre>

Move into the working directory (you should be able to see your Lambda function code here):

<pre name="dbf7" id="dbf7" class="graf graf--pre graf-after--p">$ cd working</pre>

Use pip to get the library/ies you’re interested in. You can use the -t flag to tell pip to put the libraries here in the current directory, which will be more convenient later as it’s where the AWS deployment package wants them to be:

<pre name="f209" id="f209" class="graf graf--pre graf-after--p">$ pip install -t . <library></pre>

If you’re very curious, you can take a look to see what this installs. In my own case I installed the `editdistance` library, which gave me the following additional directories and files.

<pre name="4f87" id="4f87" class="graf graf--pre graf-after--p">editdistance:  
__init__.py __init__.pyc _editdistance.h bycython.so def.h</pre>

<pre name="5642" id="5642" class="graf graf--pre graf-after--pre">editdistance-0.3.1.dist-info:  
DESCRIPTION.rst INSTALLER METADATA RECORD WHEEL metadata.json top_level.txt</pre>

You can see that bycython.so file? This is the correct, Linux version of the binary that AWS was objecting to when I hit the Invalid ELF header (shown in the error log screenshot above).

Create the ZIP file with your Lambda code (in my case, a single file called lambda_function.py) and the libraries (for me, the two editdistance directories and their contents.

<pre name="719f" id="719f" class="graf graf--pre graf-after--p">$ zip linux-lambda.zip lambda_function.py</pre>

<pre name="7f9e" id="7f9e" class="graf graf--pre graf-after--pre">$ zip -r linux-lambda.zip edit*</pre>

The `-r` flag on zip tells it to recursively add the contents of directories.

Now you have an archive file called linux-lambda.zip which is ready to upload to AWS. And because the directory is mounted from the host (your Mac) into the container, you can simply upload the file into the console.

Back in the terminal type `exit` to quit the container, and it will be as if it never existed, except for the existence of the linux-lambda.zip file, which is still available on the host.

Upload the ZIP file in the console, save it and try running a test. Invalid ELF header error no more!











* * *







If this article helps you out, please hit the 💚 button to make it easier for other people to find it. If you really like it, why not go bananas and share it too?

I’ve written a few other posts about what I’m learning as I write my first Alexa skill, like this one where I [add database storage capabilities to my Lambda function](https://hackernoon.com/my-alexa-skill-with-storage-5adb1d097b88#.d0a1a7xha). If you find them useful, you might be interested in a book I’m writing called [Adventures with Alexa](http://leanpub.com/adventureswithalexa). Pick your own price!








