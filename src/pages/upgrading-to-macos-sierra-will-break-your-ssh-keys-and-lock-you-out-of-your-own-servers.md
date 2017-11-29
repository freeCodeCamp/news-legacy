---
author: Quincy Larson
authorTwitter: https://twitter.com/ossia
authorFacebook: https://facebook.com/10100956570023241
title: "Upgrading to macOS Sierra will break your SSH keys and lock you out of your own servers."
subTitle: "Do not upgrade to macOS Sierra if you have a cloud server (AWS, Digital Ocean, etc.) Read this post first. It will walk you through safel..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*4BPoUrWcf67bdaKyZPARMg.png
url: https://medium.freecodecamp.org/upgrading-to-macos-sierra-will-break-your-ssh-keys-and-lock-you-out-of-your-own-servers-f413ac96139a
id: upgrading-to-macos-sierra-will-break-your-ssh-keys-and-lock-you-out-of-your-own-servers-f413ac96139a
date: 2016-10-11T00:54:24.602Z
tags: [
  "Apple",
  "Life Lessons",
  "Programming",
  "Tech",
  "Security"
]
---
# Upgrading to macOS Sierra will break your SSH keys and lock you out of your own servers.







![](https://cdn-images-1.medium.com/max/2000/1*4BPoUrWcf67bdaKyZPARMg.png)







Do not upgrade to macOS Sierra if you have a cloud server (AWS, Digital Ocean, etc.) Read this post first. It will walk you through safely updating to Sierra and updating your SSH keys.

Like many developers, I got a notice from Apple bugging me to install its new macOS Sierra. I clicked “remind me tomorrow” a few days in a row. Then I finally caved one night before going to bed.

When I woke up, I was no longer able to access Free Code Camp’s servers. It took me a while to realize what had happened. Luckily [BerkeleyTrue](https://medium.com/@BerkeleyTrue) hadn’t upgraded yet, and was able to add my new SSH keys.

It turns out Apple decided to quietly force 2048-bit RSA keys on everyone, which has been a mild inconvenience for some, and a confused panic for others.

If you’re wondering why RSA keys are more secure than the old DSA keys, [they aren’t inherently so](http://security.stackexchange.com/a/5100). But DSA keys can usually only be 1024 bits, while RSA keys can be longer, which is the case with Sierra’s default 2048-bit RSA keys. Those extra bits make these new keys substantially harder to crack.

Let’s set up your new 2048-bit RSA SSH key.

### Step #1: delete your old key and create a new one

First, let’s check and make sure you indeed need a new key.

Open up your terminal and type:

<pre name="86f0" id="86f0" class="graf graf--pre graf-after--p">ssh-keygen -l -f ~/.ssh/id_rsa.pub</pre>

If the prompt responds with a string that starts with “2048 SHA256” you’re done and don’t need to take any further action.

Otherwise, create a new key by running:

<pre name="b91b" id="b91b" class="graf graf--pre graf-after--p">ssh-keygen -t rsa</pre>

The prompt should respond with:

<pre name="9183" id="9183" class="graf graf--pre graf-after--p">Generating public/private rsa key pair.  
Enter file in which to save the key (/Users/freecodecamp/.ssh/id_rsa):</pre>

You can just press enter to save it in the default place. Note that this will overwrite your old (broken) key.

<pre name="3b8d" id="3b8d" class="graf graf--pre graf-after--p">Enter passphrase (empty for no passphrase):</pre>

You can leave this blank or add a password for a little extra security (and a lot more typing).

Then you’ll get with a cool random “art” that always seems to be shaped like a Christmas tree:



![](https://cdn-images-1.medium.com/max/1600/1*NkRrhr4WF93hhtIKS2eIrg.png)

This was created for this article — it’s not the one I use.



Now make sure your key has the right access permissions by running:

<pre name="f6a9" id="f6a9" class="graf graf--pre graf-after--p">sudo chmod 600 ~/.ssh/id_rsa</pre>

You can check the contents of your public key by running:

<pre name="1a29" id="1a29" class="graf graf--pre graf-after--p">cat ~/.ssh/id_rsa.pub</pre>

Which should return something like:

<pre name="9342" id="9342" class="graf graf--pre graf-after--p">ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDijWK+s3ybgzEdaJ5LneNU11BsIyoNS51SV11Vi5auPJW9+Ji6OUSJ9OguZh4T019ULyFF/Qq66fhH9TvMzw80lTNoChgTRMpjs2+Qg75yTINKSde+Gv4TK6UvNw6EINORcTpb32Im9hgtdTj6WqJ/hCbSltv7IfFZU5ChV7SxTaoNZTa9M5H3N8YdQ/aGt3puh222Cq5DTjV8fRWaNVvjVQRe/huHAHEzEUr1T/eTlXtoFtGeC1z+pLfYllVzizoS7tyuUksfgqox1jJJMpaZ25V/R/p/MDUc936za/8zgB8OQFRBbrP6JvXXN99DLcvs9coz9vfb2GCVrhxi1aJ5 quincy@FreeCodeCamp</pre>

You’ll need to put this key on your server. To ensure you copy all of it, I recommend you can copy it directly to your clipboard by running:

<pre name="47fe" id="47fe" class="graf graf--pre graf-after--p">pbcopy < ~/.ssh/id_rsa.pub</pre>

### Step #2: add your new public key to your server

If you can SSH into your server without your key, then try to gain access using a password if you have one.

Otherwise you’ll need to ask someone else who has access to the server to do this for you.

If you’ve disabled password access to your server (which many experts would recommend for security reasons), you may be able to [temporarily re-enable password access](http://jeffreifman.com/2016/10/01/fix-macos-sierra-upgrade-breaking-ssh-keys/).

Once you have root access to your server — assuming it’s a Linux server — you just need to run this command:

<pre name="0499" id="0499" class="graf graf--pre graf-after--p">nano ~/.ssh/authorized_keys</pre>

This will open up your authorized key file using the minimalist text editor “nano” that is included with most Linux distributions. Or you could use Vim.





<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/8cf3de156ca5d66d462c93cd24bfa776?postId=f413ac96139a" data-media-id="8cf3de156ca5d66d462c93cd24bfa776" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F477397164453527552%2Fuh2w1u1o_bigger.jpeg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Then paste in your public SSH key from earlier. Hit control+o to save your changes, then control+x to quit nano.

Disconnect from your server. Now you’re ready to try logging in using your new SSH key.

### Step #3: SSH into your server

Run this command to SSH in, replacing root@0.0.0.0 with your server’s login and IP address:

<pre name="c91e" id="c91e" class="graf graf--pre graf-after--p">ssh -i ~/.ssh/id_rsa root@0.0.0.0</pre>

You should gain normal SSH access to your to your server, without needing to enter a password.

Congratulations! You’re back where you were yesterday, except now Apple will quit bugging you about upgrading your operating system. 😜











* * *







_If you found this helpful, click the💚 below so other people will see this here on Medium._



![](https://cdn-images-1.medium.com/max/1600/1*31StU5CNIHk8VDkSHWO6nA.gif)










