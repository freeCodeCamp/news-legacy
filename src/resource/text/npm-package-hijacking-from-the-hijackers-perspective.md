---
author: Nathan Johnson
authorTwitter: https://twitter.com/nm_johnson
authorFacebook: none
title: "npm Package Hijacking: From the Hijackers Perspective"
subTitle: "In light of recent events in the javascript community, I would like to share the story of how I came into control of more than 200 heavil..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*DVki0FvyhmyFCkcPPuhMCw.png
url: https://medium.freecodecamp.org/npm-package-hijacking-from-the-hijackers-perspective-af0c48ab9922
id: npm-package-hijacking-from-the-hijackers-perspective-af0c48ab9922
date: 2016-03-25T14:21:45.198Z
tags: [
  "JavaScript",
  "NPM",
  "Security",
  "Tech",
  "Programming"
]
---
# npm Package Hijacking: From the Hijackers Perspective



![](https://cdn-images-1.medium.com/max/1600/1*DVki0FvyhmyFCkcPPuhMCw.png)



In light of recent events in the javascript community, I would like to share the story of how I came into control of more than 200 heavily depended on modules, explain some misunderstood aspects of npm modules, and perhaps even share an interesting PoC demonstrating the potential repercussions doing a simple **npm install** can have.

For a bit of background, earlier in the week an open source developer who authored hundreds of npm modules ended up unpublishing all of them from npm. The problem is many of the unpublished packages were heavily depended on, and now many modules are still broken and cannot be installed because of missing dependencies.

Seeing this, I was immediately terrified because it meant modules that had hundreds of thousands of installs a month became available for anyone to re-register with any code they wanted, which then would be installed by many unsuspecting users. Had a bad actor gotten control of the packages, they could have wreaked serious havoc on the node community (the second half of this post will get into that).

Once I realized what was going on, I decided that in order to prevent the worst case scenario from happening, I should grab all the packages I could and so I hacked together a quick bash script:

<pre name="ec70" id="ec70" class="graf graf--pre graf-after--p">A="$1"</pre>

<pre name="79b9" id="79b9" class="graf graf--pre graf-after--pre">echo '{  
  "name": "'"$A"'",  
  "version": "2.0.0",  
  "description": "",  
  "main": "index.js",  
  "scripts": {  
    "test": "echo \"Error: no test specified\" && exit 1"  
  },  
  "author": "",  
  "license": "ISC"  
}' > package.json  

npm publish</pre>

and exectued

<pre name="825c" id="825c" class="graf graf--pre graf-after--p">$ cat module_list | xargs -I{} ./x.sh {}</pre>

and about a minute later, I saw this:



![](https://cdn-images-1.medium.com/max/1600/1*5ptmA_DpZZlQJQQGwetjrw.png)



I had managed to register 238 of the 273 packages that were unpublished. Not bad!

After getting in contact with npm, I was asked to give back the modules to npm who would replace the contents with this new repo: [https://github.com/npm/security-holder.](https://github.com/npm/security-holder) I happily obliged but was allowed to keep a handful of the most popular modules that I had replaced with the original source in order to prevent many modules from breaking.

### Power of NPM Modules

With that in mind, let’s take a look at what would have been possible if someone with different intentions had gotten ahold of the modules.

#### Package installation

When a npm module is installed, there are a [number of hooks](https://docs.npmjs.com/misc/scripts) that can be defined in the package.json specifying scripts to run during different stages of the install process.

In this case, preinstall and postinstall are the most useful. They let the author specify shell commands to run during the installation process, commonly used for things like `node-gyp rebuild` in order to compile native addons for the target machine.

However, they also can be used to execute any shell script the authors pleases. For a quick check of your infrastructure, does your user with sudo access have a password set? Which for example, on AWS by default users do not — then the shell script easily can include sudo in the command and boom, it has root. More on this later.

#### Module runtime

In the wake of recent events, I’ve seen some more or less ignorant criticism of the above aspect of npm modules. “Why on earth are they allowed shell access?” I’ve read.

Modules have access to everything you do in node, which means just as they are able to run post-install scripts, they also are able to execute

<pre name="36e7" id="36e7" class="graf graf--pre graf-after--p">const exec = require('child_process').exec  
exec("sudo rm -rf --no-preserve-root /")</pre>

So those suggesting packages be installed with the “--ignore-scripts” flag, sure, I guess it buys you something (most likely packages not working) — but at the end of the day, every module in your dependency tree is able to execute whatever code they want on your servers and local machine.

### The Perfect Storm

npm modules have an extreme amount of power over developer’s computers and the servers they deploy to. As a result, there is a large amount of trust placed in open source developers who write the most heavily utilized modules. When packages are able to be unpublished and then reclaimed by anyone, a very dangerous environment emerges as we witnessed earlier in the week. I applaud the npm team for quickly reacting and am glad to see that they are in the process of changing their system so this same situation cannot repeat itself.

Having said that, I still caution everyone to be a little more thoughtful about what modules they are installing.

#### Show me an actual exploit!

In the spirit of _PoC||GTFO,_ I would like to present one theoretical way this attack vector can become quite terrifying. This targets OSX since it has by default, a horribly insecure configuration of sudo that relatively few people seem to be aware of, even though it [has been thoroughly talked about.](http://blog.rongarret.info/2015/08/psa-beware-of-sudo-on-os-x.html)

If you are running OSX, installing this module:

<pre name="53d8" id="53d8" class="graf graf--pre graf-after--p">npm install osx-root-poc</pre>

will at some point in the future (once you execute any command with sudo), gain root access to your computer. However it won’t do anything nefarious, just leave a friendly note in your home directory.

One quick addendum: npm is not unique among package managers, other popular package managers are also likely vulnerable to this same kind of attack. More to come later…








