---
author: Pierre de Wulf
authorTwitter: https://twitter.com/PierreDeWulf
authorFacebook: https://facebook.com/1708834585999051
title: "Understanding git for real by exploring the .git directory"
subTitle: "Using git as a beginner is like visiting a new country for someone who can’t read/speak the local language. As soon as you know where you..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*e-tlWqLwbUd1UmZyC_KbGg.png
url: https://medium.freecodecamp.org/understanding-git-for-real-by-exploring-the-git-directory-1e079c15b807
id: understanding-git-for-real-by-exploring-the-git-directory-1e079c15b807
date: 2016-02-20T09:16:52.891Z
tags: [
  "Tech",
  "Programming",
  "Git",
  "Learning",
  "Self Improvement"
]
---
# Understanding git for real by exploring the .git directory

> “Whoah, I’ve just read this quick tuto about git and oh my god it is cool. I feel now super comfortable using it, and I’m not afraid at all to break something.”— said no one ever.

Using git as a beginner is like visiting a new country for someone who can’t read/speak the local language. As soon as you know where you are and where to go, everything is fine, but the moment you get lost, the big troubles begin (#badMetaphor).

There are a lot of posts out there about learning the basic commands of git, this is not one of them. What I’m going to try here is a different approach.



![](https://cdn-images-1.medium.com/max/800/1*0o9GZUzXiNnI4poEvxvy8g.png)

[xkcd](https://xkcd.com/1597/)



New users are usually afraid by git and really, it is hard not to be. It is a powerful tool for sure but it is not really user friendly. Lots of new concepts, commands doing completely different things if a file is passed as a parameter or not, cryptic feedback …

I think that one way to overcome those first difficulties is to do a little more than just git commit/push, I think that if we take the time to really understand what git is really made of, it can save you from a lot of troubles.

#### Get into the .git

So, let’s begin. When you create a git repo, using git init, git creates this wonderful directory: the .git. This folder contains all the informations needed for git to work. To be clear, if you want to remove git from your project, but keep your project files, just delete the .git folder. But come on, why would you do that?

<pre name="1eac" id="1eac" class="graf graf--pre graf-after--p">├── HEAD  
├── branches  
├── config  
├── description  
├── hooks  
│ ├── pre-commit.sample  
│ ├── pre-push.sample  
│ └── ...  
├── info  
│ └── exclude  
├── objects  
│ ├── info  
│ └── pack  
└── refs  
 ├── heads  
 └── tags</pre>

Here is what’s your .git will look like before your first commit:

*   HEAD

We’ll come to this later

*   config

This file contains the settings for your repository, here will be written the url of the remote for example, your mail, username, … . Every-time you use ‘git config …’ in the console it ends here.

*   description

Used by gitweb (kind of an ancestor of github) to display the description of the repo.

*   hooks

Here is an interesting feature. Git comes with a set of script that you can automatically run at every meaningful git phase. Those scripts, called hooks, can be run before/after a commit/rebase/pull… The name of the script dictate when to execute it. An example of a useful pre-push hook would be to test that all the styling rules are respected to keep consistency in the remote (the distant repository).

*   info — exclude

So you can put the files you don’t want git to deal with in your .gitignore file. Well the exclude file is the same except that it won’t be shared. If you don’t want to track your custom IDE related config files for example, even though most of the time .gitignore is enough (please tell me in the comments if you really use this one).

#### What’s inside a commit ?

Every-time you create a file, and track it, git compresses it and stores it into its own data structure. The compressed object will have a unique name, a hash, and will be stored under the object directory.

Before exploring the object directory we’ll have to ask ourselves what is a commit. So a commit is kind of a snapshot of your working directory, but it is a little bit more than that.

In fact when you commit git does only two things in order to create the snapshot of your working directory:  
1\. If the file didn’t change, git just adds the name of the compressed file (the hash) into the snapshot.  
2\. If the file has changed, git compresses it, stores the compressed file in the object folder. Finally it adds the name (the hash) of this compressed file into the snapshot.

This is a simplification, this whole process is a little bit complicated and will be part of a future post.

And once that snapshot is created, it will also be compressed and be name with an hash, and where all those compressed objects end up ? In the object folder.

<pre name="2f6a" id="2f6a" class="graf graf--pre graf-after--p">├── 4c  
│ └── f44f1e3fe4fb7f8aa42138c324f63f5ac85828 // hash  
├── 86  
│ └── 550c31847e518e1927f95991c949fc14efc711 // hash  
├── e6  
│ └── 9de29bb2d1d6434b8b29ae775ad8c2e48c5391 // hash  
├── info // let's ignore that  
└── pack // let's ignore that too</pre>

This is what the object directory looked like after I created one empty file file_1.txt and commited it. Please note that if the hash of your file is “4cf44f1e…”, git will store this file under a “4c” subdirectory and then name the file “f44f1…”. This little trick reduces by 255 the size of the /objects directory.

You see 3 hash right. So one would be for my file_1.txt, the other would be for the snapshot created when I commited. What is the third one ? Well because a commit is an object in itself, it is also compressed and stored in the object folder.

What you need to remember is that a commit is made of 4 things :

1.  The name (a hash) of the working directory’s snapshot
2.  A comment
3.  Commiter information
4.  Hash of the parent commit

And that’s it, look by yourself what happen if we uncompressed the commit file :

<pre name="f617" id="f617" class="graf graf--pre graf-after--p">// by looking at the history you can easily find your commit hash  
// you also don't have to paste the whole hash, only enough   
// characters to make the hash unique</pre>

<pre name="4d15" id="4d15" class="graf graf--pre graf-after--pre">git cat-file -p 4cf44f1e3fe4fb7f8aa42138c324f63f5ac85828</pre>

This is what I get

<pre name="ade4" id="ade4" class="graf graf--pre graf-after--p">tree 86550c31847e518e1927f95991c949fc14efc711  
author Pierre De Wulf <test[@gmail.com](mailto:pierredewulf31@gmail.com)> 1455775173 -0500  
committer Pierre De Wulf <[test@gmail.com](mailto:pierredewulf31@gmail.com)> 1455775173 -0500</pre>

<pre name="d2f4" id="d2f4" class="graf graf--pre graf-after--pre">commit A</pre>

You see, we got as expected, the snapshot hash, the author, and my commit message. Two things are important here :

1.  As expected, the snapshot hash “86550…” is also an object and can be found in the object folder.
2.  Because it was my first commit, there is no parent.

What’s in my snapshot for real ?

<pre name="78b2" id="78b2" class="graf graf--pre graf-after--p">git cat-file -p 86550c31847e518e1927f95991c949fc14efc711</pre>

<pre name="688f" id="688f" class="graf graf--pre graf-after--pre">100644 blob e69de29bb2d1d6434b8b29ae775ad8c2e48c5391 file_1.txt</pre>

And here we find the last object that was previously in our object store, the only object that was in our snapshot. It’s a blob, but that’s another story.

#### branch, tags, HEAD all the same

So now you understand that everything in git can be reached with the correct hash. Let’s take a look at the HEAD now. So what’s in that HEAD?

<pre name="ced1" id="ced1" class="graf graf--pre graf-after--p">cat HEAD  
ref: refs/heads/master</pre>

Okay, this is not an hash, and it makes sense, because the HEAD can be considered as a pointer to the tip of the branch you’re working on. And now if we look at what is in refs/heads/master here what we’ll see :

<pre name="1132" id="1132" class="graf graf--pre graf-after--p">cat refs/heads/master  
4cf44f1e3fe4fb7f8aa42138c324f63f5ac85828</pre>

Does that look familiar? Yes this is the exact same hash of our first commit. This shows you that branches and tags are nothing more than a pointer to a commit. Meaning that you can delete all the branches you want, all the tags you want, the commit they were pointing to are still going to be here. There are only be much more difficult to access. If you want to know more about all a this, go check [the git book](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects).

#### One last thing

So by now you should understand that all git does when you commit is “zipping” your current working directory and store into the objects folder with a bunch of other informations. But if you’re familiar enough with the tool you’ll now that you have complete control on what files should be included in the commit and what files should not.

I mean a commit isn’t really a snapshot of your working directory, it is a snapshot of the files you want to commit. And where does git store those file you want to commit before making the actual ? Well it stores them into the index file. We’re not going to dig deeper into it now, meanwhile if you’re really curious you can always take a look at [this](https://github.com/git/git/blob/master/Documentation/technical/index-format.txt).











* * *







### Thanks For Reading

I hope that through this post you understood the core concepts of git a little better. If you have any questions or remarks do not hesitate to post them, you can also follow me [here](http://bit.ly/1Tnqw29) on twitter.

I write articles about what I think are misunderstood or unknown features of our favorite langages and tries to make them more easily understandable. You might also like :

*   [Things you should know about JS events](http://bit.ly/1U9z7q0) 3,1k read
*   [Git rebase and the golden rule explained](http://bit.ly/1UrDsVF) new

Next time we’ll talk about git rebase, see you soon and have fun.

If like 33,157 others you liked my posts subscribe you can subscribe [here](http://bit.ly/1Ug9Iei) if you don’t want to miss the next one.








