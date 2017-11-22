---
author: Quincy Larson
authorTwitter: https://twitter.com/ossia
authorFacebook: https://facebook.com/10100956570023241
title: "360 million reasons to destroy all passwords"
subTitle: "Remember Myspace? A hacker just put the login information for 360 million Myspace accounts (emails and their passwords) up for sale. Thes..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*mL04Mh-tDosU6_OlqexwyQ.jpeg
url: https://medium.freecodecamp.org/360-million-reasons-to-destroy-all-passwords-9a100b2b5001
id: 360-million-reasons-to-destroy-all-passwords-9a100b2b5001
date: 2016-06-02T18:26:25.107Z
tags: [
  "Security",
  "Tech",
  "Technology",
  "Web Development",
  "Social Media"
]
---
# 360 million reasons to destroy all passwords



![](https://cdn-images-1.medium.com/max/1600/1*mL04Mh-tDosU6_OlqexwyQ.jpeg)

There’s only one thing to do when you see password logic this dense. Hadouken!



Remember Myspace? A hacker just put the login information for 360 million Myspace accounts (emails and their passwords) up for sale. These are the accounts of real life human beings who are in many cases are still using these email-password combinations on other websites.

And this is the same week that we heard about hackers putting 117 million email-password combinations from LinkedIn up for sale. And 65 million email-password combinations from Tumblr.

So stop reading and change your passwords. Seriously.

Change your [LinkedIn password](http://bit.ly/1TY2EPz).

Then, if you’ve ever had a Tumblr account, change your [Tumblr password](http://bit.ly/1XjlU10).

Then, if used Myspace back in the day, change your [MySpace password](http://bit.ly/1Uw0Zn8).

Now, go and change your password for every other website where you might have used one of those passwords.











* * *







Welcome back. Is that a new haircut?

OK, now that you’ve changed all those passwords, tell me: how secure were your passwords? Can you even still remember them?

If you’re using a password manager like LastPass, great — it will remember your passwords for you. It will even generate “high entropy” passwords, where the sun will burn out before someone could crack it (50-character strings of random letters, numbers, and symbols).

But what about when you’re on your phone, or on someone else’s computer? Do you really want to install LastPass just to be able to log into LinkedIn on another device?

Oh, and in case you missed it, [LastPass got hacked recently](http://lifehacker.com/lastpass-hacked-time-to-change-your-master-password-1711463571). That’s right — even companies whose core value proposition is security can still get hacked.

> There are two types of companies: those who have been hacked, and those who don’t yet know they have been hacked. — John Chambers

OK — you didn’t use a password manager. Instead, you came up with a really secure password. You used symbols, a number, and even an uppercase letter (which is a huge effort considering how much everyone hates to press the shift key).

But now you can’t remember this complicated new password very easily.

It’s cool. We’ll just come up with some really long passwords that are easy to remember, but hard to guess.



![](https://cdn-images-1.medium.com/max/1600/1*7v6djGHv-AC6Jeg9I5Eamg.png)



As appealing as the above XKCD approach may seem, random common words aren’t any easier to remember, and are harder to type correctly, according to a [Carnegie Mellon University study](https://cups.cs.cmu.edu/soups/2012/proceedings/a7_Shay.pdf).

OK, so numbers, symbols, and uppercase letters it is. Gosh, these are still so hard to remember. Just write it down on a sticky note, and stick it to the bezel of our monitor with all of your other passwords, for easy reference.

Just kidding. Everyone knows that writing a password down is the most dangerous thing you can do, right? Right?

Actually, there’s something that’s even worse. It’s using the same password on more than one website. Because this means that if one of those websites gets hacked, the hackers can use that same password to break into your accounts on other websites.

But since creating and remembering multiple passwords is inconvenient, [more than half of people](https://www.telesign.com/resources/research-and-reports/telesign-consumer-account-security-report/) use the same passwords on multiple sites.

#### I forgot my password.

88% of people have [forgotten at least one password](http://passwordresearch.com/stats/statistic243.html) recently, and have had to go reset it.

Here’s what happens when you forget a password:

1.  You go to a website, click the “forgot password” button, and type in your email address
2.  You open an email from their website and click a magic link they sent you
3.  This magic link takes you back to their website and logs you, then forces you to come up with a new password that meets their password requirements (and every website’s requirements are different)

If you think about this for a moment, you’ll realize that your password does not actually matter. The only thing that matters is that you have access to the email address that’s associated with your account.

Thanks to the password reset functionality that every website uses, every website already supports **passwordless login **— they just don’t call it that.

So wait — if anyone who can access your email account can get into your other accounts without knowing your password, why the heck do we even need passwords?

What if instead of constantly resetting our passwords, we used that same passwordless login that those “forgot password” buttons use, but simply logged in without pestering people to create a new (useless) password?

Here’s what happens on websites that use passwordless login:

1.  You go to their website and type in your email address
2.  You open an email from their website and click a magic link that takes you back to their website and logs you in

Wow. The exact same level of security as a password reset, but you don’t need to spend minutes coming up with a password. And you don’t have to go back in and change this password the next time another major website gets hacked.

Again, the only way someone can break into your account is if they can gain access to your personal email address.

And if they can do that, they can gain access to your other accounts anyway, because your email account is the skeleton key to your life. It’s literally the only website that actually must require a password (and with biometrics and other security innovations, even that password may soon become unnecessary).

> Passwords are a huge inconvenience. The average person has literally spent waking days of their life creating, remembering, and resetting passwords.

> And the ironic thing is that passwords themselves don’t make you more secure — they make you less secure.

#### So why do websites use passwords?

No clue. I think it’s just expected that they use passwords. Maybe it makes people feel more secure. Maybe people think it’s faster to use passwords than than to tab over to their email inbox. It isn’t. In the time it takes to reset one password, you could have used a passwordless login 10 or 20 times.

Most websites never log you out because they know you’ll forget your password, and probably won’t bother signing back in. When was the last time Facebook prompted you for your password?

Microsoft announced this week that they are banning all common passwords. As of 2016, the most common passwords are still “123456” and “password”, with “starwars” and “[ncc1701](https://www.quora.com/What-are-the-most-famous-computer-passwords-in-history/answer/Quincy-Larson)” not far behind them.

#### Destroy all passwords.

[Free Code Camp](https://www.freecodecamp.com/) is getting rid of passwords. We’re going to start just sending you a magic link when you want to sign in for the first time on a new device.

We’re not the first website to do this, either. If you used your email address to sign up for Medium, you probably noticed that they don’t use passwords anymore, either.







![](https://cdn-images-1.medium.com/max/2000/1*9PGIsEtAS2q9LdtL0qm_9Q.jpeg)







So let’s ditch passwords.

The web will be less frustrating. And a whole lot more secure.

If you’re on the fence about this, go change all your passwords.

Really.

You should.

There have been a ton of password breaches just in the past week. [See for yourself](https://haveibeenpwned.com/) whether you’ve been affected by one of them.

After you’ve gone and changed all your passwords, imagine never having to reset a password again, and being more secure — not less secure — because of it.

For more reading on passwordless login, read this excellent article:

[**Passwords are Obsolete**  
_And they make Heartbleed a thousand times worse_medium.com](https://medium.com/p/9ed56d483eb "https://medium.com/p/9ed56d483eb")[](https://medium.com/p/9ed56d483eb)

And for more about the recent hacks:

[**The emergence of historical mega breaches**  
_Over the period of this month, we've seen an interesting trend of data breaches. Any one of these 4 I'm going to talk…_www.troyhunt.com](https://www.troyhunt.com/the-emergence-of-historical-mega-breaches/ "https://www.troyhunt.com/the-emergence-of-historical-mega-breaches/")[](https://www.troyhunt.com/the-emergence-of-historical-mega-breaches/)

Stay safe out there!

_If you liked this, click the💚 below so other people will see this here on Medium._



![](https://cdn-images-1.medium.com/max/1600/1*31StU5CNIHk8VDkSHWO6nA.gif)










