---
author: Nathan Malcolm
authorTwitter: none
authorFacebook: none
title: "Hacking Imgur for Fun and Profit"
subTitle: "So you think your memes are safe…..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*kACKGoXyE6b-f0aelUSF4Q.jpeg
url: https://medium.freecodecamp.org/hacking-imgur-for-fun-and-profit-3b2ec30c9463
id: hacking-imgur-for-fun-and-profit-3b2ec30c9463
date: 2016-07-29T12:03:06.311Z
tags: [
  "Security",
  "Information Security",
  "Imgur",
  "Bug Bounty",
  "Web Development"
]
---
# Hacking Imgur for Fun and Profit

So you think your memes are safe…



![](https://cdn-images-1.medium.com/max/1600/1*kACKGoXyE6b-f0aelUSF4Q.jpeg)

Sorry not sorry.



I’ve been meaning to write about this for a while. It all started back in July 2015 when I decided to look for vulnerabilities in [Imgur](http://imgur.com/), an incredibly popular image sharing platform.

The reason I chose Imgur was because I frequently visited the site and I was already familiar with how the site worked. After a quick survey, I managed to identify some common vulnerabilities: XSS, clickjacking, and a whole load of CSRF issues.

Reporting the issues proved to be a little difficult. The only way I could see to contact Imgur was through their support system which wasn’t suitable for reporting security issues. Eventually, August 1st, I wrote up a report detailing the issues, shipped an email off to security@imgur.com, and waited. But not for long.

A couple of hours later, I received an email from Imgur’s founder and CEO, Alan Schaaf, thanking me and offering me some swag as a reward. Over the next few days I continued to forward them reports of vulnerabilities I discovered, including one which would later earn me over $5,000.

Things were quiet for a while. I occasionally checked to see if any of the issues had been fixed, and sure enough, many were. It was nice to know they were taking the issues seriously, and that I was helping secure the platform.

Then, in late September, [Imgur got hacked](https://www.reddit.com/r/technology/comments/3lw2g6/imgur_is_being_used_to_create_a_botnet_and_ddos/). Someone was able to upload an HTML file with malicious Javascript to Imgur and proceeded to target 8chan users.

This was quickly [fixed,](http://blog.imgur.com/2015/09/22/imgur-vulnerability-patched/) however it was widely reported and clearly something Imgur wished hadn’t happened. In response, Imgur finally launched their [bug bounty program](http://blog.imgur.com/2015/09/30/imgurs-security-bug-bounty-program/) a week later.

This was great news, as now people had a way of securely reporting issues. I contacted Alan once more asking if any of my reports were eligible for a bounty, and he put me in touch with one of Imgur’s developers, who confirmed I was eligible and asked me to create a report on [HackerOne](https://hackerone.com/imgur). For all the vulnerabilities I had reported — 20+ in total — $50 was my reward. The reason being “for the most part, we’re offering swag for CSRF reports, so you’re more of the exception here”.

Before Imgur created their bug bounty program, Imgur was riddled was CSRF vulnerabilities. Some, which have now been fixed, include: the ability to update the user’s bio, the ability to generate a new client secret for a given [Imgur app,](https://imgur.com/account/settings/apps) and the ability to change the redirect URL for a given Imgur app. These were some of the issues I had initially reported, so to be rewarded with only $50 was quite disheartening.

However, the developer was clear: the program was new, and they were still learning and trying to improve it. With that in mind, I gave him a list of the issues I had reported and he confirmed there was much more in the reports than he had realized.

In the few weeks between discussing the issues and getting an additional reward, I discovered something else interesting.

During my initial research, I looked through Imgur’s HTML source code and found the following snippet:

<pre name="788a" id="788a" class="graf graf--pre graf-after--p">$(function() {  
 if(!/^([^:]+:)\/\/([^.]+\.)*imgur(-dev)?\.com(\/.*)?$/.test(document.referrer)) {  
 Imgur.Util.jafoLog({ event: ‘galleryDisplay’, meta: { gallerySort: ‘viral’, galleryType: ‘hot’ }});  
 }  
 });</pre>

This led me to perform some recon on imgur-dev.com, which turned out to be the domain Imgur uses for internal development. A quick Google search for site:imgur-dev.com revealed Google had indexed the subdomain “alan.imgur-dev.com” which contained a development version of Imgur. The server, however, was down at the time. I was able to view a cached copy of the page which revealed some interesting information, including database tables and column names in SQL queries output by [Kohana’s profiler](https://kohanaframework.org/3.1/guide/kohana/profiling).

Fast forward to November, I decided to take another look at imgur-dev.com again. Boom! alan.imgur-dev.com was live and accessible. What did I find? It was essentially Imgur as you know it with a couple of users and a few test posts. What’s notable is it’s a developer’s environment — I could see stacktraces which included parts of Imgur’s source code, PHP warnings and notices, details about the environment, database queries, and full paths to configuration files.

With these details I created another report on HackerOne and waited for a response. Two days later, I took yet another look at alan.imgur-dev.com. This time I decided to use [SubBrute](https://github.com/TheRook/subbrute) on alan.imgur-dev.com to see if there were any sub-subdomains which may be of interest.

Not longer after starting the scan, I got a hit: es.alan.imgur-dev.com. A quick visit showed it was an Elasticsearch server which hadn’t been updated in a while. In fact, after searching around for an Elasticsearch vulnerability, I discovered [CVE-2014–3120](https://www.cve.mitre.org/cgi-bin/cvename.cgi?name=2014-3120).

<pre name="f686" id="f686" class="graf graf--pre graf-after--p">The default configuration in Elasticsearch before 1.2 enables dynamic scripting, which allows remote attackers to execute arbitrary MVEL expressions and Java code via the source parameter to _search.</pre>

Naturally, I grabbed a proof-of-concept script and tried reading /etc/passwd. Bingo. File read successfully. Now, the safe thing to do here would be to report the issue and move on. Not this time. Imgur was at the stage of offering $50 rewards and swag. I wasn’t happy with that. I decided to go further and see how badly I could pwn Imgur if I wanted to.

One configuration file I noticed earlier on was called “keys.php”. I decided to try and read it as I had done /etc/passwd, and once again it was a success. This file contained everything I needed. API keys for Fastly and MailChimp, mobile app API keys, even reCAPTCHA API keys. Sweet. But that’s not all… the file also contained the credentials used to connect to both the local and remote MySQL servers. Whoops.

The problem now was that I didn’t know the hostname of the remote MySQL server, and I can’t connect to the local one remotely. Wat do?

I went back to the scan of subdomains, and there was another hit. sql.alan.imgur-dev.com. Oh yes, you know what’s about to happen…

I visited the domain and was greeted by phpMyAdmin. Now, usually you’d expect to enter only the username and password to login. Luckily for me I was given a choice of hosts to connect to. One was the local server, and the other was a remote server hosted on Amazon AWS. I selected the remote server, entered the credentials, and I had full access to Imgur’s production database.

Well, there you have it, it was fun to write about… Oh, you thought that was it? That’s not all, folks.

The configuration file also contained two sets of Amazon [AWS access keys](https://aws.amazon.com/developers/access-keys/) — one set for development and one set for production. So what did I do next?

Nothing.

Although I know I could have used the keys to spin up new servers, SSH into existing ones, or completely destroy them, I decided against even testing whether they worked.

An important part of security research is knowing when to stop.

I went far enough to prove how serious the issue is, and demonstrate what a malicious attacker could do, while not being overly careless or intrusive.

This needed to be fixed, and fast. I updated the HackerOne report with my new findings, and emailed Alan urgently to bring it to his attention. Within half an hour the server was offline. The next morning, Alan replied letting me know that access to the server was disabled while they figured out the next steps. I was incredibly impressed with how they handled it.

<pre name="65af" id="65af" class="graf graf--pre graf-after--p">A security group configuration error allowed Imgur development environments to face the public internet. Typically these environments were protected behind a special endpoint which would open access to authenticated Imgur employees for a short time window. Since the development environments were configured in such a manner to make development easier, some keys and environment variables were exposed. While most of these pieces of sensitive information were limited to the development environments, some production information was also exposed. Since this report was published, security around development environments has been completely re-worked and they now reside behind a VPN.</pre>

Moving forward to early December, for both the multiple vulnerabilities and the high risk issue I had reported, I was rewarded with $500\. Needless to say, I wasn’t impressed. I decided to write a email to Alan giving my feedback on the program so far, and also explaining why $500 wasn’t enough.

<pre name="68fd" id="68fd" class="graf graf--pre graf-after--p">Bug bounties are like hiring mercenaries. Cheaper than a standing army of pentesters. But don't complain when they swap sides for more gold.</pre>

A week later Alan replied, agreeing with the points I had made, and said the team would have a meeting about the program soon. I was pleased to hear my feedback was taken seriously. Sometimes it helps to talk to the CEO directly for real change to happen.

Forward once more to January 2016, Alan sent me a final email.

<pre name="5157" id="5157" class="graf graf--pre graf-after--p">Hey Nathan,  

Happy new year! I was finally able to sync up with my team and come to a conclusion on this. Since your exploit went above and beyond (contained several exploits all chained together, access to production data, etc), we want to go above and beyond for you too, and have agreed to offer you an additional $5,000\. This is so much higher than anything we've ever offered before, but again, this exploit was so much higher than anything that has  
been found before, so I think it's deserving and I hope it's sufficient for you.  

Thanks so much for protecting us and properly reporting it to us. Best of luck in the new year.  

Best,  
Alan</pre>

This was fantastic news to receive. Not only did Imgur change their bug bounty program to pay out fairly to researchers, the additional $5,000 has helped myself and others incredibly. Half of that went to people in need, including [Lauri Love,](https://freelauri.com/) a hacker facing extradition to the United States, and a close friend who was recently made homeless. Various charities and researchers also benefited from it.

I’ve continued to participate in Imgur’s bug bounty program, and while it’s not perfect, it’s responded and paid out nicely to myself and others. I hope other teams can learn from Imgur’s willingness to take on feedback and improve, as communication around security is so very important.

What’s next for me? I hope to continue learning and work to make the Internet a safer, securer environment for future generations. The Internet is tiny compared to what it will be in 10 years time. The battle isn’t over, and war is yet to come.

If you’re looking for a challenge, I highly recommend checking out Imgur’s bug bounty program and others on [HackerOne](https://hackerone.com/imgur).

You can follow me on [Twitter](https://twitter.com/NathOnSecurity) where I tweet about security, the terrible British weather, and memes. Yeah. You know you want to… :-)








