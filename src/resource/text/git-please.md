---
author: Buddy Reno
authorTwitter: https://twitter.com/BuddyLReno
authorFacebook: https://facebook.com/100004496349374
title: "Git Please: how to force push without being a jerk"
subTitle: "As the size of a dev team grows, so does the likelihood of someone doing a force push and overwriting someone else’s code...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*PhSXjkYS9MTmoNwlPIdQpQ.jpeg
url: https://medium.freecodecamp.org/git-please-a182f28efeb5
id: git-please-a182f28efeb5
date: 2017-01-04T17:33:15.661Z
tags: [
  "Git",
  "Github",
  "Web Development",
  "Programming",
  "Software Development"
]
---
# `Git Please`: how to force push without being a jerk







![](https://cdn-images-1.medium.com/max/2000/1*PhSXjkYS9MTmoNwlPIdQpQ.jpeg)

Don’t be like Anakin.







As the size of a dev team grows, so does the likelihood of someone doing a force push and overwriting someone else’s code.

Here’s what a force push looks like in Git:

<pre name="d970" id="d970" class="graf graf--pre graf-after--p">$ git push --force origin master  
# `--force` can also  be written as `-f`</pre>

This command can cause all kinds of problems. It basically tells Git that _I don’t care what is in origin/master. What I have is correct. Overwrite it._

So what happens if a co-worker had changes committed to a branch that you haven’t pulled down into your own repo? It gets overwritten, and your co-worker potentially has to re-do their work (or resurrect a commit or two if they still have it locally).





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/18e4009c38b443f7e54e0c30c97f40c6?postId=a182f28efeb5" data-media-id="18e4009c38b443f7e54e0c30c97f40c6" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FB093CwRCQAEwnD4.jpg%3Alarge&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



Oh the humanity!



But this whole mess can be easily avoided with a small change to how you use the`force`flag. Instead of using `—-force`, Use `--force-with-lease`.

<pre name="6e21" id="6e21" class="graf graf--pre graf-after--p">$ git push --force-with-lease origin master</pre>

To summarize Git’s [documentation](https://git-scm.com/docs/git-push#git-push---force-with-leaseltrefnamegt), using `force-with-lease` tells git to check whether the remote repo is the same as the one you’re trying to push up. If it isn’t, git will throw an error instead of blindly overwriting the remote repo. This will save you from accidentally overwriting work that you don’t intend to.

I hate typing `force-with-lease` though — especially because I’m used to typing the shorthand `-f` for force pushing. Thankfully, Git allows you to add aliases to make this quicker. I like to think that I’m asking Git if it’s okay to force push, so I’ve aliased `push —force-with-lease` to `git please`.

<pre name="83a0" id="83a0" class="graf graf--pre graf-after--p">$ git please origin master</pre>

You can add an alias in git by typing this into your terminal:

<pre name="c9a7" id="c9a7" class="graf graf--pre graf-after--p">git config --global alias.please 'push --force-with-lease'</pre>

Or you can open up your `~/.gitconfig` file and manually add the alias:

<pre name="bd19" id="bd19" class="graf graf--pre graf-after--p">[alias]  
	co = checkout  
	ci = commit  
	please = push --force-with-lease</pre>

#### There’s always a caveat…

It’s possible to trick force with lease however. When you use `git pull` to get updates from the origin, this is doing two commands at once. Git runs a `fetch` to pull down the reference to all the changes. Then it runs a `merge` to merge the changes you just fetched into your current branch.

If you only do a `fetch` to get the latest updates, you’ll only be updating your references — not actually merging the changes into your working copy. Then, if you force push with lease, Git will look at those references and think that the local copy is up to date with the remote, when in reality it isn’t yet. This will trick Git into overwriting the changes on the remote with your local copy, without having the changes actually merged in.

The easiest way to avoid this problem is always use `git pull` to `fetch` and `merge` at the same time. I’ve not run into any instances where I’ve needed to `fetch` and `merge` manually, so I can’t speak to those circumstances. Using `pull` has always worked for me.

I hope you find `git please` helpful and that, as a result, you never have to recover from a force-push nightmare.








