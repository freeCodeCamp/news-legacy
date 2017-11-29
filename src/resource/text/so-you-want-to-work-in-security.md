---
author: Parisa Tabriz
authorTwitter: https://twitter.com/laparisa
authorFacebook: none
title: "So, you want to work in security?"
subTitle: "Every once in a while, I’ll get an email from an eager stranger asking for advice on how to have a career in security (computer, informat..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*Z7BjkasC8Kx5JtZ7N5Pe2A.gif
url: https://medium.freecodecamp.org/so-you-want-to-work-in-security-bc6c10157d23
id: so-you-want-to-work-in-security-bc6c10157d23
date: 2016-07-28T15:13:33.088Z
tags: [
  "Infosec",
  "Security",
  "Career Advice",
  "Cybersecurity",
  "Hacking"
]
---
# So, you want to work in security?

Every once in a while, I’ll get an email from an eager stranger asking for advice on how to have a career in security (computer, information, cyber… whatever). This is great! We need more passionate, creative, hard-working people that want to work on making technology safer to use. It also turns out to be a pretty financially stable way to make a living.

There are plenty of other posts on this exact topic ¹, but I’ll offer some high-level thoughts pulled from my own experience.



![](https://cdn-images-1.medium.com/max/1600/1*Z7BjkasC8Kx5JtZ7N5Pe2A.gif)



### **WARNING: It’s not like the movies.**

Working in security isn’t like it’s depicted in Hollywood. I LOVE watching hacker-inspired movies and shows for the fantasy and escape, but day-to-day work isn’t (in my experience) as fast-paced and sexy as it looks on screen.

Now, that’s true for most professions, and even if _I’ve_ never spent a day deciphering streaming code in an underground lair, I still think it’s an exciting, important, challenging, and rewarding field to work in.

### **There is no standard or perfect curriculum.**

Security is a broad, interdisciplinary, applied field. There are needs for people that design and build secure systems, people that try to break systems, people that try to detect intrusions, and lots of things in between. If I’ve learned anything, I’ve learned that there is no single, standard, or best preparatory path. Maybe this will change as the field matures, but I doubt it. It’s also not like other professional fields that require accreditation (e.g. medicine, law), which can be both liberating and intimidating.

Independent of how you acquire it, you’ll benefit from having a strong understanding of [applied computer science](https://en.wikipedia.org/wiki/Computer_science#Applied_computer_science), or how computers and software work. Much of applied computer science is about solving problems with layers of abstraction, and security is often about finding the flawed assumptions in those abstractions… and then figuring out how to best fix (or exploit) them.

I did this by earning an engineering degree in [Computer Science](http://cs.illinois.edu/) from a [public university](http://illinois.edu/). Some of the more useful topics to me were operating systems, networking, computer architecture, and compilers. Beyond that, I just took technical courses I found interesting (e.g. digital signal processing, biomedical engineering, artificial intelligence) and explored security topics in networking, privacy enhancing technologies, and (web, client) application security via project work in student clubs and internships.

You’ll also benefit from understanding how people (users, customers, whatever) that use technology work. If I could go back in time to my more {care, obligation}-free university days, I’d take some classes in psychology, sociology, and human factors.

I work with experts that have similarly traditional academic backgrounds (e.g. degrees in computer engineering, computer science, mathematics, etc.). I also know plenty of people that have less typical backgrounds (e.g. chemistry, film studies, psychology, graphic design) and some folks that dropped out of school before finishing a degree.

On the topic of [security certifications](https://danielmiessler.com/blog/infoseccerts/), I don’t have any, and I don’t think I’ve been held back because of it. It’s possible that some industries or countries require them for infosec professionals, and they’re certainly a thing that some reasonable people have pursued — caveat emptor!

Culturally, I’d recommend reading the [Hacker Manifesto](https://en.wikipedia.org/wiki/Hacker_Manifesto) or [How to Become a Hacker](http://www.catb.org/esr/faqs/hacker-howto.html), which serves as both inspiration and moral compass for many security experts. Even if you don’t liken yourself to a hacker, it’s helpful to understand the mindset of some of the people you’re working alongside.

Beyond that, most of what I know I’ve learned over time, in anecdotes and nuggets from friends and co-workers, security blogs, conference papers and presentations, mailing lists, local security groups, and other online resources. A lot of the things I hear about or ingest today come from [folks on my Twitter security list](https://twitter.com/laparisa/lists/security).

### **Stop reading, start doing.**



![](https://cdn-images-1.medium.com/max/1600/1*Q7FRcfOGAAIJoADz0KvTIQ.gif)



This applies to any career pursuit, but get some real life work experience as fast as you can. That’s the best way to narrow down your interests, strengths, and areas of future development. You’ll also better understand what a normal work day and environment consist of, including what you like and don’t like. One of the most valuable career-related experiences of my life was doing an internship I hated since it veered me strongly into another direction :)

In terms of how to start getting experience, I don’t have a simple answer. Check out career fairs and conferences, get involved in clubs or other organizations, apply for internships and part-time jobs with bold enthusiasm. Way before coming to Google, I cleaned up dried nacho cheese at a concession stand as part of my regular shift as a community pool lifeguard. That little bit of job experience helped me get a college dorm SysAdmin job, which no doubt was relevant when interviewing for an IT internship at a large Pharmaceutical company. I got some “real” (i.e. non-coursework) software experience with clubs at University, and I found a cybersecurity internship posting on a school newsgroup, which probably gave me just enough relevant job experience for someone at Google to consider me for an interview.

### **Write code.**

The best security engineers I know are also actively writing code. This gives them firsthand experience with writing software, including unintentionally-yet-inevitably introducing security bugs. The latter forces a real empathy for all developers. After all, it’s often harder to consistently write secure code than it is to point out insecure code.

If you’re stuck on where to start in a project of significant size, try fixing bugs in an open source project. Everyone loves people that fix bugs! The project will thank you, and it’s typically a good way to get real-world experience and your foot in the door for future work.

### **Break code.**

Spend time finding software bugs. Learn how to use a debugger, network scanner, web debugging proxy, and software fuzzer. Spend time in hacker playgrounds, which are available for all skill levels. I first used [https://www.hackthissite.org](https://www.hackthissite.org) when I was in college, and listed out a couple other self-guided hacker training sites at [https://infosec.rocks](https://infosec.rocks). There’s also a good list of hacking challenges, competitions (e.g. CTFs), and time wasters [here](http://security.stackexchange.com/questions/3592/what-hacking-competitions-challenges-exist). Or find and report bugs in actual software you use. There are [plenty of software vendors that offer financial rewards for security bugs](https://bugcrowd.com/list-of-bug-bounty-programs), including [Chrome](https://www.google.com/about/appsecurity/chrome-rewards/) and [Google](https://www.google.com/about/appsecurity/reward-program/), as well as some core open source projects covered by the [Internet Bug Bounty program](https://hackerone.com/internet-bug-bounty).

Beyond finding bugs yourself, I’d recommend following along and learning from what others are finding ([bugtraq](http://seclists.org/bugtraq), [fulldisclosure](http://seclists.org/fulldisclosure/), [oss-sec](http://seclists.org/oss-sec)).

### **Share knowledge.**

I started learning about security back in college from peers in an ACM special interesting group called [SigMil](https://www-s.acm.illinois.edu/mailman/listinfo/sigmil-l), where members would give unpolished presentations about security topics they were interested in. We also took an annual pilgrimage to [DEFCON](https://www.defcon.org/) to attend talks (which was a lot easier to do a decade ago), buy security [books](https://www.defcon.org/html/links/book-list.html) or [magazines](http://www.2600.com/), or just chat with likeminded folks from other parts of the world about what they were working on. At Google, I’ve learned SO MUCH directly from my peers sharing their expertise, struggles, and half-baked ideas.

Sharing knowledge is important for a few reasons:

1.  Sharing knowledge is a necessary and effective way to scale best security practices (or pitfalls to avoid) across a large organization or project.
2.  I almost always learn something myself in preparing for a presentation or writing up documentation, so it’s been a good forcing function for me to uncover hidden corners of a topic.
3.  I almost always learn something from the audience, either from questions, comments, or follow up discussion.
4.  Pay it forward.

### **Practice your communicating too.**

Working in security means you’ll need to regularly explain complex, technical problems to different audiences, each with different vocabularies, expertise, and incentives. You’ll rarely have universal metrics to lean on when describing the severity of a vulnerability, nor will you have anything shiny to show off when promoting best security practices. You’ll have to keep people unflustered in the face of [FUD](https://en.wikipedia.org/wiki/Fear,_uncertainty_and_doubt), yet focused on action outside of crisis.

All of this takes skills in the art of communication, and in particular, explanation and negotiation. You’re unlikely to master this art from purely technical resources, so practice, publish, and forever aim to improve.

### **Expect to work hard and sometimes fail.**



![](https://cdn-images-1.medium.com/max/1600/1*0iQlhQQUroM4_A1zAW6n3w.gif)



Perhaps this is obvious, but it’s worth explicitly being called out.

Security is challenging work. You’ll need to constantly learn new things because the technical landscape you’ll need to secure is rapidly evolving much faster than our ability to deprecate the old, yet-to-be-entirely-secured stuff. The threat actors, who often have time and resources on their side, are also quick to adapt to existing defenses.

Security can be stressful. You’re dealing with ambiguous problems, imperfect solutions, limited data, and real threats to human safety.

It’s hard to measure success with security, and in my experience, people are more likely to notice failure. When securing real world technology, we’re ultimately in the business of risk mitigation, and no matter what someone on an RSA vendor floor tells you, there are no silver bullets.

### **(Try to) Be optimistic.**

This field can be depressing for some of the reasons I just outlined. It can seem impossible to keep pace with the speed of innovation in technology and exploitation. I mean, buffer overflow vulnerabilities have been around for decades, yet we still regularly see high-impact exploits leveraging them today (2016). You’ll regularly hear people scream security is impossible, and it’s getting worse, or [make entirely eloquent points about why we’re all failing](https://lcamtuf.blogspot.com/2010/05/security-engineering-broken-promises.html).

Reality can be harsh, but if we focus on the positive and think of all the things technology has afforded, it’s pretty dang impressive! It’s not perfect. It will never be perfect. But I think the cutting edge of security is a lot better than it was 10 years ago, we can do some pretty impressive stuff with some level of reasonable assurance, and that’s something that keeps me optimistic.

### **Ask for help.**

Don’t get discouraged if you run into jerks. I’ve seen plenty of chauvinism and ego in the infosec industry over the years. It’s not uncommon for a conversation (online, at a conference, wherever) to quickly turn into who is the most elite.

Perhaps this isn’t the experience for everyone, but I’ve been successful in large part due to the support, advice, mentorship, and help from lots of great security people whom I now consider friends. Just because you have to ask for help does NOT mean you aren’t cut out for this work.

If you need help, ask for it. **Just make sure you do your due diligence and make it as easy as possible for people to help you.** Most experts are pretty busy, so you’re much more likely to get a useful response if you ask a well-scoped question with sufficient context and no typos.

### **Good luck and happy hacking!**

[1] Some other security career advice thoughts I’ve stumbled upon:

*   Thomas Ptacek, Charlie Miller, Jeremiah Grossman, Richard Bejtlich, and Bruce Schneier share their thoughts in [http://krebsonsecurity.com/tag/security-career-advice/](http://krebsonsecurity.com/tag/security-career-advice/)
*   Chris Palmer, my friend and Chrome colleague, shares solid advice in [https://noncombatant.org/2016/06/20/get-into-security-engineering](https://noncombatant.org/2016/06/20/get-into-security-engineering)
*   Michal Zalewski (a.k.a. lcamtuf) shared 4 simple lessons based on his 20 years of (awesome and often groundbreaking) work in security: [https://lcamtuf.blogspot.com/2016/08/so-you-want-to-work-in-security-but-are.html](https://lcamtuf.blogspot.com/2016/08/so-you-want-to-work-in-security-but-are.html)








