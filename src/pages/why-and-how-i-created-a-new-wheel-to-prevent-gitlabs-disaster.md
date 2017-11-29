---
author: Alan Chen
authorTwitter: none
authorFacebook: none
title: "A new tool to prevent catastrophic deletions like GitLab’s"
subTitle: "Basically: I found most of the existing tools not very helpful and made a new open source tool called rm-protection, which you can downlo..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*IutJzMkTq_6yyv2HTy2KJw.jpeg
url: https://medium.freecodecamp.org/why-and-how-i-created-a-new-wheel-to-prevent-gitlabs-disaster-b8cd5bea6e1
id: why-and-how-i-created-a-new-wheel-to-prevent-gitlabs-disaster-b8cd5bea6e1
date: 2017-03-26T08:18:20.807Z
tags: [
  "Linux",
  "Python",
  "Technology",
  "Tech",
  "Programming"
]
---
# A new tool to prevent catastrophic deletions like GitLab’s







![](https://cdn-images-1.medium.com/max/2000/1*IutJzMkTq_6yyv2HTy2KJw.jpeg)







Basically: I found most of the existing tools not very helpful and made a new open source tool called `rm-protection`, which you can [download from GitHub](https://github.com/alanzchen/rm-protection).

I was riding a bus back to my dorm and I almost fell asleep. Suddenly one of my friends sent me a message on Telegram: “GitLab deleted its production database and they are now live streaming database recovery on YouTube!”

My head bumped into the seat in front of me. I couldn’t feel the pain but felt sorry for the ops and wanted to #hugops while reading their incident log.





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/878d69bad55310e603595e70ce3f475b?postId=b8cd5bea6e1" data-media-id="878d69bad55310e603595e70ce3f475b" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F757993008461742080%2F9pAwHBR0_bigger.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



#hugops on Twitter



Aren’t we all humans who make mistakes? But some data are just too important to lose. For example, production database and photos with families and friends.

I have a deeply ingrained fear of losing data. I started playing around with Linux in primary school, and I had only a PC with a single hard drive at that time. As a child and a Linux newbie, I was more careless than most sophisticated users. Once, I accidentally deleted a whole partition — not only the system files, but also my home directory.

I still remember the horror when everything crashed and I realized that I had just deleted all my photos. Then I cried tears of happiness when `photorec` got some of them back.

### A quick survey of current tools for preventing this

I got off the bus, walked back to my room and started searching for prevention methods. I’ve heard some before: `rm -i`, `Safe-rm` and `trash-cli`.

#### rm -i

`rm -i` requires an additional confirmation for _each single file and directory_. It is tedious to confirm everything that you surely want to remove. It reminds me of the story of _The Boy Who Cried Wolf_.

**Warning about _everything_ is like warning about nothing.** What's worse, some users have developed a habit of using `rm -rf` regularly, where `-f` option will override the `-i` protection.

In the case of GitLab’s incident, `rm -i` would not have helped: the ops knew which directory he was going to delete, but forgot about which machine he was on. He could have typed “yes” and hit the “return”.

#### `[Safe-rm](https://launchpad.net/safe-rm)`

Similarly, `[Safe-rm](https://launchpad.net/safe-rm)` wouldn’t have helped, either. `Safe-rm` has a configuration file that contains a list of paths you want to protect. It comes with some default paths such as `/usr/lib`. Users can also create their own lists of paths. What `Safe-rm` does is providing an extra warning beforehand, which gives no extra information about why it is stopping you.

Think about the GitLab’s situation: ops could have just hit “y” (he would have thought it was not a production database, why not hit “y”?). Plus, `Safe-rm` does not provide symbolic link and recursion protection.

Sorry, `Safe-rm`. (Another tool is called `[rmfd](https://github.com/d5h/rmfd/wiki)`, a fork from GNU coreutils with similar protection mechanism)

#### `trash-cli`

The only tool I found useful for GitLab’s situation is `trash-cli`. So far it’s the best solution I know. It brings trashcan to the command line. `trash-cli` surely can prevent about 90% of the accidents (including GitLab’s).

But what if you realize something’s missing long after emptying the trash.

Or imagine you are running out of space, but you have tons of data to write on the disk. You’re in rush to free up space (like removing the database filled with spam messages). Would you still carefully check the trash?

So `trash-cli` wasn’t the ultimate solution I was searching for.

### Searching for Inspiration

The bathroom has always been a great place for eureka.

It was 11 pm. I took a shower and I kept talking to myself through a solution for preventing GitLab’s incident.

> “What exactly causes accidents like the one happened in GitLab?”

> “Not knowing what you’re doing.”

It was still in the middle of spring break, and there was nobody around at my university. So I could talk to myself in the bathroom without people thinking I was crazy.

> “How do you let users know clearly what they are doing?”

> “Hmmm, maybe by making them say it out loud?”

I rushed out of the bathroom.

### Inventing the Tool

I immediately messaged my friends about my idea: users “protect” important files and directories during the deployment period. The protection is done by setting a safety question and an answer.

Imagine this: when GitLab ops deploys databases to the production server, they also “protect” the directories of databases by setting up a question “What database are you deleting? (db1/db2)” and an answer “db1”.

Afterwards, upon any attempt to remove these directories, a modified version of `rm` will ask you the question. Unless you know the answer right, you won’t be able to proceed.

GitLab’s ops couldn’t possibly enter “db1” when he thought it was “db2”. By making sure he knew what he was doing, GitLab’s database could have been saved.

So I wrote a Python script named “rm-p.py”. It’s a wrapper for `rm` that checks if a corresponding `.<filename>.rm-protection` (which I call a “protection file”). The prompt asks the question defined in the protection file when it can be found.

If you get the answer right, `rm-p.py` will pass your argument to `rm`. If you don’t, it doesn’t. Of course, it will still pass non-protected files to `rm`.







![](https://cdn-images-1.medium.com/max/2000/1*TEdo7UKvDVyrYBl_iOC-kA.png)

Demo: Trying to delete a protected file.







I called this little script `rm-protection` and made a logo for it.







![](https://cdn-images-1.medium.com/max/2000/1*9VSw4FTwQG_UsmP5829piA.png)







Now the package `rm-protection` is available on PyPi and the source code is on [GitHub](https://github.com/alanzchen/rm-protection).

### What ultimately protects you?

For companies and teams, backup are surely the most important protection for data loss. It not only shields you from fat-fingerings, but also natural disasters.

But for individuals, comprehensive backups aren’t always economical or convenient.

Putting a lack of backup aside, bad habits are almost always the source of these fat-fingerings.

We invented so many tools to deal with these bad habits, yet they may cause users to form new bad habits.

> “The best and the only right way to double check what you are going to delete.”

Or so some may say. But few can live with having to confirm **every** single deletion. Thus, `rm -rf` is their new bad habit.

Current tools either protect you before (like `rm -i` or `safe-rm`) or after (`trash-cli`) accidental deletions. The former ones often bring more troubles than expected in daily operations.

The latter ones like `trash-cli` does not provide protection upfront. Chances are, you’ll still lose the important file.

After putting some thought into the issue, I realized that there’s no such thing as _ultimate solution._`rm-protection` is just another layer of protection. It is not the most vital part of the protection, but it can save you tons of time for recovering your data from backups.

`rm-protection` **does not bother you when it is not necessary**, so you still have the flexibility and efficiency for daily operations. When it is truly important that you should not delete something, it asks you a question set by you.

> To be 99% safe, what you need is a combination of good habit, careful and clear mind, working backups, a good protection method, and luck.

### The Best Practice

To sum up, you should do the following to ensure the safety of your data:

1.  Do **backups**.
2.  **Check backups** regularly.
3.  **Keep a clear head. Don’t** use `rm -rf`.
4.  Add an additional protection layer: choose `rm-protection`, `trash-cli` or whichever tool you like.

And you should be 99% safe.








