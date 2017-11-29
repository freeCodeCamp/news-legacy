---
author: Robby Russell
authorTwitter: https://twitter.com/robbyrussell
authorFacebook: https://facebook.com/10152061828112050
title: "d’Oh My Zsh"
subTitle: "This wouldn’t be my first foray into open source software; nor my last...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*Mmn3LnmeijsOv2xelXytJA.jpeg
url: https://medium.freecodecamp.org/d-oh-my-zsh-af99ca54212c
id: d-oh-my-zsh-af99ca54212c
date: 2016-03-23T06:17:23.488Z
tags: [
  "Programming",
  "Open Source",
  "Software Development",
  "Ruby",
  "Tech"
]
---
# d’Oh My Zsh







![](https://cdn-images-1.medium.com/max/2000/1*Mmn3LnmeijsOv2xelXytJA.jpeg)

First photo when we got stickers







#### How I unexpectedly built a monster of an open source project

This wouldn’t be my first foray into open source software; nor my last.





<iframe data-width="300" data-height="380" width="300" height="380" src="https://medium.freecodecamp.org/media/13dceaf8f025ed32cdab118a01c4a7c8?postId=af99ca54212c" data-media-id="13dceaf8f025ed32cdab118a01c4a7c8" allowfullscreen="" frameborder="0"></iframe>



A few songs from 2009 to listen to while reading.



It was the summer of 2009\. I found myself helping a coworker debug something in their terminal. As I attempted to type in a few command lines, I noticed that the prompt wasn’t responding to the shortcuts that my brain had grown accustomed to. Frustrated, I exclaimed, _“when are you finally going to switch over to Zsh?!”_

(yeah, I was one of the type of annoying coworker that would constantly point out that X was better than Y when given the chance. In hindsight, I don’t know how they put up with me…but between you and me, I had a point.)

> “when are you finally going to switch over to Zsh?!”

At that point in time, I had been a daily Zsh user for a little over three years.

Some of my [#caboose friends](https://www.flickr.com/photos/19932288@N00/177403465) shared a few of their .zshrc configurations within our IRC channel. After a few years, my .zshrc file grew into a tangled rat's nest. Honestly, I didn’t know what ~30% of the configuration did. I trusted my friends enough to run with it, though. What I did know was that I had some git branch and status details, color highlighting for a few tools (i.e., grep), autocompleting file paths over SSH connections, and a handful of shortcuts for [Rake](https://github.com/ruby/rake) and [Capistrano](http://capistranorb.com/). Working on a machine with a default Bash profile felt remarkably archaic; I’d become dependent on these shortcuts.







![](https://cdn-images-1.medium.com/max/2000/1*oZ9acQ0aYPD10zmZDqEmQg.jpeg)

Corinne is a front-end developer at Planet Argon







A few coworkers were happy to copy/paste the .zshrc file that I shared and begin using it. A few others wouldn’t because they knew that I didn’t know what some of it did. Fair enough.

After a few attempts to convert them and getting nowhere, I opted for a different approach.

First, I reorganized my .zshrc configuration, which involved breaking it up into a collection of smaller files. My thinking here was that this would a) help me better understand how all of these bits worked while b) helping educate my peers when they went to read the code.

Pre-empting their next question, _“how do I get this to work on my machine?”,_ I drafted the first [setup instructions](https://github.com/robbyrussell/oh-my-zsh/blob/5da20b9dddb1f7a9110675ded5df59c4c3ed1b83/README.textile).

Most importantly, I packaged all these files into a shiny new git repository. I figured that if I tossed it up on Github, my peers would be able to collaborate with me on improving it.

While not a huge leap, it was a step above inviting people to copy/paste a text file from [Pastie](http://pastie.org/).

On Aug. 28th, 2009, [Oh My Zsh was born](https://github.com/robbyrussell/oh-my-zsh/tree/5da20b9dddb1f7a9110675ded5df59c4c3ed1b83).



[![](https://cdn-images-1.medium.com/max/1600/1*6I5hz65oHTa234aco8uD2g.jpeg)](https://github.com/robbyrussell/oh-my-zsh/tree/5da20b9dddb1f7a9110675ded5df59c4c3ed1b83)

One of the first public versions of Oh My Zsh. ([view on github](https://github.com/robbyrussell/oh-my-zsh/tree/5da20b9dddb1f7a9110675ded5df59c4c3ed1b83))



#### …but, wait a minute!! _Where are the themes? Where are the plugins? Installation scripts? Logo?_

This might come to a surprise to most of the Oh My Zsh user base, but none of those were features that I had considered. My goal with the project was _not_ to build a framework for maintaining Zsh configurations but to share my own config with my coworkers so that they’d use Zsh.



![](https://cdn-images-1.medium.com/max/1600/1*pMhWn5hhf5-fB5olMP1Ung.jpeg)

Patrick (left) and Travis (right)



Within a day of sharing it with all of my coworkers, everyone at [Planet Argon](http://www.planetargon.com/) had migrated from Bash to Zsh.

**_Victory! …or so I thought._**

The first feature request came in the next day.

> “How do I customize _MY_ prompt?”

Two coworkers asked me how they could customize their prompt. They wanted to change the colors and the information that was displayed.

_What the hell!? Wasn’t my prompt compelling enough for them?_ So nitpicky. ;-)

I pointed to the prompt.zsh file and said they could modify that.

Quickly, this became an issue as they now had their own version of that file. As a result, this would add some complexity if we all wanted to share some of our shortcuts and features as we’d have conflicts to deal with.

Hmm…

So, a day after first announcing Oh My Zsh on my blog, I [began introducing the initial concept of themes.](https://github.com/robbyrussell/oh-my-zsh/commit/2c9f74b5c3f6910e7c66601008e9ddd0444b70c7)



[![](https://cdn-images-1.medium.com/max/1600/1*TvoQqeoh63DzFZYPgq9cBg.jpeg)](https://github.com/robbyrussell/oh-my-zsh/commit/2c9f74b5c3f6910e7c66601008e9ddd0444b70c7)

Introducing the ‘famous’ robbyrussell theme to the world.



Meanwhile, I got my first external pull-request from Geoff Garside to add a [few aliases for TextMate](https://github.com/robbyrussell/oh-my-zsh/commit/7a7b0bc7f57ffabaa8e409975be4efe83e6eb924). (Notice how that went straight into a catch-all aliases.zsh file)

A day later, [another theme](https://github.com/robbyrussell/oh-my-zsh/commit/f704193fd2732207c158aa3413e2ef9634e7b17f) was sent over. Groovy, I [better add a link on the README](https://github.com/robbyrussell/oh-my-zsh/commit/ebc6ce25aa2aa2c8957724b916711ceee3bb15ce) to see some [screenshots on the wiki](https://github.com/robbyrussell/oh-my-zsh/wiki/themes).

Within a month, we had a dozen themes contributed to the project.

This began to be a really popular aspect to Oh My Zsh and we had to start hitting the brakes on accepting themes once we passed 100\. (we’re currently at ~140 and _rarely_ accept new ones)

### Simplifying setup with an installer

It occurred to me that the initial setup was requiring people to run a handful of commands. Rather than asking people to re-type and/or copy/paste a handful of commands, I felt that it would be more efficient for both parties (as it’d reduce the questions my coworkers would have when they hit a problem and/or skipped a step).





<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/a34e1e39f439e66cb73f9b57df6a2809?postId=af99ca54212c" data-media-id="a34e1e39f439e66cb73f9b57df6a2809" allowfullscreen="" frameborder="0"></iframe>



The first tweet to mention Oh My Zsh?



An installer was born.



![](https://cdn-images-1.medium.com/max/1600/1*DQHTqwRaONa61MXpa3ap5A.jpeg)

The initial installer script ([view on github](https://github.com/robbyrussell/oh-my-zsh/commit/71769107dbff230ec7607368f50f9ff93b88b581))



My initial thoughts were to handle save folks a few steps by automating the installer. If everyone ran the same commands, then we could cut down on human error (skipping a command, typos, etc.). I also wanted to be mindful that people might be switching from either Bash or an existing cobbled-together Zsh configuration. To help them with a possible switch back to the previous shell, we made a backup of their original configuration file. Finally, we’d switch their default shell to Zsh.

> “Hooray! Oh My Zsh has been installed.”

Oh, right. How will people be able to stay updated with the new changes to the project?

The next day, I added an upgrade script that strolls over to the Oh My Zsh directory, fetch updates from the git repository, and returns you to your previous working directory.



![](https://cdn-images-1.medium.com/max/1600/1*MT9v0xO25eQuhTtUrg1KAA.jpeg)

The initial upgrade script ([view on github](https://github.com/robbyrussell/oh-my-zsh/blob/1ec8a8848e5fa8f733af92f2c09387719e57e0d5/tools/upgrade.sh))



Far from rocket science.

About three weeks later, it became obvious that my coworkers weren’t manually keeping up with all of the new updates to the project. Rather than reminding them to do that from time-to-time, I added functionality that would periodically prompt the user to check for updates.

Up until this point, this felt like the most complicated piece of code in the project. I wish that I could remember who gave me the great idea to use an epoch value here.



![](https://cdn-images-1.medium.com/max/1600/1*8cD2EDIWdhNncwa_Q4k1VA.jpeg)

The initial auto-updater ([view on github](https://github.com/robbyrussell/oh-my-zsh/commit/700a3f0badf89fc9bb5a8f54b5fd2e14aed2823d))



In my opinion, it was also the turning point for the project.

While a handful of people were using it, this functionality would allow nearly every user to stay up-to-date on project changes and more importantly, stay engaged. When they would run the updater, they’d see a list of files changed and that would, subtly, introduce them to new features… a la, _“I wonder what that theme looks like..”_

Sadly, not everyone has been a fan.





<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/81eb8b8d430fb5f3b4430da1a444f7e6?postId=af99ca54212c" data-media-id="81eb8b8d430fb5f3b4430da1a444f7e6" allowfullscreen="" frameborder="0"></iframe>









<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/1e4dcb236b677352eff005a7b6491f0c?postId=af99ca54212c" data-media-id="1e4dcb236b677352eff005a7b6491f0c" allowfullscreen="" frameborder="0"></iframe>









<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/43a89d530308185725dfc35d96b4bb83?postId=af99ca54212c" data-media-id="43a89d530308185725dfc35d96b4bb83" allowfullscreen="" frameborder="0"></iframe>





Despite a few vocal opponents over the years, I’ve stood by my decision to keep this as a default setting.





<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/983826f9cdf9ef75ce7ac28014dfcaa9?postId=af99ca54212c" data-media-id="983826f9cdf9ef75ce7ac28014dfcaa9" allowfullscreen="" frameborder="0"></iframe>









<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/2ad1d571253c543507d8fa9e159c6ff1?postId=af99ca54212c" data-media-id="2ad1d571253c543507d8fa9e159c6ff1" allowfullscreen="" frameborder="0"></iframe>









<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/b1ceba878ac1b5223683b6d730f5eda1?postId=af99ca54212c" data-media-id="b1ceba878ac1b5223683b6d730f5eda1" allowfullscreen="" frameborder="0"></iframe>









<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/d9cc89c602320f0d1e22efd21b0a44b1?postId=af99ca54212c" data-media-id="d9cc89c602320f0d1e22efd21b0a44b1" allowfullscreen="" frameborder="0"></iframe>





Back in 2012, we made a change to reduce the frequency of auto-update prompts by 50%.





<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/59cd39d37bde8c5f47957eb1c0c915a6?postId=af99ca54212c" data-media-id="59cd39d37bde8c5f47957eb1c0c915a6" allowfullscreen="" frameborder="0"></iframe>





The auto-update has allowed us to ship new features, performance improvements, and bug fixes without relying on everyone manually doing it. I’m convinced that this feature has helped keep the community engaged.

#### This Muffin Needs Candy

While the project was attracting a lot of themes, I really felt like the project could benefit from branding.

**My solution? Ascii art.**



![](https://cdn-images-1.medium.com/max/1600/1*k9U-KOrPxao4RVA7Vgjm8A.jpeg)

I have no idea what prompted the git commit message.



My thought process here was… sure, you get a bunch of useful shortcuts and themes when you begin using Oh My Zsh, but I really felt like the first impression after the installer would run was an opportunity to delight new users.



![](https://cdn-images-1.medium.com/max/1600/1*5pGRf0bye9kbfyZN8UZEMg.jpeg)



Candy sprinkles on the muffin…as it were. (I have no recollection of why I wrote that commit message back then. The reference is lost on me.)



![](https://cdn-images-1.medium.com/max/1600/1*QrPTCyo_olmyjhxtTjO3fA.jpeg)

What the update script currently displays.



People have been asking me to print shirts with the ascii art for quite some time. (we’ll likely do that this summer — [follow us on twitter](https://twitter.com/ohmyzsh))







![](https://cdn-images-1.medium.com/max/2000/1*k9eGe-BEObD_Gp40MvaN-A.jpeg)

Becca Ward designed the logo







#### Plugins

Ten months after open sourcing the project, users had begun to request the ability to not have everything get loaded up. For example, a Python developer might not need the Rake and Capistrano related aliases to get loaded like a Ruby developer would.

So, we [implemented a basic plugin system](https://github.com/robbyrussell/oh-my-zsh/commit/3cf9ab722e7c0829727f548c7d05a0d96055f707) that would allow folks to decide which to load on initialization by changing a value in .zshrc.

When this feature was released, there were five plugins bundled.

Within a few months, I started to get pull requests for new plugin ideas.

Within a year, [I had accepted over 40 plugins](https://github.com/robbyrussell/oh-my-zsh/tree/9b63a03bcfb7a6c34281d7d905575c5647e9c8d2/plugins).

Within two years? [Over 70 plugins](https://github.com/robbyrussell/oh-my-zsh/tree/8b69c7f6a0c80c1c53505e17d356387b83e18efc/plugins).

Currently, we have plugins for adb, ant, apache2-macports, archlinux, autoenv, autojump, autopep8, aws, battery, bbedit, bgnotify, boot2docker, bower, branch, brew, brew-cask, bundler, bwana, cabal, cake, cakephp3, capistrano, cask, catimg, celery, chruby, chucknorris, cloudapp, codeclimate, coffee, colemak, colored-man-pages, colorize, command-not-found, common-aliases, compleat, composer, copydir, copyfile, cp, cpanm, debian, dircycle, dirhistory, dirpersist, django, dnf, docker, docker-compose, emacs, ember-cli, emoji, emoji-clock, emotty, encode64, extract, fabric, fancy-ctrl-z, fasd, fastfile, fbterm, fedora, forklift, frontend-search, gas, gem, git, git-extras, git-flow, git-flow-avh, git-hubflow, git-prompt, git-remote-branch, gitfast, github, gitignore, glassfish, gnu-utils, go, golang, gpg-agent, gradle, grails, grunt, gulp, heroku, history, history-substring-search, httpie, iwhois, jake-node, jhbuild, jira, jruby, jsontools, jump, kate, kitchen, knife, knife_ssh, laravel, laravel4, laravel5, last-working-dir, lein, lighthouse, lol, macports, man, marked2, mercurial, meteor, mix, mix-fast, mosh, mvn, mysql-macports, n98-magerun, nanoc, nmap, node, npm, nvm, nyan, osx, pass, paver, pep8, per-directory-history, perl, phing, pip, pj, pod, postgres, pow, powder, powify, profiles, pyenv, pylint, python, rails, rake, rake-fast, rand-quote, rbenv, rbfu, rebar, redis-cli, repo, rsync, ruby, rvm, safe-paste, sbt, scala, scd, screen, scw, sfffe, singlechar, spring, sprunge, ssh-agent, stack, sublime, sudo, supervisor, suse, svn, svn-fast-info, symfony, symfony2, systemadmin, systemd, taskwarrior, terminalapp, terminitor, terraform, textastic, textmate, thefuck, themes, thor, tmux, tmux-cssh, tmuxinator, torrent, tugboat, ubuntu, urltools, vagrant, vault, vi-mode, vim-interaction, virtualenv, virtualenvwrapper, vundle, wakeonlan, wd, web-search, wp-cli, xcode, yii, yii2, yum, z, zeus, zsh-navigation-tools, zsh_reload.

In total… [214 plugins](https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins). Admittedly, not everyone has been impressed by this.





<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/6cc255d6190f96fa812cb1a6fd267474?postId=af99ca54212c" data-media-id="6cc255d6190f96fa812cb1a6fd267474" allowfullscreen="" frameborder="0"></iframe>









<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/2e2f5aa71fa318a077942a9ad3546ea3?postId=af99ca54212c" data-media-id="2e2f5aa71fa318a077942a9ad3546ea3" allowfullscreen="" frameborder="0"></iframe>





I do agree that could be _drastically_ improved.

The few times that I considered it, I found the proposed approaches to be too complicated for folks who aren’t yet familiar and/or comfortable with the terminal. Perhaps a more sophisticated approach for version 2 of the framework. (more on this later)

There has, also, been a part of me that has felt like this project would only be of interest to people for a few years. As users gained more experience and/or as technology evolved, the framework would be left behind by shiny new projects that solved problems far better than we had.

I never thought Oh My Zsh would still be building momentum nearly seven years later.





<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/5d64d52431392618f92769bdf264f447?postId=af99ca54212c" data-media-id="5d64d52431392618f92769bdf264f447" allowfullscreen="" frameborder="0"></iframe>









<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/724b8c0713ed2da197646532fe01d0ea?postId=af99ca54212c" data-media-id="724b8c0713ed2da197646532fe01d0ea" allowfullscreen="" frameborder="0"></iframe>





It’s March 22, 2016 and the [top trending shell repository on Github is](https://github.com/trending/bash)? (find it amusing that the URL reads, “bash”…ahem)



![](https://cdn-images-1.medium.com/max/1600/1*nKEDfA4i1F7JUtmV7LWAwg.jpeg)

_“the (40 new) stars look very different today…”_



Where do all these new users keep coming from? I ❤ you people!

While I have many stories to share (and intend to write more on this topic), I wanted to speak to those who have been debating the idea of open sourcing a project.







![](https://cdn-images-1.medium.com/max/2000/1*FYWvq5YZRXLsLWamTXvhAQ.jpeg)

Brian Middleton







#### Eight Considerations For Your Open Source Project

**Don’t start with a wildly ambitious goal****.** Start your project with a simple, attainable goal.What does success look like? In my scenario, I wanted 1–2 people on my team to use my scripts. The project was a success in under 24 hours.

Everything since has been extra-credit.

**Don’t try to account for every scenario.** If I had gotten hung up on some long-term details for the project, Oh My Zsh would never have happened. Nearly everything that has been added to the project has come organically post-initial release.

One of the beautiful aspects of an open source project is that your user base can help shape it.

**Don’t try to make it perfect.** Worrying how other people are going to react about your code shouldn’t be your biggest concern. Does it work? How do they feel when they’re interacting with it should be a higher concern. In my case, I’ve had some great contributors over the years who have helped tidy up and improve the quality of the code that I originally released.

Rarely has anyone said anything critical about my old code — maybe they should have, though. ;-)

**Don’t try to be everything to everyone.** There have been a few points in the history of the project where we hit a crossroads. In particular, there was a time when a huge rebuild was proposed, which I was quite excited about until I was able to wrap my head around some of the changes.

[**Proposal to Simplify OH-MY-ZSH · Issue #377 · robbyrussell/oh-my-zsh**  
_oh-my-zsh - A delightful community-driven framework for managing your zsh configuration. Includes 200+ optional plugins…_github.com](https://github.com/robbyrussell/oh-my-zsh/issues/377#issuecomment-4204013 "https://github.com/robbyrussell/oh-my-zsh/issues/377#issuecomment-4204013")[](https://github.com/robbyrussell/oh-my-zsh/issues/377#issuecomment-4204013)

As a result, a fork was rebranded and we agreed to follow different paths. Not everyone was happy with my decision here, but it was during this period that it became clear (to me) that I wanted to focus my attention on folks who weren’t too comfortable with the terminal and/or git.

**Don’t stop thanking contributors.** If anybody helps your project out, please let them know how much you appreciate their effort. I can’t thank my contributors enough. One of my biggest self-critiques related to this project is that I’ve not been consistent enough in being vocal about my appreciation.

There are [910 people from all over the world](https://github.com/robbyrussell/oh-my-zsh/network/members) who have their code accepted into the master branch of Oh My Zsh at the time of writing this.



![](https://cdn-images-1.medium.com/max/1600/1*08x0ukNsdXSmR3yvtn9foA.png)

It’s such a long list that Github can’t even list them all.



In particular, thank **you**. (you know who you are)

**Don’t forget the documentation.** Over the years, documentation of plugins and functionality has been vital to helping inform users on how to take advantage of the framework.

I wish we had adopted this convention several years before.





<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/7a231aa08a03af3f6986caec2d348791?postId=af99ca54212c" data-media-id="7a231aa08a03af3f6986caec2d348791" allowfullscreen="" frameborder="0"></iframe>





The README file is going to be seen the most…so make it count. In my case, I opted to introduce people to my personality and dry sense of humor.

Honestly, seeing tweets like this means the world to me.





<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/71585d387de7fdfaadde273b6257abc9?postId=af99ca54212c" data-media-id="71585d387de7fdfaadde273b6257abc9" allowfullscreen="" frameborder="0"></iframe>





**Don’t forget about the rest of your life.** Again, I never anticipated the project turning into what it is today.

Are you familiar with the anecdote about [the frog in a pot of boiling water](https://en.wikipedia.org/wiki/Boiling_frog)?

It took me 3–4 years, too many, to finally bring in another person to help maintain the project. I kept thinking that I could catch up with all the open pull requests and issues. What I kept telling myself was that folks who know how to fork the project can make their desired changes and work off of that, so reviewing and approving pull requests is a nice-to-happen versus a need-to-happen.

In practice, it’s somewhere in between. I do feel a bit bad for old pull requests lingering, but I also don’t keep Oh My Zsh as one of the top few projects on my plate.

Outside of Oh My Zsh, I run [a 19-person agency](http://www.planetargon.com/), play guitar in an instrumental post-rock band, sit on the board of directors of a local homeless shelter non-profit, travel with my camera a lot, ride my motorcycle, ride my bicycle, and try to keep a social life with my friends. Oh My Zsh fits somewhere in amongst all of these.

It’s not at the top of my priority list. It’s not at the bottom. It’s somewhere between. This isn’t an excuse to not being able to keep up with the community, but more of a reminder that those other things should matter to you, too, if you’re about to start your own project.

#### (I will write more on the topic of leading an open source project w/maintainers in another story… ❤ [are you following me?](https://medium.com/@robbyrussell) ❤)

**Don’t forget to have some fun.** When you start your project, decide if this is going to be serious work time or play time. Perhaps it can be somewhere in the middle.

Oh My Zsh has, always, been a play time activity project for me.





<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/500ba87dca273165e97e452459d93a70?postId=af99ca54212c" data-media-id="500ba87dca273165e97e452459d93a70" allowfullscreen="" frameborder="0"></iframe>









<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/5f0bd6ce292dce43147daad439762aee?postId=af99ca54212c" data-media-id="5f0bd6ce292dce43147daad439762aee" allowfullscreen="" frameborder="0"></iframe>









<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/6e2eb6b548ce4ecda87c1952edaa23ad?postId=af99ca54212c" data-media-id="6e2eb6b548ce4ecda87c1952edaa23ad" allowfullscreen="" frameborder="0"></iframe>









<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/40e74c432ca56e202ab0105913fe25de?postId=af99ca54212c" data-media-id="40e74c432ca56e202ab0105913fe25de" allowfullscreen="" frameborder="0"></iframe>









<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/9a22dca0601e27a1bf39c1bd2423e7ff?postId=af99ca54212c" data-media-id="9a22dca0601e27a1bf39c1bd2423e7ff" allowfullscreen="" frameborder="0"></iframe>









<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/20ae07b2ce31bd55ef694ed1390c9732?postId=af99ca54212c" data-media-id="20ae07b2ce31bd55ef694ed1390c9732" allowfullscreen="" frameborder="0"></iframe>









<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/c3185adeb088f8acefca828d8f3eac43?postId=af99ca54212c" data-media-id="c3185adeb088f8acefca828d8f3eac43" allowfullscreen="" frameborder="0"></iframe>









<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/d5366d1badaf373f58a32b08d0a34fde?postId=af99ca54212c" data-media-id="d5366d1badaf373f58a32b08d0a34fde" allowfullscreen="" frameborder="0"></iframe>









<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/2a37c81d718fb6f71639cc4b90d7b295?postId=af99ca54212c" data-media-id="2a37c81d718fb6f71639cc4b90d7b295" allowfullscreen="" frameborder="0"></iframe>









<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/2c39d89909229cfaa0cf455bb5d5adbc?postId=af99ca54212c" data-media-id="2c39d89909229cfaa0cf455bb5d5adbc" allowfullscreen="" frameborder="0"></iframe>





Knowing that one of my playful projects has been and continues to be enjoyed by people is such a wonderful feeling.





<iframe width="500" height="250" src="https://medium.freecodecamp.org/media/a89e73add920989410ef41a72a2b6487?postId=af99ca54212c" data-media-id="a89e73add920989410ef41a72a2b6487" allowfullscreen="" frameborder="0"></iframe>





Some might call it a _passion_ project_._ **I call it _playtime_.**

#### Interested in my fun open source project?



![](https://cdn-images-1.medium.com/max/1600/1*EHjw8IcEy7KWymemWXXsCg.png)



You can learn more at [http://ohmyz.sh](http://ohmyz.sh/).











* * *







### If you enjoyed this article, please recommend and/or share it. ❤











* * *







Already using Oh My Zsh? I’d love to learn how you heard about it.








