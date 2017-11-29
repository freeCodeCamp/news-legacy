---
author: Ritesh Shrivastav
authorTwitter: https://twitter.com/riteshshrv
authorFacebook: https://facebook.com/10205542034218846
title: "7 Git Hacks You Just Can’t Ignore"
subTitle: "Git has probably saved more developers’ jobs than any other technology. As long as you frequently save your work with Git, you will alway..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*_RzIXapqnP4ZZ9twx5_KSg.jpeg
url: https://medium.freecodecamp.org/7-git-hacks-you-just-can-t-ignore-41aea137727a
id: 7-git-hacks-you-just-can-t-ignore-41aea137727a
date: 2015-11-11T22:17:28.467Z
tags: [
  "Git",
  "Programming",
  "Tech",
  "Productivity",
  "Self Improvement"
]
---
# 7 Git Hacks You Just Can’t Ignore







![](https://cdn-images-1.medium.com/max/2000/1*_RzIXapqnP4ZZ9twx5_KSg.jpeg)







Git has probably saved more developers’ jobs than any other technology. As long as you frequently save your work with Git, you will always be able to roll back to how your code was in the past, thus reversing those late night mistakes.

This said, Git’s command line interface is notoriously difficult to master. Let’s explore 7 tips for getting the most out of Git.



![](https://cdn-images-1.medium.com/max/1600/0*n2QYqEj3coS_yKNl.png)

photo credit: [_xkcd_](http://xkcd.com/)



Usually 70% of using Git is only _add_, _commit_, _branch_ and _push / pull_. Most people are familiar with the flow that always moves in one direction. Ever wondered how to go back or undo steps if you added wrong files to the _repo_ or made a _commit_ with wrong message to a wrong _branch_?

If you are one of those who follows what is shown in the comic above, then this list of Git hacks is for you.

#### **1\. Edit an incorrect commit message**

The commit message is going to live for a very long time in your code base, so you definitely want it to be something which correctly defines the changes.

This command will let you edit the most recent commit message. You need to make sure that there are no working copy changes or they too may get committed.

<pre name="e1fd" id="e1fd" class="graf graf--pre graf-after--p">$ git commit --amend -m ”YOUR-NEW-COMMIT-MESSAGE”</pre>

In case you’ve already _pushed_ your _commit_ to the remote branch then you need to force push the commit with this command:

<pre name="29e3" id="29e3" class="graf graf--pre graf-after--p">$ git push <remote> <branch> --force</pre>

You can follow this [Stack Overflow answer](http://stackoverflow.com/questions/179123/edit-an-incorrect-commit-message-in-git/179147#179147) for additional information.

#### **2\. Undo ‘git add’ before committing**

What if you added some wrong files to your staging area, but did not make a commit? You can undo this by a simple command. If there’s only one file that needs to be removed then:

<pre name="6505" id="6505" class="graf graf--pre graf-after--p">$ git reset <filename></pre>

or if you want to unstage all your uncommitted changes:

<pre name="fa4e" id="fa4e" class="graf graf--pre graf-after--p">$ git reset</pre>

You can follow this [Stack Overflow answer](http://stackoverflow.com/questions/348170/undo-git-add-before-commit/348234#348234) for additional information.

#### **3\. Undo your most recent commit**

Sometimes you accidentally committed the wrong files or missed something in the first place. Here’s a three-step process to cover you in such cases.

<pre name="288b" id="288b" class="graf graf--pre graf-after--p">$ git reset --soft HEAD~1  
# make changes to your working files as necessary  
$ git add -A .  
$ git commit -c ORIG_HEAD</pre>

When you execute the first command, Git will move your HEAD pointer back to the commit you made before making this one, so that you can move files or make changes as necessary.

Then you add all your changes, and when you finally execute the last command, Git will pop open your default text editor with the same commit message. You may edit this message if you want, or you can override this step altogether by using ‘-C’ instead of ‘-c’ in the final command.







![](https://cdn-images-1.medium.com/max/2000/1*eiuAyfDRLIr6ZKutQWbJZQ.gif)

Git + spaghetti = spagitty







#### **4\. Revert your g_it repo_ to a previous commit**

‘Reverting’ can make a lot of senses in a many cases — especially if you’ve completely messed up a piece of code. The most common case is when you want a go back in time and explore a previous state of your codebase, then return back to your present state. This can be done by:

<pre name="5a4b" id="5a4b" class="graf graf--pre graf-after--p">$ git checkout <SHA></pre>

‘_<SHA>_‘ is the first 8–10 characters of the Hash Code of the commit where you want to go.

It will detach the HEAD, and let you fool around with no branch checked out. Don’t worry — detaching your head is not as scary as it sounds. If you want to make commits while you’re here, you can do so by creating a new branch here:

<pre name="7b61" id="7b61" class="graf graf--pre graf-after--p">$ git checkout -b <SHA></pre>

To go back to the present state, just checkout to the branch you were on previously.

You can follow this [Stack Overflow answer](http://stackoverflow.com/questions/4114095/revert-git-repo-to-a-previous-commit/4114122#4114122) for additional information.

#### **5\. Undo a Git Merge**

You might have to do a _Hard Reset_ to the previous commit in order to undo a merge. What ‘merge’ basically does is it resets the index and updates the files in the working tree that are different between _<commit>_ and _HEAD_, but keeps those which are different between the index and working tree (i.e. which has changes that have not been added).

<pre name="56e9" id="56e9" class="graf graf--pre graf-after--p">$ git checkout -b <SHA></pre>

But there are always alternate ways of doing things in Git, and you can explore them [here](http://stackoverflow.com/questions/2389361/undo-a-git-merge?rq=1).

#### **6\. Remove local (untracked) files from current Git branch**

Let’s say you happen to have a lot of files which are untracked (because they are not required), and you don’t want them to show up every time you use _git status_ . Here are a few ways to get around this problem:

<pre name="64ce" id="64ce" class="graf graf--pre graf-after--p">$ git clean -f -n         # 1</pre>

<pre name="d4c3" id="d4c3" class="graf graf--pre graf-after--pre">$ git clean -f            # 2</pre>

<pre name="d985" id="d985" class="graf graf--pre graf-after--pre">$ git clean -fd           # 3</pre>

<pre name="0faf" id="0faf" class="graf graf--pre graf-after--pre">$ git clean -fX           # 4</pre>

<pre name="8c9c" id="8c9c" class="graf graf--pre graf-after--pre">$ git clean -fx           # 5</pre>

(1): _-n_ option will let you know what files will be removed if you run (2).

(2): This will remove all files as reported by command-(1).

(3): _-d_ if you also want to remove directories.

(4): _-X_ if you just want to remove ignored files.

(5): _-x_ if you want to remove both ignored and non-ignored files

Note the case difference of _X_ in last two commands.

For more information, you may explore [official git-clean documentation](http://git-scm.com/docs/git-clean).



![](https://cdn-images-1.medium.com/max/1600/1*bLtPTIsKUeAQHPo2eGrKpw.png)

Photo credit: [_xkcd_](http://xkcd.com/)



#### **7\. Delete a Git branch both locally and remotely**

To delete a local branch:

<pre name="6086" id="6086" class="graf graf--pre graf-after--p">$ git branch --delete --force <branchName></pre>

<pre name="55f5" id="55f5" class="graf graf--pre graf-after--pre"># OR use -D as a short-hand:</pre>

<pre name="c166" id="c166" class="graf graf--pre graf-after--pre">$ git branch -D</pre>

To delete a remote branch:

<pre name="85c3" id="85c3" class="graf graf--pre graf-after--p">$ git push origin --delete <branchName></pre>

#### Get Good with Git

Checkout [the official GitHub training documentation](https://training.github.com/kit/downloads/github-git-cheat-sheet) for a quick reference, and the [official Git documentation](https://git-scm.com/docs) to learn more about Git.

If you have a favorite Git hack, post it in the comments and tell us how you use it.











* * *







_Originally published at_ [_blog.projectshrv.com_](http://blog.projectshrv.com/7-git-hacks-you-cant-ignore/) _on November 11, 2015._








