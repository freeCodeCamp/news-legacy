---
author: Buddy Reno
authorTwitter: https://twitter.com/BuddyLReno
authorFacebook: https://facebook.com/100004496349374
title: "Bash Shortcuts to Enhance Your Git Workflow"
subTitle: "The more you work with Git, the faster you’ll learn its workflows...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*5RNo772LhsWxTO5LYqbTYw.jpeg
url: https://medium.freecodecamp.org/bash-shortcuts-to-enhance-your-git-workflow-5107d64ea0ff
id: bash-shortcuts-to-enhance-your-git-workflow-5107d64ea0ff
date: 2017-01-18T22:15:54.001Z
tags: [
  "Git",
  "Bash",
  "Programming",
  "Productivity",
  "Software Development"
]
---
# Bash Shortcuts to Enhance Your Git Workflow







![](https://cdn-images-1.medium.com/max/2000/1*5RNo772LhsWxTO5LYqbTYw.jpeg)

Unrelated — I just like it. [Photo credit](https://unsplash.com/@peter_mc_greats)







The more you work with Git, the faster you’ll learn its workflows.

Here are some of the tasks that me and my team do daily:

1.  Create and name branches
2.  Count commits for squashing
3.  Update master to the latest version, then rebase it onto a branch

But each of these tasks requires multiple steps. This got me thinking: _there has to be a better way to do this_.

Thankfully, there is a better way! By learning a little Bash, you can to create Git aliases that will save you tons of time.

#### First Things First: Git’s ! Flag

Have you ever seen a Git alias that has an exclamation mark at the beginning? For example:

<pre name="3ac3" id="3ac3" class="graf graf--pre graf-after--p">somealias = “!......some code”</pre>

According to the Git’s [documentation](https://git-scm.com/docs/git-config#git-config-alias), _If the alias expansion is prefixed with an exclamation point, it will be treated as a shell command._

Hey, that’s neat! We can use this to our advantage, and add some intelligence to our aliases. Let’s try a simple example first and build up the complexity further on.

Open up your `~/.gitconfig` file in your favorite text editor and add the following alias:

<pre name="403f" id="403f" class="graf graf--pre graf-after--p">hello = "!echo \"Hello World\""  
# (the backslashes are for escaping the quotes.)</pre>

Now when you run `$ git hello` in your terminal, you’ll get `Hello World` as the output. Awesome! Armed with this knowledge, let’s walk through the 3 examples outlined above and the aliases I’ve used to accomplish them.

#### Consistent Branch Names

Alias:

<pre name="f9be" id="f9be" class="graf graf--pre graf-after--p">newb = "!f() { ticketnum=$1; branchName=$2; git checkout -b \"POD-${ticketnum}/${branchName}\"; }; f"</pre>

Usage:

<pre name="8f64" id="8f64" class="graf graf--pre graf-after--p"># Creates a new branch named POD-573/my-new-feature  
$ git newb 573 my-new-feature</pre>

Key Commands:

*   Function: `f(){}; f`
*   Parameters: `$1`, `$2`
*   String Interpolation: `${ticketnum}`, `${branchName}`

On my team, we prepend our branch names to match the card number in our ticketing system. For example: “POD-573/my-new-feature”. This works with a commit hook in the ticketing system to tie things together, so it’s important we stick with this system.

#### Function

In bash, you can write a function like this: `FunctionName(){}; FunctionName`. Writing the function name after the function declaration is what runs the function. In my aliases, I’ve shortened the function name to simply `f` for brevity.

When bash runs `f`, it will run all the code entered between the curly braces `{}`. In this case, the function is running `git checkout -b “MESSAGE”`.

#### Parameters

The parameters are what immediately follow the command. For example, the move command in bash:

<pre name="028a" id="028a" class="graf graf--pre graf-after--p">$ mv ./file.txt ./folder/file.txt</pre>

The first parameter the move command receives is `./file.txt`. This parameter is automatically assigned to `$1` in bash.

Likewise, `./folder/file.txt` is assigned to `$2`. In the alias function, you can use this knowledge to assign more meaningful variable names for those parameters.

<pre name="09fe" id="09fe" class="graf graf--pre graf-after--p"># expanded for readability  
!f() {  

 # much more meaningful!  
 ticketnum=$1;   
 branchName=$2;  

 git checkout -b \"POD-${ticketnum}/${branchName}\";  
};  
f</pre>

#### String Interpolation

To use variables in bash, you simply put a dollar sign `count = "!f() { compareBranch=${1-master}; git rev-list --count HEAD ^$compareBranch; }; f"</pre>

Usage:

<pre name="0e00" id="0e00" class="graf graf--pre graf-after--p"># Branch has made 5 commits since branching from master.  
$ git count # returns 5  

# Pass in a branch name to check instead of master  
$ git count dev</pre>

Key Commands:

*   Parameter Expansion: `${1-DEFAULT}`
*   Counting Revisions: `rev-list --count`

#### Parameter Expansion

Similar to the string interpolation, notice that the `compareBranch` variable is now being assigned using the `${}` syntax. This allows you to set a default value if no parameter is passed through to the command. In the alias, `compareBranch=${1-master}` will use master as the `compareBranch` if nothing was passed to the command.

<pre name="66be" id="66be" class="graf graf--pre graf-after--p"># assumes master  
$ git count  

# compareBranch is set to dev  
$ git count dev</pre>

You can check out the bash [documentation](http://www.gnu.org/software/bash/manual/bashref.html#Shell-Parameter-Expansion) for more on parameter expansion.

#### Counting Revisions

By default, Git’s `rev-list` command will return the SHAs associated with the given branch name. By using the `--count` flag, it will instead return the total number of commits for that particular branch. Since the goal is to get the number of _new_ commits since branching from master (or some other branch), you need to pass in another branch name with the `^` operator.

<pre name="b3c0" id="b3c0" class="graf graf--pre graf-after--p">$ git rev-list --count HEAD ^master</pre>

This command tells git _I want the number of commits that are accessible from HEAD (the current branch) but NOT ACCESSIBLE from master._

If you’ve made 5 commits after creating a branch from master, the command would return 5.

#### Squashing X Commits

Alias:

<pre name="4794" id="4794" class="graf graf--pre graf-after--p">squashbase = "!f() { branchName=${1-master}; commitCount=$(git count $branchName); git rebase -i HEAD~$commitCount; }; f"</pre>

Usage:

<pre name="11dd" id="11dd" class="graf graf--pre graf-after--p"># Get the number of commits to squash  
# and start an interactive rebase.  
$ git squashbase  

# pass in an optional branch name.  
$ git squashbase dev</pre>

Key Command:

*   Command Substitution: `$(COMMAND)`

#### Command Substitution

This one is fun. The script again uses the optional `branchName` to substitute a branch for master, but the second parameter uses a new syntax `$()`. This is called “command substitution.” When Bash sees a command within the parenthesis, it will evaluate that statement and use the output as the value of the variable. For example `x=$(echo “Hello”)` will evaluate to `x` receiving the value of `Hello`.

In this case, the alias is calling back to the previous `count` alias to get the number of commits made since master. Assuming the current branch has made 5 commits since branching from master, running `$ git squashbase` will evaluate to `$ git rebase -i HEAD~5`. This command starts an interactive rebase with the latest 5 commits, giving you an opportunity to clean up your commits.

#### Updating Master and Rebasing The Branch

Alias:

<pre name="a116" id="a116" class="graf graf--pre graf-after--p">pullbase = "!f() { branchName=${1-master}; git checkout $branchName && git pull && git checkout - && git rebase -i $branchName; }; f"</pre>

Usage:

<pre name="68fe" id="68fe" class="graf graf--pre graf-after--p"># Checkout the branch, pull it, check out the previous branch and rebase.  
$ git pullbase  

$ git pullbase dev</pre>

Key Commands:

*   Git’s dash shortcut: `-`
*   Control command: `&&`

#### Dash Shortcut

There isn’t much to explain here. Basically, this will save you _a lot of typing_. The dash is a reference to the last branch you currently checked out — kind of like the recall button on a TV remote control.

Consider the following example:

<pre name="cfe8" id="cfe8" class="graf graf--pre graf-after--p"># currently on branch dev  
$ git checkout master # now on master branch  

$ git checkout - # back on dev branch.  

$ git checkout - # back on master branch.</pre>

#### Control Command

There are many ways to chain operations together in bash. Using the double ampersand `&&` is one of my favorites.

The benefit of this command is that it will stop processing if the previous command failed to complete. If git checks out master but fails pulling down latest, it will stop instead of pressing forward and rebasing potentially stale changes into your branch.

The above alias will then execute the following steps, stopping if any fail:

1.  Checkout the master branch (or given branch).
2.  Update to latest.
3.  Checkout the branch you were previously on.
4.  Interactive rebase the master branch into your current branch.

My team requires all of our pull requests to be a single commit before they can be merged into master. So I run this command multiple times a day, and it’s saved me a lot of time since I started using it.

You can read about other control commands in Bash’s [documentation](http://www.gnu.org/software/bash/manual/bashref.html#Lists-of-Commands).

### Wait, why use an alias?

You may be asking, “Shouldn’t I just be writing bash profile scripts?”

Technically, you could do that. The advantage here is _context_. All of these commands are comprised of various Git commands. A function in your bash profile will run anywhere you type it.

By creating these scripts as Git aliases, you ensure that the commands will only be run in a git repo. Plus you don’t have to prepend your function names with `git-Function` or `gitFunction` just to “namespace” them. If you were going to do that, a Git alias is a better fit.

I hope you’ve found some inspiration from my shortcuts, and learned how you can create some of your own.

If you’ve made some favorite aliases or other enhancements to your own git workflow, share them in the comments section so we can all explore them and potentially save ourselves lots of time and typing.








