---
author: Pierre de Wulf
authorTwitter: https://twitter.com/PierreDeWulf
authorFacebook: https://facebook.com/1708834585999051
title: "Git rebase and the golden rule explained."
subTitle: "What really happen during a git rebase, and why you should care...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*e-tlWqLwbUd1UmZyC_KbGg.png
url: https://medium.freecodecamp.org/git-rebase-and-the-golden-rule-explained-70715eccc372
id: git-rebase-and-the-golden-rule-explained-70715eccc372
date: 2016-02-28T08:04:41.054Z
tags: [
  "Git",
  "Tech",
  "Productivity",
  "Programming",
  "Technology"
]
---
# Git rebase and the golden rule explained.

What really happen during a git rebase, and why you should care.

#### The base of the rebase

This what you might have in mind when you think about what is a rebase in git:







![](https://cdn-images-1.medium.com/max/2000/1*FNaZp740nmp8wz851BqcAg.png)







You could say that when you rebase you “unplug” the branch you want to rebase, and “replug” it on the tip of another branch. It is not very far from the truth but it worths digging a little deeper. If you look at the [doc](https://git-scm.com/docs/git-rebase) this is what is written about the rebase:

> “git-rebase: Forward-port local commits to the updated upstream head”— git doc

Not very helpful isn’t it? An approximate translation could be:

> git-rebase: Reapply all the commit from your branch to the tip of another branch.

The most important word here is “reapply” because a rebase is not simply a ctrl-x/ctrl-v of a branch to another. A rebase will sequentially take all the commit from the branch you’re in, and reapply them to the destination. This behavior has 2 main implications:

1.  By reapplying commits git creates new ones. Those new commits, even if they bring the same set of change will be treated as completely different and independent by git.
2.  Git rebase reapplies commits, and does not destroy the old ones. It means that even after a rebase, your old commits will still be in the /objects folder in your .git directory. If you are not really familiar with how git consider and stores commit you could learn some interesting things [here](http://bit.ly/210xGKt).

So this could be a more accurate representation of what actually happens during a rebase:







![](https://cdn-images-1.medium.com/max/2000/1*p0EGOtTUhzpUnF5p2c2UAw.png)







As you can see, the feature branch has completely new commits. As said before, same set of changes, but completely different objects from the git point of view. And you can also see that previous commits are not destroyed. They are simply not directly accessible. If you remember, a branch is only a pointer to a commit. Therefore if neither branches nor tags are pointing to a commit it becomes almost impossible to reach, but the commit still exists.

Let’s now talk about this famous golden rule.

#### The golden rule of rebase

> “No one shall rebase a shared branch” — Everyone about rebase

You have probably came across that rule, maybe phrased differently. For those who haven’t, this rule is quite simple. Never, NEVER, **NEVER,** rebase a shared branch. By shared branch I mean a branch that exists on the distant repository and that other people on your team could pull.

Too often this rule is thrown as a divine truth and I think understanding it could be a good thing if you want to improve your understanding of git.

To do that, let’s imagine a situation where a dev breaks the rule and see what happens.

Let’s say Bob and Anna are both working on the same project. Here is an overview of both Bob’s, Anna’s repos and the remote on GitHub:







![](https://cdn-images-1.medium.com/max/2000/1*wxzwv6lSoduI8rKFrKCF4A.png)

Everybody is sync with the remote (GitHub)







Now Bob, innocently breaks the golden rule of rebase, in the mean time Anna decides to work on the feature and creates a new commit:







![](https://cdn-images-1.medium.com/max/2000/1*XXo413qBib80JBSbQrqVaQ.png)

Do you see what’s coming ?







Bob tries to push now, he got rejected and receives that kind of message:



![](https://cdn-images-1.medium.com/max/1600/1*PZAACeGy9iYU2kwEHfec9g.png)

[Oh My Zsh](https://github.com/robbyrussell/oh-my-zsh) with agnoster theme for those who cares



Here git is not happy because it doesn’t know how to merge the Bob feature branch with the GitHub feature branch. Usually when you push your branch on the remote, git merges the branch you’re trying to push with the branch currently on the remote. In fact git tries to fast-forward your branch, we’ll talk more about that in a future post. What you have to remember is that the distant repo can’t, in a simple way, handle the rebased branch Bob is trying to push.

One solution for Bob would be to do a git push — force, basically it tells the remote repository:   
“Don’t try to merge or do whatever work between what I push and what you already have. Erase your version of the feature branch, what I push is now the new feature branch”  
And this is what we end up with:







![](https://cdn-images-1.medium.com/max/2000/1*tqeYmgNpYKp4a8jmyKmdxw.png)

Had Anna known what’s coming, she wouldn’t have come to work this morning.







Now Anna wants to push her change:



![](https://cdn-images-1.medium.com/max/1600/1*be7e3r7D_gFvnIt_GAlNxA.png)



This is normal, git just told Anna that she does not have a sync version of the feature branch, i.e., her version of the branch and the GitHub version of the branch are different. So naturally, Anna pulls. The same way git tries to merge your local branch with what is in the distant repo when you push, git tries to merge what is in the distant repos with what is in your local branch when you pull.

Before the pull those are the commits in the distant and local feature branch:

<pre name="609c" id="609c" class="graf graf--pre graf-after--p">A--B--C--D'   origin/feature // GitHub  
A--B--D--E    feature        // Anna</pre>

When you pull, git has to do a merge to resolve this issue. And this is what happens:







![](https://cdn-images-1.medium.com/max/2000/1*f7dhTYNizT045XFCUgcc1Q.png)







The commit M represent the merge commit. The commit where Anna’s and GitHub’s feature branch were finally reunited. Anna is finally relieved, she managed to resolve all the merge conflicts and can now push her work. Bob decides to pull, and everyone is now synced.







![](https://cdn-images-1.medium.com/max/2000/1*POHw-A3poPkF_0IRMHolSA.png)







Looking at the mess should be enough to convince you of the validity of the golden rule. You have to keep in mind that you are in front of a mess created only by one person, on a branch shared by only two. Imagine doing that with a team of 10 peoples. One of the numerous reasons people use git is for being able to easily go back in time, and the more messy you history is the more complex it becomes.

You can also notice that there are duplicated commit on the remote, D and D’ have the same set of changes. Basically the number of duplicated commits can be as big as the number of commits inside your rebased branch.

If you’re still not convinced, try to imagine Emma, the third dev. She worked on the feature branch before Bob messed up everything and now wants to push. Note that she pushes after our previous little scenario.



![](https://cdn-images-1.medium.com/max/1600/1*TRBHnwetziMTN0cSaNdwRA.png)

damn it Bob!



update: As some redditor mentioned it, this post might let you think that rebase can only be used to rebase a branch on the top of another branch. This is not the case, you can rebase on the same branch, but this is another story.











* * *







### Thanks for reading

I hope that you now understand a little better git rebase and its famous golden rule. If you have any questions or remarks do not hesitate to post them, you can also follow me [here](http://bit.ly/1Tnqw29) on twitter.

I write articles about what I think are misunderstood or unknown features of our favorite langages and tools and try to make them more easily understandable like :

*   [Things you should know about JS events](http://bit.ly/1U9z7q0) 3,1k reads
*   [Understanding git for real by exploring the .git directory](http://bit.ly/210xGKt) 24k reads

Next time we’ll talk about advanced feature of git rebase, see you soon and have fun.

If like 33,157 others you liked my posts subscribe you can subscribe [here](http://bit.ly/1Ug9Iei) if you don’t want to miss the next one.








