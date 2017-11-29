---
author: Shashank Sharma
authorTwitter: https://twitter.com/sharma_sha2nk
authorFacebook: https://facebook.com/1045610945500245
title: "Create your own GitHub (kinda)"
subTitle: "In order to do any collaboration in Git, you’ll need to have a remote Git repository. Let’s cover step by step how you can create a Git s..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*BCZkmZR1_YzDZy22Vn4uUw.png
url: https://medium.freecodecamp.org/create-your-own-github-kinda-9b4581db675c
id: create-your-own-github-kinda-9b4581db675c
date: 2016-07-24T14:45:18.777Z
tags: [
  "Git",
  "Programming",
  "AWS",
  "DevOps",
  "Cloud Computing"
]
---
# Create your own GitHub (kinda)



![](https://cdn-images-1.medium.com/max/1600/1*BCZkmZR1_YzDZy22Vn4uUw.png)

Git Logo by [Jason Long](http://twitter.com/jasonlong)



In order to do any collaboration in Git, you’ll need to have a remote Git repository. Let’s cover step by step how you can create a Git server on an AWS EC2 instance.

First, let’s cover some of the basics.

#### Bare vs Non-bare repository

A git repository that has no working directory is called a “bare” repository. A “**bare**” **repository** in Git just contains the version control information and no working files (no tree). It doesn’t contain the special .git sub-directory. Instead, it contains all the contents of the .git sub-directory directly in the main directory itself.

<pre name="62a1" id="62a1" class="graf graf--pre graf-after--p">Create: _git init --bare_</pre>

<pre name="5cc1" id="5cc1" class="graf graf--pre graf-after--pre">Clone: _git clone --bare $URL_</pre>

**Non-bare repository** has a checked-out working tree with .git sub-directory.

<pre name="081f" id="081f" class="graf graf--pre graf-after--p">Create: _git init_</pre>

<pre name="3227" id="3227" class="graf graf--pre graf-after--pre">Clone: _git clone $URL_</pre>

You should use a non-bare repository to work locally and a bare repository as a central server/hub to share your changes with other people. For example, when you create a repository on github.com, it is created as a bare repository.

Bare repositories are smaller than non-bare repositories. As bare repository do not have working copy, any changes pushed to them won’t cause conflicts. Bare repository by convention uses names with the .git postfix.

#### The Protocols

Git can use four major protocols to transfer data: Local, HTTP, Secure Shell (SSH) and Git.

1\. _Local Protocol:_ the most basic protocol, where the remote repository can reside on any shared mounted disk. You can clone a local repository like this:

<pre name="4acb" id="4acb" class="graf graf--pre graf-after--p">git clone /var/local/repository</pre>

2. _HTTP protocol:_ This runs over standard HTTP/S ports. It can use things like username/password basic authentication rather than having to set up SSH keys. If you use this, you can use the same URL to view or clone the repository, like with Github.

3\. _SSH protocol:_ This is the most common transport protocol for Git when self-hosting.This is because SSH access to servers is already set up in most places — and if it isn’t, it’s relatively straight-forward to do.

4. _Git protocol:_ The Git protocol is often the fastest network transfer protocol available. This is a special daemon that comes packaged with Git. It listens on a dedicated port (9418) that provides a service similar to the SSH protocol, but with absolutely no authentication.

In depth explanation of these protocols is beyond the scope of this article. For more details, you can check [https://git-scm.com/book/en/v2/Git-on-the-Server-The-Protocols](https://git-scm.com/book/en/v2/Git-on-the-Server-The-Protocols).

#### Setting up Git server on an EC2 instance

Now lets start get started with the reason you’re here — to set up a Git server. If you haven’t already set up an EC2 instance with SSH access, follow [this guide](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html) to create one.

I am using an Ubuntu t2.micro instance for this exercise.

a) Login to your EC2 instance using SSH.

<pre name="605b" id="605b" class="graf graf--pre graf-after--p">-> ssh -i ~/.certs/cert.pem ubuntu@54.254.174.183</pre>

b) Install Git.

<pre name="06b4" id="06b4" class="graf graf--pre graf-after--p">-> sudo apt-get install git</pre>

c) Create a bare repository which will be your remote Git repository.

<pre name="6cfb" id="6cfb" class="graf graf--pre graf-after--p">-> mkdir gitserverexcersise.git  
-> cd gitserverexcersise.git  
-> git init --bare</pre>

This will create your bare empty repository. At this point of time you already have a Git repository ready to be cloned. But to clone this from your local system, you need to add your pem file to your ssh config.

d) Open another terminal and add this instance to SSH config. You can find SSH config file in home directory .ssh folder. If you don’t have this folder you can create one. And edit or create config file in preferable text editor.

<pre name="0109" id="0109" class="graf graf--pre graf-after--p">-> vi .ssh/config</pre>

Add entry for your instance like

<pre name="9f97" id="9f97" class="graf graf--pre graf-after--p"> _Host gitserver  
 HostName_ 54.254.174.183 _User ubuntu  
 IdentityFile ~/.certs/cert.pem_</pre>

And save.

e) Close this terminal and open new terminal. Now you should be able to login to ec2 instance using

<pre name="dff6" id="dff6" class="graf graf--pre graf-after--p">-> ssh gitserver</pre>

If you able to login then you can clone your repository to your local system using:

<pre name="5370" id="5370" class="graf graf--pre graf-after--p">-> git clone gitserver:gitserverexcersise.git</pre>

Congratulations! You have successfully setup a remote Git server and now can push and pull to that server.

#### Setting up GitWeb

Now that you have basic read/write and read-only access to your project, you may want to set up a simple web-based visualizer. Git comes with a CGI script called GitWeb that is sometimes used for this. Follow below steps to setup GitWeb.

a. Login to your EC2 instance

<pre name="6953" id="6953" class="graf graf--pre graf-after--p">-> ssh gitserver</pre>

b) Install apache2

<pre name="3aed" id="3aed" class="graf graf--pre graf-after--p">-> sudo apt-get update  
-> sudo apt-get install apache2</pre>

c) Install “make” as will be required for next step

<pre name="02be" id="02be" class="graf graf--pre graf-after--p">-> sudo apt-get install make</pre>

d) We will get the Git source code, which GitWeb comes with, and generate the custom CGI script:

<pre name="9421" id="9421" class="graf graf--pre graf-after--p">-> git clone git://git.kernel.org/pub/scm/git/git.git  
-> cd git  
-> make GITWEB_PROJECTROOT=”/home/ubuntu” prefix=/usr gitweb  
-> sudo cp -Rf gitweb /var/www/</pre>

GITWEB_PROJECTROOT is the location of your Git repositories.

e) Add VirtualHost for Apache

<pre name="729f" id="729f" class="graf graf--pre graf-after--p">-> cd /etc/apache2/sites-enabled/</pre>

Update conf (000-default.conf) to

<pre name="8947" id="8947" class="graf graf--pre graf-after--p">_<VirtualHost *:80>  
      DocumentRoot /var/www/gitweb  
      <Directory /var/www/gitweb>  
            Options +ExecCGI +FollowSymLinks +SymLinksIfOwnerMatch  
            AllowOverride All  
            order allow,deny  
            Allow from all  
            AddHandler cgi-script cgi  
            DirectoryIndex gitweb.cgi  
      </Directory>  
</VirtualHost>_</pre>

f) Load the mod_cgi module

<pre name="b860" id="b860" class="graf graf--pre graf-after--p">-> sudo a2enmod cgi</pre>

g) Restart apache

<pre name="17d1" id="17d1" class="graf graf--pre graf-after--p">-> sudo service apache2 restart</pre>

Congratulations! GitWeb is ready. Before you able to access the GitWeb on [http://54.254.174.183](http://54.254.174.183)/ (For you, it would be your instance’s public URL), there’s one last thing you need to do: allow TCP port 80 to open for your instance. You can do this by [changing your security group setting](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/authorizing-access-to-an-instance.html) for your instance.

If all of this seems too complicated for you, you can go with other alternatives like [GitLab](https://about.gitlab.com/). GitLab is a database-backed web application, so its installation is a bit more involved than some other git servers. Fortunately, this process is very well-documented and supported.

_If you liked the article and helped you setting up Git server, hit the heart down there and help others see it. Follow me for other such articles._








